# Interview presentation — full content export
Ale Velázquez. Exported 2026-07-30 from `Interview Presentation.dc.html`.

25 slides at 1920×1080, built on `deck-stage`. Dark ground #0B0D0D, text #F4F6F5, muted #AAB3AF / #7d8683, gold accent #C9A86A. Geist for body, Geist Mono for labels.

Three acts: Hosted Pages (00–13), the Console (14–21), close (22–24).
Each slide below gives its on-slide text in document order, image placeholders in `[image: …]`, then the speaker notes verbatim.

---

## 00 Positioning

**On slide**

- [image: avatar]
- YAPILY · 2020 — PRESENT
- Alejandro Velázquez
- Lead product designer and design manager. Founding designer at Yapily — open banking infrastructure across the UK and Europe.
- Hosted Pages
- The white-label consent and bank-connection flow. 200 companies.
- The Console
- Where customers sign up, manage apps and configure the platform.
- Three design systems
- One shared token layer, mirrored in code, handed to my team.

**Speaker notes**

I am a product designer and design lead. I joined Yapily in 2020 as its first designer. Yapily is open banking infrastructure — it connects businesses to banks across the UK and Europe so they can move money and access account data. I now lead design across the platform with a team of two designers, and I built the company's research practice from scratch because we never had a researcher. I'm going to spend most of today on one product, Hosted Pages, because it's the clearest example of the kind of problem I think I'm good at: a product where almost nothing about the experience is under my control, and where improvement has to be earned rather than designed. Then about eight minutes on the Console, which is a different problem — an internal tool nobody owned that had quietly become the most expensive thing in the business. Please interrupt me. I'd rather have the conversation than deliver the talk.

---

## 01 What Hosted Pages is

**On slide**

- What Hosted Pages is
- 01 SELECT BANK
- [image: Hosted Pages — bank selection screen]
- 02 CONSENT
- [image: Hosted Pages — consent sheet]
- 03 AUTHENTICATE
- [image: Hosted Pages — bank authentication handoff]
- 04 RETURN
- [image: Hosted Pages — success / return screen]
- White-label: our customers get a compliant consent and connection flow without building every bank-specific screen themselves. It reads as their product.

**Speaker notes**

Open banking works like this. To access someone's bank data or initiate a payment, the user has to consent, authenticate directly with their own bank, and come back. Our customers are businesses who need that journey — a lender checking affordability, a platform paying out to sellers, an accounting tool pulling transactions. Hosted Pages is the white-label version of that journey. Our customers get a compliant consent and connection flow without building every bank-specific screen themselves. They can theme it — logo, typeface, brand colour — and it reads as their product. It looks like four screens. The rest of this talk is about why it isn't.

---

## 02 The problem

**On slide**

- The problem, and the cheap fix first
- +
- banks, each with its own consent flow, data quirks and certification
- countries, each with its own regulatory shape
- %
- of early customers were SMEs — speed decided adoption
- CUSTOM INTEGRATION — TIME TO LIVE
- 6 months
- 12 months+ for complex cases
- We took the cheap fix first — guidance and documentation. It helped, and it didn't change the problem: customers were still building bank plumbing instead of their own product.

**Speaker notes**

When I joined in 2020, the first thing I did was talk to customers. A pattern came out fast: the API offered almost no abstraction. Everything was raw. With more than 1,500 banks across ten-plus countries, each with its own consent flow, its own data quirks and its own certification requirements, building and maintaining a consent UI meant a full custom integration. Six months. Sometimes over a year for complex cases. Around 80% of our early customers were SMEs. So integration speed wasn't a convenience for them — it decided whether they could adopt at all. Some looked at the work and walked away. Working with the PM, we started with the cheaper fix: better guidance and better documentation. It genuinely helped. It didn't change the underlying problem, because customers were still building bank plumbing instead of building their own product. That's when we started talking about widgets and an embeddable flow — removing the integration work rather than documenting it. IF CHALLENGED on why not go straight to the product: because documentation was two weeks of work and the product was a year of it, and we didn't yet have evidence that abstraction was the answer rather than clarity. The documentation is what produced that evidence.

---

## 03 Forty versions of itself

**On slide**

- One flow, more than forty versions of itself
- CUSTOMER'S INTEGRATION
- MARKET, PRODUCT, REGULATION
- 01
- Licence held
- Yapily's licence, or the customer's own direct licence
- 02
- Institution preselected
- Whether an institution ID was passed in the API call
- 03
- Region
- Ten-plus markets, each with its own rules
- 04
- Device
- Mobile or desktop
- 05
- Product
- Payments, data, or cVRP
- THE MATRIX IS NOT RECTANGULAR
- Dashed cells don't exist. 40+ paths through what is nominally one flow.
- cVRP
- consent sheet
- preselected institution on a direct licence

