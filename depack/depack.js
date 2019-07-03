'use strict';
let DEPACK_EXPORT;
const http = require('http');
const path = require('path');'use strict';
const {extname:l} = path;
/*
 MIT
 Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
 Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
 https://npmjs.com/package/mime-types
*/
const p = require("mime-db"), r = Object.create(null), t = Object.create(null);
u();
function u() {
  const a = ["nginx", "apache", void 0, "iana"];
  Object.keys(p).forEach(d => {
    const g = p[d], f = g.extensions;
    if (f && f.length) {
      r[d] = f;
      for (let m = 0; m < f.length; m++) {
        const b = f[m];
        if (t[b]) {
          const c = a.indexOf(p[t[b]].source), e = a.indexOf(g.source);
          if ("application/octet-stream" != t[b] && (c > e || c == e && "application/" == t[b].substr(0, 12))) {
            continue;
          }
        }
        t[b] = d;
      }
    }
  });
}
;/*
 MIT content-type
 2015 Douglas Christopher Wilson
*/
const v = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g, w = /\\([\u000b\u0020-\u00ff])/g, x = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
class y {
  constructor(a) {
    this.parameters = {};
    this.type = a;
  }
}
;const z = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
/*
 MIT
 Copyright(c) 2014 Jonathan Ong
 Copyright(c) 2014-2015 Douglas Christopher Wilson
 https://npmjs.org/type-is
*/
function A(a, d) {
  var g = [];
  if ("string" != typeof a) {
    var f = null;
  } else {
    try {
      {
        if (!a) {
          throw new TypeError("argument string is required");
        }
        if ("object" == typeof a) {
          {
            let k;
            if ("function" == typeof a.getHeader) {
              k = a.getHeader("content-type");
            } else {
              if ("object" == typeof a.headers) {
                const h = a.headers;
                k = h && h["content-type"];
              }
            }
            if ("string" != typeof k) {
              throw new TypeError("content-type header is missing from object");
            }
            var m = k;
          }
        } else {
          m = a;
        }
        a = m;
        if ("string" != typeof a) {
          throw new TypeError("argument string is required to be a string");
        }
        var b = a.indexOf(";"), c = -1 != b ? a.substr(0, b).trim() : a.trim();
        if (!x.test(c)) {
          throw new TypeError("invalid media type");
        }
        const q = new y(c.toLowerCase());
        if (-1 != b) {
          let k, h, n;
          for (v.lastIndex = b; h = v.exec(a);) {
            if (h.index !== b) {
              throw new TypeError("invalid parameter format");
            }
            b += h[0].length;
            k = h[1].toLowerCase();
            n = h[2];
            '"' == n[0] && (n = n.substr(1, n.length - 2).replace(w, "$1"));
            q.parameters[k] = n;
          }
          if (b != a.length) {
            throw new TypeError("invalid parameter format");
          }
        }
        var e = q;
      }
      ({type:e} = e);
      if (!e) {
        throw new TypeError("argument string is required");
      }
      if ("string" != typeof e) {
        throw new TypeError("argument string is required to be a string");
      }
      f = z.test(e.toLowerCase()) ? e : null;
    } catch (q) {
      f = null;
    }
  }
  if (!f) {
    return !1;
  }
  d && !Array.isArray(d) && (d = [d, ...g]);
  if (!d || !d.length) {
    return f;
  }
  for (g = 0; g < d.length; g++) {
    if (c = B(e = d[g]), !1 === c ? b = !1 : (b = f.split("/"), c = c.split("/"), b = 2 != b.length || 2 != c.length || "*" != c[0] && c[0] != b[0] ? !1 : "*+" == c[1].substr(0, 2) ? c[1].length <= b[1].length + 1 && c[1].substr(1) == b[1].substr(1 - c[1].length) : "*" != c[1] && c[1] != b[1] ? !1 : !0), b) {
      return "+" == e[0] || -1 !== e.indexOf("*") ? f : e;
    }
  }
  return !1;
}
function C(a) {
  a = a.headers;
  return void 0 !== a["transfer-encoding"] || !isNaN(a["content-length"]);
}
function B(a) {
  if ("string" != typeof a) {
    return !1;
  }
  switch(a) {
    case "urlencoded":
      return "application/x-www-form-urlencoded";
    case "multipart":
      return "multipart/*";
  }
  "+" == a[0] ? a = "*/*" + a : -1 == a.indexOf("/") && (a = a && "string" == typeof a ? (a = l("x." + a).toLowerCase().substr(1)) ? t[a] || !1 : !1 : !1);
  return a;
}
;DEPACK_EXPORT = {_typeis:function(a, d, ...g) {
  if (!C(a)) {
    return null;
  }
  2 < arguments.length && (d = [d, ...g]);
  return A(a.headers["content-type"], d);
}, _hasBody:C};


module.exports = DEPACK_EXPORT