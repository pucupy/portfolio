import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Two- or three-up image row" viewport="700x240"
 */
export function ImageGrid({ columns = 2, children }) {
  return (
    <div
      className="cols"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: 'var(--grid-gap-image)',
      }}
    >
      {children}
    </div>
  );
}