(function () {
  if (window.__zoomInit) return;
  window.__zoomInit = true;

  var open = null, lastFocus = null, fit = true;

  function build(src, alt) {
    var ov = document.createElement('div');
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', alt || 'Expanded screens');
    ov.style.cssText = 'position:fixed;inset:0;z-index:200;background:rgba(9,11,10,.96);overflow:auto;opacity:0;transition:opacity .18s ease;';

    var pad = document.createElement('div');
    pad.style.cssText = 'min-width:100%;min-height:100%;width:auto;box-sizing:border-box;padding:76px 24px 24px 24px;display:flex;align-items:flex-start;justify-content:flex-start;';
    ov.appendChild(pad);

    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.style.cssText = 'display:block;flex:none;margin:auto;max-width:100%;height:auto;border-radius:12px;border:1px solid rgba(237,239,236,.16);cursor:zoom-in;';
    pad.appendChild(img);

    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:20px;right:20px;display:flex;gap:10px;';

    var zoom = mkBtn('Zoom to full size', '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.2" stroke="currentColor" stroke-width="1.6"/><path d="M12 12l3.4 3.4M8 5.8v4.4M5.8 8h4.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>');
    var close = mkBtn('Close expanded screens', '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>');
    bar.appendChild(zoom);
    bar.appendChild(close);
    ov.appendChild(bar);

    var label = document.createElement('div');
    label.style.cssText = 'position:fixed;top:32px;left:24px;font:400 13px/1.4 inherit;color:#79837C;pointer-events:none;';
    label.textContent = 'Click the image to zoom, drag to pan';
    ov.appendChild(label);

    function setFit(next) {
      fit = next;
      if (fit) {
        pad.style.width = 'auto';
        img.style.maxWidth = '100%';
        img.style.width = Math.max(1, ov.clientWidth - 48) + 'px';
        img.style.cursor = 'zoom-in';
        zoom.setAttribute('aria-label', 'Zoom to full size');
        label.textContent = 'Click the image to zoom, drag to pan';
      } else {
        pad.style.width = 'max-content';
        img.style.maxWidth = 'none';
        img.style.width = (img.naturalWidth * 1.6) + 'px';
        img.style.cursor = 'grab';
        zoom.setAttribute('aria-label', 'Fit image to screen');
        label.textContent = 'Drag to pan, click to fit';
      }
    }

    img.addEventListener('click', function (e) { if (!dragged) { e.stopPropagation(); setFit(!fit); } });
    zoom.addEventListener('click', function () { setFit(!fit); });
    close.addEventListener('click', shut);
    ov.addEventListener('click', function (e) { if (e.target === ov || e.target === pad) shut(); });

    // drag to pan
    var down = false, sx = 0, sy = 0, sl = 0, st = 0, dragged = false;
    img.addEventListener('pointerdown', function (e) {
      if (fit) return;
      down = true; dragged = false;
      sx = e.clientX; sy = e.clientY; sl = ov.scrollLeft; st = ov.scrollTop;
      img.style.cursor = 'grabbing';
      img.setPointerCapture(e.pointerId);
    });
    img.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragged = true;
      ov.scrollLeft = sl - dx;
      ov.scrollTop = st - dy;
    });
    img.addEventListener('pointerup', function () { down = false; if (!fit) img.style.cursor = 'grab'; });

    ov.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var f = [zoom, close];
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? f.length - 1 : 1) + f.length) % f.length].focus();
    });

    document.body.appendChild(ov);
    requestAnimationFrame(function () {
      setFit(true);
      ov.style.opacity = '1';
      close.focus();
    });
    return ov;
  }

  function mkBtn(label, svg) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', label);
    b.innerHTML = svg;
    b.style.cssText = 'width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:100px;border:1px solid rgba(237,239,236,.16);background:rgba(15,18,17,.92);color:#EDEFEC;cursor:pointer;';
    return b;
  }

  function shut() {
    if (!open) return;
    var ov = open;
    open = null;
    ov.style.opacity = '0';
    setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 180);
    document.documentElement.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  function show(host) {
    if (open) return;
    var img = host.querySelector('img');
    if (!img) return;
    lastFocus = host;
    fit = true;
    document.documentElement.style.overflow = 'hidden';
    open = build(img.getAttribute('src'), img.getAttribute('alt'));
  }

  document.addEventListener('click', function (e) {
    if (open) return;
    var host = e.target.closest && e.target.closest('[data-zoom]');
    if (host) show(host);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { shut(); return; }
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var a = document.activeElement;
    var host = a && a.closest && a.closest('[data-zoom]');
    if (host && !open) { e.preventDefault(); show(host); }
  });
})();
