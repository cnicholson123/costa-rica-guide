/* Pura Vida Atenas — content data. Edit freely. All facts carry a `verified`
   date and most carry a `source`. Prices/hours change: always confirm. */
window.CR = window.CR || {};

CR.meta = {
  base: { name: "Atenas, Alajuela", lat: 9.9780, lon: -84.3790 },
  trip: { start: "2026-11-04", end: "2026-11-08", label: "Wed 4 – Sun 8 Nov 2026" },
  verified: "2026-11-02",
};

/* Weather points for Open-Meteo (one batched request). */
CR.weatherPoints = [
  { id: "atenas", name: "Atenas", sub: "Home base · 700 m", lat: 9.978, lon: -84.379 },
  { id: "poas", name: "Poás crater", sub: "2,700 m · clouds by 10 am", lat: 10.197, lon: -84.231 },
  { id: "jaco", name: "Jacó", sub: "Central Pacific coast", lat: 9.615, lon: -84.629 },
  { id: "manuel", name: "Manuel Antonio", sub: "Quepos coast", lat: 9.392, lon: -84.137 },
  { id: "sanjose", name: "San José", sub: "Capital · 1,150 m", lat: 9.933, lon: -84.083 },
];

/* Categories drive the filter chips. */
CR.categories = [
  { id: "all", label: "Everything" },
  { id: "daytrip", label: "Day trips" },
  { id: "nature", label: "Nature & wildlife" },
  { id: "coffee", label: "Coffee" },
  { id: "beach", label: "Beaches" },
  { id: "town", label: "Towns & culture" },
  { id: "eat", label: "Eat & drink" },
  { id: "foodie", label: "Foodie picks" },
  { id: "atenas", label: "In Atenas" },
  { id: "rainy", label: "Rain-proof" },
];

