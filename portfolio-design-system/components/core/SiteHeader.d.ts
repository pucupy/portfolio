export interface NavItem {
  href: string;
  label: string;
}
export interface SiteHeaderProps {
  name?: string;
  avatarSrc?: string;
  homeHref?: string;
  nav?: NavItem[];
}
/**
 * @startingPoint section="Shell" subtitle="Sticky blurred header with avatar wordmark" viewport="1160x80"
 */
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
