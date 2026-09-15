/**
 * @startingPoint section="Core" subtitle="Uppercase mono eyebrow for section headings" viewport="700x70"
 */
export interface SectionLabelProps {
  children: React.ReactNode;
  /** heading level to render as — defaults to h2 */
  as?: 'h2' | 'h3' | 'div';
}
