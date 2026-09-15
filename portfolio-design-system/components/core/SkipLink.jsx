import React from 'react';

/**
 * @startingPoint section="Shell" subtitle="Keyboard skip-to-content link" viewport="700x60"
 */
export function SkipLink({ href = '#main', children = 'Skip to content' }) {
  return (
    <a
      href={href}
      style={{
        position: 'absolute',
        left: -9999,
        top: 0,
        zIndex: 100,
        background: 'var(--gold)',
        color: 'var(--ground)',
        padding: '10px 14px',
        fontSize: 'var(--type-ui)',
        textDecoration: 'none',
      }}
      onFocus={(e) => { e.currentTarget.style.left = '12px'; e.currentTarget.style.top = '12px'; }}
      onBlur={(e) => { e.currentTarget.style.left = '-9999px'; }}
    >
      {children}
    </a>
  );
}