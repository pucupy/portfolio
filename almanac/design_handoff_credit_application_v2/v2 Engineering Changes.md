# v2 engineering changes: buyer credit application

For engineers rebuilding v2 in `almanac-platform`. v1 (`main@f706ec9`) stays as built. Source of truth for the design is `Proto Buyer Wizard v2.dc.html`, exported to `design_handoff_credit_application_v2/`.

The changes are in two parts:
- **Part 1, design system:** change once in `packages/ui`. Every portal inherits the change.
- **Part 2, wizard UI:** changes only in the buyer credit application pages and layout.

Status key: **Agreed** = reviewed in design. **Proposal** = marked New and needs Alex's sign-off (hidden by the prototype's "Show proposals" tweak). **Trial** = being evaluated, not decided. **Legal** = wording needs legal review.

Sources behind the changes: the head of design review (`uploads/almanac-v2-design-recommendations.md`, IDs such as B1 and C3), the jakubkrehel/skills audit (`v2 Interface Review.md`), the contrast audit (`v2 Accessibility Check.md`), and a principles.design pass (inclusive design, form usability, fintech trust, content and voice, privacy by design).

---

## Part 1. Design system (`packages/ui`)

### 1.1 Tokens: `packages/ui/src/styles/tokens.css` (Agreed)
Values are in `Design System v2 Tokens.css`.

| Token | v1 | v2 | Why |
|---|---|---|---|
| `--accent-strong` | not present | `#007a83` (dark theme maps to `--accent`) | Text-safe accent, 5.11:1 on white. Use for solid buttons, links, accent text, focus ring, checked controls, selected card border, meter fill and meaningful icons |
| `--accent` | `#00b3c0` | unchanged | Decoration only: tints and logo |
| `--danger` | `#d3592f` | `#b8461f` | 4.01:1 → 5.34:1 |
| `--placeholder` | `#a3a3a3` | `#737373` | 2.52:1 → 4.74:1 |
| `--input` | `#dfdfdf` | `#8a8a8a` | 1.33:1 → 3.45:1, so control boundaries reach 3:1 |
| `--ring` | accent | `var(--accent-strong)` | Visible focus |
| `--warning` | `#ee9d28` | **not changed (open)** | 2.2:1 as text on white. v2 never uses warning colour for text; icon plus words only |

### 1.2 Base styles: `theme.css` / global base (Agreed)
- Respect `prefers-reduced-motion: reduce`: animations and transitions become near-instant. Spinners may keep spinning.
- Add `touch-action: manipulation` on buttons, links, labels and inputs (removes the double-tap delay).
- Add `font-kerning: normal` on the root.

### 1.3 Components (Agreed)

| Component | Change |
|---|---|
| `Input`, `Textarea` | 16px text below 640px, 14px from 640px up (`text-base sm:text-sm`). Stops iOS zooming on focus |
| `Field` | Render `hint` above the control, under the label, as a 12px muted caption. v1 renders it below at 14px |
| `Select` (new primitive) | Native select with `appearance: none`, Lucide `ChevronDown` 16px placed 12px from the right, `padding-right: 36px` |
| `Modal` | No API change. Used for the bank skip confirmation with an `actions` pair (outline secondary + solid primary) |

### 1.4 Rules: update `packages/ui/AGENTS.md` (Agreed)
- Buttons size to their label; never `w-full`.
- One main action per view, in the footer; secondary actions are `outline`.
- Optional steps show **Skip for now** (outline) in the footer, in place of Next, until something is added.
- Removing an item with typed or connected content shows an inline status ("… removed.") with **Undo**. There's no toast component; the status is a bordered `muted-20` row with a ghost `sm` Button.
- Error summary: a `role="alert"` box that lists each error as a link which focuses its field.
- No placeholder text that repeats the label (form usability). Use placeholders only for format examples ("e.g. GB123456789").
- Hit areas are at least 24×24px (WCAG 2.5.8). Text-only buttons get vertical padding to reach it.
- Money shows two decimals in read-only contexts (`£25,000.00`). Inputs accept whole numbers.
- Choices with four or fewer options use `OptionCard`, not a dropdown.

