/* Network globe animation, ported verbatim from Home v8.1 (net method). */
(function(){
function Globe(){ this.N = null; }
Globe.prototype.net = function(box, t, reduce) {
    const cv = box.querySelector('[data-net]'); if (!cv) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1), W = box.clientWidth, H = box.clientHeight; if (!W || !H) return;
    if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
    const c = cv.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H);
    if (!this.N) { let sd = 11; const r = () => (sd = (sd * 16807) % 2147483647) / 2147483647; const pts = []; let guard = 0;
      while (pts.length < 90 && guard++ < 20000) { const p = [0.04 + r() * 0.92, 0.04 + r() * 0.92]; if (pts.every((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) > 0.085)) pts.push(p); }
      pts.sort((a, b) => Math.hypot(a[0] - 0.5, a[1] - 0.5) - Math.hypot(b[0] - 0.5, b[1] - 0.5));
      const links = [], adj = pts.map(() => []);
      pts.forEach((p, i) => { if (!i) return; pts.slice(0, i).map((q, j) => [Math.hypot(q[0] - p[0], q[1] - p[1]), j]).sort((a, b) => a[0] - b[0]).slice(0, Math.min(2, i)).forEach(([, j]) => { links.push([j, i]); adj[i].push(j); adj[j].push(i); }); });
      this.N = { pts, links, adj, pulses: [], pops: [], next: 0, r }; }
    const A = this.N, S = Math.min(W, H) / 560, P = (i) => [A.pts[i][0] * W, A.pts[i][1] * H];
    const spark = (x, y, rr) => { c.beginPath(); c.moveTo(x, y - rr); c.quadraticCurveTo(x + rr * 0.18, y - rr * 0.18, x + rr, y); c.quadraticCurveTo(x + rr * 0.18, y + rr * 0.18, x, y + rr); c.quadraticCurveTo(x - rr * 0.18, y + rr * 0.18, x - rr, y); c.quadraticCurveTo(x - rr * 0.18, y - rr * 0.18, x, y - rr); c.fill(); };
    const tick = (x, y, k) => { c.save(); c.globalAlpha = k; c.fillStyle = '#fff'; c.beginPath(); c.arc(x, y, 8 * S, 0, Math.PI * 2); c.fill(); c.strokeStyle = '#0f2147'; c.lineWidth = 2 * S; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(x - 3.4 * S, y); c.lineTo(x - 0.9 * S, y + 2.7 * S); c.lineTo(x + 3.8 * S, y - 2.7 * S); c.stroke(); c.restore(); };
    const step = 220, cyc = A.pts.length * step + 7000, lt = t % cyc, joined = Math.min(A.pts.length, Math.floor(lt / step) + 1), fadeOut = lt > cyc - 1200 ? (cyc - lt) / 1200 : 1, seen = (i) => i < joined, age = (i) => (lt - i * step) / 500;
    c.lineWidth = 1.4;
    A.links.forEach(([a, b]) => { if (!seen(b)) return; const k = Math.min(1, age(b)) * fadeOut, p = P(a), q = P(b), u = Math.min(1, age(b) * 1.4); c.strokeStyle = 'rgba(226,232,246,' + (0.42 * k) + ')'; c.beginPath(); c.moveTo(p[0], p[1]); c.lineTo(p[0] + (q[0] - p[0]) * u, p[1] + (q[1] - p[1]) * u); c.stroke(); });
    A.pts.forEach((_, i) => { if (!seen(i)) return; const k = Math.min(1, age(i)) * fadeOut, p = P(i); c.fillStyle = 'rgba(236,240,250,' + (0.75 + 0.25 * k) * k + ')'; spark(p[0], p[1], (3.4 + 2 * Math.max(0, 1 - age(i))) * S); });
    if (!reduce && t > A.next && joined > 6 && fadeOut === 1) { A.next = t + 500 + A.r() * 700; let cur = Math.floor(A.r() * joined); const path = [cur]; for (let k = 0; k < 4; k++) { const o = A.adj[cur].filter((j) => seen(j) && !path.includes(j)); if (!o.length) break; cur = o[Math.floor(A.r() * o.length)]; path.push(cur); } if (path.length > 2) A.pulses.push({ path, t0: t }); }
    A.pulses = A.pulses.filter((p) => { const seg = (t - p.t0) / 520, i = Math.floor(seg); if (i >= p.path.length - 1) { A.pops.push({ i: p.path[p.path.length - 1], t0: t }); return false; } const u = seg - i, a = P(p.path[i]), b = P(p.path[i + 1]), x = a[0] + (b[0] - a[0]) * u, y = a[1] + (b[1] - a[1]) * u; c.strokeStyle = 'rgba(255,255,255,.9)'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(x, y); c.stroke(); c.fillStyle = '#fff'; spark(x, y, 5.5 * S); return true; });
    A.pops = A.pops.filter((p) => { const k = (t - p.t0) / 1400; if (k > 1) return false; const q = P(p.i); c.strokeStyle = 'rgba(255,255,255,' + (0.6 * (1 - k)) + ')'; c.lineWidth = 1; c.beginPath(); c.arc(q[0], q[1], (9 + k * 24) * S, 0, Math.PI * 2); c.stroke(); tick(q[0], q[1], Math.min(1, (1 - k) * 1.8)); return true; });
  };
window.AlmanacGlobe = Globe;
})();
