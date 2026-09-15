import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Visible skip-to-content link, keyboard only" viewport="700x90"
 */
export function SkipLink({ targetId = 'main', label = 'Skip to content' }) {
  return (
    <a
      href={`#${targetId}`}
      style={{
        position: 'absolute',
        left: 16,
        top: -48,
        transform: 'translateY(0)',
        background: 'var(--surface-page)',
        color: 'var(--text-primary)',
        border: '1px solid var(--focus-ring)',
        padding: '10px 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        textDecoration: 'none',
        zIndex: 100,
        transition: 'top var(--duration-fast) var(--ease-standard)',
      }}
      onFocus={(e) => { e.currentTarget.style.top = '16px'; }}
      onBlur={(e) => { e.currentTarget.style.top = '-48px'; }}
    >
      {label}
    </a>
  );
}
