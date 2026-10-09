(function () {
    'use strict';
  
    const _0x1ec56e = ['petal0', "petal1", "petal2", "petal3", "petal4", "petal5", 'petal6'];
    const _0x2f6384 = {
      'petal3': 0x1
    };
    const _0x14c681 = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const _0x32a1a7 = [];
    let _0x15b86c = null;
  
    _0x1ec56e.forEach(_0x469a3c => {
      const _0x22f16f = new Image();
      _0x22f16f.src = "./assets/images/" + _0x469a3c + ".webp";
      if (_0x2f6384[_0x469a3c]) {
        _0x15b86c = _0x22f16f;
      } else {
        _0x32a1a7.push(_0x22f16f);
      }
    });
  
    let _0x33bf5c;
    let _0x1fe186;
    let _0x3a860b = 0x0;
    let _0xf38f41 = 0x0;
    let _0x304695 = 0x1;
    let _0x18e501 = false;
    let _0xfea22b = 0x0;
    let _0x2a0acf = false;
    let _0x4e61a9 = 0x0;
    const _0x1869f9 = [];
  
    function _0x3cce25() {
      if (_0x33bf5c) {
        return;
      }
      _0x33bf5c = document.createElement("canvas");
      _0x33bf5c.setAttribute("aria-hidden", "true");
      _0x33bf5c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:90";
      document.body.appendChild(_0x33bf5c);
      _0x1fe186 = _0x33bf5c.getContext('2d');
      _0x4ed575();
      addEventListener("resize", _0x4ed575);
    }
  
    function _0x4ed575() {
      _0x304695 = Math.min(0x2, devicePixelRatio || 0x1);
      _0x3a860b = innerWidth;
      _0xf38f41 = innerHeight;
      _0x33bf5c.width = _0x3a860b * _0x304695;
      _0x33bf5c.height = _0xf38f41 * _0x304695;
    }
  
    function _0x413ee9(_0x4de919) {
      const _0x206ea4 = Math.random() < 0.08 && _0x15b86c && _0x15b86c.complete ? _0x15b86c : _0x32a1a7[Math.random() * _0x32a1a7.length | 0x0];
      if (!_0x206ea4 || !_0x206ea4.complete || !_0x206ea4.naturalWidth) {
        return;
      }
      const _0x35e773 = (_0x4de919.size || 0x10 + Math.random() * 12) * (_0x206ea4 === _0x15b86c ? 1.5 : 0x1);
      _0x1869f9.push(Object.assign({
        'im': _0x206ea4,
        'w': _0x35e773,
        'h': _0x35e773 * _0x206ea4.naturalHeight / _0x206ea4.naturalWidth,
        't': 0x0,
        'phase': 0x0 + Math.random() * 6.28,
        'flip': 1.1 + Math.random() * 1.5,
        'rot': 0x0 + Math.random() * 6.28,
        'spin': -1.6 + Math.random() * 3.2,
        'alpha': 0x0,
        'life': 0x5 + Math.random() * 3,
        'delay': 0x0,
        'fall': 0x37 + Math.random() * 40
      }, _0x4de919));
    }
  
    function _0x249ed8() {
      if (_0x18e501) {
        return;
      }
      _0x18e501 = true;
      _0xfea22b = performance.now();
      requestAnimationFrame(_0x569fbc);
    }
  
    function _0x569fbc(_0x3edb55) {
      const _0x267344 = Math.min(0.05, (_0x3edb55 - _0xfea22b) / 0x3e8);
      _0xfea22b = _0x3edb55;
      _0x1fe186.setTransform(_0x304695, 0x0, 0x0, _0x304695, 0x0, 0x0);
      _0x1fe186.clearRect(0x0, 0x0, _0x3a860b, _0xf38f41);
      if (_0x2a0acf && _0x3edb55 > _0x4e61a9 && !document.hidden) {
        _0x4e61a9 = _0x3edb55 + (0x2bc + Math.random() * 800);
        const _0x5c3aa0 = document.getElementById("page");
        const _0x1df285 = _0x5c3aa0 ? _0x5c3aa0.getBoundingClientRect() : {
          'left': 0x0,
          'width': _0x3a860b
        };
        _0x413ee9({
          'x': _0x1df285.left + (0x0 + Math.random() * (_0x1df285.width - 0x0)),
          'y': -0x1e,
          'vx': -0xa + Math.random() * 30,
          'vy': 0x14 + Math.random() * 20,
          'life': 0x9 + Math.random() * 4,
          'size': 0xd + Math.random() * 9,
          'peak': 0.8
        });
      }
      for (let _0x4a5db3 = _0x1869f9.length - 0x1; _0x4a5db3 >= 0x0; _0x4a5db3--) {
        const _0x107db6 = _0x1869f9[_0x4a5db3];
        if (_0x107db6.delay > 0x0) {
          _0x107db6.delay -= _0x267344;
          continue;
        }
        _0x107db6.t += _0x267344;
        if (_0x107db6.t > _0x107db6.life || _0x107db6.y > _0xf38f41 + 0x3c) {
          _0x1869f9.splice(_0x4a5db3, 0x1);
          continue;
        }
        _0x107db6.vx += (-_0x107db6.vx * 1.6 + Math.sin(_0x107db6.t * 1.5 + _0x107db6.phase) * 0x3c) * _0x267344;
        _0x107db6.vy += (_0x107db6.fall - _0x107db6.vy) * 2.2 * _0x267344;
        _0x107db6.x += _0x107db6.vx * _0x267344;
        _0x107db6.y += _0x107db6.vy * _0x267344;
        _0x107db6.rot += _0x107db6.spin * _0x267344;
        _0x107db6.alpha = Math.max(0x0, Math.min(0x1, _0x107db6.t / 0.35, (_0x107db6.life - _0x107db6.t) / 1.2)) * (_0x107db6.peak || 0x1);
        _0x1fe186.save();
        _0x1fe186.translate(_0x107db6.x, _0x107db6.y);
        _0x1fe186.rotate(_0x107db6.rot);
        _0x1fe186.scale(Math.cos(_0x107db6.t * _0x107db6.flip + _0x107db6.phase) * 0.5 + 0.55, 0x1);
        _0x1fe186.globalAlpha = _0x107db6.alpha;
        _0x1fe186.drawImage(_0x107db6.im, -_0x107db6.w / 0x2, -_0x107db6.h / 0x2, _0x107db6.w, _0x107db6.h);
        _0x1fe186.restore();
      }
      if (_0x1869f9.length || _0x2a0acf) {
        requestAnimationFrame(_0x569fbc);
      } else {
        _0x18e501 = false;
        _0x1fe186.clearRect(0x0, 0x0, _0x3a860b, _0xf38f41);
      }
    }
  
    function _0x5f08d3(_0xb827cc = {}) {
      if (_0x14c681) {
        return;
      }
      _0x3cce25();
      const _0x2c9e6d = _0xb827cc.from && _0xb827cc.from.getBoundingClientRect ? _0xb827cc.from.getBoundingClientRect() : {
        'left': _0x3a860b / 0x2,
        'top': _0xf38f41 / 0x2,
        'width': 0x0,
        'height': 0x0
      };
      const _0x1706cb = _0x2c9e6d.left + _0x2c9e6d.width / 0x2;
      const _0xcc7131 = _0x2c9e6d.top + _0x2c9e6d.height / 0x2;
      const _0x5b9534 = _0xb827cc.count || 0x2c;
      for (let _0x2369da = 0x0; _0x2369da < _0x5b9534; _0x2369da++) {
        if (_0x2369da < _0x5b9534 * 0.4) {
          const _0x4f6af4 = -Math.PI * 0.95 + Math.random() * (-Math.PI * 0.05 - -Math.PI * 0.95);
          const _0x5eca34 = 0xa0 + Math.random() * 220;
          _0x413ee9({
            'x': _0x1706cb + (-_0x2c9e6d.width / 0x2 + Math.random() * (_0x2c9e6d.width / 0x2 - -_0x2c9e6d.width / 0x2)),
            'y': _0xcc7131 + (-_0x2c9e6d.height / 0x3 + Math.random() * (_0x2c9e6d.height / 0x3 - -_0x2c9e6d.height / 0x3)),
            'vx': Math.cos(_0x4f6af4) * _0x5eca34,
            'vy': Math.sin(_0x4f6af4) * _0x5eca34
          });
        } else {
          _0x413ee9({
            'x': 0x0 + Math.random() * (_0x3a860b - 0x0),
            'y': -_0xf38f41 * 0.25 + Math.random() * (-0x14 - -_0xf38f41 * 0.25),
            'vx': -0xf + Math.random() * 30,
            'vy': 0x1e + Math.random() * 40,
            'delay': 0x0 + Math.random() * 2.4
          });
        }
      }
      _0x249ed8();
    }
  
    function _0x4a3e59(_0x7e00c3, _0x5e67d2, _0x47162c) {
      if (_0x14c681) {
        return;
      }
      _0x3cce25();
      for (let _0x542f7c = 0x0; _0x542f7c < (_0x47162c || 0x6); _0x542f7c++) {
        const _0x563990 = -Math.PI * 0.9 + Math.random() * (-Math.PI * 0.1 - -Math.PI * 0.9);
        const _0x41c2b1 = 0x3c + Math.random() * 110;
        _0x413ee9({
          'x': _0x7e00c3 + (-0xa + Math.random() * 20),
          'y': _0x5e67d2 + (-0xa + Math.random() * 20),
          'vx': Math.cos(_0x563990) * _0x41c2b1,
          'vy': Math.sin(_0x563990) * _0x41c2b1,
          'life': 3.5 + Math.random() * 2,
          'size': 0xe + Math.random() * 10
        });
      }
      _0x249ed8();
    }
  
    function _0x2a3118(_0x1b6d85) {
      if (_0x14c681) {
        return;
      }
      _0x3cce25();
      _0x2a0acf = !!_0x1b6d85;
      if (_0x2a0acf) {
        _0x4e61a9 = 0x0;
        _0x249ed8();
      }
    }
  
    window.WedPetals = {
      'burst': _0x5f08d3,
      'puff': _0x4a3e59,
      'ambient': _0x2a3118
    };
  })();