# Portfolio — full content export
Ale Velazquez portfolio. Exported 2026-07-30 (v8 — accuracy pass after interview-presentation work; research volume softened, accessibility studies clarified as distinct, GA date corrected).

Seven pages, built as Design Components in `*.dc.html`, published as self-contained HTML in `publish/`.
Visual system: Space Grotesk headings, Geist body, Geist Mono labels, gold accent #C9A86A on near-black #0C0F0E.

This file is a text-only extraction: headings, body copy, captions, labels and link text in document order.
Images, diagrams and layout are not represented.

---

# CHANGES IN v8

Apply these. Everything else in this file is unchanged from v3.

*(v8 supersedes the v4–v7 drafts. Apply only v8. v8 is identical to v6: it reverts the AI-transformation wording that v7 added to the design systems entry, back to the existing site copy.)*

**`index.html`**
- "around 1,000 usability tests" → "hundreds of end-user usability sessions"
- Console entry: "previously a support ticket" → "previously a support ticket and an engineer, per request"
- Research practice entry: "the thousand-odd consumers who tested" → "the hundreds of sessions with consumers who tested"
- Hosted Pages entry: added a sentence naming where design contributed to conversion

**`about.html`**
- Hackathon: "the team spent a week" → "two days with engineering, PMs, design and the implementation team"; "in five days" → "in two days"

**`research-practice.html`**
- Removed the "8%" figure — it is directional, not a validated result
- "put the flow in front of roughly a thousand ordinary people" → "ran hundreds of sessions with ordinary people"; stat tile "~1,000" → "Hundreds"
- Added the display-naming and search-alias findings under Matching method to decision
- Added the postponed release to the accessibility passage

**`hosted-pages.html`**
- Section heading: "forty-eight-plus versions" → "more than forty versions"
- "the 2024–2025 usability research programme" → "the 2023–2026 usability research programme"
- Leadership: decoupled the MVP-to-GA programme (ended late 2025) from the usability work (continuing through 2026)
- Replaced "hold the line on accessibility and usability standards throughout" with the postponed-release story
- Named all five branching decisions explicitly, including device
- Bank discoverability: reworded the 70% / 5–15s / 1–3s sentence so the sample is honest and the competitor figure is attributed to commissioned benchmarking; added display naming and search aliases
- Accessibility validation: added the postponed release, and made explicit that the audit and the 21-tester preference study are two separate studies doing different jobs
- Outcomes: added design's specific contribution to conversion
- Stat tiles and prose: every "~1,000 / around a thousand" usability figure → "hundreds", since the exact count could not be substantiated

**`console.html`**
- Added the platform-side senior management resistance and what changed it
- Hackathon: "the team spent the week" → "two days with engineering, PMs, design and the implementation team"
- Configurator: expanded to name the real cost — a support person and an engineer per request

**`design-systems.html`** — no changes
**`creative-archive.html`** — no changes

---

# Page: index.html
FOCUSING
Alejandro Velázquez Work About CV Contact

## Alejandro Velázquez

I'm a product designer and design lead based in the UK. I joined Yapily in 2020 as its first designer and now lead design across its open banking platform — the hosted bank-connection and consent flows, the customer console, and the design systems underneath them. I manage a team of two designers and built the company's UX research practice from scratch.
2020 — PRESENT
Yapily. Joined as the first designer and built the design function from scratch — three design systems, a UX research practice, and the governance behind both. I led strategy and design for Hosted Pages at launch and have owned the product design since; the white-label bank-connection flow is now used by 200 companies including Google, Adyen, Intuit, Ant Financial and Revolut. I designed the first versions of the Customer Console and the website, and worked with the strategy team on product direction. The work sits inside FCA guidelines, and I've supported Yapily's compliance team in preparing presentations to the regulator. I lead a team of two designers producing the brand and sales collateral behind go-to-market — ads, ebooks, tailored demos, reports and landing pages.
2012 — 2019
Lead and senior product design for consumer fintech, payments and marketplaces — Payango, Payfriendz, Docomo Digital, Caremoni, HeadBox. Payfriendz reached 150,000 users and a top-three position in the App Store finance category. Remote from the US at first; moved to London in January 2014.
2005 — 2011
Argentina. Started freelance, then at small agencies, before joining Globant in 2008 — enterprise product design for clients including Google, JP Morgan, PwC, Coca-Cola and Telefónica, alongside interaction and motion design work for clients across Latin America and Europe.
Lead Product Designer & Design Manager — Founding Designer, Yapily
aleuxuk@gmail.com · Download CV (PDF) · LinkedIn

### Selected work

