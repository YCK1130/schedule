import { j as r } from "./bootstrap-ui-DwpW4YAL.js";
import { u as D } from "./index-V5tylbtI.js";
import "./react-vendor-Csw2ODfV.js";
import "./scheduler-algos-DuZM4aA3.js";
import "./utils-ClevuSU5.js";
const g = () => {
  const { displayInfo: { startDate: o, daysToShow: n } } = D(), c = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], d = () => {
    const e = [], s = new Date(o);
    e.push({ key: "time", text: "\u6642\u9593" });
    for (let a = 0; a < n; a++) {
      const t = new Date(s);
      t.setDate(s.getDate() + a);
      const i = t.getMonth() + 1, m = t.getDate(), l = c[t.getDay()];
      e.push({ key: t.toISOString(), text: `${i}/${m} (${l})` });
    }
    return e;
  };
  return r.jsx("div", { className: "calendar-header", children: d().map((e) => r.jsx("div", { className: "calendar-header-cell", children: e.text }, e.key)) });
};
export {
  g as default
};
