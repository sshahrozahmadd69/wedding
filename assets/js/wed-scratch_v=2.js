(function () {
    'use strict';
  
    function _0x465985(_0x1a93c1, _0x281706 = {}) {
      const _0x4f30cf = _0x281706.foil || ['#d9c6a5', '#efe3cc', "#c9ae7e", "#e8d8bb"];
      const _0x4ce271 = document.createElement("canvas");
      _0x4ce271.setAttribute("aria-label", _0x281706.aria || "Scratch to reveal the date");
      _0x4ce271.setAttribute("role", "button");
      _0x4ce271.tabIndex = 0x0;
      _0x4ce271.style.cssText = "position:absolute;inset:0;width:100%;height:100%;z-index:5;cursor:crosshair;touch-action:none;border-radius:inherit;transition:opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)";
      _0x1a93c1.appendChild(_0x4ce271);
      const _0x485d86 = _0x4ce271.getContext('2d', {
        'willReadFrequently': true
      });
      let _0x36b565 = false;
      let _0x569307 = false;
      let _0x36a94d = null;
      let _0x5ddd2f = 0x0;
      let _0x300af1 = 0x0;
  
      function _0x4b7d1f() {
        if (_0x36b565) {
          return;
        }
        const _0x5c373a = _0x1a93c1.getBoundingClientRect();
        const _0x5ab7d1 = Math.min(window.devicePixelRatio || 0x1, 0x2);
        _0x5ddd2f = _0x5c373a.width;
        _0x300af1 = _0x5c373a.height;
        _0x4ce271.width = Math.max(0x1, Math.round(_0x5ddd2f * _0x5ab7d1));
        _0x4ce271.height = Math.max(0x1, Math.round(_0x300af1 * _0x5ab7d1));
        _0x485d86.setTransform(_0x5ab7d1, 0x0, 0x0, _0x5ab7d1, 0x0, 0x0);
        _0x485d86.globalCompositeOperation = "source-over";
        const _0x5c6be5 = _0x485d86.createLinearGradient(0x0, 0x0, _0x5ddd2f, _0x300af1);
        _0x4f30cf.forEach((_0x5d21b2, _0xbe614b) => _0x5c6be5.addColorStop(_0xbe614b / (_0x4f30cf.length - 0x1), _0x5d21b2));
        _0x485d86.fillStyle = _0x5c6be5;
        _0x485d86.fillRect(0x0, 0x0, _0x5ddd2f, _0x300af1);
        const _0x2b1006 = _0x485d86.createLinearGradient(0x0, 0x0, _0x5ddd2f, 0x0);
        _0x2b1006.addColorStop(0x0, "rgba(255,255,255,0)");
        _0x2b1006.addColorStop(0.5, "rgba(255,255,255,0.22)");
        _0x2b1006.addColorStop(0x1, "rgba(255,255,255,0)");
        _0x485d86.fillStyle = _0x2b1006;
        _0x485d86.fillRect(0x0, 0x0, _0x5ddd2f, _0x300af1);
        _0x485d86.fillStyle = _0x281706.sparkle || "rgba(255,255,255,0.55)";
        for (let _0x4712f5 = 0x0; _0x4712f5 < Math.round(_0x5ddd2f * _0x300af1 / 0x384); _0x4712f5++) {
          _0x485d86.globalAlpha = Math.random() * 0.6;
          _0x485d86.beginPath();
          _0x485d86.arc(Math.random() * _0x5ddd2f, Math.random() * _0x300af1, Math.random() * 1.1 + 0.3, 0x0, Math.PI * 0x2);
          _0x485d86.fill();
        }
        _0x485d86.globalAlpha = 0x1;
        _0x485d86.fillStyle = _0x281706.ink || "rgba(60,45,30,.75)";
        _0x485d86.textAlign = 'center';
        _0x485d86.textBaseline = "middle";
        const _0x2cb32e = _0x281706.font || "Georgia, serif";
        _0x485d86.font = "500 " + Math.max(0xb, Math.min(0xf, _0x5ddd2f / 0x1a)) + "px " + _0x2cb32e;
        if ("letterSpacing" in _0x485d86) {
          _0x485d86.letterSpacing = "4px";
        }
        _0x485d86.fillText((_0x281706.title || "Scratch to reveal").toUpperCase(), _0x5ddd2f / 0x2, _0x281706.subtitle === '' ? _0x300af1 / 0x2 : _0x300af1 / 0x2 - 0xa);
        if ("letterSpacing" in _0x485d86) {
          _0x485d86.letterSpacing = "1px";
        }
        _0x485d86.font = "italic 400 " + Math.max(0xc, Math.min(0x10, _0x5ddd2f / 0x18)) + "px " + _0x2cb32e;
        if (_0x281706.subtitle !== '') {
          _0x485d86.fillText(_0x281706.subtitle || "the date awaits", _0x5ddd2f / 0x2, _0x300af1 / 0x2 + 0x10);
        }
      }
  
      const _0x5882fe = _0x5e348d => {
        const _0x49be7b = _0x4ce271.getBoundingClientRect();
        const _0x3068b3 = _0x5e348d.touches ? _0x5e348d.touches[0x0] : _0x5e348d;
        return {
          'x': _0x3068b3.clientX - _0x49be7b.left,
          'y': _0x3068b3.clientY - _0x49be7b.top
        };
      };
  
      function _0x4349bd(_0x3d4634, _0x19d39a) {
        _0x485d86.globalCompositeOperation = "destination-out";
        _0x485d86.lineCap = _0x485d86.lineJoin = "round";
        _0x485d86.lineWidth = Math.max(0x1e, Math.min(0x34, _0x5ddd2f / 0x8));
        _0x485d86.beginPath();
        _0x485d86.moveTo(_0x3d4634.x, _0x3d4634.y);
        _0x485d86.lineTo(_0x19d39a.x, _0x19d39a.y);
        _0x485d86.stroke();
        _0x485d86.beginPath();
        _0x485d86.arc(_0x19d39a.x, _0x19d39a.y, _0x485d86.lineWidth / 0x2, 0x0, Math.PI * 0x2);
        _0x485d86.fill();
      }
  
      function _0x39dc4e() {
        const _0x5d4182 = _0x485d86.getImageData(0x0, 0x0, _0x4ce271.width, _0x4ce271.height).data;
        let _0x5c00e1 = 0x0;
        let _0x38ae65 = 0x0;
        for (let _0x3f6e1b = 0x3; _0x3f6e1b < _0x5d4182.length; _0x3f6e1b += 0x40) {
          _0x38ae65++;
          if (_0x5d4182[_0x3f6e1b] < 0x28) {
            _0x5c00e1++;
          }
        }
        return _0x5c00e1 / _0x38ae65;
      }
  
      function _0x11336d() {
        if (_0x36b565) {
          return;
        }
        _0x36b565 = true;
        _0x4ce271.style.opacity = '0';
        _0x4ce271.style.transform = "scale(1.03)";
        _0x4ce271.style.pointerEvents = "none";
        setTimeout(() => _0x4ce271.remove(), 0x384);
        if (_0x281706.onReveal) {
          _0x281706.onReveal();
        }
      }
  
      const _0x544262 = _0x13d897 => {
        _0x13d897.preventDefault();
        _0x569307 = true;
        _0x36a94d = _0x5882fe(_0x13d897);
        _0x4349bd(_0x36a94d, _0x36a94d);
      };
  
      const _0x355714 = _0x199d52 => {
        if (!_0x569307 || _0x36b565) {
          return;
        }
        _0x199d52.preventDefault();
        const _0x18ff5e = _0x5882fe(_0x199d52);
        _0x4349bd(_0x36a94d, _0x18ff5e);
        _0x36a94d = _0x18ff5e;
      };
  
      const _0x1e00f8 = () => {
        if (!_0x569307 || _0x36b565) {
          return;
        }
        _0x569307 = false;
        if (_0x39dc4e() >= (_0x281706.threshold || 0.5)) {
          _0x11336d();
        }
      };
  
      _0x4ce271.addEventListener("pointerdown", _0x544262);
      _0x4ce271.addEventListener("pointermove", _0x355714);
      window.addEventListener("pointerup", _0x1e00f8);
      _0x4ce271.addEventListener("touchstart", _0x544262, {
        'passive': false
      });
      _0x4ce271.addEventListener("touchmove", _0x355714, {
        'passive': false
      });
      window.addEventListener("touchend", _0x1e00f8);
      _0x4ce271.addEventListener("keydown", _0x5dc4dd => (_0x5dc4dd.key === "Enter" || _0x5dc4dd.key === " ") && _0x11336d());
      new ResizeObserver(_0x4b7d1f).observe(_0x1a93c1);
      _0x4b7d1f();
      return {
        'reveal': _0x11336d
      };
    }
  
    window.WedScratch = {
      'mount': _0x465985
    };
  })();