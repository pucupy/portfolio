# Portfolio — working instructions

Instructions for Claude when working on Alejandro Velázquez's portfolio site. Applies to copy,
structure and layout across all pages.

---

## 1. Context

Portfolio site for a Lead Product Designer / design lead, currently at Yapily (joined 2020 as the
first designer). Seven pages: `index`, `about`, and five case studies — Hosted Pages, Console,
design systems, research practice, creative archive.

The audience is design leaders, hiring managers and design peers who will read this without
me present. Every page has to stand on its own.

---

## 2. Voice — the rules that matter most

**Write about the work. Never write about the portfolio, and never address the reader as
someone assessing me.**

The page is a description of work that happened. It is not a pitch, not a covering letter, and
not a commentary on its own credibility. If a sentence would only make sense to someone
reading this as a job application, cut it.

Do not write, in any form:

- Anything that names the reader's role or intent — "for anyone hiring", "if you're evaluating",
  "what this shows about how I work", "the useful version for a team of this size".
- Anything that vouches for the honesty of the text — "the honest version", "to be transparent",
  "I'll be straight about this". Accuracy is achieved by writing accurately, not by announcing it.
- Anything that narrates the writing rather than the work — "the choice worth pointing at",
  "what's interesting here", "the takeaway is", "this is where the real work was".
- Self-assessment of any kind — "which demonstrates", "a strong example of", "this is the
  kind of problem I like". Let the facts carry it.
- Anything that flatters the reader or anticipates their reaction.

Positive form:

- Plain declarative sentences about what the situation was, what was decided, what happened.
- Reasoning stated as reasoning about the problem, not as a lesson being taught. "A single
  system would have forced three different surfaces into one set of compromises" is good.
  "The lesson here is that one system isn't always right" is not.
- Where a decision was hard or a trade-off real, say what the trade-off was. Don't label it as
  interesting.

**Tone:** measured, specific, unhurried. UK English. No exclamation marks. No rhetorical
questions. No "passionate", "obsessed", "storytelling", "human-centred", "10x", "game-changing",
or any other recruiter vocabulary.

---

## 3. Accuracy — a standing rule, no exceptions

Never oversell, round up, or blur the line between what I did and what a team did.

- **Attribution.** First person singular only for work I personally led or produced. "We" for
  work the team or cross-functional group did. Where an outcome was moved by several
  functions, say so in the sentence that reports it — e.g. conversion gains name UX, frontend
  and backend together.
- **Never invent a number.** No metric, date, headcount, customer count or percentage goes in
  unless it came from me or from source material I supplied. If a sentence needs a figure that
  isn't available, write the sentence without it or leave a clearly marked `[TK — confirm]`.
- **Targets are not results.** Anything not yet measured is written as a target and labelled as
  one. Anything in beta says it's in beta and says adoption data isn't available yet.
- **Don't upgrade my role.** I led design and research; I did not lead engineering, product or
  the company. Where I contributed to something someone else owned, describe the
  contribution, not the outcome.
- **Confidentiality.** Customer names appear only where I've already approved them
  (currently: Google, Adyen, Intuit, Ant Financial, Revolut, Kolleno, Pleo, Intuit). Do not add
  new client names, internal metrics, or detail from source files. Aggregate figures are fine.
- **Failures and gaps stay in.** Where a case study says something wasn't formalised, didn't
  work, or was got wrong, keep it. Don't soften it, and don't add a redemptive sentence after it.

If something is ambiguous, ask me rather than filling the gap with a plausible guess.

---

## 4. Case study structure

The established pattern, in order:

1. **Framing** — what the product is, in two or three sentences, assuming no domain knowledge.
2. **Problem** — the situation as it actually was, with the evidence that established it.
3. **My responsibility** — scope of what I owned, stated plainly and narrowly.
4. **Constraints** — regulatory, technical, organisational. This is where open banking work
   earns its interest; don't skip it.
5. **Decisions** — each one: the condition, the options, what was chosen, what the evidence was.
6. **Outcomes** — with attribution and with the limits of what can be claimed.
7. **Reflection** — what I'd do differently, written without self-flagellation or self-congratulation.

Headings are short and descriptive, sentence case. Stat blocks carry a large figure and a caption
that states the caveat inline rather than hiding it.

---

## 5. Copy mechanics

- Em dashes with spaces around them, as used throughout.
- Sentence case for all headings and labels.
- Numbers: spell out under ten in prose except where they're data. Ranges use en dashes.
- Approximate figures are marked approximate ("around", "roughly", "~") and stay that way.
- Prefer the concrete noun to the abstraction: "the QR handoff screen", not "the touchpoint".
- Paragraphs can be long. Don't break substantive reasoning into bullets to make it look scannable.

---

## 6. Design and build

- Visual system: Space Grotesk headings, Geist body, Geist Mono labels; gold `#C9A86A` on
  near-black `#0C0F0E`. Don't introduce new typefaces or accent colours.
- Pages are authored as Design Components in `*.dc.html` and published as self-contained
  HTML in `publish/`. Keep new work in that structure.
- Match the existing markup patterns and class conventions of the page being edited before
  inventing new ones.
- Accessibility is not optional in a portfolio about accessibility work: WCAG AA contrast,
  real heading hierarchy, alt text on every image, keyboard-reachable interactive elements.

---

## 7. When editing existing pages

- Change only what I've asked to change. Don't rewrite adjacent copy for consistency without
  flagging it first.
- Show the before and after for any copy edit longer than a sentence.
- If you notice a voice or accuracy problem elsewhere while working, list it at the end rather
  than fixing it silently.
