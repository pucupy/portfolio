# Ale Velazquez
**Lead Product Designer & Design Manager**
Product design, UXR, design systems and design leadership across payments and open banking.

## Experience
- **Yapily** — Lead Product Designer & Design Manager (2020—)
- **HeadBox** — Lead Product Designer (2018—2019)
- **NOMO (Docomo Digital)** — Senior Product Designer, Contractor (2016—2018)
- **Payfriendz** — Lead Product Designer (2013—2016)
- **Payango** — Contract Product Designer (2013)
- **Globant** — Design Analyst (2008—2011)
- **Early Career** — Andimol, Bilitee, Sysnet Mexico, Datasygma, freelance (2005—2012)

## About Yapily
Yapily is an Open Banking infrastructure provider. Instead of banks and fintechs each building and maintaining their own bank connections, Yapily gives them one API that connects to thousands of banks across the UK and Europe — for accessing account data and initiating payments, all with the customer's consent.

## My Role at Yapily
I joined Yapily in January 2020 as the founding, sole design hire — when Open Banking was still new and few people, including Yapily's own team, really understood how customers would use it. My first activities were running customer interviews to understand the problems we needed to solve, and our first big customer was Intuit, connecting through what was then a Swagger-based API explorer.

Since then my role has grown alongside the company. Today I'm Lead Product Designer & Design Manager, leading design across Payments, Data Connectivity, Platform Services, Developer Experience and Customer Onboarding, and managing a team of two product designers plus an external graphic designer who supports marketing.

My reporting line has moved with the company's structure: I started reporting into the Head of Product, then VP of Platform Experience, and currently report into the VP of Platform Experience, Payments and Data.

**Building the team:** In 2021 we hired our first front-end engineer and our first additional designer. We later grew to five designers in total; by 2024 two graphic designers had left, leaving the current team of two product designers plus one external graphic designer, all reporting to me.

**Building the design practice:** Early on, I created Yapily's UX Research (UXR) practice from scratch — workshops, qualitative studies and quantitative studies — starting with those initial customer interviews. The 2024–2025 Hosted Pages usability research programme (~1,000 tests) is a direct output of that practice.

I also built three design systems from scratch, all led by me, with an approval/submission process I set up and later delegated day-to-day maintenance of to a team designer:
- **Yapily UI** (internally originally called "Pipes") — the internal tools design system, used to run 20 different internal tools. Storybook-based, with an atoms/molecules structure, design tokens, and full component variant sets.
- **Custard** — the Hosted Pages white-label design system (foundations designed by me).
- **Mark** — the marketing website design system (foundations designed by me), built in collaboration with Product Marketing and the Head of Marketing.

I lead my colleagues' work from idea through to production, and hold the line on usability and accessibility standards across the team's output — including running accessibility workshops with the frontend and design teams. We continuously test features and new integrations rather than treating testing as a one-off gate before launch. I work closely with clients directly to understand how they actually use the product, feeding that back into strategy, and partner day-to-day with engineers, PMs and the leadership team to shape product direction and platform vision. I've also worked with Yapily's compliance team on FCA presentations, and collaborated with Google's design team for two years, including delivering in-person senior workshops in London and Mountain View.

---

## Case Study: Hosted Pages

**Context**
Every customer connecting to a bank through Yapily had to build and maintain their own consent UI for that connection — and with 1,500+ banks across 10+ countries in the Hosted Pages network, each with its own consent flow, data quirks and certification requirements, that added up to a full custom integration effort, sometimes six months to over a year depending on the use case. Customer research had already surfaced this as the top adoption barrier: customers wanted a "TPP-to-many-banks, out-of-the-box" connection so they could spend their time building their own product instead of maintaining bank plumbing. The result needed to work across multiple product types (Payments, Data, and later cVRP), and be white-label — customisable so it could sit inside each customer's own brand rather than feeling like a bolt-on.

