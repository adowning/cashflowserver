var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(e) {
    var t = 0;
    return function() {
        return t < e.length ? {
            done: !1,
            value: e[t++]
        } : {
            done: !0
        }
    }
}, $jscomp.arrayIterator = function(e) {
    return {
        next: $jscomp.arrayIteratorImpl(e)
    }
}, $jscomp.makeIterator = function(e) {
    var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
    return t ? t.call(e) : $jscomp.arrayIterator(e)
}, $jscomp.arrayFromIterator = function(e) {
    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
    return n
}, $jscomp.arrayFromIterable = function(e) {
    return e instanceof Array ? e : $jscomp.arrayFromIterator($jscomp.makeIterator(e))
}, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
}, $jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}, $jscomp.SymbolClass = function(e, t) {
    this.$jscomp$symbol$id_ = e, $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: t
    })
}, $jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_
}, $jscomp.Symbol = function() {
    var e = 0;
    return function t(n) {
        if (this instanceof t) throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (n || "") + "_" + e++, n)
    }
}(), $jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator")), "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    }), $jscomp.initSymbolIterator = function() {}
}, $jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.asyncIterator;
    e || (e = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator")), $jscomp.initSymbolAsyncIterator = function() {}
}, $jscomp.iteratorPrototype = function(e) {
    return $jscomp.initSymbolIterator(), (e = {
        next: e
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    }, e
}, $jscomp.iteratorFromArray = function(e, t) {
    $jscomp.initSymbolIterator(), e instanceof String && (e += "");
    var n = 0,
        a = {
            next: function() {
                if (n < e.length) {
                    var s = n++;
                    return {
                        value: t(s, e[s]),
                        done: !1
                    }
                }
                return a.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                }, a.next()
            }
        };
    return a[Symbol.iterator] = function() {
        return a
    }, a
}, $jscomp.polyfill = function(e, t, n, a) {
    if (t) {
        for (n = $jscomp.global, e = e.split("."), a = 0; a < e.length - 1; a++) {
            var s = e[a];
            s in n || (n[s] = {}), n = n[s]
        }(t = t(a = n[e = e[e.length - 1]])) != a && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
}, $jscomp.polyfill("Array.prototype.keys", (function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, (function(e) {
            return e
        }))
    }
}), "es6", "es3"), $jscomp.polyfill("Array.prototype.values", (function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, (function(e, t) {
            return t
        }))
    }
}), "es8", "es3"), $jscomp.polyfill("Object.is", (function(e) {
    return e || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}), "es6", "es3"), $jscomp.polyfill("Array.prototype.includes", (function(e) {
    return e || function(e, t) {
        var n = this;
        n instanceof String && (n = String(n));
        var a = n.length;
        for (0 > (t = t || 0) && (t = Math.max(t + a, 0)); t < a; t++) {
            var s = n[t];
            if (s === e || Object.is(s, e)) return !0
        }
        return !1
    }
}), "es7", "es3"), $jscomp.checkStringArgs = function(e, t, n) {
    if (null == e) throw new TypeError("The 'this' value for String.prototype." + n + " must not be null or undefined");
    if (t instanceof RegExp) throw new TypeError("First argument to String.prototype." + n + " must not be a regular expression");
    return e + ""
}, $jscomp.polyfill("String.prototype.includes", (function(e) {
    return e || function(e, t) {
        return -1 !== $jscomp.checkStringArgs(this, e, "includes").indexOf(e, t || 0)
    }
}), "es6", "es3"), $jscomp.owns = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}, $jscomp.polyfill("Object.values", (function(e) {
    return e || function(e) {
        var t, n = [];
        for (t in e) $jscomp.owns(e, t) && n.push(e[t]);
        return n
    }
}), "es8", "es3"), (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1094: function(e, t) {
            nge.appNS = "JackpotSevens", nge.App[nge.appNS] = {}
        },
        1095: function(e, t, n) {
            nge.realPathPrefix = "../../", nge.appPath = "app/jackpotSevens.1/", nge.gameCode = "351", nge.loaderTpl = "netgame", nge.loaderShowGamePreview = !1, nge.loadCfg = []
        },
        1096: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                var e = [5];
                nge.App.addSysInstancesMode("SlimJackpot"), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang);
                var t = nge.Cfg.Main.lang;
                nge.Lib.Helper.makeReactive(nge.Cfg.Main, "lang", (function(e) {
                    nge.App.removeSysInstancesMode("lang_" + t), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang), t = e
                })), this.run = function() {
                    this.runDefault(), nge.localData.set("lines.cfg", e)
                }, nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("background", "popup", "progressiveJackpot", "miniPaytable", "bigWinUni", "diamondJackpot", "shaker", "blinker", "sidebar", "questline")
            })), nge.Cfg.Main.project = "jackpotSevens", nge.Cfg.Main.title = "Jackpot Sevens", nge.Cfg.Main.gameCode = "351", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.23"
        },
        1097: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1098: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    hover_0: "game:sounds/hover",
                    hover_1: "game:sounds/hover",
                    hover_2: "game:sounds/hover",
                    click: "game:sounds/button",
                    spin_click: "game:/sounds/spin",
                    spin_stop: "game:/sounds/spin_stop",
                    bs_wheel_spin_0: "game:/sounds/reel_spin",
                    reels_stop_0: "game:sounds/reel_stop_0",
                    reels_stop_1: "game:sounds/reel_stop_1",
                    reels_stop_2: "game:sounds/reel_stop_2",
                    reels_stop_3: "game:sounds/reel_stop_3",
                    reels_stop_4: "game:sounds/reel_stop_4",
                    reels_stop_all: "game:sounds/reel_stop_all",
                    intrigue_2: "game:sounds/intrigue",
                    intrigue_3: "game:sounds/intrigue",
                    intrigue_4: "game:sounds/intrigue",
                    scatter_0: "game:sounds/scatter_0",
                    scatter_1: "game:sounds/scatter_1",
                    scatter_2: "game:sounds/scatter_2",
                    scatter_3: "game:sounds/scatter_3",
                    scatter_4: "game:sounds/scatter_4",
                    win_regularWinHigh: "game:/sounds/win_2",
                    win_regularWinMid: "game:sounds/win_1",
                    win_regularWinLow: "game:sounds/win_0",
                    win_counterClicking: "game:sounds/counter",
                    win_counterClicking_stop: "game:sounds/counter_stop",
                    big_win: "game:/sounds/big_win",
                    big_win_start: "game:/sounds/big_win_start",
                    big_win_ending: "game:/sounds/big_win_end",
                    intro_big_win: "game:/sounds/big_win_intro",
                    freespin_popup_win: "game:/sounds/freespin_popup_win",
                    freespin_popup_start: "game:/sounds/freespin_popup_start",
                    freespin_popup_close: "game:/sounds/freespin_popup_close",
                    diamond_jackpot_popup: "game:/sounds/diamond_jackpot_popup",
                    sr_bell: "game:sounds/bell",
                    bs_background: "game:sounds/basic_background",
                    intro_sound: "game:sounds/ambience",
                    bn_background: "game:sounds/freespin_background",
                    star_flickering_0: "game:sounds/star_flickering",
                    star_flickering_1: "game:sounds/star_flickering",
                    star_flickering_2: "game:sounds/star_flickering",
                    star_scatter: "game:sounds/star_scatter",
                    star_flying_0: "game:sounds/star_flying",
                    star_flying_1: "game:sounds/star_flying",
                    star_flying_2: "game:sounds/star_flying",
                    star_flying_3: "game:sounds/star_flying",
                    star_flying_4: "game:sounds/star_flying",
                    star_flying_5: "game:sounds/star_flying",
                    star_flying_6: "game:sounds/star_flying",
                    star_flying_7: "game:sounds/star_flying",
                    star_flying_8: "game:sounds/star_flying",
                    star_flying_9: "game:sounds/star_flying",
                    star_flying_10: "game:sounds/star_flying",
                    star_flying_11: "game:sounds/star_flying",
                    star_flying_12: "game:sounds/star_flying",
                    star_flying_13: "game:sounds/star_flying",
                    star_flying_14: "game:sounds/star_flying",
                    star_landing_0: "game:sounds/star_landing",
                    star_landing_1: "game:sounds/star_landing",
                    star_landing_2: "game:sounds/star_landing",
                    star_landing_3: "game:sounds/star_landing",
                    star_landing_4: "game:sounds/star_landing",
                    star_landing_5: "game:sounds/star_landing",
                    star_landing_6: "game:sounds/star_landing",
                    star_landing_7: "game:sounds/star_landing",
                    star_landing_8: "game:sounds/star_landing",
                    star_landing_9: "game:sounds/star_landing",
                    star_landing_10: "game:sounds/star_landing",
                    star_landing_11: "game:sounds/star_landing",
                    star_landing_12: "game:sounds/star_landing",
                    star_landing_13: "game:sounds/star_landing",
                    star_landing_14: "game:sounds/star_landing",
                    jackpot_online_background: "game:sounds/jackpot_online_background",
                    jackpot_online_coincidence_1: "game:sounds/jackpot_online_coincidence_1",
                    jackpot_online_coincidence_2: "game:sounds/jackpot_online_coincidence_2",
                    jackpot_online_coincidence_3: "game:sounds/jackpot_online_coincidence_3",
                    jackpot_online_finish_jackpot_popup: "game:sounds/jackpot_online_finish_jackpot_popup",
                    jackpot_online_won_jackpot_movie: "game:sounds/jackpot_online_won_jackpot_movie"
                }
            }))
        },
        1099: function(e, t) {
            nge.App[nge.appNS].Cfg.Spine = nge.Cfg.Spine.extend((function() {
                this.preloadForStates = {
                    play: [{
                        spineName: "m00_000",
                        animationName: "play"
                    }, {
                        spineName: "m01_000",
                        animationName: "play"
                    }, {
                        spineName: "m02_000",
                        animationName: "play"
                    }, {
                        spineName: "m03_000",
                        animationName: "play"
                    }, {
                        spineName: "m04_000",
                        animationName: "play"
                    }, {
                        spineName: "m05_000",
                        animationName: "play"
                    }, {
                        spineName: "m06_000",
                        animationName: "play"
                    }, {
                        spineName: "m07_000",
                        animationName: "play"
                    }, {
                        spineName: "m07_000",
                        animationName: "play_glow"
                    }, {
                        spineName: "bigWinAnim",
                        animationName: "big_win_all"
                    }, {
                        spineName: "bigWinAnim",
                        animationName: "big_win_all_jackpot"
                    }, {
                        spineName: "bigWinAnim",
                        animationName: "meteorites_loop"
                    }, {
                        spineName: "star_animation",
                        animationName: "stroke"
                    }, {
                        spineName: "star_animation",
                        animationName: "win1"
                    }, {
                        spineName: "star_animation",
                        animationName: "win2"
                    }, {
                        spineName: "star_animation",
                        animationName: "win3"
                    }, {
                        spineName: "star_animation",
                        animationName: "win4"
                    }, {
                        spineName: "star_animation",
                        animationName: "win5"
                    }, {
                        spineName: "star_rotate",
                        animationName: "play"
                    }, {
                        spineName: "star_rotate",
                        animationName: "star_frieze"
                    }, {
                        spineName: "animateBg",
                        animationName: "animateBgFlares"
                    }, {
                        spineName: "animateBg",
                        animationName: "animateBgGlow"
                    }, {
                        spineName: "animateBg",
                        animationName: "animateBgWin"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "appear_total_win"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "loop_total_win"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "disappear_total_win"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "appear_free_games"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "loop_free_games"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "disappear_free_games"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "appear_diamond_jackpot"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "disappear_diamond_jackpot"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "loop_diamond_jackpot"
                    }, {
                        spineName: "spinification",
                        animationName: "spinification_back"
                    }, {
                        spineName: "spinification",
                        animationName: "spinification_front"
                    }]
                }, this.preloadForEvents = []
            }))
        },
        1100: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        1101: function(e, t) {
            nge.App[nge.appNS].Com.Autospin = {}
        },
        1102: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.View = nge.App.DjGameBase.Com.Autospin.View.extend((function() {
                this.firstPanelElementTopYOffset = 0, this.yPanelOffset = 4, this.infinityTextYOffset = 3, this.staticMask = {
                    x: 20,
                    y: -255,
                    width: 116,
                    height: 426,
                    debug: !1
                }
            }))
        },
        1103: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        1104: function(e, t) {
            nge.App[nge.appNS].Com.Background.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = !1,
                    n = null,
                    a = {
                        "^animateBg": null,
                        "^animateBgGlow": null,
                        "^animateBgWin": null,
                        "^topLight1": null,
                        "^topLight2": null,
                        "^bottomEmitter0": null,
                        "^bottomEmitter1": null
                    };
                this._startBottomEmitters = function() {
                    a["^bottomEmitter0"] && (a["^bottomEmitter0"].emitter.emit = !0), a["^bottomEmitter1"] && (a["^bottomEmitter1"].emitter.emit = !0)
                }, this._stopBottomEmitters = function() {
                    a["^bottomEmitter0"] && (a["^bottomEmitter0"].emitter.emit = !1), a["^bottomEmitter1"] && (a["^bottomEmitter1"].emitter.emit = !1)
                }, this._stopTween = function() {
                    n && n.isRunning && n.stop(), n = null
                }, this._startIdleTopAnimationHandler = function() {
                    n = nge.tween.add({}, !0), e._step(0)
                }, this._step = function(t, s, o) {
                    o = void 0 !== o && o;
                    var i = e._step,
                        r = !(void 0 === s || s);
                    s = t % 10, r && t++, 0 !== s || r || (o = !o);
                    var l = s / 10,
                        p = 1 - l;
                    n.to({}, 750), n.onUpdateCallback((function(e, t) {
                        t = r ? 1 - t : t, e = o ? t * l : t * p, t = o ? t * p : t * l;
                        var n = nge.localData.get("freespin.inProgress") ? .9 : .8;
                        a["^topLight1"].alpha = e * n, a["^topLight2"].alpha = t * n
                    })), n.onComplete.add((function() {
                        i(t, r, o)
                    })), n.start()
                }, this.create = function() {
                    e.createDefault(), e._createLinks(), e._stopTween(), e._runStandardBgAnimation(), e._startIdleTopAnimationHandler(), a["^topLight1"].alpha = 0, a["^topLight2"].alpha = 0, a["^topLight1"].blendMode = PIXI.BLEND_MODES.SCREEN, a["^topLight2"].blendMode = PIXI.BLEND_MODES.SCREEN, e._stopBottomEmitters(), t || e.subscribe(), t = !0
                }, this._createLinks = function() {
                    for (var e in a) a[e] = nge.findOne(e)
                }, this.deactivate = function() {
                    var t, n = nge.findAll("Emitter");
                    for (t in n) n[t].emitter && (n[t].emitter.emit = !1, n[t].destroy());
                    e._stopTween()
                }, this._runStandardBgAnimation = function(e) {
                    e = void 0 === e ? nge.spine.LOOP : e, a["^animateBg"].setAnimationByMode(1, "animateBgFlares", e), a["^animateBgGlow"].setAnimationByMode(0, "animateBgGlow", e)
                }, this._runWinAnimationHandler = function() {
                    a["^animateBgWin"].setSpeed(1), a["^animateBgWin"].setAnimationByMode(0, "animateBgWin", nge.spine.NONE)
                }, this._stopWinAnimationHandler = function() {
                    a["^animateBgWin"].setSpeed(10), e._runStandardBgAnimation()
                }, this._hideIdleTopAnimationHandler = function() {
                    e._stopTween(), n = nge.tween.add({}, !0).to({}, 750);
                    var t = a["^topLight1"].alpha,
                        s = a["^topLight2"].alpha;
                    n.onUpdateCallback((function(e, n) {
                        a["^topLight1"].alpha = t - t * n, a["^topLight2"].alpha = s - s * n
                    })), n.onComplete.add((function() {
                        a["^topLight1"].alpha = 0, a["^topLight2"].alpha = 0, e._stopTween()
                    })), n.start()
                }, this._startBottomEmittersHandler = function() {
                    return e._startBottomEmitters()
                }, this._stopBottomEmittersHandler = function() {
                    return e._stopBottomEmitters()
                }, this._visibilityChange = function(e) {
                    n && ("hidden" === e ? n.pause() : n.resume())
                }, this.subscribe = function() {
                    nge.observer.add("background.winAnimation.start", e._runWinAnimationHandler), nge.observer.add("background.winAnimation.stop", e._stopWinAnimationHandler), nge.observer.add("background.idleAnimation.start", e._startIdleTopAnimationHandler), nge.observer.add("background.idleAnimation.hide", e._hideIdleTopAnimationHandler), nge.observer.add("background.bottomEmitters.start", e._startBottomEmittersHandler), nge.observer.add("background.bottomEmitters.stop", e._stopBottomEmittersHandler), nge.observer.add("window.visibilitychange", e._visibilityChange)
                }
            }))
        },
        1105: function(e, t) {
            nge.App[nge.appNS].Com.Background.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.IMAGE,
                            name: "topLight1",
                            assetKey: "topLight1"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "topLight2",
                            assetKey: "topLight2"
                        }, {
                            type: mt.objects.EMITTER,
                            name: "bottomEmitter0",
                            assetKey: "emitterLightBg",
                            particles: ["particlesLightBg"],
                            x: 100,
                            y: 1080
                        }, {
                            type: mt.objects.EMITTER,
                            name: "bottomEmitter1",
                            assetKey: "emitterLightBg1",
                            particles: ["particlesLightBg"],
                            x: 0,
                            y: 1080
                        }, {
                            type: mt.objects.SPINE,
                            name: "animateBgGlow",
                            assetKey: "animateBg",
                            x: 960,
                            y: 534
                        }, {
                            type: mt.objects.SPINE,
                            name: "animateBgWin",
                            assetKey: "animateBg",
                            x: 960,
                            y: 534
                        }, {
                            type: mt.objects.SPINE,
                            name: "animateBg",
                            assetKey: "animateBg",
                            x: 960,
                            y: 534
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgArea",
                            assetKey: "bgArea",
                            isVisible: !1
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgAreaFreeSpins",
                            x: 0,
                            y: 0,
                            assetKey: "bgAreaFreeSpins",
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1106: function(e, t) {
            nge.App[nge.appNS].Com.Background.Mobile = {}
        },
        1107: function(e, t) {
            nge.App[nge.appNS].Com.Background.Mobile.Tpl = function() {
                return {
                    styles: {
                        ".portrait .bgAreaBottom": {
                            y: 250,
                            x: 0,
                            alignX: "center",
                            anchorX: .5,
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".album .bgAreaBottom": {
                            y: -30,
                            x: 70,
                            anchorX: 0,
                            alignX: "left",
                            scaleX: 1.5,
                            scaleY: 1.5
                        },
                        ".album .bottomEmitterContainer": {
                            y: 930
                        },
                        ".portrait .bottomEmitterContainer": {
                            y: 840
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            class: "bottomEmitterContainer",
                            contents: [{
                                type: mt.objects.EMITTER,
                                name: "bottomEmitter0",
                                assetKey: "emitterLightBg",
                                particles: ["particlesLightBg"],
                                x: 100
                            }, {
                                type: mt.objects.EMITTER,
                                name: "bottomEmitter1",
                                assetKey: "emitterLightBg1",
                                particles: ["particlesLightBg"]
                            }]
                        }, {
                            type: mt.objects.SPINE,
                            name: "animateBgGlow",
                            scaleX: 1.01,
                            scaleY: 1.01,
                            assetKey: "animateBg",
                            x: 880,
                            y: 525
                        }, {
                            type: mt.objects.SPINE,
                            name: "animateBgWin",
                            scaleX: 1.01,
                            scaleY: 1.01,
                            assetKey: "animateBg",
                            x: 880,
                            y: 525
                        }, {
                            type: mt.objects.SPINE,
                            name: "animateBg",
                            scaleX: 1.01,
                            scaleY: 1.01,
                            assetKey: "animateBg",
                            x: 880,
                            y: 525
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgAreaBottom",
                            class: "bgAreaBottom",
                            assetKey: "bgAreaBottom",
                            alignY: "top"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgAreaFreeSpinsBottom",
                            class: "bgAreaBottom",
                            assetKey: "bgAreaFsBottom",
                            alignY: "top"
                        }]
                    }
                }
            }
        },
        1108: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni = {}
        },
        1109: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Cfg = nge.App.DjGameBase.Com.BigWinUni.Cfg.extend((function() {
                this.cfg.followSlotName = "counter", this.cfg.loopStartFrame = 24, this.cfg.loopEndFrame = 196, this.cfg.jump2Frame = 197, this.cfg.jackpotTrackName = "big_win_all_jackpot", this.cfg.odometerDurations = [{
                    duration: 5e3,
                    mult: 1
                }, {
                    duration: 1e4,
                    mult: 2
                }, {
                    duration: 15e3,
                    mult: 3
                }]
            }))
        },
        1110: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Controller = nge.App.DjGameBase.Com.BigWinUni.Controller.extend((function() {
                var e = this,
                    t = null,
                    n = null;
                this.create = function() {
                    e.super.create(), t = e.getInstance("Cfg").get(), n = t.mainTrackName
                }, this.playStage2 = function() {
                    e.stopTrack(1), e.super.playStage2()
                }, this.abortOdometerExtension = function() {
                    e.stopTrack(1)
                }, this.emitterInit = function() {
                    e.coinsEmitters = nge.findAll("^bigWinEmitter")
                }, this.jackpotSevensPreshowHndler = function() {
                    t.mainTrackName = t.jackpotTrackName
                }, this.cycleComplete = function() {
                    t.mainTrackName = n, e.super.cycleComplete()
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("bigWin.sevensJackot.preshow", e.jackpotSevensPreshowHndler), nge.observer.add("win.big.counterComplete", (function() {
                        e: for (var t in e.coinsEmitters) {
                            var n = e.coinsEmitters[t];
                            if (!n.on) {
                                n.start();
                                break e
                            }
                        }
                    }))
                }
            }))
        },
        1111: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "bigWinEmitterContainer",
                            isVisible: !0,
                            contents: [{
                                type: mt.objects.UNITY_EMITTER,
                                name: "bigWinEmitter",
                                x: 960,
                                y: 540,
                                assetKey: "emitterVFX"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "bigWinContainer",
                            x: 960,
                            y: 540,
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "bigWinAmount",
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 110
                            }, {
                                type: 6,
                                assetKey: "bigWinAnim",
                                name: "bigWinAnim",
                                anchorX: .5,
                                anchorY: .5,
                                y: 0,
                                isVisible: !1
                            }]
                        }]
                    }
                }
            }
        },
        1112: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Mobile = {}
        },
        1113: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Mobile.Tpl = function() {
                return {
                    styles: {
                        ".portrait .bigWinContainer": {
                            scaleX: .95,
                            scaleY: .95,
                            y: 500
                        },
                        ".album .bigWinContainer": {
                            scaleX: 1,
                            scaleY: 1,
                            y: 540
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "bigWinEmitterContainer",
                            isVisible: !0,
                            contents: [{
                                type: mt.objects.UNITY_EMITTER,
                                name: "bigWinEmitter",
                                x: 960,
                                y: 540,
                                assetKey: "emitterVFX"
                            }, {
                                type: mt.objects.UNITY_EMITTER,
                                name: "bigWinEmitter",
                                x: 960,
                                y: 480,
                                assetKey: "emitterVFX"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "bigWinContainer",
                            class: "bigWinContainer",
                            x: "50%",
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "bigWinAmount",
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 110
                            }, {
                                type: 6,
                                assetKey: "bigWinAnim",
                                name: "bigWinAnim",
                                anchorX: .5,
                                anchorY: .5,
                                y: 0,
                                isVisible: !1
                            }]
                        }]
                    }
                }
            }
        },
        1114: function(e, t) {
            nge.App[nge.appNS].Com.Buttons = {}
        },
        1115: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Controller = nge.App.DjGameBase.Com.Buttons.Controller.extend((function() {
                this.subscribe = function() {
                    this.super.subscribe(), nge.Lib.Helper.mobileAndTabletCheck() && nge.observer.add("layersSwitcher.show", (function() {
                        var e = nge.findOne("^buyTimeButtonContainer");
                        e && (e.x = 1670, e && e.children[1] && e.children[1].position.set(94, 87), e && e.children[0] && (e.children[0].scaleX = e.children[0].scaleY = .75))
                    }))
                }
            }))
        },
        1116: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile = {}
        },
        1117: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Cfg = nge.App.DjGameBase.Com.Buttons.Mobile.Cfg.extend((function() {
                this.params.customBtn02 && (this.params.customBtn02.x = 1760)
            }))
        },
        1118: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher = {}
        },
        1119: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Controller = nge.App.ClassicGameBase.Com.CurrencySwitcher.Controller.extend((function() {
                this.selectors.creditsSelectors[".creditsJackpotSevensPlayareaValue"] = null, this.selectors.currencySelectors[".jackpotSevensPlayareaValue"] = null, this.selectors.creditsSelectors[".creditsJackpotDiamondPlayareaValue"] = null, this.selectors.currencySelectors[".jackpotDiamondPlayareaValue"] = null
            }))
        },
        1120: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Mobile = {}
        },
        1121: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Mobile.Controller = nge.App.ClassicGameBase.Com.CurrencySwitcher.Mobile.Controller.extend((function() {
                this.selectors.creditsSelectors[".creditsJackpotSevensPlayareaValue"] = null, this.selectors.currencySelectors[".jackpotSevensPlayareaValue"] = null, this.selectors.creditsSelectors[".creditsJackpotDiamondPlayareaValue"] = null, this.selectors.currencySelectors[".jackpotDiamondPlayareaValue"] = null
            }))
        },
        1122: function(e, t) {
            nge.App[nge.appNS].Com.DiamondJackpot = {}
        },
        1123: function(e, t) {
            nge.App[nge.appNS].Com.DiamondJackpot.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = !1;
                this.create = function() {
                    t || this.subscribe(), t = !0
                }, this._changeSymbolsTo = function(e, t) {
                    nge.observer.fire("slotMachine.setSymbol", {
                        coords: e,
                        key: t
                    })
                }, this.holdSymbolsHandler = function(e) {
                    var t = this;
                    e = void 0 === e ? [] : e, nge.localData.set("diamondJackpot.holdedSymbols", e), e.forEach((function(e) {
                        t._changeSymbolsTo([e.coords.reel, e.coords.row], e.key), nge.observer.fire("slotMachine.holdSymbol", e.coords)
                    }))
                }, this.resetSymbolsHandler = function() {
                    var e = nge.localData.get("slotMachine"),
                        t = void 0 !== e.lastResponse && e.lastResponse;
                    for (e = e.spinResult, t = t ? t.spinResult.rows : e.rows, e = 0; e < t.length; e++)
                        for (var n = t[e], a = 0; a < n.length; a++) this._changeSymbolsTo([a, e], n[a])
                }, this.changeSymbolsHandler = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t._changeSymbolsTo([e.coords.reel, e.coords.row], e.key)
                    }))
                }, this._showDiamondJackpotWinPopup = function() {
                    nge.observer.fire("popup.show", {
                        popupName: "diamondJackpotPopup",
                        layerName: "diamondJackpotWin",
                        onShow: function() {
                            nge.observer.fire("winlines.stopAnimation")
                        },
                        onHide: function() {
                            nge.observer.fire("freespin.showEndPopup")
                        }
                    }, 20)
                }, this.finishedHandler = function() {
                    e._showDiamondJackpotWinPopup()
                }, this.subscribe = function() {
                    nge.observer.add("diamondJackpot.holdSymbols", this.holdSymbolsHandler), nge.observer.add("diamondJackpot.resetSymbols", this.resetSymbolsHandler), nge.observer.add("diamondJackpot.changeSymbols", this.changeSymbolsHandler), nge.observer.add("diamondJackpot.finished", this.finishedHandler)
                }
            }))
        },
        1124: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        1125: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Cfg = nge.App.DjGameBase.Com.Freespin.Cfg.extend((function() {
                this.params.freespinLayers.push("diamondJackpotWin")
            }))
        },
        1126: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.DjGameBase.Com.Freespin.Controller.extend((function() {
                var e = this,
                    t = 0,
                    n = null,
                    a = null,
                    s = null,
                    o = null,
                    i = null,
                    r = null,
                    l = null,
                    p = 0,
                    c = null,
                    m = null;
                this.startFreespinsOnWinlinesComplete = function() {
                    nge.observer.fire("slotMachine.hideGlowAnimation"), e.super.startFreespinsOnWinlinesComplete()
                }, this._showFreespinFinishPopup = function() {
                    nge.localData.set("questlines"), m = null, nge.observer.fire("popupFinish.animate.start", null, 1e3), nge.localData.set("bonusGame.lastResponse", !1), nge.rafSetTimeout((function() {
                        nge.observer.fire("winlines.stopAnimation");
                        var e = nge.localData.get("slotMachine.totalBonusWin") || 0;
                        e = nge.localData.get("settings.settingsDisplayValuesInCoins") ? e : nge.Lib.Money.toCoins(e), isNaN(e) && (e = 0), nge.observer.fire("popup.show", {
                            popupName: "freespinEndPopup",
                            layerName: "freespinEndPopup",
                            onClick: function() {
                                nge.localData.set("jackpotDiamondWin", 0), nge.observer.fire("freespin.counterReset"), t = 0, nge.observer.fire("freespin.press.endPopupButton")
                            },
                            freespinTotalWin: e
                        }, 20)
                    }), 800)
                }, this.prepareFreespinsToEnd = function() {
                    nge.localData.get("slotMachine.slotWin.lineWinAmounts").filter((function(e) {
                        return "LinePickBonus" === e.type
                    }))[0] ? nge.observer.fire("diamondJackpot.finished", null, 1) : e._showFreespinFinishPopup()
                }, this._makeLinks = function() {
                    a = nge.findOne(".freespinsPanelText"), o = nge.findOne(".freepinsPanelBg"), i = nge.findOne(".freespinPanelContainer"), r = nge.findOne(".scattersAmountText"), l = nge.findOne(".symbolImage"), s = nge.findOne(".freespinsPanelNextText")
                }, this._reset = function() {
                    i.visible = !1, e._setPanelText(0), e._setNextText("0"), p = r.text = 0
                }, this.create = function() {
                    c = this.getInstance("Cfg").get(), this.super.create(), this._makeLinks(), this._reset(), t = +nge.localData.get("slotMachine.lastResponse.freeSpinRemain") || 0, m = nge.localData.get("slotMachine.lastResponse") || null
                }, this.initFreespinsText = function(e, n) {
                    0 < t && e !== n && this.super.initFreespinsText(e, n)
                }, this.freespinStart = function(e) {
                    this.super.freespinStart(e), t = e
                }, this._calcPaytable = function() {
                    var e = nge.localData.get("payout.cfg"),
                        t = {},
                        n = e.length,
                        a = 0;
                    e: for (; a < n; a++) {
                        var s = e[a].symbols,
                            o = e[a].payout,
                            i = e[a].matchCount,
                            r = 0,
                            l = s[0];
                        if (0 !== o) {
                            if (0 < i) l = "any_" + s.join("_"), r = i;
                            else {
                                i = s.length;
                                for (var p = 0; p < i; p++) {
                                    if (l !== s[p]) continue e;
                                    r++
                                }
                            }
                            t[l] || (t[l] = {}, t[l].awards = []), t[l].awards.push({
                                name: r,
                                value: o
                            })
                        }
                    }
                    return t[7].awards
                }, this._setPanelText = function(e) {
                    a.text = "AWARDS " + e + " CREDITS"
                }, this._setNextText = function(e) {
                    s.visible = !!e, s.text = "NEXT WIN " + e
                }, this._updateWinText = function(t) {
                    var o = e._updatePanelBackground,
                        i = e._updateContainer,
                        r = e._setPanelText,
                        l = e._setNextText;
                    n && n.isRunning && n.stop();
                    var p = +a.text.split(" ")[1],
                        c = +s.text.split(" ")[2],
                        m = e._calcPaytable(),
                        u = nge.localData.get("totalBet.value"),
                        g = t - 3,
                        y = 15 === t ? parseInt(nge.localData.get("progressiveJackpot.values.7"), 10) : nge.Lib.Money.toCoinsInt(u * m[g].value);
                    m = 15 <= t + 1 ? parseInt(nge.localData.get("progressiveJackpot.values.7"), 10) : nge.Lib.Money.toCoinsInt(u * m[g + 1].value), u = nge.localData.get("questline.multiplier") || 1;
                    var b = y * (15 === t ? 1 : u) - p,
                        f = m * (15 === t ? 1 : u) - c;
                    (n = nge.tween.add().to({}, 1e3)).onUpdateCallback((function(e, t) {
                        e = c + Math.round(f * t), r(p + Math.round(b * t)), l(e), o(), i()
                    })), n.onComplete.add((function() {
                        r(p + b), l(c + f), o(), i()
                    })), n.start()
                }, this._getScatterCount = function() {
                    var e = 0;
                    return (nge.localData.get("slotMachine.spinResult.rows") || nge.localData.get("slotMachine.lastResponse.spinResult.rows")).forEach((function(t) {
                        t = t.filter((function(e) {
                            return "7" === e
                        })).length, e += t
                    })), e
                }, this._updateScattersAmountText = function(e) {
                    r.text = e
                }, this._updatePanelBackground = function() {
                    o.resize(a.height + 30, a.width + 45 + l.width)
                }, this._updateContainer = function() {
                    i.x = nge.game.width / 2 + l.width / 4
                }, this.panelTextUpdateHandler = function(t) {
                    nge.localData.get("freespin.inProgress") && (p = t ? p + t : e._getScatterCount(), i.visible = !0, e._updateWinText(p), e._updateScattersAmountText(p))
                }, this.panelTextShow = function() {
                    var t = e.panelTextUpdateHandler;
                    t(), i.alpha = 0, i.visible = !0, (t = nge.tween.add(i).to({
                        alpha: 1
                    }, 500)).onComplete.add((function() {
                        i.alpha = 1
                    })), t.start()
                }, this.layerSwitcherShowHandler = function(t) {
                    "gameFreeSpin" === t && e.panelTextShow(), "freespinEndPopup" === t && e._reset()
                };
                var u = function(t) {
                    if (nge.localData.get("freespin.inProgress")) return e.getSpinNumbers(t)
                };
                this._checkFreespins = function(e) {
                    var t = nge.localData.get("questline.QuestLineA");
                    t && ((e = nge.Lib.Helper.jsObjClone(e)).forced || "true" !== t.picked || t.updated || (e.freeSpinsTotal = +e.freeSpinsTotal - +t.freeSpins, e.freeSpinRemain = +e.freeSpinRemain - +t.freeSpins, nge.localData.set("questline.QuestLineA.updated", !0)), function(e) {
                        nge.Lib.Helper.recursiveGet("slotWin.lineWinAmounts", e, []).filter((function(e) {
                            return "LinePickBonus" === e.type && "FullLineJackpot" === e.bonusName
                        }))[0] && (e.freeSpinRemain = m ? +m.freeSpinRemain - 1 + "" : e.freeSpinsTotal - 1);
                        var t = u(e);
                        t && nge.observer.fire("freespin.textData.update", t), m = e
                    }(e))
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("freespin.showEndPopup", e._showFreespinFinishPopup), nge.observer.add("layersSwitcher.show", e.layerSwitcherShowHandler), nge.observer.add("freespins.panelText.show", e.panelTextShowHandler), nge.observer.add("freespins.panelText.update", e.panelTextUpdateHandler), nge.observer.add(c.counterUpdateEvent, e._checkFreespins)
                }
            }))
        },
        1127: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.TextData = function() {
                var e = !1,
                    t = !0,
                    n = function(e, t, n) {
                        var a = nge.findAll(".freeSpinAmount");
                        a && a.forEach((function(a) {
                            var s = e ? n.total - n.remain : a._played,
                                o = t ? n.total : a._total;
                            a.text = nge.i18n.applyTextParams(nge.i18n.get("FREE GAME %(arg1)s OF %(arg2)s"), {
                                arg1: s,
                                arg2: o
                            }), a._played = s, a._total = o
                        }))
                    },
                    a = function(e) {
                        n(!0, !1, e);
                        var t = e.total,
                            a = e.remain;
                        (e = nge.findAll(".freeSpinPlayedAmount")) && e.forEach((function(e) {
                            e.text = t - a
                        }))
                    },
                    s = function(e) {
                        n(!1, !0, e);
                        var t = e.total;
                        (e = nge.findAll(".freeSpinTotalAmount")) && e.forEach((function(e) {
                            e.text = t
                        }))
                    },
                    o = function(n) {
                        e ? t = n : (a(n), s(n))
                    };
                this.setFreeSpinPopupTotalAmountText = function(e) {
                    var t = nge.findAll(".freeSpinPopupTotalAmount");
                    t && t.forEach((function(t) {
                        t.text = parseInt(e, 10)
                    }))
                }, this._saveData = function() {
                    e = !0
                }, this._restoreData = function() {
                    e = !1, t && o(t), t = null
                }, this.subscribe = function() {
                    nge.observer.add("freespin.saveData", this._saveData), nge.observer.add("freespin.restoreData", this._restoreData), nge.observer.add("freespin.textData.update", o), nge.observer.add("freespin.textData.played.update", a), nge.observer.add("freespin.textData.total.update", s), nge.Lib.Helper.mobileAndTabletCheck() && nge.observer.add("freegame.textData.update", o)
                }
            }
        },
        1128: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Tpl = function() {
                return {
                    styles: {
                        ".freespinPanelContainer": {
                            y: 820,
                            scaleX: .75,
                            scaleY: .75
                        },
                        ".freespinsPanelTextStyle": {
                            style: {
                                font: "24pt futuraptheavy"
                            }
                        },
                        ".freespinsPanelAmountTextStyle": {
                            style: {
                                font: "44pt futuraptheavy"
                            }
                        },
                        ".grey": {
                            style: {
                                stroke: 3288905,
                                strokeThickness: 6,
                                fill: 12171705,
                                align: "center"
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "diamond",
                            fullPath: nge.appPath + "img/questline/diamond.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            class: "freespinPanelContainer",
                            contents: [{
                                type: mt.objects.TEXT,
                                text: "14",
                                class: "questline freespinsPanelTextStyle freespinsPanelAmountTextStyle scattersAmountText",
                                anchorX: .5,
                                anchorY: .5,
                                x: -230
                            }, {
                                type: mt.objects.IMAGE,
                                class: "symbolImage",
                                assetKey: "diamond",
                                anchorX: .5,
                                anchorY: .5,
                                x: -230
                            }, {
                                type: mt.objects.TEXT,
                                text: "AWARDS 100500 CREDITS",
                                class: "questline freespinsPanelText freespinsPanelTextStyle",
                                anchorY: .5,
                                x: -140
                            }, {
                                type: mt.objects.TEXT,
                                text: "NEXT WIN 146000",
                                class: "grey freespinsPanelNextText freespinsPanelTextStyle",
                                anchorY: .5,
                                x: -140,
                                y: 60
                            }, {
                                type: mt.objects.NINE_SLICE,
                                class: "freepinsPanelBg",
                                assetKey: "settingPanelBackBg1",
                                alpha: .8,
                                angle: -90,
                                anchorY: .5,
                                left: 52,
                                right: 52,
                                top: 52,
                                bottom: 52,
                                width: 104,
                                height: 520,
                                y: 36
                            }]
                        }]
                    }
                }
            }
        },
        1129: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile = {}
        },
        1130: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Controller = nge.App[nge.appNS].Com.Freespin.Controller.extend((function() {}))
        },
        1131: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Tpl = function() {
                var e = nge.App[nge.appNS].Com.Freespin.Tpl();
                return e.styles[".freespinPanelContainer"] = {
                    y: 800,
                    scaleX: .85,
                    scaleY: .85
                }, e
            }
        },
        1132: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe = {}
        },
        1133: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe.Controller = nge.App.DjGameBase.Com.InfoSwipe.Controller.extend((function() {
                this.pageNames = "page0Container page1Container page2Container page3Container page4Container page5Container".split(" ")
            }))
        },
        1134: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot = {}
        },
        1135: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot.Controller = nge.App.ClassicGameBase.Com.InnerJackpot.Controller.extend((function() {
                this.showPopupHandler = function(e) {}, this.updatePayoutHandler = function(e) {
                    e && e.symbolId && this.getService().updatePayout(e.symbolId)
                }, this._subscribe = function() {
                    this.super._subscribe(), nge.observer.add("paytable.updatePayoutForSymbol", this.updatePayoutHandler)
                }
            }))
        },
        1136: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot.Service = nge.App.ClassicGameBase.Com.InnerJackpot.Service.extend((function() {
                var e = !1;
                this.showPopup = function(e) {}, this.updatePayout = function(e) {
                    this.getView().updatePayout(e)
                }, this._calcPayouts = function(t) {
                    var n = {},
                        a = t.length,
                        s = 0;
                    e: for (; s < a; s++) {
                        var o = t[s].symbols,
                            i = t[s].payout,
                            r = t[s].matchCount,
                            l = 0,
                            p = o[0];
                        if (0 !== i) {
                            if (0 < r) p = "any_" + o.join("_"), l = r;
                            else {
                                r = o.length;
                                for (var c = 0; c < r; c++) {
                                    if (p !== o[c]) continue e;
                                    l++
                                }
                            }
                            n[p] || (n[p] = {}, n[p].awards = {}), n[p].awards[l.toString()] = i
                        }
                    }
                    return e || (t = this.getInstance("View")) && t.setConvertedPayout(n), e = !0, n
                }, this._calcJackpotStakesAmount = function(e, t, n, a) {
                    var s = nge.localData.get("lines.value");
                    e = nge.localData.get("bet.value");
                    var o = nge.localData.get("coins.value"),
                        i = t ? s * e * o / n.lastSpinStartStake : 1;
                    return t = (t ? s * e / n.lastSpinStartStakeCredits : 1) / n.lastSpinStartCV, nge.localData.get("innerJackpot.updating") || (i = e * o / a.initialCv / a.initialBet, t = e / a.initialCv / a.initialBet), {
                        stakeCoinsMultBasic: i,
                        stakeCoinsMultCreditsBasic: t
                    }
                }
            }))
        },
        1137: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot.View = nge.App.ClassicGameBase.Com.InnerJackpot.View.extend((function() {
                this.singleton = !0;
                var e = [],
                    t = [],
                    n = null,
                    a = {};
                this.hidePopup = function() {}, this.showPopup = function() {}, this._reset = function() {}, this.updatePayout = function(e) {
                    if ("7" === e || "0" === e) {
                        var t = nge.localData.get("totalBet") || {};
                        t = void 0 === t.value ? 0 : t.value;
                        var a = nge.localData.get("jackpots"),
                            s = a.scatterValue,
                            o = a.sevensValue;
                        a = n[e].awards;
                        var i = "7" === e,
                            r = i ? "15" : "5",
                            l = i ? "as" : "";
                        for (var p in a[r] = i ? s : o, s = {}, a) {
                            o = a[p];
                            var c = nge.findAll("." + l + "ps" + e + "-" + p) || [],
                                m = i ? nge.Lib.Money.toCoinsInt(t) : nge.localData.get("bet.value");
                            s.$jscomp$loop$prop$totalValue$4 = p !== r ? o * m : o, c.forEach(function(e) {
                                return function(t) {
                                    t.text = e.$jscomp$loop$prop$totalValue$4
                                }
                            }(s)), s = {
                                $jscomp$loop$prop$totalValue$4: s.$jscomp$loop$prop$totalValue$4
                            }
                        }
                    }
                }, this._prepareLinks = function() {
                    e = nge.findAll(".asps0-5") || [], t = nge.findAll(".asps7-15") || [], this._prepareAllScattersTexts()
                }, this.setConvertedPayout = function(e) {
                    n = e
                }, this._prepareAllScattersTexts = function() {
                    for (var e = 3; 15 > e; e++) a[e] = nge.findAll(".asps7-" + e) || []
                }, this._updateScatterTextValues = function() {
                    if (n) {
                        var e = nge.localData.get("totalBet") || {},
                            t = void 0 === e.value ? 0 : e.value;
                        for (var s in e = {}, a) e.$jscomp$loop$prop$index$6 = s, a[e.$jscomp$loop$prop$index$6].forEach(function(e) {
                            return function(a) {
                                a.text = nge.Lib.Money.toCoinsInt(n[7].awards[e.$jscomp$loop$prop$index$6] * t)
                            }
                        }(e)), e = {
                            $jscomp$loop$prop$index$6: e.$jscomp$loop$prop$index$6
                        }
                    }
                }, this._updateJackpotValues = function(n, a) {
                    if (Object.keys(a).length) {
                        var s = this._decorateThousands;
                        n = n.stakeCoinsMultCreditsBasic;
                        var o = nge.localData.get("bet.value"),
                            i = s(Math.round(a[7].awards[15] * n) * o),
                            r = s(Math.round(a[0].awards[5] * n) * o);
                        nge.localData.set("jackpots", {
                            scatterValue: i,
                            sevensValue: r
                        }), e.forEach((function(e) {
                            e.text = r
                        })), t.forEach((function(e) {
                            e.text = i
                        }))
                    }
                }, this.printJackpotValues = function(e, t) {
                    this._updateJackpotValues(e, t), this._updateScatterTextValues()
                }
            }))
        },
        1138: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue = {}
        },
        1139: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    triggerVariants: [{
                        symbols: ["7"],
                        reelMask: [!0, !0, !0, !0, !0],
                        minCount: 2
                    }]
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1140: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Controller = nge.App.DjGameBase.Com.Intrigue.Controller.extend((function() {
                var e = null,
                    t = null,
                    n = 1,
                    a = !1,
                    s = [],
                    o = function() {
                        if (!a) {
                            var t = e.children[0];
                            t.setAnimationByMode(0, "spinification_front", nge.spine.LOOP), t.setAnimationByMode(1, "spinification_back", nge.spine.LOOP), a = !0
                        }
                    },
                    i = function(n, a) {
                        a = void 0 !== a && a;
                        var i = nge.Lib.Helper.mobileAndTabletCheck() ? 0 : 40,
                            r = t.x + s[n + 1].x * e.scale.x + i;
                        nge.Lib.Helper.mobileAndTabletCheck() && (2 === n && (r -= 35), 3 === n && (r -= 60)), a && (e.x = r);
                        var l = 0;
                        a ? (e.alpha = 0, n = nge.tween.add(e).to({
                            alpha: 1
                        }, 500)) : n = nge.tween.add(e).to({
                            alpha: 0
                        }, 500).to({
                            alpha: 1
                        }, 500), n.onUpdateCallback((function(t, n) {
                            l > n && (e.x = r), l = n
                        })), n.start(), o()
                    },
                    r = function() {
                        a = e.visible = !1;
                        var t = e.children[0];
                        t.stopTrack(0), t.stopTrack(1), a = !1
                    };
                this.onReelAnimationStopHandler = function(t) {
                    return function() {
                        var a = nge.localData.get("slotMachineIntrigue"),
                            s = void 0 === a.startsFrom ? Number.MAX_VALUE : a.startsFrom;
                        a.status && (t >= s - 1 && t < n - 1 && (e.visible = !0, i(t, t === s - 1)), t === s - 1 && nge.observer.fire("intrigue.blockStopButton"), t === n - 1 && ((a = nge.tween.add(e).to({
                            alpha: 0
                        }, 500)).onComplete.add(r), a.start()))
                    }
                }, this.create = function() {
                    e = nge.findOne("^slotMachineIntrigueFrame"), t = nge.findOne("^slotMachineGameContainer"), s = t.children[0].children.slice(), e && (n = nge.App.getInstance("Com.SlotMachine.Cfg").get().mw, r(), this.super.create())
                }
            }))
        },
        1141: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher = {}
        },
        1142: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                nge.App.getInstance("Com.Freespin.Cfg").get(), this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "questlineContainer winPopupContainer UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer UIFreespinWinContainer gameScreenContainer backgroundContainer foregroundContainer bgArea bgAreaFreeSpins offersFreespinCounter offers1Container progressiveJackpotSevens progressiveJackpotDiamond".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer backgroundContainer foregroundContainer bgArea progressiveJackpotSevens".split(" ")
                            },
                            freespinStartPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer backgroundContainer foregroundContainer bgArea progressiveJackpotSevens".split(" ")
                            },
                            gameFreeSpin: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer questlineContainer winPopupContainer gameScreenContainer backgroundContainer foregroundContainer bgAreaFreeSpins progressiveJackpotDiamond".split(" ")
                            },
                            freespinEndPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIFreespinWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer gameScreenContainer backgroundContainer bgAreaFreeSpins progressiveJackpotDiamond".split(" ")
                            },
                            diamondJackpotWin: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer gameScreenContainer backgroundContainer bgArea progressiveJackpotDiamond".split(" ")
                            },
                            gameOfferPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer gameScreenContainer backgroundContainer bgArea offers1Container progressiveJackpotSevens".split(" ")
                            },
                            gameOffer: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer backgroundContainer foregroundContainer bgArea offersFreespinCounter offers1Container progressiveJackpotSevens".split(" ")
                            }
                        }
                    }
                }
            }))
        },
        1143: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile = {}
        },
        1144: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer gameFreeSpinMobileContainer gameScreenContainer backgroundContainer bgArea bgAreaFreeSpinsBottom bgAreaBottom bgAreaFreeSpins autoSpinMobileContainer offers1Container questlineContainer progressiveJackpotSevens progressiveJackpotDiamond".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                static: "winPopupContainer gameScreenContainer backgroundContainer bgArea bgAreaBottom autoSpinMobileContainer progressiveJackpotSevens".split(" ")
                            },
                            freespinStartPopup: {
                                static: "winPopupContainer gameScreenContainer backgroundContainer bgArea bgAreaBottom progressiveJackpotSevens".split(" ")
                            },
                            gameFreeSpin: {
                                static: "winPopupContainer gameScreenContainer backgroundContainer questlineContainer bgAreaFreeSpinsBottom bgAreaFreeSpins progressiveJackpotDiamond".split(" ")
                            },
                            freespinEndPopup: {
                                static: "winPopupContainer gameScreenContainer backgroundContainer bgAreaFreeSpinsBottom bgAreaFreeSpins progressiveJackpotDiamond".split(" ")
                            },
                            diamondJackpotWin: {
                                static: "winPopupContainer gameScreenContainer backgroundContainer bgArea bgAreaBottom progressiveJackpotDiamond".split(" ")
                            },
                            gameOfferPopup: {
                                static: "winPopupContainer gameScreenContainer backgroundContainer bgArea bgAreaBottom autoSpinMobileContainer offers1Container progressiveJackpotSevens".split(" ")
                            },
                            gameOffer: {
                                static: "winPopupContainer gameScreenContainer backgroundContainer bgArea bgAreaBottom autoSpinMobileContainer progressiveJackpotSevens".split(" ")
                            }
                        }
                    }
                }
            }))
        },
        1145: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1146: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.DjGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "img/fonts/";
                this.fonts.academysans = nge.appPath + "css/fonts/academysans", this.atlasesGroups = ["atlases"], this.bitmapFonts.counter_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "counter_font.png",
                    bitmapFont: e + "counter_font.fnt"
                }, this.bitmapFonts.orange_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "orange_font.png",
                    bitmapFont: e + "orange_font.fnt"
                }
            }))
        },
        1147: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets = {}
        },
        1148: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets.Controller = nge.App.ClassicGameBase.Com.LoadAssets.Controller.extend((function() {
                this.preload = function() {
                    this.super.preload(), nge.wrap.cache.checkImageKey("settingsContainerBg") || nge.wrap.load.image("settingsContainerBg", nge.Lib.Helper.create1PxPng(42, 39, 50, 240, !0))
                }
            }))
        },
        1149: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable = {}
        },
        1150: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Cfg = nge.App.DjGameBase.Com.MiniPaytable.Cfg.extend((function() {
                this.cfg.tableCoords = [
                    [{
                        x: 203,
                        y: 45
                    }, {
                        x: 203,
                        y: 330
                    }, {
                        x: 203,
                        y: 616
                    }],
                    [{
                        x: 505,
                        y: 45
                    }, {
                        x: 505,
                        y: 330
                    }, {
                        x: 505,
                        y: 616
                    }],
                    [{
                        x: 810,
                        y: 45
                    }, {
                        x: 810,
                        y: 330
                    }, {
                        x: 810,
                        y: 616
                    }],
                    [{
                        x: 1115,
                        y: 45
                    }, {
                        x: 1115,
                        y: 330
                    }, {
                        x: 1115,
                        y: 616
                    }],
                    [{
                        x: 1115,
                        y: 45
                    }, {
                        x: 1115,
                        y: 330
                    }, {
                        x: 1115,
                        y: 616
                    }]
                ], this.cfg.slotMachineWidth = 1520, this.cfg.slotMachineHeight = 855, this.cfg.leftContainer = {
                    name: "miniPaytableLeftContainer",
                    x: 110,
                    y: 0
                }, this.cfg.rightContainer = {
                    name: "miniPaytableRightContainer",
                    x: 350,
                    y: 0
                }, this.cfg.miniPaytableBg = {
                    name: "miniPaytableBg"
                }, this.cfg.symbolSettings = {
                    0: {
                        numbers: {
                            offsetX: 40,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 80,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        additional: {
                            x: 80,
                            y: 66,
                            maxWidth: 400,
                            style: {
                                font: "18pt futuraptmedium",
                                fill: 16777215,
                                align: "center",
                                stroke: 4728599,
                                strokeThickness: 4
                            },
                            localizationKey: "MINI_PAYTABLE_SEVEN_JACKPOT"
                        }
                    },
                    7: {
                        numbers: {
                            offsetX: 40,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 80,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        additional: {
                            x: 80,
                            y: 66,
                            maxWidth: 400,
                            style: {
                                font: "18pt futuraptmedium",
                                fill: 16777215,
                                align: "center",
                                stroke: 4728599,
                                strokeThickness: 4
                            },
                            localizationKey: "MINI_PAYTABLE_SCATTER_JACKPOT"
                        }
                    },
                    other: {
                        numbers: {
                            offsetX: -10,
                            offsetY: 3,
                            hDist: 64,
                            style: {
                                font: "34pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 31,
                            offsetY: 3,
                            hDist: 64,
                            style: {
                                font: "34pt futuraptmedium",
                                fill: 16777215
                            }
                        }
                    }
                }
            }))
        },
        1151: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.ViewExtension = function() {
                var e, t, n = this;
                this.initialize = function(a) {
                    n.super.initialize(a), e = nge.findOne("^" + n.cfg.rightContainer.name, n.popupContainer), t = nge.App.getInstance("Com.SlotMachine.Cfg").get(), _sym0Texts = nge.findOne(".asps0-5"), _sym7Texts = nge.findOne(".asps7-5")
                }, this.getLinesData = function(e) {
                    var t = n.super.getLinesData(e),
                        a = nge.localData.get("progressiveJackpot.values");
                    return a[e] && (t.jackpot = a[e]), t
                }, this.generatePayTable = function(a) {
                    e.removeChildren();
                    for (var s = n.getSymbolSettings(a), o = s.payoutSymbolId ? s.payoutSymbolId : a, i = n.getLinesData(o), r = !1, l = s.selectorPostfix ? s.selectorPostfix : "", p = "7" === a ? 15 : t.mw, c = 0;
                        "7" === a ? 13 <= p : 2 <= p; p--, c++) {
                        var m = ("7" === a && 15 === p || "0" === a && 5 === p ? "as" : "") + "ps" + a + l + "-" + p,
                            u = i[p];
                        u && (r = !0, n.generatePaytableNumbers(p, c, s.numbers), n.generatePaytableValues(p, c, m, u, s.values))
                    }
                    s.divider && (!s.bonusGame || s.bonusGame && !nge.localData.get(s.bonusGame.localDataKey)) && nge.objects.create(new nge.Mlm.Objects.Image(s.divider), e), s.additional && (!s.bonusGame || s.bonusGame && !nge.localData.get(s.bonusGame.localDataKey)) && n.generateAdditionalText(s.additional), s.bonusGame && s.bonusGame.localDataKey && nge.localData.get(s.bonusGame.localDataKey) && (s.bonusGame.divider && nge.objects.create(new nge.Mlm.Objects.Image(s.bonusGame.divider), e), n.generateAdditionalText(s.bonusGame.additional)), s = 1, "s" === l ? s = nge.localData.get("lines.value") : "b" === l && (s = 2), "7" === a && (s = 5), r && nge.observer.fire("paytable.updatePayoutForSymbol", {
                        symbolId: o,
                        suffix: l,
                        modificator: s,
                        parent: e
                    }), "0" === a && nge.findAll(".asps0-5").attr("text", i.jackpot), "7" === a && nge.findAll(".asps7-15").attr("text", i.jackpot)
                }
            }
        },
        1152: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.View = nge.App.DjGameBase.Com.MiniPaytable.View.extend(nge.App[nge.appNS].Com.MiniPaytable.ViewExtension)
        },
        1153: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "miniPaytableBg",
                            fullPath: e + "playarea/miniPaytableBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "miniPaytableBgSeparator",
                            fullPath: e + "playarea/miniPaytableBgSeparator.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "miniPaytableMainContainer",
                            x: 0,
                            y: 0,
                            scaleX: 1,
                            scaleY: 1,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "miniPaytableClickableZones",
                                x: 196,
                                y: 48,
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "miniPaytablePopupContainer",
                                isVisible: !1,
                                x: 540,
                                y: 296,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "miniPaytableRightContainer",
                                    y: 83,
                                    contents: []
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "miniPaytableLeftContainer",
                                    y: 83,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "miniPaytableSymbolImage",
                                        anchorX: .5,
                                        anchorY: .5,
                                        assetKey: "2"
                                    }]
                                }, {
                                    type: mt.objects.NINE_SLICE,
                                    name: "miniPaytableBg",
                                    assetKey: "miniPaytableBg",
                                    bottom: 12,
                                    top: 12,
                                    left: 12,
                                    right: 12,
                                    height: 300,
                                    width: 620
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1154: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile = {}
        },
        1155: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.Cfg = nge.App[nge.appNS].Com.MiniPaytable.Cfg.extend((function() {
                this.cfg.tableCoords = [
                    [{
                        x: 140,
                        y: -30
                    }, {
                        x: 140,
                        y: 298
                    }, {
                        x: 140,
                        y: 622
                    }],
                    [{
                        x: 490,
                        y: -30
                    }, {
                        x: 490,
                        y: 298
                    }, {
                        x: 490,
                        y: 622
                    }],
                    [{
                        x: 820,
                        y: -30
                    }, {
                        x: 820,
                        y: 298
                    }, {
                        x: 820,
                        y: 622
                    }],
                    [{
                        x: 1160,
                        y: -30
                    }, {
                        x: 1160,
                        y: 298
                    }, {
                        x: 1160,
                        y: 622
                    }],
                    [{
                        x: 1160,
                        y: -30
                    }, {
                        x: 1160,
                        y: 298
                    }, {
                        x: 1160,
                        y: 622
                    }]
                ], this.cfg.slotMachineWidth = 1700, this.cfg.slotMachineHeight = 880, this.cfg.symbolSettings = {
                    0: {
                        numbers: {
                            offsetX: 40,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 80,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        additional: {
                            x: 110,
                            y: 66,
                            maxWidth: 400,
                            style: {
                                font: "18pt futuraptmedium",
                                fill: 16777215,
                                align: "center",
                                stroke: 4728599,
                                strokeThickness: 4
                            },
                            localizationKey: "MINI_PAYTABLE_SEVEN_JACKPOT"
                        }
                    },
                    7: {
                        numbers: {
                            offsetX: 40,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 80,
                            offsetY: 1,
                            hDist: 50,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        additional: {
                            x: 110,
                            y: 66,
                            maxWidth: 400,
                            style: {
                                font: "18pt futuraptmedium",
                                fill: 16777215,
                                align: "center",
                                stroke: 4728599,
                                strokeThickness: 4
                            },
                            localizationKey: "MINI_PAYTABLE_SCATTER_JACKPOT"
                        }
                    },
                    other: {
                        numbers: {
                            offsetX: 0,
                            offsetY: 3,
                            hDist: 64,
                            style: {
                                font: "34pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 21,
                            offsetY: 3,
                            hDist: 64,
                            style: {
                                font: "34pt futuraptmedium",
                                fill: 16777215
                            }
                        }
                    }
                }
            }))
        },
        1156: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.Controller = nge.App.DjGameBase.Com.MiniPaytable.Mobile.Controller.extend((function() {
                var e = this;
                this.show = function(t) {
                    nge.localData.get("questline.inProgress") || e.super.show(t)
                }
            }))
        },
        1157: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".portrait .miniPaytableParentContainer": {
                            isVisible: !1
                        },
                        ".album .miniPaytableParentContainer": {
                            isVisible: !0
                        },
                        ".portrait .miniPaytableMainContainer": {
                            alignX: "center",
                            x: 0,
                            y: 200,
                            scaleX: .6,
                            scaleY: .6
                        },
                        ".album .miniPaytableMainContainer": {
                            alignX: "left",
                            x: 0,
                            y: 60,
                            scaleX: .9,
                            scaleY: .9
                        },
                        ".portrait .miniPaytableClickableZones": {
                            x: -860,
                            y: 20
                        },
                        ".album .miniPaytableClickableZones": {
                            x: -100,
                            y: 20
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "miniPaytableBg",
                            fullPath: e + "playarea/miniPaytableBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "miniPaytableBgSeparator",
                            fullPath: e + "playarea/miniPaytableBgSeparator.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "miniPaytableMainContainer",
                            class: "miniPaytableMainContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "miniPaytableClickableZones",
                                class: "miniPaytableClickableZones",
                                x: 130,
                                y: 40,
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "miniPaytablePopupContainer",
                                isVisible: !1,
                                x: 540,
                                y: 296,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "miniPaytableRightContainer",
                                    y: 83,
                                    contents: []
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "miniPaytableLeftContainer",
                                    y: 83,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "miniPaytableSymbolImage",
                                        anchorX: .467,
                                        anchorY: .512,
                                        assetKey: "2"
                                    }]
                                }, {
                                    type: mt.objects.NINE_SLICE,
                                    name: "miniPaytableBg",
                                    assetKey: "miniPaytableBg",
                                    bottom: 12,
                                    top: 12,
                                    left: 12,
                                    right: 12,
                                    height: 300,
                                    width: 660
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1158: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.View = nge.App.DjGameBase.Com.MiniPaytable.Mobile.View.extend((function() {
                var e, t, n = this;
                this.initialize = function(a) {
                    n.super.initialize(a), e = nge.findOne("^" + n.cfg.rightContainer.name, n.popupContainer), t = nge.App.getInstance("Com.SlotMachine.Cfg").get()
                }, this.getLinesData = function(e) {
                    var t = n.super.getLinesData(e),
                        a = nge.localData.get("progressiveJackpot.values");
                    return a[e] && (t.jackpot = a[e]), t
                }, this.generatePayTable = function(a) {
                    e.removeChildren();
                    for (var s = n.getSymbolSettings(a), o = s.payoutSymbolId ? s.payoutSymbolId : a, i = n.getLinesData(o), r = !1, l = s.selectorPostfix ? s.selectorPostfix : "", p = "7" === a ? 15 : t.mw, c = 0;
                        "7" === a ? 13 <= p : 2 <= p; p--, c++) {
                        var m = ("7" === a && 15 === p || "0" === a && 5 === p ? "as" : "") + "ps" + a + l + "-" + p,
                            u = i[p];
                        u && (r = !0, n.generatePaytableNumbers(p, c, s.numbers), n.generatePaytableValues(p, c, m, u, s.values))
                    }
                    s.divider && (!s.bonusGame || s.bonusGame && !nge.localData.get(s.bonusGame.localDataKey)) && nge.objects.create(new nge.Mlm.Objects.Image(s.divider), e), s.additional && (!s.bonusGame || s.bonusGame && !nge.localData.get(s.bonusGame.localDataKey)) && n.generateAdditionalText(s.additional), s.bonusGame && s.bonusGame.localDataKey && nge.localData.get(s.bonusGame.localDataKey) && (s.bonusGame.divider && nge.objects.create(new nge.Mlm.Objects.Image(s.bonusGame.divider), e), n.generateAdditionalText(s.bonusGame.additional)), s = 1, "s" === l ? s = nge.localData.get("lines.value") : "b" === l && (s = 2), "7" === a && (s = 5), r && nge.observer.fire("paytable.updatePayoutForSymbol", {
                        symbolId: o,
                        suffix: l,
                        modificator: s,
                        parent: e
                    }), "0" === a && nge.findAll(".asps0-5").attr("text", i.jackpot), "7" === a && nge.findAll(".asps7-15").attr("text", i.jackpot)
                }
            }))
        },
        1159: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1160: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        font: "51pt academysans",
                        fill: "#ffffff",
                        stroke: "#ff8101",
                        strokeThickness: 4,
                        shadowColor: "#79004a",
                        shadowBlur: 2,
                        shadowOffsetY: 6,
                        align: "center"
                    },
                    t = {
                        font: "43pt academysans",
                        fill: "#870244",
                        stroke: "#ffc85f",
                        strokeThickness: 4,
                        shadowColor: "#ff5400",
                        shadowBlur: 1,
                        shadowOffsetY: 6,
                        align: "center"
                    },
                    n = {
                        font: "32pt academysans",
                        fill: "#870244",
                        stroke: "#ffc85f",
                        strokeThickness: 4,
                        shadowColor: "#ff5400",
                        shadowBlur: 1,
                        shadowOffsetY: 6,
                        align: "center"
                    },
                    a = {
                        type: 4,
                        name: "popupOkButton",
                        x: 0,
                        y: 165,
                        anchorX: .5,
                        anchorY: -.489,
                        isVisible: !1,
                        pixelPerfectOver: !1,
                        pixelPerfectClick: !1,
                        class: "popupButton",
                        assetKey: "popupOkButtonAsset"
                    };
                n = {
                    type: mt.objects.GROUP,
                    contents: [{
                        type: mt.objects.GROUP,
                        class: "popupQuestlineContainer0",
                        isVisible: !1,
                        y: -40,
                        contents: [{
                            type: 7,
                            class: "questlineVal",
                            text: "+3",
                            size: 45,
                            anchorX: 1,
                            anchorY: .5,
                            x: -23,
                            assetKey: "counter_font"
                        }, {
                            type: 2,
                            class: "questlineText",
                            text: "SPINS",
                            anchorY: .5,
                            x: -13,
                            y: 5,
                            style: n
                        }]
                    }, {
                        type: mt.objects.GROUP,
                        class: "popupQuestlineContainer1",
                        isVisible: !1,
                        y: 20,
                        contents: [{
                            type: 7,
                            class: "questlineVal",
                            text: "x2",
                            size: 45,
                            anchorX: 1,
                            anchorY: .5,
                            x: -48,
                            assetKey: "counter_font"
                        }, {
                            type: 2,
                            class: "questlineText",
                            text: "AWARDS",
                            anchorY: .5,
                            x: -38,
                            y: 5,
                            style: n
                        }]
                    }, {
                        type: mt.objects.GROUP,
                        class: "popupQuestlineContainer2",
                        isVisible: !1,
                        y: 80,
                        contents: [{
                            type: 7,
                            class: "questlineVal",
                            text: "+1",
                            size: 45,
                            anchorX: 1,
                            anchorY: .5,
                            x: -47,
                            assetKey: "counter_font"
                        }, {
                            type: 2,
                            class: "questlineText",
                            text: "SCATTER",
                            anchorY: .5,
                            x: -37,
                            y: 5,
                            style: n
                        }]
                    }]
                }, this.cfg.popups = {
                    freespinStartPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_free_games",
                                loop: "loop_free_games",
                                hide: "disappear_free_games"
                            }
                        },
                        button: a,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.7,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 120,
                                anchorX: .5,
                                anchorY: .48,
                                assetKey: "counter_font"
                            },
                            followSlotName: "fs_counter",
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1.5,
                                style: t
                            },
                            followSlotName: "you_won",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("FREE_SPINS_EN"),
                                anchorX: .5,
                                anchorY: -.6,
                                style: t
                            },
                            followSlotName: "free_spins",
                            targetName: "texts"
                        }]
                    },
                    questlineWinPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_free_games",
                                loop: "loop_free_games",
                                hide: "disappear_free_games"
                            }
                        },
                        button: a,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.7,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1.5,
                                style: t
                            },
                            followSlotName: "you_won",
                            targetName: "texts"
                        }, {
                            model: n,
                            followSlotName: "fs_counter",
                            targetName: "texts"
                        }]
                    },
                    diamondJackpotPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_diamond_jackpot",
                                loop: "loop_diamond_jackpot",
                                hide: "disappear_diamond_jackpot"
                            }
                        },
                        button: {
                            timer: 3e3
                        },
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.5,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1,
                                style: {
                                    font: "45pt academysans",
                                    fill: "#870244",
                                    stroke: "#ffc85f",
                                    strokeThickness: 4,
                                    shadowColor: "#ff5400",
                                    shadowBlur: 1,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "you_won",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("DIAMOND_JACKPOT_EN"),
                                anchorX: .5,
                                anchorY: .5,
                                style: {
                                    font: "80pt academysans",
                                    fill: "#870244",
                                    stroke: "#ffc85f",
                                    strokeThickness: 4,
                                    shadowColor: "#ff5400",
                                    shadowBlur: 1,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "free_spins",
                            targetName: "texts"
                        }]
                    },
                    freespinEndPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_total_win",
                                loop: "loop_total_win",
                                hide: "disappear_total_win"
                            }
                        },
                        button: a,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.7,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1,
                                style: {
                                    font: "61pt academysans",
                                    fill: "#870244",
                                    stroke: "#ffc85f",
                                    strokeThickness: 4,
                                    shadowColor: "#ff5400",
                                    shadowBlur: 1,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "total_win",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 150,
                                anchorX: .5,
                                anchorY: .5,
                                assetKey: "counter_font"
                            },
                            followSlotName: "counter_total_win",
                            dataKey: "freespinTotalWin"
                        }]
                    },
                    insufficientFundsPopup: {
                        shadow: {
                            color: 0,
                            a: .7,
                            showDuration: 500,
                            hideDuration: 500,
                            hideDelay: 500
                        },
                        background: {
                            type: "static",
                            assetKey: "notificationPopupBackground",
                            durations: {
                                show: 500,
                                hide: 510
                            }
                        },
                        button: {
                            type: 4,
                            name: "notificationOkButton",
                            x: 0,
                            y: 165,
                            anchorX: .5,
                            anchorY: -.496,
                            isVisible: !1,
                            class: "popupButton",
                            assetKey: "notificationOkButtonAsset",
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1
                        },
                        content: [{
                            model: {
                                type: 2,
                                text: nge.i18n.get("INSUFFICIENT_FUNDS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -45,
                                maxWidth: 1e3,
                                style: {
                                    font: "52pt futuraptheavy",
                                    fill: "#fff"
                                }
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("Please_deposit_more"),
                                anchorX: .5,
                                maxWidth: 1e3,
                                anchorY: .5,
                                y: 55,
                                style: {
                                    font: "28pt futuraptmedium",
                                    fill: "#efe1bf",
                                    align: "center"
                                }
                            }
                        }]
                    }
                }
            }))
        },
        1161: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Controller = nge.App.DjGameBase.Com.Popup.Controller.extend((function() {
                var e = this,
                    t = {
                        QuestLineA: {
                            text: "SPINS",
                            val: "+3"
                        },
                        QuestLineB: {
                            text: "AWARDS",
                            val: "x2"
                        },
                        QuestLineC: {
                            text: "SCATTER",
                            val: "+1"
                        }
                    };
                this._tryModifyQuestlinePopup = function(e) {
                    "questlineWinPopup" === e.popupName && e.winnedQuestlines.forEach((function(e, n) {
                        var a = nge.findOne(".popupQuestlineContainer" + n + " .questlineText"),
                            s = nge.findOne(".popupQuestlineContainer" + n + " .questlineVal");
                        "QuestLineA" === (n = Object.keys(t)[n]) || "QuestLineB" === n ? (a.x = -38, s.x = -48) : (a.x = -37, s.x = -47), a.text = t[e].text, s.text = t[e].val, s.parent.visible = !0
                    }))
                }, this.showPopup = function(t) {
                    e.super.showPopup(t), e._tryModifyQuestlinePopup(t)
                }, this.hidePopup = function() {
                    e.super.hidePopup()
                }
            }))
        },
        1162: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                var t = e;
                t || (t = nge.appPath + "img/");
                var n = (e = nge.App.DjGameBase.Com.Popup.Tpl(e)).objects.contents[0];
                delete n.anchorX, delete n.anchorY;
                var a = n.contents[0];
                return delete a.contents[0].anchorX, delete a.contents[0].anchorY, delete a.contents[1].anchorX, delete a.contents[1].anchorY, delete a.contents[2].anchorX, delete a.contents[2].anchorY, nge.Lib.Helper.mobileAndTabletCheck() && (e.styles[".portrait .popupContainer"] = {
                    scaleX: 1.2,
                    scaleY: 1.2,
                    alignX: "center",
                    alignY: "top",
                    y: 500
                }, e.styles[".album .popupContainer"] = {
                    scaleX: 1,
                    scaleY: 1,
                    alignX: "center",
                    alignY: "center",
                    y: 0
                }, delete n.x, delete n.y, n.class = "popupContainer"), e.assets.contents = [{
                    type: mt.assets.IMAGE,
                    key: "notificationPopupBackground",
                    fullPath: t + "playarea/notification_popup_bg.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "popupOkButtonAsset",
                    width: 864,
                    height: 132,
                    frameWidth: 288,
                    fullPath: t + "playarea/popupOkButton.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "notificationOkButtonAsset",
                    width: 864,
                    height: 132,
                    frameWidth: 288,
                    fullPath: t + "playarea/popupOkButton.png"
                }], e
            }
        },
        1163: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Lang_ru = {}
        },
        1164: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Lang_ru.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        font: "51pt futuraptheavy",
                        fill: "#ffffff",
                        stroke: "#ff8101",
                        strokeThickness: 4,
                        shadowColor: "#79004a",
                        shadowBlur: 2,
                        shadowOffsetY: 6,
                        align: "center"
                    },
                    t = {
                        font: "43pt futuraptheavy",
                        fill: "#870244",
                        stroke: "#ffc85f",
                        strokeThickness: 4,
                        shadowColor: "#ff5400",
                        shadowBlur: 1,
                        shadowOffsetY: 6,
                        align: "center"
                    },
                    n = {
                        font: "32pt academysans",
                        fill: "#870244",
                        stroke: "#ffc85f",
                        strokeThickness: 4,
                        shadowColor: "#ff5400",
                        shadowBlur: 1,
                        shadowOffsetY: 6,
                        align: "center"
                    },
                    a = {
                        type: 4,
                        name: "popupOkButton",
                        x: 0,
                        y: 165,
                        anchorX: .5,
                        anchorY: -.496,
                        isVisible: !1,
                        pixelPerfectOver: !1,
                        pixelPerfectClick: !1,
                        class: "popupButton",
                        assetKey: "popupOkButtonAsset"
                    };
                n = {
                    type: mt.objects.GROUP,
                    contents: [{
                        type: mt.objects.GROUP,
                        class: "popupQuestlineContainer0",
                        isVisible: !1,
                        y: -40,
                        contents: [{
                            type: 7,
                            class: "questlineVal",
                            text: "+3",
                            size: 45,
                            anchorX: 1,
                            anchorY: .5,
                            x: -50,
                            assetKey: "counter_font"
                        }, {
                            type: 2,
                            class: "questlineText",
                            text: "SPINS",
                            anchorY: .5,
                            x: -40,
                            y: 5,
                            style: n
                        }]
                    }, {
                        type: mt.objects.GROUP,
                        class: "popupQuestlineContainer1",
                        isVisible: !1,
                        y: 20,
                        contents: [{
                            type: 7,
                            class: "questlineVal",
                            text: "x2",
                            size: 45,
                            anchorX: 1,
                            anchorY: .5,
                            x: -50,
                            assetKey: "counter_font"
                        }, {
                            type: 2,
                            class: "questlineText",
                            text: "AWARDS",
                            anchorY: .5,
                            x: -40,
                            y: 5,
                            style: n
                        }]
                    }, {
                        type: mt.objects.GROUP,
                        class: "popupQuestlineContainer2",
                        isVisible: !1,
                        y: 80,
                        contents: [{
                            type: 7,
                            class: "questlineVal",
                            text: "+1",
                            size: 45,
                            anchorX: 1,
                            anchorY: .5,
                            x: -50,
                            assetKey: "counter_font"
                        }, {
                            type: 2,
                            class: "questlineText",
                            text: "SCATTER",
                            anchorY: .5,
                            x: -40,
                            y: 5,
                            style: n
                        }]
                    }]
                }, this.cfg.popups = {
                    freespinStartPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_free_games",
                                loop: "loop_free_games",
                                hide: "disappear_free_games"
                            }
                        },
                        button: a,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.7,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 120,
                                anchorX: .5,
                                anchorY: .48,
                                assetKey: "counter_font"
                            },
                            followSlotName: "fs_counter",
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1.5,
                                style: t
                            },
                            followSlotName: "you_won",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("FREE_SPINS_EN"),
                                anchorX: .5,
                                anchorY: -.6,
                                style: t
                            },
                            followSlotName: "free_spins",
                            targetName: "texts"
                        }]
                    },
                    questlineWinPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_free_games",
                                loop: "loop_free_games",
                                hide: "disappear_free_games"
                            }
                        },
                        button: a,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.7,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1.5,
                                style: t
                            },
                            followSlotName: "you_won",
                            targetName: "texts"
                        }, {
                            model: n,
                            followSlotName: "fs_counter",
                            targetName: "texts"
                        }]
                    },
                    diamondJackpotPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_diamond_jackpot",
                                loop: "loop_diamond_jackpot",
                                hide: "disappear_diamond_jackpot"
                            }
                        },
                        button: {
                            timer: 3e3
                        },
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.5,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1,
                                style: {
                                    font: "45pt futuraptheavy",
                                    fill: "#870244",
                                    stroke: "#ffc85f",
                                    strokeThickness: 4,
                                    shadowColor: "#ff5400",
                                    shadowBlur: 1,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "you_won",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("DIAMOND_JACKPOT_EN"),
                                anchorX: .5,
                                anchorY: .5,
                                style: {
                                    font: "80pt futuraptheavy",
                                    fill: "#870244",
                                    stroke: "#ffc85f",
                                    strokeThickness: 4,
                                    shadowColor: "#ff5400",
                                    shadowBlur: 1,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "free_spins",
                            targetName: "texts"
                        }]
                    },
                    freespinEndPopup: {
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "appear_total_win",
                                loop: "loop_total_win",
                                hide: "disappear_total_win"
                            }
                        },
                        button: a,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS_EN"),
                                anchorX: .5,
                                anchorY: 1.7,
                                style: e
                            },
                            followSlotName: "congratulations",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: 1,
                                style: {
                                    font: "61pt futuraptheavy",
                                    fill: "#870244",
                                    stroke: "#ffc85f",
                                    strokeThickness: 4,
                                    shadowColor: "#ff5400",
                                    shadowBlur: 1,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "total_win",
                            targetName: "texts"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 150,
                                anchorX: .5,
                                anchorY: .5,
                                assetKey: "counter_font"
                            },
                            followSlotName: "counter_total_win",
                            dataKey: "freespinTotalWin"
                        }]
                    },
                    insufficientFundsPopup: {
                        shadow: {
                            color: 0,
                            a: .7,
                            showDuration: 500,
                            hideDuration: 500,
                            hideDelay: 500
                        },
                        background: {
                            type: "static",
                            assetKey: "notificationPopupBackground",
                            durations: {
                                show: 500,
                                hide: 510
                            }
                        },
                        button: {
                            type: 4,
                            name: "notificationOkButton",
                            x: 0,
                            y: 165,
                            anchorX: .5,
                            anchorY: -.496,
                            isVisible: !1,
                            class: "popupButton",
                            assetKey: "notificationOkButtonAsset",
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1
                        },
                        content: [{
                            model: {
                                type: 2,
                                text: nge.i18n.get("INSUFFICIENT_FUNDS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -45,
                                maxWidth: 670,
                                style: {
                                    font: "52pt futuraptheavy",
                                    fill: "#fff"
                                }
                            }
                        }, {
                            model: {
                                type: 2,
                                text: nge.i18n.get("Please_deposit_more"),
                                anchorX: .5,
                                maxWidth: 670,
                                anchorY: .5,
                                y: 55,
                                style: {
                                    font: "28pt futuraptmedium",
                                    fill: "#efe1bf",
                                    align: "center"
                                }
                            }
                        }]
                    }
                }
            }))
        },
        1165: function(e, t) {
            nge.App[nge.appNS].Com.ProgressiveJackpot = {}
        },
        1166: function(e, t) {
            nge.App[nge.appNS].Com.ProgressiveJackpot.Controller = nge.Com.Base.extend((function() {
                var e, t, n, a, s = this,
                    o = [],
                    i = [],
                    r = [],
                    l = [],
                    p = {},
                    c = !1,
                    m = {},
                    u = !1,
                    g = 1;
                this.currencyColor = "#EFC273";
                var y = function(e, t) {
                        return !!e && (t || (t = " "), (e = e.toString().split("."))[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, t), e.join("."))
                    },
                    b = function() {
                        var e = +nge.localData.get("lines.value"),
                            b = +nge.localData.get("bet.value"),
                            f = +nge.localData.get("coins.value");
                        if (e = (c ? e * b * f / n : 1) * g, t && void 0 !== t[0] && void 0 !== t[7]) {
                            var h = nge.localData.get("balance.currency") || "",
                                d = t[7].value,
                                x = t[0].value;
                            u ? (d *= e, x *= e) : (d *= nge.localData.get("lines.value"), d *= b, x *= b);
                            var _ = y(x.toFixed(2)),
                                T = y(d.toFixed(2));
                            o.forEach((function(e) {
                                e.text = _ + " " + h, e.clearColors(), e.addColor(s.currencyColor, _.length)
                            })), r.forEach((function(e) {
                                e.text = T + " " + h, e.clearColors(), e.addColor(s.currencyColor, T.length)
                            })), d = u ? d / a : d / f, x = u ? x / a : x / f;
                            var S = Math.round(x).toString(),
                                C = Math.round(d).toString();
                            i.forEach((function(e) {
                                return e.text = S
                            })), l.forEach((function(e) {
                                return e.text = C
                            })), m.forEach((function(e) {
                                return e.text = S
                            })), p.forEach((function(e) {
                                return e.text = C
                            })), nge.localData.set("progressiveJackpot.values", {
                                0: S,
                                7: C
                            })
                        }
                    },
                    f = function(e) {
                        var t = {},
                            n = 0,
                            a = e.length,
                            s = 0;
                        e: for (; s < a; s++) {
                            var o = e[s].symbols,
                                i = e[s].payout,
                                r = e[s].matchCount,
                                l = 0,
                                p = o[0];
                            if (0 < r) p = "any_" + o.join("_"), l = r;
                            else
                                for (r = 0; r < o.length; r++) {
                                    if (p !== o[r]) continue e;
                                    l++
                                }
                            n++, t[p] = {
                                name: l,
                                value: i
                            }
                        }
                        return 1 > n ? null : t
                    },
                    h = function(e) {
                        u = !0, e && e.data && e.data.payouts && (t = f(e.data.payouts)), b()
                    },
                    d = function(e) {
                        (e.includes("hold") || e.includes("linePlusMobile") || e.includes("lineMinusMobile") || e.includes("linesChanger")) && b()
                    },
                    x = function() {
                        var e = +nge.localData.get("lines.value"),
                            t = +nge.localData.get("bet.value"),
                            s = +nge.localData.get("coins.value");
                        c = !1, a = s, n = e * t * s
                    },
                    _ = function() {
                        c = !0, b()
                    },
                    T = function(e) {
                        g = e.mult, _()
                    };
                this.subscribe = function() {
                    nge.observer.add("slotMachine.spinResponse", x), nge.observer.add("bet.change", _), nge.observer.add("lines.change", _), nge.observer.add("coins.change", _), nge.observer.add("popup.animate.start", b), nge.observer.add("buttons.pressCommand", d), nge.observer.add("freespin.setMultiplier", T), nge.observer.add("progressiveJackpot.restoreMult", (function() {
                        nge.localData.set("slotMachine.expandingSymbol", 1), T({
                            mult: 1
                        })
                    })), nge.observer.add("transportMessage.PayoutsUpdateResponse", h)
                }, this.create = function() {
                    return o = nge.findAll(".jackpotSevensPlayareaValue"), i = nge.findAll(".creditsJackpotSevensPlayareaValue"), r = nge.findAll(".jackpotDiamondPlayareaValue"), l = nge.findAll(".creditsJackpotDiamondPlayareaValue"), m = nge.findAll(".asps0-5"), p = nge.findAll(".asps7-15"), x(), (t = f(nge.localData.get("payout.cfg")))[0].value /= 100, t[7].value /= 100, u = !1, b(), e || s.subscribe(), e = !0
                }
            }))
        },
        1167: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1168: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Cfg = nge.App.DjGameBase.Com.RegularWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.regularProfile = "hideWithDelayFast", this.params.turboProfile = "hideWithDelayFast"
            }))
        },
        1169: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "regularWinContainer",
                            x: 960,
                            y: 404,
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "regularWinCounter",
                                isVisible: !1,
                                x: 0,
                                y: 70,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 120
                            }]
                        }]
                    }
                }
            }
        },
        1170: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Mobile = {}
        },
        1171: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Mobile.Tpl = function() {
                return {
                    styles: {
                        ".portrait .regularWinContainer": {
                            y: 496,
                            x: "50%"
                        },
                        ".album .regularWinContainer": {
                            y: 379,
                            x: 870
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "regularWinContainer",
                            class: "regularWinContainer",
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "regularWinCounter",
                                isVisible: !1,
                                x: 0,
                                y: 70,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 120
                            }]
                        }]
                    }
                }
            }
        },
        1172: function(e, t) {
            nge.App[nge.appNS].Com.SettingsScreen = {}
        },
        1173: function(e, t) {
            nge.App[nge.appNS].Com.SettingsScreen.Controller = nge.App.DjGameBase.Com.SettingsScreen.Controller.extend((function() {
                var e = this,
                    t = {
                        overFrame: 2,
                        outFrame: 4,
                        downFrame: 0,
                        upFrame: 2,
                        disabledFrame: 3
                    },
                    n = {
                        overFrame: 2,
                        outFrame: 1,
                        downFrame: 0,
                        upFrame: 1,
                        disabledFrame: 3
                    };
                this.switchTurboMode = function(a) {
                    e.super.switchTurboMode(a), a = nge.localData.get("settings.turboMode") ? t : n, e.changeButtonFrames(a)
                }
            }))
        },
        1174: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar = {}
        },
        1175: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile = {}
        },
        1176: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Cfg = Class.extend((function() {
                var e = this;
                this.singleton = !0, this.params = {
                    animateDistance: 702,
                    animateDuration: 500
                }, this.get = function() {
                    return e.params
                }
            }))
        },
        1177: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = null,
                    n = !1,
                    a = {
                        Sound: null,
                        BetSettings: null,
                        Settings: null,
                        Paytable: null
                    };
                this.create = function() {
                    for (var s in this.createDefault(), n || (e.subscribe(), n = !0), (t = this.getInstance("View")).init(), a) {
                        var o = nge.findOne("^sidebar" + s + "Image");
                        o ? a[s] = o : delete a[s]
                    }
                }, this.animateIn = function() {
                    t.animateIn()
                }, this.animateOut = function() {
                    t.animateOut()
                };
                var s = function() {
                        e.animateIn()
                    },
                    o = function() {
                        e.animateOut()
                    },
                    i = function() {
                        s()
                    },
                    r = function() {
                        o()
                    },
                    l = function(e) {
                        e && (e.sidebarBetSettingsMobile && a.BetSettings && (a.BetSettings.frame = e.sidebarBetSettingsMobile.enabled ? 1 : 0), e.sidebarSettingsMobile && a.Settings && (a.Settings.frame = e.sidebarSettingsMobile.enabled ? 1 : 0), e.sidebarPaytableMobile && a.Paytable && (a.Paytable.frame = e.sidebarPaytableMobile.enabled ? 1 : 0))
                    };
                this.subscribe = function() {
                    nge.observer.add("sidebar.show", s), nge.observer.add("sidebar.hide", o), nge.observer.add("sidebar.button.click", i), nge.observer.add("sidebarBack.button.click", r), nge.observer.add("buttons.changeData", l)
                }
            }))
        },
        1178: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".album .sidebarContainer": {
                            isVisible: !1
                        },
                        ".portrait .sidebarContainer": {
                            isVisible: !0
                        },
                        ".sidebarButtonStyle": {
                            style: {
                                font: "40pt futuraptheavy",
                                fill: 16777215,
                                align: "left"
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "helpMobileButton",
                            fullPath: e + "playarea/helpMobileButton.png",
                            frameWidth: 92
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsMobileButton",
                            fullPath: e + "playarea/settingsMobileButton.png",
                            frameWidth: 92
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingButtonMobile",
                            fullPath: e + "playarea/betSettingButtonMobile.png",
                            frameWidth: 136
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsMobileButton",
                            fullPath: e + "playarea/settingsMobileButton.png",
                            frameWidth: 84
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            isVisible: !0,
                            name: "sidebarParentContainer",
                            sWidth: "100%",
                            sHeight: "100%",
                            anchorX: 0,
                            x: 0,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "sidebarButtonsContainer",
                                x: "35%",
                                sWidth: "65%",
                                alignY: "bottom",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "customButtons01VerticalMobileContainer",
                                    scaleX: 1.2,
                                    scaleY: 1.2,
                                    y: -1e3,
                                    contents: []
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "customButtons02VerticalMobileContainer",
                                    scaleX: .8,
                                    scaleY: .8,
                                    y: -1e3,
                                    contents: []
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "sidebarSoundButtonMobile",
                                    y: -800,
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "sidebarSoundMobileButtonButton",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 1
                                        },
                                        assetKey: "soundMobileButton",
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        x: 40,
                                        y: 100,
                                        anchorY: .5,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "sidebarSoundMobile");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "sidebarSoundText",
                                        text: nge.i18n.get("sidebar_SOUND"),
                                        x: 150,
                                        y: 100,
                                        anchorY: .5,
                                        maxWidth: 500,
                                        class: "sidebarButtonStyle"
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "sidebarDivider",
                                        assetKey: "sidebarDivider",
                                        x: 50,
                                        scaleX: 1080 * .57,
                                        scaleY: 2
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "sidebarSoundMobileAreaButton",
                                        btnFrames: {
                                            over: 0,
                                            out: 0,
                                            down: 0
                                        },
                                        alpha: 0,
                                        assetKey: "sidebarButton",
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        x: 0,
                                        y: 0,
                                        scaleX: 702,
                                        scaleY: 200,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "sidebarSoundMobileArea");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "sidebarBetSettingsButtonMobile",
                                    y: -600,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "sidebarBetSettingsImage",
                                        assetKey: "betSettingButtonMobile",
                                        x: 20,
                                        y: 100,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "sidebarBetSettingsText",
                                        text: nge.i18n.get("sidebar_BET_SETTINGS"),
                                        x: 150,
                                        y: 100,
                                        anchorY: .5,
                                        maxWidth: 500,
                                        class: "sidebarButtonStyle"
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "sidebarDivider",
                                        assetKey: "sidebarDivider",
                                        x: 50,
                                        scaleX: 1080 * .57,
                                        scaleY: 2
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "sidebarBetSettingsMobileButtonButton",
                                        btnFrames: {
                                            over: 0,
                                            out: 0,
                                            down: 0
                                        },
                                        alpha: 0,
                                        assetKey: "sidebarButton",
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        x: 0,
                                        y: 0,
                                        scaleX: 702,
                                        scaleY: 200,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "sidebarBetSettingsMobile");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "sidebarSettingsButtonMobile",
                                    y: -400,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "sidebarSettingsImage",
                                        assetKey: "settingsMobileButton",
                                        x: 40,
                                        y: 100,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "sidebarSettingsText",
                                        text: nge.i18n.get("sidebar_SETTINGS"),
                                        x: 150,
                                        y: 100,
                                        anchorY: .5,
                                        maxWidth: 500,
                                        class: "sidebarButtonStyle"
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "sidebarDivider",
                                        assetKey: "sidebarDivider",
                                        x: 50,
                                        scaleX: 1080 * .57,
                                        scaleY: 2
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "sidebarSettingsMobileButtonButton",
                                        btnFrames: {
                                            over: 0,
                                            out: 0,
                                            down: 0
                                        },
                                        alpha: 0,
                                        assetKey: "sidebarButton",
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        x: 0,
                                        y: 0,
                                        scaleX: 702,
                                        scaleY: 200,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "sidebarSettingsMobile");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "sidebarPaytableButtonMobile",
                                    y: -200,
                                    contents: [{
                                        type: mt.objects.IMAGE,
                                        name: "sidebarPaytableImage",
                                        assetKey: "helpMobileButton",
                                        x: 40,
                                        y: 100,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "sidebarPaytableText",
                                        text: nge.i18n.get("sidebar_PAYTABLE"),
                                        x: 150,
                                        y: 100,
                                        anchorY: .5,
                                        maxWidth: 500,
                                        class: "sidebarButtonStyle"
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "sidebarDivider",
                                        assetKey: "sidebarDivider",
                                        x: 50,
                                        scaleX: 1080 * .57,
                                        scaleY: 2
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "sidebarPaytableMobileButtonButton",
                                        btnFrames: {
                                            over: 0,
                                            out: 0,
                                            down: 0
                                        },
                                        alpha: 0,
                                        assetKey: "sidebarButton",
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        x: 0,
                                        y: 0,
                                        scaleX: 702,
                                        scaleY: 200,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "sidebarPaytableMobile");}'
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "sidebarBackButtonMobile",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "sidebarBackButtonMobileButton",
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    alpha: 0,
                                    assetKey: "sidebarBackground",
                                    pixelPerfectClick: 0,
                                    pixelPerfectOver: 0,
                                    x: 0,
                                    y: 0,
                                    sWidth: "35%",
                                    sHeight: "100%",
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "sidebarBackMobile");}'
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "sidebarBackground",
                                assetKey: "sidebarBackground",
                                x: "35%",
                                y: 0,
                                sWidth: "65%",
                                sHeight: "100%",
                                inputEnabled: !0,
                                isVisible: !0
                            }]
                        }]
                    }
                }
            }
        },
        1179: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.View = nge.Com.Base.extend((function() {
                var e, t = null,
                    n = null;
                this.init = function() {
                    t = this.getInstance("Cfg").get(), (e = nge.findOne("^sidebarParentContainer")).visible = !1, e.x = t.animateDistance
                }, this.animateIn = function() {
                    var a = t.animateDuration;
                    n && (a = (e.x - 0) / (t.animateDistance - 0) * t.animateDuration, n.stop()), (n = nge.tween.add(e).to({
                        x: 0
                    }, a, t.animateInEasing || nge.Lib.Tween.Easing.Linear.None)).start(), e.visible = !0
                }, this.animateOut = function() {
                    var a = t.animateDuration;
                    n && (a = (e.x - t.animateDistance) / (0 - t.animateDistance) * t.animateDuration, n.stop()), (n = nge.tween.add(e).to({
                        x: t.animateDistance
                    }, a, t.animateOutEasing || nge.Lib.Tween.Easing.Linear.None)).onComplete.addOnce((function() {
                        e.visible = !1
                    })), n.start()
                }
            }))
        },
        1180: function(e, t) {
            nge.App[nge.appNS].Com.Shaker = {}
        },
        1181: function(e, t) {
            nge.App[nge.appNS].Com.Shaker.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    bigWin: {
                        shakingLayers: ["gameScreenContainer", "backgroundContainer"],
                        time: 3e3,
                        startEvents: ["win.big.preWinEventManual"],
                        stopEvents: !1,
                        scaleWorld: !1,
                        moveWorld: !1
                    }
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1182: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1183: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.additionalBlurs = !1, this.params.mw = 5, this.params.mh = 3, this.params.wildSymbol = "0", this.params.tintDark = 9853273, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = 1, this.params.tintNormalAlpha = 1, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tweenDuration.blur = 85, this.params.th = [4, 4, 4, 4, 4], this.params.tweenDuration.oldSymbols = 138, this.params.tweenDuration.newSymbols = 138, this.params.symbolsBlurKeys = "100 101 102 103 104 105 106 107".split(" "), this.params.symbolAnimationContainerName = "slotMachineSymbolWinContainer", this.params.maskName = "slotMachineMaskContainer", this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounter = [10, 16, 22, 28, 34], this.params.recyclerView.reelsSpeed = [1.9, 1.9, 1.9, 1.9, 1.9, 1.9], this.params.recyclerView.reelsSpeedUpSpeed = 3, this.params.recyclerView.reelsIntrigueSpeed = 4, this.params.recyclerView.intrigueAdditionalCounter = 60, this.params.recyclerView.reelBlursSize = 600, this.params.recyclerView.borderSymbolsCount = 1, this.params.recyclerView.hideBorderSymbols = !0, this.params.recyclerView.hideBottomBorderSymbolsOnStart = !0, this.params.useSMJumpOnFreespins = !0, this.params.symbolsLanding = [{
                    symbol: "7",
                    animationName: "custom"
                }]
            }))
        },
        1184: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e = this,
                    t = 0,
                    n = null,
                    a = {};
                this.create = function() {
                    e.super.create(), t = 0, n = e.getInstance("RecyclerView")
                };
                var s = function() {
                        if (t = 0, !nge.localData.get("freespin.inProgress")) {
                            for (var e in a) nge.rafClearTimeout(a[e]);
                            a = {}, n.hideAllSymbolGlowAnimations()
                        }
                    },
                    o = function(e) {
                        e = e.spinResult.columns;
                        for (var n = [], a = 0; a < e.length; a++) {
                            for (var s = 0, o = 0; o < e[a].length; o++) "7" === e[a][o] && (s++, t++);
                            0 !== s && (3 > a || 3 === a && (1 < t || 1 < s) || 4 === a && 5 <= t) && n.push(a)
                        }
                        nge.localData.set("scatterReels", n)
                    };
                this.stopCustomAnimationHandler = function(e) {
                    return function() {
                        "gameFreeSpin" === nge.localData.get("layersSwitcher.currentLayer") && nge.localData.get("slotMachine.spinResult").columns[e].forEach((function(t, s) {
                            "7" === t && (a[e] = nge.rafSetTimeout((function() {
                                return n.showSymbolGlowAnimation({
                                    reel: e,
                                    row: s
                                })
                            }), 800))
                        }))
                    }
                }, this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("slotMachine.hideHoldedSymbols", (function() {
                        n.runHideGlowAnimation()
                    })), nge.observer.add("slotMachine.showSymbols", (function() {
                        n.showSymbols()
                    })), nge.observer.add("slotMachine.hideGlowAnimation", (function() {
                        return n.hideAllSymbolGlowAnimations()
                    })), nge.observer.add("slotMachine.spinCommand", s), nge.observer.add("slotMachine.spinResponse", o), nge.observer.add("slotMachine.tintSymbol", (function(e) {
                        return n.applyTint(e)
                    }));
                    for (var t = 0; 5 > t; t++) nge.observer.add("slotMachine.reel_" + t + ".animation.stopped", e.stopCustomAnimationHandler(t))
                }
            }))
        },
        1185: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerReel = nge.App.DjGameBase.Com.SlotMachine.RecyclerReel.extend((function() {
                var e = this,
                    t = null;
                this.stopJumpDistance = 75, this.stopJumpTime = 180, this.jumpDistance = 55, this.jumpTimeUp = 150, this.jumpTimeDown = 75, this.step = function(t, n, a) {
                    e.super.step(t, n, a), n = nge.localData.get("freespin").inProgress, 0 === e._lastSymbols.length && 0 === e._counter && n && e._hideReelSymbolsGracefully(t)
                }, this.customStopCallback = function() {
                    e._symbols.forEach((function(e) {
                        e.startBrightAnimation()
                    })), e.super.customStopCallback()
                }, this.loadSymbolAt = function(t, n) {
                    e.super.loadSymbolAt(t, n), e._checkStarToDraw(t, n)
                }, this._checkStarToDraw = function(t, n) {
                    if (nge.localData.get("freespin.inProgress") && !(1 < n.length)) {
                        var a = e._lastSymbols.length;
                        t = nge.localData.get("questline.stars"), a = e._index + "_" + a, t && t[a] && t[a] === n && e._symbols[0].drawStar(a)
                    }
                }, this._getSybolsToHide = function() {
                    for (var t = nge.localData.get("diamondJackpot.holdedSymbols") || [], n = [], a = 0; a < t.length; a++) {
                        var s = t[a].coords;
                        s.reel === e._index && n.push(e._symbols[s.row])
                    }
                    return n
                }, this._runHidingTween = function(e, n) {
                    (t = nge.tween.add({}).to({}, .6 * e)).onUpdateCallback((function(e, t) {
                        n.forEach((function(e) {
                            e.texture.alpha = 1 - t
                        }))
                    })), t.start()
                }, this._hideReelSymbolsGracefully = function(t) {
                    var n = e._getSybolsToHide();
                    e._runHidingTween(t, n)
                }, this.showSymbols = function() {
                    return e._symbols.forEach((function(e) {
                        return e.texture.alpha = 1
                    }))
                }
            }))
        },
        1186: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.DjGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                var e = this,
                    t = !1,
                    n = [],
                    a = null,
                    s = [];
                this.createSlotMachine = function(t, a, o, i) {
                    e.super.createSlotMachine(t, a, o, void 0 !== i && i), s = [], n = [], delete e._holdedSymbolsContainer, e._createHoldedSymbols(), e._resetHoldedSymbols()
                }, this._resetHoldedSymbols = function(n) {
                    n = void 0 !== n && n, e._holdedSymbols.forEach((function(e) {
                        e.forEach((function(e) {
                            e.alpha = 0, e.scale.set(1), n && e.stopTrack(0)
                        }))
                    })), t = !1
                }, this._createHoldedSymbols = function() {
                    for (var t = e._cfg.mw, n = 0; n < t; n++)
                        for (var a = e._reels[n], s = 1; s < a._symbols.length - 1; s++) e._createHoldSpineObj(n, s, a._symbols[s])
                }, this._createHoldSpineObj = function(t, n, a) {
                    a = a.texture, e._holdedSymbolsContainer || (e._holdedSymbolsContainer = nge.objects.create(nge.Mlm.Objects.Folder({
                        name: "holdedSymbolsContainer"
                    }), e._container)), a = nge.objects.create(nge.Mlm.Objects.Spine({
                        name: "holdedGlow_" + t + "_" + n,
                        assetKey: "m07_000",
                        x: a.x + a.parent.x,
                        y: a.y + a.parent.y,
                        anchorX: .5,
                        anchorY: .5
                    }), e._holdedSymbolsContainer), s[t] || (s[t] = []), s[t][n - 1] = a, a.setAnimationByMode(0, "play_glow", nge.spine.LOOP), e._holdedSymbols[t][n - 1] = a
                }, this.isPassAdditionalLandingRule = function(e, t) {
                    return -1 < nge.localData.get("scatterReels").indexOf(e)
                }, this._tryRunAllSymbolsGlowAnimation = function() {
                    t || e._holdedSymbols.forEach((function(e) {
                        e.forEach((function(e) {
                            e.setAnimationByMode(0, "play_glow", nge.spine.LOOP)
                        }))
                    })), t = !0
                }, this.showSymbolGlowAnimation = function(t) {
                    nge.localData.get("freespin.inProgress") && (e._tryRunAllSymbolsGlowAnimation(), t = nge.tween.add(s[t.reel][t.row]).to({
                        alpha: 1
                    }, 300), n.push(t), t.start())
                }, this.applyTint = function(t) {
                    var n = t.endColor,
                        o = t.endAlpha,
                        i = t.time,
                        r = t.startColor,
                        l = t.startAlpha;
                    t = t.toDark;
                    var p = function(e) {
                        s.forEach((function(t) {
                            t.forEach((function(t) {
                                t.setTint(e)
                            }))
                        }))
                    };
                    if (r || (r = s[0][0].children[0].tint), a && a.isRunning) a.stop(), e.applyTint({
                        endColor: n,
                        endAlpha: o,
                        time: i,
                        startColor: r,
                        startAlpha: l,
                        toDark: t
                    });
                    else {
                        var c = {
                            step: 0
                        };
                        (a = nge.tween.add(c).to({
                            step: 1
                        }, i)).onUpdateCallback((function() {
                            p(nge.Lib.Math.interpolateColor(r, n, c.step))
                        })), a.onComplete.add((function() {
                            p(n)
                        })), a.start()
                    }
                }, this.hideAllSymbolGlowAnimations = function() {
                    n.forEach((function(e) {
                        e.isRunning && e.stop()
                    })), s.forEach((function(e) {
                        e.forEach((function(e) {
                            var n = nge.tween.add(e).to({
                                alpha: 0
                            }, 100);
                            n.onComplete.add((function() {
                                e.stopTrack(0), t = !1
                            })), n.start()
                        }))
                    }))
                }, this.holdSymbol = function(t) {
                    var n = t.reel;
                    if (t = t.row, nge.localData.get("freespin.inProgress")) {
                        var a = e._holdedSymbols[n][t];
                        e._tryRunAllSymbolsGlowAnimation(), 1 !== a.alpha && ((n = nge.tween.add(a).to({
                            alpha: 1
                        }, 500)).onUpdateCallback((function(e, t) {
                            a.scaleX = a.scaleY = 1 + .075 * t
                        })), n.onComplete.add((function() {
                            a.alpha = 1, a.scaleX = a.scaleY = 1.075
                        })), n.start())
                    }
                }, this.showSymbols = function() {
                    return e._reels.forEach((function(e) {
                        return e.showSymbols()
                    }))
                }, this.runHideGlowAnimation = function() {
                    var t = e._resetHoldedSymbols,
                        n = nge.tween.add({}).to({}, 500);
                    n.onUpdateCallback((function(t, n) {
                        e._holdedSymbols.forEach((function(e) {
                            e.forEach((function(e) {
                                0 < e.alpha && (e.alpha = 1 - n), e.scale.set(1.075 - .075 * n)
                            }))
                        }))
                    })), n.onComplete.add((function() {
                        return t(!0)
                    })), n.start()
                }, this.unholdSymbol = function(e) {}
            }))
        },
        1187: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol = nge.App.DjGameBase.Com.SlotMachine.Symbol.extend((function() {
                var e = this,
                    t = null,
                    n = null,
                    a = null,
                    s = null,
                    o = null;
                this.changeTint = function(t, n, a, s, o, i) {
                    e.super.changeTint(t, n, a, s, o, i), "7" === e.getName() && nge.observer.fire("slotMachine.tintSymbol", {
                        endColor: t,
                        endAlpha: n,
                        time: a,
                        startColor: s,
                        startAlpha: o,
                        toDark: i
                    })
                }, this.setSymbolBase = function(n) {
                    e.super.setSymbolBase(n), t || (t = new PIXI.filters.AdjustmentFilter), s || (s = nge.objects.create(new nge.Mlm.Objects.Folder({}), e._texture)), s.scaleX = s.scaleY = .7 * nge.assets.getQualityFactor(), o && o.name !== n.name && (s.visible = !1), o = n
                }, this.animateSymbolLanding = function() {
                    nge.localData.get("freespin.inProgress") || nge.tween.add(e._texture).to({
                        scaleX: 1.2,
                        scaleY: 1.2
                    }, 150, null, !0, 0, 1, !0)
                }, this.startBrightAnimation = function() {
                    var n = nge.tween.add(t).from({
                        brightness: 1.4
                    }, 350);
                    n.onStart.add((function() {
                        e._texture.filters = [t]
                    })), n.onComplete.add((function() {
                        e._texture.filters = []
                    })), n.start()
                }, this.drawStar = function(t) {
                    n && n.destroy(), a && a.destroy(), e._texture.addChild(s), s.position.set(60 * nge.assets.getQualityFactor(), 85 * nge.assets.getQualityFactor()), s.visible = !0, a = nge.objects.create(new nge.Mlm.Objects.Emitter({
                        assetKey: "emmiterStarTrailEmitter",
                        anchorY: .5,
                        anchorX: .5,
                        x: 50,
                        y: 70,
                        particles: ["emmiterStarTrail"]
                    }), s), n = nge.objects.create(new nge.Mlm.Objects.Spine({
                        assetKey: "star_rotate",
                        anchorY: .5,
                        anchorX: .5,
                        class: t
                    }), s), a.emitter.emit = !1, n.setAnimationByMode(0, "star_frieze", nge.spine.FREEZE, 4)
                }
            }))
        },
        1188: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbols = nge.Com.SlotMachine.Symbols.extend((function() {
                this.items = [{
                    name: "0",
                    spine: {
                        animation: "play",
                        winlineTime: 1e3,
                        atlas: "m00_000"
                    },
                    textureUrl: "m00_000.png"
                }, {
                    name: "1",
                    spine: {
                        animation: "play",
                        winlineTime: 1e3,
                        atlas: "m01_000"
                    },
                    textureUrl: "m01_000.png"
                }, {
                    name: "2",
                    textureUrl: "m02_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m02_000"
                    },
                    repeat: 1
                }, {
                    name: "3",
                    textureUrl: "m03_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m03_000"
                    },
                    repeat: 1
                }, {
                    name: "4",
                    textureUrl: "m04_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m04_000"
                    },
                    repeat: 1
                }, {
                    name: "5",
                    textureUrl: "m05_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m05_000"
                    },
                    repeat: 1
                }, {
                    name: "6",
                    textureUrl: "m06_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m06_000"
                    },
                    repeat: 1
                }, {
                    name: "7",
                    textureUrl: "m07_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m07_000"
                    },
                    repeat: 1
                }, {
                    name: "100",
                    textureUrl: "100.png",
                    animationFrames: ["100.png"]
                }, {
                    name: "101",
                    textureUrl: "101.png",
                    animationFrames: ["101.png"]
                }, {
                    name: "102",
                    textureUrl: "102.png",
                    animationFrames: ["102.png"]
                }, {
                    name: "103",
                    textureUrl: "103.png",
                    animationFrames: ["103.png"]
                }, {
                    name: "104",
                    textureUrl: "104.png",
                    animationFrames: ["104.png"]
                }, {
                    name: "105",
                    textureUrl: "105.png",
                    animationFrames: ["105.png"]
                }, {
                    name: "106",
                    textureUrl: "106.png",
                    animationFrames: ["106.png"]
                }, {
                    name: "107",
                    textureUrl: "107.png",
                    animationFrames: ["107.png"]
                }]
            }))
        },
        1189: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "slotMachineIntrigueFrame",
                            y: 516,
                            contents: [{
                                type: mt.objects.SPINE,
                                name: "spinificationFront",
                                assetKey: "spinification"
                            }]
                        }, {
                            type: 1,
                            name: "slotMachineMaskContainer",
                            x: -100,
                            y: -20,
                            width: 1920,
                            height: 1100,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachineSymbolWinContainer",
                                x: 310,
                                y: 75
                            }, {
                                type: mt.objects.GROUP,
                                name: "winlinesContainer",
                                x: 100,
                                y: -10
                            }, {
                                type: mt.objects.GROUP,
                                id: "slotMachineGameContainer",
                                name: "slotMachineGameContainer",
                                x: 310,
                                y: 75,
                                width: 1520,
                                height: 855
                            }]
                        }]
                    }
                }
            }
        },
        1190: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Mobile = {}
        },
        1191: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Mobile.Tpl = function() {
                return {
                    styles: {
                        ".portrait .bgArea": {
                            x: 0,
                            y: -290,
                            alignX: "center",
                            anchorX: .5,
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".album .bgArea": {
                            x: -170,
                            y: -820,
                            anchorX: 0,
                            alignX: "left",
                            scaleX: 1.5,
                            scaleY: 1.5
                        },
                        ".portrait .logo": {
                            isVisible: !0
                        },
                        ".album .logo": {
                            isVisible: !1
                        },
                        ".portrait .slotMachine": {
                            x: 0,
                            y: 140,
                            alignX: "center",
                            sWidth: 1080,
                            sHeight: 1920
                        },
                        ".album .slotMachine": {
                            x: 20,
                            y: -50,
                            alignX: "left",
                            sWidth: 1920,
                            sHeight: 1080
                        },
                        ".portrait .slotMachineMaskContainer": {
                            x: -576,
                            y: 105,
                            scaleX: .6,
                            scaleY: .6,
                            alignX: "left",
                            sWidth: 1080
                        },
                        ".album .slotMachineMaskContainer": {
                            x: -100,
                            y: -20,
                            scaleX: 1,
                            scaleY: 1,
                            alignX: "left"
                        },
                        ".portrait .slotMachineAnimationContainer": {
                            x: 100,
                            y: 60,
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".album .slotMachineAnimationContainer": {
                            x: 190,
                            y: 90,
                            scaleX: .9,
                            scaleY: .9
                        },
                        ".portrait .winlinesContainer": {
                            y: -10,
                            x: -100,
                            scaleX: 1.1,
                            scaleY: 1.1
                        },
                        ".album .winlinesContainer": {
                            y: 10,
                            x: 0,
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".portrait .slotMachineGameContainer": {
                            x: 100,
                            y: 60,
                            scaleX: 1,
                            scaleY: 1,
                            alignX: "left"
                        },
                        ".album .slotMachineGameContainer": {
                            x: 190,
                            y: 90,
                            scaleX: .9,
                            scaleY: .9,
                            alignX: "left"
                        },
                        ".portrait .slotmachineShadowTop": {
                            y: 245
                        },
                        ".album .slotmachineShadowTop": {
                            y: 0
                        },
                        ".portrait .slotmachineShadowBottom": {
                            y: 830
                        },
                        ".album .slotmachineShadowBottom": {
                            y: 890
                        },
                        ".portrait .slotMachineIntrigueFrame": {
                            x: 125,
                            y: 586,
                            scaleX: .6,
                            scaleY: .6
                        },
                        ".album .slotMachineIntrigueFrame": {
                            x: 260,
                            y: 576,
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".portrait .topLight": {
                            scaleX: .6,
                            scaleY: .6
                        },
                        ".album .topLight": {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.IMAGE,
                            class: "topLight",
                            name: "topLight1",
                            assetKey: "topLight1"
                        }, {
                            type: mt.objects.IMAGE,
                            class: "topLight",
                            name: "topLight2",
                            assetKey: "topLight2"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "logo",
                            class: "logo",
                            assetKey: "logo",
                            anchorX: .5,
                            anchorY: .5,
                            x: "50%",
                            y: "57%"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgArea",
                            class: "bgArea",
                            assetKey: "bgArea",
                            alignY: "top"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgAreaFreeSpins",
                            class: "bgArea",
                            assetKey: "bgFsArea",
                            alignY: "top"
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineIntrigueFrame",
                            class: "slotMachineIntrigueFrame",
                            contents: [{
                                type: mt.objects.SPINE,
                                name: "spinificationFront",
                                assetKey: "spinification"
                            }]
                        }, {
                            type: mt.objects.IMAGE,
                            name: "slotmachineShadowTop",
                            class: "slotmachineShadowTop",
                            assetKey: "slotmachineShadow",
                            scaleX: 1920,
                            scaleY: 1.4
                        }, {
                            type: mt.objects.IMAGE,
                            name: "slotmachineShadowBottom",
                            class: "slotmachineShadowBottom",
                            assetKey: "slotmachineShadow",
                            angle: 180,
                            anchorX: 1,
                            anchorY: 1,
                            scaleX: 1920,
                            scaleY: 1.4
                        }, {
                            type: 1,
                            name: "slotMachineWrapperContainer",
                            class: "slotMachine",
                            contents: [{
                                type: 1,
                                name: "slotMachineMaskContainer",
                                class: "slotMachineMaskContainer",
                                width: 1920,
                                height: 1135,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "slotMachineSymbolWinContainer",
                                    class: "slotMachineAnimationContainer"
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "winlinesContainer",
                                    class: "winlinesContainer"
                                }, {
                                    type: mt.objects.GROUP,
                                    id: "slotMachineGameContainer",
                                    name: "slotMachineGameContainer",
                                    class: "slotMachineGameContainer",
                                    width: 1720,
                                    height: 980
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1192: function(e, t) {
            nge.App[nge.appNS].Com.Questline = {}
        },
        1193: function(e, t) {
            nge.App[nge.appNS].Com.Questline.Cfg = Class.extend((function() {
                var e = this;
                this.params = {
                    parentSelector: "^questlineContainer",
                    questlines: [{
                        bonusName: "QuestLineA",
                        x: 0,
                        y: 130,
                        description: "+3 SPINS",
                        scale: .9
                    }, {
                        bonusName: "QuestLineB",
                        x: 0,
                        y: 404,
                        description: "X2 WINS",
                        scale: .9
                    }, {
                        bonusName: "QuestLineC",
                        x: 0,
                        y: 700,
                        description: "+1 SCATTER",
                        scale: .9
                    }]
                }, this.get = function() {
                    return e.params
                }
            }))
        },
        1194: function(e, t) {
            nge.App[nge.appNS].Com.Questline.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = !1,
                    n = null,
                    a = null;
                this.create = function() {
                    e.createDefault(), e._makeLinks(), a.configure(n), t || e._subscribe(), t = !0
                }, this._makeLinks = function() {
                    n = e.getInstance("Cfg").get(), a = e.getInstance("Service")
                }, this._update = function(e) {
                    a.updateQuestline(e)
                }, this._startFlyAnimation = function() {
                    a.startFlyAnimation()
                }, this._reset = function(e) {
                    a.reset(e)
                }, this._startSpinningAnimationHandler = function() {
                    a.spinningAnimationStart()
                }, this._stopSpinningAnimationHandler = function() {
                    a.spinningAnimationStop()
                }, this._subscribe = function() {
                    nge.observer.add("questline.reset", e._reset), nge.observer.add("questline.update", e._update), nge.observer.add("questline.startFlyAnimation", e._startFlyAnimation), nge.observer.add("questline.spinningAnimation.start", e._startSpinningAnimationHandler), nge.observer.add("questline.spinningAnimation.stop", e._stopSpinningAnimationHandler)
                }
            }))
        },
        1195: function(e, t) {
            nge.App[nge.appNS].Com.Questline.Service = Class.extend((function() {
                var e = this,
                    t = null,
                    n = null,
                    a = {},
                    s = null,
                    o = !1,
                    i = {
                        0: "QuestLineA",
                        1: "QuestLineB",
                        2: "QuestLineC"
                    };
                this._reset = function() {
                    for (var e in a) a[e].destroy();
                    a = {}
                }, this.configure = function(t) {
                    n = t, e._extractModel(), e._reset(), e._makeQuestlines(), e._tryRestore()
                }, this._tryRestore = function() {
                    var t = nge.localData.get("slotMachine.lastResponse.lineWinAmounts");
                    t && t.forEach((function(t) {
                        e.updateQuestline({
                            name: t.bonusName,
                            data: t.params
                        }, !0)
                    }))
                }, this._extractModel = function() {
                    var e = nge.findOne(".questlineModel");
                    t = e.getData()._originalModel, e.destroy()
                }, this._makeQuestline = function(s) {
                    var o = e.getInstance("Questline");
                    o.init(t, s, n.parentSelector), a[s.bonusName] = o
                }, this._makeQuestlines = function() {
                    n.questlines.forEach(e._makeQuestline)
                }, this._computeCurrFlyIndex = function() {
                    var e = nge.localData.get("questline.stars");
                    e && Object.keys(e).map((function(e) {
                        return e.split("_")[1]
                    })).sort()
                }, this.updateQuestline = function(t, n) {
                    var s = t.name;
                    t = t.data, (n = void 0 !== n && n) || e._computeCurrFlyIndex();
                    var o = nge.localData.get("questline." + s) || {};
                    if (n) {
                        o.updated = "true" === t.picked;
                        var i = "true" === t.picked
                    }
                    return n = a[s].update(t, n), i = Object.assign({}, o, t, {
                        starsToThrowAmount: n,
                        animated: i || o.animated
                    }), nge.localData.set("questline." + s, i), n
                }, this.reset = function(e) {
                    for (var t in a) a[t].reset(e)
                }, this.startFlyAnimation = function() {
                    var e = nge.localData.get("questline.stars");
                    if (e) {
                        e = Object.keys(e);
                        var t, n = [],
                            s = {};
                        for (t in i) {
                            s.$jscomp$loop$prop$key$8 = t;
                            var o = nge.localData.get("questline." + i[s.$jscomp$loop$prop$key$8] + ".starsToThrowAmount");
                            0 !== o && (o = e.filter(function(e) {
                                return function(t) {
                                    return -1 !== t.indexOf("_" + e.$jscomp$loop$prop$key$8)
                                }
                            }(s)).slice(0, o), n = [].concat($jscomp.arrayFromIterable(n), $jscomp.arrayFromIterable(o))), s = {
                                $jscomp$loop$prop$key$8: s.$jscomp$loop$prop$key$8
                            }
                        }
                        n.forEach((function(e) {
                            var t = $jscomp.makeIterator(e.split("_")),
                                n = t.next().value;
                            t = t.next().value, e = nge.findOne("." + e), t = a[i[t]], e && e.parent && t.fly(e, 350 * n, (function() {}))
                        }))
                    }
                }, this._getActiveQuestlines = function() {
                    var e, t = [];
                    for (e in a) {
                        var n = a[e];
                        n.isActive() && t.push(n)
                    }
                    return t
                }, this._stopBlinkAnimation = function() {
                    nge.rafClearTimeout(s), o = !1
                }, this.spinningAnimationStart = function() {
                    e._stopBlinkAnimation(), o = !0;
                    var t = e._getActiveQuestlines(),
                        n = 0,
                        a = t.length,
                        i = function() {
                            ++n < a ? s = nge.rafSetTimeout((function() {
                                o && t[n] && t[n].blink(i)
                            }), 450 / a) : (n = -1, i())
                        };
                    t[n] && t[n].blink(i)
                }, this.spinningAnimationStop = function() {
                    return e._stopBlinkAnimation()
                }
            }))
        },
        1196: function(e, t) {
            nge.App[nge.appNS].Com.Questline.Questline = Class.extend((function() {
                var e = this,
                    t = null,
                    n = null,
                    a = 0,
                    s = null,
                    o = null,
                    i = {},
                    r = null,
                    l = null,
                    p = null,
                    c = !1,
                    m = {
                        1: {
                            d: {
                                x: 0,
                                y: 0
                            },
                            m: {
                                x: 12.5,
                                y: 2.5
                            }
                        },
                        .75: {
                            d: {
                                x: 15,
                                y: 21.5
                            },
                            m: {
                                x: 24.5,
                                y: 21.5
                            }
                        },
                        .5: {
                            d: {
                                x: 30,
                                y: 42.5
                            },
                            m: {
                                x: 38,
                                y: 41
                            }
                        }
                    };
                this.init = function(e, s, i) {
                    p = s, c = !0, a = 0;
                    var r = s.description,
                        l = s.scale;
                    t = nge.objects.create(new nge.Mlm.Objects.Folder({
                        x: s.x,
                        y: s.y,
                        class: s.bonusName,
                        scaleX: l,
                        scaleY: l
                    }), nge.findOne(i)), e = nge.objects.create(e, t), nge.findOne(".questlineDescription", e).attr("text", r), (n = nge.findOne(".questlineStar", e)).setAnimationByMode(1, "stroke", nge.spine.LOOP), o = o = new PIXI.filters.AdjustmentFilter
                }, this._stopBlinkTween = function() {
                    r && r.isRunning && r.stop(), r = null, l && l.isRunning && l.stop(), l = null
                }, this._runBlinkTween = function(n, a, s) {
                    a = void 0 === a ? 0 : a, e._stopBlinkTween();
                    var i = p.scale,
                        c = 1.2 * i,
                        m = 150 * i,
                        u = t.scale.x / c * m;
                    r = nge.tween.add(t.scale).to({
                        x: c,
                        y: c
                    }, u, null, !1, a).to({
                        x: i,
                        y: i
                    }, m), (l = nge.tween.add(o).to({
                        brightness: 1.5
                    }, u, null, !1, a).to({
                        brightness: 1
                    }, m)).onStart.add((function() {
                        t.filters = [o]
                    })), l.onComplete.add((function() {
                        t.filters = []
                    })), r.onComplete.add((function() {
                        e._stopBlinkTween(), 0 < --n ? e._runBlinkTween(n, a, s) : s && s()
                    })), l.start(), r.start()
                }, this._stopTween = function(e) {
                    i[e] && i[e].stop()
                }, this.update = function(e) {
                    var t = s ? s.starsLeft - e.starsLeft : "false" === e.picked ? e.starsTotal - e.starsLeft : 0;
                    return s = e, e = +nge.localData.get("questline.flyingStarsAmount") || 0, nge.localData.set("questline.flyingStarsAmount", e + t), t
                }, this._getAbsolutePosition = function(e) {
                    for (var t = 0, n = 0; e;) t += e.x, n += e.y, e = e.parent;
                    return {
                        x: t,
                        y: n
                    }
                }, this._runBigStarAddAnimation = function(e) {
                    0 < e && 5 >= e && (n.stop(), n.setAnimationByMode(0, "win" + e, nge.spine.FREEZE))
                }, this.reset = function(n) {
                    n ? e._activate() : (n = (void 0 === (n = s).starsTotal ? 0 : n.starsTotal) - (void 0 === n.starsLeft ? 0 : n.starsLeft), e._runBigStarAddAnimation(n), a = n, t.alpha = 1, s && "true" === s.picked && e._deactivate())
                }, this._runSpineAnimation = function(e) {
                    e.setAnimationByMode(0, "play", nge.spine.LOOP)
                }, this._runScaleAnimation = function(e) {
                    var t = 1.1 * p.scale;
                    nge.tween.add(e.scale).to({
                        x: t,
                        y: t
                    }, 150, null, !1, 0, 1, !0).start()
                }, this.fly = function(n, o) {
                    nge.localData.set("questline.inProgress", !0);
                    var i = nge.findOne(".questlineStar", t),
                        r = nge.findOne("^starsContainer"),
                        l = nge.Lib.Helper.mobileAndTabletCheck(),
                        p = l ? "m" : "d";
                    p = m[nge.assets.getQualityFactor()][p], r.position.set(p.x, p.y);
                    var c = e._getAbsolutePosition(n);
                    l && (r.scaleX = r.scaleY = .9), n.parent.scaleX = n.parent.scaleY = .7;
                    var u = e._getAbsolutePosition(i);
                    o = nge.tween.add({}).to({}, 1200, null, !1, o), r.addChild(n.parent), n.parent.position.set(c.x, c.y), o.onStart.add((function() {
                        e._runSpineAnimation(n), n.parent.children[0].emitter.emit = !0, nge.observer.fire("questline.flyAnimation.started")
                    })), o.onUpdateCallback((function(e, t) {
                        e = 110 * Math.sin(Math.PI * t);
                        var a = (u.y - c.y) * t;
                        n.parent.x = (u.x - c.x) * t + e + c.x, n.parent.y = a - e + c.y
                    })), o.onComplete.add((function() {
                        n.parent.visible = !1, n.parent.children[0].emitter.emit = !1, nge.observer.fire("questline.flyAnimation.finished", n.getData().class), 5 >= ++a && e._runBigStarAddAnimation(a);
                        var o = nge.localData.get("questline.flyingStarsAmount");
                        nge.localData.set("questline.flyingStarsAmount", --o), 0 === o && 5 !== a && nge.observer.fire("questline.animation.finished"), 5 == +a && s && "true" === s.picked && (e._runBlinkTween(3, 50, e._runCallback(t.getData().class)), nge.observer.fire("sound.questline.done"))
                    })), o.start()
                }, this._runCallback = function(t) {
                    return function() {
                        if ("QuestLineA" === t && nge.localData.get("questline.QuestLineA.freeSpins") && nge.observer.fire("questline.animation.finished", t), "QuestLineB" === t) {
                            var n = nge.localData.get("questline.QuestLineB.multiplier");
                            n && (nge.localData.set("questline.multiplier", n), nge.localData.set("questline.QuestLineB.multiplier", null), nge.observer.fire("questline.animation.finished", t))
                        }
                        "QuestLineC" === t && nge.localData.get("questline.QuestLineC.wonSymbols") && nge.observer.fire("questline.animation.finished", t), e._deactivate()
                    }
                }, this._deactivate = function() {
                    t.alpha = .75, c = !1
                }, this._activate = function() {
                    t.alpha = 1, c = !0, n.setAnimationByMode(0, "stroke", nge.spine.HIDE), n.setAnimationByMode(1, "stroke", nge.spine.LOOP), a = 0, s = null
                }, this.blink = function(e) {
                    o.brightness = 1.4;
                    var t = nge.tween.add(o).to({
                        brightness: 1
                    }, 250, null, !1, 5);
                    t.onStart.add((function() {
                        o.brightness = 1, e && e()
                    })), t.onComplete.add((function() {})), t.start()
                }, this.isActive = function() {
                    return c
                }, this.destroy = function() {
                    return t && t.destroy()
                }
            }))
        },
        1197: function(e, t) {
            nge.App[nge.appNS].Com.Questline.Tpl = function() {
                return {
                    styles: {
                        ".questline": {
                            style: {
                                stroke: 3288905,
                                strokeThickness: 6,
                                fill: 16696173,
                                align: "center"
                            }
                        },
                        ".questlineDescription": {
                            style: {
                                font: "28pt futuraptheavy",
                                lineHeight: 28
                            }
                        }
                    },
                    assets: {
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "questlineBg",
                            fullPath: nge.appPath + "img/questline/text_bg.png"
                        }]
                    },
                    objects: {
                        contents: [{
                            type: mt.objects.GROUP,
                            class: "questlineModel",
                            contents: [{
                                type: mt.objects.TEXT,
                                class: "questline questlineDescription",
                                anchorX: .5,
                                y: 100
                            }, {
                                type: mt.objects.SPINE,
                                class: "questlineStar",
                                assetKey: "star_animation",
                                anchorX: .5,
                                anchorY: .5,
                                y: -10
                            }]
                        }]
                    }
                }
            }
        },
        1198: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1199: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Cfg = nge.App.ClassicGameBase.Com.Winlines.Cfg.extend((function() {
                this.linesType = "chunk_lines", this.linesContainerName = "winlinesContainer", this.animationOneByOneDuration = this.animationAllDuration = 1e3, this.subcycles = 1, this.symbolSpineModeAll = nge.spine.LOOP, this.symbolSpineModeBonus = this.symbolSpineModeByOne = nge.spine.FREEZE, this.lineElements = {
                    starter: {
                        name: "winlines",
                        objs: null,
                        x: [265],
                        y: [236, 533, 805],
                        scaleX: .47,
                        scaleY: 1,
                        angle: 0
                    },
                    line: {
                        name: "winlines",
                        objs: null,
                        x: [500, 808, 1116, 1424],
                        y: [236, 533, 805],
                        scaleX: .9,
                        scaleY: 1,
                        angle: 0
                    },
                    slash_down: {
                        name: "winlines",
                        objs: null,
                        x: [500, 808, 1116, 1424],
                        y: [379, 664],
                        scaleX: 1.2,
                        scaleY: 1,
                        angle: 43
                    },
                    slash_down_large: {
                        name: "winlines",
                        objs: null,
                        x: [500, 808, 1116, 1424],
                        y: [522],
                        scaleX: .94,
                        scaleY: 1,
                        angle: 62,
                        large: !0
                    },
                    slash_up: {
                        name: "winlines",
                        objs: null,
                        x: [500, 808, 1116, 1424],
                        y: [379, 664],
                        scaleX: 1.2,
                        scaleY: 1,
                        angle: 317
                    },
                    slash_up_large: {
                        name: "winlines",
                        objs: null,
                        x: [500, 808, 1116, 1424],
                        y: [522],
                        scaleX: .94,
                        scaleY: 1,
                        angle: 298,
                        large: !0
                    },
                    ender: {
                        name: "winlines",
                        objs: null,
                        x: [1660],
                        y: [236, 533, 805],
                        scaleX: .47,
                        scaleY: 1,
                        angle: 0
                    }
                }
            }))
        },
        1200: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.ChunkLinesGenerator = nge.Com.Base.extend((function() {
                var e = this;
                this.elementReels = this.winlines = this.container = this.cfg = null;
                var t;
                this.show = function(e) {
                    t.setAnimationByName(0, "w" + e)
                }, this.hide = function() {
                    e.hideAll()
                }, this.showAll = function(t) {
                    if (t) {
                        var n = function() {
                            for (var t = Array(e.smCfg.mw), n = 0; n < t.length; n++) {
                                t[n] = Array(e.smCfg.mh);
                                for (var a = 0; a < t[n].length; a++) t[n][a] = {}
                            }
                            return t
                        }();
                        t.map((function(e) {
                                return e.selectedLine
                            })).map((function(t) {
                                return e.winlines[t]
                            })).forEach((function(e) {
                                ! function(e, t) {
                                    e && e.forEach((function(n, a) {
                                        if (0 !== a && a !== e.length - 1 || (t[a][n][0 === a ? "starter" : "ender"] = !0), a + 1 !== e.length) {
                                            var s = e[a + 1];
                                            n === s ? t[a][n].line = !0 : -1 > s - n ? t[a][n - 1].slash_up_large = !0 : 1 < s - n ? t[a][n].slash_down_large = !0 : n < s ? t[a][n].slash_down = !0 : n > s && (t[a][n - 1].slash_up = !0)
                                        }
                                    }))
                                }(e, n)
                            })),
                            function(t) {
                                var n = function(e, t, n) {
                                        e.visible = !0, e.reel = t, e.row = n
                                    },
                                    a = e.cfg.lineElements;
                                t.forEach((function(e, t) {
                                    e.forEach((function(e, s) {
                                        e.starter && n(a.starter.objs[0][s], t, s), e.ender && n(a.ender.objs[0][s], t, s), e.line && n(a.line.objs[t][s], t, s), e.slash_up && e.slash_down ? (n(a.slash_down.objs[t][s], t, s), n(a.slash_up.objs[t][s], t, s)) : e.slash_up ? n(a.slash_up.objs[t][s], t, s) : e.slash_down && n(a.slash_down.objs[t][s], t, s), e.slash_up_large && n(a.slash_up_large.objs[t][0], t, 0), e.slash_down_large && n(a.slash_down_large.objs[t][0], t, 0)
                                    }))
                                })), e.animateWave()
                            }(n)
                    }
                }, this.hideAll = function() {
                    t.stop();
                    var n, a = e.cfg.lineElements;
                    for (n in a) a.hasOwnProperty(n) && a[n].objs.forEach((function(e) {
                        e.forEach((function(e) {
                            e.stop(), delete e.reel, delete e.row
                        }))
                    }))
                }, this.animateWave = function() {
                    e.elementReels.forEach((function(e, t) {
                        e.forEach((function(e) {
                            e.visible && e.setAnimationByName(0, "starter")
                        }))
                    }))
                }, this.createChunks = function(t, n) {
                    n.objs = [];
                    for (var a = 0; a < n.x.length; a++) {
                        n.objs[a] = [];
                        for (var s = 0; s < n.y.length; s++) {
                            var o = nge.objects.create(nge.Mlm.Objects.Spine({
                                assetKey: n.large ? "winlineLarge" : "winline",
                                isVisible: !1,
                                anchorX: .5,
                                anchorY: .5,
                                x: n.x[a],
                                y: n.y[s],
                                scaleX: n.scaleX,
                                scaleY: n.scaleY,
                                angle: n.angle
                            }), e.container);
                            o.cfg = {
                                key: t,
                                data: n
                            }, n.objs[a].push(o)
                        }
                    }
                }, this.init = function(n, a) {
                    for (var s in e.cfg = a, e.container = n, e.winlines = nge.localData.get("winlines"), e.smCfg = nge.App.getInstance("Com.SlotMachine.Cfg").get(), e.cfg.lineElements) e.createChunks(s, e.cfg.lineElements[s]);
                    for (e.elementReels = [], e.elementReels.push(e.cfg.lineElements.starter.objs[0]), n = 0; n < e.smCfg.mw - 1; n++) a = (a = (a = (a = (a = (a = []).concat(e.cfg.lineElements.line.objs[n])).concat(e.cfg.lineElements.slash_up.objs[n])).concat(e.cfg.lineElements.slash_up_large.objs[n])).concat(e.cfg.lineElements.slash_down.objs[n])).concat(e.cfg.lineElements.slash_down_large.objs[n]), e.elementReels.push(a);
                    e.elementReels.push(e.cfg.lineElements.ender.objs[0]), t = nge.findOne("^winlinesAll")
                }, this.reset = function() {}, this.setNewQuery = function(e) {}, this.showFrames = function(e) {}, this.sendLineToBack = function(e) {}
            }))
        },
        1201: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Tpl = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.SPINE,
                            key: "winline",
                            spine: e + "spine/winlines/winlines.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "winlineLarge",
                            spine: e + "spine/winlines/winlinesLarge.json"
                        }, {
                            type: mt.assets.SPINE,
                            key: "winlineAll",
                            spine: e + "spine/winlines/winlines_all.json"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.SPINE,
                            name: "winlinesAll",
                            assetKey: "winlineAll",
                            anchorX: .5,
                            anchorY: .5,
                            x: 960,
                            y: 570,
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1202: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1203: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Cfg = nge.App.DjGameBase.Com.WinlinesText.Cfg.extend((function() {
                this.params.winlinesTextContainerName = "winlinesTextContainer"
            }))
        },
        1204: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Controller = nge.App.DjGameBase.Com.WinlinesText.Controller.extend((function() {
                var e = this;
                this.onLineHighlightStart = function(t) {
                    if (+t.amount && "big" !== nge.localData.get("win.winType")) {
                        nge.observer.fire("win.brain.lineWin.animation.start", t);
                        var n = e.middleRow,
                            a = 2;
                        if (t.wonSymbols) {
                            var s = t.wonSymbols.filter((function(t) {
                                return t[0] === e.middleReel
                            }));
                            2 === t.wonSymbols.length ? (a = +t.wonSymbols[1][0], n = +t.wonSymbols[1][1]) : s && s[1] && "1" === s[1][1] ? n = +s[1][1] : s && s[0] && (n = +s[0][1])
                        }
                        if (e.container.visible = !1, 0 !== (t = nge.localData.get("settings.settingsDisplayValuesInCoins") ? t.amount : e.toCoins(t.amount)) && !isNaN(t) && !nge.localData.get("regularWinInProgress")) {
                            for (e.container.visible = !0, s = 0; s < e.lineWins.length; s++) e.lineWins[s].visible = s === n, e.lineWins[s].alpha = 1, e.lineWins[s].visible && (e.lineWins[s].x = 310 * (a - 2));
                            (n = e.lineWins[n]).text = t, e.createTextTweenAnimation(n)
                        }
                    }
                }, this.createTextTweenAnimation = function(e) {
                    e.alpha = 1, e.scale.x = .6, e.scale.y = .6, this.textTween = nge.tween.add(e.scale).to({
                        x: 1,
                        y: 1
                    }, 390), this.textTween.onComplete.addOnce((function() {
                        this.textTween = nge.tween.add(e.scale).to({
                            x: 0,
                            y: 0
                        }, 390, nge.Lib.Tween.Easing.Linear.None, !0, 200), this.textTween.onUpdateCallback((function(t, n, a) {
                            e.alpha = 1 - (a.percent - .2) / (.6 - .2)
                        }))
                    }), this), this.textTween.start()
                }
            }))
        },
        1205: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    styles: {},
                    objects: {
                        contents: [{
                            type: 1,
                            name: "lineWinContainer",
                            x: 970,
                            y: 404,
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "lineWinAmount0",
                                isVisible: !1,
                                x: 0,
                                y: -200,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 90
                            }, {
                                type: 7,
                                name: "lineWinAmount1",
                                isVisible: !1,
                                x: 0,
                                y: 81,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 90
                            }, {
                                type: 7,
                                name: "lineWinAmount2",
                                isVisible: !1,
                                x: 0,
                                y: 365,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 90
                            }]
                        }]
                    }
                }
            }
        },
        1206: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Mobile = {}
        },
        1207: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Mobile.Tpl = function() {
                return {
                    styles: {
                        ".portrait .lineWinContainer": {
                            y: 380,
                            x: "50%",
                            scaleX: .6,
                            scaleY: .6
                        },
                        ".album .lineWinContainer": {
                            x: 880,
                            y: 154,
                            scaleX: .9,
                            scaleY: .9
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "lineWinContainer",
                            class: "lineWinContainer",
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "lineWinAmount0",
                                isVisible: !1,
                                x: 0,
                                y: 0,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 90
                            }, {
                                type: 7,
                                name: "lineWinAmount1",
                                isVisible: !1,
                                x: 0,
                                y: 325,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 90
                            }, {
                                type: 7,
                                name: "lineWinAmount2",
                                isVisible: !1,
                                x: 0,
                                y: 650,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "counter_font",
                                size: 90
                            }]
                        }]
                    }
                }
            }
        },
        1208: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1209: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1210: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton",
                            fullPath: e + "playarea/demoPlayButton.png",
                            frameWidth: 288
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "playarea/frameIntroScreen.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "introScreenContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "introScreenButtonContainer",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    name: "demoPlayButtonText",
                                    text: nge.i18n.get("PLAY_BUTTON"),
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 170,
                                    x: 960,
                                    y: 936,
                                    style: {
                                        font: "40pt futuraptheavy",
                                        fill: 666677,
                                        align: "center",
                                        stroke: 14329662,
                                        strokeThickness: 4
                                    }
                                }, {
                                    type: mt.objects.BUTTON,
                                    assetKey: "demoPlayButton",
                                    name: "demoPlayButton",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 936,
                                    pixelPerfectOver: !1,
                                    pixelPerfectClick: !1,
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "demoPlay");}'
                                }]
                            }, {
                                type: mt.objects.TEXT,
                                name: "introScreenTextCenter",
                                text: nge.i18n.get("INTRO_TEXT"),
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 770,
                                class: "coloredText",
                                style: {
                                    font: "27pt futuraptheavy",
                                    fill: 16777215,
                                    align: "center",
                                    stroke: 1311237,
                                    strokeThickness: 1,
                                    shadowColor: 1311237,
                                    shadowBlur: 6,
                                    shadowOffsetY: 2,
                                    lineHeight: 46
                                }
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenArrow",
                                assetKey: "introScreenArrow",
                                x: 768,
                                y: 1025
                            }, {
                                type: mt.objects.IMAGE,
                                name: "frameIntroScreen",
                                assetKey: "frameIntroScreen",
                                x: 767,
                                y: 1021
                            }, {
                                type: mt.objects.TEXT,
                                name: "introScreenTextBottom",
                                text: "show_next_time",
                                style: {
                                    font: "28pt futuraptheavy",
                                    fill: 16777215
                                },
                                anchorY: .5,
                                maxWidth: 340,
                                x: 808,
                                y: 1035
                            }, {
                                name: "autoStart",
                                type: mt.objects.BUTTON,
                                assetKey: "areaEmpty",
                                class: "autoStartCheckBox",
                                alpha: 0,
                                pixelPerfectClick: 0,
                                pixelPerfectOver: 0,
                                anchorX: .5,
                                anchorY: .5,
                                width: 400,
                                height: 36,
                                scaleX: 420,
                                scaleY: 34,
                                x: 966,
                                y: 1032,
                                action: 'function(){nge.observer.fire("buttons.pressCommand", "autoStartCheckBox");}'
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenBg",
                                assetKey: "introScreenBg"
                            }]
                        }]
                    }
                }
            }
        },
        1211: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Logo = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1212: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.PlayStyles = function() {
                return {}
            }
        },
        1213: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Ui(),
                    t = e.objects.contents[0];
                return delete t.anchorX, delete t.anchorY, e.styles[".titleButtonStyle"].style.font = "24pt futuraptheavy", e.styles[".titleButtonStyle"].style.fill = 1980215, e.styles[".titleButtonStyle"].style.stroke = 14329662, e.styles[".titleButtonStyle"].style.strokeThickness = 4, e.styles[".titleButtonStyle"].style.lineHeight = 33, ["counterManualFreeSpinsNumberA", "counterManualFreeSpinsNumberB"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y + 8)
                })), ["betPlusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 1, t.y = (+t.y || 0) - 1)
                })), ["coinPlusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 1)
                })), ["coinMinusButton", "betMinusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 1)
                })), ["autoButtonText", "turboModeUIButtonText"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 5)
                })), e
            }
        },
        1214: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "36pt futuraptmedium",
                        fill: 16696173,
                        anchorX: .5,
                        anchorY: .5,
                        align: "center"
                    },
                    n = {
                        font: "36pt futuraptmedium",
                        fill: 16777215
                    },
                    a = {
                        font: "36pt futuraptmedium",
                        fill: 15325439,
                        anchorX: 1
                    },
                    s = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "infoNextButton",
                            fullPath: s + "playarea/infoNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoPlate",
                            fullPath: s + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg1_asset",
                            fullPath: s + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image0",
                            fullPath: s + "playarea/page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image1",
                            fullPath: s + "playarea/page0image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image0",
                            fullPath: s + "playarea/page1image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image1",
                            fullPath: s + "playarea/page1image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image2",
                            fullPath: s + "playarea/page1image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image3",
                            fullPath: s + "playarea/page1image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image4",
                            fullPath: s + "playarea/page1image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image5",
                            fullPath: s + "playarea/page1image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image1",
                            fullPath: s + "playarea/page2image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image2",
                            fullPath: s + "playarea/page2image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image3",
                            fullPath: s + "playarea/page2image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line1",
                            fullPath: s + "playarea/line1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line2",
                            fullPath: s + "playarea/line2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line3",
                            fullPath: s + "playarea/line3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line4",
                            fullPath: s + "playarea/line4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line5",
                            fullPath: s + "playarea/line5.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "info_container",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "pagesInfo_container",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "page0_container",
                                    contents: [{
                                        name: "paytableNameText0",
                                        type: mt.objects.TEXT,
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0Text1",
                                        text: nge.i18n.get("page0Text1"),
                                        x: 555,
                                        y: 190,
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        anchorX: .5,
                                        anchorY: .5,
                                        align: "center"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0Text2",
                                        text: nge.i18n.get("page0Text2"),
                                        x: 1328,
                                        y: 190,
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        anchorX: .5,
                                        anchorY: .5,
                                        align: "center"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0Text3",
                                        text: nge.i18n.get("page0Text3"),
                                        x: 960,
                                        y: 820,
                                        class: "coloredText",
                                        style: {
                                            font: "20pt futuraptheavy",
                                            fill: 16777215,
                                            anchorX: .5,
                                            anchorY: .5,
                                            align: "center"
                                        },
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image0",
                                        assetKey: "page0image0",
                                        x: 180,
                                        y: 343
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image1",
                                        assetKey: "page0image1",
                                        x: 832,
                                        y: 264
                                    }, {
                                        name: "page0image0Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        x: 507,
                                        y: 375,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 16696173
                                        },
                                        anchorX: .5,
                                        align: "center"
                                    }, {
                                        name: "page0image0Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 505,
                                        y: 458,
                                        anchorX: .5
                                    }, {
                                        name: "page0image0Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 505,
                                        y: 518,
                                        anchorX: .5
                                    }, {
                                        name: "page0image0Number5",
                                        type: mt.objects.TEXT,
                                        class: "asps0-5",
                                        x: 553,
                                        y: 375,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 8827375
                                        }
                                    }, {
                                        name: "page0image0Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps0-4",
                                        style: n,
                                        x: 555,
                                        y: 458
                                    }, {
                                        name: "page0image0Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps0-3",
                                        style: n,
                                        x: 555,
                                        y: 518
                                    }, {
                                        name: "page0image1Text15",
                                        type: mt.objects.TEXT,
                                        text: 15,
                                        x: 1270,
                                        y: 256,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 16696173
                                        },
                                        anchorX: .5,
                                        align: "center"
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 14,
                                        x: 1270,
                                        y: 338,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 13,
                                        x: 1270,
                                        y: 398,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 12,
                                        x: 1270,
                                        y: 458,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 11,
                                        x: 1270,
                                        y: 518,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 10,
                                        x: 1270,
                                        y: 578,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 9,
                                        x: 1270,
                                        y: 638,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 8,
                                        x: 1565,
                                        y: 338,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 7,
                                        x: 1565,
                                        y: 398,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 6,
                                        x: 1565,
                                        y: 458,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        x: 1565,
                                        y: 518,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        x: 1565,
                                        y: 578,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        x: 1565,
                                        y: 638,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Number15",
                                        type: mt.objects.TEXT,
                                        class: "asps7-15",
                                        x: 1335,
                                        y: 256,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 8827375
                                        }
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-14",
                                        style: n,
                                        x: 1335,
                                        y: 338
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-13",
                                        style: n,
                                        x: 1335,
                                        y: 398
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-12",
                                        style: n,
                                        x: 1335,
                                        y: 458
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-11",
                                        style: n,
                                        x: 1335,
                                        y: 518
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-10",
                                        style: n,
                                        x: 1335,
                                        y: 578
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-9",
                                        style: n,
                                        x: 1335,
                                        y: 638
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-8",
                                        style: n,
                                        x: 1615,
                                        y: 338
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-7",
                                        style: n,
                                        x: 1615,
                                        y: 398
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-6",
                                        style: n,
                                        x: 1615,
                                        y: 458
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-5",
                                        style: n,
                                        x: 1615,
                                        y: 518
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-4",
                                        style: n,
                                        x: 1615,
                                        y: 578
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-3",
                                        style: n,
                                        x: 1615,
                                        y: 638
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1_container",
                                    contents: [{
                                        name: "paytableNameText1",
                                        type: mt.objects.TEXT,
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image0",
                                        assetKey: "page1image0",
                                        x: 236,
                                        y: 244
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image1",
                                        assetKey: "page1image1",
                                        x: 746,
                                        y: 237
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image2",
                                        assetKey: "page1image2",
                                        x: 1247,
                                        y: 253
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image3",
                                        assetKey: "page1image3",
                                        x: 249,
                                        y: 615
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image4",
                                        assetKey: "page1image4",
                                        x: 752,
                                        y: 629
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image5",
                                        assetKey: "page1image5",
                                        x: 1255,
                                        y: 609
                                    }, {
                                        name: "page1image0Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 466,
                                        y: 284
                                    }, {
                                        name: "page1image0Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 466,
                                        y: 339
                                    }, {
                                        name: "page1image0Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 466,
                                        y: 394
                                    }, {
                                        name: "page1image0Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps1-5",
                                        style: n,
                                        x: 522,
                                        y: 284
                                    }, {
                                        name: "page1image0Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps1-4",
                                        style: n,
                                        x: 522,
                                        y: 339
                                    }, {
                                        name: "page1image0Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps1-3",
                                        style: n,
                                        x: 522,
                                        y: 394
                                    }, {
                                        name: "page1image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 973,
                                        y: 284
                                    }, {
                                        name: "page1image1Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 973,
                                        y: 339
                                    }, {
                                        name: "page1image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 973,
                                        y: 394
                                    }, {
                                        name: "page1image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps2-5",
                                        style: n,
                                        x: 1029,
                                        y: 284
                                    }, {
                                        name: "page1image1Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps2-4",
                                        style: n,
                                        x: 1029,
                                        y: 339
                                    }, {
                                        name: "page1image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps2-3",
                                        style: n,
                                        x: 1029,
                                        y: 394
                                    }, {
                                        name: "page1image2Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1497,
                                        y: 284
                                    }, {
                                        name: "page1image2Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1497,
                                        y: 339
                                    }, {
                                        name: "page1image2Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1497,
                                        y: 394
                                    }, {
                                        name: "page1image2Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps3-5",
                                        style: n,
                                        x: 1553,
                                        y: 284
                                    }, {
                                        name: "page1image2Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps3-4",
                                        style: n,
                                        x: 1553,
                                        y: 339
                                    }, {
                                        name: "page1image2Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps3-3",
                                        style: n,
                                        x: 1553,
                                        y: 394
                                    }, {
                                        name: "page1image3Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 466,
                                        y: 646
                                    }, {
                                        name: "page1image3Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 466,
                                        y: 701
                                    }, {
                                        name: "page1image3Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 466,
                                        y: 756
                                    }, {
                                        name: "page1image3Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps4-5",
                                        style: n,
                                        x: 522,
                                        y: 646
                                    }, {
                                        name: "page1image3Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps4-4",
                                        style: n,
                                        x: 522,
                                        y: 701
                                    }, {
                                        name: "page1image3Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps4-3",
                                        style: n,
                                        x: 522,
                                        y: 756
                                    }, {
                                        name: "page1image4Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 973,
                                        y: 646
                                    }, {
                                        name: "page1image4Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 973,
                                        y: 701
                                    }, {
                                        name: "page1image4Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 973,
                                        y: 756
                                    }, {
                                        name: "page1image4Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps5-5",
                                        style: n,
                                        x: 1029,
                                        y: 646
                                    }, {
                                        name: "page1image4Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps5-4",
                                        style: n,
                                        x: 1029,
                                        y: 701
                                    }, {
                                        name: "page1image4Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps5-3",
                                        style: n,
                                        x: 1029,
                                        y: 756
                                    }, {
                                        name: "page1image5Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1497,
                                        y: 646
                                    }, {
                                        name: "page1image5Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1497,
                                        y: 701
                                    }, {
                                        name: "page1image5Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1497,
                                        y: 756
                                    }, {
                                        name: "page1image5Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps6-5",
                                        style: n,
                                        x: 1553,
                                        y: 646
                                    }, {
                                        name: "page1image5Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps6-4",
                                        style: n,
                                        x: 1553,
                                        y: 701
                                    }, {
                                        name: "page1image5Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps6-3",
                                        style: n,
                                        x: 1553,
                                        y: 756
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2_container",
                                    contents: [{
                                        name: "paytableNameText2",
                                        type: mt.objects.TEXT,
                                        text: "STAR_BOOST_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText1",
                                        text: nge.i18n.get("pageStarBoostText1"),
                                        x: 960,
                                        y: 675,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "26pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText2",
                                        text: nge.i18n.get("pageStarBoostText2"),
                                        x: 682,
                                        y: 700,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "26pt futuraptheavy",
                                            fill: 16777215
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText2RU",
                                        text: nge.i18n.get("pageStarBoostText2RU"),
                                        x: 590,
                                        y: 700,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "26pt futuraptheavy",
                                            fill: 16777215
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText3",
                                        text: nge.i18n.get("pageStarBoostText3"),
                                        x: 694,
                                        y: 390,
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "28pt futuraptheavy",
                                            fill: 15327167,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText4",
                                        text: nge.i18n.get("pageStarBoostText4"),
                                        x: 960,
                                        y: 390,
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "28pt futuraptheavy",
                                            fill: 15327167,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText5",
                                        text: nge.i18n.get("pageStarBoostText5"),
                                        x: 1226,
                                        y: 390,
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "28pt futuraptheavy",
                                            fill: 15327167,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image1",
                                        assetKey: "page2image1",
                                        x: 591,
                                        y: 166
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image2",
                                        assetKey: "page2image2",
                                        x: 857,
                                        y: 166
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image3",
                                        assetKey: "page2image3",
                                        x: 1123,
                                        y: 166
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3_container",
                                    contents: [{
                                        name: "paytableNameText3",
                                        type: mt.objects.TEXT,
                                        text: "RULES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page2Text1",
                                        text: nge.i18n.get("page2Text1"),
                                        x: 960,
                                        y: 515,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4_container",
                                    contents: [{
                                        name: "paytableNameText4",
                                        type: mt.objects.TEXT,
                                        text: "RULES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page3Text1",
                                        text: nge.i18n.get("page3Text1"),
                                        x: 960,
                                        y: 515,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page5_container",
                                    contents: [{
                                        name: "paytableNameText4",
                                        type: mt.objects.TEXT,
                                        text: "LINES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line1",
                                        assetKey: "line1",
                                        x: 369,
                                        y: 260
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line2",
                                        assetKey: "line2",
                                        x: 822,
                                        y: 260
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line3",
                                        assetKey: "line3",
                                        x: 1284,
                                        y: 260
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line4",
                                        assetKey: "line4",
                                        x: 581,
                                        y: 631
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line5",
                                        assetKey: "line5",
                                        x: 1082,
                                        y: 631
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText1",
                                        text: "1",
                                        style: a,
                                        x: 359,
                                        y: 260,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText2",
                                        text: "2",
                                        style: a,
                                        x: 812,
                                        y: 260,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText3",
                                        text: "3",
                                        style: a,
                                        x: 1274,
                                        y: 260,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText4",
                                        text: "4",
                                        style: a,
                                        x: 571,
                                        y: 631,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText5",
                                        text: "5",
                                        style: a,
                                        x: 1072,
                                        y: 631,
                                        anchorX: 1
                                    }]
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "nameBg1_asset",
                                assetKey: "nameBg1_asset"
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "nameBg",
                                assetKey: "nameBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 100,
                                width: 1920
                            }, {
                                type: mt.objects.GROUP,
                                name: "paginationInfo_container",
                                contents: [{
                                    type: 14,
                                    name: "pageInfoOnePlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 0,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 833,
                                    y: 910,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoTwoPlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 1,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 875,
                                    y: 910,
                                    action: "function(){nge.observer.add('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoThreePlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 2,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 918,
                                    y: 910,
                                    action: "function(){nge.observer.add('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoFourPlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 3,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 960,
                                    y: 910,
                                    action: "function(){nge.observer.add('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoFivePlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 4,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 1005,
                                    y: 910,
                                    action: "function(){nge.observer.add('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoSexPlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 5,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 1047,
                                    y: 910,
                                    action: "function(){nge.observer.add('radiobutton.click.helpCarousel', _selectPage);}"
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "buttonsHelpContainer",
                                y: 469,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "leftButtonsHelpContainer",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "infoPrevButtonButton",
                                        assetKey: "infoNextButton",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 132,
                                        scaleX: -1,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "infoPrev");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "rightButtonsHelpContainer",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "infoNextButtonButton",
                                        assetKey: "infoNextButton",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 1788,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "infoNext");}'
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1215: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1216: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "36pt futuraptmedium",
                        fill: 16696173,
                        anchorX: .5,
                        anchorY: .5,
                        align: "center"
                    },
                    n = {
                        font: "36pt futuraptmedium",
                        fill: 16777215
                    },
                    a = {
                        font: "36pt futuraptmedium",
                        fill: 15325439,
                        anchorX: 1
                    },
                    s = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "1px_empty",
                            fullPath: s + "blank.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "fake_end_px",
                            fullPath: s + "blank.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "infoMobileNextButton",
                            fullPath: s + "playarea/infoMobileNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoPlate",
                            fullPath: s + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg1_asset",
                            fullPath: s + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image0",
                            fullPath: s + "playarea/page0image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0image1",
                            fullPath: s + "playarea/page0image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image0",
                            fullPath: s + "playarea/page1image0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image1",
                            fullPath: s + "playarea/page1image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image2",
                            fullPath: s + "playarea/page1image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image3",
                            fullPath: s + "playarea/page1image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image4",
                            fullPath: s + "playarea/page1image4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page1image5",
                            fullPath: s + "playarea/page1image5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image1",
                            fullPath: s + "playarea/page2image1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image2",
                            fullPath: s + "playarea/page2image2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page2image3",
                            fullPath: s + "playarea/page2image3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line1",
                            fullPath: s + "playarea/line1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line2",
                            fullPath: s + "playarea/line2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line3",
                            fullPath: s + "playarea/line3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line4",
                            fullPath: s + "playarea/line4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "line5",
                            fullPath: s + "playarea/line5.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "infoContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "pagesInfoContainer",
                                rewParams: {
                                    dragScrollSensivity: 1e-4
                                },
                                swipe: 2,
                                width: 1720,
                                height: 1080,
                                x: 100,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "page0_container",
                                    contents: [{
                                        name: "paytableNameText0",
                                        type: mt.objects.TEXT,
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0Text1",
                                        text: nge.i18n.get("page0Text1"),
                                        x: 455,
                                        y: 190,
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        anchorX: .5,
                                        anchorY: .5,
                                        align: "center"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0Text2",
                                        text: nge.i18n.get("page0Text2"),
                                        x: 1228,
                                        y: 190,
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        anchorX: .5,
                                        anchorY: .5,
                                        align: "center"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0Text3",
                                        text: nge.i18n.get("page0Text3"),
                                        x: 860,
                                        y: 820,
                                        class: "coloredText",
                                        style: {
                                            font: "22pt futuraptheavy",
                                            fill: 16777215,
                                            anchorX: .5,
                                            anchorY: .5,
                                            align: "center"
                                        },
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image0",
                                        assetKey: "page0image0",
                                        x: 80,
                                        y: 343
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0image1",
                                        assetKey: "page0image1",
                                        x: 732,
                                        y: 264
                                    }, {
                                        name: "page0image0Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        x: 407,
                                        y: 375,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 16696173
                                        },
                                        anchorX: .5,
                                        align: "center"
                                    }, {
                                        name: "page0image0Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 405,
                                        y: 458,
                                        anchorX: .5
                                    }, {
                                        name: "page0image0Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 405,
                                        y: 518,
                                        anchorX: .5
                                    }, {
                                        name: "page0image0Number5",
                                        type: mt.objects.TEXT,
                                        class: "asps0-5",
                                        x: 453,
                                        y: 375,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 8827375
                                        }
                                    }, {
                                        name: "page0image0Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps0-4",
                                        style: n,
                                        x: 455,
                                        y: 458
                                    }, {
                                        name: "page0image0Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps0-3",
                                        style: n,
                                        x: 455,
                                        y: 518
                                    }, {
                                        name: "page0image1Text15",
                                        type: mt.objects.TEXT,
                                        text: 15,
                                        x: 1170,
                                        y: 256,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 16696173
                                        },
                                        anchorX: .5,
                                        align: "center"
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 14,
                                        x: 1170,
                                        y: 338,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 13,
                                        x: 1170,
                                        y: 398,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 12,
                                        x: 1170,
                                        y: 458,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 11,
                                        x: 1170,
                                        y: 518,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 10,
                                        x: 1170,
                                        y: 578,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 9,
                                        x: 1170,
                                        y: 638,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 8,
                                        x: 1465,
                                        y: 338,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 7,
                                        x: 1465,
                                        y: 398,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 6,
                                        x: 1465,
                                        y: 458,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text10",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        x: 1465,
                                        y: 518,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        x: 1465,
                                        y: 578,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        x: 1465,
                                        y: 638,
                                        style: t,
                                        anchorX: .5
                                    }, {
                                        name: "page0image1Number15",
                                        type: mt.objects.TEXT,
                                        class: "asps7-15",
                                        x: 1235,
                                        y: 256,
                                        style: {
                                            font: "45pt futuraptmedium",
                                            fill: 8827375
                                        }
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-14",
                                        style: n,
                                        x: 1235,
                                        y: 338
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-13",
                                        style: n,
                                        x: 1235,
                                        y: 398
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-12",
                                        style: n,
                                        x: 1235,
                                        y: 458
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-11",
                                        style: n,
                                        x: 1235,
                                        y: 518
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-10",
                                        style: n,
                                        x: 1235,
                                        y: 578
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-9",
                                        style: n,
                                        x: 1235,
                                        y: 638
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-8",
                                        style: n,
                                        x: 1515,
                                        y: 338
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-7",
                                        style: n,
                                        x: 1515,
                                        y: 398
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-6",
                                        style: n,
                                        x: 1515,
                                        y: 458
                                    }, {
                                        name: "page0image1Number10",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-5",
                                        style: n,
                                        x: 1515,
                                        y: 518
                                    }, {
                                        name: "page0image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-4",
                                        style: n,
                                        x: 1515,
                                        y: 578
                                    }, {
                                        name: "page0image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps7s-3",
                                        style: n,
                                        x: 1515,
                                        y: 638
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1_container",
                                    contents: [{
                                        name: "paytableNameText1",
                                        type: mt.objects.TEXT,
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image0",
                                        assetKey: "page1image0",
                                        x: 136,
                                        y: 244
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image1",
                                        assetKey: "page1image1",
                                        x: 646,
                                        y: 237
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image2",
                                        assetKey: "page1image2",
                                        x: 1147,
                                        y: 253
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image3",
                                        assetKey: "page1image3",
                                        x: 149,
                                        y: 615
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image4",
                                        assetKey: "page1image4",
                                        x: 652,
                                        y: 629
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page1image5",
                                        assetKey: "page1image5",
                                        x: 1155,
                                        y: 609
                                    }, {
                                        name: "page1image0Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 366,
                                        y: 284
                                    }, {
                                        name: "page1image0Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 366,
                                        y: 339
                                    }, {
                                        name: "page1image0Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 366,
                                        y: 394
                                    }, {
                                        name: "page1image0Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps1-5",
                                        style: n,
                                        x: 422,
                                        y: 284
                                    }, {
                                        name: "page1image0Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps1-4",
                                        style: n,
                                        x: 422,
                                        y: 339
                                    }, {
                                        name: "page1image0Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps1-3",
                                        style: n,
                                        x: 422,
                                        y: 394
                                    }, {
                                        name: "page1image1Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 873,
                                        y: 284
                                    }, {
                                        name: "page1image1Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 873,
                                        y: 339
                                    }, {
                                        name: "page1image1Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 873,
                                        y: 394
                                    }, {
                                        name: "page1image1Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps2-5",
                                        style: n,
                                        x: 929,
                                        y: 284
                                    }, {
                                        name: "page1image1Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps2-4",
                                        style: n,
                                        x: 929,
                                        y: 339
                                    }, {
                                        name: "page1image1Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps2-3",
                                        style: n,
                                        x: 929,
                                        y: 394
                                    }, {
                                        name: "page1image2Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1397,
                                        y: 284
                                    }, {
                                        name: "page1image2Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1397,
                                        y: 339
                                    }, {
                                        name: "page1image2Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1397,
                                        y: 394
                                    }, {
                                        name: "page1image2Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps3-5",
                                        style: n,
                                        x: 1453,
                                        y: 284
                                    }, {
                                        name: "page1image2Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps3-4",
                                        style: n,
                                        x: 1453,
                                        y: 339
                                    }, {
                                        name: "page1image2Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps3-3",
                                        style: n,
                                        x: 1453,
                                        y: 394
                                    }, {
                                        name: "page1image3Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 366,
                                        y: 646
                                    }, {
                                        name: "page1image3Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 366,
                                        y: 701
                                    }, {
                                        name: "page1image3Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 366,
                                        y: 756
                                    }, {
                                        name: "page1image3Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps4-5",
                                        style: n,
                                        x: 422,
                                        y: 646
                                    }, {
                                        name: "page1image3Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps4-4",
                                        style: n,
                                        x: 422,
                                        y: 701
                                    }, {
                                        name: "page1image3Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps4-3",
                                        style: n,
                                        x: 422,
                                        y: 756
                                    }, {
                                        name: "page1image4Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 873,
                                        y: 646
                                    }, {
                                        name: "page1image4Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 873,
                                        y: 701
                                    }, {
                                        name: "page1image4Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 873,
                                        y: 756
                                    }, {
                                        name: "page1image4Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps5-5",
                                        style: n,
                                        x: 929,
                                        y: 646
                                    }, {
                                        name: "page1image4Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps5-4",
                                        style: n,
                                        x: 929,
                                        y: 701
                                    }, {
                                        name: "page1image4Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps5-3",
                                        style: n,
                                        x: 929,
                                        y: 756
                                    }, {
                                        name: "page1image5Text5",
                                        type: mt.objects.TEXT,
                                        text: 5,
                                        style: t,
                                        x: 1397,
                                        y: 646
                                    }, {
                                        name: "page1image5Text4",
                                        type: mt.objects.TEXT,
                                        text: 4,
                                        style: t,
                                        x: 1397,
                                        y: 701
                                    }, {
                                        name: "page1image5Text3",
                                        type: mt.objects.TEXT,
                                        text: 3,
                                        style: t,
                                        x: 1397,
                                        y: 756
                                    }, {
                                        name: "page1image5Number5",
                                        type: mt.objects.TEXT,
                                        class: "ps6-5",
                                        style: n,
                                        x: 1453,
                                        y: 646
                                    }, {
                                        name: "page1image5Number4",
                                        type: mt.objects.TEXT,
                                        class: "ps6-4",
                                        style: n,
                                        x: 1453,
                                        y: 701
                                    }, {
                                        name: "page1image5Number3",
                                        type: mt.objects.TEXT,
                                        class: "ps6-3",
                                        style: n,
                                        x: 1453,
                                        y: 756
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2_container",
                                    contents: [{
                                        name: "paytableNameText2",
                                        type: mt.objects.TEXT,
                                        text: "STAR_BOOST_help",
                                        style: e,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText1",
                                        text: nge.i18n.get("pageStarBoostText1"),
                                        x: 860,
                                        y: 675,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "26pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText2",
                                        text: nge.i18n.get("pageStarBoostText2"),
                                        x: 582,
                                        y: 700,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "26pt futuraptheavy",
                                            fill: 16777215
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText2RU",
                                        text: nge.i18n.get("pageStarBoostText2RU"),
                                        x: 490,
                                        y: 700,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "26pt futuraptheavy",
                                            fill: 16777215
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText3",
                                        text: nge.i18n.get("pageStarBoostText3"),
                                        x: 594,
                                        y: 390,
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "28pt futuraptheavy",
                                            fill: 15327167,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText4",
                                        text: nge.i18n.get("pageStarBoostText4"),
                                        x: 860,
                                        y: 390,
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "28pt futuraptheavy",
                                            fill: 15327167,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "pageStarBoostText5",
                                        text: nge.i18n.get("pageStarBoostText5"),
                                        x: 1126,
                                        y: 390,
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "28pt futuraptheavy",
                                            fill: 15327167,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image1",
                                        assetKey: "page2image1",
                                        x: 491,
                                        y: 166
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image2",
                                        assetKey: "page2image2",
                                        x: 757,
                                        y: 166
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2image3",
                                        assetKey: "page2image3",
                                        x: 1023,
                                        y: 166
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3_container",
                                    contents: [{
                                        name: "paytableNameText3",
                                        type: mt.objects.TEXT,
                                        text: "RULES_help",
                                        style: e,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page2Text1",
                                        text: nge.i18n.get("page2Text1"),
                                        x: 860,
                                        y: 515,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4_container",
                                    contents: [{
                                        name: "paytableNameText4",
                                        type: mt.objects.TEXT,
                                        text: "RULES_help",
                                        style: e,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page3Text1",
                                        text: nge.i18n.get("page3Text1"),
                                        x: 860,
                                        y: 515,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "30pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page5_container",
                                    contents: [{
                                        name: "paytableNameText5",
                                        type: mt.objects.TEXT,
                                        text: "LINES_help",
                                        style: e,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line1",
                                        assetKey: "line1",
                                        x: 269,
                                        y: 260
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line2",
                                        assetKey: "line2",
                                        x: 722,
                                        y: 260
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line3",
                                        assetKey: "line3",
                                        x: 1184,
                                        y: 260
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line4",
                                        assetKey: "line4",
                                        x: 481,
                                        y: 631
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "line5",
                                        assetKey: "line5",
                                        x: 982,
                                        y: 631
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText1",
                                        text: "1",
                                        style: a,
                                        x: 259,
                                        y: 260,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText2",
                                        text: "2",
                                        style: a,
                                        x: 712,
                                        y: 260,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText3",
                                        text: "3",
                                        style: a,
                                        x: 1174,
                                        y: 260,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText4",
                                        text: "4",
                                        style: a,
                                        x: 471,
                                        y: 631,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "lineText5",
                                        text: "5",
                                        style: a,
                                        x: 972,
                                        y: 631,
                                        anchorX: 1
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "fake_end_px",
                                        assetKey: "fake_end_px"
                                    }]
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "1px_empty",
                                assetKey: "1px_empty"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "nameBg1_asset",
                                assetKey: "nameBg1_asset"
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "nameBg",
                                assetKey: "nameBg1",
                                bottom: 12,
                                top: 12,
                                left: 12,
                                right: 12,
                                height: 100,
                                width: 1920
                            }, {
                                type: mt.objects.GROUP,
                                name: "paginationInfoContainer",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoOnePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 833,
                                    y: 907
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoTwoPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 875,
                                    y: 907
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoThreePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 918,
                                    y: 907
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoFourPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 960,
                                    y: 907
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoFivePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 1005,
                                    y: 907
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoSexPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 1047,
                                    y: 907
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "buttonsHelpContainer",
                                y: 219,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "leftButtonsHelpContainer",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "infoPrevButtonButton",
                                        assetKey: "infoMobileNextButton",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 132,
                                        scaleX: -1,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "infoPrev");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "rightButtonsHelpContainer",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "infoNextButtonButton",
                                        assetKey: "infoMobileNextButton",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 1788,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "infoNext");}'
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1217: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Intro = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".portrait .introScreenContainer": {
                            scaleX: .6,
                            scaleY: .6
                        },
                        ".album .introScreenContainer": {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton",
                            fullPath: e + "playarea/demoPlayButton.png",
                            frameWidth: 288
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "playarea/frameIntroScreen.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "introScreenContainer",
                            class: "introScreenContainer",
                            alignX: "center",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "introScreenButtonContainer",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    name: "demoPlayButtonText",
                                    text: nge.i18n.get("PLAY_BUTTON"),
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 170,
                                    x: 0,
                                    y: 910,
                                    style: {
                                        font: "40pt futuraptheavy",
                                        fill: 666677,
                                        align: "center",
                                        stroke: 14329662,
                                        strokeThickness: 4
                                    }
                                }, {
                                    type: mt.objects.BUTTON,
                                    assetKey: "demoPlayButton",
                                    name: "demoPlayButton",
                                    x: 0,
                                    y: 846,
                                    anchorX: .5,
                                    pixelPerfectOver: !1,
                                    pixelPerfectClick: !1,
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "demoPlay");}'
                                }]
                            }, {
                                type: mt.objects.TEXT,
                                name: "introScreenTextCenter",
                                text: nge.i18n.get("INTRO_TEXT"),
                                class: "coloredText",
                                anchorX: .5,
                                anchorY: .5,
                                x: 0,
                                y: 750,
                                style: {
                                    font: "27pt futuraptheavy",
                                    fill: 16777215,
                                    align: "center",
                                    stroke: 1311237,
                                    strokeThickness: 1,
                                    shadowColor: 1311237,
                                    shadowBlur: 6,
                                    shadowOffsetY: 2,
                                    lineHeight: 46
                                }
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenArrow",
                                assetKey: "introScreenArrow",
                                x: -212,
                                y: 988
                            }, {
                                type: mt.objects.IMAGE,
                                name: "frameIntroScreen",
                                assetKey: "frameIntroScreen",
                                x: -212,
                                y: 984
                            }, {
                                type: mt.objects.TEXT,
                                name: "introScreenTextBottom",
                                text: "show_next_time",
                                style: {
                                    font: "28pt futuraptheavy",
                                    fill: 16777215
                                },
                                anchorY: .5,
                                maxWidth: 340,
                                x: -172,
                                y: 998
                            }, {
                                name: "autoStart",
                                type: mt.objects.BUTTON,
                                assetKey: "areaEmpty",
                                class: "autoStartCheckBox",
                                alpha: 0,
                                pixelPerfectClick: 0,
                                pixelPerfectOver: 0,
                                anchorX: .5,
                                anchorY: .5,
                                width: 420,
                                height: 34,
                                scaleX: 420,
                                scaleY: 34,
                                x: -14,
                                y: 985,
                                action: 'function(){nge.observer.fire("buttons.pressCommand", "autoStartCheckBox");}'
                            }, {
                                type: mt.objects.IMAGE,
                                name: "introScreenBg",
                                x: 0,
                                anchorX: .5,
                                assetKey: "introScreenBg"
                            }]
                        }]
                    }
                }
            }
        },
        1218: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = nge.appPath + "img/",
                    t = {
                        font: "39pt futuraptheavy",
                        fill: 16777215
                    },
                    n = {
                        font: "30pt futuraptheavy",
                        fill: 16777215
                    },
                    a = {
                        font: "22pt futuraptheavy",
                        fill: 15712883
                    };
                return {
                    styles: {
                        ".titleStyleMobile": {
                            style: {
                                font: "22pt futuraptheavy",
                                fill: 15325439,
                                stroke: 48,
                                strokeThickness: 5
                            }
                        },
                        ".freeSpinsStyleMobile": {
                            style: {
                                font: "22pt futuraptheavy",
                                fill: 15325439,
                                stroke: 48,
                                strokeThickness: 5
                            }
                        },
                        ".album .uiContainer": {
                            sWidth: 1920,
                            sHeight: 1080
                        },
                        ".portrait .uiContainer": {
                            sWidth: 1080,
                            sHeight: 1920
                        },
                        ".album .customButtonsMobileContainer": {
                            isVisible: !0
                        },
                        ".portrait .customButtonsMobileContainer": {
                            isVisible: !1
                        },
                        ".album .buttonsMobileContainer": {
                            alignY: "top"
                        },
                        ".portrait .buttonsMobileContainer": {
                            alignY: "bottom"
                        },
                        ".album .autoSpinMobileContainer": {
                            x: 1760,
                            y: 223,
                            alignX: "left",
                            scaleX: .75,
                            scaleY: .75
                        },
                        ".portrait .autoSpinMobileContainer": {
                            x: "16%",
                            y: -475,
                            alignX: "left",
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".album .playButtonMobileContainer": {
                            x: 1760,
                            y: 476,
                            alignX: "left",
                            scaleX: .75,
                            scaleY: .75
                        },
                        ".portrait .playButtonMobileContainer": {
                            x: "50%",
                            y: -475,
                            alignX: "left",
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".album .sidebarMobileButtonContainer": {
                            isVisible: !1
                        },
                        ".portrait .sidebarMobileButtonContainer": {
                            x: "84%",
                            y: -475,
                            alignX: "left",
                            isVisible: !0
                        },
                        ".album .settingBottomUIMobileContainer": {
                            x: 39,
                            y: 598,
                            alignX: "left",
                            isVisible: !0
                        },
                        ".portrait .settingBottomUIMobileContainer": {
                            x: "70%",
                            y: 990,
                            alignX: "left",
                            isVisible: !1
                        },
                        ".album .betSettingButtonMobile": {
                            isVisible: !0
                        },
                        ".portrait .betSettingButtonMobile": {
                            isVisible: !1
                        },
                        ".album .infoPanelMobileContainer": {
                            x: 0,
                            y: 0,
                            alignX: "center",
                            alignY: "top"
                        },
                        ".portrait .infoPanelMobileContainer": {
                            x: "50%",
                            y: 0,
                            alignX: "left",
                            alignY: "bottom"
                        },
                        ".album .infoPanelMobileContainerBackground": {
                            isVisible: !1
                        },
                        ".portrait .infoPanelMobileContainerBackground": {
                            isVisible: !0
                        },
                        ".album .totalBetMobileContainer": {
                            x: -536,
                            y: 933
                        },
                        ".portrait .totalBetMobileContainer": {
                            x: 0,
                            y: -150
                        },
                        ".album .betMinusButtonMobileButton": {
                            x: -210,
                            y: 30,
                            assetKey: "betMinusButtonMobile"
                        },
                        ".portrait .betMinusButtonMobileButton": {
                            x: -150,
                            y: 46,
                            assetKey: "betMinusButtonMobileVertical"
                        },
                        ".album .betPlusButtonMobileButton": {
                            x: 127,
                            y: 30,
                            assetKey: "betPlusButtonMobile"
                        },
                        ".portrait .betPlusButtonMobileButton": {
                            x: 87,
                            y: 46,
                            assetKey: "betPlusButtonMobileVertical"
                        },
                        ".album .totalBetMobileNumber": {
                            isVisible: !0
                        },
                        ".portrait .totalBetMobileNumber": {
                            isVisible: !1
                        },
                        ".album .totalBetMobileAmountContainer": {
                            isVisible: !1
                        },
                        ".portrait .totalBetMobileAmountContainer": {
                            isVisible: !0
                        },
                        ".album .totalbetbg": {
                            isVisible: !0
                        },
                        ".portrait .totalbetbg": {
                            isVisible: !1
                        },
                        ".album .winBottomUIMobileContainer": {
                            x: 0,
                            y: 904
                        },
                        ".portrait .winBottomUIMobileContainer": {
                            x: "-32%",
                            y: -150
                        },
                        ".album .winbg": {
                            isVisible: !0
                        },
                        ".portrait .winbg": {
                            isVisible: !1
                        },
                        ".album .winMobileContainerArea": {
                            scaleY: 140
                        },
                        ".portrait .winMobileContainerArea": {
                            scaleY: 74
                        },
                        ".album .creditsWinMobileAlbumContainer": {
                            isVisible: !0
                        },
                        ".portrait .creditsWinMobileAlbumContainer": {
                            isVisible: !1
                        },
                        ".album .creditsWinMobilePortraitContainer": {
                            isVisible: !1
                        },
                        ".portrait .creditsWinMobilePortraitContainer": {
                            isVisible: !0
                        },
                        ".album .winMobileNumberContainer": {
                            isVisible: !0
                        },
                        ".portrait .winMobileNumberContainer": {
                            isVisible: !1
                        },
                        ".album .winMobileAmountContainer": {
                            isVisible: !1
                        },
                        ".portrait .winMobileAmountContainer": {
                            isVisible: !0
                        },
                        ".album .balanceMobileContainer": {
                            x: 535,
                            y: 933
                        },
                        ".portrait .balanceMobileContainer": {
                            x: "32%",
                            y: -150
                        },
                        ".album .balancebg": {
                            isVisible: !0
                        },
                        ".portrait .balancebg": {
                            isVisible: !1
                        },
                        ".album .balanceMobileNumber": {
                            isVisible: !0
                        },
                        ".portrait .balanceMobileNumber": {
                            isVisible: !1
                        },
                        ".album .balanceMobileAmountContainer": {
                            isVisible: !1
                        },
                        ".portrait .balanceMobileAmountContainer": {
                            isVisible: !0
                        },
                        ".album .gameFreeSpinMobileContainer": {
                            alignX: "center",
                            alignY: "top"
                        },
                        ".portrait .gameFreeSpinMobileContainer": {
                            alignX: "center",
                            alignY: "bottom"
                        },
                        ".album .counterFreeSpinsText": {
                            y: 1017
                        },
                        ".portrait .counterFreeSpinsText": {
                            y: -20
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "totalbetbg",
                            fullPath: e + "playarea/panelbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "balancebg",
                            fullPath: e + "playarea/panelbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "winbg",
                            fullPath: e + "playarea/winbg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "autoSpinButtonMobile",
                            fullPath: e + "playarea/autoSpinButtonMobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "cash_asset",
                            fullPath: e + "playarea/cash_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "home_asset",
                            fullPath: e + "playarea/home_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingPanelBackBg1_asset",
                            fullPath: e + "playarea/settingPanelMobileBackBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betPlusButtonMobile",
                            fullPath: e + "playarea/betPlusButtonMobile.png",
                            frameWidth: 84
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betMinusButtonMobile",
                            fullPath: e + "playarea/betMinusButtonMobile.png",
                            frameWidth: 84
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betPlusButtonMobileVertical",
                            fullPath: e + "playarea/betPlusButtonVerticalMobile.png",
                            frameWidth: 56
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betMinusButtonMobileVertical",
                            fullPath: e + "playarea/betMinusButtonVerticalMobile.png",
                            frameWidth: 56
                        }, {
                            type: mt.assets.IMAGE,
                            key: "helpMobileButton",
                            fullPath: e + "playarea/helpMobileButton.png",
                            frameWidth: 92
                        }, {
                            type: mt.assets.IMAGE,
                            key: "settingsMobileButton",
                            fullPath: e + "playarea/settingsMobileButton.png",
                            frameWidth: 92
                        }, {
                            type: mt.assets.IMAGE,
                            key: "soundMobileButton",
                            fullPath: e + "playarea/soundMobileButton.png",
                            frameWidth: 92
                        }, {
                            type: mt.assets.IMAGE,
                            key: "quickSettingsPanelMobileButton",
                            fullPath: e + "playarea/quickSettingsPanelMobileButton.png",
                            frameWidth: 140
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSettingButtonMobile",
                            fullPath: e + "playarea/betSettingButtonMobile.png",
                            frameWidth: 136
                        }, {
                            type: mt.assets.IMAGE,
                            key: "spinButton",
                            fullPath: e + "playarea/spinButton.png",
                            frameWidth: 396,
                            frameHeight: 396
                        }]
                    },
                    objects: {
                        name: "objects",
                        class: "uiContainer",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "buttonsMobileContainer",
                            class: "buttonsMobileContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "bottomUIContainer",
                                class: "bottomUIContainer",
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "customButtonsMobileContainer",
                                class: "customButtonsMobileContainer",
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "assets",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "home_asset",
                                    assetKey: "home_asset",
                                    x: 38,
                                    y: 11
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "cash_asset",
                                    assetKey: "cash_asset",
                                    x: 1702,
                                    y: 641
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "autoSpinMobileContainer",
                                class: "autoSpinMobileContainer",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "autoSpinButtonMobile",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "autoSpinButtonName2",
                                        text: "AUTO",
                                        style: {
                                            align: "center",
                                            font: "23pt futuraptheavy",
                                            fill: 16696173
                                        },
                                        class: "buttonStyleNormal",
                                        lineHeight: 25,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 132,
                                        x: 0,
                                        y: 0
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "autoSpinButtonMobileButton",
                                        assetKey: "autoSpinButtonMobile",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 0,
                                        y: 0,
                                        anchorX: .5,
                                        anchorY: .5,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "autoSpinMobile");}'
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "sidebarMobileButtonContainer",
                                class: "sidebarMobileButtonContainer",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "sidebarButtonMobile",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "autoSpinButtonName",
                                        text: "≡",
                                        style: {
                                            align: "center",
                                            font: "80pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        class: "buttonStyleNormal",
                                        lineHeight: 0,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 105,
                                        x: 0,
                                        y: 0
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "sidebarMobileButtonButton",
                                        assetKey: "autoSpinButtonMobile",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 0,
                                        y: 0,
                                        anchorX: .5,
                                        anchorY: .5,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "sidebarMobile");}'
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "playButtonMobileContainer",
                                class: "playButtonMobileContainer",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "spinButtonButton",
                                    assetKey: "spinButton",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 0,
                                    y: 0,
                                    anchorX: .5,
                                    anchorY: .5,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "spin");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "betSettingButtonMobile",
                                class: "betSettingButtonMobile",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "betSettingButtonMobileButton",
                                    assetKey: "betSettingButtonMobile",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 1754,
                                    y: 941,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "betSettingButtonMobile");}'
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "settingBottomUIMobileContainer",
                            class: "settingBottomUIMobileContainer",
                            x: 0,
                            y: 0,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "settingPanelBackBg1_asset",
                                assetKey: "settingPanelBackBg1_asset",
                                x: 0,
                                y: 0,
                                alpha: .5
                            }, {
                                type: mt.objects.GROUP,
                                name: "infoPanelPlusMobileButton",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "quickSettingsPanelMobileButtonButton",
                                    assetKey: "quickSettingsPanelMobileButton",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: -6,
                                    y: 338,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "quickSettingsPanel");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "soundOffOnMobileButtonButton",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "soundMobileButtonButton",
                                    assetKey: "soundMobileButton",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 21,
                                    y: 29,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "soundMobile");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "settingPanelMobileButtonButton",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "settingsMobileButtonButton",
                                    assetKey: "settingsMobileButton",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 21,
                                    y: 139,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "settings");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "helpMobileButtonButtonPanel",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "helpMobileButtonButton",
                                    assetKey: "helpMobileButton",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 21,
                                    y: 249,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "paytable");}'
                                }]
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "settingPanelMobileBackBg",
                                assetKey: "settingPanelBackBg1",
                                alpha: .8,
                                anchorX: 0,
                                anchorY: 0,
                                height: 464,
                                width: 128,
                                left: 64,
                                right: 64,
                                top: 64,
                                bottom: 64,
                                x: 127,
                                y: 471,
                                scaleX: 1 / nge.assets.getQualityFactor(),
                                scaleY: 1 / nge.assets.getQualityFactor()
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "gameFreeSpinMobileContainer",
                            class: "gameFreeSpinMobileContainer",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "counterFreeSpinsText",
                                class: "counterFreeSpinsText freeSpinAmount",
                                text: "FREE GAME: 2 OF 2",
                                style: {
                                    font: "22pt futuraptheavy",
                                    fill: 16696173
                                },
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "infoPanelMobileContainer",
                            class: "infoPanelMobileContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "totalBetMobileContainer",
                                class: "totalBetMobileContainer",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    name: "totalBetMobileName",
                                    text: "TOTAL BET",
                                    class: "titleStyleMobile",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 0,
                                    y: 0
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "betMinusButtonMobile",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "betMinusButtonMobileButton",
                                        class: "betMinusButtonMobileButton",
                                        assetKey: "betMinusButtonMobile",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "betMinus");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "betPlusButtonMobile",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "betPlusButtonMobileButton",
                                        class: "betPlusButtonMobileButton",
                                        assetKey: "betPlusButtonMobile",
                                        btnFrames: {
                                            over: 2,
                                            out: 1,
                                            down: 0
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "betPlus");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "totalBetMobileContent_container",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "totalBetMobileContainerArea",
                                        assetKey: "areaEmpty",
                                        class: "currencyChanger",
                                        alpha: 0,
                                        anchorX: .5,
                                        anchorY: .5,
                                        scaleX: 232,
                                        scaleY: 96,
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        x: 0,
                                        y: 74,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "totalBetMobileNumber",
                                        style: n,
                                        class: "totalBetMobileNumber totalBetNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 0,
                                        y: 74
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "totalBetMobileAmountContainer",
                                        class: "totalBetMobileAmountContainer",
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "totalBetMobileAmount",
                                            style: n,
                                            class: "totalBetAmount",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 65
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "totalBetMobileCurrency",
                                            style: a,
                                            class: "currency",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 95
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "totalBetMobileCoinsContent_container",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "totalBetMobileContainerArea",
                                        assetKey: "areaEmpty",
                                        class: "currencyChanger",
                                        alpha: 0,
                                        anchorX: .5,
                                        anchorY: .5,
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        scaleX: 232,
                                        scaleY: 96,
                                        x: 0,
                                        y: 74,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "totalBetCoinsMobileNumber",
                                        style: n,
                                        class: "creditsTotalBetNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 0,
                                        y: 74
                                    }]
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "totalbetbg",
                                    class: "totalbetbg",
                                    assetKey: "totalbetbg",
                                    x: 0,
                                    y: 72,
                                    anchorX: .5,
                                    anchorY: .5
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "winBottomUIMobileContainer",
                                class: "winBottomUIMobileContainer",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    name: "winMobileName",
                                    text: "WIN",
                                    class: "titleStyleMobile",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 0,
                                    y: 0
                                }, {
                                    type: mt.objects.BUTTON,
                                    name: "winMobileContainerArea",
                                    assetKey: "areaEmpty",
                                    class: "currencyChanger winMobileContainerArea",
                                    alpha: 0,
                                    anchorX: .5,
                                    anchorY: .5,
                                    pixelPerfectClick: 0,
                                    pixelPerfectOver: 0,
                                    scaleX: 556,
                                    x: 0,
                                    y: 85,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "winMobileContentContainer",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "winMobileNumberContainer",
                                        class: "winMobileNumberContainer",
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "winMobileNumber",
                                            style: t,
                                            class: "winNumber",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 85,
                                            maxWidth: 460
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "winMobileAmountContainer",
                                        class: "winMobileAmountContainer",
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "winMobileGoodLuck",
                                            style: n,
                                            class: "winNumber verticalWinDefaultText",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 74,
                                            maxHeight: 50
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "winMobileAmount",
                                            style: n,
                                            class: "winAmount verticalWinText",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 65,
                                            maxHeight: 50
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "winMobileCurrency",
                                            style: a,
                                            class: "currency verticalWinText",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 95,
                                            maxHeight: 50
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "winMobileCoinsContentContainer",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "creditsWinMobileAlbumContainer",
                                        class: "creditsWinMobileAlbumContainer",
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "creditsWinMobileNumber",
                                            style: t,
                                            class: "creditsWinNumber",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 85,
                                            maxWidth: 460
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "creditsWinMobilePortraitContainer",
                                        class: "creditsWinMobilePortraitContainer",
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "creditsWinMobilePortraitNumber",
                                            style: n,
                                            class: "creditsWinNumber",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 0,
                                            y: 74,
                                            maxHeight: 50
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "winbg",
                                    class: "winbg",
                                    assetKey: "winbg",
                                    x: 0,
                                    y: 86,
                                    anchorX: .5,
                                    anchorY: .5
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "balanceMobileContainer",
                                class: "balanceMobileContainer",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    name: "balanceMobileName",
                                    text: "BALANCE",
                                    class: "titleStyleMobile",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 0,
                                    y: 0
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "balanceMobileCoinsContent_container",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "balanceCoinsMobileContainerArea",
                                        assetKey: "areaEmpty",
                                        class: "currencyChanger",
                                        alpha: 0,
                                        anchorX: .5,
                                        anchorY: .5,
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        scaleX: 440,
                                        scaleY: 96,
                                        x: 2,
                                        y: 74,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "balanceCoinsMobileNumber",
                                        style: n,
                                        class: "creditsNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 2,
                                        y: 74
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "balanceMobileContent_container",
                                    contents: [{
                                        type: mt.objects.BUTTON,
                                        name: "balanceMobileContainerArea",
                                        assetKey: "areaEmpty",
                                        class: "currencyChanger",
                                        alpha: 0,
                                        anchorX: .5,
                                        anchorY: .5,
                                        pixelPerfectClick: 0,
                                        pixelPerfectOver: 0,
                                        scaleX: 440,
                                        scaleY: 96,
                                        x: 2,
                                        y: 74,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "balanceMobileNumber",
                                        style: n,
                                        class: "balanceNumber balanceMobileNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 2,
                                        y: 74
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "balanceMobileAmountContainer",
                                        class: "balanceMobileAmountContainer",
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "balanceMobileAmount",
                                            style: n,
                                            class: "balanceAmount",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 2,
                                            y: 65
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "balanceMobileCurrency",
                                            style: a,
                                            class: "currency",
                                            anchorX: .5,
                                            anchorY: .5,
                                            x: 2,
                                            y: 95
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "balancebg",
                                    assetKey: "balancebg",
                                    class: "balancebg",
                                    x: 0,
                                    y: 72,
                                    anchorX: .5,
                                    anchorY: .5
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "infoPanelMobileContainerBackground",
                                class: "infoPanelMobileContainerBackground",
                                assetKey: "settingsContainerBg",
                                sWidth: "100%",
                                sHeight: "200",
                                sType: "circumscribed",
                                x: "-50%",
                                y: -200
                            }]
                        }]
                    }
                }
            }
        },
        1219: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1220: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Demo = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton",
                            fullPath: e + "playarea/demoPlayButton.png",
                            frameWidth: 288
                        }, {
                            type: mt.assets.IMAGE,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "frameIntroScreen",
                            fullPath: e + "playarea/frameIntroScreen.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1221: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".album .parentGroup": {
                            sWidth: "100%",
                            sHeight: "100%"
                        },
                        ".portrait .parentGroup": {
                            sWidth: "100%",
                            sHeight: "100%"
                        },
                        ".jackpotPlayareaVal": {
                            anchorX: .5,
                            anchorY: .5,
                            style: {
                                font: "32pt futuraptheavy",
                                fill: 16777215
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "intro_group",
                            fullPath: "1pxBlack"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "jackpotPopup_group",
                            fullPath: e + "playarea/jackpotPopup_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "offers_group",
                            fullPath: e + "playarea/offers_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "ui_group",
                            fullPath: e + "playarea/ui_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "tabs_group",
                            fullPath: e + "playarea/tabs_group.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "particlesLightBg",
                            fullPath: e + "playarea/particlesLightBg.png"
                        }, {
                            type: mt.assets.JSON,
                            key: "emmiterStarTrailEmitter",
                            fullPath: e + "emitter/emmiterStarTrailEmitter.json"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "emmiterStarTrail",
                            fullPath: e + "emitter/emmiterStarTrail.png"
                        }, {
                            type: mt.assets.JSON,
                            key: "emitterLightBg",
                            fullPath: e + "emitter/emitterLightBg.json"
                        }, {
                            type: mt.assets.JSON,
                            key: "emitterLightBg1",
                            fullPath: e + "emitter/emitterLightBg1.json"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "jackpotPanel",
                            fullPath: e + "playarea/jackpotPanel.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "popupsContainer"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "intro_group",
                            assetKey: "1pxBlack"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "jackpotPopup_group",
                            assetKey: "jackpotPopup_group"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "offers_group",
                            assetKey: "offers_group"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "tabs_group",
                            assetKey: "tabs_group"
                        }, {
                            type: mt.objects.GROUP,
                            name: "winPopupContainer"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "ui_group",
                            assetKey: "ui_group"
                        }, {
                            type: mt.objects.GROUP,
                            name: "freespinContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "starsContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "progressiveJackpot",
                            x: 600,
                            y: 7,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "progressiveJackpotSevens",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    class: "jackpotSevensPlayareaValue jackpotPlayareaVal",
                                    x: 555,
                                    y: 38,
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 250
                                }, {
                                    type: mt.objects.IMAGE,
                                    assetKey: "0",
                                    name: "ii",
                                    x: 357,
                                    y: 36,
                                    anchorX: .5,
                                    anchorY: .5,
                                    scaleX: .33,
                                    scaleY: .33
                                }, {
                                    type: mt.objects.TEXT,
                                    class: "creditsJackpotSevensPlayareaValue jackpotPlayareaVal",
                                    x: 555,
                                    y: 38,
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 250
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "jackpotPanel",
                                    assetKey: "jackpotPanel"
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "progressiveJackpotDiamond",
                                contents: [{
                                    type: mt.objects.TEXT,
                                    class: "jackpotDiamondPlayareaValue jackpotPlayareaVal",
                                    x: 555,
                                    y: 38,
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 250
                                }, {
                                    type: mt.objects.IMAGE,
                                    assetKey: "7",
                                    x: 360,
                                    y: 34,
                                    anchorX: .5,
                                    anchorY: .5,
                                    scaleX: .38,
                                    scaleY: .38
                                }, {
                                    type: mt.objects.TEXT,
                                    class: "creditsJackpotDiamondPlayareaValue jackpotPlayareaVal",
                                    x: 555,
                                    y: 38,
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 250
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "jackpotPanel",
                                    assetKey: "jackpotPanel"
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "customButtonsMobileContainer",
                            alpha: "1",
                            contents: []
                        }, {
                            type: mt.objects.GROUP,
                            name: "customButtons01VerticalMobileContainer",
                            alpha: "1",
                            isVisible: !1,
                            contents: []
                        }, {
                            type: mt.objects.GROUP,
                            name: "customButtons02VerticalMobileContainer",
                            alpha: "1",
                            isVisible: !1,
                            contents: []
                        }, {
                            type: mt.objects.GROUP,
                            name: "questlineContainer",
                            x: 100,
                            y: 90
                        }, {
                            type: mt.objects.GROUP,
                            name: "jackpotStatusPanelContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "foregroundContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "miniPaytableParentContainer",
                            class: "miniPaytableParentContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "miniPaytable_container"
                            }, {
                                type: mt.objects.BUTTON,
                                name: "miniPaytableGlobalCover",
                                assetKey: "1pxBlack",
                                scaleX: 1920,
                                scaleY: 1080,
                                pixelPerfect: 0,
                                alpha: 0,
                                isVisible: !1,
                                action: 'function() { nge.observer.fire("miniPaytable.clickAll");}'
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "winlinesTextContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "spinificationAboveAnimationContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineFrameContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachineFrameMainGame",
                                contents: []
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "gameScreenContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachine_container"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "spinificationBelowAnimationContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "blinkerContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "backgroundContainer"
                        }]
                    }
                }
            }
        },
        1222: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function() {
                var e = nge.appPath + "img/",
                    t = nge.Lib.Helper.mobileAndTabletCheck(),
                    n = (t ? "playarea/" : "atlases/") + "bgArea" + (t ? "Mobile.png" : ".jpg"),
                    a = {
                        name: "assets",
                        contents: []
                    },
                    s = t ? "psd_atlases_ui_mobile" : "psd_atlases_ui";
                return a.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: s,
                    atlas: e + "atlases/" + s + ".json",
                    fullPath: e + "atlases/" + s + ".png"
                }), a.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: "symbols_static",
                    atlas: e + "atlases/symbols_static.json",
                    fullPath: e + "atlases/symbols_static.png"
                }), a.contents.push({
                    type: mt.assets.ATLAS,
                    key: "symbols_static_blur",
                    atlas: e + "atlases/symbols_static_blur.json",
                    fullPath: e + "atlases/symbols_static_blur.png"
                }), a.contents.push({
                    type: mt.assets.ATLAS,
                    key: "psd_atlases_help",
                    atlas: e + "atlases/psd_atlases_help.json",
                    fullPath: e + "atlases/psd_atlases_help.png"
                }), a.contents.push({
                    type: mt.assets.IMAGE,
                    key: "popupJackpot",
                    fullPath: e + "jackpot/images/jackpotPopup.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "bgArea",
                    fullPath: e + n
                }, {
                    type: mt.assets.IMAGE,
                    key: "slotmachineShadow",
                    fullPath: e + "playarea/slotmachineShadow.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "introScreenBg",
                    fullPath: e + "atlases/introScreenBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "bgAreaFreeSpins",
                    fullPath: e + "atlases/bgAreaFreeSpins.jpg"
                }, {
                    type: mt.assets.ATLAS,
                    key: "emmiterStarTrail",
                    atlas: e + "emitter/emmiterStarTrail.json",
                    fullPath: e + "emitter/emmiterStarTrail.png"
                }, {
                    type: mt.assets.ATLAS,
                    key: "particlesLightBg",
                    atlas: e + "emitter/particlesLightBg.json",
                    fullPath: e + "emitter/particlesLightBg.png"
                }, {
                    type: mt.assets.SPINE,
                    key: "m00_000",
                    spine: e + "spine/symbols/m00_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m01_000",
                    spine: e + "spine/symbols/m01_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m02_000",
                    spine: e + "spine/symbols/m02_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m03_000",
                    spine: e + "spine/symbols/m03_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m04_000",
                    spine: e + "spine/symbols/m04_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m05_000",
                    spine: e + "spine/symbols/m05_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m06_000",
                    spine: e + "spine/symbols/m06_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m07_000",
                    spine: e + "spine/symbols/m07_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "star_animation",
                    spine: e + "questline/star_animation.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "star_rotate",
                    spine: e + "questline/star_rotate.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "animateBg",
                    spine: e + "spine/backgroundAnimation/animateBg.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "spinification",
                    spine: e + "spine/spinification/spinification.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bigWinAnim",
                    subtype: "noPngQuant",
                    spine: e + "atlases/spine/bigWin/big_win.json"
                }, {
                    type: mt.assets.BINARY,
                    key: "emitterVFX",
                    fullPath: nge.appPath + "/emitter/explosionPirateCoin.dat"
                }, {
                    type: mt.assets.IMAGE,
                    key: "pCoin_sprite_01",
                    width: 1548,
                    height: 1290,
                    frameWidth: 258,
                    frameHeight: 258,
                    fullPath: e + "emitter/clCoin_sprite_01.png"
                }, {
                    type: mt.assets.SPINE,
                    subtype: "noPngQuant",
                    key: "animatedPopup",
                    spine: e + "atlases/animatedPopup.json"
                }), t && (a.contents.push({
                    type: mt.assets.IMAGE,
                    key: "bgAreaBottom",
                    fullPath: e + "playarea/bgAreaBottom.png"
                }), a.contents.push({
                    type: mt.assets.IMAGE,
                    key: "bgAreaFsBottom",
                    fullPath: e + "playarea/bgAreaFsBottom.png"
                }), a.contents.push({
                    type: mt.assets.IMAGE,
                    key: "bgFsArea",
                    fullPath: e + "playarea/bgFsArea.png"
                }), a.contents.push({
                    type: mt.assets.IMAGE,
                    key: "logo",
                    fullPath: e + "playarea/logo.png"
                })), a.contents.push({
                    type: mt.assets.IMAGE,
                    subtype: "noPngQuant",
                    key: "topLight1",
                    fullPath: e + "atlases/top_light_1.jpg"
                }), a.contents.push({
                    type: mt.assets.IMAGE,
                    subtype: "noPngQuant",
                    key: "topLight2",
                    fullPath: e + "atlases/top_light_2.jpg"
                }), {
                    assets: a,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1223: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1224: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1225: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic = {}
        },
        1226: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.Cfg.extend((function() {
                this.sharedButtons.play.linesChanger = {
                    name: "linesChanger",
                    enabled: !1,
                    visible: !0
                }
            }))
        },
        1227: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.DjGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("innerJackpot")
            }))
        },
        1228: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.DjGameBase.Mlm.Brain.Slot.extend((function() {
                var e = this,
                    t = {},
                    n = [];
                this.canIntrigue = !0, this.setIntrigue = function(e) {
                    this.super.setIntrigue(e), nge.localData.get("freespin.inProgress") && nge.localData.set("slotMachineIntrigue", {
                        status: !1
                    })
                }, this._createPositionData = function(e, t) {
                    return {
                        coords: {
                            reel: e,
                            row: t
                        },
                        key: "7"
                    }
                }, this.runBonusRoutine = function(e) {
                    return nge.localData.set("bonusWon", "FreeSpins" === e.state), nge.localData.set("slotMachineResponseBonusSpin", !0), this.triggerRoutineCheck(e), "FreeSpins" !== e.state || nge.localData.get("freespin.inProgress") ? nge.localData.set("slotMachineResponseBonusSpin", !1) : (this.runBonusGame(), this.bonusGameTriggered = !0), !0
                }, this._checkBonusSymbol = function(e) {
                    return "7" === e
                }, this._getSymbolsToHold = function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        for (var a = e[n], s = 0; s < a.length; s++) this._checkBonusSymbol(a[s]) && t.push(this._createPositionData(s, n));
                    return t
                }, this._startDiamondJackpot = function() {
                    var e = nge.localData.get("slotMachine"),
                        t = void 0 !== e.lastResponse && e.lastResponse;
                    e = e.spinResult, this._holdSymbols(t ? t.spinResult.rows : e.rows)
                }, this._holdSymbols = function(e) {
                    e = this._getSymbolsToHold(e), nge.observer.fire("diamondJackpot.holdSymbols", e)
                }, this._finishDiamondJackpot = function() {
                    nge.localData.set("diamondJackpot.holdedSymbols", []), nge.localData.set("isSpinReadyToProceed", !0)
                }, this._getDiamondBonusPayoutAmount = function() {
                    var e = this._calculateBonusSymbolsCount(),
                        t = 0;
                    return nge.localData.get("payout.cfg").forEach((function(n) {
                        "scatter" === n.type && n.symbols.length === e && (t = n.payout)
                    })), {
                        payoutAmount: t,
                        winSymbolsCount: e
                    }
                }, this._calculateBonusSymbolWinAmount = function() {
                    return this._getDiamondBonusPayoutAmount().payoutAmount
                }, this._calculateBonusSymbolsCount = function() {
                    var e = nge.localData.get("slotMachine"),
                        t = void 0 !== e.lastResponse && e.lastResponse,
                        n = e.spinResult;
                    for (e = void 0 === e.spinResultStage2 ? n : e.spinResultStage2, t = (t ? t.spinResult : e).rows, n = e = 0; n < t.length; n++)
                        for (var a = t[n], s = 0; s < a.length; s++) "7" === a[s] && e++;
                    return e
                }, this._updateWinAmountData = function() {
                    var e = parseFloat(nge.localData.get("totalBet.value")),
                        t = nge.localData.get("slotMachine.totalBonusWin") || !1,
                        n = nge.localData.get("slotMachine"),
                        a = void 0 !== n.lastResponse && n.lastResponse,
                        s = n.slotWin;
                    t = a ? a.totalBonusWin : t || s.totalWin, e = "Ready" !== n.state ? e : 0, n = this._calculateBonusSymbolWinAmount(), e = parseFloat(t) + parseFloat(n) * e, nge.localData.set("jackpotDiamondWin", e), nge.localData.set("jackpotDiamondTotalWin", t), nge.observer.fire("freespin.restoreText", e)
                }, this._resetQuestLines = function() {
                    var e = nge.localData.get("slotMachine.slotWin.lineWinAmounts");
                    e = e && !!e.filter((function(e) {
                        return "Bonus" === e.type && "FreeSpins" === e.bonusName
                    })).length, nge.observer.fire("questline.reset", e);
                    var t = {
                        picked: "false",
                        starsLeft: "5",
                        starsTotal: "5"
                    };
                    e && (nge.observer.fire("questline.update", {
                        name: "QuestLineA",
                        data: t
                    }), nge.observer.fire("questline.update", {
                        name: "QuestLineB",
                        data: t
                    }), nge.observer.fire("questline.update", {
                        name: "QuestLineC",
                        data: t
                    }))
                }, this._layerSwitcherShowHandler = function(e) {
                    switch (e) {
                        case "gameFreeSpin":
                            this._resetQuestLines(), this._startDiamondJackpot(), this._updateWinAmountData();
                            break;
                        case "freespinEndPopup":
                            this._finishDiamondJackpot()
                    }
                }, this.onSpinCommandHandler = function() {
                    this.super.onSpinCommandHandler(), t = {}, n = [], nge.observer.fire("background.bottomEmitters.start"), nge.localData.set("questline.inProgress", !1), nge.localData.get("freespin.inProgress") && (nge.observer.fire("diamondJackpot.resetSymbols"), nge.observer.fire("questline.spinningAnimation.start"))
                }, this._computePickedLines = function() {
                    var e = nge.localData.get("slotMachine.slotWin.lineWinAmounts");
                    e && e.forEach((function(e) {
                        "Bonus" === e.type && e.bonusName.includes("QuestLine") && (t[e.bonusName] = e.params.picked)
                    }))
                }, this.checkIfBonus = function() {
                    var t = e.super.checkIfBonus(),
                        n = e.getLastData(),
                        a = !1;
                    return n.slotWin && n.slotWin.lineWinAmounts ? (n.slotWin.lineWinAmounts.forEach((function(e) {
                        -1 === e.type.indexOf("Bonus") || e.bonusName.includes("Quest") || (a = !0)
                    })), t && a) : t
                }, this.superSpinComplete = this.super.spinCompleteHandler, this.spinCompleteHandler = function() {
                    if (nge.observer.fire("background.bottomEmitters.stop"), nge.observer.fire("questline.spinningAnimation.stop"), !nge.localData.get("freespin.inProgress")) return this.super.spinCompleteHandler();
                    this._computePickedLines();
                    var e = (nge.localData.get("slotMachine.spinResultStage2") || {}).rows;
                    if (!e) return this.super.spinCompleteHandler();
                    this._holdSymbols(e), this._updateWinAmountData(), 0 < nge.localData.get("questline.flyingStarsAmount") ? nge.observer.fire("questline.startFlyAnimation", null, 800) : ("Ready" === nge.localData.get("slotMachine.state") && nge.observer.fire("slotMachine.showSymbols", null, 600), nge.rafSetTimeout(this.super.spinCompleteHandler, 500))
                }, this._reelStopCallback = function(e) {
                    var t = this._checkBonusSymbol,
                        n = this._createPositionData;
                    return function() {
                        if (nge.localData.get("freespin.inProgress")) {
                            var a = (nge.localData.get("slotMachine.spinResultStage2") || {}).rows;
                            if (a) {
                                a = nge.Lib.Helper.rowsToColumns(a)[e];
                                for (var s = [], o = 0; o < a.length; o++) t(a[o]) && s.push(n(e, o));
                                nge.observer.fire("diamondJackpot.changeSymbols", s)
                            }
                        }
                    }
                }, this.tryToChangeQuery = function() {
                    e.super.tryToChangeQuery(), "FreeSpins" === nge.localData.get("slotMachine.state") && nge.observer.fire("winlines.animateByOne.cycleComplete")
                }, this._subscribeReel = function(e) {
                    nge.observer.add("slotMachine.reel_" + e + ".customPostAnimation.stopped", this._reelStopCallback(e), !1, !0)
                }, this._subscribeReels = function() {
                    for (var e = 0; 5 > e; e++) this._subscribeReel(e)
                }, this._processResponseForWin = function(e) {
                    "Ready" !== e.state && (e.slotWin.lineWinAmounts = e.slotWin.lineWinAmounts.filter((function(e) {
                        return "Bonus" === e.type
                    })))
                }, this._spinResponseHandler = function(t) {
                    nge.localData.get("freespin.inProgress") && (e._processResponseForQuestlines(t), e._processResponseForWin(t))
                }, this._processResponseForQuestlines = function(t) {
                    if (t.spinResultStage2) {
                        var n = nge.Lib.Helper.rowsToColumns(t.spinResultStage2.rows),
                            a = t.slotWin.lineWinAmounts;
                        t = a.filter((function(e) {
                            return "Bonus" === e.type && "QuestStars" === e.bonusName
                        }))[0], a = a.filter((function(e) {
                            return "Bonus" === e.type && e.bonusName.includes("QuestLine")
                        })), t && e._processQuestStars(t, n), a.length && e._processQuestLines(a)
                    }
                }, this.customCheckCanSpin = function() {
                    var t = e.super.customCheckCanSpin(),
                        n = !!(nge.localData.get("slotMachine.slotWin.lineWinAmounts") || []).filter((function(e) {
                            return "LinePickBonus" === e.type
                        }))[0];
                    return t || n
                }, this._processQuestStars = function(e, t) {
                    var n = {};
                    if (nge.localData.set("questline.stars", n), e.wonSymbols.length) {
                        e.wonSymbols.forEach((function(e) {
                            n[e[0] + "_" + e[1]] = !0
                        }));
                        for (var a = 0; a < t.length; a++)
                            for (var s = 0; s < t[a].length; s++) n[a + "_" + s] && (n[a + "_" + s] = t[a][s]);
                        e.wonSymbols = []
                    }
                }, this._processQuestLines = function(e) {
                    nge.localData.set("questline.flyingStarsAmount", 0), e.forEach((function(e) {
                        if ("QuestLineC" === e.bonusName && e.wonSymbols && e.wonSymbols.length) {
                            e.params.wonSymbols = e.wonSymbols;
                            var t = nge.localData.get("slotMachine.spinResultStage2.rows");
                            t && (t[e.wonSymbols[0][1]][e.wonSymbols[0][0]] = "3"), e.wonSymbols = []
                        }
                        nge.observer.fire("questline.update", {
                            name: e.bonusName,
                            data: e.params
                        })
                    }))
                }, this.questlineAnimationFinished = function(a) {
                    var s = e._updateSlotMachineByWinnedQuestlines,
                        o = e.superSpinComplete;
                    for (var i in a && (n.push(a), t[a] = !1), t) nge.localData.get("questline." + i + ".animated") && (t[i] = !0);
                    if (a = Object.values(t), i = nge.localData.get("questline.flyingStarsAmount"), !a.includes("true") && !i) {
                        if (!n.length) return o();
                        n.forEach((function(e) {
                            return nge.localData.set("questline." + e + ".animated", !0)
                        })), nge.observer.fire("popup.show", {
                            popupName: "questlineWinPopup",
                            winnedQuestlines: n,
                            onHide: function() {
                                s(n), "Ready" === nge.localData.get("slotMachine.state") ? nge.rafSetTimeout(o, 800) : nge.observer.fire("slot.winProcessingFinish")
                            }
                        })
                    }
                }, this._updateSlotMachineByWinnedQuestlines = function(e) {
                    e.forEach((function(e) {
                        if ("QuestLineA" === e) {
                            var t = nge.Lib.Helper.jsObjClone(nge.localData.get("slotMachine"));
                            t.forced = !0, nge.observer.fire("freespin.counterUpdateEvent", t), nge.localData.set("questline.QuestLineA.freeSpins", null)
                        }
                        if ("QuestLineB" === e && nge.observer.fire("freespins.panelText.update"), "QuestLineC" === e) {
                            t = (e = nge.localData.get("questline.QuestLineC.wonSymbols"))[0][0];
                            var n = e[0][1];
                            nge.observer.fire("questline.c.finished"), nge.observer.fire("slotMachine.holdSymbol", {
                                reel: t,
                                row: n
                            }), nge.localData.set("questline.QuestLineC.wonSymbols"), nge.findOne("^slotMachineGameContainer").children[0].children[t].children[+n + 1].visible = !1, nge.localData.get("slotMachine.spinResult.rows")[e[0][1]][e[0][0]] = "7", nge.observer.fire("slotMachine.setSymbol", {
                                coords: [+t, +n],
                                key: "7"
                            }), nge.observer.fire("freespins.panelText.update"), nge.localData.get("scattersMatrix")[t][n] = !0
                        }
                    }))
                }, this.subscribe = function() {
                    var e = this;
                    this.super.subscribe(), this._subscribeReels(), nge.observer.add("questline.animation.finished", this.questlineAnimationFinished, !1, !0), nge.observer.add("diamondJackpot.finished", (function() {
                        e._counterFinished = !0
                    }), !1, !0), nge.observer.add("slotMachine.spinResponse", this._spinResponseHandler, !1, !0), nge.observer.add("win.big.preWinEvent", (function() {
                        "game" === nge.localData.get("layersSwitcher.currentLayer") && nge.observer.fire("win.big.preWinEventManual")
                    }), !1, !0), nge.observer.add("layersSwitcher.show", this._layerSwitcherShowHandler, !1, !0)
                }
            }))
        },
        1229: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this,
                    t = 0;
                this.wheelSpinSoundCount = 1, this.reelsCount = 5, this.triggersNeededForBonus = this.triggerReelsCount = 3, this.scatterSymbols = ["7"];
                var n = 0,
                    a = 0,
                    s = 0,
                    o = 0,
                    i = {},
                    r = !1;
                this.counterSounds = [], this.spinGameBackgroundSound.push({
                    s: "bs_background",
                    e: "sounds.freespinStartPopup.show",
                    action: "stop"
                }), this.buttonsClickSounds = [{
                    s: "click",
                    e: "button.clickSound",
                    relaunch: !0
                }, {
                    s: "click",
                    e: "button.click",
                    relaunch: !0
                }, {
                    s: "hover_0",
                    e: "button.hover_0"
                }, {
                    s: "hover_1",
                    e: "button.hover_1"
                }, {
                    s: "hover_2",
                    e: "button.hover_2"
                }, {
                    s: "spin_click",
                    e: "sound.spin_click.play",
                    relaunch: !0
                }, {
                    s: "spin_stop",
                    e: "sound.stop_click.play",
                    relaunch: !0
                }], this.scatterSounds = [{
                    s: "scatter_0",
                    e: "sound.scatter_0.play",
                    relaunch: !0
                }, {
                    s: "scatter_1",
                    e: "sound.scatter_1.play",
                    relaunch: !0
                }, {
                    s: "scatter_2",
                    e: "sound.scatter_2.play",
                    relaunch: !0
                }, {
                    s: "scatter_3",
                    e: "sound.scatter_3.play",
                    relaunch: !0
                }, {
                    s: "scatter_4",
                    e: "sound.scatter_4.play",
                    relaunch: !0
                }], this.freespinGameBackgroundSound = [{
                    s: "bn_background",
                    e: "bn_background.play",
                    action: "play",
                    loop: !0
                }, {
                    s: "bn_background",
                    e: "bn_background.stop",
                    action: "stop"
                }, {
                    s: "bn_background",
                    e: "sounds.freespinEndPopup.show",
                    action: "stop"
                }, {
                    s: "bn_background",
                    e: "Transport.close",
                    action: "stop"
                }], this.bigWinSounds = [{
                    s: "big_win_start",
                    e: "win.big.show"
                }, {
                    s: "intro_big_win",
                    e: "sounds.win.intro_big_win_manual.play"
                }, {
                    s: "intro_big_win",
                    e: "sounds.win.intro_big_win.stop",
                    action: "stop"
                }, {
                    s: "big_win",
                    e: "bigWinSound.Play",
                    loop: !0
                }, {
                    s: "big_win",
                    e: "bigWinSound.Stop",
                    action: "stop"
                }, {
                    s: "big_win",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "big_win",
                    e: "win.big.counterComplete",
                    action: "stop"
                }, {
                    s: "big_win_ending",
                    e: "win.big.counterComplete",
                    relaunch: !0
                }], this.regularWinSounds = [{
                    s: "win_regularWinLow",
                    e: "sounds.win.regularWinLow",
                    action: "play",
                    relaunch: !0
                }, {
                    s: "win_regularWinMid",
                    e: "sounds.win.regularWinMid",
                    action: "play",
                    relaunch: !0
                }, {
                    s: "win_regularWinHigh",
                    e: "sounds.win.regularWinHigh",
                    action: "play",
                    relaunch: !0
                }], this.popupSounds = [{
                    s: "freespin_popup_win",
                    e: "popupFinish.animate.start"
                }, {
                    s: "freespin_popup_start",
                    e: "sounds.freespinStartPopup.show"
                }, {
                    s: "intro_sound",
                    e: "sounds.freespinStartPopup.show",
                    action: "play",
                    loop: !0
                }, {
                    s: "intro_sound",
                    e: "sounds.freespinEndPopup.show",
                    action: "play",
                    loop: !0
                }, {
                    s: "intro_sound",
                    e: "sounds.intro.play",
                    action: "play",
                    loop: !0
                }, {
                    s: "diamond_jackpot_popup",
                    e: "sounds.diamondJackpot.show"
                }, {
                    s: "freespin_popup_start",
                    e: "sounds.hidePopup",
                    action: "stop"
                }, {
                    s: "freespin_popup_win",
                    e: "sounds.hidePopup",
                    action: "stop"
                }, {
                    s: "freespin_popup_close",
                    e: "sounds.hidePopup"
                }], this.counterSounds = [{
                    s: "win_counterClicking",
                    e: "sounds.win.counterClicking.play",
                    action: "play",
                    loop: !0
                }, {
                    s: "win_counterClicking",
                    e: "sounds.win.counterClicking.stop",
                    action: "stop"
                }, {
                    s: "win_counterClicking",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "win_counterClicking_stop",
                    e: "sounds.win.counterClicking.stop",
                    relaunch: !0
                }], this.intrigueSounds = [{
                    s: "intrigue_2",
                    e: "sounds.reel_2.intrigue.start",
                    relaunch: !0
                }, {
                    s: "intrigue_3",
                    e: "sounds.reel_3.intrigue.start",
                    relaunch: !0
                }, {
                    s: "intrigue_4",
                    e: "sounds.reel_4.intrigue.start",
                    relaunch: !0
                }, {
                    s: "intrigue_2",
                    e: "sounds.intrigue.stop",
                    action: "stop"
                }, {
                    s: "intrigue_3",
                    e: "sounds.intrigue.stop",
                    action: "stop"
                }, {
                    s: "intrigue_4",
                    e: "sounds.intrigue.stop",
                    action: "stop"
                }, {
                    s: "intrigue_2",
                    e: "slotMachine.spinComplete",
                    action: "stop"
                }, {
                    s: "intrigue_3",
                    e: "slotMachine.spinComplete",
                    action: "stop"
                }, {
                    s: "intrigue_4",
                    e: "slotMachine.spinComplete",
                    action: "stop"
                }], this.soundExt.push({
                    s: "reels_stop_all",
                    e: "sound.stopAllReels.play"
                }), this.soundExt.push({
                    s: "intro_sound",
                    e: "sounds.introSound.stop",
                    action: "stop"
                }), this.soundExt.push({
                    s: "star_scatter",
                    e: "questline.c.finished"
                });
                for (var l = 0; 15 > l; l++) this.soundExt.push({
                    s: "star_flying_" + l,
                    e: "sound.starFlying." + l
                });
                for (l = 0; 15 > l; l++) this.soundExt.push({
                    s: "star_landing_" + l,
                    e: "sound.starLanding." + l
                });
                for (l = 0; 3 > l; l++) this.soundExt.push({
                    s: "star_flickering_" + l,
                    e: "sound.starFlickering." + l
                });
                this.onSpinReadyToProceed = function() {
                    nge.observer.fire("sound.volume", {
                        s: "bs_background",
                        volume: 1,
                        duration: 500
                    })
                };
                var p = function() {
                        var t = nge.localData.get("freespin.inProgress"),
                            n = nge.Lib.Helper.getRandomInt(0, e.wheelSpinSoundCount - 1);
                        o = s = a = 0, t && nge.observer.fire("slotMachine.reelsStartRandSound." + n)
                    },
                    c = function(t) {
                        return function() {
                            nge.localData.get("slotMachine.spinResult.columns")[t].some((function(t) {
                                return -1 !== e.scatterSymbols.indexOf(t)
                            })) && (nge.localData.get("freespin.inProgress") ? function(e) {
                                var t = nge.Lib.Helper.rowsToColumns(i),
                                    n = nge.localData.get("slotMachine.spinResult.columns");
                                t = t[e].filter((function(e) {
                                    return "7" === e
                                })).length, n[e].filter((function(e) {
                                    return "7" === e
                                })).length > t && nge.observer.fire("sound.scatter_1.play"), 4 === e && (i = nge.localData.get("slotMachine.spinResult.rows"))
                            }(t) : (2 >= t - n && nge.observer.fire("sound.scatter_" + n + ".play"), n++))
                        }
                    },
                    m = function() {
                        r = !0, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .5, 100)
                        }))
                    },
                    u = function() {
                        r && (r = !1, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 100)
                        })))
                    },
                    g = function() {
                        r = !1
                    },
                    y = function() {
                        n = 0, r && u();
                        for (var t = 2; 4 >= t; t++) e.fadeSound("intrigue_" + t, 1, 1)
                    },
                    b = function() {
                        nge.observer.fire("sound.stopAllReels.play")
                    },
                    f = function(t) {
                        switch (t.popupName) {
                            case "diamondJackpotWin":
                                nge.observer.fire("sounds.diamondJackpot.show");
                                break;
                            case "freespinStartPopup":
                                nge.observer.fire("sounds.freespinStartPopup.show");
                                break;
                            case "freespinEndPopup":
                                e.fadeSound("bn_background", 0, 1500), nge.observer.fire("sounds.intro.play"), nge.rafSetTimeout((function() {
                                    nge.observer.fire("bn_background.stop"), e.fadeSound("bn_background", 1, 1)
                                }), 2e3)
                        }
                        e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .5, 100)
                        }))
                    },
                    h = function(t) {
                        switch (t) {
                            case "freespinEndPopup":
                                nge.observer.fire("sounds.hidePopup"), nge.observer.fire("sounds.introSound.stop");
                                break;
                            case "freespinStartPopup":
                                nge.observer.fire("sounds.hidePopup"), nge.observer.fire("bn_background.play"), nge.observer.fire("sounds.introSound.stop")
                        }
                        e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 100)
                        }))
                    },
                    d = function() {
                        "game" === nge.localData.get("layersSwitcher.currentLayer") && nge.observer.fire("sounds.win.intro_big_win_manual.play")
                    };
                this._onIntrigueStart = function(e) {
                    var t = this.fadeSound;
                    return function() {
                        2 < e && t("intrigue_" + (e - 1), 0, 500), nge.observer.fire("sounds.reel_" + e + ".intrigue.start")
                    }
                };
                var x = function(e) {
                        "jackpot" === nge.statesManager.getCurrentName() || e && e.getData() && e.getData().name && e.getData().name.includes("miniPaytableClickableZone") || (nge.observer.fire("button.hover_" + t), 3 <= ++t && (t = 0))
                    },
                    _ = function() {
                        var e = nge.localData.get("freespin");
                        e.inProgress && +e.spinsLeft == +e.spinsTotal && nge.observer.fire("bs_background.stop")
                    },
                    T = function() {
                        nge.observer.fire("sound.starFlying." + a), a++
                    },
                    S = function() {
                        nge.observer.fire("sound.starLanding." + s), s++
                    },
                    C = function() {
                        nge.observer.fire("sound.starFlickering." + o), o++
                    },
                    P = function() {
                        i = nge.localData.get("slotMachine.spinResult.rows") || nge.localData.get("slotMachine.lastResponse.spinResult.rows")
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("freespin.start", P, !1, !0), nge.observer.add("questline.flyAnimation.started", T, !1, !0), nge.observer.add("questline.flyAnimation.finished", S, !1, !0), nge.observer.add("sound.questline.done", C, !1, !0), nge.observer.add("win.big.hide", _, !1, !0), nge.observer.add("button.hover", x, !1, !0), nge.observer.add("bs_background.stop", (function() {
                        return nge.observer.fire("background.idleAnimation.hide")
                    }), !1, !0), nge.observer.add("sounds.freespinStartPopup.show", (function() {
                        return nge.observer.fire("background.idleAnimation.hide")
                    }), !1, !0), nge.observer.add("slotMachine.spinCommand", y, !1, !0), nge.observer.add("slotMachine.spinStart", p, !1, !0);
                    for (var t = 0; t < this.reelsCount; t++) nge.observer.add("slotMachine.reel_" + t + ".customPostAnimation.stopped", c(t), !1, !0);
                    nge.observer.add("sounds.win.intro_big_win.play", d, !1, !0), nge.observer.add("slotMachine.reel_4.customPostAnimation.stopped", b, !1, !0), nge.observer.add("popup.show", f, !1, !0), nge.observer.add("popup.hideStart", h, !1, !0), nge.observer.add("sounds.win.regularWinLow", m, !1, !0), nge.observer.add("sounds.win.regularWinMid", m, !1, !0), nge.observer.add("sounds.win.regularWinHigh", m, !1, !0), nge.observer.add("sound.stopped.win_regularWinLow", u, !1, !0), nge.observer.add("sound.stopped.win_regularWinMid", u, !1, !0), nge.observer.add("sound.stopped.win_regularWinHigh", u, !1, !0), nge.observer.add("Transport.close", g, !1, !0), nge.observer.add("slotMachine.reel_2.intrigue.start", this._onIntrigueStart(2), !1, !0), nge.observer.add("slotMachine.reel_3.intrigue.start", this._onIntrigueStart(3), !1, !0), nge.observer.add("slotMachine.reel_4.intrigue.start", this._onIntrigueStart(4), !1, !0)
                }
            }))
        },
        1230: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Win = nge.App.DjGameBase.Mlm.Brain.Win.extend((function() {
                this.regularWinParams = {
                    low: 1.99,
                    mid: 4.99,
                    high: 10
                };
                var e = [];
                this.regularWinInterruptOnFreespinEnd = !0;
                var t = this.showWinPopupHandler;
                this.showWinPopupHandler = function(e) {
                    var n = nge.localData.get("freespin"),
                        a = n.spinsTotal,
                        s = n.spinsLeft;
                    n = n.inProgress;
                    var o = nge.localData.get("slotMachine.slotWin"),
                        i = void 0 === o.lineWinAmounts ? [] : o.lineWinAmounts;
                    o = i.filter((function(e) {
                        return "LinePickBonus" === e.type && "FullLineJackpot" === e.bonusName
                    }))[0];
                    var r = nge.localData.get("freespin");
                    return i = i.filter((function(e) {
                        return "Bonus" === e.type && "FreeSpins" === e.bonusName
                    }))[0], r = !r.inProgress || i, n || nge.observer.fire("background.winAnimation.start"), o && r ? (nge.observer.fire("bigWin.sevensJackot.preshow"), t(e)) : isNaN(+s) || +s == +a || 0 === parseInt(s, 10) ? t(e) : void 0
                };
                var n = function(t) {
                    return function() {
                        if (nge.localData.get("freespin.inProgress")) {
                            var n = 0;
                            nge.localData.get("slotMachine.spinResult.columns")[t].forEach((function(a, s) {
                                "7" !== a || e[t][s] || (e[t][s] = !0, n++)
                            })), nge.localData.set("scattersMatrix", e), n && nge.observer.fire("freespins.panelText.update", n)
                        }
                    }
                };
                this.freespinStartHandler = function() {
                    var t = nge.localData.get("slotMachine.spinResult.rows") || nge.localData.get("slotMachine.lastResponse.spinResult.rows");
                    nge.Lib.Helper.rowsToColumns(t).forEach((function(t, n) {
                        e[n] = t.map((function(e) {
                            return "7" === e
                        }))
                    })), nge.localData.set("scattersMatrix", e)
                }, this.bigWinHideHandler = function() {
                    nge.localData.get("additionalPopup.willBeShownNext") || nge.localData.get("autospin") && 0 !== nge.localData.get("autospinAmount") || nge.observer.fire("winlines.animateByOne", null, 1);
                    var e = !!nge.localData.get("slotMachine.slotWin.lineWinAmounts").filter((function(e) {
                        return "LinePickBonus" === e.type
                    }))[0];
                    (nge.localData.get("freespin.inProgress") || e) && nge.observer.fire("winlines.animateByOne.cycleComplete", null, 1)
                }, this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("freespin.start", this.freespinStartHandler, !1, !0), nge.observer.add("freespin.end", this.freespinEndHandler, !1, !0), nge.observer.add("slotMachine.spinCommand", (function() {
                        nge.observer.fire("background.winAnimation.stop")
                    }), !1, !0);
                    for (var e = 0; 5 > e; e++) nge.observer.add("slotMachine.reel_" + e + ".animation.stop", n(e), !1, !0)
                }
            }))
        },
        1231: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1232: function(e, t) {
            nge.Mlm.Transport.Helper.bonusWinlinesFields.LinePickBonus = {}, nge.Mlm.Transport.Helper.bonusWinlinesFields.LinePickBonus.FullLineJackpot = [], nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.QuestLineA = ["params"], nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.QuestLineB = ["params"], nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.QuestLineC = ["params"], nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.QuestStars = []
        },
        5: function(e, t, n) {
            n(1094), n(1095), n(1096), n(1097), n(1098), n(1099), n(1100), n(1101), n(1102), n(1103), n(1104), n(1105), n(1106), n(1107), n(1108), n(1109), n(1110), n(1111), n(1112), n(1113), n(1114), n(1115), n(1116), n(1117), n(1118), n(1119), n(1120), n(1121), n(1122), n(1123), n(1124), n(1125), n(1126), n(1127), n(1128), n(1129), n(1130), n(1131), n(1132), n(1133), n(1134), n(1135), n(1136), n(1137), n(1138), n(1139), n(1140), n(1141), n(1142), n(1143), n(1144), n(1145), n(1146), n(1147), n(1148), n(1149), n(1150), n(1151), n(1152), n(1153), n(1154), n(1155), n(1156), n(1157), n(1158), n(1159), n(1160), n(1161), n(1162), n(1163), n(1164), n(1165), n(1166), n(1167), n(1168), n(1169), n(1170), n(1171), n(1172), n(1173), n(1174), n(1175), n(1176), n(1177), n(1178), n(1179), n(1180), n(1181), n(1182), n(1183), n(1184), n(1185), n(1186), n(1187), n(1188), n(1189), n(1190), n(1191), n(1192), n(1193), n(1194), n(1195), n(1196), n(1197), n(1198), n(1199), n(1200), n(1201), n(1202), n(1203), n(1204), n(1205), n(1206), n(1207), n(1208), n(1209), n(1210), n(1211), n(1212), n(1213), n(1214), n(1215), n(1216), n(1217), n(1218), n(1219), n(1220), n(1221), n(1222), n(1223), n(1224), n(1225), n(1226), n(1227), n(1228), n(1229), n(1230), n(1231), n(1232)
        }
    }
]);