**Speaker notes**

Hosted Pages looks like four screens. In practice, five decisions branch before the user sees anything, and each one multiplies the ones after it. More than forty distinct paths through what is nominally one flow. Two of the five aren't ours at all. The licence the customer holds, and whether they passed an institution ID in the API call. Those are decided by how our customer chose to integrate. The other three follow from the market, the device and the product. But the multiplication isn't the hard part. The hard part is that this grid isn't rectangular. cVRP only exists in the UK, so the market dimension doesn't multiply it. Hiding the consent sheet is available to customers on their own licence and to nobody else. A preselected institution on a direct licence skips every screen we make and goes straight to the bank — so an entire branch of the tree collapses to nothing. The matrix has holes in it, and the holes aren't symmetrical. You can't write a rule that covers every cell, because some cells don't exist and others exist only under one parent. That's the constraint that shaped every decision in the rest of this talk.

---

## 04 Authentication branches

**On slide**

- And then authentication branches again
- Which model a user gets is decided by their bank and their market — not by us, and not by our customer.
- Decoupled QR handoff
- [image: QR handoff screen]
- Browser redirect
- [image: Redirect screen]
- Embedded login
- [image: Embedded credentials screen]
- No screen from us
- Lithuania, the Netherlands, Sweden — the flow hands straight off
- On the redirect path, EU payments need extra information — whether we show a screen to collect it depends on what the customer put in the API call. Same bank, same market, different number of screens.

**Speaker notes**

Then authentication branches again, and this is where the flow stops being ours at all. Four models. A decoupled QR handoff, where the user starts on desktop and finishes on their phone. A browser redirect. An embedded login where credentials are entered in our page. And in Lithuania, the Netherlands and Sweden, no screen from us whatsoever — the flow hands straight off. Which of the four a given user gets is decided by their bank and their market. Not by us, and not by our customer. There's one further wrinkle on the redirect path. EU payments require additional information, and whether we show a screen to collect it depends on whether the customer included it in their API call. Same product, same market, same bank — different number of screens, determined by how carefully the integration was built. That's the clearest argument I have for why the documentation and the UX guidance were product work rather than support work. A customer who read them gave their users a shorter journey.

---

## 05 What follows

**On slide**

- What follows from that shape
- 01
- Prototyping has limited reach
- A flow whose shape is chosen at runtime can't be prototyped usefully — so the experiments ran against production traffic and the research ran with real people connecting real accounts.
- 02
- Improvement had to be incremental
- There was never a whole surface to redesign — only a sparse matrix of paths, each measured and improved on its own terms.
- 03
- Some of our screens were optional
- Customers on their own licence can switch off the consent sheet and the QR screen. A screen a paying customer may delete has to earn its place in their flow, not just in ours.

**Speaker notes**

This is the point where the design work stops being about screens. Three things follow from the shape I've just described, and they explain most of what I did next. ONE — prototyping has limited reach. You can't usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. That's why the experimentation pipeline had to run against production traffic, and why the research programme reached hundreds of real people connecting real accounts rather than a panel working through a mock-up. TWO — improvement had to be incremental. There was never a redesign available that fixed the whole surface, because there was never a whole surface — only a sparse matrix of paths, each of which had to be measured and improved on its own terms. THREE — some of our screens were optional. Both the consent sheet and the QR screen can be switched off by customers on their own licence. Designing a screen that a paying customer is explicitly allowed to delete changes what the screen has to do. It has to earn its place in their flow, not just in ours. IF CHALLENGED that incrementalism is a lack of vision: that's the fair version of the question. First, I did put a structural bet in — the licensing flexibility and the configurator, which is the part of this I'd argue is vision. Second, on the flow itself, a redesign would have been a guess applied across forty paths at once, with no way to know which of them it helped. I'd rather move a screen I can measure than redraw a surface I can't.

---

## 06 The apparatus

**On slide**

- So I built the apparatus first
- DISCOVERY
- 3 interviews a month since 2020
- 200+ conversations on a fixed cadence, plus informal Slack channels with customers.
- USABILITY
- Hundreds of end users, 2023—2026
- Real people connecting real accounts — moderated, unmoderated, Testbirds and Applause.
- INSTRUMENTATION
- Events designed with engineering
- The unglamorous half. Without it there is no funnel, no baseline and no experiment.
- EXPERIMENTATION
- In-house pipeline on production traffic
- Plus results sessions — a pipeline only its operators read is a reporting tool.
- AUDIENCE ONE — THE BUYER
- PMs, developers, operations people. They can tell you what's hard to build against. They have never used the flow.
- AUDIENCE TWO — THE END USER
- The only people who can tell you why someone gave up at the QR screen. In B2B2C it's easy to research only the buyer.
- One principle underneath all of it: match the cost of the method to the cost of the decision.