The programme kicked off in November 2022 and was delivered in phases through 2023: UK payments first, then France, then Germany, then UK account data.

**Constraints**
The banks themselves couldn't be standardised — each connection kept its own legacy consent flow and edge cases, and Yapily had no control over that layer. Hosted Pages is also an FCA-regulated product, so the flow had to meet Open Banking compliance guidelines throughout, not just at launch. It also had to serve two different customer types with different needs: customers using Yapily's own licence (Yapily Connect), who needed a fully compliant, fairly fixed flow, and direct customers who wanted more flexibility to build their own surrounding experience. Any solution had to abstract over bank-level inconsistency for the customer, work across Payments, Data and cVRP without diverging into separate flows, and hold up for both brand-new customers and the ones who'd already sunk months into building their own integration. Support for cVRP is currently in active design.

**Process**
Building on the customer research, I proposed moving the consent experience out of each customer's own codebase into a Yapily-hosted, pre-built, customisable flow — removing the need to design, build and maintain bank-specific UI themselves, while staying compliant across products. It shipped in phases through 2023, starting with UK payments.

Since launch, I've kept iterating on it based on real usage. Between 2024 and 2025 I ran a research programme of around 1,000 usability tests, benchmarking our own prototypes and live implementation against competitors (Tink) and a high-performing customer implementation (Yaspa). The headline finding: search was the primary way our users found their bank (around 70% of users, taking 5–15 seconds), versus 1–3 seconds for competitors using brand grouping and a "most popular banks" shortcut. That evidence directly justified redesigning the bank-selection screen as a bottom-sheet, grouping bank branches under one parent brand (important in markets like Germany, where networks like Sparkasse and Volksbank sit above thousands of sub-branches), and adding a popular-banks shortcut — alongside fixing an iOS app-to-app redirection issue and adding IBAN/name pre-population.

The customisation configurator built on top of this is a genuinely powerful white-labelled solution: per-page colour theming, live design-token controls (font size/weight, spacing, icon size), a text/copy editor per screen and language, and full states-and-flags testing (loading, error, request type) across the entire flow — Institutions, Authorise/QR, Login, Redirect Notice, Callback, Error, Pay by Link.

Because Hosted Pages is used directly by product and design teams at customers including Google, Adyen, Intuit and Revolut, part of leading this product means working with their PMs and designers directly — reviewing Google's own proposed co-branding and consent-page changes, and benchmarking conversion gaps bank-by-bank against competitor flows. In June 2026 I ran a cross-functional workshop with the frontend and design teams to audit where the product was still falling short — limited customisation, analytics blind spots on drop-off, inconsistent support across tiers — and to set the roadmap for the next evolution, which is now underway.

**My Contribution**
I led the strategy and design end to end at launch, within FCA guidelines. I continue to own the product's ongoing evolution: running the 2024–2025 usability research programme, leading the June 2026 cross-functional workshop, working directly with customer PMs and designers, and setting the improvement roadmap. I also lead my team's work on this and related products from idea through to production, and hold the line on accessibility and usability standards throughout.

**Outcome**
Customer integration effort dropped from around 6 months (sometimes over a year for complex cases) to 2 weeks. Related support tickets fell by 47%, and conversion increased by 25%. Hosted Pages is now used by 200 companies, including Intuit, Google, Adyen, Ant Financial and Revolut. Support for cVRP is currently in active design. Further improvements to conversion, customisation and support ticket volume are currently in progress as part of the 2026 roadmap set at the June workshop.

**Reflection**
*Hosted Pages was originally built for customers using Yapily's own licence, so the flow was fairly rigid by design. Direct customers who don't want to build their own UI need more flexibility than that original version allowed — it's something we're actively addressing now, but if I were starting the product again, I'd have designed more flexibility into the licensing model from day one rather than retrofitting it later.*

