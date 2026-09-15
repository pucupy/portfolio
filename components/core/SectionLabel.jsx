import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Uppercase mono eyebrow for section headings" viewport="700x70"
 */
export function SectionLabel({ children, as: Tag = 'h2' }) {
  return (
    <Tag
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)',
        margin: 0,
        fontWeight: 500,
      }}
    >
      {children}
    </Tag>
  );
}
