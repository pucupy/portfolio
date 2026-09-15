# Yapily Slide Layouts

This document catalogs every layout in the Yapily slide template (`Yapily_Master_Slides_v2.pptx`). It is the reference Claude consults when picking a layout and when composing content slides.

The template contains 8 slides:
- Slides 1 to 6: fixed-template slides (use verbatim, swap content only)
- Slides 7 and 8: background templates (starting points for content slides)

There are intentionally no pre-built content slide examples. Content slides are composed fresh on top of the background templates, following the brand rules. This is deliberate: pre-built examples encourage repetition and limit composition variety.

---

## Fixed-template slides

These six slides have locked designs. Copy the slide, replace the placeholder content with real content, do not modify anything else.

### Slide 1 — Title slide

**Background:** dark (custom title treatment)
**Use for:** opening slide of every deck.
**Content slots:**
- Main title (replaces "Title Slide" placeholder)
- Subtitle / release (bottom left)
- Presenter / "Presented by" (bottom left)
- Yapily wordmark logo is locked in position; do not move or remove

**Notes:** the title slide is the only place the full "YAPILY" wordmark appears (rather than the Y-only logo used on other slides). Do not change this.

---

### Slide 2 — Section divider

**Background:** dark (custom divider treatment)
**Use for:** between major sections of a deck (typically only in decks 10+ slides long, or whenever the deck moves to a distinctly new topic).
**Content slots:**
- Section title (replaces "Section Divider" placeholder)

**Notes:** keep section titles short — ideally one to four words. Long titles will overflow the layout. Section title text uses Fluro Lime per the section divider's design.

---

### Slide 3 — Agenda

**Background:** dark (custom agenda treatment)
**Use for:** second slide of decks with five or more slides. Skip for short decks.
**Content slots:**
- Agenda heading (default text: "Agenda" — leave as-is, displayed in Fluro Lime)
- Agenda items (currently five rows shown: item name on the left, page number on the right)

**Notes:**
- The default template shows five items. If the deck has fewer items, delete excess rows entirely (do not leave empty rows). If more than five items, this layout will not fit — collapse items or use fewer agenda points.
- Page numbers should match the actual deck pagination.
- This slide is the canonical example of section header treatment: "Agenda" in Fluro Lime on dark background.

---

### Slide 4 — Timeline

**Background:** light (custom timeline treatment)
**Use for:** any slide showing a sequence of events or milestones along a horizontal time axis.
**Content slots:**
- Slide title (replaces "Timeline")
- Lead paragraph (replaces the lorem ipsum at the top)
- Up to five timeline points, each with a date (MM/YY) and a descriptive caption
- Captions alternate above and below the timeline axis

**Notes:**
- The current template uses lorem ipsum throughout. All lorem text is placeholder and must be replaced.
- If fewer than five timeline points are needed, delete the excess points and their connectors entirely.

---

### Slide 5 — Gantt

**Background:** light (custom Gantt treatment)
**Use for:** roadmap or multi-stream project plan slides showing work distributed across quarters.
**Content slots:**
- Slide title (replaces "GANTT")
- Workstream row labels on the left (currently "Lorem ipsum" — replace with real workstream names)
- Quarterly column headers (1Q25, 2Q25, etc. — adjust to actual quarters)
- Activity bars within the grid (currently "Lorem Ipsum" — replace with real activity names)

**Notes:**
- This layout is dense by design. Be deliberate about content — too many activities will make it unreadable.
- If the use case needs fewer quarters or workstreams, delete the unused rows and columns entirely.
- Verify text inside activity bars remains readable at 9pt minimum. If not, reduce the number of activities.

---

### Slide 6 — Quote

**Background:** dark (custom quote treatment)
**Use for:** customer quotes, analyst quotes, employee testimonials, any standalone pull quote.
**Content slots:**
- Quote text (replaces "Quote" placeholder)
- Attribution (name, role, company)

**Notes:**
- If a customer/analyst logo accompanies the quote, place it within the existing template structure. Do not add a separate logo box outside the template's intended areas.
- Keep quote text concise — the layout is designed for impact, not for long-form quotes. Aim for 1 to 3 sentences max.

---

## Background templates (for content slides)

These two slides are the starting points for any slide that isn't one of the six fixed templates above. They include the background, logo, and terms/footer already in place.

### Slide 7 — Light background template

**Background:** white (`#FFFFFF`)
**Pre-placed elements:** Y-logo (top right, dark green), page number (bottom left), terms (bottom right)
**Use for:** text-heavy content slides, comparison slides, detail-rich slides where readability matters most.

When using this template:
- Duplicate slide 7 to start a new content slide.
- Add a slide title (top left, 15pt Inter Semibold, black or default body colour — slide titles are not coloured).
- Add section headers in Dark Green (`#10615F`).
- Compose content below following the brand rules (fonts, colours, box fills, image treatment).

---

### Slide 8 — Dark background template

**Background:** dark green gradient (`#002323` to `#014444`)
**Pre-placed elements:** Y-logo (top right, white), page number (bottom left), terms (bottom right)
**Use for:** impact slides, stat callouts, visual slides, transitional content within a section.

When using this template:
- Duplicate slide 8 to start a new content slide.
- Add a slide title (top left, 15pt Inter Semibold, white).
- Add section headers in Fluro Lime (`#B8FD00`).
- Compose content below following the brand rules.

---

## How to use this catalog

**When picking a layout for new content:**

1. Check if the content is one of the six fixed-template use cases (title, divider, agenda, timeline, Gantt, quote). If yes, use the fixed template verbatim.
2. Otherwise, choose a background template (slide 7 or 8) based on the brand rule (light for text-heavy, dark for impact), duplicate it, and compose the slide freely within the brand rules.

**Composition guidance for content slides:**

- Vary compositions across consecutive slides — avoid two slides in a row with the same structure.
- Alternate between light and dark backgrounds across a deck for visual rhythm.
- Apply the section header colour rule strictly: Fluro Lime headers on dark, Dark Green headers on light.
- Keep text inside shapes readable (minimum 9pt).
- Match composition complexity to content density: simple content gets simple compositions.

**When in doubt:**
- Prefer simpler compositions over complex ones.
- Never modify the fixed templates or backgrounds — only the content on top.
- Never use a colour, font, or visual element not specified in the brand rules.