### 1.5 Typography (Trial)
- The prototype trials **Newsreader** (h1, h2) and **Work Sans** (body and UI) from Google Fonts. The design system ships no webfonts today.
- If adopted:
  - Load the fonts with `next/font/google`.
  - Set `--font-sans` to Work Sans and add `--font-display: Newsreader`, used for `h1` and `h2` (`PageHeader` title, section titles).
- Keep the mono stack for money and IDs.
- **Decision needed** before any library change. The "Font pair" tweak switches back to "System".

### 1.5b Brand palette (Trial)
The new identity (indigo, cream, ink) is trialled in the v2 wizard with the **Palette** tweak (default "Brand: indigo and cream"; "Current: teal" shows the old palette).

| Token | Current | Brand trial | Contrast |
|---|---|---|---|
| `--accent`, `--accent-strong`, `--ring`, `--text-link` | #00b3c0 / #007a83 | #2f45d0 | 7.3:1 on white. Shifted towards blue from the logo indigo #4536ce |
| `--foreground`, `--card-foreground` | #000000 | #1a1a1a | 17.4:1 on white |
| `--muted` (its tints are used for surfaces) | #e5e5e5 | #ece3d5 | — |
| Page background (`--muted-40`) | 40% grey | #faf7f2 (cream tint, close to white) | `--muted-foreground` 7.4:1 |
| Top bar (new `--topbar`) | `--foreground` black | #2f45d0 blue, white text | 7.3:1 |
| `--border` | #e8e8e8 | #e2d8c9 | Hairlines |
| `--card-plain` | #fafafa | #f6f1ea | — |

- Status colours (danger, success, warning) and `--input` don't change.
- Since indigo passes contrast as text, `--accent` and `--accent-strong` can collapse into one value, but keep both tokens.
- The DTCG file records the brand colours as `color.brand.indigo`, `cream` and `ink`, with the proposed mapping in `$extensions`.
- **Logo:** the new mark differs from `AlmanacLogo` (teal shield). The prototype still renders the current logo. The brand team needs to supply the new SVG; don't redraw it.

### 1.6 AI readiness
See `ai-ready/AI-READY.md`. DTCG tokens (`ai-ready/tokens/`), a shadcn-spec `registry.json`, `llms.txt` and `llms-full.txt` are drafted; an MCP server is specified. The token JSON holds the v2 values above.

### 1.7 Considered and not adopted (conflicts with the design system)
- Press-shrink on buttons. The design system has no press-shrink.
- Shadows instead of borders. The design system uses borders first.
- 1.5px icon stroke. Lucide stays at stroke 2.
- 16px minimum body text. UI text stays 14px.
- Marking optional fields "(optional)" instead of marking required fields with an asterisk. `Field` uses `required` + asterisk; logged for a future discussion, not changed.

---

## Part 2. Wizard UI (buyer portal only)

Files: `packages/ui/src/layouts/buyer-credit-application.tsx`, `packages/ui/src/pages/buyer-portal/credit-applications/*.tsx`, and the app route that renders them.

### 2.1 Layout and responsive (Agreed)
Breakpoints match the existing layout code.

- **1024px and up:** rail 256px.
- **768px to 1023px:** rail 224px.
- **Below 768px:** rail hidden. A compact header shows "Step X of 8", the step name and segment bars, as in v1 code.
- **Below 640px:** fields go to one column; padding 24px 16px (page) and 24px 20px (card).
- The `<main>` landmark wraps the step content.
- **Proposal (C9):** below 768px, the compact header is a button (`aria-expanded`) that opens the step list. Completed steps can be clicked; rows are 44px high.

### 2.1b Supplier logo slot (C8, Proposal)
Suppliers upload any logo (square or wide, any colour, JPG or PNG, with or without a background). The slot has to work for all of them on the coloured top bar.

