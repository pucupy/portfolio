# Handoff: HeadBox venue listing flow (+ guest brief flow)

## Overview
Two clickable prototypes for HeadBox:
1. **Venue listing flow** — a venue owner joins HeadBox, creates an account, adds a venue (location, event types, facilities, documents, billing) and then a bookable space (details, photos, capacity, booking type), confirms and submits for review.
2. **Guest brief flow** — an event planner builds a brief (event type, location, date, guests, format, must-haves, budget, description) and sees matched venues.

## About the design files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour, **not production code to copy directly**. The task is to recreate these designs in the target codebase's existing environment (React, Vue, Rails views, etc.) using its established components, tokens and patterns. If no environment exists yet, pick the most appropriate framework and implement there.

The prototypes are authored as single-file components with **inline styles only** (a streaming-preview constraint of the design tool). Do not treat the inline styles as an instruction — convert them to the codebase's styling approach (utility classes, CSS modules, styled-components…). Values below are the source of truth.

## Fidelity
**High fidelity.** Colours, typography, spacing, states and copy are final. Recreate pixel-accurately using the codebase's existing libraries. Layout is responsive; behaviour is real (state, toggles, validation-free happy path).

## Screens / views

### Venue listing flow (`venue-listing.html`)
Shell for every screen: sticky white header (logo 170px wide, right-side "My venues" / "Save & exit" text buttons), 1200px max-width centred content with `clamp(16px, 4vw, 20px)` horizontal gutters, and — on venue/space steps — a fixed bottom action bar (Back / Continue).

