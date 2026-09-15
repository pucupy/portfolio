# Yapily UI — product design system

**Yapily UI · product** — Foundations and components, shown working.

Every element in the interactive reference is live markup built from the same semantic token layer the product uses: deep teal brand, Inter, a 4px spacing base and a 44px minimum touch target. Specs sit under each example, so a value can be read without opening a file.

Interactive reference: `embeds/design-system-reference.html` (Yapily UI tab)

---

## Foundations

### Colour

One brand hue carries the system. Deep teal is the primary action colour in light mode; mint takes over in dark, where teal on black fails contrast.

| Token | Value |
| --- | --- |
| `--primary` | `#003839` |
| `--primary-dark` | `#63DFB3` |
| `--surface-brand` | `#F0FAF9` |
| `--background` | `#FFFFFF` |

**Neutral ramp**

| Step | Value |
| --- | --- |
| 50 | `#F9FAFB` |
| 100 | `#F5F5F5` |
| 200 | `#EFEFEF` |
| 300 | `#E1E1E1` |
| 400 | `#D4D4D4` |
| 500 | `#A3A3A3` |
| 700 | `#525252` |
| 900 | `#171717` |

**Status**

The saturated value is the accent — bars, icons and borders only. Text uses the darkened partner. Measured ratios:

| Status | Surface | Text | Accent |
| --- | --- | --- | --- |
| Success | `#E1FFEB` | `#08611F` · 7.2:1 | `#09893C` · 4.2:1 non-text |
| Info | `#EFF6FF` | `#1C398E` · 9.5:1 | `#1447E6` · 6.3:1 non-text |
| Warning | `#FEFCE8` | `#973C00` · 6.9:1 | `#D08700` · 2.8:1 non-text |
| Destructive | `#FEF2F2` | `#C10007` · 5.9:1 | `#E7000B` · 4.4:1 non-text |

### Typography

Inter throughout. Two weights carry the interface — 500 for headings and labels, 400 for body. Tracking tightens as size grows.

| Style | Size / line / weight / tracking |
| --- | --- |
| Display | 40 / 44 / 600 / −3% |
| Heading lg | 28 / 34 / 600 / −2.5% |
| Heading md | 20 / 26 / 600 / −2% |
| Body md | 16 / 26 / 400 |
| Body sm | 14 / 22 / 400 |
| Label | 12 / 16 / 600 / +8%, uppercase |

### Spacing and radius

A 4px base. Controls stand at 44px minimum so a touch target never needs a wrapper to reach the floor.

- Spacing scale: 4, 8, 12, 16, 24, 32, 48
- Radius: 2, 6, 8, 14, pill (200)

### Elevation

Three levels, and a border for everything that does not float. Anything above level 2 is a dialog and takes a scrim.

| Level | Value | Use |
| --- | --- | --- |
| flat | 1px border | panels, inputs |
| level 1 | `0 1px 2px rgba(0,0,0,.06)` | cards, sticky bars |
| level 2 | `0 4px 10px rgba(0,0,0,.08)` | menus, popovers |
| level 3 | `0 16px 32px rgba(0,0,0,.14)` | modals, drawers |

### Motion

Three durations and one curve. Motion communicates state or hierarchy; nothing moves for decoration.

| Token | Use | Value |
| --- | --- | --- |
| `--dur-standard` | Hover, state change | 150ms |
| `--dur-enter` | Reveal, expand | 200ms |
| `--dur-overlay` | Modals, drawers | 300ms |
| `--ease-standard` | Every transition | `cubic-bezier(.4,0,.2,1)` |

---

## Components

### Iconography

Material Symbols Outlined, one weight, 20px in controls and 24px in empty states. A hand-drawn icon set is a maintenance liability nobody funds — an open library with a name for every glyph means a designer and an engineer are referring to the same thing without a handoff.

Named glyphs in use: `home` (Console home), `deployed_code` (Applications), `monitoring` (Analytics), `account_balance` (Institutions and banks), `corporate_fare` (Organisation), `search` (Search fields), `content_copy` (Copy a credential), `refresh` (Reload, regenerate), `more_horiz` (Row overflow menu), `close` (Dismiss, cancel), `chevron_right` (Drill into a group), `check_circle` (Success and pass states), `warning` (Degraded, caution), `error` (Failure, blocked), `shield` (Security assurance), `dark_mode` (Theme toggle).

