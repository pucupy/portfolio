# v2 QA report: buyer credit application

3 October 2026, run against `Proto Buyer Wizard v2.dc.html` at the default settings (BrewDog logo, brand palette, proposals on), desktop width. An automated end-to-end script clicked through every step in a real browser.

**Result: 48 of 48 behaviours pass.** One check first failed because the test expected a comma where the UI correctly says "and"; the UI was right.

| Area | Checks | Result |
|---|---|---|
| Welcome | Title with supplier name; "Recommended" heading; logo plate renders; Start goes to Company | Pass |
| Company | Next goes to Contacts | Pass |
| Contacts | Roles start unticked; director and AP fieldsets show; empty Next lists 8 errors by name; an error link focuses the right field; add director, remove, Undo restores; ticking both hides the fieldsets | Pass |
| Credit terms | Default message (£25,000.00); above-limit message at £30,000; combined message with Net 60; suggestion "Use £20,000.00" fills the field; no warning colour | Pass |
| Payment mandate | Next without a choice gives an error; Direct Debit set up; Remove, then Undo restores | Pass |
| Bank reference | Footer shows Skip for now; each button has its own `aria-label`; Plaid is named; the skip modal opens; modal Skip goes to Trade references | Pass |
| Trade references | Referee info shows; empty state after removing all; footer Skip; only company and email are required (2 errors) | Pass |
| Documents | Next goes to Review | Pass |
| Review | Sections open with Collapse all; bank shows Skipped or masked; money has two decimals; information block shows; removed extra director doesn't appear | Pass |
| Edit from Review | "Save and return to review" and "Back to review" labels; returns to Review | Pass |
| Submit | Unticked submit shows "Agree to the terms"; ticked submit reaches the Done screen | Pass |
| Done | "What happens next"; skipped-steps note ("Bank reference and Trade references") | Pass |

## Not covered by this run (manual QA needed)
- **Mobile widths** (below 768px and 640px): compact header, step list, one-column fields, 16px inputs. These need a real device or a resized browser.
- **Keyboard only:** tab order, modal focus trap and Escape, focus returning after the modal closes.
- **Screen readers** (VoiceOver, NVDA): how the error summary, the `role="status"` messages and undo are announced.
- **200% zoom and forced-colours mode.**
- **Each Supplier logo option**, the System font setting and the teal palette.
- **Registry search scenario** (`registrySearch` on).

## Known prototype limits (not bugs)
- "Go to your buyer portal" only navigates inside the full prototype shell.
- File upload is simulated ("Browse files" adds a placeholder file).
- Progress isn't saved between page loads.