**Speaker notes**

If improvement has to be incremental and evidenced, you need three things in place before you can design anything. None of them existed, and Yapily never had a dedicated researcher, so this got built alongside the design work rather than handed to someone. CONTINUOUS DISCOVERY. At least three customer interviews a month, sustained from 2020 to now — over two hundred conversations. A fixed cadence rather than a project-triggered one: you never start a discovery phase from zero, and you notice a shift in what customers are saying before it becomes a roadmap problem. Alongside that, informal Slack channels with customers, for the observations too small to raise a ticket over. TWO AUDIENCES, TWO METHODS. Our customers are businesses — PMs, developers, operations people. They can tell you what's hard to build against. They cannot tell you why someone gave up at the QR screen, because they've never used the flow. So the 2023 to 2026 usability programme put the flow in front of hundreds of ordinary people actually connecting a bank account. In a B2B2C product it's easy to only research the buyer. INSTRUMENTATION. With engineering and product we mapped the events needed to measure the journey accurately. This is the unglamorous half. Without it there's no funnel, no baseline and no experiment — and event schemas designed after the fact are always worse. EXPERIMENTATION. With PMs I defined the pipeline; with engineering we built it in-house so variants could run against real production traffic. And we ran results sessions, because a pipeline only its operators read is a reporting tool. One principle underneath all of it: match the cost of the method to the cost of the decision. Guerrilla sessions where the question is is this direction obviously wrong. Commissioned panels through Testbirds and Applause where the question is does this meet a standard we can be held to. IF CHALLENGED on rigour or sample sizes — expect this: individual studies were typically ten to fifteen participants, moderated and unmoderated, in-house and through Testbirds. That's the right size for finding usability problems and the wrong size for producing a percentage. The qualitative sessions told us what was breaking; the production experiments told us whether the fix worked at scale. The volume came from running them continuously across three years.

---

## 07 Bank discoverability

**On slide**

- Bank discoverability, and the names people actually use
- 5—15s
- us, observed
- 1—3s
- benchmarked competitors
- BEFORE
- [image: Bank selection — before]
- AFTER — GROUPED, WITH POPULAR SHORTCUT
- [image: Bank selection — redesigned bottom sheet]
- Germany
- Sparkasse and Volksbank sit above thousands of near-identical sub-branches. Grouping turned that into two easy choices.
- Naming
- Registered institution names replaced with the name on the card and in the app.
- Search index gaps
- Aliases and old brand names we weren't holding. Not a UI finding — it went to engineering as a search change.

**Speaker notes**

First decision. Users have to find their bank. Across our sessions, search was the primary way they did it rather than browsing, and it was taking them five to fifteen seconds. We commissioned benchmarking of competitors, who were at one to three seconds, using brand grouping and a most-popular shortcut. Three changes came out of that, and only one of them is a layout change. We redesigned the selection screen — a bottom sheet, bank branches grouped under one parent brand, and a popular-banks shortcut. The grouping mattered unevenly by market. In Germany, Sparkasse and Volksbank sit above thousands of sub-branches, so a user looking for their local branch was searching a list where the correct answer was one of thousands of near-identical strings. Grouping turned that into two easy choices. We changed the naming convention. We had been showing banks under the names the institutions register under, and users don't recognise those. They recognise the name on their card and in their app. So we matched the display names to what people actually call their bank. And we found gaps in our search index. In session after session we watched people type a name and get nothing back — aliases, informal names, old brand names we weren't holding. That wasn't a UI finding at all. It went to engineering as a change to how search resolved queries, not as a change to a screen. That third one is the one I'd point at. The observation only existed because we were sitting watching real people type, and the fix wasn't a design fix. IF CHALLENGED on the five-to-fifteen-second figure: that's from moderated and unmoderated sessions of ten to fifteen participants each, so treat it as a range we observed rather than a population statistic. It was enough to tell us discoverability was the bottleneck.

---

## 08 Layout for scale

**On slide**

- Layout for scale, and the finding we weren't testing for
- A handful of institutions needs something compact. A branch-heavy market needs one entry among hundreds. A layout optimised for either fails the other.
- Accordion
- [image: Variant A — accordion]
- Dedicated results page
- [image: Variant B — dedicated results page]
- Hybrid
- WINNER
- [image: Variant C — hybrid (shipped)]
- Every variant — including the one participants liked least — beat the flow already in production. The question stopped being which to ship and became how fast we could ship any of them.