### Extending Hosted Pages: giving Yapily customers visibility into performance
Once Hosted Pages was live and scaling across banks, countries and journey types, performance data existed but was scattered — not something product teams or bank customers could actually use to make decisions. There was no single place to see how a journey was converting, where users were dropping off, or which banks needed attention.

I led design on the analytics console that solved this, working since 2023 with a core team of two product designers, two frontend engineers and a PM. I defined the dimensions the console needed to report on, based on user research the team ran collaboratively, and owned the information architecture, the visual design system for the reporting views, and how internal vs. customer-facing signal was separated.

The console has six core views: Executive KPIs (top-line health — conversion, volume, abandonment, failure rate), Funnel Reports (step-by-step drop-off from page load to payment success), Customer Behaviour (how users discover and select their bank), Bank Performance (a ranked league table by volume, conversion and speed), Journey Performance (conversion and timing by journey type — mobile, desktop, decoupled, QR, embedded, redirect), and Automated Insights (a machine-generated feed surfacing anomalies in plain language, e.g. "Conversion dropped on Safari").

One design decision worth calling out: not every event captured for internal UX analysis belongs in a customer-facing report. Interaction-level events like "clicked X to close" are useful for us to diagnose UX friction internally, but they're noise in a report a bank stakeholder is reading. I designed the Automated Insights view to explicitly flag which signals are internal-only, so the same underlying data model could serve both audiences without compromising the customer-facing report's clarity.

**Outcome:** Before this console existed, giving a bank customer visibility into their own performance meant a CSM manually exporting data and building a PDF report for them — real overhead on every request. Self-serve access to Executive KPIs, Bank Performance and Automated Insights removed that manual reporting step entirely, cutting CSM overhead and the support tickets that came with it.

---

## Case Study: Yapily Console — Making Hosted Pages Self-Serve

**Context**
Historically, clients who wanted to test or onboard with Hosted Pages couldn't do it themselves. Getting access (scopes) took multiple days and required several Yapily colleagues to help set the customer up. When clients wanted to customise their Hosted Pages UI — logo, colours — they had to ask Yapily staff to do it for them, and even then the customisation options were limited. The Console, where customers sign up and manage applications, had become too fragile to safely modify, which blocked most of the improvements needed to make Hosted Pages genuinely self-service.

**Constraints**
The existing Console codebase was considered too delicate to work on safely, so even small improvements risked breaking core sign-up flows — the redesign had to start with making the Console modifiable at all before any self-serve feature could ship. Certificate renewal for Yapily's full bank network is a fully manual process today, taking weeks of staff time multiple times a year. Any redesign also had to work across very different customer tiers, from small self-serve developers to enterprise clients with dedicated compliance requirements.

**Process**
Rather than guess at the problems, in January 2026 I ran a hackathon where the team role-played as an outside consultancy building a real product against Yapily's own public docs and Console — using only what an actual customer would have access to, no internal shortcuts. We documented every friction point as we hit it. Some of what came up: a 403 error because Hosted Pages wasn't enabled by default and had to be manually added by a PM (a two-day wait), sandbox banks that had to be registered manually rather than being pre-loaded, confusion over what an "Application User ID" was and which of three returned IDs to actually use, and an undocumented CORS issue that meant customers needed their own backend proxy just to get started.

Those findings, combined with direct customer feedback, shaped the initiatives I scoped for the self-serve vision: default-enabling Hosted Pages scopes for new and existing clients, pre-loading working sandbox banks instead of manual registration, showing Hosted Pages status directly in the Console, and — the largest piece of work — redesigning the Console itself so it could safely support these changes going forward, moving from a sales-led model with heavy manual intervention toward a product-led, fully self-service one.

**My Contribution**
I led the hackathon and turned its findings, plus the wider self-serve vision, into a scoped set of initiatives with clear problem statements. I led the design of the redesigned Console's information architecture and self-serve flows, working with product and engineering to validate feasibility, including a functional prototype validated in January 2026.

