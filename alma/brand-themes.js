/* Almanac brand lab: theme configurations.
   Layer 1  Approved product tokens: the Almanac Design System (_ds/...). Never edited here.
   Layer 2  Proposed marketing extensions: the --mk-* token schema below (MK_SCHEMA). Website-only.
   Layer 3  Experimental brand themes: BRANDS. Each value carries provenance:
            DS = approved design system, E = Brand Explorations file (23 Oct 2026), P = proposed here, not in any source.
   To add a direction: push one object onto window.ALMANAC_BRANDS (same shape). No website changes needed. */
(function () {
  var A = 'brand-assets/';
  var SVGU = function (s) { return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")'; };
  var GRAIN = 'url("data:image/svg+xml,' + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.6 -.55'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>") + '")';

  /* Shared patterns, as listed in "Current brand explorations" (23 Oct 2026). Definitions from the explorations file. */
  window.ALMANAC_PATTERNS = {
    none: { name: 'None', img: 'none', size: 'auto', op: 0 },
    grain: { name: 'Grain', img: GRAIN, size: '160px 160px', op: 0.32 },
    dotgrid: { name: 'Dot grid', img: SVGU("<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' shape-rendering='crispEdges'><rect x='7' y='7' width='1' height='1' fill='#fff'/></svg>"), size: '14px 14px', op: 0.2 },
    dots: { name: 'Dots', img: SVGU("<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' shape-rendering='crispEdges' fill='#fff'>" + [2,1,2,2,1,2,3,2,1,2,2,1,2,2,1,3].map(function (z, i) { return "<rect x='" + ((i % 4) * 12 + 6 - z / 2) + "' y='" + (Math.floor(i / 4) * 12 + 6 - z / 2) + "' width='" + z + "' height='" + z + "'/>"; }).join('') + "</svg>"), size: '48px 48px', op: 0.1 },
    linen: { name: 'Linen', img: SVGU("<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><path d='M0 6L6 0M-1 1L1 -1M5 7L7 5' stroke='#fff' stroke-width='.4'/><path d='M0 0L6 6' stroke='#fff' stroke-width='.25'/></svg>"), size: '6px 6px', op: 0.12 },
    pinstripe: { name: 'Pinstripe', img: SVGU("<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'><path d='M-2 16L16 -2' stroke='#fff' stroke-width='.5'/></svg>"), size: '14px 14px', op: 0.12 },
    shards: { name: 'Shards', img: SVGU("<svg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 360 360' preserveAspectRatio='none'><path d='M0 0L180 0L60 140Z' fill='#fff' fill-opacity='0.5'/><path d='M180 0L360 0L260 120Z' fill='#fff' fill-opacity='0.25'/><path d='M60 140L260 120L150 300Z' fill='#fff' fill-opacity='0.35'/><path d='M260 120L360 0L360 220Z' fill='#fff' fill-opacity='0.15'/><path d='M0 140L60 140L0 360Z' fill='#fff' fill-opacity='0.2'/><path d='M150 300L360 220L360 360Z' fill='#fff' fill-opacity='0.4'/><path d='M0 360L150 300L180 360Z' fill='#fff' fill-opacity='0.12'/><path d='M60 140L150 300L0 360Z' fill='#fff' fill-opacity='0.08'/></svg>"), size: '100% 100%', op: 0.08 }
  };

  /* Marketing extension tokens (layer 2). Same names in every theme; only values change. */
  window.ALMANAC_MK_SCHEMA = [
    ['--mk-ground', 'Brand ground behind hero and closing band', 'No: marketing only'],
    ['--mk-ground-fg', 'Text on the brand ground', 'No'],
    ['--mk-accent', 'Brand accent on the ground (marks, highlights)', 'No: never a status'],
    ['--mk-accent-ui', 'Links and second-tone type on the page', 'Candidate: maps to --accent'],
    ['--mk-tone2', 'Second tone in two-tone headlines', 'No'],
    ['--mk-display', 'Display family, weight and tracking', 'No: UI stays Schibsted Grotesk'],
    ['--mk-mono', 'Figures and IDs in marketing type', 'Only if the app adopts it'],
    ['--mk-cta-*', 'Marketing CTA, 48px, on page and on ground', 'No: app buttons stay DS'],
    ['--mk-radius', 'CTA and chip radius', 'No'],
    ['--mk-card', 'Marketing card radius (DS site cards are 16)', 'Already DS radius-xl'],
    ['--mk-dur / --mk-ease', 'Hover and enter motion personality', 'No: app motion stays DS'],
    ['--mk-lift', 'Hover lift on CTAs and cards', 'No']
  ];

  var SG = "'Schibsted Grotesk', sans-serif";
  var base = function (o) {
    return Object.assign({
      page: '#FFFFFF', alt: '#F6F6F7', darkPage: '#0C0E12', darkAlt: '#14171D', groundLight: false,
      display: SG, dW: 550, dT: '-0.04em', mono: SG, wmF: SG, wmW: 600, wmT: '0',
      radius: '10px', card: '16px', dur: '150ms', ease: 'cubic-bezier(.23,1,.32,1)', lift: '0px', pattern: 'none', motif: null
    }, o);
  };

  /* Colour palettes from Brand Explorations (23 Oct 2026): [key, label, ground, groundName, accent, accentName, groundGradient?, , light?] */
  window.ALMANAC_PALETTES = [
  ['night-mint', 'Night and mint', '#111216', 'Night', '#5CF2B4', 'Mint']
];

  window.ALMANAC_BRANDS = [
    base({ id: 'current', code: 'v6', name: 'Current Almanac', status: 'Current', statusV: 'success', approved: true,
      summary: 'Connected sparks mark. Deep petrol and aqua (was deep navy, which Nuvo and Kolleno already use). Schibsted Grotesk, PP Watch wordmark.',
      fit: 'Strong on network and AI.', risk: 'The sparks may read as generic.',
      ground: '#062832', groundFg: '#FFFFFF', groundMuted: '#BFDDE3', accent: '#3EE6D2', accentUI: '#0B6F78', ink: '#141414', tone2: '#0B6F78', tone2g: '#3EE6D2',
      ctaBg: '#141414', ctaFg: '#FFFFFF', ctaGBg: '#FFFFFF', ctaGFg: '#141414',
      logo: { lockInk: A + 'ds/logo-wordmark-ink.svg', lockWhite: A + 'ds/logo-wordmark-white.svg', lockRatio: 120 / 13, symInk: A + 'ds/logo-symbol-ink.svg', symWhite: A + 'ds/logo-symbol-white.svg', word: null },
      art: { ground: A + 'vl/constellation.png', kind: 'cover', band: A + 'vl/skyline.png', bandKind: 'skyline' },
      prov: { ground: 'DS', accent: 'DS', accentUI: 'DS', display: 'DS', ctaBg: 'DS', radius: 'DS', dur: 'DS', ease: 'DS', ctaGBg: 'P', groundMuted: 'P', tone2: 'DS', alt: 'DS' } })
  ];
})();
