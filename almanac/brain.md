# Brain: generic design knowledge

Product-agnostic principles that apply to any product or brand. Almanac-specific knowledge lives in `neuron-almanac.md`. Read both. Add to this file whenever something generic is learned. Last updated 4 Oct 2026.

Sources: Apple HIG, Material 3, WCAG 2.2, the GOV.UK Design System, NN/g, Vitaly Friedman (Smart Interface Design Patterns), Adam Silver (Form Design Patterns), Penpot, Pimp my Type, Datawrapper, Emil Kowalski, the AI UX Playground catalogs, and GitHub skill packs. Many links (LinkedIn, Medium, lnkd.in) couldn't be fetched, so those topics are written from established practice by the same authors. Verify against the originals when you can open them.

## 1. Layout and responsive
- **Size classes:** compact under 600, medium 600–839, expanded 840–1199, large 1200 and up. Design per class, not per device.
- **Navigation by class:** a bottom bar with 3–5 frequent tasks plus More on compact; a rail on medium; a sidebar or drawer on large. Order tabs by task frequency. Use a hamburger only for secondary items.
- **Canonical layouts:** list-detail, supporting pane (about 1/3), feed. At most 2 panes; fixed panes about 360px.
- **No wasted real estate.** No empty area bigger than the section gap; grids fill every row (no 3+1 orphans); peer cards become a snap slider on compact, with the next card peeking; tablet portrait is not a big phone.
- **Spacing:** 4/8 grid; 16px margins on compact and 24px from medium. Audit off-grid values before handoff.
- **Reflow, don't stretch:** cap reading width at 45–75 characters.

## 2. Touch, input and accessibility
- **Targets:** 44pt on iOS and 48dp on Android, with 24px as the WCAG 2.2 minimum. The visual can be smaller than the hit area. Space targets at least 8px apart. Put the main actions in the thumb zone.
- **Contrast:** 4.5:1 for text and 3:1 for large text and UI parts. Never rely on colour alone; pair it with an icon or text. Check charts for colour blindness: avoid red/green pairs, vary lightness, label directly.
- **Screen readers:** use the real heading order, landmarks, labelled controls and polite live regions for async updates. Provide a skip link. Icon-only buttons need an aria-label.
- **Neurodivergent users:** predictable layouts, plain literal language, no autoplay or flashing, reduced-motion support, clear next steps, minimal time pressure, and calm colour.
- **Reduced motion:** a real alternative, either a cross-fade or nothing.
- Support zoom at 200%, text scaling and user spacing without clipping.

## 3. Typography
- Use at most 2 families with strict roles. A display serif belongs only at large sizes (32px and up); use a sans for the UI.
- **Hierarchy:** size, weight and space first, colour last. Steps must differ obviously; use no more than 4 sizes and 2 weights per screen; don't skip heading levels.
- **Body text:** 16–18px on screen (Pimp my Type), line-height 1.4–1.6, and never below 12px.
- Use tabular lining numerals for data. Keep mono for codes people copy.
- `text-wrap: balance` on headings and `pretty` on paragraphs. Never break mid-word; wrap rather than truncate.

## 4. Forms (Adam Silver, GOV.UK)
- One question per page for complex flows; one column; labels above fields; hints under labels; never a placeholder as the label.
- Size the field to the expected input. Use the right `type`, `inputmode` and `autocomplete`. Don't split dates or phone numbers unnecessarily.
- Mark optional fields as "(optional)", not required ones with an asterisk.
- **Validation:** on submit, show an error summary at the top that links to each field, plus an inline error per field. Live validation only after a field has been touched, and only to confirm success or fix as the user types.
- **Errors** say what happened and how to fix it: "Enter a UK postcode, for example SG1 2AA". Never "Invalid input".
- Don't disable the submit button; let it submit and explain what's missing.
- Checkboxes are for any number of choices and radios for exactly one; use a select only for long lists. Use a combobox with type-ahead for long single choices and a multiselect with chips for several.

## 5. Wizards and progress (NN/g)
- Use a wizard for infrequent, linear tasks with dependencies. Show the steps (fewer than 7 visible), the current position and what's left.
- Allow back without losing data. Save progress. End with a review step, with "Change" links back to each section.
- Order the steps easiest first, so momentum builds. Explain why sensitive data is needed, at the point it's asked for.

## 6. Actions, cancel, back, confirm
- **Hierarchy:** one primary action per screen; secondary as outline; tertiary as a link.
- **Cancel** is usually a link, not a button: it lowers the chance of mis-clicks and keeps the primary action dominant. Put it after the primary action.
- **Back:** predictable and preserving state. In-page "← Back to X" names the destination. Never reset progress. Support system back and swipe.
- **Confirm or undo:** prefer undo for reversible actions (a toast with "Undo" for 5–10s). Confirm only for destructive, irreversible ones, and name the action in the button ("Delete 3 invoices", not "OK").
- **Hidden or disabled:** hide what's irrelevant to the role or state. Disable only when the user can make it available, and explain how in a tooltip or inline note.

