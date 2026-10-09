(function () {
    'use strict';
  
    const _0x5af9bd = document.createElement("style");
    _0x5af9bd.textContent = "\n    .qq-note { position: fixed; left: 50%; bottom: max(18px, env(safe-area-inset-bottom)); z-index: 2147483000;\n      display: inline-flex; align-items: center; gap: .55rem; width: max-content; max-width: calc(100vw - 32px); white-space: nowrap;\n      padding: .55rem 1rem .55rem .8rem; border-radius: 999px;\n      background: rgba(28, 22, 16, .62); color: #f6efe3; border: 1px solid rgba(214, 190, 150, .45);\n      -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);\n      box-shadow: 0 10px 28px -12px rgba(0, 0, 0, .55);\n      font: 400 12px/1.3 \"Cormorant Garamond\", \"cormorant\", Georgia, serif; letter-spacing: .06em;\n      opacity: 0; transform: translate(-50%, 12px); pointer-events: none;\n      transition: opacity .6s cubic-bezier(.22,1,.36,1), transform .6s cubic-bezier(.22,1,.36,1); }\n    .qq-note.qq-on { opacity: 1; transform: translate(-50%, 0); }\n    .qq-note svg { flex: none; width: 15px; height: 15px; opacity: .85; }\n    @media (prefers-reduced-motion: reduce) { .qq-note { transition: none; } }";
    document.head.appendChild(_0x5af9bd);
  
    const _0xa79a12 = document.createElement("div");
    _0xa79a12.className = "qq-note";
    _0xa79a12.setAttribute("role", "status");
    _0xa79a12.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/><path d=\"M3 3l18 18\"/></svg><span>Music paused in reverence of the Quranic verse</span>";
  
    document.addEventListener("DOMContentLoaded", () => document.body.appendChild(_0xa79a12));
    if (document.body) {
      document.body.appendChild(_0xa79a12);
    }
  
    const _0x41ef47 = new Set();
    let _0x113ad5 = false;
    let _0x5d8ce0 = false;
    let _0x4c650c = null;
    let _0x2c8e92 = null;
  
    function _0x124d4e(_0x665c4f) {
      let _0x21c19c = 0x1;
      for (let _0x535fec = _0x665c4f; _0x535fec && _0x535fec.nodeType === 0x1; _0x535fec = _0x535fec.parentElement) {
        const _0x271691 = getComputedStyle(_0x535fec);
        if (_0x271691.display === "none" || _0x271691.visibility === "hidden") {
          return false;
        }
        _0x21c19c *= parseFloat(_0x271691.opacity);
        if (_0x21c19c < 0.25) {
          return false;
        }
      }
      return true;
    }
  
    function _0x579b69(_0x4b1d52, _0x31d778, _0x4f67dd) {
      clearInterval(_0x4c650c);
      const _0x595c11 = _0x4b1d52.volume;
      let _0x4292a9 = 0x0;
      _0x4c650c = setInterval(() => {
        _0x4292a9++;
        try {
          _0x4b1d52.volume = Math.max(0x0, Math.min(0x1, _0x595c11 + (_0x31d778 - _0x595c11) * (_0x4292a9 / 0x12)));
        } catch (_0x5ce92c) {}
        if (_0x4292a9 >= 0x12) {
          clearInterval(_0x4c650c);
          if (_0x4f67dd) {
            _0x4f67dd();
          }
        }
      }, 50);
    }
  
    function _0x32a130() {
      const _0x57ff03 = document.querySelector("audio");
      if (!_0x57ff03 || _0x113ad5 || _0x5d8ce0) {
        return;
      }
      if (_0x57ff03.paused) {
        return;
      }
      _0x113ad5 = true;
      _0x2c8e92 = _0x57ff03.volume || _0x2c8e92 || 0.6;
      _0xa79a12.classList.add("qq-on");
      _0x579b69(_0x57ff03, 0x0, () => {
        if (_0x113ad5) {
          _0x57ff03.pause();
        }
      });
    }
  
    function _0x17e88() {
      _0xa79a12.classList.remove("qq-on");
      _0x5d8ce0 = false;
      const _0x2d7ff6 = document.querySelector("audio");
      if (!_0x2d7ff6 || !_0x113ad5) {
        return;
      }
      _0x113ad5 = false;
      try {
        _0x2d7ff6.volume = 0x0;
      } catch (_0x37265e) {}
      _0x2d7ff6.play().then(() => _0x579b69(_0x2d7ff6, _0x2c8e92 || 0.6))["catch"](() => {});
    }
  
    function _0x2d72c8() {
      const _0x2b0a6d = [..._0x41ef47].some(_0x124d4e);
      if (_0x2b0a6d) {
        _0x32a130();
      } else {
        _0x17e88();
      }
    }
  
    document.addEventListener("play", _0x4ea772 => {
      if (_0x4ea772.target.tagName !== "AUDIO") {
        return;
      }
      if (_0x113ad5) {
        _0x113ad5 = false;
        _0x5d8ce0 = true;
        _0xa79a12.classList.remove("qq-on");
        clearInterval(_0x4c650c);
        try {
          _0x4ea772.target.volume = _0x2c8e92 || 0.6;
        } catch (_0x1c5550) {}
      }
    }, true);
  
    const _0x48b7bb = new IntersectionObserver(_0x29de3b => {
      _0x29de3b.forEach(_0xc7cf27 => _0xc7cf27.intersectionRatio >= 0.35 ? _0x41ef47.add(_0xc7cf27.target) : _0x41ef47["delete"](_0xc7cf27.target));
      _0x2d72c8();
    }, {
      'threshold': [0x0, 0.35, 0.7, 0x1]
    });
  
    const _0x240506 = new WeakSet();
  
    function _0x3d8656(_0x236b2f) {
      (_0x236b2f.querySelectorAll ? _0x236b2f.querySelectorAll("[data-quran]") : []).forEach(_0x575382 => {
        if (_0x240506.has(_0x575382)) {
          return;
        }
        _0x240506.add(_0x575382);
        _0x48b7bb.observe(_0x575382);
      });
    }
  
    new MutationObserver(_0x18e265 => _0x18e265.forEach(_0x40729a => _0x40729a.addedNodes.forEach(_0x435d66 => _0x435d66.nodeType === 0x1 && (_0x435d66.matches("[data-quran]") ? _0x3d8656(_0x435d66.parentElement || _0x435d66) : _0x3d8656(_0x435d66))))).observe(document.documentElement, {
      'childList': true,
      'subtree': true
    });
  
    document.addEventListener("DOMContentLoaded", () => _0x3d8656(document));
    _0x3d8656(document);
    setInterval(() => _0x41ef47.size && _0x2d72c8(), 0x258);
  })();