01 Yapily Hosted Pages
The white-label consent and bank-connection flow behind Yapily's platform. Customers previously built their own consent UI against 1,500+ banks across 10+ countries, each with its own flow and certification requirements — six months to over a year of integration work. Hosted Pages brought that to two weeks. Conversion went from around 20% in the 2023 beta to roughly 65–75% end to end today — moved incrementally over three years by UX, frontend and backend together. Design's contribution was concentrated in bank discoverability: display names matched to what people actually call their bank, search alias gaps found in testing, and the grouping and shortcut redesign of bank selection.
I led strategy and design at launch and have owned the product since, including a sustained 2023–2026 research programme of hundreds of end-user usability sessions, the prototype and accessibility studies that followed, and the resulting roadmap.
Full case study →
02 Yapily Console
Customers couldn't onboard themselves: getting scopes took days and several Yapily colleagues, and customisation required staff to make changes on the customer's behalf. I led a hackathon — the team role-playing as an outside consultancy, using only what a real customer can access — which surfaced the specific blockers, then led the information architecture of the redesign.
Shipped and self-serve, though still early. The Hosted Pages configurator is live, giving customers granular control over every screen in the flow — previously a support ticket and an engineer, per request.
03 Yapily UI, Custard and Mark
Three design systems built from scratch for three different consumers: Yapily UI (internally "Pipes") for the 20 internal tools staff use across the business; Custard, the white-label foundation underneath the Hosted Pages configurator; and Mark for the marketing site, with Product Marketing.
Design tokens, atoms and molecules, full variant sets, documented in Storybook and Figma. I built the approval process governing how components get added and changed, then handed day-to-day maintenance to a designer on my team once each system was established.
Yapily is going through an AI transformation, and we're migrating these systems into AI tooling so more people can create on-brand material without a designer in the loop. We've already built skills for branding, demos and sales slides.
04 Research practice 2020–2026
Yapily never had a dedicated researcher. I built the research practice from scratch and ran it for six years alongside the design work — a fixed cadence of customer interviews rather than project-triggered discovery, over two hundred conversations, and informal Slack channels for the observations too small to raise a ticket over.
Two audiences needed two methods: the businesses integrating with us, and the hundreds of sessions with consumers who tested the bank-connection flow between 2023 and 2026. Around that sat a bi-weekly feedback forum with Support, CS, product and engineering, a jointly prioritised board, beta programmes with 150 customers, event instrumentation built with engineering, and an in-house experimentation pipeline testing variants against production traffic.
Guerrilla sessions where the question was whether a direction was obviously wrong; commissioned panels through Testbirds and Applause where it was whether something met a standard we could be held to.
05 Yapily brand and website
Six rebrands between 2019 and 2026, working with the marketing team and two external agencies. I led the yapily.com homepage redesign — three directions explored, from a problem-first layout to a full-bleed video approach — and led design on customer case study collateral for Kolleno and Pleo.
A designer on my team led execution and rollout of the "Go Beyond" launch, which drove a 110% increase in LinkedIn engagement, 24% in brand search and share of voice, and 54% in resource downloads.
06 Open banking UX guidance
Customers operating under their own licence build their own experience rather than using ours. That makes the quality of those flows a business problem as much as a design one: a poor flow loses the connection, and the loss lands on the customer and on Yapily's numbers alike. There's no single right answer to design toward either. A one-off account verification and a recurring bulk disbursement aren't the same product moment, and a flow tuned for one is wrong for the other. So the guidance had to teach judgement rather than hand over a template.
Not just the consent screen. The guidance spanned the full set of surfaces a team building on open banking has to get right:
— End-to-end flows — how the pieces sequence, and what the user should understand at each point.
— Consent screens — seven principles, including stating the purpose data is requested for, honest security language rather than absolute claims, grouped data categories rather than raw scopes, progressive disclosure, visible access duration and revocability, and a clear way to decline.
— Consent dashboards — where people see and manage what they have already granted.
— Return experiences — what happens when the user comes back from the bank, which is where flows most often break.
— Re-consent journeys — renewing access when it expires, a recurring moment rather than a one-off.
— Checkouts — payment initiation as a commercial flow, not just a compliance step.
A lot of open banking design is about moments the designer doesn't control. The user leaves for their bank's own interface and comes back, access lapses on a schedule set by regulation, and the handoffs are where people drop out. The guidance concentrated on those seams, because that's where the design work actually is. Delivered as written documentation plus interactive demos customers could work through directly, and written for any team building an open banking flow rather than as documentation of our own product — guidance that only makes sense if you already use our UI is marketing, not guidance.
Two of the recommendations were commercially awkward: accurate security language, and a prominent way to decline. Both are the harder option — "bank-grade security, we never see your data" converts better in the short term than an accurate description, and a prominent decline route is a visible exit from the funnel. Recommending them anyway is the position the guidance had to take to be worth following.
07 demo.yapily.com
An indexed library of open banking demo journeys — mobile payment authorisation, Pay by Link with QR handoff, biometric app-to-app, in-store POS, bulk disbursement, account verification — replacing a single general-purpose demo that couldn't serve sales, pre-sales, implementation and product at once.
It isn't a mockup — it runs real end-to-end flows against both mock and live banks, and surfaces the actual API requests and responses alongside the interface. That made it two things at once — an implementation aid for customers building against the platform, who could see exactly what a call returns before writing it, and an asset in sales and RFI conversations, where showing a real flow beats describing one.
I wrote the vision and problem framing, led design, and maintain the library with my team.
08 HeadBox 2018–2019
Lead Product Designer through a leadership transition, with no reliable way to measure product performance. Fifteen customer interviews refocused the team on the enquiry-to-booking funnel, where only 20% of enquiries received a host proposal. We shipped the Enquiry Hub as a deliberately small experiment — London only, capped at £10k — which showed the platform connected hosts and guests well but converted poorly, and led to a pivot from marketplace to SaaS lead generation. £150,288 ARR and 117 customers within three months, four times the prior model.
09 Caremoni 2017–2018
A payment and reporting tool built with My Support Broker, a social enterprise managing personal health budgets. Payments and reconciliation were entirely manual and error-prone, and the NHS needed better reporting on how care budgets were being spent.
I interviewed every party in the chain — MSB's two operators, independent carers, care agencies, and the people receiving care — and mapped the flows. Rather than build first, I ran a concierge version to test whether those flows were right: a plain HTML front end with payments still processed by hand. That surfaced the thing I'd got wrong. I'd assumed people receiving care and their families would be low on digital confidence; most were comfortable. The real problem was time and patience for admin — chasing receipts, chasing MSB for money — which was stressful on both sides.
What was built: a dashboard for operators to allocate budget, monitor spend and report to the NHS, and an app for carers and customers to request and authorise payments, designed to take the manual work out of reconciliation and NHS returns. It reached MVP and ran as a pilot with a subset of MSB customers, and didn't go further while I was involved.
Full deck (Google Slides) →
10 Docomo Digital 2016–2018
Senior Product Designer, contracting through Su4erheroes, on a payout solution for marketplaces across Europe and Asia — a dashboard, API documentation and a mobile app, serving internal operations teams, marketplace operators, and the developers integrating the API.
Work included payment widgets for alternative payment methods and for ICO investment, a marketplace dashboard, and the NOMO app, which let marketplace owners track daily earnings.
11 Payfriendz 2013–2016
Lead designer for a peer-to-peer payments app in the UK and Germany, combining transfers with chat. Over £5M transferred, 150,000+ users, top three in the App Store finance category. Two designers and fifteen engineers; I also built the UI component system and mentored support staff into research roles.