/* Places: every card in the explorer. `drive` is from Atenas by car. */
CR.places = [
{"id": "granodeoro", "name": "Grano de Oro", "cats": ["eat", "foodie", "daytrip"], "diningCity": "sanjose", "tag": "Classic elegance · courtyard dining", "region": "San Bosco, San José", "lat": 9.932, "lon": -84.095, "drive": "≈55–95+ min each way from Colinas del Sol", "mapQuery": "Restaurante Grano de Oro, San Bosco, San José, Costa Rica", "blurb": "Choose this for a gracious, classic dinner: seasonal Costa Rican produce prepared with French-Mediterranean techniques in a Victorian mansion and courtyard.", "detail": ["Best for: an elegant à la carte meal rather than a long tasting menu. The official restaurant highlights aged Costa Rican beef, seasonal seafood and plant-based dishes. Save room for its signature coffee-and-chocolate Grano de Oro pie.", "Official service hours: breakfast 7–10:30 am; lunch 11 am–4 pm; dinner 5–10 pm. Sunday brunch 7 am–1 pm, with lunch from 1:30 pm. Lunch is an easy fit with a San José museum day.", "Book through the official restaurant page or call +506 2255 3322. The restaurant recommends dinner reservations. Consult its linked menus for current pricing; no fixed meal total is quoted here. Confirm dietary needs and taxes. Checked 3 Nov 2026."], "links": [{"label": "Official menus, hours & reservations", "url": "https://www.hotelgranodeoro.com/restaurant/"}], "hours": "Lunch 11–4; dinner 5–10; Sunday lunch from 1:30", "price": "À la carte · current menu linked"},
{"id": "mystique", "name": "Mystique Rooftop · The Retreat", "cats": ["eat", "atenas", "foodie"], "tag": "Local splurge · tasting menu", "region": "The Retreat, Atenas", "lat": 9.98, "lon": -84.43, "drive": "≈20–35 min from Colinas del Sol", "blurb": "The first local table I would investigate for a special dinner: contemporary Costa Rican cooking by chef Pablo Bonilla, with a rooftop setting and a seasonal tasting experience.", "detail": ["Why go: a food-focused evening without driving into San José. The hotel confirms Pablo Bonilla leads Mystique; this recommendation is based on its culinary offering, not a Michelin award or a verified review score.", "OpenTable advertises an eight-course experience at US$120 + 23% per person, or US$265 + 23% with pairing (about US$147.60 / US$325.95). Confirm the menu, inclusions and price for your date before booking.", "Ask about outside-guest access, minimum age, allergies, seating time and return transport. You are staying at Colinas del Sol, so this is a separate hotel outing. The drive estimate is approximate; verify in maps. Checked 3 Nov 2026."], "links": [{"label": "Hotel dining · official", "url": "https://www.theretreatcostarica.com/the-resort/dining"}, {"label": "OpenTable · availability & price", "url": "https://www.opentable.com/r/mystique-rooftop-the-retreat-costa-rica-restaurant-atenas"}], "hours": "Reservation required · confirm service days", "price": "US$120 + 23% (US$147.60 total for food); confirm", "mapQuery": "Mystique Rooftop, The Retreat, Atenas, Costa Rica"},
{"id": "silvestre", "diningCity": "sanjose", "name": "Silvestre · Óptica tasting menu", "cats": ["eat", "foodie", "daytrip"], "tag": "Destination dinner · eight courses", "region": "Barrio Amón, San José", "lat": 9.94, "lon": -84.077, "drive": "≈60–100+ min each way from Colinas del Sol", "blurb": "My pick for a polished tasting-menu evening: seasonal Costa Rican ingredients, fire and storytelling in a historic house. Pair it with your San José culture day.", "detail": ["The official Óptica menu lists eight courses over 2–2½ hours at ₡66,000 (≈US$147.00) per person. Optional pairings: house Silvestre pairing ₡32,000 (≈US$71.27); non-alcoholic ₡16,000 (≈US$35.64); Chef’s Selection ₡38,000 (≈US$84.64). Confirm taxes and service when reserving.", "Recommended by the Costa Rica tourism board among its chef-driven restaurants. This is not a Michelin-starred restaurant.", "Book ahead and disclose dietary restrictions. Allow extra time for city traffic; arrange a driver for wine pairings rather than a late drive back to Atenas. Published menu checked 3 Nov 2026."], "links": [{"label": "Óptica · official menu & pricing", "url": "https://www.restaurantesilvestre.com/en/optica"}, {"label": "Reserve · official", "url": "https://www.restaurantesilvestre.com/reservaciones"}, {"label": "Tourism board recommendation", "url": "https://www.visitcostarica.com/things-to-do/culinary-adventures/chef-driven-restaurants"}], "hours": "Book a confirmed seating", "price": "₡66,000 (≈US$147.00) tasting menu + optional pairing", "mapQuery": "Silvestre, Barrio Amón, San José, Costa Rica"},
{"id": "sikwa", "diningCity": "sanjose", "name": "Sikwa", "cats": ["eat", "foodie", "daytrip"], "tag": "No. 43 · Latin America’s 50 Best 2025", "region": "Los Yoses, San José", "lat": 9.931, "lon": -84.055, "drive": "≈75–110+ min each way from Colinas del Sol", "blurb": "The strongest award-backed foodie choice: Costa Rican Indigenous ingredients and culinary traditions interpreted by Pablo Bonilla and Yerling Aviles.", "detail": ["Latin America’s 50 Best placed Sikwa at No. 43 in 2025 and named it The Best Restaurant in Costa Rica 2025. The award is from 50 Best, not Michelin.", "Choose this for a distinctive sense of place: corn, cacao, regional produce and cooking shaped by relationships with Indigenous communities. Menus evolve; ask what is available for your date.", "Reserve directly; request the current menu, price, dietary accommodations and lunch availability. No current fixed price verified. It is a destination outing, not a nearby Atenas dinner. Arrange return transport if drinking. Checked 3 Nov 2026."], "links": [{"label": "50 Best · verified 2025 accolade", "url": "https://www.the50.com/restaurants/best-in-latin-america/the-list/sikwa.html"}, {"label": "Official website · reservations", "url": "https://www.sikwacostarica.com"}], "hours": "Confirm current lunch/dinner service", "price": "Request current menu & price", "mapQuery": "Sikwa, Los Yoses, San José, Costa Rica"},
{"id": "conservatorium", "name": "Conservatorium", "cats": ["eat", "foodie", "daytrip"], "tag": "Creative grill · closer city alternative", "region": "Ciudad Colón", "lat": 9.915, "lon": -84.239, "drive": "≈40–65+ min each way from Colinas del Sol", "blurb": "A good match for steak and fire-cooking lovers: local ingredients, contemporary plating and an emphasis on carefully aged beef, west of central San José.", "detail": ["The official restaurant describes dry-aged meats matured for 21–100 days. Ask which cuts are available, the serving weight and price before ordering. This is a style-based recommendation; no current ranking or review score is claimed.", "Official hours: Tuesday–Saturday noon–10 pm; Sunday noon–6 pm. Lunch lets you return to Atenas before dark. Confirm holiday changes and availability.", "Reserve through the official site. Current menu cost not verified; ask for a menu and budget before committing. Drive estimate is from Colinas del Sol and can increase in traffic. Checked 3 Nov 2026."], "links": [{"label": "Official site · menu & reservations", "url": "https://conservatoriumcr.com/en/"}], "hours": "Tue–Sat noon–10 pm; Sun noon–6 pm", "price": "À la carte · confirm cut prices", "mapQuery": "Conservatorium, Ciudad Colón, Costa Rica"},
  {
    id: "poas", name: "Poás Volcano National Park", cats: ["daytrip", "nature"],
    tag: "Conditional · check status", region: "Alajuela highlands",
    lat: 10.1975, lon: -84.2310, drive: "≈1 h 45 min · 65 km via Grecia & Alajuela",
    blurb: "One of the world's largest active craters, a milky turquoise acid lake steaming 300 m below the rail. Spectacular when clear, which in November means the first slot of the morning.",
    detail: [
      "STATUS (verified 2 Nov 2026): the CNE declared a green alert on 28 Aug 2026 after increased seismic activity, eruptions and gas. The park stayed open with restrictions: hard hats mandatory on the crater and Sombrilla de Pobre trails, crater lookout capped at 56 people per 20-minute group, daily capacity halved (≈1,064). The park can close at a few hours' notice. Check SINAC and OVSICORI the night before and the morning of.",
      "Tickets are online only via the SINAC reservation system (no gate sales). Foreign adults ≈US$15 + tax, children 2–12 ≈US$5. Pick the earliest slot you can get; cloud rolls in by 10–11 am in the rainy season.",
      "Altitude 2,700 m: bring a warm layer and a rain shell. Gas can irritate asthma sufferers; follow ranger instructions and leave the lookout if told to.",
      "Pair it with La Paz Waterfall Gardens (30 min on) and a strawberry stop at Freddo Fresas in Poasito.",
    ],
    links: [
      { label: "SINAC park page & reservations", url: "https://www.sinac.go.cr/EN-US/ac/accvc/pnvp/Pages/default.aspx" },
      { label: "OVSICORI volcano updates", url: "https://www.ovsicori.una.ac.cr/" },
      { label: "Teletica · CNE green alert (28 Aug 2026)", url: "https://www.teletica.com/sucesos/cne-declara-alerta-verde-en-el-poas-por-aumento-de-actividad-sismica-y-erupciones_416284" },
    ],
    hours: "Timed entry slots, morning. Verify on SINAC.", price: "≈US$15 + tax adults", alert: true,
  },
  {
    id: "lapaz", name: "La Paz Waterfall Gardens", cats: ["daytrip", "nature", "rainy"],
    tag: "Waterfalls · wildlife refuge", region: "Vara Blanca",
    lat: 10.2050, lon: -84.1610, drive: "≈2 h · via Alajuela & Vara Blanca",
    blurb: "Five waterfalls on a cloud-forest canyon trail, plus a rescue-animal park with the best hummingbird garden, butterfly dome and big cats in the Central Valley. Works in rain.",
    detail: [
      "Open daily 8 am–5 pm; buffet lunch 11 am–4 pm. Allow 3–4 hours. Third-party prices for 2026 run ≈US$54–63 per adult; buy direct or at the gate.",
      "The trail is a one-way descent along the river with ~400 steps; a shuttle returns you to the top. Wear grippy shoes.",
      "Natural fit with Poás: do the crater first (clear skies), then descend to the gardens for the afternoon.",
    ],
    links: [{ label: "Official site", url: "https://waterfallgardens.com/" }],
    hours: "Daily 8 am–5 pm", price: "≈US$54–63 adults (3rd-party 2026 listings)",
  },
  {
    id: "carara", name: "Carara National Park", cats: ["daytrip", "nature"],
    tag: "Scarlet macaws · rainforest", region: "Tárcoles, Central Pacific",
    lat: 9.7905, lon: -84.6050, drive: "≈45 min · 40 km via Ruta 27 → Ruta 34",
    blurb: "Where the dry Pacific forest meets wet rainforest. The most reliable place in the country to watch scarlet macaws pair off at dawn and dusk, with a flat universal-access trail that's wonderful in the morning.",
    detail: [
      "Rainy-season hours 8 am–4 pm (7 am from December). Tickets online in advance via SINAC; no walk-up sales. ≈US$10–11 adults.",
      "The Laguna Meándrica trail is typically closed Sept–Oct for flooding; the Universal and Quebrada Bonita trails are open.",
      "Go early: wildlife is most active before 10 am and the heat builds fast. A local guide with a scope (available at the entrance) transforms the visit.",
      "Combine with the Tárcoles crocodile bridge 2 km north and lunch in Jacó or Herradura.",
    ],
    links: [
      { label: "SINAC Carara", url: "https://www.sinac.go.cr/EN-US/ac/acopac/pnc/Pages/default.aspx" },
      { label: "SINAC online reservations", url: "https://serviciosenlinea.sinac.go.cr/" },
    ],
    hours: "8 am–4 pm (Nov)", price: "≈US$10–11 adults",
  },
  {
    id: "tarcoles", name: "Tárcoles Crocodile Bridge", cats: ["daytrip", "nature"],
    tag: "Free · 15-minute stop", region: "Ruta 34, Río Tárcoles",
    lat: 9.8050, lon: -84.6080, drive: "≈45 min · on the way to Jacó",
    blurb: "Dozens of American crocodiles, some over four metres, loaf on the mudbanks beneath the Ruta 34 bridge. Free, famous and genuinely jaw-dropping.",
    detail: [
      "Park in an attended lot on the north side and walk the bridge sidewalk; traffic is fast. Never leave anything visible in the car — this bridge has a long reputation for break-ins.",
      "Mangrove and crocodile boat tours leave from Tárcoles village (≈2 h, US$30–40); good birding, best in the morning.",
    ],
    links: [], hours: "Always open", price: "Free",
  },
  {
    id: "jaco", name: "Jacó & Playa Hermosa", cats: ["daytrip", "beach", "eat"],
    tag: "Closest beach · surf · sunset", region: "Central Pacific",
    lat: 9.6150, lon: -84.6290, drive: "≈1 h · 65 km via Ruta 27 → Ruta 34",
    blurb: "The nearest sand to Atenas: a long grey-gold beach, a lively strip of restaurants, and five minutes south, Playa Hermosa's empty surf and black-sand sunsets.",
    detail: [
      "Rip currents are strong at both beaches; swim near surfers and lifeguard flags, don't swim at Hermosa unless you surf.",
      "Jacó is at its best for a late lunch and a sunset walk. Playa Herradura (10 min north) is calmer for swimming and has a lovely sheltered bay.",
      "Lunch leads: Graffiti Resto Café & Wine Bar (creative), El Hicaco (seafood on the sand), Lemon Zest, Tsunami Sushi. Verify current hours.",
    ],
    links: [{ label: "Google Maps · Jacó restaurants", url: "https://www.google.com/maps/search/restaurants+Jac%C3%B3+Costa+Rica/" }],
    hours: "—", price: "Free beach",
  },
  {
    id: "manuel", name: "Manuel Antonio National Park", cats: ["daytrip", "nature", "beach"],
    tag: "Big day · 2 h 15 min each way", region: "Quepos, Central Pacific",
    lat: 9.3920, lon: -84.1370, drive: "≈2 h 15 min · 130 km via Ruta 27 → Ruta 34",
    blurb: "Costa Rica's postcard: sloths, capuchins and squirrel monkeys in forest that spills onto two of the finest white-sand coves in the country.",
    detail: [
      "Open Wed–Mon 7 am–4 pm, CLOSED TUESDAYS (your Wed 4 Nov onward is fine). Tickets are online only via SINAC, date-specific, and sell out; buy days ahead. ≈US$18 adults, US$5 kids (verify).",
      "Leave Atenas by 5:30 am to arrive for the 7 am opening — wildlife, light and parking all favour the early visitor. Beach areas close by 3 pm.",
      "A licensed guide with a scope (≈US$20–25 pp, at the gate) finds ten times the animals you will.",
      "Food: El Avión (bar in a Fairchild C-123 cargo plane, sunset views), Emilio's Café, Café Milagro. Return drive in daylight; Ruta 34 is unlit.",
    ],
    links: [
      { label: "SINAC Manuel Antonio", url: "https://www.sinac.go.cr/EN-US/ac/acopac/pnma/Pages/default.aspx" },
      { label: "SINAC online reservations", url: "https://serviciosenlinea.sinac.go.cr/" },
    ],
    hours: "Wed–Mon 7 am–4 pm · closed Tue", price: "≈US$18 adults",
  },
  {
    id: "sarchi", name: "Sarchí · oxcart capital", cats: ["daytrip", "town", "rainy"],
    tag: "Crafts · world's largest oxcart", region: "Valverde Vega",
    lat: 10.0900, lon: -84.3480, drive: "≈40 min · via Grecia",
    blurb: "Birthplace of the hand-painted carreta, Costa Rica's national symbol and UNESCO intangible heritage. Watch painters at the Fábrica de Carretas Eloy Alfaro, a workshop powered by a 1920s water wheel.",
    detail: [
      "The central park holds the world's largest oxcart (Guinness-certified, 2006). The pink-and-turquoise church is one of the prettiest in the valley.",
      "Eloy Alfaro's workshop is generally open daily daytime; small painted souvenirs are inexpensive and pack flat. Furniture makers line the main road.",
      "Loop: Grecia (red metal church) → Sarchí → Zarcero → back via Naranjo. All paved.",
    ],
    links: [{ label: "Fábrica de Carretas Eloy Alfaro (Maps)", url: "https://www.google.com/maps/search/F%C3%A1brica+de+Carretas+Eloy+Alfaro+Sarch%C3%AD/" }],
    hours: "Workshops daytime, daily", price: "Free to browse",
  },
  {
    id: "zarcero", name: "Zarcero topiary gardens", cats: ["daytrip", "town"],
    tag: "Surreal hedges · cool air", region: "Alfaro Ruiz, 1,700 m",
    lat: 10.1880, lon: -84.3900, drive: "≈1 h 15 min · via Naranjo",
    blurb: "Parque Francisco Alvarado: an entire plaza of cypress sculpted since 1964 by one gardener, Evangelisto Blanco, into arches, dinosaurs and a dancing couple, in front of a candy-striped church.",
    detail: [
      "Cool mountain town known for cheese and peach preserves; buy both from the shops facing the park.",
      "Combine with Sarchí on the way up and Bajos del Toro waterfalls if you want a longer loop (gravel; 4x4 welcome).",
    ],
    links: [], hours: "Park always open", price: "Free",
  },
  {
    id: "grecia", name: "Grecia's red metal church", cats: ["town", "daytrip"],
    tag: "Quick stop · 30 min", region: "Grecia",
    lat: 10.0730, lon: -84.3130, drive: "≈30 min",
    blurb: "A Gothic church built in 1897 from prefabricated steel plates shipped from Belgium — rust-red, improbable and photogenic. Pleasant main square for a coffee.",
    detail: ["On the natural route to Sarchí, Poás and Zarcero. The Friday-Saturday farmers' fair here is one of the valley's biggest."],
    links: [], hours: "Daylight", price: "Free",
  },
  {
    id: "rescate", name: "Rescate Wildlife Rescue Center (Zoo Ave)", cats: ["daytrip", "nature", "rainy"],
    tag: "Rescued wildlife · 35 min", region: "La Garita, Alajuela",
    lat: 10.0010, lon: -84.2960, drive: "≈35 min · old Ruta 3",
    blurb: "A 14-hectare rescue and release centre with toucans, macaws, sloths, monkeys and tapirs, most of them former pets or injured animals. Honest, well run, good for a wet afternoon.",
    detail: [
      "Open daily, typically 9 am–5 pm. Admission ≈US$30 adults (verify). Shaded paths; 2 hours is enough.",
      "Ten minutes away in La Garita, Fiesta del Maíz serves every form of corn Costa Rica knows (chorreadas, tamales, elotes); a classic road-trip lunch.",
    ],
    links: [{ label: "Official site", url: "https://rescatewildlife.org/" }],
    hours: "Daily ≈9 am–5 pm", price: "≈US$30 adults",
  },
  {
    id: "sanjose", name: "San José museums", cats: ["daytrip", "town", "rainy"],
    tag: "Culture · best rainy-day call", region: "Capital",
    lat: 9.9333, lon: -84.0833, drive: "≈1 h · Ruta 27 (tolls)",
    blurb: "The Pre-Columbian Gold Museum beneath the Plaza de la Cultura, the Jade Museum (the world's largest jade collection), and the gilded 1897 Teatro Nacional. All within a ten-minute walk.",
    detail: [
      "Park in a guarded lot (parqueo) near Plaza de la Cultura; don't street-park. Avoid rush hours (7–9 am, 4–7 pm) on Ruta 27.",
      "Lunch at Mercado Central (open since 1880) for a casado or sopa negra, or Teatro Nacional's Alma de Café.",
    ],
    links: [
      { label: "Museos del Banco Central (Gold)", url: "https://museosdelbancocentral.org/" },
      { label: "Museo del Jade", url: "https://museodeljadeins.com/" },
    ],
    hours: "Museums ≈9 am–5 pm; Teatro tours daily", price: "≈US$15–16 each",
  },
  {
    id: "monteverde", name: "Monteverde cloud forest", cats: ["daytrip", "nature"],
    tag: "Stretch day · 2 h 45 min", region: "Puntarenas highlands",
    lat: 10.3010, lon: -84.8080, drive: "≈2 h 45 min · Ruta 1 → Ruta 606 (now paved)",
    blurb: "Mossy, dripping, bird-rich cloud forest at 1,400 m with hanging bridges and a chance at a resplendent quetzal. Reachable as a long day now that Ruta 606 is paved, but it rewards an overnight.",
    detail: [
      "Only sensible if you're happy with 5½ hours of driving. Ruta 1 at Cambronero reopened 1 Nov 2026 on a single-lane modular bridge; expect slow flow.",
      "Reserves: Monteverde Cloud Forest Reserve (7 am–4 pm), Curi-Cancha (quieter, more light), Selvatura or Sky Walk for hanging bridges.",
    ],
    links: [{ label: "Monteverde Reserve", url: "https://cloudforestmonteverde.com/" }],
    hours: "Reserves 7 am–4 pm", price: "US$25–45 per attraction",
  },
  {
    id: "herradura", name: "Playa Herradura & Punta Leona", cats: ["beach", "daytrip"],
    tag: "Calm bay · sunset", region: "Central Pacific",
    lat: 9.6440, lon: -84.6620, drive: "≈55 min",
    blurb: "A horseshoe bay (herradura) sheltered enough for a real swim, with the Los Sueños marina at its north end. Punta Leona's white-sand coves nearby are inside a private resort.",
    detail: ["Good pairing with Carara: macaws at 8 am, crocodiles at 10:30, swim and lunch here by noon, home before the afternoon clouds build."],
    links: [], hours: "—", price: "Free",
  },

  /* ---- Coffee ---- */
  {
    id: "eltoledo", name: "El Toledo Organic Coffee Tour", cats: ["coffee", "atenas"],
    tag: "Family farm · organic", region: "Atenas hills",
    lat: 9.9550, lon: -84.3900, drive: "≈10–15 min from town",
    blurb: "A small family-run organic farm and roaster. Gabriel Calderón's tour is less a show than a conversation about shade, soil and why they stopped spraying — ending with a cupping of their light, medium and dark roasts.",
    detail: [
      "Lead verified 2 Nov 2026: The Retreat (theretreatcostarica.com) packages this as a 9:45 am–1 pm excursion at US$70 pp including transfer. Booking direct with the farm has historically cost far less (older sources US$15–20; expect more now) — call or WhatsApp +506 8711 1221 (third-party listing) or email cafeeltoledo@gmail.com and confirm times.",
      "Reports list mornings Mon–Sat; roughly 1–2 hours. Wear closed shoes; it's a working hillside farm.",
    ],
    links: [
      { label: "The Retreat · tour listing", url: "https://theretreatcostarica.com/the-resort/tours-excursions/coffee-plantation-tour" },
      { label: "El Toledo on Google Maps", url: "https://www.google.com/maps/search/El+Toledo+Coffee+Tour+Atenas/" },
    ],
    hours: "Mornings, by reservation", price: "Direct booking ≈US$20–35 (confirm) · US$70 via The Retreat",
  },
  {
    id: "eldiamante", name: "Coffee Tour El Diamante (Coopeatenas)", cats: ["coffee", "atenas"],
    tag: "Co-op · plantation to cup", region: "Atenas",
    lat: 9.9790, lon: -84.3830, drive: "In town",
    blurb: "The Atenas coffee cooperative's own tour: plantations, the beneficio, roasting and a tasting among the trees. The co-op has processed the town's beans since 1969.",
    detail: [
      "Verified 2 Nov 2026 from coopeatenas.com: book via the 'Reservar tour' page; phone 2446 5141; office Mon–Fri 8 am–4:45 pm (weekends closed), so reserve on a weekday. Children 6–12 reduced, under 6 free; adult price on request.",
      "The co-op's shop (Supermercado Coopeatenas) sells their roasted beans — the best souvenir in town.",
    ],
    links: [
      { label: "Coopeatenas · Coffee Tour", url: "https://coopeatenas.com/content/27-coffee-tour" },
      { label: "Reservation page", url: "https://coopeatenas.com/content/31-coffeetourreserva" },
    ],
    hours: "By reservation · office Mon–Fri", price: "On request · tel 2446 5141",
  },

  /* ---- In Atenas ---- */
  {
    id: "casita", name: "La Casita del Café", cats: ["eat", "atenas", "coffee"],
    tag: "Breakfast with a view", region: "Calle Real, Atenas–Orotina road",
    lat: 9.9580, lon: -84.4100, drive: "≈8 min west of town",
    blurb: "A hillside café where the valley falls away to the Pacific. Gallo pinto, fresh fruit and the house coffee with the ocean a hazy line on the horizon on clear mornings.",
    detail: [
      "Listed hours: daily 7 am–6 pm (Spinach Guide); an older Tico Times note gives Mon–Fri 7:30 am–6 pm, Sat 8 am–4 pm, Sunday dinners by reservation. Call 2446-0664 to confirm.",
      "Ideal Sunday-morning send-off before the airport run.",
    ],
    links: [{ label: "Google Maps", url: "https://www.google.com/maps/search/La+Casita+del+Caf%C3%A9+Atenas/" }],
    hours: "≈7 am–6 pm (confirm)", price: "Moderate · current menu price unverified",
  },
  {
    id: "mirador", name: "Mirador del Cafetal", cats: ["eat", "atenas"],
    tag: "Sunset dinner · Tico classics", region: "Ruta 3 toward Orotina",
    lat: 9.9540, lon: -84.4200, drive: "≈10 min",
    blurb: "Terrace restaurant above the coffee slopes with the valley and the Gulf of Nicoya below. Casados, arroz con pollo and cold Imperial at sunset — nowhere better to start the trip.",
    detail: ["Wide menu, generous portions, popular with locals on weekends. Arrive by 5 pm for the light; sunset is ≈5:20 pm in November."],
    links: [{ label: "Google Maps", url: "https://www.google.com/maps/search/Mirador+del+Cafetal+Atenas/" }],
    hours: "Lunch & dinner (confirm)", price: "Moderate · current menu price unverified",
  },
  {
    id: "kays", name: "Kay's Gringo Postres", cats: ["eat", "atenas"],
    tag: "Expat institution · brunch", region: "Atenas",
    lat: 9.9800, lon: -84.3800, drive: "In town",
    blurb: "American-style breakfasts, pies and strong coffee; the social hub of the Atenas expat community for two decades. Useful for local intel over pancakes.",
    detail: ["Typically mornings to mid-afternoon; closed some days — check Google Maps."],
    links: [{ label: "Google Maps", url: "https://www.google.com/maps/search/Kay%27s+Gringo+Postres+Atenas/" }],
    hours: "Mornings–afternoon", price: "Budget · current menu price unverified",
  },
  {
    foodie: true, mapQuery: "Elevé Restaurant Barons Resort Atenas Costa Rica", id: "eleve", name: "Elevé at Barons Resort", cats: ["eat", "atenas", "town", "foodie"],
    tag: "Thu 5 & Fri 6 Nov · 4–5:30 pm", region: "Sabana Larga, Atenas",
    lat: 9.9700, lon: -84.3600, drive: "≈10–20 min from Colinas del Sol",
    blurb: "Atenas's new monthly art series opens during your stay: Terry Eldridge's mixed-media show 'Colors of Costa Rica', with welcome drink and chef's bite at the opening receptions.",
    detail: [
      "Verified via Tico Times (18 Oct 2026, sponsored): receptions Thu 5 and Fri 6 Nov 2026, 4:00–5:30 pm; free admission; on view through 29 Nov daily 1–9 pm. Reserve by WhatsApp +506 8827-7698. Venue: Residencial Vista Atenas lote 59, Sabana Larga.",
    ],
    links: [{ label: "Official dining & reservations", url: "https://sites.google.com/view/elev-restaurant/home" }, { label: "Tico Times announcement", url: "https://ticotimes.net/2026/10/18/atenas-launches-gallery-nights-a-different-artist-every-month-with-the-central-valley-as-a-backdrop" }],
    hours: "Receptions 4–5:30 pm", price: "Gallery entry free (US$0); dinner priced separately",
  },
  {
    id: "feria", name: "Feria del Agricultor (Friday market)", cats: ["atenas", "town", "eat"],
    tag: "Fridays 6 am–2 pm", region: "Downtown Atenas",
    lat: 9.9790, lon: -84.3790, drive: "In town",
    blurb: "The weekly farmers' fair: pipas (drinking coconuts), mamón chino, star fruit, hot tortillas, cheese from Zarcero and local honey. Friday 6 Nov is your market morning.",
    detail: ["Bring small colón notes and a bag. Best before 9 am. The Saturday version in Grecia is bigger if you miss it."],
    links: [], hours: "Fri 6 am–2 pm", price: "—",
  },
  {
    id: "central", name: "Parque Central & Iglesia San Rafael", cats: ["atenas", "town"],
    tag: "Town centre stroll", region: "Atenas",
    lat: 9.9780, lon: -84.3795, drive: "In town",
    blurb: "A leafy plaza, the white parish church, ice-cream from the kiosk and the slow rhythm of a coffee town. The Monumento al Boyero celebrates the oxcart drivers who built the place.",
    detail: ["Evenings are the time: locals promenade, the church lights up and the air drops to a perfect 72 °F."],
    links: [], hours: "Always", price: "Free",
  },
  {
    id: "antano", name: "Local sodas & restaurants in town", cats: ["eat", "atenas"],
    tag: "Where locals eat", region: "Atenas",
    lat: 9.9785, lon: -84.3785, drive: "In town",
    blurb: "Leads from directories and expat reviews (verify hours): Antaño (traditional Costa Rican), Chicharronera Don Yayo (chicharrón and pork), Parrillada Androvetto (grill), Al Gusto (Italian), Pizza Olivera and Pizzería La Finca (pizza), Soda El Típico (chifrijo), Balcón del Café (views, Wi-Fi), La Trilla (Tico).",
    detail: ["Order a casado anywhere a soda is busy at noon: rice, beans, plantain, salad, a protein, ≈₡5,000–7,000 (≈US$11.14–15.59)."],
    links: [{ label: "Google Maps · Atenas restaurants", url: "https://www.google.com/maps/search/restaurants+Atenas+Alajuela/" }],
    hours: "Varies", price: "Budget–moderate · current menu price unverified",
  },
  {
    id: "freddo", name: "Freddo Fresas & Poás-road eateries", cats: ["eat", "daytrip"],
    tag: "Strawberries · on the Poás road", region: "Poasito / Fraijanes",
    lat: 10.1500, lon: -84.2100, drive: "On the way up to Poás",
    blurb: "Strawberry milkshakes, strawberries with cream and hearty mountain breakfasts at Freddo Fresas in Poasito; Jaulares and Chubascos nearby do wood-fired trout and tortillas.",
    detail: ["Open from early morning — a good breakfast before a 8 am crater slot."],
    links: [], hours: "From ≈7 am", price: "Budget · current menu price unverified",
  },
  {
    id: "fiestamaiz", name: "Fiesta del Maíz, La Garita", cats: ["eat", "daytrip"],
    tag: "Corn everything · roadside", region: "La Garita, Alajuela",
    lat: 10.0010, lon: -84.2800, drive: "≈30 min · old Ruta 3",
    blurb: "A roadside institution since the 1970s: chorreadas with sour cream, tamales, pozol, elotes and corn ice-cream. Pure Tico road-trip food on the old highway toward Alajuela.",
    detail: ["Cash and cards. Busy Sundays. Pairs with Rescate Wildlife next door."],
    links: [], hours: "Daily, daytime", price: "Budget · current menu price unverified",
  },
];