**Speaker notes**

Bank selection has to work in two conditions that pull in opposite directions. A customer connecting to a handful of institutions needs something compact. A customer facing a branch-heavy market needs to find one entry among hundreds. A layout optimised for either one fails the other. We prototyped three variants and tested them against both scenarios: an accordion, a dedicated results page, and a hybrid. The hybrid won — accordion behaviour for small result sets, a dedicated page once the list grows, and a filter that surfaces branches within a parent institution. One component solving both conditions, rather than branching into two designs the customer has to choose between. But the more useful finding was the one we weren't testing for. Every variant, including the one participants liked least, beat the flow already in production. That reframed the decision entirely. The question stopped being which of the three to ship, and became how quickly we could ship any of them. The direction was validated independently of the layout details — a stronger result than picking a winner, and it changed what the team did the following week.

---

## 09 Language

**On slide**

- Language can't be inferred from country
- Country and language used to be passed by the customer at integration time. The accountholder often wasn't the person setting access up — and the customer couldn't predict their language anyway. We moved it in-flow.
- The fix was to take a decision away from our customer, not to give them more control over it. Configurability isn't automatically the answer.
- IN-FLOW LANGUAGE SELECTOR
- [image: In-flow language selector]

**Speaker notes**

A small finding, but it's the clearest example of why researching the end user mattered rather than just the customer. Our original approach had customers pass country and language via the API at integration time. Research found that language couldn't be inferred from country — the person setting up account access sometimes lived in, or spoke the language of, a different country than the actual accountholder. And the API approach still assumed our customer could predict their end user's language in advance, which they often couldn't. We moved to an in-flow language selector and let the actual user choose. What I'd point out about that decision is the direction of it. The fix was to take a decision away from our customer, not to give them more control over it. Configurability isn't automatically the answer — sometimes the customer is the wrong person to be asking.

---

## 10 The QR handoff

**On slide**

- The QR handoff: where design has least leverage
- Desktop to phone to a bank app we don't control, and back to a tab the user may have lost. Handoffs are where people leave — and it's the step where our screen can help least.
- BEFORE
- [image: QR screen — before]
- AFTER — MORE GUIDANCE, CLEARER LAYOUT
- [image: QR screen — winning variant]
- ON THE EVIDENCE
- It reduced drop-off and user error. I don't have a validated figure for the size of it, and I'd rather say that than give you a number I can't stand behind. One of hundreds of variants between 2023 and 2026.

**Speaker notes**

The QR screen handles what we call the decoupled flow. The user starts on desktop, scans the code with their phone, and completes authentication in their bank's mobile app. The journey begins in one place and finishes in another. That makes it one of the two points in the flow carrying the most drop-off risk, because handoffs are where people leave. The user has to pick up a second device, do something in an app we don't control, and return to a browser tab they may have already lost. It's also the step where our screen can give the least help, because for most of it the user isn't looking at our screen at all. We tested copy and layout variants against live traffic. The version that won did two things: it gave the user more guidance through the step, and used a clearer layout to carry it. Neither is a redesign. Both came out of running variants against real users rather than arguing about it internally. It reduced both drop-off and user error on that step. I want to be straight about the evidence there. I don't have a validated figure for the size of that improvement, and I'd rather tell you that than give you a number I can't stand behind. It was one of hundreds of variants the programme worked through between 2023 and 2026 — because when the screens are this constrained and the compliance requirements this fixed, there is no single redesign available. Only a long run of small, evidenced changes.

---

## 11 Accessibility

**On slide**

- The study that cost us a release date
- STUDY ONE — COMMISSIONED AUDIT
- Colour contrast failures
- In multiple places across the flow.
- Screen readers announcing raw SVG
- Alt text was never implemented properly — in practice a screen reader user could not navigate the flow at all.
- The product now meets WCAG AA.
- Caring about accessibility is easy to say. The evidence is what you were willing to give up — here, a date.
- STUDY TWO — PREFERENCE, 21 TESTERS, GERMANY
- 62%
- preferred the new flow overall
- 78%
- among testers with disabilities
- Unmoderated, new flow against the live demo. The users with the most at stake preferred it by the widest margin.
- 21 is small — treat 62% as directional. What it establishes is that the new flow wasn't worse for the group most likely to be hurt by a change.

**Speaker notes**