### Before 2011

Obama was winning his first election and I was in Argentina, coding and designing websites, landing pages and apps at Globant. Facebook had barely arrived in Latin America. The iPhone was a year old and we had two of them to share between a company of a thousand people. UX wasn't a thing. Designers working in software were decorators. Skeuomorphism was the trend, and we were collaborating between design and engineering with the only tools available — Photoshop, TortoiseSVN, and hand-written HTML, CSS and JavaScript.
Globant 2008–2011 · Argentina
Design Analyst. Enterprise digital products for clients including Google, JP Morgan, PwC, Coca-Cola and Telefónica, with distributed product and engineering teams.
Bilitee A social network for connecting designers and developers and encouraging collaboration between them.
Creative archive Selected illustration, identity and animation work behind the product practice. View the archive →

---

# Page: about.html
FOCUSING
Alejandro Velázquez Work About CV Contact

## About

I'm a product designer and design lead based in the UK. I've been at Yapily since January 2020, where I was the first designer the company hired.

### What I do

I lead design across Yapily's open banking platform: the hosted bank-connection and consent flows that customers embed in their own products, the console they use to configure and manage their integration, and the design systems underneath both.
I manage two product designers. I hire for the team and run their performance reviews.
Most of what exists in the design function here is there because I built it — the research practice, three design systems, and the approval processes that govern how they change.

### How I lead

I've managed seven designers across six years at Yapily, at different points and in different shapes of team. What I've learned is that the thing worth building isn't really a process, it's independence. Each of the three design systems went to a designer on the team once it was established, and I built the approval process so that changes don't need me in the room. It should keep working when I'm not looking at it.
With people it's the same thing in reverse — knowing when to push and when to get out of the way. I'll challenge a decision hard when it needs it, and leave someone alone when they're working something out for themselves. You need both.
I try to run things in the open. I ran a hackathon where the team spent two days role-playing as an outside consultancy — engineering, PMs, design and the implementation team, using only what a real customer can access, no internal shortcuts. It surfaced more about our onboarding experience in two days than a quarter of internal review had.

### Working outside design

Open banking is regulated, and Hosted Pages sits inside FCA guidelines. That means design decisions get made alongside compliance, rather than sent over for approval afterwards. I've supported Yapily's compliance team in preparing presentations to the regulator.
I own Yapily's relationships with its design and research vendors — two branding agencies and a usability research partner — and the design relationship with customers building on top of us. Over two years I worked with designers and product managers at Google as they built their own open banking products on Yapily.

### Still hands-on

I design, and I code — HTML, CSS and JavaScript. Several of the demo and reference resources on Yapily's site I built myself. It's not a big part of the job, but being able to build the thing rather than describe it has settled more arguments than any deck I've made.

### Before Yapily

I started my career in Argentina in 2005 and worked there until 2011 — including three years at Globant designing enterprise products for Google, JP Morgan, PwC, Coca-Cola and Telefónica. I spent 2012 and 2013 in the US working remotely, and moved to London in January 2014. I'm a British citizen.
Since then I've worked on peer-to-peer payments across the UK and Germany, marketplace payouts across Europe and Asia, personal health budget payments with the NHS, and a venue-booking marketplace in London.
aleuxuk@gmail.com · Download CV (PDF) · LinkedIn

---

# Page: research-practice.html
FOCUSING
Alejandro Velázquez Work About CV Contact
04 — CASE STUDY

## Research practice at Yapily

Yapily never had a dedicated researcher, so designers did the research alongside the design work. This is the practice I built inside that constraint, and ran for six years.
2020–2026 · FOUNDING DESIGNER → DESIGN LEAD

### The constraint

With no researcher to hand a question to, research had to be cheap to run, continuous rather than project-gated, and easy for people outside design to follow. It also had to lean on the people already talking to customers every day, instead of treating research as something only design did. That constraint shaped everything below.

### How it worked

