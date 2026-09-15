export interface TimelineEntryProps {
  /** e.g. "2020 — PRESENT". Em dash, spaced, uppercase. */
  period: string;
  children: React.ReactNode;
}
/**
 * @startingPoint section="Core" subtitle="Career timeline period" viewport="700x110"
 */
export function TimelineEntry(props: TimelineEntryProps): JSX.Element;
