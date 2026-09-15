# Interview presentation — complete content export

**Alejandro Velázquez · Lead / Staff product designer**

**Format:** live, 45–60 minutes including Q&A
**Runtime:** ~34 minutes of content across 25 slides, leaving 11–26 minutes for questions
**Built to survive interruption:** every slide stands alone. If a panel takes you off course on slide 6 you can rejoin at 7 without the argument collapsing.

---

## Contents

| Act | Slides | Runtime |
|---|---|---|
| Opener | 0 | 1.5 min |
| Act 1 — Hosted Pages | 1–13 | 20 min |
| Act 2 — The Console | 14–21 | 9 min |
| Act 3 — Close | 22–24 | 3.5 min |
| Q&A prep | — | — |
| Asset checklist | — | — |
| Items still to confirm | — | — |

---

# Opener

## Slide 0 — Positioning

**On screen:** Your name and current role. The three surfaces you own — the hosted consent flow, the customer Console, the design systems underneath.

**What you say:**

I'm a product designer and design lead. I joined Yapily in 2020 as its first designer. Yapily is open banking infrastructure — it connects businesses to banks across the UK and Europe so they can move money and access account data. I now lead design across the platform with a team of two designers, and I built the company's research practice from scratch because we never had a researcher.

I'm going to spend most of today on one product, Hosted Pages, because it's the clearest example of the kind of problem I think I'm good at: a product where almost nothing about the experience is under my control, and where improvement has to be earned rather than designed. Then about eight minutes on the Console, which is a different problem — an internal tool nobody owned that had quietly become the most expensive thing in the business.

Please interrupt me. I'd rather have the conversation than deliver the talk.

---

# Act 1 — Hosted Pages

**The argument, stated once on slide 5 and defended for the rest:** when a product's shape is decided at runtime by someone else's integration and someone else's bank, there is no redesign available. The only strategy is a long run of small evidenced changes — which means building the measurement apparatus before you can design at all.

## Slide 1 — What Hosted Pages is

**On screen:** The four screens of the flow, real UI, in sequence. No annotation yet.

**What you say:**

Open banking works like this. To access someone's bank data or initiate a payment, the user has to consent, authenticate directly with their own bank, and come back. Our customers are businesses who need that journey — a lender checking affordability, a platform paying out to sellers, an accounting tool pulling transactions.

Hosted Pages is the white-label version of that journey. Our customers get a compliant consent and connection flow without building every bank-specific screen themselves. They can theme it — logo, typeface, brand colour — and it reads as their product.

It looks like four screens. The rest of this talk is about why it isn't.

## Slide 2 — The problem, and the cheap fix first

**On screen:** 1,500+ banks. 10+ countries. A timeline bar showing six months to over a year of integration work.

**What you say:**

When I joined in 2020, the first thing I did was talk to customers. A pattern came out fast: the API offered almost no abstraction. Everything was raw. With more than 1,500 banks across ten-plus countries, each with its own consent flow, its own data quirks and its own certification requirements, building and maintaining a consent UI meant a full custom integration. Six months. Sometimes over a year for complex cases.

Around 80% of our early customers were SMEs. So integration speed wasn't a convenience for them — it decided whether they could adopt at all. Some looked at the work and walked away.

Working with the PM, we started with the cheaper fix: better guidance and better documentation. It genuinely helped. It didn't change the underlying problem, because customers were still building bank plumbing instead of building their own product. That's when we started talking about widgets and an embeddable flow — removing the integration work rather than documenting it.

**If challenged on why not go straight to the product:** because documentation was two weeks of work and the product was a year of it, and we didn't yet have evidence that abstraction was the answer rather than clarity. The documentation is what produced that evidence.

## Slide 3 — One flow, more than forty versions of itself

**On screen:** The branching diagram. Five decision nodes. Gold marks what the customer's integration decides; grey marks what the product, market and regulation decide. Show the grid with visible holes in it.

The five:

