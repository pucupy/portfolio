import React from 'react';

/**
 * @startingPoint section="Shell" subtitle="Sticky blurred header with avatar wordmark" viewport="1160x80"
 */
export function SiteHeader({ name = 'Alejandro Velázquez', avatarSrc = '/assets/avatar.svg', homeHref = '/', nav = [] }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--ground-translucent)',
        backdropFilter: 'var(--header-blur)',
        WebkitBackdropFilter: 'var(--header-blur)',
        borderBottom: 'var(--border-hairline)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '18px var(--container-pad)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-24)',
          flexWrap: 'wrap',
        }}
      >
        <a
          href={homeHref}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
        >
          <img src={avatarSrc} alt="" width={26} height={26} style={{ borderRadius: 'var(--radius-avatar-sm)' }} />
          <span
            style={{
              fontSize: 'var(--type-ui)',
              fontWeight: 500,
              letterSpacing: 'var(--tracking-name)',
              color: 'var(--ink-1)',
            }}
          >
            {name}
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 'var(--type-ui)' }}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}