Two accessibility studies, doing different jobs. The first was a commissioned audit, and it found two things we'd got wrong. Colour contrast failures in multiple places. And screen readers reading raw SVG markup aloud, because alternative text hadn't been implemented properly — which in practice meant a screen reader user could not navigate the flow at all. We postponed a release to fix both, rather than shipping and correcting afterwards. I wrote the findings up as a document for the frontend team to work from. The product now meets WCAG AA. I bring that one up because we care about accessibility is easy to say, and the only real evidence for it is what you were willing to give up. In this case it was a date. The second study was separate: an unmoderated study of 21 testers in Germany, including participants with disabilities, testing the new flow against the live demo. 62% preferred the new flow overall, and that rose to 78% among testers with disabilities. That last number is the one I care about most. The users with the most at stake preferred it by the widest margin. IF CHALLENGED on a sample of 21: small, and I'd treat the 62% as directional rather than precise. What it does establish is that the new flow wasn't worse for the group most likely to be hurt by a change, which was the question we commissioned it to answer.

---

## 12 What changed

**On slide**

- What changed
- WHAT I'LL CLAIM
- 6 months → 2 weeks
- customer integration effort, sometimes 12 months+ before
- 200 companies
- including Google, Adyen, Intuit, Ant Financial, Revolut
- WCAG AA
- plus a clear preference for the new flow, strongest among users who needed it most
- Hundreds of sessions
- end users 2023—2026, continuous customer interviews since 2020
- WHAT I WON'T
- 20% → 65—75%
- end-to-end conversion, 2023 beta to today, varying by use case and market — and not my result
- It moved over three years across several angles at once. A meaningful share of end-to-end conversion in open banking is infrastructure: bank API reliability, redirect success, and coverage, which was expanding the whole time.
- Where design was one of the levers is bank discoverability: display naming, the alias gaps we found by watching people type, and the grouping and shortcut work. That step we could measure, and it moved.
- What I can't give you is a clean percentage for design's share. I'd distrust anyone who could.

**Speaker notes**

Let me separate what I'll claim from what I won't. Customer integration effort went from around six months, sometimes over a year for complex cases, to two weeks. Hosted Pages is used by 200 companies, including Google, Adyen, Intuit, Ant Financial and Revolut. The product now meets WCAG AA, and the accessibility study showed a clear preference for the new flow — strongest among the users who needed it most. The evidence base behind all of that is hundreds of end-user usability sessions between 2023 and 2026, plus a continuous interview cadence running since 2020. On conversion. End to end, Hosted Pages went from around 20% at the 2023 beta to roughly 65 to 75% today, varying by use case and market. I'm not going to present that as my result. It moved over three years across several angles at once, and a meaningful share of end-to-end conversion in open banking is infrastructure — bank API reliability, redirect success, and coverage, which was expanding throughout that period. What I can tell you is where design was one of the levers, and bank discoverability is the clearest case. Three things there were ours: the naming convention change, the alias gaps we found by watching people type, and the grouping and shortcut work on the selection screen. Those were aimed at a step we could measure, and they moved it. What I can't give you is a clean percentage for design's share of that 65 to 75%. I'd distrust anyone who could.

---

## 13 Reflection

**On slide**

- If I were starting Hosted Pages again, I'd build flexibility into the licensing model from day one.
- The original call wasn't wrong given what we knew — a rigid flow kept the compliance surface small and got us to market fast. The configurator is the retrofit. It works, and it cost more than it would have.

**Speaker notes**

Hosted Pages was originally built for customers using Yapily's own licence, so the flow was fairly rigid by design. At the time that felt like the right trade-off — it kept the compliance surface small and got us to market fast. It was only once direct customers started onboarding and asking for more flexibility in their own consent experience that the limitation became clear. If I were starting the product again, I'd build more flexibility into the licensing model from day one. Not because the original call was wrong given what we knew then, but because I'd now design for that need earlier rather than retrofitting it later. That's the honest version. The configurator we shipped is the retrofit, and it works — but it cost more than it would have if the flexibility had been there from the start.

---

## 14 What the Console is

**On slide**

- What the Console is
- Where customers sign up, manage applications and configure their integration. Becoming a customer used to take six months to a year.
- I'm telling you this one because most of the design work wasn't design.
- THE CONSOLE AS IT WAS
- [image: Console — applications list, as it was]
- APPLICATION CONFIGURATION
- [image: Console — application detail, as it was]

**Speaker notes**

Second story, much shorter, and a different kind of problem. The Console is where Yapily customers sign up, manage applications, and configure their integration with the platform. Becoming a customer used to take six months to a year. This is the work to make most of that self-served. I'm telling you this one because most of the design work wasn't design.

---

## 15 How it got that way

**On slide**

- How it got that way
- 5
- customers, 2020
- 200
- customers, 2024
- The same tool, doing broadly the same job.
- Not a design failure. Several team reshapes and technology migrations, and each time the Console was what got deprioritised — nobody's headline product, and it kept more or less working.
- Every gap between what it did and what customers needed got absorbed by a person.
- A CSM exporting a report by hand.
- A support engineer registering a sandbox bank.
- A PM enabling a product flag.
- None of it looked like a design problem. It looked like we needed more people.

