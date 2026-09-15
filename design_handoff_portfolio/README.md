# Handoff: Alejandro Velázquez — portfolio site

## Overview
A nine-page personal portfolio for a lead product designer working in open banking. Static, dark-themed, editorial in structure: a homepage listing selected work, five long-form case studies, an about page, a creative archive, and one reference document. Four self-contained interactive prototypes are linked from the case studies.

There is no CMS, no build step and no client-side routing. Every page is a standalone HTML document that links to its siblings with relative `.html` hrefs.

## About the design files
The files in `design/` are **design references created in HTML** — prototypes showing intended look and behaviour, not production code to lift wholesale. The task is to recreate these designs in the target codebase's existing environment (React, Astro, Eleventy, plain HTML — whatever the project uses) following its established patterns. If no environment exists yet, a static site generator is the right choice: the content is almost entirely prose and images, and nothing on the page needs a client-side framework.

`design/*.html` are fully inlined single-file bundles: fonts are linked, images are embedded as base64 data URIs. Expect large files (up to ~7 MB). In a real implementation, extract those images back out to an assets directory and serve them normally.

## Fidelity
**High-fidelity.** Final colours, typography, spacing and interactions. Recreate pixel-perfectly. Exact values are listed under Design tokens below.

## Pages

### 1. Homepage — `index.html`
Landing page. Hero (name, one-paragraph positioning, animated illustration to the right), then `Selected work` — five case-study entries; `Before 2011`; `Creative archive`; `Let's chat`.

Layout: single centred column, `max-width:1160px`, `padding:0 32px`. All prose and headings constrained to `max-width:700px` inside that. Hero title and paragraph share the left column; the illustration sits right, bottom-aligned to the paragraph's last baseline, its right edge flush with the nav's right edge.

Each work entry: `h2` title, one-line result, one or two paragraphs, a `Full case study →` link, then a full-width image. Entries separated by a 1px hairline rule at `rgba(237,239,236,.14)` and 80px of top padding.

### 2. About — `about.html`
Sections: What I do · How I lead · Working outside design · Still hands-on · Before Yapily. Includes an animated SVG illustration (a figure at a wall of sticky notes with a mug of coffee) with hand-authored CSS keyframe animation.

### 3–7. Case studies
- `hosted-pages.html` — Yapily Hosted Pages. Problem · My responsibility · Constraints · One flow, more than forty versions of itself · What this meant for how we worked · Decisions · Outcomes · Reflection · Leadership
- `console.html` — Turning a sales-led onboarding into a self-serve one. Eleven sections including a screen-by-screen beta walkthrough
- `design-systems.html` — Design systems at Yapily. Three systems over one token layer
- `research-practice.html` — Research practice at Yapily
- `headbox.html` — Turning a marketplace the right way round

All follow the same skeleton: eyebrow label in accent green, `h1`, standfirst paragraph, then `h2` sections separated by hairline rules. A prev/next nav sits above the footer on case studies.

### 8. Creative archive — `creative-archive.html`
Early illustration, identity and motion work. Sections: Brand and interface studies (4-up grid) · Payfriendz (3-up grid plus one wide image) · Illustration and marks (one wide image, then a 3-up grid of 4:3 tiles with one tall tile spanning three rows) · Scientists (2-up) · Comics and storyboards.

### 9. Design system instructions — `design-system-instructions.html`
A reference document, not a case study: twenty-two sections of written guidance for an AI agent working inside the Yapily design system. Renders as long-form prose with headings and lists.

## Interactive prototypes — `design/embeds/`
Four self-contained HTML prototypes, opened in a new tab from the case studies. Each is live markup built from documented components and tokens — no screenshots.

- `custard-payment-journey.html` — 21 screens of a payment consent flow across three brand themes
- `design-system-reference.html` — tabbed reference for three design systems (Yapily UI, Custard, Mark) with live components
- `console-screens.html` — three viewpoints (signing up, non-customer, customer) across eight destinations, responsive
- `yapily-homepage-mark.html` — marketing homepage built in the Mark design system

Recreate these as routes or as embedded iframes; they don't share the portfolio's chrome.

## Interactions & behaviour
- **Header**: sticky, `top:0`, `z-index:50`, background `rgba(15,18,17,.88)` with `backdrop-filter:blur(14px)`, 1px bottom border `rgba(237,239,236,.09)`. Contains the animated face mark (30px tall) plus name on the left, four links on the right: Work, About, CV, WhatsApp.
- **Skip link**: absolutely positioned off-canvas at `left:-9999px`, moved to `left:0` on `:focus`. Accent background, dark text.
- **Links**: underlined by default with `text-decoration-color:rgba(111,203,146,.5)`, `text-underline-offset:4px`, `text-decoration-thickness:1px`. On hover the underline goes to full accent. `:focus-visible` gets a 2px accent outline at 3px offset.
- **Selection**: `::selection` is accent background on near-black text.
- **SVG animations**: hand-authored CSS keyframes — blinking eyes (`eyel`/`eyer`, 5s ease infinite), a head that travels (`face`, 5s), a rocket with flame and moving stars, coffee steam as marching `stroke-dasharray` dashes (`14 10`, 2.4s, three plumes offset). All wrapped in `@media (prefers-reduced-motion:reduce){ animation:none }`.
- **Loader**: the face mark with animated eyebrows. Not a spinner, and not blocking — if you implement one at all, keep it under the fold of perceived load.
- **Images**: all `loading="lazy"` except above-the-fold.

