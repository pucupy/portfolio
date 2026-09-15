import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Career timeline period" viewport="700x110"
 */
export function TimelineEntry({ period, children }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--type-meta)',
          letterSpacing: 'var(--tracking-mono-date)',
          color: 'var(--gold)',
          marginBottom: 'var(--space-8)',
        }}
      >
        {period}
      </div>
      <p style={{ margin: 0, fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-2)' }}>
        {children}
      </p>
    </div>
  );
}