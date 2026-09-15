export interface LinkRowLink {
  href: string;
  label: React.ReactNode;
}
export interface LinkRowProps {
  links: LinkRowLink[];
}
/**
 * @startingPoint section="Core" subtitle="Middot-separated contact links" viewport="700x60"
 */
export function LinkRow(props: LinkRowProps): JSX.Element;