## 7. Overlays
- **Modals** are for short, focused decisions only. Never stack them; trap focus and return it on close; Escape closes.
- **Sheets:** bottom sheets on mobile for contextual actions; side sheets for previews.
- **Toasts:** confirmations only (no errors that need action), 4–6s, pause on hover, one at a time or stacked, with a polite live region.
- **Tooltips** hold supplementary info only, never essential info. They must be reachable by keyboard and touch.
- **Context menus:** always also offer a visible way to reach the same actions.

## 8. Navigation patterns
- **Top or side:** use a top nav for fewer than 6 sections on marketing sites, and a side nav for apps with many sections or deep hierarchy.
- **Mega dropdowns:** open on click (or hover with intent delay), group in columns with headings, close on Escape and outside click, and keep them keyboard navigable.
- **Sticky menus:** show on scroll-up and hide on scroll-down on mobile; keep them short.
- **Pagination vs infinite scroll:** paginate when users need to find things again or reach the footer; use "Load more" as the compromise; reserve infinite scroll for feeds. Keep scroll position on back.
- A table of contents suits long pages: sticky on desktop, collapsible on mobile.

## 9. Tables, filters, search, sorting
- **Tables (Andrew Coyle):** left-align text and right-align numbers, with headers aligned to match. Use hairline row rules, no vertical rules, and no zebra stripes combined with rules. Sticky header, plus a sticky first column on wide tables. Row height 40px comfortable and 32px compact (as a toggle). Make whole-row click targets, and keep row actions on hover or in a kebab menu.
- **Mobile tables:** stacked list rows: primary field and status on line 1, 2 key values on line 2. Never scroll a wide table sideways on a phone.
- **Data grids:** support column resize, hide and reorder, frozen columns, bulk selection with a count bar, and inline edit only when frequent.
- **Filters:** visible facets on desktop and a sheet on mobile. Show the applied filters as removable chips with a result count, plus "Clear all". Apply instantly on desktop, and use an "Apply (n results)" button on mobile. Never return zero results without explaining why.
- **Sorting:** a clear indicator on the sorted column, a sensible default (most recent or most relevant), and stability within a sort.
- **Search (Pencil & Paper):** a visible field (not just an icon) when search is primary. Offer autocomplete with recent searches and suggestions, highlight the matched term, and tolerate typos. An empty results page offers alternatives. Scope search to the current context with a way to widen it.

## 10. Data visualisation and dashboards
- Every chart answers one question; put that question in the title. Label directly instead of using legends, start bars at zero, and keep colour to a minimum (one highlight colour).
- **Dashboards:** at most 4 KPIs at the top answering "what needs me today", then trends, then detail. Everything is actionable, with a link from each KPI to its list.
- Colour-blind-safe palettes; vary lightness, not just hue.

## 11. Components: choosing correctly
- **Badges vs chips:** a badge is a read-only status or count; a chip is interactive (filter, choice or input) and needs focus and a selected state.
- **Accordions:** for optional and reference content only, never for key steps. The whole header is the target and has a chevron. Allow several sections open at once.
- **Carousels:** avoid for key content. If used, provide visible controls, no autoplay, and a peek at the next item.
- **Sliders:** only for approximate values. Pair them with an input for exact ones.
- **Drag and drop:** always provide a keyboard and button alternative.
- **Dropdowns:** native selects for short lists, and a combobox with search for more than 10 items.
- **Icon labels:** label icons except universal ones (search, close, menu). Use one icon library with a consistent stroke.
- **Placeholders:** example values only, never instructions or labels.

## 12. States, loading, feedback
- **Every screen:** loading, empty, partial, error, offline, permission denied, very long and very short content.
- **Loading:** a skeleton matching the final layout for known structure. A spinner gets a 200ms delay and stays at least 400ms. Measurable work gets a progress bar; never fake precision; keep existing content visible.
- **Empty states:** say what goes here, why it's empty and what to do next, with one action.
- **404 pages:** plain apology, search, links to key areas and a route home. Personality is fine; dead ends aren't.
- Every tap gets immediate feedback (a pressed state).

## 13. Onboarding and offboarding
- **Onboarding:** define the aha moment and shorten time to value. Ask for permissions in context. Use empty states as guided first steps. Use progressive disclosure over tours, and make any tour skippable.
- **Bulk import:** a template download, a preview with per-row validation, fix-in-place, partial import with a report, and undo.
- **Offboarding:** make cancelling as easy as signing up. Offer pause and downgrade, export data, confirm what happens to it, and never shame the user.
- **Authentication:** passkeys, magic links and OTP with `autocomplete="one-time-code"`. Allow paste, show the password, and give clear recovery. Never block password managers.

