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
- **You can set the location** from the control panel, including a "Use my
  location" button. The original was wired to a fixed spot near SFO; that's
  still the default.

## Pages

- `/` — the display (the canvas). A faint gear in the bottom-right opens the
  controls.
- `/control` — the control panel: location, calibration, themes, labels,
  filters, sky options, palette, etc. Open it on the same screen or on a phone
  pointed at the same URL.

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

## Setting your location

Open **/control → Location**. Type a latitude/longitude, or tap **Use my
location** (the browser will ask permission). The sky (sun/moon/stars/ISS) and
the overhead query both follow this point. Defaults to near SFO.

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
- **Airport overlay.** The runway overlay is the SFO layout from the original
  project. If you move the location far away it just sits off-screen; you can
  also turn it off under **Overlays → Airport runways**. Swapping in a different
  airport means editing `src/display/airports.ts`.
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
