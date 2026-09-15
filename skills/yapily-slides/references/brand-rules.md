# Yapily Brand Rules

This document defines the rules every Yapily slide must follow. It is the source of truth for the yapily-slides skill. When in doubt, preserve the template and follow these rules exactly. Do not improve, decorate, or adapt anything not explicitly permitted below.

---

## 1. Slide types

There are two kinds of slides in a Yapily deck.

### Fixed-template slides

The following slides have a single locked design. Use the template slide exactly as provided. Do not modify the layout, composition, or any visual element beyond swapping in the required text content.

- Title slide
- Section divider
- Agenda
- Timeline
- Gantt
- Quote

If the deck does not need one of these slides (e.g. a 3-slide deck may not need an agenda), omit it. Never adapt a fixed-template slide to a different purpose.

### Content slides

Any slide that is not one of the six fixed-template slides above is a content slide. Content slides follow these rules:

- Must use either the light background template or the dark background template. No other backgrounds permitted.
- Prefer light backgrounds for text-heavy slides. Dark backgrounds work well for impact moments, quotes, and visual slides.
- Layout (composition within the slide) is flexible, but must respect all other brand rules in this document.
- Match the visual style of the example content slides in the template.

---

## 2. Backgrounds

Content slides must use one of two preset background templates:

- **Light background template:** white base (`#FFFFFF`)
- **Dark background template:** dark green gradient base (`#002323` to `#014444`)

Both preset templates already include the logo and terms/footer in the correct positions. These elements are part of the template and must not be moved, removed, or altered.

### Choosing the background

Claude chooses which background to use for each content slide based on what suits the content best. As a guideline:

- Prefer **light** backgrounds for text-heavy slides.
- Prefer **dark** backgrounds for impact moments, quotes, and visual slides.

Use judgment within these guidelines to pick the background that best fits each slide's purpose. A deck will typically mix both.

### Using the background

Once chosen, the preset template must be used exactly as provided. Claude must not modify the background colour, gradient, shape, or any element of the background template under any circumstances. Only content (text, images, boxes per the box-fill rules) goes on top of the background template.

No other backgrounds are permitted. Claude does not invent backgrounds, blend templates, or apply custom treatments.

**Exceptions:** title slides, section dividers, agenda, timeline, Gantt, and quote slides use their own fixed templates and are not subject to this rule.

---

## 3. Colours

### Primary palette

| Colour | Hex | Use |
|---|---|---|
| Dark Green | `#002323` | Dark mode background base, primary brand colour |
| White | `#FFFFFF` | Light mode background, body text on dark slides |
| Dark Green Gradient | `#002323` to `#014444` | Dark mode background |

### Secondary palette

| Colour | Hex | Use |
|---|---|---|
| Light Lime | `#E3FE99` | Accent fills, soft highlights, box fills |
| Light Green | `#E0F9E0` | Accent fills, soft highlights, box fills |

### Accent palette

Accent colours differ depending on background.

**On dark slides:**

| Colour | Hex | Priority |
|---|---|---|
| Fluro Lime | `#B8FD00` | Primary (default accent) |
| Teal | `#63DFB3` | Secondary (interchangeable with Fluro Lime, but Fluro Lime is preferred) |

**On light slides:**

| Colour | Hex | Priority |
|---|---|---|
| Dark Green | `#10615F` | Primary (default accent) |
| Dark Teal | `#003839` | Secondary (interchangeable with Dark Green, but Dark Teal is preferred for differentiation) |

**Rule:** when an accent colour is needed and either option in the palette would work, default to the primary (Fluro Lime on dark slides, Dark Green on light slides). Only use the secondary when the primary has already been used in the same visual element and differentiation is needed.

### Text colours

**On dark slides:**
- Body text: `#FFFFFF`
- Accent or highlighted text: `#B8FD00` (Fluro Lime) primary, `#63DFB3` (Teal) secondary

**On light slides:**
- Body text: `#000000`
- Accent or highlighted text: `#10615F` (Dark Green)

### Line and divider colours

**On dark slides:**
- `#E3FE99` (Light Lime)
- `#E0F9E0` (Light Green)
- Fluro-Teal gradient: `#B8FD00` to `#63DFB3`

**On light slides:**
- `#10615F` (Dark Green)
- `#003839` (Dark Teal)
- Dark green gradient: `#002323` to `#014444`

Gradients are permitted only on lines, dividers, the dark mode background, and box fills (per the box fills rules below). Never use gradients on text.

### Box treatments

**Boxes are not the default composition.** Only use a box when content genuinely benefits from visual containment (a stat needs emphasis, two ideas need separation, a callout needs to stand apart). When content can sit directly on the background without a box, do so. Large content areas — tables, bulleted lists, paragraphs — should default to no box.

When a box is used, choose the treatment based on background and box purpose.

#### Content boxes (default)

