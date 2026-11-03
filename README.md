<img src="assets/icon.svg" width="64" height="64" alt="">

# Costa Rica

Created in [T3 Code](https://t3.codes).

## Atenas & Beyond — travel field guide

Static site (no build step): `index.html`, `css/styles.css`, `js/data.js` (all content), `js/app.js`.
Content is researched and dated in `js/data.js`; weather is fetched client-side from Open-Meteo.

- Preview locally: `python3 -m http.server 8765` then open http://localhost:8765/
- Validate: `node tests/validate.mjs`
- Hero artwork: drop `assets/costa-rica-hero.png` in place; the CSS gradient fallback is used until it exists.
- Deployed via GitHub Pages from `main`.
