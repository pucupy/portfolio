import React from 'react';

/**
 * @startingPoint section="Core" subtitle="External link with icon and accessible label" viewport="700x60"
 */
export function LinkItem({ href, children, external = true }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        color: 'var(--accent)',
      }}
    >
      {children}
      {external && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {external && <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>(opens in new tab)</span>}
    </a>
  );
}
