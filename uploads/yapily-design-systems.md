# Yapily design systems

Three systems, one brand core. Written for handoff — every value below is either read from a compiled stylesheet or explicitly marked as inferred.

| System | Scope | Brand |
| --- | --- | --- |
| **Yapily UI** (internally *Pipes*) | Console and internal tools | Yapily brand, working volume |
| **Mark** | yapily.com marketing site | Yapily brand, full volume |
| **Custard** | White-label hosted consent pages | None — deliberately neutral |

---

## 1. Shared brand core (Mark ↔ Yapily UI only)

Custard does **not** inherit from this layer. It takes ergonomics only: the 4px spacing base and the 44px minimum touch target.

### Tier 1 — primitives

Raw values, no meaning attached. Components never reference this tier directly.

```
--teal-900: #002323;   --neutral-0:   #FFFFFF;
--teal-800: #003839;   --neutral-50:  #F9FAFB;
--teal-700: #014444;   --neutral-100: #F5F5F5;
--mint-400: #63DFB3;   --neutral-200: #E1E1E1;
--lime-400: #B8FD00;   --neutral-300: #D4D4D4;
                       --neutral-500: #6A7282;
--ink-950:  #050505;   --neutral-600: #525252;
--ink-900:  #111111;   --neutral-900: #171717;
--ink-800:  #1F1F1F;
```

### Tier 2 — semantic aliases (one set, two modes)

| Alias | Light | Inverse | Applies to |
| --- | --- | --- | --- |
| `--surface` | neutral-0 | ink-900 | Cards in Pipes, panels in Mark |
| `--surface-sunken` | neutral-50 | ink-950 | Page ground, sidebar |
| `--surface-brand` | teal-800 | teal-900 | Mark hero grounds, Pipes active nav |
| `--text` | neutral-900 | neutral-0 | Body |
| `--text-muted` | neutral-500 | rgba(255,255,255,.72) | Secondary, captions |
| `--action` | teal-800 | mint-400 | Primary button, links |
| `--action-text` | neutral-0 | teal-900 | Label on `--action` |
| `--accent` | teal-800 | mint-400 | Eyebrows, deltas — Mark overrides to lime-400 on CTAs |
| `--border` | neutral-200 | ink-800 | Dividers, card outlines |
| `--border-strong` | neutral-300 | #2A2A2A | Inputs, icon buttons |
| `--focus` | teal-800 | mint-400 | 3px ring at 35% opacity |

**Tier 3** exists only where a component genuinely deviates (control height, pill radius on Mark CTAs). If a component token merely repeats an alias, delete it.

### Shared scales

- **Type:** Inter variable. Weights 400 / 500 / 600 / 700.
- **Space:** 4px base — 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- **Radius:** 2 / 6 / 8 / 10 (base) / 14 / pill (200px). `sm`, `md`, `xl` derive from base at −4, −2, +4.
- **Motion:** 150ms `cubic-bezier(.4, 0, .2, 1)` standard · 200ms `cubic-bezier(0, 0, .2, 1)` enter/exit · 300ms `ease-in-out` overlays.

### Cascade rules

1. Teal, ink, mint, Inter and the 4px base are **one source**. Changing the teal changes site and console together — that is the point.
2. **Semantics belong to each system.** Pipes maps primitives onto `--primary` / `--border` / `--muted`; Mark maps them onto section grounds and CTAs. Never let a console token leak into the site.
3. **Custard inherits nothing brand-shaped.** It is white-label; brand inheritance would be a bug.
4. **Accents are system-scoped.** Lime stays in Mark, status colours stay in Pipes.

### Deliberately not shared

| Token | Where | Why |
| --- | --- | --- |
| Lime `#B8FD00` | Mark only | Marketing CTA energy; too loud for long working sessions |
| Neutral UI ramp | Pipes only | Dense data needs eight greys; Mark needs three colours |
| Status colours | Pipes only | Marketing has no states to report |
| Heading weight | Both, different | Mark 600 + tight tracking; Pipes 500 so headings don't shout |
| Gradient grounds | Mark only | Console surfaces stay flat so data stays legible |

