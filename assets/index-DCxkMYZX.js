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
var N0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Co = { exports: {} }, Rl = {};
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
  if (Zv) return Rl;
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
  return Rl.Fragment = a, Rl.jsx = r, Rl.jsxs = r, Rl;
}
var Qv;
function aT() {
  return Qv || (Qv = 1, Co.exports = rT()), Co.exports;
}
var K = aT(), bo = { exports: {} }, Qe = {};
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
  var E = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, y = {};
  function _(H, re, R) {
    this.props = H, this.context = re, this.refs = y, this.updater = R || E;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(H, re) {
    if (typeof H != "object" && typeof H != "function" && H != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, H, re, "setState");
  }, _.prototype.forceUpdate = function(H) {
    this.updater.enqueueForceUpdate(this, H, "forceUpdate");
  };
  function D() {
  }
  D.prototype = _.prototype;
  function b(H, re, R) {
    this.props = H, this.context = re, this.refs = y, this.updater = R || E;
  }
  var w = b.prototype = new D();
  w.constructor = b, T(w, _.prototype), w.isPureReactComponent = true;
  var M = Array.isArray, V = { H: null, A: null, T: null, S: null, V: null }, j = Object.prototype.hasOwnProperty;
  function C(H, re, R, z, q, W) {
    return R = W.ref, { $$typeof: e, type: H, key: re, ref: R !== void 0 ? R : null, props: W };
  }
  function A(H, re) {
    return C(H.type, re, void 0, void 0, void 0, H.props);
  }
  function S(H) {
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
  function fe(H, re, R, z, q) {
    var W = typeof H;
    (W === "undefined" || W === "boolean") && (H = null);
    var ie = false;
    if (H === null) ie = true;
    else switch (W) {
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
            return ie = H._init, fe(ie(H._payload), re, R, z, q);
        }
    }
    if (ie) return q = q(H), ie = z === "" ? "." + U(H, 0) : z, M(q) ? (R = "", ie != null && (R = ie.replace(B, "$&/") + "/"), fe(q, re, R, "", function(ye) {
      return ye;
    })) : q != null && (S(q) && (q = A(q, R + (q.key == null || H && H.key === q.key ? "" : ("" + q.key).replace(B, "$&/") + "/") + ie)), re.push(q)), 1;
    ie = 0;
    var Ae = z === "" ? "." : z + ":";
    if (M(H)) for (var pe = 0; pe < H.length; pe++) z = H[pe], W = Ae + U(z, pe), ie += fe(z, re, R, W, q);
    else if (pe = g(H), typeof pe == "function") for (H = pe.call(H), pe = 0; !(z = H.next()).done; ) z = z.value, W = Ae + U(z, pe++), ie += fe(z, re, R, W, q);
    else if (W === "object") {
      if (typeof H.then == "function") return fe(ge(H), re, R, z, q);
      throw re = String(H), Error("Objects are not valid as a React child (found: " + (re === "[object Object]" ? "object with keys {" + Object.keys(H).join(", ") + "}" : re) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ie;
  }
  function J(H, re, R) {
    if (H == null) return H;
    var z = [], q = 0;
    return fe(H, z, "", "", function(W) {
      return re.call(R, W, q++);
    }), z;
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
    if (!S(H)) throw Error("React.Children.only expected to receive a single React element child.");
    return H;
  } }, Qe.Component = _, Qe.Fragment = r, Qe.Profiler = s, Qe.PureComponent = b, Qe.StrictMode = i, Qe.Suspense = x, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, Qe.__COMPILER_RUNTIME = { __proto__: null, c: function(H) {
    return V.H.useMemoCache(H);
  } }, Qe.cache = function(H) {
    return function() {
      return H.apply(null, arguments);
    };
  }, Qe.cloneElement = function(H, re, R) {
    if (H == null) throw Error("The argument must be a React element, but you passed " + H + ".");
    var z = T({}, H.props), q = H.key, W = void 0;
    if (re != null) for (ie in re.ref !== void 0 && (W = void 0), re.key !== void 0 && (q = "" + re.key), re) !j.call(re, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && re.ref === void 0 || (z[ie] = re[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) z.children = R;
    else if (1 < ie) {
      for (var Ae = Array(ie), pe = 0; pe < ie; pe++) Ae[pe] = arguments[pe + 2];
      z.children = Ae;
    }
    return C(H.type, q, void 0, void 0, W, z);
  }, Qe.createContext = function(H) {
    return H = { $$typeof: u, _currentValue: H, _currentValue2: H, _threadCount: 0, Provider: null, Consumer: null }, H.Provider = H, H.Consumer = { $$typeof: c, _context: H }, H;
  }, Qe.createElement = function(H, re, R) {
    var z, q = {}, W = null;
    if (re != null) for (z in re.key !== void 0 && (W = "" + re.key), re) j.call(re, z) && z !== "key" && z !== "__self" && z !== "__source" && (q[z] = re[z]);
    var ie = arguments.length - 2;
    if (ie === 1) q.children = R;
    else if (1 < ie) {
      for (var Ae = Array(ie), pe = 0; pe < ie; pe++) Ae[pe] = arguments[pe + 2];
      q.children = Ae;
    }
    if (H && H.defaultProps) for (z in ie = H.defaultProps, ie) q[z] === void 0 && (q[z] = ie[z]);
    return C(H, W, void 0, void 0, null, q);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(H) {
    return { $$typeof: o, render: H };
  }, Qe.isValidElement = S, Qe.lazy = function(H) {
    return { $$typeof: v, _payload: { _status: -1, _result: H }, _init: ae };
  }, Qe.memo = function(H, re) {
    return { $$typeof: d, type: H, compare: re === void 0 ? null : re };
  }, Qe.startTransition = function(H) {
    var re = V.T, R = {};
    V.T = R;
    try {
      var z = H(), q = V.S;
      q !== null && q(R, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(Q, we);
    } catch (W) {
      we(W);
    } finally {
      V.T = re;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, Qe.use = function(H) {
    return V.H.use(H);
  }, Qe.useActionState = function(H, re, R) {
    return V.H.useActionState(H, re, R);
  }, Qe.useCallback = function(H, re) {
    return V.H.useCallback(H, re);
  }, Qe.useContext = function(H) {
    return V.H.useContext(H);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(H, re) {
    return V.H.useDeferredValue(H, re);
  }, Qe.useEffect = function(H, re, R) {
    var z = V.H;
    if (typeof R == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return z.useEffect(H, re);
  }, Qe.useId = function() {
    return V.H.useId();
  }, Qe.useImperativeHandle = function(H, re, R) {
    return V.H.useImperativeHandle(H, re, R);
  }, Qe.useInsertionEffect = function(H, re) {
    return V.H.useInsertionEffect(H, re);
  }, Qe.useLayoutEffect = function(H, re) {
    return V.H.useLayoutEffect(H, re);
  }, Qe.useMemo = function(H, re) {
    return V.H.useMemo(H, re);
  }, Qe.useOptimistic = function(H, re) {
    return V.H.useOptimistic(H, re);
  }, Qe.useReducer = function(H, re, R) {
    return V.H.useReducer(H, re, R);
  }, Qe.useRef = function(H) {
    return V.H.useRef(H);
  }, Qe.useState = function(H) {
    return V.H.useState(H);
  }, Qe.useSyncExternalStore = function(H, re, R) {
    return V.H.useSyncExternalStore(H, re, R);
  }, Qe.useTransition = function() {
    return V.H.useTransition();
  }, Qe.version = "19.1.0", Qe;
}
var ep;
function Sh() {
  return ep || (ep = 1, bo.exports = nT()), bo.exports;
}
var ee = Sh();
const Mr = bs(ee);
var Oo = { exports: {} }, Fl = {}, Do = { exports: {} }, Ro = {};
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
          var R = 2 * (Q + 1) - 1, z = J[R], q = R + 1, W = J[q];
          if (0 > s(z, we)) q < H && 0 > s(W, z) ? (J[Q] = W, J[q] = we, Q = q) : (J[Q] = z, J[R] = we, Q = R);
          else if (q < H && 0 > s(W, we)) J[Q] = W, J[q] = we, Q = q;
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
    var x = [], d = [], v = 1, m = null, g = 3, E = false, T = false, y = false, _ = false, D = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    function M(J) {
      for (var ae = r(d); ae !== null; ) {
        if (ae.callback === null) i(d);
        else if (ae.startTime <= J) i(d), ae.sortIndex = ae.expirationTime, a(x, ae);
        else break;
        ae = r(d);
      }
    }
    function V(J) {
      if (y = false, M(J), !T) if (r(x) !== null) T = true, j || (j = true, U());
      else {
        var ae = r(d);
        ae !== null && fe(V, ae.startTime - J);
      }
    }
    var j = false, C = -1, A = 5, S = -1;
    function N() {
      return _ ? true : !(e.unstable_now() - S < A);
    }
    function B() {
      if (_ = false, j) {
        var J = e.unstable_now();
        S = J;
        var ae = true;
        try {
          e: {
            T = false, y && (y = false, b(C), C = -1), E = true;
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
                  re !== null && fe(V, re.startTime - J), ae = false;
                }
              }
              break e;
            } finally {
              m = null, g = we, E = false;
            }
            ae = void 0;
          }
        } finally {
          ae ? U() : j = false;
        }
      }
    }
    var U;
    if (typeof w == "function") U = function() {
      w(B);
    };
    else if (typeof MessageChannel < "u") {
      var ne = new MessageChannel(), ge = ne.port2;
      ne.port1.onmessage = B, U = function() {
        ge.postMessage(null);
      };
    } else U = function() {
      D(B, 0);
    };
    function fe(J, ae) {
      C = D(function() {
        J(e.unstable_now());
      }, ae);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, e.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < J ? Math.floor(1e3 / J) : 5;
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
      return H = we + H, J = { id: v++, callback: ae, priorityLevel: J, startTime: we, expirationTime: H, sortIndex: -1 }, we > Q ? (J.sortIndex = we, a(d, J), r(x) === null && J === r(d) && (y ? (b(C), C = -1) : y = true, fe(V, we - Q))) : (J.sortIndex = H, a(x, J), T || E || (T = true, j || (j = true, U()))), J;
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
  }(Ro)), Ro;
}
var rp;
function sT() {
  return rp || (rp = 1, Do.exports = iT()), Do.exports;
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
      var v = d.as, m = o(v, d.crossOrigin), g = typeof d.integrity == "string" ? d.integrity : void 0, E = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      v === "style" ? i.d.S(x, typeof d.precedence == "string" ? d.precedence : void 0, { crossOrigin: m, integrity: g, fetchPriority: E }) : v === "script" && i.d.X(x, { crossOrigin: m, integrity: g, fetchPriority: E, nonce: typeof d.nonce == "string" ? d.nonce : void 0 });
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
        for (var k = false, F = h.child; F; ) {
          if (F === l) {
            k = true, l = h, f = p;
            break;
          }
          if (F === f) {
            k = true, f = h, l = p;
            break;
          }
          F = F.sibling;
        }
        if (!k) {
          for (F = p.child; F; ) {
            if (F === l) {
              k = true, l = p, f = h;
              break;
            }
            if (F === f) {
              k = true, f = p, l = h;
              break;
            }
            F = F.sibling;
          }
          if (!k) throw Error(i(189));
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
  var v = Object.assign, m = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), b = Symbol.for("react.consumer"), w = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), N = Symbol.for("react.memo_cache_sentinel"), B = Symbol.iterator;
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
      case y:
        return "StrictMode";
      case V:
        return "Suspense";
      case j:
        return "SuspenseList";
      case S:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case E:
        return "Portal";
      case w:
        return (t.displayName || "Context") + ".Provider";
      case b:
        return (t._context.displayName || "Context") + ".Consumer";
      case M:
        var n = t.render;
        return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case C:
        return n = t.displayName || null, n !== null ? n : ge(t.type) || "Memo";
      case A:
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
  function z(t, n) {
    H++, Q[H] = t.current, t.current = n;
  }
  var q = re(null), W = re(null), ie = re(null), Ae = re(null);
  function pe(t, n) {
    switch (z(ie, n), z(W, t), z(q, null), n.nodeType) {
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
    R(q), z(q, t);
  }
  function ye() {
    R(q), R(W), R(ie);
  }
  function _e(t) {
    t.memoizedState !== null && z(Ae, t);
    var n = q.current, l = kv(n, t.type);
    n !== l && (z(W, t), z(q, l));
  }
  function De(t) {
    W.current === t && (R(q), R(W)), Ae.current === t && (R(Ae), kl._currentValue = we);
  }
  var X = Object.prototype.hasOwnProperty, Ge = e.unstable_scheduleCallback, Le = e.unstable_cancelCallback, Be = e.unstable_shouldYield, Re = e.unstable_requestPaint, ke = e.unstable_now, Ie = e.unstable_getCurrentPriorityLevel, Ke = e.unstable_ImmediatePriority, Ze = e.unstable_UserBlockingPriority, At = e.unstable_NormalPriority, It = e.unstable_LowPriority, Pt = e.unstable_IdlePriority, it = e.log, Ot = e.unstable_setDisableYieldValue, st = null, tt = null;
  function rt(t) {
    if (typeof it == "function" && Ot(t), tt && typeof tt.setStrictMode == "function") try {
      tt.setStrictMode(st, t);
    } catch {
    }
  }
  var gt = Math.clz32 ? Math.clz32 : Dt, Ye = Math.log, xt = Math.LN2;
  function Dt(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ye(t) / xt | 0) | 0;
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
  function Fi(t, n, l) {
    var f = t.pendingLanes;
    if (f === 0) return 0;
    var h = 0, p = t.suspendedLanes, k = t.pingedLanes;
    t = t.warmLanes;
    var F = f & 134217727;
    return F !== 0 ? (f = F & ~p, f !== 0 ? h = wa(f) : (k &= F, k !== 0 ? h = wa(k) : l || (l = F & ~t, l !== 0 && (h = wa(l))))) : (F = f & ~p, F !== 0 ? h = wa(F) : k !== 0 ? h = wa(k) : l || (l = f & ~t, l !== 0 && (h = wa(l)))), h === 0 ? 0 : n !== 0 && n !== h && (n & p) === 0 && (p = h & -h, l = n & -n, p >= l || p === 32 && (l & 4194048) !== 0) ? n : h;
  }
  function $n(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function _c(t, n) {
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
  function Yn(t, n) {
    t.pendingLanes |= n, n !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Ni(t, n, l, f, h, p) {
    var k = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var F = t.entanglements, Z = t.expirationTimes, ue = t.hiddenUpdates;
    for (l = k & ~l; 0 < l; ) {
      var Ee = 31 - gt(l), Se = 1 << Ee;
      F[Ee] = 0, Z[Ee] = -1;
      var de = ue[Ee];
      if (de !== null) for (ue[Ee] = null, Ee = 0; Ee < de.length; Ee++) {
        var ve = de[Ee];
        ve !== null && (ve.lane &= -536870913);
      }
      l &= ~Se;
    }
    f !== 0 && Tc(t, f, 0), p !== 0 && h === 0 && t.tag !== 0 && (t.suspendedLanes |= p & ~(k & ~n));
  }
  function Tc(t, n, l) {
    t.pendingLanes |= n, t.suspendedLanes &= ~n;
    var f = 31 - gt(n);
    t.entangledLanes |= n, t.entanglements[f] = t.entanglements[f] | 1073741824 | l & 4194090;
  }
  function wc(t, n) {
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
  function Sc() {
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
  var Sa = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + Sa, er = "__reactProps$" + Sa, un = "__reactContainer$" + Sa, Is = "__reactEvents$" + Sa, Tf = "__reactListeners$" + Sa, O = "__reactHandles$" + Sa, G = "__reactResources$" + Sa, L = "__reactMarker$" + Sa;
  function I(t) {
    delete t[Jt], delete t[er], delete t[Is], delete t[Tf], delete t[O];
  }
  function P(t) {
    var n = t[Jt];
    if (n) return n;
    for (var l = t.parentNode; l; ) {
      if (n = l[un] || l[Jt]) {
        if (l = n.alternate, n.child !== null || l !== null && l.child !== null) for (t = Dv(t); t !== null; ) {
          if (l = t[Jt]) return l;
          t = Dv(t);
        }
        return n;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Y(t) {
    if (t = t[Jt] || t[un]) {
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
    return X.call(Fe, t) ? true : X.call(be, t) ? false : Ne.test(t) ? Fe[t] = true : (be[t] = true, false);
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
  var Ia, on;
  function qr(t) {
    if (Ia === void 0) try {
      throw Error();
    } catch (l) {
      var n = l.stack.trim().match(/\n( *(at )?)/);
      Ia = n && n[1] || "", on = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ia + t + on;
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
      var p = f.DetermineComponentFrameRoot(), k = p[0], F = p[1];
      if (k && F) {
        var Z = k.split(`
`), ue = F.split(`
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
      }, set: function(k) {
        f = "" + k, p.call(this, k);
      } }), Object.defineProperty(t, n, { enumerable: l.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(k) {
        f = "" + k;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[n];
      } };
    }
  }
  function Ac(t) {
    t._valueTracker || (t._valueTracker = Zy(t));
  }
  function _d(t) {
    if (!t) return false;
    var n = t._valueTracker;
    if (!n) return true;
    var l = n.getValue(), f = "";
    return t && (f = Ed(t) ? t.checked ? "true" : "false" : t.value), t = f, t !== l ? (n.setValue(t), true) : false;
  }
  function kc(t) {
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
  function wf(t, n, l, f, h, p, k, F) {
    t.name = "", k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" ? t.type = k : t.removeAttribute("type"), n != null ? k === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + Kr(n)) : t.value !== "" + Kr(n) && (t.value = "" + Kr(n)) : k !== "submit" && k !== "reset" || t.removeAttribute("value"), n != null ? Sf(t, k, Kr(n)) : l != null ? Sf(t, k, Kr(l)) : f != null && t.removeAttribute("value"), h == null && p != null && (t.defaultChecked = !!p), h != null && (t.checked = h && typeof h != "function" && typeof h != "symbol"), F != null && typeof F != "function" && typeof F != "symbol" && typeof F != "boolean" ? t.name = "" + Kr(F) : t.removeAttribute("name");
  }
  function Td(t, n, l, f, h, p, k, F) {
    if (p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.type = p), n != null || l != null) {
      if (!(p !== "submit" && p !== "reset" || n != null)) return;
      l = l != null ? "" + Kr(l) : "", n = n != null ? "" + Kr(n) : l, F || n === t.value || (t.value = n), t.defaultValue = n;
    }
    f = f ?? h, f = typeof f != "function" && typeof f != "symbol" && !!f, t.checked = F ? t.checked : !!f, t.defaultChecked = !!f, k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" && (t.name = k);
  }
  function Sf(t, n, l) {
    n === "number" && kc(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function Mi(t, n, l, f) {
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
  function Li(t, n) {
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
  function Cc(t) {
    return tE.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var kf = null;
  function Cf(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Bi = null, Ui = null;
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
          n = l.value, n != null && Mi(t, !!l.multiple, n, false);
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
      if (bf = false, (Bi !== null || Ui !== null) && (h0(), Bi && (n = Bi, t = Ui, Ui = Bi = null, Cd(n), t))) for (n = 0; n < t.length; n++) Cd(t[n]);
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
  var hn = null, Df = null, bc = null;
  function Od() {
    if (bc) return bc;
    var t, n = Df, l = n.length, f, h = "value" in hn ? hn.value : hn.textContent, p = h.length;
    for (t = 0; t < l && n[t] === h[t]; t++) ;
    var k = l - t;
    for (f = 1; f <= k && n[l - f] === h[p - f]; f++) ;
    return bc = h.slice(t, 1 < f ? 1 - f : void 0);
  }
  function Oc(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Dc() {
    return true;
  }
  function Dd() {
    return false;
  }
  function Or(t) {
    function n(l, f, h, p, k) {
      this._reactName = l, this._targetInst = h, this.type = f, this.nativeEvent = p, this.target = k, this.currentTarget = null;
      for (var F in t) t.hasOwnProperty(F) && (l = t[F], this[F] = l ? l(p) : p[F]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === false) ? Dc : Dd, this.isPropagationStopped = Dd, this;
    }
    return v(n.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = Dc);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = Dc);
    }, persist: function() {
    }, isPersistent: Dc }), n;
  }
  var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rc = Or(Kn), zs = v({}, Kn, { view: 0, detail: 0 }), rE = Or(zs), Rf, Ff, Ps, Fc = v({}, zs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mf, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Ps && (Ps && t.type === "mousemove" ? (Rf = t.screenX - Ps.screenX, Ff = t.screenY - Ps.screenY) : Ff = Rf = 0, Ps = t), Rf);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Ff;
  } }), Rd = Or(Fc), aE = v({}, Fc, { dataTransfer: 0 }), nE = Or(aE), iE = v({}, zs, { relatedTarget: 0 }), Nf = Or(iE), sE = v({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lE = Or(sE), cE = v({}, Kn, { clipboardData: function(t) {
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
    return t.type === "keypress" ? (t = Oc(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? hE[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mf, charCode: function(t) {
    return t.type === "keypress" ? Oc(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Oc(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), pE = Or(vE), mE = v({}, Fc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nd = Or(mE), gE = v({}, zs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mf }), yE = Or(gE), EE = v({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _E = Or(EE), TE = v({}, Fc, { deltaX: function(t) {
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
  var Ii = false;
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
    if (Ii) return t === "compositionend" || !Lf && Ud(t, n) ? (t = Od(), bc = Df = hn = null, Ii = false, t) : null;
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
  var DE = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Hd(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!DE[t.type] : n === "textarea";
  }
  function jd(t, n, l, f) {
    Bi ? Ui ? Ui.push(f) : Ui = [f] : Bi = f, n = g0(n, "onChange"), 0 < n.length && (l = new Rc("onChange", "change", null, l, f), t.push({ event: l, listeners: n }));
  }
  var Vs = null, Xs = null;
  function RE(t) {
    Ev(t, 0);
  }
  function Nc(t) {
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
    if (t.propertyName === "value" && Nc(Xs)) {
      var n = [];
      jd(n, Xs, t, Cf(t)), bd(RE, n);
    }
  }
  function FE(t, n, l) {
    t === "focusin" ? (Vd(), Vs = n, Xs = l, Vs.attachEvent("onpropertychange", Xd)) : t === "focusout" && Vd();
  }
  function NE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Nc(Xs);
  }
  function ME(t, n) {
    if (t === "click") return Nc(n);
  }
  function LE(t, n) {
    if (t === "input" || t === "change") return Nc(n);
  }
  function BE(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var Ur = typeof Object.is == "function" ? Object.is : BE;
  function $s(t, n) {
    if (Ur(t, n)) return true;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null) return false;
    var l = Object.keys(t), f = Object.keys(n);
    if (l.length !== f.length) return false;
    for (f = 0; f < l.length; f++) {
      var h = l[f];
      if (!X.call(n, h) || !Ur(t[h], n[h])) return false;
    }
    return true;
  }
  function $d(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yd(t, n) {
    var l = $d(t);
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
      l = $d(l);
    }
  }
  function qd(t, n) {
    return t && n ? t === n ? true : t && t.nodeType === 3 ? false : n && n.nodeType === 3 ? qd(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : false : false;
  }
  function Kd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var n = kc(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof n.contentWindow.location.href == "string";
      } catch {
        l = false;
      }
      if (l) t = n.contentWindow;
      else break;
      n = kc(t.document);
    }
    return n;
  }
  function If(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  var UE = Ha && "documentMode" in document && 11 >= document.documentMode, Hi = null, Hf = null, Ys = null, jf = false;
  function Wd(t, n, l) {
    var f = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    jf || Hi == null || Hi !== kc(f) || (f = Hi, "selectionStart" in f && If(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), Ys && $s(Ys, f) || (Ys = f, f = g0(Hf, "onSelect"), 0 < f.length && (n = new Rc("onSelect", "select", null, n, l), t.push({ event: n, listeners: f }), n.target = Hi)));
  }
  function Wn(t, n) {
    var l = {};
    return l[t.toLowerCase()] = n.toLowerCase(), l["Webkit" + t] = "webkit" + n, l["Moz" + t] = "moz" + n, l;
  }
  var ji = { animationend: Wn("Animation", "AnimationEnd"), animationiteration: Wn("Animation", "AnimationIteration"), animationstart: Wn("Animation", "AnimationStart"), transitionrun: Wn("Transition", "TransitionRun"), transitionstart: Wn("Transition", "TransitionStart"), transitioncancel: Wn("Transition", "TransitionCancel"), transitionend: Wn("Transition", "TransitionEnd") }, zf = {}, Zd = {};
  Ha && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete ji.animationend.animation, delete ji.animationiteration.animation, delete ji.animationstart.animation), "TransitionEvent" in window || delete ji.transitionend.transition);
  function Zn(t) {
    if (zf[t]) return zf[t];
    if (!ji[t]) return t;
    var n = ji[t], l;
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
  var Qr = [], zi = 0, Gf = 0;
  function Mc() {
    for (var t = zi, n = Gf = zi = 0; n < t; ) {
      var l = Qr[n];
      Qr[n++] = null;
      var f = Qr[n];
      Qr[n++] = null;
      var h = Qr[n];
      Qr[n++] = null;
      var p = Qr[n];
      if (Qr[n++] = null, f !== null && h !== null) {
        var k = f.pending;
        k === null ? h.next = h : (h.next = k.next, k.next = h), f.pending = h;
      }
      p !== 0 && n1(l, h, p);
    }
  }
  function Lc(t, n, l, f) {
    Qr[zi++] = t, Qr[zi++] = n, Qr[zi++] = l, Qr[zi++] = f, Gf |= f, t.lanes |= f, t = t.alternate, t !== null && (t.lanes |= f);
  }
  function Vf(t, n, l, f) {
    return Lc(t, n, l, f), Bc(t);
  }
  function Pi(t, n) {
    return Lc(t, null, null, n), Bc(t);
  }
  function n1(t, n, l) {
    t.lanes |= l;
    var f = t.alternate;
    f !== null && (f.lanes |= l);
    for (var h = false, p = t.return; p !== null; ) p.childLanes |= l, f = p.alternate, f !== null && (f.childLanes |= l), p.tag === 22 && (t = p.stateNode, t === null || t._visibility & 1 || (h = true)), t = p, p = p.return;
    return t.tag === 3 ? (p = t.stateNode, h && n !== null && (h = 31 - gt(l), t = p.hiddenUpdates, f = t[h], f === null ? t[h] = [n] : f.push(n), n.lane = l | 536870912), p) : null;
  }
  function Bc(t) {
    if (50 < gl) throw gl = 0, Wu = null, Error(i(185));
    for (var n = t.return; n !== null; ) t = n, n = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Gi = {};
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
  function Uc(t, n, l, f, h, p) {
    var k = 0;
    if (f = t, typeof t == "function") Xf(t) && (k = 1);
    else if (typeof t == "string") k = G_(t, l, q.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else e: switch (t) {
      case S:
        return t = Ir(31, l, n, h), t.elementType = S, t.lanes = p, t;
      case T:
        return Qn(l.children, h, p, n);
      case y:
        k = 8, h |= 24;
        break;
      case _:
        return t = Ir(12, l, n, h | 2), t.elementType = _, t.lanes = p, t;
      case V:
        return t = Ir(13, l, n, h), t.elementType = V, t.lanes = p, t;
      case j:
        return t = Ir(19, l, n, h), t.elementType = j, t.lanes = p, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case D:
          case w:
            k = 10;
            break e;
          case b:
            k = 9;
            break e;
          case M:
            k = 11;
            break e;
          case C:
            k = 14;
            break e;
          case A:
            k = 16, f = null;
            break e;
        }
        k = 29, l = Error(i(130, t === null ? "null" : typeof t, "")), f = null;
    }
    return n = Ir(k, l, n, h), n.elementType = t, n.type = f, n.lanes = p, n;
  }
  function Qn(t, n, l, f) {
    return t = Ir(7, t, f, n), t.lanes = l, t;
  }
  function $f(t, n, l) {
    return t = Ir(6, t, null, n), t.lanes = l, t;
  }
  function Yf(t, n, l) {
    return n = Ir(4, t.children !== null ? t.children : [], t.key, n), n.lanes = l, n.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, n;
  }
  var Vi = [], Xi = 0, Ic = null, Hc = 0, Jr = [], ea = 0, Jn = null, za = 1, Pa = "";
  function ei(t, n) {
    Vi[Xi++] = Hc, Vi[Xi++] = Ic, Ic = t, Hc = n;
  }
  function s1(t, n, l) {
    Jr[ea++] = za, Jr[ea++] = Pa, Jr[ea++] = Jn, Jn = t;
    var f = za;
    t = Pa;
    var h = 32 - gt(f) - 1;
    f &= ~(1 << h), l += 1;
    var p = 32 - gt(n) + h;
    if (30 < p) {
      var k = h - h % 5;
      p = (f & (1 << k) - 1).toString(32), f >>= k, h -= k, za = 1 << 32 - gt(n) + h | l << h | f, Pa = p + t;
    } else za = 1 << p | l << h | f, Pa = t;
  }
  function qf(t) {
    t.return !== null && (ei(t, 1), s1(t, 1, 0));
  }
  function Kf(t) {
    for (; t === Ic; ) Ic = Vi[--Xi], Vi[Xi] = null, Hc = Vi[--Xi], Vi[Xi] = null;
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
        nt("invalid", n), Td(n, f.value, f.defaultValue, f.checked, f.defaultChecked, f.type, f.name, true), Ac(n);
        break;
      case "select":
        nt("invalid", n);
        break;
      case "textarea":
        nt("invalid", n), Sd(n, f.value, f.defaultValue, f.children), Ac(n);
    }
    l = f.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || n.textContent === "" + l || f.suppressHydrationWarning === true || Sv(n.textContent, l) ? (f.popover != null && (nt("beforetoggle", n), nt("toggle", n)), f.onScroll != null && nt("scroll", n), f.onScrollEnd != null && nt("scrollend", n), f.onClick != null && (n.onclick = y0), n = true) : n = false, n || ri(t);
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
    } else n === 27 ? (n = Mt, bn(t.type) ? (t = mo, mo = null, Mt = t) : Mt = n) : Mt = wr ? va(t.stateNode.nextSibling) : null;
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
  function dn(t, n, l) {
    z(Zf, n._currentValue), n._currentValue = l;
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
        var k = h.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var F = p;
          p = h;
          for (var Z = 0; Z < n.length; Z++) if (F.context === n[Z]) {
            p.lanes |= l, F = p.alternate, F !== null && (F.lanes |= l), Qf(p.return, l, t), f || (k = null);
            break e;
          }
          p = F.next;
        }
      } else if (h.tag === 18) {
        if (k = h.return, k === null) throw Error(i(341));
        k.lanes |= l, p = k.alternate, p !== null && (p.lanes |= l), Qf(k, l, t), k = null;
      } else k = h.child;
      if (k !== null) k.return = h;
      else for (k = h; k !== null; ) {
        if (k === t) {
          k = null;
          break;
        }
        if (h = k.sibling, h !== null) {
          h.return = k.return, k = h;
          break;
        }
        k = k.return;
      }
      h = k;
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
        var k = h.alternate;
        if (k === null) throw Error(i(387));
        if (k = k.memoizedProps, k !== null) {
          var F = h.type;
          Ur(h.pendingProps.value, k.value) || (t !== null ? t.push(F) : t = [F]);
        }
      } else if (h === Ae.current) {
        if (k = h.alternate, k === null) throw Error(i(387));
        k.memoizedState.memoizedState !== h.memoizedState.memoizedState && (t !== null ? t.push(kl) : t = [kl]);
      }
      h = h.return;
    }
    t !== null && Jf(n, t, l, f), n.flags |= 262144;
  }
  function jc(t) {
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
  function zc(t, n) {
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
  }, GE = e.unstable_scheduleCallback, VE = e.unstable_NormalPriority, qt = { $$typeof: w, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function eu() {
    return { controller: new PE(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Qs(t) {
    t.refCount--, t.refCount === 0 && GE(VE, function() {
      t.controller.abort();
    });
  }
  var Js = null, tu = 0, $i = 0, Yi = null;
  function XE(t, n) {
    if (Js === null) {
      var l = Js = [];
      tu = 0, $i = ao(), Yi = { status: "pending", value: void 0, then: function(f) {
        l.push(f);
      } };
    }
    return tu++, n.then(o1, o1), n;
  }
  function o1() {
    if (--tu === 0 && Js !== null) {
      Yi !== null && (Yi.status = "fulfilled");
      var t = Js;
      Js = null, $i = 0, Yi = null;
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function $E(t, n) {
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
  function Pc(t, n) {
    n === null ? z(ii, ii.current) : z(ii, n.pool);
  }
  function d1() {
    var t = ru();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var el = Error(i(460)), x1 = Error(i(474)), Gc = Error(i(542)), au = { then: function() {
  } };
  function v1(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Vc() {
  }
  function p1(t, n, l) {
    switch (l = t[l], l === void 0 ? t.push(n) : l !== n && (n.then(Vc, Vc), n = l), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw t = n.reason, g1(t), t;
      default:
        if (typeof n.status == "string") n.then(Vc, Vc);
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
    if (t === el || t === Gc) throw Error(i(483));
  }
  var xn = false;
  function nu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function iu(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function vn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pn(t, n, l) {
    var f = t.updateQueue;
    if (f === null) return null;
    if (f = f.shared, (pt & 2) !== 0) {
      var h = f.pending;
      return h === null ? n.next = n : (n.next = h.next, h.next = n), f.pending = n, n = Bc(t), n1(t, null, l), n;
    }
    return Lc(t, f, n, l), Bc(t);
  }
  function rl(t, n, l) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (l & 4194048) !== 0)) {
      var f = n.lanes;
      f &= t.pendingLanes, l |= f, n.lanes = l, wc(t, l);
    }
  }
  function su(t, n) {
    var l = t.updateQueue, f = t.alternate;
    if (f !== null && (f = f.updateQueue, l === f)) {
      var h = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var k = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
          p === null ? h = p = k : p = p.next = k, l = l.next;
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
    xn = false;
    var p = h.firstBaseUpdate, k = h.lastBaseUpdate, F = h.shared.pending;
    if (F !== null) {
      h.shared.pending = null;
      var Z = F, ue = Z.next;
      Z.next = null, k === null ? p = ue : k.next = ue, k = Z;
      var Ee = t.alternate;
      Ee !== null && (Ee = Ee.updateQueue, F = Ee.lastBaseUpdate, F !== k && (F === null ? Ee.firstBaseUpdate = ue : F.next = ue, Ee.lastBaseUpdate = Z));
    }
    if (p !== null) {
      var Se = h.baseState;
      k = 0, Ee = ue = Z = null, F = p;
      do {
        var de = F.lane & -536870913, ve = de !== F.lane;
        if (ve ? (ct & de) === de : (f & de) === de) {
          de !== 0 && de === $i && (lu = true), Ee !== null && (Ee = Ee.next = { lane: 0, tag: F.tag, payload: F.payload, callback: null, next: null });
          e: {
            var ze = t, He = F;
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
                xn = true;
            }
          }
          de = F.callback, de !== null && (t.flags |= 64, ve && (t.flags |= 8192), ve = h.callbacks, ve === null ? h.callbacks = [de] : ve.push(de));
        } else ve = { lane: de, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, Ee === null ? (ue = Ee = ve, Z = Se) : Ee = Ee.next = ve, k |= de;
        if (F = F.next, F === null) {
          if (F = h.shared.pending, F === null) break;
          ve = F, F = ve.next, ve.next = null, h.lastBaseUpdate = ve, h.shared.pending = null;
        }
      } while (true);
      Ee === null && (Z = Se), h.baseState = Z, h.firstBaseUpdate = ue, h.lastBaseUpdate = Ee, p === null && (h.shared.lanes = 0), Sn |= k, t.lanes = k, t.memoizedState = Se;
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
  var qi = re(null), Xc = re(0);
  function _1(t, n) {
    t = Za, z(Xc, t), z(qi, n), Za = t | n.baseLanes;
  }
  function cu() {
    z(Xc, Za), z(qi, qi.current);
  }
  function fu() {
    Za = Xc.current, R(qi), R(Xc);
  }
  var mn = 0, Je = null, _t = null, Gt = null, $c = false, Ki = false, si = false, Yc = 0, il = 0, Wi = null, YE = 0;
  function Ht() {
    throw Error(i(321));
  }
  function uu(t, n) {
    if (n === null) return false;
    for (var l = 0; l < n.length && l < t.length; l++) if (!Ur(t[l], n[l])) return false;
    return true;
  }
  function ou(t, n, l, f, h, p) {
    return mn = p, Je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, J.H = t === null || t.memoizedState === null ? nx : ix, si = false, p = l(f, h), si = false, Ki && (p = w1(n, l, f, h)), T1(t), p;
  }
  function T1(t) {
    J.H = Jc;
    var n = _t !== null && _t.next !== null;
    if (mn = 0, Gt = _t = Je = null, $c = false, il = 0, Wi = null, n) throw Error(i(300));
    t === null || tr || (t = t.dependencies, t !== null && jc(t) && (tr = true));
  }
  function w1(t, n, l, f) {
    Je = t;
    var h = 0;
    do {
      if (Ki && (Wi = null), il = 0, Ki = false, 25 <= h) throw Error(i(301));
      if (h += 1, Gt = _t = null, t.updateQueue != null) {
        var p = t.updateQueue;
        p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
      }
      J.H = e_, p = n(l, f);
    } while (Ki);
    return p;
  }
  function qE() {
    var t = J.H, n = t.useState()[0];
    return n = typeof n.then == "function" ? sl(n) : n, t = t.useState()[0], (_t !== null ? _t.memoizedState : null) !== t && (Je.flags |= 1024), n;
  }
  function hu() {
    var t = Yc !== 0;
    return Yc = 0, t;
  }
  function du(t, n, l) {
    n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~l;
  }
  function xu(t) {
    if ($c) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), t = t.next;
      }
      $c = false;
    }
    mn = 0, Gt = _t = Je = null, Ki = false, il = Yc = 0, Wi = null;
  }
  function Dr() {
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
    return il += 1, Wi === null && (Wi = []), t = p1(Wi, t, n), n = Je, (Gt === null ? n.memoizedState : Gt.next) === null && (n = n.alternate, J.H = n === null || n.memoizedState === null ? nx : ix), t;
  }
  function qc(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return sl(t);
      if (t.$$typeof === w) return dr(t);
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
  function Kc(t) {
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
        var k = h.next;
        h.next = p.next, p.next = k;
      }
      n.baseQueue = h = p, f.pending = null;
    }
    if (p = t.baseState, h === null) t.memoizedState = p;
    else {
      n = h.next;
      var F = k = null, Z = null, ue = n, Ee = false;
      do {
        var Se = ue.lane & -536870913;
        if (Se !== ue.lane ? (ct & Se) === Se : (mn & Se) === Se) {
          var de = ue.revertLane;
          if (de === 0) Z !== null && (Z = Z.next = { lane: 0, revertLane: 0, action: ue.action, hasEagerState: ue.hasEagerState, eagerState: ue.eagerState, next: null }), Se === $i && (Ee = true);
          else if ((mn & de) === de) {
            ue = ue.next, de === $i && (Ee = true);
            continue;
          } else Se = { lane: 0, revertLane: ue.revertLane, action: ue.action, hasEagerState: ue.hasEagerState, eagerState: ue.eagerState, next: null }, Z === null ? (F = Z = Se, k = p) : Z = Z.next = Se, Je.lanes |= de, Sn |= de;
          Se = ue.action, si && l(p, Se), p = ue.hasEagerState ? ue.eagerState : l(p, Se);
        } else de = { lane: Se, revertLane: ue.revertLane, action: ue.action, hasEagerState: ue.hasEagerState, eagerState: ue.eagerState, next: null }, Z === null ? (F = Z = de, k = p) : Z = Z.next = de, Je.lanes |= Se, Sn |= Se;
        ue = ue.next;
      } while (ue !== null && ue !== n);
      if (Z === null ? k = p : Z.next = F, !Ur(p, t.memoizedState) && (tr = true, Ee && (l = Yi, l !== null))) throw l;
      t.memoizedState = p, t.baseState = k, t.baseQueue = Z, f.lastRenderedState = p;
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
      var k = h = h.next;
      do
        p = t(p, k.action), k = k.next;
      while (k !== h);
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
    var k = !Ur((_t || h).memoizedState, l);
    k && (h.memoizedState = l, tr = true), h = h.queue;
    var F = C1.bind(null, f, h, t);
    if (ll(2048, 8, F, [t]), h.getSnapshot !== n || k || Gt !== null && Gt.memoizedState.tag & 1) {
      if (f.flags |= 2048, Zi(9, Wc(), k1.bind(null, f, h, l, n), null), Ct === null) throw Error(i(349));
      p || (mn & 124) !== 0 || A1(f, n, l);
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
    var n = Pi(t, 2);
    n !== null && Gr(n, t, 2);
  }
  function yu(t) {
    var n = Dr();
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
  function D1(t, n, l, f) {
    return t.baseState = l, mu(t, _t, typeof f == "function" ? f : Xa);
  }
  function KE(t, n, l, f, h) {
    if (Qc(t)) throw Error(i(485));
    if (t = n.action, t !== null) {
      var p = { payload: h, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(k) {
        p.listeners.push(k);
      } };
      J.T !== null ? l(true) : p.isTransition = false, f(p), l = n.pending, l === null ? (p.next = n.pending = p, R1(n, p)) : (p.next = l.next, n.pending = l.next = p);
    }
  }
  function R1(t, n) {
    var l = n.action, f = n.payload, h = t.state;
    if (n.isTransition) {
      var p = J.T, k = {};
      J.T = k;
      try {
        var F = l(h, f), Z = J.S;
        Z !== null && Z(k, F), F1(t, n, F);
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
    n.status = "fulfilled", n.value = l, M1(n), t.state = l, n = t.pending, n !== null && (l = n.next, l === n ? t.pending = null : (l = l.next, n.next = l, R1(t, l)));
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
    return l = Dr(), l.memoizedState = l.baseState = n, f = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: L1, lastRenderedState: n }, l.queue = f, l = tx.bind(null, Je, f), f.dispatch = l, f = yu(false), p = Au.bind(null, Je, false, f.queue), f = Dr(), h = { state: n, dispatch: null, action: t, pending: null }, f.queue = h, l = KE.bind(null, Je, h, p, l), h.dispatch = l, f.memoizedState = t, [n, l, false];
  }
  function U1(t) {
    var n = Vt();
    return I1(n, _t, t);
  }
  function I1(t, n, l) {
    if (n = mu(t, n, L1)[0], t = Kc(Xa)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var f = sl(n);
    } catch (k) {
      throw k === el ? Gc : k;
    }
    else f = n;
    n = Vt();
    var h = n.queue, p = h.dispatch;
    return l !== n.memoizedState && (Je.flags |= 2048, Zi(9, Wc(), WE.bind(null, h, l), null)), [f, p, t];
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
  function Zi(t, n, l, f) {
    return t = { tag: t, create: l, deps: f, inst: n, next: null }, n = Je.updateQueue, n === null && (n = vu(), Je.updateQueue = n), l = n.lastEffect, l === null ? n.lastEffect = t.next = t : (f = l.next, l.next = t, t.next = f, n.lastEffect = t), t;
  }
  function Wc() {
    return { destroy: void 0, resource: void 0 };
  }
  function j1() {
    return Vt().memoizedState;
  }
  function Zc(t, n, l, f) {
    var h = Dr();
    f = f === void 0 ? null : f, Je.flags |= t, h.memoizedState = Zi(1 | n, Wc(), l, f);
  }
  function ll(t, n, l, f) {
    var h = Vt();
    f = f === void 0 ? null : f;
    var p = h.memoizedState.inst;
    _t !== null && f !== null && uu(f, _t.memoizedState.deps) ? h.memoizedState = Zi(n, p, l, f) : (Je.flags |= t, h.memoizedState = Zi(1 | n, p, l, f));
  }
  function z1(t, n) {
    Zc(8390656, 8, t, n);
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
  function $1(t, n, l) {
    l = l != null ? l.concat([t]) : null, ll(4, 4, X1.bind(null, n, t), l);
  }
  function _u() {
  }
  function Y1(t, n) {
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
    return l === void 0 || (mn & 1073741824) !== 0 ? t.memoizedState = n : (t.memoizedState = l, t = Zx(), Je.lanes |= t, Sn |= t, l);
  }
  function K1(t, n, l, f) {
    return Ur(l, n) ? l : qi.current !== null ? (t = Tu(t, l, f), Ur(t, n) || (tr = true), t) : (mn & 42) === 0 ? (tr = true, t.memoizedState = l) : (t = Zx(), Je.lanes |= t, Sn |= t, n);
  }
  function W1(t, n, l, f, h) {
    var p = ae.p;
    ae.p = p !== 0 && 8 > p ? p : 8;
    var k = J.T, F = {};
    J.T = F, Au(t, false, n, l);
    try {
      var Z = h(), ue = J.S;
      if (ue !== null && ue(F, Z), Z !== null && typeof Z == "object" && typeof Z.then == "function") {
        var Ee = $E(Z, f);
        cl(t, n, Ee, Pr(t));
      } else cl(t, n, f, Pr(t));
    } catch (Se) {
      cl(t, n, { then: function() {
      }, status: "rejected", reason: Se }, Pr());
    } finally {
      ae.p = p, J.T = k;
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
          t = vn(l);
          var f = pn(n, t, l);
          f !== null && (Gr(f, n, l), rl(f, n, l)), n = { cache: eu() }, t.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function JE(t, n, l) {
    var f = Pr();
    l = { lane: f, revertLane: 0, action: l, hasEagerState: false, eagerState: null, next: null }, Qc(t) ? rx(n, l) : (l = Vf(t, n, l, f), l !== null && (Gr(l, t, f), ax(l, n, f)));
  }
  function tx(t, n, l) {
    var f = Pr();
    cl(t, n, l, f);
  }
  function cl(t, n, l, f) {
    var h = { lane: f, revertLane: 0, action: l, hasEagerState: false, eagerState: null, next: null };
    if (Qc(t)) rx(n, h);
    else {
      var p = t.alternate;
      if (t.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
        var k = n.lastRenderedState, F = p(k, l);
        if (h.hasEagerState = true, h.eagerState = F, Ur(F, k)) return Lc(t, n, h, 0), Ct === null && Mc(), false;
      } catch {
      } finally {
      }
      if (l = Vf(t, n, h, f), l !== null) return Gr(l, t, f), ax(l, n, f), true;
    }
    return false;
  }
  function Au(t, n, l, f) {
    if (f = { lane: 2, revertLane: ao(), action: f, hasEagerState: false, eagerState: null, next: null }, Qc(t)) {
      if (n) throw Error(i(479));
    } else n = Vf(t, l, f, 2), n !== null && Gr(n, t, 2);
  }
  function Qc(t) {
    var n = t.alternate;
    return t === Je || n !== null && n === Je;
  }
  function rx(t, n) {
    Ki = $c = true;
    var l = t.pending;
    l === null ? n.next = n : (n.next = l.next, l.next = n), t.pending = n;
  }
  function ax(t, n, l) {
    if ((l & 4194048) !== 0) {
      var f = n.lanes;
      f &= t.pendingLanes, l |= f, n.lanes = l, wc(t, l);
    }
  }
  var Jc = { readContext: dr, use: qc, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useLayoutEffect: Ht, useInsertionEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useSyncExternalStore: Ht, useId: Ht, useHostTransitionStatus: Ht, useFormState: Ht, useActionState: Ht, useOptimistic: Ht, useMemoCache: Ht, useCacheRefresh: Ht }, nx = { readContext: dr, use: qc, useCallback: function(t, n) {
    return Dr().memoizedState = [t, n === void 0 ? null : n], t;
  }, useContext: dr, useEffect: z1, useImperativeHandle: function(t, n, l) {
    l = l != null ? l.concat([t]) : null, Zc(4194308, 4, X1.bind(null, n, t), l);
  }, useLayoutEffect: function(t, n) {
    return Zc(4194308, 4, t, n);
  }, useInsertionEffect: function(t, n) {
    Zc(4, 2, t, n);
  }, useMemo: function(t, n) {
    var l = Dr();
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
    var f = Dr();
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
    var n = Dr();
    return t = { current: t }, n.memoizedState = t;
  }, useState: function(t) {
    t = yu(t);
    var n = t.queue, l = tx.bind(null, Je, n);
    return n.dispatch = l, [t.memoizedState, l];
  }, useDebugValue: _u, useDeferredValue: function(t, n) {
    var l = Dr();
    return Tu(l, t, n);
  }, useTransition: function() {
    var t = yu(false);
    return t = W1.bind(null, Je, t.queue, true, false), Dr().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, n, l) {
    var f = Je, h = Dr();
    if (dt) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else {
      if (l = n(), Ct === null) throw Error(i(349));
      (ct & 124) !== 0 || A1(f, n, l);
    }
    h.memoizedState = l;
    var p = { value: l, getSnapshot: n };
    return h.queue = p, z1(C1.bind(null, f, p, t), [t]), f.flags |= 2048, Zi(9, Wc(), k1.bind(null, f, p, l, n), null), l;
  }, useId: function() {
    var t = Dr(), n = Ct.identifierPrefix;
    if (dt) {
      var l = Pa, f = za;
      l = (f & ~(1 << 32 - gt(f) - 1)).toString(32) + l, n = "\xAB" + n + "R" + l, l = Yc++, 0 < l && (n += "H" + l.toString(32)), n += "\xBB";
    } else l = YE++, n = "\xAB" + n + "r" + l.toString(32) + "\xBB";
    return t.memoizedState = n;
  }, useHostTransitionStatus: Su, useFormState: B1, useActionState: B1, useOptimistic: function(t) {
    var n = Dr();
    n.memoizedState = n.baseState = t;
    var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return n.queue = l, n = Au.bind(null, Je, true, l), l.dispatch = n, [t, n];
  }, useMemoCache: pu, useCacheRefresh: function() {
    return Dr().memoizedState = QE.bind(null, Je);
  } }, ix = { readContext: dr, use: qc, useCallback: Y1, useContext: dr, useEffect: P1, useImperativeHandle: $1, useInsertionEffect: G1, useLayoutEffect: V1, useMemo: q1, useReducer: Kc, useRef: j1, useState: function() {
    return Kc(Xa);
  }, useDebugValue: _u, useDeferredValue: function(t, n) {
    var l = Vt();
    return K1(l, _t.memoizedState, t, n);
  }, useTransition: function() {
    var t = Kc(Xa)[0], n = Vt().memoizedState;
    return [typeof t == "boolean" ? t : sl(t), n];
  }, useSyncExternalStore: S1, useId: J1, useHostTransitionStatus: Su, useFormState: U1, useActionState: U1, useOptimistic: function(t, n) {
    var l = Vt();
    return D1(l, _t, t, n);
  }, useMemoCache: pu, useCacheRefresh: ex }, e_ = { readContext: dr, use: qc, useCallback: Y1, useContext: dr, useEffect: P1, useImperativeHandle: $1, useInsertionEffect: G1, useLayoutEffect: V1, useMemo: q1, useReducer: gu, useRef: j1, useState: function() {
    return gu(Xa);
  }, useDebugValue: _u, useDeferredValue: function(t, n) {
    var l = Vt();
    return _t === null ? Tu(l, t, n) : K1(l, _t.memoizedState, t, n);
  }, useTransition: function() {
    var t = gu(Xa)[0], n = Vt().memoizedState;
    return [typeof t == "boolean" ? t : sl(t), n];
  }, useSyncExternalStore: S1, useId: J1, useHostTransitionStatus: Su, useFormState: H1, useActionState: H1, useOptimistic: function(t, n) {
    var l = Vt();
    return _t !== null ? D1(l, _t, t, n) : (l.baseState = t, [t, l.queue.dispatch]);
  }, useMemoCache: pu, useCacheRefresh: ex }, Qi = null, fl = 0;
  function e0(t) {
    var n = fl;
    return fl += 1, Qi === null && (Qi = []), p1(Qi, t, n);
  }
  function ul(t, n) {
    n = n.props.ref, t.ref = n !== void 0 ? n : null;
  }
  function t0(t, n) {
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
    function k(se) {
      return t && se.alternate === null && (se.flags |= 67108866), se;
    }
    function F(se, te, ce, Te) {
      return te === null || te.tag !== 6 ? (te = $f(ce, se.mode, Te), te.return = se, te) : (te = h(te, ce), te.return = se, te);
    }
    function Z(se, te, ce, Te) {
      var Me = ce.type;
      return Me === T ? Ee(se, te, ce.props.children, Te, ce.key) : te !== null && (te.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === A && sx(Me) === te.type) ? (te = h(te, ce.props), ul(te, ce), te.return = se, te) : (te = Uc(ce.type, ce.key, ce.props, null, se.mode, Te), ul(te, ce), te.return = se, te);
    }
    function ue(se, te, ce, Te) {
      return te === null || te.tag !== 4 || te.stateNode.containerInfo !== ce.containerInfo || te.stateNode.implementation !== ce.implementation ? (te = Yf(ce, se.mode, Te), te.return = se, te) : (te = h(te, ce.children || []), te.return = se, te);
    }
    function Ee(se, te, ce, Te, Me) {
      return te === null || te.tag !== 7 ? (te = Qn(ce, se.mode, Te, Me), te.return = se, te) : (te = h(te, ce), te.return = se, te);
    }
    function Se(se, te, ce) {
      if (typeof te == "string" && te !== "" || typeof te == "number" || typeof te == "bigint") return te = $f("" + te, se.mode, ce), te.return = se, te;
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case g:
            return ce = Uc(te.type, te.key, te.props, null, se.mode, ce), ul(ce, te), ce.return = se, ce;
          case E:
            return te = Yf(te, se.mode, ce), te.return = se, te;
          case A:
            var Te = te._init;
            return te = Te(te._payload), Se(se, te, ce);
        }
        if (fe(te) || U(te)) return te = Qn(te, se.mode, ce, null), te.return = se, te;
        if (typeof te.then == "function") return Se(se, e0(te), ce);
        if (te.$$typeof === w) return Se(se, zc(se, te), ce);
        t0(se, te);
      }
      return null;
    }
    function de(se, te, ce, Te) {
      var Me = te !== null ? te.key : null;
      if (typeof ce == "string" && ce !== "" || typeof ce == "number" || typeof ce == "bigint") return Me !== null ? null : F(se, te, "" + ce, Te);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case g:
            return ce.key === Me ? Z(se, te, ce, Te) : null;
          case E:
            return ce.key === Me ? ue(se, te, ce, Te) : null;
          case A:
            return Me = ce._init, ce = Me(ce._payload), de(se, te, ce, Te);
        }
        if (fe(ce) || U(ce)) return Me !== null ? null : Ee(se, te, ce, Te, null);
        if (typeof ce.then == "function") return de(se, te, e0(ce), Te);
        if (ce.$$typeof === w) return de(se, te, zc(se, ce), Te);
        t0(se, ce);
      }
      return null;
    }
    function ve(se, te, ce, Te, Me) {
      if (typeof Te == "string" && Te !== "" || typeof Te == "number" || typeof Te == "bigint") return se = se.get(ce) || null, F(te, se, "" + Te, Me);
      if (typeof Te == "object" && Te !== null) {
        switch (Te.$$typeof) {
          case g:
            return se = se.get(Te.key === null ? ce : Te.key) || null, Z(te, se, Te, Me);
          case E:
            return se = se.get(Te.key === null ? ce : Te.key) || null, ue(te, se, Te, Me);
          case A:
            var et = Te._init;
            return Te = et(Te._payload), ve(se, te, ce, Te, Me);
        }
        if (fe(Te) || U(Te)) return se = se.get(ce) || null, Ee(te, se, Te, Me, null);
        if (typeof Te.then == "function") return ve(se, te, ce, e0(Te), Me);
        if (Te.$$typeof === w) return ve(se, te, ce, zc(te, Te), Me);
        t0(te, Te);
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
      return t && Ue.forEach(function(Nn) {
        return n(se, Nn);
      }), dt && ei(se, je), Me;
    }
    function He(se, te, ce, Te) {
      if (ce == null) throw Error(i(151));
      for (var Me = null, et = null, Ue = te, je = te = 0, ar = null, ht = ce.next(); Ue !== null && !ht.done; je++, ht = ce.next()) {
        Ue.index > je ? (ar = Ue, Ue = null) : ar = Ue.sibling;
        var Nn = de(se, Ue, ht.value, Te);
        if (Nn === null) {
          Ue === null && (Ue = ar);
          break;
        }
        t && Ue && Nn.alternate === null && n(se, Ue), te = p(Nn, te, je), et === null ? Me = Nn : et.sibling = Nn, et = Nn, Ue = ar;
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
                  } else if (te.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === A && sx(Me) === te.type) {
                    l(se, te.sibling), Te = h(te, ce.props), ul(Te, ce), Te.return = se, se = Te;
                    break e;
                  }
                  l(se, te);
                  break;
                } else n(se, te);
                te = te.sibling;
              }
              ce.type === T ? (Te = Qn(ce.props.children, se.mode, Te, ce.key), Te.return = se, se = Te) : (Te = Uc(ce.type, ce.key, ce.props, null, se.mode, Te), ul(Te, ce), Te.return = se, se = Te);
            }
            return k(se);
          case E:
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
              Te = Yf(ce, se.mode, Te), Te.return = se, se = Te;
            }
            return k(se);
          case A:
            return Me = ce._init, ce = Me(ce._payload), wt(se, te, ce, Te);
        }
        if (fe(ce)) return ze(se, te, ce, Te);
        if (U(ce)) {
          if (Me = U(ce), typeof Me != "function") throw Error(i(150));
          return ce = Me.call(ce), He(se, te, ce, Te);
        }
        if (typeof ce.then == "function") return wt(se, te, e0(ce), Te);
        if (ce.$$typeof === w) return wt(se, te, zc(se, ce), Te);
        t0(se, ce);
      }
      return typeof ce == "string" && ce !== "" || typeof ce == "number" || typeof ce == "bigint" ? (ce = "" + ce, te !== null && te.tag === 6 ? (l(se, te.sibling), Te = h(te, ce), Te.return = se, se = Te) : (l(se, te), Te = $f(ce, se.mode, Te), Te.return = se, se = Te), k(se)) : l(se, te);
    }
    return function(se, te, ce, Te) {
      try {
        fl = 0;
        var Me = wt(se, te, ce, Te);
        return Qi = null, Me;
      } catch (Ue) {
        if (Ue === el || Ue === Gc) throw Ue;
        var et = Ir(29, Ue, null, se.mode);
        return et.lanes = Te, et.return = se, et;
      } finally {
      }
    };
  }
  var Ji = lx(true), cx = lx(false), ta = re(null), ka = null;
  function gn(t) {
    var n = t.alternate;
    z(Kt, Kt.current & 1), z(ta, t), ka === null && (n === null || qi.current !== null || n.memoizedState !== null) && (ka = t);
  }
  function fx(t) {
    if (t.tag === 22) {
      if (z(Kt, Kt.current), z(ta, t), ka === null) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (ka = t);
      }
    } else yn();
  }
  function yn() {
    z(Kt, Kt.current), z(ta, ta.current);
  }
  function $a(t) {
    R(ta), ka === t && (ka = null), R(Kt);
  }
  var Kt = re(0);
  function r0(t) {
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
    var f = Pr(), h = vn(f);
    h.payload = n, l != null && (h.callback = l), n = pn(t, h, f), n !== null && (Gr(n, t, f), rl(n, t, f));
  }, enqueueReplaceState: function(t, n, l) {
    t = t._reactInternals;
    var f = Pr(), h = vn(f);
    h.tag = 1, h.payload = n, l != null && (h.callback = l), n = pn(t, h, f), n !== null && (Gr(n, t, f), rl(n, t, f));
  }, enqueueForceUpdate: function(t, n) {
    t = t._reactInternals;
    var l = Pr(), f = vn(l);
    f.tag = 2, n != null && (f.callback = n), n = pn(t, f, l), n !== null && (Gr(n, t, l), rl(n, t, l));
  } };
  function ux(t, n, l, f, h, p, k) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(f, p, k) : n.prototype && n.prototype.isPureReactComponent ? !$s(l, f) || !$s(h, p) : true;
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
  var a0 = typeof reportError == "function" ? reportError : function(t) {
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
    a0(t);
  }
  function dx(t) {
    console.error(t);
  }
  function xx(t) {
    a0(t);
  }
  function n0(t, n) {
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
    return l = vn(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      n0(t, n);
    }, l;
  }
  function px(t) {
    return t = vn(t), t.tag = 3, t;
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
    var k = l.stateNode;
    k !== null && typeof k.componentDidCatch == "function" && (t.callback = function() {
      vx(n, l, f), typeof h != "function" && (An === null ? An = /* @__PURE__ */ new Set([this]) : An.add(this));
      var F = f.stack;
      this.componentDidCatch(f.value, { componentStack: F !== null ? F : "" });
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
          if (n = l.type, p = l.stateNode, (l.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (An === null || !An.has(p)))) return l.flags |= 65536, h &= -h, l.lanes |= h, h = px(h), mx(h, t, l, f), su(l, h), false;
      }
      l = l.return;
    } while (l !== null);
    return false;
  }
  var gx = Error(i(461)), tr = false;
  function sr(t, n, l, f) {
    n.child = t === null ? cx(n, null, l, f) : Ji(n, t.child, l, f);
  }
  function yx(t, n, l, f, h) {
    l = l.render;
    var p = n.ref;
    if ("ref" in f) {
      var k = {};
      for (var F in f) F !== "ref" && (k[F] = f[F]);
    } else k = f;
    return ni(n), f = ou(t, n, l, k, p, h), F = hu(), t !== null && !tr ? (du(t, n, h), Ya(t, n, h)) : (dt && F && qf(n), n.flags |= 1, sr(t, n, f, h), n.child);
  }
  function Ex(t, n, l, f, h) {
    if (t === null) {
      var p = l.type;
      return typeof p == "function" && !Xf(p) && p.defaultProps === void 0 && l.compare === null ? (n.tag = 15, n.type = p, _x(t, n, p, f, h)) : (t = Uc(l.type, null, f, n, n.mode, h), t.ref = n.ref, t.return = n, n.child = t);
    }
    if (p = t.child, !Bu(t, h)) {
      var k = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : $s, l(k, f) && t.ref === n.ref) return Ya(t, n, h);
    }
    return n.flags |= 1, t = ja(p, f), t.ref = n.ref, t.return = n, n.child = t;
  }
  function _x(t, n, l, f, h) {
    if (t !== null) {
      var p = t.memoizedProps;
      if ($s(p, f) && t.ref === n.ref) if (tr = false, n.pendingProps = f = p, Bu(t, h)) (t.flags & 131072) !== 0 && (tr = true);
      else return n.lanes = t.lanes, Ya(t, n, h);
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
      if ((l & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Pc(n, p !== null ? p.cachePool : null), p !== null ? _1(n, p) : cu(), fx(n);
      else return n.lanes = n.childLanes = 536870912, wx(t, n, p !== null ? p.baseLanes | l : l, l);
    } else p !== null ? (Pc(n, p.cachePool), _1(n, p), yn(), n.memoizedState = null) : (t !== null && Pc(n, null), cu(), yn());
    return sr(t, n, h, l), n.child;
  }
  function wx(t, n, l, f) {
    var h = ru();
    return h = h === null ? null : { parent: qt._currentValue, pool: h }, n.memoizedState = { baseLanes: l, cachePool: h }, t !== null && Pc(n, null), cu(), fx(n), t !== null && Zs(t, n, f, true), null;
  }
  function i0(t, n) {
    var l = n.ref;
    if (l === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(i(284));
      (t === null || t.ref !== l) && (n.flags |= 4194816);
    }
  }
  function Ou(t, n, l, f, h) {
    return ni(n), l = ou(t, n, l, f, void 0, h), f = hu(), t !== null && !tr ? (du(t, n, h), Ya(t, n, h)) : (dt && f && qf(n), n.flags |= 1, sr(t, n, l, h), n.child);
  }
  function Sx(t, n, l, f, h, p) {
    return ni(n), n.updateQueue = null, l = w1(n, f, l, h), T1(t), f = hu(), t !== null && !tr ? (du(t, n, p), Ya(t, n, p)) : (dt && f && qf(n), n.flags |= 1, sr(t, n, l, p), n.child);
  }
  function Ax(t, n, l, f, h) {
    if (ni(n), n.stateNode === null) {
      var p = Gi, k = l.contextType;
      typeof k == "object" && k !== null && (p = dr(k)), p = new l(f, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Cu, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = f, p.state = n.memoizedState, p.refs = {}, nu(n), k = l.contextType, p.context = typeof k == "object" && k !== null ? dr(k) : Gi, p.state = n.memoizedState, k = l.getDerivedStateFromProps, typeof k == "function" && (ku(n, l, k, f), p.state = n.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (k = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), k !== p.state && Cu.enqueueReplaceState(p, p.state, null), nl(n, f, p, h), al(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), f = true;
    } else if (t === null) {
      p = n.stateNode;
      var F = n.memoizedProps, Z = li(l, F);
      p.props = Z;
      var ue = p.context, Ee = l.contextType;
      k = Gi, typeof Ee == "object" && Ee !== null && (k = dr(Ee));
      var Se = l.getDerivedStateFromProps;
      Ee = typeof Se == "function" || typeof p.getSnapshotBeforeUpdate == "function", F = n.pendingProps !== F, Ee || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (F || ue !== k) && ox(n, p, f, k), xn = false;
      var de = n.memoizedState;
      p.state = de, nl(n, f, p, h), al(), ue = n.memoizedState, F || de !== ue || xn ? (typeof Se == "function" && (ku(n, l, Se, f), ue = n.memoizedState), (Z = xn || ux(n, l, Z, f, de, ue, k)) ? (Ee || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = f, n.memoizedState = ue), p.props = f, p.state = ue, p.context = k, f = Z) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), f = false);
    } else {
      p = n.stateNode, iu(t, n), k = n.memoizedProps, Ee = li(l, k), p.props = Ee, Se = n.pendingProps, de = p.context, ue = l.contextType, Z = Gi, typeof ue == "object" && ue !== null && (Z = dr(ue)), F = l.getDerivedStateFromProps, (ue = typeof F == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (k !== Se || de !== Z) && ox(n, p, f, Z), xn = false, de = n.memoizedState, p.state = de, nl(n, f, p, h), al();
      var ve = n.memoizedState;
      k !== Se || de !== ve || xn || t !== null && t.dependencies !== null && jc(t.dependencies) ? (typeof F == "function" && (ku(n, l, F, f), ve = n.memoizedState), (Ee = xn || ux(n, l, Ee, f, de, ve, Z) || t !== null && t.dependencies !== null && jc(t.dependencies)) ? (ue || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(f, ve, Z), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(f, ve, Z)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || k === t.memoizedProps && de === t.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === t.memoizedProps && de === t.memoizedState || (n.flags |= 1024), n.memoizedProps = f, n.memoizedState = ve), p.props = f, p.state = ve, p.context = Z, f = Ee) : (typeof p.componentDidUpdate != "function" || k === t.memoizedProps && de === t.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || k === t.memoizedProps && de === t.memoizedState || (n.flags |= 1024), f = false);
    }
    return p = f, i0(t, n), f = (n.flags & 128) !== 0, p || f ? (p = n.stateNode, l = f && typeof l.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, t !== null && f ? (n.child = Ji(n, t.child, null, h), n.child = Ji(n, null, l, h)) : sr(t, n, l, h), n.memoizedState = p.state, t = n.child) : t = Ya(t, n, h), t;
  }
  function kx(t, n, l, f) {
    return Ks(), n.flags |= 256, sr(t, n, l, f), n.child;
  }
  var Du = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Ru(t) {
    return { baseLanes: t, cachePool: d1() };
  }
  function Fu(t, n, l) {
    return t = t !== null ? t.childLanes & ~l : 0, n && (t |= ra), t;
  }
  function Cx(t, n, l) {
    var f = n.pendingProps, h = false, p = (n.flags & 128) !== 0, k;
    if ((k = p) || (k = t !== null && t.memoizedState === null ? false : (Kt.current & 2) !== 0), k && (h = true, n.flags &= -129), k = (n.flags & 32) !== 0, n.flags &= -33, t === null) {
      if (dt) {
        if (h ? gn(n) : yn(), dt) {
          var F = Mt, Z;
          if (Z = F) {
            e: {
              for (Z = F, F = Aa; Z.nodeType !== 8; ) {
                if (!F) {
                  F = null;
                  break e;
                }
                if (Z = va(Z.nextSibling), Z === null) {
                  F = null;
                  break e;
                }
              }
              F = Z;
            }
            F !== null ? (n.memoizedState = { dehydrated: F, treeContext: Jn !== null ? { id: za, overflow: Pa } : null, retryLane: 536870912, hydrationErrors: null }, Z = Ir(18, null, null, 0), Z.stateNode = F, Z.return = n, n.child = Z, wr = n, Mt = null, Z = true) : Z = false;
          }
          Z || ri(n);
        }
        if (F = n.memoizedState, F !== null && (F = F.dehydrated, F !== null)) return po(F) ? n.lanes = 32 : n.lanes = 536870912, null;
        $a(n);
      }
      return F = f.children, f = f.fallback, h ? (yn(), h = n.mode, F = s0({ mode: "hidden", children: F }, h), f = Qn(f, h, l, null), F.return = n, f.return = n, F.sibling = f, n.child = F, h = n.child, h.memoizedState = Ru(l), h.childLanes = Fu(t, k, l), n.memoizedState = Du, f) : (gn(n), Nu(n, F));
    }
    if (Z = t.memoizedState, Z !== null && (F = Z.dehydrated, F !== null)) {
      if (p) n.flags & 256 ? (gn(n), n.flags &= -257, n = Mu(t, n, l)) : n.memoizedState !== null ? (yn(), n.child = t.child, n.flags |= 128, n = null) : (yn(), h = f.fallback, F = n.mode, f = s0({ mode: "visible", children: f.children }, F), h = Qn(h, F, l, null), h.flags |= 2, f.return = n, h.return = n, f.sibling = h, n.child = f, Ji(n, t.child, null, l), f = n.child, f.memoizedState = Ru(l), f.childLanes = Fu(t, k, l), n.memoizedState = Du, n = h);
      else if (gn(n), po(F)) {
        if (k = F.nextSibling && F.nextSibling.dataset, k) var ue = k.dgst;
        k = ue, f = Error(i(419)), f.stack = "", f.digest = k, Ws({ value: f, source: null, stack: null }), n = Mu(t, n, l);
      } else if (tr || Zs(t, n, l, false), k = (l & t.childLanes) !== 0, tr || k) {
        if (k = Ct, k !== null && (f = l & -l, f = (f & 42) !== 0 ? 1 : Bs(f), f = (f & (k.suspendedLanes | l)) !== 0 ? 0 : f, f !== 0 && f !== Z.retryLane)) throw Z.retryLane = f, Pi(t, f), Gr(k, t, f), gx;
        F.data === "$?" || Qu(), n = Mu(t, n, l);
      } else F.data === "$?" ? (n.flags |= 192, n.child = t.child, n = null) : (t = Z.treeContext, Mt = va(F.nextSibling), wr = n, dt = true, ti = null, Aa = false, t !== null && (Jr[ea++] = za, Jr[ea++] = Pa, Jr[ea++] = Jn, za = t.id, Pa = t.overflow, Jn = n), n = Nu(n, f.children), n.flags |= 4096);
      return n;
    }
    return h ? (yn(), h = f.fallback, F = n.mode, Z = t.child, ue = Z.sibling, f = ja(Z, { mode: "hidden", children: f.children }), f.subtreeFlags = Z.subtreeFlags & 65011712, ue !== null ? h = ja(ue, h) : (h = Qn(h, F, l, null), h.flags |= 2), h.return = n, f.return = n, f.sibling = h, n.child = f, f = h, h = n.child, F = t.child.memoizedState, F === null ? F = Ru(l) : (Z = F.cachePool, Z !== null ? (ue = qt._currentValue, Z = Z.parent !== ue ? { parent: ue, pool: ue } : Z) : Z = d1(), F = { baseLanes: F.baseLanes | l, cachePool: Z }), h.memoizedState = F, h.childLanes = Fu(t, k, l), n.memoizedState = Du, f) : (gn(n), l = t.child, t = l.sibling, l = ja(l, { mode: "visible", children: f.children }), l.return = n, l.sibling = null, t !== null && (k = n.deletions, k === null ? (n.deletions = [t], n.flags |= 16) : k.push(t)), n.child = l, n.memoizedState = null, l);
  }
  function Nu(t, n) {
    return n = s0({ mode: "visible", children: n }, t.mode), n.return = t, t.child = n;
  }
  function s0(t, n) {
    return t = Ir(22, t, null, n), t.lanes = 0, t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, t;
  }
  function Mu(t, n, l) {
    return Ji(n, t.child, null, l), t = Nu(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
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
    switch (z(Kt, f), h) {
      case "forwards":
        for (l = n.child, h = null; l !== null; ) t = l.alternate, t !== null && r0(t) === null && (h = l), l = l.sibling;
        l = h, l === null ? (h = n.child, n.child = null) : (h = l.sibling, l.sibling = null), Lu(n, false, h, l, p);
        break;
      case "backwards":
        for (l = null, h = n.child, n.child = null; h !== null; ) {
          if (t = h.alternate, t !== null && r0(t) === null) {
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
  function Ya(t, n, l) {
    if (t !== null && (n.dependencies = t.dependencies), Sn |= n.lanes, (l & n.childLanes) === 0) if (t !== null) {
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
    return (t.lanes & n) !== 0 ? true : (t = t.dependencies, !!(t !== null && jc(t)));
  }
  function r_(t, n, l) {
    switch (n.tag) {
      case 3:
        pe(n, n.stateNode.containerInfo), dn(n, qt, t.memoizedState.cache), Ks();
        break;
      case 27:
      case 5:
        _e(n);
        break;
      case 4:
        pe(n, n.stateNode.containerInfo);
        break;
      case 10:
        dn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var f = n.memoizedState;
        if (f !== null) return f.dehydrated !== null ? (gn(n), n.flags |= 128, null) : (l & n.child.childLanes) !== 0 ? Cx(t, n, l) : (gn(n), t = Ya(t, n, l), t !== null ? t.sibling : null);
        gn(n);
        break;
      case 19:
        var h = (t.flags & 128) !== 0;
        if (f = (l & n.childLanes) !== 0, f || (Zs(t, n, l, false), f = (l & n.childLanes) !== 0), h) {
          if (f) return Ox(t, n, l);
          n.flags |= 128;
        }
        if (h = n.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), z(Kt, Kt.current), f) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Tx(t, n, l);
      case 24:
        dn(n, qt, t.memoizedState.cache);
    }
    return Ya(t, n, l);
  }
  function Dx(t, n, l) {
    if (t !== null) if (t.memoizedProps !== n.pendingProps) tr = true;
    else {
      if (!Bu(t, l) && (n.flags & 128) === 0) return tr = false, r_(t, n, l);
      tr = (t.flags & 131072) !== 0;
    }
    else tr = false, dt && (n.flags & 1048576) !== 0 && s1(n, Hc, n.index);
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
          var k = n.memoizedState;
          if (f = k.cache, dn(n, qt, f), f !== p.cache && Jf(n, [qt], l, true), al(), f = k.element, p.isDehydrated) if (p = { element: f, isDehydrated: false, cache: k.cache }, n.updateQueue.baseState = p, n.memoizedState = p, n.flags & 256) {
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
              n = Ya(t, n, l);
              break e;
            }
            sr(t, n, f, l);
          }
          n = n.child;
        }
        return n;
      case 26:
        return i0(t, n), t === null ? (l = Mv(n.type, null, n.pendingProps, null)) ? n.memoizedState = l : dt || (l = n.type, t = n.pendingProps, f = E0(ie.current).createElement(l), f[Jt] = n, f[er] = t, cr(f, l, t), le(f), n.stateNode = f) : n.memoizedState = Mv(n.type, t.memoizedProps, n.pendingProps, t.memoizedState), null;
      case 27:
        return _e(n), t === null && dt && (f = n.stateNode = Rv(n.type, n.pendingProps, ie.current), wr = n, Aa = true, h = Mt, bn(n.type) ? (mo = h, Mt = va(f.firstChild)) : Mt = h), sr(t, n, n.pendingProps.children, l), i0(t, n), t === null && (n.flags |= 4194304), n.child;
      case 5:
        return t === null && dt && ((h = f = Mt) && (f = D_(f, n.type, n.pendingProps, Aa), f !== null ? (n.stateNode = f, wr = n, Mt = va(f.firstChild), Aa = false, h = true) : h = false), h || ri(n)), _e(n), h = n.type, p = n.pendingProps, k = t !== null ? t.memoizedProps : null, f = p.children, ho(h, p) ? f = null : k !== null && ho(h, k) && (n.flags |= 32), n.memoizedState !== null && (h = ou(t, n, qE, null, null, l), kl._currentValue = h), i0(t, n), sr(t, n, f, l), n.child;
      case 6:
        return t === null && dt && ((t = l = Mt) && (l = R_(l, n.pendingProps, Aa), l !== null ? (n.stateNode = l, wr = n, Mt = null, t = true) : t = false), t || ri(n)), null;
      case 13:
        return Cx(t, n, l);
      case 4:
        return pe(n, n.stateNode.containerInfo), f = n.pendingProps, t === null ? n.child = Ji(n, null, f, l) : sr(t, n, f, l), n.child;
      case 11:
        return yx(t, n, n.type, n.pendingProps, l);
      case 7:
        return sr(t, n, n.pendingProps, l), n.child;
      case 8:
        return sr(t, n, n.pendingProps.children, l), n.child;
      case 12:
        return sr(t, n, n.pendingProps.children, l), n.child;
      case 10:
        return f = n.pendingProps, dn(n, n.type, f.value), sr(t, n, f.children, l), n.child;
      case 9:
        return h = n.type._context, f = n.pendingProps.children, ni(n), h = dr(h), f = f(h), n.flags |= 1, sr(t, n, f, l), n.child;
      case 14:
        return Ex(t, n, n.type, n.pendingProps, l);
      case 15:
        return _x(t, n, n.type, n.pendingProps, l);
      case 19:
        return Ox(t, n, l);
      case 31:
        return f = n.pendingProps, l = n.mode, f = { mode: f.mode, children: f.children }, t === null ? (l = s0(f, l), l.ref = n.ref, n.child = l, l.return = n, n = l) : (l = ja(t.child, f), l.ref = n.ref, n.child = l, l.return = n, n = l), n;
      case 22:
        return Tx(t, n, l);
      case 24:
        return ni(n), f = dr(qt), t === null ? (h = ru(), h === null && (h = Ct, p = eu(), h.pooledCache = p, p.refCount++, p !== null && (h.pooledCacheLanes |= l), h = p), n.memoizedState = { parent: f, cache: h }, nu(n), dn(n, qt, h)) : ((t.lanes & l) !== 0 && (iu(t, n), nl(n, null, null, l), al()), h = t.memoizedState, p = n.memoizedState, h.parent !== f ? (h = { parent: f, cache: f }, n.memoizedState = h, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = h), dn(n, qt, f)) : (f = p.cache, dn(n, qt, f), f !== h.cache && Jf(n, [qt], l, true))), sr(t, n, n.pendingProps.children, l), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  function qa(t) {
    t.flags |= 4;
  }
  function Rx(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Hv(n)) {
      if (n = ta.current, n !== null && ((ct & 4194048) === ct ? ka !== null : (ct & 62914560) !== ct && (ct & 536870912) === 0 || n !== ka)) throw tl = au, x1;
      t.flags |= 8192;
    }
  }
  function l0(t, n) {
    n !== null && (t.flags |= 4), t.flags & 16384 && (n = t.tag !== 22 ? Ms() : 536870912, t.lanes |= n, as |= n);
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
        return l = n.memoizedState, t === null ? (qa(n), l !== null ? (Nt(n), Rx(n, l)) : (Nt(n), n.flags &= -16777217)) : l ? l !== t.memoizedState ? (qa(n), Nt(n), Rx(n, l)) : (Nt(n), n.flags &= -16777217) : (t.memoizedProps !== f && qa(n), Nt(n), n.flags &= -16777217), null;
      case 27:
        De(n), l = ie.current;
        var h = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== f && qa(n);
        else {
          if (!f) {
            if (n.stateNode === null) throw Error(i(166));
            return Nt(n), null;
          }
          t = q.current, qs(n) ? l1(n) : (t = Rv(h, f, l), n.stateNode = t, qa(n));
        }
        return Nt(n), null;
      case 5:
        if (De(n), l = n.type, t !== null && n.stateNode != null) t.memoizedProps !== f && qa(n);
        else {
          if (!f) {
            if (n.stateNode === null) throw Error(i(166));
            return Nt(n), null;
          }
          if (t = q.current, qs(n)) l1(n);
          else {
            switch (h = E0(ie.current), t) {
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
          } else t = E0(t).createTextNode(f), t[Jt] = n, n.stateNode = t;
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
          if (!h) return n.flags & 256 ? ($a(n), n) : ($a(n), null);
        }
        if ($a(n), (n.flags & 128) !== 0) return n.lanes = l, n;
        if (l = f !== null, t = t !== null && t.memoizedState !== null, l) {
          f = n.child, h = null, f.alternate !== null && f.alternate.memoizedState !== null && f.alternate.memoizedState.cachePool !== null && (h = f.alternate.memoizedState.cachePool.pool);
          var p = null;
          f.memoizedState !== null && f.memoizedState.cachePool !== null && (p = f.memoizedState.cachePool.pool), p !== h && (f.flags |= 2048);
        }
        return l !== t && l && (n.child.flags |= 8192), l0(n, n.updateQueue), Nt(n), null;
      case 4:
        return ye(), t === null && lo(n.stateNode.containerInfo), Nt(n), null;
      case 10:
        return Va(n.type), Nt(n), null;
      case 19:
        if (R(Kt), h = n.memoizedState, h === null) return Nt(n), null;
        if (f = (n.flags & 128) !== 0, p = h.rendering, p === null) if (f) ol(h, false);
        else {
          if (Lt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = n.child; t !== null; ) {
            if (p = r0(t), p !== null) {
              for (n.flags |= 128, ol(h, false), t = p.updateQueue, n.updateQueue = t, l0(n, t), n.subtreeFlags = 0, t = l, l = n.child; l !== null; ) i1(l, t), l = l.sibling;
              return z(Kt, Kt.current & 1 | 2), n.child;
            }
            t = t.sibling;
          }
          h.tail !== null && ke() > u0 && (n.flags |= 128, f = true, ol(h, false), n.lanes = 4194304);
        }
        else {
          if (!f) if (t = r0(p), t !== null) {
            if (n.flags |= 128, f = true, t = t.updateQueue, n.updateQueue = t, l0(n, t), ol(h, true), h.tail === null && h.tailMode === "hidden" && !p.alternate && !dt) return Nt(n), null;
          } else 2 * ke() - h.renderingStartTime > u0 && l !== 536870912 && (n.flags |= 128, f = true, ol(h, false), n.lanes = 4194304);
          h.isBackwards ? (p.sibling = n.child, n.child = p) : (t = h.last, t !== null ? t.sibling = p : n.child = p, h.last = p);
        }
        return h.tail !== null ? (n = h.tail, h.rendering = n, h.tail = n.sibling, h.renderingStartTime = ke(), n.sibling = null, t = Kt.current, z(Kt, f ? t & 1 | 2 : t & 1), n) : (Nt(n), null);
      case 22:
      case 23:
        return $a(n), fu(), f = n.memoizedState !== null, t !== null ? t.memoizedState !== null !== f && (n.flags |= 8192) : f && (n.flags |= 8192), f ? (l & 536870912) !== 0 && (n.flags & 128) === 0 && (Nt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Nt(n), l = n.updateQueue, l !== null && l0(n, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), f = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (f = n.memoizedState.cachePool.pool), f !== l && (n.flags |= 2048), t !== null && R(ii), null;
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
        return De(n), null;
      case 13:
        if ($a(n), t = n.memoizedState, t !== null && t.dehydrated !== null) {
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
        return $a(n), fu(), t !== null && R(ii), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
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
        De(n);
        break;
      case 4:
        ye();
        break;
      case 13:
        $a(n);
        break;
      case 19:
        R(Kt);
        break;
      case 10:
        Va(n.type);
        break;
      case 22:
      case 23:
        $a(n), fu(), t !== null && R(ii);
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
            var p = l.create, k = l.inst;
            f = p(), k.destroy = f;
          }
          l = l.next;
        } while (l !== h);
      }
    } catch (F) {
      St(n, n.return, F);
    }
  }
  function En(t, n, l) {
    try {
      var f = n.updateQueue, h = f !== null ? f.lastEffect : null;
      if (h !== null) {
        var p = h.next;
        f = p;
        do {
          if ((f.tag & t) === t) {
            var k = f.inst, F = k.destroy;
            if (F !== void 0) {
              k.destroy = void 0, h = n;
              var Z = l, ue = F;
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
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && bn(t.type) || t.tag === 4;
  }
  function Iu(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Bx(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && bn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Hu(t, n, l) {
    var f = t.tag;
    if (f === 5 || f === 6) t = t.stateNode, n ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, n) : (n = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, n.appendChild(t), l = l._reactRootContainer, l != null || n.onclick !== null || (n.onclick = y0));
    else if (f !== 4 && (f === 27 && bn(t.type) && (l = t.stateNode, n = null), t = t.child, t !== null)) for (Hu(t, n, l), t = t.sibling; t !== null; ) Hu(t, n, l), t = t.sibling;
  }
  function c0(t, n, l) {
    var f = t.tag;
    if (f === 5 || f === 6) t = t.stateNode, n ? l.insertBefore(t, n) : l.appendChild(t);
    else if (f !== 4 && (f === 27 && bn(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (c0(t, n, l), t = t.sibling; t !== null; ) c0(t, n, l), t = t.sibling;
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
    if (t = t.containerInfo, uo = k0, t = Kd(t), If(t)) {
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
          var k = 0, F = -1, Z = -1, ue = 0, Ee = 0, Se = t, de = null;
          t: for (; ; ) {
            for (var ve; Se !== l || h !== 0 && Se.nodeType !== 3 || (F = k + h), Se !== p || f !== 0 && Se.nodeType !== 3 || (Z = k + f), Se.nodeType === 3 && (k += Se.nodeValue.length), (ve = Se.firstChild) !== null; ) de = Se, Se = ve;
            for (; ; ) {
              if (Se === t) break t;
              if (de === l && ++ue === h && (F = k), de === p && ++Ee === f && (Z = k), (ve = Se.nextSibling) !== null) break;
              Se = de, de = Se.parentNode;
            }
            Se = ve;
          }
          l = F === -1 || Z === -1 ? null : { start: F, end: Z };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (oo = { focusedElem: t, selectionRange: l }, k0 = false, rr = n; rr !== null; ) if (n = rr, t = n.child, (n.subtreeFlags & 1024) !== 0 && t !== null) t.return = n, rr = t;
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
        _n(t, l), f & 4 && hl(5, l);
        break;
      case 1:
        if (_n(t, l), f & 4) if (t = l.stateNode, n === null) try {
          t.componentDidMount();
        } catch (k) {
          St(l, l.return, k);
        }
        else {
          var h = li(l.type, n.memoizedProps);
          n = n.memoizedState;
          try {
            t.componentDidUpdate(h, n, t.__reactInternalSnapshotBeforeUpdate);
          } catch (k) {
            St(l, l.return, k);
          }
        }
        f & 64 && Nx(l), f & 512 && dl(l, l.return);
        break;
      case 3:
        if (_n(t, l), f & 64 && (t = l.updateQueue, t !== null)) {
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
          } catch (k) {
            St(l, l.return, k);
          }
        }
        break;
      case 27:
        n === null && f & 4 && Ux(l);
      case 26:
      case 5:
        _n(t, l), n === null && f & 4 && Lx(l), f & 512 && dl(l, l.return);
        break;
      case 12:
        _n(t, l);
        break;
      case 13:
        _n(t, l), f & 4 && Px(t, l), f & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = x_.bind(null, l), F_(t, l))));
        break;
      case 22:
        if (f = l.memoizedState !== null || Ka, !f) {
          n = n !== null && n.memoizedState !== null || jt, h = Ka;
          var p = jt;
          Ka = f, (jt = n) && !p ? Tn(t, l, (l.subtreeFlags & 8772) !== 0) : _n(t, l), Ka = h, jt = p;
        }
        break;
      case 30:
        break;
      default:
        _n(t, l);
    }
  }
  function jx(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, jx(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && I(n)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Rt = null, Rr = false;
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
        var f = Rt, h = Rr;
        bn(l.type) && (Rt = l.stateNode, Rr = false), Wa(t, n, l), Tl(l.stateNode), Rt = f, Rr = h;
        break;
      case 5:
        jt || Ca(l, n);
      case 6:
        if (f = Rt, h = Rr, Rt = null, Wa(t, n, l), Rt = f, Rr = h, Rt !== null) if (Rr) try {
          (Rt.nodeType === 9 ? Rt.body : Rt.nodeName === "HTML" ? Rt.ownerDocument.body : Rt).removeChild(l.stateNode);
        } catch (p) {
          St(l, n, p);
        }
        else try {
          Rt.removeChild(l.stateNode);
        } catch (p) {
          St(l, n, p);
        }
        break;
      case 18:
        Rt !== null && (Rr ? (t = Rt, Ov(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Dl(t)) : Ov(Rt, l.stateNode));
        break;
      case 4:
        f = Rt, h = Rr, Rt = l.stateNode.containerInfo, Rr = true, Wa(t, n, l), Rt = f, Rr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jt || En(2, l, n), jt || En(4, l, n), Wa(t, n, l);
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
      Dl(t);
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
      var h = l[f], p = t, k = n, F = k;
      e: for (; F !== null; ) {
        switch (F.tag) {
          case 27:
            if (bn(F.type)) {
              Rt = F.stateNode, Rr = false;
              break e;
            }
            break;
          case 5:
            Rt = F.stateNode, Rr = false;
            break e;
          case 3:
          case 4:
            Rt = F.stateNode.containerInfo, Rr = true;
            break e;
        }
        F = F.return;
      }
      if (Rt === null) throw Error(i(160));
      zx(p, k, h), Rt = null, Rr = false, p = h.alternate, p !== null && (p.return = null), h.return = null;
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
        Hr(n, t), jr(t), f & 4 && (En(3, t, t.return), hl(3, t), En(5, t, t.return));
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
                  var k = Uv("link", "href", h).get(f + (l.href || ""));
                  if (k) {
                    for (var F = 0; F < k.length; F++) if (p = k[F], p.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && p.getAttribute("rel") === (l.rel == null ? null : l.rel) && p.getAttribute("title") === (l.title == null ? null : l.title) && p.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                      k.splice(F, 1);
                      break t;
                    }
                  }
                  p = h.createElement(f), cr(p, f, l), h.head.appendChild(p);
                  break;
                case "meta":
                  if (k = Uv("meta", "content", h).get(f + (l.content || ""))) {
                    for (F = 0; F < k.length; F++) if (p = k[F], p.getAttribute("content") === (l.content == null ? null : "" + l.content) && p.getAttribute("name") === (l.name == null ? null : l.name) && p.getAttribute("property") === (l.property == null ? null : l.property) && p.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && p.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                      k.splice(F, 1);
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
            Li(h, "");
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
        if (w0 = null, h = xa, xa = _0(n.containerInfo), Hr(n, t), xa = h, jr(t), f & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Dl(n.containerInfo);
        } catch (ve) {
          St(t, t.return, ve);
        }
        ju && (ju = false, Vx(t));
        break;
      case 4:
        f = xa, xa = _0(t.stateNode.containerInfo), Hr(n, t), jr(t), xa = f;
        break;
      case 12:
        Hr(n, t), jr(t);
        break;
      case 13:
        Hr(n, t), jr(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Yu = ke()), f & 4 && (f = t.updateQueue, f !== null && (t.updateQueue = null, zu(t, f)));
        break;
      case 22:
        h = t.memoizedState !== null;
        var Z = l !== null && l.memoizedState !== null, ue = Ka, Ee = jt;
        if (Ka = ue || h, jt = Ee || Z, Hr(n, t), jt = Ee, Ka = ue, jr(t), f & 8192) e: for (n = t.stateNode, n._visibility = h ? n._visibility & -2 : n._visibility | 1, h && (l === null || Z || Ka || jt || ci(t)), l = null, n = t; ; ) {
          if (n.tag === 5 || n.tag === 26) {
            if (l === null) {
              Z = l = n;
              try {
                if (p = Z.stateNode, h) k = p.style, typeof k.setProperty == "function" ? k.setProperty("display", "none", "important") : k.display = "none";
                else {
                  F = Z.stateNode;
                  var Se = Z.memoizedProps.style, de = Se != null && Se.hasOwnProperty("display") ? Se.display : null;
                  F.style.display = de == null || typeof de == "boolean" ? "" : ("" + de).trim();
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
            c0(t, p, h);
            break;
          case 5:
            var k = l.stateNode;
            l.flags & 32 && (Li(k, ""), l.flags &= -33);
            var F = Iu(t);
            c0(t, F, k);
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
  function _n(t, n) {
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
          En(4, n, n.return), ci(n);
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
  function Tn(t, n, l) {
    for (l = l && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var f = n.alternate, h = t, p = n, k = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Tn(h, p, l), hl(4, p);
          break;
        case 1:
          if (Tn(h, p, l), f = p, h = f.stateNode, typeof h.componentDidMount == "function") try {
            h.componentDidMount();
          } catch (ue) {
            St(f, f.return, ue);
          }
          if (f = p, h = f.updateQueue, h !== null) {
            var F = f.stateNode;
            try {
              var Z = h.shared.hiddenCallbacks;
              if (Z !== null) for (h.shared.hiddenCallbacks = null, h = 0; h < Z.length; h++) y1(Z[h], F);
            } catch (ue) {
              St(f, f.return, ue);
            }
          }
          l && k & 64 && Nx(p), dl(p, p.return);
          break;
        case 27:
          Ux(p);
        case 26:
        case 5:
          Tn(h, p, l), l && f === null && k & 4 && Lx(p), dl(p, p.return);
          break;
        case 12:
          Tn(h, p, l);
          break;
        case 13:
          Tn(h, p, l), l && k & 4 && Px(h, p);
          break;
        case 22:
          p.memoizedState === null && Tn(h, p, l), dl(p, p.return);
          break;
        case 30:
          break;
        default:
          Tn(h, p, l);
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
            var p = n.memoizedProps, k = p.id, F = p.onPostCommit;
            typeof F == "function" && F(k, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
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
        p = n.stateNode, k = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? ba(t, n, l, f) : xl(t, n) : p._visibility & 2 ? ba(t, n, l, f) : (p._visibility |= 2, es(t, n, l, f, (n.subtreeFlags & 10256) !== 0)), h & 2048 && Pu(k, n);
        break;
      case 24:
        ba(t, n, l, f), h & 2048 && Gu(n.alternate, n);
        break;
      default:
        ba(t, n, l, f);
    }
  }
  function es(t, n, l, f, h) {
    for (h = h && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var p = t, k = n, F = l, Z = f, ue = k.flags;
      switch (k.tag) {
        case 0:
        case 11:
        case 15:
          es(p, k, F, Z, h), hl(8, k);
          break;
        case 23:
          break;
        case 22:
          var Ee = k.stateNode;
          k.memoizedState !== null ? Ee._visibility & 2 ? es(p, k, F, Z, h) : xl(p, k) : (Ee._visibility |= 2, es(p, k, F, Z, h)), h && ue & 2048 && Pu(k.alternate, k);
          break;
        case 24:
          es(p, k, F, Z, h), h && ue & 2048 && Gu(k.alternate, k);
          break;
        default:
          es(p, k, F, Z, h);
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
  function ts(t) {
    if (t.subtreeFlags & vl) for (t = t.child; t !== null; ) $x(t), t = t.sibling;
  }
  function $x(t) {
    switch (t.tag) {
      case 26:
        ts(t), t.flags & vl && t.memoizedState !== null && X_(xa, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ts(t);
        break;
      case 3:
      case 4:
        var n = xa;
        xa = _0(t.stateNode.containerInfo), ts(t), xa = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = vl, vl = 16777216, ts(t), vl = n) : ts(t));
        break;
      default:
        ts(t);
    }
  }
  function Yx(t) {
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
      Yx(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) qx(t), t = t.sibling;
  }
  function qx(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pl(t), t.flags & 2048 && En(9, t, t.return);
        break;
      case 3:
        pl(t);
        break;
      case 12:
        pl(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3, f0(t)) : pl(t);
        break;
      default:
        pl(t);
    }
  }
  function f0(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null) for (var l = 0; l < n.length; l++) {
        var f = n[l];
        rr = f, Kx(f, t);
      }
      Yx(t);
    }
    for (t = t.child; t !== null; ) {
      switch (n = t, n.tag) {
        case 0:
        case 11:
        case 15:
          En(8, n, n.return), f0(n);
          break;
        case 22:
          l = n.stateNode, l._visibility & 2 && (l._visibility &= -3, f0(n));
          break;
        default:
          f0(n);
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
          En(8, l, n);
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
  } }, c_ = typeof WeakMap == "function" ? WeakMap : Map, pt = 0, Ct = null, at = null, ct = 0, mt = 0, zr = null, wn = false, rs = false, Vu = false, Za = 0, Lt = 0, Sn = 0, fi = 0, Xu = 0, ra = 0, as = 0, ml = null, Fr = null, $u = false, Yu = 0, u0 = 1 / 0, o0 = null, An = null, lr = 0, kn = null, ns = null, is = 0, qu = 0, Ku = null, Wx = null, gl = 0, Wu = null;
  function Pr() {
    if ((pt & 2) !== 0 && ct !== 0) return ct & -ct;
    if (J.T !== null) {
      var t = $i;
      return t !== 0 ? t : ao();
    }
    return Sc();
  }
  function Zx() {
    ra === 0 && (ra = (ct & 536870912) === 0 || dt ? Ns() : 536870912);
    var t = ta.current;
    return t !== null && (t.flags |= 32), ra;
  }
  function Gr(t, n, l) {
    (t === Ct && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (ss(t, 0), Cn(t, ct, ra, false)), Yn(t, l), ((pt & 2) === 0 || t !== Ct) && (t === Ct && ((pt & 2) === 0 && (fi |= l), Lt === 4 && Cn(t, ct, ra, false)), Oa(t));
  }
  function Qx(t, n, l) {
    if ((pt & 6) !== 0) throw Error(i(327));
    var f = !l && (n & 124) === 0 && (n & t.expiredLanes) === 0 || $n(t, n), h = f ? o_(t, n) : Ju(t, n, true), p = f;
    do {
      if (h === 0) {
        rs && !f && Cn(t, n, 0, false);
        break;
      } else {
        if (l = t.current.alternate, p && !f_(l)) {
          h = Ju(t, n, false), p = false;
          continue;
        }
        if (h === 2) {
          if (p = n, t.errorRecoveryDisabledLanes & p) var k = 0;
          else k = t.pendingLanes & -536870913, k = k !== 0 ? k : k & 536870912 ? 536870912 : 0;
          if (k !== 0) {
            n = k;
            e: {
              var F = t;
              h = ml;
              var Z = F.current.memoizedState.isDehydrated;
              if (Z && (ss(F, k).flags |= 256), k = Ju(F, k, false), k !== 2) {
                if (Vu && !Z) {
                  F.errorRecoveryDisabledLanes |= p, fi |= p, h = 4;
                  break e;
                }
                p = Fr, Fr = h, p !== null && (Fr === null ? Fr = p : Fr.push.apply(Fr, p));
              }
              h = k;
            }
            if (p = false, h !== 2) continue;
          }
        }
        if (h === 1) {
          ss(t, 0), Cn(t, n, 0, true);
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
              Cn(f, n, ra, !wn);
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
          if ((n & 62914560) === n && (h = Yu + 300 - ke(), 10 < h)) {
            if (Cn(f, n, ra, !wn), Fi(f, 0, true) !== 0) break e;
            f.timeoutHandle = Cv(Jx.bind(null, f, l, Fr, o0, $u, n, ra, fi, as, wn, p, 2, -0, 0), h);
            break e;
          }
          Jx(f, l, Fr, o0, $u, n, ra, fi, as, wn, p, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Oa(t);
  }
  function Jx(t, n, l, f, h, p, k, F, Z, ue, Ee, Se, de, ve) {
    if (t.timeoutHandle = -1, Se = n.subtreeFlags, (Se & 8192 || (Se & 16785408) === 16785408) && (Al = { stylesheets: null, count: 0, unsuspend: V_ }, $x(n), Se = $_(), Se !== null)) {
      t.cancelPendingCommit = Se(sv.bind(null, t, n, p, l, f, h, k, F, Z, Ee, 1, de, ve)), Cn(t, p, k, !ue);
      return;
    }
    sv(t, n, p, l, f, h, k, F, Z);
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
  function Cn(t, n, l, f) {
    n &= ~Xu, n &= ~fi, t.suspendedLanes |= n, t.pingedLanes &= ~n, f && (t.warmLanes |= n), f = t.expirationTimes;
    for (var h = n; 0 < h; ) {
      var p = 31 - gt(h), k = 1 << p;
      f[p] = -1, h &= ~k;
    }
    l !== 0 && Tc(t, l, n);
  }
  function h0() {
    return (pt & 6) === 0 ? (yl(0), false) : true;
  }
  function Zu() {
    if (at !== null) {
      if (mt === 0) var t = at.return;
      else t = at, Ga = ai = null, xu(t), Qi = null, fl = 0, t = at;
      for (; t !== null; ) Fx(t.alternate, t), t = t.return;
      at = null;
    }
  }
  function ss(t, n) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, C_(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Zu(), Ct = t, at = l = ja(t.current, null), ct = n, mt = 0, zr = null, wn = false, rs = $n(t, n), Vu = false, as = ra = Xu = fi = Sn = Lt = 0, Fr = ml = null, $u = false, (n & 8) !== 0 && (n |= n & 32);
    var f = t.entangledLanes;
    if (f !== 0) for (t = t.entanglements, f &= n; 0 < f; ) {
      var h = 31 - gt(f), p = 1 << h;
      n |= t[h], f &= ~p;
    }
    return Za = n, Mc(), l;
  }
  function ev(t, n) {
    Je = null, J.H = Jc, n === el || n === Gc ? (n = m1(), mt = 3) : n === x1 ? (n = m1(), mt = 4) : mt = n === gx ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, zr = n, at === null && (Lt = 1, n0(t, Zr(n, t.current)));
  }
  function tv() {
    var t = J.H;
    return J.H = Jc, t === null ? Jc : t;
  }
  function rv() {
    var t = J.A;
    return J.A = l_, t;
  }
  function Qu() {
    Lt = 4, wn || (ct & 4194048) !== ct && ta.current !== null || (rs = true), (Sn & 134217727) === 0 && (fi & 134217727) === 0 || Ct === null || Cn(Ct, ct, ra, false);
  }
  function Ju(t, n, l) {
    var f = pt;
    pt |= 2;
    var h = tv(), p = rv();
    (Ct !== t || ct !== n) && (o0 = null, ss(t, n)), n = false;
    var k = Lt;
    e: do
      try {
        if (mt !== 0 && at !== null) {
          var F = at, Z = zr;
          switch (mt) {
            case 8:
              Zu(), k = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ta.current === null && (n = true);
              var ue = mt;
              if (mt = 0, zr = null, ls(t, F, Z, ue), l && rs) {
                k = 0;
                break e;
              }
              break;
            default:
              ue = mt, mt = 0, zr = null, ls(t, F, Z, ue);
          }
        }
        u_(), k = Lt;
        break;
      } catch (Ee) {
        ev(t, Ee);
      }
    while (true);
    return n && t.shellSuspendCounter++, Ga = ai = null, pt = f, J.H = h, J.A = p, at === null && (Ct = null, ct = 0, Mc()), k;
  }
  function u_() {
    for (; at !== null; ) av(at);
  }
  function o_(t, n) {
    var l = pt;
    pt |= 2;
    var f = tv(), h = rv();
    Ct !== t || ct !== n ? (o0 = null, u0 = ke() + 500, ss(t, n)) : rs = $n(t, n);
    e: do
      try {
        if (mt !== 0 && at !== null) {
          n = at;
          var p = zr;
          t: switch (mt) {
            case 1:
              mt = 0, zr = null, ls(t, n, p, 1);
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
              v1(p) ? (mt = 0, zr = null, nv(n)) : (mt = 0, zr = null, ls(t, n, p, 7));
              break;
            case 5:
              var k = null;
              switch (at.tag) {
                case 26:
                  k = at.memoizedState;
                case 5:
                case 27:
                  var F = at;
                  if (!k || Hv(k)) {
                    mt = 0, zr = null;
                    var Z = F.sibling;
                    if (Z !== null) at = Z;
                    else {
                      var ue = F.return;
                      ue !== null ? (at = ue, d0(ue)) : at = null;
                    }
                    break t;
                  }
              }
              mt = 0, zr = null, ls(t, n, p, 5);
              break;
            case 6:
              mt = 0, zr = null, ls(t, n, p, 6);
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
    return Ga = ai = null, J.H = f, J.A = h, pt = l, at !== null ? 0 : (Ct = null, ct = 0, Mc(), Lt);
  }
  function h_() {
    for (; at !== null && !Be(); ) av(at);
  }
  function av(t) {
    var n = Dx(t.alternate, t, Za);
    t.memoizedProps = t.pendingProps, n === null ? d0(t) : at = n;
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
        Fx(l, n), n = at = i1(n, Za), n = Dx(l, n, Za);
    }
    t.memoizedProps = t.pendingProps, n === null ? d0(t) : at = n;
  }
  function ls(t, n, l, f) {
    Ga = ai = null, xu(n), Qi = null, fl = 0;
    var h = n.return;
    try {
      if (t_(t, h, n, l, ct)) {
        Lt = 1, n0(t, Zr(l, t.current)), at = null;
        return;
      }
    } catch (p) {
      if (h !== null) throw at = h, p;
      Lt = 1, n0(t, Zr(l, t.current)), at = null;
      return;
    }
    n.flags & 32768 ? (dt || f === 1 ? t = true : rs || (ct & 536870912) !== 0 ? t = false : (wn = t = true, (f === 2 || f === 9 || f === 3 || f === 6) && (f = ta.current, f !== null && f.tag === 13 && (f.flags |= 16384))), iv(n, t)) : d0(n);
  }
  function d0(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        iv(n, wn);
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
  function sv(t, n, l, f, h, p, k, F, Z) {
    t.cancelPendingCommit = null;
    do
      x0();
    while (lr !== 0);
    if ((pt & 6) !== 0) throw Error(i(327));
    if (n !== null) {
      if (n === t.current) throw Error(i(177));
      if (p = n.lanes | n.childLanes, p |= Gf, Ni(t, l, p, k, F, Z), t === Ct && (at = Ct = null, ct = 0), ns = n, kn = t, is = l, qu = p, Ku = h, Wx = f, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, p_(At, function() {
        return ov(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), f = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || f) {
        f = J.T, J.T = null, h = ae.p, ae.p = 2, k = pt, pt |= 4;
        try {
          i_(t, n, l);
        } finally {
          pt = k, ae.p = h, J.T = f;
        }
      }
      lr = 1, lv(), cv(), fv();
    }
  }
  function lv() {
    if (lr === 1) {
      lr = 0;
      var t = kn, n = ns, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = J.T, J.T = null;
        var f = ae.p;
        ae.p = 2;
        var h = pt;
        pt |= 4;
        try {
          Gx(n, t);
          var p = oo, k = Kd(t.containerInfo), F = p.focusedElem, Z = p.selectionRange;
          if (k !== F && F && F.ownerDocument && qd(F.ownerDocument.documentElement, F)) {
            if (Z !== null && If(F)) {
              var ue = Z.start, Ee = Z.end;
              if (Ee === void 0 && (Ee = ue), "selectionStart" in F) F.selectionStart = ue, F.selectionEnd = Math.min(Ee, F.value.length);
              else {
                var Se = F.ownerDocument || document, de = Se && Se.defaultView || window;
                if (de.getSelection) {
                  var ve = de.getSelection(), ze = F.textContent.length, He = Math.min(Z.start, ze), wt = Z.end === void 0 ? He : Math.min(Z.end, ze);
                  !ve.extend && He > wt && (k = wt, wt = He, He = k);
                  var se = Yd(F, He), te = Yd(F, wt);
                  if (se && te && (ve.rangeCount !== 1 || ve.anchorNode !== se.node || ve.anchorOffset !== se.offset || ve.focusNode !== te.node || ve.focusOffset !== te.offset)) {
                    var ce = Se.createRange();
                    ce.setStart(se.node, se.offset), ve.removeAllRanges(), He > wt ? (ve.addRange(ce), ve.extend(te.node, te.offset)) : (ce.setEnd(te.node, te.offset), ve.addRange(ce));
                  }
                }
              }
            }
            for (Se = [], ve = F; ve = ve.parentNode; ) ve.nodeType === 1 && Se.push({ element: ve, left: ve.scrollLeft, top: ve.scrollTop });
            for (typeof F.focus == "function" && F.focus(), F = 0; F < Se.length; F++) {
              var Te = Se[F];
              Te.element.scrollLeft = Te.left, Te.element.scrollTop = Te.top;
            }
          }
          k0 = !!uo, oo = uo = null;
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
      var t = kn, n = ns, l = (n.flags & 8772) !== 0;
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
      lr = 0, Re();
      var t = kn, n = ns, l = is, f = Wx;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? lr = 5 : (lr = 0, ns = kn = null, uv(t, t.pendingLanes));
      var h = t.pendingLanes;
      if (h === 0 && (An = null), Us(l), n = n.stateNode, tt && typeof tt.onCommitFiberRoot == "function") try {
        tt.onCommitFiberRoot(st, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
      if (f !== null) {
        n = J.T, h = ae.p, ae.p = 2, J.T = null;
        try {
          for (var p = t.onRecoverableError, k = 0; k < f.length; k++) {
            var F = f[k];
            p(F.value, { componentStack: F.stack });
          }
        } finally {
          J.T = n, ae.p = h;
        }
      }
      (is & 3) !== 0 && x0(), Oa(t), h = t.pendingLanes, (l & 4194090) !== 0 && (h & 42) !== 0 ? t === Wu ? gl++ : (gl = 0, Wu = t) : gl = 0, yl(0);
    }
  }
  function uv(t, n) {
    (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache, n != null && (t.pooledCache = null, Qs(n)));
  }
  function x0(t) {
    return lv(), cv(), fv(), ov();
  }
  function ov() {
    if (lr !== 5) return false;
    var t = kn, n = qu;
    qu = 0;
    var l = Us(is), f = J.T, h = ae.p;
    try {
      ae.p = 32 > l ? 32 : l, J.T = null, l = Ku, Ku = null;
      var p = kn, k = is;
      if (lr = 0, ns = kn = null, is = 0, (pt & 6) !== 0) throw Error(i(331));
      var F = pt;
      if (pt |= 4, qx(p.current), Xx(p, p.current, k, l), pt = F, yl(0, false), tt && typeof tt.onPostCommitFiberRoot == "function") try {
        tt.onPostCommitFiberRoot(st, p);
      } catch {
      }
      return true;
    } finally {
      ae.p = h, J.T = f, uv(t, n);
    }
  }
  function hv(t, n, l) {
    n = Zr(l, n), n = bu(t.stateNode, n, 2), t = pn(t, n, 2), t !== null && (Yn(t, 2), Oa(t));
  }
  function St(t, n, l) {
    if (t.tag === 3) hv(t, t, l);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        hv(n, t, l);
        break;
      } else if (n.tag === 1) {
        var f = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (An === null || !An.has(f))) {
          t = Zr(l, t), l = px(2), f = pn(n, l, 2), f !== null && (mx(l, f, n, t), Yn(f, 2), Oa(f));
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
    f !== null && f.delete(n), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Ct === t && (ct & l) === l && (Lt === 4 || Lt === 3 && (ct & 62914560) === ct && 300 > ke() - Yu ? (pt & 2) === 0 && ss(t, 0) : Xu |= l, as === ct && (as = 0)), Oa(t);
  }
  function dv(t, n) {
    n === 0 && (n = Ms()), t = Pi(t, n), t !== null && (Yn(t, n), Oa(t));
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
  var v0 = null, cs = null, to = false, p0 = false, ro = false, ui = 0;
  function Oa(t) {
    t !== cs && t.next === null && (cs === null ? v0 = cs = t : cs = cs.next = t), p0 = true, to || (to = true, g_());
  }
  function yl(t, n) {
    if (!ro && p0) {
      ro = true;
      do
        for (var l = false, f = v0; f !== null; ) {
          if (t !== 0) {
            var h = f.pendingLanes;
            if (h === 0) var p = 0;
            else {
              var k = f.suspendedLanes, F = f.pingedLanes;
              p = (1 << 31 - gt(42 | t) + 1) - 1, p &= h & ~(k & ~F), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (l = true, mv(f, p));
          } else p = ct, p = Fi(f, f === Ct ? p : 0, f.cancelPendingCommit !== null || f.timeoutHandle !== -1), (p & 3) === 0 || $n(f, p) || (l = true, mv(f, p));
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
    p0 = to = false;
    var t = 0;
    ui !== 0 && (k_() && (t = ui), ui = 0);
    for (var n = ke(), l = null, f = v0; f !== null; ) {
      var h = f.next, p = vv(f, n);
      p === 0 ? (f.next = null, l === null ? v0 = h : l.next = h, h === null && (cs = l)) : (l = f, (t !== 0 || (p & 3) !== 0) && (p0 = true)), f = h;
    }
    yl(t);
  }
  function vv(t, n) {
    for (var l = t.suspendedLanes, f = t.pingedLanes, h = t.expirationTimes, p = t.pendingLanes & -62914561; 0 < p; ) {
      var k = 31 - gt(p), F = 1 << k, Z = h[k];
      Z === -1 ? ((F & l) === 0 || (F & f) !== 0) && (h[k] = _c(F, n)) : Z <= n && (t.expiredLanes |= F), p &= ~F;
    }
    if (n = Ct, l = ct, l = Fi(t, t === n ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), f = t.callbackNode, l === 0 || t === n && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) return f !== null && f !== null && Le(f), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || $n(t, l)) {
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
    if (x0() && t.callbackNode !== l) return null;
    var f = ct;
    return f = Fi(t, t === Ct ? f : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), f === 0 ? null : (Qx(t, f, n), vv(t, ke()), t.callbackNode != null && t.callbackNode === l ? pv.bind(null, t) : null);
  }
  function mv(t, n) {
    if (x0()) return null;
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
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Cc("" + t);
  }
  function yv(t, n) {
    var l = n.ownerDocument.createElement("input");
    return l.name = n.name, l.value = n.value, t.id && l.setAttribute("form", t.id), n.parentNode.insertBefore(l, n), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function y_(t, n, l, f, h) {
    if (n === "submit" && l && l.stateNode === h) {
      var p = gv((h[er] || null).action), k = f.submitter;
      k && (n = (n = k[er] || null) ? gv(n.formAction) : k.getAttribute("formAction"), n !== null && (p = n, k = null));
      var F = new Rc("action", "action", null, f, h);
      t.push({ event: F, listeners: [{ instance: null, listener: function() {
        if (f.defaultPrevented) {
          if (ui !== 0) {
            var Z = k ? yv(h, k) : new FormData(h);
            wu(l, { pending: true, data: Z, method: h.method, action: p }, null, Z);
          }
        } else typeof p == "function" && (F.preventDefault(), Z = k ? yv(h, k) : new FormData(h), wu(l, { pending: true, data: Z, method: h.method, action: p }, p, Z));
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
        if (n) for (var k = f.length - 1; 0 <= k; k--) {
          var F = f[k], Z = F.instance, ue = F.currentTarget;
          if (F = F.listener, Z !== p && h.isPropagationStopped()) break e;
          p = F, h.currentTarget = ue;
          try {
            p(h);
          } catch (Ee) {
            a0(Ee);
          }
          h.currentTarget = null, p = Z;
        }
        else for (k = 0; k < f.length; k++) {
          if (F = f[k], Z = F.instance, ue = F.currentTarget, F = F.listener, Z !== p && h.isPropagationStopped()) break e;
          p = F, h.currentTarget = ue;
          try {
            p(h);
          } catch (Ee) {
            a0(Ee);
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
  var m0 = "_reactListening" + Math.random().toString(36).slice(2);
  function lo(t) {
    if (!t[m0]) {
      t[m0] = true, he.forEach(function(l) {
        l !== "selectionchange" && (T_.has(l) || so(l, false, t), so(l, true, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[m0] || (n[m0] = true, so("selectionchange", false, n));
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
      var k = f.tag;
      if (k === 3 || k === 4) {
        var F = f.stateNode.containerInfo;
        if (F === h) break;
        if (k === 4) for (k = f.return; k !== null; ) {
          var Z = k.tag;
          if ((Z === 3 || Z === 4) && k.stateNode.containerInfo === h) return;
          k = k.return;
        }
        for (; F !== null; ) {
          if (k = P(F), k === null) return;
          if (Z = k.tag, Z === 5 || Z === 6 || Z === 26 || Z === 27) {
            f = p = k;
            continue e;
          }
          F = F.parentNode;
        }
      }
      f = f.return;
    }
    bd(function() {
      var ue = p, Ee = Cf(l), Se = [];
      e: {
        var de = r1.get(t);
        if (de !== void 0) {
          var ve = Rc, ze = t;
          switch (t) {
            case "keypress":
              if (Oc(l) === 0) break e;
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
              ve = Rd;
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
          if (de = t === "mouseover" || t === "pointerover", ve = t === "mouseout" || t === "pointerout", de && l !== kf && (ze = l.relatedTarget || l.fromElement) && (P(ze) || ze[un])) break e;
          if ((ve || de) && (de = Ee.window === Ee ? Ee : (de = Ee.ownerDocument) ? de.defaultView || de.parentWindow : window, ve ? (ze = l.relatedTarget || l.toElement, ve = ue, ze = ze ? P(ze) : null, ze !== null && (wt = c(ze), He = ze.tag, ze !== wt || He !== 5 && He !== 27 && He !== 6) && (ze = null)) : (ve = null, ze = ue), ve !== ze)) {
            if (He = Rd, Te = "onMouseLeave", se = "onMouseEnter", te = "mouse", (t === "pointerout" || t === "pointerover") && (He = Nd, Te = "onPointerLeave", se = "onPointerEnter", te = "pointer"), wt = ve == null ? de : oe(ve), ce = ze == null ? de : oe(ze), de = new He(Te, te + "leave", ve, l, Ee), de.target = wt, de.relatedTarget = ce, Te = null, P(Ee) === ue && (He = new He(se, te + "enter", ze, l, Ee), He.target = ce, He.relatedTarget = wt, Te = He), wt = Te, ve && ze) t: {
              for (He = ve, se = ze, te = 0, ce = He; ce; ce = fs(ce)) te++;
              for (ce = 0, Te = se; Te; Te = fs(Te)) ce++;
              for (; 0 < te - ce; ) He = fs(He), te--;
              for (; 0 < ce - te; ) se = fs(se), ce--;
              for (; te--; ) {
                if (He === se || se !== null && He === se.alternate) break t;
                He = fs(He), se = fs(se);
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
            (Hd(et) || et.contentEditable === "true") && (Hi = et, Hf = ue, Ys = null);
            break;
          case "focusout":
            Ys = Hf = Hi = null;
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
        else Ii ? Ud(t, l) && (je = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (je = "onCompositionStart");
        je && (Md && l.locale !== "ko" && (Ii || je !== "onCompositionStart" ? je === "onCompositionEnd" && Ii && (Ue = Od()) : (hn = Ee, Df = "value" in hn ? hn.value : hn.textContent, Ii = true)), et = g0(ue, je), 0 < et.length && (je = new Fd(je, t, null, l, Ee), Se.push({ event: je, listeners: et }), Ue ? je.data = Ue : (Ue = Id(l), Ue !== null && (je.data = Ue)))), (Ue = CE ? bE(t, l) : OE(t, l)) && (je = g0(ue, "onBeforeInput"), 0 < je.length && (et = new Fd("onBeforeInput", "beforeinput", null, l, Ee), Se.push({ event: et, listeners: je }), et.data = Ue)), y_(Se, t, ue, l, Ee);
      }
      Ev(Se, n);
    });
  }
  function _l(t, n, l) {
    return { instance: t, listener: n, currentTarget: l };
  }
  function g0(t, n) {
    for (var l = n + "Capture", f = []; t !== null; ) {
      var h = t, p = h.stateNode;
      if (h = h.tag, h !== 5 && h !== 26 && h !== 27 || p === null || (h = Hs(t, l), h != null && f.unshift(_l(t, h, p)), h = Hs(t, n), h != null && f.push(_l(t, h, p))), t.tag === 3) return f;
      t = t.return;
    }
    return [];
  }
  function fs(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Tv(t, n, l, f, h) {
    for (var p = n._reactName, k = []; l !== null && l !== f; ) {
      var F = l, Z = F.alternate, ue = F.stateNode;
      if (F = F.tag, Z !== null && Z === f) break;
      F !== 5 && F !== 26 && F !== 27 || ue === null || (Z = ue, h ? (ue = Hs(l, p), ue != null && k.unshift(_l(l, ue, Z))) : h || (ue = Hs(l, p), ue != null && k.push(_l(l, ue, Z)))), l = l.return;
    }
    k.length !== 0 && t.push({ event: n, listeners: k });
  }
  var w_ = /\r\n?/g, S_ = /\u0000|\uFFFD/g;
  function wv(t) {
    return (typeof t == "string" ? t : "" + t).replace(w_, `
`).replace(S_, "");
  }
  function Sv(t, n) {
    return n = wv(n), wv(t) === n;
  }
  function y0() {
  }
  function Tt(t, n, l, f, h, p) {
    switch (l) {
      case "children":
        typeof f == "string" ? n === "body" || n === "textarea" && f === "" || Li(t, f) : (typeof f == "number" || typeof f == "bigint") && n !== "body" && Li(t, "" + f);
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
        f = Cc("" + f), t.setAttribute(l, f);
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
        f = Cc("" + f), t.setAttribute(l, f);
        break;
      case "onClick":
        f != null && (t.onclick = y0);
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
        l = Cc("" + f), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
        typeof f == "string" ? Li(t, f) : (typeof f == "number" || typeof f == "bigint") && Li(t, "" + f);
        break;
      case "onScroll":
        f != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        f != null && nt("scrollend", t);
        break;
      case "onClick":
        f != null && (t.onclick = y0);
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
          var k = l[p];
          if (k != null) switch (p) {
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
              Tt(t, n, p, k, l, null);
          }
        }
        h && Tt(t, n, "srcSet", l.srcSet, l, null), f && Tt(t, n, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var F = p = k = h = null, Z = null, ue = null;
        for (f in l) if (l.hasOwnProperty(f)) {
          var Ee = l[f];
          if (Ee != null) switch (f) {
            case "name":
              h = Ee;
              break;
            case "type":
              k = Ee;
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
              F = Ee;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Ee != null) throw Error(i(137, n));
              break;
            default:
              Tt(t, n, f, Ee, l, null);
          }
        }
        Td(t, p, F, Z, ue, k, h, false), Ac(t);
        return;
      case "select":
        nt("invalid", t), f = k = p = null;
        for (h in l) if (l.hasOwnProperty(h) && (F = l[h], F != null)) switch (h) {
          case "value":
            p = F;
            break;
          case "defaultValue":
            k = F;
            break;
          case "multiple":
            f = F;
          default:
            Tt(t, n, h, F, l, null);
        }
        n = p, l = k, t.multiple = !!f, n != null ? Mi(t, !!f, n, false) : l != null && Mi(t, !!f, l, true);
        return;
      case "textarea":
        nt("invalid", t), p = h = f = null;
        for (k in l) if (l.hasOwnProperty(k) && (F = l[k], F != null)) switch (k) {
          case "value":
            f = F;
            break;
          case "defaultValue":
            h = F;
            break;
          case "children":
            p = F;
            break;
          case "dangerouslySetInnerHTML":
            if (F != null) throw Error(i(91));
            break;
          default:
            Tt(t, n, k, F, l, null);
        }
        Sd(t, f, h, p), Ac(t);
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
    for (F in l) l.hasOwnProperty(F) && (f = l[F], f != null && Tt(t, n, F, f, l, null));
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
        var h = null, p = null, k = null, F = null, Z = null, ue = null, Ee = null;
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
              k = ve;
              break;
            case "defaultValue":
              F = ve;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (ve != null) throw Error(i(137, n));
              break;
            default:
              ve !== Se && Tt(t, n, de, ve, f, Se);
          }
        }
        wf(t, k, F, Z, ue, Ee, p, h);
        return;
      case "select":
        ve = k = F = de = null;
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
            F = p;
            break;
          case "multiple":
            k = p;
          default:
            p !== Z && Tt(t, n, h, p, f, Z);
        }
        n = F, l = k, f = ve, de != null ? Mi(t, !!l, de, false) : !!f != !!l && (n != null ? Mi(t, !!l, n, true) : Mi(t, !!l, l ? [] : "", false));
        return;
      case "textarea":
        ve = de = null;
        for (F in l) if (h = l[F], l.hasOwnProperty(F) && h != null && !f.hasOwnProperty(F)) switch (F) {
          case "value":
            break;
          case "children":
            break;
          default:
            Tt(t, n, F, null, f, h);
        }
        for (k in f) if (h = f[k], p = l[k], f.hasOwnProperty(k) && (h != null || p != null)) switch (k) {
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
            h !== p && Tt(t, n, k, h, f, p);
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
  function E0(t) {
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
  function bn(t) {
    return t === "head";
  }
  function Ov(t, n) {
    var l = n, f = 0, h = 0;
    do {
      var p = l.nextSibling;
      if (t.removeChild(l), p && p.nodeType === 8) if (l = p.data, l === "/$") {
        if (0 < f && 8 > f) {
          l = f;
          var k = t.ownerDocument;
          if (l & 1 && Tl(k.documentElement), l & 2 && Tl(k.body), l & 4) for (l = k.head, Tl(l), k = l.firstChild; k; ) {
            var F = k.nextSibling, Z = k.nodeName;
            k[L] || Z === "SCRIPT" || Z === "STYLE" || Z === "LINK" && k.rel.toLowerCase() === "stylesheet" || l.removeChild(k), k = F;
          }
        }
        if (h === 0) {
          t.removeChild(p), Dl(n);
          return;
        }
        h--;
      } else l === "$" || l === "$?" || l === "$!" ? h++ : f = l.charCodeAt(0) - 48;
      else f = 0;
      l = p;
    } while (l);
    Dl(n);
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
  function D_(t, n, l, f) {
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
  function R_(t, n, l) {
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
  function Dv(t) {
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
  function Rv(t, n, l) {
    switch (n = E0(l), t) {
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
  function _0(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Qa = ae.d;
  ae.d = { f: N_, r: M_, D: L_, C: B_, L: U_, m: I_, X: j_, S: H_, M: z_ };
  function N_() {
    var t = Qa.f(), n = h0();
    return t || n;
  }
  function M_(t) {
    var n = Y(t);
    n !== null && n.tag === 5 && n.type === "form" ? Q1(n) : Qa.r(t);
  }
  var us = typeof document > "u" ? null : document;
  function Nv(t, n, l) {
    var f = us;
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
    var f = us;
    if (f && t && n) {
      var h = 'link[rel="preload"][as="' + Wr(n) + '"]';
      n === "image" && l && l.imageSrcSet ? (h += '[imagesrcset="' + Wr(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (h += '[imagesizes="' + Wr(l.imageSizes) + '"]')) : h += '[href="' + Wr(t) + '"]';
      var p = h;
      switch (n) {
        case "style":
          p = os(t);
          break;
        case "script":
          p = hs(t);
      }
      aa.has(p) || (t = v({ rel: "preload", href: n === "image" && l && l.imageSrcSet ? void 0 : t, as: n }, l), aa.set(p, t), f.querySelector(h) !== null || n === "style" && f.querySelector(wl(p)) || n === "script" && f.querySelector(Sl(p)) || (n = f.createElement("link"), cr(n, "link", t), le(n), f.head.appendChild(n)));
    }
  }
  function I_(t, n) {
    Qa.m(t, n);
    var l = us;
    if (l && t) {
      var f = n && typeof n.as == "string" ? n.as : "script", h = 'link[rel="modulepreload"][as="' + Wr(f) + '"][href="' + Wr(t) + '"]', p = h;
      switch (f) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = hs(t);
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
    var f = us;
    if (f && t) {
      var h = me(f).hoistableStyles, p = os(t);
      n = n || "default";
      var k = h.get(p);
      if (!k) {
        var F = { loading: 0, preload: null };
        if (k = f.querySelector(wl(p))) F.loading = 5;
        else {
          t = v({ rel: "stylesheet", href: t, "data-precedence": n }, l), (l = aa.get(p)) && go(t, l);
          var Z = k = f.createElement("link");
          le(Z), cr(Z, "link", t), Z._p = new Promise(function(ue, Ee) {
            Z.onload = ue, Z.onerror = Ee;
          }), Z.addEventListener("load", function() {
            F.loading |= 1;
          }), Z.addEventListener("error", function() {
            F.loading |= 2;
          }), F.loading |= 4, T0(k, n, f);
        }
        k = { type: "stylesheet", instance: k, count: 1, state: F }, h.set(p, k);
      }
    }
  }
  function j_(t, n) {
    Qa.X(t, n);
    var l = us;
    if (l && t) {
      var f = me(l).hoistableScripts, h = hs(t), p = f.get(h);
      p || (p = l.querySelector(Sl(h)), p || (t = v({ src: t, async: true }, n), (n = aa.get(h)) && yo(t, n), p = l.createElement("script"), le(p), cr(p, "link", t), l.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, f.set(h, p));
    }
  }
  function z_(t, n) {
    Qa.M(t, n);
    var l = us;
    if (l && t) {
      var f = me(l).hoistableScripts, h = hs(t), p = f.get(h);
      p || (p = l.querySelector(Sl(h)), p || (t = v({ src: t, async: true, type: "module" }, n), (n = aa.get(h)) && yo(t, n), p = l.createElement("script"), le(p), cr(p, "link", t), l.head.appendChild(p)), p = { type: "script", instance: p, count: 1, state: null }, f.set(h, p));
    }
  }
  function Mv(t, n, l, f) {
    var h = (h = ie.current) ? _0(h) : null;
    if (!h) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (n = os(l.href), l = me(h).hoistableStyles, f = l.get(n), f || (f = { type: "style", instance: null, count: 0, state: null }, l.set(n, f)), f) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = os(l.href);
          var p = me(h).hoistableStyles, k = p.get(t);
          if (k || (h = h.ownerDocument || h, k = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, p.set(t, k), (p = h.querySelector(wl(t))) && !p._p && (k.instance = p, k.state.loading = 5), aa.has(t) || (l = { rel: "preload", as: "style", href: l.href, crossOrigin: l.crossOrigin, integrity: l.integrity, media: l.media, hrefLang: l.hrefLang, referrerPolicy: l.referrerPolicy }, aa.set(t, l), p || P_(h, t, l, k.state))), n && f === null) throw Error(i(528, ""));
          return k;
        }
        if (n && f !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return n = l.async, l = l.src, typeof l == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = hs(l), l = me(h).hoistableScripts, f = l.get(n), f || (f = { type: "script", instance: null, count: 0, state: null }, l.set(n, f)), f) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, t));
    }
  }
  function os(t) {
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
  function hs(t) {
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
        return f = (t.ownerDocument || t).createElement("style"), le(f), cr(f, "style", h), T0(f, l.precedence, t), n.instance = f;
      case "stylesheet":
        h = os(l.href);
        var p = t.querySelector(wl(h));
        if (p) return n.state.loading |= 4, n.instance = p, le(p), p;
        f = Lv(l), (h = aa.get(h)) && go(f, h), p = (t.ownerDocument || t).createElement("link"), le(p);
        var k = p;
        return k._p = new Promise(function(F, Z) {
          k.onload = F, k.onerror = Z;
        }), cr(p, "link", f), n.state.loading |= 4, T0(p, l.precedence, t), n.instance = p;
      case "script":
        return p = hs(l.src), (h = t.querySelector(Sl(p))) ? (n.instance = h, le(h), h) : (f = l, (h = aa.get(p)) && (f = v({}, l), yo(f, h)), t = t.ownerDocument || t, h = t.createElement("script"), le(h), cr(h, "link", f), t.head.appendChild(h), n.instance = h);
      case "void":
        return null;
      default:
        throw Error(i(443, n.type));
    }
    else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (f = n.instance, n.state.loading |= 4, T0(f, l.precedence, t));
    return n.instance;
  }
  function T0(t, n, l) {
    for (var f = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), h = f.length ? f[f.length - 1] : null, p = h, k = 0; k < f.length; k++) {
      var F = f[k];
      if (F.dataset.precedence === n) p = F;
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
  var w0 = null;
  function Uv(t, n, l) {
    if (w0 === null) {
      var f = /* @__PURE__ */ new Map(), h = w0 = /* @__PURE__ */ new Map();
      h.set(l, f);
    } else h = w0, f = h.get(l), f || (f = /* @__PURE__ */ new Map(), h.set(l, f));
    if (f.has(t)) return f;
    for (f.set(t, null), l = l.getElementsByTagName(t), h = 0; h < l.length; h++) {
      var p = l[h];
      if (!(p[L] || p[Jt] || t === "link" && p.getAttribute("rel") === "stylesheet") && p.namespaceURI !== "http://www.w3.org/2000/svg") {
        var k = p.getAttribute(n) || "";
        k = t + k;
        var F = f.get(k);
        F ? F.push(p) : f.set(k, [p]);
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
        var h = os(l.href), p = t.querySelector(wl(h));
        if (p) {
          t = p._p, t !== null && typeof t == "object" && typeof t.then == "function" && (f.count++, f = S0.bind(f), t.then(f, f)), n.state.loading |= 4, n.instance = p, le(p);
          return;
        }
        p = t.ownerDocument || t, l = Lv(l), (h = aa.get(h)) && go(l, h), p = p.createElement("link"), le(p);
        var k = p;
        k._p = new Promise(function(F, Z) {
          k.onload = F, k.onerror = Z;
        }), cr(p, "link", l), n.instance = p;
      }
      f.stylesheets === null && (f.stylesheets = /* @__PURE__ */ new Map()), f.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (f.count++, n = S0.bind(f), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  function $_() {
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
  function S0() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Eo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var A0 = null;
  function Eo(t, n) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, A0 = /* @__PURE__ */ new Map(), n.forEach(Y_, t), A0 = null, S0.call(t));
  }
  function Y_(t, n) {
    if (!(n.state.loading & 4)) {
      var l = A0.get(t);
      if (l) var f = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), A0.set(t, l);
        for (var h = t.querySelectorAll("link[data-precedence],style[data-precedence]"), p = 0; p < h.length; p++) {
          var k = h[p];
          (k.nodeName === "LINK" || k.getAttribute("media") !== "not all") && (l.set(k.dataset.precedence, k), f = k);
        }
        f && l.set(null, f);
      }
      h = n.instance, k = h.getAttribute("data-precedence"), p = l.get(k) || f, p === f && l.set(null, h), l.set(k, h), this.count++, f = S0.bind(this), h.addEventListener("load", f), h.addEventListener("error", f), p ? p.parentNode.insertBefore(h, p.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(h, t.firstChild)), n.state.loading |= 4;
    }
  }
  var kl = { $$typeof: w, Provider: null, Consumer: null, _currentValue: we, _currentValue2: we, _threadCount: 0 };
  function q_(t, n, l, f, h, p, k, F) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ls(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ls(0), this.hiddenUpdates = Ls(null), this.identifierPrefix = f, this.onUncaughtError = h, this.onCaughtError = p, this.onRecoverableError = k, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = F, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jv(t, n, l, f, h, p, k, F, Z, ue, Ee, Se) {
    return t = new q_(t, n, l, k, F, Z, ue, Se), n = 1, p === true && (n |= 24), p = Ir(3, null, null, n), t.current = p, p.stateNode = t, n = eu(), n.refCount++, t.pooledCache = n, n.refCount++, p.memoizedState = { element: f, isDehydrated: l, cache: n }, nu(p), t;
  }
  function zv(t) {
    return t ? (t = Gi, t) : Gi;
  }
  function Pv(t, n, l, f, h, p) {
    h = zv(h), f.context === null ? f.context = h : f.pendingContext = h, f = vn(n), f.payload = { element: l }, p = p === void 0 ? null : p, p !== null && (f.callback = p), l = pn(t, f, n), l !== null && (Gr(l, t, n), rl(l, t, n));
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
      var n = Pi(t, 67108864);
      n !== null && Gr(n, t, 67108864), _o(t, 67108864);
    }
  }
  var k0 = true;
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
    if (k0) {
      var h = wo(f);
      if (h === null) co(t, n, f, C0, l), $v(t, f);
      else if (Q_(h, t, n, l, f)) f.stopPropagation();
      else if ($v(t, f), n & 4 && -1 < Z_.indexOf(t)) {
        for (; h !== null; ) {
          var p = Y(h);
          if (p !== null) switch (p.tag) {
            case 3:
              if (p = p.stateNode, p.current.memoizedState.isDehydrated) {
                var k = wa(p.pendingLanes);
                if (k !== 0) {
                  var F = p;
                  for (F.pendingLanes |= 2, F.entangledLanes |= 2; k; ) {
                    var Z = 1 << 31 - gt(k);
                    F.entanglements[1] |= Z, k &= ~Z;
                  }
                  Oa(p), (pt & 6) === 0 && (u0 = ke() + 500, yl(0));
                }
              }
              break;
            case 13:
              F = Pi(p, 2), F !== null && Gr(F, p, 2), h0(), _o(p, 2);
          }
          if (p = wo(f), p === null && co(t, n, f, C0, l), p === h) break;
          h = p;
        }
        h !== null && f.stopPropagation();
      } else co(t, n, f, null, l);
    }
  }
  function wo(t) {
    return t = Cf(t), So(t);
  }
  var C0 = null;
  function So(t) {
    if (C0 = null, t = P(t), t !== null) {
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
    return C0 = t, null;
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
  var Ao = false, On = null, Dn = null, Rn = null, Cl = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Map(), Fn = [], Z_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function $v(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        Dn = null;
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
        return On = Ol(On, t, n, l, f, h), true;
      case "dragenter":
        return Dn = Ol(Dn, t, n, l, f, h), true;
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
  function Yv(t) {
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
                var h = Pi(l, f);
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
  function b0(t) {
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
    b0(t) && l.delete(n);
  }
  function J_() {
    Ao = false, On !== null && b0(On) && (On = null), Dn !== null && b0(Dn) && (Dn = null), Rn !== null && b0(Rn) && (Rn = null), Cl.forEach(qv), bl.forEach(qv);
  }
  function O0(t, n) {
    t.blockedOn === n && (t.blockedOn = null, Ao || (Ao = true, e.unstable_scheduleCallback(e.unstable_NormalPriority, J_)));
  }
  var D0 = null;
  function Kv(t) {
    D0 !== t && (D0 = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
      D0 === t && (D0 = null);
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
  function Dl(t) {
    function n(Z) {
      return O0(Z, t);
    }
    On !== null && O0(On, t), Dn !== null && O0(Dn, t), Rn !== null && O0(Rn, t), Cl.forEach(n), bl.forEach(n);
    for (var l = 0; l < Fn.length; l++) {
      var f = Fn[l];
      f.blockedOn === t && (f.blockedOn = null);
    }
    for (; 0 < Fn.length && (l = Fn[0], l.blockedOn === null); ) Yv(l), l.blockedOn === null && Fn.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (f = 0; f < l.length; f += 3) {
      var h = l[f], p = l[f + 1], k = h[er] || null;
      if (typeof p == "function") k || Kv(l);
      else if (k) {
        var F = null;
        if (p && p.hasAttribute("formAction")) {
          if (h = p, k = p[er] || null) F = k.formAction;
          else if (So(h) !== null) continue;
        } else F = k.action;
        typeof F == "function" ? l[f + 1] = F : (l.splice(f, 3), f -= 3), Kv(l);
      }
    }
  }
  function ko(t) {
    this._internalRoot = t;
  }
  R0.prototype.render = ko.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null) throw Error(i(409));
    var l = n.current, f = Pr();
    Pv(l, f, t, n, null, null);
  }, R0.prototype.unmount = ko.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      Pv(t.current, 2, null, t, null, null), h0(), n[un] = null;
    }
  };
  function R0(t) {
    this._internalRoot = t;
  }
  R0.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = Sc();
      t = { blockedOn: null, target: t, priority: n };
      for (var l = 0; l < Fn.length && n !== 0 && n < Fn[l].priority; l++) ;
      Fn.splice(l, 0, t), l === 0 && Yv(t);
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
    var F0 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!F0.isDisabled && F0.supportsFiber) try {
      st = F0.inject(eT), tt = F0;
    } catch {
    }
  }
  return Fl.createRoot = function(t, n) {
    if (!s(t)) throw Error(i(299));
    var l = false, f = "", h = hx, p = dx, k = xx, F = null;
    return n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (f = n.identifierPrefix), n.onUncaughtError !== void 0 && (h = n.onUncaughtError), n.onCaughtError !== void 0 && (p = n.onCaughtError), n.onRecoverableError !== void 0 && (k = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (F = n.unstable_transitionCallbacks)), n = jv(t, 1, false, null, null, l, f, h, p, k, F, null), t[un] = n.current, lo(t), new ko(n);
  }, Fl.hydrateRoot = function(t, n, l) {
    if (!s(t)) throw Error(i(299));
    var f = false, h = "", p = hx, k = dx, F = xx, Z = null, ue = null;
    return l != null && (l.unstable_strictMode === true && (f = true), l.identifierPrefix !== void 0 && (h = l.identifierPrefix), l.onUncaughtError !== void 0 && (p = l.onUncaughtError), l.onCaughtError !== void 0 && (k = l.onCaughtError), l.onRecoverableError !== void 0 && (F = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (Z = l.unstable_transitionCallbacks), l.formState !== void 0 && (ue = l.formState)), n = jv(t, 1, true, n, l ?? null, f, h, p, k, F, Z, ue), n.context = zv(null), l = n.current, f = Pr(), f = Bs(f), h = vn(f), h.callback = null, pn(l, h, f), l = f, n.current.lanes = l, Yn(n, l), Oa(n), t[un] = n.current, lo(t), new R0(n);
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
function $m(e, a) {
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
function Ym(e, a, r) {
  var i = ee.useRef(e !== void 0), s = ee.useState(a), c = s[0], u = s[1], o = e !== void 0, x = i.current;
  return i.current = o, !o && x && c !== a && u(a), [o ? e : c, ee.useCallback(function(d) {
    for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), g = 1; g < v; g++) m[g - 1] = arguments[g];
    r && r.apply(void 0, [d].concat(m)), u(d);
  }, [r])];
}
function qm(e, a) {
  return Object.keys(a).reduce(function(r, i) {
    var s, c = r, u = c[cp(i)], o = c[i], x = $m(c, [cp(i), i].map(dT)), d = a[i], v = Ym(o, u, e[d]), m = v[0], g = v[1];
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
const pT = ["xxl", "xl", "lg", "md", "sm", "xs"], mT = "xs", fc = ee.createContext({ prefixes: {}, breakpoints: pT, minBreakpoint: mT }), { Consumer: KD, Provider: WD } = fc;
function qe(e, a) {
  const { prefixes: r } = ee.useContext(fc);
  return e || r[a] || a;
}
function Km() {
  const { breakpoints: e } = ee.useContext(fc);
  return e;
}
function Wm() {
  const { minBreakpoint: e } = ee.useContext(fc);
  return e;
}
function Ah() {
  const { dir: e } = ee.useContext(fc);
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
function M0(e) {
  return _T(e).replace(TT, "-ms-");
}
var wT = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ST(e) {
  return !!(e && wT.test(e));
}
function Zm(e, a) {
  var r = "", i = "";
  if (typeof a == "string") return e.style.getPropertyValue(M0(a)) || yT(e).getPropertyValue(M0(a));
  Object.keys(a).forEach(function(s) {
    var c = a[s];
    !c && c !== 0 ? e.style.removeProperty(M0(s)) : ST(s) ? i += s + "(" + c + ") " : r += M0(s) + ": " + c + ";";
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
var DT = function(a) {
  return a.scrollTop;
}, Ml = "unmounted", di = "exited", Ln = "entering", xi = "entered", rh = "exiting", cn = function(e) {
  vT(a, e);
  function a(i, s) {
    var c;
    c = e.call(this, i, s) || this;
    var u = s, o = u && !u.isMounting ? i.enter : i.appear, x;
    return c.appearStatus = null, i.in ? o ? (x = di, c.appearStatus = Ln) : x = xi : i.unmountOnExit || i.mountOnEnter ? x = Ml : x = di, c.state = { status: x }, c.nextCallback = null, c;
  }
  a.getDerivedStateFromProps = function(s, c) {
    var u = s.in;
    return u && c.status === Ml ? { status: di } : null;
  };
  var r = a.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, r.componentDidUpdate = function(s) {
    var c = null;
    if (s !== this.props) {
      var u = this.state.status;
      this.props.in ? u !== Ln && u !== xi && (c = Ln) : (u === Ln || u === xi) && (c = rh);
    }
    this.updateStatus(false, c);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var s = this.props.timeout, c, u, o;
    return c = u = o = s, s != null && typeof s != "number" && (c = s.exit, u = s.enter, o = s.appear !== void 0 ? s.appear : u), { exit: c, enter: u, appear: o };
  }, r.updateStatus = function(s, c) {
    if (s === void 0 && (s = false), c !== null) if (this.cancelNextCallback(), c === Ln) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var u = this.props.nodeRef ? this.props.nodeRef.current : ps.findDOMNode(this);
        u && DT(u);
      }
      this.performEnter(s);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === di && this.setState({ status: Ml });
  }, r.performEnter = function(s) {
    var c = this, u = this.props.enter, o = this.context ? this.context.isMounting : s, x = this.props.nodeRef ? [o] : [ps.findDOMNode(this), o], d = x[0], v = x[1], m = this.getTimeouts(), g = o ? m.appear : m.enter;
    if (!s && !u || hp.disabled) {
      this.safeSetState({ status: xi }, function() {
        c.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, v), this.safeSetState({ status: Ln }, function() {
      c.props.onEntering(d, v), c.onTransitionEnd(g, function() {
        c.safeSetState({ status: xi }, function() {
          c.props.onEntered(d, v);
        });
      });
    });
  }, r.performExit = function() {
    var s = this, c = this.props.exit, u = this.getTimeouts(), o = this.props.nodeRef ? void 0 : ps.findDOMNode(this);
    if (!c || hp.disabled) {
      this.safeSetState({ status: di }, function() {
        s.props.onExited(o);
      });
      return;
    }
    this.props.onExit(o), this.safeSetState({ status: rh }, function() {
      s.props.onExiting(o), s.onTransitionEnd(u.exit, function() {
        s.safeSetState({ status: di }, function() {
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
    var o = $m(c, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return Mr.createElement(Qm.Provider, { value: null }, typeof u == "function" ? u(s, o) : Mr.cloneElement(Mr.Children.only(u), o));
  }, a;
}(Mr.Component);
cn.contextType = Qm;
cn.propTypes = {};
function ds() {
}
cn.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: ds, onEntering: ds, onEntered: ds, onExit: ds, onExiting: ds, onExited: ds };
cn.UNMOUNTED = Ml;
cn.EXITED = di;
cn.ENTERING = Ln;
cn.ENTERED = xi;
cn.EXITING = rh;
function RT(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function FT() {
  const e = ee.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
function uc(e) {
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
function pi(e, a, r, i) {
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
  }, a + r), c = pi(e, "transitionend", function() {
    i = true;
  }, { once: true });
  return function() {
    clearTimeout(s), c();
  };
}
function UT(e, a, r, i) {
  r == null && (r = LT(e) || 0);
  var s = BT(e, r, i), c = pi(e, "transitionend", a);
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
function oc(e, a) {
  return ee.useMemo(() => jT(e, a), [e, a]);
}
function K0(e) {
  return e && "setState" in e ? ps.findDOMNode(e) : e ?? null;
}
const zT = Mr.forwardRef(({ onEnter: e, onEntering: a, onEntered: r, onExit: i, onExiting: s, onExited: c, addEndListener: u, children: o, childRef: x, ...d }, v) => {
  const m = ee.useRef(null), g = oc(m, x), E = (j) => {
    g(K0(j));
  }, T = (j) => (C) => {
    j && m.current && j(m.current, C);
  }, y = ee.useCallback(T(e), [e]), _ = ee.useCallback(T(a), [a]), D = ee.useCallback(T(r), [r]), b = ee.useCallback(T(i), [i]), w = ee.useCallback(T(s), [s]), M = ee.useCallback(T(c), [c]), V = ee.useCallback(T(u), [u]);
  return K.jsx(cn, { ref: v, ...d, onEnter: y, onEntered: D, onEntering: _, onExit: b, onExited: M, onExiting: w, addEndListener: V, nodeRef: m, children: typeof o == "function" ? (j, C) => o(j, { ...C, ref: E }) : Mr.cloneElement(o, { ref: E }) });
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
const bh = (e) => ee.forwardRef((a, r) => K.jsx("div", { ...a, ref: r, className: Ve(a.className, e) })), eg = bh("h4");
eg.displayName = "DivStyledAsH4";
const tg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = eg, ...i }, s) => (a = qe(a, "alert-heading"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
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
function $T(e) {
  const a = ee.useRef(null);
  return ee.useEffect(() => {
    a.current = e;
  }), a.current;
}
const YT = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative", qT = typeof document < "u", vp = qT || YT ? ee.useLayoutEffect : ee.useEffect, KT = ["as", "disabled"];
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
  return K.jsx(u, Object.assign({}, s, c, { ref: a }));
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
const Dh = ee.forwardRef((e, a) => {
  let { onKeyDown: r } = e, i = JT(e, QT);
  const [s] = Oh(Object.assign({ tagName: "a" }, i)), c = _a((u) => {
    s.onKeyDown(u), r == null ? void 0 : r(u);
  });
  return e4(i.href) || i.role === "button" ? K.jsx("a", Object.assign({ ref: a }, i, s, { onKeyDown: c })) : K.jsx("a", Object.assign({ ref: a }, i, { onKeyDown: r }));
});
Dh.displayName = "Anchor";
const ag = ee.forwardRef(({ className: e, bsPrefix: a, as: r = Dh, ...i }, s) => (a = qe(a, "alert-link"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
ag.displayName = "AlertLink";
const t4 = { [Ln]: "show", [xi]: "show" }, Ql = ee.forwardRef(({ className: e, children: a, transitionClasses: r = {}, onEnter: i, ...s }, c) => {
  const u = { in: false, timeout: 300, mountOnEnter: false, unmountOnExit: false, appear: false, ...s }, o = ee.useCallback((x, d) => {
    HT(x), i == null ? void 0 : i(x, d);
  }, [i]);
  return K.jsx(zT, { ref: c, addEndListener: IT, ...u, onEnter: o, childRef: uc(a), children: (x, d) => ee.cloneElement(a, { ...d, className: Ve("fade", e, a.props.className, t4[x], r[x]) }) });
});
Ql.displayName = "Fade";
const r4 = { "aria-label": Fa.string, onClick: Fa.func, variant: Fa.oneOf(["white"]) }, Rh = ee.forwardRef(({ className: e, variant: a, "aria-label": r = "Close", ...i }, s) => K.jsx("button", { ref: s, type: "button", className: Ve("btn-close", a && `btn-close-${a}`, e), "aria-label": r, ...i }));
Rh.displayName = "CloseButton";
Rh.propTypes = r4;
const ng = ee.forwardRef((e, a) => {
  const { bsPrefix: r, show: i = true, closeLabel: s = "Close alert", closeVariant: c, className: u, children: o, variant: x = "primary", onClose: d, dismissible: v, transition: m = Ql, ...g } = qm(e, { show: "onClose" }), E = qe(r, "alert"), T = Ch((D) => {
    d && d(false, D);
  }), y = m === true ? Ql : m, _ = K.jsxs("div", { role: "alert", ...y ? void 0 : g, ref: a, className: Ve(u, E, x && `${E}-${x}`, v && `${E}-dismissible`), children: [v && K.jsx(Rh, { onClick: T, "aria-label": s, variant: c }), o] });
  return y ? K.jsx(y, { unmountOnExit: true, ...g, ref: void 0, in: i, children: _ }) : i ? _ : null;
});
ng.displayName = "Alert";
const a4 = Object.assign(ng, { Link: ag, Heading: tg }), Un = ee.forwardRef(({ as: e, bsPrefix: a, variant: r = "primary", size: i, active: s = false, disabled: c = false, className: u, ...o }, x) => {
  const d = qe(a, "btn"), [v, { tagName: m }] = Oh({ tagName: e, disabled: c, ...o }), g = m;
  return K.jsx(g, { ...v, ...o, ref: x, disabled: c, className: Ve(u, d, s && "active", r && `${d}-${r}`, i && `${d}-${i}`, o.href && c && "disabled") });
});
Un.displayName = "Button";
const ig = ee.forwardRef(({ bsPrefix: e, size: a, vertical: r = false, className: i, role: s = "group", as: c = "div", ...u }, o) => {
  const x = qe(e, "btn-group");
  let d = x;
  return r && (d = `${x}-vertical`), K.jsx(c, { ...u, ref: o, role: s, className: Ve(i, d, a && `${x}-${a}`) });
});
ig.displayName = "ButtonGroup";
const Fh = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "card-body"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
Fh.displayName = "CardBody";
const sg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "card-footer"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
sg.displayName = "CardFooter";
const lg = ee.createContext(null);
lg.displayName = "CardHeaderContext";
const cg = ee.forwardRef(({ bsPrefix: e, className: a, as: r = "div", ...i }, s) => {
  const c = qe(e, "card-header"), u = ee.useMemo(() => ({ cardHeaderBsPrefix: c }), [c]);
  return K.jsx(lg.Provider, { value: u, children: K.jsx(r, { ref: s, ...i, className: Ve(a, c) }) });
});
cg.displayName = "CardHeader";
const fg = ee.forwardRef(({ bsPrefix: e, className: a, variant: r, as: i = "img", ...s }, c) => {
  const u = qe(e, "card-img");
  return K.jsx(i, { ref: c, className: Ve(r ? `${u}-${r}` : u, a), ...s });
});
fg.displayName = "CardImg";
const ug = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "card-img-overlay"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
ug.displayName = "CardImgOverlay";
const og = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "a", ...i }, s) => (a = qe(a, "card-link"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
og.displayName = "CardLink";
const n4 = bh("h6"), hg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = n4, ...i }, s) => (a = qe(a, "card-subtitle"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
hg.displayName = "CardSubtitle";
const dg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "p", ...i }, s) => (a = qe(a, "card-text"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
dg.displayName = "CardText";
const i4 = bh("h5"), xg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = i4, ...i }, s) => (a = qe(a, "card-title"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
xg.displayName = "CardTitle";
const vg = ee.forwardRef(({ bsPrefix: e, className: a, bg: r, text: i, border: s, body: c = false, children: u, as: o = "div", ...x }, d) => {
  const v = qe(e, "card");
  return K.jsx(o, { ref: d, ...x, className: Ve(a, v, r && `bg-${r}`, i && `text-${i}`, s && `border-${s}`), children: c ? K.jsx(Fh, { children: u }) : u });
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
    const E = x !== c ? `-${x}` : "";
    v && u.push(v === true ? `${a}${E}` : `${a}${E}-${v}`), g != null && o.push(`order${E}-${g}`), m != null && o.push(`offset${E}-${m}`);
  }), [{ ...i, className: Ve(r, ...u, ...o) }, { as: e, bsPrefix: a, spans: u }];
}
const en = ee.forwardRef((e, a) => {
  const [{ className: r, ...i }, { as: s = "div", bsPrefix: c, spans: u }] = o4(e);
  return K.jsx(s, { ...i, ref: a, className: Ve(r, !u.length && c) });
});
en.displayName = "Col";
const mg = ee.forwardRef(({ bsPrefix: e, fluid: a = false, as: r = "div", className: i, ...s }, c) => {
  const u = qe(e, "container"), o = typeof a == "string" ? `-${a}` : "-fluid";
  return K.jsx(r, { ref: c, ...s, className: Ve(i, a ? `${u}${o}` : u) });
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
  for (r of e.keys()) if (jl(r, a)) return r;
}
function jl(e, a) {
  var r, i, s;
  if (e === a) return true;
  if (e && a && (r = e.constructor) === a.constructor) {
    if (r === Date) return e.getTime() === a.getTime();
    if (r === RegExp) return e.toString() === a.toString();
    if (r === Array) {
      if ((i = e.length) === a.length) for (; i-- && jl(e[i], a[i]); ) ;
      return i === -1;
    }
    if (r === Set) {
      if (e.size !== a.size) return false;
      for (i of e) if (s = i, s && typeof s == "object" && (s = gp(a, s), !s) || !a.has(s)) return false;
      return true;
    }
    if (r === Map) {
      if (e.size !== a.size) return false;
      for (i of e) if (s = i[0], s && typeof s == "object" && (s = gp(a, s), !s) || !jl(i[1], a.get(s))) return false;
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
      for (r in e) if (mp.call(e, r) && ++i && !mp.call(a, r) || !(r in a) || !jl(e[r], a[r])) return false;
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
var Lr = "top", la = "bottom", ca = "right", Br = "left", Nh = "auto", hc = [Lr, la, ca, Br], _s = "start", Jl = "end", p4 = "clippingParents", gg = "viewport", Nl = "popper", m4 = "reference", yp = hc.reduce(function(e, a) {
  return e.concat([a + "-" + _s, a + "-" + Jl]);
}, []), yg = [].concat(hc, [Nh]).reduce(function(e, a) {
  return e.concat([a, a + "-" + _s, a + "-" + Jl]);
}, []), g4 = "beforeRead", y4 = "read", E4 = "afterRead", _4 = "beforeMain", T4 = "main", w4 = "afterMain", S4 = "beforeWrite", A4 = "write", k4 = "afterWrite", C4 = [g4, y4, E4, _4, T4, w4, S4, A4, k4];
function Na(e) {
  return e.split("-")[0];
}
function $r(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var a = e.ownerDocument;
    return a && a.defaultView || window;
  }
  return e;
}
function Ti(e) {
  var a = $r(e).Element;
  return e instanceof a || e instanceof Element;
}
function Ma(e) {
  var a = $r(e).HTMLElement;
  return e instanceof a || e instanceof HTMLElement;
}
function Mh(e) {
  if (typeof ShadowRoot > "u") return false;
  var a = $r(e).ShadowRoot;
  return e instanceof a || e instanceof ShadowRoot;
}
var yi = Math.max, W0 = Math.min, Ts = Math.round;
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
  var u = Ti(e) ? $r(e) : window, o = u.visualViewport, x = !Eg() && r, d = (i.left + (x && o ? o.offsetLeft : 0)) / s, v = (i.top + (x && o ? o.offsetTop : 0)) / c, m = i.width / s, g = i.height / c;
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
function nn(e) {
  return $r(e).getComputedStyle(e);
}
function b4(e) {
  return ["table", "td", "th"].indexOf(zn(e)) >= 0;
}
function Vn(e) {
  return ((Ti(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function xf(e) {
  return zn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Mh(e) ? e.host : null) || Vn(e);
}
function Ep(e) {
  return !Ma(e) || nn(e).position === "fixed" ? null : e.offsetParent;
}
function O4(e) {
  var a = /firefox/i.test(lh()), r = /Trident/i.test(lh());
  if (r && Ma(e)) {
    var i = nn(e);
    if (i.position === "fixed") return null;
  }
  var s = xf(e);
  for (Mh(s) && (s = s.host); Ma(s) && ["html", "body"].indexOf(zn(s)) < 0; ) {
    var c = nn(s);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || a && c.willChange === "filter" || a && c.filter && c.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function dc(e) {
  for (var a = $r(e), r = Ep(e); r && b4(r) && nn(r).position === "static"; ) r = Ep(r);
  return r && (zn(r) === "html" || zn(r) === "body" && nn(r).position === "static") ? a : r || O4(e) || a;
}
function Bh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function zl(e, a, r) {
  return yi(e, W0(a, r));
}
function D4(e, a, r) {
  var i = zl(e, a, r);
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
var R4 = function(a, r) {
  return a = typeof a == "function" ? a(Object.assign({}, r.rects, { placement: r.placement })) : a, wg(typeof a != "number" ? a : Sg(a, hc));
};
function F4(e) {
  var a, r = e.state, i = e.name, s = e.options, c = r.elements.arrow, u = r.modifiersData.popperOffsets, o = Na(r.placement), x = Bh(o), d = [Br, ca].indexOf(o) >= 0, v = d ? "height" : "width";
  if (!(!c || !u)) {
    var m = R4(s.padding, r), g = Lh(c), E = x === "y" ? Lr : Br, T = x === "y" ? la : ca, y = r.rects.reference[v] + r.rects.reference[x] - u[x] - r.rects.popper[v], _ = u[x] - r.rects.reference[x], D = dc(c), b = D ? x === "y" ? D.clientHeight || 0 : D.clientWidth || 0 : 0, w = y / 2 - _ / 2, M = m[E], V = b - g[v] - m[T], j = b / 2 - g[v] / 2 + w, C = zl(M, j, V), A = x;
    r.modifiersData[i] = (a = {}, a[A] = C, a.centerOffset = C - j, a);
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
  var a, r = e.popper, i = e.popperRect, s = e.placement, c = e.variation, u = e.offsets, o = e.position, x = e.gpuAcceleration, d = e.adaptive, v = e.roundOffsets, m = e.isFixed, g = u.x, E = g === void 0 ? 0 : g, T = u.y, y = T === void 0 ? 0 : T, _ = typeof v == "function" ? v({ x: E, y }) : { x: E, y };
  E = _.x, y = _.y;
  var D = u.hasOwnProperty("x"), b = u.hasOwnProperty("y"), w = Br, M = Lr, V = window;
  if (d) {
    var j = dc(r), C = "clientHeight", A = "clientWidth";
    if (j === $r(r) && (j = Vn(r), nn(j).position !== "static" && o === "absolute" && (C = "scrollHeight", A = "scrollWidth")), j = j, s === Lr || (s === Br || s === ca) && c === Jl) {
      M = la;
      var S = m && j === V && V.visualViewport ? V.visualViewport.height : j[C];
      y -= S - i.height, y *= x ? 1 : -1;
    }
    if (s === Br || (s === Lr || s === la) && c === Jl) {
      w = ca;
      var N = m && j === V && V.visualViewport ? V.visualViewport.width : j[A];
      E -= N - i.width, E *= x ? 1 : -1;
    }
  }
  var B = Object.assign({ position: o }, d && L4), U = v === true ? B4({ x: E, y }, $r(r)) : { x: E, y };
  if (E = U.x, y = U.y, x) {
    var ne;
    return Object.assign({}, B, (ne = {}, ne[M] = b ? "0" : "", ne[w] = D ? "0" : "", ne.transform = (V.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + y + "px)" : "translate3d(" + E + "px, " + y + "px, 0)", ne));
  }
  return Object.assign({}, B, (a = {}, a[M] = b ? y + "px" : "", a[w] = D ? E + "px" : "", a.transform = "", a));
}
function U4(e) {
  var a = e.state, r = e.options, i = r.gpuAcceleration, s = i === void 0 ? true : i, c = r.adaptive, u = c === void 0 ? true : c, o = r.roundOffsets, x = o === void 0 ? true : o, d = { placement: Na(a.placement), variation: Ss(a.placement), popper: a.elements.popper, popperRect: a.rects.popper, gpuAcceleration: s, isFixed: a.options.strategy === "fixed" };
  a.modifiersData.popperOffsets != null && (a.styles.popper = Object.assign({}, a.styles.popper, _p(Object.assign({}, d, { offsets: a.modifiersData.popperOffsets, position: a.options.strategy, adaptive: u, roundOffsets: x })))), a.modifiersData.arrow != null && (a.styles.arrow = Object.assign({}, a.styles.arrow, _p(Object.assign({}, d, { offsets: a.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: x })))), a.attributes.popper = Object.assign({}, a.attributes.popper, { "data-popper-placement": a.placement });
}
const I4 = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: U4, data: {} };
var L0 = { passive: true };
function H4(e) {
  var a = e.state, r = e.instance, i = e.options, s = i.scroll, c = s === void 0 ? true : s, u = i.resize, o = u === void 0 ? true : u, x = $r(a.elements.popper), d = [].concat(a.scrollParents.reference, a.scrollParents.popper);
  return c && d.forEach(function(v) {
    v.addEventListener("scroll", r.update, L0);
  }), o && x.addEventListener("resize", r.update, L0), function() {
    c && d.forEach(function(v) {
      v.removeEventListener("scroll", r.update, L0);
    }), o && x.removeEventListener("resize", r.update, L0);
  };
}
const j4 = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: H4, data: {} };
var z4 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function X0(e) {
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
  var a = $r(e), r = a.pageXOffset, i = a.pageYOffset;
  return { scrollLeft: r, scrollTop: i };
}
function Ih(e) {
  return ws(Vn(e)).left + Uh(e).scrollLeft;
}
function G4(e, a) {
  var r = $r(e), i = Vn(e), s = r.visualViewport, c = i.clientWidth, u = i.clientHeight, o = 0, x = 0;
  if (s) {
    c = s.width, u = s.height;
    var d = Eg();
    (d || !d && a === "fixed") && (o = s.offsetLeft, x = s.offsetTop);
  }
  return { width: c, height: u, x: o + Ih(e), y: x };
}
function V4(e) {
  var a, r = Vn(e), i = Uh(e), s = (a = e.ownerDocument) == null ? void 0 : a.body, c = yi(r.scrollWidth, r.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), u = yi(r.scrollHeight, r.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), o = -i.scrollLeft + Ih(e), x = -i.scrollTop;
  return nn(s || r).direction === "rtl" && (o += yi(r.clientWidth, s ? s.clientWidth : 0) - c), { width: c, height: u, x: o, y: x };
}
function Hh(e) {
  var a = nn(e), r = a.overflow, i = a.overflowX, s = a.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + s + i);
}
function Ag(e) {
  return ["html", "body", "#document"].indexOf(zn(e)) >= 0 ? e.ownerDocument.body : Ma(e) && Hh(e) ? e : Ag(xf(e));
}
function Pl(e, a) {
  var r;
  a === void 0 && (a = []);
  var i = Ag(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), c = $r(i), u = s ? [c].concat(c.visualViewport || [], Hh(i) ? i : []) : i, o = a.concat(u);
  return s ? o : o.concat(Pl(xf(u)));
}
function ch(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function X4(e, a) {
  var r = ws(e, false, a === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function wp(e, a, r) {
  return a === gg ? ch(G4(e, r)) : Ti(a) ? X4(a, r) : ch(V4(Vn(e)));
}
function $4(e) {
  var a = Pl(xf(e)), r = ["absolute", "fixed"].indexOf(nn(e).position) >= 0, i = r && Ma(e) ? dc(e) : e;
  return Ti(i) ? a.filter(function(s) {
    return Ti(s) && _g(s, i) && zn(s) !== "body";
  }) : [];
}
function Y4(e, a, r, i) {
  var s = a === "clippingParents" ? $4(e) : [].concat(a), c = [].concat(s, [r]), u = c[0], o = c.reduce(function(x, d) {
    var v = wp(e, d, i);
    return x.top = yi(v.top, x.top), x.right = W0(v.right, x.right), x.bottom = W0(v.bottom, x.bottom), x.left = yi(v.left, x.left), x;
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
      case Jl:
        x[d] = x[d] + (a[v] / 2 - r[v] / 2);
        break;
    }
  }
  return x;
}
function ec(e, a) {
  a === void 0 && (a = {});
  var r = a, i = r.placement, s = i === void 0 ? e.placement : i, c = r.strategy, u = c === void 0 ? e.strategy : c, o = r.boundary, x = o === void 0 ? p4 : o, d = r.rootBoundary, v = d === void 0 ? gg : d, m = r.elementContext, g = m === void 0 ? Nl : m, E = r.altBoundary, T = E === void 0 ? false : E, y = r.padding, _ = y === void 0 ? 0 : y, D = wg(typeof _ != "number" ? _ : Sg(_, hc)), b = g === Nl ? m4 : Nl, w = e.rects.popper, M = e.elements[T ? b : g], V = Y4(Ti(M) ? M : M.contextElement || Vn(e.elements.popper), x, v, u), j = ws(e.elements.reference), C = kg({ reference: j, element: w, placement: s }), A = ch(Object.assign({}, w, C)), S = g === Nl ? A : j, N = { top: V.top - S.top + D.top, bottom: S.bottom - V.bottom + D.bottom, left: V.left - S.left + D.left, right: S.right - V.right + D.right }, B = e.modifiersData.offset;
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
  }) : hc, g = m.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  g.length === 0 && (g = m);
  var E = g.reduce(function(T, y) {
    return T[y] = ec(e, { placement: y, boundary: s, rootBoundary: c, padding: u })[Na(y)], T;
  }, {});
  return Object.keys(E).sort(function(T, y) {
    return E[T] - E[y];
  });
}
function K4(e) {
  if (Na(e) === Nh) return [];
  var a = X0(e);
  return [Tp(e), a, Tp(a)];
}
function W4(e) {
  var a = e.state, r = e.options, i = e.name;
  if (!a.modifiersData[i]._skip) {
    for (var s = r.mainAxis, c = s === void 0 ? true : s, u = r.altAxis, o = u === void 0 ? true : u, x = r.fallbackPlacements, d = r.padding, v = r.boundary, m = r.rootBoundary, g = r.altBoundary, E = r.flipVariations, T = E === void 0 ? true : E, y = r.allowedAutoPlacements, _ = a.options.placement, D = Na(_), b = D === _, w = x || (b || !T ? [X0(_)] : K4(_)), M = [_].concat(w).reduce(function(q, W) {
      return q.concat(Na(W) === Nh ? q4(a, { placement: W, boundary: v, rootBoundary: m, padding: d, flipVariations: T, allowedAutoPlacements: y }) : W);
    }, []), V = a.rects.reference, j = a.rects.popper, C = /* @__PURE__ */ new Map(), A = true, S = M[0], N = 0; N < M.length; N++) {
      var B = M[N], U = Na(B), ne = Ss(B) === _s, ge = [Lr, la].indexOf(U) >= 0, fe = ge ? "width" : "height", J = ec(a, { placement: B, boundary: v, rootBoundary: m, altBoundary: g, padding: d }), ae = ge ? ne ? ca : Br : ne ? la : Lr;
      V[fe] > j[fe] && (ae = X0(ae));
      var we = X0(ae), Q = [];
      if (c && Q.push(J[U] <= 0), o && Q.push(J[ae] <= 0, J[we] <= 0), Q.every(function(q) {
        return q;
      })) {
        S = B, A = false;
        break;
      }
      C.set(B, Q);
    }
    if (A) for (var H = T ? 3 : 1, re = function(W) {
      var ie = M.find(function(Ae) {
        var pe = C.get(Ae);
        if (pe) return pe.slice(0, W).every(function(ye) {
          return ye;
        });
      });
      if (ie) return S = ie, "break";
    }, R = H; R > 0; R--) {
      var z = re(R);
      if (z === "break") break;
    }
    a.placement !== S && (a.modifiersData[i]._skip = true, a.placement = S, a.reset = true);
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
  var a = e.state, r = e.name, i = a.rects.reference, s = a.rects.popper, c = a.modifiersData.preventOverflow, u = ec(a, { elementContext: "reference" }), o = ec(a, { altBoundary: true }), x = Sp(u, i), d = Sp(o, s, c), v = Ap(x), m = Ap(d);
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
  var a = e.state, r = e.options, i = e.name, s = r.mainAxis, c = s === void 0 ? true : s, u = r.altAxis, o = u === void 0 ? false : u, x = r.boundary, d = r.rootBoundary, v = r.altBoundary, m = r.padding, g = r.tether, E = g === void 0 ? true : g, T = r.tetherOffset, y = T === void 0 ? 0 : T, _ = ec(a, { boundary: x, rootBoundary: d, padding: m, altBoundary: v }), D = Na(a.placement), b = Ss(a.placement), w = !b, M = Bh(D), V = iw(M), j = a.modifiersData.popperOffsets, C = a.rects.reference, A = a.rects.popper, S = typeof y == "function" ? y(Object.assign({}, a.rects, { placement: a.placement })) : y, N = typeof S == "number" ? { mainAxis: S, altAxis: S } : Object.assign({ mainAxis: 0, altAxis: 0 }, S), B = a.modifiersData.offset ? a.modifiersData.offset[a.placement] : null, U = { x: 0, y: 0 };
  if (j) {
    if (c) {
      var ne, ge = M === "y" ? Lr : Br, fe = M === "y" ? la : ca, J = M === "y" ? "height" : "width", ae = j[M], we = ae + _[ge], Q = ae - _[fe], H = E ? -A[J] / 2 : 0, re = b === _s ? C[J] : A[J], R = b === _s ? -A[J] : -C[J], z = a.elements.arrow, q = E && z ? Lh(z) : { width: 0, height: 0 }, W = a.modifiersData["arrow#persistent"] ? a.modifiersData["arrow#persistent"].padding : Tg(), ie = W[ge], Ae = W[fe], pe = zl(0, C[J], q[J]), ye = w ? C[J] / 2 - H - pe - ie - N.mainAxis : re - pe - ie - N.mainAxis, _e = w ? -C[J] / 2 + H + pe + Ae + N.mainAxis : R + pe + Ae + N.mainAxis, De = a.elements.arrow && dc(a.elements.arrow), X = De ? M === "y" ? De.clientTop || 0 : De.clientLeft || 0 : 0, Ge = (ne = B == null ? void 0 : B[M]) != null ? ne : 0, Le = ae + ye - Ge - X, Be = ae + _e - Ge, Re = zl(E ? W0(we, Le) : we, ae, E ? yi(Q, Be) : Q);
      j[M] = Re, U[M] = Re - ae;
    }
    if (o) {
      var ke, Ie = M === "x" ? Lr : Br, Ke = M === "x" ? la : ca, Ze = j[V], At = V === "y" ? "height" : "width", It = Ze + _[Ie], Pt = Ze - _[Ke], it = [Lr, Br].indexOf(D) !== -1, Ot = (ke = B == null ? void 0 : B[V]) != null ? ke : 0, st = it ? It : Ze - C[At] - A[At] - Ot + N.altAxis, tt = it ? Ze + C[At] + A[At] - Ot - N.altAxis : Pt, rt = E && it ? D4(st, Ze, tt) : zl(E ? st : It, Ze, E ? tt : Pt);
      j[V] = rt, U[V] = rt - Ze;
    }
    a.modifiersData[i] = U;
  }
}
const lw = { name: "preventOverflow", enabled: true, phase: "main", fn: sw, requiresIfExists: ["offset"] };
function cw(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function fw(e) {
  return e === $r(e) || !Ma(e) ? Uh(e) : cw(e);
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
    var v = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, kp, c), modifiersData: {}, elements: { reference: o, popper: x }, attributes: {}, styles: {} }, m = [], g = false, E = { state: v, setOptions: function(D) {
      var b = typeof D == "function" ? D(v.options) : D;
      y(), v.options = Object.assign({}, c, v.options, b), v.scrollParents = { reference: Ti(o) ? Pl(o) : o.contextElement ? Pl(o.contextElement) : [], popper: Pl(x) };
      var w = dw(vw([].concat(i, v.options.modifiers)));
      return v.orderedModifiers = w.filter(function(M) {
        return M.enabled;
      }), T(), E.update();
    }, forceUpdate: function() {
      if (!g) {
        var D = v.elements, b = D.reference, w = D.popper;
        if (Cp(b, w)) {
          v.rects = { reference: ow(b, dc(w), v.options.strategy === "fixed"), popper: Lh(w) }, v.reset = false, v.placement = v.options.placement, v.orderedModifiers.forEach(function(N) {
            return v.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var M = 0; M < v.orderedModifiers.length; M++) {
            if (v.reset === true) {
              v.reset = false, M = -1;
              continue;
            }
            var V = v.orderedModifiers[M], j = V.fn, C = V.options, A = C === void 0 ? {} : C, S = V.name;
            typeof j == "function" && (v = j({ state: v, options: A, name: S, instance: E }) || v);
          }
        }
      }
    }, update: xw(function() {
      return new Promise(function(_) {
        E.forceUpdate(), _(v);
      });
    }), destroy: function() {
      y(), g = true;
    } };
    if (!Cp(o, x)) return E;
    E.setOptions(d).then(function(_) {
      !g && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function T() {
      v.orderedModifiers.forEach(function(_) {
        var D = _.name, b = _.options, w = b === void 0 ? {} : b, M = _.effect;
        if (typeof M == "function") {
          var V = M({ state: v, name: D, instance: E, options: w }), j = function() {
          };
          m.push(V || j);
        }
      });
    }
    function y() {
      m.forEach(function(_) {
        return _();
      }), m = [];
    }
    return E;
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
  }, []), [g, E] = v4(ee.useState({ placement: s, update: v, forceUpdate: m, attributes: {}, styles: { popper: {}, arrow: {} } })), T = ee.useMemo(() => ({ name: "updateStateModifier", enabled: true, phase: "write", requires: ["computeStyles"], fn: ({ state: _ }) => {
    const D = {}, b = {};
    Object.keys(_.elements).forEach((w) => {
      D[w] = _.styles[w], b[w] = _.attributes[w];
    }), E({ state: _, styles: D, attributes: b, update: v, forceUpdate: m, placement: _.placement });
  } }), [v, m, E]), y = ee.useMemo(() => (jl(x.current, u) || (x.current = u), x.current), [u]);
  return ee.useEffect(() => {
    !d.current || !i || d.current.setOptions({ placement: s, strategy: c, modifiers: [...y, T, Ew] });
  }, [c, s, T, i, y]), ee.useEffect(() => {
    if (!(!i || e == null || a == null)) return d.current = mw(e, a, Object.assign({}, o, { placement: s, strategy: c, modifiers: [...y, _w, T] })), () => {
      d.current != null && (d.current.destroy(), d.current = void 0, E((_) => Object.assign({}, _, { attributes: {}, styles: { popper: {} } })));
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
const $0 = (e) => e && ("current" in e ? e.current : e), Dp = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function bg(e, a = Op, { disabled: r, clickTrigger: i = "click" } = {}) {
  const s = ee.useRef(false), c = ee.useRef(false), u = ee.useCallback((d) => {
    const v = $0(e);
    Aw(!!v, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), s.current = !v || Cw(d) || !kw(d) || !!fh(v, d.target) || c.current, c.current = false;
  }, [e]), o = _a((d) => {
    const v = $0(e);
    v && fh(v, d.target) ? c.current = true : c.current = false;
  }), x = _a((d) => {
    s.current || a(d);
  });
  ee.useEffect(() => {
    var d, v;
    if (r || e == null) return;
    const m = hf($0(e)), g = m.defaultView || window;
    let E = (d = g.event) != null ? d : (v = g.parent) == null ? void 0 : v.event, T = null;
    Dp[i] && (T = pi(m, Dp[i], o, true));
    const y = pi(m, i, u, true), _ = pi(m, i, (b) => {
      if (b === E) {
        E = void 0;
        return;
      }
      x(b);
    });
    let D = [];
    return "ontouchstart" in m.documentElement && (D = [].slice.call(m.body.children).map((b) => pi(b, "mousemove", Op))), () => {
      T == null ? void 0 : T(), y(), _(), D.forEach((b) => b());
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
  var d, v, m, g, E;
  const T = bw(x.modifiers);
  return Object.assign({}, x, { placement: r, enabled: e, strategy: c ? "fixed" : x.strategy, modifiers: Ow(Object.assign({}, T, { eventListeners: { enabled: a, options: (d = T.eventListeners) == null ? void 0 : d.options }, preventOverflow: Object.assign({}, T.preventOverflow, { options: u ? Object.assign({ padding: u }, (v = T.preventOverflow) == null ? void 0 : v.options) : (m = T.preventOverflow) == null ? void 0 : m.options }), offset: { options: Object.assign({ offset: s }, (g = T.offset) == null ? void 0 : g.options) }, arrow: Object.assign({}, T.arrow, { enabled: !!o, options: Object.assign({}, (E = T.arrow) == null ? void 0 : E.options, { element: o }) }), flip: Object.assign({ enabled: !!i }, T.flip) })) });
}
const Dw = ["children", "usePopper"];
function Rw(e, a) {
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
function Dg(e = {}) {
  const a = ee.useContext(df), [r, i] = ih(), s = ee.useRef(false), { flip: c, offset: u, rootCloseEvent: o, fixed: x = false, placement: d, popperConfig: v = {}, enableEventListeners: m = true, usePopper: g = !!a } = e, E = (a == null ? void 0 : a.show) == null ? !!e.show : a.show;
  E && !s.current && (s.current = true);
  const T = (j) => {
    a == null ? void 0 : a.toggle(false, j);
  }, { placement: y, setMenu: _, menuElement: D, toggleElement: b } = a || {}, w = Cg(b, D, Og({ placement: d || y || "bottom-start", enabled: g, enableEvents: m ?? E, offset: u, flip: c, fixed: x, arrowElement: r, popperConfig: v })), M = Object.assign({ ref: _ || Fw, "aria-labelledby": b == null ? void 0 : b.id }, w.attributes.popper, { style: w.styles.popper }), V = { show: E, placement: y, hasShown: s.current, toggle: a == null ? void 0 : a.toggle, popper: g ? w : null, arrowProps: g ? Object.assign({ ref: i }, w.attributes.arrow, { style: w.styles.arrow }) : {} };
  return bg(D, T, { clickTrigger: o, disabled: !E }), [M, V];
}
function Rg(e) {
  let { children: a, usePopper: r = true } = e, i = Rw(e, Dw);
  const [s, c] = Dg(Object.assign({}, i, { usePopper: r }));
  return K.jsx(K.Fragment, { children: a(s, c) });
}
Rg.displayName = "DropdownMenu";
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
}, Rp = () => {
};
function Lg() {
  const e = Uw(), { show: a = false, toggle: r = Rp, setToggle: i, menuElement: s } = ee.useContext(df) || {}, c = ee.useCallback((o) => {
    r(!a, o);
  }, [a, r]), u = { id: e, ref: i || Rp, onClick: c, "aria-expanded": !!a };
  return s && Mg(s) && (u["aria-haspopup"] = true), [u, { show: a, toggle: r }];
}
function Bg({ children: e }) {
  const [a, r] = Lg();
  return K.jsx(K.Fragment, { children: e(a, r) });
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
  return K.jsx(u, Object.assign({}, o, { ref: a }, x));
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
function xc({ defaultShow: e, show: a, onSelect: r, onToggle: i, itemSelector: s = `* [${Ig("dropdown-item")}]`, focusFirstItemOnShow: c, placement: u = "bottom-start", children: o }) {
  const x = Pg(), [d, v] = d4(a, e, i), [m, g] = Np(), E = m.current, [T, y] = Np(), _ = T.current, D = $T(d), b = ee.useRef(null), w = ee.useRef(false), M = ee.useContext(uh), V = ee.useCallback((B, U, ne = U == null ? void 0 : U.type) => {
    v(B, { originalEvent: U, source: ne });
  }, [v]), j = _a((B, U) => {
    r == null ? void 0 : r(B, U), V(false, U, "select"), U.isPropagationStopped() || (M == null ? void 0 : M(B, U));
  }), C = ee.useMemo(() => ({ toggle: V, placement: u, show: d, menuElement: E, toggleElement: _, setMenu: g, setToggle: y }), [V, u, d, E, _, g, y]);
  E && D && !d && (w.current = E.contains(E.ownerDocument.activeElement));
  const A = _a(() => {
    _ && _.focus && _.focus();
  }), S = _a(() => {
    const B = b.current;
    let U = c;
    if (U == null && (U = m.current && Mg(m.current) ? "keyboard" : false), U === false || U === "keyboard" && !/^key.+$/.test(B)) return;
    const ne = pp(m.current, s)[0];
    ne && ne.focus && ne.focus();
  });
  ee.useEffect(() => {
    d ? S() : w.current && (w.current = false, A());
  }, [d, w, A, S]), ee.useEffect(() => {
    b.current = null;
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
    b.current = B.type;
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
  }), K.jsx(uh.Provider, { value: j, children: K.jsx(df.Provider, { value: C, children: o }) });
}
xc.displayName = "Dropdown";
xc.Menu = Rg;
xc.Toggle = Bg;
xc.Item = jg;
const jh = ee.createContext({});
jh.displayName = "DropdownContext";
const Gg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "hr", role: i = "separator", ...s }, c) => (a = qe(a, "dropdown-divider"), K.jsx(r, { ref: c, className: Ve(e, a), role: i, ...s })));
Gg.displayName = "DropdownDivider";
const Vg = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", role: i = "heading", ...s }, c) => (a = qe(a, "dropdown-header"), K.jsx(r, { ref: c, className: Ve(e, a), role: i, ...s })));
Vg.displayName = "DropdownHeader";
const Xg = ee.forwardRef(({ bsPrefix: e, className: a, eventKey: r, disabled: i = false, onClick: s, active: c, as: u = Dh, ...o }, x) => {
  const d = qe(e, "dropdown-item"), [v, m] = Hg({ key: r, href: o.href, disabled: i, onClick: s, active: c });
  return K.jsx(u, { ...o, ...v, ref: x, className: Ve(a, d, m.isActive && "active", i && "disabled") });
});
Xg.displayName = "DropdownItem";
const $g = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "span", ...i }, s) => (a = qe(a, "dropdown-item-text"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
$g.displayName = "DropdownItemText";
const Xw = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative", $w = typeof document < "u", Yg = $w || Xw ? ee.useLayoutEffect : ee.useEffect, zh = ee.createContext(null);
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
  const E = ee.useContext(qg), T = qe(e, "dropdown-menu"), { align: y, drop: _, isRTL: D } = ee.useContext(jh);
  r = r || y;
  const b = ee.useContext(zh), w = [];
  if (r) if (typeof r == "object") {
    const B = Object.keys(r);
    if (B.length) {
      const U = B[0], ne = r[U];
      g = ne === "start", w.push(`${T}-${U}-${ne}`);
    }
  } else r === "end" && (g = true);
  const M = Wg(g, _, D), [V, { hasShown: j, popper: C, show: A, toggle: S }] = Dg({ flip: s, rootCloseEvent: i, show: c, usePopper: !E && w.length === 0, offset: [0, 2], popperConfig: x, placement: M });
  if (V.ref = oc(Kg(m), V.ref), Yg(() => {
    A && (C == null ? void 0 : C.update());
  }, [A]), !j && !u && !b) return null;
  typeof o != "string" && (V.show = A, V.close = () => S == null ? void 0 : S(false), V.align = r);
  let N = v.style;
  return C != null && C.placement && (N = { ...v.style, ...V.style }, v["x-placement"] = C.placement), K.jsx(o, { ...v, ...V, style: N, ...(w.length || E) && { "data-bs-popper": "static" }, className: Ve(a, T, A && "show", g && `${T}-end`, d && `${T}-${d}`, ...w) });
});
Zg.displayName = "DropdownMenu";
const Qg = ee.forwardRef(({ bsPrefix: e, split: a, className: r, childBsPrefix: i, as: s = Un, ...c }, u) => {
  const o = qe(e, "dropdown-toggle"), x = ee.useContext(df);
  i !== void 0 && (c.bsPrefix = i);
  const [d] = Lg();
  return d.ref = oc(d.ref, Kg(u)), K.jsx(s, { className: Ve(r, o, a && `${o}-split`, (x == null ? void 0 : x.show) && "show"), ...d, ...c });
});
Qg.displayName = "DropdownToggle";
const Jg = ee.forwardRef((e, a) => {
  const { bsPrefix: r, drop: i = "down", show: s, className: c, align: u = "start", onSelect: o, onToggle: x, focusFirstItemOnShow: d, as: v = "div", navbar: m, autoClose: g = true, ...E } = qm(e, { show: "onToggle" }), T = ee.useContext(zh), y = qe(r, "dropdown"), _ = Ah(), D = (C) => g === false ? C === "click" : g === "inside" ? C !== "rootClose" : g === "outside" ? C !== "select" : true, b = Ch((C, A) => {
    var S;
    !((S = A.originalEvent) == null || (S = S.target) == null) && S.classList.contains("dropdown-toggle") && A.source === "mousedown" || (A.originalEvent.currentTarget === document && (A.source !== "keydown" || A.originalEvent.key === "Escape") && (A.source = "rootClose"), D(A.source) && (x == null ? void 0 : x(C, A)));
  }), M = Wg(u === "end", i, _), V = ee.useMemo(() => ({ align: u, drop: i, isRTL: _ }), [u, i, _]), j = { down: y, "down-centered": `${y}-center`, up: "dropup", "up-centered": "dropup-center dropup", end: "dropend", start: "dropstart" };
  return K.jsx(jh.Provider, { value: V, children: K.jsx(xc, { placement: M, show: s, onSelect: o, onToggle: b, focusFirstItemOnShow: d, itemSelector: `.${y}-item:not(.disabled):not(:disabled)`, children: T ? E.children : K.jsx(v, { ...E, ref: a, className: Ve(c, s && "show", j[i]) }) }) });
});
Jg.displayName = "Dropdown";
const oi = Object.assign(Jg, { Toggle: Qg, Menu: Zg, Item: Xg, ItemText: $g, Divider: Gg, Header: Vg }), Yw = { type: Fa.string, tooltip: Fa.bool, as: Fa.elementType }, vf = ee.forwardRef(({ as: e = "div", className: a, type: r = "valid", tooltip: i = false, ...s }, c) => K.jsx(e, { ...s, ref: c, className: Ve(a, `${r}-${i ? "tooltip" : "feedback"}`) }));
vf.displayName = "Feedback";
vf.propTypes = Yw;
const sn = ee.createContext({}), Ph = ee.forwardRef(({ id: e, bsPrefix: a, className: r, type: i = "checkbox", isValid: s = false, isInvalid: c = false, as: u = "input", ...o }, x) => {
  const { controlId: d } = ee.useContext(sn);
  return a = qe(a, "form-check-input"), K.jsx(u, { ...o, ref: x, type: i, id: e || d, className: Ve(r, a, s && "is-valid", c && "is-invalid") });
});
Ph.displayName = "FormCheckInput";
const Z0 = ee.forwardRef(({ bsPrefix: e, className: a, htmlFor: r, ...i }, s) => {
  const { controlId: c } = ee.useContext(sn);
  return e = qe(e, "form-check-label"), K.jsx("label", { ...i, ref: s, htmlFor: r || c, className: Ve(a, e) });
});
Z0.displayName = "FormCheckLabel";
const e2 = ee.forwardRef(({ id: e, bsPrefix: a, bsSwitchPrefix: r, inline: i = false, reverse: s = false, disabled: c = false, isValid: u = false, isInvalid: o = false, feedbackTooltip: x = false, feedback: d, feedbackType: v, className: m, style: g, title: E = "", type: T = "checkbox", label: y, children: _, as: D = "input", ...b }, w) => {
  a = qe(a, "form-check"), r = qe(r, "form-switch");
  const { controlId: M } = ee.useContext(sn), V = ee.useMemo(() => ({ controlId: e || M }), [M, e]), j = !_ && y != null && y !== false || u4(_, Z0), C = K.jsx(Ph, { ...b, type: T === "switch" ? "checkbox" : T, ref: w, isValid: u, isInvalid: o, disabled: c, as: D });
  return K.jsx(sn.Provider, { value: V, children: K.jsx("div", { style: g, className: Ve(m, j && a, i && `${a}-inline`, s && `${a}-reverse`, T === "switch" && r), children: _ || K.jsxs(K.Fragment, { children: [C, j && K.jsx(Z0, { title: E, children: y }), d && K.jsx(vf, { type: v, tooltip: x, children: d })] }) }) });
});
e2.displayName = "FormCheck";
const Q0 = Object.assign(e2, { Input: Ph, Label: Z0 }), t2 = ee.forwardRef(({ bsPrefix: e, type: a, size: r, htmlSize: i, id: s, className: c, isValid: u = false, isInvalid: o = false, plaintext: x, readOnly: d, as: v = "input", ...m }, g) => {
  const { controlId: E } = ee.useContext(sn);
  return e = qe(e, "form-control"), K.jsx(v, { ...m, type: a, size: i, ref: g, readOnly: d, id: s || E, className: Ve(c, x ? `${e}-plaintext` : e, r && `${e}-${r}`, a === "color" && `${e}-color`, u && "is-valid", o && "is-invalid") });
});
t2.displayName = "FormControl";
const qw = Object.assign(t2, { Feedback: vf }), r2 = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "form-floating"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
r2.displayName = "FormFloating";
const Gh = ee.forwardRef(({ controlId: e, as: a = "div", ...r }, i) => {
  const s = ee.useMemo(() => ({ controlId: e }), [e]);
  return K.jsx(sn.Provider, { value: s, children: K.jsx(a, { ...r, ref: i }) });
});
Gh.displayName = "FormGroup";
const a2 = ee.forwardRef(({ as: e = "label", bsPrefix: a, column: r = false, visuallyHidden: i = false, className: s, htmlFor: c, ...u }, o) => {
  const { controlId: x } = ee.useContext(sn);
  a = qe(a, "form-label");
  let d = "col-form-label";
  typeof r == "string" && (d = `${d} ${d}-${r}`);
  const v = Ve(s, a, i && "visually-hidden", r && d);
  return c = c || x, r ? K.jsx(en, { ref: o, as: "label", className: v, htmlFor: c, ...u }) : K.jsx(e, { ref: o, className: v, htmlFor: c, ...u });
});
a2.displayName = "FormLabel";
const n2 = ee.forwardRef(({ bsPrefix: e, className: a, id: r, ...i }, s) => {
  const { controlId: c } = ee.useContext(sn);
  return e = qe(e, "form-range"), K.jsx("input", { ...i, type: "range", ref: s, className: Ve(a, e), id: r || c });
});
n2.displayName = "FormRange";
const i2 = ee.forwardRef(({ bsPrefix: e, size: a, htmlSize: r, className: i, isValid: s = false, isInvalid: c = false, id: u, ...o }, x) => {
  const { controlId: d } = ee.useContext(sn);
  return e = qe(e, "form-select"), K.jsx("select", { ...o, size: r, ref: x, className: Ve(i, e, a && `${e}-${a}`, s && "is-valid", c && "is-invalid"), id: u || d });
});
i2.displayName = "FormSelect";
const s2 = ee.forwardRef(({ bsPrefix: e, className: a, as: r = "small", muted: i, ...s }, c) => (e = qe(e, "form-text"), K.jsx(r, { ...s, ref: c, className: Ve(a, e, i && "text-muted") })));
s2.displayName = "FormText";
const l2 = ee.forwardRef((e, a) => K.jsx(Q0, { ...e, ref: a, type: "switch" }));
l2.displayName = "Switch";
const Kw = Object.assign(l2, { Input: Q0.Input, Label: Q0.Label }), c2 = ee.forwardRef(({ bsPrefix: e, className: a, children: r, controlId: i, label: s, ...c }, u) => (e = qe(e, "form-floating"), K.jsxs(Gh, { ref: u, className: Ve(a, e), controlId: i, ...c, children: [r, K.jsx("label", { htmlFor: i, children: s })] })));
c2.displayName = "FloatingLabel";
const Ww = { _ref: Fa.any, validated: Fa.bool, as: Fa.elementType }, Vh = ee.forwardRef(({ className: e, validated: a, as: r = "form", ...i }, s) => K.jsx(r, { ...i, ref: s, className: Ve(e, a && "was-validated") }));
Vh.displayName = "Form";
Vh.propTypes = Ww;
const hi = Object.assign(Vh, { Group: Gh, Control: qw, Floating: r2, Check: Q0, Switch: Kw, Label: a2, Text: s2, Range: n2, Select: i2, FloatingLabel: c2 }), Mp = (e) => !e || typeof e == "function" ? e : (a) => {
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
  const x = pf(c, uc(e)), d = ee.cloneElement(e, { ref: x });
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
  const v = ee.useRef(null), m = pf(v, uc(x)), g = (M) => (V) => {
    M && v.current && M(v.current, V);
  }, E = ee.useCallback(g(a), [a]), T = ee.useCallback(g(r), [r]), y = ee.useCallback(g(i), [i]), _ = ee.useCallback(g(s), [s]), D = ee.useCallback(g(c), [c]), b = ee.useCallback(g(u), [u]), w = ee.useCallback(g(o), [o]);
  return Object.assign({}, d, { nodeRef: v }, a && { onEnter: E }, r && { onEntering: T }, i && { onEntered: y }, s && { onExit: _ }, c && { onExiting: D }, u && { onExited: b }, o && { addEndListener: w }, { children: typeof x == "function" ? (M, V) => x(M, Object.assign({}, V, { ref: m })) : ee.cloneElement(x, { ref: m }) });
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
  return K.jsx(r, Object.assign({ ref: a }, s));
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
  } }), x = pf(o, uc(e));
  return c && !a ? null : ee.cloneElement(e, { ref: x });
}
function lS(e, a, r) {
  return e ? K.jsx(nS, Object.assign({}, r, { component: e })) : a ? K.jsx(sS, Object.assign({}, r, { transition: a })) : K.jsx(Qw, Object.assign({}, r));
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
    RT(u) && s(u);
  });
  ee.useEffect(() => {
    if (r || e == null) return;
    const u = hf($0(e));
    let o = (u.defaultView || window).event;
    const x = pi(u, "keyup", (d) => {
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
  const { flip: r, offset: i, placement: s, containerPadding: c, popperConfig: u = {}, transition: o, runTransition: x } = e, [d, v] = ih(), [m, g] = ih(), E = pf(v, a), T = Lp(e.container), y = Lp(e.target), [_, D] = ee.useState(!e.show), b = Cg(y, d, Og({ placement: s, enableEvents: !!e.show, containerPadding: c || 5, flip: r, offset: i, arrowElement: m, popperConfig: u }));
  e.show && _ && D(false);
  const w = (...B) => {
    D(true), e.onExited && e.onExited(...B);
  }, M = e.show || !_;
  if (fS(d, e.onHide, { disabled: !e.rootClose || e.rootCloseDisabled, clickTrigger: e.rootCloseEvent }), !M) return null;
  const { onExit: V, onExiting: j, onEnter: C, onEntering: A, onEntered: S } = e;
  let N = e.children(Object.assign({}, b.attributes.popper, { style: b.styles.popper, ref: E }), { popper: b, placement: s, show: !!e.show, arrowProps: Object.assign({}, b.attributes.arrow, { style: b.styles.arrow, ref: g }) });
  return N = lS(o, x, { in: !!e.show, appear: true, mountOnEnter: true, unmountOnExit: true, children: N, onExit: V, onExiting: j, onExited: w, onEnter: C, onEntering: A, onEntered: S }), T ? ps.createPortal(N, T) : null;
});
f2.displayName = "Overlay";
const u2 = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "popover-header"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
u2.displayName = "PopoverHeader";
const Xh = ee.forwardRef(({ className: e, bsPrefix: a, as: r = "div", ...i }, s) => (a = qe(a, "popover-body"), K.jsx(r, { ref: s, className: Ve(e, a), ...i })));
Xh.displayName = "PopoverBody";
function o2(e, a) {
  let r = e;
  return e === "left" ? r = a ? "end" : "start" : e === "right" && (r = a ? "start" : "end"), r;
}
function h2(e = "absolute") {
  return { position: e, top: "0", left: "0", opacity: "0", pointerEvents: "none" };
}
const uS = ee.forwardRef(({ bsPrefix: e, placement: a = "right", className: r, style: i, children: s, body: c, arrowProps: u, hasDoneInitialMeasure: o, popper: x, show: d, ...v }, m) => {
  const g = qe(e, "popover"), E = Ah(), [T] = (a == null ? void 0 : a.split("-")) || [], y = o2(T, E);
  let _ = i;
  return d && !o && (_ = { ...i, ...h2(x == null ? void 0 : x.strategy) }), K.jsxs("div", { ref: m, role: "tooltip", style: _, "x-placement": T, className: Ve(r, g, T && `bs-popover-${y}`), ...v, children: [K.jsx("div", { className: "popover-arrow", ...u }), c ? K.jsx(Xh, { children: s }) : s] });
}), oS = Object.assign(uS, { Header: u2, Body: Xh, POPPER_OFFSET: [0, 8] }), d2 = ee.forwardRef(({ bsPrefix: e, placement: a = "right", className: r, style: i, children: s, arrowProps: c, hasDoneInitialMeasure: u, popper: o, show: x, ...d }, v) => {
  e = qe(e, "tooltip");
  const m = Ah(), [g] = (a == null ? void 0 : a.split("-")) || [], E = o2(g, m);
  let T = i;
  return x && !u && (T = { ...i, ...h2(o == null ? void 0 : o.strategy) }), K.jsxs("div", { ref: v, style: T, role: "tooltip", "x-placement": g, className: Ve(r, e, `bs-tooltip-${E}`), ...d, children: [K.jsx("div", { className: "tooltip-arrow", ...c }), K.jsx("div", { className: `${e}-inner`, children: s })] });
});
d2.displayName = "Tooltip";
const J0 = Object.assign(d2, { TOOLTIP_OFFSET: [0, 6] });
function hS(e) {
  const a = ee.useRef(null), r = qe(void 0, "popover"), i = qe(void 0, "tooltip"), s = ee.useMemo(() => ({ name: "offset", options: { offset: () => {
    if (e) return e;
    if (a.current) {
      if (Bp(a.current, r)) return oS.POPPER_OFFSET;
      if (Bp(a.current, i)) return J0.TOOLTIP_OFFSET;
    }
    return [0, 0];
  } } }), [e, r, i]);
  return [a, [s]];
}
function dS(e, a) {
  const { ref: r } = e, { ref: i } = a;
  e.ref = r.__wrapped || (r.__wrapped = (s) => r(K0(s))), a.ref = i.__wrapped || (i.__wrapped = (s) => i(K0(s)));
}
const x2 = ee.forwardRef(({ children: e, transition: a = Ql, popperConfig: r = {}, rootClose: i = false, placement: s = "top", show: c = false, ...u }, o) => {
  const x = ee.useRef({}), [d, v] = ee.useState(null), [m, g] = hS(u.offset), E = oc(o, m), T = a === true ? Ql : a || void 0, y = Ch((_) => {
    v(_), r == null || r.onFirstUpdate == null || r.onFirstUpdate(_);
  });
  return Yg(() => {
    d && u.target && (x.current.scheduleUpdate == null || x.current.scheduleUpdate());
  }, [d, u.target]), ee.useEffect(() => {
    c || v(null);
  }, [c]), K.jsx(f2, { ...u, ref: E, popperConfig: { ...r, modifiers: g.concat(r.modifiers || []), onFirstUpdate: y }, transition: T, rootClose: i, placement: s, show: c, children: (_, { arrowProps: D, popper: b, show: w }) => {
    var M;
    dS(_, D);
    const V = b == null ? void 0 : b.placement, j = Object.assign(x.current, { state: b == null ? void 0 : b.state, scheduleUpdate: b == null ? void 0 : b.update, placement: V, outOfBoundaries: (b == null || (M = b.state) == null || (M = M.modifiersData.hide) == null ? void 0 : M.isReferenceHidden) || false, strategy: r.strategy }), C = !!d;
    return typeof e == "function" ? e({ ..._, placement: V, show: w, ...!a && w && { className: "show" }, popper: j, arrowProps: D, hasDoneInitialMeasure: C }) : ee.cloneElement(e, { ..._, placement: V, arrowProps: D, popper: j, hasDoneInitialMeasure: C, className: Ve(e.props.className, !a && w && "show"), style: { ...e.props.style, ..._.style } });
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
  const m = ee.useRef(null), g = oc(m, uc(r)), E = f4(), T = ee.useRef(""), [y, _] = Ym(s, c, u), D = xS(o), { onFocus: b, onBlur: w, onClick: M } = typeof r != "function" ? ee.Children.only(r).props : {}, V = (fe) => {
    g(K0(fe));
  }, j = ee.useCallback(() => {
    if (E.clear(), T.current = "show", !D.show) {
      _(true);
      return;
    }
    E.set(() => {
      T.current === "show" && _(true);
    }, D.show);
  }, [D.show, _, E]), C = ee.useCallback(() => {
    if (E.clear(), T.current = "hide", !D.hide) {
      _(false);
      return;
    }
    E.set(() => {
      T.current === "hide" && _(false);
    }, D.hide);
  }, [D.hide, _, E]), A = ee.useCallback((...fe) => {
    j(), b == null ? void 0 : b(...fe);
  }, [j, b]), S = ee.useCallback((...fe) => {
    C(), w == null ? void 0 : w(...fe);
  }, [C, w]), N = ee.useCallback((...fe) => {
    _(!y), M == null ? void 0 : M(...fe);
  }, [M, _, y]), B = ee.useCallback((...fe) => {
    Up(j, fe, "fromElement");
  }, [j]), U = ee.useCallback((...fe) => {
    Up(C, fe, "toElement");
  }, [C]), ne = e == null ? [] : [].concat(e), ge = { ref: V };
  return ne.indexOf("click") !== -1 && (ge.onClick = N), ne.indexOf("focus") !== -1 && (ge.onFocus = A, ge.onBlur = S), ne.indexOf("hover") !== -1 && (ge.onMouseOver = B, ge.onMouseOut = U), K.jsxs(K.Fragment, { children: [typeof r == "function" ? r(ge) : ee.cloneElement(r, ge), K.jsx(x2, { ...v, show: y, onHide: C, flip: d, placement: x, popperConfig: i, target: m.current, children: a })] });
}, mi = ee.forwardRef(({ bsPrefix: e, className: a, as: r = "div", ...i }, s) => {
  const c = qe(e, "row"), u = Km(), o = Wm(), x = `${c}-cols`, d = [];
  return u.forEach((v) => {
    const m = i[v];
    delete i[v];
    let g;
    m != null && typeof m == "object" ? { cols: g } = m : g = m;
    const E = v !== o ? `-${v}` : "";
    g != null && d.push(`${x}${E}-${g}`);
  }), K.jsx(r, { ref: s, ...i, className: Ve(a, c, ...d) });
});
mi.displayName = "Row";
const zo = ee.forwardRef(({ bsPrefix: e, className: a, striped: r, bordered: i, borderless: s, hover: c, size: u, variant: o, responsive: x, ...d }, v) => {
  const m = qe(e, "table"), g = Ve(a, m, o && `${m}-${o}`, u && `${m}-${u}`, r && `${m}-${typeof r == "string" ? `striped-${r}` : "striped"}`, i && `${m}-bordered`, s && `${m}-borderless`, c && `${m}-hover`), E = K.jsx("table", { ...d, className: g, ref: v });
  if (x) {
    let T = `${m}-responsive`;
    return typeof x == "string" && (T = `${T}-${x}`), K.jsx("div", { className: T, children: E });
  }
  return E;
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
  const s = ES(i, a), c = [...a].sort((_, D) => {
    const b = s.get(_.id) || 0, w = s.get(D.id) || 0;
    return b !== w ? b - w : _.availability.length - D.availability.length;
  }), u = [...r].sort((_, D) => _.availability.length - D.availability.length), o = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  e = new Map(e), console.log("restriction:", e);
  let d = a.length, v = r.length;
  e.has("interviewers:\u6240\u6709") || (console.log("\u6C92\u6709 interviewers:\u6240\u6709 \u7684\u9650\u5236\u689D\u4EF6", new Map(e)), e.set("interviewers:\u6240\u6709", { min: 1, max: oh })), e.has("interviewees:\u6240\u6709") || (console.log("\u6C92\u6709 interviewees:\u6240\u6709 \u7684\u9650\u5236\u689D\u4EF6", new Map(e)), e.set("interviewees:\u6240\u6709", { min: 1, max: oh }));
  let m = false, g = { valid: false, reason: "", interviewers: [], interviewees: [] };
  if (e.forEach((_, D) => {
    if (m) return;
    const [b, w] = D.split(":"), { min: M, max: V } = _;
    if (console.log(b, w, M, V), b === "interviewers") {
      const j = c.filter((A) => A.position === w || w === "\u6240\u6709"), C = Math.min(j.length, V);
      C < M ? (m = true, g = { valid: false, reason: `\u9762\u8A66\u5B98 ${w} \u6578\u91CF\u4E0D\u5408, ${C} < ${M}`, interviewers: [], interviewees: [] }) : w !== "\u6240\u6709" ? o.set(w, j.slice(0, C)) : d = M;
    } else if (b === "interviewees") {
      const j = u.filter((A) => A.position === w || w === "\u6240\u6709"), C = Math.min(j.length, V);
      C < M ? (m = true, g = { valid: false, reason: `\u61C9\u8A66\u8005 ${w} \u6578\u91CF\u4E0D\u5408, ${C} < ${M}`, interviewers: [], interviewees: [] }) : w !== "\u6240\u6709" ? x.set(w, j.slice(0, C)) : v = C;
    }
  }), m) return console.log("\u6AA2\u67E5\u9650\u5236\u689D\u4EF6\u5931\u6557:", g), g;
  console.log("validInterviewersMap:", o);
  const E = [...o.entries()].reduce((_, D) => [..._, ...D[1]], []), T = [...x.entries()].reduce((_, D) => [..._, ...D[1]], []);
  let y = 0;
  for (console.log("shouldInterviewersNumber:", d), console.log("shouldIntervieweesNumber:", v); E.length < d; ) {
    if (y >= a.length) return { valid: false, reason: "\u9762\u8A66\u5B98\u6578\u91CF\u4E0D\u5408", interviewers: [], interviewees: [] };
    if (E.includes(a[y]) || o.has(`${(_a2 = a[y]) == null ? void 0 : _a2.position}`)) {
      y++;
      continue;
    }
    E.push(a[y]);
  }
  for (y = 0; T.length < v; ) {
    if (y >= r.length) return { valid: false, reason: "\u61C9\u8A66\u8005\u6578\u91CF\u4E0D\u5408", interviewers: [], interviewees: [] };
    if (T.includes(r[y]) || x.has(`${(_b2 = a[y]) == null ? void 0 : _b2.position}`)) {
      y++;
      continue;
    }
    T.push(r[y]);
  }
  return { valid: true, reason: "", interviewers: E, interviewees: T };
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
    const E = As(m).start, T = As(g).start;
    return E.getTime() - T.getTime();
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
      const y = c.filter((M) => Po(M, g, s));
      console.log(`\u53EF\u7528\u7684\u9762\u8A66\u5B98: ${y.map((M) => M.name).join(", ")}`), console.log(`\u53EF\u7528\u7684\u61C9\u8A66\u8005: ${T.map((M) => M.name).join(", ")}`);
      const _ = mS(r, y, T, s);
      if (!_.valid) {
        console.log(`\u6642\u6BB5 ${g} \u4E0D\u7B26\u5408\u9650\u5236\u689D\u4EF6: ${_.reason}`), i.reasons.push(_.reason);
        continue;
      }
      const [D, b] = g.split("/"), w = { interviewers: _.interviewers.map((M) => ({ id: M.id, name: M.name, position: M.position })), interviewees: _.interviewees.map((M) => ({ id: M.id, name: M.name, position: M.position })), startTime: D, endTime: b };
      s.push(w), _.interviewees.forEach((M) => {
        x.add(M.id);
      }), _.interviewers.forEach((M) => {
        Array.isArray(M.availability) && (M.availability = M.availability.filter((V) => V !== g));
      }), console.log(`\u5B89\u6392\u4E86\u9762\u8A66: ${_.interviewees.map((M) => M.name).join(", ")} (${m}) \u8207 ${_.interviewers.map((M) => M.name).join(", ")} \u5728 ${D}`);
    }
  }
  for (const m of s) {
    const g = m.interviewers.map((w) => w.id);
    console.log("\u91CD\u586B\u4E2D..."), console.log(`\u6642\u6BB5\uFF1A${m.startTime}/${m.endTime}`);
    const E = c.filter((w) => Po(w, `${m.startTime}/${m.endTime}`, s) && !g.includes(w.id)), T = Array.from(r.keys()).map((w) => w.split(":")[1]).filter((w) => w !== "\u6240\u6709"), y = E.sort((w, M) => w.availability.length - M.availability.length), { max: _ } = r.get("interviewers:\u6240\u6709") || { max: 100 }, D = y.filter((w) => !T.includes(`${w.position}`)), b = Math.min(D.length + g.length, _) - g.length;
    if (console.log(`\u53EF\u7528\u7684\u9762\u8A66\u5B98\u6578\u91CF: ${b}, ${T} ${D.map((w) => w.position).join(", ")}`), b > 0) {
      const w = y.slice(0, b);
      m.interviewers.push(...w.map((M) => ({ id: M.id, name: M.name, position: M.position }))), console.log(`\u65B0\u589E\u5B89\u6392\u4E86\u9762\u8A66\u5B98: ${w.map((M) => M.name).join(", ")} \u5728 ${m.startTime}`);
    }
  }
  const v = u.filter((m) => !x.has(m.id));
  return v.forEach((m) => {
    i.interviewees.includes(m) || (i.interviewees.push(m), i.reasons.push(`\u7121\u6CD5\u70BA\u61C9\u8A66\u8005 ${m.name} \u627E\u5230\u7B26\u5408\u9650\u5236\u689D\u4EF6\u7684\u6642\u6BB5`));
  }), { interviews: s.map((m, g) => ({ ...m, id: g + 1 })), unmatched: { interviewers: c, interviewees: v, reasons: i.reasons } };
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
  const [a, r] = ee.useState([]), [i, s] = ee.useState([]), [c, u] = ee.useState([]), [o, x] = ee.useState(null), [d, v] = ee.useState("scheduled"), [m, g] = ee.useState({ interviewers: [{ minCount: 1, maxCount: 3, targetPosition: "\u6240\u6709", groupName: "Interviewers" }], interviewees: [{ minCount: 1, maxCount: 3, targetPosition: "\u6240\u6709", groupName: "Interviewees" }] }), [E, T] = ee.useState({ interviewers: 2, interviewees: 2 }), y = { interviewers: a.length > 0, interviewees: i.length > 0 }, _ = () => {
    console.log("\u958B\u59CB\u914D\u5C0D\u7A0B\u5E8F", { interviewers: a.length, interviewees: i.length, groupRestrictions: m, maxCounts: E });
    const A = pS(m);
    if (!A.results && A.conflict) {
      console.error("\u7FA4\u7D44\u9650\u5236\u6AA2\u67E5\u5931\u6557\uFF1A", A.conflict);
      return;
    }
    console.log("\u7FA4\u7D44\u9650\u5236\u6AA2\u67E5\u7D50\u679C\uFF1A", A.results);
    const S = TS(a, i, A.results);
    console.log("\u914D\u5C0D\u7D50\u679C\uFF1A", S), u(S.interviews), x(S.unmatched);
  }, { startDate: D, daysToShow: b, earliestTime: w, latestTime: M } = ee.useMemo(() => {
    const A = [...a.flatMap((fe) => fe.availability || []), ...i.flatMap((fe) => fe.availability || [])].filter(Boolean);
    if (A.length === 0) {
      const fe = /* @__PURE__ */ new Date(), J = new Date(fe);
      return J.setDate(fe.getDate() - fe.getDay() + 1), { startDate: J, daysToShow: 7, earliestTime: 9, latestTime: 17 };
    }
    const S = A.flatMap((fe) => {
      const [J] = fe.split("/");
      return new Date(J);
    }).filter((fe) => !isNaN(fe.getTime())), N = new Date(Math.min(...S.map((fe) => fe.getTime()))), B = new Date(Math.max(...S.map((fe) => fe.getTime()))), U = Math.ceil((B.getTime() - N.getTime()) / (1e3 * 60 * 60 * 24)) + 1, ne = A.reduce((fe, J) => {
      const [ae] = J.split("/"), we = new Date(ae);
      return we.getHours() < fe ? we.getHours() : fe;
    }, 23), ge = A.reduce((fe, J) => {
      const [, ae] = J.split("/"), we = new Date(ae);
      return we.getHours() > fe ? we.getHours() : fe;
    }, 0);
    return { startDate: N, daysToShow: U, earliestTime: ne, latestTime: ge + 1 };
  }, [a, i]), V = (A) => {
    console.log("\u9762\u8A66\u8005\u8CC7\u6599\u5DF2\u52A0\u8F09\uFF1A", A);
    const S = A.map((N) => !N.availability || !Array.isArray(N.availability) ? typeof N.availability == "string" ? { ...N, availability: N.availability.split(",").map((B) => B.trim()).filter((B) => B.includes("/")) } : { ...N, availability: [] } : N);
    s(S);
  }, j = (A) => {
    console.log("\u9762\u8A66\u8005\u8CC7\u6599\u5DF2\u52A0\u8F09\uFF1A", A);
    const S = A.map((N) => !N.availability || !Array.isArray(N.availability) ? typeof N.availability == "string" ? { ...N, availability: N.availability.split(",").map((B) => B.trim()).filter((B) => B.includes("/")) } : { ...N, availability: [] } : N);
    r(S);
  }, C = (A, S, N) => {
    console.log(`\u66F4\u65B0 ${A} \u7FA4\u7D44\u9650\u5236 ${S}\uFF1A`, N), g((B) => {
      console.log(`\u66F4\u65B0 ${A} \u7FA4\u7D44\u9650\u5236 ${B[A]}`);
      const U = B[A].map((ne, ge) => (console.log(`\u66F4\u65B0 ${A} \u7FA4\u7D44\u9650\u5236 ${S}\uFF1A`, ne, ge), ge === S ? { ...ne, ...N } : ne));
      return { ...B, [A]: U };
    });
  };
  return K.jsx(p2.Provider, { value: { interviewers: a, interviewees: i, scheduledInterviews: c, unmatchedResults: o, dataLoaded: y, displayInfo: { startDate: D, daysToShow: b, earliestTime: w, latestTime: M }, groupRestrictions: m, maxCounts: E, viewMode: d, setViewMode: v, onInterviewersLoaded: j, onIntervieweesLoaded: V, updateMaxCount: (A, S) => {
    console.log(`\u66F4\u65B0 ${A} \u6700\u5927\u9650\u5236\uFF1A`, S), T((N) => ({ ...N, [A]: S }));
  }, addRestriction: (A) => {
    console.log(`\u589E\u52A0 ${A} \u7FA4\u7D44\u9650\u5236`), g((S) => {
      const N = { minCount: 1, maxCount: 1, targetPosition: "\u6240\u6709", groupName: A === "interviewers" ? "Interviewers" : "Interviewees" };
      return { ...S, [A]: [...S[A], N] };
    });
  }, removeRestriction: (A, S) => {
    console.log(`\u79FB\u9664 ${A} \u7FA4\u7D44\u9650\u5236 ${S}`), g((N) => {
      if (N[A].length <= 1) return N;
      console.log(`\u66F4\u65B0 ${A} \u7FA4\u7D44\u9650\u5236\uFF1A`, N);
      const B = N[A].filter((U, ne) => ne !== S);
      return console.log(`\u66F4\u65B0 ${A} \u7FA4\u7D44\u9650\u5236\uFF1A`, B), { ...N, [A]: B };
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
  return !a || r.length === 0 ? K.jsx("div", { className: `calendar-time-slot ${u()}`, children: K.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", justifyContent: "start", width: "100%" }, children: [i.length > 0 && K.jsxs("div", { style: { color: "#4E6688" }, children: ["\u9762\u8A66\u5B98: ", i.length] }), s.length > 0 && K.jsxs("div", { style: { color: "#DDA853" }, children: ["\u61C9\u8A66\u8005: ", s.length] })] }) }) : r.map((x, d) => {
    const v = `${x.interviewees[0].id}-${x.startTime}-${d}`;
    let m = null;
    return x.isStart ? m = { borderRadius: "2px 2px 0 0" } : x.isEnd && (m = { borderRadius: "0 0 2px 2px" }), K.jsx("div", { className: `calendar-time-slot ${u()} ${x.isStart ? "pt-2" : x.isEnd ? "pb-2" : ""}`, children: K.jsx("div", { className: `interview-block color-${x.colorIndex} mx-2 `, style: m, children: K.jsx("div", { className: "interview-content" }) }, `${v}-interview-block`) }, `${v}-calendar-time-slot`);
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
    const y = /* @__PURE__ */ new Map();
    return e.forEach((_, D) => {
      const b = `${_.interviewees.map((w) => w.id).join("-")}-${_.startTime}`;
      y.set(b, D % 8);
    }), y;
  }, [e]), v = ee.useMemo(() => {
    const y = [];
    for (let _ = o; _ <= x; _++) y.push(`${String(_).padStart(2, "0")}:00`), y.push(`${String(_).padStart(2, "0")}:30`);
    return y;
  }, [o, x, u, c]), m = (y, _) => {
    const [D, b] = _.split(":"), w = new Date(y);
    w.setHours(parseInt(D, 10), parseInt(b, 10), 0, 0);
    const M = w.getTime(), V = 30 * 60 * 1e3;
    return e.filter((j) => {
      const C = new Date(j.startTime), A = new Date(j.endTime);
      return M >= C.getTime() && M < A.getTime() && C.getDate() === w.getDate() && C.getMonth() === w.getMonth() && C.getFullYear() === w.getFullYear();
    }).map((j) => {
      const C = new Date(j.startTime), A = new Date(j.endTime), S = M === C.getTime(), N = M === A.getTime() - V, B = `${j.interviewees.map((ne) => ne.id).join("-")}-${j.startTime}`, U = d.get(B) || 0;
      return { ...j, isStart: S, isEnd: N, colorIndex: U };
    });
  }, g = (y, _) => {
    try {
      const [D, b] = _.split("/"), w = new Date(D), M = new Date(b);
      return y.getTime() >= w.getTime() && y.getTime() < M.getTime() && y.toDateString() === w.toDateString();
    } catch (D) {
      return console.error("\u6642\u9593\u683C\u5F0F\u932F\u8AA4:", D), false;
    }
  }, E = (y, _) => {
    if (s === "scheduled" && e.length > 0) return { interviews: m(y, _), interviewers: [], interviewees: [], rooms: [] };
    const [D, b] = _.split(":"), w = new Date(y);
    w.setHours(parseInt(D, 10), parseInt(b, 10), 0, 0);
    let M = a, V = r;
    s === "unmatched" && i && (M = i.interviewers, V = i.interviewees);
    const j = (M == null ? void 0 : M.filter((A) => !A.availability || !Array.isArray(A.availability) ? (console.warn(`\u9762\u8A66\u5B98 ${A.name} \u7684 availability \u4E0D\u662F\u6709\u6548\u6578\u7D44`, A.availability), false) : A.availability.some((S) => g(w, S)))) || [], C = (V == null ? void 0 : V.filter((A) => !A.availability || !Array.isArray(A.availability) ? (console.warn(`\u61C9\u8A66\u8005 ${A.name} \u7684 availability \u4E0D\u662F\u6709\u6548\u6578\u7D44`, A.availability), false) : A.availability.some((S) => g(w, S)))) || [];
    return { interviews: [], interviewers: j, interviewees: C };
  }, T = (y, _) => {
    const D = m(y, _);
    return s === "scheduled" && e.length > 0 && D.length == 0 ? K.jsx(J0, { children: K.jsx("div", { style: { display: "none" } }, `${y}-tooltip`) }) : K.jsx(J0, { className: "availability-tooltip", children: K.jsx("div", { className: "tooltip-content", children: s === "scheduled" && e.length > 0 ? D.map((b) => K.jsx("div", { className: "interview-details", children: K.jsxs("div", { className: "interview-slot", style: { borderLeft: `3px solid ${kS(b.colorIndex)}`, margin: "8px 0", padding: "8px", color: "#000" }, children: [K.jsxs("span", { className: "interview-time", children: ["\u9762\u8A66\u7DE8\u865F\uFF1A", b.id] }), K.jsx("div", { className: "interview-details", children: K.jsxs("p", { children: [K.jsx("strong", { children: "\u9762\u8A66\u5B98\uFF1A" }), b.interviewers.map((w, M) => {
      const V = (w == null ? void 0 : w.position) ? w.position.charAt(0) : "N/A";
      return K.jsxs("span", { children: [w.name, " (", V, ") ", M < b.interviewers.length - 1 ? ", " : ""] }, `interviewer-${M}`);
    })] }) }, `${b.interviewees.map((w) => w.id)[0]}-${b.startTime}-interview-details`), K.jsx("div", { className: "interview-details", children: K.jsxs("p", { children: [K.jsx("strong", { children: "\u61C9\u8A66\u8005\uFF1A" }), b.interviewees.map((w, M) => {
      const V = (w == null ? void 0 : w.position) ? w.position.charAt(0) : "N/A";
      return K.jsxs("span", { children: [w.name, " (", V, ")", M < b.interviewees.length - 1 ? ", " : ""] }, `interviewee-${M}`);
    })] }) })] }, `${b.interviewees.map((w) => w.id)[0]}-${b.startTime}-interview-slot`) }, `${b.interviewees.map((w) => w.id)[0]}-${b.startTime}-interview-details`)) : K.jsxs("div", { children: [K.jsxs("p", { children: [K.jsx("strong", { children: "\u9762\u8A66\u5B98\uFF1A" }), " ", E(y, _).interviewers.map((b) => {
      var _a2;
      return `${b.name} (${((_a2 = b.position) == null ? void 0 : _a2.charAt(0)) || "N/A"})`;
    }).join(", ") || "\u7121"] }), K.jsxs("p", { children: [K.jsx("strong", { children: "\u61C9\u8A66\u8005\uFF1A" }), " ", E(y, _).interviewees.map((b) => {
      var _a2;
      return `${b.name} (${((_a2 = b.position) == null ? void 0 : _a2.charAt(0)) || "N/A"})`;
    }).join(", ") || "\u7121"] })] }, `${y}-tooltip`) }) });
  };
  return ee.useLayoutEffect(() => {
    document.documentElement.style.setProperty("--calendar-grid-num", `${u}`);
  }, [u]), K.jsxs("div", { className: "calendar-grid", children: [K.jsx("div", { className: "time-column", children: v.filter((y, _) => _ % 2 === 0).map((y) => K.jsx("div", { className: "time-header", children: y }, `header-${y}`)) }), AS(c, u).map((y, _) => K.jsx("div", { className: "day-column", children: v.map((D, b) => {
    const w = E(y, D);
    return K.jsx(v2, { placement: "auto", delay: { show: 50, hide: 100 }, overlay: T(y, D), children: K.jsx("div", { className: "time-slot-wrapper", children: K.jsx(SS, { availability: w, showSchedule: s === "scheduled" && e.length > 0 }) }, `slot-${_}-${b}`) }, `overlay-${_}-${b}`);
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
  return K.jsx("div", { className: "calendar-header", children: i().map((s) => K.jsx("div", { className: "calendar-header-cell", children: s.text }, s.key)) });
}, OS = ({ isScheduleView: e = false }) => {
  const i = e ? [{ level: 0, text: "\u7121\u9762\u8A66" }, { level: 3, text: "\u5DF2\u6392\u7A0B\u9762\u8A66: \u59D3\u540D(\u8077)" }] : [{ level: 0, text: "\u672A\u6392\u7A0B" }];
  return K.jsxs("div", { className: "calendar-legend", children: [K.jsx("span", { className: "legend-title", children: "\u5716\u4F8B\uFF1A" }), i.map((s) => K.jsxs("div", { className: "legend-item", children: [K.jsx("span", { className: `legend-color availability-level-${s.level}` }), K.jsx("span", { className: "legend-text", children: s.text })] }, s.level))] });
}, DS = () => {
  const { scheduledInterviews: e, unmatchedResults: a, viewMode: r, setViewMode: i } = Os();
  return K.jsxs("div", { className: "calendar-container", children: [K.jsxs("div", { className: "calendar-header-section d-flex justify-content-between align-items-center", children: [K.jsx("h5", { className: "m-0", children: e.length > 0 ? "\u9762\u8A66\u6642\u9593\u8868" : "\u53EF\u7528\u6642\u6BB5\u7E3D\u89BD" }), e.length > 0 && a && a.interviewees.length > 0 && K.jsxs(ig, { size: "sm", children: [K.jsx(Un, { variant: r === "scheduled" ? "primary" : "outline-primary", onClick: () => i("scheduled"), children: "\u5DF2\u6392\u7A0B" }), K.jsxs(Un, { variant: r === "unmatched" ? "primary" : "outline-primary", onClick: () => i("unmatched"), children: ["\u672A\u6392\u7A0B (", a.interviewees.length, ")"] })] })] }), K.jsx("div", { className: "calendar-main", children: K.jsx("div", { className: "calendar-view", children: K.jsxs("div", { className: "calendar-scroll-container", children: [K.jsx(bS, {}), K.jsx(CS, { scheduledInterviews: e })] }) }) }), K.jsx("div", { className: "calendar-footer", children: K.jsx(OS, { isScheduleView: r === "scheduled" && e.length > 0 }) })] });
};
var Y0 = { exports: {} }, RS = Y0.exports, Hp;
function FS() {
  return Hp || (Hp = 1, function(e, a) {
    (function(r, i) {
      i();
    })(RS, function() {
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
      var u = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof N0 == "object" && N0.global === N0 ? N0 : void 0, o = u.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), x = u.saveAs || (typeof window != "object" || window !== u ? function() {
      } : "download" in HTMLAnchorElement.prototype && !o ? function(d, v, m) {
        var g = u.URL || u.webkitURL, E = document.createElement("a");
        v = v || d.name || "download", E.download = v, E.rel = "noopener", typeof d == "string" ? (E.href = d, E.origin === location.origin ? c(E) : s(E.href) ? i(d, v, m) : c(E, E.target = "_blank")) : (E.href = g.createObjectURL(d), setTimeout(function() {
          g.revokeObjectURL(E.href);
        }, 4e4), setTimeout(function() {
          c(E);
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
        var E = d.type === "application/octet-stream", T = /constructor/i.test(u.HTMLElement) || u.safari, y = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((y || E && T || o) && typeof FileReader < "u") {
          var _ = new FileReader();
          _.onloadend = function() {
            var w = _.result;
            w = y ? w : w.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = w : location = w, g = null;
          }, _.readAsDataURL(d);
        } else {
          var D = u.URL || u.webkitURL, b = D.createObjectURL(d);
          g ? g.location = b : location.href = b, g = null, setTimeout(function() {
            D.revokeObjectURL(b);
          }, 4e4);
        }
      });
      u.saveAs = x.saveAs = x, e.exports = x;
    });
  }(Y0)), Y0.exports;
}
var NS = FS(), q0 = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var MS = q0.exports, jp;
function LS() {
  return jp || (jp = 1, function(e, a) {
    ((r, i) => {
      e.exports = i();
    })(MS, function r() {
      var i = typeof self < "u" ? self : typeof window < "u" ? window : i !== void 0 ? i : {}, s, c = !i.document && !!i.postMessage, u = i.IS_PAPA_WORKER || false, o = {}, x = 0, d = {};
      function v(A) {
        this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, (function(S) {
          var N = V(S);
          N.chunkSize = parseInt(N.chunkSize), S.step || S.chunk || (N.chunkSize = null), this._handle = new y(N), (this._handle.streamer = this)._config = N;
        }).call(this, A), this.parseChunk = function(S, N) {
          var B = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < B) {
            let ne = this._config.newline;
            ne || (U = this._config.quoteChar || '"', ne = this._handle.guessLineEndings(S, U)), S = [...S.split(ne).slice(B)].join(ne);
          }
          this.isFirstChunk && C(this._config.beforeFirstChunk) && (U = this._config.beforeFirstChunk(S)) !== void 0 && (S = U), this.isFirstChunk = false, this._halted = false;
          var B = this._partialLine + S, U = (this._partialLine = "", this._handle.parse(B, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (S = U.meta.cursor, B = (this._finished || (this._partialLine = B.substring(S - this._baseIndex), this._baseIndex = S), U && U.data && (this._rowCount += U.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), u) i.postMessage({ results: U, workerId: d.WORKER_ID, finished: B });
            else if (C(this._config.chunk) && !N) {
              if (this._config.chunk(U, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = true);
              this._completeResults = U = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(U.data), this._completeResults.errors = this._completeResults.errors.concat(U.errors), this._completeResults.meta = U.meta), this._completed || !B || !C(this._config.complete) || U && U.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), B || U && U.meta.paused || this._nextChunk(), U;
          }
          this._halted = true;
        }, this._sendError = function(S) {
          C(this._config.error) ? this._config.error(S) : u && this._config.error && i.postMessage({ workerId: d.WORKER_ID, error: S, finished: false });
        };
      }
      function m(A) {
        var S;
        (A = A || {}).chunkSize || (A.chunkSize = d.RemoteChunkSize), v.call(this, A), this._nextChunk = c ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(N) {
          this._input = N, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (S = new XMLHttpRequest(), this._config.withCredentials && (S.withCredentials = this._config.withCredentials), c || (S.onload = j(this._chunkLoaded, this), S.onerror = j(this._chunkError, this)), S.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !c), this._config.downloadRequestHeaders) {
              var N, B = this._config.downloadRequestHeaders;
              for (N in B) S.setRequestHeader(N, B[N]);
            }
            var U;
            this._config.chunkSize && (U = this._start + this._config.chunkSize - 1, S.setRequestHeader("Range", "bytes=" + this._start + "-" + U));
            try {
              S.send(this._config.downloadRequestBody);
            } catch (ne) {
              this._chunkError(ne.message);
            }
            c && S.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          S.readyState === 4 && (S.status < 200 || 400 <= S.status ? this._chunkError() : (this._start += this._config.chunkSize || S.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((N) => (N = N.getResponseHeader("Content-Range")) !== null ? parseInt(N.substring(N.lastIndexOf("/") + 1)) : -1)(S), this.parseChunk(S.responseText)));
        }, this._chunkError = function(N) {
          N = S.statusText || N, this._sendError(new Error(N));
        };
      }
      function g(A) {
        (A = A || {}).chunkSize || (A.chunkSize = d.LocalChunkSize), v.call(this, A);
        var S, N, B = typeof FileReader < "u";
        this.stream = function(U) {
          this._input = U, N = U.slice || U.webkitSlice || U.mozSlice, B ? ((S = new FileReader()).onload = j(this._chunkLoaded, this), S.onerror = j(this._chunkError, this)) : S = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var U = this._input, ne = (this._config.chunkSize && (ne = Math.min(this._start + this._config.chunkSize, this._input.size), U = N.call(U, this._start, ne)), S.readAsText(U, this._config.encoding));
          B || this._chunkLoaded({ target: { result: ne } });
        }, this._chunkLoaded = function(U) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(U.target.result);
        }, this._chunkError = function() {
          this._sendError(S.error);
        };
      }
      function E(A) {
        var S;
        v.call(this, A = A || {}), this.stream = function(N) {
          return S = N, this._nextChunk();
        }, this._nextChunk = function() {
          var N, B;
          if (!this._finished) return N = this._config.chunkSize, S = N ? (B = S.substring(0, N), S.substring(N)) : (B = S, ""), this._finished = !S, this.parseChunk(B);
        };
      }
      function T(A) {
        v.call(this, A = A || {});
        var S = [], N = true, B = false;
        this.pause = function() {
          v.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          v.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(U) {
          this._input = U, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          B && S.length === 1 && (this._finished = true);
        }, this._nextChunk = function() {
          this._checkIsFinished(), S.length ? this.parseChunk(S.shift()) : N = true;
        }, this._streamData = j(function(U) {
          try {
            S.push(typeof U == "string" ? U : U.toString(this._config.encoding)), N && (N = false, this._checkIsFinished(), this.parseChunk(S.shift()));
          } catch (ne) {
            this._streamError(ne);
          }
        }, this), this._streamError = j(function(U) {
          this._streamCleanUp(), this._sendError(U);
        }, this), this._streamEnd = j(function() {
          this._streamCleanUp(), B = true, this._streamData("");
        }, this), this._streamCleanUp = j(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function y(A) {
        var S, N, B, U, ne = Math.pow(2, 53), ge = -ne, fe = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, J = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, ae = this, we = 0, Q = 0, H = false, re = false, R = [], z = { data: [], errors: [], meta: {} };
        function q(pe) {
          return A.skipEmptyLines === "greedy" ? pe.join("").trim() === "" : pe.length === 1 && pe[0].length === 0;
        }
        function W() {
          if (z && B && (Ae("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + d.DefaultDelimiter + "'"), B = false), A.skipEmptyLines && (z.data = z.data.filter(function(X) {
            return !q(X);
          })), ie()) {
            let X = function(Ge, Le) {
              C(A.transformHeader) && (Ge = A.transformHeader(Ge, Le)), R.push(Ge);
            };
            var De = X;
            if (z) if (Array.isArray(z.data[0])) {
              for (var pe = 0; ie() && pe < z.data.length; pe++) z.data[pe].forEach(X);
              z.data.splice(0, 1);
            } else z.data.forEach(X);
          }
          function ye(X, Ge) {
            for (var Le = A.header ? {} : [], Be = 0; Be < X.length; Be++) {
              var Re = Be, ke = X[Be], ke = ((Ie, Ke) => ((Ze) => (A.dynamicTypingFunction && A.dynamicTyping[Ze] === void 0 && (A.dynamicTyping[Ze] = A.dynamicTypingFunction(Ze)), (A.dynamicTyping[Ze] || A.dynamicTyping) === true))(Ie) ? Ke === "true" || Ke === "TRUE" || Ke !== "false" && Ke !== "FALSE" && (((Ze) => {
                if (fe.test(Ze) && (Ze = parseFloat(Ze), ge < Ze && Ze < ne)) return 1;
              })(Ke) ? parseFloat(Ke) : J.test(Ke) ? new Date(Ke) : Ke === "" ? null : Ke) : Ke)(Re = A.header ? Be >= R.length ? "__parsed_extra" : R[Be] : Re, ke = A.transform ? A.transform(ke, Re) : ke);
              Re === "__parsed_extra" ? (Le[Re] = Le[Re] || [], Le[Re].push(ke)) : Le[Re] = ke;
            }
            return A.header && (Be > R.length ? Ae("FieldMismatch", "TooManyFields", "Too many fields: expected " + R.length + " fields but parsed " + Be, Q + Ge) : Be < R.length && Ae("FieldMismatch", "TooFewFields", "Too few fields: expected " + R.length + " fields but parsed " + Be, Q + Ge)), Le;
          }
          var _e;
          z && (A.header || A.dynamicTyping || A.transform) && (_e = 1, !z.data.length || Array.isArray(z.data[0]) ? (z.data = z.data.map(ye), _e = z.data.length) : z.data = ye(z.data, 0), A.header && z.meta && (z.meta.fields = R), Q += _e);
        }
        function ie() {
          return A.header && R.length === 0;
        }
        function Ae(pe, ye, _e, De) {
          pe = { type: pe, code: ye, message: _e }, De !== void 0 && (pe.row = De), z.errors.push(pe);
        }
        C(A.step) && (U = A.step, A.step = function(pe) {
          z = pe, ie() ? W() : (W(), z.data.length !== 0 && (we += pe.data.length, A.preview && we > A.preview ? N.abort() : (z.data = z.data[0], U(z, ae))));
        }), this.parse = function(pe, ye, _e) {
          var De = A.quoteChar || '"', De = (A.newline || (A.newline = this.guessLineEndings(pe, De)), B = false, A.delimiter ? C(A.delimiter) && (A.delimiter = A.delimiter(pe), z.meta.delimiter = A.delimiter) : ((De = ((X, Ge, Le, Be, Re) => {
            var ke, Ie, Ke, Ze;
            Re = Re || [",", "	", "|", ";", d.RECORD_SEP, d.UNIT_SEP];
            for (var At = 0; At < Re.length; At++) {
              for (var It, Pt = Re[At], it = 0, Ot = 0, st = 0, tt = (Ke = void 0, new D({ comments: Be, delimiter: Pt, newline: Ge, preview: 10 }).parse(X)), rt = 0; rt < tt.data.length; rt++) Le && q(tt.data[rt]) ? st++ : (It = tt.data[rt].length, Ot += It, Ke === void 0 ? Ke = It : 0 < It && (it += Math.abs(It - Ke), Ke = It));
              0 < tt.data.length && (Ot /= tt.data.length - st), (Ie === void 0 || it <= Ie) && (Ze === void 0 || Ze < Ot) && 1.99 < Ot && (Ie = it, ke = Pt, Ze = Ot);
            }
            return { successful: !!(A.delimiter = ke), bestDelimiter: ke };
          })(pe, A.newline, A.skipEmptyLines, A.comments, A.delimitersToGuess)).successful ? A.delimiter = De.bestDelimiter : (B = true, A.delimiter = d.DefaultDelimiter), z.meta.delimiter = A.delimiter), V(A));
          return A.preview && A.header && De.preview++, S = pe, N = new D(De), z = N.parse(S, ye, _e), W(), H ? { meta: { paused: true } } : z || { meta: { paused: false } };
        }, this.paused = function() {
          return H;
        }, this.pause = function() {
          H = true, N.abort(), S = C(A.chunk) ? "" : S.substring(N.getCharIndex());
        }, this.resume = function() {
          ae.streamer._halted ? (H = false, ae.streamer.parseChunk(S, true)) : setTimeout(ae.resume, 3);
        }, this.aborted = function() {
          return re;
        }, this.abort = function() {
          re = true, N.abort(), z.meta.aborted = true, C(A.complete) && A.complete(z), S = "";
        }, this.guessLineEndings = function(X, De) {
          X = X.substring(0, 1048576);
          var De = new RegExp(_(De) + "([^]*?)" + _(De), "gm"), _e = (X = X.replace(De, "")).split("\r"), De = X.split(`
`), X = 1 < De.length && De[0].length < _e[0].length;
          if (_e.length === 1 || X) return `
`;
          for (var Ge = 0, Le = 0; Le < _e.length; Le++) _e[Le][0] === `
` && Ge++;
          return Ge >= _e.length / 2 ? `\r
` : "\r";
        };
      }
      function _(A) {
        return A.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function D(A) {
        var S = (A = A || {}).delimiter, N = A.newline, B = A.comments, U = A.step, ne = A.preview, ge = A.fastMode, fe = null, J = false, ae = A.quoteChar == null ? '"' : A.quoteChar, we = ae;
        if (A.escapeChar !== void 0 && (we = A.escapeChar), (typeof S != "string" || -1 < d.BAD_DELIMITERS.indexOf(S)) && (S = ","), B === S) throw new Error("Comment character same as delimiter");
        B === true ? B = "#" : (typeof B != "string" || -1 < d.BAD_DELIMITERS.indexOf(B)) && (B = false), N !== `
` && N !== "\r" && N !== `\r
` && (N = `
`);
        var Q = 0, H = false;
        this.parse = function(re, R, z) {
          if (typeof re != "string") throw new Error("Input must be a string");
          var q = re.length, W = S.length, ie = N.length, Ae = B.length, pe = C(U), ye = [], _e = [], De = [], X = Q = 0;
          if (!re) return it();
          if (ge || ge !== false && re.indexOf(ae) === -1) {
            for (var Ge = re.split(N), Le = 0; Le < Ge.length; Le++) {
              if (De = Ge[Le], Q += De.length, Le !== Ge.length - 1) Q += N.length;
              else if (z) return it();
              if (!B || De.substring(0, Ae) !== B) {
                if (pe) {
                  if (ye = [], Ze(De.split(S)), Ot(), H) return it();
                } else Ze(De.split(S));
                if (ne && ne <= Le) return ye = ye.slice(0, ne), it(true);
              }
            }
            return it();
          }
          for (var Be = re.indexOf(S, Q), Re = re.indexOf(N, Q), ke = new RegExp(_(we) + _(ae), "g"), Ie = re.indexOf(ae, Q); ; ) if (re[Q] === ae) for (Ie = Q, Q++; ; ) {
            if ((Ie = re.indexOf(ae, Ie + 1)) === -1) return z || _e.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ye.length, index: Q }), It();
            if (Ie === q - 1) return It(re.substring(Q, Ie).replace(ke, ae));
            if (ae === we && re[Ie + 1] === we) Ie++;
            else if (ae === we || Ie === 0 || re[Ie - 1] !== we) {
              Be !== -1 && Be < Ie + 1 && (Be = re.indexOf(S, Ie + 1));
              var Ke = At((Re = Re !== -1 && Re < Ie + 1 ? re.indexOf(N, Ie + 1) : Re) === -1 ? Be : Math.min(Be, Re));
              if (re.substr(Ie + 1 + Ke, W) === S) {
                De.push(re.substring(Q, Ie).replace(ke, ae)), re[Q = Ie + 1 + Ke + W] !== ae && (Ie = re.indexOf(ae, Q)), Be = re.indexOf(S, Q), Re = re.indexOf(N, Q);
                break;
              }
              if (Ke = At(Re), re.substring(Ie + 1 + Ke, Ie + 1 + Ke + ie) === N) {
                if (De.push(re.substring(Q, Ie).replace(ke, ae)), Pt(Ie + 1 + Ke + ie), Be = re.indexOf(S, Q), Ie = re.indexOf(ae, Q), pe && (Ot(), H)) return it();
                if (ne && ye.length >= ne) return it(true);
                break;
              }
              _e.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ye.length, index: Q }), Ie++;
            }
          }
          else if (B && De.length === 0 && re.substring(Q, Q + Ae) === B) {
            if (Re === -1) return it();
            Q = Re + ie, Re = re.indexOf(N, Q), Be = re.indexOf(S, Q);
          } else if (Be !== -1 && (Be < Re || Re === -1)) De.push(re.substring(Q, Be)), Q = Be + W, Be = re.indexOf(S, Q);
          else {
            if (Re === -1) break;
            if (De.push(re.substring(Q, Re)), Pt(Re + ie), pe && (Ot(), H)) return it();
            if (ne && ye.length >= ne) return it(true);
          }
          return It();
          function Ze(st) {
            ye.push(st), X = Q;
          }
          function At(st) {
            var tt = 0;
            return tt = st !== -1 && (st = re.substring(Ie + 1, st)) && st.trim() === "" ? st.length : tt;
          }
          function It(st) {
            return z || (st === void 0 && (st = re.substring(Q)), De.push(st), Q = q, Ze(De), pe && Ot()), it();
          }
          function Pt(st) {
            Q = st, Ze(De), De = [], Re = re.indexOf(N, Q);
          }
          function it(st) {
            if (A.header && !R && ye.length && !J) {
              var tt = ye[0], rt = {}, gt = new Set(tt);
              let Ye = false;
              for (let xt = 0; xt < tt.length; xt++) {
                let Dt = tt[xt];
                if (rt[Dt = C(A.transformHeader) ? A.transformHeader(Dt, xt) : Dt]) {
                  let vt, Tr = rt[Dt];
                  for (; vt = Dt + "_" + Tr, Tr++, gt.has(vt); ) ;
                  gt.add(vt), tt[xt] = vt, rt[Dt]++, Ye = true, (fe = fe === null ? {} : fe)[vt] = Dt;
                } else rt[Dt] = 1, tt[xt] = Dt;
                gt.add(Dt);
              }
              Ye && console.warn("Duplicate headers found and renamed."), J = true;
            }
            return { data: ye, errors: _e, meta: { delimiter: S, linebreak: N, aborted: H, truncated: !!st, cursor: X + (R || 0), renamedHeaders: fe } };
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
      function b(A) {
        var S = A.data, N = o[S.workerId], B = false;
        if (S.error) N.userError(S.error, S.file);
        else if (S.results && S.results.data) {
          var U = { abort: function() {
            B = true, w(S.workerId, { data: [], errors: [], meta: { aborted: true } });
          }, pause: M, resume: M };
          if (C(N.userStep)) {
            for (var ne = 0; ne < S.results.data.length && (N.userStep({ data: S.results.data[ne], errors: S.results.errors, meta: S.results.meta }, U), !B); ne++) ;
            delete S.results;
          } else C(N.userChunk) && (N.userChunk(S.results, U, S.file), delete S.results);
        }
        S.finished && !B && w(S.workerId, S.results);
      }
      function w(A, S) {
        var N = o[A];
        C(N.userComplete) && N.userComplete(S), N.terminate(), delete o[A];
      }
      function M() {
        throw new Error("Not implemented.");
      }
      function V(A) {
        if (typeof A != "object" || A === null) return A;
        var S, N = Array.isArray(A) ? [] : {};
        for (S in A) N[S] = V(A[S]);
        return N;
      }
      function j(A, S) {
        return function() {
          A.apply(S, arguments);
        };
      }
      function C(A) {
        return typeof A == "function";
      }
      return d.parse = function(A, S) {
        var N = (S = S || {}).dynamicTyping || false;
        if (C(N) && (S.dynamicTypingFunction = N, N = {}), S.dynamicTyping = N, S.transform = !!C(S.transform) && S.transform, !S.worker || !d.WORKERS_SUPPORTED) return N = null, d.NODE_STREAM_INPUT, typeof A == "string" ? (A = ((B) => B.charCodeAt(0) !== 65279 ? B : B.slice(1))(A), N = new (S.download ? m : E)(S)) : A.readable === true && C(A.read) && C(A.on) ? N = new T(S) : (i.File && A instanceof File || A instanceof Object) && (N = new g(S)), N.stream(A);
        (N = (() => {
          var B;
          return !!d.WORKERS_SUPPORTED && (B = (() => {
            var U = i.URL || i.webkitURL || null, ne = r.toString();
            return d.BLOB_URL || (d.BLOB_URL = U.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", ne, ")();"], { type: "text/javascript" })));
          })(), (B = new i.Worker(B)).onmessage = b, B.id = x++, o[B.id] = B);
        })()).userStep = S.step, N.userChunk = S.chunk, N.userComplete = S.complete, N.userError = S.error, S.step = C(S.step), S.chunk = C(S.chunk), S.complete = C(S.complete), S.error = C(S.error), delete S.worker, N.postMessage({ input: A, config: S, workerId: N.id });
      }, d.unparse = function(A, S) {
        var N = false, B = true, U = ",", ne = `\r
`, ge = '"', fe = ge + ge, J = false, ae = null, we = false, Q = ((() => {
          if (typeof S == "object") {
            if (typeof S.delimiter != "string" || d.BAD_DELIMITERS.filter(function(R) {
              return S.delimiter.indexOf(R) !== -1;
            }).length || (U = S.delimiter), typeof S.quotes != "boolean" && typeof S.quotes != "function" && !Array.isArray(S.quotes) || (N = S.quotes), typeof S.skipEmptyLines != "boolean" && typeof S.skipEmptyLines != "string" || (J = S.skipEmptyLines), typeof S.newline == "string" && (ne = S.newline), typeof S.quoteChar == "string" && (ge = S.quoteChar), typeof S.header == "boolean" && (B = S.header), Array.isArray(S.columns)) {
              if (S.columns.length === 0) throw new Error("Option columns is empty");
              ae = S.columns;
            }
            S.escapeChar !== void 0 && (fe = S.escapeChar + ge), S.escapeFormulae instanceof RegExp ? we = S.escapeFormulae : typeof S.escapeFormulae == "boolean" && S.escapeFormulae && (we = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(_(ge), "g"));
        if (typeof A == "string" && (A = JSON.parse(A)), Array.isArray(A)) {
          if (!A.length || Array.isArray(A[0])) return H(null, A, J);
          if (typeof A[0] == "object") return H(ae || Object.keys(A[0]), A, J);
        } else if (typeof A == "object") return typeof A.data == "string" && (A.data = JSON.parse(A.data)), Array.isArray(A.data) && (A.fields || (A.fields = A.meta && A.meta.fields || ae), A.fields || (A.fields = Array.isArray(A.data[0]) ? A.fields : typeof A.data[0] == "object" ? Object.keys(A.data[0]) : []), Array.isArray(A.data[0]) || typeof A.data[0] == "object" || (A.data = [A.data])), H(A.fields || [], A.data || [], J);
        throw new Error("Unable to serialize unrecognized input");
        function H(R, z, q) {
          var W = "", ie = (typeof R == "string" && (R = JSON.parse(R)), typeof z == "string" && (z = JSON.parse(z)), Array.isArray(R) && 0 < R.length), Ae = !Array.isArray(z[0]);
          if (ie && B) {
            for (var pe = 0; pe < R.length; pe++) 0 < pe && (W += U), W += re(R[pe], pe);
            0 < z.length && (W += ne);
          }
          for (var ye = 0; ye < z.length; ye++) {
            var _e = (ie ? R : z[ye]).length, De = false, X = ie ? Object.keys(z[ye]).length === 0 : z[ye].length === 0;
            if (q && !ie && (De = q === "greedy" ? z[ye].join("").trim() === "" : z[ye].length === 1 && z[ye][0].length === 0), q === "greedy" && ie) {
              for (var Ge = [], Le = 0; Le < _e; Le++) {
                var Be = Ae ? R[Le] : Le;
                Ge.push(z[ye][Be]);
              }
              De = Ge.join("").trim() === "";
            }
            if (!De) {
              for (var Re = 0; Re < _e; Re++) {
                0 < Re && !X && (W += U);
                var ke = ie && Ae ? R[Re] : Re;
                W += re(z[ye][ke], Re);
              }
              ye < z.length - 1 && (!q || 0 < _e && !X) && (W += ne);
            }
          }
          return W;
        }
        function re(R, z) {
          var q, W;
          return R == null ? "" : R.constructor === Date ? JSON.stringify(R).slice(1, 25) : (W = false, we && typeof R == "string" && we.test(R) && (R = "'" + R, W = true), q = R.toString().replace(Q, fe), (W = W || N === true || typeof N == "function" && N(R, z) || Array.isArray(N) && N[z] || ((ie, Ae) => {
            for (var pe = 0; pe < Ae.length; pe++) if (-1 < ie.indexOf(Ae[pe])) return true;
            return false;
          })(q, d.BAD_DELIMITERS) || -1 < q.indexOf(U) || q.charAt(0) === " " || q.charAt(q.length - 1) === " ") ? ge + q + ge : q);
        }
      }, d.RECORD_SEP = "", d.UNIT_SEP = "", d.BYTE_ORDER_MARK = "\uFEFF", d.BAD_DELIMITERS = ["\r", `
`, '"', d.BYTE_ORDER_MARK], d.WORKERS_SUPPORTED = !c && !!i.Worker, d.NODE_STREAM_INPUT = 1, d.LocalChunkSize = 10485760, d.RemoteChunkSize = 5242880, d.DefaultDelimiter = ",", d.Parser = D, d.ParserHandle = y, d.NetworkStreamer = m, d.FileStreamer = g, d.StringStreamer = E, d.ReadableStreamStreamer = T, i.jQuery && ((s = i.jQuery).fn.parse = function(A) {
        var S = A.config || {}, N = [];
        return this.each(function(ne) {
          if (!(s(this).prop("tagName").toUpperCase() === "INPUT" && s(this).attr("type").toLowerCase() === "file" && i.FileReader) || !this.files || this.files.length === 0) return true;
          for (var ge = 0; ge < this.files.length; ge++) N.push({ file: this.files[ge], inputElem: this, instanceConfig: s.extend({}, S) });
        }), B(), this;
        function B() {
          if (N.length === 0) C(A.complete) && A.complete();
          else {
            var ne, ge, fe, J, ae = N[0];
            if (C(A.before)) {
              var we = A.before(ae.file, ae.inputElem);
              if (typeof we == "object") {
                if (we.action === "abort") return ne = "AbortError", ge = ae.file, fe = ae.inputElem, J = we.reason, void (C(A.error) && A.error({ name: ne }, ge, fe, J));
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
      }), u && (i.onmessage = function(A) {
        A = A.data, d.WORKER_ID === void 0 && A && (d.WORKER_ID = A.workerId), typeof A.input == "string" ? i.postMessage({ workerId: d.WORKER_ID, results: d.parse(A.input, A.config), finished: true }) : (i.File && A.input instanceof File || A.input instanceof Object) && (A = d.parse(A.input, A.config)) && i.postMessage({ workerId: d.WORKER_ID, results: A, finished: true });
      }), (m.prototype = Object.create(v.prototype)).constructor = m, (g.prototype = Object.create(v.prototype)).constructor = g, (E.prototype = Object.create(E.prototype)).constructor = E, (T.prototype = Object.create(v.prototype)).constructor = T, d;
    });
  }(q0)), q0.exports;
}
var BS = LS();
const Ll = bs(BS), US = () => {
  const { scheduledInterviews: e, unmatchedResults: a, interviewers: r, interviewees: i } = Os(), s = (x) => {
    if (!x) return { date: "", time: "" };
    const d = new Date(x), v = d.getMonth() + 1, m = d.getDate(), g = d.getHours().toString().padStart(2, "0"), E = d.getMinutes().toString().padStart(2, "0");
    return { date: `${v}/${m}`, time: `${g}:${E}` };
  }, c = (x, d) => {
    if (!x || !d) return { date: "", time: "" };
    const { date: v, time: m } = s(x), { date: g, time: E } = s(d);
    return { date: v === g ? v : `${v} - ${g}`, time: `${m} ~ ${E}` };
  }, u = (x) => {
    const d = x ? r : i, v = e.filter((m) => m[x ? "interviewers" : "interviewees"].length > 0);
    return d.map((m) => {
      const E = v.filter((y) => y[x ? "interviewers" : "interviewees"].some((_) => _.id === m.id)).map((y) => ({ ...c(y.startTime, y.endTime), id: y.id || -1 })), T = /* @__PURE__ */ new Map();
      return E.length == 1 ? (T.set("date", E[0].date), T.set("time", E[0].time), T.set("id", E[0].id)) : E.forEach((y, _) => {
        const D = y.date, b = y.time, w = y.id;
        T.set(`date_${_ + 1}`, D), T.set(`time_${_ + 1}`, b), T.set(`id_${_ + 1}`, w);
      }), { name: m.name, position: m.position || "", email: m.email || "", timeMap: T };
    });
  }, o = (x) => {
    if (e.length === 0) return;
    let d = "", v = "";
    switch (x) {
      case "interviews":
        const g = e.map((b) => ({ interviewers: b.interviewers.map((w) => w.name).join(", "), interviewees: b.interviewees.map((w) => w.name).join(", "), id: b.id, position: b.interviewees[0].position, ...c(b.startTime, b.endTime) }));
        d = Ll.unparse(g.map((b) => ({ \u65E5\u671F: b.date, \u5834\u6B21\u6642\u9593: b.time, \u9762\u8A66\u7DE8\u865F: b.id || -1, \u7533\u8ACB\u8005\u8EAB\u4EFD: b.position, \u5E79\u90E8: b.interviewers, \u9762\u8A66\u8005: b.interviewees })).sort((b, w) => b.\u65E5\u671F.localeCompare(w.\u65E5\u671F) || b.\u5834\u6B21\u6642\u9593.localeCompare(w.\u5834\u6B21\u6642\u9593) || b.\u9762\u8A66\u7DE8\u865F - w.\u9762\u8A66\u7DE8\u865F)), v = "interview_schedule.csv";
        break;
      case "interviewers":
        const E = u(true), T = E.reduce((b, w) => {
          const { name: M, position: V, timeMap: j } = w;
          return j.forEach((C, A) => {
            const [S, N] = A.split("_");
            if (S === "time" || S === "id") return;
            const B = C, U = j.get(`time_${N}`), ne = j.get(`id_${N}`);
            typeof U == "string" && typeof B == "string" && typeof ne == "number" ? b.push({ name: M, position: V, date: B, time: U, id: ne }) : console.error("Invalid data type for time, date, or id", { time: U, date: B, id: ne });
          }), console.log("acc", b), console.log("timeMap", j), b;
        }, []);
        console.log("flatData", T), console.log("interviewersData", E), d = Ll.unparse(T.map((b) => ({ \u59D3\u540D: b.name, \u8077\u4F4D: b.position, \u65E5\u671F: b.date, \u9762\u8A66\u6642\u9593: b.time, \u9762\u8A66\u7DE8\u865F: b.id })).sort((b, w) => b.\u59D3\u540D.localeCompare(w.\u59D3\u540D))), v = "interviewers_schedule.csv";
        break;
      case "interviewees":
        const y = u(false);
        d = Ll.unparse(y.map((b) => ({ \u59D3\u540D: b.name, \u8077\u4F4D: b.position, Email: b.email, \u65E5\u671F: b.timeMap.get("date"), \u9762\u8A66\u6642\u9593: b.timeMap.get("time"), \u9762\u8A66\u7DE8\u865F: b.timeMap.get("id") })).sort((b, w) => b.\u59D3\u540D.localeCompare(w.\u59D3\u540D))), v = "interviewees_schedule.csv";
        break;
      case "interviewers_stats":
        const D = u(true).map((b) => {
          const { name: w, position: M, timeMap: V } = b;
          return { name: w, position: M, num: V.size };
        });
        d = Ll.unparse(D.map((b) => ({ \u59D3\u540D: b.name, \u8077\u4F4D: b.position, \u5B89\u6392\u5834\u6B21\u6578: b.num })).sort((b, w) => b.\u59D3\u540D.localeCompare(w.\u59D3\u540D))), v = "interviewers_stats.csv";
        break;
    }
    const m = new Blob([d], { type: "text/csv;charset=utf-8" });
    NS.saveAs(m, v);
  };
  return K.jsxs(K.Fragment, { children: [K.jsxs(Ja, { className: "mb-4", children: [K.jsxs(Ja.Header, { className: "d-flex justify-content-between align-items-center", children: [K.jsxs("h5", { className: "mb-0", children: ["\u5DF2\u5B89\u6392\u9762\u8A66 (", e.length, ")"] }), e.length > 0 && K.jsxs(oi, { children: [K.jsx(oi.Toggle, { variant: "primary", size: "sm", id: "dropdown-export", children: "\u532F\u51FA\u6578\u64DA" }), K.jsxs(oi.Menu, { children: [K.jsx(oi.Item, { onClick: () => {
    o("interviews");
  }, children: "\u532F\u51FA\u9762\u8A66\u6578\u64DA" }), K.jsx(oi.Item, { onClick: () => {
    o("interviewers");
  }, children: "\u532F\u51FA\u9762\u8A66\u5B98\u5404\u5834\u6B21" }), K.jsx(oi.Item, { onClick: () => {
    o("interviewers_stats");
  }, children: "\u532F\u51FA\u9762\u8A66\u5B98\u6578\u64DA" }), K.jsx(oi.Item, { onClick: () => {
    o("interviewees");
  }, children: "\u532F\u51FA\u61C9\u8A66\u8005\u6578\u64DA" })] })] })] }), K.jsx(Ja.Body, { children: e.length === 0 ? K.jsx(a4, { variant: "info", children: "\u5C1A\u672A\u5B89\u6392\u4EFB\u4F55\u9762\u8A66\u3002" }) : K.jsxs(zo, { striped: true, bordered: true, hover: true, responsive: true, children: [K.jsx("thead", { children: K.jsxs("tr", { children: [K.jsx("th", { children: "\u65E5\u671F" }), K.jsx("th", { children: "\u6642\u9593" }), K.jsx("th", { children: "\u9762\u8A66\u7DE8\u865F" }), K.jsx("th", { children: "\u9762\u8A66\u8005" }), K.jsx("th", { children: "\u9762\u8A66\u5B98" })] }) }), K.jsx("tbody", { children: e.map((x) => K.jsxs("tr", { children: [K.jsx("td", { children: c(x.startTime, x.endTime).date }), K.jsx("td", { children: c(x.startTime, x.endTime).time }), K.jsx("td", { children: x.id }), K.jsx("td", { children: x.interviewees.map((d) => d.name).join(", ") }), K.jsx("td", { children: x.interviewers.map((d) => d.name).join(", ") })] }, `${x.interviewees[0].id}-${x.startTime}`)) })] }) })] }), a && (a.interviewers.length > 0 || a.interviewees.length > 0) && K.jsxs(Ja, { className: "mb-4", border: "danger", children: [K.jsx(Ja.Header, { className: "bg-danger text-white", children: K.jsx("h5", { className: "mb-0", children: "\u672A\u914D\u5C0D\u540D\u55AE" }) }), K.jsx(Ja.Body, { children: K.jsxs(mi, { children: [K.jsx(en, { md: 6, children: a.interviewees.length > 0 && K.jsxs("div", { children: [K.jsx("h6", { className: "text-danger", children: "\u672A\u914D\u5C0D\u9762\u8A66\u8005\uFF1A" }), K.jsxs(zo, { striped: true, bordered: true, hover: true, size: "sm", className: "border-danger", children: [K.jsx("thead", { children: K.jsx("tr", { children: K.jsx("th", { children: "\u59D3\u540D" }) }) }), K.jsx("tbody", { children: a.interviewees.map((x) => K.jsx("tr", { className: "text-danger", children: K.jsx("td", { children: x.name }) }, x.id)) })] })] }) }), K.jsx(en, { md: 6, children: a.interviewers.length > 0 && K.jsxs("div", { children: [K.jsx("h6", { className: "text-danger", children: "\u672A\u914D\u5C0D\u9762\u8A66\u5B98\uFF1A" }), K.jsxs(zo, { striped: true, bordered: true, hover: true, size: "sm", className: "border-danger", children: [K.jsx("thead", { children: K.jsx("tr", { children: K.jsx("th", { children: "\u59D3\u540D" }) }) }), K.jsx("tbody", { children: a.interviewers.map((x) => K.jsx("tr", { className: "text-danger", children: K.jsx("td", { children: x.name }) }, x.id)) })] })] }) })] }) })] })] });
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
var m2 = 1252, GS = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], $h = { 0: 1252, 1: 65001, 2: 65001, 77: 1e4, 128: 932, 129: 949, 130: 1361, 134: 936, 136: 950, 161: 1253, 162: 1254, 163: 1258, 177: 1255, 178: 1256, 186: 1257, 204: 1251, 222: 874, 238: 1250, 255: 1252, 69: 6969 }, Yh = function(e) {
  GS.indexOf(e) != -1 && (m2 = $h[0] = e);
};
function VS() {
  Yh(1252);
}
var ya = function(e) {
  Yh(e);
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
var Bl = function(e) {
  var a = e.charCodeAt(0), r = e.charCodeAt(1);
  return a == 255 && r == 254 ? XS(e.slice(2)) : a == 254 && r == 255 ? y2(e.slice(2)) : a == 65279 ? e.slice(1) : e;
}, B0 = function(a) {
  return String.fromCharCode(a);
}, Gp = function(a) {
  return String.fromCharCode(a);
}, hh, In = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Vp(e) {
  for (var a = "", r = 0, i = 0, s = 0, c = 0, u = 0, o = 0, x = 0, d = 0; d < e.length; ) r = e.charCodeAt(d++), c = r >> 2, i = e.charCodeAt(d++), u = (r & 3) << 4 | i >> 4, s = e.charCodeAt(d++), o = (i & 15) << 2 | s >> 6, x = s & 63, isNaN(i) ? o = x = 64 : isNaN(s) && (x = 64), a += In.charAt(c) + In.charAt(u) + In.charAt(o) + In.charAt(x);
  return a;
}
function Yr(e) {
  var a = "", r = 0, i = 0, s = 0, c = 0, u = 0, o = 0, x = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var d = 0; d < e.length; ) c = In.indexOf(e.charAt(d++)), u = In.indexOf(e.charAt(d++)), r = c << 2 | u >> 4, a += String.fromCharCode(r), o = In.indexOf(e.charAt(d++)), i = (u & 15) << 4 | o >> 2, o !== 64 && (a += String.fromCharCode(i)), x = In.indexOf(e.charAt(d++)), s = (o & 3) << 6 | x, x !== 64 && (a += String.fromCharCode(s));
  return a;
}
var lt = function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), ki = function() {
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
  return lt ? ki(a, "binary") : a.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function Ci(e) {
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
var Bn = lt ? function(e) {
  return Buffer.concat(e.map(function(a) {
    return Buffer.isBuffer(a) ? a : ki(a);
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
function $S(e) {
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
  return a.push(s.slice(0, r)), Bn(a);
}
var Cr = /\u0000/g, Ul = /[\u0001-\u0006]/g;
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
function YS(e, a) {
  var r = "" + Math.round(e);
  return r.length >= a ? r : Bt("0", a - r.length) + r;
}
function qS(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Bt("0", a - r.length) + r;
}
var $p = Math.pow(2, 32);
function xs(e, a) {
  if (e > $p || e < -$p) return YS(e, a);
  var r = Math.round(e);
  return qS(r, a);
}
function tf(e, a) {
  return a = a || 0, e.length >= 7 + a && (e.charCodeAt(a) | 32) === 103 && (e.charCodeAt(a + 1) | 32) === 101 && (e.charCodeAt(a + 2) | 32) === 110 && (e.charCodeAt(a + 3) | 32) === 101 && (e.charCodeAt(a + 4) | 32) === 114 && (e.charCodeAt(a + 5) | 32) === 97 && (e.charCodeAt(a + 6) | 32) === 108;
}
var Yp = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]], Vo = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];
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
function gi(e, a, r) {
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
function tc(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return a >= -4 && a <= -1 ? r = e.toPrecision(10 + a) : Math.abs(a) <= 9 ? r = e3(e) : a === 10 ? r = e.toFixed(10).substr(0, 12) : r = t3(e), Wh(JS(r.toUpperCase()));
}
function wi(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : tc(e);
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
          return Yp[r.q][0];
        default:
          return Yp[r.q][1];
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
function Hn(e) {
  var a = 3;
  if (e.length <= a) return e;
  for (var r = e.length % a, i = e.substr(0, r); r != e.length; r += a) i += (i.length > 0 ? "," : "") + e.substr(r, a);
  return i;
}
var T2 = /%/g;
function n3(e, a, r) {
  var i = a.replace(T2, ""), s = a.length - i.length;
  return rn(e, i, r * Math.pow(10, 2 * s)) + Bt("%", s);
}
function i3(e, a, r) {
  for (var i = a.length - 1; a.charCodeAt(i - 1) === 44; ) --i;
  return rn(e, a.substr(0, i), r / Math.pow(10, 3 * (a.length - i)));
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
  if (c = a.match(A2)) return s = Kp(r, c[1].length).replace(/^([^\.]+)$/, "$1." + Sr(c[1])).replace(/\.$/, "." + Sr(c[1])).replace(/\.(\d*)$/, function(T, y) {
    return "." + y + Bt("0", Sr(c[1]).length - y.length);
  }), a.indexOf("0.") !== -1 ? s : s.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), c = a.match(/^(0*)\.(#*)$/)) return d + Kp(x, c[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, c[1].length ? "0." : ".");
  if (c = a.match(/^#{1,3},##0(\.?)$/)) return d + Hn(xs(x, 0));
  if (c = a.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + ia(e, a, -r) : Hn("" + (Math.floor(r) + c3(r, c[1].length))) + "." + Ea(Wp(r, c[1].length), c[1].length);
  if (c = a.match(/^#,#*,#0/)) return ia(e, a.replace(/^#,#*,/, ""), r);
  if (c = a.match(/^([0#]+)(\\?-([0#]+))+$/)) return s = gs(ia(e, a.replace(/[\\-]/g, ""), r)), u = 0, gs(gs(a.replace(/\\/g, "")).replace(/[0#]/g, function(T) {
    return u < s.length ? s.charAt(u++) : T === "0" ? "0" : "";
  }));
  if (a.match(C2)) return s = ia(e, "##########", r), "(" + s.substr(0, 3) + ") " + s.substr(3, 3) + "-" + s.substr(6);
  var v = "";
  if (c = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(c[4].length, 7), o = rf(x, Math.pow(10, u) - 1, false), s = "" + d, v = rn("n", c[1], o[1]), v.charAt(v.length - 1) == " " && (v = v.substr(0, v.length - 1) + "0"), s += v + c[2] + "/" + c[3], v = ef(o[2], u), v.length < c[4].length && (v = Sr(c[4].substr(c[4].length - v.length)) + v), s += v, s;
  if (c = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(Math.max(c[1].length, c[4].length), 7), o = rf(x, Math.pow(10, u) - 1, true), d + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? Kh(o[1], u) + c[2] + "/" + c[3] + ef(o[2], u) : Bt(" ", 2 * u + 1 + c[2].length + c[3].length));
  if (c = a.match(/^[#0?]+$/)) return s = xs(r, 0), a.length <= s.length ? s : Sr(a.substr(0, a.length - s.length)) + s;
  if (c = a.match(/^([#0?]+)\.([#0]+)$/)) {
    s = "" + r.toFixed(Math.min(c[2].length, 10)).replace(/([^0])0+$/, "$1"), u = s.indexOf(".");
    var m = a.indexOf(".") - u, g = a.length - s.length - m;
    return Sr(a.substr(0, m) + s + a.substr(a.length - g));
  }
  if (c = a.match(/^00,000\.([#0]*0)$/)) return u = Wp(r, c[1].length), r < 0 ? "-" + ia(e, a, -r) : Hn(f3(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(T) {
    return "00," + (T.length < 3 ? Ea(0, 3 - T.length) : "") + T;
  }) + "." + Ea(u, c[1].length);
  switch (a) {
    case "###,##0.00":
      return ia(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var E = Hn(xs(x, 0));
      return E !== "0" ? d + E : "";
    case "###,###.00":
      return ia(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return ia(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function u3(e, a, r) {
  for (var i = a.length - 1; a.charCodeAt(i - 1) === 44; ) --i;
  return rn(e, a.substr(0, i), r / Math.pow(10, 3 * (a.length - i)));
}
function o3(e, a, r) {
  var i = a.replace(T2, ""), s = a.length - i.length;
  return rn(e, i, r * Math.pow(10, 2 * s)) + Bt("%", s);
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
function Ra(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(k2)) {
    var i = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Ra("n", i, r) : "(" + Ra("n", i, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return u3(e, a, r);
  if (a.indexOf("%") !== -1) return o3(e, a, r);
  if (a.indexOf("E") !== -1) return b2(a, r);
  if (a.charCodeAt(0) === 36) return "$" + Ra(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var s, c, u, o, x = Math.abs(r), d = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return d + Ea(x, a.length);
  if (a.match(/^[#?]+$/)) return s = "" + r, r === 0 && (s = ""), s.length > a.length ? s : Sr(a.substr(0, a.length - s.length)) + s;
  if (c = a.match(S2)) return l3(c, x, d);
  if (a.match(/^#+0+$/)) return d + Ea(x, a.length - a.indexOf("0"));
  if (c = a.match(A2)) return s = ("" + r).replace(/^([^\.]+)$/, "$1." + Sr(c[1])).replace(/\.$/, "." + Sr(c[1])), s = s.replace(/\.(\d*)$/, function(T, y) {
    return "." + y + Bt("0", Sr(c[1]).length - y.length);
  }), a.indexOf("0.") !== -1 ? s : s.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), c = a.match(/^(0*)\.(#*)$/)) return d + ("" + x).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, c[1].length ? "0." : ".");
  if (c = a.match(/^#{1,3},##0(\.?)$/)) return d + Hn("" + x);
  if (c = a.match(/^#,##0\.([#0]*0)$/)) return r < 0 ? "-" + Ra(e, a, -r) : Hn("" + r) + "." + Bt("0", c[1].length);
  if (c = a.match(/^#,#*,#0/)) return Ra(e, a.replace(/^#,#*,/, ""), r);
  if (c = a.match(/^([0#]+)(\\?-([0#]+))+$/)) return s = gs(Ra(e, a.replace(/[\\-]/g, ""), r)), u = 0, gs(gs(a.replace(/\\/g, "")).replace(/[0#]/g, function(T) {
    return u < s.length ? s.charAt(u++) : T === "0" ? "0" : "";
  }));
  if (a.match(C2)) return s = Ra(e, "##########", r), "(" + s.substr(0, 3) + ") " + s.substr(3, 3) + "-" + s.substr(6);
  var v = "";
  if (c = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(c[4].length, 7), o = rf(x, Math.pow(10, u) - 1, false), s = "" + d, v = rn("n", c[1], o[1]), v.charAt(v.length - 1) == " " && (v = v.substr(0, v.length - 1) + "0"), s += v + c[2] + "/" + c[3], v = ef(o[2], u), v.length < c[4].length && (v = Sr(c[4].substr(c[4].length - v.length)) + v), s += v, s;
  if (c = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return u = Math.min(Math.max(c[1].length, c[4].length), 7), o = rf(x, Math.pow(10, u) - 1, true), d + (o[0] || (o[1] ? "" : "0")) + " " + (o[1] ? Kh(o[1], u) + c[2] + "/" + c[3] + ef(o[2], u) : Bt(" ", 2 * u + 1 + c[2].length + c[3].length));
  if (c = a.match(/^[#0?]+$/)) return s = "" + r, a.length <= s.length ? s : Sr(a.substr(0, a.length - s.length)) + s;
  if (c = a.match(/^([#0]+)\.([#0]+)$/)) {
    s = "" + r.toFixed(Math.min(c[2].length, 10)).replace(/([^0])0+$/, "$1"), u = s.indexOf(".");
    var m = a.indexOf(".") - u, g = a.length - s.length - m;
    return Sr(a.substr(0, m) + s + a.substr(a.length - g));
  }
  if (c = a.match(/^00,000\.([#0]*0)$/)) return r < 0 ? "-" + Ra(e, a, -r) : Hn("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(T) {
    return "00," + (T.length < 3 ? Ea(0, 3 - T.length) : "") + T;
  }) + "." + Ea(0, c[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var E = Hn("" + x);
      return E !== "0" ? d + E : "";
    default:
      if (a.match(/\.[0#?]*$/)) return Ra(e, a.slice(0, a.lastIndexOf(".")), r) + Sr(a.slice(a.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + a + "|");
}
function rn(e, a, r) {
  return (r | 0) === r ? Ra(e, a, r) : ia(e, a, r);
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
function Ds(e) {
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
      var E = e.charAt(++u), T = E === "(" || E === ")" ? E : "t";
      s[s.length] = { t: T, v: E }, ++u;
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
        if (d == null && (d = gi(a, r, e.charAt(u + 1) === "2"), d == null)) return "";
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
      if (a < 0 || d == null && (d = gi(a, r), d == null)) return "";
      for (c = o; ++u < e.length && e.charAt(u).toLowerCase() === o; ) c += o;
      o === "m" && x.toLowerCase() === "h" && (o = "M"), o === "h" && (o = g), s[s.length] = { t: o, v: c }, x = o;
      break;
    case "A":
    case "a":
    case "\u4E0A":
      var y = { t: o, v: o };
      if (d == null && (d = gi(a, r)), e.substr(u, 3).toUpperCase() === "A/P" ? (d != null && (y.v = d.H >= 12 ? "P" : "A"), y.t = "T", g = "h", u += 3) : e.substr(u, 5).toUpperCase() === "AM/PM" ? (d != null && (y.v = d.H >= 12 ? "PM" : "AM"), y.t = "T", u += 5, g = "h") : e.substr(u, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (d != null && (y.v = d.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), y.t = "T", u += 5, g = "h") : (y.t = "t", ++u), d == null && y.t === "T") return "";
      s[s.length] = y, x = o;
      break;
    case "[":
      for (c = o; e.charAt(u++) !== "]" && u < e.length; ) c += e.charAt(u);
      if (c.slice(-1) !== "]") throw 'unterminated "[" block: |' + c + "|";
      if (c.match(O2)) {
        if (d == null && (d = gi(a, r), d == null)) return "";
        s[s.length] = { t: "Z", v: c.toLowerCase() }, x = c.charAt(1);
      } else c.indexOf("$") > -1 && (c = (c.match(/\$([^-\[\]]*)/) || [])[1] || "$", Ds(e) || (s[s.length] = { t: "t", v: c }));
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
  var _ = 0, D = 0, b;
  for (u = s.length - 1, x = "t"; u >= 0; --u) switch (s[u].t) {
    case "h":
    case "H":
      s[u].t = g, x = "h", _ < 1 && (_ = 1);
      break;
    case "s":
      (b = s[u].v.match(/\.0+$/)) && (D = Math.max(D, b[0].length - 1)), _ < 3 && (_ = 3);
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
  var w = "", M;
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
      s[u].v = a3(s[u].t.charCodeAt(0), s[u].v, d, D), s[u].t = "t";
      break;
    case "n":
    case "?":
      for (M = u + 1; s[M] != null && ((o = s[M].t) === "?" || o === "D" || (o === " " || o === "t") && s[M + 1] != null && (s[M + 1].t === "?" || s[M + 1].t === "t" && s[M + 1].v === "/") || s[u].t === "(" && (o === " " || o === "n" || o === ")") || o === "t" && (s[M].v === "/" || s[M].v === " " && s[M + 1] != null && s[M + 1].t == "?")); ) s[u].v += s[M].v, s[M] = { v: "", t: ";" }, ++M;
      w += s[u].v, u = M - 1;
      break;
    case "G":
      s[u].t = "t", s[u].v = wi(a, r);
      break;
  }
  var V = "", j, C;
  if (w.length > 0) {
    w.charCodeAt(0) == 40 ? (j = a < 0 && w.charCodeAt(0) === 45 ? -a : a, C = rn("n", w, j)) : (j = a < 0 && i > 1 ? -a : a, C = rn("n", w, j), j < 0 && s[0] && s[0].t == "t" && (C = C.substr(1), s[0].v = "-" + s[0].v)), M = C.length - 1;
    var A = s.length;
    for (u = 0; u < s.length; ++u) if (s[u] != null && s[u].t != "t" && s[u].v.indexOf(".") > -1) {
      A = u;
      break;
    }
    var S = s.length;
    if (A === s.length && C.indexOf("E") === -1) {
      for (u = s.length - 1; u >= 0; --u) s[u] == null || "n?".indexOf(s[u].t) === -1 || (M >= s[u].v.length - 1 ? (M -= s[u].v.length, s[u].v = C.substr(M + 1, s[u].v.length)) : M < 0 ? s[u].v = "" : (s[u].v = C.substr(0, M + 1), M = -1), s[u].t = "t", S = u);
      M >= 0 && S < s.length && (s[S].v = C.substr(0, M + 1) + s[S].v);
    } else if (A !== s.length && C.indexOf("E") === -1) {
      for (M = C.indexOf(".") - 1, u = A; u >= 0; --u) if (!(s[u] == null || "n?".indexOf(s[u].t) === -1)) {
        for (v = s[u].v.indexOf(".") > -1 && u === A ? s[u].v.indexOf(".") - 1 : s[u].v.length - 1, V = s[u].v.substr(v + 1); v >= 0; --v) M >= 0 && (s[u].v.charAt(v) === "0" || s[u].v.charAt(v) === "#") && (V = C.charAt(M--) + V);
        s[u].v = V, s[u].t = "t", S = u;
      }
      for (M >= 0 && S < s.length && (s[S].v = C.substr(0, M + 1) + s[S].v), M = C.indexOf(".") + 1, u = A; u < s.length; ++u) if (!(s[u] == null || "n?(".indexOf(s[u].t) === -1 && u !== A)) {
        for (v = s[u].v.indexOf(".") > -1 && u === A ? s[u].v.indexOf(".") + 1 : 0, V = s[u].v.substr(0, v); v < s[u].v.length; ++v) M < C.length && (V += C.charAt(M++));
        s[u].v = V, s[u].t = "t", S = u;
      }
    }
  }
  for (u = 0; u < s.length; ++u) s[u] != null && "n?".indexOf(s[u].t) > -1 && (j = i > 1 && a < 0 && u > 0 && s[u - 1].v === "-" ? -a : a, s[u].v = rn(s[u].t, s[u].v, j), s[u].t = "t");
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
  if (tf(i, 0)) return wi(a, r);
  a instanceof Date && (a = _2(a, r.date1904));
  var s = x3(i, a);
  if (tf(s[1])) return wi(a, r);
  if (a === true) a = "TRUE";
  else if (a === false) a = "FALSE";
  else if (a === "" || a == null) return "";
  return d3(s[1], a, r, s[0]);
}
function Ei(e, a) {
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
function D2() {
  We = KS();
}
var v3 = { 5: '"$"#,##0_);\\("$"#,##0\\)', 6: '"$"#,##0_);[Red]\\("$"#,##0\\)', 7: '"$"#,##0.00_);\\("$"#,##0.00\\)', 8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 23: "General", 24: "General", 25: "General", 26: "General", 27: "m/d/yy", 28: "m/d/yy", 29: "m/d/yy", 30: "m/d/yy", 31: "m/d/yy", 32: "h:mm:ss", 33: "h:mm:ss", 34: "h:mm:ss", 35: "h:mm:ss", 36: "m/d/yy", 41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)', 42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)', 43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)', 44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)', 50: "m/d/yy", 51: "m/d/yy", 52: "m/d/yy", 53: "m/d/yy", 54: "m/d/yy", 55: "m/d/yy", 56: "m/d/yy", 57: "m/d/yy", 58: "m/d/yy", 59: "0", 60: "0.00", 61: "#,##0", 62: "#,##0.00", 63: '"$"#,##0_);\\("$"#,##0\\)', 64: '"$"#,##0_);[Red]\\("$"#,##0\\)', 65: '"$"#,##0.00_);\\("$"#,##0.00\\)', 66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', 67: "0%", 68: "0.00%", 69: "# ?/?", 70: "# ??/??", 71: "m/d/yy", 72: "m/d/yy", 73: "d-mmm-yy", 74: "d-mmm", 75: "mmm-yy", 76: "h:mm", 77: "h:mm:ss", 78: "m/d/yy h:mm", 79: "mm:ss", 80: "[h]:mm:ss", 81: "mmss.0" }, R2 = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function p3(e) {
  var a = typeof e == "number" ? We[e] : e;
  return a = a.replace(R2, "(\\d+)"), new RegExp("^" + a + "$");
}
function m3(e, a, r) {
  var i = -1, s = -1, c = -1, u = -1, o = -1, x = -1;
  (a.match(R2) || []).forEach(function(m, g) {
    var E = parseInt(r[g + 1], 10);
    switch (m.toLowerCase().charAt(0)) {
      case "y":
        i = E;
        break;
      case "d":
        c = E;
        break;
      case "h":
        u = E;
        break;
      case "s":
        x = E;
        break;
      case "m":
        u >= 0 ? o = E : s = E;
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
    for (var C = 0, A = new Array(256), S = 0; S != 256; ++S) C = S, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, C = C & 1 ? -306674912 ^ C >>> 1 : C >>> 1, A[S] = C;
    return typeof Int32Array < "u" ? new Int32Array(A) : A;
  }
  var r = a();
  function i(C) {
    var A = 0, S = 0, N = 0, B = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (N = 0; N != 256; ++N) B[N] = C[N];
    for (N = 0; N != 256; ++N) for (S = C[N], A = 256 + N; A < 4096; A += 256) S = B[A] = S >>> 8 ^ C[S & 255];
    var U = [];
    for (N = 1; N != 16; ++N) U[N - 1] = typeof Int32Array < "u" ? B.subarray(N * 256, N * 256 + 256) : B.slice(N * 256, N * 256 + 256);
    return U;
  }
  var s = i(r), c = s[0], u = s[1], o = s[2], x = s[3], d = s[4], v = s[5], m = s[6], g = s[7], E = s[8], T = s[9], y = s[10], _ = s[11], D = s[12], b = s[13], w = s[14];
  function M(C, A) {
    for (var S = A ^ -1, N = 0, B = C.length; N < B; ) S = S >>> 8 ^ r[(S ^ C.charCodeAt(N++)) & 255];
    return ~S;
  }
  function V(C, A) {
    for (var S = A ^ -1, N = C.length - 15, B = 0; B < N; ) S = w[C[B++] ^ S & 255] ^ b[C[B++] ^ S >> 8 & 255] ^ D[C[B++] ^ S >> 16 & 255] ^ _[C[B++] ^ S >>> 24] ^ y[C[B++]] ^ T[C[B++]] ^ E[C[B++]] ^ g[C[B++]] ^ m[C[B++]] ^ v[C[B++]] ^ d[C[B++]] ^ x[C[B++]] ^ o[C[B++]] ^ u[C[B++]] ^ c[C[B++]] ^ r[C[B++]];
    for (N += 15; B < N; ) S = S >>> 8 ^ r[(S ^ C[B++]) & 255];
    return ~S;
  }
  function j(C, A) {
    for (var S = A ^ -1, N = 0, B = C.length, U = 0, ne = 0; N < B; ) U = C.charCodeAt(N++), U < 128 ? S = S >>> 8 ^ r[(S ^ U) & 255] : U < 2048 ? (S = S >>> 8 ^ r[(S ^ (192 | U >> 6 & 31)) & 255], S = S >>> 8 ^ r[(S ^ (128 | U & 63)) & 255]) : U >= 55296 && U < 57344 ? (U = (U & 1023) + 64, ne = C.charCodeAt(N++) & 1023, S = S >>> 8 ^ r[(S ^ (240 | U >> 8 & 7)) & 255], S = S >>> 8 ^ r[(S ^ (128 | U >> 2 & 63)) & 255], S = S >>> 8 ^ r[(S ^ (128 | ne >> 6 & 15 | (U & 3) << 4)) & 255], S = S >>> 8 ^ r[(S ^ (128 | ne & 63)) & 255]) : (S = S >>> 8 ^ r[(S ^ (224 | U >> 12 & 15)) & 255], S = S >>> 8 ^ r[(S ^ (128 | U >> 6 & 63)) & 255], S = S >>> 8 ^ r[(S ^ (128 | U & 63)) & 255]);
    return ~S;
  }
  return e.table = r, e.bstr = M, e.buf = V, e.str = j, e;
}(), ft = function() {
  var a = {};
  a.version = "1.2.1";
  function r(O, G) {
    for (var L = O.split("/"), I = G.split("/"), P = 0, Y = 0, oe = Math.min(L.length, I.length); P < oe; ++P) {
      if (Y = L[P].length - I[P].length) return Y;
      if (L[P] != I[P]) return L[P] < I[P] ? -1 : 1;
    }
    return L.length - I.length;
  }
  function i(O) {
    if (O.charAt(O.length - 1) == "/") return O.slice(0, -1).indexOf("/") === -1 ? O : i(O.slice(0, -1));
    var G = O.lastIndexOf("/");
    return G === -1 ? O : O.slice(0, G + 1);
  }
  function s(O) {
    if (O.charAt(O.length - 1) == "/") return s(O.slice(0, -1));
    var G = O.lastIndexOf("/");
    return G === -1 ? O : O.slice(G + 1);
  }
  function c(O, G) {
    typeof G == "string" && (G = new Date(G));
    var L = G.getHours();
    L = L << 6 | G.getMinutes(), L = L << 5 | G.getSeconds() >>> 1, O.write_shift(2, L);
    var I = G.getFullYear() - 1980;
    I = I << 4 | G.getMonth() + 1, I = I << 5 | G.getDate(), O.write_shift(2, I);
  }
  function u(O) {
    var G = O.read_shift(2) & 65535, L = O.read_shift(2) & 65535, I = /* @__PURE__ */ new Date(), P = L & 31;
    L >>>= 5;
    var Y = L & 15;
    L >>>= 4, I.setMilliseconds(0), I.setFullYear(L + 1980), I.setMonth(Y - 1), I.setDate(P);
    var oe = G & 31;
    G >>>= 5;
    var me = G & 63;
    return G >>>= 6, I.setHours(G), I.setMinutes(me), I.setSeconds(oe << 1), I;
  }
  function o(O) {
    ur(O, 0);
    for (var G = {}, L = 0; O.l <= O.length - 4; ) {
      var I = O.read_shift(2), P = O.read_shift(2), Y = O.l + P, oe = {};
      switch (I) {
        case 21589:
          L = O.read_shift(1), L & 1 && (oe.mtime = O.read_shift(4)), P > 5 && (L & 2 && (oe.atime = O.read_shift(4)), L & 4 && (oe.ctime = O.read_shift(4))), oe.mtime && (oe.mt = new Date(oe.mtime * 1e3));
          break;
      }
      O.l = Y, G[I] = oe;
    }
    return G;
  }
  var x;
  function d() {
    return x || (x = {});
  }
  function v(O, G) {
    if (O[0] == 80 && O[1] == 75) return Ms(O, G);
    if ((O[0] | 32) == 109 && (O[1] | 32) == 105) return _f(O, G);
    if (O.length < 512) throw new Error("CFB file size " + O.length + " < 512");
    var L = 3, I = 512, P = 0, Y = 0, oe = 0, me = 0, le = 0, he = [], xe = O.slice(0, 512);
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
        if (Ce[1] == 0) return Ms(O, G);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + L);
    }
    I !== 512 && (xe = O.slice(0, I), ur(xe, 28));
    var Oe = O.slice(0, I);
    g(xe, L);
    var Ne = xe.read_shift(4, "i");
    if (L === 3 && Ne !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + Ne);
    xe.l += 4, oe = xe.read_shift(4, "i"), xe.l += 4, xe.chk("00100000", "Mini Stream Cutoff Size: "), me = xe.read_shift(4, "i"), P = xe.read_shift(4, "i"), le = xe.read_shift(4, "i"), Y = xe.read_shift(4, "i");
    for (var be = -1, Fe = 0; Fe < 109 && (be = xe.read_shift(4, "i"), !(be < 0)); ++Fe) he[Fe] = be;
    var Xe = E(O, I);
    _(le, Y, Xe, I, he);
    var yt = b(Xe, oe, he, I);
    yt[oe].name = "!Directory", P > 0 && me !== ne && (yt[me].name = "!MiniFAT"), yt[he[0]].name = "!FAT", yt.fat_addrs = he, yt.ssz = I;
    var Et = {}, kt = [], Ia = [], on = [];
    w(oe, yt, Xe, kt, P, Et, Ia, me), T(Ia, on, kt), kt.shift();
    var qr = { FileIndex: Ia, FullPaths: on };
    return G && G.raw && (qr.raw = { header: Oe, sectors: Xe }), qr;
  }
  function m(O) {
    if (O[O.l] == 80 && O[O.l + 1] == 75) return [0, 0];
    O.chk(ge, "Header Signature: "), O.l += 16;
    var G = O.read_shift(2, "u");
    return [O.read_shift(2, "u"), G];
  }
  function g(O, G) {
    var L = 9;
    switch (O.l += 2, L = O.read_shift(2)) {
      case 9:
        if (G != 3) throw new Error("Sector Shift: Expected 9 saw " + L);
        break;
      case 12:
        if (G != 4) throw new Error("Sector Shift: Expected 12 saw " + L);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + L);
    }
    O.chk("0600", "Mini Sector Shift: "), O.chk("000000000000", "Reserved: ");
  }
  function E(O, G) {
    for (var L = Math.ceil(O.length / G) - 1, I = [], P = 1; P < L; ++P) I[P - 1] = O.slice(P * G, (P + 1) * G);
    return I[L - 1] = O.slice(L * G), I;
  }
  function T(O, G, L) {
    for (var I = 0, P = 0, Y = 0, oe = 0, me = 0, le = L.length, he = [], xe = []; I < le; ++I) he[I] = xe[I] = I, G[I] = L[I];
    for (; me < xe.length; ++me) I = xe[me], P = O[I].L, Y = O[I].R, oe = O[I].C, he[I] === I && (P !== -1 && he[P] !== P && (he[I] = he[P]), Y !== -1 && he[Y] !== Y && (he[I] = he[Y])), oe !== -1 && (he[oe] = I), P !== -1 && I != he[I] && (he[P] = he[I], xe.lastIndexOf(P) < me && xe.push(P)), Y !== -1 && I != he[I] && (he[Y] = he[I], xe.lastIndexOf(Y) < me && xe.push(Y));
    for (I = 1; I < le; ++I) he[I] === I && (Y !== -1 && he[Y] !== Y ? he[I] = he[Y] : P !== -1 && he[P] !== P && (he[I] = he[P]));
    for (I = 1; I < le; ++I) if (O[I].type !== 0) {
      if (me = I, me != he[me]) do
        me = he[me], G[I] = G[me] + "/" + G[I];
      while (me !== 0 && he[me] !== -1 && me != he[me]);
      he[I] = -1;
    }
    for (G[0] += "/", I = 1; I < le; ++I) O[I].type !== 2 && (G[I] += "/");
  }
  function y(O, G, L) {
    for (var I = O.start, P = O.size, Y = [], oe = I; L && P > 0 && oe >= 0; ) Y.push(G.slice(oe * U, oe * U + U)), P -= U, oe = vi(L, oe * 4);
    return Y.length === 0 ? Wt(0) : Bn(Y).slice(0, O.size);
  }
  function _(O, G, L, I, P) {
    var Y = ne;
    if (O === ne) {
      if (G !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (O !== -1) {
      var oe = L[O], me = (I >>> 2) - 1;
      if (!oe) return;
      for (var le = 0; le < me && (Y = vi(oe, le * 4)) !== ne; ++le) P.push(Y);
      _(vi(oe, I - 4), G - 1, L, I, P);
    }
  }
  function D(O, G, L, I, P) {
    var Y = [], oe = [];
    P || (P = []);
    var me = I - 1, le = 0, he = 0;
    for (le = G; le >= 0; ) {
      P[le] = true, Y[Y.length] = le, oe.push(O[le]);
      var xe = L[Math.floor(le * 4 / I)];
      if (he = le * 4 & me, I < 4 + he) throw new Error("FAT boundary crossed: " + le + " 4 " + I);
      if (!O[xe]) break;
      le = vi(O[xe], he);
    }
    return { nodes: Y, data: cm([oe]) };
  }
  function b(O, G, L, I) {
    var P = O.length, Y = [], oe = [], me = [], le = [], he = I - 1, xe = 0, Ce = 0, Oe = 0, Ne = 0;
    for (xe = 0; xe < P; ++xe) if (me = [], Oe = xe + G, Oe >= P && (Oe -= P), !oe[Oe]) {
      le = [];
      var be = [];
      for (Ce = Oe; Ce >= 0; ) {
        be[Ce] = true, oe[Ce] = true, me[me.length] = Ce, le.push(O[Ce]);
        var Fe = L[Math.floor(Ce * 4 / I)];
        if (Ne = Ce * 4 & he, I < 4 + Ne) throw new Error("FAT boundary crossed: " + Ce + " 4 " + I);
        if (!O[Fe] || (Ce = vi(O[Fe], Ne), be[Ce])) break;
      }
      Y[Oe] = { nodes: me, data: cm([le]) };
    }
    return Y;
  }
  function w(O, G, L, I, P, Y, oe, me) {
    for (var le = 0, he = I.length ? 2 : 0, xe = G[O].data, Ce = 0, Oe = 0, Ne; Ce < xe.length; Ce += 128) {
      var be = xe.slice(Ce, Ce + 128);
      ur(be, 64), Oe = be.read_shift(2), Ne = td(be, 0, Oe - he), I.push(Ne);
      var Fe = { name: Ne, type: be.read_shift(1), color: be.read_shift(1), L: be.read_shift(4, "i"), R: be.read_shift(4, "i"), C: be.read_shift(4, "i"), clsid: be.read_shift(16), state: be.read_shift(4, "i"), start: 0, size: 0 }, Xe = be.read_shift(2) + be.read_shift(2) + be.read_shift(2) + be.read_shift(2);
      Xe !== 0 && (Fe.ct = M(be, be.l - 8));
      var yt = be.read_shift(2) + be.read_shift(2) + be.read_shift(2) + be.read_shift(2);
      yt !== 0 && (Fe.mt = M(be, be.l - 8)), Fe.start = be.read_shift(4, "i"), Fe.size = be.read_shift(4, "i"), Fe.size < 0 && Fe.start < 0 && (Fe.size = Fe.type = 0, Fe.start = ne, Fe.name = ""), Fe.type === 5 ? (le = Fe.start, P > 0 && le !== ne && (G[le].name = "!StreamData")) : Fe.size >= 4096 ? (Fe.storage = "fat", G[Fe.start] === void 0 && (G[Fe.start] = D(L, Fe.start, G.fat_addrs, G.ssz)), G[Fe.start].name = Fe.name, Fe.content = G[Fe.start].data.slice(0, Fe.size)) : (Fe.storage = "minifat", Fe.size < 0 ? Fe.size = 0 : le !== ne && Fe.start !== ne && G[le] && (Fe.content = y(Fe, G[le].data, (G[me] || {}).data))), Fe.content && ur(Fe.content, 0), Y[Ne] = Fe, oe.push(Fe);
    }
  }
  function M(O, G) {
    return new Date((Vr(O, G + 4) / 1e7 * Math.pow(2, 32) + Vr(O, G) / 1e7 - 11644473600) * 1e3);
  }
  function V(O, G) {
    return d(), v(x.readFileSync(O), G);
  }
  function j(O, G) {
    var L = G && G.type;
    switch (L || lt && Buffer.isBuffer(O) && (L = "buffer"), L || "base64") {
      case "file":
        return V(O, G);
      case "base64":
        return v(ga(Yr(O)), G);
      case "binary":
        return v(ga(O), G);
    }
    return v(O, G);
  }
  function C(O, G) {
    var L = G || {}, I = L.root || "Root Entry";
    if (O.FullPaths || (O.FullPaths = []), O.FileIndex || (O.FileIndex = []), O.FullPaths.length !== O.FileIndex.length) throw new Error("inconsistent CFB structure");
    O.FullPaths.length === 0 && (O.FullPaths[0] = I + "/", O.FileIndex[0] = { name: I, type: 5 }), L.CLSID && (O.FileIndex[0].clsid = L.CLSID), A(O);
  }
  function A(O) {
    var G = "Sh33tJ5";
    if (!ft.find(O, "/" + G)) {
      var L = Wt(4);
      L[0] = 55, L[1] = L[3] = 50, L[2] = 54, O.FileIndex.push({ name: G, type: 2, content: L, size: 4, L: 69, R: 69, C: 69 }), O.FullPaths.push(O.FullPaths[0] + G), S(O);
    }
  }
  function S(O, G) {
    C(O);
    for (var L = false, I = false, P = O.FullPaths.length - 1; P >= 0; --P) {
      var Y = O.FileIndex[P];
      switch (Y.type) {
        case 0:
          I ? L = true : (O.FileIndex.pop(), O.FullPaths.pop());
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
      for (P = 0; P < O.FullPaths.length; ++P) le[O.FullPaths[P]] = true, O.FileIndex[P].type !== 0 && he.push([O.FullPaths[P], O.FileIndex[P]]);
      for (P = 0; P < he.length; ++P) {
        var xe = i(he[P][0]);
        I = le[xe], I || (he.push([xe, { name: s(xe).replace("/", ""), type: 1, clsid: J, ct: oe, mt: oe, content: null }]), le[xe] = true);
      }
      for (he.sort(function(Ne, be) {
        return r(Ne[0], be[0]);
      }), O.FullPaths = [], O.FileIndex = [], P = 0; P < he.length; ++P) O.FullPaths[P] = he[P][0], O.FileIndex[P] = he[P][1];
      for (P = 0; P < he.length; ++P) {
        var Ce = O.FileIndex[P], Oe = O.FullPaths[P];
        if (Ce.name = s(Oe).replace("/", ""), Ce.L = Ce.R = Ce.C = -(Ce.color = 1), Ce.size = Ce.content ? Ce.content.length : 0, Ce.start = 0, Ce.clsid = Ce.clsid || J, P === 0) Ce.C = he.length > 1 ? 1 : -1, Ce.size = 0, Ce.type = 5;
        else if (Oe.slice(-1) == "/") {
          for (me = P + 1; me < he.length && i(O.FullPaths[me]) != Oe; ++me) ;
          for (Ce.C = me >= he.length ? -1 : me, me = P + 1; me < he.length && i(O.FullPaths[me]) != i(Oe); ++me) ;
          Ce.R = me >= he.length ? -1 : me, Ce.type = 1;
        } else i(O.FullPaths[P + 1] || "") == i(Oe) && (Ce.R = P + 1), Ce.type = 2;
      }
    }
  }
  function N(O, G) {
    var L = G || {};
    if (L.fileType == "mad") return Sa(O, L);
    switch (S(O), L.fileType) {
      case "zip":
        return Yn(O, L);
    }
    var I = function(Ne) {
      for (var be = 0, Fe = 0, Xe = 0; Xe < Ne.FileIndex.length; ++Xe) {
        var yt = Ne.FileIndex[Xe];
        if (yt.content) {
          var Et = yt.content.length;
          Et > 0 && (Et < 4096 ? be += Et + 63 >> 6 : Fe += Et + 511 >> 9);
        }
      }
      for (var kt = Ne.FullPaths.length + 3 >> 2, Ia = be + 7 >> 3, on = be + 127 >> 7, qr = Ia + Fe + kt + on, oa = qr + 127 >> 7, qn = oa <= 109 ? 0 : Math.ceil((oa - 109) / 127); qr + oa + qn + 127 >> 7 > oa; ) qn = ++oa <= 109 ? 0 : Math.ceil((oa - 109) / 127);
      var ha = [1, qn, oa, on, kt, Fe, be, 0];
      return Ne.FileIndex[0].size = be << 6, ha[7] = (Ne.FileIndex[0].start = ha[0] + ha[1] + ha[2] + ha[3] + ha[4] + ha[5]) + (ha[6] + 7 >> 3), ha;
    }(O), P = Wt(I[7] << 9), Y = 0, oe = 0;
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
    for (var le = 0, he = 0, xe = O.FileIndex[0]; le < O.FileIndex.length; ++le) xe = O.FileIndex[le], xe.content && (he = xe.content.length, !(he < 4096) && (xe.start = oe, me(he + 511 >> 9)));
    for (me(I[6] + 7 >> 3); P.l & 511; ) P.write_shift(-4, ae.ENDOFCHAIN);
    for (oe = Y = 0, le = 0; le < O.FileIndex.length; ++le) xe = O.FileIndex[le], xe.content && (he = xe.content.length, !(!he || he >= 4096) && (xe.start = oe, me(he + 63 >> 6)));
    for (; P.l & 511; ) P.write_shift(-4, ae.ENDOFCHAIN);
    for (Y = 0; Y < I[4] << 2; ++Y) {
      var Ce = O.FullPaths[Y];
      if (!Ce || Ce.length === 0) {
        for (le = 0; le < 17; ++le) P.write_shift(4, 0);
        for (le = 0; le < 3; ++le) P.write_shift(4, -1);
        for (le = 0; le < 12; ++le) P.write_shift(4, 0);
        continue;
      }
      xe = O.FileIndex[Y], Y === 0 && (xe.start = xe.size ? xe.start - 1 : ne);
      var Oe = Y === 0 && L.root || xe.name;
      if (he = 2 * (Oe.length + 1), P.write_shift(64, Oe, "utf16le"), P.write_shift(2, he), P.write_shift(1, xe.type), P.write_shift(1, xe.color), P.write_shift(-4, xe.L), P.write_shift(-4, xe.R), P.write_shift(-4, xe.C), xe.clsid) P.write_shift(16, xe.clsid, "hex");
      else for (le = 0; le < 4; ++le) P.write_shift(4, 0);
      P.write_shift(4, xe.state || 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, 0), P.write_shift(4, xe.start), P.write_shift(4, xe.size), P.write_shift(4, 0);
    }
    for (Y = 1; Y < O.FileIndex.length; ++Y) if (xe = O.FileIndex[Y], xe.size >= 4096) if (P.l = xe.start + 1 << 9, lt && Buffer.isBuffer(xe.content)) xe.content.copy(P, P.l, 0, xe.size), P.l += xe.size + 511 & -512;
    else {
      for (le = 0; le < xe.size; ++le) P.write_shift(1, xe.content[le]);
      for (; le & 511; ++le) P.write_shift(1, 0);
    }
    for (Y = 1; Y < O.FileIndex.length; ++Y) if (xe = O.FileIndex[Y], xe.size > 0 && xe.size < 4096) if (lt && Buffer.isBuffer(xe.content)) xe.content.copy(P, P.l, 0, xe.size), P.l += xe.size + 63 & -64;
    else {
      for (le = 0; le < xe.size; ++le) P.write_shift(1, xe.content[le]);
      for (; le & 63; ++le) P.write_shift(1, 0);
    }
    if (lt) P.l = P.length;
    else for (; P.l < P.length; ) P.write_shift(1, 0);
    return P;
  }
  function B(O, G) {
    var L = O.FullPaths.map(function(le) {
      return le.toUpperCase();
    }), I = L.map(function(le) {
      var he = le.split("/");
      return he[he.length - (le.slice(-1) == "/" ? 2 : 1)];
    }), P = false;
    G.charCodeAt(0) === 47 ? (P = true, G = L[0].slice(0, -1) + G) : P = G.indexOf("/") !== -1;
    var Y = G.toUpperCase(), oe = P === true ? L.indexOf(Y) : I.indexOf(Y);
    if (oe !== -1) return O.FileIndex[oe];
    var me = !Y.match(Ul);
    for (Y = Y.replace(Cr, ""), me && (Y = Y.replace(Ul, "!")), oe = 0; oe < L.length; ++oe) if ((me ? L[oe].replace(Ul, "!") : L[oe]).replace(Cr, "") == Y || (me ? I[oe].replace(Ul, "!") : I[oe]).replace(Cr, "") == Y) return O.FileIndex[oe];
    return null;
  }
  var U = 64, ne = -2, ge = "d0cf11e0a1b11ae1", fe = [208, 207, 17, 224, 161, 177, 26, 225], J = "00000000000000000000000000000000", ae = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: ne, FREESECT: -1, HEADER_SIGNATURE: ge, HEADER_MINOR_VERSION: "3e00", MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: J, EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"] };
  function we(O, G, L) {
    d();
    var I = N(O, L);
    x.writeFileSync(G, I);
  }
  function Q(O) {
    for (var G = new Array(O.length), L = 0; L < O.length; ++L) G[L] = String.fromCharCode(O[L]);
    return G.join("");
  }
  function H(O, G) {
    var L = N(O, G);
    switch (G && G.type || "buffer") {
      case "file":
        return d(), x.writeFileSync(G.filename, L), L;
      case "binary":
        return typeof L == "string" ? L : Q(L);
      case "base64":
        return Vp(typeof L == "string" ? L : Q(L));
      case "buffer":
        if (lt) return Buffer.isBuffer(L) ? L : ki(L);
      case "array":
        return typeof L == "string" ? ga(L) : L;
    }
    return L;
  }
  var re;
  function R(O) {
    try {
      var G = O.InflateRaw, L = new G();
      if (L._processChunk(new Uint8Array([3, 0]), L._finishFlushFlag), L.bytesRead) re = O;
      else throw new Error("zlib does not expose bytesRead");
    } catch (I) {
      console.error("cannot use native zlib: " + (I.message || I));
    }
  }
  function z(O, G) {
    if (!re) return _c(O, G);
    var L = re.InflateRaw, I = new L(), P = I._processChunk(O.slice(O.l), I._finishFlushFlag);
    return O.l += I.bytesRead, P;
  }
  function q(O) {
    return re ? re.deflateRawSync(O) : Ye(O);
  }
  var W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], ie = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], Ae = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function pe(O) {
    var G = (O << 1 | O << 11) & 139536 | (O << 5 | O << 15) & 558144;
    return (G >> 16 | G >> 8 | G) & 255;
  }
  for (var ye = typeof Uint8Array < "u", _e = ye ? new Uint8Array(256) : [], De = 0; De < 256; ++De) _e[De] = pe(De);
  function X(O, G) {
    var L = _e[O & 255];
    return G <= 8 ? L >>> 8 - G : (L = L << 8 | _e[O >> 8 & 255], G <= 16 ? L >>> 16 - G : (L = L << 8 | _e[O >> 16 & 255], L >>> 24 - G));
  }
  function Ge(O, G) {
    var L = G & 7, I = G >>> 3;
    return (O[I] | (L <= 6 ? 0 : O[I + 1] << 8)) >>> L & 3;
  }
  function Le(O, G) {
    var L = G & 7, I = G >>> 3;
    return (O[I] | (L <= 5 ? 0 : O[I + 1] << 8)) >>> L & 7;
  }
  function Be(O, G) {
    var L = G & 7, I = G >>> 3;
    return (O[I] | (L <= 4 ? 0 : O[I + 1] << 8)) >>> L & 15;
  }
  function Re(O, G) {
    var L = G & 7, I = G >>> 3;
    return (O[I] | (L <= 3 ? 0 : O[I + 1] << 8)) >>> L & 31;
  }
  function ke(O, G) {
    var L = G & 7, I = G >>> 3;
    return (O[I] | (L <= 1 ? 0 : O[I + 1] << 8)) >>> L & 127;
  }
  function Ie(O, G, L) {
    var I = G & 7, P = G >>> 3, Y = (1 << L) - 1, oe = O[P] >>> I;
    return L < 8 - I || (oe |= O[P + 1] << 8 - I, L < 16 - I) || (oe |= O[P + 2] << 16 - I, L < 24 - I) || (oe |= O[P + 3] << 24 - I), oe & Y;
  }
  function Ke(O, G, L) {
    var I = G & 7, P = G >>> 3;
    return I <= 5 ? O[P] |= (L & 7) << I : (O[P] |= L << I & 255, O[P + 1] = (L & 7) >> 8 - I), G + 3;
  }
  function Ze(O, G, L) {
    var I = G & 7, P = G >>> 3;
    return L = (L & 1) << I, O[P] |= L, G + 1;
  }
  function At(O, G, L) {
    var I = G & 7, P = G >>> 3;
    return L <<= I, O[P] |= L & 255, L >>>= 8, O[P + 1] = L, G + 8;
  }
  function It(O, G, L) {
    var I = G & 7, P = G >>> 3;
    return L <<= I, O[P] |= L & 255, L >>>= 8, O[P + 1] = L & 255, O[P + 2] = L >>> 8, G + 16;
  }
  function Pt(O, G) {
    var L = O.length, I = 2 * L > G ? 2 * L : G + 5, P = 0;
    if (L >= G) return O;
    if (lt) {
      var Y = Xp(I);
      if (O.copy) O.copy(Y);
      else for (; P < O.length; ++P) Y[P] = O[P];
      return Y;
    } else if (ye) {
      var oe = new Uint8Array(I);
      if (oe.set) oe.set(O);
      else for (; P < L; ++P) oe[P] = O[P];
      return oe;
    }
    return O.length = I, O;
  }
  function it(O) {
    for (var G = new Array(O), L = 0; L < O; ++L) G[L] = 0;
    return G;
  }
  function Ot(O, G, L) {
    var I = 1, P = 0, Y = 0, oe = 0, me = 0, le = O.length, he = ye ? new Uint16Array(32) : it(32);
    for (Y = 0; Y < 32; ++Y) he[Y] = 0;
    for (Y = le; Y < L; ++Y) O[Y] = 0;
    le = O.length;
    var xe = ye ? new Uint16Array(le) : it(le);
    for (Y = 0; Y < le; ++Y) he[P = O[Y]]++, I < P && (I = P), xe[Y] = 0;
    for (he[0] = 0, Y = 1; Y <= I; ++Y) he[Y + 16] = me = me + he[Y - 1] << 1;
    for (Y = 0; Y < le; ++Y) me = O[Y], me != 0 && (xe[Y] = he[me + 16]++);
    var Ce = 0;
    for (Y = 0; Y < le; ++Y) if (Ce = O[Y], Ce != 0) for (me = X(xe[Y], I) >> I - Ce, oe = (1 << I + 4 - Ce) - 1; oe >= 0; --oe) G[me | oe << Ce] = Ce & 15 | Y << 4;
    return I;
  }
  var st = ye ? new Uint16Array(512) : it(512), tt = ye ? new Uint16Array(32) : it(32);
  if (!ye) {
    for (var rt = 0; rt < 512; ++rt) st[rt] = 0;
    for (rt = 0; rt < 32; ++rt) tt[rt] = 0;
  }
  (function() {
    for (var O = [], G = 0; G < 32; G++) O.push(5);
    Ot(O, tt, 32);
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
  function Ye(O) {
    var G = Wt(50 + Math.floor(O.length * 1.1)), L = gt(O, G);
    return G.slice(0, L);
  }
  var xt = ye ? new Uint16Array(32768) : it(32768), Dt = ye ? new Uint16Array(32768) : it(32768), vt = ye ? new Uint16Array(128) : it(128), Tr = 1, wa = 1;
  function Fi(O, G) {
    var L = Re(O, G) + 257;
    G += 5;
    var I = Re(O, G) + 1;
    G += 5;
    var P = Be(O, G) + 4;
    G += 4;
    for (var Y = 0, oe = ye ? new Uint8Array(19) : it(19), me = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], le = 1, he = ye ? new Uint8Array(8) : it(8), xe = ye ? new Uint8Array(8) : it(8), Ce = oe.length, Oe = 0; Oe < P; ++Oe) oe[W[Oe]] = Y = Le(O, G), le < Y && (le = Y), he[Y]++, G += 3;
    var Ne = 0;
    for (he[0] = 0, Oe = 1; Oe <= le; ++Oe) xe[Oe] = Ne = Ne + he[Oe - 1] << 1;
    for (Oe = 0; Oe < Ce; ++Oe) (Ne = oe[Oe]) != 0 && (me[Oe] = xe[Ne]++);
    var be = 0;
    for (Oe = 0; Oe < Ce; ++Oe) if (be = oe[Oe], be != 0) {
      Ne = _e[me[Oe]] >> 8 - be;
      for (var Fe = (1 << 7 - be) - 1; Fe >= 0; --Fe) vt[Ne | Fe << be] = be & 7 | Oe << 3;
    }
    var Xe = [];
    for (le = 1; Xe.length < L + I; ) switch (Ne = vt[ke(O, G)], G += Ne & 7, Ne >>>= 3) {
      case 16:
        for (Y = 3 + Ge(O, G), G += 2, Ne = Xe[Xe.length - 1]; Y-- > 0; ) Xe.push(Ne);
        break;
      case 17:
        for (Y = 3 + Le(O, G), G += 3; Y-- > 0; ) Xe.push(0);
        break;
      case 18:
        for (Y = 11 + ke(O, G), G += 7; Y-- > 0; ) Xe.push(0);
        break;
      default:
        Xe.push(Ne), le < Ne && (le = Ne);
        break;
    }
    var yt = Xe.slice(0, L), Et = Xe.slice(L);
    for (Oe = L; Oe < 286; ++Oe) yt[Oe] = 0;
    for (Oe = I; Oe < 30; ++Oe) Et[Oe] = 0;
    return Tr = Ot(yt, xt, 286), wa = Ot(Et, Dt, 30), G;
  }
  function $n(O, G) {
    if (O[0] == 3 && !(O[1] & 3)) return [Pn(G), 2];
    for (var L = 0, I = 0, P = Xp(G || 1 << 18), Y = 0, oe = P.length >>> 0, me = 0, le = 0; (I & 1) == 0; ) {
      if (I = Le(O, L), L += 3, I >>> 1) I >> 1 == 1 ? (me = 9, le = 5) : (L = Fi(O, L), me = Tr, le = wa);
      else {
        L & 7 && (L += 8 - (L & 7));
        var he = O[L >>> 3] | O[(L >>> 3) + 1] << 8;
        if (L += 32, he > 0) for (!G && oe < Y + he && (P = Pt(P, Y + he), oe = P.length); he-- > 0; ) P[Y++] = O[L >>> 3], L += 8;
        continue;
      }
      for (; ; ) {
        !G && oe < Y + 32767 && (P = Pt(P, Y + 32767), oe = P.length);
        var xe = Ie(O, L, me), Ce = I >>> 1 == 1 ? st[xe] : xt[xe];
        if (L += Ce & 15, Ce >>>= 4, (Ce >>> 8 & 255) === 0) P[Y++] = Ce;
        else {
          if (Ce == 256) break;
          Ce -= 257;
          var Oe = Ce < 8 ? 0 : Ce - 4 >> 2;
          Oe > 5 && (Oe = 0);
          var Ne = Y + ie[Ce];
          Oe > 0 && (Ne += Ie(O, L, Oe), L += Oe), xe = Ie(O, L, le), Ce = I >>> 1 == 1 ? tt[xe] : Dt[xe], L += Ce & 15, Ce >>>= 4;
          var be = Ce < 4 ? 0 : Ce - 2 >> 1, Fe = Ae[Ce];
          for (be > 0 && (Fe += Ie(O, L, be), L += be), !G && oe < Ne && (P = Pt(P, Ne + 100), oe = P.length); Y < Ne; ) P[Y] = P[Y - Fe], ++Y;
        }
      }
    }
    return G ? [P, L + 7 >>> 3] : [P.slice(0, Y), L + 7 >>> 3];
  }
  function _c(O, G) {
    var L = O.slice(O.l || 0), I = $n(L, G);
    return O.l += I[1], I[0];
  }
  function Ns(O, G) {
    if (O) typeof console < "u" && console.error(G);
    else throw new Error(G);
  }
  function Ms(O, G) {
    var L = O;
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
  function Ls(O, G, L, I, P) {
    O.l += 2;
    var Y = O.read_shift(2), oe = O.read_shift(2), me = u(O);
    if (Y & 8257) throw new Error("Unsupported ZIP encryption");
    for (var le = O.read_shift(4), he = O.read_shift(4), xe = O.read_shift(4), Ce = O.read_shift(2), Oe = O.read_shift(2), Ne = "", be = 0; be < Ce; ++be) Ne += String.fromCharCode(O[O.l++]);
    if (Oe) {
      var Fe = o(O.slice(O.l, O.l + Oe));
      (Fe[21589] || {}).mt && (me = Fe[21589].mt), ((P || {})[21589] || {}).mt && (me = P[21589].mt);
    }
    O.l += Oe;
    var Xe = O.slice(O.l, O.l + he);
    switch (oe) {
      case 8:
        Xe = z(O, xe);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + oe);
    }
    var yt = false;
    Y & 8 && (le = O.read_shift(4), le == 134695760 && (le = O.read_shift(4), yt = true), he = O.read_shift(4), xe = O.read_shift(4)), he != G && Ns(yt, "Bad compressed size: " + G + " != " + he), xe != L && Ns(yt, "Bad uncompressed size: " + L + " != " + xe), er(I, Ne, Xe, { unsafe: true, mt: me });
  }
  function Yn(O, G) {
    var L = G || {}, I = [], P = [], Y = Wt(1), oe = L.compression ? 8 : 0, me = 0, le = 0, he = 0, xe = 0, Ce = 0, Oe = O.FullPaths[0], Ne = Oe, be = O.FileIndex[0], Fe = [], Xe = 0;
    for (le = 1; le < O.FullPaths.length; ++le) if (Ne = O.FullPaths[le].slice(Oe.length), be = O.FileIndex[le], !(!be.size || !be.content || Ne == "Sh33tJ5")) {
      var yt = xe, Et = Wt(Ne.length);
      for (he = 0; he < Ne.length; ++he) Et.write_shift(1, Ne.charCodeAt(he) & 127);
      Et = Et.slice(0, Et.l), Fe[Ce] = g3.buf(be.content, 0);
      var kt = be.content;
      oe == 8 && (kt = q(kt)), Y = Wt(30), Y.write_shift(4, 67324752), Y.write_shift(2, 20), Y.write_shift(2, me), Y.write_shift(2, oe), be.mt ? c(Y, be.mt) : Y.write_shift(4, 0), Y.write_shift(-4, Fe[Ce]), Y.write_shift(4, kt.length), Y.write_shift(4, be.content.length), Y.write_shift(2, Et.length), Y.write_shift(2, 0), xe += Y.length, I.push(Y), xe += Et.length, I.push(Et), xe += kt.length, I.push(kt), Y = Wt(46), Y.write_shift(4, 33639248), Y.write_shift(2, 0), Y.write_shift(2, 20), Y.write_shift(2, me), Y.write_shift(2, oe), Y.write_shift(4, 0), Y.write_shift(-4, Fe[Ce]), Y.write_shift(4, kt.length), Y.write_shift(4, be.content.length), Y.write_shift(2, Et.length), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(4, 0), Y.write_shift(4, yt), Xe += Y.l, P.push(Y), Xe += Et.length, P.push(Et), ++Ce;
    }
    return Y = Wt(22), Y.write_shift(4, 101010256), Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(2, Ce), Y.write_shift(2, Ce), Y.write_shift(4, Xe), Y.write_shift(4, xe), Y.write_shift(2, 0), Bn([Bn(I), Bn(P), Y]);
  }
  var Ni = { htm: "text/html", xml: "text/xml", gif: "image/gif", jpg: "image/jpeg", png: "image/png", mso: "application/x-mso", thmx: "application/vnd.ms-officetheme", sh33tj5: "application/octet-stream" };
  function Tc(O, G) {
    if (O.ctype) return O.ctype;
    var L = O.name || "", I = L.match(/\.([^\.]+)$/);
    return I && Ni[I[1]] || G && (I = (L = G).match(/[\.\\]([^\.\\])+$/), I && Ni[I[1]]) ? Ni[I[1]] : "application/octet-stream";
  }
  function wc(O) {
    for (var G = Vp(O), L = [], I = 0; I < G.length; I += 76) L.push(G.slice(I, I + 76));
    return L.join(`\r
`) + `\r
`;
  }
  function Bs(O) {
    var G = O.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(he) {
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
  function Us(O) {
    for (var G = [], L = 0; L < O.length; ++L) {
      for (var I = O[L]; L <= O.length && I.charAt(I.length - 1) == "="; ) I = I.slice(0, I.length - 1) + O[++L];
      G.push(I);
    }
    for (var P = 0; P < G.length; ++P) G[P] = G[P].replace(/[=][0-9A-Fa-f]{2}/g, function(Y) {
      return String.fromCharCode(parseInt(Y.slice(1), 16));
    });
    return ga(G.join(`\r
`));
  }
  function Sc(O, G, L) {
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
        oe = ga(Yr(G.slice(me).join("")));
        break;
      case "quoted-printable":
        oe = Us(G.slice(me));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + P);
    }
    var xe = er(O, I.slice(L.length), oe, { unsafe: true });
    Y && (xe.ctype = Y);
  }
  function _f(O, G) {
    if (Q(O.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var L = G && G.root || "", I = (lt && Buffer.isBuffer(O) ? O.toString("binary") : Q(O)).split(`\r
`), P = 0, Y = "";
    for (P = 0; P < I.length; ++P) if (Y = I[P], !!/^Content-Location:/i.test(Y) && (Y = Y.slice(Y.indexOf("file")), L || (L = Y.slice(0, Y.lastIndexOf("/") + 1)), Y.slice(0, L.length) != L)) for (; L.length > 0 && (L = L.slice(0, L.length - 1), L = L.slice(0, L.lastIndexOf("/") + 1), Y.slice(0, L.length) != L); ) ;
    var oe = (I[1] || "").match(/boundary="(.*?)"/);
    if (!oe) throw new Error("MAD cannot find boundary");
    var me = "--" + (oe[1] || ""), le = [], he = [], xe = { FileIndex: le, FullPaths: he };
    C(xe);
    var Ce, Oe = 0;
    for (P = 0; P < I.length; ++P) {
      var Ne = I[P];
      Ne !== me && Ne !== me + "--" || (Oe++ && Sc(xe, I.slice(Ce, P), L), Ce = P);
    }
    return xe;
  }
  function Sa(O, G) {
    var L = G || {}, I = L.boundary || "SheetJS";
    I = "------=" + I;
    for (var P = ["MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + I.slice(2) + '"', "", "", ""], Y = O.FullPaths[0], oe = Y, me = O.FileIndex[0], le = 1; le < O.FullPaths.length; ++le) if (oe = O.FullPaths[le].slice(Y.length), me = O.FileIndex[le], !(!me.size || !me.content || oe == "Sh33tJ5")) {
      oe = oe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(Xe) {
        return "_x" + Xe.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(Xe) {
        return "_u" + Xe.charCodeAt(0).toString(16) + "_";
      });
      for (var he = me.content, xe = lt && Buffer.isBuffer(he) ? he.toString("binary") : Q(he), Ce = 0, Oe = Math.min(1024, xe.length), Ne = 0, be = 0; be <= Oe; ++be) (Ne = xe.charCodeAt(be)) >= 32 && Ne < 128 && ++Ce;
      var Fe = Ce >= Oe * 4 / 5;
      P.push(I), P.push("Content-Location: " + (L.root || "file:///C:/SheetJS/") + oe), P.push("Content-Transfer-Encoding: " + (Fe ? "quoted-printable" : "base64")), P.push("Content-Type: " + Tc(me, oe)), P.push(""), P.push(Fe ? Bs(xe) : wc(xe));
    }
    return P.push(I + `--\r
`), P.join(`\r
`);
  }
  function Jt(O) {
    var G = {};
    return C(G, O), G;
  }
  function er(O, G, L, I) {
    var P = I && I.unsafe;
    P || C(O);
    var Y = !P && ft.find(O, G);
    if (!Y) {
      var oe = O.FullPaths[0];
      G.slice(0, oe.length) == oe ? oe = G : (oe.slice(-1) != "/" && (oe += "/"), oe = (oe + G).replace("//", "/")), Y = { name: s(G), type: 2 }, O.FileIndex.push(Y), O.FullPaths.push(oe), P || ft.utils.cfb_gc(O);
    }
    return Y.content = L, Y.size = L ? L.length : 0, I && (I.CLSID && (Y.clsid = I.CLSID), I.mt && (Y.mt = I.mt), I.ct && (Y.ct = I.ct)), Y;
  }
  function un(O, G) {
    C(O);
    var L = ft.find(O, G);
    if (L) {
      for (var I = 0; I < O.FileIndex.length; ++I) if (O.FileIndex[I] == L) return O.FileIndex.splice(I, 1), O.FullPaths.splice(I, 1), true;
    }
    return false;
  }
  function Is(O, G, L) {
    C(O);
    var I = ft.find(O, G);
    if (I) {
      for (var P = 0; P < O.FileIndex.length; ++P) if (O.FileIndex[P] == I) return O.FileIndex[P].name = s(L), O.FullPaths[P] = L, true;
    }
    return false;
  }
  function Tf(O) {
    S(O, true);
  }
  return a.find = B, a.read = j, a.parse = v, a.write = H, a.writeFile = we, a.utils = { cfb_new: Jt, cfb_add: er, cfb_del: un, cfb_mov: Is, cfb_gc: Tf, ReadShift: Gl, CheckField: J2, prep_blob: ur, bconcat: Bn, use_zlib: R, _deflateRaw: Ye, _inflateRaw: _c, consts: ae }, a;
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
function Si(e, a) {
  if (lt && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Hl(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Hl(y2(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Hl(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Hl(new TextDecoder("utf-16be").decode(e.slice(2)));
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
  return e ? e.content && e.type ? Si(e.content, true) : e.data ? Bl(e.data) : e.asNodeBuffer && lt ? Bl(e.asNodeBuffer().toString("binary")) : e.asBinary ? Bl(e.asBinary()) : e._data && e._data.getContent ? Bl(Si(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
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
function $t(e, a, r) {
  if (!r) return A3(Qh(e, a));
  if (!a) return null;
  try {
    return $t(e, a);
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
      return lt ? i = ki(r) : i = $S(r), ft.utils.cfb_add(e, a, i);
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
function Il(e, a) {
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
`, b3 = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, rm = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, O3 = /<[^>]*>/g, _r = U2.match(rm) ? rm : O3, D3 = /<\w*:/, R3 = /<(\/?)\w+:/;
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
      var E = (o === 5 && v.slice(0, 5) === "xmlns" ? "xmlns" : "") + v.slice(o + 1);
      if (i[E] && v.slice(o - 3, o) == "ext") continue;
      i[E] = x, i[E.toLowerCase()] = x;
    }
  }
  return i;
}
function Ba(e) {
  return e.replace(R3, "<$1");
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
  return ki(e, "binary").toString("utf8");
}
var U0 = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", bt = lt && (im(U0) == Xo(U0) && im || nm(U0) == Xo(U0) && nm) || Xo, Hl = lt ? function(e) {
  return ki(e, "utf8").toString("binary");
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
}, rc = /* @__PURE__ */ function() {
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
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return bt(Ci(qh(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var ac = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, z3 = { CT: "http://schemas.openxmlformats.org/package/2006/content-types" }, P3 = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
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
    return Buffer.isBuffer(a) ? a : ki(a);
  })) : lm(e);
} : lm, fm = function(e, a, r) {
  for (var i = [], s = a; s < r; s += 2) i.push(String.fromCharCode(tn(e, s)));
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
}, vc = lt ? function(a, r, i) {
  return Buffer.isBuffer(a) ? a.toString("utf8", r, i) : om(a, r, i);
} : om, z2 = function(e, a) {
  var r = Vr(e, a);
  return r > 0 ? vc(e, a + 4, a + 4 + r - 1) : "";
}, P2 = z2, G2 = function(e, a) {
  var r = Vr(e, a);
  return r > 0 ? vc(e, a + 4, a + 4 + r - 1) : "";
}, V2 = G2, X2 = function(e, a) {
  var r = 2 * Vr(e, a);
  return r > 0 ? vc(e, a + 4, a + 4 + r - 1) : "";
}, $2 = X2, Y2 = function(a, r) {
  var i = Vr(a, r);
  return i > 0 ? td(a, r + 4, r + 4 + i) : "";
}, q2 = Y2, K2 = function(e, a) {
  var r = Vr(e, a);
  return r > 0 ? vc(e, a + 4, a + 4 + r) : "";
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
}, $2 = function(a, r) {
  if (!Buffer.isBuffer(a)) return X2(a, r);
  var i = 2 * a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + i - 1);
}, q2 = function(a, r) {
  if (!Buffer.isBuffer(a)) return Y2(a, r);
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
}, tn = function(e, a) {
  return e[a + 1] * 256 + e[a];
}, X3 = function(e, a) {
  var r = e[a + 1] * 256 + e[a];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, Vr = function(e, a) {
  return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
}, vi = function(e, a) {
  return e[a + 3] << 24 | e[a + 2] << 16 | e[a + 1] << 8 | e[a];
}, $3 = function(e, a) {
  return e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3];
};
function Gl(e, a) {
  var r = "", i, s, c = [], u, o, x, d;
  switch (a) {
    case "dbcs":
      if (d = this.l, lt && Buffer.isBuffer(this)) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (x = 0; x < e; ++x) r += String.fromCharCode(tn(this, d)), d += 2;
      e *= 2;
      break;
    case "utf8":
      r = vc(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = td(this, this.l, this.l + e);
      break;
    case "wstr":
      return Gl.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = P2(this, this.l), e = 4 + Vr(this, this.l);
      break;
    case "lpstr-cp":
      r = V2(this, this.l), e = 4 + Vr(this, this.l);
      break;
    case "lpwstr":
      r = $2(this, this.l), e = 4 + 2 * Vr(this, this.l);
      break;
    case "lpp4":
      e = 4 + Vr(this, this.l), r = q2(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + Vr(this, this.l), r = W2(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (u = vs(this, this.l + e++)) !== 0; ) c.push(B0(u));
      r = c.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (u = tn(this, this.l + e)) !== 0; ) c.push(B0(u)), e += 2;
      e += 2, r = c.join("");
      break;
    case "dbcs-cont":
      for (r = "", d = this.l, x = 0; x < e; ++x) {
        if (this.lens && this.lens.indexOf(d) !== -1) return u = vs(this, d), this.l = d + 1, o = Gl.call(this, e - x, u ? "dbcs-cont" : "sbcs-cont"), c.join("") + o;
        c.push(B0(tn(this, d))), d += 2;
      }
      r = c.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", d = this.l, x = 0; x != e; ++x) {
        if (this.lens && this.lens.indexOf(d) !== -1) return u = vs(this, d), this.l = d + 1, o = Gl.call(this, e - x, u ? "dbcs-cont" : "sbcs-cont"), c.join("") + o;
        c.push(B0(vs(this, d))), d += 1;
      }
      r = c.join("");
      break;
    default:
      switch (e) {
        case 1:
          return i = vs(this, this.l), this.l++, i;
        case 2:
          return i = (a === "i" ? X3 : tn)(this, this.l), this.l += 2, i;
        case 4:
        case -4:
          return a === "i" || (this[this.l + 3] & 128) === 0 ? (i = (e > 0 ? vi : $3)(this, this.l), this.l += 4, i) : (s = Vr(this, this.l), this.l += 4, s);
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
var Y3 = function(e, a, r) {
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
      i = 4, Y3(this, a, this.l);
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
  e.l = a, e.read_shift = Gl, e.chk = J2, e.write_shift = W3;
}
function Er(e, a) {
  e.l += a;
}
function Wt(e) {
  var a = Pn(e);
  return ur(a, 0), a;
}
function fn(e, a, r) {
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
    return s(), Bn(e);
  }, o = function(d) {
    s(), i = d, i.l == null && (i.l = i.length), c(a);
  };
  return { next: c, push: o, end: u, _bufs: e };
}
function Vl(e, a, r) {
  var i = or(e);
  if (a.s ? (i.cRel && (i.c += a.s.c), i.rRel && (i.r += a.s.r)) : (i.cRel && (i.c += a.c), i.rRel && (i.r += a.r)), !r || r.biff < 12) {
    for (; i.c >= 256; ) i.c -= 256;
    for (; i.r >= 65536; ) i.r -= 65536;
  }
  return i;
}
function hm(e, a, r) {
  var i = or(e);
  return i.s = Vl(i.s, a.s, r), i.e = Vl(i.e, a.s, r), i;
}
function Xl(e, a) {
  if (e.cRel && e.c < 0) for (e = or(e); e.c < 0; ) e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0) for (e = or(e); e.r < 0; ) e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var r = $e(e);
  return !e.cRel && e.cRel != null && (r = J3(r)), !e.rRel && e.rRel != null && (r = Z3(r)), r;
}
function $o(e, a) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Zt(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Zt(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (a.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + hr(e.s.r) + ":" + (e.e.rRel ? "" : "$") + hr(e.e.r) : Xl(e.s, a.biff) + ":" + Xl(e.e, a.biff);
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
function $e(e) {
  for (var a = e.c + 1, r = ""; a; a = (a - 1) / 26 | 0) r = String.fromCharCode((a - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function Rs(e) {
  var a = e.indexOf(":");
  return a == -1 ? { s: kr(e), e: kr(e) } : { s: kr(e.slice(0, a)), e: kr(e.slice(a + 1)) };
}
function ut(e, a) {
  return typeof a > "u" || typeof a == "number" ? ut(e.s, e.e) : (typeof e != "string" && (e = $e(e)), typeof a != "string" && (a = $e(a)), e == a ? e : e + ":" + a);
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
function ln(e, a, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? Di[e.v] || e.v : a == null ? dm(e, e.v) : dm(e, a));
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
      var E = { v: a[m][g] }, T = u + m, y = o + g;
      if (d.s.r > T && (d.s.r = T), d.s.c > y && (d.s.c = y), d.e.r < T && (d.e.r = T), d.e.c < y && (d.e.c = y), a[m][g] && typeof a[m][g] == "object" && !Array.isArray(a[m][g]) && !(a[m][g] instanceof Date)) E = a[m][g];
      else if (Array.isArray(E.v) && (E.f = a[m][g][1], E.v = E.v[0]), E.v === null) if (E.f) E.t = "n";
      else if (i.nullError) E.t = "e", E.v = 0;
      else if (i.sheetStubs) E.t = "z";
      else continue;
      else typeof E.v == "number" ? E.t = "n" : typeof E.v == "boolean" ? E.t = "b" : E.v instanceof Date ? (E.z = i.dateNF || We[14], i.cellDates ? (E.t = "d", E.w = fa(E.z, br(E.v))) : (E.t = "n", E.v = br(E.v), E.w = fa(E.z, E.v))) : E.t = "s";
      if (s) c[T] || (c[T] = []), c[T][y] && c[T][y].z && (E.z = c[T][y].z), c[T][y] = E;
      else {
        var _ = $e({ c: y, r: T });
        c[_] && c[_].z && (E.z = c[_].z), c[_] = E;
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
function bi(e) {
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
  var s = i === 0 ? nf([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : vi(a, 0) >> 2;
  return r ? s / 100 : s;
}
function ty(e) {
  var a = { s: {}, e: {} };
  return a.s.r = e.read_shift(4), a.e.r = e.read_shift(4), a.s.c = e.read_shift(4), a.e.c = e.read_shift(4), a;
}
var Oi = ty;
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
      var d = _i[s];
      d && (a.rgb = ic(d));
      break;
    case 2:
      a.rgb = ic([u, o, x]);
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
var ld = 2, Nr = 3, I0 = 11, xm = 12, sf = 19, H0 = 64, oA = 65, hA = 71, dA = 4108, xA = 4126, nr = 80, ay = 81, vA = [nr, ay], pA = { 1: { n: "CodePage", t: ld }, 2: { n: "Category", t: nr }, 3: { n: "PresentationFormat", t: nr }, 4: { n: "ByteCount", t: Nr }, 5: { n: "LineCount", t: Nr }, 6: { n: "ParagraphCount", t: Nr }, 7: { n: "SlideCount", t: Nr }, 8: { n: "NoteCount", t: Nr }, 9: { n: "HiddenCount", t: Nr }, 10: { n: "MultimediaClipCount", t: Nr }, 11: { n: "ScaleCrop", t: I0 }, 12: { n: "HeadingPairs", t: dA }, 13: { n: "TitlesOfParts", t: xA }, 14: { n: "Manager", t: nr }, 15: { n: "Company", t: nr }, 16: { n: "LinksUpToDate", t: I0 }, 17: { n: "CharacterCount", t: Nr }, 19: { n: "SharedDoc", t: I0 }, 22: { n: "HyperlinksChanged", t: I0 }, 23: { n: "AppVersion", t: Nr, p: "version" }, 24: { n: "DigSig", t: oA }, 26: { n: "ContentType", t: nr }, 27: { n: "ContentStatus", t: nr }, 28: { n: "Language", t: nr }, 29: { n: "Version", t: nr }, 255: {}, 2147483648: { n: "Locale", t: sf }, 2147483651: { n: "Behavior", t: sf }, 1919054434: {} }, mA = { 1: { n: "CodePage", t: ld }, 2: { n: "Title", t: nr }, 3: { n: "Subject", t: nr }, 4: { n: "Author", t: nr }, 5: { n: "Keywords", t: nr }, 6: { n: "Comments", t: nr }, 7: { n: "Template", t: nr }, 8: { n: "LastAuthor", t: nr }, 9: { n: "RevNumber", t: nr }, 10: { n: "EditTime", t: H0 }, 11: { n: "LastPrinted", t: H0 }, 12: { n: "CreatedDate", t: H0 }, 13: { n: "ModifiedDate", t: H0 }, 14: { n: "PageCount", t: Nr }, 15: { n: "WordCount", t: Nr }, 16: { n: "CharCount", t: Nr }, 17: { n: "Thumbnail", t: hA }, 18: { n: "Application", t: nr }, 19: { n: "DocSecurity", t: Nr }, 255: {}, 2147483648: { n: "Locale", t: sf }, 2147483651: { n: "Behavior", t: sf }, 1919054434: {} }, vm = { 1: "US", 2: "CA", 3: "", 7: "RU", 20: "EG", 30: "GR", 31: "NL", 32: "BE", 33: "FR", 34: "ES", 36: "HU", 39: "IT", 41: "CH", 43: "AT", 44: "GB", 45: "DK", 46: "SE", 47: "NO", 48: "PL", 49: "DE", 52: "MX", 55: "BR", 61: "AU", 64: "NZ", 66: "TH", 81: "JP", 82: "KR", 84: "VN", 86: "CN", 90: "TR", 105: "JS", 213: "DZ", 216: "MA", 218: "LY", 351: "PT", 354: "IS", 358: "FI", 420: "CZ", 886: "TW", 961: "LB", 962: "JO", 963: "SY", 964: "IQ", 965: "KW", 966: "SA", 971: "AE", 972: "IL", 974: "QA", 981: "IR", 65535: "US" }, gA = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];
function yA(e) {
  return e.map(function(a) {
    return [a >> 16 & 255, a >> 8 & 255, a & 255];
  });
}
var EA = yA([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), _i = or(EA), Di = { 0: "#NULL!", 7: "#DIV/0!", 15: "#VALUE!", 23: "#REF!", 29: "#NAME?", 36: "#NUM!", 42: "#N/A", 43: "#GETTING_DATA", 255: "#WTF?" }, ny = { "#NULL!": 0, "#DIV/0!": 7, "#VALUE!": 15, "#REF!": 23, "#NAME?": 29, "#NUM!": 36, "#N/A": 42, "#GETTING_DATA": 43, "#WTF?": 255 }, pm = { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks", "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks", "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks", "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks", "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets", "application/vnd.ms-excel.worksheet": "sheets", "application/vnd.ms-excel.binIndexWs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts", "application/vnd.ms-excel.chartsheet": "charts", "application/vnd.ms-excel.macrosheet+xml": "macros", "application/vnd.ms-excel.macrosheet": "macros", "application/vnd.ms-excel.intlmacrosheet": "TODO", "application/vnd.ms-excel.binIndexMs": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs", "application/vnd.ms-excel.dialogsheet": "dialogs", "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs", "application/vnd.ms-excel.sharedStrings": "strs", "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles", "application/vnd.ms-excel.styles": "styles", "application/vnd.openxmlformats-package.core-properties+xml": "coreprops", "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops", "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops", "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments", "application/vnd.ms-excel.comments": "comments", "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments", "application/vnd.ms-excel.person+xml": "people", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata", "application/vnd.ms-excel.sheetMetadata": "metadata", "application/vnd.ms-excel.pivotTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO", "application/vnd.ms-office.chartcolorstyle+xml": "TODO", "application/vnd.ms-office.chartstyle+xml": "TODO", "application/vnd.ms-office.chartex+xml": "TODO", "application/vnd.ms-excel.calcChain": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains", "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO", "application/vnd.ms-office.activeX": "TODO", "application/vnd.ms-office.activeX+xml": "TODO", "application/vnd.ms-excel.attachedToolbars": "TODO", "application/vnd.ms-excel.connections": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO", "application/vnd.ms-excel.externalLink": "links", "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links", "application/vnd.ms-excel.pivotCacheDefinition": "TODO", "application/vnd.ms-excel.pivotCacheRecords": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO", "application/vnd.ms-excel.queryTable": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO", "application/vnd.ms-excel.userNames": "TODO", "application/vnd.ms-excel.revisionHeaders": "TODO", "application/vnd.ms-excel.revisionLog": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO", "application/vnd.ms-excel.tableSingleCells": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO", "application/vnd.ms-excel.slicer": "TODO", "application/vnd.ms-excel.slicerCache": "TODO", "application/vnd.ms-excel.slicer+xml": "TODO", "application/vnd.ms-excel.slicerCache+xml": "TODO", "application/vnd.ms-excel.wsSortMap": "TODO", "application/vnd.ms-excel.table": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO", "application/vnd.openxmlformats-officedocument.theme+xml": "themes", "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO", "application/vnd.ms-excel.Timeline+xml": "TODO", "application/vnd.ms-excel.TimelineCache+xml": "TODO", "application/vnd.ms-office.vbaProject": "vba", "application/vnd.ms-office.vbaProjectSignature": "TODO", "application/vnd.ms-office.volatileDependencies": "TODO", "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO", "application/vnd.ms-excel.controlproperties+xml": "TODO", "application/vnd.openxmlformats-officedocument.model+data": "TODO", "application/vnd.ms-excel.Survey+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings", "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO", "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO", "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO", "application/vnd.openxmlformats-package.relationships+xml": "rels", "application/vnd.openxmlformats-officedocument.oleObject": "TODO", "image/png": "TODO", sheet: "js" };
function _A() {
  return { workbooks: [], sheets: [], charts: [], dialogs: [], macros: [], rels: [], strs: [], comments: [], threadedcomments: [], links: [], coreprops: [], extprops: [], custprops: [], themes: [], styles: [], calcchains: [], vba: [], drawings: [], metadata: [], people: [], TODO: [], xmlns: "" };
}
function TA(e) {
  var a = _A();
  if (!e || !e.match) return a;
  var r = {};
  if ((e.match(_r) || []).forEach(function(i) {
    var s = Pe(i);
    switch (s[0].replace(D3, "<")) {
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
function $l(e, a) {
  var r = { "!id": {} };
  if (!e) return r;
  a.charAt(0) !== "/" && (a = "/" + a);
  var i = {};
  return (e.match(_r) || []).forEach(function(s) {
    var c = Pe(s);
    if (c[0] === "<Relationship") {
      var u = {};
      u.Type = c.Type, u.Target = c.Target, u.Id = c.Id, c.TargetMode && (u.TargetMode = c.TargetMode);
      var o = c.TargetMode === "External" ? c.Target : Il(c.Target, a);
      r[o] = u, i[c.Id] = u;
    }
  }), r["!id"] = i, r;
}
var wA = "application/vnd.oasis.opendocument.spreadsheet";
function SA(e, a) {
  for (var r = ed(e), i, s; i = ac.exec(r); ) switch (i[3]) {
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
    var c = (e.match(rc(s[0])) || [])[1];
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
var DA = { Title: "Title", Subject: "Subject", Author: "Author", Keywords: "Keywords", Comments: "Description", LastAuthor: "LastAuthor", RevNumber: "Revision", Application: "AppName", LastPrinted: "LastPrinted", CreatedDate: "Created", ModifiedDate: "LastSaved", Category: "Category", Manager: "Manager", Company: "Company", AppVersion: "Version", ContentStatus: "ContentStatus", Identifier: "Identifier", Language: "Language" }, Yo;
function RA(e, a, r) {
  Yo || (Yo = Zh(DA)), a = Yo[a] || a, e[a] = r;
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
    i[c] = e.read_shift(u, a === 1200 ? "utf16le" : "utf8").replace(Cr, "").replace(Ul, "!"), a === 1200 && u % 2 && (e.l += 2);
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
  c.sort(function(b, w) {
    return b[1] - w[1];
  });
  var g = {};
  for (u = 0; u != s; ++u) {
    if (e.l !== c[u][1]) {
      var E = true;
      if (u > 0 && a) switch (a[c[u - 1][0]].t) {
        case 2:
          e.l + 2 === c[u][1] && (e.l += 2, E = false);
          break;
        case 80:
          e.l <= c[u][1] && (e.l = c[u][1], E = false);
          break;
        case 4108:
          e.l <= c[u][1] && (e.l = c[u][1], E = false);
          break;
      }
      if ((!a || u == 0) && e.l <= c[u][1] && (E = false, e.l = c[u][1]), E) throw new Error("Read Error: Expected address " + c[u][1] + " at " + e.l + " :" + u);
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
        var y = e.l;
        e.l = c[x][1], d = mm(e, o), e.l = y;
      }
    } else if (c[u][0] === 0) {
      if (o === 0) {
        x = u, e.l = c[u + 1][1];
        continue;
      }
      d = mm(e, o);
    } else {
      var _ = d[c[u][0]], D;
      switch (e[e.l]) {
        case 65:
          e.l += 4, D = uy(e);
          break;
        case 30:
          e.l += 4, D = ph(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, D = ph(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, D = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, D = e.read_shift(4);
          break;
        case 5:
          e.l += 4, D = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, D = zt(e, 4);
          break;
        case 64:
          e.l += 4, D = ir(cd(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      g[_] = D;
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
  for (var E in m) g[E] = m[E];
  if (g.FMTID = c, s === 1) return g;
  if (x - i.l == 2 && (i.l += 2), i.l !== x) throw new Error("Length mismatch 2: " + i.l + " !== " + x);
  var T;
  try {
    T = gm(i, null);
  } catch {
  }
  for (E in T) g[E] = T[E];
  return g.FMTID = [c, u], g;
}
function Mn(e, a) {
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
function Yt(e) {
  return e.read_shift(2, "u");
}
function oy(e, a) {
  return IA(e, a, Yt);
}
function HA(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? a : a === 1;
}
function pc(e, a, r) {
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
function Ai(e, a, r) {
  var i;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(a, "cpstr");
    if (r.biff >= 12) return e.read_shift(a, "dbcs-cont");
  }
  var s = e.read_shift(1);
  return s === 0 ? i = e.read_shift(a, "sbcs-cont") : i = e.read_shift(a, "dbcs-cont"), i;
}
function mc(e, a, r) {
  var i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return i === 0 ? (e.l++, "") : Ai(e, i, r);
}
function Ri(e, a, r) {
  if (r.biff > 5) return mc(e, a, r);
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
function j0(e) {
  var a = e.read_shift(4), r = a > 0 ? e.read_shift(a, "utf16le").replace(Cr, "") : "";
  return r;
}
function XA(e, a) {
  var r = e.l + a, i = e.read_shift(4);
  if (i !== 2) throw new Error("Unrecognized streamVersion: " + i);
  var s = e.read_shift(2);
  e.l += 2;
  var c, u, o, x, d = "", v, m;
  s & 16 && (c = j0(e, r - e.l)), s & 128 && (u = j0(e, r - e.l)), (s & 257) === 257 && (o = j0(e, r - e.l)), (s & 257) === 1 && (x = VA(e, r - e.l)), s & 8 && (d = j0(e, r - e.l)), s & 32 && (v = e.read_shift(16)), s & 64 && (m = cd(e)), e.l = r;
  var g = u || o || x || "";
  g && d && (g += "#" + d), g || (g = "#" + d), s & 2 && g.charAt(0) == "/" && g.charAt(1) != "/" && (g = "file://" + g);
  var E = { Target: g };
  return v && (E.guid = v), m && (E.time = m), c && (E.Tooltip = c), E;
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
function $A(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: a, flags: r };
}
function YA(e, a, r) {
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
  var i = e.l + a, s = pc(e, a, r), c = e.read_shift(2);
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
function z0(e, a) {
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
  var u = pc(e, 0, r);
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
  var a = $A(e);
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
  return i.name = pc(e, 0, r), i;
}
function xk(e) {
  var a = Ua(e);
  return a.isst = e.read_shift(4), a;
}
function vk(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var i = e.l + a, s = Ua(e);
  r.biff == 2 && e.l++;
  var c = mc(e, i - e.l, r);
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
var wm = YA;
function Ak(e, a, r) {
  var i = e.l + a, s = e.read_shift(2), c = e.read_shift(2);
  if (r.sbcch = c, c == 1025 || c == 14849) return [c, s];
  if (c < 1 || c > 255) throw new Error("Unexpected SupBook type: " + c);
  for (var u = Ai(e, c), o = []; i > e.l; ) o.push(mc(e));
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
  var d = Ai(e, u, r);
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
  var i = pc(e, a, r);
  return i.charCodeAt(0) == 3 ? i.slice(1) : i;
}
function bk(e, a, r) {
  if (r.biff < 8) {
    e.l += a;
    return;
  }
  var i = e.read_shift(2), s = e.read_shift(2), c = Ai(e, i, r), u = Ai(e, s, r);
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
function Dk(e) {
  var a = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, i = e.read_shift(4);
  return [a, r, i];
}
function Rk(e, a, r) {
  if (!(r.biff < 8)) {
    var i = e.read_shift(2), s = e.read_shift(2), c = e.read_shift(2), u = e.read_shift(2), o = Ri(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: i, c: s }, o, u, c];
  }
}
function Fk(e, a, r) {
  return Rk(e, a, r);
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
    e.read_shift(2), Yt(e, 2);
    var x = e.read_shift(2);
    e.l += x;
    for (var d = 1; d < e.lens.length - 1; ++d) {
      if (e.l - i != e.lens[d]) throw new Error("TxO: bad continue record");
      var v = e[e.l], m = Ai(e, e.lens[d + 1] - e.lens[d] - 1);
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
var $k = Ua, Yk = oy, qk = mc;
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
function eC(e, a) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += a - 13;
}
function tC(e, a, r) {
  var i = e.l + a, s = Ua(e), c = e.read_shift(2), u = Ai(e, c, r);
  return e.l = i, s.t = "str", s.val = u, s;
}
var rC = [2, 3, 48, 49, 131, 139, 140, 245], Cm = function() {
  var e = { 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127, 8: 865, 9: 437, 10: 850, 11: 437, 13: 437, 14: 850, 15: 437, 16: 850, 17: 437, 18: 850, 19: 932, 20: 850, 21: 437, 22: 850, 23: 865, 24: 437, 25: 437, 26: 850, 27: 437, 28: 863, 29: 850, 31: 852, 34: 852, 35: 852, 36: 860, 37: 850, 38: 866, 55: 850, 64: 852, 77: 936, 78: 949, 79: 950, 80: 874, 87: 1252, 88: 1252, 89: 1252, 108: 863, 134: 737, 135: 852, 136: 857, 204: 1257, 255: 16969 }, a = Zh({ 1: 437, 2: 850, 3: 1252, 4: 1e4, 100: 852, 101: 866, 102: 865, 103: 861, 104: 895, 105: 620, 106: 737, 107: 857, 120: 950, 121: 949, 122: 936, 123: 932, 124: 874, 125: 1255, 126: 1256, 150: 10007, 151: 10029, 152: 10006, 200: 1250, 201: 1251, 202: 1254, 203: 1253, 0: 20127 });
  function r(o, x) {
    var d = [], v = Pn(1);
    switch (x.type) {
      case "base64":
        v = ga(Yr(o));
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
    var m = v.read_shift(1), g = !!(m & 136), E = false, T = false;
    switch (m) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        E = true, g = true;
        break;
      case 49:
        E = true, g = true;
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
    var y = 0, _ = 521;
    m == 2 && (y = v.read_shift(2)), v.l += 3, m != 2 && (y = v.read_shift(4)), y > 1048576 && (y = 1e6), m != 2 && (_ = v.read_shift(2));
    var D = v.read_shift(2), b = x.codepage || 1252;
    m != 2 && (v.l += 16, v.read_shift(1), v[v.l] !== 0 && (b = e[v[v.l]]), v.l += 1, v.l += 2), T && (v.l += 36);
    for (var w = [], M = {}, V = Math.min(v.length, m == 2 ? 521 : _ - 10 - (E ? 264 : 0)), j = T ? 32 : 11; v.l < V && v[v.l] != 13; ) switch (M = {}, M.name = hh.utils.decode(b, v.slice(v.l, v.l + j)).replace(/[\u0000\r\n].*$/g, ""), v.l += j, M.type = String.fromCharCode(v.read_shift(1)), m != 2 && !T && (M.offset = v.read_shift(4)), M.len = v.read_shift(1), m == 2 && (M.offset = v.read_shift(2)), M.dec = v.read_shift(1), M.name.length && w.push(M), m != 2 && (v.l += T ? 13 : 14), M.type) {
      case "B":
        (!E || M.len != 8) && x.WTF && console.log("Skipping " + M.name + ":" + M.type);
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
    var C = 0, A = 0;
    for (d[0] = [], A = 0; A != w.length; ++A) d[0][A] = w[A].name;
    for (; y-- > 0; ) {
      if (v[v.l] === 42) {
        v.l += D;
        continue;
      }
      for (++v.l, d[++C] = [], A = 0, A = 0; A != w.length; ++A) {
        var S = v.slice(v.l, v.l + w[A].len);
        v.l += w[A].len, ur(S, 0);
        var N = hh.utils.decode(b, S);
        switch (w[A].type) {
          case "C":
            N.trim().length && (d[C][A] = N.replace(/\s+$/, ""));
            break;
          case "D":
            N.length === 8 ? d[C][A] = new Date(+N.slice(0, 4), +N.slice(4, 6) - 1, +N.slice(6, 8)) : d[C][A] = N;
            break;
          case "F":
            d[C][A] = parseFloat(N.trim());
            break;
          case "+":
          case "I":
            d[C][A] = T ? S.read_shift(-4, "i") ^ 2147483648 : S.read_shift(4, "i");
            break;
          case "L":
            switch (N.trim().toUpperCase()) {
              case "Y":
              case "T":
                d[C][A] = true;
                break;
              case "N":
              case "F":
                d[C][A] = false;
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
            d[C][A] = "##MEMO##" + (T ? parseInt(N.trim(), 10) : S.read_shift(4));
            break;
          case "N":
            N = N.replace(/\u0000/g, "").trim(), N && N != "." && (d[C][A] = +N || 0);
            break;
          case "@":
            d[C][A] = new Date(S.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            d[C][A] = new Date((S.read_shift(4) - 2440588) * 864e5 + S.read_shift(4));
            break;
          case "Y":
            d[C][A] = S.read_shift(4, "i") / 1e4 + S.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            d[C][A] = -S.read_shift(-8, "f");
            break;
          case "B":
            if (E && w[A].len == 8) {
              d[C][A] = S.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            S.l += w[A].len;
            break;
          case "0":
            if (w[A].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + w[A].type);
        }
      }
    }
    if (m != 2 && v.l < v.length && v[v.l++] != 26) throw new Error("DBF EOF Marker missing " + (v.l - 1) + " of " + v.length + " " + v[v.l - 1].toString(16));
    return x && x.sheetRows && (d = d.slice(0, x.sheetRows)), x.DBF = w, d;
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
    var v = dh(), m = wh(o, { header: 1, raw: true, cellDates: true }), g = m[0], E = m.slice(1), T = o["!cols"] || [], y = 0, _ = 0, D = 0, b = 1;
    for (y = 0; y < g.length; ++y) {
      if (((T[y] || {}).DBF || {}).name) {
        g[y] = T[y].DBF.name, ++D;
        continue;
      }
      if (g[y] != null) {
        if (++D, typeof g[y] == "number" && (g[y] = g[y].toString(10)), typeof g[y] != "string") throw new Error("DBF Invalid column name " + g[y] + " |" + typeof g[y] + "|");
        if (g.indexOf(g[y]) !== y) {
          for (_ = 0; _ < 1024; ++_) if (g.indexOf(g[y] + "_" + _) == -1) {
            g[y] += "_" + _;
            break;
          }
        }
      }
    }
    var w = Ut(o["!ref"]), M = [], V = [], j = [];
    for (y = 0; y <= w.e.c - w.s.c; ++y) {
      var C = "", A = "", S = 0, N = [];
      for (_ = 0; _ < E.length; ++_) E[_][y] != null && N.push(E[_][y]);
      if (N.length == 0 || g[y] == null) {
        M[y] = "?";
        continue;
      }
      for (_ = 0; _ < N.length; ++_) {
        switch (typeof N[_]) {
          case "number":
            A = "B";
            break;
          case "string":
            A = "C";
            break;
          case "boolean":
            A = "L";
            break;
          case "object":
            A = N[_] instanceof Date ? "D" : "C";
            break;
          default:
            A = "C";
        }
        S = Math.max(S, String(N[_]).length), C = C && C != A ? "C" : A;
      }
      S > 250 && (S = 250), A = ((T[y] || {}).DBF || {}).type, A == "C" && T[y].DBF.len > S && (S = T[y].DBF.len), C == "B" && A == "N" && (C = "N", j[y] = T[y].DBF.dec, S = T[y].DBF.len), V[y] = C == "C" || A == "N" ? S : c[C] || 0, b += V[y], M[y] = C;
    }
    var B = v.next(32);
    for (B.write_shift(4, 318902576), B.write_shift(4, E.length), B.write_shift(2, 296 + 32 * D), B.write_shift(2, b), y = 0; y < 4; ++y) B.write_shift(4, 0);
    for (B.write_shift(4, 0 | (+a[m2] || 3) << 8), y = 0, _ = 0; y < g.length; ++y) if (g[y] != null) {
      var U = v.next(32), ne = (g[y].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      U.write_shift(1, ne, "sbcs"), U.write_shift(1, M[y] == "?" ? "C" : M[y], "sbcs"), U.write_shift(4, _), U.write_shift(1, V[y] || c[M[y]] || 0), U.write_shift(1, j[y] || 0), U.write_shift(1, 2), U.write_shift(4, 0), U.write_shift(1, 0), U.write_shift(4, 0), U.write_shift(4, 0), _ += V[y] || c[M[y]] || 0;
    }
    var ge = v.next(264);
    for (ge.write_shift(4, 13), y = 0; y < 65; ++y) ge.write_shift(4, 0);
    for (y = 0; y < E.length; ++y) {
      var fe = v.next(b);
      for (fe.write_shift(1, 0), _ = 0; _ < g.length; ++_) if (g[_] != null) switch (M[_]) {
        case "L":
          fe.write_shift(1, E[y][_] == null ? 63 : E[y][_] ? 84 : 70);
          break;
        case "B":
          fe.write_shift(8, E[y][_] || 0, "f");
          break;
        case "N":
          var J = "0";
          for (typeof E[y][_] == "number" && (J = E[y][_].toFixed(j[_] || 0)), D = 0; D < V[_] - J.length; ++D) fe.write_shift(1, 32);
          fe.write_shift(1, J, "sbcs");
          break;
        case "D":
          E[y][_] ? (fe.write_shift(4, ("0000" + E[y][_].getFullYear()).slice(-4), "sbcs"), fe.write_shift(2, ("00" + (E[y][_].getMonth() + 1)).slice(-2), "sbcs"), fe.write_shift(2, ("00" + E[y][_].getDate()).slice(-2), "sbcs")) : fe.write_shift(8, "00000000", "sbcs");
          break;
        case "C":
          var ae = String(E[y][_] != null ? E[y][_] : "").slice(0, V[_]);
          for (fe.write_shift(1, ae, "sbcs"), D = 0; D < V[_] - ae.length; ++D) fe.write_shift(1, 32);
          break;
      }
    }
    return v.next(1).write_shift(1, 26), v.end();
  }
  return { to_workbook: s, to_sheet: i, from_sheet: u };
}(), aC = function() {
  var e = { AA: "\xC0", BA: "\xC1", CA: "\xC2", DA: 195, HA: "\xC4", JA: 197, AE: "\xC8", BE: "\xC9", CE: "\xCA", HE: "\xCB", AI: "\xCC", BI: "\xCD", CI: "\xCE", HI: "\xCF", AO: "\xD2", BO: "\xD3", CO: "\xD4", DO: 213, HO: "\xD6", AU: "\xD9", BU: "\xDA", CU: "\xDB", HU: "\xDC", Aa: "\xE0", Ba: "\xE1", Ca: "\xE2", Da: 227, Ha: "\xE4", Ja: 229, Ae: "\xE8", Be: "\xE9", Ce: "\xEA", He: "\xEB", Ai: "\xEC", Bi: "\xED", Ci: "\xEE", Hi: "\xEF", Ao: "\xF2", Bo: "\xF3", Co: "\xF4", Do: 245, Ho: "\xF6", Au: "\xF9", Bu: "\xFA", Cu: "\xFB", Hu: "\xFC", KC: "\xC7", Kc: "\xE7", q: "\xE6", z: "\u0153", a: "\xC6", j: "\u0152", DN: 209, Dn: 241, Hy: 255, S: 169, c: 170, R: 174, "B ": 180, 0: 176, 1: 177, 2: 178, 3: 179, 5: 181, 6: 182, 7: 183, Q: 185, k: 186, b: 208, i: 216, l: 222, s: 240, y: 248, "!": 161, '"': 162, "#": 163, "(": 164, "%": 165, "'": 167, "H ": 168, "+": 171, ";": 187, "<": 188, "=": 189, ">": 190, "?": 191, "{": 223 }, a = new RegExp("\x1BN(" + La(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(g, E) {
    var T = e[E];
    return typeof T == "number" ? Gp(T) : T;
  }, i = function(g, E, T) {
    var y = E.charCodeAt(0) - 32 << 4 | T.charCodeAt(0) - 48;
    return y == 59 ? g : Gp(y);
  };
  e["|"] = 254;
  function s(g, E) {
    switch (E.type) {
      case "base64":
        return c(Yr(g), E);
      case "binary":
        return c(g, E);
      case "buffer":
        return c(lt && Buffer.isBuffer(g) ? g.toString("binary") : Ci(g), E);
      case "array":
        return c(Si(g), E);
    }
    throw new Error("Unrecognized type " + E.type);
  }
  function c(g, E) {
    var T = g.split(/[\n\r]+/), y = -1, _ = -1, D = 0, b = 0, w = [], M = [], V = null, j = {}, C = [], A = [], S = [], N = 0, B;
    for (+E.codepage >= 0 && ya(+E.codepage); D !== T.length; ++D) {
      N = 0;
      var U = T[D].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, i).replace(a, r), ne = U.replace(/;;/g, "\0").split(";").map(function(W) {
        return W.replace(/\u0000/g, ";");
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
          for (b = 1; b < ne.length; ++b) switch (ne[b].charAt(0)) {
            case "A":
              break;
            case "X":
              _ = parseInt(ne[b].slice(1)) - 1, ae = true;
              break;
            case "Y":
              for (y = parseInt(ne[b].slice(1)) - 1, ae || (_ = 0), B = w.length; B <= y; ++B) w[B] = [];
              break;
            case "K":
              fe = ne[b].slice(1), fe.charAt(0) === '"' ? fe = fe.slice(1, fe.length - 1) : fe === "TRUE" ? fe = true : fe === "FALSE" ? fe = false : isNaN(Ta(fe)) ? isNaN(ks(fe).getDate()) || (fe = ir(fe)) : (fe = Ta(fe), V !== null && Ds(V) && (fe = mf(fe))), J = true;
              break;
            case "E":
              Q = true;
              var R = ys(ne[b].slice(1), { r: y, c: _ });
              w[y][_] = [w[y][_], R];
              break;
            case "S":
              we = true, w[y][_] = [w[y][_], "S5S"];
              break;
            case "G":
              break;
            case "R":
              H = parseInt(ne[b].slice(1)) - 1;
              break;
            case "C":
              re = parseInt(ne[b].slice(1)) - 1;
              break;
            default:
              if (E && E.WTF) throw new Error("SYLK bad record " + U);
          }
          if (J && (w[y][_] && w[y][_].length == 2 ? w[y][_][0] = fe : w[y][_] = fe, V = null), we) {
            if (Q) throw new Error("SYLK shared formula cannot have own formula");
            var z = H > -1 && w[H][re];
            if (!z || !z[1]) throw new Error("SYLK shared formula cannot find base");
            w[y][_][1] = by(z[1], { r: y - H, c: _ - re });
          }
          break;
        case "F":
          var q = 0;
          for (b = 1; b < ne.length; ++b) switch (ne[b].charAt(0)) {
            case "X":
              _ = parseInt(ne[b].slice(1)) - 1, ++q;
              break;
            case "Y":
              for (y = parseInt(ne[b].slice(1)) - 1, B = w.length; B <= y; ++B) w[B] = [];
              break;
            case "M":
              N = parseInt(ne[b].slice(1)) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              V = M[parseInt(ne[b].slice(1))];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (S = ne[b].slice(1).split(" "), B = parseInt(S[0], 10); B <= parseInt(S[1], 10); ++B) N = parseInt(S[2], 10), A[B - 1] = N === 0 ? { hidden: true } : { wch: N }, Cs(A[B - 1]);
              break;
            case "C":
              _ = parseInt(ne[b].slice(1)) - 1, A[_] || (A[_] = {});
              break;
            case "R":
              y = parseInt(ne[b].slice(1)) - 1, C[y] || (C[y] = {}), N > 0 ? (C[y].hpt = N, C[y].hpx = sc(N)) : N === 0 && (C[y].hidden = true);
              break;
            default:
              if (E && E.WTF) throw new Error("SYLK bad record " + U);
          }
          q < 1 && (V = null);
          break;
        default:
          if (E && E.WTF) throw new Error("SYLK bad record " + U);
      }
    }
    return C.length > 0 && (j["!rows"] = C), A.length > 0 && (j["!cols"] = A), E && E.sheetRows && (w = w.slice(0, E.sheetRows)), [w, j];
  }
  function u(g, E) {
    var T = s(g, E), y = T[0], _ = T[1], D = Fs(y, E);
    return La(_).forEach(function(b) {
      D[b] = _[b];
    }), D;
  }
  function o(g, E) {
    return Xn(u(g, E), E);
  }
  function x(g, E, T, y) {
    var _ = "C;Y" + (T + 1) + ";X" + (y + 1) + ";K";
    switch (g.t) {
      case "n":
        _ += g.v || 0, g.f && !g.F && (_ += ";E" + G8(g.f, { r: T, c: y }));
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
  function d(g, E) {
    E.forEach(function(T, y) {
      var _ = "F;W" + (y + 1) + " " + (y + 1) + " ";
      T.hidden ? _ += "0" : (typeof T.width == "number" && !T.wpx && (T.wpx = ff(T.width)), typeof T.wpx == "number" && !T.wch && (T.wch = uf(T.wpx)), typeof T.wch == "number" && (_ += Math.round(T.wch))), _.charAt(_.length - 1) != " " && g.push(_);
    });
  }
  function v(g, E) {
    E.forEach(function(T, y) {
      var _ = "F;";
      T.hidden ? _ += "M0;" : T.hpt ? _ += "M" + 20 * T.hpt + ";" : T.hpx && (_ += "M" + 20 * Ay(T.hpx) + ";"), _.length > 2 && g.push(_ + "R" + (y + 1));
    });
  }
  function m(g, E) {
    var T = ["ID;PWXL;N;E"], y = [], _ = Ut(g["!ref"]), D, b = Array.isArray(g), w = `\r
`;
    T.push("P;PGeneral"), T.push("F;P0;DG0G8;M255"), g["!cols"] && d(T, g["!cols"]), g["!rows"] && v(T, g["!rows"]), T.push("B;Y" + (_.e.r - _.s.r + 1) + ";X" + (_.e.c - _.s.c + 1) + ";D" + [_.s.c, _.s.r, _.e.c, _.e.r].join(" "));
    for (var M = _.s.r; M <= _.e.r; ++M) for (var V = _.s.c; V <= _.e.c; ++V) {
      var j = $e({ r: M, c: V });
      D = b ? (g[M] || [])[V] : g[j], !(!D || D.v == null && (!D.f || D.F)) && y.push(x(D, g, M, V));
    }
    return T.join(w) + w + y.join(w) + w + "E" + w;
  }
  return { to_workbook: o, to_sheet: u, from_sheet: m };
}(), nC = /* @__PURE__ */ function() {
  function e(c, u) {
    switch (u.type) {
      case "base64":
        return a(Yr(c), u);
      case "binary":
        return a(c, u);
      case "buffer":
        return a(lt && Buffer.isBuffer(c) ? c.toString("binary") : Ci(c), u);
      case "array":
        return a(Si(c), u);
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
        var g = o[v].trim().split(","), E = g[0], T = g[1];
        ++v;
        for (var y = o[v] || ""; (y.match(/["]/g) || []).length & 1 && v < o.length - 1; ) y += `
` + o[++v];
        switch (y = y.trim(), +E) {
          case -1:
            if (y === "BOT") {
              m[++x] = [], d = 0;
              continue;
            } else if (y !== "EOD") throw new Error("Unrecognized DIF special command " + y);
            break;
          case 0:
            y === "TRUE" ? m[x][d] = true : y === "FALSE" ? m[x][d] = false : isNaN(Ta(T)) ? isNaN(ks(T).getDate()) ? m[x][d] = T : m[x][d] = ir(T) : m[x][d] = Ta(T), ++d;
            break;
          case 1:
            y = y.slice(1, y.length - 1), y = y.replace(/""/g, '"'), y && y.match(/^=".*"$/) && (y = y.slice(2, -1)), m[x][d++] = y !== "" ? y : null;
            break;
        }
        if (y === "EOD") break;
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
      for (var E = v.s.r; E <= v.e.r; ++E) {
        u(d, -1, 0, "BOT");
        for (var T = v.s.c; T <= v.e.c; ++T) {
          var y = $e({ r: E, c: T });
          if (m = g ? (x[E] || [])[T] : x[y], !m) {
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
      var D = `\r
`, b = d.join(D);
      return b;
    };
  }();
  return { to_workbook: i, to_sheet: r, from_sheet: s };
}(), iC = function() {
  function e(m) {
    return m.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function a(m) {
    return m.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(m, g) {
    for (var E = m.split(`
`), T = -1, y = -1, _ = 0, D = []; _ !== E.length; ++_) {
      var b = E[_].trim().split(":");
      if (b[0] === "cell") {
        var w = kr(b[1]);
        if (D.length <= w.r) for (T = D.length; T <= w.r; ++T) D[T] || (D[T] = []);
        switch (T = w.r, y = w.c, b[2]) {
          case "t":
            D[T][y] = e(b[3]);
            break;
          case "v":
            D[T][y] = +b[3];
            break;
          case "vtf":
            var M = b[b.length - 1];
          case "vtc":
            switch (b[3]) {
              case "nl":
                D[T][y] = !!+b[4];
                break;
              default:
                D[T][y] = +b[4];
                break;
            }
            b[2] == "vtf" && (D[T][y] = [D[T][y], M]);
        }
      }
    }
    return g && g.sheetRows && (D = D.slice(0, g.sheetRows)), D;
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
    for (var g = [], E = [], T, y = "", _ = Rs(m["!ref"]), D = Array.isArray(m), b = _.s.r; b <= _.e.r; ++b) for (var w = _.s.c; w <= _.e.c; ++w) if (y = $e({ r: b, c: w }), T = D ? (m[b] || [])[w] : m[y], !(!T || T.v == null || T.t === "z")) {
      switch (E = ["cell", y, "t"], T.t) {
        case "s":
        case "str":
          E.push(a(T.v));
          break;
        case "n":
          T.f ? (E[2] = "vtf", E[3] = "n", E[4] = T.v, E[5] = a(T.f)) : (E[2] = "v", E[3] = T.v);
          break;
        case "b":
          E[2] = "vt" + (T.f ? "f" : "c"), E[3] = "nl", E[4] = T.v ? "1" : "0", E[5] = a(T.f || (T.v ? "TRUE" : "FALSE"));
          break;
        case "d":
          var M = br(ir(T.v));
          E[2] = "vtc", E[3] = "nd", E[4] = "" + M, E[5] = T.w || fa(T.z || We[14], M);
          break;
        case "e":
          continue;
      }
      g.push(E.join(":"));
    }
    return g.push("sheet:c:" + (_.e.c - _.s.c + 1) + ":r:" + (_.e.r - _.s.r + 1) + ":tvf:1"), g.push("valueformat:1:text-wiki"), g.join(`
`);
  }
  function v(m) {
    return [c, u, o, u, d(m), x].join(`
`);
  }
  return { to_workbook: s, to_sheet: i, from_sheet: v };
}(), nc = /* @__PURE__ */ function() {
  function e(v, m, g, E, T) {
    T.raw ? m[g][E] = v : v === "" || (v === "TRUE" ? m[g][E] = true : v === "FALSE" ? m[g][E] = false : isNaN(Ta(v)) ? isNaN(ks(v).getDate()) ? m[g][E] = v : m[g][E] = ir(v) : m[g][E] = Ta(v));
  }
  function a(v, m) {
    var g = m || {}, E = [];
    if (!v || v.length === 0) return E;
    for (var T = v.split(/[\r\n]/), y = T.length - 1; y >= 0 && T[y].length === 0; ) --y;
    for (var _ = 10, D = 0, b = 0; b <= y; ++b) D = T[b].indexOf(" "), D == -1 ? D = T[b].length : D++, _ = Math.max(_, D);
    for (b = 0; b <= y; ++b) {
      E[b] = [];
      var w = 0;
      for (e(T[b].slice(0, _).trim(), E, b, w, g), w = 1; w <= (T[b].length - _) / 10 + 1; ++w) e(T[b].slice(_ + (w - 1) * 10, _ + w * 10).trim(), E, b, w, g);
    }
    return g.sheetRows && (E = E.slice(0, g.sheetRows)), E;
  }
  var r = { 44: ",", 9: "	", 59: ";", 124: "|" }, i = { 44: 3, 9: 2, 59: 1, 124: 0 };
  function s(v) {
    for (var m = {}, g = false, E = 0, T = 0; E < v.length; ++E) (T = v.charCodeAt(E)) == 34 ? g = !g : !g && T in r && (m[T] = (m[T] || 0) + 1);
    T = [];
    for (E in m) Object.prototype.hasOwnProperty.call(m, E) && T.push([m[E], E]);
    if (!T.length) {
      m = i;
      for (E in m) Object.prototype.hasOwnProperty.call(m, E) && T.push([m[E], E]);
    }
    return T.sort(function(y, _) {
      return y[0] - _[0] || i[y[1]] - i[_[1]];
    }), r[T.pop()[1]] || 44;
  }
  function c(v, m) {
    var g = m || {}, E = "", T = g.dense ? [] : {}, y = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    v.slice(0, 4) == "sep=" ? v.charCodeAt(5) == 13 && v.charCodeAt(6) == 10 ? (E = v.charAt(4), v = v.slice(7)) : v.charCodeAt(5) == 13 || v.charCodeAt(5) == 10 ? (E = v.charAt(4), v = v.slice(6)) : E = s(v.slice(0, 1024)) : g && g.FS ? E = g.FS : E = s(v.slice(0, 1024));
    var _ = 0, D = 0, b = 0, w = 0, M = 0, V = E.charCodeAt(0), j = false, C = 0, A = v.charCodeAt(0);
    v = v.replace(/\r\n/mg, `
`);
    var S = g.dateNF != null ? p3(g.dateNF) : null;
    function N() {
      var B = v.slice(w, M), U = {};
      if (B.charAt(0) == '"' && B.charAt(B.length - 1) == '"' && (B = B.slice(1, -1).replace(/""/g, '"')), B.length === 0) U.t = "z";
      else if (g.raw) U.t = "s", U.v = B;
      else if (B.trim().length === 0) U.t = "s", U.v = B;
      else if (B.charCodeAt(0) == 61) B.charCodeAt(1) == 34 && B.charCodeAt(B.length - 1) == 34 ? (U.t = "s", U.v = B.slice(2, -1).replace(/""/g, '"')) : X8(B) ? (U.t = "n", U.f = B.slice(1)) : (U.t = "s", U.v = B);
      else if (B == "TRUE") U.t = "b", U.v = true;
      else if (B == "FALSE") U.t = "b", U.v = false;
      else if (!isNaN(b = Ta(B))) U.t = "n", g.cellText !== false && (U.w = B), U.v = b;
      else if (!isNaN(ks(B).getDate()) || S && B.match(S)) {
        U.z = g.dateNF || We[14];
        var ne = 0;
        S && B.match(S) && (B = m3(B, g.dateNF, B.match(S) || []), ne = 1), g.cellDates ? (U.t = "d", U.v = ir(B, ne)) : (U.t = "n", U.v = br(ir(B, ne))), g.cellText !== false && (U.w = fa(U.z, U.v instanceof Date ? br(U.v) : U.v)), g.cellNF || delete U.z;
      } else U.t = "s", U.v = B;
      if (U.t == "z" || (g.dense ? (T[_] || (T[_] = []), T[_][D] = U) : T[$e({ c: D, r: _ })] = U), w = M + 1, A = v.charCodeAt(w), y.e.c < D && (y.e.c = D), y.e.r < _ && (y.e.r = _), C == V) ++D;
      else if (D = 0, ++_, g.sheetRows && g.sheetRows <= _) return true;
    }
    e: for (; M < v.length; ++M) switch (C = v.charCodeAt(M)) {
      case 34:
        A === 34 && (j = !j);
        break;
      case V:
      case 10:
      case 13:
        if (!j && N()) break e;
        break;
    }
    return M - w > 0 && N(), T["!ref"] = ut(y), T;
  }
  function u(v, m) {
    return !(m && m.PRN) || m.FS || v.slice(0, 4) == "sep=" || v.indexOf("	") >= 0 || v.indexOf(",") >= 0 || v.indexOf(";") >= 0 ? c(v, m) : Fs(a(v, m), m);
  }
  function o(v, m) {
    var g = "", E = m.type == "string" ? [0, 0, 0, 0] : pd(v, m);
    switch (m.type) {
      case "base64":
        g = Yr(v);
        break;
      case "binary":
        g = v;
        break;
      case "buffer":
        m.codepage == 65001 ? g = v.toString("utf8") : (m.codepage, g = lt && Buffer.isBuffer(v) ? v.toString("binary") : Ci(v));
        break;
      case "array":
        g = Si(v);
        break;
      case "string":
        g = v;
        break;
      default:
        throw new Error("Unrecognized type " + m.type);
    }
    return E[0] == 239 && E[1] == 187 && E[2] == 191 ? g = bt(g.slice(3)) : m.type != "string" && m.type != "buffer" && m.codepage == 65001 ? g = bt(g) : m.type == "binary", g.slice(0, 19) == "socialcalc:version:" ? iC.to_sheet(m.type == "string" ? g : bt(g), m) : u(g, m);
  }
  function x(v, m) {
    return Xn(o(v, m), m);
  }
  function d(v) {
    for (var m = [], g = Ut(v["!ref"]), E, T = Array.isArray(v), y = g.s.r; y <= g.e.r; ++y) {
      for (var _ = [], D = g.s.c; D <= g.e.c; ++D) {
        var b = $e({ r: y, c: D });
        if (E = T ? (v[y] || [])[D] : v[b], !E || E.v == null) {
          _.push("          ");
          continue;
        }
        for (var w = (E.w || (ln(E), E.w) || "").slice(0, 10); w.length < 10; ) w += " ";
        _.push(w + (D === 0 ? " " : ""));
      }
      m.push(_.join(""));
    }
    return m.join(`
`);
  }
  return { to_workbook: x, to_sheet: o, from_sheet: d };
}();
function sC(e, a) {
  var r = a || {}, i = !!r.WTF;
  r.WTF = true;
  try {
    var s = aC.to_workbook(e, r);
    return r.WTF = i, s;
  } catch (c) {
    if (r.WTF = i, !c.message.match(/SYLK bad record ID/) && i) throw c;
    return nc.to_workbook(e, a);
  }
}
var ql = /* @__PURE__ */ function() {
  function e(R, z, q) {
    if (R) {
      ur(R, R.l || 0);
      for (var W = q.Enum || H; R.l < R.length; ) {
        var ie = R.read_shift(2), Ae = W[ie] || W[65535], pe = R.read_shift(2), ye = R.l + pe, _e = Ae.f && Ae.f(R, pe, q);
        if (R.l = ye, z(_e, Ae, ie)) return;
      }
    }
  }
  function a(R, z) {
    switch (z.type) {
      case "base64":
        return r(ga(Yr(R)), z);
      case "binary":
        return r(ga(R), z);
      case "buffer":
      case "array":
        return r(R, z);
    }
    throw "Unsupported type " + z.type;
  }
  function r(R, z) {
    if (!R) return R;
    var q = z || {}, W = q.dense ? [] : {}, ie = "Sheet1", Ae = "", pe = 0, ye = {}, _e = [], De = [], X = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ge = q.sheetRows || 0;
    if (R[2] == 0 && (R[3] == 8 || R[3] == 9) && R.length >= 16 && R[14] == 5 && R[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
    if (R[2] == 2) q.Enum = H, e(R, function(ke, Ie, Ke) {
      switch (Ke) {
        case 0:
          q.vers = ke, ke >= 4096 && (q.qpro = true);
          break;
        case 6:
          X = ke;
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
          Ke == 14 && (ke[2] & 112) == 112 && (ke[2] & 15) > 1 && (ke[2] & 15) < 15 && (ke[1].z = q.dateNF || We[14], q.cellDates && (ke[1].t = "d", ke[1].v = mf(ke[1].v))), q.qpro && ke[3] > pe && (W["!ref"] = ut(X), ye[ie] = W, _e.push(ie), W = q.dense ? [] : {}, X = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, pe = ke[3], ie = Ae || "Sheet" + (pe + 1), Ae = "");
          var Ze = q.dense ? (W[ke[0].r] || [])[ke[0].c] : W[$e(ke[0])];
          if (Ze) {
            Ze.t = ke[1].t, Ze.v = ke[1].v, ke[1].z != null && (Ze.z = ke[1].z), ke[1].f != null && (Ze.f = ke[1].f);
            break;
          }
          q.dense ? (W[ke[0].r] || (W[ke[0].r] = []), W[ke[0].r][ke[0].c] = ke[1]) : W[$e(ke[0])] = ke[1];
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
          if (ke[3] > pe && (W["!ref"] = ut(X), ye[ie] = W, _e.push(ie), W = q.dense ? [] : {}, X = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, pe = ke[3], ie = "Sheet" + (pe + 1)), Ge > 0 && ke[0].r >= Ge) break;
          q.dense ? (W[ke[0].r] || (W[ke[0].r] = []), W[ke[0].r][ke[0].c] = ke[1]) : W[$e(ke[0])] = ke[1], X.e.c < ke[0].c && (X.e.c = ke[0].c), X.e.r < ke[0].r && (X.e.r = ke[0].r);
          break;
        case 27:
          ke[14e3] && (De[ke[14e3][0]] = ke[14e3][1]);
          break;
        case 1537:
          De[ke[0]] = ke[1], ke[0] == pe && (ie = ke[1]);
          break;
      }
    }, q);
    else throw new Error("Unrecognized LOTUS BOF " + R[2]);
    if (W["!ref"] = ut(X), ye[Ae || ie] = W, _e.push(Ae || ie), !De.length) return { SheetNames: _e, Sheets: ye };
    for (var Le = {}, Be = [], Re = 0; Re < De.length; ++Re) ye[_e[Re]] ? (Be.push(De[Re] || _e[Re]), Le[De[Re]] = ye[De[Re]] || ye[_e[Re]]) : (Be.push(De[Re]), Le[De[Re]] = { "!ref": "A1" });
    return { SheetNames: Be, Sheets: Le };
  }
  function i(R, z) {
    var q = z || {};
    if (+q.codepage >= 0 && ya(+q.codepage), q.type == "string") throw new Error("Cannot write WK1 to JS string");
    var W = dh(), ie = Ut(R["!ref"]), Ae = Array.isArray(R), pe = [];
    ma(W, 0, c(1030)), ma(W, 6, x(ie));
    for (var ye = Math.min(ie.e.r, 8191), _e = ie.s.r; _e <= ye; ++_e) for (var De = hr(_e), X = ie.s.c; X <= ie.e.c; ++X) {
      _e === ie.s.r && (pe[X] = Zt(X));
      var Ge = pe[X] + De, Le = Ae ? (R[_e] || [])[X] : R[Ge];
      if (!(!Le || Le.t == "z")) if (Le.t == "n") (Le.v | 0) == Le.v && Le.v >= -32768 && Le.v <= 32767 ? ma(W, 13, E(_e, X, Le.v)) : ma(W, 14, y(_e, X, Le.v));
      else {
        var Be = ln(Le);
        ma(W, 15, m(_e, X, Be.slice(0, 239)));
      }
    }
    return ma(W, 1), W.end();
  }
  function s(R, z) {
    var q = z || {};
    if (+q.codepage >= 0 && ya(+q.codepage), q.type == "string") throw new Error("Cannot write WK3 to JS string");
    var W = dh();
    ma(W, 0, u(R));
    for (var ie = 0, Ae = 0; ie < R.SheetNames.length; ++ie) (R.Sheets[R.SheetNames[ie]] || {})["!ref"] && ma(W, 27, Q(R.SheetNames[ie], Ae++));
    var pe = 0;
    for (ie = 0; ie < R.SheetNames.length; ++ie) {
      var ye = R.Sheets[R.SheetNames[ie]];
      if (!(!ye || !ye["!ref"])) {
        for (var _e = Ut(ye["!ref"]), De = Array.isArray(ye), X = [], Ge = Math.min(_e.e.r, 8191), Le = _e.s.r; Le <= Ge; ++Le) for (var Be = hr(Le), Re = _e.s.c; Re <= _e.e.c; ++Re) {
          Le === _e.s.r && (X[Re] = Zt(Re));
          var ke = X[Re] + Be, Ie = De ? (ye[Le] || [])[Re] : ye[ke];
          if (!(!Ie || Ie.t == "z")) if (Ie.t == "n") ma(W, 23, N(Le, Re, pe, Ie.v));
          else {
            var Ke = ln(Ie);
            ma(W, 22, C(Le, Re, pe, Ke.slice(0, 239)));
          }
        }
        ++pe;
      }
    }
    return ma(W, 1), W.end();
  }
  function c(R) {
    var z = Wt(2);
    return z.write_shift(2, R), z;
  }
  function u(R) {
    var z = Wt(26);
    z.write_shift(2, 4096), z.write_shift(2, 4), z.write_shift(4, 0);
    for (var q = 0, W = 0, ie = 0, Ae = 0; Ae < R.SheetNames.length; ++Ae) {
      var pe = R.SheetNames[Ae], ye = R.Sheets[pe];
      if (!(!ye || !ye["!ref"])) {
        ++ie;
        var _e = Rs(ye["!ref"]);
        q < _e.e.r && (q = _e.e.r), W < _e.e.c && (W = _e.e.c);
      }
    }
    return q > 8191 && (q = 8191), z.write_shift(2, q), z.write_shift(1, ie), z.write_shift(1, W), z.write_shift(2, 0), z.write_shift(2, 0), z.write_shift(1, 1), z.write_shift(1, 2), z.write_shift(4, 0), z.write_shift(4, 0), z;
  }
  function o(R, z, q) {
    var W = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return z == 8 && q.qpro ? (W.s.c = R.read_shift(1), R.l++, W.s.r = R.read_shift(2), W.e.c = R.read_shift(1), R.l++, W.e.r = R.read_shift(2), W) : (W.s.c = R.read_shift(2), W.s.r = R.read_shift(2), z == 12 && q.qpro && (R.l += 2), W.e.c = R.read_shift(2), W.e.r = R.read_shift(2), z == 12 && q.qpro && (R.l += 2), W.s.c == 65535 && (W.s.c = W.e.c = W.s.r = W.e.r = 0), W);
  }
  function x(R) {
    var z = Wt(8);
    return z.write_shift(2, R.s.c), z.write_shift(2, R.s.r), z.write_shift(2, R.e.c), z.write_shift(2, R.e.r), z;
  }
  function d(R, z, q) {
    var W = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return q.qpro && q.vers != 20768 ? (W[0].c = R.read_shift(1), W[3] = R.read_shift(1), W[0].r = R.read_shift(2), R.l += 2) : (W[2] = R.read_shift(1), W[0].c = R.read_shift(2), W[0].r = R.read_shift(2)), W;
  }
  function v(R, z, q) {
    var W = R.l + z, ie = d(R, z, q);
    if (ie[1].t = "s", q.vers == 20768) {
      R.l++;
      var Ae = R.read_shift(1);
      return ie[1].v = R.read_shift(Ae, "utf8"), ie;
    }
    return q.qpro && R.l++, ie[1].v = R.read_shift(W - R.l, "cstr"), ie;
  }
  function m(R, z, q) {
    var W = Wt(7 + q.length);
    W.write_shift(1, 255), W.write_shift(2, z), W.write_shift(2, R), W.write_shift(1, 39);
    for (var ie = 0; ie < W.length; ++ie) {
      var Ae = q.charCodeAt(ie);
      W.write_shift(1, Ae >= 128 ? 95 : Ae);
    }
    return W.write_shift(1, 0), W;
  }
  function g(R, z, q) {
    var W = d(R, z, q);
    return W[1].v = R.read_shift(2, "i"), W;
  }
  function E(R, z, q) {
    var W = Wt(7);
    return W.write_shift(1, 255), W.write_shift(2, z), W.write_shift(2, R), W.write_shift(2, q, "i"), W;
  }
  function T(R, z, q) {
    var W = d(R, z, q);
    return W[1].v = R.read_shift(8, "f"), W;
  }
  function y(R, z, q) {
    var W = Wt(13);
    return W.write_shift(1, 255), W.write_shift(2, z), W.write_shift(2, R), W.write_shift(8, q, "f"), W;
  }
  function _(R, z, q) {
    var W = R.l + z, ie = d(R, z, q);
    if (ie[1].v = R.read_shift(8, "f"), q.qpro) R.l = W;
    else {
      var Ae = R.read_shift(2);
      M(R.slice(R.l, R.l + Ae), ie), R.l += Ae;
    }
    return ie;
  }
  function D(R, z, q) {
    var W = z & 32768;
    return z &= -32769, z = (W ? R : 0) + (z >= 8192 ? z - 16384 : z), (W ? "" : "$") + (q ? Zt(z) : hr(z));
  }
  var b = { 51: ["FALSE", 0], 52: ["TRUE", 0], 70: ["LEN", 1], 80: ["SUM", 69], 81: ["AVERAGEA", 69], 82: ["COUNTA", 69], 83: ["MINA", 69], 84: ["MAXA", 69], 111: ["T", 1] }, w = ["", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", ""];
  function M(R, z) {
    ur(R, 0);
    for (var q = [], W = 0, ie = "", Ae = "", pe = "", ye = ""; R.l < R.length; ) {
      var _e = R[R.l++];
      switch (_e) {
        case 0:
          q.push(R.read_shift(8, "f"));
          break;
        case 1:
          Ae = D(z[0].c, R.read_shift(2), true), ie = D(z[0].r, R.read_shift(2), false), q.push(Ae + ie);
          break;
        case 2:
          {
            var De = D(z[0].c, R.read_shift(2), true), X = D(z[0].r, R.read_shift(2), false);
            Ae = D(z[0].c, R.read_shift(2), true), ie = D(z[0].r, R.read_shift(2), false), q.push(De + X + ":" + Ae + ie);
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
          if (_e < 32 && w[_e]) ye = q.pop(), pe = q.pop(), q.push(pe + w[_e] + ye);
          else if (b[_e]) {
            if (W = b[_e][1], W == 69 && (W = R[R.l++]), W > q.length) {
              console.error("WK1 bad formula parse 0x" + _e.toString(16) + ":|" + q.join("|") + "|");
              return;
            }
            var Le = q.slice(-W);
            q.length -= W, q.push(b[_e][0] + "(" + Le.join(",") + ")");
          } else return _e <= 7 ? console.error("WK1 invalid opcode " + _e.toString(16)) : _e <= 24 ? console.error("WK1 unsupported op " + _e.toString(16)) : _e <= 30 ? console.error("WK1 invalid opcode " + _e.toString(16)) : _e <= 115 ? console.error("WK1 unsupported function opcode " + _e.toString(16)) : console.error("WK1 unrecognized opcode " + _e.toString(16));
      }
    }
    q.length == 1 ? z[1].f = "" + q[0] : console.error("WK1 bad formula parse |" + q.join("|") + "|");
  }
  function V(R) {
    var z = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return z[0].r = R.read_shift(2), z[3] = R[R.l++], z[0].c = R[R.l++], z;
  }
  function j(R, z) {
    var q = V(R);
    return q[1].t = "s", q[1].v = R.read_shift(z - 4, "cstr"), q;
  }
  function C(R, z, q, W) {
    var ie = Wt(6 + W.length);
    ie.write_shift(2, R), ie.write_shift(1, q), ie.write_shift(1, z), ie.write_shift(1, 39);
    for (var Ae = 0; Ae < W.length; ++Ae) {
      var pe = W.charCodeAt(Ae);
      ie.write_shift(1, pe >= 128 ? 95 : pe);
    }
    return ie.write_shift(1, 0), ie;
  }
  function A(R, z) {
    var q = V(R);
    q[1].v = R.read_shift(2);
    var W = q[1].v >> 1;
    if (q[1].v & 1) switch (W & 7) {
      case 0:
        W = (W >> 3) * 5e3;
        break;
      case 1:
        W = (W >> 3) * 500;
        break;
      case 2:
        W = (W >> 3) / 20;
        break;
      case 3:
        W = (W >> 3) / 200;
        break;
      case 4:
        W = (W >> 3) / 2e3;
        break;
      case 5:
        W = (W >> 3) / 2e4;
        break;
      case 6:
        W = (W >> 3) / 16;
        break;
      case 7:
        W = (W >> 3) / 64;
        break;
    }
    return q[1].v = W, q;
  }
  function S(R, z) {
    var q = V(R), W = R.read_shift(4), ie = R.read_shift(4), Ae = R.read_shift(2);
    if (Ae == 65535) return W === 0 && ie === 3221225472 ? (q[1].t = "e", q[1].v = 15) : W === 0 && ie === 3489660928 ? (q[1].t = "e", q[1].v = 42) : q[1].v = 0, q;
    var pe = Ae & 32768;
    return Ae = (Ae & 32767) - 16446, q[1].v = (1 - pe * 2) * (ie * Math.pow(2, Ae + 32) + W * Math.pow(2, Ae)), q;
  }
  function N(R, z, q, W) {
    var ie = Wt(14);
    if (ie.write_shift(2, R), ie.write_shift(1, q), ie.write_shift(1, z), W == 0) return ie.write_shift(4, 0), ie.write_shift(4, 0), ie.write_shift(2, 65535), ie;
    var Ae = 0, pe = 0, ye = 0, _e = 0;
    return W < 0 && (Ae = 1, W = -W), pe = Math.log2(W) | 0, W /= Math.pow(2, pe - 31), _e = W >>> 0, (_e & 2147483648) == 0 && (W /= 2, ++pe, _e = W >>> 0), W -= _e, _e |= 2147483648, _e >>>= 0, W *= Math.pow(2, 32), ye = W >>> 0, ie.write_shift(4, ye), ie.write_shift(4, _e), pe += 16383 + (Ae ? 32768 : 0), ie.write_shift(2, pe), ie;
  }
  function B(R, z) {
    var q = S(R);
    return R.l += z - 14, q;
  }
  function U(R, z) {
    var q = V(R), W = R.read_shift(4);
    return q[1].v = W >> 6, q;
  }
  function ne(R, z) {
    var q = V(R), W = R.read_shift(8, "f");
    return q[1].v = W, q;
  }
  function ge(R, z) {
    var q = ne(R);
    return R.l += z - 10, q;
  }
  function fe(R, z) {
    return R[R.l + z - 1] == 0 ? R.read_shift(z, "cstr") : "";
  }
  function J(R, z) {
    var q = R[R.l++];
    q > z - 1 && (q = z - 1);
    for (var W = ""; W.length < q; ) W += String.fromCharCode(R[R.l++]);
    return W;
  }
  function ae(R, z, q) {
    if (!(!q.qpro || z < 21)) {
      var W = R.read_shift(1);
      R.l += 17, R.l += 1, R.l += 2;
      var ie = R.read_shift(z - 21, "cstr");
      return [W, ie];
    }
  }
  function we(R, z) {
    for (var q = {}, W = R.l + z; R.l < W; ) {
      var ie = R.read_shift(2);
      if (ie == 14e3) {
        for (q[ie] = [0, ""], q[ie][0] = R.read_shift(2); R[R.l]; ) q[ie][1] += String.fromCharCode(R[R.l]), R.l++;
        R.l++;
      }
    }
    return q;
  }
  function Q(R, z) {
    var q = Wt(5 + R.length);
    q.write_shift(2, 14e3), q.write_shift(2, z);
    for (var W = 0; W < R.length; ++W) {
      var ie = R.charCodeAt(W);
      q[q.l++] = ie > 127 ? 95 : ie;
    }
    return q[q.l++] = 0, q;
  }
  var H = { 0: { n: "BOF", f: Yt }, 1: { n: "EOF" }, 2: { n: "CALCMODE" }, 3: { n: "CALCORDER" }, 4: { n: "SPLIT" }, 5: { n: "SYNC" }, 6: { n: "RANGE", f: o }, 7: { n: "WINDOW1" }, 8: { n: "COLW1" }, 9: { n: "WINTWO" }, 10: { n: "COLW2" }, 11: { n: "NAME" }, 12: { n: "BLANK" }, 13: { n: "INTEGER", f: g }, 14: { n: "NUMBER", f: T }, 15: { n: "LABEL", f: v }, 16: { n: "FORMULA", f: _ }, 24: { n: "TABLE" }, 25: { n: "ORANGE" }, 26: { n: "PRANGE" }, 27: { n: "SRANGE" }, 28: { n: "FRANGE" }, 29: { n: "KRANGE1" }, 32: { n: "HRANGE" }, 35: { n: "KRANGE2" }, 36: { n: "PROTEC" }, 37: { n: "FOOTER" }, 38: { n: "HEADER" }, 39: { n: "SETUP" }, 40: { n: "MARGINS" }, 41: { n: "LABELFMT" }, 42: { n: "TITLES" }, 43: { n: "SHEETJS" }, 45: { n: "GRAPH" }, 46: { n: "NGRAPH" }, 47: { n: "CALCCOUNT" }, 48: { n: "UNFORMATTED" }, 49: { n: "CURSORW12" }, 50: { n: "WINDOW" }, 51: { n: "STRING", f: v }, 55: { n: "PASSWORD" }, 56: { n: "LOCKED" }, 60: { n: "QUERY" }, 61: { n: "QUERYNAME" }, 62: { n: "PRINT" }, 63: { n: "PRINTNAME" }, 64: { n: "GRAPH2" }, 65: { n: "GRAPHNAME" }, 66: { n: "ZOOM" }, 67: { n: "SYMSPLIT" }, 68: { n: "NSROWS" }, 69: { n: "NSCOLS" }, 70: { n: "RULER" }, 71: { n: "NNAME" }, 72: { n: "ACOMM" }, 73: { n: "AMACRO" }, 74: { n: "PARSE" }, 102: { n: "PRANGES??" }, 103: { n: "RRANGES??" }, 104: { n: "FNAME??" }, 105: { n: "MRANGES??" }, 204: { n: "SHEETNAMECS", f: fe }, 222: { n: "SHEETNAMELP", f: J }, 65535: { n: "" } }, re = { 0: { n: "BOF" }, 1: { n: "EOF" }, 2: { n: "PASSWORD" }, 3: { n: "CALCSET" }, 4: { n: "WINDOWSET" }, 5: { n: "SHEETCELLPTR" }, 6: { n: "SHEETLAYOUT" }, 7: { n: "COLUMNWIDTH" }, 8: { n: "HIDDENCOLUMN" }, 9: { n: "USERRANGE" }, 10: { n: "SYSTEMRANGE" }, 11: { n: "ZEROFORCE" }, 12: { n: "SORTKEYDIR" }, 13: { n: "FILESEAL" }, 14: { n: "DATAFILLNUMS" }, 15: { n: "PRINTMAIN" }, 16: { n: "PRINTSTRING" }, 17: { n: "GRAPHMAIN" }, 18: { n: "GRAPHSTRING" }, 19: { n: "??" }, 20: { n: "ERRCELL" }, 21: { n: "NACELL" }, 22: { n: "LABEL16", f: j }, 23: { n: "NUMBER17", f: S }, 24: { n: "NUMBER18", f: A }, 25: { n: "FORMULA19", f: B }, 26: { n: "FORMULA1A" }, 27: { n: "XFORMAT", f: we }, 28: { n: "DTLABELMISC" }, 29: { n: "DTLABELCELL" }, 30: { n: "GRAPHWINDOW" }, 31: { n: "CPA" }, 32: { n: "LPLAUTO" }, 33: { n: "QUERY" }, 34: { n: "HIDDENSHEET" }, 35: { n: "??" }, 37: { n: "NUMBER25", f: U }, 38: { n: "??" }, 39: { n: "NUMBER27", f: ne }, 40: { n: "FORMULA28", f: ge }, 142: { n: "??" }, 147: { n: "??" }, 150: { n: "??" }, 151: { n: "??" }, 152: { n: "??" }, 153: { n: "??" }, 154: { n: "??" }, 155: { n: "??" }, 156: { n: "??" }, 163: { n: "??" }, 174: { n: "??" }, 175: { n: "??" }, 176: { n: "??" }, 177: { n: "??" }, 184: { n: "??" }, 185: { n: "??" }, 186: { n: "??" }, 187: { n: "??" }, 188: { n: "??" }, 195: { n: "??" }, 201: { n: "??" }, 204: { n: "SHEETNAMECS", f: fe }, 205: { n: "??" }, 206: { n: "??" }, 207: { n: "??" }, 208: { n: "??" }, 256: { n: "??" }, 259: { n: "??" }, 260: { n: "??" }, 261: { n: "??" }, 262: { n: "??" }, 263: { n: "??" }, 265: { n: "??" }, 266: { n: "??" }, 267: { n: "??" }, 268: { n: "??" }, 270: { n: "??" }, 271: { n: "??" }, 384: { n: "??" }, 389: { n: "??" }, 390: { n: "??" }, 393: { n: "??" }, 396: { n: "??" }, 512: { n: "??" }, 514: { n: "??" }, 513: { n: "??" }, 516: { n: "??" }, 517: { n: "??" }, 640: { n: "??" }, 641: { n: "??" }, 642: { n: "??" }, 643: { n: "??" }, 644: { n: "??" }, 645: { n: "??" }, 646: { n: "??" }, 647: { n: "??" }, 648: { n: "??" }, 658: { n: "??" }, 659: { n: "??" }, 660: { n: "??" }, 661: { n: "??" }, 662: { n: "??" }, 665: { n: "??" }, 666: { n: "??" }, 768: { n: "??" }, 772: { n: "??" }, 1537: { n: "SHEETINFOQP", f: ae }, 1600: { n: "??" }, 1602: { n: "??" }, 1793: { n: "??" }, 1794: { n: "??" }, 1795: { n: "??" }, 1796: { n: "??" }, 1920: { n: "??" }, 2048: { n: "??" }, 2049: { n: "??" }, 2052: { n: "??" }, 2688: { n: "??" }, 10998: { n: "??" }, 12849: { n: "??" }, 28233: { n: "??" }, 28484: { n: "??" }, 65535: { n: "" } };
  return { sheet_to_wk1: i, book_to_wk3: s, to_workbook: a };
}();
function lC(e) {
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
        a.cp = $h[parseInt(c.val, 10)];
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
var cC = function() {
  var e = rc("t"), a = rc("rPr");
  function r(c) {
    var u = c.match(e);
    if (!u) return { t: "s", v: "" };
    var o = { t: "s", v: ot(u[1]) }, x = c.match(a);
    return x && (o.s = lC(x[1])), o;
  }
  var i = /<(?:\w+:)?r>/g, s = /<\/(?:\w+:)?r>/;
  return function(u) {
    return u.replace(i, "").split(s).map(r).filter(function(o) {
      return o.v;
    });
  };
}(), fC = /* @__PURE__ */ function() {
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
}(), uC = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, oC = /<(?:\w+:)?r>/, hC = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function fd(e, a) {
  var r = a ? a.cellHTML : true, i = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (i.t = ot(bt(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), i.r = bt(e), r && (i.h = Jh(i.t))) : e.match(oC) && (i.r = bt(e), i.t = ot(bt((e.replace(hC, "").match(uC) || []).join("").replace(_r, ""))), r && (i.h = fC(cC(i.r)))), i) : { t: "" };
}
var dC = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, xC = /<(?:\w+:)?(?:si|sstItem)>/g, vC = /<\/(?:\w+:)?(?:si|sstItem)>/;
function pC(e, a) {
  var r = [], i = "";
  if (!e) return r;
  var s = e.match(dC);
  if (s) {
    i = s[2].replace(xC, "").split(vC);
    for (var c = 0; c != i.length; ++c) {
      var u = fd(i[c].trim(), a);
      u != null && (r[r.length] = u);
    }
    s = Pe(s[1]), r.Count = s.count, r.Unique = s.uniqueCount;
  }
  return r;
}
function mC(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function gC(e, a) {
  var r = [], i = false;
  return fn(e, function(c, u, o) {
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
function an(e, a) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), a >= 4 && (e.l += a - 4), r;
}
function yC(e) {
  var a = {};
  return a.id = e.read_shift(0, "lpp4"), a.R = an(e, 4), a.U = an(e, 4), a.W = an(e, 4), a;
}
function EC(e) {
  for (var a = e.read_shift(4), r = e.l + a - 4, i = {}, s = e.read_shift(4), c = []; s-- > 0; ) c.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (i.name = e.read_shift(0, "lpp4"), i.comps = c, e.l != r) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return i;
}
function _C(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(EC(e));
  return a;
}
function TC(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(e.read_shift(0, "lpp4"));
  return a;
}
function wC(e) {
  var a = {};
  return e.read_shift(4), e.l += 4, a.id = e.read_shift(0, "lpp4"), a.name = e.read_shift(0, "lpp4"), a.R = an(e, 4), a.U = an(e, 4), a.W = an(e, 4), a;
}
function SC(e) {
  var a = wC(e);
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
function AC(e) {
  var a = an(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, kC(e)];
    case 3:
      return [a.Minor, CC()];
    case 4:
      return [a.Minor, bC(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function kC(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), i = Ey(e, r), s = _y(e, e.length - e.l);
  return { t: "Std", h: i, v: s };
}
function CC() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function bC(e) {
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
function OC(e, a) {
  var r = {}, i = r.EncryptionVersionInfo = an(e, 4);
  if (a -= 4, i.Minor != 2) throw new Error("unrecognized minor version code: " + i.Minor);
  if (i.Major > 4 || i.Major < 2) throw new Error("unrecognized major version code: " + i.Major);
  r.Flags = e.read_shift(4), a -= 4;
  var s = e.read_shift(4);
  return a -= 4, r.EncryptionHeader = Ey(e, s), a -= s, r.EncryptionVerifier = _y(e, a), r;
}
function DC(e) {
  var a = {}, r = a.EncryptionVersionInfo = an(e, 4);
  if (r.Major != 1 || r.Minor != 1) throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return a.Salt = e.read_shift(16), a.EncryptedVerifier = e.read_shift(16), a.EncryptedVerifierHash = e.read_shift(16), a;
}
function RC(e) {
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
    var g, E, T;
    for ((d & 1) === 1 && (g = x >> 8, v[d] = s(e[0], g), --d, g = x & 255, E = o[o.length - 1], v[d] = s(E, g)); d > 0; ) --d, g = x >> 8, v[d] = s(o[d], g), --d, g = x & 255, v[d] = s(o[d], g);
    for (d = 15, T = 15 - o.length; T > 0; ) g = x >> 8, v[d] = s(e[T], g), --d, --T, g = x & 255, v[d] = s(o[d], g), --d, --T;
    return v;
  };
}(), FC = function(e, a, r, i, s) {
  s || (s = a), i || (i = Ty(e));
  var c, u;
  for (c = 0; c != a.length; ++c) u = a[c], u ^= i[r], u = (u >> 5 | u << 3) & 255, s[c] = u, ++r;
  return [s, r, i];
}, NC = function(e) {
  var a = 0, r = Ty(e);
  return function(i) {
    var s = FC("", i, a, r);
    return a = s[1], s[0];
  };
};
function MC(e, a, r, i) {
  var s = { key: Yt(e), verificationBytes: Yt(e) };
  return r.password && (s.verifier = RC(r.password)), i.valid = s.verificationBytes === s.verifier, i.valid && (i.insitu = NC(r.password)), s;
}
function LC(e, a, r) {
  var i = r || {};
  return i.Info = e.read_shift(2), e.l -= 2, i.Info === 1 ? i.Data = DC(e) : i.Data = OC(e, a), i;
}
function BC(e, a, r) {
  var i = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return i.Type ? LC(e, a - 2, i) : MC(e, r.biff >= 8 ? a : a - 2, r, i), i;
}
var UC = /* @__PURE__ */ function() {
  function e(s, c) {
    switch (c.type) {
      case "base64":
        return a(Yr(s), c);
      case "binary":
        return a(s, c);
      case "buffer":
        return a(lt && Buffer.isBuffer(s) ? s.toString("binary") : Ci(s), c);
      case "array":
        return a(Si(s), c);
    }
    throw new Error("Unrecognized type " + c.type);
  }
  function a(s, c) {
    var u = c || {}, o = u.dense ? [] : {}, x = s.match(/\\trowd.*?\\row\b/g);
    if (!x.length) throw new Error("RTF missing table");
    var d = { s: { c: 0, r: 0 }, e: { c: 0, r: x.length - 1 } };
    return x.forEach(function(v, m) {
      Array.isArray(o) && (o[m] = []);
      for (var g = /\\\w+\b/g, E = 0, T, y = -1; T = g.exec(v); ) {
        switch (T[0]) {
          case "\\cell":
            var _ = v.slice(E, g.lastIndex - T[0].length);
            if (_[0] == " " && (_ = _.slice(1)), ++y, _.length) {
              var D = { v: _, t: "s" };
              Array.isArray(o) ? o[m][y] = D : o[$e({ r: m, c: y })] = D;
            }
            break;
        }
        E = g.lastIndex;
      }
      y > d.e.c && (d.e.c = y);
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
        var m = $e({ r: d, c: v });
        o = x ? (s[d] || [])[v] : s[m], !(!o || o.v == null && (!o.f || o.F)) && (c.push(" " + (o.w || (ln(o), o.w))), c.push("\\cell"));
      }
      c.push("\\pard\\intbl\\row");
    }
    return c.join("") + "}";
  }
  return { to_workbook: r, to_sheet: e, from_sheet: i };
}();
function IC(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
}
function ic(e) {
  for (var a = 0, r = 1; a != 3; ++a) r = r * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return r.toString(16).toUpperCase().slice(1);
}
function HC(e) {
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
function jC(e) {
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
  var r = HC(IC(e));
  return a < 0 ? r[2] = r[2] * (1 + a) : r[2] = 1 - (1 - r[2]) * (1 - a), ic(jC(r));
}
var wy = 6, zC = 15, PC = 1, Ar = wy;
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
  if (a > 5e-3) for (Ar = PC; Ar < zC; ++Ar) Math.abs(e - qo(e)) <= a && (a = Math.abs(e - qo(e)), r = Ar);
  Ar = r;
}
function Cs(e) {
  e.width ? (e.wpx = ff(e.width), e.wch = uf(e.wpx), e.MDW = Ar) : e.wpx ? (e.wch = uf(e.wpx), e.width = mh(e.wch), e.MDW = Ar) : typeof e.wch == "number" && (e.width = mh(e.wch), e.wpx = ff(e.width), e.MDW = Ar), e.customWidth && delete e.customWidth;
}
var GC = 96, Sy = GC;
function Ay(e) {
  return e * 96 / Sy;
}
function sc(e) {
  return e * Sy / 96;
}
var VC = { None: "none", Solid: "solid", Gray50: "mediumGray", Gray75: "darkGray", Gray25: "lightGray", HorzStripe: "darkHorizontal", VertStripe: "darkVertical", ReverseDiagStripe: "darkDown", DiagStripe: "darkUp", DiagCross: "darkGrid", ThickDiagCross: "darkTrellis", ThinHorzStripe: "lightHorizontal", ThinVertStripe: "lightVertical", ThinReverseDiagStripe: "lightDown", ThinHorzCross: "lightGrid" };
function XC(e, a, r, i) {
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
function $C(e, a, r, i) {
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
function YC(e, a, r, i) {
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
        o.codepage = $h[parseInt(o.val, 10)];
        break;
      case "<color":
        if (s.color || (s.color = {}), o.auto && (s.color.auto = Ft(o.auto)), o.rgb) s.color.rgb = o.rgb.slice(-6);
        else if (o.indexed) {
          s.color.index = parseInt(o.indexed, 10);
          var x = _i[s.color.index];
          s.color.index == 81 && (x = _i[1]), x || (x = _i[1]), s.color.rgb = x[0].toString(16) + x[1].toString(16) + x[2].toString(16);
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
function qC(e, a, r) {
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
            Ei(o, x);
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
var P0 = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], G0 = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function KC(e, a, r) {
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
        for (i = u, delete i[0], o = 0; o < P0.length; ++o) i[P0[o]] && (i[P0[o]] = parseInt(i[P0[o]], 10));
        for (o = 0; o < G0.length; ++o) i[G0[o]] && (i[G0[o]] = Ft(i[G0[o]]));
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
var WC = /* @__PURE__ */ function() {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, i = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, s = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, c = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(o, x, d) {
    var v = {};
    if (!o) return v;
    o = o.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var m;
    return (m = o.match(a)) && qC(m, v, d), (m = o.match(s)) && YC(m, v, x, d), (m = o.match(i)) && $C(m, v, x, d), (m = o.match(c)) && XC(m, v, x, d), (m = o.match(r)) && KC(m, v, d), v;
  };
}();
function ZC(e, a) {
  var r = e.read_shift(2), i = yr(e);
  return [r, i];
}
function QC(e, a, r) {
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
var JC = Er;
function e8(e, a) {
  var r = e.l + a, i = e.read_shift(2), s = e.read_shift(2);
  return e.l = r, { ixfe: i, numFmtId: s };
}
var t8 = Er;
function r8(e, a, r) {
  var i = {};
  i.NumberFmt = [];
  for (var s in We) i.NumberFmt[s] = We[s];
  i.CellXf = [], i.Fonts = [];
  var c = [], u = false;
  return fn(e, function(x, d, v) {
    switch (v) {
      case 44:
        i.NumberFmt[x[0]] = x[1], Ei(x[1], x[0]);
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
var a8 = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];
function n8(e, a, r) {
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
        c[0].charAt(1) === "/" ? (a.themeElements.clrScheme[a8.indexOf(c[0])] = i, i = {}) : i.name = c[0].slice(3, c[0].length - 1);
        break;
      default:
        if (r && r.WTF) throw new Error("Unrecognized " + c[0] + " in clrScheme");
    }
  });
}
function i8() {
}
function s8() {
}
var l8 = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, c8 = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, f8 = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function u8(e, a, r) {
  a.themeElements = {};
  var i;
  [["clrScheme", l8, n8], ["fontScheme", c8, i8], ["fmtScheme", f8, s8]].forEach(function(s) {
    if (!(i = e.match(s[1]))) throw new Error(s[0] + " not found in themeElements");
    s[2](i, a, r);
  });
}
var o8 = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function ky(e, a) {
  (!e || e.length === 0) && (e = h8());
  var r, i = {};
  if (!(r = e.match(o8))) throw new Error("themeElements not found in theme");
  return u8(r[0], i, a), i.raw = e, i;
}
function h8(e, a) {
  var r = [U2];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function d8(e, a, r) {
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
function x8(e) {
  return e.read_shift(4);
}
function v8(e) {
  var a = {};
  switch (a.xclrType = e.read_shift(2), a.nTintShade = e.read_shift(2), a.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = p8(e, 4);
      break;
    case 2:
      a.xclrValue = hy(e);
      break;
    case 3:
      a.xclrValue = x8(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, a;
}
function p8(e, a) {
  return Er(e, a);
}
function m8(e, a) {
  return Er(e, a);
}
function g8(e) {
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
      i[1] = v8(e);
      break;
    case 6:
      i[1] = m8(e, r);
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
function y8(e, a) {
  var r = e.l + a;
  e.l += 2;
  var i = e.read_shift(2);
  e.l += 2;
  for (var s = e.read_shift(2), c = []; s-- > 0; ) c.push(g8(e, r - e.l));
  return { ixfe: i, ext: c };
}
function E8(e, a) {
  a.forEach(function(r) {
    r[0];
  });
}
function _8(e, a) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: yr(e) };
}
function T8(e) {
  for (var a = [], r = e.read_shift(4); r-- > 0; ) a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function w8(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function S8(e, a, r) {
  var i = { Types: [], Cell: [], Value: [] }, s = r || {}, c = [], u = false, o = 2;
  return fn(e, function(x, d, v) {
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
function A8(e, a, r) {
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
function k8(e) {
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
function C8(e) {
  var a = {};
  a.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), a.r = $e(r);
  var i = e.read_shift(1);
  return i & 2 && (a.l = "1"), i & 8 && (a.a = "1"), a;
}
function b8(e, a, r) {
  var i = [];
  return fn(e, function(c, u, o) {
    switch (o) {
      case 63:
        i.push(c);
        break;
      default:
        if (!u.T) throw new Error("Unexpected record 0x" + o.toString(16));
    }
  }), i;
}
function O8(e, a, r, i) {
  if (!e) return e;
  var s = i || {}, c = false;
  fn(e, function(o, x, d) {
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
function D8(e, a) {
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
function R8(e, a) {
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
function F8(e, a) {
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
function N8(e, a) {
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
function M8(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var r = Oi(e);
  return a.rfx = r.s, a.ref = $e(r.s), e.l += 16, a;
}
var L8 = yr;
function B8(e, a) {
  var r = [], i = [], s = {}, c = false;
  return fn(e, function(o, x, d) {
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
var U8 = "application/vnd.ms-office.vbaProject";
function I8(e) {
  var a = ft.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, i) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var s = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      ft.utils.cfb_add(a, s, e.FileIndex[i].content);
    }
  }), ft.write(a);
}
function H8() {
  return { "!type": "dialog" };
}
function j8() {
  return { "!type": "dialog" };
}
function z8() {
  return { "!type": "macro" };
}
function P8() {
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
}(), Cy = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, G8 = /* @__PURE__ */ function() {
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
function V8(e, a, r) {
  var i = Rs(a), s = i.s, c = kr(r), u = { r: c.r - s.r, c: c.c - s.c };
  return by(e, u);
}
function X8(e) {
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
    if (r.biff >= 2 && r.biff <= 5) return Dy(e);
    r.biff == 12 && (i = 4);
  }
  var s = e.read_shift(i), c = e.read_shift(i), u = Gn(e), o = Gn(e);
  return { s: { r: s, c: u[0], cRel: u[1], rRel: u[2] }, e: { r: c, c: o[0], cRel: o[1], rRel: o[2] } };
}
function Dy(e) {
  var a = Gn(e), r = Gn(e), i = e.read_shift(1), s = e.read_shift(1);
  return { s: { r: a[0], c: i, cRel: a[1], rRel: a[2] }, e: { r: r[0], c: s, cRel: r[1], rRel: r[2] } };
}
function $8(e, a, r) {
  if (r.biff < 8) return Dy(e);
  var i = e.read_shift(r.biff == 12 ? 4 : 2), s = e.read_shift(r.biff == 12 ? 4 : 2), c = Gn(e), u = Gn(e);
  return { s: { r: i, c: c[0], cRel: c[1], rRel: c[2] }, e: { r: s, c: u[0], cRel: u[1], rRel: u[2] } };
}
function Ry(e, a, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return Y8(e);
  var i = e.read_shift(r && r.biff == 12 ? 4 : 2), s = Gn(e);
  return { r: i, c: s[0], cRel: s[1], rRel: s[2] };
}
function Y8(e) {
  var a = Gn(e), r = e.read_shift(1);
  return { r: a[0], c: r, cRel: a[1], rRel: a[2] };
}
function q8(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return { r: a, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function K8(e, a, r) {
  var i = r && r.biff ? r.biff : 8;
  if (i >= 2 && i <= 5) return W8(e);
  var s = e.read_shift(i >= 12 ? 4 : 2), c = e.read_shift(2), u = (c & 16384) >> 14, o = (c & 32768) >> 15;
  if (c &= 16383, o == 1) for (; s > 524287; ) s -= 1048576;
  if (u == 1) for (; c > 8191; ) c = c - 16384;
  return { r: s, c, cRel: u, rRel: o };
}
function W8(e) {
  var a = e.read_shift(2), r = e.read_shift(1), i = (a & 32768) >> 15, s = (a & 16384) >> 14;
  return a &= 16383, i == 1 && a >= 8192 && (a = a - 16384), s == 1 && r >= 128 && (r = r - 256), { r: a, c: r, cRel: s, rRel: i };
}
function Z8(e, a, r) {
  var i = (e[e.l++] & 96) >> 5, s = Oy(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [i, s];
}
function Q8(e, a, r) {
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
function J8(e, a, r) {
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
  var i = (e[e.l++] & 96) >> 5, s = $8(e, a - 1, r);
  return [i, s];
}
function r6(e, a, r) {
  var i = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [i];
}
function Dm(e) {
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
  var s = Ry(e, 0, r);
  return [i, s];
}
function o6(e, a, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var s = K8(e, 0, r);
  return [i, s];
}
function h6(e, a, r) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var s = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var c = Ry(e, 0, r);
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
  return e.l++, Di[e.read_shift(1)];
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
  return e.l++, pc(e, a - 1, r);
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
      r[1] = Di[e[e.l]], e.l += a == 12 ? 4 : 8;
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
  for (var i = e.read_shift(r.biff == 12 ? 4 : 2), s = [], c = 0; c != i; ++c) s.push((r.biff == 12 ? Oi : gf)(e));
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
function D6(e, a, r) {
  var i = e.read_shift(1) >>> 5 & 3, s = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [i, s];
}
function R6(e, a, r) {
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
function gc(e, a, r) {
  return e.l += 2, [q8(e)];
}
function od(e) {
  return e.l += 6, [];
}
var B6 = gc, U6 = od, I6 = od, H6 = gc;
function Ny(e) {
  return e.l += 2, [Yt(e), e.read_shift(2) & 1];
}
var j6 = gc, z6 = Ny, P6 = od, G6 = gc, V6 = gc, X6 = ["Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current"];
function $6(e) {
  e.l += 2;
  var a = e.read_shift(2), r = e.read_shift(2), i = e.read_shift(4), s = e.read_shift(2), c = e.read_shift(2), u = X6[r >> 2 & 31];
  return { ixti: a, coltype: r & 3, rt: u, idx: i, c: s, C: c };
}
function Y6(e) {
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
var Rm = { 1: { n: "PtgExp", f: m6 }, 2: { n: "PtgTbl", f: L6 }, 3: { n: "PtgAdd", f: Xt }, 4: { n: "PtgSub", f: Xt }, 5: { n: "PtgMul", f: Xt }, 6: { n: "PtgDiv", f: Xt }, 7: { n: "PtgPower", f: Xt }, 8: { n: "PtgConcat", f: Xt }, 9: { n: "PtgLt", f: Xt }, 10: { n: "PtgLe", f: Xt }, 11: { n: "PtgEq", f: Xt }, 12: { n: "PtgGe", f: Xt }, 13: { n: "PtgGt", f: Xt }, 14: { n: "PtgNe", f: Xt }, 15: { n: "PtgIsect", f: Xt }, 16: { n: "PtgUnion", f: Xt }, 17: { n: "PtgRange", f: Xt }, 18: { n: "PtgUplus", f: Xt }, 19: { n: "PtgUminus", f: Xt }, 20: { n: "PtgPercent", f: Xt }, 21: { n: "PtgParen", f: Xt }, 22: { n: "PtgMissArg", f: Xt }, 23: { n: "PtgStr", f: T6 }, 26: { n: "PtgSheet", f: q6 }, 27: { n: "PtgEndSheet", f: K6 }, 28: { n: "PtgErr", f: g6 }, 29: { n: "PtgBool", f: E6 }, 30: { n: "PtgInt", f: y6 }, 31: { n: "PtgNum", f: _6 }, 32: { n: "PtgArray", f: r6 }, 33: { n: "PtgFunc", f: d6 }, 34: { n: "PtgFuncVar", f: x6 }, 35: { n: "PtgName", f: k6 }, 36: { n: "PtgRef", f: u6 }, 37: { n: "PtgArea", f: Z8 }, 38: { n: "PtgMemArea", f: O6 }, 39: { n: "PtgMemErr", f: N6 }, 40: { n: "PtgMemNoMem", f: M6 }, 41: { n: "PtgMemFunc", f: D6 }, 42: { n: "PtgRefErr", f: R6 }, 43: { n: "PtgAreaErr", f: J8 }, 44: { n: "PtgRefN", f: o6 }, 45: { n: "PtgAreaN", f: t6 }, 46: { n: "PtgMemAreaN", f: W6 }, 47: { n: "PtgMemNoMemN", f: Z6 }, 57: { n: "PtgNameX", f: C6 }, 58: { n: "PtgRef3d", f: h6 }, 59: { n: "PtgArea3d", f: Q8 }, 60: { n: "PtgRefErr3d", f: F6 }, 61: { n: "PtgAreaErr3d", f: e6 }, 255: {} }, J6 = { 64: 32, 96: 32, 65: 33, 97: 33, 66: 34, 98: 34, 67: 35, 99: 35, 68: 36, 100: 36, 69: 37, 101: 37, 70: 38, 102: 38, 71: 39, 103: 39, 72: 40, 104: 40, 73: 41, 105: 41, 74: 42, 106: 42, 75: 43, 107: 43, 76: 44, 108: 44, 77: 45, 109: 45, 78: 46, 110: 46, 79: 47, 111: 47, 88: 34, 120: 34, 89: 57, 121: 57, 90: 58, 122: 58, 91: 59, 123: 59, 92: 60, 124: 60, 93: 61, 125: 61 }, eb = { 1: { n: "PtgElfLel", f: Ny }, 2: { n: "PtgElfRw", f: G6 }, 3: { n: "PtgElfCol", f: B6 }, 6: { n: "PtgElfRwV", f: V6 }, 7: { n: "PtgElfColV", f: H6 }, 10: { n: "PtgElfRadical", f: j6 }, 11: { n: "PtgElfRadicalS", f: P6 }, 13: { n: "PtgElfColS", f: U6 }, 15: { n: "PtgElfColSV", f: I6 }, 16: { n: "PtgElfRadicalLel", f: z6 }, 25: { n: "PtgList", f: $6 }, 29: { n: "PtgSxName", f: Y6 }, 255: {} }, tb = { 0: { n: "PtgAttrNoop", f: Q6 }, 1: { n: "PtgAttrSemi", f: l6 }, 2: { n: "PtgAttrIf", f: i6 }, 4: { n: "PtgAttrChoose", f: a6 }, 8: { n: "PtgAttrGoto", f: n6 }, 16: { n: "PtgAttrSum", f: p6 }, 32: { n: "PtgAttrBaxcel", f: Dm }, 33: { n: "PtgAttrBaxcel", f: Dm }, 64: { n: "PtgAttrSpace", f: c6 }, 65: { n: "PtgAttrSpaceSemi", f: f6 }, 128: { n: "PtgAttrIfError", f: s6 }, 255: {} };
function yc(e, a, r, i) {
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
function Ec(e, a, r) {
  for (var i = e.l + a, s, c, u = []; i != e.l; ) a = i - e.l, c = e[e.l], s = Rm[c] || Rm[J6[c]], (c === 24 || c === 25) && (s = (c === 24 ? eb : tb)[e[e.l + 1]]), !s || !s.f ? Er(e, a) : u.push([s.n, s.f(e, a, r)]);
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
  var c = s && s.biff || 8, u = { s: { c: 0, r: 0 } }, o = [], x, d, v, m = 0, g = 0, E, T = "";
  if (!e[0] || !e[0][0]) return "";
  for (var y = -1, _ = "", D = 0, b = e[0].length; D < b; ++D) {
    var w = e[0][D];
    switch (w[0]) {
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
        if (x = o.pop(), d = o.pop(), y >= 0) {
          switch (e[0][y][1][0]) {
            case 0:
              _ = Bt(" ", e[0][y][1][1]);
              break;
            case 1:
              _ = Bt("\r", e[0][y][1][1]);
              break;
            default:
              if (_ = "", s.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          d = d + _, y = -1;
        }
        o.push(d + ab[w[0]] + x);
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
        v = Vl(w[1][1], u, s), o.push(Xl(v, c));
        break;
      case "PtgRefN":
        v = r ? Vl(w[1][1], r, s) : w[1][1], o.push(Xl(v, c));
        break;
      case "PtgRef3d":
        m = w[1][1], v = Vl(w[1][2], u, s), T = Fm(i, m, s), o.push(T + "!" + Xl(v, c));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var M = w[1][0], V = w[1][1];
        M || (M = 0), M &= 127;
        var j = M == 0 ? [] : o.slice(-M);
        o.length -= M, V === "User" && (V = j.shift()), o.push(V + "(" + j.join(",") + ")");
        break;
      case "PtgBool":
        o.push(w[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        o.push(w[1]);
        break;
      case "PtgNum":
        o.push(String(w[1]));
        break;
      case "PtgStr":
        o.push('"' + w[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        o.push(w[1]);
        break;
      case "PtgAreaN":
        E = hm(w[1][1], r ? { s: r } : u, s), o.push($o(E, s));
        break;
      case "PtgArea":
        E = hm(w[1][1], u, s), o.push($o(E, s));
        break;
      case "PtgArea3d":
        m = w[1][1], E = w[1][2], T = Fm(i, m, s), o.push(T + "!" + $o(E, s));
        break;
      case "PtgAttrSum":
        o.push("SUM(" + o.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        g = w[1][2];
        var C = (i.names || [])[g - 1] || (i[0] || [])[g], A = C ? C.Name : "SH33TJSNAME" + String(g);
        A && A.slice(0, 6) == "_xlfn." && !s.xlfn && (A = A.slice(6)), o.push(A);
        break;
      case "PtgNameX":
        var S = w[1][1];
        g = w[1][2];
        var N;
        if (s.biff <= 5) S < 0 && (S = -S), i[S] && (N = i[S][g]);
        else {
          var B = "";
          if (((i[S] || [])[0] || [])[0] == 14849 || (((i[S] || [])[0] || [])[0] == 1025 ? i[S][g] && i[S][g].itab > 0 && (B = i.SheetNames[i[S][g].itab - 1] + "!") : B = i.SheetNames[g - 1] + "!"), i[S] && i[S][g]) B += i[S][g].Name;
          else if (i[0] && i[0][g]) B += i[0][g].Name;
          else {
            var U = (My(i, S, s) || "").split(";;");
            U[g - 1] ? B = U[g - 1] : B += "SH33TJSERRX";
          }
          o.push(B);
          break;
        }
        N || (N = { Name: "SH33TJSERRY" }), o.push(N.Name);
        break;
      case "PtgParen":
        var ne = "(", ge = ")";
        if (y >= 0) {
          switch (_ = "", e[0][y][1][0]) {
            case 2:
              ne = Bt(" ", e[0][y][1][1]) + ne;
              break;
            case 3:
              ne = Bt("\r", e[0][y][1][1]) + ne;
              break;
            case 4:
              ge = Bt(" ", e[0][y][1][1]) + ge;
              break;
            case 5:
              ge = Bt("\r", e[0][y][1][1]) + ge;
              break;
            default:
              if (s.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][y][1][0]);
          }
          y = -1;
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
        v = { c: w[1][1], r: w[1][0] };
        var fe = { c: r.c, r: r.r };
        if (i.sharedf[$e(v)]) {
          var J = i.sharedf[$e(v)];
          o.push(pr(J, u, fe, i, s));
        } else {
          var ae = false;
          for (x = 0; x != i.arrayf.length; ++x) if (d = i.arrayf[x], !(v.c < d[0].s.c || v.c > d[0].e.c) && !(v.r < d[0].s.r || v.r > d[0].e.r)) {
            o.push(pr(d[1], u, fe, i, s)), ae = true;
            break;
          }
          ae || o.push(w[1]);
        }
        break;
      case "PtgArray":
        o.push("{" + rb(w[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        y = D;
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
        o.push("Table" + w[1].idx + "[#" + w[1].rt + "]");
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
        throw new Error("Unrecognized Formula Token: " + String(w));
      default:
        throw new Error("Unrecognized Formula Token: " + String(w));
    }
    var we = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (s.biff != 3 && y >= 0 && we.indexOf(e[0][D][0]) == -1) {
      w = e[0][y];
      var Q = true;
      switch (w[1][0]) {
        case 4:
          Q = false;
        case 0:
          _ = Bt(" ", w[1][1]);
          break;
        case 5:
          Q = false;
        case 1:
          _ = Bt("\r", w[1][1]);
          break;
        default:
          if (_ = "", s.WTF) throw new Error("Unexpected PtgAttrSpaceType " + w[1][0]);
      }
      o.push((Q ? _ : "") + o.pop() + (Q ? "" : _)), y = -1;
    }
  }
  if (o.length > 1 && s.WTF) throw new Error("bad formula stack");
  return o[0];
}
function ib(e, a, r) {
  var i = e.l + a, s = r.biff == 2 ? 1 : 2, c, u = e.read_shift(s);
  if (u == 65535) return [[], Er(e, a - 2)];
  var o = Ec(e, u, r);
  return a !== u + s && (c = yc(e, a - u - s, o, r)), e.l = i, [o, c];
}
function sb(e, a, r) {
  var i = e.l + a, s = r.biff == 2 ? 1 : 2, c, u = e.read_shift(s);
  if (u == 65535) return [[], Er(e, a - 2)];
  var o = Ec(e, u, r);
  return a !== u + s && (c = yc(e, a - u - s, o, r)), e.l = i, [o, c];
}
function lb(e, a, r, i) {
  var s = e.l + a, c = Ec(e, i, r), u;
  return s !== e.l && (u = yc(e, s - e.l, c, r)), [c, u];
}
function cb(e, a, r) {
  var i = e.l + a, s, c = e.read_shift(2), u = Ec(e, c, r);
  return c == 65535 ? [[], Er(e, a - 2)] : (a !== c + 2 && (s = yc(e, i - c - 2, u, r)), [u, s]);
}
function fb(e) {
  var a;
  if (tn(e, e.l + 6) !== 65535) return [mr(e), "n"];
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
  var i = e.read_shift(4), s = Ec(e, i, r), c = e.read_shift(4), u = c > 0 ? yc(e, c, s, r) : null;
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
var Kl = {}, Es = {};
function Wl(e, a) {
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
      if (We[a] == null && Ei(v3[a] || "General", a), e.t === "e") e.w = e.w || Di[e.v];
      else if (a === 0) if (e.t === "n") (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = tc(e.v);
      else if (e.t === "d") {
        var u = br(e.v);
        (u | 0) === u ? e.w = u.toString(10) : e.w = tc(u);
      } else {
        if (e.v === void 0) return "";
        e.w = wi(e.v, Es);
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
  var E = (d.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (E > 0) {
    var T = d.slice(E, E + 50).match(yb);
    T && vb(o, T[1]);
  }
  var y = d.match(Sb);
  y && y[1] && Fb(y[1], s);
  var _ = [];
  if (a.cellStyles) {
    var D = d.match(Eb);
    D && Ob(_, D);
  }
  m && Nb(m[1], o, a, x, c, u);
  var b = v.match(_b);
  b && (o["!autofilter"] = Db(b[0]));
  var w = [], M = v.match(pb);
  if (M) for (E = 0; E != M.length; ++E) w[E] = Ut(M[E].slice(M[E].indexOf('"') + 1));
  var V = v.match(gb);
  V && Cb(o, V, i);
  var j = v.match(Tb);
  if (j && (o["!margins"] = bb(Pe(j[0]))), !o["!ref"] && x.e.c >= x.s.c && x.e.r >= x.s.r && (o["!ref"] = ut(x)), a.sheetRows > 0 && o["!ref"]) {
    var C = Ut(o["!ref"]);
    a.sheetRows <= +C.e.r && (C.e.r = a.sheetRows - 1, C.e.r > x.e.r && (C.e.r = x.e.r), C.e.r < C.s.r && (C.s.r = C.e.r), C.e.c > x.e.c && (C.e.c = x.e.c), C.e.c < C.s.c && (C.s.c = C.e.c), o["!fullref"] = o["!ref"], o["!ref"] = ut(C));
  }
  return _.length > 0 && (o["!cols"] = _), w.length > 0 && (o["!merges"] = w), o;
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
      var v = $e({ c: d, r: x });
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
function Db(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var Rb = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function Fb(e, a) {
  a.Views || (a.Views = [{}]), (e.match(Rb) || []).forEach(function(r, i) {
    var s = Pe(r);
    a.Views[i] || (a.Views[i] = {}), +s.zoomScale && (a.Views[i].zoom = +s.zoomScale), Ft(s.rightToLeft) && (a.Views[i].RTL = true);
  });
}
var Nb = function() {
  var e = /<(?:\w+:)?c[ \/>]/, a = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, i = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, s = /ref=["']([^"']*)["']/, c = rc("v"), u = rc("f");
  return function(x, d, v, m, g, E) {
    for (var T = 0, y = "", _ = [], D = [], b = 0, w = 0, M = 0, V = "", j, C, A = 0, S = 0, N, B, U = 0, ne = 0, ge = Array.isArray(E.CellXf), fe, J = [], ae = [], we = Array.isArray(d), Q = [], H = {}, re = false, R = !!v.sheetStubs, z = x.split(a), q = 0, W = z.length; q != W; ++q) {
      y = z[q].trim();
      var ie = y.length;
      if (ie !== 0) {
        var Ae = 0;
        e: for (T = 0; T < ie; ++T) switch (y[T]) {
          case ">":
            if (y[T - 1] != "/") {
              ++T;
              break e;
            }
            if (v && v.cellStyles) {
              if (C = Pe(y.slice(Ae, T), true), A = C.r != null ? parseInt(C.r, 10) : A + 1, S = -1, v.sheetRows && v.sheetRows < A) continue;
              H = {}, re = false, C.ht && (re = true, H.hpt = parseFloat(C.ht), H.hpx = sc(H.hpt)), C.hidden == "1" && (re = true, H.hidden = true), C.outlineLevel != null && (re = true, H.level = +C.outlineLevel), re && (Q[A - 1] = H);
            }
            break;
          case "<":
            Ae = T;
            break;
        }
        if (Ae >= T) break;
        if (C = Pe(y.slice(Ae, T), true), A = C.r != null ? parseInt(C.r, 10) : A + 1, S = -1, !(v.sheetRows && v.sheetRows < A)) {
          m.s.r > A - 1 && (m.s.r = A - 1), m.e.r < A - 1 && (m.e.r = A - 1), v && v.cellStyles && (H = {}, re = false, C.ht && (re = true, H.hpt = parseFloat(C.ht), H.hpx = sc(H.hpt)), C.hidden == "1" && (re = true, H.hidden = true), C.outlineLevel != null && (re = true, H.level = +C.outlineLevel), re && (Q[A - 1] = H)), _ = y.slice(T).split(e);
          for (var pe = 0; pe != _.length && _[pe].trim().charAt(0) == "<"; ++pe) ;
          for (_ = _.slice(pe), T = 0; T != _.length; ++T) if (y = _[T].trim(), y.length !== 0) {
            if (D = y.match(r), b = T, w = 0, M = 0, y = "<c " + (y.slice(0, 1) == "<" ? ">" : "") + y, D != null && D.length === 2) {
              for (b = 0, V = D[1], w = 0; w != V.length && !((M = V.charCodeAt(w) - 64) < 1 || M > 26); ++w) b = 26 * b + M;
              --b, S = b;
            } else ++S;
            for (w = 0; w != y.length && y.charCodeAt(w) !== 62; ++w) ;
            if (++w, C = Pe(y.slice(0, w), true), C.r || (C.r = $e({ r: A - 1, c: S })), V = y.slice(w), j = { t: "" }, (D = V.match(c)) != null && D[1] !== "" && (j.v = ot(D[1])), v.cellFormula) {
              if ((D = V.match(u)) != null && D[1] !== "") {
                if (j.f = ot(bt(D[1])).replace(/\r\n/g, `
`), v.xlfn || (j.f = Om(j.f)), D[0].indexOf('t="array"') > -1) j.F = (V.match(s) || [])[1], j.F.indexOf(":") > -1 && J.push([Ut(j.F), j.F]);
                else if (D[0].indexOf('t="shared"') > -1) {
                  B = Pe(D[0]);
                  var ye = ot(bt(D[1]));
                  v.xlfn || (ye = Om(ye)), ae[parseInt(B.si, 10)] = [B, ye, C.r];
                }
              } else (D = V.match(/<f[^>]*\/>/)) && (B = Pe(D[0]), ae[B.si] && (j.f = V8(ae[B.si][1], ae[B.si][2], C.r)));
              var _e = kr(C.r);
              for (w = 0; w < J.length; ++w) _e.r >= J[w][0].s.r && _e.r <= J[w][0].e.r && _e.c >= J[w][0].s.c && _e.c <= J[w][0].e.c && (j.F = J[w][1]);
            }
            if (C.t == null && j.v === void 0) if (j.f || j.F) j.v = 0, j.t = "n";
            else if (R) j.t = "z";
            else continue;
            else j.t = C.t || "n";
            switch (m.s.c > S && (m.s.c = S), m.e.c < S && (m.e.c = S), j.t) {
              case "n":
                if (j.v == "" || j.v == null) {
                  if (!R) continue;
                  j.t = "z";
                } else j.v = parseFloat(j.v);
                break;
              case "s":
                if (typeof j.v > "u") {
                  if (!R) continue;
                  j.t = "z";
                } else N = Kl[parseInt(j.v, 10)], j.v = N.t, j.r = N.r, v.cellHTML && (j.h = N.h);
                break;
              case "str":
                j.t = "s", j.v = j.v != null ? bt(j.v) : "", v.cellHTML && (j.h = Jh(j.v));
                break;
              case "inlineStr":
                D = V.match(i), j.t = "s", D != null && (N = fd(D[1])) ? (j.v = N.t, v.cellHTML && (j.h = N.h)) : j.v = "";
                break;
              case "b":
                j.v = Ft(j.v);
                break;
              case "d":
                v.cellDates ? j.v = ir(j.v, 1) : (j.v = br(ir(j.v, 1)), j.t = "n");
                break;
              case "e":
                (!v || v.cellText !== false) && (j.w = j.v), j.v = ny[j.v];
                break;
            }
            if (U = ne = 0, fe = null, ge && C.s !== void 0 && (fe = E.CellXf[C.s], fe != null && (fe.numFmtId != null && (U = fe.numFmtId), v.cellStyles && fe.fillId != null && (ne = fe.fillId))), By(j, U, ne, v, g, E), v.cellDates && ge && j.t == "n" && Ds(We[U]) && (j.t = "d", j.v = mf(j.v)), C.cm && v.xlmeta) {
              var De = (v.xlmeta.Cell || [])[+C.cm - 1];
              De && De.type == "XLDAPR" && (j.D = true);
            }
            if (we) {
              var X = kr(C.r);
              d[X.r] || (d[X.r] = []), d[X.r][X.c] = j;
            } else d[C.r] = j;
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
var Lb = Oi;
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
  var a = bi(e);
  return [a];
}
function jb(e) {
  var a = ua(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function zb(e) {
  var a = bi(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function Pb(e) {
  var a = ua(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function Gb(e) {
  var a = bi(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function Vb(e) {
  var a = ua(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function Xb(e) {
  var a = bi(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function $b(e) {
  var a = ua(e), r = mr(e);
  return [a, r, "n"];
}
function Iy(e) {
  var a = bi(e), r = mr(e);
  return [a, r, "n"];
}
function Yb(e) {
  var a = ua(e), r = sd(e);
  return [a, r, "n"];
}
function qb(e) {
  var a = bi(e), r = sd(e);
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
  var a = bi(e), r = yr(e);
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
var rO = Oi;
function aO(e, a) {
  var r = e.l + a, i = Oi(e), s = id(e), c = yr(e), u = yr(e), o = yr(e);
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
  var i = e.l + a, s = Oi(e), c = [s];
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
  var x = o.dense ? [] : {}, d, v = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, m = false, g = false, E, T, y, _, D, b, w, M, V, j = [];
  o.biff = 12, o["!row"] = 0;
  var C = 0, A = false, S = [], N = {}, B = o.supbooks || s.supbooks || [[]];
  if (B.sharedf = N, B.arrayf = S, B.SheetNames = s.SheetNames || s.Sheets.map(function(we) {
    return we.name;
  }), !o.supbooks && (o.supbooks = B, s.Names)) for (var U = 0; U < s.Names.length; ++U) B[0][U + 1] = s.Names[U];
  var ne = [], ge = [], fe = false;
  of[16] = { n: "BrtShortReal", f: Iy };
  var J;
  if (fn(e, function(Q, H, re) {
    if (!g) switch (re) {
      case 148:
        d = Q;
        break;
      case 0:
        E = Q, o.sheetRows && o.sheetRows <= E.r && (g = true), M = hr(_ = E.r), o["!row"] = E.r, (Q.hidden || Q.hpt || Q.level != null) && (Q.hpt && (Q.hpx = sc(Q.hpt)), ge[Q.r] = Q);
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
            w = Kl[Q[1]], T.v = w.t, T.r = w.r;
            break;
          case "b":
            T.v = !!Q[1];
            break;
          case "e":
            T.v = Q[1], o.cellText !== false && (T.w = Di[T.v]);
            break;
          case "str":
            T.t = "s", T.v = Q[1];
            break;
          case "is":
            T.t = "s", T.v = Q[1].t;
            break;
        }
        if ((y = u.CellXf[Q[0].iStyleRef]) && By(T, y.numFmtId, null, o, c, u), D = Q[0].c == -1 ? D + 1 : Q[0].c, o.dense ? (x[_] || (x[_] = []), x[_][D] = T) : x[Zt(D) + M] = T, o.cellFormula) {
          for (A = false, C = 0; C < S.length; ++C) {
            var R = S[C];
            E.r >= R[0].s.r && E.r <= R[0].e.r && D >= R[0].s.c && D <= R[0].e.c && (T.F = ut(R[0]), A = true);
          }
          !A && Q.length > 3 && (T.f = Q[3]);
        }
        if (v.s.r > E.r && (v.s.r = E.r), v.s.c > D && (v.s.c = D), v.e.r < E.r && (v.e.r = E.r), v.e.c < D && (v.e.c = D), o.cellDates && y && T.t == "n" && Ds(We[y.numFmtId])) {
          var z = gi(T.v);
          z && (T.t = "d", T.v = new Date(z.y, z.m - 1, z.d, z.H, z.M, z.S, z.u));
        }
        J && (J.type == "XLDAPR" && (T.D = true), J = void 0);
        break;
      case 1:
      case 12:
        if (!o.sheetStubs || m) break;
        T = { t: "z", v: void 0 }, D = Q[0].c == -1 ? D + 1 : Q[0].c, o.dense ? (x[_] || (x[_] = []), x[_][D] = T) : x[Zt(D) + M] = T, v.s.r > E.r && (v.s.r = E.r), v.s.c > D && (v.s.c = D), v.e.r < E.r && (v.e.r = E.r), v.e.c < D && (v.e.c = D), J && (J.type == "XLDAPR" && (T.D = true), J = void 0);
        break;
      case 176:
        j.push(Q);
        break;
      case 49:
        J = ((o.xlmeta || {}).Cell || [])[Q - 1];
        break;
      case 494:
        var q = i["!id"][Q.relId];
        for (q ? (Q.Target = q.Target, Q.loc && (Q.Target += "#" + Q.loc), Q.Rel = q) : Q.relId == "" && (Q.Target = "#" + Q.loc), _ = Q.rfx.s.r; _ <= Q.rfx.e.r; ++_) for (D = Q.rfx.s.c; D <= Q.rfx.e.c; ++D) o.dense ? (x[_] || (x[_] = []), x[_][D] || (x[_][D] = { t: "z", v: void 0 }), x[_][D].l = Q) : (b = $e({ c: D, r: _ }), x[b] || (x[b] = { t: "z", v: void 0 }), x[b].l = Q);
        break;
      case 426:
        if (!o.cellFormula) break;
        S.push(Q), V = o.dense ? x[_][D] : x[Zt(D) + M], V.f = pr(Q[1], v, { r: E.r, c: D }, B, o), V.F = ut(Q[0]);
        break;
      case 427:
        if (!o.cellFormula) break;
        N[$e(Q[0].s)] = Q[1], V = o.dense ? x[_][D] : x[Zt(D) + M], V.f = pr(Q[1], v, { r: E.r, c: D }, B, o);
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
  return j.length > 0 && (x["!merges"] = j), ne.length > 0 && (x["!cols"] = ne), ge.length > 0 && (x["!rows"] = ge), x;
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
    v.s.r = v.s.c = 0, v.e.c = o, d = Zt(o), g[0].forEach(function(E, T) {
      u[d + hr(T)] = { t: "n", v: E, z: g[1] }, x = T;
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
  return fn(e, function(x, d, v) {
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
  return u.SheetNames = [], u.XTI = [], of[16] = { n: "BrtFRTArchID$", f: CO }, fn(e, function(x, d, v) {
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
function DO(e, a, r) {
  return a.slice(-4) === ".bin" ? OO(e, r) : SO(e, r);
}
function RO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? hO(e, i, r, s, c, u, o) : Ab(e, i, r, s, c, u, o);
}
function FO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? mO(e, i, r, s, c) : vO(e, i, r, s, c);
}
function NO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? z8() : P8();
}
function MO(e, a, r, i, s, c, u, o) {
  return a.slice(-4) === ".bin" ? H8() : j8();
}
function LO(e, a, r, i) {
  return a.slice(-4) === ".bin" ? r8(e, r, i) : WC(e, r, i);
}
function BO(e, a, r) {
  return ky(e, r);
}
function UO(e, a, r) {
  return a.slice(-4) === ".bin" ? gC(e, r) : pC(e, r);
}
function IO(e, a, r) {
  return a.slice(-4) === ".bin" ? B8(e, r) : R8(e, r);
}
function HO(e, a, r) {
  return a.slice(-4) === ".bin" ? b8(e) : k8(e);
}
function jO(e, a, r, i) {
  return r.slice(-4) === ".bin" ? O8(e, a, r, i) : void 0;
}
function zO(e, a, r) {
  return a.slice(-4) === ".bin" ? S8(e, a, r) : A8(e, a, r);
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
var Zl;
function GO(e, a) {
  var r = Zl[e] || ot(e);
  return r === "General" ? wi(a) : fa(r, a);
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
      e.t === "e" ? e.w = e.w || Di[e.v] : a === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = tc(e.v) : e.w = wi(e.v) : e.w = GO(a || "General", e.v);
    } catch (c) {
      if (r.WTF) throw c;
    }
    try {
      var i = Zl[a] || a || "General";
      if (r.cellNF && (e.z = i), r.cellDates && e.t == "n" && Ds(i)) {
        var s = gi(e.v);
        s && (e.t = "d", e.v = new Date(s.y, s.m - 1, s.d, s.H, s.M, s.S, s.u));
      }
    } catch (c) {
      if (r.WTF) throw c;
    }
  }
}
function $O(e, a, r) {
  if (r.cellStyles && a.Interior) {
    var i = a.Interior;
    i.Pattern && (i.patternType = VC[i.Pattern] || i.Pattern);
  }
  e[a.ID] = a;
}
function YO(e, a, r, i, s, c, u, o, x, d) {
  var v = "General", m = i.StyleID, g = {};
  d = d || {};
  var E = [], T = 0;
  for (m === void 0 && o && (m = o.StyleID), m === void 0 && u && (m = u.StyleID); c[m] !== void 0 && (c[m].nf && (v = c[m].nf), c[m].Interior && E.push(c[m].Interior), !!c[m].Parent); ) m = c[m].Parent;
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
    var y = ot(i.Formula);
    y.charCodeAt(0) == 61 && (y = y.slice(1)), i.f = ys(y, s), delete i.Formula, i.ArrayRange == "RC" ? i.F = ys("RC:RC", s) : i.ArrayRange && (i.F = ys(i.ArrayRange, s), x.push([Ut(i.F), i.F]));
  } else for (T = 0; T < x.length; ++T) s.r >= x[T][0].s.r && s.r <= x[T][0].e.r && s.c >= x[T][0].s.c && s.c <= x[T][0].e.c && (i.F = x[T][1]);
  d.cellStyles && (E.forEach(function(_) {
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
  D2();
  var i = Bl(ed(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (i = bt(i));
  var s = i.slice(0, 1024).toLowerCase(), c = false;
  if (s = s.replace(/".*?"/g, ""), (s.indexOf(">") & 1023) > Math.min(s.indexOf(",") & 1023, s.indexOf(";") & 1023)) {
    var u = or(r);
    return u.type = "string", nc.to_workbook(i, u);
  }
  if (s.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(Ie) {
    s.indexOf("<" + Ie) >= 0 && (c = true);
  }), c) return aD(i, r);
  Zl = { "General Number": "General", "General Date": We[22], "Long Date": "dddd, mmmm dd, yyyy", "Medium Date": We[15], "Short Date": We[14], "Long Time": We[19], "Medium Time": We[18], "Short Time": We[20], Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)', Fixed: We[2], Standard: We[4], Percent: We[10], Scientific: We[11], "Yes/No": '"Yes";"Yes";"No";@', "True/False": '"True";"True";"False";@', "On/Off": '"Yes";"Yes";"No";@' };
  var o, x = [], d, v = {}, m = [], g = r.dense ? [] : {}, E = "", T = {}, y = {}, _ = pa('<Data ss:Type="String">'), D = 0, b = 0, w = 0, M = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, V = {}, j = {}, C = "", A = 0, S = [], N = {}, B = {}, U = 0, ne = [], ge = [], fe = {}, J = [], ae, we = false, Q = [], H = [], re = {}, R = 0, z = 0, q = { Sheets: [], WBProps: { date1904: false } }, W = {};
  ac.lastIndex = 0, i = i.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var ie = ""; o = ac.exec(i); ) switch (o[3] = (ie = o[3]).toLowerCase()) {
    case "data":
      if (ie == "data") {
        if (o[1] === "/") {
          if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
        } else o[0].charAt(o[0].length - 2) !== "/" && x.push([o[3], true]);
        break;
      }
      if (x[x.length - 1][1]) break;
      o[1] === "/" ? YO(i.slice(D, o.index), C, _, x[x.length - 1][0] == "comment" ? fe : T, { c: b, r: w }, V, J[b], y, Q, r) : (C = "", _ = pa(o[0]), D = o.index + o[0].length);
      break;
    case "cell":
      if (o[1] === "/") if (ge.length > 0 && (T.c = ge), (!r.sheetRows || r.sheetRows > w) && T.v !== void 0 && (r.dense ? (g[w] || (g[w] = []), g[w][b] = T) : g[Zt(b) + hr(w)] = T), T.HRef && (T.l = { Target: ot(T.HRef) }, T.HRefScreenTip && (T.l.Tooltip = T.HRefScreenTip), delete T.HRef, delete T.HRefScreenTip), (T.MergeAcross || T.MergeDown) && (R = b + (parseInt(T.MergeAcross, 10) | 0), z = w + (parseInt(T.MergeDown, 10) | 0), S.push({ s: { c: b, r: w }, e: { c: R, r: z } })), !r.sheetStubs) T.MergeAcross ? b = R + 1 : ++b;
      else if (T.MergeAcross || T.MergeDown) {
        for (var Ae = b; Ae <= R; ++Ae) for (var pe = w; pe <= z; ++pe) (Ae > b || pe > w) && (r.dense ? (g[pe] || (g[pe] = []), g[pe][Ae] = { t: "z" }) : g[Zt(Ae) + hr(pe)] = { t: "z" });
        b = R + 1;
      } else ++b;
      else T = PO(o[0]), T.Index && (b = +T.Index - 1), b < M.s.c && (M.s.c = b), b > M.e.c && (M.e.c = b), o[0].slice(-2) === "/>" && ++b, ge = [];
      break;
    case "row":
      o[1] === "/" || o[0].slice(-2) === "/>" ? (w < M.s.r && (M.s.r = w), w > M.e.r && (M.e.r = w), o[0].slice(-2) === "/>" && (y = pa(o[0]), y.Index && (w = +y.Index - 1)), b = 0, ++w) : (y = pa(o[0]), y.Index && (w = +y.Index - 1), re = {}, (y.AutoFitHeight == "0" || y.Height) && (re.hpx = parseInt(y.Height, 10), re.hpt = Ay(re.hpx), H[w] = re), y.Hidden == "1" && (re.hidden = true, H[w] = re));
      break;
    case "worksheet":
      if (o[1] === "/") {
        if ((d = x.pop())[0] !== o[3]) throw new Error("Bad state: " + d.join("|"));
        m.push(E), M.s.r <= M.e.r && M.s.c <= M.e.c && (g["!ref"] = ut(M), r.sheetRows && r.sheetRows <= M.e.r && (g["!fullref"] = g["!ref"], M.e.r = r.sheetRows - 1, g["!ref"] = ut(M))), S.length && (g["!merges"] = S), J.length > 0 && (g["!cols"] = J), H.length > 0 && (g["!rows"] = H), v[E] = g;
      } else M = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, w = b = 0, x.push([o[3], false]), d = pa(o[0]), E = ot(d.Name), g = r.dense ? [] : {}, S = [], Q = [], H = [], W = { name: E, Hidden: 0 }, q.Sheets.push(W);
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
      o[1] === "/" ? $O(V, j, r) : j = pa(o[0]);
      break;
    case "numberformat":
      j.nf = ot(pa(o[0]).Format || "General"), Zl[j.nf] && (j.nf = Zl[j.nf]);
      for (var ye = 0; ye != 392 && We[ye] != j.nf; ++ye) ;
      if (ye == 392) {
        for (ye = 57; ye != 392; ++ye) if (We[ye] == null) {
          Ei(j.nf, ye);
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
      for (var De = 0; De < +ae.Span; ++De) J[J.length] = or(ae);
      break;
    case "namedrange":
      if (o[1] === "/") break;
      q.Names || (q.Names = []);
      var X = Pe(o[0]), Ge = { Name: X.Name, Ref: ys(X.RefersTo.slice(1), { r: 0, c: 0 }) };
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
      o[1] === "/" ? C += i.slice(A, o.index) : A = o.index + o[0].length;
      break;
    case "interior":
      if (!r.cellStyles) break;
      j.Interior = pa(o[0]);
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
      o[1] === "/" ? RA(N, ie, i.slice(U, o.index)) : U = o.index + o[0].length;
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
                  W.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  W.Hidden = 2;
                  break;
              }
              else U = o.index + o[0].length;
              break;
            case "header":
              g["!margins"] || Wl(g["!margins"] = {}, "xlml"), isNaN(+Pe(o[0]).Margin) || (g["!margins"].header = +Pe(o[0]).Margin);
              break;
            case "footer":
              g["!margins"] || Wl(g["!margins"] = {}, "xlml"), isNaN(+Pe(o[0]).Margin) || (g["!margins"].footer = +Pe(o[0]).Margin);
              break;
            case "pagemargins":
              var Re = Pe(o[0]);
              g["!margins"] || Wl(g["!margins"] = {}, "xlml"), isNaN(+Re.Top) || (g["!margins"].top = +Re.Top), isNaN(+Re.Left) || (g["!margins"].left = +Re.Left), isNaN(+Re.Right) || (g["!margins"].right = +Re.Right), isNaN(+Re.Bottom) || (g["!margins"].bottom = +Re.Bottom);
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
      return Zo(Yr(e), a);
    case "binary":
    case "buffer":
    case "file":
      return Zo(e, a);
    case "array":
      return Zo(Ci(e), a);
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
  for (var x = tn(r, r.l), d = yh[x], v = 0; d != null && WO.indexOf(x) > -1; ) c = tn(r, r.l + 2), v = r.l + 4, x == 2066 ? v += 4 : (x == 2165 || x == 2175) && (v += 12), o = r.slice(v, r.l + 4 + c), u.push(o), r.l += 4 + c, d = yh[x = tn(r, r.l)];
  var m = Bn(u);
  ur(m, 0);
  var g = 0;
  m.lens = [];
  for (var E = 0; E < u.length; ++E) m.lens.push(g), g += u[E].length;
  if (m.length < i) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + m.length + " < " + i;
  return a.f(m, m.length, s);
}
function Da(e, a, r) {
  if (e.t !== "z" && e.XF) {
    var i = 0;
    try {
      i = e.z || e.XF.numFmtId || 0, a.cellNF && (e.z = We[i]);
    } catch (c) {
      if (a.WTF) throw c;
    }
    if (!a || a.cellText !== false) try {
      e.t === "e" ? e.w = e.w || Di[e.v] : i === 0 || i == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = tc(e.v) : e.w = wi(e.v) : e.w = fa(i, e.v, { date1904: !!r, dateNF: a && a.dateNF });
    } catch (c) {
      if (a.WTF) throw c;
    }
    if (a.cellDates && i && e.t == "n" && Ds(We[i] || String(i))) {
      var s = gi(e.v);
      s && (e.t = "d", e.v = new Date(s.y, s.m - 1, s.d, s.H, s.M, s.S, s.u));
    }
  }
}
function V0(e, a, r) {
  return { v: e, ixfe: a, t: r };
}
function QO(e, a) {
  var r = { opts: {} }, i = {}, s = a.dense ? [] : {}, c = {}, u = {}, o = null, x = [], d = "", v = {}, m, g = "", E, T, y, _, D = {}, b = [], w, M, V = [], j = [], C = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, A = {}, S = function(Ye) {
    return Ye < 8 ? _i[Ye] : Ye < 64 && j[Ye - 8] || _i[Ye];
  }, N = function(Ye, xt, Dt) {
    var vt = xt.XF.data;
    if (!(!vt || !vt.patternType || !Dt || !Dt.cellStyles)) {
      xt.s = {}, xt.s.patternType = vt.patternType;
      var Tr;
      (Tr = ic(S(vt.icvFore))) && (xt.s.fgColor = { rgb: Tr }), (Tr = ic(S(vt.icvBack))) && (xt.s.bgColor = { rgb: Tr });
    }
  }, B = function(Ye, xt, Dt) {
    if (!(re > 1) && !(Dt.sheetRows && Ye.r >= Dt.sheetRows)) {
      if (Dt.cellStyles && xt.XF && xt.XF.data && N(Ye, xt, Dt), delete xt.ixfe, delete xt.XF, m = Ye, g = $e(Ye), (!u || !u.s || !u.e) && (u = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), Ye.r < u.s.r && (u.s.r = Ye.r), Ye.c < u.s.c && (u.s.c = Ye.c), Ye.r + 1 > u.e.r && (u.e.r = Ye.r + 1), Ye.c + 1 > u.e.c && (u.e.c = Ye.c + 1), Dt.cellFormula && xt.f) {
        for (var vt = 0; vt < b.length; ++vt) if (!(b[vt][0].s.c > Ye.c || b[vt][0].s.r > Ye.r) && !(b[vt][0].e.c < Ye.c || b[vt][0].e.r < Ye.r)) {
          xt.F = ut(b[vt][0]), (b[vt][0].s.c != Ye.c || b[vt][0].s.r != Ye.r) && delete xt.f, xt.f && (xt.f = "" + pr(b[vt][1], u, Ye, Q, U));
          break;
        }
      }
      Dt.dense ? (s[Ye.r] || (s[Ye.r] = []), s[Ye.r][Ye.c] = xt) : s[g] = xt;
    }
  }, U = { enc: false, sbcch: 0, snames: [], sharedf: D, arrayf: b, rrtabid: [], lastuser: "", biff: 8, codepage: 0, winlocked: 0, cellStyles: !!a && !!a.cellStyles, WTF: !!a && !!a.wtf };
  a.password && (U.password = a.password);
  var ne, ge = [], fe = [], J = [], ae = [], we = false, Q = [];
  Q.SheetNames = U.snames, Q.sharedf = U.sharedf, Q.arrayf = U.arrayf, Q.names = [], Q.XTI = [];
  var H = 0, re = 0, R = 0, z = [], q = [], W;
  U.codepage = 1200, ya(1200);
  for (var ie = false; e.l < e.length - 1; ) {
    var Ae = e.l, pe = e.read_shift(2);
    if (pe === 0 && H === 10) break;
    var ye = e.l === e.length ? 0 : e.read_shift(2), _e = yh[pe];
    if (_e && _e.f) {
      if (a.bookSheets && H === 133 && pe !== 133) break;
      if (H = pe, _e.r === 2 || _e.r == 12) {
        var De = e.read_shift(2);
        if (ye -= 2, !U.enc && De !== pe && ((De & 255) << 8 | De >> 8) !== pe) throw new Error("rt mismatch: " + De + "!=" + pe);
        _e.r == 12 && (e.l += 10, ye -= 10);
      }
      var X = {};
      if (pe === 10 ? X = _e.f(e, ye, U) : X = ZO(pe, _e, e, ye, U), re == 0 && [9, 521, 1033, 2057].indexOf(H) === -1) continue;
      switch (pe) {
        case 34:
          r.opts.Date1904 = C.WBProps.date1904 = X;
          break;
        case 134:
          r.opts.WriteProtect = true;
          break;
        case 47:
          if (U.enc || (e.l = 0), U.enc = X, !a.password) throw new Error("File is password-protected");
          if (X.valid == null) throw new Error("Encryption scheme unsupported");
          if (!X.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          U.lastuser = X;
          break;
        case 66:
          var Ge = Number(X);
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
          U.rrtabid = X;
          break;
        case 25:
          U.winlocked = X;
          break;
        case 439:
          r.opts.RefreshAll = X;
          break;
        case 12:
          r.opts.CalcCount = X;
          break;
        case 16:
          r.opts.CalcDelta = X;
          break;
        case 17:
          r.opts.CalcIter = X;
          break;
        case 13:
          r.opts.CalcMode = X;
          break;
        case 14:
          r.opts.CalcPrecision = X;
          break;
        case 95:
          r.opts.CalcSaveRecalc = X;
          break;
        case 15:
          U.CalcRefMode = X;
          break;
        case 2211:
          r.opts.FullCalc = X;
          break;
        case 129:
          X.fDialog && (s["!type"] = "dialog"), X.fBelow || ((s["!outline"] || (s["!outline"] = {})).above = true), X.fRight || ((s["!outline"] || (s["!outline"] = {})).left = true);
          break;
        case 224:
          V.push(X);
          break;
        case 430:
          Q.push([X]), Q[Q.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          Q[Q.length - 1].push(X);
          break;
        case 24:
        case 536:
          W = { Name: X.Name, Ref: pr(X.rgce, u, null, Q, U) }, X.itab > 0 && (W.Sheet = X.itab - 1), Q.names.push(W), Q[0] || (Q[0] = [], Q[0].XTI = []), Q[Q.length - 1].push(X), X.Name == "_xlnm._FilterDatabase" && X.itab > 0 && X.rgce && X.rgce[0] && X.rgce[0][0] && X.rgce[0][0][0] == "PtgArea3d" && (q[X.itab - 1] = { ref: ut(X.rgce[0][0][1][2]) });
          break;
        case 22:
          U.ExternCount = X;
          break;
        case 23:
          Q.length == 0 && (Q[0] = [], Q[0].XTI = []), Q[Q.length - 1].XTI = Q[Q.length - 1].XTI.concat(X), Q.XTI = Q.XTI.concat(X);
          break;
        case 2196:
          if (U.biff < 8) break;
          W != null && (W.Comment = X[1]);
          break;
        case 18:
          s["!protect"] = X;
          break;
        case 19:
          X !== 0 && U.WTF && console.error("Password verifier: " + X);
          break;
        case 133:
          c[X.pos] = X, U.snames.push(X.name);
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
              ge.length > 0 && (s["!merges"] = ge), fe.length > 0 && (s["!objects"] = fe), J.length > 0 && (s["!cols"] = J), ae.length > 0 && (s["!rows"] = ae), C.Sheets.push(A);
            }
            d === "" ? v = s : i[d] = s, s = a.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (U.biff === 8 && (U.biff = { 9: 2, 521: 3, 1033: 4 }[pe] || { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[X.BIFFVer] || 8), U.biffguess = X.BIFFVer == 0, X.BIFFVer == 0 && X.dt == 4096 && (U.biff = 5, ie = true, ya(U.codepage = 28591)), U.biff == 8 && X.BIFFVer == 0 && X.dt == 16 && (U.biff = 2), re++) break;
            if (s = a.dense ? [] : {}, U.biff < 8 && !ie && (ie = true, ya(U.codepage = a.codepage || 1252)), U.biff < 5 || X.BIFFVer == 0 && X.dt == 4096) {
              d === "" && (d = "Sheet1"), u = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Be = { pos: e.l - ye, name: d };
              c[Be.pos] = Be, U.snames.push(d);
            } else d = (c[Ae] || { name: "" }).name;
            X.dt == 32 && (s["!type"] = "chart"), X.dt == 64 && (s["!type"] = "macro"), ge = [], fe = [], U.arrayf = b = [], J = [], ae = [], we = false, A = { Hidden: (c[Ae] || { hs: 0 }).hs, name: d };
          }
          break;
        case 515:
        case 3:
        case 2:
          s["!type"] == "chart" && (a.dense ? (s[X.r] || [])[X.c] : s[$e({ c: X.c, r: X.r })]) && ++X.c, w = { ixfe: X.ixfe, XF: V[X.ixfe] || {}, v: X.val, t: "n" }, R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: X.c, r: X.r }, w, a);
          break;
        case 5:
        case 517:
          w = { ixfe: X.ixfe, XF: V[X.ixfe], v: X.val, t: X.t }, R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: X.c, r: X.r }, w, a);
          break;
        case 638:
          w = { ixfe: X.ixfe, XF: V[X.ixfe], v: X.rknum, t: "n" }, R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: X.c, r: X.r }, w, a);
          break;
        case 189:
          for (var Re = X.c; Re <= X.C; ++Re) {
            var ke = X.rkrec[Re - X.c][0];
            w = { ixfe: ke, XF: V[ke], v: X.rkrec[Re - X.c][1], t: "n" }, R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: Re, r: X.r }, w, a);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (X.val == "String") {
              o = X;
              break;
            }
            if (w = V0(X.val, X.cell.ixfe, X.tt), w.XF = V[w.ixfe], a.cellFormula) {
              var Ie = X.formula;
              if (Ie && Ie[0] && Ie[0][0] && Ie[0][0][0] == "PtgExp") {
                var Ke = Ie[0][0][1][0], Ze = Ie[0][0][1][1], At = $e({ r: Ke, c: Ze });
                D[At] ? w.f = "" + pr(X.formula, u, X.cell, Q, U) : w.F = ((a.dense ? (s[Ke] || [])[Ze] : s[At]) || {}).F;
              } else w.f = "" + pr(X.formula, u, X.cell, Q, U);
            }
            R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B(X.cell, w, a), o = X;
          }
          break;
        case 7:
        case 519:
          if (o) o.val = X, w = V0(X, o.cell.ixfe, "s"), w.XF = V[w.ixfe], a.cellFormula && (w.f = "" + pr(o.formula, u, o.cell, Q, U)), R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B(o.cell, w, a), o = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            b.push(X);
            var It = $e(X[0].s);
            if (E = a.dense ? (s[X[0].s.r] || [])[X[0].s.c] : s[It], a.cellFormula && E) {
              if (!o || !It || !E) break;
              E.f = "" + pr(X[1], u, X[0], Q, U), E.F = ut(X[0]);
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula) break;
            if (g) {
              if (!o) break;
              D[$e(o.cell)] = X[0], E = a.dense ? (s[o.cell.r] || [])[o.cell.c] : s[$e(o.cell)], (E || {}).f = "" + pr(X[0], u, m, Q, U);
            }
          }
          break;
        case 253:
          w = V0(x[X.isst].t, X.ixfe, "s"), x[X.isst].h && (w.h = x[X.isst].h), w.XF = V[w.ixfe], R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: X.c, r: X.r }, w, a);
          break;
        case 513:
          a.sheetStubs && (w = { ixfe: X.ixfe, XF: V[X.ixfe], t: "z" }, R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: X.c, r: X.r }, w, a));
          break;
        case 190:
          if (a.sheetStubs) for (var Pt = X.c; Pt <= X.C; ++Pt) {
            var it = X.ixfe[Pt - X.c];
            w = { ixfe: it, XF: V[it], t: "z" }, R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: Pt, r: X.r }, w, a);
          }
          break;
        case 214:
        case 516:
        case 4:
          w = V0(X.val, X.ixfe, "s"), w.XF = V[w.ixfe], R > 0 && (w.z = z[w.ixfe >> 8 & 63]), Da(w, a, r.opts.Date1904), B({ c: X.c, r: X.r }, w, a);
          break;
        case 0:
        case 512:
          re === 1 && (u = X);
          break;
        case 252:
          x = X;
          break;
        case 1054:
          if (U.biff == 4) {
            z[R++] = X[1];
            for (var Ot = 0; Ot < R + 163 && We[Ot] != X[1]; ++Ot) ;
            Ot >= 163 && Ei(X[1], R + 163);
          } else Ei(X[1], X[0]);
          break;
        case 30:
          {
            z[R++] = X;
            for (var st = 0; st < R + 163 && We[st] != X; ++st) ;
            st >= 163 && Ei(X, R + 163);
          }
          break;
        case 229:
          ge = ge.concat(X);
          break;
        case 93:
          fe[X.cmo[0]] = U.lastobj = X;
          break;
        case 438:
          U.lastobj.TxO = X;
          break;
        case 127:
          U.lastobj.ImData = X;
          break;
        case 440:
          for (_ = X[0].s.r; _ <= X[0].e.r; ++_) for (y = X[0].s.c; y <= X[0].e.c; ++y) E = a.dense ? (s[_] || [])[y] : s[$e({ c: y, r: _ })], E && (E.l = X[1]);
          break;
        case 2048:
          for (_ = X[0].s.r; _ <= X[0].e.r; ++_) for (y = X[0].s.c; y <= X[0].e.c; ++y) E = a.dense ? (s[_] || [])[y] : s[$e({ c: y, r: _ })], E && E.l && (E.l.Tooltip = X[1]);
          break;
        case 28:
          {
            if (U.biff <= 5 && U.biff >= 2) break;
            E = a.dense ? (s[X[0].r] || [])[X[0].c] : s[$e(X[0])];
            var tt = fe[X[2]];
            E || (a.dense ? (s[X[0].r] || (s[X[0].r] = []), E = s[X[0].r][X[0].c] = { t: "z" }) : E = s[$e(X[0])] = { t: "z" }, u.e.r = Math.max(u.e.r, X[0].r), u.s.r = Math.min(u.s.r, X[0].r), u.e.c = Math.max(u.e.c, X[0].c), u.s.c = Math.min(u.s.c, X[0].c)), E.c || (E.c = []), T = { a: X[1], t: tt.TxO.t }, E.c.push(T);
          }
          break;
        case 2173:
          E8(V[X.ixfe], X.ext);
          break;
        case 125:
          {
            if (!U.cellStyles) break;
            for (; X.e >= X.s; ) J[X.e--] = { width: X.w / 256, level: X.level || 0, hidden: !!(X.flags & 1) }, we || (we = true, ud(X.w / 256)), Cs(J[X.e + 1]);
          }
          break;
        case 520:
          {
            var rt = {};
            X.level != null && (ae[X.r] = rt, rt.level = X.level), X.hidden && (ae[X.r] = rt, rt.hidden = true), X.hpt && (ae[X.r] = rt, rt.hpt = X.hpt, rt.hpx = sc(X.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          s["!margins"] || Wl(s["!margins"] = {}), s["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[pe]] = X;
          break;
        case 161:
          s["!margins"] || Wl(s["!margins"] = {}), s["!margins"].header = X.header, s["!margins"].footer = X.footer;
          break;
        case 574:
          X.RTL && (C.Views[0].RTL = true);
          break;
        case 146:
          j = X;
          break;
        case 2198:
          ne = X;
          break;
        case 140:
          M = X;
          break;
        case 442:
          d ? A.CodeName = X || A.name : C.WBProps.CodeName = X || "ThisWorkbook";
          break;
      }
    } else _e || console.error("Missing Info for XLS Record 0x" + pe.toString(16)), e.l += ye;
  }
  return r.SheetNames = La(c).sort(function(gt, Ye) {
    return Number(gt) - Number(Ye);
  }).map(function(gt) {
    return c[gt].name;
  }), a.bookSheets || (r.Sheets = i), !r.SheetNames.length && v["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = v)) : r.Preamble = v, r.Sheets && q.forEach(function(gt, Ye) {
    r.Sheets[r.SheetNames[Ye]]["!autofilter"] = gt;
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
  a || (a = {}), vd(a), g2(), a.codepage && Yh(a.codepage);
  var r, i;
  if (e.FullPaths) {
    if (ft.find(e, "/encryption")) throw new Error("File is password-protected");
    r = ft.find(e, "!CompObj"), i = ft.find(e, "/Workbook") || ft.find(e, "/Book");
  } else {
    switch (a.type) {
      case "base64":
        e = ga(Yr(e));
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
    else if ((c = ft.find(e, "PerfectOffice_MAIN")) && c.content) s = ql.to_workbook(c.content, (a.type = u, a));
    else if ((c = ft.find(e, "NativeContent_MAIN")) && c.content) s = ql.to_workbook(c.content, (a.type = u, a));
    else throw (c = ft.find(e, "MN0")) && c.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    a.bookVBA && e.FullPaths && ft.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (s.vbaraw = I8(e));
  }
  var o = {};
  return e.FullPaths && JO(e, o, a), s.Props = s.Custprops = o, a.bookFiles && (s.cfb = e), s;
}
var of = { 0: { f: Mb }, 1: { f: Ib }, 2: { f: Yb }, 3: { f: Pb }, 4: { f: jb }, 5: { f: $b }, 6: { f: Wb }, 7: { f: Vb }, 8: { f: tO }, 9: { f: eO }, 10: { f: Qb }, 11: { f: Jb }, 12: { f: Hb }, 13: { f: qb }, 14: { f: Gb }, 15: { f: zb }, 16: { f: Iy }, 17: { f: Zb }, 18: { f: Xb }, 19: { f: nd }, 20: {}, 21: {}, 22: {}, 23: {}, 24: {}, 25: {}, 26: {}, 27: {}, 28: {}, 29: {}, 30: {}, 31: {}, 32: {}, 33: {}, 34: {}, 35: { T: 1 }, 36: { T: -1 }, 37: { T: 1 }, 38: { T: -1 }, 39: { f: bO }, 40: {}, 42: {}, 43: { f: QC }, 44: { f: ZC }, 45: { f: JC }, 46: { f: t8 }, 47: { f: e8 }, 48: {}, 49: { f: rA }, 50: {}, 51: { f: T8 }, 52: { T: 1 }, 53: { T: -1 }, 54: { T: 1 }, 55: { T: -1 }, 56: { T: 1 }, 57: { T: -1 }, 58: {}, 59: {}, 60: { f: gy }, 62: { f: Kb }, 63: { f: C8 }, 64: { f: uO }, 65: {}, 66: {}, 67: {}, 68: {}, 69: {}, 70: {}, 128: {}, 129: { T: 1 }, 130: { T: -1 }, 131: { T: 1, f: Er, p: 0 }, 132: { T: -1 }, 133: { T: 1 }, 134: { T: -1 }, 135: { T: 1 }, 136: { T: -1 }, 137: { T: 1, f: fO }, 138: { T: -1 }, 139: { T: 1 }, 140: { T: -1 }, 141: { T: 1 }, 142: { T: -1 }, 143: { T: 1 }, 144: { T: -1 }, 145: { T: 1 }, 146: { T: -1 }, 147: { f: Ub }, 148: { f: Lb, p: 16 }, 151: { f: nO }, 152: {}, 153: { f: kO }, 154: {}, 155: {}, 156: { f: AO }, 157: {}, 158: {}, 159: { T: 1, f: mC }, 160: { T: -1 }, 161: { T: 1, f: Oi }, 162: { T: -1 }, 163: { T: 1 }, 164: { T: -1 }, 165: { T: 1 }, 166: { T: -1 }, 167: {}, 168: {}, 169: {}, 170: {}, 171: {}, 172: { T: 1 }, 173: { T: -1 }, 174: {}, 175: {}, 176: { f: rO }, 177: { T: 1 }, 178: { T: -1 }, 179: { T: 1 }, 180: { T: -1 }, 181: { T: 1 }, 182: { T: -1 }, 183: { T: 1 }, 184: { T: -1 }, 185: { T: 1 }, 186: { T: -1 }, 187: { T: 1 }, 188: { T: -1 }, 189: { T: 1 }, 190: { T: -1 }, 191: { T: 1 }, 192: { T: -1 }, 193: { T: 1 }, 194: { T: -1 }, 195: { T: 1 }, 196: { T: -1 }, 197: { T: 1 }, 198: { T: -1 }, 199: { T: 1 }, 200: { T: -1 }, 201: { T: 1 }, 202: { T: -1 }, 203: { T: 1 }, 204: { T: -1 }, 205: { T: 1 }, 206: { T: -1 }, 207: { T: 1 }, 208: { T: -1 }, 209: { T: 1 }, 210: { T: -1 }, 211: { T: 1 }, 212: { T: -1 }, 213: { T: 1 }, 214: { T: -1 }, 215: { T: 1 }, 216: { T: -1 }, 217: { T: 1 }, 218: { T: -1 }, 219: { T: 1 }, 220: { T: -1 }, 221: { T: 1 }, 222: { T: -1 }, 223: { T: 1 }, 224: { T: -1 }, 225: { T: 1 }, 226: { T: -1 }, 227: { T: 1 }, 228: { T: -1 }, 229: { T: 1 }, 230: { T: -1 }, 231: { T: 1 }, 232: { T: -1 }, 233: { T: 1 }, 234: { T: -1 }, 235: { T: 1 }, 236: { T: -1 }, 237: { T: 1 }, 238: { T: -1 }, 239: { T: 1 }, 240: { T: -1 }, 241: { T: 1 }, 242: { T: -1 }, 243: { T: 1 }, 244: { T: -1 }, 245: { T: 1 }, 246: { T: -1 }, 247: { T: 1 }, 248: { T: -1 }, 249: { T: 1 }, 250: { T: -1 }, 251: { T: 1 }, 252: { T: -1 }, 253: { T: 1 }, 254: { T: -1 }, 255: { T: 1 }, 256: { T: -1 }, 257: { T: 1 }, 258: { T: -1 }, 259: { T: 1 }, 260: { T: -1 }, 261: { T: 1 }, 262: { T: -1 }, 263: { T: 1 }, 264: { T: -1 }, 265: { T: 1 }, 266: { T: -1 }, 267: { T: 1 }, 268: { T: -1 }, 269: { T: 1 }, 270: { T: -1 }, 271: { T: 1 }, 272: { T: -1 }, 273: { T: 1 }, 274: { T: -1 }, 275: { T: 1 }, 276: { T: -1 }, 277: {}, 278: { T: 1 }, 279: { T: -1 }, 280: { T: 1 }, 281: { T: -1 }, 282: { T: 1 }, 283: { T: 1 }, 284: { T: -1 }, 285: { T: 1 }, 286: { T: -1 }, 287: { T: 1 }, 288: { T: -1 }, 289: { T: 1 }, 290: { T: -1 }, 291: { T: 1 }, 292: { T: -1 }, 293: { T: 1 }, 294: { T: -1 }, 295: { T: 1 }, 296: { T: -1 }, 297: { T: 1 }, 298: { T: -1 }, 299: { T: 1 }, 300: { T: -1 }, 301: { T: 1 }, 302: { T: -1 }, 303: { T: 1 }, 304: { T: -1 }, 305: { T: 1 }, 306: { T: -1 }, 307: { T: 1 }, 308: { T: -1 }, 309: { T: 1 }, 310: { T: -1 }, 311: { T: 1 }, 312: { T: -1 }, 313: { T: -1 }, 314: { T: 1 }, 315: { T: -1 }, 316: { T: 1 }, 317: { T: -1 }, 318: { T: 1 }, 319: { T: -1 }, 320: { T: 1 }, 321: { T: -1 }, 322: { T: 1 }, 323: { T: -1 }, 324: { T: 1 }, 325: { T: -1 }, 326: { T: 1 }, 327: { T: -1 }, 328: { T: 1 }, 329: { T: -1 }, 330: { T: 1 }, 331: { T: -1 }, 332: { T: 1 }, 333: { T: -1 }, 334: { T: 1 }, 335: { f: _8 }, 336: { T: -1 }, 337: { f: w8, T: 1 }, 338: { T: -1 }, 339: { T: 1 }, 340: { T: -1 }, 341: { T: 1 }, 342: { T: -1 }, 343: { T: 1 }, 344: { T: -1 }, 345: { T: 1 }, 346: { T: -1 }, 347: { T: 1 }, 348: { T: -1 }, 349: { T: 1 }, 350: { T: -1 }, 351: {}, 352: {}, 353: { T: 1 }, 354: { T: -1 }, 355: { f: xh }, 357: {}, 358: {}, 359: {}, 360: { T: 1 }, 361: {}, 362: { f: my }, 363: {}, 364: {}, 366: {}, 367: {}, 368: {}, 369: {}, 370: {}, 371: {}, 372: { T: 1 }, 373: { T: -1 }, 374: { T: 1 }, 375: { T: -1 }, 376: { T: 1 }, 377: { T: -1 }, 378: { T: 1 }, 379: { T: -1 }, 380: { T: 1 }, 381: { T: -1 }, 382: { T: 1 }, 383: { T: -1 }, 384: { T: 1 }, 385: { T: -1 }, 386: { T: 1 }, 387: { T: -1 }, 388: { T: 1 }, 389: { T: -1 }, 390: { T: 1 }, 391: { T: -1 }, 392: { T: 1 }, 393: { T: -1 }, 394: { T: 1 }, 395: { T: -1 }, 396: {}, 397: {}, 398: {}, 399: {}, 400: {}, 401: { T: 1 }, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 409: {}, 410: {}, 411: {}, 412: {}, 413: {}, 414: {}, 415: {}, 416: {}, 417: {}, 418: {}, 419: {}, 420: {}, 421: {}, 422: { T: 1 }, 423: { T: 1 }, 424: { T: -1 }, 425: { T: -1 }, 426: { f: iO }, 427: { f: sO }, 428: {}, 429: { T: 1 }, 430: { T: -1 }, 431: { T: 1 }, 432: { T: -1 }, 433: { T: 1 }, 434: { T: -1 }, 435: { T: 1 }, 436: { T: -1 }, 437: { T: 1 }, 438: { T: -1 }, 439: { T: 1 }, 440: { T: -1 }, 441: { T: 1 }, 442: { T: -1 }, 443: { T: 1 }, 444: { T: -1 }, 445: { T: 1 }, 446: { T: -1 }, 447: { T: 1 }, 448: { T: -1 }, 449: { T: 1 }, 450: { T: -1 }, 451: { T: 1 }, 452: { T: -1 }, 453: { T: 1 }, 454: { T: -1 }, 455: { T: 1 }, 456: { T: -1 }, 457: { T: 1 }, 458: { T: -1 }, 459: { T: 1 }, 460: { T: -1 }, 461: { T: 1 }, 462: { T: -1 }, 463: { T: 1 }, 464: { T: -1 }, 465: { T: 1 }, 466: { T: -1 }, 467: { T: 1 }, 468: { T: -1 }, 469: { T: 1 }, 470: { T: -1 }, 471: {}, 472: {}, 473: { T: 1 }, 474: { T: -1 }, 475: {}, 476: { f: cO }, 477: {}, 478: {}, 479: { T: 1 }, 480: { T: -1 }, 481: { T: 1 }, 482: { T: -1 }, 483: { T: 1 }, 484: { T: -1 }, 485: { f: Bb }, 486: { T: 1 }, 487: { T: -1 }, 488: { T: 1 }, 489: { T: -1 }, 490: { T: 1 }, 491: { T: -1 }, 492: { T: 1 }, 493: { T: -1 }, 494: { f: aO }, 495: { T: 1 }, 496: { T: -1 }, 497: { T: 1 }, 498: { T: -1 }, 499: {}, 500: { T: 1 }, 501: { T: -1 }, 502: { T: 1 }, 503: { T: -1 }, 504: {}, 505: { T: 1 }, 506: { T: -1 }, 507: {}, 508: { T: 1 }, 509: { T: -1 }, 510: { T: 1 }, 511: { T: -1 }, 512: {}, 513: {}, 514: { T: 1 }, 515: { T: -1 }, 516: { T: 1 }, 517: { T: -1 }, 518: { T: 1 }, 519: { T: -1 }, 520: { T: 1 }, 521: { T: -1 }, 522: {}, 523: {}, 524: {}, 525: {}, 526: {}, 527: {}, 528: { T: 1 }, 529: { T: -1 }, 530: { T: 1 }, 531: { T: -1 }, 532: { T: 1 }, 533: { T: -1 }, 534: {}, 535: {}, 536: {}, 537: {}, 538: { T: 1 }, 539: { T: -1 }, 540: { T: 1 }, 541: { T: -1 }, 542: { T: 1 }, 548: {}, 549: {}, 550: { f: xh }, 551: {}, 552: {}, 553: {}, 554: { T: 1 }, 555: { T: -1 }, 556: { T: 1 }, 557: { T: -1 }, 558: { T: 1 }, 559: { T: -1 }, 560: { T: 1 }, 561: { T: -1 }, 562: {}, 564: {}, 565: { T: 1 }, 566: { T: -1 }, 569: { T: 1 }, 570: { T: -1 }, 572: {}, 573: { T: 1 }, 574: { T: -1 }, 577: {}, 578: {}, 579: {}, 580: {}, 581: {}, 582: {}, 583: {}, 584: {}, 585: {}, 586: {}, 587: {}, 588: { T: -1 }, 589: {}, 590: { T: 1 }, 591: { T: -1 }, 592: { T: 1 }, 593: { T: -1 }, 594: { T: 1 }, 595: { T: -1 }, 596: {}, 597: { T: 1 }, 598: { T: -1 }, 599: { T: 1 }, 600: { T: -1 }, 601: { T: 1 }, 602: { T: -1 }, 603: { T: 1 }, 604: { T: -1 }, 605: { T: 1 }, 606: { T: -1 }, 607: {}, 608: { T: 1 }, 609: { T: -1 }, 610: {}, 611: { T: 1 }, 612: { T: -1 }, 613: { T: 1 }, 614: { T: -1 }, 615: { T: 1 }, 616: { T: -1 }, 617: { T: 1 }, 618: { T: -1 }, 619: { T: 1 }, 620: { T: -1 }, 625: {}, 626: { T: 1 }, 627: { T: -1 }, 628: { T: 1 }, 629: { T: -1 }, 630: { T: 1 }, 631: { T: -1 }, 632: { f: L8 }, 633: { T: 1 }, 634: { T: -1 }, 635: { T: 1, f: M8 }, 636: { T: -1 }, 637: { f: nA }, 638: { T: 1 }, 639: {}, 640: { T: -1 }, 641: { T: 1 }, 642: { T: -1 }, 643: { T: 1 }, 644: {}, 645: { T: -1 }, 646: { T: 1 }, 648: { T: 1 }, 649: {}, 650: { T: -1 }, 651: { f: pO }, 652: {}, 653: { T: 1 }, 654: { T: -1 }, 655: { T: 1 }, 656: { T: -1 }, 657: { T: 1 }, 658: { T: -1 }, 659: {}, 660: { T: 1 }, 661: {}, 662: { T: -1 }, 663: {}, 664: { T: 1 }, 665: {}, 666: { T: -1 }, 667: {}, 668: {}, 669: {}, 671: { T: 1 }, 672: { T: -1 }, 673: { T: 1 }, 674: { T: -1 }, 675: {}, 676: {}, 677: {}, 678: {}, 679: {}, 680: {}, 681: {}, 1024: {}, 1025: {}, 1026: { T: 1 }, 1027: { T: -1 }, 1028: { T: 1 }, 1029: { T: -1 }, 1030: {}, 1031: { T: 1 }, 1032: { T: -1 }, 1033: { T: 1 }, 1034: { T: -1 }, 1035: {}, 1036: {}, 1037: {}, 1038: { T: 1 }, 1039: { T: -1 }, 1040: {}, 1041: { T: 1 }, 1042: { T: -1 }, 1043: {}, 1044: {}, 1045: {}, 1046: { T: 1 }, 1047: { T: -1 }, 1048: { T: 1 }, 1049: { T: -1 }, 1050: {}, 1051: { T: 1 }, 1052: { T: 1 }, 1053: { f: oO }, 1054: { T: 1 }, 1055: {}, 1056: { T: 1 }, 1057: { T: -1 }, 1058: { T: 1 }, 1059: { T: -1 }, 1061: {}, 1062: { T: 1 }, 1063: { T: -1 }, 1064: { T: 1 }, 1065: { T: -1 }, 1066: { T: 1 }, 1067: { T: -1 }, 1068: { T: 1 }, 1069: { T: -1 }, 1070: { T: 1 }, 1071: { T: -1 }, 1072: { T: 1 }, 1073: { T: -1 }, 1075: { T: 1 }, 1076: { T: -1 }, 1077: { T: 1 }, 1078: { T: -1 }, 1079: { T: 1 }, 1080: { T: -1 }, 1081: { T: 1 }, 1082: { T: -1 }, 1083: { T: 1 }, 1084: { T: -1 }, 1085: {}, 1086: { T: 1 }, 1087: { T: -1 }, 1088: { T: 1 }, 1089: { T: -1 }, 1090: { T: 1 }, 1091: { T: -1 }, 1092: { T: 1 }, 1093: { T: -1 }, 1094: { T: 1 }, 1095: { T: -1 }, 1096: {}, 1097: { T: 1 }, 1098: {}, 1099: { T: -1 }, 1100: { T: 1 }, 1101: { T: -1 }, 1102: {}, 1103: {}, 1104: {}, 1105: {}, 1111: {}, 1112: {}, 1113: { T: 1 }, 1114: { T: -1 }, 1115: { T: 1 }, 1116: { T: -1 }, 1117: {}, 1118: { T: 1 }, 1119: { T: -1 }, 1120: { T: 1 }, 1121: { T: -1 }, 1122: { T: 1 }, 1123: { T: -1 }, 1124: { T: 1 }, 1125: { T: -1 }, 1126: {}, 1128: { T: 1 }, 1129: { T: -1 }, 1130: {}, 1131: { T: 1 }, 1132: { T: -1 }, 1133: { T: 1 }, 1134: { T: -1 }, 1135: { T: 1 }, 1136: { T: -1 }, 1137: { T: 1 }, 1138: { T: -1 }, 1139: { T: 1 }, 1140: { T: -1 }, 1141: {}, 1142: { T: 1 }, 1143: { T: -1 }, 1144: { T: 1 }, 1145: { T: -1 }, 1146: {}, 1147: { T: 1 }, 1148: { T: -1 }, 1149: { T: 1 }, 1150: { T: -1 }, 1152: { T: 1 }, 1153: { T: -1 }, 1154: { T: -1 }, 1155: { T: -1 }, 1156: { T: -1 }, 1157: { T: 1 }, 1158: { T: -1 }, 1159: { T: 1 }, 1160: { T: -1 }, 1161: { T: 1 }, 1162: { T: -1 }, 1163: { T: 1 }, 1164: { T: -1 }, 1165: { T: 1 }, 1166: { T: -1 }, 1167: { T: 1 }, 1168: { T: -1 }, 1169: { T: 1 }, 1170: { T: -1 }, 1171: {}, 1172: { T: 1 }, 1173: { T: -1 }, 1177: {}, 1178: { T: 1 }, 1180: {}, 1181: {}, 1182: {}, 2048: { T: 1 }, 2049: { T: -1 }, 2050: {}, 2051: { T: 1 }, 2052: { T: -1 }, 2053: {}, 2054: {}, 2055: { T: 1 }, 2056: { T: -1 }, 2057: { T: 1 }, 2058: { T: -1 }, 2060: {}, 2067: {}, 2068: { T: 1 }, 2069: { T: -1 }, 2070: {}, 2071: {}, 2072: { T: 1 }, 2073: { T: -1 }, 2075: {}, 2076: {}, 2077: { T: 1 }, 2078: { T: -1 }, 2079: {}, 2080: { T: 1 }, 2081: { T: -1 }, 2082: {}, 2083: { T: 1 }, 2084: { T: -1 }, 2085: { T: 1 }, 2086: { T: -1 }, 2087: { T: 1 }, 2088: { T: -1 }, 2089: { T: 1 }, 2090: { T: -1 }, 2091: {}, 2092: {}, 2093: { T: 1 }, 2094: { T: -1 }, 2095: {}, 2096: { T: 1 }, 2097: { T: -1 }, 2098: { T: 1 }, 2099: { T: -1 }, 2100: { T: 1 }, 2101: { T: -1 }, 2102: {}, 2103: { T: 1 }, 2104: { T: -1 }, 2105: {}, 2106: { T: 1 }, 2107: { T: -1 }, 2108: {}, 2109: { T: 1 }, 2110: { T: -1 }, 2111: { T: 1 }, 2112: { T: -1 }, 2113: { T: 1 }, 2114: { T: -1 }, 2115: {}, 2116: {}, 2117: {}, 2118: { T: 1 }, 2119: { T: -1 }, 2120: {}, 2121: { T: 1 }, 2122: { T: -1 }, 2123: { T: 1 }, 2124: { T: -1 }, 2125: {}, 2126: { T: 1 }, 2127: { T: -1 }, 2128: {}, 2129: { T: 1 }, 2130: { T: -1 }, 2131: { T: 1 }, 2132: { T: -1 }, 2133: { T: 1 }, 2134: {}, 2135: {}, 2136: {}, 2137: { T: 1 }, 2138: { T: -1 }, 2139: { T: 1 }, 2140: { T: -1 }, 2141: {}, 3072: {}, 3073: {}, 4096: { T: 1 }, 4097: { T: -1 }, 5002: { T: 1 }, 5003: { T: -1 }, 5081: { T: 1 }, 5082: { T: -1 }, 5083: {}, 5084: { T: 1 }, 5085: { T: -1 }, 5086: { T: 1 }, 5087: { T: -1 }, 5088: {}, 5089: {}, 5090: {}, 5092: { T: 1 }, 5093: { T: -1 }, 5094: {}, 5095: { T: 1 }, 5096: { T: -1 }, 5097: {}, 5099: {}, 65535: { n: "" } }, yh = { 6: { f: Ko }, 10: { f: Mn }, 12: { f: Yt }, 13: { f: Yt }, 14: { f: zt }, 15: { f: zt }, 16: { f: mr }, 17: { f: zt }, 18: { f: zt }, 19: { f: Yt }, 20: { f: wm }, 21: { f: wm }, 23: { f: my }, 24: { f: Am }, 25: { f: zt }, 26: {}, 27: {}, 28: { f: Fk }, 29: {}, 34: { f: zt }, 35: { f: Sm }, 38: { f: mr }, 39: { f: mr }, 40: { f: mr }, 41: { f: mr }, 42: { f: zt }, 43: { f: zt }, 47: { f: BC }, 49: { f: dk }, 51: { f: Yt }, 60: {}, 61: { f: uk }, 64: { f: zt }, 65: { f: hk }, 66: { f: Yt }, 77: {}, 80: {}, 81: {}, 82: {}, 85: { f: Yt }, 89: {}, 90: {}, 91: {}, 92: { f: rk }, 93: { f: Mk }, 94: {}, 95: { f: zt }, 96: {}, 97: {}, 99: { f: zt }, 125: { f: gy }, 128: { f: wk }, 129: { f: ak }, 130: { f: Yt }, 131: { f: zt }, 132: { f: zt }, 133: { f: nk }, 134: {}, 140: { f: jk }, 141: { f: Yt }, 144: {}, 146: { f: Pk }, 151: {}, 152: {}, 153: {}, 154: {}, 155: {}, 156: { f: Yt }, 157: {}, 158: {}, 160: { f: Yk }, 161: { f: Vk }, 174: {}, 175: {}, 176: {}, 177: {}, 178: {}, 180: {}, 181: {}, 182: {}, 184: {}, 185: {}, 189: { f: yk }, 190: { f: Ek }, 193: { f: Mn }, 197: {}, 198: {}, 199: {}, 200: {}, 201: {}, 202: { f: zt }, 203: {}, 204: {}, 205: {}, 206: {}, 207: {}, 208: {}, 209: {}, 210: {}, 211: {}, 213: {}, 215: {}, 216: {}, 217: {}, 218: { f: Yt }, 220: {}, 221: { f: zt }, 222: {}, 224: { f: Tk }, 225: { f: tk }, 226: { f: Mn }, 227: {}, 229: { f: Nk }, 233: {}, 235: {}, 236: {}, 237: {}, 239: {}, 240: {}, 241: {}, 242: {}, 244: {}, 245: {}, 246: {}, 247: {}, 248: {}, 249: {}, 251: {}, 252: { f: ik }, 253: { f: xk }, 255: { f: sk }, 256: {}, 259: {}, 290: {}, 311: {}, 312: {}, 315: {}, 317: { f: oy }, 318: {}, 319: {}, 320: {}, 330: {}, 331: {}, 333: {}, 334: {}, 335: {}, 336: {}, 337: {}, 338: {}, 339: {}, 340: {}, 351: {}, 352: { f: zt }, 353: { f: Mn }, 401: {}, 402: {}, 403: {}, 404: {}, 405: {}, 406: {}, 407: {}, 408: {}, 425: {}, 426: {}, 427: {}, 428: {}, 429: {}, 430: { f: Ak }, 431: { f: zt }, 432: {}, 433: {}, 434: {}, 437: {}, 438: { f: Uk }, 439: { f: zt }, 440: { f: Ik }, 441: {}, 442: { f: mc }, 443: {}, 444: { f: Yt }, 445: {}, 446: {}, 448: { f: Mn }, 449: { f: fk, r: 2 }, 450: { f: Mn }, 512: { f: _m }, 513: { f: $k }, 515: { f: Sk }, 516: { f: vk }, 517: { f: Tm }, 519: { f: qk }, 520: { f: lk }, 523: {}, 545: { f: km }, 549: { f: Em }, 566: {}, 574: { f: ok }, 638: { f: gk }, 659: {}, 1048: {}, 1054: { f: pk }, 1084: {}, 1212: { f: Ok }, 2048: { f: Hk }, 2049: {}, 2050: {}, 2051: {}, 2052: {}, 2053: {}, 2054: {}, 2055: {}, 2056: {}, 2057: { f: z0 }, 2058: {}, 2059: {}, 2060: {}, 2061: {}, 2062: {}, 2063: {}, 2064: {}, 2066: {}, 2067: {}, 2128: {}, 2129: {}, 2130: {}, 2131: {}, 2132: {}, 2133: {}, 2134: {}, 2135: {}, 2136: {}, 2137: {}, 2138: {}, 2146: {}, 2147: { r: 12 }, 2148: {}, 2149: {}, 2150: {}, 2151: { f: Mn }, 2152: {}, 2154: {}, 2155: {}, 2156: {}, 2161: {}, 2162: {}, 2164: {}, 2165: {}, 2166: {}, 2167: {}, 2168: {}, 2169: {}, 2170: {}, 2171: {}, 2172: { f: Gk, r: 12 }, 2173: { f: y8, r: 12 }, 2174: {}, 2175: {}, 2180: {}, 2181: {}, 2182: {}, 2183: {}, 2184: {}, 2185: {}, 2186: {}, 2187: {}, 2188: { f: zt, r: 12 }, 2189: {}, 2190: { r: 12 }, 2191: {}, 2192: {}, 2194: {}, 2195: {}, 2196: { f: bk, r: 12 }, 2197: {}, 2198: { f: d8, r: 12 }, 2199: {}, 2200: {}, 2201: {}, 2202: { f: Dk, r: 12 }, 2203: { f: Mn }, 2204: {}, 2205: {}, 2206: {}, 2207: {}, 2211: { f: ck }, 2212: {}, 2213: {}, 2214: {}, 2215: {}, 4097: {}, 4098: {}, 4099: {}, 4102: {}, 4103: {}, 4105: {}, 4106: {}, 4107: {}, 4108: {}, 4109: {}, 4116: {}, 4117: {}, 4118: {}, 4119: {}, 4120: {}, 4121: {}, 4122: {}, 4123: {}, 4124: {}, 4125: {}, 4126: {}, 4127: {}, 4128: {}, 4129: {}, 4130: {}, 4132: {}, 4133: {}, 4134: { f: Yt }, 4135: {}, 4146: {}, 4147: {}, 4148: {}, 4149: {}, 4154: {}, 4156: {}, 4157: {}, 4158: {}, 4159: {}, 4160: {}, 4161: {}, 4163: {}, 4164: { f: Xk }, 4165: {}, 4166: {}, 4168: {}, 4170: {}, 4171: {}, 4174: {}, 4175: {}, 4176: {}, 4177: {}, 4187: {}, 4188: { f: zk }, 4189: {}, 4191: {}, 4192: {}, 4193: {}, 4194: {}, 4195: {}, 4196: {}, 4197: {}, 4198: {}, 4199: {}, 4200: {}, 0: { f: _m }, 1: {}, 2: { f: Qk }, 3: { f: Zk }, 4: { f: Wk }, 5: { f: Tm }, 7: { f: Jk }, 8: {}, 9: { f: z0 }, 11: {}, 22: { f: Yt }, 30: { f: mk }, 31: {}, 32: {}, 33: { f: km }, 36: {}, 37: { f: Em }, 50: { f: eC }, 62: {}, 52: {}, 67: {}, 68: { f: Yt }, 69: {}, 86: {}, 126: {}, 127: { f: Kk }, 135: {}, 136: {}, 137: {}, 145: {}, 148: {}, 149: {}, 150: {}, 169: {}, 171: {}, 188: {}, 191: {}, 192: {}, 194: {}, 195: {}, 214: { f: tC }, 223: {}, 234: {}, 354: {}, 421: {}, 518: { f: Ko }, 521: { f: z0 }, 536: { f: Am }, 547: { f: Sm }, 561: {}, 579: {}, 1030: { f: Ko }, 1033: { f: z0 }, 1091: {}, 2157: {}, 2163: {}, 2177: {}, 2240: {}, 2241: {}, 2242: {}, 2243: {}, 2244: {}, 2245: {}, 2246: {}, 2247: {}, 2248: {}, 2249: {}, 2250: {}, 2251: {}, 2262: { r: 12 }, 29282: {} };
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
  var c = e.match(/<\/table/i), u = s.index, o = c && c.index || e.length, x = S3(e.slice(u, o), /(:?<tr[^>]*>)/i, "<tr>"), d = -1, v = 0, m = 0, g = 0, E = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, T = [];
  for (u = 0; u < x.length; ++u) {
    var y = x[u].trim(), _ = y.slice(0, 3).toLowerCase();
    if (_ == "<tr") {
      if (++d, r.sheetRows && r.sheetRows <= d) {
        --d;
        break;
      }
      v = 0;
      continue;
    }
    if (!(_ != "<td" && _ != "<th")) {
      var D = y.split(/<\/t[dh]>/i);
      for (o = 0; o < D.length; ++o) {
        var b = D[o].trim();
        if (b.match(/<t[dh]/i)) {
          for (var w = b, M = 0; w.charAt(0) == "<" && (M = w.indexOf(">")) > -1; ) w = w.slice(M + 1);
          for (var V = 0; V < T.length; ++V) {
            var j = T[V];
            j.s.c == v && j.s.r < d && d <= j.e.r && (v = j.e.c + 1, V = -1);
          }
          var C = Pe(b.slice(0, b.indexOf(">")));
          g = C.colspan ? +C.colspan : 1, ((m = +C.rowspan) > 1 || g > 1) && T.push({ s: { r: d, c: v }, e: { r: d + (m || 1) - 1, c: v + g - 1 } });
          var A = C.t || C["data-t"] || "";
          if (!w.length) {
            v += g;
            continue;
          }
          if (w = H2(w), E.s.r > d && (E.s.r = d), E.e.r < d && (E.e.r = d), E.s.c > v && (E.s.c = v), E.e.c < v && (E.e.c = v), !w.length) {
            v += g;
            continue;
          }
          var S = { t: "s", v: w };
          r.raw || !w.trim().length || A == "s" || (w === "TRUE" ? S = { t: "b", v: true } : w === "FALSE" ? S = { t: "b", v: false } : isNaN(Ta(w)) ? isNaN(ks(w).getDate()) || (S = { t: "d", v: ir(w) }, r.cellDates || (S = { t: "n", v: br(S.v) }), S.z = r.dateNF || We[14]) : S = { t: "n", v: Ta(w) }), r.dense ? (i[d] || (i[d] = []), i[d][v] = S) : i[$e({ r: d, c: v })] = S, v += g;
        }
      }
    }
  }
  return i["!ref"] = ut(E), T.length && (i["!merges"] = T), i;
}
function eD(e, a, r, i) {
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
      var v = $e({ r, c: u }), m = i.dense ? (e[r] || [])[u] : e[v], g = m && m.v != null && (m.h || Jh(m.w || (ln(m), m.w) || "")) || "", E = {};
      o > 1 && (E.rowspan = o), x > 1 && (E.colspan = x), i.editable ? g = '<span contenteditable="true">' + g + "</span>" : m && (E["data-t"] = m && m.t || "z", m.v != null && (E["data-v"] = m.v), m.z != null && (E["data-z"] = m.z), m.l && (m.l.Target || "#").charAt(0) != "#" && (g = '<a href="' + m.l.Target + '">' + g + "</a>")), E.id = (i.id || "sjs") + "-" + v, c.push(j3("td", g, E));
    }
  }
  var T = "<tr>";
  return T + c.join("") + "</tr>";
}
var tD = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', rD = "</body></html>";
function aD(e, a) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1) return Xn(Um(r[0], a), a);
  var i = md();
  return r.forEach(function(s, c) {
    gd(i, Um(s, a), "Sheet" + (c + 1));
  }), i;
}
function nD(e, a, r) {
  var i = [];
  return i.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function iD(e, a) {
  var r = a || {}, i = r.header != null ? r.header : tD, s = r.footer != null ? r.footer : rD, c = [i], u = Rs(e["!ref"]);
  r.dense = Array.isArray(e), c.push(nD(e, u, r));
  for (var o = u.s.r; o <= u.e.r; ++o) c.push(eD(e, u, o, r));
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
    var v = Rs(e["!ref"]);
    d.s.r = Math.min(d.s.r, v.s.r), d.s.c = Math.min(d.s.c, v.s.c), d.e.r = Math.max(d.e.r, v.e.r), d.e.c = Math.max(d.e.c, v.e.c), s == -1 && (d.e.r = s = v.e.r + 1);
  }
  var m = [], g = 0, E = e["!rows"] || (e["!rows"] = []), T = 0, y = 0, _ = 0, D = 0, b = 0, w = 0;
  for (e["!cols"] || (e["!cols"] = []); T < o.length && y < x; ++T) {
    var M = o[T];
    if (Im(M)) {
      if (i.display) continue;
      E[y] = { hidden: true };
    }
    var V = M.children;
    for (_ = D = 0; _ < V.length; ++_) {
      var j = V[_];
      if (!(i.display && Im(j))) {
        var C = j.hasAttribute("data-v") ? j.getAttribute("data-v") : j.hasAttribute("v") ? j.getAttribute("v") : H2(j.innerHTML), A = j.getAttribute("data-z") || j.getAttribute("z");
        for (g = 0; g < m.length; ++g) {
          var S = m[g];
          S.s.c == D + c && S.s.r < y + s && y + s <= S.e.r && (D = S.e.c + 1 - c, g = -1);
        }
        w = +j.getAttribute("colspan") || 1, ((b = +j.getAttribute("rowspan") || 1) > 1 || w > 1) && m.push({ s: { r: y + s, c: D + c }, e: { r: y + s + (b || 1) - 1, c: D + c + (w || 1) - 1 } });
        var N = { t: "s", v: C }, B = j.getAttribute("data-t") || j.getAttribute("t") || "";
        C != null && (C.length == 0 ? N.t = B || "z" : i.raw || C.trim().length == 0 || B == "s" || (C === "TRUE" ? N = { t: "b", v: true } : C === "FALSE" ? N = { t: "b", v: false } : isNaN(Ta(C)) ? isNaN(ks(C).getDate()) || (N = { t: "d", v: ir(C) }, i.cellDates || (N = { t: "n", v: br(N.v) }), N.z = i.dateNF || We[14]) : N = { t: "n", v: Ta(C) })), N.z === void 0 && A != null && (N.z = A);
        var U = "", ne = j.getElementsByTagName("A");
        if (ne && ne.length) for (var ge = 0; ge < ne.length && !(ne[ge].hasAttribute("href") && (U = ne[ge].getAttribute("href"), U.charAt(0) != "#")); ++ge) ;
        U && U.charAt(0) != "#" && (N.l = { Target: U }), i.dense ? (e[y + s] || (e[y + s] = []), e[y + s][D + c] = N) : e[$e({ c: D + c, r: y + s })] = N, d.e.c < D + c && (d.e.c = D + c), D += w;
      }
    }
    ++y;
  }
  return m.length && (e["!merges"] = (e["!merges"] || []).concat(m)), d.e.r = Math.max(d.e.r, y - 1 + s), e["!ref"] = ut(d), y >= x && (e["!fullref"] = ut((d.e.r = o.length - T + y - 1 + s, d))), e;
}
function Xy(e, a) {
  var r = a || {}, i = r.dense ? [] : {};
  return Vy(i, e, a);
}
function sD(e, a) {
  return Xn(Xy(e, a), a);
}
function Im(e) {
  var a = "", r = lD(e);
  return r && (a = r(e).getPropertyValue("display")), a || (a = e.style && e.style.display), a === "none";
}
function lD(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function cD(e) {
  var a = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(i, s) {
    return Array(parseInt(s, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = ot(a.replace(/<[^>]*>/g, ""));
  return [r];
}
var Hm = { day: ["d", "dd"], month: ["m", "mm"], year: ["y", "yy"], hours: ["h", "hh"], minutes: ["m", "mm"], seconds: ["s", "ss"], "am-pm": ["A/P", "AM/PM"], "day-of-week": ["ddd", "dddd"], era: ["e", "ee"], quarter: ["\\Qm", 'm\\"th quarter"'] };
function $y(e, a) {
  var r = a || {}, i = ed(e), s = [], c, u, o = { name: "" }, x = "", d = 0, v, m, g = {}, E = [], T = r.dense ? [] : {}, y, _, D = { value: "" }, b = "", w = 0, M = [], V = -1, j = -1, C = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, A = 0, S = {}, N = [], B = {}, U = 0, ne = 0, ge = [], fe = 1, J = 1, ae = [], we = { Names: [] }, Q = {}, H = ["", ""], re = [], R = {}, z = "", q = 0, W = false, ie = false, Ae = 0;
  for (ac.lastIndex = 0, i = i.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); y = ac.exec(i); ) switch (y[3] = y[3].replace(/_.*$/, "")) {
    case "table":
    case "\u5DE5\u4F5C\u8868":
      y[1] === "/" ? (C.e.c >= C.s.c && C.e.r >= C.s.r ? T["!ref"] = ut(C) : T["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= C.e.r && (T["!fullref"] = T["!ref"], C.e.r = r.sheetRows - 1, T["!ref"] = ut(C)), N.length && (T["!merges"] = N), ge.length && (T["!rows"] = ge), v.name = v.\u540D\u79F0 || v.name, typeof JSON < "u" && JSON.stringify(v), E.push(v.name), g[v.name] = T, ie = false) : y[0].charAt(y[0].length - 2) !== "/" && (v = Pe(y[0], false), V = j = -1, C.s.r = C.s.c = 1e7, C.e.r = C.e.c = 0, T = r.dense ? [] : {}, N = [], ge = [], ie = true);
      break;
    case "table-row-group":
      y[1] === "/" ? --A : ++A;
      break;
    case "table-row":
    case "\u884C":
      if (y[1] === "/") {
        V += fe, fe = 1;
        break;
      }
      if (m = Pe(y[0], false), m.\u884C\u53F7 ? V = m.\u884C\u53F7 - 1 : V == -1 && (V = 0), fe = +m["number-rows-repeated"] || 1, fe < 10) for (Ae = 0; Ae < fe; ++Ae) A > 0 && (ge[V + Ae] = { level: A });
      j = -1;
      break;
    case "covered-table-cell":
      y[1] !== "/" && ++j, r.sheetStubs && (r.dense ? (T[V] || (T[V] = []), T[V][j] = { t: "z" }) : T[$e({ r: V, c: j })] = { t: "z" }), b = "", M = [];
      break;
    case "table-cell":
    case "\u6570\u636E":
      if (y[0].charAt(y[0].length - 2) === "/") ++j, D = Pe(y[0], false), J = parseInt(D["number-columns-repeated"] || "1", 10), _ = { t: "z", v: null }, D.formula && r.cellFormula != false && (_.f = Nm(ot(D.formula))), (D.\u6570\u636E\u7C7B\u578B || D["value-type"]) == "string" && (_.t = "s", _.v = ot(D["string-value"] || ""), r.dense ? (T[V] || (T[V] = []), T[V][j] = _) : T[$e({ r: V, c: j })] = _), j += J - 1;
      else if (y[1] !== "/") {
        ++j, b = "", w = 0, M = [], J = 1;
        var pe = fe ? V + fe - 1 : V;
        if (j > C.e.c && (C.e.c = j), j < C.s.c && (C.s.c = j), V < C.s.r && (C.s.r = V), pe > C.e.r && (C.e.r = pe), D = Pe(y[0], false), re = [], R = {}, _ = { t: D.\u6570\u636E\u7C7B\u578B || D["value-type"], v: null }, r.cellFormula) if (D.formula && (D.formula = ot(D.formula)), D["number-matrix-columns-spanned"] && D["number-matrix-rows-spanned"] && (U = parseInt(D["number-matrix-rows-spanned"], 10) || 0, ne = parseInt(D["number-matrix-columns-spanned"], 10) || 0, B = { s: { r: V, c: j }, e: { r: V + U - 1, c: j + ne - 1 } }, _.F = ut(B), ae.push([B, _.F])), D.formula) _.f = Nm(D.formula);
        else for (Ae = 0; Ae < ae.length; ++Ae) V >= ae[Ae][0].s.r && V <= ae[Ae][0].e.r && j >= ae[Ae][0].s.c && j <= ae[Ae][0].e.c && (_.F = ae[Ae][1]);
        switch ((D["number-columns-spanned"] || D["number-rows-spanned"]) && (U = parseInt(D["number-rows-spanned"], 10) || 0, ne = parseInt(D["number-columns-spanned"], 10) || 0, B = { s: { r: V, c: j }, e: { r: V + U - 1, c: j + ne - 1 } }, N.push(B)), D["number-columns-repeated"] && (J = parseInt(D["number-columns-repeated"], 10)), _.t) {
          case "boolean":
            _.t = "b", _.v = Ft(D["boolean-value"]);
            break;
          case "float":
            _.t = "n", _.v = parseFloat(D.value);
            break;
          case "percentage":
            _.t = "n", _.v = parseFloat(D.value);
            break;
          case "currency":
            _.t = "n", _.v = parseFloat(D.value);
            break;
          case "date":
            _.t = "d", _.v = ir(D["date-value"]), r.cellDates || (_.t = "n", _.v = br(_.v)), _.z = "m/d/yy";
            break;
          case "time":
            _.t = "n", _.v = _3(D["time-value"]) / 86400, r.cellDates && (_.t = "d", _.v = mf(_.v)), _.z = "HH:MM:SS";
            break;
          case "number":
            _.t = "n", _.v = parseFloat(D.\u6570\u636E\u6570\u503C);
            break;
          default:
            if (_.t === "string" || _.t === "text" || !_.t) _.t = "s", D["string-value"] != null && (b = ot(D["string-value"]), M = []);
            else throw new Error("Unsupported value type " + _.t);
        }
      } else {
        if (W = false, _.t === "s" && (_.v = b || "", M.length && (_.R = M), W = w == 0), Q.Target && (_.l = Q), re.length > 0 && (_.c = re, re = []), b && r.cellText !== false && (_.w = b), W && (_.t = "z", delete _.v), (!W || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= V)) for (var ye = 0; ye < fe; ++ye) {
          if (J = parseInt(D["number-columns-repeated"] || "1", 10), r.dense) for (T[V + ye] || (T[V + ye] = []), T[V + ye][j] = ye == 0 ? _ : or(_); --J > 0; ) T[V + ye][j + J] = or(_);
          else for (T[$e({ r: V + ye, c: j })] = _; --J > 0; ) T[$e({ r: V + ye, c: j + J })] = or(_);
          C.e.c <= j && (C.e.c = j);
        }
        J = parseInt(D["number-columns-repeated"] || "1", 10), j += J - 1, J = 0, _ = {}, b = "", M = [];
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
      if (y[1] === "/") {
        if ((c = s.pop())[0] !== y[3]) throw "Bad state: " + c;
      } else y[0].charAt(y[0].length - 2) !== "/" && s.push([y[3], true]);
      break;
    case "annotation":
      if (y[1] === "/") {
        if ((c = s.pop())[0] !== y[3]) throw "Bad state: " + c;
        R.t = b, M.length && (R.R = M), R.a = z, re.push(R);
      } else y[0].charAt(y[0].length - 2) !== "/" && s.push([y[3], false]);
      z = "", q = 0, b = "", w = 0, M = [];
      break;
    case "creator":
      y[1] === "/" ? z = i.slice(q, y.index) : q = y.index + y[0].length;
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
      if (y[1] === "/") {
        if ((c = s.pop())[0] !== y[3]) throw "Bad state: " + c;
      } else y[0].charAt(y[0].length - 2) !== "/" && s.push([y[3], false]);
      b = "", w = 0, M = [];
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
      if (y[1] === "/") {
        if (S[o.name] = x, (c = s.pop())[0] !== y[3]) throw "Bad state: " + c;
      } else y[0].charAt(y[0].length - 2) !== "/" && (x = "", o = Pe(y[0], false), s.push([y[3], true]));
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
          u = Pe(y[0], false), x += Hm[y[3]][u.style === "long" ? 1 : 0];
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
          u = Pe(y[0], false), x += Hm[y[3]][u.style === "long" ? 1 : 0];
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
      if (y[0].slice(-2) === "/>") break;
      if (y[1] === "/") switch (s[s.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          x += i.slice(d, y.index);
          break;
      }
      else d = y.index + y[0].length;
      break;
    case "named-range":
      u = Pe(y[0], false), H = Wo(u["cell-range-address"]);
      var _e = { Name: u.name, Ref: H[0] + "!" + H[1] };
      ie && (_e.Sheet = E.length), we.Names.push(_e);
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
      if (y[1] === "/" && (!D || !D["string-value"])) {
        var De = cD(i.slice(w, y.index));
        b = (b.length > 0 ? b + `
` : "") + De[0];
      } else Pe(y[0], false), w = y.index + y[0].length;
      break;
    case "s":
      break;
    case "database-range":
      if (y[1] === "/") break;
      try {
        H = Wo(Pe(y[0])["target-range-address"]), g[H[0]]["!autofilter"] = { ref: H[1] };
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
      if (y[1] !== "/") {
        if (Q = Pe(y[0], false), !Q.href) break;
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
      switch (y[2]) {
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
          if (r.WTF) throw new Error(y);
      }
  }
  var X = { Sheets: g, SheetNames: E, Workbook: we };
  return r.bookSheets && delete X.Sheets, X;
}
function jm(e, a) {
  a = a || {}, sa(e, "META-INF/manifest.xml") && SA($t(e, "META-INF/manifest.xml"), a);
  var r = Xr(e, "content.xml");
  if (!r) throw new Error("Missing content.xml in ODS / UOF file");
  var i = $y(bt(r), a);
  return sa(e, "meta.xml") && (i.Props = iy($t(e, "meta.xml"))), i;
}
function zm(e, a) {
  return $y(e, a);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function dd(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Eh(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : bt(Ci(e));
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
function fD(e, a) {
  for (var r = (e[a + 15] & 127) << 7 | e[a + 14] >> 1, i = e[a + 14] & 1, s = a + 13; s >= a; --s) i = i * 256 + e[s];
  return (e[a + 15] & 128 ? -i : i) * Math.pow(10, r - 6176);
}
function lc(e, a) {
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
    var i = r[0], s = lc(e, r), c = s & 7;
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
        u = lc(e, r), o = e.slice(r[0], r[0] + u), r[0] += u;
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
function uD(e) {
  for (var a, r = [], i = [0]; i[0] < e.length; ) {
    var s = lc(e, i), c = gr(e.slice(i[0], i[0] + s));
    i[0] += s;
    var u = { id: Qt(c[1][0].data), messages: [] };
    c[2].forEach(function(o) {
      var x = gr(o.data), d = Qt(x[3][0].data);
      u.messages.push({ meta: x, data: e.slice(i[0], i[0] + d) }), i[0] += d;
    }), (a = c[3]) != null && a[0] && (u.merge = Qt(c[3][0].data) >>> 0 > 0), r.push(u);
  }
  return r;
}
function oD(e, a) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], i = lc(a, r), s = []; r[0] < a.length; ) {
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
function hD(e) {
  for (var a = [], r = 0; r < e.length; ) {
    var i = e[r++], s = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, a.push(oD(i, e.slice(r, r + s))), r += s;
  }
  if (r !== e.length) throw new Error("data is not a valid framed stream!");
  return _h(a);
}
function dD(e, a, r, i) {
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
function xD(e, a, r) {
  var i = dd(e), s = i.getUint32(8, true), c = 12, u = -1, o = -1, x = NaN, d = NaN, v = new Date(2001, 0, 1);
  s & 1 && (x = fD(e, c), c += 16), s & 2 && (d = i.getFloat64(c, true), c += 8), s & 4 && (v.setTime(v.getTime() + i.getFloat64(c, true) * 1e3), c += 8), s & 8 && (o = i.getUint32(c, true), c += 4), s & 16 && (u = i.getUint32(c, true), c += 4);
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
function vD(e, a, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return dD(e, a, r, e[0]);
    case 5:
      return xD(e, a, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function jn(e) {
  var a = gr(e);
  return lc(a[1][0].data);
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
          var E = gr(m.data);
          c[x] = E[3].map(function(T) {
            return Eh(T.data);
          }).join("");
        }
        break;
    }
  }), c;
}
function pD(e, a) {
  var r, i, s, c, u, o, x, d, v, m, g, E, T, y, _ = gr(e), D = Qt(_[1][0].data) >>> 0, b = Qt(_[2][0].data) >>> 0, w = ((i = (r = _[8]) == null ? void 0 : r[0]) == null ? void 0 : i.data) && Qt(_[8][0].data) > 0 || false, M, V;
  if ((c = (s = _[7]) == null ? void 0 : s[0]) != null && c.data && a != 0) M = (o = (u = _[7]) == null ? void 0 : u[0]) == null ? void 0 : o.data, V = (d = (x = _[6]) == null ? void 0 : x[0]) == null ? void 0 : d.data;
  else if ((m = (v = _[4]) == null ? void 0 : v[0]) != null && m.data && a != 1) M = (E = (g = _[4]) == null ? void 0 : g[0]) == null ? void 0 : E.data, V = (y = (T = _[3]) == null ? void 0 : T[0]) == null ? void 0 : y.data;
  else throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var j = w ? 4 : 1, C = dd(M), A = [], S = 0; S < M.length / 2; ++S) {
    var N = C.getUint16(S * 2, true);
    N < 65535 && A.push([S, N]);
  }
  if (A.length != b) throw "Expected ".concat(b, " cells, found ").concat(A.length);
  var B = [];
  for (S = 0; S < A.length - 1; ++S) B[A[S][0]] = V.subarray(A[S][1] * j, A[S + 1][1] * j);
  return A.length >= 1 && (B[A[A.length - 1][0]] = V.subarray(A[A.length - 1][1] * j)), { R: D, cells: B };
}
function mD(e, a) {
  var r, i = gr(a.data), s = (r = i == null ? void 0 : i[7]) != null && r[0] ? Qt(i[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, c = xd(i[5], function(u) {
    return pD(u, s);
  });
  return { nrows: Qt(i[4][0].data) >>> 0, data: c.reduce(function(u, o) {
    return u[o.R] || (u[o.R] = []), o.cells.forEach(function(x, d) {
      if (u[o.R][d]) throw new Error("Duplicate cell r=".concat(o.R, " c=").concat(d));
      u[o.R][d] = x;
    }), u;
  }, []) };
}
function gD(e, a, r) {
  var i, s = gr(a.data), c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (c.e.r = (Qt(s[6][0].data) >>> 0) - 1, c.e.r < 0) throw new Error("Invalid row varint ".concat(s[6][0].data));
  if (c.e.c = (Qt(s[7][0].data) >>> 0) - 1, c.e.c < 0) throw new Error("Invalid col varint ".concat(s[7][0].data));
  r["!ref"] = ut(c);
  var u = gr(s[4][0].data), o = Gm(e, e[jn(u[4][0].data)][0]), x = (i = u[17]) != null && i[0] ? Gm(e, e[jn(u[17][0].data)][0]) : [], d = gr(u[3][0].data), v = 0;
  d[1].forEach(function(m) {
    var g = gr(m.data), E = e[jn(g[2][0].data)][0], T = Qt(E.meta[1][0].data);
    if (T != 6002) throw new Error("6001 unexpected reference to ".concat(T));
    var y = mD(e, E);
    y.data.forEach(function(_, D) {
      _.forEach(function(b, w) {
        var M = $e({ r: v + D, c: w }), V = vD(b, o, x);
        V && (r[M] = V);
      });
    }), v += y.nrows;
  });
}
function yD(e, a) {
  var r = gr(a.data), i = { "!ref": "A1" }, s = e[jn(r[2][0].data)], c = Qt(s[0].meta[1][0].data);
  if (c != 6001) throw new Error("6000 unexpected reference to ".concat(c));
  return gD(e, s[0], i), i;
}
function ED(e, a) {
  var r, i = gr(a.data), s = { name: (r = i[1]) != null && r[0] ? Eh(i[1][0].data) : "", sheets: [] }, c = xd(i[2], jn);
  return c.forEach(function(u) {
    e[u].forEach(function(o) {
      var x = Qt(o.meta[1][0].data);
      x == 6e3 && s.sheets.push(yD(e, o));
    });
  }), s;
}
function _D(e, a) {
  var r = md(), i = gr(a.data), s = xd(i[1], jn);
  if (s.forEach(function(c) {
    e[c].forEach(function(u) {
      var o = Qt(u.meta[1][0].data);
      if (o == 2) {
        var x = ED(e, u);
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
        d = hD(x.content);
      } catch (m) {
        return console.log("?? " + x.content.length + " " + (m.message || m));
      }
      var v;
      try {
        v = uD(d);
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
  return _D(c, o);
}
function TD(e) {
  return function(r) {
    for (var i = 0; i != e.length; ++i) {
      var s = e[i];
      r[s[0]] === void 0 && (r[s[0]] = s[1]), s[2] === "n" && (r[s[0]] = Number(r[s[0]]));
    }
  };
}
function vd(e) {
  TD([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
}
function wD(e) {
  return ms.WS.indexOf(e) > -1 ? "sheet" : e == ms.CS ? "chart" : e == ms.DS ? "dialog" : e == ms.MS ? "macro" : e && e.length ? e : "sheet";
}
function SD(e, a) {
  if (!e) return 0;
  try {
    e = a.map(function(i) {
      return i.id || (i.id = i.strRelID), [i.name, e["!id"][i.id].Target, wD(e["!id"][i.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function AD(e, a, r, i, s, c, u, o, x, d, v, m) {
  try {
    c[i] = $l(Xr(e, r, true), a);
    var g = $t(e, a), E;
    switch (o) {
      case "sheet":
        E = RO(g, a, s, x, c[i], d, v, m);
        break;
      case "chart":
        if (E = FO(g, a, s, x, c[i], d, v, m), !E || !E["!drawel"]) break;
        var T = Il(E["!drawel"].Target, a), y = vh(T), _ = D8(Xr(e, T, true), $l(Xr(e, y, true), T)), D = Il(_, T), b = vh(D);
        E = xO(Xr(e, D, true), D, x, $l(Xr(e, b, true), D), d, E);
        break;
      case "macro":
        E = NO(g, a, s, x, c[i], d, v, m);
        break;
      case "dialog":
        E = MO(g, a, s, x, c[i], d, v, m);
        break;
      default:
        throw new Error("Unrecognized sheet type " + o);
    }
    u[i] = E;
    var w = [];
    c && c[i] && La(c[i]).forEach(function(M) {
      var V = "";
      if (c[i][M].Type == ms.CMNT) {
        V = Il(c[i][M].Target, a);
        var j = IO($t(e, V, true), V, x);
        if (!j || !j.length) return;
        bm(E, j, false);
      }
      c[i][M].Type == ms.TCMNT && (V = Il(c[i][M].Target, a), w = w.concat(F8($t(e, V, true), x)));
    }), w && w.length && bm(E, w, true, x.people || []);
  } catch (M) {
    if (x.WTF) throw M;
  }
}
function na(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function kD(e, a) {
  if (D2(), a = a || {}, vd(a), sa(e, "META-INF/manifest.xml") || sa(e, "objectdata.xml")) return jm(e, a);
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
  if (s.workbooks.length === 0 && (o = "xl/workbook.xml", $t(e, o, true) && s.workbooks.push(o)), s.workbooks.length === 0) {
    if (o = "xl/workbook.bin", !$t(e, o, true)) throw new Error("Could not find workbook");
    s.workbooks.push(o), c = true;
  }
  s.workbooks[0].slice(-3) == "bin" && (c = true);
  var x = {}, d = {};
  if (!a.bookSheets && !a.bookProps) {
    if (Kl = [], s.sst) try {
      Kl = UO($t(e, na(s.sst)), s.sst, a);
    } catch (ge) {
      if (a.WTF) throw ge;
    }
    a.cellStyles && s.themes.length && (x = BO(Xr(e, s.themes[0].replace(/^\//, ""), true) || "", s.themes[0], a)), s.style && (d = LO($t(e, na(s.style)), s.style, x, a));
  }
  s.links.map(function(ge) {
    try {
      var fe = $l(Xr(e, vh(na(ge))), ge);
      return jO($t(e, na(ge)), fe, ge, a);
    } catch {
    }
  });
  var v = DO($t(e, na(s.workbooks[0])), s.workbooks[0], a), m = {}, g = "";
  s.coreprops.length && (g = $t(e, na(s.coreprops[0]), true), g && (m = iy(g)), s.extprops.length !== 0 && (g = $t(e, na(s.extprops[0]), true), g && CA(g, m, a)));
  var E = {};
  (!a.bookSheets || a.bookProps) && s.custprops.length !== 0 && (g = Xr(e, na(s.custprops[0]), true), g && (E = OA(g, a)));
  var T = {};
  if ((a.bookSheets || a.bookProps) && (v.Sheets ? u = v.Sheets.map(function(fe) {
    return fe.name;
  }) : m.Worksheets && m.SheetNames.length > 0 && (u = m.SheetNames), a.bookProps && (T.Props = m, T.Custprops = E), a.bookSheets && typeof u < "u" && (T.SheetNames = u), a.bookSheets ? T.SheetNames : a.bookProps)) return T;
  u = {};
  var y = {};
  a.bookDeps && s.calcchain && (y = HO($t(e, na(s.calcchain)), s.calcchain));
  var _ = 0, D = {}, b, w;
  {
    var M = v.Sheets;
    m.Worksheets = M.length, m.SheetNames = [];
    for (var V = 0; V != M.length; ++V) m.SheetNames[V] = M[V].name;
  }
  var j = c ? "bin" : "xml", C = s.workbooks[0].lastIndexOf("/"), A = (s.workbooks[0].slice(0, C + 1) + "_rels/" + s.workbooks[0].slice(C + 1) + ".rels").replace(/^\//, "");
  sa(e, A) || (A = "xl/_rels/workbook." + j + ".rels");
  var S = $l(Xr(e, A, true), A.replace(/_rels.*/, "s5s"));
  (s.metadata || []).length >= 1 && (a.xlmeta = zO($t(e, na(s.metadata[0])), s.metadata[0], a)), (s.people || []).length >= 1 && (a.people = N8($t(e, na(s.people[0])), a)), S && (S = SD(S, v.Sheets));
  var N = $t(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  e: for (_ = 0; _ != m.Worksheets; ++_) {
    var B = "sheet";
    if (S && S[_] ? (b = "xl/" + S[_][1].replace(/[\/]?xl\//, ""), sa(e, b) || (b = S[_][1]), sa(e, b) || (b = A.replace(/_rels\/.*$/, "") + S[_][1]), B = S[_][2]) : (b = "xl/worksheets/sheet" + (_ + 1 - N) + "." + j, b = b.replace(/sheet0\./, "sheet.")), w = b.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), a && a.sheets != null) switch (typeof a.sheets) {
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
    AD(e, b, w, m.SheetNames[_], _, D, u, B, a, v, x, d);
  }
  return T = { Directory: s, Workbook: v, Props: m, Custprops: E, Deps: y, Sheets: u, SheetNames: m.SheetNames, Strings: Kl, Styles: d, Themes: x, SSF: or(We) }, a && a.bookFiles && (e.files ? (T.keys = i, T.files = e.files) : (T.keys = [], T.files = {}, e.FullPaths.forEach(function(ge, fe) {
    ge = ge.replace(/^Root Entry[\/]/, ""), T.keys.push(ge), T.files[ge] = e.FileIndex[fe];
  }))), a && a.bookVBA && (s.vba.length > 0 ? T.vbaraw = $t(e, na(s.vba[0]), true) : s.defaults && s.defaults.bin === U8 && (T.vbaraw = $t(e, "xl/vbaProject.bin", true))), T;
}
function CD(e, a) {
  var r = a || {}, i = "Workbook", s = ft.find(e, i);
  try {
    if (i = "/!DataSpaces/Version", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    if (yC(s.content), i = "/!DataSpaces/DataSpaceMap", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    var c = _C(s.content);
    if (c.length !== 1 || c[0].comps.length !== 1 || c[0].comps[0].t !== 0 || c[0].name !== "StrongEncryptionDataSpace" || c[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + i);
    if (i = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    var u = TC(s.content);
    if (u.length != 1 || u[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + i);
    if (i = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
    SC(s.content);
  } catch {
  }
  if (i = "/EncryptionInfo", s = ft.find(e, i), !s || !s.content) throw new Error("ECMA-376 Encrypted file missing " + i);
  var o = AC(s.content);
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
      r = Yr(e.slice(0, 12));
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
function bD(e, a) {
  return ft.find(e, "EncryptedPackage") ? CD(e, a) : Gy(e, a);
}
function OD(e, a) {
  var r, i = e, s = a || {};
  return s.type || (s.type = lt && Buffer.isBuffer(e) ? "buffer" : "base64"), r = B2(i, s), kD(r, s);
}
function Yy(e, a) {
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
  return nc.to_workbook(e, a);
}
function DD(e, a) {
  var r = "", i = pd(e, a);
  switch (a.type) {
    case "base64":
      r = Yr(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = Si(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return i[0] == 239 && i[1] == 187 && i[2] == 191 && (r = bt(r)), a.type = "binary", Yy(r, a);
}
function RD(e, a) {
  var r = e;
  return a.type == "base64" && (r = Yr(r)), r = hh.utils.decode(1200, r.slice(2), "str"), a.type = "binary", Yy(r, a);
}
function FD(e) {
  return e.match(/[^\x00-\x7F]/) ? Hl(e) : e;
}
function Jo(e, a, r, i) {
  return i ? (r.type = "string", nc.to_workbook(e, r)) : nc.to_workbook(a, r);
}
function Th(e, a) {
  g2();
  var r = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return Th(new Uint8Array(e), (r = or(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var i = e, s = [0, 0, 0, 0], c = false;
  if (r.cellStyles && (r.cellNF = true, r.sheetStubs = true), Es = {}, r.dateNF && (Es.dateNF = r.dateNF), r.type || (r.type = lt && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = lt ? "buffer" : "binary", i = y3(e), typeof Uint8Array < "u" && !lt && (r.type = "array")), r.type == "string" && (c = true, r.type = "binary", r.codepage = 65001, i = FD(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var u = new ArrayBuffer(3), o = new Uint8Array(u);
    if (o.foo = "bar", !o.foo) return r = or(r), r.type = "array", Th(qh(i), r);
  }
  switch ((s = pd(i, r))[0]) {
    case 208:
      if (s[1] === 207 && s[2] === 17 && s[3] === 224 && s[4] === 161 && s[5] === 177 && s[6] === 26 && s[7] === 225) return bD(ft.read(i, r), r);
      break;
    case 9:
      if (s[1] <= 8) return Gy(i, r);
      break;
    case 60:
      return gh(i, r);
    case 73:
      if (s[1] === 73 && s[2] === 42 && s[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (s[1] === 68) return sC(i, r);
      break;
    case 84:
      if (s[1] === 65 && s[2] === 66 && s[3] === 76) return nC.to_workbook(i, r);
      break;
    case 80:
      return s[1] === 75 && s[2] < 9 && s[3] < 9 ? OD(i, r) : Jo(e, i, r, c);
    case 239:
      return s[3] === 60 ? gh(i, r) : Jo(e, i, r, c);
    case 255:
      if (s[1] === 254) return RD(i, r);
      if (s[1] === 0 && s[2] === 2 && s[3] === 0) return ql.to_workbook(i, r);
      break;
    case 0:
      if (s[1] === 0 && (s[2] >= 2 && s[3] === 0 || s[2] === 0 && (s[3] === 8 || s[3] === 9))) return ql.to_workbook(i, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Cm.to_workbook(i, r);
    case 123:
      if (s[1] === 92 && s[2] === 114 && s[3] === 116) return UC.to_workbook(i, r);
      break;
    case 10:
    case 13:
    case 32:
      return DD(i, r);
    case 137:
      if (s[1] === 80 && s[2] === 78 && s[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return rC.indexOf(s[0]) > -1 && s[2] <= 12 && s[3] <= 31 ? Cm.to_workbook(i, r) : Jo(e, i, r, c);
}
function ND(e, a, r, i, s, c, u, o) {
  var x = hr(r), d = o.defval, v = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw"), m = true, g = s === 1 ? [] : {};
  if (s !== 1) if (Object.defineProperty) try {
    Object.defineProperty(g, "__rowNum__", { value: r, enumerable: false });
  } catch {
    g.__rowNum__ = r;
  }
  else g.__rowNum__ = r;
  if (!u || e[r]) for (var E = a.s.c; E <= a.e.c; ++E) {
    var T = u ? e[r][E] : e[i[E] + x];
    if (T === void 0 || T.t === void 0) {
      if (d === void 0) continue;
      c[E] != null && (g[c[E]] = d);
      continue;
    }
    var y = T.v;
    switch (T.t) {
      case "z":
        if (y == null) break;
        continue;
      case "e":
        y = y == 0 ? null : void 0;
        break;
      case "s":
      case "d":
      case "b":
      case "n":
        break;
      default:
        throw new Error("unrecognized type " + T.t);
    }
    if (c[E] != null) {
      if (y == null) if (T.t == "e" && y === null) g[c[E]] = null;
      else if (d !== void 0) g[c[E]] = d;
      else if (v && y === null) g[c[E]] = null;
      else continue;
      else g[c[E]] = v && (T.t !== "n" || T.t === "n" && o.rawNumbers !== false) ? y : ln(T, y, o);
      y != null && (m = false);
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
  var m = hr(x.s.r), g = [], E = [], T = 0, y = 0, _ = Array.isArray(e), D = x.s.r, b = 0, w = {};
  _ && !e[D] && (e[D] = []);
  var M = d.skipHidden && e["!cols"] || [], V = d.skipHidden && e["!rows"] || [];
  for (b = x.s.c; b <= x.e.c; ++b) if (!(M[b] || {}).hidden) switch (g[b] = Zt(b), r = _ ? e[D][b] : e[g[b] + m], i) {
    case 1:
      c[b] = b - x.s.c;
      break;
    case 2:
      c[b] = g[b];
      break;
    case 3:
      c[b] = d.header[b - x.s.c];
      break;
    default:
      if (r == null && (r = { w: "__EMPTY", t: "s" }), o = u = ln(r, null, d), y = w[u] || 0, !y) w[u] = 1;
      else {
        do
          o = u + "_" + y++;
        while (w[o]);
        w[u] = y, w[o] = 1;
      }
      c[b] = o;
  }
  for (D = x.s.r + s; D <= x.e.r; ++D) if (!(V[D] || {}).hidden) {
    var j = ND(e, x, D, g, i, c, _, d);
    (j.isempty === false || (i === 1 ? d.blankrows !== false : d.blankrows)) && (E[T++] = j.row);
  }
  return E.length = T, E;
}
var Vm = /"/g;
function MD(e, a, r, i, s, c, u, o) {
  for (var x = true, d = [], v = "", m = hr(r), g = a.s.c; g <= a.e.c; ++g) if (i[g]) {
    var E = o.dense ? (e[r] || [])[g] : e[i[g] + m];
    if (E == null) v = "";
    else if (E.v != null) {
      x = false, v = "" + (o.rawNumbers && E.t == "n" ? E.v : ln(E, null, o));
      for (var T = 0, y = 0; T !== v.length; ++T) if ((y = v.charCodeAt(T)) === s || y === c || y === 34 || o.forceQuotes) {
        v = '"' + v.replace(Vm, '""') + '"';
        break;
      }
      v == "ID" && (v = '"ID"');
    } else E.f != null && !E.F ? (x = false, v = "=" + E.f, v.indexOf(",") >= 0 && (v = '"' + v.replace(Vm, '""') + '"')) : v = "";
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
  for (var g = i.skipHidden && e["!cols"] || [], E = i.skipHidden && e["!rows"] || [], T = s.s.c; T <= s.e.c; ++T) (g[T] || {}).hidden || (m[T] = Zt(T));
  for (var y = 0, _ = s.s.r; _ <= s.e.r; ++_) (E[_] || {}).hidden || (v = MD(e, s, _, m, u, x, c, i), v != null && (i.strip && (v = v.replace(d, "")), (v || i.blankrows !== false) && r.push((y++ ? o : "") + v)));
  return delete i.dense, r.join("");
}
function LD(e, a) {
  a || (a = {}), a.FS = "	", a.RS = `
`;
  var r = qy(e, a);
  return r;
}
function BD(e) {
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
  var g = i.header || [], E = 0;
  a.forEach(function(y, _) {
    La(y).forEach(function(D) {
      (E = g.indexOf(D)) == -1 && (g[E = g.length] = D);
      var b = y[D], w = "z", M = "", V = $e({ c: o + E, r: u + _ + s });
      d = cc(c, V), b && typeof b == "object" && !(b instanceof Date) ? c[V] = b : (typeof b == "number" ? w = "n" : typeof b == "boolean" ? w = "b" : typeof b == "string" ? w = "s" : b instanceof Date ? (w = "d", i.cellDates || (w = "n", b = br(b)), M = i.dateNF || We[14]) : b === null && i.nullError && (w = "e", b = 0), d ? (d.t = w, d.v = b, delete d.w, delete d.R, M && (d.z = M)) : c[V] = d = { t: w, v: b }, M && (d.z = M));
    });
  }), v.e.c = Math.max(v.e.c, o + g.length - 1);
  var T = hr(u);
  if (s) for (E = 0; E < g.length; ++E) c[Zt(E + o) + T] = { t: "s", v: g[E] };
  return c["!ref"] = ut(v), c;
}
function UD(e, a) {
  return Ky(null, e, a);
}
function cc(e, a, r) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var i = kr(a);
      return e[i.r] || (e[i.r] = []), e[i.r][i.c] || (e[i.r][i.c] = { t: "z" });
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? cc(e, $e(a)) : cc(e, $e({ r: a, c: r || 0 }));
}
function ID(e, a) {
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
function HD(e, a, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var i = ID(e, a);
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
function jD(e, a) {
  return e.z = a, e;
}
function Wy(e, a, r) {
  return a ? (e.l = { Target: a }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function zD(e, a, r) {
  return Wy(e, "#" + a, r);
}
function PD(e, a, r) {
  e.c || (e.c = []), e.c.push({ t: a, a: r || "SheetJS" });
}
function GD(e, a, r, i) {
  for (var s = typeof a != "string" ? a : Ut(a), c = typeof a == "string" ? a : ut(a), u = s.s.r; u <= s.e.r; ++u) for (var o = s.s.c; o <= s.e.c; ++o) {
    var x = cc(e, u, o);
    x.t = "n", x.F = c, delete x.v, u == s.s.r && o == s.s.c && (x.f = r, i && (x.D = true));
  }
  return e;
}
var VD = { encode_col: Zt, encode_row: hr, encode_cell: $e, encode_range: ut, decode_col: ad, decode_row: rd, split_cell: tA, decode_cell: kr, decode_range: Rs, format_cell: ln, sheet_add_aoa: ey, sheet_add_json: Ky, sheet_add_dom: Vy, aoa_to_sheet: Fs, json_to_sheet: UD, table_to_sheet: Xy, table_to_book: sD, sheet_to_csv: qy, sheet_to_txt: LD, sheet_to_json: wh, sheet_to_html: iD, sheet_to_formulae: BD, sheet_to_row_object_array: wh, sheet_get_cell: cc, book_new: md, book_append_sheet: gd, book_set_sheet_visibility: HD, cell_set_number_format: jD, cell_set_hyperlink: Wy, cell_set_internal_link: zD, cell_add_comment: PD, sheet_set_array_formula: GD, consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 } };
const XD = /* @__PURE__ */ new Map([["\u5E79\u90E8\u59D3\u540D", "name"], ["\u7533\u8ACB\u8005\u59D3\u540D", "name"], ["\u9762\u8A66\u5B98\u59D3\u540D", "name"], ["\u9762\u8A66\u8005\u59D3\u540D", "name"], ["\u61C9\u8A66\u8005\u59D3\u540D", "name"], ["\u53EF\u9762\u8A66\u6642\u9593", "availability"], ["\u9762\u8A66\u6642\u9593", "availability"], ["\u6642\u9593", "availability"], ["\u7533\u8ACB\u8EAB\u4EFD", "position"], ["\u8077\u4F4D", "position"], ["\u9762\u8A66\u8005\u53EF\u9762\u8A66\u6642\u9593", "availability"], ["time", "availability"], ["specialization", "position"], ["positionapplied", "position"]]), $D = () => {
  const { groupRestrictions: e, updateGroupRestriction: a, addRestriction: r, removeRestriction: i, onIntervieweesLoaded: s, onInterviewersLoaded: c, interviewers: u, interviewees: o } = Os(), [x, d] = ee.useState(""), [v, m] = ee.useState(""), [g, E] = ee.useState({ interviewers: ["\u6240\u6709"], interviewees: ["\u6240\u6709"] }), T = (C) => C.map((A) => {
    const S = {};
    for (const N in A) {
      const B = XD.get(N.toLowerCase());
      B === "availability" && typeof A[N] == "string" ? S[B] = y(A[N]) : B && (S[B] = A[N]), S[N] = A[N];
    }
    return "id" in S || (S.id = `${S.name}${PS()}`), S;
  }), y = (C) => C ? C.split(",").map((S) => S.trim()).map((S) => {
    if (S.includes("/") && S.includes("T")) return S;
    const N = ["-", "~", "\uFF5E", "\uFF0D"];
    let B = "", U = "";
    for (const ne of N) if (S.includes(ne)) {
      [B, U] = S.split(ne).map((ge) => ge.trim());
      break;
    }
    if (B && U) {
      const ne = B.split(" "), ge = ne[0], fe = ne[1] || "00:00", J = (/* @__PURE__ */ new Date()).getFullYear(), [ae, we] = ge.split("/"), Q = new Date(J, parseInt(ae) - 1, parseInt(we)), [H, re] = fe.split(":");
      Q.setHours(parseInt(H), parseInt(re), 0, 0);
      const R = new Date(Q), [z, q] = U.split(":");
      R.setHours(parseInt(z), parseInt(q), 0, 0);
      const W = (ie) => ie.toLocaleString("sv-SE").replace(" ", "T").substring(0, 19);
      return `${W(Q)}/${W(R)}`;
    }
    return S;
  }).filter(Boolean) : [], _ = (C) => new Promise((A, S) => {
    const N = new FileReader();
    N.onload = (B) => {
      var _a2;
      try {
        const U = (_a2 = B.target) == null ? void 0 : _a2.result, ne = new Uint8Array(U), ge = Th(ne, { type: "array" }), fe = ge.SheetNames[0], J = ge.Sheets[fe], ae = VD.sheet_to_json(J);
        A(ae);
      } catch (U) {
        S(U);
      }
    }, N.onerror = (B) => S(B), N.readAsArrayBuffer(C);
  }), D = async (C, A, S, N) => {
    if (C) {
      A(C.name);
      try {
        if (C.name.endsWith(".csv")) Ll.parse(C, { header: true, complete: (B) => {
          S(T(B.data));
        }, error: (B) => {
          console.error("Error parsing file:", B), alert(`Error parsing ${N} file`);
        } });
        else {
          const B = await _(C);
          S(T(B));
        }
      } catch (B) {
        console.error("Error parsing file:", B), alert(`Error parsing ${N} file`);
      }
    }
  }, b = (C) => {
    var _a2;
    const A = (_a2 = C.target.files) == null ? void 0 : _a2[0];
    A && D(A, d, c, "interviewers");
  }, w = (C) => {
    var _a2;
    const A = (_a2 = C.target.files) == null ? void 0 : _a2[0];
    A && D(A, m, s, "interviewees");
  }, M = (C) => {
    const A = `/schedule/samples/sample_${C}.csv`, S = document.createElement("a");
    S.href = A, S.download = `sample_${C}.csv`, document.body.appendChild(S), S.click(), document.body.removeChild(S);
  }, V = async (C) => {
    const A = /* @__PURE__ */ new Map([["interviewers", "/schedule/samples/real/interview_schedule_interviewers.csv"], ["interviewees", "/schedule/samples/real/interview_schedule_interviewees.csv"]]);
    try {
      const N = await (await fetch(`${A.get(C)}`)).blob(), B = new File([N], `sample_${C}.csv`, { type: "text/csv" });
      switch (C) {
        case "interviewers":
          D(B, d, c, "interviewers");
          break;
        case "interviewees":
          D(B, m, s, "interviewees");
          break;
      }
    } catch (S) {
      console.error("Error loading sample:", S), alert(`Error loading sample ${C} file`);
    }
  };
  ee.useEffect(() => {
    if (u.length > 0) {
      const C = /* @__PURE__ */ new Set(["\u6240\u6709"]);
      u.forEach((A) => {
        A.position && C.add(A.position);
      }), E((A) => ({ ...A, interviewers: Array.from(C).sort((S, N) => S === "\u6240\u6709" ? -1 : N === "\u6240\u6709" ? 1 : S.localeCompare(N)) }));
    }
    if (o.length > 0) {
      const C = /* @__PURE__ */ new Set(["\u6240\u6709"]);
      o.forEach((A) => {
        A.position && C.add(A.position);
      }), E((A) => ({ ...A, interviewees: Array.from(C).sort((S, N) => S === "\u6240\u6709" ? -1 : N === "\u6240\u6709" ? 1 : S.localeCompare(N)) }));
    }
  }, [u, o]);
  const j = (C) => K.jsxs("div", { className: "restrictions-container", children: [K.jsxs("span", { className: "restriction-label", children: [C === "interviewers" ? "\u9762\u8A66\u5B98" : "\u61C9\u8A66\u8005", " \u6578\u91CF\u689D\u4EF6\u9650\u5236"] }), C === "interviewees" ? K.jsx("div", { className: "restriction-box", children: K.jsx("div", { className: "restriction-row", style: { justifyContent: "center", color: "gray", fontWeight: 500 }, children: "\u8077\u4F4D\u76F8\u7B49" }) }, "interviewees-same-position-constrain") : null, e[C].map((A, S) => K.jsx("div", { className: "restriction-box", children: K.jsxs("div", { className: "restriction-row", children: [K.jsx(hi.Select, { value: A.targetPosition || "\u6240\u6709", className: "restriction-column", onChange: (N) => a(C, S, { targetPosition: N.target.value }), children: g[C].map((N) => K.jsx("option", { value: N, children: N }, N)) }), K.jsx(hi.Control, { type: "number", className: "restriction-column", min: "1", value: A.minCount, onChange: (N) => a(C, S, { minCount: parseInt(N.target.value) || 1 }), placeholder: "\u6700\u5C0F\u6578\u91CF" }), K.jsx(K.Fragment, { children: "~" }), K.jsx(hi.Control, { type: "number", className: "restriction-column", min: "1", value: A.maxCount, onChange: (N) => a(C, S, { maxCount: parseInt(N.target.value) || 1 }), placeholder: "\u6700\u5927\u6578\u91CF" }), K.jsx(Un, { variant: "outline-danger", size: "sm", className: "remove-btn", onClick: () => i(C, S), children: "\u2715" })] }) }, S)), K.jsx("div", { className: "restriction-actions", children: K.jsx(Un, { variant: "outline-primary", size: "sm", onClick: () => r(C), children: "+ \u65B0\u589E\u689D\u4EF6" }) })] });
  return K.jsxs(Ja, { className: "mb-4 upload-card", children: [K.jsxs(Ja.Header, { as: "h5", className: "d-flex justify-content-between align-items-center", children: ["\u4E0A\u50B3\u8CC7\u6599\u6A94\u6848", K.jsx(v2, { placement: "left", overlay: K.jsxs(J0, { children: [K.jsx("div", { children: "\u60A8\u53EF\u4EE5\uFF1A" }), K.jsxs("ul", { className: "mb-0 ps-3", children: [K.jsx("li", { children: "\u4E0B\u8F09\u7BC4\u4F8B\u6A94\u6848\u683C\u5F0F" }), K.jsx("li", { children: "\u76F4\u63A5\u8F09\u5165\u7BC4\u4F8B\u8CC7\u6599\u8A66\u7528" })] })] }), children: K.jsx("span", { className: "ms-2 text-muted", children: "\u2139\uFE0F" }) })] }), K.jsx(Ja.Body, { children: K.jsxs(hi, { className: "w-100", children: [K.jsx(mi, { className: "file-upload-row", children: ["interviewers", "interviewees"].map((C) => K.jsx(en, { className: "file-upload-col", children: K.jsxs(hi.Group, { children: [K.jsxs("div", { className: "file-upload-header", children: [K.jsx(hi.Label, { children: C === "interviewers" ? "\u9762\u8A66\u5B98\u6A94\u6848" : "\u61C9\u8A66\u8005\u6A94\u6848" }), K.jsxs("div", { className: "file-actions", children: [K.jsx(Un, { variant: "outline-secondary", size: "sm", onClick: () => M(C), className: "sample-btn", children: "\u{1F4E5} \u7BC4\u4F8B" }), K.jsx(Un, { variant: "outline-info", size: "sm", onClick: () => V(C), className: "try-btn", children: "\u26A1\uFE0F \u8A66\u7528" })] })] }), K.jsx(hi.Control, { type: "file", accept: ".csv,.xlsx,.xls", onChange: C === "interviewers" ? b : w, className: "upload-input" }), j(C)] }) }, C)) }), K.jsxs("div", { className: "file-preview", children: [x && K.jsx("div", { className: "preview-item", children: K.jsxs("span", { className: "text-success", children: ["\u2713 Interviewers: ", x] }) }), v && K.jsx("div", { className: "preview-item", children: K.jsxs("span", { className: "text-success", children: ["\u2713 Interviewees: ", v] }) })] })] }) })] });
}, YD = () => {
  const { dataLoaded: e, scheduledInterviews: a, generateSchedule: r } = Os(), i = e.interviewers && e.interviewees;
  return K.jsxs(mg, { className: "py-2", children: [K.jsx(mi, { children: K.jsx(en, { className: "text-end", style: { display: "flex", justifyContent: "center" }, children: K.jsx($D, {}) }) }), i && K.jsx(mi, { children: K.jsx(en, { className: "text-end", children: K.jsx("button", { className: "continue-btn", onClick: r, children: a.length > 0 ? "\u91CD\u65B0\u914D\u5C0D \u{1F504}" : "\u958B\u59CB\u914D\u5C0D \u25B6" }) }) }), K.jsx(mi, { children: K.jsx(en, { children: K.jsx(DS, {}) }) }), K.jsx(mi, { children: K.jsx(en, { children: K.jsx(US, {}) }) })] });
};
function qD() {
  return K.jsx(wS, { children: K.jsx(YD, {}) });
}
uT.createRoot(document.getElementById("root")).render(K.jsx(ee.StrictMode, { children: K.jsx(qD, {}) }));
