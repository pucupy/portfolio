import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Hairline or spaced stat grid" viewport="700x180"
 */
export function StatGrid({ stats, variant = 'hairline' }) {
  const hairline = variant === 'hairline';
  return (
    <div
      className="cols"
      style={
        hairline
          ? {
              display: 'grid',
              gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
              gap: 1,
              background: 'var(--rule-strong)',
              border: 'var(--border-strong)',
            }
          : {
              display: 'grid',
              gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
              gap: 'var(--grid-gap-stat)',
            }
      }
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: 'var(--ground)',
            padding: hairline ? 'var(--space-24)' : 0,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h3-small)',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-h3)',
              color: 'var(--ink-1)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {s.value}
          </div>
          <div style={{ fontSize: 'var(--type-ui)', lineHeight: 'var(--leading-body)', color: 'var(--ink-2)' }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}