Continuous discovery I ran my first customer conversation in 2020 and my most recent one last week. Between those, at least three customer interviews a month, sustained — over two hundred conversations across six years. Early sessions were broad: what are you trying to do, where does it hurt, what's missing. As the products matured they narrowed to specific surfaces — Console, the documentation, Hosted Pages — and the purpose shifted from finding the problem to validating a direction. Alongside the scheduled interviews I ran informal Slack channels with customers — a direct line for the observations that never make it into a formal session because they're too small to raise a ticket over. A fixed cadence rather than a project-triggered one. If research is booked as a standing commitment you never start a discovery phase from zero, and you notice a shift in what customers are saying before it turns into a roadmap problem.
Two audiences Yapily's customers are businesses. Hosted Pages' users are consumers connecting their bank accounts. Research had to reach both, and the two needed different methods. The interview cadence covered the first group — the PMs, developers and operations people integrating with us, who could say what was hard to build against and what their own customers complained about, but who were not themselves using the flow. For the second, the 2023–2026 usability programme ran hundreds of sessions with ordinary people going through the act of connecting a bank account. In a B2B2C product it's easy to only research the buyer, because the buyer is who you're talking to every week. But they can tell you about their integration problems — they can't tell you why someone gave up at the QR screen.
Feedback loops with the people closest to customers Support and Customer Success hear things design never will. The loop existed to get that into the product: a bi-weekly forum with PMs, CSMs, design and engineering, focused on trending feedback rather than individual tickets; a shared board where that feedback was consolidated and prioritised, so the same issue raised by four customers surfaced as one item with weight behind it; and beta programmes — around 150 customers took part between 2023 and 2026, giving us a population to test with that already had context and stake. I set the loop up. Prioritisation was a joint call with PMs and engineering, and that's the part that made it hold. A board design owns on its own is really just a wishlist. When three functions prioritise it together, it becomes a queue people act on. Support and CSM as a research channel rather than an escalation channel. The bi-weekly cadence mattered as much as the board — a recurring meeting turns feedback into a habit instead of a fire drill.
Building shared understanding Research that only designers understand doesn't change anything. Two formats did most of that work: problem-framing workshops with PMs, engineering and wider teams, to get everyone to the same understanding of the customer problem before anyone proposed a solution; and prioritisation sessions run off the back of them, so what got built was argued from the same evidence base. Card sorting on the documentation sat slightly apart. We used it to restructure the information architecture of the docs, and tested findability and task flows both before and after the change. The before-and-after measurement. Most IA work ships on the strength of the argument that made it. Testing the same tasks against the old and new structure is what turns a redesign into a result.
Matching method to decision Guerrilla sessions for early iterations — fast, cheap, run on whoever was available, used to kill bad directions before they were expensive. Commissioned studies for the decisions that warranted them: usability, accessibility and competitor benchmarking on both Hosted Pages and Console through Testbirds and Applause. Individual studies typically ran at ten to fifteen participants, moderated and unmoderated — the right size for finding usability problems and the wrong size for producing a percentage, which is why the production experiments existed alongside them. Matching method cost to decision cost. Guerrilla testing where the question is "is this direction obviously wrong"; commissioned panels where the question is "does this meet a standard we can be held to."
Not every finding was a design finding Two of the more useful results from the sessions weren't screen changes. We had been listing banks under the names institutions register under, and users don't recognise those — they know the name on their card and in their app, so we matched the display names to what people actually call their bank. And session after session we watched people type a name and get nothing back: aliases, informal names, old brand names our index didn't hold. That went to engineering as a change to how search resolved queries rather than as a change to a screen. Both observations only existed because we were sitting watching real people type.
Accessibility On accessibility the standard was WCAG AA, and two studies did different jobs. A commissioned audit found contrast failures across multiple screens, and screen readers reading raw SVG markup aloud because alternative text hadn't been implemented properly — a screen reader user couldn't navigate the flow at all. We postponed a release to fix both rather than shipping and correcting afterwards. I wrote the findings up as a document for the frontend team to work from, and the system now meets AA. A separate unmoderated study of 21 testers in Germany, including participants with disabilities, tested the redesigned flow against the live demo: 62% preferred the new flow, rising to 78% among testers with disabilities.
Instrumentation Working with engineering and product, we mapped the events needed to measure customer journeys accurately — deciding what to track, and where, so journey performance was measurable rather than inferred. This is the unglamorous half. Without it there's no funnel, no baseline and no experiment, and event schemas designed after the fact are always worse than ones designed alongside the flow.
Experimentation With PMs I defined the testing pipeline; with engineering we built it in-house, so features could be tested against real traffic in production rather than in a prototype. We ran results sessions to communicate outcomes to the wider team. On Hosted Pages the pipeline tested copy and layout variants on the two screens carrying the most drop-off risk — bank selection and the QR code page. On bank selection the winning variant improved conversion; the QR screen's rewrite is covered in the Hosted Pages case study. Between 2023 and 2026 the programme worked through hundreds of design variants across bank selection, the QR code handoff and embedded logins — layout, copy, iconography and in-flow guidance. Sustained testing at that volume is what makes a flow this constrained improvable at all. There's no single redesign available when the screens are this small and the compliance requirements this fixed — only a long run of small, evidenced changes. The results meeting. An experimentation pipeline that only its operators read is a reporting tool. Socialising results across the team is what makes the next set of design arguments start from evidence rather than opinion.
The arc that matters Hosted Pages converted at around 20% in the 2023 beta. End to end today it runs at roughly 65–75%, varying by use case, country and other dimensions. That gain was made incrementally, over three years, by UX, frontend and backend working the same problem from different sides — not by one redesign. In open banking a meaningful share of end-to-end conversion is infrastructure — bank API reliability, redirect success, coverage, which was expanding throughout. Design was one of the three disciplines that moved it, and the experiments above are part of how. 200+
customer conversations, 2020–2026
Hundreds
end-user usability sessions, 2023–2026
150
customers in the 2023–2026 beta programmes — a subset of the 200 using Hosted Pages
20% → 65–75%
Hosted Pages conversion, 2023 to today — UX, frontend and backend together

### What it added up to

Qualitative work told us what customers were trying to do and where it broke. Instrumentation told us how often, and where in the journey. Experimentation told us whether the fix worked. Each answered a question the others couldn't, and the loop ran continuously rather than being spun up per project.
All of it built and run by designers, with no dedicated research function.
← Back to work · aleuxuk@gmail.com · LinkedIn

---

# Page: hosted-pages.html
FOCUSING
Alejandro Velázquez Work About CV Contact
01 — CASE STUDY

## Yapily Hosted Pages

Yapily provides open banking infrastructure, connecting businesses to thousands of banks across the UK and Europe. Hosted Pages is Yapily's white-label, pre-built consent and connection flow — letting customers launch payment and data-access journeys without building every bank-specific screen themselves.

### Problem

When I joined Yapily in 2020, one of the first things I did was talk to our customers. A pattern emerged fast. The API offered almost no abstraction — everything was raw, and integrating was slow and difficult. With 1,500+ banks across 10+ countries — each with its own consent flow, data quirks and certification requirements — building and maintaining a consent UI meant a full custom integration, sometimes six months to over a year. For some companies that was just more work than they could take on. Around 80% of our early customers were SMEs, so integration speed wasn't a convenience; it decided whether they could adopt at all.
Working with the PM, we started with the cheaper fix: better guidance and documentation. It helped, but it didn't change the underlying problem — customers were still building bank plumbing instead of their own product. That's when we started talking about widgets and an embeddable checkout as a way to remove the integration work rather than document it.

### My responsibility

I led the strategy and design end to end at launch, within FCA guidelines, and have continued to own the product's evolution since — the 2023–2026 usability research programme, the prototype testing that followed, the June 2026 cross-functional workshop, and the resulting improvement roadmap. I also lead my team's work on this and related products from idea through to production. When a commissioned accessibility study found contrast failures and screen readers announcing raw SVG markup — meaning a screen reader user couldn't navigate the flow — we postponed a release to fix both rather than ship and correct afterwards.

### Constraints

