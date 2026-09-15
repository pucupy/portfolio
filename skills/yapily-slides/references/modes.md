# Mode Workflows

This file contains the detailed workflows for Rebrand and Update modes. Read this file when one of these modes is active.

(Build mode does not need a separate workflow — it uses the standard workflow in SKILL.md directly.)

---

## Rebrand mode workflow

When rebranding an off-brand or old-brand deck:

1. **Read each input slide for content only.** Extract: titles, key points, data, quotes, images, narrative arc. Note what content type each slide carries (is this a quote? a timeline? a stat callout? a comparison?). Ignore layout, composition, decoration, and any non-current branding.

2. **Build an internal content brief** from the extracted material. This is your input to the standard workflow.

3. **Map content types to Yapily layouts:**
   - Content that was a quote in the original → use slide 6 (Quote) in the Yapily template
   - Content that was a timeline → use slide 4 (Timeline)
   - Content that was a Gantt/roadmap → use slide 5 (Gantt)
   - Content that was an agenda → use slide 3 (Agenda)
   - All other content → compose fresh on light or dark background per the brand rules
   
   This is content-type-to-layout mapping, *not* layout-to-layout copying. A quote stays a quote; how it's visually arranged on the slide is decided fresh based on the current Yapily template.

4. **Do not preserve the original slide count.** The output may have fewer or more slides than the input. Thin slides may merge, dense slides may split, redundant slides may be cut.

5. **Handle graphs, charts, and images differently:**
   - **Graphs and charts (bar charts, line charts, pie charts, any data visualisation):** do not attempt to recreate. Create a placeholder slide where the chart belongs, with a clear text note indicating what should go there. Example: "[Chart placeholder: bar chart showing Q1-Q4 2026 revenue by region. To complete: rebuild in Sheets/Excel using brand colours and insert as image.]" Charts are out of scope for the skill; the user will add them after.
   - **Other images (logos, photos, screenshots, illustrations, diagrams that are not data charts):** carry over from the original if quality is acceptable. Place them in the new composition.

6. **Hard rule: never use uploaded slides as a visual or composition reference.** The only visual references are `assets/Yapily_Master_Slides_v2.pptx` and `references/brand-rules.md`. Uploaded slides supply *content* only.

7. **Sense-check at the end:** the output deck should look like a Yapily deck that happens to cover the same content as the input, not like the input deck reskinned. If the output is recognisably derivative of the original's composition, restart that slide.

Then follow the standard workflow in SKILL.md, treating the content brief from step 2 as the input.

---

## Update mode workflow

When updating an on-brand deck with new period info:

1. **Preserve the existing deck structure.** Same slide count, same order, same layouts, same brand styling. Do not "improve" anything that wasn't named for change.

2. **Identify update-eligible content.** For each slide, note what's likely to change period-to-period:
   - Numbers, stats, metrics, percentages
   - Dates, period references ("Q1," "May 2026," "last week")
   - Named people, companies, or prospects in recent-context slides
   - Recent events, recent wins, recent blockers
   
   Distinguish from durable content that usually stays the same:
   - Strategy, mission, framing
   - Templates of who presents what
   - Long-running narrative sections

3. **Collect the new information from the user.** This was the purpose of the mode announcement. If the user provided new info in their confirmation, apply it. If they gave partial info, ask one focused follow-up. If they gave general direction ("just refresh it for Q2"), ask for the specific data points needed.

4. **Apply the changes surgically.** Only modify the content elements identified in step 2 and confirmed by the user. Do not touch anything else.

5. **Confirm brand and layouts are preserved.** The output should be visually identical to the input except for the updated content. If you notice any drift (a colour off, a font substituted, a logo moved), flag it to the user but do not "fix" it unless asked.

6. **Handle additions and removals.** If the new period has content that doesn't fit any existing slide (a new recurring section, a new event), add a slide that matches the existing deck's style. If the new period doesn't have content for an existing slide (e.g. no blockers this quarter), confirm with the user before removing the slide.

7. **Skip the "vary composition" and "compose freshly" rules.** Those are for new builds. Update mode is intentionally about preservation.

Then proceed to QA. The structure approval step from the standard workflow can be skipped for Update mode since structure is preserved by definition — unless the user has made changes that affect slide count or order, in which case propose the revised structure before applying.

---

## Announcement templates

Both templates are short. Adapt them to the specific deck — names of sections, current values, etc.

### Rebrand mode announcement

> "I've looked at this deck — [briefly note what's old or off-brand: e.g. 'using older Yapily branding with the lighter teals and wordmark logo throughout']. I'll rebrand it: extract the content from each slide and rebuild it fresh on the current Yapily template. Slide count and structure may change to match what works on the new template.
>
> If you wanted just to update the content while keeping the existing layouts, tell me before I start."

### Update mode announcement

> "Looks like this is your [deck type, e.g. 'Q1 all-hands deck'] on the current brand. I'll update it for [target period/audience]: keep all the layouts and brand styling as-is, refresh the content. Here's what typically changes:
>
> - Slide [N]: [content area, with current value if relevant]
> - Slide [N]: [content area]
> - [...]
>
> What's the new info for [period/audience]? If anything else needs to change beyond a content refresh, tell me. If you'd rather I rebuild from scratch, tell me now."

The list of "what typically changes" should be specific to the deck — read it, identify which content is period-specific (dates, numbers, names, recent events) vs durable (strategy, framing, mission statements).
