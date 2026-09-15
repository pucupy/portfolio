import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Award / recognition tag" viewport="700x60"
 */
export function Badge({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-primary)',
        border: 'var(--border-hairline-strong)',
        borderRadius: 'var(--radius-sm)',
        padding: '4px 8px',
      }}
    >
      {children}
    </span>
  );
}
