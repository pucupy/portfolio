# Alejandro Velázquez — portfolio

Static site, seven self-contained HTML pages. No build step, no dependencies, no network calls at render time — every image and font is embedded in the page that uses it.

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
| `creative-archive.html` | Creative archive |

## Notes

- Pages carry their assets inline, so file sizes are large (`creative-archive.html` ~4MB — the GIFs can't be compressed without losing animation). First load is a single request per page; nothing lazy-loads from elsewhere.
- Each page unpacks its embedded assets in the browser, so **JavaScript is required**; a static monogram splash shows while unpacking and as the no-JS fallback.
- Do not hand-edit these files. Edit the `.dc.html` sources in the design project and re-export.
- Exported 30 July 2026 — content at the 30 July corrected revision, internal links rewritten to `.html`.
