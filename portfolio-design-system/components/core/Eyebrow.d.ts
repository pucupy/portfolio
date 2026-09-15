export interface EyebrowProps {
  children: React.ReactNode;
  /** 'eyebrow' = .1em tracking (page eyebrows). 'date' = .08em (timeline date labels). */
  variant?: 'eyebrow' | 'date';
}
/**
 * Mono, gold, uppercase-by-content label.
 * @startingPoint section="Core" subtitle="Mono eyebrow above a page title" viewport="700x60"
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
