# Web interface guidelines, applied to Almanac

Source: the Web Interface Guidelines you pasted. Only the rules that change Almanac work are kept; each is phrased as a check.

## Interaction
- Every flow is keyboard-operable and follows the WAI-ARIA patterns (dialog, tabs, menu, combobox).
- Visible focus via `:focus-visible` (2px ring, 2px offset, per the design system). Use `:focus-within` on grouped controls.
- Dialogs and sheets trap focus, return it on close, and set `overscroll-behavior: contain`.
- Hit targets: 24px minimum on desktop, 44px on touch. The visual can be smaller than the hit area.
- Inputs are 16px or larger on mobile. Never disable zoom. Never block paste (OTP fields especially).
- Loading buttons keep their label and add a spinner, e.g. "Connecting…".
- Spinners and skeletons get a ~200ms show-delay and a ~400ms minimum visible time.
- Destructive actions need a confirmation or an undo window.
- `touch-action: manipulation` on controls; `-webkit-tap-highlight-color` set from the palette.
- No dead zones: if part of a row looks clickable, the whole row is.
- Navigation uses `<a>` (Cmd-click works). Buttons are only for actions.
- Deep-link state: filters, tabs, pagination and open panels live in the URL.
- Async updates (toasts, inline validation) use a polite `aria-live` region.

## Forms
- Every control has a label, and clicking the label focuses the control.
- Don't pre-disable submit. Allow it and show the errors; on submit, focus the first error.
- Don't block keystrokes; accept the input and explain.
- Set `autocomplete`, `name`, `type` and `inputmode` (`email`, `tel`, `one-time-code`, `numeric` for sort code).
- Spellcheck is off for emails, codes, company numbers and IBANs.
- Placeholders are example values ending in an ellipsis, e.g. "SG1 2AA…". They are never the label.
- Trim trailing whitespace before validating.
- Warn before leaving with unsaved changes.
- Native `<select>` gets an explicit background and colour (for Windows dark mode).

## Motion
- Honour `prefers-reduced-motion` with a real reduced variant.
- Animate `transform` and `opacity` only. Never `transition: all`.
- Motion is interruptible and input-driven; avoid autoplay except deliberate brand moments.
- SVG transforms go on `<g>` with `transform-box: fill-box`.

## Layout and content
- Every element aligns to something; adjust ±1px optically where needed.
- Child radius ≤ parent radius, and concentric.
- Use tabular numerals for all money and counts in tables.
- Use curly quotes and the ellipsis character. Use `&nbsp;` in "£1,200.00 limit", "30 days" and "Acme Supplies".
- Wrap brand and product names in `translate="no"`.
- Design empty, sparse, dense and error states, with no dead ends: every screen offers a next step.
- Layouts must survive very short and very long names.
- The `<title>` reflects the current screen.
- Provide a "Skip to content" link and a correct heading hierarchy.

## Design
- Layered shadows (ambient plus direct) and a semi-transparent border for edge clarity.
- Hover, active and focus states have more contrast than the rest state.
- Set `theme-color` to the page background and `color-scheme` per theme.
