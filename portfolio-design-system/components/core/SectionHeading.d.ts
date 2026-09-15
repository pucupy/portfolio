export interface SectionHeadingProps {
  children: React.ReactNode;
  /** 'large' opens a major section ("Selected work"). 'mid' heads a narrative section. */
  scale?: 'large' | 'mid';
  /** Draw the strong rule that opens a list. Large scale only, in practice. */
  rule?: boolean;
  as?: 'h2' | 'h3';
}
/**
 * @startingPoint section="Core" subtitle="h2 at large or mid scale" viewport="700x120"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
