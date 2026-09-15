import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Mono eyebrow above a page title" viewport="700x60"
 */
export function Eyebrow({ children, variant = 'eyebrow' }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--type-meta)',
        letterSpacing:
          variant === 'date'
            ? 'var(--tracking-mono-date)'
            : 'var(--tracking-mono-eyebrow)',
        color: 'var(--gold)',
      }}
    >
      {children}
    </div>
  );
}