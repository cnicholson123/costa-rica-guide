/* Atenas & Beyond — app logic. No build step, no dependencies. */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = Object.fromEntries(CR.places.map((p) => [p.id, p]));
  const TZ = "America/Costa_Rica";

  /* ---------- bookmarks ---------- */
  const KEY = "cr-saved-v1";
  let saved = new Set();
  try { saved = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (_) {}
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify([...saved])); } catch (_) {} };
  function toggleSave(id) { saved.has(id) ? saved.delete(id) : saved.add(id); persist(); renderSaved(); syncStars(); }
  function syncStars() {
    $$("[data-star]").forEach((b) => b.setAttribute("aria-pressed", saved.has(b.dataset.star) ? "true" : "false"));
    const c = $("[data-saved-count]"); if (c) { c.textContent = saved.size; c.hidden = saved.size === 0; }
  }

  /* ---------- helpers ---------- */
  const artClass = (p) => p.alert ? "art-volcano" : p.cats.includes("coffee") ? "art-coffee" : p.cats.includes("beach") ? "art-beach" : p.cats.includes("eat") ? "art-eat" : p.cats.includes("town") ? "art-town" : "art-nature";
  const ridge = `<svg class="ridge" viewBox="0 0 400 100" preserveAspectRatio="none"><path d="M0 70 C60 40 110 30 160 50 S260 90 320 55 S380 30 400 45 V100 H0Z"/></svg>`;
  const mapLinks = (p) => {
    const { lat, lon } = p; const q = encodeURIComponent(p.name + ", Costa Rica");
    return `<div class="maps">
      <a href="https://www.google.com/maps/dir/?api=1&destination=${p.mapQuery ? encodeURIComponent(p.mapQuery) : `${lat},${lon}`}${p.cats.includes("foodie") ? "&origin=Hotel%20Colinas%20del%20Sol%2C%20Atenas%2C%20Costa%20Rica" : ""}&travelmode=driving" target="_blank" rel="noopener">Google Maps<small>directions</small></a>
      <a href="https://maps.apple.com/?daddr=${p.mapQuery ? encodeURIComponent(p.mapQuery) : `${lat},${lon}`}&q=${q}" target="_blank" rel="noopener">Apple Maps<small>directions</small></a>
      <a href="https://waze.com/ul?${p.mapQuery ? `q=${encodeURIComponent(p.mapQuery)}` : `ll=${lat},${lon}`}&navigate=yes" target="_blank" rel="noopener">Waze<small>navigate</small></a>
    </div>`;
  };
  const starBtn = (id) => `<button class="star" type="button" data-star="${id}" aria-pressed="${saved.has(id)}" aria-label="Save ${esc(byId[id].name)}"><svg viewBox="0 0 24 24"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/></svg></button>`;

  function cardHTML(p) {
    return `<article class="card" data-id="${p.id}">
      <div class="card-art ${artClass(p)}">${ridge}<span class="card-tag ${p.alert ? "is-alert" : ""}">${esc(p.tag)}</span>${starBtn(p.id)}</div>
      <div class="card-body">
        <h3>${esc(p.name)}</h3>
        <div class="card-meta"><span>${esc(p.region)}</span><span>${esc(p.drive)}</span></div>
        <p class="card-blurb">${esc(p.blurb)}</p>
      </div>
      <div class="card-foot">
        <button class="pill more" type="button" data-open="${p.id}">Details</button>
        <a class="pill" href="https://www.google.com/maps/dir/?api=1&destination=${p.mapQuery ? encodeURIComponent(p.mapQuery) : `${p.lat},${p.lon}`}${p.cats.includes("foodie") ? "&origin=Hotel%20Colinas%20del%20Sol%2C%20Atenas%2C%20Costa%20Rica" : ""}&travelmode=driving" target="_blank" rel="noopener">Directions</a>
      </div>
    </article>`;
  }

  /* ---------- explore: chips + cards ---------- */
  let activeCat = "all", filterText = "";
  const explorePlaces = CR.places.filter((p) => !(p.cats.includes("eat") && !p.cats.includes("daytrip") && !p.cats.includes("coffee")) || p.cats.includes("town"));
  function renderChips() {
    $("[data-chips]").innerHTML = CR.categories.map((c) => `<button class="chip" role="tab" type="button" data-cat="${c.id}" aria-selected="${c.id === activeCat}">${esc(c.label)}</button>`).join("");
  }
  function matches(p) {
    const catOk = activeCat === "all" || p.cats.includes(activeCat);
    if (!catOk) return false;
    if (!filterText) return true;
    const hay = [p.name, p.tag, p.region, p.blurb, ...(p.detail || [])].join(" ").toLowerCase();
    return hay.includes(filterText);
  }
  function renderCards() {
    const list = (activeCat === "eat" ? CR.places : explorePlaces).filter(matches);
    $("[data-cards]").innerHTML = list.map(cardHTML).join("");
    $("[data-empty]").hidden = list.length > 0;
    syncStars();
  }
  function renderEat() {
    $("[data-eat-cards]").innerHTML = CR.places.filter((p) => p.cats.includes("eat")).sort((a, b) => Number(b.cats.includes("foodie")) - Number(a.cats.includes("foodie"))).map(cardHTML).join("");
  }
  function renderSaved() {
    const list = [...saved].map((id) => byId[id]).filter(Boolean);
    $("[data-saved-cards]").innerHTML = list.map(cardHTML).join("");
    $("[data-saved-empty]").hidden = list.length > 0;
  }

  /* ---------- detail sheet ---------- */
  const sheet = $("[data-sheet]");
  function openSheet(id) {
    const p = byId[id]; if (!p) return;
    $("[data-sheet-body]").innerHTML = `
      <div class="sheet-art ${artClass(p)}">${ridge}<span class="card-tag ${p.alert ? "is-alert" : ""}">${esc(p.tag)}</span><button class="sheet-close" type="button" data-close aria-label="Close">×</button></div>
      <div class="sheet-body">
        <p class="kicker">${esc(p.region)}</p>
        <h2>${esc(p.name)}</h2>
        <div class="card-meta"><span>${esc(p.drive)}</span></div>
        <p class="blurb">${esc(p.blurb)}</p>
        <div class="facts"><div class="fact"><b>Hours</b>${esc(p.hours || "—")}</div><div class="fact"><b>Cost</b>${esc(p.price || "—")}</div></div>
        <div class="detail">${(p.detail || []).map((d) => `<p class="${/^STATUS/.test(d) ? "status" : ""}">${esc(d)}</p>`).join("")}</div>
        ${mapLinks(p)}
        <div class="links">${(p.links || []).map((l) => `<a class="pill" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}
          <button class="pill" type="button" data-star="${p.id}" aria-pressed="${saved.has(p.id)}">${saved.has(p.id) ? "★ Saved" : "☆ Save"}</button></div>
      </div>`;
    if (typeof sheet.showModal === "function") sheet.showModal(); else sheet.setAttribute("open", "");
  }
  sheet.addEventListener("click", (e) => { if (e.target === sheet || e.target.closest("[data-close]")) sheet.close(); });

  /* ---------- itinerary ---------- */
  function renderItinerary() {
    $("[data-itinerary]").innerHTML = CR.itinerary.map((d) => {
      const dt = new Date(d.date + "T12:00:00");
      return `<li class="day">
        <div class="day-date"><span class="dow">${esc(d.day)}</span><span class="num">${dt.getDate()} <small style="font-size:.4em;vertical-align:.9em;letter-spacing:.1em">NOV</small></span><p class="theme">${esc(d.theme)}</p></div>
        <div><h3>${esc(d.title)}</h3><ul class="plan">${d.plan.map((s) => `<li><span class="t ${/big/i.test(s.t) ? "big" : ""}">${esc(s.t)}</span><span>${esc(s.text)} ${s.ref && byId[s.ref] ? `<button class="ref" type="button" data-open="${s.ref}">${esc(byId[s.ref].name)} →</button>` : ""}</span></li>`).join("")}</ul></div>
      </li>`;
    }).join("");
  }

  /* ---------- history / news / practical ---------- */
  function renderHistory() { $("[data-history]").innerHTML = CR.history.map((h) => `<article class="essay"><h3>${esc(h.title)}</h3><p>${esc(h.body)}</p></article>`).join(""); }
  function fmtDate(iso) { return new Date(iso + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }); }
  function renderNews() {
    const items = [...CR.news].sort((a, b) => b.date.localeCompare(a.date));
    $("[data-news]").innerHTML = items.map((n) => `<article class="news-item">
      <div class="when">${fmtDate(n.date)}<span class="src">${esc(n.source)}</span></div>
      <h3>${esc(n.title)}</h3><p>${esc(n.text)}</p>
      <div class="tags">${n.tags.map((t) => `<span class="${t}">${esc(t)}</span>`).join("")} <a class="src-link" href="${esc(n.url)}" target="_blank" rel="noopener">Read source ↗</a></div>
    </article>`).join("");
    $$("[data-verified]").forEach((el) => el.textContent = fmtDate(CR.meta.verified));
  }
  function renderPractical() {
    const P = CR.practical;
    $("[data-emergency]").innerHTML = P.emergency.map((e) => `<li><span>${esc(e.label)}</span><a href="tel:${esc(e.tel)}">${esc(e.value)}</a></li>`).join("");
    $("[data-driving]").innerHTML = P.driving.map((t) => `<li>${esc(t)}</li>`).join("");
    $("[data-safety]").innerHTML = P.safety.map((t) => `<li>${esc(t)}</li>`).join("");
    const PK = "cr-pack-v1"; let packed = new Set(); try { packed = new Set(JSON.parse(localStorage.getItem(PK) || "[]")); } catch (_) {}
    $("[data-pack]").innerHTML = P.pack.map((t, i) => `<li><label><input type="checkbox" data-pack-item="${i}" ${packed.has(i) ? "checked" : ""}><span>${esc(t)}</span></label></li>`).join("");
    $("[data-pack]").addEventListener("change", (e) => { const i = +e.target.dataset.packItem; e.target.checked ? packed.add(i) : packed.delete(i); try { localStorage.setItem(PK, JSON.stringify([...packed])); } catch (_) {} });
  }

  /* ---------- alerts ---------- */
  function renderAlerts() {
    $("[data-alerts]").innerHTML = `
      <div class="alert volcano"><span class="dot"></span><div><h4>Poás Volcano: conditional</h4><p>CNE green alert since 28 Aug 2026 after eruptions and seismic activity; park open with helmets, reduced capacity and timed online entry, but it can close at short notice. Check <a href="https://www.sinac.go.cr/EN-US/ac/accvc/pnvp/Pages/default.aspx" target="_blank" rel="noopener">SINAC</a> and <a href="https://www.ovsicori.una.ac.cr/" target="_blank" rel="noopener">OVSICORI</a> before you drive up. <button class="ref" type="button" data-open="poas" style="background:none;border:0;padding:0;color:inherit;text-decoration:underline;cursor:pointer;font:inherit">Details →</button></p></div></div>
      <div class="alert"><span class="dot"></span><div><h4>Roads: Ruta 1 Cambronero reopened 1 Nov, single lane</h4><p>Only matters for Monteverde or Guanacaste. Ruta 27 and Ruta 34 to the coast are normal; carry colones for tolls. <a href="https://ticotimes.net/2026/11/02/costa-rica-cambronero-highway-reopens" target="_blank" rel="noopener">Tico Times, 2 Nov 2026</a>.</p></div></div>`;
  }

  /* ---------- weather (Open-Meteo) ---------- */
  const WMO = {
    0: ["☀️", "Clear"], 1: ["🌤️", "Mostly clear"], 2: ["⛅", "Partly cloudy"], 3: ["☁️", "Overcast"],
    45: ["🌫️", "Fog"], 48: ["🌫️", "Rime fog"], 51: ["🌦️", "Light drizzle"], 53: ["🌦️", "Drizzle"], 55: ["🌧️", "Heavy drizzle"],
    61: ["🌦️", "Light rain"], 63: ["🌧️", "Rain"], 65: ["🌧️", "Heavy rain"], 80: ["🌦️", "Showers"], 81: ["🌧️", "Showers"], 82: ["⛈️", "Violent showers"],
    95: ["⛈️", "Thunderstorm"], 96: ["⛈️", "Storm, hail"], 99: ["⛈️", "Storm, hail"],
  };
  const wx = (c) => WMO[c] || ["🌡️", "—"];
  const inTrip = (iso) => iso >= CR.meta.trip.start && iso <= CR.meta.trip.end;
  const dow = (iso) => new Date(iso + "T12:00:00").toLocaleDateString("en-US", { weekday: "short" });

  function weatherFallback(msg) {
    $("[data-weather]").innerHTML = `<div class="weather-status error"><strong>Live weather unavailable.</strong> ${esc(msg)}<br><br>
      <strong>What November normally does in Atenas:</strong> clear mornings around 66–70 °F, warm afternoons near 82–86 °F, a build of cloud after noon with a 40–60 % chance of a shower or storm between 2 and 6 pm, tapering through the month. Poás is 50–59 °F and clouds over by 10 am. The coast is 86 °F+ and humid.<br><br>
      Official forecast: <a href="https://www.imn.ac.cr/" target="_blank" rel="noopener">IMN</a>. Reload to retry.</div>`;
    $("[data-weather-foot]").textContent = "";
  }

  async function loadWeather() {
    const pts = CR.weatherPoints;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${pts.map((p) => p.lat).join(",")}&longitude=${pts.map((p) => p.lon).join(",")}` +
      `&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,sunrise,sunset` +
      `&timezone=${encodeURIComponent(TZ)}&forecast_days=7&temperature_unit=fahrenheit`;
    const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 9000);
    try {
      const r = await fetch(url, { signal: ctrl.signal });
      if (!r.ok) throw new Error("HTTP " + r.status);
      let data = await r.json(); if (!Array.isArray(data)) data = [data];
      renderWeather(pts, data);
    } catch (e) {
      weatherFallback(e.name === "AbortError" ? "Open-Meteo did not respond in time." : "Could not reach Open-Meteo (" + e.message + ").");
    } finally { clearTimeout(t); }
  }

  function renderWeather(pts, data) {
    const html = pts.map((p, i) => {
      const d = data[i]; if (!d || !d.current) return "";
      const [ico, desc] = wx(d.current.weather_code);
      const days = d.daily.time.map((iso, k) => {
        const [di] = wx(d.daily.weather_code[k]);
        return `<div class="wx-day ${inTrip(iso) ? "trip" : ""}" title="${iso}"><div class="d">${dow(iso)}</div><div class="i">${di}</div><div class="hi">${Math.round(d.daily.temperature_2m_max[k])}°F</div><div class="lo">${Math.round(d.daily.temperature_2m_min[k])}°F</div><div class="rain">💧${d.daily.precipitation_probability_max?.[k] ?? "–"}%</div></div>`;
      }).join("");
      if (i === 0 && d.daily.sunset?.[0]) { const s = d.daily.sunset[0].slice(11, 16); const el = $("[data-sun]"); if (el) el.textContent = s; }
      return `<section class="wx ${i === 0 ? "primary" : ""}"><div class="wx-head"><h3>${esc(p.name)}</h3><small>${esc(p.sub)}</small></div>
        <div class="wx-now"><span class="icon">${ico}</span><span class="temp">${Math.round(d.current.temperature_2m)}°F</span><span class="desc">${desc}<br>Humidity ${d.current.relative_humidity_2m}% · wind ${Math.round(d.current.wind_speed_10m)} km/h${d.current.precipitation > 0 ? ` · ${d.current.precipitation} mm now` : ""}</span></div>
        <div class="wx-days">${days}</div></section>`;
    }).join("");
    $("[data-weather]").innerHTML = html || "";
    if (!html) return weatherFallback("Open-Meteo returned no data.");
    const now = new Date().toLocaleString("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" });
    $("[data-weather-foot]").textContent = `Updated ${now} Costa Rica time (UTC−6). Highlighted days are your trip. Rain % is the day's maximum probability; in November most of it falls after 2 pm.`;
  }

  /* ---------- search ---------- */
  const dialog = $("[data-search-dialog]"), sInput = $("[data-search-input]"), sRes = $("[data-search-results]");
  const index = [
    ...CR.places.map((p) => ({ k: "Place", n: p.name, s: p.blurb, hay: [p.name, p.tag, p.region, p.blurb, ...(p.detail || [])].join(" "), go: () => openSheet(p.id) })),
    ...CR.itinerary.map((d) => ({ k: d.day, n: d.title, s: d.plan.map((x) => x.text).join(" "), hay: [d.title, d.theme, ...d.plan.map((x) => x.text)].join(" "), go: () => location.hash = "#itinerary" })),
    ...CR.history.map((h) => ({ k: "History", n: h.title, s: h.body, hay: h.title + " " + h.body, go: () => location.hash = "#history" })),
    ...CR.news.map((n) => ({ k: "News · " + fmtDate(n.date), n: n.title, s: n.text, hay: [n.title, n.text, n.source].join(" "), go: () => window.open(n.url, "_blank", "noopener") })),
    ...CR.practical.driving.map((t) => ({ k: "Driving", n: t.slice(0, 70) + (t.length > 70 ? "…" : ""), s: t, hay: t, go: () => location.hash = "#practical" })),
    ...CR.practical.safety.map((t) => ({ k: "Safety", n: t.slice(0, 70) + (t.length > 70 ? "…" : ""), s: t, hay: t, go: () => location.hash = "#practical" })),
    ...CR.practical.emergency.map((e) => ({ k: "Emergency", n: e.label, s: e.value, hay: e.label + " " + e.value, go: () => location.hash = "#practical" })),
  ].map((x) => ({ ...x, hay: x.hay.toLowerCase() }));
  function runSearch(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { sRes.innerHTML = ""; return; }
    const terms = q.split(/\s+/);
    const hits = index.filter((x) => terms.every((t) => x.hay.includes(t))).slice(0, 20);
    sRes.innerHTML = hits.length ? hits.map((h, i) => `<button class="sr" type="button" data-hit="${i}"><span class="k">${esc(h.k)}</span><span class="n">${esc(h.n)}</span><span class="s">${esc(h.s)}</span></button>`).join("") : `<div class="sr"><span class="s">No matches for “${esc(q)}”.</span></div>`;
    sRes._hits = hits;
  }
  sInput.addEventListener("input", () => runSearch(sInput.value));
  sRes.addEventListener("click", (e) => { const b = e.target.closest("[data-hit]"); if (!b) return; dialog.close(); sRes._hits[+b.dataset.hit].go(); });
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  function openSearch() { if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open", ""); sInput.value = ""; sRes.innerHTML = ""; setTimeout(() => sInput.focus(), 50); }
  $$("[data-open-search]").forEach((b) => b.addEventListener("click", openSearch));
  document.addEventListener("keydown", (e) => { if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); openSearch(); } if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); } });

  /* ---------- global delegation ---------- */
  document.addEventListener("click", (e) => {
    const star = e.target.closest("[data-star]"); if (star) { toggleSave(star.dataset.star); if (star.classList.contains("pill")) star.textContent = saved.has(star.dataset.star) ? "★ Saved" : "☆ Save"; return; }
    const open = e.target.closest("[data-open]"); if (open) { openSheet(open.dataset.open); return; }
    const chip = e.target.closest("[data-cat]"); if (chip) { activeCat = chip.dataset.cat; renderChips(); renderCards(); }
  });
  $("[data-filter-input]").addEventListener("input", (e) => { filterText = e.target.value.trim().toLowerCase(); renderCards(); });

  /* ---------- hero bits ---------- */
  function hero() {
    $("[data-trip-label]").textContent = CR.meta.trip.label;
    const img = new Image(); img.onload = () => $("#hero").classList.add("has-image"); img.src = "assets/costa-rica-hero.png";
    const start = new Date(CR.meta.trip.start + "T06:00:00-06:00"), end = new Date(CR.meta.trip.end + "T12:00:00-06:00"), now = new Date();
    const el = $("[data-countdown]"); const lbl = el.nextElementSibling;
    if (now < start) { const d = Math.ceil((start - now) / 864e5); el.textContent = d + (d === 1 ? " day" : " days"); }
    else if (now <= end) { el.textContent = "Now"; lbl.textContent = "you're there · pura vida"; }
    else { el.textContent = "Done"; lbl.textContent = "trip complete"; }
  }

  /* ---------- scroll-spy ---------- */
  function spy() {
    const links = $$(".topnav a, .tabbar a"); const secs = $$("main .section, #today");
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((en) => { if (!en.isIntersecting) return; const id = "#" + en.target.id; links.forEach((a) => a.getAttribute("href") === id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")); });
    }, { rootMargin: "-40% 0px -50% 0px" });
    secs.forEach((s) => io.observe(s));
  }

  /* ---------- boot ---------- */
  renderAlerts(); renderChips(); renderCards(); renderEat(); renderSaved(); renderItinerary(); renderHistory(); renderNews(); renderPractical(); hero(); spy(); syncStars();
  loadWeather();
})();
