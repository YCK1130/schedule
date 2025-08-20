const C = (s, n = "\u6240\u6709") => {
  const t = s.filter((o) => o.targetPosition === n);
  let e = 1, r = 1e6;
  return t.length === 0 ? { min: e, max: r, conflict: false } : (t.forEach((o) => {
    const a = o.minCount, c = o.maxCount;
    e = Math.max(e, a), r = Math.min(r, c);
  }), { min: e, max: r, conflict: r < e });
}, R = (s) => {
  const n = /* @__PURE__ */ new Map();
  let t = "";
  for (const e in s) {
    const r = s[e];
    for (const o of r) {
      const { targetPosition: a } = o;
      if (!n.has(a)) {
        const c = C(s[e], a);
        if (c.conflict) {
          t = `${t}; ${e}:${a} \u689D\u4EF6\u8A2D\u7F6E\u885D\u7A81`;
          continue;
        }
        n.set(`${e}:${a}`, { min: c.min, max: c.max });
      }
    }
  }
  return t.length === 0 ? { valid: true, reason: "\u7121\u885D\u7A81", conflict: false, results: n } : (t = t.slice(2), { valid: false, reason: t, conflict: true, results: {} });
}, Y = (s, n, t, e) => {
  var _a, _b;
  const r = k(e, n), o = [...n].sort((d, w) => {
    const T = r.get(d.id) || 0, g = r.get(w.id) || 0;
    return T !== g ? T - g : d.availability.length - w.availability.length;
  }), a = [...t].sort((d, w) => d.availability.length - w.availability.length), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  s = new Map(s);
  let i = n.length, f = t.length;
  s.has("interviewers:\u6240\u6709") || s.set("interviewers:\u6240\u6709", { min: 1, max: 1e6 }), s.has("interviewees:\u6240\u6709") || s.set("interviewees:\u6240\u6709", { min: 1, max: 1e6 });
  let m = false, p = { valid: false, reason: "", interviewers: [], interviewees: [] };
  if (s.forEach((d, w) => {
    if (m) return;
    const [T, g] = w.split(":"), { min: v, max: b } = d;
    if (T === "interviewers") {
      const $ = o.filter((I) => I.position === g || g === "\u6240\u6709"), M = Math.min($.length, b);
      M < v ? (m = true, p = { valid: false, reason: `\u9762\u8A66\u5B98 ${g} \u6578\u91CF\u4E0D\u5408, ${M} < ${v}`, interviewers: [], interviewees: [] }) : g !== "\u6240\u6709" ? c.set(g, $.slice(0, M)) : i = v;
    } else if (T === "interviewees") {
      const $ = a.filter((I) => I.position === g || g === "\u6240\u6709"), M = Math.min($.length, b);
      M < v ? (m = true, p = { valid: false, reason: `\u61C9\u8A66\u8005 ${g} \u6578\u91CF\u4E0D\u5408, ${M} < ${v}`, interviewers: [], interviewees: [] }) : g !== "\u6240\u6709" ? l.set(g, $.slice(0, M)) : f = M;
    }
  }), m) return p;
  const h = [...c.entries()].reduce((d, w) => [...d, ...w[1]], []), D = [...l.entries()].reduce((d, w) => [...d, ...w[1]], []);
  let u = 0;
  for (; h.length < i; ) {
    if (u >= n.length) return { valid: false, reason: "\u9762\u8A66\u5B98\u6578\u91CF\u4E0D\u5408", interviewers: [], interviewees: [] };
    if (h.includes(n[u]) || c.has(`${(_a = n[u]) == null ? void 0 : _a.position}`)) {
      u++;
      continue;
    }
    h.push(n[u]);
  }
  for (u = 0; D.length < f; ) {
    if (u >= t.length) return { valid: false, reason: "\u61C9\u8A66\u8005\u6578\u91CF\u4E0D\u5408", interviewers: [], interviewees: [] };
    if (D.includes(t[u]) || l.has(`${(_b = n[u]) == null ? void 0 : _b.position}`)) {
      u++;
      continue;
    }
    D.push(t[u]);
  }
  return { valid: true, reason: "", interviewers: h, interviewees: D };
}, y = (s) => {
  const [n, t] = s.split("/");
  return { start: new Date(n), end: new Date(t) };
}, A = (s, n) => {
  try {
    const t = y(s), e = y(n);
    return t.start.getFullYear() === e.start.getFullYear() && t.start.getMonth() === e.start.getMonth() && t.start.getDate() === e.start.getDate() && t.start < e.end && e.start < t.end;
  } catch (t) {
    return console.error("\u89E3\u6790\u6642\u9593\u6BB5\u5931\u6557:", s, n, t), false;
  }
}, B = (s, n) => {
  try {
    const t = y(s), e = y(n);
    return t.start.getFullYear() === e.start.getFullYear() && t.start.getMonth() === e.start.getMonth() && t.start.getDate() === e.start.getDate() && t.start === e.start && e.end === t.end;
  } catch (t) {
    return console.error("\u89E3\u6790\u6642\u9593\u6BB5\u5931\u6557:", s, n, t), false;
  }
}, j = (s, n, t) => {
  if (!Array.isArray(s.availability)) return console.warn(`\u9762\u8A66\u5B98 ${s.name} \u7684\u53EF\u7528\u6642\u6BB5\u4E0D\u662F\u6709\u6548\u7684\u9663\u5217`, s.availability), false;
  const e = s.availability.some((a) => A(a, n) || B(a, n)), r = "specialization" in s;
  return !e || !r && s.select_count && s.select_count > 0 ? false : !t.some((a) => {
    const c = `${a.startTime}/${a.endTime}`;
    return A(c, n) && (r ? a.interviewers.map((i) => i.id).includes(s.id) : a.interviewers.map((i) => i.id).includes(s.id));
  });
}, N = (s, n) => {
  const t = /* @__PURE__ */ new Set();
  return s.forEach((e) => {
    const r = e.availability;
    if (!Array.isArray(r)) return console.warn(`\u9762\u8A66\u5B98 ${e.name} \u7684\u53EF\u7528\u6642\u6BB5\u4E0D\u662F\u6709\u6548\u7684\u9663\u5217`, e.availability), false;
    r.forEach((o) => {
      typeof o == "string" && o.includes("/") && t.add(o.trim());
    });
  }), n.forEach((e) => {
    const r = e.availability;
    if (!Array.isArray(r)) return console.warn(`\u61C9\u8A66\u8005 ${e.name} \u7684\u53EF\u7528\u6642\u6BB5\u4E0D\u662F\u6709\u6548\u7684\u9663\u5217`, e.availability), false;
    r.forEach((o) => {
      typeof o == "string" && o.includes("/") && t.add(o.trim());
    });
  }), Array.from(t);
}, k = (s, n) => {
  const t = /* @__PURE__ */ new Map();
  return n.forEach((e) => {
    t.set(e.id, 0);
  }), s.forEach((e) => {
    e.interviewers.map((r) => r.id).forEach((r) => {
      const o = t.get(r) || 0;
      t.set(r, o + 1);
    });
  }), t;
}, W = (s) => s ? (s = x(s), s.split(",").map((t) => t.trim()).flatMap((t) => {
  if (t.includes("/") && t.includes("T")) {
    const [i, f] = t.split("/"), m = new Date(i), p = new Date(f);
    return (p.getTime() - m.getTime()) / (1e3 * 60 * 60) > 1 ? H(m, p) : [t];
  }
  const e = ["-", "~", "\uFF5E", "\uFF0D"], r = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], o = [["\uFF08", "\uFF09"], ["(", ")"]];
  let a = "", c = "", l = t;
  for (const [i, f] of o) if (l.includes(i) && l.includes(f)) {
    const m = l.split(i);
    if (m.length > 1) {
      const h = m[1].split(f);
      h.length > 1 && (l = m[0] + h.slice(1).join(f));
    }
    break;
  }
  for (const i of r) if (l.includes(i)) {
    l = l.replace(i, "").trim();
    break;
  }
  l = l.replace(/\s+/g, " ").trim();
  for (const i of e) if (l.includes(i)) {
    [a, c] = l.split(i).map((f) => f.trim());
    break;
  }
  if (a && c) try {
    const i = a.split(" "), f = i[0], m = i[1] || "00:00", p = (/* @__PURE__ */ new Date()).getFullYear(), [h, D] = f.split("/"), u = new Date(p, parseInt(h) - 1, parseInt(D)), [d, w] = m.split(":");
    u.setHours(parseInt(d), parseInt(w), 0, 0);
    const T = new Date(u), [g, v] = c.split(":");
    return T.setHours(parseInt(g), parseInt(v), 0, 0), T <= u && parseInt(g) < parseInt(d) && T.setDate(T.getDate() + 1), (T.getTime() - u.getTime()) / (1e3 * 60 * 60) > 1 ? H(u, T) : [`${S(u)}/${S(T)}`];
  } catch (i) {
    return console.error(`\u7121\u6CD5\u89E3\u6790\u6642\u9593\u683C\u5F0F: ${t}`, i), [];
  }
  return t.trim() === "" ? [] : [t];
}).filter(Boolean)) : [], S = (s) => s.toLocaleString("sv-SE").replace(" ", "T").substring(0, 19), H = (s, n) => {
  const t = [], e = new Date(s);
  for (e.setMinutes(0, 0, 0); e < n; ) {
    const r = new Date(e);
    if (r.setHours(r.getHours() + 1), r > n) break;
    t.push(`${S(e)}/${S(r)}`), e.setMinutes(r.getMinutes() + 60);
  }
  return t;
}, x = (s) => {
  if (!s) return "";
  let n = "";
  for (let t = 0; t < s.length; t++) {
    const e = s.charAt(t), r = s.charCodeAt(t);
    r >= 65296 && r <= 65305 ? n += String.fromCharCode(r - 65296 + 48) : r === 65306 ? n += ":" : r === 65295 ? n += "/" : n += e;
  }
  return n;
}, _ = (s, n) => {
  if (!s || !n) return { date: "", time: "" };
  const t = new Date(s), e = new Date(n), r = t.getMonth() + 1, o = t.getDate(), a = t.getHours().toString().padStart(2, "0"), c = t.getMinutes().toString().padStart(2, "0"), l = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0");
  return { date: `${r}/${o}`, time: `${a}:${c} ~ ${l}:${i}` };
}, O = (s, n) => {
  const t = [];
  for (let e = 0; e < n; e++) {
    const r = new Date(s);
    r.setDate(s.getDate() + e), t.push(r);
  }
  return t;
}, E = (s) => {
  const n = ["#4299E1B3", "#48BB78B3", "#ED8936B3", "#667EEAB3", "#ED64A6B3", "#F6AD55B3", "#81E6D9B3", "#9F7AEAB3"];
  return n[s % n.length];
}, P = (s, n) => {
  const t = [];
  for (let e = s; e <= n; e++) t.push(`${String(e).padStart(2, "0")}:00`), t.push(`${String(e).padStart(2, "0")}:30`);
  return t;
};
function F(s, n) {
  let t, e, r, o = 1;
  if (s.startsWith("#")) {
    let a = s.slice(1);
    a.length === 3 && (a = a.split("").map((c) => c + c).join("")), t = parseInt(a.substring(0, 2), 16), e = parseInt(a.substring(2, 4), 16), r = parseInt(a.substring(4, 6), 16);
  } else if (s.startsWith("rgb")) {
    const a = s.match(/rgba?\(([^)]+)\)/), c = (a ? a[1] : ",,").split(",").map((l) => parseFloat(l.trim()));
    [t, e, r] = c, c.length === 4 && (o = c[3]);
  } else throw new Error("Unsupported color format");
  return t = Math.min(255, Math.max(0, t + n)), e = Math.min(255, Math.max(0, e + n)), r = Math.min(255, Math.max(0, r + n)), o < 1 ? `rgba(${t}, ${e}, ${r}, ${o})` : `rgb(${t}, ${e}, ${r})`;
}
const U = (s) => {
  const n = /* @__PURE__ */ new Map();
  return s.forEach((t, e) => {
    const r = `${t.interviewees.map((o) => o.id).join("-")}-${t.startTime}`;
    n.set(r, F(E(Math.floor(Date.parse(t.startTime) / 997 / 101e5 + e)), 10 * (e % 10 - 5)));
  }), n;
}, X = (s, n, t, e) => {
  const [r, o] = n.split(":"), a = new Date(s);
  a.setHours(parseInt(r, 10), parseInt(o, 10), 0, 0);
  const c = a.getTime(), l = 30 * 60 * 1e3;
  return t.filter((i) => {
    const f = new Date(i.startTime), m = new Date(i.endTime);
    return c >= f.getTime() && c < m.getTime() && f.getDate() === a.getDate() && f.getMonth() === a.getMonth() && f.getFullYear() === a.getFullYear();
  }).map((i) => {
    const f = new Date(i.startTime), m = new Date(i.endTime), p = c === f.getTime(), h = c === m.getTime() - l, D = `${i.interviewees.map((d) => d.id).join("-")}-${i.startTime}`, u = e.get(D) || E(0);
    return { ...i, isStart: p, isEnd: h, color: u };
  });
}, K = (s, n, t, e) => {
  const [r, o] = n.split(":"), a = new Date(s);
  a.setHours(parseInt(r, 10), parseInt(o, 10), 0, 0);
  const c = a.getTime(), l = 30 * 60 * 1e3;
  return t.map((i) => {
    const f = new Date(i.startTime), m = new Date(i.endTime), p = c === f.getTime(), h = c === m.getTime() - l, D = `${i.interviewees.map((d) => d.id).join("-")}-${i.startTime}`, u = e.get(D) || E(0);
    return { ...i, isStart: p, isEnd: h, color: u };
  });
};
export {
  R as a,
  W as b,
  Y as c,
  U as d,
  P as e,
  _ as f,
  N as g,
  O as h,
  j as i,
  X as j,
  K as k,
  y as p
};
