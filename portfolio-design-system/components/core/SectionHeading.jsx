import React from 'react';

/**
 * @startingPoint section="Core" subtitle="h2 at large or mid scale" viewport="700x120"
 */
export function SectionHeading({ children, scale = 'mid', rule = false, as: Tag = 'h2' }) {
  const large = scale === 'large';
  return (
    <>
      <Tag
        style={{
          margin: 0,
          fontSize: large ? 'var(--type-h2-large)' : 'var(--type-h2-mid)',
          fontWeight: 500,
          letterSpacing: large
            ? 'var(--tracking-h2-large)'
            : 'var(--tracking-h2-mid)',
          color: 'var(--ink-1)',
        }}
      >
        {children}
      </Tag>
      {rule && (
        <div
          style={{
            marginTop: 'var(--space-40)',
            borderTop: 'var(--border-strong)',
          }}
        />
      )}
    </>
  );
}