**Speaker notes**

The Console began as a very simple tool with one job: let a customer create an application and get access to open banking connectivity. In 2020 Yapily had five customers, Intuit among them. For a company that size, that was the right scope. What happened next wasn't a design failure. The company went through several team reshapes and technology migrations, and each time the Console was what got deprioritised. It was nobody's headline product and it kept more or less working, so it kept being left alone while everything around it changed — new products, new customer types, new scale. So a tool built for five customers was still doing broadly the same job when there were two hundred. And every gap between what it did and what customers needed got absorbed by a person. A CSM exporting a report by hand. A support engineer registering a sandbox bank. A PM enabling a product flag. None of that looked like a design problem. It looked like we needed more people. By 2024, when I took it on, the Console had stopped being a weak part of the product and become the bottleneck the rest of the company was routing around.

---

## 16 The first task wasn't design

**On slide**

- The first task wasn't design
- The Console needs work had been said before, by people more senior than me, and it hadn't moved anything. So the job was making the case with evidence.
- INSTRUMENT ONE
- Customer interviews
- To establish what people were actually blocked on, rather than what we assumed.
- INSTRUMENT TWO
- A cross-function workshop
- VPs, PMs, engineering, support, design, customer success — one shared account of the problem instead of five departmental ones.
- INSTRUMENT THREE
- A two-day hackathon
- Engineering, PMs, design and implementation, role-playing an outside consultancy using only what a real customer can access.
- It's easy to disagree with a research finding. It's much harder to disagree with two days your own team just spent failing to onboard.

**Speaker notes**

The Console needs work had been said before, by people more senior than me, and it hadn't moved anything. So the first task wasn't design. It was making the case that a deprioritised internal tool was one of the more expensive things in the business — and making it with evidence rather than opinion. I ran three things, and each did a different job. Customer interviews, to establish what people were actually blocked on rather than what we assumed they were. A workshop with VPs, PMs, engineering, support, design and customer success — to get to one shared account of the problem instead of five departmental versions of it. And a two-day hackathon with engineering, PMs, design and the implementation team, where we role-played as an outside consultancy using only what a real customer can access. Because it's easy to disagree with a research finding, and much harder to disagree with two days your own team just spent failing to onboard.

---

## 17 What two days found

**On slide**

- What two days as an outsider found
- 403
- Hosted Pages wasn't enabled by default. Fixing it needed a PM — a two-day wait, inside a two-day hackathon.
- ⅓
- Sandbox banks had to be registered manually, and roughly a third of the pre-configured ones didn't work.
- 3 IDs
- Returned by the API, with no way to tell which one was the Application User ID.
- CORS
- An undocumented issue that forced customers to build their own backend proxy.
- None of this was new to the customers experiencing it. What was new was that our own engineers and PMs had now experienced it.

**Speaker notes**

In two days, working only with what a customer gets: A 403 error, because Hosted Pages wasn't enabled by default. Fixing it needed a PM, and that was a two-day wait — inside a two-day hackathon. Sandbox banks that had to be registered manually, and roughly a third of the pre-configured ones didn't work. Three IDs returned by the API, and no way to tell which one was the Application User ID. And an undocumented CORS issue that forced customers to build their own backend proxy. None of this was new information to the customers experiencing it. What was new was that our own engineers and PMs had now experienced it.

---

## 18 The stakeholder who said no

**On slide**

- The stakeholder who said no, and why she was right to
- THE CONCRETE BET
- Regional integration launches
- The growth engine. What customers ask for in sales conversations.
- VS
- THE VAGUER ONE
- Console work
- Capacity away from growth, for a cost nobody had yet made visible.
- She wasn't defending the status quo. With the case as it stood, I'd probably have said the same. What changed it was the workshop — once five functions described the same journey, the cost stopped being a design opinion and became a visible amount of several teams' time.
- Earlier attempts failed not because the problem was unclear, but because the case had only been made by design, to product. My job was to build the room, not to win the argument.

**Speaker notes**

The main resistance came from our VP of Platform, and her objection was a good one. Our priority was launching integrations in more regions. That's the growth engine, it's what customers ask for in sales conversations, and Console work would take capacity away from it. She wasn't defending the status quo — she was defending a concrete bet against a vaguer one. If I'd been in her position with the case as it stood, I'd probably have said the same. What changed it was the workshop. Not because I argued better, but because once sales, support, customer success and engineering were all in one room describing the same journey, the cost stopped being a design opinion and became a visible amount of several teams' time. She was convinced it needed tackling, and the Console was prioritised. The thing I'd draw out of that: the reason earlier attempts had failed wasn't that the problem was unclear. It was that the case had only ever been made by design, to product. It needed to be made by five functions at once, and my job was to build the room rather than to win the argument.

