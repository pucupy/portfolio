import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Numbered work list entry" viewport="700x320"
 */
export function WorkEntry({ index, title, qualifier, href, linkLabel = 'Full case study →', children, media, last = false }) {
  return (
    <article
      style={{
        padding: 'var(--entry-padding) 0',
        borderBottom: last ? 'none' : 'var(--border-hairline)',
      }}
    >
      <header
        style={{
          display: 'flex',
          gap: 'var(--space-20)',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          marginBottom: 'var(--space-14)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-ui)', color: 'var(--gold)' }}>
          {index}
        </span>
        <h3
          style={{
            margin: 0,
            fontSize: 'var(--type-h3-entry)',
            fontWeight: 500,
            letterSpacing: 'var(--tracking-h2-mid)',
            color: 'var(--ink-1)',
          }}
        >
          {title}
        </h3>
        {qualifier && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--type-meta)', color: 'var(--ink-3)' }}>
            {qualifier}
          </span>
        )}
      </header>
      <div
        style={{
          maxWidth: 'var(--text-max)',
          fontSize: 'var(--type-body)',
          lineHeight: 'var(--leading-body)',
          color: 'var(--ink-2)',
        }}
      >
        {children}
      </div>
      {href && (
        <div style={{ marginTop: 'var(--space-28)', fontSize: 'var(--type-link)' }}>
          <a href={href}>{linkLabel}</a>
        </div>
      )}
      {media && <div style={{ marginTop: 'var(--space-36)' }}>{media}</div>}
    </article>
  );
}