### Efficiency summary

| Before | After |
| --- | --- |
| 46 hard-coded colour values | 16 primitives + 11 semantic aliases |
| Two separate dark themes | One inverse mode (Pipes dark = Mark's dark sections) |
| Three radius scales | One 2 / 6 / 8 / 10 / 14 / pill scale |
| Per-system easing and duration | Three named durations |

---

## 2. Yapily UI (Pipes) — console

### Palette

**Brand:** Deep Teal `#003839` (primary) · Mint `#63DFB3` (dark-mode primary) · Teal Tint `#F0FAF9` · Mint Tint `#E1FFEB`

**Neutrals, light:** `#FFFFFF` `#F9FAFB` `#F5F5F5` `#F0F0F0` `#EFEFEF` `#E1E1E1` `#D4D4D4` `#A3A3A3` `#525252` `#333333` `#171717`

**Neutrals, dark:** `#000000` `#050505` `#0A0A0A` `#111111` `#1A1A1A` `#1F1F1F` `#2A2A2A` `#404040`

**Status** (accent bar / text on tint):

| Role | Accent | Text | Background |
| --- | --- | --- | --- |
| Success | `#09893C` | `#08611F` | `#E1FFEB` |
| Info | `#1447E6` | `#1447E6` | `#EFF6FF` |
| Warning | `#D08700` | `#973C00` | `#FEFCE8` |
| Destructive | `#E7000B` | `#C10007` | `#FEF2F2` |

> Text colours are the AA-corrected values. The saturated accents are for bars and icons only — `#09893C` on `#E1FFEB` is 4.2:1 and fails as text.

### Semantic tokens

| Token | Light | Dark | Used for |
| --- | --- | --- | --- |
| `--background` | #FFFFFF | #000000 | Page canvas |
| `--foreground` | #171717 | #F5F5F5 | Body text |
| `--card` | #FFFFFF | #111111 | Card and panel surface |
| `--muted` | #F5F5F5 | #1A1A1A | Subdued fills, table headers |
| `--muted-foreground` | #6A7282 | #A3A3A3 | Secondary and helper text |
| `--primary` | #003839 | #63DFB3 | Primary actions, active nav |
| `--primary-foreground` | #FFFFFF | #000000 | Text on primary |
| `--accent` | #F0FAF9 | #1A1A1A | Hover and selected rows |
| `--border` | #E1E1E1 | #1F1F1F | Dividers, card outlines |
| `--input` | #D4D4D4 | #2A2A2A | Field borders |
| `--ring` | #003839 | #63DFB3 | Focus ring, 3px at 50% |
| `--destructive` | #E7000B | #E7000B | Destructive actions, errors |
| `--sidebar` | #F9FAFB | #050505 | Sidebar background |
| `--radius` | 10px | 10px | Base radius |

> The source stylesheet's `:root` block was not included in the extract — these mappings are inferred from usage across the compiled utilities. Confirm before shipping.

### Typography — Inter

| Step | Size / line-height / weight | Use |
| --- | --- | --- |
| display | 60 / 1.0 / 600 | Marketing-grade numbers inside the console |
| 3xl | 30 / 1.2 / 600 | Section heading |
| 2xl (h1) | 24 / 1.5 / 500 | Page title |
| xl (h2) | 20 / 1.5 / 500 | Card title |
| lg (h3) | 18 / 1.5 / 500 | Subsection |
| base | 16 / 1.5 / 400 | Body, form labels |
| sm | 14 / 1.43 / 400 | Table cells, buttons |
| xs | 12 / 1.33 / 500 | Badges, captions |

Tracking: −0.44px at 2xl, −0.31px at xl, −0.025em on display sizes.

### Components

- **Buttons** — 32 / 36 / 44px heights, radius 6 / 8 / 8, 14px medium label. Variants: primary (teal), secondary (white + `#D4D4D4` border), muted, ghost, destructive. Focus: 3px ring at 35%.
- **Inputs** — 36px, radius 8, `#D4D4D4` border, focus border `#003839` + 3px ring at 15%. Error state: `#E7000B` border, `aria-invalid`, `aria-describedby` to a `#C10007` message.
- **Badges** — 3px/9px padding, radius 6 (pill variant 200px), 12px medium.
- **Card** — radius 14, 1px `#E1E1E1`, `0 1px 3px rgba(0,0,0,.06)`, 24px padding.
- **Table** — 10px/24px header on `#F9FAFB`, 14px rows, 1px `#F0F0F0` dividers, tabular figures right-aligned.
- **Sidebar** — `#F9FAFB` ground, 8px radius items, active item solid teal.

### Elevation

```
xs  0 1px 2px rgba(0,0,0,.05)                                  inputs
sm  0 1px 3px rgba(0,0,0,.1),  0 1px 2px -1px rgba(0,0,0,.1)   cards
md  0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1) hover
lg  0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1) popovers
xl  0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1) dialogs
```

Borders do most of the separation work; shadow is reserved for things that float.

---

## 3. Mark — marketing site

### Palette

| Name | Hex | Use |
| --- | --- | --- |
| Deep Teal | `#003839` | Primary brand, buttons, labels |
| Ink Teal | `#002323` | Dark section base |
| Teal 700 | `#014444` | Gradient start |
| Mint | `#63DFB3` | Eyebrow labels on dark |
| Lime | `#B8FD00` | Primary CTA, accent labels |
| White | `#FFFFFF` | Text and secondary CTA on dark |

### Grounds

```css
/* Hero */
linear-gradient(309deg, #014444 0%, #002323 46%, #002323 100%);
/* Feature panel */
radial-gradient(circle, #003839 0%, #011818 100%);
```

### Gradient headings — `.section-title__heading--gradient`

Display-only: `h1` and top-level `h2`. Always pair with a solid fallback (`--heading-white` / `--heading-teal`) for print, forced-colours and unsupported `background-clip`.

```css
/* on dark */
background: linear-gradient(96deg, #FFFFFF 18%, #63DFB3 92%);
/* on light */
background: linear-gradient(96deg, #003839 20%, #014444 95%);
-webkit-background-clip: text; background-clip: text; color: transparent;
```

> **Not verified.** The site's compiled stylesheet was not readable, so the real rule has not been seen. The angle and stop percentages above are a reconstruction from brand primitives. Replace with the actual `.section-title__heading--gradient` declaration.

### Buttons

Pill (`200px`), 48px tall, 24px inline padding, 15px medium, trailing `↗` glyph.

- `btn--lime` — `#B8FD00` on `#002323` text — primary CTA
- `btn--white` — `#FFFFFF` on `#003839` text — secondary on dark
- `btn--deep-teal` — `#003839` on white text — on light grounds
- outline — 1px `rgba(255,255,255,.35)`, white label

### Section furniture

- **Eyebrow label** — 12px, 600, `0.05em` tracking, uppercase. Colour is per-section via `--label_colour` (lime on problem sections, mint on hero, white on neutral).
- **Stat block** — figure 34–60px at 600 with −0.03em tracking, caption 11–14px at 400.
- **Coverage chip** — pill, `rgba(255,255,255,.05)` fill, `rgba(255,255,255,.18)` border, flag + country name, in an auto-scrolling marquee.
- **Product card** — radial-gradient ground, 26px heading, media well, 36px circular `↗` button.

### Layout

- **Spacing:** `--spacing-sm` (mobile inset) · `--spacing-md` (default section padding) · `--spacing-lg` (tablet/desktop) · `--spacing-4xl` (full-bleed hero).
- **Containers:** sections nest — an outer full-bleed ground, an inner `container--md` (reading width) or `container--lg` (grids). Padding steps mobile → tablet → desktop.

---

## 4. Custard — white-label hosted pages

Unbranded by contract. No teal, no Inter, no Yapily marks — a customer's own brand sits on top.

### Colour tokens

```
--color-bg-canvas:       #F5F6F8
--color-bg-surface:      #FFFFFF
--color-bg-subtle:       #F8F9FB
--color-bg-info:         #EEF4FD
--color-text-primary:    #111827
--color-text-secondary:  #4B5563
--color-text-muted:      #6B7280
--color-text-inverse:    #FFFFFF
--color-link:            #1A73E8
--color-border-default:  #E0E3E8
--color-border-input:    #D0D3D9
--color-border-info:     #C7D9F8
--color-focus-ring:      #1A73E8
--color-action-primary:       #111827
--color-action-primary-hover: #1F2937
```

### Type — Google Sans, DM Sans fallback

| Step | Size / line-height |
| --- | --- |
| Heading | 32 / 40 (700) — 28/36 at ≤1199, 24/32 at ≤599 |
| Body large | 16 / 24 — 15/22 at ≤599 |
| Body | 14 / 20 |
| Helper | 13 / 18 |

### Spacing

4px base: 0, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80.

### Responsive layout tokens

| Token | Desktop | ≤1199px | ≤599px |
| --- | --- | --- | --- |
| `--layout-modal-max-width` | 960px | 760px | 390px |
| `--layout-modal-radius` | 24px | 20px | 0 |
| `--layout-content-max-width` | 720px | 640px | 342px |
| `--layout-content-padding-x` | 48px | 40px | 24px |
| `--layout-header-height` | 72px | 68px | 64px |
| `--layout-section-gap` | 32px | 28px | 24px |
| `--component-input-height` | 56px | 56px | 52px |
| `--component-button-height` | 56px | 56px | 52px |
| `--component-bank-row-height` | 64px | 60px | 56px |
| `--component-touch-target` | 44px | 44px | 44px |

### Canonical composition — hosted login

```
.hosted-login              width: min(100%, --layout-modal-max-width); 1px --color-border-default; radius --layout-modal-radius
.hosted-login__header      min-height --layout-header-height; padding-inline --layout-header-padding-x
.hosted-login__content     width: min(100% - 2×padding-x, --layout-content-max-width); centred
.hosted-login__stack       flex column, gap --layout-section-gap
.hosted-login__fields      flex column, gap --component-field-gap (24px / 20px at ≤599)
.hosted-login input        min-height --component-input-height
.hosted-login__primary-action  min-height --component-button-height
```

Card shadow: `0 4.167px 6.25px rgba(0,0,0,.1), 0 1.042px 3.125px rgba(0,0,0,.08)`.

---

## 5. Accessibility floor

Applied across all three systems.

- All text meets WCAG AA (≥4.5:1); caption minimum size is 11px.
- Saturated status accents are non-text only. Text uses the darkened pair: `#08611F`, `#973C00`, `#C10007`.
- Visible focus on every interactive element — 2px outline at 2px offset, or a 3px `--focus` ring at 35%.
- Icon-only controls carry a label; error fields wire `aria-invalid` + `aria-describedby`.
- Minimum touch target 44px.
- Mint `#63DFB3` is a dark-mode colour only — it fails on white.

---

## 6. Marks

Flat, single-weight, legible at 16px — no gradients or highlights.

- **Pipes** — one rounded elbow run (`#003839`) with a mint flange (`#63DFB3`).
- **Mark** — teal rounded square, lime chevron, mint stem; echoes the Yapily Y diagonals.
- **Custard** — three stacked layers, widest at the base: `#111827` / `#4B5563` / `#C7D9F8`.

---

## Provenance

| Source | Covers | Status |
| --- | --- | --- |
| Compiled console stylesheet | Yapily UI utilities, component sizing, palette | Read directly |
| Console screenshot | Sidebar, dashboard composition, logo | Read directly |
| Compiled hosted-flows stylesheet | All Custard tokens | Read directly |
| yapily.com page HTML | Mark palette, gradients, buttons, section furniture | Read directly |
| yapily.com compiled CSS | Gradient heading stops, `--spacing-*` values | **Not obtained** — reconstructed |
| Console `:root` theme block | Yapily UI semantic token values | **Not obtained** — inferred from usage |
