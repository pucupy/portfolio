export interface Stat {
  value: React.ReactNode;
  label: React.ReactNode;
}
export interface StatGridProps {
  stats: Stat[];
  /** 'hairline' = 1px gap over --rule-strong, bordered (Decisions). 'spaced' = 28px gap, no border (Outcomes). */
  variant?: 'hairline' | 'spaced';
}
/**
 * @startingPoint section="Core" subtitle="Hairline or spaced stat grid" viewport="700x180"
 */
export function StatGrid(props: StatGridProps): JSX.Element;