**Outcome**
The redesigned Console is live — shipped and self-serve, though still early days. It's too early for results or adoption metrics; those will follow as usage builds up.

---

## Case Study: Design Systems at Yapily — Yapily UI, Custard, Mark

**Context**
As Yapily's design team grew, so did the need for shared, reusable foundations rather than one-off screens. I built three design systems from scratch over my time at Yapily, each solving a different problem:
- **Yapily UI** ("Pipes" internally) — for the 20 internal tools used by staff across the business, which had no consistent visual or interaction language.
- **Custard** — the white-label foundation underpinning Hosted Pages' customisation configurator.
- **Mark** — the foundation for the marketing website, built with Product Marketing and the Head of Marketing.

**My Contribution**
I designed the foundations for all three systems from scratch: design tokens, atoms/molecules structure, full component variant sets, and documentation in Storybook. I also built the approval/submission process governing how components get added and changed, then delegated ongoing day-to-day maintenance to a team designer once the systems were established.

**Outcome**
Yapily UI alone supports 20 internal tools with a consistent, accessible component language, removing the need for each internal tool to design and build its own UI from scratch.

---

## Case Study: Brand Guidelines & Rebranding

**Context**
Between 2019 and 2026, Yapily went through six rebranding efforts, working with two agency partnerships — OHMY and MultiAdaptor. Before any agency involvement, Yapily's original logo was designed in Word by the CEO. The two most distinct identities show how far the identity shifted: an earlier "3D connectivity" identity (built with OHMY, 2020–2021) on Montserrat typography, versus the 2026 "Go Beyond" rebrand with MultiAdaptor — a dark green and lime palette, a new directional logo mark, Next Book Regular and Inter typography, a more technical, enterprise-ready illustration style, and Material Design iconography for product UI.

**My Contribution**
I collaborated with the marketing team on these rebranding efforts. The resulting guidelines were applied across yapily.com, physical products (expo swag, stands and souvenirs), and internal websites, documents and slides — meaning the work extended beyond marketing collateral into keeping a consistent identity across internal tools and documentation too. A former direct report on my team contributed significantly to the "Go Beyond" rebrand rollout.

**Outcome**
The "Go Beyond" launch drove a 110% increase in LinkedIn engagement, a 24% increase in brand search / share of voice, and a 54% increase in resource downloads.

### Bringing the brand into physical space: Money20/20
Brand consistency didn't stop at digital collateral — it extended to how Yapily showed up physically, at events like Money20/20. For the booth, I contributed concept direction and brand asset handoff: shaping the visual identity direction (a navy and gold palette, the "Redefining how the world interacts with value" tagline, and a trust-signal wall featuring partner logos including Google, Revolut and Adyen) and preparing the brand assets that were handed off to the stand-builder.

*Note: this was concept direction and asset handoff — not the physical/spatial design or fabrication of the stand itself, which was handled by the stand-builder.*

---

## Case Study: Demo.yapily.com

**Context**
When Yapily started in 2020, Open Banking lacked real-world examples, making it hard to explain — especially to non-technical stakeholders. A live, working demo has remained the most effective way to bridge that gap: explaining how Open Banking works, showing Yapily's value, and connecting UX to API capabilities in one place, for both sales and technical conversations.

**Who Uses It**
Pre-sales and sales teams use it live in RFIs and client presentations, though reliability during live use — app-to-app failures, outdated pages, sandbox constraints — has been a real pain point. The implementation team uses it as a tutorial and documentation aid, since it shows full API requests and responses in context. Payments, Data and Design teams use it to test the end-user experience of live products. It's also found organically by public visitors, though it isn't currently optimised to convert that traffic into leads.

I also maintain a Demo Hub — an indexed library of demo journeys for sales, CS and marketing use, covering flows like mobile payment authorisation, Pay by Link with a QR handoff, biometric app-to-app redirects, in-store POS payments, bulk/payroll disbursement, and AIS-based account verification and aggregation, plus live interactive demos for Data Plus (transaction categorisation and enrichment) used in lending and credit-risk conversations.

