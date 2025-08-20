import { g as z, p as E, i as I, c as x } from "./utils-BzByH_MT.js";
const C = (g, b, f, s) => {
  const r = { interviewers: [], interviewees: [], reasons: [] }, o = [], v = g.filter((t) => t.availability.length > 0), y = b.filter((t) => t.availability.length > 0), l = /* @__PURE__ */ new Map();
  if (v.forEach((t) => {
    l.set(t.id, 0);
  }), v.length === 0 || y.length === 0) return g.filter((t) => !t.availability || t.availability.length === 0).forEach((t) => {
    r.interviewers.push(t), r.reasons.push(`\u9762\u8A66\u5B98 ${t.name} \u6C92\u6709\u53EF\u7528\u6642\u6BB5`);
  }), b.filter((t) => !t.availability || t.availability.length === 0).forEach((t) => {
    r.interviewees.push(t), r.reasons.push(`\u61C9\u8A66\u8005 ${t.name} \u6C92\u6709\u53EF\u7528\u6642\u6BB5`);
  }), { interviews: o, unmatched: r };
  let w = z(g, b);
  s && s.initialized ? (console.debug("\u4F7F\u7528\u9810\u8655\u7406\u8CC7\u6599\u4F86\u6392\u5E8F\u6642\u9593\u6BB5"), w = w.sort((t, n) => {
    const m = $(t, s), c = $(n, s), d = ((m == null ? void 0 : m.availableInterviewers.length) || 0) + ((m == null ? void 0 : m.availableInterviewees.length) || 0), T = ((c == null ? void 0 : c.availableInterviewers.length) || 0) + ((c == null ? void 0 : c.availableInterviewees.length) || 0);
    if (d !== T) return d - T;
    const h = E(t).start, A = E(n).start;
    return h.getTime() - A.getTime();
  })) : w = w.sort((t, n) => {
    const m = v.filter((h) => I(h, t, o)).length + y.filter((h) => I(h, t, o)).length, c = v.filter((h) => I(h, n, o)).length + y.filter((h) => I(h, n, o)).length;
    if (m !== c) return m - c;
    const d = E(t).start, T = E(n).start;
    return d.getTime() - T.getTime();
  });
  const B = /* @__PURE__ */ new Set(), D = {};
  y.forEach((t) => {
    const n = t.position || "\u672A\u6307\u5B9A";
    D[n] || (D[n] = []), D[n].push(t);
  }), v.forEach((t) => {
    t.origin_availability && (t.availability = t.origin_availability);
  });
  for (const t in D) for (const n of w) {
    let m = [];
    if (s && s.initialized) {
      const i = $(n, s);
      i && (m = i.availableInterviewees.filter((e) => (e.position === t || t === "\u672A\u6307\u5B9A") && !B.has(e.id)));
    } else m = D[t].filter((e) => I(e, n, o) && !B.has(e.id));
    if (m.length === 0) continue;
    let c = [];
    if (s && s.initialized) {
      const i = $(n, s);
      i && (c = i.availableInterviewers.filter((e) => !o.some((a) => {
        const u = `${a.startTime}/${a.endTime}`;
        return S(u, n) && a.interviewers.some((p) => p.id === e.id);
      })), c.sort((e, a) => {
        const u = l.get(e.id) || 0, p = l.get(a.id) || 0;
        return u - p;
      }));
    } else c = v.filter((i) => I(i, n, o)), c.sort((i, e) => {
      const a = l.get(i.id) || 0, u = l.get(e.id) || 0;
      return a - u;
    });
    const d = x(f, c, m, o);
    if (!d.valid) {
      r.reasons.push(d.reason);
      continue;
    }
    const [T, h] = n.split("/"), A = { interviewers: d.interviewers.map((i) => ({ id: i.id, name: i.name, position: i.position })), interviewees: d.interviewees.map((i) => ({ id: i.id, name: i.name, position: i.position })), startTime: T, endTime: h };
    o.push(A), d.interviewees.forEach((i) => {
      B.add(i.id);
    }), d.interviewers.forEach((i) => {
      const e = l.get(i.id) || 0;
      l.set(i.id, e + 1), Array.isArray(i.availability) && (i.availability = i.availability.filter((a) => !S(a, n)));
    });
  }
  for (const t of o) {
    const n = t.interviewers.map((e) => e.id), m = `${t.startTime}/${t.endTime}`;
    let c = [];
    if (s && s.initialized) {
      const e = $(m, s);
      e && (c = e.availableInterviewers.filter((a) => !n.includes(a.id) && !o.some((u) => {
        if (u === t) return false;
        const p = `${u.startTime}/${u.endTime}`;
        return S(p, m) && u.interviewers.some((M) => M.id === a.id);
      })));
    } else c = v.filter((e) => I(e, m, o.filter((a) => a !== t)) && !n.includes(e.id));
    const d = Array.from(f.keys()).map((e) => e.split(":")[1]).filter((e) => e !== "\u6240\u6709"), T = c.sort((e, a) => {
      const u = l.get(e.id) || 0, p = l.get(a.id) || 0;
      return u !== p ? u - p : e.availability.length - a.availability.length;
    }), { max: h } = f.get("interviewers:\u6240\u6709") || { max: 100 }, A = T.filter((e) => !d.includes(`${e.position}`)), i = Math.min(A.length + n.length, h) - n.length;
    if (i > 0) {
      const e = T.slice(0, i);
      t.interviewers.push(...e.map((a) => ({ id: a.id, name: a.name, position: a.position }))), e.forEach((a) => {
        const u = l.get(a.id) || 0;
        l.set(a.id, u + 1);
      });
    }
  }
  const F = y.filter((t) => !B.has(t.id));
  return F.forEach((t) => {
    r.interviewees.includes(t) || (r.interviewees.push(t), r.reasons.push(`\u7121\u6CD5\u70BA\u61C9\u8A66\u8005 ${t.name} \u627E\u5230\u7B26\u5408\u9650\u5236\u689D\u4EF6\u7684\u6642\u6BB5`));
  }), { interviews: o.map((t, n) => ({ ...t, id: n + 1 })), unmatched: { interviewers: v, interviewees: F, reasons: r.reasons } };
};
function S(g, b) {
  try {
    const [f, s] = g.split("/"), [r, o] = b.split("/"), v = new Date(f), y = new Date(s), l = new Date(r), w = new Date(o);
    return v < w && l < y;
  } catch (f) {
    return console.error("\u89E3\u6790\u6642\u9593\u6BB5\u5931\u6557:", g, b, f), false;
  }
}
function $(g, b) {
  try {
    const [f] = g.split("/"), s = new Date(f), r = s.getFullYear(), o = String(s.getMonth() + 1).padStart(2, "0"), v = String(s.getDate()).padStart(2, "0"), y = String(s.getHours()).padStart(2, "0"), l = String(Math.round(s.getMinutes() / 30) * 30).padStart(2, "0"), w = `${r}-${o}-${v}-${y}-${l}`;
    return b.byDateAndTime.get(w);
  } catch (f) {
    return console.error("\u5F9E\u9810\u8655\u7406\u8CC7\u6599\u7372\u53D6\u6642\u9593\u6BB5\u8CC7\u6599\u5931\u6557:", g, f), null;
  }
}
function P(g, b, f, s) {
  try {
    const { interviews: r, unmatched: o } = C(g, b, f, s);
    return { interviews: r, unmatched: o };
  } catch (r) {
    return console.error("\u6392\u7A0B\u904E\u7A0B\u4E2D\u767C\u751F\u932F\u8AA4\uFF1A", r), { interviews: [], unmatched: { interviewers: g, interviewees: b, reasons: ["\u6392\u7A0B\u904E\u7A0B\u767C\u751F\u932F\u8AA4"] } };
  }
}
export {
  P as s
};
