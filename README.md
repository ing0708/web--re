# BIG ONE Electric — Hero Section

A premium, production-ready hero section for **BIG ONE Electric**, maker of
industrial rotary warning lights, signal beacons and factory signal equipment.
Made in Thailand · 30+ years of experience.

Design language: *Industrial Premium* — minimal, editorial, generous white
space, navy + silver brand palette, product as the museum-lit hero.

## Run

It's static — open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Structure

```
index.html               Semantic HTML5 hero
css/styles.css           Design tokens + all styling
js/main.js               Reveal-on-scroll, micro-parallax, scroll cue
assets/
  brand/logo.svg         Full BIG ONE Electric wordmark (recreated as SVG)
  products/
    rotary-amber.svg     Amber rotary beacon — current hero visual
fonts/                   (drop licensed Futura / FC Motorway here)
```

## Swapping in official photography

The hero currently uses a faithful **vector rendition** of the amber rotary
beacon (`assets/products/rotary-amber.svg`) so the page renders perfectly with
zero broken images. To use a real studio photo instead, drop a transparent-PNG
into `assets/products/` and point the hero `<img src>` at it in `index.html`:

```html
<img class="hero__product-img" src="assets/products/rotary-amber.png" ... />
```

Recommended: square-ish transparent PNG/WebP, product centered, ~1200px tall,
no baked-in shadow (the page adds its own soft contact shadow).

The four official colourways — **amber, blue, red, teal** — can each be added
the same way for a future product switcher.

## Typography

Brand spec calls for **Futura** (EN) and **FC Motorway** (Thai). These are
licensed fonts, so the page ships with close web fallbacks loaded from Google
Fonts — **Jost** (geometric, Futura-adjacent) and **Noto Sans Thai**. To use
the real fonts, place the `.woff2` files in `fonts/` and un-comment the
`@font-face` block at the top of `css/styles.css`; it already takes priority in
the font stack.

## Notes

- **Accessibility**: semantic landmarks, skip link, visible focus rings,
  `prefers-reduced-motion` honoured, WCAG-AA contrast.
- **Performance**: no framework, deferred JS, `fetchpriority` on the hero
  visual, SVG art (tiny + crisp at any size).
- **Brand accent colours** (amber/red/blue) are kept to < 10% of the screen so
  the product stays the focus.
