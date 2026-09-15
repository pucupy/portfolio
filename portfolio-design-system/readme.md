# Portfolio Design System — Alejandro Velázquez

A dark, editorial, type-led system for a personal portfolio site: a long-form home page with a career timeline and eleven numbered work entries, two case-study pages, and an about page. No marketing chrome, no hero imagery behind text, **no cards and no shadows**. Content sits in a single narrow measure inside a wide container, separated by hairline rules.

Deployment target of the source site: GitHub Pages at `pucupy.github.io/portfolio`.

## Importing this design system

Unzip and import the folder as a new project, then set **File type → Design System** in the Share menu so the org can use it. `styles.css` at the root is the entry point — everything it `@import`s (colours, typography, spacing, base) ships to consumers. Fonts are Geist and Geist Mono, pulled from Google Fonts by `tokens/typography.css`; there are no local font binaries to carry.

Foundation cards live in `guidelines/`, component cards alongside their components in `components/core/`, and the two screen recreations in `ui_kits/portfolio/`. `SKILL.md` makes the same folder usable as an Agent Skill in Claude Code.

## Sources this was extracted from

Everything here was lifted from the built portfolio, not designed fresh:

- The live design files (`index`, `hosted-pages`, `console`, `about`) authored in the Omelette design project "Portfolio design".
- `design_handoff_portfolio/README.md` in that project — the developer handoff spec, which is the authority for every numeric value below.
- `avatar.svg` — the real production monogram asset.

Note for anyone syncing this: the earlier `tokens/` folder in the source project described a **different** direction (blue accent, Space Grotesk, `#0a0a0a`). That direction was abandoned. The values in this export match the shipped site: `#0F1211`, gold `#6FCB92`, Geist + Geist Mono.

## Index

| Path | What |
|---|---|
| `styles.css` | Entry point — imports only. Consumers link this one file. |
| `tokens/colors.css` | Ground, four ink tones, one gold accent, two rule weights. |
| `tokens/typography.css` | Schibsted Grotesk, fluid heading clamps, fixed body sizes. |
| `tokens/spacing.css` | Coarse vertical scale, measures, radii, motion. |
| `tokens/base.css` | Resets, body base, link states, selection, focus. |
| `components/core/` | 13 primitives (below). |
| `guidelines/` | 14 foundation specimen cards. |
| `ui_kits/portfolio/` | Home + case-study screens assembled from the tokens. |
| `assets/` | Avatar monogram (two variants) and four case-study diagrams. |

### Components

Shell: `SiteHeader`, `SiteFooter`, `SkipLink`.
Structure: `SectionHeading`, `NarrativeSection`, `WorkEntry`, `TimelineEntry`.
Content: `Eyebrow`, `ImageFrame`, `ImageGrid`, `StatGrid`, `OutcomesCallout`, `LinkRow`.

Intentional additions (not literal components in the source site, extracted because the pattern repeats verbatim): `Eyebrow`, `ImageGrid`, `LinkRow`, `SkipLink`. Everything else maps one-to-one to a block on a real page.

## Visual foundations

**Colour.** Two neutrals and one accent — do not introduce additional hues. Ground `#0F1211`; ink descends `#EDEFEC` → `#A2ACA5` → `#79837C` → `#4a5250` (that last tone is for `·` separators only, never for text). Gold `#6FCB92` appears as mono eyebrows, entry indices, timeline date labels, link underlines, the focus ring, the selection highlight, and exactly one border (the Outcomes callout). Structure is carried by two rules: `rgba(244,246,245,.14)` opens sections and divides stat cells, `rgba(244,246,245,.09)` separates list entries and underlines the header.

**Type.** Schibsted Grotesk for everything. No monospace anywhere: eyebrows, indices, dates and qualifiers are the same grotesk at weight 500, uppercase, with tracking. Weights 400, 500 and 600 — 600 for display headings, 500 for the header name and labels, 400 for all prose. Headings are fluid `clamp()` with negative tracking that tightens as size grows (`-0.035em` at h1, `-0.02em` at small h3); there is no separate mobile type scale, the clamp floor *is* the mobile scale. Body is 17px on 1.6 (1.65 in case studies), leads 18px, UI 15px, mono meta 14px. All prose carries `text-wrap: pretty`.