## 14. Notifications
- Choose the right mechanism: an indicator (passive), validation (caused by the user's input) or a notification (an external event).
- Set attention levels high, medium and low. Default to quiet. Offer modes (Essential, Recommended, Everything), digests, quiet hours and snooze. Group repeats. Every notification links to its exact item.

## 15. Motion (Emil Kowalski, uxdesign.cc)
- Decide whether to animate before deciding how. Motion explains a change: hierarchy, cause and effect, or continuity.
- **Timing:** 150–300ms for UI; ease-out to enter, ease-in to exit, ease-in-out to move. Animate only transform and opacity.
- **Transitions:** forward slides left, back slides right; shared-element continuity for list to detail; fade-through for unrelated views.
- Make motion interruptible, never block input, and honour reduced motion.

## 16. Content and voice
- Plain, specific and active. Lead with the point. Buttons say what they do. One term per concept. Sentence case.
- **No AI slop** (petergyang/no-ai-slop): no binary contrasts ("It's not X. It's Y."), throat-clearing openers, faux-insight setups, colon reveals, dramatic fragments, puffery ("pivotal", "testament", "seamless"), weasel attribution, synonym cycling or fake-profound endings. Prefer concrete detail.
- **Voice and tone:** the voice stays constant while the tone shifts with the moment: celebratory for success, calm for errors, serious for money.
- **Localisation and multilingual:** allow 30–40% text expansion. No text in images. Use locale formats for dates, numbers and currency. Never concatenate strings. Support RTL. Provide a language switch labelled in each language's own name, never as a flag.
- **AI interfaces:** show what the AI did and why (explainability), let users correct or override it, and label AI output. Chat UIs need clear turn structure, streaming states, retry and copy. AI features must still meet accessibility rules.
- **Personalisation:** transparent and controllable, with a way to reset.

## 17. Marketing pages
- Make the value proposition clear in 5 seconds. Use one primary CTA and put proof next to it (real logos, metrics, reviews; socialproofexamples.com, swiped.co). Never fake proof.
- **Pricing pages:** 3 tiers with a recommended one, an annual/monthly toggle, a feature comparison, an FAQ and a "Contact sales" path.
- **FAQs** answer real objections; put the most asked first, and link out instead of writing walls of text.
- **Reviews and ratings:** show distribution, recency and verified status; allow sorting by most helpful.
- **Data and trust patterns** (catalogue.projectsbyif.com): explain data use at the point of collection, ask for granular consent, and let users see and revoke access.

## 18. Design systems
- Tokens first: semantic names over raw values. Components carry their own responsive behaviour. Give a quality bar for every native control (selects styled to match inputs, chevrons inset 12px).
- Check each component in default, hover, focus, disabled, error and dark states, at 100% and 200% zoom.
- Keep a master plus page-override files (ui-ux-pro-max pattern): the master holds global rules, and page files hold only deviations.
- A DESIGN.md documents the governing language: atmosphere, colour roles, type, component styling, layout principles and banned patterns.
- **Anti-slop (taste-skill):** tune variance, motion and density on purpose. No purple/pink AI gradients for finance; no emoji as icons; no em dashes as separators.

## 18b. White-label theming
- Allow one customer colour; derive the rest. Gate it on contrast, with an automatic same-hue fix. Lock the semantic colours and the type and spacing scales. Scope it to the customer's own surfaces. Provide a live preview and a reset. Logos go in a neutral tile, so any shape or colour works.

## 19. Process and quality
- **Design it twice:** explore 2–3 radically different directions for big decisions.
- **Blind critique** against a rubric (system fidelity, coherence, craft, UX, accessibility). "Looks good" scores 6/10; anything higher needs evidence. Sort findings into blocking, important and polish.
- **Superpowers workflow (obra/superpowers):** brainstorm, then write a plan, then execute in small verified steps, then review. Test before claiming done.
- **gstack roles (garrytan/gstack):** review the same work as product lead (is this the right thing?), engineering (will it hold?), design (is it crafted?) and QA (does it work?) before shipping.
- **Caveman (JuliusBrussee/caveman):** terse, low-token communication for agent work. Cut filler.
- **Frontend slides (zarazhangrui/frontend-slides):** HTML decks built from style presets, one idea per slide, with visual previews before committing.
- latent-spaces/brag: not read; check its purpose before using.
- **Research:** interviews and usability tests need 5–8 people per segment. Synthesise with affinity maps and jobs to be done.
- Before handover, check 390×844, 834×1112 (both orientations), 1112×834 and 1440×900.
