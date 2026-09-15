# Design System — reference

Dark editorial system. Two neutrals, one gold accent, Geist. No shadows, no gradients, no decorative colour. Everything earns its place through type, measure and rule weight.

**Load order:** `styles.css` imports `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/base.css`. Use the `var(--*)` names below verbatim — an unresolved `var()` falls back silently.

---

## Colour

Two neutrals and one accent. **Do not introduce additional hues.**

| Token | Value | Use |
|---|---|---|
| `--ground` | `#0B0D0D` | page background, everywhere |
| `--ground-translucent` | `rgba(11,13,13,.88)` | sticky header over `--header-blur` |
| `--ink-1` | `#F4F6F5` | headings, lead paragraphs, link text |
| `--ink-2` | `#AAB3AF` | body copy, nav links |
| `--ink-3` | `#7d8683` | date qualifiers, italic notes |
| `--ink-4` | `#4a5250` | `·` separators only |
| `--gold` | `#C9A86A` | eyebrows, indices, date labels, focus, selection |
| `--gold-underline` | `rgba(201,168,106,.55)` | resting link underline |
| `--gold-border` | `rgba(201,168,106,.35)` | outcomes callout border |
| `--rule-strong` | `rgba(244,246,245,.14)` | section-opening rules, grid dividers |
| `--rule-hairline` | `rgba(244,246,245,.09)` | between entries, header bottom |

Aliases: `--surface-page`, `--text-primary` … `--text-quaternary`, `--accent`, `--accent-contrast`, `--focus-ring`, `--border-hairline`, `--border-strong`.

Gold is for orientation, never decoration — it marks eyebrows, indices, dates, link underlines, focus and selection. It is never a background fill for large areas and never body text.

## Typography

Geist for everything; Geist Mono for eyebrows, indices and dates. **Only weights 400 and 500 are used** — no bold, no light.

```
--font-sans: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace;
```

Loaded from Google Fonts by `tokens/typography.css` (weights 300–600 sans, 400–500 mono).

**Fluid headings** — the mobile scale IS the clamp floor:

| Token | Clamp | Use |
|---|---|---|
| `--type-h1-home` | `clamp(38px, 8vw, 68px)` | home hero |
| `--type-h1-page` | `clamp(38px, 7.5vw, 60px)` | inner page title |
| `--type-h2-large` | `clamp(28px, 5.5vw, 44px)` | "Selected work", "Decisions" |
| `--type-h2-mid` | `clamp(26px, 5vw, 34px)` | narrative section headings |
| `--type-h3-entry` | `clamp(21px, 4vw, 30px)` | work entry title |
| `--type-h3-decision` | `clamp(21px, 4vw, 26px)` | decision heading |
| `--type-h3-small` | `clamp(20px, 3.6vw, 22px)` | minor heading |

**Fixed sizes:** `--type-lead` 18px (standfirst) · `--type-body` 17px · `--type-link` 16px · `--type-ui` 15px (nav, header name, mono index) · `--type-meta` 14px (mono eyebrow/date, italic note).

**Leading:** `--leading-h1-home` 1.04 · `--leading-h1-page` 1.05 · `--leading-body` 1.6 · `--leading-body-long` 1.65 (case-study prose) · `--leading-note` 1.55.

**Tracking:** `--tracking-h1` −0.035em · `--tracking-h2-large` −0.03em · `--tracking-h2-mid` −0.025em · `--tracking-h3` −0.02em · `--tracking-name` −0.01em · `--tracking-mono-eyebrow` 0.1em · `--tracking-mono-date` 0.08em.

Mono is always uppercase with positive tracking. Display type is always tightly tracked and never below 400 weight.

## Spacing and layout

Coarse vertical rhythm — real values, not a 4px grid. `--space-8` through `--space-120` in the steps 8, 12, 14, 16, 18, 20, 24, 26, 28, 32, 36, 40, 44, 56, 64, 72, 80, 96, 110, 120.

Load-bearing: `--section-gap` 64 · `--section-gap-major` 96 · `--entry-padding` 64 · `--decision-padding` 56 · `--page-top-home` 120 · `--page-top-inner` 110 · `--grid-gap-image` 20 · `--grid-gap-stat` 28.

**Measure is the core layout idea:** narrow text inside a wide container. `--container-max` 1160px (images take the full measure) · `--text-max` 700px (all prose, section headings, footer) · `--container-pad` 32px, dropping to `--container-pad-sm` 20px under 600px.

**Radius — images only.** `--radius-image` 12px · `--radius-avatar-sm` 6px · `--radius-avatar-lg` 16px · `--radius-focus` 2px. Callouts, stat grids and dividers are square on purpose.

