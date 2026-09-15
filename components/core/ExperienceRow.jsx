import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Role, company and date range, one row" viewport="700x90"
 */
export function ExperienceRow({ role, company, dateRange }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 16,
        padding: '14px 0',
        borderTop: 'var(--border-hairline)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-primary)', fontWeight: 500 }}>
          {company}
        </span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-secondary)' }}>
          {role}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--text-tertiary)',
          whiteSpace: 'nowrap',
        }}
      >
        {dateRange}
      </span>
    </div>
  );
}
