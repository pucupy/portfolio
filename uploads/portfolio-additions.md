# Portfolio — additions and corrections

Everything from this session that the site doesn't yet reflect. Written as copy you can paste, not as instructions.

Note before you start: `portfolio-content.md` and the live site have **diverged**. The design systems page is longer on the site than in the file; the Console is shorter. Decide which is canonical and regenerate the other, or these additions will land in a document nobody is reading.

---

## 1. Restructure: Su4erheroes becomes the parent

The site currently lists Docomo Digital and Caremoni as separate entries, with Docomo described as "contracting through Su4erheroes." That's backwards from how it should read now. One entry, several engagements.

> **Su4erheroes · 2016–2018 · London**
>
> A product design consultancy set up with four former Payfriendz colleagues. Two of our own products, one principal client, and a handful of engagements alongside.
>
> I led design across all of it. Companies House records me as a director from January 2018.

Then the engagements below as short entries: NOMO, Keymono, Colly, Caremoni, Mummybay, Huawei cashback.

---

## 2. NOMO — replaces the current Docomo entry

> **NOMO · Docomo Digital · 2016–2018**
>
> From January 2018, PSD2 reclassified marketplaces that hold buyers' money on the way to sellers: handling funds that aren't yours makes you an intermediary of payments. The licence costs upwards of €200,000 and takes up to 18 months. NOMO existed so a marketplace could stay a marketplace — payouts, escrow, KYC and AML handled by a licensed partner, through an API, without changing payment provider.
>
> Four audiences, four surfaces. Docomo's operations team got an admin console for onboarding partners. Marketplace owners got a dashboard: revenue and net revenue per sale, wallet balance by currency, sellers, payments and payouts. Sellers got a mobile app. Developers got documentation and a sandbox.
>
> The onboarding flow was the design problem worth solving. Adding a partner meant capturing not just a business, but that business's own payment provider, and a link and a document describing their money-laundering and fraud controls. It's a compliance file wearing the clothes of a two-step signup form — and it has to stay that way, because the person filling it in is trying to launch a marketplace, not pass an audit.
>
> The seller app answered something the web dashboard structurally couldn't: a seller sells on more than one marketplace, and nobody was giving them one view of what they'd earned. Payments showed a status timeline rather than a status word — pending on the 13th, paid out on the 15th — and each currency's account fields used its own format: sort code for sterling, IBAN for euro, routing number for dollar.

**Before publishing:** the mockups name Airbnb, Miramax and Paysafe, and pair a real payments company with anti-money-laundering documentation it never supplied. Replace with invented names. `Dashboard4.png` and `4.png` show real email addresses.

---

## 3. Keymono — new

> **Keymono · 2016–2018**
>
> Collecting money from a group, which is a distribution problem before it's a payments problem.
>
> The collection types are categorised by what the organiser doesn't know. *Open* — best if you're not sure how much you want to collect in total. *Split* — you know the total and the people. *Fixed* — you know the total but not how many will chip in. Each carries a concrete example. Most products would have shipped "Fundraiser / Split bill / Group gift" and made people map their situation onto a label; this asks the only question that changes the maths.
>
> Onboarding is deliberately asymmetric. The organiser installs an app. Contributors get a link, arrive from WhatsApp or Messenger on a screen that already says who they're helping and what for, and pay by card. No account, no download.

**Before publishing:** four copy errors — "How does it works?", "People follows the link, contributes", "Help Richard collecting for Dinner", "want collect some of the money spent". Two real photographs.

---

## 4. Colly — new

> **Colly · 2016–2018 · prepaid crypto wallet**
>
> The design position was that nobody thinks in bitcoin. Balances, transactions and the amount you type are denominated in the user's own currency, with the BTC figure underneath in quieter type. Same value shown twice, but the order tells you which one the product thinks you're holding.
>
> Sending goes through contacts rather than addresses — the flow opens on your phonebook, split into people already on Colly and people to invite — so the raw address only appears where it has to, behind a QR code and a Copy button. Withdrawals show the network fee above the button rather than after it. Each contact has a page rather than a log: total sent, total received, number of payments.
>
> It reached MVP.

**Do not publish without fixing:** the profile screen labels SDG as the Singaporean dollar. SDG is the Sudanese pound; Singapore is SGD — and the wrong code is then the denomination on eleven of thirteen screens. In a portfolio arguing payments fluency, that single label costs more than the entry is worth. Also "Londgon" for "Longdon", and seven screens with real photographs.

---

## 5. Caremoni — revised

Replaces the current entry. Adds the service map, the CCG scale, and the reporting outcome.