**My Contribution**
I wrote up the current state, problems and vision for what the demo could become — a stable, reliable, go-to showcase for both sales and technical conversations — and maintain the underlying Demo Hub asset library.

**Outcome**
The Demo Hub works as a dual-purpose tool: for implementation teams, it doubles as a live tutorial and documentation aid, since it shows the actual requests and responses behind every product and flow rather than just describing them. For sales, it's proven especially valuable in RFIs, giving prospects a working, interactive product to evaluate rather than static slides.

---

## Earlier Career

### HeadBox — 2018—2019
HeadBox is a venue-booking marketplace connecting event organisers with venues. Both sides of the product are covered: the guest/booking flow (brief builder covering event type, location, format and must-haves, matched against venue results, a venue detail page, enquiry-sent confirmation, and a "My Events" dashboard) and the host/venue-listing side (venue management, an add-space listing flow, capacity forms, and a confirm-details step), plus marketing landing pages for both "List your venue" and "Plan your event."

**Outcome:** I helped pivot the product toward a SaaS model, which generated £150,288 ARR (117 customers) within 3 months — 4x the prior model's performance.

### Payango — 2013
Before Payfriendz, I spent ten months as a contract Product Designer at Payango in Berlin, designing user experiences for prepaid card, digital banking and payment products, improving customer journeys and product adoption.

### Payfriendz — 2013—2016
Payfriendz was an Android and iOS payments app giving people an easy, secure way to send or request money in real time.

**Why I joined:** Payfriendz's CTO contacted me to help launch a new product in the UK. They'd already spent time and budget building the product, but he needed to understand whether it was usable and useful for their potential customers, and needed help shaping the brand's visual style. I joined as Lead Product Designer.

**Tech stack & team:** React, Meteor, Ruby, and native iOS and Android apps, built with agile development across a mix of local and remote teams. The app was initially built in RubyMotion, then rebuilt in Meteor — I had to design a UI component system that worked consistently across Android and iOS while being built mostly in HTML/CSS. I worked closely with a team of 2 designers and 15 engineers, spread across remote and local locations.

**Many hats:** As a small startup, the role stretched well beyond product design — I mentored customer support staff who later became junior UX researchers, created promotional videos and posters, produced hundreds of UI iterations across the Android and iOS apps, built style guides, learned Meteor and React Native, wrote code, worked across waterfall, kanban and agile methodologies, designed a dashboard, ran email marketing campaigns and landing pages, managed junior designers, and trained video editors.

Screens cover onboarding, P2P payment confirmation and an iMessage claim flow, friend profiles with payment history, Apple Pay/Siri linking, a virtual Mastercard with purchase history, emoji-based security code setup, a gamified rewards feature ("Spin the Squid"), an activity feed, search/pay flow, an in-app merch store, and various error/maintenance states.

**Outcome:** £5M+ transferred by 150,000+ users, ranked #1–3 in the Apple App Store finance category.

### Globant — 2008—2011
**Design Analyst.** Designed enterprise products and digital experiences for organisations including Google, JP Morgan, PwC, Coca-Cola, Telefónica and Travelocity, working within multidisciplinary product and engineering teams.

### Early Career — 2005—2012
Andimol (interaction design/UX/UI consultancy for Latin American firms, Aug 2011–Nov 2012), Bilitee (founder, self-employed — a social network for developers and designers, Jan 2010–Mar 2011), Sysnet Mexico (Motion Designer, Feb 2007–Aug 2008), and freelance/web design roles including Datasygma (Jun 2005–Feb 2007) and independent freelance work (Mar 2005–May 2007).

---

## Illustration & Animation
A selection of illustration and brand-identity work outside the core product case studies, included to show range. Primarily 2011–2016 unless noted otherwise.
