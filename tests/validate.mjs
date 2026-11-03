// Structural validation of the static site. Run: node tests/validate.mjs
import { readFileSync } from "node:fs";
import vm from "node:vm";
const root = new URL("..", import.meta.url).pathname;
let fails = 0; const ok = (c, m) => { if (!c) { fails++; console.error("FAIL", m); } else console.log("ok  ", m); };

// Load data.js in a sandbox
const ctx = {}; vm.createContext(ctx);
vm.runInContext("var window = this;\n" + readFileSync(root + "js/data.js", "utf8"), ctx);
const CR = ctx.CR;
ok(CR && CR.places.length >= 20, `places loaded (${CR.places.length})`);
const ids = CR.places.map((p) => p.id);
ok(new Set(ids).size === ids.length, "place ids unique");
const cats = new Set(CR.categories.map((c) => c.id));
for (const p of CR.places) {
  ok(typeof p.lat === "number" && typeof p.lon === "number" && p.lat > 8 && p.lat < 11.3 && p.lon < -82 && p.lon > -86, `${p.id}: coordinates inside Costa Rica`);
  ok(p.cats.every((c) => cats.has(c)), `${p.id}: categories known`);
  ok(p.blurb && p.name && p.drive && p.region, `${p.id}: required fields`);
  for (const l of p.links || []) ok(/^https:\/\//.test(l.url), `${p.id}: link https ${l.url}`);
}
for (const d of CR.itinerary) for (const s of d.plan) if (s.ref) ok(ids.includes(s.ref), `itinerary ref ${s.ref} exists`);
ok(CR.itinerary.map((d) => d.date).join() === "2026-11-04,2026-11-05,2026-11-06,2026-11-07,2026-11-08", "itinerary covers Wed 4 – Sun 8 Nov 2026");
for (const n of CR.news) { ok(/^\d{4}-\d{2}-\d{2}$/.test(n.date) && n.date <= CR.meta.verified, `news dated ≤ verified: ${n.title}`); ok(/^https:\/\//.test(n.url) && n.source, `news sourced: ${n.title}`); }
ok(CR.news.some((n) => n.url.includes("teletica.com") && n.date === "2026-08-28"), "Poás Teletica alert present");
ok(CR.news.some((n) => n.url.includes("qcostarica.com/when-will-the-2026-rainy-season")), "Rainy-season article present");
ok(CR.places.find((p) => p.id === "poas").alert === true, "Poás flagged conditional");
ok(CR.places.some((p) => p.links?.some((l) => l.url.includes("coopeatenas.com/content/27-coffee-tour"))), "El Diamante lead linked");
ok(CR.places.some((p) => p.links?.some((l) => l.url.includes("theretreatcostarica.com"))), "El Toledo lead linked");
ok(CR.places.some((p) => /Casita del Caf/.test(p.name)), "La Casita del Café present");
ok(CR.practical.emergency.some((e) => e.value === "911"), "911 listed");

ok(CR.places.filter(p => p.diningCity === "sanjose").map(p => p.id).sort().join() === "granodeoro,sikwa,silvestre", "San José dining has the three selected restaurants");
const checkCurrency = (value) => {
  if (typeof value === "string") {
    for (const m of value.matchAll(/₡[\d,]+(?:[–-][\d,]+)?/g)) ok(value.slice(m.index + m[0].length).startsWith(" (≈US$"), "colón price includes USD: " + m[0]);
  } else if (value && typeof value === "object") Object.values(value).forEach(checkCurrency);
};
checkCurrency(CR);
// HTML sanity
const html = readFileSync(root + "index.html", "utf8");
checkCurrency(html);
ok(html.includes('id="sanjose-dining"') && html.includes("data-sanjose-dining"), "dedicated San José section present");
for (const sel of ["data-weather", "data-alerts", "data-itinerary", "data-cards", "data-eat-cards", "data-history", "data-news", "data-emergency", "data-driving", "data-safety", "data-pack", "data-saved-cards", "data-search-dialog", "data-sheet", "data-chips"]) ok(html.includes(sel), `index.html has [${sel}]`);
ok(html.includes('name="viewport"') && html.includes("viewport-fit=cover"), "viewport meta with safe-area");
ok(!/sk-|api[_-]?key|token/i.test(html + readFileSync(root + "js/app.js", "utf8")), "no secrets in client code");
const tags = (t) => (html.match(new RegExp(`<${t}[\\s>]`, "g")) || []).length - (html.match(new RegExp(`</${t}>`, "g")) || []).length;
for (const t of ["section", "div", "main", "header", "nav", "dialog", "form", "ul", "ol", "li", "a", "button", "p", "h1", "h2", "h3"]) ok(tags(t) === 0, `balanced <${t}>`);
const css = readFileSync(root + "css/styles.css", "utf8");
ok((css.match(/{/g) || []).length === (css.match(/}/g) || []).length, "CSS braces balanced");
ok(css.includes("costa-rica-hero.png") && css.includes(".hero-fallback"), "hero image reference with CSS fallback");
// app.js parses
try { new vm.Script(readFileSync(root + "js/app.js", "utf8")); ok(true, "app.js parses"); } catch (e) { ok(false, "app.js parses: " + e.message); }
console.log(fails ? `\n${fails} failure(s)` : "\nAll checks passed");
process.exit(fails ? 1 : 0);
