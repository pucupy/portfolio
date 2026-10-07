/* Shared portfolio effects: mono metadata, drawn dividers, dot-matrix numbers, count-up figures,
   section numbers, reading progress, page transitions, command menu (⌘K or /), live footer status. */
(function () {
  if (window.__siteFx) return; window.__siteFx = true;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MONO = "'Fragment Mono',ui-monospace,SFMono-Regular,Menlo,monospace";

  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Fragment+Mono:ital@0;1&display=swap';
  document.head.appendChild(font);

  var css = document.createElement('style');
  css.textContent = [
    (window.top === window && !/\.dc\.html$/.test(decodeURIComponent(location.pathname)) ? '@view-transition{navigation:auto}\n::view-transition-old(root),::view-transition-new(root){animation-duration:.22s}' : ''),
    '.fx-mono{font-family:' + MONO + ' !important;font-weight:400 !important}',
    '.fx-num{font-size:13px !important;letter-spacing:0 !important}',
    '.fx-rule{position:relative;background-image:none !important}',
    '.fx-rule::after{content:"";position:absolute;left:0;right:0;top:0;height:3px;pointer-events:none;background-image:radial-gradient(circle,rgba(237,239,236,.2) 1px,transparent 1.3px);background-size:6px 3px;background-repeat:repeat-x;clip-path:inset(0 100% 0 0);transition:clip-path 1.1s cubic-bezier(.2,.7,.2,1)}',
    '.fx-rule.fx-b::after{top:auto;bottom:0}',
    '.fx-rule.fx-in::after{clip-path:inset(0 0 0 0)}',
    '.fx-dm svg circle.on{transition:fill-opacity .25s ease}',
    '.fx-sec{font-family:' + MONO + ';font-size:12px;line-height:1;color:#79837C;margin:0 0 14px 0;display:flex;gap:10px;align-items:center;font-variant-numeric:tabular-nums}',
    '.fx-sec b{font-weight:400;color:#6FCB92}',
    '.fx-progress{position:absolute;left:0;right:0;bottom:-1px;height:2px;background:#6FCB92;transform-origin:left;transform:scaleX(0);pointer-events:none}',
    '.fx-kbtn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;min-width:44px;padding:0 10px;margin-left:4px;background:transparent;border:1px solid rgba(237,239,236,.14);border-radius:8px;color:#A2ACA5;font-family:' + MONO + ';font-size:12px;cursor:pointer;transition:color .2s ease,border-color .2s ease}',
    '.fx-kbtn:hover,.fx-kbtn:focus-visible{color:#EDEFEC;border-color:rgba(111,203,146,.5)}',
    '.fx-cmd{width:min(560px,calc(100vw - 32px));max-height:min(520px,calc(100vh - 120px));margin:12vh auto auto;padding:0;background:#151918;color:#EDEFEC;border:1px solid rgba(237,239,236,.14);border-radius:12px;box-shadow:0 24px 80px rgba(0,0,0,.5);overflow:hidden}',
    '.fx-cmd::backdrop{background:rgba(8,10,9,.6);backdrop-filter:blur(4px)}',
    '.fx-cmd input{width:100%;box-sizing:border-box;padding:18px 20px;background:transparent;border:0;border-bottom:1px solid rgba(237,239,236,.09);color:#EDEFEC;font:inherit;font-size:16px;outline:none}',
    '.fx-cmd input::placeholder{color:#79837C}',
    '.fx-cmd ul{list-style:none;margin:0;padding:8px;max-height:400px;overflow:auto}',
    '.fx-cmd li{display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:44px;padding:0 12px;border-radius:8px;cursor:pointer;font-size:15px;color:#A2ACA5}',
    '.fx-cmd li span:last-child{font-family:' + MONO + ';font-size:12px;color:#79837C}',
    '.fx-cmd li[aria-selected="true"]{background:rgba(111,203,146,.1);color:#EDEFEC}',
    '.fx-cmd .fx-empty{padding:16px 12px;color:#79837C;font-size:14px}',
    '.fx-status{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;padding-top:12px;font-family:' + MONO + ';font-size:12px;color:#79837C;font-variant-numeric:tabular-nums}',
    '.fx-status i{width:7px;height:7px;border-radius:50%;background:#6FCB92;display:inline-block;animation:fxPulse 2.4s ease-in-out infinite}',
    '@keyframes fxPulse{0%,100%{opacity:1}50%{opacity:.35}}',
    '@media (prefers-reduced-motion:reduce){.fx-rule::after{clip-path:none;transition:none}.fx-status i{animation:none}::view-transition-old(root),::view-transition-new(root){animation:none}}'
  ].join('\n');
  document.head.appendChild(css);

  function onView(els, fn, margin) {
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(fn); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); fn(e.target); } });
    }, { rootMargin: margin || '0px 0px -10% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function rules() {
    var els = [].slice.call(document.querySelectorAll('main [style*="6px 3px"], footer [style*="6px 3px"]'));
    els.forEach(function (el) {
      el.classList.add('fx-rule');
      if (/background-position:\s*0(px)?\s+100%/.test(el.getAttribute('style'))) el.classList.add('fx-b');
    });
    onView(els, function (el) { el.classList.add('fx-in'); });
  }

  function dotMatrix() {
    var imgs = [].slice.call(document.querySelectorAll('img[src*="images/dm-"]'));
    imgs.forEach(function (img) {
      fetch(img.getAttribute('src')).then(function (r) { return r.text(); }).then(function (t) {
        var wrap = document.createElement('span');
        wrap.className = 'fx-dm';
        wrap.setAttribute('aria-hidden', 'true');
        wrap.style.cssText = 'display:block;width:' + (img.width || 44) + 'px;height:' + (img.height || 28) + 'px;' + (img.style.marginBottom ? 'margin-bottom:' + img.style.marginBottom + ';' : '');
        wrap.innerHTML = t;
        var svg = wrap.querySelector('svg');
        svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%');
        var on = [].slice.call(svg.querySelectorAll('circle[fill-opacity="1"]'));
        on.forEach(function (c, i) {
          c.classList.add('on');
          if (!reduce) { c.setAttribute('fill-opacity', '.12'); c.style.transitionDelay = (i * 22) + 'ms'; }
        });
        img.style.display = 'none';
        img.parentNode.insertBefore(wrap, img.nextSibling);
        onView([wrap], function () { on.forEach(function (c) { c.setAttribute('fill-opacity', '1'); }); });
      }).catch(function () {});
    });
  }

  function countUp() {
    var els = [].slice.call(document.querySelectorAll('[data-lead-figure] > span:first-child, [style*="clamp(40px,6vw,60px)"]'));
    if (reduce) return;
    els.forEach(function (el) {
      var src = el.textContent;
      if (!/\d/.test(src)) return;
      var parts = src.split(/(\d[\d,]*(?:\.\d+)?)/);
      el.setAttribute('aria-label', src);
      el.style.fontVariantNumeric = 'tabular-nums';
      function frame(p) {
        el.textContent = parts.map(function (s, i) {
          if (i % 2 === 0) return s;
          var n = parseFloat(s.replace(/,/g, '')), v = Math.round(n * p);
          return s.indexOf(',') > -1 ? v.toLocaleString('en-GB') : String(v);
        }).join('');
      }
      frame(0);
      onView([el], function () {
        var t0 = performance.now(), d = 1100;
        (function tick(now) {
          var p = Math.min(1, (now - t0) / d); p = 1 - Math.pow(1 - p, 3);
          frame(p);
          if (p < 1) requestAnimationFrame(tick); else el.textContent = src;
        })(t0);
      });
    });
  }

  function sections() {
    if (!document.querySelector('main h1') || document.querySelector('#work')) return;
    var hs = [].slice.call(document.querySelectorAll('main h2')).filter(function (h) {
      var s = getComputedStyle(h);
      return s.position !== 'absolute' && s.textTransform !== 'uppercase' && parseFloat(s.fontSize) >= 22;
    });
    if (hs.length < 3) return;
    var total = String(hs.length).padStart(2, '0');
    hs.forEach(function (h, i) {
      var tag = document.createElement('div');
      tag.className = 'fx-sec';
      tag.setAttribute('aria-hidden', 'true');
      tag.innerHTML = '<b>' + String(i + 1).padStart(2, '0') + '</b><span>/ ' + total + '</span>';
      if (h.style.maxWidth) tag.style.maxWidth = h.style.maxWidth;
      h.parentNode.insertBefore(tag, h);
    });
  }

  function progress() {
    var header = document.querySelector('header');
    if (!header || document.querySelector('#work') || !document.querySelector('main h1')) return;
    if (getComputedStyle(header).position === 'static') header.style.position = 'relative';
    var bar = document.createElement('div');
    bar.className = 'fx-progress';
    bar.setAttribute('aria-hidden', 'true');
    header.appendChild(bar);
    var raf = 0;
    function upd() {
      raf = 0;
      var max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, scrollY / max) : 0) + ')';
    }
    addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(upd); }, { passive: true });
    upd();
  }

  var ITEMS = [
    ['Home', 'index.html', 'Page'], ['About', 'about.html', 'Page'],
    ['meisai.io redesign', 'meisai.html', 'Case study'], ['Yapily Hosted Pages', 'hosted-pages.html', 'Case study'],
    ['Yapily Console', 'console.html', 'Case study'], ['Yapily Design Systems', 'design-systems-np.html', 'Case study'],
    ['Yapily Brand & Website', 'brand-website.html', 'Case study'], ['HeadBox', 'headbox.html', 'Case study'],
    ['Su4erheroes', 'su4erheroes.html', 'Earlier work'], ['Payfriendz', 'payfriendz.html', 'Earlier work'],
    ['Research practice', 'research-practice-np.html', 'Practice'], ['Creative archive', 'creative-archive.html', 'Archive'],
    ['Copy email address', 'copy', 'Action'], ['Download CV (PDF)', 'cv/Alejandro-Velazquez-CV.pdf', 'Download'],
    ['LinkedIn', 'https://www.linkedin.com/in/velazquezalejandro/', 'External']
  ];

  function command() {
    var dlg = document.createElement('dialog');
    dlg.className = 'fx-cmd';
    dlg.setAttribute('aria-label', 'Command menu');
    dlg.innerHTML = '<input type="text" role="combobox" aria-expanded="true" aria-controls="fx-cmd-list" aria-label="Search pages and actions" placeholder="Jump to a case study, or type “email”…" autocomplete="off" spellcheck="false"><ul id="fx-cmd-list" role="listbox"></ul>';
    document.body.appendChild(dlg);
    var input = dlg.querySelector('input'), list = dlg.querySelector('ul'), sel = 0, shown = [];
    function render() {
      var q = input.value.trim().toLowerCase();
      shown = ITEMS.filter(function (it) { return !q || (it[0] + ' ' + it[2]).toLowerCase().indexOf(q) > -1; });
      sel = Math.min(sel, Math.max(0, shown.length - 1));
      list.innerHTML = shown.length ? shown.map(function (it, i) {
        return '<li role="option" id="fx-o' + i + '" aria-selected="' + (i === sel) + '"><span>' + it[0].replace(/&/g, '&amp;') + '</span><span>' + it[2] + '</span></li>';
      }).join('') : '<div class="fx-empty">Nothing matches “' + input.value.replace(/</g, '&lt;') + '”.</div>';
      input.setAttribute('aria-activedescendant', shown.length ? 'fx-o' + sel : '');
    }
    function run(it) {
      if (!it) return;
      if (it[1] === 'copy') {
        (navigator.clipboard ? navigator.clipboard.writeText('aleuxuk@gmail.com') : Promise.reject()).then(function () {
          input.value = ''; input.placeholder = 'Email copied: aleuxuk@gmail.com'; render();
        }, function () { location.href = 'mailto:aleuxuk@gmail.com'; });
        return;
      }
      dlg.close();
      if (/^https?:/.test(it[1])) window.open(it[1], '_blank', 'noopener'); else location.href = it[1];
    }
    function open() { input.value = ''; input.placeholder = 'Jump to a case study, or type “email”…'; sel = 0; render(); dlg.showModal(); input.focus(); }
    input.addEventListener('input', function () { sel = 0; render(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, shown.length); render(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + shown.length) % Math.max(1, shown.length); render(); }
      else if (e.key === 'Enter') { e.preventDefault(); run(shown[sel]); }
    });
    list.addEventListener('click', function (e) { var li = e.target.closest('li'); if (li) run(shown[+li.id.slice(4)]); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    addEventListener('keydown', function (e) {
      var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement && document.activeElement.tagName) || (document.activeElement && document.activeElement.isContentEditable);
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing && !dlg.open)) { e.preventDefault(); dlg.open ? dlg.close() : open(); }
    });
    var nav = document.querySelector('header nav');
    if (nav) {
      var mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'fx-kbtn';
      b.setAttribute('aria-label', 'Open command menu');
      b.setAttribute('aria-keyshortcuts', mac ? 'Meta+K' : 'Control+K');
      b.textContent = mac ? '⌘K' : 'Ctrl K';
      b.addEventListener('click', open);
      nav.appendChild(b);
    }
  }

  function status() {
    var footer = document.querySelector('footer');
    if (!footer) return;
    var row = document.createElement('div');
    row.className = 'fx-status';
    row.innerHTML = '<span style="display:inline-flex;align-items:center;gap:8px;"><i aria-hidden="true"></i>Open to product design roles</span><span aria-hidden="true">·</span><span>London <time></time></span>';
    footer.appendChild(row);
    var t = row.querySelector('time');
    function tick() {
      var s = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' });
      t.textContent = s; t.setAttribute('datetime', s);
    }
    tick(); setInterval(tick, 20000);
  }

  function mono() {
    var GREY = 'rgb(121, 131, 124)';
    [].slice.call(document.querySelectorAll('main *, footer *, header *')).forEach(function (el) {
      if (el.closest('.fx-cmd, svg, h1, h2:not([style*="uppercase"]), h3:not([style*="uppercase"])')) return;
      var s = getComputedStyle(el);
      if (s.color !== GREY) return;
      var ls = parseFloat(s.letterSpacing) || 0;
      var isRowNum = el.getAttribute('aria-hidden') === 'true' && el.tagName === 'SPAN' && /^\d\d$/.test(el.textContent.trim());
      var isMeta = el.closest('.split') && el.parentElement && el.parentElement.matches('.split>div:first-child');
      if (s.textTransform === 'uppercase' || ls > 0.5 || isRowNum || isMeta) {
        el.classList.add('fx-mono');
        if (isRowNum || isMeta) el.classList.add('fx-num');
      }
    });
  }


  function startField(cv) {
    var ctx = cv.getContext('2d'), host = cv.parentNode, CELL = 8, AMP = 52;
    var noise = function (x, y) {
      return Math.sin(x * 0.055 + y * 0.10) * 0.55 + Math.sin(x * 0.019 - y * 0.16 + 1.3) * 0.32
        + Math.sin((x * 0.11 + y * 0.037) + 2.6) * 0.20 + Math.sin(x * 0.007 + y * 0.28 + 4.1) * 0.13;
    };
    var w = 0, h = 0, dpr = 1, pts = [];
    var build = function () {
      var rect = cv.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      w = rect.width; h = rect.height; dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = [];
      var cols = Math.max(2, Math.round(w / CELL)), rows = Math.max(2, Math.round(h / CELL));
      var sx = w / (cols - 1), sy = h / (rows - 1);
      for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++) {
        var n = noise(i, j), y = j * sy + n * AMP;
        if (y < -AMP || y > h + AMP) continue;
        var ridge = Math.pow(1 / (1 + Math.abs(noise(i, j + 1) - n) * AMP / sy * 2.6), 1.6);
        pts.push({ x: i * sx, y: y, a: 0.035 + ridge * 0.36, r: 0.42 + ridge * 0.9, p: i * 0.19 + j * 0.11 });
      }
      return true;
    };
    var ptr = { x: -9999, y: -9999, on: 0, target: 0 }, R = 190;
    var draw = function (t) {
      ctx.clearRect(0, 0, w, h);
      for (var n = 0; n < pts.length; n++) {
        var p = pts[n], beat = 0.82 + 0.26 * Math.sin(p.p - t * 0.0012), a = p.a * beat, r = p.r * (0.9 + 0.22 * beat);
        if (ptr.on > 0.01) {
          var d = Math.sqrt((p.x - ptr.x) * (p.x - ptr.x) + (p.y - ptr.y) * (p.y - ptr.y));
          if (d < R) { var f = (1 - d / R) * (1 - d / R) * ptr.on; a = Math.min(0.68, a + f * 0.46); r += f * (0.55 + 0.75 * (0.5 + 0.5 * Math.sin(p.x * 0.05 + p.y * 0.07))); }
        }
        ctx.fillStyle = 'rgba(111,203,146,' + a.toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.2832); ctx.fill();
      }
    };
    if (!build()) { requestAnimationFrame(function () { startField(cv); }); return; }
    draw(0);
    addEventListener('resize', function () { if (build()) draw(performance.now()); });
    if (reduce) return;
    host.addEventListener('pointermove', function (e) { var rc = cv.getBoundingClientRect(); ptr.x = e.clientX - rc.left; ptr.y = e.clientY - rc.top; ptr.target = 1; });
    host.addEventListener('pointerleave', function () { ptr.target = 0; });
    var visible = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(cv);
    (function tick(now) { requestAnimationFrame(tick); if (!visible) return; ptr.on += (ptr.target - ptr.on) * 0.12; draw(now); })(performance.now());
  }

  function addField(host, mask) {
    if (!host || host.querySelector('canvas')) return;
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    var cv = document.createElement('canvas');
    cv.className = 'fx-field';
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.7;-webkit-mask-image:' + mask + ';mask-image:' + mask + ';';
    [].forEach.call(host.children, function (c) { if (getComputedStyle(c).position === 'static') { c.style.position = 'relative'; c.style.zIndex = '1'; } });
    host.insertBefore(cv, host.firstChild);
    startField(cv);
  }

  function fields() {
    addField(document.querySelector('footer'), 'radial-gradient(ellipse 70% 90% at 50% 60%,#000 25%,transparent 80%)');
    var main = document.querySelector('main');
    if (main && !main.querySelector('canvas')) {
      var hero = main.querySelector('section');
      if (hero && hero.querySelector('h1')) addField(hero, 'radial-gradient(ellipse 75% 85% at 70% 45%,#000 20%,transparent 80%)');
    }
  }

  function init() {
    [mono, fields, rules, dotMatrix, countUp, sections, command, status].forEach(function (f) { try { f(); } catch (e) { console.warn('site-fx', f.name, e); } });
  }
  (function boot() {
    if (!document.querySelector('main') || document.readyState === 'loading') return setTimeout(boot, 80);
    setTimeout(init, 60);
  })();
})();