1. **Licence held** — Yapily's licence, or the customer's own direct licence *(customer's integration)*
2. **Institution preselected** — whether an institution ID was passed in the API call *(customer's integration)*
3. **Region / country** — ten-plus markets
4. **Device** — mobile or desktop
5. **Product** — payments, data, or cVRP

**What you say:**

Hosted Pages looks like four screens. In practice, five decisions branch before the user sees anything, and each one multiplies the ones after it. More than forty distinct paths through what is nominally one flow.

Two of the five aren't ours at all. The licence the customer holds, and whether they passed an institution ID in the API call. Those are decided by how our customer chose to integrate. The other three follow from the market, the device and the product.

But the multiplication isn't the hard part. The hard part is that this grid isn't rectangular.

cVRP only exists in the UK, so the market dimension doesn't multiply it. Hiding the consent sheet is available to customers on their own licence and to nobody else. A preselected institution on a direct licence skips every screen we make and goes straight to the bank — so an entire branch of the tree collapses to nothing.

The matrix has holes in it, and the holes aren't symmetrical. You can't write a rule that covers every cell, because some cells don't exist and others exist only under one parent. That's the constraint that shaped every decision in the rest of this talk.

## Slide 4 — And then authentication branches again

**On screen:** Four authentication models, side by side. Real screens for the three that have one; an empty frame for the fourth.

**What you say:**

Then authentication branches again, and this is where the flow stops being ours at all.

Four models. A decoupled QR handoff, where the user starts on desktop and finishes on their phone. A browser redirect. An embedded login where credentials are entered in our page. And in Lithuania, the Netherlands and Sweden, no screen from us whatsoever — the flow hands straight off.

Which of the four a given user gets is decided by their bank and their market. Not by us, and not by our customer.

There's one further wrinkle on the redirect path. EU payments require additional information, and whether we show a screen to collect it depends on whether the customer included it in their API call. Same product, same market, same bank — different number of screens, determined by how carefully the integration was built.

That's the clearest argument I have for why the documentation and the UX guidance were product work rather than support work. A customer who read them gave their users a shorter journey.

## Slide 5 — What follows from that shape

**On screen:** Three statements, nothing else.

**What you say:**

This is the point where the design work stops being about screens. Three things follow from the shape I've just described, and they explain most of what I did next.

**One. Prototyping has limited reach.** You can't usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. That's why the experimentation pipeline had to run against production traffic, and why the research programme reached hundreds of real people connecting real accounts rather than a panel working through a mock-up.

**Two. Improvement had to be incremental.** There was never a redesign available that fixed the whole surface, because there was never a whole surface — only a sparse matrix of paths, each of which had to be measured and improved on its own terms.

**Three. Some of our screens were optional.** Both the consent sheet and the QR screen can be switched off by customers on their own licence. Designing a screen that a paying customer is explicitly allowed to delete changes what the screen has to do. It has to earn its place in their flow, not just in ours.

**If challenged that incrementalism is a lack of vision:** that's the fair version of the question, and I'd answer it two ways. First, I did put a structural bet in — the licensing flexibility and the configurator, which is the part of this I'd argue is vision. Second, on the flow itself, a redesign would have been a guess applied across forty paths at once, with no way to know which of them it helped. I'd rather move a screen I can measure than redraw a surface I can't.

## Slide 6 — So I built the apparatus first

**On screen:** The loop — qualitative discovery, instrumentation, experimentation — with the two audiences shown separately.

**What you say:**

If improvement has to be incremental and evidenced, you need three things in place before you can design anything. None of them existed, and Yapily never had a dedicated researcher, so this got built alongside the design work rather than handed to someone.

**Continuous discovery.** At least three customer interviews a month, sustained from 2020 to now — over two hundred conversations. A fixed cadence rather than a project-triggered one, which matters more than it sounds: you never start a discovery phase from zero, and you notice a shift in what customers are saying before it turns into a roadmap problem. Alongside that, informal Slack channels with customers, for the observations too small to raise a ticket over.

**Two audiences, two methods.** Our customers are businesses — PMs, developers, operations people. They can tell you what's hard to build against and what their own customers complain about. They cannot tell you why someone gave up at the QR screen, because they've never used the flow. So the 2023 to 2026 usability programme put the flow in front of hundreds of ordinary people going through the actual act of connecting a bank account. In a B2B2C product it's easy to only research the buyer, because the buyer is who you talk to every week.

**Instrumentation.** With engineering and product we mapped the events needed to measure the journey accurately — deciding what to track and where. This is the unglamorous half. Without it there's no funnel, no baseline and no experiment, and event schemas designed after the fact are always worse than ones designed alongside the flow.

**Experimentation.** With PMs I defined the pipeline; with engineering we built it in-house, so variants could run against real production traffic. And we ran results sessions, because a pipeline only its operators read is a reporting tool.

One principle underneath all of it: match the cost of the method to the cost of the decision. Guerrilla sessions where the question is "is this direction obviously wrong." Commissioned panels through Testbirds and Applause where the question is "does this meet a standard we can be held to."

**If challenged on rigour or sample sizes — and expect this:** individual studies were typically ten to fifteen participants, moderated and unmoderated, run in-house and through Testbirds. That's the right size for finding usability problems and the wrong size for producing a percentage, and I try to use each accordingly. The qualitative sessions told us what was breaking and roughly how badly; the production experiments told us whether the fix actually worked at scale. The volume came from running them continuously across three years rather than from any single study being large.

## Slide 7 — Bank discoverability, and the names people actually use

**On screen:** Bank selection, before and after. The German case beside it — Sparkasse and Volksbank as parent brands above their sub-branches. A short list of alias examples, if you can retrieve any.

**What you say:**

First decision. Users have to find their bank. Across our sessions, search was the primary way they did it rather than browsing, and it was taking them five to fifteen seconds. We commissioned benchmarking of competitors, who were at one to three seconds, using brand grouping and a most-popular shortcut.

Three changes came out of that, and only one of them is a layout change.

**We redesigned the selection screen** — a bottom sheet, bank branches grouped under one parent brand, and a popular-banks shortcut. The grouping mattered unevenly by market. In Germany, Sparkasse and Volksbank sit above thousands of sub-branches, so a user looking for their local branch was searching a list where the correct answer was one of thousands of near-identical strings. Grouping turned that into two easy choices.

**We changed the naming convention.** We had been showing banks under the names the institutions register under, and users don't recognise those. They recognise the name on their card and in their app. So we matched the display names to what people actually call their bank.

**And we found gaps in our search index.** In session after session we watched people type a name and get nothing back — aliases, informal names, old brand names we weren't holding. That wasn't a UI finding at all. It went to engineering as a change to how search resolved queries, not as a change to a screen.

That third one is the one I'd point at. The observation only existed because we were sitting watching real people type, and the fix wasn't a design fix.

**If challenged on the five-to-fifteen-second figure:** that's from moderated and unmoderated sessions of ten to fifteen participants each, so treat it as a range we observed rather than a population statistic. It was enough to tell us discoverability was the bottleneck, which is what we needed it for.

## Slide 8 — Layout for scale, and the finding we weren't testing for

**On screen:** The three variants tested — accordion, dedicated results page, hybrid. Mark the winner. Then a second panel making the real point.

**What you say:**

Bank selection has to work in two conditions that pull in opposite directions. A customer connecting to a handful of institutions needs something compact. A customer facing a branch-heavy market needs to find one entry among hundreds. A layout optimised for either one fails the other.

We prototyped three variants and tested them against both scenarios: an accordion, a dedicated results page, and a hybrid. The hybrid won — accordion behaviour for small result sets, a dedicated page once the list grows, and a filter that surfaces branches within a parent institution. One component solving both conditions, rather than branching into two designs the customer has to choose between.

But the more useful finding was the one we weren't testing for. Every variant, including the one participants liked least, beat the flow already in production.

That reframed the decision entirely. The question stopped being which of the three to ship, and became how quickly we could ship any of them. The direction was validated independently of the layout details — which is a stronger result than picking a winner, and it changed what the team did the following week.

## Slide 9 — Language can't be inferred from country

**On screen:** The in-flow language selector.

**What you say:**

A small finding, but it's the clearest example of why researching the end user mattered rather than just the customer.

Our original approach had customers pass country and language via the API at integration time. Research found that language couldn't be inferred from country — the person setting up account access sometimes lived in, or spoke the language of, a different country than the actual accountholder. And the API approach still assumed our customer could predict their end user's language in advance, which they often couldn't.

We moved to an in-flow language selector and let the actual user choose.

What I'd point out about that decision is the direction of it. The fix was to take a decision away from our customer, not to give them more control over it. Configurability isn't automatically the answer — sometimes the customer is the wrong person to be asking.

## Slide 10 — The QR handoff: where design has least leverage

**On screen:** The QR screen, before and after.

**What you say:**

The QR screen handles what we call the decoupled flow. The user starts on desktop, scans the code with their phone, and completes authentication in their bank's mobile app. The journey begins in one place and finishes in another.

That makes it one of the two points in the flow carrying the most drop-off risk, because handoffs are where people leave. The user has to pick up a second device, do something in an app we don't control, and return to a browser tab they may have already lost. Every step in that gap is a chance to lose them. It's also the step where our screen can give the least help, because for most of it the user isn't looking at our screen at all.

We tested copy and layout variants against live traffic. The version that won did two things: it gave the user more guidance through the step, and used a clearer layout to carry it. Neither is a redesign. Both came out of running variants against real users rather than arguing about it internally. It reduced both drop-off and user error on that step.

I want to be straight about the evidence there. I don't have a validated figure for the size of that improvement, and I'd rather tell you that than give you a number I can't stand behind. It was one of hundreds of variants the programme worked through between 2023 and 2026 — because when the screens are this constrained and the compliance requirements this fixed, there is no single redesign available. Only a long run of small, evidenced changes.

## Slide 11 — The study that cost us a release date

**On screen:** Two panels. Left, the audit findings — contrast, and a screen reader announcing raw SVG markup. Right, the separate preference study — 21 testers, 62% / 78%.

**What you say:**

Two accessibility studies, doing different jobs.

The first was a commissioned audit, and it found two things we'd got wrong. Colour contrast failures in multiple places. And screen readers reading raw SVG markup aloud, because alternative text hadn't been implemented properly — which in practice meant a screen reader user could not navigate the flow at all.

We postponed a release to fix both, rather than shipping and correcting afterwards. I wrote the findings up as a document for the frontend team to work from. The product now meets WCAG AA.

I bring that one up because "we care about accessibility" is easy to say, and the only real evidence for it is what you were willing to give up. In this case it was a date.

The second study was separate: an unmoderated study of 21 testers in Germany, including participants with disabilities, testing the new flow against the live demo. 62% preferred the new flow overall, and that rose to 78% among testers with disabilities.

That last number is the one I care about most. The users with the most at stake preferred it by the widest margin.

**If challenged on a sample of 21:** small, and I'd treat the 62% as directional rather than precise. What it does establish is that the new flow wasn't worse for the group most likely to be hurt by a change, which was the question we commissioned it to answer.

## Slide 12 — What changed

**On screen:** Two columns. Left, headed *what I'll claim*. Right, headed *what I won't*.

**What you say:**

Let me separate what I'll claim from what I won't.

Customer integration effort went from around six months, sometimes over a year for complex cases, to two weeks. Hosted Pages is used by 200 companies, including Google, Adyen, Intuit, Ant Financial and Revolut. The product now meets WCAG AA, and the accessibility study showed a clear preference for the new flow — strongest among the users who needed it most. The evidence base behind all of that is hundreds of end-user usability sessions between 2023 and 2026, plus a continuous interview cadence running since 2020.

On conversion. End to end, Hosted Pages went from around 20% at the 2023 beta to roughly 65 to 75% today, varying by use case and market.

I'm not going to present that as my result. It moved over three years across several angles at once, and a meaningful share of end-to-end conversion in open banking is infrastructure — bank API reliability, redirect success, and coverage, which was expanding throughout that period.

What I can tell you is where design was one of the levers, and bank discoverability is the clearest case. Three things there were ours: the naming convention change, so banks appeared under the names people recognise rather than the names they register under; the alias gaps we found by watching people type, which went into the search index; and the grouping and shortcut work on the selection screen itself. Those were aimed at a step we could measure, and they moved it.

What I can't give you is a clean percentage for design's share of that 65 to 75%. I'd distrust anyone who could.

**Why this framing:** volunteering the limit of your own claim is the single most credible move available to you in this presentation. A panel that has to extract the caveat from you discounts everything else. A panel you hand it to trusts the rest.

## Slide 13 — Reflection

**On screen:** Nothing, or one line. This is spoken.

**What you say:**

Hosted Pages was originally built for customers using Yapily's own licence, so the flow was fairly rigid by design. At the time that felt like the right trade-off — it kept the compliance surface small and got us to market fast.

It was only once direct customers started onboarding and asking for more flexibility in their own consent experience that the limitation became clear. If I were starting the product again, I'd build more flexibility into the licensing model from day one. Not because the original call was wrong given what we knew then, but because I'd now design for that need earlier rather than retrofitting it later.

That's the honest version. The configurator we shipped is the retrofit, and it works — but it cost more than it would have if the flexibility had been there from the start.

---

# Act 2 — The Console

**The argument:** the most expensive design problem in the company was a tool nobody owned, and most of the design work was getting it prioritised at all.

**Why this act earns its place next to Act 1.** Act 1 shows you working inside a constraint you can't change. Act 2 shows you changing what the organisation is willing to fund. A staff-level panel is listening for the second one and most candidates only bring the first.

## Slide 14 — What the Console is

**On screen:** The Console as it was. Real screens.

**What you say:**

Second story, much shorter, and a different kind of problem.

The Console is where Yapily customers sign up, manage applications, and configure their integration with the platform. Becoming a customer used to take six months to a year. This is the work to make most of that self-served.

I'm telling you this one because most of the design work wasn't design.

## Slide 15 — How it got that way

**On screen:** Five customers in 2020. Two hundred by 2024. The same tool.

**What you say:**

The Console began as a very simple tool with one job: let a customer create an application and get access to open banking connectivity. In 2020 Yapily had five customers, Intuit among them. For a company that size, that was the right scope.

What happened next wasn't a design failure. The company went through several team reshapes and technology migrations, and each time the Console was what got deprioritised. It was nobody's headline product and it kept more or less working, so it kept being left alone while everything around it changed — new products, new customer types, new scale.

So a tool built for five customers was still doing broadly the same job when there were two hundred.

And every gap between what it did and what customers needed got absorbed by a person. A CSM exporting a report by hand. A support engineer registering a sandbox bank. A PM enabling a product flag. None of that looked like a design problem. It looked like we needed more people.

By 2024, when I took it on, the Console had stopped being a weak part of the product and become the bottleneck the rest of the company was routing around.

## Slide 16 — The first task wasn't design

**On screen:** Three instruments, three jobs. Interviews / workshop / hackathon, with who was in each.

**What you say:**

"The Console needs work" had been said before, by people more senior than me, and it hadn't moved anything. So the first task wasn't design. It was making the case that a deprioritised internal tool was one of the more expensive things in the business — and making it with evidence rather than opinion.

I ran three things, and each did a different job.

**Customer interviews**, to establish what people were actually blocked on rather than what we assumed they were.

**A workshop** with VPs, PMs, engineering, support, design and customer success — to get to one shared account of the problem instead of five departmental versions of it.

**A two-day hackathon** with engineering, PMs, design and the implementation team, where we role-played as an outside consultancy using only what a real customer can access. Because it's easy to disagree with a research finding, and much harder to disagree with two days your own team just spent failing to onboard.

## Slide 17 — What two days as an outsider found

**On screen:** The four findings, written as they were experienced rather than as research output.

**What you say:**

In two days, working only with what a customer gets:

A 403 error, because Hosted Pages wasn't enabled by default. Fixing it needed a PM, and that was a two-day wait — inside a two-day hackathon.

Sandbox banks that had to be registered manually, and roughly a third of the pre-configured ones didn't work.

Three IDs returned by the API, and no way to tell which one was the Application User ID.

And an undocumented CORS issue that forced customers to build their own backend proxy.

None of this was new information to the customers experiencing it. What was new was that our own engineers and PMs had now experienced it.

## Slide 18 — The stakeholder who said no, and why she was right to

**On screen:** The competing priority, stated plainly. Regional integration launches on one side, Console work on the other.

**What you say:**

The main resistance came from our VP of Platform, and her objection was a good one.

Our priority was launching integrations in more regions. That's the growth engine, it's what customers ask for in sales conversations, and Console work would take capacity away from it. She wasn't defending the status quo — she was defending a concrete bet against a vaguer one. If I'd been in her position with the case as it stood, I'd probably have said the same.

What changed it was the workshop. Not because I argued better, but because once sales, support, customer success and engineering were all in one room describing the same journey, the cost stopped being a design opinion and became a visible amount of several teams' time. She was convinced it needed tackling, and the Console was prioritised.

The thing I'd draw out of that: the reason earlier attempts had failed wasn't that the problem was unclear. It was that the case had only ever been made by design, to product. It needed to be made by five functions at once, and my job was to build the room rather than to win the argument.

## Slide 19 — Mapping it before changing it

**On screen:** The journey map, before. Commercial detail removed. Manual steps, automated steps and dead ends distinguished.

**What you say:**

Then I mapped the whole journey end to end. Every stage from anonymous visitor through to renewal and expansion, every team that touched it, every tool it ran on, and what mattered to the person at each stage — split three ways, because a buyer evaluating providers, a signed-but-not-live customer, and a customer in production don't want the same things.

It was deliberately not a design artifact. It covered sales, customer success, technical services, support and operations, because the experience customers were actually having was assembled from all of them, and no single team could see the whole of it.

Three things came out of it.

**The manual work was structural, not incidental.** Nearly every stage past the contact form was manual, for our staff and for customers alike. The delay wasn't one broken step — it was that the whole path depended on people being available.

**Users and buyers were invisible to us.** Before someone became a customer we couldn't identify them across the website, docs, dashboard or support, so we couldn't tailor anything to what they were trying to do. People evaluating us hit limits they didn't know existed.

**Two customer types were served by one path.** Direct customers and agents have materially different needs. One agent's note in the research was simply that they didn't want to see our logo in their experience.

## Slide 20 — The bet

**On screen:** Before and after journeys, simplified. The split path.

**What you say:**

Split the path. Enterprise customers keep the assisted journey, because that's what they want and it's worth doing well. Everyone else — around 80% of the customer base, on customer success's figures — gets a self-serve one: find the site, get access to the Console, onboard and implement using the product and the documentation, without waiting on anyone's calendar. Target is weeks to a few months, against six months to a year.

Five principles underneath it. Identify early, because nothing can be tailored to a person you can't recognise. Remove scheduling as a dependency, because most of the delay was calendars, not complexity. Make limits visible, because people hitting an invisible ceiling assume the product can't do it. Serve teams, not individuals — engineers, PMs, designers and finance people need different things from the same account. And give customers their own data, because anything a CSM exports by hand is a queue with a person in it.

If I had to pick the single highest-value change: compliance moved from a scheduled in-person session to a queue. That step was the most common reason a go-live slipped, and it slipped for scheduling reasons rather than substantive ones.

## Slide 21 — Where it stands, and what shipped

**On screen:** Console beta screens, and the configurator.

**What you say:**

Honest status. The Console is in beta, and it's too early for adoption metrics. I'd rather tell you that than dress up a number.

One piece has shipped in full, and it's the one I'd point at. The Hosted Pages configurator gives customers granular self-serve control over every screen in the flow — colours, copy, layout, states.

Before it, a customer who wanted a theming change raised a support ticket, and an engineer implemented it. Every time. So each request consumed a support person and an engineer, for work that was never engineering work in the first place. Now it's zero-touch, and those requests stopped coming in.

That's the shape of the whole Console argument in one feature. The cost wasn't a bad screen. The cost was people.

On credit: the journey map and the information architecture are mine. The Console itself was built with product and engineering, and the self-serve initiatives were scoped jointly off the back of the mapping and the hackathon. One of my two designers worked on it as the executing designer.

---

# Act 3 — Close

## Slide 22 — Three design systems, and the governance underneath

**On screen:** The three systems on a shared token layer. Pages from the Yapily UI documentation.

**What you say:**

One thing I've skipped that's relevant to how I work at this level.

I built three design systems at Yapily rather than one, deliberately. Custard, the white-label foundation under Hosted Pages — minimal by design, because when customers control the surface, the system's job is to expose as little as possible while still reading as their product. Mark, for the marketing site, restyled annually with more expressive work. And Yapily UI for the twenty internal tools staff use, dense by nature because it's analytics and data-heavy pages where information density is the point.

Three Figma libraries on one shared token library, mirrored in code, documented in Storybook. A single system would have forced three very different surfaces into one set of compromises, and whichever surface was least like the others would have come off worst. Shared tokens were governed more tightly than components, because a token change lands on all three at once — those needed approval from both the frontend lead and me, and in practice only happened during rebrand work.

The governance is the part I'd point at, and one ordering decision in particular. The gate was evidence, not seniority. Anyone could propose a component, but it had to be tested for usability and accessibility *before* it was eligible for review, not after. That changed what review meetings were about — teams debated evidence rather than taste, and the discussion moved faster because there was less to be subjective about. We also brought frontend in at proposal stage rather than at handoff, which surfaced implementation cost while the design was still cheap to change.

And I handed each system to a designer on my team once it was established. That's how I'd want to work anywhere — build it, prove it, give it away.

What we never did: formalise versioning or deprecation. What I'd put in place now is semantic versioning so someone has to consciously decide whether a change is breaking, deprecation rather than deletion with the migration path named, and a changelog written for humans.

## Slide 23 — The through-line

**On screen:** One line.

**What you say:**

If there's one thing I'd want you to take from both of those stories, it's this.

In both cases the work I'm proudest of wasn't the design. On Hosted Pages it was building the instrumentation and the experimentation pipeline, because without them there was no way to improve a product whose shape I didn't control. On the Console it was getting five functions into one room, because without that the work wouldn't have been funded at all.

I build the evidence before I argue for the design. It's slower to start, and it's the reason I can tell you which of my claims to trust and which not to.

*This is my proposal for the through-line, not a fact about you. If there's something else you want to be the last idea in the room, tell me and I'll rebuild the close around it.*

## Slide 24 — What I'm looking for

**On screen:** Nothing, or your contact details. This is spoken.

**What you say:**

One last thing, on why I'm in the room.

When I joined Yapily there were five customers. The product I've owned since launch is now used by two hundred, including Google, Adyen and Intuit. Taking something from founding-designer scale to that is the work I'm proudest of, and it's also the work that's finished.

Six years in, I've looked at open banking from every angle I can find — consent, developer experience, onboarding, regulation, the systems underneath all of it. I know this domain now. What I want next is a hard problem in a platform or regulated space where the constraints are new to me, and a team I can learn something from. Being at the edge of what I understand is the thing that makes me want to get to work.

Happy to take questions.

**Why this framing:** it says the same thing as "I've lost excitement" without handing a panel a reason to worry. Completion and appetite, rather than fatigue. Both are true; only one of them helps you.

---

# Q&A preparation

Ordered by how likely they are and how much damage an unprepared answer does.

## On evidence and attribution

**"How much of the conversion improvement was actually design?"**

I can't give you a clean percentage and I'd distrust anyone who could. What I can tell you is which levers were ours. Bank discoverability is the clearest: the display naming change, the alias gaps we found in testing that went into the search index, and the grouping and shortcut redesign. Those were aimed at a step we could measure. Alongside them, backend and frontend were working on reliability and redirect success, and coverage was expanding the whole time — all three move the same end-to-end number. Design was one of three disciplines, and I'd rather tell you that than take credit for infrastructure work.

**"Ten to fifteen participants isn't a lot. How confident are you in those findings?"**

That's the right size for finding usability problems and the wrong size for producing a percentage. I used each accordingly — qualitative sessions to find what was breaking, production experiments against real traffic to confirm whether the fix worked. The confidence came from volume over time rather than from any single study, and from the fact that the two methods had to agree before we shipped.

**"You mentioned an 8% improvement" — if it comes up**

That figure is directional. The pipeline showed the variant winning, and I'd stand behind the direction but not the decimal. I'd rather flag that than have you find it later.

**"How did you measure the competitor timings?"**

Commissioned benchmarking rather than our own observation, which is why I'd treat it as a more reliable comparison than if we'd timed it ourselves.

## On level and scope

**"Some of this sounds like product management rather than design."**

Some of it is, and I'd say so. The journey map and the information architecture are design work. Getting the Console prioritised was influence work that nobody else was going to do, and I did it because I could see the whole surface while each functional team could only see their part. If the question is whether I'd rather have a PM partner doing that — yes, and on Hosted Pages I had one. On the Console there wasn't one assigned, which is part of how it got into that state.

**"You've been at one company for six years. Is your practice current?"**

Fair thing to probe, and I'd rather answer it directly than defend it. The products changed underneath me several times — a raw API, then a hosted product, then a self-serve platform, then a design system migrating into AI tooling — so the work kept being new even though the company didn't. What I'd concede is that I've only tested my judgement in one organisational context for six years, and that's genuinely a gap. It's part of why I'm looking.

**"You manage two designers. Why are you applying for an IC role?"**

Honest answer: I've done both and the part I'm best at is the systems and product judgement, not the people management. I've managed seven designers over six years and I'd do it again if the role needed it, but I don't want the next role to be mostly that.

**"What did your designers actually do?"**

Two mid-level product designers. One focused on demos and design systems, the other on Hosted Pages and the Console. On those products I set the direction and they executed, with their involvement in decisions scaled to their seniority. I built each design system to an established state and then handed day-to-day ownership over. I'd rather describe that accurately than imply they were operating at a level they weren't.

## On craft and judgement

**"Tell me about a time research changed your mind."**

Caremoni, 2017 to 2018 — a payments and reporting tool for a social enterprise managing NHS personal health budgets. I interviewed everyone in the chain: the two operators, independent carers, care agencies, and the people receiving care. Then, rather than build, I ran a concierge version — a plain HTML front end with the payments still processed by hand — to test whether the flows were right.

That's what caught my mistake. I'd assumed people receiving care and their families would be low on digital confidence. Most were perfectly comfortable. The real problem was time and patience for admin — chasing receipts, chasing the operator for money — which was stressful on both sides. That reframed the product from an accessibility problem to an admin-burden problem, and it only surfaced because we ran something real before building anything.

**"Tell me about a small bet, or an experiment that shaped strategy."**

HeadBox, 2018 to 2019. I came in during a leadership transition with no reliable way to measure product performance. Fifteen customer interviews refocused the team on the enquiry-to-booking funnel, where only 20% of enquiries were getting a host proposal.

We shipped the Enquiry Hub as a deliberately small experiment — London only, capped at £10,000. It showed the platform connected hosts and guests well but converted poorly, which led to a pivot from marketplace to SaaS lead generation. The SaaS product for venue partners generated £150,288 ARR from 117 customers within three months, four times what the prior model did.

The bet is the part I'd emphasise. Capping it at £10k and one city meant we could afford to be wrong, and we were partly wrong in a way that was useful.

**"What would you do differently?"**

Three things, honestly. On Hosted Pages, I'd have built flexibility into the licensing model from day one instead of retrofitting it through the configurator. On the design systems, we never formalised versioning or deprecation and we should have. And on the Console, the honest answer to "why did it take until 2024" is that I hadn't built the case yet — the problem was visible for a while before I made it fundable.

**"How do you work with engineering?"**

Concretely, on this work: the instrumentation was designed jointly with engineering and product rather than requested afterwards, which is the only way event schemas end up usable. The experimentation pipeline was built in-house with engineering. In the design system, frontend joined at proposal stage rather than handoff, so implementation cost surfaced while the design was still cheap to change. And the search alias finding went to engineering as a search problem, not as a design ticket — I try not to translate every finding into a screen.

**"How do you handle a senior stakeholder who disagrees with you?"**

The Console is my example — our VP of Platform was against the work, and her reasoning was better supported than mine at the time. I didn't win that by arguing. I got sales, support, customer success and engineering into one room describing the same journey, and the cost stopped being a design opinion. The lesson I took is that when the case has only been made by design to product, the problem usually isn't the argument.

**"What's your view on AI in design?"**

We're currently migrating our design systems into AI tooling as part of a company-wide AI transformation, so that more people can produce on-brand material without a designer in the loop — we've built skills for branding, demos and sales slides. I'd frame that as the honest version of the opportunity: it's good at the production work that shouldn't have needed a designer, and the interesting question is what a design team does with the capacity that frees up. I wouldn't claim more than that yet.

## On the awkward ones

**"Why are you leaving?"**

Nothing has gone wrong, and I'd tell you if it had. I joined when Yapily had five customers. The product I've owned since launch is now used by two hundred, including Google, Adyen and Intuit. That's the arc I wanted when I took the job, and it's complete.

What's changed is that I've now looked at open banking from every angle available to me — the consent flow, the developer experience, the onboarding journey, the regulation, the design systems underneath all of it. Six years of ups and downs, and I learned more from the downs. But I've stopped being surprised by this domain, and being surprised is a lot of what makes me good at this work. I'd rather spend the next stretch somewhere I have to learn the shape of the problem from scratch.

**Delivery note:** say this at a steady pace and stop. Do not add "I lost excitement" or dwell on the ups and downs — the honest version of that thought is "I've stopped being surprised," which reads as intellectual appetite. The unqualified version reads as disengagement, and a panel can't tell the difference from the outside.

**"Hosted Pages converts at 65 to 75%. Why isn't it higher?"**

Because a meaningful share of it isn't ours. The user leaves for their bank's own interface and comes back, and bank API reliability and redirect success are outside our control. Add to that more than forty distinct paths, some of which we don't render a single screen in. I'd be suspicious of anyone promising a large step change on that number rather than a continued grind.

**"Isn't 'improvement had to be incremental' just a way of saying you never had a vision?"**

That's the fair version of the question. Two answers. The structural bet was the licensing flexibility and the configurator — that's the vision part, and it's the thing I said I'd have done sooner. On the flow itself, a redesign would have been a single guess applied across forty paths with no way to know which ones it helped. I'd rather move a screen I can measure than redraw a surface I can't.

---

# Asset checklist

You've confirmed you have all Hosted Pages flow screens and all Console before-and-after screens. What still needs making:

| Slide | Asset | Status |
|---|---|---|
| 3 | Branching diagram — five decisions, gold vs grey, visible holes | **Needs building.** The most important asset in the deck |
| 4 | Four authentication models, side by side | Needs assembling from existing screens |
| 5 | Three consequences — text only | Simple |
| 6 | The research loop, two audiences shown separately | Needs building |
| 7 | Bank selection before/after; German parent-brand case; alias examples | Screens exist; alias examples to retrieve if possible |
| 8 | Three tested variants, winner marked | Screens exist |
| 9 | In-flow language selector | Screen exists |
| 10 | QR screen before/after | Screens exist |
| 11 | Contrast failures and the SVG/screen-reader issue | Needs illustrating |
| 12 | Two-column claim/won't-claim | Simple |
| 15 | Five customers → two hundred, same tool | Simple |
| 16 | Three instruments and who was in each | Simple |
| 19 | Journey map, before, redacted | Exists — the portfolio version |
| 20 | Before/after journeys simplified | Exists — the portfolio version |
| 21 | Console beta screens and configurator | Screens exist |
| 22 | Three systems on shared token layer; Yapily UI doc pages | Exists |

---

# Items still to confirm

1. **The accessibility audit.** Confirmed as a separate study from the 21-tester preference study, and now presented as two. The audit's own sample size and vendor are not recorded anywhere — worth retrieving if you have it, since a panel may ask who ran it.
2. **The postponed release.** Which one, roughly when, how long it slipped, and whether the decision was contested. Any of these makes slide 11 land harder; none are essential.
3. **Usability programme volume** — now stated as "hundreds of end-user usability sessions" throughout, since the exact count could not be substantiated. If you can retrieve the real figure, a specific number is stronger and can be restored.
4. **Hosted Pages GA** — confirmed as end of 2025. The portfolio has been corrected to stop conflating that with the usability work running through 2026.
5. **"Around 80% of the customer base is non-enterprise"** — confirmed as customer success's figure, and now attributed as such.
6. **Sequence in Act 2** — the narrative implies interviews, then workshop, then hackathon. Correct me if it ran differently, because a panel may ask what convinced whom.
7. **Slide 23 through-line** — my proposal, replace if you want a different last idea in the room.
8. **The competitor benchmarking study** — vendor, date, sample size, which competitors, if you have them.
9. **Slide 18 wording** — the presentation still says "our VP of Platform", which is right for a private conversation and more credible than a vague reference. The public portfolio now says "senior management on the platform side". Say whichever you're comfortable with in the room.
