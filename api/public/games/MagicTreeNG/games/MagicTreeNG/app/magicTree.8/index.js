var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, o) {
        t != Array.prototype && t != Object.prototype && (t[e] = o.value)
    }, $jscomp.getGlobal = function(t) {
        return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
    }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
        $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
    }, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(t) {
        return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++
    }, $jscomp.initSymbolIterator = function() {
        $jscomp.initSymbol();
        var t = $jscomp.global.Symbol.iterator;
        t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.arrayIterator(this)
            }
        }), $jscomp.initSymbolIterator = function() {}
    }, $jscomp.arrayIterator = function(t) {
        var e = 0;
        return $jscomp.iteratorPrototype((function() {
            return e < t.length ? {
                done: !1,
                value: t[e++]
            } : {
                done: !0
            }
        }))
    }, $jscomp.iteratorPrototype = function(t) {
        return $jscomp.initSymbolIterator(), (t = {
            next: t
        })[$jscomp.global.Symbol.iterator] = function() {
            return this
        }, t
    }, $jscomp.makeIterator = function(t) {
        $jscomp.initSymbolIterator(), $jscomp.initSymbol(), $jscomp.initSymbolIterator();
        var e = t[Symbol.iterator];
        return e ? e.call(t) : $jscomp.arrayIterator(t)
    }, $jscomp.polyfill = function(t, e, o, n) {
        if (e) {
            for (o = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
                var r = t[n];
                r in o || (o[r] = {}), o = o[r]
            }(e = e(n = o[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(o, t, {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
    }, $jscomp.FORCE_POLYFILL_PROMISE = !1, $jscomp.polyfill("Promise", (function(t) {
        function e() {
            this.batch_ = null
        }

        function o(t) {
            return t instanceof r ? t : new r((function(e, o) {
                e(t)
            }))
        }
        if (t && !$jscomp.FORCE_POLYFILL_PROMISE) return t;
        e.prototype.asyncExecute = function(t) {
            return null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_()), this.batch_.push(t), this
        }, e.prototype.asyncExecuteBatch_ = function() {
            var t = this;
            this.asyncExecuteFunction((function() {
                t.executeBatch_()
            }))
        };
        var n = $jscomp.global.setTimeout;
        e.prototype.asyncExecuteFunction = function(t) {
            n(t, 0)
        }, e.prototype.executeBatch_ = function() {
            for (; this.batch_ && this.batch_.length;) {
                var t = this.batch_;
                this.batch_ = [];
                for (var e = 0; e < t.length; ++e) {
                    var o = t[e];
                    delete t[e];
                    try {
                        o()
                    } catch (t) {
                        this.asyncThrow_(t)
                    }
                }
            }
            this.batch_ = null
        }, e.prototype.asyncThrow_ = function(t) {
            this.asyncExecuteFunction((function() {
                throw t
            }))
        };
        var r = function(t) {
            this.state_ = 0, this.result_ = void 0, this.onSettledCallbacks_ = [];
            var e = this.createResolveAndReject_();
            try {
                t(e.resolve, e.reject)
            } catch (t) {
                e.reject(t)
            }
        };
        r.prototype.createResolveAndReject_ = function() {
            function t(t) {
                return function(n) {
                    o || (o = !0, t.call(e, n))
                }
            }
            var e = this,
                o = !1;
            return {
                resolve: t(this.resolveTo_),
                reject: t(this.reject_)
            }
        }, r.prototype.resolveTo_ = function(t) {
            if (t === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
            else if (t instanceof r) this.settleSameAsPromise_(t);
            else {
                t: switch (typeof t) {
                    case "object":
                        var e = null != t;
                        break t;
                    case "function":
                        e = !0;
                        break t;
                    default:
                        e = !1
                }
                e ? this.resolveToNonPromiseObj_(t) : this.fulfill_(t)
            }
        }, r.prototype.resolveToNonPromiseObj_ = function(t) {
            var e = void 0;
            try {
                e = t.then
            } catch (t) {
                return void this.reject_(t)
            }
            "function" == typeof e ? this.settleSameAsThenable_(e, t) : this.fulfill_(t)
        }, r.prototype.reject_ = function(t) {
            this.settle_(2, t)
        }, r.prototype.fulfill_ = function(t) {
            this.settle_(1, t)
        }, r.prototype.settle_ = function(t, e) {
            if (0 != this.state_) throw Error("Cannot settle(" + t + ", " + e | "): Promise already settled in state" + this.state_);
            this.state_ = t, this.result_ = e, this.executeOnSettledCallbacks_()
        }, r.prototype.executeOnSettledCallbacks_ = function() {
            if (null != this.onSettledCallbacks_) {
                for (var t = this.onSettledCallbacks_, e = 0; e < t.length; ++e) t[e].call(), t[e] = null;
                this.onSettledCallbacks_ = null
            }
        };
        var c = new e;
        return r.prototype.settleSameAsPromise_ = function(t) {
            var e = this.createResolveAndReject_();
            t.callWhenSettled_(e.resolve, e.reject)
        }, r.prototype.settleSameAsThenable_ = function(t, e) {
            var o = this.createResolveAndReject_();
            try {
                t.call(e, o.resolve, o.reject)
            } catch (t) {
                o.reject(t)
            }
        }, r.prototype.then = function(t, e) {
            function o(t, e) {
                return "function" == typeof t ? function(e) {
                    try {
                        n(t(e))
                    } catch (t) {
                        c(t)
                    }
                } : e
            }
            var n, c, i = new r((function(t, e) {
                n = t, c = e
            }));
            return this.callWhenSettled_(o(t, n), o(e, c)), i
        }, r.prototype.catch = function(t) {
            return this.then(void 0, t)
        }, r.prototype.callWhenSettled_ = function(t, e) {
            function o() {
                switch (n.state_) {
                    case 1:
                        t(n.result_);
                        break;
                    case 2:
                        e(n.result_);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.state_)
                }
            }
            var n = this;
            null == this.onSettledCallbacks_ ? c.asyncExecute(o) : this.onSettledCallbacks_.push((function() {
                c.asyncExecute(o)
            }))
        }, r.resolve = o, r.reject = function(t) {
            return new r((function(e, o) {
                o(t)
            }))
        }, r.race = function(t) {
            return new r((function(e, n) {
                for (var r = $jscomp.makeIterator(t), c = r.next(); !c.done; c = r.next()) o(c.value).callWhenSettled_(e, n)
            }))
        }, r.all = function(t) {
            var e = $jscomp.makeIterator(t),
                n = e.next();
            return n.done ? o([]) : new r((function(t, r) {
                function c(e) {
                    return function(o) {
                        i[e] = o, 0 == --l && t(i)
                    }
                }
                var i = [],
                    l = 0;
                do {
                    i.push(void 0), l++, o(n.value).callWhenSettled_(c(i.length - 1), r), n = e.next()
                } while (!n.done)
            }))
        }, r
    }), "es6", "es3"), $jscomp.executeAsyncGenerator = function(t) {
        function e(e) {
            return t.next(e)
        }

        function o(e) {
            return t.throw(e)
        }
        return new Promise((function(n, r) {
            ! function t(c) {
                c.done ? n(c.value) : Promise.resolve(c.value).then(e, o).then(t, r)
            }(t.next())
        }))
    },
    function(t) {
        function e(e) {
            for (var o, n, c = e[0], i = e[1], l = 0, s = []; l < c.length; l++) n = c[l], Object.prototype.hasOwnProperty.call(r, n) && r[n] && s.push(r[n][0]), r[n] = 0;
            for (o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
            for (a && a(e); s.length;) s.shift()()
        }

        function o(e) {
            if (n[e]) return n[e].exports;
            var r = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports
        }
        var n = {},
            r = {
                1: 0
            };
        o.e = function(t) {
            var e = [],
                n = r[t];
            if (0 !== n)
                if (n) e.push(n[2]);
                else {
                    var c = new Promise((function(e, o) {
                        n = r[t] = [e, o]
                    }));
                    e.push(n[2] = c);
                    var i = document.createElement("script");
                    i.charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.src = o.p + "games/MagicTreeNG/app/magicTree.8/" + ({
                        0: "game",
                        2: "vendors~vendor"
                    } [t] || t) + ".js";
                    var l = Error(),
                        a = function(e) {
                            i.onerror = i.onload = null, clearTimeout(s);
                            var o = r[t];
                            if (0 !== o) {
                                if (o) {
                                    var n = e && ("load" === e.type ? "missing" : e.type);
                                    e = e && e.target && e.target.src, l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + e + ")", l.name = "ChunkLoadError", l.type = n, l.request = e, o[1](l)
                                }
                                r[t] = void 0
                            }
                        },
                        s = setTimeout((function() {
                            a({
                                type: "timeout",
                                target: i
                            })
                        }), 12e4);
                    i.onerror = i.onload = a, document.head.appendChild(i)
                } return Promise.all(e)
        }, o.m = t, o.c = n, o.d = function(t, e, n) {
            o.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, o.r = function(t) {
            $jscomp.initSymbol(), $jscomp.initSymbol(), "undefined" != typeof Symbol && Symbol.toStringTag && ($jscomp.initSymbol(), Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            })), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, o.t = function(t, e) {
            if (1 & e && (t = o(t)), 8 & e || 4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function(e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return o.d(e, "a", e), e
        }, o.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, o.p = "/", o.oe = function(t) {
            throw console.error(t), t
        };
        var c = window.webpackJsonp = window.webpackJsonp || [],
            i = c.push.bind(c);
        c.push = e, c = c.slice();
        for (var l = 0; l < c.length; l++) e(c[l]);
        var a = i;
        o(o.s = 0)
    }([function(t, e, o) {
        window.WEBPACK = !0, window.WEBPACK_VERSION = 1, window.GAMECODE = "248", window.MODE = "production", window.gameVersion = "(build 8 commit 7c7af9bd986e136214cbf1021057d279a13e31b6)", window.loadPackedVendorBundles = function() {
            return $jscomp.executeAsyncGenerator(function() {
                function t(t, n) {
                    for (;;) switch (e) {
                        case 0:
                            return e = 1, {
                                value: o.e(2).then(o.t.bind(null, 1, 7)),
                                done: !1
                            };
                        case 1:
                            if (void 0 === n) {
                                e = 2;
                                break
                            }
                            throw e = -1, n;
                        case 2:
                            return e = 3, {
                                value: o.e(2).then(o.t.bind(null, 2, 7)),
                                done: !1
                            };
                        case 3:
                            if (void 0 === n) {
                                e = 4;
                                break
                            }
                            throw e = -1, n;
                        case 4:
                            return e = 5, {
                                value: o.e(2).then(o.t.bind(null, 3, 7)),
                                done: !1
                            };
                        case 5:
                            if (void 0 === n) {
                                e = 6;
                                break
                            }
                            throw e = -1, n;
                        case 6:
                            return e = 7, {
                                value: o.e(2).then(o.t.bind(null, 4, 7)),
                                done: !1
                            };
                        case 7:
                            if (void 0 === n) {
                                e = 8;
                                break
                            }
                            throw e = -1, n;
                        case 8:
                            e = -1;
                        default:
                            return {
                                value: void 0, done: !0
                            }
                    }
                }
                var e = 0,
                    n = {
                        next: function(e) {
                            return t(0, void 0)
                        },
                        throw: function(e) {
                            return t(0, e)
                        },
                        return: function(t) {
                            throw Error("Not yet implemented")
                        }
                    };
                return $jscomp.initSymbolIterator(), n[Symbol.iterator] = function() {
                    return this
                }, n
            }())
        }, window.loadGameBundle = function() {
            return $jscomp.executeAsyncGenerator(function() {
                function t(t, n) {
                    for (;;) switch (e) {
                        case 0:
                            return e = 1, {
                                value: o.e(0).then(o.t.bind(null, 5, 7)),
                                done: !1
                            };
                        case 1:
                            if (void 0 === n) {
                                e = 2;
                                break
                            }
                            throw e = -1, n;
                        case 2:
                            e = -1;
                        default:
                            return {
                                value: void 0, done: !0
                            }
                    }
                }
                var e = 0,
                    n = {
                        next: function(e) {
                            return t(0, void 0)
                        },
                        throw: function(e) {
                            return t(0, e)
                        },
                        return: function(t) {
                            throw Error("Not yet implemented")
                        }
                    };
                return $jscomp.initSymbolIterator(), n[Symbol.iterator] = function() {
                    return this
                }, n
            }())
        }
    }]);