/* Itinerary */
CR.itinerary = [
  {
    date: "2026-11-04", day: "Wednesday", title: "Arrive & settle into the valley",
    theme: "Gentle first day. Afternoon showers are likely; keep it close.",
    plan: [
      { t: "Arrival", text: "SJO → Atenas is 45–55 min via Ruta 27 (tolls, carry colones) or the slower, prettier old Ruta 3 through La Garita." },
      { t: "Afternoon", text: "Stock up at Supermercado Coopeatenas (grab their roasted coffee), then walk the Parque Central and Iglesia San Rafael.", ref: "central" },
      { t: "Admin", text: "Book online now: Poás slot (if open) for Thu, Carara for Sat, and Manuel Antonio if you choose the big day. Check SINAC status for Poás.", ref: "poas" },
      { t: "Sunset", text: "Dinner at Mirador del Cafetal by 5 pm for the light over the Gulf of Nicoya.", ref: "mirador" },
    ],
  },
  {
    date: "2026-11-05", day: "Thursday", title: "Volcano, waterfalls & an art opening",
    theme: "Highlands day. Earliest start of the trip, back by 4 pm.",
    plan: [
      { t: "5:30 am", text: "Leave Atenas. Breakfast of strawberries and coffee at Freddo Fresas in Poasito.", ref: "freddo" },
      { t: "8 am", text: "Poás crater slot — IF open. Helmets mandatory, 20 minutes at the rail, dress warm. If closed, go straight to La Paz.", ref: "poas" },
      { t: "10:30 am", text: "La Paz Waterfall Gardens: hummingbirds, the aviary, then the waterfall trail. Buffet lunch.", ref: "lapaz" },
      { t: "2 pm", text: "Return via Vara Blanca–Alajuela (watch for fog on the mountain road)." },
      { t: "4 pm", text: "Gallery Nights opening reception at Elevé, Barons Resort (4–5:30 pm, free). Reserve by WhatsApp. Stay for dinner.", ref: "eleve" },
    ],
  },
  {
    date: "2026-11-06", day: "Friday", title: "Market morning, coffee & the craft towns",
    theme: "Atenas at its most local, then the Sarchí–Zarcero loop.",
    plan: [
      { t: "7 am", text: "Feria del Agricultor downtown: fruit, cheese, tortillas, pipas.", ref: "feria" },
      { t: "9 am", text: "Coffee tour: El Toledo (organic, family) or El Diamante (co-op). Both need a reservation — El Diamante's office is weekdays only.", ref: "eltoledo" },
      { t: "12:30 pm", text: "Drive north: Grecia's red church (30 min) → Sarchí oxcart workshops (lunch) → Zarcero topiary park and cheese.", ref: "sarchi" },
      { t: "Alt.", text: "Rain-proof swap: Rescate Wildlife + Fiesta del Maíz in La Garita.", ref: "rescate" },
      { t: "Evening", text: "Second Gallery Nights reception if you missed Thursday, or dinner in town.", ref: "eleve" },
    ],
  },
  {
    date: "2026-11-07", day: "Saturday", title: "Down to the Pacific",
    theme: "Macaws, crocodiles, sea. Choose the near version or the big day.",
    plan: [
      { t: "6:45 am", text: "Leave for Carara; be at the gate for 8 am opening. Hire a guide with a scope.", ref: "carara" },
      { t: "10:30 am", text: "Tárcoles crocodile bridge (attended parking, nothing left in the car).", ref: "tarcoles" },
      { t: "Noon", text: "Swim at Playa Herradura, lunch in Jacó, then sunset at Playa Hermosa. Home by 7 pm.", ref: "jaco" },
      { t: "BIG DAY", text: "Instead: leave 5:15 am for Manuel Antonio's 7 am opening (tickets pre-bought), beach till 2 pm, sunset at El Avión, home ≈8:30 pm.", ref: "manuel" },
    ],
  },
  {
    date: "2026-11-08", day: "Sunday", title: "Slow morning & departure",
    theme: "One last valley view, then the airport.",
    plan: [
      { t: "7:30 am", text: "Breakfast at La Casita del Café with the ocean on the horizon.", ref: "casita" },
      { t: "Buffer", text: "Allow 1 h to SJO plus 15 min for the Ruta 27 toll plaza; refuel in Atenas (gas stations on Ruta 3). Return the car with the tank as agreed." },
      { t: "Tip", text: "Sunday morning traffic is light. If the flight is late, Sarchí is 40 min off the route for last souvenirs." },
    ],
  },
];

