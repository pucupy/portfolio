# Portfolio design system

The visual system behind [pucupy.github.io/portfolio](https://pucupy.github.io/portfolio) — dark, editorial, type-led. Extracted from the built site, so every value here is the one in production.

**Specimen:** [/design-system/](https://pucupy.github.io/portfolio/design-system/) — colour styles, text styles, spacing, components and house rules on one page.

## Use it

```html
<link rel="stylesheet" href="design-system/styles.css">
```

`styles.css` imports four token files, in order:

| File | Contains |
|---|---|
| `tokens/colors.css` | Ground, four ink tones, one gold accent, two rule weights |
| `tokens/typography.css` | Geist + Geist Mono from Google Fonts, fluid heading clamps, fixed body sizes |
| `tokens/spacing.css` | Coarse vertical scale, measures, radii, motion |
| `tokens/base.css` | Resets, body base, link states, selection, focus ring |

No build step, no dependencies, no JavaScript. Fonts load from Google Fonts; there are no local binaries.

## The short version

**Colour.** Two neutrals and one accent — do not add hues. Ground `#0B0D0D`. Ink descends `#F4F6F5` → `#AAB3AF` → `#7D8683` → `#4A5250` (the last is for `·` separators only, never text). Gold `#C9A86A` for eyebrows, indices, dates, link underlines, focus and selection.

**Type.** Geist throughout, Geist Mono for eyebrows, indices and dates. Two weights only: 500 for headings, 400 for everything else. Headings are `clamp()` with tracking that tightens as size grows; the clamp floor *is* the mobile scale.

**Layout.** 1160px container, 700px text measure. Narrow text against wide images is the core idea. One breakpoint, at 600px.

**Depth.** No shadows, anywhere. No cards. Elevation is a 1px rule and the sticky header's blur.

**Motion.** One transition in the whole system: `text-decoration-color 120ms ease` on links.

**Accessibility.** Every ink tone except `--ink-4` clears 4.5:1 on the ground. Focus is an outline, never colour alone. Links are underlined, so they don't rely on colour either.

## Figma

`../figma-kit/` holds a Tokens Studio JSON and an importable kit sheet. See its README.