---

## 19 Mapping it

**On slide**

- Mapping it before changing it
- Anonymous visitor through to renewal. Every team, every tool, and what mattered to the person at each stage — deliberately not a design artifact, because no single team could see the whole of it.
- JOURNEY MAP — BEFORE, COMMERCIAL DETAIL REMOVED
- [image: Journey map, before — manual steps, automated steps, dead ends]
- Manual work was structural
- Nearly every stage past the contact form. The delay was the path depending on people being available.
- Users were invisible to us
- We couldn't identify people across website, docs, dashboard and support — so people evaluating us hit limits they didn't know existed.
- Two customer types, one path
- Direct customers and agents differ materially. One agent simply didn't want to see our logo in their experience.

**Speaker notes**

Then I mapped the whole journey end to end. Every stage from anonymous visitor through to renewal and expansion, every team that touched it, every tool it ran on, and what mattered to the person at each stage — split three ways, because a buyer evaluating providers, a signed-but-not-live customer, and a customer in production don't want the same things. It was deliberately not a design artifact. It covered sales, customer success, technical services, support and operations, because the experience customers were actually having was assembled from all of them, and no single team could see the whole of it. Three things came out of it. The manual work was structural, not incidental. Nearly every stage past the contact form was manual, for our staff and for customers alike. The delay wasn't one broken step — it was that the whole path depended on people being available. Users and buyers were invisible to us. Before someone became a customer we couldn't identify them across the website, docs, dashboard or support, so we couldn't tailor anything. People evaluating us hit limits they didn't know existed. Two customer types were served by one path. Direct customers and agents have materially different needs. One agent's note in the research was simply that they didn't want to see our logo in their experience.

---

## 20 The bet

**On slide**

- The bet: split the path
- ENTERPRISE — ASSISTED
- Keep the guided journey
- It's what they want, and it's worth doing well.
- EVERYONE ELSE — ~80% OF THE BASE, ON CS'S FIGURES
- Self-serve, no calendars
- Find the site, get into the Console, onboard and implement on the product and the docs. Weeks to a few months, against six months to a year.
- Identify early
- Nothing can be tailored to a person you can't recognise.
- Remove scheduling
- Most of the delay was calendars, not complexity.
- Make limits visible
- People hitting an invisible ceiling assume the product can't do it.
- Serve teams
- Engineers, PMs, designers and finance need different things from one account.
- Give customers their data
- Anything a CSM exports by hand is a queue with a person in it.
- Highest-value single change: compliance moved from a scheduled in-person session to a queue. It was the most common reason a go-live slipped — and it slipped for scheduling reasons, not substantive ones.

**Speaker notes**

Split the path. Enterprise customers keep the assisted journey, because that's what they want and it's worth doing well. Everyone else — around 80% of the customer base, on customer success's figures — gets a self-serve one: find the site, get access to the Console, onboard and implement using the product and the documentation, without waiting on anyone's calendar. Target is weeks to a few months, against six months to a year. Five principles underneath it. Identify early, because nothing can be tailored to a person you can't recognise. Remove scheduling as a dependency, because most of the delay was calendars, not complexity. Make limits visible, because people hitting an invisible ceiling assume the product can't do it. Serve teams, not individuals — engineers, PMs, designers and finance people need different things from the same account. And give customers their own data, because anything a CSM exports by hand is a queue with a person in it. If I had to pick the single highest-value change: compliance moved from a scheduled in-person session to a queue. That step was the most common reason a go-live slipped, and it slipped for scheduling reasons rather than substantive ones.

---

## 21 Where it stands

**On slide**

- Where it stands, and what shipped
- The Console is in beta and it's too early for adoption metrics. I'd rather say that than dress up a number.
- CONSOLE BETA
- [image: Console beta — new dashboard]
- SHIPPED IN FULL — HOSTED PAGES CONFIGURATOR
- [image: Hosted Pages configurator — colours, copy, layout, states]
- Before it, a theming change was a support ticket and an engineer's time. Every time — for work that was never engineering work. Now it's zero-touch, and those requests stopped coming in.
- The cost wasn't a bad screen. The cost was people.

**Speaker notes**