/* History essays */
CR.history = [
  {
    title: "The road to the sea",
    body: "Atenas exists because of a road. In the 1840s coffee from the Central Valley travelled west by oxcart along the Camino de Mulas and later the Camino Real to Puntarenas, and the broad ridge where Atenas now sits was the last cool, flat stop before the plunge to the Pacific lowlands. Carreteros rested their oxen here; a chapel, then a village, grew around them. The canton was formally created on 7 August 1868 as the fifth canton of Alajuela, its name borrowed from the Greek capital in the neo-classical fashion of the young republic.",
  },
  {
    title: "Boyeros and the painted cart",
    body: "The boyero — the oxcart driver — is the town's patron figure, honoured in the Monumento al Boyero on the central park and in the Día del Boyero every spring. The brightly painted carreta, born in nearby Sarchí around 1900 when wheelwrights began decorating hubs and panels with sunbursts and flowers, became Costa Rica's national labour symbol in 1988 and was inscribed by UNESCO as intangible cultural heritage in 2005.",
  },
  {
    title: "Rails, then asphalt",
    body: "In 1910 the Ferrocarril al Pacífico finally linked San José to Puntarenas, with a station at Atenas and the dramatic steel bridge over the Río Grande gorge just east of town. The railway killed the oxcart trade but tied Atenas to the capital. The Ruta 27 toll highway, opened in 2010, repeated the trick for the car: Atenas became an hour from San José and the airport, and a favourite retirement town for North Americans and Europeans.",
  },
  {
    title: "The best climate in the world?",
    body: "Atenas's proudest claim is that National Geographic once named it the best climate on Earth. Nobody has ever produced the article, and the town's own Clima Festival (begun in 2003) cheerfully celebrates the legend rather than the citation. The underlying truth holds: at 700 m on a Pacific-facing ridge, Atenas sits below the Central Valley's cloud and above the coast's heat — mornings around 68 °F, afternoons near 84 °F, year-round.",
  },
  {
    title: "Coffee country",
    body: "Coffee arrived in the valley in the early 1800s and remains the landscape here: shaded rows on every slope, the Coopeatenas cooperative (founded 1969) buying the harvest. November is the start of the picking season — you will see families with baskets on the hills and cherries drying in the beneficios. Small organic farms like El Toledo represent a quiet counter-movement to the volume trade.",
  },
];

