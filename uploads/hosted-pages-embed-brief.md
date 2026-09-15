# Hosted Pages — replacing screenshots with the live journey

Two parts: **fixes to v2 before it ships**, then **how to place it in the case study**.

---

# Part 1 — Fix before publishing

Everything from the v1 review is resolved. Invented banks throughout, no charity as merchant, the regulated-entity wording is generic ("your payment provider"), the brand switcher is in, failure states exist, and mobile now handles the QR question explicitly. Four things left.

## 1. The member-bank count contradicts itself

The caption says **700 member banks**. The screen says **412 member banks**.

Pick one and use it in both. This is a piece whose argument is rigour, on a page in a portfolio that repeatedly insists on accurate numbers.

## 2. The account-access journey has no failure states

The payment journey now has four: bank not found, payment declined, login rejected with the retry count, and no response. That's the strongest section in the whole artefact.

Account access has two screens and both are happy path. At minimum add **consent declined** — the user reaches the bank, refuses, and comes back. It's the most common AIS failure and its absence is conspicuous next to the payment set.

## 3. "Secure page by Yapily" needs a caption

The intro says Custard is deliberately unbranded, and every screen carries "Secure page by Yapily" in the footer. That looks like a contradiction unless you explain it — and the explanation is a good one:

> The one place our name has to appear. The user is handing credentials to a page that isn't their bank's and isn't the merchant's, and regulation requires the party in the middle to identify itself. Everything else is the customer's brand; this line isn't ours to remove.

That converts an apparent inconsistency into a demonstration that you understand the regulatory constraint.

## 4. Surface the TAN warning

> "Never enter a TAN or one-time code here. Genobank Rheinau eG only asks for a TAN inside its own app."

This is the best line in the artefact. It's anti-phishing guidance written into a screen that structurally resembles a phishing attack — and it's currently helper text under a field.

Give it a caption of its own on the embedded login screen. Something like: *"The screen has to teach the user to distrust screens like this one."*

Then add a sentence about it to the embedded-login section of the case study, which currently discusses trust signals but not this.

---

# Part 2 — Placement in the case study

## Don't replace everything

The current before/after pairs make arguments the journey can't. A single "after" screen doesn't show that the *before* was a flat alphabetical list, and the variant comparison is evidence of a testing process rather than a design outcome.

**Keep as images:**

| Image | Why |
|---|---|
| Flat alphabetical list · BEFORE | The journey has no "before" |
| Two-column grid · VARIANT 1 | Evidence of what was tested and rejected |
| Grid and list · VARIANT 2 | Same |
| Login form with nothing to place it · BEFORE | Trust argument needs the contrast |

**Replace with the embed:**

| Image | Replaced by |
|---|---|
| Hosted Pages — the flow end to end (hero) | The embed, as the hero |
| Popular banks, brand grouping and shortcuts · AFTER | Bank selection screen |
| Popular banks only / Recents promoted | Recommended banks block |
| A code and an instruction to scan it | Verify on phone |
| The handoff described as three steps | Same screen, now with the mobile variant |
| The same fields, placed and accounted for | Embedded login |
| In-flow language selector | Visible in the bank selection header |

That's seven images out, one embed in, four kept.

## Where the embed goes

**Not at the top.** The case study opens on the problem, and a 21-screen reference above the first paragraph tells the reader this is a screenshot gallery.

Put it immediately after the **Decisions** intro — the paragraph ending *"...more useful than a set of before-and-after screens."* That sentence currently apologises for the absence of screens; it should introduce the thing that replaces them.

Suggested lead-in:

> The flow itself is below — twenty-one screens across payment and account access, desktop and mobile, including the failure states the happy path hides. The decisions that produced it follow.

## The iframe

```html
<figure class="embed embed--journey">
  <iframe
    src="/embeds/custard-payment-journey.html"
    title="Custard hosted pages — payment and account access journey, twenty-one screens"
    loading="lazy"
    width="100%"
    height="1000"
    style="border:1px solid rgba(244,246,245,.16); border-radius:8px; background:#fff; display:block;"
    referrerpolicy="no-referrer">
  </iframe>
  <figcaption>
    Twenty-one hosted screens — payment, account access and failure states.
    Switch the merchant brand to see the theming layer.
    <a href="/embeds/custard-payment-journey.html" target="_blank" rel="noopener">Open full screen ↗</a>
  </figcaption>
</figure>
```

**Same rules as the design system embed:** `loading="lazy"` (this file is 5MB — five times the size of the other one), no `sandbox` attribute, and the full-screen link is mandatory.

**Weight warning.** 5MB is a lot. `hosted-pages.html` is already ~3MB. Lazy loading means it won't block first paint, but a reader on mobile data who scrolls to it will wait. If it can be slimmed — the seven bundled woff2 files are the likely culprit, since the page only needs Inter — do that first.

## Mobile

Same treatment as the design system embed: hide the iframe below ~700px and show the caption plus full-screen link. A 1000px iframe inside a phone viewport is two nested scroll contexts and neither one obviously in charge.

## Deep links, if the export supports them

If the prototype can accept a hash — `#embedded-login`, `#failure-states`, `#mobile` — then each decision section can link to its own screen:

> **The decoupled flow** … [see the handoff screens ↗](/embeds/custard-payment-journey.html#verify)

That's better than one embed serving eight arguments, because the reader lands on the screen the paragraph is about. Worth checking whether the export can do it before building around it.

## Set the page title

Confirm the exported `<title>` isn't **"Bundled Page."** Set it to:

```
Custard — hosted payment and account access journey
```

---

# What this changes about the case study

Worth saying plainly, because it affects the argument.

The Decisions section currently opens by telling the reader that the valuable work wasn't visual — *"research was often the part that found the problem rather than the part that fixed it."* That's true and it's the spine of the piece.

An embed of twenty-one polished screens pulls against that. It's the most visually impressive thing on the page and it will get the most attention.

**Two ways to keep the argument intact:**

1. **Lead the caption with the failure states**, not the happy path. "Including the failure states the happy path hides" should come first — it's the part that supports your claim rather than undercutting it.

2. **Add one line after the embed**, before the decisions begin:

> Every screen above is the output. What follows is where the work actually was — and in three cases out of four, the fix wasn't on any of these screens.

That keeps the embed as evidence of craft while preserving the point that craft wasn't the hard part.
