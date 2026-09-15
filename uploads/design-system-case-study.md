# Design systems at Yapily

**Role:** Lead Product Designer. Designed the first versions of the design system and built the governance model jointly with the frontend lead.

> **Author notes are marked `[NOTE]` throughout. Delete all of them before publishing.**
> Every claim below is drawn from confirmed recollection. Nothing has been inferred or estimated.

---

## Three systems, one token layer

We ran three design systems rather than one, deliberately. A single system would have forced three very different product surfaces into one set of compromises, and the compromise would have been worst for whichever surface was least like the others.

**Hosted pages (white-label).** Minimal and constrained by design. Customers themed it themselves — logo, typeface, and brand colours applied mainly to buttons and links, with a choice of light, dark, or system-matched appearance. Everything else stayed locked. When customers control the surface, the system's job is to expose as little as possible while still reading as their product.

**Website.** Restyled annually with distinctive, playful work — larger heading spacing, more expressive layout. Coupling it to the product systems would have meant every marketing refresh rippling into production tooling. Separated, it moved at its own pace.

**Tools.** Dense by nature — analytics and data-heavy pages where vertical rhythm is tight and information density is the point. Its atoms and molecules were built for that.

Three separate Figma libraries sat on top of a shared token library. Tokens were maintained as Figma variables and mirrored in code, with the component library documented in Storybook. Same primitives, divergent components — that split is what made three systems cheaper than one compromised system, rather than three times the work.

Shared tokens were governed more tightly than components, and correctly so: a shared-token change lands on all three systems simultaneously. Changes required approval from both the frontend lead and the design lead, and in practice happened rarely — effectively only during rebrand work.

*Figure: `design-system-architecture.svg`*

> `[NOTE]` Unverified, currently omitted: whether dark mode was one set of semantic tokens carrying light and dark values, or two separate sets. Worth confirming — it's a question a design systems interviewer is likely to ask.
>
> `[NOTE]` The code-side repository structure and token propagation mechanism sat with frontend and aren't yours to claim. Left out intentionally. If asked, "that sat with the frontend lead" is a complete and credible answer.

---

## Contribution and governance

The gate was evidence rather than seniority.

1. **Proposal.** Anyone could propose a component; in practice proposals came from design and frontend. The proposer produced a simple mockup — enough to evaluate, not a finished spec.

2. **Validation.** The component was tested for usability and accessibility before it was eligible for review, using a mix of guerrilla testing and external platforms — Maze for unmoderated usability, Testbirds for broader usability and accessibility coverage.

3. **Documentation.** The proposer wrote the component up with its use cases. Defining where a component *shouldn't* be used mattered as much as where it should.

4. **Review.** Ad-hoc meetings with the frontend team and other designers. Bringing frontend in at proposal stage rather than at handoff surfaced implementation cost while the design was still cheap to change.

5. **Approval.** Two stages — design-side first approval, then a group decision with the frontend team.

6. **Adoption.** Approved components entered the shared library.

*Figure: `governance-flow.svg`*

**The choice worth pointing at:** validation sat *before* review, not after. That single ordering decision changed what review meetings were about — teams debated evidence rather than taste, and the discussion moved faster because there was less to be subjective about.

---

## Reach

Components from these systems were used across the marketing website and its landing pages, demo tools, internal tools, hosted pages, and customer-facing tools.

> `[NOTE]` No performance figures are included. The time-saving numbers discussed earlier weren't instrumented, and an unsourced percentage collapses under a single "how did you measure that?" follow-up. The breadth-of-use claim above is defensible without qualification, which makes it the stronger asset. If a specific number is ever needed, source it first.

---

## Open items before publishing

- [ ] Dark mode token structure — one semantic set with two values, or two sets?
- [ ] Were the two designers on your team part of the review group?
- [ ] Did Maze/Testbirds run on every component, or only where it mattered? Rough participant numbers per test?
- [ ] Did anyone outside design and frontend ever get a component through? ("Open in principle, used by two functions in practice" is more honest and more interesting than "anyone could contribute.")
- [ ] **How many rebrands did the architecture survive?** The highest-value gap. A rebrand is the real stress test of a three-system split — if the separation held, that's the strongest available evidence the architecture was the right call, and it's a better closing line for this section than anything currently written.

## Deliberately excluded

**Versioning and deprecation.** Not recalled, so not claimed. If raised in interview, the strongest answer is: "We didn't have a formalised deprecation process — here's what I'd put in place now." Then: semantic versioning so someone must consciously decide whether a change is breaking; deprecate rather than delete, with the replacement and migration path named; a changelog written for humans; Figma and code versioned in step so designers can tell what's actually in production; release notes pushed to Slack rather than a wiki nobody opens.

That answer demonstrates judgement. Claiming a process that didn't exist risks a follow-up you can't survive.

---

## Asset notes

Both SVGs are self-contained — embedded styles, no external fonts or stylesheets — so they render identically wherever they're dropped.

Brand gold `#C9A86A` is used as the stroke and accent, with a tint (`#F5EDDD`) behind text rather than the full-strength gold. This is both more typical of how brand accents work in diagrams and more accessible: title text `#4A3410` on the tint clears WCAG AA comfortably, whereas dark text on full-strength `#C9A86A` sits close to the 4.5:1 threshold. Given that accessibility testing is one of the strongest parts of the process described here, the diagrams illustrating it should pass cleanly.

Both files use system font stacks. If your portfolio uses a specific typeface, swap the `font-family` in each `<style>` block to match.
