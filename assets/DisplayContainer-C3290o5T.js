const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CalendarHeader-ClmHwYkJ.js","assets/bootstrap-ui-DwpW4YAL.js","assets/react-vendor-Csw2ODfV.js","assets/index-BUAvLUxd.js","assets/scheduler-algos-DnAxBYCb.js","assets/utils-BzByH_MT.js","assets/index-wVXifvhx.css","assets/CalendarGrid-Cad-QNzZ.js","assets/CalendarLegend-CHTpk66n.js"])))=>i.map(i=>d[i]);
import { j as e, B as G, a as g, r as C, C as E, D as T, M as j, F as M, A as X, T as P, R as $, b as H, c as I } from "./bootstrap-ui-DwpW4YAL.js";
import { u as z, _ as U, __tla as __tla_0 } from "./index-BUAvLUxd.js";
import { c as R } from "./react-vendor-Csw2ODfV.js";
import { P as B } from "./papaparse.min-C2_IRGyt.js";
import { u as y, w as W } from "./xlsx-BkaySFav.js";
import { f as N } from "./utils-BzByH_MT.js";
import "./scheduler-algos-DnAxBYCb.js";
let pe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const K = C.lazy(() => U(() => import("./CalendarHeader-ClmHwYkJ.js"), __vite__mapDeps([0,1,2,3,4,5,6]))), J = C.lazy(() => U(() => import("./CalendarGrid-Cad-QNzZ.js"), __vite__mapDeps([7,1,2,3,4,5,6]))), Q = C.lazy(() => U(() => import("./CalendarLegend-CHTpk66n.js"), __vite__mapDeps([8,1,2]))), Y = () => e.jsxs("div", {
    className: "loading-container",
    style: {
      gridColumn: "1 / -1",
      height: "200px"
    },
    children: [
      e.jsx("div", {
        className: "spinner"
      }),
      e.jsx("h3", {
        className: "loading-text",
        children: "\u65E5\u66C6\u8F09\u5165\u4E2D..."
      })
    ]
  }), Z = () => {
    const { scheduledInterviews: d, unmatchedResults: c, viewMode: m, loading: p, setViewMode: l } = z();
    return e.jsxs("div", {
      className: "calendar-container",
      children: [
        e.jsxs("div", {
          className: "calendar-header-section d-flex justify-content-between align-items-center",
          children: [
            e.jsx("h5", {
              className: "m-0",
              children: d.length > 0 ? "\u9762\u8A66\u6642\u9593\u8868" : "\u53EF\u7528\u6642\u6BB5\u7E3D\u89BD"
            }),
            d.length > 0 && c && c.interviewees.length > 0 && e.jsxs(G, {
              size: "sm",
              children: [
                e.jsx(g, {
                  variant: m === "scheduled" ? "primary" : "outline-primary",
                  onClick: () => l("scheduled"),
                  children: "\u5DF2\u6392\u7A0B"
                }),
                e.jsxs(g, {
                  variant: m === "unmatched" ? "primary" : "outline-primary",
                  onClick: () => l("unmatched"),
                  children: [
                    "\u672A\u6392\u7A0B (",
                    c.interviewees.length,
                    ")"
                  ]
                })
              ]
            })
          ]
        }),
        e.jsx("div", {
          className: "calendar-main",
          children: e.jsx("div", {
            className: "calendar-view",
            children: e.jsx("div", {
              className: `calendar-scroll-container ${p ? "no-scroll" : ""}`,
              children: e.jsxs(C.Suspense, {
                fallback: e.jsx(Y, {}),
                children: [
                  e.jsx(K, {}),
                  e.jsx(J, {})
                ]
              })
            })
          })
        }),
        e.jsx("div", {
          className: "calendar-footer",
          children: e.jsx(C.Suspense, {
            fallback: e.jsx("div", {
              className: "p-2",
              children: "\u8F09\u5165\u4E2D..."
            }),
            children: e.jsx(Q, {
              isScheduleView: m === "scheduled" && d.length > 0
            })
          })
        })
      ]
    });
  };
  var L = {
    exports: {}
  }, ee = L.exports, V;
  function te() {
    return V || (V = 1, function(d, c) {
      (function(m, p) {
        p();
      })(ee, function() {
        function m(n, s) {
          return typeof s > "u" ? s = {
            autoBom: false
          } : typeof s != "object" && (console.warn("Deprecated: Expected third argument to be a object"), s = {
            autoBom: !s
          }), s.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type) ? new Blob([
            "\uFEFF",
            n
          ], {
            type: n.type
          }) : n;
        }
        function p(n, s, i) {
          var a = new XMLHttpRequest();
          a.open("GET", n), a.responseType = "blob", a.onload = function() {
            o(a.response, s, i);
          }, a.onerror = function() {
            console.error("could not download file");
          }, a.send();
        }
        function l(n) {
          var s = new XMLHttpRequest();
          s.open("HEAD", n, false);
          try {
            s.send();
          } catch {
          }
          return 200 <= s.status && 299 >= s.status;
        }
        function x(n) {
          try {
            n.dispatchEvent(new MouseEvent("click"));
          } catch {
            var s = document.createEvent("MouseEvents");
            s.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), n.dispatchEvent(s);
          }
        }
        var h = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof R == "object" && R.global === R ? R : void 0, u = h.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = h.saveAs || (typeof window != "object" || window !== h ? function() {
        } : "download" in HTMLAnchorElement.prototype && !u ? function(n, s, i) {
          var a = h.URL || h.webkitURL, t = document.createElement("a");
          s = s || n.name || "download", t.download = s, t.rel = "noopener", typeof n == "string" ? (t.href = n, t.origin === location.origin ? x(t) : l(t.href) ? p(n, s, i) : x(t, t.target = "_blank")) : (t.href = a.createObjectURL(n), setTimeout(function() {
            a.revokeObjectURL(t.href);
          }, 4e4), setTimeout(function() {
            x(t);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(n, s, i) {
          if (s = s || n.name || "download", typeof n != "string") navigator.msSaveOrOpenBlob(m(n, i), s);
          else if (l(n)) p(n, s, i);
          else {
            var a = document.createElement("a");
            a.href = n, a.target = "_blank", setTimeout(function() {
              x(a);
            });
          }
        } : function(n, s, i, a) {
          if (a = a || open("", "_blank"), a && (a.document.title = a.document.body.innerText = "downloading..."), typeof n == "string") return p(n, s, i);
          var t = n.type === "application/octet-stream", r = /constructor/i.test(h.HTMLElement) || h.safari, v = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((v || t && r || u) && typeof FileReader < "u") {
            var w = new FileReader();
            w.onloadend = function() {
              var f = w.result;
              f = v ? f : f.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = f : location = f, a = null;
            }, w.readAsDataURL(n);
          } else {
            var _ = h.URL || h.webkitURL, b = _.createObjectURL(n);
            a ? a.location = b : location.href = b, a = null, setTimeout(function() {
              _.revokeObjectURL(b);
            }, 4e4);
          }
        });
        h.saveAs = o.saveAs = o, d.exports = o;
      });
    }(L)), L.exports;
  }
  var q = te();
  let D, se, ne, ie, ae;
  D = (d, c, m) => {
    const p = m.filter((l) => l[d ? "interviewers" : "interviewees"].length > 0);
    return c.map((l) => {
      const h = p.filter((o) => o[d ? "interviewers" : "interviewees"].some((n) => n.id === l.id)).map((o) => ({
        ...N(o.startTime, o.endTime),
        id: o.id || -1
      })), u = /* @__PURE__ */ new Map();
      return h.length === 1 ? (u.set("date", h[0].date), u.set("time", h[0].time), u.set("id", h[0].id)) : h.forEach((o, n) => {
        const s = o.date, i = o.time, a = o.id;
        u.set(`date_${n + 1}`, s), u.set(`time_${n + 1}`, i), u.set(`id_${n + 1}`, a);
      }), {
        name: l.name,
        position: l.position || "",
        email: l.email || "",
        timeMap: u,
        timeSlotsNum: h.length,
        input_availability: l.input_availability
      };
    });
  };
  se = (d, c, m, p) => {
    if (c.length === 0) return;
    let l = "", x = "";
    switch (d) {
      case "interviews":
        const u = c.map((t) => ({
          interviewers: t.interviewers.map((r) => r.name).join(", "),
          interviewees: t.interviewees.map((r) => r.name).join(", "),
          id: t.id,
          position: t.interviewees[0].position,
          ...N(t.startTime, t.endTime)
        }));
        l = B.unparse(u.map((t) => ({
          \u65E5\u671F: t.date,
          \u5834\u6B21\u6642\u9593: t.time,
          \u9762\u8A66\u7DE8\u865F: t.id || -1,
          \u7533\u8ACB\u8005\u8EAB\u4EFD: t.position,
          \u5E79\u90E8: t.interviewers,
          \u9762\u8A66\u8005: t.interviewees
        })).sort((t, r) => t.\u65E5\u671F.localeCompare(r.\u65E5\u671F) || t.\u5834\u6B21\u6642\u9593.localeCompare(r.\u5834\u6B21\u6642\u9593) || t.\u9762\u8A66\u7DE8\u865F - r.\u9762\u8A66\u7DE8\u865F)), x = "interview_schedule.csv";
        break;
      case "interviewers":
        const n = D(true, m, c).reduce((t, r) => {
          const { name: v, position: w, timeMap: _ } = r;
          return _.forEach((b, f) => {
            const [S, A] = f.split("_");
            if (S === "time" || S === "id") return;
            const k = b, O = _.get(`time_${A}`), F = _.get(`id_${A}`);
            typeof O == "string" && typeof k == "string" && typeof F == "number" ? t.push({
              name: v,
              position: w,
              date: k,
              time: O,
              id: F
            }) : console.error("Invalid data type for time, date, or id", {
              time: O,
              date: k,
              id: F
            });
          }), t;
        }, []);
        l = B.unparse(n.map((t) => ({
          \u59D3\u540D: t.name,
          \u8077\u4F4D: t.position,
          \u65E5\u671F: t.date,
          \u9762\u8A66\u6642\u9593: t.time,
          \u9762\u8A66\u7DE8\u865F: t.id
        })).sort((t, r) => t.\u59D3\u540D.localeCompare(r.\u59D3\u540D))), x = "interviewers_schedule.csv";
        break;
      case "interviewees":
        const s = D(false, p, c);
        l = B.unparse(s.map((t) => ({
          \u59D3\u540D: t.name,
          \u8077\u4F4D: t.position,
          \u65E5\u671F: t.timeMap.get("date"),
          \u9762\u8A66\u6642\u9593: t.timeMap.get("time"),
          \u9762\u8A66\u5834\u6B21\u7DE8\u865F: t.timeMap.get("id"),
          \u53EF\u9762\u8A66\u6642\u9593: t.input_availability
        })).sort((t, r) => t.\u59D3\u540D.localeCompare(r.\u59D3\u540D))), x = "interviewees_schedule.csv";
        break;
      case "interviewers_stats":
        const a = D(true, m, c).map((t) => {
          const { name: r, position: v, timeSlotsNum: w } = t;
          return {
            name: r,
            position: v,
            num: w
          };
        });
        l = B.unparse(a.map((t) => ({
          \u59D3\u540D: t.name,
          \u8077\u4F4D: t.position,
          \u5B89\u6392\u5834\u6B21\u6578: t.num
        })).sort((t, r) => t.\u59D3\u540D.localeCompare(r.\u59D3\u540D))), x = "interviewers_stats.csv";
        break;
    }
    const h = new Blob([
      l
    ], {
      type: "text/csv;charset=utf-8"
    });
    q.saveAs(h, x);
  };
  ne = (d, c, m, p) => {
    if (c.length === 0 || d.length === 0) return;
    const l = y.book_new();
    if (d.includes("interviews")) {
      const o = c.map((s) => ({
        interviewers: s.interviewers.map((i) => i.name).join(", "),
        interviewees: s.interviewees.map((i) => i.name).join(", "),
        id: s.id,
        position: s.interviewees[0].position,
        ...N(s.startTime, s.endTime)
      })).map((s) => ({
        \u65E5\u671F: s.date,
        \u5834\u6B21\u6642\u9593: s.time,
        \u9762\u8A66\u7DE8\u865F: s.id || -1,
        \u7533\u8ACB\u8005\u8EAB\u4EFD: s.position,
        \u5E79\u90E8: s.interviewers,
        \u9762\u8A66\u8005: s.interviewees
      })).sort((s, i) => s.\u65E5\u671F.localeCompare(i.\u65E5\u671F) || s.\u5834\u6B21\u6642\u9593.localeCompare(i.\u5834\u6B21\u6642\u9593) || s.\u9762\u8A66\u7DE8\u865F - i.\u9762\u8A66\u7DE8\u865F), n = y.json_to_sheet(o);
      y.book_append_sheet(l, n, "\u9762\u8A66\u5834\u6B21\u5B89\u6392\u8868");
    }
    if (d.includes("interviewers")) {
      const n = D(true, m, c).reduce((i, a) => {
        const { name: t, position: r, timeMap: v } = a;
        return v.forEach((w, _) => {
          const [b, f] = _.split("_");
          if (b === "time" || b === "id") return;
          const S = w, A = v.get(`time_${f}`), k = v.get(`id_${f}`);
          typeof A == "string" && typeof S == "string" && typeof k == "number" && i.push({
            name: t,
            position: r,
            date: S,
            time: A,
            id: k
          });
        }), i;
      }, []).map((i) => ({
        \u59D3\u540D: i.name,
        \u8077\u4F4D: i.position,
        \u65E5\u671F: i.date,
        \u9762\u8A66\u6642\u9593: i.time,
        \u9762\u8A66\u7DE8\u865F: i.id
      })).sort((i, a) => i.\u59D3\u540D.localeCompare(a.\u59D3\u540D)), s = y.json_to_sheet(n);
      y.book_append_sheet(l, s, "\u9762\u8A66\u5B98\u5404\u5834\u6B21\u5B89\u6392");
    }
    if (d.includes("interviewers_stats")) {
      const n = D(true, m, c).map((i) => {
        const { name: a, position: t, timeSlotsNum: r } = i;
        return {
          name: a,
          position: t,
          num: r
        };
      }).map((i) => ({
        \u59D3\u540D: i.name,
        \u8077\u4F4D: i.position,
        \u5B89\u6392\u5834\u6B21\u6578: i.num
      })).sort((i, a) => i.\u59D3\u540D.localeCompare(a.\u59D3\u540D)), s = y.json_to_sheet(n);
      y.book_append_sheet(l, s, "\u9762\u8A66\u5B98\u5834\u6B21\u7D71\u8A08");
    }
    if (d.includes("interviewees")) {
      const o = D(false, p, c).map((s) => ({
        \u59D3\u540D: s.name,
        \u8077\u4F4D: s.position,
        \u65E5\u671F: s.timeMap.get("date") || "\u914D\u5C0D\u5931\u6557",
        \u9762\u8A66\u6642\u9593: s.timeMap.get("time") || "\u914D\u5C0D\u5931\u6557",
        \u9762\u8A66\u5834\u6B21\u7DE8\u865F: s.timeMap.get("id") || "\u914D\u5C0D\u5931\u6557",
        \u53EF\u9762\u8A66\u6642\u9593: s.input_availability
      })).sort((s, i) => s.\u59D3\u540D.localeCompare(i.\u59D3\u540D)), n = y.json_to_sheet(o);
      y.book_append_sheet(l, n, "\u61C9\u8A66\u8005\u9762\u8A66\u5B89\u6392");
    }
    const x = W(l, {
      bookType: "xlsx",
      type: "array"
    }), h = new Blob([
      x
    ], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    q.saveAs(h, "\u9762\u8A66\u5B89\u6392\u7E3D\u8868.xlsx");
  };
  ie = (d) => Array.isArray(d.input_availability) ? d.input_availability.map((c) => {
    const { date: m, time: p } = N(c.split("/")[0], c.split("/")[1]);
    return `${m} ${p}`;
  }).join(", ") : d.input_availability;
  ae = () => {
    const { interviewers: d, interviewees: c, scheduledInterviews: m, unmatchedResults: p } = z(), [l, x] = C.useState(false), [h, u] = C.useState(false), [o, n] = C.useState({
      interviews: true,
      interviewers: true,
      interviewers_stats: true,
      interviewees: true
    }), s = (t) => {
      se(t, m, d, c), u(false);
    }, i = (t) => {
      n({
        ...o,
        [t]: !o[t]
      });
    }, a = () => {
      const t = Object.entries(o).filter(([r, v]) => v).map(([r]) => r);
      t.length !== 0 && (ne(t, m, d, c), x(false));
    };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(E, {
          className: "mb-4",
          children: [
            e.jsxs(E.Header, {
              className: "d-flex justify-content-between align-items-center",
              children: [
                e.jsxs("h5", {
                  className: "mb-0",
                  children: [
                    "\u5DF2\u5B89\u6392\u9762\u8A66 (",
                    m.length,
                    ")"
                  ]
                }),
                m.length > 0 && e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs(T, {
                      children: [
                        e.jsx(T.Toggle, {
                          variant: "primary",
                          size: "sm",
                          id: "dropdown-export",
                          children: "\u532F\u51FA\u6578\u64DA"
                        }),
                        e.jsxs(T.Menu, {
                          children: [
                            e.jsx(T.Item, {
                              onClick: () => u(true),
                              children: "\u532F\u51FA CSV \u6A94\u6848"
                            }),
                            e.jsx(T.Item, {
                              onClick: () => x(true),
                              children: "\u532F\u51FA Excel \u6A94\u6848"
                            })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(j, {
                      show: l,
                      onHide: () => x(false),
                      children: [
                        e.jsx(j.Header, {
                          closeButton: true,
                          children: e.jsx(j.Title, {
                            children: "\u9078\u64C7\u532F\u51FA Excel \u9078\u9805"
                          })
                        }),
                        e.jsx(j.Body, {
                          children: e.jsxs(M, {
                            children: [
                              e.jsx(M.Check, {
                                type: "checkbox",
                                id: "interviews",
                                label: "\u9762\u8A66\u5834\u6B21\u5B89\u6392\u8868",
                                checked: o.interviews,
                                onChange: () => i("interviews"),
                                className: "mb-2"
                              }),
                              e.jsx(M.Check, {
                                type: "checkbox",
                                id: "interviewers",
                                label: "\u9762\u8A66\u5B98\u5404\u5834\u6B21\u5B89\u6392",
                                checked: o.interviewers,
                                onChange: () => i("interviewers"),
                                className: "mb-2"
                              }),
                              e.jsx(M.Check, {
                                type: "checkbox",
                                id: "interviewers_stats",
                                label: "\u9762\u8A66\u5B98\u5834\u6B21\u7D71\u8A08",
                                checked: o.interviewers_stats,
                                onChange: () => i("interviewers_stats"),
                                className: "mb-2"
                              }),
                              e.jsx(M.Check, {
                                type: "checkbox",
                                id: "interviewees",
                                label: "\u61C9\u8A66\u8005\u9762\u8A66\u5B89\u6392",
                                checked: o.interviewees,
                                onChange: () => i("interviewees"),
                                className: "mb-2"
                              })
                            ]
                          })
                        }),
                        e.jsxs(j.Footer, {
                          children: [
                            e.jsx(g, {
                              variant: "secondary",
                              onClick: () => x(false),
                              children: "\u53D6\u6D88"
                            }),
                            e.jsx(g, {
                              variant: "primary",
                              onClick: a,
                              children: "\u532F\u51FA"
                            })
                          ]
                        })
                      ]
                    }),
                    e.jsxs(j, {
                      show: h,
                      onHide: () => u(false),
                      children: [
                        e.jsx(j.Header, {
                          closeButton: true,
                          children: e.jsx(j.Title, {
                            children: "\u9078\u64C7\u532F\u51FA CSV \u9078\u9805"
                          })
                        }),
                        e.jsx(j.Body, {
                          children: e.jsxs("div", {
                            className: "d-grid gap-2",
                            children: [
                              e.jsx(g, {
                                variant: "outline-primary",
                                className: "text-start",
                                onClick: () => s("interviews"),
                                children: "\u9762\u8A66\u5834\u6B21\u5B89\u6392\u8868"
                              }),
                              e.jsx(g, {
                                variant: "outline-primary",
                                className: "text-start",
                                onClick: () => s("interviewers"),
                                children: "\u9762\u8A66\u5B98\u5404\u5834\u6B21\u5B89\u6392"
                              }),
                              e.jsx(g, {
                                variant: "outline-primary",
                                className: "text-start",
                                onClick: () => s("interviewers_stats"),
                                children: "\u9762\u8A66\u5B98\u5834\u6B21\u7D71\u8A08"
                              }),
                              e.jsx(g, {
                                variant: "outline-primary",
                                className: "text-start",
                                onClick: () => s("interviewees"),
                                children: "\u61C9\u8A66\u8005\u9762\u8A66\u5B89\u6392"
                              })
                            ]
                          })
                        }),
                        e.jsx(j.Footer, {
                          children: e.jsx(g, {
                            variant: "secondary",
                            onClick: () => u(false),
                            children: "\u53D6\u6D88"
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            e.jsx(E.Body, {
              children: m.length === 0 ? e.jsx(X, {
                variant: "info",
                children: "\u5C1A\u672A\u5B89\u6392\u4EFB\u4F55\u9762\u8A66\u3002"
              }) : e.jsxs(P, {
                striped: true,
                bordered: true,
                hover: true,
                responsive: true,
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      children: [
                        e.jsx("th", {
                          style: {
                            textAlign: "center",
                            width: "3.5em",
                            textWrap: "balance"
                          },
                          children: "\u7DE8\u865F"
                        }),
                        e.jsx("th", {
                          style: {
                            textAlign: "center",
                            width: "3.5em"
                          },
                          children: "\u65E5\u671F"
                        }),
                        e.jsx("th", {
                          style: {
                            textAlign: "center",
                            width: "8em"
                          },
                          children: "\u6642\u9593"
                        }),
                        e.jsx("th", {
                          style: {
                            textAlign: "center"
                          },
                          children: "\u9762\u8A66\u8005"
                        }),
                        e.jsx("th", {
                          style: {
                            textAlign: "center"
                          },
                          children: "\u9762\u8A66\u5B98"
                        })
                      ]
                    })
                  }),
                  e.jsx("tbody", {
                    children: m.map((t) => e.jsxs("tr", {
                      children: [
                        e.jsx("td", {
                          style: {
                            textAlign: "center",
                            width: "3.5em"
                          },
                          children: t.id
                        }),
                        e.jsx("td", {
                          style: {
                            textAlign: "center",
                            width: "3.5em"
                          },
                          children: N(t.startTime, t.endTime).date
                        }),
                        e.jsx("td", {
                          style: {
                            textAlign: "center",
                            width: "8em"
                          },
                          children: N(t.startTime, t.endTime).time
                        }),
                        e.jsx("td", {
                          children: t.interviewees.map((r) => r.name).join(", ")
                        }),
                        e.jsx("td", {
                          children: t.interviewers.map((r) => r.name).join(", ")
                        })
                      ]
                    }, `${t.interviewees[0].id}-${t.startTime}`))
                  })
                ]
              })
            })
          ]
        }),
        p && (p.interviewers.length > 0 || p.interviewees.length > 0) && e.jsxs(E, {
          className: "mb-4",
          border: "danger",
          children: [
            e.jsx(E.Header, {
              className: "bg-danger text-white",
              children: e.jsx("h5", {
                className: "mb-0",
                children: "\u672A\u914D\u5C0D\u540D\u55AE"
              })
            }),
            e.jsx(E.Body, {
              children: e.jsx($, {
                children: e.jsx(H, {
                  children: p.interviewees.length > 0 && e.jsxs("div", {
                    children: [
                      e.jsx("h6", {
                        className: "text-danger",
                        children: "\u672A\u914D\u5C0D\u9762\u8A66\u8005\uFF1A"
                      }),
                      e.jsxs(P, {
                        striped: true,
                        bordered: true,
                        hover: true,
                        size: "sm",
                        className: "border-danger",
                        children: [
                          e.jsx("thead", {
                            children: e.jsxs("tr", {
                              children: [
                                e.jsx("th", {
                                  style: {
                                    width: "10%",
                                    textAlign: "center"
                                  },
                                  children: "\u59D3\u540D"
                                }),
                                e.jsx("th", {
                                  children: "\u53EF\u9762\u8A66\u6642\u9593"
                                })
                              ]
                            })
                          }),
                          e.jsx("tbody", {
                            children: p.interviewees.map((t) => e.jsxs("tr", {
                              className: "text-danger",
                              children: [
                                e.jsx("td", {
                                  style: {
                                    width: "10%",
                                    textAlign: "center"
                                  },
                                  children: t.name
                                }),
                                e.jsx("td", {
                                  children: ie(t)
                                })
                              ]
                            }, t.id))
                          })
                        ]
                      })
                    ]
                  })
                })
              })
            })
          ]
        })
      ]
    });
  };
  pe = () => e.jsxs(I, {
    className: "py-2",
    children: [
      e.jsx($, {
        className: "fix-width-container",
        children: e.jsx(H, {
          children: e.jsx(Z, {})
        })
      }),
      e.jsx($, {
        className: "fix-width-container",
        children: e.jsx(H, {
          children: e.jsx(ae, {})
        })
      })
    ]
  });
});
export {
  __tla,
  pe as default
};
