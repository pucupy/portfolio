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

  var cv = document.querySelector('canvas[data-rain]');
  if (!cv) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = cv.getContext('2d');
  var glyphs = ['u', 'x', 'a', 'l', 'e', '\u2665', '\u263a', ':', ')', '<', '3', '\u00b7', '+'];
  var cell = 13;
  var ease = function (v) { return v * v * (3 - 2 * v); };
  var pick = function () { return glyphs[Math.floor(Math.random() * glyphs.length)]; };
  var cols = 0, rows = 0, dpr = 1, streams = [], last = 0, raf = 0;
  var ptr = { x: -999, y: -999, on: 0, targetOn: 0 };
  var radius = 6.5;

  var newStream = function (x, above) {
    var chars = [];
    for (var i = 0; i < 24; i++) chars.push(pick());
    return {
      x: x,
      head: above ? -Math.random() * rows * 1.6 : -Math.random() * 6,
      speed: 3 + Math.random() * 7,
      len: 8 + Math.floor(Math.random() * 16),
      bright: Math.random() < 0.18 ? 2.4 : 1,
      chars: chars
    };
  };

  var resize = function () {
    var r = cv.getBoundingClientRect();
    if (!r.width || !r.height) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(r.width * dpr);
    cv.height = Math.round(r.height * dpr);
    cols = Math.ceil(r.width / cell);
    rows = Math.ceil(r.height / cell);
    streams = [];
    for (var x = 0; x < cols; x++) {
      var n = 1 + (Math.random() < 0.6 ? 1 : 0);
      for (var i = 0; i < n; i++) streams.push(newStream(x, true));
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = '9px ui-monospace, SFMono-Regular, Menlo, monospace';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
  };

  var frame = function (t) {
    raf = requestAnimationFrame(frame);
    if (!cols) { resize(); last = t; return; }
    var dt = Math.min((t - last) / 1000, 0.05);
    last = t;
    ctx.clearRect(0, 0, cv.width / dpr, cv.height / dpr);
    var cx = (cols - 1) / 2;
    ptr.on += (ptr.targetOn - ptr.on) * Math.min(1, dt * 6);
    var glowing = ptr.on > 0.01;
    ctx.shadowColor = 'rgba(111,203,146,0.9)';

    for (var i = 0; i < streams.length; i++) {
      var s = streams[i];
      s.head += s.speed * dt;
      if (s.head - s.len > rows) { streams[i] = newStream(s.x, false); continue; }
      if (Math.random() < 0.04) s.chars[Math.floor(Math.random() * s.chars.length)] = pick();

      var edge = Math.min(1, 0.45 + Math.abs(s.x - cx) / cx * 0.55);
      var sub = s.head - Math.floor(s.head);
      for (var k = 0; k < s.len; k++) {
        var y = Math.floor(s.head) - k;
        if (y < -1 || y > rows) continue;
        var fade = ease(1 - k / s.len);
        var head = k === 0 ? 1 - sub : k === 1 ? sub : 0;
        var alpha = Math.min(0.72, (0.1 * fade + 0.2 * head * ease(1 - k / s.len)) * edge * s.bright);
        var shine = 0;
        if (glowing) {
          var dx = s.x - ptr.x, dy = (y + sub) - ptr.y;
          var d = Math.sqrt(dx * dx + dy * dy) / radius;
          if (d < 1) shine = ease(1 - d) * ptr.on;
        }
        if (shine > 0) alpha = Math.min(0.95, alpha + shine * (0.55 + 0.35 * fade));
        if (alpha < 0.005) continue;
        ctx.shadowBlur = shine > 0.02 ? shine * 9 : 0;
        ctx.fillStyle = 'rgba(' + Math.round(111 + shine * 110) + ',' + Math.round(203 + shine * 45) + ',' + Math.round(146 + shine * 90) + ',' + alpha.toFixed(3) + ')';
        ctx.fillText(
          s.chars[((y % s.chars.length) + s.chars.length + s.x) % s.chars.length],
          s.x * cell + cell / 2,
          (y + sub) * cell + cell / 2
        );
      }
    }
  };

  window.addEventListener('resize', function () { cols = 0; });
  var host = cv.parentElement || cv;
  host.addEventListener('pointermove', function (e) {
    var r = cv.getBoundingClientRect();
    ptr.x = (e.clientX - r.left) / cell - 0.5;
    ptr.y = (e.clientY - r.top) / cell - 0.5;
    ptr.targetOn = 1;
  });
  host.addEventListener('pointerleave', function () { ptr.targetOn = 0; });
  resize();
  raf = requestAnimationFrame(frame);
})();
