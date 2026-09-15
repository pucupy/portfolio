/* Google Analytics 4 + minimal consent banner.
   Switch on: paste your GA4 Measurement ID (G-XXXXXXXXXX) into MEASUREMENT_ID below.
   Until it is set, this file does nothing and makes no network requests.
   Consent Mode v2 defaults to denied: nothing is sent until the visitor accepts. */
(function () {
  var MEASUREMENT_ID = 'G-WCVNTBP0Q9';
  if (!MEASUREMENT_ID) return;

  var KEY = 'analytics-consent';
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, { anonymize_ip: true });

  if (stored === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' });
  if (stored) return;

  function decide(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (value === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' });
    bar.remove();
  }

  var bar = document.createElement('div');
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Cookie consent');
  bar.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:16px;padding:16px 18px;border-radius:14px;background:#171B1A;border:1px solid rgba(244,246,245,0.14);box-shadow:0 12px 40px rgba(0,0,0,0.45);font-family:\'Schibsted Grotesk\',system-ui,sans-serif;color:#F4F6F5;font-size:14px;line-height:1.45';

  var text = document.createElement('p');
  text.style.cssText = 'margin:0;flex:1 1 240px;min-width:0';
  text.textContent = 'I use Google Analytics to see whether anyone visits. No ads, no tracking across other sites.';
  bar.appendChild(text);

  var row = document.createElement('div');
  row.style.cssText = 'display:flex;gap:8px;flex:0 0 auto';

  function button(label, value, primary) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.style.cssText = 'min-height:44px;padding:0 16px;border-radius:10px;font:inherit;font-weight:600;cursor:pointer;border:1px solid ' +
      (primary ? '#6FCB92;background:#6FCB92;color:#0F1211' : 'rgba(244,246,245,0.22);background:transparent;color:#F4F6F5');
    b.addEventListener('click', function () { decide(value); });
    return b;
  }

  row.appendChild(button('Decline', 'denied', false));
  row.appendChild(button('Accept', 'granted', true));
  bar.appendChild(row);

  function mount() { document.body.appendChild(bar); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
