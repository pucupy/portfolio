# Notifications for Almanac

Source: Vitaly Friedman, "Design Guidelines For Better Notifications UX" (2024), mapped to Almanac's supplier and buyer events. The article is paraphrased; read the original for detail.

## 1. Choose the right mechanism
- **Indicator** (passive): badges, status chips ("Awaiting decision"), counts on the Notifications tab.
- **Validation** (caused by the user's input): inline field errors only.
- **Notification** (an external event): items in the Notifications list, emails, toasts.

## 2. Attention levels and Almanac events
| Level | Use for | Almanac examples | Channel |
|---|---|---|---|
| High | Action needed now, or a failure | Mandate failed, bank connection expired, credit decision required, sanctions hit | In-app plus email; a banner on the related screen |
| Medium | Feedback or a warning, no immediate action | Application submitted, reference received, credit limit changed | In-app list; email digest |
| Low | Information | Bureau report refreshed, invoice imported | In-app list only; a badge |

Messages from a person (e.g. "Sam at Acme Supplies requested a document") rank above automated ones. Always name the person and company.

## 3. Rules
- **Start quiet.** Default to high-attention events only, and let users opt into more.
- **Offer modes, not 30 toggles:** Essential only, Recommended (default) and Everything. Advanced per-event settings sit behind "Customise".
- **Summary mode:** a daily or weekly email digest for medium and low events.
- **Quiet hours:** no emails outside the workspace's business hours unless the event is high attention.
- **Snooze:** pause non-critical notifications for 24 hours or 1 week.
- **Group** repeated events: "3 references received for Brewdog", not three items.
- **Every notification is actionable:** it opens the exact screen, with the item in focus.
- **Copy:** the event, who, and what to do next, in one sentence; sentence case; no exclamation marks.
- **Onboarding:** ask about notifications once the first relevant event happens, not on first sign-in.
- **Measure:** open rate, time to action and opt-outs per event type. Cut events nobody acts on.

## 4. Screens this affects
- Supplier and buyer **Notifications** list: group by day, unread state shown without colour alone, and "Mark all as read".
- **Settings › Notifications:** the mode picker, plus digest, quiet hours and snooze.
- Toasts: medium-attention only, 4–6s, polite `aria-live`, with an undo when one applies.

**Status:** approved for v3 on 4 Oct 2026. Built: levels (Essential only, Recommended, Everything), email summary (Off, Daily, Weekly), quiet hours, pause for 24 hours or a week, and "High priority" tags in Settings › Notifications (supplier and buyer). Choosing a level resets custom toggles. Not built yet: grouping repeated events and "Mark all as read" in the list.