**On light slides**, content boxes use one of two default treatments:
- Transparent fill with a thin grey border (`#CBCBCB` or similar muted grey, 0.5pt–1pt), OR
- Dark Green solid (`#002323`) fill with white text, OR
- Dark Green gradient (`#002323` to `#014444`) fill with white text

**On dark slides**, content boxes use one of two default treatments:
- White fill (`#FFFFFF`) with a thin coloured border (Fluro Lime `#B8FD00`, Teal `#63DFB3`, or Light Lime `#E3FE99`, 0.5pt–1pt) and dark green text (`#002323`), OR
- Dark Green gradient (`#002323` to `#014444`) fill with white text and a thin border to distinguish from the background

Content boxes have **rounded corners.** This applies to all default content boxes, regardless of background.

#### Small emphasis callouts (exception)

Light Lime (`#E3FE99`) and Light Green (`#E0F9E0`) filled boxes are **reserved for small emphasis callouts** — highlighting a specific number, stat, or key data point that needs to jump off the slide. They are not content containers.

- Use for: a single big number ("98%"), a short stat, a one-line highlight
- Do not use for: bulleted lists, paragraphs of text, multi-line content, or as a default fill for parallel content boxes
- Small emphasis callouts have **sharp/square corners**, not rounded
- Do not add borders to Light Lime or Light Green boxes

If more than one small emphasis callout appears on a slide, vary the fill (mix Light Lime and Light Green) to create hierarchy between them.

#### Fills to never use as large box fills

- Fluro Lime (`#B8FD00`) — reserved for accents, highlights, small elements
- Teal (`#63DFB3`) — reserved for accents, highlights, small elements
- Dark Teal (`#003839`) — reserved for accents, highlights, small elements

#### Text colours inside boxes

- Transparent fill on light slide: dark text (`#000000`) for body, Dark Green (`#10615F`) for headers
- Dark Green fill (solid or gradient), any slide: white body text (`#FFFFFF`), Fluro Lime (`#B8FD00`) for headers/accents
- White fill on dark slide: dark green text (`#002323`) for body, Dark Green (`#10615F`) for headers
- Light Lime / Light Green fill (small callouts only): dark green text (`#002323`) for the big number, black or dark green for supporting text

### Box variation across a slide

When a slide has multiple content boxes, vary the treatments to create hierarchy. Do not make all boxes identical.

- The most important box should have a distinct treatment from secondary boxes (e.g. one dark green filled, others transparent-with-border)
- Across four or more boxes, vary at least one
- A simple test: if every box on the slide could be swapped with every other box without changing the slide's meaning, the hierarchy is wrong

### Headline space

Keep clear space between the slide title and the first content element. Do not push boxes right up against the title. Titles are 15pt semibold — they need breathing room to function as anchors rather than being crowded by content.

### Text must fit inside boxes

Text placed inside a box must fit without overflowing, clipping, or extending beyond the box edges. This applies to all boxes, callouts, pills, and shapes.

- Estimate text length at composition time. If text is likely to overflow, either expand the box (within layout constraints), reduce the text, or change the composition before building.
- Verify visually at QA time. After building, render the slide as an image and check every box for overflow. Rebuild any slide where text spills outside its container.
- If text genuinely cannot fit at 9pt minimum within an appropriately sized box, the composition is wrong — choose a different layout, fewer items, or larger boxes. Never reduce text below 9pt to make it fit.

### Bullet marker colour

Bullet markers (the dot, dash, or other marker character) must match the colour of the text they belong to.

- On boxes with dark text (transparent fill, white fill, light callout fill): dark bullets matching the text
- On boxes with white text (dark green fill, dark green gradient): white or Fluro Lime bullets matching the text
- Never use a single fixed bullet colour across boxes of different fills

Bullets are part of the text, not a separate decorative element.

### Highlights

When highlighting text or a key word inline, use the accent palette:

- On dark slides: Fluro Lime (`#B8FD00`) preferred; Teal (`#63DFB3`) as secondary.
- On light slides: Dark Green (`#10615F`) preferred; Dark Teal (`#003839`) as secondary.

### Forbidden colour combinations

- Never use accent colours as large background fills or box fills.
- Never use gradients on text.
- Never introduce a colour not listed in this document.
- Never use light text on light backgrounds or dark text on dark backgrounds.

---

## 4. Typography

### Font

- **All text uses Inter.** No exceptions. No alternative fonts.

### Sizes

| Element | Size | Weight |
|---|---|---|
| Slide title (top left corner) | 15pt | Semibold |
| Section header (within a slide) | Set per deck, consistent throughout | Semibold |
| Body text | Set per deck, consistent throughout | Normal |
| Captions / small text | Set per deck, consistent throughout | Normal |
| Page number | 8pt | Normal |
| Terms / footer | 5pt | Normal |

**Slide title is intentionally small (15pt).** Yapily's design philosophy is content-first: the title is a reference, not the focus. Do not enlarge it.

