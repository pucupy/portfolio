// Shared patcher for the shipped GitHub Pages bundles.
// Adds: <html lang>, static <title>/description/OG/Twitter/canonical tags,
// and a <noscript> text-only version of the page extracted from its source DC.
// Used from run_script:  const patch = new Function('ctx', await readFile('tools/a11y-export.js') + ';return patch(ctx);')
function patch(ctx) {
  const { slug, source, bundle, pages, meta } = ctx;
  const BASE = 'https://pucupy.github.io/portfolio/';
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // --- text-only fallback, extracted from the source DC ---
  const cleaned = source
    .replace(/<helmet>[\s\S]*?<\/helmet>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<template[\s\S]*?<\/template>/gi, '');
  const doc = new DOMParser().parseFromString(cleaned, 'text/html');
  doc.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove());
  doc.querySelectorAll('image-slot').forEach((el) => {
    const p = doc.createElement('p');
    p.setAttribute('data-img', '1');
    p.textContent = el.getAttribute('aria-label') || el.getAttribute('placeholder') || '';
    el.replaceWith(p);
  });
  doc.querySelectorAll('img').forEach((el) => {
    const alt = el.getAttribute('alt');
    const p = doc.createElement('p');
    if (alt) { p.setAttribute('data-img', '1'); p.textContent = alt; }
    el.replaceWith(p);
  });
  const out = [];
  const push = (h) => { if (h && out[out.length - 1] !== h) out.push(h); };
  const walk = (el) => {
    for (const node of el.childNodes) {
      if (node.nodeType === 3) {
        const t = node.textContent.replace(/\s+/g, ' ').trim();
        if (t.length > 1 && !/^[·→—–]+$/.test(t)) push('<p>' + esc(t) + '</p>');
        continue;
      }
      if (node.nodeType !== 1) continue;
      const tag = node.tagName.toLowerCase();
      if (tag === 'noscript' || tag === 'style') continue;
      const txt = node.textContent.replace(/\s+/g, ' ').trim();
      const hasElChild = [...node.children].some((c) => c.textContent.trim());
      if (/^h[1-3]$/.test(tag)) { if (txt) push('<' + tag + '>' + esc(txt) + '</' + tag + '>'); continue; }
      if (/^h[4-6]$/.test(tag)) { if (txt) push('<h3>' + esc(txt) + '</h3>'); continue; }
      if (node.getAttribute && node.getAttribute('data-img')) { if (txt) push('<p><em>Image: ' + esc(txt) + '</em></p>'); continue; }
      if (tag === 'a' && !hasElChild) {
        if (txt) push('<p><a href="' + (node.getAttribute('href') || '#').replace('.dc.html', '.html') + '">' + esc(txt) + '</a></p>');
        continue;
      }
      if (!hasElChild) {
        if (txt.length > 1 && !/^[·→—–]+$/.test(txt)) push('<p>' + esc(txt) + '</p>');
        continue;
      }
      walk(node);
    }
  };
  walk(doc.body);

  const nav = pages
    .filter((p) => p.slug !== slug)
    .map((p) => '<a href="' + p.slug + '.html" style="color:#6FCB92;">' + p.nav + '</a>')
    .join(' &nbsp;·&nbsp; ');
  const fallback = '<noscript>\n<div style="max-width:44rem;margin:0 auto;padding:3rem 1.25rem;font-family:'Schibsted Grotesk',-apple-system,BlinkMacSystemFont,sans-serif;font-size:1.0625rem;line-height:1.65;color:#EDEFEC;background:#0F1211;">\n'
    + '<p style="font-size:.8125rem;letter-spacing:.08em;text-transform:uppercase;color:#9aa39f;margin:0 0 2rem;">Text-only version</p>\n'
    + '<nav aria-label="Pages" style="margin:0 0 2.5rem;padding-bottom:1.5rem;border-bottom:1px solid rgba(237,239,236,.16);font-size:.9375rem;">' + nav + '</nav>\n'
    + out.join('\n') + '\n'
    + '<hr style="margin:3rem 0 1.5rem;border:0;border-top:1px solid rgba(237,239,236,.16);">\n'
    + '<p style="font-size:.9375rem;color:#9aa39f;">Alejandro Velázquez &nbsp;·&nbsp; <a href="mailto:aleuxuk@gmail.com" style="color:#6FCB92;">aleuxuk@gmail.com</a></p>\n'
    + '</div>\n</noscript>';

  // --- head metadata ---
  const url = BASE + (slug === 'index' ? '' : slug + '.html');
  const tags = [
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    '  <meta name="description" content="' + esc(meta.description) + '">',
    '  <link rel="canonical" href="' + url + '">',
    '  <meta property="og:type" content="website">',
    '  <meta property="og:site_name" content="Alejandro Velázquez — product design">',
    '  <meta property="og:title" content="' + esc(meta.title) + '">',
    '  <meta property="og:description" content="' + esc(meta.description) + '">',
    '  <meta property="og:url" content="' + url + '">',
    '  <meta property="og:image" content="' + BASE + 'og-card.png">',
    '  <meta property="og:image:width" content="1200">',
    '  <meta property="og:image:height" content="630">',
    '  <meta property="og:image:alt" content="' + esc(meta.title) + '">',
    '  <meta name="twitter:card" content="summary_large_image">',
    '  <meta name="twitter:title" content="' + esc(meta.title) + '">',
    '  <meta name="twitter:description" content="' + esc(meta.description) + '">',
    '  <meta name="twitter:image" content="' + BASE + 'og-card.png">',
    '  <meta name="theme-color" content="#0F1211">',
  ].join('\n');

  let t = bundle;
  t = t.replace(/<html(\s|>)/i, '<html lang="en"$1');
  t = t.replace(/<title>[\s\S]*?<\/title>/i, '<title>' + esc(meta.title) + '</title>\n' + tags);
  t = t.split('.dc.html').join('.html');
  if (!t.includes('Text-only version')) {
    const m = t.match(/<body[^>]*>/i);
    const at = t.indexOf(m[0]) + m[0].length;
    t = t.slice(0, at) + '\n' + fallback + '\n' + t.slice(at);
  }
  return { html: t, blocks: out.length };
}
