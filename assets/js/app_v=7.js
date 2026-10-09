(function () {
    
    
    'use strict';
    const _0xc343c0 = window.BLOOM_CONFIG;
    const _0x1613e6 = (_0x25379c, _0x5f51d2 = document) => _0x5f51d2.querySelector(_0x25379c);
    const _0xb9f683 = (_0x357a1a, _0x5bb428 = document) => Array.from(_0x5bb428.querySelectorAll(_0x357a1a));
    const _0x185373 = (_0x1833a9 = '') => String(_0x1833a9).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const _0x576f68 = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const _0x39c818 = (_0x1b8c79, _0x1c0956, _0x48616b = '') => "<div class=\"flora " + _0x1b8c79 + "\" " + _0x48616b + "><span class=\"rs\"><img src=\"" + ("./assets/images/" + _0x1c0956) + "\" alt=\"\" aria-hidden=\"true\" /></span></div>";
    document.title = _0xc343c0.meta.title;
    document.documentElement.classList.add('locked');
    _0x1613e6("#coverTitle").innerHTML = "<p>" + _0x185373(_0xc343c0.cover.eyebrow) + "</p><h2>" + _0x185373(_0xc343c0.cover.names) + "</h2>";
    const _0x4b3db9 = _0xc343c0.hero;
    _0x1613e6("#heroText").innerHTML = "\n    <p class=\"eyebrow\">" + _0x185373(_0x4b3db9.eyebrow) + "</p>\n    <p class=\"lead\">" + _0x185373(_0x4b3db9.lead) + "</p>\n    <h1 class=\"names\"><span class=\"n1\">" + _0x185373(_0x4b3db9.names[0x0]) + "</span><span class=\"amp\">&amp;</span><span class=\"n2\">" + _0x185373(_0x4b3db9.names[0x1]) + "</span></h1>\n    <div class=\"rule\"><img src=\"./assets/images/divider.webp\" alt=\"\" aria-hidden=\"true\" /></div>\n    <p class=\"hero-date\">" + _0x185373(_0x4b3db9.date) + "</p>\n    <p class=\"hero-place\">" + _0x185373(_0x4b3db9.place) + '</p>';
    _0x1613e6("#tapHint").innerHTML = "<span>" + _0x185373(_0x4b3db9.hint) + "</span>";
    const _0x4b9a5e = {
      invitation: () => "\n    <section class=\"sec inv\">\n      " + _0x39c818("band bloom-in", "garland-band.webp", "data-r") + "\n      <div class=\"inv-in\">\n        " + _0xc343c0.invitation.lines.map((_0x3ea489, _0x12836b) => {
        const _0x2c5160 = "style=\"--d:" + (0.2 + _0x12836b * 0.14).toFixed(0x2) + "s\"";
        if (_0x3ea489.kind === "script") {
          return "<p class=\"script\" lang=\"" + _0x3ea489.lang + "\" dir=\"rtl\" " + (_0x3ea489.quran ? "data-quran" : '') + " data-r " + _0x2c5160 + '>' + _0x185373(_0x3ea489.text) + "</p>";
        }
        if (_0x3ea489.kind === "label") {
          return "<p class=\"label\" data-r " + _0x2c5160 + '>' + _0x185373(_0x3ea489.text) + "</p>";
        }
        if (_0x3ea489.kind === 'names') {
          return "<p class=\"nm write\" data-r " + _0x2c5160 + '>' + _0x185373(_0x3ea489.text) + "</p>";
        }
        return "<p class=\"body\" data-r " + _0x2c5160 + '>' + _0x185373(_0x3ea489.text) + "</p>";
      }).join('') + "\n      </div>\n      " + _0x39c818("swag bloom-in", "extra3.webp", "data-r style=\"--d:.3s\"") + "\n    </section>",
      "scratch": () => {
        const _0x5b5557 = _0xc343c0.scratch;
        return "\n    <section class=\"sec\">\n      " + ("<p class=\"eyebrow\" data-r>" + _0x185373(_0x5b5557.eyebrow) + "</p><h2 class=\"h2 write\" data-r style=\"--d:.15s\">" + _0x185373(_0x5b5557.heading) + "</h2><div class=\"rule\" data-r style=\"--d:.5s\"><img src=\"./assets/images/divider.webp\" alt=\"\" aria-hidden=\"true\" /></div>") + "\n      <p class=\"p\" data-r style=\"--d:.3s\">" + _0x185373(_0x5b5557.note) + "</p>\n      <div class=\"scard-wrap sk\" data-sk=\"rect\" data-r style=\"--d:.35s\">\n        <div class=\"scratch\" id=\"scratch\">\n          <span class=\"k\">" + _0x185373(_0x5b5557.kicker) + "</span>\n          <span class=\"d\">" + _0x185373(_0x5b5557.date) + "</span>\n          <span class=\"dd\">" + _0x185373(_0x5b5557.day) + "</span>\n          <span class=\"t\">" + _0x185373(_0x5b5557.time) + "</span>\n        </div>\n        " + ['stl', "str", "sbl", "sbr"].map(_0x306a0c => _0x39c818("corner " + _0x306a0c, "cluster.webp")).join('') + "\n      </div>\n      <div class=\"btns\" data-r style=\"--d:.45s\"><button type=\"button\" class=\"btn\" id=\"saveCal\">" + "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15\" rx=\"1.5\"/><path d=\"M3.5 9.5h17M8 3v4M16 3v4\"/></svg>" + _0x185373(_0x5b5557.calendar) + "</button></div>\n    </section>";
      },
      countdown: () => {
        const _0x5cdba6 = _0xc343c0.countdown;
        const _0x23db6b = ['days', "hours", "minutes", "seconds"];
        return "\n    <section class=\"sec\">\n      <div class=\"frame sk\" data-sk=\"rect\" data-r>\n        " + ("<p class=\"eyebrow\" data-r>" + _0x185373(_0x5cdba6.eyebrow) + "</p><h2 class=\"h2 write\" data-r style=\"--d:.15s\">" + _0x185373(_0x5cdba6.heading) + "</h2><div class=\"rule\" data-r style=\"--d:.5s\"><img src=\"./assets/images/divider.webp\" alt=\"\" aria-hidden=\"true\" /></div>") + "\n        <div class=\"cd\" id=\"cd\" data-r style=\"--d:.35s\">" + _0x23db6b.map(_0xfa252f => "<div><b data-u=\"" + _0xfa252f + "\">00</b><span>" + _0x185373(_0x5cdba6[_0xfa252f]) + "</span></div>").join('') + "</div>\n        " + _0x39c818("corner tr", "cluster.webp") + "\n        " + _0x39c818("lean bl", "extra4.webp") + "\n      </div>\n    </section>";
      },
      "events": () => {
        const _0x154664 = _0xc343c0.events;
        return "\n    <section class=\"sec evsec\">\n      " + _0x39c818("evband bloom-in", "garland-band.webp", "data-r") + "\n      <div class=\"arch-wrap\">\n        <div class=\"arch sk\" data-sk=\"arch\" data-r>\n          " + _0x39c818("crown", "flower.webp") + "\n          " + ("<p class=\"eyebrow\" data-r>" + _0x185373(_0x154664.eyebrow) + "</p><h2 class=\"h2 write\" data-r style=\"--d:.15s\">" + _0x185373(_0x154664.heading) + "</h2><div class=\"rule\" data-r style=\"--d:.5s\"><img src=\"./assets/images/divider.webp\" alt=\"\" aria-hidden=\"true\" /></div>") + "\n          " + _0x154664.items.map((_0x426d61, _0x50733e) => "\n            " + (_0x50733e ? "<div class=\"sep rule\" data-r><img src=\"./assets/images/divider.webp\" alt=\"\" aria-hidden=\"true\" /></div>" : '') + "\n            <div class=\"ev\" data-r>\n              " + _0x39c818("evsprig " + (_0x50733e % 0x2 ? 'er' : 'el'), _0x50733e % 0x2 ? "extra4.webp" : "sprig.webp") + "\n              <p class=\"when\">" + _0x185373(_0x426d61.day) + " · " + _0x185373(_0x426d61.date) + "</p>\n              <h3 class=\"write\">" + _0x185373(_0x426d61.label) + "</h3>\n              <p class=\"time\">" + _0x185373(_0x426d61.time) + "</p>\n              <p class=\"venue\">" + _0x185373(_0x426d61.venue) + (_0x426d61.address ? ", " + _0x185373(_0x426d61.address) : '') + "</p>\n              " + (_0x426d61.note ? "<p class=\"note\">" + _0x185373(_0x426d61.note) + "</p>" : '') + "\n              <div class=\"btns\">\n                " + (_0x426d61.mapUrl ? "<a class=\"btn\" href=\"" + _0x185373(_0x426d61.mapUrl) + "\" target=\"_blank\" rel=\"noopener\">" + "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/></svg>" + _0x185373(_0x154664.venueLabel) + "</a>" : '') + "\n                <button type=\"button\" class=\"btn\" data-cal=\"" + _0x50733e + "\">" + "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3.5\" y=\"5\" width=\"17\" height=\"15\" rx=\"1.5\"/><path d=\"M3.5 9.5h17M8 3v4M16 3v4\"/></svg>" + _0x185373(_0x154664.calendarLabel) + "</button>\n              </div>\n            </div>").join('') + "\n        </div>\n      </div>\n    </section>";
      },
      "rsvp": () => {
        const _0x518bdb = _0xc343c0.rsvp;
        return "\n    <section class=\"sec\" id=\"rsvp\">\n      <div class=\"frame sk\" data-sk=\"rect\" data-r>\n        " + _0x39c818("corner tl", "cluster.webp") + "\n        " + ("<p class=\"eyebrow\" data-r>" + _0x185373(_0x518bdb.eyebrow) + "</p><h2 class=\"h2 write\" data-r style=\"--d:.15s\">" + _0x185373(_0x518bdb.heading) + "</h2><div class=\"rule\" data-r style=\"--d:.5s\"><img src=\"./assets/images/divider.webp\" alt=\"\" aria-hidden=\"true\" /></div>") + "\n        <form class=\"form\" id=\"rsvpForm\" novalidate data-r style=\"--d:.35s\">\n          <div class=\"fld\" id=\"fName\"><label for=\"rName\">" + _0x185373(_0x518bdb.nameLabel) + "</label><input id=\"rName\" type=\"text\" autocomplete=\"name\" placeholder=\"" + _0x185373(_0x518bdb.namePlaceholder) + "\" /><p class=\"err\">" + _0x185373(_0x518bdb.errName) + "</p></div>\n          <div class=\"fld\" id=\"fChoice\"><span class=\"lbl\">" + _0x185373(_0x518bdb.attendingLabel) + "</span>\n            <div class=\"choice\"><label><input type=\"radio\" name=\"att\" value=\"yes\" />" + _0x185373(_0x518bdb.yesText) + "</label><label><input type=\"radio\" name=\"att\" value=\"no\" />" + _0x185373(_0x518bdb.noText) + "</label></div>\n            <p class=\"err\">" + _0x185373(_0x518bdb.errChoice) + "</p></div>\n          <div class=\"fld\" id=\"fGuests\" hidden><label for=\"rGuests\">" + _0x185373(_0x518bdb.guestsLabel) + "</label><input id=\"rGuests\" type=\"number\" min=\"1\" max=\"20\" inputmode=\"numeric\" value=\"1\" /></div>\n          <div class=\"fld\"><label for=\"rNote\">" + _0x185373(_0x518bdb.noteLabel) + "</label><textarea id=\"rNote\" placeholder=\"" + _0x185373(_0x518bdb.notePlaceholder) + "\"></textarea></div>\n          <p class=\"err\" id=\"rErr\">" + _0x185373(_0x518bdb.error) + "</p>\n          <button type=\"submit\" class=\"btn solid\" id=\"rSend\">" + _0x185373(_0x518bdb.confirm) + "</button>\n        </form>\n        " + _0x39c818("corner br", "cluster.webp") + "\n      </div>\n    </section>";
      },
      "closing": () => {
        const _0x2fe235 = _0xc343c0.closing;
        return "\n    <section class=\"sec closing\">\n      " + _0x39c818("swag2 bloom-in", "extra2.webp", "data-r") + "\n      <p class=\"dua\" lang=\"ar\" dir=\"rtl\" data-r style=\"--d:.2s\">" + _0x185373(_0x2fe235.dua) + "</p>\n      <p class=\"line\" data-r style=\"--d:.35s\">" + _0x185373(_0x2fe235.line) + "</p>\n      <p class=\"cn write\" data-r style=\"--d:.5s\">" + _0x185373(_0x2fe235.names) + "</p>\n      " + _0x39c818("mini bloom-in", "flower.webp", "data-r style=\"--d:.8s\"") + "\n    </section>";
      }
    };
    _0x1613e6("#sections").innerHTML = _0xc343c0.sections.filter(_0x4f0d7e => _0x4b9a5e[_0x4f0d7e]).map(_0x4c4447 => _0x4b9a5e[_0x4c4447]()).join('');
    function _0x37408d(_0x2f0678) {
      return () => ((_0x2f0678 = _0x2f0678 * 0x41a7 % 0x7fffffff) - 0x1) / 0x7ffffffe;
    }
    function _0x3595d0(_0x576b51, _0xb4aad6, _0x2ae0c9, _0x46356b, _0x2b3023, _0x6b26b6, _0x26689e = 0x9) {
      const _0x8c8fa = [];
      const _0x1a237e = (_0x5241fb, _0x5869ff, _0x398077, _0x2fcd3b) => {
        const _0x20c880 = Math.max(0x1, Math.round(Math.hypot(_0x398077 - _0x5241fb, _0x2fcd3b - _0x5869ff) / _0x26689e));
        for (let _0x317c89 = 0x0; _0x317c89 < _0x20c880; _0x317c89++) {
          _0x8c8fa.push([_0x5241fb + (_0x398077 - _0x5241fb) * _0x317c89 / _0x20c880, _0x5869ff + (_0x2fcd3b - _0x5869ff) * _0x317c89 / _0x20c880]);
        }
      };
      const _0x1dafd7 = (_0x31d5a4, _0x364b4b, _0x331ac2, _0x1b31b1, _0x340812) => {
        const _0x15013e = Math.max(0x2, Math.round(Math.abs(_0x340812 - _0x1b31b1) * _0x331ac2 / _0x26689e));
        for (let _0x58ac46 = 0x0; _0x58ac46 < _0x15013e; _0x58ac46++) {
          const _0x2e36eb = _0x1b31b1 + (_0x340812 - _0x1b31b1) * _0x58ac46 / _0x15013e;
          _0x8c8fa.push([_0x31d5a4 + _0x331ac2 * Math.cos(_0x2e36eb), _0x364b4b + _0x331ac2 * Math.sin(_0x2e36eb)]);
        }
      };
      const _0x3bc380 = Math.PI;
      if (_0x576b51 === 'arch') {
        const _0x551a59 = (_0x46356b - _0xb4aad6) / 0x2;
        const _0x1ea42a = _0xb4aad6 + _0x551a59;
        _0x1a237e(_0xb4aad6, _0x2b3023 - _0x6b26b6, _0xb4aad6, _0x2ae0c9 + _0x551a59);
        _0x1dafd7(_0x1ea42a, _0x2ae0c9 + _0x551a59, _0x551a59, _0x3bc380, 0x2 * _0x3bc380);
        _0x1a237e(_0x46356b, _0x2ae0c9 + _0x551a59, _0x46356b, _0x2b3023 - _0x6b26b6);
        _0x1dafd7(_0x46356b - _0x6b26b6, _0x2b3023 - _0x6b26b6, _0x6b26b6, 0x0, _0x3bc380 / 0x2);
        _0x1a237e(_0x46356b - _0x6b26b6, _0x2b3023, _0xb4aad6 + _0x6b26b6, _0x2b3023);
        _0x1dafd7(_0xb4aad6 + _0x6b26b6, _0x2b3023 - _0x6b26b6, _0x6b26b6, _0x3bc380 / 0x2, _0x3bc380);
      } else {
        _0x1a237e(_0xb4aad6 + _0x6b26b6, _0x2ae0c9, _0x46356b - _0x6b26b6, _0x2ae0c9);
        _0x1dafd7(_0x46356b - _0x6b26b6, _0x2ae0c9 + _0x6b26b6, _0x6b26b6, -_0x3bc380 / 0x2, 0x0);
        _0x1a237e(_0x46356b, _0x2ae0c9 + _0x6b26b6, _0x46356b, _0x2b3023 - _0x6b26b6);
        _0x1dafd7(_0x46356b - _0x6b26b6, _0x2b3023 - _0x6b26b6, _0x6b26b6, 0x0, _0x3bc380 / 0x2);
        _0x1a237e(_0x46356b - _0x6b26b6, _0x2b3023, _0xb4aad6 + _0x6b26b6, _0x2b3023);
        _0x1dafd7(_0xb4aad6 + _0x6b26b6, _0x2b3023 - _0x6b26b6, _0x6b26b6, _0x3bc380 / 0x2, _0x3bc380);
        _0x1a237e(_0xb4aad6, _0x2b3023 - _0x6b26b6, _0xb4aad6, _0x2ae0c9 + _0x6b26b6);
        _0x1dafd7(_0xb4aad6 + _0x6b26b6, _0x2ae0c9 + _0x6b26b6, _0x6b26b6, _0x3bc380, 1.5 * _0x3bc380);
      }
      return _0x8c8fa;
    }
    function _0x40992e(_0x32d2c9, _0x512df2, _0x55d711) {
      const _0x1017b5 = _0x512df2() * 6.28;
      const _0x1be596 = _0x512df2() * 6.28;
      const _0x5a6c12 = _0x512df2() * 6.28;
      const _0x313dff = _0x512df2() * 6.28;
      let _0x8d3bed = 0x0;
      const _0x2a9468 = _0x32d2c9.map(([_0x2e1949, _0x4c8608], _0x363fbb) => {
        if (_0x363fbb) {
          _0x8d3bed += Math.hypot(_0x2e1949 - _0x32d2c9[_0x363fbb - 0x1][0x0], _0x4c8608 - _0x32d2c9[_0x363fbb - 0x1][0x1]);
        }
        return [_0x2e1949 + _0x55d711 * (Math.sin(_0x8d3bed * 0.019 + _0x1017b5) + 0.5 * Math.sin(_0x8d3bed * 0.061 + _0x1be596)), _0x4c8608 + _0x55d711 * (Math.sin(_0x8d3bed * 0.023 + _0x5a6c12) + 0.5 * Math.sin(_0x8d3bed * 0.057 + _0x313dff))];
      });
      const _0x36419f = _0x2a9468.slice(0x1, 0x4).map(([_0x5c5df2, _0x2ecae3]) => [_0x5c5df2 + _0x55d711 * 0.9, _0x2ecae3 - _0x55d711 * 0.7]);
      return _0x2a9468.concat(_0x36419f);
    }
    const _0x217745 = _0x2f276a => {
      let _0x290fa4 = 'M' + _0x2f276a[0x0][0x0].toFixed(0x1) + " " + _0x2f276a[0x0][0x1].toFixed(0x1);
      for (let _0x55abe7 = 0x1; _0x55abe7 < _0x2f276a.length - 0x1; _0x55abe7++) {
        const _0x224c46 = (_0x2f276a[_0x55abe7][0x0] + _0x2f276a[_0x55abe7 + 0x1][0x0]) / 0x2;
        const _0x3236db = (_0x2f276a[_0x55abe7][0x1] + _0x2f276a[_0x55abe7 + 0x1][0x1]) / 0x2;
        _0x290fa4 += 'Q' + _0x2f276a[_0x55abe7][0x0].toFixed(0x1) + " " + _0x2f276a[_0x55abe7][0x1].toFixed(0x1) + " " + _0x224c46.toFixed(0x1) + " " + _0x3236db.toFixed(0x1);
      }
      return _0x290fa4;
    };
    function _0x11f332(_0x17849f, _0x569073) {
      const _0x49d0da = _0x17849f.dataset.sk;
      const _0x1109dc = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      _0x1109dc.setAttribute("class", "sk-svg");
      _0x1109dc.setAttribute("aria-hidden", 'true');
      _0x17849f.prepend(_0x1109dc);
      let _0x4e03e5 = 0x0;
      let _0x55ff61 = 0x0;
      const _0xe72ad9 = () => {
        const _0x64e07f = _0x17849f.offsetWidth;
        const _0x5297d5 = _0x17849f.offsetHeight;
        if (!_0x64e07f || !_0x5297d5 || _0x64e07f === _0x4e03e5 && _0x5297d5 === _0x55ff61) {
          return;
        }
        _0x4e03e5 = _0x64e07f;
        _0x55ff61 = _0x5297d5;
        const _0x218dbb = _0x37408d(0x61 + _0x569073 * 0x83);
        const _0x280a03 = _0x49d0da === "arch" ? 0x10 : 0x14;
        const _0x4caed8 = _0x40992e(_0x3595d0(_0x49d0da, 1.5, 1.5, _0x64e07f - 1.5, _0x5297d5 - 1.5, _0x280a03), _0x218dbb, 1.5);
        const _0x5f2c8e = _0x40992e(_0x3595d0(_0x49d0da, 0x7, 0x7, _0x64e07f - 0x7, _0x5297d5 - 0x7, Math.max(0x4, _0x280a03 - 0x7)), _0x218dbb, 1.2);
        _0x1109dc.setAttribute("viewBox", "0 0 " + _0x64e07f + " " + _0x5297d5);
        _0x1109dc.innerHTML = "<path class=\"o\" d=\"" + _0x217745(_0x4caed8) + "\"/><path class=\"i\" d=\"" + _0x217745(_0x5f2c8e) + "\"/>";
        _0xb9f683("path", _0x1109dc).forEach(_0x46b221 => {
          const _0x224cf9 = Math.ceil(_0x46b221.getTotalLength());
          _0x46b221.style.strokeDasharray = _0x224cf9;
          _0x46b221.style.strokeDashoffset = _0x224cf9;
        });
      };
      _0xe72ad9();
      if (window.ResizeObserver) {
        new ResizeObserver(() => requestAnimationFrame(_0xe72ad9)).observe(_0x17849f);
      } else {
        addEventListener("resize", _0xe72ad9);
      }
    }
    _0xb9f683("[data-sk]").forEach(_0x11f332);
    const _0x59dc4a = new IntersectionObserver(_0x42c0e5 => _0x42c0e5.forEach(_0xb30aed => {
      if (!_0xb30aed.isIntersecting) {
        return;
      }
      _0xb30aed.target.classList.add('in');
      _0x59dc4a.unobserve(_0xb30aed.target);
    }), {
      'rootMargin': "0px 0px -8% 0px",
      'threshold': 0.08
    });
    _0xb9f683("[data-r]").forEach(_0x38d1b5 => _0x59dc4a.observe(_0x38d1b5));
    document.addEventListener("animationend", _0x126c67 => {
      if (_0x126c67.animationName === 'write') {
        _0x126c67.target.classList.add("written");
      }
    });
    let _0x250f52 = false;
    document.addEventListener("click", _0x38c654 => {
      const _0x475a0f = _0x38c654.target.closest(".garland, .hang, .flora");
      if (!_0x475a0f || !document.body.classList.contains('go')) {
        return;
      }
      const _0x2cb36a = _0x475a0f.querySelector(".rs");
      if (_0x2cb36a) {
        _0x2cb36a.classList.remove("rustle");
        void _0x2cb36a.offsetWidth;
        _0x2cb36a.classList.add("rustle");
      }
      if (window.WedPetals) {
        WedPetals.puff(_0x38c654.clientX, _0x38c654.clientY, 0x7);
      }
      if (!_0x250f52) {
        _0x250f52 = true;
        document.body.classList.add("tapped");
      }
    });
    const _0x522f12 = _0x1613e6("#hero");
    let _0x99625e = true;
    let _0x376ec9 = false;
    if (!_0x576f68) {
      let _0x32f8d5 = false;
      const _0x12c03b = () => {
        if (_0x32f8d5) {
          return;
        }
        _0x32f8d5 = true;
        requestAnimationFrame(() => {
          _0x32f8d5 = false;
          const _0x133fe1 = Math.min(window.scrollY, innerHeight * 1.2);
          _0x522f12.style.setProperty("--sy", _0x133fe1.toFixed(0x1));
        });
      };
      addEventListener('scroll', _0x12c03b, {
        'passive': true
      });
    }
    new IntersectionObserver(([_0xe36e17]) => {
      _0x99625e = _0xe36e17.isIntersecting;
      if (_0x376ec9 && window.WedPetals) {
        WedPetals.ambient(_0x99625e);
      }
    }, {
      'threshold': 0.25
    }).observe(_0x522f12);
    const _0x3af94a = _0x1613e6("#cd");
    if (_0x3af94a) {
      const _0x4c432e = new Date(_0xc343c0.countdown.targetIso).getTime();
      const _0x10727f = () => {
        const _0x541c15 = Math.max(0x0, Math.floor((_0x4c432e - Date.now()) / 0x3e8));
        const _0x536ca4 = {
          'days': Math.floor(_0x541c15 / 0x15180),
          'hours': Math.floor(_0x541c15 / 0xe10) % 0x18,
          'minutes': Math.floor(_0x541c15 / 0x3c) % 0x3c,
          'seconds': _0x541c15 % 0x3c
        };
        _0xb9f683("[data-u]", _0x3af94a).forEach(_0x33bb7a => {
          const _0x17c0f7 = String(_0x536ca4[_0x33bb7a.dataset.u]).padStart(0x2, '0');
          if (_0x33bb7a.textContent === _0x17c0f7) {
            return;
          }
          _0x33bb7a.textContent = _0x17c0f7;
          _0x33bb7a.classList.remove("tick");
          void _0x33bb7a.offsetWidth;
          _0x33bb7a.classList.add("tick");
        });
      };
      _0x10727f();
      setInterval(_0x10727f, 0x3e8);
    }
    function _0x299949() {
      if (!window.WedCal) {
        return;
      }
      const _0x4213f9 = _0xc343c0.closing.names;
      const _0x2710ec = _0xc343c0.events.items.map(_0xaf5cb8 => ({
        'title': _0xaf5cb8.label + " — " + _0x4213f9,
        'start': _0xaf5cb8.start,
        'end': _0xaf5cb8.end,
        'location': [_0xaf5cb8.venue, _0xaf5cb8.address].filter(Boolean).join(", "),
        'details': _0xaf5cb8.label + " of " + _0x4213f9
      }));
      const _0x244df4 = _0xc343c0.scratch;
      const _0x3dc0f2 = _0x1613e6("#saveCal");
      if (_0x3dc0f2) {
        WedCal.attach(_0x3dc0f2, () => _0x244df4.start ? [{
          'title': _0x244df4.kicker,
          'start': _0x244df4.start,
          'end': _0x244df4.end,
          'location': _0x244df4.location,
          'details': _0x244df4.kicker
        }] : _0x2710ec, {
          'heading': _0x244df4.heading,
          'note': _0x244df4.day + ", " + _0x244df4.date + " · " + _0x244df4.time
        });
      }
      _0xb9f683("[data-cal]").forEach(_0x47c80e => {
        const _0x273b52 = _0xc343c0.events.items[+_0x47c80e.dataset.cal];
        WedCal.attach(_0x47c80e, () => [_0x2710ec[+_0x47c80e.dataset.cal]], {
          'heading': _0x273b52.label,
          'note': _0x273b52.day + ", " + _0x273b52.date + " · " + _0x273b52.time
        });
      });
    }
    function _0x5e2725() {
      const _0xcb828a = _0x1613e6("#scratch");
      if (!_0xcb828a || !window.WedScratch) {
        return;
      }
      WedScratch.mount(_0xcb828a, {
        'foil': ['#e7c3c0', '#f6e4dc', "#d9a3a2", "#f1d6cf"],
        'ink': "rgba(122, 44, 58, .78)",
        'sparkle': "rgba(255, 250, 246, .85)",
        'font': "\"Cormorant Garamond\", Georgia, serif",
        'title': "Scratch to reveal",
        'subtitle': '',
        'onReveal': () => {
          _0xcb828a.parentNode.classList.add('done');
          if (window.WedPetals) {
            WedPetals.burst({
              'from': _0xcb828a,
              'count': 0x30
            });
          }
        }
      });
    }
    const _0x6f0006 = _0x1613e6("#rsvpForm");
    if (_0x6f0006) {
      const _0x137306 = _0xc343c0.rsvp;
      const _0x4ff2a8 = _0x1613e6('#fGuests');
      _0x6f0006.addEventListener("change", _0x2d1c46 => {
        if (_0x2d1c46.target.name === "att") {
          _0x4ff2a8.hidden = _0x2d1c46.target.value !== "yes";
          _0x1613e6("#fChoice").classList.remove("bad");
        }
      });
      _0x1613e6("#rName").addEventListener("input", () => _0x1613e6("#fName").classList.remove("bad"));
      _0x6f0006.addEventListener("submit", async _0x475ae2 => {
        _0x475ae2.preventDefault();
        const _0x5d037d = _0x1613e6("#rName").value.trim();
        const _0x36a680 = _0x6f0006.querySelector("input[name=att]:checked");
        _0x1613e6('#fName').classList.toggle("bad", !_0x5d037d);
        _0x1613e6("#fChoice").classList.toggle("bad", !_0x36a680);
        if (!_0x5d037d || !_0x36a680) {
          return;
        }
        const _0x4531f6 = _0x36a680.value === "yes";
        const _0x1804cd = _0x1613e6('#rSend');
        _0x1804cd.disabled = true;
        _0x1804cd.textContent = _0x137306.sending;
        _0x1613e6('#rErr').style.display = "none";
        try {
          if (_0x137306.endpoint) {
            const _0x5322b0 = await fetch(_0x137306.endpoint, {
              'method': 'POST',
              'headers': {
                'Content-Type': "application/json"
              },
              'body': JSON.stringify({
                'name': _0x5d037d,
                'attendance': _0x4531f6 ? _0x137306.yesText : _0x137306.noText,
                'guests': _0x4531f6 ? String(Math.max(0x1, +_0x1613e6("#rGuests").value || 0x1)) : '',
                'note': _0x1613e6("#rNote").value.trim()
              })
            });
            if (!_0x5322b0.ok) {
              throw new Error("RSVP " + _0x5322b0.status);
            }
          }
          _0x6f0006.outerHTML = "<p class=\"thanks\">" + _0x185373(_0x4531f6 ? _0x137306.thanksYes : _0x137306.thanksNo) + '</p>';
          if (_0x4531f6 && window.WedPetals) {
            WedPetals.burst({
              'count': 0x24
            });
          }
        } catch (_0x414fc9) {
          _0x1804cd.disabled = false;
          _0x1804cd.textContent = _0x137306.confirm;
          _0x1613e6("#rErr").style.display = "block";
        }
      });
    }
    const _0x9d69d9 = _0x1613e6("#music");
    const _0x56cbff = _0x1613e6("#musicBtn");
    _0x9d69d9.src = _0xc343c0.music.src;
    const _0x2eab58 = () => {
      _0x56cbff.innerHTML = _0x9d69d9.paused ? "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 5 6 9H3v6h3l5 4V5z\"/><path d=\"m16 9 6 6M22 9l-6 6\"/></svg>" : "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 5 6 9H3v6h3l5 4V5z\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13\"/></svg>";
      _0x56cbff.setAttribute("aria-label", _0x9d69d9.paused ? _0xc343c0.music.playAria : _0xc343c0.music.pauseAria);
      _0x56cbff.classList.toggle("playing", !_0x9d69d9.paused);
    };
    _0x9d69d9.addEventListener("play", _0x2eab58);
    _0x9d69d9.addEventListener("pause", _0x2eab58);
    _0x56cbff.addEventListener('click', () => _0x9d69d9.paused ? _0x9d69d9.play()['catch'](() => {}) : _0x9d69d9.pause());
    _0x2eab58();
    const _0x34e122 = _0x1613e6("#cover");
    const _0x102d42 = _0x1613e6("#openVideo");
    _0x1613e6("#coverHint").innerHTML = "<span>" + _0x185373(_0xc343c0.cover.hint) + "</span>";
    _0x1613e6("#skip").textContent = _0xc343c0.cover.skip + " ›";
    let _0x2a0352 = false;
    let _0x47c4ff = false;
    function _0x337697() {
      _0x9d69d9.volume = 0.55;
      _0x9d69d9.play()["catch"](() => {});
    }
    function _0x280f15() {
      if (_0x47c4ff) {
        return;
      }
      _0x47c4ff = true;
      document.documentElement.classList.remove("locked");
      window.scrollTo(0x0, 0x0);
      document.body.classList.add('go');
      _0x34e122.classList.add("gone");
      _0x56cbff.hidden = false;
      setTimeout(() => _0x34e122.remove(), 0x578);
      setTimeout(() => {
        _0x376ec9 = true;
        if (window.WedPetals && _0x99625e) {
          WedPetals.ambient(true);
        }
      }, 0xc80);
      setTimeout(() => {
        if (_0x250f52) {
          return;
        }
        _0xb9f683("#hero .rs").forEach((_0x4385bb, _0x2a65d7) => setTimeout(() => {
          _0x4385bb.classList.remove("rustle");
          void _0x4385bb.offsetWidth;
          _0x4385bb.classList.add('rustle');
        }, _0x2a65d7 * 0x8c));
        if (window.WedPetals && _0x99625e) {
          _0xb9f683("#hero .garland, #hero .hang").forEach(_0x2918d5 => {
            const _0x3b3d23 = _0x2918d5.getBoundingClientRect();
            WedPetals.puff(_0x3b3d23.left + _0x3b3d23.width * (_0x2918d5.classList.contains('gl') || _0x2918d5.classList.contains("hang-l") ? 0.3 : 0.7), _0x3b3d23.top + _0x3b3d23.height * (_0x2918d5.classList.contains("hang") ? 0.45 : 0.3), 0x5);
          });
        }
      }, 0x14b4);
    }
    function _0x4e47e9() {
      if (_0x2a0352) {
        return;
      }
      _0x2a0352 = true;
      _0x337697();
      _0x34e122.classList.add('opening');
      _0x102d42.play()['catch'](_0x280f15);
      setTimeout(_0x280f15, 0x1b58);
    }
    _0x102d42.addEventListener("timeupdate", () => {
      if (_0x2a0352 && _0x102d42.currentTime >= 4.6) {
        _0x280f15();
      }
    });
    _0x102d42.addEventListener("ended", _0x280f15);
    _0x34e122.addEventListener("click", _0x4e47e9);
    _0x34e122.addEventListener("keydown", _0x1406e8 => (_0x1406e8.key === "Enter" || _0x1406e8.key === " ") && _0x4e47e9());
    _0x1613e6("#skip").addEventListener('click', _0x5e36 => {
      _0x5e36.stopPropagation();
      _0x2a0352 = true;
      _0x337697();
      _0x280f15();
    });
    const _0x2fa59b = () => {
      _0x299949();
      _0x5e2725();
    };
    if (document.readyState === "complete") {
      _0x2fa59b();
    } else {
      window.addEventListener("load", _0x2fa59b);
    }
  })();