---
name: yapily-slides
description: "Use this skill any time slides, decks, or presentations are being created, edited, rebranded, or updated for Yapily. Triggers include: building a sales pitch deck, partner overview deck, customer-facing slides, internal review deck, all-hands slides, one-pagers, board updates, any .pptx output for Yapily, rebranding old or off-brand decks onto the current Yapily template, or updating recurring decks (quarterly reviews, all-hands, pipeline updates, board updates) with new period information. Trigger this skill even if the user does not explicitly mention 'the Yapily template' or 'brand guidelines' — any slide work for Yapily must use this skill to ensure brand consistency. This skill overrides the generic pptx skill's design suggestions (bold palettes, visual motifs, color experimentation) for Yapily work."
---

# Yapily Slides Skill

This skill produces on-brand Yapily slides from raw content. Use the Yapily template file, follow the brand rules, and never improvise outside of what's documented here.

## How this skill works

There are four resources in this skill:

1. **`assets/Yapily_Master_Slides_v2.pptx`** — the master template file. Every Yapily deck starts as a copy of this file. Never build a Yapily deck from scratch.
2. **`references/brand-rules.md`** — the brand rules. All decisions about colours, fonts, logo, backgrounds, box fills, and what is and isn't permitted. Read this before composing any slide.
3. **`references/layouts.md`** — the layout catalog. Describes each slide in the template and when to use it. Read this when choosing layouts.
4. **`references/modes.md`** — workflow details for Rebrand and Update modes. Read this only when one of these modes is active (i.e. when slides are uploaded).

## Required reading order

When this skill is triggered, read in this order before doing anything else:

1. `references/brand-rules.md` (full file)
2. `references/layouts.md` (full file)

Both are short. Read them both. The rules in brand-rules.md are non-negotiable and override any other guidance, including the generic pptx skill.

## Input mode detection

Before starting any workflow, identify which of three modes applies:

| Mode | Input | Goal |
|---|---|---|
| Build | Written brief, outline, notes (no slides attached) | Build a new deck from scratch on the current template |
| Rebrand | Off-brand or old-brand deck uploaded | Make it match the current brand. Content stays, layouts rebuilt |
| Update | On-brand deck from a previous period uploaded | Refresh with new info. Brand and layouts stay, content updated |

### Build mode

No slides uploaded → proceed directly to the standard workflow below. No announcement needed.

### Rebrand vs Update (when slides are uploaded)

Choose based on:
1. **User wording.** "Rebrand," "make this on-brand," "redo this properly" → Rebrand. "Update," "next quarter's version," "tailor for [prospect]," "make this work for [date/event]" → Update.
2. **Visual state of uploaded slides.** Old branding (different colours, old logo, deprecated layouts) → lean Rebrand. Current branding → lean Update.

When in doubt, default to Update (the less destructive option).

### Mode announcement and wait

For Rebrand and Update modes, before doing anything else:

1. **Read `references/modes.md`** for the announcement template and full workflow.
2. **Announce the assumed mode** using the template in modes.md. Be specific — list concrete changes, not vague intent. Offer one alternative (the other applicable mode), then stop.
3. **End your turn after the announcement.** Do not begin extracting content, opening the template, or proposing structure. The user's confirmation comes as the next message.
4. **If the user confirms**, proceed with the mode workflow in modes.md, then continue to the standard workflow below.
5. **If the user redirects**, switch modes and briefly re-announce ("Got it, switching to [mode]. Proceeding now.") then continue.

---

## Standard workflow

### 1. Understand the request

Identify:
- What is the deck for? (pitch, partner overview, board update, etc.)
- Roughly how many slides?
- What raw content does the user have?
- Are there specific layouts they want (e.g. "include a timeline")?

If the user has provided raw content (an outline, notes, a document, talking points), use it. If the request is vague, ask one focused question to clarify scope before building — don't ask multiple questions.

### 2. Plan the deck structure

Map the content to slides:
- Title slide first (always)
- Agenda if the deck has 5+ slides
- Section dividers between major sections (only if 10+ slides)
- Content slides for the body
- Closing slide if appropriate

For each content slide, decide which layout to use, consulting `references/layouts.md`:
- Fixed templates (title, divider, agenda, timeline, Gantt, quote) for their specific use cases
- Light or dark background template (slides 7-8) for all other content, composed freely within the brand rules

Compose each content slide fresh. Do not reuse the same composition twice in a row — vary the structure across consecutive slides.

### 3. Propose structure and wait for approval

**This step applies to any deck of 3 or more slides, in Build and Rebrand modes.** Update mode preserves existing structure, so this step is skipped unless the user has requested changes that affect slide count or order. For decks of 1-2 slides, skip this step regardless of mode.

Before building anything, present the proposed structure to the user as a numbered list. For each slide, include:
- The slide number
- A short description of what's on it
- The layout being used (e.g. "Light background, three stat boxes")

**Density check — flag overloaded slides before building.** For each proposed slide, estimate the total content load:
- More than 12 bullet points across all boxes on a single slide → flag as dense
- More than 4 bullet points per box on a multi-box slide → flag as dense
- A box that would need 5+ items at 9pt to fit → flag as dense

