# BIG ONE ELECTRIC — Rotary Warning Light Showcase

A premium, dark-mode / cyberpunk single-page showcase for the **BIG ONE
ELECTRIC** rotary warning light line. Re-imagines industrial safety equipment
as high-tech precision: deep-black canvas, navy brand accent, and four glowing
neon "spectrum signals" (Amber, Blue, Green, Red).

Built with **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion**,
deployable on **Vercel**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
# production
npm run build && npm run start
```

## Structure

```
app/
  layout.tsx         Fonts (Orbitron / Space Grotesk / Prompt), metadata, theme
  page.tsx           Section assembly
  globals.css        Design tokens, neon helpers, engineering-grid background
components/
  Nav.tsx            Fixed nav with logo + "Add LINE" CTA
  Hero.tsx           High-impact hero (tagline + product)
  Beacon.tsx         Product render — luminous light-pod + rotating rotary sweep
  Innovation.tsx     Editorial "Smart / Nerd / Flexible / Practical" grid (hover metadata)
  Spectrum.tsx       Interactive product switcher + spec grid + sizes table
  CTA.tsx            Closing "Add LINE" call to action
  Footer.tsx         Logo, spectrum legend, contact
lib/
  products.ts        Colourways, sizes, specs, LINE URL  ← single source of truth
public/
  brand/logo-dark.svg  Brand wordmark (luminous variant for dark UI)
```

## ⚠️ Product photos (required)

The four product shots are referenced by **exact filename** from
`lib/products.ts` and must live at the root of `public/`:

| Colourway | Path                              |
| --------- | --------------------------------- |
| Amber     | `public/light-amber-left.png.jpg` |
| Blue      | `public/light-blue-left.png.jpg`  |
| Green     | `public/light-green-left.png.jpg` |
| Red       | `public/light-red-left.png.jpg`   |

Drop the real studio photos at those paths. They are displayed with
`object-contain` (no distortion). Because the official photos ship on a **white
studio background**, `Beacon.tsx` presents each one inside a luminous white
"light-pod" whose radial falloff is matched by an image mask — so the white
background melts seamlessly into a glowing orb instead of showing as a hard
white rectangle on the dark page. Transparent PNGs work too.

> These binary photo files are **not** committed to the repo — add them to
> `public/` (or let the deploy pipeline provide them) before building.

## Configuration

- **LINE link** — edit `LINE_URL` in `lib/products.ts` (used by every CTA).
- **Specs / sizes / colours** — all driven from `lib/products.ts`.

## Design system

- **Background**: pure black → charcoal, faint engineering grid + navy vignette.
- **Brand accent**: dark navy `#15598C` (from the corporate logo); luminous
  `#3FA9F5` glow on the logo for the high-tech look.
- **Illumination accents**: Amber `#FFB732`, Blue `#4E78F0`, Green `#18C9A6`,
  Red `#FF4D4D`.
- **Type**: Orbitron / Space Grotesk (EN), Prompt (TH).
- **Motion**: Framer Motion entrance reveals, hover micro-interactions, smooth
  crossfade product switching; honours `prefers-reduced-motion`.

## Deploy (Vercel)

Push the repo and import into Vercel — zero config (framework auto-detected).
Ensure the four product photos are present in `public/` so the build ships them.
