# Data density for the portals

Source: Paul Wallas, "Designing for data density" (Medium). The article couldn't be fetched, so this records general practice for dense finance UIs; check it against the article.

- Density is a feature for credit teams. Don't pad tables to look "airy"; optimise for scanning.
- **Row heights:** 40px comfortable (default) and 32px compact (a user toggle) on desktop; touch rows ≥ 48px.
- Right-align numbers, use tabular numerals and mono for money, and make units consistent within a column.
- Use the strongest contrast for the key column (customer and amount). Secondary columns are muted, never below 4.5:1.
- Reduce ink: hairline row rules, no zebra stripes alongside rules, no vertical rules.
- Pin the header and the first column on wide tables. Truncation is allowed only on desktop, with a tooltip and the full value on focus.
- Status is a tint chip with text, never a dot alone.
- Progressive disclosure: row → side sheet (FocusPane) rather than a page jump, keeping list context.
- Summary first: KPI tiles (≤ 4) above the table answer "what needs me today".
- Phones: stacked list rows (see the guardrails), with the primary field plus status, then 2 values.
