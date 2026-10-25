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
  ['night-mint', 'Night and mint', '#111216', 'Night', '#5CF2B4', 'Mint'],
  ['mono', 'Black and white', '#0B0B0C', 'Black', '#FFFFFF', 'White'],
  
  ['obsidian-aqua', 'Obsidian and aqua', '#0C0D10', 'Obsidian', '#3EE6D2', 'Aqua'],
  ['teal-cyan', 'Deep teal and cyan', '#0F2A2E', 'Deep teal', '#5EE0F0', 'Cyan'],
  ['petrol-apricot', 'Petrol and apricot', '#062832', 'Petrol', '#FF8447', 'Apricot'],
  ['graphite-amber', 'Graphite and amber', '#15181D', 'Graphite', '#FFB224', 'Amber'],
  ['slate-ice', 'Slate and ice', '#1C232B', 'Slate', '#CFF6FF', 'Ice'],
  ['petrol-aqua', 'Petrol and aqua', '#062832', 'Petrol', '#3EE6D2', 'Aqua'],
  ['oxblood-gold', 'Oxblood and gold', '#1A0B0E', 'Oxblood', '#FFB224', 'Gold'],
  ['duo-teal-coral', 'Duotone · teal and coral', '#14616B', 'Teal', '#FF8A6A', 'Coral'],
  ['tonal-petrol', 'Tonal · petrol', '#062832', 'Petrol', '#8FD3E0', 'Petrol tint'],
  ['g-ocean', 'Gradient · ocean', '#062832', 'Petrol', '#3EE6D2', 'Aqua', 'radial-gradient(60% 70% at 80% 25%, rgba(62,230,210,.35) 0%, transparent 70%), radial-gradient(55% 60% at 20% 85%, rgba(14,140,154,.45) 0%, transparent 70%), #062832'],
  ['g-petrol-amber', 'Gradient · petrol and amber', '#071A20', 'Deep petrol', '#FFB224', 'Amber', 'radial-gradient(55% 65% at 15% 85%, rgba(63,208,224,.34) 0%, transparent 70%), radial-gradient(50% 60% at 85% 80%, rgba(255,178,36,.3) 0%, transparent 70%), #071A20'],
  ['g-softlight', 'Gradient · soft light', '#0B0B0C', 'Black', '#E8E8EA', 'Silver', 'radial-gradient(70% 60% at 70% 15%, rgba(255,255,255,.14) 0%, transparent 70%), radial-gradient(50% 50% at 20% 90%, rgba(255,255,255,.06) 0%, transparent 70%), #0B0B0C'],
  ['retro-amber', 'Retro · terminal amber', '#0B0906', 'Terminal black', '#FFB000', 'Amber'],
  ['retro-cyan', 'Retro · phosphor cyan', '#03090B', 'Phosphor black', '#5CF7FF', 'Phosphor cyan'],
  ['g-crt', 'Gradient · CRT', '#05080A', 'CRT black', '#5CF7FF', 'Phosphor cyan', 'repeating-linear-gradient(0deg, rgba(255,255,255,.028) 0 1px, transparent 1px 3px), radial-gradient(70% 60% at 70% 40%, rgba(92,247,255,.16) 0%, transparent 70%), radial-gradient(50% 50% at 15% 90%, rgba(255,106,19,.1) 0%, transparent 70%), #05080A'],
  ['g-holo-ice', 'Holographic · ice', '#11161C', 'Night', '#BFEFFF', 'Ice', 'radial-gradient(58% 68% at 74% 38%, rgba(0,0,0,0) 0%, #11161C 84%), radial-gradient(26% 30% at 74% 38%, #123344 0%, rgba(0,0,0,0) 100%), linear-gradient(115deg, #123344 0%, #2E3A24 30%, #3E2A26 55%, #14393A 80%, #1B2E44 100%), #11161C'],
  ['g-holo-peach', 'Holographic · pearl', '#161214', 'Pearl black', '#FFC9B8', 'Peach pearl', 'radial-gradient(58% 68% at 72% 40%, rgba(0,0,0,0) 0%, #161214 84%), radial-gradient(26% 30% at 72% 40%, #3c2424 0%, rgba(0,0,0,0) 100%), linear-gradient(115deg, #3C2424 0%, #3A3420 30%, #123A3C 60%, #3A2430 85%, #22343A 100%), #161214'],
  ['g-holo-foil', 'Holographic · foil', '#121619', 'Graphite', '#9FE3F5', 'Foil cyan', 'radial-gradient(58% 68% at 70% 42%, rgba(0,0,0,0) 0%, #121619 84%), radial-gradient(26% 30% at 70% 42%, #084154 0%, rgba(0,0,0,0) 100%), linear-gradient(115deg, #084154 0%, #4A4020 30%, #532626 55%, #0E4A3C 80%, #16304E 100%), #121619'],
];

  window.ALMANAC_BRANDS = [
    base({ id: 'current', code: 'v6', name: 'Current Almanac', status: 'Current', statusV: 'success', approved: true,
      summary: 'Connected sparks mark. Deep petrol and aqua (was deep navy, which Nuvo and Kolleno already use). Schibsted Grotesk, PP Watch wordmark.',
      fit: 'Strong on network and AI.', risk: 'The sparks may read as generic.',
      ground: '#062832', groundFg: '#FFFFFF', groundMuted: '#BFDDE3', accent: '#3EE6D2', accentUI: '#0B6F78', ink: '#141414', tone2: '#0B6F78', tone2g: '#3EE6D2',
      ctaBg: '#141414', ctaFg: '#FFFFFF', ctaGBg: '#FFFFFF', ctaGFg: '#141414',
      logo: { lockInk: A + 'ds/logo-wordmark-ink.svg', lockWhite: A + 'ds/logo-wordmark-white.svg', lockRatio: 120 / 13, symInk: A + 'ds/logo-symbol-ink.svg', symWhite: A + 'ds/logo-symbol-white.svg', word: null },
      art: { ground: A + 'vl/constellation.png', kind: 'cover', band: A + 'vl/skyline.png', bandKind: 'skyline' },
      prov: { ground: 'DS', accent: 'DS', accentUI: 'DS', display: 'DS', ctaBg: 'DS', radius: 'DS', dur: 'DS', ease: 'DS', ctaGBg: 'P', groundMuted: 'P', tone2: 'DS', alt: 'DS' } }),

    base({ id: 'ledger', code: '13a', name: 'Ledger', status: 'Exploration', statusV: 'warning',
      summary: 'Current Almanac rebalanced for credit teams: warm paper ground, petrol ink, aqua used sparingly. No glow, no texture, paper-like cards.',
      fit: 'Closest to the light, spreadsheet-and-ERP world credit controllers work in. Reads as accurate and defensible.', risk: 'Quieter; can feel plain if the product screens are not strong.',
      ground: '#F6F6F7', groundLight: true, groundFg: '#0E2A30', groundMuted: '#45585C', accent: '#0B6F78', accentUI: '#0B6F78', ink: '#0E2A30', tone2: '#0B6F78', tone2g: '#0B6F78',
      page: '#FFFFFF', alt: '#F6F6F7', darkPage: '#0E1416', darkAlt: '#151D20',
      dW: 500, dT: '-0.03em',
      ctaBg: '#0E2A30', ctaFg: '#FFFFFF', ctaGBg: '#0E2A30', ctaGFg: '#FFFFFF', radius: '6px', card: '8px', dur: '150ms', pattern: 'none',
      logo: { lockInk: A + 'ds/logo-wordmark-ink.svg', lockWhite: A + 'ds/logo-wordmark-white.svg', lockRatio: 120 / 13, symInk: A + 'ds/logo-symbol-ink.svg', symWhite: A + 'ds/logo-symbol-white.svg', word: null },
      art: { ground: A + 'vl/constellation.png', kind: 'cover', band: A + 'vl/skyline.png', bandKind: 'skyline' },
      prov: { ground: 'P', accent: 'DS', accentUI: 'DS', display: 'DS', ctaBg: 'P', radius: 'P', card: 'P', page: 'P', alt: 'P', tone2: 'DS' } }),

    base({ id: 'softlight', code: '11f', name: 'Soft light', status: 'Exploration', statusV: 'warning',
      summary: 'The person A as an artwork: one ribbon folding around a person, light and shadow with film grain.',
      fit: 'The most crafted of the set. Human: who is behind the company.', risk: 'A rendered artwork cannot be the only logo; it needs the flat mark beside it, and the grain must not band.',
      ground: '#0B0B0C', groundFg: '#FFFFFF', groundMuted: '#C8C9CD', accent: '#E8E8EA', accentUI: '#0B0B0C', ink: '#111317', tone2: '#5E6168', tone2g: '#9A9CA3',
      darkPage: '#0B0B0C', darkAlt: '#151517',
      display: "'Outfit', sans-serif", dW: 500, dT: '-0.035em', wmF: "'Outfit', sans-serif", wmW: 500, wmT: '-0.03em',
      ctaBg: '#0B0B0C', ctaFg: '#FFFFFF', ctaGBg: '#E8E8EA', ctaGFg: '#0B0B0C', radius: '999px', dur: '320ms', ease: 'cubic-bezier(.22,.61,.36,1)', pattern: 'grain',
      logo: { symInk: A + 'person/softlight-black.png', symWhite: A + 'person/softlight-white.png', word: 'almanac' },
      art: { ground: A + 'person/softlight-mark-white.png', kind: 'mark', band: A + 'person/softlight-mark-white.png', light: A + 'person/softlight-mark.png' },
      prov: { ground: 'E', accent: 'E', display: 'E', pattern: 'E', ctaBg: 'P', radius: 'P', dur: 'P', tone2: 'P', groundMuted: 'P' } }),

    base({ id: 'softwhite', code: '12c', name: 'Soft light on white', status: 'Exploration', statusV: 'warning',
      summary: 'The same soft-light A on a white ground. Tests whether the artwork survives without black behind it.',
      fit: 'Quieter than the black version and closer to the product, which is white and calm.', risk: 'The pale ribbon has low contrast on white; the mark may need a darker outer edge for print.',
      ground: '#FFFFFF', groundLight: true, groundFg: '#17181B', groundMuted: '#4A4C52', accent: '#8A8D94', accentUI: '#17181B', ink: '#17181B', tone2: '#8A8D94', tone2g: '#8A8D94',
      alt: '#F5F5F4', darkPage: '#17181B', darkAlt: '#1F2024',
      display: "'Outfit', sans-serif", dW: 500, dT: '-0.035em', wmF: "'Outfit', sans-serif", wmW: 500, wmT: '-0.03em',
      ctaBg: '#17181B', ctaFg: '#FFFFFF', ctaGBg: '#17181B', ctaGFg: '#FFFFFF', radius: '999px', dur: '320ms', ease: 'cubic-bezier(.22,.61,.36,1)', pattern: 'grain',
      logo: { symInk: A + 'person/softlight-black.png', symWhite: A + 'person/softlight-white.png', word: 'almanac' },
      art: { ground: A + 'person/softlight-mark.png', kind: 'mark', band: A + 'person/softlight-mark.png', dark: A + 'person/softlight-mark-white.png' },
      prov: { ground: 'E', accent: 'E', display: 'E', pattern: 'E', ctaBg: 'P', radius: 'P', tone2: 'E (headline scale only, 3.3:1)', alt: 'P' } }),

    base({ id: 'grid', code: '4b', name: 'The grid', status: 'Alternative', statusV: 'muted',
      summary: 'Grid mark built from cells; the last check lights up. Ink and one signal colour. Geist.',
      fit: 'Strongest literal fit for product data agents can find and read.', risk: 'Drop recommended: black and lime is already used by Fazeshift and Ramp.',
      ground: '#111317', groundFg: '#FFFFFF', groundMuted: '#C4C7CE', accent: '#D7F25C', accentUI: '#4D6600', ink: '#111317', tone2: '#4D6600', tone2g: '#D7F25C',
      darkPage: '#0B0C0F', darkAlt: '#16181D',
      display: "'Geist', sans-serif", dW: 600, dT: '-0.045em', mono: "'Geist Mono', monospace", wmF: "'Geist', sans-serif", wmW: 600, wmT: '-0.04em',
      ctaBg: '#111317', ctaFg: '#FFFFFF', ctaGBg: '#D7F25C', ctaGFg: '#111317', radius: '4px', card: '6px', dur: '90ms', ease: 'steps(3, end)', pattern: 'dots',
      logo: { symInk: A + 'marks6/grid-black.svg', symWhite: A + 'marks6/grid-reverse.svg', word: 'almanac' },
      art: { ground: A + 'marks6/grid-reverse.svg', kind: 'mark-crop', band: A + 'marks6/grid-reverse.svg' },
      prov: { ground: 'E', accent: 'E', accentUI: 'E', display: 'E', mono: 'E', pattern: 'E (Pixel matrix)', ctaGBg: 'P', radius: 'P', card: 'P', dur: 'P', ease: 'P' } }),

    base({ id: 'rule', code: '8b', name: 'The rule', status: 'Exploration', statusV: 'warning',
      summary: 'Wordmark-led: one 20° cut applied to every A, like one credit policy applied to every company. Oxblood and gold (was vermilion, close to Creditsafe, Chaser and Stuut). Familjen Grotesk.',
      fit: 'The uniqueness lives in the name itself.', risk: 'Check the cut does not read as a broken A at small sizes.',
      ground: '#5B1A24', groundFg: '#FFFFFF', groundMuted: '#F3D9D2', accent: '#FFC24B', accentUI: '#5B1A24', ink: '#2B0D10', tone2: '#5B1A24', tone2g: '#FFC24B',
      darkPage: '#14070A', darkAlt: '#24100F',
      display: "'Familjen Grotesk', sans-serif", dW: 600, dT: '-0.03em', wmF: "'Familjen Grotesk', sans-serif", wmW: 700, wmT: '0',
      ctaBg: '#5B1A24', ctaFg: '#FFFFFF', ctaGBg: '#FFC24B', ctaGFg: '#2B0D10', radius: '0px', card: '0px', dur: '200ms', ease: 'cubic-bezier(.4,0,.2,1)', motif: 'slant',
      logo: { lockInk: A + 'marks8/wm-cut-ink.svg', lockWhite: A + 'marks8/wm-cut-white.svg', lockRatio: 674 / 104, symInk: A + 'marks8/cut-black.svg', symWhite: A + 'marks8/cut-white.svg', word: null },
      art: { ground: A + 'marks8/wm-cut-white.svg', kind: 'wordmark', band: A + 'marks8/cut-white.svg' },
      prov: { ground: 'E', accent: 'E', accentUI: 'E', display: 'E', motif: 'E (20° slant)', ctaBg: 'P', radius: 'P (square caps)', dur: 'P' } }),

    base({ id: 'spectrum', code: '11c', name: 'Spectrum', status: 'Exploration', statusV: 'warning',
      summary: 'White, softly shaded person A; a cool mint-to-cobalt leg for the supplier and a warm coral-to-apricot leg for the buyer.',
      fit: 'Two-sided by colour: one person, both sides of the trade.', risk: 'Gradient person marks are popular in AI and HR brands; the gradient will date first.',
      ground: '#0E1116', groundFg: '#FFFFFF', groundMuted: '#C3C8D2', accent: '#2EC4B6', accentUI: '#0E1116', ink: '#0E1116', tone2: '#4F5664', tone2g: '#7FE3D6',
      darkPage: '#0A0C10', darkAlt: '#13171E',
      display: "'Outfit', sans-serif", dW: 500, dT: '-0.035em', wmF: "'Outfit', sans-serif", wmW: 500, wmT: '-0.03em',
      ctaBg: '#0E1116', ctaFg: '#FFFFFF', ctaGBg: '#7FE3D6', ctaGFg: '#0E1116', radius: '999px', dur: '260ms', ease: 'cubic-bezier(.22,.61,.36,1)',
      logo: { symInk: A + 'person/spectrum-black.svg', symWhite: A + 'person/spectrum-white.svg', word: 'almanac' },
      art: { ground: A + 'person/spectrum-soft.png', kind: 'mark', band: A + 'person/spectrum-soft.png' },
      prov: { ground: 'E', accent: 'E', display: 'E', ctaGBg: 'E (accentDark)', ctaBg: 'P', radius: 'P', tone2: 'P' } }),

    base({ id: 'twoways', code: '10c', name: 'Two ways', status: 'Exploration', statusV: 'warning',
      summary: 'Two arrows cut through an arch: one across for the exchange, one up for credit growing with trust. Night and mint. Zen Dots.',
      fit: 'Good fit for trade credit: the exchange, and credit earned.', risk: 'Arrows are a well-worn motif; keep them as negative space only. Raspberry has no hex in the exploration.',
      ground: '#111216', groundFg: '#FFFFFF', groundMuted: '#C5C7CE', accent: '#5CF2B4', accentUI: '#111216', ink: '#111216', tone2: '#5A5D66', tone2g: '#5CF2B4',
      darkPage: '#0A0B0E', darkAlt: '#17181D',
      display: "'Zen Dots', sans-serif", dW: 400, dT: '0', wmF: "'Zen Dots', sans-serif", wmW: 400, wmT: '0.02em',
      ctaBg: '#111216', ctaFg: '#FFFFFF', ctaGBg: '#5CF2B4', ctaGFg: '#111216', radius: '999px', dur: '220ms', ease: 'cubic-bezier(.34,1.56,.64,1)', lift: '-2px',
      logo: { symInk: A + 'ai/arrows-ink.svg', symWhite: A + 'ai/arrows-accent.svg', word: 'almanac' },
      art: { ground: A + 'ai/arrows-accent.svg', kind: 'mark-crop', band: A + 'ai/arrows-accent.svg' },
      prov: { ground: 'E', accent: 'E', display: 'E', ctaGBg: 'P', radius: 'P', ease: 'P (overshoot)', lift: 'P', tone2: 'P' } })
  ];
})();
