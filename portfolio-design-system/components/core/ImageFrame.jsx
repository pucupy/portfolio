import React from 'react';

/**
 * @startingPoint section="Core" subtitle="Full-measure image, 12px radius" viewport="700x300"
 */
export function ImageFrame({ src, alt = '', height = 420, fit = 'contain', lazy = true }) {
  return (
    <figure style={{ margin: 0 }}>
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        style={{
          display: 'block',
          width: '100%',
          height,
          objectFit: fit,
          background: 'var(--ground)',
          borderRadius: 'var(--radius-image)',
        }}
      />
    </figure>
  );
}