For any slide that hits a density threshold, name it in the structure proposal and ask the user explicitly:

> "Slide [N] will have a lot of content ([describe: e.g. 'three boxes with 5 bullets each']). Do you want me to split this into multiple slides, cut the content, or keep it as one dense slide?"

This is a question for the user, not a decision for Claude. The user might genuinely want a dense reference slide. But they should make that call upfront rather than discovering it after the deck is built.

End with: "Does this structure work, or would you like me to adjust before I build?"

Then **wait for the user's confirmation** before proceeding. Do not start building until the user replies with approval or adjustments. If the user requests adjustments, revise the structure and confirm again before building.

For Rebrand mode, this step is especially important because content extraction from existing slides can interpret intent incorrectly. The structure proposal gives the user a chance to spot misinterpretations before any building happens.

### 4. Build the deck

Copy `assets/Yapily_Master_Slides_v2.pptx` to the working directory. Use the editing workflow from the public pptx skill (`/mnt/skills/public/pptx/editing.md`):

1. Unpack the template
2. Make structural changes: duplicate the slides needed, delete the slides not needed, reorder
3. Edit content in each slide's XML, replacing placeholder text with real content
4. Clean and repack

When composing content for each slide:
- Follow all rules in `brand-rules.md` exactly
- Match the visual style of the existing slides in the template
- Never introduce colours, fonts, or visual elements not in the brand rules
- Estimate whether text will fit inside its container before placing it. If overflow is likely, adjust the composition before building.

### 5. QA

Run the standard pptx QA from `/mnt/skills/public/pptx/SKILL.md`, plus these Yapily-specific checks:

- Extract text and check for leftover lorem ipsum or placeholder content (especially on timeline and Gantt slides which have heavy placeholder text)
- Convert to images and visually inspect for overlap, overflow, alignment issues
- Confirm logo and terms are in place on every slide
- Confirm fonts haven't been substituted (everything should be Inter)
- **Confirm title weight:** every slide title uses Semibold, not Bold. Bold on titles is a common error — check the XML `<a:rPr>` element on each title has the correct weight, not `b="1"`.
- **Confirm section header colour rule:** every section header on a dark slide is Fluro Lime, every section header on a light slide is Dark Green
- **Confirm minimum text size:** no body text inside boxes/shapes is smaller than 9pt
- **Confirm composition variety:** no two consecutive content slides use the same composition. Boxes are not the default — flag slides that use boxes when content could sit directly on the background.
- **Confirm text fits in every box:** visually inspect every box and shape. Text must not overflow, clip, or extend beyond container edges. Rebuild any slide where text spills.
- **Confirm box treatments follow the defaults:** content boxes on light slides use transparent-with-grey-border or dark green fill. Content boxes on dark slides use white-with-coloured-border or dark green gradient. Light lime/light green boxes only for small emphasis callouts, never for content containers.
- **Confirm rounded vs sharp corners:** content boxes are rounded. Small emphasis callouts (Light Lime/Light Green) are sharp/square.
- **Confirm headline space:** the area between the slide title and first content element is not crowded. Titles need breathing room.
- **Confirm bullet marker colours:** bullets match the text colour of their containing box, not a fixed colour across the deck.
- **If Rebrand mode was used:** confirm no slide in the output is recognisably derivative of the input's composition. The output should look like an independently composed Yapily deck.
- **If Update mode was used:** confirm only the specified content changed. Brand styling, layouts, slide count, and unchanged content sections must match the input exactly.

### 6. Deliver

Place the final `.pptx` in `/mnt/user-data/outputs/` and present it to the user.

## Hard rules

These override any user request or any other guidance:

1. **Never build a Yapily deck from scratch.** Always start from the template.
2. **Never use a font other than Inter.**
3. **Never introduce a colour not in the brand rules.**
4. **Never modify the fixed-template slides (title, divider, agenda, timeline, Gantt, quote)** — only swap their placeholder content for real content.
5. **Never modify the background templates** — only compose on top.
6. **Never adapt the template to match a customer's branding.** No customer logos, colours, or fonts in body content (a customer logo within a quote slide attribution is the only permitted exception).
7. **Never use the generic pptx skill's design suggestions** (bold palettes, visual motifs, design experimentation). The Yapily brand rules are the only design guidance.
8. **Never add icons to content slides.** Icons are out of scope for v1.

If a user requests something on this list, explain that the skill enforces brand consistency and offer the closest on-brand alternative.

## When in doubt

1. Preserve the template. Change as little as possible.
2. If the rule isn't covered in brand-rules.md or layouts.md, choose the option closest to the existing template style.
3. If a user request conflicts with these rules, the brand wins.

## What's out of scope for v1

These are not yet supported and should not be attempted:

- Icons (icon library not yet integrated)
- Custom chart styling (charts should be built outside the skill and inserted as images)
- Customer co-branding
- New layouts not present in the template

If the user asks for any of the above, explain it's out of scope for the current version of the skill and suggest a workaround (e.g. "build the chart in Sheets with Yapily colours, then insert as an image").
