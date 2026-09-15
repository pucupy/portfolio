# Portfolio redesign brief — direction 1C

For rebuilding the portfolio in a duplicated project, leaving the current site untouched.

Companion file: `PORTFOLIO-CONTENT.md` — the full text of all eight pages. Use it verbatim; do not rewrite the copy.

---

## Why this redesign exists

The current portfolio reads as generated. The tells, in order of cost:

1. **The palette.** Near-black `#0B0D0D` plus off-white plus one muted gold is the most common "tasteful AI portfolio" combination there is.
2. **Geist and Geist Mono.** The current default designer-safe typeface, with mono for dates and numerals as a signature.
3. **Uniform rhythm.** All eleven case studies share one template — mono number, title, one-line result, paragraph, arrow link, image slot, hairline rule, 64px padding. No project is given more room than another, so nothing looks like it mattered more.
4. **Negative tracking everywhere** (−0.035em, −0.03em, −0.025em) at weight 500.
5. **The "FOCUSING" preloader.** A loading screen on a static page reads as a trick.
6. **Accent monotony.** The gold does link underlines, numerals, list dashes and focus rings at identical weight — decoration rather than emphasis.
7. **Prose where images should be.** Eleven blocks of writing with empty image placeholders.

Point 7 is the deep one. Reference portfolios that read as human — Mark Hurrell, Josh Lucas, Nuno Coelho — either show the work at full bleed with almost no explanation, or drop images entirely and present a plain competent document. None of them writes case-study prose on the homepage.

Direction 1C keeps the dark register and the gold, and fixes 2, 3, 4, 5 and 6.

---

## The direction

Serif display type at light weight on near-black, with a sans reserved for labels and secondary text. Gold appears three or four times per page, on things that are genuinely emphasis. The avatar mark stays.

### Type

| Role | Face | Spec |
| --- | --- | --- |
| Display, headings, metrics | **Newsreader** | weight 200 for the h1, 300 for headings. Optical sizing on. |
| Labels, nav, body, secondary | **IBM Plex Sans** | 400 and 500 only |

```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..700;1,6..72,300..400&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

Scale:

| Element | Size / weight / tracking |
| --- | --- |
| h1 (name) | Newsreader 84px / 200 / −0.02em / line-height .98 |
| Lead project title | Newsreader 52px / 300 / line-height 1.04 |
| Secondary project title | Newsreader 34px / 300 |
| Metric figure | Newsreader 30px / 400 |
| Lead paragraph | Newsreader 22px / 400 / line-height 1.5 |
| Body | IBM Plex Sans 17px / 400 / line-height 1.62 |
| Secondary body | IBM Plex Sans 16px / 400, `rgba(250,250,250,.62)` |
| Eyebrow / section label | IBM Plex Sans 13px / 400 / +0.14em / uppercase |
| Nav | IBM Plex Sans 14px / 400 |

Rules: no negative tracking below 34px. Newsreader never above weight 400. No mono anywhere.

### Colour

| Token | Value | Use |
| --- | --- | --- |
| Ground | `#0A0A0A` | page background |
| Ink | `#FAFAFA` | primary text |
| Ink 70 | `rgba(250,250,250,.7)` | body copy inside project blocks |
| Ink 62 | `rgba(250,250,250,.62)` | secondary column, one-line descriptions |
| Ink 50 | `rgba(250,250,250,.5)` | date ranges, muted labels |
| Rule | `rgba(250,250,250,.2)` | header and section rules |
| Rule faint | `rgba(250,250,250,.14)` | between project rows |
| Placeholder | `#151515` + `rgba(250,250,250,.16)` border | image wells before art lands |
| **Accent** | `#C9A86A` | see budget below |
| Accent rule | `rgba(201,168,106,.5)` | rule above a metric figure |

**Accent budget — four uses per page, no more.** This is the discipline that separates it from the current site.

1. The active or primary nav item (Contact).
2. The "Selected work" section label.
3. Metric figures on the lead project, with the rule above them.
4. Link hover underline.

Not on: list dashes, body text, arrows, focus rings on body links, project numbers (there are no project numbers). Focus rings use `#FAFAFA`.

### Layout

