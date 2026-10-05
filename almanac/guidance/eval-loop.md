# Design evaluation loop

Source: "How to make Claude keep designing better" (Yummy Labs), adapted to this project.

## Why
A builder grading its own work runs about 20 points too generous. Reviews must be blind: a fresh context that sees only the work and the rubric.

## Rubric (score each 1–10; "looks good" = 6; 8+ only if verified by render or measurement)
1. **System fidelity:** every colour, type style, radius and component traces to the Almanac tokens and `_ds` components.
2. **Coherence:** it reads as one product (v3 visual language: blue #2F45D0, cream #ECE3D5, page #FAF7F2, neurons).
3. **Craft:** spacing rhythm, alignment, every state designed, no orphans or empty cells.
4. **UX judgment:** one primary action, clear hierarchy, 44px touch targets, predictable navigation.
5. **Accessibility:** WCAG 2.2 AA contrast, not colour alone, keyboard, focus, reduced motion.

Weighting: 1–3 count double, because structure is rarely the problem.

## Panel (in this tool, the background verifier is one blind critic)
- **A: craft, brand, fidelity** (adversarial)
- **B: UX, accessibility, motion** (adversarial)
- **C: tokens, code, content** (adversarial; greps for em dashes, "team", exclamation marks, hardcoded hex values)
- **D: opportunity** (generative): what is this settling for?

## Hard gates (block "done")
- Text contrast is at least 4.5:1 (3:1 for large text).
- Touch targets are 44px or more on compact screens.
- No horizontal page overflow at 390px wide.
- No mid-word wrapping and no truncated names.
- No byte-identical states that should differ.
- No em dash used as a separator.

## Memory
- Log misses in `guidance/eval-log.md` (date, screen, miss, fix).
- Promote a miss to the guardrails only when it recurs, written as the most general rule.
- Turn mechanical rules into audit checks (see the audit script in `v3 Mobile Audit.md`).
