/* Portfolio behaviour: copy-email buttons and the hero ASCII rain. ~2kb, deferred. */
(function () {
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('span');
    var live = document.querySelector('[aria-live="polite"]');
    var timer;
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        if (label) label.textContent = 'Copied';
        if (live) live.textContent = 'Email address copied to clipboard';
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (label) label.textContent = 'Copy';
          if (live) live.textContent = '';
        }, 2200);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });


  /* Character grids: the hero portrait (eyes follow the cursor), the waving hand
     written in hello in many languages, and the About board. */
  var REDUCE = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var GRIDS = {
    face: ["1110000000000000000000000000000000000000000000000000000000000011","1000000000000000000000000000011111110000000000000000000000000000","0000000000000000000000001478999999999873100000000000000000000000","0000000000000000000013899999999989999989997100000000000000000000","0000000000000000001699999999999999999999985983000000000000000000","0000000000000000049999999999999999999999999999810000000000000000","0000000000000000799999999999999999999999999999993000000000000000","0000000000000006999999999999999999999999999999999300000000000000","0000000000000059999999999999999999999999999999999920000000000000","0000000000000199999999999999999999999999999999999960000000000000","0000000000000599999999999999999999999999999999999992000000000000","0000000000000799999999999999999999999999999999999993000000000000","0000000000001899999999999999999999999999999999999995000000000000","0000000000001999999999999999999999999999999999999997100000000000","0000000000001999999743211248999999999852111236999997100000000000","0000000000001999961113321110699999996011344441179998100000000000","0000000000001998887777667777889999988887776667778897100000000000","0000000000001566899842112368866666678742111137998664000000000000","0000000003871396997486103976986998688588102986999692178300000000","0000000016211196799999999999978999779999999999998691112710000000","0000000016982188699999999999879999968999999999996881399610000000","0000000003971059779999999998689999986899999999976950169300000000","0000000001854229998766666678999999999877666677799922348100000000","0000000000299518999999999999989999988999999999999815992000000000","0000000000059817999999999999823675128999999999999518930000000000","0000000000002713999999999999796525697999999999999316200000000000","0000000000000001589999968577696969685674879999986100000000000000","0000000000000001894999989776555555555668988999598100000000000000","0000000000000000699859896678888888888876799949996000000000000000","0000000000000000178997999999988989889999999499981000000000000000","0000000000000000017699869999986858589999988995810000000000000000","0000000000000000000658999999999999999999999876000000000000000000","0000000000000000000017585999999999999999483810000000000000000000","0000000000000000000000385858799999996858585100000000000000000000","0000000000000000000000004989984849599989400000000000000000000000","0000000000000000000000000136599999994621000000000000000000000000","0000000000000000000000000000001111100000000000000000000000000000","0000000000000000000000000000000000000000000000000000000000000000"],
    hand: ["0000000000000000000000060000000000000000","0000000000000003990002006600000000000000","0000000000998009999700460160000000000000","0000000006999912899980006026000000000000","0000000000799997089999001606300089920000","0000000001028999907999900000006999980000","0000000299990899995699997000008999800000","0000000089999639999908999900009999300000","0000000006999990799996999998699998000000","0000000000089999839999999999999999000000","0000000009933999991899999999999999400000","0000000079999179999999999999999999700000","0000005106999990799999999999999999800000","0000610610079999989999999999999999800000","0000064036000899999999999999999999800000","0000004600250018999999999999999988000000","0000000046400000189999999999998871000000","0000000000000000002899999999887600000000","0000000000000000000007899988740000000000","0000000000000000000000001100000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000","0000000000000000000000000000000000000000"]
  };
  var DENSE = 'aleuxhireme<3';
  var SPARSE = '\u00b7:.-';
  var HELLOS = 'holahellociaosaluthalloolahejahojmerhabanamasteshalomjamboprivetalohanihaoannyeongbonjourteresveikimoiyassouzdravo';

  function startGrid(cv, kind) {
    var grid = GRIDS[kind], ROWS = grid.length, COLS = grid[0].length;
    var ctx = cv.getContext('2d');
    var hello = kind === 'hand';
    var si = Math.floor(Math.random() * HELLOS.length);
    var glyph = function (v) {
      if (hello) return HELLOS[si++ % HELLOS.length];
      return v < 3 ? SPARSE[Math.floor(Math.random() * SPARSE.length)] : DENSE[Math.floor(Math.random() * DENSE.length)];
    };
    var lv = new Uint8Array(ROWS * COLS), ch = new Array(ROWS * COLS), live = [];
    var eyes = [{ c: 22.0, r: 19.3 }, { c: 41.4, r: 19.3 }];
    var inEye = function (q, r) {
      for (var k = 0; k < eyes.length; k++) {
        var dx = (q - eyes[k].c) / 3.4, dy = (r - eyes[k].r) / 2.1;
        if (dx * dx + dy * dy < 1) return true;
      }
      return false;
    };
    for (var r = 0; r < ROWS; r++) for (var q = 0; q < COLS; q++) {
      var i = r * COLS + q;
      var v = (kind === 'face' && inEye(q, r)) ? 0 : parseInt(grid[r][q], 36);
      lv[i] = v; ch[i] = v ? glyph(v) : '';
      if (v) live.push(i);
    }
    var PAD = kind === 'hand' ? 5 : 0;
    var w = 0, cw = 0, chh = 0, dpr = 1, raf = 0;
    var measure = function () {
      var rect = cv.getBoundingClientRect();
      if (!rect.width) return false;
      w = rect.width;
      cw = w / (COLS + PAD * 2);
      chh = cw * COLS / ROWS;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr);
      cv.height = Math.round((ROWS + (PAD ? 3 : 0)) * chh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = Math.max(6, chh * 0.95).toFixed(1) + 'px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      return true;
    };
    var look = { x: 0, y: 0, tx: 0, ty: 0 };
    if (kind === 'face') {
      window.addEventListener('pointermove', function (e) {
        var rect = cv.getBoundingClientRect();
        var cx = rect.left + rect.width / 2, cy = rect.top + rect.height * 0.5;
        look.tx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width * 0.9)));
        look.ty = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height * 0.9)));
      }, { passive: true });
    }
    var blinkAt = performance.now() + 3000 + Math.random() * 3000, blink = 0;
    var hover = false, hoverStart = 0, handGlow = 0, faceDark = 0;
    if (kind === 'hand') {
      cv.style.cursor = 'pointer';
      cv.addEventListener('pointerenter', function () { hover = true; hoverStart = 0; });
      cv.addEventListener('pointerleave', function () { hover = false; });
    }
    if (kind === 'face') {
      cv.addEventListener('pointerenter', function () { hover = true; });
      cv.addEventListener('pointerleave', function () { hover = false; });
    }
    var frame = function (t) {
      raf = requestAnimationFrame(frame);
      if (!w || Math.abs(cv.getBoundingClientRect().width - w) > 1) { if (!measure()) return; }
      look.x += (look.tx - look.x) * 0.12;
      look.y += (look.ty - look.y) * 0.12;
      if (!REDUCE) {
        if (blink) { if (t > blinkAt) { blink = 0; blinkAt = t + 2600 + Math.random() * 4200; } }
        else if (t > blinkAt) { blink = 1; blinkAt = t + 150; }
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      handGlow += ((hover ? 1 : 0) - handGlow) * 0.1;
      faceDark += ((hover ? 1 : 0) - faceDark) * (REDUCE ? 1 : 0.14);
      if (PAD) {
        ctx.translate(PAD * cw, chh);
        if (hover && !hoverStart) hoverStart = t;
        var since = hover ? t - hoverStart : 0;
        var cycle = (since % 4200) / 1000;
        var wave = (REDUCE || !hover) ? 0 : cycle < 2 ? Math.sin(cycle * Math.PI * 2.2) * 0.26 * Math.min(1, (2 - cycle) * 1.6) : 0;
        var px = COLS * cw * 0.62, py = 19.5 * chh;
        ctx.translate(px, py); ctx.rotate(wave); ctx.translate(-px, -py);
      }
      var alphaBase = kind === 'hand' ? 0.18 : 0.13;
      var alphaSpan = kind === 'hand' ? 0.78 : 0.72;
      for (var m = 0; m < live.length; m++) {
        var ii = live[m], vv = lv[ii], qq = ii % COLS, rr = (ii - qq) / COLS;
        var a = alphaBase + (vv / 9) * alphaSpan;
        var dy = 0, rad = cw * (kind === 'face' ? (0.08 + (vv / 9) * 0.17) : (0.12 + (vv / 9) * 0.24)), aa = a;
        if (kind === 'hand') {
          var nz = Math.sin(qq * 0.055 + rr * 0.10) * 0.55 + Math.sin(qq * 0.019 - rr * 0.16 + 1.3) * 0.32 + Math.sin((qq * 0.11 + rr * 0.037) + 2.6) * 0.20;
          var nz2 = Math.sin(qq * 0.055 + (rr + 1) * 0.10) * 0.55 + Math.sin(qq * 0.019 - (rr + 1) * 0.16 + 1.3) * 0.32 + Math.sin((qq * 0.11 + (rr + 1) * 0.037) + 2.6) * 0.20;
          var ridge = Math.pow(1 / (1 + Math.abs(nz2 - nz) * 0.9 * 2.6), 1.6);
          dy = 0;
          if (vv <= 2) continue;
          rad = cw * (0.04 + Math.pow(vv / 9, 1.4) * 0.26) * (1 + handGlow * 0.4);
          aa = Math.min(1, (0.06 + Math.pow(vv / 9, 1.6) * 0.9) * (1 + handGlow * 0.45));
        }
        if (kind === 'face') {
          var mx = function (c1, c2) { return Math.round(c1 + (c2 - c1) * faceDark); };
          var ha = Math.min(1, aa * (1 + faceDark * 0.9));
          ctx.fillStyle = vv > 8
            ? 'rgba(' + mx(178, 232) + ',' + mx(240, 255) + ',' + mx(200, 240) + ',' + ha.toFixed(2) + ')'
            : 'rgba(' + mx(111, 168) + ',' + mx(203, 245) + ',' + mx(146, 198) + ',' + ha.toFixed(2) + ')';
        } else {
          ctx.fillStyle = (vv > 8 ? 'rgba(178,240,200,' : 'rgba(111,203,146,') + aa.toFixed(2) + ')';
        }
        ctx.beginPath();
        ctx.arc(qq * cw + cw / 2, rr * chh + chh / 2 + dy, rad, 0, 6.2832);
        ctx.fill();
      }
      if (kind === 'face') {
        ctx.shadowColor = 'rgba(111,203,146,0.85)';
        for (var ee = 0; ee < eyes.length; ee++) {
          var e2 = eyes[ee], pc = e2.c + look.x * 1.7, pr = e2.r + look.y * 1.0;
          if (blink) {
            ctx.shadowBlur = 0;
            ctx.fillStyle = 'rgba(111,203,146,0.8)';
            for (var qd = -2; qd <= 2; qd++) { ctx.beginPath(); ctx.arc((e2.c + qd) * cw + cw / 2, e2.r * chh + chh / 2, cw * 0.13, 0, 6.2832); ctx.fill(); }
            continue;
          }
          for (var q2 = -2; q2 <= 2; q2++) for (var r2 = -1; r2 <= 1; r2++) {
            var gq = Math.round(pc) + q2, gr = Math.round(pr) + r2;
            var dx2 = (gq - pc) / 2.0, dy2 = (gr - pr) / 1.15;
            var d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (d2 > 1) continue;
            var a2 = 0.5 + (1 - d2) * 0.5;
            ctx.shadowBlur = 5 * (1 - d2);
            ctx.fillStyle = 'rgba(224,255,235,' + a2.toFixed(2) + ')';
            ctx.beginPath();
            ctx.arc(gq * cw + cw / 2, gr * chh + chh / 2, cw * (d2 < 0.5 ? 0.32 : 0.20), 0, 6.2832);
            ctx.fill();
          }
        }
        ctx.shadowBlur = 0;
      }
    };
    measure();
    raf = requestAnimationFrame(frame);
  }

  Array.prototype.forEach.call(document.querySelectorAll('canvas[data-grid]'), function (cv) {
    startGrid(cv, cv.getAttribute('data-grid'));
  });

  function startField(cv) {
    var ctx = cv.getContext('2d');
    var host = cv.parentNode;
    var CELL = 8, AMP = 52;
    var noise = function (x, y) {
      return Math.sin(x * 0.055 + y * 0.10) * 0.55
        + Math.sin(x * 0.019 - y * 0.16 + 1.3) * 0.32
        + Math.sin((x * 0.11 + y * 0.037) + 2.6) * 0.20
        + Math.sin(x * 0.007 + y * 0.28 + 4.1) * 0.13;
    };

    var w = 0, h = 0, dpr = 1, pts = [];

    var build = function () {
      var rect = cv.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      w = rect.width; h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = [];
      var cols = Math.max(2, Math.round(w / CELL)), rows = Math.max(2, Math.round(h / CELL));
      var stepX = w / (cols - 1), stepY = h / (rows - 1);
      for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++) {
        var x = i * stepX, by = j * stepY;
        var n = noise(i, j);
        var y = by + n * AMP;
        if (y < -AMP || y > h + AMP) continue;
        var slope = Math.abs(noise(i, j + 1) - n) * AMP / stepY;
        var ridge = Math.pow(1 / (1 + slope * 2.6), 1.6);
        pts.push({ x: x, y: y, a: 0.035 + ridge * 0.36, r: 0.42 + ridge * 0.9, p: (i * 0.19 + j * 0.11) });
      }
      return true;
    };
    var ptr = { x: -9999, y: -9999, on: 0, target: 0 };
    var R = 190;
    var draw = function (t) {
      ctx.clearRect(0, 0, w, h);
      for (var n = 0; n < pts.length; n++) {
        var p = pts[n];
        var beat = 0.82 + 0.26 * Math.sin(p.p - t * 0.0012);
        var a = p.a * beat, r = p.r * (0.9 + 0.22 * beat);
        if (ptr.on > 0.01) {
          var d = Math.sqrt((p.x - ptr.x) * (p.x - ptr.x) + (p.y - ptr.y) * (p.y - ptr.y));
          if (d < R) { var f = (1 - d / R) * (1 - d / R) * ptr.on; a = Math.min(0.68, a + f * 0.46); var swell = 0.55 + 0.75 * (0.5 + 0.5 * Math.sin(p.x * 0.05 + p.y * 0.07)); r = r + f * swell; }
        }
        ctx.fillStyle = 'rgba(111,203,146,' + a.toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.2832); ctx.fill();
      }
    };
    if (!build()) { requestAnimationFrame(function () { startField(cv); }); return; }
    draw(0);
    window.addEventListener('resize', function () { if (build()) draw(performance.now()); });
    if (REDUCE) return;
    host.addEventListener('pointermove', function (e) {
      var rect = cv.getBoundingClientRect();
      ptr.x = e.clientX - rect.left; ptr.y = e.clientY - rect.top;
      ptr.target = 1;
    });
    host.addEventListener('pointerleave', function () { ptr.target = 0; });
    var tick = function (now) {
      requestAnimationFrame(tick);
      ptr.on += (ptr.target - ptr.on) * 0.12;
      draw(now);
    };
    requestAnimationFrame(tick);
  }

  Array.prototype.forEach.call(document.querySelectorAll('canvas[data-field]'), startField);
})();
