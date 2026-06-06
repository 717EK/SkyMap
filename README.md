# Skylight (web / no-hardware build)

Real-time tracker that draws the aircraft passing overhead — plus the live sky
(sun, moon, stars, ISS & visual satellites) — onto a full-screen canvas. This is
a **website build** of [cpaczek/skylight](https://github.com/cpaczek/skylight),
re-architected to run with **no hardware**: instead of an RTL-SDR radio it pulls
flights from the public [airplanes.live](https://airplanes.live) API. It's a
plain Vite app plus a few serverless functions, so it deploys to Vercel as-is.

The original project is meant to be projected onto a ceiling. This build works
the same way but is just as happy in a normal browser tab or full-screen on a
TV.

## What's different from the original

- **No radio / Raspberry Pi.** Flight data comes from airplanes.live's public
  point API (`/v2/point/{lat}/{lon}/{r}`). The hardware (dump1090) path is gone.
- **No WebSocket server.** The browser polls a small serverless proxy
  (`/api/aircraft`) about once a second; the renderer interpolates between
  updates so motion stays smooth.
- **Settings live in your browser**, not on a server (see "Per-device settings"
  below).
- **In-app settings overlay.** The gear on the display opens a translucent
  settings panel over the live view (the app stays visible behind it) — no need
  to leave the page.
- **You can set the location** — type lat/lon or tap "Use my location". The
  default is **near Delhi (Indira Gandhi International, DEL)**.
- **All Indian airports** are bundled and drawn to scale at their true position
  (the original shipped only SFO).

## Pages

- `/` — the display (the canvas). Buttons in the bottom-right:
  **install** (appears when your browser can install the app), **use my
  location**, **full-screen**, and **settings** (the gear, which opens the
  in-app overlay).
- `/control` — the same control panel as a standalone page. Handy for opening on
  a phone pointed at the same URL, or as the app's "Controls" shortcut. (The
  in-app overlay and this page edit the same settings.)

## Install it as an app

Skylight is a PWA, so you can install it and run it in its own window (no
browser tabs/address bar) — on desktop or as a home-screen app on a phone.

- **In-app:** when your browser supports it (desktop Chrome/Edge, Android
  Chrome), an **install button** appears in the bottom-right of the display —
  tap it.
- **Desktop (Chrome/Edge):** or use the install icon in the address bar (⋮ menu
  → *Install Skylight*).
- **iOS Safari:** Share → *Add to Home Screen* (iOS doesn't surface an in-app
  install button).
- **Android Chrome:** the in-app button, or ⋮ menu → *Install app*.

The app needs the network for live flight data, so it isn't a true offline app —
but the shell is cached, so it launches instantly. There's also a **full-screen**
button on the display for kiosk/projector use.

## Deploy to Vercel

**Option A — from GitHub (easiest)**

1. Push this folder to a new GitHub repo.
2. In Vercel, **Add New → Project** and import that repo.
3. Vercel detects Vite automatically. Leave the defaults (build `npm run build`,
   output `dist`) and **Deploy**. The `/api` functions deploy on their own.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production
```

No environment variables are required.

## Run locally

```bash
npm install
npm run dev
```

Open the printed URL for the display, and `…/control.html` for the controls.
(`npm run dev` serves the control page by filename; the clean `/control` URL is a
production-only nicety. The app links to the right one automatically.) The
`/api/*` functions are served in-process during dev, so you don't need the
Vercel CLI just to develop.

```bash
npm run build      # production build into dist/
npm run preview    # serve the built output
npm run typecheck  # type-check only
```

To install the app from your own machine (rather than the deployed site), run
`npm run build && npm run preview` and install from the preview URL — the service
worker that makes it installable is only active in production builds, not in
`npm run dev`.

## Setting your location

Tap the **use-my-location** button on the display (bottom-right), or open the
**settings → Location** section and type a latitude/longitude. The sky
(sun/moon/stars/ISS) and the overhead query both follow this point. The default
is **near Delhi: 28.528082, 77.152159**.

Your set location is marked at the center of the view with a **breathing green
dot** (a radar-style pulse). Toggle it under **settings → Overlays → My
location**.

## Notes & limits

- **Rate limit.** airplanes.live allows ~1 request/second and is for
  non-commercial use. The `/api/aircraft` proxy sets a short edge-cache so
  several viewers of the same area collapse into a single upstream request, but
  please don't hammer it.
- **Per-device settings.** Config is stored in the browser (`localStorage`) and
  synced live between tabs/windows on the **same device** (e.g. display tab +
  control tab). It does **not** sync across different devices — a phone open to
  `/control` controls only that phone's view, not a separate display machine.
  Cross-device remote control would need a small shared backend (e.g. Vercel KV);
  it's intentionally left out of this build.
- **Airports.** All Indian airports (≈215, from the public-domain
  [OurAirports](https://github.com/davidmegginson/ourairports-data) dataset) are
  bundled and drawn to scale at their true geographic position. When you're
  zoomed in on one, it renders map-style — asphalt strips, dashed centerlines,
  and runway identifier numbers (e.g. Delhi's 09/27, 10/28, 11L/29R, 11R/29L)
  with the airport code and name; zoomed out, runways are thin lines (just like
  Google Maps). Use the **Radius** control to zoom. Toggle the layer under
  **Overlays → Airport runways**. To cover other countries, add entries to
  `src/display/airports.ts` in the same shape (regenerate from OurAirports if you
  like).
- **Enrichment.** Airline names, aircraft types, and routes/registrations are
  filled in from bundled lookup tables plus the public
  [adsbdb](https://www.adsbdb.com/) API (via `/api/route`), cached in your
  browser.

## Stack

TypeScript · React 18 · Vite 6 · astronomy-engine · satellite.js · Vercel
serverless functions.

## Credit

All the hard parts — the renderer, the sky math, the design — are from
[cpaczek/skylight](https://github.com/cpaczek/skylight). This repo only swaps the
data path for the public API and packages it for the web.
