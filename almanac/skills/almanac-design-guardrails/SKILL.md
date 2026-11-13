---
name: almanac-design-guardrails
description: Use before designing or changing any Almanac screen, feature, flow or marketing page (v3 and later). Hard rules for brand, colour, type, copy, layout, motion, mobile and accessibility, plus a pre-delivery checklist. Stops drift from the agreed visual language and mobile standards.
---

# Almanac design guardrails

Read this before building. Re-run the checklist before calling the work done. If a request conflicts with a rule, do what was asked, then flag the conflict in one line. Never silently break a rule.

Sources of truth, in order:
1. `CLAUDE.md` (scope: stick to the spec, don't invent flows or copy)
2. `uploads/almanac-context-for-claude-design.md` (v1 = as built, v2/v3 = proposed)
3. `Visual Language.dc.html` (brand)
4. `Almanac v3 Theme.css` (tokens, mobile CSS rules)
5. `v3 Mobile Standards.md` (Apple HIG + Material 3 + the provided mobile principles)
6. The Almanac design system bundle (components)

## 1. Scope
- Build only what's in the spec or the request. No new dialogs, steps, copy, sections or data.
- New ideas go in chat as suggestions, or are marked "Proposal" in the file and the changes doc.
- v1 files are frozen. Work in the latest version's copies (`* v3.dc.html`, `Proto Buyer Wizard v3`).
- Log every change in `v3 Changes.md`, marked Agreed, Proposed, Trial or Open.
- The prototype nav (version, journey, device and orientation, state, theme controls) is a review tool. Never include it, or any reference to it, in engineering handovers.

## 2. Components
- Use design-system components first (Button, Field, Input, Modal, Card, Badge, Table, MainLayout…). Don't redraw them.
- Lucide icons only, via the `Icon` component. No emoji. No custom icon SVGs.
- New patterns need a stated reason and a note for packages/ui.

## 3. Colour (tokens, not hex, in product UI)
| Role | Token | Value |
|---|---|---|
| Action, links, focus, selected, top bar | `--accent` / `--ring` / `--topbar` | Blue #2F45D0 |
| Muted panels, tints | `--muted` | Cream #ECE3D5 |
| Page background | `--muted-40` | #FAF7F2 |
| Borders | `--border` | #E2D8C9 |
| Text | `--foreground` | Ink #1A1A1A |
- Blue is a signal: one filled blue button per view. Cream is never text and never an action.
- Status colours (success, warning, danger) are unchanged, and always come with an icon or word.
- On blue use white text only. Never ink on blue (2.4:1).
- Contrast: text 4.5:1, UI and large text 3:1, in light and dark themes.
- No gradients in product UI. No purple or violet, red brand accents or heavy black fills.

## 4. Type
- Display: Newsreader Light 300, tight tracking (-0.03em). Page titles and marketing only, never bold, never in tables.
- UI and body: Work Sans 400/500/600. Body 16, UI 14, caption 12, never smaller.
- Money: mono, tabular figures, two decimals, right-aligned in tables (`£1,200.00`).
- Inputs: 16px or larger on mobile.

## 5. Copy (en-GB)
- Sentence case everywhere. "We" for Almanac, "you" for the user.
- No em dash as a separator. No exclamation marks. No hype ("Revolutionize…").
- Buttons name the action ("Connect bank account", "Save and return to review"), never "OK", "Submit" or "Click here".
- Errors say what happened and how to fix it, next to the field.
- Empty-state titles have no full stop; descriptions are full sentences.
- Names of the demo pair: supplier **BrewDog**, buyer **Kelly & Rose Taverns Ltd**, contact **Dan Kelly**.
- Buyer-facing: the supplier leads. Almanac appears as "Powered by Almanac", smaller, to the right or at the bottom.

## 6. Brand devices
- Logo: `assets/almanac-wordmark.svg`. Symbol (three neurons): `assets/almanac-symbol.svg`. A single neuron: `assets/almanac-neuron.svg` / `-outline.svg`. Never stretch, fade, tint, rotate or redraw them. White on blue, ink on light.
- Neuron network: sharp neurons, 1px lines, every neuron connected, lines never crossing or crowding. Only in hero and brand moments, kept out of the text column, contained (for example, in the hero rectangle). Never in forms or product screens.
- Imagery: real trade (warehouses, kitchens, delivery). Video and photos get the blue duotone (grayscale plus multiply blue) and must keep white text at 4.5:1 or better. Optimise for web (720p, about 1–1.5MB, lazy-loaded, with a poster).

## 7. Layout and space
- 4/8 spacing scale: 4, 8, 12, 16, 24, 32, 40, 48.
- Side margins: 16px on phones, `clamp(16px,4vw,56px)` on the site.
- Borders before shadows. Shadows only for floating layers.
- No coloured left-border accent cards. No cards inside cards.
- Breakpoints: compact below 600, medium 600–839, expanded 840 and up. Reflow, don't stretch. Cap content width on medium screens.
- Vertical rhythm by window: section padding 48 (compact), 64 (medium), up to 160 (expanded). Margins 16 / 24 / clamp to 56. Heroes are full-height only on expanded; on compact and medium they size to content.
- Grids of cards: 1-up compact, 2-up medium. Never a 3+1 orphan row.

### Vertical rhythm and anti-clash rules
- Use one spacing token between siblings: 4 (label to input), 6 (title to description), 8 (related controls), 12 (an action under its title), 16 (fields in a form), 24 (header to content, card to card), 32–48 (sections).
- An action is always closer to what it acts on than to anything else. Header actions: 12px under the title, then 24px to the content. Never closer to the next field than to its own header.
- Use flex/grid with gap, never stacked margins. Any flex row that can wrap needs a row-gap (12px minimum).
- Nothing touches: at least 8px between stacked interactive elements, and no overlap. The only exception is the sticky action bar, which sits over the content by design.
- On phones, re-check every header row (title + badge + action): it must stack cleanly with the gaps above.

## 8. Motion
| Token | Duration and easing | Use |
|---|---|---|
| instant | 100ms linear | Press, focus |
| fast | 150ms ease-out | Hover colour and opacity |
| base | 200ms cubic-bezier(.2,.8,.2,1) | Step content, info boxes, toasts |
| slow | 300ms cubic-bezier(.4,0,.2,1) | Sheets, sidebar, progress |
| brand | 600–1200ms cubic-bezier(.2,.8,.2,1) | Marketing reveals only |
- Motion explains a change. No bounce, no decoration in forms.
- Always respect `prefers-reduced-motion` (spinners may keep spinning).
- Use brightness (colour mixes), not transparency, for neuron emphasis.

## 9. Mobile (below 600px)
- Touch targets at least 44×44 (48 where space allows).
- One dominant action, within thumb reach. Multi-step forms use the sticky bottom action bar (`data-mobile-sticky` + `data-mobile-stack`): primary on top, full width, safe-area inset.
- Primary form actions are full width (`data-mobile-full`). Inline links stay inline.
- Dialogs become bottom sheets. Use sheets for short tasks only; complex work gets a full screen.
- Visible labels, never placeholder-only. Correct keyboard types and autocomplete.
- Keep the focused field visible above the keyboard and sticky bars.
- Respect safe areas. Backgrounds may run edge to edge; controls may not.
- Top bar navigation on phones (HIG + M3):
  - 1–2 items: keep them visible. No hamburger. Text buttons never wrap; if they don't fit, drop the one that's repeated on the page (for example, the hero CTA).
  - 3–5 primary destinations: use a bottom tab bar or navigation bar, not a hamburger.
  - More than 5, or secondary links (legal, help, settings): put them in a menu or drawer behind a labelled "Menu" button (44px). Never hide the primary action in it.
  - The logo goes left, then the main action right. Keep at most two controls in the bar.
- Tables on phones: never a sideways-scrolling wide table as the final design. Below 600px, use stacked list rows (primary field and status, then 2 key values and a chevron).
- Never truncate names on phones; wrap them to 2 lines.
- Page headers on phones: title and description first at full width, then the status badge and actions on their own wrapping row. Never put title and actions side by side below 600px.
- Portals on phones (portrait): a bottom navigation bar with 4 primary destinations plus "More", which opens a bottom sheet with the remaining destinations, account items and "Powered by Almanac". No sidebar. Landscape and tablet keep the sidebar or rail.
- Check the layout in the Mobile and Tablet device frames, portrait and landscape, before delivery. Tablet landscape (800px+ and wider than tall) uses the expanded layout.

## 10. Accessibility
- Colour is never the only signal.
- Visible focus ring (`--ring`, 2px, offset 2px) on every control.
- Every icon-only control has an `aria-label`. Status messages use `role="status"`; errors use `role="alert"`.
- Text scales to 200% without clipping. No fixed heights on text containers.
- Keep the user's input after errors. Undo before confirm, where possible.

## 11. States
Design what applies, beyond the happy path: default, pressed, focused, selected, disabled, loading, success, warning, error, empty, partial, long content, offline and permission denied.

## Pre-delivery checklist
- [ ] Only spec or requested content; proposals are labelled
- [ ] Design-system components and Lucide icons only
- [ ] Tokens: blue only for action and selection, cream never as text, contrast checked
- [ ] Newsreader only for display; money in mono with 2 decimals
- [ ] Copy: sentence case, en-GB, no em dashes, specific button labels
- [ ] One dominant action per view
- [ ] Mobile frame: 44px targets, 16px margins, full-width primary, sticky action bar, sheets, nothing clipped
- [ ] Tablet frame: content capped and reflowed, not stretched
- [ ] Reduced motion respected; motion uses the tokens
- [ ] Focus states, aria labels, never colour alone
- [ ] States covered (loading, empty, error at minimum)
- [ ] `v3 Changes.md` updated

## Added 4 Oct 2026
- Never break inside a word. No `overflow-wrap: anywhere` or `word-break: break-all` on copy; use `break-word` only for unbreakable tokens (emails, IDs). Labels that can't fit get a shorter label, not a wrap.
- Card grids must fill every row: choose the column count from the item count (4 items: 4, 2 or a slider), never `auto-fit` leaving a 3+1 orphan or an empty filler cell.
- On compact screens, a row of 3 or more peer cards becomes a horizontal snap slider with the next card peeking (84% width), not a tall stack.
- Bottom tab bar = the most frequent tasks, not the sidebar order. Supplier: Applications, Customers, Invoices, Notifications. Buyer: Applications, Suppliers, Invoices, Notifications. Setup and occasional items (Bank connections, Billing, Policy, Settings) go under More.
- Neurons never rotate. They react by lighting up (brightness), not by spinning or fading opacity.

## Shared mobile rules
- Responsive and mobile rules live in `Almanac Mobile Rules.css` (palette-agnostic). `Almanac v3 Theme.css` imports it and adds only the v3 palette and type. New mobile rules go in the shared file, never in the theme.
- Controls that grow on touch (inputs to 44px) must take their wrappers with them: no fixed heights on input groups.

## Vertical rhythm and anti-clash (4 Oct 2026)
- One rhythm: 4 tight (label to value), 8 (heading to its text), 12 (paragraphs, fields within a group), 16–20 (between fields), 24 (between groups or cards), 32 (between sections inside a page), 48 / 64 / 96+ (page sections: compact / medium / expanded).
- Use gap on the parent, never margins on children. No negative margins except the sticky bar bleeding to the edges.
- No fixed heights on anything holding text. Use min-height only.
- No absolute positioning over content except decoration (aria-hidden, pointer-events none) and overlays.
- Sticky or fixed bars must reserve their height: give the scroll container matching padding-bottom and scroll-padding-bottom, so the last field and the focused field are never hidden.
- Two tappable controls stacked vertically need at least 8px between them; inline links on adjacent lines need a line-height of at least 1.5.
- Text never overlaps text or controls at 390, 600, 834, 1280 and 1920px wide. Check it with the overlap audit before handover.

- Loading is never a grey box with a dark outline. Use an animated skeleton: a muted fill with a soft shimmer, md radius, no border. It is static under reduced motion. Skeletons should match the final layout.

## No wasted real estate (4 Oct 2026)
- No empty band larger than the gap between sections (48px compact, 64px regular). If a layout leaves one, change the layout; don't centre content inside empty space.
- When a two-column layout collapses to one column, the content starts at the top (not vertically centred in leftover height), and the freed column's best content moves into the stack (e.g. the sign-in brand headline sits above the form on tablet portrait).
- `min-height: 100vh` is only for screens whose content can fill it (heroes, sign-in split). Single-column screens size to their content.
- Tablet portrait is not a big phone: use the width (max-width 480–640px content, 48px padding), and keep secondary content (headline, summary) that a phone would hide.
- Card grids fill every row (no 3+1 orphans or filler cells); on compact screens peer cards become a snap slider.
- Pre-delivery check: screenshot each screen at 390×844, 834×1112 and 1440×900, and flag any empty area taller than 120px that isn't intentional breathing room around a hero.

## Component quality bar (4 Oct 2026)
- No raw browser controls. Every native control (select, file input, date, checkbox, radio, range) is styled to match its design-system sibling: 1px `--input` border, md radius, the same height as Input, an inset Lucide chevron with 12px from the edge and 40px right padding, a hover border, a 2px focus ring offset by 2px, and 50% opacity when disabled.
- Icons inside controls never touch the edge: at least 12px of inset.
- Check every component in default, hover, focus, disabled, error and dark states at 100% and 200% zoom before handover.

## Typography (4 Oct 2026; source: Penpot "Typography hierarchy", Apple HIG, Material 3)
**Two families, strict roles.**
- **Newsreader (display):** only on marketing surfaces (site home, sign-in brand panel, visual language, pitch), and only at 32px and above. Weight 300 at 56px and above; 400 between 32 and 55px. Tracking −0.02 to −0.03em, line-height 0.95–1.1. Never in the product (portals, wizard, settings, cards, tables, dialogs). Small light serifs read as spindly and hurt scanning.
- **Work Sans (everything else):** all product headings, body, labels, tables, numbers.
- **Numbers:** Work Sans with `tabular-nums lining-nums`. Mono only for codes people copy (sort code, IBAN, registration number) in `<code>`. Don't mix mono into prose, KPIs or charts.

**Product heading scale** (about 1.2 ratio, on the 4px grid; set by tokens in `Almanac v3 Theme.css`, never inline):
| Level | Use | Size/line | Weight | Tracking |
|---|---|---|---|---|
| H1 | Page title (one per page) | 24/32 | 600 | −0.02em |
| H2 | Section title | 20/28 | 600 | −0.01em |
| H3 | Card, sheet or dialog title | 18/26 | 600 | −0.005em |
| H4 | Subsection, form group | 16/24 | 600 | 0 |
| H5 | Minor group label, table group | 14/20 | 600 | 0 |
| H6 | Eyebrow / overline | 12/16 | 500 uppercase, muted | +0.06em |
| Body | Reading text | 16/24 | 400 | 0 |
| UI | Tables, inputs, menus | 14/20 | 400–500 | 0 |
| Caption | Hints, meta | 12/16 | 400 | 0 |

**Marketing display scale:** Display 1 is clamp(48px, 7vw, 104px) at 300. Display 2 is clamp(36px, 4.5vw, 64px) at 400. Display 3 is 32px at 400 (Newsreader). Anything below 32px switches to the product scale in Work Sans.

**Hierarchy principles:** contrast must be obvious, so each level differs clearly in size or weight; small differences go unnoticed. Hierarchy comes from size, weight and space first, colour last. Use no more than 4 sizes and 2 weights per screen. Keep heading levels in order (no skipping from H1 to H3 for looks). Body text is never all caps. Keep line length to 45–75 characters. Use `text-wrap: balance` on headings and `pretty` on paragraphs.

**Brand personality** comes from Newsreader on marketing moments, the neurons and the blue, not from serifs scattered through the product.

## White-label and customer theming (4 Oct 2026)
- Customers may change only one colour (primary). Derive everything else (hover, tint, focus) from it; never accept a free second colour.
- Gate the colour on WCAG contrast: 4.5:1 against white text and against the page background, and 3:1 for focus and selection. On failure, offer the nearest passing colour in the same hue; don't simply block.
- Semantic colours (success, warning, danger), type, spacing and radius are never themable.
- Scope theming to the customer-facing surface for that customer only, with variables on a root wrapper, never on :root globally.
- Always provide a live preview and "Reset to default".

## Actions and validation (rolled out 4 Oct 2026)
- Cancel uses the ghost Button (link weight), never outline or solid. Destructive confirms name the action ("Delete rule").
- Never disable a submit button to signal invalid input. Keep it enabled, and on click show an inline error per field (role="alert", 14px) plus the error summary on multi-field steps. Disable only while busy ("Saving…") or when the user lacks permission (with the permission note).
- Save buttons may be disabled while nothing has changed.