- **Logo plate:** a white rounded box, 32px high, at least 32px and at most 120px wide, with 4px padding, `--radius-sm` corners and a 1px `rgb(0 0 0 / 8%)` outline. The logo sits inside with `object-fit: contain`, at most 24px high and 112px wide.
  - JPGs with a white background blend into the plate.
  - Full-bleed colour squares get a thin white frame, so they never clash with the top bar.
  - Logos are never recoloured or inverted.
- **Name:** the supplier name always shows next to the logo (14/500, white). The logo image has `alt=""` because the name carries the meaning.
- **No logo:** a 32px white plate with a two-letter monogram in `--accent-strong`.
- **Upload guidance (supplier settings, not designed):** PNG or SVG preferred, JPG accepted; at least 96px high; trimmed of extra whitespace. Consider auto-trimming uniform borders on upload.
- The prototype's **Supplier logo** tweak cycles through test cases: square mark, wide wordmark on colour, wide JPG on white, full-bleed colour square, transparent PNG, and no logo. The sample logos are generic placeholders, not real brands.

### 2.2 Global wizard behaviour

| ID | Status | Behaviour |
|---|---|---|
| B1 | Agreed | When a step is opened from Review via Edit, the main action reads "Save and return to review" and Back reads "Back to review". Validation still runs. State: `returnToReview`, set by Edit and cleared when Review is reached |
| B6 | Agreed | One pattern for every step: choices on the page, one main button in the footer. Next is never hidden. Optional steps (Bank reference, Trade references, Documents) show "Skip for now" while empty |
| C6 | Agreed | Undo after Remove on references, documents, the mandate and the bank connection. Cleared when the step changes |
| C11 | Agreed | The error summary lists the fields as links. The prototype focuses fields through a `data-err` key on each input |
| Submit | Agreed | The submit button stays enabled. Submitting without the agreement ticked shows the error, sets `aria-invalid` on the checkbox and moves focus to it |
| Autofill | Agreed | Fields about the buyer get `autocomplete` values: organization, street-address, email, url, given-name, family-name, tel, organization-title. Fields about other people (director, accounts payable, referees) use `off`. Spellcheck is off on email and URL fields |

### 2.3 Per step

| Step | ID | Status | Change |
|---|---|---|---|
| Welcome | — | Agreed | "What you'll need" is split into "Mandatory" (company, contacts, credit terms, payment mandate) and "Recommended" (bank reference, trade references, documents). The optional list says that skipping may lead to more information being requested |
| Welcome | C2 | Agreed, **confirm with engineering** | "You can return to your application from your invitation link." Only keep this if progress really is persisted |
| Contacts | B2 | Agreed | "I am the director" and "I am the accounts payable contact" start **unticked** |
| Contacts | — | Agreed | "Add another director" and "Add another accounts payable contact" (outline `sm`, Plus icon) add fieldsets with the same five inputs and the same validation. Up to 4 extra of each. Extra fieldsets are titled "Additional director N" or "Additional accounts payable contact N", have Remove with Undo, and appear on Review |
| Credit terms | C3 | Agreed | One status line in a fixed position (`role="status"`) replaces the two amber warnings. The wording changes for above the limit, non-standard terms, or both, and says the credit team reviews it. No warning icon on Net 60 or Net 90 |
| Credit terms | C3 | Proposal | Suggested limit: monthly spend × term months (Net 30 = 1, Net 60 = 2, Net 90 = 3), rounded up to the nearest £1,000. Weekly spend is converted at ×52/12 and yearly at ÷12. A "Use £X" button fills the limit field |
| Payment mandate | B6 | Agreed | The in-panel "Continue with this method" button is removed; the footer Next continues. Next with nothing chosen shows the error "Set up Direct Debit or a card, or choose another payment method" |
| Payment mandate | C10 | Agreed | "You may also get better credit terms." The Direct Debit card reads "Payments are collected automatically on the due date." |
| Bank reference | B7 | Agreed | One step name, "Bank reference", in the rail, title, welcome and review. The "Skip for now" card is removed; Skip is in the footer and opens a modal |
| Bank reference | B7 | Agreed | Both buttons read "Connect bank account" (product decision). Each has its own `aria-label` ("…to verify bank history and identity" and "…to verify identity only") |
| Bank reference | B7 | Agreed | "Your bank shares with Almanac and BrewDog:" names who receives the data |
| Bank reference | — | Agreed | The "You will be redirected…" note is a 12px info box: accent tint in the recommended card, muted in the identity-only card. Plaid Terms, Plaid Privacy Notice and Almanac Privacy Policy are links (URLs to come) |
| Trade references | C4 | Agreed | Only company name and email are required. The empty state "No trade references yet" has a primary "Add trade reference". Info line: "Let your referees know to expect an email from us, so they know it's genuine." The "much less likely to be approved" claim is removed |
| Review | B3 | Agreed | Bank details masked to the last four digits (`••••6819`, `••-••-00`, `••••5678`) |
| Review | B4 | Agreed | Sections open by default, with "Collapse all" / "Expand all" |
| Review | B5 | Proposal, **Legal** | "What happens to your information" block above the agreement checkbox. It covers what the supplier sees, the checks run (Companies House, Creditsafe, HMRC), referee emails, and reuse with other suppliers versus what stays private to this supplier |
| Done | C7 | Agreed | "What happens next" (two items), plus a note listing any skipped optional steps that can still be added from the buyer portal |

