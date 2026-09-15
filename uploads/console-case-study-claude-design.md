# Console — self-serve onboarding

*Standalone export for Claude Design. Build Sections 1–2. Section 3 is publication and accuracy checks for Ale and should not be built.*

---

## 1. Build brief

A full case study, sized between Hosted Pages and the shorter entries.

**Direction:** match the existing case study pages — first person, plain, unhurried.

**Images, in order:**

1. The end-to-end journey map (`8401dbcf…png`) — full width, early, as the diagnostic artifact. It should be clickable to a larger view; the detail is the point, and a reader who wants to zoom in should be able to.
2. Applications (`1.png`)
3. Institutions (`3.png`)
4. Analytics (`2.png`)
5. Organization / Team (`4.png`)

The four Console screens work as a set — a two-by-two grid, or a stepped sequence with a line of caption each. They are beta mockups and the page should say so.

**Title:** Console — turning a sales-led onboarding into a self-serve one

---

## 2. Content

### The shape of the problem

Becoming a Yapily customer meant a long assisted journey. A visitor found the website, filled in a form, and was contacted by an SDR. From there: pre-sales conversations, KYC, contract, customer success onboarding, technical onboarding, go-live. Six months to a year from first contact to a customer in production, depending on the customer type, the sales threshold, and whose calendar had space.

That was fine for enterprise customers, who want to be sold to and expect hand-holding. It was badly wrong for everyone else — and everyone else is around 80% of the customer base.

### Mapping it before changing it

I mapped the whole journey end to end: every stage from anonymous visitor through to renewal and expansion, every team that touched it, every tool it ran on, and what mattered to the person at each stage — split three ways, because a buyer evaluating providers, a signed-but-not-live customer, and a customer in production do not want the same things.

It was deliberately not a design artifact. It covered sales, customer success, technical services, support and operations, because the experience customers were actually having was assembled from all of them, and no single team could see the whole of it.

Three things came out of it:

**The manual work was structural, not incidental.** Nearly every stage past the contact form was annotated as manual, for Yapsters and customers alike. The delay wasn't one broken step; it was that the whole path depended on people being available.

**Users and buyers were invisible to us.** Before someone became a customer, we couldn't identify them across the website, docs, dashboard or support — so we couldn't tailor anything to what they were trying to do. People evaluating us hit limits they didn't know existed and had no way to understand.

**Two customer types were being served by one path.** Direct customers and agents have materially different needs — one agent's note in the research was simply that they didn't want to see our logo in their experience — and the single assisted funnel served neither of them well.

### The bet

Split the path. Enterprise customers keep the assisted journey, because that's what they want and it's worth doing. Everyone else gets a self-serve one: find the site, get access to the Console, and onboard and implement using the product and the documentation, without waiting on a calendar.

The target is weeks to a few months from first contact to go live, against six months to a year.

### What the Console does

**Applications and credentials.** Customers create their own applications and manage credentials across sandbox and production, with product scope and status visible on each — so the first thing a developer needs is self-served rather than requested.

**Teams and roles.** Customers aren't individuals, they're teams: engineers, PMs, designers and finance people, who need genuinely different things. Roles are scoped accordingly — owner, admin, billing, developer — so a finance person isn't navigating API keys and a developer isn't blocked waiting for someone else to grant access.

**Compliance without a meeting.** A queue customers can enter for compliance checks and receive approvals, replacing scheduled in-person sessions. This is the step that most often stalled a go-live, and it stalled for scheduling reasons rather than substantive ones.

**Bank coverage they curate themselves.** Customers filter the institution list by market, product, payment type and rail, and select the coverage that matches their use case — rather than asking us which banks support what.

**Analytics in the product.** Conversion funnels, drop-off, bank performance and session data, visible to the customer directly. Previously this was exported manually by CSMs and sent as reports, which cost us time and gave customers a stale picture.

### Where it stands

The Console is in beta. The screens here are from that build.

`[STATUS — see Section 3]`

---

## 3. Checks — do not build

### Accuracy

- [ ] **Is "weeks to a few months" measured or targeted?** The existing Console figures — 35% onboarding reduction, 38% support tickets — are correctly labelled as targets everywhere else. This one is currently written as a target, matching that. If real go-live times have been measured in beta, that's a much stronger claim and should replace it. If not, leave it.
- [ ] **Beta status.** How many customers are in it, and since when? One sentence turns "we built this" into "this is running." Even "in beta with a small group of customers since X" is worth having.
- [ ] **Your role across the whole thing.** The journey map is clearly yours. The Console is presumably a team effort with PMs and engineering, and possibly other designers by this point. Say which parts you led and which the team delivered — the same split we used on the Hosted Pages conversion number.
- [ ] **The 80% figure.** Confirm it's non-enterprise share of customer base, and that it's a number you can publish.

### Confidentiality — read before publishing the journey map

The map is the strongest artifact in this case study and also the most sensitive thing you've shown me. It contains:

- A **3% website-to-contact-form conversion rate**. That is an internal commercial metric.
- **Internal system names and URLs** — admin.yapily.com, hub.yapily.com, Safeconnect.
- **Internal process detail** — how someone is marked as a customer, sales thresholds, KYC sequencing, which teams staff which stage.
- **Internal shorthand** — "Yapsters", and the annotation about an agent not wanting Yapily's logo in their UX.

None of that is disqualifying, but publishing it is a decision, not a default. Two options:

1. **Get it cleared as-is.** Fastest if your relationship supports asking.
2. **Publish a redrawn version.** Same structure and same argument, with the conversion figure, internal URLs and system names removed. It loses nothing that matters to a hiring manager — the point is that you mapped a cross-functional journey and found where it broke, not what the specific numbers were.

I'd default to option 2 unless you get an explicit yes, and I can produce the redrawn version's content if you want it.

`[NOTE]` The four Console mockups look already safe — fictional org, fictional people, and the visible bank names are public coverage information. Worth a glance to confirm nothing real slipped into a screenshot.
