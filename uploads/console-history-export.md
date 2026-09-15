# Console — how it got that way

*Export for Claude Design. Build Sections 1–2. Section 3 is checks for Ale and should not be built.*

A new opening section for the Console case study, plus two small stitches to sections that already exist.

---

## 1. Placement

**Insert Section 2 immediately after the hero image (`con-hero`) and before "The shape of the problem".**

It has to come first. The case study currently opens with the journey mapping, which reads as though the project already existed and you were handed it. It didn't, and you weren't — you had to argue it into being. That changes what the reader thinks they're looking at, so it belongs before anything else.

**Style:** same as the rest of the page. Two H2s, no images. This section is prose doing argumentative work; a diagram here would slow it down before the journey map arrives.

---

## 2. Content

### How it got that way

The Console began as a very simple tool with one job: let a customer create an application and get access to open banking connectivity. In 2020 Yapily had five customers, Intuit among them. For a company that size, that was the right scope.

What happened next wasn't a design failure. The company went through several team reshapes and technology migrations, and each time the Console was what got deprioritised. It was nobody's headline product. It kept more or less working, so it kept being left alone while everything around it changed — new products, new customer types, new scale.

Neglect compounds quietly. A tool built for five customers was still doing broadly the same job when there were two hundred. Every gap between what it did and what customers needed was absorbed by a person: a CSM exporting a report by hand, a support engineer registering a sandbox bank, a PM enabling a product flag. None of that showed up as a design problem. It showed up as headcount.

By 2024, when I took it on, the Console had stopped being a weak part of the product and become the bottleneck the rest of the company was routing around.

### Getting it prioritised again

The first task wasn't design. It was making the case that a deprioritised internal tool was one of the more expensive things in the business — and making it with evidence rather than opinion, because "the Console needs work" had been said before and hadn't moved anything.

So I ran three things, each doing a different job. Customer interviews, to establish what people were actually blocked on. A workshop, to get product, engineering and the customer-facing teams to a shared account of the problem rather than five departmental versions of it. And a hackathon, to make the friction concrete for people who had never experienced it — because it is easy to disagree with a research finding, and much harder to disagree with a week your own team just spent failing to onboard.

Two things became impossible to argue with.

**Nobody could get live without us.** Onboarding needed so much hand-holding that there was no path through it without several people at Yapily being personally involved. Not one blocking step — a sequence of them, each requiring a different person.

**Everyone got the same journey.** Google and a corner shop went through an identical process. The largest customers weren't getting the attention their complexity warranted, and the smallest were being made to sit through a sales-led onboarding they neither needed nor wanted.

Both showed up in the same place: customers were unhappy with how long it took, and we were losing some of them over it.

It worked. The Console was prioritised, and the journey mapping and self-serve direction that the rest of this case study describes followed from there.

---

## 3. Checks — do not build

**Stitches needed in existing sections:**

- [ ] **"Running it as an outsider"** describes the hackathon. The new section now also introduces it, in one clause. Make sure the two don't tell the same story twice — the new section should say what the hackathon was *for*, and the later section what it *found*.
- [ ] **"The shape of the problem"** opens "Becoming a Yapily customer meant a long assisted journey." With the new section above it, that could open "That bottleneck had a shape" or similar, so the two sections connect rather than restarting.
- [ ] **"Two customer types were being served by one path"** later in the page makes a related but different point — direct customers versus agents. The new section's point is about size, not type. Worth a glance to check they read as two findings rather than one repeated.

**The churn sentence — read this before publishing**

The section currently ends the findings with: *customers were unhappy with how long it took, and we were losing some of them over it.*

That's the strongest sentence in the section and the most sensitive one on the page. It's an unquantified statement that your employer was losing customers, published while you still work there. Three options, in order of how much I'd recommend them:

1. **Keep it.** It's true, it's unquantified, and it's the business consequence that makes the whole case study matter. Get it cleared if your relationship supports asking.
2. **Soften the attribution:** "customers told us the timeline was a problem, and some of them acted on it." Same meaning, framed as research finding rather than company reporting.
3. **Cut the churn half** and keep only the dissatisfaction. Weakest option — without a consequence, "customers were unhappy" is just a complaint.

**Content questions:**

- [ ] **How many reshapes and migrations?** I've written "several", which is safe. A number is stronger if you have one and it's publishable.
- [ ] **What did prioritisation actually look like?** Confirmed that it happened, and the section now says so plainly. One concrete detail would make it land harder — a dedicated team, a roadmap commitment, a quarter it was funded for. I've deliberately not guessed at any of those. If you'd rather leave it as the plain statement, that's fine too; it's defensible as it stands.
- [ ] **Terminology.** Yapily's customers are all businesses, so "customers" and "companies" are the same population and the five-to-two-hundred contrast holds. Worth keeping that distinction sharp across the site though: on the Hosted Pages and Research pages, "customer" means the business integrating, and "user" means the consumer connecting a bank account. The Console pages only ever mean the first. A reader moving between the two shouldn't have to work that out.
- [ ] **Naming Intuit here.** Already named on your home page and in the Hosted Pages case study, so this doesn't disclose anything new. Worth a glance anyway, since this section says they were an early customer during a period you also describe as neglected.

`[NOTE]` I've deliberately framed the neglect as a company-wide prioritisation outcome rather than anyone's mistake — no team named, no decision criticised. Worth reading once with a Yapily hat on anyway, since it does describe internal prioritisation going wrong, and you still work there.