| Screen | Purpose | Notes |
|---|---|---|
| Landing | Sell free listing | Two-column (1fr / max 420px illustration panel on #2f2f2f, radius 12px). H1 46px (32px mobile), lede 18px #5a5a5a, numbered 3-step list with 40px #16719B circles, primary CTA "Join for free". Below: "Listing your venue" 3 benefit cards in `repeat(auto-fit,minmax(240px,1fr))`, then "Trusted by" logo row (52px tall, 28px gap). |
| Join | Create account | Logo upload (72px dashed square) + single-column form (Company name, Role select, First/Last name, Venue email, Password), each label above its control with hint text between, marketing opt-in checkbox, "Create account" below the last field. Full client-side validation with error summary. |
| My venues | Manage venues/spaces | H1 + "+ Add venue" outline button; venue card (1px #e4e4e4, radius 12px, 20px pad) with space cards (max 280px, 3:2 photo, name, status) and "+ Add space" primary button. |
| Venue location | Address capture | Full-width Venue name, description textarea (288 char max), Address; then Postal code / City / Country in 2-col grid. |
| Event types | Positioning | Fieldset + legend; pill checkbox chips, **max 3**, live "N of 3 chosen" (aria-live=polite); over-limit chips drop to opacity .45 / not-allowed. |
| Venue facilities | Amenities | Two fieldsets (facilities, services), icon + label pill chips, multi-select unlimited. |
| Venue documents | Uploads | Dashed dropzone label wrapping a visually-hidden file input, max 640px, 44px padding. |
| Billing | Payout details | Bank name / Account number / Sort code, invoicing company, "VAT registered" checkbox revealing VAT number, "I'll do this later" skip. |
| Space details | Space copy | Space name, description with live "N characters left" (288 cap). |
| Space photos | Imagery | `repeat(auto-fill,minmax(200px,1fr))` grid (140px min on mobile), 3:2 crops radius 10px, dashed add tile, "N photos added". |
| Capacity | Formats | `repeat(auto-fit,minmax(280px,1fr))` cards, icon + number input per format (Standing, Boardroom, Cabaret, Dinner/Rounds, Classroom, U-shaped, Theatre). |
| Booking type | Instant book | Explanatory copy (£5000 threshold) + single selectable checkbox card, selected = 2px #16719B border on #F2F9FC. |
| Confirm | Review before submit | Photo (max 340px col) + details column with per-section Edit buttons, chosen event-type tags, capacities summary. |
| Under review | Terminal state | Amber #F1AE2A status dot, "Under review", H1 "<space> is with our team", "Back to my venues". |

Sidebar stepper (venue and space step groups, hidden below 860px): 240px column (200px under 1080px), 1px #e6e6e6 right divider, uppercase group title, "Step N of M", step rows as buttons with 22px circular indicators — done = ✓ on #16719B, current = filled #16719B + #F2F9FC row + `aria-current="step"`, upcoming = #fff with 2px #8f8f8f border. Below 860px it is replaced by a single "Step N of M · Label" line above the heading.

### Guest brief flow (`index.html`)
Landing → eight brief steps (type, location, date, guests, format, must-haves, budget, what's your event) → matching animation → venue results. Same shell, chips and stepper vocabulary as above. `HeadBox - Type of event (polished|current).dc.html` and `venue-location-current.html` are before/after single-screen comparisons.

## Since the previous export

- Header "Save & exit" removed from every screen and both flows, along with the account-prompt
  dialog and its logic.
- Contrast: the icon SVGs shipped at #CCCCCC (1.6:1) and #2A9FD8 (2.8:1) and are recoloured to
  #2f2f2f / #16719B; the five "Trusted by" logos were white-filled (invisible on white) and are
  now #2f2f2f; the hero illustration's blue accents lifted to #7FC4E8 for 3:1 on #2f2f2f; chip
  checkbox boundary #9a9a9a → #8a8a8a; the amber status dot is ringed #8a6d1f so its shape is
  discernible. Every glyph and control boundary now clears 3:1, every text colour AA.
- "Trusted by" logos normalised to a 40×120 box with object-fit: contain.
- Prototype navigation reduced to two entries: Create your free listing, Find the perfect venue.
- design-system/ carries styles.css, the tokens and the design guide.

- Join is a real `<form>`: single column, no placeholders, hint text above the control, submit
  directly below the last field. On submit it validates, renders an error summary (`role="alert"`,
  links to each field), marks fields `aria-invalid`, moves focus to the first invalid field, then
  shows "Creating account…" with `aria-busy` and blocks duplicate submits.
- `box-sizing: border-box` on all controls; every field is one width (the 640px form column).
- Venue location and Billing follow the same single-column rules.
- Wordmark is a `<button aria-label="HeadBox home">`, not an `<a href="#">`.
- Added `prefers-reduced-motion`, `touch-action: manipulation`, deliberate tap-highlight,
  `scroll-margin-top` under the sticky header, tabular numerals on capacity inputs, per-screen
  `document.title`, font `preconnect` + `display=swap`, `width`/`height` on every image and
  `loading="lazy"` below the fold.
- Typography: real ellipses, curly apostrophes, non-breaking amounts, `text-wrap: pretty`.
- "Trusted by" logos normalised to a 40×120 box with `object-fit: contain`.
- Header "Save & exit" removed. The account-prompt `<dialog>` remains in the source but is no
  longer reachable — delete it if the pattern isn't wanted.
- Prototype navigation is two entries: Create your free listing, Find the perfect venue.

## Interactions & behaviour
- Navigation is a linear `next`/`back` map over screen keys; sidebar steps jump directly. Every transition scrolls to top.
- Chips are real `<input type="checkbox">` elements, visually hidden, wrapped in a styled `<label>`; the visible 18px box draws a CSS tick. Focus is reflected as `0 0 0 3px rgba(22,113,155,0.35)` on the pill.
- Event types cap at 3: extra chips become disabled-looking (opacity .45, cursor not-allowed) and the count line announces politely.
- VAT number field is revealed only when "VAT registered" is checked.
- Photo add appends from a stock list; counts and confirm-screen hero derive from that array.
- Hover: primary #16719B → #0F5473; outline button inverts to filled; chips border → #16719B; dropzones → #16719B border on #F7FBFD; sidebar rows → #F2F6F8.
- Responsive: single JS breakpoint at 860px (type scale, sidebar, hero, form columns) plus a 1080px sidebar narrowing; all card grids are intrinsically responsive via `auto-fit/auto-fill minmax()`.

## Accessibility (implemented — please preserve)
- WCAG 2.1 AA colour contrast: body #2f2f2f on #fff, secondary text #5a5a5a / #6b6b6b, links & primary #16719B (5.4:1), hover #0F5473. Non-text contrast ≥3:1 on control borders (#8a8a8a inputs and chips, #8f8f8f dashed dropzones and upcoming step dots), placeholders #6b6b6b.
- All action controls are `<button type="button">` (not anchors), so role, Space/Enter and focus order are correct. Anchors are used only for real navigation.
- `:focus-visible` ring: 3px solid #0F5473, 2px offset.
- 44px minimum interactive target on every button, chip, step row and header action.
- Skip-to-content link (visually hidden until focused) to `#main`.
- Semantics: `<fieldset>/<legend>` on chip groups, labels bound with `for`, `aria-describedby` for the password hint, `aria-live="polite"` on the selection count, `aria-current` on the current step and current nav item, decorative imagery `alt=""` and `aria-hidden` on ornamental glyphs.

## State
`screen` (one of home, join, venues, location, types, facilities, documents, billing, details, photos, capacity, booking, confirm, review) · `w` (viewport width) · `focus` (focused chip label) · `types[]` (max 3) · `facilities[]` · `services[]` · `spaceName` · `spaceDesc` (288 cap) · `photos[]` · `vat` (bool, default true) · `instant` (bool). No data fetching in the prototype; in production these map to venue and space resources plus an image upload endpoint.

## Design tokens
**Colour** — brand #16719B, brand hover/dark #0F5473, brand tint #F2F9FC, row tint #F2F6F8, dropzone tint #F7FBFD, ink #2f2f2f, secondary ink #5a5a5a, muted #6b6b6b, control border #8a8a8a, dashed border #8f8f8f, hairline #e6e6e6 / card #e4e4e4, header hairline #f1eae1, logo red #AF231C, review amber #F1AE2A, status text #8a6d1f, chrome dark #2f2f2f.
**Type** — Montserrat 400/700 (headings, UI), Open Sans loaded for body copy. Scale: 46/40/32/30/26/24/22/19/18/17/16/15/14/13px. Line-height 1.15 display, 1.2 headings, default body.
**Spacing** — 4/8/12/16/20/24/28/32/48/56px; page gutters `clamp(16px,4vw,20px)`; grid gaps 16–32px; sidebar gap 56px (32px <1080px).
**Radius** — 6px (small rows), 8px (inputs, buttons), 10–12px (cards, media), 999px (chips), 40px (numbered circles).
**Shadow** — header `0 4px 2px -2px rgb(219,219,219)`, bottom bar `0 -2px 8px rgba(0,0,0,.06)`, chip focus `0 0 0 3px rgba(22,113,155,.35)`.
**Controls** — inputs 2px border, 12px 14px padding, 17px text; buttons min-height 44px, 10–12px × 16–22px padding, 700 weight.

## Assets
- `img/icons/*.svg` — facility, service and capacity-format icons (from the HeadBox source files; filenames are slugified labels).
- `img/venues/*.jpg`, `img/*.jpg` — venue and event-type photography from the HeadBox source files.
- `img/venues/logos/*.svg` — client logos (Sky, Amazon, Uber, Pret, HSBC).
- `img/venues/hero-illustration.svg` — landing illustration.
- The HeadBox wordmark is inline SVG in the header of each prototype.
- Two space photos load remotely from `headbox-media.imgix.net`; replace with real CDN records.

## Files
- `venue-listing.html` — venue-side flow (primary).
- `index.html` — guest brief flow (repo entry point).
- `event-type-polished.html` / `event-type-current.html` — before/after of one guest step.
- `venue-location-current.html` — current-state reference.
- `support.js` — runtime for the prototype format; needed only to open the HTML files in a browser, **not** part of the design.
- `img/` — all assets above.

Open any prototype by serving the folder (e.g. `npx serve .`) and loading the file.
