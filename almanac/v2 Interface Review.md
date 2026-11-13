# v2 Interface Review

Source: jakubkrehel/skills (better-interface → better-accessibility, better-layout, better-writing, better-typography, better-colors, better-ui). Scope: Proto Buyer Wizard v2.dc.html, all steps, at mobile (<640px, <768px) and desktop widths. Reviewed 2 Oct 2026.

## Applied to v2

| Severity | Skill | Before | After |
|---|---|---|---|
| HIGH | accessibility (forms) | The submit button stayed disabled until the terms box was ticked | The button stays enabled. Submitting without ticking shows the error summary, turns the hint red, marks the checkbox `aria-invalid` and moves focus to it |
| HIGH | typography (truncation) | Long document file names were cut off with no way to read them | The full name shows in a `title` tooltip |
| MEDIUM | accessibility (structure) | The page had no `<main>` landmark | The step content column is now `<main>` |
| MEDIUM | accessibility (forms, WCAG 1.3.5) | Every input had `autocomplete="off"` | The buyer's own fields get autocomplete values: organization, street-address, email, url, given-name, family-name, tel, organization-title. Fields about other people (director, accounts payable, references) stay `off`. Spellcheck is off on email and URL fields |
| MEDIUM | typography (inputs 16px on mobile) | 14px inputs made iOS Safari zoom the page | Inputs and textareas are 16px below 640px, matching shadcn `text-base sm:text-sm` |
| MEDIUM | accessibility (reduced motion) | The success check `v2in` animation ran regardless of user settings | Under `prefers-reduced-motion: reduce`, animations and transitions are cut to near zero |
| LOW | accessibility (touch) | Mobile browsers added a double-tap zoom delay | `touch-action: manipulation` on buttons, links, labels and inputs |

## Not applied: conflicts with the Almanac design system

| Skill rule | Why not |
|---|---|
| better-ui: scale(0.96) on press | The design system says "No press-shrink" |
| better-ui: shadows over borders | The design system uses hairline borders on cards by default |
| better-ui: 1.5px icon stroke beside 400-weight text | The design system fixes Lucide at stroke 2 |
| better-layout: logical properties for RTL | en-GB only; no RTL locale in scope |

## Checked and already passing

- One `<h1>` per step, with headings in order
- Errors have an inline message and a summary; focus moves to the first invalid field
- Flow buttons use one set of words: Start application, Next, Skip for now, Submit credit application
- Step rail targets are under 24px but 20px apart, so they pass under the WCAG 2.5.8 spacing exception
- Headings use `text-wrap: balance` and descriptions use `pretty`; money uses tabular numbers

## Not verified

- Screen reader walkthrough (VoiceOver, NVDA)
- Forced-colors mode
- 200% zoom on a real device

## Typography pass (typography skill, pasted 2 Oct 2026)

Inventory before: 4 sizes (12, 14, 16, 24px), 3 weights (400, 500, 600) and the system UI font stack. The type scale itself was sound. The problems were inconsistent styling for the same role and px units.

| Severity | Before | After |
|---|---|---|
| MEDIUM | Titles inside cards used 600 in some places ("Above the standard limit", "No trade references added", reference titles, contact legends) and 500 everywhere else | All in-card titles use 14/500, matching the kit's `Text variant="label"`. 600 is kept for inline emphasis only |
| MEDIUM | All 82 font sizes were in px, so they ignored the user's browser text size | Sizes use rem tokens: `--text-xs`, `--text-sm`, `--text-base`, `--text-2xl`. The h1 and alert line-heights use `--text-2xl-lh` and `--text-sm-lh` |
| LOW | Prose ran to about 100 characters per line on desktop | Muted prose paragraphs are capped at `max-width: 65ch` (13 places) |
| LOW | Kerning was left to the browser | `font-kerning: normal` on the root |

Not applied, because they conflict with the design system:

| Rule | Why not |
|---|---|
| Replace system font, use a font pairing | The design system ships no webfonts; the OS UI stack is the brand choice |
| Body text 16px minimum | The kit uses 14px (`--type-ui-size`) for UI and descriptions in a dense professional tool. Inputs are already 16px on mobile |
| Modular 1.25 ratio | The kit uses Tailwind's scale (12/14/16/18/20/24); v2 stays on it |

Checked and passing:

- Hierarchy is h1 24/600 tight, then section h2 16/500, then card titles 14/500, body 14/400 muted, captions 12. Size, weight and colour each separate the levels
- Uppercase labels have positive tracking (.05em, or .025em where ported from the code's `tracking-wide`); the h1 uses -0.025em
- Changing figures use tabular numbers

These changes are in v2 only. The design system library is unchanged.