## Responsive behaviour
Three breakpoints only, all implemented as `!important` overrides on utility classes:
- `@media (max-width:900px)`: `.grid` drops to 2 columns; `.tallspan` row span drops from 3 to 2
- `@media (max-width:600px)`: `.wrap` padding drops to 20px; `.grid` and `.split` go single-column; `.cols` goes single-column; `.tallspan` clears its row span and takes `aspect-ratio:2/5`

Everything else is fluid — headings use `clamp()`, containers use `minmax(0,Npx)`.

## State management
None. The portfolio pages are static documents. The four prototypes in `embeds/` hold local UI state only (active tab, current screen index, selected viewpoint) — no persistence, no data fetching, no auth.

## Design tokens

### Colour
| Token | Hex | Use |
|---|---|---|
| Background | `#0F1211` | Page background, text on accent |
| Foreground | `#EDEFEC` | Body text, headings |
| Muted | `#A2ACA5` | Secondary prose, nav links |
| Dim | `#79837C` | Captions, metadata, timestamps |
| Faint | `#4a5250` | Footer separator dots |
| Accent | `#6FCB92` | Eyebrow labels, link underlines, focus rings, selection, illustration fills |
| Hairline | `rgba(237,239,236,.14)` | Section rules |
| Border | `rgba(237,239,236,.09)` | Header bottom border |
| Tile fill | `rgba(237,239,236,.045)` | Image container backgrounds |
| Header wash | `rgba(15,18,17,.88)` | Sticky header, over blur |

Two legacy illustration colours are kept deliberately, inside the sticky-note artwork only: `#EFDA68` yellow and `#EF68A1` pink. They are not part of the system.

### Typography
Single family: **Schibsted Grotesk** (Google Fonts, weights 400/500/600/700), falling back to `-apple-system, BlinkMacSystemFont, sans-serif`. No monospace anywhere.

| Role | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Page `h1` | `clamp(38px,8vw,68px)` (homepage) / `clamp(38px,7.5vw,60px)` (inner) | 600 | `-0.02em` | 1.05 |
| Section `h2` | `clamp(26px,5vw,34px)` | 600 | `-0.014em` | default |
| Entry `h3` | `clamp(20px,3.6vw,22px)` | 500 | `-0.02em` | default |
| Standfirst | 18px | 400 | — | 1.6 |
| Body | 17px | 400 | — | 1.6–1.65 |
| Nav / links | 15–16px | 400–500 | `-0.005em` | default |
| Eyebrow label | 14px | 500 | `0.1em`, uppercase | default |
| Caption | 14px | 400 | — | 1.5 |

`text-wrap:pretty` on all prose paragraphs.

### Spacing
Container `max-width:1160px`, `padding:0 32px` (20px under 600px). Measure `max-width:700px`. Section top padding 80px; hero 110px top / 72px bottom; footer 120px top / 96px bottom. Grid gaps 20px; column gaps 32–40px. Rule margins `24px 0 32px`.

### Radius
12px on image tiles, 6px on the images inside them, 8px on buttons, 2px on focus outlines.

### Shadow
None. Depth comes from the `rgba(237,239,236,.045)` tile fill and hairline rules only.

## Assets
- `design/images/favicon.svg` — the face mark in accent green on a dark rounded tile, 160×160 viewBox, `rx:34`
- `design/og-card.png` — 1200×630 social card
- `design/cv/cv.pdf` — linked from the nav and the hero
- Face mark SVG (118×146 viewBox) — inline in every page's header, with `animateTransform` on the eyebrow rects
- Three animated illustration SVGs (laptop peek, sticky notes, UX rocket) — recovered from the designer's earlier site, recoloured to the accent, animations intact
- All photography, screenshots and archive artwork are embedded as base64 in the bundled HTML. Extract them to `/assets` in a real implementation.
- **Schibsted Grotesk** is served from Google Fonts. Self-host it if the target project has a font-hosting policy.

## Files
```
design/
  index.html                        homepage
  about.html                        about
  hosted-pages.html                 case study
  console.html                      case study
  design-systems.html               case study
  research-practice.html            case study
  headbox.html                      case study
  creative-archive.html             archive
  design-system-instructions.html   reference document
  embeds/                           four self-contained prototypes
  design-system/                    token and component specimen
  images/favicon.svg
  cv/cv.pdf
  og-card.png
CONTENT.md                          every word on every page, as markdown
```

The full copy for all nine pages is in `CONTENT.md` — use it rather than scraping text out of the bundled HTML.
