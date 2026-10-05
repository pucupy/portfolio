# Design system v2 rules

Proposed rules for the next design system update. v1 stays as built. First applied in: Proto Buyer Wizard v2 (credit application form).

## Colour and contrast (WCAG 2.2 AA)

Token changes live in `Design System v2 Tokens.css`. Fold them into `packages/ui/src/styles/tokens.css` and the component classes once.

- **New `--accent-strong: #007a83`** for anything that must be read or seen: filled buttons, links, badge/accent text, the focus ring, checked radio/checkbox/switch, selected card border, progress fill, meaningful icons. 5.11:1 with white.
- **`--accent` #00b3c0 stays** for decoration only: tints (`--accent-5/10/30`), the logo, non-essential borders.
- **`--danger`** #d3592f → #b8461f (4.01 → 5.34). Error text was below 4.5.
- **`--placeholder`** #a3a3a3 → #737373 (2.52 → 4.74).
- **`--input`** #dfdfdf → #8a8a8a (1.33 → 3.45). Input and select boundaries must meet 3:1.
- **`--ring`** → `var(--accent-strong)`.
- Dark theme already passes; `--accent-strong` maps to `--accent` there.

## Buttons

- **Buttons size to their label.** Never stretch a button to fill its container (no `width: 100%` / `w-full`).
- **Form footers:** Back on the left, the main action on the right, both at content width.
- **One main action per view.** Secondary actions use `outline`.
- Connected items (bank, mandate) offer **Remove** only, no Change.

## Forms

- **Hints sit above the input**, under the label, as `Text variant="caption"` (12px muted). The `Field` component currently renders `hint` below at 14px; change it in the library.
- **Field grid gap:** 28px rows, 20px columns.
- **Native selects** use `appearance: none` plus a Lucide `ChevronDown` (16px) placed 12px from the right, matching the input's 12px left padding. A `Select` primitive should be added to the library.
- Visible choices over dropdowns when there are four options or fewer (payment terms, preferred payment method). Use `OptionCard`.

## Recommended options (Payment mandate, Bank reference)

- The recommended path sits in an accent card (`--accent-30` border, `--accent-5` fill) with a `Badge variant="accent" size="xs"` reading "Recommended" and its primary button inside.
- Then an "or" separator, then the alternatives as equal outline cards.
- Each alternative says plainly what it may mean for the decision.
- Payment mandate has no Skip: the alternative is "Another payment method", which asks how the buyer prefers to pay. The footer Next continues.
- Optional steps (Bank reference) put **Skip for now** in the footer, not in a card.

## Step order

Company → Contacts → Credit terms → Payment mandate → Bank reference → Trade references → Documents → Review & submit.

## Progress

- `Meter size="sm" tone="accent"` under "Step X of 8"; value = step / total.

## Added 3 Oct 2026

See `v2 Engineering Changes.md` Part 1 for the full list.

- Input and Textarea: 16px text below 640px.
- Global: reduced motion, `touch-action: manipulation`, `font-kerning: normal`.
- Undo after Remove: an inline status row with a ghost Undo button (no toast).
- Error summary lists the fields as links.
- No placeholder that repeats the label.
- Hit areas are at least 24px.
- Money has two decimals in read-only text.
- Type trial (not decided): Newsreader for h1 and h2, Work Sans for body.
