(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [6], {
        "2qu3": function(e, t, r) {
            "use strict";
            var n = r("lSNA");

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        n(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.__esModule = !0, t.default = void 0;
            var i, s = (i = r("q1tI")) && i.__esModule ? i : {
                    default: i
                },
                c = r("8L3h"),
                l = r("jwwS");
            const u = [],
                d = [];
            let p = !1;

            function f(e) {
                let t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then(e => (r.loading = !1, r.loaded = e, e)).catch(e => {
                    throw r.loading = !1, r.error = e, e
                }), r
            }

            function m(e) {
                let t = {
                        loading: !1,
                        loaded: {},
                        error: null
                    },
                    r = [];
                try {
                    Object.keys(e).forEach(n => {
                        let o = f(e[n]);
                        o.loading ? t.loading = !0 : (t.loaded[n] = o.loaded, t.error = o.error), r.push(o.promise), o.promise.then(e => {
                            t.loaded[n] = e
                        }).catch(e => {
                            t.error = e
                        })
                    })
                } catch (n) {
                    t.error = n
                }
                return t.promise = Promise.all(r).then(e => (t.loading = !1, e)).catch(e => {
                    throw t.loading = !1, e
                }), t
            }

            function h(e, t) {
                return s.default.createElement(function(e) {
                    return e && e.__esModule ? e.default : e
                }(e), t)
            }

            function g(e, t) {
                let r = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: h,
                        webpack: null,
                        modules: null
                    }, t),
                    n = null;

                function o() {
                    if (!n) {
                        const t = new y(e, r);
                        n = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return n.promise()
                }
                if (!p && "function" === typeof r.webpack) {
                    const e = r.webpack();
                    d.push(t => {
                        for (const r of e)
                            if (-1 !== t.indexOf(r)) return o()
                    })
                }
                const a = (e, t) => {
                    o();
                    const a = s.default.useContext(l.LoadableContext),
                        i = (0, c.useSubscription)(n);
                    return s.default.useImperativeHandle(t, () => ({
                        retry: n.retry
                    }), []), a && Array.isArray(r.modules) && r.modules.forEach(e => {
                        a(e)
                    }), s.default.useMemo(() => i.loading || i.error ? s.default.createElement(r.loading, {
                        isLoading: i.loading,
                        pastDelay: i.pastDelay,
                        timedOut: i.timedOut,
                        error: i.error,
                        retry: n.retry
                    }) : i.loaded ? r.render(i.loaded, e) : null, [e, i])
                };
                return a.preload = () => o(), a.displayName = "LoadableComponent", s.default.forwardRef(a)
            }
            class y {
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    const {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" === typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" === typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = a(a({}, this._state), {}, {
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading
                    }, e), this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
            }

            function b(e) {
                return g(f, e)
            }

            function w(e, t) {
                let r = [];
                for (; e.length;) {
                    let n = e.pop();
                    r.push(n(t))
                }
                return Promise.all(r).then(() => {
                    if (e.length) return w(e, t)
                })
            }
            b.Map = function(e) {
                if ("function" !== typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return g(m, e)
            }, b.preloadAll = () => new Promise((e, t) => {
                w(u).then(e, t)
            }), b.preloadReady = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise(t => {
                    const r = () => (p = !0, t());
                    w(d, e).then(r, r)
                })
            }, window.__NEXT_PRELOADREADY = b.preloadReady;
            var _ = b;
            t.default = _
        },
        "8oxB": function(e, t) {
            var r, n, o = e.exports = {};

            function a() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                try {
                    return r(e, 0)
                } catch (t) {
                    try {
                        return r.call(null, e, 0)
                    } catch (t) {
                        return r.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    r = "function" === typeof setTimeout ? setTimeout : a
                } catch (e) {
                    r = a
                }
                try {
                    n = "function" === typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    n = i
                }
            }();
            var c, l = [],
                u = !1,
                d = -1;

            function p() {
                u && c && (u = !1, c.length ? l = c.concat(l) : d = -1, l.length && f())
            }

            function f() {
                if (!u) {
                    var e = s(p);
                    u = !0;
                    for (var t = l.length; t;) {
                        for (c = l, l = []; ++d < t;) c && c[d].run();
                        d = -1, t = l.length
                    }
                    c = null, u = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            o.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                l.push(new m(e, t)), 1 !== l.length || u || s(f)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(e) {
                return []
            }, o.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        BIUJ: function(e, t, r) {
            var n = {
                "./about": "UXwh",
                "./about.js": "UXwh",
                "./careers": "iue8",
                "./careers/": "iue8",
                "./careers/index": "iue8",
                "./careers/index.js": "iue8",
                "./careers/single": "3caz",
                "./careers/single.js": "3caz",
                "./contact": "l48q",
                "./contact.js": "l48q",
                "./home": "vWfl",
                "./home.js": "vWfl",
                "./not-found": "vgrO",
                "./not-found.js": "vgrO",
                "./projects": "iRer",
                "./projects/": "iRer",
                "./projects/index": "iRer",
                "./projects/index.js": "iRer",
                "./projects/single": "GIAT",
                "./projects/single.js": "GIAT",
                "./services": "6gO5",
                "./services.js": "6gO5",
                "./terms": "WHdi",
                "./terms.js": "WHdi"
            };

            function o(e) {
                var t = a(e);
                if (!r.m[t]) {
                    var n = new Error("Module '" + e + "' ('" + t + "') is not available (weak dependency)");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return r(t)
            }

            function a(e) {
                if (!r.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            o.keys = function() {
                return Object.keys(n)
            }, o.resolve = a, o.id = "BIUJ", e.exports = o
        },
        Mc0b: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return o
                }));
                const n = e.env.GA_MEASUREMENT_ID,
                    o = () => {
                        n && window.gtag("config", n, {
                            page_title: document.title,
                            page_location: window.location.href,
                            page_path: window.location.pathname
                        })
                    }
            }).call(this, r("8oxB"))
        },
        ZJ9m: function(e, t, r) {
            var n = {
                "./about": ["UXwh", 2, 1, 0, 8],
                "./about.js": ["UXwh", 2, 1, 0, 8],
                "./careers": ["iue8", 1, 0, 4],
                "./careers/": ["iue8", 1, 0, 4],
                "./careers/index": ["iue8", 1, 0, 4],
                "./careers/index.js": ["iue8", 1, 0, 4],
                "./careers/single": ["3caz", 1, 0, 12],
                "./careers/single.js": ["3caz", 1, 0, 12],
                "./contact": ["l48q", 0, 10],
                "./contact.js": ["l48q", 0, 10],
                "./home": ["vWfl", 1, 0, 7],
                "./home.js": ["vWfl", 1, 0, 7],
                "./not-found": ["vgrO", 1, 0, 11],
                "./not-found.js": ["vgrO", 1, 0, 11],
                "./projects": ["iRer", 1, 0, 5],
                "./projects/": ["iRer", 1, 0, 5],
                "./projects/index": ["iRer", 1, 0, 5],
                "./projects/index.js": ["iRer", 1, 0, 5],
                "./projects/single": ["GIAT", 1, 0, 9],
                "./projects/single.js": ["GIAT", 1, 0, 9],
                "./services": ["6gO5", 1, 0, 13],
                "./services.js": ["6gO5", 1, 0, 13],
                "./terms": ["WHdi", 1, 0, 14],
                "./terms.js": ["WHdi", 1, 0, 14]
            };

            function o(e) {
                if (!r.o(n, e)) return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = n[e],
                    o = t[0];
                return Promise.all(t.slice(1).map(r.e)).then((function() {
                    return r(o)
                }))
            }
            o.keys = function() {
                return Object.keys(n)
            }, o.id = "ZJ9m", e.exports = o
        },
        a6RD: function(e, t, r) {
            "use strict";
            var n = r("lSNA");

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        n(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.__esModule = !0, t.noSSR = c, t.default = function(e, t) {
                let r = i.default,
                    n = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: r,
                                pastDelay: n
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? n.loader = () => e : "function" === typeof e ? n.loader = e : "object" === typeof e && (n = a(a({}, n), e));
                if (n = a(a({}, n), t), "object" === typeof e && !(e instanceof Promise) && (e.render && (n.render = (t, r) => e.render(r, t)), e.modules)) {
                    r = i.default.Map;
                    const t = {},
                        o = e.modules();
                    Object.keys(o).forEach(e => {
                        const r = o[e];
                        "function" !== typeof r.then ? t[e] = r : t[e] = () => r.then(e => e.default || e)
                    }), n.loader = t
                }
                n.loadableGenerated && (n = a(a({}, n), n.loadableGenerated), delete n.loadableGenerated);
                if ("boolean" === typeof n.ssr) {
                    if (!n.ssr) return delete n.ssr, c(r, n);
                    delete n.ssr
                }
                return r(n)
            };
            s(r("q1tI"));
            var i = s(r("2qu3"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        jwwS: function(e, t, r) {
            "use strict";
            var n;
            t.__esModule = !0, t.LoadableContext = void 0;
            const o = ((n = r("q1tI")) && n.__esModule ? n : {
                default: n
            }).default.createContext(null);
            t.LoadableContext = o
        },
        wx14: function(e, t, r) {
            "use strict";

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            r.d(t, "a", (function() {
                return n
            }))
        },
        y7qy: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return u
            }));
            var n = r("q1tI"),
                o = r.n(n),
                a = r("8Kt/"),
                i = r.n(a),
                s = r("nOHt"),
                c = r("Mc0b"),
                l = o.a.createElement;

            function u(e) {
                const t = Object(s.useRouter)();
                if (Object(n.useEffect)(() => {
                        const e = e => {
                            c.a(e)
                        };
                        return t.events.on("routeChangeComplete", e), () => {
                            t.events.off("routeChangeComplete", e)
                        }
                    }, [t.events]), e) return l(i.a, null, l("title", null, e.title), l("meta", {
                    name: "description",
                    content: e.metaDesc
                }), l("meta", {
                    name: "keywords",
                    content: e.metaKeywords
                }), l("meta", {
                    name: "robots",
                    content: `${e.metaRobotsNoindex}, ${e.metaRobotsNofollow}`
                }), l("meta", {
                    name: "googlebot",
                    content: `${e.metaRobotsNoindex}, ${e.metaRobotsNofollow}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`
                }), l("meta", {
                    name: "bingbot",
                    content: `${e.metaRobotsNoindex}, ${e.metaRobotsNofollow}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`
                }), l("link", {
                    rel: "canonical",
                    href: e.canonical
                }), l("meta", {
                    property: "og:locale",
                    content: "en_US"
                }), l("meta", {
                    property: "og:type",
                    content: e.opengraphType
                }), l("meta", {
                    property: "og:title",
                    content: e.opengraphTitle
                }), l("meta", {
                    property: "og:description",
                    content: e.opengraphDescription
                }), l("meta", {
                    property: "og:url",
                    content: e.opengraphUrl
                }), l("meta", {
                    property: "og:site_name",
                    content: e.opengraphSiteName
                }), l("meta", {
                    property: "article:publisher",
                    content: e.opengraphPublisher
                }), l("meta", {
                    property: "article:modified_time",
                    content: e.opengraphModifiedTime
                }), e.opengraphImage ? l(o.a.Fragment, null, l("meta", {
                    property: "og:image",
                    content: e.opengraphImage.mediaItemUrl
                }), l("meta", {
                    property: "og:image:width",
                    content: e.opengraphImage.mediaDetails.width
                }), l("meta", {
                    property: "og:image:height",
                    content: e.opengraphImage.mediaDetails.height
                })) : "", l("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }), l("meta", {
                    property: "twitter:creator",
                    content: "@blacksmithphx"
                }), l("meta", {
                    property: "twitter:site",
                    content: "@blacksmithphx"
                }), l("script", {
                    src: "https://www.googletagmanager.com/gtag/js?id=G-9B3TTZ1EXW"
                }), l("script", {
                    dangerouslySetInnerHTML: {
                        __html: "\n\t\t\t\t  window.dataLayer = window.dataLayer || [];\n\t\t\t\t  function gtag(){dataLayer.push(arguments);}\n\t\t\t\t  gtag('js', new Date());\n\t\t\t\t  gtag('config', 'G-9B3TTZ1EXW', {\n\t\t\t\t\tpage_path: window.location.pathname,\n\t\t\t\t  });\n\t\t\t\t"
                    }
                }))
            }
        }
    }
]);