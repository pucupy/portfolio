(function(g){
var MZ = g.MZ = {};
var H = /\{\{\s*([^}]+?)\s*\}\}/g;
MZ.get = function(path, scope, vals){
  path = String(path).trim();
  if (path === 'true') return true; if (path === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(path)) return +path;
  var parts = path.split('.');
  var v = (scope && Object.prototype.hasOwnProperty.call(scope, parts[0])) ? scope : vals;
  for (var i = 0; i < parts.length; i++) { if (v == null) return undefined; v = v[parts[i]]; }
  return v;
};
function txt(v){ return (v == null || typeof v === 'object' || typeof v === 'function') ? '' : String(v); }
MZ.str = function(tpl, scope, vals){ return tpl.replace(H, function(_, p){ return txt(MZ.get(p, scope, vals)); }); };
function whole(s){ var m = String(s).match(/^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/); return m ? m[1] : null; }
function kebab(k){ return k.replace(/[A-Z]/g, function(m){ return '-' + m.toLowerCase(); }); }
var unitless = {opacity:1,zIndex:1,fontWeight:1,flex:1,lineHeight:1,order:1,flexGrow:1,flexShrink:1};
function hash(s){ var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); }
MZ.el = function(doc, mk){
  var e = doc.createElement(mk.type), p = mk.props || {};
  if (p.style) e.setAttribute('style', Object.keys(p.style).map(function(k){ var v = p.style[k]; return kebab(k) + ':' + (typeof v === 'number' && !unitless[k] ? v + 'px' : v); }).join(';'));
  Object.keys(p).forEach(function(k){ var v = p[k]; if (k !== 'style' && k !== 'children' && v != null && typeof v !== 'object' && typeof v !== 'function') e.setAttribute(k === 'className' ? 'class' : kebab(k), v); });
  if (p.children != null) e.textContent = txt(p.children);
  return e;
};
MZ.rules = {};
MZ.hv = function(doc, pseudo, css){
  var sel = {hover:':hover', active:':active', focus:':focus', 'focus-visible':':focus-visible'}[pseudo] || (':' + pseudo);
  var id = hash(pseudo + css);
  if (!MZ.rules[id]) {
    var decl = css.split(';').map(function(d){ return d.trim(); }).filter(Boolean).map(function(d){ return d + ' !important'; }).join(';');
    MZ.rules[id] = '[data-hv="' + id + '"]' + sel + '{' + decl + '}';
    var st = doc.getElementById && doc.getElementById('mz-hv');
    if (st && st.textContent.indexOf('"' + id + '"') < 0) st.textContent += MZ.rules[id];
  }
  return id;
};
MZ.process = function(parent, scope, vals, inList){
  var doc = parent.ownerDocument;
  Array.prototype.slice.call(parent.childNodes).forEach(function(n){
    if (n.nodeType === 3) {
      var s = n.nodeValue; if (s.indexOf('{{') < 0) return;
      var frag = doc.createDocumentFragment(), last = 0;
      s.replace(H, function(m, p, off){
        if (off > last) frag.appendChild(doc.createTextNode(s.slice(last, off)));
        var v = MZ.get(p, scope, vals);
        if (v && v.__mz) frag.appendChild(MZ.el(doc, v));
        else if (inList) frag.appendChild(doc.createTextNode(txt(v)));
        else { var sp = doc.createElement('span'); sp.setAttribute('data-tt', p.trim()); sp.textContent = txt(v); frag.appendChild(sp); }
        last = off + m.length; return m;
      });
      if (last < s.length) frag.appendChild(doc.createTextNode(s.slice(last)));
      n.parentNode.replaceChild(frag, n); return;
    }
    if (n.nodeType !== 1) return;
    var tag = n.tagName.toLowerCase(), w;
    if (tag === 'sc-for') {
      w = doc.createElement('span'); w.setAttribute('style', 'display:contents');
      w.setAttribute('data-for', whole(n.getAttribute('list') || '') || '');
      w.setAttribute('data-as', n.getAttribute('as') || 'item');
      var t = doc.createElement('template'); t.innerHTML = n.innerHTML; w.appendChild(t);
      n.parentNode.replaceChild(w, n); MZ.list(w, scope, vals); return;
    }
    if (tag === 'sc-if') {
      w = doc.createElement('span'); var p = whole(n.getAttribute('value') || '') || 'false';
      w.setAttribute('data-if', p);
      while (n.firstChild) w.appendChild(n.firstChild);
      w.setAttribute('style', 'display:' + (MZ.get(p, scope, vals) ? 'contents' : 'none'));
      n.parentNode.replaceChild(w, n); MZ.process(w, scope, vals, inList); return;
    }
    Array.prototype.slice.call(n.attributes).forEach(function(at){
      var name = at.name, val = at.value;
      if (name.indexOf('hint-') === 0) { n.removeAttribute(name); return; }
      if (name === 'ref') { n.removeAttribute(name); n.setAttribute('data-ref', whole(val) || val); return; }
      if (/^on[a-z]+$/.test(name)) { n.removeAttribute(name); n.setAttribute('data-on-' + name.slice(2), whole(val) || ''); return; }
      if (name.indexOf('style-') === 0) { n.removeAttribute(name); n.setAttribute('data-hv', MZ.hv(doc, name.slice(6), val)); return; }
      if (val.indexOf('{{') >= 0) { n.setAttribute(name, MZ.str(val, scope, vals)); if (!inList) { n.setAttribute('data-at-' + name, val); n.setAttribute('data-ats', ''); } }
    });
    if (tag !== 'template' && tag !== 'script' && tag !== 'style') MZ.process(n, scope, vals, inList);
  });
};
function sigOf(items){ return hash(JSON.stringify(items, function(k, v){ return typeof v === 'function' ? undefined : (v && v.__mz ? 'mz' : v); }) || ''); }
MZ.list = function(w, scope, vals){
  var path = w.getAttribute('data-for'), as = w.getAttribute('data-as');
  var items = MZ.get(path, scope, vals) || [];
  var sig = sigOf(items);
  if (w.getAttribute('data-sig') === sig) return;
  w.setAttribute('data-sig', sig);
  var t = null; Array.prototype.slice.call(w.childNodes).forEach(function(c){ if (c.nodeType === 1 && c.tagName.toLowerCase() === 'template' && !t) t = c; else w.removeChild(c); });
  items.forEach(function(it, i){
    var box = w.ownerDocument.createElement('div'); box.innerHTML = t.innerHTML;
    var sc = {}; for (var k in scope) sc[k] = scope[k]; sc[as] = it; sc.$index = i;
    MZ.process(box, sc, vals, true);
    Array.prototype.slice.call(box.childNodes).forEach(function(c){ if (c.nodeType === 1) c.setAttribute('data-sc', path + '|' + as + '|' + i); w.appendChild(c); });
  });
};
MZ.scopeOf = function(el, vals){
  var chain = [];
  for (var e = el; e && e.getAttribute; e = e.parentElement) { var s = e.getAttribute('data-sc'); if (s) chain.unshift(s); }
  var scope = {};
  chain.forEach(function(s){ var a = s.split('|'); var items = MZ.get(a[0], scope, vals) || []; var n = {}; for (var k in scope) n[k] = scope[k]; n[a[1]] = items[+a[2]]; n.$index = +a[2]; scope = n; });
  return scope;
};
MZ.update = function(root, vals){
  function inItem(e){ return !!(e.parentElement && e.parentElement.closest('[data-sc]')) || e.hasAttribute('data-sc'); }
  root.querySelectorAll('[data-for]').forEach(function(w){ if (!inItem(w)) MZ.list(w, {}, vals); });
  root.querySelectorAll('[data-if]').forEach(function(w){ if (!inItem(w)) w.style.display = MZ.get(w.getAttribute('data-if'), {}, vals) ? 'contents' : 'none'; });
  root.querySelectorAll('[data-tt]').forEach(function(s){ if (!inItem(s)) { var v = txt(MZ.get(s.getAttribute('data-tt'), {}, vals)); if (s.textContent !== v) s.textContent = v; } });
  root.querySelectorAll('[data-ats]').forEach(function(e){ if (inItem(e)) return; Array.prototype.slice.call(e.attributes).forEach(function(at){ if (at.name.indexOf('data-at-') === 0) { var nm = at.name.slice(8), v = MZ.str(at.value, {}, vals); if (e.getAttribute(nm) !== v) e.setAttribute(nm, v); } }); });
};
g.DCLogic = function DCLogic(){ this.props = {}; this.state = {}; };
g.DCLogic.prototype.setState = function(u, cb){ var s = typeof u === 'function' ? u(this.state, this.props) : u; var n = {}; for (var k in this.state) n[k] = this.state[k]; for (var j in s) n[j] = s[j]; this.state = n; if (MZ.schedule) MZ.schedule(); if (cb) cb(); };
g.DCLogic.prototype.forceUpdate = function(){ if (MZ.schedule) MZ.schedule(); };
MZ.React = { createElement: function(type, props){ var ch = Array.prototype.slice.call(arguments, 2); var p = {}; for (var k in props) p[k] = props[k]; if (ch.length) p.children = ch.join(''); return { __mz: 1, type: type, props: p }; } };
MZ.boot = function(Component){
  if (!document.getElementById('mz-hv')) { var st = document.createElement('style'); st.id = 'mz-hv'; document.head.appendChild(st); }
  var c = new Component(), vals = c.renderVals(), q = false;
  MZ.c = c; MZ.vals = vals;
  MZ.schedule = function(){ if (q) return; q = true; var run = function(){ if (!q) return; q = false; vals = MZ.vals = c.renderVals(); MZ.update(document.body, vals); }; requestAnimationFrame(run); setTimeout(run, 50); };
  ['click', 'submit', 'input', 'change'].forEach(function(type){
    document.addEventListener(type, function(e){
      var el = e.target && e.target.closest && e.target.closest('[data-on-' + type + ']'); if (!el) return;
      var f = MZ.get(el.getAttribute('data-on-' + type), MZ.scopeOf(el, vals), vals);
      if (typeof f === 'function') f(e);
    });
  });
  document.querySelectorAll('[data-ref]').forEach(function(el){ var f = MZ.get(el.getAttribute('data-ref'), MZ.scopeOf(el, vals), vals); if (typeof f === 'function') f(el); });
  MZ.update(document.body, vals);
  if (c.componentDidMount) c.componentDidMount();
};
})(typeof window !== 'undefined' ? window : this);
