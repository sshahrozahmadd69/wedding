(function () {
    'use strict';
  
    const _0x1a306f = document.createElement("style");
    _0x1a306f.textContent = "\n  .wc-back { position: fixed; inset: 0; z-index: 2147483001; display: flex; align-items: center; justify-content: center;\n    padding: 20px; background: rgba(20, 16, 12, .45); -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px);\n    opacity: 0; transition: opacity .25s ease; }\n  .wc-back.wc-on { opacity: 1; }\n  .wc-card { position: relative; width: 100%; max-width: 21rem; max-height: 85svh; overflow-y: auto;\n    padding: 2rem 1.5rem 1.4rem; border-radius: 22px; background: var(--wc-bg, #fffdf9); color: var(--wc-ink, #3a2f24);\n    border: 1px solid var(--wc-line, rgba(0,0,0,.12)); box-shadow: 0 30px 70px -30px rgba(0,0,0,.55);\n    font-family: var(--wc-font, inherit); text-align: center;\n    transform: translateY(16px) scale(.97); transition: transform .3s cubic-bezier(.22,1,.36,1); }\n  .wc-on .wc-card { transform: none; }\n  .wc-card h3 { margin: 0; font-size: .72rem; font-weight: 500; letter-spacing: .3em; text-transform: uppercase; color: var(--wc-accent, #b08d57); }\n  .wc-card p.wc-note { margin: .6rem 0 1.2rem; font-size: .85rem; line-height: 1.5; opacity: .75; }\n  .wc-group { margin: 1rem 0 .4rem; font-size: .62rem; letter-spacing: .24em; text-transform: uppercase; opacity: .6; }\n  .wc-opt { display: flex; align-items: center; gap: .8rem; width: 100%; margin: .45rem 0 0; padding: .8rem 1rem;\n    border: 1px solid var(--wc-line, rgba(0,0,0,.12)); border-radius: 14px; background: transparent; color: inherit;\n    font: inherit; font-size: .8rem; letter-spacing: .06em; text-align: left; text-decoration: none; cursor: pointer;\n    transition: background-color .2s, border-color .2s; }\n  .wc-opt:hover { background: rgba(0,0,0,.035); border-color: var(--wc-accent, #b08d57); }\n  .wc-opt small { display: block; font-size: .68rem; opacity: .6; letter-spacing: .02em; }\n  .wc-opt svg { flex: none; width: 18px; height: 18px; color: var(--wc-accent, #b08d57); }\n  .wc-close { position: absolute; top: .6rem; right: .7rem; width: 2rem; height: 2rem; border: 0; border-radius: 50%;\n    background: transparent; color: inherit; font-size: 1.3rem; line-height: 1; cursor: pointer; opacity: .6; }\n  .wc-close:hover { opacity: 1; }";
    document.head.appendChild(_0x1a306f);
  
    const _0x2cfeb7 = (_0x16695d = '') => String(_0x16695d).replace(/&/g, "&amp;").replace(/</g, '&lt;').replace(/>/g, "&gt;").replace(/"/g, '&quot;');
    const _0x4e3b00 = _0x2c5a11 => Object.entries(_0x2c5a11).map(([_0x166443, _0x527c4f]) => _0x166443 + '=' + encodeURIComponent(_0x527c4f || '')).join('&');
  
    const _0x1a4a06 = _0x1ba984 => "https://calendar.google.com/calendar/render?" + _0x4e3b00({
      'action': 'TEMPLATE',
      'text': _0x1ba984.title,
      'dates': new Date(_0x1ba984.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '') + '/' + new Date(_0x1ba984.end || _0x1ba984.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''),
      'details': _0x1ba984.details,
      'location': _0x1ba984.location
    });
  
    const _0x1b9193 = _0x329ac2 => "https://outlook.live.com/calendar/0/deeplink/compose?" + _0x4e3b00({
      'path': "/calendar/action/compose",
      'rru': "addevent",
      'subject': _0x329ac2.title,
      'startdt': new Date(_0x329ac2.start).toISOString(),
      'enddt': new Date(_0x329ac2.end || _0x329ac2.start).toISOString(),
      'body': _0x329ac2.details,
      'location': _0x329ac2.location
    });
  
    function _0x317543(_0x5f3f87) {
      const _0x1cc82b = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wedding Invitation//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH"];
      _0x5f3f87.forEach((_0x143601, _0x352439) => {
        _0x1cc82b.push("BEGIN:VEVENT", 'UID:' + new Date(_0x143601.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '') + '-' + _0x352439 + "@invitation", 'DTSTAMP:' + new Date(new Date().toISOString()).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''), "DTSTART:" + new Date(_0x143601.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''), "DTEND:" + new Date(_0x143601.end || _0x143601.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''), 'SUMMARY:' + String(_0x143601.title || '').replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"), "LOCATION:" + String(_0x143601.location || '').replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"), "DESCRIPTION:" + String(_0x143601.details || '').replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"), "BEGIN:VALARM", "TRIGGER:-P1D", "ACTION:DISPLAY", "DESCRIPTION:" + String(_0x143601.title || '').replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"), "END:VALARM", "END:VEVENT");
      });
      _0x1cc82b.push("END:VCALENDAR");
      return _0x1cc82b.join("\r\n");
    }
  
    function _0x4f434b(_0x9de73a, _0x1908b2) {
      const _0x1ab9aa = URL.createObjectURL(new Blob([_0x317543(_0x9de73a)], {
        'type': "text/calendar;charset=utf-8"
      }));
      const _0x5375ac = document.createElement('a');
      _0x5375ac.href = _0x1ab9aa;
      _0x5375ac.download = _0x1908b2 || "invitation.ics";
      document.body.appendChild(_0x5375ac);
      _0x5375ac.click();
      _0x5375ac.remove();
      setTimeout(() => URL.revokeObjectURL(_0x1ab9aa), 0x3e8);
    }
  
    function _0x4c50fc(_0x3ea593, _0x5652d5 = {}) {
      if (!_0x3ea593 || !_0x3ea593.length) {
        return;
      }
      const _0x51180a = _0x3ea593.length > 0x1;
      const _0x38f339 = document.createElement("div");
      _0x38f339.className = "wc-back";
      _0x38f339.innerHTML = "\n      <div class=\"wc-card\" role=\"dialog\" aria-modal=\"true\" aria-label=\"" + _0x2cfeb7(_0x5652d5.heading || "Add to calendar") + "\">\n        <button type=\"button\" class=\"wc-close\" aria-label=\"Close\">×</button>\n        <h3>" + _0x2cfeb7(_0x5652d5.heading || (_0x51180a ? "Add all dates" : "Add to calendar")) + "</h3>\n        <p class=\"wc-note\">" + _0x2cfeb7(_0x5652d5.note || (_0x51180a ? "Save every date of the celebrations." : "Save the date to your calendar.")) + "</p>\n        <button type=\"button\" class=\"wc-opt\" data-ics>" + "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M16 3v4M8 3v4M3 10h18M12 13v5M9.5 15.5h5\"/></svg>" + "<span>Apple / Outlook" + (_0x51180a ? "<small>All " + _0x3ea593.length + " dates in one file</small>" : "<small>.ics file</small>") + "</span></button>\n        " + (_0x51180a ? "<div class=\"wc-group\">Google Calendar</div>" : '') + "\n        " + _0x3ea593.map(_0x3c6b74 => "<a class=\"wc-opt\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"" + _0x2cfeb7("https://calendar.google.com/calendar/render?" + _0x4e3b00({
        'action': 'TEMPLATE',
        'text': _0x3c6b74.title,
        'dates': new Date(_0x3c6b74.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '') + '/' + new Date(_0x3c6b74.end || _0x3c6b74.start).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''),
        'details': _0x3c6b74.details,
        'location': _0x3c6b74.location
      })) + "\">" + "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"><path d=\"M21 12a9 9 0 1 1-2.64-6.36\"/><path d=\"M21 12h-9\"/></svg>" + "<span>" + (_0x51180a ? _0x2cfeb7(_0x3c6b74.title) + ("<small>" + _0x2cfeb7(new Date(_0x3c6b74.start).toLocaleDateString(undefined, {
        'weekday': "short",
        'day': "numeric",
        'month': "short"
      })) + "</small>") : "Google Calendar") + "</span></a>").join('') + "\n        " + (_0x51180a ? '' : "<a class=\"wc-opt\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"" + _0x2cfeb7("https://outlook.live.com/calendar/0/deeplink/compose?" + _0x4e3b00({
        'path': "/calendar/action/compose",
        'rru': "addevent",
        'subject': _0x3ea593[0x0].title,
        'startdt': new Date(_0x3ea593[0x0].start).toISOString(),
        'enddt': new Date(_0x3ea593[0x0].end || _0x3ea593[0x0].start).toISOString(),
        'body': _0x3ea593[0x0].details,
        'location': _0x3ea593[0x0].location
      })) + "\">" + "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3 7 9 6 9-6\"/></svg>" + "<span>Outlook.com</span></a>") + "\n      </div>";
      document.body.appendChild(_0x38f339);
      const _0x454e69 = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const _0x42e9c1 = () => {
        _0x38f339.classList.remove("wc-on");
        document.removeEventListener("keydown", _0x9436e);
        document.body.style.overflow = _0x454e69;
        setTimeout(() => _0x38f339.remove(), 0x104);
        if (_0x5652d5.returnFocus && _0x5652d5.returnFocus.focus) {
          _0x5652d5.returnFocus.focus();
        }
      };
      const _0x9436e = _0x1c5a5e => _0x1c5a5e.key === "Escape" && _0x42e9c1();
      document.addEventListener("keydown", _0x9436e);
      _0x38f339.addEventListener("click", _0x195f3a => {
        if (_0x195f3a.target === _0x38f339 || _0x195f3a.target.closest(".wc-close")) {
          return _0x42e9c1();
        }
        if (_0x195f3a.target.closest("[data-ics]")) {
          _0x4f434b(_0x3ea593, _0x5652d5.fileName);
          _0x42e9c1();
          return;
        }
        if (_0x195f3a.target.closest("a.wc-opt")) {
          setTimeout(_0x42e9c1, 0x32);
        }
      });
      requestAnimationFrame(() => _0x38f339.classList.add("wc-on"));
    }
  
    function _0x1aef9c(_0x52c3b9, _0x52aa5c, _0x3d730 = {}) {
      if (!_0x52c3b9) {
        return;
      }
      _0x52c3b9.addEventListener("click", _0x17e2e0 => {
        _0x17e2e0.preventDefault();
        _0x4c50fc(typeof _0x52aa5c === "function" ? _0x52aa5c() : _0x52aa5c, {
          ..._0x3d730,
          'returnFocus': _0x52c3b9
        });
      });
    }
  
    window.WedCal = {
      'open': _0x4c50fc,
      'attach': _0x1aef9c,
      'ics': _0x317543,
      'google': _0x1a4a06,
      'outlook': _0x1b9193
    };
  })();