# HeadBox Design System

Extracted from the clickable prototypes in this project — the guest brief flow and the
venue listing flow — not from a Figma file or the production codebase. Everything here is
observed in those prototypes and their source references (`reference/`, `img/`).

**Sources used**
- `HeadBox Venues - Listing prototype.dc.html` — venue-side flow (landing, join, my venues, venue setup, space setup, confirm, review).
- `HeadBox - Brief flow prototype.dc.html` — guest brief flow.
- `reference/` — original HeadBox page HTML and `styles.css` the prototypes were built from.
- `img/` — photography, icons and the landing illustration taken from those pages.
- Form structure follows Adam Silver, *Form design: from zero to hero* (https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/).

There is no Figma file and no repository connected. The HeadBox wordmark exists only as
inline SVG inside the prototype headers; no standalone logo file was provided, so `assets/`
contains no logo — render the wordmark from the prototype source, and do not redraw it.

## Index

- `styles.css` — the entry point. Consumers link this one file.
- `tokens/` — `colors`, `typography`, `spacing`, `radii`, `shadows`, `controls`, `fonts`.
- `components/actions/` — Button.
- `components/forms/` — Field, TextInput / Textarea / Select, Checkbox, ChipCheckbox.
- `components/layout/` — Stepper, BottomBar, Card / StatusBadge.
- `guidelines/` — 15 specimen cards (colour, type, spacing, radii, elevation, focus, icons).
- `assets/icons/` — 26 line SVGs. `assets/imagery/` — landing illustration and two venue photos.
- `SKILL.md` — for use as an Agent Skill.

Fonts come from Google Fonts (Montserrat 400/700, Open Sans). No binaries were provided, so
`tokens/fonts.css` imports them by URL rather than declaring `@font-face`. **If you have the
licensed font files, send them and I will self-host them.**

## Content fundamentals

Second person, present tense, plainly instructional. Screens are named for the thing being
described, not the task: "Venue location", "Space photos", "Event types" — no "Let's…",
no "Step 3: tell us about…". Sentence case everywhere except the wordmark; headings never
end in a full stop, body sentences do.

Copy explains *why* a field exists rather than what to type: "Enquiries from guests are sent
to this address", "We ask for these details so you get paid when your space is booked".
Constraints are stated up front, never as an error after the fact: "At least 10 characters
and one number", "Choose up to 3", "N characters left".

Buttons name the outcome — "Create account", "Save & continue", "Submit for review",
"+ Add space" — and carry a trailing → on forward progression, a leading ← on Back. Never
"Submit", "Next" or "OK" alone. Sell copy is direct and unhyped: "Join HeadBox and list
your venue for FREE" (FREE is the one shouted word in the system). No emoji in UI chrome;
the prototypes use one 🤑 on the billing screen, inherited from the source — treat it as
legacy, not a pattern.

## Visual foundations

**Colour.** One action colour, #16719B, doing every job: primary buttons, links, selected
borders, step indicators. #0F5473 is its hover and its focus ring. Two tints —#F2F9FC for
selected surfaces, #F7FBFD for hovered dropzones — plus #F2F6F8 for hovered list rows.
Red #AF231C belongs to the wordmark only. Amber #F1AE2A is the single status colour.
Backgrounds are white; #2f2f2f appears as a dark panel behind the landing illustration and
nothing else. Two background colours per screen, maximum.

**Type.** Montserrat 400/700 for all UI and headings; Open Sans 400 for long-form copy.
No mid weights. Display 46px, h1 40px, h2 22px, body 18px, controls 17px, actions 15px,
labels and hints 14px, eyebrow 11px uppercase at 0.08em. Below 860px, display drops to 32px
and h1 to 30px. Body copy is capped at ~52ch; forms at 640px.

**Spacing.** 4px base. 8px label-to-control, 28px field-to-field, 20px card padding,
24–32px between sections, 56px sidebar-to-content (32px below 1080px). Page gutters are
`clamp(16px, 4vw, 20px)` — never a fixed 20px. Card grids are intrinsic
(`auto-fit minmax(240px, 1fr)`), so there is one JS breakpoint at 860px and a sidebar
narrowing at 1080px, and nothing else.

**Borders over shadows.** Depth is drawn, not lit: 2px #8a8a8a on controls, 2px dashed
#8f8f8f on upload zones and empty slots, 1px #e4e4e4 on cards, 1px #e6e6e6 hairlines.
The only shadows in the system are the sticky header (`0 4px 2px -2px #dbdbdb`) and the
bottom bar (`0 -2px 8px rgba(0,0,0,.06)`). Cards, chips and inputs are flat.

**Radii.** 6px list rows and nav pills, 8px inputs and buttons, 10px media and small cards,
12px venue cards and the hero panel, 999px chips, 50% step indicators and status dots.

**States.** Hover darkens rather than lifts: primary → #0F5473; secondary inverts to filled;
chips take a #16719B border; dropzones take a #16719B border on #F7FBFD; list rows tint
#F2F6F8. Selection is a 2px #16719B border on #F2F9FC — colour plus border, never colour
alone. Disabled is opacity .45 with `cursor: not-allowed`, used only when a cap is reached.
There are no transitions, no transforms and no entrance animations anywhere except the guest
flow's matching sequence; motion is not part of the vocabulary.

**Imagery.** Real venue photography, warm and daylit, 3:2 crops at 10px radius, always
`object-fit: cover`, always `alt=""` when decorative. No gradients, no textures, no overlay
scrims. The one illustration sits on a #2f2f2f panel on the landing screen.

**Layout rules.** Sticky white header with a 170px wordmark; content centred at 1200px;
multi-step flows get a fixed bottom bar (Back left, forward action right) and 110px of page
padding to clear it. Single-purpose forms have no bottom bar — their submit button sits
directly below the last field, left aligned.

## Forms

The rules the flows follow, all from the Silver piece:

- One column. No side-by-side fields, at any width.
- Labels above controls, always visible, 14px bold. No placeholders, no floating labels.
- Hint text between label and control, wired with `aria-describedby` — never revealed only on error.
- One width for every control in a form, so the column reads as a single edge.
- Submit directly below the last field, left aligned, one per form, named for the outcome.
- `fieldset`/`legend` around every group of chips or radios.
- Caps announced live ("2 of 3 chosen"), not enforced silently.
- `autocomplete` and `inputMode` on every field that has a sensible value.

## Accessibility

AA is a floor, not a target. Control borders meet 3:1 non-text contrast; #6b6b6b is the
lightest text permitted on white. Every interactive element is at least 44px. Actions are
`<button>`, navigation is `<a>`. `:focus-visible` shows a 3px #0F5473 ring at 2px offset.
Each screen has a skip link to `#main`, `aria-current` on the active step and nav item, and
decorative imagery marked `alt=""`.

## Iconography

26 single-colour line SVGs in `assets/icons`, copied from the HeadBox source: facilities
(wi-fi, natural light, parking, accessible entrance…), services (catering, DJ, security,
technical assistance…) and capacity formats (standing, boardroom, cabaret, theatre,
u-shaped, classroom, dinner rounds). Rendered at 20–28px beside a label inside a chip or a
capacity row. No icon font, no CDN set, no emoji in chrome. Do not draw new icons — if a
concept is missing, ask for the asset.

## Intentional additions

None. Every component here appears in the prototypes.

## Not yet covered

The guest brief flow's date tabs, budget slider and results cards are in the prototype but
not yet extracted as components; the error-summary and inline-error pattern from the Silver
piece is documented above but not built.
