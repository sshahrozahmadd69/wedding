(function () {
    'use strict';
  
    const _0x45c1f2 = window.WED_BRAND || {};
    const _0x30cbc1 = window.WED_FOOTER_MOUNT || _0x45c1f2.mount;
    const _0x1083d3 = (_0x5863fc = '') => String(_0x5863fc).replace(/&/g, "&amp;").replace(/</g, '&lt;').replace(/>/g, "&gt;").replace(/"/g, '&quot;');
  
    const _0x252765 = document.createElement("style");
    _0x252765.textContent = "\n  .wf { position: relative; z-index: 5; padding: 2.6rem 1.25rem calc(2.2rem + env(safe-area-inset-bottom)); text-align: center;\n    background: var(--wf-bg, transparent); color: var(--wf-ink, #6b5a45); font-family: var(--wf-font, inherit); }\n  .wf::before { content: \"\"; display: block; width: min(14rem, 60%); height: 1px; margin: 0 auto 1.8rem;\n    background: linear-gradient(90deg, transparent, var(--wf-line, rgba(0,0,0,.14)), transparent); }\n  .wf-logo { display: block; margin: 0 auto .8rem; width: 8.5rem; aspect-ratio: 653 / 142; background-color: currentColor;\n    -webkit-mask: var(--wf-logo) center / contain no-repeat; mask: var(--wf-logo) center / contain no-repeat; }\n  .wf-word { display: block; margin-bottom: .55rem; font-size: 1.15rem; letter-spacing: .38em; padding-left: .38em; text-transform: uppercase; }\n  .wf-tag { margin: 0 0 1.1rem; font-size: .72rem; letter-spacing: .14em; opacity: .7; }\n  .wf-social { display: flex; justify-content: center; gap: .7rem; margin: 0 0 1.1rem; }\n  .wf-social a { display: inline-flex; width: 2.3rem; height: 2.3rem; align-items: center; justify-content: center; border-radius: 50%;\n    border: 1px solid var(--wf-line, rgba(0,0,0,.14)); color: inherit; transition: transform .25s, background-color .25s; }\n  .wf-social a:hover { transform: translateY(-2px); background: rgba(0,0,0,.04); }\n  .wf-social svg { width: 15px; height: 15px; }\n  .wf-copy { margin: 0; font-size: .64rem; letter-spacing: .12em; opacity: .55; }";
    document.head.appendChild(_0x252765);
  
    const _0x473f5e = {
      'instagram': "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.5\" cy=\"6.5\" r=\".6\" fill=\"currentColor\"/></svg>",
      'tiktok': "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z\"/></svg>",
      'facebook': "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3C16.7 2.3 15.6 2 14.3 2 11.6 2 10 3.6 10 6.5v2H7.3V12H10v10h4V12h2.7l.4-3.5H14Z\"/></svg>"
    };
  
    function _0x1284e7() {
      const _0x14724a = document.createElement("footer");
      _0x14724a.className = 'wf';
      const _0x5c7566 = ["instagram", "tiktok", 'facebook'].filter(_0x5cd226 => _0x45c1f2[_0x5cd226]).map(_0x392d3e => "<a href=\"" + _0x1083d3(_0x45c1f2[_0x392d3e]) + "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"" + _0x392d3e + "\">" + _0x473f5e[_0x392d3e] + "</a>").join('');
      _0x14724a.innerHTML = "\n      " + (_0x45c1f2.logo ? "<span class=\"wf-logo\" role=\"img\" aria-label=\"" + _0x1083d3(_0x45c1f2.name || '') + "\" style=\"--wf-logo:url('" + _0x1083d3(_0x45c1f2.logo) + "')\"></span>" : "<span class=\"wf-word\">" + _0x1083d3(_0x45c1f2.name || '') + '</span>') + "\n      " + (_0x45c1f2.tagline ? "<p class=\"wf-tag\">" + _0x1083d3(_0x45c1f2.tagline) + "</p>" : '') + "\n      " + (_0x5c7566 ? "<div class=\"wf-social\">" + _0x5c7566 + "</div>" : '') + "\n      <p class=\"wf-copy\">© " + new Date().getFullYear() + " " + _0x1083d3(_0x45c1f2.name || '') + ". All rights reserved.</p>";
      return _0x14724a;
    }
  
    function _0x4bb287() {
      const _0x3de87d = _0x30cbc1 && document.querySelector(_0x30cbc1) || document.body;
      let _0x5b159f = document.querySelector("footer.wf");
      if (!_0x5b159f) {
        _0x5b159f = _0x1284e7();
      }
      if (_0x3de87d.lastElementChild !== _0x5b159f) {
        _0x3de87d.appendChild(_0x5b159f);
      }
    }
  
    document.addEventListener("DOMContentLoaded", _0x4bb287);
    if (document.readyState !== "loading") {
      _0x4bb287();
    }
  
    new MutationObserver(() => {
      const _0x43a28a = _0x30cbc1 && document.querySelector(_0x30cbc1) || document.body;
      const _0x50dc75 = document.querySelector("footer.wf");
      if (_0x43a28a && (!_0x50dc75 || _0x43a28a.lastElementChild !== _0x50dc75)) {
        _0x4bb287();
      }
    }).observe(document.documentElement, {
      'childList': true,
      'subtree': true
    });
  })();