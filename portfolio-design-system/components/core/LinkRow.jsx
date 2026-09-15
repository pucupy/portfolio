import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Middot-separated contact links" viewport="700x60"
 */
export function LinkRow({ links }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-18)',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        fontSize: 'var(--type-link)',
      }}
    >
      {links.map((l, i) => (
        <React.Fragment key={l.href}>
          {i > 0 && <span aria-hidden="true" style={{ color: 'var(--ink-4)' }}>·</span>}
          <a href={l.href}>{l.label}</a>
        </React.Fragment>
      ))}
    </div>
  );
}