# Mark — marketing design system

**Mark · marketing** — A brand system that survives a rebrand.

Mark carries the marketing site, the sales collateral and the brand surfaces. It is the loosest of the three systems by design: marketing needs to make a claim that has never been made before, so the components are compositional rather than prescriptive. What is fixed is the type scale, the accent behaviour and the section rhythm.

Interactive reference: `embeds/design-system-reference.html` (Mark tab) · live homepage: `embeds/yapily-homepage-mark.html`

---

## Foundations

### Colour

Black type on white, yellow as the single accent, and a mint used only for panels. The accent is never decoration — it marks the one thing on a section that a reader should act on.

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#0A0A0A` | headlines, body |
| `--paper` | `#FFFFFF` | page ground |
| `--accent` | `#FFD84D` | icon tiles, highlight, one CTA per section |
| `--panel-mint` | `#DFF0E4` | feature panels, quote blocks |
| `--panel-blush` | `#F7DDDA` | secondary panels |
| `--rule` | `#E6E6E6` | section rules, card borders |
| `--muted` | `#6B6B6B` | captions, eyebrows, legal |

Two panel tints maximum per page. A third reads as a template rather than a brand.

### Typography

A single grotesk across the whole system, set tight and large. Marketing headlines carry weight 700; nothing else does.

| Style | Size / line / weight / tracking |
| --- | --- |
| Hero | 68 / 1.02 / 700 / −0.03em |
| Section head | 44 / 1.08 / 700 / −0.02em |
| Feature title | 24 / 1.25 / 600 |
| Lead | 20 / 1.55 / 400 |
| Body | 17 / 1.6 / 400 |
| Eyebrow | 13 / 500 / +0.12em / uppercase |

Measure caps at 60ch for lead copy and 46ch for a hero. Beyond that, marketing copy stops being scannable.

### Spacing and rhythm

Sections are the unit. Each one is a full-width band with 96px vertical padding at desktop, 64 at tablet, 48 at mobile, and a 1200px content column. Bands alternate paper and panel; two panel bands never sit adjacent.

- Spacing scale: 8, 16, 24, 32, 48, 64, 96
- Radius: 8 on cards, 12 on icon tiles, pill on buttons
- Grid: 12 columns, 24px gutter, 1200 max

---

## Components

### Icon tile

A 48px rounded square in the accent, holding a black glyph. It is the system's most recognisable unit — it labels a feature without an illustration budget.

Spec: 48 × 48 · radius 12 · accent fill · glyph 24 black · never more than six per band.

### Feature card

Icon tile, title, two lines. Cards do not carry their own links; the band carries one.

Spec: title 24 / 600 · body 17 · no card border on paper bands, 1px rule on panel bands · three or four per row.

### Button

One filled button per band. Filled is black on paper and black on accent; the outline variant is for the secondary path.

Spec: height 52 · radius pill · label 16 / 600 · padding-x 28 · no more than two per band.

### Section head

Eyebrow, headline, lead, in that order, left-aligned. Centred headings are reserved for the hero and the closing band.

Spec: eyebrow → headline → lead · 16px gap between eyebrow and headline, 24 to the lead · left-aligned by default.

### Stat band

Large figures with a word underneath. Marketing figures are always attributed in the band's footnote, because an unsourced number invites a question rather than answering one.

Spec: figure 56 / 700 / tabular-nums · label 15 muted · three or four per band · footnote states the source and period.

### Logo wall

Customer marks at a uniform optical height on a panel band, greyscale to keep the accent unique. Logos are never stretched to a common box width.

Spec: optical height 28 · greyscale · 48px gap · panel band · alphabetical, not ranked.

### Quote block

One customer sentence, attributed with name, role and company. No portrait unless the customer supplied one.

Spec: quote 28 / 1.35 / 600 · attribution 15 muted · mint panel · one per page.

---

## Patterns

### Hero

Headline, one lead paragraph, one button, one supporting graphic. Three directions were designed for the yapily.com homepage redesign, ranging from problem-first copy to a full-bleed video ground; the shipped version keeps the headline left and the graphic right.

Spec: headline ≤ 46ch · one CTA · graphic never carries copy · 120px top padding.

### Alternating bands

The site's whole structure. Paper band, panel band, paper band. Each band answers one question and ends with at most one action.

Spec: one idea per band · alternate paper and panel · one CTA maximum · 96px padding.

### Closing band

The last band on every page: a single line, one button, and nothing else. It is centred, which is what marks it as the end.

Spec: centred · headline 44 · one button · accent or mint ground.
