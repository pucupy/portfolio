export interface ImageGridProps {
  /** 2 or 3. Collapses to one column under 600px via the .cols rule. */
  columns?: 2 | 3;
  children: React.ReactNode;
}
/**
 * @startingPoint section="Core" subtitle="Two- or three-up image row" viewport="700x240"
 */
export function ImageGrid(props: ImageGridProps): JSX.Element;