**Layout.** A 1160px container with 32px side padding (20px under 600px). Prose, headings inside sections, and the footer clamp to a 700px measure; imagery is allowed the full 1160px. That contrast — narrow text, wide images — is the core layout idea. Vertical rhythm is a coarse hand-set scale; 64px between narrative sections and work entries, 80–96px before a new major section, 110–120px page top, 120/96 footer.

**Backgrounds.** Flat ground everywhere. No images behind text, no gradients, no textures, no patterns, no full-bleed photography. The only translucency in the system is the sticky header: `rgba(11,13,13,.88)` over `backdrop-filter: blur(14px)`.

**One card, one button.** The system is otherwise card-free, with one deliberate exception: a *CallToAction* card used only where a page hands off to a live demo or another case study. It is a bordered block (`--gold-border`, 14px radius, `--gold-wash` fill) containing a preview screenshot, an uppercase eyebrow, a green pill button (48px tall, 100px radius, ground-coloured label) and a one-sentence caption beneath the button. The whole card is the anchor. Everything else on the site remains a plain underlined link; inline references mid-sentence are never promoted to buttons.

**Depth.** No shadows anywhere — inner or outer. Elevation is the header blur and a 1px rule. No cards: nothing has a background fill distinct from the ground except a gold-bordered Outcomes callout, and that has no fill either.

**Corners.** Images 12px. Header avatar 6px, about-page avatar 16px. Focus ring 2px. Everything else — callouts, stat grids — is square, deliberately.

**Motion.** One transition in the whole system: `text-decoration-color 120ms ease` on links. No fades, no bounces, no scroll animation, no scroll-triggered header state. Reduced-motion is honoured but has almost nothing to switch off.

**States.** Links rest as ink-coloured text with a 55%-gold underline at 4px offset, 1px thickness; on hover the underline warms to full gold and **the text colour does not change**. Nav links opt out of underlines, sit in `--ink-2`, and brighten to `--ink-1` on hover. Focus-visible is a 2px gold outline at 3px offset with a 2px radius. There are no press states — nothing on the site is a button.

**Imagery.** Product screenshots use `object-fit: contain` so UI is never cropped; photography and scene shots use `cover`. Every image gets a fixed desktop height (560 hero / 520 wide / 460 and 420 in the work list / 400, 380, 340 in grids), 12px radius, `loading="lazy"` below the fold. Colour vibe is cool and dark to sit on the ground; no grain, no duotone. Grids of 2 or 3 collapse to one column at 600px. Reserve dimensions for images that don't exist yet — never ship a visible "drop image here" placeholder.

**Responsive.** A single breakpoint at 600px: container padding drops to 20px, every multi-column grid collapses to one column, type scales via the clamps. The header nav wraps rather than becoming a hamburger — keep that.

## Content fundamentals

**Voice: first person, past tense, plain.** "I led", "I supported", "I rebuilt". No third-person bio voice, no company-brochure "we".

**Casing:** sentence case in headings and titles, always. The only uppercase in the system is mono — eyebrows (`01 — CASE STUDY`) and timeline periods (`2020 — PRESENT`), spaced em dashes, with 0.08–0.1em tracking doing the work.

**Register:** short declarative sentences, concrete nouns, no adjective stacking. Claims are hedged where they should be — targets are named as targets, support is named as support. Nothing is described as revolutionary, seamless, or delightful. There is no "passionate about", no "crafting", no mission statement.

**Structure of a case study:** Problem → My responsibility → Constraints → Decisions (each decision is a heading plus the artefact that proves it) → Outcomes → Reflection → Leadership. Decisions are titled as the thing decided, not the activity ("Bank discoverability", "Language assumptions"), and every one is evidenced by an image or a number.