The banks themselves couldn't be standardised — each kept its own legacy consent flow and edge cases, outside Yapily's control. Hosted Pages is FCA-regulated, so the flow had to meet open banking compliance guidelines throughout, not just at launch. It had to serve two different licensing models — customers under Yapily's licence needing a fixed, compliant flow, and customers with their own direct licence wanting more flexibility to build their own surrounding experience — support multiple countries and languages, and work across Payments and Data without diverging into separate flows per product.

### One flow, more than forty versions of itself

Hosted Pages looks like four screens, but it isn't.
Five decisions branch before the user sees anything, and each one multiplies the ones after it. Two of the five are set by the customer's integration rather than by us — the licence they hold, and whether they passed an institution ID in the API call. The other three follow from the market, the device and the product: region and country across ten-plus markets, mobile or desktop, and payments, data or cVRP.
The grid isn't rectangular, which is the harder problem. cVRP exists only in the UK, so the market dimension doesn't multiply it. Hiding the consent sheet is available to customers on their own licence and to nobody else. A preselected institution on a direct licence skips every screen we make and goes straight to the bank. So the matrix has holes in it, and the holes aren't symmetrical — you can't write a rule that covers every cell, because some cells don't exist and others exist only under one parent.
Then authentication branches again, and this is where the flow stops being ours at all.
Four models. A decoupled QR handoff from desktop to phone. A browser redirect. An embedded login where credentials are entered in our page. And, in Lithuania, the Netherlands and Sweden, no screen from us at all — the flow hands straight off. Which of the four a given user gets is decided by their bank and their market, not by us and not by our customer.
The redirect path adds a further wrinkle: EU payments require additional information, and whether we show a screen to collect it depends on whether the customer included it in their API call. Same product, same market, same bank, different number of screens — determined by how carefully the integration was built. That's one of the clearest arguments for why the documentation and the UX guidance were product work rather than support work: a customer who read them gave their users a shorter journey.

### What this meant for how we worked

Three things follow from the shape above, and they explain most of the decisions in the rest of this case study.
Prototype testing could only take us so far You can't usefully prototype a flow whose shape is chosen at runtime by someone else's integration and someone else's bank. It's why the experimentation pipeline had to run against production traffic, and why the research programme reached hundreds of real people connecting real accounts rather than a panel working through a mock-up.
Improvement had to be incremental There was never a redesign available that fixed the whole surface, because there was never a whole surface — only a sparse matrix of paths, each of which had to be measured and improved on its own terms. Hundreds of variants across bank selection, the QR handoff and embedded logins, between 2023 and 2026.
Some of our screens were optional Both the consent sheet and the QR screen can be switched off by customers on their own licence. Designing screens a paying customer is explicitly allowed to delete changes what the screen has to do — it has to earn its place in their flow, not just in ours.

### Decisions

Bank discoverability Across the 2023–2026 usability sessions, search was consistently the primary way users found their bank rather than browsing, taking 5–15 seconds. Commissioned competitor benchmarking put the equivalent at 1–3 seconds, using brand grouping and a most-popular shortcut. Three changes came out of it, and only one was a layout change. We redesigned bank selection as a bottom sheet, grouped bank branches under one parent brand (critical in markets like Germany, where Sparkasse and Volksbank sit above thousands of sub-branches), and added a popular-banks shortcut. We changed the naming convention: we had been listing banks under the names institutions register under, and users recognise the name on their card and in their app instead, so we matched the display names to that. And we found gaps in our own search index — session after session, people typed aliases, informal names and old brand names that returned nothing. That went to engineering as a change to how search resolved queries rather than as a change to a screen.
Layout for scale Bank selection has to work in two conditions that pull in opposite directions. A customer connecting to a handful of institutions needs something compact. A customer facing a branch-heavy market needs to find one entry among hundreds. One layout optimised for either case fails the other. We prototyped three variants and tested them against both scenarios: an accordion, a dedicated results page, and a hybrid. The hybrid won — accordion behaviour for small result sets, a dedicated page once the list grows, and a filter that surfaces branches within a parent institution. It solves the two conditions with one component rather than branching into two designs the customer has to choose between. The more useful finding was the one we weren't testing for. Every variant, including the one participants liked least, beat the flow already in production. That reframed the decision: the question stopped being which of the three to ship and became how quickly we could ship any of them. The direction was validated independently of the layout details, which is a stronger result than picking a winner.
Language assumptions Research found language couldn't be inferred from country. The person setting up account access sometimes lived in, or spoke the language of, a different country than the actual accountholder. The initial approach — customers passing country and language via the API at integration time — still assumed the customer could predict the end user's language in advance. We moved to an in-flow language selector and let the actual user choose. The direction of that fix is worth noting: it took a decision away from our customer rather than giving them more control over it.
Accessibility validation Two studies did different jobs. A commissioned audit found contrast failures across multiple screens, and screen readers reading raw SVG markup aloud because alternative text hadn't been implemented properly — a screen reader user couldn't navigate the flow at all. We postponed a release to fix both rather than shipping and correcting afterwards, and I documented the findings for the frontend team to work from. A separate unmoderated study of 21 testers in Germany, including participants with disabilities, tested the new flow against the live demo. 62% preferred the new flow overall, rising to 78% among testers with disabilities. 21
testers in Germany, including participants with disabilities
62%
preferred the new flow overall
78%
preferred it among testers with disabilities
The QR code screen The QR screen handles what we call the decoupled flow: the user starts on desktop, scans the code with their phone, and completes authentication in their bank's mobile app. The journey begins in one place and finishes in another. That makes it one of the two points in the flow with the most drop-off risk — handoffs are where people leave. The user has to pick up a second device, do something in an app we don't control, and return to a browser tab they may have already lost — and every step in that gap is a chance to lose them. It's also the step where the screen can give the least help, because for most of it the user isn't looking at our screen at all. We tested copy and layout variants against live traffic through the in-house experimentation pipeline. The version that won did two things: gave the user more guidance through the step, and used a clearer layout to carry it. Neither is a redesign. Both came out of running variants against real users rather than arguing about it internally. It reduced both drop-offs and user error on that step — one of hundreds of variants the programme worked through between 2023 and 2026, because when the screens are this constrained and the compliance requirements this fixed there is no single redesign available.
Outcomes Customer integration effort dropped from around six months — sometimes over a year for complex cases — to two weeks. Hosted Pages is used by 200 companies, including Google, Adyen, Intuit, Ant Financial and Revolut. Conversion went from around 20% in the 2023 beta to roughly 65–75% end to end today, varying by use case and country — a gain made incrementally over three years by UX, frontend and backend working the same problem from different sides, alongside expanding bank coverage, and not by one redesign. Design's contribution was concentrated in bank discoverability: the display naming change, the search alias gaps found in testing, and the grouping and shortcut redesign of bank selection. 2 wks
integration effort, from ~6 months
200
companies using Hosted Pages
Hundreds
usability sessions behind the redesign, 2023–2026
20 → 65–75%
conversion, 2023 beta to today — UX, frontend and backend together

