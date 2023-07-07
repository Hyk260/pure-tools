!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.library = t())
    : (e.library = t());
})(this, () =>
  (() => {
    "use strict";
    var e = {
        d: (t, o) => {
          for (var n in o)
            e.o(o, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    e.r(t), e.d(t, { default: () => c });
    var o = {};
    e.r(o), e.d(o, { timeFormat: () => l });
    var n = {};
    e.r(n), e.d(n, { log: () => i, sum: () => a });
    const r = function (e, t) {
      const o = {
        "M+": e.getMonth() + 1,
        "d+": e.getDate(),
        "h+": e.getHours(),
        "m+": e.getMinutes(),
        "s+": e.getSeconds(),
        "q+": Math.floor((e.getMonth() + 3) / 3),
        S: e.getMilliseconds(),
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (e.getFullYear() + "").substr(4 - RegExp.$1.length)
        ));
      for (const e in o)
        new RegExp("(" + e + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? o[e]
              : ("00" + o[e]).substr(("" + o[e]).length)
          ));
      return t;
    };
    function l(e, t = !1) {
      const o = new Date(),
        n = new Date(parseInt(e)),
        l = o.getFullYear(),
        g = o.getMonth() + 1,
        s = o.getDate(),
        a = n.getFullYear(),
        i = n.getMonth() + 1,
        c = n.getDate();
      let u = "";
      const y = t ? " " + r(n, "hh:mm") : "";
      if (l === a) {
        const t = o.getTime() - e;
        if (g === i && s === c) u = t < 6e4 ? "刚刚" : r(n, "hh:mm");
        else {
          const e = new Date(o.getTime() - 864e5),
            l = new Date(o.getTime() - 1728e5);
          u =
            i === e.getMonth() + 1 && c === e.getDate()
              ? "昨天" + y
              : i === l.getMonth() + 1 && c === l.getDate()
              ? "前天" + y
              : t / 36e5 <= 144
              ? [
                  "星期日",
                  "星期一",
                  "星期二",
                  "星期三",
                  "星期四",
                  "星期五",
                  "星期六",
                ][n.getDay()] + y
              : r(n, "yyyy/M/d") + y;
        }
      } else u = r(n, "yyyy/M/d") + y;
      return 0 == e && (u = "刚刚"), u;
    }
    const g = "hello",
      s = "world";
    function a(e, t) {
      return e + t;
    }
    function i() {
      console.log(g + s);
    }
    const c = { ...n, ...o };
    return t;
  })()
);
