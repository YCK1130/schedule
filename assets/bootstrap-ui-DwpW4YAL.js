import { r as Do, g as et, a as Mo } from "./react-vendor-Csw2ODfV.js";
var jt = { exports: {} }, qe = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var bn;
function Ao() {
  if (bn) return qe;
  bn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var c in o) c !== "key" && (s[c] = o[c]);
    } else s = o;
    return o = s.ref, { $$typeof: e, type: r, key: a, ref: o !== void 0 ? o : null, props: s };
  }
  return qe.Fragment = t, qe.jsx = n, qe.jsxs = n, qe;
}
var En;
function Fo() {
  return En || (En = 1, jt.exports = Ao()), jt.exports;
}
var m = Fo(), i = Do();
const X = et(i);
var Nt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Cn;
function Lo() {
  return Cn || (Cn = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var s = "", a = 0; a < arguments.length; a++) {
          var c = arguments[a];
          c && (s = o(s, r(c)));
        }
        return s;
      }
      function r(s) {
        if (typeof s == "string" || typeof s == "number") return s;
        if (typeof s != "object") return "";
        if (Array.isArray(s)) return n.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) return s.toString();
        var a = "";
        for (var c in s) t.call(s, c) && s[c] && (a = o(a, c));
        return a;
      }
      function o(s, a) {
        return a ? s ? s + " " + a : s + a : s;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(Nt)), Nt.exports;
}
var Bo = Lo();
const $ = et(Bo);
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wt.apply(null, arguments);
}
function er(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Rn(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Io(e) {
  var t = Po(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Po(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function tr(e, t, n) {
  var r = i.useRef(e !== void 0), o = i.useState(t), s = o[0], a = o[1], c = e !== void 0, u = r.current;
  return r.current = c, !c && u && s !== t && a(t), [c ? e : s, i.useCallback(function(l) {
    for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++) d[p - 1] = arguments[p];
    n && n.apply(void 0, [l].concat(d)), a(l);
  }, [n])];
}
function nr(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var o, s = n, a = s[Rn(r)], c = s[r], u = er(s, [Rn(r), r].map(Io)), l = t[r], f = tr(c, a, e[l]), d = f[0], p = f[1];
    return Wt({}, u, (o = {}, o[r] = d, o[l] = p, o));
  }, e);
}
function Ht(e, t) {
  return Ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ht(e, t);
}
function Wo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ht(e, t);
}
const Ho = ["xxl", "xl", "lg", "md", "sm", "xs"], Uo = "xs", tt = i.createContext({ prefixes: {}, breakpoints: Ho, minBreakpoint: Uo }), { Consumer: ec, Provider: tc } = tt;
function T(e, t) {
  const { prefixes: n } = i.useContext(tt);
  return e || n[t] || t;
}
function rr() {
  const { breakpoints: e } = i.useContext(tt);
  return e;
}
function or() {
  const { minBreakpoint: e } = i.useContext(tt);
  return e;
}
function yt() {
  const { dir: e } = i.useContext(tt);
  return e === "rtl";
}
function He(e) {
  return e && e.ownerDocument || document;
}
function _o(e) {
  var t = He(e);
  return t && t.defaultView || window;
}
function Vo(e, t) {
  return _o(e).getComputedStyle(e, t);
}
var qo = /([A-Z])/g;
function Ko(e) {
  return e.replace(qo, "-$1").toLowerCase();
}
var Go = /^ms-/;
function ut(e) {
  return Ko(e).replace(Go, "-ms-");
}
var Xo = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function zo(e) {
  return !!(e && Xo.test(e));
}
function je(e, t) {
  var n = "", r = "";
  if (typeof t == "string") return e.style.getPropertyValue(ut(t)) || Vo(e).getPropertyValue(ut(t));
  Object.keys(t).forEach(function(o) {
    var s = t[o];
    !s && s !== 0 ? e.style.removeProperty(ut(o)) : zo(o) ? r += o + "(" + s + ") " : n += ut(o) + ": " + s + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var St = { exports: {} }, kt, On;
function Yo() {
  if (On) return kt;
  On = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kt = e, kt;
}
var Dt, $n;
function Jo() {
  if ($n) return Dt;
  $n = 1;
  var e = Yo();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Dt = function() {
    function r(a, c, u, l, f, d) {
      if (d !== e) {
        var p = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = { array: r, bigint: r, bool: r, func: r, number: r, object: r, string: r, symbol: r, any: r, arrayOf: o, element: r, elementType: r, instanceOf: o, node: r, objectOf: o, oneOf: o, oneOfType: o, shape: o, exact: o, checkPropTypes: n, resetWarningCache: t };
    return s.PropTypes = s, s;
  }, Dt;
}
var Tn;
function Zo() {
  return Tn || (Tn = 1, St.exports = Jo()()), St.exports;
}
var Qo = Zo();
const ne = et(Qo);
var es = Mo();
const Te = et(es), jn = { disabled: false }, sr = X.createContext(null);
var ts = function(t) {
  return t.scrollTop;
}, Ge = "unmounted", Oe = "exited", xe = "entering", $e = "entered", Ut = "exiting", pe = function(e) {
  Wo(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var a = o, c = a && !a.isMounting ? r.enter : r.appear, u;
    return s.appearStatus = null, r.in ? c ? (u = Oe, s.appearStatus = xe) : u = $e : r.unmountOnExit || r.mountOnEnter ? u = Ge : u = Oe, s.state = { status: u }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === Ge ? { status: Oe } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== xe && a !== $e && (s = xe) : (a === xe || a === $e) && (s = Ut);
    }
    this.updateStatus(false, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, s, a, c;
    return s = a = c = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, c = o.appear !== void 0 ? o.appear : a), { exit: s, enter: a, appear: c };
  }, n.updateStatus = function(o, s) {
    if (o === void 0 && (o = false), s !== null) if (this.cancelNextCallback(), s === xe) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var a = this.props.nodeRef ? this.props.nodeRef.current : Te.findDOMNode(this);
        a && ts(a);
      }
      this.performEnter(o);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === Oe && this.setState({ status: Ge });
  }, n.performEnter = function(o) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : o, u = this.props.nodeRef ? [c] : [Te.findDOMNode(this), c], l = u[0], f = u[1], d = this.getTimeouts(), p = c ? d.appear : d.enter;
    if (!o && !a || jn.disabled) {
      this.safeSetState({ status: $e }, function() {
        s.props.onEntered(l);
      });
      return;
    }
    this.props.onEnter(l, f), this.safeSetState({ status: xe }, function() {
      s.props.onEntering(l, f), s.onTransitionEnd(p, function() {
        s.safeSetState({ status: $e }, function() {
          s.props.onEntered(l, f);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Te.findDOMNode(this);
    if (!s || jn.disabled) {
      this.safeSetState({ status: Oe }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({ status: Ut }, function() {
      o.props.onExiting(c), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({ status: Oe }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, n.setNextCallback = function(o) {
    var s = this, a = true;
    return this.nextCallback = function(c) {
      a && (a = false, s.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      a = false;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Te.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], l = u[0], f = u[1];
      this.props.addEndListener(l, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Ge) return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = er(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return X.createElement(sr.Provider, { value: null }, typeof a == "function" ? a(o, c) : X.cloneElement(X.Children.only(a), c));
  }, t;
}(X.Component);
pe.contextType = sr;
pe.propTypes = {};
function Ae() {
}
pe.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: Ae, onEntering: Ae, onEntered: Ae, onExit: Ae, onExiting: Ae, onExited: Ae };
pe.UNMOUNTED = Ge;
pe.EXITED = Oe;
pe.ENTERING = xe;
pe.ENTERED = $e;
pe.EXITING = Ut;
function ar(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function ns() {
  const e = i.version.split(".");
  return { major: +e[0], minor: +e[1], patch: +e[2] };
}
function nt(e) {
  if (!e || typeof e == "function") return null;
  const { major: t } = ns();
  return t >= 19 ? e.props.ref : e.ref;
}
const Ue = !!(typeof window < "u" && window.document && window.document.createElement);
var _t = false, Vt = false;
try {
  var Mt = { get passive() {
    return _t = true;
  }, get once() {
    return Vt = _t = true;
  } };
  Ue && (window.addEventListener("test", Mt, Mt), window.removeEventListener("test", Mt, true));
} catch {
}
function en(e, t, n, r) {
  if (r && typeof r != "boolean" && !Vt) {
    var o = r.once, s = r.capture, a = n;
    !Vt && o && (a = n.__once || function c(u) {
      this.removeEventListener(t, c, s), n.call(this, u);
    }, n.__once = a), e.addEventListener(t, a, _t ? r : s);
  }
  e.addEventListener(t, n, r);
}
function qt(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o);
}
function le(e, t, n, r) {
  return en(e, t, n, r), function() {
    qt(e, t, n, r);
  };
}
function rs(e, t, n, r) {
  if (r === void 0 && (r = true), e) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function os(e) {
  var t = je(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function ss(e, t, n) {
  n === void 0 && (n = 5);
  var r = false, o = setTimeout(function() {
    r || rs(e, "transitionend", true);
  }, t + n), s = le(e, "transitionend", function() {
    r = true;
  }, { once: true });
  return function() {
    clearTimeout(o), s();
  };
}
function ir(e, t, n, r) {
  n == null && (n = os(e) || 0);
  var o = ss(e, n, r), s = le(e, "transitionend", t);
  return function() {
    o(), s();
  };
}
function Nn(e, t) {
  const n = je(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function as(e, t) {
  const n = Nn(e, "transitionDuration"), r = Nn(e, "transitionDelay"), o = ir(e, (s) => {
    s.target === e && (o(), t(s));
  }, n + r);
}
function is(e) {
  e.offsetHeight;
}
const Sn = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function cs(e, t) {
  const n = Sn(e), r = Sn(t);
  return (o) => {
    n && n(o), r && r(o);
  };
}
function _e(e, t) {
  return i.useMemo(() => cs(e, t), [e, t]);
}
function vt(e) {
  return e && "setState" in e ? Te.findDOMNode(e) : e ?? null;
}
const us = X.forwardRef(({ onEnter: e, onEntering: t, onEntered: n, onExit: r, onExiting: o, onExited: s, addEndListener: a, children: c, childRef: u, ...l }, f) => {
  const d = i.useRef(null), p = _e(d, u), v = (R) => {
    p(vt(R));
  }, g = (R) => (O) => {
    R && d.current && R(d.current, O);
  }, y = i.useCallback(g(e), [e]), h = i.useCallback(g(t), [t]), b = i.useCallback(g(n), [n]), w = i.useCallback(g(r), [r]), E = i.useCallback(g(o), [o]), x = i.useCallback(g(s), [s]), C = i.useCallback(g(a), [a]);
  return m.jsx(pe, { ref: f, ...l, onEnter: y, onEntered: b, onEntering: h, onExit: w, onExited: x, onExiting: E, addEndListener: C, nodeRef: d, children: typeof c == "function" ? (R, O) => c(R, { ...O, ref: v }) : X.cloneElement(c, { ref: v }) });
});
function ls(e) {
  const t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function Le(e) {
  const t = ls(e);
  return i.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
const wt = (e) => i.forwardRef((t, n) => m.jsx("div", { ...t, ref: n, className: $(t.className, e) })), cr = wt("h4");
cr.displayName = "DivStyledAsH4";
const ur = i.forwardRef(({ className: e, bsPrefix: t, as: n = cr, ...r }, o) => (t = T(t, "alert-heading"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
ur.displayName = "AlertHeading";
function Kt() {
  return i.useState(null);
}
function fs(e) {
  const t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }, [e]), t;
}
function U(e) {
  const t = fs(e);
  return i.useCallback(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function ds(e, t, n, r = false) {
  const o = U(n);
  i.useEffect(() => {
    const s = typeof e == "function" ? e() : e;
    return s.addEventListener(t, o, r), () => s.removeEventListener(t, o, r);
  }, [e]);
}
function lr() {
  const e = i.useRef(true), t = i.useRef(() => e.current);
  return i.useEffect(() => (e.current = true, () => {
    e.current = false;
  }), []), t.current;
}
function fr(e) {
  const t = i.useRef(null);
  return i.useEffect(() => {
    t.current = e;
  }), t.current;
}
const ps = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative", vs = typeof document < "u", kn = vs || ps ? i.useLayoutEffect : i.useEffect, ms = ["as", "disabled"];
function hs(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function gs(e) {
  return !e || e.trim() === "#";
}
function tn({ tagName: e, disabled: t, href: n, target: r, rel: o, role: s, onClick: a, tabIndex: c = 0, type: u }) {
  e || (n != null || r != null || o != null ? e = "a" : e = "button");
  const l = { tagName: e };
  if (e === "button") return [{ type: u || "button", disabled: t }, l];
  const f = (p) => {
    if ((t || e === "a" && gs(n)) && p.preventDefault(), t) {
      p.stopPropagation();
      return;
    }
    a == null ? void 0 : a(p);
  }, d = (p) => {
    p.key === " " && (p.preventDefault(), f(p));
  };
  return e === "a" && (n || (n = "#"), t && (n = void 0)), [{ role: s ?? "button", disabled: void 0, tabIndex: t ? void 0 : c, href: n, target: e === "a" ? r : void 0, "aria-disabled": t || void 0, rel: e === "a" ? o : void 0, onClick: f, onKeyDown: d }, l];
}
const dr = i.forwardRef((e, t) => {
  let { as: n, disabled: r } = e, o = hs(e, ms);
  const [s, { tagName: a }] = tn(Object.assign({ tagName: n, disabled: r }, o));
  return m.jsx(a, Object.assign({}, o, s, { ref: t }));
});
dr.displayName = "Button";
const ys = ["onKeyDown"];
function ws(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function xs(e) {
  return !e || e.trim() === "#";
}
const nn = i.forwardRef((e, t) => {
  let { onKeyDown: n } = e, r = ws(e, ys);
  const [o] = tn(Object.assign({ tagName: "a" }, r)), s = U((a) => {
    o.onKeyDown(a), n == null ? void 0 : n(a);
  });
  return xs(r.href) || r.role === "button" ? m.jsx("a", Object.assign({ ref: t }, r, o, { onKeyDown: s })) : m.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
nn.displayName = "Anchor";
const pr = i.forwardRef(({ className: e, bsPrefix: t, as: n = nn, ...r }, o) => (t = T(t, "alert-link"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
pr.displayName = "AlertLink";
const bs = { [xe]: "show", [$e]: "show" }, Se = i.forwardRef(({ className: e, children: t, transitionClasses: n = {}, onEnter: r, ...o }, s) => {
  const a = { in: false, timeout: 300, mountOnEnter: false, unmountOnExit: false, appear: false, ...o }, c = i.useCallback((u, l) => {
    is(u), r == null ? void 0 : r(u, l);
  }, [r]);
  return m.jsx(us, { ref: s, addEndListener: as, ...a, onEnter: c, childRef: nt(t), children: (u, l) => i.cloneElement(t, { ...l, className: $("fade", e, t.props.className, bs[u], n[u]) }) });
});
Se.displayName = "Fade";
const Es = { "aria-label": ne.string, onClick: ne.func, variant: ne.oneOf(["white"]) }, xt = i.forwardRef(({ className: e, variant: t, "aria-label": n = "Close", ...r }, o) => m.jsx("button", { ref: o, type: "button", className: $("btn-close", t && `btn-close-${t}`, e), "aria-label": n, ...r }));
xt.displayName = "CloseButton";
xt.propTypes = Es;
const vr = i.forwardRef((e, t) => {
  const { bsPrefix: n, show: r = true, closeLabel: o = "Close alert", closeVariant: s, className: a, children: c, variant: u = "primary", onClose: l, dismissible: f, transition: d = Se, ...p } = nr(e, { show: "onClose" }), v = T(n, "alert"), g = Le((b) => {
    l && l(false, b);
  }), y = d === true ? Se : d, h = m.jsxs("div", { role: "alert", ...y ? void 0 : p, ref: t, className: $(a, v, u && `${v}-${u}`, f && `${v}-dismissible`), children: [f && m.jsx(xt, { onClick: g, "aria-label": o, variant: s }), c] });
  return y ? m.jsx(y, { unmountOnExit: true, ...p, ref: void 0, in: r, children: h }) : r ? h : null;
});
vr.displayName = "Alert";
const nc = Object.assign(vr, { Link: pr, Heading: ur }), mr = i.forwardRef(({ as: e, bsPrefix: t, variant: n = "primary", size: r, active: o = false, disabled: s = false, className: a, ...c }, u) => {
  const l = T(t, "btn"), [f, { tagName: d }] = tn({ tagName: e, disabled: s, ...c }), p = d;
  return m.jsx(p, { ...f, ...c, ref: u, disabled: s, className: $(a, l, o && "active", n && `${l}-${n}`, r && `${l}-${r}`, c.href && s && "disabled") });
});
mr.displayName = "Button";
const Cs = i.forwardRef(({ bsPrefix: e, size: t, vertical: n = false, className: r, role: o = "group", as: s = "div", ...a }, c) => {
  const u = T(e, "btn-group");
  let l = u;
  return n && (l = `${u}-vertical`), m.jsx(s, { ...a, ref: c, role: o, className: $(r, l, t && `${u}-${t}`) });
});
Cs.displayName = "ButtonGroup";
const rn = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "card-body"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
rn.displayName = "CardBody";
const hr = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "card-footer"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
hr.displayName = "CardFooter";
const gr = i.createContext(null);
gr.displayName = "CardHeaderContext";
const yr = i.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
  const s = T(e, "card-header"), a = i.useMemo(() => ({ cardHeaderBsPrefix: s }), [s]);
  return m.jsx(gr.Provider, { value: a, children: m.jsx(n, { ref: o, ...r, className: $(t, s) }) });
});
yr.displayName = "CardHeader";
const wr = i.forwardRef(({ bsPrefix: e, className: t, variant: n, as: r = "img", ...o }, s) => {
  const a = T(e, "card-img");
  return m.jsx(r, { ref: s, className: $(n ? `${a}-${n}` : a, t), ...o });
});
wr.displayName = "CardImg";
const xr = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "card-img-overlay"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
xr.displayName = "CardImgOverlay";
const br = i.forwardRef(({ className: e, bsPrefix: t, as: n = "a", ...r }, o) => (t = T(t, "card-link"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
br.displayName = "CardLink";
const Rs = wt("h6"), Er = i.forwardRef(({ className: e, bsPrefix: t, as: n = Rs, ...r }, o) => (t = T(t, "card-subtitle"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
Er.displayName = "CardSubtitle";
const Cr = i.forwardRef(({ className: e, bsPrefix: t, as: n = "p", ...r }, o) => (t = T(t, "card-text"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
Cr.displayName = "CardText";
const Os = wt("h5"), Rr = i.forwardRef(({ className: e, bsPrefix: t, as: n = Os, ...r }, o) => (t = T(t, "card-title"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
Rr.displayName = "CardTitle";
const Or = i.forwardRef(({ bsPrefix: e, className: t, bg: n, text: r, border: o, body: s = false, children: a, as: c = "div", ...u }, l) => {
  const f = T(e, "card");
  return m.jsx(c, { ref: l, ...u, className: $(t, f, n && `bg-${n}`, r && `text-${r}`, o && `border-${o}`), children: s ? m.jsx(rn, { children: a }) : a });
});
Or.displayName = "Card";
const rc = Object.assign(Or, { Img: wr, Title: Rr, Subtitle: Er, Body: rn, Link: br, Text: Cr, Header: yr, Footer: hr, ImgOverlay: xr });
function $s() {
  const e = i.useRef(true), t = i.useRef(() => e.current);
  return i.useEffect(() => (e.current = true, () => {
    e.current = false;
  }), []), t.current;
}
function Ts(e) {
  const t = i.useRef(e);
  return t.current = e, t;
}
function $r(e) {
  const t = Ts(e);
  i.useEffect(() => () => t.current(), []);
}
const Gt = 2 ** 31 - 1;
function Tr(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Gt ? setTimeout(t, r) : setTimeout(() => Tr(e, t, n), Gt);
}
function js() {
  const e = $s(), t = i.useRef();
  return $r(() => clearTimeout(t.current)), i.useMemo(() => {
    const n = () => clearTimeout(t.current);
    function r(o, s = 0) {
      e() && (n(), s <= Gt ? t.current = setTimeout(o, s) : Tr(t, o, Date.now() + s));
    }
    return { set: r, clear: n, handleRef: t };
  }, []);
}
function Ns(e, t) {
  return i.Children.toArray(e).some((n) => i.isValidElement(n) && n.type === t);
}
function Ss({ as: e, bsPrefix: t, className: n, ...r }) {
  t = T(t, "col");
  const o = rr(), s = or(), a = [], c = [];
  return o.forEach((u) => {
    const l = r[u];
    delete r[u];
    let f, d, p;
    typeof l == "object" && l != null ? { span: f, offset: d, order: p } = l : f = l;
    const v = u !== s ? `-${u}` : "";
    f && a.push(f === true ? `${t}${v}` : `${t}${v}-${f}`), p != null && c.push(`order${v}-${p}`), d != null && c.push(`offset${v}-${d}`);
  }), [{ ...r, className: $(n, ...a, ...c) }, { as: e, bsPrefix: t, spans: a }];
}
const jr = i.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = "div", bsPrefix: s, spans: a }] = Ss(e);
  return m.jsx(o, { ...r, ref: t, className: $(n, !a.length && s) });
});
jr.displayName = "Col";
const ks = i.forwardRef(({ bsPrefix: e, fluid: t = false, as: n = "div", className: r, ...o }, s) => {
  const a = T(e, "container"), c = typeof t == "string" ? `-${t}` : "-fluid";
  return m.jsx(n, { ref: s, ...o, className: $(r, t ? `${a}${c}` : a) });
});
ks.displayName = "Container";
var Ds = Function.prototype.bind.call(Function.prototype.call, [].slice);
function be(e, t) {
  return Ds(e.querySelectorAll(t));
}
function Ms(e, t, n) {
  const r = i.useRef(e !== void 0), [o, s] = i.useState(t), a = e !== void 0, c = r.current;
  return r.current = a, !a && c && o !== t && s(t), [a ? e : o, i.useCallback((...u) => {
    const [l, ...f] = u;
    let d = n == null ? void 0 : n(l, ...f);
    return s(l), d;
  }, [n])];
}
function As() {
  const [, e] = i.useReducer((t) => t + 1, 0);
  return e;
}
const bt = i.createContext(null);
var Dn = Object.prototype.hasOwnProperty;
function Mn(e, t, n) {
  for (n of e.keys()) if (Xe(n, t)) return n;
}
function Xe(e, t) {
  var n, r, o;
  if (e === t) return true;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Xe(e[r], t[r]); ) ;
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return false;
      for (r of e) if (o = r, o && typeof o == "object" && (o = Mn(t, o), !o) || !t.has(o)) return false;
      return true;
    }
    if (n === Map) {
      if (e.size !== t.size) return false;
      for (r of e) if (o = r[0], o && typeof o == "object" && (o = Mn(t, o), !o) || !Xe(r[1], t.get(o))) return false;
      return true;
    }
    if (n === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e.getInt8(r) === t.getInt8(r); ) ;
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; ) ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e) if (Dn.call(e, n) && ++r && !Dn.call(t, n) || !(n in t) || !Xe(e[n], t[n])) return false;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function Fs(e) {
  const t = lr();
  return [e[0], i.useCallback((n) => {
    if (t()) return e[1](n);
  }, [t, e[1]])];
}
var z = "top", Q = "bottom", ee = "right", Y = "left", on = "auto", rt = [z, Q, ee, Y], Be = "start", Je = "end", Ls = "clippingParents", Nr = "viewport", Ke = "popper", Bs = "reference", An = rt.reduce(function(e, t) {
  return e.concat([t + "-" + Be, t + "-" + Je]);
}, []), Sr = [].concat(rt, [on]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Be, t + "-" + Je]);
}, []), Is = "beforeRead", Ps = "read", Ws = "afterRead", Hs = "beforeMain", Us = "main", _s = "afterMain", Vs = "beforeWrite", qs = "write", Ks = "afterWrite", Gs = [Is, Ps, Ws, Hs, Us, _s, Vs, qs, Ks];
function re(e) {
  return e.split("-")[0];
}
function J(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ke(e) {
  var t = J(e).Element;
  return e instanceof t || e instanceof Element;
}
function oe(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function sn(e) {
  if (typeof ShadowRoot > "u") return false;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Ne = Math.max, mt = Math.min, Ie = Math.round;
function Xt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function kr() {
  return !/^((?!chrome|android).)*safari/i.test(Xt());
}
function Pe(e, t, n) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  var r = e.getBoundingClientRect(), o = 1, s = 1;
  t && oe(e) && (o = e.offsetWidth > 0 && Ie(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Ie(r.height) / e.offsetHeight || 1);
  var a = ke(e) ? J(e) : window, c = a.visualViewport, u = !kr() && n, l = (r.left + (u && c ? c.offsetLeft : 0)) / o, f = (r.top + (u && c ? c.offsetTop : 0)) / s, d = r.width / o, p = r.height / s;
  return { width: d, height: p, top: f, right: l + d, bottom: f + p, left: l, x: l, y: f };
}
function an(e) {
  var t = Pe(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Dr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return true;
  if (n && sn(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function Ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function fe(e) {
  return J(e).getComputedStyle(e);
}
function Xs(e) {
  return ["table", "td", "th"].indexOf(Ee(e)) >= 0;
}
function Ce(e) {
  return ((ke(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Et(e) {
  return Ee(e) === "html" ? e : e.assignedSlot || e.parentNode || (sn(e) ? e.host : null) || Ce(e);
}
function Fn(e) {
  return !oe(e) || fe(e).position === "fixed" ? null : e.offsetParent;
}
function zs(e) {
  var t = /firefox/i.test(Xt()), n = /Trident/i.test(Xt());
  if (n && oe(e)) {
    var r = fe(e);
    if (r.position === "fixed") return null;
  }
  var o = Et(e);
  for (sn(o) && (o = o.host); oe(o) && ["html", "body"].indexOf(Ee(o)) < 0; ) {
    var s = fe(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function ot(e) {
  for (var t = J(e), n = Fn(e); n && Xs(n) && fe(n).position === "static"; ) n = Fn(n);
  return n && (Ee(n) === "html" || Ee(n) === "body" && fe(n).position === "static") ? t : n || zs(e) || t;
}
function cn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ze(e, t, n) {
  return Ne(e, mt(t, n));
}
function Ys(e, t, n) {
  var r = ze(e, t, n);
  return r > n ? n : r;
}
function Mr() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ar(e) {
  return Object.assign({}, Mr(), e);
}
function Fr(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Js = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, { placement: n.placement })) : t, Ar(typeof t != "number" ? t : Fr(t, rt));
};
function Zs(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, c = re(n.placement), u = cn(c), l = [Y, ee].indexOf(c) >= 0, f = l ? "height" : "width";
  if (!(!s || !a)) {
    var d = Js(o.padding, n), p = an(s), v = u === "y" ? z : Y, g = u === "y" ? Q : ee, y = n.rects.reference[f] + n.rects.reference[u] - a[u] - n.rects.popper[f], h = a[u] - n.rects.reference[u], b = ot(s), w = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, E = y / 2 - h / 2, x = d[v], C = w - p[f] - d[g], R = w / 2 - p[f] / 2 + E, O = ze(x, R, C), N = u;
    n.modifiersData[r] = (t = {}, t[N] = O, t.centerOffset = O - R, t);
  }
}
function Qs(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Dr(t.elements.popper, o) && (t.elements.arrow = o));
}
const ea = { name: "arrow", enabled: true, phase: "main", fn: Zs, effect: Qs, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function We(e) {
  return e.split("-")[1];
}
var ta = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function na(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Ie(n * o) / o || 0, y: Ie(r * o) / o || 0 };
}
function Ln(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, c = e.position, u = e.gpuAcceleration, l = e.adaptive, f = e.roundOffsets, d = e.isFixed, p = a.x, v = p === void 0 ? 0 : p, g = a.y, y = g === void 0 ? 0 : g, h = typeof f == "function" ? f({ x: v, y }) : { x: v, y };
  v = h.x, y = h.y;
  var b = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), E = Y, x = z, C = window;
  if (l) {
    var R = ot(n), O = "clientHeight", N = "clientWidth";
    if (R === J(n) && (R = Ce(n), fe(R).position !== "static" && c === "absolute" && (O = "scrollHeight", N = "scrollWidth")), R = R, o === z || (o === Y || o === ee) && s === Je) {
      x = Q;
      var M = d && R === C && C.visualViewport ? C.visualViewport.height : R[O];
      y -= M - r.height, y *= u ? 1 : -1;
    }
    if (o === Y || (o === z || o === Q) && s === Je) {
      E = ee;
      var D = d && R === C && C.visualViewport ? C.visualViewport.width : R[N];
      v -= D - r.width, v *= u ? 1 : -1;
    }
  }
  var j = Object.assign({ position: c }, l && ta), S = f === true ? na({ x: v, y }, J(n)) : { x: v, y };
  if (v = S.x, y = S.y, u) {
    var k;
    return Object.assign({}, j, (k = {}, k[x] = w ? "0" : "", k[E] = b ? "0" : "", k.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + y + "px)" : "translate3d(" + v + "px, " + y + "px, 0)", k));
  }
  return Object.assign({}, j, (t = {}, t[x] = w ? y + "px" : "", t[E] = b ? v + "px" : "", t.transform = "", t));
}
function ra(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, s = n.adaptive, a = s === void 0 ? true : s, c = n.roundOffsets, u = c === void 0 ? true : c, l = { placement: re(t.placement), variation: We(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ln(Object.assign({}, l, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ln(Object.assign({}, l, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
const oa = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: ra, data: {} };
var lt = { passive: true };
function sa(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? true : o, a = r.resize, c = a === void 0 ? true : a, u = J(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && l.forEach(function(f) {
    f.addEventListener("scroll", n.update, lt);
  }), c && u.addEventListener("resize", n.update, lt), function() {
    s && l.forEach(function(f) {
      f.removeEventListener("scroll", n.update, lt);
    }), c && u.removeEventListener("resize", n.update, lt);
  };
}
const aa = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: sa, data: {} };
var ia = { left: "right", right: "left", bottom: "top", top: "bottom" };
function dt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ia[t];
  });
}
var ca = { start: "end", end: "start" };
function Bn(e) {
  return e.replace(/start|end/g, function(t) {
    return ca[t];
  });
}
function un(e) {
  var t = J(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function ln(e) {
  return Pe(Ce(e)).left + un(e).scrollLeft;
}
function ua(e, t) {
  var n = J(e), r = Ce(e), o = n.visualViewport, s = r.clientWidth, a = r.clientHeight, c = 0, u = 0;
  if (o) {
    s = o.width, a = o.height;
    var l = kr();
    (l || !l && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return { width: s, height: a, x: c + ln(e), y: u };
}
function la(e) {
  var t, n = Ce(e), r = un(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ne(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ne(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -r.scrollLeft + ln(e), u = -r.scrollTop;
  return fe(o || n).direction === "rtl" && (c += Ne(n.clientWidth, o ? o.clientWidth : 0) - s), { width: s, height: a, x: c, y: u };
}
function fn(e) {
  var t = fe(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Lr(e) {
  return ["html", "body", "#document"].indexOf(Ee(e)) >= 0 ? e.ownerDocument.body : oe(e) && fn(e) ? e : Lr(Et(e));
}
function Ye(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Lr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = J(r), a = o ? [s].concat(s.visualViewport || [], fn(r) ? r : []) : r, c = t.concat(a);
  return o ? c : c.concat(Ye(Et(a)));
}
function zt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function fa(e, t) {
  var n = Pe(e, false, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function In(e, t, n) {
  return t === Nr ? zt(ua(e, n)) : ke(t) ? fa(t, n) : zt(la(Ce(e)));
}
function da(e) {
  var t = Ye(Et(e)), n = ["absolute", "fixed"].indexOf(fe(e).position) >= 0, r = n && oe(e) ? ot(e) : e;
  return ke(r) ? t.filter(function(o) {
    return ke(o) && Dr(o, r) && Ee(o) !== "body";
  }) : [];
}
function pa(e, t, n, r) {
  var o = t === "clippingParents" ? da(e) : [].concat(t), s = [].concat(o, [n]), a = s[0], c = s.reduce(function(u, l) {
    var f = In(e, l, r);
    return u.top = Ne(f.top, u.top), u.right = mt(f.right, u.right), u.bottom = mt(f.bottom, u.bottom), u.left = Ne(f.left, u.left), u;
  }, In(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Br(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? re(r) : null, s = r ? We(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case z:
      u = { x: a, y: t.y - n.height };
      break;
    case Q:
      u = { x: a, y: t.y + t.height };
      break;
    case ee:
      u = { x: t.x + t.width, y: c };
      break;
    case Y:
      u = { x: t.x - n.width, y: c };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var l = o ? cn(o) : null;
  if (l != null) {
    var f = l === "y" ? "height" : "width";
    switch (s) {
      case Be:
        u[l] = u[l] - (t[f] / 2 - n[f] / 2);
        break;
      case Je:
        u[l] = u[l] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function Ze(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, c = n.boundary, u = c === void 0 ? Ls : c, l = n.rootBoundary, f = l === void 0 ? Nr : l, d = n.elementContext, p = d === void 0 ? Ke : d, v = n.altBoundary, g = v === void 0 ? false : v, y = n.padding, h = y === void 0 ? 0 : y, b = Ar(typeof h != "number" ? h : Fr(h, rt)), w = p === Ke ? Bs : Ke, E = e.rects.popper, x = e.elements[g ? w : p], C = pa(ke(x) ? x : x.contextElement || Ce(e.elements.popper), u, f, a), R = Pe(e.elements.reference), O = Br({ reference: R, element: E, placement: o }), N = zt(Object.assign({}, E, O)), M = p === Ke ? N : R, D = { top: C.top - M.top + b.top, bottom: M.bottom - C.bottom + b.bottom, left: C.left - M.left + b.left, right: M.right - C.right + b.right }, j = e.modifiersData.offset;
  if (p === Ke && j) {
    var S = j[o];
    Object.keys(D).forEach(function(k) {
      var F = [ee, Q].indexOf(k) >= 0 ? 1 : -1, L = [z, Q].indexOf(k) >= 0 ? "y" : "x";
      D[k] += S[L] * F;
    });
  }
  return D;
}
function va(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, a = n.padding, c = n.flipVariations, u = n.allowedAutoPlacements, l = u === void 0 ? Sr : u, f = We(r), d = f ? c ? An : An.filter(function(g) {
    return We(g) === f;
  }) : rt, p = d.filter(function(g) {
    return l.indexOf(g) >= 0;
  });
  p.length === 0 && (p = d);
  var v = p.reduce(function(g, y) {
    return g[y] = Ze(e, { placement: y, boundary: o, rootBoundary: s, padding: a })[re(y)], g;
  }, {});
  return Object.keys(v).sort(function(g, y) {
    return v[g] - v[y];
  });
}
function ma(e) {
  if (re(e) === on) return [];
  var t = dt(e);
  return [Bn(e), t, Bn(t)];
}
function ha(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? true : o, a = n.altAxis, c = a === void 0 ? true : a, u = n.fallbackPlacements, l = n.padding, f = n.boundary, d = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, g = v === void 0 ? true : v, y = n.allowedAutoPlacements, h = t.options.placement, b = re(h), w = b === h, E = u || (w || !g ? [dt(h)] : ma(h)), x = [h].concat(E).reduce(function(q, G) {
      return q.concat(re(G) === on ? va(t, { placement: G, boundary: f, rootBoundary: d, padding: l, flipVariations: g, allowedAutoPlacements: y }) : G);
    }, []), C = t.rects.reference, R = t.rects.popper, O = /* @__PURE__ */ new Map(), N = true, M = x[0], D = 0; D < x.length; D++) {
      var j = x[D], S = re(j), k = We(j) === Be, F = [z, Q].indexOf(S) >= 0, L = F ? "width" : "height", I = Ze(t, { placement: j, boundary: f, rootBoundary: d, altBoundary: p, padding: l }), H = F ? k ? ee : Y : k ? Q : z;
      C[L] > R[L] && (H = dt(H));
      var P = dt(H), _ = [];
      if (s && _.push(I[S] <= 0), c && _.push(I[H] <= 0, I[P] <= 0), _.every(function(q) {
        return q;
      })) {
        M = j, N = false;
        break;
      }
      O.set(j, _);
    }
    if (N) for (var W = g ? 3 : 1, K = function(G) {
      var se = x.find(function(ae) {
        var te = O.get(ae);
        if (te) return te.slice(0, G).every(function(ie) {
          return ie;
        });
      });
      if (se) return M = se, "break";
    }, Z = W; Z > 0; Z--) {
      var V = K(Z);
      if (V === "break") break;
    }
    t.placement !== M && (t.modifiersData[r]._skip = true, t.placement = M, t.reset = true);
  }
}
const ga = { name: "flip", enabled: true, phase: "main", fn: ha, requiresIfExists: ["offset"], data: { _skip: false } };
function Pn(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Wn(e) {
  return [z, ee, Q, Y].some(function(t) {
    return e[t] >= 0;
  });
}
function ya(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = Ze(t, { elementContext: "reference" }), c = Ze(t, { altBoundary: true }), u = Pn(a, r), l = Pn(c, o, s), f = Wn(u), d = Wn(l);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: l, isReferenceHidden: f, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": d });
}
const wa = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: ya };
function xa(e, t, n) {
  var r = re(e), o = [Y, z].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], c = s[1];
  return a = a || 0, c = (c || 0) * o, [Y, ee].indexOf(r) >= 0 ? { x: c, y: a } : { x: a, y: c };
}
function ba(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, a = Sr.reduce(function(f, d) {
    return f[d] = xa(d, t.rects, s), f;
  }, {}), c = a[t.placement], u = c.x, l = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = a;
}
const Ea = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: ba };
function Ca(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Br({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
const Ra = { name: "popperOffsets", enabled: true, phase: "read", fn: Ca, data: {} };
function Oa(e) {
  return e === "x" ? "y" : "x";
}
function $a(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? true : o, a = n.altAxis, c = a === void 0 ? false : a, u = n.boundary, l = n.rootBoundary, f = n.altBoundary, d = n.padding, p = n.tether, v = p === void 0 ? true : p, g = n.tetherOffset, y = g === void 0 ? 0 : g, h = Ze(t, { boundary: u, rootBoundary: l, padding: d, altBoundary: f }), b = re(t.placement), w = We(t.placement), E = !w, x = cn(b), C = Oa(x), R = t.modifiersData.popperOffsets, O = t.rects.reference, N = t.rects.popper, M = typeof y == "function" ? y(Object.assign({}, t.rects, { placement: t.placement })) : y, D = typeof M == "number" ? { mainAxis: M, altAxis: M } : Object.assign({ mainAxis: 0, altAxis: 0 }, M), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, S = { x: 0, y: 0 };
  if (R) {
    if (s) {
      var k, F = x === "y" ? z : Y, L = x === "y" ? Q : ee, I = x === "y" ? "height" : "width", H = R[x], P = H + h[F], _ = H - h[L], W = v ? -N[I] / 2 : 0, K = w === Be ? O[I] : N[I], Z = w === Be ? -N[I] : -O[I], V = t.elements.arrow, q = v && V ? an(V) : { width: 0, height: 0 }, G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Mr(), se = G[F], ae = G[L], te = ze(0, O[I], q[I]), ie = E ? O[I] / 2 - W - te - se - D.mainAxis : K - te - se - D.mainAxis, ve = E ? -O[I] / 2 + W + te + ae + D.mainAxis : Z + te + ae + D.mainAxis, me = t.elements.arrow && ot(t.elements.arrow), he = me ? x === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, ge = (k = j == null ? void 0 : j[x]) != null ? k : 0, ye = H + ie - ge - he, B = H + ve - ge, Re = ze(v ? mt(P, ye) : P, H, v ? Ne(_, B) : _);
      R[x] = Re, S[x] = Re - H;
    }
    if (c) {
      var we, $t = x === "x" ? z : Y, Tt = x === "x" ? Q : ee, ce = R[C], De = C === "y" ? "height" : "width", at = ce + h[$t], it = ce - h[Tt], Me = [z, Y].indexOf(b) !== -1, ct = (we = j == null ? void 0 : j[C]) != null ? we : 0, A = Me ? at : ce - O[De] - N[De] - ct + D.altAxis, ue = Me ? ce + O[De] + N[De] - ct - D.altAxis : it, Ve = v && Me ? Ys(A, ce, ue) : ze(v ? A : at, ce, v ? ue : it);
      R[C] = Ve, S[C] = Ve - ce;
    }
    t.modifiersData[r] = S;
  }
}
const Ta = { name: "preventOverflow", enabled: true, phase: "main", fn: $a, requiresIfExists: ["offset"] };
function ja(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Na(e) {
  return e === J(e) || !oe(e) ? un(e) : ja(e);
}
function Sa(e) {
  var t = e.getBoundingClientRect(), n = Ie(t.width) / e.offsetWidth || 1, r = Ie(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ka(e, t, n) {
  n === void 0 && (n = false);
  var r = oe(t), o = oe(t) && Sa(t), s = Ce(t), a = Pe(e, o, n), c = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((Ee(t) !== "body" || fn(s)) && (c = Na(t)), oe(t) ? (u = Pe(t, true), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = ln(s))), { x: a.left + c.scrollLeft - u.x, y: a.top + c.scrollTop - u.y, width: a.width, height: a.height };
}
function Da(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var u = t.get(c);
        u && o(u);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || o(s);
  }), r;
}
function Ma(e) {
  var t = Da(e);
  return Gs.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Aa(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Fa(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Hn = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Un() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function La(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? Hn : o;
  return function(c, u, l) {
    l === void 0 && (l = s);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Hn, s), modifiersData: {}, elements: { reference: c, popper: u }, attributes: {}, styles: {} }, d = [], p = false, v = { state: f, setOptions: function(b) {
      var w = typeof b == "function" ? b(f.options) : b;
      y(), f.options = Object.assign({}, s, f.options, w), f.scrollParents = { reference: ke(c) ? Ye(c) : c.contextElement ? Ye(c.contextElement) : [], popper: Ye(u) };
      var E = Ma(Fa([].concat(r, f.options.modifiers)));
      return f.orderedModifiers = E.filter(function(x) {
        return x.enabled;
      }), g(), v.update();
    }, forceUpdate: function() {
      if (!p) {
        var b = f.elements, w = b.reference, E = b.popper;
        if (Un(w, E)) {
          f.rects = { reference: ka(w, ot(E), f.options.strategy === "fixed"), popper: an(E) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(D) {
            return f.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var x = 0; x < f.orderedModifiers.length; x++) {
            if (f.reset === true) {
              f.reset = false, x = -1;
              continue;
            }
            var C = f.orderedModifiers[x], R = C.fn, O = C.options, N = O === void 0 ? {} : O, M = C.name;
            typeof R == "function" && (f = R({ state: f, options: N, name: M, instance: v }) || f);
          }
        }
      }
    }, update: Aa(function() {
      return new Promise(function(h) {
        v.forceUpdate(), h(f);
      });
    }), destroy: function() {
      y(), p = true;
    } };
    if (!Un(c, u)) return v;
    v.setOptions(l).then(function(h) {
      !p && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function g() {
      f.orderedModifiers.forEach(function(h) {
        var b = h.name, w = h.options, E = w === void 0 ? {} : w, x = h.effect;
        if (typeof x == "function") {
          var C = x({ state: f, name: b, instance: v, options: E }), R = function() {
          };
          d.push(C || R);
        }
      });
    }
    function y() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return v;
  };
}
const Ba = La({ defaultModifiers: [wa, Ra, oa, aa, Ea, ga, Ta, ea] }), Ia = ["enabled", "placement", "strategy", "modifiers"];
function Pa(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Wa = { name: "applyStyles", enabled: false, phase: "afterWrite", fn: () => {
} }, Ha = { name: "ariaDescribedBy", enabled: true, phase: "afterWrite", effect: ({ state: e }) => () => {
  const { reference: t, popper: n } = e.elements;
  if ("removeAttribute" in t) {
    const r = (t.getAttribute("aria-describedby") || "").split(",").filter((o) => o.trim() !== n.id);
    r.length ? t.setAttribute("aria-describedby", r.join(",")) : t.removeAttribute("aria-describedby");
  }
}, fn: ({ state: e }) => {
  var t;
  const { popper: n, reference: r } = e.elements, o = (t = n.getAttribute("role")) == null ? void 0 : t.toLowerCase();
  if (n.id && o === "tooltip" && "setAttribute" in r) {
    const s = r.getAttribute("aria-describedby");
    if (s && s.split(",").indexOf(n.id) !== -1) return;
    r.setAttribute("aria-describedby", s ? `${s},${n.id}` : n.id);
  }
} }, Ua = [];
function Ir(e, t, n = {}) {
  let { enabled: r = true, placement: o = "bottom", strategy: s = "absolute", modifiers: a = Ua } = n, c = Pa(n, Ia);
  const u = i.useRef(a), l = i.useRef(), f = i.useCallback(() => {
    var h;
    (h = l.current) == null || h.update();
  }, []), d = i.useCallback(() => {
    var h;
    (h = l.current) == null || h.forceUpdate();
  }, []), [p, v] = Fs(i.useState({ placement: o, update: f, forceUpdate: d, attributes: {}, styles: { popper: {}, arrow: {} } })), g = i.useMemo(() => ({ name: "updateStateModifier", enabled: true, phase: "write", requires: ["computeStyles"], fn: ({ state: h }) => {
    const b = {}, w = {};
    Object.keys(h.elements).forEach((E) => {
      b[E] = h.styles[E], w[E] = h.attributes[E];
    }), v({ state: h, styles: b, attributes: w, update: f, forceUpdate: d, placement: h.placement });
  } }), [f, d, v]), y = i.useMemo(() => (Xe(u.current, a) || (u.current = a), u.current), [a]);
  return i.useEffect(() => {
    !l.current || !r || l.current.setOptions({ placement: o, strategy: s, modifiers: [...y, g, Wa] });
  }, [s, o, g, r, y]), i.useEffect(() => {
    if (!(!r || e == null || t == null)) return l.current = Ba(e, t, Object.assign({}, c, { placement: o, strategy: s, modifiers: [...y, Ha, g] })), () => {
      l.current != null && (l.current.destroy(), l.current = void 0, v((h) => Object.assign({}, h, { attributes: {}, styles: { popper: {} } })));
    };
  }, [r, e, t]), p;
}
function Qe(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var At, _n;
function _a() {
  if (_n) return At;
  _n = 1;
  var e = function() {
  };
  return At = e, At;
}
var Va = _a();
const qa = et(Va), Vn = () => {
};
function Ka(e) {
  return e.button === 0;
}
function Ga(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const pt = (e) => e && ("current" in e ? e.current : e), qn = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function Pr(e, t = Vn, { disabled: n, clickTrigger: r = "click" } = {}) {
  const o = i.useRef(false), s = i.useRef(false), a = i.useCallback((l) => {
    const f = pt(e);
    qa(!!f, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), o.current = !f || Ga(l) || !Ka(l) || !!Qe(f, l.target) || s.current, s.current = false;
  }, [e]), c = U((l) => {
    const f = pt(e);
    f && Qe(f, l.target) ? s.current = true : s.current = false;
  }), u = U((l) => {
    o.current || t(l);
  });
  i.useEffect(() => {
    var l, f;
    if (n || e == null) return;
    const d = He(pt(e)), p = d.defaultView || window;
    let v = (l = p.event) != null ? l : (f = p.parent) == null ? void 0 : f.event, g = null;
    qn[r] && (g = le(d, qn[r], c, true));
    const y = le(d, r, a, true), h = le(d, r, (w) => {
      if (w === v) {
        v = void 0;
        return;
      }
      u(w);
    });
    let b = [];
    return "ontouchstart" in d.documentElement && (b = [].slice.call(d.body.children).map((w) => le(w, "mousemove", Vn))), () => {
      g == null ? void 0 : g(), y(), h(), b.forEach((w) => w());
    };
  }, [e, n, r, a, c, u]);
}
function Xa(e) {
  const t = {};
  return Array.isArray(e) ? (e == null ? void 0 : e.forEach((n) => {
    t[n.name] = n;
  }), t) : e || t;
}
function za(e = {}) {
  return Array.isArray(e) ? e : Object.keys(e).map((t) => (e[t].name = t, e[t]));
}
function Wr({ enabled: e, enableEvents: t, placement: n, flip: r, offset: o, fixed: s, containerPadding: a, arrowElement: c, popperConfig: u = {} }) {
  var l, f, d, p, v;
  const g = Xa(u.modifiers);
  return Object.assign({}, u, { placement: n, enabled: e, strategy: s ? "fixed" : u.strategy, modifiers: za(Object.assign({}, g, { eventListeners: { enabled: t, options: (l = g.eventListeners) == null ? void 0 : l.options }, preventOverflow: Object.assign({}, g.preventOverflow, { options: a ? Object.assign({ padding: a }, (f = g.preventOverflow) == null ? void 0 : f.options) : (d = g.preventOverflow) == null ? void 0 : d.options }), offset: { options: Object.assign({ offset: o }, (p = g.offset) == null ? void 0 : p.options) }, arrow: Object.assign({}, g.arrow, { enabled: !!c, options: Object.assign({}, (v = g.arrow) == null ? void 0 : v.options, { element: c }) }), flip: Object.assign({ enabled: !!r }, g.flip) })) });
}
const Ya = ["children", "usePopper"];
function Ja(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Za = () => {
};
function Hr(e = {}) {
  const t = i.useContext(bt), [n, r] = Kt(), o = i.useRef(false), { flip: s, offset: a, rootCloseEvent: c, fixed: u = false, placement: l, popperConfig: f = {}, enableEventListeners: d = true, usePopper: p = !!t } = e, v = (t == null ? void 0 : t.show) == null ? !!e.show : t.show;
  v && !o.current && (o.current = true);
  const g = (R) => {
    t == null ? void 0 : t.toggle(false, R);
  }, { placement: y, setMenu: h, menuElement: b, toggleElement: w } = t || {}, E = Ir(w, b, Wr({ placement: l || y || "bottom-start", enabled: p, enableEvents: d ?? v, offset: a, flip: s, fixed: u, arrowElement: n, popperConfig: f })), x = Object.assign({ ref: h || Za, "aria-labelledby": w == null ? void 0 : w.id }, E.attributes.popper, { style: E.styles.popper }), C = { show: v, placement: y, hasShown: o.current, toggle: t == null ? void 0 : t.toggle, popper: p ? E : null, arrowProps: p ? Object.assign({ ref: r }, E.attributes.arrow, { style: E.styles.arrow }) : {} };
  return Pr(b, g, { clickTrigger: c, disabled: !v }), [x, C];
}
function Ur(e) {
  let { children: t, usePopper: n = true } = e, r = Ja(e, Ya);
  const [o, s] = Hr(Object.assign({}, r, { usePopper: n }));
  return m.jsx(m.Fragment, { children: t(o, s) });
}
Ur.displayName = "DropdownMenu";
const _r = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 }, Vr = X.createContext(_r), Qa = X.createContext(false);
let Ft = /* @__PURE__ */ new WeakMap();
function ei(e = false) {
  let t = i.useContext(Vr), n = i.useRef(null);
  if (n.current === null && !e) {
    var r, o;
    let s = (o = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (r = o.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (s) {
      let a = Ft.get(s);
      a == null ? Ft.set(s, { id: t.current, state: s.memoizedState }) : s.memoizedState !== a.state && (t.current = a.id, Ft.delete(s));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function ti(e) {
  let t = i.useContext(Vr), n = ei(!!e), r = `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function ni(e) {
  let t = X.useId(), [n] = i.useState(ii()), r = n ? "react-aria" : `react-aria${_r.prefix}`;
  return e || `${r}-${t}`;
}
const ri = typeof X.useId == "function" ? ni : ti;
function oi() {
  return false;
}
function si() {
  return true;
}
function ai(e) {
  return () => {
  };
}
function ii() {
  return typeof X.useSyncExternalStore == "function" ? X.useSyncExternalStore(ai, oi, si) : i.useContext(Qa);
}
const qr = (e) => {
  var t;
  return ((t = e.getAttribute("role")) == null ? void 0 : t.toLowerCase()) === "menu";
}, Kn = () => {
};
function Kr() {
  const e = ri(), { show: t = false, toggle: n = Kn, setToggle: r, menuElement: o } = i.useContext(bt) || {}, s = i.useCallback((c) => {
    n(!t, c);
  }, [t, n]), a = { id: e, ref: r || Kn, onClick: s, "aria-expanded": !!t };
  return o && qr(o) && (a["aria-haspopup"] = true), [a, { show: t, toggle: n }];
}
function Gr({ children: e }) {
  const [t, n] = Kr();
  return m.jsx(m.Fragment, { children: e(t, n) });
}
Gr.displayName = "DropdownToggle";
const Yt = i.createContext(null), Gn = (e, t = null) => e != null ? String(e) : t || null, Xr = i.createContext(null);
Xr.displayName = "NavContext";
const ci = "data-rr-ui-";
function dn(e) {
  return `${ci}${e}`;
}
const ui = ["eventKey", "disabled", "onClick", "active", "as"];
function li(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function zr({ key: e, href: t, active: n, disabled: r, onClick: o }) {
  const s = i.useContext(Yt), a = i.useContext(Xr), { activeKey: c } = a || {}, u = Gn(e, t), l = n == null && e != null ? Gn(c) === u : n;
  return [{ onClick: U((d) => {
    r || (o == null ? void 0 : o(d), s && !d.isPropagationStopped() && s(u, d));
  }), "aria-disabled": r || void 0, "aria-selected": l, [dn("dropdown-item")]: "" }, { isActive: l }];
}
const Yr = i.forwardRef((e, t) => {
  let { eventKey: n, disabled: r, onClick: o, active: s, as: a = dr } = e, c = li(e, ui);
  const [u] = zr({ key: n, href: c.href, disabled: r, onClick: o, active: s });
  return m.jsx(a, Object.assign({}, c, { ref: t }, u));
});
Yr.displayName = "DropdownItem";
const Jr = i.createContext(Ue ? window : void 0);
Jr.Provider;
function Ct() {
  return i.useContext(Jr);
}
function Xn() {
  const e = As(), t = i.useRef(null), n = i.useCallback((r) => {
    t.current = r, e();
  }, [e]);
  return [t, n];
}
function st({ defaultShow: e, show: t, onSelect: n, onToggle: r, itemSelector: o = `* [${dn("dropdown-item")}]`, focusFirstItemOnShow: s, placement: a = "bottom-start", children: c }) {
  const u = Ct(), [l, f] = Ms(t, e, r), [d, p] = Xn(), v = d.current, [g, y] = Xn(), h = g.current, b = fr(l), w = i.useRef(null), E = i.useRef(false), x = i.useContext(Yt), C = i.useCallback((j, S, k = S == null ? void 0 : S.type) => {
    f(j, { originalEvent: S, source: k });
  }, [f]), R = U((j, S) => {
    n == null ? void 0 : n(j, S), C(false, S, "select"), S.isPropagationStopped() || (x == null ? void 0 : x(j, S));
  }), O = i.useMemo(() => ({ toggle: C, placement: a, show: l, menuElement: v, toggleElement: h, setMenu: p, setToggle: y }), [C, a, l, v, h, p, y]);
  v && b && !l && (E.current = v.contains(v.ownerDocument.activeElement));
  const N = U(() => {
    h && h.focus && h.focus();
  }), M = U(() => {
    const j = w.current;
    let S = s;
    if (S == null && (S = d.current && qr(d.current) ? "keyboard" : false), S === false || S === "keyboard" && !/^key.+$/.test(j)) return;
    const k = be(d.current, o)[0];
    k && k.focus && k.focus();
  });
  i.useEffect(() => {
    l ? M() : E.current && (E.current = false, N());
  }, [l, E, N, M]), i.useEffect(() => {
    w.current = null;
  });
  const D = (j, S) => {
    if (!d.current) return null;
    const k = be(d.current, o);
    let F = k.indexOf(j) + S;
    return F = Math.max(0, Math.min(F, k.length)), k[F];
  };
  return ds(i.useCallback(() => u.document, [u]), "keydown", (j) => {
    var S, k;
    const { key: F } = j, L = j.target, I = (S = d.current) == null ? void 0 : S.contains(L), H = (k = g.current) == null ? void 0 : k.contains(L);
    if (/input|textarea/i.test(L.tagName) && (F === " " || F !== "Escape" && I || F === "Escape" && L.type === "search") || !I && !H || F === "Tab" && (!d.current || !l)) return;
    w.current = j.type;
    const _ = { originalEvent: j, source: j.type };
    switch (F) {
      case "ArrowUp": {
        const W = D(L, -1);
        W && W.focus && W.focus(), j.preventDefault();
        return;
      }
      case "ArrowDown":
        if (j.preventDefault(), !l) f(true, _);
        else {
          const W = D(L, 1);
          W && W.focus && W.focus();
        }
        return;
      case "Tab":
        en(L.ownerDocument, "keyup", (W) => {
          var K;
          (W.key === "Tab" && !W.target || !((K = d.current) != null && K.contains(W.target))) && f(false, _);
        }, { once: true });
        break;
      case "Escape":
        F === "Escape" && (j.preventDefault(), j.stopPropagation()), f(false, _);
        break;
    }
  }), m.jsx(Yt.Provider, { value: R, children: m.jsx(bt.Provider, { value: O, children: c }) });
}
st.displayName = "Dropdown";
st.Menu = Ur;
st.Toggle = Gr;
st.Item = Yr;
const pn = i.createContext({});
pn.displayName = "DropdownContext";
const Zr = i.forwardRef(({ className: e, bsPrefix: t, as: n = "hr", role: r = "separator", ...o }, s) => (t = T(t, "dropdown-divider"), m.jsx(n, { ref: s, className: $(e, t), role: r, ...o })));
Zr.displayName = "DropdownDivider";
const Qr = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", role: r = "heading", ...o }, s) => (t = T(t, "dropdown-header"), m.jsx(n, { ref: s, className: $(e, t), role: r, ...o })));
Qr.displayName = "DropdownHeader";
const eo = i.forwardRef(({ bsPrefix: e, className: t, eventKey: n, disabled: r = false, onClick: o, active: s, as: a = nn, ...c }, u) => {
  const l = T(e, "dropdown-item"), [f, d] = zr({ key: n, href: c.href, disabled: r, onClick: o, active: s });
  return m.jsx(a, { ...c, ...f, ref: u, className: $(t, l, d.isActive && "active", r && "disabled") });
});
eo.displayName = "DropdownItem";
const to = i.forwardRef(({ className: e, bsPrefix: t, as: n = "span", ...r }, o) => (t = T(t, "dropdown-item-text"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
to.displayName = "DropdownItemText";
const fi = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative", di = typeof document < "u", no = di || fi ? i.useLayoutEffect : i.useEffect, vn = i.createContext(null);
vn.displayName = "InputGroupContext";
const ro = i.createContext(null);
ro.displayName = "NavbarContext";
function oo(e, t) {
  return e;
}
function so(e, t, n) {
  const r = n ? "top-end" : "top-start", o = n ? "top-start" : "top-end", s = n ? "bottom-end" : "bottom-start", a = n ? "bottom-start" : "bottom-end", c = n ? "right-start" : "left-start", u = n ? "right-end" : "left-end", l = n ? "left-start" : "right-start", f = n ? "left-end" : "right-end";
  let d = e ? a : s;
  return t === "up" ? d = e ? o : r : t === "end" ? d = e ? f : l : t === "start" ? d = e ? u : c : t === "down-centered" ? d = "bottom" : t === "up-centered" && (d = "top"), d;
}
const ao = i.forwardRef(({ bsPrefix: e, className: t, align: n, rootCloseEvent: r, flip: o = true, show: s, renderOnMount: a, as: c = "div", popperConfig: u, variant: l, ...f }, d) => {
  let p = false;
  const v = i.useContext(ro), g = T(e, "dropdown-menu"), { align: y, drop: h, isRTL: b } = i.useContext(pn);
  n = n || y;
  const w = i.useContext(vn), E = [];
  if (n) if (typeof n == "object") {
    const j = Object.keys(n);
    if (j.length) {
      const S = j[0], k = n[S];
      p = k === "start", E.push(`${g}-${S}-${k}`);
    }
  } else n === "end" && (p = true);
  const x = so(p, h, b), [C, { hasShown: R, popper: O, show: N, toggle: M }] = Hr({ flip: o, rootCloseEvent: r, show: s, usePopper: !v && E.length === 0, offset: [0, 2], popperConfig: u, placement: x });
  if (C.ref = _e(oo(d), C.ref), no(() => {
    N && (O == null ? void 0 : O.update());
  }, [N]), !R && !a && !w) return null;
  typeof c != "string" && (C.show = N, C.close = () => M == null ? void 0 : M(false), C.align = n);
  let D = f.style;
  return O != null && O.placement && (D = { ...f.style, ...C.style }, f["x-placement"] = O.placement), m.jsx(c, { ...f, ...C, style: D, ...(E.length || v) && { "data-bs-popper": "static" }, className: $(t, g, N && "show", p && `${g}-end`, l && `${g}-${l}`, ...E) });
});
ao.displayName = "DropdownMenu";
const io = i.forwardRef(({ bsPrefix: e, split: t, className: n, childBsPrefix: r, as: o = mr, ...s }, a) => {
  const c = T(e, "dropdown-toggle"), u = i.useContext(bt);
  r !== void 0 && (s.bsPrefix = r);
  const [l] = Kr();
  return l.ref = _e(l.ref, oo(a)), m.jsx(o, { className: $(n, c, t && `${c}-split`, (u == null ? void 0 : u.show) && "show"), ...l, ...s });
});
io.displayName = "DropdownToggle";
const co = i.forwardRef((e, t) => {
  const { bsPrefix: n, drop: r = "down", show: o, className: s, align: a = "start", onSelect: c, onToggle: u, focusFirstItemOnShow: l, as: f = "div", navbar: d, autoClose: p = true, ...v } = nr(e, { show: "onToggle" }), g = i.useContext(vn), y = T(n, "dropdown"), h = yt(), b = (O) => p === false ? O === "click" : p === "inside" ? O !== "rootClose" : p === "outside" ? O !== "select" : true, w = Le((O, N) => {
    var M;
    !((M = N.originalEvent) == null || (M = M.target) == null) && M.classList.contains("dropdown-toggle") && N.source === "mousedown" || (N.originalEvent.currentTarget === document && (N.source !== "keydown" || N.originalEvent.key === "Escape") && (N.source = "rootClose"), b(N.source) && (u == null ? void 0 : u(O, N)));
  }), x = so(a === "end", r, h), C = i.useMemo(() => ({ align: a, drop: r, isRTL: h }), [a, r, h]), R = { down: y, "down-centered": `${y}-center`, up: "dropup", "up-centered": "dropup-center dropup", end: "dropend", start: "dropstart" };
  return m.jsx(pn.Provider, { value: C, children: m.jsx(st, { placement: x, show: o, onSelect: c, onToggle: w, focusFirstItemOnShow: l, itemSelector: `.${y}-item:not(.disabled):not(:disabled)`, children: g ? v.children : m.jsx(f, { ...v, ref: t, className: $(s, o && "show", R[r]) }) }) });
});
co.displayName = "Dropdown";
const oc = Object.assign(co, { Toggle: io, Menu: ao, Item: eo, ItemText: to, Divider: Zr, Header: Qr }), pi = { type: ne.string, tooltip: ne.bool, as: ne.elementType }, Rt = i.forwardRef(({ as: e = "div", className: t, type: n = "valid", tooltip: r = false, ...o }, s) => m.jsx(e, { ...o, ref: s, className: $(t, `${n}-${r ? "tooltip" : "feedback"}`) }));
Rt.displayName = "Feedback";
Rt.propTypes = pi;
const de = i.createContext({}), mn = i.forwardRef(({ id: e, bsPrefix: t, className: n, type: r = "checkbox", isValid: o = false, isInvalid: s = false, as: a = "input", ...c }, u) => {
  const { controlId: l } = i.useContext(de);
  return t = T(t, "form-check-input"), m.jsx(a, { ...c, ref: u, type: r, id: e || l, className: $(n, t, o && "is-valid", s && "is-invalid") });
});
mn.displayName = "FormCheckInput";
const ht = i.forwardRef(({ bsPrefix: e, className: t, htmlFor: n, ...r }, o) => {
  const { controlId: s } = i.useContext(de);
  return e = T(e, "form-check-label"), m.jsx("label", { ...r, ref: o, htmlFor: n || s, className: $(t, e) });
});
ht.displayName = "FormCheckLabel";
const uo = i.forwardRef(({ id: e, bsPrefix: t, bsSwitchPrefix: n, inline: r = false, reverse: o = false, disabled: s = false, isValid: a = false, isInvalid: c = false, feedbackTooltip: u = false, feedback: l, feedbackType: f, className: d, style: p, title: v = "", type: g = "checkbox", label: y, children: h, as: b = "input", ...w }, E) => {
  t = T(t, "form-check"), n = T(n, "form-switch");
  const { controlId: x } = i.useContext(de), C = i.useMemo(() => ({ controlId: e || x }), [x, e]), R = !h && y != null && y !== false || Ns(h, ht), O = m.jsx(mn, { ...w, type: g === "switch" ? "checkbox" : g, ref: E, isValid: a, isInvalid: c, disabled: s, as: b });
  return m.jsx(de.Provider, { value: C, children: m.jsx("div", { style: p, className: $(d, R && t, r && `${t}-inline`, o && `${t}-reverse`, g === "switch" && n), children: h || m.jsxs(m.Fragment, { children: [O, R && m.jsx(ht, { title: v, children: y }), l && m.jsx(Rt, { type: f, tooltip: u, children: l })] }) }) });
});
uo.displayName = "FormCheck";
const gt = Object.assign(uo, { Input: mn, Label: ht }), lo = i.forwardRef(({ bsPrefix: e, type: t, size: n, htmlSize: r, id: o, className: s, isValid: a = false, isInvalid: c = false, plaintext: u, readOnly: l, as: f = "input", ...d }, p) => {
  const { controlId: v } = i.useContext(de);
  return e = T(e, "form-control"), m.jsx(f, { ...d, type: t, size: r, ref: p, readOnly: l, id: o || v, className: $(s, u ? `${e}-plaintext` : e, n && `${e}-${n}`, t === "color" && `${e}-color`, a && "is-valid", c && "is-invalid") });
});
lo.displayName = "FormControl";
const vi = Object.assign(lo, { Feedback: Rt }), fo = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "form-floating"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
fo.displayName = "FormFloating";
const hn = i.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
  const o = i.useMemo(() => ({ controlId: e }), [e]);
  return m.jsx(de.Provider, { value: o, children: m.jsx(t, { ...n, ref: r }) });
});
hn.displayName = "FormGroup";
const po = i.forwardRef(({ as: e = "label", bsPrefix: t, column: n = false, visuallyHidden: r = false, className: o, htmlFor: s, ...a }, c) => {
  const { controlId: u } = i.useContext(de);
  t = T(t, "form-label");
  let l = "col-form-label";
  typeof n == "string" && (l = `${l} ${l}-${n}`);
  const f = $(o, t, r && "visually-hidden", n && l);
  return s = s || u, n ? m.jsx(jr, { ref: c, as: "label", className: f, htmlFor: s, ...a }) : m.jsx(e, { ref: c, className: f, htmlFor: s, ...a });
});
po.displayName = "FormLabel";
const vo = i.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, o) => {
  const { controlId: s } = i.useContext(de);
  return e = T(e, "form-range"), m.jsx("input", { ...r, type: "range", ref: o, className: $(t, e), id: n || s });
});
vo.displayName = "FormRange";
const mo = i.forwardRef(({ bsPrefix: e, size: t, htmlSize: n, className: r, isValid: o = false, isInvalid: s = false, id: a, ...c }, u) => {
  const { controlId: l } = i.useContext(de);
  return e = T(e, "form-select"), m.jsx("select", { ...c, size: n, ref: u, className: $(r, e, t && `${e}-${t}`, o && "is-valid", s && "is-invalid"), id: a || l });
});
mo.displayName = "FormSelect";
const ho = i.forwardRef(({ bsPrefix: e, className: t, as: n = "small", muted: r, ...o }, s) => (e = T(e, "form-text"), m.jsx(n, { ...o, ref: s, className: $(t, e, r && "text-muted") })));
ho.displayName = "FormText";
const go = i.forwardRef((e, t) => m.jsx(gt, { ...e, ref: t, type: "switch" }));
go.displayName = "Switch";
const mi = Object.assign(go, { Input: gt.Input, Label: gt.Label }), yo = i.forwardRef(({ bsPrefix: e, className: t, children: n, controlId: r, label: o, ...s }, a) => (e = T(e, "form-floating"), m.jsxs(hn, { ref: a, className: $(t, e), controlId: r, ...s, children: [n, m.jsx("label", { htmlFor: r, children: o })] })));
yo.displayName = "FloatingLabel";
const hi = { _ref: ne.any, validated: ne.bool, as: ne.elementType }, gn = i.forwardRef(({ className: e, validated: t, as: n = "form", ...r }, o) => m.jsx(n, { ...r, ref: o, className: $(e, t && "was-validated") }));
gn.displayName = "Form";
gn.propTypes = hi;
const sc = Object.assign(gn, { Group: hn, Control: vi, Floating: fo, Check: gt, Switch: mi, Label: po, Text: ho, Range: vo, Select: mo, FloatingLabel: yo }), zn = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function gi(e, t) {
  const n = zn(e), r = zn(t);
  return (o) => {
    n && n(o), r && r(o);
  };
}
function Ot(e, t) {
  return i.useMemo(() => gi(e, t), [e, t]);
}
var ft;
function Yn(e) {
  if ((!ft && ft !== 0 || e) && Ue) {
    var t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), ft = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return ft;
}
function yi() {
  return i.useState(null);
}
function Lt(e) {
  e === void 0 && (e = He());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function wi(e) {
  const t = i.useRef(e);
  return t.current = e, t;
}
function xi(e) {
  const t = wi(e);
  i.useEffect(() => () => t.current(), []);
}
function bi(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Jn = dn("modal-open");
class yn {
  constructor({ ownerDocument: t, handleContainerOverflow: n = true, isRTL: r = false } = {}) {
    this.handleContainerOverflow = n, this.isRTL = r, this.modals = [], this.ownerDocument = t;
  }
  getScrollbarWidth() {
    return bi(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {
  }
  removeModalAttributes(t) {
  }
  setContainerStyle(t) {
    const n = { overflow: "hidden" }, r = this.isRTL ? "paddingLeft" : "paddingRight", o = this.getElement();
    t.style = { overflow: o.style.overflow, [r]: o.style[r] }, t.scrollBarWidth && (n[r] = `${parseInt(je(o, r) || "0", 10) + t.scrollBarWidth}px`), o.setAttribute(Jn, ""), je(o, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Jn), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return n !== -1 || (n = this.modals.length, this.modals.push(t), this.setModalAttributes(t), n !== 0) || (this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }, this.handleContainerOverflow && this.setContainerStyle(this.state)), n;
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 && (this.modals.splice(n, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Bt = (e, t) => Ue ? e == null ? (t || He()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Jt(e, t) {
  const n = Ct(), [r, o] = i.useState(() => Bt(e, n == null ? void 0 : n.document));
  if (!r) {
    const s = Bt(e);
    s && o(s);
  }
  return i.useEffect(() => {
  }, [t, r]), i.useEffect(() => {
    const s = Bt(e);
    s !== r && o(s);
  }, [e, r]), r;
}
function Ei({ children: e, in: t, onExited: n, mountOnEnter: r, unmountOnExit: o }) {
  const s = i.useRef(null), a = i.useRef(t), c = U(n);
  i.useEffect(() => {
    t ? a.current = true : c(s.current);
  }, [t, c]);
  const u = Ot(s, nt(e)), l = i.cloneElement(e, { ref: u });
  return t ? l : o || !a.current && r ? null : l;
}
const Ci = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function Ri(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function Oi(e) {
  let { onEnter: t, onEntering: n, onEntered: r, onExit: o, onExiting: s, onExited: a, addEndListener: c, children: u } = e, l = Ri(e, Ci);
  const f = i.useRef(null), d = Ot(f, nt(u)), p = (x) => (C) => {
    x && f.current && x(f.current, C);
  }, v = i.useCallback(p(t), [t]), g = i.useCallback(p(n), [n]), y = i.useCallback(p(r), [r]), h = i.useCallback(p(o), [o]), b = i.useCallback(p(s), [s]), w = i.useCallback(p(a), [a]), E = i.useCallback(p(c), [c]);
  return Object.assign({}, l, { nodeRef: f }, t && { onEnter: v }, n && { onEntering: g }, r && { onEntered: y }, o && { onExit: h }, s && { onExiting: b }, a && { onExited: w }, c && { addEndListener: E }, { children: typeof u == "function" ? (x, C) => u(x, Object.assign({}, C, { ref: d })) : i.cloneElement(u, { ref: d }) });
}
const $i = ["component"];
function Ti(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const ji = i.forwardRef((e, t) => {
  let { component: n } = e, r = Ti(e, $i);
  const o = Oi(r);
  return m.jsx(n, Object.assign({ ref: t }, o));
});
function Ni({ in: e, onTransition: t }) {
  const n = i.useRef(null), r = i.useRef(true), o = U(t);
  return kn(() => {
    if (!n.current) return;
    let s = false;
    return o({ in: e, element: n.current, initial: r.current, isStale: () => s }), () => {
      s = true;
    };
  }, [e, o]), kn(() => (r.current = false, () => {
    r.current = true;
  }), []), n;
}
function Si({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [s, a] = i.useState(!t);
  t && s && a(false);
  const c = Ni({ in: !!t, onTransition: (l) => {
    const f = () => {
      l.isStale() || (l.in ? r == null ? void 0 : r(l.element, l.initial) : (a(true), n == null ? void 0 : n(l.element)));
    };
    Promise.resolve(o(l)).then(f, (d) => {
      throw l.in || a(true), d;
    });
  } }), u = Ot(c, nt(e));
  return s && !t ? null : i.cloneElement(e, { ref: u });
}
function Zt(e, t, n) {
  return e ? m.jsx(ji, Object.assign({}, n, { component: e })) : t ? m.jsx(Si, Object.assign({}, n, { transition: t })) : m.jsx(Ei, Object.assign({}, n));
}
const ki = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function Di(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
let It;
function Mi(e) {
  return It || (It = new yn({ ownerDocument: e == null ? void 0 : e.document })), It;
}
function Ai(e) {
  const t = Ct(), n = e || Mi(t), r = i.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, { add: () => n.add(r.current), remove: () => n.remove(r.current), isTopModal: () => n.isTopModal(r.current), setDialogRef: i.useCallback((o) => {
    r.current.dialog = o;
  }, []), setBackdropRef: i.useCallback((o) => {
    r.current.backdrop = o;
  }, []) });
}
const wo = i.forwardRef((e, t) => {
  let { show: n = false, role: r = "dialog", className: o, style: s, children: a, backdrop: c = true, keyboard: u = true, onBackdropClick: l, onEscapeKeyDown: f, transition: d, runTransition: p, backdropTransition: v, runBackdropTransition: g, autoFocus: y = true, enforceFocus: h = true, restoreFocus: b = true, restoreFocusOptions: w, renderDialog: E, renderBackdrop: x = (B) => m.jsx("div", Object.assign({}, B)), manager: C, container: R, onShow: O, onHide: N = () => {
  }, onExit: M, onExited: D, onExiting: j, onEnter: S, onEntering: k, onEntered: F } = e, L = Di(e, ki);
  const I = Ct(), H = Jt(R), P = Ai(C), _ = lr(), W = fr(n), [K, Z] = i.useState(!n), V = i.useRef(null);
  i.useImperativeHandle(t, () => P, [P]), Ue && !W && n && (V.current = Lt(I == null ? void 0 : I.document)), n && K && Z(false);
  const q = U(() => {
    if (P.add(), ve.current = le(document, "keydown", te), ie.current = le(document, "focus", () => setTimeout(se), true), O && O(), y) {
      var B, Re;
      const we = Lt((B = (Re = P.dialog) == null ? void 0 : Re.ownerDocument) != null ? B : I == null ? void 0 : I.document);
      P.dialog && we && !Qe(P.dialog, we) && (V.current = we, P.dialog.focus());
    }
  }), G = U(() => {
    if (P.remove(), ve.current == null || ve.current(), ie.current == null || ie.current(), b) {
      var B;
      (B = V.current) == null || B.focus == null || B.focus(w), V.current = null;
    }
  });
  i.useEffect(() => {
    !n || !H || q();
  }, [n, H, q]), i.useEffect(() => {
    K && G();
  }, [K, G]), xi(() => {
    G();
  });
  const se = U(() => {
    if (!h || !_() || !P.isTopModal()) return;
    const B = Lt(I == null ? void 0 : I.document);
    P.dialog && B && !Qe(P.dialog, B) && P.dialog.focus();
  }), ae = U((B) => {
    B.target === B.currentTarget && (l == null ? void 0 : l(B), c === true && N());
  }), te = U((B) => {
    u && ar(B) && P.isTopModal() && (f == null ? void 0 : f(B), B.defaultPrevented || N());
  }), ie = i.useRef(), ve = i.useRef(), me = (...B) => {
    Z(true), D == null ? void 0 : D(...B);
  };
  if (!H) return null;
  const he = Object.assign({ role: r, ref: P.setDialogRef, "aria-modal": r === "dialog" ? true : void 0 }, L, { style: s, className: o, tabIndex: -1 });
  let ge = E ? E(he) : m.jsx("div", Object.assign({}, he, { children: i.cloneElement(a, { role: "document" }) }));
  ge = Zt(d, p, { unmountOnExit: true, mountOnEnter: true, appear: true, in: !!n, onExit: M, onExiting: j, onExited: me, onEnter: S, onEntering: k, onEntered: F, children: ge });
  let ye = null;
  return c && (ye = x({ ref: P.setBackdropRef, onClick: ae }), ye = Zt(v, g, { in: !!n, appear: true, mountOnEnter: true, unmountOnExit: true, children: ye })), m.jsx(m.Fragment, { children: Te.createPortal(m.jsxs(m.Fragment, { children: [ye, ge] }), H) });
});
wo.displayName = "Modal";
const Fi = Object.assign(wo, { Manager: yn });
function Qt(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Li(e, t) {
  e.classList ? e.classList.add(t) : Qt(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Zn(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Bi(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Zn(e.className, t) : e.setAttribute("class", Zn(e.className && e.className.baseVal || "", t));
}
const Fe = { FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" };
class Ii extends yn {
  adjustAndStore(t, n, r) {
    const o = n.style[t];
    n.dataset[t] = o, je(n, { [t]: `${parseFloat(je(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], je(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if (Li(n, "modal-open"), !t.scrollBarWidth) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight", o = this.isRTL ? "marginLeft" : "marginRight";
    be(n, Fe.FIXED_CONTENT).forEach((s) => this.adjustAndStore(r, s, t.scrollBarWidth)), be(n, Fe.STICKY_CONTENT).forEach((s) => this.adjustAndStore(o, s, -t.scrollBarWidth)), be(n, Fe.NAVBAR_TOGGLER).forEach((s) => this.adjustAndStore(o, s, t.scrollBarWidth));
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    Bi(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight", o = this.isRTL ? "marginLeft" : "marginRight";
    be(n, Fe.FIXED_CONTENT).forEach((s) => this.restore(r, s)), be(n, Fe.STICKY_CONTENT).forEach((s) => this.restore(o, s)), be(n, Fe.NAVBAR_TOGGLER).forEach((s) => this.restore(o, s));
  }
}
let Pt;
function Pi(e) {
  return Pt || (Pt = new Ii(e)), Pt;
}
const xo = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "modal-body"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
xo.displayName = "ModalBody";
const bo = i.createContext({ onHide() {
} }), wn = i.forwardRef(({ bsPrefix: e, className: t, contentClassName: n, centered: r, size: o, fullscreen: s, children: a, scrollable: c, ...u }, l) => {
  e = T(e, "modal");
  const f = `${e}-dialog`, d = typeof s == "string" ? `${e}-fullscreen-${s}` : `${e}-fullscreen`;
  return m.jsx("div", { ...u, ref: l, className: $(f, t, o && `${e}-${o}`, r && `${f}-centered`, c && `${f}-scrollable`, s && d), children: m.jsx("div", { className: $(`${e}-content`, n), children: a }) });
});
wn.displayName = "ModalDialog";
const Eo = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "modal-footer"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
Eo.displayName = "ModalFooter";
const Wi = i.forwardRef(({ closeLabel: e = "Close", closeVariant: t, closeButton: n = false, onHide: r, children: o, ...s }, a) => {
  const c = i.useContext(bo), u = Le(() => {
    c == null ? void 0 : c.onHide(), r == null ? void 0 : r();
  });
  return m.jsxs("div", { ref: a, ...s, children: [o, n && m.jsx(xt, { "aria-label": e, variant: t, onClick: u })] });
}), Co = i.forwardRef(({ bsPrefix: e, className: t, closeLabel: n = "Close", closeButton: r = false, ...o }, s) => (e = T(e, "modal-header"), m.jsx(Wi, { ref: s, ...o, className: $(t, e), closeLabel: n, closeButton: r })));
Co.displayName = "ModalHeader";
const Hi = wt("h4"), Ro = i.forwardRef(({ className: e, bsPrefix: t, as: n = Hi, ...r }, o) => (t = T(t, "modal-title"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
Ro.displayName = "ModalTitle";
function Ui(e) {
  return m.jsx(Se, { ...e, timeout: null });
}
function _i(e) {
  return m.jsx(Se, { ...e, timeout: null });
}
const Oo = i.forwardRef(({ bsPrefix: e, className: t, style: n, dialogClassName: r, contentClassName: o, children: s, dialogAs: a = wn, "data-bs-theme": c, "aria-labelledby": u, "aria-describedby": l, "aria-label": f, show: d = false, animation: p = true, backdrop: v = true, keyboard: g = true, onEscapeKeyDown: y, onShow: h, onHide: b, container: w, autoFocus: E = true, enforceFocus: x = true, restoreFocus: C = true, restoreFocusOptions: R, onEntered: O, onExit: N, onExiting: M, onEnter: D, onEntering: j, onExited: S, backdropClassName: k, manager: F, ...L }, I) => {
  const [H, P] = i.useState({}), [_, W] = i.useState(false), K = i.useRef(false), Z = i.useRef(false), V = i.useRef(null), [q, G] = yi(), se = _e(I, G), ae = Le(b), te = yt();
  e = T(e, "modal");
  const ie = i.useMemo(() => ({ onHide: ae }), [ae]);
  function ve() {
    return F || Pi({ isRTL: te });
  }
  function me(A) {
    if (!Ue) return;
    const ue = ve().getScrollbarWidth() > 0, Ve = A.scrollHeight > He(A).documentElement.clientHeight;
    P({ paddingRight: ue && !Ve ? Yn() : void 0, paddingLeft: !ue && Ve ? Yn() : void 0 });
  }
  const he = Le(() => {
    q && me(q.dialog);
  });
  $r(() => {
    qt(window, "resize", he), V.current == null || V.current();
  });
  const ge = () => {
    K.current = true;
  }, ye = (A) => {
    K.current && q && A.target === q.dialog && (Z.current = true), K.current = false;
  }, B = () => {
    W(true), V.current = ir(q.dialog, () => {
      W(false);
    });
  }, Re = (A) => {
    A.target === A.currentTarget && B();
  }, we = (A) => {
    if (v === "static") {
      Re(A);
      return;
    }
    if (Z.current || A.target !== A.currentTarget) {
      Z.current = false;
      return;
    }
    b == null ? void 0 : b();
  }, $t = (A) => {
    g ? y == null ? void 0 : y(A) : (A.preventDefault(), v === "static" && B());
  }, Tt = (A, ue) => {
    A && me(A), D == null ? void 0 : D(A, ue);
  }, ce = (A) => {
    V.current == null || V.current(), N == null ? void 0 : N(A);
  }, De = (A, ue) => {
    j == null ? void 0 : j(A, ue), en(window, "resize", he);
  }, at = (A) => {
    A && (A.style.display = ""), S == null ? void 0 : S(A), qt(window, "resize", he);
  }, it = i.useCallback((A) => m.jsx("div", { ...A, className: $(`${e}-backdrop`, k, !p && "show") }), [p, k, e]), Me = { ...n, ...H };
  Me.display = "block";
  const ct = (A) => m.jsx("div", { role: "dialog", ...A, style: Me, className: $(t, e, _ && `${e}-static`, !p && "show"), onClick: v ? we : void 0, onMouseUp: ye, "data-bs-theme": c, "aria-label": f, "aria-labelledby": u, "aria-describedby": l, children: m.jsx(a, { ...L, onMouseDown: ge, className: r, contentClassName: o, children: s }) });
  return m.jsx(bo.Provider, { value: ie, children: m.jsx(Fi, { show: d, ref: se, backdrop: v, container: w, keyboard: true, autoFocus: E, enforceFocus: x, restoreFocus: C, restoreFocusOptions: R, onEscapeKeyDown: $t, onShow: h, onHide: b, onEnter: Tt, onEntering: De, onEntered: O, onExit: ce, onExiting: M, onExited: at, manager: ve(), transition: p ? Ui : void 0, backdropTransition: p ? _i : void 0, renderBackdrop: it, renderDialog: ct }) });
});
Oo.displayName = "Modal";
const ac = Object.assign(Oo, { Body: xo, Header: Co, Title: Ro, Footer: Eo, Dialog: wn, TRANSITION_DURATION: 300, BACKDROP_TRANSITION_DURATION: 150 }), Vi = () => {
};
function qi(e, t, { disabled: n, clickTrigger: r } = {}) {
  const o = t || Vi;
  Pr(e, o, { disabled: n, clickTrigger: r });
  const s = U((a) => {
    ar(a) && o(a);
  });
  i.useEffect(() => {
    if (n || e == null) return;
    const a = He(pt(e));
    let c = (a.defaultView || window).event;
    const u = le(a, "keyup", (l) => {
      if (l === c) {
        c = void 0;
        return;
      }
      s(l);
    });
    return () => {
      u();
    };
  }, [e, n, s]);
}
const $o = i.forwardRef((e, t) => {
  const { flip: n, offset: r, placement: o, containerPadding: s, popperConfig: a = {}, transition: c, runTransition: u } = e, [l, f] = Kt(), [d, p] = Kt(), v = Ot(f, t), g = Jt(e.container), y = Jt(e.target), [h, b] = i.useState(!e.show), w = Ir(y, l, Wr({ placement: o, enableEvents: !!e.show, containerPadding: s || 5, flip: n, offset: r, arrowElement: d, popperConfig: a }));
  e.show && h && b(false);
  const E = (...j) => {
    b(true), e.onExited && e.onExited(...j);
  }, x = e.show || !h;
  if (qi(l, e.onHide, { disabled: !e.rootClose || e.rootCloseDisabled, clickTrigger: e.rootCloseEvent }), !x) return null;
  const { onExit: C, onExiting: R, onEnter: O, onEntering: N, onEntered: M } = e;
  let D = e.children(Object.assign({}, w.attributes.popper, { style: w.styles.popper, ref: v }), { popper: w, placement: o, show: !!e.show, arrowProps: Object.assign({}, w.attributes.arrow, { style: w.styles.arrow, ref: p }) });
  return D = Zt(c, u, { in: !!e.show, appear: true, mountOnEnter: true, unmountOnExit: true, children: D, onExit: C, onExiting: R, onExited: E, onEnter: O, onEntering: N, onEntered: M }), g ? Te.createPortal(D, g) : null;
});
$o.displayName = "Overlay";
const To = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "popover-header"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
To.displayName = "PopoverHeader";
const xn = i.forwardRef(({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (t = T(t, "popover-body"), m.jsx(n, { ref: o, className: $(e, t), ...r })));
xn.displayName = "PopoverBody";
function jo(e, t) {
  let n = e;
  return e === "left" ? n = t ? "end" : "start" : e === "right" && (n = t ? "start" : "end"), n;
}
function No(e = "absolute") {
  return { position: e, top: "0", left: "0", opacity: "0", pointerEvents: "none" };
}
const Ki = i.forwardRef(({ bsPrefix: e, placement: t = "right", className: n, style: r, children: o, body: s, arrowProps: a, hasDoneInitialMeasure: c, popper: u, show: l, ...f }, d) => {
  const p = T(e, "popover"), v = yt(), [g] = (t == null ? void 0 : t.split("-")) || [], y = jo(g, v);
  let h = r;
  return l && !c && (h = { ...r, ...No(u == null ? void 0 : u.strategy) }), m.jsxs("div", { ref: d, role: "tooltip", style: h, "x-placement": g, className: $(n, p, g && `bs-popover-${y}`), ...f, children: [m.jsx("div", { className: "popover-arrow", ...a }), s ? m.jsx(xn, { children: o }) : o] });
}), Gi = Object.assign(Ki, { Header: To, Body: xn, POPPER_OFFSET: [0, 8] }), So = i.forwardRef(({ bsPrefix: e, placement: t = "right", className: n, style: r, children: o, arrowProps: s, hasDoneInitialMeasure: a, popper: c, show: u, ...l }, f) => {
  e = T(e, "tooltip");
  const d = yt(), [p] = (t == null ? void 0 : t.split("-")) || [], v = jo(p, d);
  let g = r;
  return u && !a && (g = { ...r, ...No(c == null ? void 0 : c.strategy) }), m.jsxs("div", { ref: f, style: g, role: "tooltip", "x-placement": p, className: $(n, e, `bs-tooltip-${v}`), ...l, children: [m.jsx("div", { className: "tooltip-arrow", ...s }), m.jsx("div", { className: `${e}-inner`, children: o })] });
});
So.displayName = "Tooltip";
const Xi = Object.assign(So, { TOOLTIP_OFFSET: [0, 6] });
function zi(e) {
  const t = i.useRef(null), n = T(void 0, "popover"), r = T(void 0, "tooltip"), o = i.useMemo(() => ({ name: "offset", options: { offset: () => {
    if (e) return e;
    if (t.current) {
      if (Qt(t.current, n)) return Gi.POPPER_OFFSET;
      if (Qt(t.current, r)) return Xi.TOOLTIP_OFFSET;
    }
    return [0, 0];
  } } }), [e, n, r]);
  return [t, [o]];
}
function Yi(e, t) {
  const { ref: n } = e, { ref: r } = t;
  e.ref = n.__wrapped || (n.__wrapped = (o) => n(vt(o))), t.ref = r.__wrapped || (r.__wrapped = (o) => r(vt(o)));
}
const ko = i.forwardRef(({ children: e, transition: t = Se, popperConfig: n = {}, rootClose: r = false, placement: o = "top", show: s = false, ...a }, c) => {
  const u = i.useRef({}), [l, f] = i.useState(null), [d, p] = zi(a.offset), v = _e(c, d), g = t === true ? Se : t || void 0, y = Le((h) => {
    f(h), n == null || n.onFirstUpdate == null || n.onFirstUpdate(h);
  });
  return no(() => {
    l && a.target && (u.current.scheduleUpdate == null || u.current.scheduleUpdate());
  }, [l, a.target]), i.useEffect(() => {
    s || f(null);
  }, [s]), m.jsx($o, { ...a, ref: v, popperConfig: { ...n, modifiers: p.concat(n.modifiers || []), onFirstUpdate: y }, transition: g, rootClose: r, placement: o, show: s, children: (h, { arrowProps: b, popper: w, show: E }) => {
    var x;
    Yi(h, b);
    const C = w == null ? void 0 : w.placement, R = Object.assign(u.current, { state: w == null ? void 0 : w.state, scheduleUpdate: w == null ? void 0 : w.update, placement: C, outOfBoundaries: (w == null || (x = w.state) == null || (x = x.modifiersData.hide) == null ? void 0 : x.isReferenceHidden) || false, strategy: n.strategy }), O = !!l;
    return typeof e == "function" ? e({ ...h, placement: C, show: E, ...!t && E && { className: "show" }, popper: R, arrowProps: b, hasDoneInitialMeasure: O }) : i.cloneElement(e, { ...h, placement: C, arrowProps: b, popper: R, hasDoneInitialMeasure: O, className: $(e.props.className, !t && E && "show"), style: { ...e.props.style, ...h.style } });
  } });
});
ko.displayName = "Overlay";
function Ji(e) {
  return e && typeof e == "object" ? e : { show: e, hide: e };
}
function Qn(e, t, n) {
  const [r] = t, o = r.currentTarget, s = r.relatedTarget || r.nativeEvent[n];
  (!s || s !== o) && !Qe(o, s) && e(...t);
}
ne.oneOf(["click", "hover", "focus"]);
const ic = ({ trigger: e = ["hover", "focus"], overlay: t, children: n, popperConfig: r = {}, show: o, defaultShow: s = false, onToggle: a, delay: c, placement: u, flip: l = u && u.indexOf("auto") !== -1, ...f }) => {
  const d = i.useRef(null), p = _e(d, nt(n)), v = js(), g = i.useRef(""), [y, h] = tr(o, s, a), b = Ji(c), { onFocus: w, onBlur: E, onClick: x } = typeof n != "function" ? i.Children.only(n).props : {}, C = (L) => {
    p(vt(L));
  }, R = i.useCallback(() => {
    if (v.clear(), g.current = "show", !b.show) {
      h(true);
      return;
    }
    v.set(() => {
      g.current === "show" && h(true);
    }, b.show);
  }, [b.show, h, v]), O = i.useCallback(() => {
    if (v.clear(), g.current = "hide", !b.hide) {
      h(false);
      return;
    }
    v.set(() => {
      g.current === "hide" && h(false);
    }, b.hide);
  }, [b.hide, h, v]), N = i.useCallback((...L) => {
    R(), w == null ? void 0 : w(...L);
  }, [R, w]), M = i.useCallback((...L) => {
    O(), E == null ? void 0 : E(...L);
  }, [O, E]), D = i.useCallback((...L) => {
    h(!y), x == null ? void 0 : x(...L);
  }, [x, h, y]), j = i.useCallback((...L) => {
    Qn(R, L, "fromElement");
  }, [R]), S = i.useCallback((...L) => {
    Qn(O, L, "toElement");
  }, [O]), k = e == null ? [] : [].concat(e), F = { ref: C };
  return k.indexOf("click") !== -1 && (F.onClick = D), k.indexOf("focus") !== -1 && (F.onFocus = N, F.onBlur = M), k.indexOf("hover") !== -1 && (F.onMouseOver = j, F.onMouseOut = S), m.jsxs(m.Fragment, { children: [typeof n == "function" ? n(F) : i.cloneElement(n, F), m.jsx(ko, { ...f, show: y, onHide: O, flip: l, placement: u, popperConfig: r, target: d.current, children: t })] });
}, Zi = i.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
  const s = T(e, "row"), a = rr(), c = or(), u = `${s}-cols`, l = [];
  return a.forEach((f) => {
    const d = r[f];
    delete r[f];
    let p;
    d != null && typeof d == "object" ? { cols: p } = d : p = d;
    const v = f !== c ? `-${f}` : "";
    p != null && l.push(`${u}${v}-${p}`);
  }), m.jsx(n, { ref: o, ...r, className: $(t, s, ...l) });
});
Zi.displayName = "Row";
const cc = i.forwardRef(({ bsPrefix: e, className: t, striped: n, bordered: r, borderless: o, hover: s, size: a, variant: c, responsive: u, ...l }, f) => {
  const d = T(e, "table"), p = $(t, d, c && `${d}-${c}`, a && `${d}-${a}`, n && `${d}-${typeof n == "string" ? `striped-${n}` : "striped"}`, r && `${d}-bordered`, o && `${d}-borderless`, s && `${d}-hover`), v = m.jsx("table", { ...l, className: p, ref: f });
  if (u) {
    let g = `${d}-responsive`;
    return typeof u == "string" && (g = `${g}-${u}`), m.jsx("div", { className: g, children: v });
  }
  return v;
});
export {
  nc as A,
  Cs as B,
  rc as C,
  oc as D,
  sc as F,
  ac as M,
  ic as O,
  Zi as R,
  cc as T,
  mr as a,
  jr as b,
  ks as c,
  Xi as d,
  m as j,
  i as r
};