### Reflection

Hosted Pages was originally built for customers using Yapily's own licence, so the flow was fairly rigid by design. At the time that felt like the right trade-off — it kept the compliance surface small and got us to market fast. It was only once direct customers started onboarding and asking for more flexibility in their own consent experience that the limitation became clear. If I were starting the product again, I'd build more flexibility into the licensing model from day one — not because the original call was wrong given what we knew then, but because I'd now design for that need earlier rather than retrofitting it later.

### Leadership

Set the research and product design direction for the programme that took Hosted Pages from MVP to general availability at the end of 2025, and for the usability, prototype and accessibility work that has continued through 2026. Led the June 2026 cross-functional workshop with frontend and design teams to scope the next roadmap. Worked with designers and product managers at Google over two years as they built their own open banking products on Yapily. Supported Yapily's compliance team in preparing presentations to the FCA.
← All work Yapily Console →

---

# Page: console.html
FOCUSING
Alejandro Velázquez Work About CV Contact
02 — CASE STUDY

## Turning a sales-led onboarding into a self-serve one

The Console is where Yapily customers sign up, manage applications, and configure their integration with the platform. Becoming a customer used to take six months to a year. This is the work to make most of that self-served.

### How it got that way

The Console began as a very simple tool with one job: let a customer create an application and get access to open banking connectivity. In 2020 Yapily had five customers, Intuit among them. For a company that size, that was the right scope.
What happened next wasn't a design failure. The company went through several team reshapes and technology migrations, and each time the Console was what got deprioritised. It was nobody's headline product, and it kept more or less working, so it kept being left alone while everything around it changed — new products, new customer types, new scale.
So a tool built for five customers was still doing broadly the same job when there were two hundred. Every gap between what it did and what customers needed got absorbed by a person — a CSM exporting a report by hand, a support engineer registering a sandbox bank, a PM enabling a product flag. None of that looked like a design problem. It just looked like we needed more people.
By 2024, when I took it on, the Console had stopped being a weak part of the product and become the bottleneck the rest of the company was routing around.

### Getting it prioritised again

The first task wasn't design. It was making the case that a deprioritised internal tool was one of the more expensive things in the business — and making it with evidence rather than opinion, because "the Console needs work" had been said before and hadn't moved anything.
So I ran three things, each doing a different job. Customer interviews, to establish what people were actually blocked on. A workshop with VPs, PMs, engineering, support, design and customer success, to get to a shared account of the problem rather than five departmental versions of it. And a hackathon, to make the friction concrete for people who had never experienced it — because it's easy to disagree with a research finding, and much harder to disagree with two days your own team just spent failing to onboard.
Two things became impossible to argue with.
Nobody could get live without us. Onboarding needed so much hand-holding that there was no path through it without several people at Yapily being personally involved. Not one blocking step — a sequence of them, each requiring a different person.
Everyone got the same journey. Google and a corner shop went through an identical process. The largest customers weren't getting the attention their complexity warranted, and the smallest were being made to sit through a sales-led onboarding they neither needed nor wanted.
Both showed up in the same place: customers told us the timeline was a problem, and some of them acted on it.
The main resistance came from senior management on the platform side, and the objection was a fair one. The priority was launching integrations in more regions — the growth engine, and what customers asked for in sales conversations. Console work would take capacity away from it. That was a concrete bet against a vaguer one.
The workshop is what changed it. Once sales, support, customer success and engineering were in one room describing the same journey, the cost stopped being a design opinion and became a visible amount of several teams' time. The Console was prioritised, and the journey mapping and self-serve direction that follow came out of that.
Earlier attempts had failed not because the problem was unclear, but because the case had only ever been made by design, to product. It needed to be made by five functions at once.

### The shape of the problem

That bottleneck had a shape. A visitor found the website, filled in a form, and was contacted by an SDR. From there: pre-sales conversations, KYC, contract, customer success onboarding, technical onboarding, go-live. Six months to a year from first contact to a customer in production, depending on the customer type, the sales threshold, and whose calendar had space.
That was fine for enterprise customers, who want to be sold to and expect hand-holding. It was badly wrong for everyone else — and everyone else is around 80% of the customer base, on customer success's figures.

### Mapping it before changing it

