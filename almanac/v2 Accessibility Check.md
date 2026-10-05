# v2 credit application: contrast and accessibility check

Checked against `matthewlarn/claude-skills` (cowork-agent-audit: accessibility, ux-designer, brand-consistency). Standard: WCAG 2.2 AA. Ratios computed from `tokens/colors.css` (light theme).

## Fails: need a design system change (tokens, not v2)

| Where in v2 | Pair | Ratio | Needs | Proposed token |
|---|---|---|---|---|
| Primary buttons (Next, Verify your business, Set up Direct Debit) | white on `--accent` #00b3c0 | 2.56 | 4.5 | Add `--accent-strong: #007a83` (5.11) for filled buttons and text; keep #00b3c0 for decoration |
| Links (Terms of Service, Privacy Policy), completed-step hover | `--accent` on white | 2.56 | 4.5 | Use `--accent-strong` for `--text-link` |
| "Recommended" and "Standard" badges | `--accent` on `--accent-10` | 2.32 | 4.5 | Badge accent text → `--accent-strong` (4.63) |
| Field error text (14px) | `--danger` #d3592f on white | 4.01 | 4.5 | `--danger: #b8461f` (5.34) |
| Focus ring | `--ring` #00b3c0 on white | 2.56 | 3.0 | `--ring: var(--accent-strong)` |
| Input and select borders | `--input` #dfdfdf on white | 1.33 | 3.0 | `--input: #8a8a8a` (3.45), or keep hairline and accept as known exception |
| Placeholder text | `--placeholder` #a3a3a3 on white | 2.52 | 4.5 (best practice) | `--placeholder: #737373` (4.74) |
| Warning icons | `--warning` #ee9d28 on `--warning-10` | 2.05 | 3.0 | Icon only, text beside it is black (19.4), so passes by redundancy. Optional `--warning-strong: #a35f00` for icons |
| Progress bar fill | `--accent` on `--muted` track | 2.03 | 3.0 | Paired with "Step X of 8" text, so passes by redundancy. Fill → `--accent-strong` would fix outright |

Dark theme passes on these pairs (black on #00dcd1 = 12.2, muted on bg = 7.9).

## Passes

- Body and muted text: #525252 on white 7.81, on `--muted-20` 7.49, on `--accent-5` 7.43
- Warning callout text: black on `--warning-10` 19.4
- Success check icon: 3.55
- Error summary uses `role="alert"`; fields set `aria-invalid` and focus jumps to the first error
- Required fields marked with `*`; labels visible above every input
- Choices are radios (OptionCard) with a visible dot, not colour alone
- Heading order h1 → h2; radiogroups labelled

## Not contrast, worth noting

- Small buttons (Remove, Choose another method) are 24–32px tall: meets WCAG 2.2 target size (24px), below the 44px the skill recommends for touch. Matters only if mobile is built.
- Card on page background (#fff on #f5f5f5) is 1.09; separation relies on the 1px border. Fine for AA.

## Recommendation

Applied in v2 via `Design System v2 Tokens.css` (loaded only by `Proto Buyer Wizard v2.dc.html`; v1 unchanged). One token addition fixes most failures: `--accent-strong: #007a83`, used for filled buttons, links, badge text, the focus ring and the meter fill. Plus darkened `--danger`, `--placeholder` and `--input`. Engineer: apply once in the library, not per screen.
