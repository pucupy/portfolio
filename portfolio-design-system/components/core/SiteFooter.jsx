import React from 'react';

/**
 * @startingPoint section="Shell" subtitle="Rule then contact links" viewport="700x160"
 */
export function SiteFooter({ links }) {
  return (
    <footer style={{ maxWidth: 'var(--text-max)', padding: 'var(--space-120) 0 var(--space-96)' }}>
      <div style={{ borderTop: 'var(--border-strong)', paddingTop: 'var(--space-36)' }}>
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
      </div>
    </footer>
  );
}