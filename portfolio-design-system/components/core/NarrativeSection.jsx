import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Heading plus prose at the 700px measure" viewport="700x260"
 */
export function NarrativeSection({ heading, children, longLeading = false, topPadding = 'var(--section-gap)' }) {
  return (
    <section style={{ maxWidth: 'var(--text-max)', paddingTop: topPadding }}>
      {heading && (
        <h2
          style={{
            margin: '0 0 var(--space-20)',
            fontSize: 'var(--type-h2-mid)',
            fontWeight: 500,
            letterSpacing: 'var(--tracking-h2-mid)',
            color: 'var(--ink-1)',
          }}
        >
          {heading}
        </h2>
      )}
      <div
        style={{
          fontSize: 'var(--type-body)',
          lineHeight: longLeading
            ? 'var(--leading-body-long)'
            : 'var(--leading-body)',
          color: 'var(--ink-2)',
        }}
      >
        {children}
      </div>
    </section>
  );
}