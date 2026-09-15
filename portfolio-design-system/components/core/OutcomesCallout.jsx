import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Gold-bordered outcomes block" viewport="700x260"
 */
export function OutcomesCallout({ heading = 'Outcomes', lead, children }) {
  return (
    <div style={{ border: '1px solid var(--gold-border)', padding: 'var(--space-56) 48px' }}>
      <h2
        style={{
          margin: '0 0 var(--space-24)',
          fontSize: 'var(--type-h2-mid)',
          fontWeight: 500,
          letterSpacing: 'var(--tracking-h2-mid)',
          color: 'var(--ink-1)',
        }}
      >
        {heading}
      </h2>
      {lead && (
        <p
          style={{
            margin: '0 0 var(--space-36)',
            fontSize: 'var(--type-lead)',
            lineHeight: 'var(--leading-body-long)',
            color: 'var(--ink-1)',
          }}
        >
          {lead}
        </p>
      )}
      {children}
    </div>
  );
}