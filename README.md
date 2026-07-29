# Alejandro Velázquez — portfolio

Static site, seven self-contained HTML pages. No build step, no dependencies, no network calls — every image is embedded in the page that uses it.

## Deploying to GitHub Pages

Copy the contents of this folder into the repository root (or a `docs/` folder), then enable Pages for that branch and directory. `index.html` is the entry point.

Add your CV at `cv/cv.pdf` — the nav and hero both link to `https://pucupy.github.io/portfolio/cv/cv.pdf`.

## Pages

| File | Page |
|---|---|
| `index.html` | Home — career timeline and 11 selected work entries |
| `about.html` | About |
| `hosted-pages.html` | Case study 01 — Yapily Hosted Pages |
| `console.html` | Case study 02 — Console self-serve onboarding |
| `design-systems.html` | Case study 03 — Custard, Mark and Yapily UI |
| `research-practice.html` | Case study 04 — Research practice |
| `creative-archive.html` | Creative archive |

## Notes

- `creative-archive.html` is ~4MB; the GIFs can't be compressed without losing animation.
- To change anything, edit the `.dc.html` sources in the design project and re-export. Don't edit these compiled files by hand.
