_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [15], {
        "0sNQ": function(e, t) {
            "trimStart" in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft), "trimEnd" in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight), "description" in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
                get: function() {
                    return /\((.+)\)/.exec(this)[1]
                }
            }), Array.prototype.flat || (Array.prototype.flat = function(e, t) {
                return t = this.concat.apply([], this), e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t
            }, Array.prototype.flatMap = function(e, t) {
                return this.map(e, t).flat()
            }), Promise.prototype.finally || (Promise.prototype.finally = function(e) {
                if ("function" != typeof e) return this.then(e, e);
                var t = this.constructor || Promise;
                return this.then((function(r) {
                    return t.resolve(e()).then((function() {
                        return r
                    }))
                }), (function(r) {
                    return t.resolve(e()).then((function() {
                        throw r
                    }))
                }))
            })
        },
        BMP1: function(e, t, r) {
            "use strict";
            var n = r("284h")(r("IKlv"));
            window.next = n, (0, n.default)().catch(console.error)
        },
        DqTX: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                const t = document.getElementsByTagName("head")[0],
                    r = new Set(t.children);
                a(r, e.map(e => {
                    let [t, r] = e;
                    return (0, n.createElement)(t, r)
                }), !1);
                let o = null;
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        const t = o = Promise.resolve().then(() => {
                            t === o && (o = null, a(r, e, !0))
                        })
                    }
                }
            };
            var n = r("q1tI");
            const o = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            };

            function a(e, t, r) {
                const n = document.getElementsByTagName("head")[0],
                    a = new Set(e);
                t.forEach(t => {
                    if ("title" === t.type) {
                        let e = "";
                        if (t) {
                            const {
                                children: r
                            } = t.props;
                            e = "string" === typeof r ? r : Array.isArray(r) ? r.join("") : ""
                        }
                        return void(e !== document.title && (document.title = e))
                    }
                    const r = function(e) {
                            let {
                                type: t,
                                props: r
                            } = e;
                            const n = document.createElement(t);
                            for (const s in r) {
                                if (!r.hasOwnProperty(s)) continue;
                                if ("children" === s || "dangerouslySetInnerHTML" === s) continue;
                                if (void 0 === r[s]) continue;
                                const e = o[s] || s.toLowerCase();
                                n.setAttribute(e, r[s])
                            }
                            const {
                                children: a,
                                dangerouslySetInnerHTML: i
                            } = r;
                            return i ? n.innerHTML = i.__html || "" : a && (n.textContent = "string" === typeof a ? a : Array.isArray(a) ? a.join("") : ""), n
                        }(t),
                        i = e.values();
                    for (;;) {
                        const {
                            done: e,
                            value: t
                        } = i.next();
                        if (null == t ? void 0 : t.isEqualNode(r)) return void a.delete(t);
                        if (e) break
                    }
                    e.add(r), n.appendChild(r)
                }), a.forEach(t => {
                    r && t.parentNode.removeChild(t), e.delete(t)
                })
            }
        },
        IKlv: function(e, t, r) {
            "use strict";
            var n = r("284h"),
                o = r("TqRt");
            t.__esModule = !0, t.render = J, t.renderError = K, t.default = t.emitter = t.router = t.version = void 0;
            var a = o(r("pVnL"));
            o(r("284h"));
            r("0sNQ");
            var i = o(r("q1tI")),
                s = o(r("i8i4")),
                c = r("FYa8"),
                l = o(r("dZ6Y")),
                u = r("qOIg"),
                d = r("elyg"),
                p = r("/jkW"),
                f = n(r("3WeD")),
                h = n(r("yLiY")),
                m = r("g/15"),
                g = o(r("DqTX")),
                y = n(r("zmvN")),
                v = o(r("bGXG")),
                S = r("nOHt");
            const w = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
            window.__NEXT_DATA__ = w;
            t.version = "9.5.5";
            const {
                props: _,
                err: E,
                page: T,
                query: P,
                buildId: b,
                assetPrefix: A,
                runtimeConfig: N,
                dynamicIds: C,
                isFallback: R,
                head: x,
                locales: L,
                defaultLocale: M
            } = w;
            let {
                locale: I
            } = w;
            const F = A || "";
            r.p = F + "/_next/", h.setConfig({
                serverRuntimeConfig: {},
                publicRuntimeConfig: N || {}
            });
            let D = (0, m.getURL)();
            (0, d.hasBasePath)(D) && (D = (0, d.delBasePath)(D)), D = (0, d.delLocale)(D, I);
            const B = new y.default(b, F, T),
                k = e => {
                    let [t, r] = e;
                    return B.registerPage(t, r)
                };
            window.__NEXT_P && window.__NEXT_P.map(e => setTimeout(() => k(e), 0)), window.__NEXT_P = [], window.__NEXT_P.push = k;
            const q = (0, g.default)(x),
                j = document.getElementById("__next");
            let $, O, H, U, X, G, W;
            t.router = H;
            class Y extends i.default.Component {
                componentDidCatch(e, t) {
                    this.props.fn(e, t)
                }
                componentDidMount() {
                    this.scrollToHash(), H.isSsr && (R || w.nextExport && ((0, p.isDynamicRoute)(H.pathname) || location.search) || _ && _.__N_SSG && location.search) && H.replace(H.pathname + "?" + String(f.assign(f.urlQueryToSearchParams(H.query), new URLSearchParams(location.search))), D, {
                        _h: 1,
                        shallow: !R
                    })
                }
                componentDidUpdate() {
                    this.scrollToHash()
                }
                scrollToHash() {
                    let {
                        hash: e
                    } = location;
                    if (e = e && e.substring(1), !e) return;
                    const t = document.getElementById(e);
                    t && setTimeout(() => t.scrollIntoView(), 0)
                }
                render() {
                    return this.props.children
                }
            }
            const V = (0, l.default)();
            t.emitter = V;
            async function J(e) {
                if (e.err) await K(e);
                else try {
                    await ne(e)
                } catch (t) {
                    if (t.cancelled) throw t;
                    0, await K((0, a.default)({}, e, {
                        err: t
                    }))
                }
            }

            function K(e) {
                const {
                    App: t,
                    err: r
                } = e;
                return console.error(r), B.loadPage("/_error").then(n => {
                    let {
                        page: o,
                        styleSheets: i
                    } = n;
                    const s = re(t),
                        c = {
                            Component: o,
                            AppTree: s,
                            router: H,
                            ctx: {
                                err: r,
                                pathname: T,
                                query: P,
                                asPath: D,
                                AppTree: s
                            }
                        };
                    return Promise.resolve(e.props ? e.props : (0, m.loadGetInitialProps)(t, c)).then(t => ne((0, a.default)({}, e, {
                        err: r,
                        Component: o,
                        styleSheets: i,
                        props: t
                    })))
                })
            }
            t.default = async function() {
                const {
                    page: e,
                    mod: r
                } = await B.loadPage("/_app");
                G = e, r && r.reportWebVitals && (W = e => {
                    let {
                        id: t,
                        name: n,
                        startTime: o,
                        value: a,
                        duration: i,
                        entryType: s,
                        entries: c
                    } = e;
                    const l = `${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`;
                    let u;
                    c && c.length && (u = c[0].startTime), r.reportWebVitals({
                        id: t || l,
                        name: n,
                        startTime: o || u,
                        value: null == a ? i : a,
                        label: "mark" === s || "measure" === s ? "custom" : "web-vital"
                    })
                });
                let n = E;
                try {
                    ({
                        page: U,
                        styleSheets: X
                    } = await B.loadPage(T))
                } catch (a) {
                    n = a
                }
                window.__NEXT_PRELOADREADY && await window.__NEXT_PRELOADREADY(C), t.router = H = (0, S.createRouter)(T, P, D, {
                    initialProps: _,
                    pageLoader: B,
                    App: G,
                    Component: U,
                    initialStyleSheets: X,
                    wrapApp: re,
                    err: n,
                    isFallback: Boolean(R),
                    subscription: (e, t) => {
                        let {
                            Component: r,
                            styleSheets: n,
                            props: o,
                            err: a
                        } = e;
                        return J({
                            App: t,
                            Component: r,
                            styleSheets: n,
                            props: o,
                            err: a
                        })
                    },
                    locale: I,
                    locales: L,
                    defaultLocale: M
                });
                const o = {
                    App: G,
                    Component: U,
                    styleSheets: X,
                    props: _,
                    err: n
                };
                return J(o), V
            };
            let Q = "function" === typeof s.default.hydrate;

            function z() {
                m.ST && (performance.mark("afterHydrate"), performance.measure("Next.js-before-hydration", "navigationStart", "beforeRender"), performance.measure("Next.js-hydration", "beforeRender", "afterHydrate"), W && performance.getEntriesByName("Next.js-hydration").forEach(W), ee())
            }

            function Z() {
                if (!m.ST) return;
                performance.mark("afterRender");
                const e = performance.getEntriesByName("routeChange", "mark");
                e.length && (performance.measure("Next.js-route-change-to-render", e[0].name, "beforeRender"), performance.measure("Next.js-render", "beforeRender", "afterRender"), W && (performance.getEntriesByName("Next.js-render").forEach(W), performance.getEntriesByName("Next.js-route-change-to-render").forEach(W)), ee(), ["Next.js-route-change-to-render", "Next.js-render"].forEach(e => performance.clearMeasures(e)))
            }

            function ee() {
                ["beforeRender", "afterHydrate", "afterRender", "routeChange"].forEach(e => performance.clearMarks(e))
            }

            function te(e) {
                let {
                    children: t
                } = e;
                return i.default.createElement(Y, {
                    fn: e => K({
                        App: G,
                        err: e
                    }).catch(e => console.error("Error rendering page: ", e))
                }, i.default.createElement(u.RouterContext.Provider, {
                    value: (0, S.makePublicRouterInstance)(H)
                }, i.default.createElement(c.HeadManagerContext.Provider, {
                    value: q
                }, t)))
            }
            const re = e => t => {
                const r = (0, a.default)({}, t, {
                    Component: U,
                    err: E,
                    router: H
                });
                return i.default.createElement(te, null, i.default.createElement(e, r))
            };

            function ne(e) {
                let {
                    App: t,
                    Component: r,
                    props: n,
                    err: o,
                    styleSheets: c
                } = e;
                r = r || $.Component, n = n || $.props;
                const l = (0, a.default)({}, n, {
                    Component: r,
                    err: o,
                    router: H
                });
                $ = l;
                let u, d = !1;
                const p = new Promise((e, t) => {
                    O && O(), u = () => {
                        O = null, e()
                    }, O = () => {
                        d = !0, O = null;
                        const e = new Error("Cancel rendering route");
                        e.cancelled = !0, t(e)
                    }
                });
                const f = i.default.createElement(oe, {
                    callback: function() {
                        if (!Q && !d) {
                            const e = new Set(c.map(e => e.href)),
                                t = (0, y.looseToArray)(document.querySelectorAll("style[data-n-href]")),
                                r = t.map(e => e.getAttribute("data-n-href"));
                            for (let o = 0; o < r.length; ++o) e.has(r[o]) ? t[o].removeAttribute("media") : t[o].setAttribute("media", "x");
                            let n = document.querySelector("noscript[data-n-css]");
                            n && c.forEach(e => {
                                let {
                                    href: t
                                } = e;
                                const r = document.querySelector(`style[data-n-href="${t}"]`);
                                r && (n.parentNode.insertBefore(r, n.nextSibling), n = r)
                            }), (0, y.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach(e => {
                                e.parentNode.removeChild(e)
                            }), getComputedStyle(document.body, "height")
                        }
                        u()
                    }
                }, i.default.createElement(te, null, i.default.createElement(t, l)));
                var h, g;
                return function() {
                    if (Q) return !1;
                    const e = (0, y.looseToArray)(document.querySelectorAll("style[data-n-href]")),
                        t = new Set(e.map(e => e.getAttribute("data-n-href")));
                    c.forEach(e => {
                        let {
                            href: r,
                            text: n
                        } = e;
                        if (!t.has(r)) {
                            const e = document.createElement("style");
                            e.setAttribute("data-n-href", r), e.setAttribute("media", "x"), document.head.appendChild(e), e.appendChild(document.createTextNode(n))
                        }
                    })
                }(), h = f, g = j, m.ST && performance.mark("beforeRender"), Q ? (s.default.hydrate(h, g, z), Q = !1, W && m.ST && (0, v.default)(W)) : s.default.render(h, g, Z), p
            }

            function oe(e) {
                let {
                    callback: t,
                    children: r
                } = e;
                return i.default.useLayoutEffect(() => t(), [t]), r
            }
        },
        Lab5: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                const r = "/" === e ? "/index" : /^\/index(\/|$)/.test(e) ? "/index" + e : "" + e;
                return r + t
            }
        },
        bGXG: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n = r("w6Sm");
            t.default = e => {
                (0, n.getCLS)(e), (0, n.getFID)(e), (0, n.getFCP)(e), (0, n.getLCP)(e), (0, n.getTTFB)(e)
            }
        },
        pVnL: function(e, t) {
            function r() {
                return e.exports = r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, r.apply(this, arguments)
            }
            e.exports = r
        },
        w6Sm: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "getCLS", (function() {
                return h
            })), r.d(t, "getFCP", (function() {
                return g
            })), r.d(t, "getFID", (function() {
                return y
            })), r.d(t, "getLCP", (function() {
                return S
            })), r.d(t, "getTTFB", (function() {
                return w
            }));
            var n, o, a = function() {
                    return "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    return {
                        name: e,
                        value: t,
                        delta: 0,
                        entries: [],
                        id: a(),
                        isFinal: !1
                    }
                },
                s = function(e, t) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var r = new PerformanceObserver((function(e) {
                                return e.getEntries().map(t)
                            }));
                            return r.observe({
                                type: e,
                                buffered: !0
                            }), r
                        }
                    } catch (e) {}
                },
                c = !1,
                l = !1,
                u = function(e) {
                    c = !e.persisted
                },
                d = function() {
                    addEventListener("pagehide", u), addEventListener("beforeunload", (function() {}))
                },
                p = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    l || (d(), l = !0), addEventListener("visibilitychange", (function(t) {
                        var r = t.timeStamp;
                        "hidden" === document.visibilityState && e({
                            timeStamp: r,
                            isUnloading: c
                        })
                    }), {
                        capture: !0,
                        once: t
                    })
                },
                f = function(e, t, r, n) {
                    var o;
                    return function() {
                        r && t.isFinal && r.disconnect(), t.value >= 0 && (n || t.isFinal || "hidden" === document.visibilityState) && (t.delta = t.value - (o || 0), (t.delta || t.isFinal || void 0 === o) && (e(t), o = t.value))
                    }
                },
                h = function(e) {
                    var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = i("CLS", 0),
                        o = function(e) {
                            e.hadRecentInput || (n.value += e.value, n.entries.push(e), t())
                        },
                        a = s("layout-shift", o);
                    a && (t = f(e, n, a, r), p((function(e) {
                        var r = e.isUnloading;
                        a.takeRecords().map(o), r && (n.isFinal = !0), t()
                    })))
                },
                m = function() {
                    return void 0 === n && (n = "hidden" === document.visibilityState ? 0 : 1 / 0, p((function(e) {
                        var t = e.timeStamp;
                        return n = t
                    }), !0)), {
                        get timeStamp() {
                            return n
                        }
                    }
                },
                g = function(e) {
                    var t, r = i("FCP"),
                        n = m(),
                        o = s("paint", (function(e) {
                            "first-contentful-paint" === e.name && e.startTime < n.timeStamp && (r.value = e.startTime, r.isFinal = !0, r.entries.push(e), t())
                        }));
                    o && (t = f(e, r, o))
                },
                y = function(e) {
                    var t = i("FID"),
                        r = m(),
                        n = function(e) {
                            e.startTime < r.timeStamp && (t.value = e.processingStart - e.startTime, t.entries.push(e), t.isFinal = !0, a())
                        },
                        o = s("first-input", n),
                        a = f(e, t, o);
                    o ? p((function() {
                        o.takeRecords().map(n), o.disconnect()
                    }), !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay((function(e, n) {
                        n.timeStamp < r.timeStamp && (t.value = e, t.isFinal = !0, t.entries = [{
                            entryType: "first-input",
                            name: n.type,
                            target: n.target,
                            cancelable: n.cancelable,
                            startTime: n.timeStamp,
                            processingStart: n.timeStamp + e
                        }], a())
                    }))
                },
                v = function() {
                    return o || (o = new Promise((function(e) {
                        return ["scroll", "keydown", "pointerdown"].map((function(t) {
                            addEventListener(t, e, {
                                once: !0,
                                passive: !0,
                                capture: !0
                            })
                        }))
                    }))), o
                },
                S = function(e) {
                    var t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = i("LCP"),
                        o = m(),
                        a = function(e) {
                            var r = e.startTime;
                            r < o.timeStamp ? (n.value = r, n.entries.push(e)) : n.isFinal = !0, t()
                        },
                        c = s("largest-contentful-paint", a);
                    if (c) {
                        t = f(e, n, c, r);
                        var l = function() {
                            n.isFinal || (c.takeRecords().map(a), n.isFinal = !0, t())
                        };
                        v().then(l), p(l, !0)
                    }
                },
                w = function(e) {
                    var t, r = i("TTFB");
                    t = function() {
                        try {
                            var t = performance.getEntriesByType("navigation")[0] || function() {
                                var e = performance.timing,
                                    t = {
                                        entryType: "navigation",
                                        startTime: 0
                                    };
                                for (var r in e) "navigationStart" !== r && "toJSON" !== r && (t[r] = Math.max(e[r] - e.navigationStart, 0));
                                return t
                            }();
                            r.value = r.delta = t.responseStart, r.entries = [t], r.isFinal = !0, e(r)
                        } catch (e) {}
                    }, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("pageshow", t)
                }
        },
        yLiY: function(e, t, r) {
            "use strict";
            let n;
            t.__esModule = !0, t.setConfig = function(e) {
                n = e
            }, t.default = void 0;
            t.default = () => n
        },
        zmvN: function(e, t, r) {
            "use strict";
            var n = r("TqRt");
            t.__esModule = !0, t.default = t.looseToArray = void 0;
            var o = n(r("dZ6Y")),
                a = r("elyg"),
                i = n(r("Lab5")),
                s = r("/jkW"),
                c = r("hS4m");
            const l = e => [].slice.call(e);

            function u(e, t) {
                try {
                    return document.createElement("link").relList.supports(e)
                } catch (r) {}
            }

            function d(e) {
                return (0, a.markLoadingError)(new Error("Error loading " + e))
            }
            t.looseToArray = l;
            const p = u("preload") && !u("prefetch") ? "preload" : "prefetch",
                f = u("preload") ? "preload" : p;
            document.createElement("script");

            function h(e) {
                if ("/" !== e[0]) throw new Error(`Route name should start with a "/", got "${e}"`);
                return "/" === e ? e : e.replace(/\/$/, "")
            }

            function m(e, t, r, n) {
                return new Promise((o, a) => {
                    n = document.createElement("link"), r && (n.as = r), n.rel = t, n.crossOrigin = void 0, n.onload = o, n.onerror = a, n.href = e, document.head.appendChild(n)
                })
            }
            t.default = class {
                constructor(e, t, r) {
                    this.initialPage = void 0, this.buildId = void 0, this.assetPrefix = void 0, this.pageCache = void 0, this.pageRegisterEvents = void 0, this.loadingRoutes = void 0, this.promisedBuildManifest = void 0, this.promisedSsgManifest = void 0, this.promisedDevPagesManifest = void 0, this.initialPage = r, this.buildId = e, this.assetPrefix = t, this.pageCache = {}, this.pageRegisterEvents = (0, o.default)(), this.loadingRoutes = {
                        "/_app": !0
                    }, "/_error" !== r && (this.loadingRoutes[r] = !0), this.promisedBuildManifest = new Promise(e => {
                        window.__BUILD_MANIFEST ? e(window.__BUILD_MANIFEST) : window.__BUILD_MANIFEST_CB = () => {
                            e(window.__BUILD_MANIFEST)
                        }
                    }), this.promisedSsgManifest = new Promise(e => {
                        window.__SSG_MANIFEST ? e(window.__SSG_MANIFEST) : window.__SSG_MANIFEST_CB = () => {
                            e(window.__SSG_MANIFEST)
                        }
                    })
                }
                getPageList() {
                    return this.promisedBuildManifest.then(e => e.sortedPages)
                }
                getDependencies(e) {
                    return this.promisedBuildManifest.then(t => t[e] ? t[e].map(e => `${this.assetPrefix}/_next/${encodeURI(e)}`) : Promise.reject(d(e)))
                }
                getDataHref(e, t, r, n, o) {
                    const {
                        pathname: l,
                        query: u,
                        search: d
                    } = (0, c.parseRelativeUrl)(e), {
                        pathname: p
                    } = (0, c.parseRelativeUrl)(t), f = h(l), m = e => {
                        const t = (0, a.addLocale)((0, i.default)(e, ".json"), n, o);
                        return (0, a.addBasePath)(`/_next/data/${this.buildId}${t}${r?"":d}`)
                    }, g = (0, s.isDynamicRoute)(f), y = g ? (0, a.interpolateAs)(l, p, u).result : "";
                    return g ? y && m(y) : m(f)
                }
                prefetchData(e, t, r, n) {
                    const {
                        pathname: o
                    } = (0, c.parseRelativeUrl)(e), a = h(o);
                    return this.promisedSsgManifest.then((o, i) => o.has(a) && (i = this.getDataHref(e, t, !0, r, n)) && !document.querySelector(`link[rel="${p}"][href^="${i}"]`) && m(i, p, "fetch").catch(() => {}))
                }
                loadPage(e) {
                    return e = h(e), new Promise((t, r) => {
                        const n = this.pageCache[e];
                        if (n) return void("error" in n ? r(n.error) : t(n));
                        const o = n => {
                            this.pageRegisterEvents.off(e, o), delete this.loadingRoutes[e], "error" in n ? r(n.error) : t(n)
                        };
                        this.pageRegisterEvents.on(e, o), this.loadingRoutes[e] || (this.loadingRoutes[e] = !0, this.getDependencies(e).then(e => {
                            const t = [];
                            return e.forEach(e => {
                                var r;
                                e.endsWith(".js") && !document.querySelector(`script[src^="${e}"]`) && t.push((r = e, new Promise((e, t) => {
                                    const n = document.createElement("script");
                                    n.crossOrigin = void 0, n.src = r, n.onload = e, n.onerror = () => t(d(r)), document.body.appendChild(n)
                                }))), e.endsWith(".css") && !document.querySelector(`link[rel="${f}"][href^="${e}"]`) && m(e, f, "fetch").catch(() => {})
                            }), Promise.all(t)
                        }).catch(t => {
                            this.pageCache[e] = {
                                error: t
                            }, o({
                                error: t
                            })
                        }))
                    })
                }
                registerPage(e, t) {
                    const r = r => {
                        try {
                            const n = t(),
                                o = {
                                    page: n.default || n,
                                    mod: n,
                                    styleSheets: r
                                };
                            this.pageCache[e] = o, this.pageRegisterEvents.emit(e, o)
                        } catch (n) {
                            this.pageCache[e] = {
                                error: n
                            }, this.pageRegisterEvents.emit(e, {
                                error: n
                            })
                        }
                    };
                    const n = e === this.initialPage;
                    ("/_app" === e ? Promise.resolve([]) : (n ? Promise.resolve(l(document.querySelectorAll("link[data-n-p]")).map(e => e.getAttribute("href"))) : this.getDependencies(e).then(e => e.filter(e => e.endsWith(".css")))).then(e => Promise.all(e.map(e => {
                        return t = e, fetch(t).then(e => {
                            if (!e.ok) throw d(t);
                            return e.text().then(e => ({
                                href: t,
                                text: e
                            }))
                        });
                        var t
                    })).catch(e => {
                        if (n) return l(document.styleSheets).filter(e => e.ownerNode && "LINK" === e.ownerNode.tagName && e.ownerNode.hasAttribute("data-n-p")).map(e => ({
                            href: e.ownerNode.getAttribute("href"),
                            text: l(e.cssRules).map(e => e.cssText).join("")
                        }));
                        throw e
                    }))).then(e => r(e), t => {
                        this.pageCache[e] = {
                            error: t
                        }, this.pageRegisterEvents.emit(e, {
                            error: t
                        })
                    })
                }
                prefetch(e, t) {
                    let r, n;
                    return (r = navigator.connection) && (r.saveData || /2g/.test(r.effectiveType)) ? Promise.resolve() : (t && (n = e), Promise.all(document.querySelector(`link[rel="${p}"][href^="${n}"]`) ? [] : [n && m(n, p, n.endsWith(".css") ? "fetch" : "script"), !t && this.getDependencies(e).then(e => Promise.all(e.map(e => this.prefetch(e, !0))))]).then(() => {}, () => {}))
                }
            }
        }
    },
    [
        ["BMP1", 3, 2, 0]
    ]
]);