/* News — every item dated and sourced. Oldest-first order is handled by app. */
CR.news = [
  {
    date: "2026-11-02", source: "The Tico Times",
    url: "https://ticotimes.net/2026/11/02/costa-rica-cambronero-highway-reopens",
    title: "Route 1 reopens at Cambronero after two-month closure",
    text: "Traffic resumed Sunday 1 Nov on the Inter-American Highway between San Ramón and Esparza, closed since 7 Sept when a truck struck the temporary bridge. It is still a single-lane modular bridge; expect slow flow. Detour traffic that had been pushed onto Ruta 27 should ease. Relevant if you consider Monteverde.",
    tags: ["roads"],
  },
  {
    date: "2026-10-21", source: "Q Costa Rica (IMN forecast)",
    url: "https://qcostarica.com/when-will-the-2026-rainy-season-begin-to-recede/",
    title: "When will the 2026 rainy season recede?",
    text: "The IMN expects the rainy season to withdraw from the North Pacific in early November and from the Central Valley several weeks later. A dry pattern was projected for 2–8 November across the country — your exact dates — though short intense downpours remain possible, and the Central Valley may see intermittent rain for much of the month.",
    tags: ["weather"],
  },
  {
    date: "2026-10-22", source: "The Tico Times",
    url: "https://ticotimes.net/2026/10/22/costa-rica-first-cold-push-winds-rain-2026",
    title: "First cold push of the season brings wind and rain",
    text: "A weak cold push brought gusts of 20–35 km/h to the Central Valley and rain to the Caribbean. The IMN notes the rainy season has not officially ended; drivers in mountain areas should expect fog and slippery roads.",
    tags: ["weather", "roads"],
  },
  {
    date: "2026-10-18", source: "The Tico Times (sponsored)",
    url: "https://ticotimes.net/2026/10/18/atenas-launches-gallery-nights-a-different-artist-every-month-with-the-central-valley-as-a-backdrop",
    title: "Atenas launches Gallery Nights",
    text: "Elevé Restaurant at Barons Resort starts a monthly art series. Opening receptions Thu 5 and Fri 6 Nov, 4–5:30 pm, free, featuring Terry Eldridge. On view through 29 Nov daily 1–9 pm. WhatsApp +506 8827-7698.",
    tags: ["atenas", "events"],
  },
  {
    date: "2026-10-02", source: "Drink Tea & Travel (guide, updated)",
    url: "https://drinkteatravel.com/poas-volcano-national-park-guide-costa-rica/",
    title: "Poás open with new restrictions since late-August eruption",
    text: "Secondary source: the park reopened 28 Aug with a 1,064/day cap, groups of 56 for 20 minutes at the lookout, mandatory helmets and online-only reservations. Confirm on SINAC before driving up.",
    tags: ["poas"],
  },
  {
    date: "2026-08-28", source: "Teletica",
    url: "https://www.teletica.com/sucesos/cne-declara-alerta-verde-en-el-poas-por-aumento-de-actividad-sismica-y-erupciones_416284",
    title: "CNE declares green alert at Poás after increased seismic activity and eruptions",
    text: "The emergency commission, with SINAC, kept the park open with restrictions: helmets on the crater and Sombrilla de Pobre trails, lookout capacity reduced to 56, daily visitors halved. The alert remains the framing for any Poás visit — treat it as conditional.",
    tags: ["poas"],
  },
  {
    date: "2026-06-26", source: "The Tico Times",
    url: "https://ticotimes.net/2026/06/26/costa-rica-cuts-tolls-on-main-road-to-jaco-and-central-pacific",
    title: "Tolls cut on the main road to Jacó and the Central Pacific",
    text: "Headline only (article text not reviewed): Ruta 27 / Costanera tolls were reduced from July 2026. Expect ₡200–1,000 (≈US$0.45–2.23) per plaza for a light vehicle; cash in colones is simplest.",
    tags: ["roads"],
  },
];

