var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(t) {
        var e = 0;
        return function() {
            return e < t.length ? {
                done: !1,
                value: t[e++]
            } : {
                done: !0
            }
        }
    }, $jscomp.arrayIterator = function(t) {
        return {
            next: $jscomp.arrayIteratorImpl(t)
        }
    }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, o) {
        t != Array.prototype && t != Object.prototype && (t[e] = o.value)
    }, $jscomp.getGlobal = function(t) {
        return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
    }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
        $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
    }, $jscomp.SymbolClass = function(t, e) {
        this.$jscomp$symbol$id_ = t, $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: e
        })
    }, $jscomp.SymbolClass.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    }, $jscomp.Symbol = function() {
        var t = 0;
        return function e(o) {
            if (this instanceof e) throw new TypeError("Symbol is not a constructor");
            return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (o || "") + "_" + t++, o)
        }
    }(), $jscomp.initSymbolIterator = function() {
        $jscomp.initSymbol();
        var t = $jscomp.global.Symbol.iterator;
        t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
            }
        }), $jscomp.initSymbolIterator = function() {}
    }, $jscomp.initSymbolAsyncIterator = function() {
        $jscomp.initSymbol();
        var t = $jscomp.global.Symbol.asyncIterator;
        t || (t = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator")), $jscomp.initSymbolAsyncIterator = function() {}
    }, $jscomp.iteratorPrototype = function(t) {
        return $jscomp.initSymbolIterator(), (t = {
            next: t
        })[$jscomp.global.Symbol.iterator] = function() {
            return this
        }, t
    }, $jscomp.makeIterator = function(t) {
        var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
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
            if (null == this.batch_) {
                this.batch_ = [];
                var e = this;
                this.asyncExecuteFunction((function() {
                    e.executeBatch_()
                }))
            }
            this.batch_.push(t)
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
                    t[e] = null;
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
            if (0 != this.state_) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.state_);
            this.state_ = t, this.result_ = e, this.executeOnSettledCallbacks_()
        }, r.prototype.executeOnSettledCallbacks_ = function() {
            if (null != this.onSettledCallbacks_) {
                for (var t = 0; t < this.onSettledCallbacks_.length; ++t) i.asyncExecute(this.onSettledCallbacks_[t]);
                this.onSettledCallbacks_ = null
            }
        };
        var i = new e;
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
                        i(t)
                    }
                } : e
            }
            var n, i, s = new r((function(t, e) {
                n = t, i = e
            }));
            return this.callWhenSettled_(o(t, n), o(e, i)), s
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
            null == this.onSettledCallbacks_ ? i.asyncExecute(o) : this.onSettledCallbacks_.push(o)
        }, r.resolve = o, r.reject = function(t) {
            return new r((function(e, o) {
                o(t)
            }))
        }, r.race = function(t) {
            return new r((function(e, n) {
                for (var r = $jscomp.makeIterator(t), i = r.next(); !i.done; i = r.next()) o(i.value).callWhenSettled_(e, n)
            }))
        }, r.all = function(t) {
            var e = $jscomp.makeIterator(t),
                n = e.next();
            return n.done ? o([]) : new r((function(t, r) {
                function i(e) {
                    return function(o) {
                        s[e] = o, 0 == --c && t(s)
                    }
                }
                var s = [],
                    c = 0;
                do {
                    s.push(void 0), c++, o(n.value).callWhenSettled_(i(s.length - 1), r), n = e.next()
                } while (!n.done)
            }))
        }, r
    }), "es6", "es3"), $jscomp.underscoreProtoCanBeSet = function() {
        var t = {};
        try {
            return t.__proto__ = {
                a: !0
            }, t.a
        } catch (t) {}
        return !1
    }, $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(t, e) {
        if (t.__proto__ = e, t.__proto__ !== e) throw new TypeError(t + " is not extensible");
        return t
    } : null, $jscomp.generator = {}, $jscomp.generator.ensureIteratorResultIsObject_ = function(t) {
        if (!(t instanceof Object)) throw new TypeError("Iterator result " + t + " is not an object")
    }, $jscomp.generator.Context = function() {
        this.isRunning_ = !1, this.yieldAllIterator_ = null, this.yieldResult = void 0, this.nextAddress = 1, this.finallyAddress_ = this.catchAddress_ = 0, this.finallyContexts_ = this.abruptCompletion_ = null
    }, $jscomp.generator.Context.prototype.start_ = function() {
        if (this.isRunning_) throw new TypeError("Generator is already running");
        this.isRunning_ = !0
    }, $jscomp.generator.Context.prototype.stop_ = function() {
        this.isRunning_ = !1
    }, $jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() {
        this.nextAddress = this.catchAddress_ || this.finallyAddress_
    }, $jscomp.generator.Context.prototype.next_ = function(t) {
        this.yieldResult = t
    }, $jscomp.generator.Context.prototype.throw_ = function(t) {
        this.abruptCompletion_ = {
            exception: t,
            isException: !0
        }, this.jumpToErrorHandler_()
    }, $jscomp.generator.Context.prototype.return = function(t) {
        this.abruptCompletion_ = {
            return: t
        }, this.nextAddress = this.finallyAddress_
    }, $jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(t) {
        this.abruptCompletion_ = {
            jumpTo: t
        }, this.nextAddress = this.finallyAddress_
    }, $jscomp.generator.Context.prototype.yield = function(t, e) {
        return this.nextAddress = e, {
            value: t
        }
    }, $jscomp.generator.Context.prototype.yieldAll = function(t, e) {
        var o = (t = $jscomp.makeIterator(t)).next();
        if ($jscomp.generator.ensureIteratorResultIsObject_(o), !o.done) return this.yieldAllIterator_ = t, this.yield(o.value, e);
        this.yieldResult = o.value, this.nextAddress = e
    }, $jscomp.generator.Context.prototype.jumpTo = function(t) {
        this.nextAddress = t
    }, $jscomp.generator.Context.prototype.jumpToEnd = function() {
        this.nextAddress = 0
    }, $jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(t, e) {
        this.catchAddress_ = t, null != e && (this.finallyAddress_ = e)
    }, $jscomp.generator.Context.prototype.setFinallyBlock = function(t) {
        this.catchAddress_ = 0, this.finallyAddress_ = t || 0
    }, $jscomp.generator.Context.prototype.leaveTryBlock = function(t, e) {
        this.nextAddress = t, this.catchAddress_ = e || 0
    }, $jscomp.generator.Context.prototype.enterCatchBlock = function(t) {
        return this.catchAddress_ = t || 0, t = this.abruptCompletion_.exception, this.abruptCompletion_ = null, t
    }, $jscomp.generator.Context.prototype.enterFinallyBlock = function(t, e, o) {
        o ? this.finallyContexts_[o] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_], this.catchAddress_ = t || 0, this.finallyAddress_ = e || 0
    }, $jscomp.generator.Context.prototype.leaveFinallyBlock = function(t, e) {
        if (e = this.finallyContexts_.splice(e || 0)[0], e = this.abruptCompletion_ = this.abruptCompletion_ || e) {
            if (e.isException) return this.jumpToErrorHandler_();
            null != e.jumpTo && this.finallyAddress_ < e.jumpTo ? (this.nextAddress = e.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
        } else this.nextAddress = t
    }, $jscomp.generator.Context.prototype.forIn = function(t) {
        return new $jscomp.generator.Context.PropertyIterator(t)
    }, $jscomp.generator.Context.PropertyIterator = function(t) {
        for (var e in this.object_ = t, this.properties_ = [], t) this.properties_.push(e);
        this.properties_.reverse()
    }, $jscomp.generator.Context.PropertyIterator.prototype.getNext = function() {
        for (; 0 < this.properties_.length;) {
            var t = this.properties_.pop();
            if (t in this.object_) return t
        }
        return null
    }, $jscomp.generator.Engine_ = function(t) {
        this.context_ = new $jscomp.generator.Context, this.program_ = t
    }, $jscomp.generator.Engine_.prototype.next_ = function(t) {
        return this.context_.start_(), this.context_.yieldAllIterator_ ? this.yieldAllStep_(this.context_.yieldAllIterator_.next, t, this.context_.next_) : (this.context_.next_(t), this.nextStep_())
    }, $jscomp.generator.Engine_.prototype.return_ = function(t) {
        this.context_.start_();
        var e = this.context_.yieldAllIterator_;
        return e ? this.yieldAllStep_("return" in e ? e.return : function(t) {
            return {
                value: t,
                done: !0
            }
        }, t, this.context_.return) : (this.context_.return(t), this.nextStep_())
    }, $jscomp.generator.Engine_.prototype.throw_ = function(t) {
        return this.context_.start_(), this.context_.yieldAllIterator_ ? this.yieldAllStep_(this.context_.yieldAllIterator_.throw, t, this.context_.next_) : (this.context_.throw_(t), this.nextStep_())
    }, $jscomp.generator.Engine_.prototype.yieldAllStep_ = function(t, e, o) {
        try {
            var n = t.call(this.context_.yieldAllIterator_, e);
            if ($jscomp.generator.ensureIteratorResultIsObject_(n), !n.done) return this.context_.stop_(), n;
            var r = n.value
        } catch (t) {
            return this.context_.yieldAllIterator_ = null, this.context_.throw_(t), this.nextStep_()
        }
        return this.context_.yieldAllIterator_ = null, o.call(this.context_, r), this.nextStep_()
    }, $jscomp.generator.Engine_.prototype.nextStep_ = function() {
        for (; this.context_.nextAddress;) try {
            var t = this.program_(this.context_);
            if (t) return this.context_.stop_(), {
                value: t.value,
                done: !1
            }
        } catch (t) {
            this.context_.yieldResult = void 0, this.context_.throw_(t)
        }
        if (this.context_.stop_(), this.context_.abruptCompletion_) {
            if (t = this.context_.abruptCompletion_, this.context_.abruptCompletion_ = null, t.isException) throw t.exception;
            return {
                value: t.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }, $jscomp.generator.Generator_ = function(t) {
        this.next = function(e) {
            return t.next_(e)
        }, this.throw = function(e) {
            return t.throw_(e)
        }, this.return = function(e) {
            return t.return_(e)
        }, $jscomp.initSymbolIterator(), this[Symbol.iterator] = function() {
            return this
        }
    }, $jscomp.generator.createGenerator = function(t, e) {
        return e = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(e)), $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(e, t.prototype), e
    }, $jscomp.asyncExecutePromiseGenerator = function(t) {
        function e(e) {
            return t.next(e)
        }

        function o(e) {
            return t.throw(e)
        }
        return new Promise((function(n, r) {
            ! function t(i) {
                i.done ? n(i.value) : Promise.resolve(i.value).then(e, o).then(t, r)
            }(t.next())
        }))
    }, $jscomp.asyncExecutePromiseGeneratorFunction = function(t) {
        return $jscomp.asyncExecutePromiseGenerator(t())
    }, $jscomp.asyncExecutePromiseGeneratorProgram = function(t) {
        return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(t)))
    },
    function(t) {
        function e(e) {
            for (var o, n, i = e[0], s = e[1], c = 0, a = []; c < i.length; c++) n = i[c], Object.prototype.hasOwnProperty.call(r, n) && r[n] && a.push(r[n][0]), r[n] = 0;
            for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o]);
            for (l && l(e); a.length;) a.shift()()
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
                    var i = new Promise((function(e, o) {
                        n = r[t] = [e, o]
                    }));
                    e.push(n[2] = i);
                    var s = document.createElement("script");
                    s.charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.src = o.p + "games/FrostyFruitsNG/app/frostyFruits.11/" + ({
                        0: "game",
                        2: "vendors~vendor"
                    } [t] || t) + ".js";
                    var c = Error(),
                        l = function(e) {
                            s.onerror = s.onload = null, clearTimeout(a);
                            var o = r[t];
                            if (0 !== o) {
                                if (o) {
                                    var n = e && ("load" === e.type ? "missing" : e.type);
                                    e = e && e.target && e.target.src, c.message = "Loading chunk " + t + " failed.\n(" + n + ": " + e + ")", c.name = "ChunkLoadError", c.type = n, c.request = e, o[1](c)
                                }
                                r[t] = void 0
                            }
                        },
                        a = setTimeout((function() {
                            l({
                                type: "timeout",
                                target: s
                            })
                        }), 12e4);
                    s.onerror = s.onload = l, document.head.appendChild(s)
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
        var i = window.webpackJsonp = window.webpackJsonp || [],
            s = i.push.bind(i);
        i.push = e, i = i.slice();
        for (var c = 0; c < i.length; c++) e(i[c]);
        var l = s;
        o(o.s = 0)
    }([function(t, e, o) {
        window.WEBPACK = !0, window.WEBPACK_VERSION = 1, window.GAMECODE = "289", window.MODE = "production", window.gameVersion = "(build 11 commit 573a98d2f7d7009b53ed501b61985a4607d6b370)", window.loadPackedVendorBundles = function() {
            return $jscomp.asyncExecutePromiseGeneratorProgram((function(t) {
                switch (t.nextAddress) {
                    case 1:
                        return t.yield(o.e(2).then(o.t.bind(null, 1, 7)), 2);
                    case 2:
                        return t.yield(o.e(2).then(o.t.bind(null, 2, 7)), 3);
                    case 3:
                        return t.yield(o.e(2).then(o.t.bind(null, 3, 7)), 4);
                    case 4:
                        return t.yield(o.e(2).then(o.t.bind(null, 4, 7)), 0)
                }
            }))
        }, window.loadGameBundle = function() {
            return $jscomp.asyncExecutePromiseGeneratorProgram((function(t) {
                return t.yield(o.e(0).then(o.t.bind(null, 5, 7)), 0)
            }))
        }
    }]);