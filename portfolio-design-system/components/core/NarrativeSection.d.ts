export interface NarrativeSectionProps {
  heading?: React.ReactNode;
  children: React.ReactNode;
  /** 1.65 line-height — case-study prose. Default 1.6. */
  longLeading?: boolean;
  topPadding?: string;
}
/**
 * @startingPoint section="Core" subtitle="Heading plus prose at the 700px measure" viewport="700x260"
 */
export function NarrativeSection(props: NarrativeSectionProps): JSX.Element;
