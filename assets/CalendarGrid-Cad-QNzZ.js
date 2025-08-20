import { j as e, r as f, O as C, d as S } from "./bootstrap-ui-DwpW4YAL.js";
import { u as k } from "./index-BUAvLUxd.js";
import { d as M, e as R, h as L, j as O, k as P } from "./utils-BzByH_MT.js";
import "./react-vendor-Csw2ODfV.js";
import "./scheduler-algos-DnAxBYCb.js";
const W = ({ availability: a }) => {
  const { interviewersNum: s, intervieweesNum: h } = a;
  return e.jsx("div", { className: "calendar-time-slot", children: e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", justifyContent: "start", width: "100%" }, children: [s > 0 && e.jsxs("div", { style: { color: "#4E6688" }, children: ["\u9762\u8A66\u5B98: ", s] }), h > 0 && e.jsxs("div", { style: { color: "#DDA853" }, children: ["\u61C9\u8A66\u8005: ", h] })] }) });
}, F = ({ availability: a }) => {
  const { interview: s } = a;
  if (!s || s.length === 0) return null;
  const h = `ScheduleTimeSlot-${s[0].startTime}-${s[0].endTime}`;
  return e.jsx("div", { className: `calendar-time-slot ${s[0].isStart ? "pt-2" : s[0].isEnd ? "pb-2" : ""}`, children: s.map((l) => {
    let o = null;
    return l.isStart ? o = { borderRadius: "2px 2px 0 0" } : l.isEnd && (o = { borderRadius: "0 0 2px 2px" }), o = { ...o, backgroundColor: `${l.color}` }, e.jsx("div", { className: "interview-block mx-2", style: o }, `${h}-interview-block-${l.colorIndex}-${l.color}`);
  }) }, `${h}-calendar-time-slot`);
}, G = ({ availability: a, showSchedule: s = false }) => e.jsx(e.Fragment, { children: s ? e.jsx(F, { availability: a }) : e.jsx(W, { availability: a }) }), J = () => {
  const { unmatchedResults: a, viewMode: s, displayInfo: { startDate: h, daysToShow: l, earliestTime: o, latestTime: y }, getSlotData: T, scheduledInterviews: N, loading: A } = k(), I = f.useMemo(() => M(N), [N]), b = f.useMemo(() => R(o, y), [o, y]), g = (t, r) => {
    const [v, j] = r.split(":"), d = parseInt(v, 10), u = parseInt(j, 10), p = T(t, d, u);
    if (!p) return { interviewersNum: 0, intervieweesNum: 0, interviewersNames: "", intervieweesNames: "" };
    const { availableInterviewers: c, availableInterviewees: w, scheduledInterviews: i } = p;
    let n = c, $ = w;
    if (s === "unmatched" && a) {
      const m = new Set(a.interviewers.map((x) => x.id)), E = new Set(a.interviewees.map((x) => x.id));
      n = c.filter((x) => m.has(x.id)), $ = w.filter((x) => E.has(x.id));
    }
    return s === "scheduled" && i && i.length > 0 ? { interview: O(t, r, i, I), interviewersNum: 0, intervieweesNum: 0, interviewersNames: "", intervieweesNames: "" } : { interviewersNum: n.length, intervieweesNum: $.length, interviewersNames: n.map((m) => {
      var _a;
      return `${m.name} (${((_a = m.position) == null ? void 0 : _a.charAt(0)) || "N/A"})`;
    }).join(", "), intervieweesNames: $.map((m) => {
      var _a;
      return `${m.name} (${((_a = m.position) == null ? void 0 : _a.charAt(0)) || "N/A"})`;
    }).join(", ") };
  }, D = (t, r) => {
    const [v, j] = r.split(":"), d = parseInt(v, 10), u = parseInt(j, 10), p = T(t, d, u);
    let { scheduledInterviews: c } = p || { scheduledInterviews: [] };
    c || (c = []);
    const w = P(t, r, c, I);
    return s === "scheduled" && c.length >= 0 && w.length === 0 ? e.jsx(S, { children: e.jsx("div", { style: { display: "none" } }, `${t}-tooltip`) }) : e.jsx(S, { className: "availability-tooltip", children: e.jsx("div", { className: "tooltip-content", children: s === "scheduled" && c.length > 0 ? w.map((i) => e.jsx("div", { className: "interview-details", children: e.jsxs("div", { className: "interview-slot", style: { borderLeft: `3px solid ${i.color}`, margin: "8px 0", padding: "8px", color: "#000" }, children: [e.jsxs("span", { className: "interview-time", children: ["\u9762\u8A66\u7DE8\u865F\uFF1A", i.id] }), e.jsx("div", { className: "interview-details", children: e.jsxs("p", { children: [e.jsx("strong", { children: "\u9762\u8A66\u5B98\uFF1A" }), i.interviewers.map((n) => {
      var _a;
      return `${n.name} (${((_a = n.position) == null ? void 0 : _a.charAt(0)) || "N/A"})`;
    }).join(", ")] }) }, `${i.interviewees.map((n) => n.id)[0]}-${i.startTime}-interview-details`), e.jsx("div", { className: "interview-details", children: e.jsxs("p", { children: [e.jsx("strong", { children: "\u61C9\u8A66\u8005\uFF1A" }), i.interviewees.map((n) => {
      var _a;
      return `${n.name} (${((_a = n.position) == null ? void 0 : _a.charAt(0)) || "N/A"})`;
    }).join(", ")] }) })] }, `${i.interviewees[0].id}-${i.startTime}-interview-slot`) }, `${i.interviewees[0].id}-${i.startTime}-interview-details`)) : e.jsxs("div", { children: [e.jsxs("p", { children: [e.jsx("strong", { children: "\u9762\u8A66\u5B98\uFF1A" }), " ", g(t, r).interviewersNames || "\u7121"] }), e.jsxs("p", { children: [e.jsx("strong", { children: "\u61C9\u8A66\u8005\uFF1A" }), " ", g(t, r).intervieweesNames || "\u7121"] })] }, `${t}-tooltip`) }) });
  };
  return f.useLayoutEffect(() => {
    document.documentElement.style.setProperty("--calendar-grid-num", `${l}`);
  }, [l]), e.jsxs("div", { className: "calendar-grid", children: [e.jsx("div", { className: "time-column", children: b.filter((t, r) => r % 2 === 0).map((t) => e.jsx("div", { className: "time-header", children: t }, `header-${t}`)) }), A ? e.jsxs("div", { className: "loading-container", children: [e.jsx("div", { className: "spinner" }), e.jsx("h3", { className: "loading-text", children: "\u8CC7\u6599\u9810\u8655\u7406\u4E2D..." })] }) : L(h, l).map((t, r) => e.jsx("div", { className: "day-column", children: b.map((v, j) => {
    let d = v, u = s === "scheduled" && N.length > 0;
    v.endsWith(":30") && !u && (d = d.replace(":30", ":00"));
    const p = g(t, u ? v : d);
    return e.jsx(C, { placement: "auto", delay: { show: 50, hide: 100 }, overlay: D(t, d), children: e.jsx("div", { className: "time-slot-wrapper", children: e.jsx(G, { availability: p, showSchedule: u }) }, `slot-${r}-${j}`) }, `overlay-${r}-${j}`);
  }) }, `column-${r}`))] });
};
export {
  J as default
};
