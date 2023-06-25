_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [18], {
        0: function(e, t, o) {
            o("GcxT"), e.exports = o("nOHt")
        },
        "1TCz": function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "default", (function() {
                return ue
            }));
            var a = o("wx14"),
                n = o("q1tI"),
                r = o.n(n),
                i = (o("Gpft"), o("dwco")),
                s = o.n(i),
                l = o("5r6G"),
                c = o.n(l),
                d = (o("f01a"), o("8Kt/")),
                u = o.n(d),
                m = o("ZMKu"),
                f = o("v/lv"),
                p = o.n(f),
                h = o("rdoT"),
                _ = o.n(h),
                v = o("xgCZ"),
                g = o.n(v),
                w = o("Ic8D"),
                b = o.n(w),
                y = o("j9Gt"),
                k = o.n(y),
                x = o("YFqc"),
                L = o.n(x);

            function E(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            var O = o("4Xc8"),
                B = o.n(O),
                N = o("2Yrw"),
                j = o.n(N),
                C = o("BgbX"),
                S = o("q9W8"),
                T = o("tSPO"),
                M = r.a.createElement;

            function H(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(o), !0).forEach((function(t) {
                        E(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : H(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function z(e) {
                const t = Object(n.createRef)(),
                    o = Object(n.createRef)(),
                    a = Object(n.createRef)(),
                    r = Object(n.createRef)(),
                    i = Object(n.createRef)(),
                    {
                        0: s,
                        1: l
                    } = Object(n.useState)(),
                    {
                        0: c,
                        1: d
                    } = Object(n.useState)(!1),
                    {
                        0: u,
                        1: f
                    } = Object(n.useState)(!1),
                    p = Object(m.b)(),
                    h = Object(m.b)(),
                    _ = {
                        x: -20,
                        opacity: 0
                    },
                    v = {
                        open: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                ease: [.6, 0, 0, 1]
                            }
                        },
                        close: {
                            x: -30,
                            opacity: 0,
                            transition: {
                                duration: .5,
                                ease: [.6, 0, 0, 1]
                            }
                        },
                        navigate: {
                            opacity: 0
                        }
                    };
                let g = 0,
                    w = !1,
                    b = 0,
                    y = !0,
                    k = !1,
                    x = !0;
                const E = e.fields.navItems.map(e => ({
                        text: e.link.title,
                        href: e.link.url
                    })),
                    O = t => {
                        t && Object(T.d)(t), h.start("hide"), p.start("navigate"), setTimeout(() => e.removeBodyLock(), 500)
                    };
                Object(n.useEffect)(() => {
                    e.shouldNavigateHome && O()
                }, [e.shouldNavigateHome]), Object(n.useEffect)(() => {
                    x = !(window.innerWidth > 930);
                    const e = Object(S.b)(a.current, "height") / 4;
                    b = e * ((E.length - 1) / E.length), x && (r.current.style.opacity = 0, i.current.style.height = "100px"), t.current.scrollTop = b, setTimeout(() => k = !0, 0)
                }), Object(n.useEffect)(() => {
                    const t = window.innerWidth > 767 ? {
                            width: "100%"
                        } : {
                            y: "0%"
                        },
                        o = window.innerWidth > 767 ? {
                            width: "0%"
                        } : {
                            y: "100%"
                        };
                    if (l({
                            open: I(I({}, t), {}, {
                                transition: {
                                    ease: [.6, 0, 0, 1],
                                    duration: 1,
                                    delayChildren: .5,
                                    staggerChildren: .1
                                }
                            }),
                            navigate: {
                                opacity: 1,
                                transition: {
                                    duration: 1
                                }
                            },
                            close: I(I({}, o), {}, {
                                transition: {
                                    duration: .5,
                                    ease: [.6, 0, 0, 1]
                                }
                            })
                        }), e.isOpen) {
                        d(e.isOpen);
                        const t = window.innerWidth > 767 ? {
                            width: "0%"
                        } : {
                            width: "100%",
                            y: "100%",
                            height: "100vh"
                        };
                        p.set(t), p.start("open").then(() => {
                            f(!0)
                        }), h.start("show")
                    } else f(!1), h.start("hide"), p.start("close").then(() => {
                        d(e.isOpen)
                    })
                }, [e.isOpen]);
                const N = function() {
                    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return E.map((t, o) => M("li", {
                        className: B.a["megamenu__nav-item"],
                        key: t.text + o,
                        "data-number-decoration": (o + 1).toString().padStart(3, "0")
                    }, M(L.a, {
                        href: "/[...slugs]",
                        as: t.href
                    }, M("a", {
                        onClick: O,
                        tabIndex: e ? "-1" : null
                    }, M("span", {
                        style: {
                            display: "block",
                            overflow: "hidden"
                        }
                    }, M(m.a.span, {
                        style: {
                            display: "block"
                        },
                        variants: {
                            show: {
                                y: "0%",
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    ease: [.6, 0, 0, 1]
                                }
                            },
                            hide: {
                                y: "100%",
                                opacity: 0,
                                transition: {
                                    duration: .15
                                }
                            }
                        }
                    }, t.text))))))
                };
                return M(m.a.div, {
                    className: B.a["motion-wrapper"],
                    animate: p,
                    variants: s
                }, M("section", {
                    id: "mega-menu",
                    ref: t,
                    onScroll: e => {
                        g = e.currentTarget.scrollTop, k && (w || (window.requestAnimationFrame(() => {
                            (e => {
                                if (x) {
                                    if (e <= b && y) {
                                        const t = b / 2;
                                        r.current.style.opacity = 1 - (e - t) / t, r.current.style.opacity >= 1 && (r.current.style.removeProperty("opacity"), i.current.style.removeProperty("height"), y = !1)
                                    }
                                } else y = !1;
                                const o = Math.abs(Object(S.b)(a.current, "bottom")),
                                    n = Object(S.b)(a.current, "height") / 2,
                                    s = Object(S.b)(t.current, "height");
                                e >= o ? (t.current.scrollTop = n - s, x && (r.current.style.removeProperty("opacity"), i.current.style.removeProperty("height"), y = !1)) : e <= 0 && (t.current.scrollTop = n)
                            })(g), w = !1
                        }), w = !0))
                    },
                    "data-entrance-animation-finished": u,
                    className: `${B.a.megamenu} ${c?B.a["megamenu--open"]:""}`
                }, M("div", {
                    ref: a,
                    className: B.a.megamenu__wrapper,
                    "data-entrance-animation-finished": u
                }, M("nav", {
                    ref: o,
                    id: "mega-menu-nav",
                    className: B.a.megamenu__nav,
                    "aria-labelledby": "mega-menu-nav-title"
                }, M("span", {
                    ref: i,
                    id: "mega-menu-nav-title",
                    className: B.a["megamenu__nav-title"],
                    "data-entrance-animation-finished": u
                }, M(m.a.span, {
                    style: {
                        display: "block"
                    },
                    initial: _,
                    variants: v
                }, "Menu")), M(m.a.div, {
                    animate: h,
                    variants: {
                        show: {
                            transition: {
                                staggerChildren: .085,
                                delayChildren: .4
                            }
                        }
                    }
                }, M("ol", {
                    ref: r
                }, N(!1)), M("ol", {
                    "aria-hidden": "true"
                }, N()), M("ol", {
                    "aria-hidden": "true"
                }, N()), M("ol", {
                    "aria-hidden": "true"
                }, N())))), M(m.a.div, {
                    className: B.a["contact-section"],
                    initial: _,
                    variants: v
                }, M(L.a, {
                    href: "/"
                }, M("a", {
                    onClick: O,
                    className: B.a["contact-section__logo"]
                }, M(j.a, {
                    className: B.a["contact-section__logo-sprite"]
                }), M("span", null, "Blacksmith Agency"))), M("p", {
                    className: B.a["contact-section__address"]
                }, M("a", {
                    href: e.fields.companyInfo.addressLink,
                    target: "_blank",
                    rel: "noreferrer",
                    dangerouslySetInnerHTML: {
                        __html: e.fields.companyInfo.address
                    }
                }), M("a", {
                    href: "tel:" + Object(S.a)(e.fields.companyInfo.phone),
                    className: B.a["contact-section__phone"]
                }, e.fields.companyInfo.phone)), M("ul", {
                    className: B.a["contact-section__social"],
                    "aria-label": "Social Media"
                }, e.fields.socialLinks.map((e, t) => M("li", {
                    key: e.iconLetters + t,
                    className: B.a["contact-section__social-item"]
                }, M("a", {
                    "icon-content": e.iconLetters,
                    className: B.a["contact-section__social-link"],
                    href: e.link.url,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, e.link.title))))), M(m.a.div, {
                    className: B.a.megamenu__scroll,
                    initial: _,
                    variants: v
                }, M(C.a, {
                    variant: "white",
                    shouldAnimate: e.isOpen
                }))))
            }
            var P = r.a.createElement;
            let F = null,
                Y = !0;

            function V(e) {
                const {
                    0: t,
                    1: o
                } = Object(n.useState)(!1), {
                    0: a,
                    1: i
                } = Object(n.useState)(!1), {
                    0: s,
                    1: l
                } = Object(n.useState)(!1), c = Object(m.b)(), d = Object(m.b)();
                return P("header", {
                    className: p.a.header
                }, P("div", {
                    className: `${p.a.header__wrapper} ${a?p.a["header__wrapper--open"]:""}`
                }, P(L.a, {
                    href: "/",
                    as: "/"
                }, P("a", {
                    onClick: e => {
                        Object(T.d)(e), l(!0)
                    },
                    className: `${p.a.header__logo} ${a?p.a["header__logo--open"]:""}`
                }, "Blacksmith Agency", P(m.a.span, {
                    "data-logo-wrapper-desktop": !0,
                    animate: c,
                    variants: {
                        show: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: .5,
                                ease: [.6, 0, 0, 1]
                            }
                        },
                        hide: {
                            x: -30,
                            opacity: 0,
                            transition: {
                                duration: .5,
                                ease: [.6, 0, 0, 1]
                            }
                        }
                    }
                }, P(b.a, {
                    className: p.a["header__logo-sprite--small"]
                })), P("span", {
                    "data-logo-wrapper-mobile": !0
                }, P(b.a, {
                    className: p.a["header__logo-sprite--small"]
                })), P(k.a, {
                    className: p.a["header__logo-sprite--large"]
                }))), P("button", {
                    onClick: () => {
                        Y && (t ? (c.set({
                            x: 0,
                            opacity: 1
                        }), c.start("hide").then(() => {
                            i(!1), c.set({
                                x: 0,
                                opacity: 1
                            }), d.start("hide")
                        })) : (c.set({
                            x: -20,
                            opacity: 0
                        }), c.start("show"), window.innerWidth > 767 && d.set({
                            x: "-100%"
                        }), d.start("show"), i(!0)), o(!t), null === F ? (F = window.scrollY, document.body.classList.toggle("scroll-lock"), document.body.style.top = -F + "px") : (document.body.classList.toggle("scroll-lock"), document.body.style.removeProperty("top"), window.scrollTo(0, F), F = null))
                    },
                    className: `${p.a["header__menu-button"]} ${a?p.a["header__menu-button--open"]:""}`
                }, P(m.a.span, {
                    "data-background-desktop": !0,
                    animate: d,
                    initial: "hide",
                    variants: {
                        show: {
                            x: "0%",
                            transition: {
                                duration: .5,
                                ease: [.6, 0, 0, 1]
                            }
                        },
                        hide: {
                            x: "-100%",
                            transition: {
                                duration: .5,
                                ease: [.6, 0, 0, 1]
                            }
                        }
                    }
                }), P(m.a.span, {
                    "data-background-mobile": !0,
                    animate: d,
                    initial: "hide",
                    variants: {
                        show: {
                            y: "0%",
                            transition: {
                                duration: .095,
                                type: "tween"
                            }
                        },
                        hide: {
                            y: "100%",
                            transition: {
                                ease: "circOut",
                                delay: .095,
                                duration: .07
                            }
                        }
                    }
                }), a ? P(r.a.Fragment, null, P(g.a, {
                    className: p.a["header__menu-icon"]
                }), P("span", null, "Close")) : P(r.a.Fragment, null, P(_.a, {
                    className: p.a["header__menu-icon"]
                }), P("span", null, "Menu")))), P(z, {
                    fields: e,
                    removeBodyLock: () => {
                        document.body.classList.remove("scroll-lock"), document.body.style.removeProperty("top"), window.scrollTo(0, 0), F = null, o(!1), l(!1), c.set({
                            x: 0,
                            opacity: 1
                        }), c.start("hide").then(() => {
                            i(!1), c.set({
                                x: 0,
                                opacity: 1
                            }), d.start("hide")
                        })
                    },
                    isOpen: t,
                    animationStatus: e => Y = !e,
                    shouldNavigateHome: s
                }))
            }
            var A = o("X+J1"),
                X = o.n(A),
                q = o("8Mtm"),
                R = o.n(q),
                W = r.a.createElement;

            function D(e) {
                let {
                    fields: t,
                    companyInfo: o,
                    socialLinks: a,
                    navItems: n
                } = e;
                return W("footer", {
                    className: X.a.footer
                }, W("div", {
                    className: X.a["footer__contact-section"]
                }, W(L.a, {
                    href: "/"
                }, W("a", {
                    onClick: T.d,
                    className: X.a.footer__logo
                }, W(j.a, {
                    className: X.a["footer__logo-sprite"]
                }), W("span", null, "Blacksmith Agency"))), W("p", {
                    className: `${X.a.footer__address} ${X.a["footer__address--mobile"]}`
                }, W("a", {
                    href: o.addressLink,
                    target: "_blank",
                    rel: "noreferrer",
                    dangerouslySetInnerHTML: {
                        __html: o.address
                    }
                }), W("a", {
                    href: "tel:" + Object(S.a)(o.phone),
                    className: X.a.footer__phone
                }, o.phone)), W("ul", {
                    className: X.a.footer__social,
                    "aria-label": "Social Media"
                }, a.map((e, t) => W("li", {
                    key: e.iconLetters + t,
                    className: X.a["footer__social-item"]
                }, W("a", {
                    "icon-content": e.iconLetters,
                    className: X.a["footer__social-link"],
                    href: e.link.url,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, e.link.title))))), W("div", {
                    className: X.a["footer__site-section"]
                }, W("nav", {
                    id: "footer-nav",
                    className: X.a.footer__nav,
                    "aria-label": "Sitemap"
                }, W("ul", null, n.map((e, t) => W("li", {
                    key: e.link.title + t
                }, W(L.a, {
                    href: "/[...slugs]",
                    as: e.link.url
                }, W("a", {
                    onClick: T.d
                }, e.link.title)))))), W("p", {
                    className: X.a.footer__copyright
                }, t.copyright), W(L.a, {
                    href: "/[...slugs]",
                    as: t.termsLink.url
                }, W("a", {
                    onClick: T.d,
                    className: X.a.footer__terms
                }, t.termsLink.title))), W("p", {
                    className: `${X.a.footer__address} ${X.a["footer__address--desktop"]}`
                }, W("a", {
                    href: o.addressLink,
                    target: "_blank",
                    rel: "noreferrer",
                    dangerouslySetInnerHTML: {
                        __html: o.address
                    }
                }), W("a", {
                    href: "tel:" + Object(S.a)(o.phone),
                    className: X.a.footer__phone
                }, o.phone)), W("button", {
                    onClick: () => window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    }),
                    className: X.a["footer__back-top"]
                }, W(R.a, {
                    className: X.a["footer__back-top-sprite"]
                }), "Back to top"))
            }
            var $ = o("ioo7"),
                G = o.n($),
                Z = o("mwBR"),
                K = o.n(Z),
                U = o("IflB"),
                J = o.n(U),
                Q = r.a.createElement;
            var ee = () => {
                    const {
                        0: e,
                        1: t
                    } = Object(n.useState)(null);
                    Object(n.useEffect)(() => {
                        const e = document.getElementById("custom-cursor"),
                            o = {
                                actions: {
                                    moving: G.a["custom-cursor--action-moving"],
                                    clicking: G.a["custom-cursor--action-clicking"]
                                },
                                hover: {
                                    drag: G.a["custom-cursor--hover-drag"],
                                    expand: G.a["custom-cursor--hover-expand"],
                                    fade: G.a["custom-cursor--hover-fade"]
                                }
                            };
                        window.addEventListener("mousemove", t => {
                            let {
                                clientX: o,
                                clientY: a
                            } = t;
                            e.style.left = o + "px", e.style.top = a + "px"
                        }), document.body.addEventListener("mousedown", () => e.classList.add(o.actions.clicking)), document.body.addEventListener("mouseup", () => e.classList.remove(o.actions.clicking));
                        const a = ["a", "button", "[data-cursor-style]"];
                        let n = !1,
                            r = !1;
                        let i = !1;
                        document.body.addEventListener("mouseover", s => {
                            let {
                                target: l
                            } = s;
                            clearTimeout(i), i = setTimeout(() => (i => {
                                clearTimeout(n);
                                const s = a.map(e => i.closest(e)).filter(e => null !== e)[0] || null;
                                if (s && s === r) return;
                                r = s;
                                let l = "hovering" === e.getAttribute("data-state");
                                if (s && l ? (e.className = e.className.replace(/custom-cursor_custom-cursor--hover-[\w_]+/g, "").trim(), l = !1) : !s && l && (e.removeAttribute("data-state"), e.className = e.className.replace(/custom-cursor_custom-cursor--hover-[\w_]+/g, "").trim(), n = setTimeout(() => t(null), 500)), s && !l) {
                                    e.setAttribute("data-state", "hovering");
                                    const {
                                        cursorStyle: a = "expand"
                                    } = s.dataset;
                                    t(a), n = setTimeout(() => e.classList.add(o.hover[a]), 50)
                                }
                            })(l), 50)
                        })
                    }, []);
                    return Q("div", {
                        id: "custom-cursor",
                        className: G.a["custom-cursor"]
                    }, Q("div", {
                        className: G.a["custom-cursor__effect"]
                    }, (() => {
                        const t = {
                            drag: () => Q("div", {
                                className: G.a["custom-cursor__effect-drag"]
                            }, Q(J.a, {
                                className: G.a["crs-chevron"]
                            }), Q(K.a, {
                                className: G.a["crs-chevron"]
                            }))
                        };
                        return "undefined" !== typeof t[e] ? t[e]() : null
                    })()))
                },
                te = r.a.createElement;
            var oe = e => {
                    let {
                        animationControls: t
                    } = e;
                    const o = {
                        hide: {
                            pathLength: 0,
                            transition: {
                                duration: 0
                            }
                        },
                        show: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            return {
                                pathLength: 1,
                                transition: {
                                    duration: 1,
                                    ease: [.3, 0, 0, 1],
                                    delay: .7 * e
                                }
                            }
                        }
                    };
                    return te(m.a.div, {
                        initial: "fade",
                        animate: t,
                        variants: {
                            fade: {
                                opacity: 0,
                                transition: {
                                    duration: .5
                                }
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    duration: 0
                                }
                            }
                        }
                    }, te("svg", {
                        width: "88px",
                        height: "33px",
                        viewBox: "0 0 88 33"
                    }, te("title", null, "Blacksmith Agency"), te("g", {
                        id: "bsa-logo-artboard"
                    }, te("g", {
                        id: "bss-logo",
                        transform: "translate(1.000000, 0.000000)",
                        fillRule: "nonzero"
                    }, te("g", {
                        id: "a-shape",
                        transform: "translate(59.786090, 0.811338)"
                    }, te("g", {
                        id: "a-02",
                        transform: "translate(7.893204, 6.365681)"
                    }, te(m.a.path, {
                        initial: "hide",
                        animate: t,
                        variants: {
                            hide: {
                                opacity: 0,
                                transition: {
                                    duration: 0
                                }
                            },
                            show: {
                                opacity: 1,
                                transition: {
                                    duration: .5,
                                    delay: .5
                                }
                            }
                        },
                        fill: "#AF824C",
                        strokeWidth: "1",
                        stroke: "#AF824C",
                        transform: "translate(-1,0)",
                        d: "M0.0980685191 19.0568109 5.41806852 0.626810938 10.7980685 19.0568109z"
                    })), te("g", {
                        id: "a-01",
                        strokeWidth: "10",
                        stroke: "#AF824C",
                        fill: "none"
                    }, te("clipPath", {
                        id: "clip-a-01"
                    }, te("path", {
                        transform: "translate(-1,0)",
                        d: "M15.593204 0.890007707 10.993204 0.890007707 0.0932039958 31.2900077 6.093204 31.2900077 7.993204 25.8900077 13.313204 7.46000771 18.693204 25.8900077 20.593204 31.2900077 26.693204 31.2900077z"
                    })), te(m.a.path, {
                        initial: "hide",
                        animate: t,
                        variants: o,
                        d: "M0,30.42L10.19,0l10.46,30.42L19.9,14.8c0,0-3-9.38,1.78-5.25",
                        clipPath: "url(#clip-a-01)"
                    }))), te("g", {
                        id: "s-shape",
                        strokeWidth: "15",
                        stroke: "white",
                        transform: "translate(31.784397, 2)"
                    }, te("clipPath", {
                        id: "clip-s"
                    }, te("path", {
                        transform: "translate(31.7843, 0)",
                        d: "M-11.7,15.68c-1.64-1.3-3.62-2.1-5.7-2.31h-0.08c-1.3-0.2-2.71-0.3-4-0.6c-0.9-0.17-1.73-0.59-2.41-1.2c-1.39-1.4-0.89-3.7,0.41-5c1.01-0.91,2.34-1.38,3.7-1.3c1.38-0.03,2.74,0.24,4,0.8c0.2,0.1,2,1.3,2,1.3l3.8-3.6c-3.8-3.3-9.5-4.8-14.3-3c-1.22,0.36-2.34,1.01-3.27,1.89c-0.92,0.83-1.64,1.85-2.11,3c-0.51,1.2-0.75,2.5-0.7,3.8c-0.16,2.19,0.64,4.35,2.2,5.9c1.41,1.4,3.3,2.1,5.91,2.6l3.59,0.5c1.5,0.4,2.8,0.6,3.3,2.3c0.47,1.5-0.05,3.14-1.3,4.1c-1.19,0.77-2.59,1.12-4,1c-1.35-0.01-2.69-0.18-4-0.5c-1.29-0.33-2.45-1.07-3.29-2.1l-3.83,3.79c4.07,4.08,10.82,5,16.14,3.13c2.3-0.77,4.22-2.39,5.36-4.53c1.27-2.51,1.29-5.47,0.06-8C-10.59,16.91-11.09,16.24-11.7,15.68L-11.7,15.68z"
                    })), te(m.a.path, {
                        initial: "hide",
                        animate: t,
                        variants: o,
                        d: "M20.03,3.05c0,0-3.14-3.05-7.46-3.05S2.21,3.01,2.21,6.71s3.33,6.45,7.91,6.45s7.91,2.98,7.91,6.17S14.74,26,10.12,26S1.69,24.37,0,22.68",
                        clipPath: "url(#clip-s)"
                    })), te("g", {
                        id: "b-shape",
                        transform: "translate(-0.000724, 1.321583)",
                        strokeWidth: "10",
                        stroke: "white",
                        fill: "none"
                    }, te("g", {
                        id: "b-03",
                        transform: "translate(6.000000, 0.000000)"
                    }, te("clipPath", {
                        id: "clip-b-03"
                    }, te("path", {
                        d: "M0 0 0 10.25 0 10.25 0 17.9 0 17.9 0 18.5 0.01 30.8 6.1 30.8 6.1 30.8 6.1 25.1 6.1 17.9 6.1 12.5 6.1 6.77 6.1 5.6 6.1 0z"
                    })), te(m.a.path, {
                        initial: "hide",
                        animate: t,
                        variants: o,
                        d: "M0.5,0v30.78",
                        clipPath: "url(#clip-b-03)"
                    })), te("g", {
                        id: "b-02",
                        transform: "translate(11.000000, 15.000000)"
                    }, te("clipPath", {
                        id: "clip-b-02"
                    }, te("path", {
                        d: "M14.528122,2.24034242 C13.9358804,1.44054452 13.1958713,0.761637082 12.348122,0.240342418 L6.34812204,2.90034242 C7.72812204,2.90034242 8.48812204,2.90034242 9.19812204,3.60034242 C9.87277372,4.29392501 10.2341226,5.23343205 10.198122,6.20034242 C10.2403709,7.25822574 9.88343416,8.29334218 9.19812204,9.10034242 C8.41492287,9.82637474 7.36236149,10.1893269 6.29812204,10.1003424 L0.0981220352,10.1003424 L0.0981220352,15.8003424 L6.69812204,15.8003424 C7.98082632,15.7948959 9.25766794,15.6268904 10.498122,15.3003424 C11.5857282,15.004167 12.5802,14.436389 13.388122,13.6503424 C15.1635802,11.9111397 16.1407936,9.515157 16.088122,7.03034242 C16.0975211,5.30734279 15.5503843,3.62735212 14.528122,2.24034242 Z"
                    })), te(m.a.path, {
                        initial: "hide",
                        animate: t,
                        variants: o,
                        d: "M10.45,0.36c0,0,2.29,2.16,2.48,5.44c0.19,3.28-3.28,5.82-4.93,5.82s-8,0-8,0",
                        clipPath: "url(#clip-b-02)"
                    })), te("g", {
                        id: "b-01",
                        transform: "translate(-1, 0)"
                    }, te("clipPath", {
                        id: "clip-b-01"
                    }, te("path", {
                        d: "M18.45,17.9 C20.7099012,17.7848721 22.8472093,16.8373322 24.45,15.24 C26.0416337,13.920415 27.0684198,12.0421476 27.32,9.99 C27.402913,9.53122444 27.4464051,9.0661938 27.45,8.6 C27.5038686,6.26708466 26.6424119,4.00576089 25.05,2.3 C23.55,0.7 21.05,-1.0658141e-14 18.15,-1.0658141e-14 L12.1,-1.0658141e-14 L12.1,5.6 L17.8,5.6 C18.8611486,5.53469345 19.9046405,5.89451822 20.7,6.6 C21.3746517,7.29358259 21.7360005,8.23308963 21.7,9.2 C21.7360005,10.1669104 21.3746517,11.1064174 20.7,11.8 C20.5714714,11.9238645 20.4307568,12.034426 20.28,12.13 C19.8713719,12.3636165 19.4106057,12.490843 18.94,12.5 L0,12.5 L0,17.9 L12.2,17.9 L18.45,17.9 Z"
                    })), te(m.a.path, {
                        initial: "hide",
                        animate: t,
                        variants: o,
                        d: "M0,13.07h20.09c0,0,4.65-1.49,4.65-6.23S19.58,0.5,19.58,0.5H6",
                        clipPath: "url(#clip-b-01)"
                    })))))))
                },
                ae = o("nOHt"),
                ne = r.a.createElement;
            let re = !0;

            function ie(e) {
                let {
                    fields: t,
                    children: o
                } = e;
                const a = Object(ae.useRouter)(),
                    i = Object(m.b)(),
                    s = Object(m.b)();
                Object(n.useEffect)(() => (s.start("visible"), s.start("show"), setTimeout(() => d(), 1e3), window.addEventListener("start-route-transition", l), a.events.on("routeChangeComplete", d), () => {
                    window.removeEventListener("start-route-transition", l), a.events.off("routeChangeComplete", d)
                }), []);
                const l = e => {
                        re = !0;
                        const t = document.getElementById("mega-menu");
                        if (t && "none" !== Object(S.b)(t, "display", !1)) {
                            const t = window.innerWidth > 767 ? 80 : 0,
                                o = window.innerWidth - t,
                                n = window.innerHeight;
                            i.set({
                                x: t,
                                y: 0,
                                width: o,
                                height: n,
                                opacity: 0,
                                display: "flex"
                            }), i.start({
                                opacity: 1,
                                transition: {
                                    duration: .3
                                }
                            }).then(() => {
                                if (e) {
                                    const t = "/" === e.detail.href ? "/" : "/[...slugs]";
                                    a.push(t, e.detail.href)
                                }
                            })
                        } else {
                            const t = window.innerWidth + 10,
                                o = window.innerHeight + 10;
                            i.set({
                                x: -t,
                                y: 0,
                                width: t,
                                height: o,
                                display: "flex"
                            }), i.start({
                                x: 0,
                                transition: {
                                    duration: .3,
                                    ease: [.6, 0, 0, 1]
                                }
                            }).then(() => {
                                if (e) {
                                    const t = "/" === e.detail.href ? "/" : "/[...slugs]";
                                    a.push(t, e.detail.href)
                                }
                            })
                        }
                        setTimeout(() => {
                            s.start("visible"), s.start("show")
                        }, 500)
                    },
                    d = () => {
                        re ? (re = !1, window.scrollTo(0, 0), setTimeout(() => {
                            const e = document.querySelector("[data-transition-banner]");
                            let t = {
                                x: "100%",
                                transition: {
                                    duration: .65,
                                    ease: [.6, 0, 0, 1]
                                }
                            };
                            window.innerWidth > 767 && e && "none" !== Object(S.b)(e, "display", !1) && (t = {
                                x: e.getClientRects()[0].x,
                                y: e.getClientRects()[0].y,
                                width: e.getClientRects()[0].width,
                                height: e.getClientRects()[0].height,
                                transition: {
                                    duration: .65,
                                    ease: [.6, 0, 0, 1]
                                }
                            }), window.dispatchEvent(new Event("transition-overlay-started")), s.start("fade"), setTimeout(() => s.start("hide"), 700), i.start(t).then(() => {
                                i.set({
                                    display: "none"
                                }), window.dispatchEvent(new Event("transition-overlay-ended"))
                            })
                        }, 500)) : setTimeout(() => {
                            window.scrollTo(0, 0), window.dispatchEvent(new Event("transition-overlay-started")), window.dispatchEvent(new Event("transition-overlay-ended"))
                        }, 300)
                    };
                return ne(r.a.Fragment, null, ne(u.a, null, ne("meta", {
                    property: "og:viewport",
                    key: "viewport",
                    content: "width=device-width, initial-scale=1.0, minimal-ui"
                }), ne("meta", {
                    property: "og:theme-color",
                    key: "theme-color",
                    content: "#333333"
                }), ne("link", {
                    rel: "icon",
                    href: "/favicon.png"
                })), ne(ee, null), ne("a", {
                    href: "#main-content",
                    className: "jump-to-main-content"
                }, "Jump to main conent"), t ? ne(V, {
                    companyInfo: t.companyInfo,
                    socialLinks: t.socialLinks,
                    navItems: t.mainNavItems
                }) : null, ne("div", {
                    id: "main-content",
                    className: c.a["main-wrapper"]
                }, o), t ? ne(D, {
                    fields: t.footerFields,
                    companyInfo: t.companyInfo,
                    socialLinks: t.socialLinks,
                    navItems: t.footerNavItems
                }) : null, ne(m.a.div, {
                    "aria-hidden": "true",
                    className: c.a["transition-overlay"],
                    animate: i
                }, ne(oe, {
                    animationControls: s
                })))
            }
            var se = o("7/s4"),
                le = o.n(se),
                ce = r.a.createElement;
            s.a.polyfill();
            const de = {
                gtmId: "GTM-TPTRXNV"
            };

            function ue(e) {
                let {
                    Component: t,
                    pageProps: o
                } = e, {
                    0: r,
                    1: i
                } = Object(n.useState)();
                return Object(n.useEffect)(() => {
                    le.a.initialize(de)
                }, [le.a]), ce(ie, {
                    fields: r
                }, ce(t, Object(a.a)({
                    setLayoutProps: i
                }, o)))
            }
        },
        "2Yrw": function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "bsa-small-light-7e09884f--sprite",
                    use: "bsa-small-light-7e09884f--sprite-usage",
                    viewBox: "0 0 70 26",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 26" id="bsa-small-light-7e09884f--sprite"><g fill="none"><path d="M21.416 14.034a4.217 4.217 0 00-1.105-1.112c-.415-.278-.83-.556-1.105-.695.276-.139.552-.416.967-.694.414-.278.69-.695.967-1.112.276-.417.553-.973.69-1.39.139-.555.277-1.111.277-1.806 0-2.084-.69-3.751-1.934-5.002C18.929.973 16.995.417 14.646.417H4.974v9.865H.138v4.307h4.974v10.283H15.2c1.105 0 2.072-.14 3.04-.417.967-.278 1.657-.695 2.348-1.39.691-.556 1.106-1.39 1.52-2.223.415-.834.553-1.806.553-3.057 0-.833-.138-1.528-.277-2.084-.276-.695-.552-1.25-.967-1.667zM9.81 4.724h4.56c.967 0 1.796.278 2.349.834.552.556.829 1.25.829 2.084 0 .834-.277 1.529-.83 2.084-.552.556-1.243.834-2.348.834H9.81V4.724zm7.323 14.868c-.553.555-1.244.833-2.349.833H9.81v-5.974h4.974c1.105 0 1.935.277 2.349.833.553.556.829 1.25.829 2.084 0 .834-.276 1.668-.829 2.224z" fill="#FFF" /><path fill="#AF824C" d="M57.151.695L48.446 25.01h4.836l1.52-4.308h8.567l1.52 4.308h4.835L60.882.695z" /><path d="M42.428 12.644c-.553-.417-1.106-.833-1.935-1.111a11.414 11.414 0 00-2.763-.695l-2.902-.417c-.552 0-.967-.139-1.243-.417-.415-.139-.691-.417-.967-.556-.277-.277-.415-.555-.553-.833-.138-.278-.138-.556-.138-.973 0-.834.276-1.528.967-2.223.553-.556 1.52-.973 2.763-.973.83 0 1.658.14 2.487.278.83.14 1.658.695 2.487 1.39l3.04-2.918c-1.105-.973-2.21-1.807-3.454-2.223-1.244-.417-2.763-.695-4.421-.695-1.382 0-2.488.139-3.593.556-1.105.417-1.934.833-2.625 1.528-.69.695-1.244 1.39-1.658 2.362-.415.834-.553 1.945-.553 3.057 0 2.084.553 3.613 1.796 4.724 1.106 1.112 2.626 1.668 4.698 2.084l2.902.417c.552.14.967.14 1.243.278.277.14.553.278.83.556.552.417.69 1.112.69 2.084 0 .973-.414 1.668-1.105 2.223-.691.556-1.796.834-3.178.834-1.106 0-2.21-.139-3.178-.417-.967-.278-1.934-.833-2.625-1.667l-3.04 3.057c1.244 1.25 2.487 2.084 3.869 2.5 1.381.418 3.04.695 4.974.695 1.243 0 2.487-.138 3.592-.555 1.106-.278 2.073-.834 2.902-1.39.829-.695 1.382-1.39 1.934-2.362.415-.973.691-1.945.691-3.196 0-1.111-.138-2.084-.414-2.918-.415-.694-.968-1.39-1.52-2.084z" fill="#FFF" /></g></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        "4Xc8": function(e, t, o) {
            e.exports = {
                "motion-wrapper": "mega-menu_motion-wrapper__149xf",
                megamenu: "mega-menu_megamenu__1T6dX",
                "megamenu--open": "mega-menu_megamenu--open__1AlXZ",
                megamenu__wrapper: "mega-menu_megamenu__wrapper__1LOIl",
                "megamenu__nav-title": "mega-menu_megamenu__nav-title__2HAI8",
                "megamenu__nav-item": "mega-menu_megamenu__nav-item__11ZLz",
                megamenu__scroll: "mega-menu_megamenu__scroll__8t6vx",
                "contact-section": "mega-menu_contact-section__2Sb8v",
                "contact-section__logo": "mega-menu_contact-section__logo__3E6R0",
                "contact-section__logo-sprite": "mega-menu_contact-section__logo-sprite__Vz1Ci",
                "contact-section__address": "mega-menu_contact-section__address__1sDsD",
                "contact-section__phone": "mega-menu_contact-section__phone__1OEVf",
                "contact-section__social": "mega-menu_contact-section__social__33OZm",
                "contact-section__social-link": "mega-menu_contact-section__social-link__1RfHU"
            }
        },
        "5r6G": function(e, t, o) {
            e.exports = {
                "main-wrapper": "layout_main-wrapper__g-8Pj",
                "transition-overlay": "layout_transition-overlay__2Ih_s"
            }
        },
        "7/s4": function(e, t, o) {
            "use strict";
            var a, n = o("hKbo"),
                r = (a = n) && a.__esModule ? a : {
                    default: a
                };
            e.exports = r.default
        },
        "7gc7": function(e, t, o) {
            e.exports = {
                scroll__text: "scroll-indicator_scroll__text__HZW5q",
                scroll__sprite: "scroll-indicator_scroll__sprite__18Y5Q",
                arrow: "scroll-indicator_arrow__sckSU"
            }
        },
        "8Mtm": function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "back-to-top-cabcd8e5--sprite",
                    use: "back-to-top-cabcd8e5--sprite-usage",
                    viewBox: "0 0 44 44",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="back-to-top-cabcd8e5--sprite"><g fill="none" fill-rule="evenodd"><path stroke="#AF824C" stroke-width=".8" fill="#AF824C" d="M.4.4h43.2v43.2H.4z" /><path d="M22.44 17.386h2.08l-2.72-2.584-2.72 2.584h2.08v12.612h1.28z" fill="#FFF" fill-rule="nonzero" /></g></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        BgbX: function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return d
            }));
            var a = o("q1tI"),
                n = o.n(a),
                r = o("7gc7"),
                i = o.n(r),
                s = o("KHy4"),
                l = o.n(s),
                c = n.a.createElement;

            function d(e) {
                let {
                    variant: t,
                    className: o
                } = e;
                return c("span", {
                    "aria-hidden": "true",
                    className: o
                }, c("span", {
                    "data-variant": t,
                    className: i.a.scroll__text
                }, "Scroll", c(l.a, {
                    "data-variant": t,
                    className: i.a.scroll__sprite
                })))
            }
        },
        GcxT: function(e, t, o) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return o("1TCz")
            }])
        },
        Gpft: function(e, t, o) {},
        Ic8D: function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "bsa-small-dark-b6f8b264--sprite",
                    use: "bsa-small-dark-b6f8b264--sprite-usage",
                    viewBox: "0 0 38 14",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 14" id="bsa-small-dark-b6f8b264--sprite"><defs><path id="bsa-small-dark-b6f8b264--sprite_a" d="M.045.463h37.67v12.848H.045z" /></defs><g fill="none" fill-rule="evenodd"><mask id="bsa-small-dark-b6f8b264--sprite_b" fill="#fff"><use xlink:href="#bsa-small-dark-b6f8b264--sprite_a" /></mask><path fill="#AF824C" mask="url(#bsa-small-dark-b6f8b264--sprite_b)" d="M35.133 13.25l-.748-2.245H29.88l-.766 2.244h-2.582L31.144.571h1.941l4.63 12.678h-2.582" /><path d="M23.59 7.979a2.793 2.793 0 00-.748-1.159 3.398 3.398 0 00-.98-.614c-.38-.16-.86-.282-1.441-.365l-1.497-.214a2.463 2.463 0 01-.686-.187 1.869 1.869 0 01-.49-.311 1.224 1.224 0 01-.284-.427 1.328 1.328 0 01-.09-.48c0-.44.16-.817.482-1.132.32-.315.813-.472 1.478-.472.415 0 .851.051 1.308.152.458.1.889.34 1.292.72l1.567-1.549c-.546-.533-1.146-.913-1.799-1.14-.653-.225-1.419-.338-2.297-.338-.688 0-1.306.096-1.852.286-.546.19-1.01.453-1.39.791a3.41 3.41 0 00-.872 1.211c-.202.47-.303.989-.303 1.56 0 1.056.303 1.887.909 2.492.558.546 1.377.897 2.457 1.05l1.532.214c.296.048.525.104.686.17.16.064.305.157.436.275.26.25.391.606.391 1.069 0 .51-.19.899-.57 1.166-.38.267-.937.4-1.673.4a5.873 5.873 0 01-1.674-.23 3.242 3.242 0 01-1.39-.838l-1.602 1.603c.617.63 1.303 1.066 2.057 1.309.753.243 1.612.365 2.574.365a6.41 6.41 0 001.852-.258 4.535 4.535 0 001.487-.748 3.55 3.55 0 00.996-1.202c.244-.475.365-1.021.365-1.639 0-.569-.077-1.08-.231-1.53m-14.667 2.6c-.267.308-.685.463-1.256.463H5.086V7.925h2.581c.57 0 .99.15 1.256.454.267.302.401.667.401 1.095 0 .427-.134.795-.401 1.105zM5.086 2.778h2.42c.535 0 .942.134 1.22.4.28.269.42.622.42 1.061 0 .44-.14.792-.42 1.06-.278.266-.685.4-1.22.4h-2.42V2.778zm6.125 4.897a2.538 2.538 0 00-.56-.56 4.546 4.546 0 00-.598-.365 2.37 2.37 0 00.508-.338 3.15 3.15 0 00.516-.561c.161-.22.291-.473.393-.758.1-.284.151-.605.151-.962 0-1.091-.342-1.958-1.024-2.599C9.914.89 8.95.571 7.703.571H2.61V5.7H0v2.212h2.61v5.336h5.307c.57 0 1.092-.08 1.567-.24.474-.16.884-.394 1.229-.704.344-.308.61-.688.801-1.139.19-.452.285-.974.285-1.567a3.3 3.3 0 00-.17-1.113 3.126 3.126 0 00-.418-.81z" fill="#171918" mask="url(#bsa-small-dark-b6f8b264--sprite_b)" /></g></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        IflB: function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "cursor-chevron-left-33152726--sprite",
                    use: "cursor-chevron-left-33152726--sprite-usage",
                    viewBox: "0 0 9 14",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14" id="cursor-chevron-left-33152726--sprite"><path d="M7.283 0L9 1.651 3.435 7 9 12.349 7.283 14 0 7l7.283-7z" /></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        KHy4: function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "arrow-scroll-5353ea44--sprite",
                    use: "arrow-scroll-5353ea44--sprite-usage",
                    viewBox: "0 0 25 7",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 7" id="arrow-scroll-5353ea44--sprite"><path d="M20.515 5.418l2.1-1.92-2.1-1.92.933-.854 3.034 2.774-3.034 2.773z" /><path d="M.163 2.894h21.836c1.004 0 1.82.27 1.82.604 0 .333-.816.603-1.82.603H.163V2.894z" /></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        Kacz: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                console.warn("[react-gtm]", e)
            }
        },
        "X+J1": function(e, t, o) {
            e.exports = {
                footer: "footer_footer__2CeEI",
                "footer__contact-section": "footer_footer__contact-section__38mBj",
                footer__logo: "footer_footer__logo__xvOF4",
                "footer__logo-sprite": "footer_footer__logo-sprite__3YFnN",
                footer__address: "footer_footer__address__2LngY",
                "footer__address--mobile": "footer_footer__address--mobile__11IdH",
                "footer__address--desktop": "footer_footer__address--desktop__1sPf-",
                footer__phone: "footer_footer__phone__1ZSZH",
                footer__social: "footer_footer__social__2by9U",
                "footer__social-link": "footer_footer__social-link__2Kd6z",
                "footer__site-section": "footer_footer__site-section__37SE-",
                footer__nav: "footer_footer__nav__1b5Yy",
                footer__copyright: "footer_footer__copyright__3ZjWx",
                footer__terms: "footer_footer__terms__1HeNx",
                "footer__back-top": "footer_footer__back-top__38lz2",
                "footer__back-top-sprite": "footer_footer__back-top-sprite__2H7p5"
            }
        },
        dwco: function(e, t, o) {
            ! function() {
                "use strict";
                e.exports = {
                    polyfill: function() {
                        var e = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                            var o, a = e.HTMLElement || e.Element,
                                n = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: a.prototype.scroll || s,
                                    scrollIntoView: a.prototype.scrollIntoView
                                },
                                r = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                i = (o = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : n.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (l(arguments[0]) ? n.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, a.prototype.scroll = a.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== l(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        p.call(this, this, "undefined" === typeof e ? this.scrollLeft : ~~e, "undefined" === typeof t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, a.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, a.prototype.scrollIntoView = function() {
                                if (!0 !== l(arguments[0])) {
                                    var o = m(this),
                                        a = o.getBoundingClientRect(),
                                        r = this.getBoundingClientRect();
                                    o !== t.body ? (p.call(this, o, o.scrollLeft + r.left - a.left, o.scrollTop + r.top - a.top), "fixed" !== e.getComputedStyle(o).position && e.scrollBy({
                                        left: a.left,
                                        top: a.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: r.left,
                                        top: r.top,
                                        behavior: "smooth"
                                    })
                                } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function s(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function l(e) {
                            if (null === e || "object" !== typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" === typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function c(e, t) {
                            return "Y" === t ? e.clientHeight + i < e.scrollHeight : "X" === t ? e.clientWidth + i < e.scrollWidth : void 0
                        }

                        function d(t, o) {
                            var a = e.getComputedStyle(t, null)["overflow" + o];
                            return "auto" === a || "scroll" === a
                        }

                        function u(e) {
                            var t = c(e, "Y") && d(e, "Y"),
                                o = c(e, "X") && d(e, "X");
                            return t || o
                        }

                        function m(e) {
                            for (; e !== t.body && !1 === u(e);) e = e.parentNode || e.host;
                            return e
                        }

                        function f(t) {
                            var o, a, n, i, s = (r() - t.startTime) / 468;
                            i = s = s > 1 ? 1 : s, o = .5 * (1 - Math.cos(Math.PI * i)), a = t.startX + (t.x - t.startX) * o, n = t.startY + (t.y - t.startY) * o, t.method.call(t.scrollable, a, n), a === t.x && n === t.y || e.requestAnimationFrame(f.bind(e, t))
                        }

                        function p(o, a, i) {
                            var l, c, d, u, m = r();
                            o === t.body ? (l = e, c = e.scrollX || e.pageXOffset, d = e.scrollY || e.pageYOffset, u = n.scroll) : (l = o, c = o.scrollLeft, d = o.scrollTop, u = s), f({
                                scrollable: l,
                                method: u,
                                startTime: m,
                                startX: c,
                                startY: d,
                                x: a,
                                y: i
                            })
                        }
                    }
                }
            }()
        },
        f01a: function(e, t, o) {
            ! function() {
                "use strict";

                function e(e) {
                    var t = !0,
                        o = !1,
                        a = null,
                        n = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0
                        };

                    function r(e) {
                        return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
                    }

                    function i(e) {
                        e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
                    }

                    function s(e) {
                        t = !1
                    }

                    function l() {
                        document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
                    }

                    function c(e) {
                        e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
                    }
                    document.addEventListener("keydown", (function(o) {
                        o.metaKey || o.altKey || o.ctrlKey || (r(e.activeElement) && i(e.activeElement), t = !0)
                    }), !0), document.addEventListener("mousedown", s, !0), document.addEventListener("pointerdown", s, !0), document.addEventListener("touchstart", s, !0), document.addEventListener("visibilitychange", (function(e) {
                        "hidden" === document.visibilityState && (o && (t = !0), l())
                    }), !0), l(), e.addEventListener("focus", (function(e) {
                        var o, a, s;
                        r(e.target) && (t || (a = (o = e.target).type, "INPUT" === (s = o.tagName) && n[a] && !o.readOnly || "TEXTAREA" === s && !o.readOnly || o.isContentEditable)) && i(e.target)
                    }), !0), e.addEventListener("blur", (function(e) {
                        var t;
                        r(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (o = !0, window.clearTimeout(a), a = window.setTimeout((function() {
                            o = !1
                        }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
                    }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
                }
                if ("undefined" != typeof window && "undefined" != typeof document) {
                    var t;
                    window.applyFocusVisiblePolyfill = e;
                    try {
                        t = new CustomEvent("focus-visible-polyfill-ready")
                    } catch (e) {
                        (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                    }
                    window.dispatchEvent(t)
                }
                "undefined" != typeof document && e(document)
            }()
        },
        hKbo: function(e, t, o) {
            "use strict";
            var a, n = o("wWlz"),
                r = (a = n) && a.__esModule ? a : {
                    default: a
                };
            var i = {
                dataScript: function(e) {
                    var t = document.createElement("script");
                    return t.innerHTML = e, t
                },
                gtm: function(e) {
                    var t = r.default.tags(e);
                    return {
                        noScript: function() {
                            var e = document.createElement("noscript");
                            return e.innerHTML = t.iframe, e
                        },
                        script: function() {
                            var e = document.createElement("script");
                            return e.innerHTML = t.script, e
                        },
                        dataScript: this.dataScript(t.dataLayerVar)
                    }
                },
                initialize: function(e) {
                    var t = e.gtmId,
                        o = e.events,
                        a = void 0 === o ? {} : o,
                        n = e.dataLayer,
                        r = e.dataLayerName,
                        i = void 0 === r ? "dataLayer" : r,
                        s = e.auth,
                        l = void 0 === s ? "" : s,
                        c = e.preview,
                        d = void 0 === c ? "" : c,
                        u = this.gtm({
                            id: t,
                            events: a,
                            dataLayer: n || void 0,
                            dataLayerName: i,
                            auth: l,
                            preview: d
                        });
                    n && document.head.appendChild(u.dataScript), document.head.insertBefore(u.script(), document.head.childNodes[0]), document.body.insertBefore(u.noScript(), document.body.childNodes[0])
                },
                dataLayer: function(e) {
                    var t = e.dataLayer,
                        o = e.dataLayerName,
                        a = void 0 === o ? "dataLayer" : o;
                    if (window[a]) return window[a].push(t);
                    var n = r.default.dataLayer(t, a),
                        i = this.dataScript(n);
                    document.head.insertBefore(i, document.head.childNodes[0])
                }
            };
            e.exports = i
        },
        ioo7: function(e, t, o) {
            e.exports = {
                "custom-cursor": "custom-cursor_custom-cursor__1ViUG",
                "custom-cursor__effect": "custom-cursor_custom-cursor__effect__2opGW",
                "custom-cursor__effect-drag": "custom-cursor_custom-cursor__effect-drag__3-q5d",
                "crs-chevron": "custom-cursor_crs-chevron__3D2Zu",
                "custom-cursor--action-moving": "custom-cursor_custom-cursor--action-moving__1MU1z",
                "custom-cursor--action-clicking": "custom-cursor_custom-cursor--action-clicking__17qYz",
                "custom-cursor--hover-drag": "custom-cursor_custom-cursor--hover-drag__2Js4Y",
                "custom-cursor--hover-expand": "custom-cursor_custom-cursor--hover-expand__23tQh",
                "custom-cursor--clicking": "custom-cursor_custom-cursor--clicking__2RTw0",
                "custom-cursor--hover-fade": "custom-cursor_custom-cursor--hover-fade__3CUe9"
            }
        },
        j9Gt: function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "blacksmith-logo-dark-516e54ba--sprite",
                    use: "blacksmith-logo-dark-516e54ba--sprite-usage",
                    viewBox: "0 0 131 14",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 131 14" id="blacksmith-logo-dark-516e54ba--sprite"><defs><path id="blacksmith-logo-dark-516e54ba--sprite_a" d="M.044.13h12.011v12.955H.045z" /><path id="blacksmith-logo-dark-516e54ba--sprite_c" d="M.53.147h50.118v13.129H.53z" /><path id="blacksmith-logo-dark-516e54ba--sprite_e" d="M.725.256h25.329v12.955H.725z" /></defs><g fill="none" fill-rule="evenodd"><mask id="blacksmith-logo-dark-516e54ba--sprite_b" fill="#fff"><use xlink:href="#blacksmith-logo-dark-516e54ba--sprite_a" /></mask><path d="M9.118 10.356c-.274.316-.701.473-1.284.473H5.196V7.644h2.638c.583 0 1.01.155 1.284.464.272.31.409.682.409 1.12 0 .436-.137.812-.41 1.128zm-3.922-7.97h2.475c.546 0 .961.137 1.246.409.285.273.428.634.428 1.083 0 .449-.143.81-.428 1.083-.285.272-.7.41-1.246.41H5.196V2.385zm6.26 5.004a2.577 2.577 0 00-.574-.573 4.602 4.602 0 00-.61-.374c.158-.073.331-.188.52-.345.187-.158.364-.349.527-.573a2.93 2.93 0 00.555-1.756c0-1.116-.35-2.002-1.046-2.658C10.13.457 9.144.13 7.87.13H2.667v5.243H0v2.26h2.667v5.453h5.422c.582 0 1.116-.082 1.601-.246a3.552 3.552 0 001.256-.719c.352-.315.625-.703.819-1.164.193-.46.29-.995.29-1.6 0-.438-.057-.817-.172-1.138a3.213 3.213 0 00-.428-.828z" fill="#171918" mask="url(#blacksmith-logo-dark-516e54ba--sprite_b)" /><path fill="#171918" d="M18.382.256h-2.529v12.955h8.406v-2.255h-5.877V.256" /><g transform="translate(26.64)"><mask id="blacksmith-logo-dark-516e54ba--sprite_d" fill="#fff"><use xlink:href="#blacksmith-logo-dark-516e54ba--sprite_c" /></mask><path fill="#9C7C52" mask="url(#blacksmith-logo-dark-516e54ba--sprite_d)" d="M5.244.256L.53 13.211h2.638l.783-2.293h4.603l.765 2.293h2.638L7.227.256H5.244" /><path d="M16.93 4.168c.049-.267.116-.483.2-.646a2.11 2.11 0 01.31-.446c.182-.206.41-.37.683-.491a2.28 2.28 0 01.936-.182c.643 0 1.135.176 1.475.527.34.353.575.79.71 1.31h2.565c-.11-.678-.307-1.273-.592-1.782a4.485 4.485 0 00-1.055-1.284A4.287 4.287 0 0020.742.4a5.54 5.54 0 00-1.701-.253c-.716 0-1.36.12-1.937.364a4.846 4.846 0 00-1.557 1.055 3.783 3.783 0 00-.754 1.045c-.177.371-.3.769-.373 1.193-.074.424-.116.88-.128 1.364a60.79 60.79 0 00-.018 1.565c0 .558.006 1.08.018 1.565.012.486.054.94.128 1.366.072.424.196.821.373 1.19.175.371.427.72.754 1.047.461.46.98.813 1.557 1.056.576.242 1.221.363 1.937.363.594 0 1.158-.084 1.692-.255a4.24 4.24 0 001.43-.773 4.496 4.496 0 001.054-1.283c.285-.51.482-1.103.592-1.783h-2.566c-.134.522-.37.959-.71 1.31-.34.352-.83.528-1.474.528a2.28 2.28 0 01-.936-.182 1.942 1.942 0 01-.683-.49 2.096 2.096 0 01-.31-.447 2.318 2.318 0 01-.2-.646 7.65 7.65 0 01-.1-1.02 35.626 35.626 0 01-.027-1.546c0-.618.01-1.134.028-1.546a7.38 7.38 0 01.1-1.02M38.074.256H35l-4.567 5.64V.256h-2.529v12.955h2.53V9.317l1.673-2.001 3.33 5.895h2.949L33.78 5.405 38.074.256m11.573 6.386a3.453 3.453 0 00-1-.627c-.389-.164-.88-.288-1.474-.373l-1.53-.22a2.543 2.543 0 01-.7-.19c-.2-.09-.367-.197-.5-.318a1.252 1.252 0 01-.29-.436 1.362 1.362 0 01-.092-.492c0-.449.164-.834.491-1.156.328-.321.83-.482 1.51-.482.425 0 .871.052 1.338.155.467.103.906.348 1.32.737l1.6-1.583c-.557-.546-1.17-.934-1.837-1.165-.668-.23-1.45-.345-2.348-.345-.703 0-1.335.097-1.892.291a4.135 4.135 0 00-1.42.81 3.47 3.47 0 00-.89 1.236c-.207.48-.31 1.01-.31 1.593 0 1.08.31 1.929.928 2.547.569.558 1.406.916 2.511 1.073l1.565.219c.303.049.535.106.7.174.164.066.312.16.447.282.266.253.4.617.4 1.09 0 .522-.195.92-.582 1.193-.39.273-.959.409-1.711.409a5.986 5.986 0 01-1.711-.236 3.315 3.315 0 01-1.42-.856l-1.636 1.638c.63.644 1.33 1.088 2.1 1.338.77.248 1.648.372 2.63.372.68 0 1.31-.088 1.893-.264a4.644 4.644 0 001.52-.764c.43-.334.77-.743 1.018-1.228s.373-1.043.373-1.674c0-.583-.08-1.104-.237-1.565a2.858 2.858 0 00-.764-1.183" fill="#171918" mask="url(#blacksmith-logo-dark-516e54ba--sprite_d)" /></g><path fill="#171918" d="M87.823 7.26L84.438.257h-2.493v12.955h2.53V5.66l2.493 4.912h1.71l2.475-4.912v7.551h2.529V.256h-2.493l-3.366 7.005m10.795 5.95h2.529V.256h-2.53z" /><g transform="translate(104.34)"><mask id="blacksmith-logo-dark-516e54ba--sprite_f" fill="#fff"><use xlink:href="#blacksmith-logo-dark-516e54ba--sprite_e" /></mask><path fill="#171918" mask="url(#blacksmith-logo-dark-516e54ba--sprite_f)" d="M.725 2.512H4.11v10.7h2.53v-10.7h3.384V.256H.725v2.256m25.33 3.018h-2.668V.255h-2.529v5.273h-.137v.022h-4.248V.256h-2.53v12.955h2.53V7.788h4.385v5.423h2.529V7.788h2.668V5.53" /></g></g></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        mwBR: function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "cursor-chevron-right-91e6fbcb--sprite",
                    use: "cursor-chevron-right-91e6fbcb--sprite-usage",
                    viewBox: "0 0 9 14",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14" id="cursor-chevron-right-91e6fbcb--sprite"><path d="M1.717 0L0 1.651 5.565 7 0 12.349 1.717 14 9 7 1.717 0z" /></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        q9W8: function(e, t, o) {
            "use strict";
            o.d(t, "b", (function() {
                return a
            })), o.d(t, "a", (function() {
                return n
            }));
            const a = function(e, t) {
                let o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (!e) return !1;
                const a = window.getComputedStyle(e).getPropertyValue(t);
                return o ? parseInt(a) : a
            };

            function n(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$1-$2-$3";
                const o = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                return e.replace(o, t)
            }
        },
        rdoT: function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "ham-menu-1efa8fe8--sprite",
                    use: "ham-menu-1efa8fe8--sprite-usage",
                    viewBox: "0 0 38 16",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 16" id="ham-menu-1efa8fe8--sprite"><path d="M.5.5h37v1H.5zm0 7h37v1H.5zm0 7h37v1H.5z" fill-rule="evenodd" /></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        },
        "v/lv": function(e, t, o) {
            e.exports = {
                header__wrapper: "header_header__wrapper__1EqGi",
                "header__wrapper--open": "header_header__wrapper--open__5DfGP",
                header__logo: "header_header__logo__1MEqb",
                "header__logo-sprite--small": "header_header__logo-sprite--small__3zBCZ",
                "header__logo-sprite--large": "header_header__logo-sprite--large__mTL3O",
                "header__logo--open": "header_header__logo--open__3VrcP",
                "header__menu-button": "header_header__menu-button__2Hivl",
                "header__menu-button--open": "header_header__menu-button--open__20EFd",
                "header__menu-icon": "header_header__menu-icon__ERlhd"
            }
        },
        wWlz: function(e, t, o) {
            "use strict";
            var a, n = o("Kacz"),
                r = (a = n) && a.__esModule ? a : {
                    default: a
                };
            var i = {
                tags: function(e) {
                    var t = e.id,
                        o = e.events,
                        a = e.dataLayer,
                        n = e.dataLayerName,
                        i = e.preview,
                        s = "&gtm_auth=" + e.auth,
                        l = "&gtm_preview=" + i;
                    return t || (0, r.default)("GTM Id is required"), {
                        iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + s + l + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                        script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(o).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + s + l + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + n + "','" + t + "');",
                        dataLayerVar: this.dataLayer(a, n)
                    }
                },
                dataLayer: function(e, t) {
                    return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
                }
            };
            e.exports = i
        },
        wx14: function(e, t, o) {
            "use strict";

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            o.d(t, "a", (function() {
                return a
            }))
        },
        xgCZ: function(e, t, o) {
            var a = o("q1tI"),
                n = o("4BeY"),
                r = o("IaFt"),
                i = new n({
                    id: "close-mobile-8529d07c--sprite",
                    use: "close-mobile-8529d07c--sprite-usage",
                    viewBox: "0 0 17 17",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" id="close-mobile-8529d07c--sprite"><g fill="#FFF" fill-rule="evenodd"><path d="M.764 15.553L15.614.704l.707.707-14.85 14.85z" /><path d="M16.236 15.553L1.386.704l-.707.707 14.85 14.85z" /></g></symbol>'
                });
            r.add(i);
            var s = function(e) {
                return a.createElement("svg", Object.assign({
                    viewBox: i.viewBox
                }, e), a.createElement("use", {
                    xlinkHref: "#" + i.id
                }))
            };
            s.viewBox = i.viewBox, s.id = i.id, s.content = i.content, s.url = i.url, s.toString = i.toString, e.exports = s, e.exports.default = s
        }
    },
    [
        [0, 3, 2, 1, 0]
    ]
]);