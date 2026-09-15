repo: marella/material-symbols
branch: main
path: svg/400/outlined

## Last sync
date: 2026-08-19T11:52:33Z

### Updated in this project
- Replaced all 77 icon path definitions in `icon-paths.json` with authoritative Material Symbols geometry (weight 400, outlined).
- Every previously stored path was incorrect; `webhook` was the visibly broken one that surfaced the problem.
- `expand_more` sourced from `keyboard_arrow_down.svg`; `phonelink_lock` is not in the repo and was left as-is.
- Re-inlined the corrected paths across Console Screens, Hosted Pages In Detail, Hosted Pages Prototype, the design system reference and the Hosted Pages case study (398 occurrences).

## Screen map
| Screen | Built from |
| --- | --- |
| `Console Screens.dc.html` | `svg/400/outlined/*.svg` via `icon-paths.json` |
| `Hosted Pages In Detail.dc.html` | `svg/400/outlined/*.svg` via `icon-paths.json` |
| `Hosted Pages Prototype.dc.html` | `svg/400/outlined/*.svg` via `icon-paths.json` |
| `design-system-reference.dc.html` | `svg/400/outlined/*.svg` via `icon-paths.json` |
| `hosted-pages.dc.html` | `svg/400/outlined/close.svg` |
