!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/wp-content/themes/acimfunds/assets/",
    n(n.s = 4)
}([function(e, t, n) {
    var r, i, s, o;
    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    o = function(e) {
        "use strict";
        var t, n, r, i = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/, s = /(?:\r|\n|\t\t)/g, o = /(?:\s\s+)/g, l = function() {
            t = document,
            n = window,
            r = 1
        }, u = function(e) {
            return n.getComputedStyle(e)
        }, c = Array.isArray, d = [].slice, p = function(e, n) {
            var r;
            return c(e) ? e : "string" === (r = a(e)) && !n && e ? d.call(t.querySelectorAll(e), 0) : e && "object" === r && "length"in e ? d.call(e, 0) : e ? [e] : []
        }, f = function(e) {
            return "absolute" === e.position || !0 === e.absolute
        }, h = function(e, t) {
            for (var n, r = t.length; --r > -1; )
                if (n = t[r],
                e.substr(0, n.length) === n)
                    return n.length
        }, g = function(e, t) {
            void 0 === e && (e = "");
            var n = ~e.indexOf("++")
              , r = 1;
            return n && (e = e.split("++").join("")),
            function() {
                return "<" + t + " style='position:relative;display:inline-block;'" + (e ? " class='" + e + (n ? r++ : "") + "'>" : ">")
            }
        }, m = function e(t, n, r) {
            var i = t.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (t = t.firstChild; t; t = t.nextSibling)
                    e(t, n, r);
            else
                3 !== i && 4 !== i || (t.nodeValue = t.nodeValue.split(n).join(r))
        }, v = function(e, t) {
            for (var n = t.length; --n > -1; )
                e.push(t[n])
        }, y = function(e, t, n) {
            for (var r; e && e !== t; ) {
                if (r = e._next || e.nextSibling)
                    return r.textContent.charAt(0) === n;
                e = e.parentNode || e._parent
            }
        }, D = function e(t) {
            var n, r, i = p(t.childNodes), s = i.length;
            for (n = 0; n < s; n++)
                (r = i[n])._isSplit ? e(r) : (n && 3 === r.previousSibling.nodeType ? r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue : 3 !== r.nodeType && t.insertBefore(r.firstChild, r),
                t.removeChild(r))
        }, b = function(e, t) {
            return parseFloat(t[e]) || 0
        }, x = function(e, n, r, i, s, o, a) {
            var l, c, d, p, h, g, x, w, C, T, E, _, S = u(e), k = b("paddingLeft", S), F = -999, A = b("borderBottomWidth", S) + b("borderTopWidth", S), P = b("borderLeftWidth", S) + b("borderRightWidth", S), O = b("paddingTop", S) + b("paddingBottom", S), M = b("paddingLeft", S) + b("paddingRight", S), $ = .2 * b("fontSize", S), L = S.textAlign, B = [], N = [], j = [], I = n.wordDelimiter || " ", R = n.tag ? n.tag : n.span ? "span" : "div", z = n.type || n.split || "chars,words,lines", q = s && ~z.indexOf("lines") ? [] : null, H = ~z.indexOf("words"), W = ~z.indexOf("chars"), G = f(n), X = n.linesClass, V = ~(X || "").indexOf("++"), U = [];
            for (V && (X = X.split("++").join("")),
            d = (c = e.getElementsByTagName("*")).length,
            h = [],
            l = 0; l < d; l++)
                h[l] = c[l];
            if (q || G)
                for (l = 0; l < d; l++)
                    ((g = (p = h[l]).parentNode === e) || G || W && !H) && (_ = p.offsetTop,
                    q && g && Math.abs(_ - F) > $ && ("BR" !== p.nodeName || 0 === l) && (x = [],
                    q.push(x),
                    F = _),
                    G && (p._x = p.offsetLeft,
                    p._y = _,
                    p._w = p.offsetWidth,
                    p._h = p.offsetHeight),
                    q && ((p._isSplit && g || !W && g || H && g || !H && p.parentNode.parentNode === e && !p.parentNode._isSplit) && (x.push(p),
                    p._x -= k,
                    y(p, e, I) && (p._wordEnd = !0)),
                    "BR" === p.nodeName && (p.nextSibling && "BR" === p.nextSibling.nodeName || 0 === l) && q.push([])));
            for (l = 0; l < d; l++)
                g = (p = h[l]).parentNode === e,
                "BR" !== p.nodeName ? (G && (C = p.style,
                H || g || (p._x += p.parentNode._x,
                p._y += p.parentNode._y),
                C.left = p._x + "px",
                C.top = p._y + "px",
                C.position = "absolute",
                C.display = "block",
                C.width = p._w + 1 + "px",
                C.height = p._h + "px"),
                !H && W ? p._isSplit ? (p._next = p.nextSibling,
                p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode,
                !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0),
                p.nextSibling && " " === p.nextSibling.textContent && !p.nextSibling.nextSibling && U.push(p.nextSibling),
                p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling,
                p.parentNode.removeChild(p),
                h.splice(l--, 1),
                d--) : g || (_ = !p.nextSibling && y(p.parentNode, e, I),
                p.parentNode._parent && p.parentNode._parent.appendChild(p),
                _ && p.parentNode.appendChild(t.createTextNode(" ")),
                "span" === R && (p.style.display = "inline"),
                B.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? N.push(p) : W && !p._isSplit && ("span" === R && (p.style.display = "inline"),
                B.push(p))) : q || G ? (p.parentNode && p.parentNode.removeChild(p),
                h.splice(l--, 1),
                d--) : H || e.appendChild(p);
            for (l = U.length; --l > -1; )
                U[l].parentNode.removeChild(U[l]);
            if (q) {
                for (G && (T = t.createElement(R),
                e.appendChild(T),
                E = T.offsetWidth + "px",
                _ = T.offsetParent === e ? 0 : e.offsetLeft,
                e.removeChild(T)),
                C = e.style.cssText,
                e.style.cssText = "display:none;"; e.firstChild; )
                    e.removeChild(e.firstChild);
                for (w = " " === I && (!G || !H && !W),
                l = 0; l < q.length; l++) {
                    for (x = q[l],
                    (T = t.createElement(R)).style.cssText = "display:block;text-align:" + L + ";position:" + (G ? "absolute;" : "relative;"),
                    X && (T.className = X + (V ? l + 1 : "")),
                    j.push(T),
                    d = x.length,
                    c = 0; c < d; c++)
                        "BR" !== x[c].nodeName && (p = x[c],
                        T.appendChild(p),
                        w && p._wordEnd && T.appendChild(t.createTextNode(" ")),
                        G && (0 === c && (T.style.top = p._y + "px",
                        T.style.left = k + _ + "px"),
                        p.style.top = "0px",
                        _ && (p.style.left = p._x - _ + "px")));
                    0 === d ? T.innerHTML = "&nbsp;" : H || W || (D(T),
                    m(T, String.fromCharCode(160), " ")),
                    G && (T.style.width = E,
                    T.style.height = p._h + "px"),
                    e.appendChild(T)
                }
                e.style.cssText = C
            }
            G && (a > e.clientHeight && (e.style.height = a - O + "px",
            e.clientHeight < a && (e.style.height = a + A + "px")),
            o > e.clientWidth && (e.style.width = o - M + "px",
            e.clientWidth < o && (e.style.width = o + P + "px"))),
            v(r, B),
            H && v(i, N),
            v(s, j)
        }, w = function(e, n, r, a) {
            var l, u, c, d, p, g, v, y, D = n.tag ? n.tag : n.span ? "span" : "div", b = ~(n.type || n.split || "chars,words,lines").indexOf("chars"), x = f(n), w = n.wordDelimiter || " ", C = " " !== w ? "" : x ? "&#173; " : " ", T = "</" + D + ">", E = 1, _ = n.specialChars ? "function" == typeof n.specialChars ? n.specialChars : h : null, S = t.createElement("div"), k = e.parentNode;
            for (k.insertBefore(S, e),
            S.textContent = e.nodeValue,
            k.removeChild(e),
            v = -1 !== (l = function e(t) {
                var n = t.nodeType
                  , r = "";
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        r += e(t)
                } else if (3 === n || 4 === n)
                    return t.nodeValue;
                return r
            }/*!
   * SplitText: 3.1.1
   * https://greensock.com
   *
   * @license Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
            (e = S)).indexOf("<"),
            !1 !== n.reduceWhiteSpace && (l = l.replace(o, " ").replace(s, "")),
            v && (l = l.split("<").join("{{LT}}")),
            p = l.length,
            u = (" " === l.charAt(0) ? C : "") + r(),
            c = 0; c < p; c++)
                if (g = l.charAt(c),
                _ && (y = _(l.substr(c), n.specialChars)))
                    g = l.substr(c, y || 1),
                    u += b && " " !== g ? a() + g + "</" + D + ">" : g,
                    c += y - 1;
                else if (g === w && l.charAt(c - 1) !== w && c) {
                    for (u += E ? T : "",
                    E = 0; l.charAt(c + 1) === w; )
                        u += C,
                        c++;
                    c === p - 1 ? u += C : ")" !== l.charAt(c + 1) && (u += C + r(),
                    E = 1)
                } else
                    "{" === g && "{{LT}}" === l.substr(c, 6) ? (u += b ? a() + "{{LT}}</" + D + ">" : "{{LT}}",
                    c += 5) : g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319 || l.charCodeAt(c + 1) >= 65024 && l.charCodeAt(c + 1) <= 65039 ? (d = ((l.substr(c, 12).split(i) || [])[1] || "").length || 2,
                    u += b && " " !== g ? a() + l.substr(c, d) + "</" + D + ">" : l.substr(c, d),
                    c += d - 1) : u += b && " " !== g ? a() + g + "</" + D + ">" : g;
            e.outerHTML = u + (E ? T : ""),
            v && m(k, "{{LT}}", "<")
        }, C = function e(t, n, r, i) {
            var s, o, a = p(t.childNodes), l = a.length, c = f(n);
            if (3 !== t.nodeType || l > 1) {
                for (n.absolute = !1,
                s = 0; s < l; s++)
                    (3 !== (o = a[s]).nodeType || /\S+/.test(o.nodeValue)) && (c && 3 !== o.nodeType && "inline" === u(o).display && (o.style.display = "inline-block",
                    o.style.position = "relative"),
                    o._isSplit = !0,
                    e(o, n, r, i));
                return n.absolute = c,
                void (t._isSplit = !0)
            }
            w(t, n, r, i)
        }, T = function() {
            function e(e, t) {
                r || l(),
                this.elements = p(e),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this._originals = [],
                this.vars = t || {},
                this.split(t)
            }
            var t = e.prototype;
            return t.split = function(e) {
                this.isSplit && this.revert(),
                this.vars = e = e || this.vars,
                this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var t, n, r, i = this.elements.length, s = e.tag ? e.tag : e.span ? "span" : "div", o = g(e.wordsClass, s), a = g(e.charsClass, s); --i > -1; )
                    r = this.elements[i],
                    this._originals[i] = r.innerHTML,
                    t = r.clientHeight,
                    n = r.clientWidth,
                    C(r, e, o, a),
                    x(r, e, this.chars, this.words, this.lines, n, t);
                return this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                this.isSplit = !0,
                this
            }
            ,
            t.revert = function() {
                var e = this._originals;
                if (!e)
                    throw "revert() call wasn't scoped properly.";
                return this.elements.forEach(function(t, n) {
                    return t.innerHTML = e[n]
                }),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
            }
            ,
            e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e
        }();
        T.version = "3.1.1",
        e.SplitText = T,
        e.default = T,
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    "object" === a(t) && void 0 !== e ? o(t) : (i = [t],
    void 0 === (s = "function" == typeof (r = o) ? r.apply(t, i) : r) || (e.exports = s))
}
, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function r(e, t, r) {
        return t && n(e.prototype, t),
        r && n(e, r),
        e
    }
    function i() {
        return (i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function s(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function a(e, t) {
        return (a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function l(e, t, n) {
        return (l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r));
            return n && a(i, n.prototype),
            i
        }
        ).apply(null, arguments)
    }
    function u(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (u = function(e) {
            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]"))
                return e;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, n)
            }
            function n() {
                return l(e, arguments, o(this).constructor)
            }
            return n.prototype = Object.create(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            a(n, e)
        }
        )(e)
    }
    function c(e, t) {
        try {
            var n = e()
        } catch (e) {
            return t(e)
        }
        return n && n.then ? n.then(void 0, t) : n
    }
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
    "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var d, p = "2.9.7";
    !function(e) {
        e[e.off = 0] = "off",
        e[e.error = 1] = "error",
        e[e.warning = 2] = "warning",
        e[e.info = 3] = "info",
        e[e.debug = 4] = "debug"
    }(d || (d = {}));
    var f = d.off
      , h = function() {
        function e(e) {
            this.t = e
        }
        e.getLevel = function() {
            return f
        }
        ,
        e.setLevel = function(e) {
            return f = d[e]
        }
        ;
        var t = e.prototype;
        return t.error = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            this.i(console.error, d.error, t)
        }
        ,
        t.warn = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            this.i(console.warn, d.warning, t)
        }
        ,
        t.info = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            this.i(console.info, d.info, t)
        }
        ,
        t.debug = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            this.i(console.log, d.debug, t)
        }
        ,
        t.i = function(t, n, r) {
            n <= e.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(r))
        }
        ,
        e
    }()
      , g = F
      , m = C
      , v = w
      , y = T
      , D = k
      , b = "/"
      , x = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");
    function w(e, t) {
        for (var n, r = [], i = 0, s = 0, o = "", a = t && t.delimiter || b, l = t && t.whitelist || void 0, u = !1; null !== (n = x.exec(e)); ) {
            var c = n[0]
              , d = n[1]
              , p = n.index;
            if (o += e.slice(s, p),
            s = p + c.length,
            d)
                o += d[1],
                u = !0;
            else {
                var f = ""
                  , h = n[2]
                  , g = n[3]
                  , m = n[4]
                  , v = n[5];
                if (!u && o.length) {
                    var y = o.length - 1
                      , D = o[y];
                    (!l || l.indexOf(D) > -1) && (f = D,
                    o = o.slice(0, y))
                }
                o && (r.push(o),
                o = "",
                u = !1);
                var w = g || m
                  , C = f || a;
                r.push({
                    name: h || i++,
                    prefix: f,
                    delimiter: C,
                    optional: "?" === v || "*" === v,
                    repeat: "+" === v || "*" === v,
                    pattern: w ? _(w) : "[^" + E(C === a ? C : C + a) + "]+?"
                })
            }
        }
        return (o || s < e.length) && r.push(o + e.substr(s)),
        r
    }
    function C(e, t) {
        return function(n, r) {
            var i = e.exec(n);
            if (!i)
                return !1;
            for (var s = i[0], o = i.index, a = {}, l = r && r.decode || decodeURIComponent, u = 1; u < i.length; u++)
                if (void 0 !== i[u]) {
                    var c = t[u - 1];
                    a[c.name] = c.repeat ? i[u].split(c.delimiter).map(function(e) {
                        return l(e, c)
                    }) : l(i[u], c)
                }
            return {
                path: s,
                index: o,
                params: a
            }
        }
    }
    function T(e, t) {
        for (var n = new Array(e.length), r = 0; r < e.length; r++)
            "object" == typeof e[r] && (n[r] = new RegExp("^(?:" + e[r].pattern + ")$",S(t)));
        return function(t, r) {
            for (var i = "", s = r && r.encode || encodeURIComponent, o = !r || !1 !== r.validate, a = 0; a < e.length; a++) {
                var l = e[a];
                if ("string" != typeof l) {
                    var u, c = t ? t[l.name] : void 0;
                    if (Array.isArray(c)) {
                        if (!l.repeat)
                            throw new TypeError('Expected "' + l.name + '" to not repeat, but got array');
                        if (0 === c.length) {
                            if (l.optional)
                                continue;
                            throw new TypeError('Expected "' + l.name + '" to not be empty')
                        }
                        for (var d = 0; d < c.length; d++) {
                            if (u = s(c[d], l),
                            o && !n[a].test(u))
                                throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '"');
                            i += (0 === d ? l.prefix : l.delimiter) + u
                        }
                    } else if ("string" != typeof c && "number" != typeof c && "boolean" != typeof c) {
                        if (!l.optional)
                            throw new TypeError('Expected "' + l.name + '" to be ' + (l.repeat ? "an array" : "a string"))
                    } else {
                        if (u = s(String(c), l),
                        o && !n[a].test(u))
                            throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but got "' + u + '"');
                        i += l.prefix + u
                    }
                } else
                    i += l
            }
            return i
        }
    }
    function E(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }
    function _(e) {
        return e.replace(/([=!:$/()])/g, "\\$1")
    }
    function S(e) {
        return e && e.sensitive ? "" : "i"
    }
    function k(e, t, n) {
        for (var r = (n = n || {}).strict, i = !1 !== n.start, s = !1 !== n.end, o = n.delimiter || b, a = [].concat(n.endsWith || []).map(E).concat("$").join("|"), l = i ? "^" : "", u = 0; u < e.length; u++) {
            var c = e[u];
            if ("string" == typeof c)
                l += E(c);
            else {
                var d = c.repeat ? "(?:" + c.pattern + ")(?:" + E(c.delimiter) + "(?:" + c.pattern + "))*" : c.pattern;
                t && t.push(c),
                l += c.optional ? c.prefix ? "(?:" + E(c.prefix) + "(" + d + "))?" : "(" + d + ")?" : E(c.prefix) + "(" + d + ")"
            }
        }
        if (s)
            r || (l += "(?:" + E(o) + ")?"),
            l += "$" === a ? "$" : "(?=" + a + ")";
        else {
            var p = e[e.length - 1]
              , f = "string" == typeof p ? p[p.length - 1] === o : void 0 === p;
            r || (l += "(?:" + E(o) + "(?=" + a + "))?"),
            f || (l += "(?=" + E(o) + "|" + a + ")")
        }
        return new RegExp(l,S(n))
    }
    function F(e, t, n) {
        return e instanceof RegExp ? function(e, t) {
            if (!t)
                return e;
            var n = e.source.match(/\((?!\?)/g);
            if (n)
                for (var r = 0; r < n.length; r++)
                    t.push({
                        name: r,
                        prefix: null,
                        delimiter: null,
                        optional: !1,
                        repeat: !1,
                        pattern: null
                    });
            return e
        }(e, t) : Array.isArray(e) ? function(e, t, n) {
            for (var r = [], i = 0; i < e.length; i++)
                r.push(F(e[i], t, n).source);
            return new RegExp("(?:" + r.join("|") + ")",S(n))
        }(e, t, n) : function(e, t, n) {
            return k(w(e, n), t, n)
        }(e, t, n)
    }
    g.match = function(e, t) {
        var n = [];
        return C(F(e, n, t), n)
    }
    ,
    g.regexpToFunction = m,
    g.parse = v,
    g.compile = function(e, t) {
        return T(w(e, t), t)
    }
    ,
    g.tokensToFunction = y,
    g.tokensToRegExp = D;
    var A = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    }
      , P = new (function() {
        function e() {
            this.o = A,
            this.u = new DOMParser
        }
        var t = e.prototype;
        return t.toString = function(e) {
            return e.outerHTML
        }
        ,
        t.toDocument = function(e) {
            return this.u.parseFromString(e, "text/html")
        }
        ,
        t.toElement = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e,
            t
        }
        ,
        t.getHtml = function(e) {
            return void 0 === e && (e = document),
            this.toString(e.documentElement)
        }
        ,
        t.getWrapper = function(e) {
            return void 0 === e && (e = document),
            e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        }
        ,
        t.getContainer = function(e) {
            return void 0 === e && (e = document),
            e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        }
        ,
        t.removeContainer = function(e) {
            document.body.contains(e) && e.parentNode.removeChild(e)
        }
        ,
        t.addContainer = function(e, t) {
            var n = this.getContainer();
            n ? this.s(e, n) : t.appendChild(e)
        }
        ,
        t.getNamespace = function(e) {
            void 0 === e && (e = document);
            var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
        }
        ,
        t.getHref = function(e) {
            if (e.tagName && "a" === e.tagName.toLowerCase()) {
                if ("string" == typeof e.href)
                    return e.href;
                var t = e.getAttribute("href") || e.getAttribute("xlink:href");
                if (t)
                    return this.resolveUrl(t.baseVal || t)
            }
            return null
        }
        ,
        t.resolveUrl = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var r = t.length;
            if (0 === r)
                throw new Error("resolveUrl requires at least one argument; got none.");
            var i = document.createElement("base");
            if (i.href = arguments[0],
            1 === r)
                return i.href;
            var s = document.getElementsByTagName("head")[0];
            s.insertBefore(i, s.firstChild);
            for (var o, a = document.createElement("a"), l = 1; l < r; l++)
                a.href = arguments[l],
                i.href = o = a.href;
            return s.removeChild(i),
            o
        }
        ,
        t.s = function(e, t) {
            t.parentNode.insertBefore(e, t.nextSibling)
        }
        ,
        e
    }())
      , O = new (function() {
        function e() {
            this.h = [],
            this.v = -1
        }
        var t = e.prototype;
        return t.init = function(e, t) {
            this.l = "barba";
            var n = {
                ns: t,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: e
            };
            this.h.push(n),
            this.v = 0;
            var r = {
                from: this.l,
                index: 0,
                states: [].concat(this.h)
            };
            window.history && window.history.replaceState(r, "", e)
        }
        ,
        t.change = function(e, t, n) {
            if (n && n.state) {
                var r = n.state
                  , i = r.index;
                t = this.m(this.v - i),
                this.replace(r.states),
                this.v = i
            } else
                this.add(e, t);
            return t
        }
        ,
        t.add = function(e, t) {
            var n = this.size
              , r = this.p(t)
              , i = {
                ns: "tmp",
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: e
            };
            this.h.push(i),
            this.v = n;
            var s = {
                from: this.l,
                index: n,
                states: [].concat(this.h)
            };
            switch (r) {
            case "push":
                window.history && window.history.pushState(s, "", e);
                break;
            case "replace":
                window.history && window.history.replaceState(s, "", e)
            }
        }
        ,
        t.update = function(e, t) {
            var n = t || this.v
              , r = i({}, this.get(n), {}, e);
            this.set(n, r)
        }
        ,
        t.remove = function(e) {
            e ? this.h.splice(e, 1) : this.h.pop(),
            this.v--
        }
        ,
        t.clear = function() {
            this.h = [],
            this.v = -1
        }
        ,
        t.replace = function(e) {
            this.h = e
        }
        ,
        t.get = function(e) {
            return this.h[e]
        }
        ,
        t.set = function(e, t) {
            return this.h[e] = t
        }
        ,
        t.p = function(e) {
            var t = "push"
              , n = e
              , r = A.prefix + "-" + A.history;
            return n.hasAttribute && n.hasAttribute(r) && (t = n.getAttribute(r)),
            t
        }
        ,
        t.m = function(e) {
            return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : 0 === e ? "popstate" : e > 0 ? "back" : "forward"
        }
        ,
        r(e, [{
            key: "current",
            get: function() {
                return this.h[this.v]
            }
        }, {
            key: "state",
            get: function() {
                return this.h[this.h.length - 1]
            }
        }, {
            key: "previous",
            get: function() {
                return this.v < 1 ? null : this.h[this.v - 1]
            }
        }, {
            key: "size",
            get: function() {
                return this.h.length
            }
        }]),
        e
    }())
      , M = function(e, t) {
        try {
            var n = function() {
                if (!t.next.html)
                    return Promise.resolve(e).then(function(e) {
                        var n = t.next;
                        if (e) {
                            var r = P.toElement(e);
                            n.namespace = P.getNamespace(r),
                            n.container = P.getContainer(r),
                            n.html = e,
                            O.update({
                                ns: n.namespace
                            });
                            var i = P.toDocument(e);
                            document.title = i.title
                        }
                    })
            }();
            return Promise.resolve(n && n.then ? n.then(function() {}) : void 0)
        } catch (e) {
            return Promise.reject(e)
        }
    }
      , $ = g
      , L = {
        __proto__: null,
        update: M,
        nextTick: function() {
            return new Promise(function(e) {
                window.requestAnimationFrame(e)
            }
            )
        },
        pathToRegexp: $
    }
      , B = function() {
        return window.location.origin
    }
      , N = function(e) {
        return void 0 === e && (e = window.location.href),
        j(e).port
    }
      , j = function(e) {
        var t, n = e.match(/:\d+/);
        if (null === n)
            /^http/.test(e) && (t = 80),
            /^https/.test(e) && (t = 443);
        else {
            var r = n[0].substring(1);
            t = parseInt(r, 10)
        }
        var i, s = e.replace(B(), ""), o = {}, a = s.indexOf("#");
        a >= 0 && (i = s.slice(a + 1),
        s = s.slice(0, a));
        var l = s.indexOf("?");
        return l >= 0 && (o = I(s.slice(l + 1)),
        s = s.slice(0, l)),
        {
            hash: i,
            path: s,
            port: t,
            query: o
        }
    }
      , I = function(e) {
        return e.split("&").reduce(function(e, t) {
            var n = t.split("=");
            return e[n[0]] = n[1],
            e
        }, {})
    }
      , R = function(e) {
        return void 0 === e && (e = window.location.href),
        e.replace(/(\/#.*|\/|#.*)$/, "")
    }
      , z = {
        __proto__: null,
        getHref: function() {
            return window.location.href
        },
        getOrigin: B,
        getPort: N,
        getPath: function(e) {
            return void 0 === e && (e = window.location.href),
            j(e).path
        },
        parse: j,
        parseQuery: I,
        clean: R
    };
    function q(e, t, n) {
        return void 0 === t && (t = 2e3),
        new Promise(function(r, i) {
            var s = new XMLHttpRequest;
            s.onreadystatechange = function() {
                if (s.readyState === XMLHttpRequest.DONE)
                    if (200 === s.status)
                        r(s.responseText);
                    else if (s.status) {
                        var t = {
                            status: s.status,
                            statusText: s.statusText
                        };
                        n(e, t),
                        i(t)
                    }
            }
            ,
            s.ontimeout = function() {
                var r = new Error("Timeout error [" + t + "]");
                n(e, r),
                i(r)
            }
            ,
            s.onerror = function() {
                var t = new Error("Fetch error");
                n(e, t),
                i(t)
            }
            ,
            s.open("GET", e),
            s.timeout = t,
            s.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
            s.setRequestHeader("x-barba", "yes"),
            s.send()
        }
        )
    }
    var H = function(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
    };
    function W(e, t) {
        return void 0 === t && (t = {}),
        function() {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
            var s = !1
              , o = new Promise(function(n, i) {
                t.async = function() {
                    return s = !0,
                    function(e, t) {
                        e ? i(e) : n(t)
                    }
                }
                ;
                var o = e.apply(t, r);
                s || (H(o) ? o.then(n, i) : n(o))
            }
            );
            return o
        }
    }
    var G = new (function(e) {
        function t() {
            var t;
            return (t = e.call(this) || this).logger = new h("@barba/core"),
            t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"],
            t.registered = new Map,
            t.init(),
            t
        }
        s(t, e);
        var n = t.prototype;
        return n.init = function() {
            var e = this;
            this.registered.clear(),
            this.all.forEach(function(t) {
                e[t] || (e[t] = function(n, r) {
                    e.registered.has(t) || e.registered.set(t, new Set),
                    e.registered.get(t).add({
                        ctx: r || {},
                        fn: n
                    })
                }
                )
            })
        }
        ,
        n.do = function(e) {
            for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                r[i - 1] = arguments[i];
            if (this.registered.has(e)) {
                var s = Promise.resolve();
                return this.registered.get(e).forEach(function(e) {
                    s = s.then(function() {
                        return W(e.fn, e.ctx).apply(void 0, r)
                    })
                }),
                s.catch(function(n) {
                    t.logger.debug("Hook error [" + e + "]"),
                    t.logger.error(n)
                })
            }
            return Promise.resolve()
        }
        ,
        n.clear = function() {
            var e = this;
            this.all.forEach(function(t) {
                delete e[t]
            }),
            this.init()
        }
        ,
        n.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var e = [];
            this.registered.forEach(function(t, n) {
                return e.push(n)
            }),
            this.logger.info("Registered hooks: " + e.join(","))
        }
        ,
        t
    }(function() {}))
      , X = function() {
        function e(e) {
            if (this.P = [],
            "boolean" == typeof e)
                this.g = e;
            else {
                var t = Array.isArray(e) ? e : [e];
                this.P = t.map(function(e) {
                    return $(e)
                })
            }
        }
        return e.prototype.checkHref = function(e) {
            if ("boolean" == typeof this.g)
                return this.g;
            var t = j(e).path;
            return this.P.some(function(e) {
                return null !== e.exec(t)
            })
        }
        ,
        e
    }()
      , V = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t) || this).k = new Map,
            n
        }
        s(t, e);
        var n = t.prototype;
        return n.set = function(e, t, n) {
            return this.k.set(e, {
                action: n,
                request: t
            }),
            {
                action: n,
                request: t
            }
        }
        ,
        n.get = function(e) {
            return this.k.get(e)
        }
        ,
        n.getRequest = function(e) {
            return this.k.get(e).request
        }
        ,
        n.getAction = function(e) {
            return this.k.get(e).action
        }
        ,
        n.has = function(e) {
            return !this.checkHref(e) && this.k.has(e)
        }
        ,
        n.delete = function(e) {
            return this.k.delete(e)
        }
        ,
        n.update = function(e, t) {
            var n = i({}, this.k.get(e), {}, t);
            return this.k.set(e, n),
            n
        }
        ,
        t
    }(X)
      , U = function() {
        return !window.history.pushState
    }
      , Y = function(e) {
        return !e.el || !e.href
    }
      , Q = function(e) {
        var t = e.event;
        return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
    }
      , K = function(e) {
        var t = e.el;
        return t.hasAttribute("target") && "_blank" === t.target
    }
      , J = function(e) {
        var t = e.el;
        return void 0 !== t.protocol && window.location.protocol !== t.protocol || void 0 !== t.hostname && window.location.hostname !== t.hostname
    }
      , Z = function(e) {
        var t = e.el;
        return void 0 !== t.port && N() !== N(t.href)
    }
      , ee = function(e) {
        var t = e.el;
        return t.getAttribute && "string" == typeof t.getAttribute("download")
    }
      , te = function(e) {
        return e.el.hasAttribute(A.prefix + "-" + A.prevent)
    }
      , ne = function(e) {
        return Boolean(e.el.closest("[" + A.prefix + "-" + A.prevent + '="all"]'))
    }
      , re = function(e) {
        var t = e.href;
        return R(t) === R() && N(t) === N()
    }
      , ie = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t) || this).suite = [],
            n.tests = new Map,
            n.init(),
            n
        }
        s(t, e);
        var n = t.prototype;
        return n.init = function() {
            this.add("pushState", U),
            this.add("exists", Y),
            this.add("newTab", Q),
            this.add("blank", K),
            this.add("corsDomain", J),
            this.add("corsPort", Z),
            this.add("download", ee),
            this.add("preventSelf", te),
            this.add("preventAll", ne),
            this.add("sameUrl", re, !1)
        }
        ,
        n.add = function(e, t, n) {
            void 0 === n && (n = !0),
            this.tests.set(e, t),
            n && this.suite.push(e)
        }
        ,
        n.run = function(e, t, n, r) {
            return this.tests.get(e)({
                el: t,
                event: n,
                href: r
            })
        }
        ,
        n.checkLink = function(e, t, n) {
            var r = this;
            return this.suite.some(function(i) {
                return r.run(i, e, t, n)
            })
        }
        ,
        t
    }(X)
      , se = function(e) {
        function t(n, r) {
            var i;
            void 0 === r && (r = "Barba error");
            for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++)
                o[a - 2] = arguments[a];
            return (i = e.call.apply(e, [this].concat(o)) || this).error = n,
            i.label = r,
            Error.captureStackTrace && Error.captureStackTrace(function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(i), t),
            i.name = "BarbaError",
            i
        }
        return s(t, e),
        t
    }(u(Error))
      , oe = function() {
        function e(e) {
            void 0 === e && (e = []),
            this.logger = new h("@barba/core"),
            this.all = [],
            this.page = [],
            this.once = [],
            this.A = [{
                name: "namespace",
                type: "strings"
            }, {
                name: "custom",
                type: "function"
            }],
            e && (this.all = this.all.concat(e)),
            this.update()
        }
        var t = e.prototype;
        return t.add = function(e, t) {
            switch (e) {
            case "rule":
                this.A.splice(t.position || 0, 0, t.value);
                break;
            case "transition":
            default:
                this.all.push(t)
            }
            this.update()
        }
        ,
        t.resolve = function(e, t) {
            var n = this;
            void 0 === t && (t = {});
            var r = t.once ? this.once : this.page;
            r = r.filter(t.self ? function(e) {
                return e.name && "self" === e.name
            }
            : function(e) {
                return !e.name || "self" !== e.name
            }
            );
            var i = new Map
              , s = r.find(function(r) {
                var s = !0
                  , o = {};
                return !(!t.self || "self" !== r.name) || (n.A.reverse().forEach(function(t) {
                    s && (s = n.R(r, t, e, o),
                    r.from && r.to && (s = n.R(r, t, e, o, "from") && n.R(r, t, e, o, "to")),
                    r.from && !r.to && (s = n.R(r, t, e, o, "from")),
                    !r.from && r.to && (s = n.R(r, t, e, o, "to")))
                }),
                i.set(r, o),
                s)
            })
              , o = i.get(s)
              , a = [];
            if (a.push(t.once ? "once" : "page"),
            t.self && a.push("self"),
            o) {
                var l, u = [s];
                Object.keys(o).length > 0 && u.push(o),
                (l = this.logger).info.apply(l, ["Transition found [" + a.join(",") + "]"].concat(u))
            } else
                this.logger.info("No transition found [" + a.join(",") + "]");
            return s
        }
        ,
        t.update = function() {
            var e = this;
            this.all = this.all.map(function(t) {
                return e.T(t)
            }).sort(function(e, t) {
                return e.priority - t.priority
            }).reverse().map(function(e) {
                return delete e.priority,
                e
            }),
            this.page = this.all.filter(function(e) {
                return void 0 !== e.leave || void 0 !== e.enter
            }),
            this.once = this.all.filter(function(e) {
                return void 0 !== e.once
            })
        }
        ,
        t.R = function(e, t, n, r, i) {
            var s = !0
              , o = !1
              , a = e
              , l = t.name
              , u = l
              , c = l
              , d = l
              , p = i ? a[i] : a
              , f = "to" === i ? n.next : n.current;
            if (i ? p && p[l] : p[l]) {
                switch (t.type) {
                case "strings":
                default:
                    var h = Array.isArray(p[u]) ? p[u] : [p[u]];
                    f[u] && -1 !== h.indexOf(f[u]) && (o = !0),
                    -1 === h.indexOf(f[u]) && (s = !1);
                    break;
                case "object":
                    var g = Array.isArray(p[c]) ? p[c] : [p[c]];
                    f[c] ? (f[c].name && -1 !== g.indexOf(f[c].name) && (o = !0),
                    -1 === g.indexOf(f[c].name) && (s = !1)) : s = !1;
                    break;
                case "function":
                    p[d](n) ? o = !0 : s = !1
                }
                o && (i ? (r[i] = r[i] || {},
                r[i][l] = a[i][l]) : r[l] = a[l])
            }
            return s
        }
        ,
        t.O = function(e, t, n) {
            var r = 0;
            return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (r += Math.pow(10, n),
            e.from && e.from[t] && (r += 1),
            e.to && e.to[t] && (r += 2)),
            r
        }
        ,
        t.T = function(e) {
            var t = this;
            e.priority = 0;
            var n = 0;
            return this.A.forEach(function(r, i) {
                n += t.O(e, r.name, i + 1)
            }),
            e.priority = n,
            e
        }
        ,
        e
    }()
      , ae = function() {
        function e(e) {
            void 0 === e && (e = []),
            this.logger = new h("@barba/core"),
            this.S = !1,
            this.store = new oe(e)
        }
        var t = e.prototype;
        return t.get = function(e, t) {
            return this.store.resolve(e, t)
        }
        ,
        t.doOnce = function(e) {
            var t = e.data
              , n = e.transition;
            try {
                var r = function() {
                    i.S = !1
                }
                  , i = this
                  , s = n || {};
                i.S = !0;
                var o = c(function() {
                    return Promise.resolve(i.j("beforeOnce", t, s)).then(function() {
                        return Promise.resolve(i.once(t, s)).then(function() {
                            return Promise.resolve(i.j("afterOnce", t, s)).then(function() {})
                        })
                    })
                }, function(e) {
                    i.S = !1,
                    i.logger.debug("Transition error [before/after/once]"),
                    i.logger.error(e)
                });
                return Promise.resolve(o && o.then ? o.then(r) : r())
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.doPage = function(e) {
            var t = e.data
              , n = e.transition
              , r = e.page
              , i = e.wrapper;
            try {
                var s = function(e) {
                    if (o)
                        return e;
                    a.S = !1
                }
                  , o = !1
                  , a = this
                  , l = n || {}
                  , u = !0 === l.sync || !1;
                a.S = !0;
                var d = c(function() {
                    function e() {
                        return Promise.resolve(a.j("before", t, l)).then(function() {
                            var e = !1;
                            function n(n) {
                                return e ? n : Promise.resolve(a.remove(t)).then(function() {
                                    return Promise.resolve(a.j("after", t, l)).then(function() {})
                                })
                            }
                            var s = function() {
                                if (u)
                                    return c(function() {
                                        return Promise.resolve(a.add(t, i)).then(function() {
                                            return Promise.resolve(a.j("beforeLeave", t, l)).then(function() {
                                                return Promise.resolve(a.j("beforeEnter", t, l)).then(function() {
                                                    return Promise.resolve(Promise.all([a.leave(t, l), a.enter(t, l)])).then(function() {
                                                        return Promise.resolve(a.j("afterLeave", t, l)).then(function() {
                                                            return Promise.resolve(a.j("afterEnter", t, l)).then(function() {})
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }, function(e) {
                                        if (a.M(e))
                                            throw new se(e,"Transition error [sync]")
                                    });
                                var n = function(n) {
                                    return e ? n : c(function() {
                                        var e = function() {
                                            if (!1 !== s)
                                                return Promise.resolve(a.add(t, i)).then(function() {
                                                    return Promise.resolve(a.j("beforeEnter", t, l)).then(function() {
                                                        return Promise.resolve(a.enter(t, l, s)).then(function() {
                                                            return Promise.resolve(a.j("afterEnter", t, l)).then(function() {})
                                                        })
                                                    })
                                                })
                                        }();
                                        if (e && e.then)
                                            return e.then(function() {})
                                    }, function(e) {
                                        if (a.M(e))
                                            throw new se(e,"Transition error [before/after/enter]")
                                    })
                                }
                                  , s = !1
                                  , o = c(function() {
                                    return Promise.resolve(a.j("beforeLeave", t, l)).then(function() {
                                        return Promise.resolve(Promise.all([a.leave(t, l), M(r, t)]).then(function(e) {
                                            return e[0]
                                        })).then(function(e) {
                                            return s = e,
                                            Promise.resolve(a.j("afterLeave", t, l)).then(function() {})
                                        })
                                    })
                                }, function(e) {
                                    if (a.M(e))
                                        throw new se(e,"Transition error [before/after/leave]")
                                });
                                return o && o.then ? o.then(n) : n(o)
                            }();
                            return s && s.then ? s.then(n) : n(s)
                        })
                    }
                    var n = function() {
                        if (u)
                            return Promise.resolve(M(r, t)).then(function() {})
                    }();
                    return n && n.then ? n.then(e) : e()
                }, function(e) {
                    if (a.S = !1,
                    e.name && "BarbaError" === e.name)
                        throw a.logger.debug(e.label),
                        a.logger.error(e.error),
                        e;
                    throw a.logger.debug("Transition error [page]"),
                    a.logger.error(e),
                    e
                });
                return Promise.resolve(d && d.then ? d.then(s) : s(d))
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.once = function(e, t) {
            try {
                return Promise.resolve(G.do("once", e, t)).then(function() {
                    return t.once ? W(t.once, t)(e) : Promise.resolve()
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.leave = function(e, t) {
            try {
                return Promise.resolve(G.do("leave", e, t)).then(function() {
                    return t.leave ? W(t.leave, t)(e) : Promise.resolve()
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.enter = function(e, t, n) {
            try {
                return Promise.resolve(G.do("enter", e, t)).then(function() {
                    return t.enter ? W(t.enter, t)(e, n) : Promise.resolve()
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.add = function(e, t) {
            try {
                return P.addContainer(e.next.container, t),
                G.do("nextAdded", e),
                Promise.resolve()
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.remove = function(e) {
            try {
                return P.removeContainer(e.current.container),
                G.do("currentRemoved", e),
                Promise.resolve()
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.M = function(e) {
            return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status
        }
        ,
        t.j = function(e, t, n) {
            try {
                return Promise.resolve(G.do(e, t, n)).then(function() {
                    return n[e] ? W(n[e], n)(t) : Promise.resolve()
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        r(e, [{
            key: "isRunning",
            get: function() {
                return this.S
            },
            set: function(e) {
                this.S = e
            }
        }, {
            key: "hasOnce",
            get: function() {
                return this.store.once.length > 0
            }
        }, {
            key: "hasSelf",
            get: function() {
                return this.store.all.some(function(e) {
                    return "self" === e.name
                })
            }
        }, {
            key: "shouldWait",
            get: function() {
                return this.store.all.some(function(e) {
                    return e.to && !e.to.route || e.sync
                })
            }
        }]),
        e
    }()
      , le = function() {
        function e(e) {
            var t = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"],
            this.byNamespace = new Map,
            0 !== e.length && (e.forEach(function(e) {
                t.byNamespace.set(e.namespace, e)
            }),
            this.names.forEach(function(e) {
                G[e](t.L(e))
            }))
        }
        return e.prototype.L = function(e) {
            var t = this;
            return function(n) {
                var r = e.match(/enter/i) ? n.next : n.current
                  , i = t.byNamespace.get(r.namespace);
                return i && i[e] ? W(i[e], i)(n) : Promise.resolve()
            }
        }
        ,
        e
    }();
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        do {
            if (t.matches(e))
                return t;
            t = t.parentElement || t.parentNode
        } while (null !== t && 1 === t.nodeType);
        return null
    }
    );
    var ue = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {}
        }
    }
      , ce = new (function() {
        function e() {
            this.version = p,
            this.schemaPage = ue,
            this.Logger = h,
            this.logger = new h("@barba/core"),
            this.plugins = [],
            this.hooks = G,
            this.dom = P,
            this.helpers = L,
            this.history = O,
            this.request = q,
            this.url = z
        }
        var t = e.prototype;
        return t.use = function(e, t) {
            var n = this.plugins;
            n.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : "function" == typeof e.install ? (e.install(this, t),
            n.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.')
        }
        ,
        t.init = function(e) {
            var t = void 0 === e ? {} : e
              , n = t.transitions
              , r = void 0 === n ? [] : n
              , s = t.views
              , o = void 0 === s ? [] : s
              , a = t.schema
              , l = void 0 === a ? A : a
              , u = t.requestError
              , c = t.timeout
              , d = void 0 === c ? 2e3 : c
              , p = t.cacheIgnore
              , f = void 0 !== p && p
              , g = t.prefetchIgnore
              , m = void 0 !== g && g
              , v = t.preventRunning
              , y = void 0 !== v && v
              , D = t.prevent
              , b = void 0 === D ? null : D
              , x = t.debug
              , w = t.logLevel;
            if (h.setLevel(!0 === (void 0 !== x && x) ? "debug" : void 0 === w ? "off" : w),
            this.logger.info(this.version),
            Object.keys(l).forEach(function(e) {
                A[e] && (A[e] = l[e])
            }),
            this.$ = u,
            this.timeout = d,
            this.cacheIgnore = f,
            this.prefetchIgnore = m,
            this.preventRunning = y,
            this._ = this.dom.getWrapper(),
            !this._)
                throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"),
            this.q();
            var C = this.data.current;
            if (!C.container)
                throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new V(f),
            this.prevent = new ie(m),
            this.transitions = new ae(r),
            this.views = new le(o),
            null !== b) {
                if ("function" != typeof b)
                    throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", b)
            }
            this.history.init(C.url.href, C.namespace),
            this.B = this.B.bind(this),
            this.U = this.U.bind(this),
            this.D = this.D.bind(this),
            this.F(),
            this.plugins.forEach(function(e) {
                return e.init()
            });
            var T = this.data;
            T.trigger = "barba",
            T.next = T.current,
            T.current = i({}, this.schemaPage),
            this.hooks.do("ready", T),
            this.once(T),
            this.q()
        }
        ,
        t.destroy = function() {
            this.q(),
            this.H(),
            this.history.clear(),
            this.hooks.clear(),
            this.plugins = []
        }
        ,
        t.force = function(e) {
            window.location.assign(e)
        }
        ,
        t.go = function(e, t, n) {
            var r;
            if (void 0 === t && (t = "barba"),
            this.transitions.isRunning)
                this.force(e);
            else if (!(r = "popstate" === t ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf)
                return t = this.history.change(e, t, n),
                n && (n.stopPropagation(),
                n.preventDefault()),
                this.page(e, t, r)
        }
        ,
        t.once = function(e) {
            try {
                var t = this;
                return Promise.resolve(t.hooks.do("beforeEnter", e)).then(function() {
                    function n() {
                        return Promise.resolve(t.hooks.do("afterEnter", e)).then(function() {})
                    }
                    var r = function() {
                        if (t.transitions.hasOnce) {
                            var n = t.transitions.get(e, {
                                once: !0
                            });
                            return Promise.resolve(t.transitions.doOnce({
                                transition: n,
                                data: e
                            })).then(function() {})
                        }
                    }();
                    return r && r.then ? r.then(n) : n()
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.page = function(e, t, n) {
            try {
                var r = function() {
                    var e = s.data;
                    return Promise.resolve(s.hooks.do("page", e)).then(function() {
                        var t = c(function() {
                            var t = s.transitions.get(e, {
                                once: !1,
                                self: n
                            });
                            return Promise.resolve(s.transitions.doPage({
                                data: e,
                                page: o,
                                transition: t,
                                wrapper: s._
                            })).then(function() {
                                s.q()
                            })
                        }, function() {
                            0 === h.getLevel() && s.force(e.current.url.href)
                        });
                        if (t && t.then)
                            return t.then(function() {})
                    })
                }
                  , s = this;
                s.data.next.url = i({
                    href: e
                }, s.url.parse(e)),
                s.data.trigger = t;
                var o = s.cache.has(e) ? s.cache.update(e, {
                    action: "click"
                }).request : s.cache.set(e, s.request(e, s.timeout, s.onRequestError.bind(s, t)), "click").request
                  , a = function() {
                    if (s.transitions.shouldWait)
                        return Promise.resolve(M(o, s.data)).then(function() {})
                }();
                return Promise.resolve(a && a.then ? a.then(r) : r())
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ,
        t.onRequestError = function(e) {
            this.transitions.isRunning = !1;
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            var i = n[0]
              , s = n[1]
              , o = this.cache.getAction(i);
            return this.cache.delete(i),
            !(this.$ && !1 === this.$(e, o, i, s) || ("click" === o && this.force(i),
            1))
        }
        ,
        t.prefetch = function(e) {
            var t = this;
            this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(e) {
                t.logger.error(e)
            }), "prefetch")
        }
        ,
        t.F = function() {
            !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B),
            document.addEventListener("touchstart", this.B)),
            document.addEventListener("click", this.U),
            window.addEventListener("popstate", this.D)
        }
        ,
        t.H = function() {
            !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B),
            document.removeEventListener("touchstart", this.B)),
            document.removeEventListener("click", this.U),
            window.removeEventListener("popstate", this.D)
        }
        ,
        t.B = function(e) {
            var t = this
              , n = this.I(e);
            if (n) {
                var r = this.dom.getHref(n);
                this.prevent.checkHref(r) || this.cache.has(r) || this.cache.set(r, this.request(r, this.timeout, this.onRequestError.bind(this, n)).catch(function(e) {
                    t.logger.error(e)
                }), "enter")
            }
        }
        ,
        t.U = function(e) {
            var t = this.I(e);
            if (t)
                return this.transitions.isRunning && this.preventRunning ? (e.preventDefault(),
                void e.stopPropagation()) : void this.go(this.dom.getHref(t), t, e)
        }
        ,
        t.D = function(e) {
            this.go(this.url.getHref(), "popstate", e)
        }
        ,
        t.I = function(e) {
            for (var t = e.target; t && !this.dom.getHref(t); )
                t = t.parentNode;
            if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t)))
                return t
        }
        ,
        t.q = function() {
            var e = this.url.getHref()
              , t = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: i({
                    href: e
                }, this.url.parse(e))
            };
            this.C = {
                current: t,
                next: i({}, this.schemaPage),
                trigger: void 0
            },
            this.hooks.do("reset", this.data)
        }
        ,
        r(e, [{
            key: "data",
            get: function() {
                return this.C
            }
        }, {
            key: "wrapper",
            get: function() {
                return this._
            }
        }]),
        e
    }());
    e.exports = ce
}
, , function(e, t, n) {
    var r;
    /*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
    /*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, i) {
        "use strict";
        var s = []
          , o = Object.getPrototypeOf
          , a = s.slice
          , l = s.flat ? function(e) {
            return s.flat.call(e)
        }
        : function(e) {
            return s.concat.apply([], e)
        }
          , u = s.push
          , c = s.indexOf
          , d = {}
          , p = d.toString
          , f = d.hasOwnProperty
          , h = f.toString
          , g = h.call(Object)
          , m = {}
          , v = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }
          , y = function(e) {
            return null != e && e === e.window
        }
          , D = n.document
          , b = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function x(e, t, n) {
            var r, i, s = (n = n || D).createElement("script");
            if (s.text = e,
            t)
                for (r in b)
                    (i = t[r] || t.getAttribute && t.getAttribute(r)) && s.setAttribute(r, i);
            n.head.appendChild(s).parentNode.removeChild(s)
        }
        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e,t)
        };
        function T(e) {
            var t = !!e && "length"in e && e.length
              , n = w(e);
            return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.6.0",
            constructor: C,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(e) {
                return this.pushStack(C.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: s.sort,
            splice: s.splice
        },
        C.extend = C.fn.extend = function() {
            var e, t, n, r, i, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof o && (u = o,
            o = arguments[a] || {},
            a++),
            "object" == typeof o || v(o) || (o = {}),
            a === l && (o = this,
            a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        r = e[t],
                        "__proto__" !== t && o !== r && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[t],
                        s = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {},
                        i = !1,
                        o[t] = C.extend(u, s, r)) : void 0 !== r && (o[t] = r));
            return o
        }
        ,
        C.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = o(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                x(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (T(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (T(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : c.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, s = e.length, o = !n; i < s; i++)
                    !t(e[i], i) !== o && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, s = 0, o = [];
                if (T(e))
                    for (r = e.length; s < r; s++)
                        null != (i = t(e[s], s, n)) && o.push(i);
                else
                    for (s in e)
                        null != (i = t(e[s], s, n)) && o.push(i);
                return l(o)
            },
            guid: 1,
            support: m
        }),
        "function" == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]),
        C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        });
        var E = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
        function(e) {
            var t, n, r, i, s, o, a, l, u, c, d, p, f, h, g, m, v, y, D, b = "sizzle" + 1 * new Date, x = e.document, w = 0, C = 0, T = le(), E = le(), _ = le(), S = le(), k = function(e, t) {
                return e === t && (d = !0),
                0
            }, F = {}.hasOwnProperty, A = [], P = A.pop, O = A.push, M = A.push, $ = A.slice, L = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", N = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", I = "\\[" + N + "*(" + j + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + N + "*\\]", R = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", z = new RegExp(N + "+","g"), q = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$","g"), H = new RegExp("^" + N + "*," + N + "*"), W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"), G = new RegExp(N + "|>"), X = new RegExp(R), V = new RegExp("^" + j + "$"), U = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)","i"),
                bool: new RegExp("^(?:" + B + ")$","i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)","i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, se = function() {
                p()
            }, oe = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                M.apply(A = $.call(x.childNodes), x.childNodes),
                A[x.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: A.length ? function(e, t) {
                        O.apply(e, $.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function ae(e, t, r, i) {
                var s, a, u, c, d, h, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
                if (r = r || [],
                "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x)
                    return r;
                if (!i && (p(t),
                t = t || f,
                g)) {
                    if (11 !== x && (d = Z.exec(e)))
                        if (s = d[1]) {
                            if (9 === x) {
                                if (!(u = t.getElementById(s)))
                                    return r;
                                if (u.id === s)
                                    return r.push(u),
                                    r
                            } else if (y && (u = y.getElementById(s)) && D(t, u) && u.id === s)
                                return r.push(u),
                                r
                        } else {
                            if (d[2])
                                return M.apply(r, t.getElementsByTagName(e)),
                                r;
                            if ((s = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return M.apply(r, t.getElementsByClassName(s)),
                                r
                        }
                    if (n.qsa && !S[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e,
                        y = t,
                        1 === x && (G.test(e) || W.test(e))) {
                            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)),
                            a = (h = o(e)).length; a--; )
                                h[a] = (c ? "#" + c : ":scope") + " " + De(h[a]);
                            v = h.join(",")
                        }
                        try {
                            return M.apply(r, y.querySelectorAll(v)),
                            r
                        } catch (t) {
                            S(e, !0)
                        } finally {
                            c === b && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(q, "$1"), t, r, i)
            }
            function le() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    t[n + " "] = i
                }
            }
            function ue(e) {
                return e[b] = !0,
                e
            }
            function ce(e) {
                var t = f.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function de(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                    r.attrHandle[n[i]] = t
            }
            function pe(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function fe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function he(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function ge(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function me(e) {
                return ue(function(t) {
                    return t = +t,
                    ue(function(n, r) {
                        for (var i, s = e([], n.length, t), o = s.length; o--; )
                            n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = ae.support = {},
            s = ae.isXML = function(e) {
                var t = e && e.namespaceURI
                  , n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }
            ,
            p = ae.setDocument = function(e) {
                var t, i, o = e ? e.ownerDocument || e : x;
                return o != f && 9 === o.nodeType && o.documentElement ? (h = (f = o).documentElement,
                g = !s(f),
                x != f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", se, !1) : i.attachEvent && i.attachEvent("onunload", se)),
                n.scope = ce(function(e) {
                    return h.appendChild(e).appendChild(f.createElement("div")),
                    void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }),
                n.attributes = ce(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                n.getElementsByTagName = ce(function(e) {
                    return e.appendChild(f.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                n.getElementsByClassName = J.test(f.getElementsByClassName),
                n.getById = ce(function(e) {
                    return h.appendChild(e).id = b,
                    !f.getElementsByName || !f.getElementsByName(b).length
                }),
                n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e)
                                return [s];
                            for (i = t.getElementsByName(e),
                            r = 0; s = i[r++]; )
                                if ((n = s.getAttributeNode("id")) && n.value === e)
                                    return [s]
                        }
                        return []
                    }
                }
                ),
                r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], i = 0, s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[i++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return s
                }
                ,
                r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e)
                }
                ,
                v = [],
                m = [],
                (n.qsa = J.test(f.querySelectorAll)) && (ce(function(e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + N + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || m.push("\\[" + N + "*(?:value|" + B + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                    (t = f.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length || m.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    m.push("[\\r\\n\\f]")
                }),
                ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && m.push("name" + N + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                    h.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:")
                })),
                (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                    n.disconnectedMatch = y.call(e, "*"),
                    y.call(e, "[s!='']:x"),
                    v.push("!=", R)
                }),
                m = m.length && new RegExp(m.join("|")),
                v = v.length && new RegExp(v.join("|")),
                t = J.test(h.compareDocumentPosition),
                D = t || J.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                k = t ? function(e, t) {
                    if (e === t)
                        return d = !0,
                        0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == f || e.ownerDocument == x && D(x, e) ? -1 : t == f || t.ownerDocument == x && D(x, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & r ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return d = !0,
                        0;
                    var n, r = 0, i = e.parentNode, s = t.parentNode, o = [e], a = [t];
                    if (!i || !s)
                        return e == f ? -1 : t == f ? 1 : i ? -1 : s ? 1 : c ? L(c, e) - L(c, t) : 0;
                    if (i === s)
                        return pe(e, t);
                    for (n = e; n = n.parentNode; )
                        o.unshift(n);
                    for (n = t; n = n.parentNode; )
                        a.unshift(n);
                    for (; o[r] === a[r]; )
                        r++;
                    return r ? pe(o[r], a[r]) : o[r] == x ? -1 : a[r] == x ? 1 : 0
                }
                ,
                f) : f
            }
            ,
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }
            ,
            ae.matchesSelector = function(e, t) {
                if (p(e),
                n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                    try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {
                        S(t, !0)
                    }
                return ae(t, f, null, [e]).length > 0
            }
            ,
            ae.contains = function(e, t) {
                return (e.ownerDocument || e) != f && p(e),
                D(e, t)
            }
            ,
            ae.attr = function(e, t) {
                (e.ownerDocument || e) != f && p(e);
                var i = r.attrHandle[t.toLowerCase()]
                  , s = i && F.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== s ? s : n.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }
            ,
            ae.escape = function(e) {
                return (e + "").replace(re, ie)
            }
            ,
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            ae.uniqueSort = function(e) {
                var t, r = [], i = 0, s = 0;
                if (d = !n.detectDuplicates,
                c = !n.sortStable && e.slice(0),
                e.sort(k),
                d) {
                    for (; t = e[s++]; )
                        t === e[s] && (i = r.push(s));
                    for (; i--; )
                        e.splice(r[i], 1)
                }
                return c = null,
                e
            }
            ,
            i = ae.getText = function(e) {
                var t, n = "", r = 0, s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += i(e)
                    } else if (3 === s || 4 === s)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += i(t);
                return n
            }
            ,
            (r = ae.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ae.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "",
                            "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var s = "nth" !== e.slice(0, 3)
                          , o = "last" !== e.slice(-4)
                          , a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, l) {
                            var u, c, d, p, f, h, g = s !== o ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, D = !1;
                            if (m) {
                                if (s) {
                                    for (; g; ) {
                                        for (p = t; p = p[g]; )
                                            if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [o ? m.firstChild : m.lastChild],
                                o && y) {
                                    for (D = (f = (u = (c = (d = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === w && u[1]) && u[2],
                                    p = f && m.childNodes[f]; p = ++f && p && p[g] || (D = f = 0) || h.pop(); )
                                        if (1 === p.nodeType && ++D && p === t) {
                                            c[e] = [w, f, D];
                                            break
                                        }
                                } else if (y && (D = f = (u = (c = (d = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === w && u[1]),
                                !1 === D)
                                    for (; (p = ++f && p && p[g] || (D = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++D || (y && ((c = (d = p[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [w, D]),
                                    p !== t)); )
                                        ;
                                return (D -= i) === r || D % r == 0 && D / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                        r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                            for (var r, s = i(e, t), o = s.length; o--; )
                                e[r = L(e, s[o])] = !(n[r] = s[o])
                        }) : function(e) {
                            return i(e, 0, n)
                        }
                        ) : i
                    }
                },
                pseudos: {
                    not: ue(function(e) {
                        var t = []
                          , n = []
                          , r = a(e.replace(q, "$1"));
                        return r[b] ? ue(function(e, t, n, i) {
                            for (var s, o = r(e, null, i, []), a = e.length; a--; )
                                (s = o[a]) && (e[a] = !(t[a] = s))
                        }) : function(e, i, s) {
                            return t[0] = e,
                            r(t, null, s, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: ue(function(e) {
                        return function(t) {
                            return ae(e, t).length > 0
                        }
                    }),
                    contains: ue(function(e) {
                        return e = e.replace(te, ne),
                        function(t) {
                            return (t.textContent || i(t)).indexOf(e) > -1
                        }
                    }),
                    lang: ue(function(e) {
                        return V.test(e || "") || ae.error("unsupported lang: " + e),
                        e = e.replace(te, ne).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === h
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                r.pseudos[t] = fe(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                r.pseudos[t] = he(t);
            function ye() {}
            function De(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function be(e, t, n) {
                var r = t.dir
                  , i = t.next
                  , s = i || r
                  , o = n && "parentNode" === s
                  , a = C++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || o)
                            return e(t, n, i);
                    return !1
                }
                : function(t, n, l) {
                    var u, c, d, p = [w, a];
                    if (l) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || o) && e(t, n, l))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || o)
                                if (c = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                                i && i === t.nodeName.toLowerCase())
                                    t = t[r] || t;
                                else {
                                    if ((u = c[s]) && u[0] === w && u[1] === a)
                                        return p[2] = u[2];
                                    if (c[s] = p,
                                    p[2] = e(t, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function xe(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--; )
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function we(e, t, n, r, i) {
                for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++)
                    (s = e[a]) && (n && !n(s, r, i) || (o.push(s),
                    u && t.push(a)));
                return o
            }
            function Ce(e, t, n, r, i, s) {
                return r && !r[b] && (r = Ce(r)),
                i && !i[b] && (i = Ce(i, s)),
                ue(function(s, o, a, l) {
                    var u, c, d, p = [], f = [], h = o.length, g = s || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            ae(e, t[r], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []), m = !e || !s && t ? g : we(g, p, e, a, l), v = n ? i || (s ? e : h || r) ? [] : o : m;
                    if (n && n(m, v, a, l),
                    r)
                        for (u = we(v, f),
                        r(u, [], a, l),
                        c = u.length; c--; )
                            (d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                    if (s) {
                        if (i || e) {
                            if (i) {
                                for (u = [],
                                c = v.length; c--; )
                                    (d = v[c]) && u.push(m[c] = d);
                                i(null, v = [], u, l)
                            }
                            for (c = v.length; c--; )
                                (d = v[c]) && (u = i ? L(s, d) : p[c]) > -1 && (s[u] = !(o[u] = d))
                        }
                    } else
                        v = we(v === o ? v.splice(h, v.length) : v),
                        i ? i(null, o, v, l) : M.apply(o, v)
                })
            }
            function Te(e) {
                for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], l = o ? 1 : 0, c = be(function(e) {
                    return e === t
                }, a, !0), d = be(function(e) {
                    return L(t, e) > -1
                }, a, !0), p = [function(e, n, r) {
                    var i = !o && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                    return t = null,
                    i
                }
                ]; l < s; l++)
                    if (n = r.relative[e[l].type])
                        p = [be(xe(p), n)];
                    else {
                        if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                            for (i = ++l; i < s && !r.relative[e[i].type]; i++)
                                ;
                            return Ce(l > 1 && xe(p), l > 1 && De(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(q, "$1"), n, l < i && Te(e.slice(l, i)), i < s && Te(e = e.slice(i)), i < s && De(e))
                        }
                        p.push(n)
                    }
                return xe(p)
            }
            return ye.prototype = r.filters = r.pseudos,
            r.setFilters = new ye,
            o = ae.tokenize = function(e, t) {
                var n, i, s, o, a, l, u, c = E[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                for (a = e,
                l = [],
                u = r.preFilter; a; ) {
                    for (o in n && !(i = H.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                    l.push(s = [])),
                    n = !1,
                    (i = W.exec(a)) && (n = i.shift(),
                    s.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }),
                    a = a.slice(n.length)),
                    r.filter)
                        !(i = U[o].exec(a)) || u[o] && !(i = u[o](i)) || (n = i.shift(),
                        s.push({
                            value: n,
                            type: o,
                            matches: i
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? ae.error(e) : E(e, l).slice(0)
            }
            ,
            a = ae.compile = function(e, t) {
                var n, i = [], s = [], a = _[e + " "];
                if (!a) {
                    for (t || (t = o(e)),
                    n = t.length; n--; )
                        (a = Te(t[n]))[b] ? i.push(a) : s.push(a);
                    (a = _(e, function(e, t) {
                        var n = t.length > 0
                          , i = e.length > 0
                          , s = function(s, o, a, l, c) {
                            var d, h, m, v = 0, y = "0", D = s && [], b = [], x = u, C = s || i && r.find.TAG("*", c), T = w += null == x ? 1 : Math.random() || .1, E = C.length;
                            for (c && (u = o == f || o || c); y !== E && null != (d = C[y]); y++) {
                                if (i && d) {
                                    for (h = 0,
                                    o || d.ownerDocument == f || (p(d),
                                    a = !g); m = e[h++]; )
                                        if (m(d, o || f, a)) {
                                            l.push(d);
                                            break
                                        }
                                    c && (w = T)
                                }
                                n && ((d = !m && d) && v--,
                                s && D.push(d))
                            }
                            if (v += y,
                            n && y !== v) {
                                for (h = 0; m = t[h++]; )
                                    m(D, b, o, a);
                                if (s) {
                                    if (v > 0)
                                        for (; y--; )
                                            D[y] || b[y] || (b[y] = P.call(l));
                                    b = we(b)
                                }
                                M.apply(l, b),
                                c && !s && b.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                            }
                            return c && (w = T,
                            u = x),
                            D
                        };
                        return n ? ue(s) : s
                    }(s, i))).selector = e
                }
                return a
            }
            ,
            l = ae.select = function(e, t, n, i) {
                var s, l, u, c, d, p = "function" == typeof e && e, f = !i && o(e = p.selector || e);
                if (n = n || [],
                1 === f.length) {
                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                        if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        p && (t = t.parentNode),
                        e = e.slice(l.shift().value.length)
                    }
                    for (s = U.needsContext.test(e) ? 0 : l.length; s-- && (u = l[s],
                    !r.relative[c = u.type]); )
                        if ((d = r.find[c]) && (i = d(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(s, 1),
                            !(e = i.length && De(l)))
                                return M.apply(n, i),
                                n;
                            break
                        }
                }
                return (p || a(e, f))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = b.split("").sort(k).join("") === b,
            n.detectDuplicates = !!d,
            p(),
            n.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
            }),
            ce(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || de("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            n.attributes && ce(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || de("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ce(function(e) {
                return null == e.getAttribute("disabled")
            }) || de(B, function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            ae
        }(n);
        C.find = E,
        C.expr = E.selectors,
        C.expr[":"] = C.expr.pseudos,
        C.uniqueSort = C.unique = E.uniqueSort,
        C.text = E.getText,
        C.isXMLDoc = E.isXML,
        C.contains = E.contains,
        C.escapeSelector = E.escape;
        var _ = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && C(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , S = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , k = C.expr.match.needsContext;
        function F(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function P(e, t, n) {
            return v(t) ? C.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? C.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? C.grep(e, function(e) {
                return c.call(t, e) > -1 !== n
            }) : C.filter(t, e, n)
        }
        C.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        C.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (C.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < r; t++)
                    C.find(e, i[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(P(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(P(this, e || [], !0))
            },
            is: function(e) {
                return !!P(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length
            }
        });
        var O, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || O,
            "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : M.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t,
                    C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : D, !0)),
                    A.test(r[1]) && C.isPlainObject(t))
                        for (r in t)
                            v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = D.getElementById(r[2])) && (this[0] = i,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }
        ).prototype = C.fn,
        O = C(D);
        var $ = /^(?:parents|prev(?:Until|All))/
          , L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function B(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, s = [], o = "string" != typeof e && C(e);
                if (!k.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                s.push(n);
                                break
                            }
                return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s)
            },
            index: function(e) {
                return e ? "string" == typeof e ? c.call(C(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        C.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return _(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return _(e, "parentNode", n)
            },
            next: function(e) {
                return B(e, "nextSibling")
            },
            prev: function(e) {
                return B(e, "previousSibling")
            },
            nextAll: function(e) {
                return _(e, "nextSibling")
            },
            prevAll: function(e) {
                return _(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return _(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return _(e, "previousSibling", n)
            },
            siblings: function(e) {
                return S((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return S(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (F(e, "template") && (e = e.content || e),
                C.merge([], e.childNodes))
            }
        }, function(e, t) {
            C.fn[e] = function(n, r) {
                var i = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = C.filter(r, i)),
                this.length > 1 && (L[e] || C.uniqueSort(i),
                $.test(e) && i.reverse()),
                this.pushStack(i)
            }
        });
        var N = /[^\x20\t\r\n\f]+/g;
        function j(e) {
            return e
        }
        function I(e) {
            throw e
        }
        function R(e, t, n, r) {
            var i;
            try {
                e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return C.each(e.match(N) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }(e) : C.extend({}, e);
            var t, n, r, i, s = [], o = [], a = -1, l = function() {
                for (i = i || e.once,
                r = t = !0; o.length; a = -1)
                    for (n = o.shift(); ++a < s.length; )
                        !1 === s[a].apply(n[0], n[1]) && e.stopOnFalse && (a = s.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                i && (s = n ? [] : "")
            }, u = {
                add: function() {
                    return s && (n && !t && (a = s.length - 1,
                    o.push(n)),
                    function t(n) {
                        C.each(n, function(n, r) {
                            v(r) ? e.unique && u.has(r) || s.push(r) : r && r.length && "string" !== w(r) && t(r)
                        })
                    }(arguments),
                    n && !t && l()),
                    this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; (n = C.inArray(t, s, n)) > -1; )
                            s.splice(n, 1),
                            n <= a && a--
                    }),
                    this
                },
                has: function(e) {
                    return e ? C.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []),
                    this
                },
                disable: function() {
                    return i = o = [],
                    s = n = "",
                    this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return i = o = [],
                    n || t || (s = n = ""),
                    this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                    o.push(n),
                    t || l()),
                    this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return u
        }
        ,
        C.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                  , r = "pending"
                  , i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return C.Deferred(function(n) {
                            C.each(t, function(t, r) {
                                var i = v(e[r[4]]) && e[r[4]];
                                s[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, r, i) {
                        var s = 0;
                        function o(e, t, r, i) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , u = function() {
                                    var n, u;
                                    if (!(e < s)) {
                                        if ((n = r.apply(a, l)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        u = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        v(u) ? i ? u.call(n, o(s, t, j, i), o(s, t, I, i)) : (s++,
                                        u.call(n, o(s, t, j, i), o(s, t, I, i), o(s, t, j, t.notifyWith))) : (r !== j && (a = void 0,
                                        l = [n]),
                                        (i || t.resolveWith)(a, l))
                                    }
                                }
                                  , c = i ? u : function() {
                                    try {
                                        u()
                                    } catch (n) {
                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace),
                                        e + 1 >= s && (r !== I && (a = void 0,
                                        l = [n]),
                                        t.rejectWith(a, l))
                                    }
                                }
                                ;
                                e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()),
                                n.setTimeout(c))
                            }
                        }
                        return C.Deferred(function(n) {
                            t[0][3].add(o(0, n, v(i) ? i : j, n.notifyWith)),
                            t[1][3].add(o(0, n, v(e) ? e : j)),
                            t[2][3].add(o(0, n, v(r) ? r : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, i) : i
                    }
                }
                  , s = {};
                return C.each(t, function(e, n) {
                    var o = n[2]
                      , a = n[5];
                    i[n[1]] = o.add,
                    a && o.add(function() {
                        r = a
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    o.add(n[3].fire),
                    s[n[0]] = function() {
                        return s[n[0] + "With"](this === s ? void 0 : this, arguments),
                        this
                    }
                    ,
                    s[n[0] + "With"] = o.fireWith
                }),
                i.promise(s),
                e && e.call(s, s),
                s
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , r = Array(n)
                  , i = a.call(arguments)
                  , s = C.Deferred()
                  , o = function(e) {
                    return function(n) {
                        r[e] = this,
                        i[e] = arguments.length > 1 ? a.call(arguments) : n,
                        --t || s.resolveWith(r, i)
                    }
                };
                if (t <= 1 && (R(e, s.done(o(n)).resolve, s.reject, !t),
                "pending" === s.state() || v(i[n] && i[n].then)))
                    return s.then();
                for (; n--; )
                    R(i[n], o(n), s.reject);
                return s.promise()
            }
        });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        C.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        }
        ;
        var q = C.Deferred();
        function H() {
            D.removeEventListener("DOMContentLoaded", H),
            n.removeEventListener("load", H),
            C.ready()
        }
        C.fn.ready = function(e) {
            return q.then(e).catch(function(e) {
                C.readyException(e)
            }),
            this
        }
        ,
        C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0,
                !0 !== e && --C.readyWait > 0 || q.resolveWith(D, [C]))
            }
        }),
        C.ready.then = q.then,
        "complete" === D.readyState || "loading" !== D.readyState && !D.documentElement.doScroll ? n.setTimeout(C.ready) : (D.addEventListener("DOMContentLoaded", H),
        n.addEventListener("load", H));
        var W = function(e, t, n, r, i, s, o) {
            var a = 0
              , l = e.length
              , u = null == n;
            if ("object" === w(n))
                for (a in i = !0,
                n)
                    W(e, t, a, n[a], !0, s, o);
            else if (void 0 !== r && (i = !0,
            v(r) || (o = !0),
            u && (o ? (t.call(e, r),
            t = null) : (u = t,
            t = function(e, t, n) {
                return u.call(C(e), n)
            }
            )),
            t))
                for (; a < l; a++)
                    t(e[a], n, o ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : s
        }
          , G = /^-ms-/
          , X = /-([a-z])/g;
        function V(e, t) {
            return t.toUpperCase()
        }
        function U(e) {
            return e.replace(G, "ms-").replace(X, V)
        }
        var Y = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function Q() {
            this.expando = C.expando + Q.uid++
        }
        Q.uid = 1,
        Q.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[U(t)] = n;
                else
                    for (r in t)
                        i[U(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(U) : (t = U(t))in r ? [t] : t.match(N) || []).length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var K = new Q
          , J = new Q
          , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , ee = /[A-Z]/g;
        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    J.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return J.hasData(e) || K.hasData(e)
            },
            data: function(e, t, n) {
                return J.access(e, t, n)
            },
            removeData: function(e, t) {
                J.remove(e, t)
            },
            _data: function(e, t, n) {
                return K.access(e, t, n)
            },
            _removeData: function(e, t) {
                K.remove(e, t)
            }
        }),
        C.fn.extend({
            data: function(e, t) {
                var n, r, i, s = this[0], o = s && s.attributes;
                if (void 0 === e) {
                    if (this.length && (i = J.get(s),
                    1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
                        for (n = o.length; n--; )
                            o[n] && 0 === (r = o[n].name).indexOf("data-") && (r = U(r.slice(5)),
                            te(s, r, i[r]));
                        K.set(s, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    J.set(this, e)
                }) : W(this, function(t) {
                    var n;
                    if (s && void 0 === t)
                        return void 0 !== (n = J.get(s, e)) ? n : void 0 !== (n = te(s, e)) ? n : void 0;
                    this.each(function() {
                        J.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    J.remove(this, e)
                })
            }
        }),
        C.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = K.get(e, t),
                    n && (!r || Array.isArray(n) ? r = K.access(e, t, C.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = C.queue(e, t)
                  , r = n.length
                  , i = n.shift()
                  , s = C._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                r--),
                i && ("fx" === t && n.unshift("inprogress"),
                delete s.stop,
                i.call(e, function() {
                    C.dequeue(e, t)
                }, s)),
                !r && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        K.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        C.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = C.Deferred(), s = this, o = this.length, a = function() {
                    --r || i.resolveWith(s, [s])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; o--; )
                    (n = K.get(s[o], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(a));
                return a(),
                i.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$","i")
          , ie = ["Top", "Right", "Bottom", "Left"]
          , se = D.documentElement
          , oe = function(e) {
            return C.contains(e.ownerDocument, e)
        }
          , ae = {
            composed: !0
        };
        se.getRootNode && (oe = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        }
        );
        var le = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
        };
        function ue(e, t, n, r) {
            var i, s, o = 20, a = r ? function() {
                return r.cur()
            }
            : function() {
                return C.css(e, t, "")
            }
            , l = a(), u = n && n[3] || (C.cssNumber[t] ? "" : "px"), c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && re.exec(C.css(e, t));
            if (c && c[3] !== u) {
                for (l /= 2,
                u = u || c[3],
                c = +l || 1; o--; )
                    C.style(e, t, c + u),
                    (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0),
                    c /= s;
                c *= 2,
                C.style(e, t, c + u),
                n = n || []
            }
            return n && (c = +c || +l || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = u,
            r.start = c,
            r.end = i)),
            i
        }
        var ce = {};
        function de(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = ce[r];
            return i || (t = n.body.appendChild(n.createElement(r)),
            i = C.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
            ce[r] = i,
            i)
        }
        function pe(e, t) {
            for (var n, r, i = [], s = 0, o = e.length; s < o; s++)
                (r = e[s]).style && (n = r.style.display,
                t ? ("none" === n && (i[s] = K.get(r, "display") || null,
                i[s] || (r.style.display = "")),
                "" === r.style.display && le(r) && (i[s] = de(r))) : "none" !== n && (i[s] = "none",
                K.set(r, "display", n)));
            for (s = 0; s < o; s++)
                null != i[s] && (e[s].style.display = i[s]);
            return e
        }
        C.fn.extend({
            show: function() {
                return pe(this, !0)
            },
            hide: function() {
                return pe(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    le(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var fe, he, ge = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ve = /^$|^module$|\/(?:java|ecma)script/i;
        fe = D.createDocumentFragment().appendChild(D.createElement("div")),
        (he = D.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        fe.appendChild(he),
        m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked,
        fe.innerHTML = "<textarea>x</textarea>",
        m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue,
        fe.innerHTML = "<option></option>",
        m.option = !!fe.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function De(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && F(e, t) ? C.merge([e], n) : n
        }
        function be(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
        }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead,
        ye.th = ye.td,
        m.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;
        function we(e, t, n, r, i) {
            for (var s, o, a, l, u, c, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                if ((s = e[f]) || 0 === s)
                    if ("object" === w(s))
                        C.merge(p, s.nodeType ? [s] : s);
                    else if (xe.test(s)) {
                        for (o = o || d.appendChild(t.createElement("div")),
                        a = (me.exec(s) || ["", ""])[1].toLowerCase(),
                        l = ye[a] || ye._default,
                        o.innerHTML = l[1] + C.htmlPrefilter(s) + l[2],
                        c = l[0]; c--; )
                            o = o.lastChild;
                        C.merge(p, o.childNodes),
                        (o = d.firstChild).textContent = ""
                    } else
                        p.push(t.createTextNode(s));
            for (d.textContent = "",
            f = 0; s = p[f++]; )
                if (r && C.inArray(s, r) > -1)
                    i && i.push(s);
                else if (u = oe(s),
                o = De(d.appendChild(s), "script"),
                u && be(o),
                n)
                    for (c = 0; s = o[c++]; )
                        ve.test(s.type || "") && n.push(s);
            return d
        }
        var Ce = /^([^.]*)(?:\.(.+)|)/;
        function Te() {
            return !0
        }
        function Ee() {
            return !1
        }
        function _e(e, t) {
            return e === function() {
                try {
                    return D.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }
        function Se(e, t, n, r, i, s) {
            var o, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                    Se(e, a, n, r, t[a], s);
                return e
            }
            if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
            r = void 0) : (i = r,
            r = n,
            n = void 0)),
            !1 === i)
                i = Ee;
            else if (!i)
                return e;
            return 1 === s && (o = i,
            (i = function(e) {
                return C().off(e),
                o.apply(this, arguments)
            }
            ).guid = o.guid || (o.guid = C.guid++)),
            e.each(function() {
                C.event.add(this, t, i, r, n)
            })
        }
        function ke(e, t, n) {
            n ? (K.set(e, t, !1),
            C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var r, i, s = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (s.length)
                            (C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (s = a.call(arguments),
                        K.set(this, t, s),
                        r = n(this, t),
                        this[t](),
                        s !== (i = K.get(this, t)) || r ? K.set(this, t, !1) : i = {},
                        s !== i)
                            return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            i && i.value
                    } else
                        s.length && (K.set(this, t, {
                            value: C.event.trigger(C.extend(s[0], C.Event.prototype), s.slice(1), this)
                        }),
                        e.stopImmediatePropagation())
                }
            })) : void 0 === K.get(e, t) && C.event.add(e, t, Te)
        }
        C.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var s, o, a, l, u, c, d, p, f, h, g, m = K.get(e);
                if (Y(e))
                    for (n.handler && (n = (s = n).handler,
                    i = s.selector),
                    i && C.find.matchesSelector(se, i),
                    n.guid || (n.guid = C.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (o = m.handle) || (o = m.handle = function(t) {
                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    u = (t = (t || "").match(N) || [""]).length; u--; )
                        f = g = (a = Ce.exec(t[u]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                        f && (d = C.event.special[f] || {},
                        f = (i ? d.delegateType : d.bindType) || f,
                        d = C.event.special[f] || {},
                        c = C.extend({
                            type: f,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && C.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, s),
                        (p = l[f]) || ((p = l[f] = []).delegateCount = 0,
                        d.setup && !1 !== d.setup.call(e, r, h, o) || e.addEventListener && e.addEventListener(f, o)),
                        d.add && (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        C.event.global[f] = !0)
            },
            remove: function(e, t, n, r, i) {
                var s, o, a, l, u, c, d, p, f, h, g, m = K.hasData(e) && K.get(e);
                if (m && (l = m.events)) {
                    for (u = (t = (t || "").match(N) || [""]).length; u--; )
                        if (f = g = (a = Ce.exec(t[u]) || [])[1],
                        h = (a[2] || "").split(".").sort(),
                        f) {
                            for (d = C.event.special[f] || {},
                            p = l[f = (r ? d.delegateType : d.bindType) || f] || [],
                            a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            o = s = p.length; s--; )
                                c = p[s],
                                !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(s, 1),
                                c.selector && p.delegateCount--,
                                d.remove && d.remove.call(e, c));
                            o && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || C.removeEvent(e, f, m.handle),
                            delete l[f])
                        } else
                            for (f in l)
                                C.event.remove(e, f + t[u], n, r, !0);
                    C.isEmptyObject(l) && K.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, s, o, a = new Array(arguments.length), l = C.event.fix(e), u = (K.get(this, "events") || Object.create(null))[l.type] || [], c = C.event.special[l.type] || {};
                for (a[0] = l,
                t = 1; t < arguments.length; t++)
                    a[t] = arguments[t];
                if (l.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (o = C.event.handlers.call(this, l, u),
                    t = 0; (i = o[t++]) && !l.isPropagationStopped(); )
                        for (l.currentTarget = i.elem,
                        n = 0; (s = i.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                            l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s,
                            l.data = s.data,
                            void 0 !== (r = ((C.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(),
                            l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l),
                    l.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, s, o, a = [], l = t.delegateCount, u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (s = [],
                            o = {},
                            n = 0; n < l; n++)
                                void 0 === o[i = (r = t[n]).selector + " "] && (o[i] = r.needsContext ? C(i, this).index(u) > -1 : C.find(i, this, null, [u]).length),
                                o[i] && s.push(r);
                            s.length && a.push({
                                elem: u,
                                handlers: s
                            })
                        }
                return u = this,
                l < t.length && a.push({
                    elem: u,
                    handlers: t.slice(l)
                }),
                a
            },
            addProp: function(e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && F(t, "input") && ke(t, "click", Te),
                        !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && F(t, "input") && ke(t, "click"),
                        !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return ge.test(t.type) && t.click && F(t, "input") && K.get(t, "click") || F(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        C.Event = function(e, t) {
            if (!(this instanceof C.Event))
                return new C.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ee,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && C.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[C.expando] = !0
        }
        ,
        C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Te,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Te,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Te,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, C.event.addProp),
        C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return ke(this, e, _e),
                    !1
                },
                trigger: function() {
                    return ke(this, e),
                    !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        }),
        C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, s = e.handleObj;
                    return i && (i === r || C.contains(r, i)) || (e.type = s.origType,
                    n = s.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        C.fn.extend({
            on: function(e, t, n, r) {
                return Se(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Se(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Ee),
                this.each(function() {
                    C.event.remove(this, e, n, t)
                })
            }
        });
        var Fe = /<script|<style|<link/i
          , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Oe(e, t) {
            return F(e, "table") && F(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }
        function Me(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function $e(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Le(e, t) {
            var n, r, i, s, o, a;
            if (1 === t.nodeType) {
                if (K.hasData(e) && (a = K.get(e).events))
                    for (i in K.remove(t, "handle events"),
                    a)
                        for (n = 0,
                        r = a[i].length; n < r; n++)
                            C.event.add(t, i, a[i][n]);
                J.hasData(e) && (s = J.access(e),
                o = C.extend({}, s),
                J.set(t, o))
            }
        }
        function Be(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function Ne(e, t, n, r) {
            t = l(t);
            var i, s, o, a, u, c, d = 0, p = e.length, f = p - 1, h = t[0], g = v(h);
            if (g || p > 1 && "string" == typeof h && !m.checkClone && Ae.test(h))
                return e.each(function(i) {
                    var s = e.eq(i);
                    g && (t[0] = h.call(this, i, s.html())),
                    Ne(s, t, n, r)
                });
            if (p && (s = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild,
            1 === i.childNodes.length && (i = s),
            s || r)) {
                for (a = (o = C.map(De(i, "script"), Me)).length; d < p; d++)
                    u = i,
                    d !== f && (u = C.clone(u, !0, !0),
                    a && C.merge(o, De(u, "script"))),
                    n.call(e[d], u, d);
                if (a)
                    for (c = o[o.length - 1].ownerDocument,
                    C.map(o, $e),
                    d = 0; d < a; d++)
                        u = o[d],
                        ve.test(u.type || "") && !K.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }, c) : x(u.textContent.replace(Pe, ""), u, c))
            }
            return e
        }
        function je(e, t, n) {
            for (var r, i = t ? C.filter(t, e) : e, s = 0; null != (r = i[s]); s++)
                n || 1 !== r.nodeType || C.cleanData(De(r)),
                r.parentNode && (n && oe(r) && be(De(r, "script")),
                r.parentNode.removeChild(r));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, i, s, o, a = e.cloneNode(!0), l = oe(e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (o = De(a),
                    r = 0,
                    i = (s = De(e)).length; r < i; r++)
                        Be(s[r], o[r]);
                if (t)
                    if (n)
                        for (s = s || De(e),
                        o = o || De(a),
                        r = 0,
                        i = s.length; r < i; r++)
                            Le(s[r], o[r]);
                    else
                        Le(e, a);
                return (o = De(a, "script")).length > 0 && be(o, !l && De(e, "script")),
                a
            },
            cleanData: function(e) {
                for (var t, n, r, i = C.event.special, s = 0; void 0 !== (n = e[s]); s++)
                    if (Y(n)) {
                        if (t = n[K.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                            n[K.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }),
        C.fn.extend({
            detach: function(e) {
                return je(this, e, !0)
            },
            remove: function(e) {
                return je(this, e)
            },
            text: function(e) {
                return W(this, function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Ne(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Ne(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Ne(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Ne(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (C.cleanData(De(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return W(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Fe.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (C.cleanData(De(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Ne(this, arguments, function(t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(De(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            C.fn[e] = function(e) {
                for (var n, r = [], i = C(e), s = i.length - 1, o = 0; o <= s; o++)
                    n = o === s ? this : this.clone(!0),
                    C(i[o])[t](n),
                    u.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ie = new RegExp("^(" + ne + ")(?!px)[a-z%]+$","i")
          , Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , ze = function(e, t, n) {
            var r, i, s = {};
            for (i in t)
                s[i] = e.style[i],
                e.style[i] = t[i];
            for (i in r = n.call(e),
            t)
                e.style[i] = s[i];
            return r
        }
          , qe = new RegExp(ie.join("|"),"i");
        function He(e, t, n) {
            var r, i, s, o, a = e.style;
            return (n = n || Re(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = C.style(e, t)),
            !m.pixelBoxStyles() && Ie.test(o) && qe.test(t) && (r = a.width,
            i = a.minWidth,
            s = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = o,
            o = n.width,
            a.width = r,
            a.minWidth = i,
            a.maxWidth = s)),
            void 0 !== o ? o + "" : o
        }
        function We(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    se.appendChild(u).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top,
                    l = 12 === t(e.marginLeft),
                    c.style.right = "60%",
                    o = 36 === t(e.right),
                    i = 36 === t(e.width),
                    c.style.position = "absolute",
                    s = 12 === t(c.offsetWidth / 3),
                    se.removeChild(u),
                    c = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, i, s, o, a, l, u = D.createElement("div"), c = D.createElement("div");
            c.style && (c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            m.clearCloneStyle = "content-box" === c.style.backgroundClip,
            C.extend(m, {
                boxSizingReliable: function() {
                    return e(),
                    i
                },
                pixelBoxStyles: function() {
                    return e(),
                    o
                },
                pixelPosition: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    l
                },
                scrollboxSize: function() {
                    return e(),
                    s
                },
                reliableTrDimensions: function() {
                    var e, t, r, i;
                    return null == a && (e = D.createElement("table"),
                    t = D.createElement("tr"),
                    r = D.createElement("div"),
                    e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                    t.style.cssText = "border:1px solid",
                    t.style.height = "1px",
                    r.style.height = "9px",
                    r.style.display = "block",
                    se.appendChild(e).appendChild(t).appendChild(r),
                    i = n.getComputedStyle(t),
                    a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight,
                    se.removeChild(e)),
                    a
                }
            }))
        }();
        var Ge = ["Webkit", "Moz", "ms"]
          , Xe = D.createElement("div").style
          , Ve = {};
        function Ue(e) {
            var t = C.cssProps[e] || Ve[e];
            return t || (e in Xe ? e : Ve[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; )
                    if ((e = Ge[n] + t)in Xe)
                        return e
            }(e) || e)
        }
        var Ye = /^(none|table(?!-c[ea]).+)/
          , Qe = /^--/
          , Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Ze(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function et(e, t, n, r, i, s) {
            var o = "width" === t ? 1 : 0
              , a = 0
              , l = 0;
            if (n === (r ? "border" : "content"))
                return 0;
            for (; o < 4; o += 2)
                "margin" === n && (l += C.css(e, n + ie[o], !0, i)),
                r ? ("content" === n && (l -= C.css(e, "padding" + ie[o], !0, i)),
                "margin" !== n && (l -= C.css(e, "border" + ie[o] + "Width", !0, i))) : (l += C.css(e, "padding" + ie[o], !0, i),
                "padding" !== n ? l += C.css(e, "border" + ie[o] + "Width", !0, i) : a += C.css(e, "border" + ie[o] + "Width", !0, i));
            return !r && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0),
            l
        }
        function tt(e, t, n) {
            var r = Re(e)
              , i = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r)
              , s = i
              , o = He(e, t, r)
              , a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ie.test(o)) {
                if (!n)
                    return o;
                o = "auto"
            }
            return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && F(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r),
            (s = a in e) && (o = e[a])),
            (o = parseFloat(o) || 0) + et(e, t, n || (i ? "border" : "content"), s, r, o) + "px"
        }
        function nt(e, t, n, r, i) {
            return new nt.prototype.init(e,t,n,r,i)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = He(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, s, o, a = U(t), l = Qe.test(t), u = e.style;
                    if (l || (t = Ue(a)),
                    o = C.cssHooks[t] || C.cssHooks[a],
                    void 0 === n)
                        return o && "get"in o && void 0 !== (i = o.get(e, !1, r)) ? i : u[t];
                    "string" === (s = typeof n) && (i = re.exec(n)) && i[1] && (n = ue(e, t, i),
                    s = "number"),
                    null != n && n == n && ("number" !== s || l || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    o && "set"in o && void 0 === (n = o.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, s, o, a = U(t);
                return Qe.test(t) || (t = Ue(a)),
                (o = C.cssHooks[t] || C.cssHooks[a]) && "get"in o && (i = o.get(e, !0, n)),
                void 0 === i && (i = He(e, t, r)),
                "normal" === i && t in Je && (i = Je[t]),
                "" === n || n ? (s = parseFloat(i),
                !0 === n || isFinite(s) ? s || 0 : i) : i
            }
        }),
        C.each(["height", "width"], function(e, t) {
            C.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return !Ye.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : ze(e, Ke, function() {
                            return tt(e, t, r)
                        })
                },
                set: function(e, n, r) {
                    var i, s = Re(e), o = !m.scrollboxSize() && "absolute" === s.position, a = (o || r) && "border-box" === C.css(e, "boxSizing", !1, s), l = r ? et(e, t, r, a, s) : 0;
                    return a && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - et(e, t, "border", !1, s) - .5)),
                    l && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                    n = C.css(e, t)),
                    Ze(0, n, l)
                }
            }
        }),
        C.cssHooks.marginLeft = We(m.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            C.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        i[e + ie[r] + t] = s[r] || s[r - 2] || s[0];
                    return i
                }
            },
            "margin" !== e && (C.cssHooks[e + t].set = Ze)
        }),
        C.fn.extend({
            css: function(e, t) {
                return W(this, function(e, t, n) {
                    var r, i, s = {}, o = 0;
                    if (Array.isArray(t)) {
                        for (r = Re(e),
                        i = t.length; o < i; o++)
                            s[t[o]] = C.css(e, t[o], !1, r);
                        return s
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        C.Tween = nt,
        nt.prototype = {
            constructor: nt,
            init: function(e, t, n, r, i, s) {
                this.elem = e,
                this.prop = n,
                this.easing = i || C.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = s || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                this
            }
        },
        nt.prototype.init.prototype = nt.prototype,
        nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        C.fx = nt.prototype.init,
        C.fx.step = {};
        var rt, it, st = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
        function at() {
            it && (!1 === D.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, C.fx.interval),
            C.fx.tick())
        }
        function lt() {
            return n.setTimeout(function() {
                rt = void 0
            }),
            rt = Date.now()
        }
        function ut(e, t) {
            var n, r = 0, i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                i["margin" + (n = ie[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function ct(e, t, n) {
            for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), s = 0, o = i.length; s < o; s++)
                if (r = i[s].call(n, t, e))
                    return r
        }
        function dt(e, t, n) {
            var r, i, s = 0, o = dt.prefilters.length, a = C.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (i)
                    return !1;
                for (var t = rt || lt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), s = 0, o = u.tweens.length; s < o; s++)
                    u.tweens[s].run(r);
                return a.notifyWith(e, [u, r, n]),
                r < 1 && o ? n : (o || a.notifyWith(e, [u, 1, 0]),
                a.resolveWith(e, [u]),
                !1)
            }, u = a.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? u.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]),
                    a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                    this
                }
            }), c = u.props;
            for (!function(e, t) {
                var n, r, i, s, o;
                for (n in e)
                    if (i = t[r = U(n)],
                    s = e[n],
                    Array.isArray(s) && (i = s[1],
                    s = e[n] = s[0]),
                    n !== r && (e[r] = s,
                    delete e[n]),
                    (o = C.cssHooks[r]) && "expand"in o)
                        for (n in s = o.expand(s),
                        delete e[r],
                        s)
                            n in e || (e[n] = s[n],
                            t[n] = i);
                    else
                        t[r] = i
            }(c, u.opts.specialEasing); s < o; s++)
                if (r = dt.prefilters[s].call(u, e, c, u.opts))
                    return v(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
                    r;
            return C.map(c, ct, u),
            v(u.opts.start) && u.opts.start.call(e, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            C.fx.timer(C.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })),
            u
        }
        C.Animation = C.extend(dt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, re.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                v(e) ? (t = e,
                e = ["*"]) : e = e.match(N);
                for (var n, r = 0, i = e.length; r < i; r++)
                    n = e[r],
                    dt.tweeners[n] = dt.tweeners[n] || [],
                    dt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, s, o, a, l, u, c, d = "width"in t || "height"in t, p = this, f = {}, h = e.style, g = e.nodeType && le(e), m = K.get(e, "fxshow");
                for (r in n.queue || (null == (o = C._queueHooks(e, "fx")).unqueued && (o.unqueued = 0,
                a = o.empty.fire,
                o.empty.fire = function() {
                    o.unqueued || a()
                }
                ),
                o.unqueued++,
                p.always(function() {
                    p.always(function() {
                        o.unqueued--,
                        C.queue(e, "fx").length || o.empty.fire()
                    })
                })),
                t)
                    if (i = t[r],
                    st.test(i)) {
                        if (delete t[r],
                        s = s || "toggle" === i,
                        i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r])
                                continue;
                            g = !0
                        }
                        f[r] = m && m[r] || C.style(e, r)
                    }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                    for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (u = m && m.display) && (u = K.get(e, "display")),
                    "none" === (c = C.css(e, "display")) && (u ? c = u : (pe([e], !0),
                    u = e.style.display || u,
                    c = C.css(e, "display"),
                    pe([e]))),
                    ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (p.done(function() {
                        h.display = u
                    }),
                    null == u && (c = h.display,
                    u = "none" === c ? "" : c)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    p.always(function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    })),
                    l = !1,
                    f)
                        l || (m ? "hidden"in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                            display: u
                        }),
                        s && (m.hidden = !g),
                        g && pe([e], !0),
                        p.done(function() {
                            for (r in g || pe([e]),
                            K.remove(e, "fxshow"),
                            f)
                                C.style(e, r, f[r])
                        })),
                        l = ct(g ? m[r] : 0, r, p),
                        r in m || (m[r] = l.start,
                        g && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
            }
        }),
        C.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || v(e) && e,
                duration: e,
                easing: n && t || t && !v(t) && t
            };
            return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                v(r.old) && r.old.call(this),
                r.queue && C.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        C.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = C.isEmptyObject(e)
                  , s = C.speed(t, n, r)
                  , o = function() {
                    var t = dt(this, C.extend({}, e), s);
                    (i || K.get(this, "finish")) && t.stop(!0)
                };
                return o.finish = o,
                i || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , i = null != e && e + "queueHooks"
                      , s = C.timers
                      , o = K.get(this);
                    if (i)
                        o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o)
                            o[i] && o[i].stop && ot.test(i) && r(o[i]);
                    for (i = s.length; i--; )
                        s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n),
                        t = !1,
                        s.splice(i, 1));
                    !t && n || C.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = K.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], s = C.timers, o = r ? r.length : 0;
                    for (n.finish = !0,
                    C.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = s.length; t--; )
                        s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0),
                        s.splice(t, 1));
                    for (t = 0; t < o; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        C.each(["toggle", "show", "hide"], function(e, t) {
            var n = C.fn[t];
            C.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }),
        C.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            C.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        C.timers = [],
        C.fx.tick = function() {
            var e, t = 0, n = C.timers;
            for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(),
            rt = void 0
        }
        ,
        C.fx.timer = function(e) {
            C.timers.push(e),
            C.fx.start()
        }
        ,
        C.fx.interval = 13,
        C.fx.start = function() {
            it || (it = !0,
            at())
        }
        ,
        C.fx.stop = function() {
            it = null
        }
        ,
        C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        C.fn.delay = function(e, t) {
            return e = C.fx && C.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, function(t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(i)
                }
            })
        }
        ,
        function() {
            var e = D.createElement("input")
              , t = D.createElement("select").appendChild(D.createElement("option"));
            e.type = "checkbox",
            m.checkOn = "" !== e.value,
            m.optSelected = t.selected,
            (e = D.createElement("input")).value = "t",
            e.type = "radio",
            m.radioValue = "t" === e.value
        }();
        var pt, ft = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return W(this, C.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }),
        C.extend({
            attr: function(e, t, n) {
                var r, i, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === s && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? pt : void 0)),
                    void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!m.radioValue && "radio" === t && F(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(N);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++]; )
                        e.removeAttribute(n)
            }
        }),
        pt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ft[t] || C.find.attr;
            ft[t] = function(e, t, r) {
                var i, s, o = t.toLowerCase();
                return r || (s = ft[o],
                ft[o] = i,
                i = null != n(e, t, r) ? o : null,
                ft[o] = s),
                i
            }
        });
        var ht = /^(?:input|select|textarea|button)$/i
          , gt = /^(?:a|area)$/i;
        function mt(e) {
            return (e.match(N) || []).join(" ")
        }
        function vt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function yt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return W(this, C.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        }),
        C.extend({
            prop: function(e, t, n) {
                var r, i, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                    i = C.propHooks[t]),
                    void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        m.optSelected || (C.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }),
        C.fn.extend({
            addClass: function(e) {
                var t, n, r, i, s, o, a, l = 0;
                if (v(e))
                    return this.each(function(t) {
                        C(this).addClass(e.call(this, t, vt(this)))
                    });
                if ((t = yt(e)).length)
                    for (; n = this[l++]; )
                        if (i = vt(n),
                        r = 1 === n.nodeType && " " + mt(i) + " ") {
                            for (o = 0; s = t[o++]; )
                                r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                            i !== (a = mt(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, s, o, a, l = 0;
                if (v(e))
                    return this.each(function(t) {
                        C(this).removeClass(e.call(this, t, vt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = yt(e)).length)
                    for (; n = this[l++]; )
                        if (i = vt(n),
                        r = 1 === n.nodeType && " " + mt(i) + " ") {
                            for (o = 0; s = t[o++]; )
                                for (; r.indexOf(" " + s + " ") > -1; )
                                    r = r.replace(" " + s + " ", " ");
                            i !== (a = mt(r)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                    C(this).toggleClass(e.call(this, n, vt(this), t), t)
                }) : this.each(function() {
                    var t, i, s, o;
                    if (r)
                        for (i = 0,
                        s = C(this),
                        o = yt(e); t = o[i++]; )
                            s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || ((t = vt(this)) && K.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var Dt = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = v(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Dt, "") : null == n ? "" : n : void 0
            }
        }),
        C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : mt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, s = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], l = o ? s + 1 : i.length;
                        for (r = s < 0 ? l : o ? s : 0; r < l; r++)
                            if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !F(n.parentNode, "optgroup"))) {
                                if (t = C(n).val(),
                                o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, s = C.makeArray(t), o = i.length; o--; )
                            ((r = i[o]).selected = C.inArray(C.valHooks.option.get(r), s) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        s
                    }
                }
            }
        }),
        C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = C.inArray(C(e).val(), t) > -1
                }
            },
            m.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        m.focusin = "onfocusin"in n;
        var bt = /^(?:focusinfocus|focusoutblur)$/
          , xt = function(e) {
            e.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function(e, t, r, i) {
                var s, o, a, l, u, c, d, p, h = [r || D], g = f.call(e, "type") ? e.type : e, m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = p = a = r = r || D,
                3 !== r.nodeType && 8 !== r.nodeType && !bt.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."),
                g = m.shift(),
                m.sort()),
                u = g.indexOf(":") < 0 && "on" + g,
                (e = e[C.expando] ? e : new C.Event(g,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                e.namespace = m.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = r),
                t = null == t ? [e] : C.makeArray(t, [e]),
                d = C.event.special[g] || {},
                i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!i && !d.noBubble && !y(r)) {
                        for (l = d.delegateType || g,
                        bt.test(l + g) || (o = o.parentNode); o; o = o.parentNode)
                            h.push(o),
                            a = o;
                        a === (r.ownerDocument || D) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (s = 0; (o = h[s++]) && !e.isPropagationStopped(); )
                        p = o,
                        e.type = s > 1 ? l : d.bindType || g,
                        (c = (K.get(o, "events") || Object.create(null))[e.type] && K.get(o, "handle")) && c.apply(o, t),
                        (c = u && o[u]) && c.apply && Y(o) && (e.result = c.apply(o, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = g,
                    i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !Y(r) || u && v(r[g]) && !y(r) && ((a = r[u]) && (r[u] = null),
                    C.event.triggered = g,
                    e.isPropagationStopped() && p.addEventListener(g, xt),
                    r[g](),
                    e.isPropagationStopped() && p.removeEventListener(g, xt),
                    C.event.triggered = void 0,
                    a && (r[u] = a)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(r, null, t)
            }
        }),
        C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return C.event.trigger(e, t, n, !0)
            }
        }),
        m.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this
                      , i = K.access(r, t);
                    i || r.addEventListener(e, n, !0),
                    K.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this
                      , i = K.access(r, t) - 1;
                    i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0),
                    K.remove(r, t))
                }
            }
        });
        var wt = n.location
          , Ct = {
            guid: Date.now()
        }
          , Tt = /\?/;
        C.parseXML = function(e) {
            var t, r;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return r = t && t.getElementsByTagName("parsererror")[0],
            t && !r || C.error("Invalid XML: " + (r ? C.map(r.childNodes, function(e) {
                return e.textContent
            }).join("\n") : e)),
            t
        }
        ;
        var Et = /\[\]$/
          , _t = /\r?\n/g
          , St = /^(?:submit|button|image|reset|file)$/i
          , kt = /^(?:input|select|textarea|keygen)/i;
        function Ft(e, t, n, r) {
            var i;
            if (Array.isArray(t))
                C.each(t, function(t, i) {
                    n || Et.test(e) ? r(e, i) : Ft(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
            else if (n || "object" !== w(t))
                r(e, t);
            else
                for (i in t)
                    Ft(e + "[" + i + "]", t[i], n, r)
        }
        C.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                var n = v(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
                C.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (n in e)
                    Ft(n, e[n], t, i);
            return r.join("&")
        }
        ,
        C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !ge.test(e))
                }).map(function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(_t, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(_t, "\r\n")
                    }
                }).get()
            }
        });
        var At = /%20/g
          , Pt = /#.*$/
          , Ot = /([?&])_=[^&]*/
          , Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , $t = /^(?:GET|HEAD)$/
          , Lt = /^\/\//
          , Bt = {}
          , Nt = {}
          , jt = "*/".concat("*")
          , It = D.createElement("a");
        function Rt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, i = 0, s = t.toLowerCase().match(N) || [];
                if (v(n))
                    for (; r = s[i++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function zt(e, t, n, r) {
            var i = {}
              , s = e === Nt;
            function o(a) {
                var l;
                return i[a] = !0,
                C.each(e[a] || [], function(e, a) {
                    var u = a(t, n, r);
                    return "string" != typeof u || s || i[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                    o(u),
                    !1)
                }),
                l
            }
            return o(t.dataTypes[0]) || !i["*"] && o("*")
        }
        function qt(e, t) {
            var n, r, i = C.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r),
            e
        }
        It.href = wt.href,
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": jt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? qt(qt(e, C.ajaxSettings), t) : qt(C.ajaxSettings, e)
            },
            ajaxPrefilter: Rt(Bt),
            ajaxTransport: Rt(Nt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var r, i, s, o, a, l, u, c, d, p, f = C.ajaxSetup({}, t), h = f.context || f, g = f.context && (h.nodeType || h.jquery) ? C(h) : C.event, m = C.Deferred(), v = C.Callbacks("once memory"), y = f.statusCode || {}, b = {}, x = {}, w = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!o)
                                for (o = {}; t = Mt.exec(s); )
                                    o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = o[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                        b[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (f.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t),
                        E(0, t),
                        this
                    }
                };
                if (m.promise(T),
                f.url = ((e || f.url || wt.href) + "").replace(Lt, wt.protocol + "//"),
                f.type = t.method || t.type || f.method || f.type,
                f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""],
                null == f.crossDomain) {
                    l = D.createElement("a");
                    try {
                        l.href = f.url,
                        l.href = l.href,
                        f.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)),
                zt(Bt, f, t, T),
                u)
                    return T;
                for (d in (c = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !$t.test(f.type),
                i = f.url.replace(Pt, ""),
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (p = f.url.slice(i.length),
                f.data && (f.processData || "string" == typeof f.data) && (i += (Tt.test(i) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (i = i.replace(Ot, "$1"),
                p = (Tt.test(i) ? "&" : "?") + "_=" + Ct.guid++ + p),
                f.url = i + p),
                f.ifModified && (C.lastModified[i] && T.setRequestHeader("If-Modified-Since", C.lastModified[i]),
                C.etag[i] && T.setRequestHeader("If-None-Match", C.etag[i])),
                (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : f.accepts["*"]),
                f.headers)
                    T.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || u))
                    return T.abort();
                if (w = "abort",
                v.add(f.complete),
                T.done(f.success),
                T.fail(f.error),
                r = zt(Nt, f, t, T)) {
                    if (T.readyState = 1,
                    c && g.trigger("ajaxSend", [T, f]),
                    u)
                        return T;
                    f.async && f.timeout > 0 && (a = n.setTimeout(function() {
                        T.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1,
                        r.send(b, E)
                    } catch (e) {
                        if (u)
                            throw e;
                        E(-1, e)
                    }
                } else
                    E(-1, "No Transport");
                function E(e, t, o, l) {
                    var d, p, D, b, x, w = t;
                    u || (u = !0,
                    a && n.clearTimeout(a),
                    r = void 0,
                    s = l || "",
                    T.readyState = e > 0 ? 4 : 0,
                    d = e >= 200 && e < 300 || 304 === e,
                    o && (b = function(e, t, n) {
                        for (var r, i, s, o, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in a)
                                if (a[i] && a[i].test(r)) {
                                    l.unshift(i);
                                    break
                                }
                        if (l[0]in n)
                            s = l[0];
                        else {
                            for (i in n) {
                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                    s = i;
                                    break
                                }
                                o || (o = i)
                            }
                            s = s || o
                        }
                        if (s)
                            return s !== l[0] && l.unshift(s),
                            n[s]
                    }(f, T, o)),
                    !d && C.inArray("script", f.dataTypes) > -1 && C.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}
                    ),
                    b = function(e, t, n, r) {
                        var i, s, o, a, l, u = {}, c = e.dataTypes.slice();
                        if (c[1])
                            for (o in e.converters)
                                u[o.toLowerCase()] = e.converters[o];
                        for (s = c.shift(); s; )
                            if (e.responseFields[s] && (n[e.responseFields[s]] = t),
                            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            l = s,
                            s = c.shift())
                                if ("*" === s)
                                    s = l;
                                else if ("*" !== l && l !== s) {
                                    if (!(o = u[l + " " + s] || u["* " + s]))
                                        for (i in u)
                                            if ((a = i.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                !0 === o ? o = u[i] : !0 !== u[i] && (s = a[0],
                                                c.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== o)
                                        if (o && e.throws)
                                            t = o(t);
                                        else
                                            try {
                                                t = o(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: o ? e : "No conversion from " + l + " to " + s
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, b, T, d),
                    d ? (f.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (C.lastModified[i] = x),
                    (x = T.getResponseHeader("etag")) && (C.etag[i] = x)),
                    204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state,
                    p = b.data,
                    d = !(D = b.error))) : (D = w,
                    !e && w || (w = "error",
                    e < 0 && (e = 0))),
                    T.status = e,
                    T.statusText = (t || w) + "",
                    d ? m.resolveWith(h, [p, w, T]) : m.rejectWith(h, [T, w, D]),
                    T.statusCode(y),
                    y = void 0,
                    c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? p : D]),
                    v.fireWith(h, [T, w]),
                    c && (g.trigger("ajaxComplete", [T, f]),
                    --C.active || C.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }),
        C.each(["get", "post"], function(e, t) {
            C[t] = function(e, n, r, i) {
                return v(n) && (i = i || r,
                r = n,
                n = void 0),
                C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        }),
        C.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }),
        C._evalUrl = function(e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, n)
                }
            })
        }
        ,
        C.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])),
                t = C(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return v(e) ? this.each(function(t) {
                    C(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = C(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = v(e);
                return this.each(function(n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }
        ,
        C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        C.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Ht = {
            0: 200,
            1223: 204
        }
          , Wt = C.ajaxSettings.xhr();
        m.cors = !!Wt && "withCredentials"in Wt,
        m.ajax = Wt = !!Wt,
        C.ajaxTransport(function(e) {
            var t, r;
            if (m.cors || Wt && !e.crossDomain)
                return {
                    send: function(i, s) {
                        var o, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (o in e.xhrFields)
                                a[o] = e.xhrFields[o];
                        for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                        i)
                            a.setRequestHeader(o, i[o]);
                        t = function(e) {
                            return function() {
                                t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Ht[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = t(),
                        r = a.onerror = a.ontimeout = t("error"),
                        void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout(function() {
                                t && r()
                            })
                        }
                        ,
                        t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e),
                    e
                }
            }
        }),
        C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        C.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function(r, i) {
                        t = C("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && i("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        D.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        });
        var Gt, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xt.pop() || C.expando + "_" + Ct.guid++;
                return this[e] = !0,
                e
            }
        }),
        C.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, s, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function() {
                    return o || C.error(i + " was not called"),
                    o[0]
                }
                ,
                e.dataTypes[0] = "json",
                s = n[i],
                n[i] = function() {
                    o = arguments
                }
                ,
                r.always(function() {
                    void 0 === s ? C(n).removeProp(i) : n[i] = s,
                    e[i] && (e.jsonpCallback = t.jsonpCallback,
                    Xt.push(i)),
                    o && v(s) && s(o[0]),
                    o = s = void 0
                }),
                "script"
        }),
        m.createHTMLDocument = ((Gt = D.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Gt.childNodes.length),
        C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (m.createHTMLDocument ? ((r = (t = D.implementation.createHTMLDocument("")).createElement("base")).href = D.location.href,
            t.head.appendChild(r)) : t = D),
            s = !n && [],
            (i = A.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, s),
            s && s.length && C(s).remove(),
            C.merge([], i.childNodes)));
            var r, i, s
        }
        ,
        C.fn.load = function(e, t, n) {
            var r, i, s, o = this, a = e.indexOf(" ");
            return a > -1 && (r = mt(e.slice(a)),
            e = e.slice(0, a)),
            v(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (i = "POST"),
            o.length > 0 && C.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                s = arguments,
                o.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, s || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        C.expr.pseudos.animated = function(e) {
            return C.grep(C.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        C.offset = {
            setOffset: function(e, t, n) {
                var r, i, s, o, a, l, u = C.css(e, "position"), c = C(e), d = {};
                "static" === u && (e.style.position = "relative"),
                a = c.offset(),
                s = C.css(e, "top"),
                l = C.css(e, "left"),
                ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (o = (r = c.position()).top,
                i = r.left) : (o = parseFloat(s) || 0,
                i = parseFloat(l) || 0),
                v(t) && (t = t.call(e, n, C.extend({}, a))),
                null != t.top && (d.top = t.top - a.top + o),
                null != t.left && (d.left = t.left - a.left + i),
                "using"in t ? t.using.call(e, d) : c.css(d)
            }
        },
        C.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        C.offset.setOffset(this, e, t)
                    });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === C.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                        i.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - C.css(r, "marginTop", !0),
                        left: t.left - i.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                        e = e.offsetParent;
                    return e || se
                })
            }
        }),
        C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function(r) {
                return W(this, function(e, r, i) {
                    var s;
                    if (y(e) ? s = e : 9 === e.nodeType && (s = e.defaultView),
                    void 0 === i)
                        return s ? s[t] : e[r];
                    s ? s.scrollTo(n ? s.pageXOffset : i, n ? i : s.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }),
        C.each(["top", "left"], function(e, t) {
            C.cssHooks[t] = We(m.pixelPosition, function(e, n) {
                if (n)
                    return n = He(e, t),
                    Ie.test(n) ? C(e).position()[t] + "px" : n
            })
        }),
        C.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            C.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                C.fn[r] = function(i, s) {
                    var o = arguments.length && (n || "boolean" != typeof i)
                      , a = n || (!0 === i || !0 === s ? "margin" : "border");
                    return W(this, function(t, n, i) {
                        var s;
                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement,
                        Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a)
                    }, t, o ? i : void 0, o)
                }
            })
        }),
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            C.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        });
        var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            v(e))
                return r = a.call(arguments, 2),
                (i = function() {
                    return e.apply(t || this, r.concat(a.call(arguments)))
                }
                ).guid = e.guid = e.guid || C.guid++,
                i
        }
        ,
        C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }
        ,
        C.isArray = Array.isArray,
        C.parseJSON = JSON.parse,
        C.nodeName = F,
        C.isFunction = v,
        C.isWindow = y,
        C.camelCase = U,
        C.type = w,
        C.now = Date.now,
        C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Ut, "")
        }
        ,
        void 0 === (r = function() {
            return C
        }
        .apply(t, [])) || (e.exports = r);
        var Yt = n.jQuery
          , Qt = n.$;
        return C.noConflict = function(e) {
            return n.$ === C && (n.$ = Qt),
            e && n.jQuery === C && (n.jQuery = Yt),
            C
        }
        ,
        void 0 === i && (n.jQuery = n.$ = C),
        C
    })
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function i(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e.__proto__ = t
    }
    /*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    n.r(t);
    var s, o, a, l, u, c, d, p, f, h, g, m, v, y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, D = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, b = 1e-8, x = 2 * Math.PI, w = x / 4, C = 0, T = Math.sqrt, E = Math.cos, _ = Math.sin, S = function(e) {
        return "string" == typeof e
    }, k = function(e) {
        return "function" == typeof e
    }, F = function(e) {
        return "number" == typeof e
    }, A = function(e) {
        return void 0 === e
    }, P = function(e) {
        return "object" == typeof e
    }, O = function(e) {
        return !1 !== e
    }, M = function() {
        return "undefined" != typeof window
    }, L = function(e) {
        return k(e) || S(e)
    }, B = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , N = Array.isArray, j = /(?:-?\.?\d|\.)+/gi, I = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, R = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, z = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, q = /[+-]=-?[.\d]+/, H = /[^,'"\[\]\s]+/gi, W = /[\d.+\-=]+(?:e[-+]\d*)*/i, G = {}, X = {}, V = function(e) {
        return (X = ye(e, G)) && rn
    }, U = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }, Y = function(e, t) {
        return !t && console.warn(e)
    }, Q = function(e, t) {
        return e && (G[e] = t) && X && (X[e] = t) || G
    }, K = function() {
        return 0
    }, J = {}, Z = [], ee = {}, te = {}, ne = {}, re = 30, ie = [], se = "", oe = function(e) {
        var t, n, r = e[0];
        if (P(r) || k(r) || (e = [e]),
        !(t = (r._gsap || {}).harness)) {
            for (n = ie.length; n-- && !ie[n].targetTest(r); )
                ;
            t = ie[n]
        }
        for (n = e.length; n--; )
            e[n] && (e[n]._gsap || (e[n]._gsap = new kt(e[n],t))) || e.splice(n, 1);
        return e
    }, ae = function(e) {
        return e._gsap || oe(Ue(e))[0]._gsap
    }, le = function(e, t, n) {
        return (n = e[t]) && k(n) ? e[t]() : A(n) && e.getAttribute && e.getAttribute(t) || n
    }, ue = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }, ce = function(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }, de = function(e) {
        return Math.round(1e7 * e) / 1e7 || 0
    }, pe = function(e, t) {
        for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; )
            ;
        return r < n
    }, fe = function() {
        var e, t, n = Z.length, r = Z.slice(0);
        for (ee = {},
        Z.length = 0,
        e = 0; e < n; e++)
            (t = r[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
    }, he = function(e, t, n, r) {
        Z.length && fe(),
        e.render(t, n, r),
        Z.length && fe()
    }, ge = function(e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(H).length < 2 ? t : S(e) ? e.trim() : e
    }, me = function(e) {
        return e
    }, ve = function(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n]);
        return e
    }, ye = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }, De = function e(t, n) {
        for (var r in n)
            "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = P(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
        return t
    }, be = function(e, t) {
        var n, r = {};
        for (n in e)
            n in t || (r[n] = e[n]);
        return r
    }, xe = function(e) {
        var t, n = e.parent || o, r = e.keyframes ? (t = N(e.keyframes),
        function(e, n) {
            for (var r in n)
                r in e || "duration" === r && t || "ease" === r || (e[r] = n[r])
        }
        ) : ve;
        if (O(e.inherit))
            for (; n; )
                r(e, n.vars.defaults),
                n = n.parent || n._dp;
        return e
    }, we = function(e, t, n, r) {
        void 0 === n && (n = "_first"),
        void 0 === r && (r = "_last");
        var i = t._prev
          , s = t._next;
        i ? i._next = s : e[n] === t && (e[n] = s),
        s ? s._prev = i : e[r] === t && (e[r] = i),
        t._next = t._prev = t.parent = null
    }, Ce = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
        e._act = 0
    }, Te = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; )
                n._dirty = 1,
                n = n.parent;
        return e
    }, Ee = function(e) {
        for (var t = e.parent; t && t.parent; )
            t._dirty = 1,
            t.totalDuration(),
            t = t.parent;
        return e
    }, _e = function e(t) {
        return !t || t._ts && e(t.parent)
    }, Se = function(e) {
        return e._repeat ? ke(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }, ke = function(e, t) {
        var n = Math.floor(e /= t);
        return e && n === e ? n - 1 : n
    }, Fe = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }, Ae = function(e) {
        return e._end = de(e._start + (e._tDur / Math.abs(e._ts || e._rts || b) || 0))
    }, Pe = function(e, t) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = de(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
        Ae(e),
        n._dirty || Te(n, e)),
        e
    }, Oe = function(e, t) {
        var n;
        if ((t._time || t._initted && !t._dur) && (n = Fe(e.rawTime(), t),
        (!t._dur || He(0, t.totalDuration(), n) - t._tTime > b) && t.render(n, !0)),
        Te(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (n = e; n._dp; )
                    n.rawTime() >= 0 && n.totalTime(n._tTime),
                    n = n._dp;
            e._zTime = -b
        }
    }, Me = function(e, t, n, r) {
        return t.parent && Ce(t),
        t._start = de((F(n) ? n : n || e !== o ? Re(e, n, t) : e._time) + t._delay),
        t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
        function(e, t, n, r, i) {
            void 0 === n && (n = "_first"),
            void 0 === r && (r = "_last");
            var s, o = e[r];
            if (i)
                for (s = t[i]; o && o[i] > s; )
                    o = o._prev;
            o ? (t._next = o._next,
            o._next = t) : (t._next = e[n],
            e[n] = t),
            t._next ? t._next._prev = t : e[r] = t,
            t._prev = o,
            t.parent = t._dp = e
        }(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Be(t) || (e._recent = t),
        r || Oe(e, t),
        e
    }, $e = function(e, t) {
        return (G.ScrollTrigger || U("scrollTrigger", t)) && G.ScrollTrigger.create(t, e)
    }, Le = function(e, t, n, r) {
        return $t(e, t),
        e._initted ? !n && e._pt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && d !== gt.frame ? (Z.push(e),
        e._lazy = [t, r],
        1) : void 0 : 1
    }, Be = function(e) {
        var t = e.data;
        return "isFromStart" === t || "isStart" === t
    }, Ne = function(e, t, n, r) {
        var i = e._repeat
          , s = de(t) || 0
          , o = e._tTime / e._tDur;
        return o && !r && (e._time *= s / e._dur),
        e._dur = s,
        e._tDur = i ? i < 0 ? 1e10 : de(s * (i + 1) + e._rDelay * i) : s,
        o > 0 && !r ? Pe(e, e._tTime = e._tDur * o) : e.parent && Ae(e),
        n || Te(e.parent, e),
        e
    }, je = function(e) {
        return e instanceof At ? Te(e) : Ne(e, e._dur)
    }, Ie = {
        _start: 0,
        endTime: K,
        totalDuration: K
    }, Re = function e(t, n, r) {
        var i, s, o, a = t.labels, l = t._recent || Ie, u = t.duration() >= 1e8 ? l.endTime(!1) : t._dur;
        return S(n) && (isNaN(n) || n in a) ? (s = n.charAt(0),
        o = "%" === n.substr(-1),
        i = n.indexOf("="),
        "<" === s || ">" === s ? (i >= 0 && (n = n.replace(/=/, "")),
        ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (o ? (i < 0 ? l : r).totalDuration() / 100 : 1)) : i < 0 ? (n in a || (a[n] = u),
        a[n]) : (s = parseFloat(n.charAt(i - 1) + n.substr(i + 1)),
        o && r && (s = s / 100 * (N(r) ? r[0] : r).totalDuration()),
        i > 1 ? e(t, n.substr(0, i - 1), r) + s : u + s)) : null == n ? u : +n
    }, ze = function(e, t, n) {
        var r, i, s = F(t[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), a = t[o];
        if (s && (a.duration = t[1]),
        a.parent = n,
        e) {
            for (r = a,
            i = n; i && !("immediateRender"in r); )
                r = i.vars.defaults || {},
                i = O(i.vars.inherit) && i.parent;
            a.immediateRender = O(r.immediateRender),
            e < 2 ? a.runBackwards = 1 : a.startAt = t[o - 1]
        }
        return new It(t[0],a,t[o + 1])
    }, qe = function(e, t) {
        return e || 0 === e ? t(e) : t
    }, He = function(e, t, n) {
        return n < e ? e : n > t ? t : n
    }, We = function(e, t) {
        return S(e) && (t = W.exec(e)) ? e.substr(t.index + t[0].length) : ""
    }, Ge = [].slice, Xe = function(e, t) {
        return e && P(e) && "length"in e && (!t && !e.length || e.length - 1 in e && P(e[0])) && !e.nodeType && e !== a
    }, Ve = function(e, t, n) {
        return void 0 === n && (n = []),
        e.forEach(function(e) {
            var r;
            return S(e) && !t || Xe(e, 1) ? (r = n).push.apply(r, Ue(e)) : n.push(e)
        }) || n
    }, Ue = function(e, t, n) {
        return !S(e) || n || !l && mt() ? N(e) ? Ve(e, n) : Xe(e) ? Ge.call(e, 0) : e ? [e] : [] : Ge.call((t || u).querySelectorAll(e), 0)
    }, Ye = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }, Qe = function(e) {
        if (k(e))
            return e;
        var t = P(e) ? e : {
            each: e
        }
          , n = Ct(t.ease)
          , r = t.from || 0
          , i = parseFloat(t.base) || 0
          , s = {}
          , o = r > 0 && r < 1
          , a = isNaN(r) || o
          , l = t.axis
          , u = r
          , c = r;
        return S(r) ? u = c = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !o && a && (u = r[0],
        c = r[1]),
        function(e, o, d) {
            var p, f, h, g, m, v, y, D, b, x = (d || t).length, w = s[x];
            if (!w) {
                if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                    for (y = -1e8; y < (y = d[b++].getBoundingClientRect().left) && b < x; )
                        ;
                    b--
                }
                for (w = s[x] = [],
                p = a ? Math.min(b, x) * u - .5 : r % b,
                f = 1e8 === b ? 0 : a ? x * c / b - .5 : r / b | 0,
                y = 0,
                D = 1e8,
                v = 0; v < x; v++)
                    h = v % b - p,
                    g = f - (v / b | 0),
                    w[v] = m = l ? Math.abs("y" === l ? g : h) : T(h * h + g * g),
                    m > y && (y = m),
                    m < D && (D = m);
                "random" === r && Ye(w),
                w.max = y - D,
                w.min = D,
                w.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (b > x ? x - 1 : l ? "y" === l ? x / b : b : Math.max(b, x / b)) || 0) * ("edges" === r ? -1 : 1),
                w.b = x < 0 ? i - x : i,
                w.u = We(t.amount || t.each) || 0,
                n = n && x < 0 ? xt(n) : n
            }
            return x = (w[e] - w.min) / w.max || 0,
            de(w.b + (n ? n(x) : x) * w.v) + w.u
        }
    }, Ke = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(n) {
            var r = Math.round(parseFloat(n) / e) * e * t;
            return (r - r % 1) / t + (F(n) ? 0 : We(n))
        }
    }, Je = function(e, t) {
        var n, r, i = N(e);
        return !i && P(e) && (n = i = e.radius || 1e8,
        e.values ? (e = Ue(e.values),
        (r = !F(e[0])) && (n *= n)) : e = Ke(e.increment)),
        qe(t, i ? k(e) ? function(t) {
            return r = e(t),
            Math.abs(r - t) <= n ? r : t
        }
        : function(t) {
            for (var i, s, o = parseFloat(r ? t.x : t), a = parseFloat(r ? t.y : 0), l = 1e8, u = 0, c = e.length; c--; )
                (i = r ? (i = e[c].x - o) * i + (s = e[c].y - a) * s : Math.abs(e[c] - o)) < l && (l = i,
                u = c);
            return u = !n || l <= n ? e[u] : t,
            r || u === t || F(t) ? u : u + We(t)
        }
        : Ke(e))
    }, Ze = function(e, t, n, r) {
        return qe(N(e) ? !t : !0 === n ? !!(n = 0) : !r, function() {
            return N(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * r) / r
        })
    }, et = function(e, t, n) {
        return qe(n, function(n) {
            return e[~~t(n)]
        })
    }, tt = function(e) {
        for (var t, n, r, i, s = 0, o = ""; ~(t = e.indexOf("random(", s)); )
            r = e.indexOf(")", t),
            i = "[" === e.charAt(t + 7),
            n = e.substr(t + 7, r - t - 7).match(i ? H : j),
            o += e.substr(s, t - s) + Ze(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
            s = r + 1;
        return o + e.substr(s, e.length - s)
    }, nt = function(e, t, n, r, i) {
        var s = t - e
          , o = r - n;
        return qe(i, function(t) {
            return n + ((t - e) / s * o || 0)
        })
    }, rt = function(e, t, n) {
        var r, i, s, o = e.labels, a = 1e8;
        for (r in o)
            (i = o[r] - t) < 0 == !!n && i && a > (i = Math.abs(i)) && (s = r,
            a = i);
        return s
    }, it = function(e, t, n) {
        var r, i, s = e.vars, o = s[t];
        if (o)
            return r = s[t + "Params"],
            i = s.callbackScope || e,
            n && Z.length && fe(),
            r ? o.apply(i, r) : o.call(i)
    }, st = function(e) {
        return Ce(e),
        e.scrollTrigger && e.scrollTrigger.kill(!1),
        e.progress() < 1 && it(e, "onInterrupt"),
        e
    }, ot = function(e) {
        var t = (e = !e.name && e.default || e).name
          , n = k(e)
          , r = t && !n && e.init ? function() {
            this._props = []
        }
        : e
          , i = {
            init: K,
            render: Ut,
            add: Ot,
            kill: Qt,
            modifier: Yt,
            rawVars: 0
        }
          , s = {
            targetTest: 0,
            get: 0,
            getSetter: Wt,
            aliases: {},
            register: 0
        };
        if (mt(),
        e !== r) {
            if (te[t])
                return;
            ve(r, ve(be(e, i), s)),
            ye(r.prototype, ye(i, be(e, s))),
            te[r.prop = t] = r,
            e.targetTest && (ie.push(r),
            J[t] = 1),
            t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        Q(t, r),
        e.register && e.register(rn, r, Zt)
    }, at = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    }, lt = function(e, t, n) {
        return 255 * (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
    }, ut = function(e, t, n) {
        var r, i, s, o, a, l, u, c, d, p, f = e ? F(e) ? [e >> 16, e >> 8 & 255, 255 & e] : 0 : at.black;
        if (!f) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)),
            at[e])
                f = at[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (r = e.charAt(1),
                i = e.charAt(2),
                s = e.charAt(3),
                e = "#" + r + r + i + i + s + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
                9 === e.length)
                    return [(f = parseInt(e.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(e.substr(7), 16) / 255];
                f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e]
            } else if ("hsl" === e.substr(0, 3))
                if (f = p = e.match(j),
                t) {
                    if (~e.indexOf("="))
                        return f = e.match(I),
                        n && f.length < 4 && (f[3] = 1),
                        f
                } else
                    o = +f[0] % 360 / 360,
                    a = +f[1] / 100,
                    r = 2 * (l = +f[2] / 100) - (i = l <= .5 ? l * (a + 1) : l + a - l * a),
                    f.length > 3 && (f[3] *= 1),
                    f[0] = lt(o + 1 / 3, r, i),
                    f[1] = lt(o, r, i),
                    f[2] = lt(o - 1 / 3, r, i);
            else
                f = e.match(j) || at.transparent;
            f = f.map(Number)
        }
        return t && !p && (r = f[0] / 255,
        i = f[1] / 255,
        s = f[2] / 255,
        l = ((u = Math.max(r, i, s)) + (c = Math.min(r, i, s))) / 2,
        u === c ? o = a = 0 : (d = u - c,
        a = l > .5 ? d / (2 - u - c) : d / (u + c),
        o = u === r ? (i - s) / d + (i < s ? 6 : 0) : u === i ? (s - r) / d + 2 : (r - i) / d + 4,
        o *= 60),
        f[0] = ~~(o + .5),
        f[1] = ~~(100 * a + .5),
        f[2] = ~~(100 * l + .5)),
        n && f.length < 4 && (f[3] = 1),
        f
    }, ct = function(e) {
        var t = []
          , n = []
          , r = -1;
        return e.split(pt).forEach(function(e) {
            var i = e.match(R) || [];
            t.push.apply(t, i),
            n.push(r += i.length + 1)
        }),
        t.c = n,
        t
    }, dt = function(e, t, n) {
        var r, i, s, o, a = "", l = (e + a).match(pt), u = t ? "hsla(" : "rgba(", c = 0;
        if (!l)
            return e;
        if (l = l.map(function(e) {
            return (e = ut(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
        }),
        n && (s = ct(e),
        (r = n.c).join(a) !== s.c.join(a)))
            for (o = (i = e.replace(pt, "1").split(R)).length - 1; c < o; c++)
                a += i[c] + (~r.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (s.length ? s : l.length ? l : n).shift());
        if (!i)
            for (o = (i = e.split(pt)).length - 1; c < o; c++)
                a += i[c] + l[c];
        return a + i[o]
    }, pt = function() {
        var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in at)
            t += "|" + e + "\\b";
        return new RegExp(t + ")","gi")
    }(), ft = /hsl[a]?\(/, ht = function(e) {
        var t, n = e.join(" ");
        if (pt.lastIndex = 0,
        pt.test(n))
            return t = ft.test(n),
            e[1] = dt(e[1], t),
            e[0] = dt(e[0], t, ct(e[1])),
            !0
    }, gt = function() {
        var e, t, n, r, i, s, o = Date.now, d = 500, p = 33, h = o(), g = h, m = 1e3 / 240, v = m, y = [], D = function n(a) {
            var l, u, c, f, D = o() - g, b = !0 === a;
            if (D > d && (h += D - p),
            ((l = (c = (g += D) - h) - v) > 0 || b) && (f = ++r.frame,
            i = c - 1e3 * r.time,
            r.time = c /= 1e3,
            v += l + (l >= m ? 4 : m - l),
            u = 1),
            b || (e = t(n)),
            u)
                for (s = 0; s < y.length; s++)
                    y[s](c, i, f, a)
        };
        return r = {
            time: 0,
            frame: 0,
            tick: function() {
                D(!0)
            },
            deltaRatio: function(e) {
                return i / (1e3 / (e || 60))
            },
            wake: function() {
                c && (!l && M() && (a = l = window,
                u = a.document || {},
                G.gsap = rn,
                (a.gsapVersions || (a.gsapVersions = [])).push(rn.version),
                V(X || a.GreenSockGlobals || !a.gsap && a || {}),
                n = a.requestAnimationFrame),
                e && r.sleep(),
                t = n || function(e) {
                    return setTimeout(e, v - 1e3 * r.time + 1 | 0)
                }
                ,
                f = 1,
                D(2))
            },
            sleep: function() {
                (n ? a.cancelAnimationFrame : clearTimeout)(e),
                f = 0,
                t = K
            },
            lagSmoothing: function(e, t) {
                d = e || 1 / b,
                p = Math.min(t, d, 0)
            },
            fps: function(e) {
                m = 1e3 / (e || 240),
                v = 1e3 * r.time + m
            },
            add: function(e) {
                y.indexOf(e) < 0 && y.push(e),
                mt()
            },
            remove: function(e, t) {
                ~(t = y.indexOf(e)) && y.splice(t, 1) && s >= t && s--
            },
            _listeners: y
        }
    }(), mt = function() {
        return !f && gt.wake()
    }, vt = {}, yt = /^[\d.\-M][\d.\-,\s]/, Dt = /["']/g, bt = function(e) {
        for (var t, n, r, i = {}, s = e.substr(1, e.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++)
            n = s[a],
            t = a !== l - 1 ? n.lastIndexOf(",") : n.length,
            r = n.substr(0, t),
            i[o] = isNaN(r) ? r.replace(Dt, "").trim() : +r,
            o = n.substr(t + 1).trim();
        return i
    }, xt = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, wt = function e(t, n) {
        for (var r, i = t._first; i; )
            i instanceof At ? e(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? e(i.timeline, n) : (r = i._ease,
            i._ease = i._yEase,
            i._yEase = r,
            i._yoyo = n)),
            i = i._next
    }, Ct = function(e, t) {
        return e && (k(e) ? e : vt[e] || function(e) {
            var t, n, r, i, s = (e + "").split("("), o = vt[s[0]];
            return o && s.length > 1 && o.config ? o.config.apply(null, ~e.indexOf("{") ? [bt(s[1])] : (t = e,
            n = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            i = t.indexOf("(", n),
            t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r)).split(",").map(ge)) : vt._CE && yt.test(e) ? vt._CE("", e) : o
        }(e)) || t
    }, Tt = function(e, t, n, r) {
        void 0 === n && (n = function(e) {
            return 1 - t(1 - e)
        }
        ),
        void 0 === r && (r = function(e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
        }
        );
        var i, s = {
            easeIn: t,
            easeOut: n,
            easeInOut: r
        };
        return ue(e, function(e) {
            for (var t in vt[e] = G[e] = s,
            vt[i = e.toLowerCase()] = n,
            s)
                vt[i + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = vt[e + "." + t] = s[t]
        }),
        s
    }, Et = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }, _t = function e(t, n, r) {
        var i = n >= 1 ? n : 1
          , s = (r || (t ? .3 : .45)) / (n < 1 ? n : 1)
          , o = s / x * (Math.asin(1 / i) || 0)
          , a = function(e) {
            return 1 === e ? 1 : i * Math.pow(2, -10 * e) * _((e - o) * s) + 1
        }
          , l = "out" === t ? a : "in" === t ? function(e) {
            return 1 - a(1 - e)
        }
        : Et(a);
        return s = x / s,
        l.config = function(n, r) {
            return e(t, n, r)
        }
        ,
        l
    }, St = function e(t, n) {
        void 0 === n && (n = 1.70158);
        var r = function(e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0
        }
          , i = "out" === t ? r : "in" === t ? function(e) {
            return 1 - r(1 - e)
        }
        : Et(r);
        return i.config = function(n) {
            return e(t, n)
        }
        ,
        i
    };
    ue("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var n = t < 5 ? t + 1 : t;
        Tt(e + ",Power" + (n - 1), t ? function(e) {
            return Math.pow(e, n)
        }
        : function(e) {
            return e
        }
        , function(e) {
            return 1 - Math.pow(1 - e, n)
        }, function(e) {
            return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        })
    }),
    vt.Linear.easeNone = vt.none = vt.Linear.easeIn,
    Tt("Elastic", _t("in"), _t("out"), _t()),
    h = 7.5625,
    m = 1 / (g = 2.75),
    Tt("Bounce", function(e) {
        return 1 - v(1 - e)
    }, v = function(e) {
        return e < m ? h * e * e : e < .7272727272727273 ? h * Math.pow(e - 1.5 / g, 2) + .75 : e < .9090909090909092 ? h * (e -= 2.25 / g) * e + .9375 : h * Math.pow(e - 2.625 / g, 2) + .984375
    }
    ),
    Tt("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
    }),
    Tt("Circ", function(e) {
        return -(T(1 - e * e) - 1)
    }),
    Tt("Sine", function(e) {
        return 1 === e ? 1 : 1 - E(e * w)
    }),
    Tt("Back", St("in"), St("out"), St()),
    vt.SteppedEase = vt.steps = G.SteppedEase = {
        config: function(e, t) {
            void 0 === e && (e = 1);
            var n = 1 / e
              , r = e + (t ? 0 : 1)
              , i = t ? 1 : 0
              , s = 1 - b;
            return function(e) {
                return ((r * He(0, s, e) | 0) + i) * n
            }
        }
    },
    D.ease = vt["quad.out"],
    ue("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return se += e + "," + e + "Params,"
    });
    var kt = function(e, t) {
        this.id = C++,
        e._gsap = this,
        this.target = e,
        this.harness = t,
        this.get = t ? t.get : le,
        this.set = t ? t.getSetter : Wt
    }
      , Ft = function() {
        function e(e) {
            this.vars = e,
            this._delay = +e.delay || 0,
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
            this._yoyo = !!e.yoyo || !!e.yoyoEase),
            this._ts = 1,
            Ne(this, +e.duration, 1, 1),
            this.data = e.data,
            f || gt.wake()
        }
        var t = e.prototype;
        return t.delay = function(e) {
            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
            this._delay = e,
            this) : this._delay
        }
        ,
        t.duration = function(e) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        ,
        t.totalDuration = function(e) {
            return arguments.length ? (this._dirty = 0,
            Ne(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        t.totalTime = function(e, t) {
            if (mt(),
            !arguments.length)
                return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Pe(this, e),
                !n._dp || n.parent || Oe(n, this); n && n.parent; )
                    n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                    n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Me(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === b || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e),
            he(this, e, t)),
            this
        }
        ,
        t.time = function(e, t) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Se(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
        }
        ,
        t.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        t.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Se(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        t.iteration = function(e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? ke(this._tTime, n) + 1 : 1
        }
        ,
        t.timeScale = function(e) {
            if (!arguments.length)
                return this._rts === -b ? 0 : this._rts;
            if (this._rts === e)
                return this;
            var t = this.parent && this._ts ? Fe(this.parent._time, this) : this._tTime;
            return this._rts = +e || 0,
            this._ts = this._ps || e === -b ? 0 : this._rts,
            Ee(this.totalTime(He(-this._delay, this._tDur, t), !0)),
            Ae(this),
            this
        }
        ,
        t.paused = function(e) {
            return arguments.length ? (this._ps !== e && (this._ps = e,
            e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (mt(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== b && (this._tTime -= b)))),
            this) : this._ps
        }
        ,
        t.startTime = function(e) {
            if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return t && (t._sort || !this.parent) && Me(t, this, e - this._delay),
                this
            }
            return this._start
        }
        ,
        t.endTime = function(e) {
            return this._start + (O(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        t.rawTime = function(e) {
            var t = this.parent || this._dp;
            return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fe(t.rawTime(e), this) : this._tTime : this._tTime
        }
        ,
        t.globalTime = function(e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                n = t._start + n / (t._ts || 1),
                t = t._dp;
            return n
        }
        ,
        t.repeat = function(e) {
            return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
            je(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        t.repeatDelay = function(e) {
            if (arguments.length) {
                var t = this._time;
                return this._rDelay = e,
                je(this),
                t ? this.time(t) : this
            }
            return this._rDelay
        }
        ,
        t.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e,
            this) : this._yoyo
        }
        ,
        t.seek = function(e, t) {
            return this.totalTime(Re(this, e), O(t))
        }
        ,
        t.restart = function(e, t) {
            return this.play().totalTime(e ? -this._delay : 0, O(t))
        }
        ,
        t.play = function(e, t) {
            return null != e && this.seek(e, t),
            this.reversed(!1).paused(!1)
        }
        ,
        t.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
        }
        ,
        t.pause = function(e, t) {
            return null != e && this.seek(e, t),
            this.paused(!0)
        }
        ,
        t.resume = function() {
            return this.paused(!1)
        }
        ,
        t.reversed = function(e) {
            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -b : 0)),
            this) : this._rts < 0
        }
        ,
        t.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -b,
            this
        }
        ,
        t.isActive = function() {
            var e, t = this.parent || this._dp, n = this._start;
            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - b))
        }
        ,
        t.eventCallback = function(e, t, n) {
            var r = this.vars;
            return arguments.length > 1 ? (t ? (r[e] = t,
            n && (r[e + "Params"] = n),
            "onUpdate" === e && (this._onUpdate = t)) : delete r[e],
            this) : r[e]
        }
        ,
        t.then = function(e) {
            var t = this;
            return new Promise(function(n) {
                var r = k(e) ? e : me
                  , i = function() {
                    var e = t.then;
                    t.then = null,
                    k(r) && (r = r(t)) && (r.then || r === t) && (t.then = e),
                    n(r),
                    t.then = e
                };
                t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
            }
            )
        }
        ,
        t.kill = function() {
            st(this)
        }
        ,
        e
    }();
    ve(Ft.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -b,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var At = function(e) {
        function t(t, n) {
            var i;
            return void 0 === t && (t = {}),
            (i = e.call(this, t) || this).labels = {},
            i.smoothChildTiming = !!t.smoothChildTiming,
            i.autoRemoveChildren = !!t.autoRemoveChildren,
            i._sort = O(t.sortChildren),
            o && Me(t.parent || o, r(i), n),
            t.reversed && i.reverse(),
            t.paused && i.paused(!0),
            t.scrollTrigger && $e(r(i), t.scrollTrigger),
            i
        }
        i(t, e);
        var n = t.prototype;
        return n.to = function(e, t, n) {
            return ze(0, arguments, this),
            this
        }
        ,
        n.from = function(e, t, n) {
            return ze(1, arguments, this),
            this
        }
        ,
        n.fromTo = function(e, t, n, r) {
            return ze(2, arguments, this),
            this
        }
        ,
        n.set = function(e, t, n) {
            return t.duration = 0,
            t.parent = this,
            xe(t).repeatDelay || (t.repeat = 0),
            t.immediateRender = !!t.immediateRender,
            new It(e,t,Re(this, n),1),
            this
        }
        ,
        n.call = function(e, t, n) {
            return Me(this, It.delayedCall(0, e, t), n)
        }
        ,
        n.staggerTo = function(e, t, n, r, i, s, o) {
            return n.duration = t,
            n.stagger = n.stagger || r,
            n.onComplete = s,
            n.onCompleteParams = o,
            n.parent = this,
            new It(e,n,Re(this, i)),
            this
        }
        ,
        n.staggerFrom = function(e, t, n, r, i, s, o) {
            return n.runBackwards = 1,
            xe(n).immediateRender = O(n.immediateRender),
            this.staggerTo(e, t, n, r, i, s, o)
        }
        ,
        n.staggerFromTo = function(e, t, n, r, i, s, o, a) {
            return r.startAt = n,
            xe(r).immediateRender = O(r.immediateRender),
            this.staggerTo(e, t, r, i, s, o, a)
        }
        ,
        n.render = function(e, t, n) {
            var r, i, s, a, l, u, c, d, p, f, h, g, m = this._time, v = this._dirty ? this.totalDuration() : this._tDur, y = this._dur, D = e <= 0 ? 0 : de(e), x = this._zTime < 0 != e < 0 && (this._initted || !y);
            if (this !== o && D > v && e >= 0 && (D = v),
            D !== this._tTime || n || x) {
                if (m !== this._time && y && (D += this._time - m,
                e += this._time - m),
                r = D,
                p = this._start,
                u = !(d = this._ts),
                x && (y || (m = this._zTime),
                (e || !t) && (this._zTime = e)),
                this._repeat) {
                    if (h = this._yoyo,
                    l = y + this._rDelay,
                    this._repeat < -1 && e < 0)
                        return this.totalTime(100 * l + e, t, n);
                    if (r = de(D % l),
                    D === v ? (a = this._repeat,
                    r = y) : ((a = ~~(D / l)) && a === D / l && (r = y,
                    a--),
                    r > y && (r = y)),
                    f = ke(this._tTime, l),
                    !m && this._tTime && f !== a && (f = a),
                    h && 1 & a && (r = y - r,
                    g = 1),
                    a !== f && !this._lock) {
                        var w = h && 1 & f
                          , C = w === (h && 1 & a);
                        if (a < f && (w = !w),
                        m = w ? 0 : y,
                        this._lock = 1,
                        this.render(m || (g ? 0 : de(a * l)), t, !y)._lock = 0,
                        this._tTime = D,
                        !t && this.parent && it(this, "onRepeat"),
                        this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                        m && m !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (y = this._dur,
                        v = this._tDur,
                        C && (this._lock = 2,
                        m = w ? y : -1e-4,
                        this.render(m, !0),
                        this.vars.repeatRefresh && !g && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !u)
                            return this;
                        wt(this, g)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(e, t, n) {
                    var r;
                    if (n > t)
                        for (r = e._first; r && r._start <= n; ) {
                            if ("isPause" === r.data && r._start > t)
                                return r;
                            r = r._next
                        }
                    else
                        for (r = e._last; r && r._start >= n; ) {
                            if ("isPause" === r.data && r._start < t)
                                return r;
                            r = r._prev
                        }
                }(this, de(m), de(r))) && (D -= r - (r = c._start)),
                this._tTime = D,
                this._time = r,
                this._act = !d,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = e,
                m = 0),
                !m && r && !t && (it(this, "onStart"),
                this._tTime !== D))
                    return this;
                if (r >= m && e >= 0)
                    for (i = this._first; i; ) {
                        if (s = i._next,
                        (i._act || r >= i._start) && i._ts && c !== i) {
                            if (i.parent !== this)
                                return this.render(e, t, n);
                            if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, t, n),
                            r !== this._time || !this._ts && !u) {
                                c = 0,
                                s && (D += this._zTime = -b);
                                break
                            }
                        }
                        i = s
                    }
                else {
                    i = this._last;
                    for (var T = e < 0 ? e : r; i; ) {
                        if (s = i._prev,
                        (i._act || T <= i._end) && i._ts && c !== i) {
                            if (i.parent !== this)
                                return this.render(e, t, n);
                            if (i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, t, n),
                            r !== this._time || !this._ts && !u) {
                                c = 0,
                                s && (D += this._zTime = T ? -b : b);
                                break
                            }
                        }
                        i = s
                    }
                }
                if (c && !t && (this.pause(),
                c.render(r >= m ? 0 : -b)._zTime = r >= m ? 1 : -1,
                this._ts))
                    return this._start = p,
                    Ae(this),
                    this.render(e, t, n);
                this._onUpdate && !t && it(this, "onUpdate", !0),
                (D === v && v >= this.totalDuration() || !D && m) && (p !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((e || !y) && (D === v && this._ts > 0 || !D && this._ts < 0) && Ce(this, 1),
                t || e < 0 && !m || !D && !m && v || (it(this, D === v && e >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(D < v && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        n.add = function(e, t) {
            var n = this;
            if (F(t) || (t = Re(this, t, e)),
            !(e instanceof Ft)) {
                if (N(e))
                    return e.forEach(function(e) {
                        return n.add(e, t)
                    }),
                    this;
                if (S(e))
                    return this.addLabel(e, t);
                if (!k(e))
                    return this;
                e = It.delayedCall(0, e)
            }
            return this !== e ? Me(this, e, t) : this
        }
        ,
        n.getChildren = function(e, t, n, r) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === n && (n = !0),
            void 0 === r && (r = -1e8);
            for (var i = [], s = this._first; s; )
                s._start >= r && (s instanceof It ? t && i.push(s) : (n && i.push(s),
                e && i.push.apply(i, s.getChildren(!0, t, n)))),
                s = s._next;
            return i
        }
        ,
        n.getById = function(e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
                if (t[n].vars.id === e)
                    return t[n]
        }
        ,
        n.remove = function(e) {
            return S(e) ? this.removeLabel(e) : k(e) ? this.killTweensOf(e) : (we(this, e),
            e === this._recent && (this._recent = this._last),
            Te(this))
        }
        ,
        n.totalTime = function(t, n) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = de(gt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
            e.prototype.totalTime.call(this, t, n),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        n.addLabel = function(e, t) {
            return this.labels[e] = Re(this, t),
            this
        }
        ,
        n.removeLabel = function(e) {
            return delete this.labels[e],
            this
        }
        ,
        n.addPause = function(e, t, n) {
            var r = It.delayedCall(0, t || K, n);
            return r.data = "isPause",
            this._hasPause = 1,
            Me(this, r, Re(this, e))
        }
        ,
        n.removePause = function(e) {
            var t = this._first;
            for (e = Re(this, e); t; )
                t._start === e && "isPause" === t.data && Ce(t),
                t = t._next
        }
        ,
        n.killTweensOf = function(e, t, n) {
            for (var r = this.getTweensOf(e, n), i = r.length; i--; )
                Pt !== r[i] && r[i].kill(e, t);
            return this
        }
        ,
        n.getTweensOf = function(e, t) {
            for (var n, r = [], i = Ue(e), s = this._first, o = F(t); s; )
                s instanceof It ? pe(s._targets, i) && (o ? (!Pt || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive()) && r.push(s) : (n = s.getTweensOf(i, t)).length && r.push.apply(r, n),
                s = s._next;
            return r
        }
        ,
        n.tweenTo = function(e, t) {
            t = t || {};
            var n, r = this, i = Re(r, e), s = t, o = s.startAt, a = s.onStart, l = s.onStartParams, u = s.immediateRender, c = It.to(r, ve({
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration: t.duration || Math.abs((i - (o && "time"in o ? o.time : r._time)) / r.timeScale()) || b,
                onStart: function() {
                    if (r.pause(),
                    !n) {
                        var e = t.duration || Math.abs((i - (o && "time"in o ? o.time : r._time)) / r.timeScale());
                        c._dur !== e && Ne(c, e, 0, 1).render(c._time, !0, !0),
                        n = 1
                    }
                    a && a.apply(c, l || [])
                }
            }, t));
            return u ? c.render(0) : c
        }
        ,
        n.tweenFromTo = function(e, t, n) {
            return this.tweenTo(t, ve({
                startAt: {
                    time: Re(this, e)
                }
            }, n))
        }
        ,
        n.recent = function() {
            return this._recent
        }
        ,
        n.nextLabel = function(e) {
            return void 0 === e && (e = this._time),
            rt(this, Re(this, e))
        }
        ,
        n.previousLabel = function(e) {
            return void 0 === e && (e = this._time),
            rt(this, Re(this, e), 1)
        }
        ,
        n.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + b)
        }
        ,
        n.shiftChildren = function(e, t, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, s = this.labels; i; )
                i._start >= n && (i._start += e,
                i._end += e),
                i = i._next;
            if (t)
                for (r in s)
                    s[r] >= n && (s[r] += e);
            return Te(this)
        }
        ,
        n.invalidate = function() {
            var t = this._first;
            for (this._lock = 0; t; )
                t.invalidate(),
                t = t._next;
            return e.prototype.invalidate.call(this)
        }
        ,
        n.clear = function(e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n; )
                t = n._next,
                this.remove(n),
                n = t;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            Te(this)
        }
        ,
        n.totalDuration = function(e) {
            var t, n, r, i = 0, s = this, a = s._last, l = 1e8;
            if (arguments.length)
                return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -e : e));
            if (s._dirty) {
                for (r = s.parent; a; )
                    t = a._prev,
                    a._dirty && a.totalDuration(),
                    (n = a._start) > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
                    Me(s, a, n - a._delay, 1)._lock = 0) : l = n,
                    n < 0 && a._ts && (i -= n,
                    (!r && !s._dp || r && r.smoothChildTiming) && (s._start += n / s._ts,
                    s._time -= n,
                    s._tTime -= n),
                    s.shiftChildren(-n, !1, -Infinity),
                    l = 0),
                    a._end > i && a._ts && (i = a._end),
                    a = t;
                Ne(s, s === o && s._time > i ? s._time : i, 1, 1),
                s._dirty = 0
            }
            return s._tDur
        }
        ,
        t.updateRoot = function(e) {
            if (o._ts && (he(o, Fe(e, o)),
            d = gt.frame),
            gt.frame >= re) {
                re += y.autoSleep || 120;
                var t = o._first;
                if ((!t || !t._ts) && y.autoSleep && gt._listeners.length < 2) {
                    for (; t && !t._ts; )
                        t = t._next;
                    t || gt.sleep()
                }
            }
        }
        ,
        t
    }(Ft);
    ve(At.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Pt, Ot = function(e, t, n, r, i, s, o, a, l) {
        k(r) && (r = r(i || 0, e, s));
        var u, c = e[t], d = "get" !== n ? n : k(c) ? l ? e[t.indexOf("set") || !k(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : c, p = k(c) ? l ? qt : zt : Rt;
        if (S(r) && (~r.indexOf("random(") && (r = tt(r)),
        "=" === r.charAt(1) && ((u = parseFloat(d) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (We(d) || 0)) || 0 === u) && (r = u)),
        d !== r)
            return isNaN(d * r) || "" === r ? (!c && !(t in e) && U(t, r),
            function(e, t, n, r, i, s, o) {
                var a, l, u, c, d, p, f, h, g = new Zt(this._pt,e,t,0,1,Vt,null,i), m = 0, v = 0;
                for (g.b = n,
                g.e = r,
                n += "",
                (f = ~(r += "").indexOf("random(")) && (r = tt(r)),
                s && (s(h = [n, r], e, t),
                n = h[0],
                r = h[1]),
                l = n.match(z) || []; a = z.exec(r); )
                    c = a[0],
                    d = r.substring(m, a.index),
                    u ? u = (u + 1) % 5 : "rgba(" === d.substr(-5) && (u = 1),
                    c !== l[v++] && (p = parseFloat(l[v - 1]) || 0,
                    g._pt = {
                        _next: g._pt,
                        p: d || 1 === v ? d : ",",
                        s: p,
                        c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - p,
                        m: u && u < 4 ? Math.round : 0
                    },
                    m = z.lastIndex);
                return g.c = m < r.length ? r.substring(m, r.length) : "",
                g.fp = o,
                (q.test(r) || f) && (g.e = 0),
                this._pt = g,
                g
            }
            .call(this, e, t, d, r, p, a || y.stringFilter, l)) : (u = new Zt(this._pt,e,t,+d || 0,r - (d || 0),"boolean" == typeof c ? Xt : Gt,0,p),
            l && (u.fp = l),
            o && u.modifier(o, this, e),
            this._pt = u)
    }, Mt = function(e, t, n, r, i, s) {
        var o, a, l, u;
        if (te[e] && !1 !== (o = new te[e]).init(i, o.rawVars ? t[e] : function(e, t, n, r, i) {
            if (k(e) && (e = Bt(e, i, t, n, r)),
            !P(e) || e.style && e.nodeType || N(e) || B(e))
                return S(e) ? Bt(e, i, t, n, r) : e;
            var s, o = {};
            for (s in e)
                o[s] = Bt(e[s], i, t, n, r);
            return o
        }(t[e], r, i, s, n), n, r, s) && (n._pt = a = new Zt(n._pt,i,e,0,1,o.render,o,0,o.priority),
        n !== p))
            for (l = n._ptLookup[n._targets.indexOf(i)],
            u = o._props.length; u--; )
                l[o._props[u]] = a;
        return o
    }, $t = function e(t, n) {
        var r, i, a, l, u, c, d, p, f, h, g, m, v, y = t.vars, x = y.ease, w = y.startAt, C = y.immediateRender, T = y.lazy, E = y.onUpdate, _ = y.onUpdateParams, S = y.callbackScope, k = y.runBackwards, F = y.yoyoEase, A = y.keyframes, P = y.autoRevert, M = t._dur, $ = t._startAt, L = t._targets, B = t.parent, N = B && "nested" === B.data ? B.parent._targets : L, j = "auto" === t._overwrite && !s, I = t.timeline;
        if (I && (!A || !x) && (x = "none"),
        t._ease = Ct(x, D.ease),
        t._yEase = F ? xt(Ct(!0 === F ? x : F, D.ease)) : 0,
        F && t._yoyo && !t._repeat && (F = t._yEase,
        t._yEase = t._ease,
        t._ease = F),
        t._from = !I && !!y.runBackwards,
        !I || A && !y.stagger) {
            if (m = (p = L[0] ? ae(L[0]).harness : 0) && y[p.prop],
            r = be(y, J),
            $ && Ce($.render(-1, !0)),
            w)
                if (Ce(t._startAt = It.set(L, ve({
                    data: "isStart",
                    overwrite: !1,
                    parent: B,
                    immediateRender: !0,
                    lazy: O(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: E,
                    onUpdateParams: _,
                    callbackScope: S,
                    stagger: 0
                }, w))),
                n < 0 && !C && !P && t._startAt.render(-1, !0),
                C) {
                    if (n > 0 && !P && (t._startAt = 0),
                    M && n <= 0)
                        return void (n && (t._zTime = n))
                } else
                    !1 === P && (t._startAt = 0);
            else if (k && M)
                if ($)
                    !P && (t._startAt = 0);
                else if (n && (C = !1),
                a = ve({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: C && O(T),
                    immediateRender: C,
                    stagger: 0,
                    parent: B
                }, r),
                m && (a[p.prop] = m),
                Ce(t._startAt = It.set(L, a)),
                n < 0 && t._startAt.render(-1, !0),
                t._zTime = n,
                C) {
                    if (!n)
                        return
                } else
                    e(t._startAt, b);
            for (t._pt = 0,
            T = M && O(T) || T && !M,
            i = 0; i < L.length; i++) {
                if (d = (u = L[i])._gsap || oe(L)[i]._gsap,
                t._ptLookup[i] = h = {},
                ee[d.id] && Z.length && fe(),
                g = N === L ? i : N.indexOf(u),
                p && !1 !== (f = new p).init(u, m || r, t, g, N) && (t._pt = l = new Zt(t._pt,u,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach(function(e) {
                    h[e] = l
                }),
                f.priority && (c = 1)),
                !p || m)
                    for (a in r)
                        te[a] && (f = Mt(a, r, t, g, u, N)) ? f.priority && (c = 1) : h[a] = l = Ot.call(t, u, a, "get", r[a], g, N, 0, y.stringFilter);
                t._op && t._op[i] && t.kill(u, t._op[i]),
                j && t._pt && (Pt = t,
                o.killTweensOf(u, h, t.globalTime(n)),
                v = !t.parent,
                Pt = 0),
                t._pt && T && (ee[d.id] = 1)
            }
            c && Jt(t),
            t._onInit && t._onInit(t)
        }
        t._onUpdate = E,
        t._initted = (!t._op || t._pt) && !v,
        A && n <= 0 && I.render(1e8, !0, !0)
    }, Lt = function(e, t, n, r) {
        var i, s, o = t.ease || r || "power1.inOut";
        if (N(t))
            s = n[e] || (n[e] = []),
            t.forEach(function(e, n) {
                return s.push({
                    t: n / (t.length - 1) * 100,
                    v: e,
                    e: o
                })
            });
        else
            for (i in t)
                s = n[i] || (n[i] = []),
                "ease" === i || s.push({
                    t: parseFloat(e),
                    v: t[i],
                    e: o
                })
    }, Bt = function(e, t, n, r, i) {
        return k(e) ? e.call(t, n, r, i) : S(e) && ~e.indexOf("random(") ? tt(e) : e
    }, Nt = se + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", jt = {};
    ue(Nt + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
        return jt[e] = 1
    });
    var It = function(e) {
        function t(t, n, i, a) {
            var l;
            "number" == typeof n && (i.duration = n,
            n = i,
            i = null);
            var u, c, d, p, f, h, g, m, v = (l = e.call(this, a ? n : xe(n)) || this).vars, D = v.duration, x = v.delay, w = v.immediateRender, C = v.stagger, T = v.overwrite, E = v.keyframes, _ = v.defaults, S = v.scrollTrigger, k = v.yoyoEase, A = n.parent || o, M = (N(t) || B(t) ? F(t[0]) : "length"in n) ? [t] : Ue(t);
            if (l._targets = M.length ? oe(M) : Y("GSAP target " + t + " not found. https://greensock.com", !y.nullTargetWarn) || [],
            l._ptLookup = [],
            l._overwrite = T,
            E || C || L(D) || L(x)) {
                if (n = l.vars,
                (u = l.timeline = new At({
                    data: "nested",
                    defaults: _ || {}
                })).kill(),
                u.parent = u._dp = r(l),
                u._start = 0,
                C || L(D) || L(x)) {
                    if (p = M.length,
                    g = C && Qe(C),
                    P(C))
                        for (f in C)
                            ~Nt.indexOf(f) && (m || (m = {}),
                            m[f] = C[f]);
                    for (c = 0; c < p; c++)
                        (d = be(n, jt)).stagger = 0,
                        k && (d.yoyoEase = k),
                        m && ye(d, m),
                        h = M[c],
                        d.duration = +Bt(D, r(l), c, h, M),
                        d.delay = (+Bt(x, r(l), c, h, M) || 0) - l._delay,
                        !C && 1 === p && d.delay && (l._delay = x = d.delay,
                        l._start += x,
                        d.delay = 0),
                        u.to(h, d, g ? g(c, h, M) : 0),
                        u._ease = vt.none;
                    u.duration() ? D = x = 0 : l.timeline = 0
                } else if (E) {
                    xe(ve(u.vars.defaults, {
                        ease: "none"
                    })),
                    u._ease = Ct(E.ease || n.ease || "none");
                    var $, j, I, R = 0;
                    if (N(E))
                        E.forEach(function(e) {
                            return u.to(M, e, ">")
                        });
                    else {
                        for (f in d = {},
                        E)
                            "ease" === f || "easeEach" === f || Lt(f, E[f], d, E.easeEach);
                        for (f in d)
                            for ($ = d[f].sort(function(e, t) {
                                return e.t - t.t
                            }),
                            R = 0,
                            c = 0; c < $.length; c++)
                                (I = {
                                    ease: (j = $[c]).e,
                                    duration: (j.t - (c ? $[c - 1].t : 0)) / 100 * D
                                })[f] = j.v,
                                u.to(M, I, R),
                                R += I.duration;
                        u.duration() < D && u.to({}, {
                            duration: D - u.duration()
                        })
                    }
                }
                D || l.duration(D = u.duration())
            } else
                l.timeline = 0;
            return !0 !== T || s || (Pt = r(l),
            o.killTweensOf(M),
            Pt = 0),
            Me(A, r(l), i),
            n.reversed && l.reverse(),
            n.paused && l.paused(!0),
            (w || !D && !E && l._start === de(A._time) && O(w) && _e(r(l)) && "nested" !== A.data) && (l._tTime = -b,
            l.render(Math.max(0, -x))),
            S && $e(r(l), S),
            l
        }
        i(t, e);
        var n = t.prototype;
        return n.render = function(e, t, n) {
            var r, i, s, o, a, l, u, c, d, p = this._time, f = this._tDur, h = this._dur, g = e > f - b && e >= 0 ? f : e < b ? 0 : e;
            if (h) {
                if (g !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != e < 0) {
                    if (r = g,
                    c = this.timeline,
                    this._repeat) {
                        if (o = h + this._rDelay,
                        this._repeat < -1 && e < 0)
                            return this.totalTime(100 * o + e, t, n);
                        if (r = de(g % o),
                        g === f ? (s = this._repeat,
                        r = h) : ((s = ~~(g / o)) && s === g / o && (r = h,
                        s--),
                        r > h && (r = h)),
                        (l = this._yoyo && 1 & s) && (d = this._yEase,
                        r = h - r),
                        a = ke(this._tTime, o),
                        r === p && !n && this._initted)
                            return this;
                        s !== a && (c && this._yEase && wt(c, l),
                        !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1,
                        this.render(de(o * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Le(this, e < 0 ? e : r, n, t))
                            return this._tTime = 0,
                            this;
                        if (h !== this._dur)
                            return this.render(e, t, n)
                    }
                    if (this._tTime = g,
                    this._time = r,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = u = (d || this._ease)(r / h),
                    this._from && (this.ratio = u = 1 - u),
                    r && !p && !t && (it(this, "onStart"),
                    this._tTime !== g))
                        return this;
                    for (i = this._pt; i; )
                        i.r(u, i.d),
                        i = i._next;
                    c && c.render(e < 0 ? e : !r && l ? -b : c._dur * c._ease(r / this._dur), t, n) || this._startAt && (this._zTime = e),
                    this._onUpdate && !t && (e < 0 && this._startAt && this._startAt.render(e, !0, n),
                    it(this, "onUpdate")),
                    this._repeat && s !== a && this.vars.onRepeat && !t && this.parent && it(this, "onRepeat"),
                    g !== this._tDur && g || this._tTime !== g || (e < 0 && this._startAt && !this._onUpdate && this._startAt.render(e, !0, !0),
                    (e || !h) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Ce(this, 1),
                    t || e < 0 && !p || !g && !p || (it(this, g === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(g < f && this.timeScale() > 0) && this._prom()))
                }
            } else
                !function(e, t, n, r) {
                    var i, s, o, a = e.ratio, l = t < 0 || !t && (!e._start && function e(t) {
                        var n = t.parent;
                        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
                    }(e) && (e._initted || !Be(e)) || (e._ts < 0 || e._dp._ts < 0) && !Be(e)) ? 0 : 1, u = e._rDelay, c = 0;
                    if (u && e._repeat && (c = He(0, e._tDur, t),
                    s = ke(c, u),
                    e._yoyo && 1 & s && (l = 1 - l),
                    s !== ke(e._tTime, u) && (a = 1 - l,
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
                    l !== a || r || e._zTime === b || !t && e._zTime) {
                        if (!e._initted && Le(e, t, r, n))
                            return;
                        for (o = e._zTime,
                        e._zTime = t || (n ? b : 0),
                        n || (n = t && !o),
                        e.ratio = l,
                        e._from && (l = 1 - l),
                        e._time = 0,
                        e._tTime = c,
                        i = e._pt; i; )
                            i.r(l, i.d),
                            i = i._next;
                        e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                        e._onUpdate && !n && it(e, "onUpdate"),
                        c && e._repeat && !n && e.parent && it(e, "onRepeat"),
                        (t >= e._tDur || t < 0) && e.ratio === l && (l && Ce(e, 1),
                        n || (it(e, l ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()))
                    } else
                        e._zTime || (e._zTime = t)
                }(this, e, t, n);
            return this
        }
        ,
        n.targets = function() {
            return this._targets
        }
        ,
        n.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            e.prototype.invalidate.call(this)
        }
        ,
        n.kill = function(e, t) {
            if (void 0 === t && (t = "all"),
            !(e || t && "all" !== t))
                return this._lazy = this._pt = 0,
                this.parent ? st(this) : this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(e, t, Pt && !0 !== Pt.vars.overwrite)._first || st(this),
                this.parent && n !== this.timeline.totalDuration() && Ne(this, this._dur * this.timeline._tDur / n, 0, 1),
                this
            }
            var r, i, s, o, a, l, u, c = this._targets, d = e ? Ue(e) : c, p = this._ptLookup, f = this._pt;
            if ((!t || "all" === t) && function(e, t) {
                for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; )
                    ;
                return n < 0
            }(c, d))
                return "all" === t && (this._pt = 0),
                st(this);
            for (r = this._op = this._op || [],
            "all" !== t && (S(t) && (a = {},
            ue(t, function(e) {
                return a[e] = 1
            }),
            t = a),
            t = function(e, t) {
                var n, r, i, s, o = e[0] ? ae(e[0]).harness : 0, a = o && o.aliases;
                if (!a)
                    return t;
                for (r in n = ye({}, t),
                a)
                    if (r in n)
                        for (i = (s = a[r].split(",")).length; i--; )
                            n[s[i]] = n[r];
                return n
            }(c, t)),
            u = c.length; u--; )
                if (~d.indexOf(c[u]))
                    for (a in i = p[u],
                    "all" === t ? (r[u] = t,
                    o = i,
                    s = {}) : (s = r[u] = r[u] || {},
                    o = t),
                    o)
                        (l = i && i[a]) && ("kill"in l.d && !0 !== l.d.kill(a) || we(this, l, "_pt"),
                        delete i[a]),
                        "all" !== s && (s[a] = 1);
            return this._initted && !this._pt && f && st(this),
            this
        }
        ,
        t.to = function(e, n) {
            return new t(e,n,arguments[2])
        }
        ,
        t.from = function(e, t) {
            return ze(1, arguments)
        }
        ,
        t.delayedCall = function(e, n, r, i) {
            return new t(n,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }
        ,
        t.fromTo = function(e, t, n) {
            return ze(2, arguments)
        }
        ,
        t.set = function(e, n) {
            return n.duration = 0,
            n.repeatDelay || (n.repeat = 0),
            new t(e,n)
        }
        ,
        t.killTweensOf = function(e, t, n) {
            return o.killTweensOf(e, t, n)
        }
        ,
        t
    }(Ft);
    ve(It.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    ue("staggerTo,staggerFrom,staggerFromTo", function(e) {
        It[e] = function() {
            var t = new At
              , n = Ge.call(arguments, 0);
            return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0),
            t[e].apply(t, n)
        }
    });
    var Rt = function(e, t, n) {
        return e[t] = n
    }
      , zt = function(e, t, n) {
        return e[t](n)
    }
      , qt = function(e, t, n, r) {
        return e[t](r.fp, n)
    }
      , Ht = function(e, t, n) {
        return e.setAttribute(t, n)
    }
      , Wt = function(e, t) {
        return k(e[t]) ? zt : A(e[t]) && e.setAttribute ? Ht : Rt
    }
      , Gt = function(e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
    }
      , Xt = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }
      , Vt = function(e, t) {
        var n = t._pt
          , r = "";
        if (!e && t.b)
            r = t.b;
        else if (1 === e && t.e)
            r = t.e;
        else {
            for (; n; )
                r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + r,
                n = n._next;
            r += t.c
        }
        t.set(t.t, t.p, r, t)
    }
      , Ut = function(e, t) {
        for (var n = t._pt; n; )
            n.r(e, n.d),
            n = n._next
    }
      , Yt = function(e, t, n, r) {
        for (var i, s = this._pt; s; )
            i = s._next,
            s.p === r && s.modifier(e, t, n),
            s = i
    }
      , Qt = function(e) {
        for (var t, n, r = this._pt; r; )
            n = r._next,
            r.p === e && !r.op || r.op === e ? we(this, r, "_pt") : r.dep || (t = 1),
            r = n;
        return !t
    }
      , Kt = function(e, t, n, r) {
        r.mSet(e, t, r.m.call(r.tween, n, r.mt), r)
    }
      , Jt = function(e) {
        for (var t, n, r, i, s = e._pt; s; ) {
            for (t = s._next,
            n = r; n && n.pr > s.pr; )
                n = n._next;
            (s._prev = n ? n._prev : i) ? s._prev._next = s : r = s,
            (s._next = n) ? n._prev = s : i = s,
            s = t
        }
        e._pt = r
    }
      , Zt = function() {
        function e(e, t, n, r, i, s, o, a, l) {
            this.t = t,
            this.s = r,
            this.c = i,
            this.p = n,
            this.r = s || Gt,
            this.d = o || this,
            this.set = a || Rt,
            this.pr = l || 0,
            this._next = e,
            e && (e._prev = this)
        }
        return e.prototype.modifier = function(e, t, n) {
            this.mSet = this.mSet || this.set,
            this.set = Kt,
            this.m = e,
            this.mt = n,
            this.tween = t
        }
        ,
        e
    }();
    ue(se + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return J[e] = 1
    }),
    G.TweenMax = G.TweenLite = It,
    G.TimelineLite = G.TimelineMax = At,
    o = new At({
        sortChildren: !1,
        defaults: D,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    y.stringFilter = ht;
    var en = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            t.forEach(function(e) {
                return ot(e)
            })
        },
        timeline: function(e) {
            return new At(e)
        },
        getTweensOf: function(e, t) {
            return o.getTweensOf(e, t)
        },
        getProperty: function(e, t, n, r) {
            S(e) && (e = Ue(e)[0]);
            var i = ae(e || {}).get
              , s = n ? me : ge;
            return "native" === n && (n = ""),
            e ? t ? s((te[t] && te[t].get || i)(e, t, n, r)) : function(t, n, r) {
                return s((te[t] && te[t].get || i)(e, t, n, r))
            }
            : e
        },
        quickSetter: function(e, t, n) {
            if ((e = Ue(e)).length > 1) {
                var r = e.map(function(e) {
                    return rn.quickSetter(e, t, n)
                })
                  , i = r.length;
                return function(e) {
                    for (var t = i; t--; )
                        r[t](e)
                }
            }
            e = e[0] || {};
            var s = te[t]
              , o = ae(e)
              , a = o.harness && (o.harness.aliases || {})[t] || t
              , l = s ? function(t) {
                var r = new s;
                p._pt = 0,
                r.init(e, n ? t + n : t, p, 0, [e]),
                r.render(1, r),
                p._pt && Ut(1, p)
            }
            : o.set(e, a);
            return s ? l : function(t) {
                return l(e, a, n ? t + n : t, o, 1)
            }
        },
        isTweening: function(e) {
            return o.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Ct(e.ease, D.ease)),
            De(D, e || {})
        },
        config: function(e) {
            return De(y, e || {})
        },
        registerEffect: function(e) {
            var t = e.name
              , n = e.effect
              , r = e.plugins
              , i = e.defaults
              , s = e.extendTimeline;
            (r || "").split(",").forEach(function(e) {
                return e && !te[e] && !G[e] && Y(t + " effect requires " + e + " plugin.")
            }),
            ne[t] = function(e, t, r) {
                return n(Ue(e), ve(t || {}, i), r)
            }
            ,
            s && (At.prototype[t] = function(e, n, r) {
                return this.add(ne[t](e, P(n) ? n : (r = n) && {}, this), r)
            }
            )
        },
        registerEase: function(e, t) {
            vt[e] = Ct(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Ct(e, t) : vt
        },
        getById: function(e) {
            return o.getById(e)
        },
        exportRoot: function(e, t) {
            void 0 === e && (e = {});
            var n, r, i = new At(e);
            for (i.smoothChildTiming = O(e.smoothChildTiming),
            o.remove(i),
            i._dp = 0,
            i._time = i._tTime = o._time,
            n = o._first; n; )
                r = n._next,
                !t && !n._dur && n instanceof It && n.vars.onComplete === n._targets[0] || Me(i, n, n._start - n._delay),
                n = r;
            return Me(o, i, 0),
            i
        },
        utils: {
            wrap: function e(t, n, r) {
                var i = n - t;
                return N(t) ? et(t, e(0, t.length), n) : qe(r, function(e) {
                    return (i + (e - t) % i) % i + t
                })
            },
            wrapYoyo: function e(t, n, r) {
                var i = n - t
                  , s = 2 * i;
                return N(t) ? et(t, e(0, t.length - 1), n) : qe(r, function(e) {
                    return t + ((e = (s + (e - t) % s) % s || 0) > i ? s - e : e)
                })
            },
            distribute: Qe,
            random: Ze,
            snap: Je,
            normalize: function(e, t, n) {
                return nt(e, t, 0, 1, n)
            },
            getUnit: We,
            clamp: function(e, t, n) {
                return qe(n, function(n) {
                    return He(e, t, n)
                })
            },
            splitColor: ut,
            toArray: Ue,
            selector: function(e) {
                return e = Ue(e)[0] || Y("Invalid scope") || {},
                function(t) {
                    var n = e.current || e.nativeElement || e;
                    return Ue(t, n.querySelectorAll ? n : n === e ? Y("Invalid scope") || u.createElement("div") : e)
                }
            },
            mapRange: nt,
            pipe: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function(e) {
                    return t.reduce(function(e, t) {
                        return t(e)
                    }, e)
                }
            },
            unitize: function(e, t) {
                return function(n) {
                    return e(parseFloat(n)) + (t || We(n))
                }
            },
            interpolate: function e(t, n, r, i) {
                var s = isNaN(t + n) ? 0 : function(e) {
                    return (1 - e) * t + e * n
                }
                ;
                if (!s) {
                    var o, a, l, u, c, d = S(t), p = {};
                    if (!0 === r && (i = 1) && (r = null),
                    d)
                        t = {
                            p: t
                        },
                        n = {
                            p: n
                        };
                    else if (N(t) && !N(n)) {
                        for (l = [],
                        u = t.length,
                        c = u - 2,
                        a = 1; a < u; a++)
                            l.push(e(t[a - 1], t[a]));
                        u--,
                        s = function(e) {
                            e *= u;
                            var t = Math.min(c, ~~e);
                            return l[t](e - t)
                        }
                        ,
                        r = n
                    } else
                        i || (t = ye(N(t) ? [] : {}, t));
                    if (!l) {
                        for (o in n)
                            Ot.call(p, t, o, "get", n[o]);
                        s = function(e) {
                            return Ut(e, p) || (d ? t.p : t)
                        }
                    }
                }
                return qe(r, s)
            },
            shuffle: Ye
        },
        install: V,
        effects: ne,
        ticker: gt,
        updateRoot: At.updateRoot,
        plugins: te,
        globalTimeline: o,
        core: {
            PropTween: Zt,
            globals: Q,
            Tween: It,
            Timeline: At,
            Animation: Ft,
            getCache: ae,
            _removeLinkedListItem: we,
            suppressOverwrites: function(e) {
                return s = e
            }
        }
    };
    ue("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return en[e] = It[e]
    }),
    gt.add(At.updateRoot),
    p = en.to({}, {
        duration: 0
    });
    var tn = function(e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
        return n
    }
      , nn = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(e, n, r) {
                r._onInit = function(e) {
                    var r, i;
                    if (S(n) && (r = {},
                    ue(n, function(e) {
                        return r[e] = 1
                    }),
                    n = r),
                    t) {
                        for (i in r = {},
                        n)
                            r[i] = t(n[i]);
                        n = r
                    }
                    !function(e, t) {
                        var n, r, i, s = e._targets;
                        for (n in t)
                            for (r = s.length; r--; )
                                (i = e._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = tn(i, n)),
                                i && i.modifier && i.modifier(t[n], e, s[r], n))
                    }(e, n)
                }
            }
        }
    }
      , rn = en.registerPlugin({
        name: "attr",
        init: function(e, t, n, r, i) {
            var s, o;
            for (s in t)
                (o = this.add(e, "setAttribute", (e.getAttribute(s) || 0) + "", t[s], r, i, 0, 0, s)) && (o.op = s),
                this._props.push(s)
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var n = t.length; n--; )
                this.add(e, n, e[n] || 0, t[n])
        }
    }, nn("roundProps", Ke), nn("modifiers"), nn("snap", Je)) || en;
    It.version = At.version = rn.version = "3.9.1",
    c = 1,
    M() && mt();
    vt.Power0,
    vt.Power1,
    vt.Power2,
    vt.Power3,
    vt.Power4,
    vt.Linear,
    vt.Quad,
    vt.Cubic,
    vt.Quart,
    vt.Quint,
    vt.Strong,
    vt.Elastic,
    vt.Back,
    vt.SteppedEase,
    vt.Bounce,
    vt.Sine,
    vt.Expo,
    vt.Circ;
    /*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var sn, on, an, ln, un, cn, dn, pn = {}, fn = 180 / Math.PI, hn = Math.PI / 180, gn = Math.atan2, mn = /([A-Z])/g, vn = /(?:left|right|width|margin|padding|x)/i, yn = /[\s,\(]\S/, Dn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, bn = function(e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }, xn = function(e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }, wn = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
    }, Cn = function(e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
    }, Tn = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }, En = function(e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    }, _n = function(e, t, n) {
        return e.style[t] = n
    }, Sn = function(e, t, n) {
        return e.style.setProperty(t, n)
    }, kn = function(e, t, n) {
        return e._gsap[t] = n
    }, Fn = function(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }, An = function(e, t, n, r, i) {
        var s = e._gsap;
        s.scaleX = s.scaleY = n,
        s.renderTransform(i, s)
    }, Pn = function(e, t, n, r, i) {
        var s = e._gsap;
        s[t] = n,
        s.renderTransform(i, s)
    }, On = "transform", Mn = On + "Origin", $n = function(e, t) {
        var n = on.createElementNS ? on.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : on.createElement(e);
        return n.style ? n : on.createElement(e)
    }, Ln = function e(t, n, r) {
        var i = getComputedStyle(t);
        return i[n] || i.getPropertyValue(n.replace(mn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, Nn(n) || n, 1) || ""
    }, Bn = "O,Moz,ms,Ms,Webkit".split(","), Nn = function(e, t, n) {
        var r = (t || un).style
          , i = 5;
        if (e in r && !n)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Bn[i] + e in r); )
            ;
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Bn[i] : "") + e
    }, jn = function() {
        "undefined" != typeof window && window.document && (sn = window,
        on = sn.document,
        an = on.documentElement,
        un = $n("div") || {
            style: {}
        },
        $n("div"),
        On = Nn(On),
        Mn = On + "Origin",
        un.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        dn = !!Nn("perspective"),
        ln = 1)
    }, In = function e(t) {
        var n, r = $n("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, s = this.nextSibling, o = this.style.cssText;
        if (an.appendChild(r),
        r.appendChild(this),
        this.style.display = "block",
        t)
            try {
                n = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = e
            } catch (e) {}
        else
            this._gsapBBox && (n = this._gsapBBox());
        return i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
        an.removeChild(r),
        this.style.cssText = o,
        n
    }, Rn = function(e, t) {
        for (var n = t.length; n--; )
            if (e.hasAttribute(t[n]))
                return e.getAttribute(t[n])
    }, zn = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch (n) {
            t = In.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === In || (t = In.call(e, !0)),
        !t || t.width || t.x || t.y ? t : {
            x: +Rn(e, ["x", "cx", "x1"]) || 0,
            y: +Rn(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, qn = function(e) {
        return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !zn(e))
    }, Hn = function(e, t) {
        if (t) {
            var n = e.style;
            t in pn && t !== Mn && (t = On),
            n.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t),
            n.removeProperty(t.replace(mn, "-$1").toLowerCase())) : n.removeAttribute(t)
        }
    }, Wn = function(e, t, n, r, i, s) {
        var o = new Zt(e._pt,t,n,0,1,s ? En : Tn);
        return e._pt = o,
        o.b = r,
        o.e = i,
        e._props.push(n),
        o
    }, Gn = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Xn = function e(t, n, r, i) {
        var s, o, a, l, u = parseFloat(r) || 0, c = (r + "").trim().substr((u + "").length) || "px", d = un.style, p = vn.test(n), f = "svg" === t.tagName.toLowerCase(), h = (f ? "client" : "offset") + (p ? "Width" : "Height"), g = "px" === i, m = "%" === i;
        return i === c || !u || Gn[i] || Gn[c] ? u : ("px" !== c && !g && (u = e(t, n, r, "px")),
        l = t.getCTM && qn(t),
        !m && "%" !== c || !pn[n] && !~n.indexOf("adius") ? (d[p ? "width" : "height"] = 100 + (g ? c : i),
        o = ~n.indexOf("adius") || "em" === i && t.appendChild && !f ? t : t.parentNode,
        l && (o = (t.ownerSVGElement || {}).parentNode),
        o && o !== on && o.appendChild || (o = on.body),
        (a = o._gsap) && m && a.width && p && a.time === gt.time ? ce(u / a.width * 100) : ((m || "%" === c) && (d.position = Ln(t, "position")),
        o === t && (d.position = "static"),
        o.appendChild(un),
        s = un[h],
        o.removeChild(un),
        d.position = "absolute",
        p && m && ((a = ae(o)).time = gt.time,
        a.width = o[h]),
        ce(g ? s * u / 100 : s && u ? 100 / s * u : 0))) : (s = l ? t.getBBox()[p ? "width" : "height"] : t[h],
        ce(m ? u / s * 100 : u / 100 * s)))
    }, Vn = function(e, t, n, r) {
        var i;
        return ln || jn(),
        t in Dn && "transform" !== t && ~(t = Dn[t]).indexOf(",") && (t = t.split(",")[0]),
        pn[t] && "transform" !== t ? (i = ir(e, r),
        i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : sr(Ln(e, Mn)) + " " + i.zOrigin + "px") : (!(i = e.style[t]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = Kn[t] && Kn[t](e, t, n) || Ln(e, t) || le(e, t) || ("opacity" === t ? 1 : 0)),
        n && !~(i + "").trim().indexOf(" ") ? Xn(e, t, i, n) + n : i
    }, Un = function(e, t, n, r) {
        if (!n || "none" === n) {
            var i = Nn(t, e, 1)
              , s = i && Ln(e, i, 1);
            s && s !== n ? (t = i,
            n = s) : "borderColor" === t && (n = Ln(e, "borderTopColor"))
        }
        var o, a, l, u, c, d, p, f, h, g, m, v, D = new Zt(this._pt,e.style,t,0,1,Vt), b = 0, x = 0;
        if (D.b = n,
        D.e = r,
        n += "",
        "auto" === (r += "") && (e.style[t] = r,
        r = Ln(e, t) || r,
        e.style[t] = n),
        ht(o = [n, r]),
        r = o[1],
        l = (n = o[0]).match(R) || [],
        (r.match(R) || []).length) {
            for (; a = R.exec(r); )
                p = a[0],
                h = r.substring(b, a.index),
                c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1),
                p !== (d = l[x++] || "") && (u = parseFloat(d) || 0,
                m = d.substr((u + "").length),
                (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                f = parseFloat(p),
                g = p.substr((f + "").length),
                b = R.lastIndex - g.length,
                g || (g = g || y.units[t] || m,
                b === r.length && (r += g,
                D.e += g)),
                m !== g && (u = Xn(e, t, d, g) || 0),
                D._pt = {
                    _next: D._pt,
                    p: h || 1 === x ? h : ",",
                    s: u,
                    c: v ? v * f : f - u,
                    m: c && c < 4 || "zIndex" === t ? Math.round : 0
                });
            D.c = b < r.length ? r.substring(b, r.length) : ""
        } else
            D.r = "display" === t && "none" === r ? En : Tn;
        return q.test(r) && (D.e = 0),
        this._pt = D,
        D
    }, Yn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Qn = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n, r, i, s = t.t, o = s.style, a = t.u, l = s._gsap;
            if ("all" === a || !0 === a)
                o.cssText = "",
                r = 1;
            else
                for (i = (a = a.split(",")).length; --i > -1; )
                    n = a[i],
                    pn[n] && (r = 1,
                    n = "transformOrigin" === n ? Mn : On),
                    Hn(s, n);
            r && (Hn(s, On),
            l && (l.svg && s.removeAttribute("transform"),
            ir(s, 1),
            l.uncache = 1))
        }
    }, Kn = {
        clearProps: function(e, t, n, r, i) {
            if ("isFromStart" !== i.data) {
                var s = e._pt = new Zt(e._pt,t,n,0,0,Qn);
                return s.u = r,
                s.pr = -10,
                s.tween = i,
                e._props.push(n),
                1
            }
        }
    }, Jn = [1, 0, 0, 1, 0, 0], Zn = {}, er = function(e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    }, tr = function(e) {
        var t = Ln(e, On);
        return er(t) ? Jn : t.substr(7).match(I).map(ce)
    }, nr = function(e, t) {
        var n, r, i, s, o = e._gsap || ae(e), a = e.style, l = tr(e);
        return o.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Jn : l : (l !== Jn || e.offsetParent || e === an || o.svg || (i = a.display,
        a.display = "block",
        (n = e.parentNode) && e.offsetParent || (s = 1,
        r = e.nextSibling,
        an.appendChild(e)),
        l = tr(e),
        i ? a.display = i : Hn(e, "display"),
        s && (r ? n.insertBefore(e, r) : n ? n.appendChild(e) : an.removeChild(e))),
        t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, rr = function(e, t, n, r, i, s) {
        var o, a, l, u = e._gsap, c = i || nr(e, !0), d = u.xOrigin || 0, p = u.yOrigin || 0, f = u.xOffset || 0, h = u.yOffset || 0, g = c[0], m = c[1], v = c[2], y = c[3], D = c[4], b = c[5], x = t.split(" "), w = parseFloat(x[0]) || 0, C = parseFloat(x[1]) || 0;
        n ? c !== Jn && (a = g * y - m * v) && (l = w * (-m / a) + C * (g / a) - (g * b - m * D) / a,
        w = w * (y / a) + C * (-v / a) + (v * b - y * D) / a,
        C = l) : (w = (o = zn(e)).x + (~x[0].indexOf("%") ? w / 100 * o.width : w),
        C = o.y + (~(x[1] || x[0]).indexOf("%") ? C / 100 * o.height : C)),
        r || !1 !== r && u.smooth ? (D = w - d,
        b = C - p,
        u.xOffset = f + (D * g + b * v) - D,
        u.yOffset = h + (D * m + b * y) - b) : u.xOffset = u.yOffset = 0,
        u.xOrigin = w,
        u.yOrigin = C,
        u.smooth = !!r,
        u.origin = t,
        u.originIsAbsolute = !!n,
        e.style[Mn] = "0px 0px",
        s && (Wn(s, u, "xOrigin", d, w),
        Wn(s, u, "yOrigin", p, C),
        Wn(s, u, "xOffset", f, u.xOffset),
        Wn(s, u, "yOffset", h, u.yOffset)),
        e.setAttribute("data-svg-origin", w + " " + C)
    }, ir = function(e, t) {
        var n = e._gsap || new kt(e);
        if ("x"in n && !t && !n.uncache)
            return n;
        var r, i, s, o, a, l, u, c, d, p, f, h, g, m, v, D, b, x, w, C, T, E, _, S, k, F, A, P, O, M, $, L, B = e.style, N = n.scaleX < 0, j = Ln(e, Mn) || "0";
        return r = i = s = l = u = c = d = p = f = 0,
        o = a = 1,
        n.svg = !(!e.getCTM || !qn(e)),
        m = nr(e, n.svg),
        n.svg && (S = (!n.uncache || "0px 0px" === j) && !t && e.getAttribute("data-svg-origin"),
        rr(e, S || j, !!S || n.originIsAbsolute, !1 !== n.smooth, m)),
        h = n.xOrigin || 0,
        g = n.yOrigin || 0,
        m !== Jn && (x = m[0],
        w = m[1],
        C = m[2],
        T = m[3],
        r = E = m[4],
        i = _ = m[5],
        6 === m.length ? (o = Math.sqrt(x * x + w * w),
        a = Math.sqrt(T * T + C * C),
        l = x || w ? gn(w, x) * fn : 0,
        (d = C || T ? gn(C, T) * fn + l : 0) && (a *= Math.abs(Math.cos(d * hn))),
        n.svg && (r -= h - (h * x + g * C),
        i -= g - (h * w + g * T))) : (L = m[6],
        M = m[7],
        A = m[8],
        P = m[9],
        O = m[10],
        $ = m[11],
        r = m[12],
        i = m[13],
        s = m[14],
        u = (v = gn(L, O)) * fn,
        v && (S = E * (D = Math.cos(-v)) + A * (b = Math.sin(-v)),
        k = _ * D + P * b,
        F = L * D + O * b,
        A = E * -b + A * D,
        P = _ * -b + P * D,
        O = L * -b + O * D,
        $ = M * -b + $ * D,
        E = S,
        _ = k,
        L = F),
        c = (v = gn(-C, O)) * fn,
        v && (D = Math.cos(-v),
        $ = T * (b = Math.sin(-v)) + $ * D,
        x = S = x * D - A * b,
        w = k = w * D - P * b,
        C = F = C * D - O * b),
        l = (v = gn(w, x)) * fn,
        v && (S = x * (D = Math.cos(v)) + w * (b = Math.sin(v)),
        k = E * D + _ * b,
        w = w * D - x * b,
        _ = _ * D - E * b,
        x = S,
        E = k),
        u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0,
        c = 180 - c),
        o = ce(Math.sqrt(x * x + w * w + C * C)),
        a = ce(Math.sqrt(_ * _ + L * L)),
        v = gn(E, _),
        d = Math.abs(v) > 2e-4 ? v * fn : 0,
        f = $ ? 1 / ($ < 0 ? -$ : $) : 0),
        n.svg && (S = e.getAttribute("transform"),
        n.forceCSS = e.setAttribute("transform", "") || !er(Ln(e, On)),
        S && e.setAttribute("transform", S))),
        Math.abs(d) > 90 && Math.abs(d) < 270 && (N ? (o *= -1,
        d += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (a *= -1,
        d += d <= 0 ? 180 : -180)),
        n.x = r - ((n.xPercent = r && (n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + "px",
        n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + "px",
        n.z = s + "px",
        n.scaleX = ce(o),
        n.scaleY = ce(a),
        n.rotation = ce(l) + "deg",
        n.rotationX = ce(u) + "deg",
        n.rotationY = ce(c) + "deg",
        n.skewX = d + "deg",
        n.skewY = p + "deg",
        n.transformPerspective = f + "px",
        (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (B[Mn] = sr(j)),
        n.xOffset = n.yOffset = 0,
        n.force3D = y.force3D,
        n.renderTransform = n.svg ? ur : dn ? lr : ar,
        n.uncache = 0,
        n
    }, sr = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, or = function(e, t, n) {
        var r = We(t);
        return ce(parseFloat(t) + parseFloat(Xn(e, "x", n + "px", r))) + r
    }, ar = function(e, t) {
        t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        lr(e, t)
    }, lr = function(e, t) {
        var n = t || this
          , r = n.xPercent
          , i = n.yPercent
          , s = n.x
          , o = n.y
          , a = n.z
          , l = n.rotation
          , u = n.rotationY
          , c = n.rotationX
          , d = n.skewX
          , p = n.skewY
          , f = n.scaleX
          , h = n.scaleY
          , g = n.transformPerspective
          , m = n.force3D
          , v = n.target
          , y = n.zOrigin
          , D = ""
          , b = "auto" === m && e && 1 !== e || !0 === m;
        if (y && ("0deg" !== c || "0deg" !== u)) {
            var x, w = parseFloat(u) * hn, C = Math.sin(w), T = Math.cos(w);
            w = parseFloat(c) * hn,
            x = Math.cos(w),
            s = or(v, s, C * x * -y),
            o = or(v, o, -Math.sin(w) * -y),
            a = or(v, a, T * x * -y + y)
        }
        "0px" !== g && (D += "perspective(" + g + ") "),
        (r || i) && (D += "translate(" + r + "%, " + i + "%) "),
        (b || "0px" !== s || "0px" !== o || "0px" !== a) && (D += "0px" !== a || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "),
        "0deg" !== l && (D += "rotate(" + l + ") "),
        "0deg" !== u && (D += "rotateY(" + u + ") "),
        "0deg" !== c && (D += "rotateX(" + c + ") "),
        "0deg" === d && "0deg" === p || (D += "skew(" + d + ", " + p + ") "),
        1 === f && 1 === h || (D += "scale(" + f + ", " + h + ") "),
        v.style[On] = D || "translate(0, 0)"
    }, ur = function(e, t) {
        var n, r, i, s, o, a = t || this, l = a.xPercent, u = a.yPercent, c = a.x, d = a.y, p = a.rotation, f = a.skewX, h = a.skewY, g = a.scaleX, m = a.scaleY, v = a.target, y = a.xOrigin, D = a.yOrigin, b = a.xOffset, x = a.yOffset, w = a.forceCSS, C = parseFloat(c), T = parseFloat(d);
        p = parseFloat(p),
        f = parseFloat(f),
        (h = parseFloat(h)) && (f += h = parseFloat(h),
        p += h),
        p || f ? (p *= hn,
        f *= hn,
        n = Math.cos(p) * g,
        r = Math.sin(p) * g,
        i = Math.sin(p - f) * -m,
        s = Math.cos(p - f) * m,
        f && (h *= hn,
        o = Math.tan(f - h),
        i *= o = Math.sqrt(1 + o * o),
        s *= o,
        h && (o = Math.tan(h),
        n *= o = Math.sqrt(1 + o * o),
        r *= o)),
        n = ce(n),
        r = ce(r),
        i = ce(i),
        s = ce(s)) : (n = g,
        s = m,
        r = i = 0),
        (C && !~(c + "").indexOf("px") || T && !~(d + "").indexOf("px")) && (C = Xn(v, "x", c, "px"),
        T = Xn(v, "y", d, "px")),
        (y || D || b || x) && (C = ce(C + y - (y * n + D * i) + b),
        T = ce(T + D - (y * r + D * s) + x)),
        (l || u) && (o = v.getBBox(),
        C = ce(C + l / 100 * o.width),
        T = ce(T + u / 100 * o.height)),
        o = "matrix(" + n + "," + r + "," + i + "," + s + "," + C + "," + T + ")",
        v.setAttribute("transform", o),
        w && (v.style[On] = o)
    }, cr = function(e, t, n, r, i, s) {
        var o, a, l = S(i), u = parseFloat(i) * (l && ~i.indexOf("rad") ? fn : 1), c = s ? u * s : u - r, d = r + c + "deg";
        return l && ("short" === (o = i.split("_")[1]) && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360),
        "cw" === o && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === o && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))),
        e._pt = a = new Zt(e._pt,t,n,r,c,xn),
        a.e = d,
        a.u = "deg",
        e._props.push(n),
        a
    }, dr = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }, pr = function(e, t, n) {
        var r, i, s, o, a, l, u, c = dr({}, n._gsap), d = n.style;
        for (i in c.svg ? (s = n.getAttribute("transform"),
        n.setAttribute("transform", ""),
        d[On] = t,
        r = ir(n, 1),
        Hn(n, On),
        n.setAttribute("transform", s)) : (s = getComputedStyle(n)[On],
        d[On] = t,
        r = ir(n, 1),
        d[On] = s),
        pn)
            (s = c[i]) !== (o = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = We(s) !== (u = We(o)) ? Xn(n, i, s, u) : parseFloat(s),
            l = parseFloat(o),
            e._pt = new Zt(e._pt,r,i,a,l - a,bn),
            e._pt.u = u || 0,
            e._props.push(i));
        dr(r, c)
    };
    ue("padding,margin,Width,Radius", function(e, t) {
        var n = "Top"
          , r = "Right"
          , i = "Bottom"
          , s = "Left"
          , o = (t < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(n) {
            return t < 2 ? e + n : "border" + n + e
        });
        Kn[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
            var s, a;
            if (arguments.length < 4)
                return s = o.map(function(t) {
                    return Vn(e, t, n)
                }),
                5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (r + "").split(" "),
            a = {},
            o.forEach(function(e, t) {
                return a[e] = s[t] = s[t] || s[(t - 1) / 2 | 0]
            }),
            e.init(t, a, i)
        }
    });
    var fr, hr, gr = {
        name: "css",
        register: jn,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, n, r, i) {
            var s, o, a, l, u, c, d, p, f, h, g, m, v, D, b, x, w, C, T, E = this._props, _ = e.style, k = n.vars.startAt;
            for (d in ln || jn(),
            t)
                if ("autoRound" !== d && (o = t[d],
                !te[d] || !Mt(d, t, n, r, e, i)))
                    if (u = typeof o,
                    c = Kn[d],
                    "function" === u && (u = typeof (o = o.call(n, r, e, i))),
                    "string" === u && ~o.indexOf("random(") && (o = tt(o)),
                    c)
                        c(this, e, d, o, n) && (b = 1);
                    else if ("--" === d.substr(0, 2))
                        s = (getComputedStyle(e).getPropertyValue(d) + "").trim(),
                        o += "",
                        pt.lastIndex = 0,
                        pt.test(s) || (p = We(s),
                        f = We(o)),
                        f ? p !== f && (s = Xn(e, d, s, f) + f) : p && (o += p),
                        this.add(_, "setProperty", s, o, r, i, 0, 0, d),
                        E.push(d);
                    else if ("undefined" !== u) {
                        if (k && d in k ? (s = "function" == typeof k[d] ? k[d].call(n, r, e, i) : k[d],
                        S(s) && ~s.indexOf("random(") && (s = tt(s)),
                        We(s + "") || (s += y.units[d] || We(Vn(e, d)) || ""),
                        "=" === (s + "").charAt(1) && (s = Vn(e, d))) : s = Vn(e, d),
                        l = parseFloat(s),
                        (h = "string" === u && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)),
                        a = parseFloat(o),
                        d in Dn && ("autoAlpha" === d && (1 === l && "hidden" === Vn(e, "visibility") && a && (l = 0),
                        Wn(this, _, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                        "scale" !== d && "transform" !== d && ~(d = Dn[d]).indexOf(",") && (d = d.split(",")[0])),
                        g = d in pn)
                            if (m || ((v = e._gsap).renderTransform && !t.parseTransform || ir(e, t.parseTransform),
                            D = !1 !== t.smoothOrigin && v.smooth,
                            (m = this._pt = new Zt(this._pt,_,On,0,1,v.renderTransform,v,0,-1)).dep = 1),
                            "scale" === d)
                                this._pt = new Zt(this._pt,v,"scaleY",v.scaleY,(h ? h * a : a - v.scaleY) || 0),
                                E.push("scaleY", d),
                                d += "X";
                            else {
                                if ("transformOrigin" === d) {
                                    w = void 0,
                                    C = void 0,
                                    T = void 0,
                                    w = (x = o).split(" "),
                                    C = w[0],
                                    T = w[1] || "50%",
                                    "top" !== C && "bottom" !== C && "left" !== T && "right" !== T || (x = C,
                                    C = T,
                                    T = x),
                                    w[0] = Yn[C] || C,
                                    w[1] = Yn[T] || T,
                                    o = w.join(" "),
                                    v.svg ? rr(e, o, 0, D, 0, this) : ((f = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wn(this, v, "zOrigin", v.zOrigin, f),
                                    Wn(this, _, d, sr(s), sr(o)));
                                    continue
                                }
                                if ("svgOrigin" === d) {
                                    rr(e, o, 1, D, 0, this);
                                    continue
                                }
                                if (d in Zn) {
                                    cr(this, v, d, l, o, h);
                                    continue
                                }
                                if ("smoothOrigin" === d) {
                                    Wn(this, v, "smooth", v.smooth, o);
                                    continue
                                }
                                if ("force3D" === d) {
                                    v[d] = o;
                                    continue
                                }
                                if ("transform" === d) {
                                    pr(this, o, e);
                                    continue
                                }
                            }
                        else
                            d in _ || (d = Nn(d) || d);
                        if (g || (a || 0 === a) && (l || 0 === l) && !yn.test(o) && d in _)
                            a || (a = 0),
                            (p = (s + "").substr((l + "").length)) !== (f = We(o) || (d in y.units ? y.units[d] : p)) && (l = Xn(e, d, s, f)),
                            this._pt = new Zt(this._pt,g ? v : _,d,l,h ? h * a : a - l,g || "px" !== f && "zIndex" !== d || !1 === t.autoRound ? bn : Cn),
                            this._pt.u = f || 0,
                            p !== f && "%" !== f && (this._pt.b = s,
                            this._pt.r = wn);
                        else if (d in _)
                            Un.call(this, e, d, s, o);
                        else {
                            if (!(d in e)) {
                                U(d, o);
                                continue
                            }
                            this.add(e, d, s || e[d], o, r, i)
                        }
                        E.push(d)
                    }
            b && Jt(this)
        },
        get: Vn,
        aliases: Dn,
        getSetter: function(e, t, n) {
            var r = Dn[t];
            return r && r.indexOf(",") < 0 && (t = r),
            t in pn && t !== Mn && (e._gsap.x || Vn(e, "x")) ? n && cn === n ? "scale" === t ? Fn : kn : (cn = n || {}) && ("scale" === t ? An : Pn) : e.style && !A(e.style[t]) ? _n : ~t.indexOf("-") ? Sn : Wt(e, t)
        },
        core: {
            _removeProperty: Hn,
            _getMatrix: nr
        }
    };
    rn.utils.checkPrefix = Nn,
    hr = ue("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (fr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        pn[e] = 1
    }),
    ue(fr, function(e) {
        y.units[e] = "deg",
        Zn[e] = 1
    }),
    Dn[hr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + fr,
    ue("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        var t = e.split(":");
        Dn[t[1]] = hr[t[0]]
    }),
    ue("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        y.units[e] = "px"
    }),
    rn.registerPlugin(gr);
    var mr = rn.registerPlugin(gr) || rn;
    mr.core.Tween;
    function vr(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function yr(e={}, t={}) {
        Object.keys(t).forEach(n => {
            void 0 === e[n] ? e[n] = t[n] : vr(t[n]) && vr(e[n]) && Object.keys(t[n]).length > 0 && yr(e[n], t[n])
        }
        )
    }
    const Dr = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function br() {
        const e = "undefined" != typeof document ? document : {};
        return yr(e, Dr),
        e
    }
    const xr = {
        document: Dr,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function wr() {
        const e = "undefined" != typeof window ? window : {};
        return yr(e, xr),
        e
    }
    class Cr extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []),
            function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }
    function Tr(e=[]) {
        const t = [];
        return e.forEach(e => {
            Array.isArray(e) ? t.push(...Tr(e)) : t.push(e)
        }
        ),
        t
    }
    function Er(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function _r(e, t) {
        const n = wr()
          , r = br();
        let i = [];
        if (!t && e instanceof Cr)
            return e;
        if (!e)
            return new Cr(i);
        if ("string" == typeof e) {
            const n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                let e = "div";
                0 === n.indexOf("<li") && (e = "ul"),
                0 === n.indexOf("<tr") && (e = "tbody"),
                0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"),
                0 === n.indexOf("<tbody") && (e = "table"),
                0 === n.indexOf("<option") && (e = "select");
                const t = r.createElement(e);
                t.innerHTML = n;
                for (let e = 0; e < t.childNodes.length; e += 1)
                    i.push(t.childNodes[e])
            } else
                i = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    const n = []
                      , r = t.querySelectorAll(e);
                    for (let e = 0; e < r.length; e += 1)
                        n.push(r[e]);
                    return n
                }(e.trim(), t || r)
        } else if (e.nodeType || e === n || e === r)
            i.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof Cr)
                return e;
            i = e
        }
        return new Cr(function(e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(i))
    }
    _r.fn = Cr.prototype;
    const Sr = "resize scroll".split(" ");
    function kr(e) {
        return function(...t) {
            if (void 0 === t[0]) {
                for (let t = 0; t < this.length; t += 1)
                    Sr.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : _r(this[t]).trigger(e));
                return this
            }
            return this.on(e, ...t)
        }
    }
    kr("click"),
    kr("blur"),
    kr("focus"),
    kr("focusin"),
    kr("focusout"),
    kr("keyup"),
    kr("keydown"),
    kr("keypress"),
    kr("submit"),
    kr("change"),
    kr("mousedown"),
    kr("mousemove"),
    kr("mouseup"),
    kr("mouseenter"),
    kr("mouseleave"),
    kr("mouseout"),
    kr("mouseover"),
    kr("touchstart"),
    kr("touchend"),
    kr("touchmove"),
    kr("resize"),
    kr("scroll");
    const Fr = {
        addClass: function(...e) {
            const t = Tr(e.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.add(...t)
            }
            ),
            this
        },
        removeClass: function(...e) {
            const t = Tr(e.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.remove(...t)
            }
            ),
            this
        },
        hasClass: function(...e) {
            const t = Tr(e.map(e => e.split(" ")));
            return Er(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
        },
        toggleClass: function(...e) {
            const t = Tr(e.map(e => e.split(" ")));
            this.forEach(e => {
                t.forEach(t => {
                    e.classList.toggle(t)
                }
                )
            }
            )
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (let n = 0; n < this.length; n += 1)
                if (2 === arguments.length)
                    this[n].setAttribute(e, t);
                else
                    for (const t in e)
                        this[n][t] = e[t],
                        this[n].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function(...e) {
            let[t,n,r,i] = e;
            function s(e) {
                const t = e.target;
                if (!t)
                    return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e),
                _r(t).is(n))
                    r.apply(t, i);
                else {
                    const e = _r(t).parents();
                    for (let t = 0; t < e.length; t += 1)
                        _r(e[t]).is(n) && r.apply(e[t], i)
                }
            }
            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
            }
            "function" == typeof e[1] && ([t,r,i] = e,
            n = void 0),
            i || (i = !1);
            const a = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (n)
                    for (l = 0; l < a.length; l += 1) {
                        const e = a[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                        t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                        t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: s
                        }),
                        t.addEventListener(e, s, i)
                    }
                else
                    for (l = 0; l < a.length; l += 1) {
                        const e = a[l];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                        t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                        t.dom7Listeners[e].push({
                            listener: r,
                            proxyListener: o
                        }),
                        t.addEventListener(e, o, i)
                    }
            }
            return this
        },
        off: function(...e) {
            let[t,n,r,i] = e;
            "function" == typeof e[1] && ([t,r,i] = e,
            n = void 0),
            i || (i = !1);
            const s = t.split(" ");
            for (let e = 0; e < s.length; e += 1) {
                const t = s[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let o;
                    if (!n && s.dom7Listeners ? o = s.dom7Listeners[t] : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
                    o && o.length)
                        for (let e = o.length - 1; e >= 0; e -= 1) {
                            const n = o[e];
                            r && n.listener === r ? (s.removeEventListener(t, n.proxyListener, i),
                            o.splice(e, 1)) : r && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === r ? (s.removeEventListener(t, n.proxyListener, i),
                            o.splice(e, 1)) : r || (s.removeEventListener(t, n.proxyListener, i),
                            o.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = wr()
              , n = e[0].split(" ")
              , r = e[1];
            for (let i = 0; i < n.length; i += 1) {
                const s = n[i];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n];
                    if (t.CustomEvent) {
                        const n = new t.CustomEvent(s,{
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter( (e, t) => t > 0),
                        i.dispatchEvent(n),
                        i.dom7EventData = [],
                        delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", function n(r) {
                r.target === this && (e.call(this, r),
                t.off("transitionend", n))
            }),
            this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = wr();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = wr()
                  , t = br()
                  , n = this[0]
                  , r = n.getBoundingClientRect()
                  , i = t.body
                  , s = n.clientTop || i.clientTop || 0
                  , o = n.clientLeft || i.clientLeft || 0
                  , a = n === e ? e.scrollY : n.scrollTop
                  , l = n === e ? e.scrollX : n.scrollLeft;
                return {
                    top: r.top + a - s,
                    left: r.left + l - o
                }
            }
            return null
        },
        css: function(e, t) {
            const n = wr();
            let r;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (r = 0; r < this.length; r += 1)
                        for (const t in e)
                            this[r].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (r = 0; r < this.length; r += 1)
                    this[r].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach( (t, n) => {
                e.apply(t, [t, n])
            }
            ),
            this) : this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = wr()
              , n = br()
              , r = this[0];
            let i, s;
            if (!r || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (r.matches)
                    return r.matches(e);
                if (r.webkitMatchesSelector)
                    return r.webkitMatchesSelector(e);
                if (r.msMatchesSelector)
                    return r.msMatchesSelector(e);
                for (i = _r(e),
                s = 0; s < i.length; s += 1)
                    if (i[s] === r)
                        return !0;
                return !1
            }
            if (e === n)
                return r === n;
            if (e === t)
                return r === t;
            if (e.nodeType || e instanceof Cr) {
                for (i = e.nodeType ? [e] : e,
                s = 0; s < i.length; s += 1)
                    if (i[s] === r)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            const t = this.length;
            if (e > t - 1)
                return _r([]);
            if (e < 0) {
                const n = t + e;
                return _r(n < 0 ? [] : [this[n]])
            }
            return _r([this[e]])
        },
        append: function(...e) {
            let t;
            const n = br();
            for (let r = 0; r < e.length; r += 1) {
                t = e[r];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const r = n.createElement("div");
                        for (r.innerHTML = t; r.firstChild; )
                            this[e].appendChild(r.firstChild)
                    } else if (t instanceof Cr)
                        for (let n = 0; n < t.length; n += 1)
                            this[e].appendChild(t[n]);
                    else
                        this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            const t = br();
            let n, r;
            for (n = 0; n < this.length; n += 1)
                if ("string" == typeof e) {
                    const i = t.createElement("div");
                    for (i.innerHTML = e,
                    r = i.childNodes.length - 1; r >= 0; r -= 1)
                        this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                } else if (e instanceof Cr)
                    for (r = 0; r < e.length; r += 1)
                        this[n].insertBefore(e[r], this[n].childNodes[0]);
                else
                    this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && _r(this[0].nextElementSibling).is(e) ? _r([this[0].nextElementSibling]) : _r([]) : this[0].nextElementSibling ? _r([this[0].nextElementSibling]) : _r([]) : _r([])
        },
        nextAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n)
                return _r([]);
            for (; n.nextElementSibling; ) {
                const r = n.nextElementSibling;
                e ? _r(r).is(e) && t.push(r) : t.push(r),
                n = r
            }
            return _r(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && _r(t.previousElementSibling).is(e) ? _r([t.previousElementSibling]) : _r([]) : t.previousElementSibling ? _r([t.previousElementSibling]) : _r([])
            }
            return _r([])
        },
        prevAll: function(e) {
            const t = [];
            let n = this[0];
            if (!n)
                return _r([]);
            for (; n.previousElementSibling; ) {
                const r = n.previousElementSibling;
                e ? _r(r).is(e) && t.push(r) : t.push(r),
                n = r
            }
            return _r(t)
        },
        parent: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1)
                null !== this[n].parentNode && (e ? _r(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return _r(t)
        },
        parents: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                let r = this[n].parentNode;
                for (; r; )
                    e ? _r(r).is(e) && t.push(r) : t.push(r),
                    r = r.parentNode
            }
            return _r(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? _r([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const r = this[n].querySelectorAll(e);
                for (let e = 0; e < r.length; e += 1)
                    t.push(r[e])
            }
            return _r(t)
        },
        children: function(e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const r = this[n].children;
                for (let n = 0; n < r.length; n += 1)
                    e && !_r(r[n]).is(e) || t.push(r[n])
            }
            return _r(t)
        },
        filter: function(e) {
            return _r(Er(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    Object.keys(Fr).forEach(e => {
        Object.defineProperty(_r.fn, e, {
            value: Fr[e],
            writable: !0
        })
    }
    );
    var Ar = _r;
    function Pr(e, t=0) {
        return setTimeout(e, t)
    }
    function Or() {
        return Date.now()
    }
    function Mr(e, t="x") {
        const n = wr();
        let r, i, s;
        const o = function(e) {
            const t = wr();
            let n;
            return t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
        }(e);
        return n.WebKitCSSMatrix ? ((i = o.transform || o.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")),
        s = new n.WebKitCSSMatrix("none" === i ? "" : i)) : r = (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
        "x" === t && (i = n.WebKitCSSMatrix ? s.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])),
        "y" === t && (i = n.WebKitCSSMatrix ? s.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])),
        i || 0
    }
    function $r(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function Lr(...e) {
        const t = Object(e[0])
          , n = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const s = e[i];
            if (null != s && (r = s,
            !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
                const e = Object.keys(Object(s)).filter(e => n.indexOf(e) < 0);
                for (let n = 0, r = e.length; n < r; n += 1) {
                    const r = e[n]
                      , i = Object.getOwnPropertyDescriptor(s, r);
                    void 0 !== i && i.enumerable && ($r(t[r]) && $r(s[r]) ? s[r].__swiper__ ? t[r] = s[r] : Lr(t[r], s[r]) : !$r(t[r]) && $r(s[r]) ? (t[r] = {},
                    s[r].__swiper__ ? t[r] = s[r] : Lr(t[r], s[r])) : t[r] = s[r])
                }
            }
        }
        var r;
        return t
    }
    function Br(e, t, n) {
        e.style.setProperty(t, n)
    }
    function Nr({swiper: e, targetPosition: t, side: n}) {
        const r = wr()
          , i = -e.translate;
        let s, o = null;
        const a = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none",
        r.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > i ? "next" : "prev"
          , u = (e, t) => "next" === l && e >= t || "prev" === l && e <= t
          , c = () => {
            s = (new Date).getTime(),
            null === o && (o = s);
            const l = Math.max(Math.min((s - o) / a, 1), 0)
              , d = .5 - Math.cos(l * Math.PI) / 2;
            let p = i + d * (t - i);
            if (u(p, t) && (p = t),
            e.wrapperEl.scrollTo({
                [n]: p
            }),
            u(p, t))
                return e.wrapperEl.style.overflow = "hidden",
                e.wrapperEl.style.scrollSnapType = "",
                setTimeout( () => {
                    e.wrapperEl.style.overflow = "",
                    e.wrapperEl.scrollTo({
                        [n]: p
                    })
                }
                ),
                void r.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = r.requestAnimationFrame(c)
        }
        ;
        c()
    }
    let jr, Ir, Rr;
    function zr() {
        return jr || (jr = function() {
            const e = wr()
              , t = br();
            return {
                smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const n = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, n)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart"in e
            }
        }()),
        jr
    }
    function qr(e={}) {
        return Ir || (Ir = function({userAgent: e}={}) {
            const t = zr()
              , n = wr()
              , r = n.navigator.platform
              , i = e || n.navigator.userAgent
              , s = {
                ios: !1,
                android: !1
            }
              , o = n.screen.width
              , a = n.screen.height
              , l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = i.match(/(iPad).*OS\s([\d_]+)/);
            const c = i.match(/(iPod)(.*OS\s([\d_]+))?/)
              , d = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , p = "Win32" === r;
            let f = "MacIntel" === r;
            return !u && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${a}`) >= 0 && ((u = i.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
            f = !1),
            l && !p && (s.os = "android",
            s.android = !0),
            (u || d || c) && (s.os = "ios",
            s.ios = !0),
            s
        }(e)),
        Ir
    }
    function Hr() {
        return Rr || (Rr = function() {
            const e = wr();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()),
        Rr
    }
    function Wr({swiper: e, runCallbacks: t, direction: n, step: r}) {
        const {activeIndex: i, previousIndex: s} = e;
        let o = n;
        if (o || (o = i > s ? "next" : i < s ? "prev" : "reset"),
        e.emit(`transition${r}`),
        t && i !== s) {
            if ("reset" === o)
                return void e.emit(`slideResetTransition${r}`);
            e.emit(`slideChangeTransition${r}`),
            "next" === o ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
        }
    }
    function Gr(e) {
        const t = this
          , n = br()
          , r = wr()
          , i = t.touchEventsData
          , {params: s, touches: o, enabled: a} = t;
        if (!a)
            return;
        if (t.animating && s.preventInteractionOnTransition)
            return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let u = Ar(l.target);
        if ("wrapper" === s.touchEventsTarget && !u.closest(t.wrapperEl).length)
            return;
        if (i.isTouchEvent = "touchstart" === l.type,
        !i.isTouchEvent && "which"in l && 3 === l.which)
            return;
        if (!i.isTouchEvent && "button"in l && l.button > 0)
            return;
        if (i.isTouched && i.isMoved)
            return;
        !!s.noSwipingClass && "" !== s.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (u = Ar(e.path[0]));
        const c = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
          , d = !(!l.target || !l.target.shadowRoot);
        if (s.noSwiping && (d ? function(e, t=this) {
            return function t(n) {
                if (!n || n === br() || n === wr())
                    return null;
                return n.assignedSlot && (n = n.assignedSlot),
                n.closest(e) || t(n.getRootNode().host)
            }(t)
        }(c, l.target) : u.closest(c)[0]))
            return void (t.allowClick = !0);
        if (s.swipeHandler && !u.closest(s.swipeHandler)[0])
            return;
        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX,
        o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
        const p = o.currentX
          , f = o.currentY
          , h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
          , g = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (h && (p <= g || p >= r.innerWidth - g)) {
            if ("prevent" !== h)
                return;
            e.preventDefault()
        }
        if (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        o.startX = p,
        o.startY = f,
        i.touchStartTime = Or(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        s.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type) {
            let e = !0;
            u.is(i.focusableElements) && (e = !1),
            n.activeElement && Ar(n.activeElement).is(i.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
            const r = e && t.allowTouchMove && s.touchStartPreventDefault;
            !s.touchStartForcePreventDefault && !r || u[0].isContentEditable || l.preventDefault()
        }
        t.emit("touchStart", l)
    }
    function Xr() {
        const e = this
          , {params: t, el: n} = e;
        if (n && 0 === n.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: r, allowSlidePrev: i, snapGrid: s} = e;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = i,
        e.allowSlideNext = r,
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
    }
    let Vr = !1;
    function Ur() {}
    const Yr = (e, t) => {
        const n = br()
          , {params: r, touchEvents: i, el: s, wrapperEl: o, device: a, support: l} = e
          , u = !!r.nested
          , c = "on" === t ? "addEventListener" : "removeEventListener"
          , d = t;
        if (l.touch) {
            const t = !("touchstart" !== i.start || !l.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            s[c](i.start, e.onTouchStart, t),
            s[c](i.move, e.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: u
            } : u),
            s[c](i.end, e.onTouchEnd, t),
            i.cancel && s[c](i.cancel, e.onTouchEnd, t)
        } else
            s[c](i.start, e.onTouchStart, !1),
            n[c](i.move, e.onTouchMove, u),
            n[c](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) && s[c]("click", e.onClick, !0),
        r.cssMode && o[c]("scroll", e.onScroll),
        r.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Xr, !0) : e[d]("observerUpdate", Xr, !0)
    }
    ;
    const Qr = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var Kr = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function Jr(e, t) {
        return function(n={}) {
            const r = Object.keys(n)[0]
              , i = n[r];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && !0 === e[r] && (e[r] = {
                auto: !0
            }),
            r in e && "enabled"in i ? (!0 === e[r] && (e[r] = {
                enabled: !0
            }),
            "object" != typeof e[r] || "enabled"in e[r] || (e[r].enabled = !0),
            e[r] || (e[r] = {
                enabled: !1
            }),
            Lr(t, n)) : Lr(t, n)) : Lr(t, n)
        }
    }
    const Zr = {
        eventsEmitter: {
            on(e, t, n) {
                const r = this;
                if ("function" != typeof t)
                    return r;
                const i = n ? "unshift" : "push";
                return e.split(" ").forEach(e => {
                    r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][i](t)
                }
                ),
                r
            },
            once(e, t, n) {
                const r = this;
                if ("function" != typeof t)
                    return r;
                function i(...n) {
                    r.off(e, i),
                    i.__emitterProxy && delete i.__emitterProxy,
                    t.apply(r, n)
                }
                return i.__emitterProxy = t,
                r.on(e, i, n)
            },
            onAny(e, t) {
                const n = this;
                if ("function" != typeof e)
                    return n;
                const r = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
                n
            },
            offAny(e) {
                const t = this;
                if (!t.eventsAnyListeners)
                    return t;
                const n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1),
                t
            },
            off(e, t) {
                const n = this;
                return n.eventsListeners ? (e.split(" ").forEach(e => {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach( (r, i) => {
                        (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                    }
                    )
                }
                ),
                n) : n
            },
            emit(...e) {
                const t = this;
                if (!t.eventsListeners)
                    return t;
                let n, r, i;
                return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0],
                r = e.slice(1, e.length),
                i = t) : (n = e[0].events,
                r = e[0].data,
                i = e[0].context || t),
                r.unshift(i),
                (Array.isArray(n) ? n : n.split(" ")).forEach(e => {
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(t => {
                        t.apply(i, [e, ...r])
                    }
                    ),
                    t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(e => {
                        e.apply(i, r)
                    }
                    )
                }
                ),
                t
            }
        },
        update: {
            updateSize: function() {
                const e = this;
                let t, n;
                const r = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : r[0].clientWidth,
                n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : r[0].clientHeight,
                0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10),
                n = n - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            },
            updateSlides: function() {
                const e = this;
                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }
                function n(e, n) {
                    return parseFloat(e.getPropertyValue(t(n)) || 0)
                }
                const r = e.params
                  , {$wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: a} = e
                  , l = e.virtual && r.virtual.enabled
                  , u = l ? e.virtual.slides.length : e.slides.length
                  , c = i.children(`.${e.params.slideClass}`)
                  , d = l ? e.virtual.slides.length : c.length;
                let p = [];
                const f = []
                  , h = [];
                let g = r.slidesOffsetBefore;
                "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
                let m = r.slidesOffsetAfter;
                "function" == typeof m && (m = r.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length
                  , y = e.slidesGrid.length;
                let D = r.spaceBetween
                  , b = -g
                  , x = 0
                  , w = 0;
                if (void 0 === s)
                    return;
                "string" == typeof D && D.indexOf("%") >= 0 && (D = parseFloat(D.replace("%", "")) / 100 * s),
                e.virtualSize = -D,
                o ? c.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : c.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }),
                r.centeredSlides && r.cssMode && (Br(e.wrapperEl, "--swiper-centered-offset-before", ""),
                Br(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const C = r.grid && r.grid.rows > 1 && e.grid;
                let T;
                C && e.grid.initSlides(d);
                const E = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                for (let i = 0; i < d; i += 1) {
                    T = 0;
                    const o = c.eq(i);
                    if (C && e.grid.updateSlide(i, o, d, t),
                    "none" !== o.css("display")) {
                        if ("auto" === r.slidesPerView) {
                            E && (c[i].style[t("width")] = "");
                            const s = getComputedStyle(o[0])
                              , a = o[0].style.transform
                              , l = o[0].style.webkitTransform;
                            if (a && (o[0].style.transform = "none"),
                            l && (o[0].style.webkitTransform = "none"),
                            r.roundLengths)
                                T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                            else {
                                const e = n(s, "width")
                                  , t = n(s, "padding-left")
                                  , r = n(s, "padding-right")
                                  , i = n(s, "margin-left")
                                  , a = n(s, "margin-right")
                                  , l = s.getPropertyValue("box-sizing");
                                if (l && "border-box" === l)
                                    T = e + i + a;
                                else {
                                    const {clientWidth: n, offsetWidth: s} = o[0];
                                    T = e + t + r + i + a + (s - n)
                                }
                            }
                            a && (o[0].style.transform = a),
                            l && (o[0].style.webkitTransform = l),
                            r.roundLengths && (T = Math.floor(T))
                        } else
                            T = (s - (r.slidesPerView - 1) * D) / r.slidesPerView,
                            r.roundLengths && (T = Math.floor(T)),
                            c[i] && (c[i].style[t("width")] = `${T}px`);
                        c[i] && (c[i].swiperSlideSize = T),
                        h.push(T),
                        r.centeredSlides ? (b = b + T / 2 + x / 2 + D,
                        0 === x && 0 !== i && (b = b - s / 2 - D),
                        0 === i && (b = b - s / 2 - D),
                        Math.abs(b) < .001 && (b = 0),
                        r.roundLengths && (b = Math.floor(b)),
                        w % r.slidesPerGroup == 0 && p.push(b),
                        f.push(b)) : (r.roundLengths && (b = Math.floor(b)),
                        (w - Math.min(e.params.slidesPerGroupSkip, w)) % e.params.slidesPerGroup == 0 && p.push(b),
                        f.push(b),
                        b = b + T + D),
                        e.virtualSize += T + D,
                        x = T,
                        w += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, s) + m,
                o && a && ("slide" === r.effect || "coverflow" === r.effect) && i.css({
                    width: `${e.virtualSize + r.spaceBetween}px`
                }),
                r.setWrapperSize && i.css({
                    [t("width")]: `${e.virtualSize + r.spaceBetween}px`
                }),
                C && e.grid.updateWrapperSize(T, p, t),
                !r.centeredSlides) {
                    const t = [];
                    for (let n = 0; n < p.length; n += 1) {
                        let i = p[n];
                        r.roundLengths && (i = Math.floor(i)),
                        p[n] <= e.virtualSize - s && t.push(i)
                    }
                    p = t,
                    Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                }
                if (0 === p.length && (p = [0]),
                0 !== r.spaceBetween) {
                    const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    c.filter( (e, t) => !r.cssMode || t !== c.length - 1).css({
                        [n]: `${D}px`
                    })
                }
                if (r.centeredSlides && r.centeredSlidesBounds) {
                    let e = 0;
                    h.forEach(t => {
                        e += t + (r.spaceBetween ? r.spaceBetween : 0)
                    }
                    );
                    const t = (e -= r.spaceBetween) - s;
                    p = p.map(e => e < 0 ? -g : e > t ? t + m : e)
                }
                if (r.centerInsufficientSlides) {
                    let e = 0;
                    if (h.forEach(t => {
                        e += t + (r.spaceBetween ? r.spaceBetween : 0)
                    }
                    ),
                    (e -= r.spaceBetween) < s) {
                        const t = (s - e) / 2;
                        p.forEach( (e, n) => {
                            p[n] = e - t
                        }
                        ),
                        f.forEach( (e, n) => {
                            f[n] = e + t
                        }
                        )
                    }
                }
                if (Object.assign(e, {
                    slides: c,
                    snapGrid: p,
                    slidesGrid: f,
                    slidesSizesGrid: h
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                    Br(e.wrapperEl, "--swiper-centered-offset-before", `${-p[0]}px`),
                    Br(e.wrapperEl, "--swiper-centered-offset-after", `${e.size / 2 - h[h.length - 1] / 2}px`);
                    const t = -e.snapGrid[0]
                      , n = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map(e => e + t),
                    e.slidesGrid = e.slidesGrid.map(e => e + n)
                }
                d !== u && e.emit("slidesLengthChange"),
                p.length !== v && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                f.length !== y && e.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && e.updateSlidesOffset()
            },
            updateAutoHeight: function(e) {
                const t = this
                  , n = []
                  , r = t.virtual && t.params.virtual.enabled;
                let i, s = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const o = e => r ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        t.visibleSlides.each(e => {
                            n.push(e)
                        }
                        );
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length && !r)
                                break;
                            n.push(o(e))
                        }
                else
                    n.push(o(t.activeIndex));
                for (i = 0; i < n.length; i += 1)
                    if (void 0 !== n[i]) {
                        const e = n[i].offsetHeight;
                        s = e > s ? e : s
                    }
                (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`)
            },
            updateSlidesOffset: function() {
                const e = this
                  , t = e.slides;
                for (let n = 0; n < t.length; n += 1)
                    t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
            },
            updateSlidesProgress: function(e=this && this.translate || 0) {
                const t = this
                  , n = t.params
                  , {slides: r, rtlTranslate: i, snapGrid: s} = t;
                if (0 === r.length)
                    return;
                void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                let o = -e;
                i && (o = e),
                r.removeClass(n.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (let e = 0; e < r.length; e += 1) {
                    const a = r[e];
                    let l = a.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
                    const u = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween)
                      , c = (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween)
                      , d = -(o - l)
                      , p = d + t.slidesSizesGrid[e];
                    (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(a),
                    t.visibleSlidesIndexes.push(e),
                    r.eq(e).addClass(n.slideVisibleClass)),
                    a.progress = i ? -u : u,
                    a.originalProgress = i ? -c : c
                }
                t.visibleSlides = Ar(t.visibleSlides)
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params
                  , r = t.maxTranslate() - t.minTranslate();
                let {progress: i, isBeginning: s, isEnd: o} = t;
                const a = s
                  , l = o;
                0 === r ? (i = 0,
                s = !0,
                o = !0) : (s = (i = (e - t.minTranslate()) / r) <= 0,
                o = i >= 1),
                Object.assign(t, {
                    progress: i,
                    isBeginning: s,
                    isEnd: o
                }),
                (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
                s && !a && t.emit("reachBeginning toEdge"),
                o && !l && t.emit("reachEnd toEdge"),
                (a && !s || l && !o) && t.emit("fromEdge"),
                t.emit("progress", i)
            },
            updateSlidesClasses: function() {
                const e = this
                  , {slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: s} = e
                  , o = e.virtual && n.virtual.enabled;
                let a;
                t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`),
                (a = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i)).addClass(n.slideActiveClass),
                n.loop && (a.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));
                let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = t.eq(0)).addClass(n.slideNextClass);
                let u = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === u.length && (u = t.eq(-1)).addClass(n.slidePrevClass),
                n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),
                u.hasClass(n.slideDuplicateClass) ? r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this
                  , n = t.rtlTranslate ? t.translate : -t.translate
                  , {slidesGrid: r, snapGrid: i, params: s, activeIndex: o, realIndex: a, snapIndex: l} = t;
                let u, c = e;
                if (void 0 === c) {
                    for (let e = 0; e < r.length; e += 1)
                        void 0 !== r[e + 1] ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2 ? c = e : n >= r[e] && n < r[e + 1] && (c = e + 1) : n >= r[e] && (c = e);
                    s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if (i.indexOf(n) >= 0)
                    u = i.indexOf(n);
                else {
                    const e = Math.min(s.slidesPerGroupSkip, c);
                    u = e + Math.floor((c - e) / s.slidesPerGroup)
                }
                if (u >= i.length && (u = i.length - 1),
                c === o)
                    return void (u !== l && (t.snapIndex = u,
                    t.emit("snapIndexChange")));
                const d = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                Object.assign(t, {
                    snapIndex: u,
                    realIndex: d,
                    previousIndex: o,
                    activeIndex: c
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                a !== d && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this
                  , n = t.params
                  , r = Ar(e).closest(`.${n.slideClass}`)[0];
                let i, s = !1;
                if (r)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === r) {
                            s = !0,
                            i = e;
                            break
                        }
                if (!r || !s)
                    return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
                t.clickedSlide = r,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(Ar(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
                n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
                const {params: t, rtlTranslate: n, translate: r, $wrapperEl: i} = this;
                if (t.virtualTranslate)
                    return n ? -r : r;
                if (t.cssMode)
                    return r;
                let s = Mr(i[0], e);
                return n && (s = -s),
                s || 0
            },
            setTranslate: function(e, t) {
                const n = this
                  , {rtlTranslate: r, params: i, $wrapperEl: s, wrapperEl: o, progress: a} = n;
                let l, u = 0, c = 0;
                n.isHorizontal() ? u = r ? -e : e : c = e,
                i.roundLengths && (u = Math.floor(u),
                c = Math.floor(c)),
                i.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -u : -c : i.virtualTranslate || s.transform(`translate3d(${u}px, ${c}px, 0px)`),
                n.previousTranslate = n.translate,
                n.translate = n.isHorizontal() ? u : c;
                const d = n.maxTranslate() - n.minTranslate();
                (l = 0 === d ? 0 : (e - n.minTranslate()) / d) !== a && n.updateProgress(e),
                n.emit("setTranslate", n.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e=0, t=this.params.speed, n=!0, r=!0, i) {
                const s = this
                  , {params: o, wrapperEl: a} = s;
                if (s.animating && o.preventInteractionOnTransition)
                    return !1;
                const l = s.minTranslate()
                  , u = s.maxTranslate();
                let c;
                if (c = r && e > l ? l : r && e < u ? u : e,
                s.updateProgress(c),
                o.cssMode) {
                    const e = s.isHorizontal();
                    if (0 === t)
                        a[e ? "scrollLeft" : "scrollTop"] = -c;
                    else {
                        if (!s.support.smoothScroll)
                            return Nr({
                                swiper: s,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        a.scrollTo({
                            [e ? "left" : "top"]: -c,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (s.setTransition(0),
                s.setTranslate(c),
                n && (s.emit("beforeTransitionStart", t, i),
                s.emit("transitionEnd"))) : (s.setTransition(t),
                s.setTranslate(c),
                n && (s.emit("beforeTransitionStart", t, i),
                s.emit("transitionStart")),
                s.animating || (s.animating = !0,
                s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                    s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd),
                    s.onTranslateToWrapperTransitionEnd = null,
                    delete s.onTranslateToWrapperTransitionEnd,
                    n && s.emit("transitionEnd"))
                }
                ),
                s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))),
                !0
            }
        },
        transition: {
            setTransition: function(e, t) {
                const n = this;
                n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t)
            },
            transitionStart: function(e=!0, t) {
                const n = this
                  , {params: r} = n;
                r.cssMode || (r.autoHeight && n.updateAutoHeight(),
                Wr({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e=!0, t) {
                const {params: n} = this;
                this.animating = !1,
                n.cssMode || (this.setTransition(0),
                Wr({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: {
            slideTo: function(e=0, t=this.params.speed, n=!0, r, i) {
                if ("number" != typeof e && "string" != typeof e)
                    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t))
                        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const s = this;
                let o = e;
                o < 0 && (o = 0);
                const {params: a, snapGrid: l, slidesGrid: u, previousIndex: c, activeIndex: d, rtlTranslate: p, wrapperEl: f, enabled: h} = s;
                if (s.animating && a.preventInteractionOnTransition || !h && !r && !i)
                    return !1;
                const g = Math.min(s.params.slidesPerGroupSkip, o);
                let m = g + Math.floor((o - g) / s.params.slidesPerGroup);
                m >= l.length && (m = l.length - 1),
                (d || a.initialSlide || 0) === (c || 0) && n && s.emit("beforeSlideChangeStart");
                const v = -l[m];
                if (s.updateProgress(v),
                a.normalizeSlideIndex)
                    for (let e = 0; e < u.length; e += 1) {
                        const t = -Math.floor(100 * v)
                          , n = Math.floor(100 * u[e])
                          , r = Math.floor(100 * u[e + 1]);
                        void 0 !== u[e + 1] ? t >= n && t < r - (r - n) / 2 ? o = e : t >= n && t < r && (o = e + 1) : t >= n && (o = e)
                    }
                if (s.initialized && o !== d) {
                    if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
                        return !1;
                    if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (d || 0) !== o)
                        return !1
                }
                let y;
                if (y = o > d ? "next" : o < d ? "prev" : "reset",
                p && -v === s.translate || !p && v === s.translate)
                    return s.updateActiveIndex(o),
                    a.autoHeight && s.updateAutoHeight(),
                    s.updateSlidesClasses(),
                    "slide" !== a.effect && s.setTranslate(v),
                    "reset" !== y && (s.transitionStart(n, y),
                    s.transitionEnd(n, y)),
                    !1;
                if (a.cssMode) {
                    const e = s.isHorizontal()
                      , n = p ? v : -v;
                    if (0 === t) {
                        const t = s.virtual && s.params.virtual.enabled;
                        t && (s.wrapperEl.style.scrollSnapType = "none",
                        s._immediateVirtual = !0),
                        f[e ? "scrollLeft" : "scrollTop"] = n,
                        t && requestAnimationFrame( () => {
                            s.wrapperEl.style.scrollSnapType = "",
                            s._swiperImmediateVirtual = !1
                        }
                        )
                    } else {
                        if (!s.support.smoothScroll)
                            return Nr({
                                swiper: s,
                                targetPosition: n,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        f.scrollTo({
                            [e ? "left" : "top"]: n,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return s.setTransition(t),
                s.setTranslate(v),
                s.updateActiveIndex(o),
                s.updateSlidesClasses(),
                s.emit("beforeTransitionStart", t, r),
                s.transitionStart(n, y),
                0 === t ? s.transitionEnd(n, y) : s.animating || (s.animating = !0,
                s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                    s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                    s.onSlideToWrapperTransitionEnd = null,
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(n, y))
                }
                ),
                s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)),
                !0
            },
            slideToLoop: function(e=0, t=this.params.speed, n=!0, r) {
                const i = this;
                let s = e;
                return i.params.loop && (s += i.loopedSlides),
                i.slideTo(s, t, n, r)
            },
            slideNext: function(e=this.params.speed, t=!0, n) {
                const r = this
                  , {animating: i, enabled: s, params: o} = r;
                if (!s)
                    return r;
                let a = o.slidesPerGroup;
                "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
                if (o.loop) {
                    if (i && o.loopPreventsSlide)
                        return !1;
                    r.loopFix(),
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
            },
            slidePrev: function(e=this.params.speed, t=!0, n) {
                const r = this
                  , {params: i, animating: s, snapGrid: o, slidesGrid: a, rtlTranslate: l, enabled: u} = r;
                if (!u)
                    return r;
                if (i.loop) {
                    if (s && i.loopPreventsSlide)
                        return !1;
                    r.loopFix(),
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const d = c(l ? r.translate : -r.translate)
                  , p = o.map(e => c(e));
                let f = o[p.indexOf(d) - 1];
                if (void 0 === f && i.cssMode) {
                    let e;
                    o.forEach( (t, n) => {
                        d >= t && (e = n)
                    }
                    ),
                    void 0 !== e && (f = o[e > 0 ? e - 1 : e])
                }
                let h = 0;
                return void 0 !== f && ((h = a.indexOf(f)) < 0 && (h = r.activeIndex - 1),
                "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - r.slidesPerViewDynamic("previous", !0) + 1,
                h = Math.max(h, 0))),
                i.rewind && r.isBeginning ? r.slideTo(r.slides.length - 1, e, t, n) : r.slideTo(h, e, t, n)
            },
            slideReset: function(e=this.params.speed, t=!0, n) {
                return this.slideTo(this.activeIndex, e, t, n)
            },
            slideToClosest: function(e=this.params.speed, t=!0, n, r=.5) {
                const i = this;
                let s = i.activeIndex;
                const o = Math.min(i.params.slidesPerGroupSkip, s)
                  , a = o + Math.floor((s - o) / i.params.slidesPerGroup)
                  , l = i.rtlTranslate ? i.translate : -i.translate;
                if (l >= i.snapGrid[a]) {
                    const e = i.snapGrid[a];
                    l - e > (i.snapGrid[a + 1] - e) * r && (s += i.params.slidesPerGroup)
                } else {
                    const e = i.snapGrid[a - 1];
                    l - e <= (i.snapGrid[a] - e) * r && (s -= i.params.slidesPerGroup)
                }
                return s = Math.max(s, 0),
                s = Math.min(s, i.slidesGrid.length - 1),
                i.slideTo(s, e, t, n)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, $wrapperEl: n} = e
                  , r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, s = e.clickedIndex;
                if (t.loop) {
                    if (e.animating)
                        return;
                    i = parseInt(Ar(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                    t.centeredSlides ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
                    s = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    Pr( () => {
                        e.slideTo(s)
                    }
                    )) : e.slideTo(s) : s > e.slides.length - r ? (e.loopFix(),
                    s = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    Pr( () => {
                        e.slideTo(s)
                    }
                    )) : e.slideTo(s)
                } else
                    e.slideTo(s)
            }
        },
        loop: {
            loopCreate: function() {
                const e = this
                  , t = br()
                  , {params: n, $wrapperEl: r} = e
                  , i = r.children().length > 0 ? Ar(r.children()[0].parentNode) : r;
                i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                let s = i.children(`.${n.slideClass}`);
                if (n.loopFillGroupWithBlank) {
                    const e = n.slidesPerGroup - s.length % n.slidesPerGroup;
                    if (e !== n.slidesPerGroup) {
                        for (let r = 0; r < e; r += 1) {
                            const e = Ar(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                            i.append(e)
                        }
                        s = i.children(`.${n.slideClass}`)
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = s.length),
                e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)),
                e.loopedSlides += n.loopAdditionalSlides,
                e.loopedSlides > s.length && (e.loopedSlides = s.length);
                const o = []
                  , a = [];
                s.each( (t, n) => {
                    const r = Ar(t);
                    n < e.loopedSlides && a.push(t),
                    n < s.length && n >= s.length - e.loopedSlides && o.push(t),
                    r.attr("data-swiper-slide-index", n)
                }
                );
                for (let e = 0; e < a.length; e += 1)
                    i.append(Ar(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (let e = o.length - 1; e >= 0; e -= 1)
                    i.prepend(Ar(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const {activeIndex: t, slides: n, loopedSlides: r, allowSlidePrev: i, allowSlideNext: s, snapGrid: o, rtlTranslate: a} = e;
                let l;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                const u = -o[t] - e.getTranslate();
                if (t < r) {
                    l = n.length - 3 * r + t,
                    l += r,
                    e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((a ? -e.translate : e.translate) - u)
                } else if (t >= n.length - r) {
                    l = -n.length + t + r,
                    l += r,
                    e.slideTo(l, 0, !1, !0) && 0 !== u && e.setTranslate((a ? -e.translate : e.translate) - u)
                }
                e.allowSlidePrev = i,
                e.allowSlideNext = s,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                const {$wrapperEl: e, params: t, slides: n} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                n.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)
                    return;
                const t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
                this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        },
        events: {
            attachEvents: function() {
                const e = this
                  , t = br()
                  , {params: n, support: r} = e;
                e.onTouchStart = Gr.bind(e),
                e.onTouchMove = function(e) {
                    const t = br()
                      , n = this
                      , r = n.touchEventsData
                      , {params: i, touches: s, rtlTranslate: o, enabled: a} = n;
                    if (!a)
                        return;
                    let l = e;
                    if (l.originalEvent && (l = l.originalEvent),
                    !r.isTouched)
                        return void (r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l));
                    if (r.isTouchEvent && "touchmove" !== l.type)
                        return;
                    const u = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
                      , c = "touchmove" === l.type ? u.pageX : l.pageX
                      , d = "touchmove" === l.type ? u.pageY : l.pageY;
                    if (l.preventedByNestedSwiper)
                        return s.startX = c,
                        void (s.startY = d);
                    if (!n.allowTouchMove)
                        return n.allowClick = !1,
                        void (r.isTouched && (Object.assign(s, {
                            startX: c,
                            startY: d,
                            currentX: c,
                            currentY: d
                        }),
                        r.touchStartTime = Or()));
                    if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                        if (n.isVertical()) {
                            if (d < s.startY && n.translate <= n.maxTranslate() || d > s.startY && n.translate >= n.minTranslate())
                                return r.isTouched = !1,
                                void (r.isMoved = !1)
                        } else if (c < s.startX && n.translate <= n.maxTranslate() || c > s.startX && n.translate >= n.minTranslate())
                            return;
                    if (r.isTouchEvent && t.activeElement && l.target === t.activeElement && Ar(l.target).is(r.focusableElements))
                        return r.isMoved = !0,
                        void (n.allowClick = !1);
                    if (r.allowTouchCallbacks && n.emit("touchMove", l),
                    l.targetTouches && l.targetTouches.length > 1)
                        return;
                    s.currentX = c,
                    s.currentY = d;
                    const p = s.currentX - s.startX
                      , f = s.currentY - s.startY;
                    if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold)
                        return;
                    if (void 0 === r.isScrolling) {
                        let e;
                        n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : p * p + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI,
                        r.isScrolling = n.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
                    }
                    if (r.isScrolling && n.emit("touchMoveOpposite", l),
                    void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)),
                    r.isScrolling)
                        return void (r.isTouched = !1);
                    if (!r.startMoving)
                        return;
                    n.allowClick = !1,
                    !i.cssMode && l.cancelable && l.preventDefault(),
                    i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
                    r.isMoved || (i.loop && !i.cssMode && n.loopFix(),
                    r.startTranslate = n.getTranslate(),
                    n.setTransition(0),
                    n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    r.allowMomentumBounce = !1,
                    !i.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0),
                    n.emit("sliderFirstMove", l)),
                    n.emit("sliderMove", l),
                    r.isMoved = !0;
                    let h = n.isHorizontal() ? p : f;
                    s.diff = h,
                    h *= i.touchRatio,
                    o && (h = -h),
                    n.swipeDirection = h > 0 ? "prev" : "next",
                    r.currentTranslate = h + r.startTranslate;
                    let g = !0
                      , m = i.resistanceRatio;
                    if (i.touchReleaseOnEdges && (m = 0),
                    h > 0 && r.currentTranslate > n.minTranslate() ? (g = !1,
                    i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + h) ** m)) : h < 0 && r.currentTranslate < n.maxTranslate() && (g = !1,
                    i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - h) ** m)),
                    g && (l.preventedByNestedSwiper = !0),
                    !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
                    !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
                    n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate),
                    i.threshold > 0) {
                        if (!(Math.abs(h) > i.threshold || r.allowThresholdMove))
                            return void (r.currentTranslate = r.startTranslate);
                        if (!r.allowThresholdMove)
                            return r.allowThresholdMove = !0,
                            s.startX = s.currentX,
                            s.startY = s.currentY,
                            r.currentTranslate = r.startTranslate,
                            void (s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                    }
                    i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(),
                    n.updateSlidesClasses()),
                    n.params.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
                    n.updateProgress(r.currentTranslate),
                    n.setTranslate(r.currentTranslate))
                }
                .bind(e),
                e.onTouchEnd = function(e) {
                    const t = this
                      , n = t.touchEventsData
                      , {params: r, touches: i, rtlTranslate: s, slidesGrid: o, enabled: a} = t;
                    if (!a)
                        return;
                    let l = e;
                    if (l.originalEvent && (l = l.originalEvent),
                    n.allowTouchCallbacks && t.emit("touchEnd", l),
                    n.allowTouchCallbacks = !1,
                    !n.isTouched)
                        return n.isMoved && r.grabCursor && t.setGrabCursor(!1),
                        n.isMoved = !1,
                        void (n.startMoving = !1);
                    r.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    const u = Or()
                      , c = u - n.touchStartTime;
                    if (t.allowClick) {
                        const e = l.path || l.composedPath && l.composedPath();
                        t.updateClickedSlide(e && e[0] || l.target),
                        t.emit("tap click", l),
                        c < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                    }
                    if (n.lastClickTime = Or(),
                    Pr( () => {
                        t.destroyed || (t.allowClick = !0)
                    }
                    ),
                    !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === i.diff || n.currentTranslate === n.startTranslate)
                        return n.isTouched = !1,
                        n.isMoved = !1,
                        void (n.startMoving = !1);
                    let d;
                    if (n.isTouched = !1,
                    n.isMoved = !1,
                    n.startMoving = !1,
                    d = r.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate,
                    r.cssMode)
                        return;
                    if (t.params.freeMode && r.freeMode.enabled)
                        return void t.freeMode.onTouchEnd({
                            currentPos: d
                        });
                    let p = 0
                      , f = t.slidesSizesGrid[0];
                    for (let e = 0; e < o.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                        const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                        void 0 !== o[e + t] ? d >= o[e] && d < o[e + t] && (p = e,
                        f = o[e + t] - o[e]) : d >= o[e] && (p = e,
                        f = o[o.length - 1] - o[o.length - 2])
                    }
                    const h = (d - o[p]) / f
                      , g = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    if (c > r.longSwipesMs) {
                        if (!r.longSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (h >= r.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p)),
                        "prev" === t.swipeDirection && (h > 1 - r.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p))
                    } else {
                        if (!r.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(p + g) : t.slideTo(p) : ("next" === t.swipeDirection && t.slideTo(p + g),
                        "prev" === t.swipeDirection && t.slideTo(p))
                    }
                }
                .bind(e),
                n.cssMode && (e.onScroll = function() {
                    const e = this
                      , {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
                    if (!r)
                        return;
                    let i;
                    e.previousTranslate = e.translate,
                    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
                    -0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                    const s = e.maxTranslate() - e.minTranslate();
                    (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s) !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1)
                }
                .bind(e)),
                e.onClick = function(e) {
                    const t = this;
                    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
                    t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation())))
                }
                .bind(e),
                r.touch && !Vr && (t.addEventListener("touchstart", Ur),
                Vr = !0),
                Yr(e, "on")
            },
            detachEvents: function() {
                Yr(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: n, loopedSlides: r=0, params: i, $el: s} = e
                  , o = i.breakpoints;
                if (!o || o && 0 === Object.keys(o).length)
                    return;
                const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                if (!a || e.currentBreakpoint === a)
                    return;
                const l = (a in o ? o[a] : void 0) || e.originalParams
                  , u = Qr(e, i)
                  , c = Qr(e, l)
                  , d = i.enabled;
                u && !c ? (s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !u && c && (s.addClass(`${i.containerModifierClass}grid`),
                (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && s.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
                const p = l.direction && l.direction !== i.direction
                  , f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
                p && n && e.changeDirection(),
                Lr(e.params, l);
                const h = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                d && !h ? e.disable() : !d && h && e.enable(),
                e.currentBreakpoint = a,
                e.emit("_beforeBreakpoint", l),
                f && n && (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - r + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t="window", n) {
                if (!e || "container" === t && !n)
                    return;
                let r = !1;
                const i = wr()
                  , s = "window" === t ? i.innerHeight : n.clientHeight
                  , o = Object.keys(e).map(e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: s * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                );
                o.sort( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < o.length; e += 1) {
                    const {point: s, value: a} = o[e];
                    "window" === t ? i.matchMedia(`(min-width: ${a}px)`).matches && (r = s) : a <= n.clientWidth && (r = s)
                }
                return r || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: n} = e
                  , {slidesOffsetBefore: r} = n;
                if (r) {
                    const t = e.slides.length - 1
                      , n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                    e.isLocked = e.size > n
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function() {
                const {classNames: e, params: t, rtl: n, $el: r, device: i, support: s} = this
                  , o = function(e, t) {
                    const n = [];
                    return e.forEach(e => {
                        "object" == typeof e ? Object.keys(e).forEach(r => {
                            e[r] && n.push(t + r)
                        }
                        ) : "string" == typeof e && n.push(t + e)
                    }
                    ),
                    n
                }(["initialized", t.direction, {
                    "pointer-events": !s.touch
                }, {
                    "free-mode": this.params.freeMode && t.freeMode.enabled
                }, {
                    autoheight: t.autoHeight
                }, {
                    rtl: n
                }, {
                    grid: t.grid && t.grid.rows > 1
                }, {
                    "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                }, {
                    android: i.android
                }, {
                    ios: i.ios
                }, {
                    "css-mode": t.cssMode
                }, {
                    centered: t.cssMode && t.centeredSlides
                }], t.containerModifierClass);
                e.push(...o),
                r.addClass([...e].join(" ")),
                this.emitContainerClasses()
            },
            removeClasses: function() {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")),
                this.emitContainerClasses()
            }
        },
        images: {
            loadImage: function(e, t, n, r, i, s) {
                const o = wr();
                let a;
                function l() {
                    s && s()
                }
                Ar(e).parent("picture")[0] || e.complete && i ? l() : t ? ((a = new o.Image).onload = l,
                a.onerror = l,
                r && (a.sizes = r),
                n && (a.srcset = n),
                t && (a.src = t)) : l()
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                    const r = e.imagesToLoad[n];
                    e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , ei = {};
    class ti {
        constructor(...e) {
            let t, n;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t,n] = e,
            n || (n = {}),
            n = Lr({}, n),
            t && !n.el && (n.el = t),
            n.el && Ar(n.el).length > 1) {
                const e = [];
                return Ar(n.el).each(t => {
                    const r = Lr({}, n, {
                        el: t
                    });
                    e.push(new ti(r))
                }
                ),
                e
            }
            const r = this;
            r.__swiper__ = !0,
            r.support = zr(),
            r.device = qr({
                userAgent: n.userAgent
            }),
            r.browser = Hr(),
            r.eventsListeners = {},
            r.eventsAnyListeners = [],
            r.modules = [...r.__modules__],
            n.modules && Array.isArray(n.modules) && r.modules.push(...n.modules);
            const i = {};
            r.modules.forEach(e => {
                e({
                    swiper: r,
                    extendParams: Jr(n, i),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }
            );
            const s = Lr({}, Kr, i);
            return r.params = Lr({}, s, ei, n),
            r.originalParams = Lr({}, r.params),
            r.passedParams = Lr({}, n),
            r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
                r.on(e, r.params.on[e])
            }
            ),
            r.params && r.params.onAny && r.onAny(r.params.onAny),
            r.$ = Ar,
            Object.assign(r, {
                enabled: r.params.enabled,
                el: t,
                classNames: [],
                slides: Ar(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                      , t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    },
                    r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    },
                    r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: Or(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            r.emit("_swiper"),
            r.params.init && r.init(),
            r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            const n = this.minTranslate()
              , r = (this.maxTranslate() - n) * e + n;
            this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.each(n => {
                const r = e.getSlideClasses(n);
                t.push({
                    slideEl: n,
                    classNames: r
                }),
                e.emit("_slideClass", n, r)
            }
            ),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e="current", t=!1) {
            const {params: n, slides: r, slidesGrid: i, slidesSizesGrid: s, size: o, activeIndex: a} = this;
            let l = 1;
            if (n.centeredSlides) {
                let e, t = r[a].swiperSlideSize;
                for (let n = a + 1; n < r.length; n += 1)
                    r[n] && !e && (l += 1,
                    (t += r[n].swiperSlideSize) > o && (e = !0));
                for (let n = a - 1; n >= 0; n -= 1)
                    r[n] && !e && (l += 1,
                    (t += r[n].swiperSlideSize) > o && (e = !0))
            } else if ("current" === e)
                for (let e = a + 1; e < r.length; e += 1) {
                    (t ? i[e] + s[e] - i[a] < o : i[e] - i[a] < o) && (l += 1)
                }
            else
                for (let e = a - 1; e >= 0; e -= 1) {
                    i[a] - i[e] < o && (l += 1)
                }
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: n} = e;
            function r() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled ? (r(),
            e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0) {
            const n = this
              , r = n.params.direction;
            return e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r || "horizontal" !== e && "vertical" !== e ? n : (n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            n.params.direction = e,
            n.slides.each(t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            ),
            n.emit("changeDirection"),
            t && n.update(),
            n)
        }
        mount(e) {
            const t = this;
            if (t.mounted)
                return !0;
            const n = Ar(e || t.params.el);
            if (!(e = n[0]))
                return !1;
            e.swiper = t;
            const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let i = ( () => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = Ar(e.shadowRoot.querySelector(r()));
                    return t.children = e => n.children(e),
                    t
                }
                return n.children(r())
            }
            )();
            if (0 === i.length && t.params.createElements) {
                const e = br().createElement("div");
                i = Ar(e),
                e.className = t.params.wrapperClass,
                n.append(e),
                n.children(`.${t.params.slideClass}`).each(e => {
                    i.append(e)
                }
                )
            }
            return Object.assign(t, {
                $el: n,
                el: e,
                $wrapperEl: i,
                wrapperEl: i[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === i.css("display")
            }),
            !0
        }
        init(e) {
            const t = this;
            return t.initialized ? t : !1 === t.mount(e) ? t : (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit"),
            t)
        }
        destroy(e=!0, t=!0) {
            const n = this
              , {params: r, $el: i, $wrapperEl: s, slides: o} = n;
            return void 0 === n.params || n.destroyed ? null : (n.emit("beforeDestroy"),
            n.initialized = !1,
            n.detachEvents(),
            r.loop && n.loopDestroy(),
            t && (n.removeClasses(),
            i.removeAttr("style"),
            s.removeAttr("style"),
            o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach(e => {
                n.off(e)
            }
            ),
            !1 !== e && (n.$el[0].swiper = null,
            function(e) {
                const t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                )
            }(n)),
            n.destroyed = !0,
            null)
        }
        static extendDefaults(e) {
            Lr(ei, e)
        }
        static get extendedDefaults() {
            return ei
        }
        static get defaults() {
            return Kr
        }
        static installModule(e) {
            ti.prototype.__modules__ || (ti.prototype.__modules__ = []);
            const t = ti.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach(e => ti.installModule(e)),
            ti) : (ti.installModule(e),
            ti)
        }
    }
    Object.keys(Zr).forEach(e => {
        Object.keys(Zr[e]).forEach(t => {
            ti.prototype[t] = Zr[e][t]
        }
        )
    }
    ),
    ti.use([function({swiper: e, on: t, emit: n}) {
        const r = wr();
        let i = null;
        const s = () => {
            e && !e.destroyed && e.initialized && (n("beforeResize"),
            n("resize"))
        }
          , o = () => {
            e && !e.destroyed && e.initialized && n("orientationchange")
        }
        ;
        t("init", () => {
            e.params.resizeObserver && void 0 !== r.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver(t => {
                const {width: n, height: r} = e;
                let i = n
                  , o = r;
                t.forEach( ({contentBoxSize: t, contentRect: n, target: r}) => {
                    r && r !== e.el || (i = n ? n.width : (t[0] || t).inlineSize,
                    o = n ? n.height : (t[0] || t).blockSize)
                }
                ),
                i === n && o === r || s()
            }
            )).observe(e.el) : (r.addEventListener("resize", s),
            r.addEventListener("orientationchange", o))
        }
        ),
        t("destroy", () => {
            i && i.unobserve && e.el && (i.unobserve(e.el),
            i = null),
            r.removeEventListener("resize", s),
            r.removeEventListener("orientationchange", o)
        }
        )
    }
    , function({swiper: e, extendParams: t, on: n, emit: r}) {
        const i = []
          , s = wr()
          , o = (e, t={}) => {
            const n = new (s.MutationObserver || s.WebkitMutationObserver)(e => {
                if (1 === e.length)
                    return void r("observerUpdate", e[0]);
                const t = function() {
                    r("observerUpdate", e[0])
                };
                s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0)
            }
            );
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.push(n)
        }
        ;
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        n("init", () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1)
                        o(t[e])
                }
                o(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                o(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }
        ),
        n("destroy", () => {
            i.forEach(e => {
                e.disconnect()
            }
            ),
            i.splice(0, i.length)
        }
        )
    }
    ]);
    var ni = ti;
    function ri(e, t, n, r) {
        const i = br();
        return e.params.createElements && Object.keys(r).forEach(s => {
            if (!n[s] && !0 === n.auto) {
                let o = e.$el.children(`.${r[s]}`)[0];
                o || ((o = i.createElement("div")).className = r[s],
                e.$el.append(o)),
                n[s] = o,
                t[s] = o
            }
        }
        ),
        n
    }
    function ii(e="") {
        return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function si(e) {
        const {effect: t, swiper: n, on: r, setTranslate: i, setTransition: s, overwriteParams: o, perspective: a} = e;
        r("beforeInit", () => {
            if (n.params.effect !== t)
                return;
            n.classNames.push(`${n.params.containerModifierClass}${t}`),
            a && a() && n.classNames.push(`${n.params.containerModifierClass}3d`);
            const e = o ? o() : {};
            Object.assign(n.params, e),
            Object.assign(n.originalParams, e)
        }
        ),
        r("setTranslate", () => {
            n.params.effect === t && i()
        }
        ),
        r("setTransition", (e, r) => {
            n.params.effect === t && s(r)
        }
        )
    }
    function oi(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }
    function ai({swiper: e, duration: t, transformEl: n, allSlides: r}) {
        const {slides: i, activeIndex: s, $wrapperEl: o} = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t, a = !1;
            (t = r ? n ? i.find(n) : i : n ? i.eq(s).find(n) : i.eq(s)).transitionEnd( () => {
                if (a)
                    return;
                if (!e || e.destroyed)
                    return;
                a = !0,
                e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1)
                    o.trigger(t[e])
            }
            )
        }
    }
    function li(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function ui(e) {
        return (ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    /*!
 * ScrollTrigger 3.6.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
    var ci, di, pi, fi, hi, gi, mi, vi, yi, Di, bi, xi, wi, Ci, Ti, Ei, _i, Si, ki, Fi, Ai, Pi, Oi, Mi, $i, Li, Bi, Ni = 1, ji = [], Ii = [], Ri = Date.now, zi = Ri(), qi = 0, Hi = 1, Wi = function(e) {
        return e
    }, Gi = function() {
        return "undefined" != typeof window
    }, Xi = function() {
        return ci || Gi() && (ci = window.gsap) && ci.registerPlugin && ci
    }, Vi = function(e) {
        return !!~mi.indexOf(e)
    }, Ui = function(e, t) {
        return ~ji.indexOf(e) && ji[ji.indexOf(e) + 1][t]
    }, Yi = function(e, t) {
        var n = t.s
          , r = t.sc
          , i = Ii.indexOf(e)
          , s = r === us.sc ? 1 : 2;
        return !~i && (i = Ii.push(e) - 1),
        Ii[i + s] || (Ii[i + s] = Ui(e, n) || (Vi(e) ? r : function(t) {
            return arguments.length ? e[n] = t : e[n]
        }
        ))
    }, Qi = function(e) {
        return Ui(e, "getBoundingClientRect") || (Vi(e) ? function() {
            return Us.width = pi.innerWidth,
            Us.height = pi.innerHeight,
            Us
        }
        : function() {
            return ps(e)
        }
        )
    }, Ki = function(e, t) {
        var n = t.s
          , r = t.d2
          , i = t.d
          , s = t.a;
        return (n = "scroll" + r) && (s = Ui(e, n)) ? s() - Qi(e)()[i] : Vi(e) ? Math.max(hi[n], gi[n]) - (pi["inner" + r] || hi["client" + r] || gi["client" + r]) : e[n] - e["offset" + r]
    }, Ji = function(e, t) {
        for (var n = 0; n < Ai.length; n += 3)
            (!t || ~t.indexOf(Ai[n + 1])) && e(Ai[n], Ai[n + 1], Ai[n + 2])
    }, Zi = function(e) {
        return "string" == typeof e
    }, es = function(e) {
        return "function" == typeof e
    }, ts = function(e) {
        return "number" == typeof e
    }, ns = function(e) {
        return "object" === ui(e)
    }, rs = function(e) {
        return es(e) && e()
    }, is = function(e, t) {
        return function() {
            var n = rs(e)
              , r = rs(t);
            return function() {
                rs(n),
                rs(r)
            }
        }
    }, ss = Math.abs, os = "padding", as = "px", ls = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: function(e) {
            return arguments.length ? pi.scrollTo(e, us.sc()) : pi.pageXOffset || fi.scrollLeft || hi.scrollLeft || gi.scrollLeft || 0
        }
    }, us = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ls,
        sc: function(e) {
            return arguments.length ? pi.scrollTo(ls.sc(), e) : pi.pageYOffset || fi.scrollTop || hi.scrollTop || gi.scrollTop || 0
        }
    }, cs = function(e) {
        return pi.getComputedStyle(e)
    }, ds = function(e, t) {
        for (var n in t)
            n in e || (e[n] = t[n]);
        return e
    }, ps = function(e, t) {
        var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== cs(e)[_i] && ci.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , r = e.getBoundingClientRect();
        return n && n.progress(0).kill(),
        r
    }, fs = function(e, t) {
        var n = t.d2;
        return e["offset" + n] || e["client" + n] || 0
    }, hs = function(e) {
        var t, n = [], r = e.labels, i = e.duration();
        for (t in r)
            n.push(r[t] / i);
        return n
    }, gs = function(e, t, n, r) {
        return n.split(",").forEach(function(n) {
            return e(t, n, r)
        })
    }, ms = function(e, t, n) {
        return e.addEventListener(t, n, {
            passive: !0
        })
    }, vs = function(e, t, n) {
        return e.removeEventListener(t, n)
    }, ys = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, Ds = {
        toggleActions: "play",
        anticipatePin: 0
    }, bs = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, xs = function(e, t) {
        if (Zi(e)) {
            var n = e.indexOf("=")
              , r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n && (e.indexOf("%") > n && (r *= t / 100),
            e = e.substr(0, n - 1)),
            e = r + (e in bs ? bs[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }, ws = function(e, t, n, r, i, s, o) {
        var a = i.startColor
          , l = i.endColor
          , u = i.fontSize
          , c = i.indent
          , d = i.fontWeight
          , p = fi.createElement("div")
          , f = Vi(n) || "fixed" === Ui(n, "pinType")
          , h = -1 !== e.indexOf("scroller")
          , g = f ? gi : n
          , m = -1 !== e.indexOf("start")
          , v = m ? a : l
          , y = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + (h && f ? "fixed;" : "absolute;"),
        (h || !f) && (y += (r === us ? "right" : "bottom") + ":" + (s + parseFloat(c)) + "px;"),
        o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
        p._isStart = m,
        p.setAttribute("class", "gsap-marker-" + e),
        p.style.cssText = y,
        p.innerText = t || 0 === t ? e + "-" + t : e,
        g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
        p._offset = p["offset" + r.op.d2],
        Cs(p, 0, r, m),
        p
    }, Cs = function(e, t, n, r) {
        var i = {
            display: "block"
        }
          , s = n[r ? "os2" : "p2"]
          , o = n[r ? "p2" : "os2"];
        e._isFlipped = r,
        i[n.a + "Percent"] = r ? -100 : 0,
        i[n.a] = r ? "1px" : 0,
        i["border" + s + "Width"] = 1,
        i["border" + o + "Width"] = 0,
        i[n.p] = t + "px",
        ci.set(e, i)
    }, Ts = [], Es = {}, _s = function() {
        return Di || (Di = yi(zs))
    }, Ss = function() {
        Di || (Di = yi(zs),
        qi || $s("scrollStart"),
        qi = Ri())
    }, ks = function() {
        return !Ti && !Mi && !fi.fullscreenElement && vi.restart(!0)
    }, Fs = {}, As = [], Ps = [], Os = function(e) {
        var t, n = ci.ticker.frame, r = [], i = 0;
        if (Bi !== n || Ni) {
            for (Ns(); i < Ps.length; i += 4)
                (t = pi.matchMedia(Ps[i]).matches) !== Ps[i + 3] && (Ps[i + 3] = t,
                t ? r.push(i) : Ns(1, Ps[i]) || es(Ps[i + 2]) && Ps[i + 2]());
            for (Bs(),
            i = 0; i < r.length; i++)
                t = r[i],
                Li = Ps[t],
                Ps[t + 2] = Ps[t + 1](e);
            Li = 0,
            di && js(0, 1),
            Bi = n,
            $s("matchMedia")
        }
    }, Ms = function e() {
        return vs(Zs, "scrollEnd", e) || js(!0)
    }, $s = function(e) {
        return Fs[e] && Fs[e].map(function(e) {
            return e()
        }) || As
    }, Ls = [], Bs = function(e) {
        for (var t = 0; t < Ls.length; t += 4)
            e && Ls[t + 3] !== e || (Ls[t].style.cssText = Ls[t + 1],
            Ls[t + 2].uncache = 1)
    }, Ns = function(e, t) {
        var n;
        for (Si = 0; Si < Ts.length; Si++)
            n = Ts[Si],
            t && n.media !== t || (e ? n.kill(1) : (n.scroll.rec || (n.scroll.rec = n.scroll()),
            n.revert()));
        Bs(t),
        t || $s("revert")
    }, js = function(e, t) {
        if (!qi || e) {
            var n = $s("refreshInit");
            for (Pi && Zs.sort(),
            t || Ns(),
            Si = 0; Si < Ts.length; Si++)
                Ts[Si].refresh();
            for (n.forEach(function(e) {
                return e && e.render && e.render(-1)
            }),
            Si = Ts.length; Si--; )
                Ts[Si].scroll.rec = 0;
            vi.pause(),
            $s("refresh")
        } else
            ms(Zs, "scrollEnd", Ms)
    }, Is = 0, Rs = 1, zs = function() {
        var e = Ts.length
          , t = Ri()
          , n = t - zi >= 50
          , r = e && Ts[0].scroll();
        if (Rs = Is > r ? -1 : 1,
        Is = r,
        n && (qi && !Ei && t - qi > 200 && (qi = 0,
        $s("scrollEnd")),
        wi = zi,
        zi = t),
        Rs < 0) {
            for (Si = e; Si--; )
                Ts[Si] && Ts[Si].update(0, n);
            Rs = 1
        } else
            for (Si = 0; Si < e; Si++)
                Ts[Si] && Ts[Si].update(0, n);
        Di = 0
    }, qs = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex"], Hs = qs.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", os, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]), Ws = function(e, t, n, r) {
        if (e.parentNode !== t) {
            for (var i, s = qs.length, o = t.style, a = e.style; s--; )
                o[i = qs[s]] = n[i];
            o.position = "absolute" === n.position ? "absolute" : "relative",
            "inline" === n.display && (o.display = "inline-block"),
            a.bottom = a.right = "auto",
            o.overflow = "visible",
            o.boxSizing = "border-box",
            o.width = fs(e, ls) + as,
            o.height = fs(e, us) + as,
            o.padding = a.margin = a.top = a.left = "0",
            Xs(r),
            a.width = a.maxWidth = n.width,
            a.height = a.maxHeight = n.height,
            a.padding = n.padding,
            e.parentNode.insertBefore(t, e),
            t.appendChild(e)
        }
    }, Gs = /([A-Z])/g, Xs = function(e) {
        if (e) {
            var t, n, r = e.t.style, i = e.length, s = 0;
            for ((e.t._gsap || ci.core.getCache(e.t)).uncache = 1; s < i; s += 2)
                n = e[s + 1],
                t = e[s],
                n ? r[t] = n : r[t] && r.removeProperty(t.replace(Gs, "-$1").toLowerCase())
        }
    }, Vs = function(e) {
        for (var t = Hs.length, n = e.style, r = [], i = 0; i < t; i++)
            r.push(Hs[i], n[Hs[i]]);
        return r.t = e,
        r
    }, Us = {
        left: 0,
        top: 0
    }, Ys = function(e, t, n, r, i, s, o, a, l, u, c, d) {
        if (es(e) && (e = e(a)),
        Zi(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? xs("0" + e.substr(3), n) : 0)),
        ts(e))
            o && Cs(o, n, r, !0);
        else {
            es(t) && (t = t(a));
            var p, f, h, g = bi(t)[0] || gi, m = ps(g) || {}, v = e.split(" ");
            m && (m.left || m.top) || "none" !== cs(g).display || (h = g.style.display,
            g.style.display = "block",
            m = ps(g),
            h ? g.style.display = h : g.style.removeProperty("display")),
            p = xs(v[0], m[r.d]),
            f = xs(v[1] || "0", n),
            e = m[r.p] - l[r.p] - u + p + i - f,
            o && Cs(o, f, r, n - f < 20 || o._isStart && f > 20),
            n -= n - f
        }
        if (s) {
            var y = e + n
              , D = s._isStart;
            d = "scroll" + r.d2,
            Cs(s, y, r, D && y > 20 || !D && (c ? Math.max(gi[d], hi[d]) : s.parentNode[d]) <= y + 1),
            c && (l = ps(o),
            c && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + as))
        }
        return Math.round(e)
    }, Qs = /(?:webkit|moz|length|cssText|inset)/i, Ks = function(e, t, n, r) {
        if (e.parentNode !== t) {
            var i, s, o = e.style;
            if (t === gi) {
                for (i in e._stOrig = o.cssText,
                s = cs(e))
                    +i || Qs.test(i) || !s[i] || "string" != typeof o[i] || "0" === i || (o[i] = s[i]);
                o.top = n,
                o.left = r
            } else
                o.cssText = e._stOrig;
            ci.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }, Js = function(e, t) {
        var n, r, i = Yi(e, t), s = "_scroll" + t.p2, o = function t(o, a, l, u, c) {
            var d = t.tween
              , p = a.onComplete
              , f = {};
            return d && d.kill(),
            n = Math.round(l),
            a[s] = o,
            a.modifiers = f,
            f[s] = function(e) {
                return (e = Math.round(i())) !== n && e !== r && Math.abs(e - n) > 2 ? (d.kill(),
                t.tween = 0) : e = l + u * d.ratio + c * d.ratio * d.ratio,
                r = n,
                n = Math.round(e)
            }
            ,
            a.onComplete = function() {
                t.tween = 0,
                p && p.call(d)
            }
            ,
            d = t.tween = ci.to(e, a)
        };
        return e[s] = i,
        e.addEventListener("mousewheel", function() {
            return o.tween && o.tween.kill() && (o.tween = 0)
        }),
        o
    };
    ls.op = us;
    var Zs = function() {
        function e(t, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            di || e.register(ci) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(t, n)
        }
        var t, n, r;
        return t = e,
        r = [{
            key: "register",
            value: function(t) {
                if (!di && (ci = t || Xi(),
                Gi() && window.document && (pi = window,
                fi = document,
                hi = fi.documentElement,
                gi = fi.body),
                ci && (bi = ci.utils.toArray,
                xi = ci.utils.clamp,
                Oi = ci.core.suppressOverwrites || Wi,
                ci.core.globals("ScrollTrigger", e),
                gi))) {
                    yi = pi.requestAnimationFrame || function(e) {
                        return setTimeout(e, 16)
                    }
                    ,
                    ms(pi, "mousewheel", Ss),
                    mi = [pi, fi, hi, gi],
                    ms(fi, "scroll", Ss);
                    var n, r = gi.style, i = r.borderTop;
                    r.borderTop = "1px solid #000",
                    n = ps(gi),
                    us.m = Math.round(n.top + us.sc()) || 0,
                    ls.m = Math.round(n.left + ls.sc()) || 0,
                    i ? r.borderTop = i : r.removeProperty("border-top"),
                    Ci = setInterval(_s, 200),
                    ci.delayedCall(.5, function() {
                        return Ni = 0
                    }),
                    ms(fi, "touchcancel", Wi),
                    ms(gi, "touchstart", Wi),
                    gs(ms, fi, "pointerdown,touchstart,mousedown", function() {
                        return Ei = 1
                    }),
                    gs(ms, fi, "pointerup,touchend,mouseup", function() {
                        return Ei = 0
                    }),
                    _i = ci.utils.checkPrefix("transform"),
                    Hs.push(_i),
                    di = Ri(),
                    vi = ci.delayedCall(.2, js).pause(),
                    Ai = [fi, "visibilitychange", function() {
                        var e = pi.innerWidth
                          , t = pi.innerHeight;
                        fi.hidden ? (ki = e,
                        Fi = t) : ki === e && Fi === t || ks()
                    }
                    , fi, "DOMContentLoaded", js, pi, "load", function() {
                        return qi || js()
                    }
                    , pi, "resize", ks],
                    Ji(ms)
                }
                return di
            }
        }, {
            key: "defaults",
            value: function(e) {
                for (var t in e)
                    Ds[t] = e[t]
            }
        }, {
            key: "kill",
            value: function() {
                Hi = 0,
                Ts.slice(0).forEach(function(e) {
                    return e.kill(1)
                })
            }
        }, {
            key: "config",
            value: function(e) {
                "limitCallbacks"in e && ($i = !!e.limitCallbacks);
                var t = e.syncInterval;
                t && clearInterval(Ci) || (Ci = t) && setInterval(_s, t),
                "autoRefreshEvents"in e && (Ji(vs) || Ji(ms, e.autoRefreshEvents || "none"),
                Mi = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }
        }, {
            key: "scrollerProxy",
            value: function(e, t) {
                var n = bi(e)[0]
                  , r = Ii.indexOf(n)
                  , i = Vi(n);
                ~r && Ii.splice(r, i ? 6 : 2),
                i ? ji.unshift(pi, t, gi, t, hi, t) : ji.unshift(n, t)
            }
        }, {
            key: "matchMedia",
            value: function(e) {
                var t, n, r, i, s;
                for (n in e)
                    r = Ps.indexOf(n),
                    i = e[n],
                    Li = n,
                    "all" === n ? i() : (t = pi.matchMedia(n)) && (t.matches && (s = i()),
                    ~r ? (Ps[r + 1] = is(Ps[r + 1], i),
                    Ps[r + 2] = is(Ps[r + 2], s)) : (r = Ps.length,
                    Ps.push(n, i, s),
                    t.addListener ? t.addListener(Os) : t.addEventListener("change", Os)),
                    Ps[r + 3] = t.matches),
                    Li = 0;
                return Ps
            }
        }, {
            key: "clearMatchMedia",
            value: function(e) {
                e || (Ps.length = 0),
                (e = Ps.indexOf(e)) >= 0 && Ps.splice(e, 4)
            }
        }],
        (n = [{
            key: "init",
            value: function(t, n) {
                if (this.progress = this.start = 0,
                this.vars && this.kill(1),
                Hi) {
                    var r, i, s, o, a, l, u, c, d, p, f, h, g, m, v, y, D, b, x, w, C, T, E, _, S, k, F, A, P, O, M, $, L, B, N, j, I, R, z, q = (t = ds(Zi(t) || ts(t) || t.nodeType ? {
                        trigger: t
                    } : t, Ds)).horizontal ? ls : us, H = t, W = H.onUpdate, G = H.toggleClass, X = H.id, V = H.onToggle, U = H.onRefresh, Y = H.scrub, Q = H.trigger, K = H.pin, J = H.pinSpacing, Z = H.invalidateOnRefresh, ee = H.anticipatePin, te = H.onScrubComplete, ne = H.onSnapComplete, re = H.once, ie = H.snap, se = H.pinReparent, oe = !Y && 0 !== Y, ae = bi(t.scroller || pi)[0], le = ci.core.getCache(ae), ue = Vi(ae), ce = "pinType"in t ? "fixed" === t.pinType : ue || "fixed" === Ui(ae, "pinType"), de = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], pe = oe && t.toggleActions.split(" "), fe = "markers"in t ? t.markers : Ds.markers, he = ue ? 0 : parseFloat(cs(ae)["border" + q.p2 + "Width"]) || 0, ge = this, me = t.onRefreshInit && function() {
                        return t.onRefreshInit(ge)
                    }
                    , ve = function(e, t, n) {
                        var r = n.d
                          , i = n.d2
                          , s = n.a;
                        return (s = Ui(e, "getBoundingClientRect")) ? function() {
                            return s()[r]
                        }
                        : function() {
                            return (t ? pi["inner" + i] : e["client" + i]) || 0
                        }
                    }(ae, ue, q), ye = function(e, t) {
                        return !t || ~ji.indexOf(e) ? Qi(e) : function() {
                            return Us
                        }
                    }(ae, ue);
                    ge.media = Li,
                    ee *= 45,
                    Ts.push(ge),
                    ge.scroller = ae,
                    ge.scroll = Yi(ae, q),
                    a = ge.scroll(),
                    ge.vars = t,
                    n = n || t.animation,
                    "refreshPriority"in t && (Pi = 1),
                    le.tweenScroll = le.tweenScroll || {
                        top: Js(ae, us),
                        left: Js(ae, ls)
                    },
                    ge.tweenTo = r = le.tweenScroll[q.p],
                    n && (n.vars.lazy = !1,
                    n._initted || !1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.render(0, !0, !0),
                    ge.animation = n.pause(),
                    n.scrollTrigger = ge,
                    ($ = ts(Y) && Y) && (M = ci.to(n, {
                        ease: "power3",
                        duration: $,
                        onComplete: function() {
                            return te && te(ge)
                        }
                    })),
                    P = 0,
                    X || (X = n.vars.id)),
                    ie && (ns(ie) || (ie = {
                        snapTo: ie
                    }),
                    "scrollBehavior"in gi.style && ci.set(ue ? [gi, hi] : ae, {
                        scrollBehavior: "auto"
                    }),
                    s = es(ie.snapTo) ? ie.snapTo : "labels" === ie.snapTo ? function(e) {
                        return function(t) {
                            return ci.utils.snap(hs(e), t)
                        }
                    }(n) : "labelsDirectional" === ie.snapTo ? (R = n,
                    function(e, t) {
                        var n, r = hs(R);
                        if (r.sort(function(e, t) {
                            return e - t
                        }),
                        t.direction > 0) {
                            for (n = 0; n < r.length; n++)
                                if (r[n] >= e)
                                    return r[n];
                            return r.pop()
                        }
                        for (n = r.length; n--; )
                            if (r[n] <= e)
                                return r[n];
                        return r[0]
                    }
                    ) : ci.utils.snap(ie.snapTo),
                    L = ie.duration || {
                        min: .1,
                        max: 2
                    },
                    L = ns(L) ? xi(L.min, L.max) : xi(L, L),
                    B = ci.delayedCall(ie.delay || $ / 2 || .1, function() {
                        if (Math.abs(ge.getVelocity()) < 10 && !Ei) {
                            var e = n && !oe ? n.totalProgress() : ge.progress
                              , t = (e - O) / (Ri() - wi) * 1e3 || 0
                              , i = ss(t / 2) * t / .185
                              , o = e + i
                              , a = xi(0, 1, s(o, ge))
                              , l = ge.scroll()
                              , d = Math.round(u + a * m)
                              , p = r.tween;
                            if (l <= c && l >= u && d !== l) {
                                if (p && !p._initted && p.data <= Math.abs(d - l))
                                    return;
                                r(d, {
                                    duration: L(ss(.185 * Math.max(ss(o - e), ss(a - e)) / t / .05 || 0)),
                                    ease: ie.ease || "power3",
                                    data: Math.abs(d - l),
                                    onComplete: function() {
                                        P = O = n && !oe ? n.totalProgress() : ge.progress,
                                        ne && ne(ge)
                                    }
                                }, l, i * m, d - l - i * m)
                            }
                        } else
                            ge.isActive && B.restart(!0)
                    }).pause()),
                    X && (Es[X] = ge),
                    Q = ge.trigger = bi(Q || K)[0],
                    K = !0 === K ? Q : bi(K)[0],
                    Zi(G) && (G = {
                        targets: Q,
                        className: G
                    }),
                    K && (!1 === J || "margin" === J || (J = !(!J && "flex" === cs(K.parentNode).display) && os),
                    ge.pin = K,
                    !1 !== t.force3D && ci.set(K, {
                        force3D: !0
                    }),
                    (i = ci.core.getCache(K)).spacer ? v = i.pinState : (i.spacer = b = fi.createElement("div"),
                    b.setAttribute("class", "pin-spacer" + (X ? " pin-spacer-" + X : "")),
                    i.pinState = v = Vs(K)),
                    ge.spacer = b = i.spacer,
                    A = cs(K),
                    _ = A[J + q.os2],
                    w = ci.getProperty(K),
                    C = ci.quickSetter(K, q.a, as),
                    Ws(K, b, A),
                    D = Vs(K)),
                    fe && (g = ns(fe) ? ds(fe, ys) : ys,
                    f = ws("scroller-start", X, ae, q, g, 0),
                    h = ws("scroller-end", X, ae, q, g, 0, f),
                    x = f["offset" + q.op.d2],
                    d = ws("start", X, ae, q, g, x),
                    p = ws("end", X, ae, q, g, x),
                    ce || ((z = ue ? gi : ae).style.position = "absolute" === cs(z).position ? "absolute" : "relative",
                    ci.set([f, h], {
                        force3D: !0
                    }),
                    k = ci.quickSetter(f, q.a, as),
                    F = ci.quickSetter(h, q.a, as))),
                    ge.revert = function(e) {
                        var t = !1 !== e || !ge.enabled
                          , r = Ti;
                        t !== o && (t && (j = Math.max(ge.scroll(), ge.scroll.rec || 0),
                        N = ge.progress,
                        I = n && n.progress()),
                        d && [d, p, f, h].forEach(function(e) {
                            return e.style.display = t ? "none" : "block"
                        }),
                        t && (Ti = 1),
                        ge.update(t),
                        Ti = r,
                        K && (t ? function(e, t, n) {
                            if (Xs(n),
                            e.parentNode === t) {
                                var r = t.parentNode;
                                r && (r.insertBefore(e, t),
                                r.removeChild(t))
                            }
                        }(K, b, v) : (!se || !ge.isActive) && Ws(K, b, cs(K), S)),
                        o = t)
                    }
                    ,
                    ge.refresh = function(r) {
                        if (!Ti && ge.enabled)
                            if (K && r && qi)
                                ms(e, "scrollEnd", Ms);
                            else {
                                Ti = 1,
                                M && M.pause(),
                                Z && n && n.progress(0).invalidate(),
                                o || ge.revert();
                                for (var i, s, g, x, C, _, k, F, A, P = ve(), O = ye(), $ = Ki(ae, q), L = 0, B = 0, R = t.end, z = t.endTrigger || Q, H = t.start || (0 !== t.start && Q ? K ? "0 0" : "0 100%" : 0), W = Q && Math.max(0, Ts.indexOf(ge)) || 0, G = W; G--; )
                                    (k = Ts[G].pin) && (k === Q || k === K) && Ts[G].revert();
                                for (u = Ys(H, Q, P, q, ge.scroll(), d, f, ge, O, he, ce, $) || (K ? -.001 : 0),
                                es(R) && (R = R(ge)),
                                Zi(R) && !R.indexOf("+=") && (~R.indexOf(" ") ? R = (Zi(H) ? H.split(" ")[0] : "") + R : (L = xs(R.substr(2), P),
                                R = Zi(H) ? H : u + L,
                                z = Q)),
                                c = Math.max(u, Ys(R || (z ? "100% 0" : $), z, P, q, ge.scroll() + L, p, h, ge, O, he, ce, $)) || -.001,
                                m = c - u || (u -= .01) && .001,
                                L = 0,
                                G = W; G--; )
                                    (k = (_ = Ts[G]).pin) && _.start - _._pinPush < u && (i = _.end - _.start,
                                    k === Q && (L += i),
                                    k === K && (B += i));
                                if (u += L,
                                c += L,
                                ge._pinPush = B,
                                d && L && ((i = {})[q.a] = "+=" + L,
                                ci.set([d, p], i)),
                                K)
                                    i = cs(K),
                                    x = q === us,
                                    g = ge.scroll(),
                                    T = parseFloat(w(q.a)) + B,
                                    !$ && c > 1 && ((ue ? gi : ae).style["overflow-" + q.a] = "scroll"),
                                    Ws(K, b, i),
                                    D = Vs(K),
                                    s = ps(K, !0),
                                    F = ce && Yi(ae, x ? ls : us)(),
                                    J && ((S = [J + q.os2, m + B + as]).t = b,
                                    (G = J === os ? fs(K, q) + m + B : 0) && S.push(q.d, G + as),
                                    Xs(S),
                                    ce && ge.scroll(j)),
                                    ce && ((C = {
                                        top: s.top + (x ? g - u : F) + as,
                                        left: s.left + (x ? F : g - u) + as,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    }).width = C.maxWidth = Math.ceil(s.width) + as,
                                    C.height = C.maxHeight = Math.ceil(s.height) + as,
                                    C.margin = C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = "0",
                                    C.padding = i.padding,
                                    C.paddingTop = i.paddingTop,
                                    C.paddingRight = i.paddingRight,
                                    C.paddingBottom = i.paddingBottom,
                                    C.paddingLeft = i.paddingLeft,
                                    y = function(e, t, n) {
                                        for (var r, i = [], s = e.length, o = n ? 8 : 0; o < s; o += 2)
                                            r = e[o],
                                            i.push(r, r in t ? t[r] : e[o + 1]);
                                        return i.t = e.t,
                                        i
                                    }(v, C, se)),
                                    n ? (A = n._initted,
                                    Oi(1),
                                    n.progress(1, !0),
                                    E = w(q.a) - T + m + B,
                                    m !== E && y.splice(y.length - 2, 2),
                                    n.progress(0, !0),
                                    A || n.invalidate(),
                                    Oi(0)) : E = m;
                                else if (Q && ge.scroll())
                                    for (s = Q.parentNode; s && s !== gi; )
                                        s._pinOffset && (u -= s._pinOffset,
                                        c -= s._pinOffset),
                                        s = s.parentNode;
                                for (G = 0; G < W; G++)
                                    (_ = Ts[G].pin) && (_ === Q || _ === K) && Ts[G].revert(!1);
                                ge.start = u,
                                ge.end = c,
                                (a = l = ge.scroll()) < j && ge.scroll(j),
                                ge.revert(!1),
                                Ti = 0,
                                n && oe && n._initted && n.progress(I, !0).render(n.time(), !0, !0),
                                N !== ge.progress && (M && n.totalProgress(N, !0),
                                ge.progress = N,
                                ge.update()),
                                K && J && (b._pinOffset = Math.round(ge.progress * E)),
                                U && U(ge)
                            }
                    }
                    ,
                    ge.getVelocity = function() {
                        return (ge.scroll() - l) / (Ri() - wi) * 1e3 || 0
                    }
                    ,
                    ge.update = function(e, t) {
                        var i, s, o, d, p, h = ge.scroll(), g = e ? 0 : (h - u) / m, v = g < 0 ? 0 : g > 1 ? 1 : g || 0, x = ge.progress;
                        if (t && (l = a,
                        a = h,
                        ie && (O = P,
                        P = n && !oe ? n.totalProgress() : v)),
                        ee && !v && K && !Ti && !Ni && qi && u < h + (h - l) / (Ri() - wi) * ee && (v = 1e-4),
                        v !== x && ge.enabled) {
                            if (d = (p = (i = ge.isActive = !!v && v < 1) !== (!!x && x < 1)) || !!v != !!x,
                            ge.direction = v > x ? 1 : -1,
                            ge.progress = v,
                            oe || (!M || Ti || Ni ? n && n.totalProgress(v, !!Ti) : (M.vars.totalProgress = v,
                            M.invalidate().restart())),
                            K)
                                if (e && J && (b.style[J + q.os2] = _),
                                ce) {
                                    if (d) {
                                        if (o = !e && v > x && c + 1 > h && h + 1 >= Ki(ae, q),
                                        se)
                                            if (e || !i && !o)
                                                Ks(K, b);
                                            else {
                                                var w = ps(K, !0)
                                                  , S = h - u;
                                                Ks(K, gi, w.top + (q === us ? S : 0) + as, w.left + (q === us ? 0 : S) + as)
                                            }
                                        Xs(i || o ? y : D),
                                        E !== m && v < 1 && i || C(T + (1 !== v || o ? 0 : E))
                                    }
                                } else
                                    C(T + E * v);
                            ie && !r.tween && !Ti && !Ni && B.restart(!0),
                            G && (p || re && v && (v < 1 || !$i)) && bi(G.targets).forEach(function(e) {
                                return e.classList[i || re ? "add" : "remove"](G.className)
                            }),
                            W && !oe && !e && W(ge),
                            d && !Ti ? (s = v && !x ? 0 : 1 === v ? 1 : 1 === x ? 2 : 3,
                            oe && (o = !p && "none" !== pe[s + 1] && pe[s + 1] || pe[s],
                            n && ("complete" === o || "reset" === o || o in n) && ("complete" === o ? n.pause().totalProgress(1) : "reset" === o ? n.restart(!0).pause() : n[o]()),
                            W && W(ge)),
                            !p && $i || (V && p && V(ge),
                            de[s] && de[s](ge),
                            re && (1 === v ? ge.kill(!1, 1) : de[s] = 0),
                            p || de[s = 1 === v ? 1 : 3] && de[s](ge))) : oe && W && !Ti && W(ge)
                        }
                        F && (k(h + (f._isFlipped ? 1 : 0)),
                        F(h))
                    }
                    ,
                    ge.enable = function() {
                        ge.enabled || (ge.enabled = !0,
                        ms(ae, "resize", ks),
                        ms(ae, "scroll", Ss),
                        me && ms(e, "refreshInit", me),
                        n && n.add ? ci.delayedCall(.01, function() {
                            return u || c || ge.refresh()
                        }) && (m = .01) && (u = c = 0) : ge.refresh())
                    }
                    ,
                    ge.disable = function(t, n) {
                        if (ge.enabled && (!1 !== t && ge.revert(),
                        ge.enabled = ge.isActive = !1,
                        n || M && M.pause(),
                        j = 0,
                        i && (i.uncache = 1),
                        me && vs(e, "refreshInit", me),
                        B && (B.pause(),
                        r.tween && r.tween.kill() && (r.tween = 0)),
                        !ue)) {
                            for (var s = Ts.length; s--; )
                                if (Ts[s].scroller === ae && Ts[s] !== ge)
                                    return;
                            vs(ae, "resize", ks),
                            vs(ae, "scroll", Ss)
                        }
                    }
                    ,
                    ge.kill = function(e, t) {
                        ge.disable(e, t),
                        X && delete Es[X];
                        var r = Ts.indexOf(ge);
                        Ts.splice(r, 1),
                        r === Si && Rs > 0 && Si--,
                        n && (n.scrollTrigger = null,
                        e && n.render(-1),
                        t || n.kill()),
                        d && [d, p, f, h].forEach(function(e) {
                            return e.parentNode.removeChild(e)
                        }),
                        K && (i && (i.uncache = 1),
                        r = 0,
                        Ts.forEach(function(e) {
                            return e.pin === K && r++
                        }),
                        r || (i.spacer = 0))
                    }
                    ,
                    ge.enable()
                } else
                    this.update = this.refresh = this.kill = Wi
            }
        }]) && li(t.prototype, n),
        r && li(t, r),
        e
    }();
    Zs.version = "3.6.0",
    Zs.saveStyles = function(e) {
        return e ? bi(e).forEach(function(e) {
            if (e && e.style) {
                var t = Ls.indexOf(e);
                t >= 0 && Ls.splice(t, 4),
                Ls.push(e, e.style.cssText, ci.core.getCache(e), Li)
            }
        }) : Ls
    }
    ,
    Zs.revert = function(e, t) {
        return Ns(!e, t)
    }
    ,
    Zs.create = function(e, t) {
        return new Zs(e,t)
    }
    ,
    Zs.refresh = function(e) {
        return e ? ks() : js(!0)
    }
    ,
    Zs.update = zs,
    Zs.maxScroll = function(e, t) {
        return Ki(e, t ? ls : us)
    }
    ,
    Zs.getScrollFunc = function(e, t) {
        return Yi(bi(e)[0], t ? ls : us)
    }
    ,
    Zs.getById = function(e) {
        return Es[e]
    }
    ,
    Zs.getAll = function() {
        return Ts.slice(0)
    }
    ,
    Zs.isScrolling = function() {
        return !!qi
    }
    ,
    Zs.addEventListener = function(e, t) {
        var n = Fs[e] || (Fs[e] = []);
        ~n.indexOf(t) || n.push(t)
    }
    ,
    Zs.removeEventListener = function(e, t) {
        var n = Fs[e]
          , r = n && n.indexOf(t);
        r >= 0 && n.splice(r, 1)
    }
    ,
    Zs.batch = function(e, t) {
        var n, r = [], i = {}, s = t.interval || .016, o = t.batchMax || 1e9, a = function(e, t) {
            var n = []
              , r = []
              , i = ci.delayedCall(s, function() {
                t(n, r),
                n = [],
                r = []
            }).pause();
            return function(e) {
                n.length || i.restart(!0),
                n.push(e.trigger),
                r.push(e),
                o <= n.length && i.progress(1)
            }
        };
        for (n in t)
            i[n] = "on" === n.substr(0, 2) && es(t[n]) && "onRefreshInit" !== n ? a(0, t[n]) : t[n];
        return es(o) && (o = o(),
        ms(Zs, "refresh", function() {
            return o = t.batchMax()
        })),
        bi(e).forEach(function(e) {
            var t = {};
            for (n in i)
                t[n] = i[n];
            t.trigger = e,
            r.push(Zs.create(t))
        }),
        r
    }
    ,
    Zs.sort = function(e) {
        return Ts.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
    ,
    Xi() && ci.registerPlugin(Zs);
    var eo = n(0)
      , to = n(1)
      , no = n.n(to);
    window.$ = window.jQuery = n(3),
    ni.use([function({swiper: e, extendParams: t, on: n, emit: r}) {
        function i(t) {
            let n;
            return t && (n = Ar(t),
            e.params.uniqueNavElements && "string" == typeof t && n.length > 1 && 1 === e.$el.find(t).length && (n = e.$el.find(t))),
            n
        }
        function s(t, n) {
            const r = e.params.navigation;
            t && t.length > 0 && (t[n ? "addClass" : "removeClass"](r.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n),
            e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](r.lockClass))
        }
        function o() {
            if (e.params.loop)
                return;
            const {$nextEl: t, $prevEl: n} = e.navigation;
            s(n, e.isBeginning && !e.params.rewind),
            s(t, e.isEnd && !e.params.rewind)
        }
        function a(t) {
            t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev()
        }
        function l(t) {
            t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
        }
        function u() {
            const t = e.params.navigation;
            if (e.params.navigation = ri(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !t.nextEl && !t.prevEl)
                return;
            const n = i(t.nextEl)
              , r = i(t.prevEl);
            n && n.length > 0 && n.on("click", l),
            r && r.length > 0 && r.on("click", a),
            Object.assign(e.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: r,
                prevEl: r && r[0]
            }),
            e.enabled || (n && n.addClass(t.lockClass),
            r && r.addClass(t.lockClass))
        }
        function c() {
            const {$nextEl: t, $prevEl: n} = e.navigation;
            t && t.length && (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            n && n.length && (n.off("click", a),
            n.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }),
        e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        },
        n("init", () => {
            u(),
            o()
        }
        ),
        n("toEdge fromEdge lock unlock", () => {
            o()
        }
        ),
        n("destroy", () => {
            c()
        }
        ),
        n("enable disable", () => {
            const {$nextEl: t, $prevEl: n} = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
            n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        }
        ),
        n("click", (t, n) => {
            const {$nextEl: i, $prevEl: s} = e.navigation
              , o = n.target;
            if (e.params.navigation.hideOnClick && !Ar(o).is(s) && !Ar(o).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o)))
                    return;
                let t;
                i ? t = i.hasClass(e.params.navigation.hiddenClass) : s && (t = s.hasClass(e.params.navigation.hiddenClass)),
                r(!0 === t ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                s && s.toggleClass(e.params.navigation.hiddenClass)
            }
        }
        ),
        Object.assign(e.navigation, {
            update: o,
            init: u,
            destroy: c
        })
    }
    , function({swiper: e, extendParams: t, on: n, emit: r}) {
        const i = br();
        let s, o, a, l, u = !1, c = null, d = null;
        function p() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t, rtlTranslate: n, progress: r} = e
              , {$dragEl: i, $el: s} = t
              , l = e.params.scrollbar;
            let u = o
              , d = (a - o) * r;
            n ? (d = -d) > 0 ? (u = o - d,
            d = 0) : -d + o > a && (u = a + d) : d < 0 ? (u = o + d,
            d = 0) : d + o > a && (u = a - d),
            e.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`),
            i[0].style.width = `${u}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`),
            i[0].style.height = `${u}px`),
            l.hide && (clearTimeout(c),
            s[0].style.opacity = 1,
            c = setTimeout( () => {
                s[0].style.opacity = 0,
                s.transition(400)
            }
            , 1e3))
        }
        function f() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t} = e
              , {$dragEl: n, $el: r} = t;
            n[0].style.width = "",
            n[0].style.height = "",
            a = e.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
            l = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
            o = "auto" === e.params.scrollbar.dragSize ? a * l : parseInt(e.params.scrollbar.dragSize, 10),
            e.isHorizontal() ? n[0].style.width = `${o}px` : n[0].style.height = `${o}px`,
            r[0].style.display = l >= 1 ? "none" : "",
            e.params.scrollbar.hide && (r[0].style.opacity = 0),
            e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }
        function h(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }
        function g(t) {
            const {scrollbar: n, rtlTranslate: r} = e
              , {$el: i} = n;
            let l;
            l = (h(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== s ? s : o / 2)) / (a - o),
            l = Math.max(Math.min(l, 1), 0),
            r && (l = 1 - l);
            const u = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * l;
            e.updateProgress(u),
            e.setTranslate(u),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        function m(t) {
            const n = e.params.scrollbar
              , {scrollbar: i, $wrapperEl: o} = e
              , {$el: a, $dragEl: l} = i;
            u = !0,
            s = t.target === l[0] || t.target === l ? h(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
            t.preventDefault(),
            t.stopPropagation(),
            o.transition(100),
            l.transition(100),
            g(t),
            clearTimeout(d),
            a.transition(0),
            n.hide && a.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", t)
        }
        function v(t) {
            const {scrollbar: n, $wrapperEl: i} = e
              , {$el: s, $dragEl: o} = n;
            u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            g(t),
            i.transition(0),
            s.transition(0),
            o.transition(0),
            r("scrollbarDragMove", t))
        }
        function y(t) {
            const n = e.params.scrollbar
              , {scrollbar: i, $wrapperEl: s} = e
              , {$el: o} = i;
            u && (u = !1,
            e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            n.hide && (clearTimeout(d),
            d = Pr( () => {
                o.css("opacity", 0),
                o.transition(400)
            }
            , 1e3)),
            r("scrollbarDragEnd", t),
            n.snapOnRelease && e.slideToClosest())
        }
        function D(t) {
            const {scrollbar: n, touchEventsTouch: r, touchEventsDesktop: s, params: o, support: a} = e
              , l = n.$el[0]
              , u = !(!a.passiveListener || !o.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , c = !(!a.passiveListener || !o.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            if (!l)
                return;
            const d = "on" === t ? "addEventListener" : "removeEventListener";
            a.touch ? (l[d](r.start, m, u),
            l[d](r.move, v, u),
            l[d](r.end, y, c)) : (l[d](s.start, m, u),
            i[d](s.move, v, u),
            i[d](s.end, y, c))
        }
        function b() {
            const {scrollbar: t, $el: n} = e;
            e.params.scrollbar = ri(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const r = e.params.scrollbar;
            if (!r.el)
                return;
            let i = Ar(r.el);
            e.params.uniqueNavElements && "string" == typeof r.el && i.length > 1 && 1 === n.find(r.el).length && (i = n.find(r.el));
            let s = i.find(`.${e.params.scrollbar.dragClass}`);
            0 === s.length && (s = Ar(`<div class="${e.params.scrollbar.dragClass}"></div>`),
            i.append(s)),
            Object.assign(t, {
                $el: i,
                el: i[0],
                $dragEl: s,
                dragEl: s[0]
            }),
            r.draggable && e.params.scrollbar.el && D("on"),
            i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }
        function x() {
            e.params.scrollbar.el && D("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }),
        e.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        },
        n("init", () => {
            b(),
            f(),
            p()
        }
        ),
        n("update resize observerUpdate lock unlock", () => {
            f()
        }
        ),
        n("setTranslate", () => {
            p()
        }
        ),
        n("setTransition", (t, n) => {
            !function(t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(n)
        }
        ),
        n("enable disable", () => {
            const {$el: t} = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }
        ),
        n("destroy", () => {
            x()
        }
        ),
        Object.assign(e.scrollbar, {
            updateSize: f,
            setTranslate: p,
            init: b,
            destroy: x
        })
    }
    , function({swiper: e, extendParams: t, on: n, emit: r}) {
        const i = "swiper-pagination";
        let s;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${i}-bullet`,
                bulletActiveClass: `${i}-bullet-active`,
                modifierClass: `${i}-`,
                currentClass: `${i}-current`,
                totalClass: `${i}-total`,
                hiddenClass: `${i}-hidden`,
                progressbarFillClass: `${i}-progressbar-fill`,
                progressbarOppositeClass: `${i}-progressbar-opposite`,
                clickableClass: `${i}-clickable`,
                lockClass: `${i}-lock`,
                horizontalClass: `${i}-horizontal`,
                verticalClass: `${i}-vertical`
            }
        }),
        e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let o = 0;
        function a() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }
        function l(t, n) {
            const {bulletActiveClass: r} = e.params.pagination;
            t[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`)
        }
        function u() {
            const t = e.rtl
              , n = e.params.pagination;
            if (a())
                return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , u = e.pagination.$el;
            let c;
            const d = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? ((c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides),
            c > d - 1 && (c -= d),
            c < 0 && "bullets" !== e.params.paginationType && (c = d + c)) : c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
            "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const r = e.pagination.bullets;
                let i, a, d;
                if (n.dynamicBullets && (s = r.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                u.css(e.isHorizontal() ? "width" : "height", `${s * (n.dynamicMainBullets + 4)}px`),
                n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((o += c - (e.previousIndex - e.loopedSlides || 0)) > n.dynamicMainBullets - 1 ? o = n.dynamicMainBullets - 1 : o < 0 && (o = 0)),
                i = Math.max(c - o, 0),
                d = ((a = i + (Math.min(r.length, n.dynamicMainBullets) - 1)) + i) / 2),
                r.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${n.bulletActiveClass}${e}`).join(" ")),
                u.length > 1)
                    r.each(e => {
                        const t = Ar(e)
                          , r = t.index();
                        r === c && t.addClass(n.bulletActiveClass),
                        n.dynamicBullets && (r >= i && r <= a && t.addClass(`${n.bulletActiveClass}-main`),
                        r === i && l(t, "prev"),
                        r === a && l(t, "next"))
                    }
                    );
                else {
                    const t = r.eq(c)
                      , s = t.index();
                    if (t.addClass(n.bulletActiveClass),
                    n.dynamicBullets) {
                        const t = r.eq(i)
                          , o = r.eq(a);
                        for (let e = i; e <= a; e += 1)
                            r.eq(e).addClass(`${n.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (s >= r.length) {
                                for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                                    r.eq(r.length - e).addClass(`${n.bulletActiveClass}-main`);
                                r.eq(r.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                            } else
                                l(t, "prev"),
                                l(o, "next");
                        else
                            l(t, "prev"),
                            l(o, "next")
                    }
                }
                if (n.dynamicBullets) {
                    const i = Math.min(r.length, n.dynamicMainBullets + 4)
                      , o = (s * i - s) / 2 - d * s
                      , a = t ? "right" : "left";
                    r.css(e.isHorizontal() ? a : "top", `${o}px`)
                }
            }
            if ("fraction" === n.type && (u.find(ii(n.currentClass)).text(n.formatFractionCurrent(c + 1)),
            u.find(ii(n.totalClass)).text(n.formatFractionTotal(d))),
            "progressbar" === n.type) {
                let t;
                t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const r = (c + 1) / d;
                let i = 1
                  , s = 1;
                "horizontal" === t ? i = r : s = r,
                u.find(ii(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${s})`).transition(e.params.speed)
            }
            "custom" === n.type && n.renderCustom ? (u.html(n.renderCustom(e, c + 1, d)),
            r("paginationRender", u[0])) : r("paginationUpdate", u[0]),
            e.params.watchOverflow && e.enabled && u[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }
        function c() {
            const t = e.params.pagination;
            if (a())
                return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , i = e.pagination.$el;
            let s = "";
            if ("bullets" === t.type) {
                let r = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && r > n && (r = n);
                for (let n = 0; n < r; n += 1)
                    t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                i.html(s),
                e.pagination.bullets = i.find(ii(t.bulletClass))
            }
            "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`,
            i.html(s)),
            "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
            i.html(s)),
            "custom" !== t.type && r("paginationRender", e.pagination.$el[0])
        }
        function d() {
            e.params.pagination = ri(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el)
                return;
            let n = Ar(t.el);
            0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el)).length > 1 && (n = n.filter(t => Ar(t).parents(".swiper")[0] === e.el)),
            "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            n.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
            o = 0,
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass),
            t.clickable && n.on("click", ii(t.bulletClass), function(t) {
                t.preventDefault();
                let n = Ar(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides),
                e.slideTo(n)
            }),
            Object.assign(e.pagination, {
                $el: n,
                el: n[0]
            }),
            e.enabled || n.addClass(t.lockClass))
        }
        function p() {
            const t = e.params.pagination;
            if (a())
                return;
            const n = e.pagination.$el;
            n.removeClass(t.hiddenClass),
            n.removeClass(t.modifierClass + t.type),
            n.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && n.off("click", ii(t.bulletClass))
        }
        n("init", () => {
            d(),
            c(),
            u()
        }
        ),
        n("activeIndexChange", () => {
            e.params.loop ? u() : void 0 === e.snapIndex && u()
        }
        ),
        n("snapIndexChange", () => {
            e.params.loop || u()
        }
        ),
        n("slidesLengthChange", () => {
            e.params.loop && (c(),
            u())
        }
        ),
        n("snapGridLengthChange", () => {
            e.params.loop || (c(),
            u())
        }
        ),
        n("destroy", () => {
            p()
        }
        ),
        n("enable disable", () => {
            const {$el: t} = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        }
        ),
        n("lock unlock", () => {
            u()
        }
        ),
        n("click", (t, n) => {
            const i = n.target
              , {$el: s} = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && s.length > 0 && !Ar(i).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl))
                    return;
                const t = s.hasClass(e.params.pagination.hiddenClass);
                r(!0 === t ? "paginationShow" : "paginationHide"),
                s.toggleClass(e.params.pagination.hiddenClass)
            }
        }
        ),
        Object.assign(e.pagination, {
            render: c,
            update: u,
            init: d,
            destroy: p
        })
    }
    , function({swiper: e, extendParams: t, on: n}) {
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        si({
            effect: "fade",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t} = e
                  , n = e.params.fadeEffect;
                for (let r = 0; r < t.length; r += 1) {
                    const t = e.slides.eq(r);
                    let i = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let s = 0;
                    e.isHorizontal() || (s = i,
                    i = 0);
                    const o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    oi(n, t).css({
                        opacity: o
                    }).transform(`translate3d(${i}px, ${s}px, 0px)`)
                }
            }
            ,
            setTransition: t => {
                const {transformEl: n} = e.params.fadeEffect;
                (n ? e.slides.find(n) : e.slides).transition(t),
                ai({
                    swiper: e,
                    duration: t,
                    transformEl: n,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    , function({swiper: e, extendParams: t, on: n}) {
        function r(e, t) {
            const n = function() {
                let e, t, n;
                return (r, i) => {
                    for (t = -1,
                    e = r.length; e - t > 1; )
                        r[n = e + t >> 1] <= i ? t = n : e = n;
                    return e
                }
            }();
            let r, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = n(this.x, e),
                r = i - 1,
                (e - this.x[r]) * (this.y[i] - this.y[r]) / (this.x[i] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        }
        function i() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0,
            delete e.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        e.controller = {
            control: void 0
        },
        n("beforeInit", () => {
            e.controller.control = e.params.controller.control
        }
        ),
        n("update", () => {
            i()
        }
        ),
        n("resize", () => {
            i()
        }
        ),
        n("observerUpdate", () => {
            i()
        }
        ),
        n("setTranslate", (t, n, r) => {
            e.controller.control && e.controller.setTranslate(n, r)
        }
        ),
        n("setTransition", (t, n, r) => {
            e.controller.control && e.controller.setTransition(n, r)
        }
        ),
        Object.assign(e.controller, {
            setTranslate: function(t, n) {
                const i = e.controller.control;
                let s, o;
                const a = e.constructor;
                function l(t) {
                    const n = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (!function(t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new r(e.slidesGrid,t.slidesGrid) : new r(e.snapGrid,t.snapGrid))
                    }(t),
                    o = -e.controller.spline.interpolate(-n)),
                    o && "container" !== e.params.controller.by || (s = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
                    o = (n - e.minTranslate()) * s + t.minTranslate()),
                    e.params.controller.inverse && (o = t.maxTranslate() - o),
                    t.updateProgress(o),
                    t.setTranslate(o, e),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                if (Array.isArray(i))
                    for (let e = 0; e < i.length; e += 1)
                        i[e] !== n && i[e]instanceof a && l(i[e]);
                else
                    i instanceof a && n !== i && l(i)
            },
            setTransition: function(t, n) {
                const r = e.constructor
                  , i = e.controller.control;
                let s;
                function o(n) {
                    n.setTransition(t, e),
                    0 !== t && (n.transitionStart(),
                    n.params.autoHeight && Pr( () => {
                        n.updateAutoHeight()
                    }
                    ),
                    n.$wrapperEl.transitionEnd( () => {
                        i && (n.params.loop && "slide" === e.params.controller.by && n.loopFix(),
                        n.transitionEnd())
                    }
                    ))
                }
                if (Array.isArray(i))
                    for (s = 0; s < i.length; s += 1)
                        i[s] !== n && i[s]instanceof r && o(i[s]);
                else
                    i instanceof r && n !== i && o(i)
            }
        })
    }
    ]),
    mr.registerPlugin(Zs),
    mr.registerPlugin(eo.SplitText);
    var ro = function() {
        $(".transition").css("autoAlpha", "0"),
        $(".header-item .menu-item").each(function() {
            var e = $(this).text();
            console.log(e),
            $(this).prepend('<span class="span-over-text"><span class="on-text">' + e + '</span><span class="out-text">' + e + "</span></span>")
        }),
        $(".mobile-btn").on("click", function() {
            return $("body").toggleClass("menu-is-open"),
            !1
        }),
        function() {
            $(".anim-el").length > 0 && $(".anim-el").each(function() {
                var e = $(this);
                Zs.create({
                    trigger: e,
                    start: "top 70%",
                    onEnter: function() {
                        e.addClass("is-active-virewport")
                    },
                    onLeaveBack: function() {}
                })
            });
            $(".para-design").each(function() {
                var e = $(this);
                mr.to(e, {
                    yPercent: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: e,
                        scrub: !0
                    }
                })
            })
        }(),
        $(".more-text-toggle").length > 0 && $(".more-text-toggle").each(function() {
            var e = $(this).attr("data-text-on")
              , t = $(this).attr("data-text-off");
            $(this).text(e),
            $(this).on("click", function() {
                return $(this).parent().find(".more-text-content").slideToggle(),
                $(this).text($(this).text() == t ? e : t),
                !1
            })
        }),
        Zs.create({
            start: "top -80",
            end: 99999,
            toggleClass: {
                className: "header-item-scrolled",
                targets: ".header-item, .header-el"
            }
        }),
        $(".menu-item").each(function() {
            $(this).on("click", function() {
                $(".header-item, .header-el").removeClass("header-item-scrolled");
                var e = $(this).find(".link-colour").attr("data-colour");
                $(".transition").css("background-color", e),
                mr.to(".bottom-line", {
                    duration: .25,
                    scaleX: 0,
                    transformOrigin: "right"
                })
            })
        }),
        $(".header-item.logo").each(function() {
            $(this).on("click", function() {
                var e = $(this).attr("data-colour");
                $(".header-item").removeClass("header-item-scrolled"),
                $(".transition").css("background-color", e)
            })
        }),
        function() {
            if ($(".scroll-element-line-anim").length > 0) {
                mr.timeline({
                    delay: 1.5,
                    repeat: -1,
                    repeatDelay: 1.5
                }).from(".scroll-element-line-anim", {
                    duration: .75,
                    scaleX: 0,
                    transformOrigin: "100%",
                    ease: "power1.in"
                }, "-=0").to(".scroll-element-line-anim", {
                    duration: .75,
                    scaleX: 0,
                    transformOrigin: "0%",
                    ease: "power1.out"
                }, "+=0")
            }
            var e = $(".data-page-colour").attr("data-transition")
              , t = $(".data-page-colour").attr("data-accent");
            $(".accent-text").css("color", t),
            $(".accent-background").css("background-color", t),
            null == e || ($("body, .mobile-menu").css("background-color", e),
            $(".bottom-line").css("background-color", t))
        }(),
        $(".box-hover").length > 0 && $(".box-hover").each(function() {
            var e = mr.timeline();
            e.to($(this).find(".box-content"), {
                duration: .5,
                "clip-path": "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
                ease: "power1.in"
            }, "-=0").to($(this).find(".box-content"), {
                duration: .5,
                "clip-path": "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "power1.out"
            }, "-=0"),
            e.reversed(!0),
            $(this).on("click", function() {
                $(this).toggleClass("is-open"),
                e.reversed(!e.reversed())
            })
        }),
        $(".line-link").length > 0 && $(".line-link").each(function() {
            $(this).on("mouseenter", function() {
                mr.timeline().to($(this).find(".line-link-line-anim"), {
                    duration: .75,
                    scaleX: 1,
                    transformOrigin: "0%",
                    ease: "power1.out"
                }, "-=0").to($(this).find(".line-link-line"), {
                    duration: .75,
                    scaleX: .75,
                    transformOrigin: "100%",
                    ease: "power1.out"
                }, "-=.75")
            }),
            $(this).on("mouseleave", function() {
                mr.timeline().to($(this).find(".line-link-line-anim"), {
                    duration: .75,
                    scaleX: 0,
                    transformOrigin: "100%",
                    ease: "power1.out"
                }, "+=0").to($(this).find(".line-link-line"), {
                    duration: .75,
                    scaleX: 1,
                    transformOrigin: "100%",
                    ease: "power1.out"
                }, "-=.75")
            })
        }),
        $(".form").length > 0 && $(".form input, .form textarea").each(function() {
            "" != $(this).val() ? $(this).parent().parent().find("label").addClass("is-visible") : $(this).parent().parent().find("label").removeClass("is-visible"),
            $(this).on("keyup", function() {
                "" != $(this).val() ? $(this).parent().parent().find("label").addClass("is-visible") : $(this).parent().parent().find("label").removeClass("is-visible")
            }),
            $(this).on("focusin", function() {
                $(this).parent().addClass("is-focus")
            }),
            $(this).on("focusout", function() {
                $(this).parent().removeClass("is-focus")
            })
        }),
        $(".open-login").on("click", function() {
            $(".box-login").toggleClass("is-active")
        }),
        $("#content").on("click", function() {
            $(".box-login").removeClass("is-active")
        }),
        $("form#ajaxlogin").on("submit", function(e) {
            e.preventDefault(),
            $("form#ajaxlogin p.status").empty(),
            $.ajax({
                url: POST_SUBMITTER.root + "login/auth/form",
                method: "POST",
                cache: !1,
                dataType: "json",
                data: {
                    username: $("form#ajaxlogin #username").val(),
                    password: $("form#ajaxlogin #password").val(),
                    remember: 1
                },
                beforeSend: function(e) {
                    e.setRequestHeader("X-WP-Nonce", POST_SUBMITTER.nonce)
                },
                success: function(e) {
                    $("form#ajaxlogin p.status").text(e.message),
                    1 == e.status && (document.location.href = e.redirect)
                }
            }),
            e.preventDefault()
        }),
        $('select[name="type"').on("change", function(e) {
            $("#doc_sortby").submit()
        }),
        function() {
            if ($(".inner-vector .mindwill svg").length > 0) {
                $(".inner-vector .mindwill svg");
                var e = mr.timeline({
                    delay: 1.5,
                    repeat: -1,
                    repeatDelay: 1.5,
                    paused: !0
                });
                e.from(".scroll-element-line-anim", {
                    duration: .75,
                    scaleX: 0,
                    transformOrigin: "100%",
                    ease: "power1.in"
                }, "-=0").to(".scroll-element-line-anim", {
                    duration: .75,
                    scaleX: 0,
                    transformOrigin: "0%",
                    ease: "power1.out"
                }, "+=0"),
                mr.timeline({
                    onComplete: function() {
                        e.play()
                    }
                }).set(".mindwill", {
                    opacity: 1
                })
            }
            if ($(".inner-vector .hand svg").length > 0) {
                var t = $(".inner-vector .hand svg")
                  , n = mr.timeline({
                    delay: 1.5,
                    repeat: -1,
                    repeatDelay: 1.5,
                    paused: !0
                });
                n.from(".scroll-element-line-anim", {
                    duration: .75,
                    scaleX: 0,
                    transformOrigin: "100%",
                    ease: "power1.in"
                }, "-=0").to(".scroll-element-line-anim", {
                    duration: .75,
                    scaleX: 0,
                    transformOrigin: "0%",
                    ease: "power1.out"
                }, "+=0");
                var r = mr.timeline({
                    repeat: -1,
                    paused: !0,
                    yoyo: !0
                });
                r.to("#lights1, #lights2, #part-lights", {
                    stagger: .01,
                    duration: 3,
                    autoAlpha: .4,
                    ease: "power1.in"
                }, "-=0"),
                mr.timeline({
                    delay: 1,
                    onComplete: function() {
                        t.addClass("done"),
                        n.play(),
                        r.play()
                    }
                }).from(t.find("#hand-wire"), {
                    duration: 2.5,
                    rotation: 15,
                    scale: 1,
                    x: "10%",
                    y: "-30%",
                    transformOrigin: "right",
                    ease: "circ.out"
                }, "-=0").from(t.find("#hand-wire"), {
                    duration: 2.5,
                    autoAlpha: 0,
                    ease: "power1.out"
                }, "-=2").from(t.find("#part-wire"), {
                    duration: 3,
                    rotation: 2,
                    y: "5%",
                    autoAlpha: 0,
                    ease: "power1.out"
                }, "-=0").from(t.find("#lights1, #lights2, #part-lights, #part-top-star, #part-star1, #shadows,  #part-shadows, #stars > g"), {
                    stagger: .01,
                    duration: 5,
                    autoAlpha: 0,
                    ease: "power1.out"
                }, "-=0"),
                $(".menu-item").on("click", function() {
                    r.pause()
                })
            }
        }(),
        function() {
            if ($(".swiper-investment").length > 0) {
                var e = new ni(".swiper-investment",{
                    spaceBetween: 30,
                    navigation: {
                        nextEl: ".arrow-right",
                        prevEl: ".arrow-left"
                    }
                })
                  , t = $(".swiper-investment").find(".swiper-slide:first-child").attr("swipe-title")
                  , n = $(".swiper-investment").find(".swiper-slide:first-child").attr("swipe-description")
                  , r = $(".swiper-investment").find(".swiper-slide:first-child").attr("swipe-id");
                $(".carousel-investment").find("h5").text(t),
                $(".carousel-investment").find("h4").text(n),
                $(".carousel-investment").find(".circle .value").text(r),
                e.on("slideChange", function() {
                    $(".carousel-investment").addClass("is-transition")
                }),
                e.on("slideChangeTransitionEnd", function() {
                    var e = $(".swiper-investment").find(".swiper-slide.swiper-slide-active").attr("swipe-title")
                      , t = $(".swiper-investment").find(".swiper-slide.swiper-slide-active").attr("swipe-description")
                      , n = $(".swiper-investment").find(".swiper-slide.swiper-slide-active").attr("swipe-id");
                    $(".carousel-investment").find("h5").text(e),
                    $(".carousel-investment").find("h4").text(t),
                    $(".carousel-investment").find(".circle .value").text(n),
                    $(".carousel-investment").removeClass("is-transition")
                })
            }
        }(),
        $(".tabs-content").hide(),
        $("#tab1content").show(),
        $("#tab1").addClass("is-active"),
        $(".tabs").each(function() {
            $(this).find(".tabs-header ul li").on("click", function() {
                var e = $(this).attr("id");
                $(".tab").removeClass("is-active"),
                $(this).addClass("is-active"),
                $(".tabs-content").hide(),
                $("#" + e + "content").fadeIn("slow")
            })
        }),
        function() {
            new eo.SplitText(".split-text",{
                type: "words, lines"
            }).chars;
            mr.set(".split-text", {
                perspective: 400
            })
        }(),
        function() {
            function e() {
                mr.timeline({
                    delay: .2
                }).set(".inner-vector", {
                    opacity: 1
                }).fromTo(".page-template-homepage .inner-vector > div", {
                    opacity: 0,
                    x: "5%",
                    y: "-5%",
                    webkitFilter: "blur(5px)",
                    rotation: 5
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 2,
                    webkitFilter: "blur(0px)",
                    rotation: 0,
                    transformOrigin: "bottom right",
                    ease: "power1.out"
                }, "-=0").fromTo(".page-template-investment .inner-vector > div, .page-template-team .inner-vector > div, .page-template-contact .inner-vector > div", {
                    opacity: 0,
                    scale: .9,
                    webkitFilter: "blur(10px)"
                }, {
                    opacity: 1,
                    scale: 1,
                    webkitFilter: "blur(0px)",
                    duration: 2,
                    transformOrigin: "50%",
                    ease: "power1.out"
                }, "-=2").fromTo(".hero .split-text > div > div", {
                    y: "100%"
                }, {
                    stagger: .05,
                    duration: .5,
                    y: "0%",
                    ease: "power2.out"
                }, "-=1.5").fromTo(".line-link, .scroll-element-in, .subheading", {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.5"),
                $(".loading").remove()
            }
            if ($("body").hasClass("home")) {
                if ($(".loading-over").length > 0)
                    mr.timeline({
                        delay: 1
                    }).from(".loading-over .logo-colour #circle *", {
                        stagger: .1,
                        scale: .5,
                        duration: .25,
                        autoAlpha: 0,
                        transformOrigin: "50%",
                        ease: "power1.out"
                    }, "-=0").from(".loading-over .logo-colour #aurelian-capital *", {
                        stagger: .05,
                        x: 3.5,
                        duration: .25,
                        autoAlpha: 0,
                        transformOrigin: "50%",
                        ease: "power1.out"
                    }, "-=1").from(".loading-over .logo-colour #investment-management *", {
                        stagger: .05,
                        x: 3.5,
                        duration: .25,
                        autoAlpha: 0,
                        transformOrigin: "50%",
                        ease: "power1.out"
                    }, "-=0.5").set(".loading", {
                        visibility: "visible"
                    }).to(".loading-over", {
                        duration: 1,
                        "clip-path": "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
                        ease: "power1.in"
                    }, "-=0").to(".loading-over", {
                        duration: 1,
                        "clip-path": "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
                        ease: "power1.out"
                    }, "-=0").to(".loading .loading-logo", {
                        duration: .5,
                        scale: .95,
                        y: -5,
                        autoAlpha: 0,
                        ease: "power1.out"
                    }, "-=0").to(".loading", {
                        duration: .5,
                        autoAlpha: 0,
                        ease: "power1.out",
                        onComplete: e
                    }, "-=0").set(".loading", {
                        display: "none"
                    });
                else
                    mr.timeline({
                        delay: .5
                    }).set("#main", {
                        visibility: "visible",
                        onComplete: e
                    })
            } else {
                mr.timeline({
                    delay: .5
                }).set("#main", {
                    visibility: "visible",
                    onComplete: e
                })
            }
        }(),
        function() {
            sessionStorage.getItem("acimfundsMessagebar") ? (console.log("neco 2"),
            $(".message-bar").remove()) : console.log("neco 1");
            $("body").hasClass("page-template-client-area") && $(".message-bar").length > 0 && (console.log("i am here"),
            $("#close-message-bar").on("click", function() {
                $(".message-bar").slideUp(function() {
                    $(".message-bar").remove(),
                    sessionStorage.setItem("acimfundsMessagebar", !0)
                })
            }))
        }(),
        $("form#update_account").on("submit", function(e) {
            return t = $("#password"),
            n = $("#confirm_password"),
            !(t.val() != n.val() ? (n.css("border", "1px solid red"),
            n.addClass("form-danger"),
            1) : (n.css("border", "none"),
            n.removeClass("form-danger"),
            0));
            var t, n
        }),
        ($("body").hasClass("page-template-client-area") || $("body").hasClass("page-template-my-account")) && $(".user").on("click", function() {
            $(this).toggleClass("is-active"),
            $(".box-submenu-user").toggleClass("is-active")
        }),
        $(document).on("click", ".forgot-link", function() {
            $("#loginform").hide(),
            $("#remeberpass").show()
        }),
        $(document).on("click", ".login-link", function() {
            $("#remeberpass").hide(),
            $("#loginform").show()
        }),
        $("form#forgot_pass").on("submit", function(e) {
            e.preventDefault(),
            $("form#forgot_pass p.status").empty(),
            $.ajax({
                url: POST_SUBMITTER.root + "login/auth/remember",
                method: "POST",
                cache: !1,
                dataType: "json",
                data: {
                    email: $("form#forgot_pass #email").val()
                },
                beforeSend: function(e) {
                    e.setRequestHeader("X-WP-Nonce", POST_SUBMITTER.nonce)
                },
                success: function(e) {
                    $("form#forgot_pass p.status").text(e.message),
                    e.status
                }
            }),
            e.preventDefault()
        })
    };
    function io() {
        var e = document.querySelector("link#light-scheme-icon")
          , t = document.querySelector("link#dark-scheme-icon");
        var n = window.matchMedia("(prefers-color-scheme:dark)");
        function r() {
            n.matches ? (e.remove(),
            document.head.append(t)) : (document.head.append(e),
            t.remove())
        }
        n.addListener(r),
        r()
    }
    function so() {
        $("body").css({
            overflow: "inherit",
            "pointer-events": "inherit"
        })
    }
    $(document).ready(function() {
        setTimeout(function() {
            $("html").addClass("page-ready")
        }, 650),
        io(),
        ro(),
        no.a.init({
            timeout: 6e3,
            debug: !0,
            prevent: function(e) {
                var t = e.el;
                return t.classList && t.classList.contains("prevent")
            },
            transitions: [{
                name: "autoAlpha-transition",
                beforeLeave: function(e) {
                    e.current,
                    e.next,
                    e.trigger,
                    $("body").removeClass("menu-is-open"),
                    $(document).unbind();
                    var t = mr.timeline({
                        delay: .2,
                        paused: !0
                    });
                    return t.set("body", {
                        overflow: "hidden",
                        "pointer-events": "none"
                    }).set(".transition", {
                        autoAlpha: 1
                    }).set(".transition", {
                        "clip-path": "polygon(100% 0,100% 0,100% 100%,100% 100%)"
                    }).to(".transition", {
                        duration: 1.4,
                        "clip-path": "polygon(50% 0, 100% 0, 100% 100%, 30% 100%)",
                        ease: "circ.in"
                    }, "-=0").to(".transition", {
                        duration: .8,
                        "clip-path": "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                        ease: "power2.out",
                        onComplete: function() {
                            $("body").removeClass("menu-is-open"),
                            $(".fullmenu").fadeOut("fast")
                        }
                    }, "+=0"),
                    t.play()
                },
                leave: function(e) {},
                afterLeave: function(e, t, n) {
                    var r = e.next.html
                      , i = r.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", r)
                      , s = $(i).filter("notbody").attr("class");
                    $("body").attr("class", s)
                },
                enter: function(e, t) {
                    window.scrollTo({
                        top: 0
                    }),
                    $("body").removeClass("is-transition")
                },
                after: function(e) {
                    ro(),
                    document.querySelectorAll(".wpcf7 > form").forEach(function(e) {
                        return wpcf7.init(e)
                    });
                    var t = $("body").find(".data-page-colour").attr("data-transition");
                    $(".transition").css("background-color", t);
                    var n = mr.timeline({
                        paused: !0
                    });
                    return n.from(".transition", {
                        duration: .25,
                        autoAlpha: 1,
                        delay: .25,
                        onComplete: so
                    }).from(".bottom-line", {
                        duration: .25,
                        scaleX: 0,
                        transformOrigin: "left"
                    }, "-=0"),
                    n.play()
                },
                requestError: function(e) {
                    e.trigger;
                    var t = e.action
                      , n = (e.url,
                    e.response);
                    return "click" === t && n.status && 404 === n.status && no.a.go("/404"),
                    !1
                }
            }]
        })
    })
}
]);
