/**
 * @startingPoint section="Core" subtitle="External link with icon and accessible label" viewport="700x60"
 */
export interface LinkItemProps {
  href: string;
  children: React.ReactNode;
  /** adds the arrow icon + new-tab semantics + screen-reader suffix. Default true. */
  external?: boolean;
}
