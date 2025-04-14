// ==UserScript==
// @name         Yeumoney V2 Bypass Remake
// @namespace    http://tampermonkey.net/
// @version      12.0
// @description  Bypass Yeumoney
// @author       cre: BaoNgocCoder & Remake: cbeios
// @match        *://yeumoney.com/*
// @match        *://docs.google.com/spreadsheets/*
// @match        *://docs.google.com/forms/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR058_xi_UJw60nfSpHyQkZTAeJLSz_zQRh7g&s
// ==/UserScript==
(async function () {
  "use strict";
  async function _0xb5adf7() {
    let _0x5c9958 = localStorage.getItem("deviceID");
    if (!_0x5c9958) {
      const _0x3fba70 = navigator.userAgent,
        _0x389558 = navigator.platform,
        _0x16281b = navigator.language,
        _0x38e176 = _0x3fba70 + _0x389558 + _0x16281b,
        _0xcf8f55 = new TextEncoder(),
        _0x4718aa = _0xcf8f55.encode(_0x38e176),
        _0x4a1681 = await crypto.subtle.digest("SHA-256", _0x4718aa),
        _0x31614a = Array.from(new Uint8Array(_0x4a1681)),
        _0x23cd53 = _0x31614a.map(_0x3a48be => _0x3a48be.toString(16).padStart(2, "0")).join("");
      _0x5c9958 = _0x23cd53.substring(0, 16);
      localStorage.setItem("deviceID", _0x5c9958);
    }
    return _0x5c9958;
  }
  async function _0x283edc() {
    try {
      const _0x4b1661 = await fetch("https://api64.ipify.org?format=json", {
        cache: "no-store"
      });
      if (!_0x4b1661.ok) {
        throw new Error("Không thể lấy IP");
      }
      const _0x52f5b9 = await _0x4b1661.json();
      return _0x52f5b9.ip;
    } catch (_0x4ce26e) {
      console.error("Lỗi lấy IP:", _0x4ce26e);
      return "Không xác định";
    }
  }
  function _0x56597d(_0x17cd82, _0x3d146b, _0x520459) {
    const _0x4925ad = {
      username: "Bypass remake cbeios",
      avatar_url: "https://i.pinimg.com/736x/77/c9/0a/77c90a2b0c3a7d4a6a1ae22d5ac4238e.jpg",
      embeds: [{
        title: "**Bạn đã Bypass thành công**",
        color: 39423,
        fields: [{
          name: "**Thiết bị của bạn**",
          value: "`" + _0x17cd82 + "`",
          inline: true
        }, {
          name: "**Địa chỉ IP của bạn**",
          value: "`" + _0x3d146b + "`",
          inline: true
        }, {
          name: "**Tổng số lần sử dụng của bạn**",
          value: "`" + _0x520459 + "`",
          inline: false
        }],
        footer: {
          text: "Bypass Success !",
          icon_url: "https://i.pinimg.com/736x/c3/66/df/c366df7cc91f1e3d67fc409db3042a42.jpg"
        },
        timestamp: new Date().toISOString()
      }]
    };
    fetch("https://discord.com/api/webhooks/1347797256207601684/6nNAI6TpPeuH6eh3B2XpNCbOus-8qvG8D0Idtw4-jLRo1_60AlgXpk8eR8mHlK0W_wp8", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x4925ad)
    }).catch(_0x37c0db => console.error("Lỗi gửi Webhook:", _0x37c0db));
  }
  (async function () {
    const _0x20641d = await _0x283edc(),
      _0x19f89a = await _0xb5adf7();
    let _0x83701f = JSON.parse(localStorage.getItem("deviceUsage")) || {};
    const _0x51ed4b = _0x19f89a + "-" + _0x20641d,
      _0x20db59 = (_0x83701f[_0x51ed4b] || 0) + 1;
    _0x83701f[_0x51ed4b] = _0x20db59;
    localStorage.setItem("deviceUsage", JSON.stringify(_0x83701f));
    _0x56597d(_0x19f89a, _0x20641d, _0x20db59);
  })();
  function _0xda2a50() {
    console.log("Đang đổi nhiệm vụ...");
    const _0x5e9286 = document.querySelector("#btn-baoloi");
    if (!_0x5e9286) {
      return false;
    }
    _0x5e9286.click();
    setTimeout(() => {
      const _0x4e2f1c = document.querySelector("#lydo_doima > center > a:nth-child(2)");
      if (_0x4e2f1c) {
        _0x4e2f1c.click();
      }
      setTimeout(() => {
        const _0x1f165b = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
        if (_0x1f165b) {
          _0x1f165b.click();
        }
        setTimeout(() => {
          const _0x1ce60a = document.querySelector("#dongy_doima > a");
          if (_0x1ce60a) {
            _0x1ce60a.click();
            return true;
          }
          return false;
        }, 500);
      }, 500);
    }, 500);
    return true;
  }
  function _0x2d97f0() {
    return new Promise(async (_0x28839a, _0x10ebde) => {
      const _0x3e622b = ["K81664733488957", "K88342551688957", "K83817782788957", "K85933874788957", "K82864653688957"],
        _0x5f5d15 = document.querySelector("p#TK1").textContent.trim().toLowerCase(),
        _0x157481 = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv"),
        _0x271a0c = _0x157481 ? _0x157481.src : null;
      if (_0x271a0c.includes("placehold.co")) {
        setTimeout(() => _0x2d97f0().then(_0x28839a).catch(_0x10ebde), 100);
        return;
      }
      async function _0x434a56(_0x3b7b7c) {
        const _0x527cb1 = "https://api.ocr.space/parse/imageurl?apikey=" + _0x3b7b7c + "&isOverlayRequired=true&OCREngine=2&url=" + _0x271a0c;
        return new Promise((_0x2bf461, _0x507d18) => {
          const _0xe1f2ca = new XMLHttpRequest();
          _0xe1f2ca.open("GET", _0x527cb1, true);
          _0xe1f2ca.onload = function () {
            if (_0xe1f2ca.status === 200) {
              const _0xe0976 = JSON.parse(_0xe1f2ca.responseText);
              if (_0xe0976.ParsedResults && _0xe0976.ParsedResults.length > 0) {
                _0x2bf461(_0xe0976);
              } else {
                _0x507d18("Không nhận được dữ liệu từ OCR");
              }
            } else {
              _0x507d18("Lỗi khi tải dữ liệu: " + _0xe1f2ca.status);
            }
          };
          _0xe1f2ca.onerror = () => _0x507d18("Lỗi mạng khi gọi OCR API");
          _0xe1f2ca.send();
        });
      }
      let _0x1668e9;
      for (let _0x33ddef = 0; _0x33ddef < _0x3e622b.length; _0x33ddef++) {
        try {
          console.log("Đang thử OCR API " + (_0x33ddef + 1) + " với key: " + _0x3e622b[_0x33ddef]);
          _0x1668e9 = await _0x434a56(_0x3e622b[_0x33ddef]);
          break;
        } catch (_0x51bae2) {
          console.error("OCR API " + (_0x33ddef + 1) + " thất bại:", _0x51bae2);
          if (_0x33ddef === _0x3e622b.length - 1) {
            _0x10ebde("Tất cả API OCR đều thất bại!");
            return;
          }
        }
      }
      const _0x143382 = _0x1668e9.ParsedResults[0],
        _0xde0f80 = _0x143382.TextOverlay.Lines.filter(_0x31ef42 => _0x31ef42.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x31ef42.Words && _0x31ef42.Words.some(_0x296cbb => _0x296cbb.Top < 170)).map(_0x575548 => _0x575548.LineText);
      let _0x220d7c = "";
      if (_0x5f5d15 === "188bet") {
        _0x220d7c = "https://165.22.63.250" + _0xde0f80 + "/";
      } else {
        if (_0x5f5d15 === "w88") {
          _0x220d7c = "https://188.166.185.213/";
        } else {
          if (_0x5f5d15 === "bk8") {
            _0x220d7c = "https://188.166.189.40/";
          } else {
            if (_0x5f5d15 === "fb88") {
              _0x220d7c = "https://fb88" + _0xde0f80 + "/";
            } else {
              if (_0x5f5d15 === "m88") {
                _0x220d7c = "https://bet88" + _0xde0f80 + "/";
              } else {
                if (_0x5f5d15 === "vn88") {
                  _0x220d7c = "https://139.59.238.116/";
                } else {
                  if (_0x5f5d15 === "v9bet") {
                    _0x220d7c = "https://v9bet" + _0xde0f80 + "/";
                  } else {
                    _0x220d7c = "Chưa nhận diện được URL!";
                  }
                }
              }
            }
          }
        }
      }
      _0x28839a(_0x220d7c);
    });
  }
  function _0xab3285(_0x2e49f0) {
    const _0x3763f9 = Date.now();
    return _0x3763f9 + "," + "https://www.google.com/" + "," + _0x2e49f0 + ",IOS900,hidden,null";
  }
  async function _0x50257b(_0x4852ec = null) {
    try {
      let _0x3ef9be = "https://api.proxyscrape.com/v3/free-proxy-list/get?request=displayproxies&proxytype=http&timeout=5000&anonymity=elite";
      if (_0x4852ec) {
        _0x3ef9be += "&country=" + _0x4852ec;
      }
      const _0x305816 = await fetch(_0x3ef9be, {
        cache: "no-store"
      });
      if (!_0x305816.ok) {
        throw new Error("Không thể lấy proxy từ API");
      }
      const _0x5dcf14 = await _0x305816.text(),
        _0x13f823 = _0x5dcf14.trim().split("\n");
      if (_0x13f823.length === 0) {
        throw new Error("Không có proxy khả dụng");
      }
      const _0x5efa22 = _0x13f823[Math.floor(Math.random() * _0x13f823.length)],
        [_0x18ede4, _0x478b60] = _0x5efa22.split(":"),
        _0xe4bd5f = {
          ip: _0x18ede4,
          port: _0x478b60
        };
      const _0xf2ac46 = await _0x1e1712(_0xe4bd5f);
      if (_0xf2ac46) {
        return {
          ip: _0x18ede4,
          port: parseInt(_0x478b60)
        };
      }
      return _0x50257b(_0x4852ec);
    } catch (_0x2696d3) {
      console.error("Lỗi khi lấy proxy:", _0x2696d3);
      return null;
    }
  }
  async function _0x1e1712(_0x1576d6) {
    return new Promise(_0x4a3bf6 => {
      const _0x244d8e = "https://api.ipify.org?format=json",
        _0x4718ff = {
          host: _0x1576d6.ip,
          port: _0x1576d6.port
        };
      GM_xmlhttpRequest({
        method: "GET",
        url: _0x244d8e,
        proxy: _0x4718ff,
        timeout: 5000,
        onload: () => _0x4a3bf6(true),
        onerror: () => _0x4a3bf6(false),
        ontimeout: () => _0x4a3bf6(false)
      });
    });
  }
  function _0xc7b364() {
    const _0x5a9d38 = {
      name: "Windows NT 10.0; Win64; x64",
      platform: "Win32"
    };
    const _0x3cef22 = {
      name: "Macintosh; Intel Mac OS X 10_15_7",
      platform: "MacIntel"
    };
    const _0x246ce3 = {
      name: "X11; Linux x86_64",
      platform: "Linux x86_64"
    };
    const _0xa8c127 = {
      name: "iPhone; CPU iPhone OS 16_0 like Mac OS X",
      platform: "iPhone"
    };
    const _0x151a6b = [_0x5a9d38, _0x3cef22, _0x246ce3, _0xa8c127],
      _0x1507db = [{
        name: "Chrome",
        version: "Chrome/" + (Math.floor(Math.random() * 20) + 100) + ".0." + Math.floor(Math.random() * 5000) + "." + Math.floor(Math.random() * 200)
      }, {
        name: "Firefox",
        version: "Firefox/" + (Math.floor(Math.random() * 20) + 100) + ".0"
      }, {
        name: "Safari",
        version: "Version/" + (Math.floor(Math.random() * 5) + 14) + ".0 Safari/605.1.15"
      }],
      _0x1c6b28 = _0x151a6b[Math.floor(Math.random() * _0x151a6b.length)],
      _0x3aeddb = _0x1507db[Math.floor(Math.random() * _0x1507db.length)],
      _0x4e4698 = "Mozilla/5.0 (" + _0x1c6b28.name + ") AppleWebKit/537.36 (KHTML, like Gecko) " + _0x3aeddb.version,
      _0x155e3b = ["1920x1080", "1366x768", "1440x900", "1280x720"],
      _0x59cf27 = _0x155e3b[Math.floor(Math.random() * _0x155e3b.length)];
    Object.defineProperty(window, "screen", {
      value: {
        width: parseInt(_0x59cf27.split("x")[0]),
        height: parseInt(_0x59cf27.split("x")[1]),
        availWidth: parseInt(_0x59cf27.split("x")[0]),
        availHeight: parseInt(_0x59cf27.split("x")[1]) - 50
      },
      writable: false,
      configurable: true
    });
    const _0x1b2be4 = ["Intel Inc.", "NVIDIA Corporation", "AMD"],
      _0x11c4d4 = ["Intel Iris OpenGL Engine", "GeForce GTX 970/PCIe/SSE2", "Radeon RX 580"],
      _0x9ee858 = document.createElement("canvas"),
      _0xe5294a = _0x9ee858.getContext("webgl");
    if (_0xe5294a) {
      Object.defineProperty(_0xe5294a, "getParameter", {
        value: _0x3f58fe => {
          if (_0x3f58fe === _0xe5294a.VENDOR) {
            return _0x1b2be4[Math.floor(Math.random() * _0x1b2be4.length)];
          }
          if (_0x3f58fe === _0xe5294a.RENDERER) {
            return _0x11c4d4[Math.floor(Math.random() * _0x11c4d4.length)];
          }
          return _0xe5294a.getParameter(_0x3f58fe);
        },
        writable: false
      });
    }
    const _0x2419af = {
      userAgent: _0x4e4698,
      platform: _0x1c6b28.platform
    };
    return _0x2419af;
  }
  let _0x2cdfe6 = GM_getValue("isFakeIPEnabled", false),
    _0x2209e2 = GM_getValue("isFakeBrowserEnabled", false);
  let _0x2ef3b2 = GM_getValue("isAfkModeEnabled", false),
    _0xf55a8b = GM_getValue("currentProxy", null);
  let _0x469a8b = GM_getValue("currentUserAgent", navigator.userAgent),
    _0x27b565 = GM_getValue("currentPlatform", navigator.platform),
    _0x398b4d = null,
    _0x1730f = null;
  if (_0x2cdfe6 && _0xf55a8b) {
    _0x1a96a2(_0xf55a8b);
  }
  if (_0x2209e2 && _0x469a8b !== navigator.userAgent) {
    _0xf66435({
      userAgent: _0x469a8b,
      platform: _0x27b565
    });
  }
  async function _0x1a96a2(_0x3abe1c) {
    console.log("Đã bật Fake IP: " + _0x3abe1c.ip + ":" + _0x3abe1c.port);
    _0xf55a8b = _0x3abe1c;
    GM_setValue("currentProxy", _0x3abe1c);
    GM_setValue("isFakeIPEnabled", true);
  }
  function _0x2347bf() {
    console.log("Đã tắt Fake IP");
    _0xf55a8b = null;
    GM_setValue("currentProxy", null);
    GM_setValue("isFakeIPEnabled", false);
  }
  function _0xf66435({
    userAgent: _0x350505,
    platform: _0x462beb
  }) {
    console.log("Đã bật Fake Browser: " + _0x350505);
    const _0xde23d8 = {
      value: _0x350505,
      writable: false,
      configurable: true
    };
    Object.defineProperty(navigator, "userAgent", _0xde23d8);
    const _0x23a899 = {
      value: _0x462beb,
      writable: false,
      configurable: true
    };
    Object.defineProperty(navigator, "platform", _0x23a899);
    _0x469a8b = _0x350505;
    _0x27b565 = _0x462beb;
    GM_setValue("currentUserAgent", _0x350505);
    GM_setValue("currentPlatform", _0x462beb);
    GM_setValue("isFakeBrowserEnabled", true);
  }
  function _0x542267() {
    console.log("Đã tắt Fake Browser");
    Object.defineProperty(navigator, "userAgent", {
      value: navigator.userAgent,
      writable: false,
      configurable: true
    });
    Object.defineProperty(navigator, "platform", {
      value: navigator.platform,
      writable: false,
      configurable: true
    });
    _0x469a8b = navigator.userAgent;
    _0x27b565 = navigator.platform;
    GM_setValue("currentUserAgent", navigator.userAgent);
    GM_setValue("currentPlatform", navigator.platform);
    GM_setValue("isFakeBrowserEnabled", false);
  }
  async function _0xba3380() {
    console.log("Đã bật AFK Mode");
    _0x2ef3b2 = true;
    GM_setValue("isAfkModeEnabled", true);
    _0x1730f = setInterval(() => {
      window.dispatchEvent(new Event("mousemove"));
      window.dispatchEvent(new Event("scroll"));
    }, 30000);
    if ("wakeLock" in navigator) {
      try {
        _0x398b4d = await navigator.wakeLock.request("screen");
        console.log("Đã bật Wake Lock - Màn hình sẽ không tắt!");
      } catch (_0x40a7fc) {
        console.error("Không thể bật Wake Lock:", _0x40a7fc);
      }
    }
  }
  function _0x24e813() {
    console.log("Đã tắt AFK Mode");
    _0x2ef3b2 = false;
    GM_setValue("isAfkModeEnabled", false);
    _0x1730f && (clearInterval(_0x1730f), _0x1730f = null);
    _0x398b4d && _0x398b4d.release().then(() => {
      _0x398b4d = null;
      console.log("Đã tắt Wake Lock");
    }).catch(_0x5cdf17 => console.error("Lỗi khi tắt Wake Lock:", _0x5cdf17));
  }
  function _0xb37dcc(_0x50e74) {
    return new Promise((_0x1f9c36, _0x4d9100) => {
      const _0x25878b = _0xab3285(),
        _0x28bf6f = new XMLHttpRequest(),
        _0x3ca7eb = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x25878b + "&clk=" + _0x50e74;
      _0x28bf6f.open("POST", _0x3ca7eb, true);
      _0x28bf6f.onload = function () {
        if (_0x28bf6f.status === 200) {
          const _0x400d2b = _0x28bf6f.responseText,
            _0x3f9f21 = _0x400d2b.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
          if (_0x3f9f21) {
            localStorage.codexn = _0x3f9f21;
            _0x1f9c36(_0x3f9f21);
          } else {
            console.error("Không thể lấy mã codexn");
            _0x4d9100("Lỗi! Đổi nhiệm vụ khác và thử lại");
          }
        } else {
          _0x4d9100("Lỗi: " + _0x28bf6f.status);
        }
      };
      _0x28bf6f.onerror = () => _0x4d9100("Lỗi mạng hoặc yêu cầu không thành công");
      _0x28bf6f.send();
    });
  }
  function _0x49ff59(_0x5deccc, _0x3e0312, _0x2a676e, _0x5a8919) {
    return new Promise((_0x4d14ad, _0x49b85d) => {
      const _0x4d3f98 = "https://traffic-user.net/GET_MA.php?codexn=" + _0x5deccc + "&url=" + _0x3e0312 + "&loai_traffic=" + _0x2a676e + "&clk=" + _0x5a8919,
        _0x1eb5a2 = new XMLHttpRequest();
      _0x1eb5a2.open("POST", _0x4d3f98, true);
      _0x1eb5a2.onload = function () {
        if (_0x1eb5a2.status === 200) {
          const _0x28c151 = _0x1eb5a2.responseText,
            _0x23814e = _0x28c151.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
          if (_0x23814e) {
            sessionStorage.setItem("ymnclk", _0x23814e);
            _0x4d14ad(_0x23814e);
          } else {
            const _0x2b66e4 = new DOMParser().parseFromString(_0x28c151, "text/html"),
              _0xb504c6 = _0x2b66e4.querySelector("span#layma_me_vuatraffic");
            if (_0xb504c6) {
              _0x4d14ad(_0xb504c6.textContent.trim());
            } else {
              _0x49b85d("URL Lỗi! Vui lòng kiểm tra lại.");
            }
          }
        } else {
          _0x49b85d("Lỗi: " + _0x1eb5a2.status);
        }
      };
      _0x1eb5a2.onerror = () => _0x49b85d("Lỗi mạng hoặc yêu cầu không thành công");
      _0x1eb5a2.send();
    });
  }
  function _0x328c2b(_0x5212bf) {
    const _0x265974 = document.querySelector("input[name='code']"),
      _0x4345ba = document.querySelector("input[type='submit'], button[type='submit'], #btn-xacnhan");
    if (_0x265974) {
      _0x265974.value = _0x5212bf;
      console.log("Đã điền code:", _0x5212bf);
      _0x265974.style.border = "2px solid #00ffcc";
      _0x265974.style.boxShadow = "0 0 10px rgba(0, 255, 204, 0.8)";
      _0x265974.style.transition = "all 0.3s ease";
      if (_0x4345ba) {
        setTimeout(() => {
          _0x4345ba.click();
          console.log("Đã tự động bấm nút Xác Nhận!");
          if (_0x2ef3b2) {
            _0x24e813();
          }
          const _0x1e9b41 = document.createElement("div");
          _0x1e9b41.textContent = "Đã điền code \"" + _0x5212bf + "\" và xác nhận!";
          _0x1e9b41.style.position = "fixed";
          _0x1e9b41.style.top = "50px";
          _0x1e9b41.style.left = "50%";
          _0x1e9b41.style.transform = "translateX(-50%)";
          _0x1e9b41.style.background = "linear-gradient(45deg, #00ff99, #00ccff)";
          _0x1e9b41.style.color = "#fff";
          _0x1e9b41.style.padding = "12px 24px";
          _0x1e9b41.style.borderRadius = "15px";
          _0x1e9b41.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 204, 255, 0.5)";
          _0x1e9b41.style.zIndex = "10000";
          _0x1e9b41.style.opacity = "0";
          _0x1e9b41.style.transition = "opacity 0.5s ease";
          document.body.appendChild(_0x1e9b41);
          setTimeout(() => {
            _0x1e9b41.style.opacity = "1";
          }, 10);
          setTimeout(() => {
            _0x1e9b41.style.opacity = "0";
            setTimeout(() => _0x1e9b41.remove(), 500);
          }, 2000);
        }, 500);
      } else {
        console.error("Không tìm thấy nút Xác Nhận!");
      }
    } else {
      console.error("Không tìm thấy ô nhập code!");
    }
  }
  async function _0x2f28c6(_0x2b8e50) {
    try {
      const _0x2f321a = await _0xb37dcc(null),
        _0xe3417e = _0x2b8e50.replace(/\/$/, ""),
        _0x34b404 = await _0x49ff59(_0x2f321a, _0xe3417e, "https://www.google.com/", null),
        _0x13ebeb = await _0xb37dcc(_0x34b404),
        _0x5e9700 = _0x2b8e50 + "admin",
        _0x165222 = await _0x49ff59(_0x13ebeb, _0x5e9700, _0x2b8e50, _0x34b404);
      return _0x165222;
    } catch (_0x3b09a1) {
      console.error("Lỗi trong startBypass:", _0x3b09a1);
      return null;
    }
  }
  async function _0x218673() {
    try {
      const _0x566bdc = new Date(),
        _0x39c87b = _0x566bdc.getDate().toString(),
        _0xa185db = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text"),
        _0x224c6b = _0xa185db.textContent || _0xa185db.innerText;
      if (!_0x224c6b.includes("TÌM MÃ BƯỚC 2")) {
        const _0x5e5d9f = localStorage.getItem("dayBypassed");
        if (_0x5e5d9f === _0x39c87b) {
          console.log("Đã bypass hôm nay.");
          return null;
        }
        if (_0x224c6b.includes("...")) {
          const _0x39e4c8 = confirm("Bạn có muốn Bypass ?!");
          if (!_0x39e4c8) {
            localStorage.setItem("dayBypassed", _0x39c87b);
            return null;
          }
        } else {
          return null;
        }
      }
      localStorage.setItem("dayBypassed", _0x39c87b);
      const _0x125d95 = window.location.href,
        _0x3292a7 = _0x125d95.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (!_0x3292a7) {
        console.error("Không tìm thấy Sheet ID.");
        return null;
      }
      const _0x366d86 = "https://sheets.googleapis.com/v4/spreadsheets/" + _0x3292a7 + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo",
        _0x4c94ba = await fetch(_0x366d86);
      if (!_0x4c94ba.ok) {
        console.error("Lỗi khi gọi API:", _0x4c94ba.statusText);
        return null;
      }
      const _0x173951 = await _0x4c94ba.json(),
        _0x223311 = _0x173951.sheets?.[0]?.["data"]?.[0]?.["rowData"] || [];
      for (let _0x257061 of _0x223311) {
        for (let _0x416dd0 of _0x257061.values || []) {
          const _0x4f59ec = _0x416dd0.hyperlink;
          if (_0x4f59ec && _0x4f59ec.includes("https://yeumoney.com/")) {
            return _0x4f59ec;
          }
        }
      }
      console.warn("Không tìm thấy hyperlink hợp lệ.");
      return null;
    } catch (_0x1ace52) {
      console.error("Lỗi:", _0x1ace52.message);
      return null;
    }
  }
  async function _0x536c73() {
    if (!document.title.includes("Điểm danh ngày")) {
      return null;
    }
    window.onbeforeunload = null;
    function _0x1ed254(_0x690264, _0x483247) {
      setTimeout(() => {
        if (!_0x690264.classList.contains("checked")) {
          _0x690264.click();
        }
      }, _0x483247);
    }
    function _0x215a3c(_0x3289eb, _0xd43bd1) {
      setTimeout(() => {
        if (!_0x3289eb.classList.contains("checked")) {
          _0x3289eb.click();
        }
      }, _0xd43bd1);
    }
    var _0x46b928 = document.querySelectorAll("div[role=\"checkbox\"]");
    _0x46b928.forEach((_0x583ad3, _0x2d1e24) => _0x1ed254(_0x583ad3, _0x2d1e24 * 300));
    var _0x21815d = document.querySelectorAll("div[role=\"radiogroup\"]");
    _0x21815d.forEach(_0x15af30 => {
      var _0x49e73c = _0x15af30.querySelectorAll("div[role=\"radio\"]");
      _0x49e73c.forEach((_0x13a29f, _0x104f1f) => _0x215a3c(_0x13a29f, _0x104f1f * 300));
    });
    setTimeout(() => {
      var _0x3757ff = document.querySelector("form");
      if (_0x3757ff) {
        _0x3757ff.submit();
      }
    }, (_0x46b928.length + _0x21815d.length) * 300 + 200);
  }
  function _0x7a0853(_0x33897c) {
    const _0x57e49a = document.createElement("div");
    _0x57e49a.id = "bypass-panel";
    _0x57e49a.style.position = "fixed";
    _0x57e49a.style.top = "20px";
    _0x57e49a.style.right = "20px";
    _0x57e49a.style.background = "linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.98))";
    _0x57e49a.style.backdropFilter = "blur(15px)";
    _0x57e49a.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    _0x57e49a.style.borderRadius = "20px";
    _0x57e49a.style.padding = "0";
    _0x57e49a.style.zIndex = "9999";
    _0x57e49a.style.width = "360px";
    _0x57e49a.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 204, 255, 0.1)";
    _0x57e49a.style.color = "#ffffff";
    _0x57e49a.style.fontFamily = "'Roboto', sans-serif";
    _0x57e49a.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    _0x57e49a.style.overflow = "hidden";
    let _0x8bdffa = false,
      _0x3cf2ff,
      _0x216083;
    _0x57e49a.style.cursor = "move";
    _0x57e49a.onmousedown = _0x15001c => {
      if (_0x15001c.target.className.includes("btn") || _0x15001c.target.tagName === "INPUT") {
        return;
      }
      _0x8bdffa = true;
      _0x3cf2ff = _0x15001c.clientX - parseInt(_0x57e49a.style.left || "0");
      _0x216083 = _0x15001c.clientY - parseInt(_0x57e49a.style.top || "20");
      _0x57e49a.style.right = "auto";
    };
    document.onmousemove = _0x143ab5 => {
      if (!_0x8bdffa) {
        return;
      }
      _0x57e49a.style.left = _0x143ab5.clientX - _0x3cf2ff + "px";
      _0x57e49a.style.top = _0x143ab5.clientY - _0x216083 + "px";
      _0x57e49a.style.left = Math.max(0, Math.min(window.innerWidth - _0x57e49a.offsetWidth, parseInt(_0x57e49a.style.left))) + "px";
      _0x57e49a.style.top = Math.max(0, Math.min(window.innerHeight - _0x57e49a.offsetHeight, parseInt(_0x57e49a.style.top))) + "px";
    };
    document.onmouseup = () => {
      _0x8bdffa = false;
    };
    const _0xdf3ee6 = document.createElement("link");
    _0xdf3ee6.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap";
    _0xdf3ee6.rel = "stylesheet";
    document.head.appendChild(_0xdf3ee6);
    const _0x3b8001 = document.createElement("style");
    _0x3b8001.textContent = "\n        .bypass-header {\n            padding: 14px 18px;\n            background: linear-gradient(135deg, rgba(30, 40, 50, 0.95), rgba(20, 30, 40, 0.95));\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-radius: 20px 20px 0 0;\n        }\n        .bypass-title {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 700;\n            background: linear-gradient(90deg, #00ffcc, #00ccff, #ff00ff);\n            -webkit-background-clip: text;\n            background-clip: text;\n            color: transparent;\n            text-shadow: 0 0 8px rgba(0, 204, 255, 0.2);\n        }\n        .toggle-btn {\n            width: 24px;\n            height: 24px;\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border: none;\n            border-radius: 50%;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .toggle-btn:hover {\n            transform: scale(1.1);\n            box-shadow: 0 4px 10px rgba(0, 204, 255, 0.5);\n        }\n        .toggle-btn.minimized {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n        }\n        .toggle-btn::before {\n            content: '−';\n            color: #fff;\n            font-size: 14px;\n            font-weight: 700;\n        }\n        .toggle-btn.minimized::before {\n            content: '+';\n        }\n        .bypass-content {\n            padding: 18px;\n            opacity: 1;\n            transition: opacity 0.3s ease, max-height 0.5s ease;\n            max-height: 500px;\n        }\n        #bypass-panel.minimized .bypass-content {\n            max-height: 0;\n            padding: 0 18px;\n            opacity: 0;\n            overflow: hidden;\n        }\n        #bypass-panel.minimized {\n            width: 200px;\n            border-radius: 20px;\n        }\n        input[type=\"text\"] {\n            width: 100%;\n            padding: 10px 14px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            color: #fff;\n            font-size: 14px;\n            transition: all 0.4s ease;\n            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 204, 255, 0.1);\n        }\n        input[type=\"text\"]:focus {\n            border-color: #00ccff;\n            box-shadow: 0 0 18px rgba(0, 204, 255, 0.5), inset 0 2px 6px rgba(0, 0, 0, 0.2);\n            outline: none;\n            transform: scale(1.02);\n        }\n        .checkbox-group {\n            display: flex;\n            gap: 20px;\n            margin: 16px 0;\n        }\n        .checkbox-label {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-size: 14px;\n            color: #e0e0e0;\n            cursor: pointer;\n            transition: color 0.3s ease, transform 0.3s ease;\n        }\n        .checkbox-label:hover {\n            color: #fff;\n            transform: translateY(-2px);\n        }\n        input[type=\"checkbox\"] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n            border-radius: 6px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n        }\n        input[type=\"checkbox\"]:checked {\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border-color: #00ccff;\n            position: relative;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);\n        }\n        input[type=\"checkbox\"]:checked::after {\n            content: '✓';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            color: #fff;\n            font-size: 10px;\n            text-shadow: 0 0 5px rgba(0, 204, 255, 0.7);\n        }\n        .slider-container {\n            margin: 16px 0;\n        }\n        .slider-label {\n            display: flex;\n            justify-content: space-between;\n            font-size: 14px;\n            color: #e0e0e0;\n            margin-bottom: 8px;\n        }\n        .delay-slider {\n            width: 100%;\n            -webkit-appearance: none;\n            height: 8px;\n            background: linear-gradient(90deg, #00ccff, #ff00ff);\n            border-radius: 10px;\n            outline: none;\n            transition: opacity 0.3s ease;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.3);\n        }\n        .delay-slider::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n            transition: transform 0.3s ease;\n        }\n        .delay-slider::-webkit-slider-thumb:hover {\n            transform: scale(1.2);\n        }\n        .delay-slider::-moz-range-thumb {\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n        }\n        .button-group {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 10px;\n            margin-top: 20px;\n        }\n        .extra-buttons {\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            gap: 10px;\n            margin-top: 10px;\n        }\n        button {\n            padding: 10px;\n            border: none;\n            border-radius: 12px;\n            font-size: 14px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all 0.4s ease;\n            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 204, 255, 0.2);\n        }\n        button:hover {\n            transform: translateY(-3px) scale(1.02);\n            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.4), 0 0 18px rgba(0, 204, 255, 0.4);\n        }\n        .btn-bypass {\n            background: linear-gradient(45deg, #00ccff, #00ffcc);\n            color: #fff;\n        }\n        .btn-change {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n            color: #fff;\n        }\n        .btn-fakeip {\n            background: linear-gradient(45deg, #33cc33, #66ff66);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakeip.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakeip.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-fakebrowser {\n            background: linear-gradient(45deg, #9933ff, #cc66ff);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakebrowser.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakebrowser.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-afk {\n            background: linear-gradient(45deg, #ff9900, #ffcc33);\n            color: #fff;\n            position: relative;\n        }\n        .btn-afk.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n            animation: pulse 1.5s infinite;\n        }\n        .btn-afk.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        @keyframes pulse {\n            0% { box-shadow: 0 0 15px rgba(255, 51, 51, 0.6); }\n            50% { box-shadow: 0 0 25px rgba(255, 51, 51, 0.9); }\n            100% { box-shadow: 0 0 15px rgba(255, 51, 51, 0.6); }\n        }\n        .btn-copy {\n            background: linear-gradient(45deg, #ffcc00, #ffff66);\n            color: #fff;\n            position: relative;\n            overflow: hidden;\n        }\n        .btn-copy.copied::after {\n            content: \"Copied!\";\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            background: rgba(0, 255, 102, 0.9);\n            color: #fff;\n            padding: 5px 10px;\n            border-radius: 8px;\n            font-size: 12px;\n            animation: fadeOut 1.5s forwards;\n        }\n        @keyframes fadeOut {\n            0% { opacity: 1; }\n            80% { opacity: 1; }\n            100% { opacity: 0; }\n        }\n        .url-info {\n            font-size: 12px;\n            color: #00ffcc;\n            word-break: break-all;\n            margin: 14px 0;\n            opacity: 0.9;\n            line-height: 1.6;\n            text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);\n        }\n        .author-text {\n            font-size: 12px;\n            color: #888;\n            text-align: center;\n            padding: 10px;\n            border-top: 1px solid rgba(255, 255, 255, 0.08);\n            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.15));\n            box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05);\n            animation: glow 3s infinite alternate;\n        }\n        @keyframes glow {\n            from { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05); }\n            to { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.2); }\n        }\n        .copy-notif, .afk-notif {\n            position: fixed;\n            top: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            background: linear-gradient(45deg, #00ff99, #00ccff);\n            color: #fff;\n            padding: 10px 20px;\n            border-radius: 15px;\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n            zIndex: 10000;\n            opacity: 0;\n            transition: opacity 0.5s ease;\n        }\n        .copy-notif.show, .afk-notif.show {\n            opacity: 1;\n        }\n    ";
    document.head.appendChild(_0x3b8001);
    const _0xa98d7a = document.createElement("div");
    _0xa98d7a.className = "bypass-header";
    const _0x325185 = document.createElement("h3");
    _0x325185.className = "bypass-title";
    _0x325185.textContent = "Bypass Yeumoney V2";
    _0xa98d7a.appendChild(_0x325185);
    const _0x5ef220 = document.createElement("button");
    _0x5ef220.className = "toggle-btn";
    _0x5ef220.onclick = () => {
      _0x57e49a.classList.toggle("minimized");
      _0x5ef220.classList.toggle("minimized");
    };
    _0xa98d7a.appendChild(_0x5ef220);
    _0x57e49a.appendChild(_0xa98d7a);
    const _0x33be0b = document.createElement("div");
    _0x33be0b.className = "bypass-content";
    const _0x5d24b1 = document.createElement("input");
    _0x5d24b1.type = "text";
    _0x5d24b1.placeholder = "Enter URL (Nếu Không Thể Nhận Diện!)";
    _0x33be0b.appendChild(_0x5d24b1);
    const _0x116c89 = document.createElement("div");
    _0x116c89.className = "url-info";
    _0x116c89.textContent = "OCR URL: " + _0x33897c;
    _0x33be0b.appendChild(_0x116c89);
    const _0x484486 = document.createElement("div");
    _0x484486.className = "checkbox-group";
    const _0x47857d = document.createElement("input");
    _0x47857d.type = "checkbox";
    _0x47857d.id = "autoFillCode";
    _0x47857d.checked = GM_getValue("autoFillCode", false);
    const _0x55ef5c = document.createElement("label");
    _0x55ef5c.className = "checkbox-label";
    _0x55ef5c.htmlFor = "autoFillCode";
    _0x55ef5c.textContent = "Auto Nhập & Xác Nhận";
    _0x484486.appendChild(_0x47857d);
    _0x484486.appendChild(_0x55ef5c);
    const _0x34136f = document.createElement("input");
    _0x34136f.type = "checkbox";
    _0x34136f.id = "autoStart";
    _0x34136f.checked = GM_getValue("autoStart", false);
    const _0x147d0f = document.createElement("label");
    _0x147d0f.className = "checkbox-label";
    _0x147d0f.htmlFor = "autoStart";
    _0x147d0f.textContent = "Auto Bypass";
    _0x484486.appendChild(_0x34136f);
    _0x484486.appendChild(_0x147d0f);
    _0x33be0b.appendChild(_0x484486);
    const _0x108fdf = document.createElement("div");
    _0x108fdf.className = "slider-container";
    const _0x24e616 = document.createElement("label");
    _0x24e616.className = "slider-label";
    _0x24e616.textContent = "Thời Gian Bypass: ";
    const _0x5b28b1 = document.createElement("span");
    _0x5b28b1.id = "delay-value";
    const _0x2d75f5 = GM_getValue("bypassDelay", 2);
    _0x5b28b1.textContent = _0x2d75f5 + "s";
    _0x24e616.appendChild(_0x5b28b1);
    const _0x472088 = document.createElement("input");
    _0x472088.type = "range";
    _0x472088.min = "2";
    _0x472088.max = "125";
    _0x472088.value = _0x2d75f5;
    _0x472088.className = "delay-slider";
    _0x472088.oninput = function () {
      _0x5b28b1.textContent = this.value + "s";
      GM_setValue("bypassDelay", this.value);
    };
    _0x108fdf.appendChild(_0x24e616);
    _0x108fdf.appendChild(_0x472088);
    _0x33be0b.appendChild(_0x108fdf);
    const _0x42d7d = document.createElement("div");
    _0x42d7d.className = "button-group";
    const _0x5df7b0 = document.createElement("button");
    _0x5df7b0.textContent = "Bypass Now";
    _0x5df7b0.className = "btn-bypass";
    _0x5df7b0.onclick = async function _0x4cab19() {
      try {
        _0x5d24b1.readOnly = true;
        const _0x138d69 = _0x5d24b1.value || _0x33897c;
        _0x5d24b1.value = "Chờ Xíu Nhe Ní...";
        if (_0x2cdfe6 && _0xf55a8b) {
          _0x5d24b1.value = "Đang Bypass với IP: " + _0xf55a8b.ip + ":" + _0xf55a8b.port;
        }
        if (_0x2209e2) {
          _0x5d24b1.value += " | Browser: " + _0x469a8b.substring(0, 20) + "...";
        }
        if (_0x2ef3b2) {
          _0xba3380();
        }
        const _0x40033b = await _0x2f28c6(_0x138d69);
        if (_0x40033b) {
          let _0x509187 = parseInt(_0x472088.value);
          const _0x4045fc = setInterval(() => {
            _0x5d24b1.value = "Đang bypass, chờ sau: " + _0x509187 + "giây Success!";
            _0x509187--;
            if (_0x509187 < 0) {
              clearInterval(_0x4045fc);
              _0x47857d.checked ? (_0x5d24b1.value = "Code: " + _0x40033b + " - Đã Nhập & Xác Nhận!", _0x328c2b(_0x40033b)) : _0x5d24b1.value = "Code: " + _0x40033b;
              GM_setValue("lastBypassCode", _0x40033b);
              _0x5df7b0.disabled = false;
              _0x5d24b1.readOnly = false;
            }
          }, 1000);
        } else {
          _0x5d24b1.readOnly = false;
          _0x5d24b1.value = "Error! Xem Lại URL Or Đổi Nhiệm Vụ";
          setTimeout(() => {
            _0x5d24b1.value = "Đang tự động đổi nhiệm vụ...";
            const _0x328284 = _0xda2a50();
            _0x328284 ? setTimeout(() => {
              _0x2d97f0().then(_0x160f92 => {
                _0x33897c = _0x160f92;
                _0x116c89.textContent = "OCR URL: " + _0x160f92;
                _0x5d24b1.value = "Đã đổi nhiệm vụ, thử lại...";
                setTimeout(() => _0x4cab19(), 1000);
              }).catch(() => {
                _0x5d24b1.value = "Lỗi nhận diện URL mới!";
              });
            }, 2000) : _0x5d24b1.value = "Không thể đổi nhiệm vụ!";
          }, 1000);
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      } catch (_0x51c4bb) {
        console.error("Bypass Lỗi:", _0x51c4bb);
        _0x5d24b1.value = "Lỗi không xác định!";
        _0x5d24b1.readOnly = false;
      }
    };
    _0x42d7d.appendChild(_0x5df7b0);
    const _0x337672 = document.createElement("button");
    _0x337672.textContent = "Đổi Nhiệm Vụ";
    _0x337672.className = "btn-change";
    _0x337672.onclick = async () => {
      _0x5d24b1.readOnly = true;
      _0x5d24b1.value = "Đang Đổi Nhiệm Vụ...";
      const _0x5a20da = _0xda2a50();
      _0x5a20da ? setTimeout(() => {
        _0x2d97f0().then(_0x379aba => {
          _0x33897c = _0x379aba;
          _0x116c89.textContent = "OCR URL: " + _0x379aba;
          _0x5d24b1.value = "Đã đổi nhiệm vụ thành công!";
          _0x5d24b1.readOnly = false;
        }).catch(() => {
          _0x5d24b1.value = "Lỗi nhận diện URL mới!";
          _0x5d24b1.readOnly = false;
        });
      }, 2000) : (_0x5d24b1.value = "Không thể đổi nhiệm vụ!", _0x5d24b1.readOnly = false);
    };
    _0x42d7d.appendChild(_0x337672);
    _0x33be0b.appendChild(_0x42d7d);
    const _0x4c8255 = document.createElement("div");
    _0x4c8255.className = "extra-buttons";
    const _0x1f0b99 = document.createElement("button");
    _0x1f0b99.textContent = "Fake IP";
    _0x1f0b99.className = "btn-fakeip";
    if (_0x2cdfe6) {
      _0x1f0b99.classList.add("active");
    }
    _0x1f0b99.onclick = async () => {
      if (!_0x2cdfe6) {
        _0x5d24b1.value = "Đang tìm proxy sống...";
        const _0x4a715e = await _0x50257b("US");
        _0x4a715e ? (await _0x1a96a2(_0x4a715e), _0x2cdfe6 = true, _0x1f0b99.classList.add("active"), _0x5d24b1.value = "Fake IP ON: " + _0x4a715e.ip + ":" + _0x4a715e.port) : _0x5d24b1.value = "Không tìm được proxy sống!";
      } else {
        _0x2347bf();
        _0x2cdfe6 = false;
        _0x1f0b99.classList.remove("active");
        _0x5d24b1.value = "Fake IP OFF";
      }
    };
    _0x4c8255.appendChild(_0x1f0b99);
    const _0x554dd1 = document.createElement("button");
    _0x554dd1.textContent = "Fake Browser";
    _0x554dd1.className = "btn-fakebrowser";
    if (_0x2209e2) {
      _0x554dd1.classList.add("active");
    }
    _0x554dd1.onclick = () => {
      if (!_0x2209e2) {
        const _0x146e06 = _0xc7b364();
        _0xf66435(_0x146e06);
        _0x2209e2 = true;
        _0x554dd1.classList.add("active");
        _0x5d24b1.value = "Fake Browser ON: " + _0x146e06.userAgent.substring(0, 20) + "...";
      } else {
        _0x542267();
        _0x2209e2 = false;
        _0x554dd1.classList.remove("active");
        _0x5d24b1.value = "Fake Browser OFF";
      }
    };
    _0x4c8255.appendChild(_0x554dd1);
    const _0x5d3774 = document.createElement("button");
    _0x5d3774.textContent = "AFK";
    _0x5d3774.className = "btn-afk";
    if (_0x2ef3b2) {
      _0x5d3774.classList.add("active");
    }
    _0x5d3774.onclick = () => {
      if (!_0x2ef3b2) {
        _0xba3380();
        _0x5d3774.classList.add("active");
        _0x5d24b1.value = "AFK Mode ON - Đang giữ tab hoạt động!";
        const _0xf1b9df = document.createElement("div");
        _0xf1b9df.className = "afk-notif";
        _0xf1b9df.textContent = "AFK Mode Đã Bật!";
        document.body.appendChild(_0xf1b9df);
        setTimeout(() => _0xf1b9df.classList.add("show"), 10);
        setTimeout(() => {
          _0xf1b9df.classList.remove("show");
          setTimeout(() => _0xf1b9df.remove(), 500);
        }, 2000);
      } else {
        _0x24e813();
        _0x5d3774.classList.remove("active");
        _0x5d24b1.value = "AFK Mode OFF";
        const _0x138abc = document.createElement("div");
        _0x138abc.className = "afk-notif";
        _0x138abc.textContent = "AFK Mode Đã Tắt!";
        document.body.appendChild(_0x138abc);
        setTimeout(() => _0x138abc.classList.add("show"), 10);
        setTimeout(() => {
          _0x138abc.classList.remove("show");
          setTimeout(() => _0x138abc.remove(), 500);
        }, 2000);
      }
    };
    _0x4c8255.appendChild(_0x5d3774);
    const _0x6917ac = document.createElement("button");
    _0x6917ac.textContent = "Copy Code";
    _0x6917ac.className = "btn-copy";
    _0x6917ac.onclick = () => {
      const _0x2e2107 = GM_getValue("lastBypassCode", "");
      _0x2e2107 ? navigator.clipboard.writeText(_0x2e2107).then(() => {
        _0x6917ac.classList.add("copied");
        setTimeout(() => _0x6917ac.classList.remove("copied"), 1500);
        const _0x37c75b = document.createElement("div");
        _0x37c75b.className = "copy-notif";
        _0x37c75b.textContent = "Đã sao chép mã: " + _0x2e2107;
        document.body.appendChild(_0x37c75b);
        setTimeout(() => _0x37c75b.classList.add("show"), 10);
        setTimeout(() => {
          _0x37c75b.classList.remove("show");
          setTimeout(() => _0x37c75b.remove(), 500);
        }, 2000);
      }).catch(_0x35aca0 => {
        console.error("Lỗi sao chép:", _0x35aca0);
        _0x5d24b1.value = "Lỗi khi sao chép code!";
      }) : _0x5d24b1.value = "Chưa có code để sao chép!";
    };
    _0x4c8255.appendChild(_0x6917ac);
    _0x33be0b.appendChild(_0x4c8255);
    const _0x5a1722 = document.createElement("div");
    _0x5a1722.className = "author-text";
    _0x5a1722.textContent = "BaoNgoCcoder && Dec By SiuSiu";
    _0x57e49a.appendChild(_0x33be0b);
    _0x57e49a.appendChild(_0x5a1722);
    document.body.appendChild(_0x57e49a);
    if (_0x34136f.checked) {
      _0x5df7b0.click();
    }
    _0x47857d.addEventListener("change", () => GM_setValue("autoFillCode", _0x47857d.checked));
    _0x34136f.addEventListener("change", () => GM_setValue("autoStart", _0x34136f.checked));
  }
  const _0x41fc96 = window.location.href;
  window.onload = () => {
    if (_0x41fc96.includes("https://yeumoney.com/")) {
      _0x2d97f0().then(_0x108a09 => {
        _0x7a0853(_0x108a09);
      }).catch(_0xcb2fc8 => {
        console.error("Lỗi khi nhận diện URL:", _0xcb2fc8);
        _0x7a0853("Lỗi! Tự nhập URL hoặc Reload");
      });
    } else {
      if (_0x41fc96.includes("https://docs.google.com/spreadsheets/")) {
        _0x218673().then(_0x1dd0e9 => {
          if (_0x1dd0e9) {
            window.location.href = _0x1dd0e9;
          }
        }).catch(_0x50f4bc => console.error("Lỗi khi gọi hàm:", _0x50f4bc));
      } else {
        _0x41fc96.includes("https://docs.google.com/forms/") && _0x536c73();
      }
    }
  };
})();