Spec: Material Symbols Outlined · wght 400, FILL 0 · 20px controls, 24px empty states · `aria-hidden`, never the only label.

### Button

One primary per view. Secondary carries the reversible alternative; ghost is for tertiary actions inside dense surfaces. Destructive is never the only signal — the copy names the object too.

Variants: Primary (`#003839` fill, hover `#014e4f`), Secondary (white, `#8f8f8f` border), Ghost (transparent, hover `#F0FAF9`), Destructive (`#C10007`, hover `#9c0006`), Disabled (`#F5F5F5` on `#e1e1e1`), Loading (spinner + "Saving").

Spec: height 44 / 36 / 52 · radius 8 · padding-x 20 · label 15 / 500 · transition 150ms.

### Icon button

Square, 44px, drawn from Material Symbols Outlined at 20px, and always carrying an accessible name — the glyph is never the label.

Spec: 44 × 44 · Material Symbols Outlined 20px · `aria-label` required.

### Button group

Segmented selection where the options are mutually exclusive and few. More than four options is a select. Example: Sandbox / Production.

Spec: `role="group"` · selected takes the primary fill · arrow keys move selection.

### Text input

Label above, helper below, error replacing helper rather than joining it. Errors say what happened and what to do next.

- Default — "Application name", helper "Shown to your team, not to end users."
- Error — "Redirect URL", `#C10007` border, "Not a valid URL. Include the scheme, for example https://."
- Disabled — "Organisation ID", "Set at creation and cannot change."

Spec: height 44 · radius 8 · error uses `aria-invalid` + `aria-describedby`.

### Search

Filters in place rather than navigating. Result count is announced politely so a screen reader hears the list change.

Spec: `type="search"` · `aria-live="polite"` count · debounce 200ms.

### Select

Native element, styled. A custom listbox is only worth its accessibility cost when options need more than a label.

Spec: native select · height 44 · label always visible.

### Checkbox and radio

Checkbox for independent options, radio for one of a set. The whole row is the target, not just the control.

Example groups: Scopes (Accounts, Transactions, Payments — "Requires verified business", disabled); Licence model (Yapily licence — "We hold the regulatory permission" / Own licence — "You register certificates and banks").

Spec: row height 44 · control 18 · label wraps the input.

### Switch

For settings that apply immediately. If the change needs saving, it is a checkbox with a save action.

Spec: `role="switch"` · track 44 × 26 · applies immediately.

### Badge and tag

Badges carry state and always pair colour with a word. Tags carry metadata and are neutral.

Badges: Live, In review, Failed, Sandbox. Tags: AIS, United Kingdom, SEPA Instant.

Spec: height 26 · badge is pill + dot · tag radius 6, neutral · never colour alone.

### Avatar

Initials by default; institution logos sit in the same slot at a square radius so bank marks are not clipped.

Spec: 28 / 36 / 44 · people circle · institutions radius 10 · stacked group overlaps −10 with a 2px white ring and a `+n` overflow chip.

### Stat

A number is not a metric without a period and a direction. Deltas are signed and worded, never a bare arrow.

Examples: Consents created 12,480 (+8.2% vs previous 30 days); Authorisation rate 86.4% (−1.4%); Median duration 42s (No change).

Spec: value 30 / 600 · tabular-nums · delta names the period.

### Table

Numbers right-aligned and tabular. Below 700px the rows become stacked definition lists rather than a horizontal scroll.

Columns: Institution, Status, Sessions, Success. Rows: Barclays (Healthy, 4,182, 93.1%), Lloyds Bank (Healthy, 3,047, 90.6%), Revolut (Degraded, 1,905, 74.2%), Monzo (Healthy, 1,264, 95.8%).

Spec: row 48 · numeric right + tabular · below 700px stacked rows.

### Skeleton and spinner

Skeletons for content whose shape is known, a spinner for an action in flight. Both are announced, so a wait is never silent.

Spec: `role="status"` · shimmer honours reduced-motion · progress names the step ("Verifying business · step 3 of 4").

### Alert

Inline, next to what it concerns. Each one says what happened and what to do next; none of them rely on the colour to carry the meaning.

