# Hosted Pages — QR code screen

*Mini section. Standalone export for Claude Design. Build Section 2 only; Section 3 is a list of gaps for Ale and should not be built.*

---

## 1. Build brief

A short case-study passage sitting inside the Hosted Pages page — one of several design-decision sections, not a page of its own.

**Length:** three to four short paragraphs. This is a mini section; it should read faster than the sections around it.

**Direction:** match the existing Hosted Pages page — first person, plain, unhurried. No headers inside the section beyond its title.

**Images:** before and after of the QR screen, side by side if the layout allows. The visual carries the argument; the prose should not describe what the reader can see.

**Title:** The QR code screen

---

## 2. Content

**The QR code screen**

The QR screen handles what we call the decoupled flow: the user starts on desktop, scans the code with their phone, and completes authentication in their bank's mobile app. The journey begins in one place and finishes in another.

That makes it one of the two points in Hosted Pages carrying the most drop-off risk. Handoffs are where people leave. The user has to pick up a second device, do something in an app we don't control, and return to a browser tab they may have already lost — and every step in that gap is a chance to lose them. It is also the step where the screen can give the least help, because for most of it the user isn't looking at our screen at all.

We tested copy and layout variants against live traffic through the in-house experimentation pipeline. The version that won did two things: gave the user more guidance through the step, and used a clearer layout to carry it. Neither is a redesign. Both were the result of running variants against real users rather than arguing about it internally.

It reduced both drop-offs and user error on that step.

`[GAP — one sentence needed: what the errors actually were. See Section 3.]`

That screen was one of many. Between 2023 and 2026 the programme worked through hundreds of design variants across bank selection, the QR screen, embedded logins and decoupled flows — layout, copy, iconography and in-flow guidance. When the screens are this constrained and the compliance requirements this fixed, there is no single redesign available. There is only a long run of small, evidenced changes.

---

## 3. Gaps — do not build

The section above is now legible to a reader who has never built an open banking flow. Three things would make it genuinely good rather than adequate:

- [ ] **What were the errors?** "Reduced user error" is abstract. The specific mistake people were making — and that you designed out — is the most convincing detail available here, and it doesn't need a number attached. Given the decoupled setup, the obvious candidates are people trying to scan with the same device they're already on, losing the desktop tab while in the banking app, or not realising a second device was needed at all — but I'm not going to guess which.
- [ ] **What did "more guidance" actually mean?** Numbered steps, an illustration of the action, a fallback route for users without a second device, clearer instruction copy? One concrete example beats the general claim.
- [ ] **Before and after screens.** If they exist and are cleared for publication, this section barely needs prose.
- [ ] **Check the surface list in the last paragraph.** It currently reads "bank selection, the QR screen, embedded logins and decoupled flows" — but the QR screen *is* the decoupled flow, so that list may be counting the same thing twice. If decoupled covers more than the QR handoff, say what else; if not, drop one of the two.

`[NOTE]` No percentage is included, by your decision — the figure wasn't available. The section is written so that it doesn't imply one. If a number does surface later, it slots into the fourth paragraph without any other change.