> **Caremoni · 2017–2018**
>
> Most of the NHS commissioning budget was then managed by 209 clinical commissioning groups. My Support Broker, a social enterprise, worked with five of them, managing personal health budgets for people receiving care at home — and did every payment and reconciliation by hand.
>
> The chain ran on four different clocks. Commissioning groups paid quarterly. The operator paid customers monthly. Care agencies invoiced weekly. Relatives sent receipts, invoices and bank statements quarterly, and the operator validated those against the support plan and audited back on a spreadsheet, by email. Money was held back pending that audit, so customers chased for it. A new bank account was opened for every customer.
>
> I interviewed every party in the chain — the two operators, independent carers, care agencies, and the people receiving care — and mapped the flows. Rather than build first, I ran a concierge version to test whether those flows were right: a plain HTML front end with payments still processed by hand.
>
> That surfaced the thing I'd got wrong. I'd assumed people receiving care and their families would be low on digital confidence. Most were comfortable. The real problem was time and patience for admin — chasing receipts, chasing for money — which was stressful on both sides.
>
> What was built: an operator dashboard for verifying carers and agencies, allocating budget, monitoring spend and reporting; and an app for carers and customers to request and authorise payments, and rate the service privately. The reporting replaced the emailed spreadsheet — commissioning groups could see payments directly rather than waiting for a quarterly audit.
>
> It reached MVP and ran as a pilot with a subset of customers. I wasn't involved past that point; the product later continued as Healthmoni.

**Use the new diagram** — `caremoni-payment-chain.svg`, in the portfolio palette. Caption: *Before: four clocks, one reconciliation.*

**Write CCGs in the past tense** — they were abolished in 2022 and replaced by integrated care boards.

**Two flags:** confirm whether the client was My Support Broker or My Support Money (the service map suggests the latter handled the money), and whether commissioning groups actually used the reporting during the pilot or whether it shipped and wasn't exercised. The copy above takes the safer reading.

---

## 6. Mummybay — new

> **Mummybay · 2017 · UK and Singapore**
>
> Babies grow fast, and parents end up with piles of clothes they never used. A founder brought us an app built at a hackathon: enter your baby's age and size, it predicts the sizes to come, share to Facebook.
>
> I reviewed it, then talked to parents. The findings didn't improve the app, they ended it. Parents didn't want any of this on Facebook. Sizing isn't consistent between brands, so the prediction couldn't be right for everyone. They installed baby apps constantly and paid for none. And the problem they actually had was the cupboard of outgrown clothes they'd tried and failed to sell, because the existing sites weren't made for it.
>
> What they described was a marketplace. Rather than build one to find out, I stood up a working store on an off-the-shelf platform and put it in front of the same parents. They listed items and sold them. That was the evidence for building properly.
>
> Mummybay now runs in the UK and Singapore.

---

## 7. Payango — new, and better than the current one-liner

> **Payango · 2013 · Berlin**
>
> A prepaid card product, customer and admin side.
>
> Top-up showed every method with its fee against its settlement time on one screen — instant for 0.99 EUR, free in two to three working days, 3.5% instantly — so the trade-off was visible rather than buried. Account tiers were expressed as limits rather than adjectives: top-up ceiling, per-transaction maximum, withdrawal maximum, and what identity verification each tier demanded. And because the card is a physical object, the order screen tracked payment approval, printing and shipping, with the three-to-five-day wait stated up front.

---

## 8. A through-line worth adding somewhere

Four products, across seven years, making the same move:

- **Payango, 2013** — every top-up method's fee shown against its settlement time.
- **NOMO, 2017** — payments show pending, then paid out, with dates.
- **Colly, 2018** — the network fee sits above the Withdraw button, not after it.
- **Huawei, 2018** — "Paid" and "On its way to you", with the pending amount greyed.

Show the cost. Show the state. Show the wait. It's the same instinct that later argued for accurate security language and a prominent decline route in the open banking guidance — and it's more persuasive stated once as a position than left implicit in four entries.

---

## 9. Smaller entries

**Minimeter · a baby growth tracker.** Name, icon, tagline and illustration built around a single idea — a measuring instrument, and a baby too big for the building. *Confirm launch status: the landing page carries both app store badges, but neither store lists it now.*

**Nerdtees · 2018.** A side project honouring scientists who don't get put on t-shirts. One system, three portraits: a circular badge, two flat colours, and the person's own discovery as the graphic device — lightning for Tesla, the diffraction pattern for Franklin, punched cards for Lovelace. *Write in the past tense; nerdtees.uk no longer resolves.*

**Telefónica Conecta · Globant · 2010.** An internal social network — profiles, groups, forums, blogs, an idea board, video — built before enterprise social was a settled pattern.

**Bilitee · 2010.** Matching available designers with developers looking for collaborators. Only worth including if you want two-sided marketplaces as an explicit thread running to Mummybay and HeadBox; the screenshots are in placeholder state.

---

## 10. Do not publish

**The Su4erheroes landing page.** Derivative Superman, Batman, Captain America and Spider-Man illustrations, plus Wayne Enterprises, Stark Industries, Oscorp and LuthorCorp as fake client logos under "Trusted by world's leading companies." Obviously a joke in context; out of context it's the exact shape of a fabricated credential, on a page about a company you list on your CV. Four personal email addresses on it too.

The one idea worth keeping from it: the contact form qualified leads with budget and deadline sliders before you could send. That would work on your own site.
