# Neuron: Almanac-specific knowledge

Product and brand knowledge that applies only to Almanac. Generic design knowledge lives in `brain.md`. Read both. Last updated 4 Oct 2026.

## 1. Project ground rules
- v1 is as built (code and spec); v2 and v3 are proposed. Never change v1 behaviour or copy. v3 copy changes need approval.
- Stick to the spec (`uploads/almanac-with-design-system.md`). No invented dialogs, flows or copy without asking.
- Before any feature: read `skills/almanac-design-guardrails/SKILL.md` and run its checklist; log misses in `guidance/eval-log.md`.
- Domain nouns: Workspace (never "team" or "account"), Organization ("company" in copy), User, Customers (buyers, as suppliers see them). Supplier and buyer are roles.
- Engineering handover: remove every reference to the prototype nav (version, device and orientation switchers).

## 2. Product
- Trade credit verification for European F&B suppliers. Suppliers invite buyers, buyers apply for credit, Almanac verifies (registry, bureau, open banking, sanctions), and suppliers decide with an audit trail, then collect via mandates.
- Surfaces: supplier portal, buyer portal and wizard, platform portal, site (home, sign-in, invite), email.
- Buyer wizard: Mandatory steps (verify identity with bank, verify business with bank) and Recommended steps. The bank step can be skipped behind a confirmation that explains the lower approval chance. "You will be redirected to securely connect your business bank" sits in an info box. The Plaid terms and the Almanac privacy notice are links.
- Intro copy: "The more information you provide about your business, the easier it is for [Supplier] to assess your credit application and make a credit decision."
- Demo supplier: BrewDog (its logo sits in a white tile).

## 3. Brand and visual language (v3)
- **Blue #2F45D0:** actions, links, focus, selection, top bar. **Cream #ECE3D5:** muted panels and warm borders. **Page #FAF7F2.** Colour split 60/30/10: neutral, cream, blue. Still marked as a trial in the tokens; needs sign-off.
- **Type:** Newsreader is display only (marketing, 32px and up). Work Sans is used across the product. Product scale: H1 24/600, H2 20/600, H3 18/600, H4 16/600, H5 14/600, H6 12/500 caps. Tabular numerals for money; mono only for copyable codes.
- **Logo:** `assets/almanac-wordmark-v3.svg` and the symbol. "Powered by Almanac" sits small and left-aligned at the bottom of the sidebar. Supplier logos go in a white tile, so any JPG works whether square or wide, and whatever its colour.
- **The neuron** (the spark in the mark) is one signal. Connected neurons are the AI at work; a pulse that lands is a decision (approved or declined). Neurons light up and never rotate; lines are 1px and never cross or crowd; every neuron is connected. The spark is the pattern unit for textures.
- **Home hero:** a globe of neurons (no grid underneath) over a slowly drifting blue gradient. Arcs run between companies and end in a small white tick or cross at the centre of the circle. It reacts to hover organically. It is a side panel on desktop and landscape, and a horizon band under the buttons on portrait. Reduced motion shows a still frame.
- **Get started:** a blurred, subtle, mirrored video under a brand filter; the footer text sits on it with a navy fade for contrast. The email has a copy button.
- Detail: `Visual Language.dc.html`, `Visual Language Pitch.dc.html`, `guidance/motion-and-neurons.md`.

## 4. Almanac layout decisions
- Bottom tab bar on compact. Supplier: Applications, Customers, Invoices, Notifications, More. Buyer: Applications, Suppliers, Invoices, Notifications, More. Bank connections, Billing, Policy and Settings sit under More.
- Icon rail below 840; full sidebar from 840.
- From 1200, Customers, Applications and Invoices open a 360px preview pane.
- Proposed: a supporting pane for credit review and the wizard summary.
- Shared CSS lives in `Almanac Mobile Rules.css` (no palette); `Almanac v3 Theme.css` adds the palette and type.

## 5. Voice (Almanac)
- en-GB, sentence case, calm and operational. "We" and "you". No exclamation marks, no emoji. Em dash only as the empty-value placeholder.
- One term per concept ("credit file"). Dates `12 Jan 2026`; money `£1,200.00`.
- Permissions copy explains instead of hiding, e.g. "Your role does not include supplier:invoices:read."

## 6. Notifications (built in v3)
Three levels (Essential only, Recommended as the default, Everything), an email summary (off, daily or weekly), quiet hours from 08:00 to 18:00 on weekdays, pause for 24 hours or a week, and "High priority" tags. Grouping repeated events and "Mark all as read" are not built yet.

## 6b. Supplier branding (built in v3, Settings › Branding)
- **Logo:** PNG, JPG or SVG up to 2 MB, shown in a white tile, with replace and remove.
- **One brand colour:** picked with a colour field, a hex input or 5 accessible suggestions. Hover and tint shades are derived from it.
- **Checks:** white text on buttons and the top bar must reach 4.5:1; links on the page background (#FAF7F2) 4.5:1; the focus outline 3:1. A failing colour gets a same-hue darker fix ("Use #XXXXXX"), and Save explains rather than saving. Advisory warnings cover near-grey colours and colours close to the error red.
- **Locked:** status colours, type, spacing and corners ("Always Almanac").
- **Scope:** the buyer credit application wizard and the buyer-facing emails about that supplier's credit (header bar, logo, primary button, links; status colours fixed). The wizard uses through scoped variables on the wizard root (--accent, --accent-strong, --ring, --text-link, --topbar). The supplier portal and the buyer portal (which spans several suppliers) stay Almanac.
- **States:** Default, Too Light (shows the guardrail) and Read Only (the permission note).

## 6c. Built 4 Oct 2026 (later)
- Notifications: unread state (a dot plus bold title plus screen-reader text), "Mark all as read" with a live count, and grouped repeats ("3 trade references received", expandable).
- Withdrawing an invite shows a 6s toast with Undo (clears the tab bar on compact).
- Supporting panes (from 1280): the wizard has "Your application" on the right (progress, what's been shared, what happens next, saved as you go). Credit review puts the advisor recommendation in a sticky right pane.
- New logo (ALMANACv3) everywhere in v3: `assets/almanac-wordmark-v3.svg` and `assets/almanac-symbol-v3.svg`.
- Palette and type stay a trial. Field labels keep asterisks (decision: no "(optional)" switch).

- Settings now holds Billing (supplier only, Coins icon), taken out of the main nav, and Appearance (Light / Dark / System in Account; System follows prefers-color-scheme live), taken out of the user and switch-organisation menu.

## 7. Pending Almanac work
- Supporting panes, notification grouping, and type and spacing audits.
- Research: usability-test the buyer wizard with 5–8 F&B buyers and the decision flow with 5 credit controllers.
- Proof on the home page: real supplier logos or metrics only.

## 8. Where things live
- Guardrails: `skills/almanac-design-guardrails/SKILL.md`; guidance index: `guidance/README.md`
- v3 prototype: `Almanac Prototype v3.dc.html` plus `Proto * v3.dc.html`
- Brand: `Visual Language.dc.html`, `Visual Language Pitch.dc.html`, `assets/`
- Mobile audit: `v3 Mobile Audit.md`
