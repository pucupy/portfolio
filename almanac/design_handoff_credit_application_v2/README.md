# Handoff: Buyer credit application, v2 (proposed)

## Overview
v2 of the buyer credit application wizard in the Almanac buyer portal. A buyer invited by a supplier completes eight steps to apply for trade credit. v1 is what's built today (`packages/ui/src/pages/buyer-portal/credit-applications/*.tsx`, `layouts/buyer-credit-application.tsx`); v2 is a proposed revision focused on usability, clearer copy, WCAG 2.2 AA and mobile.

Demo data: supplier **BrewDog** (brewer and drinks supplier), buyer **Kelly & Rose Taverns Ltd** (two Bristol pubs; contact Dan Kelly, persona 01). v1 prototypes keep their original names (Acme Supplies, Northwind Traders) because v1 stays as built.

## Single source
`Proto Buyer Wizard v2.dc.html` at the project root is the only source. `source/` and the standalone file in this folder are exported from it. Re-export after any change; don't edit the copies.

- `Credit Application v2 (standalone).html`: open in any browser, works offline.
- `source/Proto Buyer Wizard v2.dc.html`: readable source (template + logic).
- `Design System v2 Tokens.css`, `Design System v2 Rules.md`, `v2 Accessibility Check.md`: token changes and audits.
- `v2 Engineering Changes.md`: **start here**. Every change, split into design system (library) and wizard UI, with status.

## Fidelity
High fidelity, built from Almanac design system components (Button, Field, Input, OptionCard, Checkbox, Badge, Meter, Modal, Icon/Lucide, Text). Items marked **New** below are proposals pending Alex's sign-off; the **Show proposals** tweak hides them.

**Type trial:** the prototype currently uses Newsreader (h1, h2) and Work Sans (everything else) from Google Fonts. The design system ships no webfonts; switch the **Font pair** tweak to "System" to see the design system default. Not a decision yet.

## Shell and responsive behaviour
- Top bar 56px, `--foreground`. Supplier name left; "Powered by" + logo right.
- Card max-width 1024px. Breakpoints follow `layouts/buyer-credit-application.tsx`:
  - ≥1024px: rail 256px. 768–1023px: rail 224px.
  - <768px: rail hidden; compact header with "Step X of 8", step name, segment bars. **New (C9):** the header is a button that opens a list of steps; completed steps are clickable (44px rows).
  - <640px: single-column fields, tighter padding, inputs at 16px (no iOS zoom).
- Footer: Back left, one main action right.

## Steps
1. **Company details.** Country select; Companies House panel (read-only, Lock "Can't be edited here"). VAT, trading address, company email, website.
2. **Contact details.** You (first, last, email, role, phone). "I am the director" and "I am the accounts payable contact" now **start unticked** (B2); each unticked role shows its own fieldset.
3. **Credit terms.** One status message in a fixed position (C3) replaces the two amber warnings; wording changes for above-limit, non-standard terms, or both, and says what happens next (credit team review). No warning icons on Net 60/90. **New (C3):** suggested limit from estimated spend × term length (e.g. £10,000.00 per month on Net 60 → £20,000.00), with a "Use £20,000.00" button.
4. **Payment mandate.** Mandatory. Direct Debit (recommended), card, or another method. Choosing another method reveals the option list; the footer **Next** continues (no in-panel continue button). Next without a choice shows an error.
5. **Bank reference.** One name everywhere (rail, title, welcome, review). Full check card (recommended) and identity-only card; both buttons read "Connect bank account" with distinct `aria-label`s. "Your bank shares with Almanac and BrewDog:". The footer shows **Skip for now**, which opens a confirmation modal: "BrewDog may ask you for a written bank reference from your bank instead, which usually takes longer to arrange. You can still connect your bank later from your buyer portal."
6. **Trade references.** Optional, up to 3. Only company name and email are required. Info: "Let your referees know to expect an email from us, so they know it's genuine." Empty state "No trade references yet" with a primary "Add trade reference". Footer shows Skip for now when there are none.
7. **Documents.** Optional. Footer shows Skip for now when none are added.
8. **Review & submit.** Sections open by default, with Collapse all / Expand all (B4). Bank details masked to the last four digits (B3). Money to two decimals. **New (B5, needs legal review):** "What happens to your information" block above the agreement (supplier, checks run, referees, reuse with other suppliers vs private to this supplier). Submit stays enabled; submitting unticked shows the error.

**Done.** "What happens next" (supplier reviews; status shows as Submitted in the buyer portal), plus a note listing any skipped optional steps that can still be added from the buyer portal (C7).

## Interactions
- **Edit from Review (B1):** the main action becomes "Save and return to review" and Back becomes "Back to review". Validation still runs.
- **Errors (C11):** `role="alert"` summary lists each problem as a link that focuses the field.
- **Undo (C6):** removing a reference, document, mandate or bank connection shows an inline "… removed." status with Undo, until the step changes.
- **Optional steps (B6):** one pattern. Choices on the page, one main button in the footer. Welcome screen splits Mandatory and Recommended, and says skipping may lead to requests for more information.
- Motion respects `prefers-reduced-motion`.

## Copy changes
- Supplier possessive: "BrewDog's".
- "You may also get better credit terms" (was third person). Direct Debit card: "Payments are collected automatically on the due date" (replaces the unbacked approval claim).
- Welcome: "You can return to your application from your invitation link." **Confirm with engineering that progress is persisted.**

## Design system changes (apply once in the library)
See `Design System v2 Tokens.css` and `v2 Accessibility Check.md`: `--accent-strong #007a83`; `--danger #b8461f`; `--placeholder #737373`; `--input #8a8a8a`; `--ring` → `--accent-strong`; Field hint above the control; a Select primitive.

## Open questions
- Network sharing opt-in or opt-out, and final B5 wording (legal).
- Should skipped steps be flagged to the supplier?
- Bank connection before mandate (B8)?
- Font pairing: adopt Newsreader + Work Sans, or stay on system fonts?

## Out of scope
Sole traders and partnerships, group entities, multi-person applications, returning-buyer prefill.