### 2.4 Principles pass (principles.design, 3 Oct 2026)

| Principle set | Change in v2 | Layer |
|---|---|---|
| Form usability | Placeholders that repeated labels removed (contact names, referee company and names) | UI; rule in 1.4 |
| Form usability | Specific errors: "Enter the credit limit you need", "Enter your estimated spend" (were both "Enter an amount") | UI |
| Inclusive: be consistent | Removing the bank connection says "Barclays removed.", matching the Remove button | UI |
| Inclusive: give control | Undo after Remove, Back to review, and modal close or Escape all keep the buyer on the step | UI |
| Fintech trust | The redirect note names the provider: "You will be redirected to Plaid to securely connect your business bank." Card already names Stripe | UI |
| Content and voice | "Review and submit" (no ampersand). Done title is "Your application has been submitted" ("successfully" dropped) | UI |
| Privacy by design | Data minimisation on referees (company and email only). Bank details masked on Review. Nothing pre-ticked (B2, agreement) | UI |
| Ethical: no pressure | Skip modal buttons are "Skip for now" and "Connect bank account" (was "Skip anyway") | UI |

Recommended, not applied (needs facts or sign-off):
- **Privacy by design:** the open banking consent should say how long access lasts and how to revoke it. The buyer portal's Bank connections page shows 12-month validity; confirm with Plaid and engineering before adding.
- **Ethical:** "Recommended" on the widest-sharing bank option has no reason shown to the buyer (B7).
- **Fintech trust:** name the Direct Debit provider on the mandate step once confirmed.

### 2.5 Copy rules applied
- Supplier possessive is "BrewDog's". The demo pair is BrewDog and Kelly & Rose Taverns Ltd (A3). The v1 prototypes keep their original names.
- Sentence case, British spelling, no em dash as punctuation.
- Money in read-only text has two decimals.

---

## Open questions
1. Network sharing for buyers: opt-in or opt-out, and the final B5 wording (Legal).
2. Should skipped optional steps be flagged to the supplier?
3. Should the bank connection come before the mandate and prefill it (B8)?
4. Is progress really saved after each step (C2)?
5. Font pairing: Newsreader + Work Sans, or system fonts?
5b. Brand palette: adopt indigo and cream, and when do we get the new logo SVG?
6. `--warning` as text colour: change the token, or keep it icon-only?