- Success — "Business verified" / "Production access is enabled. Your next re-verification is due 14 March 2027."
- Info — "Sandbox scopes are read-only" / "Every scope is available for testing. Choose the ones you need when you move to production."
- Warning — "Revolut is reporting degraded authorisation" / "Success has fallen to 74% over the last hour. Users may need to retry. No action is required from you."
- Destructive — "Webhook delivery failed 12 times" / "Your endpoint returned 500 for every attempt since 09:14. Check the endpoint, then replay the failed events."

Spec: `role="status"` / `role="alert"` · Material Symbols 20px + colour + word · 3px accent rule.

### Toast

Confirmation of something the user just did. Never for errors that need a decision — those belong inline, where the problem is.

Examples: "Client secret regenerated" (Copy), "Invitation sent to rk@northwind.co" (Undo).

Spec: bottom-centre · dismiss 5s, pauses on hover · one action maximum.

### Empty state

Says what will fill the space and offers the action that fills it. A blank panel is a bug the user has to diagnose.

Example: "No sessions yet" / "Once your integration creates its first consent, every authorisation attempt appears here with its bank, duration and outcome." Actions: Open the sandbox app, Read the quickstart.

Spec: title + explanation + action · max 46ch · never an illustration alone.

### Tabs

Peer views of one object. If the panels are separate destinations with their own URLs, it is navigation, not tabs.

Spec: `role="tablist"` / `tab` / `tabpanel` · arrow keys move · 2px underline on selected.

### Breadcrumbs

Where the current page sits, and a route back out. The current page is present but not a link.

Spec: `aria-label="Breadcrumb"` · `aria-current="page"` · separator hidden from assistive tech.

### Pagination

Range and total stated, because a page number alone does not say how much is left ("1–25 of 412 sessions").

Spec: 44 × 44 targets · `aria-current="page"` · range and total always shown.

### Stepper

Long processes are legible when every step is named and its state visible. Completed steps stay reachable.

Example: Business details → Documents → Authorised signatory (current) → Agreement.

Spec: state done / current / pending · resumable · tick is not the only signal.

---

## Patterns

### Inline field warning

A warning attached to the field it concerns, not to the top of the form. Used where the risk is specific to one input — the TAN warning on a bank login is the case that justified building it, because a phishing page asks for exactly that and a generic banner at the top would be scrolled past.

Copy: "**Never enter a TAN or one-time code here.** Your bank only asks for a TAN inside its own app."

Spec: warning sits above the field · 3px accent rule · reveal is a 44px icon button · `role="alert"`.

### Numbered steps

For a handoff the product cannot complete on the user's behalf — moving to a phone, approving in a bank app. Three steps maximum, each with what to do and what will happen, because the failure mode here is the user abandoning halfway through rather than misreading a step.

1. Open your phone camera — Point it at the code.
2. Open the link — Opens your bank's app, or its mobile site.
3. Follow the bank's instructions — We'll continue here when you're finished.

Spec: marker 26 · brand fill · three steps maximum · each step names its outcome.

### Reference row

One key, one value, on the summary surface. It exists for the case where the product cannot explain a failure and has to hand the user something a third party will recognise — a declined payment where only the bank knows why.

Copy: "Reference / PMT-8841-RHN" then "Your bank can tell you why. Quote the reference above if you contact them."

Spec: label 14.5 · `#4B5563` · value mono 600 · always paired with what to do with it.

### Bank list

The most-used surface in the product. Rows are 64px, the whole row is the target, and an unavailable bank explains itself rather than disappearing ("Revolut — Temporarily unavailable, try again shortly").

Spec: row 64 · logo 36, radius 8 · selected takes a brand tint + radio · outage stated, not hidden.

### Consent summary

What is being shared, with whom, for how long, and how to stop it — before the button, not after it.

Rows: Account details (Name, sort code, number), Balances (Current and available), Transactions (Last 12 months), Access expires (14 August 2027). Footnote: "You can revoke access at any time from your bank or from Northwind."

Spec: definition rows · expiry always stated · revocation before the CTA.

### Credentials panel

Values are labelled by sensitivity, not just by name. What is safe in client-side code says so; what is not is masked and handled differently.

- Application ID — badge "Safe in client code", value shown, Copy.
- Client secret — badge "Server-side only", masked, Reveal + Regenerate. "Regenerating issues a new secret immediately. The previous one keeps working for 24 hours so a deployment can catch up."

Spec: sensitivity badge required · secret masked by default · destructive action explains the grace period.