- Page padding 60px horizontal.
- Header: sticky, avatar mark plus full name at left, four nav items right, 1px bottom rule. 22px vertical padding.
- Hero: 96px top padding. h1, then a two-column intro at 56px gap — left column is the Newsreader lead paragraph, right column is the IBM Plex Sans continuation in Ink 62. Max width 900px on the pair.
- **Selected work is deliberately unequal.** One lead project gets a 52px title, a two-column body-plus-metrics block, and a full-width 340px image well. Every other project is a single row: title left, one-line description right in a 300px column, 34px vertical padding, faint rule between. This is the fix for the uniform-rhythm problem — do not give the others image wells or paragraphs on the homepage.
- Image wells: `#151515`, 1px `rgba(250,250,250,.16)` border, no radius. Vary the aspect ratio between pages; do not settle into one card shape.
- No preloader. The page paints immediately.

### Motion

Hover state on links and rows only: underline colour to `#C9A86A`, 150ms, `cubic-bezier(.4,0,.2,1)`. Nothing enters on scroll. Nothing spins.

---

## What to build

Eight pages, same set as now, same copy from `PORTFOLIO-CONTENT.md`:

| Page | Notes |
| --- | --- |
| `index` | Hero, then Selected work with one lead project and the rest as rows. Footer with email, CV, LinkedIn. |
| `about` | Long-form. Newsreader lead paragraph, IBM Plex Sans body, no images needed. |
| `hosted-pages` | The lead case study. Deserves the most images. |
| `console` | Links once to the interactive Console embed rather than embedding screenshots. |
| `design-systems` | Links to the design-system reference embed. |
| `research-practice` | Text-led. |
| `headbox` | Case study. |
| `creative-archive` | Image-led; the archive is the one place a grid is correct. |

Keep from the current build: the eight-page structure, the nav and footer pattern, the five interactive embeds in `embeds/`, the `/design-system/` specimen, all copy, all WebP assets, `avatar.svg` and `avatar-glasses.svg`.

Drop: the `#0B0D0D`/Geist/Geist Mono styling, the preloader and its glasses animation, the mono numerals `01`–`11`, negative tracking below 34px, and gold on anything outside the four-item budget.

### Still outstanding from the current site

`cv/cv.pdf` does not exist at the repo root, and both the nav and the hero link to it.

---

## Project rules to carry over

From `CLAUDE.md` — these apply to the duplicated project too:

- Never keep an upload filename. Rename to `<subject>-<what-it-shows>.<ext>` in kebab-case, named from what is in the picture rather than what the upload was called.
- `ls` the destination folder before writing; on a collision append `-2`, `-3`, never overwrite.
- Durable copies of source images live in `archive/`.
- Convert large PNG/JPEG to WebP, cap the long edge at 1400px for stills and 1600px for tall artwork. Keep GIFs as GIFs.
- Copy in only the assets a page actually loads.

---

## Directions that were considered and not chosen

Kept here in case they are wanted later.

- **1A Editorial** — Libre Caslon Text and Archivo, olive `#4E6B2A` on cream `#F2F0E6`. Metrics pulled out beside the lead project; remaining projects as a ruled year-list.
- **1B Newsprint** — Vollkorn and Cabin, ink `#171717` on greige `#E9E7E2`, no accent colour at all. Emphasis from weight, rules and columns. Densest option, furthest from any generated look.
- **2A Image stream** — after Mark Hurrell. Career prose, then an irregular mosaic at varied aspect ratios (4:3, 4:3, 16:9, 3:2 beside 3:4, 21:9), then numbered captions decoupled from the images. Only works with six to ten screenshots worth showing large.
- **2B Document** — after Nuno Coelho. No images, no hero. Headed lists: Work Experience, Case Studies, Also, Education. Confidence through plainness.

All four are built out in `Homepage Directions.dc.html`.

### Reference portfolios

Read and useful: mhurrell.co.uk (image-led, no case-study prose, irregular mosaic, numbered captions, funding figures as a plain list), nunocoelho.me (pure CV document, no images, headed lists, dates in italic), joshglucas.com (name, one sentence, three project links, nothing else), kartikrao.in (heavy personal voice, collapsible press timelines, testimonial pull-quotes — a distinctive voice is itself an anti-generic signal).

Not readable — JS-only or unavailable: kaiwei.design, andresvizio.com (Readymag). **carsonyoung.ca is no longer a portfolio; the domain has been taken over by gambling spam.** Remove it from any reference list.