I mapped the whole journey end to end: every stage from anonymous visitor through to renewal and expansion, every team that touched it, every tool it ran on, and what mattered to the person at each stage — split three ways, because a buyer evaluating providers, a signed-but-not-live customer, and a customer in production don't want the same things.
It was deliberately not a design artifact. It covered sales, customer success, technical services, support and operations, because the experience customers were actually having was assembled from all of them, and no single team could see the whole of it.
Getting to production, before
Six months to a year, depending on availability, customer type and deal size.
STAGE 1
Evaluating
PATH
Organic and paid traffic
Website
Docs · Dashboard · Support · Chat — each loops back or exits
Contact form → inbound lead
Two routes end in no conversion
CHANNELS
Website · Documentation · Dashboard · Support inbox · Live chat
TEAMS
None assigned. Nobody owns this stage.
WHAT MATTERS HERE
Coverage for their specific use case · pricing · features · how to test the API · the basics of licences, compliance and limitations · how to become a customer · time to go live · what open banking can and can't do · how we compare · building trust
We can't identify a user or buyer across the website, docs, dashboard or support, so nothing is tailored to what they're trying to do. They have limited access — mock banks, sandboxes — but they don't know where the limits are, because the experience doesn't tell them.
STAGE 2
Becoming a customer
Sales funnel
KYC
Contract signed
Customer success onboarding
Video calls · email · PDF forms · scheduling links · demos
Sales · SDRs · pre-sales engineers · customer success · support · technical services · operations
What's in the package · no surprises in the contract · understanding the limitations · gathering documentation for legal review
Partial access, and no clear picture of what they're allowed to test. The stage moves at the speed of whoever has calendar space.
STAGE 3
Live
Technical onboarding
Go live — splits into direct customer or agent
Renewal, upsell, expansion
Documentation · dashboard · website · support · chat · video calls · shared Slack channels · public roadmap
Support · technical services · customer success · account managers · operations
Reliability of the service and the banks · speed · ease of use · support for the nuances of their use case · learning what's new and coming · getting help with bugs · influencing the roadmap · troubleshooting
One path serving two customer types. Agents want the experience to be theirs, not ours. Direct customers need help with registration and portal complexity. Neither is well served by the same journey.
Manual — depends on someone being available Automated or self-served Dead end — no conversion
The manual work was structural, not incidental Nearly every stage past the contact form was annotated as manual, for Yapily staff and customers alike. The delay wasn't one broken step; it was that the whole path depended on people being available.
Users and buyers were invisible to us Before someone became a customer, we couldn't identify them across the website, docs, dashboard or support — so we couldn't tailor anything to what they were trying to do. People evaluating us hit limits they didn't know existed and had no way to understand.
Two customer types were being served by one path Direct customers and agents have materially different needs — one agent's note in the research was simply that they didn't want to see our logo in their experience — and the single assisted funnel served neither of them well.

### Running it as an outsider

The map showed where the path depended on people. A hackathon showed what it actually felt like: two days with engineering, PMs, design and the implementation team, role-playing as an outside consultancy and using only what a real customer can access. It surfaced a 403 error because Hosted Pages wasn't enabled by default, requiring a two-day wait for a PM to fix it; sandbox banks that had to be registered manually, with roughly a third of the pre-configured ones not working; confusion over which of three returned IDs was the Application User ID; and an undocumented CORS issue forcing customers to build their own backend proxy. None of it was new to the customers experiencing it. What was new was that our own engineers and PMs had now experienced it.

### The bet

Split the path. Enterprise customers keep the assisted journey, because that's what they want and it's worth doing. Everyone else gets a self-serve one: find the site, get access to the Console, and onboard and implement using the product and the documentation, without waiting on a calendar.
The target is weeks to a few months from first contact to go live, against six months to a year.
Getting to production, after
Target: weeks to a few months. Around 80% of the customer base is non-enterprise, on customer success's figures, and takes the self-serve path.
Traffic
Docs and live demo
Identify use case and segment
Console access
Website · documentation · live API demo · Console
None required.
The same list as before — coverage, pricing, limitations, time to go live. The difference is that it can now be answered by the product rather than by a person.
Knowing who someone is and what they're building means the experience can be tailored, and the limits of sandbox access can be stated rather than discovered.
Onboarding
Create application and credentials
Invite team and assign roles
Curate bank coverage by market and product
Submit for compliance check via queue
Build against sandbox → approved → production
Enterprise keeps the assisted path, on the same Console underneath
Console · documentation · live demo — the assisted path adds sales and solution design
Self-serve: none required by default. Assisted: sales and pre-sales.
What's in the package · understanding the limitations · getting compliance approved without waiting for a meeting · getting the whole team access, not just the developer
Compliance moves from a scheduled in-person session to a queue. That single step was the most common reason a go-live slipped, and it slipped for scheduling reasons rather than substantive ones.
Production
Monitor via in-product analytics
Renewal, expansion
Console · documentation · support · shared Slack channels · public roadmap
Support and customer success, on exception rather than by default.
Reliability · speed · their own performance data, current rather than a stale export · managing their own team and access · knowing what's coming
Analytics move into the product. Previously customer success exported this manually and sent it as reports — expensive for us, out of date for them.
Assisted — retained deliberately for enterprise Automated or self-served

### Principles behind it

— Identify early. Nothing can be tailored to a person you can't recognise.
— Remove scheduling as a dependency. Most of the delay was calendars, not complexity.
— Make limits visible. People hitting an invisible ceiling assume the product can't do it.
— Serve teams, not individuals. Engineers, PMs, designers and finance people need different things from the same account.
— Give customers their own data. Anything a CSM exports by hand is a queue with a person in it.

### What the Console does

Applications and credentials Customers create their own applications and manage credentials across sandbox and production, with product scope and status visible on each — so the first thing a developer needs is self-served rather than requested.
Teams and roles Customers aren't individuals, they're teams: engineers, PMs, designers and finance people, who need genuinely different things. Roles are scoped accordingly — owner, admin, billing, developer — so a finance person isn't navigating API keys and a developer isn't blocked waiting for someone else to grant access.
Compliance without a meeting A queue customers can enter for compliance checks and receive approvals, replacing scheduled in-person sessions. This is the step that most often stalled a go-live, and it stalled for scheduling reasons rather than substantive ones.
Bank coverage they curate themselves Customers filter the institution list by market, product, payment type and rail, and select the coverage that matches their use case — rather than asking us which banks support what.
Analytics in the product Conversion funnels, drop-off, bank performance and session data, visible to the customer directly. Previously this was exported manually by CSMs and sent as reports, which cost us time and gave customers a stale picture.
Applications and credentials Institutions directory In-product analytics Organisation and roles
Where it stands The Console is in beta, and the screens above are from that build. It's too early for adoption metrics. One piece has already shipped in full: a live Hosted Pages configurator giving customers granular, self-serve control over every screen in the flow — colours, copy, layout and states. Before it, a customer wanting a theming change raised a support ticket and an engineer implemented it, every time — a support person and an engineer consumed per request, for work that was never engineering work. Those requests stopped. That is the shape of the whole Console argument in one feature: the cost wasn't a bad screen, the cost was people. The journey map and the information architecture are mine. The Console itself was built with product and engineering, and the self-serve initiatives were scoped jointly off the back of the mapping and the hackathon.
← Back to work · aleuxuk@gmail.com · LinkedIn

