# Figma kit — portfolio design system

Two ways in. Do both and you get styles, variables and layers.

## 1. Variables and styles — `tokens.json`

Tokens Studio (formerly Figma Tokens) format, also readable as W3C DTCG.

1. Figma → Plugins → **Tokens Studio for Figma**
2. Settings → *Import* → paste or upload `tokens.json`
3. Select the `global` set → **Apply to document**, then *Export to Figma variables/styles*

You get:

| Group | Count | Notes |
|---|---|---|
| `color/*` | 12 | Ground, four inks, gold + two alphas, two rules, panel fill |
| `type/*` | 18 composite text styles | Named `display/`, `heading/`, `body/`, `ui/`, `mono/` |
| `spacing/*` | 20 | The real hand-set scale, not a 4px grid |
| `sizing/*`, `borderRadius/*` | 11 | Container, measure, padding, breakpoint, radii |

**Figma has no `clamp()`.** Each display and heading token carries the desktop ceiling as its value and names the mobile floor in its description. If you want a mobile set, duplicate `global` as `mobile` and swap in the floors — don't try to express the clamp.

Fonts are **Geist** and **Geist Mono**. Install both from [vercel.com/font](https://vercel.com/font) or enable them in Figma before importing, or the text styles will fall back and the tracking will look wrong.

## 2. Layers — `figma-kit-sheet.html`

A single page holding every colour, text style, spacing measure and component, laid out as 1600px frames.

- Figma → Plugins → **html.to.design** → *Import from file* (or open the page and import by URL)
- Import at 1600px width, desktop, "keep as layers"
- Each `<section>` lands as its own frame, named after the group

Then: turn the swatches into colour styles, the type rows into text styles, and the component blocks into components. The mono label above each block is the style or component name to use.

## What's deliberately absent

No icon library, no shadow styles, no gradient styles, no chart palette, no button component — the site has none of these, and adding them to the kit would invite them into the design. The only vector asset is the avatar monogram (`../github-export/design-system/assets/avatar.svg`).
