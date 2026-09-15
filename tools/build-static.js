// Static-site builder for the portfolio.
// Turns each .dc.html source into a plain HTML page: no React, no in-browser
// transpiler, no base64 payloads. Images become external files; the two bits of
// interactivity (ASCII rain, copy-email button) come from site.js.
globalThis.SITE_PAGES = ['index','about','future-index','headbox','brand-website','su4erheroes','design-systems','research-practice','creative-archive','hosted-pages','console'];

globalThis.HEAD_EXTRA = `<link rel="preload" href="fonts/schibsted-grotesk.ttf" as="font" type="font/ttf" crossorigin>
<style>@font-face{font-family:'Schibsted Grotesk';src:url('fonts/schibsted-grotesk.ttf') format('truetype-variations'),url('fonts/schibsted-grotesk.ttf') format('truetype');font-weight:400 700;font-style:normal;font-display:swap}</style>`;

// attrs of a tag string -> object
globalThis.parseAttrs = (tag) => {
  const out = {};
  for (const m of tag.matchAll(/([:\w-]+)\s*=\s*"([^"]*)"/g)) out[m[1]] = m[2];
  return out;
};

globalThis.buildPage = function (src, opts) {
  const slotFiles = opts.slotFiles || {};   // slotId -> {file,w,h}
  const dims = opts.dims || {};             // path -> {w,h}
  const rewrite = opts.rewrite || {};       // old src -> new src
  let body = src.slice(src.indexOf('<x-dc>') + 6, src.lastIndexOf('</x-dc>'));
  const hStart = body.indexOf('<helmet>');
  const hEnd = body.indexOf('</helmet>');
  let helmet = hStart >= 0 ? body.slice(hStart + 8, hEnd) : '';
  if (hStart >= 0) body = body.slice(0, hStart) + body.slice(hEnd + 9);

  // Head: drop the third-party font round-trip and the image-slot runtime.
  helmet = helmet
    .replace(/<link[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>\s*/g, '')
    .replace(/<script[^>]*image-slot\.js[^>]*><\/script>\s*/g, '')
    .replace(/<script[^>]*support\.js[^>]*><\/script>\s*/g, '');

  // Template holes -> static markup + hooks for site.js
  body = body
    .replace(/ref="\{\{\s*asciiRef\s*\}\}"/g, 'data-rain')
    .replace(/onClick="\{\{\s*copy\s*\}\}"/g, 'data-copy="aleuxuk@gmail.com"')
    .replace(/\{\{\s*copyLabel\s*\}\}/g, 'Copy')
    .replace(/\{\{\s*liveMessage\s*\}\}/g, '');

  // <image-slot> -> plain <img>
  body = body.replace(/<image-slot\b([^>]*?)\/?>(\s*<\/image-slot>)?/g, (whole, attrTxt) => {
    const a = parseAttrs('<x' + attrTxt + '>');
    const rec = slotFiles[a.id];
    if (!rec) return '';
    const radius = a.shape === 'circle' ? '50%' : (a.radius ? a.radius + 'px' : '0');
    const fit = a.fit === 'contain' ? 'contain' : 'cover';
    const alt = (a['aria-label'] || a.placeholder || '').replace(/"/g, '&quot;');
    const outer = (a.style || '').replace(/"/g, '&quot;');
    const wh = rec.w ? ` width="${rec.w}" height="${rec.h}"` : "";
    return `<img src="${rec.file}" alt="${alt}"${wh} loading="lazy" decoding="async" style="${outer};display:block;object-fit:${fit};border-radius:${radius};background:#F4F6F5">`;
  });

  // Point every asset ref at its optimised copy
  for (const [from, to] of Object.entries(rewrite)) {
    body = body.split('"' + from + '"').join('"' + to + '"');
    helmet = helmet.split('"' + from + '"').join('"' + to + '"');
  }

  // Intrinsic dimensions + loading hints. First image on the page loads eagerly.
  let first = true;
  body = body.replace(/<img\b([^>]*)>/g, (whole, attrTxt) => {
    const a = parseAttrs('<x' + attrTxt + '>');
    let extra = '';
    const d = dims[a.src];
    if (d && !a.width && !a.height) extra += ` width="${d.w}" height="${d.h}"`;
    if (!/loading=/.test(attrTxt)) extra += first ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"';
    first = false;
    return '<img' + attrTxt + extra + '>';
  });

  const needsJs = /data-rain|data-copy/.test(body);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0F1211">
${HEAD_EXTRA}
${helmet.trim()}
</head>
<body>
${body.trim()}
${needsJs ? '<script src="site.js" defer></script>' : ''}
<script src="analytics.js" defer></script>
</body>
</html>
`;
};
