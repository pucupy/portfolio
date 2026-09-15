export interface WorkEntryProps {
  /** Two-digit mono index, e.g. "01". */
  index: string;
  title: React.ReactNode;
  /** Mono date or scope note, e.g. "side project, 2016–2018". */
  qualifier?: string;
  href?: string;
  linkLabel?: string;
  children: React.ReactNode;
  /** ImageFrame or ImageGrid. Omit for NDA'd work. */
  media?: React.ReactNode;
  last?: boolean;
}
/**
 * @startingPoint section="Core" subtitle="Numbered work list entry" viewport="700x320"
 */
export function WorkEntry(props: WorkEntryProps): JSX.Element;