**For section headers, body, and captions:** choose sizes appropriate to the content and use them consistently throughout a single deck. Do not change sizes from slide to slide. Recommended starting point: section header around 12pt, body around 10–11pt, captions around 8–9pt — adjust as the content requires.

### Section header colour rule

Section headers within content slides always use the highlight colour of the background:

- **On dark slides:** section headers in Fluro Lime (`#B8FD00`).
- **On light slides:** section headers in Dark Green (`#10615F`).

This applies to every content slide that uses a section header. It is the most visible signal that a slide is "on brand," and it must be applied consistently across every slide in a deck. See slide 3 (Agenda) in the template for the canonical example of this treatment on a dark background.

Slide titles (the small 15pt text in the top left corner) use the default body text colour for their background (white on dark, black on light) — they are not subject to this rule.

### Minimum readable text size

Text inside boxes, shapes, callouts, pills, or any visual container must remain readable when the slide is viewed at presentation size:

- Minimum size for body text inside any shape: 9pt.
- If content does not fit at 9pt minimum, redesign the slide (use fewer items, larger shapes, or a different composition) rather than shrinking text further.
- Do not place body text inside small decorative shapes (e.g. small pills, small icons) where it cannot be read.

### Weights

Two weights are used, and only two:

- **Semibold:** slide titles, section headers, key emphasis within body copy.
- **Normal:** body text, captions, page numbers, terms.

**Bold weight is never used for slide titles or section headers.** Titles are 15pt Inter Semibold — verify the weight is Semibold, not Bold. If the resulting XML specifies `<a:rPr b="1">` on a title or section header, that is wrong and must be changed to Semibold weight (typically `<a:rPr>` with `<a:latin typeface="Inter Semibold"/>` or the corresponding weight specification).

- Italic, bold, extra bold, and other weights are not used anywhere in the deck.
- The only exception is when a fixed template slide (title, divider, agenda, timeline, Gantt, quote) uses a different weight as designed — in which case, do not alter it.

### Other typography rules

- Left-align all text. Never centre body text. Centre alignment is reserved for elements within fixed-template slides where the template uses it.
- No all-caps unless dictated by a fixed-template slide.
- No letter-spacing adjustments.

---

## 5. Logo

- **Version:** Y-only logo.
  - **White Y** on dark slides.
  - **Dark Green Y** on light slides.
- **Position:** top right corner of every slide.
- **Size:** 0.27 in wide by 0.21 in tall.

The logo is part of the preset background templates and fixed-template slides. Claude does not place the logo manually — it is already in position when a template is used. Never resize, recolour, reposition, or remove the logo from any slide.

Title slides may use a different logo treatment as defined by the title slide's fixed template.

---

## 6. Terms and page number

Both terms and page number are part of the preset background templates and fixed-template slides. They appear automatically when a template is used. Claude does not place them manually.

### Terms (bottom right)

- **Text:** `© Yapily Ltd. All Rights Reserved. Private & Confidential`
- **Position:** bottom right corner
- **Font:** Inter, Normal, 5pt
- **Colour:** `#CBCBCB`

### Page number (bottom left)

- **Position:** bottom left corner
- **Font:** Inter, Normal, 8pt
- **Colour:** `#CBCBCB`

Never change the wording, size, colour, or position of either element. Never remove them.

---

## 7. Charts

Out of scope for v1 of this skill. If a deck needs charts, build them outside the skill and insert them as images.

---

## 8. Icons

Out of scope for v1 of this skill. Do not add icons to content slides. Compose content slides using text, layout, colour, and images only.

---

## 9. Customer co-branding

Not permitted. Every Yapily deck looks like a Yapily deck. Customer logos, customer brand colours, and customer fonts are not used in Yapily decks. If a user requests this, explain that the skill enforces brand consistency and offer to produce a standard Yapily deck instead.

---

## 10. Default behaviour when in doubt

When unsure whether something is allowed:

1. Preserve the template. Change as little as possible.
2. If the rule isn't covered here, choose the option closest to the existing template style.
3. If the user requests something that conflicts with these rules, refuse and offer the closest on-brand alternative.

The skill exists to enforce brand consistency. When in tension with a user request, the brand wins.

## 11. Composition variety on content slides

Content slides give Claude freedom to compose, but compositions must vary across the deck:

- Avoid two consecutive content slides with the same composition (e.g. two "three boxes in a row" slides back-to-back).
- Alternate between text-led and visual-led slides where the content allows.
- Vary between light and dark backgrounds across a deck — a deck of only light or only dark slides feels monotonous.
- Use white space deliberately. Not every slide needs to fill every available area.
- Match composition complexity to content density: simpler content gets simpler compositions.

If two adjacent slides would naturally use the same composition (e.g. both are three-pillar comparisons), find a way to differentiate them — change the orientation, switch background, alternate which element is emphasised.