**Motion:** one transition only — `--duration-link` 120ms `--ease-link` ease, on link underline colour. `--header-blur` blur(14px). `prefers-reduced-motion` collapses all durations.

## Base behaviour

- `body`: `--ground` / `--ink-1` / `--font-sans` / 17px / 1.6, antialiased.
- `text-wrap: pretty` on `p, h1, h2, h3`.
- **Links:** ink-coloured text with a gold underline that warms to full gold on hover. **The text colour never changes.** 4px underline offset, 1px thickness.
- **Focus:** 2px solid gold outline, 3px offset, 2px radius.
- **Selection:** gold background, ground-coloured text.

## Rules

1. Never introduce a hue outside the two neutrals and gold.
2. Never use a shadow. Depth comes from rule weight and translucency (`--rule-hairline` vs `--rule-strong`).
3. Never round a callout, grid or divider — radius belongs to images.
4. Never let prose exceed `--text-max`, even when the container is wider.
5. Never bold. 400 and 500 only.
6. Never change link text colour on hover — move the underline instead.
7. Never animate anything except that underline.

---

## Components

Thirteen React components in `components/core/`, each with a `.d.ts` and a `.prompt.md`.

### Eyebrow

```ts
export interface EyebrowProps {
  children: React.ReactNode;
  
  variant?: 'eyebrow' | 'date';
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
```

### SectionHeading

```ts
export interface SectionHeadingProps {
  children: React.ReactNode;
  
  scale?: 'large' | 'mid';
  
  rule?: boolean;
  as?: 'h2' | 'h3';
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
```

### NarrativeSection

```ts
export interface NarrativeSectionProps {
  heading?: React.ReactNode;
  children: React.ReactNode;
  
  longLeading?: boolean;
  topPadding?: string;
}
export function NarrativeSection(props: NarrativeSectionProps): JSX.Element;
```

### WorkEntry

```ts
export interface WorkEntryProps {
  
  index: string;
  title: React.ReactNode;
  
  qualifier?: string;
  href?: string;
  linkLabel?: string;
  children: React.ReactNode;
  
  media?: React.ReactNode;
  last?: boolean;
}
export function WorkEntry(props: WorkEntryProps): JSX.Element;
```

### TimelineEntry

```ts
export interface TimelineEntryProps {
  
  period: string;
  children: React.ReactNode;
}
export function TimelineEntry(props: TimelineEntryProps): JSX.Element;
```

### StatGrid

```ts
export interface Stat {
  value: React.ReactNode;
  label: React.ReactNode;
}
export interface StatGridProps {
  stats: Stat[];
  
  variant?: 'hairline' | 'spaced';
}
export function StatGrid(props: StatGridProps): JSX.Element;
```

### OutcomesCallout

```ts
export interface OutcomesCalloutProps {
  heading?: React.ReactNode;
  
  lead?: React.ReactNode;
  
  children?: React.ReactNode;
}
export function OutcomesCallout(props: OutcomesCalloutProps): JSX.Element;
```

### ImageFrame

```ts
export interface ImageFrameProps {
  src: string;
  alt?: string;
  
  height?: number;
  
  fit?: 'contain' | 'cover';
  lazy?: boolean;
}
export function ImageFrame(props: ImageFrameProps): JSX.Element;
```

### ImageGrid

```ts
export interface ImageGridProps {
  
  columns?: 2 | 3;
  children: React.ReactNode;
}
export function ImageGrid(props: ImageGridProps): JSX.Element;
```

### LinkRow

```ts
export interface LinkRowLink {
  href: string;
  label: React.ReactNode;
}
export interface LinkRowProps {
  links: LinkRowLink[];
}
export function LinkRow(props: LinkRowProps): JSX.Element;
```

### SiteHeader

```ts
export interface NavItem {
  href: string;
  label: string;
}
export interface SiteHeaderProps {
  name?: string;
  avatarSrc?: string;
  homeHref?: string;
  nav?: NavItem[];
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
```

### SiteFooter

```ts
export interface SiteFooterProps {
  links: { href: string; label: React.ReactNode }[];
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
```

### SkipLink

```ts
export interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
}
export function SkipLink(props: SkipLinkProps): JSX.Element;
```

---

## Foundation cards

Fourteen specimen cards in `guidelines/` — `colors-ground`, `colors-ink`, `colors-gold`, `colors-rules`, `type-display`, `type-headings`, `type-body`, `type-mono`, `spacing-rhythm`, `spacing-measure`, `spacing-radius`, `brand-link-states`, `brand-image-grids`, `brand-no-shadows`.

Four component cards sit in `components/core/`: `shell.card.html`, `typography.card.html`, `stats.card.html`, `workentry.card.html`.