---

# Page: design-systems.html
FOCUSING
Alejandro Velázquez Work About CV Contact
03 — CASE STUDY

## Design systems at Yapily

Custard, Mark and Yapily UI — three design systems on one shared token layer, and the governance model that decided what got into them. I designed the first versions of the systems and built the governance jointly with the frontend lead.

### Three systems, one token layer

We ran three design systems instead of one, and that was deliberate. A single system would have forced three very different surfaces into one set of compromises, and whichever surface was least like the others would have come off worst.
Three separate Figma libraries sat on top of a shared token library. Tokens were maintained as Figma variables and mirrored in code, with the component library documented in Storybook. Same primitives, different components — and that split is what made three systems cheaper than one compromised system, rather than three times the work.
Custard — hosted pages White-label, and minimal by design. Customers themed it themselves — logo, typeface, and brand colours applied mainly to buttons and links, with a choice of light, dark or system-matched appearance. Everything else stayed locked. When customers control the surface, the system's job is to expose as little as possible while still reading as their product.
Mark — website Restyled annually with distinctive, playful work — larger heading spacing, more expressive layout. Coupling it to the product systems would have meant every marketing refresh rippling into production tooling. Separated, it moved at its own pace.
Yapily UI — tools Dense by nature — analytics and data-heavy pages where vertical rhythm is tight and information density is the point. Its atoms and molecules were built for that.
Inside Yapily UI Pages from the library documentation — tokens, anatomy, states and spacing. Every component was documented this way so a decision only had to be made once. Click any panel to open it full size.
TOKENS
Typography — family, root tokens, and the full style scale
TOKENS Colour — brand, text and neutral ramps with usage rules
BRANDING Customer logo — size bounds and placement at both resolutions
ANATOMY Bank list — parts, dependencies and what each one inherits
COMPONENT Text inputs — guidance, variants, anatomy and spacing
COMPONENT Search — five states across three widths
COMPONENT Checkboxes and radios — every state, with and without helper text
COMPONENT Button footer — twelve variants of consent copy, device and region
COMPONENT Notifications — inline errors, documented in context
COMPONENT Toasts — success, information, warning and error, plus placement

### Contribution and governance

The gate was evidence rather than seniority.
01
Proposal Anyone could propose a component; in practice proposals came from design and frontend. The proposer produced a simple mockup — enough to evaluate, not a finished spec.
02
Validation The component was tested for usability and accessibility before it was eligible for review — a mix of guerrilla testing and external platforms: Maze for unmoderated usability, Testbirds for broader usability and accessibility coverage.
03
Documentation The proposer wrote the component up with its use cases. Defining where a component shouldn't be used mattered as much as where it should.
04
Review Ad-hoc meetings with the frontend team and other designers. Bringing frontend in at proposal stage rather than at handoff surfaced implementation cost while the design was still cheap to change.
05
Approval Two stages — design-side first approval, then a group decision with the frontend team.
06
Adoption Approved components entered the shared library.
Where validation sat Validation sat before review, not after. That single ordering decision changed what review meetings were about — teams debated evidence rather than taste, and the discussion moved faster because there was less to be subjective about.

### Reach

Components from these systems were used across the marketing website and its landing pages, demo tools, internal tools, hosted pages, and customer-facing tools.

### Versioning and deprecation

We never formalised versioning or deprecation. What I'd put in place now: semantic versioning, so someone has to consciously decide whether a change is breaking; deprecate rather than delete, with the replacement and migration path named; a changelog written for humans; Figma and code versioned in step so designers can tell what's actually in production; and release notes pushed to Slack rather than a wiki nobody opens.
← Back to work · aleuxuk@gmail.com · LinkedIn

---

# Page: creative-archive.html
FOCUSING
Alejandro Velázquez Work About CV Contact
ARCHIVE — EARLY WORK

## Creative archive

Illustration, identity, motion and interface craft from before the work became mostly systems and teams. Kept here because the habits it built — drawing the thing rather than describing it, animating a state to find out whether it reads — are still how I work.
Cuvva brand, campaign and app
Payfriendz interface and motion
Illustration and marks
Portraits drawn for colleagues, friends and side projects over several years — the same reduced vector language I was using for product illustration at the time, pushed to see how much likeness survives a small number of shapes.
Scientists a personal series
A set of scientist portraits built from a small, fixed vocabulary — a circle, a silhouette, one pattern, three colours — and printed on shirts to see whether the likeness survived at chest size.
Comics and storyboards
Drawing was often the fastest way to argue a point — a strip to explain a product idea, a storyboard to make a flow legible to people who don't read wireframes.
← Back to work · aleuxuk@gmail.com · LinkedIn

---

# STILL UNRESOLVED — do not publish claims that depend on these

1. **Usability programme volume** — v5 states "hundreds of end-user usability sessions" throughout, because the exact count could not be substantiated and "1,000 tests" invited an arithmetic challenge. If the real figure can be retrieved from research records or the Testbirds account, a specific number is stronger and can be restored.
2. **The accessibility studies** — v4 currently presents the postponed-release study and the 21-tester German study as two separate things. If they are one study, `hosted-pages.html` and `research-practice.html` both need merging.
3. **"MVP to general availability"** — v4 sets the Leadership date range to 2023–2026 to match. If that programme genuinely ended in 2025 while only the usability work continued, revert and reword so the two aren't conflated.
4. **"Around 80% of the customer base is non-enterprise"** — confirm sourced figure or internal estimate.
5. **Naming the VP of Platform by role** on `console.html` — confirm you're comfortable publishing this. Alternative: "the strongest objection came from platform leadership."
