"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[499], {
    9791: function(t, e, i) {
        i.d(e, {
            _: function() {
                return n
            }
        });
        let n = (0,
        i(2265).createContext)({
            transformPagePoint: t=>t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    2981: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return o
            }
        });
        var n = i(565);
        class s {
            constructor() {
                this.order = [],
                this.scheduled = new Set
            }
            add(t) {
                if (!this.scheduled.has(t))
                    return this.scheduled.add(t),
                    this.order.push(t),
                    !0
            }
            remove(t) {
                let e = this.order.indexOf(t);
                -1 !== e && (this.order.splice(e, 1),
                this.scheduled.delete(t))
            }
            clear() {
                this.order.length = 0,
                this.scheduled.clear()
            }
        }
        let r = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        function o(t, e) {
            let i = !1
              , o = !0
              , a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , l = r.reduce((t,e)=>(t[e] = function(t) {
                let e = new s
                  , i = new s
                  , n = 0
                  , r = !1
                  , o = !1
                  , a = new WeakSet
                  , l = {
                    schedule: (t,s=!1,o=!1)=>{
                        let l = o && r
                          , u = l ? e : i;
                        return s && a.add(t),
                        u.add(t) && l && r && (n = e.order.length),
                        t
                    }
                    ,
                    cancel: t=>{
                        i.remove(t),
                        a.delete(t)
                    }
                    ,
                    process: s=>{
                        if (r) {
                            o = !0;
                            return
                        }
                        if (r = !0,
                        [e,i] = [i, e],
                        i.clear(),
                        n = e.order.length)
                            for (let i = 0; i < n; i++) {
                                let n = e.order[i];
                                a.has(n) && (l.schedule(n),
                                t()),
                                n(s)
                            }
                        r = !1,
                        o && (o = !1,
                        l.process(s))
                    }
                };
                return l
            }(()=>i = !0),
            t), {})
              , u = t=>{
                l[t].process(a)
            }
              , h = ()=>{
                let s = n.c.useManualTiming ? a.timestamp : performance.now();
                i = !1,
                a.delta = o ? 1e3 / 60 : Math.max(Math.min(s - a.timestamp, 40), 1),
                a.timestamp = s,
                a.isProcessing = !0,
                r.forEach(u),
                a.isProcessing = !1,
                i && e && (o = !1,
                t(h))
            }
              , d = ()=>{
                i = !0,
                o = !0,
                a.isProcessing || t(h)
            }
            ;
            return {
                schedule: r.reduce((t,e)=>{
                    let n = l[e];
                    return t[e] = (t,e=!1,s=!1)=>(i || d(),
                    n.schedule(t, e, s)),
                    t
                }
                , {}),
                cancel: t=>r.forEach(e=>l[e].cancel(t)),
                state: a,
                steps: l
            }
        }
    },
    6219: function(t, e, i) {
        i.d(e, {
            Pn: function() {
                return r
            },
            S6: function() {
                return a
            },
            Wi: function() {
                return s
            },
            frameData: function() {
                return o
            }
        });
        var n = i(9276);
        let {schedule: s, cancel: r, state: o, steps: a} = (0,
        i(2981).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
    },
    9993: function(t, e, i) {
        let n;
        i.d(e, {
            X: function() {
                return a
            }
        });
        var s = i(565)
          , r = i(6219);
        function o() {
            n = void 0
        }
        let a = {
            now: ()=>(void 0 === n && a.set(r.frameData.isProcessing || s.c.useManualTiming ? r.frameData.timestamp : performance.now()),
            n),
            set: t=>{
                n = t,
                queueMicrotask(o)
            }
        }
    },
    9499: function(t, e, i) {
        let n;
        i.d(e, {
            E: function() {
                return sp
            }
        });
        var s, r, o = i(7437), a = i(2265), l = i(9791);
        let u = (0,
        a.createContext)({})
          , h = (0,
        a.createContext)(null);
        var d = i(9033);
        let c = (0,
        a.createContext)({
            strict: !1
        })
          , p = t=>t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , m = "data-" + p("framerAppearId")
          , {schedule: f, cancel: v} = (0,
        i(2981).Z)(queueMicrotask, !1);
        function g(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function y(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function x(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        let P = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , w = ["initial", ...P];
        function T(t) {
            return x(t.animate) || w.some(e=>y(t[e]))
        }
        function b(t) {
            return !!(T(t) || t.variants)
        }
        function S(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let A = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , V = {};
        for (let t in A)
            V[t] = {
                isEnabled: e=>A[t].some(t=>!!e[t])
            };
        var E = i(7282);
        let C = (0,
        a.createContext)({})
          , M = (0,
        a.createContext)({})
          , D = Symbol.for("motionComponentSymbol")
          , R = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function k(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (R.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        let F = {}
          , L = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , j = new Set(L);
        function B(t, {layout: e, layoutId: i}) {
            return j.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!F[t] || "opacity" === t)
        }
        let $ = t=>!!(t && t.getVelocity)
          , O = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , W = L.length;
        var I = i(1534);
        let U = (t,e)=>e && "number" == typeof t ? e.transform(t) : t;
        var N = i(783)
          , z = i(5480);
        let H = {
            ...N.Rx,
            transform: Math.round
        }
          , X = {
            borderWidth: z.px,
            borderTopWidth: z.px,
            borderRightWidth: z.px,
            borderBottomWidth: z.px,
            borderLeftWidth: z.px,
            borderRadius: z.px,
            radius: z.px,
            borderTopLeftRadius: z.px,
            borderTopRightRadius: z.px,
            borderBottomRightRadius: z.px,
            borderBottomLeftRadius: z.px,
            width: z.px,
            maxWidth: z.px,
            height: z.px,
            maxHeight: z.px,
            size: z.px,
            top: z.px,
            right: z.px,
            bottom: z.px,
            left: z.px,
            padding: z.px,
            paddingTop: z.px,
            paddingRight: z.px,
            paddingBottom: z.px,
            paddingLeft: z.px,
            margin: z.px,
            marginTop: z.px,
            marginRight: z.px,
            marginBottom: z.px,
            marginLeft: z.px,
            rotate: z.RW,
            rotateX: z.RW,
            rotateY: z.RW,
            rotateZ: z.RW,
            scale: N.bA,
            scaleX: N.bA,
            scaleY: N.bA,
            scaleZ: N.bA,
            skew: z.RW,
            skewX: z.RW,
            skewY: z.RW,
            distance: z.px,
            translateX: z.px,
            translateY: z.px,
            translateZ: z.px,
            x: z.px,
            y: z.px,
            z: z.px,
            perspective: z.px,
            transformPerspective: z.px,
            opacity: N.Fq,
            originX: z.$C,
            originY: z.$C,
            originZ: z.px,
            zIndex: H,
            backgroundPositionX: z.px,
            backgroundPositionY: z.px,
            fillOpacity: N.Fq,
            strokeOpacity: N.Fq,
            numOctaves: H
        };
        function Y(t, e, i, n) {
            let {style: s, vars: r, transform: o, transformOrigin: a} = t
              , l = !1
              , u = !1
              , h = !0;
            for (let t in e) {
                let i = e[t];
                if ((0,
                I.f)(t)) {
                    r[t] = i;
                    continue
                }
                let n = X[t]
                  , d = U(i, n);
                if (j.has(t)) {
                    if (l = !0,
                    o[t] = d,
                    !h)
                        continue;
                    i !== (n.default || 0) && (h = !1)
                } else
                    t.startsWith("origin") ? (u = !0,
                    a[t] = d) : s[t] = d
            }
            if (!e.transform && (l || n ? s.transform = function(t, {enableHardwareAcceleration: e=!0, allowTransformNone: i=!0}, n, s) {
                let r = "";
                for (let e = 0; e < W; e++) {
                    let i = L[e];
                    if (void 0 !== t[i]) {
                        let e = O[i] || i;
                        r += `${e}(${t[i]}) `
                    }
                }
                return e && !t.z && (r += "translateZ(0)"),
                r = r.trim(),
                s ? r = s(t, n ? "" : r) : i && n && (r = "none"),
                r
            }(t.transform, i, h, n) : s.transform && (s.transform = "none")),
            u) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = a;
                s.transformOrigin = `${t} ${e} ${i}`
            }
        }
        let K = ()=>({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function Z(t, e, i) {
            for (let n in e)
                $(e[n]) || B(n, i) || (t[n] = e[n])
        }
        let q = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function G(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || q.has(t)
        }
        let _ = t=>!G(t);
        try {
            (s = require("@emotion/is-prop-valid").default) && (_ = t=>t.startsWith("on") ? !G(t) : s(t))
        } catch (t) {}
        function J(t, e, i) {
            return "string" == typeof t ? t : z.px.transform(e + i * t)
        }
        let Q = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , tt = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function te(t, {attrX: e, attrY: i, attrScale: n, originX: s, originY: r, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, d, c) {
            if (Y(t, u, h, c),
            d) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: p, style: m, dimensions: f} = t;
            p.transform && (f && (m.transform = p.transform),
            delete p.transform),
            f && (void 0 !== s || void 0 !== r || m.transform) && (m.transformOrigin = function(t, e, i) {
                let n = J(e, t.x, t.width)
                  , s = J(i, t.y, t.height);
                return `${n} ${s}`
            }(f, void 0 !== s ? s : .5, void 0 !== r ? r : .5)),
            void 0 !== e && (p.x = e),
            void 0 !== i && (p.y = i),
            void 0 !== n && (p.scale = n),
            void 0 !== o && function(t, e, i=1, n=0, s=!0) {
                t.pathLength = 1;
                let r = s ? Q : tt;
                t[r.offset] = z.px.transform(-n);
                let o = z.px.transform(e)
                  , a = z.px.transform(i);
                t[r.array] = `${o} ${a}`
            }(p, o, a, l, !1)
        }
        let ti = ()=>({
            ...K(),
            attrs: {}
        })
          , tn = t=>"string" == typeof t && "svg" === t.toLowerCase();
        function ts(t, {style: e, vars: i}, n, s) {
            for (let r in Object.assign(t.style, e, s && s.getProjectionStyles(n)),
            i)
                t.style.setProperty(r, i[r])
        }
        let tr = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function to(t, e, i, n) {
            for (let i in ts(t, e, void 0, n),
            e.attrs)
                t.setAttribute(tr.has(i) ? i : p(i), e.attrs[i])
        }
        function ta(t, e, i) {
            var n;
            let {style: s} = t
              , r = {};
            for (let o in s)
                ($(s[o]) || e.style && $(e.style[o]) || B(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (r[o] = s[o]);
            return r
        }
        function tl(t, e, i) {
            let n = ta(t, e, i);
            for (let i in t)
                ($(t[i]) || $(e[i])) && (n[-1 !== L.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return n
        }
        function tu(t, e, i, n={}, s={}) {
            return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, s)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, s)),
            e
        }
        var th = i(458);
        let td = t=>Array.isArray(t)
          , tc = t=>!!(t && "object" == typeof t && t.mix && t.toValue)
          , tp = t=>td(t) ? t[t.length - 1] || 0 : t;
        function tm(t) {
            let e = $(t) ? t.get() : t;
            return tc(e) ? e.toValue() : e
        }
        let tf = t=>(e,i)=>{
            let n = (0,
            a.useContext)(u)
              , s = (0,
            a.useContext)(h)
              , r = ()=>(function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: i}, n, s, r) {
                let o = {
                    latestValues: function(t, e, i, n) {
                        let s = {}
                          , r = n(t, {});
                        for (let t in r)
                            s[t] = tm(r[t]);
                        let {initial: o, animate: a} = t
                          , l = T(t)
                          , u = b(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial),
                        void 0 === a && (a = e.animate));
                        let h = !!i && !1 === i.initial
                          , d = (h = h || !1 === o) ? a : o;
                        return d && "boolean" != typeof d && !x(d) && (Array.isArray(d) ? d : [d]).forEach(e=>{
                            let i = tu(t, e);
                            if (!i)
                                return;
                            let {transitionEnd: n, transition: r, ...o} = i;
                            for (let t in o) {
                                let e = o[t];
                                if (Array.isArray(e)) {
                                    let t = h ? e.length - 1 : 0;
                                    e = e[t]
                                }
                                null !== e && (s[t] = e)
                            }
                            for (let t in n)
                                s[t] = n[t]
                        }
                        ),
                        s
                    }(n, s, r, t),
                    renderState: e()
                };
                return i && (o.mount = t=>i(n, t, o)),
                o
            }
            )(t, e, n, s);
            return i ? r() : (0,
            th.h)(r)
        }
        ;
        var tv = i(6219);
        let tg = {
            useVisualState: tf({
                scrapeMotionValuesFromProps: tl,
                createRenderState: ti,
                onMount: (t,e,{renderState: i, latestValues: n})=>{
                    tv.Wi.read(()=>{
                        try {
                            i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            i.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    tv.Wi.render(()=>{
                        te(i, n, {
                            enableHardwareAcceleration: !1
                        }, tn(e.tagName), t.transformTemplate),
                        to(e, i)
                    }
                    )
                }
            })
        }
          , ty = {
            useVisualState: tf({
                scrapeMotionValuesFromProps: ta,
                createRenderState: K
            })
        };
        function tx(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            ()=>t.removeEventListener(e, i)
        }
        let tP = t=>"mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function tw(t, e="page") {
            return {
                point: {
                    x: t[`${e}X`],
                    y: t[`${e}Y`]
                }
            }
        }
        let tT = t=>e=>tP(e) && t(e, tw(e));
        function tb(t, e, i, n) {
            return tx(t, e, tT(i), n)
        }
        var tS = i(9654);
        function tA(t) {
            let e = null;
            return ()=>null === e && (e = t,
            ()=>{
                e = null
            }
            )
        }
        let tV = tA("dragHorizontal")
          , tE = tA("dragVertical");
        function tC(t) {
            let e = !1;
            if ("y" === t)
                e = tE();
            else if ("x" === t)
                e = tV();
            else {
                let t = tV()
                  , i = tE();
                t && i ? e = ()=>{
                    t(),
                    i()
                }
                : (t && t(),
                i && i())
            }
            return e
        }
        function tM() {
            let t = tC(!0);
            return !t || (t(),
            !1)
        }
        class tD {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        function tR(t, e) {
            let i = e ? "onHoverStart" : "onHoverEnd";
            return tb(t.current, e ? "pointerenter" : "pointerleave", (n,s)=>{
                if ("touch" === n.pointerType || tM())
                    return;
                let r = t.getProps();
                t.animationState && r.whileHover && t.animationState.setActive("whileHover", e);
                let o = r[i];
                o && o(n, s)
            }
            , {
                passive: !t.getProps()[i]
            })
        }
        class tk extends tD {
            mount() {
                this.unmount = (0,
                tS.z)(tR(this.node, !0), tR(this.node, !1))
            }
            unmount() {}
        }
        class tF extends tD {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = (0,
                tS.z)(tx(this.node.current, "focus", ()=>this.onFocus()), tx(this.node.current, "blur", ()=>this.onBlur()))
            }
            unmount() {}
        }
        let tL = (t,e)=>!!e && (t === e || tL(t, e.parentElement));
        var tj = i(9276);
        function tB(t, e) {
            if (!e)
                return;
            let i = new PointerEvent("pointer" + t);
            e(i, tw(i))
        }
        class t$ extends tD {
            constructor() {
                super(...arguments),
                this.removeStartListeners = tj.Z,
                this.removeEndListeners = tj.Z,
                this.removeAccessibleListeners = tj.Z,
                this.startPointerPress = (t,e)=>{
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    let i = this.node.getProps()
                      , n = tb(window, "pointerup", (t,e)=>{
                        if (!this.checkPressEnd())
                            return;
                        let {onTap: i, onTapCancel: n, globalTapTarget: s} = this.node.getProps();
                        s || tL(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                    }
                    , {
                        passive: !(i.onTap || i.onPointerUp)
                    })
                      , s = tb(window, "pointercancel", (t,e)=>this.cancelPress(t, e), {
                        passive: !(i.onTapCancel || i.onPointerCancel)
                    });
                    this.removeEndListeners = (0,
                    tS.z)(n, s),
                    this.startPress(t, e)
                }
                ,
                this.startAccessiblePress = ()=>{
                    let t = tx(this.node.current, "keydown", t=>{
                        "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                        this.removeEndListeners = tx(this.node.current, "keyup", t=>{
                            "Enter" === t.key && this.checkPressEnd() && tB("up", (t,e)=>{
                                let {onTap: i} = this.node.getProps();
                                i && i(t, e)
                            }
                            )
                        }
                        ),
                        tB("down", (t,e)=>{
                            this.startPress(t, e)
                        }
                        ))
                    }
                    )
                      , e = tx(this.node.current, "blur", ()=>{
                        this.isPressing && tB("cancel", (t,e)=>this.cancelPress(t, e))
                    }
                    );
                    this.removeAccessibleListeners = (0,
                    tS.z)(t, e)
                }
            }
            startPress(t, e) {
                this.isPressing = !0;
                let {onTapStart: i, whileTap: n} = this.node.getProps();
                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                i && i(t, e)
            }
            checkPressEnd() {
                return this.removeEndListeners(),
                this.isPressing = !1,
                this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !tM()
            }
            cancelPress(t, e) {
                if (!this.checkPressEnd())
                    return;
                let {onTapCancel: i} = this.node.getProps();
                i && i(t, e)
            }
            mount() {
                let t = this.node.getProps()
                  , e = tb(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                })
                  , i = tx(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0,
                tS.z)(e, i)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
        }
        let tO = new WeakMap
          , tW = new WeakMap
          , tI = t=>{
            let e = tO.get(t.target);
            e && e(t)
        }
          , tU = t=>{
            t.forEach(tI)
        }
          , tN = {
            some: 0,
            all: 1
        };
        class tz extends tD {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: n="some", once: s} = t
                  , r = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : tN[n]
                };
                return function(t, e, i) {
                    let n = function({root: t, ...e}) {
                        let i = t || document;
                        tW.has(i) || tW.set(i, {});
                        let n = tW.get(i)
                          , s = JSON.stringify(e);
                        return n[s] || (n[s] = new IntersectionObserver(tU,{
                            root: t,
                            ...e
                        })),
                        n[s]
                    }(e);
                    return tO.set(t, i),
                    n.observe(t),
                    ()=>{
                        tO.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, r, t=>{
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    s && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                      , r = e ? i : n;
                    r && r(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i=>t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        function tH(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function tX(t, e, i) {
            let n = t.getProps();
            return tu(n, e, void 0 !== i ? i : n.custom, function(t) {
                let e = {};
                return t.values.forEach((t,i)=>e[i] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach((t,i)=>e[i] = t.getVelocity()),
                e
            }(t))
        }
        let tY = t=>1e3 * t
          , tK = t=>t / 1e3
          , tZ = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , tq = t=>({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , tG = {
            type: "keyframes",
            duration: .8
        }
          , t_ = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , tJ = (t,{keyframes: e})=>e.length > 2 ? tG : j.has(t) ? t.startsWith("scale") ? tq(e[1]) : tZ : t_;
        function tQ(t, e) {
            return t[e] || t.default || t
        }
        var t0 = i(565);
        let t1 = {
            current: !1
        }
          , t5 = t=>null !== t;
        function t2(t, {repeat: e, repeatType: i="loop"}, n) {
            let s = t.filter(t5)
              , r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
            return r && void 0 !== n ? n : s[r]
        }
        var t3 = i(9993);
        let t9 = t=>/^0[^.\s]+$/u.test(t);
        var t4 = i(9047);
        let t6 = t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , t7 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , t8 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , et = t=>t === N.Rx || t === z.px
          , ee = (t,e)=>parseFloat(t.split(", ")[e])
          , ei = (t,e)=>(i,{transform: n})=>{
            if ("none" === n || !n)
                return 0;
            let s = n.match(/^matrix3d\((.+)\)$/u);
            if (s)
                return ee(s[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/u);
                return e ? ee(e[1], t) : 0
            }
        }
          , en = new Set(["x", "y", "z"])
          , es = L.filter(t=>!en.has(t))
          , er = {
            width: ({x: t},{paddingLeft: e="0", paddingRight: i="0"})=>t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t},{paddingTop: e="0", paddingBottom: i="0"})=>t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t,{top: e})=>parseFloat(e),
            left: (t,{left: e})=>parseFloat(e),
            bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
            right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
            x: ei(4, 13),
            y: ei(5, 14)
        };
        er.translateX = er.x,
        er.translateY = er.y;
        let eo = t=>e=>e.test(t)
          , ea = [N.Rx, z.px, z.aQ, z.RW, z.vw, z.vh, {
            test: t=>"auto" === t,
            parse: t=>t
        }]
          , el = t=>ea.find(eo(t))
          , eu = new Set
          , eh = !1
          , ed = !1;
        function ec() {
            if (ed) {
                let t = Array.from(eu).filter(t=>t.needsMeasurement)
                  , e = new Set(t.map(t=>t.element))
                  , i = new Map;
                e.forEach(t=>{
                    let e = function(t) {
                        let e = [];
                        return es.forEach(i=>{
                            let n = t.getValue(i);
                            void 0 !== n && (e.push([i, n.get()]),
                            n.set(i.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        e
                    }(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t=>t.measureInitialState()),
                e.forEach(t=>{
                    t.render();
                    let e = i.get(t);
                    e && e.forEach(([e,i])=>{
                        var n;
                        null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                    }
                    )
                }
                ),
                t.forEach(t=>t.measureEndState()),
                t.forEach(t=>{
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            ed = !1,
            eh = !1,
            eu.forEach(t=>t.complete()),
            eu.clear()
        }
        function ep() {
            eu.forEach(t=>{
                t.readKeyframes(),
                t.needsMeasurement && (ed = !0)
            }
            )
        }
        class em {
            constructor(t, e, i, n, s, r=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = n,
                this.element = s,
                this.isAsync = r
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (eu.add(this),
                eh || (eh = !0,
                tv.Wi.read(ep),
                tv.Wi.resolveKeyframes(ec))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: n} = this;
                for (let s = 0; s < t.length; s++)
                    if (null === t[s]) {
                        if (0 === s) {
                            let s = null == n ? void 0 : n.get()
                              , r = t[t.length - 1];
                            if (void 0 !== s)
                                t[0] = s;
                            else if (i && e) {
                                let n = i.readValue(e, r);
                                null != n && (t[0] = n)
                            }
                            void 0 === t[0] && (t[0] = r),
                            n && void 0 === s && n.set(t[0])
                        } else
                            t[s] = t[s - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                eu.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                eu.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        var ef = i(3646)
          , ev = i(7292);
        let eg = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function ey(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(ev.KP) || [];
            if (!n)
                return t;
            let s = i.replace(n, "")
              , r = eg.has(e) ? 1 : 0;
            return n !== i && (r *= 100),
            e + "(" + r + s + ")"
        }
        let ex = /\b([a-z-]*)\(.*?\)/gu
          , eP = {
            ...ef.P,
            getAnimatableNone: t=>{
                let e = t.match(ex);
                return e ? e.map(ey).join(" ") : t
            }
        };
        var ew = i(146);
        let eT = {
            ...X,
            color: ew.$,
            backgroundColor: ew.$,
            outlineColor: ew.$,
            fill: ew.$,
            stroke: ew.$,
            borderColor: ew.$,
            borderTopColor: ew.$,
            borderRightColor: ew.$,
            borderBottomColor: ew.$,
            borderLeftColor: ew.$,
            filter: eP,
            WebkitFilter: eP
        }
          , eb = t=>eT[t];
        function eS(t, e) {
            let i = eb(t);
            return i !== eP && (i = ef.P),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        class eA extends em {
            constructor(t, e, i, n) {
                super(t, e, i, n, null == n ? void 0 : n.owner, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && (0,
                    I.t)(n)) {
                        let s = function t(e, i, n=1) {
                            (0,
                            t4.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[s,r] = function(t) {
                                let e = t7.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,n,s] = e;
                                return [`--${null != i ? i : n}`, s]
                            }(e);
                            if (!s)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(s);
                            if (o) {
                                let t = o.trim();
                                return t6(t) ? parseFloat(t) : t
                            }
                            return (0,
                            I.t)(r) ? t(r, i, n + 1) : r
                        }(n, e.current);
                        void 0 !== s && (t[i] = s),
                        i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (!t8.has(i) || 2 !== t.length)
                    return this.resolveNoneKeyframes();
                let[n,s] = t
                  , r = el(n)
                  , o = el(s);
                if (r !== o) {
                    if (et(r) && et(o))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var n;
                    ("number" == typeof (n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || t9(n)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let n, s = 0;
                    for (; s < t.length && !n; )
                        "string" == typeof t[s] && "none" !== t[s] && "0" !== t[s] && (n = t[s]),
                        s++;
                    if (n && i)
                        for (let s of e)
                            t[s] = eS(i, n)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = er[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: n} = this;
                if (!e.current)
                    return;
                let s = e.getValue(i);
                s && s.jump(this.measuredOrigin, !1);
                let r = n.length - 1
                  , o = n[r];
                n[r] = er[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t,i])=>{
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let eV = (t,e)=>"zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (ef.P.test(t) || "0" === t) && !t.startsWith("url("));
        class eE {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: n=0, repeatDelay: s=0, repeatType: r="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: s,
                    repeatType: r,
                    ...o
                },
                this.updateFinishedPromise()
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (ep(),
                ec()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.hasAttemptedResolve = !0;
                let {name: i, type: n, velocity: s, delay: r, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, i, n) {
                    let s = t[0];
                    if (null === s)
                        return !1;
                    let r = t[t.length - 1]
                      , o = eV(s, e)
                      , a = eV(r, e);
                    return (0,
                    t4.K)(o === a, `You are trying to animate ${e} from "${s}" to "${r}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${r} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || "spring" === i && n)
                }(t, i, n, s)) {
                    if (t1.current || !r) {
                        null == a || a(t2(t, this.options, e)),
                        null == o || o(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t=>{
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        var eC = i(3476);
        function eM(t, e, i) {
            let n = Math.max(e - 5, 0);
            return (0,
            eC.R)(i - t(n), e - n)
        }
        var eD = i(1506);
        function eR(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let ek = ["duration", "bounce"]
          , eF = ["stiffness", "damping", "mass"];
        function eL(t, e) {
            return e.some(e=>void 0 !== t[e])
        }
        function ej({keyframes: t, restDelta: e, restSpeed: i, ...n}) {
            let s;
            let r = t[0]
              , o = t[t.length - 1]
              , a = {
                done: !1,
                value: r
            }
              , {stiffness: l, damping: u, mass: h, duration: d, velocity: c, isResolvedFromDuration: p} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!eL(t, eF) && eL(t, ek)) {
                    let i = function({duration: t=800, bounce: e=.25, velocity: i=0, mass: n=1}) {
                        let s, r;
                        (0,
                        t4.K)(t <= tY(10), "Spring duration must be 10 seconds or less");
                        let o = 1 - e;
                        o = (0,
                        eD.u)(.05, 1, o),
                        t = (0,
                        eD.u)(.01, 10, tK(t)),
                        o < 1 ? (s = e=>{
                            let n = e * o
                              , s = n * t;
                            return .001 - (n - i) / eR(e, o) * Math.exp(-s)
                        }
                        ,
                        r = e=>{
                            let n = e * o * t
                              , r = Math.pow(o, 2) * Math.pow(e, 2) * t
                              , a = eR(Math.pow(e, 2), o);
                            return (n * i + i - r) * Math.exp(-n) * (-s(e) + .001 > 0 ? -1 : 1) / a
                        }
                        ) : (s = e=>-.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                        r = e=>t * t * (i - e) * Math.exp(-e * t));
                        let a = function(t, e, i) {
                            let n = i;
                            for (let i = 1; i < 12; i++)
                                n -= t(n) / e(n);
                            return n
                        }(s, r, 5 / t);
                        if (t = tY(t),
                        isNaN(a))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(a, 2) * n;
                            return {
                                stiffness: e,
                                damping: 2 * o * Math.sqrt(n * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...i,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }({
                ...n,
                velocity: -tK(n.velocity || 0)
            })
              , m = c || 0
              , f = u / (2 * Math.sqrt(l * h))
              , v = o - r
              , g = tK(Math.sqrt(l / h))
              , y = 5 > Math.abs(v);
            if (i || (i = y ? .01 : 2),
            e || (e = y ? .005 : .5),
            f < 1) {
                let t = eR(g, f);
                s = e=>o - Math.exp(-f * g * e) * ((m + f * g * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
            } else if (1 === f)
                s = t=>o - Math.exp(-g * t) * (v + (m + g * v) * t);
            else {
                let t = g * Math.sqrt(f * f - 1);
                s = e=>{
                    let i = Math.exp(-f * g * e)
                      , n = Math.min(t * e, 300);
                    return o - i * ((m + f * g * v) * Math.sinh(n) + t * v * Math.cosh(n)) / t
                }
            }
            return {
                calculatedDuration: p && d || null,
                next: t=>{
                    let n = s(t);
                    if (p)
                        a.done = t >= d;
                    else {
                        let r = m;
                        0 !== t && (r = f < 1 ? eM(s, t, n) : 0);
                        let l = Math.abs(r) <= i
                          , u = Math.abs(o - n) <= e;
                        a.done = l && u
                    }
                    return a.value = a.done ? o : n,
                    a
                }
            }
        }
        function eB({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: s=10, bounceStiffness: r=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let d, c;
            let p = t[0]
              , m = {
                done: !1,
                value: p
            }
              , f = t=>void 0 !== a && t < a || void 0 !== l && t > l
              , v = t=>void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , g = i * e
              , y = p + g
              , x = void 0 === o ? y : o(y);
            x !== y && (g = x - p);
            let P = t=>-g * Math.exp(-t / n)
              , w = t=>x + P(t)
              , T = t=>{
                let e = P(t)
                  , i = w(t);
                m.done = Math.abs(e) <= u,
                m.value = m.done ? x : i
            }
              , b = t=>{
                f(m.value) && (d = t,
                c = ej({
                    keyframes: [m.value, v(m.value)],
                    velocity: eM(w, t, m.value),
                    damping: s,
                    stiffness: r,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return b(0),
            {
                calculatedDuration: null,
                next: t=>{
                    let e = !1;
                    return (c || void 0 !== d || (e = !0,
                    T(t),
                    b(t)),
                    void 0 !== d && t >= d) ? c.next(t - d) : (e || T(t),
                    m)
                }
            }
        }
        let e$ = (t,e,i)=>(((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function eO(t, e, i, n) {
            if (t === e && i === n)
                return tj.Z;
            let s = e=>(function(t, e, i, n, s) {
                let r, o;
                let a = 0;
                do
                    (r = e$(o = e + (i - e) / 2, n, s) - t) > 0 ? i = o : e = o;
                while (Math.abs(r) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t=>0 === t || 1 === t ? t : e$(s(t), e, n)
        }
        let eW = eO(.42, 0, 1, 1)
          , eI = eO(0, 0, .58, 1)
          , eU = eO(.42, 0, .58, 1)
          , eN = t=>Array.isArray(t) && "number" != typeof t[0]
          , ez = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , eH = t=>e=>1 - t(1 - e)
          , eX = t=>1 - Math.sin(Math.acos(t))
          , eY = eH(eX)
          , eK = ez(eX)
          , eZ = eO(.33, 1.53, .69, .99)
          , eq = eH(eZ)
          , eG = ez(eq)
          , e_ = {
            linear: tj.Z,
            easeIn: eW,
            easeInOut: eU,
            easeOut: eI,
            circIn: eX,
            circInOut: eK,
            circOut: eY,
            backIn: eq,
            backInOut: eG,
            backOut: eZ,
            anticipate: t=>(t *= 2) < 1 ? .5 * eq(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , eJ = t=>{
            if (Array.isArray(t)) {
                (0,
                t4.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,s] = t;
                return eO(e, i, n, s)
            }
            return "string" == typeof t ? ((0,
            t4.k)(void 0 !== e_[t], `Invalid easing type '${t}'`),
            e_[t]) : t
        }
        ;
        var eQ = i(2548)
          , e0 = i(839);
        function e1({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let s = eN(n) ? n.map(eJ) : eJ(n)
              , r = {
                done: !1,
                value: e[0]
            }
              , o = (i && i.length === e.length ? i : (0,
            e0.Y)(e)).map(e=>e * t)
              , a = (0,
            eQ.s)(o, e, {
                ease: Array.isArray(s) ? s : e.map(()=>s || eU).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e=>(r.value = a(e),
                r.done = e >= t,
                r)
            }
        }
        var e5 = i(1215);
        let e2 = t=>{
            let e = ({timestamp: e})=>t(e);
            return {
                start: ()=>tv.Wi.update(e, !0),
                stop: ()=>(0,
                tv.Pn)(e),
                now: ()=>tv.frameData.isProcessing ? tv.frameData.timestamp : t3.X.now()
            }
        }
          , e3 = {
            decay: eB,
            inertia: eB,
            tween: e1,
            keyframes: e1,
            spring: ej
        }
          , e9 = t=>t / 100;
        class e4 extends eE {
            constructor({KeyframeResolver: t=em, ...e}) {
                super(e),
                this.holdTime = null,
                this.startTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.state = "idle",
                this.stop = ()=>{
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: i, motionValue: n, keyframes: s} = this.options
                  , r = (t,e)=>this.onKeyframesResolved(t, e);
                i && n && n.owner ? this.resolver = n.owner.resolveKeyframes(s, r, i, n) : this.resolver = new t(s,r,i,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t) {
                let e, i;
                let {type: n="keyframes", repeat: s=0, repeatDelay: r=0, repeatType: o, velocity: a=0} = this.options
                  , l = e3[n] || e1;
                l !== e1 && "number" != typeof t[0] && (e = (0,
                tS.z)(e9, (0,
                e5.C)(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = function(t) {
                    let e = 0
                      , i = t.next(e);
                    for (; !i.done && e < 2e4; )
                        e += 50,
                        i = t.next(e);
                    return e >= 2e4 ? 1 / 0 : e
                }(u));
                let {calculatedDuration: h} = u
                  , d = h + r;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: d,
                    totalDuration: d * (s + 1) - r
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: n, generator: s, mirroredGenerator: r, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return s.next(0);
                let {delay: d, repeat: c, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
                  , g = this.speed >= 0 ? v < 0 : v > u;
                this.currentTime = Math.max(v, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , x = s;
                if (c) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    m && (i -= m / h)) : "mirror" === p && (x = r)),
                    y = (0,
                    eD.u)(0, 1, i) * h
                }
                let P = g ? {
                    done: !1,
                    value: a[0]
                } : x.next(y);
                o && (P.value = o(P.value));
                let {done: w} = P;
                g || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let T = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return T && void 0 !== n && (P.value = t2(a, this.options, n)),
                f && f(P.value),
                T && this.finish(),
                P
            }
            get duration() {
                let {resolved: t} = this;
                return t ? tK(t.calculatedDuration) : 0
            }
            get time() {
                return tK(this.currentTime)
            }
            set time(t) {
                t = tY(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = tK(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=e2, onPlay: e} = this.options;
                this.driver || (this.driver = t(t=>this.tick(t))),
                e && e();
                let i = this.driver.now();
                null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime && "finished" !== this.state || (this.startTime = i),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel()
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let e6 = t=>Array.isArray(t) && "number" == typeof t[0]
          , e7 = ([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , e8 = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: e7([0, .65, .55, 1]),
            circOut: e7([.55, 0, 1, .45]),
            backIn: e7([.31, .01, .66, -.59]),
            backOut: e7([.33, 1.53, .69, .99])
        };
        function it(t) {
            return ie(t) || e8.easeOut
        }
        function ie(t) {
            if (t)
                return e6(t) ? e7(t) : Array.isArray(t) ? t.map(it) : e8[t]
        }
        let ii = (r = ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
        ()=>(void 0 === n && (n = r()),
        n))
          , is = new Set(["opacity", "clipPath", "filter", "transform"]);
        class ir extends eE {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, keyframes: n} = this.options;
                this.resolver = new eA(n,(t,e)=>this.onKeyframesResolved(t, e),e,i),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i, n;
                let {duration: s=300, times: r, ease: o, type: a, motionValue: l, name: u} = this.options;
                if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
                    return !1;
                if ("spring" === (n = this.options).type || "backgroundColor" === n.name || !function t(e) {
                    return !!(!e || "string" == typeof e && e in e8 || e6(e) || Array.isArray(e) && e.every(t))
                }(n.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: n, ...l} = this.options
                      , u = function(t, e) {
                        let i = new e4({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , n = {
                            done: !1,
                            value: t[0]
                        }
                          , s = []
                          , r = 0;
                        for (; !n.done && r < 2e4; )
                            s.push((n = i.sample(r)).value),
                            r += 10;
                        return {
                            times: void 0,
                            keyframes: s,
                            duration: r - 10,
                            ease: "linear"
                        }
                    }(t, l);
                    1 === (t = u.keyframes).length && (t[1] = t[0]),
                    s = u.duration,
                    r = u.times,
                    o = u.ease,
                    a = "keyframes"
                }
                let h = function(t, e, i, {delay: n=0, duration: s=300, repeat: r=0, repeatType: o="loop", ease: a, times: l}={}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = ie(a);
                    return Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                        delay: n,
                        duration: s,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: r + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    })
                }(l.owner.current, u, t, {
                    ...this.options,
                    duration: s,
                    times: r,
                    ease: o
                });
                return h.startTime = t3.X.now(),
                this.pendingTimeline ? (h.timeline = this.pendingTimeline,
                this.pendingTimeline = void 0) : h.onfinish = ()=>{
                    let {onComplete: i} = this.options;
                    l.set(t2(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: h,
                    duration: s,
                    times: r,
                    type: a,
                    ease: o,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return tK(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return tK(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = tY(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return tj.Z;
                    let {animation: i} = e;
                    i.timeline = t,
                    i.onfinish = null
                } else
                    this.pendingTimeline = t;
                return tj.Z
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: n, type: s, ease: r, times: o} = t;
                if ("idle" !== e.playState && "finished" !== e.playState) {
                    if (this.time) {
                        let {motionValue: t, onUpdate: e, onComplete: a, ...l} = this.options
                          , u = new e4({
                            ...l,
                            keyframes: i,
                            duration: n,
                            type: s,
                            ease: r,
                            times: o,
                            isGenerator: !0
                        })
                          , h = tY(this.time);
                        t.setWithVelocity(u.sample(h - 10).value, u.sample(h).value, 10)
                    }
                    this.cancel()
                }
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: n, repeatType: s, damping: r, type: o} = t;
                return ii() && i && is.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== s && 0 !== r && "inertia" !== o
            }
        }
        let io = (t,e,i,n={},s,r)=>o=>{
            let a = tQ(n, t) || {}
              , l = a.delay || n.delay || 0
              , {elapsed: u=0} = n;
            u -= tY(l);
            let h = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: t=>{
                    e.set(t),
                    a.onUpdate && a.onUpdate(t)
                }
                ,
                onComplete: ()=>{
                    o(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: r ? void 0 : s
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: s, repeat: r, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(a) && (h = {
                ...h,
                ...tJ(t, h)
            }),
            h.duration && (h.duration = tY(h.duration)),
            h.repeatDelay && (h.repeatDelay = tY(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (h.duration = 0,
            0 !== h.delay || (d = !0)),
            (t1.current || t0.c.skipAnimations) && (d = !0,
            h.duration = 0,
            h.delay = 0),
            d && !r && void 0 !== e.get()) {
                let t = t2(h.keyframes, a);
                if (void 0 !== t) {
                    tv.Wi.update(()=>{
                        h.onUpdate(t),
                        h.onComplete()
                    }
                    );
                    return
                }
            }
            return !r && ir.supports(h) ? new ir(h) : new e4(h)
        }
        ;
        function ia(t) {
            return !!($(t) && t.add)
        }
        var il = i(804);
        function iu(t, e, {delay: i=0, transitionOverride: n, type: s}={}) {
            var r;
            let {transition: o=t.getDefaultTransition(), transitionEnd: a, ...l} = e
              , u = t.getValue("willChange");
            n && (o = n);
            let h = []
              , d = s && t.animationState && t.animationState.getState()[s];
            for (let e in l) {
                let n = t.getValue(e, null !== (r = t.latestValues[e]) && void 0 !== r ? r : null)
                  , s = l[e];
                if (void 0 === s || d && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(d, e))
                    continue;
                let a = {
                    delay: i,
                    elapsed: 0,
                    ...tQ(o || {}, e)
                }
                  , c = !1;
                if (window.HandoffAppearAnimations) {
                    let i = t.getProps()[m];
                    if (i) {
                        let t = window.HandoffAppearAnimations(i, e);
                        null !== t && (a.elapsed = t,
                        c = !0)
                    }
                }
                n.start(io(e, n, s, t.shouldReduceMotion && j.has(e) ? {
                    type: !1
                } : a, t, c));
                let p = n.animation;
                p && (ia(u) && (u.add(e),
                p.then(()=>u.remove(e))),
                h.push(p))
            }
            return a && Promise.all(h).then(()=>{
                tv.Wi.update(()=>{
                    a && function(t, e) {
                        let {transitionEnd: i={}, transition: n={}, ...s} = tX(t, e) || {};
                        for (let e in s = {
                            ...s,
                            ...i
                        }) {
                            let i = tp(s[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0,
                            il.BX)(i))
                        }
                    }(t, a)
                }
                )
            }
            ),
            h
        }
        function ih(t, e, i={}) {
            var n;
            let s = tX(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0)
              , {transition: r=t.getDefaultTransition() || {}} = s || {};
            i.transitionOverride && (r = i.transitionOverride);
            let o = s ? ()=>Promise.all(iu(t, s, i)) : ()=>Promise.resolve()
              , a = t.variantChildren && t.variantChildren.size ? (n=0)=>{
                let {delayChildren: s=0, staggerChildren: o, staggerDirection: a} = r;
                return function(t, e, i=0, n=0, s=1, r) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === s ? (t=0)=>t * n : (t=0)=>a - t * n;
                    return Array.from(t.variantChildren).sort(id).forEach((t,n)=>{
                        t.notify("AnimationStart", e),
                        o.push(ih(t, e, {
                            ...r,
                            delay: i + l(n)
                        }).then(()=>t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, s + n, o, a, i)
            }
            : ()=>Promise.resolve()
              , {when: l} = r;
            if (!l)
                return Promise.all([o(), a(i.delay)]);
            {
                let[t,e] = "beforeChildren" === l ? [o, a] : [a, o];
                return t().then(()=>e())
            }
        }
        function id(t, e) {
            return t.sortNodePosition(e)
        }
        let ic = [...P].reverse()
          , ip = P.length;
        function im(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        class iv extends tD {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e=>Promise.all(e.map(({animation: e, options: i})=>(function(t, e, i={}) {
                        let n;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            n = Promise.all(e.map(e=>ih(t, e, i)));
                        else if ("string" == typeof e)
                            n = ih(t, e, i);
                        else {
                            let s = "function" == typeof e ? tX(t, e, i.custom) : e;
                            n = Promise.all(iu(t, s, i))
                        }
                        return n.then(()=>{
                            tv.Wi.postRender(()=>{
                                t.notify("AnimationComplete", e)
                            }
                            )
                        }
                        )
                    }
                    )(t, e, i)))
                      , i = {
                        animate: im(!0),
                        whileInView: im(),
                        whileHover: im(),
                        whileTap: im(),
                        whileDrag: im(),
                        whileFocus: im(),
                        exit: im()
                    }
                      , n = !0
                      , s = e=>(i,n)=>{
                        var s;
                        let r = tX(t, n, "exit" === e ? null === (s = t.presenceContext) || void 0 === s ? void 0 : s.custom : void 0);
                        if (r) {
                            let {transition: t, transitionEnd: e, ...n} = r;
                            i = {
                                ...i,
                                ...n,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function r(r) {
                        let o = t.getProps()
                          , a = t.getVariantContext(!0) || {}
                          , l = []
                          , u = new Set
                          , h = {}
                          , d = 1 / 0;
                        for (let e = 0; e < ip; e++) {
                            var c;
                            let p = ic[e]
                              , m = i[p]
                              , f = void 0 !== o[p] ? o[p] : a[p]
                              , v = y(f)
                              , g = p === r ? m.isActive : null;
                            !1 === g && (d = e);
                            let P = f === a[p] && f !== o[p] && v;
                            if (P && n && t.manuallyAnimateOnMount && (P = !1),
                            m.protectedKeys = {
                                ...h
                            },
                            !m.isActive && null === g || !f && !m.prevProp || x(f) || "boolean" == typeof f)
                                continue;
                            let w = (c = m.prevProp,
                            ("string" == typeof f ? f !== c : !!Array.isArray(f) && !tH(f, c)) || p === r && m.isActive && !P && v || e > d && v)
                              , T = !1
                              , b = Array.isArray(f) ? f : [f]
                              , S = b.reduce(s(p), {});
                            !1 === g && (S = {});
                            let {prevResolvedValues: A={}} = m
                              , V = {
                                ...A,
                                ...S
                            }
                              , E = e=>{
                                w = !0,
                                u.has(e) && (T = !0,
                                u.delete(e)),
                                m.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in V) {
                                let e = S[t]
                                  , i = A[t];
                                if (!h.hasOwnProperty(t))
                                    (td(e) && td(i) ? tH(e, i) : e === i) ? void 0 !== e && u.has(t) ? E(t) : m.protectedKeys[t] = !0 : null != e ? E(t) : u.add(t)
                            }
                            m.prevProp = f,
                            m.prevResolvedValues = S,
                            m.isActive && (h = {
                                ...h,
                                ...S
                            }),
                            n && t.blockInitialAnimation && (w = !1),
                            w && (!P || T) && l.push(...b.map(t=>({
                                animation: t,
                                options: {
                                    type: p
                                }
                            })))
                        }
                        if (u.size) {
                            let e = {};
                            u.forEach(i=>{
                                let n = t.getBaseTarget(i)
                                  , s = t.getValue(i);
                                s && (s.liveStyle = !0),
                                e[i] = null != n ? n : null
                            }
                            ),
                            l.push({
                                animation: e
                            })
                        }
                        let p = !!l.length;
                        return n && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (p = !1),
                        n = !1,
                        p ? e(l) : Promise.resolve()
                    }
                    return {
                        animateChanges: r,
                        setActive: function(e, n) {
                            var s;
                            if (i[e].isActive === n)
                                return Promise.resolve();
                            null === (s = t.variantChildren) || void 0 === s || s.forEach(t=>{
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }
                            ),
                            i[e].isActive = n;
                            let o = r(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return o
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: ()=>i
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                this.unmount(),
                x(t) && (this.unmount = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {}
        }
        let ig = 0;
        class iy extends tD {
            constructor() {
                super(...arguments),
                this.id = ig++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let n = this.node.animationState.setActive("exit", !t);
                e && !t && n.then(()=>e(this.id))
            }
            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        let ix = (t,e)=>Math.abs(t - e);
        class iP {
            constructor(t, e, {transformPagePoint: i, contextWindow: n, dragSnapToOrigin: s=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = ()=>{
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let i = ib(this.lastMoveEventInfo, this.history)
                      , n = null !== this.startEvent
                      , s = (t = i.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(ix(t.x, e.x) ** 2 + ix(t.y, e.y) ** 2) >= 3);
                    if (!n && !s)
                        return;
                    let {point: r} = i
                      , {timestamp: o} = tv.frameData;
                    this.history.push({
                        ...r,
                        timestamp: o
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    n || (a && a(this.lastMoveEvent, i),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, i)
                }
                ,
                this.handlePointerMove = (t,e)=>{
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = iw(e, this.transformPagePoint),
                    tv.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t,e)=>{
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: s} = this.handlers;
                    if (this.dragSnapToOrigin && s && s(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let r = ib("pointercancel" === t.type ? this.lastMoveEventInfo : iw(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, r),
                    n && n(t, r)
                }
                ,
                !tP(t))
                    return;
                this.dragSnapToOrigin = s,
                this.handlers = e,
                this.transformPagePoint = i,
                this.contextWindow = n || window;
                let r = iw(tw(t), this.transformPagePoint)
                  , {point: o} = r
                  , {timestamp: a} = tv.frameData;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, ib(r, this.history)),
                this.removeListeners = (0,
                tS.z)(tb(this.contextWindow, "pointermove", this.handlePointerMove), tb(this.contextWindow, "pointerup", this.handlePointerUp), tb(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                tv.Pn)(this.updatePoint)
            }
        }
        function iw(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function iT(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function ib({point: t}, e) {
            return {
                point: t,
                delta: iT(t, iS(e)),
                offset: iT(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , s = iS(t);
                    for (; i >= 0 && (n = t[i],
                    !(s.timestamp - n.timestamp > tY(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let r = tK(s.timestamp - n.timestamp);
                    if (0 === r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (s.x - n.x) / r,
                        y: (s.y - n.y) / r
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function iS(t) {
            return t[t.length - 1]
        }
        var iA = i(3217)
          , iV = i(5004);
        function iE(t) {
            return t.max - t.min
        }
        function iC(t, e=0, i=.01) {
            return Math.abs(t - e) <= i
        }
        function iM(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = (0,
            iV.t)(e.min, e.max, t.origin),
            t.scale = iE(i) / iE(e),
            (iC(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = (0,
            iV.t)(i.min, i.max, t.origin) - t.originPoint,
            (iC(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function iD(t, e, i, n) {
            iM(t.x, e.x, i.x, n ? n.originX : void 0),
            iM(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function iR(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + iE(e)
        }
        function ik(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + iE(e)
        }
        function iF(t, e, i) {
            ik(t.x, e.x, i.x),
            ik(t.y, e.y, i.y)
        }
        function iL(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function ij(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function iB(t, e, i) {
            return {
                min: i$(t, e),
                max: i$(t, i)
            }
        }
        function i$(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let iO = ()=>({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , iW = ()=>({
            x: iO(),
            y: iO()
        })
          , iI = ()=>({
            min: 0,
            max: 0
        })
          , iU = ()=>({
            x: iI(),
            y: iI()
        });
        function iN(t) {
            return [t("x"), t("y")]
        }
        function iz({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function iH(t) {
            return void 0 === t || 1 === t
        }
        function iX({scale: t, scaleX: e, scaleY: i}) {
            return !iH(t) || !iH(e) || !iH(i)
        }
        function iY(t) {
            return iX(t) || iK(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function iK(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function iZ(t, e, i, n, s) {
            return void 0 !== s && (t = n + s * (t - n)),
            n + i * (t - n) + e
        }
        function iq(t, e=0, i=1, n, s) {
            t.min = iZ(t.min, e, i, n, s),
            t.max = iZ(t.max, e, i, n, s)
        }
        function iG(t, {x: e, y: i}) {
            iq(t.x, e.translate, e.scale, e.originPoint),
            iq(t.y, i.translate, i.scale, i.originPoint)
        }
        function i_(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function iJ(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function iQ(t, e, [i,n,s]) {
            let r = void 0 !== e[s] ? e[s] : .5
              , o = (0,
            iV.t)(t.min, t.max, r);
            iq(t, e[i], e[n], o, e.scale)
        }
        let i0 = ["x", "scaleX", "originX"]
          , i1 = ["y", "scaleY", "originY"];
        function i5(t, e) {
            iQ(t.x, e, i0),
            iQ(t.y, e, i1)
        }
        function i2(t, e) {
            return iz(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let i3 = ({current: t})=>t ? t.ownerDocument.defaultView : null
          , i9 = new WeakMap;
        class i4 {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = iU(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new iP(t,{
                    onSessionStart: t=>{
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(tw(t, "page").point)
                    }
                    ,
                    onStart: (t,e)=>{
                        let {drag: i, dragPropagation: n, onDragStart: s} = this.getProps();
                        if (i && !n && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = tC(i),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        iN(t=>{
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (z.aQ.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    if (n) {
                                        let t = iE(n);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        s && s(t, e);
                        let {animationState: r} = this.visualElement;
                        r && r.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t,e)=>{
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: s, onDrag: r} = this.getProps();
                        if (!i && !this.openGlobalLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && s && s(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        r && r(t, e)
                    }
                    ,
                    onSessionEnd: (t,e)=>this.stop(t, e),
                    resumeAnimation: ()=>iN(t=>{
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: i3(this.visualElement)
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: s} = this.getProps();
                s && s(t, e)
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !i6(t, n, this.currentDirection))
                    return;
                let s = this.getAxisMotionValue(t)
                  , r = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (r = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? (0,
                    iV.t)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0,
                    iV.t)(i, t, n.max) : Math.min(t, i)),
                    t
                }(r, this.constraints[t], this.elastic[t])),
                s.set(r)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , s = this.constraints;
                e && g(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {top: e, left: i, bottom: n, right: s}) {
                    return {
                        x: iL(t.x, i, s),
                        y: iL(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: iB(t, "left", "right"),
                        y: iB(t, "top", "bottom")
                    }
                }(i),
                s !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && iN(t=>{
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !g(e))
                    return !1;
                let n = e.current;
                (0,
                t4.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: s} = this.visualElement;
                if (!s || !s.layout)
                    return !1;
                let r = function(t, e, i) {
                    let n = i2(t, i)
                      , {scroll: s} = e;
                    return s && (iJ(n.x, s.offset.x),
                    iJ(n.y, s.offset.y)),
                    n
                }(n, s.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: ij((t = s.layout.layoutBox).x, r.x),
                    y: ij(t.y, r.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = iz(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: s, dragSnapToOrigin: r, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(iN(o=>{
                    if (!i6(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    r && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...s,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return i.start(io(t, i, 0, e, this.visualElement))
            }
            stopAnimation() {
                iN(t=>this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                iN(t=>{
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                iN(e=>{
                    let {drag: i} = this.getProps();
                    if (!i6(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , s = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: r} = n.layout.layoutBox[e];
                        s.set(t[e] - (0,
                        iV.t)(i, r, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!g(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                iN(t=>{
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = iE(t)
                              , s = iE(e);
                            return s > n ? i = (0,
                            iA.Y)(e.min, e.max - n, t.min) : n > s && (i = (0,
                            iA.Y)(t.min, t.max - s, e.min)),
                            (0,
                            eD.u)(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: s} = this.visualElement.getProps();
                this.visualElement.current.style.transform = s ? s({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                iN(e=>{
                    if (!i6(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: s, max: r} = this.constraints[e];
                    i.set((0,
                    iV.t)(s, r, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                i9.set(this.visualElement, this);
                let t = tb(this.visualElement.current, "pointerdown", t=>{
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = ()=>{
                    let {dragConstraints: t} = this.getProps();
                    g(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                e();
                let s = tx(window, "resize", ()=>this.scalePositionWithinConstraints())
                  , r = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e})=>{
                    this.isDragging && e && (iN(e=>{
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return ()=>{
                    s(),
                    t(),
                    n(),
                    r && r()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: s=!1, dragElastic: r=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: s,
                    dragElastic: r,
                    dragMomentum: o
                }
            }
        }
        function i6(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class i7 extends tD {
            constructor(t) {
                super(t),
                this.removeGroupControls = tj.Z,
                this.removeListeners = tj.Z,
                this.controls = new i4(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || tj.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let i8 = t=>(e,i)=>{
            t && t(e, i)
        }
        ;
        class nt extends tD {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = tj.Z
            }
            onPointerDown(t) {
                this.session = new iP(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: i3(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: i8(t),
                    onStart: i8(e),
                    onMove: i,
                    onEnd: (t,e)=>{
                        delete this.session,
                        n && n(t, e)
                    }
                }
            }
            mount() {
                this.removePointerDownListener = tb(this.node.current, "pointerdown", t=>this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        let ne = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function ni(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let nn = {
            correct: (t,e)=>{
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!z.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = ni(t, e.target.x)
                  , n = ni(t, e.target.y);
                return `${i}% ${n}%`
            }
        };
        class ns extends a.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: s} = t;
                Object.assign(F, no),
                s && (e.group && e.group.add(s),
                i && i.register && n && i.register(s),
                s.root.didUpdate(),
                s.addEventListener("animationComplete", ()=>{
                    this.safeToRemove()
                }
                ),
                s.setOptions({
                    ...s.options,
                    onExitComplete: ()=>this.safeToRemove()
                })),
                ne.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: s} = this.props
                  , r = i.projection;
                return r && (r.isPresent = s,
                n || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(),
                t.isPresent === s || (s ? r.promote() : r.relegate() || tv.Wi.postRender(()=>{
                    let t = r.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                f.postRender(()=>{
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function nr(t) {
            let[e,i] = function() {
                let t = (0,
                a.useContext)(h);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: i, register: n} = t
                  , s = (0,
                a.useId)();
                return (0,
                a.useEffect)(()=>n(s), []),
                !e && i ? [!1, ()=>i && i(s)] : [!0]
            }()
              , n = (0,
            a.useContext)(C);
            return (0,
            o.jsx)(ns, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                a.useContext)(M),
                isPresent: e,
                safeToRemove: i
            })
        }
        let no = {
            borderRadius: {
                ...nn,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: nn,
            borderTopRightRadius: nn,
            borderBottomLeftRadius: nn,
            borderBottomRightRadius: nn,
            boxShadow: {
                correct: (t,{treeScale: e, projectionDelta: i})=>{
                    let n = ef.P.parse(t);
                    if (n.length > 5)
                        return t;
                    let s = ef.P.createTransformer(t)
                      , r = "number" != typeof n[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    n[0 + r] /= o,
                    n[1 + r] /= a;
                    let l = (0,
                    iV.t)(o, a, .5);
                    return "number" == typeof n[2 + r] && (n[2 + r] /= l),
                    "number" == typeof n[3 + r] && (n[3 + r] /= l),
                    s(n)
                }
            }
        };
        var na = i(2428);
        let nl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , nu = nl.length
          , nh = t=>"string" == typeof t ? parseFloat(t) : t
          , nd = t=>"number" == typeof t || z.px.test(t);
        function nc(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let np = nf(0, .5, eY)
          , nm = nf(.5, .95, tj.Z);
        function nf(t, e, i) {
            return n=>n < t ? 0 : n > e ? 1 : i((0,
            iA.Y)(t, e, n))
        }
        function nv(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function ng(t, e) {
            nv(t.x, e.x),
            nv(t.y, e.y)
        }
        function ny(t, e, i, n, s) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== s && (t = n + 1 / s * (t - n)),
            t
        }
        function nx(t, e, [i,n,s], r, o) {
            !function(t, e=0, i=1, n=.5, s, r=t, o=t) {
                if (z.aQ.test(e) && (e = parseFloat(e),
                e = (0,
                iV.t)(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = (0,
                iV.t)(r.min, r.max, n);
                t === r && (a -= e),
                t.min = ny(t.min, e, i, a, s),
                t.max = ny(t.max, e, i, a, s)
            }(t, e[i], e[n], e[s], e.scale, r, o)
        }
        let nP = ["x", "scaleX", "originX"]
          , nw = ["y", "scaleY", "originY"];
        function nT(t, e, i, n) {
            nx(t.x, e, nP, i ? i.x : void 0, n ? n.x : void 0),
            nx(t.y, e, nw, i ? i.y : void 0, n ? n.y : void 0)
        }
        function nb(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function nS(t) {
            return nb(t.x) && nb(t.y)
        }
        function nA(t, e) {
            return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
        }
        function nV(t) {
            return iE(t.x) / iE(t.y)
        }
        var nE = i(8746);
        class nC {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                nE.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                nE.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e=>t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t=>{
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t=>{
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function nM(t, e, i) {
            let n = ""
              , s = t.x.translate / e.x
              , r = t.y.translate / e.y
              , o = (null == i ? void 0 : i.z) || 0;
            if ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `),
            (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
            i) {
                let {transformPerspective: t, rotate: e, rotateX: s, rotateY: r, skewX: o, skewY: a} = i;
                t && (n = `perspective(${t}px) ${n}`),
                e && (n += `rotate(${e}deg) `),
                s && (n += `rotateX(${s}deg) `),
                r && (n += `rotateY(${r}deg) `),
                o && (n += `skewX(${o}deg) `),
                a && (n += `skewY(${a}deg) `)
            }
            let a = t.x.scale * e.x
              , l = t.y.scale * e.y;
            return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
            n || "none"
        }
        let nD = (t,e)=>t.depth - e.depth;
        class nR {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                nE.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                nE.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(nD),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        let nk = ["", "X", "Y", "Z"]
          , nF = {
            visibility: "hidden"
        }
          , nL = 0
          , nj = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function nB(t, e, i, n) {
            let {latestValues: s} = e;
            s[t] && (i[t] = s[t],
            e.setStaticValue(t, 0),
            n && (n[t] = 0))
        }
        function n$({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: s}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = nL++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = ()=>{
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = ()=>{
                        this.projectionUpdateScheduled = !1,
                        nj.totalNodes = nj.resolvedTargetDeltas = nj.recalculatedProjection = 0,
                        this.nodes.forEach(nI),
                        this.nodes.forEach(nK),
                        this.nodes.forEach(nZ),
                        this.nodes.forEach(nU),
                        window.MotionDebug && window.MotionDebug.record(nj)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nR)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new na.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: s, visualElement: r} = this.options;
                    if (r && !r.current && r.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (s || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let n = ()=>this.root.updateBlockedByResize = !1;
                        t(e, ()=>{
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = t3.X.now()
                                  , n = ({timestamp: e})=>{
                                    let s = e - i;
                                    s >= 250 && ((0,
                                    tv.Pn)(n),
                                    t(s - 250))
                                }
                                ;
                                return tv.Wi.read(n, !0),
                                ()=>(0,
                                tv.Pn)(n)
                            }(n, 0),
                            ne.hasAnimatedSinceResize && (ne.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(nY))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && r && (n || s) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: n})=>{
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let s = this.options.transition || r.getDefaultTransition() || n0
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = r.getProps()
                          , l = !this.targetLayout || !nA(this.targetLayout, n) || i
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...tQ(s, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || nY(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    tv.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(nq),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(nz);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(nH),
                    this.isUpdating = !1,
                    window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(),
                    this.nodes.forEach(nX),
                    this.nodes.forEach(nO),
                    this.nodes.forEach(nW),
                    this.clearAllSnapshots();
                    let t = t3.X.now();
                    tv.frameData.delta = (0,
                    eD.u)(0, 1e3 / 60, t - tv.frameData.timestamp),
                    tv.frameData.timestamp = t,
                    tv.frameData.isProcessing = !0,
                    tv.S6.update.process(tv.frameData),
                    tv.S6.preRender.process(tv.frameData),
                    tv.S6.render.process(tv.frameData),
                    tv.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    f.read(()=>this.update()))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(nN),
                    this.sharedNodes.forEach(nG)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    tv.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    tv.Wi.postRender(()=>{
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = iU(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: n(this.instance),
                        offset: i(this.instance)
                    })
                }
                resetTransform() {
                    if (!s)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform
                      , e = this.projectionDelta && !nS(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , r = n !== this.prevTransformTemplateValue;
                    t && (e || iY(this.latestValues) || r) && (s(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    n2((e = n).x),
                    n2(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return iU();
                    let e = t.measureViewportBox()
                      , {scroll: i} = this.root;
                    return i && (iJ(e.x, i.offset.x),
                    iJ(e.y, i.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = iU();
                    ng(e, t);
                    for (let i = 0; i < this.path.length; i++) {
                        let n = this.path[i]
                          , {scroll: s, options: r} = n;
                        if (n !== this.root && s && r.layoutScroll) {
                            if (s.isRoot) {
                                ng(e, t);
                                let {scroll: i} = this.root;
                                i && (iJ(e.x, -i.offset.x),
                                iJ(e.y, -i.offset.y))
                            }
                            iJ(e.x, s.offset.x),
                            iJ(e.y, s.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let i = iU();
                    ng(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && i5(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        iY(n.latestValues) && i5(i, n.latestValues)
                    }
                    return iY(this.latestValues) && i5(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = iU();
                    ng(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !iY(i.latestValues))
                            continue;
                        iX(i.latestValues) && i.updateSnapshot();
                        let n = iU();
                        ng(n, i.measurePageBox()),
                        nT(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return iY(this.latestValues) && nT(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tv.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, s;
                    let r = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== r;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = tv.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = iU(),
                            this.relativeTargetOrigin = iU(),
                            iF(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            ng(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = iU(),
                            this.targetWithTransforms = iU()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            s = this.relativeParent.target,
                            iR(i.x, n.x, s.x),
                            iR(i.y, n.y, s.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ng(this.target, this.layout.layoutBox),
                            iG(this.target, this.targetDelta)) : ng(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = iU(),
                                this.relativeTargetOrigin = iU(),
                                iF(this.relativeTargetOrigin, this.target, t.target),
                                ng(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            nj.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || iX(this.parent.latestValues) || iK(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === tv.frameData.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: s, layoutId: r} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(s || r))
                        return;
                    ng(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let s, r;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                r = (s = i[a]).projectionDelta;
                                let o = s.instance;
                                (!o || !o.style || "contents" !== o.style.display) && (n && s.options.layoutScroll && s.scroll && s !== s.root && i5(t, {
                                    x: -s.scroll.offset.x,
                                    y: -s.scroll.offset.y
                                }),
                                r && (e.x *= r.x.scale,
                                e.y *= r.y.scale,
                                iG(t, r)),
                                n && iY(s.latestValues) && i5(t, s.latestValues))
                            }
                            e.x = i_(e.x),
                            e.y = i_(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = iU());
                    let {target: l} = e;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = iW(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = iW(),
                    this.projectionDeltaWithTransform = iW());
                    let u = this.projectionTransform;
                    iD(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = nM(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    nj.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , s = n ? n.latestValues : {}
                      , r = {
                        ...this.latestValues
                    }
                      , o = iW();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = iU()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(nQ));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e=>{
                        let n = e / 1e3;
                        if (n_(o.x, t.x, n),
                        n_(o.y, t.y, n),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, c, p, m;
                            iF(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            nJ(p.x, m.x, a.x, n),
                            nJ(p.y, m.y, a.y, n),
                            i && (u = this.relativeTarget,
                            c = i,
                            u.x.min === c.x.min && u.x.max === c.x.max && u.y.min === c.y.min && u.y.max === c.y.max) && (this.isProjectionDirty = !1),
                            i || (i = iU()),
                            ng(i, this.relativeTarget)
                        }
                        l && (this.animationValues = r,
                        function(t, e, i, n, s, r) {
                            s ? (t.opacity = (0,
                            iV.t)(0, void 0 !== i.opacity ? i.opacity : 1, np(n)),
                            t.opacityExit = (0,
                            iV.t)(void 0 !== e.opacity ? e.opacity : 1, 0, nm(n))) : r && (t.opacity = (0,
                            iV.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let s = 0; s < nu; s++) {
                                let r = `border${nl[s]}Radius`
                                  , o = nc(e, r)
                                  , a = nc(i, r);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || nd(o) === nd(a) ? (t[r] = Math.max((0,
                                iV.t)(nh(o), nh(a), n), 0),
                                (z.aQ.test(a) || z.aQ.test(o)) && (t[r] += "%")) : t[r] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = (0,
                            iV.t)(e.rotate || 0, i.rotate || 0, n))
                        }(r, s, this.latestValues, n, d, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    tv.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = tv.Wi.update(()=>{
                        ne.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, i) {
                            let n = $(0) ? 0 : (0,
                            il.BX)(0);
                            return n.start(io("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e=>{
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: ()=>{
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: s} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && n3(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || iU();
                            let e = iE(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = iE(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        ng(e, i),
                        i5(e, s),
                        iD(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new nC),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    i.z && nB("z", t, n, this.animationValues);
                    for (let e = 0; e < nk.length; e++)
                        nB(`rotate${nk[e]}`, t, n, this.animationValues),
                        nB(`skew${nk[e]}`, t, n, this.animationValues);
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]),
                        this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return nF;
                    let n = {
                        visibility: ""
                    }
                      , s = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = tm(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = s ? s(this.latestValues, "") : "none",
                        n;
                    let r = this.getLead();
                    if (!this.projectionDelta || !this.layout || !r.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tm(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !iY(this.latestValues) && (e.transform = s ? s({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = r.animationValues || r.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = nM(this.projectionDeltaWithTransform, this.treeScale, o),
                    s && (n.transform = s(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    r.animationValues ? n.opacity = r === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = r === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    F) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i} = F[t]
                          , s = "none" === n.transform ? o[t] : e(o[t], r);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = s
                        } else
                            n[t] = s
                    }
                    return this.options.layoutId && (n.pointerEvents = r === this ? tm(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t=>{
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(nz),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function nO(t) {
            t.updateLayout()
        }
        function nW(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: s} = t.options
                  , r = i.source !== t.layout.source;
                "size" === s ? iN(t=>{
                    let n = r ? i.measuredBox[t] : i.layoutBox[t]
                      , s = iE(n);
                    n.min = e[t].min,
                    n.max = n.min + s
                }
                ) : n3(s, i.layoutBox, e) && iN(n=>{
                    let s = r ? i.measuredBox[n] : i.layoutBox[n]
                      , o = iE(e[n]);
                    s.max = s.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = iW();
                iD(o, e, i.layoutBox);
                let a = iW();
                r ? iD(a, t.applyTransform(n, !0), i.measuredBox) : iD(a, e, i.layoutBox);
                let l = !nS(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: s, layout: r} = n;
                        if (s && r) {
                            let o = iU();
                            iF(o, i.layoutBox, s.layoutBox);
                            let a = iU();
                            iF(a, e, r.layoutBox),
                            nA(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function nI(t) {
            nj.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function nU(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function nN(t) {
            t.clearSnapshot()
        }
        function nz(t) {
            t.clearMeasurements()
        }
        function nH(t) {
            t.isLayoutDirty = !1
        }
        function nX(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function nY(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function nK(t) {
            t.resolveTargetDelta()
        }
        function nZ(t) {
            t.calcProjection()
        }
        function nq(t) {
            t.resetSkewAndRotation()
        }
        function nG(t) {
            t.removeLeadSnapshot()
        }
        function n_(t, e, i) {
            t.translate = (0,
            iV.t)(e.translate, 0, i),
            t.scale = (0,
            iV.t)(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function nJ(t, e, i, n) {
            t.min = (0,
            iV.t)(e.min, i.min, n),
            t.max = (0,
            iV.t)(e.max, i.max, n)
        }
        function nQ(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let n0 = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , n1 = t=>"undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , n5 = n1("applewebkit/") && !n1("chrome/") ? Math.round : tj.Z;
        function n2(t) {
            t.min = n5(t.min),
            t.max = n5(t.max)
        }
        function n3(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !iC(nV(e), nV(i), .2)
        }
        let n9 = n$({
            attachResizeListener: (t,e)=>tx(t, "resize", e),
            measureScroll: ()=>({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: ()=>!0
        })
          , n4 = {
            current: void 0
        }
          , n6 = n$({
            measureScroll: t=>({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: ()=>{
                if (!n4.current) {
                    let t = new n9({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    n4.current = t
                }
                return n4.current
            }
            ,
            resetTransform: (t,e)=>{
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t=>"fixed" === window.getComputedStyle(t).position
        })
          , n7 = {
            current: null
        }
          , n8 = {
            current: !1
        }
          , st = new WeakMap
          , se = [...ea, ew.$, ef.P]
          , si = t=>se.find(eo(t))
          , sn = Object.keys(V)
          , ss = sn.length
          , sr = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , so = w.length;
        class sa {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: s, visualState: r}, o={}) {
                this.resolveKeyframes = (t,e,i,n)=>new this.KeyframeResolver(t,e,i,n,this),
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = em,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
                this.render = ()=>{
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = ()=>tv.Wi.render(this.render, !1, !0);
                let {latestValues: a, renderState: l} = r;
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = o,
                this.blockInitialAnimation = !!s,
                this.isControllingVariants = T(e),
                this.isVariantNode = b(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: u, ...h} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in h) {
                    let e = h[t];
                    void 0 !== a[t] && $(e) && (e.set(a[t], !1),
                    ia(u) && u.add(t))
                }
            }
            mount(t) {
                this.current = t,
                st.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((t,e)=>this.bindToMotionValue(e, t)),
                n8.current || function() {
                    if (n8.current = !0,
                    E.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = ()=>n7.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            n7.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || n7.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                var t;
                for (let t in st.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                tv.Pn)(this.notifyUpdate),
                (0,
                tv.Pn)(this.render),
                this.valueSubscriptions.forEach(t=>t()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let e in this.features)
                    null === (t = this.features[e]) || void 0 === t || t.unmount();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i = j.has(t)
                  , n = e.on("change", e=>{
                    this.latestValues[t] = e,
                    this.props.onUpdate && tv.Wi.preRender(this.notifyUpdate),
                    i && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, ()=>{
                    n(),
                    s(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures({children: t, ...e}, i, n, s) {
                let r, o;
                for (let t = 0; t < ss; t++) {
                    let i = sn[t]
                      , {isEnabled: n, Feature: s, ProjectionNode: a, MeasureLayout: l} = V[i];
                    a && (r = a),
                    n(e) && (!this.features[i] && s && (this.features[i] = new s(this)),
                    l && (o = l))
                }
                if (("html" === this.type || "svg" === this.type) && !this.projection && r) {
                    this.projection = new r(this.latestValues,function t(e) {
                        if (e)
                            return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                    }(this.parent));
                    let {layoutId: t, layout: i, drag: n, dragConstraints: o, layoutScroll: a, layoutRoot: l} = e;
                    this.projection.setOptions({
                        layoutId: t,
                        layout: i,
                        alwaysMeasureLayout: !!n || o && g(o),
                        visualElement: this,
                        scheduleRender: ()=>this.scheduleRender(),
                        animationType: "string" == typeof i ? i : "both",
                        initialPromotionConfig: s,
                        layoutScroll: a,
                        layoutRoot: l
                    })
                }
                return o
            }
            updateFeatures() {
                for (let t in this.features) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iU()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < sr.length; e++) {
                    let i = sr[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    let {willChange: n} = e;
                    for (let s in e) {
                        let r = e[s]
                          , o = i[s];
                        if ($(r))
                            t.addValue(s, r),
                            ia(n) && n.add(s);
                        else if ($(o))
                            t.addValue(s, (0,
                            il.BX)(r, {
                                owner: t
                            })),
                            ia(n) && n.remove(s);
                        else if (o !== r) {
                            if (t.hasValue(s)) {
                                let e = t.getValue(s);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(s);
                                t.addValue(s, (0,
                                il.BX)(void 0 !== e ? e : r, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(t=!1) {
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let e = {};
                for (let t = 0; t < so; t++) {
                    let i = w[t]
                      , n = this.props[i];
                    (y(n) || !1 === n) && (e[i] = n)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    ()=>e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = (0,
                il.BX)(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && (t6(n) || t9(n)) ? n = parseFloat(n) : !si(n) && ef.P.test(e) && (n = eS(t, e)),
                this.setBaseTarget(t, $(n) ? n.get() : n)),
                $(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let s = tu(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    s && (i = s[t])
                }
                if (n && void 0 !== i)
                    return i;
                let s = this.getBaseTargetFromProps(this.props, t);
                return void 0 === s || $(s) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : s
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new na.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class sl extends sa {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = eA
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
        }
        class su extends sl {
            constructor() {
                super(...arguments),
                this.type = "html"
            }
            readValueFromInstance(t, e) {
                if (j.has(e)) {
                    let t = eb(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = ((0,
                    I.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return i2(t, e)
            }
            build(t, e, i, n) {
                Y(t, e, i, n.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return ta(t, e, i)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                $(t) && (this.childSubscription = t.on("change", t=>{
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
            renderInstance(t, e, i, n) {
                ts(t, e, i, n)
            }
        }
        class sh extends sl {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (j.has(e)) {
                    let t = eb(e);
                    return t && t.default || 0
                }
                return e = tr.has(e) ? e : p(e),
                t.getAttribute(e)
            }
            measureInstanceViewportBox() {
                return iU()
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return tl(t, e, i)
            }
            build(t, e, i, n) {
                te(t, e, i, this.isSVGTag, n.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                to(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = tn(t.tagName),
                super.mount(t)
            }
        }
        let sd = (t,e)=>k(t) ? new sh(e,{
            enableHardwareAcceleration: !1
        }) : new su(e,{
            allowProjection: t !== a.Fragment,
            enableHardwareAcceleration: !0
        })
          , sc = {
            animation: {
                Feature: iv
            },
            exit: {
                Feature: iy
            },
            inView: {
                Feature: tz
            },
            tap: {
                Feature: t$
            },
            focus: {
                Feature: tF
            },
            hover: {
                Feature: tk
            },
            pan: {
                Feature: nt
            },
            drag: {
                Feature: i7,
                ProjectionNode: n6,
                MeasureLayout: nr
            },
            layout: {
                ProjectionNode: n6,
                MeasureLayout: nr
            }
        }
          , sp = function(t) {
            function e(e, i={}) {
                return function({preloadedFeatures: t, createVisualElement: e, useRender: i, useVisualState: n, Component: s}) {
                    t && function(t) {
                        for (let e in t)
                            V[e] = {
                                ...V[e],
                                ...t[e]
                            }
                    }(t);
                    let r = (0,
                    a.forwardRef)(function(r, p) {
                        var v;
                        let x;
                        let P = {
                            ...(0,
                            a.useContext)(l._),
                            ...r,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                a.useContext)(C).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(r)
                        }
                          , {isStatic: w} = P
                          , b = function(t) {
                            let {initial: e, animate: i} = function(t, e) {
                                if (T(t)) {
                                    let {initial: e, animate: i} = t;
                                    return {
                                        initial: !1 === e || y(e) ? e : void 0,
                                        animate: y(i) ? i : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            a.useContext)(u));
                            return (0,
                            a.useMemo)(()=>({
                                initial: e,
                                animate: i
                            }), [S(e), S(i)])
                        }(r)
                          , A = n(r, w);
                        if (!w && E.j) {
                            b.visualElement = function(t, e, i, n) {
                                let {visualElement: s} = (0,
                                a.useContext)(u)
                                  , r = (0,
                                a.useContext)(c)
                                  , o = (0,
                                a.useContext)(h)
                                  , p = (0,
                                a.useContext)(l._).reducedMotion
                                  , v = (0,
                                a.useRef)();
                                n = n || r.renderer,
                                !v.current && n && (v.current = n(t, {
                                    visualState: e,
                                    parent: s,
                                    props: i,
                                    presenceContext: o,
                                    blockInitialAnimation: !!o && !1 === o.initial,
                                    reducedMotionConfig: p
                                }));
                                let g = v.current;
                                (0,
                                a.useInsertionEffect)(()=>{
                                    g && g.update(i, o)
                                }
                                );
                                let y = (0,
                                a.useRef)(!!(i[m] && !window.HandoffComplete));
                                return (0,
                                d.L)(()=>{
                                    g && (f.postRender(g.render),
                                    y.current && g.animationState && g.animationState.animateChanges())
                                }
                                ),
                                (0,
                                a.useEffect)(()=>{
                                    g && (g.updateFeatures(),
                                    !y.current && g.animationState && g.animationState.animateChanges(),
                                    y.current && (y.current = !1,
                                    window.HandoffComplete = !0))
                                }
                                ),
                                g
                            }(s, A, P, e);
                            let i = (0,
                            a.useContext)(M)
                              , n = (0,
                            a.useContext)(c).strict;
                            b.visualElement && (x = b.visualElement.loadFeatures(P, n, t, i))
                        }
                        return (0,
                        o.jsxs)(u.Provider, {
                            value: b,
                            children: [x && b.visualElement ? (0,
                            o.jsx)(x, {
                                visualElement: b.visualElement,
                                ...P
                            }) : null, i(s, r, (v = b.visualElement,
                            (0,
                            a.useCallback)(t=>{
                                t && A.mount && A.mount(t),
                                v && (t ? v.mount(t) : v.unmount()),
                                p && ("function" == typeof p ? p(t) : g(p) && (p.current = t))
                            }
                            , [v])), A, w, b.visualElement)]
                        })
                    });
                    return r[D] = s,
                    r
                }(t(e, i))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let i = new Map;
            return new Proxy(e,{
                get: (t,n)=>(i.has(n) || i.set(n, e(n)),
                i.get(n))
            })
        }((t,e)=>(function(t, {forwardMotionProps: e=!1}, i, n) {
            return {
                ...k(t) ? tg : ty,
                preloadedFeatures: i,
                useRender: function(t=!1) {
                    return (e,i,n,{latestValues: s},r)=>{
                        let o = (k(e) ? function(t, e, i, n) {
                            let s = (0,
                            a.useMemo)(()=>{
                                let i = ti();
                                return te(i, e, {
                                    enableHardwareAcceleration: !1
                                }, tn(n), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                Z(e, t.style, t),
                                s.style = {
                                    ...e,
                                    ...s.style
                                }
                            }
                            return s
                        }
                        : function(t, e, i) {
                            let n = {}
                              , s = function(t, e, i) {
                                let n = t.style || {}
                                  , s = {};
                                return Z(s, n, t),
                                Object.assign(s, function({transformTemplate: t}, e, i) {
                                    return (0,
                                    a.useMemo)(()=>{
                                        let n = K();
                                        return Y(n, e, {
                                            enableHardwareAcceleration: !i
                                        }, t),
                                        Object.assign({}, n.vars, n.style)
                                    }
                                    , [e])
                                }(t, e, i)),
                                s
                            }(t, e, i);
                            return t.drag && !1 !== t.dragListener && (n.draggable = !1,
                            s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
                            s.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
                            n.style = s,
                            n
                        }
                        )(i, s, r, e)
                          , l = function(t, e, i) {
                            let n = {};
                            for (let s in t)
                                ("values" !== s || "object" != typeof t.values) && (_(s) || !0 === i && G(s) || !e && !G(s) || t.draggable && s.startsWith("onDrag")) && (n[s] = t[s]);
                            return n
                        }(i, "string" == typeof e, t)
                          , u = e !== a.Fragment ? {
                            ...l,
                            ...o,
                            ref: n
                        } : {}
                          , {children: h} = i
                          , d = (0,
                        a.useMemo)(()=>$(h) ? h.get() : h, [h]);
                        return (0,
                        a.createElement)(e, {
                            ...u,
                            children: d
                        })
                    }
                }(e),
                createVisualElement: n,
                Component: t
            }
        }
        )(t, e, sc, sd))
    },
    1534: function(t, e, i) {
        i.d(e, {
            f: function() {
                return s
            },
            t: function() {
                return o
            }
        });
        let n = t=>e=>"string" == typeof e && e.startsWith(t)
          , s = n("--")
          , r = n("var(--")
          , o = t=>!!r(t) && a.test(t.split("/*")[0].trim())
          , a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    },
    565: function(t, e, i) {
        i.d(e, {
            c: function() {
                return n
            }
        });
        let n = {
            skipAnimations: !1,
            useManualTiming: !1
        }
    },
    8746: function(t, e, i) {
        function n(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function s(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        i.d(e, {
            cl: function() {
                return s
            },
            y4: function() {
                return n
            }
        })
    },
    1506: function(t, e, i) {
        i.d(e, {
            u: function() {
                return n
            }
        });
        let n = (t,e,i)=>i > e ? e : i < t ? t : i
    },
    9047: function(t, e, i) {
        i.d(e, {
            K: function() {
                return s
            },
            k: function() {
                return r
            }
        });
        var n = i(9276);
        let s = n.Z
          , r = n.Z
    },
    2548: function(t, e, i) {
        i.d(e, {
            s: function() {
                return u
            }
        });
        var n = i(9047)
          , s = i(1506)
          , r = i(9654)
          , o = i(3217)
          , a = i(9276)
          , l = i(1215);
        function u(t, e, {clamp: i=!0, ease: u, mixer: h}={}) {
            let d = t.length;
            if ((0,
            n.k)(d === e.length, "Both input and output ranges must be the same length"),
            1 === d)
                return ()=>e[0];
            if (2 === d && t[0] === t[1])
                return ()=>e[1];
            t[0] > t[d - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let c = function(t, e, i) {
                let n = []
                  , s = i || l.C
                  , o = t.length - 1;
                for (let i = 0; i < o; i++) {
                    let o = s(t[i], t[i + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[i] || a.Z : e;
                        o = (0,
                        r.z)(t, o)
                    }
                    n.push(o)
                }
                return n
            }(e, u, h)
              , p = c.length
              , m = e=>{
                let i = 0;
                if (p > 1)
                    for (; i < t.length - 2 && !(e < t[i + 1]); i++)
                        ;
                let n = (0,
                o.Y)(t[i], t[i + 1], e);
                return c[i](n)
            }
            ;
            return i ? e=>m((0,
            s.u)(t[0], t[d - 1], e)) : m
        }
    },
    7282: function(t, e, i) {
        i.d(e, {
            j: function() {
                return n
            }
        });
        let n = "undefined" != typeof document
    },
    1215: function(t, e, i) {
        i.d(e, {
            C: function() {
                return S
            }
        });
        var n = i(5004)
          , s = i(9047);
        function r(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        var o = i(5778)
          , a = i(1583)
          , l = i(598);
        let u = (t,e,i)=>{
            let n = t * t
              , s = i * (e * e - n) + n;
            return s < 0 ? 0 : Math.sqrt(s)
        }
          , h = [o.$, a.m, l.J]
          , d = t=>h.find(e=>e.test(t));
        function c(t) {
            let e = d(t);
            (0,
            s.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let i = e.parse(t);
            return e === l.J && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let s = 0
                  , o = 0
                  , a = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , l = 2 * i - n;
                    s = r(l, n, t + 1 / 3),
                    o = r(l, n, t),
                    a = r(l, n, t - 1 / 3)
                } else
                    s = o = a = i;
                return {
                    red: Math.round(255 * s),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * a),
                    alpha: n
                }
            }(i)),
            i
        }
        let p = (t,e)=>{
            let i = c(t)
              , s = c(e)
              , r = {
                ...i
            };
            return t=>(r.red = u(i.red, s.red, t),
            r.green = u(i.green, s.green, t),
            r.blue = u(i.blue, s.blue, t),
            r.alpha = (0,
            n.t)(i.alpha, s.alpha, t),
            a.m.transform(r))
        }
        ;
        var m = i(9654)
          , f = i(146)
          , v = i(3646)
          , g = i(1534);
        function y(t, e) {
            return i=>i > 0 ? e : t
        }
        function x(t, e) {
            return i=>(0,
            n.t)(t, e, i)
        }
        function P(t) {
            return "number" == typeof t ? x : "string" == typeof t ? (0,
            g.t)(t) ? y : f.$.test(t) ? p : b : Array.isArray(t) ? w : "object" == typeof t ? f.$.test(t) ? p : T : y
        }
        function w(t, e) {
            let i = [...t]
              , n = i.length
              , s = t.map((t,i)=>P(t)(t, e[i]));
            return t=>{
                for (let e = 0; e < n; e++)
                    i[e] = s[e](t);
                return i
            }
        }
        function T(t, e) {
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let s in i)
                void 0 !== t[s] && void 0 !== e[s] && (n[s] = P(t[s])(t[s], e[s]));
            return t=>{
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
        let b = (t,e)=>{
            let i = v.P.createTransformer(e)
              , n = (0,
            v.V)(t)
              , r = (0,
            v.V)(e);
            return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? (0,
            m.z)(w(function(t, e) {
                var i;
                let n = []
                  , s = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let r = 0; r < e.values.length; r++) {
                    let o = e.types[r]
                      , a = t.indexes[o][s[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    n[r] = l,
                    s[o]++
                }
                return n
            }(n, r), r.values), i) : ((0,
            s.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            y(t, e))
        }
        ;
        function S(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0,
            n.t)(t, e, i) : P(t)(t, e)
        }
    },
    5004: function(t, e, i) {
        i.d(e, {
            t: function() {
                return n
            }
        });
        let n = (t,e,i)=>t + (e - t) * i
    },
    9276: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return n
            }
        });
        let n = t=>t
    },
    839: function(t, e, i) {
        i.d(e, {
            Y: function() {
                return r
            }
        });
        var n = i(5004)
          , s = i(3217);
        function r(t) {
            let e = [0];
            return !function(t, e) {
                let i = t[t.length - 1];
                for (let r = 1; r <= e; r++) {
                    let o = (0,
                    s.Y)(0, e, r);
                    t.push((0,
                    n.t)(i, 1, o))
                }
            }(e, t.length - 1),
            e
        }
    },
    9654: function(t, e, i) {
        i.d(e, {
            z: function() {
                return s
            }
        });
        let n = (t,e)=>i=>e(t(i))
          , s = (...t)=>t.reduce(n)
    },
    3217: function(t, e, i) {
        i.d(e, {
            Y: function() {
                return n
            }
        });
        let n = (t,e,i)=>{
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
    },
    2428: function(t, e, i) {
        i.d(e, {
            L: function() {
                return s
            }
        });
        var n = i(8746);
        class s {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                n.y4)(this.subscriptions, t),
                ()=>(0,
                n.cl)(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let s = 0; s < n; s++) {
                            let n = this.subscriptions[s];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    458: function(t, e, i) {
        i.d(e, {
            h: function() {
                return s
            }
        });
        var n = i(2265);
        function s(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    9033: function(t, e, i) {
        i.d(e, {
            L: function() {
                return s
            }
        });
        var n = i(2265);
        let s = i(7282).j ? n.useLayoutEffect : n.useEffect
    },
    3476: function(t, e, i) {
        i.d(e, {
            R: function() {
                return n
            }
        });
        function n(t, e) {
            return e ? 1e3 / e * t : 0
        }
    },
    804: function(t, e, i) {
        i.d(e, {
            BX: function() {
                return h
            },
            S1: function() {
                return l
            }
        });
        var n = i(2428)
          , s = i(3476)
          , r = i(9993)
          , o = i(6219);
        let a = t=>!isNaN(parseFloat(t))
          , l = {
            current: void 0
        };
        class u {
            constructor(t, e={}) {
                this.version = "11.1.7",
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t,e=!0)=>{
                    let i = r.X.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.canTrackVelocity = a(this.current),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = r.X.now()
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new n.L);
                let i = this.events[t].add(e);
                return "change" === t ? ()=>{
                    i(),
                    o.Wi.read(()=>{
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return l.current && l.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let t = r.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0,
                s.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
            }
            start(t) {
                return this.stop(),
                new Promise(e=>{
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then(()=>{
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function h(t, e) {
            return new u(t,e)
        }
    },
    5778: function(t, e, i) {
        i.d(e, {
            $: function() {
                return s
            }
        });
        var n = i(1583);
        let s = {
            test: (0,
            i(3338).i)("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , s = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                s = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                s = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                s += s),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: s ? parseInt(s, 16) / 255 : 1
                }
            },
            transform: n.m.transform
        }
    },
    598: function(t, e, i) {
        i.d(e, {
            J: function() {
                return a
            }
        });
        var n = i(783)
          , s = i(5480)
          , r = i(7292)
          , o = i(3338);
        let a = {
            test: (0,
            o.i)("hsl", "hue"),
            parse: (0,
            o.d)("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: o=1})=>"hsla(" + Math.round(t) + ", " + s.aQ.transform((0,
            r.Nw)(e)) + ", " + s.aQ.transform((0,
            r.Nw)(i)) + ", " + (0,
            r.Nw)(n.Fq.transform(o)) + ")"
        }
    },
    146: function(t, e, i) {
        i.d(e, {
            $: function() {
                return a
            }
        });
        var n = i(7292)
          , s = i(5778)
          , r = i(598)
          , o = i(1583);
        let a = {
            test: t=>o.m.test(t) || s.$.test(t) || r.J.test(t),
            parse: t=>o.m.test(t) ? o.m.parse(t) : r.J.test(t) ? r.J.parse(t) : s.$.parse(t),
            transform: t=>(0,
            n.HD)(t) ? t : t.hasOwnProperty("red") ? o.m.transform(t) : r.J.transform(t)
        }
    },
    1583: function(t, e, i) {
        i.d(e, {
            m: function() {
                return u
            }
        });
        var n = i(1506)
          , s = i(783)
          , r = i(7292)
          , o = i(3338);
        let a = t=>(0,
        n.u)(0, 255, t)
          , l = {
            ...s.Rx,
            transform: t=>Math.round(a(t))
        }
          , u = {
            test: (0,
            o.i)("rgb", "red"),
            parse: (0,
            o.d)("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1})=>"rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0,
            r.Nw)(s.Fq.transform(n)) + ")"
        }
    },
    3338: function(t, e, i) {
        i.d(e, {
            d: function() {
                return r
            },
            i: function() {
                return s
            }
        });
        var n = i(7292);
        let s = (t,e)=>i=>!!((0,
        n.HD)(i) && n.mj.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e))
          , r = (t,e,i)=>s=>{
            if (!(0,
            n.HD)(s))
                return s;
            let[r,o,a,l] = s.match(n.KP);
            return {
                [t]: parseFloat(r),
                [e]: parseFloat(o),
                [i]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    3646: function(t, e, i) {
        i.d(e, {
            P: function() {
                return c
            },
            V: function() {
                return l
            }
        });
        var n = i(146)
          , s = i(7292);
        let r = "number"
          , o = "color"
          , a = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function l(t) {
            let e = t.toString()
              , i = []
              , s = {
                color: [],
                number: [],
                var: []
            }
              , l = []
              , u = 0
              , h = e.replace(a, t=>(n.$.test(t) ? (s.color.push(u),
            l.push(o),
            i.push(n.$.parse(t))) : t.startsWith("var(") ? (s.var.push(u),
            l.push("var"),
            i.push(t)) : (s.number.push(u),
            l.push(r),
            i.push(parseFloat(t))),
            ++u,
            "${}")).split("${}");
            return {
                values: i,
                split: h,
                indexes: s,
                types: l
            }
        }
        function u(t) {
            return l(t).values
        }
        function h(t) {
            let {split: e, types: i} = l(t)
              , a = e.length;
            return t=>{
                let l = "";
                for (let u = 0; u < a; u++)
                    if (l += e[u],
                    void 0 !== t[u]) {
                        let e = i[u];
                        e === r ? l += (0,
                        s.Nw)(t[u]) : e === o ? l += n.$.transform(t[u]) : l += t[u]
                    }
                return l
            }
        }
        let d = t=>"number" == typeof t ? 0 : t
          , c = {
            test: function(t) {
                var e, i;
                return isNaN(t) && (0,
                s.HD)(t) && ((null === (e = t.match(s.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(s.dA)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: u,
            createTransformer: h,
            getAnimatableNone: function(t) {
                let e = u(t);
                return h(t)(e.map(d))
            }
        }
    },
    783: function(t, e, i) {
        i.d(e, {
            Fq: function() {
                return r
            },
            Rx: function() {
                return s
            },
            bA: function() {
                return o
            }
        });
        var n = i(1506);
        let s = {
            test: t=>"number" == typeof t,
            parse: parseFloat,
            transform: t=>t
        }
          , r = {
            ...s,
            transform: t=>(0,
            n.u)(0, 1, t)
        }
          , o = {
            ...s,
            default: 1
        }
    },
    5480: function(t, e, i) {
        i.d(e, {
            $C: function() {
                return h
            },
            RW: function() {
                return r
            },
            aQ: function() {
                return o
            },
            px: function() {
                return a
            },
            vh: function() {
                return l
            },
            vw: function() {
                return u
            }
        });
        var n = i(7292);
        let s = t=>({
            test: e=>(0,
            n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e=>`${e}${t}`
        })
          , r = s("deg")
          , o = s("%")
          , a = s("px")
          , l = s("vh")
          , u = s("vw")
          , h = {
            ...o,
            parse: t=>o.parse(t) / 100,
            transform: t=>o.transform(100 * t)
        }
    },
    7292: function(t, e, i) {
        i.d(e, {
            HD: function() {
                return a
            },
            KP: function() {
                return s
            },
            Nw: function() {
                return n
            },
            dA: function() {
                return r
            },
            mj: function() {
                return o
            }
        });
        let n = t=>Math.round(1e5 * t) / 1e5
          , s = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , o = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
        function a(t) {
            return "string" == typeof t
        }
    }
}]);