**Honesty as a house style:** work under NDA gets an italic note in place of imagery rather than a vague mock. Unmet or unmeasured outcomes are labelled as targets.

**Emoji: never.** No emoji anywhere, in any surface.

## Iconography

The site is essentially icon-free, and that is a decision, not a gap. Navigation, links and actions are set in type; the only glyphs used are typographic — the em dash `—` in eyebrows and periods, the middot `·` as a link separator in `--ink-4`, and the arrow `→` appended to case-study links ("Full case study →"). No icon font, no sprite sheet, no icon library is loaded.

The single vector mark is `assets/avatar.svg` — a monogram in gold on black, used at 26px in the header and 72px on the about page. `assets/avatar-glasses.svg` is an alternate variant. `assets/diagram-*.svg` are illustrative case-study diagrams, not iconography.

If a future surface genuinely needs icons, use 1px-stroke line icons at 12–16px in `currentColor` (the pattern already used for the external-link glyph inside `LinkItem` on the source site) and flag the addition. Do not introduce filled or multicolour icon sets.

## Accessibility notes carried over

Every ink tone except `--ink-4` clears 4.5:1 on the ground. `--ink-4` is decorative only. The focus ring is never colour-only — it is an outline. Links are distinguishable without colour because they are underlined. `SkipLink` is the first element in `<body>`.


## 2026-08 revision — de-genericising pass

The earlier direction (`#0B0D0D` charcoal, muted gold `#C9A86A`, Geist + Geist Mono, a "FOCUSING" preloader, negative tracking on every heading) read as machine-made. What changed:

- **Typeface.** Schibsted Grotesk replaces Geist and Geist Mono. Monospace is gone entirely — indices, dates and eyebrows are the grotesk at weight 500, uppercase, tracked.
- **Ground.** `#0B0D0D` → `#0F1211`, a near-black with a slight green cast rather than a neutral charcoal.
- **Accent.** Gold `#C9A86A` → jade `#6FCB92`, roughly 9:1 on the ground.
- **Accent budget.** The accent is reserved for genuine emphasis: link hover, focus, selection, career date labels, and large metric figures. It is no longer on project indices, list dashes or arrows — those are `#79837C`.
- **Tracking.** Relaxed from −0.035 / −0.03 / −0.025em to −0.02 / −0.018 / −0.014em. Nothing below 34px carries negative tracking.
- **Display weight.** 500 → 600 for h1/h2/h3, which a grotesk needs.
- **Preloader.** Removed from every page, along with its keyframes and its script.

### Still open
- The eleven homepage projects still share one template. The intent is for the top three to break the grid — more room, images, metrics — and the remainder to be a plain ruled list.
- `cv/cv.pdf` does not exist at the repo root, and the nav and hero both link to it.
- `github-export/` is a build artefact and still holds the old palette. Regenerate it from the sources.

## 2026-08 consistency pass

Applied across every shipped page and mirrored into `docs/`:

- `tokens/colors.css` and `tokens/typography.css` now carry the shipped values (`#0F1211`, `#EDEFEC / #A2ACA5 / #79837C / #4a5250`, `#6FCB92`, Schibsted Grotesk). They previously still described the abandoned `#0B0D0D` + Geist direction.
- Caption ink normalised: stray `#9aa39f` figcaptions are now `--ink-3` `#79837C`, and caption measure is 700px everywhere (HeadBox was running 820px).
- `<meta name="theme-color" content="#0F1211">` and `html { color-scheme: dark; }` added to every page so browser chrome matches the ground.
- `...` replaced with `…`.
- The CallToAction card is documented above and specimen'd in `components/core/calltoaction.card.html`.

**Duplicates removed.** The source project previously carried three copies of this system. `design-system-only/` and the root `styles.css` + `tokens/` + `guidelines/` (the abandoned blue/Geist direction) have been deleted; `portfolio-design-system/` is now the only copy. Nothing referenced the deleted folders — the shipped pages carry their styles inline. The unrelated `webs/design-system/` under `docs/` and `uploads/` belongs to the HeadBox prototypes and is untouched.
