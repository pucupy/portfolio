# v3 mobile audit, 4 October 2026

An automated pass over 64 v3 screens at 390×844 (Mobile portrait), run three times. Each run checked for content off screen, squeezed text columns, sideways scrolling, tap targets under 44px, text under 12px and truncation.

## Result after pass 3
- **Clean (64 of 64 screens):** nothing off screen and no squeezed columns, apart from the minor items below. Every tap target is 44px or more, text is 12px or more, and nothing is truncated.
- **Remaining minor items:** Bureau and application overview score charts overflow by about 16px inside their own scroll area. The Rules page row text wraps under its controls.

## What changed (`Almanac v3 Theme.css`, compact only, plus `labelTables()` in the prototype)
1. **Tables become stacked list rows.** The first cell is the title and the second is right-aligned on line 1. The other cells follow as "Label · value" lines, with labels taken from the table headers. Production: `Table` should render a list below 600px.
2. **Fixed two-column layouts stack.** This covers Settings, key/value rows, `<dl>` profiles and 2-column card grids. The Settings sub-nav becomes a horizontal scroller above the content.
3. **Page headers stack.** The title and description come first, with the badge and actions on their own row.
4. **Size floors:** 44px for buttons, nav items, tabs, chips, back links and action links; 12px for all text, including the eyebrow and badge tokens; 16px for inputs.
5. **Wrapping:** ellipsis text wraps instead of truncating; space-between rows wrap; inputs can shrink.
6. **Auto-fit card grids** use `minmax(min(100%, N), 1fr)`, so a card can never be wider than the screen.

Note for engineering: these overrides target inline styles in the prototype. In `packages/ui`, put the same rules in the components themselves (Table, PageHeader, SettingsLayout, and the key/value list).

## Still open (need design, not CSS)
2. **Portal navigation.** The 64px rail takes 16% of a phone's width. Proposed: hide the rail below 600px and use a bottom tab bar (4 primary destinations plus More), per the guardrails.
5. **Dense charts and metric pages** (Portfolio, Bureau): 18 small controls on Portfolio. Needs a phone layout: one metric per row, and charts with a range selector in a sheet.

## How to re-run
Open `Almanac Prototype v3.dc.html`, choose Mobile, and step through the screens. Or ask Claude to "re-run the mobile audit".

## Recheck, 4 Oct 2026 (pass 4: all 63 screens at 390×844)
- No off-screen content, squeezed columns, text under 12px, letter-by-letter wrapping or truncation on any screen.
- Fixed in this pass: input groups (search fields with icons) were 32px tall and overlapped the next line once inputs grew to 44px. Platform portal rail items were 36–40px. Notification titles were truncated.
- Expected, not defects: in the wizard, the sticky action bar covers content as you scroll (it reserves space with scroll padding). Inline text that wraps across lines registers as an "overlap" in the automated check.
- Portfolio: KPI tiles are 2-up, the exposure table is stacked rows, the utilisation meter is centred, and the trend toggle is full width. Bureau charts are kept inside their card. Rules: the header, filters and rule cards stack; the outcome badge sits above the rule text.
- v2: the wizard now loads `Almanac Mobile Rules.css` (the same rules, without the v3 palette). v1 is left as built, per the project rules.

## Final audit, 4 Oct 2026 (15 key screens at 1440×900 and 390×844)
- **Headings:** consistent everywhere in the product. H1 is 24 Work Sans, H2 20, H3 18. Newsreader appears only on the site home (display sizes).
- **Families:** product screens use Work Sans only; the site home adds Newsreader display and mono for the hero code labels.
- **Type sizes per product screen:** 3–6 (target ≤ 4 plus caption). The remaining 10px eyebrows are now raised to 12px globally.
- **Spacing:** no off-grid gaps in the product; the site home's 86.4px is a clamp() section gap.
- **Selects:** all restyled (no native appearance, inset chevron).
- **Fixed in this pass:** select heights under 44px on phones (Reviewer, Country); "Open application" and "Show references" links at 32px; 10px eyebrow text.
- **Not covered:** the full 63-screen phone sweep was not re-run this round; earlier sweeps found no blockers.
