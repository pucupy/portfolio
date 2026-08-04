# Alejandro Velázquez — portfolio

Static site, self-contained HTML pages. No build step, no dependencies, no network calls at render time — every image and font is embedded in the page that uses it.

## Deploy to GitHub Pages

1. Push the contents of this folder to the repository root (or to `docs/`).
2. Settings → Pages → deploy from that branch and directory.
3. `index.html` is the entry point. `.nojekyll` is included so nothing is filtered by Jekyll.

Add your CV at `cv/cv.pdf` — the nav and hero link to `https://pucupy.github.io/portfolio/cv/cv.pdf`.

## Pages

| File | Page |
|---|---|
| `index.html` | Home — career timeline and the selected work list |
| `about.html` | About |
| `hosted-pages.html` | Case study 01 — Yapily Hosted Pages |
| `console.html` | Case study 02 — Console self-serve onboarding |
| `design-systems.html` | Case study 03 — Custard, Mark and Yapily UI |
| `research-practice.html` | Case study 04 — Research practice |
| `headbox.html` | Case study 05 — HeadBox, inverting a marketplace |
| `su4erheroes.html` | Earlier work — Su4erheroes, the consultancy years |
| `creative-archive.html` | Creative archive |

## Interactive artefacts

All are linked from their case studies and open in a new tab.

| File | What it is |
|---|---|
| `embeds/design-system-reference.html` | **The canonical design system artefact.** Foundations, components and patterns as live markup with their token specs, plus the Custard, Mark and shared-core views. |
| `embeds/custard-payment-journey.html` | The twenty-one hosted screens — payment, account access, mobile and failure states. |
| `embeds/hosted-pages-prototype.html` | **Hosted pages user flows.** The clickable end-to-end journey in two viewpoints — phone (app opens in place) and desktop (QR handoff to a phone, then pick-up). |
| `embeds/console-screens.html` | The Console self-serve screens — sandbox welcome, applications, theming and analytics. |
| `embeds/yapily-homepage-mark.html` | The Yapily marketing homepage built in Mark, the brand system. |

## Not linked from the site

| File | Why it is here |
|---|---|
| `design-system-instructions.html` | Working brief for creating and reviewing a design system. Not in the nav and marked `noindex` — an extra to hand to someone who asks, not a portfolio page. |
| `design-system/` | Machine-readable export of the same system (token CSS, component `.d.ts` and `.prompt.md` files, `SKILL.md`) for use with AI tooling. Not a second design system — the same one, in a format a model can read. `embeds/design-system-reference.html` is the human-facing version. |

## Notes

- Pages carry their assets inline, so file sizes are large (`creative-archive.html` ~4MB — the GIFs can't be compressed without losing animation). First load is a single request per page; nothing lazy-loads from elsewhere.
- Each page unpacks its embedded assets in the browser, so **JavaScript is required**; a static monogram splash and a quiet "Loading" indicator show while assets are prepared, and the splash doubles as the no-JS fallback. Every page also ships a static text-only version of its content for crawlers and no-JS readers.
- Do not hand-edit these files. Edit the `.dc.html` sources in the design project and re-export.
- Exported 4 August 2026 — all ten pages and five embeds rebuilt from source.
- All pages and embeds carry `noindex, nofollow, noarchive, noimageindex`, and `robots.txt` disallows everything — the site is deliberately not search-indexable.
