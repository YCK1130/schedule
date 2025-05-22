import { j as e } from "./bootstrap-ui-DwpW4YAL.js";
import "./react-vendor-Csw2ODfV.js";
const c = ({ isScheduleView: s = false }) => {
  const a = s ? [{ level: 0, text: "\u7121\u9762\u8A66" }, { level: 3, text: "\u5DF2\u6392\u7A0B\u9762\u8A66: \u59D3\u540D(\u8077)" }] : [{ level: 0, text: "\u672A\u6392\u7A0B" }];
  return e.jsxs("div", { className: "calendar-legend", children: [e.jsx("span", { className: "legend-title", children: "\u5716\u4F8B\uFF1A" }), a.map((l) => e.jsxs("div", { className: "legend-item", children: [e.jsx("span", { className: `legend-color availability-level-${l.level}` }), e.jsx("span", { className: "legend-text", children: l.text })] }, l.level))] });
};
export {
  c as default
};