Honest status. The Console is in beta, and it's too early for adoption metrics. I'd rather tell you that than dress up a number. One piece has shipped in full, and it's the one I'd point at. The Hosted Pages configurator gives customers granular self-serve control over every screen in the flow — colours, copy, layout, states. Before it, a customer who wanted a theming change raised a support ticket, and an engineer implemented it. Every time. So each request consumed a support person and an engineer, for work that was never engineering work in the first place. Now it's zero-touch, and those requests stopped coming in. That's the shape of the whole Console argument in one feature. The cost wasn't a bad screen. The cost was people. On credit: the journey map and the information architecture are mine. The Console itself was built with product and engineering, and the self-serve initiatives were scoped jointly off the back of the mapping and the hackathon. One of my two designers worked on it as the executing designer.

---

## 22 Three design systems

**On slide**

- Three design systems, and the governance underneath
- CUSTARD
- White-label foundation
- Under Hosted Pages. Minimal by design — customers own the surface.
- MARK
- Marketing
- Restyled annually, with room for more expressive work.
- YAPILY UI
- Twenty internal tools
- Dense by nature — analytics pages where information density is the point.
- [image: images/yapily-ui-typography-tokens.webp — Yapily UI documentation — typography tokens]
- The gate was evidence, not seniority
- Anyone could propose a component — but it had to be tested for usability and accessibility before review, not after. Teams debated evidence rather than taste.
- Tokens governed tighter than components
- A token change lands on all three at once — it needed both the frontend lead and me.
- What we never did
- Versioning and deprecation. Now: semantic versioning, a named migration path, a human changelog.
- Handed to a designer on my team once established. Build it, prove it, give it away.

**Speaker notes**

One thing I've skipped that's relevant to how I work at this level. I built three design systems at Yapily rather than one, deliberately. Custard, the white-label foundation under Hosted Pages — minimal by design, because when customers control the surface, the system's job is to expose as little as possible while still reading as their product. Mark, for the marketing site, restyled annually with more expressive work. And Yapily UI for the twenty internal tools staff use, dense by nature because it's analytics and data-heavy pages where information density is the point. Three Figma libraries on one shared token library, mirrored in code, documented in Storybook. A single system would have forced three very different surfaces into one set of compromises, and whichever surface was least like the others would have come off worst. Shared tokens were governed more tightly than components, because a token change lands on all three at once — those needed approval from both the frontend lead and me, and in practice only happened during rebrand work. The governance is the part I'd point at, and one ordering decision in particular. The gate was evidence, not seniority. Anyone could propose a component, but it had to be tested for usability and accessibility before it was eligible for review, not after. That changed what review meetings were about — teams debated evidence rather than taste. We also brought frontend in at proposal stage rather than at handoff, which surfaced implementation cost while the design was still cheap to change. And I handed each system to a designer on my team once it was established. That's how I'd want to work anywhere — build it, prove it, give it away. What we never did: formalise versioning or deprecation. What I'd put in place now is semantic versioning, deprecation rather than deletion with the migration path named, and a changelog written for humans.

---

## 23 The through-line

**On slide**

- I build the evidence before I argue for the design.
- On Hosted Pages the work I'm proudest of was the instrumentation and the experimentation pipeline — without them there was no way to improve a product whose shape I didn't control.
- On the Console it was getting five functions into one room — without that the work wouldn't have been funded at all. It's slower to start, and it's why I can tell you which of my claims to trust.

**Speaker notes**

If there's one thing I'd want you to take from both of those stories, it's this. In both cases the work I'm proudest of wasn't the design. On Hosted Pages it was building the instrumentation and the experimentation pipeline, because without them there was no way to improve a product whose shape I didn't control. On the Console it was getting five functions into one room, because without that the work wouldn't have been funded at all. I build the evidence before I argue for the design. It's slower to start, and it's the reason I can tell you which of my claims to trust and which not to.

---

## 24 What I'm looking for

**On slide**

- What I'm looking for next
- A hard problem in a platform or regulated space where the constraints are new to me, and a team I can learn something from. Six years in, I know open banking from every angle I can find — and being at the edge of what I understand is the thing that makes me want to get to work.
- aleuxuk@gmail.com
- linkedin.com/in/velazquezalejandro
- CV (PDF)
- Happy to take questions.

**Speaker notes**

One last thing, on why I'm in the room. When I joined Yapily there were five customers. The product I've owned since launch is now used by two hundred, including Google, Adyen and Intuit. Taking something from founding-designer scale to that is the work I'm proudest of, and it's also the work that's finished. Six years in, I've looked at open banking from every angle I can find — consent, developer experience, onboarding, regulation, the systems underneath all of it. I know this domain now. What I want next is a hard problem in a platform or regulated space where the constraints are new to me, and a team I can learn something from. Being at the edge of what I understand is the thing that makes me want to get to work. Happy to take questions. DELIVERY NOTE: completion and appetite, not fatigue. Do not say I lost excitement.

---
