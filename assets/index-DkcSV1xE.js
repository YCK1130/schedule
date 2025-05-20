(function() {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const c of s) if (c.type === "childList") for (const u of c.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && i(u);
  }).observe(document, { childList: true, subtree: true });
  function r(s) {
    const c = {};
    return s.integrity && (c.integrity = s.integrity), s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? c.credentials = "include" : s.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function i(s) {
    if (s.ep) return;
    s.ep = true;
    const c = r(s);
    fetch(s.href, c);
  }
})();
var Fc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Co = { exports: {} }, Dl = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Zv;
function rT() {
  if (Zv) return Dl;
  Zv = 1;
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function r(i, s, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      c = {};
      for (var o in s) o !== "key" && (c[o] = s[o]);
    } else c = s;
    return s = c.ref, { $$typeof: e, type: i, key: u, ref: s !== void 0 ? s : null, props: c };
  }
  return Dl.Fragment = a, Dl.jsx = r, Dl.jsxs = r, Dl;
}
var Qv;
function aT() {
  return Qv || (Qv = 1, Co.exports = rT()), Co.exports;
}
var W = aT(), bo = { exports: {} }, Qe = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Jv;
function nT() {
  if (Jv) return Qe;
  Jv = 1;
  var e = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), u = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.iterator;
  function g(H) {
    return H === null || typeof H != "object" ? null : (H = m && H[m] || H["@@iterator"], typeof H == "function" ? H : null);
  }
  var y = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, E = {};
  function _(H, re, R) {
    this.props = H, this.context = re, this.refs = E, this.updater = R || y;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(H, re) {
    if (typeof H != "object" && typeof H != "function" && H != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, H, re, "setState");
  }, _.prototype.forceUpdate = function(H) {
    this.updater.enqueueForceUpdate(this, H, "forceUpdate");
  };
  function O() {
  }
  O.prototype = _.prototype;
  function F(H, re, R) {
    this.props = H, this.context = re, this.refs = E, this.updater = R || y;
  }
  var k = F.prototype = new O();
  k.constructor = F, T(k, _.prototype), k.isPureReactComponent = true;
  var M = Array.isArray, X = { H: null, A: null, T: null, S: null, V: null }, z = Object.prototype.hasOwnProperty;
  function C(H, re, R, j, q, K) {
    return R = K.ref, { $$typeof: e, type: H, key: re, ref: R !== void 0 ? R : null, props: K };
  }
  function S(H, re) {
    return C(H.type, re, void 0, void 0, void 0, H.props);
  }
  function w(H) {
    return typeof H == "object" && H !== null && H.$$typeof === e;
  }
  function N(H) {
    var re = { "=": "=0", ":": "=2" };
    return "$" + H.replace(/[=:]/g, function(R) {
      return re[R];
    });
  }
  var B = /\/+/g;
  function U(H, re) {
    return typeof H == "object" && H !== null && H.key != null ? N("" + H.key) : re.toString(36);
  }
  function ne() {
  }
  function ge(H) {
    switch (H.status) {
      case "fulfilled":
        return H.value;
      case "rejected":
        throw H.reason;
      default:
        switch (typeof H.status == "string" ? H.then(ne, ne) : (H.status = "pending", H.then(function(re) {
          H.status === "pending" && (H.status = "fulfilled", H.value = re);
        }, function(re) {
          H.status === "pending" && (H.status = "rejected", H.reason = re);
        })), H.status) {
          case "fulfilled":
            return H.value;
          case "rejected":
            throw H.reason;
        }
    }
    throw H;
  }
  function fe(H, re, R, j, q) {
    var K = typeof H;
    (K === "undefined" || K === "boolean") && (H = null);
    var ie = false;
    if (H === null) ie = true;
    else switch (K) {
      case "bigint":
      case "string":
      case "number":
        ie = true;
        break;
      case "object":
        switch (H.$$typeof) {
          case e:
          case a:
            ie = true;
            break;
          case v:
            return ie = H._init, fe(ie(H._payload), re, R, j, q);
        }
    }
    if (ie) return q = q(H), ie = j === "" ? "." + U(H, 0) : j, M(q) ? (R = "", ie != null && (R = ie.replace(B, "$&/") + "/"), fe(q, re, R, "", function(ye) {
      return ye;
    })) : q != null && (w(q) && (q = S(q, R + (q.key == null || H && H.key === q.key ? "" : ("" + q.key).replace(B, "$&/") + "/") + ie)), re.push(q)), 1;
    ie = 0;
    var Ae = j === "" ? "." : j + ":";
    if (M(H)) for (var pe = 0; pe < H.length; pe++) j = H[pe], K = Ae + U(j, pe), ie += fe(j, re, R, K, q);
    else if (pe = g(H), typeof pe == "function") for (H = pe.call(H), pe = 0; !(j = H.next()).done; ) j = j.value, K = Ae + U(j, pe++), ie += fe(j, re, R, K, q);
    else if (K === "object") {
      if (typeof H.then == "function") return fe(ge(H), re, R, j, q);
      throw re = String(H), Error("Objects are not valid as a React child (found: " + (re === "[object Object]" ? "object with keys {" + Object.keys(H).join(", ") + "}" : re) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ie;
  }
  function J(H, re, R) {
    if (H == null) return H;
    var j = [], q = 0;
    return fe(H, j, "", "", function(K) {
      return re.call(R, K, q++);
    }), j;
  }
  function ae(H) {
    if (H._status === -1) {
      var re = H._result;
      re = re(), re.then(function(R) {
        (H._status === 0 || H._status === -1) && (H._status = 1, H._result = R);
      }, function(R) {
        (H._status === 0 || H._status === -1) && (H._status = 2, H._result = R);
      }), H._status === -1 && (H._status = 0, H._result = re);
    }
    if (H._status === 1) return H._result.default;
    throw H._result;
  }
  var we = typeof reportError == "function" ? reportError : function(H) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var re = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof H == "object" && H !== null && typeof H.message == "string" ? String(H.message) : String(H), error: H });
      if (!window.dispatchEvent(re)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", H);
      return;
    }
    console.error(H);
  };
  function Q() {
  }
  return Qe.Children = { map: J, forEach: function(H, re, R) {
    J(H, function() {
      re.apply(this, arguments);
    }, R);
  }, count: function(H) {
    var re = 0;
    return J(H, function() {
      re++;
    }), re;
  }, toArray: function(H) {
    return J(H, function(re) {
      return re;
    }) || [];
  }, only: function(H) {
    if (!w(H)) throw Error("React.Children.only expected to receive a single React element child.");
    return H;
  } }, Qe.Component = _, Qe.Fragment = r, Qe.Profiler = s, Qe.PureComponent = F, Qe.StrictMode = i, Qe.Suspense = x, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, Qe.__COMPILER_RUNTIME = { __proto__: null, c: function(H) {
    return X.H.useMemoCache(H);
  } }, Qe.cache = function(H) {
    return function() {
      return H.apply(null, arguments);
    };
  }, Qe.cloneElement = function(H, re, R) {
    if (H == null) throw Error("The argument must be a React element, but you passed " + H + ".");
    var j = T({}, H.props), q = H.key, K = void 0;
    if (re != null) for (ie in re.ref !== void 0 && (K = void 0), re.key !== void 0 && (q = "" + re.key), re) !z.call(re, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && re.ref === void 0 || (j[ie] = re[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) j.children = R;
    else if (1 < ie) {
      for (var Ae = Array(ie), pe = 0; pe < ie; pe++) Ae[pe] = arguments[pe + 2];
      j.children = Ae;
    }
    return C(H.type, q, void 0, void 0, K, j);
  }, Qe.createContext = function(H) {
    return H = { $$typeof: u, _currentValue: H, _currentValue2: H, _threadCount: 0, Provider: null, Consumer: null }, H.Provider = H, H.Consumer = { $$typeof: c, _context: H }, H;
  }, Qe.createElement = function(H, re, R) {
    var j, q = {}, K = null;
    if (re != null) for (j in re.key !== void 0 && (K = "" + re.key), re) z.call(re, j) && j !== "key" && j !== "__self" && j !== "__source" && (q[j] = re[j]);
    var ie = arguments.length - 2;
    if (ie === 1) q.children = R;
    else if (1 < ie) {
      for (var Ae = Array(ie), pe = 0; pe < ie; pe++) Ae[pe] = arguments[pe + 2];
      q.children = Ae;
    }
    if (H && H.defaultProps) for (j in ie = H.defaultProps, ie) q[j] === void 0 && (q[j] = ie[j]);
    return C(H, K, void 0, void 0, null, q);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(H) {
    return { $$typeof: o, render: H };
  }, Qe.isValidElement = w, Qe.lazy = function(H) {
    return { $$typeof: v, _payload: { _status: -1, _result: H }, _init: ae };
  }, Qe.memo = function(H, re) {
    return { $$typeof: d, type: H, compare: re === void 0 ? null : re };
  }, Qe.startTransition = function(H) {
    var re = X.T, R = {};
    X.T = R;
    try {
      var j = H(), q = X.S;
      q !== null && q(R, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then(Q, we);
    } catch (K) {
      we(K);
    } finally {
      X.T = re;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, Qe.use = function(H) {
    return X.H.use(H);
  }, Qe.useActionState = function(H, re, R) {
    return X.H.useActionState(H, re, R);
  }, Qe.useCallback = function(H, re) {
    return X.H.useCallback(H, re);
  }, Qe.useContext = function(H) {
    return X.H.useContext(H);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(H, re) {
    return X.H.useDeferredValue(H, re);
  }, Qe.useEffect = function(H, re, R) {
    var j = X.H;
    if (typeof R == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return j.useEffect(H, re);
  }, Qe.useId = function() {
    return X.H.useId();
  }, Qe.useImperativeHandle = function(H, re, R) {
    return X.H.useImperativeHandle(H, re, R);
  }, Qe.useInsertionEffect = function(H, re) {
    return X.H.useInsertionEffect(H, re);
  }, Qe.useLayoutEffect = function(H, re) {
    return X.H.useLayoutEffect(H, re);
  }, Qe.useMemo = function(H, re) {
    return X.H.useMemo(H, re);
  }, Qe.useOptimistic = function(H, re) {
    return X.H.useOptimistic(H, re);
  }, Qe.useReducer = function(H, re, R) {
    return X.H.useReducer(H, re, R);
  }, Qe.useRef = function(H) {
    return X.H.useRef(H);
  }, Qe.useState = function(H) {
    return X.H.useState(H);
  }, Qe.useSyncExternalStore = function(H, re, R) {
    return X.H.useSyncExternalStore(H, re, R);
  }, Qe.useTransition = function() {
    return X.H.useTransition();
  }, Qe.version = "19.1.0", Qe;
}
var ep;
function Sh() {
  return ep || (ep = 1, bo.exports = nT()), bo.exports;
}
var ee = Sh();
const Mr = bs(ee);
var Oo = { exports: {} }, Fl = {}, Ro = { exports: {} }, Do = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var tp;
function iT() {
  return tp || (tp = 1, function(e) {
    function a(J, ae) {
      var we = J.length;
      J.push(ae);
      e: for (; 0 < we; ) {
        var Q = we - 1 >>> 1, H = J[Q];
        if (0 < s(H, ae)) J[Q] = ae, J[we] = H, we = Q;
        else break e;
      }
    }
    function r(J) {
      return J.length === 0 ? null : J[0];
    }
    function i(J) {
      if (J.length === 0) return null;
      var ae = J[0], we = J.pop();
      if (we !== ae) {
        J[0] = we;
        e: for (var Q = 0, H = J.length, re = H >>> 1; Q < re; ) {
          var R = 2 * (Q + 1) - 1, j = J[R], q = R + 1, K = J[q];
          if (0 > s(j, we)) q < H && 0 > s(K, j) ? (J[Q] = K, J[q] = we, Q = q) : (J[Q] = j, J[R] = we, Q = R);
          else if (q < H && 0 > s(K, we)) J[Q] = K, J[q] = we, Q = q;
          else break e;
        }
      }
      return ae;
    }
    function s(J, ae) {
      var we = J.sortIndex - ae.sortIndex;
      return we !== 0 ? we : J.id - ae.id;
    }
    if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var u = Date, o = u.now();
      e.unstable_now = function() {
        return u.now() - o;
      };
    }
    var x = [], d = [], v = 1, m = null, g = 3, y = false, T = false, E = false, _ = false, O = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function M(J) {
      for (var ae = r(d); ae !== null; ) {
        if (ae.callback === null) i(d);
        else if (ae.startTime <= J) i(d), ae.sortIndex = ae.expirationTime, a(x, ae);
        else break;
        ae = r(d);
      }
    }
    function X(J) {
      if (E = false, M(J), !T) if (r(x) !== null) T = true, z || (z = true, U());
      else {
        var ae = r(d);
        ae !== null && fe(X, ae.startTime - J);
      }
    }
    var z = false, C = -1, S = 5, w = -1;
    function N() {
      return _ ? true : !(e.unstable_now() - w < S);
    }
    function B() {
      if (_ = false, z) {
        var J = e.unstable_now();
        w = J;
        var ae = true;
        try {
          e: {
            T = false, E && (E = false, F(C), C = -1), y = true;
            var we = g;
            try {
              t: {
                for (M(J), m = r(x); m !== null && !(m.expirationTime > J && N()); ) {
                  var Q = m.callback;
                  if (typeof Q == "function") {
                    m.callback = null, g = m.priorityLevel;
                    var H = Q(m.expirationTime <= J);
                    if (J = e.unstable_now(), typeof H == "function") {
                      m.callback = H, M(J), ae = true;
                      break t;
                    }
                    m === r(x) && i(x), M(J);
                  } else i(x);
                  m = r(x);
                }
                if (m !== null) ae = true;
                else {
                  var re = r(d);
                  re !== null && fe(X, re.startTime - J), ae = false;
                }
              }
              break e;
            } finally {
              m = null, g = we, y = false;
            }
            ae = void 0;
          }
        } finally {
          ae ? U() : z = false;
        }
      }
    }
    var U;
    if (typeof k == "function") U = function() {
      k(B);
    };
    else if (typeof MessageChannel < "u") {
      var ne = new MessageChannel(), ge = ne.port2;
      ne.port1.onmessage = B, U = function() {
        ge.postMessage(null);
      };
    } else U = function() {
      O(B, 0);
    };
    function fe(J, ae) {
      C = O(function() {
        J(e.unstable_now());
      }, ae);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, e.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : S = 0 < J ? Math.floor(1e3 / J) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_next = function(J) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = g;
      }
      var we = g;
      g = ae;
      try {
        return J();
      } finally {
        g = we;
      }
    }, e.unstable_requestPaint = function() {
      _ = true;
    }, e.unstable_runWithPriority = function(J, ae) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var we = g;
      g = J;
      try {
        return ae();
      } finally {
        g = we;
      }
    }, e.unstable_scheduleCallback = function(J, ae, we) {
      var Q = e.unstable_now();
      switch (typeof we == "object" && we !== null ? (we = we.delay, we = typeof we == "number" && 0 < we ? Q + we : Q) : we = Q, J) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = we + H, J = { id: v++, callback: ae, priorityLevel: J, startTime: we, expirationTime: H, sortIndex: -1 }, we > Q ? (J.sortIndex = we, a(d, J), r(x) === null && J === r(d) && (E ? (F(C), C = -1) : E = true, fe(X, we - Q))) : (J.sortIndex = H, a(x, J), T || y || (T = true, z || (z = true, U()))), J;
    }, e.unstable_shouldYield = N, e.unstable_wrapCallback = function(J) {
      var ae = g;
      return function() {
        var we = g;
        g = ae;
        try {
          return J.apply(this, arguments);
        } finally {
          g = we;
        }
      };
    };
  }(Do)), Do;
}
var rp;
function sT() {
  return rp || (rp = 1, Ro.exports = iT()), Ro.exports;
}
var Fo = { exports: {} }, xr = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ap;
function lT() {
  if (ap) return xr;
  ap = 1;
  var e = Sh();
  function a(x) {
    var d = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++) d += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + x + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var i = { d: { f: r, r: function() {
    throw Error(a(522));
  }, D: r, C: r, L: r, m: r, X: r, S: r, M: r }, p: 0, findDOMNode: null }, s = Symbol.for("react.portal");
  function c(x, d, v) {
    var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: s, key: m == null ? null : "" + m, children: x, containerInfo: d, implementation: v };
  }
  var u = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function o(x, d) {
    if (x === "font") return "";
    if (typeof d == "string") return d === "use-credentials" ? d : "";
  }
  return xr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, xr.createPortal = function(x, d) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11) throw Error(a(299));
    return c(x, d, null, v);
  }, xr.flushSync = function(x) {
    var d = u.T, v = i.p;
    try {
      if (u.T = null, i.p = 2, x) return x();
    } finally {
      u.T = d, i.p = v, i.d.f();
    }
  }, xr.preconnect = function(x, d) {
    typeof x == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, i.d.C(x, d));
  }, xr.prefetchDNS = function(x) {
    typeof x == "string" && i.d.D(x);
  }, xr.preinit = function(x, d) {
    if (typeof x == "string" && d && typeof d.as == "string") {
      var v = d.as, m = o(v, d.crossOrigin), g = typeof d.integrity == "string" ? d.integrity : void 0, y = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      v === "style" ? i.d.S(x, typeof d.precedence == "string" ? d.precedence : void 0, { crossOrigin: m, integrity: g, fetchPriority: y }) : v === "script" && i.d.X(x, { crossOrigin: m, integrity: g, fetchPriority: y, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
    }
  }, xr.preinitModule = function(x, d) {
    if (typeof x == "string") if (typeof d == "object" && d !== null) {
      if (d.as == null || d.as === "script") {
        var v = o(d.as, d.crossOrigin);
        i.d.M(x, { crossOrigin: v, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
      }
    } else d == null && i.d.M(x);
  }, xr.preload = function(x, d) {
    if (typeof x == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var v = d.as, m = o(v, d.crossOrigin);
      i.d.L(x, v, { crossOrigin: m, integrity: typeof d.integrity == "string" ? d.integrity : void 0, nonce: typeof d.nonce == "string" ? d.nonce : void 0, type: typeof d.type == "string" ? d.type : void 0, fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0, referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0, imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0, imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0, media: typeof d.media == "string" ? d.media : void 0 });
    }
  }, xr.preloadModule = function(x, d) {
    if (typeof x == "string") if (d) {
      var v = o(d.as, d.crossOrigin);
      i.d.m(x, { as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0, crossOrigin: v, integrity: typeof d.integrity == "string" ? d.integrity : void 0 });
    } else i.d.m(x);
  }, xr.requestFormReset = function(x) {
    i.d.r(x);
  }, xr.unstable_batchedUpdates = function(x, d) {
    return x(d);
  }, xr.useFormState = function(x, d, v) {
    return u.H.useFormState(x, d, v);
  }, xr.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, xr.version = "19.1.0", xr;
}
var np;
function Xm() {
  if (np) return Fo.exports;
  np = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (a) {
      console.error(a);
    }
  }
  return e(), Fo.exports = lT(), Fo.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ip;
function cT() {
  if (ip) return Fl;
  ip = 1;
  var e = sT(), a = Sh(), r = Xm();
  function i(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) n += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function c(t) {
    var n = t, l = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do
        n = t, (n.flags & 4098) !== 0 && (l = n.return), t = n.return;
      while (t);
    }
    return n.tag === 3 ? l : null;
  }
  function u(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function o(t) {
    if (c(t) !== t) throw Error(i(188));
  }
  function x(t) {
    var n = t.alternate;
    if (!n) {
      if (n = c(t), n === null) throw Error(i(188));
      return n !== t ? null : t;
    }
    for (var l = t, f = n; ; ) {
      var h = l.return;
      if (h === null) break;
      var p = h.alternate;
      if (p === null) {
        if (f = h.return, f !== null) {
          l = f;
          continue;
        }
        break;
      }
      if (h.child === p.child) {
        for (p = h.child; p; ) {
          if (p === l) return o(h), t;
          if (p === f) return o(h), n;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (l.return !== f.return) l = h, f = p;
      else {
        for (var A = false, D = h.child; D; ) {
          if (D === l) {
            A = true, l = h, f = p;
            break;
          }
          if (D === f) {
            A = true, f = h, l = p;
            break;
          }
          D = D.sibling;
        }
        if (!A) {
          for (D = p.child; D; ) {
            if (D === l) {
              A = true, l = p, f = h;
              break;
            }
            if (D === f) {
              A = true, f = p, l = h;
              break;
            }
            D = D.sibling;
          }
          if (!A) throw Error(i(189));
        }
      }
      if (l.alternate !== f) throw Error(i(190));
    }
    if (l.tag !== 3) throw Error(i(188));
    return l.stateNode.current === l ? t : n;
  }
  function d(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (n = d(t), n !== null) return n;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign, m = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), F = Symbol.for("react.consumer"), k = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), N = Symbol.for("react.memo_cache_sentinel"), B = Symbol.iterator;
  function U(t) {
    return t === null || typeof t != "object" ? null : (t = B && t[B] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ne = Symbol.for("react.client.reference");
  function ge(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === ne ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case T:
        return "Fragment";
      case _:
        return "Profiler";
      case E:
        return "StrictMode";
      case X:
        return "Suspense";
      case z:
        return "SuspenseList";
      case w:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case y:
        return "Portal";
      case k:
        return (t.displayName || "Context") + ".Provider";
      case F:
        return (t._context.displayName || "Context") + ".Consumer";
      case M:
        var n = t.render;
        return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case C:
        return n = t.displayName || null, n !== null ? n : ge(t.type) || "Memo";
      case S:
        n = t._payload, t = t._init;
        try {
          return ge(t(n));
        } catch {
        }
    }
    return null;
  }
  var fe = Array.isArray, J = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = { pending: false, data: null, method: null, action: null }, Q = [], H = -1;
  function re(t) {
    return { current: t };
  }
  function R(t) {
    0 > H || (t.current = Q[H], Q[H] = null, H--);
  }
  function j(t, n) {
    H++, Q[H] = t.current, t.current = n;
  }
  var q = re(null), K = re(null), ie = re(null), Ae = re(null);
  function pe(t, n) {
    switch (j(ie, n), j(K, t), j(q, null), n.nodeType) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Av(t) : 0;
        break;
      default:
        if (t = n.tagName, n = n.namespaceURI) n = Av(n), t = kv(n, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    R(q), j(q, t);
  }
  function ye() {
    R(q), R(K), R(ie);
  }
  function _e(t) {
    t.memoizedState !== null && j(Ae, t);
    var n = q.current, l = kv(n, t.type);
    n !== l && (j(K, t), j(q, l));
  }
  function Re(t) {
    K.current === t && (R(q), R(K)), Ae.current === t && (R(Ae), kl._currentValue = we);
  }
  var V = Object.prototype.hasOwnProperty, Ge = e.unstable_scheduleCallback, Le = e.unstable_cancelCallback, Be = e.unstable_shouldYield, De = e.unstable_requestPaint, ke = e.unstable_now, Ie = e.unstable_getCurrentPriorityLevel, Ke = e.unstable_ImmediatePriority, Ze = e.unstable_UserBlockingPriority, At = e.unstable_NormalPriority, It = e.unstable_LowPriority, Pt = e.unstable_IdlePriority, it = e.log, Ot = e.unstable_setDisableYieldValue, st = null, tt = null;
  function rt(t) {
    if (typeof it == "function" && Ot(t), tt && typeof tt.setStrictMode == "function") try {
      tt.setStrictMode(st, t);
    } catch {
    }
  }
  var gt = Math.clz32 ? Math.clz32 : Rt, $e = Math.log, xt = Math.LN2;
  function Rt(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - ($e(t) / xt | 0) | 0;
  }
  var vt = 256, Tr = 4194304;
  function wa(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Di(t, n, l) {
    var f = t.pendingLanes;
    if (f === 0) return 0;
    var h = 0, p = t.suspendedLanes, A = t.pingedLanes;
    t = t.warmLanes;
    var D = f & 134217727;
    return D !== 0 ? (f = D & ~p, f !== 0 ? h = wa(f) : (A &= D, A !== 0 ? h = wa(A) : l || (l = D & ~t, l !== 0 && (h = wa(l))))) : (D = f & ~p, D !== 0 ? h = wa(D) : A !== 0 ? h = wa(A) : l || (l = f & ~t, l !== 0 && (h = wa(l)))), h === 0 ? 0 : n !== 0 && n !== h && (n & p) === 0 && (p = h & -h, l = n & -n, p >= l || p === 32 && (l & 4194048) !== 0) ? n : h;
  }
  function Yn(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function E0(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ns() {
    var t = vt;
    return vt <<= 1, (vt & 4194048) === 0 && (vt = 256), t;
  }
  function Ms() {
    var t = Tr;
    return Tr <<= 1, (Tr & 62914560) === 0 && (Tr = 4194304), t;
  }
  function Ls(t) {
    for (var n = [], l = 0; 31 > l; l++) n.push(t);
    return n;
  }
  function $n(t, n) {
    t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Fi(t, n, l, f, h, p) {
    var A = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var D = t.entanglements, Z = t.expirationTimes, ue = t.hiddenUpdates;
    for (l = A & ~l; 0 < l; ) {
      var Ee = 31 - gt(l), Se = 1 << Ee;
      D[Ee] = 0, Z[Ee] = -1;
      var de = ue[Ee];
      if (de !== null) for (ue[Ee] = null, Ee = 0; Ee < de.length; Ee++) {
        var ve = de[Ee];
        ve !== null && (ve.lane &= -536870913);
      }
      l &= ~Se;
    }
    f !== 0 && _0(t, f, 0), p !== 0 && h === 0 && t.tag !== 0 && (t.suspendedLanes |= p & ~(A & ~n));
  }
  function _0(t, n, l) {
    t.pendingLanes |= n, t.suspendedLanes &= ~n;
    var f = 31 - gt(n);
    t.entangledLanes |= n, t.entanglements[f] = t.entanglements[f] | 1073741824 | l & 4194090;
  }
  function T0(t, n) {
    var l = t.entangledLanes |= n;
    for (t = t.entanglements; l; ) {
      var f = 31 - gt(l), h = 1 << f;
      h & n | t[f] & n && (t[f] |= n), l &= ~h;
    }
  }
  function Bs(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Us(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function w0() {
    var t = ae.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Xv(t.type));
  }
  function _f(t, n) {
    var l = ae.p;
    try {
      return ae.p = t, n();
    } finally {
      ae.p = l;
    }
  }
  var Sa = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + Sa, er = "__reactProps$" + Sa, fn = "__reactContainer$" + Sa, Is = "__reactEvents$" + Sa, Tf = "__reactListeners$" + Sa, b = "__reactHandles$" + Sa, G = "__reactResources$" + Sa, L = "__reactMarker$" + Sa;
  function I(t) {
    delete t[Jt], delete t[er], delete t[Is], delete t[Tf], delete t[b];
  }
  function P(t) {
    var n = t[Jt];
    if (n) return n;
    for (var l = t.parentNode; l; ) {
      if (n = l[fn] || l[Jt]) {
        if (l = n.alternate, n.child !== null || l !== null && l.child !== null) for (t = Rv(t); t !== null; ) {
          if (l = t[Jt]) return l;
          t = Rv(t);
        }
        return n;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Y(t) {
    if (t = t[Jt] || t[fn]) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return t;
    }
    return null;
  }
  function oe(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(i(33));
  }
  function me(t) {
    var n = t[G];
    return n || (n = t[G] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function le(t) {
    t[L] = true;
  }
  var he = /* @__PURE__ */ new Set(), xe = {};
  function Ce(t, n) {
    Oe(t, n), Oe(t + "Capture", n);
  }
  function Oe(t, n) {
    for (xe[t] = n, t = 0; t < n.length; t++) he.add(n[t]);
  }
  var Ne = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), be = {}, Fe = {};
  function Xe(t) {
    return V.call(Fe, t) ? true : V.call(be, t) ? false : Ne.test(t) ? Fe[t] = true : (be[t] = true, false);
  }
  function yt(t, n, l) {
    if (Xe(n)) if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(n);
          return;
        case "boolean":
          var f = n.toLowerCase().slice(0, 5);
          if (f !== "data-" && f !== "aria-") {
            t.removeAttribute(n);
            return;
          }
      }
      t.setAttribute(n, "" + l);
    }
  }
  function Et(t, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + l);
    }
  }
  function kt(t, n, l, f) {
    if (f === null) t.removeAttribute(l);
    else {
      switch (typeof f) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(n, l, "" + f);
    }
  }
  var Ia, un;
  function qr(t) {
    if (Ia === void 0) try {
      throw Error();
    } catch (l) {
      var n = l.stack.trim().match(/\n( *(at )?)/);
      Ia = n && n[1] || "", un = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ia + t + un;
  }
  var oa = false;
  function qn(t, n) {
    if (!t || oa) return "";
    oa = true;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var f = { DetermineComponentFrameRoot: function() {
        try {
          if (n) {
            var Se = function() {
              throw Error();
            };
            if (Object.defineProperty(Se.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Se, []);
              } catch (ve) {
                var de = ve;
              }
              Reflect.construct(t, [], Se);
            } else {
              try {
                Se.call();
              } catch (ve) {
                de = ve;
              }
              t.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ve) {
              de = ve;
            }
            (Se = t()) && typeof Se.catch == "function" && Se.catch(function() {
            });
          }
        } catch (ve) {
          if (ve && de && typeof ve.stack == "string") return [ve.stack, de.stack];
        }
        return [null, null];
      } };
      f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var h = Object.getOwnPropertyDescriptor(f.DetermineComponentFrameRoot, "name");
      h && h.configurable && Object.defineProperty(f.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var p = f.DetermineComponentFrameRoot(), A = p[0], D = p[1];
      if (A && D) {
        var Z = A.split(`
`), ue = D.split(`
`);
        for (h = f = 0; f < Z.length && !Z[f].includes("DetermineComponentFrameRoot"); ) f++;
        for (; h < ue.length && !ue[h].includes("DetermineComponentFrameRoot"); ) h++;
        if (f === Z.length || h === ue.length) for (f = Z.length - 1, h = ue.length - 1; 1 <= f && 0 <= h && Z[f] !== ue[h]; ) h--;
        for (; 1 <= f && 0 <= h; f--, h--) if (Z[f] !== ue[h]) {
          if (f !== 1 || h !== 1) do
            if (f--, h--, 0 > h || Z[f] !== ue[h]) {
              var Ee = `
` + Z[f].replace(" at new ", " at ");
              return t.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", t.displayName)), Ee;
            }
          while (1 <= f && 0 <= h);
          break;
        }
      }
    } finally {
      oa = false, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? qr(l) : "";
  }
  function ha(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return qr(t.type);
      case 16:
        return qr("Lazy");
      case 13:
        return qr("Suspense");
      case 19:
        return qr("SuspenseList");
      case 0:
      case 15:
        return qn(t.type, false);
      case 11:
        return qn(t.type.render, false);
      case 1:
        return qn(t.type, true);
      case 31:
        return qr("Activity");
      default:
        return "";
    }
  }
  function yd(t) {
    try {
      var n = "";
      do
        n += ha(t), t = t.return;
      while (t);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function Kr(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ed(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Zy(t) {
    var n = Ed(t) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(t.constructor.prototype, n), f = "" + t[n];
    if (!t.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var h = l.get, p = l.set;
      return Object.defineProperty(t, n, { configurable: true, get: function() {
        return h.call(this);
      }, set: function(A) {
        f = "" + A, p.call(this, A);
      } }), Object.defineProperty(t, n, { enumerable: l.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(A) {
        f = "" + A;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[n];
      } };
    }
  }
  function S0(t) {
    t._valueTracker || (t._valueTracker = Zy(t));
  }
  function _d(t) {
    if (!t) return false;
    var n = t._valueTracker;
    if (!n) return true;
    var l = n.getValue(), f = "";
    return t && (f = Ed(t) ? t.checked ? "true" : "false" : t.value), t = f, t !== l ? (n.setValue(t), true) : false;
  }
  function A0(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Qy = /[\n"\\]/g;
  function Wr(t) {
    return t.replace(Qy, function(n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function wf(t, n, l, f, h, p, A, D) {
    t.name = "", A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" ? t.type = A : t.removeAttribute("type"), n != null ? A === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Kr(n)) : t.value !== "" + Kr(n) && (t.value = "" + Kr(n)) : A !== "submit" && A !== "reset" || t.removeAttribute("value"), n != null ? Sf(t, A, Kr(n)) : l != null ? Sf(t, A, Kr(l)) : f != null && t.removeAttribute("value"), h == null && p != null && (t.defaultChecked = !!p), h != null && (t.checked = h && typeof h != "function" && typeof h != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? t.name = "" + Kr(D) : t.removeAttribute("name");
  }
  function Td(t, n, l, f, h, p, A, D) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.type = p), n != null || l != null) {
      if (!(p !== "submit" && p !== "reset" || n != null)) return;
      l = l != null ? "" + Kr(l) : "", n = n != null ? "" + Kr(n) : l, D || n === t.value || (t.value = n), t.defaultValue = n;
    }
    f = f ?? h, f = typeof f != "function" && typeof f != "symbol" && !!f, t.checked = D ? t.checked : !!f, t.defaultChecked = !!f, A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" && (t.name = A);
  }
  function Sf(t, n, l) {
    n === "number" && A0(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Ni(t, n, l, f) {
    if (t = t.options, n) {
      n = {};
      for (var h = 0; h < l.length; h++) n["$" + l[h]] = true;
      for (l = 0; l < t.length; l++) h = n.hasOwnProperty("$" + t[l].value), t[l].selected !== h && (t[l].selected = h), h && f && (t[l].defaultSelected = true);
    } else {
      for (l = "" + Kr(l), n = null, h = 0; h < t.length; h++) {
        if (t[h].value === l) {
          t[h].selected = true, f && (t[h].defaultSelected = true);
          return;
        }
        n !== null || t[h].disabled || (n = t[h]);
      }
      n !== null && (n.selected = true);
    }
  }
  function wd(t, n, l) {
    if (n != null && (n = "" + Kr(n), n !== t.value && (t.value = n), l == null)) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = l != null ? "" + Kr(l) : "";
  }
  function Sd(t, n, l, f) {
    if (n == null) {
      if (f != null) {
        if (l != null) throw Error(i(92));
        if (fe(f)) {
          if (1 < f.length) throw Error(i(93));
          f = f[0];
        }
        l = f;
      }
      l == null && (l = ""), n = l;
    }
    l = Kr(n), t.defaultValue = l, f = t.textContent, f === l && f !== "" && f !== null && (t.value = f);
  }
  function Mi(t, n) {
    if (n) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Jy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Ad(t, n, l) {
    var f = n.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? f ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : f ? t.setProperty(n, l) : typeof l != "number" || l === 0 || Jy.has(n) ? n === "float" ? t.cssFloat = l : t[n] = ("" + l).trim() : t[n] = l + "px";
  }
  function kd(t, n, l) {
    if (n != null && typeof n != "object") throw Error(i(62));
    if (t = t.style, l != null) {
      for (var f in l) !l.hasOwnProperty(f) || n != null && n.hasOwnProperty(f) || (f.indexOf("--") === 0 ? t.setProperty(f, "") : f === "float" ? t.cssFloat = "" : t[f] = "");
      for (var h in n) f = n[h], n.hasOwnProperty(h) && l[h] !== f && Ad(t, h, f);
    } else for (var p in n) n.hasOwnProperty(p) && Ad(t, p, n[p]);
  }
  function Af(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var eE = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), tE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function k0(t) {
    return tE.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var kf = null;
  function Cf(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Li = null, Bi = null;
  function Cd(t) {
    var n = Y(t);
    if (n && (t = n.stateNode)) {
      var l = t[er] || null;
      e: switch (t = n.stateNode, n.type) {
        case "input":
          if (wf(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), n = l.name, l.type === "radio" && n != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + Wr("" + n) + '"][type="radio"]'), n = 0; n < l.length; n++) {
              var f = l[n];
              if (f !== t && f.form === t.form) {
                var h = f[er] || null;
                if (!h) throw Error(i(90));
                wf(f, h.value, h.defaultValue, h.defaultValue, h.checked, h.defaultChecked, h.type, h.name);
              }
            }
            for (n = 0; n < l.length; n++) f = l[n], f.form === t.form && _d(f);
          }
          break e;
        case "textarea":
          wd(t, l.value, l.defaultValue);
          break e;
        case "select":
          n = l.value, n != null && Ni(t, !!l.multiple, n, false);
      }
    }
  }
  var bf = false;
  function bd(t, n, l) {
    if (bf) return t(n, l);
    bf = true;
    try {
      var f = t(n);
      return f;
    } finally {
      if (bf = false, (Li !== null || Bi !== null) && (oc(), Li && (n = Li, t = Bi, Bi = Li = null, Cd(n), t))) for (n = 0; n < t.length; n++) Cd(t[n]);
    }
  }
  function Hs(t, n) {
    var l = t.stateNode;
    if (l === null) return null;
    var f = l[er] || null;
    if (f === null) return null;
    l = f[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) || (t = t.type, f = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !f;
        break e;
      default:
        t = false;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(i(231, n, typeof l));
    return l;
  }
  var Ha = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Of = false;
  if (Ha) try {
    var js = {};
    Object.defineProperty(js, "passive", { get: function() {
      Of = true;
    } }), window.addEventListener("test", js, js), window.removeEventListener("test", js, js);
  } catch {
    Of = false;
  }
  var on = null, Rf = null, C0 = null;
  function Od() {
    if (C0) return C0;
    var t, n = Rf, l = n.length, f, h = "value" in on ? on.value : on.textContent, p = h.length;
    for (t = 0; t < l && n[t] === h[t]; t++) ;
    var A = l - t;
    for (f = 1; f <= A && n[l - f] === h[p - f]; f++) ;
    return C0 = h.slice(t, 1 < f ? 1 - f : void 0);
  }
  function b0(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function O0() {
    return true;
  }
  function Rd() {
    return false;
  }
  function Or(t) {
    function n(l, f, h, p, A) {
      this._reactName = l, this._targetInst = h, this.type = f, this.nativeEvent = p, this.target = A, this.currentTarget = null;
      for (var D in t) t.hasOwnProperty(D) && (l = t[D], this[D] = l ? l(p) : p[D]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? O0 : Rd, this.isPropagationStopped = Rd, this;
    }
    return v(n.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = O0);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = O0);
    }, persist: function() {
    }, isPersistent: O0 }), n;
  }
  var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, R0 = Or(Kn), zs = v({}, Kn, { view: 0, detail: 0 }), rE = Or(zs), Df, Ff, Ps, D0 = v({}, zs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mf, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Ps && (Ps && t.type === "mousemove" ? (Df = t.screenX - Ps.screenX, Ff = t.screenY - Ps.screenY) : Ff = Df = 0, Ps = t), Df);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Ff;
  } }), Dd = Or(D0), aE = v({}, D0, { dataTransfer: 0 }), nE = Or(aE), iE = v({}, zs, { relatedTarget: 0 }), Nf = Or(iE), sE = v({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lE = Or(sE), cE = v({}, Kn, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), fE = Or(cE), uE = v({}, Kn, { data: 0 }), Fd = Or(uE), oE = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, hE = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, dE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function xE(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = dE[t]) ? !!n[t] : false;
  }
  function Mf() {
    return xE;
  }
  var vE = v({}, zs, { key: function(t) {
    if (t.key) {
      var n = oE[t.key] || t.key;
      if (n !== "Unidentified") return n;
    }
    return t.type === "keypress" ? (t = b0(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? hE[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mf, charCode: function(t) {
    return t.type === "keypress" ? b0(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? b0(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), pE = Or(vE), mE = v({}, D0, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nd = Or(mE), gE = v({}, zs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mf }), yE = Or(gE), EE = v({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _E = Or(EE), TE = v({}, D0, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), wE = Or(TE), SE = v({}, Kn, { newState: 0, oldState: 0 }), AE = Or(SE), kE = [9, 13, 27, 32], Lf = Ha && "CompositionEvent" in window, Gs = null;
  Ha && "documentMode" in document && (Gs = document.documentMode);
  var CE = Ha && "TextEvent" in window && !Gs, Md = Ha && (!Lf || Gs && 8 < Gs && 11 >= Gs), Ld = " ", Bd = false;
  function Ud(t, n) {
    switch (t) {
      case "keyup":
        return kE.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Id(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ui = false;
  function bE(t, n) {
    switch (t) {
      case "compositionend":
        return Id(n);
      case "keypress":
        return n.which !== 32 ? null : (Bd = true, Ld);
      case "textInput":
        return t = n.data, t === Ld && Bd ? null : t;
      default:
        return null;
    }
  }
  function OE(t, n) {
    if (Ui) return t === "compositionend" || !Lf && Ud(t, n) ? (t = Od(), C0 = Rf = on = null, Ui = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Md && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var RE = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Hd(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!RE[t.type] : n === "textarea";
  }
  function jd(t, n, l, f) {
    Li ? Bi ? Bi.push(f) : Bi = [f] : Li = f, n = mc(n, "onChange"), 0 < n.length && (l = new R0("onChange", "change", null, l, f), t.push({ event: l, listeners: n }));
  }
  var Vs = null, Xs = null;
  function DE(t) {
    Ev(t, 0);
  }
  function F0(t) {
    var n = oe(t);
    if (_d(n)) return t;
  }
  function zd(t, n) {
    if (t === "change") return n;
  }
  var Pd = false;
  if (Ha) {
    var Bf;
    if (Ha) {
      var Uf = "oninput" in document;
      if (!Uf) {
        var Gd = document.createElement("div");
        Gd.setAttribute("oninput", "return;"), Uf = typeof Gd.oninput == "function";
      }
      Bf = Uf;
    } else Bf = false;
    Pd = Bf && (!document.documentMode || 9 < document.documentMode);
  }
  function Vd() {
    Vs && (Vs.detachEvent("onpropertychange", Xd), Xs = Vs = null);
  }
  function Xd(t) {
    if (t.propertyName === "value" && F0(Xs)) {
      var n = [];
      jd(n, Xs, t, Cf(t)), bd(DE, n);
    }
  }
  function FE(t, n, l) {
    t === "focusin" ? (Vd(), Vs = n, Xs = l, Vs.attachEvent("onpropertychange", Xd)) : t === "focusout" && Vd();
  }
  function NE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return F0(Xs);
  }
  function ME(t, n) {
    if (t === "click") return F0(n);
  }
  function LE(t, n) {
    if (t === "input" || t === "change") return F0(n);
  }
  function BE(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var Ur = typeof Object.is == "function" ? Object.is : BE;
  function Ys(t, n) {
    if (Ur(t, n)) return true;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null) return false;
    var l = Object.keys(t), f = Object.keys(n);
    if (l.length !== f.length) return false;
    for (f = 0; f < l.length; f++) {
      var h = l[f];
      if (!V.call(n, h) || !Ur(t[h], n[h])) return false;
    }
    return true;
  }
  function Yd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function $d(t, n) {
    var l = Yd(t);
    t = 0;
    for (var f; l; ) {
      if (l.nodeType === 3) {
        if (f = t + l.textContent.length, t <= n && f >= n) return { node: l, offset: n - t };
        t = f;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Yd(l);
    }
  }
  function qd(t, n) {
    return t && n ? t === n ? true : t && t.nodeType === 3 ? false : n && n.nodeType === 3 ? qd(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : false : false;
  }
  function Kd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var n = A0(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof n.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) t = n.contentWindow;
      else break;
      n = A0(t.document);
    }
    return n;
  }
  function If(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  var UE = Ha && "documentMode" in document && 11 >= document.documentMode, Ii = null, Hf = null, $s = null, jf = false;
  function Wd(t, n, l) {
    var f = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    jf || Ii == null || Ii !== A0(f) || (f = Ii, "selectionStart" in f && If(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), $s && Ys($s, f) || ($s = f, f = mc(Hf, "onSelect"), 0 < f.length && (n = new R0("onSelect", "select", null, n, l), t.push({ event: n, listeners: f }), n.target = Ii)));
  }
  function Wn(t, n) {
    var l = {};
    return l[t.toLowerCase()] = n.toLowerCase(), l["Webkit" + t] = "webkit" + n, l["Moz" + t] = "moz" + n, l;
  }
  var Hi = { animationend: Wn("Animation", "AnimationEnd"), animationiteration: Wn("Animation", "AnimationIteration"), animationstart: Wn("Animation", "AnimationStart"), transitionrun: Wn("Transition", "TransitionRun"), transitionstart: Wn("Transition", "TransitionStart"), transitioncancel: Wn("Transition", "TransitionCancel"), transitionend: Wn("Transition", "TransitionEnd") }, zf = {}, Zd = {};
  Ha && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete Hi.animationend.animation, delete Hi.animationiteration.animation, delete Hi.animationstart.animation), "TransitionEvent" in window || delete Hi.transitionend.transition);
  function Zn(t) {
    if (zf[t]) return zf[t];
    if (!Hi[t]) return t;
    var n = Hi[t], l;
    for (l in n) if (n.hasOwnProperty(l) && l in Zd) return zf[t] = n[l];
    return t;
  }
  var Qd = Zn("animationend"), Jd = Zn("animationiteration"), e1 = Zn("animationstart"), IE = Zn("transitionrun"), HE = Zn("transitionstart"), jE = Zn("transitioncancel"), t1 = Zn("transitionend"), r1 = /* @__PURE__ */ new Map(), Pf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Pf.push("scrollEnd");
  function da(t, n) {
    r1.set(t, n), Ce(n, [t]);
  }
  var a1 = /* @__PURE__ */ new WeakMap();
  function Zr(t, n) {
    if (typeof t == "object" && t !== null) {
      var l = a1.get(t);
      return l !== void 0 ? l : (n = { value: t, source: n, stack: yd(n) }, a1.set(t, n), n);
    }
    return { value: t, source: n, stack: yd(n) };
  }
  var Qr = [], ji = 0, Gf = 0;
  function N0() {
    for (var t = ji, n = Gf = ji = 0; n < t; ) {
      var l = Qr[n];
      Qr[n++] = null;
      var f = Qr[n];
      Qr[n++] = null;
      var h = Qr[n];
      Qr[n++] = null;
      var p = Qr[n];
      if (Qr[n++] = null, f !== null && h !== null) {
        var A = f.pending;
        A === null ? h.next = h : (h.next = A.next, A.next = h), f.pending = h;
      }
      p !== 0 && n1(l, h, p);
    }
  }
  function M0(t, n, l, f) {
    Qr[ji++] = t, Qr[ji++] = n, Qr[ji++] = l, Qr[ji++] = f, Gf |= f, t.lanes |= f, t = t.alternate, t !== null && (t.lanes |= f);
  }
  function Vf(t, n, l, f) {
    return M0(t, n, l, f), L0(t);
  }
  function zi(t, n) {
    return M0(t, null, null, n), L0(t);
  }
  function n1(t, n, l) {
    t.lanes |= l;
    var f = t.alternate;
    f !== null && (f.lanes |= l);
    for (var h = false, p = t.return; p !== null; ) p.childLanes |= l, f = p.alternate, f !== null && (f.childLanes |= l), p.tag === 22 && (t = p.stateNode, t === null || t._visibility & 1 || (h = true)), t = p, p = p.return;
    return t.tag === 3 ? (p = t.stateNode, h && n !== null && (h = 31 - gt(l), t = p.hiddenUpdates, f = t[h], f === null ? t[h] = [n] : f.push(n), n.lane = l | 536870912), p) : null;
  }
  function L0(t) {
    if (50 < gl) throw gl = 0, Wu = null, Error(i(185));
    for (var n = t.return; n !== null; ) t = n, n = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Pi = {};
  function zE(t, n, l, f) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ir(t, n, l, f) {
    return new zE(t, n, l, f);
  }
  function Xf(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ja(t, n) {
    var l = t.alternate;
    return l === null ? (l = Ir(t.tag, n, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = n, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, n = t.dependencies, l.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function i1(t, n) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = n, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, n = l.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), t;
  }
  function B0(t, n, l, f, h, p) {
    var A = 0;
    if (f = t, typeof t == "function") Xf(t) && (A = 1);
    else if (typeof t == "string") A = G_(t, l, q.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else e: switch (t) {
      case w:
        return t = Ir(31, l, n, h), t.elementType = w, t.lanes = p, t;
      case T:
        return Qn(l.children, h, p, n);
      case E:
        A = 8, h |= 24;
        break;
      case _:
        return t = Ir(12, l, n, h | 2), t.elementType = _, t.lanes = p, t;
      case X:
        return t = Ir(13, l, n, h), t.elementType = X, t.lanes = p, t;
      case z:
        return t = Ir(19, l, n, h), t.elementType = z, t.lanes = p, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case O:
          case k:
            A = 10;
            break e;
          case F:
            A = 9;
            break e;
          case M:
            A = 11;
            break e;
          case C:
            A = 14;
            break e;
          case S:
            A = 16, f = null;
            break e;
        }
        A = 29, l = Error(i(130, t === null ? "null" : typeof t, "")), f = null;
    }
    return n = Ir(A, l, n, h), n.elementType = t, n.type = f, n.lanes = p, n;
  }
  function Qn(t, n, l, f) {
    return t = Ir(7, t, f, n), t.lanes = l, t;
  }
  function Yf(t, n, l) {
    return t = Ir(6, t, null, n), t.lanes = l, t;
  }
  function $f(t, n, l) {
    return n = Ir(4, t.children !== null ? t.children : [], t.key, n), n.lanes = l, n.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, n;
  }
  var Gi = [], Vi = 0, U0 = null, I0 = 0, Jr = [], ea = 0, Jn = null, za = 1, Pa = "";
  function ei(t, n) {
    Gi[Vi++] = I0, Gi[Vi++] = U0, U0 = t, I0 = n;
  }
  function s1(t, n, l) {
    Jr[ea++] = za, Jr[ea++] = Pa, Jr[ea++] = Jn, Jn = t;
    var f = za;
    t = Pa;
    var h = 32 - gt(f) - 1;
    f &= ~(1 << h), l += 1;
    var p = 32 - gt(n) + h;
    if (30 < p) {
      var A = h - h % 5;
      p = (f & (1 << A) - 1).toString(32), f >>= A, h -= A, za = 1 << 32 - gt(n) + h | l << h | f, Pa = p + t;
    } else za = 1 << p | l << h | f, Pa = t;
  }
  function qf(t) {
    t.return !== null && (ei(t, 1), s1(t, 1, 0));
  }
  function Kf(t) {
    for (; t === U0; ) U0 = Gi[--Vi], Gi[Vi] = null, I0 = Gi[--Vi], Gi[Vi] = null;
    for (; t === Jn; ) Jn = Jr[--ea], Jr[ea] = null, Pa = Jr[--ea], Jr[ea] = null, za = Jr[--ea], Jr[ea] = null;
  }
  var wr = null, Mt = null, dt = false, ti = null, Aa = false, Wf = Error(i(519));
  function ri(t) {
    var n = Error(i(418, ""));
    throw Ws(Zr(n, t)), Wf;
  }
  function l1(t) {
    var n = t.stateNode, l = t.type, f = t.memoizedProps;
    switch (n[Jt] = t, n[er] = f, l) {
      case "dialog":
        nt("cancel", n), nt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", n);
        break;
      case "video":
      case "audio":
        for (l = 0; l < El.length; l++) nt(El[l], n);
        break;
      case "source":
        nt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", n), nt("load", n);
        break;
      case "details":
        nt("toggle", n);
        break;
      case "input":
        nt("invalid", n), Td(n, f.value, f.defaultValue, f.checked, f.defaultChecked, f.type, f.name, true), S0(n);
        break;
      case "select":
        nt("invalid", n);
        break;
      case "textarea":
        nt("invalid", n), Sd(n, f.value, f.defaultValue, f.children), S0(n);
    }
    l = f.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || n.textContent === "" + l || f.suppressHydrationWarning === true || Sv(n.textContent, l) ? (f.popover != null && (nt("beforetoggle", n), nt("toggle", n)), f.onScroll != null && nt("scroll", n), f.onScrollEnd != null && nt("scrollend", n), f.onClick != null && (n.onclick = gc), n = true) : n = false, n || ri(t);
  }
  function c1(t) {
    for (wr = t.return; wr; ) switch (wr.tag) {
      case 5:
      case 13:
        Aa = false;
        return;
      case 27:
      case 3:
        Aa = true;
        return;
      default:
        wr = wr.return;
    }
  }
  function qs(t) {
    if (t !== wr) return false;
    if (!dt) return c1(t), dt = true, false;
    var n = t.tag, l;
    if ((l = n !== 3 && n !== 27) && ((l = n === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || ho(t.type, t.memoizedProps)), l = !l), l && Mt && ri(t), c1(t), n === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8) if (l = t.data, l === "/$") {
            if (n === 0) {
              Mt = va(t.nextSibling);
              break e;
            }
            n--;
          } else l !== "$" && l !== "$!" && l !== "$?" || n++;
          t = t.nextSibling;
        }
        Mt = null;
      }
    } else n === 27 ? (n = Mt, Cn(t.type) ? (t = mo, mo = null, Mt = t) : Mt = n) : Mt = wr ? va(t.stateNode.nextSibling) : null;
    return true;
  }
  function Ks() {
    Mt = wr = null, dt = false;
  }
  function f1() {
    var t = ti;
    return t !== null && (Fr === null ? Fr = t : Fr.push.apply(Fr, t), ti = null), t;
  }
  function Ws(t) {
    ti === null ? ti = [t] : ti.push(t);
  }
  var Zf = re(null), ai = null, Ga = null;
  function hn(t, n, l) {
    j(Zf, n._currentValue), n._currentValue = l;
  }
  function Va(t) {
    t._currentValue = Zf.current, R(Zf);
  }
  function Qf(t, n, l) {
    for (; t !== null; ) {
      var f = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n, f !== null && (f.childLanes |= n)) : f !== null && (f.childLanes & n) !== n && (f.childLanes |= n), t === l) break;
      t = t.return;
    }
  }
  function Jf(t, n, l, f) {
    var h = t.child;
    for (h !== null && (h.return = t); h !== null; ) {
      var p = h.dependencies;
      if (p !== null) {
        var A = h.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var D = p;
          p = h;
          for (var Z = 0; Z < n.length; Z++) if (D.context === n[Z]) {
            p.lanes |= l, D = p.alternate, D !== null && (D.lanes |= l), Qf(p.return, l, t), f || (A = null);
            break e;
          }
          p = D.next;
        }
      } else if (h.tag === 18) {
        if (A = h.return, A === null) throw Error(i(341));
        A.lanes |= l, p = A.alternate, p !== null && (p.lanes |= l), Qf(A, l, t), A = null;
      } else A = h.child;
      if (A !== null) A.return = h;
      else for (A = h; A !== null; ) {
        if (A === t) {
          A = null;
          break;
        }
        if (h = A.sibling, h !== null) {
          h.return = A.return, A = h;
          break;
        }
        A = A.return;
      }
      h = A;
    }
  }
  function Zs(t, n, l, f) {
    t = null;
    for (var h = n, p = false; h !== null; ) {
      if (!p) {
        if ((h.flags & 524288) !== 0) p = true;
        else if ((h.flags & 262144) !== 0) break;
      }
      if (h.tag === 10) {
        var A = h.alternate;
        if (A === null) throw Error(i(387));
        if (A = A.memoizedProps, A !== null) {
          var D = h.type;
          Ur(h.pendingProps.value, A.value) || (t !== null ? t.push(D) : t = [D]);
        }
      } else if (h === Ae.current) {
        if (A = h.alternate, A === null) throw Error(i(387));
        A.memoizedState.memoizedState !== h.memoizedState.memoizedState && (t !== null ? t.push(kl) : t = [kl]);
      }
      h = h.return;
    }
    t !== null && Jf(n, t, l, f), n.flags |= 262144;
  }
  function H0(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ur(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function ni(t) {
    ai = t, Ga = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function dr(t) {
    return u1(ai, t);
  }
  function j0(t, n) {
    return ai === null && ni(t), u1(t, n);
  }
  function u1(t, n) {
    var l = n._currentValue;
    if (n = { context: n, memoizedValue: l, next: null }, Ga === null) {
      if (t === null) throw Error(i(308));
      Ga = n, t.dependencies = { lanes: 0, firstContext: n }, t.flags |= 524288;
    } else Ga = Ga.next = n;
    return l;
  }
  var PE = typeof AbortController < "u" ? AbortController : function() {
    var t = [], n = this.signal = { aborted: false, addEventListener: function(l, f) {
      t.push(f);
    } };
    this.abort = function() {
      n.aborted = true, t.forEach(function(l) {
        return l();
      });
    };
  }, GE = e.unstable_scheduleCallback, VE = e.unstable_NormalPriority, qt = { $$typeof: k, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function eu() {
    return { controller: new PE(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Qs(t) {
    t.refCount--, t.refCount === 0 && GE(VE, function() {
      t.controller.abort();
    });
  }
  var Js = null, tu = 0, Xi = 0, Yi = null;
  function XE(t, n) {
    if (Js === null) {
      var l = Js = [];
      tu = 0, Xi = ao(), Yi = { status: "pending", value: void 0, then: function(f) {
        l.push(f);
      } };
    }
    return tu++, n.then(o1, o1), n;
  }
  function o1() {
    if (--tu === 0 && Js !== null) {
      Yi !== null && (Yi.status = "fulfilled");
      var t = Js;
      Js = null, Xi = 0, Yi = null;
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function YE(t, n) {
    var l = [], f = { status: "pending", value: null, reason: null, then: function(h) {
      l.push(h);
    } };
    return t.then(function() {
      f.status = "fulfilled", f.value = n;
      for (var h = 0; h < l.length; h++) (0, l[h])(n);
    }, function(h) {
      for (f.status = "rejected", f.reason = h, h = 0; h < l.length; h++) (0, l[h])(void 0);
    }), f;
  }
  var h1 = J.S;
  J.S = function(t, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && XE(t, n), h1 !== null && h1(t, n);
  };
  var ii = re(null);
  function ru() {
    var t = ii.current;
    return t !== null ? t : Ct.pooledCache;
  }
  function z0(t, n) {
    n === null ? j(ii, ii.current) : j(ii, n.pool);
  }
  function d1() {
    var t = ru();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var el = Error(i(460)), x1 = Error(i(474)), P0 = Error(i(542)), au = { then: function() {
  } };
  function v1(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function G0() {
  }
  function p1(t, n, l) {
    switch (l = t[l], l === void 0 ? t.push(n) : l !== n && (n.then(G0, G0), n = l), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw t = n.reason, g1(t), t;
      default:
        if (typeof n.status == "string") n.then(G0, G0);
        else {
          if (t = Ct, t !== null && 100 < t.shellSuspendCounter) throw Error(i(482));
          t = n, t.status = "pending", t.then(function(f) {
            if (n.status === "pending") {
              var h = n;
              h.status = "fulfilled", h.value = f;
            }
          }, function(f) {
            if (n.status === "pending") {
              var h = n;
              h.status = "rejected", h.reason = f;
            }
          });
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw t = n.reason, g1(t), t;
        }
        throw tl = n, el;
    }
  }
  var tl = null;
  function m1() {
    if (tl === null) throw Error(i(459));
    var t = tl;
    return tl = null, t;
  }
  function g1(t) {
    if (t === el || t === P0) throw Error(i(483));
  }
  var dn = false;
  function nu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function iu(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function xn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function vn(t, n, l) {
    var f = t.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (pt & 2) !== 0) {
      var h = f.pending;
      return h === null ? n.next = n : (n.next = h.next, h.next = n), f.pending = n, n = L0(t), n1(t, null, l), n;
    }
    return M0(t, f, n, l), L0(t);
  }
  function rl(t, n, l) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (l & 4194048) !== 0)) {
      var f = n.lanes;
      f &= t.pendingLanes, l |= f, n.lanes = l, T0(t, l);
    }
  }
  function su(t, n) {
    var l = t.updateQueue, f = t.alternate;
    if (f !== null && (f = f.updateQueue, l === f)) {
      var h = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var A = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          p === null ? h = p = A : p = p.next = A, l = l.next;
        } while (l !== null);
        p === null ? h = p = n : p = p.next = n;
      } else h = p = n;
      l = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: p, shared: f.shared, callbacks: f.callbacks }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = n : t.next = n, l.lastBaseUpdate = n;
  }
  var lu = false;
  function al() {
    if (lu) {
      var t = Yi;
      if (t !== null) throw t;
    }
  }
  function nl(t, n, l, f) {
    lu = false;
    var h = t.updateQueue;
    dn = false;
    var p = h.firstBaseUpdate, A = h.lastBaseUpdate, D = h.shared.pending;
    if (D !== null) {
      h.shared.pending = null;
      var Z = D, ue = Z.next;
      Z.next = null, A === null ? p = ue : A.next = ue, A = Z;
      var Ee = t.alternate;
      Ee !== null && (Ee = Ee.updateQueue, D = Ee.lastBaseUpdate, D !== A && (D === null ? Ee.firstBaseUpdate = ue : D.next = ue, Ee.lastBaseUpdate = Z));
    }
    if (p !== null) {
      var Se = h.baseState;
      A = 0, Ee = ue = Z = null, D = p;
      do {
        var de = D.lane & -536870913, ve = de !== D.lane;
        if (ve ? (ct & de) === de : (f & de) === de) {
          de !== 0 && de === Xi && (lu = true), Ee !== null && (Ee = Ee.next = { lane: 0, tag: D.tag, payload: D.payload, callback: null, next: null });
          e: {
            var ze = t, He = D;
            de = n;
            var wt = l;
            switch (He.tag) {
              case 1:
                if (ze = He.payload, typeof ze == "function") {
                  Se = ze.call(wt, Se, de);
                  break e;
                }
                Se = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = He.payload, de = typeof ze == "function" ? ze.call(wt, Se, de) : ze, de == null) break e;
                Se = v({}, Se, de);
                break e;
              case 2:
                dn = true;
            }
          }
          de = D.callback, de !== null && (t.flags |= 64, ve && (t.flags |= 8192), ve = h.callbacks, ve === null ? h.callbacks = [de] : ve.push(de));
        } else ve = { lane: de, tag: D.tag, payload: D.payload, callback: D.callback, next: null }, Ee === null ? (ue = Ee = ve, Z = Se) : Ee = Ee.next = ve, A |= de;
        if (D = D.next, D === null) {
          if (D = h.shared.pending, D === null) break;
          ve = D, D = ve.next, ve.next = null, h.lastBaseUpdate = ve, h.shared.pending = null;
        }
      } while (true);
      Ee === null && (Z = Se), h.baseState = Z, h.firstBaseUpdate = ue, h.lastBaseUpdate = Ee, p === null && (h.shared.lanes = 0), wn |= A, t.lanes = A, t.memoizedState = Se;
    }
  }
  function y1(t, n) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(n);
  }
  function E1(t, n) {
    var l = t.callbacks;
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) y1(l[t], n);
  }
  var $i = re(null), V0 = re(0);
  function _1(t, n) {
    t = Za, j(V0, t), j($i, n), Za = t | n.baseLanes;
  }
  function cu() {
    j(V0, Za), j($i, $i.current);
  }
  function fu() {
    Za = V0.current, R($i), R(V0);
  }
  var pn = 0, Je = null, _t = null, Gt = null, X0 = false, qi = false, si = false, Y0 = 0, il = 0, Ki = null, $E = 0;
  function Ht() {
    throw Error(i(321));
  }
  function uu(t, n) {
    if (n === null) return false;
    for (var l = 0; l < n.length && l < t.length; l++) if (!Ur(t[l], n[l])) return false;
    return true;
  }
  function ou(t, n, l, f, h, p) {
    return pn = p, Je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, J.H = t === null || t.memoizedState === null ? nx : ix, si = false, p = l(f, h), si = false, qi && (p = w1(n, l, f, h)), T1(t), p;
  }
  function T1(t) {
    J.H = Q0;
    var n = _t !== null && _t.next !== null;
    if (pn = 0, Gt = _t = Je = null, X0 = false, il = 0, Ki = null, n) throw Error(i(300));
    t === null || tr || (t = t.dependencies, t !== null && H0(t) && (tr = true));
  }
  function w1(t, n, l, f) {
    Je = t;
    var h = 0;
    do {
      if (qi && (Ki = null), il = 0, qi = false, 25 <= h) throw Error(i(301));
      if (h += 1, Gt = _t = null, t.updateQueue != null) {
        var p = t.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      J.H = e_, p = n(l, f);
    } while (qi);
    return p;
  }
  function qE() {
    var t = J.H, n = t.useState()[0];
    return n = typeof n.then == "function" ? sl(n) : n, t = t.useState()[0], (_t !== null ? _t.memoizedState : null) !== t && (Je.flags |= 1024), n;
  }
  function hu() {
    var t = Y0 !== 0;
    return Y0 = 0, t;
  }
  function du(t, n, l) {
    n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~l;
  }
  function xu(t) {
    if (X0) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), t = t.next;
      }
      X0 = false;
    }
    pn = 0, Gt = _t = Je = null, qi = false, il = Y0 = 0, Ki = null;
  }
  function Rr() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Gt === null ? Je.memoizedState = Gt = t : Gt = Gt.next = t, Gt;
  }
  function Vt() {
    if (_t === null) {
      var t = Je.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = _t.next;
    var n = Gt === null ? Je.memoizedState : Gt.next;
    if (n !== null) Gt = n, _t = t;
    else {
      if (t === null) throw Je.alternate === null ? Error(i(467)) : Error(i(310));
      _t = t, t = { memoizedState: _t.memoizedState, baseState: _t.baseState, baseQueue: _t.baseQueue, queue: _t.queue, next: null }, Gt === null ? Je.memoizedState = Gt = t : Gt = Gt.next = t;
    }
    return Gt;
  }
  function vu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sl(t) {
    var n = il;
    return il += 1, Ki === null && (Ki = []), t = p1(Ki, t, n), n = Je, (Gt === null ? n.memoizedState : Gt.next) === null && (n = n.alternate, J.H = n === null || n.memoizedState === null ? nx : ix), t;
  }
  function $0(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return sl(t);
      if (t.$$typeof === k) return dr(t);
    }
    throw Error(i(438, String(t)));
  }
  function pu(t) {
    var n = null, l = Je.updateQueue;
    if (l !== null && (n = l.memoCache), n == null) {
      var f = Je.alternate;
      f !== null && (f = f.updateQueue, f !== null && (f = f.memoCache, f != null && (n = { data: f.data.map(function(h) {
        return h.slice();
      }), index: 0 })));
    }
    if (n == null && (n = { data: [], index: 0 }), l === null && (l = vu(), Je.updateQueue = l), l.memoCache = n, l = n.data[n.index], l === void 0) for (l = n.data[n.index] = Array(t), f = 0; f < t; f++) l[f] = N;
    return n.index++, l;
  }
  function Xa(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function q0(t) {
    var n = Vt();
    return mu(n, _t, t);
  }
  function mu(t, n, l) {
    var f = t.queue;
    if (f === null) throw Error(i(311));
    f.lastRenderedReducer = l;
    var h = t.baseQueue, p = f.pending;
    if (p !== null) {
      if (h !== null) {
        var A = h.next;
        h.next = p.next, p.next = A;
      }
      n.baseQueue = h = p, f.pending = null;
    }
    if (p = t.baseState, h === null) t.memoizedState = p;
    else {
      n = h.next;
      var D = A = null, Z = null, ue = n, Ee = false;
      do {
        var Se = ue.lane & -536870913;
        if (Se !== ue.lane ? (ct & Se) === Se : (pn & Se) === Se) {
          var de = ue.revertLane;
          if (de === 0) Z !== null && (Z = Z.next = { lane: 0, revertLane: 0, action: ue.action, hasEagerState: ue.hasEagerState, eagerState: ue.eagerState, next: null }), Se === Xi && (Ee = true);
          else if ((pn & de) === de) {
            ue = ue.next, de === Xi && (Ee = true);
            continue;
          } else Se = { lane: 0, revertLane: ue.revertLane, action: ue.action, hasEagerState: ue.hasEagerState, eagerState: ue.eagerState, next: null }, Z === null ? (D = Z = Se, A = p) : Z = Z.next = Se, Je.lanes |= de, wn |= de;
          Se = ue.action, si && l(p, Se), p = ue.hasEagerState ? ue.eagerState : l(p, Se);
        } else de = { lane: Se, revertLane: ue.revertLane, action: ue.action, hasEagerState: ue.hasEagerState, eagerState: ue.eagerState, next: null }, Z === null ? (D = Z = de, A = p) : Z = Z.next = de, Je.lanes |= Se, wn |= Se;
        ue = ue.next;
      } while (ue !== null && ue !== n);
      if (Z === null ? A = p : Z.next = D, !Ur(p, t.memoizedState) && (tr = true, Ee && (l = Yi, l !== null))) throw l;
      t.memoizedState = p, t.baseState = A, t.baseQueue = Z, f.lastRenderedState = p;
    }
    return h === null && (f.lanes = 0), [t.memoizedState, f.dispatch];
  }
  function gu(t) {
    var n = Vt(), l = n.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = t;
    var f = l.dispatch, h = l.pending, p = n.memoizedState;
    if (h !== null) {
      l.pending = null;
      var A = h = h.next;
      do
        p = t(p, A.action), A = A.next;
      while (A !== h);
      Ur(p, n.memoizedState) || (tr = true), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), l.lastRenderedState = p;
    }
    return [p, f];
  }
  function S1(t, n, l) {
    var f = Je, h = Vt(), p = dt;
    if (p) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else l = n();
    var A = !Ur((_t || h).memoizedState, l);
    A && (h.memoizedState = l, tr = true), h = h.queue;
    var D = C1.bind(null, f, h, t);
    if (ll(2048, 8, D, [t]), h.getSnapshot !== n || A || Gt !== null && Gt.memoizedState.tag & 1) {
      if (f.flags |= 2048, Wi(9, K0(), k1.bind(null, f, h, l, n), null), Ct === null) throw Error(i(349));
      p || (pn & 124) !== 0 || A1(f, n, l);
    }
    return l;
  }
  function A1(t, n, l) {
    t.flags |= 16384, t = { getSnapshot: n, value: l }, n = Je.updateQueue, n === null ? (n = vu(), Je.updateQueue = n, n.stores = [t]) : (l = n.stores, l === null ? n.stores = [t] : l.push(t));
  }
  function k1(t, n, l, f) {
    n.value = l, n.getSnapshot = f, b1(n) && O1(t);
  }
  function C1(t, n, l) {
    return l(function() {
      b1(n) && O1(t);
    });
  }
  function b1(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var l = n();
      return !Ur(t, l);
    } catch {
      return true;
    }
  }
  function O1(t) {
    var n = zi(t, 2);
    n !== null && Gr(n, t, 2);
  }
  function yu(t) {
    var n = Rr();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), si) {
        rt(true);
        try {
          l();
        } finally {
          rt(false);
        }
      }
    }
    return n.memoizedState = n.baseState = t, n.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xa, lastRenderedState: t }, n;
  }
  function R1(t, n, l, f) {
    return t.baseState = l, mu(t, _t, typeof f == "function" ? f : Xa);
  }
  function KE(t, n, l, f, h) {
    if (Z0(t)) throw Error(i(485));
    if (t = n.action, t !== null) {
      var p = { payload: h, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(A) {
        p.listeners.push(A);
      } };
      J.T !== null ? l(true) : p.isTransition = false, f(p), l = n.pending, l === null ? (p.next = n.pending = p, D1(n, p)) : (p.next = l.next, n.pending = l.next = p);
    }
  }
  function D1(t, n) {
    var l = n.action, f = n.payload, h = t.state;
    if (n.isTransition) {
      var p = J.T, A = {};
      J.T = A;
      try {
        var D = l(h, f), Z = J.S;
        Z !== null && Z(A, D), F1(t, n, D);
      } catch (ue) {
        Eu(t, n, ue);
      } finally {
        J.T = p;
      }
    } else try {
      p = l(h, f), F1(t, n, p);
    } catch (ue) {
      Eu(t, n, ue);
    }
  }
  function F1(t, n, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(f) {
      N1(t, n, f);
    }, function(f) {
      return Eu(t, n, f);
    }) : N1(t, n, l);
  }
  function N1(t, n, l) {
    n.status = "fulfilled", n.value = l, M1(n), t.state = l, n = t.pending, n !== null && (l = n.next, l === n ? t.pending = null : (l = l.next, n.next = l, D1(t, l)));
  }
  function Eu(t, n, l) {
    var f = t.pending;
    if (t.pending = null, f !== null) {
      f = f.next;
      do
        n.status = "rejected", n.reason = l, M1(n), n = n.next;
      while (n !== f);
    }
    t.action = null;
  }
  function M1(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function L1(t, n) {
    return n;
  }
  function B1(t, n) {
    if (dt) {
      var l = Ct.formState;
      if (l !== null) {
        e: {
          var f = Je;
          if (dt) {
            if (Mt) {
              t: {
                for (var h = Mt, p = Aa; h.nodeType !== 8; ) {
                  if (!p) {
                    h = null;
                    break t;
                  }
                  if (h = va(h.nextSibling), h === null) {
                    h = null;
                    break t;
                  }
                }
                p = h.data, h = p === "F!" || p === "F" ? h : null;
              }
              if (h) {
                Mt = va(h.nextSibling), f = h.data === "F!";
                break e;
              }
            }
            ri(f);
          }
          f = false;
        }
        f && (n = l[0]);
      }
    }
    return l = Rr(), l.memoizedState = l.baseState = n, f = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: L1, lastRenderedState: n }, l.queue = f, l = tx.bind(null, Je, f), f.dispatch = l, f = yu(false), p = Au.bind(null, Je, false, f.queue), f = Rr(), h = { state: n, dispatch: null, action: t, pending: null }, f.queue = h, l = KE.bind(null, Je, h, p, l), h.dispatch = l, f.memoizedState = t, [n, l, false];
  }
  function U1(t) {
    var n = Vt();
    return I1(n, _t, t);
  }
  function I1(t, n, l) {
    if (n = mu(t, n, L1)[0], t = q0(Xa)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var f = sl(n);
    } catch (A) {
      throw A === el ? P0 : A;
    }
    else f = n;
    n = Vt();
    var h = n.queue, p = h.dispatch;
    return l !== n.memoizedState && (Je.flags |= 2048, Wi(9, K0(), WE.bind(null, h, l), null)), [f, p, t];
  }
  function WE(t, n) {
    t.action = n;
  }
  function H1(t) {
    var n = Vt(), l = _t;
    if (l !== null) return I1(n, l, t);
    Vt(), n = n.memoizedState, l = Vt();
    var f = l.queue.dispatch;
    return l.memoizedState = t, [n, f, false];
  }
  function Wi(t, n, l, f) {
    return t = { tag: t, create: l, deps: f, inst: n, next: null }, n = Je.updateQueue, n === null && (n = vu(), Je.updateQueue = n), l = n.lastEffect, l === null ? n.lastEffect = t.next = t : (f = l.next, l.next = t, t.next = f, n.lastEffect = t), t;
  }
  function K0() {
    return { destroy: void 0, resource: void 0 };
  }
  function j1() {
    return Vt().memoizedState;
  }
  function W0(t, n, l, f) {
    var h = Rr();
    f = f === void 0 ? null : f, Je.flags |= t, h.memoizedState = Wi(1 | n, K0(), l, f);
  }
  function ll(t, n, l, f) {
    var h = Vt();
    f = f === void 0 ? null : f;
    var p = h.memoizedState.inst;
    _t !== null && f !== null && uu(f, _t.memoizedState.deps) ? h.memoizedState = Wi(n, p, l, f) : (Je.flags |= t, h.memoizedState = Wi(1 | n, p, l, f));
  }
  function z1(t, n) {
    W0(8390656, 8, t, n);
  }
  function P1(t, n) {
    ll(2048, 8, t, n);
  }
  function G1(t, n) {
    return ll(4, 2, t, n);
  }
  function V1(t, n) {
    return ll(4, 4, t, n);
  }
  function X1(t, n) {
    if (typeof n == "function") {
      t = t();
      var l = n(t);
      return function() {
        typeof l == "function" ? l() : n(null);
      };
    }
    if (n != null) return t = t(), n.current = t, function() {
      n.current = null;
    };
  }
  function Y1(t, n, l) {
    l = l != null ? l.concat([t]) : null, ll(4, 4, X1.bind(null, n, t), l);
  }
  function _u() {
  }
  function $1(t, n) {
    var l = Vt();
    n = n === void 0 ? null : n;
    var f = l.memoizedState;
    return n !== null && uu(n, f[1]) ? f[0] : (l.memoizedState = [t, n], t);
  }
  function q1(t, n) {
    var l = Vt();
    n = n === void 0 ? null : n;
    var f = l.memoizedState;
    if (n !== null && uu(n, f[1])) return f[0];
    if (f = t(), si) {
      rt(true);
      try {
        t();
      } finally {
        rt(false);
      }
    }
    return l.memoizedState = [f, n], f;
  }
  function Tu(t, n, l) {
    return l === void 0 || (pn & 1073741824) !== 0 ? t.memoizedState = n : (t.memoizedState = l, t = Zx(), Je.lanes |= t, wn |= t, l);
  }
  function K1(t, n, l, f) {
    return Ur(l, n) ? l : $i.current !== null ? (t = Tu(t, l, f), Ur(t, n) || (tr = true), t) : (pn & 42) === 0 ? (tr = true, t.memoizedState = l) : (t = Zx(), Je.lanes |= t, wn |= t, n);
  }
  function W1(t, n, l, f, h) {
    var p = ae.p;
    ae.p = p !== 0 && 8 > p ? p : 8;
    var A = J.T, D = {};
    J.T = D, Au(t, false, n, l);
    try {
      var Z = h(), ue = J.S;
      if (ue !== null && ue(D, Z), Z !== null && typeof Z == "object" && typeof Z.then == "function") {
        var Ee = YE(Z, f);
        cl(t, n, Ee, Pr(t));
      } else cl(t, n, f, Pr(t));
    } catch (Se) {
      cl(t, n, { then: function() {
      }, status: "rejected", reason: Se }, Pr());
    } finally {
      ae.p = p, J.T = A;
    }
  }
  function ZE() {
  }
  function wu(t, n, l, f) {
    if (t.tag !== 5) throw Error(i(476));
    var h = Z1(t).queue;
    W1(t, h, n, we, l === null ? ZE : function() {
      return Q1(t), l(f);
    });
  }
  function Z1(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = { memoizedState: we, baseState: we, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xa, lastRenderedState: we }, next: null };
    var l = {};
    return n.next = { memoizedState: l, baseState: l, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xa, lastRenderedState: l }, next: null }, t.memoizedState = n, t = t.alternate, t !== null && (t.memoizedState = n), n;
  }
  function Q1(t) {
    var n = Z1(t).next.queue;
    cl(t, n, {}, Pr());
  }
  function Su() {
    return dr(kl);
  }
  function J1() {
    return Vt().memoizedState;
  }
  function ex() {
    return Vt().memoizedState;
  }
  function QE(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var l = Pr();
          t = xn(l);
          var f = vn(n, t, l);
          f !== null && (Gr(f, n, l), rl(f, n, l)), n = { cache: eu() }, t.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function JE(t, n, l) {
    var f = Pr();
    l = { lane: f, revertLane: 0, action: l, hasEagerState: false, eagerState: null, next: null }, Z0(t) ? rx(n, l) : (l = Vf(t, n, l, f), l !== null && (Gr(l, t, f), ax(l, n, f)));
  }
  function tx(t, n, l) {
    var f = Pr();
    cl(t, n, l, f);
  }
  function cl(t, n, l, f) {
    var h = { lane: f, revertLane: 0, action: l, hasEagerState: false, eagerState: null, next: null };
    if (Z0(t)) rx(n, h);
    else {
      var p = t.alternate;
      if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
        var A = n.lastRenderedState, D = p(A, l);
        if (h.hasEagerState = true, h.eagerState = D, Ur(D, A)) return M0(t, n, h, 0), Ct === null && N0(), false;
      } catch {
      } finally {
      }
      if (l = Vf(t, n, h, f), l !== null) return Gr(l, t, f), ax(l, n, f), true;
    }
    return false;
  }
  function Au(t, n, l, f) {
    if (f = { lane: 2, revertLane: ao(), action: f, hasEagerState: false, eagerState: null, next: null }, Z0(t)) {
      if (n) throw Error(i(479));
    } else n = Vf(t, l, f, 2), n !== null && Gr(n, t, 2);
  }
  function Z0(t) {
    var n = t.alternate;
    return t === Je || n !== null && n === Je;
  }
  function rx(t, n) {
    qi = X0 = true;
    var l = t.pending;
    l === null ? n.next = n : (n.next = l.next, l.next = n), t.pending = n;
  }
  function ax(t, n, l) {
    if ((l & 4194048) !== 0) {
      var f = n.lanes;
      f &= t.pendingLanes, l |= f, n.lanes = l, T0(t, l);
    }
  }
  var Q0 = { readContext: dr, use: $0, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useLayoutEffect: Ht, useInsertionEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useSyncExternalStore: Ht, useId: Ht, useHostTransitionStatus: Ht, useFormState: Ht, useActionState: Ht, useOptimistic: Ht, useMemoCache: Ht, useCacheRefresh: Ht }, nx = { readContext: dr, use: $0, useCallback: function(t, n) {
    return Rr().memoizedState = [t, n === void 0 ? null : n], t;
  }, useContext: dr, useEffect: z1, useImperativeHandle: function(t, n, l) {
    l = l != null ? l.concat([t]) : null, W0(4194308, 4, X1.bind(null, n, t), l);
  }, useLayoutEffect: function(t, n) {
    return W0(4194308, 4, t, n);
  }, useInsertionEffect: function(t, n) {
    W0(4, 2, t, n);
  }, useMemo: function(t, n) {
    var l = Rr();
    n = n === void 0 ? null : n;
    var f = t();
    if (si) {
      rt(true);
      try {
        t();
      } finally {
        rt(false);
      }
    }
    return l.memoizedState = [f, n], f;
  }, useReducer: function(t, n, l) {
    var f = Rr();
    if (l !== void 0) {
      var h = l(n);
      if (si) {
        rt(true);
        try {
          l(n);
        } finally {
          rt(false);
        }
      }
    } else h = n;
    return f.memoizedState = f.baseState = h, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: h }, f.queue = t, t = t.dispatch = JE.bind(null, Je, t), [f.memoizedState, t];
  }, useRef: function(t) {
    var n = Rr();
    return t = { current: t }, n.memoizedState = t;
  }, useState: function(t) {
    t = yu(t);
    var n = t.queue, l = tx.bind(null, Je, n);
    return n.dispatch = l, [t.memoizedState, l];
  }, useDebugValue: _u, useDeferredValue: function(t, n) {
    var l = Rr();
    return Tu(l, t, n);
  }, useTransition: function() {
    var t = yu(false);
    return t = W1.bind(null, Je, t.queue, true, false), Rr().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, n, l) {
    var f = Je, h = Rr();
    if (dt) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else {
      if (l = n(), Ct === null) throw Error(i(349));
      (ct & 124) !== 0 || A1(f, n, l);
    }
    h.memoizedState = l;
    var p = { value: l, getSnapshot: n };
    return h.queue = p, z1(C1.bind(null, f, p, t), [t]), f.flags |= 2048, Wi(9, K0(), k1.bind(null, f, p, l, n), null), l;
  }, useId: function() {
    var t = Rr(), n = Ct.identifierPrefix;
    if (dt) {
      var l = Pa, f = za;
      l = (f & ~(1 << 32 - gt(f) - 1)).toString(32) + l, n = "\xAB" + n + "R" + l, l = Y0++, 0 < l && (n += "H" + l.toString(32)), n += "\xBB";
    } else l = $E++, n = "\xAB" + n + "r" + l.toString(32) + "\xBB";
    return t.memoizedState = n;
  }, useHostTransitionStatus: Su, useFormState: B1, useActionState: B1, useOptimistic: function(t) {
    var n = Rr();
    n.memoizedState = n.baseState = t;
    var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return n.queue = l, n = Au.bind(null, Je, true, l), l.dispatch = n, [t, n];
  }, useMemoCache: pu, useCacheRefresh: function() {
    return Rr().memoizedState = QE.bind(null, Je);
  } }, ix = { readContext: dr, use: $0, useCallback: $1, useContext: dr, useEffect: P1, useImperativeHandle: Y1, useInsertionEffect: G1, useLayoutEffect: V1, useMemo: q1, useReducer: q0, useRef: j1, useState: function() {
    return q0(Xa);
  }, useDebugValue: _u, useDeferredValue: function(t, n) {
    var l = Vt();
    return K1(l, _t.memoizedState, t, n);
  }, useTransition: function() {
    var t = q0(Xa)[0], n = Vt().memoizedState;
    return [typeof t == "boolean" ? t : sl(t), n];
  }, useSyncExternalStore: S1, useId: J1, useHostTransitionStatus: Su, useFormState: U1, useActionState: U1, useOptimistic: function(t, n) {
    var l = Vt();
    return R1(l, _t, t, n);
  }, useMemoCache: pu, useCacheRefresh: ex }, e_ = { readContext: dr, use: $0, useCallback: $1, useContext: dr, useEffect: P1, useImperativeHandle: Y1, useInsertionEffect: G1, useLayoutEffect: V1, useMemo: q1, useReducer: gu, useRef: j1, useState: function() {
    return gu(Xa);
  }, useDebugValue: _u, useDeferredValue: function(t, n) {
    var l = Vt();
    return _t === null ? Tu(l, t, n) : K1(l, _t.memoizedState, t, n);
  }, useTransition: function() {
    var t = gu(Xa)[0], n = Vt().memoizedState;
    return [typeof t == "boolean" ? t : sl(t), n];
  }, useSyncExternalStore: S1, useId: J1, useHostTransitionStatus: Su, useFormState: H1, useActionState: H1, useOptimistic: function(t, n) {
    var l = Vt();
    return _t !== null ? R1(l, _t, t, n) : (l.baseState = t, [t, l.queue.dispatch]);
  }, useMemoCache: pu, useCacheRefresh: ex }, Zi = null, fl = 0;
  function J0(t) {
    var n = fl;
    return fl += 1, Zi === null && (Zi = []), p1(Zi, t, n);
  }
  function ul(t, n) {
    n = n.props.ref, t.ref = n !== void 0 ? n : null;
  }
  function ec(t, n) {
    throw n.$$typeof === m ? Error(i(525)) : (t = Object.prototype.toString.call(n), Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)));
  }
  function sx(t) {
    var n = t._init;
    return n(t._payload);
  }
  function lx(t) {
    function n(se, te) {
      if (t) {
        var ce = se.deletions;
        ce === null ? (se.deletions = [te], se.flags |= 16) : ce.push(te);
      }
    }
    function l(se, te) {
      if (!t) return null;
      for (; te !== null; ) n(se, te), te = te.sibling;
      return null;
    }
    function f(se) {
      for (var te = /* @__PURE__ */ new Map(); se !== null; ) se.key !== null ? te.set(se.key, se) : te.set(se.index, se), se = se.sibling;
      return te;
    }
    function h(se, te) {
      return se = ja(se, te), se.index = 0, se.sibling = null, se;
    }
    function p(se, te, ce) {
      return se.index = ce, t ? (ce = se.alternate, ce !== null ? (ce = ce.index, ce < te ? (se.flags |= 67108866, te) : ce) : (se.flags |= 67108866, te)) : (se.flags |= 1048576, te);
    }
    function A(se) {
      return t && se.alternate === null && (se.flags |= 67108866), se;
    }
    function D(se, te, ce, Te) {
      return te === null || te.tag !== 6 ? (te = Yf(ce, se.mode, Te), te.return = se, te) : (te = h(te, ce), te.return = se, te);
    }
    function Z(se, te, ce, Te) {
      var Me = ce.type;
      return Me === T ? Ee(se, te, ce.props.children, Te, ce.key) : te !== null && (te.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === S && sx(Me) === te.type) ? (te = h(te, ce.props), ul(te, ce), te.return = se, te) : (te = B0(ce.type, ce.key, ce.props, null, se.mode, Te), ul(te, ce), te.return = se, te);
    }
    function ue(se, te, ce, Te) {
      return te === null || te.tag !== 4 || te.stateNode.containerInfo !== ce.containerInfo || te.stateNode.implementation !== ce.implementation ? (te = $f(ce, se.mode, Te), te.return = se, te) : (te = h(te, ce.children || []), te.return = se, te);
    }
    function Ee(se, te, ce, Te, Me) {
      return te === null || te.tag !== 7 ? (te = Qn(ce, se.mode, Te, Me), te.return = se, te) : (te = h(te, ce), te.return = se, te);
    }
    function Se(se, te, ce) {
      if (typeof te == "string" && te !== "" || typeof te == "number" || typeof te == "bigint") return te = Yf("" + te, se.mode, ce), te.return = se, te;
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case g:
            return ce = B0(te.type, te.key, te.props, null, se.mode, ce), ul(ce, te), ce.return = se, ce;
          case y:
            return te = $f(te, se.mode, ce), te.return = se, te;
          case S:
            var Te = te._init;
            return te = Te(te._payload), Se(se, te, ce);
        }
        if (fe(te) || U(te)) return te = Qn(te, se.mode, ce, null), te.return = se, te;
        if (typeof te.then == "function") return Se(se, J0(te), ce);
        if (te.$$typeof === k) return Se(se, j0(se, te), ce);
        ec(se, te);
      }
      return null;
    }
    function de(se, te, ce, Te) {
      var Me = te !== null ? te.key : null;
      if (typeof ce == "string" && ce !== "" || typeof ce == "number" || typeof ce == "bigint") return Me !== null ? null : D(se, te, "" + ce, Te);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case g:
            return ce.key === Me ? Z(se, te, ce, Te) : null;
          case y:
            return ce.key === Me ? ue(se, te, ce, Te) : null;
          case S:
            return Me = ce._init, ce = Me(ce._payload), de(se, te, ce, Te);
        }
        if (fe(ce) || U(ce)) return Me !== null ? null : Ee(se, te, ce, Te, null);
        if (typeof ce.then == "function") return de(se, te, J0(ce), Te);
        if (ce.$$typeof === k) return de(se, te, j0(se, ce), Te);
        ec(se, ce);
      }
      return null;
    }
    function ve(se, te, ce, Te, Me) {
      if (typeof Te == "string" && Te !== "" || typeof Te == "number" || typeof Te == "bigint") return se = se.get(ce) || null, D(te, se, "" + Te, Me);
      if (typeof Te == "object" && Te !== null) {
        switch (Te.$$typeof) {
          case g:
            return se = se.get(Te.key === null ? ce : Te.key) || null, Z(te, se, Te, Me);
          case y:
            return se = se.get(Te.key === null ? ce : Te.key) || null, ue(te, se, Te, Me);
          case S:
            var et = Te._init;
            return Te = et(Te._payload), ve(se, te, ce, Te, Me);
        }
        if (fe(Te) || U(Te)) return se = se.get(ce) || null, Ee(te, se, Te, Me, null);
        if (typeof Te.then == "function") return ve(se, te, ce, J0(Te), Me);
        if (Te.$$typeof === k) return ve(se, te, ce, j0(te, Te), Me);
        ec(te, Te);
      }
      return null;
    }
    function ze(se, te, ce, Te) {
      for (var Me = null, et = null, Ue = te, je = te = 0, ar = null; Ue !== null && je < ce.length; je++) {
        Ue.index > je ? (ar = Ue, Ue = null) : ar = Ue.sibling;
        var ht = de(se, Ue, ce[je], Te);
        if (ht === null) {
          Ue === null && (Ue = ar);
          break;
        }
        t && Ue && ht.alternate === null && n(se, Ue), te = p(ht, te, je), et === null ? Me = ht : et.sibling = ht, et = ht, Ue = ar;
      }
      if (je === ce.length) return l(se, Ue), dt && ei(se, je), Me;
      if (Ue === null) {
        for (; je < ce.length; je++) Ue = Se(se, ce[je], Te), Ue !== null && (te = p(Ue, te, je), et === null ? Me = Ue : et.sibling = Ue, et = Ue);
        return dt && ei(se, je), Me;
      }
      for (Ue = f(Ue); je < ce.length; je++) ar = ve(Ue, se, je, ce[je], Te), ar !== null && (t && ar.alternate !== null && Ue.delete(ar.key === null ? je : ar.key), te = p(ar, te, je), et === null ? Me = ar : et.sibling = ar, et = ar);
      return t && Ue.forEach(function(Fn) {
        return n(se, Fn);
      }), dt && ei(se, je), Me;
    }
    function He(se, te, ce, Te) {
      if (ce == null) throw Error(i(151));
      for (var Me = null, et = null, Ue = te, je = te = 0, ar = null, ht = ce.next(); Ue !== null && !ht.done; je++, ht = ce.next()) {
        Ue.index > je ? (ar = Ue, Ue = null) : ar = Ue.sibling;
        var Fn = de(se, Ue, ht.value, Te);
        if (Fn === null) {
          Ue === null && (Ue = ar);
          break;
        }
        t && Ue && Fn.alternate === null && n(se, Ue), te = p(Fn, te, je), et === null ? Me = Fn : et.sibling = Fn, et = Fn, Ue = ar;
      }
      if (ht.done) return l(se, Ue), dt && ei(se, je), Me;
      if (Ue === null) {
        for (; !ht.done; je++, ht = ce.next()) ht = Se(se, ht.value, Te), ht !== null && (te = p(ht, te, je), et === null ? Me = ht : et.sibling = ht, et = ht);
        return dt && ei(se, je), Me;
      }
      for (Ue = f(Ue); !ht.done; je++, ht = ce.next()) ht = ve(Ue, se, je, ht.value, Te), ht !== null && (t && ht.alternate !== null && Ue.delete(ht.key === null ? je : ht.key), te = p(ht, te, je), et === null ? Me = ht : et.sibling = ht, et = ht);
      return t && Ue.forEach(function(tT) {
        return n(se, tT);
      }), dt && ei(se, je), Me;
    }
    function wt(se, te, ce, Te) {
      if (typeof ce == "object" && ce !== null && ce.type === T && ce.key === null && (ce = ce.props.children), typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case g:
            e: {
              for (var Me = ce.key; te !== null; ) {
                if (te.key === Me) {
                  if (Me = ce.type, Me === T) {
                    if (te.tag === 7) {
                      l(se, te.sibling), Te = h(te, ce.props.children), Te.return = se, se = Te;
                      break e;
                    }
                  } else if (te.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === S && sx(Me) === te.type) {
                    l(se, te.sibling), Te = h(te, ce.props), ul(Te, ce), Te.return = se, se = Te;
                    break e;
                  }
                  l(se, te);
                  break;
                } else n(se, te);
                te = te.sibling;
              }
              ce.type === T ? (Te = Qn(ce.props.children, se.mode, Te, ce.key), Te.return = se, se = Te) : (Te = B0(ce.type, ce.key, ce.props, null, se.mode, Te), ul(Te, ce), Te.return = se, se = Te);
            }
            return A(se);
          case y:
            e: {
              for (Me = ce.key; te !== null; ) {
                if (te.key === Me) if (te.tag === 4 && te.stateNode.containerInfo === ce.containerInfo && te.stateNode.implementation === ce.implementation) {
                  l(se, te.sibling), Te = h(te, ce.children || []), Te.return = se, se = Te;
                  break e;
                } else {
                  l(se, te);
                  break;
                }
                else n(se, te);
                te = te.sibling;
              }
              Te = $f(ce, se.mode, Te), Te.return = se, se = Te;
            }
            return A(se);
          case S:
            return Me = ce._init, ce = Me(ce._payload), wt(se, te, ce, Te);
        }
        if (fe(ce)) return ze(se, te, ce, Te);
        if (U(ce)) {
          if (Me = U(ce), typeof Me != "function") throw Error(i(150));
          return ce = Me.call(ce), He(se, te, ce, Te);
        }
        if (typeof ce.then == "function") return wt(se, te, J0(ce), Te);
        if (ce.$$typeof === k) return wt(se, te, j0(se, ce), Te);
        ec(se, ce);
      }
      return typeof ce == "string" && ce !== "" || typeof ce == "number" || typeof ce == "bigint" ? (ce = "" + ce, te !== null && te.tag === 6 ? (l(se, te.sibling), Te = h(te, ce), Te.return = se, se = Te) : (l(se, te), Te = Yf(ce, se.mode, Te), Te.return = se, se = Te), A(se)) : l(se, te);
    }
    return function(se, te, ce, Te) {
      try {
        fl = 0;
        var Me = wt(se, te, ce, Te);
        return Zi = null, Me;
      } catch (Ue) {
        if (Ue === el || Ue === P0) throw Ue;
        var et = Ir(29, Ue, null, se.mode);
        return et.lanes = Te, et.return = se, et;
      } finally {
      }
    };
  }
  var Qi = lx(true), cx = lx(false), ta = re(null), ka = null;
  function mn(t) {
    var n = t.alternate;
    j(Kt, Kt.current & 1), j(ta, t), ka === null && (n === null || $i.current !== null || n.memoizedState !== null) && (ka = t);
  }
  function fx(t) {
    if (t.tag === 22) {
      if (j(Kt, Kt.current), j(ta, t), ka === null) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (ka = t);
      }
    } else gn();
  }
  function gn() {
    j(Kt, Kt.current), j(ta, ta.current);
  }
  function Ya(t) {
    R(ta), ka === t && (ka = null), R(Kt);
  }
  var Kt = re(0);
  function tc(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var l = n.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || po(l))) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ku(t, n, l, f) {
    n = t.memoizedState, l = l(f, n), l = l == null ? n : v({}, n, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Cu = { enqueueSetState: function(t, n, l) {
    t = t._reactInternals;
    var f = Pr(), h = xn(f);
    h.payload = n, l != null && (h.callback = l), n = vn(t, h, f), n !== null && (Gr(n, t, f), rl(n, t, f));
  }, enqueueReplaceState: function(t, n, l) {
    t = t._reactInternals;
    var f = Pr(), h = xn(f);
    h.tag = 1, h.payload = n, l != null && (h.callback = l), n = vn(t, h, f), n !== null && (Gr(n, t, f), rl(n, t, f));
  }, enqueueForceUpdate: function(t, n) {
    t = t._reactInternals;
    var l = Pr(), f = xn(l);
    f.tag = 2, n != null && (f.callback = n), n = vn(t, f, l), n !== null && (Gr(n, t, l), rl(n, t, l));
  } };
  function ux(t, n, l, f, h, p, A) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(f, p, A) : n.prototype && n.prototype.isPureReactComponent ? !Ys(l, f) || !Ys(h, p) : true;
  }
  function ox(t, n, l, f) {
    t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(l, f), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(l, f), n.state !== t && Cu.enqueueReplaceState(n, n.state, null);
  }
  function li(t, n) {
    var l = n;
    if ("ref" in n) {
      l = {};
      for (var f in n) f !== "ref" && (l[f] = n[f]);
    }
    if (t = t.defaultProps) {
      l === n && (l = v({}, l));
      for (var h in t) l[h] === void 0 && (l[h] = t[h]);
    }
    return l;
  }
  var rc = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function hx(t) {
    rc(t);
  }
  function dx(t) {
    console.error(t);
  }
  function xx(t) {
    rc(t);
  }
  function ac(t, n) {
    try {
      var l = t.onUncaughtError;
      l(n.value, { componentStack: n.stack });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function vx(t, n, l) {
    try {
      var f = t.onCaughtError;
      f(l.value, { componentStack: l.stack, errorBoundary: n.tag === 1 ? n.stateNode : null });
    } catch (h) {
      setTimeout(function() {
        throw h;
      });
    }
  }
  function bu(t, n, l) {
    return l = xn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ac(t, n);
    }, l;
  }
  function px(t) {
    return t = xn(t), t.tag = 3, t;
  }
  function mx(t, n, l, f) {
    var h = l.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var p = f.value;
      t.payload = function() {
        return h(p);
      }, t.callback = function() {
        vx(n, l, f);
      };
    }
    var A = l.stateNode;
    A !== null && typeof A.componentDidCatch == "function" && (t.callback = function() {
      vx(n, l, f), typeof h != "function" && (Sn === null ? Sn = /* @__PURE__ */ new Set([this]) : Sn.add(this));
      var D = f.stack;
      this.componentDidCatch(f.value, { componentStack: D !== null ? D : "" });
    });
  }
  function t_(t, n, l, f, h) {
    if (l.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
      if (n = l.alternate, n !== null && Zs(n, l, h, true), l = ta.current, l !== null) {
        switch (l.tag) {
          case 13:
            return ka === null ? Qu() : l.alternate === null && Lt === 0 && (Lt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = h, f === au ? l.flags |= 16384 : (n = l.updateQueue, n === null ? l.updateQueue = /* @__PURE__ */ new Set([f]) : n.add(f), eo(t, f, h)), false;
          case 22:
            return l.flags |= 65536, f === au ? l.flags |= 16384 : (n = l.updateQueue, n === null ? (n = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([f]) }, l.updateQueue = n) : (l = n.retryQueue, l === null ? n.retryQueue = /* @__PURE__ */ new Set([f]) : l.add(f)), eo(t, f, h)), false;
        }
        throw Error(i(435, l.tag));
      }
      return eo(t, f, h), Qu(), false;
    }
    if (dt) return n = ta.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = h, f !== Wf && (t = Error(i(422), { cause: f }), Ws(Zr(t, l)))) : (f !== Wf && (n = Error(i(423), { cause: f }), Ws(Zr(n, l))), t = t.current.alternate, t.flags |= 65536, h &= -h, t.lanes |= h, f = Zr(f, l), h = bu(t.stateNode, f, h), su(t, h), Lt !== 4 && (Lt = 2)), false;
    var p = Error(i(520), { cause: f });
    if (p = Zr(p, l), ml === null ? ml = [p] : ml.push(p), Lt !== 4 && (Lt = 2), n === null) return true;
    f = Zr(f, l), l = n;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = h & -h, l.lanes |= t, t = bu(l.stateNode, f, t), su(l, t), false;
        case 1:
          if (n = l.type, p = l.stateNode, (l.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Sn === null || !Sn.has(p)))) return l.flags |= 65536, h &= -h, l.lanes |= h, h = px(h), mx(h, t, l, f), su(l, h), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var gx = Error(i(461)), tr = false;
  function sr(t, n, l, f) {
    n.child = t === null ? cx(n, null, l, f) : Qi(n, t.child, l, f);
  }
  function yx(t, n, l, f, h) {
    l = l.render;
    var p = n.ref;
    if ("ref" in f) {
      var A = {};
      for (var D in f) D !== "ref" && (A[D] = f[D]);
    } else A = f;
    return ni(n), f = ou(t, n, l, A, p, h), D = hu(), t !== null && !tr ? (du(t, n, h), $a(t, n, h)) : (dt && D && qf(n), n.flags |= 1, sr(t, n, f, h), n.child);
  }
  function Ex(t, n, l, f, h) {
    if (t === null) {
      var p = l.type;
      return typeof p == "function" && !Xf(p) && p.defaultProps === void 0 && l.compare === null ? (n.tag = 15, n.type = p, _x(t, n, p, f, h)) : (t = B0(l.type, null, f, n, n.mode, h), t.ref = n.ref, t.return = n, n.child = t);
    }
    if (p = t.child, !Bu(t, h)) {
      var A = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ys, l(A, f) && t.ref === n.ref) return $a(t, n, h);
    }
    return n.flags |= 1, t = ja(p, f), t.ref = n.ref, t.return = n, n.child = t;
  }
  function _x(t, n, l, f, h) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (Ys(p, f) && t.ref === n.ref) if (tr = false, n.pendingProps = f = p, Bu(t, h)) (t.flags & 131072) !== 0 && (tr = true);
      else return n.lanes = t.lanes, $a(t, n, h);
    }
    return Ou(t, n, l, f, h);
  }
  function Tx(t, n, l) {
    var f = n.pendingProps, h = f.children, p = t !== null ? t.memoizedState : null;
    if (f.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (f = p !== null ? p.baseLanes | l : l, t !== null) {
          for (h = n.child = t.child, p = 0; h !== null; ) p = p | h.lanes | h.childLanes, h = h.sibling;
          n.childLanes = p & ~f;
        } else n.childLanes = 0, n.child = null;
        return wx(t, n, f, l);
      }
      if ((l & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && z0(n, p !== null ? p.cachePool : null), p !== null ? _1(n, p) : cu(), fx(n);
      else return n.lanes = n.childLanes = 536870912, wx(t, n, p !== null ? p.baseLanes | l : l, l);
    } else p !== null ? (z0(n, p.cachePool), _1(n, p), gn(), n.memoizedState = null) : (t !== null && z0(n, null), cu(), gn());
    return sr(t, n, h, l), n.child;
  }
  function wx(t, n, l, f) {
    var h = ru();
    return h = h === null ? null : { parent: qt._currentValue, pool: h }, n.memoizedState = { baseLanes: l, cachePool: h }, t !== null && z0(n, null), cu(), fx(n), t !== null && Zs(t, n, f, true), null;
  }
  function nc(t, n) {
    var l = n.ref;
    if (l === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(i(284));
      (t === null || t.ref !== l) && (n.flags |= 4194816);
    }
  }
  function Ou(t, n, l, f, h) {
    return ni(n), l = ou(t, n, l, f, void 0, h), f = hu(), t !== null && !tr ? (du(t, n, h), $a(t, n, h)) : (dt && f && qf(n), n.flags |= 1, sr(t, n, l, h), n.child);
  }
  function Sx(t, n, l, f, h, p) {
    return ni(n), n.updateQueue = null, l = w1(n, f, l, h), T1(t), f = hu(), t !== null && !tr ? (du(t, n, p), $a(t, n, p)) : (dt && f && qf(n), n.flags |= 1, sr(t, n, l, p), n.child);
  }
  function Ax(t, n, l, f, h) {
    if (ni(n), n.stateNode === null) {
      var p = Pi, A = l.contextType;
      typeof A == "object" && A !== null && (p = dr(A)), p = new l(f, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Cu, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = f, p.state = n.memoizedState, p.refs = {}, nu(n), A = l.contextType, p.context = typeof A == "object" && A !== null ? dr(A) : Pi, p.state = n.memoizedState, A = l.getDerivedStateFromProps, typeof A == "function" && (ku(n, l, A, f), p.state = n.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (A = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), A !== p.state && Cu.enqueueReplaceState(p, p.state, null), nl(n, f, p, h), al(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), f = true;
    } else if (t === null) {
      p = n.stateNode;
      var D = n.memoizedProps, Z = li(l, D);
      p.props = Z;
      var ue = p.context, Ee = l.contextType;
      A = Pi, typeof Ee == "object" && Ee !== null && (A = dr(Ee));
      var Se = l.getDerivedStateFromProps;
      Ee = typeof Se == "function" || typeof p.getSnapshotBeforeUpdate == "function", D = n.pendingProps !== D, Ee || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (D || ue !== A) && ox(n, p, f, A), dn = false;
      var de = n.memoizedState;
      p.state = de, nl(n, f, p, h), al(), ue = n.memoizedState, D || de !== ue || dn ? (typeof Se == "function" && (ku(n, l, Se, f), ue = n.memoizedState), (Z = dn || ux(n, l, Z, f, de, ue, A)) ? (Ee || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = f, n.memoizedState = ue), p.props = f, p.state = ue, p.context = A, f = Z) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), f = false);
    } else {
      p = n.stateNode, iu(t, n), A = n.memoizedProps, Ee = li(l, A), p.props = Ee, Se = n.pendingProps, de = p.context, ue = l.contextType, Z = Pi, typeof ue == "object" && ue !== null && (Z = dr(ue)), D = l.getDerivedStateFromProps, (ue = typeof D == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (A !== Se || de !== Z) && ox(n, p, f, Z), dn = false, de = n.memoizedState, p.state = de, nl(n, f, p, h), al();
      var ve = n.memoizedState;
      A !== Se || de !== ve || dn || t !== null && t.dependencies !== null && H0(t.dependencies) ? (typeof D == "function" && (ku(n, l, D, f), ve = n.memoizedState), (Ee = dn || ux(n, l, Ee, f, de, ve, Z) || t !== null && t.dependencies !== null && H0(t.dependencies)) ? (ue || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(f, ve, Z), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(f, ve, Z)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || A === t.memoizedProps && de === t.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || A === t.memoizedProps && de === t.memoizedState || (n.flags |= 1024), n.memoizedProps = f, n.memoizedState = ve), p.props = f, p.state = ve, p.context = Z, f = Ee) : (typeof p.componentDidUpdate != "function" || A === t.memoizedProps && de === t.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || A === t.memoizedProps && de === t.memoizedState || (n.flags |= 1024), f = false);
    }
    return p = f, nc(t, n), f = (n.flags & 128) !== 0, p || f ? (p = n.stateNode, l = f && typeof l.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, t !== null && f ? (n.child = Qi(n, t.child, null, h), n.child = Qi(n, null, l, h)) : sr(t, n, l, h), n.memoizedState = p.state, t = n.child) : t = $a(t, n, h), t;
  }
  function kx(t, n, l, f) {
    return Ks(), n.flags |= 256, sr(t, n, l, f), n.child;
  }
  var Ru = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Du(t) {
    return { baseLanes: t, cachePool: d1() };
  }
  function Fu(t, n, l) {
    return t = t !== null ? t.childLanes & ~l : 0, n && (t |= ra), t;
  }
  function Cx(t, n, l) {
    var f = n.pendingProps, h = false, p = (n.flags & 128) !== 0, A;
    if ((A = p) || (A = t !== null && t.memoizedState === null ? false : (Kt.current & 2) !== 0), A && (h = true, n.flags &= -129), A = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
      if (dt) {
        if (h ? mn(n) : gn(), dt) {
          var D = Mt, Z;
          if (Z = D) {
            e: {
              for (Z = D, D = Aa; Z.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (Z = va(Z.nextSibling), Z === null) {
                  D = null;
                  break e;
                }
              }
              D = Z;
            }
            D !== null ? (n.memoizedState = { dehydrated: D, treeContext: Jn !== null ? { id: za, overflow: Pa } : null, retryLane: 536870912, hydrationErrors: null }, Z = Ir(18, null, null, 0), Z.stateNode = D, Z.return = n, n.child = Z, wr = n, Mt = null, Z = true) : Z = false;
          }
          Z || ri(n);
        }
        if (D = n.memoizedState, D !== null && (D = D.dehydrated, D !== null)) return po(D) ? n.lanes = 32 : n.lanes = 536870912, null;
        Ya(n);
      }
      return D = f.children, f = f.fallback, h ? (gn(), h = n.mode, D = ic({ mode: "hidden", children: D }, h), f = Qn(f, h, l, null), D.return = n, f.return = n, D.sibling = f, n.child = D, h = n.child, h.memoizedState = Du(l), h.childLanes = Fu(t, A, l), n.memoizedState = Ru, f) : (mn(n), Nu(n, D));
    }
    if (Z = t.memoizedState, Z !== null && (D = Z.dehydrated, D !== null)) {
      if (p) n.flags & 256 ? (mn(n), n.flags &= -257, n = Mu(t, n, l)) : n.memoizedState !== null ? (gn(), n.child = t.child, n.flags |= 128, n = null) : (gn(), h = f.fallback, D = n.mode, f = ic({ mode: "visible", children: f.children }, D), h = Qn(h, D, l, null), h.flags |= 2, f.return = n, h.return = n, f.sibling = h, n.child = f, Qi(n, t.child, null, l), f = n.child, f.memoizedState = Du(l), f.childLanes = Fu(t, A, l), n.memoizedState = Ru, n = h);
      else if (mn(n), po(D)) {
        if (A = D.nextSibling && D.nextSibling.dataset, A) var ue = A.dgst;
        A = ue, f = Error(i(419)), f.stack = "", f.digest = A, Ws({ value: f, source: null, stack: null }), n = Mu(t, n, l);
      } else if (tr || Zs(t, n, l, false), A = (l & t.childLanes) !== 0, tr || A) {
        if (A = Ct, A !== null && (f = l & -l, f = (f & 42) !== 0 ? 1 : Bs(f), f = (f & (A.suspendedLanes | l)) !== 0 ? 0 : f, f !== 0 && f !== Z.retryLane)) throw Z.retryLane = f, zi(t, f), Gr(A, t, f), gx;
        D.data === "$?" || Qu(), n = Mu(t, n, l);
      } else D.data === "$?" ? (n.flags |= 192, n.child = t.child, n = null) : (t = Z.treeContext, Mt = va(D.nextSibling), wr = n, dt = true, ti = null, Aa = false, t !== null && (Jr[ea++] = za, Jr[ea++] = Pa, Jr[ea++] = Jn, za = t.id, Pa = t.overflow, Jn = n), n = Nu(n, f.children), n.flags |= 4096);
      return n;
    }
    return h ? (gn(), h = f.fallback, D = n.mode, Z = t.child, ue = Z.sibling, f = ja(Z, { mode: "hidden", children: f.children }), f.subtreeFlags = Z.subtreeFlags & 65011712, ue !== null ? h = ja(ue, h) : (h = Qn(h, D, l, null), h.flags |= 2), h.return = n, f.return = n, f.sibling = h, n.child = f, f = h, h = n.child, D = t.child.memoizedState, D === null ? D = Du(l) : (Z = D.cachePool, Z !== null ? (ue = qt._currentValue, Z = Z.parent !== ue ? { parent: ue, pool: ue } : Z) : Z = d1(), D = { baseLanes: D.baseLanes | l, cachePool: Z }), h.memoizedState = D, h.childLanes = Fu(t, A, l), n.memoizedState = Ru, f) : (mn(n), l = t.child, t = l.sibling, l = ja(l, { mode: "visible", children: f.children }), l.return = n, l.sibling = null, t !== null && (A = n.deletions, A === null ? (n.deletions = [t], n.flags |= 16) : A.push(t)), n.child = l, n.memoizedState = null, l);
  }
  function Nu(t, n) {
    return n = ic({ mode: "visible", children: n }, t.mode), n.return = t, t.child = n;
  }
  function ic(t, n) {
    return t = Ir(22, t, null, n), t.lanes = 0, t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, t;
  }
  function Mu(t, n, l) {
    return Qi(n, t.child, null, l), t = Nu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
  }
  function bx(t, n, l) {
    t.lanes |= n;
    var f = t.alternate;
    f !== null && (f.lanes |= n), Qf(t.return, n, l);
  }
  function Lu(t, n, l, f, h) {
    var p = t.memoizedState;
    p === null ? t.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: f, tail: l, tailMode: h } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = f, p.tail = l, p.tailMode = h);
  }
  function Ox(t, n, l) {
    var f = n.pendingProps, h = f.revealOrder, p = f.tail;
    if (sr(t, n, f.children, l), f = Kt.current, (f & 2) !== 0) f = f & 1 | 2, n.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) e: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && bx(t, l, n);
        else if (t.tag === 19) bx(t, l, n);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === n) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      f &= 1;
    }
    switch (j(Kt, f), h) {
      case "forwards":
        for (l = n.child, h = null; l !== null; ) t = l.alternate, t !== null && tc(t) === null && (h = l), l = l.sibling;
        l = h, l === null ? (h = n.child, n.child = null) : (h = l.sibling, l.sibling = null), Lu(n, false, h, l, p);
        break;
      case "backwards":
        for (l = null, h = n.child, n.child = null; h !== null; ) {
          if (t = h.alternate, t !== null && tc(t) === null) {
            n.child = h;
            break;
          }
          t = h.sibling, h.sibling = l, l = h, h = t;
        }
        Lu(n, true, l, null, p);
        break;
      case "together":
        Lu(n, false, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function $a(t, n, l) {
    if (t !== null && (n.dependencies = t.dependencies), wn |= n.lanes, (l & n.childLanes) === 0) if (t !== null) {
      if (Zs(t, n, l, false), (l & n.childLanes) === 0) return null;
    } else return null;
    if (t !== null && n.child !== t.child) throw Error(i(153));
    if (n.child !== null) {
      for (t = n.child, l = ja(t, t.pendingProps), n.child = l, l.return = n; t.sibling !== null; ) t = t.sibling, l = l.sibling = ja(t, t.pendingProps), l.return = n;
      l.sibling = null;
    }
    return n.child;
  }
  function Bu(t, n) {
    return (t.lanes & n) !== 0 ? true : (t = t.dependencies, !!(t !== null && H0(t)));
  }
  function r_(t, n, l) {
    switch (n.tag) {
      case 3:
        pe(n, n.stateNode.containerInfo), hn(n, qt, t.memoizedState.cache), Ks();
        break;
      case 27:
      case 5:
        _e(n);
        break;
      case 4:
        pe(n, n.stateNode.containerInfo);
        break;
      case 10:
        hn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var f = n.memoizedState;
        if (f !== null) return f.dehydrated !== null ? (mn(n), n.flags |= 128, null) : (l & n.child.childLanes) !== 0 ? Cx(t, n, l) : (mn(n), t = $a(t, n, l), t !== null ? t.sibling : null);
        mn(n);
        break;
      case 19:
        var h = (t.flags & 128) !== 0;
        if (f = (l & n.childLanes) !== 0, f || (Zs(t, n, l, false), f = (l & n.childLanes) !== 0), h) {
          if (f) return Ox(t, n, l);
          n.flags |= 128;
        }
        if (h = n.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), j(Kt, Kt.current), f) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Tx(t, n, l);
      case 24:
        hn(n, qt, t.memoizedState.cache);
    }
    return $a(t, n, l);
  }
  function Rx(t, n, l) {
    if (t !== null) if (t.memoizedProps !== n.pendingProps) tr = true;
    else {
      if (!Bu(t, l) && (n.flags & 128) === 0) return tr = false, r_(t, n, l);
      tr = (t.flags & 131072) !== 0;
    }
    else tr = false, dt && (n.flags & 1048576) !== 0 && s1(n, I0, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          t = n.pendingProps;
          var f = n.elementType, h = f._init;
          if (f = h(f._payload), n.type = f, typeof f == "function") Xf(f) ? (t = li(f, t), n.tag = 1, n = Ax(null, n, f, t, l)) : (n.tag = 0, n = Ou(null, n, f, t, l));
          else {
            if (f != null) {
              if (h = f.$$typeof, h === M) {
                n.tag = 11, n = yx(null, n, f, t, l);
                break e;
              } else if (h === C) {
                n.tag = 14, n = Ex(null, n, f, t, l);
                break e;
              }
            }
            throw n = ge(f) || f, Error(i(306, n, ""));
          }
        }
        return n;
      case 0:
        return Ou(t, n, n.type, n.pendingProps, l);
      case 1:
        return f = n.type, h = li(f, n.pendingProps), Ax(t, n, f, h, l);
      case 3:
        e: {
          if (pe(n, n.stateNode.containerInfo), t === null) throw Error(i(387));
          f = n.pendingProps;
          var p = n.memoizedState;
          h = p.element, iu(t, n), nl(n, f, null, l);
          var A = n.memoizedState;
          if (f = A.cache, hn(n, qt, f), f !== p.cache && Jf(n, [qt], l, true), al(), f = A.element, p.isDehydrated) if (p = { element: f, isDehydrated: false, cache: A.cache }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
            n = kx(t, n, f, l);
            break e;
          } else if (f !== h) {
            h = Zr(Error(i(424)), n), Ws(h), n = kx(t, n, f, l);
            break e;
          } else {
            switch (t = n.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (Mt = va(t.firstChild), wr = n, dt = true, ti = null, Aa = true, l = cx(n, null, f, l), n.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          }
          else {
            if (Ks(), f === h) {
              n = $a(t, n, l);
              break e;
            }
            sr(t, n, f, l);
          }
          n = n.child;
        }
        return n;
      case 26:
        return nc(t, n), t === null ? (l = Mv(n.type, null, n.pendingProps, null)) ? n.memoizedState = l : dt || (l = n.type, t = n.pendingProps, f = yc(ie.current).createElement(l), f[Jt] = n, f[er] = t, cr(f, l, t), le(f), n.stateNode = f) : n.memoizedState = Mv(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
      case 27:
        return _e(n), t === null && dt && (f = n.stateNode = Dv(n.type, n.pendingProps, ie.current), wr = n, Aa = true, h = Mt, Cn(n.type) ? (mo = h, Mt = va(f.firstChild)) : Mt = h), sr(t, n, n.pendingProps.children, l), nc(t, n), t === null && (n.flags |= 4194304), n.child;
      case 5:
        return t === null && dt && ((h = f = Mt) && (f = R_(f, n.type, n.pendingProps, Aa), f !== null ? (n.stateNode = f, wr = n, Mt = va(f.firstChild), Aa = false, h = true) : h = false), h || ri(n)), _e(n), h = n.type, p = n.pendingProps, A = t !== null ? t.memoizedProps : null, f = p.children, ho(h, p) ? f = null : A !== null && ho(h, A) && (n.flags |= 32), n.memoizedState !== null && (h = ou(t, n, qE, null, null, l), kl._currentValue = h), nc(t, n), sr(t, n, f, l), n.child;
      case 6:
        return t === null && dt && ((t = l = Mt) && (l = D_(l, n.pendingProps, Aa), l !== null ? (n.stateNode = l, wr = n, Mt = null, t = true) : t = false), t || ri(n)), null;
      case 13:
        return Cx(t, n, l);
      case 4:
        return pe(n, n.stateNode.containerInfo), f = n.pendingProps, t === null ? n.child = Qi(n, null, f, l) : sr(t, n, f, l), n.child;
      case 11:
        return yx(t, n, n.type, n.pendingProps, l);
      case 7:
        return sr(t, n, n.pendingProps, l), n.child;
      case 8:
        return sr(t, n, n.pendingProps.children, l), n.child;
      case 12:
        return sr(t, n, n.pendingProps.children, l), n.child;
      case 10:
        return f = n.pendingProps, hn(n, n.type, f.value), sr(t, n, f.children, l), n.child;
      case 9:
        return h = n.type._context, f = n.pendingProps.children, ni(n), h = dr(h), f = f(h), n.flags |= 1, sr(t, n, f, l), n.child;
      case 14:
        return Ex(t, n, n.type, n.pendingProps, l);
      case 15:
        return _x(t, n, n.type, n.pendingProps, l);
      case 19:
        return Ox(t, n, l);
      case 31:
        return f = n.pendingProps, l = n.mode, f = { mode: f.mode, children: f.children }, t === null ? (l = ic(f, l), l.ref = n.ref, n.child = l, l.return = n, n = l) : (l = ja(t.child, f), l.ref = n.ref, n.child = l, l.return = n, n = l), n;
      case 22:
        return Tx(t, n, l);
      case 24:
        return ni(n), f = dr(qt), t === null ? (h = ru(), h === null && (h = Ct, p = eu(), h.pooledCache = p, p.refCount++, p !== null && (h.pooledCacheLanes |= l), h = p), n.memoizedState = { parent: f, cache: h }, nu(n), hn(n, qt, h)) : ((t.lanes & l) !== 0 && (iu(t, n), nl(n, null, null, l), al()), h = t.memoizedState, p = n.memoizedState, h.parent !== f ? (h = { parent: f, cache: f }, n.memoizedState = h, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = h), hn(n, qt, f)) : (f = p.cache, hn(n, qt, f), f !== h.cache && Jf(n, [qt], l, true))), sr(t, n, n.pendingProps.children, l), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  function qa(t) {
    t.flags |= 4;
  }
  function Dx(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Hv(n)) {
      if (n = ta.current, n !== null && ((ct & 4194048) === ct ? ka !== null : (ct & 62914560) !== ct && (ct & 536870912) === 0 || n !== ka)) throw tl = au, x1;
      t.flags |= 8192;
    }
  }
  function sc(t, n) {
    n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? Ms() : 536870912, t.lanes |= n, rs |= n);
  }
  function ol(t, n) {
    if (!dt) switch (t.tailMode) {
      case "hidden":
        n = t.tail;
        for (var l = null; n !== null; ) n.alternate !== null && (l = n), n = n.sibling;
        l === null ? t.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = t.tail;
        for (var f = null; l !== null; ) l.alternate !== null && (f = l), l = l.sibling;
        f === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : f.sibling = null;
    }
  }
  function Nt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child, l = 0, f = 0;
    if (n) for (var h = t.child; h !== null; ) l |= h.lanes | h.childLanes, f |= h.subtreeFlags & 65011712, f |= h.flags & 65011712, h.return = t, h = h.sibling;
    else for (h = t.child; h !== null; ) l |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = t, h = h.sibling;
    return t.subtreeFlags |= f, t.childLanes = l, n;
  }
  function a_(t, n, l) {
    var f = n.pendingProps;
    switch (Kf(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nt(n), null;
      case 1:
        return Nt(n), null;
      case 3:
        return l = n.stateNode, f = null, t !== null && (f = t.memoizedState.cache), n.memoizedState.cache !== f && (n.flags |= 2048), Va(qt), ye(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (qs(n) ? qa(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, f1())), Nt(n), null;
      case 26:
        return l = n.memoizedState, t === null ? (qa(n), l !== null ? (Nt(n), Dx(n, l)) : (Nt(n), n.flags &= -16777217)) : l ? l !== t.memoizedState ? (qa(n), Nt(n), Dx(n, l)) : (Nt(n), n.flags &= -16777217) : (t.memoizedProps !== f && qa(n), Nt(n), n.flags &= -16777217), null;
      case 27:
        Re(n), l = ie.current;
        var h = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== f && qa(n);
        else {
          if (!f) {
            if (n.stateNode === null) throw Error(i(166));
            return Nt(n), null;
          }
          t = q.current, qs(n) ? l1(n) : (t = Dv(h, f, l), n.stateNode = t, qa(n));
        }
        return Nt(n), null;
      case 5:
        if (Re(n), l = n.type, t !== null && n.stateNode != null) t.memoizedProps !== f && qa(n);
        else {
          if (!f) {
            if (n.stateNode === null) throw Error(i(166));
            return Nt(n), null;
          }
          if (t = q.current, qs(n)) l1(n);
          else {
            switch (h = yc(ie.current), t) {
              case 1:
                t = h.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = h.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = h.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = h.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                    break;
                  case "script":
                    t = h.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof f.is == "string" ? h.createElement("select", { is: f.is }) : h.createElement("select"), f.multiple ? t.multiple = true : f.size && (t.size = f.size);
                    break;
                  default:
                    t = typeof f.is == "string" ? h.createElement(l, { is: f.is }) : h.createElement(l);
                }
            }
            t[Jt] = n, t[er] = f;
            e: for (h = n.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) t.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === n) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === n) break e;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            n.stateNode = t;
            e: switch (cr(t, l, f), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!f.autoFocus;
                break e;
              case "img":
                t = true;
                break e;
              default:
                t = false;
            }
            t && qa(n);
          }
        }
        return Nt(n), n.flags &= -16777217, null;
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== f && qa(n);
        else {
          if (typeof f != "string" && n.stateNode === null) throw Error(i(166));
          if (t = ie.current, qs(n)) {
            if (t = n.stateNode, l = n.memoizedProps, f = null, h = wr, h !== null) switch (h.tag) {
              case 27:
              case 5:
                f = h.memoizedProps;
            }
            t[Jt] = n, t = !!(t.nodeValue === l || f !== null && f.suppressHydrationWarning === true || Sv(t.nodeValue, l)), t || ri(n);
          } else t = yc(t).createTextNode(f), t[Jt] = n, n.stateNode = t;
        }
        return Nt(n), null;
      case 13:
        if (f = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (h = qs(n), f !== null && f.dehydrated !== null) {
            if (t === null) {
              if (!h) throw Error(i(318));
              if (h = n.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(i(317));
              h[Jt] = n;
            } else Ks(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Nt(n), h = false;
          } else h = f1(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = h), h = true;
          if (!h) return n.flags & 256 ? (Ya(n), n) : (Ya(n), null);
        }
        if (Ya(n), (n.flags & 128) !== 0) return n.lanes = l, n;
        if (l = f !== null, t = t !== null && t.memoizedState !== null, l) {
          f = n.child, h = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (h = f.alternate.memoizedState.cachePool.pool);
          var p = null;
          f.memoizedState !== null && f.memoizedState.cachePool !== null && (p = f.memoizedState.cachePool.pool), p !== h && (f.flags |= 2048);
        }
        return l !== t && l && (n.child.flags |= 8192), sc(n, n.updateQueue), Nt(n), null;
      case 4:
        return ye(), t === null && lo(n.stateNode.containerInfo), Nt(n), null;
      case 10:
        return Va(n.type), Nt(n), null;
      case 19:
        if (R(Kt), h = n.memoizedState, h === null) return Nt(n), null;
        if (f = (n.flags & 128) !== 0, p = h.rendering, p === null) if (f) ol(h, false);
        else {
          if (Lt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
            if (p = tc(t), p !== null) {
              for (n.flags |= 128, ol(h, false), t = p.updateQueue, n.updateQueue = t, sc(n, t), n.subtreeFlags = 0, t = l, l = n.child; l !== null; ) i1(l, t), l = l.sibling;
              return j(Kt, Kt.current & 1 | 2), n.child;
            }
            t = t.sibling;
          }
          h.tail !== null && ke() > fc && (n.flags |= 128, f = true, ol(h, false), n.lanes = 4194304);
        }
        else {
          if (!f) if (t = tc(p), t !== null) {
            if (n.flags |= 128, f = true, t = t.updateQueue, n.updateQueue = t, sc(n, t), ol(h, true), h.tail === null && h.tailMode === "hidden" && !p.alternate && !dt) return Nt(n), null;
          } else 2 * ke() - h.renderingStartTime > fc && l !== 536870912 && (n.flags |= 128, f = true, ol(h, false), n.lanes = 4194304);
          h.isBackwards ? (p.sibling = n.child, n.child = p) : (t = h.last, t !== null ? t.sibling = p : n.child = p, h.last = p);
        }
        return h.tail !== null ? (n = h.tail, h.rendering = n, h.tail = n.sibling, h.renderingStartTime = ke(), n.sibling = null, t = Kt.current, j(Kt, f ? t & 1 | 2 : t & 1), n) : (Nt(n), null);
      case 22:
      case 23:
        return Ya(n), fu(), f = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== f && (n.flags |= 8192) : f && (n.flags |= 8192), f ? (l & 536870912) !== 0 && (n.flags & 128) === 0 && (Nt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Nt(n), l = n.updateQueue, l !== null && sc(n, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), f = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (f = n.memoizedState.cachePool.pool), f !== l && (n.flags |= 2048), t !== null && R(ii), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Va(qt), Nt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function n_(t, n) {
    switch (Kf(n), n.tag) {
      case 1:
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 3:
        return Va(qt), ye(), t = n.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Re(n), null;
      case 13:
        if (Ya(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
          if (n.alternate === null) throw Error(i(340));
          Ks();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 19:
        return R(Kt), null;
      case 4:
        return ye(), null;
      case 10:
        return Va(n.type), null;
      case 22:
      case 23:
        return Ya(n), fu(), t !== null && R(ii), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 24:
        return Va(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fx(t, n) {
    switch (Kf(n), n.tag) {
      case 3:
        Va(qt), ye();
        break;
      case 26:
      case 27:
      case 5:
        Re(n);
        break;
      case 4:
        ye();
        break;
      case 13:
        Ya(n);
        break;
      case 19:
        R(Kt);
        break;
      case 10:
        Va(n.type);
        break;
      case 22:
      case 23:
        Ya(n), fu(), t !== null && R(ii);
        break;
      case 24:
        Va(qt);
    }
  }
  function hl(t, n) {
    try {
      var l = n.updateQueue, f = l !== null ? l.lastEffect : null;
      if (f !== null) {
        var h = f.next;
        l = h;
        do {
          if ((l.tag & t) === t) {
            f = void 0;
            var p = l.create, A = l.inst;
            f = p(), A.destroy = f;
          }
          l = l.next;
        } while (l !== h);
      }
    } catch (D) {
      St(n, n.return, D);
    }
  }
  function yn(t, n, l) {
    try {
      var f = n.updateQueue, h = f !== null ? f.lastEffect : null;
      if (h !== null) {
        var p = h.next;
        f = p;
        do {
          if ((f.tag & t) === t) {
            var A = f.inst, D = A.destroy;
            if (D !== void 0) {
              A.destroy = void 0, h = n;
              var Z = l, ue = D;
              try {
                ue();
              } catch (Ee) {
                St(h, Z, Ee);
              }
            }
          }
          f = f.next;
        } while (f !== p);
      }
    } catch (Ee) {
      St(n, n.return, Ee);
    }
  }
  function Nx(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var l = t.stateNode;
      try {
        E1(n, l);
      } catch (f) {
        St(t, t.return, f);
      }
    }
  }
  function Mx(t, n, l) {
    l.props = li(t.type, t.memoizedProps), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (f) {
      St(t, n, f);
    }
  }
  function dl(t, n) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var f = t.stateNode;
            break;
          case 30:
            f = t.stateNode;
            break;
          default:
            f = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(f) : l.current = f;
      }
    } catch (h) {
      St(t, n, h);
    }
  }
  function Ca(t, n) {
    var l = t.ref, f = t.refCleanup;
    if (l !== null) if (typeof f == "function") try {
      f();
    } catch (h) {
      St(t, n, h);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof l == "function") try {
      l(null);
    } catch (h) {
      St(t, n, h);
    }
    else l.current = null;
  }
  function Lx(t) {
    var n = t.type, l = t.memoizedProps, f = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && f.focus();
          break e;
        case "img":
          l.src ? f.src = l.src : l.srcSet && (f.srcset = l.srcSet);
      }
    } catch (h) {
      St(t, t.return, h);
    }
  }
  function Uu(t, n, l) {
    try {
      var f = t.stateNode;
      A_(f, t.type, l, n), f[er] = n;
    } catch (h) {
      St(t, t.return, h);
    }
  }
  function Bx(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Cn(t.type) || t.tag === 4;
  }
  function Iu(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Bx(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Cn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Hu(t, n, l) {
    var f = t.tag;
    if (f === 5 || f === 6) t = t.stateNode, n ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, n) : (n = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, n.appendChild(t), l = l._reactRootContainer, l != null || n.onclick !== null || (n.onclick = gc));
    else if (f !== 4 && (f === 27 && Cn(t.type) && (l = t.stateNode, n = null), t = t.child, t !== null)) for (Hu(t, n, l), t = t.sibling; t !== null; ) Hu(t, n, l), t = t.sibling;
  }
  function lc(t, n, l) {
    var f = t.tag;
    if (f === 5 || f === 6) t = t.stateNode, n ? l.insertBefore(t, n) : l.appendChild(t);
    else if (f !== 4 && (f === 27 && Cn(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (lc(t, n, l), t = t.sibling; t !== null; ) lc(t, n, l), t = t.sibling;
  }
  function Ux(t) {
    var n = t.stateNode, l = t.memoizedProps;
    try {
      for (var f = t.type, h = n.attributes; h.length; ) n.removeAttributeNode(h[0]);
      cr(n, f, l), n[Jt] = t, n[er] = l;
    } catch (p) {
      St(t, t.return, p);
    }
  }
  var Ka = false, jt = false, ju = false, Ix = typeof WeakSet == "function" ? WeakSet : Set, rr = null;
  function i_(t, n) {
    if (t = t.containerInfo, uo = Ac, t = Kd(t), If(t)) {
      if ("selectionStart" in t) var l = { start: t.selectionStart, end: t.selectionEnd };
      else e: {
        l = (l = t.ownerDocument) && l.defaultView || window;
        var f = l.getSelection && l.getSelection();
        if (f && f.rangeCount !== 0) {
          l = f.anchorNode;
          var h = f.anchorOffset, p = f.focusNode;
          f = f.focusOffset;
          try {
            l.nodeType, p.nodeType;
          } catch {
            l = null;
            break e;
          }
          var A = 0, D = -1, Z = -1, ue = 0, Ee = 0, Se = t, de = null;
          t: for (; ; ) {
            for (var ve; Se !== l || h !== 0 && Se.nodeType !== 3 || (D = A + h), Se !== p || f !== 0 && Se.nodeType !== 3 || (Z = A + f), Se.nodeType === 3 && (A += Se.nodeValue.length), (ve = Se.firstChild) !== null; ) de = Se, Se = ve;
            for (; ; ) {
              if (Se === t) break t;
              if (de === l && ++ue === h && (D = A), de === p && ++Ee === f && (Z = A), (ve = Se.nextSibling) !== null) break;
              Se = de, de = Se.parentNode;
            }
            Se = ve;
          }
          l = D === -1 || Z === -1 ? null : { start: D, end: Z };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (oo = { focusedElem: t, selectionRange: l }, Ac = false, rr = n; rr !== null; ) if (n = rr, t = n.child, (n.subtreeFlags & 1024) !== 0 && t !== null) t.return = n, rr = t;
    else for (; rr !== null; ) {
      switch (n = rr, p = n.alternate, t = n.flags, n.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && p !== null) {
            t = void 0, l = n, h = p.memoizedProps, p = p.memoizedState, f = l.stateNode;
            try {
              var ze = li(l.type, h, l.elementType === l.type);
              t = f.getSnapshotBeforeUpdate(ze, p), f.__reactInternalSnapshotBeforeUpdate = t;
            } catch (He) {
              St(l, l.return, He);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = n.stateNode.containerInfo, l = t.nodeType, l === 9) vo(t);
            else if (l === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                vo(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(i(163));
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, rr = t;
        break;
      }
      rr = n.return;
    }
  }
  function Hx(t, n, l) {
    var f = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        En(t, l), f & 4 && hl(5, l);
        break;
      case 1:
        if (En(t, l), f & 4) if (t = l.stateNode, n === null) try {
          t.componentDidMount();
        } catch (A) {
          St(l, l.return, A);
        }
        else {
          var h = li(l.type, n.memoizedProps);
          n = n.memoizedState;
          try {
            t.componentDidUpdate(h, n, t.__reactInternalSnapshotBeforeUpdate);
          } catch (A) {
            St(l, l.return, A);
          }
        }
        f & 64 && Nx(l), f & 512 && dl(l, l.return);
        break;
      case 3:
        if (En(t, l), f & 64 && (t = l.updateQueue, t !== null)) {
          if (n = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              n = l.child.stateNode;
              break;
            case 1:
              n = l.child.stateNode;
          }
          try {
            E1(t, n);
          } catch (A) {
            St(l, l.return, A);
          }
        }
        break;
      case 27:
        n === null && f & 4 && Ux(l);
      case 26:
      case 5:
        En(t, l), n === null && f & 4 && Lx(l), f & 512 && dl(l, l.return);
        break;
      case 12:
        En(t, l);
        break;
      case 13:
        En(t, l), f & 4 && Px(t, l), f & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = x_.bind(null, l), F_(t, l))));
        break;
      case 22:
        if (f = l.memoizedState !== null || Ka, !f) {
          n = n !== null && n.memoizedState !== null || jt, h = Ka;
          var p = jt;
          Ka = f, (jt = n) && !p ? _n(t, l, (l.subtreeFlags & 8772) !== 0) : En(t, l), Ka = h, jt = p;
        }
        break;
      case 30:
        break;
      default:
        En(t, l);
    }
  }
  function jx(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, jx(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && I(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Dt = null, Dr = false;
  function Wa(t, n, l) {
    for (l = l.child; l !== null; ) zx(t, n, l), l = l.sibling;
  }
  function zx(t, n, l) {
    if (tt && typeof tt.onCommitFiberUnmount == "function") try {
      tt.onCommitFiberUnmount(st, l);
    } catch {
    }
    switch (l.tag) {
      case 26:
        jt || Ca(l, n), Wa(t, n, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        jt || Ca(l, n);
        var f = Dt, h = Dr;
        Cn(l.type) && (Dt = l.stateNode, Dr = false), Wa(t, n, l), Tl(l.stateNode), Dt = f, Dr = h;
        break;
      case 5:
        jt || Ca(l, n);
      case 6:
        if (f = Dt, h = Dr, Dt = null, Wa(t, n, l), Dt = f, Dr = h, Dt !== null) if (Dr) try {
          (Dt.nodeType === 9 ? Dt.body : Dt.nodeName === "HTML" ? Dt.ownerDocument.body : Dt).removeChild(l.stateNode);
        } catch (p) {
          St(l, n, p);
        }
        else try {
          Dt.removeChild(l.stateNode);
        } catch (p) {
          St(l, n, p);
        }
        break;
      case 18:
        Dt !== null && (Dr ? (t = Dt, Ov(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Rl(t)) : Ov(Dt, l.stateNode));
        break;
      case 4:
        f = Dt, h = Dr, Dt = l.stateNode.containerInfo, Dr = true, Wa(t, n, l), Dt = f, Dr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jt || yn(2, l, n), jt || yn(4, l, n), Wa(t, n, l);
        break;
      case 1:
        jt || (Ca(l, n), f = l.stateNode, typeof f.componentWillUnmount == "function" && Mx(l, n, f)), Wa(t, n, l);
        break;
      case 21:
        Wa(t, n, l);
        break;
      case 22:
        jt = (f = jt) || l.memoizedState !== null, Wa(t, n, l), jt = f;
        break;
      default:
        Wa(t, n, l);
    }
  }
  function Px(t, n) {
    if (n.memoizedState === null && (t = n.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Rl(t);
    } catch (l) {
      St(n, n.return, l);
    }
  }
  function s_(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new Ix()), n;
      case 22:
        return t = t.stateNode, n = t._retryCache, n === null && (n = t._retryCache = new Ix()), n;
      default:
        throw Error(i(435, t.tag));
    }
  }
  function zu(t, n) {
    var l = s_(t);
    n.forEach(function(f) {
      var h = v_.bind(null, t, f);
      l.has(f) || (l.add(f), f.then(h, h));
    });
  }
  function Hr(t, n) {
    var l = n.deletions;
    if (l !== null) for (var f = 0; f < l.length; f++) {
      var h = l[f], p = t, A = n, D = A;
      e: for (; D !== null; ) {
        switch (D.tag) {
          case 27:
            if (Cn(D.type)) {
              Dt = D.stateNode, Dr = false;
              break e;
            }
            break;
          case 5:
            Dt = D.stateNode, Dr = false;
            break e;
          case 3:
          case 4:
            Dt = D.stateNode.containerInfo, Dr = true;
            break e;
        }
        D = D.return;
      }
      if (Dt === null) throw Error(i(160));
      zx(p, A, h), Dt = null, Dr = false, p = h.alternate, p !== null && (p.return = null), h.return = null;
    }
    if (n.subtreeFlags & 13878) for (n = n.child; n !== null; ) Gx(n, t), n = n.sibling;
  }
  var xa = null;
  function Gx(t, n) {
    var l = t.alternate, f = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Hr(n, t), jr(t), f & 4 && (yn(3, t, t.return), hl(3, t), yn(5, t, t.return));
        break;
      case 1:
        Hr(n, t), jr(t), f & 512 && (jt || l === null || Ca(l, l.return)), f & 64 && Ka && (t = t.updateQueue, t !== null && (f = t.callbacks, f !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? f : l.concat(f))));
        break;
      case 26:
        var h = xa;
        if (Hr(n, t), jr(t), f & 512 && (jt || l === null || Ca(l, l.return)), f & 4) {
          var p = l !== null ? l.memoizedState : null;
          if (f = t.memoizedState, l === null) if (f === null) if (t.stateNode === null) {
            e: {
              f = t.type, l = t.memoizedProps, h = h.ownerDocument || h;
              t: switch (f) {
                case "title":
                  p = h.getElementsByTagName("title")[0], (!p || p[L] || p[Jt] || p.namespaceURI === "http://www.w3.org/2000/svg" || p.hasAttribute("itemprop")) && (p = h.createElement(f), h.head.insertBefore(p, h.querySelector("head > title"))), cr(p, f, l), p[Jt] = t, le(p), f = p;
                  break e;
                case "link":
                  var A = Uv("link", "href", h).get(f + (l.href || ""));
                  if (A) {
                    for (var D = 0; D < A.length; D++) if (p = A[D], p.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && p.getAttribute("rel") === (l.rel == null ? null : l.rel) && p.getAttribute("title") === (l.title == null ? null : l.title) && p.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      A.splice(D, 1);
                      break t;
                    }
                  }
                  p = h.createElement(f), cr(p, f, l), h.head.appendChild(p);
                  break;
                case "meta":
                  if (A = Uv("meta", "content", h).get(f + (l.content || ""))) {
                    for (D = 0; D < A.length; D++) if (p = A[D], p.getAttribute("content") === (l.content == null ? null : "" + l.content) && p.getAttribute("name") === (l.name == null ? null : l.name) && p.getAttribute("property") === (l.property == null ? null : l.property) && p.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && p.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      A.splice(D, 1);
                      break t;
                    }
                  }
                  p = h.createElement(f), cr(p, f, l), h.head.appendChild(p);
                  break;
                default:
                  throw Error(i(468, f));
              }
              p[Jt] = t, le(p), f = p;
            }
            t.stateNode = f;
          } else Iv(h, t.type, t.stateNode);
          else t.stateNode = Bv(h, f, t.memoizedProps);
          else p !== f ? (p === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : p.count--, f === null ? Iv(h, t.type, t.stateNode) : Bv(h, f, t.memoizedProps)) : f === null && t.stateNode !== null && Uu(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Hr(n, t), jr(t), f & 512 && (jt || l === null || Ca(l, l.return)), l !== null && f & 4 && Uu(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (Hr(n, t), jr(t), f & 512 && (jt || l === null || Ca(l, l.return)), t.flags & 32) {
          h = t.stateNode;
          try {
            Mi(h, "");
          } catch (ve) {
            St(t, t.return, ve);
          }
        }
        f & 4 && t.stateNode != null && (h = t.memoizedProps, Uu(t, h, l !== null ? l.memoizedProps : h)), f & 1024 && (ju = true);
        break;
      case 6:
        if (Hr(n, t), jr(t), f & 4) {
          if (t.stateNode === null) throw Error(i(162));
          f = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = f;
          } catch (ve) {
            St(t, t.return, ve);
          }
        }
        break;
      case 3:
        if (Tc = null, h = xa, xa = Ec(n.containerInfo), Hr(n, t), xa = h, jr(t), f & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Rl(n.containerInfo);
        } catch (ve) {
          St(t, t.return, ve);
        }
        ju && (ju = false, Vx(t));
        break;
      case 4:
        f = xa, xa = Ec(t.stateNode.containerInfo), Hr(n, t), jr(t), xa = f;
        break;
      case 12:
        Hr(n, t), jr(t);
        break;
      case 13:
        Hr(n, t), jr(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && ($u = ke()), f & 4 && (f = t.updateQueue, f !== null && (t.updateQueue = null, zu(t, f)));
        break;
      case 22:
        h = t.memoizedState !== null;
        var Z = l !== null && l.memoizedState !== null, ue = Ka, Ee = jt;
        if (Ka = ue || h, jt = Ee || Z, Hr(n, t), jt = Ee, Ka = ue, jr(t), f & 8192) e: for (n = t.stateNode, n._visibility = h ? n._visibility & -2 : n._visibility | 1, h && (l === null || Z || Ka || jt || ci(t)), l = null, n = t; ; ) {
          if (n.tag === 5 || n.tag === 26) {
            if (l === null) {
              Z = l = n;
              try {
                if (p = Z.stateNode, h) A = p.style, typeof A.setProperty == "function" ? A.setProperty("display", "none", "important") : A.display = "none";
                else {
                  D = Z.stateNode;
                  var Se = Z.memoizedProps.style, de = Se != null && Se.hasOwnProperty("display") ? Se.display : null;
                  D.style.display = de == null || typeof de == "boolean" ? "" : ("" + de).trim();
                }
              } catch (ve) {
                St(Z, Z.return, ve);
              }
            }
          } else if (n.tag === 6) {
            if (l === null) {
              Z = n;
              try {
                Z.stateNode.nodeValue = h ? "" : Z.memoizedProps;
              } catch (ve) {
                St(Z, Z.return, ve);
              }
            }
          } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === t) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) break e;
            l === n && (l = null), n = n.return;
          }
          l === n && (l = null), n.sibling.return = n.return, n = n.sibling;
        }
        f & 4 && (f = t.updateQueue, f !== null && (l = f.retryQueue, l !== null && (f.retryQueue = null, zu(t, l))));
        break;
      case 19:
        Hr(n, t), jr(t), f & 4 && (f = t.updateQueue, f !== null && (t.updateQueue = null, zu(t, f)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Hr(n, t), jr(t);
    }
  }
  function jr(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var l, f = t.return; f !== null; ) {
          if (Bx(f)) {
            l = f;
            break;
          }
          f = f.return;
        }
        if (l == null) throw Error(i(160));
        switch (l.tag) {
          case 27:
            var h = l.stateNode, p = Iu(t);
            lc(t, p, h);
            break;
          case 5:
            var A = l.stateNode;
            l.flags & 32 && (Mi(A, ""), l.flags &= -33);
            var D = Iu(t);
            lc(t, D, A);
            break;
          case 3:
          case 4:
            var Z = l.stateNode.containerInfo, ue = Iu(t);
            Hu(t, ue, Z);
            break;
          default:
            throw Error(i(161));
        }
      } catch (Ee) {
        St(t, t.return, Ee);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function Vx(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var n = t;
      Vx(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), t = t.sibling;
    }
  }
  function En(t, n) {
    if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) Hx(t, n.alternate, n), n = n.sibling;
  }
  function ci(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yn(4, n, n.return), ci(n);
          break;
        case 1:
          Ca(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && Mx(n, n.return, l), ci(n);
          break;
        case 27:
          Tl(n.stateNode);
        case 26:
        case 5:
          Ca(n, n.return), ci(n);
          break;
        case 22:
          n.memoizedState === null && ci(n);
          break;
        case 30:
          ci(n);
          break;
        default:
          ci(n);
      }
      t = t.sibling;
    }
  }
  function _n(t, n, l) {
    for (l = l && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var f = n.alternate, h = t, p = n, A = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          _n(h, p, l), hl(4, p);
          break;
        case 1:
          if (_n(h, p, l), f = p, h = f.stateNode, typeof h.componentDidMount == "function") try {
            h.componentDidMount();
          } catch (ue) {
            St(f, f.return, ue);
          }
          if (f = p, h = f.updateQueue, h !== null) {
            var D = f.stateNode;
            try {
              var Z = h.shared.hiddenCallbacks;
              if (Z !== null) for (h.shared.hiddenCallbacks = null, h = 0; h < Z.length; h++) y1(Z[h], D);
            } catch (ue) {
              St(f, f.return, ue);
            }
          }
          l && A & 64 && Nx(p), dl(p, p.return);
          break;
        case 27:
          Ux(p);
        case 26:
        case 5:
          _n(h, p, l), l && f === null && A & 4 && Lx(p), dl(p, p.return);
          break;
        case 12:
          _n(h, p, l);
          break;
        case 13:
          _n(h, p, l), l && A & 4 && Px(h, p);
          break;
        case 22:
          p.memoizedState === null && _n(h, p, l), dl(p, p.return);
          break;
        case 30:
          break;
        default:
          _n(h, p, l);
      }
      n = n.sibling;
    }
  }
  function Pu(t, n) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Qs(l));
  }
  function Gu(t, n) {
    t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && Qs(t));
  }
  function ba(t, n, l, f) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) Xx(t, n, l, f), n = n.sibling;
  }
  function Xx(t, n, l, f) {
    var h = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ba(t, n, l, f), h & 2048 && hl(9, n);
        break;
      case 1:
        ba(t, n, l, f);
        break;
      case 3:
        ba(t, n, l, f), h & 2048 && (t = null, n.alternate !== null && (t = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== t && (n.refCount++, t != null && Qs(t)));
        break;
      case 12:
        if (h & 2048) {
          ba(t, n, l, f), t = n.stateNode;
          try {
            var p = n.memoizedProps, A = p.id, D = p.onPostCommit;
            typeof D == "function" && D(A, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (Z) {
            St(n, n.return, Z);
          }
        } else ba(t, n, l, f);
        break;
      case 13:
        ba(t, n, l, f);
        break;
      case 23:
        break;
      case 22:
        p = n.stateNode, A = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? ba(t, n, l, f) : xl(t, n) : p._visibility & 2 ? ba(t, n, l, f) : (p._visibility |= 2, Ji(t, n, l, f, (n.subtreeFlags & 10256) !== 0)), h & 2048 && Pu(A, n);
        break;
      case 24:
        ba(t, n, l, f), h & 2048 && Gu(n.alternate, n);
        break;
      default:
        ba(t, n, l, f);
    }
  }
  function Ji(t, n, l, f, h) {
    for (h = h && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var p = t, A = n, D = l, Z = f, ue = A.flags;
      switch (A.tag) {
        case 0:
        case 11:
        case 15:
          Ji(p, A, D, Z, h), hl(8, A);
          break;
        case 23:
          break;
        case 22:
          var Ee = A.stateNode;
          A.memoizedState !== null ? Ee._visibility & 2 ? Ji(p, A, D, Z, h) : xl(p, A) : (Ee._visibility |= 2, Ji(p, A, D, Z, h)), h && ue & 2048 && Pu(A.alternate, A);
          break;
        case 24:
          Ji(p, A, D, Z, h), h && ue & 2048 && Gu(A.alternate, A);
          break;
        default:
          Ji(p, A, D, Z, h);
      }
      n = n.sibling;
    }
  }
  function xl(t, n) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
      var l = t, f = n, h = f.flags;
      switch (f.tag) {
        case 22:
          xl(l, f), h & 2048 && Pu(f.alternate, f);
          break;
        case 24:
          xl(l, f), h & 2048 && Gu(f.alternate, f);
          break;
        default:
          xl(l, f);
      }
      n = n.sibling;
    }
  }
  var vl = 8192;
  function es(t) {
    if (t.subtreeFlags & vl) for (t = t.child; t !== null; ) Yx(t), t = t.sibling;
  }
  function Yx(t) {
    switch (t.tag) {
      case 26:
        es(t), t.flags & vl && t.memoizedState !== null && X_(xa, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        es(t);
        break;
      case 3:
      case 4:
        var n = xa;
        xa = Ec(t.stateNode.containerInfo), es(t), xa = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = vl, vl = 16777216, es(t), vl = n) : es(t));
        break;
      default:
        es(t);
    }
  }
  function $x(t) {
    var n = t.alternate;
    if (n !== null && (t = n.child, t !== null)) {
      n.child = null;
      do
        n = t.sibling, t.sibling = null, t = n;
      while (t !== null);
    }
  }
  function pl(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null) for (var l = 0; l < n.length; l++) {
        var f = n[l];
        rr = f, Kx(f, t);
      }
      $x(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) qx(t), t = t.sibling;
  }
  function qx(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pl(t), t.flags & 2048 && yn(9, t, t.return);
        break;
      case 3:
        pl(t);
        break;
      case 12:
        pl(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, cc(t)) : pl(t);
        break;
      default:
        pl(t);
    }
  }
  function cc(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null) for (var l = 0; l < n.length; l++) {
        var f = n[l];
        rr = f, Kx(f, t);
      }
      $x(t);
    }
    for (t = t.child; t !== null; ) {
      switch (n = t, n.tag) {
        case 0:
        case 11:
        case 15:
          yn(8, n, n.return), cc(n);
          break;
        case 22:
          l = n.stateNode, l._visibility & 2 && (l._visibility &= -3, cc(n));
          break;
        default:
          cc(n);
      }
      t = t.sibling;
    }
  }
  function Kx(t, n) {
    for (; rr !== null; ) {
      var l = rr;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          yn(8, l, n);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var f = l.memoizedState.cachePool.pool;
            f != null && f.refCount++;
          }
          break;
        case 24:
          Qs(l.memoizedState.cache);
      }
      if (f = l.child, f !== null) f.return = l, rr = f;
      else e: for (l = t; rr !== null; ) {
        f = rr;
        var h = f.sibling, p = f.return;
        if (jx(f), f === l) {
          rr = null;
          break e;
        }
        if (h !== null) {
          h.return = p, rr = h;
          break e;
        }
        rr = p;
      }
    }
  }
  var l_ = { getCacheForType: function(t) {
    var n = dr(qt), l = n.data.get(t);
    return l === void 0 && (l = t(), n.data.set(t, l)), l;
  } }, c_ = typeof WeakMap == "function" ? WeakMap : Map, pt = 0, Ct = null, at = null, ct = 0, mt = 0, zr = null, Tn = false, ts = false, Vu = false, Za = 0, Lt = 0, wn = 0, fi = 0, Xu = 0, ra = 0, rs = 0, ml = null, Fr = null, Yu = false, $u = 0, fc = 1 / 0, uc = null, Sn = null, lr = 0, An = null, as = null, ns = 0, qu = 0, Ku = null, Wx = null, gl = 0, Wu = null;
  function Pr() {
    if ((pt & 2) !== 0 && ct !== 0) return ct & -ct;
    if (J.T !== null) {
      var t = Xi;
      return t !== 0 ? t : ao();
    }
    return w0();
  }
  function Zx() {
    ra === 0 && (ra = (ct & 536870912) === 0 || dt ? Ns() : 536870912);
    var t = ta.current;
    return t !== null && (t.flags |= 32), ra;
  }
  function Gr(t, n, l) {
    (t === Ct && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (is(t, 0), kn(t, ct, ra, false)), $n(t, l), ((pt & 2) === 0 || t !== Ct) && (t === Ct && ((pt & 2) === 0 && (fi |= l), Lt === 4 && kn(t, ct, ra, false)), Oa(t));
  }
  function Qx(t, n, l) {
    if ((pt & 6) !== 0) throw Error(i(327));
    var f = !l && (n & 124) === 0 && (n & t.expiredLanes) === 0 || Yn(t, n), h = f ? o_(t, n) : Ju(t, n, true), p = f;
    do {
      if (h === 0) {
        ts && !f && kn(t, n, 0, false);
        break;
      } else {
        if (l = t.current.alternate, p && !f_(l)) {
          h = Ju(t, n, false), p = false;
          continue;
        }
        if (h === 2) {
          if (p = n, t.errorRecoveryDisabledLanes & p) var A = 0;
          else A = t.pendingLanes & -536870913, A = A !== 0 ? A : A & 536870912 ? 536870912 : 0;
          if (A !== 0) {
            n = A;
            e: {
              var D = t;
              h = ml;
              var Z = D.current.memoizedState.isDehydrated;
              if (Z && (is(D, A).flags |= 256), A = Ju(D, A, false), A !== 2) {
                if (Vu && !Z) {
                  D.errorRecoveryDisabledLanes |= p, fi |= p, h = 4;
                  break e;
                }
                p = Fr, Fr = h, p !== null && (Fr === null ? Fr = p : Fr.push.apply(Fr, p));
              }
              h = A;
            }
            if (p = false, h !== 2) continue;
          }
        }
        if (h === 1) {
          is(t, 0), kn(t, n, 0, true);
          break;
        }
        e: {
          switch (f = t, p = h, p) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              kn(f, n, ra, !Tn);
              break e;
            case 2:
              Fr = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((n & 62914560) === n && (h = $u + 300 - ke(), 10 < h)) {
            if (kn(f, n, ra, !Tn), Di(f, 0, true) !== 0) break e;
            f.timeoutHandle = Cv(Jx.bind(null, f, l, Fr, uc, Yu, n, ra, fi, rs, Tn, p, 2, -0, 0), h);
            break e;
          }
          Jx(f, l, Fr, uc, Yu, n, ra, fi, rs, Tn, p, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Oa(t);
  }
  function Jx(t, n, l, f, h, p, A, D, Z, ue, Ee, Se, de, ve) {
    if (t.timeoutHandle = -1, Se = n.subtreeFlags, (Se & 8192 || (Se & 16785408) === 16785408) && (Al = { stylesheets: null, count: 0, unsuspend: V_ }, Yx(n), Se = Y_(), Se !== null)) {
      t.cancelPendingCommit = Se(sv.bind(null, t, n, p, l, f, h, A, D, Z, Ee, 1, de, ve)), kn(t, p, A, !ue);
      return;
    }
    sv(t, n, p, l, f, h, A, D, Z);
  }
  function f_(t) {
    for (var n = t; ; ) {
      var l = n.tag;
      if ((l === 0 || l === 11 || l === 15) && n.flags & 16384 && (l = n.updateQueue, l !== null && (l = l.stores, l !== null))) for (var f = 0; f < l.length; f++) {
        var h = l[f], p = h.getSnapshot;
        h = h.value;
        try {
          if (!Ur(p(), h)) return false;
        } catch {
          return false;
        }
      }
      if (l = n.child, n.subtreeFlags & 16384 && l !== null) l.return = n, n = l;
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return true;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return true;
  }
  function kn(t, n, l, f) {
    n &= ~Xu, n &= ~fi, t.suspendedLanes |= n, t.pingedLanes &= ~n, f && (t.warmLanes |= n), f = t.expirationTimes;
    for (var h = n; 0 < h; ) {
      var p = 31 - gt(h), A = 1 << p;
      f[p] = -1, h &= ~A;
    }
    l !== 0 && _0(t, l, n);
  }
  function oc() {
    return (pt & 6) === 0 ? (yl(0), false) : true;
  }
  function Zu() {
    if (at !== null) {
      if (mt === 0) var t = at.return;
      else t = at, Ga = ai = null, xu(t), Zi = null, fl = 0, t = at;
      for (; t !== null; ) Fx(t.alternate, t), t = t.return;
      at = null;
    }
  }
  function is(t, n) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, C_(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Zu(), Ct = t, at = l = ja(t.current, null), ct = n, mt = 0, zr = null, Tn = false, ts = Yn(t, n), Vu = false, rs = ra = Xu = fi = wn = Lt = 0, Fr = ml = null, Yu = false, (n & 8) !== 0 && (n |= n & 32);
    var f = t.entangledLanes;
    if (f !== 0) for (t = t.entanglements, f &= n; 0 < f; ) {
      var h = 31 - gt(f), p = 1 << h;
      n |= t[h], f &= ~p;
    }
    return Za = n, N0(), l;
  }
  function ev(t, n) {
    Je = null, J.H = Q0, n === el || n === P0 ? (n = m1(), mt = 3) : n === x1 ? (n = m1(), mt = 4) : mt = n === gx ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, zr = n, at === null && (Lt = 1, ac(t, Zr(n, t.current)));
  }
  function tv() {
    var t = J.H;
    return J.H = Q0, t === null ? Q0 : t;
  }
  function rv() {
    var t = J.A;
    return J.A = l_, t;
  }
  function Qu() {
    Lt = 4, Tn || (ct & 4194048) !== ct && ta.current !== null || (ts = true), (wn & 134217727) === 0 && (fi & 134217727) === 0 || Ct === null || kn(Ct, ct, ra, false);
  }
  function Ju(t, n, l) {
    var f = pt;
    pt |= 2;
    var h = tv(), p = rv();
    (Ct !== t || ct !== n) && (uc = null, is(t, n)), n = false;
    var A = Lt;
    e: do
      try {
        if (mt !== 0 && at !== null) {
          var D = at, Z = zr;
          switch (mt) {
            case 8:
              Zu(), A = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ta.current === null && (n = true);
              var ue = mt;
              if (mt = 0, zr = null, ss(t, D, Z, ue), l && ts) {
                A = 0;
                break e;
              }
              break;
            default:
              ue = mt, mt = 0, zr = null, ss(t, D, Z, ue);
          }
        }
        u_(), A = Lt;
        break;
      } catch (Ee) {
        ev(t, Ee);
      }
    while (true);
    return n && t.shellSuspendCounter++, Ga = ai = null, pt = f, J.H = h, J.A = p, at === null && (Ct = null, ct = 0, N0()), A;
  }
  function u_() {
    for (; at !== null; ) av(at);
  }
  function o_(t, n) {
    var l = pt;
    pt |= 2;
    var f = tv(), h = rv();
    Ct !== t || ct !== n ? (uc = null, fc = ke() + 500, is(t, n)) : ts = Yn(t, n);
    e: do
      try {
        if (mt !== 0 && at !== null) {
          n = at;
          var p = zr;
          t: switch (mt) {
            case 1:
              mt = 0, zr = null, ss(t, n, p, 1);
              break;
            case 2:
            case 9:
              if (v1(p)) {
                mt = 0, zr = null, nv(n);
                break;
              }
              n = function() {
                mt !== 2 && mt !== 9 || Ct !== t || (mt = 7), Oa(t);
              }, p.then(n, n);
              break e;
            case 3:
              mt = 7;
              break e;
            case 4:
              mt = 5;
              break e;
            case 7:
              v1(p) ? (mt = 0, zr = null, nv(n)) : (mt = 0, zr = null, ss(t, n, p, 7));
              break;
            case 5:
              var A = null;
              switch (at.tag) {
                case 26:
                  A = at.memoizedState;
                case 5:
                case 27:
                  var D = at;
                  if (!A || Hv(A)) {
                    mt = 0, zr = null;
                    var Z = D.sibling;
                    if (Z !== null) at = Z;
                    else {
                      var ue = D.return;
                      ue !== null ? (at = ue, hc(ue)) : at = null;
                    }
                    break t;
                  }
              }
              mt = 0, zr = null, ss(t, n, p, 5);
              break;
            case 6:
              mt = 0, zr = null, ss(t, n, p, 6);
              break;
            case 8:
              Zu(), Lt = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        h_();
        break;
      } catch (Ee) {
        ev(t, Ee);
      }
    while (true);
    return Ga = ai = null, J.H = f, J.A = h, pt = l, at !== null ? 0 : (Ct = null, ct = 0, N0(), Lt);
  }
  function h_() {
    for (; at !== null && !Be(); ) av(at);
  }
  function av(t) {
    var n = Rx(t.alternate, t, Za);
    t.memoizedProps = t.pendingProps, n === null ? hc(t) : at = n;
  }
  function nv(t) {
    var n = t, l = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Sx(l, n, n.pendingProps, n.type, void 0, ct);
        break;
      case 11:
        n = Sx(l, n, n.pendingProps, n.type.render, n.ref, ct);
        break;
      case 5:
        xu(n);
      default:
        Fx(l, n), n = at = i1(n, Za), n = Rx(l, n, Za);
    }
    t.memoizedProps = t.pendingProps, n === null ? hc(t) : at = n;
  }
  function ss(t, n, l, f) {
    Ga = ai = null, xu(n), Zi = null, fl = 0;
    var h = n.return;
    try {
      if (t_(t, h, n, l, ct)) {
        Lt = 1, ac(t, Zr(l, t.current)), at = null;
        return;
      }
    } catch (p) {
      if (h !== null) throw at = h, p;
      Lt = 1, ac(t, Zr(l, t.current)), at = null;
      return;
    }
    n.flags & 32768 ? (dt || f === 1 ? t = true : ts || (ct & 536870912) !== 0 ? t = false : (Tn = t = true, (f === 2 || f === 9 || f === 3 || f === 6) && (f = ta.current, f !== null && f.tag === 13 && (f.flags |= 16384))), iv(n, t)) : hc(n);
  }
  function hc(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        iv(n, Tn);
        return;
      }
      t = n.return;
      var l = a_(n.alternate, n, Za);
      if (l !== null) {
        at = l;
        return;
      }
      if (n = n.sibling, n !== null) {
        at = n;
        return;
      }
      at = n = t;
    } while (n !== null);
    Lt === 0 && (Lt = 5);
  }
  function iv(t, n) {
    do {
      var l = n_(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, at = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !n && (t = t.sibling, t !== null)) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    Lt = 6, at = null;
  }
  function sv(t, n, l, f, h, p, A, D, Z) {
    t.cancelPendingCommit = null;
    do
      dc();
    while (lr !== 0);
    if ((pt & 6) !== 0) throw Error(i(327));
    if (n !== null) {
      if (n === t.current) throw Error(i(177));
      if (p = n.lanes | n.childLanes, p |= Gf, Fi(t, l, p, A, D, Z), t === Ct && (at = Ct = null, ct = 0), as = n, An = t, ns = l, qu = p, Ku = h, Wx = f, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, p_(At, function() {
        return ov(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), f = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || f) {
        f = J.T, J.T = null, h = ae.p, ae.p = 2, A = pt, pt |= 4;
        try {
          i_(t, n, l);
        } finally {
          pt = A, ae.p = h, J.T = f;
        }
      }
      lr = 1, lv(), cv(), fv();
    }
  }
  function lv() {
    if (lr === 1) {
      lr = 0;
      var t = An, n = as, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = J.T, J.T = null;
        var f = ae.p;
        ae.p = 2;
        var h = pt;
        pt |= 4;
        try {
          Gx(n, t);
          var p = oo, A = Kd(t.containerInfo), D = p.focusedElem, Z = p.selectionRange;
          if (A !== D && D && D.ownerDocument && qd(D.ownerDocument.documentElement, D)) {
            if (Z !== null && If(D)) {
              var ue = Z.start, Ee = Z.end;
              if (Ee === void 0 && (Ee = ue), "selectionStart" in D) D.selectionStart = ue, D.selectionEnd = Math.min(Ee, D.value.length);
              else {
                var Se = D.ownerDocument || document, de = Se && Se.defaultView || window;
                if (de.getSelection) {
                  var ve = de.getSelection(), ze = D.textContent.length, He = Math.min(Z.start, ze), wt = Z.end === void 0 ? He : Math.min(Z.end, ze);
                  !ve.extend && He > wt && (A = wt, wt = He, He = A);
                  var se = $d(D, He), te = $d(D, wt);
                  if (se && te && (ve.rangeCount !== 1 || ve.anchorNode !== se.node || ve.anchorOffset !== se.offset || ve.focusNode !== te.node || ve.focusOffset !== te.offset)) {
                    var ce = Se.createRange();
                    ce.setStart(se.node, se.offset), ve.removeAllRanges(), He > wt ? (ve.addRange(ce), ve.extend(te.node, te.offset)) : (ce.setEnd(te.node, te.offset), ve.addRange(ce));
                  }
                }
              }
            }
            for (Se = [], ve = D; ve = ve.parentNode; ) ve.nodeType === 1 && Se.push({ element: ve, left: ve.scrollLeft, top: ve.scrollTop });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < Se.length; D++) {
              var Te = Se[D];
              Te.element.scrollLeft = Te.left, Te.element.scrollTop = Te.top;
            }
          }
          Ac = !!uo, oo = uo = null;
        } finally {
          pt = h, ae.p = f, J.T = l;
        }
      }
      t.current = n, lr = 2;
    }
  }
  function cv() {
    if (lr === 2) {
      lr = 0;
      var t = An, n = as, l = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || l) {
        l = J.T, J.T = null;
        var f = ae.p;
        ae.p = 2;
        var h = pt;
        pt |= 4;
        try {
          Hx(t, n.alternate, n);
        } finally {
          pt = h, ae.p = f, J.T = l;
        }
      }
      lr = 3;
    }
  }
  function fv() {
    if (lr === 4 || lr === 3) {
      lr = 0, De();
      var t = An, n = as, l = ns, f = Wx;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? lr = 5 : (lr = 0, as = An = null, uv(t, t.pendingLanes));
      var h = t.pendingLanes;
      if (h === 0 && (Sn = null), Us(l), n = n.stateNode, tt && typeof tt.onCommitFiberRoot == "function") try {
        tt.onCommitFiberRoot(st, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
      if (f !== null) {
        n = J.T, h = ae.p, ae.p = 2, J.T = null;
        try {
          for (var p = t.onRecoverableError, A = 0; A < f.length; A++) {
            var D = f[A];
            p(D.value, { componentStack: D.stack });
          }
        } finally {
          J.T = n, ae.p = h;
        }
      }
      (ns & 3) !== 0 && dc(), Oa(t), h = t.pendingLanes, (l & 4194090) !== 0 && (h & 42) !== 0 ? t === Wu ? gl++ : (gl = 0, Wu = t) : gl = 0, yl(0);
    }
  }
  function uv(t, n) {
    (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, Qs(n)));
  }
  function dc(t) {
    return lv(), cv(), fv(), ov();
  }
  function ov() {
    if (lr !== 5) return false;
    var t = An, n = qu;
    qu = 0;
    var l = Us(ns), f = J.T, h = ae.p;
    try {
      ae.p = 32 > l ? 32 : l, J.T = null, l = Ku, Ku = null;
      var p = An, A = ns;
      if (lr = 0, as = An = null, ns = 0, (pt & 6) !== 0) throw Error(i(331));
      var D = pt;
      if (pt |= 4, qx(p.current), Xx(p, p.current, A, l), pt = D, yl(0, false), tt && typeof tt.onPostCommitFiberRoot == "function") try {
        tt.onPostCommitFiberRoot(st, p);
      } catch {
      }
      return true;
    } finally {
      ae.p = h, J.T = f, uv(t, n);
    }
  }
  function hv(t, n, l) {
    n = Zr(l, n), n = bu(t.stateNode, n, 2), t = vn(t, n, 2), t !== null && ($n(t, 2), Oa(t));
  }
  function St(t, n, l) {
    if (t.tag === 3) hv(t, t, l);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        hv(n, t, l);
        break;
      } else if (n.tag === 1) {
        var f = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (Sn === null || !Sn.has(f))) {
          t = Zr(l, t), l = px(2), f = vn(n, l, 2), f !== null && (mx(l, f, n, t), $n(f, 2), Oa(f));
          break;
        }
      }
      n = n.return;
    }
  }
  function eo(t, n, l) {
    var f = t.pingCache;
    if (f === null) {
      f = t.pingCache = new c_();
      var h = /* @__PURE__ */ new Set();
      f.set(n, h);
    } else h = f.get(n), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(n, h));
    h.has(l) || (Vu = true, h.add(l), t = d_.bind(null, t, n, l), n.then(t, t));
  }
  function d_(t, n, l) {
    var f = t.pingCache;
    f !== null && f.delete(n), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Ct === t && (ct & l) === l && (Lt === 4 || Lt === 3 && (ct & 62914560) === ct && 300 > ke() - $u ? (pt & 2) === 0 && is(t, 0) : Xu |= l, rs === ct && (rs = 0)), Oa(t);
  }
  function dv(t, n) {
    n === 0 && (n = Ms()), t = zi(t, n), t !== null && ($n(t, n), Oa(t));
  }
  function x_(t) {
    var n = t.memoizedState, l = 0;
    n !== null && (l = n.retryLane), dv(t, l);
  }
  function v_(t, n) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var f = t.stateNode, h = t.memoizedState;
        h !== null && (l = h.retryLane);
        break;
      case 19:
        f = t.stateNode;
        break;
      case 22:
        f = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    f !== null && f.delete(n), dv(t, l);
  }
  function p_(t, n) {
    return Ge(t, n);
  }
  var xc = null, ls = null, to = false, vc = false, ro = false, ui = 0;
  function Oa(t) {
    t !== ls && t.next === null && (ls === null ? xc = ls = t : ls = ls.next = t), vc = true, to || (to = true, g_());
  }
  function yl(t, n) {
    if (!ro && vc) {
      ro = true;
      do
        for (var l = false, f = xc; f !== null; ) {
          if (t !== 0) {
            var h = f.pendingLanes;
            if (h === 0) var p = 0;
            else {
              var A = f.suspendedLanes, D = f.pingedLanes;
              p = (1 << 31 - gt(42 | t) + 1) - 1, p &= h & ~(A & ~D), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (l = true, mv(f, p));
          } else p = ct, p = Di(f, f === Ct ? p : 0, f.cancelPendingCommit !== null || f.timeoutHandle !== -1), (p & 3) === 0 || Yn(f, p) || (l = true, mv(f, p));
          f = f.next;
        }
      while (l);
      ro = false;
    }
  }
  function m_() {
    xv();
  }
  function xv() {
    vc = to = false;
    var t = 0;
    ui !== 0 && (k_() && (t = ui), ui = 0);
    for (var n = ke(), l = null, f = xc; f !== null; ) {
      var h = f.next, p = vv(f, n);
      p === 0 ? (f.next = null, l === null ? xc = h : l.next = h, h === null && (ls = l)) : (l = f, (t !== 0 || (p & 3) !== 0) && (vc = true)), f = h;
    }
    yl(t);
  }
  function vv(t, n) {
    for (var l = t.suspendedLanes, f = t.pingedLanes, h = t.expirationTimes, p = t.pendingLanes & -62914561; 0 < p; ) {
      var A = 31 - gt(p), D = 1 << A, Z = h[A];
      Z === -1 ? ((D & l) === 0 || (D & f) !== 0) && (h[A] = E0(D, n)) : Z <= n && (t.expiredLanes |= D), p &= ~D;
    }
    if (n = Ct, l = ct, l = Di(t, t === n ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), f = t.callbackNode, l === 0 || t === n && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) return f !== null && f !== null && Le(f), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Yn(t, l)) {
      if (n = l & -l, n === t.callbackPriority) return n;
      switch (f !== null && Le(f), Us(l)) {
        case 2:
        case 8:
          l = Ze;
          break;
        case 32:
          l = At;
          break;
        case 268435456:
          l = Pt;
          break;
        default:
          l = At;
      }
      return f = pv.bind(null, t), l = Ge(l, f), t.callbackPriority = n, t.callbackNode = l, n;
    }
    return f !== null && f !== null && Le(f), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function pv(t, n) {
    if (lr !== 0 && lr !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (dc() && t.callbackNode !== l) return null;
    var f = ct;
    return f = Di(t, t === Ct ? f : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), f === 0 ? null : (Qx(t, f, n), vv(t, ke()), t.callbackNode != null && t.callbackNode === l ? pv.bind(null, t) : null);
  }
  function mv(t, n) {
    if (dc()) return null;
    Qx(t, n, true);
  }
  function g_() {
    b_(function() {
      (pt & 6) !== 0 ? Ge(Ke, m_) : xv();
    });
  }
  function ao() {
    return ui === 0 && (ui = Ns()), ui;
  }
  function gv(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : k0("" + t);
  }
  function yv(t, n) {
    var l = n.ownerDocument.createElement("input");
    return l.name = n.name, l.value = n.value, t.id && l.setAttribute("form", t.id), n.parentNode.insertBefore(l, n), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function y_(t, n, l, f, h) {
    if (n === "submit" && l && l.stateNode === h) {
      var p = gv((h[er] || null).action), A = f.submitter;
      A && (n = (n = A[er] || null) ? gv(n.formAction) : A.getAttribute("formAction"), n !== null && (p = n, A = null));
      var D = new R0("action", "action", null, f, h);
      t.push({ event: D, listeners: [{ instance: null, listener: function() {
        if (f.defaultPrevented) {
          if (ui !== 0) {
            var Z = A ? yv(h, A) : new FormData(h);
            wu(l, { pending: true, data: Z, method: h.method, action: p }, null, Z);
          }
        } else typeof p == "function" && (D.preventDefault(), Z = A ? yv(h, A) : new FormData(h), wu(l, { pending: true, data: Z, method: h.method, action: p }, p, Z));
      }, currentTarget: h }] });
    }
  }
  for (var no = 0; no < Pf.length; no++) {
    var io = Pf[no], E_ = io.toLowerCase(), __ = io[0].toUpperCase() + io.slice(1);
    da(E_, "on" + __);
  }
  da(Qd, "onAnimationEnd"), da(Jd, "onAnimationIteration"), da(e1, "onAnimationStart"), da("dblclick", "onDoubleClick"), da("focusin", "onFocus"), da("focusout", "onBlur"), da(IE, "onTransitionRun"), da(HE, "onTransitionStart"), da(jE, "onTransitionCancel"), da(t1, "onTransitionEnd"), Oe("onMouseEnter", ["mouseout", "mouseover"]), Oe("onMouseLeave", ["mouseout", "mouseover"]), Oe("onPointerEnter", ["pointerout", "pointerover"]), Oe("onPointerLeave", ["pointerout", "pointerover"]), Ce("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ce("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ce("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ce("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var El = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), T_ = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(El));
  function Ev(t, n) {
    n = (n & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var f = t[l], h = f.event;
      f = f.listeners;
      e: {
        var p = void 0;
        if (n) for (var A = f.length - 1; 0 <= A; A--) {
          var D = f[A], Z = D.instance, ue = D.currentTarget;
          if (D = D.listener, Z !== p && h.isPropagationStopped()) break e;
          p = D, h.currentTarget = ue;
          try {
            p(h);
          } catch (Ee) {
            rc(Ee);
          }
          h.currentTarget = null, p = Z;
        }
        else for (A = 0; A < f.length; A++) {
          if (D = f[A], Z = D.instance, ue = D.currentTarget, D = D.listener, Z !== p && h.isPropagationStopped()) break e;
          p = D, h.currentTarget = ue;
          try {
            p(h);
          } catch (Ee) {
            rc(Ee);
          }
          h.currentTarget = null, p = Z;
        }
      }
    }
  }
  function nt(t, n) {
    var l = n[Is];
    l === void 0 && (l = n[Is] = /* @__PURE__ */ new Set());
    var f = t + "__bubble";
    l.has(f) || (_v(n, t, 2, false), l.add(f));
  }
  function so(t, n, l) {
    var f = 0;
    n && (f |= 4), _v(l, t, f, n);
  }
  var pc = "_reactListening" + Math.random().toString(36).slice(2);
  function lo(t) {
    if (!t[pc]) {
      t[pc] = true, he.forEach(function(l) {
        l !== "selectionchange" && (T_.has(l) || so(l, false, t), so(l, true, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[pc] || (n[pc] = true, so("selectionchange", false, n));
    }
  }
  function _v(t, n, l, f) {
    switch (Xv(n)) {
      case 2:
        var h = K_;
        break;
      case 8:
        h = W_;
        break;
      default:
        h = To;
    }
    l = h.bind(null, n, l, t), h = void 0, !Of || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (h = true), f ? h !== void 0 ? t.addEventListener(n, l, { capture: true, passive: h }) : t.addEventListener(n, l, true) : h !== void 0 ? t.addEventListener(n, l, { passive: h }) : t.addEventListener(n, l, false);
  }
  function co(t, n, l, f, h) {
    var p = f;
    if ((n & 1) === 0 && (n & 2) === 0 && f !== null) e: for (; ; ) {
      if (f === null) return;
      var A = f.tag;
      if (A === 3 || A === 4) {
        var D = f.stateNode.containerInfo;
        if (D === h) break;
        if (A === 4) for (A = f.return; A !== null; ) {
          var Z = A.tag;
          if ((Z === 3 || Z === 4) && A.stateNode.containerInfo === h) return;
          A = A.return;
        }
        for (; D !== null; ) {
          if (A = P(D), A === null) return;
          if (Z = A.tag, Z === 5 || Z === 6 || Z === 26 || Z === 27) {
            f = p = A;
            continue e;
          }
          D = D.parentNode;
        }
      }
      f = f.return;
    }
    bd(function() {
      var ue = p, Ee = Cf(l), Se = [];
      e: {
        var de = r1.get(t);
        if (de !== void 0) {
          var ve = R0, ze = t;
          switch (t) {
            case "keypress":
              if (b0(l) === 0) break e;
            case "keydown":
            case "keyup":
              ve = pE;
              break;
            case "focusin":
              ze = "focus", ve = Nf;
              break;
            case "focusout":
              ze = "blur", ve = Nf;
              break;
            case "beforeblur":
            case "afterblur":
              ve = Nf;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ve = Dd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ve = nE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ve = yE;
              break;
            case Qd:
            case Jd:
            case e1:
              ve = lE;
              break;
            case t1:
              ve = _E;
              break;
            case "scroll":
            case "scrollend":
              ve = rE;
              break;
            case "wheel":
              ve = wE;
              break;
            case "copy":
            case "cut":
            case "paste":
              ve = fE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ve = Nd;
              break;
            case "toggle":
            case "beforetoggle":
              ve = AE;
          }
          var He = (n & 4) !== 0, wt = !He && (t === "scroll" || t === "scrollend"), se = He ? de !== null ? de + "Capture" : null : de;
          He = [];
          for (var te = ue, ce; te !== null; ) {
            var Te = te;
            if (ce = Te.stateNode, Te = Te.tag, Te !== 5 && Te !== 26 && Te !== 27 || ce === null || se === null || (Te = Hs(te, se), Te != null && He.push(_l(te, Te, ce))), wt) break;
            te = te.return;
          }
          0 < He.length && (de = new ve(de, ze, null, l, Ee), Se.push({ event: de, listeners: He }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (de = t === "mouseover" || t === "pointerover", ve = t === "mouseout" || t === "pointerout", de && l !== kf && (ze = l.relatedTarget || l.fromElement) && (P(ze) || ze[fn])) break e;
          if ((ve || de) && (de = Ee.window === Ee ? Ee : (de = Ee.ownerDocument) ? de.defaultView || de.parentWindow : window, ve ? (ze = l.relatedTarget || l.toElement, ve = ue, ze = ze ? P(ze) : null, ze !== null && (wt = c(ze), He = ze.tag, ze !== wt || He !== 5 && He !== 27 && He !== 6) && (ze = null)) : (ve = null, ze = ue), ve !== ze)) {
            if (He = Dd, Te = "onMouseLeave", se = "onMouseEnter", te = "mouse", (t === "pointerout" || t === "pointerover") && (He = Nd, Te = "onPointerLeave", se = "onPointerEnter", te = "pointer"), wt = ve == null ? de : oe(ve), ce = ze == null ? de : oe(ze), de = new He(Te, te + "leave", ve, l, Ee), de.target = wt, de.relatedTarget = ce, Te = null, P(Ee) === ue && (He = new He(se, te + "enter", ze, l, Ee), He.target = ce, He.relatedTarget = wt, Te = He), wt = Te, ve && ze) t: {
              for (He = ve, se = ze, te = 0, ce = He; ce; ce = cs(ce)) te++;
              for (ce = 0, Te = se; Te; Te = cs(Te)) ce++;
              for (; 0 < te - ce; ) He = cs(He), te--;
              for (; 0 < ce - te; ) se = cs(se), ce--;
              for (; te--; ) {
                if (He === se || se !== null && He === se.alternate) break t;
                He = cs(He), se = cs(se);
              }
              He = null;
            }
            else He = null;
            ve !== null && Tv(Se, de, ve, He, false), ze !== null && wt !== null && Tv(Se, wt, ze, He, true);
          }
        }
        e: {
          if (de = ue ? oe(ue) : window, ve = de.nodeName && de.nodeName.toLowerCase(), ve === "select" || ve === "input" && de.type === "file") var Me = zd;
          else if (Hd(de)) if (Pd) Me = LE;
          else {
            Me = NE;
            var et = FE;
          }
          else ve = de.nodeName, !ve || ve.toLowerCase() !== "input" || de.type !== "checkbox" && de.type !== "radio" ? ue && Af(ue.elementType) && (Me = zd) : Me = ME;
          if (Me && (Me = Me(t, ue))) {
            jd(Se, Me, l, Ee);
            break e;
          }
          et && et(t, de, ue), t === "focusout" && ue && de.type === "number" && ue.memoizedProps.value != null && Sf(de, "number", de.value);
        }
        switch (et = ue ? oe(ue) : window, t) {
          case "focusin":
            (Hd(et) || et.contentEditable === "true") && (Ii = et, Hf = ue, $s = null);
            break;
          case "focusout":
            $s = Hf = Ii = null;
            break;
          case "mousedown":
            jf = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            jf = false, Wd(Se, l, Ee);
            break;
          case "selectionchange":
            if (UE) break;
          case "keydown":
          case "keyup":
            Wd(Se, l, Ee);
        }
        var Ue;
        if (Lf) e: {
          switch (t) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else Ui ? Ud(t, l) && (je = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (je = "onCompositionStart");
        je && (Md && l.locale !== "ko" && (Ui || je !== "onCompositionStart" ? je === "onCompositionEnd" && Ui && (Ue = Od()) : (on = Ee, Rf = "value" in on ? on.value : on.textContent, Ui = true)), et = mc(ue, je), 0 < et.length && (je = new Fd(je, t, null, l, Ee), Se.push({ event: je, listeners: et }), Ue ? je.data = Ue : (Ue = Id(l), Ue !== null && (je.data = Ue)))), (Ue = CE ? bE(t, l) : OE(t, l)) && (je = mc(ue, "onBeforeInput"), 0 < je.length && (et = new Fd("onBeforeInput", "beforeinput", null, l, Ee), Se.push({ event: et, listeners: je }), et.data = Ue)), y_(Se, t, ue, l, Ee);
      }
      Ev(Se, n);
    });
  }
  function _l(t, n, l) {
    return { instance: t, listener: n, currentTarget: l };
  }
  function mc(t, n) {
    for (var l = n + "Capture", f = []; t !== null; ) {
      var h = t, p = h.stateNode;
      if (h = h.tag, h !== 5 && h !== 26 && h !== 27 || p === null || (h = Hs(t, l), h != null && f.unshift(_l(t, h, p)), h = Hs(t, n), h != null && f.push(_l(t, h, p))), t.tag === 3) return f;
      t = t.return;
    }
    return [];
  }
  function cs(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Tv(t, n, l, f, h) {
    for (var p = n._reactName, A = []; l !== null && l !== f; ) {
      var D = l, Z = D.alternate, ue = D.stateNode;
      if (D = D.tag, Z !== null && Z === f) break;
      D !== 5 && D !== 26 && D !== 27 || ue === null || (Z = ue, h ? (ue = Hs(l, p), ue != null && A.unshift(_l(l, ue, Z))) : h || (ue = Hs(l, p), ue != null && A.push(_l(l, ue, Z)))), l = l.return;
    }
    A.length !== 0 && t.push({ event: n, listeners: A });
  }
  var w_ = /\r\n?/g, S_ = /\u0000|\uFFFD/g;
  function wv(t) {
    return (typeof t == "string" ? t : "" + t).replace(w_, `
`).replace(S_, "");
  }
  function Sv(t, n) {
    return n = wv(n), wv(t) === n;
  }
  function gc() {
  }
  function Tt(t, n, l, f, h, p) {
    switch (l) {
      case "children":
        typeof f == "string" ? n === "body" || n === "textarea" && f === "" || Mi(t, f) : (typeof f == "number" || typeof f == "bigint") && n !== "body" && Mi(t, "" + f);
        break;
      case "className":
        Et(t, "class", f);
        break;
      case "tabIndex":
        Et(t, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Et(t, l, f);
        break;
      case "style":
        kd(t, f, p);
        break;
      case "data":
        if (n !== "object") {
          Et(t, "data", f);
          break;
        }
      case "src":
      case "href":
        if (f === "" && (n !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean") {
          t.removeAttribute(l);
          break;
        }
        f = k0("" + f), t.setAttribute(l, f);
        break;
      case "action":
      case "formAction":
        if (typeof f == "function") {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof p == "function" && (l === "formAction" ? (n !== "input" && Tt(t, n, "name", h.name, h, null), Tt(t, n, "formEncType", h.formEncType, h, null), Tt(t, n, "formMethod", h.formMethod, h, null), Tt(t, n, "formTarget", h.formTarget, h, null)) : (Tt(t, n, "encType", h.encType, h, null), Tt(t, n, "method", h.method, h, null), Tt(t, n, "target", h.target, h, null)));
        if (f == null || typeof f == "symbol" || typeof f == "boolean") {
          t.removeAttribute(l);
          break;
        }
        f = k0("" + f), t.setAttribute(l, f);
        break;
      case "onClick":
        f != null && (t.onclick = gc);
        break;
      case "onScroll":
        f != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        f != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f)) throw Error(i(61));
          if (l = f.__html, l != null) {
            if (h.children != null) throw Error(i(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = f && typeof f != "function" && typeof f != "symbol";
        break;
      case "muted":
        t.muted = f && typeof f != "function" && typeof f != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (f == null || typeof f == "function" || typeof f == "boolean" || typeof f == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = k0("" + f), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        f != null && typeof f != "function" && typeof f != "symbol" ? t.setAttribute(l, "" + f) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        f && typeof f != "function" && typeof f != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        f === true ? t.setAttribute(l, "") : f !== false && f != null && typeof f != "function" && typeof f != "symbol" ? t.setAttribute(l, f) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        f != null && typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f ? t.setAttribute(l, f) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        f == null || typeof f == "function" || typeof f == "symbol" || isNaN(f) ? t.removeAttribute(l) : t.setAttribute(l, f);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), yt(t, "popover", f);
        break;
      case "xlinkActuate":
        kt(t, "http://www.w3.org/1999/xlink", "xlink:actuate", f);
        break;
      case "xlinkArcrole":
        kt(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", f);
        break;
      case "xlinkRole":
        kt(t, "http://www.w3.org/1999/xlink", "xlink:role", f);
        break;
      case "xlinkShow":
        kt(t, "http://www.w3.org/1999/xlink", "xlink:show", f);
        break;
      case "xlinkTitle":
        kt(t, "http://www.w3.org/1999/xlink", "xlink:title", f);
        break;
      case "xlinkType":
        kt(t, "http://www.w3.org/1999/xlink", "xlink:type", f);
        break;
      case "xmlBase":
        kt(t, "http://www.w3.org/XML/1998/namespace", "xml:base", f);
        break;
      case "xmlLang":
        kt(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", f);
        break;
      case "xmlSpace":
        kt(t, "http://www.w3.org/XML/1998/namespace", "xml:space", f);
        break;
      case "is":
        yt(t, "is", f);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = eE.get(l) || l, yt(t, l, f));
    }
  }
  function fo(t, n, l, f, h, p) {
    switch (l) {
      case "style":
        kd(t, f, p);
        break;
      case "dangerouslySetInnerHTML":
        if (f != null) {
          if (typeof f != "object" || !("__html" in f)) throw Error(i(61));
          if (l = f.__html, l != null) {
            if (h.children != null) throw Error(i(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof f == "string" ? Mi(t, f) : (typeof f == "number" || typeof f == "bigint") && Mi(t, "" + f);
        break;
      case "onScroll":
        f != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        f != null && nt("scrollend", t);
        break;
      case "onClick":
        f != null && (t.onclick = gc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xe.hasOwnProperty(l)) e: {
          if (l[0] === "o" && l[1] === "n" && (h = l.endsWith("Capture"), n = l.slice(2, h ? l.length - 7 : void 0), p = t[er] || null, p = p != null ? p[l] : null, typeof p == "function" && t.removeEventListener(n, p, h), typeof f == "function")) {
            typeof p != "function" && p !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(n, f, h);
            break e;
          }
          l in t ? t[l] = f : f === true ? t.setAttribute(l, "") : yt(t, l, f);
        }
    }
  }
  function cr(t, n, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        nt("error", t), nt("load", t);
        var f = false, h = false, p;
        for (p in l) if (l.hasOwnProperty(p)) {
          var A = l[p];
          if (A != null) switch (p) {
            case "src":
              f = true;
              break;
            case "srcSet":
              h = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, n));
            default:
              Tt(t, n, p, A, l, null);
          }
        }
        h && Tt(t, n, "srcSet", l.srcSet, l, null), f && Tt(t, n, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var D = p = A = h = null, Z = null, ue = null;
        for (f in l) if (l.hasOwnProperty(f)) {
          var Ee = l[f];
          if (Ee != null) switch (f) {
            case "name":
              h = Ee;
              break;
            case "type":
              A = Ee;
              break;
            case "checked":
              Z = Ee;
              break;
            case "defaultChecked":
              ue = Ee;
              break;
            case "value":
              p = Ee;
              break;
            case "defaultValue":
              D = Ee;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Ee != null) throw Error(i(137, n));
              break;
            default:
              Tt(t, n, f, Ee, l, null);
          }
        }
        Td(t, p, D, Z, ue, A, h, false), S0(t);
        return;
      case "select":
        nt("invalid", t), f = A = p = null;
        for (h in l) if (l.hasOwnProperty(h) && (D = l[h], D != null)) switch (h) {
          case "value":
            p = D;
            break;
          case "defaultValue":
            A = D;
            break;
          case "multiple":
            f = D;
          default:
            Tt(t, n, h, D, l, null);
        }
        n = p, l = A, t.multiple = !!f, n != null ? Ni(t, !!f, n, false) : l != null && Ni(t, !!f, l, true);
        return;
      case "textarea":
        nt("invalid", t), p = h = f = null;
        for (A in l) if (l.hasOwnProperty(A) && (D = l[A], D != null)) switch (A) {
          case "value":
            f = D;
            break;
          case "defaultValue":
            h = D;
            break;
          case "children":
            p = D;
            break;
          case "dangerouslySetInnerHTML":
            if (D != null) throw Error(i(91));
            break;
          default:
            Tt(t, n, A, D, l, null);
        }
        Sd(t, f, h, p), S0(t);
        return;
      case "option":
        for (Z in l) if (l.hasOwnProperty(Z) && (f = l[Z], f != null)) switch (Z) {
          case "selected":
            t.selected = f && typeof f != "function" && typeof f != "symbol";
            break;
          default:
            Tt(t, n, Z, f, l, null);
        }
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (f = 0; f < El.length; f++) nt(El[f], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (ue in l) if (l.hasOwnProperty(ue) && (f = l[ue], f != null)) switch (ue) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(137, n));
          default:
            Tt(t, n, ue, f, l, null);
        }
        return;
      default:
        if (Af(n)) {
          for (Ee in l) l.hasOwnProperty(Ee) && (f = l[Ee], f !== void 0 && fo(t, n, Ee, f, l, void 0));
          return;
        }
    }
    for (D in l) l.hasOwnProperty(D) && (f = l[D], f != null && Tt(t, n, D, f, l, null));
  }
  function A_(t, n, l, f) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var h = null, p = null, A = null, D = null, Z = null, ue = null, Ee = null;
        for (ve in l) {
          var Se = l[ve];
          if (l.hasOwnProperty(ve) && Se != null) switch (ve) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              Z = Se;
            default:
              f.hasOwnProperty(ve) || Tt(t, n, ve, null, f, Se);
          }
        }
        for (var de in f) {
          var ve = f[de];
          if (Se = l[de], f.hasOwnProperty(de) && (ve != null || Se != null)) switch (de) {
            case "type":
              p = ve;
              break;
            case "name":
              h = ve;
              break;
            case "checked":
              ue = ve;
              break;
            case "defaultChecked":
              Ee = ve;
              break;
            case "value":
              A = ve;
              break;
            case "defaultValue":
              D = ve;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (ve != null) throw Error(i(137, n));
              break;
            default:
              ve !== Se && Tt(t, n, de, ve, f, Se);
          }
        }
        wf(t, A, D, Z, ue, Ee, p, h);
        return;
      case "select":
        ve = A = D = de = null;
        for (p in l) if (Z = l[p], l.hasOwnProperty(p) && Z != null) switch (p) {
          case "value":
            break;
          case "multiple":
            ve = Z;
          default:
            f.hasOwnProperty(p) || Tt(t, n, p, null, f, Z);
        }
        for (h in f) if (p = f[h], Z = l[h], f.hasOwnProperty(h) && (p != null || Z != null)) switch (h) {
          case "value":
            de = p;
            break;
          case "defaultValue":
            D = p;
            break;
          case "multiple":
            A = p;
          default:
            p !== Z && Tt(t, n, h, p, f, Z);
        }
        n = D, l = A, f = ve, de != null ? Ni(t, !!l, de, false) : !!f != !!l && (n != null ? Ni(t, !!l, n, true) : Ni(t, !!l, l ? [] : "", false));
        return;
      case "textarea":
        ve = de = null;
        for (D in l) if (h = l[D], l.hasOwnProperty(D) && h != null && !f.hasOwnProperty(D)) switch (D) {
          case "value":
            break;
          case "children":
            break;
          default:
            Tt(t, n, D, null, f, h);
        }
        for (A in f) if (h = f[A], p = l[A], f.hasOwnProperty(A) && (h != null || p != null)) switch (A) {
          case "value":
            de = h;
            break;
          case "defaultValue":
            ve = h;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(i(91));
            break;
          default:
            h !== p && Tt(t, n, A, h, f, p);
        }
        wd(t, de, ve);
        return;
      case "option":
        for (var ze in l) if (de = l[ze], l.hasOwnProperty(ze) && de != null && !f.hasOwnProperty(ze)) switch (ze) {
          case "selected":
            t.selected = false;
            break;
          default:
            Tt(t, n, ze, null, f, de);
        }
        for (Z in f) if (de = f[Z], ve = l[Z], f.hasOwnProperty(Z) && de !== ve && (de != null || ve != null)) switch (Z) {
          case "selected":
            t.selected = de && typeof de != "function" && typeof de != "symbol";
            break;
          default:
            Tt(t, n, Z, de, f, ve);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var He in l) de = l[He], l.hasOwnProperty(He) && de != null && !f.hasOwnProperty(He) && Tt(t, n, He, null, f, de);
        for (ue in f) if (de = f[ue], ve = l[ue], f.hasOwnProperty(ue) && de !== ve && (de != null || ve != null)) switch (ue) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (de != null) throw Error(i(137, n));
            break;
          default:
            Tt(t, n, ue, de, f, ve);
        }
        return;
      default:
        if (Af(n)) {
          for (var wt in l) de = l[wt], l.hasOwnProperty(wt) && de !== void 0 && !f.hasOwnProperty(wt) && fo(t, n, wt, void 0, f, de);
          for (Ee in f) de = f[Ee], ve = l[Ee], !f.hasOwnProperty(Ee) || de === ve || de === void 0 && ve === void 0 || fo(t, n, Ee, de, f, ve);
          return;
        }
    }
    for (var se in l) de = l[se], l.hasOwnProperty(se) && de != null && !f.hasOwnProperty(se) && Tt(t, n, se, null, f, de);
    for (Se in f) de = f[Se], ve = l[Se], !f.hasOwnProperty(Se) || de === ve || de == null && ve == null || Tt(t, n, Se, de, f, ve);
  }
  var uo = null, oo = null;
  function yc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Av(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function kv(t, n) {
    if (t === 0) switch (n) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function ho(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var xo = null;
  function k_() {
    var t = window.event;
    return t && t.type === "popstate" ? t === xo ? false : (xo = t, true) : (xo = null, false);
  }
  var Cv = typeof setTimeout == "function" ? setTimeout : void 0, C_ = typeof clearTimeout == "function" ? clearTimeout : void 0, bv = typeof Promise == "function" ? Promise : void 0, b_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof bv < "u" ? function(t) {
    return bv.resolve(null).then(t).catch(O_);
  } : Cv;
  function O_(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Cn(t) {
    return t === "head";
  }
  function Ov(t, n) {
    var l = n, f = 0, h = 0;
    do {
      var p = l.nextSibling;
      if (t.removeChild(l), p && p.nodeType === 8) if (l = p.data, l === "/$") {
        if (0 < f && 8 > f) {
          l = f;
          var A = t.ownerDocument;
          if (l & 1 && Tl(A.documentElement), l & 2 && Tl(A.body), l & 4) for (l = A.head, Tl(l), A = l.firstChild; A; ) {
            var D = A.nextSibling, Z = A.nodeName;
            A[L] || Z === "SCRIPT" || Z === "STYLE" || Z === "LINK" && A.rel.toLowerCase() === "stylesheet" || l.removeChild(A), A = D;
          }
        }
        if (h === 0) {
          t.removeChild(p), Rl(n);
          return;
        }
        h--;
      } else l === "$" || l === "$?" || l === "$!" ? h++ : f = l.charCodeAt(0) - 48;
      else f = 0;
      l = p;
    } while (l);
    Rl(n);
  }
  function vo(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var l = n;
      switch (n = n.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vo(l), I(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function R_(t, n, l, f) {
    for (; t.nodeType === 1; ) {
      var h = l;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!f && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (f) {
        if (!t[L]) switch (n) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (p = t.getAttribute("rel"), p === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (p !== h.rel || t.getAttribute("href") !== (h.href == null || h.href === "" ? null : h.href) || t.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) || t.getAttribute("title") !== (h.title == null ? null : h.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (p = t.getAttribute("src"), (p !== (h.src == null ? null : h.src) || t.getAttribute("type") !== (h.type == null ? null : h.type) || t.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin)) && p && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (n === "input" && t.type === "hidden") {
        var p = h.name == null ? null : "" + h.name;
        if (h.type === "hidden" && t.getAttribute("name") === p) return t;
      } else return t;
      if (t = va(t.nextSibling), t === null) break;
    }
    return null;
  }
  function D_(t, n, l) {
    if (n === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = va(t.nextSibling), t === null)) return null;
    return t;
  }
  function po(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function F_(t, n) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") n();
    else {
      var f = function() {
        n(), l.removeEventListener("DOMContentLoaded", f);
      };
      l.addEventListener("DOMContentLoaded", f), t._reactRetry = f;
    }
  }
  function va(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = t.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F") break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  var mo = null;
  function Rv(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (n === 0) return t;
          n--;
        } else l === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Dv(t, n, l) {
    switch (n = yc(l), t) {
      case "html":
        if (t = n.documentElement, !t) throw Error(i(452));
        return t;
      case "head":
        if (t = n.head, !t) throw Error(i(453));
        return t;
      case "body":
        if (t = n.body, !t) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Tl(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    I(t);
  }
  var aa = /* @__PURE__ */ new Map(), Fv = /* @__PURE__ */ new Set();
  function Ec(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Qa = ae.d;
  ae.d = { f: N_, r: M_, D: L_, C: B_, L: U_, m: I_, X: j_, S: H_, M: z_ };
  function N_() {
    var t = Qa.f(), n = oc();
    return t || n;
  }
  function M_(t) {
    var n = Y(t);
    n !== null && n.tag === 5 && n.type === "form" ? Q1(n) : Qa.r(t);
  }
  var fs = typeof document > "u" ? null : document;
  function Nv(t, n, l) {
    var f = fs;
    if (f && typeof n == "string" && n) {
      var h = Wr(n);
      h = 'link[rel="' + t + '"][href="' + h + '"]', typeof l == "string" && (h += '[crossorigin="' + l + '"]'), Fv.has(h) || (Fv.add(h), t = { rel: t, crossOrigin: l, href: n }, f.querySelector(h) === null && (n = f.createElement("link"), cr(n, "link", t), le(n), f.head.appendChild(n)));
    }
  }
  function L_(t) {
    Qa.D(t), Nv("dns-prefetch", t, null);
  }
  function B_(t, n) {
    Qa.C(t, n), Nv("preconnect", t, n);
  }
  function U_(t, n, l) {
    Qa.L(t, n, l);
    var f = fs;
    if (f && t && n) {
      var h = 'link[rel="preload"][as="' + Wr(n) + '"]';
      n === "image" && l && l.imageSrcSet ? (h += '[imagesrcset="' + Wr(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (h += '[imagesizes="' + Wr(l.imageSizes) + '"]')) : h += '[href="' + Wr(t) + '"]';
      var p = h;
      switch (n) {
        case "style":
          p = us(t);
          break;
        case "script":
          p = os(t);
      }
      aa.has(p) || (t = v({ rel: "preload", href: n === "image" && l && l.imageSrcSet ? void 0 : t, as: n }, l), aa.set(p, t), f.querySelector(h) !== null || n === "style" && f.querySelector(wl(p)) || n === "script" && f.querySelector(Sl(p)) || (n = f.createElement("link"), cr(n, "link", t), le(n), f.head.appendChild(n)));
    }
  }
  function I_(t, n) {
    Qa.m(t, n);
    var l = fs;
    if (l && t) {
      var f = n && typeof n.as == "string" ? n.as : "script", h = 'link[rel="modulepreload"][as="' + Wr(f) + '"][href="' + Wr(t) + '"]', p = h;
      switch (f) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = os(t);
      }
      if (!aa.has(p) && (t = v({ rel: "modulepreload", href: t }, n), aa.set(p, t), l.querySelector(h) === null)) {
        switch (f) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Sl(p))) return;
        }
        f = l.createElement("link"), cr(f, "link", t), le(f), l.head.appendChild(f);
      }
    }
  }
  function H_(t, n, l) {
    Qa.S(t, n, l);
    var f = fs;
    if (f && t) {
      var h = me(f).hoistableStyles, p = us(t);
      n = n || "default";
      var A = h.get(p);
      if (!A) {
        var D = { loading: 0, preload: null };
        if (A = f.querySelector(wl(p))) D.loading = 5;
        else {
          t = v({ rel: "stylesheet", href: t, "data-precedence": n }, l), (l = aa.get(p)) && go(t, l);
          var Z = A = f.createElement("link");
          le(Z), cr(Z, "link", t), Z._p = new Promise(function(ue, Ee) {
            Z.onload = ue, Z.onerror = Ee;
          }), Z.addEventListener("load", function() {
            D.loading |= 1;
          }), Z.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, _c(A, n, f);
        }
        A = { type: "stylesheet", instance: A, count: 1, state: D }, h.set(p, A);
      }
    }
  }
  function j_(t, n) {
    Qa.X(t, n);
    var l = fs;
    if (l && t) {
      var f = me(l).hoistableScripts, h = os(t), p = f.get(h);
      p || (p = l.querySelector(Sl(h)), p || (t = v({ src: t, async: true }, n), (n = aa.get(h)) && yo(t, n), p = l.createElement("script"), le(p), cr(p, "link", t), l.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, f.set(h, p));
    }
  }
  function z_(t, n) {
    Qa.M(t, n);
    var l = fs;
    if (l && t) {
      var f = me(l).hoistableScripts, h = os(t), p = f.get(h);
      p || (p = l.querySelector(Sl(h)), p || (t = v({ src: t, async: true, type: "module" }, n), (n = aa.get(h)) && yo(t, n), p = l.createElement("script"), le(p), cr(p, "link", t), l.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, f.set(h, p));
    }
  }
  function Mv(t, n, l, f) {
    var h = (h = ie.current) ? Ec(h) : null;
    if (!h) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (n = us(l.href), l = me(h).hoistableStyles, f = l.get(n), f || (f = { type: "style", instance: null, count: 0, state: null }, l.set(n, f)), f) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = us(l.href);
          var p = me(h).hoistableStyles, A = p.get(t);
          if (A || (h = h.ownerDocument || h, A = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, p.set(t, A), (p = h.querySelector(wl(t))) && !p._p && (A.instance = p, A.state.loading = 5), aa.has(t) || (l = { rel: "preload", as: "style", href: l.href, crossOrigin: l.crossOrigin, integrity: l.integrity, media: l.media, hrefLang: l.hrefLang, referrerPolicy: l.referrerPolicy }, aa.set(t, l), p || P_(h, t, l, A.state))), n && f === null) throw Error(i(528, ""));
          return A;
        }
        if (n && f !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return n = l.async, l = l.src, typeof l == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = os(l), l = me(h).hoistableScripts, f = l.get(n), f || (f = { type: "script", instance: null, count: 0, state: null }, l.set(n, f)), f) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, t));
    }
  }
  function us(t) {
    return 'href="' + Wr(t) + '"';
  }
  function wl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Lv(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function P_(t, n, l, f) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? f.loading = 1 : (n = t.createElement("link"), f.preload = n, n.addEventListener("load", function() {
      return f.loading |= 1;
    }), n.addEventListener("error", function() {
      return f.loading |= 2;
    }), cr(n, "link", l), le(n), t.head.appendChild(n));
  }
  function os(t) {
    return '[src="' + Wr(t) + '"]';
  }
  function Sl(t) {
    return "script[async]" + t;
  }
  function Bv(t, n, l) {
    if (n.count++, n.instance === null) switch (n.type) {
      case "style":
        var f = t.querySelector('style[data-href~="' + Wr(l.href) + '"]');
        if (f) return n.instance = f, le(f), f;
        var h = v({}, l, { "data-href": l.href, "data-precedence": l.precedence, href: null, precedence: null });
        return f = (t.ownerDocument || t).createElement("style"), le(f), cr(f, "style", h), _c(f, l.precedence, t), n.instance = f;
      case "stylesheet":
        h = us(l.href);
        var p = t.querySelector(wl(h));
        if (p) return n.state.loading |= 4, n.instance = p, le(p), p;
        f = Lv(l), (h = aa.get(h)) && go(f, h), p = (t.ownerDocument || t).createElement("link"), le(p);
        var A = p;
        return A._p = new Promise(function(D, Z) {
          A.onload = D, A.onerror = Z;
        }), cr(p, "link", f), n.state.loading |= 4, _c(p, l.precedence, t), n.instance = p;
      case "script":
        return p = os(l.src), (h = t.querySelector(Sl(p))) ? (n.instance = h, le(h), h) : (f = l, (h = aa.get(p)) && (f = v({}, l), yo(f, h)), t = t.ownerDocument || t, h = t.createElement("script"), le(h), cr(h, "link", f), t.head.appendChild(h), n.instance = h);
      case "void":
        return null;
      default:
        throw Error(i(443, n.type));
    }
    else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (f = n.instance, n.state.loading |= 4, _c(f, l.precedence, t));
    return n.instance;
  }
  function _c(t, n, l) {
    for (var f = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), h = f.length ? f[f.length - 1] : null, p = h, A = 0; A < f.length; A++) {
      var D = f[A];
      if (D.dataset.precedence === n) p = D;
      else if (p !== h) break;
    }
    p ? p.parentNode.insertBefore(t, p.nextSibling) : (n = l.nodeType === 9 ? l.head : l, n.insertBefore(t, n.firstChild));
  }
  function go(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.title == null && (t.title = n.title);
  }
  function yo(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy), t.integrity == null && (t.integrity = n.integrity);
  }
  var Tc = null;
  function Uv(t, n, l) {
    if (Tc === null) {
      var f = /* @__PURE__ */ new Map(), h = Tc = /* @__PURE__ */ new Map();
      h.set(l, f);
    } else h = Tc, f = h.get(l), f || (f = /* @__PURE__ */ new Map(), h.set(l, f));
    if (f.has(t)) return f;
    for (f.set(t, null), l = l.getElementsByTagName(t), h = 0; h < l.length; h++) {
      var p = l[h];
      if (!(p[L] || p[Jt] || t === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var A = p.getAttribute(n) || "";
        A = t + A;
        var D = f.get(A);
        D ? D.push(p) : f.set(A, [p]);
      }
    }
    return f;
  }
  function Iv(t, n, l) {
    t = t.ownerDocument || t, t.head.insertBefore(l, n === "title" ? t.querySelector("head > title") : null);
  }
  function G_(t, n, l) {
    if (l === 1 || n.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return true;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
        switch (n.rel) {
          case "stylesheet":
            return t = n.disabled, typeof n.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return true;
    }
    return false;
  }
  function Hv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Al = null;
  function V_() {
  }
  function X_(t, n, l) {
    if (Al === null) throw Error(i(475));
    var f = Al;
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var h = us(l.href), p = t.querySelector(wl(h));
        if (p) {
          t = p._p, t !== null && typeof t == "object" && typeof t.then == "function" && (f.count++, f = wc.bind(f), t.then(f, f)), n.state.loading |= 4, n.instance = p, le(p);
          return;
        }
        p = t.ownerDocument || t, l = Lv(l), (h = aa.get(h)) && go(l, h), p = p.createElement("link"), le(p);
        var A = p;
        A._p = new Promise(function(D, Z) {
          A.onload = D, A.onerror = Z;
        }), cr(p, "link", l), n.instance = p;
      }
      f.stylesheets === null && (f.stylesheets = /* @__PURE__ */ new Map()), f.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (f.count++, n = wc.bind(f), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  function Y_() {
    if (Al === null) throw Error(i(475));
    var t = Al;
    return t.stylesheets && t.count === 0 && Eo(t, t.stylesheets), 0 < t.count ? function(n) {
      var l = setTimeout(function() {
        if (t.stylesheets && Eo(t, t.stylesheets), t.unsuspend) {
          var f = t.unsuspend;
          t.unsuspend = null, f();
        }
      }, 6e4);
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function wc() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Eo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Sc = null;
  function Eo(t, n) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Sc = /* @__PURE__ */ new Map(), n.forEach($_, t), Sc = null, wc.call(t));
  }
  function $_(t, n) {
    if (!(n.state.loading & 4)) {
      var l = Sc.get(t);
      if (l) var f = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Sc.set(t, l);
        for (var h = t.querySelectorAll("link[data-precedence],style[data-precedence]"), p = 0; p < h.length; p++) {
          var A = h[p];
          (A.nodeName === "LINK" || A.getAttribute("media") !== "not all") && (l.set(A.dataset.precedence, A), f = A);
        }
        f && l.set(null, f);
      }
      h = n.instance, A = h.getAttribute("data-precedence"), p = l.get(A) || f, p === f && l.set(null, h), l.set(A, h), this.count++, f = wc.bind(this), h.addEventListener("load", f), h.addEventListener("error", f), p ? p.parentNode.insertBefore(h, p.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(h, t.firstChild)), n.state.loading |= 4;
    }
  }
  var kl = { $$typeof: k, Provider: null, Consumer: null, _currentValue: we, _currentValue2: we, _threadCount: 0 };
  function q_(t, n, l, f, h, p, A, D) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ls(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ls(0), this.hiddenUpdates = Ls(null), this.identifierPrefix = f, this.onUncaughtError = h, this.onCaughtError = p, this.onRecoverableError = A, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jv(t, n, l, f, h, p, A, D, Z, ue, Ee, Se) {
    return t = new q_(t, n, l, A, D, Z, ue, Se), n = 1, p === true && (n |= 24), p = Ir(3, null, null, n), t.current = p, p.stateNode = t, n = eu(), n.refCount++, t.pooledCache = n, n.refCount++, p.memoizedState = { element: f, isDehydrated: l, cache: n }, nu(p), t;
  }
  function zv(t) {
    return t ? (t = Pi, t) : Pi;
  }
  function Pv(t, n, l, f, h, p) {
    h = zv(h), f.context === null ? f.context = h : f.pendingContext = h, f = xn(n), f.payload = { element: l }, p = p === void 0 ? null : p, p !== null && (f.callback = p), l = vn(t, f, n), l !== null && (Gr(l, t, n), rl(l, t, n));
  }
  function Gv(t, n) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < n ? l : n;
    }
  }
  function _o(t, n) {
    Gv(t, n), (t = t.alternate) && Gv(t, n);
  }
  function Vv(t) {
    if (t.tag === 13) {
      var n = zi(t, 67108864);
      n !== null && Gr(n, t, 67108864), _o(t, 67108864);
    }
  }
  var Ac = true;
  function K_(t, n, l, f) {
    var h = J.T;
    J.T = null;
    var p = ae.p;
    try {
      ae.p = 2, To(t, n, l, f);
    } finally {
      ae.p = p, J.T = h;
    }
  }
  function W_(t, n, l, f) {
    var h = J.T;
    J.T = null;
    var p = ae.p;
    try {
      ae.p = 8, To(t, n, l, f);
    } finally {
      ae.p = p, J.T = h;
    }
  }
  function To(t, n, l, f) {
    if (Ac) {
      var h = wo(f);
      if (h === null) co(t, n, f, kc, l), Yv(t, f);
      else if (Q_(h, t, n, l, f)) f.stopPropagation();
      else if (Yv(t, f), n & 4 && -1 < Z_.indexOf(t)) {
        for (; h !== null; ) {
          var p = Y(h);
          if (p !== null) switch (p.tag) {
            case 3:
              if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                var A = wa(p.pendingLanes);
                if (A !== 0) {
                  var D = p;
                  for (D.pendingLanes |= 2, D.entangledLanes |= 2; A; ) {
                    var Z = 1 << 31 - gt(A);
                    D.entanglements[1] |= Z, A &= ~Z;
                  }
                  Oa(p), (pt & 6) === 0 && (fc = ke() + 500, yl(0));
                }
              }
              break;
            case 13:
              D = zi(p, 2), D !== null && Gr(D, p, 2), oc(), _o(p, 2);
          }
          if (p = wo(f), p === null && co(t, n, f, kc, l), p === h) break;
          h = p;
        }
        h !== null && f.stopPropagation();
      } else co(t, n, f, null, l);
    }
  }
  function wo(t) {
    return t = Cf(t), So(t);
  }
  var kc = null;
  function So(t) {
    if (kc = null, t = P(t), t !== null) {
      var n = c(t);
      if (n === null) t = null;
      else {
        var l = n.tag;
        if (l === 13) {
          if (t = u(n), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return kc = t, null;
  }
  function Xv(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ie()) {
          case Ke:
            return 2;
          case Ze:
            return 8;
          case At:
          case It:
            return 32;
          case Pt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ao = false, bn = null, On = null, Rn = null, Cl = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Map(), Dn = [], Z_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Yv(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        bn = null;
        break;
      case "dragenter":
      case "dragleave":
        On = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Cl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bl.delete(n.pointerId);
    }
  }
  function Ol(t, n, l, f, h, p) {
    return t === null || t.nativeEvent !== p ? (t = { blockedOn: n, domEventName: l, eventSystemFlags: f, nativeEvent: p, targetContainers: [h] }, n !== null && (n = Y(n), n !== null && Vv(n)), t) : (t.eventSystemFlags |= f, n = t.targetContainers, h !== null && n.indexOf(h) === -1 && n.push(h), t);
  }
  function Q_(t, n, l, f, h) {
    switch (n) {
      case "focusin":
        return bn = Ol(bn, t, n, l, f, h), true;
      case "dragenter":
        return On = Ol(On, t, n, l, f, h), true;
      case "mouseover":
        return Rn = Ol(Rn, t, n, l, f, h), true;
      case "pointerover":
        var p = h.pointerId;
        return Cl.set(p, Ol(Cl.get(p) || null, t, n, l, f, h)), true;
      case "gotpointercapture":
        return p = h.pointerId, bl.set(p, Ol(bl.get(p) || null, t, n, l, f, h)), true;
    }
    return false;
  }
  function $v(t) {
    var n = P(t.target);
    if (n !== null) {
      var l = c(n);
      if (l !== null) {
        if (n = l.tag, n === 13) {
          if (n = u(l), n !== null) {
            t.blockedOn = n, _f(t.priority, function() {
              if (l.tag === 13) {
                var f = Pr();
                f = Bs(f);
                var h = zi(l, f);
                h !== null && Gr(h, l, f), _o(l, f);
              }
            });
            return;
          }
        } else if (n === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Cc(t) {
    if (t.blockedOn !== null) return false;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var l = wo(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var f = new l.constructor(l.type, l);
        kf = f, l.target.dispatchEvent(f), kf = null;
      } else return n = Y(l), n !== null && Vv(n), t.blockedOn = l, false;
      n.shift();
    }
    return true;
  }
  function qv(t, n, l) {
    Cc(t) && l.delete(n);
  }
  function J_() {
    Ao = false, bn !== null && Cc(bn) && (bn = null), On !== null && Cc(On) && (On = null), Rn !== null && Cc(Rn) && (Rn = null), Cl.forEach(qv), bl.forEach(qv);
  }
  function bc(t, n) {
    t.blockedOn === n && (t.blockedOn = null, Ao || (Ao = true, e.unstable_scheduleCallback(e.unstable_NormalPriority, J_)));
  }
  var Oc = null;
  function Kv(t) {
    Oc !== t && (Oc = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
      Oc === t && (Oc = null);
      for (var n = 0; n < t.length; n += 3) {
        var l = t[n], f = t[n + 1], h = t[n + 2];
        if (typeof f != "function") {
          if (So(f || l) === null) continue;
          break;
        }
        var p = Y(l);
        p !== null && (t.splice(n, 3), n -= 3, wu(p, { pending: true, data: h, method: l.method, action: f }, f, h));
      }
    }));
  }
  function Rl(t) {
    function n(Z) {
      return bc(Z, t);
    }
    bn !== null && bc(bn, t), On !== null && bc(On, t), Rn !== null && bc(Rn, t), Cl.forEach(n), bl.forEach(n);
    for (var l = 0; l < Dn.length; l++) {
      var f = Dn[l];
      f.blockedOn === t && (f.blockedOn = null);
    }
    for (; 0 < Dn.length && (l = Dn[0], l.blockedOn === null); ) $v(l), l.blockedOn === null && Dn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (f = 0; f < l.length; f += 3) {
      var h = l[f], p = l[f + 1], A = h[er] || null;
      if (typeof p == "function") A || Kv(l);
      else if (A) {
        var D = null;
        if (p && p.hasAttribute("formAction")) {
          if (h = p, A = p[er] || null) D = A.formAction;
          else if (So(h) !== null) continue;
        } else D = A.action;
        typeof D == "function" ? l[f + 1] = D : (l.splice(f, 3), f -= 3), Kv(l);
      }
    }
  }
  function ko(t) {
    this._internalRoot = t;
  }
  Rc.prototype.render = ko.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null) throw Error(i(409));
    var l = n.current, f = Pr();
    Pv(l, f, t, n, null, null);
  }, Rc.prototype.unmount = ko.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      Pv(t.current, 2, null, t, null, null), oc(), n[fn] = null;
    }
  };
  function Rc(t) {
    this._internalRoot = t;
  }
  Rc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = w0();
      t = { blockedOn: null, target: t, priority: n };
      for (var l = 0; l < Dn.length && n !== 0 && n < Dn[l].priority; l++) ;
      Dn.splice(l, 0, t), l === 0 && $v(t);
    }
  };
  var Wv = a.version;
  if (Wv !== "19.1.0") throw Error(i(527, Wv, "19.1.0"));
  ae.findDOMNode = function(t) {
    var n = t._reactInternals;
    if (n === void 0) throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
    return t = x(n), t = t !== null ? d(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var eT = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: J, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dc.isDisabled && Dc.supportsFiber) try {
      st = Dc.inject(eT), tt = Dc;
    } catch {
    }
  }
  return Fl.createRoot = function(t, n) {
    if (!s(t)) throw Error(i(299));
    var l = false, f = "", h = hx, p = dx, A = xx, D = null;
    return n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (f = n.identifierPrefix), n.onUncaughtError !== void 0 && (h = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (A = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (D = n.unstable_transitionCallbacks)), n = jv(t, 1, false, null, null, l, f, h, p, A, D, null), t[fn] = n.current, lo(t), new ko(n);
  }, Fl.hydrateRoot = function(t, n, l) {
    if (!s(t)) throw Error(i(299));
    var f = false, h = "", p = hx, A = dx, D = xx, Z = null, ue = null;
    return l != null && (l.unstable_strictMode === true && (f = true), l.identifierPrefix !== void 0 && (h = l.identifierPrefix), l.onUncaughtError !== void 0 && (p = l.onUncaughtError), l.onCaughtError !== void 0 && (A = l.onCaughtError), l.onRecoverableError !== void 0 && (D = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (Z = l.unstable_transitionCallbacks), l.formState !== void 0 && (ue = l.formState)), n = jv(t, 1, true, n, l ?? null, f, h, p, A, D, Z, ue), n.context = zv(null), l = n.current, f = Pr(), f = Bs(f), h = xn(f), h.callback = null, vn(l, h, f), l = f, n.current.lanes = l, $n(n, l), Oa(n), t[fn] = n.current, lo(t), new Rc(n);
  }, Fl.version = "19.1.0", Fl;
}
var sp;
function fT() {
  if (sp) return Oo.exports;
  sp = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (a) {
      console.error(a);
    }
  }
  return e(), Oo.exports = cT(), Oo.exports;
}
var uT = fT(), No = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var lp;
function oT() {
  return lp || (lp = 1, function(e) {
    (function() {
      var a = {}.hasOwnProperty;
      function r() {
        for (var c = "", u = 0; u < arguments.length; u++) {
          var o = arguments[u];
          o && (c = s(c, i(o)));
        }
        return c;
      }
      function i(c) {
        if (typeof c == "string" || typeof c == "number") return c;
        if (typeof c != "object") return "";
        if (Array.isArray(c)) return r.apply(null, c);
        if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) return c.toString();
        var u = "";
        for (var o in c) a.call(c, o) && c[o] && (u = s(u, o));
        return u;
      }
      function s(c, u) {
        return u ? c ? c + " " + u : c + u : c;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(No)), No.exports;
}
var hT = oT();
const Ve = bs(hT);
function eh() {
  return eh = Object.assign ? Object.assign.bind() : function(e) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, eh.apply(null, arguments);
}
function Ym(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) !== -1) continue;
    r[i] = e[i];
  }
  return r;
}
function cp(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function dT(e) {
  var a = xT(e, "string");
  return typeof a == "symbol" ? a : String(a);
}
function xT(e, a) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, a);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $m(e, a, r) {
  var i = ee.useRef(e !== void 0), s = ee.useState(a), c = s[0], u = s[1], o = e !== void 0, x = i.current;
  return i.current = o, !o && x && c !== a && u(a), [o ? e : c, ee.useCallback(function(d) {
    for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), g = 1; g < v; g++) m[g - 1] = arguments[g];
    r && r.apply(void 0, [d].concat(m)), u(d);
  }, [r])];
}
function qm(e, a) {
  return Object.keys(a).reduce(function(r, i) {
    var s, c = r, u = c[cp(i)], o = c[i], x = Ym(c, [cp(i), i].map(dT)), d = a[i], v = $m(o, u, e[d]), m = v[0], g = v[1];
    return eh({}, x, (s = {}, s[i] = m, s[d] = g, s));
  }, e);
}
function th(e, a) {
  return th = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, th(e, a);
}
function vT(e, a) {
  e.prototype = Object.create(a.prototype), e.prototype.constructor = e, th(e, a);
}
const pT = ["xxl", "xl", "lg", "md", "sm", "xs"], mT = "xs", c0 = ee.createContext({ prefixes: {}, breakpoints: pT, minBreakpoint: mT }), { Consumer: KR, Provider: WR } = c0;
function qe(e, a) {
  const { prefixes: r } = ee.useContext(c0);
  return e || r[a] || a;
}
function Km() {
  const { breakpoints: e } = ee.useContext(c0);
  return e;
}
function Wm() {
  const { minBreakpoint: e } = ee.useContext(c0);
  return e;
}
function Ah() {
  const { dir: e } = ee.useContext(c0);
  return e === "rtl";
}
function hf(e) {
  return e && e.ownerDocument || document;
}
function gT(e) {
  var a = hf(e);
  return a && a.defaultView || window;
}
function yT(e, a) {
  return gT(e).getComputedStyle(e, a);
}
var ET = /([A-Z])/g;
function _T(e) {
  return e.replace(ET, "-$1").toLowerCase();
}
var TT = /^ms-/;
function Nc(e) {
  return _T(e).replace(TT, "-ms-");
}
var wT = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ST(e) {
  return !!(e && wT.test(e));
}
function Zm(e, a) {
  var r = "", i = "";
  if (typeof a == "string") return e.style.getPropertyValue(Nc(a)) || yT(e).getPropertyValue(Nc(a));
  Object.keys(a).forEach(function(s) {
    var c = a[s];
    !c && c !== 0 ? e.style.removeProperty(Nc(s)) : ST(s) ? i += s + "(" + c + ") " : r += Nc(s) + ": " + c + ";";
  }), i && (r += "transform: " + i + ";"), e.style.cssText += ";" + r;
}
var Mo = { exports: {} }, Lo, fp;
function AT() {
  if (fp) return Lo;
  fp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Lo = e, Lo;
}
var Bo, up;
function kT() {
  if (up) return Bo;
  up = 1;
  var e = AT();
  function a() {
  }
  function r() {
  }
  return r.resetWarningCache = a, Bo = function() {
    function i(u, o, x, d, v, m) {
      if (m !== e) {
        var g = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw g.name = "Invariant Violation", g;
      }
    }
    i.isRequired = i;
    function s() {
      return i;
    }
    var c = { array: i, bigint: i, bool: i, func: i, number: i, object: i, string: i, symbol: i, any: i, arrayOf: s, element: i, elementType: i, instanceOf: s, node: i, objectOf: s, oneOf: s, oneOfType: s, shape: s, exact: s, checkPropTypes: r, resetWarningCache: a };
    return c.PropTypes = c, c;
  }, Bo;
}
var op;
function CT() {
  return op || (op = 1, Mo.exports = kT()()), Mo.exports;
}
var bT = CT();
const Fa = bs(bT);
var OT = Xm();
const ps = bs(OT), hp = { disabled: false }, Qm = Mr.createContext(null);
var RT = function(a) {
  return a.scrollTop;
}, Ml = "unmounted", hi = "exited", Mn = "entering", di = "entered", rh = "exiting", ln = function(e) {
  vT(a, e);
  function a(i, s) {
    var c;
    c = e.call(this, i, s) || this;
    var u = s, o = u && !u.isMounting ? i.enter : i.appear, x;
    return c.appearStatus = null, i.in ? o ? (x = hi, c.appearStatus = Mn) : x = di : i.unmountOnExit || i.mountOnEnter ? x = Ml : x = hi, c.state = { status: x }, c.nextCallback = null, c;
  }
  a.getDerivedStateFromProps = function(s, c) {
    var u = s.in;
    return u && c.status === Ml ? { status: hi } : null;
  };
  var r = a.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, r.componentDidUpdate = function(s) {
    var c = null;
    if (s !== this.props) {
      var u = this.state.status;
      this.props.in ? u !== Mn && u !== di && (c = Mn) : (u === Mn || u === di) && (c = rh);
    }
    this.updateStatus(false, c);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var s = this.props.timeout, c, u, o;
    return c = u = o = s, s != null && typeof s != "number" && (c = s.exit, u = s.enter, o = s.appear !== void 0 ? s.appear : u), { exit: c, enter: u, appear: o };
  }, r.updateStatus = function(s, c) {
    if (s === void 0 && (s = false), c !== null) if (this.cancelNextCallback(), c === Mn) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var u = this.props.nodeRef ? this.props.nodeRef.current : ps.findDOMNode(this);
        u && RT(u);
      }
      this.performEnter(s);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === hi && this.setState({ status: Ml });
  }, r.performEnter = function(s) {
    var c = this, u = this.props.enter, o = this.context ? this.context.isMounting : s, x = this.props.nodeRef ? [o] : [ps.findDOMNode(this), o], d = x[0], v = x[1], m = this.getTimeouts(), g = o ? m.appear : m.enter;
    if (!s && !u || hp.disabled) {
      this.safeSetState({ status: di }, function() {
        c.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, v), this.safeSetState({ status: Mn }, function() {
      c.props.onEntering(d, v), c.onTransitionEnd(g, function() {
        c.safeSetState({ status: di }, function() {
          c.props.onEntered(d, v);
        });
      });
    });
  }, r.performExit = function() {
    var s = this, c = this.props.exit, u = this.getTimeouts(), o = this.props.nodeRef ? void 0 : ps.findDOMNode(this);
    if (!c || hp.disabled) {
      this.safeSetState({ status: hi }, function() {
        s.props.onExited(o);
      });
      return;
    }
    this.props.onExit(o), this.safeSetState({ status: rh }, function() {
      s.props.onExiting(o), s.onTransitionEnd(u.exit, function() {
        s.safeSetState({ status: hi }, function() {
          s.props.onExited(o);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(s, c) {
    c = this.setNextCallback(c), this.setState(s, c);
  }, r.setNextCallback = function(s) {
    var c = this, u = true;
    return this.nextCallback = function(o) {
      u && (u = false, c.nextCallback = null, s(o));
    }, this.nextCallback.cancel = function() {
      u = false;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(s, c) {
    this.setNextCallback(c);
    var u = this.props.nodeRef ? this.props.nodeRef.current : ps.findDOMNode(this), o = s == null && !this.props.addEndListener;
    if (!u || o) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var x = this.props.nodeRef ? [this.nextCallback] : [u, this.nextCallback], d = x[0], v = x[1];
      this.props.addEndListener(d, v);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, r.render = function() {
    var s = this.state.status;
    if (s === Ml) return null;
    var c = this.props, u = c.children;
    c.in, c.mountOnEnter, c.unmountOnExit, c.appear, c.enter, c.exit, c.timeout, c.addEndListener, c.onEnter, c.onEntering, c.onEntered, c.onExit, c.onExiting, c.onExited, c.nodeRef;
    var o = Ym(c, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return Mr.createElement(Qm.Provider, { value: null }, typeof u == "function" ? u(s, o) : Mr.cloneElement(Mr.Children.only(u), o));
  }, a;
}(Mr.Component);
ln.contextType = Qm;
ln.propTypes = {};
function hs() {
}
ln.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: hs, onEntering: hs, onEntered: hs, onExit: hs, onExiting: hs, onExited: hs };
ln.UNMOUNTED = Ml;
ln.EXITED = hi;
ln.ENTERING = Mn;
ln.ENTERED = di;
ln.EXITING = rh;
function DT(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function FT() {
  const e = ee.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
function f0(e) {
  if (!e || typeof e == "function") return null;
  const { major: a } = FT();
  return a >= 19 ? e.props.ref : e.ref;
}
const kh = !!(typeof window < "u" && window.document && window.document.createElement);
var ah = false, nh = false;
try {
  var Uo = { get passive() {
    return ah = true;
  }, get once() {
    return nh = ah = true;
  } };
  kh && (window.addEventListener("test", Uo, Uo), window.removeEventListener("test", Uo, true));
} catch {
}
function Jm(e, a, r, i) {
  if (i && typeof i != "boolean" && !nh) {
    var s = i.once, c = i.capture, u = r;
    !nh && s && (u = r.__once || function o(x) {
      this.removeEventListener(a, o, c), r.call(this, x);
    }, r.__once = u), e.addEventListener(a, u, ah ? i : c);
  }
  e.addEventListener(a, r, i);
}
function NT(e, a, r, i) {
  var s = i && typeof i != "boolean" ? i.capture : i;
  e.removeEventListener(a, r, s), r.__once && e.removeEventListener(a, r.__once, s);
}
function vi(e, a, r, i) {
  return Jm(e, a, r, i), function() {
    NT(e, a, r, i);
  };
}
function MT(e, a, r, i) {
  if (i === void 0 && (i = true), e) {
    var s = document.createEvent("HTMLEvents");
    s.initEvent(a, r, i), e.dispatchEvent(s);
  }
}
function LT(e) {
  var a = Zm(e, "transitionDuration") || "", r = a.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(a) * r;
}
function BT(e, a, r) {
  r === void 0 && (r = 5);
  var i = false, s = setTimeout(function() {
    i || MT(e, "transitionend", true);
  }, a + r), c = vi(e, "transitionend", function() {
    i = true;
  }, { once: true });
  return function() {
    clearTimeout(s), c();
  };
}
function UT(e, a, r, i) {
  r == null && (r = LT(e) || 0);
  var s = BT(e, r, i), c = vi(e, "transitionend", a);
  return function() {
    s(), c();
  };
}
function dp(e, a) {
  const r = Zm(e, a) || "", i = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * i;
}
function IT(e, a) {
  const r = dp(e, "transitionDuration"), i = dp(e, "transitionDelay"), s = UT(e, (c) => {
    c.target === e && (s(), a(c));
  }, r + i);
}
function HT(e) {
  e.offsetHeight;
}
const xp = (e) => !e || typeof e == "function" ? e : (a) => {
  e.current = a;
};
function jT(e, a) {
  const r = xp(e), i = xp(a);
  return (s) => {
    r && r(s), i && i(s);
  };
}
function u0(e, a) {
  return ee.useMemo(() => jT(e, a), [e, a]);
}
function Kc(e) {
  return e && "setState" in e ? ps.findDOMNode(e) : e ?? null;
}
const zT = Mr.forwardRef(({ onEnter: e, onEntering: a, onEntered: r, onExit: i, onExiting: s, onExited: c, addEndListener: u, children: o, childRef: x, ...d }, v) => {
  const m = ee.useRef(null), g = u0(m, x), y = (z) => {
    g(Kc(z));
  }, T = (z) => (C) => {
    z && m.current && z(m.current, C);
  }, E = ee.useCallback(T(e), [e]), _ = ee.useCallback(T(a), [a]), O = ee.useCallback(T(r), [r]), F = ee.useCallback(T(i), [i]), k = ee.useCallback(T(s), [s]), M = ee.useCallback(T(c), [c]), X = ee.useCallback(T(u), [u]);
  return W.jsx(ln, { ref: v, ...d, onEnter: E, onEntered: O, onEntering: _, onExit: F, onExited: M, onExiting: k, addEndListener: X, nodeRef: m, children: typeof o == "function" ? (z, C) => o(z, { ...C, ref: y }) : Mr.cloneElement(o, { ref: y }) });
});
function PT(e) {
  const a = ee.useRef(e);
  return ee.useEffect(() => {
    a.current = e;
  }, [e]), a;
}
function Ch(e) {
  const a = PT(e);
  return ee.useCallback(function(...r) {
    return a.current && a.current(...r);
  }, [a]);
}
const bh = (e) => ee.forwardRef((a, r) => W.jsx("div", { ...a, ref: r, className: Ve(a.className, e) })), eg = bh("h4");
eg.displayName = "DivStyledAsH4";
const tg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = eg, ...i }, s) => (a = qe(a, "alert-heading"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
tg.displayName = "AlertHeading";
function ih() {
  return ee.useState(null);
}
function GT(e) {
  const a = ee.useRef(e);
  return ee.useEffect(() => {
    a.current = e;
  }, [e]), a;
}
function _a(e) {
  const a = GT(e);
  return ee.useCallback(function(...r) {
    return a.current && a.current(...r);
  }, [a]);
}
function VT(e, a, r, i = false) {
  const s = _a(r);
  ee.useEffect(() => {
    const c = typeof e == "function" ? e() : e;
    return c.addEventListener(a, s, i), () => c.removeEventListener(a, s, i);
  }, [e]);
}
function XT() {
  const e = ee.useRef(true), a = ee.useRef(() => e.current);
  return ee.useEffect(() => (e.current = true, () => {
    e.current = false;
  }), []), a.current;
}
function YT(e) {
  const a = ee.useRef(null);
  return ee.useEffect(() => {
    a.current = e;
  }), a.current;
}
const $T = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative", qT = typeof document < "u", vp = qT || $T ? ee.useLayoutEffect : ee.useEffect, KT = ["as", "disabled"];
function WT(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
function ZT(e) {
  return !e || e.trim() === "#";
}
function Oh({ tagName: e, disabled: a, href: r, target: i, rel: s, role: c, onClick: u, tabIndex: o = 0, type: x }) {
  e || (r != null || i != null || s != null ? e = "a" : e = "button");
  const d = { tagName: e };
  if (e === "button") return [{ type: x || "button", disabled: a }, d];
  const v = (g) => {
    if ((a || e === "a" && ZT(r)) && g.preventDefault(), a) {
      g.stopPropagation();
      return;
    }
    u == null ? void 0 : u(g);
  }, m = (g) => {
    g.key === " " && (g.preventDefault(), v(g));
  };
  return e === "a" && (r || (r = "#"), a && (r = void 0)), [{ role: c ?? "button", disabled: void 0, tabIndex: a ? void 0 : o, href: r, target: e === "a" ? i : void 0, "aria-disabled": a || void 0, rel: e === "a" ? s : void 0, onClick: v, onKeyDown: m }, d];
}
const rg = ee.forwardRef((e, a) => {
  let { as: r, disabled: i } = e, s = WT(e, KT);
  const [c, { tagName: u }] = Oh(Object.assign({ tagName: r, disabled: i }, s));
  return W.jsx(u, Object.assign({}, s, c, { ref: a }));
});
rg.displayName = "Button";
const QT = ["onKeyDown"];
function JT(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
function e4(e) {
  return !e || e.trim() === "#";
}
const Rh = ee.forwardRef((e, a) => {
  let { onKeyDown: r } = e, i = JT(e, QT);
  const [s] = Oh(Object.assign({ tagName: "a" }, i)), c = _a((u) => {
    s.onKeyDown(u), r == null ? void 0 : r(u);
  });
  return e4(i.href) || i.role === "button" ? W.jsx("a", Object.assign({ ref: a }, i, s, { onKeyDown: c })) : W.jsx("a", Object.assign({ ref: a }, i, { onKeyDown: r }));
});
Rh.displayName = "Anchor";
const ag = ee.forwardRef(({ className: e, bsPrefix: a, as: r = Rh, ...i }, s) => (a = qe(a, "alert-link"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
ag.displayName = "AlertLink";
const t4 = { [Mn]: "show", [di]: "show" }, Zl = ee.forwardRef(({ className: e, children: a, transitionClasses: r = {}, onEnter: i, ...s }, c) => {
  const u = { in: false, timeout: 300, mountOnEnter: false, unmountOnExit: false, appear: false, ...s }, o = ee.useCallback((x, d) => {
    HT(x), i == null ? void 0 : i(x, d);
  }, [i]);
  return W.jsx(zT, { ref: c, addEndListener: IT, ...u, onEnter: o, childRef: f0(a), children: (x, d) => ee.cloneElement(a, { ...d, className: Ve("fade", e, a.props.className, t4[x], r[x]) }) });
});
Zl.displayName = "Fade";
const r4 = { "aria-label": Fa.string, onClick: Fa.func, variant: Fa.oneOf(["white"]) }, Dh = ee.forwardRef(({ className: e, variant: a, "aria-label": r = "Close", ...i }, s) => W.jsx("button", { ref: s, type: "button", className: Ve("btn-close", a && `btn-close-${a}`, e), "aria-label": r, ...i }));
Dh.displayName = "CloseButton";
Dh.propTypes = r4;
const ng = ee.forwardRef((e, a) => {
  const { bsPrefix: r, show: i = true, closeLabel: s = "Close alert", closeVariant: c, className: u, children: o, variant: x = "primary", onClose: d, dismissible: v, transition: m = Zl, ...g } = qm(e, { show: "onClose" }), y = qe(r, "alert"), T = Ch((O) => {
    d && d(false, O);
  }), E = m === true ? Zl : m, _ = W.jsxs("div", { role: "alert", ...E ? void 0 : g, ref: a, className: Ve(u, y, x && `${y}-${x}`, v && `${y}-dismissible`), children: [v && W.jsx(Dh, { onClick: T, "aria-label": s, variant: c }), o] });
  return E ? W.jsx(E, { unmountOnExit: true, ...g, ref: void 0, in: i, children: _ }) : i ? _ : null;
});
ng.displayName = "Alert";
const a4 = Object.assign(ng, { Link: ag, Heading: tg }), Bn = ee.forwardRef(({ as: e, bsPrefix: a, variant: r = "primary", size: i, active: s = false, disabled: c = false, className: u, ...o }, x) => {
  const d = qe(a, "btn"), [v, { tagName: m }] = Oh({ tagName: e, disabled: c, ...o }), g = m;
  return W.jsx(g, { ...v, ...o, ref: x, disabled: c, className: Ve(u, d, s && "active", r && `${d}-${r}`, i && `${d}-${i}`, o.href && c && "disabled") });
});
Bn.displayName = "Button";
const ig = ee.forwardRef(({ bsPrefix: e, size: a, vertical: r = false, className: i, role: s = "group", as: c = "div", ...u }, o) => {
  const x = qe(e, "btn-group");
  let d = x;
  return r && (d = `${x}-vertical`), W.jsx(c, { ...u, ref: o, role: s, className: Ve(i, d, a && `${x}-${a}`) });
});
ig.displayName = "ButtonGroup";
const Fh = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "card-body"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
Fh.displayName = "CardBody";
const sg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "card-footer"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
sg.displayName = "CardFooter";
const lg = ee.createContext(null);
lg.displayName = "CardHeaderContext";
const cg = ee.forwardRef(({ bsPrefix: e, className: a, as: r = "div", ...i }, s) => {
  const c = qe(e, "card-header"), u = ee.useMemo(() => ({ cardHeaderBsPrefix: c }), [c]);
  return W.jsx(lg.Provider, { value: u, children: W.jsx(r, { ref: s, ...i, className: Ve(a, c) }) });
});
cg.displayName = "CardHeader";
const fg = ee.forwardRef(({ bsPrefix: e, className: a, variant: r, as: i = "img", ...s }, c) => {
  const u = qe(e, "card-img");
  return W.jsx(i, { ref: c, className: Ve(r ? `${u}-${r}` : u, a), ...s });
});
fg.displayName = "CardImg";
const ug = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "card-img-overlay"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
ug.displayName = "CardImgOverlay";
const og = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "a", ...i }, s) => (a = qe(a, "card-link"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
og.displayName = "CardLink";
const n4 = bh("h6"), hg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = n4, ...i }, s) => (a = qe(a, "card-subtitle"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
hg.displayName = "CardSubtitle";
const dg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "p", ...i }, s) => (a = qe(a, "card-text"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
dg.displayName = "CardText";
const i4 = bh("h5"), xg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = i4, ...i }, s) => (a = qe(a, "card-title"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
xg.displayName = "CardTitle";
const vg = ee.forwardRef(({ bsPrefix: e, className: a, bg: r, text: i, border: s, body: c = false, children: u, as: o = "div", ...x }, d) => {
  const v = qe(e, "card");
  return W.jsx(o, { ref: d, ...x, className: Ve(a, v, r && `bg-${r}`, i && `text-${i}`, s && `border-${s}`), children: c ? W.jsx(Fh, { children: u }) : u });
});
vg.displayName = "Card";
const Ja = Object.assign(vg, { Img: fg, Title: xg, Subtitle: hg, Body: Fh, Link: og, Text: dg, Header: cg, Footer: sg, ImgOverlay: ug });
function s4() {
  const e = ee.useRef(true), a = ee.useRef(() => e.current);
  return ee.useEffect(() => (e.current = true, () => {
    e.current = false;
  }), []), a.current;
}
function l4(e) {
  const a = ee.useRef(e);
  return a.current = e, a;
}
function c4(e) {
  const a = l4(e);
  ee.useEffect(() => () => a.current(), []);
}
const sh = 2 ** 31 - 1;
function pg(e, a, r) {
  const i = r - Date.now();
  e.current = i <= sh ? setTimeout(a, i) : setTimeout(() => pg(e, a, r), sh);
}
function f4() {
  const e = s4(), a = ee.useRef();
  return c4(() => clearTimeout(a.current)), ee.useMemo(() => {
    const r = () => clearTimeout(a.current);
    function i(s, c = 0) {
      e() && (r(), c <= sh ? a.current = setTimeout(s, c) : pg(a, s, Date.now() + c));
    }
    return { set: i, clear: r, handleRef: a };
  }, []);
}
function u4(e, a) {
  return ee.Children.toArray(e).some((r) => ee.isValidElement(r) && r.type === a);
}
function o4({ as: e, bsPrefix: a, className: r, ...i }) {
  a = qe(a, "col");
  const s = Km(), c = Wm(), u = [], o = [];
  return s.forEach((x) => {
    const d = i[x];
    delete i[x];
    let v, m, g;
    typeof d == "object" && d != null ? { span: v, offset: m, order: g } = d : v = d;
    const y = x !== c ? `-${x}` : "";
    v && u.push(v === true ? `${a}${y}` : `${a}${y}-${v}`), g != null && o.push(`order${y}-${g}`), m != null && o.push(`offset${y}-${m}`);
  }), [{ ...i, className: Ve(r, ...u, ...o) }, { as: e, bsPrefix: a, spans: u }];
}
const Hn = ee.forwardRef((e, a) => {
  const [{ className: r, ...i }, { as: s = "div", bsPrefix: c, spans: u }] = o4(e);
  return W.jsx(s, { ...i, ref: a, className: Ve(r, !u.length && c) });
});
Hn.displayName = "Col";
const mg = ee.forwardRef(({ bsPrefix: e, fluid: a = false, as: r = "div", className: i, ...s }, c) => {
  const u = qe(e, "container"), o = typeof a == "string" ? `-${a}` : "-fluid";
  return W.jsx(r, { ref: c, ...s, className: Ve(i, a ? `${u}${o}` : u) });
});
mg.displayName = "Container";
var h4 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function pp(e, a) {
  return h4(e.querySelectorAll(a));
}
function d4(e, a, r) {
  const i = ee.useRef(e !== void 0), [s, c] = ee.useState(a), u = e !== void 0, o = i.current;
  return i.current = u, !u && o && s !== a && c(a), [u ? e : s, ee.useCallback((...x) => {
    const [d, ...v] = x;
    let m = r == null ? void 0 : r(d, ...v);
    return c(d), m;
  }, [r])];
}
function x4() {
  const [, e] = ee.useReducer((a) => a + 1, 0);
  return e;
}
const df = ee.createContext(null);
var mp = Object.prototype.hasOwnProperty;
function gp(e, a, r) {
  for (r of e.keys()) if (Hl(r, a)) return r;
}
function Hl(e, a) {
  var r, i, s;
  if (e === a) return true;
  if (e && a && (r = e.constructor) === a.constructor) {
    if (r === Date) return e.getTime() === a.getTime();
    if (r === RegExp) return e.toString() === a.toString();
    if (r === Array) {
      if ((i = e.length) === a.length) for (; i-- && Hl(e[i], a[i]); ) ;
      return i === -1;
    }
    if (r === Set) {
      if (e.size !== a.size) return false;
      for (i of e) if (s = i, s && typeof s == "object" && (s = gp(a, s), !s) || !a.has(s)) return false;
      return true;
    }
    if (r === Map) {
      if (e.size !== a.size) return false;
      for (i of e) if (s = i[0], s && typeof s == "object" && (s = gp(a, s), !s) || !Hl(i[1], a.get(s))) return false;
      return true;
    }
    if (r === ArrayBuffer) e = new Uint8Array(e), a = new Uint8Array(a);
    else if (r === DataView) {
      if ((i = e.byteLength) === a.byteLength) for (; i-- && e.getInt8(i) === a.getInt8(i); ) ;
      return i === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((i = e.byteLength) === a.byteLength) for (; i-- && e[i] === a[i]; ) ;
      return i === -1;
    }
    if (!r || typeof e == "object") {
      i = 0;
      for (r in e) if (mp.call(e, r) && ++i && !mp.call(a, r) || !(r in a) || !Hl(e[r], a[r])) return false;
      return Object.keys(a).length === i;
    }
  }
  return e !== e && a !== a;
}
function v4(e) {
  const a = XT();
  return [e[0], ee.useCallback((r) => {
    if (a()) return e[1](r);
  }, [a, e[1]])];
}
var Lr = "top", la = "bottom", ca = "right", Br = "left", Nh = "auto", o0 = [Lr, la, ca, Br], _s = "start", Ql = "end", p4 = "clippingParents", gg = "viewport", Nl = "popper", m4 = "reference", yp = o0.reduce(function(e, a) {
  return e.concat([a + "-" + _s, a + "-" + Ql]);
}, []), yg = [].concat(o0, [Nh]).reduce(function(e, a) {
  return e.concat([a, a + "-" + _s, a + "-" + Ql]);
}, []), g4 = "beforeRead", y4 = "read", E4 = "afterRead", _4 = "beforeMain", T4 = "main", w4 = "afterMain", S4 = "beforeWrite", A4 = "write", k4 = "afterWrite", C4 = [g4, y4, E4, _4, T4, w4, S4, A4, k4];
function Na(e) {
  return e.split("-")[0];
}
function Yr(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var a = e.ownerDocument;
    return a && a.defaultView || window;
  }
  return e;
}
function _i(e) {
  var a = Yr(e).Element;
  return e instanceof a || e instanceof Element;
}
function Ma(e) {
  var a = Yr(e).HTMLElement;
  return e instanceof a || e instanceof HTMLElement;
}
function Mh(e) {
  if (typeof ShadowRoot > "u") return false;
  var a = Yr(e).ShadowRoot;
  return e instanceof a || e instanceof ShadowRoot;
}
var gi = Math.max, Wc = Math.min, Ts = Math.round;
function lh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(a) {
    return a.brand + "/" + a.version;
  }).join(" ") : navigator.userAgent;
}
function Eg() {
  return !/^((?!chrome|android).)*safari/i.test(lh());
}
function ws(e, a, r) {
  a === void 0 && (a = false), r === void 0 && (r = false);
  var i = e.getBoundingClientRect(), s = 1, c = 1;
  a && Ma(e) && (s = e.offsetWidth > 0 && Ts(i.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && Ts(i.height) / e.offsetHeight || 1);
  var u = _i(e) ? Yr(e) : window, o = u.visualViewport, x = !Eg() && r, d = (i.left + (x && o ? o.offsetLeft : 0)) / s, v = (i.top + (x && o ? o.offsetTop : 0)) / c, m = i.width / s, g = i.height / c;
  return { width: m, height: g, top: v, right: d + m, bottom: v + g, left: d, x: d, y: v };
}
function Lh(e) {
  var a = ws(e), r = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(a.width - r) <= 1 && (r = a.width), Math.abs(a.height - i) <= 1 && (i = a.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: i };
}
function _g(e, a) {
  var r = a.getRootNode && a.getRootNode();
  if (e.contains(a)) return true;
  if (r && Mh(r)) {
    var i = a;
    do {
      if (i && e.isSameNode(i)) return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
function zn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function an(e) {
  return Yr(e).getComputedStyle(e);
}
function b4(e) {
  return ["table", "td", "th"].indexOf(zn(e)) >= 0;
}
function Vn(e) {
  return ((_i(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function xf(e) {
  return zn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Mh(e) ? e.host : null) || Vn(e);
}
function Ep(e) {
  return !Ma(e) || an(e).position === "fixed" ? null : e.offsetParent;
}
function O4(e) {
  var a = /firefox/i.test(lh()), r = /Trident/i.test(lh());
  if (r && Ma(e)) {
    var i = an(e);
    if (i.position === "fixed") return null;
  }
  var s = xf(e);
  for (Mh(s) && (s = s.host); Ma(s) && ["html", "body"].indexOf(zn(s)) < 0; ) {
    var c = an(s);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || a && c.willChange === "filter" || a && c.filter && c.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function h0(e) {
  for (var a = Yr(e), r = Ep(e); r && b4(r) && an(r).position === "static"; ) r = Ep(r);
  return r && (zn(r) === "html" || zn(r) === "body" && an(r).position === "static") ? a : r || O4(e) || a;
}
function Bh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function jl(e, a, r) {
  return gi(e, Wc(a, r));
}
function R4(e, a, r) {
  var i = jl(e, a, r);
  return i > r ? r : i;
}
function Tg() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function wg(e) {
  return Object.assign({}, Tg(), e);
}
function Sg(e, a) {
  return a.reduce(function(r, i) {
    return r[i] = e, r;
  }, {});
}
var D4 = function(a, r) {
  return a = typeof a == "function" ? a(Object.assign({}, r.rects, { placement: r.placement })) : a, wg(typeof a != "number" ? a : Sg(a, o0));
};
function F4(e) {
  var a, r = e.state, i = e.name, s = e.options, c = r.elements.arrow, u = r.modifiersData.popperOffsets, o = Na(r.placement), x = Bh(o), d = [Br, ca].indexOf(o) >= 0, v = d ? "height" : "width";
  if (!(!c || !u)) {
    var m = D4(s.padding, r), g = Lh(c), y = x === "y" ? Lr : Br, T = x === "y" ? la : ca, E = r.rects.reference[v] + r.rects.reference[x] - u[x] - r.rects.popper[v], _ = u[x] - r.rects.reference[x], O = h0(c), F = O ? x === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, k = E / 2 - _ / 2, M = m[y], X = F - g[v] - m[T], z = F / 2 - g[v] / 2 + k, C = jl(M, z, X), S = x;
    r.modifiersData[i] = (a = {}, a[S] = C, a.centerOffset = C - z, a);
  }
}
function N4(e) {
  var a = e.state, r = e.options, i = r.element, s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null && (typeof s == "string" && (s = a.elements.popper.querySelector(s), !s) || _g(a.elements.popper, s) && (a.elements.arrow = s));
}
const M4 = { name: "arrow", enabled: true, phase: "main", fn: F4, effect: N4, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ss(e) {
  return e.split("-")[1];
}
var L4 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function B4(e, a) {
  var r = e.x, i = e.y, s = a.devicePixelRatio || 1;
  return { x: Ts(r * s) / s || 0, y: Ts(i * s) / s || 0 };
}
function _p(e) {
  var a, r = e.popper, i = e.popperRect, s = e.placement, c = e.variation, u = e.offsets, o = e.position, x = e.gpuAcceleration, d = e.adaptive, v = e.roundOffsets, m = e.isFixed, g = u.x, y = g === void 0 ? 0 : g, T = u.y, E = T === void 0 ? 0 : T, _ = typeof v == "function" ? v({ x: y, y: E }) : { x: y, y: E };
  y = _.x, E = _.y;
  var O = u.hasOwnProperty("x"), F = u.hasOwnProperty("y"), k = Br, M = Lr, X = window;
  if (d) {
    var z = h0(r), C = "clientHeight", S = "clientWidth";
    if (z === Yr(r) && (z = Vn(r), an(z).position !== "static" && o === "absolute" && (C = "scrollHeight", S = "scrollWidth")), z = z, s === Lr || (s === Br || s === ca) && c === Ql) {
      M = la;
      var w = m && z === X && X.visualViewport ? X.visualViewport.height : z[C];
      E -= w - i.height, E *= x ? 1 : -1;
    }
    if (s === Br || (s === Lr || s === la) && c === Ql) {
      k = ca;
      var N = m && z === X && X.visualViewport ? X.visualViewport.width : z[S];
      y -= N - i.width, y *= x ? 1 : -1;
    }
  }
  var B = Object.assign({ position: o }, d && L4), U = v === true ? B4({ x: y, y: E }, Yr(r)) : { x: y, y: E };
  if (y = U.x, E = U.y, x) {
    var ne;
    return Object.assign({}, B, (ne = {}, ne[M] = F ? "0" : "", ne[k] = O ? "0" : "", ne.transform = (X.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + E + "px)" : "translate3d(" + y + "px, " + E + "px, 0)", ne));
  }
  return Object.assign({}, B, (a = {}, a[M] = F ? E + "px" : "", a[k] = O ? y + "px" : "", a.transform = "", a));
}
function U4(e) {
  var a = e.state, r = e.options, i = r.gpuAcceleration, s = i === void 0 ? true : i, c = r.adaptive, u = c === void 0 ? true : c, o = r.roundOffsets, x = o === void 0 ? true : o, d = { placement: Na(a.placement), variation: Ss(a.placement), popper: a.elements.popper, popperRect: a.rects.popper, gpuAcceleration: s, isFixed: a.options.strategy === "fixed" };
  a.modifiersData.popperOffsets != null && (a.styles.popper = Object.assign({}, a.styles.popper, _p(Object.assign({}, d, { offsets: a.modifiersData.popperOffsets, position: a.options.strategy, adaptive: u, roundOffsets: x })))), a.modifiersData.arrow != null && (a.styles.arrow = Object.assign({}, a.styles.arrow, _p(Object.assign({}, d, { offsets: a.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: x })))), a.attributes.popper = Object.assign({}, a.attributes.popper, { "data-popper-placement": a.placement });
}
const I4 = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: U4, data: {} };
var Mc = { passive: true };
function H4(e) {
  var a = e.state, r = e.instance, i = e.options, s = i.scroll, c = s === void 0 ? true : s, u = i.resize, o = u === void 0 ? true : u, x = Yr(a.elements.popper), d = [].concat(a.scrollParents.reference, a.scrollParents.popper);
  return c && d.forEach(function(v) {
    v.addEventListener("scroll", r.update, Mc);
  }), o && x.addEventListener("resize", r.update, Mc), function() {
    c && d.forEach(function(v) {
      v.removeEventListener("scroll", r.update, Mc);
    }), o && x.removeEventListener("resize", r.update, Mc);
  };
}
const j4 = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: H4, data: {} };
var z4 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vc(e) {
  return e.replace(/left|right|bottom|top/g, function(a) {
    return z4[a];
  });
}
var P4 = { start: "end", end: "start" };
function Tp(e) {
  return e.replace(/start|end/g, function(a) {
    return P4[a];
  });
}
function Uh(e) {
  var a = Yr(e), r = a.pageXOffset, i = a.pageYOffset;
  return { scrollLeft: r, scrollTop: i };
}
function Ih(e) {
  return ws(Vn(e)).left + Uh(e).scrollLeft;
}
function G4(e, a) {
  var r = Yr(e), i = Vn(e), s = r.visualViewport, c = i.clientWidth, u = i.clientHeight, o = 0, x = 0;
  if (s) {
    c = s.width, u = s.height;
    var d = Eg();
    (d || !d && a === "fixed") && (o = s.offsetLeft, x = s.offsetTop);
  }
  return { width: c, height: u, x: o + Ih(e), y: x };
}
function V4(e) {
  var a, r = Vn(e), i = Uh(e), s = (a = e.ownerDocument) == null ? void 0 : a.body, c = gi(r.scrollWidth, r.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), u = gi(r.scrollHeight, r.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), o = -i.scrollLeft + Ih(e), x = -i.scrollTop;
  return an(s || r).direction === "rtl" && (o += gi(r.clientWidth, s ? s.clientWidth : 0) - c), { width: c, height: u, x: o, y: x };
}
function Hh(e) {
  var a = an(e), r = a.overflow, i = a.overflowX, s = a.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + s + i);
}
function Ag(e) {
  return ["html", "body", "#document"].indexOf(zn(e)) >= 0 ? e.ownerDocument.body : Ma(e) && Hh(e) ? e : Ag(xf(e));
}
function zl(e, a) {
  var r;
  a === void 0 && (a = []);
  var i = Ag(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), c = Yr(i), u = s ? [c].concat(c.visualViewport || [], Hh(i) ? i : []) : i, o = a.concat(u);
  return s ? o : o.concat(zl(xf(u)));
}
function ch(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function X4(e, a) {
  var r = ws(e, false, a === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function wp(e, a, r) {
  return a === gg ? ch(G4(e, r)) : _i(a) ? X4(a, r) : ch(V4(Vn(e)));
}
function Y4(e) {
  var a = zl(xf(e)), r = ["absolute", "fixed"].indexOf(an(e).position) >= 0, i = r && Ma(e) ? h0(e) : e;
  return _i(i) ? a.filter(function(s) {
    return _i(s) && _g(s, i) && zn(s) !== "body";
  }) : [];
}
function $4(e, a, r, i) {
  var s = a === "clippingParents" ? Y4(e) : [].concat(a), c = [].concat(s, [r]), u = c[0], o = c.reduce(function(x, d) {
    var v = wp(e, d, i);
    return x.top = gi(v.top, x.top), x.right = Wc(v.right, x.right), x.bottom = Wc(v.bottom, x.bottom), x.left = gi(v.left, x.left), x;
  }, wp(e, u, i));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function kg(e) {
  var a = e.reference, r = e.element, i = e.placement, s = i ? Na(i) : null, c = i ? Ss(i) : null, u = a.x + a.width / 2 - r.width / 2, o = a.y + a.height / 2 - r.height / 2, x;
  switch (s) {
    case Lr:
      x = { x: u, y: a.y - r.height };
      break;
    case la:
      x = { x: u, y: a.y + a.height };
      break;
    case ca:
      x = { x: a.x + a.width, y: o };
      break;
    case Br:
      x = { x: a.x - r.width, y: o };
      break;
    default:
      x = { x: a.x, y: a.y };
  }
  var d = s ? Bh(s) : null;
  if (d != null) {
    var v = d === "y" ? "height" : "width";
    switch (c) {
      case _s:
        x[d] = x[d] - (a[v] / 2 - r[v] / 2);
        break;
      case Ql:
        x[d] = x[d] + (a[v] / 2 - r[v] / 2);
        break;
    }
  }
  return x;
}
function Jl(e, a) {
  a === void 0 && (a = {});
  var r = a, i = r.placement, s = i === void 0 ? e.placement : i, c = r.strategy, u = c === void 0 ? e.strategy : c, o = r.boundary, x = o === void 0 ? p4 : o, d = r.rootBoundary, v = d === void 0 ? gg : d, m = r.elementContext, g = m === void 0 ? Nl : m, y = r.altBoundary, T = y === void 0 ? false : y, E = r.padding, _ = E === void 0 ? 0 : E, O = wg(typeof _ != "number" ? _ : Sg(_, o0)), F = g === Nl ? m4 : Nl, k = e.rects.popper, M = e.elements[T ? F : g], X = $4(_i(M) ? M : M.contextElement || Vn(e.elements.popper), x, v, u), z = ws(e.elements.reference), C = kg({ reference: z, element: k, placement: s }), S = ch(Object.assign({}, k, C)), w = g === Nl ? S : z, N = { top: X.top - w.top + O.top, bottom: w.bottom - X.bottom + O.bottom, left: X.left - w.left + O.left, right: w.right - X.right + O.right }, B = e.modifiersData.offset;
  if (g === Nl && B) {
    var U = B[s];
    Object.keys(N).forEach(function(ne) {
      var ge = [ca, la].indexOf(ne) >= 0 ? 1 : -1, fe = [Lr, la].indexOf(ne) >= 0 ? "y" : "x";
      N[ne] += U[fe] * ge;
    });
  }
  return N;
}
function q4(e, a) {
  a === void 0 && (a = {});
  var r = a, i = r.placement, s = r.boundary, c = r.rootBoundary, u = r.padding, o = r.flipVariations, x = r.allowedAutoPlacements, d = x === void 0 ? yg : x, v = Ss(i), m = v ? o ? yp : yp.filter(function(T) {
    return Ss(T) === v;
  }) : o0, g = m.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  g.length === 0 && (g = m);
  var y = g.reduce(function(T, E) {
    return T[E] = Jl(e, { placement: E, boundary: s, rootBoundary: c, padding: u })[Na(E)], T;
  }, {});
  return Object.keys(y).sort(function(T, E) {
    return y[T] - y[E];
  });
}
function K4(e) {
  if (Na(e) === Nh) return [];
  var a = Vc(e);
  return [Tp(e), a, Tp(a)];
}
function W4(e) {
  var a = e.state, r = e.options, i = e.name;
  if (!a.modifiersData[i]._skip) {
    for (var s = r.mainAxis, c = s === void 0 ? true : s, u = r.altAxis, o = u === void 0 ? true : u, x = r.fallbackPlacements, d = r.padding, v = r.boundary, m = r.rootBoundary, g = r.altBoundary, y = r.flipVariations, T = y === void 0 ? true : y, E = r.allowedAutoPlacements, _ = a.options.placement, O = Na(_), F = O === _, k = x || (F || !T ? [Vc(_)] : K4(_)), M = [_].concat(k).reduce(function(q, K) {
      return q.concat(Na(K) === Nh ? q4(a, { placement: K, boundary: v, rootBoundary: m, padding: d, flipVariations: T, allowedAutoPlacements: E }) : K);
    }, []), X = a.rects.reference, z = a.rects.popper, C = /* @__PURE__ */ new Map(), S = true, w = M[0], N = 0; N < M.length; N++) {
      var B = M[N], U = Na(B), ne = Ss(B) === _s, ge = [Lr, la].indexOf(U) >= 0, fe = ge ? "width" : "height", J = Jl(a, { placement: B, boundary: v, rootBoundary: m, altBoundary: g, padding: d }), ae = ge ? ne ? ca : Br : ne ? la : Lr;
      X[fe] > z[fe] && (ae = Vc(ae));
      var we = Vc(ae), Q = [];
      if (c && Q.push(J[U] <= 0), o && Q.push(J[ae] <= 0, J[we] <= 0), Q.every(function(q) {
        return q;
      })) {
        w = B, S = false;
        break;
      }
      C.set(B, Q);
    }
    if (S) for (var H = T ? 3 : 1, re = function(K) {
      var ie = M.find(function(Ae) {
        var pe = C.get(Ae);
        if (pe) return pe.slice(0, K).every(function(ye) {
          return ye;
        });
      });
      if (ie) return w = ie, "break";
    }, R = H; R > 0; R--) {
      var j = re(R);
      if (j === "break") break;
    }
    a.placement !== w && (a.modifiersData[i]._skip = true, a.placement = w, a.reset = true);
  }
}
const Z4 = { name: "flip", enabled: true, phase: "main", fn: W4, requiresIfExists: ["offset"], data: { _skip: false } };
function Sp(e, a, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e.top - a.height - r.y, right: e.right - a.width + r.x, bottom: e.bottom - a.height + r.y, left: e.left - a.width - r.x };
}
function Ap(e) {
  return [Lr, ca, la, Br].some(function(a) {
    return e[a] >= 0;
  });
}
function Q4(e) {
  var a = e.state, r = e.name, i = a.rects.reference, s = a.rects.popper, c = a.modifiersData.preventOverflow, u = Jl(a, { elementContext: "reference" }), o = Jl(a, { altBoundary: true }), x = Sp(u, i), d = Sp(o, s, c), v = Ap(x), m = Ap(d);
  a.modifiersData[r] = { referenceClippingOffsets: x, popperEscapeOffsets: d, isReferenceHidden: v, hasPopperEscaped: m }, a.attributes.popper = Object.assign({}, a.attributes.popper, { "data-popper-reference-hidden": v, "data-popper-escaped": m });
}
const J4 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Q4 };
function ew(e, a, r) {
  var i = Na(e), s = [Br, Lr].indexOf(i) >= 0 ? -1 : 1, c = typeof r == "function" ? r(Object.assign({}, a, { placement: e })) : r, u = c[0], o = c[1];
  return u = u || 0, o = (o || 0) * s, [Br, ca].indexOf(i) >= 0 ? { x: o, y: u } : { x: u, y: o };
}
function tw(e) {
  var a = e.state, r = e.options, i = e.name, s = r.offset, c = s === void 0 ? [0, 0] : s, u = yg.reduce(function(v, m) {
    return v[m] = ew(m, a.rects, c), v;
  }, {}), o = u[a.placement], x = o.x, d = o.y;
  a.modifiersData.popperOffsets != null && (a.modifiersData.popperOffsets.x += x, a.modifiersData.popperOffsets.y += d), a.modifiersData[i] = u;
}
const rw = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tw };
function aw(e) {
  var a = e.state, r = e.name;
  a.modifiersData[r] = kg({ reference: a.rects.reference, element: a.rects.popper, placement: a.placement });
}
const nw = { name: "popperOffsets", enabled: true, phase: "read", fn: aw, data: {} };
function iw(e) {
  return e === "x" ? "y" : "x";
}
function sw(e) {
  var a = e.state, r = e.options, i = e.name, s = r.mainAxis, c = s === void 0 ? true : s, u = r.altAxis, o = u === void 0 ? false : u, x = r.boundary, d = r.rootBoundary, v = r.altBoundary, m = r.padding, g = r.tether, y = g === void 0 ? true : g, T = r.tetherOffset, E = T === void 0 ? 0 : T, _ = Jl(a, { boundary: x, rootBoundary: d, padding: m, altBoundary: v }), O = Na(a.placement), F = Ss(a.placement), k = !F, M = Bh(O), X = iw(M), z = a.modifiersData.popperOffsets, C = a.rects.reference, S = a.rects.popper, w = typeof E == "function" ? E(Object.assign({}, a.rects, { placement: a.placement })) : E, N = typeof w == "number" ? { mainAxis: w, altAxis: w } : Object.assign({ mainAxis: 0, altAxis: 0 }, w), B = a.modifiersData.offset ? a.modifiersData.offset[a.placement] : null, U = { x: 0, y: 0 };
  if (z) {
    if (c) {
      var ne, ge = M === "y" ? Lr : Br, fe = M === "y" ? la : ca, J = M === "y" ? "height" : "width", ae = z[M], we = ae + _[ge], Q = ae - _[fe], H = y ? -S[J] / 2 : 0, re = F === _s ? C[J] : S[J], R = F === _s ? -S[J] : -C[J], j = a.elements.arrow, q = y && j ? Lh(j) : { width: 0, height: 0 }, K = a.modifiersData["arrow#persistent"] ? a.modifiersData["arrow#persistent"].padding : Tg(), ie = K[ge], Ae = K[fe], pe = jl(0, C[J], q[J]), ye = k ? C[J] / 2 - H - pe - ie - N.mainAxis : re - pe - ie - N.mainAxis, _e = k ? -C[J] / 2 + H + pe + Ae + N.mainAxis : R + pe + Ae + N.mainAxis, Re = a.elements.arrow && h0(a.elements.arrow), V = Re ? M === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, Ge = (ne = B == null ? void 0 : B[M]) != null ? ne : 0, Le = ae + ye - Ge - V, Be = ae + _e - Ge, De = jl(y ? Wc(we, Le) : we, ae, y ? gi(Q, Be) : Q);
      z[M] = De, U[M] = De - ae;
    }
    if (o) {
      var ke, Ie = M === "x" ? Lr : Br, Ke = M === "x" ? la : ca, Ze = z[X], At = X === "y" ? "height" : "width", It = Ze + _[Ie], Pt = Ze - _[Ke], it = [Lr, Br].indexOf(O) !== -1, Ot = (ke = B == null ? void 0 : B[X]) != null ? ke : 0, st = it ? It : Ze - C[At] - S[At] - Ot + N.altAxis, tt = it ? Ze + C[At] + S[At] - Ot - N.altAxis : Pt, rt = y && it ? R4(st, Ze, tt) : jl(y ? st : It, Ze, y ? tt : Pt);
      z[X] = rt, U[X] = rt - Ze;
    }
    a.modifiersData[i] = U;
  }
}
const lw = { name: "preventOverflow", enabled: true, phase: "main", fn: sw, requiresIfExists: ["offset"] };
function cw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function fw(e) {
  return e === Yr(e) || !Ma(e) ? Uh(e) : cw(e);
}
function uw(e) {
  var a = e.getBoundingClientRect(), r = Ts(a.width) / e.offsetWidth || 1, i = Ts(a.height) / e.offsetHeight || 1;
  return r !== 1 || i !== 1;
}
function ow(e, a, r) {
  r === void 0 && (r = false);
  var i = Ma(a), s = Ma(a) && uw(a), c = Vn(a), u = ws(e, s, r), o = { scrollLeft: 0, scrollTop: 0 }, x = { x: 0, y: 0 };
  return (i || !i && !r) && ((zn(a) !== "body" || Hh(c)) && (o = fw(a)), Ma(a) ? (x = ws(a, true), x.x += a.clientLeft, x.y += a.clientTop) : c && (x.x = Ih(c))), { x: u.left + o.scrollLeft - x.x, y: u.top + o.scrollTop - x.y, width: u.width, height: u.height };
}
function hw(e) {
  var a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = [];
  e.forEach(function(c) {
    a.set(c.name, c);
  });
  function s(c) {
    r.add(c.name);
    var u = [].concat(c.requires || [], c.requiresIfExists || []);
    u.forEach(function(o) {
      if (!r.has(o)) {
        var x = a.get(o);
        x && s(x);
      }
    }), i.push(c);
  }
  return e.forEach(function(c) {
    r.has(c.name) || s(c);
  }), i;
}
function dw(e) {
  var a = hw(e);
  return C4.reduce(function(r, i) {
    return r.concat(a.filter(function(s) {
      return s.phase === i;
    }));
  }, []);
}
function xw(e) {
  var a;
  return function() {
    return a || (a = new Promise(function(r) {
      Promise.resolve().then(function() {
        a = void 0, r(e());
      });
    })), a;
  };
}
function vw(e) {
  var a = e.reduce(function(r, i) {
    var s = r[i.name];
    return r[i.name] = s ? Object.assign({}, s, i, { options: Object.assign({}, s.options, i.options), data: Object.assign({}, s.data, i.data) }) : i, r;
  }, {});
  return Object.keys(a).map(function(r) {
    return a[r];
  });
}
var kp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Cp() {
  for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
  return !a.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function pw(e) {
  e === void 0 && (e = {});
  var a = e, r = a.defaultModifiers, i = r === void 0 ? [] : r, s = a.defaultOptions, c = s === void 0 ? kp : s;
  return function(o, x, d) {
    d === void 0 && (d = c);
    var v = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, kp, c), modifiersData: {}, elements: { reference: o, popper: x }, attributes: {}, styles: {} }, m = [], g = false, y = { state: v, setOptions: function(O) {
      var F = typeof O == "function" ? O(v.options) : O;
      E(), v.options = Object.assign({}, c, v.options, F), v.scrollParents = { reference: _i(o) ? zl(o) : o.contextElement ? zl(o.contextElement) : [], popper: zl(x) };
      var k = dw(vw([].concat(i, v.options.modifiers)));
      return v.orderedModifiers = k.filter(function(M) {
        return M.enabled;
      }), T(), y.update();
    }, forceUpdate: function() {
      if (!g) {
        var O = v.elements, F = O.reference, k = O.popper;
        if (Cp(F, k)) {
          v.rects = { reference: ow(F, h0(k), v.options.strategy === "fixed"), popper: Lh(k) }, v.reset = false, v.placement = v.options.placement, v.orderedModifiers.forEach(function(N) {
            return v.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var M = 0; M < v.orderedModifiers.length; M++) {
            if (v.reset === true) {
              v.reset = false, M = -1;
              continue;
            }
            var X = v.orderedModifiers[M], z = X.fn, C = X.options, S = C === void 0 ? {} : C, w = X.name;
            typeof z == "function" && (v = z({ state: v, options: S, name: w, instance: y }) || v);
          }
        }
      }
    }, update: xw(function() {
      return new Promise(function(_) {
        y.forceUpdate(), _(v);
      });
    }), destroy: function() {
      E(), g = true;
    } };
    if (!Cp(o, x)) return y;
    y.setOptions(d).then(function(_) {
      !g && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function T() {
      v.orderedModifiers.forEach(function(_) {
        var O = _.name, F = _.options, k = F === void 0 ? {} : F, M = _.effect;
        if (typeof M == "function") {
          var X = M({ state: v, name: O, instance: y, options: k }), z = function() {
          };
          m.push(X || z);
        }
      });
    }
    function E() {
      m.forEach(function(_) {
        return _();
      }), m = [];
    }
    return y;
  };
}
const mw = pw({ defaultModifiers: [J4, nw, I4, j4, rw, Z4, lw, M4] }), gw = ["enabled", "placement", "strategy", "modifiers"];
function yw(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
const Ew = { name: "applyStyles", enabled: false, phase: "afterWrite", fn: () => {
} }, _w = { name: "ariaDescribedBy", enabled: true, phase: "afterWrite", effect: ({ state: e }) => () => {
  const { reference: a, popper: r } = e.elements;
  if ("removeAttribute" in a) {
    const i = (a.getAttribute("aria-describedby") || "").split(",").filter((s) => s.trim() !== r.id);
    i.length ? a.setAttribute("aria-describedby", i.join(",")) : a.removeAttribute("aria-describedby");
  }
}, fn: ({ state: e }) => {
  var a;
  const { popper: r, reference: i } = e.elements, s = (a = r.getAttribute("role")) == null ? void 0 : a.toLowerCase();
  if (r.id && s === "tooltip" && "setAttribute" in i) {
    const c = i.getAttribute("aria-describedby");
    if (c && c.split(",").indexOf(r.id) !== -1) return;
    i.setAttribute("aria-describedby", c ? `${c},${r.id}` : r.id);
  }
} }, Tw = [];
function Cg(e, a, r = {}) {
  let { enabled: i = true, placement: s = "bottom", strategy: c = "absolute", modifiers: u = Tw } = r, o = yw(r, gw);
  const x = ee.useRef(u), d = ee.useRef(), v = ee.useCallback(() => {
    var _;
    (_ = d.current) == null || _.update();
  }, []), m = ee.useCallback(() => {
    var _;
    (_ = d.current) == null || _.forceUpdate();
  }, []), [g, y] = v4(ee.useState({ placement: s, update: v, forceUpdate: m, attributes: {}, styles: { popper: {}, arrow: {} } })), T = ee.useMemo(() => ({ name: "updateStateModifier", enabled: true, phase: "write", requires: ["computeStyles"], fn: ({ state: _ }) => {
    const O = {}, F = {};
    Object.keys(_.elements).forEach((k) => {
      O[k] = _.styles[k], F[k] = _.attributes[k];
    }), y({ state: _, styles: O, attributes: F, update: v, forceUpdate: m, placement: _.placement });
  } }), [v, m, y]), E = ee.useMemo(() => (Hl(x.current, u) || (x.current = u), x.current), [u]);
  return ee.useEffect(() => {
    !d.current || !i || d.current.setOptions({ placement: s, strategy: c, modifiers: [...E, T, Ew] });
  }, [c, s, T, i, E]), ee.useEffect(() => {
    if (!(!i || e == null || a == null)) return d.current = mw(e, a, Object.assign({}, o, { placement: s, strategy: c, modifiers: [...E, _w, T] })), () => {
      d.current != null && (d.current.destroy(), d.current = void 0, y((_) => Object.assign({}, _, { attributes: {}, styles: { popper: {} } })));
    };
  }, [i, e, a]), g;
}
function fh(e, a) {
  if (e.contains) return e.contains(a);
  if (e.compareDocumentPosition) return e === a || !!(e.compareDocumentPosition(a) & 16);
}
var Io, bp;
function ww() {
  if (bp) return Io;
  bp = 1;
  var e = function() {
  };
  return Io = e, Io;
}
var Sw = ww();
const Aw = bs(Sw), Op = () => {
};
function kw(e) {
  return e.button === 0;
}
function Cw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Xc = (e) => e && ("current" in e ? e.current : e), Rp = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function bg(e, a = Op, { disabled: r, clickTrigger: i = "click" } = {}) {
  const s = ee.useRef(false), c = ee.useRef(false), u = ee.useCallback((d) => {
    const v = Xc(e);
    Aw(!!v, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), s.current = !v || Cw(d) || !kw(d) || !!fh(v, d.target) || c.current, c.current = false;
  }, [e]), o = _a((d) => {
    const v = Xc(e);
    v && fh(v, d.target) ? c.current = true : c.current = false;
  }), x = _a((d) => {
    s.current || a(d);
  });
  ee.useEffect(() => {
    var d, v;
    if (r || e == null) return;
    const m = hf(Xc(e)), g = m.defaultView || window;
    let y = (d = g.event) != null ? d : (v = g.parent) == null ? void 0 : v.event, T = null;
    Rp[i] && (T = vi(m, Rp[i], o, true));
    const E = vi(m, i, u, true), _ = vi(m, i, (F) => {
      if (F === y) {
        y = void 0;
        return;
      }
      x(F);
    });
    let O = [];
    return "ontouchstart" in m.documentElement && (O = [].slice.call(m.body.children).map((F) => vi(F, "mousemove", Op))), () => {
      T == null ? void 0 : T(), E(), _(), O.forEach((F) => F());
    };
  }, [e, r, i, u, o, x]);
}
function bw(e) {
  const a = {};
  return Array.isArray(e) ? (e == null ? void 0 : e.forEach((r) => {
    a[r.name] = r;
  }), a) : e || a;
}
function Ow(e = {}) {
  return Array.isArray(e) ? e : Object.keys(e).map((a) => (e[a].name = a, e[a]));
}
function Og({ enabled: e, enableEvents: a, placement: r, flip: i, offset: s, fixed: c, containerPadding: u, arrowElement: o, popperConfig: x = {} }) {
  var d, v, m, g, y;
  const T = bw(x.modifiers);
  return Object.assign({}, x, { placement: r, enabled: e, strategy: c ? "fixed" : x.strategy, modifiers: Ow(Object.assign({}, T, { eventListeners: { enabled: a, options: (d = T.eventListeners) == null ? void 0 : d.options }, preventOverflow: Object.assign({}, T.preventOverflow, { options: u ? Object.assign({ padding: u }, (v = T.preventOverflow) == null ? void 0 : v.options) : (m = T.preventOverflow) == null ? void 0 : m.options }), offset: { options: Object.assign({ offset: s }, (g = T.offset) == null ? void 0 : g.options) }, arrow: Object.assign({}, T.arrow, { enabled: !!o, options: Object.assign({}, (y = T.arrow) == null ? void 0 : y.options, { element: o }) }), flip: Object.assign({ enabled: !!i }, T.flip) })) });
}
const Rw = ["children", "usePopper"];
function Dw(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
const Fw = () => {
};
function Rg(e = {}) {
  const a = ee.useContext(df), [r, i] = ih(), s = ee.useRef(false), { flip: c, offset: u, rootCloseEvent: o, fixed: x = false, placement: d, popperConfig: v = {}, enableEventListeners: m = true, usePopper: g = !!a } = e, y = (a == null ? void 0 : a.show) == null ? !!e.show : a.show;
  y && !s.current && (s.current = true);
  const T = (z) => {
    a == null ? void 0 : a.toggle(false, z);
  }, { placement: E, setMenu: _, menuElement: O, toggleElement: F } = a || {}, k = Cg(F, O, Og({ placement: d || E || "bottom-start", enabled: g, enableEvents: m ?? y, offset: u, flip: c, fixed: x, arrowElement: r, popperConfig: v })), M = Object.assign({ ref: _ || Fw, "aria-labelledby": F == null ? void 0 : F.id }, k.attributes.popper, { style: k.styles.popper }), X = { show: y, placement: E, hasShown: s.current, toggle: a == null ? void 0 : a.toggle, popper: g ? k : null, arrowProps: g ? Object.assign({ ref: i }, k.attributes.arrow, { style: k.styles.arrow }) : {} };
  return bg(O, T, { clickTrigger: o, disabled: !y }), [M, X];
}
function Dg(e) {
  let { children: a, usePopper: r = true } = e, i = Dw(e, Rw);
  const [s, c] = Rg(Object.assign({}, i, { usePopper: r }));
  return W.jsx(W.Fragment, { children: a(s, c) });
}
Dg.displayName = "DropdownMenu";
const Fg = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 }, Ng = Mr.createContext(Fg), Nw = Mr.createContext(false);
let Ho = /* @__PURE__ */ new WeakMap();
function Mw(e = false) {
  let a = ee.useContext(Ng), r = ee.useRef(null);
  if (r.current === null && !e) {
    var i, s;
    let c = (s = Mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || s === void 0 || (i = s.ReactCurrentOwner) === null || i === void 0 ? void 0 : i.current;
    if (c) {
      let u = Ho.get(c);
      u == null ? Ho.set(c, { id: a.current, state: c.memoizedState }) : c.memoizedState !== u.state && (a.current = u.id, Ho.delete(c));
    }
    r.current = ++a.current;
  }
  return r.current;
}
function Lw(e) {
  let a = ee.useContext(Ng), r = Mw(!!e), i = `react-aria${a.prefix}`;
  return e || `${i}-${r}`;
}
function Bw(e) {
  let a = Mr.useId(), [r] = ee.useState(zw()), i = r ? "react-aria" : `react-aria${Fg.prefix}`;
  return e || `${i}-${a}`;
}
const Uw = typeof Mr.useId == "function" ? Bw : Lw;
function Iw() {
  return false;
}
function Hw() {
  return true;
}
function jw(e) {
  return () => {
  };
}
function zw() {
  return typeof Mr.useSyncExternalStore == "function" ? Mr.useSyncExternalStore(jw, Iw, Hw) : ee.useContext(Nw);
}
const Mg = (e) => {
  var a;
  return ((a = e.getAttribute("role")) == null ? void 0 : a.toLowerCase()) === "menu";
}, Dp = () => {
};
function Lg() {
  const e = Uw(), { show: a = false, toggle: r = Dp, setToggle: i, menuElement: s } = ee.useContext(df) || {}, c = ee.useCallback((o) => {
    r(!a, o);
  }, [a, r]), u = { id: e, ref: i || Dp, onClick: c, "aria-expanded": !!a };
  return s && Mg(s) && (u["aria-haspopup"] = true), [u, { show: a, toggle: r }];
}
function Bg({ children: e }) {
  const [a, r] = Lg();
  return W.jsx(W.Fragment, { children: e(a, r) });
}
Bg.displayName = "DropdownToggle";
const uh = ee.createContext(null), Fp = (e, a = null) => e != null ? String(e) : a || null, Ug = ee.createContext(null);
Ug.displayName = "NavContext";
const Pw = "data-rr-ui-";
function Ig(e) {
  return `${Pw}${e}`;
}
const Gw = ["eventKey", "disabled", "onClick", "active", "as"];
function Vw(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
function Hg({ key: e, href: a, active: r, disabled: i, onClick: s }) {
  const c = ee.useContext(uh), u = ee.useContext(Ug), { activeKey: o } = u || {}, x = Fp(e, a), d = r == null && e != null ? Fp(o) === x : r;
  return [{ onClick: _a((m) => {
    i || (s == null ? void 0 : s(m), c && !m.isPropagationStopped() && c(x, m));
  }), "aria-disabled": i || void 0, "aria-selected": d, [Ig("dropdown-item")]: "" }, { isActive: d }];
}
const jg = ee.forwardRef((e, a) => {
  let { eventKey: r, disabled: i, onClick: s, active: c, as: u = rg } = e, o = Vw(e, Gw);
  const [x] = Hg({ key: r, href: o.href, disabled: i, onClick: s, active: c });
  return W.jsx(u, Object.assign({}, o, { ref: a }, x));
});
jg.displayName = "DropdownItem";
const zg = ee.createContext(kh ? window : void 0);
zg.Provider;
function Pg() {
  return ee.useContext(zg);
}
function Np() {
  const e = x4(), a = ee.useRef(null), r = ee.useCallback((i) => {
    a.current = i, e();
  }, [e]);
  return [a, r];
}
function d0({ defaultShow: e, show: a, onSelect: r, onToggle: i, itemSelector: s = `* [${Ig("dropdown-item")}]`, focusFirstItemOnShow: c, placement: u = "bottom-start", children: o }) {
  const x = Pg(), [d, v] = d4(a, e, i), [m, g] = Np(), y = m.current, [T, E] = Np(), _ = T.current, O = YT(d), F = ee.useRef(null), k = ee.useRef(false), M = ee.useContext(uh), X = ee.useCallback((B, U, ne = U == null ? void 0 : U.type) => {
    v(B, { originalEvent: U, source: ne });
  }, [v]), z = _a((B, U) => {
    r == null ? void 0 : r(B, U), X(false, U, "select"), U.isPropagationStopped() || (M == null ? void 0 : M(B, U));
  }), C = ee.useMemo(() => ({ toggle: X, placement: u, show: d, menuElement: y, toggleElement: _, setMenu: g, setToggle: E }), [X, u, d, y, _, g, E]);
  y && O && !d && (k.current = y.contains(y.ownerDocument.activeElement));
  const S = _a(() => {
    _ && _.focus && _.focus();
  }), w = _a(() => {
    const B = F.current;
    let U = c;
    if (U == null && (U = m.current && Mg(m.current) ? "keyboard" : false), U === false || U === "keyboard" && !/^key.+$/.test(B)) return;
    const ne = pp(m.current, s)[0];
    ne && ne.focus && ne.focus();
  });
  ee.useEffect(() => {
    d ? w() : k.current && (k.current = false, S());
  }, [d, k, S, w]), ee.useEffect(() => {
    F.current = null;
  });
  const N = (B, U) => {
    if (!m.current) return null;
    const ne = pp(m.current, s);
    let ge = ne.indexOf(B) + U;
    return ge = Math.max(0, Math.min(ge, ne.length)), ne[ge];
  };
  return VT(ee.useCallback(() => x.document, [x]), "keydown", (B) => {
    var U, ne;
    const { key: ge } = B, fe = B.target, J = (U = m.current) == null ? void 0 : U.contains(fe), ae = (ne = T.current) == null ? void 0 : ne.contains(fe);
    if (/input|textarea/i.test(fe.tagName) && (ge === " " || ge !== "Escape" && J || ge === "Escape" && fe.type === "search") || !J && !ae || ge === "Tab" && (!m.current || !d)) return;
    F.current = B.type;
    const Q = { originalEvent: B, source: B.type };
    switch (ge) {
      case "ArrowUp": {
        const H = N(fe, -1);
        H && H.focus && H.focus(), B.preventDefault();
        return;
      }
      case "ArrowDown":
        if (B.preventDefault(), !d) v(true, Q);
        else {
          const H = N(fe, 1);
          H && H.focus && H.focus();
        }
        return;
      case "Tab":
        Jm(fe.ownerDocument, "keyup", (H) => {
          var re;
          (H.key === "Tab" && !H.target || !((re = m.current) != null && re.contains(H.target))) && v(false, Q);
        }, { once: true });
        break;
      case "Escape":
        ge === "Escape" && (B.preventDefault(), B.stopPropagation()), v(false, Q);
        break;
    }
  }), W.jsx(uh.Provider, { value: z, children: W.jsx(df.Provider, { value: C, children: o }) });
}
d0.displayName = "Dropdown";
d0.Menu = Dg;
d0.Toggle = Bg;
d0.Item = jg;
const jh = ee.createContext({});
jh.displayName = "DropdownContext";
const Gg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "hr", role: i = "separator", ...s }, c) => (a = qe(a, "dropdown-divider"), W.jsx(r, { ref: c, className: Ve(e, a), role: i, ...s })));
Gg.displayName = "DropdownDivider";
const Vg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", role: i = "heading", ...s }, c) => (a = qe(a, "dropdown-header"), W.jsx(r, { ref: c, className: Ve(e, a), role: i, ...s })));
Vg.displayName = "DropdownHeader";
const Xg = ee.forwardRef(({ bsPrefix: e, className: a, eventKey: r, disabled: i = false, onClick: s, active: c, as: u = Rh, ...o }, x) => {
  const d = qe(e, "dropdown-item"), [v, m] = Hg({ key: r, href: o.href, disabled: i, onClick: s, active: c });
  return W.jsx(u, { ...o, ...v, ref: x, className: Ve(a, d, m.isActive && "active", i && "disabled") });
});
Xg.displayName = "DropdownItem";
const Yg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "span", ...i }, s) => (a = qe(a, "dropdown-item-text"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
Yg.displayName = "DropdownItemText";
const Xw = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative", Yw = typeof document < "u", $g = Yw || Xw ? ee.useLayoutEffect : ee.useEffect, zh = ee.createContext(null);
zh.displayName = "InputGroupContext";
const qg = ee.createContext(null);
qg.displayName = "NavbarContext";
function Kg(e, a) {
  return e;
}
function Wg(e, a, r) {
  const i = r ? "top-end" : "top-start", s = r ? "top-start" : "top-end", c = r ? "bottom-end" : "bottom-start", u = r ? "bottom-start" : "bottom-end", o = r ? "right-start" : "left-start", x = r ? "right-end" : "left-end", d = r ? "left-start" : "right-start", v = r ? "left-end" : "right-end";
  let m = e ? u : c;
  return a === "up" ? m = e ? s : i : a === "end" ? m = e ? v : d : a === "start" ? m = e ? x : o : a === "down-centered" ? m = "bottom" : a === "up-centered" && (m = "top"), m;
}
const Zg = ee.forwardRef(({ bsPrefix: e, className: a, align: r, rootCloseEvent: i, flip: s = true, show: c, renderOnMount: u, as: o = "div", popperConfig: x, variant: d, ...v }, m) => {
  let g = false;
  const y = ee.useContext(qg), T = qe(e, "dropdown-menu"), { align: E, drop: _, isRTL: O } = ee.useContext(jh);
  r = r || E;
  const F = ee.useContext(zh), k = [];
  if (r) if (typeof r == "object") {
    const B = Object.keys(r);
    if (B.length) {
      const U = B[0], ne = r[U];
      g = ne === "start", k.push(`${T}-${U}-${ne}`);
    }
  } else r === "end" && (g = true);
  const M = Wg(g, _, O), [X, { hasShown: z, popper: C, show: S, toggle: w }] = Rg({ flip: s, rootCloseEvent: i, show: c, usePopper: !y && k.length === 0, offset: [0, 2], popperConfig: x, placement: M });
  if (X.ref = u0(Kg(m), X.ref), $g(() => {
    S && (C == null ? void 0 : C.update());
  }, [S]), !z && !u && !F) return null;
  typeof o != "string" && (X.show = S, X.close = () => w == null ? void 0 : w(false), X.align = r);
  let N = v.style;
  return C != null && C.placement && (N = { ...v.style, ...X.style }, v["x-placement"] = C.placement), W.jsx(o, { ...v, ...X, style: N, ...(k.length || y) && { "data-bs-popper": "static" }, className: Ve(a, T, S && "show", g && `${T}-end`, d && `${T}-${d}`, ...k) });
});
Zg.displayName = "DropdownMenu";
const Qg = ee.forwardRef(({ bsPrefix: e, split: a, className: r, childBsPrefix: i, as: s = Bn, ...c }, u) => {
  const o = qe(e, "dropdown-toggle"), x = ee.useContext(df);
  i !== void 0 && (c.bsPrefix = i);
  const [d] = Lg();
  return d.ref = u0(d.ref, Kg(u)), W.jsx(s, { className: Ve(r, o, a && `${o}-split`, (x == null ? void 0 : x.show) && "show"), ...d, ...c });
});
Qg.displayName = "DropdownToggle";
const Jg = ee.forwardRef((e, a) => {
  const { bsPrefix: r, drop: i = "down", show: s, className: c, align: u = "start", onSelect: o, onToggle: x, focusFirstItemOnShow: d, as: v = "div", navbar: m, autoClose: g = true, ...y } = qm(e, { show: "onToggle" }), T = ee.useContext(zh), E = qe(r, "dropdown"), _ = Ah(), O = (C) => g === false ? C === "click" : g === "inside" ? C !== "rootClose" : g === "outside" ? C !== "select" : true, F = Ch((C, S) => {
    var w;
    !((w = S.originalEvent) == null || (w = w.target) == null) && w.classList.contains("dropdown-toggle") && S.source === "mousedown" || (S.originalEvent.currentTarget === document && (S.source !== "keydown" || S.originalEvent.key === "Escape") && (S.source = "rootClose"), O(S.source) && (x == null ? void 0 : x(C, S)));
  }), M = Wg(u === "end", i, _), X = ee.useMemo(() => ({ align: u, drop: i, isRTL: _ }), [u, i, _]), z = { down: E, "down-centered": `${E}-center`, up: "dropup", "up-centered": "dropup-center dropup", end: "dropend", start: "dropstart" };
  return W.jsx(jh.Provider, { value: X, children: W.jsx(d0, { placement: M, show: s, onSelect: o, onToggle: F, focusFirstItemOnShow: d, itemSelector: `.${E}-item:not(.disabled):not(:disabled)`, children: T ? y.children : W.jsx(v, { ...y, ref: a, className: Ve(c, s && "show", z[i]) }) }) });
});
Jg.displayName = "Dropdown";
const ds = Object.assign(Jg, { Toggle: Qg, Menu: Zg, Item: Xg, ItemText: Yg, Divider: Gg, Header: Vg }), $w = { type: Fa.string, tooltip: Fa.bool, as: Fa.elementType }, vf = ee.forwardRef(({ as: e = "div", className: a, type: r = "valid", tooltip: i = false, ...s }, c) => W.jsx(e, { ...s, ref: c, className: Ve(a, `${r}-${i ? "tooltip" : "feedback"}`) }));
vf.displayName = "Feedback";
vf.propTypes = $w;
const nn = ee.createContext({}), Ph = ee.forwardRef(({ id: e, bsPrefix: a, className: r, type: i = "checkbox", isValid: s = false, isInvalid: c = false, as: u = "input", ...o }, x) => {
  const { controlId: d } = ee.useContext(nn);
  return a = qe(a, "form-check-input"), W.jsx(u, { ...o, ref: x, type: i, id: e || d, className: Ve(r, a, s && "is-valid", c && "is-invalid") });
});
Ph.displayName = "FormCheckInput";
const Zc = ee.forwardRef(({ bsPrefix: e, className: a, htmlFor: r, ...i }, s) => {
  const { controlId: c } = ee.useContext(nn);
  return e = qe(e, "form-check-label"), W.jsx("label", { ...i, ref: s, htmlFor: r || c, className: Ve(a, e) });
});
Zc.displayName = "FormCheckLabel";
const e2 = ee.forwardRef(({ id: e, bsPrefix: a, bsSwitchPrefix: r, inline: i = false, reverse: s = false, disabled: c = false, isValid: u = false, isInvalid: o = false, feedbackTooltip: x = false, feedback: d, feedbackType: v, className: m, style: g, title: y = "", type: T = "checkbox", label: E, children: _, as: O = "input", ...F }, k) => {
  a = qe(a, "form-check"), r = qe(r, "form-switch");
  const { controlId: M } = ee.useContext(nn), X = ee.useMemo(() => ({ controlId: e || M }), [M, e]), z = !_ && E != null && E !== false || u4(_, Zc), C = W.jsx(Ph, { ...F, type: T === "switch" ? "checkbox" : T, ref: k, isValid: u, isInvalid: o, disabled: c, as: O });
  return W.jsx(nn.Provider, { value: X, children: W.jsx("div", { style: g, className: Ve(m, z && a, i && `${a}-inline`, s && `${a}-reverse`, T === "switch" && r), children: _ || W.jsxs(W.Fragment, { children: [C, z && W.jsx(Zc, { title: y, children: E }), d && W.jsx(vf, { type: v, tooltip: x, children: d })] }) }) });
});
e2.displayName = "FormCheck";
const Qc = Object.assign(e2, { Input: Ph, Label: Zc }), t2 = ee.forwardRef(({ bsPrefix: e, type: a, size: r, htmlSize: i, id: s, className: c, isValid: u = false, isInvalid: o = false, plaintext: x, readOnly: d, as: v = "input", ...m }, g) => {
  const { controlId: y } = ee.useContext(nn);
  return e = qe(e, "form-control"), W.jsx(v, { ...m, type: a, size: i, ref: g, readOnly: d, id: s || y, className: Ve(c, x ? `${e}-plaintext` : e, r && `${e}-${r}`, a === "color" && `${e}-color`, u && "is-valid", o && "is-invalid") });
});
t2.displayName = "FormControl";
const qw = Object.assign(t2, { Feedback: vf }), r2 = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "form-floating"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
r2.displayName = "FormFloating";
const Gh = ee.forwardRef(({ controlId: e, as: a = "div", ...r }, i) => {
  const s = ee.useMemo(() => ({ controlId: e }), [e]);
  return W.jsx(nn.Provider, { value: s, children: W.jsx(a, { ...r, ref: i }) });
});
Gh.displayName = "FormGroup";
const a2 = ee.forwardRef(({ as: e = "label", bsPrefix: a, column: r = false, visuallyHidden: i = false, className: s, htmlFor: c, ...u }, o) => {
  const { controlId: x } = ee.useContext(nn);
  a = qe(a, "form-label");
  let d = "col-form-label";
  typeof r == "string" && (d = `${d} ${d}-${r}`);
  const v = Ve(s, a, i && "visually-hidden", r && d);
  return c = c || x, r ? W.jsx(Hn, { ref: o, as: "label", className: v, htmlFor: c, ...u }) : W.jsx(e, { ref: o, className: v, htmlFor: c, ...u });
});
a2.displayName = "FormLabel";
const n2 = ee.forwardRef(({ bsPrefix: e, className: a, id: r, ...i }, s) => {
  const { controlId: c } = ee.useContext(nn);
  return e = qe(e, "form-range"), W.jsx("input", { ...i, type: "range", ref: s, className: Ve(a, e), id: r || c });
});
n2.displayName = "FormRange";
const i2 = ee.forwardRef(({ bsPrefix: e, size: a, htmlSize: r, className: i, isValid: s = false, isInvalid: c = false, id: u, ...o }, x) => {
  const { controlId: d } = ee.useContext(nn);
  return e = qe(e, "form-select"), W.jsx("select", { ...o, size: r, ref: x, className: Ve(i, e, a && `${e}-${a}`, s && "is-valid", c && "is-invalid"), id: u || d });
});
i2.displayName = "FormSelect";
const s2 = ee.forwardRef(({ bsPrefix: e, className: a, as: r = "small", muted: i, ...s }, c) => (e = qe(e, "form-text"), W.jsx(r, { ...s, ref: c, className: Ve(a, e, i && "text-muted") })));
s2.displayName = "FormText";
const l2 = ee.forwardRef((e, a) => W.jsx(Qc, { ...e, ref: a, type: "switch" }));
l2.displayName = "Switch";
const Kw = Object.assign(l2, { Input: Qc.Input, Label: Qc.Label }), c2 = ee.forwardRef(({ bsPrefix: e, className: a, children: r, controlId: i, label: s, ...c }, u) => (e = qe(e, "form-floating"), W.jsxs(Gh, { ref: u, className: Ve(a, e), controlId: i, ...c, children: [r, W.jsx("label", { htmlFor: i, children: s })] })));
c2.displayName = "FloatingLabel";
const Ww = { _ref: Fa.any, validated: Fa.bool, as: Fa.elementType }, Vh = ee.forwardRef(({ className: e, validated: a, as: r = "form", ...i }, s) => W.jsx(r, { ...i, ref: s, className: Ve(e, a && "was-validated") }));
Vh.displayName = "Form";
Vh.propTypes = Ww;
const oi = Object.assign(Vh, { Group: Gh, Control: qw, Floating: r2, Check: Qc, Switch: Kw, Label: a2, Text: s2, Range: n2, Select: i2, FloatingLabel: c2 }), Mp = (e) => !e || typeof e == "function" ? e : (a) => {
  e.current = a;
};
function Zw(e, a) {
  const r = Mp(e), i = Mp(a);
  return (s) => {
    r && r(s), i && i(s);
  };
}
function pf(e, a) {
  return ee.useMemo(() => Zw(e, a), [e, a]);
}
const jo = (e, a) => kh ? e == null ? (a || hf()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Lp(e, a) {
  const r = Pg(), [i, s] = ee.useState(() => jo(e, r == null ? void 0 : r.document));
  if (!i) {
    const c = jo(e);
    c && s(c);
  }
  return ee.useEffect(() => {
  }, [a, i]), ee.useEffect(() => {
    const c = jo(e);
    c !== i && s(c);
  }, [e, i]), i;
}
function Qw({ children: e, in: a, onExited: r, mountOnEnter: i, unmountOnExit: s }) {
  const c = ee.useRef(null), u = ee.useRef(a), o = _a(r);
  ee.useEffect(() => {
    a ? u.current = true : o(c.current);
  }, [a, o]);
  const x = pf(c, f0(e)), d = ee.cloneElement(e, { ref: x });
  return a ? d : s || !u.current && i ? null : d;
}
const Jw = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function eS(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
function tS(e) {
  let { onEnter: a, onEntering: r, onEntered: i, onExit: s, onExiting: c, onExited: u, addEndListener: o, children: x } = e, d = eS(e, Jw);
  const v = ee.useRef(null), m = pf(v, f0(x)), g = (M) => (X) => {
    M && v.current && M(v.current, X);
  }, y = ee.useCallback(g(a), [a]), T = ee.useCallback(g(r), [r]), E = ee.useCallback(g(i), [i]), _ = ee.useCallback(g(s), [s]), O = ee.useCallback(g(c), [c]), F = ee.useCallback(g(u), [u]), k = ee.useCallback(g(o), [o]);
  return Object.assign({}, d, { nodeRef: v }, a && { onEnter: y }, r && { onEntering: T }, i && { onEntered: E }, s && { onExit: _ }, c && { onExiting: O }, u && { onExited: F }, o && { addEndListener: k }, { children: typeof x == "function" ? (M, X) => x(M, Object.assign({}, X, { ref: m })) : ee.cloneElement(x, { ref: m }) });
}
const rS = ["component"];
function aS(e, a) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (a.indexOf(i) >= 0) continue;
    r[i] = e[i];
  }
  return r;
}
const nS = ee.forwardRef((e, a) => {
  let { component: r } = e, i = aS(e, rS);
  const s = tS(i);
  return W.jsx(r, Object.assign({ ref: a }, s));
});
function iS({ in: e, onTransition: a }) {
  const r = ee.useRef(null), i = ee.useRef(true), s = _a(a);
  return vp(() => {
    if (!r.current) return;
    let c = false;
    return s({ in: e, element: r.current, initial: i.current, isStale: () => c }), () => {
      c = true;
    };
  }, [e, s]), vp(() => (i.current = false, () => {
    i.current = true;
  }), []), r;
}
function sS({ children: e, in: a, onExited: r, onEntered: i, transition: s }) {
  const [c, u] = ee.useState(!a);
  a && c && u(false);
  const o = iS({ in: !!a, onTransition: (d) => {
    const v = () => {
      d.isStale() || (d.in ? i == null ? void 0 : i(d.element, d.initial) : (u(true), r == null ? void 0 : r(d.element)));
    };
    Promise.resolve(s(d)).then(v, (m) => {
      throw d.in || u(true), m;
    });
  } }), x = pf(o, f0(e));
  return c && !a ? null : ee.cloneElement(e, { ref: x });
}
function lS(e, a, r) {
  return e ? W.jsx(nS, Object.assign({}, r, { component: e })) : a ? W.jsx(sS, Object.assign({}, r, { transition: a })) : W.jsx(Qw, Object.assign({}, r));
}
function Bp(e, a) {
  return e.classList ? !!a && e.classList.contains(a) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + a + " ") !== -1;
}
const cS = () => {
};
function fS(e, a, { disabled: r, clickTrigger: i } = {}) {
  const s = a || cS;
  bg(e, s, { disabled: r, clickTrigger: i });
  const c = _a((u) => {
    DT(u) && s(u);
  });
  ee.useEffect(() => {
    if (r || e == null) return;
    const u = hf(Xc(e));
    let o = (u.defaultView || window).event;
    const x = vi(u, "keyup", (d) => {
      if (d === o) {
        o = void 0;
        return;
      }
      c(d);
    });
    return () => {
      x();
    };
  }, [e, r, c]);
}
const f2 = ee.forwardRef((e, a) => {
  const { flip: r, offset: i, placement: s, containerPadding: c, popperConfig: u = {}, transition: o, runTransition: x } = e, [d, v] = ih(), [m, g] = ih(), y = pf(v, a), T = Lp(e.container), E = Lp(e.target), [_, O] = ee.useState(!e.show), F = Cg(E, d, Og({ placement: s, enableEvents: !!e.show, containerPadding: c || 5, flip: r, offset: i, arrowElement: m, popperConfig: u }));
  e.show && _ && O(false);
  const k = (...B) => {
    O(true), e.onExited && e.onExited(...B);
  }, M = e.show || !_;
  if (fS(d, e.onHide, { disabled: !e.rootClose || e.rootCloseDisabled, clickTrigger: e.rootCloseEvent }), !M) return null;
  const { onExit: X, onExiting: z, onEnter: C, onEntering: S, onEntered: w } = e;
  let N = e.children(Object.assign({}, F.attributes.popper, { style: F.styles.popper, ref: y }), { popper: F, placement: s, show: !!e.show, arrowProps: Object.assign({}, F.attributes.arrow, { style: F.styles.arrow, ref: g }) });
  return N = lS(o, x, { in: !!e.show, appear: true, mountOnEnter: true, unmountOnExit: true, children: N, onExit: X, onExiting: z, onExited: k, onEnter: C, onEntering: S, onEntered: w }), T ? ps.createPortal(N, T) : null;
});
f2.displayName = "Overlay";
const u2 = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "popover-header"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
u2.displayName = "PopoverHeader";
const Xh = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "popover-body"), W.jsx(r, { ref: s, className: Ve(e, a), ...i })));
Xh.displayName = "PopoverBody";
function o2(e, a) {
  let r = e;
  return e === "left" ? r = a ? "end" : "start" : e === "right" && (r = a ? "start" : "end"), r;
}
function h2(e = "absolute") {
  return { position: e, top: "0", left: "0", opacity: "0", pointerEvents: "none" };
}
const uS = ee.forwardRef(({ bsPrefix: e, placement: a = "right", className: r, style: i, children: s, body: c, arrowProps: u, hasDoneInitialMeasure: o, popper: x, show: d, ...v }, m) => {
  const g = qe(e, "popover"), y = Ah(), [T] = (a == null ? void 0 : a.split("-")) || [], E = o2(T, y);
  let _ = i;
  return d && !o && (_ = { ...i, ...h2(x == null ? void 0 : x.strategy) }), W.jsxs("div", { ref: m, role: "tooltip", style: _, "x-placement": T, className: Ve(r, g, T && `bs-popover-${E}`), ...v, children: [W.jsx("div", { className: "popover-arrow", ...u }), c ? W.jsx(Xh, { children: s }) : s] });
}), oS = Object.assign(uS, { Header: u2, Body: Xh, POPPER_OFFSET: [0, 8] }), d2 = ee.forwardRef(({ bsPrefix: e, placement: a = "right", className: r, style: i, children: s, arrowProps: c, hasDoneInitialMeasure: u, popper: o, show: x, ...d }, v) => {
  e = qe(e, "tooltip");
  const m = Ah(), [g] = (a == null ? void 0 : a.split("-")) || [], y = o2(g, m);
  let T = i;
  return x && !u && (T = { ...i, ...h2(o == null ? void 0 : o.strategy) }), W.jsxs("div", { ref: v, style: T, role: "tooltip", "x-placement": g, className: Ve(r, e, `bs-tooltip-${y}`), ...d, children: [W.jsx("div", { className: "tooltip-arrow", ...c }), W.jsx("div", { className: `${e}-inner`, children: s })] });
});
d2.displayName = "Tooltip";
const Jc = Object.assign(d2, { TOOLTIP_OFFSET: [0, 6] });
function hS(e) {
  const a = ee.useRef(null), r = qe(void 0, "popover"), i = qe(void 0, "tooltip"), s = ee.useMemo(() => ({ name: "offset", options: { offset: () => {
    if (e) return e;
    if (a.current) {
      if (Bp(a.current, r)) return oS.POPPER_OFFSET;
      if (Bp(a.current, i)) return Jc.TOOLTIP_OFFSET;
    }
    return [0, 0];
  } } }), [e, r, i]);
  return [a, [s]];
}
function dS(e, a) {
  const { ref: r } = e, { ref: i } = a;
  e.ref = r.__wrapped || (r.__wrapped = (s) => r(Kc(s))), a.ref = i.__wrapped || (i.__wrapped = (s) => i(Kc(s)));
}
const x2 = ee.forwardRef(({ children: e, transition: a = Zl, popperConfig: r = {}, rootClose: i = false, placement: s = "top", show: c = false, ...u }, o) => {
  const x = ee.useRef({}), [d, v] = ee.useState(null), [m, g] = hS(u.offset), y = u0(o, m), T = a === true ? Zl : a || void 0, E = Ch((_) => {
    v(_), r == null || r.onFirstUpdate == null || r.onFirstUpdate(_);
  });
  return $g(() => {
    d && u.target && (x.current.scheduleUpdate == null || x.current.scheduleUpdate());
  }, [d, u.target]), ee.useEffect(() => {
    c || v(null);
  }, [c]), W.jsx(f2, { ...u, ref: y, popperConfig: { ...r, modifiers: g.concat(r.modifiers || []), onFirstUpdate: E }, transition: T, rootClose: i, placement: s, show: c, children: (_, { arrowProps: O, popper: F, show: k }) => {
    var M;
    dS(_, O);
    const X = F == null ? void 0 : F.placement, z = Object.assign(x.current, { state: F == null ? void 0 : F.state, scheduleUpdate: F == null ? void 0 : F.update, placement: X, outOfBoundaries: (F == null || (M = F.state) == null || (M = M.modifiersData.hide) == null ? void 0 : M.isReferenceHidden) || false, strategy: r.strategy }), C = !!d;
    return typeof e == "function" ? e({ ..._, placement: X, show: k, ...!a && k && { className: "show" }, popper: z, arrowProps: O, hasDoneInitialMeasure: C }) : ee.cloneElement(e, { ..._, placement: X, arrowProps: O, popper: z, hasDoneInitialMeasure: C, className: Ve(e.props.className, !a && k && "show"), style: { ...e.props.style, ..._.style } });
  } });
});
x2.displayName = "Overlay";
function xS(e) {
  return e && typeof e == "object" ? e : { show: e, hide: e };
}
function Up(e, a, r) {
  const [i] = a, s = i.currentTarget, c = i.relatedTarget || i.nativeEvent[r];
  (!c || c !== s) && !fh(s, c) && e(...a);
}
Fa.oneOf(["click", "hover", "focus"]);
const v2 = ({ trigger: e = ["hover", "focus"], overlay: a, children: r, popperConfig: i = {}, show: s, defaultShow: c = false, onToggle: u, delay: o, placement: x, flip: d = x && x.indexOf("auto") !== -1, ...v }) => {
  const m = ee.useRef(null), g = u0(m, f0(r)), y = f4(), T = ee.useRef(""), [E, _] = $m(s, c, u), O = xS(o), { onFocus: F, onBlur: k, onClick: M } = typeof r != "function" ? ee.Children.only(r).props : {}, X = (fe) => {
    g(Kc(fe));
  }, z = ee.useCallback(() => {
    if (y.clear(), T.current = "show", !O.show) {
      _(true);
      return;
    }
    y.set(() => {
      T.current === "show" && _(true);
    }, O.show);
  }, [O.show, _, y]), C = ee.useCallback(() => {
    if (y.clear(), T.current = "hide", !O.hide) {
      _(false);
      return;
    }
    y.set(() => {
      T.current === "hide" && _(false);
    }, O.hide);
  }, [O.hide, _, y]), S = ee.useCallback((...fe) => {
    z(), F == null ? void 0 : F(...fe);
  }, [z, F]), w = ee.useCallback((...fe) => {
    C(), k == null ? void 0 : k(...fe);
  }, [C, k]), N = ee.useCallback((...fe) => {
    _(!E), M == null ? void 0 : M(...fe);
  }, [M, _, E]), B = ee.useCallback((...fe) => {
    Up(z, fe, "fromElement");
  }, [z]), U = ee.useCallback((...fe) => {
    Up(C, fe, "toElement");
  }, [C]), ne = e == null ? [] : [].concat(e), ge = { ref: X };
  return ne.indexOf("click") !== -1 && (ge.onClick = N), ne.indexOf("focus") !== -1 && (ge.onFocus = S, ge.onBlur = w), ne.indexOf("hover") !== -1 && (ge.onMouseOver = B, ge.onMouseOut = U), W.jsxs(W.Fragment, { children: [typeof r == "function" ? r(ge) : ee.cloneElement(r, ge), W.jsx(x2, { ...v, show: E, onHide: C, flip: d, placement: x, popperConfig: i, target: m.current, children: a })] });
}, pi = ee.forwardRef(({ bsPrefix: e, className: a, as: r = "div", ...i }, s) => {
  const c = qe(e, "row"), u = Km(), o = Wm(), x = `${c}-cols`, d = [];
  return u.forEach((v) => {
    const m = i[v];
    delete i[v];
    let g;
    m != null && typeof m == "object" ? { cols: g } = m : g = m;
    const y = v !== o ? `-${v}` : "";
    g != null && d.push(`${x}${y}-${g}`);
  }), W.jsx(r, { ref: s, ...i, className: Ve(a, c, ...d) });
});
pi.displayName = "Row";
const zo = ee.forwardRef(({ bsPrefix: e, className: a, striped: r, bordered: i, borderless: s, hover: c, size: u, variant: o, responsive: x, ...d }, v) => {
  const m = qe(e, "table"), g = Ve(a, m, o && `${m}-${o}`, u && `${m}-${u}`, r && `${m}-${typeof r == "string" ? `striped-${r}` : "striped"}`, i && `${m}-bordered`, s && `${m}-borderless`, c && `${m}-hover`), y = W.jsx("table", { ...d, className: g, ref: v });
  if (x) {
    let T = `${m}-responsive`;
    return typeof x == "string" && (T = `${T}-${x}`), W.jsx("div", { className: T, children: y });
  }
  return y;
}), oh = 1e6, vS = (e, a = "\u6240\u6709") => {
  const r = e.filter((c) => c.targetPosition === a);
  console.log("restrictions:", e, "position:", a), console.log("matchedRestrictions:", r);
  let i = 1, s = oh;
  return r.length === 0 ? { min: i, max: s, conflict: false } : (r.forEach((c) => {
    const u = c.minCount, o = c.maxCount;
    i = Math.max(i, u), s = Math.min(s, o);
  }), { min: i, max: s, conflict: s < i });
}, pS = (e) => {
  const a = /* @__PURE__ */ new Map();
  let r = "";
  console.log("\u6AA2\u67E5\u885D\u7A81\u7684\u9650\u5236\u689D\u4EF6:", e);
  for (const i in e) {
    const s = e[i];
    for (const c of s) {
      const { targetPosition: u } = c;
      if (!a.has(u)) {
        const o = vS(e[i], u);
        if (o.conflict) {
          r = `${r}; ${i}:${u} \u689D\u4EF6\u8A2D\u7F6E\u885D\u7A81`;
          continue;
        }
        a.set(`${i}:${u}`, { min: o.min, max: o.max });
      }
    }
  }
  return console.log("\u6AA2\u67E5\u885D\u7A81:", r), console.log("\u6AA2\u67E5\u7D50\u679C:", a), r.length === 0 ? { valid: true, reason: "\u7121\u885D\u7A81", conflict: false, results: a } : (r = r.slice(2), { valid: false, reason: r, conflict: true, results: {} });
}, mS = (e, a, r, i) => {
  var _a2, _b2;
  const s = ES(i, a), c = [...a].sort((_, O) => {
    const F = s.get(_.id) || 0, k = s.get(O.id) || 0;
    return F !== k ? F - k : _.availability.length - O.availability.length;
  }), u = [...r].sort((_, O) => _.availability.length - O.availability.length), o = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  e = new Map(e), console.log("restriction:", e);
  let d = a.length, v = r.length;
  e.has("interviewers:\u6240\u6709") || (console.log("\u6C92\u6709 interviewers:\u6240\u6709 \u7684\u9650\u5236\u689D\u4EF6", new Map(e)), e.set("interviewers:\u6240\u6709", { min: 1, max: oh })), e.has("interviewees:\u6240\u6709") || (console.log("\u6C92\u6709 interviewees:\u6240\u6709 \u7684\u9650\u5236\u689D\u4EF6", new Map(e)), e.set("interviewees:\u6240\u6709", { min: 1, max: oh }));
  let m = false, g = { valid: false, reason: "", interviewers: [], interviewees: [] };
  if (e.forEach((_, O) => {
    if (m) return;
    const [F, k] = O.split(":"), { min: M, max: X } = _;
    if (console.log(F, k, M, X), F === "interviewers") {
      const z = c.filter((S) => S.position === k || k === "\u6240\u6709"), C = Math.min(z.length, X);
      C < M ? (m = true, g = { valid: false, reason: `\u9762\u8A66\u5B98 ${k} \u6578\u91CF\u4E0D\u5408, ${C} < ${M}`, interviewers: [], interviewees: [] }) : k !== "\u6240\u6709" ? o.set(k, z.slice(0, C)) : d = M;
    } else if (F === "interviewees") {
      const z = u.filter((S) => S.position === k || k === "\u6240\u6709"), C = Math.min(z.length, X);
      C < M ? (m = true, g = { valid: false, reason: `\u61C9\u8A66\u8005 ${k} \u6578\u91CF\u4E0D\u5408, ${C} < ${M}`, interviewers: [], interviewees: [] }) : k !== "\u6240\u6709" ? x.set(k, z.slice(0, C)) : v = C;
    }
  }), m) return console.log("\u6AA2\u67E5\u9650\u5236\u689D\u4EF6\u5931\u6557:", g), g;
  console.log("validInterviewersMap:", o);
  const y = [...o.entries()].reduce((_, O) => [..._, ...O[1]], []), T = [...x.entries()].reduce((_, O) => [..._, ...O[1]], []);
  let E = 0;
  for (console.log("shouldInterviewersNumber:", d), console.log("shouldIntervieweesNumber:", v); y.length < d; ) {
    if (E >= a.length) return { valid: false, reason: "\u9762\u8A66\u5B98\u6578\u91CF\u4E0D\u5408", interviewers: [], interviewees: [] };
    if (y.includes(a[E]) || o.has(`${(_a2 = a[E]) == null ? void 0 : _a2.position}`)) {
      E++;
      continue;
    }
    y.push(a[E]);
  }
  for (E = 0; T.length < v; ) {
    if (E >= r.length) return { valid: false, reason: "\u61C9\u8A66\u8005\u6578\u91CF\u4E0D\u5408", interviewers: [], interviewees: [] };
    if (T.includes(r[E]) || x.has(`${(_b2 = a[E]) == null ? void 0 : _b2.position}`)) {
      E++;
      continue;
    }
    T.push(r[E]);
  }
  return { valid: true, reason: "", interviewers: y, interviewees: T };
}, As = (e) => {
  const [a, r] = e.split("/");
  return { start: new Date(a), end: new Date(r) };
}, Ip = (e, a) => {
  try {
    const r = As(e), i = As(a);
    return r.start.getFullYear() === i.start.getFullYear() && r.start.getMonth() === i.start.getMonth() && r.start.getDate() === i.start.getDate() && r.start < i.end && i.start < r.end;
  } catch (r) {
    return console.error("\u89E3\u6790\u6642\u9593\u6BB5\u5931\u6557:", e, a, r), false;
  }
}, gS = (e, a) => {
  try {
    const r = As(e), i = As(a);
    return r.start.getFullYear() === i.start.getFullYear() && r.start.getMonth() === i.start.getMonth() && r.start.getDate() === i.start.getDate() && r.start === i.start && i.end === r.end;
  } catch (r) {
    return console.error("\u89E3\u6790\u6642\u9593\u6BB5\u5931\u6557:", e, a, r), false;
  }
}, Po = (e, a, r) => {
  if (!Array.isArray(e.availability)) return console.warn(`\u9762\u8A66\u5B98 ${e.name} \u7684\u53EF\u7528\u6642\u6BB5\u4E0D\u662F\u6709\u6548\u7684\u9663\u5217`, e.availability), false;
  const i = e.availability.some((u) => Ip(u, a) || gS(u, a)), s = "specialization" in e;
  return !i || !s && e.select_count && e.select_count > 0 ? false : !r.some((u) => {
    const o = `${u.startTime}/${u.endTime}`;
    return Ip(o, a) && (s ? u.interviewers.map((d) => d.id).includes(e.id) : u.interviewers.map((d) => d.id).includes(e.id));
  });
}, yS = (e, a) => {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const s = i.availability;
    if (!Array.isArray(s)) return console.warn(`\u9762\u8A66\u5B98 ${i.name} \u7684\u53EF\u7528\u6642\u6BB5\u4E0D\u662F\u6709\u6548\u7684\u9663\u5217`, i.availability), false;
    s.forEach((c) => {
      typeof c == "string" && c.includes("/") && r.add(c.trim());
    });
  }), a.forEach((i) => {
    const s = i.availability;
    if (!Array.isArray(s)) return console.warn(`\u61C9\u8A66\u8005 ${i.name} \u7684\u53EF\u7528\u6642\u6BB5\u4E0D\u662F\u6709\u6548\u7684\u9663\u5217`, i.availability), false;
    s.forEach((c) => {
      typeof c == "string" && c.includes("/") && r.add(c.trim());
    });
  }), Array.from(r);
}, ES = (e, a) => {
  const r = /* @__PURE__ */ new Map();
  return a.forEach((i) => {
    r.set(i.id, 0);
  }), e.forEach((i) => {
    i.interviewers.map((s) => s.id).forEach((s) => {
      const c = r.get(s) || 0;
      r.set(s, c + 1);
    });
  }), r;
}, _S = (e, a, r) => {
  const i = { interviewers: [], interviewees: [], reasons: [] }, s = [], c = e.filter((m) => m.availability.length > 0), u = a.filter((m) => m.availability.length > 0);
  if (c.length === 0 || u.length === 0) return console.log("\u6C92\u6709\u6709\u6548\u7684\u9762\u8A66\u5B98\u6216\u61C9\u8A66\u8005"), e.filter((m) => !m.availability || m.availability.length === 0).forEach((m) => {
    i.interviewers.push(m), i.reasons.push(`\u9762\u8A66\u5B98 ${m.name} \u6C92\u6709\u53EF\u7528\u6642\u6BB5`);
  }), a.filter((m) => !m.availability || m.availability.length === 0).forEach((m) => {
    i.interviewees.push(m), i.reasons.push(`\u61C9\u8A66\u8005 ${m.name} \u6C92\u6709\u53EF\u7528\u6642\u6BB5`);
  }), { interviews: s, unmatched: i };
  const o = yS(e, a);
  console.log(`\u5171\u6709 ${o.length} \u500B\u53EF\u80FD\u7684\u6642\u9593\u6BB5`), o.sort((m, g) => {
    const y = As(m).start, T = As(g).start;
    return y.getTime() - T.getTime();
  });
  const x = /* @__PURE__ */ new Set(), d = {};
  u.forEach((m) => {
    const g = m.position || "\u672A\u6307\u5B9A";
    d[g] || (d[g] = []), d[g].push(m);
  }), console.log(d);
  for (const m in d) {
    console.log(`\u958B\u59CB\u70BA\u8077\u4F4D "${m}" \u7684\u61C9\u8A66\u8005\u5B89\u6392\u9762\u8A66...`);
    for (const g of o) {
      const T = d[m].filter((M) => Po(M, g, s) && !x.has(M.id));
      if (console.log(`\u6642\u6BB5\uFF1A${g}`), console.log("assignedIntervieweeIds:", x), T.length === 0) continue;
      const E = c.filter((M) => Po(M, g, s));
      console.log(`\u53EF\u7528\u7684\u9762\u8A66\u5B98: ${E.map((M) => M.name).join(", ")}`), console.log(`\u53EF\u7528\u7684\u61C9\u8A66\u8005: ${T.map((M) => M.name).join(", ")}`);
      const _ = mS(r, E, T, s);
      if (!_.valid) {
        console.log(`\u6642\u6BB5 ${g} \u4E0D\u7B26\u5408\u9650\u5236\u689D\u4EF6: ${_.reason}`), i.reasons.push(_.reason);
        continue;
      }
      const [O, F] = g.split("/"), k = { interviewers: _.interviewers.map((M) => ({ id: M.id, name: M.name, position: M.position })), interviewees: _.interviewees.map((M) => ({ id: M.id, name: M.name, position: M.position })), startTime: O, endTime: F };
      s.push(k), _.interviewees.forEach((M) => {
        x.add(M.id);
      }), _.interviewers.forEach((M) => {
        Array.isArray(M.availability) && (M.availability = M.availability.filter((X) => X !== g));
      }), console.log(`\u5B89\u6392\u4E86\u9762\u8A66: ${_.interviewees.map((M) => M.name).join(", ")} (${m}) \u8207 ${_.interviewers.map((M) => M.name).join(", ")} \u5728 ${O}`);
    }
  }
  for (const m of s) {
    const g = m.interviewers.map((k) => k.id);
    console.log("\u91CD\u586B\u4E2D..."), console.log(`\u6642\u6BB5\uFF1A${m.startTime}/${m.endTime}`);
    const y = c.filter((k) => Po(k, `${m.startTime}/${m.endTime}`, s) && !g.includes(k.id)), T = Array.from(r.keys()).map((k) => k.split(":")[1]).filter((k) => k !== "\u6240\u6709"), E = y.sort((k, M) => k.availability.length - M.availability.length), { max: _ } = r.get("interviewers:\u6240\u6709") || { max: 100 }, O = E.filter((k) => !T.includes(`${k.position}`)), F = Math.min(O.length + g.length, _) - g.length;
    if (console.log(`\u53EF\u7528\u7684\u9762\u8A66\u5B98\u6578\u91CF: ${F}, ${T} ${O.map((k) => k.position).join(", ")}`), F > 0) {
      const k = E.slice(0, F);
      m.interviewers.push(...k.map((M) => ({ id: M.id, name: M.name, position: M.position }))), console.log(`\u65B0\u589E\u5B89\u6392\u4E86\u9762\u8A66\u5B98: ${k.map((M) => M.name).join(", ")} \u5728 ${m.startTime}`);
    }
  }
  const v = u.filter((m) => !x.has(m.id));
  return v.forEach((m) => {
    i.interviewees.includes(m) || (i.interviewees.push(m), i.reasons.push(`\u7121\u6CD5\u70BA\u61C9\u8A66\u8005 ${m.name} \u627E\u5230\u7B26\u5408\u9650\u5236\u689D\u4EF6\u7684\u6642\u6BB5`));
  }), { interviews: s, unmatched: { interviewers: c, interviewees: v, reasons: i.reasons } };
};
function TS(e, a, r) {
  console.log("\u9032\u5165\u6392\u7A0B\u51FD\u6578", { \u9762\u8A66\u5B98\u4EBA\u6578: e.length, \u61C9\u8A66\u8005\u4EBA\u6578: a.length, \u7FA4\u7D44\u9650\u5236: r });
  try {
    const { interviews: i, unmatched: s } = _S(e, a, r);
    return console.log("\u6392\u7A0B\u5B8C\u6210", { \u6210\u529F\u5B89\u6392: i.length, \u672A\u914D\u5C0D\u9762\u8A66\u5B98: s.interviewers.length, \u672A\u914D\u5C0D\u61C9\u8A66\u8005: s.interviewees.length }), { interviews: i, unmatched: s };
  } catch (i) {
    return console.error("\u6392\u7A0B\u904E\u7A0B\u4E2D\u767C\u751F\u932F\u8AA4\uFF1A", i), { interviews: [], unmatched: { interviewers: e, interviewees: a, reasons: ["\u6392\u7A0B\u904E\u7A0B\u767C\u751F\u932F\u8AA4"] } };
  }
}
const p2 = ee.createContext(null), Os = () => {
  const e = ee.useContext(p2);
  if (!e) throw new Error("useScheduling must be used within a SchedulingProvider");
  return e;
}, wS = ({ children: e }) => {
  const [a, r] = ee.useState([]), [i, s] = ee.useState([]), [c, u] = ee.useState([]), [o, x] = ee.useState(null), [d, v] = ee.useState("scheduled"), [m, g] = ee.useState({ interviewers: [{ minCount: 1, maxCount: 3, targetPosition: "\u6240\u6709", groupName: "Interviewers" }], interviewees: [{ minCount: 1, maxCount: 3, targetPosition: "\u6240\u6709", groupName: "Interviewees" }] }), [y, T] = ee.useState({ interviewers: 2, interviewees: 2 }), E = { interviewers: a.length > 0, interviewees: i.length > 0 }, _ = () => {
    console.log("\u958B\u59CB\u914D\u5C0D\u7A0B\u5E8F", { interviewers: a.length, interviewees: i.length, groupRestrictions: m, maxCounts: y });
    const S = pS(m);
    if (!S.results && S.conflict) {
      console.error("\u7FA4\u7D44\u9650\u5236\u6AA2\u67E5\u5931\u6557\uFF1A", S.conflict);
      return;
    }
    console.log("\u7FA4\u7D44\u9650\u5236\u6AA2\u67E5\u7D50\u679C\uFF1A", S.results);
    const w = TS(a, i, S.results);
    console.log("\u914D\u5C0D\u7D50\u679C\uFF1A", w), u(w.interviews), x(w.unmatched);
  }, { startDate: O, daysToShow: F, earliestTime: k, latestTime: M } = ee.useMemo(() => {
    const S = [...a.flatMap((fe) => fe.availability || []), ...i.flatMap((fe) => fe.availability || [])].filter(Boolean);
    if (S.length === 0) {
      const fe = /* @__PURE__ */ new Date(), J = new Date(fe);
      return J.setDate(fe.getDate() - fe.getDay() + 1), { startDate: J, daysToShow: 7, earliestTime: 9, latestTime: 17 };
    }
    const w = S.flatMap((fe) => {
      const [J] = fe.split("/");
      return new Date(J);
    }).filter((fe) => !isNaN(fe.getTime())), N = new Date(Math.min(...w.map((fe) => fe.getTime()))), B = new Date(Math.max(...w.map((fe) => fe.getTime()))), U = Math.ceil((B.getTime() - N.getTime()) / (1e3 * 60 * 60 * 24)) + 1, ne = S.reduce((fe, J) => {
      const [ae] = J.split("/"), we = new Date(ae);
      return we.getHours() < fe ? we.getHours() : fe;
    }, 23), ge = S.reduce((fe, J) => {
      const [, ae] = J.split("/"), we = new Date(ae);
      return we.getHours() > fe ? we.getHours() : fe;
    }, 0);
    return { startDate: N, daysToShow: U, earliestTime: ne, latestTime: ge + 1 };
  }, [a, i]), X = (S) => {
    console.log("\u9762\u8A66\u8005\u8CC7\u6599\u5DF2\u52A0\u8F09\uFF1A", S);
    const w = S.map((N) => !N.availability || !Array.isArray(N.availability) ? typeof N.availability == "string" ? { ...N, availability: N.availability.split(",").map((B) => B.trim()).filter((B) => B.includes("/")) } : { ...N, availability: [] } : N);
    s(w);
  }, z = (S) => {
    console.log("\u9762\u8A66\u8005\u8CC7\u6599\u5DF2\u52A0\u8F09\uFF1A", S);
    const w = S.map((N) => !N.availability || !Array.isArray(N.availability) ? typeof N.availability == "string" ? { ...N, availability: N.availability.split(",").map((B) => B.trim()).filter((B) => B.includes("/")) } : { ...N, availability: [] } : N);
    r(w);
  }, C = (S, w, N) => {
    console.log(`\u66F4\u65B0 ${S} \u7FA4\u7D44\u9650\u5236 ${w}\uFF1A`, N), g((B) => {
      console.log(`\u66F4\u65B0 ${S} \u7FA4\u7D44\u9650\u5236 ${B[S]}`);
      const U = B[S].map((ne, ge) => (console.log(`\u66F4\u65B0 ${S} \u7FA4\u7D44\u9650\u5236 ${w}\uFF1A`, ne, ge), ge === w ? { ...ne, ...N } : ne));
      return { ...B, [S]: U };
    });
  };
  return W.jsx(p2.Provider, { value: { interviewers: a, interviewees: i, scheduledInterviews: c, unmatchedResults: o, dataLoaded: E, displayInfo: { startDate: O, daysToShow: F, earliestTime: k, latestTime: M }, groupRestrictions: m, maxCounts: y, viewMode: d, setViewMode: v, onInterviewersLoaded: z, onIntervieweesLoaded: X, updateMaxCount: (S, w) => {
    console.log(`\u66F4\u65B0 ${S} \u6700\u5927\u9650\u5236\uFF1A`, w), T((N) => ({ ...N, [S]: w }));
  }, addRestriction: (S) => {
    console.log(`\u589E\u52A0 ${S} \u7FA4\u7D44\u9650\u5236`), g((w) => {
      const N = { minCount: 1, maxCount: 1, targetPosition: "\u6240\u6709", groupName: S === "interviewers" ? "Interviewers" : "Interviewees" };
      return { ...w, [S]: [...w[S], N] };
    });
  }, removeRestriction: (S, w) => {
    console.log(`\u79FB\u9664 ${S} \u7FA4\u7D44\u9650\u5236 ${w}`), g((N) => {
      if (N[S].length <= 1) return N;
      console.log(`\u66F4\u65B0 ${S} \u7FA4\u7D44\u9650\u5236\uFF1A`, N);
      const B = N[S].filter((U, ne) => ne !== w);
      return console.log(`\u66F4\u65B0 ${S} \u7FA4\u7D44\u9650\u5236\uFF1A`, B), { ...N, [S]: B };
    });
  }, generateSchedule: _, updateGroupRestriction: C }, children: e });
}, SS = ({ availability: e, showSchedule: a = false }) => {
  const { interviews: r, interviewers: i, interviewees: s } = e, c = () => {
    if (a) return r.length > 0 ? 3 : 0;
    const x = i.length >= 2, d = s.length >= 1;
    return x && d ? 3 : x ? 2 : d ? 1 : 0;
  }, u = () => {
    const x = c();
    return x === 3 ? "high" : x === 2 ? "medium" : x === 1 ? "low" : "";
  };
  return !a || r.length === 0 ? W.jsx("div", { className: `calendar-time-slot ${u()}`, children: W.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", justifyContent: "start", width: "100%" }, children: [i.length > 0 && W.jsxs("div", { style: { color: "#4E6688" }, children: ["\u9762\u8A66\u5B98: ", i.length] }), s.length > 0 && W.jsxs("div", { style: { color: "#DDA853" }, children: ["\u61C9\u8A66\u8005: ", s.length] })] }) }) : r.map((x, d) => {
    const v = `${x.interviewees[0].id}-${x.startTime}-${d}`;
    let m = null;
    return x.isStart ? m = { borderRadius: "2px 2px 0 0" } : x.isEnd && (m = { borderRadius: "0 0 2px 2px" }), W.jsx("div", { className: `calendar-time-slot ${u()} ${x.isStart ? "pt-2" : x.isEnd ? "pb-2" : ""}`, children: W.jsx("div", { className: `interview-block color-${x.colorIndex} mx-2 `, style: m, children: W.jsx("div", { className: "interview-content" }) }, `${v}-interview-block`) }, `${v}-calendar-time-slot`);
  });
}, AS = (e, a) => {
  const r = [];
  for (let i = 0; i < a; i++) {
    const s = new Date(e);
    s.setDate(e.getDate() + i), r.push(s);
  }
  return r;
}, kS = (e) => {
  const a = ["#4299e1", "#48bb78", "#ed8936", "#667eea", "#ed64a6", "#48bb78", "#4299e1", "#9f7aea"];
  return a[e % a.length];
}, CS = ({ scheduledInterviews: e }) => {
  const { interviewers: a, interviewees: r, unmatchedResults: i, viewMode: s, displayInfo: { startDate: c, daysToShow: u, earliestTime: o, latestTime: x } } = Os(), d = ee.useMemo(() => {
    const E = /* @__PURE__ */ new Map();
    return e.forEach((_, O) => {
      const F = `${_.interviewees.map((k) => k.id).join("-")}-${_.startTime}`;
      E.set(F, O % 8);
    }), E;
  }, [e]), v = ee.useMemo(() => {
    const E = [];
    for (let _ = o; _ <= x; _++) E.push(`${String(_).padStart(2, "0")}:00`), E.push(`${String(_).padStart(2, "0")}:30`);
    return E;
  }, [o, x, u, c]), m = (E, _) => {
    const [O, F] = _.split(":"), k = new Date(E);
    k.setHours(parseInt(O, 10), parseInt(F, 10), 0, 0);
    const M = k.getTime(), X = 30 * 60 * 1e3;
    return e.filter((z) => {
      const C = new Date(z.startTime), S = new Date(z.endTime);
      return M >= C.getTime() && M < S.getTime() && C.getDate() === k.getDate() && C.getMonth() === k.getMonth() && C.getFullYear() === k.getFullYear();
    }).map((z) => {
      const C = new Date(z.startTime), S = new Date(z.endTime), w = M === C.getTime(), N = M === S.getTime() - X, B = `${z.interviewees.map((ne) => ne.id).join("-")}-${z.startTime}`, U = d.get(B) || 0;
      return { ...z, isStart: w, isEnd: N, colorIndex: U };
    });
  }, g = (E, _) => {
    try {
      const [O, F] = _.split("/"), k = new Date(O), M = new Date(F);
      return E.getTime() >= k.getTime() && E.getTime() < M.getTime() && E.toDateString() === k.toDateString();
    } catch (O) {
      return console.error("\u6642\u9593\u683C\u5F0F\u932F\u8AA4:", O), false;
    }
  }, y = (E, _) => {
    if (s === "scheduled" && e.length > 0) return { interviews: m(E, _), interviewers: [], interviewees: [], rooms: [] };
    const [O, F] = _.split(":"), k = new Date(E);
    k.setHours(parseInt(O, 10), parseInt(F, 10), 0, 0);
    let M = a, X = r;
    s === "unmatched" && i && (M = i.interviewers, X = i.interviewees);
    const z = (M == null ? void 0 : M.filter((S) => !S.availability || !Array.isArray(S.availability) ? (console.warn(`\u9762\u8A66\u5B98 ${S.name} \u7684 availability \u4E0D\u662F\u6709\u6548\u6578\u7D44`, S.availability), false) : S.availability.some((w) => g(k, w)))) || [], C = (X == null ? void 0 : X.filter((S) => !S.availability || !Array.isArray(S.availability) ? (console.warn(`\u61C9\u8A66\u8005 ${S.name} \u7684 availability \u4E0D\u662F\u6709\u6548\u6578\u7D44`, S.availability), false) : S.availability.some((w) => g(k, w)))) || [];
    return { interviews: [], interviewers: z, interviewees: C };
  }, T = (E, _) => {
    const O = m(E, _);
    return s === "scheduled" && e.length > 0 && O.length == 0 ? W.jsx(Jc, { children: W.jsx("div", { style: { display: "none" } }, `${E}-tooltip`) }) : W.jsx(Jc, { className: "availability-tooltip", children: W.jsx("div", { className: "tooltip-content", children: s === "scheduled" && e.length > 0 ? O.map((F) => W.jsx("div", { className: "interview-details", children: W.jsxs("div", { className: "interview-slot", style: { borderLeft: `3px solid ${kS(F.colorIndex)}`, margin: "8px 0", padding: "8px", color: "#000" }, children: [W.jsx("div", { className: "interview-details", children: W.jsxs("p", { children: [W.jsx("strong", { children: "\u9762\u8A66\u5B98\uFF1A" }), F.interviewers.map((k, M) => {
      const X = (k == null ? void 0 : k.position) ? k.position.charAt(0) : "N/A";
      return W.jsxs("span", { children: [k.name, " (", X, ") ", M < F.interviewers.length - 1 ? ", " : ""] }, `interviewer-${M}`);
    })] }) }, `${F.interviewees.map((k) => k.id)[0]}-${F.startTime}-interview-details`), W.jsx("div", { className: "interview-details", children: W.jsxs("p", { children: [W.jsx("strong", { children: "\u61C9\u8A66\u8005\uFF1A" }), F.interviewees.map((k, M) => {
      const X = (k == null ? void 0 : k.position) ? k.position.charAt(0) : "N/A";
      return W.jsxs("span", { children: [k.name, " (", X, ")", M < F.interviewees.length - 1 ? ", " : ""] }, `interviewee-${M}`);
    })] }) })] }, `${F.interviewees.map((k) => k.id)[0]}-${F.startTime}-interview-slot`) }, `${F.interviewees.map((k) => k.id)[0]}-${F.startTime}-interview-details`)) : W.jsxs("div", { children: [W.jsxs("p", { children: [W.jsx("strong", { children: "\u9762\u8A66\u5B98\uFF1A" }), " ", y(E, _).interviewers.map((F) => {
      var _a2;
      return `${F.name} (${((_a2 = F.position) == null ? void 0 : _a2.charAt(0)) || "N/A"})`;
    }).join(", ") || "\u7121"] }), W.jsxs("p", { children: [W.jsx("strong", { children: "\u61C9\u8A66\u8005\uFF1A" }), " ", y(E, _).interviewees.map((F) => {
      var _a2;
      return `${F.name} (${((_a2 = F.position) == null ? void 0 : _a2.charAt(0)) || "N/A"})`;
    }).join(", ") || "\u7121"] })] }, `${E}-tooltip`) }) });
  };
  return ee.useLayoutEffect(() => {
    document.documentElement.style.setProperty("--calendar-grid-num", `${u}`);
  }, [u]), W.jsxs("div", { className: "calendar-grid", children: [W.jsx("div", { className: "time-column", children: v.filter((E, _) => _ % 2 === 0).map((E) => W.jsx("div", { className: "time-header", children: E }, `header-${E}`)) }), AS(c, u).map((E, _) => W.jsx("div", { className: "day-column", children: v.map((O, F) => {
    const k = y(E, O);
    return W.jsx(v2, { placement: "auto", delay: { show: 50, hide: 100 }, overlay: T(E, O), children: W.jsx("div", { className: "time-slot-wrapper", children: W.jsx(SS, { availability: k, showSchedule: s === "scheduled" && e.length > 0 }) }, `slot-${_}-${F}`) }, `overlay-${_}-${F}`);
  }) }, `column-${_}`))] });
}, bS = () => {
  const { displayInfo: { startDate: e, daysToShow: a } } = Os(), r = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], i = () => {
    const s = [], c = new Date(e);
    s.push({ key: "time", text: "\u6642\u9593" });
    for (let u = 0; u < a; u++) {
      const o = new Date(c);
      o.setDate(c.getDate() + u);
      const x = o.getMonth() + 1, d = o.getDate(), v = r[o.getDay()];
      s.push({ key: o.toISOString(), text: `${x}/${d} (${v})` });
    }
    return s;
  };
  return W.jsx("div", { className: "calendar-header", children: i().map((s) => W.jsx("div", { className: "calendar-header-cell", children: s.text }, s.key)) });
}, OS = ({ isScheduleView: e = false }) => {
  const i = e ? [{ level: 0, text: "\u7121\u9762\u8A66" }, { level: 3, text: "\u5DF2\u6392\u7A0B\u9762\u8A66: \u59D3\u540D(\u8077)" }] : [{ level: 0, text: "\u672A\u6392\u7A0B" }];
  return W.jsxs("div", { className: "calendar-legend", children: [W.jsx("span", { className: "legend-title", children: "\u5716\u4F8B\uFF1A" }), i.map((s) => W.jsxs("div", { className: "legend-item", children: [W.jsx("span", { className: `legend-color availability-level-${s.level}` }), W.jsx("span", { className: "legend-text", children: s.text })] }, s.level))] });
}, RS = () => {
  const { scheduledInterviews: e, unmatchedResults: a, viewMode: r, setViewMode: i } = Os();
  return W.jsxs("div", { className: "calendar-container", children: [W.jsxs("div", { className: "calendar-header-section d-flex justify-content-between align-items-center", children: [W.jsx("h5", { className: "m-0", children: e.length > 0 ? "\u9762\u8A66\u6642\u9593\u8868" : "\u53EF\u7528\u6642\u6BB5\u7E3D\u89BD" }), e.length > 0 && a && a.interviewees.length > 0 && W.jsxs(ig, { size: "sm", children: [W.jsx(Bn, { variant: r === "scheduled" ? "primary" : "outline-primary", onClick: () => i("scheduled"), children: "\u5DF2\u6392\u7A0B" }), W.jsxs(Bn, { variant: r === "unmatched" ? "primary" : "outline-primary", onClick: () => i("unmatched"), children: ["\u672A\u6392\u7A0B (", a.interviewees.length, ")"] })] })] }), W.jsx("div", { className: "calendar-main", children: W.jsx("div", { className: "calendar-view", children: W.jsxs("div", { className: "calendar-scroll-container", children: [W.jsx(bS, {}), W.jsx(CS, { scheduledInterviews: e })] }) }) }), W.jsx("div", { className: "calendar-footer", children: W.jsx(OS, { isScheduleView: r === "scheduled" && e.length > 0 }) })] });
};
var Yc = { exports: {} }, DS = Yc.exports, Hp;
function FS() {
  return Hp || (Hp = 1, function(e, a) {
    (function(r, i) {
      i();
    })(DS, function() {
      function r(d, v) {
        return typeof v > "u" ? v = { autoBom: false } : typeof v != "object" && (console.warn("Deprecated: Expected third argument to be a object"), v = { autoBom: !v }), v.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob(["\uFEFF", d], { type: d.type }) : d;
      }
      function i(d, v, m) {
        var g = new XMLHttpRequest();
        g.open("GET", d), g.responseType = "blob", g.onload = function() {
          x(g.response, v, m);
        }, g.onerror = function() {
          console.error("could not download file");
        }, g.send();
      }
      function s(d) {
        var v = new XMLHttpRequest();
        v.open("HEAD", d, false);
        try {
          v.send();
        } catch {
        }
        return 200 <= v.status && 299 >= v.status;
      }
      function c(d) {
        try {
          d.dispatchEvent(new MouseEvent("click"));
        } catch {
          var v = document.createEvent("MouseEvents");
          v.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), d.dispatchEvent(v);
        }
      }
      var u = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Fc == "object" && Fc.global === Fc ? Fc : void 0, o = u.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), x = u.saveAs || (typeof window != "object" || window !== u ? function() {
      } : "download" in HTMLAnchorElement.prototype && !o ? function(d, v, m) {
        var g = u.URL || u.webkitURL, y = document.createElement("a");
        v = v || d.name || "download", y.download = v, y.rel = "noopener", typeof d == "string" ? (y.href = d, y.origin === location.origin ? c(y) : s(y.href) ? i(d, v, m) : c(y, y.target = "_blank")) : (y.href = g.createObjectURL(d), setTimeout(function() {
          g.revokeObjectURL(y.href);
        }, 4e4), setTimeout(function() {
          c(y);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(d, v, m) {
        if (v = v || d.name || "download", typeof d != "string") navigator.msSaveOrOpenBlob(r(d, m), v);
        else if (s(d)) i(d, v, m);
        else {
          var g = document.createElement("a");
          g.href = d, g.target = "_blank", setTimeout(function() {
            c(g);
          });
        }
      } : function(d, v, m, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), typeof d == "string") return i(d, v, m);
        var y = d.type === "application/octet-stream", T = /constructor/i.test(u.HTMLElement) || u.safari, E = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((E || y && T || o) && typeof FileReader < "u") {
          var _ = new FileReader();
          _.onloadend = function() {
            var k = _.result;
            k = E ? k : k.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = k : location = k, g = null;
          }, _.readAsDataURL(d);
        } else {
          var O = u.URL || u.webkitURL, F = O.createObjectURL(d);
          g ? g.location = F : location.href = F, g = null, setTimeout(function() {
            O.revokeObjectURL(F);
          }, 4e4);
        }
      });
      u.saveAs = x.saveAs = x, e.exports = x;
    });
  }(Yc)), Yc.exports;
}
var NS = FS(), $c = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var MS = $c.exports, jp;
function LS() {
  return jp || (jp = 1, function(e, a) {
    ((r, i) => {
      e.exports = i();
    })(MS, function r() {
      var i = typeof self < "u" ? self : typeof window < "u" ? window : i !== void 0 ? i : {}, s, c = !i.document && !!i.postMessage, u = i.IS_PAPA_WORKER || false, o = {}, x = 0, d = {};
      function v(S) {
        this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, (function(w) {
          var N = X(w);
          N.chunkSize = parseInt(N.chunkSize), w.step || w.chunk || (N.chunkSize = null), this._handle = new E(N), (this._handle.streamer = this)._config = N;
        }).call(this, S), this.parseChunk = function(w, N) {
          var B = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < B) {
            let ne = this._config.newline;
            ne || (U = this._config.quoteChar || '"', ne = this._handle.guessLineEndings(w, U)), w = [...w.split(ne).slice(B)].join(ne);
          }
          this.isFirstChunk && C(this._config.beforeFirstChunk) && (U = this._config.beforeFirstChunk(w)) !== void 0 && (w = U), this.isFirstChunk = false, this._halted = false;
          var B = this._partialLine + w, U = (this._partialLine = "", this._handle.parse(B, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (w = U.meta.cursor, B = (this._finished || (this._partialLine = B.substring(w - this._baseIndex), this._baseIndex = w), U && U.data && (this._rowCount += U.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), u) i.postMessage({ results: U, workerId: d.WORKER_ID, finished: B });
            else if (C(this._config.chunk) && !N) {
              if (this._config.chunk(U, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = true);
              this._completeResults = U = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(U.data), this._completeResults.errors = this._completeResults.errors.concat(U.errors), this._completeResults.meta = U.meta), this._completed || !B || !C(this._config.complete) || U && U.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), B || U && U.meta.paused || this._nextChunk(), U;
          }
          this._halted = true;
        }, this._sendError = function(w) {
          C(this._config.error) ? this._config.error(w) : u && this._config.error && i.postMessage({ workerId: d.WORKER_ID, error: w, finished: false });
        };
      }
      function m(S) {
        var w;
        (S = S || {}).chunkSize || (S.chunkSize = d.RemoteChunkSize), v.call(this, S), this._nextChunk = c ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(N) {
          this._input = N, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (w = new XMLHttpRequest(), this._config.withCredentials && (w.withCredentials = this._config.withCredentials), c || (w.onload = z(this._chunkLoaded, this), w.onerror = z(this._chunkError, this)), w.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !c), this._config.downloadRequestHeaders) {
              var N, B = this._config.downloadRequestHeaders;
              for (N in B) w.setRequestHeader(N, B[N]);
            }
            var U;
            this._config.chunkSize && (U = this._start + this._config.chunkSize - 1, w.setRequestHeader("Range", "bytes=" + this._start + "-" + U));
            try {
              w.send(this._config.downloadRequestBody);
            } catch (ne) {
              this._chunkError(ne.message);
            }
            c && w.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          w.readyState === 4 && (w.status < 200 || 400 <= w.status ? this._chunkError() : (this._start += this._config.chunkSize || w.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((N) => (N = N.getResponseHeader("Content-Range")) !== null ? parseInt(N.substring(N.lastIndexOf("/") + 1)) : -1)(w), this.parseChunk(w.responseText)));
        }, this._chunkError = function(N) {
          N = w.statusText || N, this._sendError(new Error(N));
        };
      }
      function g(S) {
        (S = S || {}).chunkSize || (S.chunkSize = d.LocalChunkSize), v.call(this, S);
        var w, N, B = typeof FileReader < "u";
        this.stream = function(U) {
          this._input = U, N = U.slice || U.webkitSlice || U.mozSlice, B ? ((w = new FileReader()).onload = z(this._chunkLoaded, this), w.onerror = z(this._chunkError, this)) : w = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var U = this._input, ne = (this._config.chunkSize && (ne = Math.min(this._start + this._config.chunkSize, this._input.size), U = N.call(U, this._start, ne)), w.readAsText(U, this._config.encoding));
          B || this._chunkLoaded({ target: { result: ne } });
        }, this._chunkLoaded = function(U) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(U.target.result);
        }, this._chunkError = function() {
          this._sendError(w.error);
        };
      }
      function y(S) {
        var w;
        v.call(this, S = S || {}), this.stream = function(N) {
          return w = N, this._nextChunk();
        }, this._nextChunk = function() {
          var N, B;
          if (!this._finished) return N = this._config.chunkSize, w = N ? (B = w.substring(0, N), w.substring(N)) : (B = w, ""), this._finished = !w, this.parseChunk(B);
        };
      }
      function T(S) {
        v.call(this, S = S || {});
        var w = [], N = true, B = false;
        this.pause = function() {
          v.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          v.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(U) {
          this._input = U, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          B && w.length === 1 && (this._finished = true);
        }, this._nextChunk = function() {
          this._checkIsFinished(), w.length ? this.parseChunk(w.shift()) : N = true;
        }, this._streamData = z(function(U) {
          try {
            w.push(typeof U == "string" ? U : U.toString(this._config.encoding)), N && (N = false, this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (ne) {
            this._streamError(ne);
          }
        }, this), this._streamError = z(function(U) {
          this._streamCleanUp(), this._sendError(U);
        }, this), this._streamEnd = z(function() {
          this._streamCleanUp(), B = true, this._streamData("");
        }, this), this._streamCleanUp = z(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function E(S) {
        var w, N, B, U, ne = Math.pow(2, 53), ge = -ne, fe = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, J = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, ae = this, we = 0, Q = 0, H = false, re = false, R = [], j = { data: [], errors: [], meta: {} };
        function q(pe) {
          return S.skipEmptyLines === "greedy" ? pe.join("").trim() === "" : pe.length === 1 && pe[0].length === 0;
        }
        function K() {
          if (j && B && (Ae("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + d.DefaultDelimiter + "'"), B = false), S.skipEmptyLines && (j.data = j.data.filter(function(V) {
            return !q(V);
          })), ie()) {
            let V = function(Ge, Le) {
              C(S.transformHeader) && (Ge = S.transformHeader(Ge, Le)), R.push(Ge);
            };
            var Re = V;
            if (j) if (Array.isArray(j.data[0])) {
              for (var pe = 0; ie() && pe < j.data.length; pe++) j.data[pe].forEach(V);
              j.data.splice(0, 1);
            } else j.data.forEach(V);
          }
          function ye(V, Ge) {
            for (var Le = S.header ? {} : [], Be = 0; Be < V.length; Be++) {
              var De = Be, ke = V[Be], ke = ((Ie, Ke) => ((Ze) => (S.dynamicTypingFunction && S.dynamicTyping[Ze] === void 0 && (S.dynamicTyping[Ze] = S.dynamicTypingFunction(Ze)), (S.dynamicTyping[Ze] || S.dynamicTyping) === true))(Ie) ? Ke === "true" || Ke === "TRUE" || Ke !== "false" && Ke !== "FALSE" && (((Ze) => {
                if (fe.test(Ze) && (Ze = parseFloat(Ze), ge < Ze && Ze < ne)) return 1;
              })(Ke) ? parseFloat(Ke) : J.test(Ke) ? new Date(Ke) : Ke === "" ? null : Ke) : Ke)(De = S.header ? Be >= R.length ? "__parsed_extra" : R[Be] : De, ke = S.transform ? S.transform(ke, De) : ke);
              De === "__parsed_extra" ? (Le[De] = Le[De] || [], Le[De].push(ke)) : Le[De] = ke;
            }
            return S.header && (Be > R.length ? Ae("FieldMismatch", "TooManyFields", "Too many fields: expected " + R.length + " fields but parsed " + Be, Q + Ge) : Be < R.length && Ae("FieldMismatch", "TooFewFields", "Too few fields: expected " + R.length + " fields but parsed " + Be, Q + Ge)), Le;
          }
          var _e;
          j && (S.header || S.dynamicTyping || S.transform) && (_e = 1, !j.data.length || Array.isArray(j.data[0]) ? (j.data = j.data.map(ye), _e = j.data.length) : j.data = ye(j.data, 0), S.header && j.meta && (j.meta.fields = R), Q += _e);
        }
        function ie() {
          return S.header && R.length === 0;
        }
        function Ae(pe, ye, _e, Re) {
          pe = { type: pe, code: ye, message: _e }, Re !== void 0 && (pe.row = Re), j.errors.push(pe);
        }
        C(S.step) && (U = S.step, S.step = function(pe) {
          j = pe, ie() ? K() : (K(), j.data.length !== 0 && (we += pe.data.length, S.preview && we > S.preview ? N.abort() : (j.data = j.data[0], U(j, ae))));
        }), this.parse = function(pe, ye, _e) {
          var Re = S.quoteChar || '"', Re = (S.newline || (S.newline = this.guessLineEndings(pe, Re)), B = false, S.delimiter ? C(S.delimiter) && (S.delimiter = S.delimiter(pe), j.meta.delimiter = S.delimiter) : ((Re = ((V, Ge, Le, Be, De) => {
            var ke, Ie, Ke, Ze;
            De = De || [",", "	", "|", ";", d.RECORD_SEP, d.UNIT_SEP];
            for (var At = 0; At < De.length; At++) {
              for (var It, Pt = De[At], it = 0, Ot = 0, st = 0, tt = (Ke = void 0, new O({ comments: Be, delimiter: Pt, newline: Ge, preview: 10 }).parse(V)), rt = 0; rt < tt.data.length; rt++) Le && q(tt.data[rt]) ? st++ : (It = tt.data[rt].length, Ot += It, Ke === void 0 ? Ke = It : 0 < It && (it += Math.abs(It - Ke), Ke = It));
              0 < tt.data.length && (Ot /= tt.data.length - st), (Ie === void 0 || it <= Ie) && (Ze === void 0 || Ze < Ot) && 1.99 < Ot && (Ie = it, ke = Pt, Ze = Ot);
            }
            return { successful: !!(S.delimiter = ke), bestDelimiter: ke };
          })(pe, S.newline, S.skipEmptyLines, S.comments, S.delimitersToGuess)).successful ? S.delimiter = Re.bestDelimiter : (B = true, S.delimiter = d.DefaultDelimiter), j.meta.delimiter = S.delimiter), X(S));
          return S.preview && S.header && Re.preview++, w = pe, N = new O(Re), j = N.parse(w, ye, _e), K(), H ? { meta: { paused: true } } : j || { meta: { paused: false } };
        }, this.paused = function() {
          return H;
        }, this.pause = function() {
          H = true, N.abort(), w = C(S.chunk) ? "" : w.substring(N.getCharIndex());
        }, this.resume = function() {
          ae.streamer._halted ? (H = false, ae.streamer.parseChunk(w, true)) : setTimeout(ae.resume, 3);
        }, this.aborted = function() {
          return re;
        }, this.abort = function() {
          re = true, N.abort(), j.meta.aborted = true, C(S.complete) && S.complete(j), w = "";
        }, this.guessLineEndings = function(V, Re) {
          V = V.substring(0, 1048576);
          var Re = new RegExp(_(Re) + "([^]*?)" + _(Re), "gm"), _e = (V = V.replace(Re, "")).split("\r"), Re = V.split(`
`), V = 1 < Re.length && Re[0].length < _e[0].length;
          if (_e.length === 1 || V) return `
`;
          for (var Ge = 0, Le = 0; Le < _e.length; Le++) _e[Le][0] === `
` && Ge++;
          return Ge >= _e.length / 2 ? `\r
` : "\r";
        };
      }
      function _(S) {
        return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function O(S) {
        var w = (S = S || {}).delimiter, N = S.newline, B = S.comments, U = S.step, ne = S.preview, ge = S.fastMode, fe = null, J = false, ae = S.quoteChar == null ? '"' : S.quoteChar, we = ae;
        if (S.escapeChar !== void 0 && (we = S.escapeChar), (typeof w != "string" || -1 < d.BAD_DELIMITERS.indexOf(w)) && (w = ","), B === w) throw new Error("Comment character same as delimiter");
        B === true ? B = "#" : (typeof B != "string" || -1 < d.BAD_DELIMITERS.indexOf(B)) && (B = false), N !== `
` && N !== "\r" && N !== `\r
` && (N = `
`);
        var Q = 0, H = false;
        this.parse = function(re, R, j) {
          if (typeof re != "string") throw new Error("Input must be a string");
          var q = re.length, K = w.length, ie = N.length, Ae = B.length, pe = C(U), ye = [], _e = [], Re = [], V = Q = 0;
          if (!re) return it();
          if (ge || ge !== false && re.indexOf(ae) === -1) {
            for (var Ge = re.split(N), Le = 0; Le < Ge.length; Le++) {
              if (Re = Ge[Le], Q += Re.length, Le !== Ge.length - 1) Q += N.length;
              else if (j) return it();
              if (!B || Re.substring(0, Ae) !== B) {
                if (pe) {
                  if (ye = [], Ze(Re.split(w)), Ot(), H) return it();
                } else Ze(Re.split(w));
                if (ne && ne <= Le) return ye = ye.slice(0, ne), it(true);
              }
            }
            return it();
          }
          for (var Be = re.indexOf(w, Q), De = re.indexOf(N, Q), ke = new RegExp(_(we) + _(ae), "g"), Ie = re.indexOf(ae, Q); ; ) if (re[Q] === ae) for (Ie = Q, Q++; ; ) {
            if ((Ie = re.indexOf(ae, Ie + 1)) === -1) return j || _e.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ye.length, index: Q }), It();
            if (Ie === q - 1) return It(re.substring(Q, Ie).replace(ke, ae));
            if (ae === we && re[Ie + 1] === we) Ie++;
            else if (ae === we || Ie === 0 || re[Ie - 1] !== we) {
              Be !== -1 && Be < Ie + 1 && (Be = re.indexOf(w, Ie + 1));
              var Ke = At((De = De !== -1 && De < Ie + 1 ? re.indexOf(N, Ie + 1) : De) === -1 ? Be : Math.min(Be, De));
              if (re.substr(Ie + 1 + Ke, K) === w) {
                Re.push(re.substring(Q, Ie).replace(ke, ae)), re[Q = Ie + 1 + Ke + K] !== ae && (Ie = re.indexOf(ae, Q)), Be = re.indexOf(w, Q), De = re.indexOf(N, Q);
                break;
              }
              if (Ke = At(De), re.substring(Ie + 1 + Ke, Ie + 1 + Ke + ie) === N) {
                if (Re.push(re.substring(Q, Ie).replace(ke, ae)), Pt(Ie + 1 + Ke + ie), Be = re.indexOf(w, Q), Ie = re.indexOf(ae, Q), pe && (Ot(), H)) return it();
                if (ne && ye.length >= ne) return it(true);
                break;
              }
              _e.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ye.length, index: Q }), Ie++;
            }
          }
          else if (B && Re.length === 0 && re.substring(Q, Q + Ae) === B) {
            if (De === -1) return it();
            Q = De + ie, De = re.indexOf(N, Q), Be = re.indexOf(w, Q);
          } else if (Be !== -1 && (Be < De || De === -1)) Re.push(re.substring(Q, Be)), Q = Be + K, Be = re.indexOf(w, Q);
          else {
            if (De === -1) break;
            if (Re.push(re.substring(Q, De)), Pt(De + ie), pe && (Ot(), H)) return it();
            if (ne && ye.length >= ne) return it(true);
          }
          return It();
          function Ze(st) {
            ye.push(st), V = Q;
          }
          function At(st) {
            var tt = 0;
            return tt = st !== -1 && (st = re.substring(Ie + 1, st)) && st.trim() === "" ? st.length : tt;
          }
          function It(st) {
            return j || (st === void 0 && (st = re.substring(Q)), Re.push(st), Q = q, Ze(Re), pe && Ot()), it();
          }
          function Pt(st) {
            Q = st, Ze(Re), Re = [], De = re.indexOf(N, Q);
          }
          function it(st) {
            if (S.header && !R && ye.length && !J) {
              var tt = ye[0], rt = {}, gt = new Set(tt);
              let $e = false;
              for (let xt = 0; xt < tt.length; xt++) {
                let Rt = tt[xt];
                if (rt[Rt = C(S.transformHeader) ? S.transformHeader(Rt, xt) : Rt]) {
                  let vt, Tr = rt[Rt];
                  for (; vt = Rt + "_" + Tr, Tr++, gt.has(vt); ) ;
                  gt.add(vt), tt[xt] = vt, rt[Rt]++, $e = true, (fe = fe === null ? {} : fe)[vt] = Rt;
                } else rt[Rt] = 1, tt[xt] = Rt;
                gt.add(Rt);
              }
              $e && console.warn("Duplicate headers found and renamed."), J = true;
            }
            return { data: ye, errors: _e, meta: { delimiter: w, linebreak: N, aborted: H, truncated: !!st, cursor: V + (R || 0), renamedHeaders: fe } };
          }
          function Ot() {
            U(it()), ye = [], _e = [];
          }
        }, this.abort = function() {
          H = true;
        }, this.getCharIndex = function() {
          return Q;
        };
      }
      function F(S) {
        var w = S.data, N = o[w.workerId], B = false;
        if (w.error) N.userError(w.error, w.file);
        else if (w.results && w.results.data) {
          var U = { abort: function() {
            B = true, k(w.workerId, { data: [], errors: [], meta: { aborted: true } });
          }, pause: M, resume: M };
          if (C(N.userStep)) {
            for (var ne = 0; ne < w.results.data.length && (N.userStep({ data: w.results.data[ne], errors: w.results.errors, meta: w.results.meta }, U), !B); ne++) ;
            delete w.results;
          } else C(N.userChunk) && (N.userChunk(w.results, U, w.file), delete w.results);
        }
        w.finished && !B && k(w.workerId, w.results);
      }
      function k(S, w) {
        var N = o[S];
        C(N.userComplete) && N.userComplete(w), N.terminate(), delete o[S];
      }
      function M() {
        throw new Error("Not implemented.");
      }
      function X(S) {
        if (typeof S != "object" || S === null) return S;
        var w, N = Array.isArray(S) ? [] : {};
        for (w in S) N[w] = X(S[w]);
        return N;
      }
      function z(S, w) {
        return function() {
          S.apply(w, arguments);
        };
      }
      function C(S) {
        return typeof S == "function";
      }
      return d.parse = function(S, w) {
        var N = (w = w || {}).dynamicTyping || false;
        if (C(N) && (w.dynamicTypingFunction = N, N = {}), w.dynamicTyping = N, w.transform = !!C(w.transform) && w.transform, !w.worker || !d.WORKERS_SUPPORTED) return N = null, d.NODE_STREAM_INPUT, typeof S == "string" ? (S = ((B) => B.charCodeAt(0) !== 65279 ? B : B.slice(1))(S), N = new (w.download ? m : y)(w)) : S.readable === true && C(S.read) && C(S.on) ? N = new T(w) : (i.File && S instanceof File || S instanceof Object) && (N = new g(w)), N.stream(S);
        (N = (() => {
          var B;
          return !!d.WORKERS_SUPPORTED && (B = (() => {
            var U = i.URL || i.webkitURL || null, ne = r.toString();
            return d.BLOB_URL || (d.BLOB_URL = U.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", ne, ")();"], { type: "text/javascript" })));
          })(), (B = new i.Worker(B)).onmessage = F, B.id = x++, o[B.id] = B);
        })()).userStep = w.step, N.userChunk = w.chunk, N.userComplete = w.complete, N.userError = w.error, w.step = C(w.step), w.chunk = C(w.chunk), w.complete = C(w.complete), w.error = C(w.error), delete w.worker, N.postMessage({ input: S, config: w, workerId: N.id });
      }, d.unparse = function(S, w) {
        var N = false, B = true, U = ",", ne = `\r
`, ge = '"', fe = ge + ge, J = false, ae = null, we = false, Q = ((() => {
          if (typeof w == "object") {
            if (typeof w.delimiter != "string" || d.BAD_DELIMITERS.filter(function(R) {
              return w.delimiter.indexOf(R) !== -1;
            }).length || (U = w.delimiter), typeof w.quotes != "boolean" && typeof w.quotes != "function" && !Array.isArray(w.quotes) || (N = w.quotes), typeof w.skipEmptyLines != "boolean" && typeof w.skipEmptyLines != "string" || (J = w.skipEmptyLines), typeof w.newline == "string" && (ne = w.newline), typeof w.quoteChar == "string" && (ge = w.quoteChar), typeof w.header == "boolean" && (B = w.header), Array.isArray(w.columns)) {
              if (w.columns.length === 0) throw new Error("Option columns is empty");
              ae = w.columns;
            }
            w.escapeChar !== void 0 && (fe = w.escapeChar + ge), w.escapeFormulae instanceof RegExp ? we = w.escapeFormulae : typeof w.escapeFormulae == "boolean" && w.escapeFormulae && (we = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(_(ge), "g"));
        if (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S)) {
          if (!S.length || Array.isArray(S[0])) return H(null, S, J);
          if (typeof S[0] == "object") return H(ae || Object.keys(S[0]), S, J);
        } else if (typeof S == "object") return typeof S.data == "string" && (S.data = JSON.parse(S.data)), Array.isArray(S.data) && (S.fields || (S.fields = S.meta && S.meta.fields || ae), S.fields || (S.fields = Array.isArray(S.data[0]) ? S.fields : typeof S.data[0] == "object" ? Object.keys(S.data[0]) : []), Array.isArray(S.data[0]) || typeof S.data[0] == "object" || (S.data = [S.data])), H(S.fields || [], S.data || [], J);
        throw new Error("Unable to serialize unrecognized input");
        function H(R, j, q) {
          var K = "", ie = (typeof R == "string" && (R = JSON.parse(R)), typeof j == "string" && (j = JSON.parse(j)), Array.isArray(R) && 0 < R.length), Ae = !Array.isArray(j[0]);
          if (ie && B) {
            for (var pe = 0; pe < R.length; pe++) 0 < pe && (K += U), K += re(R[pe], pe);
            0 < j.length && (K += ne);
          }
          for (var ye = 0; ye < j.length; ye++) {
            var _e = (ie ? R : j[ye]).length, Re = false, V = ie ? Object.keys(j[ye]).length === 0 : j[ye].length === 0;
            if (q && !ie && (Re = q === "greedy" ? j[ye].join("").trim() === "" : j[ye].length === 1 && j[ye][0].length === 0), q === "greedy" && ie) {
              for (var Ge = [], Le = 0; Le < _e; Le++) {
                var Be = Ae ? R[Le] : Le;
                Ge.push(j[ye][Be]);
              }
              Re = Ge.join("").trim() === "";
            }
            if (!Re) {
              for (var De = 0; De < _e; De++) {
                0 < De && !V && (K += U);
                var ke = ie && Ae ? R[De] : De;
                K += re(j[ye][ke], De);
              }
              ye < j.length - 1 && (!q || 0 < _e && !V) && (K += ne);
            }
          }
          return K;
        }
        function re(R, j) {
          var q, K;
          return R == null ? "" : R.constructor === Date ? JSON.stringify(R).slice(1, 25) : (K = false, we && typeof R == "string" && we.test(R) && (R = "'" + R, K = true), q = R.toString().replace(Q, fe), (K = K || N === true || typeof N == "function" && N(R, j) || Array.isArray(N) && N[j] || ((ie, Ae) => {
            for (var pe = 0; pe < Ae.length; pe++) if (-1 < ie.indexOf(Ae[pe])) return true;
            return false;
          })(q, d.BAD_DELIMITERS) || -1 < q.indexOf(U) || q.charAt(0) === " " || q.charAt(q.length - 1) === " ") ? ge + q + ge : q);
        }
      }, d.RECORD_SEP = "", d.UNIT_SEP = "", d.BYTE_ORDER_MARK = "\uFEFF", d.BAD_DELIMITERS = ["\r", `
`, '"', d.BYTE_ORDER_MARK], d.WORKERS_SUPPORTED = !c && !!i.Worker, d.NODE_STREAM_INPUT = 1, d.LocalChunkSize = 10485760, d.RemoteChunkSize = 5242880, d.DefaultDelimiter = ",", d.Parser = O, d.ParserHandle = E, d.NetworkStreamer = m, d.FileStreamer = g, d.StringStreamer = y, d.ReadableStreamStreamer = T, i.jQuery && ((s = i.jQuery).fn.parse = function(S) {
        var w = S.config || {}, N = [];
        return this.each(function(ne) {
          if (!(s(this).prop("tagName").toUpperCase() === "INPUT" && s(this).attr("type").toLowerCase() === "file" && i.FileReader) || !this.files || this.files.length === 0) return true;
          for (var ge = 0; ge < this.files.length; ge++) N.push({ file: this.files[ge], inputElem: this, instanceConfig: s.extend({}, w) });
        }), B(), this;
        function B() {
          if (N.length === 0) C(S.complete) && S.complete();
          else {
            var ne, ge, fe, J, ae = N[0];
            if (C(S.before)) {
              var we = S.before(ae.file, ae.inputElem);
              if (typeof we == "object") {
                if (we.action === "abort") return ne = "AbortError", ge = ae.file, fe = ae.inputElem, J = we.reason, void (C(S.error) && S.error({ name: ne }, ge, fe, J));
                if (we.action === "skip") return void U();
                typeof we.config == "object" && (ae.instanceConfig = s.extend(ae.instanceConfig, we.config));
              } else if (we === "skip") return void U();
            }
            var Q = ae.instanceConfig.complete;
            ae.instanceConfig.complete = function(H) {
              C(Q) && Q(H, ae.file, ae.inputElem), U();
            }, d.parse(ae.file, ae.instanceConfig);
          }
        }
        function U() {
          N.splice(0, 1), B();
        }
      }), u && (i.onmessage = function(S) {
        S = S.data, d.WORKER_ID === void 0 && S && (d.WORKER_ID = S.workerId), typeof S.input == "string" ? i.postMessage({ workerId: d.WORKER_ID, results: d.parse(S.input, S.config), finished: true }) : (i.File && S.input instanceof File || S.input instanceof Object) && (S = d.parse(S.input, S.config)) && i.postMessage({ workerId: d.WORKER_ID, results: S, finished: true });
      }), (m.prototype = Object.create(v.prototype)).constructor = m, (g.prototype = Object.create(v.prototype)).constructor = g, (y.prototype = Object.create(y.prototype)).constructor = y, (T.prototype = Object.create(v.prototype)).constructor = T, d;
    });
  }($c)), $c.exports;
}
var BS = LS();
const qc = bs(BS), US = () => {
  const { scheduledInterviews: e, unmatchedResults: a, interviewers: r, interviewees: i } = Os(), [s, c] = ee.useState("interviews"), u = (v) => {
    if (!v) return "";
    const m = new Date(v), g = m.getMonth() + 1, y = m.getDate(), T = m.getHours().toString().padStart(2, "0"), E = m.getMinutes().toString().padStart(2, "0");
    return `${g}/${y} ${T}:${E}`;
  }, o = (v, m) => !v || !m ? "" : `${u(v)} ~ ${u(m)}`, x = (v) => {
    const m = v ? r : i, g = e.filter((y) => y[v ? "interviewers" : "interviewees"].length > 0);
    return m.map((y) => {
      const E = g.filter((_) => _[v ? "interviewers" : "interviewees"].some((O) => O.id === y.id)).map((_) => o(_.startTime, _.endTime));
      return { id: y.id, name: y.name, position: y.position || "", email: y.email || "", interviewTimes: E.join(", "), ...y };
    });
  }, d = () => {
    if (e.length === 0) return;
    let v = "", m = "";
    switch (s) {
      case "interviews":
        const y = e.map((_) => ({ interviewers: _.interviewers.map((O) => O.name).join(", "), interviewees: _.interviewees.map((O) => O.name).join(", "), timeRange: o(_.startTime, _.endTime), startTime: u(_.startTime), endTime: u(_.endTime) }));
        v = qc.unparse(y), m = "interview_schedule.csv";
        break;
      case "interviewers":
        const T = x(true);
        v = qc.unparse(T), m = "interviewers_schedule.csv";
        break;
      case "interviewees":
        const E = x(false);
        v = qc.unparse(E), m = "interviewees_schedule.csv";
        break;
    }
    const g = new Blob([v], { type: "text/csv;charset=utf-8" });
    NS.saveAs(g, m);
  };
  return W.jsxs(W.Fragment, { children: [W.jsxs(Ja, { className: "mb-4", children: [W.jsxs(Ja.Header, { className: "d-flex justify-content-between align-items-center", children: [W.jsxs("h5", { className: "mb-0", children: ["\u5DF2\u5B89\u6392\u9762\u8A66 (", e.length, ")"] }), e.length > 0 && W.jsxs(ds, { children: [W.jsx(ds.Toggle, { variant: "primary", size: "sm", id: "dropdown-export", children: "\u532F\u51FA\u6578\u64DA" }), W.jsxs(ds.Menu, { children: [W.jsx(ds.Item, { onClick: () => {
    c("interviews"), d();
  }, children: "\u532F\u51FA\u9762\u8A66\u6578\u64DA" }), W.jsx(ds.Item, { onClick: () => {
    c("interviewers"), d();
  }, children: "\u532F\u51FA\u9762\u8A66\u5B98\u6578\u64DA" }), W.jsx(ds.Item, { onClick: () => {
    c("interviewees"), d();
  }, children: "\u532F\u51FA\u61C9\u8A66\u8005\u6578\u64DA" })] })] })] }), W.jsx(Ja.Body, { children: e.length === 0 ? W.jsx(a4, { variant: "info", children: "\u5C1A\u672A\u5B89\u6392\u4EFB\u4F55\u9762\u8A66\u3002" }) : W.jsxs(zo, { striped: true, bordered: true, hover: true, responsive: true, children: [W.jsx("thead", { children: W.jsxs("tr", { children: [W.jsx("th", { children: "\u9762\u8A66\u8005" }), W.jsx("th", { children: "\u9762\u8A66\u5B98" }), W.jsx("th", { children: "\u6642\u9593" })] }) }), W.jsx("tbody", { children: e.map((v) => W.jsxs("tr", { children: [W.jsx("td", { children: v.interviewees.map((m) => m.name).join(", ") }), W.jsx("td", { children: v.interviewers.map((m) => m.name).join(", ") }), W.jsx("td", { children: o(v.startTime, v.endTime) })] }, `${v.interviewees[0].id}-${v.startTime}`)) })] }) })] }), a && (a.interviewers.length > 0 || a.interviewees.length > 0) && W.jsxs(Ja, { className: "mb-4", border: "danger", children: [W.jsx(Ja.Header, { className: "bg-danger text-white", children: W.jsx("h5", { className: "mb-0", children: "\u672A\u914D\u5C0D\u540D\u55AE" }) }), W.jsx(Ja.Body, { children: W.jsxs(pi, { children: [W.jsx(Hn, { md: 6, children: a.interviewees.length > 0 && W.jsxs("div", { children: [W.jsx("h6", { className: "text-danger", children: "\u672A\u914D\u5C0D\u9762\u8A66\u8005\uFF1A" }), W.jsxs(zo, { striped: true, bordered: true, hover: true, size: "sm", className: "border-danger", children: [W.jsx("thead", { children: W.jsx("tr", { children: W.jsx("th", { children: "\u59D3\u540D" }) }) }), W.jsx("tbody", { children: a.interviewees.map((v) => W.jsx("tr", { className: "text-danger", children: W.jsx("td", { children: v.name }) }, v.id)) })] })] }) }), W.jsx(Hn, { md: 6, children: a.interviewers.length > 0 && W.jsxs("div", { children: [W.jsx("h6", { className: "text-danger", children: "\u672A\u914D\u5C0D\u9762\u8A66\u5B98\uFF1A" }), W.jsxs(zo, { striped: true, bordered: true, hover: true, size: "sm", className: "border-danger", children: [W.jsx("thead", { children: W.jsx("tr", { children: W.jsx("th", { children: "\u59D3\u540D" }) }) }), W.jsx("tbody", { children: a.interviewers.map((v) => W.jsx("tr", { className: "text-danger", children: W.jsx("td", { children: v.name }) }, v.id)) })] })] }) })] }) })] })] });
}, fr = [];
for (let e = 0; e < 256; ++e) fr.push((e + 256).toString(16).slice(1));
function IS(e, a = 0) {
  return (fr[e[a + 0]] + fr[e[a + 1]] + fr[e[a + 2]] + fr[e[a + 3]] + "-" + fr[e[a + 4]] + fr[e[a + 5]] + "-" + fr[e[a + 6]] + fr[e[a + 7]] + "-" + fr[e[a + 8]] + fr[e[a + 9]] + "-" + fr[e[a + 10]] + fr[e[a + 11]] + fr[e[a + 12]] + fr[e[a + 13]] + fr[e[a + 14]] + fr[e[a + 15]]).toLowerCase();
}
let Go;
const HS = new Uint8Array(16);
function jS() {
  if (!Go) {
    if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Go = crypto.getRandomValues.bind(crypto);
  }
  return Go(HS);
}
const zS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), zp = { randomUUID: zS };
function PS(e, a, r) {
  var _a2;
  if (zp.randomUUID && !e) return zp.randomUUID();
  e = e || {};
  const i = e.random ?? ((_a2 = e.rng) == null ? void 0 : _a2.call(e)) ?? jS();
  if (i.length < 16) throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, IS(i);
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var m2 = 1252, GS = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], Yh = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 }, $h = function(e) {
  GS.indexOf(e) != -1 && (m2 = Yh[0] = e);
};
function VS() {
  $h(1252);
}
var ya = function(e) {
  $h(e);
};
function g2() {
  ya(1200), VS();
}
function Pp(e) {
  for (var a = [], r = 0, i = e.length; r < i; ++r) a[r] = e.charCodeAt(r);
  return a;
}
function XS(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return a.join("");
}
function y2(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return a.join("");
}
var Ll = function(e) {
  var a = e.charCodeAt(0), r = e.charCodeAt(1);
  return a == 255 && r == 254 ? XS(e.slice(2)) : a == 254 && r == 255 ? y2(e.slice(2)) : a == 65279 ? e.slice(1) : e;
}, Lc = function(a) {
  return String.fromCharCode(a);
}, Gp = function(a) {
  return String.fromCharCode(a);
}, hh, Un = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Vp(e) {
  for (var a = "", r = 0, i = 0, s = 0, c = 0, u = 0, o = 0, x = 0, d = 0; d < e.length; ) r = e.charCodeAt(d++), c = r >> 2, i = e.charCodeAt(d++), u = (r & 3) << 4 | i >> 4, s = e.charCodeAt(d++), o = (i & 15) << 2 | s >> 6, x = s & 63, isNaN(i) ? o = x = 64 : isNaN(s) && (x = 64), a += Un.charAt(c) + Un.charAt(u) + Un.charAt(o) + Un.charAt(x);
  return a;
}
function $r(e) {
  var a = "", r = 0, i = 0, s = 0, c = 0, u = 0, o = 0, x = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var d = 0; d < e.length; ) c = Un.indexOf(e.charAt(d++)), u = Un.indexOf(e.charAt(d++)), r = c << 2 | u >> 4, a += String.fromCharCode(r), o = Un.indexOf(e.charAt(d++)), i = (u & 15) << 4 | o >> 2, o !== 64 && (a += String.fromCharCode(i)), x = Un.indexOf(e.charAt(d++)), s = (o & 3) << 6 | x, x !== 64 && (a += String.fromCharCode(s));
  return a;
}
var lt = function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), Ai = function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e) try {
      Buffer.from("foo", "utf8");
    } catch {
      e = true;
    }
    return e ? function(a, r) {
      return r ? new Buffer(a, r) : new Buffer(a);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function Pn(e) {
  return lt ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function Xp(e) {
  return lt ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var ga = function(a) {
  return lt ? Ai(a, "binary") : a.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function ki(e) {
  if (Array.isArray(e)) return e.map(function(i) {
    return String.fromCharCode(i);
  }).join("");
  for (var a = [], r = 0; r < e.length; ++r) a[r] = String.fromCharCode(e[r]);
  return a.join("");
}
function qh(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return qh(new Uint8Array(e));
  for (var a = new Array(e.length), r = 0; r < e.length; ++r) a[r] = e[r];
  return a;
}
var Ln = lt ? function(e) {
  return Buffer.concat(e.map(function(a) {
    return Buffer.isBuffer(a) ? a : Ai(a);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var a = 0, r = 0;
    for (a = 0; a < e.length; ++a) r += e[a].length;
    var i = new Uint8Array(r), s = 0;
    for (a = 0, r = 0; a < e.length; r += s, ++a) if (s = e[a].length, e[a] instanceof Uint8Array) i.set(e[a], r);
    else {
      if (typeof e[a] == "string") throw "wtf";
      i.set(new Uint8Array(e[a]), r);
    }
    return i;
  }
  return [].concat.apply([], e.map(function(c) {
    return Array.isArray(c) ? c : [].slice.call(c);
  }));
};
function YS(e) {
  for (var a = [], r = 0, i = e.length + 250, s = Pn(e.length + 255), c = 0; c < e.length; ++c) {
    var u = e.charCodeAt(c);
    if (u < 128) s[r++] = u;
    else if (u < 2048) s[r++] = 192 | u >> 6 & 31, s[r++] = 128 | u & 63;
    else if (u >= 55296 && u < 57344) {
      u = (u & 1023) + 64;
      var o = e.charCodeAt(++c) & 1023;
      s[r++] = 240 | u >> 8 & 7, s[r++] = 128 | u >> 2 & 63, s[r++] = 128 | o >> 6 & 15 | (u & 3) << 4, s[r++] = 128 | o & 63;
    } else s[r++] = 224 | u >> 12 & 15, s[r++] = 128 | u >> 6 & 63, s[r++] = 128 | u & 63;
    r > i && (a.push(s.slice(0, r)), r = 0, s = Pn(65535), i = 65530);
  }
  return a.push(s.slice(0, r)), Ln(a);
}
var Cr = /\u0000/g, Bl = /[\u0001-\u0006]/g;
function gs(e) {
  for (var a = "", r = e.length - 1; r >= 0; ) a += e.charAt(r--);
  return a;
}
function Ea(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Bt("0", a - r.length) + r;
}
function Kh(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Bt(" ", a - r.length) + r;
}
function ef(e, a) {
  var r = "" + e;
  return r.length >= a ? r : r + Bt(" ", a - r.length);
}
function $S(e, a) {
  var r = "" + Math.round(e);
  return r.length >= a ? r : Bt("0", a - r.length) + r;
}
function qS(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Bt("0", a - r.length) + r;
}
var Yp = Math.pow(2, 32);
function xs(e, a) {
  if (e > Yp || e < -Yp) return $S(e, a);
  var r = Math.round(e);
  return qS(r, a);
}
function tf(e, a) {
  return a = a || 0, e.length >= 7 + a && (e.charCodeAt(a) | 32) === 103 && (e.charCodeAt(a + 1) | 32) === 101 && (e.charCodeAt(a + 2) | 32) === 110 && (e.charCodeAt(a + 3) | 32) === 101 && (e.charCodeAt(a + 4) | 32) === 114 && (e.charCodeAt(a + 5) | 32) === 97 && (e.charCodeAt(a + 6) | 32) === 108;
}
var $p = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]], Vo = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
function KS(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var We = { 0: "General", 1: "0", 2: "0.00", 3: "#,##0", 4: "#,##0.00", 9: "0%", 10: "0.00%", 11: "0.00E+00", 12: "# ?/?", 13: "# ??/??", 14: "m/d/yy", 15: "d-mmm-yy", 16: "d-mmm", 17: "mmm-yy", 18: "h:mm AM/PM", 19: "h:mm:ss AM/PM", 20: "h:mm", 21: "h:mm:ss", 22: "m/d/yy h:mm", 37: "#,##0 ;(#,##0)", 38: "#,##0 ;[Red](#,##0)", 39: "#,##0.00;(#,##0.00)", 40: "#,##0.00;[Red](#,##0.00)", 45: "mm:ss", 46: "[h]:mm:ss", 47: "mmss.0", 48: "##0.0E+0", 49: "@", 56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "' }, qp = { 5: 37, 6: 38, 7: 39, 8: 40, 23: 0, 24: 0, 25: 0, 26: 0, 27: 14, 28: 14, 29: 14, 30: 14, 31: 14, 50: 14, 51: 14, 52: 14, 53: 14, 54: 14, 55: 14, 56: 14, 57: 14, 58: 14, 59: 1, 60: 2, 61: 3, 62: 4, 67: 9, 68: 10, 69: 12, 70: 13, 71: 14, 72: 14, 73: 15, 74: 16, 75: 17, 76: 20, 77: 21, 78: 22, 79: 45, 80: 46, 81: 47, 82: 0 }, WS = { 5: '"$"#,##0_);\\("$"#,##0\\)', 63: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)' };
function rf(e, a, r) {
  for (var i = e < 0 ? -1 : 1, s = e * i, c = 0, u = 1, o = 0, x = 1, d = 0, v = 0, m = Math.floor(s); d < a && (m = Math.floor(s), o = m * u + c, v = m * d + x, !(s - m < 5e-8)); ) s = 1 / (s - m), c = u, u = o, x = d, d = v;
  if (v > a && (d > a ? (v = x, o = c) : (v = d, o = u)), !r) return [0, i * o, v];
  var g = Math.floor(i * o / v);
  return [g, i * o - g * v, v];
}
function mi(e, a, r) {
  if (e > 2958465 || e < 0) return null;
  var i = e | 0, s = Math.floor(86400 * (e - i)), c = 0, u = [], o = { D: i, T: s, u: 86400 * (e - i) - s, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(o.u) < 1e-6 && (o.u = 0), a && a.date1904 && (i += 1462), o.u > 0.9999 && (o.u = 0, ++s == 86400 && (o.T = s = 0, ++i, ++o.D)), i === 60) u = r ? [1317, 10, 29] : [1900, 2, 29], c = 3;
  else if (i === 0) u = r ? [1317, 8, 29] : [1900, 1, 0], c = 6;
  else {
    i > 60 && --i;
    var x = new Date(1900, 0, 1);
    x.setDate(x.getDate() + i - 1), u = [x.getFullYear(), x.getMonth() + 1, x.getDate()], c = x.getDay(), i < 60 && (c = (c + 6) % 7), r && (c = r3(x, u));
  }
  return o.y = u[0], o.m = u[1], o.d = u[2], o.S = s % 60, s = Math.floor(s / 60), o.M = s % 60, s = Math.floor(s / 60), o.H = s, o.q = c, o;
}
var E2 = new Date(1899, 11, 31, 0, 0, 0), ZS = E2.getTime(), QS = new Date(1900, 2, 1, 0, 0, 0);
function _2(e, a) {
  var r = e.getTime();
  return a ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= QS && (r += 24 * 60 * 60 * 1e3), (r - (ZS + (e.getTimezoneOffset() - E2.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function Wh(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function JS(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function e3(e) {
  var a = e < 0 ? 12 : 11, r = Wh(e.toFixed(12));
  return r.length <= a || (r = e.toPrecision(10), r.length <= a) ? r : e.toExponential(5);
}
function t3(e) {
  var a = Wh(e.toFixed(11));
  return a.length > (e < 0 ? 12 : 11) || a === "0" || a === "-0" ? e.toPrecision(6) : a;
}
function e0(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return a >= -4 && a <= -1 ? r = e.toPrecision(10 + a) : Math.abs(a) <= 9 ? r = e3(e) : a === 10 ? r = e.toFixed(10).substr(0, 12) : r = t3(e), Wh(JS(r.toUpperCase()));
}
function Ti(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : e0(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return fa(14, _2(e, a && a.date1904), a);
  }
  throw new Error("unsupported value in General format: " + e);
}
function r3(e, a) {
  a[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function a3(e, a, r, i) {
  var s = "", c = 0, u = 0, o = r.y, x, d = 0;
  switch (e) {
    case 98:
      o = r.y + 543;
    case 121:
      switch (a.length) {
        case 1:
        case 2:
          x = o % 100, d = 2;
          break;
        default:
          x = o % 1e4, d = 4;
          break;
      }
      break;
    case 109:
      switch (a.length) {
        case 1:
        case 2:
          x = r.m, d = a.length;
          break;
        case 3:
          return Vo[r.m - 1][1];
        case 5:
          return Vo[r.m - 1][0];
        default:
          return Vo[r.m - 1][2];
      }
      break;
    case 100:
      switch (a.length) {
        case 1:
        case 2:
          x = r.d, d = a.length;
          break;
        case 3:
          return $p[r.q][0];
        default:
          return $p[r.q][1];
      }
      break;
    case 104:
      switch (a.length) {
        case 1:
        case 2:
          x = 1 + (r.H + 11) % 12, d = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 72:
      switch (a.length) {
        case 1:
        case 2:
          x = r.H, d = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 77:
      switch (a.length) {
        case 1:
        case 2:
          x = r.M, d = a.length;
          break;
        default:
          throw "bad minute format: " + a;
      }
      break;
    case 115:
      if (a != "s" && a != "ss" && a != ".0" && a != ".00" && a != ".000") throw "bad second format: " + a;
      return r.u === 0 && (a == "s" || a == "ss") ? Ea(r.S, a.length) : (i >= 2 ? u = i === 3 ? 1e3 : 100 : u = i === 1 ? 10 : 1, c = Math.round(u * (r.S + r.u)), c >= 60 * u && (c = 0), a === "s" ? c === 0 ? "0" : "" + c / u : (s = Ea(c, 2 + i), a === "ss" ? s.substr(0, 2) : "." + s.substr(2, a.length - 1)));
    case 90:
      switch (a) {
        case "[h]":
        case "[hh]":
          x = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          x = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          x = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + a;
      }
      d = a.length === 3 ? 1 : 2;
      break;
    case 101:
      x = o, d = 1;
      break;
  }
  var v = d > 0 ? Ea(x, d) : "";
  return v;
}
function In(e) {
  var a = 3;
  if (e.length <= a) return e;
  for (var r = e.length % a, i = e.substr(0, r); r != e.length; r += a) i += (i.length > 0 ? "," : "") + e.substr(r, a);
  return i;
}
var T2 = /%/g;
function n3(e, a, r) {
  var i = a.replace(T2, ""), s = a.length - i.length;
  return tn(e, i, r * Math.pow(10, 2 * s)) + Bt("%", s);
}
function i3(e, a, r) {
  for (var i = a.length - 1; a.charCodeAt(i - 1) === 44; ) --i;
  return tn(e, a.substr(0, i), r / Math.pow(10, 3 * (a.length - i)));
}
function w2(e, a) {
  var r, i = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + w2(e, -a);
    var s = e.indexOf(".");
    s === -1 && (s = e.indexOf("E"));
    var c = Math.floor(Math.log(a) * Math.LOG10E) % s;
    if (c < 0 && (c += s), r = (a / Math.pow(10, c)).toPrecision(i + 1 + (s + c) % s), r.indexOf("e") === -1) {
      var u = Math.floor(Math.log(a) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (u - r.length + c) : r += "E+" + (u - c); r.substr(0, 2) === "0."; ) r = r.charAt(0) + r.substr(2, s) + "." + r.substr(2 + s), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(o, x, d, v) {
      return x + d + v.substr(0, (s + c) % s) + "." + v.substr(c) + "E";
    });
  } else r = a.toExponential(i);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var S2 = /# (\?+)( ?)\/( ?)(\d+)/;
function s3(e, a, r) {
  var i = parseInt(e[4], 10), s = Math.round(a * i), c = Math.floor(s / i), u = s - c * i, o = i;
  return r + (c === 0 ? "" : "" + c) + " " + (u === 0 ? Bt(" ", e[1].length + 1 + e[4].length) : Kh(u, e[1].length) + e[2] + "/" + e[3] + Ea(o, e[4].length));
}
function l3(e, a, r) {
  return r + (a === 0 ? "" : "" + a) + Bt(" ", e[1].length + 2 + e[4].length);
}
var A2 = /^#*0*\.([0#]+)/, k2 = /\).*[0#]/, C2 = /\(###\) ###\\?-####/;
function Sr(e) {
  for (var a = "", r, i = 0; i != e.length; ++i) switch (r = e.charCodeAt(i)) {
    case 35:
      break;
    case 63:
      a += " ";
      break;
    case 48:
      a += "0";
      break;
    default:
      a += String.fromCharCode(r);
  }
  return a;
}
function Kp(e, a) {
  var r = Math.pow(10, a);
  return "" + Math.round(e * r) / r;
}
function Wp(e, a) {
  var r = e - Math.floor(e), i = Math.pow(10, a);
  return a < ("" + Math.round(r * i)).length ? 0 : Math.round(r * i);
}
function c3(e, a) {
  return a < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, a))).length ? 1 : 0;
}
function f3(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function ia(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(k2)) {
    var i = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? ia("n", i, r) : "(" + ia("n", i, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return i3(e, a, r);
  if (a.indexOf("%") !== -1) return n3(e, a, r);
  if (a.indexOf("E") !== -1) return w2(a, r);
  if (a.charCodeAt(0) === 36) return "$" + ia(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var s, c, u, o, x = Math.abs(r), d = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return d + xs(x, a.length);
  if (a.match(/^[#?]+$/)) return s = xs(r, 0), s === "0" && (s = ""), s.length > a.length ? s : Sr(a.substr(0, a.length - s.length)) + s;
  if (c = a.match(S2)) return s3(c, x, d);
  if (a.match(/^#+0+$/)) return d + xs(x, a.length - a.indexOf("0"));
  if (c = a.match(A2)) return s = Kp(r, c[1].length).replace(/^([^\.]+)$/, "$1." + Sr(c[1])).replace(/\.$/, "." + Sr(c[1])).replace(/\.(\d*)$/, function(T, E) {
    return "." + E + Bt("0", Sr(c[1]).length - E.length);
  }), a.indexOf("0.") !== -1 ? s : s.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), c = a.match(/^(0*)\.(#*)$/)) return d + Kp(x, c[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, c[1].length ? "0." : ".");
  if (c = a.match(/^#{1,3},##0(\.?)$/)) return d + In(xs(x, 0));
  if (c = a.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + ia(e, a, -r) : In("" + (Math.floor(r) + c3(r, c[1].length))) + "." + Ea(Wp(r, c[1].length), c[1].length);
  if (c = a.match(/^#,#*,#0/)) return ia(e, a.replace(/^#,#*,/, ""), r);
  if (c = a.match(/^([0#]+)(\\?-([0#]+))+$/)) return s = gs(ia(e, a.replace(/[\\-]/g, ""), r)), u = 0, gs(gs(a.replace(/\\/g, "")).replace(/[0#]/g, function(T) {
    return u < s.length ? s.charAt(u++) : T === "0" ? "0" : "";
  }));
  if (a.match(C2)) return s = ia(e, "##########", r), "(" + s.substr(0, 3) + ") " + s.substr(3, 3) + "-" + s.substr(6);
  var v = "";
  if (c = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(c[4].length, 7), o = rf(x, Math.pow(10, u) - 1, false), s = "" + d, v = tn("n", c[1], o[1]), v.charAt(v.length - 1) == " " && (v = v.substr(0, v.length - 1) + "0"), s += v + c[2] + "/" + c[3], v = ef(o[2], u), v.length < c[4].length && (v = Sr(c[4].substr(c[4].length - v.length)) + v), s += v, s;
  if (c = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(Math.max(c[1].length, c[4].length), 7), o = rf(x, Math.pow(10, u) - 1, true), d + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? Kh(o[1], u) + c[2] + "/" + c[3] + ef(o[2], u) : Bt(" ", 2 * u + 1 + c[2].length + c[3].length));
  if (c = a.match(/^[#0?]+$/)) return s = xs(r, 0), a.length <= s.length ? s : Sr(a.substr(0, a.length - s.length)) + s;
  if (c = a.match(/^([#0?]+)\.([#0]+)$/)) {
    s = "" + r.toFixed(Math.min(c[2].length, 10)).replace(/([^0])0+$/, "$1"), u = s.indexOf(".");
    var m = a.indexOf(".") - u, g = a.length - s.length - m;
    return Sr(a.substr(0, m) + s + a.substr(a.length - g));
  }
  if (c = a.match(/^00,000\.([#0]*0)$/)) return u = Wp(r, c[1].length), r < 0 ? "-" + ia(e, a, -r) : In(f3(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(T) {
    return "00," + (T.length < 3 ? Ea(0, 3 - T.length) : "") + T;
  }) + "." + Ea(u, c[1].length);
  switch (a) {
    case "###,##0.00":
      return ia(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var y = In(xs(x, 0));
      return y !== "0" ? d + y : "";
    case "###,###.00":
      return ia(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return ia(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function u3(e, a, r) {
  for (var i = a.length - 1; a.charCodeAt(i - 1) === 44; ) --i;
  return tn(e, a.substr(0, i), r / Math.pow(10, 3 * (a.length - i)));
}
function o3(e, a, r) {
  var i = a.replace(T2, ""), s = a.length - i.length;
  return tn(e, i, r * Math.pow(10, 2 * s)) + Bt("%", s);
}
function b2(e, a) {
  var r, i = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + b2(e, -a);
    var s = e.indexOf(".");
    s === -1 && (s = e.indexOf("E"));
    var c = Math.floor(Math.log(a) * Math.LOG10E) % s;
    if (c < 0 && (c += s), r = (a / Math.pow(10, c)).toPrecision(i + 1 + (s + c) % s), !r.match(/[Ee]/)) {
      var u = Math.floor(Math.log(a) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (u - r.length + c) : r += "E+" + (u - c), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(o, x, d, v) {
      return x + d + v.substr(0, (s + c) % s) + "." + v.substr(c) + "E";
    });
  } else r = a.toExponential(i);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Da(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(k2)) {
    var i = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Da("n", i, r) : "(" + Da("n", i, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return u3(e, a, r);
  if (a.indexOf("%") !== -1) return o3(e, a, r);
  if (a.indexOf("E") !== -1) return b2(a, r);
  if (a.charCodeAt(0) === 36) return "$" + Da(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var s, c, u, o, x = Math.abs(r), d = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return d + Ea(x, a.length);
  if (a.match(/^[#?]+$/)) return s = "" + r, r === 0 && (s = ""), s.length > a.length ? s : Sr(a.substr(0, a.length - s.length)) + s;
  if (c = a.match(S2)) return l3(c, x, d);
  if (a.match(/^#+0+$/)) return d + Ea(x, a.length - a.indexOf("0"));
  if (c = a.match(A2)) return s = ("" + r).replace(/^([^\.]+)$/, "$1." + Sr(c[1])).replace(/\.$/, "." + Sr(c[1])), s = s.replace(/\.(\d*)$/, function(T, E) {
    return "." + E + Bt("0", Sr(c[1]).length - E.length);
  }), a.indexOf("0.") !== -1 ? s : s.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), c = a.match(/^(0*)\.(#*)$/)) return d + ("" + x).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, c[1].length ? "0." : ".");
  if (c = a.match(/^#{1,3},##0(\.?)$/)) return d + In("" + x);
  if (c = a.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + Da(e, a, -r) : In("" + r) + "." + Bt("0", c[1].length);
  if (c = a.match(/^#,#*,#0/)) return Da(e, a.replace(/^#,#*,/, ""), r);
  if (c = a.match(/^([0#]+)(\\?-([0#]+))+$/)) return s = gs(Da(e, a.replace(/[\\-]/g, ""), r)), u = 0, gs(gs(a.replace(/\\/g, "")).replace(/[0#]/g, function(T) {
    return u < s.length ? s.charAt(u++) : T === "0" ? "0" : "";
  }));
  if (a.match(C2)) return s = Da(e, "##########", r), "(" + s.substr(0, 3) + ") " + s.substr(3, 3) + "-" + s.substr(6);
  var v = "";
  if (c = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(c[4].length, 7), o = rf(x, Math.pow(10, u) - 1, false), s = "" + d, v = tn("n", c[1], o[1]), v.charAt(v.length - 1) == " " && (v = v.substr(0, v.length - 1) + "0"), s += v + c[2] + "/" + c[3], v = ef(o[2], u), v.length < c[4].length && (v = Sr(c[4].substr(c[4].length - v.length)) + v), s += v, s;
  if (c = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(Math.max(c[1].length, c[4].length), 7), o = rf(x, Math.pow(10, u) - 1, true), d + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? Kh(o[1], u) + c[2] + "/" + c[3] + ef(o[2], u) : Bt(" ", 2 * u + 1 + c[2].length + c[3].length));
  if (c = a.match(/^[#0?]+$/)) return s = "" + r, a.length <= s.length ? s : Sr(a.substr(0, a.length - s.length)) + s;
  if (c = a.match(/^([#0]+)\.([#0]+)$/)) {
    s = "" + r.toFixed(Math.min(c[2].length, 10)).replace(/([^0])0+$/, "$1"), u = s.indexOf(".");
    var m = a.indexOf(".") - u, g = a.length - s.length - m;
    return Sr(a.substr(0, m) + s + a.substr(a.length - g));
  }
  if (c = a.match(/^00,000\.([#0]*0)$/)) return r < 0 ? "-" + Da(e, a, -r) : In("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(T) {
    return "00," + (T.length < 3 ? Ea(0, 3 - T.length) : "") + T;
  }) + "." + Ea(0, c[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var y = In("" + x);
      return y !== "0" ? d + y : "";
    default:
      if (a.match(/\.[0#?]*$/)) return Da(e, a.slice(0, a.lastIndexOf(".")), r) + Sr(a.slice(a.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + a + "|");
}
function tn(e, a, r) {
  return (r | 0) === r ? Da(e, a, r) : ia(e, a, r);
}
function h3(e) {
  for (var a = [], r = false, i = 0, s = 0; i < e.length; ++i) switch (e.charCodeAt(i)) {
    case 34:
      r = !r;
      break;
    case 95:
    case 42:
    case 92:
      ++i;
      break;
    case 59:
      a[a.length] = e.substr(s, i - s), s = i + 1;
  }
  if (a[a.length] = e.substr(s), r === true) throw new Error("Format |" + e + "| unterminated string ");
  return a;
}
var O2 = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Rs(e) {
  for (var a = 0, r = "", i = ""; a < e.length; ) switch (r = e.charAt(a)) {
    case "G":
      tf(e, a) && (a += 6), a++;
      break;
    case '"':
      for (; e.charCodeAt(++a) !== 34 && a < e.length; ) ;
      ++a;
      break;
    case "\\":
      a += 2;
      break;
    case "_":
      a += 2;
      break;
    case "@":
      ++a;
      break;
    case "B":
    case "b":
      if (e.charAt(a + 1) === "1" || e.charAt(a + 1) === "2") return true;
    case "M":
    case "D":
    case "Y":
    case "H":
    case "S":
    case "E":
    case "m":
    case "d":
    case "y":
    case "h":
    case "s":
    case "e":
    case "g":
      return true;
    case "A":
    case "a":
    case "\u4E0A":
      if (e.substr(a, 3).toUpperCase() === "A/P" || e.substr(a, 5).toUpperCase() === "AM/PM" || e.substr(a, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348") return true;
      ++a;
      break;
    case "[":
      for (i = r; e.charAt(a++) !== "]" && a < e.length; ) i += e.charAt(a);
      if (i.match(O2)) return true;
      break;
    case ".":
    case "0":
    case "#":
      for (; a < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++a)) > -1 || r == "\\" && e.charAt(a + 1) == "-" && "0#".indexOf(e.charAt(a + 2)) > -1); ) ;
      break;
    case "?":
      for (; e.charAt(++a) === r; ) ;
      break;
    case "*":
      ++a, (e.charAt(a) == " " || e.charAt(a) == "*") && ++a;
      break;
    case "(":
    case ")":
      ++a;
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      for (; a < e.length && "0123456789".indexOf(e.charAt(++a)) > -1; ) ;
      break;
    case " ":
      ++a;
      break;
    default:
      ++a;
      break;
  }
  return false;
}
function d3(e, a, r, i) {
  for (var s = [], c = "", u = 0, o = "", x = "t", d, v, m, g = "H"; u < e.length; ) switch (o = e.charAt(u)) {
    case "G":
      if (!tf(e, u)) throw new Error("unrecognized character " + o + " in " + e);
      s[s.length] = { t: "G", v: "General" }, u += 7;
      break;
    case '"':
      for (c = ""; (m = e.charCodeAt(++u)) !== 34 && u < e.length; ) c += String.fromCharCode(m);
      s[s.length] = { t: "t", v: c }, ++u;
      break;
    case "\\":
      var y = e.charAt(++u), T = y === "(" || y === ")" ? y : "t";
      s[s.length] = { t: T, v: y }, ++u;
      break;
    case "_":
      s[s.length] = { t: "t", v: " " }, u += 2;
      break;
    case "@":
      s[s.length] = { t: "T", v: a }, ++u;
      break;
    case "B":
    case "b":
      if (e.charAt(u + 1) === "1" || e.charAt(u + 1) === "2") {
        if (d == null && (d = mi(a, r, e.charAt(u + 1) === "2"), d == null)) return "";
        s[s.length] = { t: "X", v: e.substr(u, 2) }, x = o, u += 2;
        break;
      }
    case "M":
    case "D":
    case "Y":
    case "H":
    case "S":
    case "E":
      o = o.toLowerCase();
    case "m":
    case "d":
    case "y":
    case "h":
    case "s":
    case "e":
    case "g":
      if (a < 0 || d == null && (d = mi(a, r), d == null)) return "";
      for (c = o; ++u < e.length && e.charAt(u).toLowerCase() === o; ) c += o;
      o === "m" && x.toLowerCase() === "h" && (o = "M"), o === "h" && (o = g), s[s.length] = { t: o, v: c }, x = o;
      break;
    case "A":
    case "a":
    case "\u4E0A":
      var E = { t: o, v: o };
      if (d == null && (d = mi(a, r)), e.substr(u, 3).toUpperCase() === "A/P" ? (d != null && (E.v = d.H >= 12 ? "P" : "A"), E.t = "T", g = "h", u += 3) : e.substr(u, 5).toUpperCase() === "AM/PM" ? (d != null && (E.v = d.H >= 12 ? "PM" : "AM"), E.t = "T", u += 5, g = "h") : e.substr(u, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (d != null && (E.v = d.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), E.t = "T", u += 5, g = "h") : (E.t = "t", ++u), d == null && E.t === "T") return "";
      s[s.length] = E, x = o;
      break;
    case "[":
      for (c = o; e.charAt(u++) !== "]" && u < e.length; ) c += e.charAt(u);
      if (c.slice(-1) !== "]") throw 'unterminated "[" block: |' + c + "|";
      if (c.match(O2)) {
        if (d == null && (d = mi(a, r), d == null)) return "";
        s[s.length] = { t: "Z", v: c.toLowerCase() }, x = c.charAt(1);
      } else c.indexOf("$") > -1 && (c = (c.match(/\$([^-\[\]]*)/) || [])[1] || "$", Rs(e) || (s[s.length] = { t: "t", v: c }));
      break;
    case ".":
      if (d != null) {
        for (c = o; ++u < e.length && (o = e.charAt(u)) === "0"; ) c += o;
        s[s.length] = { t: "s", v: c };
        break;
      }
    case "0":
    case "#":
      for (c = o; ++u < e.length && "0#?.,E+-%".indexOf(o = e.charAt(u)) > -1; ) c += o;
      s[s.length] = { t: "n", v: c };
      break;
    case "?":
      for (c = o; e.charAt(++u) === o; ) c += o;
      s[s.length] = { t: o, v: c }, x = o;
      break;
    case "*":
      ++u, (e.charAt(u) == " " || e.charAt(u) == "*") && ++u;
      break;
    case "(":
    case ")":
      s[s.length] = { t: i === 1 ? "t" : o, v: o }, ++u;
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      for (c = o; u < e.length && "0123456789".indexOf(e.charAt(++u)) > -1; ) c += e.charAt(u);
      s[s.length] = { t: "D", v: c };
      break;
    case " ":
      s[s.length] = { t: o, v: o }, ++u;
      break;
    case "$":
      s[s.length] = { t: "t", v: "$" }, ++u;
      break;
    default:
      if (",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(o) === -1) throw new Error("unrecognized character " + o + " in " + e);
      s[s.length] = { t: "t", v: o }, ++u;
      break;
  }
  var _ = 0, O = 0, F;
  for (u = s.length - 1, x = "t"; u >= 0; --u) switch (s[u].t) {
    case "h":
    case "H":
      s[u].t = g, x = "h", _ < 1 && (_ = 1);
      break;
    case "s":
      (F = s[u].v.match(/\.0+$/)) && (O = Math.max(O, F[0].length - 1)), _ < 3 && (_ = 3);
    case "d":
    case "y":
    case "M":
    case "e":
      x = s[u].t;
      break;
    case "m":
      x === "s" && (s[u].t = "M", _ < 2 && (_ = 2));
      break;
    case "X":
      break;
    case "Z":
      _ < 1 && s[u].v.match(/[Hh]/) && (_ = 1), _ < 2 && s[u].v.match(/[Mm]/) && (_ = 2), _ < 3 && s[u].v.match(/[Ss]/) && (_ = 3);
  }
  switch (_) {
    case 0:
      break;
    case 1:
      d.u >= 0.5 && (d.u = 0, ++d.S), d.S >= 60 && (d.S = 0, ++d.M), d.M >= 60 && (d.M = 0, ++d.H);
      break;
    case 2:
      d.u >= 0.5 && (d.u = 0, ++d.S), d.S >= 60 && (d.S = 0, ++d.M);
      break;
  }
  var k = "", M;
  for (u = 0; u < s.length; ++u) switch (s[u].t) {
    case "t":
    case "T":
    case " ":
    case "D":
      break;
    case "X":
      s[u].v = "", s[u].t = ";";
      break;
    case "d":
    case "m":
    case "y":
    case "h":
    case "H":
    case "M":
    case "s":
    case "e":
    case "b":
    case "Z":
      s[u].v = a3(s[u].t.charCodeAt(0), s[u].v, d, O), s[u].t = "t";
      break;
    case "n":
    case "?":
      for (M = u + 1; s[M] != null && ((o = s[M].t) === "?" || o === "D" || (o === " " || o === "t") && s[M + 1] != null && (s[M + 1].t === "?" || s[M + 1].t === "t" && s[M + 1].v === "/") || s[u].t === "(" && (o === " " || o === "n" || o === ")") || o === "t" && (s[M].v === "/" || s[M].v === " " && s[M + 1] != null && s[M + 1].t == "?")); ) s[u].v += s[M].v, s[M] = { v: "", t: ";" }, ++M;
      k += s[u].v, u = M - 1;
      break;
    case "G":
      s[u].t = "t", s[u].v = Ti(a, r);
      break;
  }
  var X = "", z, C;
  if (k.length > 0) {
    k.charCodeAt(0) == 40 ? (z = a < 0 && k.charCodeAt(0) === 45 ? -a : a, C = tn("n", k, z)) : (z = a < 0 && i > 1 ? -a : a, C = tn("n", k, z), z < 0 && s[0] && s[0].t == "t" && (C = C.substr(1), s[0].v = "-" + s[0].v)), M = C.length - 1;
    var S = s.length;
    for (u = 0; u < s.length; ++u) if (s[u] != null && s[u].t != "t" && s[u].v.indexOf(".") > -1) {
      S = u;
      break;
    }
    var w = s.length;
    if (S === s.length && C.indexOf("E") === -1) {
      for (u = s.length - 1; u >= 0; --u) s[u] == null || "n?".indexOf(s[u].t) === -1 || (M >= s[u].v.length - 1 ? (M -= s[u].v.length, s[u].v = C.substr(M + 1, s[u].v.length)) : M < 0 ? s[u].v = "" : (s[u].v = C.substr(0, M + 1), M = -1), s[u].t = "t", w = u);
      M >= 0 && w < s.length && (s[w].v = C.substr(0, M + 1) + s[w].v);
    } else if (S !== s.length && C.indexOf("E") === -1) {
      for (M = C.indexOf(".") - 1, u = S; u >= 0; --u) if (!(s[u] == null || "n?".indexOf(s[u].t) === -1)) {
        for (v = s[u].v.indexOf(".") > -1 && u === S ? s[u].v.indexOf(".") - 1 : s[u].v.length - 1, X = s[u].v.substr(v + 1); v >= 0; --v) M >= 0 && (s[u].v.charAt(v) === "0" || s[u].v.charAt(v) === "#") && (X = C.charAt(M--) + X);
        s[u].v = X, s[u].t = "t", w = u;
      }
      for (M >= 0 && w < s.length && (s[w].v = C.substr(0, M + 1) + s[w].v), M = C.indexOf(".") + 1, u = S; u < s.length; ++u) if (!(s[u] == null || "n?(".indexOf(s[u].t) === -1 && u !== S)) {
        for (v = s[u].v.indexOf(".") > -1 && u === S ? s[u].v.indexOf(".") + 1 : 0, X = s[u].v.substr(0, v); v < s[u].v.length; ++v) M < C.length && (X += C.charAt(M++));
        s[u].v = X, s[u].t = "t", w = u;
      }
    }
  }
  for (u = 0; u < s.length; ++u) s[u] != null && "n?".indexOf(s[u].t) > -1 && (z = i > 1 && a < 0 && u > 0 && s[u - 1].v === "-" ? -a : a, s[u].v = tn(s[u].t, s[u].v, z), s[u].t = "t");
  var N = "";
  for (u = 0; u !== s.length; ++u) s[u] != null && (N += s[u].v);
  return N;
}
var Zp = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Qp(e, a) {
  if (a == null) return false;
  var r = parseFloat(a[2]);
  switch (a[1]) {
    case "=":
      if (e == r) return true;
      break;
    case ">":
      if (e > r) return true;
      break;
    case "<":
      if (e < r) return true;
      break;
    case "<>":
      if (e != r) return true;
      break;
    case ">=":
      if (e >= r) return true;
      break;
    case "<=":
      if (e <= r) return true;
      break;
  }
  return false;
}
function x3(e, a) {
  var r = h3(e), i = r.length, s = r[i - 1].indexOf("@");
  if (i < 4 && s > -1 && --i, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof a != "number") return [4, r.length === 4 || s > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = s > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = s > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = s > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var c = a > 0 ? r[0] : a < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [i, c];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var u = r[0].match(Zp), o = r[1].match(Zp);
    return Qp(a, u) ? [i, r[0]] : Qp(a, o) ? [i, r[1]] : [i, r[u != null && o != null ? 2 : 1]];
  }
  return [i, c];
}
function fa(e, a, r) {
  r == null && (r = {});
  var i = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? i = r.dateNF : i = e;
      break;
    case "number":
      e == 14 && r.dateNF ? i = r.dateNF : i = (r.table != null ? r.table : We)[e], i == null && (i = r.table && r.table[qp[e]] || We[qp[e]]), i == null && (i = WS[e] || "General");
      break;
  }
  if (tf(i, 0)) return Ti(a, r);
  a instanceof Date && (a = _2(a, r.date1904));
  var s = x3(i, a);
  if (tf(s[1])) return Ti(a, r);
  if (a === true) a = "TRUE";
  else if (a === false) a = "FALSE";
  else if (a === "" || a == null) return "";
  return d3(s[1], a, r, s[0]);
}
function yi(e, a) {
  if (typeof a != "number") {
    a = +a || -1;
    for (var r = 0; r < 392; ++r) {
      if (We[r] == null) {
        a < 0 && (a = r);
        continue;
      }
      if (We[r] == e) {
        a = r;
        break;
      }
    }
    a < 0 && (a = 391);
  }
  return We[a] = e, a;
}
function R2() {
  We = KS();
}
var v3 = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" }, D2 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function p3(e) {
  var a = typeof e == "number" ? We[e] : e;
  return a = a.replace(D2, "(\\d+)"), new RegExp("^" + a + "$");
}
function m3(e, a, r) {
  var i = -1, s = -1, c = -1, u = -1, o = -1, x = -1;
  (a.match(D2) || []).forEach(function(m, g) {
    var y = parseInt(r[g + 1], 10);
    switch (m.toLowerCase().charAt(0)) {
      case "y":
        i = y;
        break;
      case "d":
        c = y;
        break;
      case "h":
        u = y;
        break;
      case "s":
        x = y;
        break;
      case "m":
        u >= 0 ? o = y : s = y;
        break;
    }
  }), x >= 0 && o == -1 && s >= 0 && (o = s, s = -1);
  var d = ("" + (i >= 0 ? i : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2) + "-" + ("00" + (c >= 1 ? c : 1)).slice(-2);
  d.length == 7 && (d = "0" + d), d.length == 8 && (d = "20" + d);
  var v = ("00" + (u >= 0 ? u : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2) + ":" + ("00" + (x >= 0 ? x : 0)).slice(-2);
  return u == -1 && o == -1 && x == -1 ? d : i == -1 && s == -1 && c == -1 ? v : d + "T" + v;
}
var g3 = function() {
  var e = {};
  e.version = "1.2.0";
  function a() {
    for (var C = 0, S = new Array(256), w = 0; w != 256; ++w) C = w, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, S[w] = C;
    return typeof Int32Array < "u" ? new Int32Array(S) : S;
  }
  var r = a();
  function i(C) {
    var S = 0, w = 0, N = 0, B = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (N = 0; N != 256; ++N) B[N] = C[N];
    for (N = 0; N != 256; ++N) for (w = C[N], S = 256 + N; S < 4096; S += 256) w = B[S] = w >>> 8 ^ C[w & 255];
    var U = [];
    for (N = 1; N != 16; ++N) U[N - 1] = typeof Int32Array < "u" ? B.subarray(N * 256, N * 256 + 256) : B.slice(N * 256, N * 256 + 256);
    return U;
  }
  var s = i(r), c = s[0], u = s[1], o = s[2], x = s[3], d = s[4], v = s[5], m = s[6], g = s[7], y = s[8], T = s[9], E = s[10], _ = s[11], O = s[12], F = s[13], k = s[14];
  function M(C, S) {
    for (var w = S ^ -1, N = 0, B = C.length; N < B; ) w = w >>> 8 ^ r[(w ^ C.charCodeAt(N++)) & 255];
    return ~w;
  }
  function X(C, S) {
    for (var w = S ^ -1, N = C.length - 15, B = 0; B < N; ) w = k[C[B++] ^ w & 255] ^ F[C[B++] ^ w >> 8 & 255] ^ O[C[B++] ^ w >> 16 & 255] ^ _[C[B++] ^ w >>> 24] ^ E[C[B++]] ^ T[C[B++]] ^ y[C[B++]] ^ g[C[B++]] ^ m[C[B++]] ^ v[C[B++]] ^ d[C[B++]] ^ x[C[B++]] ^ o[C[B++]] ^ u[C[B++]] ^ c[C[B++]] ^ r[C[B++]];
    for (N += 15; B < N; ) w = w >>> 8 ^ r[(w ^ C[B++]) & 255];
    return ~w;
  }
  function z(C, S) {
    for (var w = S ^ -1, N = 0, B = C.length, U = 0, ne = 0; N < B; ) U = C.charCodeAt(N++), U < 128 ? w = w >>> 8 ^ r[(w ^ U) & 255] : U < 2048 ? (w = w >>> 8 ^ r[(w ^ (192 | U >> 6 & 31)) & 255], w = w >>> 8 ^ r[(w ^ (128 | U & 63)) & 255]) : U >= 55296 && U < 57344 ? (U = (U & 1023) + 64, ne = C.charCodeAt(N++) & 1023, w = w >>> 8 ^ r[(w ^ (240 | U >> 8 & 7)) & 255], w = w >>> 8 ^ r[(w ^ (128 | U >> 2 & 63)) & 255], w = w >>> 8 ^ r[(w ^ (128 | ne >> 6 & 15 | (U & 3) << 4)) & 255], w = w >>> 8 ^ r[(w ^ (128 | ne & 63)) & 255]) : (w = w >>> 8 ^ r[(w ^ (224 | U >> 12 & 15)) & 255], w = w >>> 8 ^ r[(w ^ (128 | U >> 6 & 63)) & 255], w = w >>> 8 ^ r[(w ^ (128 | U & 63)) & 255]);
    return ~w;
  }
  return e.table = r, e.bstr = M, e.buf = X, e.str = z, e;
}(), ft = function() {
  var a = {};
  a.version = "1.2.1";
  function r(b, G) {
    for (var L = b.split("/"), I = G.split("/"), P = 0, Y = 0, oe = Math.min(L.length, I.length); P < oe; ++P) {
      if (Y = L[P].length - I[P].length) return Y;
      if (L[P] != I[P]) return L[P] < I[P] ? -1 : 1;
    }
    return L.length - I.length;
  }
  function i(b) {
    if (b.charAt(b.length - 1) == "/") return b.slice(0, -1).indexOf("/") === -1 ? b : i(b.slice(0, -1));
    var G = b.lastIndexOf("/");
    return G === -1 ? b : b.slice(0, G + 1);
  }
  function s(b) {
    if (b.charAt(b.length - 1) == "/") return s(b.slice(0, -1));
    var G = b.lastIndexOf("/");
    return G === -1 ? b : b.slice(G + 1);
  }
  function c(b, G) {
    typeof G == "string" && (G = new Date(G));
    var L = G.getHours();
    L = L << 6 | G.getMinutes(), L = L << 5 | G.getSeconds() >>> 1, b.write_shift(2, L);
    var I = G.getFullYear() - 1980;
    I = I << 4 | G.getMonth() + 1, I = I << 5 | G.getDate(), b.write_shift(2, I);
  }
  function u(b) {
    var G = b.read_shift(2) & 65535, L = b.read_shift(2) & 65535, I = /* @__PURE__ */ new Date(), P = L & 31;
    L >>>= 5;
    var Y = L & 15;
    L >>>= 4, I.setMilliseconds(0), I.setFullYear(L + 1980), I.setMonth(Y - 1), I.setDate(P);
    var oe = G & 31;
    G >>>= 5;
    var me = G & 63;
    return G >>>= 6, I.setHours(G), I.setMinutes(me), I.setSeconds(oe << 1), I;
  }
  function o(b) {
    ur(b, 0);
    for (var G = {}, L = 0; b.l <= b.length - 4; ) {
      var I = b.read_shift(2), P = b.read_shift(2), Y = b.l + P, oe = {};
      switch (I) {
        case 21589:
          L = b.read_shift(1), L & 1 && (oe.mtime = b.read_shift(4)), P > 5 && (L & 2 && (oe.atime = b.read_shift(4)), L & 4 && (oe.ctime = b.read_shift(4))), oe.mtime && (oe.mt = new Date(oe.mtime * 1e3));
          break;
      }
      b.l = Y, G[I] = oe;
    }
    return G;
  }
  var x;
  function d() {
    return x || (x = {});
  }
  function v(b, G) {
    if (b[0] == 80 && b[1] == 75) return Ms(b, G);
    if ((b[0] | 32) == 109 && (b[1] | 32) == 105) return _f(b, G);
    if (b.length < 512) throw new Error("CFB file size " + b.length + " < 512");
    var L = 3, I = 512, P = 0, Y = 0, oe = 0, me = 0, le = 0, he = [], xe = b.slice(0, 512);
    ur(xe, 0);
    var Ce = m(xe);
    switch (L = Ce[0], L) {
      case 3:
        I = 512;
        break;
      case 4:
        I = 4096;
        break;
      case 0:
        if (Ce[1] == 0) return Ms(b, G);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + L);
    }
    I !== 512 && (xe = b.slice(0, I), ur(xe, 28));
    var Oe = b.slice(0, I);
    g(xe, L);
    var Ne = xe.read_shift(4, "i");
    if (L === 3 && Ne !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + Ne);
    xe.l += 4, oe = xe.read_shift(4, "i"), xe.l += 4, xe.chk("00100000", "Mini Stream Cutoff Size: "), me = xe.read_shift(4, "i"), P = xe.read_shift(4, "i"), le = xe.read_shift(4, "i"), Y = xe.read_shift(4, "i");
    for (var be = -1, Fe = 0; Fe < 109 && (be = xe.read_shift(4, "i"), !(be < 0)); ++Fe) he[Fe] = be;
    var Xe = y(b, I);
    _(le, Y, Xe, I, he);
    var yt = F(Xe, oe, he, I);
    yt[oe].name = "!Directory", P > 0 && me !== ne && (yt[me].name = "!MiniFAT"), yt[he[0]].name = "!FAT", yt.fat_addrs = he, yt.ssz = I;
    var Et = {}, kt = [], Ia = [], un = [];
    k(oe, yt, Xe, kt, P, Et, Ia, me), T(Ia, un, kt), kt.shift();
    var qr = { FileIndex: Ia, FullPaths: un };
    return G && G.raw && (qr.raw = { header: Oe, sectors: Xe }), qr;
  }
  function m(b) {
    if (b[b.l] == 80 && b[b.l + 1] == 75) return [0, 0];
    b.chk(ge, "Header Signature: "), b.l += 16;
    var G = b.read_shift(2, "u");
    return [b.read_shift(2, "u"), G];
  }
  function g(b, G) {
    var L = 9;
    switch (b.l += 2, L = b.read_shift(2)) {
      case 9:
        if (G != 3) throw new Error("Sector Shift: Expected 9 saw " + L);
        break;
      case 12:
        if (G != 4) throw new Error("Sector Shift: Expected 12 saw " + L);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + L);
    }
    b.chk("0600", "Mini Sector Shift: "), b.chk("000000000000", "Reserved: ");
  }
  function y(b, G) {
    for (var L = Math.ceil(b.length / G) - 1, I = [], P = 1; P < L; ++P) I[P - 1] = b.slice(P * G, (P + 1) * G);
    return I[L - 1] = b.slice(L * G), I;
  }
  function T(b, G, L) {
    for (var I = 0, P = 0, Y = 0, oe = 0, me = 0, le = L.length, he = [], xe = []; I < le; ++I) he[I] = xe[I] = I, G[I] = L[I];
    for (; me < xe.length; ++me) I = xe[me], P = b[I].L, Y = b[I].R, oe = b[I].C, he[I] === I && (P !== -1 && he[P] !== P && (he[I] = he[P]), Y !== -1 && he[Y] !== Y && (he[I] = he[Y])), oe !== -1 && (he[oe] = I), P !== -1 && I != he[I] && (he[P] = he[I], xe.lastIndexOf(P) < me && xe.push(P)), Y !== -1 && I != he[I] && (he[Y] = he[I], xe.lastIndexOf(Y) < me && xe.push(Y));
    for (I = 1; I < le; ++I) he[I] === I && (Y !== -1 && he[Y] !== Y ? he[I] = he[Y] : P !== -1 && he[P] !== P && (he[I] = he[P]));
    for (I = 1; I < le; ++I) if (b[I].type !== 0) {
      if (me = I, me != he[me]) do
        me = he[me], G[I] = G[me] + "/" + G[I];
      while (me !== 0 && he[me] !== -1 && me != he[me]);
      he[I] = -1;
    }
    for (G[0] += "/", I = 1; I < le; ++I) b[I].type !== 2 && (G[I] += "/");
  }
  function E(b, G, L) {
    for (var I = b.start, P = b.size, Y = [], oe = I; L && P > 0 && oe >= 0; ) Y.push(G.slice(oe * U, oe * U + U)), P -= U, oe = xi(L, oe * 4);
    return Y.length === 0 ? Wt(0) : Ln(Y).slice(0, b.size);
  }
  function _(b, G, L, I, P) {
    var Y = ne;
    if (b === ne) {
      if (G !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (b !== -1) {
      var oe = L[b], me = (I >>> 2) - 1;
      if (!oe) return;
      for (var le = 0; le < me && (Y = xi(oe, le * 4)) !== ne; ++le) P.push(Y);
      _(xi(oe, I - 4), G - 1, L, I, P);
    }
  }
  function O(b, G, L, I, P) {
    var Y = [], oe = [];
    P || (P = []);
    var me = I - 1, le = 0, he = 0;
    for (le = G; le >= 0; ) {
      P[le] = true, Y[Y.length] = le, oe.push(b[le]);
      var xe = L[Math.floor(le * 4 / I)];
      if (he = le * 4 & me, I < 4 + he) throw new Error("FAT boundary crossed: " + le + " 4 " + I);
      if (!b[xe]) break;
      le = xi(b[xe], he);
    }
    return { nodes: Y, data: cm([oe]) };
  }
  function F(b, G, L, I) {
    var P = b.length, Y = [], oe = [], me = [], le = [], he = I - 1, xe = 0, Ce = 0, Oe = 0, Ne = 0;
    for (xe = 0; xe < P; ++xe) if (me = [], Oe = xe + G, Oe >= P && (Oe -= P), !oe[Oe]) {
      le = [];
      var be = [];
      for (Ce = Oe; Ce >= 0; ) {
        be[Ce] = true, oe[Ce] = true, me[me.length] = Ce, le.push(b[Ce]);
        var Fe = L[Math.floor(Ce * 4 / I)];
        if (Ne = Ce * 4 & he, I < 4 + Ne) throw new Error("FAT boundary crossed: " + Ce + " 4 " + I);
        if (!b[Fe] || (Ce = xi(b[Fe], Ne), be[Ce])) break;
      }
      Y[Oe] = { nodes: me, data: cm([le]) };
    }
    return Y;
  }
  function k(b, G, L, I, P, Y, oe, me) {
    for (var le = 0, he = I.length ? 2 : 0, xe = G[b].data, Ce = 0, Oe = 0, Ne; Ce < xe.length; Ce += 128) {
      var be = xe.slice(Ce, Ce + 128);
      ur(be, 64), Oe = be.read_shift(2), Ne = td(be, 0, Oe - he), I.push(Ne);
      var Fe = { name: Ne, type: be.read_shift(1), color: be.read_shift(1), L: be.read_shift(4, "i"), R: be.read_shift(4, "i"), C: be.read_shift(4, "i"), clsid: be.read_shift(16), state: be.read_shift(4, "i"), start: 0, size: 0 }, Xe = be.read_shift(2) + be.read_shift(2) + be.read_shift(2) + be.read_shift(2);
      Xe !== 0 && (Fe.ct = M(be, be.l - 8));
      var yt = be.read_shift(2) + be.read_shift(2) + be.read_shift(2) + be.read_shift(2);
      yt !== 0 && (Fe.mt = M(be, be.l - 8)), Fe.start = be.read_shift(4, "i"), Fe.size = be.read_shift(4, "i"), Fe.size < 0 && Fe.start < 0 && (Fe.size = Fe.type = 0, Fe.start = ne, Fe.name = ""), Fe.type === 5 ? (le = Fe.start, P > 0 && le !== ne && (G[le].name = "!StreamData")) : Fe.size >= 4096 ? (Fe.storage = "fat", G[Fe.start] === void 0 && (G[Fe.start] = O(L, Fe.start, G.fat_addrs, G.ssz)), G[Fe.start].name = Fe.name, Fe.content = G[Fe.start].data.slice(0, Fe.size)) : (Fe.storage = "minifat", Fe.size < 0 ? Fe.size = 0 : le !== ne && Fe.start !== ne && G[le] && (Fe.content = E(Fe, G[le].data, (G[me] || {}).data))), Fe.content && ur(Fe.content, 0), Y[Ne] = Fe, oe.push(Fe);
    }
  }
  function M(b, G) {
    return new Date((Vr(b, G + 4) / 1e7 * Math.pow(2, 32) + Vr(b, G) / 1e7 - 11644473600) * 1e3);
  }
  function X(b, G) {
    return d(), v(x.readFileSync(b), G);
  }
  function z(b, G) {
    var L = G && G.type;
    switch (L || lt && Buffer.isBuffer(b) && (L = "buffer"), L || "base64") {
      case "file":
        return X(b, G);
      case "base64":
        return v(ga($r(b)), G);
      case "binary":
        return v(ga(b), G);
    }
    return v(b, G);
  }
  function C(b, G) {
    var L = G || {}, I = L.root || "Root Entry";
    if (b.FullPaths || (b.FullPaths = []), b.FileIndex || (b.FileIndex = []), b.FullPaths.length !== b.FileIndex.length) throw new Error("inconsistent CFB structure");
    b.FullPaths.length === 0 && (b.FullPaths[0] = I + "/", b.FileIndex[0] = { name: I, type: 5 }), L.CLSID && (b.FileIndex[0].clsid = L.CLSID), S(b);
  }
  function S(b) {
    var G = "Sh33tJ5";
    if (!ft.find(b, "/" + G)) {
      var L = Wt(4);
      L[0] = 55, L[1] = L[3] = 50, L[2] = 54, b.FileIndex.push({ name: G, type: 2, content: L, size: 4, L: 69, R: 69, C: 69 }), b.FullPaths.push(b.FullPaths[0] + G), w(b);
    }
  }
  function w(b, G) {
    C(b);
    for (var L = false, I = false, P = b.FullPaths.length - 1; P >= 0; --P) {
      var Y = b.FileIndex[P];
      switch (Y.type) {
        case 0:
          I ? L = true : (b.FileIndex.pop(), b.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          I = true, isNaN(Y.R * Y.L * Y.C) && (L = true), Y.R > -1 && Y.L > -1 && Y.R == Y.L && (L = true);
          break;
        default:
          L = true;
          break;
      }
    }
    if (!(!L && !G)) {
      var oe = new Date(1987, 1, 19), me = 0, le = Object.create ? /* @__PURE__ */ Object.create(null) : {}, he = [];
      for (P = 0; P < b.FullPaths.length; ++P) le[b.FullPaths[P]] = true, b.FileIndex[P].type !== 0 && he.push([b.FullPaths[P], b.FileIndex[P]]);
      for (P = 0; P < he.length; ++P) {
        var xe = i(he[P][0]);
        I = le[xe], I || (he.push([xe, { name: s(xe).replace("/", ""), type: 1, clsid: J, ct: oe, mt: oe, content: null }]), le[xe] = true);
      }
      for (he.sort(function(Ne, be) {
        return r(Ne[0], be[0]);
      }), b.FullPaths = [], b.FileIndex = [], P = 0; P < he.length; ++P) b.FullPaths[P] = he[P][0], b.FileIndex[P] = he[P][1];
      for (P = 0; P < he.length; ++P) {
        var Ce = b.FileIndex[P], Oe = b.FullPaths[P];
        if (Ce.name = s(Oe).replace("/", ""), Ce.L = Ce.R = Ce.C = -(Ce.color = 1), Ce.size = Ce.content ? Ce.content.length : 0, Ce.start = 0, Ce.clsid = Ce.clsid || J, P === 0) Ce.C = he.length > 1 ? 1 : -1, Ce.size = 0, Ce.type = 5;
        else if (Oe.slice(-1) == "/") {
          for (me = P + 1; me < he.length && i(b.FullPaths[me]) != Oe; ++me) ;
          for (Ce.C = me >= he.length ? -1 : me, me = P + 1; me < he.length && i(b.FullPaths[me]) != i(Oe); ++me) ;
          Ce.R = me >= he.length ? -1 : me, Ce.type = 1;
        } else i(b.FullPaths[P + 1] || "") == i(Oe) && (Ce.R = P + 1), Ce.type = 2;
      }
    }
  }
  function N(b, G) {
    var L = G || {};
    if (L.fileType == "mad") return Sa(b, L);
    switch (w(b), L.fileType) {
      case "zip":
        return $n(b, L);
    }
    var I = function(Ne) {
      for (var be = 0, Fe = 0, Xe = 0; Xe < Ne.FileIndex.length; ++Xe) {
        var yt = Ne.FileIndex[Xe];
        if (yt.content) {
          var Et = yt.content.length;
          Et > 0 && (Et < 4096 ? be += Et + 63 >> 6 : Fe += Et + 511 >> 9);
        }
      }
      for (var kt = Ne.FullPaths.length + 3 >> 2, Ia = be + 7 >> 3, un = be + 127 >> 7, qr = Ia + Fe + kt + un, oa = qr + 127 >> 7, qn = oa <= 109 ? 0 : Math.ceil((oa - 109) / 127); qr + oa + qn + 127 >> 7 > oa; ) qn = ++oa <= 109 ? 0 : Math.ceil((oa - 109) / 127);
      var ha = [1, qn, oa, un, kt, Fe, be, 0];
      return Ne.FileIndex[0].size = be << 6, ha[7] = (Ne.FileIndex[0].start = ha[0] + ha[1] + ha[2] + ha[3] + ha[4] + ha[5]) + (ha[6] + 7 >> 3), ha;
    }(b), P = Wt(I[7] << 9), Y = 0, oe = 0;
    {
      for (Y = 0; Y < 8; ++Y) P.write_shift(1, fe[Y]);
      for (Y = 0; Y < 8; ++Y) P.write_shift(2, 0);
      for (P.write_shift(2, 62), P.write_shift(2, 3), P.write_shift(2, 65534), P.write_shift(2, 9), P.write_shift(2, 6), Y = 0; Y < 3; ++Y) P.write_shift(2, 0);
      for (P.write_shift(4, 0), P.write_shift(4, I[2]), P.write_shift(4, I[0] + I[1] + I[2] + I[3] - 1), P.write_shift(4, 0), P.write_shift(4, 4096), P.write_shift(4, I[3] ? I[0] + I[1] + I[2] - 1 : ne), P.write_shift(4, I[3]), P.write_shift(-4, I[1] ? I[0] - 1 : ne), P.write_shift(4, I[1]), Y = 0; Y < 109; ++Y) P.write_shift(-4, Y < I[2] ? I[1] + Y : -1);
    }
    if (I[1]) for (oe = 0; oe < I[1]; ++oe) {
      for (; Y < 236 + oe * 127; ++Y) P.write_shift(-4, Y < I[2] ? I[1] + Y : -1);
      P.write_shift(-4, oe === I[1] - 1 ? ne : oe + 1);
    }
    var me = function(Ne) {
      for (oe += Ne; Y < oe - 1; ++Y) P.write_shift(-4, Y + 1);
      Ne && (++Y, P.write_shift(-4, ne));
    };
    for (oe = Y = 0, oe += I[1]; Y < oe; ++Y) P.write_shift(-4, ae.DIFSECT);
    for (oe += I[2]; Y < oe; ++Y) P.write_shift(-4, ae.FATSECT);
    me(I[3]), me(I[4]);
    for (var le = 0, he = 0, xe = b.FileIndex[0]; le < b.FileIndex.length; ++le) xe = b.FileIndex[le], xe.content && (he = xe.content.length, !(he < 4096) && (xe.start = oe, me(he + 511 >> 9)));
    for (me(I[6] + 7 >> 3); P.l & 511; ) P.write_shift(-4, ae.ENDOFCHAIN);
    for (oe = Y = 0, le = 0; le < b.FileIndex.length; ++le) xe = b.FileIndex[le], xe.content && (he = xe.content.length, !(!he || he >= 4096) && (xe.start = oe, me(he + 63 >> 6)));
    for (; P.l & 511; ) P.write_shift(-4, ae.ENDOFCHAIN);
    for (Y = 0; Y < I[4] << 2; ++Y) {
      var Ce = b.FullPaths[Y];
      if (!Ce || Ce.length === 0) {
        for (le = 0; le < 17; ++le) P.write_shift(4, 0);
        for (le = 0; le < 3; ++le) P.write_shift(4, -1);
        for (le = 0; le < 12; ++le) P.write_shift(4, 0);
        continue;
      }
      xe = b.FileIndex[Y], Y === 0 && (xe.start = xe.size ? xe.start - 1 : ne);
      var Oe = Y === 0 && L.root || xe.name;
      if (he = 2 * (Oe.length + 1), P.write_shift(64, Oe, "utf16le"), P.write_shift(2, he), P.write_shift(1, xe.type), P.write_shift(1, xe.color), P.write_shift(-4, xe.L), P.write_shift(-4, xe.R), P.write_shift(-4, xe.C), xe.clsid) P.write_shift(16, xe.clsid, "hex");
      else for (le = 0; le < 4; ++le) P.write_shift(4, 0);
      P.write_shift(4, xe.state || 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, xe.start), P.write_shift(4, xe.size), P.write_shift(4, 0);
    }
    for (Y = 1; Y < b.FileIndex.length; ++Y) if (xe = b.FileIndex[Y], xe.size >= 4096) if (P.l = xe.start + 1 << 9, lt && Buffer.isBuffer(xe.content)) xe.content.copy(P, P.l, 0, xe.size), P.l += xe.size + 511 & -512;
    else {
      for (le = 0; le < xe.size; ++le) P.write_shift(1, xe.content[le]);
      for (; le & 511; ++le) P.write_shift(1, 0);
    }
    for (Y = 1; Y < b.FileIndex.length; ++Y) if (xe = b.FileIndex[Y], xe.size > 0 && xe.size < 4096) if (lt && Buffer.isBuffer(xe.content)) xe.content.copy(P, P.l, 0, xe.size), P.l += xe.size + 63 & -64;
    else {
      for (le = 0; le < xe.size; ++le) P.write_shift(1, xe.content[le]);
      for (; le & 63; ++le) P.write_shift(1, 0);
    }
    if (lt) P.l = P.length;
    else for (; P.l < P.length; ) P.write_shift(1, 0);
    return P;
  }
  function B(b, G) {
    var L = b.FullPaths.map(function(le) {
      return le.toUpperCase();
    }), I = L.map(function(le) {
      var he = le.split("/");
      return he[he.length - (le.slice(-1) == "/" ? 2 : 1)];
    }), P = false;
    G.charCodeAt(0) === 47 ? (P = true, G = L[0].slice(0, -1) + G) : P = G.indexOf("/") !== -1;
    var Y = G.toUpperCase(), oe = P === true ? L.indexOf(Y) : I.indexOf(Y);
    if (oe !== -1) return b.FileIndex[oe];
    var me = !Y.match(Bl);
    for (Y = Y.replace(Cr, ""), me && (Y = Y.replace(Bl, "!")), oe = 0; oe < L.length; ++oe) if ((me ? L[oe].replace(Bl, "!") : L[oe]).replace(Cr, "") == Y || (me ? I[oe].replace(Bl, "!") : I[oe]).replace(Cr, "") == Y) return b.FileIndex[oe];
    return null;
  }
  var U = 64, ne = -2, ge = "d0cf11e0a1b11ae1", fe = [208, 207, 17, 224, 161, 177, 26, 225], J = "00000000000000000000000000000000", ae = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: ne, FREESECT: -1, HEADER_SIGNATURE: ge, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: J, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
  function we(b, G, L) {
    d();
    var I = N(b, L);
    x.writeFileSync(G, I);
  }
  function Q(b) {
    for (var G = new Array(b.length), L = 0; L < b.length; ++L) G[L] = String.fromCharCode(b[L]);
    return G.join("");
  }
  function H(b, G) {
    var L = N(b, G);
    switch (G && G.type || "buffer") {
      case "file":
        return d(), x.writeFileSync(G.filename, L), L;
      case "binary":
        return typeof L == "string" ? L : Q(L);
      case "base64":
        return Vp(typeof L == "string" ? L : Q(L));
      case "buffer":
        if (lt) return Buffer.isBuffer(L) ? L : Ai(L);
      case "array":
        return typeof L == "string" ? ga(L) : L;
    }
    return L;
  }
  var re;
  function R(b) {
    try {
      var G = b.InflateRaw, L = new G();
      if (L._processChunk(new Uint8Array([3, 0]), L._finishFlushFlag), L.bytesRead) re = b;
      else throw new Error("zlib does not expose bytesRead");
    } catch (I) {
      console.error("cannot use native zlib: " + (I.message || I));
    }
  }
  function j(b, G) {
    if (!re) return E0(b, G);
    var L = re.InflateRaw, I = new L(), P = I._processChunk(b.slice(b.l), I._finishFlushFlag);
    return b.l += I.bytesRead, P;
  }
  function q(b) {
    return re ? re.deflateRawSync(b) : $e(b);
  }
  var K = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ie = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], Ae = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function pe(b) {
    var G = (b << 1 | b << 11) & 139536 | (b << 5 | b << 15) & 558144;
    return (G >> 16 | G >> 8 | G) & 255;
  }
  for (var ye = typeof Uint8Array < "u", _e = ye ? new Uint8Array(256) : [], Re = 0; Re < 256; ++Re) _e[Re] = pe(Re);
  function V(b, G) {
    var L = _e[b & 255];
    return G <= 8 ? L >>> 8 - G : (L = L << 8 | _e[b >> 8 & 255], G <= 16 ? L >>> 16 - G : (L = L << 8 | _e[b >> 16 & 255], L >>> 24 - G));
  }
  function Ge(b, G) {
    var L = G & 7, I = G >>> 3;
    return (b[I] | (L <= 6 ? 0 : b[I + 1] << 8)) >>> L & 3;
  }
  function Le(b, G) {
    var L = G & 7, I = G >>> 3;
    return (b[I] | (L <= 5 ? 0 : b[I + 1] << 8)) >>> L & 7;
  }
  function Be(b, G) {
    var L = G & 7, I = G >>> 3;
    return (b[I] | (L <= 4 ? 0 : b[I + 1] << 8)) >>> L & 15;
  }
  function De(b, G) {
    var L = G & 7, I = G >>> 3;
    return (b[I] | (L <= 3 ? 0 : b[I + 1] << 8)) >>> L & 31;
  }
  function ke(b, G) {
    var L = G & 7, I = G >>> 3;
    return (b[I] | (L <= 1 ? 0 : b[I + 1] << 8)) >>> L & 127;
  }
  function Ie(b, G, L) {
    var I = G & 7, P = G >>> 3, Y = (1 << L) - 1, oe = b[P] >>> I;
    return L < 8 - I || (oe |= b[P + 1] << 8 - I, L < 16 - I) || (oe |= b[P + 2] << 16 - I, L < 24 - I) || (oe |= b[P + 3] << 24 - I), oe & Y;
  }
  function Ke(b, G, L) {
    var I = G & 7, P = G >>> 3;
    return I <= 5 ? b[P] |= (L & 7) << I : (b[P] |= L << I & 255, b[P + 1] = (L & 7) >> 8 - I), G + 3;
  }
  function Ze(b, G, L) {
    var I = G & 7, P = G >>> 3;
    return L = (L & 1) << I, b[P] |= L, G + 1;
  }
  function At(b, G, L) {
    var I = G & 7, P = G >>> 3;
    return L <<= I, b[P] |= L & 255, L >>>= 8, b[P + 1] = L, G + 8;
  }
  function It(b, G, L) {
    var I = G & 7, P = G >>> 3;
    return L <<= I, b[P] |= L & 255, L >>>= 8, b[P + 1] = L & 255, b[P + 2] = L >>> 8, G + 16;
  }
  function Pt(b, G) {
    var L = b.length, I = 2 * L > G ? 2 * L : G + 5, P = 0;
    if (L >= G) return b;
    if (lt) {
      var Y = Xp(I);
      if (b.copy) b.copy(Y);
      else for (; P < b.length; ++P) Y[P] = b[P];
      return Y;
    } else if (ye) {
      var oe = new Uint8Array(I);
      if (oe.set) oe.set(b);
      else for (; P < L; ++P) oe[P] = b[P];
      return oe;
    }
    return b.length = I, b;
  }
  function it(b) {
    for (var G = new Array(b), L = 0; L < b; ++L) G[L] = 0;
    return G;
  }
  function Ot(b, G, L) {
    var I = 1, P = 0, Y = 0, oe = 0, me = 0, le = b.length, he = ye ? new Uint16Array(32) : it(32);
    for (Y = 0; Y < 32; ++Y) he[Y] = 0;
    for (Y = le; Y < L; ++Y) b[Y] = 0;
    le = b.length;
    var xe = ye ? new Uint16Array(le) : it(le);
    for (Y = 0; Y < le; ++Y) he[P = b[Y]]++, I < P && (I = P), xe[Y] = 0;
    for (he[0] = 0, Y = 1; Y <= I; ++Y) he[Y + 16] = me = me + he[Y - 1] << 1;
    for (Y = 0; Y < le; ++Y) me = b[Y], me != 0 && (xe[Y] = he[me + 16]++);
    var Ce = 0;
    for (Y = 0; Y < le; ++Y) if (Ce = b[Y], Ce != 0) for (me = V(xe[Y], I) >> I - Ce, oe = (1 << I + 4 - Ce) - 1; oe >= 0; --oe) G[me | oe << Ce] = Ce & 15 | Y << 4;
    return I;
  }
  var st = ye ? new Uint16Array(512) : it(512), tt = ye ? new Uint16Array(32) : it(32);
  if (!ye) {
    for (var rt = 0; rt < 512; ++rt) st[rt] = 0;
    for (rt = 0; rt < 32; ++rt) tt[rt] = 0;
  }
  (function() {
    for (var b = [], G = 0; G < 32; G++) b.push(5);
    Ot(b, tt, 32);
    var L = [];
    for (G = 0; G <= 143; G++) L.push(8);
    for (; G <= 255; G++) L.push(9);
    for (; G <= 279; G++) L.push(7);
    for (; G <= 287; G++) L.push(8);
    Ot(L, st, 288);
  })();
  var gt = function() {
    for (var G = ye ? new Uint8Array(32768) : [], L = 0, I = 0; L < Ae.length - 1; ++L) for (; I < Ae[L + 1]; ++I) G[I] = L;
    for (; I < 32768; ++I) G[I] = 29;
    var P = ye ? new Uint8Array(259) : [];
    for (L = 0, I = 0; L < ie.length - 1; ++L) for (; I < ie[L + 1]; ++I) P[I] = L;
    function Y(me, le) {
      for (var he = 0; he < me.length; ) {
        var xe = Math.min(65535, me.length - he), Ce = he + xe == me.length;
        for (le.write_shift(1, +Ce), le.write_shift(2, xe), le.write_shift(2, ~xe & 65535); xe-- > 0; ) le[le.l++] = me[he++];
      }
      return le.l;
    }
    function oe(me, le) {
      for (var he = 0, xe = 0, Ce = ye ? new Uint16Array(32768) : []; xe < me.length; ) {
        var Oe = Math.min(65535, me.length - xe);
        if (Oe < 10) {
          for (he = Ke(le, he, +(xe + Oe == me.length)), he & 7 && (he += 8 - (he & 7)), le.l = he / 8 | 0, le.write_shift(2, Oe), le.write_shift(2, ~Oe & 65535); Oe-- > 0; ) le[le.l++] = me[xe++];
          he = le.l * 8;
          continue;
        }
        he = Ke(le, he, +(xe + Oe == me.length) + 2);
        for (var Ne = 0; Oe-- > 0; ) {
          var be = me[xe];
          Ne = (Ne << 5 ^ be) & 32767;
          var Fe = -1, Xe = 0;
          if ((Fe = Ce[Ne]) && (Fe |= xe & -32768, Fe > xe && (Fe -= 32768), Fe < xe)) for (; me[Fe + Xe] == me[xe + Xe] && Xe < 250; ) ++Xe;
          if (Xe > 2) {
            be = P[Xe], be <= 22 ? he = At(le, he, _e[be + 1] >> 1) - 1 : (At(le, he, 3), he += 5, At(le, he, _e[be - 23] >> 5), he += 3);
            var yt = be < 8 ? 0 : be - 4 >> 2;
            yt > 0 && (It(le, he, Xe - ie[be]), he += yt), be = G[xe - Fe], he = At(le, he, _e[be] >> 3), he -= 3;
            var Et = be < 4 ? 0 : be - 2 >> 1;
            Et > 0 && (It(le, he, xe - Fe - Ae[be]), he += Et);
            for (var kt = 0; kt < Xe; ++kt) Ce[Ne] = xe & 32767, Ne = (Ne << 5 ^ me[xe]) & 32767, ++xe;
            Oe -= Xe - 1;
          } else be <= 143 ? be = be + 48 : he = Ze(le, he, 1), he = At(le, he, _e[be]), Ce[Ne] = xe & 32767, ++xe;
        }
        he = At(le, he, 0) - 1;
      }
      return le.l = (he + 7) / 8 | 0, le.l;
    }
    return function(le, he) {
      return le.length < 8 ? Y(le, he) : oe(le, he);
    };
  }();
  function $e(b) {
    var G = Wt(50 + Math.floor(b.length * 1.1)), L = gt(b, G);
    return G.slice(0, L);
  }
  var xt = ye ? new Uint16Array(32768) : it(32768), Rt = ye ? new Uint16Array(32768) : it(32768), vt = ye ? new Uint16Array(128) : it(128), Tr = 1, wa = 1;
  function Di(b, G) {
    var L = De(b, G) + 257;
    G += 5;
    var I = De(b, G) + 1;
    G += 5;
    var P = Be(b, G) + 4;
    G += 4;
    for (var Y = 0, oe = ye ? new Uint8Array(19) : it(19), me = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], le = 1, he = ye ? new Uint8Array(8) : it(8), xe = ye ? new Uint8Array(8) : it(8), Ce = oe.length, Oe = 0; Oe < P; ++Oe) oe[K[Oe]] = Y = Le(b, G), le < Y && (le = Y), he[Y]++, G += 3;
    var Ne = 0;
    for (he[0] = 0, Oe = 1; Oe <= le; ++Oe) xe[Oe] = Ne = Ne + he[Oe - 1] << 1;
    for (Oe = 0; Oe < Ce; ++Oe) (Ne = oe[Oe]) != 0 && (me[Oe] = xe[Ne]++);
    var be = 0;
    for (Oe = 0; Oe < Ce; ++Oe) if (be = oe[Oe], be != 0) {
      Ne = _e[me[Oe]] >> 8 - be;
      for (var Fe = (1 << 7 - be) - 1; Fe >= 0; --Fe) vt[Ne | Fe << be] = be & 7 | Oe << 3;
    }
    var Xe = [];
    for (le = 1; Xe.length < L + I; ) switch (Ne = vt[ke(b, G)], G += Ne & 7, Ne >>>= 3) {
      case 16:
        for (Y = 3 + Ge(b, G), G += 2, Ne = Xe[Xe.length - 1]; Y-- > 0; ) Xe.push(Ne);
        break;
      case 17:
        for (Y = 3 + Le(b, G), G += 3; Y-- > 0; ) Xe.push(0);
        break;
      case 18:
        for (Y = 11 + ke(b, G), G += 7; Y-- > 0; ) Xe.push(0);
        break;
      default:
        Xe.push(Ne), le < Ne && (le = Ne);
        break;
    }
    var yt = Xe.slice(0, L), Et = Xe.slice(L);
    for (Oe = L; Oe < 286; ++Oe) yt[Oe] = 0;
    for (Oe = I; Oe < 30; ++Oe) Et[Oe] = 0;
    return Tr = Ot(yt, xt, 286), wa = Ot(Et, Rt, 30), G;
  }
  function Yn(b, G) {
    if (b[0] == 3 && !(b[1] & 3)) return [Pn(G), 2];
    for (var L = 0, I = 0, P = Xp(G || 1 << 18), Y = 0, oe = P.length >>> 0, me = 0, le = 0; (I & 1) == 0; ) {
      if (I = Le(b, L), L += 3, I >>> 1) I >> 1 == 1 ? (me = 9, le = 5) : (L = Di(b, L), me = Tr, le = wa);
      else {
        L & 7 && (L += 8 - (L & 7));
        var he = b[L >>> 3] | b[(L >>> 3) + 1] << 8;
        if (L += 32, he > 0) for (!G && oe < Y + he && (P = Pt(P, Y + he), oe = P.length); he-- > 0; ) P[Y++] = b[L >>> 3], L += 8;
        continue;
      }
      for (; ; ) {
        !G && oe < Y + 32767 && (P = Pt(P, Y + 32767), oe = P.length);
        var xe = Ie(b, L, me), Ce = I >>> 1 == 1 ? st[xe] : xt[xe];
        if (L += Ce & 15, Ce >>>= 4, (Ce >>> 8 & 255) === 0) P[Y++] = Ce;
        else {
          if (Ce == 256) break;
          Ce -= 257;
          var Oe = Ce < 8 ? 0 : Ce - 4 >> 2;
          Oe > 5 && (Oe = 0);
          var Ne = Y + ie[Ce];
          Oe > 0 && (Ne += Ie(b, L, Oe), L += Oe), xe = Ie(b, L, le), Ce = I >>> 1 == 1 ? tt[xe] : Rt[xe], L += Ce & 15, Ce >>>= 4;
          var be = Ce < 4 ? 0 : Ce - 2 >> 1, Fe = Ae[Ce];
          for (be > 0 && (Fe += Ie(b, L, be), L += be), !G && oe < Ne && (P = Pt(P, Ne + 100), oe = P.length); Y < Ne; ) P[Y] = P[Y - Fe], ++Y;
        }
      }
    }
    return G ? [P, L + 7 >>> 3] : [P.slice(0, Y), L + 7 >>> 3];
  }
  function E0(b, G) {
    var L = b.slice(b.l || 0), I = Yn(L, G);
    return b.l += I[1], I[0];
  }
  function Ns(b, G) {
    if (b) typeof console < "u" && console.error(G);
    else throw new Error(G);
  }
  function Ms(b, G) {
    var L = b;
    ur(L, 0);
    var I = [], P = [], Y = { FileIndex: I, FullPaths: P };
    C(Y, { root: G.root });
    for (var oe = L.length - 4; (L[oe] != 80 || L[oe + 1] != 75 || L[oe + 2] != 5 || L[oe + 3] != 6) && oe >= 0; ) --oe;
    L.l = oe + 4, L.l += 4;
    var me = L.read_shift(2);
    L.l += 6;
    var le = L.read_shift(4);
    for (L.l = le, oe = 0; oe < me; ++oe) {
      L.l += 20;
      var he = L.read_shift(4), xe = L.read_shift(4), Ce = L.read_shift(2), Oe = L.read_shift(2), Ne = L.read_shift(2);
      L.l += 8;
      var be = L.read_shift(4), Fe = o(L.slice(L.l + Ce, L.l + Ce + Oe));
      L.l += Ce + Oe + Ne;
      var Xe = L.l;
      L.l = be + 4, Ls(L, he, xe, Y, Fe), L.l = Xe;
    }
    return Y;
  }
  function Ls(b, G, L, I, P) {
    b.l += 2;
    var Y = b.read_shift(2), oe = b.read_shift(2), me = u(b);
    if (Y & 8257) throw new Error("Unsupported ZIP encryption");
    for (var le = b.read_shift(4), he = b.read_shift(4), xe = b.read_shift(4), Ce = b.read_shift(2), Oe = b.read_shift(2), Ne = "", be = 0; be < Ce; ++be) Ne += String.fromCharCode(b[b.l++]);
    if (Oe) {
      var Fe = o(b.slice(b.l, b.l + Oe));
      (Fe[21589] || {}).mt && (me = Fe[21589].mt), ((P || {})[21589] || {}).mt && (me = P[21589].mt);
    }
    b.l += Oe;
    var Xe = b.slice(b.l, b.l + he);
    switch (oe) {
      case 8:
        Xe = j(b, xe);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + oe);
    }
    var yt = false;
    Y & 8 && (le = b.read_shift(4), le == 134695760 && (le = b.read_shift(4), yt = true), he = b.read_shift(4), xe = b.read_shift(4)), he != G && Ns(yt, "Bad compressed size: " + G + " != " + he), xe != L && Ns(yt, "Bad uncompressed size: " + L + " != " + xe), er(I, Ne, Xe, { unsafe: true, mt: me });
  }
  function $n(b, G) {
    var L = G || {}, I = [], P = [], Y = Wt(1), oe = L.compression ? 8 : 0, me = 0, le = 0, he = 0, xe = 0, Ce = 0, Oe = b.FullPaths[0], Ne = Oe, be = b.FileIndex[0], Fe = [], Xe = 0;
    for (le = 1; le < b.FullPaths.length; ++le) if (Ne = b.FullPaths[le].slice(Oe.length), be = b.FileIndex[le], !(!be.size || !be.content || Ne == "Sh33tJ5")) {
      var yt = xe, Et = Wt(Ne.length);
      for (he = 0; he < Ne.length; ++he) Et.write_shift(1, Ne.charCodeAt(he) & 127);
      Et = Et.slice(0, Et.l), Fe[Ce] = g3.buf(be.content, 0);
      var kt = be.content;
      oe == 8 && (kt = q(kt)), Y = Wt(30), Y.write_shift(4, 67324752), Y.write_shift(2, 20), Y.write_shift(2, me), Y.write_shift(2, oe), be.mt ? c(Y, be.mt) : Y.write_shift(4, 0), Y.write_shift(-4, Fe[Ce]), Y.write_shift(4, kt.length), Y.write_shift(4, be.content.length), Y.write_shift(2, Et.length), Y.write_shift(2, 0), xe += Y.length, I.push(Y), xe += Et.length, I.push(Et), xe += kt.length, I.push(kt), Y = Wt(46), Y.write_shift(4, 33639248), Y.write_shift(2, 0), Y.write_shift(2, 20), Y.write_shift(2, me), Y.write_shift(2, oe), Y.write_shift(4, 0), Y.write_shift(-4, Fe[Ce]), Y.write_shift(4, kt.length), Y.write_shift(4, be.content.length), Y.write_shift(2, Et.length), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(4, 0), Y.write_shift(4, yt), Xe += Y.l, P.push(Y), Xe += Et.length, P.push(Et), ++Ce;
    }
    return Y = Wt(22), Y.write_shift(4, 101010256), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(2, Ce), Y.write_shift(2, Ce), Y.write_shift(4, Xe), Y.write_shift(4, xe), Y.write_shift(2, 0), Ln([Ln(I), Ln(P), Y]);
  }
  var Fi = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
  function _0(b, G) {
    if (b.ctype) return b.ctype;
    var L = b.name || "", I = L.match(/\.([^\.]+)$/);
    return I && Fi[I[1]] || G && (I = (L = G).match(/[\.\\]([^\.\\])+$/), I && Fi[I[1]]) ? Fi[I[1]] : "application/octet-stream";
  }
  function T0(b) {
    for (var G = Vp(b), L = [], I = 0; I < G.length; I += 76) L.push(G.slice(I, I + 76));
    return L.join(`\r
`) + `\r
`;
  }
  function Bs(b) {
    var G = b.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(he) {
      var xe = he.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (xe.length == 1 ? "0" + xe : xe);
    });
    G = G.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), G.charAt(0) == `
` && (G = "=0D" + G.slice(1)), G = G.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var L = [], I = G.split(`\r
`), P = 0; P < I.length; ++P) {
      var Y = I[P];
      if (Y.length == 0) {
        L.push("");
        continue;
      }
      for (var oe = 0; oe < Y.length; ) {
        var me = 76, le = Y.slice(oe, oe + me);
        le.charAt(me - 1) == "=" ? me-- : le.charAt(me - 2) == "=" ? me -= 2 : le.charAt(me - 3) == "=" && (me -= 3), le = Y.slice(oe, oe + me), oe += me, oe < Y.length && (le += "="), L.push(le);
      }
    }
    return L.join(`\r
`);
  }
  function Us(b) {
    for (var G = [], L = 0; L < b.length; ++L) {
      for (var I = b[L]; L <= b.length && I.charAt(I.length - 1) == "="; ) I = I.slice(0, I.length - 1) + b[++L];
      G.push(I);
    }
    for (var P = 0; P < G.length; ++P) G[P] = G[P].replace(/[=][0-9A-Fa-f]{2}/g, function(Y) {
      return String.fromCharCode(parseInt(Y.slice(1), 16));
    });
    return ga(G.join(`\r
`));
  }
  function w0(b, G, L) {
    for (var I = "", P = "", Y = "", oe, me = 0; me < 10; ++me) {
      var le = G[me];
      if (!le || le.match(/^\s*$/)) break;
      var he = le.match(/^(.*?):\s*([^\s].*)$/);
      if (he) switch (he[1].toLowerCase()) {
        case "content-location":
          I = he[2].trim();
          break;
        case "content-type":
          Y = he[2].trim();
          break;
        case "content-transfer-encoding":
          P = he[2].trim();
          break;
      }
    }
    switch (++me, P.toLowerCase()) {
      case "base64":
        oe = ga($r(G.slice(me).join("")));
        break;
      case "quoted-printable":
        oe = Us(G.slice(me));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + P);
    }
    var xe = er(b, I.slice(L.length), oe, { unsafe: true });
    Y && (xe.ctype = Y);
  }
  function _f(b, G) {
    if (Q(b.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var L = G && G.root || "", I = (lt && Buffer.isBuffer(b) ? b.toString("binary") : Q(b)).split(`\r
`), P = 0, Y = "";
    for (P = 0; P < I.length; ++P) if (Y = I[P], !!/^Content-Location:/i.test(Y) && (Y = Y.slice(Y.indexOf("file")), L || (L = Y.slice(0, Y.lastIndexOf("/") + 1)), Y.slice(0, L.length) != L)) for (; L.length > 0 && (L = L.slice(0, L.length - 1), L = L.slice(0, L.lastIndexOf("/") + 1), Y.slice(0, L.length) != L); ) ;
    var oe = (I[1] || "").match(/boundary="(.*?)"/);
    if (!oe) throw new Error("MAD cannot find boundary");
    var me = "--" + (oe[1] || ""), le = [], he = [], xe = { FileIndex: le, FullPaths: he };
    C(xe);
    var Ce, Oe = 0;
    for (P = 0; P < I.length; ++P) {
      var Ne = I[P];
      Ne !== me && Ne !== me + "--" || (Oe++ && w0(xe, I.slice(Ce, P), L), Ce = P);
    }
    return xe;
  }
  function Sa(b, G) {
    var L = G || {}, I = L.boundary || "SheetJS";
    I = "------=" + I;
    for (var P = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + I.slice(2) + '"', "", "", ""], Y = b.FullPaths[0], oe = Y, me = b.FileIndex[0], le = 1; le < b.FullPaths.length; ++le) if (oe = b.FullPaths[le].slice(Y.length), me = b.FileIndex[le], !(!me.size || !me.content || oe == "Sh33tJ5")) {
      oe = oe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(Xe) {
        return "_x" + Xe.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(Xe) {
        return "_u" + Xe.charCodeAt(0).toString(16) + "_";
      });
      for (var he = me.content, xe = lt && Buffer.isBuffer(he) ? he.toString("binary") : Q(he), Ce = 0, Oe = Math.min(1024, xe.length), Ne = 0, be = 0; be <= Oe; ++be) (Ne = xe.charCodeAt(be)) >= 32 && Ne < 128 && ++Ce;
      var Fe = Ce >= Oe * 4 / 5;
      P.push(I), P.push("Content-Location: " + (L.root || "file:///C:/SheetJS/") + oe), P.push("Content-Transfer-Encoding: " + (Fe ? "quoted-printable" : "base64")), P.push("Content-Type: " + _0(me, oe)), P.push(""), P.push(Fe ? Bs(xe) : T0(xe));
    }
    return P.push(I + `--\r
`), P.join(`\r
`);
  }
  function Jt(b) {
    var G = {};
    return C(G, b), G;
  }
  function er(b, G, L, I) {
    var P = I && I.unsafe;
    P || C(b);
    var Y = !P && ft.find(b, G);
    if (!Y) {
      var oe = b.FullPaths[0];
      G.slice(0, oe.length) == oe ? oe = G : (oe.slice(-1) != "/" && (oe += "/"), oe = (oe + G).replace("//", "/")), Y = { name: s(G), type: 2 }, b.FileIndex.push(Y), b.FullPaths.push(oe), P || ft.utils.cfb_gc(b);
    }
    return Y.content = L, Y.size = L ? L.length : 0, I && (I.CLSID && (Y.clsid = I.CLSID), I.mt && (Y.mt = I.mt), I.ct && (Y.ct = I.ct)), Y;
  }
  function fn(b, G) {
    C(b);
    var L = ft.find(b, G);
    if (L) {
      for (var I = 0; I < b.FileIndex.length; ++I) if (b.FileIndex[I] == L) return b.FileIndex.splice(I, 1), b.FullPaths.splice(I, 1), true;
    }
    return false;
  }
  function Is(b, G, L) {
    C(b);
    var I = ft.find(b, G);
    if (I) {
      for (var P = 0; P < b.FileIndex.length; ++P) if (b.FileIndex[P] == I) return b.FileIndex[P].name = s(L), b.FullPaths[P] = L, true;
    }
    return false;
  }
  function Tf(b) {
    w(b, true);
  }
  return a.find = B, a.read = z, a.parse = v, a.write = H, a.writeFile = we, a.utils = { cfb_new: Jt, cfb_add: er, cfb_del: fn, cfb_mov: Is, cfb_gc: Tf, ReadShift: Pl, CheckField: J2, prep_blob: ur, bconcat: Ln, use_zlib: R, _deflateRaw: $e, _inflateRaw: E0, consts: ae }, a;
}();
function y3(e) {
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var a = File(e);
    a.open("r"), a.encoding = "binary";
    var r = a.read();
    return a.close(), r;
  } catch (i) {
    if (!i.message || !i.message.match(/onstruct/)) throw i;
  }
  throw new Error("Cannot access file " + e);
}
function La(e) {
  for (var a = Object.keys(e), r = [], i = 0; i < a.length; ++i) Object.prototype.hasOwnProperty.call(e, a[i]) && r.push(a[i]);
  return r;
}
function Zh(e) {
  for (var a = [], r = La(e), i = 0; i !== r.length; ++i) a[e[r[i]]] = r[i];
  return a;
}
var af = new Date(1899, 11, 30, 0, 0, 0);
function br(e, a) {
  var r = e.getTime(), i = af.getTime() + (e.getTimezoneOffset() - af.getTimezoneOffset()) * 6e4;
  return (r - i) / (24 * 60 * 60 * 1e3);
}
var F2 = /* @__PURE__ */ new Date(), E3 = af.getTime() + (F2.getTimezoneOffset() - af.getTimezoneOffset()) * 6e4, Jp = F2.getTimezoneOffset();
function mf(e) {
  var a = /* @__PURE__ */ new Date();
  return a.setTime(e * 24 * 60 * 60 * 1e3 + E3), a.getTimezoneOffset() !== Jp && a.setTime(a.getTime() + (a.getTimezoneOffset() - Jp) * 6e4), a;
}
function _3(e) {
  var a = 0, r = 0, i = false, s = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!s) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var c = 1; c != s.length; ++c) if (s[c]) {
    switch (r = 1, c > 3 && (i = true), s[c].slice(s[c].length - 1)) {
      case "Y":
        throw new Error("Unsupported ISO Duration Field: " + s[c].slice(s[c].length - 1));
      case "D":
        r *= 24;
      case "H":
        r *= 60;
      case "M":
        if (i) r *= 60;
        else throw new Error("Unsupported ISO Duration Field: M");
    }
    a += r * parseInt(s[c], 10);
  }
  return a;
}
var em = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), N2 = isNaN(em.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : em, T3 = N2.getFullYear() == 2017;
function ir(e, a) {
  var r = new Date(e);
  if (T3) return a > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : a < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date) return e;
  if (N2.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var i = r.getFullYear();
    return e.indexOf("" + i) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var s = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], c = new Date(+s[0], +s[1] - 1, +s[2], +s[3] || 0, +s[4] || 0, +s[5] || 0);
  return e.indexOf("Z") > -1 && (c = new Date(c.getTime() - c.getTimezoneOffset() * 60 * 1e3)), c;
}
function wi(e, a) {
  if (lt && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Il(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Il(y2(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Il(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Il(new TextDecoder("utf-16be").decode(e.slice(2)));
    }
    var r = { "\u20AC": "\x80", "\u201A": "\x82", \u0192: "\x83", "\u201E": "\x84", "\u2026": "\x85", "\u2020": "\x86", "\u2021": "\x87", "\u02C6": "\x88", "\u2030": "\x89", \u0160: "\x8A", "\u2039": "\x8B", \u0152: "\x8C", \u017D: "\x8E", "\u2018": "\x91", "\u2019": "\x92", "\u201C": "\x93", "\u201D": "\x94", "\u2022": "\x95", "\u2013": "\x96", "\u2014": "\x97", "\u02DC": "\x98", "\u2122": "\x99", \u0161: "\x9A", "\u203A": "\x9B", \u0153: "\x9C", \u017E: "\x9E", \u0178: "\x9F" };
    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(c) {
      return r[c] || c;
    });
  } catch {
  }
  for (var i = [], s = 0; s != e.length; ++s) i.push(String.fromCharCode(e[s]));
  return i.join("");
}
function or(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = or(e[r]));
  return a;
}
function Bt(e, a) {
  for (var r = ""; r.length < a; ) r += e;
  return r;
}
function Ta(e) {
  var a = Number(e);
  if (!isNaN(a)) return isFinite(a) ? a : NaN;
  if (!/\d/.test(e)) return a;
  var r = 1, i = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(a = Number(i)) || (i = i.replace(/[(](.*)[)]/, function(s, c) {
    return r = -r, c;
  }), !isNaN(a = Number(i))) ? a / r : a;
}
var w3 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function ks(e) {
  var a = new Date(e), r = /* @__PURE__ */ new Date(NaN), i = a.getYear(), s = a.getMonth(), c = a.getDate();
  if (isNaN(c)) return r;
  var u = e.toLowerCase();
  if (u.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (u = u.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), u.length > 3 && w3.indexOf(u) == -1) return r;
  } else if (u.match(/[a-z]/)) return r;
  return i < 0 || i > 8099 ? r : (s > 0 || c > 1) && i != 101 ? a : e.match(/[^-0-9:,\/\\]/) ? r : a;
}
var S3 = function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(r, i, s) {
    if (e || typeof i == "string") return r.split(i);
    for (var c = r.split(i), u = [c[0]], o = 1; o < c.length; ++o) u.push(s), u.push(c[o]);
    return u;
  };
}();
function M2(e) {
  return e ? e.content && e.type ? wi(e.content, true) : e.data ? Ll(e.data) : e.asNodeBuffer && lt ? Ll(e.asNodeBuffer().toString("binary")) : e.asBinary ? Ll(e.asBinary()) : e._data && e._data.getContent ? Ll(wi(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function L2(e) {
  if (!e) return null;
  if (e.data) return Pp(e.data);
  if (e.asNodeBuffer && lt) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var a = e._data.getContent();
    return typeof a == "string" ? Pp(a) : Array.prototype.slice.call(a);
  }
  return e.content && e.type ? e.content : null;
}
function A3(e) {
  return e && e.name.slice(-4) === ".bin" ? L2(e) : M2(e);
}
function sa(e, a) {
  for (var r = e.FullPaths || La(e.files), i = a.toLowerCase().replace(/[\/]/g, "\\"), s = i.replace(/\\/g, "/"), c = 0; c < r.length; ++c) {
    var u = r[c].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (i == u || s == u) return e.files ? e.files[r[c]] : e.FileIndex[c];
  }
  return null;
}
function Qh(e, a) {
  var r = sa(e, a);
  if (r == null) throw new Error("Cannot find file " + a + " in zip");
  return r;
}
function Yt(e, a, r) {
  if (!r) return A3(Qh(e, a));
  if (!a) return null;
  try {
    return Yt(e, a);
  } catch {
    return null;
  }
}
function Xr(e, a, r) {
  if (!r) return M2(Qh(e, a));
  if (!a) return null;
  try {
    return Xr(e, a);
  } catch {
    return null;
  }
}
function k3(e, a, r) {
  return L2(Qh(e, a));
}
function tm(e) {
  for (var a = e.FullPaths || La(e.files), r = [], i = 0; i < a.length; ++i) a[i].slice(-1) != "/" && r.push(a[i].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function C3(e, a, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var i;
      return lt ? i = Ai(r) : i = YS(r), ft.utils.cfb_add(e, a, i);
    }
    ft.utils.cfb_add(e, a, r);
  } else e.file(a, r);
}
function B2(e, a) {
  switch (a.type) {
    case "base64":
      return ft.read(e, { type: "base64" });
    case "binary":
      return ft.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return ft.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + a.type);
}
function Ul(e, a) {
  if (e.charAt(0) == "/") return e.slice(1);
  var r = a.split("/");
  a.slice(-1) != "/" && r.pop();
  for (var i = e.split("/"); i.length !== 0; ) {
    var s = i.shift();
    s === ".." ? r.pop() : s !== "." && r.push(s);
  }
  return r.join("/");
}
var U2 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, b3 = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, rm = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, O3 = /<[^>]*>/g, _r = U2.match(rm) ? rm : O3, R3 = /<\w*:/, D3 = /<(\/?)\w+:/;
function Pe(e, a, r) {
  for (var i = {}, s = 0, c = 0; s !== e.length && !((c = e.charCodeAt(s)) === 32 || c === 10 || c === 13); ++s) ;
  if (a || (i[0] = e.slice(0, s)), s === e.length) return i;
  var u = e.match(b3), o = 0, x = "", d = 0, v = "", m = "", g = 1;
  if (u) for (d = 0; d != u.length; ++d) {
    for (m = u[d], c = 0; c != m.length && m.charCodeAt(c) !== 61; ++c) ;
    for (v = m.slice(0, c).trim(); m.charCodeAt(c + 1) == 32; ) ++c;
    for (g = (s = m.charCodeAt(c + 1)) == 34 || s == 39 ? 1 : 0, x = m.slice(c + 1 + g, m.length - g), o = 0; o != v.length && v.charCodeAt(o) !== 58; ++o) ;
    if (o === v.length) v.indexOf("_") > 0 && (v = v.slice(0, v.indexOf("_"))), i[v] = x, i[v.toLowerCase()] = x;
    else {
      var y = (o === 5 && v.slice(0, 5) === "xmlns" ? "xmlns" : "") + v.slice(o + 1);
      if (i[y] && v.slice(o - 3, o) == "ext") continue;
      i[y] = x, i[y.toLowerCase()] = x;
    }
  }
  return i;
}
function Ba(e) {
  return e.replace(D3, "<$1");
}
var I2 = { "&quot;": '"', "&apos;": "'", "&gt;": ">", "&lt;": "<", "&amp;": "&" }, F3 = Zh(I2), ot = /* @__PURE__ */ function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, a = /_x([\da-fA-F]{4})_/ig;
  return function r(i) {
    var s = i + "", c = s.indexOf("<![CDATA[");
    if (c == -1) return s.replace(e, function(o, x) {
      return I2[o] || String.fromCharCode(parseInt(x, o.indexOf("x") > -1 ? 16 : 10)) || o;
    }).replace(a, function(o, x) {
      return String.fromCharCode(parseInt(x, 16));
    });
    var u = s.indexOf("]]>");
    return r(s.slice(0, c)) + s.slice(c + 9, u) + r(s.slice(u + 3));
  };
}(), N3 = /[&<>'"]/g, M3 = /[\u0000-\u001f]/g;
function Jh(e) {
  var a = e + "";
  return a.replace(N3, function(r) {
    return F3[r];
  }).replace(/\n/g, "<br/>").replace(M3, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
var am = /* @__PURE__ */ function() {
  var e = /&#(\d+);/g;
  function a(r, i) {
    return String.fromCharCode(parseInt(i, 10));
  }
  return function(i) {
    return i.replace(e, a);
  };
}();
function Ft(e) {
  switch (e) {
    case 1:
    case true:
    case "1":
    case "true":
    case "TRUE":
      return true;
    default:
      return false;
  }
}
function Xo(e) {
  for (var a = "", r = 0, i = 0, s = 0, c = 0, u = 0, o = 0; r < e.length; ) {
    if (i = e.charCodeAt(r++), i < 128) {
      a += String.fromCharCode(i);
      continue;
    }
    if (s = e.charCodeAt(r++), i > 191 && i < 224) {
      u = (i & 31) << 6, u |= s & 63, a += String.fromCharCode(u);
      continue;
    }
    if (c = e.charCodeAt(r++), i < 240) {
      a += String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | c & 63);
      continue;
    }
    u = e.charCodeAt(r++), o = ((i & 7) << 18 | (s & 63) << 12 | (c & 63) << 6 | u & 63) - 65536, a += String.fromCharCode(55296 + (o >>> 10 & 1023)), a += String.fromCharCode(56320 + (o & 1023));
  }
  return a;
}
function nm(e) {
  var a = Pn(2 * e.length), r, i, s = 1, c = 0, u = 0, o;
  for (i = 0; i < e.length; i += s) s = 1, (o = e.charCodeAt(i)) < 128 ? r = o : o < 224 ? (r = (o & 31) * 64 + (e.charCodeAt(i + 1) & 63), s = 2) : o < 240 ? (r = (o & 15) * 4096 + (e.charCodeAt(i + 1) & 63) * 64 + (e.charCodeAt(i + 2) & 63), s = 3) : (s = 4, r = (o & 7) * 262144 + (e.charCodeAt(i + 1) & 63) * 4096 + (e.charCodeAt(i + 2) & 63) * 64 + (e.charCodeAt(i + 3) & 63), r -= 65536, u = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), u !== 0 && (a[c++] = u & 255, a[c++] = u >>> 8, u = 0), a[c++] = r % 256, a[c++] = r >>> 8;
  return a.slice(0, c).toString("ucs2");
}
function im(e) {
  return Ai(e, "binary").toString("utf8");
}
var Bc = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", bt = lt && (im(Bc) == Xo(Bc) && im || nm(Bc) == Xo(Bc) && nm) || Xo, Il = lt ? function(e) {
  return Ai(e, "utf8").toString("binary");
} : function(e) {
  for (var a = [], r = 0, i = 0, s = 0; r < e.length; ) switch (i = e.charCodeAt(r++), true) {
    case i < 128:
      a.push(String.fromCharCode(i));
      break;
    case i < 2048:
      a.push(String.fromCharCode(192 + (i >> 6))), a.push(String.fromCharCode(128 + (i & 63)));
      break;
    case (i >= 55296 && i < 57344):
      i -= 55296, s = e.charCodeAt(r++) - 56320 + (i << 10), a.push(String.fromCharCode(240 + (s >> 18 & 7))), a.push(String.fromCharCode(144 + (s >> 12 & 63))), a.push(String.fromCharCode(128 + (s >> 6 & 63))), a.push(String.fromCharCode(128 + (s & 63)));
      break;
    default:
      a.push(String.fromCharCode(224 + (i >> 12))), a.push(String.fromCharCode(128 + (i >> 6 & 63))), a.push(String.fromCharCode(128 + (i & 63)));
  }
  return a.join("");
}, t0 = /* @__PURE__ */ function() {
  var e = {};
  return function(r, i) {
    var s = r + "|" + (i || "");
    return e[s] ? e[s] : e[s] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", i || "");
  };
}(), H2 = function() {
  var e = [["nbsp", " "], ["middot", "\xB7"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function(a) {
    return [new RegExp("&" + a[0] + ";", "ig"), a[1]];
  });
  return function(r) {
    for (var i = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), s = 0; s < e.length; ++s) i = i.replace(e[s][0], e[s][1]);
    return i;
  };
}(), L3 = /* @__PURE__ */ function() {
  var e = {};
  return function(r) {
    return e[r] !== void 0 ? e[r] : e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g");
  };
}(), B3 = /<\/?(?:vt:)?variant>/g, U3 = /<(?:vt:)([^>]*)>([\s\S]*)</;
function sm(e, a) {
  var r = Pe(e), i = e.match(L3(r.baseType)) || [], s = [];
  if (i.length != r.size) {
    if (a.WTF) throw new Error("unexpected vector length " + i.length + " != " + r.size);
    return s;
  }
  return i.forEach(function(c) {
    var u = c.replace(B3, "").match(U3);
    u && s.push({ v: bt(u[2]), t: u[1] });
  }), s;
}
var I3 = /(^\s|\s$|\n)/;
function H3(e) {
  return La(e).map(function(a) {
    return " " + a + '="' + e[a] + '"';
  }).join("");
}
function j3(e, a, r) {
  return "<" + e + (r != null ? H3(r) : "") + (a != null ? (a.match(I3) ? ' xml:space="preserve"' : "") + ">" + a + "</" + e : "/") + ">";
}
function ed(e) {
  if (lt && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return bt(ki(qh(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var r0 = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, z3 = { CT: "http://schemas.openxmlformats.org/package/2006/content-types" }, P3 = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
function G3(e, a) {
  for (var r = 1 - 2 * (e[a + 7] >>> 7), i = ((e[a + 7] & 127) << 4) + (e[a + 6] >>> 4 & 15), s = e[a + 6] & 15, c = 5; c >= 0; --c) s = s * 256 + e[a + c];
  return i == 2047 ? s == 0 ? r * (1 / 0) : NaN : (i == 0 ? i = -1022 : (i -= 1023, s += Math.pow(2, 52)), r * Math.pow(2, i - 52) * s);
}
function V3(e, a, r) {
  var i = (a < 0 || 1 / a == -1 / 0 ? 1 : 0) << 7, s = 0, c = 0, u = i ? -a : a;
  isFinite(u) ? u == 0 ? s = c = 0 : (s = Math.floor(Math.log(u) / Math.LN2), c = u * Math.pow(2, 52 - s), s <= -1023 && (!isFinite(c) || c < Math.pow(2, 52)) ? s = -1022 : (c -= Math.pow(2, 52), s += 1023)) : (s = 2047, c = isNaN(a) ? 26985 : 0);
  for (var o = 0; o <= 5; ++o, c /= 256) e[r + o] = c & 255;
  e[r + 6] = (s & 15) << 4 | c & 15, e[r + 7] = s >> 4 | i;
}
var lm = function(e) {
  for (var a = [], r = 10240, i = 0; i < e[0].length; ++i) if (e[0][i]) for (var s = 0, c = e[0][i].length; s < c; s += r) a.push.apply(a, e[0][i].slice(s, s + r));
  return a;
}, cm = lt ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(a) {
    return Buffer.isBuffer(a) ? a : Ai(a);
  })) : lm(e);
} : lm, fm = function(e, a, r) {
  for (var i = [], s = a; s < r; s += 2) i.push(String.fromCharCode(en(e, s)));
  return i.join("").replace(Cr, "");
}, td = lt ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", a, r).replace(Cr, "") : fm(e, a, r);
} : fm, um = function(e, a, r) {
  for (var i = [], s = a; s < a + r; ++s) i.push(("0" + e[s].toString(16)).slice(-2));
  return i.join("");
}, j2 = lt ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", a, a + r) : um(e, a, r);
} : um, om = function(e, a, r) {
  for (var i = [], s = a; s < r; s++) i.push(String.fromCharCode(vs(e, s)));
  return i.join("");
}, x0 = lt ? function(a, r, i) {
  return Buffer.isBuffer(a) ? a.toString("utf8", r, i) : om(a, r, i);
} : om, z2 = function(e, a) {
  var r = Vr(e, a);
  return r > 0 ? x0(e, a + 4, a + 4 + r - 1) : "";
}, P2 = z2, G2 = function(e, a) {
  var r = Vr(e, a);
  return r > 0 ? x0(e, a + 4, a + 4 + r - 1) : "";
}, V2 = G2, X2 = function(e, a) {
  var r = 2 * Vr(e, a);
  return r > 0 ? x0(e, a + 4, a + 4 + r - 1) : "";
}, Y2 = X2, $2 = function(a, r) {
  var i = Vr(a, r);
  return i > 0 ? td(a, r + 4, r + 4 + i) : "";
}, q2 = $2, K2 = function(e, a) {
  var r = Vr(e, a);
  return r > 0 ? x0(e, a + 4, a + 4 + r) : "";
}, W2 = K2, Z2 = function(e, a) {
  return G3(e, a);
}, nf = Z2, Q2 = function(a) {
  return Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
};
lt && (P2 = function(a, r) {
  if (!Buffer.isBuffer(a)) return z2(a, r);
  var i = a.readUInt32LE(r);
  return i > 0 ? a.toString("utf8", r + 4, r + 4 + i - 1) : "";
}, V2 = function(a, r) {
  if (!Buffer.isBuffer(a)) return G2(a, r);
  var i = a.readUInt32LE(r);
  return i > 0 ? a.toString("utf8", r + 4, r + 4 + i - 1) : "";
}, Y2 = function(a, r) {
  if (!Buffer.isBuffer(a)) return X2(a, r);
  var i = 2 * a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + i - 1);
}, q2 = function(a, r) {
  if (!Buffer.isBuffer(a)) return $2(a, r);
  var i = a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + i);
}, W2 = function(a, r) {
  if (!Buffer.isBuffer(a)) return K2(a, r);
  var i = a.readUInt32LE(r);
  return a.toString("utf8", r + 4, r + 4 + i);
}, nf = function(a, r) {
  return Buffer.isBuffer(a) ? a.readDoubleLE(r) : Z2(a, r);
}, Q2 = function(a) {
  return Buffer.isBuffer(a) || Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
});
var vs = function(e, a) {
  return e[a];
}, en = function(e, a) {
  return e[a + 1] * 256 + e[a];
}, X3 = function(e, a) {
  var r = e[a + 1] * 256 + e[a];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, Vr = function(e, a) {
  return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
}, xi = function(e, a) {
  return e[a + 3] << 24 | e[a + 2] << 16 | e[a + 1] << 8 | e[a];
}, Y3 = function(e, a) {
  return e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3];
};
function Pl(e, a) {
  var r = "", i, s, c = [], u, o, x, d;
  switch (a) {
    case "dbcs":
      if (d = this.l, lt && Buffer.isBuffer(this)) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (x = 0; x < e; ++x) r += String.fromCharCode(en(this, d)), d += 2;
      e *= 2;
      break;
    case "utf8":
      r = x0(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = td(this, this.l, this.l + e);
      break;
    case "wstr":
      return Pl.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = P2(this, this.l), e = 4 + Vr(this, this.l);
      break;
    case "lpstr-cp":
      r = V2(this, this.l), e = 4 + Vr(this, this.l);
      break;
    case "lpwstr":
      r = Y2(this, this.l), e = 4 + 2 * Vr(this, this.l);
      break;
    case "lpp4":
      e = 4 + Vr(this, this.l), r = q2(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + Vr(this, this.l), r = W2(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (u = vs(this, this.l + e++)) !== 0; ) c.push(Lc(u));
      r = c.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (u = en(this, this.l + e)) !== 0; ) c.push(Lc(u)), e += 2;
      e += 2, r = c.join("");
      break;
    case "dbcs-cont":
      for (r = "", d = this.l, x = 0; x < e; ++x) {
        if (this.lens && this.lens.indexOf(d) !== -1) return u = vs(this, d), this.l = d + 1, o = Pl.call(this, e - x, u ? "dbcs-cont" : "sbcs-cont"), c.join("") + o;
        c.push(Lc(en(this, d))), d += 2;
      }
      r = c.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", d = this.l, x = 0; x != e; ++x) {
        if (this.lens && this.lens.indexOf(d) !== -1) return u = vs(this, d), this.l = d + 1, o = Pl.call(this, e - x, u ? "dbcs-cont" : "sbcs-cont"), c.join("") + o;
        c.push(Lc(vs(this, d))), d += 1;
      }
      r = c.join("");
      break;
    default:
      switch (e) {
        case 1:
          return i = vs(this, this.l), this.l++, i;
        case 2:
          return i = (a === "i" ? X3 : en)(this, this.l), this.l += 2, i;
        case 4:
        case -4:
          return a === "i" || (this[this.l + 3] & 128) === 0 ? (i = (e > 0 ? xi : Y3)(this, this.l), this.l += 4, i) : (s = Vr(this, this.l), this.l += 4, s);
        case 8:
        case -8:
          if (a === "f") return e == 8 ? s = nf(this, this.l) : s = nf([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, s;
          e = 8;
        case 16:
          r = j2(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var $3 = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255, e[r + 2] = a >>> 16 & 255, e[r + 3] = a >>> 24 & 255;
}, q3 = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >> 8 & 255, e[r + 2] = a >> 16 & 255, e[r + 3] = a >> 24 & 255;
}, K3 = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255;
};
function W3(e, a, r) {
  var i = 0, s = 0;
  if (r === "dbcs") {
    for (s = 0; s != a.length; ++s) K3(this, a.charCodeAt(s), this.l + 2 * s);
    i = 2 * a.length;
  } else if (r === "sbcs") {
    for (a = a.replace(/[^\x00-\x7F]/g, "_"), s = 0; s != a.length; ++s) this[this.l + s] = a.charCodeAt(s) & 255;
    i = a.length;
  } else if (r === "hex") {
    for (; s < e; ++s) this[this.l++] = parseInt(a.slice(2 * s, 2 * s + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var c = Math.min(this.l + e, this.length);
    for (s = 0; s < Math.min(a.length, e); ++s) {
      var u = a.charCodeAt(s);
      this[this.l++] = u & 255, this[this.l++] = u >> 8;
    }
    for (; this.l < c; ) this[this.l++] = 0;
    return this;
  } else switch (e) {
    case 1:
      i = 1, this[this.l] = a & 255;
      break;
    case 2:
      i = 2, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255;
      break;
    case 3:
      i = 3, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255, a >>>= 8, this[this.l + 2] = a & 255;
      break;
    case 4:
      i = 4, $3(this, a, this.l);
      break;
    case 8:
      if (i = 8, r === "f") {
        V3(this, a, this.l);
        break;
      }
    case 16:
      break;
    case -4:
      i = 4, q3(this, a, this.l);
      break;
  }
  return this.l += i, this;
}
function J2(e, a) {
  var r = j2(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(a + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function ur(e, a) {
  e.l = a, e.read_shift = Pl, e.chk = J2, e.write_shift = W3;
}
function Er(e, a) {
  e.l += a;
}
function Wt(e) {
  var a = Pn(e);
  return ur(a, 0), a;
}
function cn(e, a, r) {
  if (e) {
    var i, s, c;
    ur(e, e.l || 0);
    for (var u = e.length, o = 0, x = 0; e.l < u; ) {
      o = e.read_shift(1), o & 128 && (o = (o & 127) + ((e.read_shift(1) & 127) << 7));
      var d = of[o] || of[65535];
      for (i = e.read_shift(1), c = i & 127, s = 1; s < 4 && i & 128; ++s) c += ((i = e.read_shift(1)) & 127) << 7 * s;
      x = e.l + c;
      var v = d.f && d.f(e, c, r);
      if (e.l = x, a(v, d, o)) return;
    }
  }
}
function dh() {
  var e = [], a = lt ? 256 : 2048, r = function(d) {
    var v = Wt(d);
    return ur(v, 0), v;
  }, i = r(a), s = function() {
    i && (i.length > i.l && (i = i.slice(0, i.l), i.l = i.length), i.length > 0 && e.push(i), i = null);
  }, c = function(d) {
    return i && d < i.length - i.l ? i : (s(), i = r(Math.max(d + 1, a)));
  }, u = function() {
    return s(), Ln(e);
  }, o = function(d) {
    s(), i = d, i.l == null && (i.l = i.length), c(a);
  };
  return { next: c, push: o, end: u, _bufs: e };
}
function Gl(e, a, r) {
  var i = or(e);
  if (a.s ? (i.cRel && (i.c += a.s.c), i.rRel && (i.r += a.s.r)) : (i.cRel && (i.c += a.c), i.rRel && (i.r += a.r)), !r || r.biff < 12) {
    for (; i.c >= 256; ) i.c -= 256;
    for (; i.r >= 65536; ) i.r -= 65536;
  }
  return i;
}
function hm(e, a, r) {
  var i = or(e);
  return i.s = Gl(i.s, a.s, r), i.e = Gl(i.e, a.s, r), i;
}
function Vl(e, a) {
  if (e.cRel && e.c < 0) for (e = or(e); e.c < 0; ) e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = or(e); e.r < 0; ) e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var r = Ye(e);
  return !e.cRel && e.cRel != null && (r = J3(r)), !e.rRel && e.rRel != null && (r = Z3(r)), r;
}
function Yo(e, a) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Zt(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Zt(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (a.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + hr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + hr(e.e.r) : Vl(e.s, a.biff) + ":" + Vl(e.e, a.biff);
}
function rd(e) {
  return parseInt(Q3(e), 10) - 1;
}
function hr(e) {
  return "" + (e + 1);
}
function Z3(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Q3(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function ad(e) {
  for (var a = eA(e), r = 0, i = 0; i !== a.length; ++i) r = 26 * r + a.charCodeAt(i) - 64;
  return r - 1;
}
function Zt(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var a = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) a = String.fromCharCode((e - 1) % 26 + 65) + a;
  return a;
}
function J3(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function eA(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function tA(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function kr(e) {
  for (var a = 0, r = 0, i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    s >= 48 && s <= 57 ? a = 10 * a + (s - 48) : s >= 65 && s <= 90 && (r = 26 * r + (s - 64));
  }
  return { c: r - 1, r: a - 1 };
}
function Ye(e) {
  for (var a = e.c + 1, r = ""; a; a = (a - 1) / 26 | 0) r = String.fromCharCode((a - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function Ds(e) {
  var a = e.indexOf(":");
  return a == -1 ? { s: kr(e), e: kr(e) } : { s: kr(e.slice(0, a)), e: kr(e.slice(a + 1)) };
}
function ut(e, a) {
  return typeof a > "u" || typeof a == "number" ? ut(e.s, e.e) : (typeof e != "string" && (e = Ye(e)), typeof a != "string" && (a = Ye(a)), e == a ? e : e + ":" + a);
}
function Ut(e) {
  var a = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, i = 0, s = 0, c = e.length;
  for (r = 0; i < c && !((s = e.charCodeAt(i) - 64) < 1 || s > 26); ++i) r = 26 * r + s;
  for (a.s.c = --r, r = 0; i < c && !((s = e.charCodeAt(i) - 48) < 0 || s > 9); ++i) r = 10 * r + s;
  if (a.s.r = --r, i === c || s != 10) return a.e.c = a.s.c, a.e.r = a.s.r, a;
  for (++i, r = 0; i != c && !((s = e.charCodeAt(i) - 64) < 1 || s > 26); ++i) r = 26 * r + s;
  for (a.e.c = --r, r = 0; i != c && !((s = e.charCodeAt(i) - 48) < 0 || s > 9); ++i) r = 10 * r + s;
  return a.e.r = --r, a;
}
function dm(e, a) {
  var r = e.t == "d" && a instanceof Date;
  if (e.z != null) try {
    return e.w = fa(e.z, r ? br(a) : a);
  } catch {
  }
  try {
    return e.w = fa((e.XF || {}).numFmtId || (r ? 14 : 0), r ? br(a) : a);
  } catch {
    return "" + a;
  }
}
function sn(e, a, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? Oi[e.v] || e.v : a == null ? dm(e, e.v) : dm(e, a));
}
function Xn(e, a) {
  var r = a && a.sheet ? a.sheet : "Sheet1", i = {};
  return i[r] = e, { SheetNames: [r], Sheets: i };
}
function ey(e, a, r) {
  var i = r || {}, s = e ? Array.isArray(e) : i.dense, c = e || (s ? [] : {}), u = 0, o = 0;
  if (c && i.origin != null) {
    if (typeof i.origin == "number") u = i.origin;
    else {
      var x = typeof i.origin == "string" ? kr(i.origin) : i.origin;
      u = x.r, o = x.c;
    }
    c["!ref"] || (c["!ref"] = "A1:A1");
  }
  var d = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (c["!ref"]) {
    var v = Ut(c["!ref"]);
    d.s.c = v.s.c, d.s.r = v.s.r, d.e.c = Math.max(d.e.c, v.e.c), d.e.r = Math.max(d.e.r, v.e.r), u == -1 && (d.e.r = u = v.e.r + 1);
  }
  for (var m = 0; m != a.length; ++m) if (a[m]) {
    if (!Array.isArray(a[m])) throw new Error("aoa_to_sheet expects an array of arrays");
    for (var g = 0; g != a[m].length; ++g) if (!(typeof a[m][g] > "u")) {
      var y = { v: a[m][g] }, T = u + m, E = o + g;
      if (d.s.r > T && (d.s.r = T), d.s.c > E && (d.s.c = E), d.e.r < T && (d.e.r = T), d.e.c < E && (d.e.c = E), a[m][g] && typeof a[m][g] == "object" && !Array.isArray(a[m][g]) && !(a[m][g] instanceof Date)) y = a[m][g];
      else if (Array.isArray(y.v) && (y.f = a[m][g][1], y.v = y.v[0]), y.v === null) if (y.f) y.t = "n";
      else if (i.nullError) y.t = "e", y.v = 0;
      else if (i.sheetStubs) y.t = "z";
      else continue;
      else typeof y.v == "number" ? y.t = "n" : typeof y.v == "boolean" ? y.t = "b" : y.v instanceof Date ? (y.z = i.dateNF || We[14], i.cellDates ? (y.t = "d", y.w = fa(y.z, br(y.v))) : (y.t = "n", y.v = br(y.v), y.w = fa(y.z, y.v))) : y.t = "s";
      if (s) c[T] || (c[T] = []), c[T][E] && c[T][E].z && (y.z = c[T][E].z), c[T][E] = y;
      else {
        var _ = Ye({ c: E, r: T });
        c[_] && c[_].z && (y.z = c[_].z), c[_] = y;
      }
    }
  }
  return d.s.c < 1e7 && (c["!ref"] = ut(d)), c;
}
function Fs(e, a) {
  return ey(null, e, a);
}
function rA(e) {
  return e.read_shift(4, "i");
}
function yr(e) {
  var a = e.read_shift(4);
  return a === 0 ? "" : e.read_shift(a, "dbcs");
}
function aA(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function nd(e, a) {
  var r = e.l, i = e.read_shift(1), s = yr(e), c = [], u = { t: s, h: s };
  if ((i & 1) !== 0) {
    for (var o = e.read_shift(4), x = 0; x != o; ++x) c.push(aA(e));
    u.r = c;
  } else u.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + a, u;
}
var nA = nd;
function ua(e) {
  var a = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: a, iStyleRef: r };
}
function Ci(e) {
  var a = e.read_shift(2);
  return a += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: a };
}
var iA = yr;
function id(e) {
  var a = e.read_shift(4);
  return a === 0 || a === 4294967295 ? "" : e.read_shift(a, "dbcs");
}
var sA = yr, xh = id;
function sd(e) {
  var a = e.slice(e.l, e.l + 4), r = a[0] & 1, i = a[0] & 2;
  e.l += 4;
  var s = i === 0 ? nf([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : xi(a, 0) >> 2;
  return r ? s / 100 : s;
}
function ty(e) {
  var a = { s: {}, e: {} };
  return a.s.r = e.read_shift(4), a.e.r = e.read_shift(4), a.s.c = e.read_shift(4), a.e.c = e.read_shift(4), a;
}
var bi = ty;
function mr(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function lA(e) {
  var a = {}, r = e.read_shift(1), i = r >>> 1, s = e.read_shift(1), c = e.read_shift(2, "i"), u = e.read_shift(1), o = e.read_shift(1), x = e.read_shift(1);
  switch (e.l++, i) {
    case 0:
      a.auto = 1;
      break;
    case 1:
      a.index = s;
      var d = Ei[s];
      d && (a.rgb = n0(d));
      break;
    case 2:
      a.rgb = n0([u, o, x]);
      break;
    case 3:
      a.theme = s;
      break;
  }
  return c != 0 && (a.tint = c > 0 ? c / 32767 : c / 32768), a;
}
function cA(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = { fBold: a & 1, fItalic: a & 2, fUnderline: a & 4, fStrikeout: a & 8, fOutline: a & 16, fShadow: a & 32, fCondense: a & 64, fExtend: a & 128 };
  return r;
}
function ry(e, a) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, i = e.read_shift(4);
  switch (i) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (i > 400) throw new Error("Unsupported Clipboard: " + i.toString(16));
  return e.l -= 4, e.read_shift(0, a == 1 ? "lpstr" : "lpwstr");
}
function fA(e) {
  return ry(e, 1);
}
function uA(e) {
  return ry(e, 2);
}
var ld = 2, Nr = 3, Uc = 11, xm = 12, sf = 19, Ic = 64, oA = 65, hA = 71, dA = 4108, xA = 4126, nr = 80, ay = 81, vA = [nr, ay], pA = { 1: { n: "CodePage", t: ld }, 2: { n: "Category", t: nr }, 3: { n: "PresentationFormat", t: nr }, 4: { n: "ByteCount", t: Nr }, 5: { n: "LineCount", t: Nr }, 6: { n: "ParagraphCount", t: Nr }, 7: { n: "SlideCount", t: Nr }, 8: { n: "NoteCount", t: Nr }, 9: { n: "HiddenCount", t: Nr }, 10: { n: "MultimediaClipCount", t: Nr }, 11: { n: "ScaleCrop", t: Uc }, 12: { n: "HeadingPairs", t: dA }, 13: { n: "TitlesOfParts", t: xA }, 14: { n: "Manager", t: nr }, 15: { n: "Company", t: nr }, 16: { n: "LinksUpToDate", t: Uc }, 17: { n: "CharacterCount", t: Nr }, 19: { n: "SharedDoc", t: Uc }, 22: { n: "HyperlinksChanged", t: Uc }, 23: { n: "AppVersion", t: Nr, p: "version" }, 24: { n: "DigSig", t: oA }, 26: { n: "ContentType", t: nr }, 27: { n: "ContentStatus", t: nr }, 28: { n: "Language", t: nr }, 29: { n: "Version", t: nr }, 255: {}, 2147483648: { n: "Locale", t: sf }, 2147483651: { n: "Behavior", t: sf }, 1919054434: {} }, mA = { 1: { n: "CodePage", t: ld }, 2: { n: "Title", t: nr }, 3: { n: "Subject", t: nr }, 4: { n: "Author", t: nr }, 5: { n: "Keywords", t: nr }, 6: { n: "Comments", t: nr }, 7: { n: "Template", t: nr }, 8: { n: "LastAuthor", t: nr }, 9: { n: "RevNumber", t: nr }, 10: { n: "EditTime", t: Ic }, 11: { n: "LastPrinted", t: Ic }, 12: { n: "CreatedDate", t: Ic }, 13: { n: "ModifiedDate", t: Ic }, 14: { n: "PageCount", t: Nr }, 15: { n: "WordCount", t: Nr }, 16: { n: "CharCount", t: Nr }, 17: { n: "Thumbnail", t: hA }, 18: { n: "Application", t: nr }, 19: { n: "DocSecurity", t: Nr }, 255: {}, 2147483648: { n: "Locale", t: sf }, 2147483651: { n: "Behavior", t: sf }, 1919054434: {} }, vm = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" }, gA = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function yA(e) {
  return e.map(function(a) {
    return [a >> 16 & 255, a >> 8 & 255, a & 255];
  });
}
var EA = yA([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Ei = or(EA), Oi = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" }, ny = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 }, pm = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" };
function _A() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function TA(e) {
  var a = _A();
  if (!e || !e.match) return a;
  var r = {};
  if ((e.match(_r) || []).forEach(function(i) {
    var s = Pe(i);
    switch (s[0].replace(R3, "<")) {
      case "<?xml":
        break;
      case "<Types":
        a.xmlns = s["xmlns" + (s[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        r[s.Extension] = s.ContentType;
        break;
      case "<Override":
        a[pm[s.ContentType]] !== void 0 && a[pm[s.ContentType]].push(s.PartName);
        break;
    }
  }), a.xmlns !== z3.CT) throw new Error("Unknown Namespace: " + a.xmlns);
  return a.calcchain = a.calcchains.length > 0 ? a.calcchains[0] : "", a.sst = a.strs.length > 0 ? a.strs[0] : "", a.style = a.styles.length > 0 ? a.styles[0] : "", a.defaults = r, delete a.calcchains, a;
}
var ms = { WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument", HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing", XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath", XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing", XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink", CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml", CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps", CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings", STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart", CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx", CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet", WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"], DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet", MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet", IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing", XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata", TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment", PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person", VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject" };
function vh(e) {
  var a = e.lastIndexOf("/");
  return e.slice(0, a + 1) + "_rels/" + e.slice(a + 1) + ".rels";
}
function Xl(e, a) {
  var r = { "!id": {} };
  if (!e) return r;
  a.charAt(0) !== "/" && (a = "/" + a);
  var i = {};
  return (e.match(_r) || []).forEach(function(s) {
    var c = Pe(s);
    if (c[0] === "<Relationship") {
      var u = {};
      u.Type = c.Type, u.Target = c.Target, u.Id = c.Id, c.TargetMode && (u.TargetMode = c.TargetMode);
      var o = c.TargetMode === "External" ? c.Target : Ul(c.Target, a);
      r[o] = u, i[c.Id] = u;
    }
  }), r["!id"] = i, r;
}
var wA = "application/vnd.oasis.opendocument.spreadsheet";
function SA(e, a) {
  for (var r = ed(e), i, s; i = r0.exec(r); ) switch (i[3]) {
    case "manifest":
      break;
    case "file-entry":
      if (s = Pe(i[0], false), s.path == "/" && s.type !== wA) throw new Error("This OpenDocument is not a spreadsheet");
      break;
    case "encryption-data":
    case "algorithm":
    case "start-key-generation":
    case "key-derivation":
      throw new Error("Unsupported ODS Encryption");
    default:
      if (a && a.WTF) throw i;
  }
}
var Yl = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]], AA = function() {
  for (var e = new Array(Yl.length), a = 0; a < Yl.length; ++a) {
    var r = Yl[a], i = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
    e[a] = new RegExp("<" + i + "[^>]*>([\\s\\S]*?)</" + i + ">");
  }
  return e;
}();
function iy(e) {
  var a = {};
  e = bt(e);
  for (var r = 0; r < Yl.length; ++r) {
    var i = Yl[r], s = e.match(AA[r]);
    s != null && s.length > 0 && (a[i[1]] = ot(s[1])), i[2] === "date" && a[i[1]] && (a[i[1]] = ir(a[i[1]]));
  }
  return a;
}
var kA = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];
function sy(e, a, r, i) {
  var s = [];
  if (typeof e == "string") s = sm(e, i);
  else for (var c = 0; c < e.length; ++c) s = s.concat(e[c].map(function(v) {
    return { v };
  }));
  var u = typeof a == "string" ? sm(a, i).map(function(v) {
    return v.v;
  }) : a, o = 0, x = 0;
  if (u.length > 0) for (var d = 0; d !== s.length; d += 2) {
    switch (x = +s[d + 1].v, s[d].v) {
      case "Worksheets":
      case "\u5DE5\u4F5C\u8868":
      case "\u041B\u0438\u0441\u0442\u044B":
      case "\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0639\u0645\u0644":
      case "\u30EF\u30FC\u30AF\u30B7\u30FC\u30C8":
      case "\u05D2\u05DC\u05D9\u05D5\u05E0\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4":
      case "Arbeitsbl\xE4tter":
      case "\xC7al\u0131\u015Fma Sayfalar\u0131":
      case "Feuilles de calcul":
      case "Fogli di lavoro":
      case "Folhas de c\xE1lculo":
      case "Planilhas":
      case "Regneark":
      case "Hojas de c\xE1lculo":
      case "Werkbladen":
        r.Worksheets = x, r.SheetNames = u.slice(o, o + x);
        break;
      case "Named Ranges":
      case "Rangos con nombre":
      case "\u540D\u524D\u4ED8\u304D\u4E00\u89A7":
      case "Benannte Bereiche":
      case "Navngivne omr\xE5der":
        r.NamedRanges = x, r.DefinedNames = u.slice(o, o + x);
        break;
      case "Charts":
      case "Diagramme":
        r.Chartsheets = x, r.ChartNames = u.slice(o, o + x);
        break;
    }
    o += x;
  }
}
function CA(e, a, r) {
  var i = {};
  return a || (a = {}), e = bt(e), kA.forEach(function(s) {
    var c = (e.match(t0(s[0])) || [])[1];
    switch (s[2]) {
      case "string":
        c && (a[s[1]] = ot(c));
        break;
      case "bool":
        a[s[1]] = c === "true";
        break;
      case "raw":
        var u = e.match(new RegExp("<" + s[0] + "[^>]*>([\\s\\S]*?)</" + s[0] + ">"));
        u && u.length > 0 && (i[s[1]] = u[1]);
        break;
    }
  }), i.HeadingPairs && i.TitlesOfParts && sy(i.HeadingPairs, i.TitlesOfParts, a, r), a;
}
var bA = /<[^>]+>[^<]*/g;
function OA(e, a) {
  var r = {}, i = "", s = e.match(bA);
  if (s) for (var c = 0; c != s.length; ++c) {
    var u = s[c], o = Pe(u);
    switch (o[0]) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        i = ot(o.name);
        break;
      case "</property>":
        i = null;
        break;
      default:
        if (u.indexOf("<vt:") === 0) {
          var x = u.split(">"), d = x[0].slice(4), v = x[1];
          switch (d) {
            case "lpstr":
            case "bstr":
            case "lpwstr":
              r[i] = ot(v);
              break;
            case "bool":
              r[i] = Ft(v);
              break;
            case "i1":
            case "i2":
            case "i4":
            case "i8":
            case "int":
            case "uint":
              r[i] = parseInt(v, 10);
              break;
            case "r4":
            case "r8":
            case "decimal":
              r[i] = parseFloat(v);
              break;
            case "filetime":
            case "date":
              r[i] = ir(v);
              break;
            case "cy":
            case "error":
              r[i] = ot(v);
              break;
            default:
              if (d.slice(-1) == "/") break;
              a.WTF && typeof console < "u" && console.warn("Unexpected", u, d, x);
          }
        } else if (u.slice(0, 2) !== "</") {
          if (a.WTF) throw new Error(u);
        }
    }
  }
  return r;
}
var RA = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" }, $o;
function DA(e, a, r) {
  $o || ($o = Zh(RA)), a = $o[a] || a, e[a] = r;
}
function cd(e) {
  var a = e.read_shift(4), r = e.read_shift(4);
  return new Date((r / 1e7 * Math.pow(2, 32) + a / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function ly(e, a, r) {
  var i = e.l, s = e.read_shift(0, "lpstr-cp");
  if (r) for (; e.l - i & 3; ) ++e.l;
  return s;
}
function cy(e, a, r) {
  var i = e.read_shift(0, "lpwstr");
  return i;
}
function fy(e, a, r) {
  return a === 31 ? cy(e) : ly(e, a, r);
}
function ph(e, a, r) {
  return fy(e, a, r === false ? 0 : 4);
}
function FA(e, a) {
  if (!a) throw new Error("VtUnalignedString must have positive length");
  return fy(e, a, 0);
}
function NA(e) {
  for (var a = e.read_shift(4), r = [], i = 0; i != a; ++i) {
    var s = e.l;
    r[i] = e.read_shift(0, "lpwstr").replace(Cr, ""), e.l - s & 2 && (e.l += 2);
  }
  return r;
}
function MA(e) {
  for (var a = e.read_shift(4), r = [], i = 0; i != a; ++i) r[i] = e.read_shift(0, "lpstr-cp").replace(Cr, "");
  return r;
}
function LA(e) {
  var a = e.l, r = lf(e, ay);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - a & 2 && (e.l += 2);
  var i = lf(e, Nr);
  return [r, i];
}
function BA(e) {
  for (var a = e.read_shift(4), r = [], i = 0; i < a / 2; ++i) r.push(LA(e));
  return r;
}
function mm(e, a) {
  for (var r = e.read_shift(4), i = {}, s = 0; s != r; ++s) {
    var c = e.read_shift(4), u = e.read_shift(4);
    i[c] = e.read_shift(u, a === 1200 ? "utf16le" : "utf8").replace(Cr, "").replace(Bl, "!"), a === 1200 && u % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), i;
}
function uy(e) {
  var a = e.read_shift(4), r = e.slice(e.l, e.l + a);
  return e.l += a, (a & 3) > 0 && (e.l += 4 - (a & 3) & 3), r;
}
function UA(e) {
  var a = {};
  return a.Size = e.read_shift(4), e.l += a.Size + 3 - (a.Size - 1) % 4, a;
}
function lf(e, a, r) {
  var i = e.read_shift(2), s, c = r || {};
  if (e.l += 2, a !== xm && i !== a && vA.indexOf(a) === -1 && !((a & 65534) == 4126 && (i & 65534) == 4126)) throw new Error("Expected type " + a + " saw " + i);
  switch (a === xm ? i : a) {
    case 2:
      return s = e.read_shift(2, "i"), c.raw || (e.l += 2), s;
    case 3:
      return s = e.read_shift(4, "i"), s;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return s = e.read_shift(4), s;
    case 30:
      return ly(e, i, 4).replace(Cr, "");
    case 31:
      return cy(e);
    case 64:
      return cd(e);
    case 65:
      return uy(e);
    case 71:
      return UA(e);
    case 80:
      return ph(e, i, !c.raw).replace(Cr, "");
    case 81:
      return FA(e, i).replace(Cr, "");
    case 4108:
      return BA(e);
    case 4126:
    case 4127:
      return i == 4127 ? NA(e) : MA(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + a + " " + i);
  }
}
function gm(e, a) {
  var r = e.l, i = e.read_shift(4), s = e.read_shift(4), c = [], u = 0, o = 0, x = -1, d = {};
  for (u = 0; u != s; ++u) {
    var v = e.read_shift(4), m = e.read_shift(4);
    c[u] = [v, m + r];
  }
  c.sort(function(F, k) {
    return F[1] - k[1];
  });
  var g = {};
  for (u = 0; u != s; ++u) {
    if (e.l !== c[u][1]) {
      var y = true;
      if (u > 0 && a) switch (a[c[u - 1][0]].t) {
        case 2:
          e.l + 2 === c[u][1] && (e.l += 2, y = false);
          break;
        case 80:
          e.l <= c[u][1] && (e.l = c[u][1], y = false);
          break;
        case 4108:
          e.l <= c[u][1] && (e.l = c[u][1], y = false);
          break;
      }
      if ((!a || u == 0) && e.l <= c[u][1] && (y = false, e.l = c[u][1]), y) throw new Error("Read Error: Expected address " + c[u][1] + " at " + e.l + " :" + u);
    }
    if (a) {
      var T = a[c[u][0]];
      if (g[T.n] = lf(e, T.t, { raw: true }), T.p === "version" && (g[T.n] = String(g[T.n] >> 16) + "." + ("0000" + String(g[T.n] & 65535)).slice(-4)), T.n == "CodePage") switch (g[T.n]) {
        case 0:
          g[T.n] = 1252;
        case 874:
        case 932:
        case 936:
        case 949:
        case 950:
        case 1250:
        case 1251:
        case 1253:
        case 1254:
        case 1255:
        case 1256:
        case 1257:
        case 1258:
        case 1e4:
        case 1200:
        case 1201:
        case 1252:
        case 65e3:
        case -536:
        case 65001:
        case -535:
          ya(o = g[T.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + g[T.n]);
      }
    } else if (c[u][0] === 1) {
      if (o = g.CodePage = lf(e, ld), ya(o), x !== -1) {
        var E = e.l;
        e.l = c[x][1], d = mm(e, o), e.l = E;
      }
    } else if (c[u][0] === 0) {
      if (o === 0) {
        x = u, e.l = c[u + 1][1];
        continue;
      }
      d = mm(e, o);
    } else {
      var _ = d[c[u][0]], O;
      switch (e[e.l]) {
        case 65:
          e.l += 4, O = uy(e);
          break;
        case 30:
          e.l += 4, O = ph(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, O = ph(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, O = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, O = e.read_shift(4);
          break;
        case 5:
          e.l += 4, O = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, O = zt(e, 4);
          break;
        case 64:
          e.l += 4, O = ir(cd(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      g[_] = O;
    }
  }
  return e.l = r + i, g;
}
function ym(e, a, r) {
  var i = e.content;
  if (!i) return {};
  ur(i, 0);
  var s, c, u, o, x = 0;
  i.chk("feff", "Byte Order: "), i.read_shift(2);
  var d = i.read_shift(4), v = i.read_shift(16);
  if (v !== ft.utils.consts.HEADER_CLSID && v !== r) throw new Error("Bad PropertySet CLSID " + v);
  if (s = i.read_shift(4), s !== 1 && s !== 2) throw new Error("Unrecognized #Sets: " + s);
  if (c = i.read_shift(16), o = i.read_shift(4), s === 1 && o !== i.l) throw new Error("Length mismatch: " + o + " !== " + i.l);
  s === 2 && (u = i.read_shift(16), x = i.read_shift(4));
  var m = gm(i, a), g = { SystemIdentifier: d };
  for (var y in m) g[y] = m[y];
  if (g.FMTID = c, s === 1) return g;
  if (x - i.l == 2 && (i.l += 2), i.l !== x) throw new Error("Length mismatch 2: " + i.l + " !== " + x);
  var T;
  try {
    T = gm(i, null);
  } catch {
  }
  for (y in T) g[y] = T[y];
  return g.FMTID = [c, u], g;
}
function Nn(e, a) {
  return e.read_shift(a), null;
}
function IA(e, a, r) {
  for (var i = [], s = e.l + a; e.l < s; ) i.push(r(e, s - e.l));
  if (s !== e.l) throw new Error("Slurp error");
  return i;
}
function zt(e, a) {
  return e.read_shift(a) === 1;
}
function $t(e) {
  return e.read_shift(2, "u");
}
function oy(e, a) {
  return IA(e, a, $t);
}
function HA(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? a : a === 1;
}
function v0(e, a, r) {
  var i = e.read_shift(r && r.biff >= 12 ? 2 : 1), s = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var c = e.read_shift(1);
    c && (s = "dbcs-cont");
  } else r.biff == 12 && (s = "wstr");
  r.biff >= 2 && r.biff <= 5 && (s = "cpstr");
  var u = i ? e.read_shift(i, s) : "";
  return u;
}
function jA(e) {
  var a = e.read_shift(2), r = e.read_shift(1), i = r & 4, s = r & 8, c = 1 + (r & 1), u = 0, o, x = {};
  s && (u = e.read_shift(2)), i && (o = e.read_shift(4));
  var d = c == 2 ? "dbcs-cont" : "sbcs-cont", v = a === 0 ? "" : e.read_shift(a, d);
  return s && (e.l += 4 * u), i && (e.l += o), x.t = v, s || (x.raw = "<t>" + x.t + "</t>", x.r = x.t), x;
}
function Si(e, a, r) {
  var i;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(a, "cpstr");
    if (r.biff >= 12) return e.read_shift(a, "dbcs-cont");
  }
  var s = e.read_shift(1);
  return s === 0 ? i = e.read_shift(a, "sbcs-cont") : i = e.read_shift(a, "dbcs-cont"), i;
}
function p0(e, a, r) {
  var i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return i === 0 ? (e.l++, "") : Si(e, i, r);
}
function Ri(e, a, r) {
  if (r.biff > 5) return p0(e, a, r);
  var i = e.read_shift(1);
  return i === 0 ? (e.l++, "") : e.read_shift(i, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function zA(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return e.l += 2, [a, r];
}
function PA(e) {
  var a = e.read_shift(4), r = e.l, i = false;
  a > 24 && (e.l += a - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (i = true), e.l = r);
  var s = e.read_shift((i ? a - 24 : a) >> 1, "utf16le").replace(Cr, "");
  return i && (e.l += 24), s;
}
function GA(e) {
  for (var a = e.read_shift(2), r = ""; a-- > 0; ) r += "../";
  var i = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var s = e.read_shift(4);
  if (s === 0) return r + i.replace(/\\/g, "/");
  var c = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var u = e.read_shift(c >> 1, "utf16le").replace(Cr, "");
  return r + u;
}
function VA(e, a) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return PA(e);
    case "0303000000000000c000000000000046":
      return GA(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function Hc(e) {
  var a = e.read_shift(4), r = a > 0 ? e.read_shift(a, "utf16le").replace(Cr, "") : "";
  return r;
}
function XA(e, a) {
  var r = e.l + a, i = e.read_shift(4);
  if (i !== 2) throw new Error("Unrecognized streamVersion: " + i);
  var s = e.read_shift(2);
  e.l += 2;
  var c, u, o, x, d = "", v, m;
  s & 16 && (c = Hc(e, r - e.l)), s & 128 && (u = Hc(e, r - e.l)), (s & 257) === 257 && (o = Hc(e, r - e.l)), (s & 257) === 1 && (x = VA(e, r - e.l)), s & 8 && (d = Hc(e, r - e.l)), s & 32 && (v = e.read_shift(16)), s & 64 && (m = cd(e)), e.l = r;
  var g = u || o || x || "";
  g && d && (g += "#" + d), g || (g = "#" + d), s & 2 && g.charAt(0) == "/" && g.charAt(1) != "/" && (g = "file://" + g);
  var y = { Target: g };
  return v && (y.guid = v), m && (y.time = m), c && (y.Tooltip = c), y;
}
function hy(e) {
  var a = e.read_shift(1), r = e.read_shift(1), i = e.read_shift(1), s = e.read_shift(1);
  return [a, r, i, s];
}
function dy(e, a) {
  var r = hy(e);
  return r[3] = 0, r;
}
function Ua(e) {
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(2);
  return { r: a, c: r, ixfe: i };
}
function YA(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: a, flags: r };
}
function $A(e, a, r) {
  return a === 0 ? "" : Ri(e, a, r);
}
function qA(e, a, r) {
  var i = r.biff > 8 ? 4 : 2, s = e.read_shift(i), c = e.read_shift(i, "i"), u = e.read_shift(i, "i");
  return [s, c, u];
}
function xy(e) {
  var a = e.read_shift(2), r = sd(e);
  return [a, r];
}
function KA(e, a, r) {
  e.l += 4, a -= 4;
  var i = e.l + a, s = v0(e, a, r), c = e.read_shift(2);
  if (i -= e.l, c !== i) throw new Error("Malformed AddinUdf: padding = " + i + " != " + c);
  return e.l += c, s;
}
function gf(e) {
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2);
  return { s: { c: i, r: a }, e: { c: s, r } };
}
function vy(e) {
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1);
  return { s: { c: i, r: a }, e: { c: s, r } };
}
var WA = vy;
function py(e) {
  e.l += 4;
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(2);
  return e.l += 12, [r, a, i];
}
function ZA(e) {
  var a = {};
  return e.l += 4, e.l += 16, a.fSharedNote = e.read_shift(2), e.l += 4, a;
}
function QA(e) {
  var a = {};
  return e.l += 4, e.cf = e.read_shift(2), a;
}
function vr(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var JA = { 0: vr, 4: vr, 5: vr, 6: vr, 7: QA, 8: vr, 9: vr, 10: vr, 11: vr, 12: vr, 13: ZA, 14: vr, 15: vr, 16: vr, 17: vr, 18: vr, 19: vr, 20: vr, 21: py };
function ek(e, a) {
  for (var r = e.l + a, i = []; e.l < r; ) {
    var s = e.read_shift(2);
    e.l -= 2;
    try {
      i.push(JA[s](e, r - e.l));
    } catch {
      return e.l = r, i;
    }
  }
  return e.l != r && (e.l = r), i;
}
function jc(e, a) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (r.BIFFVer = e.read_shift(2), a -= 2, a >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (a > 6) throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(a), r;
}
function tk(e, a) {
  return a === 0 || e.read_shift(2), 1200;
}
function rk(e, a, r) {
  if (r.enc) return e.l += a, "";
  var i = e.l, s = Ri(e, 0, r);
  return e.read_shift(a + i - e.l), s;
}
function ak(e, a, r) {
  var i = r && r.biff == 8 || a == 2 ? e.read_shift(2) : (e.l += a, 0);
  return { fDialog: i & 16, fBelow: i & 64, fRight: i & 128 };
}
function nk(e, a, r) {
  var i = e.read_shift(4), s = e.read_shift(1) & 3, c = e.read_shift(1);
  switch (c) {
    case 0:
      c = "Worksheet";
      break;
    case 1:
      c = "Macrosheet";
      break;
    case 2:
      c = "Chartsheet";
      break;
    case 6:
      c = "VBAModule";
      break;
  }
  var u = v0(e, 0, r);
  return u.length === 0 && (u = "Sheet1"), { pos: i, hs: s, dt: c, name: u };
}
function ik(e, a) {
  for (var r = e.l + a, i = e.read_shift(4), s = e.read_shift(4), c = [], u = 0; u != s && e.l < r; ++u) c.push(jA(e));
  return c.Count = i, c.Unique = s, c;
}
function sk(e, a) {
  var r = {};
  return r.dsst = e.read_shift(2), e.l += a - 2, r;
}
function lk(e) {
  var a = {};
  a.r = e.read_shift(2), a.c = e.read_shift(2), a.cnt = e.read_shift(2) - a.c;
  var r = e.read_shift(2);
  e.l += 4;
  var i = e.read_shift(1);
  return e.l += 3, i & 7 && (a.level = i & 7), i & 32 && (a.hidden = true), i & 64 && (a.hpt = r / 20), a;
}
function ck(e) {
  var a = YA(e);
  if (a.type != 2211) throw new Error("Invalid Future Record " + a.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function fk(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Em(e, a, r) {
  var i = 0;
  r && r.biff == 2 || (i = e.read_shift(2));
  var s = e.read_shift(2);
  r && r.biff == 2 && (i = 1 - (s >> 15), s &= 32767);
  var c = { Unsynced: i & 1, DyZero: (i & 2) >> 1, ExAsc: (i & 4) >> 2, ExDsc: (i & 8) >> 3 };
  return [c, s];
}
function uk(e) {
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), c = e.read_shift(2), u = e.read_shift(2), o = e.read_shift(2), x = e.read_shift(2), d = e.read_shift(2);
  return { Pos: [a, r], Dim: [i, s], Flags: c, CurTab: u, FirstTab: o, Selected: x, TabRatio: d };
}
function ok(e, a, r) {
  if (r && r.biff >= 2 && r.biff < 5) return {};
  var i = e.read_shift(2);
  return { RTL: i & 64 };
}
function hk() {
}
function dk(e, a, r) {
  var i = { dyHeight: e.read_shift(2), fl: e.read_shift(2) };
  switch (r && r.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return i.name = v0(e, 0, r), i;
}
function xk(e) {
  var a = Ua(e);
  return a.isst = e.read_shift(4), a;
}
function vk(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var i = e.l + a, s = Ua(e);
  r.biff == 2 && e.l++;
  var c = p0(e, i - e.l, r);
  return s.val = c, s;
}
function pk(e, a, r) {
  var i = e.read_shift(2), s = Ri(e, 0, r);
  return [i, s];
}
var mk = Ri;
function _m(e, a, r) {
  var i = e.l + a, s = r.biff == 8 || !r.biff ? 4 : 2, c = e.read_shift(s), u = e.read_shift(s), o = e.read_shift(2), x = e.read_shift(2);
  return e.l = i, { s: { r: c, c: o }, e: { r: u, c: x } };
}
function gk(e) {
  var a = e.read_shift(2), r = e.read_shift(2), i = xy(e);
  return { r: a, c: r, ixfe: i[0], rknum: i[1] };
}
function yk(e, a) {
  for (var r = e.l + a - 2, i = e.read_shift(2), s = e.read_shift(2), c = []; e.l < r; ) c.push(xy(e));
  if (e.l !== r) throw new Error("MulRK read error");
  var u = e.read_shift(2);
  if (c.length != u - s + 1) throw new Error("MulRK length mismatch");
  return { r: i, c: s, C: u, rkrec: c };
}
function Ek(e, a) {
  for (var r = e.l + a - 2, i = e.read_shift(2), s = e.read_shift(2), c = []; e.l < r; ) c.push(e.read_shift(2));
  if (e.l !== r) throw new Error("MulBlank read error");
  var u = e.read_shift(2);
  if (c.length != u - s + 1) throw new Error("MulBlank length mismatch");
  return { r: i, c: s, C: u, ixfe: c };
}
function _k(e, a, r, i) {
  var s = {}, c = e.read_shift(4), u = e.read_shift(4), o = e.read_shift(4), x = e.read_shift(2);
  return s.patternType = gA[o >> 26], i.cellStyles && (s.alc = c & 7, s.fWrap = c >> 3 & 1, s.alcV = c >> 4 & 7, s.fJustLast = c >> 7 & 1, s.trot = c >> 8 & 255, s.cIndent = c >> 16 & 15, s.fShrinkToFit = c >> 20 & 1, s.iReadOrder = c >> 22 & 2, s.fAtrNum = c >> 26 & 1, s.fAtrFnt = c >> 27 & 1, s.fAtrAlc = c >> 28 & 1, s.fAtrBdr = c >> 29 & 1, s.fAtrPat = c >> 30 & 1, s.fAtrProt = c >> 31 & 1, s.dgLeft = u & 15, s.dgRight = u >> 4 & 15, s.dgTop = u >> 8 & 15, s.dgBottom = u >> 12 & 15, s.icvLeft = u >> 16 & 127, s.icvRight = u >> 23 & 127, s.grbitDiag = u >> 30 & 3, s.icvTop = o & 127, s.icvBottom = o >> 7 & 127, s.icvDiag = o >> 14 & 127, s.dgDiag = o >> 21 & 15, s.icvFore = x & 127, s.icvBack = x >> 7 & 127, s.fsxButton = x >> 14 & 1), s;
}
function Tk(e, a, r) {
  var i = {};
  return i.ifnt = e.read_shift(2), i.numFmtId = e.read_shift(2), i.flags = e.read_shift(2), i.fStyle = i.flags >> 2 & 1, a -= 6, i.data = _k(e, a, i.fStyle, r), i;
}
function wk(e) {
  e.l += 4;
  var a = [e.read_shift(2), e.read_shift(2)];
  if (a[0] !== 0 && a[0]--, a[1] !== 0 && a[1]--, a[0] > 7 || a[1] > 7) throw new Error("Bad Gutters: " + a.join("|"));
  return a;
}
function Tm(e, a, r) {
  var i = Ua(e);
  (r.biff == 2 || a == 9) && ++e.l;
  var s = HA(e);
  return i.val = s, i.t = s === true || s === false ? "b" : "e", i;
}
function Sk(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var i = Ua(e), s = mr(e);
  return i.val = s, i;
}
var wm = $A;
function Ak(e, a, r) {
  var i = e.l + a, s = e.read_shift(2), c = e.read_shift(2);
  if (r.sbcch = c, c == 1025 || c == 14849) return [c, s];
  if (c < 1 || c > 255) throw new Error("Unexpected SupBook type: " + c);
  for (var u = Si(e, c), o = []; i > e.l; ) o.push(p0(e));
  return [c, s, u, o];
}
function Sm(e, a, r) {
  var i = e.read_shift(2), s, c = { fBuiltIn: i & 1, fWantAdvise: i >>> 1 & 1, fWantPict: i >>> 2 & 1, fOle: i >>> 3 & 1, fOleLink: i >>> 4 & 1, cf: i >>> 5 & 1023, fIcon: i >>> 15 & 1 };
  return r.sbcch === 14849 && (s = KA(e, a - 2, r)), c.body = s || e.read_shift(a - 2), typeof s == "string" && (c.Name = s), c;
}
var kk = ["_xlnm.Consolidate_Area", "_xlnm.Auto_Open", "_xlnm.Auto_Close", "_xlnm.Extract", "_xlnm.Database", "_xlnm.Criteria", "_xlnm.Print_Area", "_xlnm.Print_Titles", "_xlnm.Recorder", "_xlnm.Data_Form", "_xlnm.Auto_Activate", "_xlnm.Auto_Deactivate", "_xlnm.Sheet_Title", "_xlnm._FilterDatabase"];
function Am(e, a, r) {
  var i = e.l + a, s = e.read_shift(2), c = e.read_shift(1), u = e.read_shift(1), o = e.read_shift(r && r.biff == 2 ? 1 : 2), x = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), x = e.read_shift(2), r.biff == 5 && (e.l += 2), e.l += 4);
  var d = Si(e, u, r);
  s & 32 && (d = kk[d.charCodeAt(0)]);
  var v = i - e.l;
  r && r.biff == 2 && --v;
  var m = i == e.l || o === 0 || !(v > 0) ? [] : lb(e, v, r, o);
  return { chKey: c, Name: d, itab: x, rgce: m };
}
function my(e, a, r) {
  if (r.biff < 8) return Ck(e, a, r);
  for (var i = [], s = e.l + a, c = e.read_shift(r.biff > 8 ? 4 : 2); c-- !== 0; ) i.push(qA(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != s) throw new Error("Bad ExternSheet: " + e.l + " != " + s);
  return i;
}
function Ck(e, a, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var i = v0(e, a, r);
  return i.charCodeAt(0) == 3 ? i.slice(1) : i;
}
function bk(e, a, r) {
  if (r.biff < 8) {
    e.l += a;
    return;
  }
  var i = e.read_shift(2), s = e.read_shift(2), c = Si(e, i, r), u = Si(e, s, r);
  return [c, u];
}
function Ok(e, a, r) {
  var i = vy(e);
  e.l++;
  var s = e.read_shift(1);
  return a -= 8, [cb(e, a, r), s, i];
}
function km(e, a, r) {
  var i = WA(e);
  switch (r.biff) {
    case 2:
      e.l++, a -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, a -= 8;
      break;
    default:
      e.l += 6, a -= 12;
  }
  return [i, ib(e, a, r)];
}
function Rk(e) {
  var a = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, i = e.read_shift(4);
  return [a, r, i];
}
function Dk(e, a, r) {
  if (!(r.biff < 8)) {
    var i = e.read_shift(2), s = e.read_shift(2), c = e.read_shift(2), u = e.read_shift(2), o = Ri(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: i, c: s }, o, u, c];
  }
}
function Fk(e, a, r) {
  return Dk(e, a, r);
}
function Nk(e, a) {
  for (var r = [], i = e.read_shift(2); i--; ) r.push(gf(e));
  return r;
}
function Mk(e, a, r) {
  if (r && r.biff < 8) return Bk(e, a, r);
  var i = py(e), s = ek(e, a - 22, i[1]);
  return { cmo: i, ft: s };
}
var Lk = { 8: function(e, a) {
  var r = e.l + a;
  e.l += 10;
  var i = e.read_shift(2);
  e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
  var s = e.read_shift(1);
  return e.l += s, e.l = r, { fmt: i };
} };
function Bk(e, a, r) {
  e.l += 4;
  var i = e.read_shift(2), s = e.read_shift(2), c = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, a -= 36;
  var u = [];
  return u.push((Lk[i] || Er)(e, a, r)), { cmo: [s, i, c], ft: u };
}
function Uk(e, a, r) {
  var i = e.l, s = "";
  try {
    e.l += 4;
    var c = (r.lastobj || { cmo: [0, 0] }).cmo[1], u;
    [0, 5, 7, 11, 12, 14].indexOf(c) == -1 ? e.l += 6 : u = zA(e, 6, r);
    var o = e.read_shift(2);
    e.read_shift(2), $t(e, 2);
    var x = e.read_shift(2);
    e.l += x;
    for (var d = 1; d < e.lens.length - 1; ++d) {
      if (e.l - i != e.lens[d]) throw new Error("TxO: bad continue record");
      var v = e[e.l], m = Si(e, e.lens[d + 1] - e.lens[d] - 1);
      if (s += m, s.length >= (v ? o : 2 * o)) break;
    }
    if (s.length !== o && s.length !== o * 2) throw new Error("cchText: " + o + " != " + s.length);
    return e.l = i + a, { t: s };
  } catch {
    return e.l = i + a, { t: s };
  }
}
function Ik(e, a) {
  var r = gf(e);
  e.l += 16;
  var i = XA(e, a - 24);
  return [r, i];
}
function Hk(e, a) {
  e.read_shift(2);
  var r = gf(e), i = e.read_shift((a - 10) / 2, "dbcs-cont");
  return i = i.replace(Cr, ""), [r, i];
}
function jk(e) {
  var a = [0, 0], r;
  return r = e.read_shift(2), a[0] = vm[r] || r, r = e.read_shift(2), a[1] = vm[r] || r, a;
}
function zk(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(dy(e));
  return r;
}
function Pk(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(dy(e));
  return r;
}
function Gk(e) {
  e.l += 2;
  var a = { cxfs: 0, crc: 0 };
  return a.cxfs = e.read_shift(2), a.crc = e.read_shift(4), a;
}
function gy(e, a, r) {
  if (!r.cellStyles) return Er(e, a);
  var i = r && r.biff >= 12 ? 4 : 2, s = e.read_shift(i), c = e.read_shift(i), u = e.read_shift(i), o = e.read_shift(i), x = e.read_shift(2);
  i == 2 && (e.l += 2);
  var d = { s, e: c, w: u, ixfe: o, flags: x };
  return (r.biff >= 5 || !r.biff) && (d.level = x >> 8 & 7), d;
}
function Vk(e, a) {
  var r = {};
  return a < 32 || (e.l += 16, r.header = mr(e), r.footer = mr(e), e.l += 2), r;
}
function Xk(e, a, r) {
  var i = { area: false };
  if (r.biff != 5) return e.l += a, i;
  var s = e.read_shift(1);
  return e.l += 3, s & 16 && (i.area = true), i;
}
var Yk = Ua, $k = oy, qk = p0;
function Kk(e) {
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(4), s = { fmt: a, env: r, len: i, data: e.slice(e.l, e.l + i) };
  return e.l += i, s;
}
function Wk(e, a, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var i = Ua(e);
  ++e.l;
  var s = Ri(e, a - 7, r);
  return i.t = "str", i.val = s, i;
}
function Zk(e) {
  var a = Ua(e);
  ++e.l;
  var r = mr(e);
  return a.t = "n", a.val = r, a;
}
function Qk(e) {
  var a = Ua(e);
  ++e.l;
  var r = e.read_shift(2);
  return a.t = "n", a.val = r, a;
}
function Jk(e) {
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, "sbcs-cont");
}
function e8(e, a) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += a - 13;
}
function t8(e, a, r) {
  var i = e.l + a, s = Ua(e), c = e.read_shift(2), u = Si(e, c, r);
  return e.l = i, s.t = "str", s.val = u, s;
}
var r8 = [2, 3, 48, 49, 131, 139, 140, 245], Cm = function() {
  var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 }, a = Zh({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
  function r(o, x) {
    var d = [], v = Pn(1);
    switch (x.type) {
      case "base64":
        v = ga($r(o));
        break;
      case "binary":
        v = ga(o);
        break;
      case "buffer":
      case "array":
        v = o;
        break;
    }
    ur(v, 0);
    var m = v.read_shift(1), g = !!(m & 136), y = false, T = false;
    switch (m) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        y = true, g = true;
        break;
      case 49:
        y = true, g = true;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        T = true;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + m.toString(16));
    }
    var E = 0, _ = 521;
    m == 2 && (E = v.read_shift(2)), v.l += 3, m != 2 && (E = v.read_shift(4)), E > 1048576 && (E = 1e6), m != 2 && (_ = v.read_shift(2));
    var O = v.read_shift(2), F = x.codepage || 1252;
    m != 2 && (v.l += 16, v.read_shift(1), v[v.l] !== 0 && (F = e[v[v.l]]), v.l += 1, v.l += 2), T && (v.l += 36);
    for (var k = [], M = {}, X = Math.min(v.length, m == 2 ? 521 : _ - 10 - (y ? 264 : 0)), z = T ? 32 : 11; v.l < X && v[v.l] != 13; ) switch (M = {}, M.name = hh.utils.decode(F, v.slice(v.l, v.l + z)).replace(/[\u0000\r\n].*$/g, ""), v.l += z, M.type = String.fromCharCode(v.read_shift(1)), m != 2 && !T && (M.offset = v.read_shift(4)), M.len = v.read_shift(1), m == 2 && (M.offset = v.read_shift(2)), M.dec = v.read_shift(1), M.name.length && k.push(M), m != 2 && (v.l += T ? 13 : 14), M.type) {
      case "B":
        (!y || M.len != 8) && x.WTF && console.log("Skipping " + M.name + ":" + M.type);
        break;
      case "G":
      case "P":
        x.WTF && console.log("Skipping " + M.name + ":" + M.type);
        break;
      case "+":
      case "0":
      case "@":
      case "C":
      case "D":
      case "F":
      case "I":
      case "L":
      case "M":
      case "N":
      case "O":
      case "T":
      case "Y":
        break;
      default:
        throw new Error("Unknown Field Type: " + M.type);
    }
    if (v[v.l] !== 13 && (v.l = _ - 1), v.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + v.l + " " + v[v.l]);
    v.l = _;
    var C = 0, S = 0;
    for (d[0] = [], S = 0; S != k.length; ++S) d[0][S] = k[S].name;
    for (; E-- > 0; ) {
      if (v[v.l] === 42) {
        v.l += O;
        continue;
      }
      for (++v.l, d[++C] = [], S = 0, S = 0; S != k.length; ++S) {
        var w = v.slice(v.l, v.l + k[S].len);
        v.l += k[S].len, ur(w, 0);
        var N = hh.utils.decode(F, w);
        switch (k[S].type) {
          case "C":
            N.trim().length && (d[C][S] = N.replace(/\s+$/, ""));
            break;
          case "D":
            N.length === 8 ? d[C][S] = new Date(+N.slice(0, 4), +N.slice(4, 6) - 1, +N.slice(6, 8)) : d[C][S] = N;
            break;
          case "F":
            d[C][S] = parseFloat(N.trim());
            break;
          case "+":
          case "I":
            d[C][S] = T ? w.read_shift(-4, "i") ^ 2147483648 : w.read_shift(4, "i");
            break;
          case "L":
            switch (N.trim().toUpperCase()) {
              case "Y":
              case "T":
                d[C][S] = true;
                break;
              case "N":
              case "F":
                d[C][S] = false;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + N + "|");
            }
            break;
          case "M":
            if (!g) throw new Error("DBF Unexpected MEMO for type " + m.toString(16));
            d[C][S] = "##MEMO##" + (T ? parseInt(N.trim(), 10) : w.read_shift(4));
            break;
          case "N":
            N = N.replace(/\u0000/g, "").trim(), N && N != "." && (d[C][S] = +N || 0);
            break;
          case "@":
            d[C][S] = new Date(w.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            d[C][S] = new Date((w.read_shift(4) - 2440588) * 864e5 + w.read_shift(4));
            break;
          case "Y":
            d[C][S] = w.read_shift(4, "i") / 1e4 + w.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            d[C][S] = -w.read_shift(-8, "f");
            break;
          case "B":
            if (y && k[S].len == 8) {
              d[C][S] = w.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            w.l += k[S].len;
            break;
          case "0":
            if (k[S].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + k[S].type);
        }
      }
    }
    if (m != 2 && v.l < v.length && v[v.l++] != 26) throw new Error("DBF EOF Marker missing " + (v.l - 1) + " of " + v.length + " " + v[v.l - 1].toString(16));
    return x && x.sheetRows && (d = d.slice(0, x.sheetRows)), x.DBF = k, d;
  }
  function i(o, x) {
    var d = x || {};
    d.dateNF || (d.dateNF = "yyyymmdd");
    var v = Fs(r(o, d), d);
    return v["!cols"] = d.DBF.map(function(m) {
      return { wch: m.len, DBF: m };
    }), delete d.DBF, v;
  }
  function s(o, x) {
    try {
      return Xn(i(o, x), x);
    } catch (d) {
      if (x && x.WTF) throw d;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var c = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function u(o, x) {
    var d = x || {};
    if (+d.codepage >= 0 && ya(+d.codepage), d.type == "string") throw new Error("Cannot write DBF to JS string");
    var v = dh(), m = wh(o, { header: 1, raw: true, cellDates: true }), g = m[0], y = m.slice(1), T = o["!cols"] || [], E = 0, _ = 0, O = 0, F = 1;
    for (E = 0; E < g.length; ++E) {
      if (((T[E] || {}).DBF || {}).name) {
        g[E] = T[E].DBF.name, ++O;
        continue;
      }
      if (g[E] != null) {
        if (++O, typeof g[E] == "number" && (g[E] = g[E].toString(10)), typeof g[E] != "string") throw new Error("DBF Invalid column name " + g[E] + " |" + typeof g[E] + "|");
        if (g.indexOf(g[E]) !== E) {
          for (_ = 0; _ < 1024; ++_) if (g.indexOf(g[E] + "_" + _) == -1) {
            g[E] += "_" + _;
            break;
          }
        }
      }
    }
    var k = Ut(o["!ref"]), M = [], X = [], z = [];
    for (E = 0; E <= k.e.c - k.s.c; ++E) {
      var C = "", S = "", w = 0, N = [];
      for (_ = 0; _ < y.length; ++_) y[_][E] != null && N.push(y[_][E]);
      if (N.length == 0 || g[E] == null) {
        M[E] = "?";
        continue;
      }
      for (_ = 0; _ < N.length; ++_) {
        switch (typeof N[_]) {
          case "number":
            S = "B";
            break;
          case "string":
            S = "C";
            break;
          case "boolean":
            S = "L";
            break;
          case "object":
            S = N[_] instanceof Date ? "D" : "C";
            break;
          default:
            S = "C";
        }
        w = Math.max(w, String(N[_]).length), C = C && C != S ? "C" : S;
      }
      w > 250 && (w = 250), S = ((T[E] || {}).DBF || {}).type, S == "C" && T[E].DBF.len > w && (w = T[E].DBF.len), C == "B" && S == "N" && (C = "N", z[E] = T[E].DBF.dec, w = T[E].DBF.len), X[E] = C == "C" || S == "N" ? w : c[C] || 0, F += X[E], M[E] = C;
    }
    var B = v.next(32);
    for (B.write_shift(4, 318902576), B.write_shift(4, y.length), B.write_shift(2, 296 + 32 * O), B.write_shift(2, F), E = 0; E < 4; ++E) B.write_shift(4, 0);
    for (B.write_shift(4, 0 | (+a[m2] || 3) << 8), E = 0, _ = 0; E < g.length; ++E) if (g[E] != null) {
      var U = v.next(32), ne = (g[E].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      U.write_shift(1, ne, "sbcs"), U.write_shift(1, M[E] == "?" ? "C" : M[E], "sbcs"), U.write_shift(4, _), U.write_shift(1, X[E] || c[M[E]] || 0), U.write_shift(1, z[E] || 0), U.write_shift(1, 2), U.write_shift(4, 0), U.write_shift(1, 0), U.write_shift(4, 0), U.write_shift(4, 0), _ += X[E] || c[M[E]] || 0;
    }
    var ge = v.next(264);
    for (ge.write_shift(4, 13), E = 0; E < 65; ++E) ge.write_shift(4, 0);
    for (E = 0; E < y.length; ++E) {
      var fe = v.next(F);
      for (fe.write_shift(1, 0), _ = 0; _ < g.length; ++_) if (g[_] != null) switch (M[_]) {
        case "L":
          fe.write_shift(1, y[E][_] == null ? 63 : y[E][_] ? 84 : 70);
          break;
        case "B":
          fe.write_shift(8, y[E][_] || 0, "f");
          break;
        case "N":
          var J = "0";
          for (typeof y[E][_] == "number" && (J = y[E][_].toFixed(z[_] || 0)), O = 0; O < X[_] - J.length; ++O) fe.write_shift(1, 32);
          fe.write_shift(1, J, "sbcs");
          break;
        case "D":
          y[E][_] ? (fe.write_shift(4, ("0000" + y[E][_].getFullYear()).slice(-4), "sbcs"), fe.write_shift(2, ("00" + (y[E][_].getMonth() + 1)).slice(-2), "sbcs"), fe.write_shift(2, ("00" + y[E][_].getDate()).slice(-2), "sbcs")) : fe.write_shift(8, "00000000", "sbcs");
          break;
        case "C":
          var ae = String(y[E][_] != null ? y[E][_] : "").slice(0, X[_]);
          for (fe.write_shift(1, ae, "sbcs"), O = 0; O < X[_] - ae.length; ++O) fe.write_shift(1, 32);
          break;
      }
    }
    return v.next(1).write_shift(1, 26), v.end();
  }
  return { to_workbook: s, to_sheet: i, from_sheet: u };
}(), a8 = function() {
  var e = { AA: "\xC0", BA: "\xC1", CA: "\xC2", DA: 195, HA: "\xC4", JA: 197, AE: "\xC8", BE: "\xC9", CE: "\xCA", HE: "\xCB", AI: "\xCC", BI: "\xCD", CI: "\xCE", HI: "\xCF", AO: "\xD2", BO: "\xD3", CO: "\xD4", DO: 213, HO: "\xD6", AU: "\xD9", BU: "\xDA", CU: "\xDB", HU: "\xDC", Aa: "\xE0", Ba: "\xE1", Ca: "\xE2", Da: 227, Ha: "\xE4", Ja: 229, Ae: "\xE8", Be: "\xE9", Ce: "\xEA", He: "\xEB", Ai: "\xEC", Bi: "\xED", Ci: "\xEE", Hi: "\xEF", Ao: "\xF2", Bo: "\xF3", Co: "\xF4", Do: 245, Ho: "\xF6", Au: "\xF9", Bu: "\xFA", Cu: "\xFB", Hu: "\xFC", KC: "\xC7", Kc: "\xE7", q: "\xE6", z: "\u0153", a: "\xC6", j: "\u0152", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 }, a = new RegExp("\x1BN(" + La(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(g, y) {
    var T = e[y];
    return typeof T == "number" ? Gp(T) : T;
  }, i = function(g, y, T) {
    var E = y.charCodeAt(0) - 32 << 4 | T.charCodeAt(0) - 48;
    return E == 59 ? g : Gp(E);
  };
  e["|"] = 254;
  function s(g, y) {
    switch (y.type) {
      case "base64":
        return c($r(g), y);
      case "binary":
        return c(g, y);
      case "buffer":
        return c(lt && Buffer.isBuffer(g) ? g.toString("binary") : ki(g), y);
      case "array":
        return c(wi(g), y);
    }
    throw new Error("Unrecognized type " + y.type);
  }
  function c(g, y) {
    var T = g.split(/[\n\r]+/), E = -1, _ = -1, O = 0, F = 0, k = [], M = [], X = null, z = {}, C = [], S = [], w = [], N = 0, B;
    for (+y.codepage >= 0 && ya(+y.codepage); O !== T.length; ++O) {
      N = 0;
      var U = T[O].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, i).replace(a, r), ne = U.replace(/;;/g, "\0").split(";").map(function(K) {
        return K.replace(/\u0000/g, ";");
      }), ge = ne[0], fe;
      if (U.length > 0) switch (ge) {
        case "ID":
          break;
        case "E":
          break;
        case "B":
          break;
        case "O":
          break;
        case "W":
          break;
        case "P":
          ne[1].charAt(0) == "P" && M.push(U.slice(3).replace(/;;/g, ";"));
          break;
        case "C":
          var J = false, ae = false, we = false, Q = false, H = -1, re = -1;
          for (F = 1; F < ne.length; ++F) switch (ne[F].charAt(0)) {
            case "A":
              break;
            case "X":
              _ = parseInt(ne[F].slice(1)) - 1, ae = true;
              break;
            case "Y":
              for (E = parseInt(ne[F].slice(1)) - 1, ae || (_ = 0), B = k.length; B <= E; ++B) k[B] = [];
              break;
            case "K":
              fe = ne[F].slice(1), fe.charAt(0) === '"' ? fe = fe.slice(1, fe.length - 1) : fe === "TRUE" ? fe = true : fe === "FALSE" ? fe = false : isNaN(Ta(fe)) ? isNaN(ks(fe).getDate()) || (fe = ir(fe)) : (fe = Ta(fe), X !== null && Rs(X) && (fe = mf(fe))), J = true;
              break;
            case "E":
              Q = true;
              var R = ys(ne[F].slice(1), { r: E, c: _ });
              k[E][_] = [k[E][_], R];
              break;
            case "S":
              we = true, k[E][_] = [k[E][_], "S5S"];
              break;
            case "G":
              break;
            case "R":
              H = parseInt(ne[F].slice(1)) - 1;
              break;
            case "C":
              re = parseInt(ne[F].slice(1)) - 1;
              break;
            default:
              if (y && y.WTF) throw new Error("SYLK bad record " + U);
          }
          if (J && (k[E][_] && k[E][_].length == 2 ? k[E][_][0] = fe : k[E][_] = fe, X = null), we) {
            if (Q) throw new Error("SYLK shared formula cannot have own formula");
            var j = H > -1 && k[H][re];
            if (!j || !j[1]) throw new Error("SYLK shared formula cannot find base");
            k[E][_][1] = by(j[1], { r: E - H, c: _ - re });
          }
          break;
        case "F":
          var q = 0;
          for (F = 1; F < ne.length; ++F) switch (ne[F].charAt(0)) {
            case "X":
              _ = parseInt(ne[F].slice(1)) - 1, ++q;
              break;
            case "Y":
              for (E = parseInt(ne[F].slice(1)) - 1, B = k.length; B <= E; ++B) k[B] = [];
              break;
            case "M":
              N = parseInt(ne[F].slice(1)) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              X = M[parseInt(ne[F].slice(1))];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (w = ne[F].slice(1).split(" "), B = parseInt(w[0], 10); B <= parseInt(w[1], 10); ++B) N = parseInt(w[2], 10), S[B - 1] = N === 0 ? { hidden: true } : { wch: N }, Cs(S[B - 1]);
              break;
            case "C":
              _ = parseInt(ne[F].slice(1)) - 1, S[_] || (S[_] = {});
              break;
            case "R":
              E = parseInt(ne[F].slice(1)) - 1, C[E] || (C[E] = {}), N > 0 ? (C[E].hpt = N, C[E].hpx = i0(N)) : N === 0 && (C[E].hidden = true);
              break;
            default:
              if (y && y.WTF) throw new Error("SYLK bad record " + U);
          }
          q < 1 && (X = null);
          break;
        default:
          if (y && y.WTF) throw new Error("SYLK bad record " + U);
      }
    }
    return C.length > 0 && (z["!rows"] = C), S.length > 0 && (z["!cols"] = S), y && y.sheetRows && (k = k.slice(0, y.sheetRows)), [k, z];
  }
  function u(g, y) {
    var T = s(g, y), E = T[0], _ = T[1], O = Fs(E, y);
    return La(_).forEach(function(F) {
      O[F] = _[F];
    }), O;
  }
  function o(g, y) {
    return Xn(u(g, y), y);
  }
  function x(g, y, T, E) {
    var _ = "C;Y" + (T + 1) + ";X" + (E + 1) + ";K";
    switch (g.t) {
      case "n":
        _ += g.v || 0, g.f && !g.F && (_ += ";E" + GC(g.f, { r: T, c: E }));
        break;
      case "b":
        _ += g.v ? "TRUE" : "FALSE";
        break;
      case "e":
        _ += g.w || g.v;
        break;
      case "d":
        _ += '"' + (g.w || g.v) + '"';
        break;
      case "s":
        _ += '"' + g.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return _;
  }
  function d(g, y) {
    y.forEach(function(T, E) {
      var _ = "F;W" + (E + 1) + " " + (E + 1) + " ";
      T.hidden ? _ += "0" : (typeof T.width == "number" && !T.wpx && (T.wpx = ff(T.width)), typeof T.wpx == "number" && !T.wch && (T.wch = uf(T.wpx)), typeof T.wch == "number" && (_ += Math.round(T.wch))), _.charAt(_.length - 1) != " " && g.push(_);
    });
  }
  function v(g, y) {
    y.forEach(function(T, E) {
      var _ = "F;";
      T.hidden ? _ += "M0;" : T.hpt ? _ += "M" + 20 * T.hpt + ";" : T.hpx && (_ += "M" + 20 * Ay(T.hpx) + ";"), _.length > 2 && g.push(_ + "R" + (E + 1));
    });
  }
  function m(g, y) {
    var T = ["ID;PWXL;N;E"], E = [], _ = Ut(g["!ref"]), O, F = Array.isArray(g), k = `\r
`;
    T.push("P;PGeneral"), T.push("F;P0;DG0G8;M255"), g["!cols"] && d(T, g["!cols"]), g["!rows"] && v(T, g["!rows"]), T.push("B;Y" + (_.e.r - _.s.r + 1) + ";X" + (_.e.c - _.s.c + 1) + ";D" + [_.s.c, _.s.r, _.e.c, _.e.r].join(" "));
    for (var M = _.s.r; M <= _.e.r; ++M) for (var X = _.s.c; X <= _.e.c; ++X) {
      var z = Ye({ r: M, c: X });
      O = F ? (g[M] || [])[X] : g[z], !(!O || O.v == null && (!O.f || O.F)) && E.push(x(O, g, M, X));
    }
    return T.join(k) + k + E.join(k) + k + "E" + k;
  }
  return { to_workbook: o, to_sheet: u, from_sheet: m };
}(), n8 = /* @__PURE__ */ function() {
  function e(c, u) {
    switch (u.type) {
      case "base64":
        return a($r(c), u);
      case "binary":
        return a(c, u);
      case "buffer":
        return a(lt && Buffer.isBuffer(c) ? c.toString("binary") : ki(c), u);
      case "array":
        return a(wi(c), u);
    }
    throw new Error("Unrecognized type " + u.type);
  }
  function a(c, u) {
    for (var o = c.split(`
`), x = -1, d = -1, v = 0, m = []; v !== o.length; ++v) {
      if (o[v].trim() === "BOT") {
        m[++x] = [], d = 0;
        continue;
      }
      if (!(x < 0)) {
        var g = o[v].trim().split(","), y = g[0], T = g[1];
        ++v;
        for (var E = o[v] || ""; (E.match(/["]/g) || []).length & 1 && v < o.length - 1; ) E += `
` + o[++v];
        switch (E = E.trim(), +y) {
          case -1:
            if (E === "BOT") {
              m[++x] = [], d = 0;
              continue;
            } else if (E !== "EOD") throw new Error("Unrecognized DIF special command " + E);
            break;
          case 0:
            E === "TRUE" ? m[x][d] = true : E === "FALSE" ? m[x][d] = false : isNaN(Ta(T)) ? isNaN(ks(T).getDate()) ? m[x][d] = T : m[x][d] = ir(T) : m[x][d] = Ta(T), ++d;
            break;
          case 1:
            E = E.slice(1, E.length - 1), E = E.replace(/""/g, '"'), E && E.match(/^=".*"$/) && (E = E.slice(2, -1)), m[x][d++] = E !== "" ? E : null;
            break;
        }
        if (E === "EOD") break;
      }
    }
    return u && u.sheetRows && (m = m.slice(0, u.sheetRows)), m;
  }
  function r(c, u) {
    return Fs(e(c, u), u);
  }
  function i(c, u) {
    return Xn(r(c, u), u);
  }
  var s = /* @__PURE__ */ function() {
    var c = function(x, d, v, m, g) {
      x.push(d), x.push(v + "," + m), x.push('"' + g.replace(/"/g, '""') + '"');
    }, u = function(x, d, v, m) {
      x.push(d + "," + v), x.push(d == 1 ? '"' + m.replace(/"/g, '""') + '"' : m);
    };
    return function(x) {
      var d = [], v = Ut(x["!ref"]), m, g = Array.isArray(x);
      c(d, "TABLE", 0, 1, "sheetjs"), c(d, "VECTORS", 0, v.e.r - v.s.r + 1, ""), c(d, "TUPLES", 0, v.e.c - v.s.c + 1, ""), c(d, "DATA", 0, 0, "");
      for (var y = v.s.r; y <= v.e.r; ++y) {
        u(d, -1, 0, "BOT");
        for (var T = v.s.c; T <= v.e.c; ++T) {
          var E = Ye({ r: y, c: T });
          if (m = g ? (x[y] || [])[T] : x[E], !m) {
            u(d, 1, 0, "");
            continue;
          }
          switch (m.t) {
            case "n":
              var _ = m.w;
              !_ && m.v != null && (_ = m.v), _ == null ? m.f && !m.F ? u(d, 1, 0, "=" + m.f) : u(d, 1, 0, "") : u(d, 0, _, "V");
              break;
            case "b":
              u(d, 0, m.v ? 1 : 0, m.v ? "TRUE" : "FALSE");
              break;
            case "s":
              u(d, 1, 0, isNaN(m.v) ? m.v : '="' + m.v + '"');
              break;
            case "d":
              m.w || (m.w = fa(m.z || We[14], br(ir(m.v)))), u(d, 0, m.w, "V");
              break;
            default:
              u(d, 1, 0, "");
          }
        }
      }
      u(d, -1, 0, "EOD");
      var O = `\r
`, F = d.join(O);
      return F;
    };
  }();
  return { to_workbook: i, to_sheet: r, from_sheet: s };
}(), i8 = function() {
  function e(m) {
    return m.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function a(m) {
    return m.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(m, g) {
    for (var y = m.split(`
`), T = -1, E = -1, _ = 0, O = []; _ !== y.length; ++_) {
      var F = y[_].trim().split(":");
      if (F[0] === "cell") {
        var k = kr(F[1]);
        if (O.length <= k.r) for (T = O.length; T <= k.r; ++T) O[T] || (O[T] = []);
        switch (T = k.r, E = k.c, F[2]) {
          case "t":
            O[T][E] = e(F[3]);
            break;
          case "v":
            O[T][E] = +F[3];
            break;
          case "vtf":
            var M = F[F.length - 1];
          case "vtc":
            switch (F[3]) {
              case "nl":
                O[T][E] = !!+F[4];
                break;
              default:
                O[T][E] = +F[4];
                break;
            }
            F[2] == "vtf" && (O[T][E] = [O[T][E], M]);
        }
      }
    }
    return g && g.sheetRows && (O = O.slice(0, g.sheetRows)), O;
  }
  function i(m, g) {
    return Fs(r(m, g), g);
  }
  function s(m, g) {
    return Xn(i(m, g), g);
  }
  var c = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join(`
`), u = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join(`
`) + `
`, o = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`), x = "--SocialCalcSpreadsheetControlSave--";
  function d(m) {
    if (!m || !m["!ref"]) return "";
    for (var g = [], y = [], T, E = "", _ = Ds(m["!ref"]), O = Array.isArray(m), F = _.s.r; F <= _.e.r; ++F) for (var k = _.s.c; k <= _.e.c; ++k) if (E = Ye({ r: F, c: k }), T = O ? (m[F] || [])[k] : m[E], !(!T || T.v == null || T.t === "z")) {
      switch (y = ["cell", E, "t"], T.t) {
        case "s":
        case "str":
          y.push(a(T.v));
          break;
        case "n":
          T.f ? (y[2] = "vtf", y[3] = "n", y[4] = T.v, y[5] = a(T.f)) : (y[2] = "v", y[3] = T.v);
          break;
        case "b":
          y[2] = "vt" + (T.f ? "f" : "c"), y[3] = "nl", y[4] = T.v ? "1" : "0", y[5] = a(T.f || (T.v ? "TRUE" : "FALSE"));
          break;
        case "d":
          var M = br(ir(T.v));
          y[2] = "vtc", y[3] = "nd", y[4] = "" + M, y[5] = T.w || fa(T.z || We[14], M);
          break;
        case "e":
          continue;
      }
      g.push(y.join(":"));
    }
    return g.push("sheet:c:" + (_.e.c - _.s.c + 1) + ":r:" + (_.e.r - _.s.r + 1) + ":tvf:1"), g.push("valueformat:1:text-wiki"), g.join(`
`);
  }
  function v(m) {
    return [c, u, o, u, d(m), x].join(`
`);
  }
  return { to_workbook: s, to_sheet: i, from_sheet: v };
}(), a0 = /* @__PURE__ */ function() {
  function e(v, m, g, y, T) {
    T.raw ? m[g][y] = v : v === "" || (v === "TRUE" ? m[g][y] = true : v === "FALSE" ? m[g][y] = false : isNaN(Ta(v)) ? isNaN(ks(v).getDate()) ? m[g][y] = v : m[g][y] = ir(v) : m[g][y] = Ta(v));
  }
  function a(v, m) {
    var g = m || {}, y = [];
    if (!v || v.length === 0) return y;
    for (var T = v.split(/[\r\n]/), E = T.length - 1; E >= 0 && T[E].length === 0; ) --E;
    for (var _ = 10, O = 0, F = 0; F <= E; ++F) O = T[F].indexOf(" "), O == -1 ? O = T[F].length : O++, _ = Math.max(_, O);
    for (F = 0; F <= E; ++F) {
      y[F] = [];
      var k = 0;
      for (e(T[F].slice(0, _).trim(), y, F, k, g), k = 1; k <= (T[F].length - _) / 10 + 1; ++k) e(T[F].slice(_ + (k - 1) * 10, _ + k * 10).trim(), y, F, k, g);
    }
    return g.sheetRows && (y = y.slice(0, g.sheetRows)), y;
  }
  var r = { 44: ",", 9: "	", 59: ";", 124: "|" }, i = { 44: 3, 9: 2, 59: 1, 124: 0 };
  function s(v) {
    for (var m = {}, g = false, y = 0, T = 0; y < v.length; ++y) (T = v.charCodeAt(y)) == 34 ? g = !g : !g && T in r && (m[T] = (m[T] || 0) + 1);
    T = [];
    for (y in m) Object.prototype.hasOwnProperty.call(m, y) && T.push([m[y], y]);
    if (!T.length) {
      m = i;
      for (y in m) Object.prototype.hasOwnProperty.call(m, y) && T.push([m[y], y]);
    }
    return T.sort(function(E, _) {
      return E[0] - _[0] || i[E[1]] - i[_[1]];
    }), r[T.pop()[1]] || 44;
  }
  function c(v, m) {
    var g = m || {}, y = "", T = g.dense ? [] : {}, E = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    v.slice(0, 4) == "sep=" ? v.charCodeAt(5) == 13 && v.charCodeAt(6) == 10 ? (y = v.charAt(4), v = v.slice(7)) : v.charCodeAt(5) == 13 || v.charCodeAt(5) == 10 ? (y = v.charAt(4), v = v.slice(6)) : y = s(v.slice(0, 1024)) : g && g.FS ? y = g.FS : y = s(v.slice(0, 1024));
    var _ = 0, O = 0, F = 0, k = 0, M = 0, X = y.charCodeAt(0), z = false, C = 0, S = v.charCodeAt(0);
    v = v.replace(/\r\n/mg, `
`);
    var w = g.dateNF != null ? p3(g.dateNF) : null;
    function N() {
      var B = v.slice(k, M), U = {};
      if (B.charAt(0) == '"' && B.charAt(B.length - 1) == '"' && (B = B.slice(1, -1).replace(/""/g, '"')), B.length === 0) U.t = "z";
      else if (g.raw) U.t = "s", U.v = B;
      else if (B.trim().length === 0) U.t = "s", U.v = B;
      else if (B.charCodeAt(0) == 61) B.charCodeAt(1) == 34 && B.charCodeAt(B.length - 1) == 34 ? (U.t = "s", U.v = B.slice(2, -1).replace(/""/g, '"')) : XC(B) ? (U.t = "n", U.f = B.slice(1)) : (U.t = "s", U.v = B);
      else if (B == "TRUE") U.t = "b", U.v = true;
      else if (B == "FALSE") U.t = "b", U.v = false;
      else if (!isNaN(F = Ta(B))) U.t = "n", g.cellText !== false && (U.w = B), U.v = F;
      else if (!isNaN(ks(B).getDate()) || w && B.match(w)) {
        U.z = g.dateNF || We[14];
        var ne = 0;
        w && B.match(w) && (B = m3(B, g.dateNF, B.match(w) || []), ne = 1), g.cellDates ? (U.t = "d", U.v = ir(B, ne)) : (U.t = "n", U.v = br(ir(B, ne))), g.cellText !== false && (U.w = fa(U.z, U.v instanceof Date ? br(U.v) : U.v)), g.cellNF || delete U.z;
      } else U.t = "s", U.v = B;
      if (U.t == "z" || (g.dense ? (T[_] || (T[_] = []), T[_][O] = U) : T[Ye({ c: O, r: _ })] = U), k = M + 1, S = v.charCodeAt(k), E.e.c < O && (E.e.c = O), E.e.r < _ && (E.e.r = _), C == X) ++O;
      else if (O = 0, ++_, g.sheetRows && g.sheetRows <= _) return true;
    }
    e: for (; M < v.length; ++M) switch (C = v.charCodeAt(M)) {
      case 34:
        S === 34 && (z = !z);
        break;
      case X:
      case 10:
      case 13:
        if (!z && N()) break e;
        break;
    }
    return M - k > 0 && N(), T["!ref"] = ut(E), T;
  }
  function u(v, m) {
    return !(m && m.PRN) || m.FS || v.slice(0, 4) == "sep=" || v.indexOf("	") >= 0 || v.indexOf(",") >= 0 || v.indexOf(";") >= 0 ? c(v, m) : Fs(a(v, m), m);
  }
  function o(v, m) {
    var g = "", y = m.type == "string" ? [0, 0, 0, 0] : pd(v, m);
    switch (m.type) {
      case "base64":
        g = $r(v);
        break;
      case "binary":
        g = v;
        break;
      case "buffer":
        m.codepage == 65001 ? g = v.toString("utf8") : (m.codepage, g = lt && Buffer.isBuffer(v) ? v.toString("binary") : ki(v));
        break;
      case "array":
        g = wi(v);
        break;
      case "string":
        g = v;
        break;
      default:
        throw new Error("Unrecognized type " + m.type);
    }
    return y[0] == 239 && y[1] == 187 && y[2] == 191 ? g = bt(g.slice(3)) : m.type != "string" && m.type != "buffer" && m.codepage == 65001 ? g = bt(g) : m.type == "binary", g.slice(0, 19) == "socialcalc:version:" ? i8.to_sheet(m.type == "string" ? g : bt(g), m) : u(g, m);
  }
  function x(v, m) {
    return Xn(o(v, m), m);
  }
  function d(v) {
    for (var m = [], g = Ut(v["!ref"]), y, T = Array.isArray(v), E = g.s.r; E <= g.e.r; ++E) {
      for (var _ = [], O = g.s.c; O <= g.e.c; ++O) {
        var F = Ye({ r: E, c: O });
        if (y = T ? (v[E] || [])[O] : v[F], !y || y.v == null) {
          _.push("          ");
          continue;
        }
        for (var k = (y.w || (sn(y), y.w) || "").slice(0, 10); k.length < 10; ) k += " ";
        _.push(k + (O === 0 ? " " : ""));
      }
      m.push(_.join(""));
    }
    return m.join(`
`);
  }
  return { to_workbook: x, to_sheet: o, from_sheet: d };
}();
function s8(e, a) {
  var r = a || {}, i = !!r.WTF;
  r.WTF = true;
  try {
    var s = a8.to_workbook(e, r);
    return r.WTF = i, s;
  } catch (c) {
    if (r.WTF = i, !c.message.match(/SYLK bad record ID/) && i) throw c;
    return a0.to_workbook(e, a);
  }
}
var $l = /* @__PURE__ */ function() {
  function e(R, j, q) {
    if (R) {
      ur(R, R.l || 0);
      for (var K = q.Enum || H; R.l < R.length; ) {
        var ie = R.read_shift(2), Ae = K[ie] || K[65535], pe = R.read_shift(2), ye = R.l + pe, _e = Ae.f && Ae.f(R, pe, q);
        if (R.l = ye, j(_e, Ae, ie)) return;
      }
    }
  }
  function a(R, j) {
    switch (j.type) {
      case "base64":
        return r(ga($r(R)), j);
      case "binary":
        return r(ga(R), j);
      case "buffer":
      case "array":
        return r(R, j);
    }
    throw "Unsupported type " + j.type;
  }
  function r(R, j) {
    if (!R) return R;
    var q = j || {}, K = q.dense ? [] : {}, ie = "Sheet1", Ae = "", pe = 0, ye = {}, _e = [], Re = [], V = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ge = q.sheetRows || 0;
    if (R[2] == 0 && (R[3] == 8 || R[3] == 9) && R.length >= 16 && R[14] == 5 && R[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (R[2] == 2) q.Enum = H, e(R, function(ke, Ie, Ke) {
      switch (Ke) {
        case 0:
          q.vers = ke, ke >= 4096 && (q.qpro = true);
          break;
        case 6:
          V = ke;
          break;
        case 204:
          ke && (Ae = ke);
          break;
        case 222:
          Ae = ke;
          break;
        case 15:
        case 51:
          q.qpro || (ke[1].v = ke[1].v.slice(1));
        case 13:
        case 14:
        case 16:
          Ke == 14 && (ke[2] & 112) == 112 && (ke[2] & 15) > 1 && (ke[2] & 15) < 15 && (ke[1].z = q.dateNF || We[14], q.cellDates && (ke[1].t = "d", ke[1].v = mf(ke[1].v))), q.qpro && ke[3] > pe && (K["!ref"] = ut(V), ye[ie] = K, _e.push(ie), K = q.dense ? [] : {}, V = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, pe = ke[3], ie = Ae || "Sheet" + (pe + 1), Ae = "");
          var Ze = q.dense ? (K[ke[0].r] || [])[ke[0].c] : K[Ye(ke[0])];
          if (Ze) {
            Ze.t = ke[1].t, Ze.v = ke[1].v, ke[1].z != null && (Ze.z = ke[1].z), ke[1].f != null && (Ze.f = ke[1].f);
            break;
          }
          q.dense ? (K[ke[0].r] || (K[ke[0].r] = []), K[ke[0].r][ke[0].c] = ke[1]) : K[Ye(ke[0])] = ke[1];
          break;
      }
    }, q);
    else if (R[2] == 26 || R[2] == 14) q.Enum = re, R[2] == 14 && (q.qpro = true, R.l = 0), e(R, function(ke, Ie, Ke) {
      switch (Ke) {
        case 204:
          ie = ke;
          break;
        case 22:
          ke[1].v = ke[1].v.slice(1);
        case 23:
        case 24:
        case 25:
        case 37:
        case 39:
        case 40:
          if (ke[3] > pe && (K["!ref"] = ut(V), ye[ie] = K, _e.push(ie), K = q.dense ? [] : {}, V = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, pe = ke[3], ie = "Sheet" + (pe + 1)), Ge > 0 && ke[0].r >= Ge) break;
          q.dense ? (K[ke[0].r] || (K[ke[0].r] = []), K[ke[0].r][ke[0].c] = ke[1]) : K[Ye(ke[0])] = ke[1], V.e.c < ke[0].c && (V.e.c = ke[0].c), V.e.r < ke[0].r && (V.e.r = ke[0].r);
          break;
        case 27:
          ke[14e3] && (Re[ke[14e3][0]] = ke[14e3][1]);
          break;
        case 1537:
          Re[ke[0]] = ke[1], ke[0] == pe && (ie = ke[1]);
          break;
      }
    }, q);
    else throw new Error("Unrecognized LOTUS BOF " + R[2]);
    if (K["!ref"] = ut(V), ye[Ae || ie] = K, _e.push(Ae || ie), !Re.length) return { SheetNames: _e, Sheets: ye };
    for (var Le = {}, Be = [], De = 0; De < Re.length; ++De) ye[_e[De]] ? (Be.push(Re[De] || _e[De]), Le[Re[De]] = ye[Re[De]] || ye[_e[De]]) : (Be.push(Re[De]), Le[Re[De]] = { "!ref": "A1" });
    return { SheetNames: Be, Sheets: Le };
  }
  function i(R, j) {
    var q = j || {};
    if (+q.codepage >= 0 && ya(+q.codepage), q.type == "string") throw new Error("Cannot write WK1 to JS string");
    var K = dh(), ie = Ut(R["!ref"]), Ae = Array.isArray(R), pe = [];
    ma(K, 0, c(1030)), ma(K, 6, x(ie));
    for (var ye = Math.min(ie.e.r, 8191), _e = ie.s.r; _e <= ye; ++_e) for (var Re = hr(_e), V = ie.s.c; V <= ie.e.c; ++V) {
      _e === ie.s.r && (pe[V] = Zt(V));
      var Ge = pe[V] + Re, Le = Ae ? (R[_e] || [])[V] : R[Ge];
      if (!(!Le || Le.t == "z")) if (Le.t == "n") (Le.v | 0) == Le.v && Le.v >= -32768 && Le.v <= 32767 ? ma(K, 13, y(_e, V, Le.v)) : ma(K, 14, E(_e, V, Le.v));
      else {
        var Be = sn(Le);
        ma(K, 15, m(_e, V, Be.slice(0, 239)));
      }
    }
    return ma(K, 1), K.end();
  }
  function s(R, j) {
    var q = j || {};
    if (+q.codepage >= 0 && ya(+q.codepage), q.type == "string") throw new Error("Cannot write WK3 to JS string");
    var K = dh();
    ma(K, 0, u(R));
    for (var ie = 0, Ae = 0; ie < R.SheetNames.length; ++ie) (R.Sheets[R.SheetNames[ie]] || {})["!ref"] && ma(K, 27, Q(R.SheetNames[ie], Ae++));
    var pe = 0;
    for (ie = 0; ie < R.SheetNames.length; ++ie) {
      var ye = R.Sheets[R.SheetNames[ie]];
      if (!(!ye || !ye["!ref"])) {
        for (var _e = Ut(ye["!ref"]), Re = Array.isArray(ye), V = [], Ge = Math.min(_e.e.r, 8191), Le = _e.s.r; Le <= Ge; ++Le) for (var Be = hr(Le), De = _e.s.c; De <= _e.e.c; ++De) {
          Le === _e.s.r && (V[De] = Zt(De));
          var ke = V[De] + Be, Ie = Re ? (ye[Le] || [])[De] : ye[ke];
          if (!(!Ie || Ie.t == "z")) if (Ie.t == "n") ma(K, 23, N(Le, De, pe, Ie.v));
          else {
            var Ke = sn(Ie);
            ma(K, 22, C(Le, De, pe, Ke.slice(0, 239)));
          }
        }
        ++pe;
      }
    }
    return ma(K, 1), K.end();
  }
  function c(R) {
    var j = Wt(2);
    return j.write_shift(2, R), j;
  }
  function u(R) {
    var j = Wt(26);
    j.write_shift(2, 4096), j.write_shift(2, 4), j.write_shift(4, 0);
    for (var q = 0, K = 0, ie = 0, Ae = 0; Ae < R.SheetNames.length; ++Ae) {
      var pe = R.SheetNames[Ae], ye = R.Sheets[pe];
      if (!(!ye || !ye["!ref"])) {
        ++ie;
        var _e = Ds(ye["!ref"]);
        q < _e.e.r && (q = _e.e.r), K < _e.e.c && (K = _e.e.c);
      }
    }
    return q > 8191 && (q = 8191), j.write_shift(2, q), j.write_shift(1, ie), j.write_shift(1, K), j.write_shift(2, 0), j.write_shift(2, 0), j.write_shift(1, 1), j.write_shift(1, 2), j.write_shift(4, 0), j.write_shift(4, 0), j;
  }
  function o(R, j, q) {
    var K = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return j == 8 && q.qpro ? (K.s.c = R.read_shift(1), R.l++, K.s.r = R.read_shift(2), K.e.c = R.read_shift(1), R.l++, K.e.r = R.read_shift(2), K) : (K.s.c = R.read_shift(2), K.s.r = R.read_shift(2), j == 12 && q.qpro && (R.l += 2), K.e.c = R.read_shift(2), K.e.r = R.read_shift(2), j == 12 && q.qpro && (R.l += 2), K.s.c == 65535 && (K.s.c = K.e.c = K.s.r = K.e.r = 0), K);
  }
  function x(R) {
    var j = Wt(8);
    return j.write_shift(2, R.s.c), j.write_shift(2, R.s.r), j.write_shift(2, R.e.c), j.write_shift(2, R.e.r), j;
  }
  function d(R, j, q) {
    var K = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return q.qpro && q.vers != 20768 ? (K[0].c = R.read_shift(1), K[3] = R.read_shift(1), K[0].r = R.read_shift(2), R.l += 2) : (K[2] = R.read_shift(1), K[0].c = R.read_shift(2), K[0].r = R.read_shift(2)), K;
  }
  function v(R, j, q) {
    var K = R.l + j, ie = d(R, j, q);
    if (ie[1].t = "s", q.vers == 20768) {
      R.l++;
      var Ae = R.read_shift(1);
      return ie[1].v = R.read_shift(Ae, "utf8"), ie;
    }
    return q.qpro && R.l++, ie[1].v = R.read_shift(K - R.l, "cstr"), ie;
  }
  function m(R, j, q) {
    var K = Wt(7 + q.length);
    K.write_shift(1, 255), K.write_shift(2, j), K.write_shift(2, R), K.write_shift(1, 39);
    for (var ie = 0; ie < K.length; ++ie) {
      var Ae = q.charCodeAt(ie);
      K.write_shift(1, Ae >= 128 ? 95 : Ae);
    }
    return K.write_shift(1, 0), K;
  }
  function g(R, j, q) {
    var K = d(R, j, q);
    return K[1].v = R.read_shift(2, "i"), K;
  }
  function y(R, j, q) {
    var K = Wt(7);
    return K.write_shift(1, 255), K.write_shift(2, j), K.write_shift(2, R), K.write_shift(2, q, "i"), K;
  }
  function T(R, j, q) {
    var K = d(R, j, q);
    return K[1].v = R.read_shift(8, "f"), K;
  }
  function E(R, j, q) {
    var K = Wt(13);
    return K.write_shift(1, 255), K.write_shift(2, j), K.write_shift(2, R), K.write_shift(8, q, "f"), K;
  }
  function _(R, j, q) {
    var K = R.l + j, ie = d(R, j, q);
    if (ie[1].v = R.read_shift(8, "f"), q.qpro) R.l = K;
    else {
      var Ae = R.read_shift(2);
      M(R.slice(R.l, R.l + Ae), ie), R.l += Ae;
    }
    return ie;
  }
  function O(R, j, q) {
    var K = j & 32768;
    return j &= -32769, j = (K ? R : 0) + (j >= 8192 ? j - 16384 : j), (K ? "" : "$") + (q ? Zt(j) : hr(j));
  }
  var F = { 51: ["FALSE", 0], 52: ["TRUE", 0], 70: ["LEN", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 111: ["T", 1] }, k = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function M(R, j) {
    ur(R, 0);
    for (var q = [], K = 0, ie = "", Ae = "", pe = "", ye = ""; R.l < R.length; ) {
      var _e = R[R.l++];
      switch (_e) {
        case 0:
          q.push(R.read_shift(8, "f"));
          break;
        case 1:
          Ae = O(j[0].c, R.read_shift(2), true), ie = O(j[0].r, R.read_shift(2), false), q.push(Ae + ie);
          break;
        case 2:
          {
            var Re = O(j[0].c, R.read_shift(2), true), V = O(j[0].r, R.read_shift(2), false);
            Ae = O(j[0].c, R.read_shift(2), true), ie = O(j[0].r, R.read_shift(2), false), q.push(Re + V + ":" + Ae + ie);
          }
          break;
        case 3:
          if (R.l < R.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          q.push("(" + q.pop() + ")");
          break;
        case 5:
          q.push(R.read_shift(2));
          break;
        case 6:
          {
            for (var Ge = ""; _e = R[R.l++]; ) Ge += String.fromCharCode(_e);
            q.push('"' + Ge.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          q.push("-" + q.pop());
          break;
        case 23:
          q.push("+" + q.pop());
          break;
        case 22:
          q.push("NOT(" + q.pop() + ")");
          break;
        case 20:
        case 21:
          ye = q.pop(), pe = q.pop(), q.push(["AND", "OR"][_e - 20] + "(" + pe + "," + ye + ")");
          break;
        default:
          if (_e < 32 && k[_e]) ye = q.pop(), pe = q.pop(), q.push(pe + k[_e] + ye);
          else if (F[_e]) {
            if (K = F[_e][1], K == 69 && (K = R[R.l++]), K > q.length) {
              console.error("WK1 bad formula parse 0x" + _e.toString(16) + ":|" + q.join("|") + "|");
              return;
            }
            var Le = q.slice(-K);
            q.length -= K, q.push(F[_e][0] + "(" + Le.join(",") + ")");
          } else return _e <= 7 ? console.error("WK1 invalid opcode " + _e.toString(16)) : _e <= 24 ? console.error("WK1 unsupported op " + _e.toString(16)) : _e <= 30 ? console.error("WK1 invalid opcode " + _e.toString(16)) : _e <= 115 ? console.error("WK1 unsupported function opcode " + _e.toString(16)) : console.error("WK1 unrecognized opcode " + _e.toString(16));
      }
    }
    q.length == 1 ? j[1].f = "" + q[0] : console.error("WK1 bad formula parse |" + q.join("|") + "|");
  }
  function X(R) {
    var j = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return j[0].r = R.read_shift(2), j[3] = R[R.l++], j[0].c = R[R.l++], j;
  }
  function z(R, j) {
    var q = X(R);
    return q[1].t = "s", q[1].v = R.read_shift(j - 4, "cstr"), q;
  }
  function C(R, j, q, K) {
    var ie = Wt(6 + K.length);
    ie.write_shift(2, R), ie.write_shift(1, q), ie.write_shift(1, j), ie.write_shift(1, 39);
    for (var Ae = 0; Ae < K.length; ++Ae) {
      var pe = K.charCodeAt(Ae);
      ie.write_shift(1, pe >= 128 ? 95 : pe);
    }
    return ie.write_shift(1, 0), ie;
  }
  function S(R, j) {
    var q = X(R);
    q[1].v = R.read_shift(2);
    var K = q[1].v >> 1;
    if (q[1].v & 1) switch (K & 7) {
      case 0:
        K = (K >> 3) * 5e3;
        break;
      case 1:
        K = (K >> 3) * 500;
        break;
      case 2:
        K = (K >> 3) / 20;
        break;
      case 3:
        K = (K >> 3) / 200;
        break;
      case 4:
        K = (K >> 3) / 2e3;
        break;
      case 5:
        K = (K >> 3) / 2e4;
        break;
      case 6:
        K = (K >> 3) / 16;
        break;
      case 7:
        K = (K >> 3) / 64;
        break;
    }
    return q[1].v = K, q;
  }
  function w(R, j) {
    var q = X(R), K = R.read_shift(4), ie = R.read_shift(4), Ae = R.read_shift(2);
    if (Ae == 65535) return K === 0 && ie === 3221225472 ? (q[1].t = "e", q[1].v = 15) : K === 0 && ie === 3489660928 ? (q[1].t = "e", q[1].v = 42) : q[1].v = 0, q;
    var pe = Ae & 32768;
    return Ae = (Ae & 32767) - 16446, q[1].v = (1 - pe * 2) * (ie * Math.pow(2, Ae + 32) + K * Math.pow(2, Ae)), q;
  }
  function N(R, j, q, K) {
    var ie = Wt(14);
    if (ie.write_shift(2, R), ie.write_shift(1, q), ie.write_shift(1, j), K == 0) return ie.write_shift(4, 0), ie.write_shift(4, 0), ie.write_shift(2, 65535), ie;
    var Ae = 0, pe = 0, ye = 0, _e = 0;
    return K < 0 && (Ae = 1, K = -K), pe = Math.log2(K) | 0, K /= Math.pow(2, pe - 31), _e = K >>> 0, (_e & 2147483648) == 0 && (K /= 2, ++pe, _e = K >>> 0), K -= _e, _e |= 2147483648, _e >>>= 0, K *= Math.pow(2, 32), ye = K >>> 0, ie.write_shift(4, ye), ie.write_shift(4, _e), pe += 16383 + (Ae ? 32768 : 0), ie.write_shift(2, pe), ie;
  }
  function B(R, j) {
    var q = w(R);
    return R.l += j - 14, q;
  }
  function U(R, j) {
    var q = X(R), K = R.read_shift(4);
    return q[1].v = K >> 6, q;
  }
  function ne(R, j) {
    var q = X(R), K = R.read_shift(8, "f");
    return q[1].v = K, q;
  }
  function ge(R, j) {
    var q = ne(R);
    return R.l += j - 10, q;
  }
  function fe(R, j) {
    return R[R.l + j - 1] == 0 ? R.read_shift(j, "cstr") : "";
  }
  function J(R, j) {
    var q = R[R.l++];
    q > j - 1 && (q = j - 1);
    for (var K = ""; K.length < q; ) K += String.fromCharCode(R[R.l++]);
    return K;
  }
  function ae(R, j, q) {
    if (!(!q.qpro || j < 21)) {
      var K = R.read_shift(1);
      R.l += 17, R.l += 1, R.l += 2;
      var ie = R.read_shift(j - 21, "cstr");
      return [K, ie];
    }
  }
  function we(R, j) {
    for (var q = {}, K = R.l + j; R.l < K; ) {
      var ie = R.read_shift(2);
      if (ie == 14e3) {
        for (q[ie] = [0, ""], q[ie][0] = R.read_shift(2); R[R.l]; ) q[ie][1] += String.fromCharCode(R[R.l]), R.l++;
        R.l++;
      }
    }
    return q;
  }
  function Q(R, j) {
    var q = Wt(5 + R.length);
    q.write_shift(2, 14e3), q.write_shift(2, j);
    for (var K = 0; K < R.length; ++K) {
      var ie = R.charCodeAt(K);
      q[q.l++] = ie > 127 ? 95 : ie;
    }
    return q[q.l++] = 0, q;
  }
  var H = { 0: { n: "BOF", f: $t }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f: o }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: g }, 14: { n: "NUMBER", f: T }, 15: { n: "LABEL", f: v }, 16: { n: "FORMULA", f: _ }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: v }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: fe }, 222: { n: "SHEETNAMELP", f: J }, 65535: { n: "" } }, re = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: z }, 23: { n: "NUMBER17", f: w }, 24: { n: "NUMBER18", f: S }, 25: { n: "FORMULA19", f: B }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: we }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: U }, 38: { n: "??" }, 39: { n: "NUMBER27", f: ne }, 40: { n: "FORMULA28", f: ge }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: fe }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: ae }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } };
  return { sheet_to_wk1: i, book_to_wk3: s, to_workbook: a };
}();
function l8(e) {
  var a = {}, r = e.match(_r), i = 0, s = false;
  if (r) for (; i != r.length; ++i) {
    var c = Pe(r[i]);
    switch (c[0].replace(/\w*:/g, "")) {
      case "<condense":
        break;
      case "<extend":
        break;
      case "<shadow":
        if (!c.val) break;
      case "<shadow>":
      case "<shadow/>":
        a.shadow = 1;
        break;
      case "</shadow>":
        break;
      case "<charset":
        if (c.val == "1") break;
        a.cp = Yh[parseInt(c.val, 10)];
        break;
      case "<outline":
        if (!c.val) break;
      case "<outline>":
      case "<outline/>":
        a.outline = 1;
        break;
      case "</outline>":
        break;
      case "<rFont":
        a.name = c.val;
        break;
      case "<sz":
        a.sz = c.val;
        break;
      case "<strike":
        if (!c.val) break;
      case "<strike>":
      case "<strike/>":
        a.strike = 1;
        break;
      case "</strike>":
        break;
      case "<u":
        if (!c.val) break;
        switch (c.val) {
          case "double":
            a.uval = "double";
            break;
          case "singleAccounting":
            a.uval = "single-accounting";
            break;
          case "doubleAccounting":
            a.uval = "double-accounting";
            break;
        }
      case "<u>":
      case "<u/>":
        a.u = 1;
        break;
      case "</u>":
        break;
      case "<b":
        if (c.val == "0") break;
      case "<b>":
      case "<b/>":
        a.b = 1;
        break;
      case "</b>":
        break;
      case "<i":
        if (c.val == "0") break;
      case "<i>":
      case "<i/>":
        a.i = 1;
        break;
      case "</i>":
        break;
      case "<color":
        c.rgb && (a.color = c.rgb.slice(2, 8));
        break;
      case "<color>":
      case "<color/>":
      case "</color>":
        break;
      case "<family":
        a.family = c.val;
        break;
      case "<family>":
      case "<family/>":
      case "</family>":
        break;
      case "<vertAlign":
        a.valign = c.val;
        break;
      case "<vertAlign>":
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<scheme":
        break;
      case "<scheme>":
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = true;
        break;
      case "</ext>":
        s = false;
        break;
      default:
        if (c[0].charCodeAt(1) !== 47 && !s) throw new Error("Unrecognized rich format " + c[0]);
    }
  }
  return a;
}
var c8 = function() {
  var e = t0("t"), a = t0("rPr");
  function r(c) {
    var u = c.match(e);
    if (!u) return { t: "s", v: "" };
    var o = { t: "s", v: ot(u[1]) }, x = c.match(a);
    return x && (o.s = l8(x[1])), o;
  }
  var i = /<(?:\w+:)?r>/g, s = /<\/(?:\w+:)?r>/;
  return function(u) {
    return u.replace(i, "").split(s).map(r).filter(function(o) {
      return o.v;
    });
  };
}(), f8 = /* @__PURE__ */ function() {
  var a = /(\r\n|\n)/g;
  function r(s, c, u) {
    var o = [];
    s.u && o.push("text-decoration: underline;"), s.uval && o.push("text-underline-style:" + s.uval + ";"), s.sz && o.push("font-size:" + s.sz + "pt;"), s.outline && o.push("text-effect: outline;"), s.shadow && o.push("text-shadow: auto;"), c.push('<span style="' + o.join("") + '">'), s.b && (c.push("<b>"), u.push("</b>")), s.i && (c.push("<i>"), u.push("</i>")), s.strike && (c.push("<s>"), u.push("</s>"));
    var x = s.valign || "";
    return x == "superscript" || x == "super" ? x = "sup" : x == "subscript" && (x = "sub"), x != "" && (c.push("<" + x + ">"), u.push("</" + x + ">")), u.push("</span>"), s;
  }
  function i(s) {
    var c = [[], s.v, []];
    return s.v ? (s.s && r(s.s, c[0], c[2]), c[0].join("") + c[1].replace(a, "<br/>") + c[2].join("")) : "";
  }
  return function(c) {
    return c.map(i).join("");
  };
}(), u8 = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, o8 = /<(?:\w+:)?r>/, h8 = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function fd(e, a) {
  var r = a ? a.cellHTML : true, i = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (i.t = ot(bt(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), i.r = bt(e), r && (i.h = Jh(i.t))) : e.match(o8) && (i.r = bt(e), i.t = ot(bt((e.replace(h8, "").match(u8) || []).join("").replace(_r, ""))), r && (i.h = f8(c8(i.r)))), i) : { t: "" };
}
var d8 = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, x8 = /<(?:\w+:)?(?:si|sstItem)>/g, v8 = /<\/(?:\w+:)?(?:si|sstItem)>/;
function p8(e, a) {
  var r = [], i = "";
  if (!e) return r;
  var s = e.match(d8);
  if (s) {
    i = s[2].replace(x8, "").split(v8);
    for (var c = 0; c != i.length; ++c) {
      var u = fd(i[c].trim(), a);
      u != null && (r[r.length] = u);
    }
    s = Pe(s[1]), r.Count = s.count, r.Unique = s.uniqueCount;
  }
  return r;
}
function m8(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function g8(e, a) {
  var r = [], i = false;
  return cn(e, function(c, u, o) {
    switch (o) {
      case 159:
        r.Count = c[0], r.Unique = c[1];
        break;
      case 19:
        r.push(c);
        break;
      case 160:
        return true;
      case 35:
        i = true;
        break;
      case 36:
        i = false;
        break;
      default:
        if (u.T, !i || a.WTF) throw new Error("Unexpected record 0x" + o.toString(16));
    }
  }), r;
}
function yy(e) {
  for (var a = [], r = e.split(""), i = 0; i < r.length; ++i) a[i] = r[i].charCodeAt(0);
  return a;
}
function rn(e, a) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), a >= 4 && (e.l += a - 4), r;
}
function y8(e) {
  var a = {};
  return a.id = e.read_shift(0, "lpp4"), a.R = rn(e, 4), a.U = rn(e, 4), a.W = rn(e, 4), a;
}
function E8(e) {
  for (var a = e.read_shift(4), r = e.l + a - 4, i = {}, s = e.read_shift(4), c = []; s-- > 0; ) c.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (i.name = e.read_shift(0, "lpp4"), i.comps = c, e.l != r) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return i;
}
function _8(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(E8(e));
  return a;
}
function T8(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(e.read_shift(0, "lpp4"));
  return a;
}
function w8(e) {
  var a = {};
  return e.read_shift(4), e.l += 4, a.id = e.read_shift(0, "lpp4"), a.name = e.read_shift(0, "lpp4"), a.R = rn(e, 4), a.U = rn(e, 4), a.W = rn(e, 4), a;
}
function S8(e) {
  var a = w8(e);
  if (a.ename = e.read_shift(0, "8lpp4"), a.blksz = e.read_shift(4), a.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return a;
}
function Ey(e, a) {
  var r = e.l + a, i = {};
  i.Flags = e.read_shift(4) & 63, e.l += 4, i.AlgID = e.read_shift(4);
  var s = false;
  switch (i.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      s = i.Flags == 36;
      break;
    case 26625:
      s = i.Flags == 4;
      break;
    case 0:
      s = i.Flags == 16 || i.Flags == 4 || i.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + i.AlgID;
  }
  if (!s) throw new Error("Encryption Flags/AlgID mismatch");
  return i.AlgIDHash = e.read_shift(4), i.KeySize = e.read_shift(4), i.ProviderType = e.read_shift(4), e.l += 8, i.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, i;
}
function _y(e, a) {
  var r = {}, i = e.l + a;
  return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, i), e.l = i, r;
}
function A8(e) {
  var a = rn(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, k8(e)];
    case 3:
      return [a.Minor, C8()];
    case 4:
      return [a.Minor, b8(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function k8(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), i = Ey(e, r), s = _y(e, e.length - e.l);
  return { t: "Std", h: i, v: s };
}
function C8() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function b8(e) {
  var a = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"), i = {};
  return r.replace(_r, function(c) {
    var u = Pe(c);
    switch (Ba(u[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        a.forEach(function(o) {
          i[o] = u[o];
        });
        break;
      case "<dataIntegrity":
        i.encryptedHmacKey = u.encryptedHmacKey, i.encryptedHmacValue = u.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        i.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        i.uri = u.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        i.encs.push(u);
        break;
      default:
        throw u[0];
    }
  }), i;
}
function O8(e, a) {
  var r = {}, i = r.EncryptionVersionInfo = rn(e, 4);
  if (a -= 4, i.Minor != 2) throw new Error("unrecognized minor version code: " + i.Minor);
  if (i.Major > 4 || i.Major < 2) throw new Error("unrecognized major version code: " + i.Major);
  r.Flags = e.read_shift(4), a -= 4;
  var s = e.read_shift(4);
  return a -= 4, r.EncryptionHeader = Ey(e, s), a -= s, r.EncryptionVerifier = _y(e, a), r;
}
function R8(e) {
  var a = {}, r = a.EncryptionVersionInfo = rn(e, 4);
  if (r.Major != 1 || r.Minor != 1) throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return a.Salt = e.read_shift(16), a.EncryptedVerifier = e.read_shift(16), a.EncryptedVerifierHash = e.read_shift(16), a;
}
function D8(e) {
  var a = 0, r, i = yy(e), s = i.length + 1, c, u, o, x, d;
  for (r = Pn(s), r[0] = i.length, c = 1; c != s; ++c) r[c] = i[c - 1];
  for (c = s - 1; c >= 0; --c) u = r[c], o = (a & 16384) === 0 ? 0 : 1, x = a << 1 & 32767, d = o | x, a = d ^ u;
  return a ^ 52811;
}
var Ty = /* @__PURE__ */ function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], a = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], r = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], i = function(u) {
    return (u / 2 | u * 128) & 255;
  }, s = function(u, o) {
    return i(u ^ o);
  }, c = function(u) {
    for (var o = a[u.length - 1], x = 104, d = u.length - 1; d >= 0; --d) for (var v = u[d], m = 0; m != 7; ++m) v & 64 && (o ^= r[x]), v *= 2, --x;
    return o;
  };
  return function(u) {
    for (var o = yy(u), x = c(o), d = o.length, v = Pn(16), m = 0; m != 16; ++m) v[m] = 0;
    var g, y, T;
    for ((d & 1) === 1 && (g = x >> 8, v[d] = s(e[0], g), --d, g = x & 255, y = o[o.length - 1], v[d] = s(y, g)); d > 0; ) --d, g = x >> 8, v[d] = s(o[d], g), --d, g = x & 255, v[d] = s(o[d], g);
    for (d = 15, T = 15 - o.length; T > 0; ) g = x >> 8, v[d] = s(e[T], g), --d, --T, g = x & 255, v[d] = s(o[d], g), --d, --T;
    return v;
  };
}(), F8 = function(e, a, r, i, s) {
  s || (s = a), i || (i = Ty(e));
  var c, u;
  for (c = 0; c != a.length; ++c) u = a[c], u ^= i[r], u = (u >> 5 | u << 3) & 255, s[c] = u, ++r;
  return [s, r, i];
}, N8 = function(e) {
  var a = 0, r = Ty(e);
  return function(i) {
    var s = F8("", i, a, r);
    return a = s[1], s[0];
  };
};
function M8(e, a, r, i) {
  var s = { key: $t(e), verificationBytes: $t(e) };
  return r.password && (s.verifier = D8(r.password)), i.valid = s.verificationBytes === s.verifier, i.valid && (i.insitu = N8(r.password)), s;
}
function L8(e, a, r) {
  var i = r || {};
  return i.Info = e.read_shift(2), e.l -= 2, i.Info === 1 ? i.Data = R8(e) : i.Data = O8(e, a), i;
}
function B8(e, a, r) {
  var i = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return i.Type ? L8(e, a - 2, i) : M8(e, r.biff >= 8 ? a : a - 2, r, i), i;
}
var U8 = /* @__PURE__ */ function() {
  function e(s, c) {
    switch (c.type) {
      case "base64":
        return a($r(s), c);
      case "binary":
        return a(s, c);
      case "buffer":
        return a(lt && Buffer.isBuffer(s) ? s.toString("binary") : ki(s), c);
      case "array":
        return a(wi(s), c);
    }
    throw new Error("Unrecognized type " + c.type);
  }
  function a(s, c) {
    var u = c || {}, o = u.dense ? [] : {}, x = s.match(/\\trowd.*?\\row\b/g);
    if (!x.length) throw new Error("RTF missing table");
    var d = { s: { c: 0, r: 0 }, e: { c: 0, r: x.length - 1 } };
    return x.forEach(function(v, m) {
      Array.isArray(o) && (o[m] = []);
      for (var g = /\\\w+\b/g, y = 0, T, E = -1; T = g.exec(v); ) {
        switch (T[0]) {
          case "\\cell":
            var _ = v.slice(y, g.lastIndex - T[0].length);
            if (_[0] == " " && (_ = _.slice(1)), ++E, _.length) {
              var O = { v: _, t: "s" };
              Array.isArray(o) ? o[m][E] = O : o[Ye({ r: m, c: E })] = O;
            }
            break;
        }
        y = g.lastIndex;
      }
      E > d.e.c && (d.e.c = E);
    }), o["!ref"] = ut(d), o;
  }
  function r(s, c) {
    return Xn(e(s, c), c);
  }
  function i(s) {
    for (var c = ["{\\rtf1\\ansi"], u = Ut(s["!ref"]), o, x = Array.isArray(s), d = u.s.r; d <= u.e.r; ++d) {
      c.push("\\trowd\\trautofit1");
      for (var v = u.s.c; v <= u.e.c; ++v) c.push("\\cellx" + (v + 1));
      for (c.push("\\pard\\intbl"), v = u.s.c; v <= u.e.c; ++v) {
        var m = Ye({ r: d, c: v });
        o = x ? (s[d] || [])[v] : s[m], !(!o || o.v == null && (!o.f || o.F)) && (c.push(" " + (o.w || (sn(o), o.w))), c.push("\\cell"));
      }
      c.push("\\pard\\intbl\\row");
    }
    return c.join("") + "}";
  }
  return { to_workbook: r, to_sheet: e, from_sheet: i };
}();
function I8(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
}
function n0(e) {
  for (var a = 0, r = 1; a != 3; ++a) r = r * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return r.toString(16).toUpperCase().slice(1);
}
function H8(e) {
  var a = e[0] / 255, r = e[1] / 255, i = e[2] / 255, s = Math.max(a, r, i), c = Math.min(a, r, i), u = s - c;
  if (u === 0) return [0, 0, a];
  var o = 0, x = 0, d = s + c;
  switch (x = u / (d > 1 ? 2 - d : d), s) {
    case a:
      o = ((r - i) / u + 6) % 6;
      break;
    case r:
      o = (i - a) / u + 2;
      break;
    case i:
      o = (a - r) / u + 4;
      break;
  }
  return [o / 6, x, d / 2];
}
function j8(e) {
  var a = e[0], r = e[1], i = e[2], s = r * 2 * (i < 0.5 ? i : 1 - i), c = i - s / 2, u = [c, c, c], o = 6 * a, x;
  if (r !== 0) switch (o | 0) {
    case 0:
    case 6:
      x = s * o, u[0] += s, u[1] += x;
      break;
    case 1:
      x = s * (2 - o), u[0] += x, u[1] += s;
      break;
    case 2:
      x = s * (o - 2), u[1] += s, u[2] += x;
      break;
    case 3:
      x = s * (4 - o), u[1] += x, u[2] += s;
      break;
    case 4:
      x = s * (o - 4), u[2] += s, u[0] += x;
      break;
    case 5:
      x = s * (6 - o), u[2] += x, u[0] += s;
      break;
  }
  for (var d = 0; d != 3; ++d) u[d] = Math.round(u[d] * 255);
  return u;
}
function cf(e, a) {
  if (a === 0) return e;
  var r = H8(I8(e));
  return a < 0 ? r[2] = r[2] * (1 + a) : r[2] = 1 - (1 - r[2]) * (1 - a), n0(j8(r));
}
var wy = 6, z8 = 15, P8 = 1, Ar = wy;
function ff(e) {
  return Math.floor((e + Math.round(128 / Ar) / 256) * Ar);
}
function uf(e) {
  return Math.floor((e - 5) / Ar * 100 + 0.5) / 100;
}
function mh(e) {
  return Math.round((e * Ar + 5) / Ar * 256) / 256;
}
function qo(e) {
  return mh(uf(ff(e)));
}
function ud(e) {
  var a = Math.abs(e - qo(e)), r = Ar;
  if (a > 5e-3) for (Ar = P8; Ar < z8; ++Ar) Math.abs(e - qo(e)) <= a && (a = Math.abs(e - qo(e)), r = Ar);
  Ar = r;
}
function Cs(e) {
  e.width ? (e.wpx = ff(e.width), e.wch = uf(e.wpx), e.MDW = Ar) : e.wpx ? (e.wch = uf(e.wpx), e.width = mh(e.wch), e.MDW = Ar) : typeof e.wch == "number" && (e.width = mh(e.wch), e.wpx = ff(e.width), e.MDW = Ar), e.customWidth && delete e.customWidth;
}
var G8 = 96, Sy = G8;
function Ay(e) {
  return e * 96 / Sy;
}
function i0(e) {
  return e * Sy / 96;
}
var V8 = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function X8(e, a, r, i) {
  a.Borders = [];
  var s = {}, c = false;
  (e[0].match(_r) || []).forEach(function(u) {
    var o = Pe(u);
    switch (Ba(o[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        s = {}, o.diagonalUp && (s.diagonalUp = Ft(o.diagonalUp)), o.diagonalDown && (s.diagonalDown = Ft(o.diagonalDown)), a.Borders.push(s);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        c = true;
        break;
      case "</ext>":
        c = false;
        break;
      default:
        if (i && i.WTF && !c) throw new Error("unrecognized " + o[0] + " in borders");
    }
  });
}
function Y8(e, a, r, i) {
  a.Fills = [];
  var s = {}, c = false;
  (e[0].match(_r) || []).forEach(function(u) {
    var o = Pe(u);
    switch (Ba(o[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        s = {}, a.Fills.push(s);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        a.Fills.push(s), s = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        o.patternType && (s.patternType = o.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        s.bgColor || (s.bgColor = {}), o.indexed && (s.bgColor.indexed = parseInt(o.indexed, 10)), o.theme && (s.bgColor.theme = parseInt(o.theme, 10)), o.tint && (s.bgColor.tint = parseFloat(o.tint)), o.rgb && (s.bgColor.rgb = o.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        s.fgColor || (s.fgColor = {}), o.theme && (s.fgColor.theme = parseInt(o.theme, 10)), o.tint && (s.fgColor.tint = parseFloat(o.tint)), o.rgb != null && (s.fgColor.rgb = o.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        c = true;
        break;
      case "</ext>":
        c = false;
        break;
      default:
        if (i && i.WTF && !c) throw new Error("unrecognized " + o[0] + " in fills");
    }
  });
}
function $8(e, a, r, i) {
  a.Fonts = [];
  var s = {}, c = false;
  (e[0].match(_r) || []).forEach(function(u) {
    var o = Pe(u);
    switch (Ba(o[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        a.Fonts.push(s), s = {};
        break;
      case "<name":
        o.val && (s.name = bt(o.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        s.bold = o.val ? Ft(o.val) : 1;
        break;
      case "<b/>":
        s.bold = 1;
        break;
      case "<i":
        s.italic = o.val ? Ft(o.val) : 1;
        break;
      case "<i/>":
        s.italic = 1;
        break;
      case "<u":
        switch (o.val) {
          case "none":
            s.underline = 0;
            break;
          case "single":
            s.underline = 1;
            break;
          case "double":
            s.underline = 2;
            break;
          case "singleAccounting":
            s.underline = 33;
            break;
          case "doubleAccounting":
            s.underline = 34;
            break;
        }
        break;
      case "<u/>":
        s.underline = 1;
        break;
      case "<strike":
        s.strike = o.val ? Ft(o.val) : 1;
        break;
      case "<strike/>":
        s.strike = 1;
        break;
      case "<outline":
        s.outline = o.val ? Ft(o.val) : 1;
        break;
      case "<outline/>":
        s.outline = 1;
        break;
      case "<shadow":
        s.shadow = o.val ? Ft(o.val) : 1;
        break;
      case "<shadow/>":
        s.shadow = 1;
        break;
      case "<condense":
        s.condense = o.val ? Ft(o.val) : 1;
        break;
      case "<condense/>":
        s.condense = 1;
        break;
      case "<extend":
        s.extend = o.val ? Ft(o.val) : 1;
        break;
      case "<extend/>":
        s.extend = 1;
        break;
      case "<sz":
        o.val && (s.sz = +o.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        o.val && (s.vertAlign = o.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        o.val && (s.family = parseInt(o.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        o.val && (s.scheme = o.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (o.val == "1") break;
        o.codepage = Yh[parseInt(o.val, 10)];
        break;
      case "<color":
        if (s.color || (s.color = {}), o.auto && (s.color.auto = Ft(o.auto)), o.rgb) s.color.rgb = o.rgb.slice(-6);
        else if (o.indexed) {
          s.color.index = parseInt(o.indexed, 10);
          var x = Ei[s.color.index];
          s.color.index == 81 && (x = Ei[1]), x || (x = Ei[1]), s.color.rgb = x[0].toString(16) + x[1].toString(16) + x[2].toString(16);
        } else o.theme && (s.color.theme = parseInt(o.theme, 10), o.tint && (s.color.tint = parseFloat(o.tint)), o.theme && r.themeElements && r.themeElements.clrScheme && (s.color.rgb = cf(r.themeElements.clrScheme[s.color.theme].rgb, s.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        c = true;
        break;
      case "</AlternateContent>":
        c = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        c = true;
        break;
      case "</ext>":
        c = false;
        break;
      default:
        if (i && i.WTF && !c) throw new Error("unrecognized " + o[0] + " in fonts");
    }
  });
}
function q8(e, a, r) {
  a.NumberFmt = [];
  for (var i = La(We), s = 0; s < i.length; ++s) a.NumberFmt[i[s]] = We[i[s]];
  var c = e[0].match(_r);
  if (c) for (s = 0; s < c.length; ++s) {
    var u = Pe(c[s]);
    switch (Ba(u[0])) {
      case "<numFmts":
      case "</numFmts>":
      case "<numFmts/>":
      case "<numFmts>":
        break;
      case "<numFmt":
        {
          var o = ot(bt(u.formatCode)), x = parseInt(u.numFmtId, 10);
          if (a.NumberFmt[x] = o, x > 0) {
            if (x > 392) {
              for (x = 392; x > 60 && a.NumberFmt[x] != null; --x) ;
              a.NumberFmt[x] = o;
            }
            yi(o, x);
          }
        }
        break;
      case "</numFmt>":
        break;
      default:
        if (r.WTF) throw new Error("unrecognized " + u[0] + " in numFmts");
    }
  }
}
var zc = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], Pc = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function K8(e, a, r) {
  a.CellXf = [];
  var i, s = false;
  (e[0].match(_r) || []).forEach(function(c) {
    var u = Pe(c), o = 0;
    switch (Ba(u[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (i = u, delete i[0], o = 0; o < zc.length; ++o) i[zc[o]] && (i[zc[o]] = parseInt(i[zc[o]], 10));
        for (o = 0; o < Pc.length; ++o) i[Pc[o]] && (i[Pc[o]] = Ft(i[Pc[o]]));
        if (a.NumberFmt && i.numFmtId > 392) {
          for (o = 392; o > 60; --o) if (a.NumberFmt[i.numFmtId] == a.NumberFmt[o]) {
            i.numFmtId = o;
            break;
          }
        }
        a.CellXf.push(i);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var x = {};
        u.vertical && (x.vertical = u.vertical), u.horizontal && (x.horizontal = u.horizontal), u.textRotation != null && (x.textRotation = u.textRotation), u.indent && (x.indent = u.indent), u.wrapText && (x.wrapText = Ft(u.wrapText)), i.alignment = x;
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        s = true;
        break;
      case "</AlternateContent>":
        s = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = true;
        break;
      case "</ext>":
        s = false;
        break;
      default:
        if (r && r.WTF && !s) throw new Error("unrecognized " + u[0] + " in cellXfs");
    }
  });
}
var W8 = /* @__PURE__ */ function() {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, i = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, s = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, c = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(o, x, d) {
    var v = {};
    if (!o) return v;
    o = o.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var m;
    return (m = o.match(a)) && q8(m, v, d), (m = o.match(s)) && $8(m, v, x, d), (m = o.match(i)) && Y8(m, v, x, d), (m = o.match(c)) && X8(m, v, x, d), (m = o.match(r)) && K8(m, v, d), v;
  };
}();
function Z8(e, a) {
  var r = e.read_shift(2), i = yr(e);
  return [r, i];
}
function Q8(e, a, r) {
  var i = {};
  i.sz = e.read_shift(2) / 20;
  var s = cA(e);
  s.fItalic && (i.italic = 1), s.fCondense && (i.condense = 1), s.fExtend && (i.extend = 1), s.fShadow && (i.shadow = 1), s.fOutline && (i.outline = 1), s.fStrikeout && (i.strike = 1);
  var c = e.read_shift(2);
  switch (c === 700 && (i.bold = 1), e.read_shift(2)) {
    case 1:
      i.vertAlign = "superscript";
      break;
    case 2:
      i.vertAlign = "subscript";
      break;
  }
  var u = e.read_shift(1);
  u != 0 && (i.underline = u);
  var o = e.read_shift(1);
  o > 0 && (i.family = o);
  var x = e.read_shift(1);
  switch (x > 0 && (i.charset = x), e.l++, i.color = lA(e), e.read_shift(1)) {
    case 1:
      i.scheme = "major";
      break;
    case 2:
      i.scheme = "minor";
      break;
  }
  return i.name = yr(e), i;
}
var J8 = Er;
function eC(e, a) {
  var r = e.l + a, i = e.read_shift(2), s = e.read_shift(2);
  return e.l = r, { ixfe: i, numFmtId: s };
}
var tC = Er;
function rC(e, a, r) {
  var i = {};
  i.NumberFmt = [];
  for (var s in We) i.NumberFmt[s] = We[s];
  i.CellXf = [], i.Fonts = [];
  var c = [], u = false;
  return cn(e, function(x, d, v) {
    switch (v) {
      case 44:
        i.NumberFmt[x[0]] = x[1], yi(x[1], x[0]);
        break;
      case 43:
        i.Fonts.push(x), x.color.theme != null && a && a.themeElements && a.themeElements.clrScheme && (x.color.rgb = cf(a.themeElements.clrScheme[x.color.theme].rgb, x.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        c[c.length - 1] == 617 && i.CellXf.push(x);
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        u = true;
        break;
      case 36:
        u = false;
        break;
      case 37:
        c.push(v), u = true;
        break;
      case 38:
        c.pop(), u = false;
        break;
      default:
        if (d.T > 0) c.push(v);
        else if (d.T < 0) c.pop();
        else if (!u || r.WTF && c[c.length - 1] != 37) throw new Error("Unexpected record 0x" + v.toString(16));
    }
  }), i;
}
var aC = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function nC(e, a, r) {
  a.themeElements.clrScheme = [];
  var i = {};
  (e[0].match(_r) || []).forEach(function(s) {
    var c = Pe(s);
    switch (c[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        i.rgb = c.val;
        break;
      case "<a:sysClr":
        i.rgb = c.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        c[0].charAt(1) === "/" ? (a.themeElements.clrScheme[aC.indexOf(c[0])] = i, i = {}) : i.name = c[0].slice(3, c[0].length - 1);
        break;
      default:
        if (r && r.WTF) throw new Error("Unrecognized " + c[0] + " in clrScheme");
    }
  });
}
function iC() {
}
function sC() {
}
var lC = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, cC = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, fC = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function uC(e, a, r) {
  a.themeElements = {};
  var i;
  [["clrScheme", lC, nC], ["fontScheme", cC, iC], ["fmtScheme", fC, sC]].forEach(function(s) {
    if (!(i = e.match(s[1]))) throw new Error(s[0] + " not found in themeElements");
    s[2](i, a, r);
  });
}
var oC = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function ky(e, a) {
  (!e || e.length === 0) && (e = hC());
  var r, i = {};
  if (!(r = e.match(oC))) throw new Error("themeElements not found in theme");
  return uC(r[0], i, a), i.raw = e, i;
}
function hC(e, a) {
  var r = [U2];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function dC(e, a, r) {
  var i = e.l + a, s = e.read_shift(4);
  if (s !== 124226) {
    if (!r.cellStyles) {
      e.l = i;
      return;
    }
    var c = e.slice(e.l);
    e.l = i;
    var u;
    try {
      u = B2(c, { type: "array" });
    } catch {
      return;
    }
    var o = Xr(u, "theme/theme/theme1.xml", true);
    if (o) return ky(o, r);
  }
}
function xC(e) {
  return e.read_shift(4);
}
function vC(e) {
  var a = {};
  switch (a.xclrType = e.read_shift(2), a.nTintShade = e.read_shift(2), a.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = pC(e, 4);
      break;
    case 2:
      a.xclrValue = hy(e);
      break;
    case 3:
      a.xclrValue = xC(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, a;
}
function pC(e, a) {
  return Er(e, a);
}
function mC(e, a) {
  return Er(e, a);
}
function gC(e) {
  var a = e.read_shift(2), r = e.read_shift(2) - 4, i = [a];
  switch (a) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      i[1] = vC(e);
      break;
    case 6:
      i[1] = mC(e, r);
      break;
    case 14:
    case 15:
      i[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + a + " " + r);
  }
  return i;
}
function yC(e, a) {
  var r = e.l + a;
  e.l += 2;
  var i = e.read_shift(2);
  e.l += 2;
  for (var s = e.read_shift(2), c = []; s-- > 0; ) c.push(gC(e, r - e.l));
  return { ixfe: i, ext: c };
}
function EC(e, a) {
  a.forEach(function(r) {
    r[0];
  });
}
function _C(e, a) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: yr(e) };
}
function TC(e) {
  for (var a = [], r = e.read_shift(4); r-- > 0; ) a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function wC(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function SC(e, a, r) {
  var i = { Types: [], Cell: [], Value: [] }, s = r || {}, c = [], u = false, o = 2;
  return cn(e, function(x, d, v) {
    switch (v) {
      case 335:
        i.Types.push({ name: x.name });
        break;
      case 51:
        x.forEach(function(m) {
          o == 1 ? i.Cell.push({ type: i.Types[m[0] - 1].name, index: m[1] }) : o == 0 && i.Value.push({ type: i.Types[m[0] - 1].name, index: m[1] });
        });
        break;
      case 337:
        o = x ? 1 : 0;
        break;
      case 338:
        o = 2;
        break;
      case 35:
        c.push(v), u = true;
        break;
      case 36:
        c.pop(), u = false;
        break;
      default:
        if (!d.T) {
          if (!u || s.WTF && c[c.length - 1] != 35) throw new Error("Unexpected record 0x" + v.toString(16));
        }
    }
  }), i;
}
function AC(e, a, r) {
  var i = { Types: [], Cell: [], Value: [] };
  if (!e) return i;
  var s = false, c = 2, u;
  return e.replace(_r, function(o) {
    var x = Pe(o);
    switch (Ba(x[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        i.Types.push({ name: x.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var d = 0; d < i.Types.length; ++d) i.Types[d].name == x.name && (u = i.Types[d]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        c == 1 ? i.Cell.push({ type: i.Types[x.t - 1].name, index: +x.v }) : c == 0 && i.Value.push({ type: i.Types[x.t - 1].name, index: +x.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        c = 1;
        break;
      case "</cellMetadata>":
        c = 2;
        break;
      case "<valueMetadata":
        c = 0;
        break;
      case "</valueMetadata>":
        c = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        s = true;
        break;
      case "</ext>":
        s = false;
        break;
      case "<rvb":
        if (!u) break;
        u.offsets || (u.offsets = []), u.offsets.push(+x.i);
        break;
      default:
        if (!s && r.WTF) throw new Error("unrecognized " + x[0] + " in metadata");
    }
    return o;
  }), i;
}
function kC(e) {
  var a = [];
  if (!e) return a;
  var r = 1;
  return (e.match(_r) || []).forEach(function(i) {
    var s = Pe(i);
    switch (s[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete s[0], s.i ? r = s.i : s.i = r, a.push(s);
        break;
    }
  }), a;
}
function CC(e) {
  var a = {};
  a.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), a.r = Ye(r);
  var i = e.read_shift(1);
  return i & 2 && (a.l = "1"), i & 8 && (a.a = "1"), a;
}
function bC(e, a, r) {
  var i = [];
  return cn(e, function(c, u, o) {
    switch (o) {
      case 63:
        i.push(c);
        break;
      default:
        if (!u.T) throw new Error("Unexpected record 0x" + o.toString(16));
    }
  }), i;
}
function OC(e, a, r, i) {
  if (!e) return e;
  var s = i || {}, c = false;
  cn(e, function(o, x, d) {
    switch (d) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        c = true;
        break;
      case 36:
        c = false;
        break;
      default:
        if (!x.T) {
          if (!c || s.WTF) throw new Error("Unexpected record 0x" + d.toString(16));
        }
    }
  }, s);
}
function RC(e, a) {
  if (!e) return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return a["!id"][r].Target;
}
function bm(e, a, r, i) {
  var s = Array.isArray(e), c;
  a.forEach(function(u) {
    var o = kr(u.ref);
    if (s ? (e[o.r] || (e[o.r] = []), c = e[o.r][o.c]) : c = e[u.ref], !c) {
      c = { t: "z" }, s ? e[o.r][o.c] = c : e[u.ref] = c;
      var x = Ut(e["!ref"] || "BDWGO1000001:A1");
      x.s.r > o.r && (x.s.r = o.r), x.e.r < o.r && (x.e.r = o.r), x.s.c > o.c && (x.s.c = o.c), x.e.c < o.c && (x.e.c = o.c);
      var d = ut(x);
      d !== e["!ref"] && (e["!ref"] = d);
    }
    c.c || (c.c = []);
    var v = { a: u.author, t: u.t, r: u.r, T: r };
    u.h && (v.h = u.h);
    for (var m = c.c.length - 1; m >= 0; --m) {
      if (!r && c.c[m].T) return;
      r && !c.c[m].T && c.c.splice(m, 1);
    }
    if (r && i) {
      for (m = 0; m < i.length; ++m) if (v.a == i[m].id) {
        v.a = i[m].name || v.a;
        break;
      }
    }
    c.c.push(v);
  });
}
function DC(e, a) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var r = [], i = [], s = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  s && s[1] && s[1].split(/<\/\w*:?author>/).forEach(function(u) {
    if (!(u === "" || u.trim() === "")) {
      var o = u.match(/<(?:\w+:)?author[^>]*>(.*)/);
      o && r.push(o[1]);
    }
  });
  var c = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return c && c[1] && c[1].split(/<\/\w*:?comment>/).forEach(function(u) {
    if (!(u === "" || u.trim() === "")) {
      var o = u.match(/<(?:\w+:)?comment[^>]*>/);
      if (o) {
        var x = Pe(o[0]), d = { author: x.authorId && r[x.authorId] || "sheetjsghost", ref: x.ref, guid: x.guid }, v = kr(x.ref);
        if (!(a.sheetRows && a.sheetRows <= v.r)) {
          var m = u.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/), g = !!m && !!m[1] && fd(m[1]) || { r: "", t: "", h: "" };
          d.r = g.r, g.r == "<t></t>" && (g.t = g.h = ""), d.t = (g.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), a.cellHTML && (d.h = g.h), i.push(d);
        }
      }
    }
  }), i;
}
function FC(e, a) {
  var r = [], i = false, s = {}, c = 0;
  return e.replace(_r, function(o, x) {
    var d = Pe(o);
    switch (Ba(d[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        s = { author: d.personId, guid: d.id, ref: d.ref, T: 1 };
        break;
      case "</threadedComment>":
        s.t != null && r.push(s);
        break;
      case "<text>":
      case "<text":
        c = x + o.length;
        break;
      case "</text>":
        s.t = e.slice(c, x).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      case "<mentions":
      case "<mentions>":
        i = true;
        break;
      case "</mentions>":
        i = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        i = true;
        break;
      case "</ext>":
        i = false;
        break;
      default:
        if (!i && a.WTF) throw new Error("unrecognized " + d[0] + " in threaded comments");
    }
    return o;
  }), r;
}
function NC(e, a) {
  var r = [], i = false;
  return e.replace(_r, function(c) {
    var u = Pe(c);
    switch (Ba(u[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        r.push({ name: u.displayname, id: u.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        i = true;
        break;
      case "</ext>":
        i = false;
        break;
      default:
        if (!i && a.WTF) throw new Error("unrecognized " + u[0] + " in threaded comments");
    }
    return c;
  }), r;
}
function MC(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var r = bi(e);
  return a.rfx = r.s, a.ref = Ye(r.s), e.l += 16, a;
}
var LC = yr;
function BC(e, a) {
  var r = [], i = [], s = {}, c = false;
  return cn(e, function(o, x, d) {
    switch (d) {
      case 632:
        i.push(o);
        break;
      case 635:
        s = o;
        break;
      case 637:
        s.t = o.t, s.h = o.h, s.r = o.r;
        break;
      case 636:
        if (s.author = i[s.iauthor], delete s.iauthor, a.sheetRows && s.rfx && a.sheetRows <= s.rfx.r) break;
        s.t || (s.t = ""), delete s.rfx, r.push(s);
        break;
      case 3072:
        break;
      case 35:
        c = true;
        break;
      case 36:
        c = false;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!x.T) {
          if (!c || a.WTF) throw new Error("Unexpected record 0x" + d.toString(16));
        }
    }
  }), r;
}
var UC = "application/vnd.ms-office.vbaProject";
function IC(e) {
  var a = ft.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, i) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var s = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      ft.utils.cfb_add(a, s, e.FileIndex[i].content);
    }
  }), ft.write(a);
}
function HC() {
  return { "!type": "dialog" };
}
function jC() {
  return { "!type": "dialog" };
}
function zC() {
  return { "!type": "macro" };
}
function PC() {
  return { "!type": "macro" };
}
var ys = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, a = { r: 0, c: 0 };
  function r(i, s, c, u) {
    var o = false, x = false;
    c.length == 0 ? x = true : c.charAt(0) == "[" && (x = true, c = c.slice(1, -1)), u.length == 0 ? o = true : u.charAt(0) == "[" && (o = true, u = u.slice(1, -1));
    var d = c.length > 0 ? parseInt(c, 10) | 0 : 0, v = u.length > 0 ? parseInt(u, 10) | 0 : 0;
    return o ? v += a.c : --v, x ? d += a.r : --d, s + (o ? "" : "$") + Zt(v) + (x ? "" : "$") + hr(d);
  }
  return function(s, c) {
    return a = c, s.replace(e, r);
  };
}(), Cy = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, GC = /* @__PURE__ */ function() {
  return function(a, r) {
    return a.replace(Cy, function(i, s, c, u, o, x) {
      var d = ad(u) - (c ? 0 : r.c), v = rd(x) - (o ? 0 : r.r), m = v == 0 ? "" : o ? v + 1 : "[" + v + "]", g = d == 0 ? "" : c ? d + 1 : "[" + d + "]";
      return s + "R" + m + "C" + g;
    });
  };
}();
function by(e, a) {
  return e.replace(Cy, function(r, i, s, c, u, o) {
    return i + (s == "$" ? s + c : Zt(ad(c) + a.c)) + (u == "$" ? u + o : hr(rd(o) + a.r));
  });
}
function VC(e, a, r) {
  var i = Ds(a), s = i.s, c = kr(r), u = { r: c.r - s.r, c: c.c - s.c };
  return by(e, u);
}
function XC(e) {
  return e.length != 1;
}
function Om(e) {
  return e.replace(/_xlfn\./g, "");
}
function Xt(e) {
  e.l += 1;
}
function Gn(e, a) {
  var r = e.read_shift(2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function Oy(e, a, r) {
  var i = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return Ry(e);
    r.biff == 12 && (i = 4);
  }
  var s = e.read_shift(i), c = e.read_shift(i), u = Gn(e), o = Gn(e);
  return { s: { r: s, c: u[0], cRel: u[1], rRel: u[2] }, e: { r: c, c: o[0], cRel: o[1], rRel: o[2] } };
}
function Ry(e) {
  var a = Gn(e), r = Gn(e), i = e.read_shift(1), s = e.read_shift(1);
  return { s: { r: a[0], c: i, cRel: a[1], rRel: a[2] }, e: { r: r[0], c: s, cRel: r[1], rRel: r[2] } };
}
function YC(e, a, r) {
  if (r.biff < 8) return Ry(e);
  var i = e.read_shift(r.biff == 12 ? 4 : 2), s = e.read_shift(r.biff == 12 ? 4 : 2), c = Gn(e), u = Gn(e);
  return { s: { r: i, c: c[0], cRel: c[1], rRel: c[2] }, e: { r: s, c: u[0], cRel: u[1], rRel: u[2] } };
}
function Dy(e, a, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return $C(e);
  var i = e.read_shift(r && r.biff == 12 ? 4 : 2), s = Gn(e);
  return { r: i, c: s[0], cRel: s[1], rRel: s[2] };
}
function $C(e) {
  var a = Gn(e), r = e.read_shift(1);
  return { r: a[0], c: r, cRel: a[1], rRel: a[2] };
}
function qC(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return { r: a, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function KC(e, a, r) {
  var i = r && r.biff ? r.biff : 8;
  if (i >= 2 && i <= 5) return WC(e);
  var s = e.read_shift(i >= 12 ? 4 : 2), c = e.read_shift(2), u = (c & 16384) >> 14, o = (c & 32768) >> 15;
  if (c &= 16383, o == 1) for (; s > 524287; ) s -= 1048576;
  if (u == 1) for (; c > 8191; ) c = c - 16384;
  return { r: s, c, cRel: u, rRel: o };
}
function WC(e) {
  var a = e.read_shift(2), r = e.read_shift(1), i = (a & 32768) >> 15, s = (a & 16384) >> 14;
  return a &= 16383, i == 1 && a >= 8192 && (a = a - 16384), s == 1 && r >= 128 && (r = r - 256), { r: a, c: r, cRel: s, rRel: i };
}
function ZC(e, a, r) {
  var i = (e[e.l++] & 96) >> 5, s = Oy(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [i, s];
}
function QC(e, a, r) {
  var i = (e[e.l++] & 96) >> 5, s = e.read_shift(2, "i"), c = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, c = 6;
      break;
    case 12:
      c = 12;
      break;
  }
  var u = Oy(e, c, r);
  return [i, s, u];
}
function JC(e, a, r) {
  var i = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [i];
}
function e6(e, a, r) {
  var i = (e[e.l++] & 96) >> 5, s = e.read_shift(2), c = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, c = 6;
      break;
    case 12:
      c = 12;
      break;
  }
  return e.l += c, [i, s];
}
function t6(e, a, r) {
  var i = (e[e.l++] & 96) >> 5, s = YC(e, a - 1, r);
  return [i, s];
}
function r6(e, a, r) {
  var i = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [i];
}
function Rm(e) {
  var a = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [a, r];
}
function a6(e, a, r) {
  e.l += 2;
  for (var i = e.read_shift(r && r.biff == 2 ? 1 : 2), s = [], c = 0; c <= i; ++c) s.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return s;
}
function n6(e, a, r) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [i, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function i6(e, a, r) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [i, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function s6(e) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(2)];
}
function l6(e, a, r) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [i];
}
function Fy(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return [a, r];
}
function c6(e) {
  return e.read_shift(2), Fy(e);
}
function f6(e) {
  return e.read_shift(2), Fy(e);
}
function u6(e, a, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var s = Dy(e, 0, r);
  return [i, s];
}
function o6(e, a, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var s = KC(e, 0, r);
  return [i, s];
}
function h6(e, a, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var s = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var c = Dy(e, 0, r);
  return [i, s, c];
}
function d6(e, a, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var s = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [xb[s], Ly[s], i];
}
function x6(e, a, r) {
  var i = e[e.l++], s = e.read_shift(1), c = r && r.biff <= 3 ? [i == 88 ? -1 : 0, e.read_shift(1)] : v6(e);
  return [s, (c[0] === 0 ? Ly : db)[c[1]]];
}
function v6(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function p6(e, a, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function m6(e, a, r) {
  if (e.l++, r && r.biff == 12) return [e.read_shift(4, "i"), 0];
  var i = e.read_shift(2), s = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [i, s];
}
function g6(e) {
  return e.l++, Oi[e.read_shift(1)];
}
function y6(e) {
  return e.l++, e.read_shift(2);
}
function E6(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function _6(e) {
  return e.l++, mr(e);
}
function T6(e, a, r) {
  return e.l++, v0(e, a - 1, r);
}
function w6(e, a) {
  var r = [e.read_shift(1)];
  if (a == 12) switch (r[0]) {
    case 2:
      r[0] = 4;
      break;
    case 4:
      r[0] = 16;
      break;
    case 0:
      r[0] = 1;
      break;
    case 1:
      r[0] = 2;
      break;
  }
  switch (r[0]) {
    case 4:
      r[1] = zt(e, 1) ? "TRUE" : "FALSE", a != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = Oi[e[e.l]], e.l += a == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = mr(e);
      break;
    case 2:
      r[1] = Ri(e, 0, { biff: a > 0 && a < 8 ? 2 : a });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function S6(e, a, r) {
  for (var i = e.read_shift(r.biff == 12 ? 4 : 2), s = [], c = 0; c != i; ++c) s.push((r.biff == 12 ? bi : gf)(e));
  return s;
}
function A6(e, a, r) {
  var i = 0, s = 0;
  r.biff == 12 ? (i = e.read_shift(4), s = e.read_shift(4)) : (s = 1 + e.read_shift(1), i = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--i, --s == 0 && (s = 256));
  for (var c = 0, u = []; c != i && (u[c] = []); ++c) for (var o = 0; o != s; ++o) u[c][o] = w6(e, r.biff);
  return u;
}
function k6(e, a, r) {
  var i = e.read_shift(1) >>> 5 & 3, s = !r || r.biff >= 8 ? 4 : 2, c = e.read_shift(s);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [i, 0, c];
}
function C6(e, a, r) {
  if (r.biff == 5) return b6(e);
  var i = e.read_shift(1) >>> 5 & 3, s = e.read_shift(2), c = e.read_shift(4);
  return [i, s, c];
}
function b6(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var i = e.read_shift(2);
  return e.l += 12, [a, r, i];
}
function O6(e, a, r) {
  var i = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var s = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [i, s];
}
function R6(e, a, r) {
  var i = e.read_shift(1) >>> 5 & 3, s = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [i, s];
}
function D6(e, a, r) {
  var i = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [i];
}
function F6(e, a, r) {
  var i = (e[e.l++] & 96) >> 5, s = e.read_shift(2), c = 4;
  if (r) switch (r.biff) {
    case 5:
      c = 15;
      break;
    case 12:
      c = 6;
      break;
  }
  return e.l += c, [i, s];
}
var N6 = Er, M6 = Er, L6 = Er;
function m0(e, a, r) {
  return e.l += 2, [qC(e)];
}
function od(e) {
  return e.l += 6, [];
}
var B6 = m0, U6 = od, I6 = od, H6 = m0;
function Ny(e) {
  return e.l += 2, [$t(e), e.read_shift(2) & 1];
}
var j6 = m0, z6 = Ny, P6 = od, G6 = m0, V6 = m0, X6 = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function Y6(e) {
  e.l += 2;
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(4), s = e.read_shift(2), c = e.read_shift(2), u = X6[r >> 2 & 31];
  return { ixti: a, coltype: r & 3, rt: u, idx: i, c: s, C: c };
}
function $6(e) {
  return e.l += 2, [e.read_shift(4)];
}
function q6(e, a, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function K6(e, a, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function W6(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function Z6(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function Q6(e) {
  return e.l += 4, [0, 0];
}
var Dm = { 1: { n: "PtgExp", f: m6 }, 2: { n: "PtgTbl", f: L6 }, 3: { n: "PtgAdd", f: Xt }, 4: { n: "PtgSub", f: Xt }, 5: { n: "PtgMul", f: Xt }, 6: { n: "PtgDiv", f: Xt }, 7: { n: "PtgPower", f: Xt }, 8: { n: "PtgConcat", f: Xt }, 9: { n: "PtgLt", f: Xt }, 10: { n: "PtgLe", f: Xt }, 11: { n: "PtgEq", f: Xt }, 12: { n: "PtgGe", f: Xt }, 13: { n: "PtgGt", f: Xt }, 14: { n: "PtgNe", f: Xt }, 15: { n: "PtgIsect", f: Xt }, 16: { n: "PtgUnion", f: Xt }, 17: { n: "PtgRange", f: Xt }, 18: { n: "PtgUplus", f: Xt }, 19: { n: "PtgUminus", f: Xt }, 20: { n: "PtgPercent", f: Xt }, 21: { n: "PtgParen", f: Xt }, 22: { n: "PtgMissArg", f: Xt }, 23: { n: "PtgStr", f: T6 }, 26: { n: "PtgSheet", f: q6 }, 27: { n: "PtgEndSheet", f: K6 }, 28: { n: "PtgErr", f: g6 }, 29: { n: "PtgBool", f: E6 }, 30: { n: "PtgInt", f: y6 }, 31: { n: "PtgNum", f: _6 }, 32: { n: "PtgArray", f: r6 }, 33: { n: "PtgFunc", f: d6 }, 34: { n: "PtgFuncVar", f: x6 }, 35: { n: "PtgName", f: k6 }, 36: { n: "PtgRef", f: u6 }, 37: { n: "PtgArea", f: ZC }, 38: { n: "PtgMemArea", f: O6 }, 39: { n: "PtgMemErr", f: N6 }, 40: { n: "PtgMemNoMem", f: M6 }, 41: { n: "PtgMemFunc", f: R6 }, 42: { n: "PtgRefErr", f: D6 }, 43: { n: "PtgAreaErr", f: JC }, 44: { n: "PtgRefN", f: o6 }, 45: { n: "PtgAreaN", f: t6 }, 46: { n: "PtgMemAreaN", f: W6 }, 47: { n: "PtgMemNoMemN", f: Z6 }, 57: { n: "PtgNameX", f: C6 }, 58: { n: "PtgRef3d", f: h6 }, 59: { n: "PtgArea3d", f: QC }, 60: { n: "PtgRefErr3d", f: F6 }, 61: { n: "PtgAreaErr3d", f: e6 }, 255: {} }, J6 = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 }, eb = { 1: { n: "PtgElfLel", f: Ny }, 2: { n: "PtgElfRw", f: G6 }, 3: { n: "PtgElfCol", f: B6 }, 6: { n: "PtgElfRwV", f: V6 }, 7: { n: "PtgElfColV", f: H6 }, 10: { n: "PtgElfRadical", f: j6 }, 11: { n: "PtgElfRadicalS", f: P6 }, 13: { n: "PtgElfColS", f: U6 }, 15: { n: "PtgElfColSV", f: I6 }, 16: { n: "PtgElfRadicalLel", f: z6 }, 25: { n: "PtgList", f: Y6 }, 29: { n: "PtgSxName", f: $6 }, 255: {} }, tb = { 0: { n: "PtgAttrNoop", f: Q6 }, 1: { n: "PtgAttrSemi", f: l6 }, 2: { n: "PtgAttrIf", f: i6 }, 4: { n: "PtgAttrChoose", f: a6 }, 8: { n: "PtgAttrGoto", f: n6 }, 16: { n: "PtgAttrSum", f: p6 }, 32: { n: "PtgAttrBaxcel", f: Rm }, 33: { n: "PtgAttrBaxcel", f: Rm }, 64: { n: "PtgAttrSpace", f: c6 }, 65: { n: "PtgAttrSpaceSemi", f: f6 }, 128: { n: "PtgAttrIfError", f: s6 }, 255: {} };
function g0(e, a, r, i) {
  if (i.biff < 8) return Er(e, a);
  for (var s = e.l + a, c = [], u = 0; u !== r.length; ++u) switch (r[u][0]) {
    case "PtgArray":
      r[u][1] = A6(e, 0, i), c.push(r[u][1]);
      break;
    case "PtgMemArea":
      r[u][2] = S6(e, r[u][1], i), c.push(r[u][2]);
      break;
    case "PtgExp":
      i && i.biff == 12 && (r[u][1][1] = e.read_shift(4), c.push(r[u][1]));
      break;
    case "PtgList":
    case "PtgElfRadicalS":
    case "PtgElfColS":
    case "PtgElfColSV":
      throw "Unsupported " + r[u][0];
  }
  return a = s - e.l, a !== 0 && c.push(Er(e, a)), c;
}
function y0(e, a, r) {
  for (var i = e.l + a, s, c, u = []; i != e.l; ) a = i - e.l, c = e[e.l], s = Dm[c] || Dm[J6[c]], (c === 24 || c === 25) && (s = (c === 24 ? eb : tb)[e[e.l + 1]]), !s || !s.f ? Er(e, a) : u.push([s.n, s.f(e, a, r)]);
  return u;
}
function rb(e) {
  for (var a = [], r = 0; r < e.length; ++r) {
    for (var i = e[r], s = [], c = 0; c < i.length; ++c) {
      var u = i[c];
      if (u) switch (u[0]) {
        case 2:
          s.push('"' + u[1].replace(/"/g, '""') + '"');
          break;
        default:
          s.push(u[1]);
      }
      else s.push("");
    }
    a.push(s.join(","));
  }
  return a.join(";");
}
var ab = { PtgAdd: "+", PtgConcat: "&", PtgDiv: "/", PtgEq: "=", PtgGe: ">=", PtgGt: ">", PtgLe: "<=", PtgLt: "<", PtgMul: "*", PtgNe: "<>", PtgPower: "^", PtgSub: "-" };
function nb(e, a) {
  if (!e && !(a && a.biff <= 5 && a.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function My(e, a, r) {
  if (!e) return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[a])) return e.SheetNames[a];
  if (!e.XTI) return "SH33TJSERR6";
  var i = e.XTI[a];
  if (r.biff < 8) return a > 1e4 && (a -= 65536), a < 0 && (a = -a), a == 0 ? "" : e.XTI[a - 1];
  if (!i) return "SH33TJSERR1";
  var s = "";
  if (r.biff > 8) switch (e[i[0]][0]) {
    case 357:
      return s = i[1] == -1 ? "#REF" : e.SheetNames[i[1]], i[1] == i[2] ? s : s + ":" + e.SheetNames[i[2]];
    case 358:
      return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[i[0]][0];
    case 355:
    default:
      return "SH33TJSSRC" + e[i[0]][0];
  }
  switch (e[i[0]][0][0]) {
    case 1025:
      return s = i[1] == -1 ? "#REF" : e.SheetNames[i[1]] || "SH33TJSERR3", i[1] == i[2] ? s : s + ":" + e.SheetNames[i[2]];
    case 14849:
      return e[i[0]].slice(1).map(function(c) {
        return c.Name;
      }).join(";;");
    default:
      return e[i[0]][0][3] ? (s = i[1] == -1 ? "#REF" : e[i[0]][0][3][i[1]] || "SH33TJSERR4", i[1] == i[2] ? s : s + ":" + e[i[0]][0][3][i[2]]) : "SH33TJSERR2";
  }
}
function Fm(e, a, r) {
  var i = My(e, a, r);
  return i == "#REF" ? i : nb(i, r);
}
function pr(e, a, r, i, s) {
  var c = s && s.biff || 8, u = { s: { c: 0, r: 0 } }, o = [], x, d, v, m = 0, g = 0, y, T = "";
  if (!e[0] || !e[0][0]) return "";
  for (var E = -1, _ = "", O = 0, F = e[0].length; O < F; ++O) {
    var k = e[0][O];
    switch (k[0]) {
      case "PtgUminus":
        o.push("-" + o.pop());
        break;
      case "PtgUplus":
        o.push("+" + o.pop());
        break;
      case "PtgPercent":
        o.push(o.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (x = o.pop(), d = o.pop(), E >= 0) {
          switch (e[0][E][1][0]) {
            case 0:
              _ = Bt(" ", e[0][E][1][1]);
              break;
            case 1:
              _ = Bt("\r", e[0][E][1][1]);
              break;
            default:
              if (_ = "", s.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][E][1][0]);
          }
          d = d + _, E = -1;
        }
        o.push(d + ab[k[0]] + x);
        break;
      case "PtgIsect":
        x = o.pop(), d = o.pop(), o.push(d + " " + x);
        break;
      case "PtgUnion":
        x = o.pop(), d = o.pop(), o.push(d + "," + x);
        break;
      case "PtgRange":
        x = o.pop(), d = o.pop(), o.push(d + ":" + x);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        v = Gl(k[1][1], u, s), o.push(Vl(v, c));
        break;
      case "PtgRefN":
        v = r ? Gl(k[1][1], r, s) : k[1][1], o.push(Vl(v, c));
        break;
      case "PtgRef3d":
        m = k[1][1], v = Gl(k[1][2], u, s), T = Fm(i, m, s), o.push(T + "!" + Vl(v, c));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var M = k[1][0], X = k[1][1];
        M || (M = 0), M &= 127;
        var z = M == 0 ? [] : o.slice(-M);
        o.length -= M, X === "User" && (X = z.shift()), o.push(X + "(" + z.join(",") + ")");
        break;
      case "PtgBool":
        o.push(k[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        o.push(k[1]);
        break;
      case "PtgNum":
        o.push(String(k[1]));
        break;
      case "PtgStr":
        o.push('"' + k[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        o.push(k[1]);
        break;
      case "PtgAreaN":
        y = hm(k[1][1], r ? { s: r } : u, s), o.push(Yo(y, s));
        break;
      case "PtgArea":
        y = hm(k[1][1], u, s), o.push(Yo(y, s));
        break;
      case "PtgArea3d":
        m = k[1][1], y = k[1][2], T = Fm(i, m, s), o.push(T + "!" + Yo(y, s));
        break;
      case "PtgAttrSum":
        o.push("SUM(" + o.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        g = k[1][2];
        var C = (i.names || [])[g - 1] || (i[0] || [])[g], S = C ? C.Name : "SH33TJSNAME" + String(g);
        S && S.slice(0, 6) == "_xlfn." && !s.xlfn && (S = S.slice(6)), o.push(S);
        break;
      case "PtgNameX":
        var w = k[1][1];
        g = k[1][2];
        var N;
        if (s.biff <= 5) w < 0 && (w = -w), i[w] && (N = i[w][g]);
        else {
          var B = "";
          if (((i[w] || [])[0] || [])[0] == 14849 || (((i[w] || [])[0] || [])[0] == 1025 ? i[w][g] && i[w][g].itab > 0 && (B = i.SheetNames[i[w][g].itab - 1] + "!") : B = i.SheetNames[g - 1] + "!"), i[w] && i[w][g]) B += i[w][g].Name;
          else if (i[0] && i[0][g]) B += i[0][g].Name;
          else {
            var U = (My(i, w, s) || "").split(";;");
            U[g - 1] ? B = U[g - 1] : B += "SH33TJSERRX";
          }
          o.push(B);
          break;
        }
        N || (N = { Name: "SH33TJSERRY" }), o.push(N.Name);
        break;
      case "PtgParen":
        var ne = "(", ge = ")";
        if (E >= 0) {
          switch (_ = "", e[0][E][1][0]) {
            case 2:
              ne = Bt(" ", e[0][E][1][1]) + ne;
              break;
            case 3:
              ne = Bt("\r", e[0][E][1][1]) + ne;
              break;
            case 4:
              ge = Bt(" ", e[0][E][1][1]) + ge;
              break;
            case 5:
              ge = Bt("\r", e[0][E][1][1]) + ge;
              break;
            default:
              if (s.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][E][1][0]);
          }
          E = -1;
        }
        o.push(ne + o.pop() + ge);
        break;
      case "PtgRefErr":
        o.push("#REF!");
        break;
      case "PtgRefErr3d":
        o.push("#REF!");
        break;
      case "PtgExp":
        v = { c: k[1][1], r: k[1][0] };
        var fe = { c: r.c, r: r.r };
        if (i.sharedf[Ye(v)]) {
          var J = i.sharedf[Ye(v)];
          o.push(pr(J, u, fe, i, s));
        } else {
          var ae = false;
          for (x = 0; x != i.arrayf.length; ++x) if (d = i.arrayf[x], !(v.c < d[0].s.c || v.c > d[0].e.c) && !(v.r < d[0].s.r || v.r > d[0].e.r)) {
            o.push(pr(d[1], u, fe, i, s)), ae = true;
            break;
          }
          ae || o.push(k[1]);
        }
        break;
      case "PtgArray":
        o.push("{" + rb(k[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        E = O;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        o.push("");
        break;
      case "PtgAreaErr":
        o.push("#REF!");
        break;
      case "PtgAreaErr3d":
        o.push("#REF!");
        break;
      case "PtgList":
        o.push("Table" + k[1].idx + "[#" + k[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(k));
      default:
        throw new Error("Unrecognized Formula Token: " + String(k));
    }
    var we = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (s.biff != 3 && E >= 0 && we.indexOf(e[0][O][0]) == -1) {
      k = e[0][E];
      var Q = true;
      switch (k[1][0]) {
        case 4:
          Q = false;
        case 0:
          _ = Bt(" ", k[1][1]);
          break;
        case 5:
          Q = false;
        case 1:
          _ = Bt("\r", k[1][1]);
          break;
        default:
          if (_ = "", s.WTF) throw new Error("Unexpected PtgAttrSpaceType " + k[1][0]);
      }
      o.push((Q ? _ : "") + o.pop() + (Q ? "" : _)), E = -1;
    }
  }
  if (o.length > 1 && s.WTF) throw new Error("bad formula stack");
  return o[0];
}
function ib(e, a, r) {
  var i = e.l + a, s = r.biff == 2 ? 1 : 2, c, u = e.read_shift(s);
  if (u == 65535) return [[], Er(e, a - 2)];
  var o = y0(e, u, r);
  return a !== u + s && (c = g0(e, a - u - s, o, r)), e.l = i, [o, c];
}
function sb(e, a, r) {
  var i = e.l + a, s = r.biff == 2 ? 1 : 2, c, u = e.read_shift(s);
  if (u == 65535) return [[], Er(e, a - 2)];
  var o = y0(e, u, r);
  return a !== u + s && (c = g0(e, a - u - s, o, r)), e.l = i, [o, c];
}
function lb(e, a, r, i) {
  var s = e.l + a, c = y0(e, i, r), u;
  return s !== e.l && (u = g0(e, s - e.l, c, r)), [c, u];
}
function cb(e, a, r) {
  var i = e.l + a, s, c = e.read_shift(2), u = y0(e, c, r);
  return c == 65535 ? [[], Er(e, a - 2)] : (a !== c + 2 && (s = g0(e, i - c - 2, u, r)), [u, s]);
}
function fb(e) {
  var a;
  if (en(e, e.l + 6) !== 65535) return [mr(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return a = e[e.l + 2] === 1, e.l += 8, [a, "b"];
    case 2:
      return a = e[e.l + 2], e.l += 8, [a, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function Ko(e, a, r) {
  var i = e.l + a, s = Ua(e);
  r.biff == 2 && ++e.l;
  var c = fb(e), u = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var o = sb(e, i - e.l, r);
  return { cell: s, val: c[0], formula: o, shared: u >> 3 & 1, tt: c[1] };
}
function yf(e, a, r) {
  var i = e.read_shift(4), s = y0(e, i, r), c = e.read_shift(4), u = c > 0 ? g0(e, c, s, r) : null;
  return [s, u];
}
var ub = yf, Ef = yf, ob = yf, hb = yf, db = { 0: "BEEP", 1: "OPEN", 2: "OPEN.LINKS", 3: "CLOSE.ALL", 4: "SAVE", 5: "SAVE.AS", 6: "FILE.DELETE", 7: "PAGE.SETUP", 8: "PRINT", 9: "PRINTER.SETUP", 10: "QUIT", 11: "NEW.WINDOW", 12: "ARRANGE.ALL", 13: "WINDOW.SIZE", 14: "WINDOW.MOVE", 15: "FULL", 16: "CLOSE", 17: "RUN", 22: "SET.PRINT.AREA", 23: "SET.PRINT.TITLES", 24: "SET.PAGE.BREAK", 25: "REMOVE.PAGE.BREAK", 26: "FONT", 27: "DISPLAY", 28: "PROTECT.DOCUMENT", 29: "PRECISION", 30: "A1.R1C1", 31: "CALCULATE.NOW", 32: "CALCULATION", 34: "DATA.FIND", 35: "EXTRACT", 36: "DATA.DELETE", 37: "SET.DATABASE", 38: "SET.CRITERIA", 39: "SORT", 40: "DATA.SERIES", 41: "TABLE", 42: "FORMAT.NUMBER", 43: "ALIGNMENT", 44: "STYLE", 45: "BORDER", 46: "CELL.PROTECTION", 47: "COLUMN.WIDTH", 48: "UNDO", 49: "CUT", 50: "COPY", 51: "PASTE", 52: "CLEAR", 53: "PASTE.SPECIAL", 54: "EDIT.DELETE", 55: "INSERT", 56: "FILL.RIGHT", 57: "FILL.DOWN", 61: "DEFINE.NAME", 62: "CREATE.NAMES", 63: "FORMULA.GOTO", 64: "FORMULA.FIND", 65: "SELECT.LAST.CELL", 66: "SHOW.ACTIVE.CELL", 67: "GALLERY.AREA", 68: "GALLERY.BAR", 69: "GALLERY.COLUMN", 70: "GALLERY.LINE", 71: "GALLERY.PIE", 72: "GALLERY.SCATTER", 73: "COMBINATION", 74: "PREFERRED", 75: "ADD.OVERLAY", 76: "GRIDLINES", 77: "SET.PREFERRED", 78: "AXES", 79: "LEGEND", 80: "ATTACH.TEXT", 81: "ADD.ARROW", 82: "SELECT.CHART", 83: "SELECT.PLOT.AREA", 84: "PATTERNS", 85: "MAIN.CHART", 86: "OVERLAY", 87: "SCALE", 88: "FORMAT.LEGEND", 89: "FORMAT.TEXT", 90: "EDIT.REPEAT", 91: "PARSE", 92: "JUSTIFY", 93: "HIDE", 94: "UNHIDE", 95: "WORKSPACE", 96: "FORMULA", 97: "FORMULA.FILL", 98: "FORMULA.ARRAY", 99: "DATA.FIND.NEXT", 100: "DATA.FIND.PREV", 101: "FORMULA.FIND.NEXT", 102: "FORMULA.FIND.PREV", 103: "ACTIVATE", 104: "ACTIVATE.NEXT", 105: "ACTIVATE.PREV", 106: "UNLOCKED.NEXT", 107: "UNLOCKED.PREV", 108: "COPY.PICTURE", 109: "SELECT", 110: "DELETE.NAME", 111: "DELETE.FORMAT", 112: "VLINE", 113: "HLINE", 114: "VPAGE", 115: "HPAGE", 116: "VSCROLL", 117: "HSCROLL", 118: "ALERT", 119: "NEW", 120: "CANCEL.COPY", 121: "SHOW.CLIPBOARD", 122: "MESSAGE", 124: "PASTE.LINK", 125: "APP.ACTIVATE", 126: "DELETE.ARROW", 127: "ROW.HEIGHT", 128: "FORMAT.MOVE", 129: "FORMAT.SIZE", 130: "FORMULA.REPLACE", 131: "SEND.KEYS", 132: "SELECT.SPECIAL", 133: "APPLY.NAMES", 134: "REPLACE.FONT", 135: "FREEZE.PANES", 136: "SHOW.INFO", 137: "SPLIT", 138: "ON.WINDOW", 139: "ON.DATA", 140: "DISABLE.INPUT", 142: "OUTLINE", 143: "LIST.NAMES", 144: "FILE.CLOSE", 145: "SAVE.WORKBOOK", 146: "DATA.FORM", 147: "COPY.CHART", 148: "ON.TIME", 149: "WAIT", 150: "FORMAT.FONT", 151: "FILL.UP", 152: "FILL.LEFT", 153: "DELETE.OVERLAY", 155: "SHORT.MENUS", 159: "SET.UPDATE.STATUS", 161: "COLOR.PALETTE", 162: "DELETE.STYLE", 163: "WINDOW.RESTORE", 164: "WINDOW.MAXIMIZE", 166: "CHANGE.LINK", 167: "CALCULATE.DOCUMENT", 168: "ON.KEY", 169: "APP.RESTORE", 170: "APP.MOVE", 171: "APP.SIZE", 172: "APP.MINIMIZE", 173: "APP.MAXIMIZE", 174: "BRING.TO.FRONT", 175: "SEND.TO.BACK", 185: "MAIN.CHART.TYPE", 186: "OVERLAY.CHART.TYPE", 187: "SELECT.END", 188: "OPEN.MAIL", 189: "SEND.MAIL", 190: "STANDARD.FONT", 191: "CONSOLIDATE", 192: "SORT.SPECIAL", 193: "GALLERY.3D.AREA", 194: "GALLERY.3D.COLUMN", 195: "GALLERY.3D.LINE", 196: "GALLERY.3D.PIE", 197: "VIEW.3D", 198: "GOAL.SEEK", 199: "WORKGROUP", 200: "FILL.GROUP", 201: "UPDATE.LINK", 202: "PROMOTE", 203: "DEMOTE", 204: "SHOW.DETAIL", 206: "UNGROUP", 207: "OBJECT.PROPERTIES", 208: "SAVE.NEW.OBJECT", 209: "SHARE", 210: "SHARE.NAME", 211: "DUPLICATE", 212: "APPLY.STYLE", 213: "ASSIGN.TO.OBJECT", 214: "OBJECT.PROTECTION", 215: "HIDE.OBJECT", 216: "SET.EXTRACT", 217: "CREATE.PUBLISHER", 218: "SUBSCRIBE.TO", 219: "ATTRIBUTES", 220: "SHOW.TOOLBAR", 222: "PRINT.PREVIEW", 223: "EDIT.COLOR", 224: "SHOW.LEVELS", 225: "FORMAT.MAIN", 226: "FORMAT.OVERLAY", 227: "ON.RECALC", 228: "EDIT.SERIES", 229: "DEFINE.STYLE", 240: "LINE.PRINT", 243: "ENTER.DATA", 249: "GALLERY.RADAR", 250: "MERGE.STYLES", 251: "EDITION.OPTIONS", 252: "PASTE.PICTURE", 253: "PASTE.PICTURE.LINK", 254: "SPELLING", 256: "ZOOM", 259: "INSERT.OBJECT", 260: "WINDOW.MINIMIZE", 265: "SOUND.NOTE", 266: "SOUND.PLAY", 267: "FORMAT.SHAPE", 268: "EXTEND.POLYGON", 269: "FORMAT.AUTO", 272: "GALLERY.3D.BAR", 273: "GALLERY.3D.SURFACE", 274: "FILL.AUTO", 276: "CUSTOMIZE.TOOLBAR", 277: "ADD.TOOL", 278: "EDIT.OBJECT", 279: "ON.DOUBLECLICK", 280: "ON.ENTRY", 281: "WORKBOOK.ADD", 282: "WORKBOOK.MOVE", 283: "WORKBOOK.COPY", 284: "WORKBOOK.OPTIONS", 285: "SAVE.WORKSPACE", 288: "CHART.WIZARD", 289: "DELETE.TOOL", 290: "MOVE.TOOL", 291: "WORKBOOK.SELECT", 292: "WORKBOOK.ACTIVATE", 293: "ASSIGN.TO.TOOL", 295: "COPY.TOOL", 296: "RESET.TOOL", 297: "CONSTRAIN.NUMERIC", 298: "PASTE.TOOL", 302: "WORKBOOK.NEW", 305: "SCENARIO.CELLS", 306: "SCENARIO.DELETE", 307: "SCENARIO.ADD", 308: "SCENARIO.EDIT", 309: "SCENARIO.SHOW", 310: "SCENARIO.SHOW.NEXT", 311: "SCENARIO.SUMMARY", 312: "PIVOT.TABLE.WIZARD", 313: "PIVOT.FIELD.PROPERTIES", 314: "PIVOT.FIELD", 315: "PIVOT.ITEM", 316: "PIVOT.ADD.FIELDS", 318: "OPTIONS.CALCULATION", 319: "OPTIONS.EDIT", 320: "OPTIONS.VIEW", 321: "ADDIN.MANAGER", 322: "MENU.EDITOR", 323: "ATTACH.TOOLBARS", 324: "VBAActivate", 325: "OPTIONS.CHART", 328: "VBA.INSERT.FILE", 330: "VBA.PROCEDURE.DEFINITION", 336: "ROUTING.SLIP", 338: "ROUTE.DOCUMENT", 339: "MAIL.LOGON", 342: "INSERT.PICTURE", 343: "EDIT.TOOL", 344: "GALLERY.DOUGHNUT", 350: "CHART.TREND", 352: "PIVOT.ITEM.PROPERTIES", 354: "WORKBOOK.INSERT", 355: "OPTIONS.TRANSITION", 356: "OPTIONS.GENERAL", 370: "FILTER.ADVANCED", 373: "MAIL.ADD.MAILER", 374: "MAIL.DELETE.MAILER", 375: "MAIL.REPLY", 376: "MAIL.REPLY.ALL", 377: "MAIL.FORWARD", 378: "MAIL.NEXT.LETTER", 379: "DATA.LABEL", 380: "INSERT.TITLE", 381: "FONT.PROPERTIES", 382: "MACRO.OPTIONS", 383: "WORKBOOK.HIDE", 384: "WORKBOOK.UNHIDE", 385: "WORKBOOK.DELETE", 386: "WORKBOOK.NAME", 388: "GALLERY.CUSTOM", 390: "ADD.CHART.AUTOFORMAT", 391: "DELETE.CHART.AUTOFORMAT", 392: "CHART.ADD.DATA", 393: "AUTO.OUTLINE", 394: "TAB.ORDER", 395: "SHOW.DIALOG", 396: "SELECT.ALL", 397: "UNGROUP.SHEETS", 398: "SUBTOTAL.CREATE", 399: "SUBTOTAL.REMOVE", 400: "RENAME.OBJECT", 412: "WORKBOOK.SCROLL", 413: "WORKBOOK.NEXT", 414: "WORKBOOK.PREV", 415: "WORKBOOK.TAB.SPLIT", 416: "FULL.SCREEN", 417: "WORKBOOK.PROTECT", 420: "SCROLLBAR.PROPERTIES", 421: "PIVOT.SHOW.PAGES", 422: "TEXT.TO.COLUMNS", 423: "FORMAT.CHARTTYPE", 424: "LINK.FORMAT", 425: "TRACER.DISPLAY", 430: "TRACER.NAVIGATE", 431: "TRACER.CLEAR", 432: "TRACER.ERROR", 433: "PIVOT.FIELD.GROUP", 434: "PIVOT.FIELD.UNGROUP", 435: "CHECKBOX.PROPERTIES", 436: "LABEL.PROPERTIES", 437: "LISTBOX.PROPERTIES", 438: "EDITBOX.PROPERTIES", 439: "PIVOT.REFRESH", 440: "LINK.COMBO", 441: "OPEN.TEXT", 442: "HIDE.DIALOG", 443: "SET.DIALOG.FOCUS", 444: "ENABLE.OBJECT", 445: "PUSHBUTTON.PROPERTIES", 446: "SET.DIALOG.DEFAULT", 447: "FILTER", 448: "FILTER.SHOW.ALL", 449: "CLEAR.OUTLINE", 450: "FUNCTION.WIZARD", 451: "ADD.LIST.ITEM", 452: "SET.LIST.ITEM", 453: "REMOVE.LIST.ITEM", 454: "SELECT.LIST.ITEM", 455: "SET.CONTROL.VALUE", 456: "SAVE.COPY.AS", 458: "OPTIONS.LISTS.ADD", 459: "OPTIONS.LISTS.DELETE", 460: "SERIES.AXES", 461: "SERIES.X", 462: "SERIES.Y", 463: "ERRORBAR.X", 464: "ERRORBAR.Y", 465: "FORMAT.CHART", 466: "SERIES.ORDER", 467: "MAIL.LOGOFF", 468: "CLEAR.ROUTING.SLIP", 469: "APP.ACTIVATE.MICROSOFT", 470: "MAIL.EDIT.MAILER", 471: "ON.SHEET", 472: "STANDARD.WIDTH", 473: "SCENARIO.MERGE", 474: "SUMMARY.INFO", 475: "FIND.FILE", 476: "ACTIVE.CELL.FONT", 477: "ENABLE.TIPWIZARD", 478: "VBA.MAKE.ADDIN", 480: "INSERTDATATABLE", 481: "WORKGROUP.OPTIONS", 482: "MAIL.SEND.MAILER", 485: "AUTOCORRECT", 489: "POST.DOCUMENT", 491: "PICKLIST", 493: "VIEW.SHOW", 494: "VIEW.DEFINE", 495: "VIEW.DELETE", 509: "SHEET.BACKGROUND", 510: "INSERT.MAP.OBJECT", 511: "OPTIONS.MENONO", 517: "MSOCHECKS", 518: "NORMAL", 519: "LAYOUT", 520: "RM.PRINT.AREA", 521: "CLEAR.PRINT.AREA", 522: "ADD.PRINT.AREA", 523: "MOVE.BRK", 545: "HIDECURR.NOTE", 546: "HIDEALL.NOTES", 547: "DELETE.NOTE", 548: "TRAVERSE.NOTES", 549: "ACTIVATE.NOTES", 620: "PROTECT.REVISIONS", 621: "UNPROTECT.REVISIONS", 647: "OPTIONS.ME", 653: "WEB.PUBLISH", 667: "NEWWEBQUERY", 673: "PIVOT.TABLE.CHART", 753: "OPTIONS.SAVE", 755: "OPTIONS.SPELL", 808: "HIDEALL.INKANNOTS" }, Ly = { 0: "COUNT", 1: "IF", 2: "ISNA", 3: "ISERROR", 4: "SUM", 5: "AVERAGE", 6: "MIN", 7: "MAX", 8: "ROW", 9: "COLUMN", 10: "NA", 11: "NPV", 12: "STDEV", 13: "DOLLAR", 14: "FIXED", 15: "SIN", 16: "COS", 17: "TAN", 18: "ATAN", 19: "PI", 20: "SQRT", 21: "EXP", 22: "LN", 23: "LOG10", 24: "ABS", 25: "INT", 26: "SIGN", 27: "ROUND", 28: "LOOKUP", 29: "INDEX", 30: "REPT", 31: "MID", 32: "LEN", 33: "VALUE", 34: "TRUE", 35: "FALSE", 36: "AND", 37: "OR", 38: "NOT", 39: "MOD", 40: "DCOUNT", 41: "DSUM", 42: "DAVERAGE", 43: "DMIN", 44: "DMAX", 45: "DSTDEV", 46: "VAR", 47: "DVAR", 48: "TEXT", 49: "LINEST", 50: "TREND", 51: "LOGEST", 52: "GROWTH", 53: "GOTO", 54: "HALT", 55: "RETURN", 56: "PV", 57: "FV", 58: "NPER", 59: "PMT", 60: "RATE", 61: "MIRR", 62: "IRR", 63: "RAND", 64: "MATCH", 65: "DATE", 66: "TIME", 67: "DAY", 68: "MONTH", 69: "YEAR", 70: "WEEKDAY", 71: "HOUR", 72: "MINUTE", 73: "SECOND", 74: "NOW", 75: "AREAS", 76: "ROWS", 77: "COLUMNS", 78: "OFFSET", 79: "ABSREF", 80: "RELREF", 81: "ARGUMENT", 82: "SEARCH", 83: "TRANSPOSE", 84: "ERROR", 85: "STEP", 86: "TYPE", 87: "ECHO", 88: "SET.NAME", 89: "CALLER", 90: "DEREF", 91: "WINDOWS", 92: "SERIES", 93: "DOCUMENTS", 94: "ACTIVE.CELL", 95: "SELECTION", 96: "RESULT", 97: "ATAN2", 98: "ASIN", 99: "ACOS", 100: "CHOOSE", 101: "HLOOKUP", 102: "VLOOKUP", 103: "LINKS", 104: "INPUT", 105: "ISREF", 106: "GET.FORMULA", 107: "GET.NAME", 108: "SET.VALUE", 109: "LOG", 110: "EXEC", 111: "CHAR", 112: "LOWER", 113: "UPPER", 114: "PROPER", 115: "LEFT", 116: "RIGHT", 117: "EXACT", 118: "TRIM", 119: "REPLACE", 120: "SUBSTITUTE", 121: "CODE", 122: "NAMES", 123: "DIRECTORY", 124: "FIND", 125: "CELL", 126: "ISERR", 127: "ISTEXT", 128: "ISNUMBER", 129: "ISBLANK", 130: "T", 131: "N", 132: "FOPEN", 133: "FCLOSE", 134: "FSIZE", 135: "FREADLN", 136: "FREAD", 137: "FWRITELN", 138: "FWRITE", 139: "FPOS", 140: "DATEVALUE", 141: "TIMEVALUE", 142: "SLN", 143: "SYD", 144: "DDB", 145: "GET.DEF", 146: "REFTEXT", 147: "TEXTREF", 148: "INDIRECT", 149: "REGISTER", 150: "CALL", 151: "ADD.BAR", 152: "ADD.MENU", 153: "ADD.COMMAND", 154: "ENABLE.COMMAND", 155: "CHECK.COMMAND", 156: "RENAME.COMMAND", 157: "SHOW.BAR", 158: "DELETE.MENU", 159: "DELETE.COMMAND", 160: "GET.CHART.ITEM", 161: "DIALOG.BOX", 162: "CLEAN", 163: "MDETERM", 164: "MINVERSE", 165: "MMULT", 166: "FILES", 167: "IPMT", 168: "PPMT", 169: "COUNTA", 170: "CANCEL.KEY", 171: "FOR", 172: "WHILE", 173: "BREAK", 174: "NEXT", 175: "INITIATE", 176: "REQUEST", 177: "POKE", 178: "EXECUTE", 179: "TERMINATE", 180: "RESTART", 181: "HELP", 182: "GET.BAR", 183: "PRODUCT", 184: "FACT", 185: "GET.CELL", 186: "GET.WORKSPACE", 187: "GET.WINDOW", 188: "GET.DOCUMENT", 189: "DPRODUCT", 190: "ISNONTEXT", 191: "GET.NOTE", 192: "NOTE", 193: "STDEVP", 194: "VARP", 195: "DSTDEVP", 196: "DVARP", 197: "TRUNC", 198: "ISLOGICAL", 199: "DCOUNTA", 200: "DELETE.BAR", 201: "UNREGISTER", 204: "USDOLLAR", 205: "FINDB", 206: "SEARCHB", 207: "REPLACEB", 208: "LEFTB", 209: "RIGHTB", 210: "MIDB", 211: "LENB", 212: "ROUNDUP", 213: "ROUNDDOWN", 214: "ASC", 215: "DBCS", 216: "RANK", 219: "ADDRESS", 220: "DAYS360", 221: "TODAY", 222: "VDB", 223: "ELSE", 224: "ELSE.IF", 225: "END.IF", 226: "FOR.CELL", 227: "MEDIAN", 228: "SUMPRODUCT", 229: "SINH", 230: "COSH", 231: "TANH", 232: "ASINH", 233: "ACOSH", 234: "ATANH", 235: "DGET", 236: "CREATE.OBJECT", 237: "VOLATILE", 238: "LAST.ERROR", 239: "CUSTOM.UNDO", 240: "CUSTOM.REPEAT", 241: "FORMULA.CONVERT", 242: "GET.LINK.INFO", 243: "TEXT.BOX", 244: "INFO", 245: "GROUP", 246: "GET.OBJECT", 247: "DB", 248: "PAUSE", 251: "RESUME", 252: "FREQUENCY", 253: "ADD.TOOLBAR", 254: "DELETE.TOOLBAR", 255: "User", 256: "RESET.TOOLBAR", 257: "EVALUATE", 258: "GET.TOOLBAR", 259: "GET.TOOL", 260: "SPELLING.CHECK", 261: "ERROR.TYPE", 262: "APP.TITLE", 263: "WINDOW.TITLE", 264: "SAVE.TOOLBAR", 265: "ENABLE.TOOL", 266: "PRESS.TOOL", 267: "REGISTER.ID", 268: "GET.WORKBOOK", 269: "AVEDEV", 270: "BETADIST", 271: "GAMMALN", 272: "BETAINV", 273: "BINOMDIST", 274: "CHIDIST", 275: "CHIINV", 276: "COMBIN", 277: "CONFIDENCE", 278: "CRITBINOM", 279: "EVEN", 280: "EXPONDIST", 281: "FDIST", 282: "FINV", 283: "FISHER", 284: "FISHERINV", 285: "FLOOR", 286: "GAMMADIST", 287: "GAMMAINV", 288: "CEILING", 289: "HYPGEOMDIST", 290: "LOGNORMDIST", 291: "LOGINV", 292: "NEGBINOMDIST", 293: "NORMDIST", 294: "NORMSDIST", 295: "NORMINV", 296: "NORMSINV", 297: "STANDARDIZE", 298: "ODD", 299: "PERMUT", 300: "POISSON", 301: "TDIST", 302: "WEIBULL", 303: "SUMXMY2", 304: "SUMX2MY2", 305: "SUMX2PY2", 306: "CHITEST", 307: "CORREL", 308: "COVAR", 309: "FORECAST", 310: "FTEST", 311: "INTERCEPT", 312: "PEARSON", 313: "RSQ", 314: "STEYX", 315: "SLOPE", 316: "TTEST", 317: "PROB", 318: "DEVSQ", 319: "GEOMEAN", 320: "HARMEAN", 321: "SUMSQ", 322: "KURT", 323: "SKEW", 324: "ZTEST", 325: "LARGE", 326: "SMALL", 327: "QUARTILE", 328: "PERCENTILE", 329: "PERCENTRANK", 330: "MODE", 331: "TRIMMEAN", 332: "TINV", 334: "MOVIE.COMMAND", 335: "GET.MOVIE", 336: "CONCATENATE", 337: "POWER", 338: "PIVOT.ADD.DATA", 339: "GET.PIVOT.TABLE", 340: "GET.PIVOT.FIELD", 341: "GET.PIVOT.ITEM", 342: "RADIANS", 343: "DEGREES", 344: "SUBTOTAL", 345: "SUMIF", 346: "COUNTIF", 347: "COUNTBLANK", 348: "SCENARIO.GET", 349: "OPTIONS.LISTS.GET", 350: "ISPMT", 351: "DATEDIF", 352: "DATESTRING", 353: "NUMBERSTRING", 354: "ROMAN", 355: "OPEN.DIALOG", 356: "SAVE.DIALOG", 357: "VIEW.GET", 358: "GETPIVOTDATA", 359: "HYPERLINK", 360: "PHONETIC", 361: "AVERAGEA", 362: "MAXA", 363: "MINA", 364: "STDEVPA", 365: "VARPA", 366: "STDEVA", 367: "VARA", 368: "BAHTTEXT", 369: "THAIDAYOFWEEK", 370: "THAIDIGIT", 371: "THAIMONTHOFYEAR", 372: "THAINUMSOUND", 373: "THAINUMSTRING", 374: "THAISTRINGLENGTH", 375: "ISTHAIDIGIT", 376: "ROUNDBAHTDOWN", 377: "ROUNDBAHTUP", 378: "THAIYEAR", 379: "RTD", 380: "CUBEVALUE", 381: "CUBEMEMBER", 382: "CUBEMEMBERPROPERTY", 383: "CUBERANKEDMEMBER", 384: "HEX2BIN", 385: "HEX2DEC", 386: "HEX2OCT", 387: "DEC2BIN", 388: "DEC2HEX", 389: "DEC2OCT", 390: "OCT2BIN", 391: "OCT2HEX", 392: "OCT2DEC", 393: "BIN2DEC", 394: "BIN2OCT", 395: "BIN2HEX", 396: "IMSUB", 397: "IMDIV", 398: "IMPOWER", 399: "IMABS", 400: "IMSQRT", 401: "IMLN", 402: "IMLOG2", 403: "IMLOG10", 404: "IMSIN", 405: "IMCOS", 406: "IMEXP", 407: "IMARGUMENT", 408: "IMCONJUGATE", 409: "IMAGINARY", 410: "IMREAL", 411: "COMPLEX", 412: "IMSUM", 413: "IMPRODUCT", 414: "SERIESSUM", 415: "FACTDOUBLE", 416: "SQRTPI", 417: "QUOTIENT", 418: "DELTA", 419: "GESTEP", 420: "ISEVEN", 421: "ISODD", 422: "MROUND", 423: "ERF", 424: "ERFC", 425: "BESSELJ", 426: "BESSELK", 427: "BESSELY", 428: "BESSELI", 429: "XIRR", 430: "XNPV", 431: "PRICEMAT", 432: "YIELDMAT", 433: "INTRATE", 434: "RECEIVED", 435: "DISC", 436: "PRICEDISC", 437: "YIELDDISC", 438: "TBILLEQ", 439: "TBILLPRICE", 440: "TBILLYIELD", 441: "PRICE", 442: "YIELD", 443: "DOLLARDE", 444: "DOLLARFR", 445: "NOMINAL", 446: "EFFECT", 447: "CUMPRINC", 448: "CUMIPMT", 449: "EDATE", 450: "EOMONTH", 451: "YEARFRAC", 452: "COUPDAYBS", 453: "COUPDAYS", 454: "COUPDAYSNC", 455: "COUPNCD", 456: "COUPNUM", 457: "COUPPCD", 458: "DURATION", 459: "MDURATION", 460: "ODDLPRICE", 461: "ODDLYIELD", 462: "ODDFPRICE", 463: "ODDFYIELD", 464: "RANDBETWEEN", 465: "WEEKNUM", 466: "AMORDEGRC", 467: "AMORLINC", 468: "CONVERT", 724: "SHEETJS", 469: "ACCRINT", 470: "ACCRINTM", 471: "WORKDAY", 472: "NETWORKDAYS", 473: "GCD", 474: "MULTINOMIAL", 475: "LCM", 476: "FVSCHEDULE", 477: "CUBEKPIMEMBER", 478: "CUBESET", 479: "CUBESETCOUNT", 480: "IFERROR", 481: "COUNTIFS", 482: "SUMIFS", 483: "AVERAGEIF", 484: "AVERAGEIFS" }, xb = { 2: 1, 3: 1, 10: 0, 15: 1, 16: 1, 17: 1, 18: 1, 19: 0, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 2, 30: 2, 31: 3, 32: 1, 33: 1, 34: 0, 35: 0, 38: 1, 39: 2, 40: 3, 41: 3, 42: 3, 43: 3, 44: 3, 45: 3, 47: 3, 48: 2, 53: 1, 61: 3, 63: 0, 65: 3, 66: 3, 67: 1, 68: 1, 69: 1, 70: 1, 71: 1, 72: 1, 73: 1, 74: 0, 75: 1, 76: 1, 77: 1, 79: 2, 80: 2, 83: 1, 85: 0, 86: 1, 89: 0, 90: 1, 94: 0, 95: 0, 97: 2, 98: 1, 99: 1, 101: 3, 102: 3, 105: 1, 106: 1, 108: 2, 111: 1, 112: 1, 113: 1, 114: 1, 117: 2, 118: 1, 119: 4, 121: 1, 126: 1, 127: 1, 128: 1, 129: 1, 130: 1, 131: 1, 133: 1, 134: 1, 135: 1, 136: 2, 137: 2, 138: 2, 140: 1, 141: 1, 142: 3, 143: 4, 144: 4, 161: 1, 162: 1, 163: 1, 164: 1, 165: 2, 172: 1, 175: 2, 176: 2, 177: 3, 178: 2, 179: 1, 184: 1, 186: 1, 189: 3, 190: 1, 195: 3, 196: 3, 197: 1, 198: 1, 199: 3, 201: 1, 207: 4, 210: 3, 211: 1, 212: 2, 213: 2, 214: 1, 215: 1, 225: 0, 229: 1, 230: 1, 231: 1, 232: 1, 233: 1, 234: 1, 235: 3, 244: 1, 247: 4, 252: 2, 257: 1, 261: 1, 271: 1, 273: 4, 274: 2, 275: 2, 276: 2, 277: 3, 278: 3, 279: 1, 280: 3, 281: 3, 282: 3, 283: 1, 284: 1, 285: 2, 286: 4, 287: 3, 288: 2, 289: 4, 290: 3, 291: 3, 292: 3, 293: 4, 294: 1, 295: 3, 296: 1, 297: 3, 298: 1, 299: 2, 300: 3, 301: 3, 302: 4, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2, 308: 2, 309: 3, 310: 2, 311: 2, 312: 2, 313: 2, 314: 2, 315: 2, 316: 4, 325: 2, 326: 2, 327: 2, 328: 2, 331: 2, 332: 2, 337: 2, 342: 1, 343: 1, 346: 2, 347: 1, 350: 4, 351: 3, 352: 1, 353: 2, 360: 1, 368: 1, 369: 1, 370: 1, 371: 1, 372: 1, 373: 1, 374: 1, 375: 1, 376: 1, 377: 1, 378: 1, 382: 3, 385: 1, 392: 1, 393: 1, 396: 2, 397: 2, 398: 2, 399: 1, 400: 1, 401: 1, 402: 1, 403: 1, 404: 1, 405: 1, 406: 1, 407: 1, 408: 1, 409: 1, 410: 1, 414: 4, 415: 1, 416: 1, 417: 2, 420: 1, 421: 1, 422: 2, 424: 1, 425: 2, 426: 2, 427: 2, 428: 2, 430: 3, 438: 3, 439: 3, 440: 3, 443: 2, 444: 2, 445: 2, 446: 2, 447: 6, 448: 6, 449: 2, 450: 2, 464: 2, 468: 3, 476: 2, 479: 1, 480: 2, 65535: 0 };
function Nm(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(a, r) {
    return r.replace(/\./g, "");
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function Wo(e) {
  var a = e.split(":"), r = a[0].split(".")[0];
  return [r, a[0].split(".")[1] + (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : "")];
}
var ql = {}, Es = {};
function Kl(e, a) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    a == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function By(e, a, r, i, s, c) {
  try {
    i.cellNF && (e.z = We[a]);
  } catch (o) {
    if (i.WTF) throw o;
  }
  if (!(e.t === "z" && !i.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = ir(e.v)), (!i || i.cellText !== false) && e.t !== "z") try {
      if (We[a] == null && yi(v3[a] || "General", a), e.t === "e") e.w = e.w || Oi[e.v];
      else if (a === 0) if (e.t === "n") (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = e0(e.v);
      else if (e.t === "d") {
        var u = br(e.v);
        (u | 0) === u ? e.w = u.toString(10) : e.w = e0(u);
      } else {
        if (e.v === void 0) return "";
        e.w = Ti(e.v, Es);
      }
      else e.t === "d" ? e.w = fa(a, br(e.v), Es) : e.w = fa(a, e.v, Es);
    } catch (o) {
      if (i.WTF) throw o;
    }
    if (i.cellStyles && r != null) try {
      e.s = c.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = cf(s.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), i.WTF && (e.s.fgColor.raw_rgb = s.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = cf(s.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), i.WTF && (e.s.bgColor.raw_rgb = s.themeElements.clrScheme[e.s.bgColor.theme].rgb));
    } catch (o) {
      if (i.WTF && c.Fills) throw o;
    }
  }
}
function vb(e, a) {
  var r = Ut(a);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = ut(r));
}
var pb = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, mb = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, gb = /<(?:\w:)?hyperlink [^>]*>/mg, yb = /"(\w*:\w*)"/, Eb = /<(?:\w:)?col\b[^>]*[\/]?>/g, _b = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g, Tb = /<(?:\w:)?pageMargins[^>]*\/>/g, Uy = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/, wb = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/, Sb = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function Ab(e, a, r, i, s, c, u) {
  if (!e) return e;
  i || (i = { "!id": {} });
  var o = a.dense ? [] : {}, x = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, d = "", v = "", m = e.match(mb);
  m ? (d = e.slice(0, m.index), v = e.slice(m.index + m[0].length)) : d = v = e;
  var g = d.match(Uy);
  g ? hd(g[0], o, s, r) : (g = d.match(wb)) && kb(g[0], g[1] || "", o, s, r);
  var y = (d.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (y > 0) {
    var T = d.slice(y, y + 50).match(yb);
    T && vb(o, T[1]);
  }
  var E = d.match(Sb);
  E && E[1] && Fb(E[1], s);
  var _ = [];
  if (a.cellStyles) {
    var O = d.match(Eb);
    O && Ob(_, O);
  }
  m && Nb(m[1], o, a, x, c, u);
  var F = v.match(_b);
  F && (o["!autofilter"] = Rb(F[0]));
  var k = [], M = v.match(pb);
  if (M) for (y = 0; y != M.length; ++y) k[y] = Ut(M[y].slice(M[y].indexOf('"') + 1));
  var X = v.match(gb);
  X && Cb(o, X, i);
  var z = v.match(Tb);
  if (z && (o["!margins"] = bb(Pe(z[0]))), !o["!ref"] && x.e.c >= x.s.c && x.e.r >= x.s.r && (o["!ref"] = ut(x)), a.sheetRows > 0 && o["!ref"]) {
    var C = Ut(o["!ref"]);
    a.sheetRows <= +C.e.r && (C.e.r = a.sheetRows - 1, C.e.r > x.e.r && (C.e.r = x.e.r), C.e.r < C.s.r && (C.s.r = C.e.r), C.e.c > x.e.c && (C.e.c = x.e.c), C.e.c < C.s.c && (C.s.c = C.e.c), o["!fullref"] = o["!ref"], o["!ref"] = ut(C));
  }
  return _.length > 0 && (o["!cols"] = _), k.length > 0 && (o["!merges"] = k), o;
}
function hd(e, a, r, i) {
  var s = Pe(e);
  r.Sheets[i] || (r.Sheets[i] = {}), s.codeName && (r.Sheets[i].CodeName = ot(bt(s.codeName)));
}
function kb(e, a, r, i, s) {
  hd(e.slice(0, e.indexOf(">")), r, i, s);
}
function Cb(e, a, r) {
  for (var i = Array.isArray(e), s = 0; s != a.length; ++s) {
    var c = Pe(bt(a[s]), true);
    if (!c.ref) return;
    var u = ((r || {})["!id"] || [])[c.id];
    u ? (c.Target = u.Target, c.location && (c.Target += "#" + ot(c.location))) : (c.Target = "#" + ot(c.location), u = { Target: c.Target, TargetMode: "Internal" }), c.Rel = u, c.tooltip && (c.Tooltip = c.tooltip, delete c.tooltip);
    for (var o = Ut(c.ref), x = o.s.r; x <= o.e.r; ++x) for (var d = o.s.c; d <= o.e.c; ++d) {
      var v = Ye({ c: d, r: x });
      i ? (e[x] || (e[x] = []), e[x][d] || (e[x][d] = { t: "z", v: void 0 }), e[x][d].l = c) : (e[v] || (e[v] = { t: "z", v: void 0 }), e[v].l = c);
    }
  }
}
function bb(e) {
  var a = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(r) {
    e[r] && (a[r] = parseFloat(e[r]));
  }), a;
}
function Ob(e, a) {
  for (var r = false, i = 0; i != a.length; ++i) {
    var s = Pe(a[i], true);
    s.hidden && (s.hidden = Ft(s.hidden));
    var c = parseInt(s.min, 10) - 1, u = parseInt(s.max, 10) - 1;
    for (s.outlineLevel && (s.level = +s.outlineLevel || 0), delete s.min, delete s.max, s.width = +s.width, !r && s.width && (r = true, ud(s.width)), Cs(s); c <= u; ) e[c++] = or(s);
  }
}
function Rb(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var Db = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function Fb(e, a) {
  a.Views || (a.Views = [{}]), (e.match(Db) || []).forEach(function(r, i) {
    var s = Pe(r);
    a.Views[i] || (a.Views[i] = {}), +s.zoomScale && (a.Views[i].zoom = +s.zoomScale), Ft(s.rightToLeft) && (a.Views[i].RTL = true);
  });
}
var Nb = function() {
  var e = /<(?:\w+:)?c[ \/>]/, a = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, i = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, s = /ref=["']([^"']*)["']/, c = t0("v"), u = t0("f");
  return function(x, d, v, m, g, y) {
    for (var T = 0, E = "", _ = [], O = [], F = 0, k = 0, M = 0, X = "", z, C, S = 0, w = 0, N, B, U = 0, ne = 0, ge = Array.isArray(y.CellXf), fe, J = [], ae = [], we = Array.isArray(d), Q = [], H = {}, re = false, R = !!v.sheetStubs, j = x.split(a), q = 0, K = j.length; q != K; ++q) {
      E = j[q].trim();
      var ie = E.length;
      if (ie !== 0) {
        var Ae = 0;
        e: for (T = 0; T < ie; ++T) switch (E[T]) {
          case ">":
            if (E[T - 1] != "/") {
              ++T;
              break e;
            }
            if (v && v.cellStyles) {
              if (C = Pe(E.slice(Ae, T), true), S = C.r != null ? parseInt(C.r, 10) : S + 1, w = -1, v.sheetRows && v.sheetRows < S) continue;
              H = {}, re = false, C.ht && (re = true, H.hpt = parseFloat(C.ht), H.hpx = i0(H.hpt)), C.hidden == "1" && (re = true, H.hidden = true), C.outlineLevel != null && (re = true, H.level = +C.outlineLevel), re && (Q[S - 1] = H);
            }
            break;
          case "<":
            Ae = T;
            break;
        }
        if (Ae >= T) break;
        if (C = Pe(E.slice(Ae, T), true), S = C.r != null ? parseInt(C.r, 10) : S + 1, w = -1, !(v.sheetRows && v.sheetRows < S)) {
          m.s.r > S - 1 && (m.s.r = S - 1), m.e.r < S - 1 && (m.e.r = S - 1), v && v.cellStyles && (H = {}, re = false, C.ht && (re = true, H.hpt = parseFloat(C.ht), H.hpx = i0(H.hpt)), C.hidden == "1" && (re = true, H.hidden = true), C.outlineLevel != null && (re = true, H.level = +C.outlineLevel), re && (Q[S - 1] = H)), _ = E.slice(T).split(e);
          for (var pe = 0; pe != _.length && _[pe].trim().charAt(0) == "<"; ++pe) ;
          for (_ = _.slice(pe), T = 0; T != _.length; ++T) if (E = _[T].trim(), E.length !== 0) {
            if (O = E.match(r), F = T, k = 0, M = 0, E = "<c " + (E.slice(0, 1) == "<" ? ">" : "") + E, O != null && O.length === 2) {
              for (F = 0, X = O[1], k = 0; k != X.length && !((M = X.charCodeAt(k) - 64) < 1 || M > 26); ++k) F = 26 * F + M;
              --F, w = F;
            } else ++w;
            for (k = 0; k != E.length && E.charCodeAt(k) !== 62; ++k) ;
            if (++k, C = Pe(E.slice(0, k), true), C.r || (C.r = Ye({ r: S - 1, c: w })), X = E.slice(k), z = { t: "" }, (O = X.match(c)) != null && O[1] !== "" && (z.v = ot(O[1])), v.cellFormula) {
              if ((O = X.match(u)) != null && O[1] !== "") {
                if (z.f = ot(bt(O[1])).replace(/\r\n/g, `
`), v.xlfn || (z.f = Om(z.f)), O[0].indexOf('t="array"') > -1) z.F = (X.match(s) || [])[1], z.F.indexOf(":") > -1 && J.push([Ut(z.F), z.F]);
                else if (O[0].indexOf('t="shared"') > -1) {
                  B = Pe(O[0]);
                  var ye = ot(bt(O[1]));
                  v.xlfn || (ye = Om(ye)), ae[parseInt(B.si, 10)] = [B, ye, C.r];
                }
              } else (O = X.match(/<f[^>]*\/>/)) && (B = Pe(O[0]), ae[B.si] && (z.f = VC(ae[B.si][1], ae[B.si][2], C.r)));
              var _e = kr(C.r);
              for (k = 0; k < J.length; ++k) _e.r >= J[k][0].s.r && _e.r <= J[k][0].e.r && _e.c >= J[k][0].s.c && _e.c <= J[k][0].e.c && (z.F = J[k][1]);
            }
            if (C.t == null && z.v === void 0) if (z.f || z.F) z.v = 0, z.t = "n";
            else if (R) z.t = "z";
            else continue;
            else z.t = C.t || "n";
            switch (m.s.c > w && (m.s.c = w), m.e.c < w && (m.e.c = w), z.t) {
              case "n":
                if (z.v == "" || z.v == null) {
                  if (!R) continue;
                  z.t = "z";
                } else z.v = parseFloat(z.v);
                break;
              case "s":
                if (typeof z.v > "u") {
                  if (!R) continue;
                  z.t = "z";
                } else N = ql[parseInt(z.v, 10)], z.v = N.t, z.r = N.r, v.cellHTML && (z.h = N.h);
                break;
              case "str":
                z.t = "s", z.v = z.v != null ? bt(z.v) : "", v.cellHTML && (z.h = Jh(z.v));
                break;
              case "inlineStr":
                O = X.match(i), z.t = "s", O != null && (N = fd(O[1])) ? (z.v = N.t, v.cellHTML && (z.h = N.h)) : z.v = "";
                break;
              case "b":
                z.v = Ft(z.v);
                break;
              case "d":
                v.cellDates ? z.v = ir(z.v, 1) : (z.v = br(ir(z.v, 1)), z.t = "n");
                break;
              case "e":
                (!v || v.cellText !== false) && (z.w = z.v), z.v = ny[z.v];
                break;
            }
            if (U = ne = 0, fe = null, ge && C.s !== void 0 && (fe = y.CellXf[C.s], fe != null && (fe.numFmtId != null && (U = fe.numFmtId), v.cellStyles && fe.fillId != null && (ne = fe.fillId))), By(z, U, ne, v, g, y), v.cellDates && ge && z.t == "n" && Rs(We[U]) && (z.t = "d", z.v = mf(z.v)), C.cm && v.xlmeta) {
              var Re = (v.xlmeta.Cell || [])[+C.cm - 1];
              Re && Re.type == "XLDAPR" && (z.D = true);
            }
            if (we) {
              var V = kr(C.r);
              d[V.r] || (d[V.r] = []), d[V.r][V.c] = z;
            } else d[C.r] = z;
          }
        }
      }
    }
    Q.length > 0 && (d["!rows"] = Q);
  };
}();
function Mb(e, a) {
  var r = {}, i = e.l + a;
  r.r = e.read_shift(4), e.l += 4;
  var s = e.read_shift(2);
  e.l += 1;
  var c = e.read_shift(1);
  return e.l = i, c & 7 && (r.level = c & 7), c & 16 && (r.hidden = true), c & 32 && (r.hpt = s / 20), r;
}
var Lb = bi;
function Bb() {
}
function Ub(e, a) {
  var r = {}, i = e[e.l];
  return ++e.l, r.above = !(i & 64), r.left = !(i & 128), e.l += 18, r.name = iA(e), r;
}
function Ib(e) {
  var a = ua(e);
  return [a];
}
function Hb(e) {
  var a = Ci(e);
  return [a];
}
function jb(e) {
  var a = ua(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function zb(e) {
  var a = Ci(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function Pb(e) {
  var a = ua(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function Gb(e) {
  var a = Ci(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function Vb(e) {
  var a = ua(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function Xb(e) {
  var a = Ci(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function Yb(e) {
  var a = ua(e), r = mr(e);
  return [a, r, "n"];
}
function Iy(e) {
  var a = Ci(e), r = mr(e);
  return [a, r, "n"];
}
function $b(e) {
  var a = ua(e), r = sd(e);
  return [a, r, "n"];
}
function qb(e) {
  var a = Ci(e), r = sd(e);
  return [a, r, "n"];
}
function Kb(e) {
  var a = ua(e), r = nd(e);
  return [a, r, "is"];
}
function Wb(e) {
  var a = ua(e), r = yr(e);
  return [a, r, "str"];
}
function Zb(e) {
  var a = Ci(e), r = yr(e);
  return [a, r, "str"];
}
function Qb(e, a, r) {
  var i = e.l + a, s = ua(e);
  s.r = r["!row"];
  var c = e.read_shift(1), u = [s, c, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ef(e, i - e.l, r);
    u[3] = pr(o, null, s, r.supbooks, r);
  } else e.l = i;
  return u;
}
function Jb(e, a, r) {
  var i = e.l + a, s = ua(e);
  s.r = r["!row"];
  var c = e.read_shift(1), u = [s, c, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ef(e, i - e.l, r);
    u[3] = pr(o, null, s, r.supbooks, r);
  } else e.l = i;
  return u;
}
function eO(e, a, r) {
  var i = e.l + a, s = ua(e);
  s.r = r["!row"];
  var c = mr(e), u = [s, c, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ef(e, i - e.l, r);
    u[3] = pr(o, null, s, r.supbooks, r);
  } else e.l = i;
  return u;
}
function tO(e, a, r) {
  var i = e.l + a, s = ua(e);
  s.r = r["!row"];
  var c = yr(e), u = [s, c, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var o = Ef(e, i - e.l, r);
    u[3] = pr(o, null, s, r.supbooks, r);
  } else e.l = i;
  return u;
}
var rO = bi;
function aO(e, a) {
  var r = e.l + a, i = bi(e), s = id(e), c = yr(e), u = yr(e), o = yr(e);
  e.l = r;
  var x = { rfx: i, relId: s, loc: c, display: o };
  return u && (x.Tooltip = u), x;
}
function nO() {
}
function iO(e, a, r) {
  var i = e.l + a, s = ty(e), c = e.read_shift(1), u = [s];
  if (u[2] = c, r.cellFormula) {
    var o = ub(e, i - e.l, r);
    u[1] = o;
  } else e.l = i;
  return u;
}
function sO(e, a, r) {
  var i = e.l + a, s = bi(e), c = [s];
  if (r.cellFormula) {
    var u = hb(e, i - e.l, r);
    c[1] = u, e.l = i;
  } else e.l = i;
  return c;
}
var lO = ["left", "right", "top", "bottom", "header", "footer"];
function cO(e) {
  var a = {};
  return lO.forEach(function(r) {
    a[r] = mr(e);
  }), a;
}
function fO(e) {
  var a = e.read_shift(2);
  return e.l += 28, { RTL: a & 32 };
}
function uO() {
}
function oO() {
}
function hO(e, a, r, i, s, c, u) {
  if (!e) return e;
  var o = a || {};
  i || (i = { "!id": {} });
  var x = o.dense ? [] : {}, d, v = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, m = false, g = false, y, T, E, _, O, F, k, M, X, z = [];
  o.biff = 12, o["!row"] = 0;
  var C = 0, S = false, w = [], N = {}, B = o.supbooks || s.supbooks || [[]];
  if (B.sharedf = N, B.arrayf = w, B.SheetNames = s.SheetNames || s.Sheets.map(function(we) {
    return we.name;
  }), !o.supbooks && (o.supbooks = B, s.Names)) for (var U = 0; U < s.Names.length; ++U) B[0][U + 1] = s.Names[U];
  var ne = [], ge = [], fe = false;
  of[16] = { n: "BrtShortReal", f: Iy };
  var J;
  if (cn(e, function(Q, H, re) {
    if (!g) switch (re) {
      case 148:
        d = Q;
        break;
      case 0:
        y = Q, o.sheetRows && o.sheetRows <= y.r && (g = true), M = hr(_ = y.r), o["!row"] = y.r, (Q.hidden || Q.hpt || Q.level != null) && (Q.hpt && (Q.hpx = i0(Q.hpt)), ge[Q.r] = Q);
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 62:
        switch (T = { t: Q[2] }, Q[2]) {
          case "n":
            T.v = Q[1];
            break;
          case "s":
            k = ql[Q[1]], T.v = k.t, T.r = k.r;
            break;
          case "b":
            T.v = !!Q[1];
            break;
          case "e":
            T.v = Q[1], o.cellText !== false && (T.w = Oi[T.v]);
            break;
          case "str":
            T.t = "s", T.v = Q[1];
            break;
          case "is":
            T.t = "s", T.v = Q[1].t;
            break;
        }
        if ((E = u.CellXf[Q[0].iStyleRef]) && By(T, E.numFmtId, null, o, c, u), O = Q[0].c == -1 ? O + 1 : Q[0].c, o.dense ? (x[_] || (x[_] = []), x[_][O] = T) : x[Zt(O) + M] = T, o.cellFormula) {
          for (S = false, C = 0; C < w.length; ++C) {
            var R = w[C];
            y.r >= R[0].s.r && y.r <= R[0].e.r && O >= R[0].s.c && O <= R[0].e.c && (T.F = ut(R[0]), S = true);
          }
          !S && Q.length > 3 && (T.f = Q[3]);
        }
        if (v.s.r > y.r && (v.s.r = y.r), v.s.c > O && (v.s.c = O), v.e.r < y.r && (v.e.r = y.r), v.e.c < O && (v.e.c = O), o.cellDates && E && T.t == "n" && Rs(We[E.numFmtId])) {
          var j = mi(T.v);
          j && (T.t = "d", T.v = new Date(j.y, j.m - 1, j.d, j.H, j.M, j.S, j.u));
        }
        J && (J.type == "XLDAPR" && (T.D = true), J = void 0);
        break;
      case 1:
      case 12:
        if (!o.sheetStubs || m) break;
        T = { t: "z", v: void 0 }, O = Q[0].c == -1 ? O + 1 : Q[0].c, o.dense ? (x[_] || (x[_] = []), x[_][O] = T) : x[Zt(O) + M] = T, v.s.r > y.r && (v.s.r = y.r), v.s.c > O && (v.s.c = O), v.e.r < y.r && (v.e.r = y.r), v.e.c < O && (v.e.c = O), J && (J.type == "XLDAPR" && (T.D = true), J = void 0);
        break;
      case 176:
        z.push(Q);
        break;
      case 49:
        J = ((o.xlmeta || {}).Cell || [])[Q - 1];
        break;
      case 494:
        var q = i["!id"][Q.relId];
        for (q ? (Q.Target = q.Target, Q.loc && (Q.Target += "#" + Q.loc), Q.Rel = q) : Q.relId == "" && (Q.Target = "#" + Q.loc), _ = Q.rfx.s.r; _ <= Q.rfx.e.r; ++_) for (O = Q.rfx.s.c; O <= Q.rfx.e.c; ++O) o.dense ? (x[_] || (x[_] = []), x[_][O] || (x[_][O] = { t: "z", v: void 0 }), x[_][O].l = Q) : (F = Ye({ c: O, r: _ }), x[F] || (x[F] = { t: "z", v: void 0 }), x[F].l = Q);
        break;
      case 426:
        if (!o.cellFormula) break;
        w.push(Q), X = o.dense ? x[_][O] : x[Zt(O) + M], X.f = pr(Q[1], v, { r: y.r, c: O }, B, o), X.F = ut(Q[0]);
        break;
      case 427:
        if (!o.cellFormula) break;
        N[Ye(Q[0].s)] = Q[1], X = o.dense ? x[_][O] : x[Zt(O) + M], X.f = pr(Q[1], v, { r: y.r, c: O }, B, o);
        break;
      case 60:
        if (!o.cellStyles) break;
        for (; Q.e >= Q.s; ) ne[Q.e--] = { width: Q.w / 256, hidden: !!(Q.flags & 1), level: Q.level }, fe || (fe = true, ud(Q.w / 256)), Cs(ne[Q.e + 1]);
        break;
      case 161:
        x["!autofilter"] = { ref: ut(Q) };
        break;
      case 476:
        x["!margins"] = Q;
        break;
      case 147:
        s.Sheets[r] || (s.Sheets[r] = {}), Q.name && (s.Sheets[r].CodeName = Q.name), (Q.above || Q.left) && (x["!outline"] = { above: Q.above, left: Q.left });
        break;
      case 137:
        s.Views || (s.Views = [{}]), s.Views[0] || (s.Views[0] = {}), Q.RTL && (s.Views[0].RTL = true);
        break;
      case 485:
        break;
      case 64:
      case 1053:
        break;
      case 151:
        break;
      case 152:
      case 175:
      case 644:
      case 625:
      case 562:
      case 396:
      case 1112:
      case 1146:
      case 471:
      case 1050:
      case 649:
      case 1105:
      case 589:
      case 607:
      case 564:
      case 1055:
      case 168:
      case 174:
      case 1180:
      case 499:
      case 507:
      case 550:
      case 171:
      case 167:
      case 1177:
      case 169:
      case 1181:
      case 551:
      case 552:
      case 661:
      case 639:
      case 478:
      case 537:
      case 477:
      case 536:
      case 1103:
      case 680:
      case 1104:
      case 1024:
      case 663:
      case 535:
      case 678:
      case 504:
      case 1043:
      case 428:
      case 170:
      case 3072:
      case 50:
      case 2070:
      case 1045:
        break;
      case 35:
        m = true;
        break;
      case 36:
        m = false;
        break;
      case 37:
        m = true;
        break;
      case 38:
        m = false;
        break;
      default:
        if (!H.T) {
          if (!m || o.WTF) throw new Error("Unexpected record 0x" + re.toString(16));
        }
    }
  }, o), delete o.supbooks, delete o["!row"], !x["!ref"] && (v.s.r < 2e6 || d && (d.e.r > 0 || d.e.c > 0 || d.s.r > 0 || d.s.c > 0)) && (x["!ref"] = ut(d || v)), o.sheetRows && x["!ref"]) {
    var ae = Ut(x["!ref"]);
    o.sheetRows <= +ae.e.r && (ae.e.r = o.sheetRows - 1, ae.e.r > v.e.r && (ae.e.r = v.e.r), ae.e.r < ae.s.r && (ae.s.r = ae.e.r), ae.e.c > v.e.c && (ae.e.c = v.e.c), ae.e.c < ae.s.c && (ae.s.c = ae.e.c), x["!fullref"] = x["!ref"], x["!ref"] = ut(ae));
  }
  return z.length > 0 && (x["!merges"] = z), ne.length > 0 && (x["!cols"] = ne), ge.length > 0 && (x["!rows"] = ge), x;
}
function dO(e) {
  var a = [], r = e.match(/^<c:numCache>/), i;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(c) {
    var u = c.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    u && (a[+u[1]] = r ? +u[2] : u[2]);
  });
  var s = ot((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(c) {
    i = c.replace(/<.*?>/g, "");
  }), [a, s, i];
}
function xO(e, a, r, i, s, c) {
  var u = c || { "!type": "chart" };
  if (!e) return c;
  var o = 0, x = 0, d = "A", v = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(m) {
    var g = dO(m);
    v.s.r = v.s.c = 0, v.e.c = o, d = Zt(o), g[0].forEach(function(y, T) {
      u[d + hr(T)] = { t: "n", v: y, z: g[1] }, x = T;
    }), v.e.r < x && (v.e.r = x), ++o;
  }), o > 0 && (u["!ref"] = ut(v)), u;
}
function vO(e, a, r, i, s) {
  if (!e) return e;
  i || (i = { "!id": {} });
  var c = { "!type": "chart", "!drawel": null, "!rel": "" }, u, o = e.match(Uy);
  return o && hd(o[0], c, s, r), (u = e.match(/drawing r:id="(.*?)"/)) && (c["!rel"] = u[1]), i["!id"][c["!rel"]] && (c["!drawel"] = i["!id"][c["!rel"]]), c;
}
function pO(e, a) {
  e.l += 10;
  var r = yr(e);
  return { name: r };
}
function mO(e, a, r, i, s) {
  if (!e) return e;
  i || (i = { "!id": {} });
  var c = { "!type": "chart", "!drawel": null, "!rel": "" }, u = false;
  return cn(e, function(x, d, v) {
    switch (v) {
      case 550:
        c["!rel"] = x;
        break;
      case 651:
        s.Sheets[r] || (s.Sheets[r] = {}), x.name && (s.Sheets[r].CodeName = x.name);
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        u = true;
        break;
      case 36:
        u = false;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(d.T > 0)) {
          if (!(d.T < 0)) {
            if (!u || a.WTF) throw new Error("Unexpected record 0x" + v.toString(16));
          }
        }
    }
  }, a), i["!id"][c["!rel"]] && (c["!drawel"] = i["!id"][c["!rel"]]), c;
}
var Hy = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]], gO = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]], yO = [], EO = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];
function Mm(e, a) {
  for (var r = 0; r != e.length; ++r) for (var i = e[r], s = 0; s != a.length; ++s) {
    var c = a[s];
    if (i[c[0]] == null) i[c[0]] = c[1];
    else switch (c[2]) {
      case "bool":
        typeof i[c[0]] == "string" && (i[c[0]] = Ft(i[c[0]]));
        break;
      case "int":
        typeof i[c[0]] == "string" && (i[c[0]] = parseInt(i[c[0]], 10));
        break;
    }
  }
}
function Lm(e, a) {
  for (var r = 0; r != a.length; ++r) {
    var i = a[r];
    if (e[i[0]] == null) e[i[0]] = i[1];
    else switch (i[2]) {
      case "bool":
        typeof e[i[0]] == "string" && (e[i[0]] = Ft(e[i[0]]));
        break;
      case "int":
        typeof e[i[0]] == "string" && (e[i[0]] = parseInt(e[i[0]], 10));
        break;
    }
  }
}
function jy(e) {
  Lm(e.WBProps, Hy), Lm(e.CalcPr, EO), Mm(e.WBView, gO), Mm(e.Sheets, yO), Es.date1904 = Ft(e.WBProps.date1904);
}
var _O = "][*?/\\".split("");
function TO(e, a) {
  if (e.length > 31) throw new Error("Sheet names cannot exceed 31 chars");
  var r = true;
  return _O.forEach(function(i) {
    if (e.indexOf(i) != -1) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
  }), r;
}
var wO = /<\w+:workbook/;
function SO(e, a) {
  if (!e) throw new Error("Could not find file");
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }, i = false, s = "xmlns", c = {}, u = 0;
  if (e.replace(_r, function(x, d) {
    var v = Pe(x);
    switch (Ba(v[0])) {
      case "<?xml":
        break;
      case "<workbook":
        x.match(wO) && (s = "xmlns" + x.match(/<(\w+):/)[1]), r.xmlns = v[s];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete v[0], r.AppVersion = v;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        Hy.forEach(function(m) {
          if (v[m[0]] != null) switch (m[2]) {
            case "bool":
              r.WBProps[m[0]] = Ft(v[m[0]]);
              break;
            case "int":
              r.WBProps[m[0]] = parseInt(v[m[0]], 10);
              break;
            default:
              r.WBProps[m[0]] = v[m[0]];
          }
        }), v.codeName && (r.WBProps.CodeName = bt(v.codeName));
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete v[0], r.WBView.push(v);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (v.state) {
          case "hidden":
            v.Hidden = 1;
            break;
          case "veryHidden":
            v.Hidden = 2;
            break;
          default:
            v.Hidden = 0;
        }
        delete v.state, v.name = ot(bt(v.name)), delete v[0], r.Sheets.push(v);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        i = true;
        break;
      case "</definedNames>":
        i = false;
        break;
      case "<definedName":
        c = {}, c.Name = bt(v.name), v.comment && (c.Comment = v.comment), v.localSheetId && (c.Sheet = +v.localSheetId), Ft(v.hidden || "0") && (c.Hidden = true), u = d + x.length;
        break;
      case "</definedName>":
        c.Ref = ot(bt(e.slice(u, d))), r.Names.push(c);
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete v[0], r.CalcPr = v;
        break;
      case "<calcPr/>":
        delete v[0], r.CalcPr = v;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        i = true;
        break;
      case "</ext>":
        i = false;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        i = true;
        break;
      case "</AlternateContent>":
        i = false;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!i && a.WTF) throw new Error("unrecognized " + v[0] + " in workbook");
    }
    return x;
  }), P3.indexOf(r.xmlns) === -1) throw new Error("Unknown Namespace: " + r.xmlns);
  return jy(r), r;
}
function AO(e, a) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = xh(e), r.name = yr(e), r;
}
function kO(e, a) {
  var r = {}, i = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var s = a > 8 ? yr(e) : "";
  return s.length > 0 && (r.CodeName = s), r.autoCompressPictures = !!(i & 65536), r.backupFile = !!(i & 64), r.checkCompatibility = !!(i & 4096), r.date1904 = !!(i & 1), r.filterPrivacy = !!(i & 8), r.hidePivotFieldList = !!(i & 1024), r.promptedSolutions = !!(i & 16), r.publishItems = !!(i & 2048), r.refreshAllConnections = !!(i & 262144), r.saveExternalLinkValues = !!(i & 128), r.showBorderUnselectedTables = !!(i & 4), r.showInkAnnotation = !!(i & 32), r.showObjects = ["all", "placeholders", "none"][i >> 13 & 3], r.showPivotChartFilter = !!(i & 32768), r.updateLinks = ["userSet", "never", "always"][i >> 8 & 3], r;
}
function CO(e, a) {
  var r = {};
  return e.read_shift(4), r.ArchID = e.read_shift(4), e.l += a - 8, r;
}
function bO(e, a, r) {
  var i = e.l + a;
  e.l += 4, e.l += 1;
  var s = e.read_shift(4), c = sA(e), u = ob(e, 0, r), o = id(e);
  e.l = i;
  var x = { Name: c, Ptg: u };
  return s < 268435455 && (x.Sheet = s), o && (x.Comment = o), x;
}
function OO(e, a) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, i = [], s = false;
  a || (a = {}), a.biff = 12;
  var c = [], u = [[]];
  return u.SheetNames = [], u.XTI = [], of[16] = { n: "BrtFRTArchID$", f: CO }, cn(e, function(x, d, v) {
    switch (v) {
      case 156:
        u.SheetNames.push(x.name), r.Sheets.push(x);
        break;
      case 153:
        r.WBProps = x;
        break;
      case 39:
        x.Sheet != null && (a.SID = x.Sheet), x.Ref = pr(x.Ptg, null, null, u, a), delete a.SID, delete x.Ptg, c.push(x);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        u[0].length ? u.push([v, x]) : u[0] = [v, x], u[u.length - 1].XTI = [];
        break;
      case 362:
        u.length === 0 && (u[0] = [], u[0].XTI = []), u[u.length - 1].XTI = u[u.length - 1].XTI.concat(x), u.XTI = u.XTI.concat(x);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        i.push(v), s = true;
        break;
      case 36:
        i.pop(), s = false;
        break;
      case 37:
        i.push(v), s = true;
        break;
      case 38:
        i.pop(), s = false;
        break;
      case 16:
        break;
      default:
        if (!d.T) {
          if (!s || a.WTF && i[i.length - 1] != 37 && i[i.length - 1] != 35) throw new Error("Unexpected record 0x" + v.toString(16));
        }
    }
  }, a), jy(r), r.Names = c, r.supbooks = u, r;
}
function RO(e, a, r) {
  return a.slice(-4) === ".bin" ? OO(e, r) : SO(e, r);
}
function DO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? hO(e, i, r, s, c, u, o) : Ab(e, i, r, s, c, u, o);
}
function FO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? mO(e, i, r, s, c) : vO(e, i, r, s, c);
}
function NO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? zC() : PC();
}
function MO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? HC() : jC();
}
function LO(e, a, r, i) {
  return a.slice(-4) === ".bin" ? rC(e, r, i) : W8(e, r, i);
}
function BO(e, a, r) {
  return ky(e, r);
}
function UO(e, a, r) {
  return a.slice(-4) === ".bin" ? g8(e, r) : p8(e, r);
}
function IO(e, a, r) {
  return a.slice(-4) === ".bin" ? BC(e, r) : DC(e, r);
}
function HO(e, a, r) {
  return a.slice(-4) === ".bin" ? bC(e) : kC(e);
}
function jO(e, a, r, i) {
  return r.slice(-4) === ".bin" ? OC(e, a, r, i) : void 0;
}
function zO(e, a, r) {
  return a.slice(-4) === ".bin" ? SC(e, a, r) : AC(e, a, r);
}
var zy = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, Py = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function pa(e, a) {
  var r = e.split(/\s+/), i = [];
  if (i[0] = r[0], r.length === 1) return i;
  var s = e.match(zy), c, u, o, x;
  if (s) for (x = 0; x != s.length; ++x) c = s[x].match(Py), (u = c[1].indexOf(":")) === -1 ? i[c[1]] = c[2].slice(1, c[2].length - 1) : (c[1].slice(0, 6) === "xmlns:" ? o = "xmlns" + c[1].slice(6) : o = c[1].slice(u + 1), i[o] = c[2].slice(1, c[2].length - 1));
  return i;
}
function PO(e) {
  var a = e.split(/\s+/), r = {};
  if (a.length === 1) return r;
  var i = e.match(zy), s, c, u, o;
  if (i) for (o = 0; o != i.length; ++o) s = i[o].match(Py), (c = s[1].indexOf(":")) === -1 ? r[s[1]] = s[2].slice(1, s[2].length - 1) : (s[1].slice(0, 6) === "xmlns:" ? u = "xmlns" + s[1].slice(6) : u = s[1].slice(c + 1), r[u] = s[2].slice(1, s[2].length - 1));
  return r;
}
var Wl;
function GO(e, a) {
  var r = Wl[e] || ot(e);
  return r === "General" ? Ti(a) : fa(r, a);
}
function VO(e, a, r, i) {
  var s = i;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      s = Ft(i);
      break;
    case "i2":
    case "int":
      s = parseInt(i, 10);
      break;
    case "r4":
    case "float":
      s = parseFloat(i);
      break;
    case "date":
    case "dateTime.tz":
      s = ir(i);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[ot(a)] = s;
}
function XO(e, a, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== false) try {
      e.t === "e" ? e.w = e.w || Oi[e.v] : a === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = e0(e.v) : e.w = Ti(e.v) : e.w = GO(a || "General", e.v);
    } catch (c) {
      if (r.WTF) throw c;
    }
    try {
      var i = Wl[a] || a || "General";
      if (r.cellNF && (e.z = i), r.cellDates && e.t == "n" && Rs(i)) {
        var s = mi(e.v);
        s && (e.t = "d", e.v = new Date(s.y, s.m - 1, s.d, s.H, s.M, s.S, s.u));
      }
    } catch (c) {
      if (r.WTF) throw c;
    }
  }
}
function YO(e, a, r) {
  if (r.cellStyles && a.Interior) {
    var i = a.Interior;
    i.Pattern && (i.patternType = V8[i.Pattern] || i.Pattern);
  }
  e[a.ID] = a;
}
function $O(e, a, r, i, s, c, u, o, x, d) {
  var v = "General", m = i.StyleID, g = {};
  d = d || {};
  var y = [], T = 0;
  for (m === void 0 && o && (m = o.StyleID), m === void 0 && u && (m = u.StyleID); c[m] !== void 0 && (c[m].nf && (v = c[m].nf), c[m].Interior && y.push(c[m].Interior), !!c[m].Parent); ) m = c[m].Parent;
  switch (r.Type) {
    case "Boolean":
      i.t = "b", i.v = Ft(e);
      break;
    case "String":
      i.t = "s", i.r = am(ot(e)), i.v = e.indexOf("<") > -1 ? ot(a || e).replace(/<.*?>/g, "") : i.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), i.v = (ir(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3), i.v !== i.v ? i.v = ot(e) : i.v < 60 && (i.v = i.v - 1), (!v || v == "General") && (v = "yyyy-mm-dd");
    case "Number":
      i.v === void 0 && (i.v = +e), i.t || (i.t = "n");
      break;
    case "Error":
      i.t = "e", i.v = ny[e], d.cellText !== false && (i.w = e);
      break;
    default:
      e == "" && a == "" ? i.t = "z" : (i.t = "s", i.v = am(a || e));
      break;
  }
  if (XO(i, v, d), d.cellFormula !== false) if (i.Formula) {
    var E = ot(i.Formula);
    E.charCodeAt(0) == 61 && (E = E.slice(1)), i.f = ys(E, s), delete i.Formula, i.ArrayRange == "RC" ? i.F = ys("RC:RC", s) : i.ArrayRange && (i.F = ys(i.ArrayRange, s), x.push([Ut(i.F), i.F]));
  } else for (T = 0; T < x.length; ++T) s.r >= x[T][0].s.r && s.r <= x[T][0].e.r && s.c >= x[T][0].s.c && s.c <= x[T][0].e.c && (i.F = x[T][1]);
  d.cellStyles && (y.forEach(function(_) {
    !g.patternType && _.patternType && (g.patternType = _.patternType);
  }), i.s = g), i.StyleID !== void 0 && (i.ixfe = i.StyleID);
}
function qO(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function Zo(e, a) {
  var r = a || {};
  R2();
  var i = Ll(ed(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (i = bt(i));
  var s = i.slice(0, 1024).toLowerCase(), c = false;
  if (s = s.replace(/".*?"/g, ""), (s.indexOf(">") & 1023) > Math.min(s.indexOf(",") & 1023, s.indexOf(";") & 1023)) {
    var u = or(r);
    return u.type = "string", a0.to_workbook(i, u);
  }
  if (s.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(Ie) {
    s.indexOf("<" + Ie) >= 0 && (c = true);
  }), c) return aR(i, r);
  Wl = { "General Number": "General", "General Date": We[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": We[15], "Short Date": We[14], "Long Time": We[19], "Medium Time": We[18], "Short Time": We[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: We[2], Standard: We[4], Percent: We[10], Scientific: We[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var o, x = [], d, v = {}, m = [], g = r.dense ? [] : {}, y = "", T = {}, E = {}, _ = pa('<Data ss:Type="String">'), O = 0, F = 0, k = 0, M = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, X = {}, z = {}, C = "", S = 0, w = [], N = {}, B = {}, U = 0, ne = [], ge = [], fe = {}, J = [], ae, we = false, Q = [], H = [], re = {}, R = 0, j = 0, q = { Sheets: [], WBProps: { date1904: false } }, K = {};
  r0.lastIndex = 0, i = i.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var ie = ""; o = r0.exec(i); ) switch (o[3] = (ie = o[3]).toLowerCase()) {
    case "data":
      if (ie == "data") {
        if (o[1] === "/") {
          if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
        } else o[0].charAt(o[0].length - 2) !== "/" && x.push([o[3], true]);
        break;
      }
      if (x[x.length - 1][1]) break;
      o[1] === "/" ? $O(i.slice(O, o.index), C, _, x[x.length - 1][0] == "comment" ? fe : T, { c: F, r: k }, X, J[F], E, Q, r) : (C = "", _ = pa(o[0]), O = o.index + o[0].length);
      break;
    case "cell":
      if (o[1] === "/") if (ge.length > 0 && (T.c = ge), (!r.sheetRows || r.sheetRows > k) && T.v !== void 0 && (r.dense ? (g[k] || (g[k] = []), g[k][F] = T) : g[Zt(F) + hr(k)] = T), T.HRef && (T.l = { Target: ot(T.HRef) }, T.HRefScreenTip && (T.l.Tooltip = T.HRefScreenTip), delete T.HRef, delete T.HRefScreenTip), (T.MergeAcross || T.MergeDown) && (R = F + (parseInt(T.MergeAcross, 10) | 0), j = k + (parseInt(T.MergeDown, 10) | 0), w.push({ s: { c: F, r: k }, e: { c: R, r: j } })), !r.sheetStubs) T.MergeAcross ? F = R + 1 : ++F;
      else if (T.MergeAcross || T.MergeDown) {
        for (var Ae = F; Ae <= R; ++Ae) for (var pe = k; pe <= j; ++pe) (Ae > F || pe > k) && (r.dense ? (g[pe] || (g[pe] = []), g[pe][Ae] = { t: "z" }) : g[Zt(Ae) + hr(pe)] = { t: "z" });
        F = R + 1;
      } else ++F;
      else T = PO(o[0]), T.Index && (F = +T.Index - 1), F < M.s.c && (M.s.c = F), F > M.e.c && (M.e.c = F), o[0].slice(-2) === "/>" && ++F, ge = [];
      break;
    case "row":
      o[1] === "/" || o[0].slice(-2) === "/>" ? (k < M.s.r && (M.s.r = k), k > M.e.r && (M.e.r = k), o[0].slice(-2) === "/>" && (E = pa(o[0]), E.Index && (k = +E.Index - 1)), F = 0, ++k) : (E = pa(o[0]), E.Index && (k = +E.Index - 1), re = {}, (E.AutoFitHeight == "0" || E.Height) && (re.hpx = parseInt(E.Height, 10), re.hpt = Ay(re.hpx), H[k] = re), E.Hidden == "1" && (re.hidden = true, H[k] = re));
      break;
    case "worksheet":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
        m.push(y), M.s.r <= M.e.r && M.s.c <= M.e.c && (g["!ref"] = ut(M), r.sheetRows && r.sheetRows <= M.e.r && (g["!fullref"] = g["!ref"], M.e.r = r.sheetRows - 1, g["!ref"] = ut(M))), w.length && (g["!merges"] = w), J.length > 0 && (g["!cols"] = J), H.length > 0 && (g["!rows"] = H), v[y] = g;
      } else M = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, k = F = 0, x.push([o[3], false]), d = pa(o[0]), y = ot(d.Name), g = r.dense ? [] : {}, w = [], Q = [], H = [], K = { name: y, Hidden: 0 }, q.Sheets.push(K);
      break;
    case "table":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
      } else {
        if (o[0].slice(-2) == "/>") break;
        x.push([o[3], false]), J = [], we = false;
      }
      break;
    case "style":
      o[1] === "/" ? YO(X, z, r) : z = pa(o[0]);
      break;
    case "numberformat":
      z.nf = ot(pa(o[0]).Format || "General"), Wl[z.nf] && (z.nf = Wl[z.nf]);
      for (var ye = 0; ye != 392 && We[ye] != z.nf; ++ye) ;
      if (ye == 392) {
        for (ye = 57; ye != 392; ++ye) if (We[ye] == null) {
          yi(z.nf, ye);
          break;
        }
      }
      break;
    case "column":
      if (x[x.length - 1][0] !== "table") break;
      if (ae = pa(o[0]), ae.Hidden && (ae.hidden = true, delete ae.Hidden), ae.Width && (ae.wpx = parseInt(ae.Width, 10)), !we && ae.wpx > 10) {
        we = true, Ar = wy;
        for (var _e = 0; _e < J.length; ++_e) J[_e] && Cs(J[_e]);
      }
      we && Cs(ae), J[ae.Index - 1 || J.length] = ae;
      for (var Re = 0; Re < +ae.Span; ++Re) J[J.length] = or(ae);
      break;
    case "namedrange":
      if (o[1] === "/") break;
      q.Names || (q.Names = []);
      var V = Pe(o[0]), Ge = { Name: V.Name, Ref: ys(V.RefersTo.slice(1), { r: 0, c: 0 }) };
      q.Sheets.length > 0 && (Ge.Sheet = q.Sheets.length - 1), q.Names.push(Ge);
      break;
    case "namedcell":
      break;
    case "b":
      break;
    case "i":
      break;
    case "u":
      break;
    case "s":
      break;
    case "em":
      break;
    case "h2":
      break;
    case "h3":
      break;
    case "sub":
      break;
    case "sup":
      break;
    case "span":
      break;
    case "alignment":
      break;
    case "borders":
      break;
    case "border":
      break;
    case "font":
      if (o[0].slice(-2) === "/>") break;
      o[1] === "/" ? C += i.slice(S, o.index) : S = o.index + o[0].length;
      break;
    case "interior":
      if (!r.cellStyles) break;
      z.Interior = pa(o[0]);
      break;
    case "protection":
      break;
    case "author":
    case "title":
    case "description":
    case "created":
    case "keywords":
    case "subject":
    case "category":
    case "company":
    case "lastauthor":
    case "lastsaved":
    case "lastprinted":
    case "version":
    case "revision":
    case "totaltime":
    case "hyperlinkbase":
    case "manager":
    case "contentstatus":
    case "identifier":
    case "language":
    case "appname":
      if (o[0].slice(-2) === "/>") break;
      o[1] === "/" ? DA(N, ie, i.slice(U, o.index)) : U = o.index + o[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
      } else x.push([o[3], false]);
      break;
    case "comment":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
        qO(fe), ge.push(fe);
      } else x.push([o[3], false]), d = pa(o[0]), fe = { a: d.Author };
      break;
    case "autofilter":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
      } else if (o[0].charAt(o[0].length - 2) !== "/") {
        var Le = pa(o[0]);
        g["!autofilter"] = { ref: ys(Le.Range).replace(/\$/g, "") }, x.push([o[3], true]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
      } else o[0].charAt(o[0].length - 2) !== "/" && x.push([o[3], true]);
      break;
    case "pixelsperinch":
      break;
    case "componentoptions":
    case "documentproperties":
    case "customdocumentproperties":
    case "officedocumentsettings":
    case "pivottable":
    case "pivotcache":
    case "names":
    case "mapinfo":
    case "pagebreaks":
    case "querytable":
    case "sorting":
    case "schema":
    case "conditionalformatting":
    case "smarttagtype":
    case "smarttags":
    case "excelworkbook":
    case "workbookoptions":
    case "worksheetoptions":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
      } else o[0].charAt(o[0].length - 2) !== "/" && x.push([o[3], true]);
      break;
    case "null":
      break;
    default:
      if (x.length == 0 && o[3] == "document" || x.length == 0 && o[3] == "uof") return zm(i, r);
      var Be = true;
      switch (x[x.length - 1][0]) {
        case "officedocumentsettings":
          switch (o[3]) {
            case "allowpng":
              break;
            case "removepersonalinformation":
              break;
            case "downloadcomponents":
              break;
            case "locationofcomponents":
              break;
            case "colors":
              break;
            case "color":
              break;
            case "index":
              break;
            case "rgb":
              break;
            case "targetscreensize":
              break;
            case "readonlyrecommended":
              break;
            default:
              Be = false;
          }
          break;
        case "componentoptions":
          switch (o[3]) {
            case "toolbar":
              break;
            case "hideofficelogo":
              break;
            case "spreadsheetautofit":
              break;
            case "label":
              break;
            case "caption":
              break;
            case "maxheight":
              break;
            case "maxwidth":
              break;
            case "nextsheetnumber":
              break;
            default:
              Be = false;
          }
          break;
        case "excelworkbook":
          switch (o[3]) {
            case "date1904":
              q.WBProps.date1904 = true;
              break;
            case "windowheight":
              break;
            case "windowwidth":
              break;
            case "windowtopx":
              break;
            case "windowtopy":
              break;
            case "tabratio":
              break;
            case "protectstructure":
              break;
            case "protectwindow":
              break;
            case "protectwindows":
              break;
            case "activesheet":
              break;
            case "displayinknotes":
              break;
            case "firstvisiblesheet":
              break;
            case "supbook":
              break;
            case "sheetname":
              break;
            case "sheetindex":
              break;
            case "sheetindexfirst":
              break;
            case "sheetindexlast":
              break;
            case "dll":
              break;
            case "acceptlabelsinformulas":
              break;
            case "donotsavelinkvalues":
              break;
            case "iteration":
              break;
            case "maxiterations":
              break;
            case "maxchange":
              break;
            case "path":
              break;
            case "xct":
              break;
            case "count":
              break;
            case "selectedsheets":
              break;
            case "calculation":
              break;
            case "uncalced":
              break;
            case "startupprompt":
              break;
            case "crn":
              break;
            case "externname":
              break;
            case "formula":
              break;
            case "colfirst":
              break;
            case "collast":
              break;
            case "wantadvise":
              break;
            case "boolean":
              break;
            case "error":
              break;
            case "text":
              break;
            case "ole":
              break;
            case "noautorecover":
              break;
            case "publishobjects":
              break;
            case "donotcalculatebeforesave":
              break;
            case "number":
              break;
            case "refmoder1c1":
              break;
            case "embedsavesmarttags":
              break;
            default:
              Be = false;
          }
          break;
        case "workbookoptions":
          switch (o[3]) {
            case "owcversion":
              break;
            case "height":
              break;
            case "width":
              break;
            default:
              Be = false;
          }
          break;
        case "worksheetoptions":
          switch (o[3]) {
            case "visible":
              if (o[0].slice(-2) !== "/>") if (o[1] === "/") switch (i.slice(U, o.index)) {
                case "SheetHidden":
                  K.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  K.Hidden = 2;
                  break;
              }
              else U = o.index + o[0].length;
              break;
            case "header":
              g["!margins"] || Kl(g["!margins"] = {}, "xlml"), isNaN(+Pe(o[0]).Margin) || (g["!margins"].header = +Pe(o[0]).Margin);
              break;
            case "footer":
              g["!margins"] || Kl(g["!margins"] = {}, "xlml"), isNaN(+Pe(o[0]).Margin) || (g["!margins"].footer = +Pe(o[0]).Margin);
              break;
            case "pagemargins":
              var De = Pe(o[0]);
              g["!margins"] || Kl(g["!margins"] = {}, "xlml"), isNaN(+De.Top) || (g["!margins"].top = +De.Top), isNaN(+De.Left) || (g["!margins"].left = +De.Left), isNaN(+De.Right) || (g["!margins"].right = +De.Right), isNaN(+De.Bottom) || (g["!margins"].bottom = +De.Bottom);
              break;
            case "displayrighttoleft":
              q.Views || (q.Views = []), q.Views[0] || (q.Views[0] = {}), q.Views[0].RTL = true;
              break;
            case "freezepanes":
              break;
            case "frozennosplit":
              break;
            case "splithorizontal":
            case "splitvertical":
              break;
            case "donotdisplaygridlines":
              break;
            case "activerow":
              break;
            case "activecol":
              break;
            case "toprowbottompane":
              break;
            case "leftcolumnrightpane":
              break;
            case "unsynced":
              break;
            case "print":
              break;
            case "printerrors":
              break;
            case "panes":
              break;
            case "scale":
              break;
            case "pane":
              break;
            case "number":
              break;
            case "layout":
              break;
            case "pagesetup":
              break;
            case "selected":
              break;
            case "protectobjects":
              break;
            case "enableselection":
              break;
            case "protectscenarios":
              break;
            case "validprinterinfo":
              break;
            case "horizontalresolution":
              break;
            case "verticalresolution":
              break;
            case "numberofcopies":
              break;
            case "activepane":
              break;
            case "toprowvisible":
              break;
            case "leftcolumnvisible":
              break;
            case "fittopage":
              break;
            case "rangeselection":
              break;
            case "papersizeindex":
              break;
            case "pagelayoutzoom":
              break;
            case "pagebreakzoom":
              break;
            case "filteron":
              break;
            case "fitwidth":
              break;
            case "fitheight":
              break;
            case "commentslayout":
              break;
            case "zoom":
              break;
            case "lefttoright":
              break;
            case "gridlines":
              break;
            case "allowsort":
              break;
            case "allowfilter":
              break;
            case "allowinsertrows":
              break;
            case "allowdeleterows":
              break;
            case "allowinsertcols":
              break;
            case "allowdeletecols":
              break;
            case "allowinserthyperlinks":
              break;
            case "allowformatcells":
              break;
            case "allowsizecols":
              break;
            case "allowsizerows":
              break;
            case "nosummaryrowsbelowdetail":
              g["!outline"] || (g["!outline"] = {}), g["!outline"].above = true;
              break;
            case "tabcolorindex":
              break;
            case "donotdisplayheadings":
              break;
            case "showpagelayoutzoom":
              break;
            case "nosummarycolumnsrightdetail":
              g["!outline"] || (g["!outline"] = {}), g["!outline"].left = true;
              break;
            case "blackandwhite":
              break;
            case "donotdisplayzeros":
              break;
            case "displaypagebreak":
              break;
            case "rowcolheadings":
              break;
            case "donotdisplayoutline":
              break;
            case "noorientation":
              break;
            case "allowusepivottables":
              break;
            case "zeroheight":
              break;
            case "viewablerange":
              break;
            case "selection":
              break;
            case "protectcontents":
              break;
            default:
              Be = false;
          }
          break;
        case "pivottable":
        case "pivotcache":
          switch (o[3]) {
            case "immediateitemsondrop":
              break;
            case "showpagemultipleitemlabel":
              break;
            case "compactrowindent":
              break;
            case "location":
              break;
            case "pivotfield":
              break;
            case "orientation":
              break;
            case "layoutform":
              break;
            case "layoutsubtotallocation":
              break;
            case "layoutcompactrow":
              break;
            case "position":
              break;
            case "pivotitem":
              break;
            case "datatype":
              break;
            case "datafield":
              break;
            case "sourcename":
              break;
            case "parentfield":
              break;
            case "ptlineitems":
              break;
            case "ptlineitem":
              break;
            case "countofsameitems":
              break;
            case "item":
              break;
            case "itemtype":
              break;
            case "ptsource":
              break;
            case "cacheindex":
              break;
            case "consolidationreference":
              break;
            case "filename":
              break;
            case "reference":
              break;
            case "nocolumngrand":
              break;
            case "norowgrand":
              break;
            case "blanklineafteritems":
              break;
            case "hidden":
              break;
            case "subtotal":
              break;
            case "basefield":
              break;
            case "mapchilditems":
              break;
            case "function":
              break;
            case "refreshonfileopen":
              break;
            case "printsettitles":
              break;
            case "mergelabels":
              break;
            case "defaultversion":
              break;
            case "refreshname":
              break;
            case "refreshdate":
              break;
            case "refreshdatecopy":
              break;
            case "versionlastrefresh":
              break;
            case "versionlastupdate":
              break;
            case "versionupdateablemin":
              break;
            case "versionrefreshablemin":
              break;
            case "calculation":
              break;
            default:
              Be = false;
          }
          break;
        case "pagebreaks":
          switch (o[3]) {
            case "colbreaks":
              break;
            case "colbreak":
              break;
            case "rowbreaks":
              break;
            case "rowbreak":
              break;
            case "colstart":
              break;
            case "colend":
              break;
            case "rowend":
              break;
            default:
              Be = false;
          }
          break;
        case "autofilter":
          switch (o[3]) {
            case "autofiltercolumn":
              break;
            case "autofiltercondition":
              break;
            case "autofilterand":
              break;
            case "autofilteror":
              break;
            default:
              Be = false;
          }
          break;
        case "querytable":
          switch (o[3]) {
            case "id":
              break;
            case "autoformatfont":
              break;
            case "autoformatpattern":
              break;
            case "querysource":
              break;
            case "querytype":
              break;
            case "enableredirections":
              break;
            case "refreshedinxl9":
              break;
            case "urlstring":
              break;
            case "htmltables":
              break;
            case "connection":
              break;
            case "commandtext":
              break;
            case "refreshinfo":
              break;
            case "notitles":
              break;
            case "nextid":
              break;
            case "columninfo":
              break;
            case "overwritecells":
              break;
            case "donotpromptforfile":
              break;
            case "textwizardsettings":
              break;
            case "source":
              break;
            case "number":
              break;
            case "decimal":
              break;
            case "thousandseparator":
              break;
            case "trailingminusnumbers":
              break;
            case "formatsettings":
              break;
            case "fieldtype":
              break;
            case "delimiters":
              break;
            case "tab":
              break;
            case "comma":
              break;
            case "autoformatname":
              break;
            case "versionlastedit":
              break;
            case "versionlastrefresh":
              break;
            default:
              Be = false;
          }
          break;
        case "datavalidation":
          switch (o[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            case "cellrangelist":
              break;
            default:
              Be = false;
          }
          break;
        case "sorting":
        case "conditionalformatting":
          switch (o[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "cellrangelist":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            default:
              Be = false;
          }
          break;
        case "mapinfo":
        case "schema":
        case "data":
          switch (o[3]) {
            case "map":
              break;
            case "entry":
              break;
            case "range":
              break;
            case "xpath":
              break;
            case "field":
              break;
            case "xsdtype":
              break;
            case "filteron":
              break;
            case "aggregate":
              break;
            case "elementtype":
              break;
            case "attributetype":
              break;
            case "schema":
            case "element":
            case "complextype":
            case "datatype":
            case "all":
            case "attribute":
            case "extends":
              break;
            case "row":
              break;
            default:
              Be = false;
          }
          break;
        case "smarttags":
          break;
        default:
          Be = false;
          break;
      }
      if (Be || o[3].match(/!\[CDATA/)) break;
      if (!x[x.length - 1][1]) throw "Unrecognized tag: " + o[3] + "|" + x.join("|");
      if (x[x.length - 1][0] === "customdocumentproperties") {
        if (o[0].slice(-2) === "/>") break;
        o[1] === "/" ? VO(B, ie, ne, i.slice(U, o.index)) : (ne = o, U = o.index + o[0].length);
        break;
      }
      if (r.WTF) throw "Unrecognized tag: " + o[3] + "|" + x.join("|");
  }
  var ke = {};
  return !r.bookSheets && !r.bookProps && (ke.Sheets = v), ke.SheetNames = m, ke.Workbook = q, ke.SSF = or(We), ke.Props = N, ke.Custprops = B, ke;
}
function gh(e, a) {
  switch (vd(a = a || {}), a.type || "base64") {
    case "base64":
      return Zo($r(e), a);
    case "binary":
    case "buffer":
    case "file":
      return Zo(e, a);
    case "array":
      return Zo(ki(e), a);
  }
}
function KO(e) {
  var a = {}, r = e.content;
  if (r.l = 28, a.AnsiUserType = r.read_shift(0, "lpstr-ansi"), a.AnsiClipboardFormat = fA(r), r.length - r.l <= 4) return a;
  var i = r.read_shift(4);
  if (i == 0 || i > 40 || (r.l -= 4, a.Reserved1 = r.read_shift(0, "lpstr-ansi"), r.length - r.l <= 4) || (i = r.read_shift(4), i !== 1907505652) || (a.UnicodeClipboardFormat = uA(r), i = r.read_shift(4), i == 0 || i > 40)) return a;
  r.l -= 4, a.Reserved2 = r.read_shift(0, "lpwstr");
}
var WO = [60, 1084, 2066, 2165, 2175];
function ZO(e, a, r, i, s) {
  var c = i, u = [], o = r.slice(r.l, r.l + c);
  if (s && s.enc && s.enc.insitu && o.length > 0) switch (e) {
    case 9:
    case 521:
    case 1033:
    case 2057:
    case 47:
    case 405:
    case 225:
    case 406:
    case 312:
    case 404:
    case 10:
      break;
    case 133:
      break;
    default:
      s.enc.insitu(o);
  }
  u.push(o), r.l += c;
  for (var x = en(r, r.l), d = yh[x], v = 0; d != null && WO.indexOf(x) > -1; ) c = en(r, r.l + 2), v = r.l + 4, x == 2066 ? v += 4 : (x == 2165 || x == 2175) && (v += 12), o = r.slice(v, r.l + 4 + c), u.push(o), r.l += 4 + c, d = yh[x = en(r, r.l)];
  var m = Ln(u);
  ur(m, 0);
  var g = 0;
  m.lens = [];
  for (var y = 0; y < u.length; ++y) m.lens.push(g), g += u[y].length;
  if (m.length < i) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + m.length + " < " + i;
  return a.f(m, m.length, s);
}
function Ra(e, a, r) {
  if (e.t !== "z" && e.XF) {
    var i = 0;
    try {
      i = e.z || e.XF.numFmtId || 0, a.cellNF && (e.z = We[i]);
    } catch (c) {
      if (a.WTF) throw c;
    }
    if (!a || a.cellText !== false) try {
      e.t === "e" ? e.w = e.w || Oi[e.v] : i === 0 || i == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = e0(e.v) : e.w = Ti(e.v) : e.w = fa(i, e.v, { date1904: !!r, dateNF: a && a.dateNF });
    } catch (c) {
      if (a.WTF) throw c;
    }
    if (a.cellDates && i && e.t == "n" && Rs(We[i] || String(i))) {
      var s = mi(e.v);
      s && (e.t = "d", e.v = new Date(s.y, s.m - 1, s.d, s.H, s.M, s.S, s.u));
    }
  }
}
function Gc(e, a, r) {
  return { v: e, ixfe: a, t: r };
}
function QO(e, a) {
  var r = { opts: {} }, i = {}, s = a.dense ? [] : {}, c = {}, u = {}, o = null, x = [], d = "", v = {}, m, g = "", y, T, E, _, O = {}, F = [], k, M, X = [], z = [], C = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, S = {}, w = function($e) {
    return $e < 8 ? Ei[$e] : $e < 64 && z[$e - 8] || Ei[$e];
  }, N = function($e, xt, Rt) {
    var vt = xt.XF.data;
    if (!(!vt || !vt.patternType || !Rt || !Rt.cellStyles)) {
      xt.s = {}, xt.s.patternType = vt.patternType;
      var Tr;
      (Tr = n0(w(vt.icvFore))) && (xt.s.fgColor = { rgb: Tr }), (Tr = n0(w(vt.icvBack))) && (xt.s.bgColor = { rgb: Tr });
    }
  }, B = function($e, xt, Rt) {
    if (!(re > 1) && !(Rt.sheetRows && $e.r >= Rt.sheetRows)) {
      if (Rt.cellStyles && xt.XF && xt.XF.data && N($e, xt, Rt), delete xt.ixfe, delete xt.XF, m = $e, g = Ye($e), (!u || !u.s || !u.e) && (u = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), $e.r < u.s.r && (u.s.r = $e.r), $e.c < u.s.c && (u.s.c = $e.c), $e.r + 1 > u.e.r && (u.e.r = $e.r + 1), $e.c + 1 > u.e.c && (u.e.c = $e.c + 1), Rt.cellFormula && xt.f) {
        for (var vt = 0; vt < F.length; ++vt) if (!(F[vt][0].s.c > $e.c || F[vt][0].s.r > $e.r) && !(F[vt][0].e.c < $e.c || F[vt][0].e.r < $e.r)) {
          xt.F = ut(F[vt][0]), (F[vt][0].s.c != $e.c || F[vt][0].s.r != $e.r) && delete xt.f, xt.f && (xt.f = "" + pr(F[vt][1], u, $e, Q, U));
          break;
        }
      }
      Rt.dense ? (s[$e.r] || (s[$e.r] = []), s[$e.r][$e.c] = xt) : s[g] = xt;
    }
  }, U = { enc: false, sbcch: 0, snames: [], sharedf: O, arrayf: F, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!a && !!a.cellStyles, WTF: !!a && !!a.wtf };
  a.password && (U.password = a.password);
  var ne, ge = [], fe = [], J = [], ae = [], we = false, Q = [];
  Q.SheetNames = U.snames, Q.sharedf = U.sharedf, Q.arrayf = U.arrayf, Q.names = [], Q.XTI = [];
  var H = 0, re = 0, R = 0, j = [], q = [], K;
  U.codepage = 1200, ya(1200);
  for (var ie = false; e.l < e.length - 1; ) {
    var Ae = e.l, pe = e.read_shift(2);
    if (pe === 0 && H === 10) break;
    var ye = e.l === e.length ? 0 : e.read_shift(2), _e = yh[pe];
    if (_e && _e.f) {
      if (a.bookSheets && H === 133 && pe !== 133) break;
      if (H = pe, _e.r === 2 || _e.r == 12) {
        var Re = e.read_shift(2);
        if (ye -= 2, !U.enc && Re !== pe && ((Re & 255) << 8 | Re >> 8) !== pe) throw new Error("rt mismatch: " + Re + "!=" + pe);
        _e.r == 12 && (e.l += 10, ye -= 10);
      }
      var V = {};
      if (pe === 10 ? V = _e.f(e, ye, U) : V = ZO(pe, _e, e, ye, U), re == 0 && [9, 521, 1033, 2057].indexOf(H) === -1) continue;
      switch (pe) {
        case 34:
          r.opts.Date1904 = C.WBProps.date1904 = V;
          break;
        case 134:
          r.opts.WriteProtect = true;
          break;
        case 47:
          if (U.enc || (e.l = 0), U.enc = V, !a.password) throw new Error("File is password-protected");
          if (V.valid == null) throw new Error("Encryption scheme unsupported");
          if (!V.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          U.lastuser = V;
          break;
        case 66:
          var Ge = Number(V);
          switch (Ge) {
            case 21010:
              Ge = 1200;
              break;
            case 32768:
              Ge = 1e4;
              break;
            case 32769:
              Ge = 1252;
              break;
          }
          ya(U.codepage = Ge), ie = true;
          break;
        case 317:
          U.rrtabid = V;
          break;
        case 25:
          U.winlocked = V;
          break;
        case 439:
          r.opts.RefreshAll = V;
          break;
        case 12:
          r.opts.CalcCount = V;
          break;
        case 16:
          r.opts.CalcDelta = V;
          break;
        case 17:
          r.opts.CalcIter = V;
          break;
        case 13:
          r.opts.CalcMode = V;
          break;
        case 14:
          r.opts.CalcPrecision = V;
          break;
        case 95:
          r.opts.CalcSaveRecalc = V;
          break;
        case 15:
          U.CalcRefMode = V;
          break;
        case 2211:
          r.opts.FullCalc = V;
          break;
        case 129:
          V.fDialog && (s["!type"] = "dialog"), V.fBelow || ((s["!outline"] || (s["!outline"] = {})).above = true), V.fRight || ((s["!outline"] || (s["!outline"] = {})).left = true);
          break;
        case 224:
          X.push(V);
          break;
        case 430:
          Q.push([V]), Q[Q.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          Q[Q.length - 1].push(V);
          break;
        case 24:
        case 536:
          K = { Name: V.Name, Ref: pr(V.rgce, u, null, Q, U) }, V.itab > 0 && (K.Sheet = V.itab - 1), Q.names.push(K), Q[0] || (Q[0] = [], Q[0].XTI = []), Q[Q.length - 1].push(V), V.Name == "_xlnm._FilterDatabase" && V.itab > 0 && V.rgce && V.rgce[0] && V.rgce[0][0] && V.rgce[0][0][0] == "PtgArea3d" && (q[V.itab - 1] = { ref: ut(V.rgce[0][0][1][2]) });
          break;
        case 22:
          U.ExternCount = V;
          break;
        case 23:
          Q.length == 0 && (Q[0] = [], Q[0].XTI = []), Q[Q.length - 1].XTI = Q[Q.length - 1].XTI.concat(V), Q.XTI = Q.XTI.concat(V);
          break;
        case 2196:
          if (U.biff < 8) break;
          K != null && (K.Comment = V[1]);
          break;
        case 18:
          s["!protect"] = V;
          break;
        case 19:
          V !== 0 && U.WTF && console.error("Password verifier: " + V);
          break;
        case 133:
          c[V.pos] = V, U.snames.push(V.name);
          break;
        case 10:
          {
            if (--re) break;
            if (u.e) {
              if (u.e.r > 0 && u.e.c > 0) {
                if (u.e.r--, u.e.c--, s["!ref"] = ut(u), a.sheetRows && a.sheetRows <= u.e.r) {
                  var Le = u.e.r;
                  u.e.r = a.sheetRows - 1, s["!fullref"] = s["!ref"], s["!ref"] = ut(u), u.e.r = Le;
                }
                u.e.r++, u.e.c++;
              }
              ge.length > 0 && (s["!merges"] = ge), fe.length > 0 && (s["!objects"] = fe), J.length > 0 && (s["!cols"] = J), ae.length > 0 && (s["!rows"] = ae), C.Sheets.push(S);
            }
            d === "" ? v = s : i[d] = s, s = a.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (U.biff === 8 && (U.biff = { 9: 2, 521: 3, 1033: 4 }[pe] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[V.BIFFVer] || 8), U.biffguess = V.BIFFVer == 0, V.BIFFVer == 0 && V.dt == 4096 && (U.biff = 5, ie = true, ya(U.codepage = 28591)), U.biff == 8 && V.BIFFVer == 0 && V.dt == 16 && (U.biff = 2), re++) break;
            if (s = a.dense ? [] : {}, U.biff < 8 && !ie && (ie = true, ya(U.codepage = a.codepage || 1252)), U.biff < 5 || V.BIFFVer == 0 && V.dt == 4096) {
              d === "" && (d = "Sheet1"), u = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Be = { pos: e.l - ye, name: d };
              c[Be.pos] = Be, U.snames.push(d);
            } else d = (c[Ae] || { name: "" }).name;
            V.dt == 32 && (s["!type"] = "chart"), V.dt == 64 && (s["!type"] = "macro"), ge = [], fe = [], U.arrayf = F = [], J = [], ae = [], we = false, S = { Hidden: (c[Ae] || { hs: 0 }).hs, name: d };
          }
          break;
        case 515:
        case 3:
        case 2:
          s["!type"] == "chart" && (a.dense ? (s[V.r] || [])[V.c] : s[Ye({ c: V.c, r: V.r })]) && ++V.c, k = { ixfe: V.ixfe, XF: X[V.ixfe] || {}, v: V.val, t: "n" }, R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: V.c, r: V.r }, k, a);
          break;
        case 5:
        case 517:
          k = { ixfe: V.ixfe, XF: X[V.ixfe], v: V.val, t: V.t }, R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: V.c, r: V.r }, k, a);
          break;
        case 638:
          k = { ixfe: V.ixfe, XF: X[V.ixfe], v: V.rknum, t: "n" }, R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: V.c, r: V.r }, k, a);
          break;
        case 189:
          for (var De = V.c; De <= V.C; ++De) {
            var ke = V.rkrec[De - V.c][0];
            k = { ixfe: ke, XF: X[ke], v: V.rkrec[De - V.c][1], t: "n" }, R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: De, r: V.r }, k, a);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (V.val == "String") {
              o = V;
              break;
            }
            if (k = Gc(V.val, V.cell.ixfe, V.tt), k.XF = X[k.ixfe], a.cellFormula) {
              var Ie = V.formula;
              if (Ie && Ie[0] && Ie[0][0] && Ie[0][0][0] == "PtgExp") {
                var Ke = Ie[0][0][1][0], Ze = Ie[0][0][1][1], At = Ye({ r: Ke, c: Ze });
                O[At] ? k.f = "" + pr(V.formula, u, V.cell, Q, U) : k.F = ((a.dense ? (s[Ke] || [])[Ze] : s[At]) || {}).F;
              } else k.f = "" + pr(V.formula, u, V.cell, Q, U);
            }
            R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B(V.cell, k, a), o = V;
          }
          break;
        case 7:
        case 519:
          if (o) o.val = V, k = Gc(V, o.cell.ixfe, "s"), k.XF = X[k.ixfe], a.cellFormula && (k.f = "" + pr(o.formula, u, o.cell, Q, U)), R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B(o.cell, k, a), o = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            F.push(V);
            var It = Ye(V[0].s);
            if (y = a.dense ? (s[V[0].s.r] || [])[V[0].s.c] : s[It], a.cellFormula && y) {
              if (!o || !It || !y) break;
              y.f = "" + pr(V[1], u, V[0], Q, U), y.F = ut(V[0]);
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula) break;
            if (g) {
              if (!o) break;
              O[Ye(o.cell)] = V[0], y = a.dense ? (s[o.cell.r] || [])[o.cell.c] : s[Ye(o.cell)], (y || {}).f = "" + pr(V[0], u, m, Q, U);
            }
          }
          break;
        case 253:
          k = Gc(x[V.isst].t, V.ixfe, "s"), x[V.isst].h && (k.h = x[V.isst].h), k.XF = X[k.ixfe], R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: V.c, r: V.r }, k, a);
          break;
        case 513:
          a.sheetStubs && (k = { ixfe: V.ixfe, XF: X[V.ixfe], t: "z" }, R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: V.c, r: V.r }, k, a));
          break;
        case 190:
          if (a.sheetStubs) for (var Pt = V.c; Pt <= V.C; ++Pt) {
            var it = V.ixfe[Pt - V.c];
            k = { ixfe: it, XF: X[it], t: "z" }, R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: Pt, r: V.r }, k, a);
          }
          break;
        case 214:
        case 516:
        case 4:
          k = Gc(V.val, V.ixfe, "s"), k.XF = X[k.ixfe], R > 0 && (k.z = j[k.ixfe >> 8 & 63]), Ra(k, a, r.opts.Date1904), B({ c: V.c, r: V.r }, k, a);
          break;
        case 0:
        case 512:
          re === 1 && (u = V);
          break;
        case 252:
          x = V;
          break;
        case 1054:
          if (U.biff == 4) {
            j[R++] = V[1];
            for (var Ot = 0; Ot < R + 163 && We[Ot] != V[1]; ++Ot) ;
            Ot >= 163 && yi(V[1], R + 163);
          } else yi(V[1], V[0]);
          break;
        case 30:
          {
            j[R++] = V;
            for (var st = 0; st < R + 163 && We[st] != V; ++st) ;
            st >= 163 && yi(V, R + 163);
          }
          break;
        case 229:
          ge = ge.concat(V);
          break;
        case 93:
          fe[V.cmo[0]] = U.lastobj = V;
          break;
        case 438:
          U.lastobj.TxO = V;
          break;
        case 127:
          U.lastobj.ImData = V;
          break;
        case 440:
          for (_ = V[0].s.r; _ <= V[0].e.r; ++_) for (E = V[0].s.c; E <= V[0].e.c; ++E) y = a.dense ? (s[_] || [])[E] : s[Ye({ c: E, r: _ })], y && (y.l = V[1]);
          break;
        case 2048:
          for (_ = V[0].s.r; _ <= V[0].e.r; ++_) for (E = V[0].s.c; E <= V[0].e.c; ++E) y = a.dense ? (s[_] || [])[E] : s[Ye({ c: E, r: _ })], y && y.l && (y.l.Tooltip = V[1]);
          break;
        case 28:
          {
            if (U.biff <= 5 && U.biff >= 2) break;
            y = a.dense ? (s[V[0].r] || [])[V[0].c] : s[Ye(V[0])];
            var tt = fe[V[2]];
            y || (a.dense ? (s[V[0].r] || (s[V[0].r] = []), y = s[V[0].r][V[0].c] = { t: "z" }) : y = s[Ye(V[0])] = { t: "z" }, u.e.r = Math.max(u.e.r, V[0].r), u.s.r = Math.min(u.s.r, V[0].r), u.e.c = Math.max(u.e.c, V[0].c), u.s.c = Math.min(u.s.c, V[0].c)), y.c || (y.c = []), T = { a: V[1], t: tt.TxO.t }, y.c.push(T);
          }
          break;
        case 2173:
          EC(X[V.ixfe], V.ext);
          break;
        case 125:
          {
            if (!U.cellStyles) break;
            for (; V.e >= V.s; ) J[V.e--] = { width: V.w / 256, level: V.level || 0, hidden: !!(V.flags & 1) }, we || (we = true, ud(V.w / 256)), Cs(J[V.e + 1]);
          }
          break;
        case 520:
          {
            var rt = {};
            V.level != null && (ae[V.r] = rt, rt.level = V.level), V.hidden && (ae[V.r] = rt, rt.hidden = true), V.hpt && (ae[V.r] = rt, rt.hpt = V.hpt, rt.hpx = i0(V.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          s["!margins"] || Kl(s["!margins"] = {}), s["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[pe]] = V;
          break;
        case 161:
          s["!margins"] || Kl(s["!margins"] = {}), s["!margins"].header = V.header, s["!margins"].footer = V.footer;
          break;
        case 574:
          V.RTL && (C.Views[0].RTL = true);
          break;
        case 146:
          z = V;
          break;
        case 2198:
          ne = V;
          break;
        case 140:
          M = V;
          break;
        case 442:
          d ? S.CodeName = V || S.name : C.WBProps.CodeName = V || "ThisWorkbook";
          break;
      }
    } else _e || console.error("Missing Info for XLS Record 0x" + pe.toString(16)), e.l += ye;
  }
  return r.SheetNames = La(c).sort(function(gt, $e) {
    return Number(gt) - Number($e);
  }).map(function(gt) {
    return c[gt].name;
  }), a.bookSheets || (r.Sheets = i), !r.SheetNames.length && v["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = v)) : r.Preamble = v, r.Sheets && q.forEach(function(gt, $e) {
    r.Sheets[r.SheetNames[$e]]["!autofilter"] = gt;
  }), r.Strings = x, r.SSF = or(We), U.enc && (r.Encryption = U.enc), ne && (r.Themes = ne), r.Metadata = {}, M !== void 0 && (r.Metadata.Country = M), Q.names.length > 0 && (C.Names = Q.names), r.Workbook = C, r;
}
var Bm = { SI: "e0859ff2f94f6810ab9108002b27b3d9", DSI: "02d5cdd59c2e1b10939708002b2cf9ae", UDI: "05d5cdd59c2e1b10939708002b2cf9ae" };
function JO(e, a, r) {
  var i = ft.find(e, "/!DocumentSummaryInformation");
  if (i && i.size > 0) try {
    var s = ym(i, pA, Bm.DSI);
    for (var c in s) a[c] = s[c];
  } catch (d) {
    if (r.WTF) throw d;
  }
  var u = ft.find(e, "/!SummaryInformation");
  if (u && u.size > 0) try {
    var o = ym(u, mA, Bm.SI);
    for (var x in o) a[x] == null && (a[x] = o[x]);
  } catch (d) {
    if (r.WTF) throw d;
  }
  a.HeadingPairs && a.TitlesOfParts && (sy(a.HeadingPairs, a.TitlesOfParts, a, r), delete a.HeadingPairs, delete a.TitlesOfParts);
}
function Gy(e, a) {
  a || (a = {}), vd(a), g2(), a.codepage && $h(a.codepage);
  var r, i;
  if (e.FullPaths) {
    if (ft.find(e, "/encryption")) throw new Error("File is password-protected");
    r = ft.find(e, "!CompObj"), i = ft.find(e, "/Workbook") || ft.find(e, "/Book");
  } else {
    switch (a.type) {
      case "base64":
        e = ga($r(e));
        break;
      case "binary":
        e = ga(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    ur(e, 0), i = { content: e };
  }
  var s, c;
  if (r && KO(r), a.bookProps && !a.bookSheets) s = {};
  else {
    var u = lt ? "buffer" : "array";
    if (i && i.content) s = QO(i.content, a);
    else if ((c = ft.find(e, "PerfectOffice_MAIN")) && c.content) s = $l.to_workbook(c.content, (a.type = u, a));
    else if ((c = ft.find(e, "NativeContent_MAIN")) && c.content) s = $l.to_workbook(c.content, (a.type = u, a));
    else throw (c = ft.find(e, "MN0")) && c.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    a.bookVBA && e.FullPaths && ft.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (s.vbaraw = IC(e));
  }
  var o = {};
  return e.FullPaths && JO(e, o, a), s.Props = s.Custprops = o, a.bookFiles && (s.cfb = e), s;
}
var of = { 0: { f: Mb }, 1: { f: Ib }, 2: { f: $b }, 3: { f: Pb }, 4: { f: jb }, 5: { f: Yb }, 6: { f: Wb }, 7: { f: Vb }, 8: { f: tO }, 9: { f: eO }, 10: { f: Qb }, 11: { f: Jb }, 12: { f: Hb }, 13: { f: qb }, 14: { f: Gb }, 15: { f: zb }, 16: { f: Iy }, 17: { f: Zb }, 18: { f: Xb }, 19: { f: nd }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: bO }, 40: {}, 42: {}, 43: { f: Q8 }, 44: { f: Z8 }, 45: { f: J8 }, 46: { f: tC }, 47: { f: eC }, 48: {}, 49: { f: rA }, 50: {}, 51: { f: TC }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: gy }, 62: { f: Kb }, 63: { f: CC }, 64: { f: uO }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Er, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: fO }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: Ub }, 148: { f: Lb, p: 16 }, 151: { f: nO }, 152: {}, 153: { f: kO }, 154: {}, 155: {}, 156: { f: AO }, 157: {}, 158: {}, 159: { T: 1, f: m8 }, 160: { T: -1 }, 161: { T: 1, f: bi }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: rO }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: _C }, 336: { T: -1 }, 337: { f: wC, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: xh }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: my }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: iO }, 427: { f: sO }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: cO }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: Bb }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: aO }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: xh }, 551: {}, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: LC }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: MC }, 636: { T: -1 }, 637: { f: nA }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: pO }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: oO }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } }, yh = { 6: { f: Ko }, 10: { f: Nn }, 12: { f: $t }, 13: { f: $t }, 14: { f: zt }, 15: { f: zt }, 16: { f: mr }, 17: { f: zt }, 18: { f: zt }, 19: { f: $t }, 20: { f: wm }, 21: { f: wm }, 23: { f: my }, 24: { f: Am }, 25: { f: zt }, 26: {}, 27: {}, 28: { f: Fk }, 29: {}, 34: { f: zt }, 35: { f: Sm }, 38: { f: mr }, 39: { f: mr }, 40: { f: mr }, 41: { f: mr }, 42: { f: zt }, 43: { f: zt }, 47: { f: B8 }, 49: { f: dk }, 51: { f: $t }, 60: {}, 61: { f: uk }, 64: { f: zt }, 65: { f: hk }, 66: { f: $t }, 77: {}, 80: {}, 81: {}, 82: {}, 85: { f: $t }, 89: {}, 90: {}, 91: {}, 92: { f: rk }, 93: { f: Mk }, 94: {}, 95: { f: zt }, 96: {}, 97: {}, 99: { f: zt }, 125: { f: gy }, 128: { f: wk }, 129: { f: ak }, 130: { f: $t }, 131: { f: zt }, 132: { f: zt }, 133: { f: nk }, 134: {}, 140: { f: jk }, 141: { f: $t }, 144: {}, 146: { f: Pk }, 151: {}, 152: {}, 153: {}, 154: {}, 155: {}, 156: { f: $t }, 157: {}, 158: {}, 160: { f: $k }, 161: { f: Vk }, 174: {}, 175: {}, 176: {}, 177: {}, 178: {}, 180: {}, 181: {}, 182: {}, 184: {}, 185: {}, 189: { f: yk }, 190: { f: Ek }, 193: { f: Nn }, 197: {}, 198: {}, 199: {}, 200: {}, 201: {}, 202: { f: zt }, 203: {}, 204: {}, 205: {}, 206: {}, 207: {}, 208: {}, 209: {}, 210: {}, 211: {}, 213: {}, 215: {}, 216: {}, 217: {}, 218: { f: $t }, 220: {}, 221: { f: zt }, 222: {}, 224: { f: Tk }, 225: { f: tk }, 226: { f: Nn }, 227: {}, 229: { f: Nk }, 233: {}, 235: {}, 236: {}, 237: {}, 239: {}, 240: {}, 241: {}, 242: {}, 244: {}, 245: {}, 246: {}, 247: {}, 248: {}, 249: {}, 251: {}, 252: { f: ik }, 253: { f: xk }, 255: { f: sk }, 256: {}, 259: {}, 290: {}, 311: {}, 312: {}, 315: {}, 317: { f: oy }, 318: {}, 319: {}, 320: {}, 330: {}, 331: {}, 333: {}, 334: {}, 335: {}, 336: {}, 337: {}, 338: {}, 339: {}, 340: {}, 351: {}, 352: { f: zt }, 353: { f: Nn }, 401: {}, 402: {}, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 425: {}, 426: {}, 427: {}, 428: {}, 429: {}, 430: { f: Ak }, 431: { f: zt }, 432: {}, 433: {}, 434: {}, 437: {}, 438: { f: Uk }, 439: { f: zt }, 440: { f: Ik }, 441: {}, 442: { f: p0 }, 443: {}, 444: { f: $t }, 445: {}, 446: {}, 448: { f: Nn }, 449: { f: fk, r: 2 }, 450: { f: Nn }, 512: { f: _m }, 513: { f: Yk }, 515: { f: Sk }, 516: { f: vk }, 517: { f: Tm }, 519: { f: qk }, 520: { f: lk }, 523: {}, 545: { f: km }, 549: { f: Em }, 566: {}, 574: { f: ok }, 638: { f: gk }, 659: {}, 1048: {}, 1054: { f: pk }, 1084: {}, 1212: { f: Ok }, 2048: { f: Hk }, 2049: {}, 2050: {}, 2051: {}, 2052: {}, 2053: {}, 2054: {}, 2055: {}, 2056: {}, 2057: { f: jc }, 2058: {}, 2059: {}, 2060: {}, 2061: {}, 2062: {}, 2063: {}, 2064: {}, 2066: {}, 2067: {}, 2128: {}, 2129: {}, 2130: {}, 2131: {}, 2132: {}, 2133: {}, 2134: {}, 2135: {}, 2136: {}, 2137: {}, 2138: {}, 2146: {}, 2147: { r: 12 }, 2148: {}, 2149: {}, 2150: {}, 2151: { f: Nn }, 2152: {}, 2154: {}, 2155: {}, 2156: {}, 2161: {}, 2162: {}, 2164: {}, 2165: {}, 2166: {}, 2167: {}, 2168: {}, 2169: {}, 2170: {}, 2171: {}, 2172: { f: Gk, r: 12 }, 2173: { f: yC, r: 12 }, 2174: {}, 2175: {}, 2180: {}, 2181: {}, 2182: {}, 2183: {}, 2184: {}, 2185: {}, 2186: {}, 2187: {}, 2188: { f: zt, r: 12 }, 2189: {}, 2190: { r: 12 }, 2191: {}, 2192: {}, 2194: {}, 2195: {}, 2196: { f: bk, r: 12 }, 2197: {}, 2198: { f: dC, r: 12 }, 2199: {}, 2200: {}, 2201: {}, 2202: { f: Rk, r: 12 }, 2203: { f: Nn }, 2204: {}, 2205: {}, 2206: {}, 2207: {}, 2211: { f: ck }, 2212: {}, 2213: {}, 2214: {}, 2215: {}, 4097: {}, 4098: {}, 4099: {}, 4102: {}, 4103: {}, 4105: {}, 4106: {}, 4107: {}, 4108: {}, 4109: {}, 4116: {}, 4117: {}, 4118: {}, 4119: {}, 4120: {}, 4121: {}, 4122: {}, 4123: {}, 4124: {}, 4125: {}, 4126: {}, 4127: {}, 4128: {}, 4129: {}, 4130: {}, 4132: {}, 4133: {}, 4134: { f: $t }, 4135: {}, 4146: {}, 4147: {}, 4148: {}, 4149: {}, 4154: {}, 4156: {}, 4157: {}, 4158: {}, 4159: {}, 4160: {}, 4161: {}, 4163: {}, 4164: { f: Xk }, 4165: {}, 4166: {}, 4168: {}, 4170: {}, 4171: {}, 4174: {}, 4175: {}, 4176: {}, 4177: {}, 4187: {}, 4188: { f: zk }, 4189: {}, 4191: {}, 4192: {}, 4193: {}, 4194: {}, 4195: {}, 4196: {}, 4197: {}, 4198: {}, 4199: {}, 4200: {}, 0: { f: _m }, 1: {}, 2: { f: Qk }, 3: { f: Zk }, 4: { f: Wk }, 5: { f: Tm }, 7: { f: Jk }, 8: {}, 9: { f: jc }, 11: {}, 22: { f: $t }, 30: { f: mk }, 31: {}, 32: {}, 33: { f: km }, 36: {}, 37: { f: Em }, 50: { f: e8 }, 62: {}, 52: {}, 67: {}, 68: { f: $t }, 69: {}, 86: {}, 126: {}, 127: { f: Kk }, 135: {}, 136: {}, 137: {}, 145: {}, 148: {}, 149: {}, 150: {}, 169: {}, 171: {}, 188: {}, 191: {}, 192: {}, 194: {}, 195: {}, 214: { f: t8 }, 223: {}, 234: {}, 354: {}, 421: {}, 518: { f: Ko }, 521: { f: jc }, 536: { f: Am }, 547: { f: Sm }, 561: {}, 579: {}, 1030: { f: Ko }, 1033: { f: jc }, 1091: {}, 2157: {}, 2163: {}, 2177: {}, 2240: {}, 2241: {}, 2242: {}, 2243: {}, 2244: {}, 2245: {}, 2246: {}, 2247: {}, 2248: {}, 2249: {}, 2250: {}, 2251: {}, 2262: { r: 12 }, 29282: {} };
function ma(e, a, r, i) {
  var s = a;
  if (!isNaN(s)) {
    var c = (r || []).length || 0, u = e.next(4);
    u.write_shift(2, s), u.write_shift(2, c), c > 0 && Q2(r) && e.push(r);
  }
}
function Um(e, a) {
  var r = a || {}, i = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var s = e.match(/<table/i);
  if (!s) throw new Error("Invalid HTML: could not find <table>");
  var c = e.match(/<\/table/i), u = s.index, o = c && c.index || e.length, x = S3(e.slice(u, o), /(:?<tr[^>]*>)/i, "<tr>"), d = -1, v = 0, m = 0, g = 0, y = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, T = [];
  for (u = 0; u < x.length; ++u) {
    var E = x[u].trim(), _ = E.slice(0, 3).toLowerCase();
    if (_ == "<tr") {
      if (++d, r.sheetRows && r.sheetRows <= d) {
        --d;
        break;
      }
      v = 0;
      continue;
    }
    if (!(_ != "<td" && _ != "<th")) {
      var O = E.split(/<\/t[dh]>/i);
      for (o = 0; o < O.length; ++o) {
        var F = O[o].trim();
        if (F.match(/<t[dh]/i)) {
          for (var k = F, M = 0; k.charAt(0) == "<" && (M = k.indexOf(">")) > -1; ) k = k.slice(M + 1);
          for (var X = 0; X < T.length; ++X) {
            var z = T[X];
            z.s.c == v && z.s.r < d && d <= z.e.r && (v = z.e.c + 1, X = -1);
          }
          var C = Pe(F.slice(0, F.indexOf(">")));
          g = C.colspan ? +C.colspan : 1, ((m = +C.rowspan) > 1 || g > 1) && T.push({ s: { r: d, c: v }, e: { r: d + (m || 1) - 1, c: v + g - 1 } });
          var S = C.t || C["data-t"] || "";
          if (!k.length) {
            v += g;
            continue;
          }
          if (k = H2(k), y.s.r > d && (y.s.r = d), y.e.r < d && (y.e.r = d), y.s.c > v && (y.s.c = v), y.e.c < v && (y.e.c = v), !k.length) {
            v += g;
            continue;
          }
          var w = { t: "s", v: k };
          r.raw || !k.trim().length || S == "s" || (k === "TRUE" ? w = { t: "b", v: true } : k === "FALSE" ? w = { t: "b", v: false } : isNaN(Ta(k)) ? isNaN(ks(k).getDate()) || (w = { t: "d", v: ir(k) }, r.cellDates || (w = { t: "n", v: br(w.v) }), w.z = r.dateNF || We[14]) : w = { t: "n", v: Ta(k) }), r.dense ? (i[d] || (i[d] = []), i[d][v] = w) : i[Ye({ r: d, c: v })] = w, v += g;
        }
      }
    }
  }
  return i["!ref"] = ut(y), T.length && (i["!merges"] = T), i;
}
function eR(e, a, r, i) {
  for (var s = e["!merges"] || [], c = [], u = a.s.c; u <= a.e.c; ++u) {
    for (var o = 0, x = 0, d = 0; d < s.length; ++d) if (!(s[d].s.r > r || s[d].s.c > u) && !(s[d].e.r < r || s[d].e.c < u)) {
      if (s[d].s.r < r || s[d].s.c < u) {
        o = -1;
        break;
      }
      o = s[d].e.r - s[d].s.r + 1, x = s[d].e.c - s[d].s.c + 1;
      break;
    }
    if (!(o < 0)) {
      var v = Ye({ r, c: u }), m = i.dense ? (e[r] || [])[u] : e[v], g = m && m.v != null && (m.h || Jh(m.w || (sn(m), m.w) || "")) || "", y = {};
      o > 1 && (y.rowspan = o), x > 1 && (y.colspan = x), i.editable ? g = '<span contenteditable="true">' + g + "</span>" : m && (y["data-t"] = m && m.t || "z", m.v != null && (y["data-v"] = m.v), m.z != null && (y["data-z"] = m.z), m.l && (m.l.Target || "#").charAt(0) != "#" && (g = '<a href="' + m.l.Target + '">' + g + "</a>")), y.id = (i.id || "sjs") + "-" + v, c.push(j3("td", g, y));
    }
  }
  var T = "<tr>";
  return T + c.join("") + "</tr>";
}
var tR = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', rR = "</body></html>";
function aR(e, a) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1) return Xn(Um(r[0], a), a);
  var i = md();
  return r.forEach(function(s, c) {
    gd(i, Um(s, a), "Sheet" + (c + 1));
  }), i;
}
function nR(e, a, r) {
  var i = [];
  return i.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function iR(e, a) {
  var r = a || {}, i = r.header != null ? r.header : tR, s = r.footer != null ? r.footer : rR, c = [i], u = Ds(e["!ref"]);
  r.dense = Array.isArray(e), c.push(nR(e, u, r));
  for (var o = u.s.r; o <= u.e.r; ++o) c.push(eR(e, u, o, r));
  return c.push("</table>" + s), c.join("");
}
function Vy(e, a, r) {
  var i = r || {}, s = 0, c = 0;
  if (i.origin != null) if (typeof i.origin == "number") s = i.origin;
  else {
    var u = typeof i.origin == "string" ? kr(i.origin) : i.origin;
    s = u.r, c = u.c;
  }
  var o = a.getElementsByTagName("tr"), x = Math.min(i.sheetRows || 1e7, o.length), d = { s: { r: 0, c: 0 }, e: { r: s, c } };
  if (e["!ref"]) {
    var v = Ds(e["!ref"]);
    d.s.r = Math.min(d.s.r, v.s.r), d.s.c = Math.min(d.s.c, v.s.c), d.e.r = Math.max(d.e.r, v.e.r), d.e.c = Math.max(d.e.c, v.e.c), s == -1 && (d.e.r = s = v.e.r + 1);
  }
  var m = [], g = 0, y = e["!rows"] || (e["!rows"] = []), T = 0, E = 0, _ = 0, O = 0, F = 0, k = 0;
  for (e["!cols"] || (e["!cols"] = []); T < o.length && E < x; ++T) {
    var M = o[T];
    if (Im(M)) {
      if (i.display) continue;
      y[E] = { hidden: true };
    }
    var X = M.children;
    for (_ = O = 0; _ < X.length; ++_) {
      var z = X[_];
      if (!(i.display && Im(z))) {
        var C = z.hasAttribute("data-v") ? z.getAttribute("data-v") : z.hasAttribute("v") ? z.getAttribute("v") : H2(z.innerHTML), S = z.getAttribute("data-z") || z.getAttribute("z");
        for (g = 0; g < m.length; ++g) {
          var w = m[g];
          w.s.c == O + c && w.s.r < E + s && E + s <= w.e.r && (O = w.e.c + 1 - c, g = -1);
        }
        k = +z.getAttribute("colspan") || 1, ((F = +z.getAttribute("rowspan") || 1) > 1 || k > 1) && m.push({ s: { r: E + s, c: O + c }, e: { r: E + s + (F || 1) - 1, c: O + c + (k || 1) - 1 } });
        var N = { t: "s", v: C }, B = z.getAttribute("data-t") || z.getAttribute("t") || "";
        C != null && (C.length == 0 ? N.t = B || "z" : i.raw || C.trim().length == 0 || B == "s" || (C === "TRUE" ? N = { t: "b", v: true } : C === "FALSE" ? N = { t: "b", v: false } : isNaN(Ta(C)) ? isNaN(ks(C).getDate()) || (N = { t: "d", v: ir(C) }, i.cellDates || (N = { t: "n", v: br(N.v) }), N.z = i.dateNF || We[14]) : N = { t: "n", v: Ta(C) })), N.z === void 0 && S != null && (N.z = S);
        var U = "", ne = z.getElementsByTagName("A");
        if (ne && ne.length) for (var ge = 0; ge < ne.length && !(ne[ge].hasAttribute("href") && (U = ne[ge].getAttribute("href"), U.charAt(0) != "#")); ++ge) ;
        U && U.charAt(0) != "#" && (N.l = { Target: U }), i.dense ? (e[E + s] || (e[E + s] = []), e[E + s][O + c] = N) : e[Ye({ c: O + c, r: E + s })] = N, d.e.c < O + c && (d.e.c = O + c), O += k;
      }
    }
    ++E;
  }
  return m.length && (e["!merges"] = (e["!merges"] || []).concat(m)), d.e.r = Math.max(d.e.r, E - 1 + s), e["!ref"] = ut(d), E >= x && (e["!fullref"] = ut((d.e.r = o.length - T + E - 1 + s, d))), e;
}
function Xy(e, a) {
  var r = a || {}, i = r.dense ? [] : {};
  return Vy(i, e, a);
}
function sR(e, a) {
  return Xn(Xy(e, a), a);
}
function Im(e) {
  var a = "", r = lR(e);
  return r && (a = r(e).getPropertyValue("display")), a || (a = e.style && e.style.display), a === "none";
}
function lR(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function cR(e) {
  var a = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(i, s) {
    return Array(parseInt(s, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = ot(a.replace(/<[^>]*>/g, ""));
  return [r];
}
var Hm = { day: ["d", "dd"], month: ["m", "mm"], year: ["y", "yy"], hours: ["h", "hh"], minutes: ["m", "mm"], seconds: ["s", "ss"], "am-pm": ["A/P", "AM/PM"], "day-of-week": ["ddd", "dddd"], era: ["e", "ee"], quarter: ["\\Qm", 'm\\"th quarter"'] };
function Yy(e, a) {
  var r = a || {}, i = ed(e), s = [], c, u, o = { name: "" }, x = "", d = 0, v, m, g = {}, y = [], T = r.dense ? [] : {}, E, _, O = { value: "" }, F = "", k = 0, M = [], X = -1, z = -1, C = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, S = 0, w = {}, N = [], B = {}, U = 0, ne = 0, ge = [], fe = 1, J = 1, ae = [], we = { Names: [] }, Q = {}, H = ["", ""], re = [], R = {}, j = "", q = 0, K = false, ie = false, Ae = 0;
  for (r0.lastIndex = 0, i = i.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); E = r0.exec(i); ) switch (E[3] = E[3].replace(/_.*$/, "")) {
    case "table":
    case "\u5DE5\u4F5C\u8868":
      E[1] === "/" ? (C.e.c >= C.s.c && C.e.r >= C.s.r ? T["!ref"] = ut(C) : T["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= C.e.r && (T["!fullref"] = T["!ref"], C.e.r = r.sheetRows - 1, T["!ref"] = ut(C)), N.length && (T["!merges"] = N), ge.length && (T["!rows"] = ge), v.name = v.\u540D\u79F0 || v.name, typeof JSON < "u" && JSON.stringify(v), y.push(v.name), g[v.name] = T, ie = false) : E[0].charAt(E[0].length - 2) !== "/" && (v = Pe(E[0], false), X = z = -1, C.s.r = C.s.c = 1e7, C.e.r = C.e.c = 0, T = r.dense ? [] : {}, N = [], ge = [], ie = true);
      break;
    case "table-row-group":
      E[1] === "/" ? --S : ++S;
      break;
    case "table-row":
    case "\u884C":
      if (E[1] === "/") {
        X += fe, fe = 1;
        break;
      }
      if (m = Pe(E[0], false), m.\u884C\u53F7 ? X = m.\u884C\u53F7 - 1 : X == -1 && (X = 0), fe = +m["number-rows-repeated"] || 1, fe < 10) for (Ae = 0; Ae < fe; ++Ae) S > 0 && (ge[X + Ae] = { level: S });
      z = -1;
      break;
    case "covered-table-cell":
      E[1] !== "/" && ++z, r.sheetStubs && (r.dense ? (T[X] || (T[X] = []), T[X][z] = { t: "z" }) : T[Ye({ r: X, c: z })] = { t: "z" }), F = "", M = [];
      break;
    case "table-cell":
    case "\u6570\u636E":
      if (E[0].charAt(E[0].length - 2) === "/") ++z, O = Pe(E[0], false), J = parseInt(O["number-columns-repeated"] || "1", 10), _ = { t: "z", v: null }, O.formula && r.cellFormula != false && (_.f = Nm(ot(O.formula))), (O.\u6570\u636E\u7C7B\u578B || O["value-type"]) == "string" && (_.t = "s", _.v = ot(O["string-value"] || ""), r.dense ? (T[X] || (T[X] = []), T[X][z] = _) : T[Ye({ r: X, c: z })] = _), z += J - 1;
      else if (E[1] !== "/") {
        ++z, F = "", k = 0, M = [], J = 1;
        var pe = fe ? X + fe - 1 : X;
        if (z > C.e.c && (C.e.c = z), z < C.s.c && (C.s.c = z), X < C.s.r && (C.s.r = X), pe > C.e.r && (C.e.r = pe), O = Pe(E[0], false), re = [], R = {}, _ = { t: O.\u6570\u636E\u7C7B\u578B || O["value-type"], v: null }, r.cellFormula) if (O.formula && (O.formula = ot(O.formula)), O["number-matrix-columns-spanned"] && O["number-matrix-rows-spanned"] && (U = parseInt(O["number-matrix-rows-spanned"], 10) || 0, ne = parseInt(O["number-matrix-columns-spanned"], 10) || 0, B = { s: { r: X, c: z }, e: { r: X + U - 1, c: z + ne - 1 } }, _.F = ut(B), ae.push([B, _.F])), O.formula) _.f = Nm(O.formula);
        else for (Ae = 0; Ae < ae.length; ++Ae) X >= ae[Ae][0].s.r && X <= ae[Ae][0].e.r && z >= ae[Ae][0].s.c && z <= ae[Ae][0].e.c && (_.F = ae[Ae][1]);
        switch ((O["number-columns-spanned"] || O["number-rows-spanned"]) && (U = parseInt(O["number-rows-spanned"], 10) || 0, ne = parseInt(O["number-columns-spanned"], 10) || 0, B = { s: { r: X, c: z }, e: { r: X + U - 1, c: z + ne - 1 } }, N.push(B)), O["number-columns-repeated"] && (J = parseInt(O["number-columns-repeated"], 10)), _.t) {
          case "boolean":
            _.t = "b", _.v = Ft(O["boolean-value"]);
            break;
          case "float":
            _.t = "n", _.v = parseFloat(O.value);
            break;
          case "percentage":
            _.t = "n", _.v = parseFloat(O.value);
            break;
          case "currency":
            _.t = "n", _.v = parseFloat(O.value);
            break;
          case "date":
            _.t = "d", _.v = ir(O["date-value"]), r.cellDates || (_.t = "n", _.v = br(_.v)), _.z = "m/d/yy";
            break;
          case "time":
            _.t = "n", _.v = _3(O["time-value"]) / 86400, r.cellDates && (_.t = "d", _.v = mf(_.v)), _.z = "HH:MM:SS";
            break;
          case "number":
            _.t = "n", _.v = parseFloat(O.\u6570\u636E\u6570\u503C);
            break;
          default:
            if (_.t === "string" || _.t === "text" || !_.t) _.t = "s", O["string-value"] != null && (F = ot(O["string-value"]), M = []);
            else throw new Error("Unsupported value type " + _.t);
        }
      } else {
        if (K = false, _.t === "s" && (_.v = F || "", M.length && (_.R = M), K = k == 0), Q.Target && (_.l = Q), re.length > 0 && (_.c = re, re = []), F && r.cellText !== false && (_.w = F), K && (_.t = "z", delete _.v), (!K || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= X)) for (var ye = 0; ye < fe; ++ye) {
          if (J = parseInt(O["number-columns-repeated"] || "1", 10), r.dense) for (T[X + ye] || (T[X + ye] = []), T[X + ye][z] = ye == 0 ? _ : or(_); --J > 0; ) T[X + ye][z + J] = or(_);
          else for (T[Ye({ r: X + ye, c: z })] = _; --J > 0; ) T[Ye({ r: X + ye, c: z + J })] = or(_);
          C.e.c <= z && (C.e.c = z);
        }
        J = parseInt(O["number-columns-repeated"] || "1", 10), z += J - 1, J = 0, _ = {}, F = "", M = [];
      }
      Q = {};
      break;
    case "document":
    case "document-content":
    case "\u7535\u5B50\u8868\u683C\u6587\u6863":
    case "spreadsheet":
    case "\u4E3B\u4F53":
    case "scripts":
    case "styles":
    case "font-face-decls":
    case "master-styles":
      if (E[1] === "/") {
        if ((c = s.pop())[0] !== E[3]) throw "Bad state: " + c;
      } else E[0].charAt(E[0].length - 2) !== "/" && s.push([E[3], true]);
      break;
    case "annotation":
      if (E[1] === "/") {
        if ((c = s.pop())[0] !== E[3]) throw "Bad state: " + c;
        R.t = F, M.length && (R.R = M), R.a = j, re.push(R);
      } else E[0].charAt(E[0].length - 2) !== "/" && s.push([E[3], false]);
      j = "", q = 0, F = "", k = 0, M = [];
      break;
    case "creator":
      E[1] === "/" ? j = i.slice(q, E.index) : q = E.index + E[0].length;
      break;
    case "meta":
    case "\u5143\u6570\u636E":
    case "settings":
    case "config-item-set":
    case "config-item-map-indexed":
    case "config-item-map-entry":
    case "config-item-map-named":
    case "shapes":
    case "frame":
    case "text-box":
    case "image":
    case "data-pilot-tables":
    case "list-style":
    case "form":
    case "dde-links":
    case "event-listeners":
    case "chart":
      if (E[1] === "/") {
        if ((c = s.pop())[0] !== E[3]) throw "Bad state: " + c;
      } else E[0].charAt(E[0].length - 2) !== "/" && s.push([E[3], false]);
      F = "", k = 0, M = [];
      break;
    case "scientific-number":
      break;
    case "currency-symbol":
      break;
    case "currency-style":
      break;
    case "number-style":
    case "percentage-style":
    case "date-style":
    case "time-style":
      if (E[1] === "/") {
        if (w[o.name] = x, (c = s.pop())[0] !== E[3]) throw "Bad state: " + c;
      } else E[0].charAt(E[0].length - 2) !== "/" && (x = "", o = Pe(E[0], false), s.push([E[3], true]));
      break;
    case "script":
      break;
    case "libraries":
      break;
    case "automatic-styles":
      break;
    case "default-style":
    case "page-layout":
      break;
    case "style":
      break;
    case "map":
      break;
    case "font-face":
      break;
    case "paragraph-properties":
      break;
    case "table-properties":
      break;
    case "table-column-properties":
      break;
    case "table-row-properties":
      break;
    case "table-cell-properties":
      break;
    case "number":
      switch (s[s.length - 1][0]) {
        case "time-style":
        case "date-style":
          u = Pe(E[0], false), x += Hm[E[3]][u.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "fraction":
      break;
    case "day":
    case "month":
    case "year":
    case "era":
    case "day-of-week":
    case "week-of-year":
    case "quarter":
    case "hours":
    case "minutes":
    case "seconds":
    case "am-pm":
      switch (s[s.length - 1][0]) {
        case "time-style":
        case "date-style":
          u = Pe(E[0], false), x += Hm[E[3]][u.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "boolean-style":
      break;
    case "boolean":
      break;
    case "text-style":
      break;
    case "text":
      if (E[0].slice(-2) === "/>") break;
      if (E[1] === "/") switch (s[s.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          x += i.slice(d, E.index);
          break;
      }
      else d = E.index + E[0].length;
      break;
    case "named-range":
      u = Pe(E[0], false), H = Wo(u["cell-range-address"]);
      var _e = { Name: u.name, Ref: H[0] + "!" + H[1] };
      ie && (_e.Sheet = y.length), we.Names.push(_e);
      break;
    case "text-content":
      break;
    case "text-properties":
      break;
    case "embedded-text":
      break;
    case "body":
    case "\u7535\u5B50\u8868\u683C":
      break;
    case "forms":
      break;
    case "table-column":
      break;
    case "table-header-rows":
      break;
    case "table-rows":
      break;
    case "table-column-group":
      break;
    case "table-header-columns":
      break;
    case "table-columns":
      break;
    case "null-date":
      break;
    case "graphic-properties":
      break;
    case "calculation-settings":
      break;
    case "named-expressions":
      break;
    case "label-range":
      break;
    case "label-ranges":
      break;
    case "named-expression":
      break;
    case "sort":
      break;
    case "sort-by":
      break;
    case "sort-groups":
      break;
    case "tab":
      break;
    case "line-break":
      break;
    case "span":
      break;
    case "p":
    case "\u6587\u672C\u4E32":
      if (["master-styles"].indexOf(s[s.length - 1][0]) > -1) break;
      if (E[1] === "/" && (!O || !O["string-value"])) {
        var Re = cR(i.slice(k, E.index));
        F = (F.length > 0 ? F + `
` : "") + Re[0];
      } else Pe(E[0], false), k = E.index + E[0].length;
      break;
    case "s":
      break;
    case "database-range":
      if (E[1] === "/") break;
      try {
        H = Wo(Pe(E[0])["target-range-address"]), g[H[0]]["!autofilter"] = { ref: H[1] };
      } catch {
      }
      break;
    case "date":
      break;
    case "object":
      break;
    case "title":
    case "\u6807\u9898":
      break;
    case "desc":
      break;
    case "binary-data":
      break;
    case "table-source":
      break;
    case "scenario":
      break;
    case "iteration":
      break;
    case "content-validations":
      break;
    case "content-validation":
      break;
    case "help-message":
      break;
    case "error-message":
      break;
    case "database-ranges":
      break;
    case "filter":
      break;
    case "filter-and":
      break;
    case "filter-or":
      break;
    case "filter-condition":
      break;
    case "list-level-style-bullet":
      break;
    case "list-level-style-number":
      break;
    case "list-level-properties":
      break;
    case "sender-firstname":
    case "sender-lastname":
    case "sender-initials":
    case "sender-title":
    case "sender-position":
    case "sender-email":
    case "sender-phone-private":
    case "sender-fax":
    case "sender-company":
    case "sender-phone-work":
    case "sender-street":
    case "sender-city":
    case "sender-postal-code":
    case "sender-country":
    case "sender-state-or-province":
    case "author-name":
    case "author-initials":
    case "chapter":
    case "file-name":
    case "template-name":
    case "sheet-name":
      break;
    case "event-listener":
      break;
    case "initial-creator":
    case "creation-date":
    case "print-date":
    case "generator":
    case "document-statistic":
    case "user-defined":
    case "editing-duration":
    case "editing-cycles":
      break;
    case "config-item":
      break;
    case "page-number":
      break;
    case "page-count":
      break;
    case "time":
      break;
    case "cell-range-source":
      break;
    case "detective":
      break;
    case "operation":
      break;
    case "highlighted-range":
      break;
    case "data-pilot-table":
    case "source-cell-range":
    case "source-service":
    case "data-pilot-field":
    case "data-pilot-level":
    case "data-pilot-subtotals":
    case "data-pilot-subtotal":
    case "data-pilot-members":
    case "data-pilot-member":
    case "data-pilot-display-info":
    case "data-pilot-sort-info":
    case "data-pilot-layout-info":
    case "data-pilot-field-reference":
    case "data-pilot-groups":
    case "data-pilot-group":
    case "data-pilot-group-member":
      break;
    case "rect":
      break;
    case "dde-connection-decls":
    case "dde-connection-decl":
    case "dde-link":
    case "dde-source":
      break;
    case "properties":
      break;
    case "property":
      break;
    case "a":
      if (E[1] !== "/") {
        if (Q = Pe(E[0], false), !Q.href) break;
        Q.Target = ot(Q.href), delete Q.href, Q.Target.charAt(0) == "#" && Q.Target.indexOf(".") > -1 ? (H = Wo(Q.Target.slice(1)), Q.Target = "#" + H[0] + "!" + H[1]) : Q.Target.match(/^\.\.[\\\/]/) && (Q.Target = Q.Target.slice(3));
      }
      break;
    case "table-protection":
      break;
    case "data-pilot-grand-total":
      break;
    case "office-document-common-attrs":
      break;
    default:
      switch (E[2]) {
        case "dc:":
        case "calcext:":
        case "loext:":
        case "ooo:":
        case "chartooo:":
        case "draw:":
        case "style:":
        case "chart:":
        case "form:":
        case "uof:":
        case "\u8868:":
        case "\u5B57:":
          break;
        default:
          if (r.WTF) throw new Error(E);
      }
  }
  var V = { Sheets: g, SheetNames: y, Workbook: we };
  return r.bookSheets && delete V.Sheets, V;
}
function jm(e, a) {
  a = a || {}, sa(e, "META-INF/manifest.xml") && SA(Yt(e, "META-INF/manifest.xml"), a);
  var r = Xr(e, "content.xml");
  if (!r) throw new Error("Missing content.xml in ODS / UOF file");
  var i = Yy(bt(r), a);
  return sa(e, "meta.xml") && (i.Props = iy(Yt(e, "meta.xml"))), i;
}
function zm(e, a) {
  return Yy(e, a);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function dd(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Eh(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : bt(ki(e));
}
function _h(e) {
  var a = e.reduce(function(s, c) {
    return s + c.length;
  }, 0), r = new Uint8Array(a), i = 0;
  return e.forEach(function(s) {
    r.set(s, i), i += s.length;
  }), r;
}
function Pm(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function fR(e, a) {
  for (var r = (e[a + 15] & 127) << 7 | e[a + 14] >> 1, i = e[a + 14] & 1, s = a + 13; s >= a; --s) i = i * 256 + e[s];
  return (e[a + 15] & 128 ? -i : i) * Math.pow(10, r - 6176);
}
function s0(e, a) {
  var r = a ? a[0] : 0, i = e[r] & 127;
  e: if (e[r++] >= 128 && (i |= (e[r] & 127) << 7, e[r++] < 128 || (i |= (e[r] & 127) << 14, e[r++] < 128) || (i |= (e[r] & 127) << 21, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (i += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128))) break e;
  return a && (a[0] = r), i;
}
function Qt(e) {
  var a = 0, r = e[a] & 127;
  e: if (e[a++] >= 128) {
    if (r |= (e[a] & 127) << 7, e[a++] < 128 || (r |= (e[a] & 127) << 14, e[a++] < 128) || (r |= (e[a] & 127) << 21, e[a++] < 128)) break e;
    r |= (e[a] & 127) << 28;
  }
  return r;
}
function gr(e) {
  for (var a = [], r = [0]; r[0] < e.length; ) {
    var i = r[0], s = s0(e, r), c = s & 7;
    s = Math.floor(s / 8);
    var u = 0, o;
    if (s == 0) break;
    switch (c) {
      case 0:
        {
          for (var x = r[0]; e[r[0]++] >= 128; ) ;
          o = e.slice(x, r[0]);
        }
        break;
      case 5:
        u = 4, o = e.slice(r[0], r[0] + u), r[0] += u;
        break;
      case 1:
        u = 8, o = e.slice(r[0], r[0] + u), r[0] += u;
        break;
      case 2:
        u = s0(e, r), o = e.slice(r[0], r[0] + u), r[0] += u;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(c, " for Field ").concat(s, " at offset ").concat(i));
    }
    var d = { data: o, type: c };
    a[s] == null ? a[s] = [d] : a[s].push(d);
  }
  return a;
}
function xd(e, a) {
  return (e == null ? void 0 : e.map(function(r) {
    return a(r.data);
  })) || [];
}
function uR(e) {
  for (var a, r = [], i = [0]; i[0] < e.length; ) {
    var s = s0(e, i), c = gr(e.slice(i[0], i[0] + s));
    i[0] += s;
    var u = { id: Qt(c[1][0].data), messages: [] };
    c[2].forEach(function(o) {
      var x = gr(o.data), d = Qt(x[3][0].data);
      u.messages.push({ meta: x, data: e.slice(i[0], i[0] + d) }), i[0] += d;
    }), (a = c[3]) != null && a[0] && (u.merge = Qt(c[3][0].data) >>> 0 > 0), r.push(u);
  }
  return r;
}
function oR(e, a) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], i = s0(a, r), s = []; r[0] < a.length; ) {
    var c = a[r[0]] & 3;
    if (c == 0) {
      var u = a[r[0]++] >> 2;
      if (u < 60) ++u;
      else {
        var o = u - 59;
        u = a[r[0]], o > 1 && (u |= a[r[0] + 1] << 8), o > 2 && (u |= a[r[0] + 2] << 16), o > 3 && (u |= a[r[0] + 3] << 24), u >>>= 0, u++, r[0] += o;
      }
      s.push(a.slice(r[0], r[0] + u)), r[0] += u;
      continue;
    } else {
      var x = 0, d = 0;
      if (c == 1 ? (d = (a[r[0]] >> 2 & 7) + 4, x = (a[r[0]++] & 224) << 3, x |= a[r[0]++]) : (d = (a[r[0]++] >> 2) + 1, c == 2 ? (x = a[r[0]] | a[r[0] + 1] << 8, r[0] += 2) : (x = (a[r[0]] | a[r[0] + 1] << 8 | a[r[0] + 2] << 16 | a[r[0] + 3] << 24) >>> 0, r[0] += 4)), s = [_h(s)], x == 0) throw new Error("Invalid offset 0");
      if (x > s[0].length) throw new Error("Invalid offset beyond length");
      if (d >= x) for (s.push(s[0].slice(-x)), d -= x; d >= s[s.length - 1].length; ) s.push(s[s.length - 1]), d -= s[s.length - 1].length;
      s.push(s[0].slice(-x, -x + d));
    }
  }
  var v = _h(s);
  if (v.length != i) throw new Error("Unexpected length: ".concat(v.length, " != ").concat(i));
  return v;
}
function hR(e) {
  for (var a = [], r = 0; r < e.length; ) {
    var i = e[r++], s = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, a.push(oR(i, e.slice(r, r + s))), r += s;
  }
  if (r !== e.length) throw new Error("data is not a valid framed stream!");
  return _h(a);
}
function dR(e, a, r, i) {
  var s = dd(e), c = s.getUint32(4, true), u = (i > 1 ? 12 : 8) + Pm(c & (i > 1 ? 3470 : 398)) * 4, o = -1, x = -1, d = NaN, v = new Date(2001, 0, 1);
  c & 512 && (o = s.getUint32(u, true), u += 4), u += Pm(c & (i > 1 ? 12288 : 4096)) * 4, c & 16 && (x = s.getUint32(u, true), u += 4), c & 32 && (d = s.getFloat64(u, true), u += 8), c & 64 && (v.setTime(v.getTime() + s.getFloat64(u, true) * 1e3), u += 8);
  var m;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      m = { t: "n", v: d };
      break;
    case 3:
      m = { t: "s", v: a[x] };
      break;
    case 5:
      m = { t: "d", v };
      break;
    case 6:
      m = { t: "b", v: d > 0 };
      break;
    case 7:
      m = { t: "n", v: d / 86400 };
      break;
    case 8:
      m = { t: "e", v: 0 };
      break;
    case 9:
      if (o > -1) m = { t: "s", v: r[o] };
      else if (x > -1) m = { t: "s", v: a[x] };
      else if (!isNaN(d)) m = { t: "n", v: d };
      else throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return m;
}
function xR(e, a, r) {
  var i = dd(e), s = i.getUint32(8, true), c = 12, u = -1, o = -1, x = NaN, d = NaN, v = new Date(2001, 0, 1);
  s & 1 && (x = fR(e, c), c += 16), s & 2 && (d = i.getFloat64(c, true), c += 8), s & 4 && (v.setTime(v.getTime() + i.getFloat64(c, true) * 1e3), c += 8), s & 8 && (o = i.getUint32(c, true), c += 4), s & 16 && (u = i.getUint32(c, true), c += 4);
  var m;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      m = { t: "n", v: x };
      break;
    case 3:
      m = { t: "s", v: a[o] };
      break;
    case 5:
      m = { t: "d", v };
      break;
    case 6:
      m = { t: "b", v: d > 0 };
      break;
    case 7:
      m = { t: "n", v: d / 86400 };
      break;
    case 8:
      m = { t: "e", v: 0 };
      break;
    case 9:
      if (u > -1) m = { t: "s", v: r[u] };
      else throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(s & 31, " : ").concat(e.slice(0, 4)));
      break;
    case 10:
      m = { t: "n", v: x };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(s & 31, " : ").concat(e.slice(0, 4)));
  }
  return m;
}
function vR(e, a, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return dR(e, a, r, e[0]);
    case 5:
      return xR(e, a, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function jn(e) {
  var a = gr(e);
  return s0(a[1][0].data);
}
function Gm(e, a) {
  var r = gr(a.data), i = Qt(r[1][0].data), s = r[3], c = [];
  return (s || []).forEach(function(u) {
    var o = gr(u.data), x = Qt(o[1][0].data) >>> 0;
    switch (i) {
      case 1:
        c[x] = Eh(o[3][0].data);
        break;
      case 8:
        {
          var d = e[jn(o[9][0].data)][0], v = gr(d.data), m = e[jn(v[1][0].data)][0], g = Qt(m.meta[1][0].data);
          if (g != 2001) throw new Error("2000 unexpected reference to ".concat(g));
          var y = gr(m.data);
          c[x] = y[3].map(function(T) {
            return Eh(T.data);
          }).join("");
        }
        break;
    }
  }), c;
}
function pR(e, a) {
  var r, i, s, c, u, o, x, d, v, m, g, y, T, E, _ = gr(e), O = Qt(_[1][0].data) >>> 0, F = Qt(_[2][0].data) >>> 0, k = ((i = (r = _[8]) == null ? void 0 : r[0]) == null ? void 0 : i.data) && Qt(_[8][0].data) > 0 || false, M, X;
  if ((c = (s = _[7]) == null ? void 0 : s[0]) != null && c.data && a != 0) M = (o = (u = _[7]) == null ? void 0 : u[0]) == null ? void 0 : o.data, X = (d = (x = _[6]) == null ? void 0 : x[0]) == null ? void 0 : d.data;
  else if ((m = (v = _[4]) == null ? void 0 : v[0]) != null && m.data && a != 1) M = (y = (g = _[4]) == null ? void 0 : g[0]) == null ? void 0 : y.data, X = (E = (T = _[3]) == null ? void 0 : T[0]) == null ? void 0 : E.data;
  else throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var z = k ? 4 : 1, C = dd(M), S = [], w = 0; w < M.length / 2; ++w) {
    var N = C.getUint16(w * 2, true);
    N < 65535 && S.push([w, N]);
  }
  if (S.length != F) throw "Expected ".concat(F, " cells, found ").concat(S.length);
  var B = [];
  for (w = 0; w < S.length - 1; ++w) B[S[w][0]] = X.subarray(S[w][1] * z, S[w + 1][1] * z);
  return S.length >= 1 && (B[S[S.length - 1][0]] = X.subarray(S[S.length - 1][1] * z)), { R: O, cells: B };
}
function mR(e, a) {
  var r, i = gr(a.data), s = (r = i == null ? void 0 : i[7]) != null && r[0] ? Qt(i[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, c = xd(i[5], function(u) {
    return pR(u, s);
  });
  return { nrows: Qt(i[4][0].data) >>> 0, data: c.reduce(function(u, o) {
    return u[o.R] || (u[o.R] = []), o.cells.forEach(function(x, d) {
      if (u[o.R][d]) throw new Error("Duplicate cell r=".concat(o.R, " c=").concat(d));
      u[o.R][d] = x;
    }), u;
  }, []) };
}
function gR(e, a, r) {
  var i, s = gr(a.data), c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (c.e.r = (Qt(s[6][0].data) >>> 0) - 1, c.e.r < 0) throw new Error("Invalid row varint ".concat(s[6][0].data));
  if (c.e.c = (Qt(s[7][0].data) >>> 0) - 1, c.e.c < 0) throw new Error("Invalid col varint ".concat(s[7][0].data));
  r["!ref"] = ut(c);
  var u = gr(s[4][0].data), o = Gm(e, e[jn(u[4][0].data)][0]), x = (i = u[17]) != null && i[0] ? Gm(e, e[jn(u[17][0].data)][0]) : [], d = gr(u[3][0].data), v = 0;
  d[1].forEach(function(m) {
    var g = gr(m.data), y = e[jn(g[2][0].data)][0], T = Qt(y.meta[1][0].data);
    if (T != 6002) throw new Error("6001 unexpected reference to ".concat(T));
    var E = mR(e, y);
    E.data.forEach(function(_, O) {
      _.forEach(function(F, k) {
        var M = Ye({ r: v + O, c: k }), X = vR(F, o, x);
        X && (r[M] = X);
      });
    }), v += E.nrows;
  });
}
function yR(e, a) {
  var r = gr(a.data), i = { "!ref": "A1" }, s = e[jn(r[2][0].data)], c = Qt(s[0].meta[1][0].data);
  if (c != 6001) throw new Error("6000 unexpected reference to ".concat(c));
  return gR(e, s[0], i), i;
}
function ER(e, a) {
  var r, i = gr(a.data), s = { name: (r = i[1]) != null && r[0] ? Eh(i[1][0].data) : "", sheets: [] }, c = xd(i[2], jn);
  return c.forEach(function(u) {
    e[u].forEach(function(o) {
      var x = Qt(o.meta[1][0].data);
      x == 6e3 && s.sheets.push(yR(e, o));
    });
  }), s;
}
function _R(e, a) {
  var r = md(), i = gr(a.data), s = xd(i[1], jn);
  if (s.forEach(function(c) {
    e[c].forEach(function(u) {
      var o = Qt(u.meta[1][0].data);
      if (o == 2) {
        var x = ER(e, u);
        x.sheets.forEach(function(d, v) {
          gd(r, d, v == 0 ? x.name : x.name + "_" + v, true);
        });
      }
    });
  }), r.SheetNames.length == 0) throw new Error("Empty NUMBERS file");
  return r;
}
function Qo(e) {
  var a, r, i, s, c = {}, u = [];
  if (e.FullPaths.forEach(function(x) {
    if (x.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(x) {
    if (x.name.match(/\.iwa$/)) {
      var d;
      try {
        d = hR(x.content);
      } catch (m) {
        return console.log("?? " + x.content.length + " " + (m.message || m));
      }
      var v;
      try {
        v = uR(d);
      } catch (m) {
        return console.log("## " + (m.message || m));
      }
      v.forEach(function(m) {
        c[m.id] = m.messages, u.push(m.id);
      });
    }
  }), !u.length) throw new Error("File has no messages");
  var o = ((s = (i = (r = (a = c == null ? void 0 : c[1]) == null ? void 0 : a[0]) == null ? void 0 : r.meta) == null ? void 0 : i[1]) == null ? void 0 : s[0].data) && Qt(c[1][0].meta[1][0].data) == 1 && c[1][0];
  if (o || u.forEach(function(x) {
    c[x].forEach(function(d) {
      var v = Qt(d.meta[1][0].data) >>> 0;
      if (v == 1) if (!o) o = d;
      else throw new Error("Document has multiple roots");
    });
  }), !o) throw new Error("Cannot find Document root");
  return _R(c, o);
}
function TR(e) {
  return function(r) {
    for (var i = 0; i != e.length; ++i) {
      var s = e[i];
      r[s[0]] === void 0 && (r[s[0]] = s[1]), s[2] === "n" && (r[s[0]] = Number(r[s[0]]));
    }
  };
}
function vd(e) {
  TR([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
}
function wR(e) {
  return ms.WS.indexOf(e) > -1 ? "sheet" : e == ms.CS ? "chart" : e == ms.DS ? "dialog" : e == ms.MS ? "macro" : e && e.length ? e : "sheet";
}
function SR(e, a) {
  if (!e) return 0;
  try {
    e = a.map(function(i) {
      return i.id || (i.id = i.strRelID), [i.name, e["!id"][i.id].Target, wR(e["!id"][i.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function AR(e, a, r, i, s, c, u, o, x, d, v, m) {
  try {
    c[i] = Xl(Xr(e, r, true), a);
    var g = Yt(e, a), y;
    switch (o) {
      case "sheet":
        y = DO(g, a, s, x, c[i], d, v, m);
        break;
      case "chart":
        if (y = FO(g, a, s, x, c[i], d, v, m), !y || !y["!drawel"]) break;
        var T = Ul(y["!drawel"].Target, a), E = vh(T), _ = RC(Xr(e, T, true), Xl(Xr(e, E, true), T)), O = Ul(_, T), F = vh(O);
        y = xO(Xr(e, O, true), O, x, Xl(Xr(e, F, true), O), d, y);
        break;
      case "macro":
        y = NO(g, a, s, x, c[i], d, v, m);
        break;
      case "dialog":
        y = MO(g, a, s, x, c[i], d, v, m);
        break;
      default:
        throw new Error("Unrecognized sheet type " + o);
    }
    u[i] = y;
    var k = [];
    c && c[i] && La(c[i]).forEach(function(M) {
      var X = "";
      if (c[i][M].Type == ms.CMNT) {
        X = Ul(c[i][M].Target, a);
        var z = IO(Yt(e, X, true), X, x);
        if (!z || !z.length) return;
        bm(y, z, false);
      }
      c[i][M].Type == ms.TCMNT && (X = Ul(c[i][M].Target, a), k = k.concat(FC(Yt(e, X, true), x)));
    }), k && k.length && bm(y, k, true, x.people || []);
  } catch (M) {
    if (x.WTF) throw M;
  }
}
function na(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function kR(e, a) {
  if (R2(), a = a || {}, vd(a), sa(e, "META-INF/manifest.xml") || sa(e, "objectdata.xml")) return jm(e, a);
  if (sa(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof Qo < "u") {
      if (e.FileIndex) return Qo(e);
      var r = ft.utils.cfb_new();
      return tm(e).forEach(function(ge) {
        C3(r, ge, k3(e, ge));
      }), Qo(r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!sa(e, "[Content_Types].xml")) throw sa(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : sa(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var i = tm(e), s = TA(Xr(e, "[Content_Types].xml")), c = false, u, o;
  if (s.workbooks.length === 0 && (o = "xl/workbook.xml", Yt(e, o, true) && s.workbooks.push(o)), s.workbooks.length === 0) {
    if (o = "xl/workbook.bin", !Yt(e, o, true)) throw new Error("Could not find workbook");
    s.workbooks.push(o), c = true;
  }
  s.workbooks[0].slice(-3) == "bin" && (c = true);
  var x = {}, d = {};
  if (!a.bookSheets && !a.bookProps) {
    if (ql = [], s.sst) try {
      ql = UO(Yt(e, na(s.sst)), s.sst, a);
    } catch (ge) {
      if (a.WTF) throw ge;
    }
    a.cellStyles && s.themes.length && (x = BO(Xr(e, s.themes[0].replace(/^\//, ""), true) || "", s.themes[0], a)), s.style && (d = LO(Yt(e, na(s.style)), s.style, x, a));
  }
  s.links.map(function(ge) {
    try {
      var fe = Xl(Xr(e, vh(na(ge))), ge);
      return jO(Yt(e, na(ge)), fe, ge, a);
    } catch {
    }
  });
  var v = RO(Yt(e, na(s.workbooks[0])), s.workbooks[0], a), m = {}, g = "";
  s.coreprops.length && (g = Yt(e, na(s.coreprops[0]), true), g && (m = iy(g)), s.extprops.length !== 0 && (g = Yt(e, na(s.extprops[0]), true), g && CA(g, m, a)));
  var y = {};
  (!a.bookSheets || a.bookProps) && s.custprops.length !== 0 && (g = Xr(e, na(s.custprops[0]), true), g && (y = OA(g, a)));
  var T = {};
  if ((a.bookSheets || a.bookProps) && (v.Sheets ? u = v.Sheets.map(function(fe) {
    return fe.name;
  }) : m.Worksheets && m.SheetNames.length > 0 && (u = m.SheetNames), a.bookProps && (T.Props = m, T.Custprops = y), a.bookSheets && typeof u < "u" && (T.SheetNames = u), a.bookSheets ? T.SheetNames : a.bookProps)) return T;
  u = {};
  var E = {};
  a.bookDeps && s.calcchain && (E = HO(Yt(e, na(s.calcchain)), s.calcchain));
  var _ = 0, O = {}, F, k;
  {
    var M = v.Sheets;
    m.Worksheets = M.length, m.SheetNames = [];
    for (var X = 0; X != M.length; ++X) m.SheetNames[X] = M[X].name;
  }
  var z = c ? "bin" : "xml", C = s.workbooks[0].lastIndexOf("/"), S = (s.workbooks[0].slice(0, C + 1) + "_rels/" + s.workbooks[0].slice(C + 1) + ".rels").replace(/^\//, "");
  sa(e, S) || (S = "xl/_rels/workbook." + z + ".rels");
  var w = Xl(Xr(e, S, true), S.replace(/_rels.*/, "s5s"));
  (s.metadata || []).length >= 1 && (a.xlmeta = zO(Yt(e, na(s.metadata[0])), s.metadata[0], a)), (s.people || []).length >= 1 && (a.people = NC(Yt(e, na(s.people[0])), a)), w && (w = SR(w, v.Sheets));
  var N = Yt(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (_ = 0; _ != m.Worksheets; ++_) {
    var B = "sheet";
    if (w && w[_] ? (F = "xl/" + w[_][1].replace(/[\/]?xl\//, ""), sa(e, F) || (F = w[_][1]), sa(e, F) || (F = S.replace(/_rels\/.*$/, "") + w[_][1]), B = w[_][2]) : (F = "xl/worksheets/sheet" + (_ + 1 - N) + "." + z, F = F.replace(/sheet0\./, "sheet.")), k = F.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), a && a.sheets != null) switch (typeof a.sheets) {
      case "number":
        if (_ != a.sheets) continue e;
        break;
      case "string":
        if (m.SheetNames[_].toLowerCase() != a.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(a.sheets)) {
          for (var U = false, ne = 0; ne != a.sheets.length; ++ne) typeof a.sheets[ne] == "number" && a.sheets[ne] == _ && (U = 1), typeof a.sheets[ne] == "string" && a.sheets[ne].toLowerCase() == m.SheetNames[_].toLowerCase() && (U = 1);
          if (!U) continue e;
        }
    }
    AR(e, F, k, m.SheetNames[_], _, O, u, B, a, v, x, d);
  }
  return T = { Directory: s, Workbook: v, Props: m, Custprops: y, Deps: E, Sheets: u, SheetNames: m.SheetNames, Strings: ql, Styles: d, Themes: x, SSF: or(We) }, a && a.bookFiles && (e.files ? (T.keys = i, T.files = e.files) : (T.keys = [], T.files = {}, e.FullPaths.forEach(function(ge, fe) {
    ge = ge.replace(/^Root Entry[\/]/, ""), T.keys.push(ge), T.files[ge] = e.FileIndex[fe];
  }))), a && a.bookVBA && (s.vba.length > 0 ? T.vbaraw = Yt(e, na(s.vba[0]), true) : s.defaults && s.defaults.bin === UC && (T.vbaraw = Yt(e, "xl/vbaProject.bin", true))), T;
}
function CR(e, a) {
  var r = a || {}, i = "Workbook", s = ft.find(e, i);
  try {
    if (i = "/!DataSpaces/Version", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    if (y8(s.content), i = "/!DataSpaces/DataSpaceMap", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    var c = _8(s.content);
    if (c.length !== 1 || c[0].comps.length !== 1 || c[0].comps[0].t !== 0 || c[0].name !== "StrongEncryptionDataSpace" || c[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + i);
    if (i = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    var u = T8(s.content);
    if (u.length != 1 || u[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + i);
    if (i = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    S8(s.content);
  } catch {
  }
  if (i = "/EncryptionInfo", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
  var o = A8(s.content);
  if (i = "/EncryptedPackage", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
  if (o[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(o[1], s.content, r.password || "", r);
  if (o[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(o[1], s.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function pd(e, a) {
  var r = "";
  switch ((a || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = $r(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (a && a.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function bR(e, a) {
  return ft.find(e, "EncryptedPackage") ? CR(e, a) : Gy(e, a);
}
function OR(e, a) {
  var r, i = e, s = a || {};
  return s.type || (s.type = lt && Buffer.isBuffer(e) ? "buffer" : "base64"), r = B2(i, s), kR(r, s);
}
function $y(e, a) {
  var r = 0;
  e: for (; r < e.length; ) switch (e.charCodeAt(r)) {
    case 10:
    case 13:
    case 32:
      ++r;
      break;
    case 60:
      return gh(e.slice(r), a);
    default:
      break e;
  }
  return a0.to_workbook(e, a);
}
function RR(e, a) {
  var r = "", i = pd(e, a);
  switch (a.type) {
    case "base64":
      r = $r(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = wi(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return i[0] == 239 && i[1] == 187 && i[2] == 191 && (r = bt(r)), a.type = "binary", $y(r, a);
}
function DR(e, a) {
  var r = e;
  return a.type == "base64" && (r = $r(r)), r = hh.utils.decode(1200, r.slice(2), "str"), a.type = "binary", $y(r, a);
}
function FR(e) {
  return e.match(/[^\x00-\x7F]/) ? Il(e) : e;
}
function Jo(e, a, r, i) {
  return i ? (r.type = "string", a0.to_workbook(e, r)) : a0.to_workbook(a, r);
}
function Th(e, a) {
  g2();
  var r = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return Th(new Uint8Array(e), (r = or(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var i = e, s = [0, 0, 0, 0], c = false;
  if (r.cellStyles && (r.cellNF = true, r.sheetStubs = true), Es = {}, r.dateNF && (Es.dateNF = r.dateNF), r.type || (r.type = lt && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = lt ? "buffer" : "binary", i = y3(e), typeof Uint8Array < "u" && !lt && (r.type = "array")), r.type == "string" && (c = true, r.type = "binary", r.codepage = 65001, i = FR(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var u = new ArrayBuffer(3), o = new Uint8Array(u);
    if (o.foo = "bar", !o.foo) return r = or(r), r.type = "array", Th(qh(i), r);
  }
  switch ((s = pd(i, r))[0]) {
    case 208:
      if (s[1] === 207 && s[2] === 17 && s[3] === 224 && s[4] === 161 && s[5] === 177 && s[6] === 26 && s[7] === 225) return bR(ft.read(i, r), r);
      break;
    case 9:
      if (s[1] <= 8) return Gy(i, r);
      break;
    case 60:
      return gh(i, r);
    case 73:
      if (s[1] === 73 && s[2] === 42 && s[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (s[1] === 68) return s8(i, r);
      break;
    case 84:
      if (s[1] === 65 && s[2] === 66 && s[3] === 76) return n8.to_workbook(i, r);
      break;
    case 80:
      return s[1] === 75 && s[2] < 9 && s[3] < 9 ? OR(i, r) : Jo(e, i, r, c);
    case 239:
      return s[3] === 60 ? gh(i, r) : Jo(e, i, r, c);
    case 255:
      if (s[1] === 254) return DR(i, r);
      if (s[1] === 0 && s[2] === 2 && s[3] === 0) return $l.to_workbook(i, r);
      break;
    case 0:
      if (s[1] === 0 && (s[2] >= 2 && s[3] === 0 || s[2] === 0 && (s[3] === 8 || s[3] === 9))) return $l.to_workbook(i, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Cm.to_workbook(i, r);
    case 123:
      if (s[1] === 92 && s[2] === 114 && s[3] === 116) return U8.to_workbook(i, r);
      break;
    case 10:
    case 13:
    case 32:
      return RR(i, r);
    case 137:
      if (s[1] === 80 && s[2] === 78 && s[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return r8.indexOf(s[0]) > -1 && s[2] <= 12 && s[3] <= 31 ? Cm.to_workbook(i, r) : Jo(e, i, r, c);
}
function NR(e, a, r, i, s, c, u, o) {
  var x = hr(r), d = o.defval, v = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw"), m = true, g = s === 1 ? [] : {};
  if (s !== 1) if (Object.defineProperty) try {
    Object.defineProperty(g, "__rowNum__", { value: r, enumerable: false });
  } catch {
    g.__rowNum__ = r;
  }
  else g.__rowNum__ = r;
  if (!u || e[r]) for (var y = a.s.c; y <= a.e.c; ++y) {
    var T = u ? e[r][y] : e[i[y] + x];
    if (T === void 0 || T.t === void 0) {
      if (d === void 0) continue;
      c[y] != null && (g[c[y]] = d);
      continue;
    }
    var E = T.v;
    switch (T.t) {
      case "z":
        if (E == null) break;
        continue;
      case "e":
        E = E == 0 ? null : void 0;
        break;
      case "s":
      case "d":
      case "b":
      case "n":
        break;
      default:
        throw new Error("unrecognized type " + T.t);
    }
    if (c[y] != null) {
      if (E == null) if (T.t == "e" && E === null) g[c[y]] = null;
      else if (d !== void 0) g[c[y]] = d;
      else if (v && E === null) g[c[y]] = null;
      else continue;
      else g[c[y]] = v && (T.t !== "n" || T.t === "n" && o.rawNumbers !== false) ? E : sn(T, E, o);
      E != null && (m = false);
    }
  }
  return { row: g, isempty: m };
}
function wh(e, a) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 }, i = 0, s = 1, c = [], u = 0, o = "", x = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, d = a || {}, v = d.range != null ? d.range : e["!ref"];
  switch (d.header === 1 ? i = 1 : d.header === "A" ? i = 2 : Array.isArray(d.header) ? i = 3 : d.header == null && (i = 0), typeof v) {
    case "string":
      x = Ut(v);
      break;
    case "number":
      x = Ut(e["!ref"]), x.s.r = v;
      break;
    default:
      x = v;
  }
  i > 0 && (s = 0);
  var m = hr(x.s.r), g = [], y = [], T = 0, E = 0, _ = Array.isArray(e), O = x.s.r, F = 0, k = {};
  _ && !e[O] && (e[O] = []);
  var M = d.skipHidden && e["!cols"] || [], X = d.skipHidden && e["!rows"] || [];
  for (F = x.s.c; F <= x.e.c; ++F) if (!(M[F] || {}).hidden) switch (g[F] = Zt(F), r = _ ? e[O][F] : e[g[F] + m], i) {
    case 1:
      c[F] = F - x.s.c;
      break;
    case 2:
      c[F] = g[F];
      break;
    case 3:
      c[F] = d.header[F - x.s.c];
      break;
    default:
      if (r == null && (r = { w: "__EMPTY", t: "s" }), o = u = sn(r, null, d), E = k[u] || 0, !E) k[u] = 1;
      else {
        do
          o = u + "_" + E++;
        while (k[o]);
        k[u] = E, k[o] = 1;
      }
      c[F] = o;
  }
  for (O = x.s.r + s; O <= x.e.r; ++O) if (!(X[O] || {}).hidden) {
    var z = NR(e, x, O, g, i, c, _, d);
    (z.isempty === false || (i === 1 ? d.blankrows !== false : d.blankrows)) && (y[T++] = z.row);
  }
  return y.length = T, y;
}
var Vm = /"/g;
function MR(e, a, r, i, s, c, u, o) {
  for (var x = true, d = [], v = "", m = hr(r), g = a.s.c; g <= a.e.c; ++g) if (i[g]) {
    var y = o.dense ? (e[r] || [])[g] : e[i[g] + m];
    if (y == null) v = "";
    else if (y.v != null) {
      x = false, v = "" + (o.rawNumbers && y.t == "n" ? y.v : sn(y, null, o));
      for (var T = 0, E = 0; T !== v.length; ++T) if ((E = v.charCodeAt(T)) === s || E === c || E === 34 || o.forceQuotes) {
        v = '"' + v.replace(Vm, '""') + '"';
        break;
      }
      v == "ID" && (v = '"ID"');
    } else y.f != null && !y.F ? (x = false, v = "=" + y.f, v.indexOf(",") >= 0 && (v = '"' + v.replace(Vm, '""') + '"')) : v = "";
    d.push(v);
  }
  return o.blankrows === false && x ? null : d.join(u);
}
function qy(e, a) {
  var r = [], i = a ?? {};
  if (e == null || e["!ref"] == null) return "";
  var s = Ut(e["!ref"]), c = i.FS !== void 0 ? i.FS : ",", u = c.charCodeAt(0), o = i.RS !== void 0 ? i.RS : `
`, x = o.charCodeAt(0), d = new RegExp((c == "|" ? "\\|" : c) + "+$"), v = "", m = [];
  i.dense = Array.isArray(e);
  for (var g = i.skipHidden && e["!cols"] || [], y = i.skipHidden && e["!rows"] || [], T = s.s.c; T <= s.e.c; ++T) (g[T] || {}).hidden || (m[T] = Zt(T));
  for (var E = 0, _ = s.s.r; _ <= s.e.r; ++_) (y[_] || {}).hidden || (v = MR(e, s, _, m, u, x, c, i), v != null && (i.strip && (v = v.replace(d, "")), (v || i.blankrows !== false) && r.push((E++ ? o : "") + v)));
  return delete i.dense, r.join("");
}
function LR(e, a) {
  a || (a = {}), a.FS = "	", a.RS = `
`;
  var r = qy(e, a);
  return r;
}
function BR(e) {
  var a = "", r, i = "";
  if (e == null || e["!ref"] == null) return [];
  var s = Ut(e["!ref"]), c = "", u = [], o, x = [], d = Array.isArray(e);
  for (o = s.s.c; o <= s.e.c; ++o) u[o] = Zt(o);
  for (var v = s.s.r; v <= s.e.r; ++v) for (c = hr(v), o = s.s.c; o <= s.e.c; ++o) if (a = u[o] + c, r = d ? (e[v] || [])[o] : e[a], i = "", r !== void 0) {
    if (r.F != null) {
      if (a = r.F, !r.f) continue;
      i = r.f, a.indexOf(":") == -1 && (a = a + ":" + a);
    }
    if (r.f != null) i = r.f;
    else {
      if (r.t == "z") continue;
      if (r.t == "n" && r.v != null) i = "" + r.v;
      else if (r.t == "b") i = r.v ? "TRUE" : "FALSE";
      else if (r.w !== void 0) i = "'" + r.w;
      else {
        if (r.v === void 0) continue;
        r.t == "s" ? i = "'" + r.v : i = "" + r.v;
      }
    }
    x[x.length] = a + "=" + i;
  }
  return x;
}
function Ky(e, a, r) {
  var i = r || {}, s = +!i.skipHeader, c = e || {}, u = 0, o = 0;
  if (c && i.origin != null) if (typeof i.origin == "number") u = i.origin;
  else {
    var x = typeof i.origin == "string" ? kr(i.origin) : i.origin;
    u = x.r, o = x.c;
  }
  var d, v = { s: { c: 0, r: 0 }, e: { c: o, r: u + a.length - 1 + s } };
  if (c["!ref"]) {
    var m = Ut(c["!ref"]);
    v.e.c = Math.max(v.e.c, m.e.c), v.e.r = Math.max(v.e.r, m.e.r), u == -1 && (u = m.e.r + 1, v.e.r = u + a.length - 1 + s);
  } else u == -1 && (u = 0, v.e.r = a.length - 1 + s);
  var g = i.header || [], y = 0;
  a.forEach(function(E, _) {
    La(E).forEach(function(O) {
      (y = g.indexOf(O)) == -1 && (g[y = g.length] = O);
      var F = E[O], k = "z", M = "", X = Ye({ c: o + y, r: u + _ + s });
      d = l0(c, X), F && typeof F == "object" && !(F instanceof Date) ? c[X] = F : (typeof F == "number" ? k = "n" : typeof F == "boolean" ? k = "b" : typeof F == "string" ? k = "s" : F instanceof Date ? (k = "d", i.cellDates || (k = "n", F = br(F)), M = i.dateNF || We[14]) : F === null && i.nullError && (k = "e", F = 0), d ? (d.t = k, d.v = F, delete d.w, delete d.R, M && (d.z = M)) : c[X] = d = { t: k, v: F }, M && (d.z = M));
    });
  }), v.e.c = Math.max(v.e.c, o + g.length - 1);
  var T = hr(u);
  if (s) for (y = 0; y < g.length; ++y) c[Zt(y + o) + T] = { t: "s", v: g[y] };
  return c["!ref"] = ut(v), c;
}
function UR(e, a) {
  return Ky(null, e, a);
}
function l0(e, a, r) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var i = kr(a);
      return e[i.r] || (e[i.r] = []), e[i.r][i.c] || (e[i.r][i.c] = { t: "z" });
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? l0(e, Ye(a)) : l0(e, Ye({ r: a, c: r || 0 }));
}
function IR(e, a) {
  if (typeof a == "number") {
    if (a >= 0 && e.SheetNames.length > a) return a;
    throw new Error("Cannot find sheet # " + a);
  } else if (typeof a == "string") {
    var r = e.SheetNames.indexOf(a);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + a + "|");
  } else throw new Error("Cannot find sheet |" + a + "|");
}
function md() {
  return { SheetNames: [], Sheets: {} };
}
function gd(e, a, r, i) {
  var s = 1;
  if (!r) for (; s <= 65535 && e.SheetNames.indexOf(r = "Sheet" + s) != -1; ++s, r = void 0) ;
  if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (i && e.SheetNames.indexOf(r) >= 0) {
    var c = r.match(/(^.*?)(\d+)$/);
    s = c && +c[2] || 0;
    var u = c && c[1] || r;
    for (++s; s <= 65535 && e.SheetNames.indexOf(r = u + s) != -1; ++s) ;
  }
  if (TO(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = a, r;
}
function HR(e, a, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var i = IR(e, a);
  switch (e.Workbook.Sheets[i] || (e.Workbook.Sheets[i] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[i].Hidden = r;
}
function jR(e, a) {
  return e.z = a, e;
}
function Wy(e, a, r) {
  return a ? (e.l = { Target: a }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function zR(e, a, r) {
  return Wy(e, "#" + a, r);
}
function PR(e, a, r) {
  e.c || (e.c = []), e.c.push({ t: a, a: r || "SheetJS" });
}
function GR(e, a, r, i) {
  for (var s = typeof a != "string" ? a : Ut(a), c = typeof a == "string" ? a : ut(a), u = s.s.r; u <= s.e.r; ++u) for (var o = s.s.c; o <= s.e.c; ++o) {
    var x = l0(e, u, o);
    x.t = "n", x.F = c, delete x.v, u == s.s.r && o == s.s.c && (x.f = r, i && (x.D = true));
  }
  return e;
}
var VR = { encode_col: Zt, encode_row: hr, encode_cell: Ye, encode_range: ut, decode_col: ad, decode_row: rd, split_cell: tA, decode_cell: kr, decode_range: Ds, format_cell: sn, sheet_add_aoa: ey, sheet_add_json: Ky, sheet_add_dom: Vy, aoa_to_sheet: Fs, json_to_sheet: UR, table_to_sheet: Xy, table_to_book: sR, sheet_to_csv: qy, sheet_to_txt: LR, sheet_to_json: wh, sheet_to_html: iR, sheet_to_formulae: BR, sheet_to_row_object_array: wh, sheet_get_cell: l0, book_new: md, book_append_sheet: gd, book_set_sheet_visibility: HR, cell_set_number_format: jR, cell_set_hyperlink: Wy, cell_set_internal_link: zR, cell_add_comment: PR, sheet_set_array_formula: GR, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
const XR = /* @__PURE__ */ new Map([["\u5E79\u90E8\u59D3\u540D", "name"], ["\u7533\u8ACB\u8005\u59D3\u540D", "name"], ["\u9762\u8A66\u5B98\u59D3\u540D", "name"], ["\u9762\u8A66\u8005\u59D3\u540D", "name"], ["\u61C9\u8A66\u8005\u59D3\u540D", "name"], ["\u53EF\u9762\u8A66\u6642\u9593", "availability"], ["\u9762\u8A66\u6642\u9593", "availability"], ["\u6642\u9593", "availability"], ["\u7533\u8ACB\u8EAB\u4EFD", "position"], ["\u8077\u4F4D", "position"], ["\u9762\u8A66\u8005\u53EF\u9762\u8A66\u6642\u9593", "availability"], ["time", "availability"], ["specialization", "position"], ["positionapplied", "position"]]), YR = () => {
  const { groupRestrictions: e, updateGroupRestriction: a, addRestriction: r, removeRestriction: i, onIntervieweesLoaded: s, onInterviewersLoaded: c, interviewers: u, interviewees: o } = Os(), [x, d] = ee.useState(""), [v, m] = ee.useState(""), [g, y] = ee.useState({ interviewers: ["\u6240\u6709"], interviewees: ["\u6240\u6709"] }), T = (C) => C.map((S) => {
    const w = {};
    for (const N in S) {
      const B = XR.get(N.toLowerCase());
      B === "availability" && typeof S[N] == "string" ? w[B] = E(S[N]) : B && (w[B] = S[N]), w[N] = S[N];
    }
    return "id" in w || (w.id = `${w.name}${PS()}`), w;
  }), E = (C) => C ? C.split(",").map((w) => w.trim()).map((w) => {
    if (w.includes("/") && w.includes("T")) return w;
    const N = ["-", "~", "\uFF5E", "\uFF0D"];
    let B = "", U = "";
    for (const ne of N) if (w.includes(ne)) {
      [B, U] = w.split(ne).map((ge) => ge.trim());
      break;
    }
    if (B && U) {
      const ne = B.split(" "), ge = ne[0], fe = ne[1] || "00:00", J = (/* @__PURE__ */ new Date()).getFullYear(), [ae, we] = ge.split("/"), Q = new Date(J, parseInt(ae) - 1, parseInt(we)), [H, re] = fe.split(":");
      Q.setHours(parseInt(H), parseInt(re), 0, 0);
      const R = new Date(Q), [j, q] = U.split(":");
      R.setHours(parseInt(j), parseInt(q), 0, 0);
      const K = (ie) => ie.toLocaleString("sv-SE").replace(" ", "T").substring(0, 19);
      return `${K(Q)}/${K(R)}`;
    }
    return w;
  }).filter(Boolean) : [], _ = (C) => new Promise((S, w) => {
    const N = new FileReader();
    N.onload = (B) => {
      var _a2;
      try {
        const U = (_a2 = B.target) == null ? void 0 : _a2.result, ne = new Uint8Array(U), ge = Th(ne, { type: "array" }), fe = ge.SheetNames[0], J = ge.Sheets[fe], ae = VR.sheet_to_json(J);
        S(ae);
      } catch (U) {
        w(U);
      }
    }, N.onerror = (B) => w(B), N.readAsArrayBuffer(C);
  }), O = async (C, S, w, N) => {
    if (C) {
      S(C.name);
      try {
        if (C.name.endsWith(".csv")) qc.parse(C, { header: true, complete: (B) => {
          w(T(B.data));
        }, error: (B) => {
          console.error("Error parsing file:", B), alert(`Error parsing ${N} file`);
        } });
        else {
          const B = await _(C);
          w(T(B));
        }
      } catch (B) {
        console.error("Error parsing file:", B), alert(`Error parsing ${N} file`);
      }
    }
  }, F = (C) => {
    var _a2;
    const S = (_a2 = C.target.files) == null ? void 0 : _a2[0];
    S && O(S, d, c, "interviewers");
  }, k = (C) => {
    var _a2;
    const S = (_a2 = C.target.files) == null ? void 0 : _a2[0];
    S && O(S, m, s, "interviewees");
  }, M = (C) => {
    const S = `/schedule/samples/sample_${C}.csv`, w = document.createElement("a");
    w.href = S, w.download = `sample_${C}.csv`, document.body.appendChild(w), w.click(), document.body.removeChild(w);
  }, X = async (C) => {
    const S = /* @__PURE__ */ new Map([["interviewers", "/schedule/samples/real/interview_schedule_interviewers.csv"], ["interviewees", "/schedule/samples/real/interview_schedule_interviewees.csv"]]);
    try {
      const N = await (await fetch(`${S.get(C)}`)).blob(), B = new File([N], `sample_${C}.csv`, { type: "text/csv" });
      switch (C) {
        case "interviewers":
          O(B, d, c, "interviewers");
          break;
        case "interviewees":
          O(B, m, s, "interviewees");
          break;
      }
    } catch (w) {
      console.error("Error loading sample:", w), alert(`Error loading sample ${C} file`);
    }
  };
  ee.useEffect(() => {
    if (u.length > 0) {
      const C = /* @__PURE__ */ new Set(["\u6240\u6709"]);
      u.forEach((S) => {
        S.position && C.add(S.position);
      }), y((S) => ({ ...S, interviewers: Array.from(C).sort((w, N) => w === "\u6240\u6709" ? -1 : N === "\u6240\u6709" ? 1 : w.localeCompare(N)) }));
    }
    if (o.length > 0) {
      const C = /* @__PURE__ */ new Set(["\u6240\u6709"]);
      o.forEach((S) => {
        S.position && C.add(S.position);
      }), y((S) => ({ ...S, interviewees: Array.from(C).sort((w, N) => w === "\u6240\u6709" ? -1 : N === "\u6240\u6709" ? 1 : w.localeCompare(N)) }));
    }
  }, [u, o]);
  const z = (C) => W.jsxs("div", { className: "restrictions-container", children: [W.jsxs("span", { className: "restriction-label", children: [C === "interviewers" ? "\u9762\u8A66\u5B98" : "\u61C9\u8A66\u8005", " \u6578\u91CF\u689D\u4EF6\u9650\u5236"] }), C === "interviewees" ? W.jsx("div", { className: "restriction-box", children: W.jsx("div", { className: "restriction-row", style: { justifyContent: "center", color: "gray", fontWeight: 500 }, children: "\u8077\u4F4D\u76F8\u7B49" }) }, "interviewees-same-position-constrain") : null, e[C].map((S, w) => W.jsx("div", { className: "restriction-box", children: W.jsxs("div", { className: "restriction-row", children: [W.jsx(oi.Select, { value: S.targetPosition || "\u6240\u6709", className: "restriction-column", onChange: (N) => a(C, w, { targetPosition: N.target.value }), children: g[C].map((N) => W.jsx("option", { value: N, children: N }, N)) }), W.jsx(oi.Control, { type: "number", className: "restriction-column", min: "1", value: S.minCount, onChange: (N) => a(C, w, { minCount: parseInt(N.target.value) || 1 }), placeholder: "\u6700\u5C0F\u6578\u91CF" }), W.jsx(W.Fragment, { children: "~" }), W.jsx(oi.Control, { type: "number", className: "restriction-column", min: "1", value: S.maxCount, onChange: (N) => a(C, w, { maxCount: parseInt(N.target.value) || 1 }), placeholder: "\u6700\u5927\u6578\u91CF" }), W.jsx(Bn, { variant: "outline-danger", size: "sm", className: "remove-btn", onClick: () => i(C, w), children: "\u2715" })] }) }, w)), W.jsx("div", { className: "restriction-actions", children: W.jsx(Bn, { variant: "outline-primary", size: "sm", onClick: () => r(C), children: "+ \u65B0\u589E\u689D\u4EF6" }) })] });
  return W.jsxs(Ja, { className: "mb-4 upload-card", children: [W.jsxs(Ja.Header, { as: "h5", className: "d-flex justify-content-between align-items-center", children: ["\u4E0A\u50B3\u8CC7\u6599\u6A94\u6848", W.jsx(v2, { placement: "left", overlay: W.jsxs(Jc, { children: [W.jsx("div", { children: "\u60A8\u53EF\u4EE5\uFF1A" }), W.jsxs("ul", { className: "mb-0 ps-3", children: [W.jsx("li", { children: "\u4E0B\u8F09\u7BC4\u4F8B\u6A94\u6848\u683C\u5F0F" }), W.jsx("li", { children: "\u76F4\u63A5\u8F09\u5165\u7BC4\u4F8B\u8CC7\u6599\u8A66\u7528" })] })] }), children: W.jsx("span", { className: "ms-2 text-muted", children: "\u2139\uFE0F" }) })] }), W.jsx(Ja.Body, { children: W.jsxs(oi, { className: "w-100", children: [W.jsx(pi, { className: "file-upload-row", children: ["interviewers", "interviewees"].map((C) => W.jsx(Hn, { className: "file-upload-col", children: W.jsxs(oi.Group, { children: [W.jsxs("div", { className: "file-upload-header", children: [W.jsx(oi.Label, { children: C === "interviewers" ? "\u9762\u8A66\u5B98\u6A94\u6848" : "\u61C9\u8A66\u8005\u6A94\u6848" }), W.jsxs("div", { className: "file-actions", children: [W.jsx(Bn, { variant: "outline-secondary", size: "sm", onClick: () => M(C), className: "sample-btn", children: "\u{1F4E5} \u7BC4\u4F8B" }), W.jsx(Bn, { variant: "outline-info", size: "sm", onClick: () => X(C), className: "try-btn", children: "\u26A1\uFE0F \u8A66\u7528" })] })] }), W.jsx(oi.Control, { type: "file", accept: ".csv,.xlsx,.xls", onChange: C === "interviewers" ? F : k, className: "upload-input" }), z(C)] }) }, C)) }), W.jsxs("div", { className: "file-preview", children: [x && W.jsx("div", { className: "preview-item", children: W.jsxs("span", { className: "text-success", children: ["\u2713 Interviewers: ", x] }) }), v && W.jsx("div", { className: "preview-item", children: W.jsxs("span", { className: "text-success", children: ["\u2713 Interviewees: ", v] }) })] })] }) })] });
}, $R = () => {
  const { dataLoaded: e, scheduledInterviews: a, generateSchedule: r } = Os(), i = e.interviewers && e.interviewees;
  return W.jsxs(mg, { className: "py-2", children: [W.jsx(pi, { children: W.jsx(YR, {}) }), W.jsxs(pi, { children: [i && W.jsx(pi, { children: W.jsx(Hn, { className: "text-end", children: W.jsx("button", { className: "continue-btn", onClick: r, children: a.length > 0 ? "\u91CD\u65B0\u914D\u5C0D \u{1F504}" : "\u958B\u59CB\u914D\u5C0D \u25B6" }) }) }), W.jsx(Hn, { children: W.jsx(RS, {}) })] }), W.jsx(pi, { children: W.jsx(Hn, { children: W.jsx(US, {}) }) })] });
};
function qR() {
  return W.jsx(wS, { children: W.jsx($R, {}) });
}
uT.createRoot(document.getElementById("root")).render(W.jsx(ee.StrictMode, { children: W.jsx(qR, {}) }));