/* Practical */
CR.practical = {
  emergency: [
    { label: "All emergencies (police, fire, ambulance)", value: "911", tel: "911" },

  ],
  driving: [
    "Carry your passport or a copy with the entry stamp, your licence, and the rental papers. Police checkpoints are routine; stop, be polite, hand over documents.",
    "Never pay a fine roadside. Tickets are paid through banks or the rental company. Real officers do not ask for cash.",
    "Ruta 27 (San José–Caldera) is tolled at several plazas including Atenas; pay cash in colones (cards sometimes accepted) or use the rental's Telepase/QuickPass transponder if fitted.",
    "Old Ruta 3 through Monte del Aguacate between Atenas and Orotina is scenic but foggy and slow; avoid at night.",
    "Afternoon rain: slow down, roads are oily and drains overflow. Mountain fog on the Poás and Vara Blanca roads can be total — use low beams.",
    "Don't drive river crossings or unknown gravel after rain even with 4x4. Your 4x4 is for rutted farm roads and steep driveways, not rivers.",
    "Speed limits: 40 km/h towns, 60–80 rural, 80–100 on Ruta 27. Radar is common on Ruta 27 and Ruta 34. Motorcycles weave; check mirrors before any turn.",
    "In an accident: do not move the vehicles. Call 911 and the rental company; wait for Tránsito and the INS inspector.",
    "Fuel: stations in Atenas on Ruta 3; full-service, fixed national price, pay cash or card. Fill up before Carara/Jacó days.",
    "Sunset is ≈5:20 pm and it is fully dark by 6. Plan to be off rural roads by then.",
  ],
  safety: [
    "Petty theft from parked cars is the main risk. Leave nothing visible — Tárcoles bridge, Jacó beachfront and trailheads are known spots. Use attended parqueos.",
    "Rip currents kill more visitors than anything else. At Jacó and Hermosa swim only where surfers are, never alone, and respect red flags.",
    "Poás: follow rangers; gas can irritate eyes and lungs. Asthmatics bring an inhaler.",
    "Tap water in Atenas and the Central Valley is safe. Use repellent at dusk on the coast (dengue is present).",
    "Sun at 10°N is fierce even when overcast: hat, SPF 50, 2 litres of water per person on hikes.",
    "Don't feed or touch wildlife. Keep food zipped at Manuel Antonio — raccoons and capuchins are expert thieves.",
    "Colones (₡) are preferred for small purchases. Dollar acceptance and merchant exchange rates vary; ask before paying. USD estimates use the 3 Nov 2026 BCCR reference buying rate reported by CRDeclara: 448.98 colones per US dollar. Card and cash rates may differ. ATMs at Banco Nacional and BCR on the Atenas park.",
    "For minor symptoms, ask a licensed pharmacist (farmacéutico) for advice. The CCSS clinic and Red Cross are in town; serious cases go to Alajuela or CIMA.",
  ],
  pack: ["Light rain shell", "Warm layer for Poás (50 °F possible)", "Closed walking shoes + sandals", "Binoculars", "Power bank", "Small colón notes", "Dry bag for phone", "Reef-safe SPF 50", "Repellent", "Copy of passport with entry stamp"],
};
