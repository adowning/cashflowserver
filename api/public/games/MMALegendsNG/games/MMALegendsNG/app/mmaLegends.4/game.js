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
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, n, a) {
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
}, $jscomp.polyfill("Object.is", (function(e) {
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
}), "es6", "es3"), (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1076: function(e, t) {
            nge.appNS = "MmaLegends", nge.App[nge.appNS] = {}
        },
        1077: function(e, t, n) {
            nge.realPathPrefix = "../../", nge.appPath = "app/mmaLegends.4/", nge.gameCode = "278", nge.loaderTpl = "netgame", nge.loaderShowGamePreview = !1, nge.loadCfg = []
        },
        1078: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                var e = [50];
                nge.App.addSysInstancesMode("SlimJackpot"), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang);
                var t = nge.Cfg.Main.lang;
                nge.Lib.Helper.makeReactive(nge.Cfg.Main, "lang", (function(e) {
                    nge.App.removeSysInstancesMode("lang_" + t), nge.App.addSysInstancesMode("lang_" + nge.Cfg.Main.lang), t = e
                })), this.run = function() {
                    this.runDefault(), nge.localData.set("lines.cfg", e)
                }, nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("intrigue", "blinker", "background", "winlines", "popup", "bigWinUni", "miniPaytable", "shaker", "intrigueZoomer", "betSlipPanel", "betSlip", "respin")
            })), nge.Cfg.Main.project = "mmaLegends", nge.Cfg.Main.title = "MMA Legends", nge.Cfg.Main.gameCode = "278", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.72"
        },
        1079: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1080: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    bs_wheel_spin_0: "game:/sounds/reel_spin",
                    bs_background: "game:sounds/basic_background",
                    bn_background: "game:sounds/freespin_background",
                    intro_sound: "game:sounds/ambience",
                    sr_bell: "game:/sounds/bell",
                    intrigue: "game:/sounds/intrigue",
                    intro_big_win: "game:/sounds/big_win_intro",
                    big_win: "game:/sounds/big_win",
                    big_win_start: "game:/sounds/big_win_start",
                    big_win_ending: "game:/sounds/big_win_end",
                    reels_stop_0: "game:sounds/reel_stop_0",
                    reels_stop_1: "game:sounds/reel_stop_1",
                    reels_stop_2: "game:sounds/reel_stop_2",
                    reels_stop_3: "game:sounds/reel_stop_3",
                    reels_stop_4: "game:sounds/reel_stop_4",
                    scatter_0: "game:sounds/scatter_0",
                    scatter_1: "game:sounds/scatter_1",
                    scatter_2: "game:sounds/scatter_2",
                    freespin_popup: "game:sounds/freespin_popup",
                    freespin_popup_add: "game:sounds/freespin_popup_add",
                    freespin_popup_win: "game:sounds/freespin_popup_win",
                    freespin_popup_close: "game:sounds/freespin_popup_close",
                    respin: "game:sounds/respin",
                    respin_start: "game:sounds/respin_start",
                    respin_background: "game:sounds/respin_background",
                    respin_wild_0: "game:sounds/respin_wild",
                    respin_wild_1: "game:sounds/respin_wild",
                    respin_wild_2: "game:sounds/respin_wild",
                    respin_wild_3: "game:sounds/respin_wild",
                    spin_click: "game:/sounds/spin",
                    spin_stop: "game:/sounds/spin_stop",
                    hover_0: "game:sounds/hover",
                    hover_1: "game:sounds/hover",
                    hover_2: "game:sounds/hover",
                    click: "game:sounds/button",
                    bet_slip: "game:sounds/bet_slip",
                    bet_slip_symbol: "game:sounds/select_0",
                    bet_slip_spins_btn: "game:sounds/select_1",
                    bet_slip_plus_minus: "game:sounds/select_2",
                    bet_slip_exit: "game:sounds/exit",
                    bet_slip_place_bet: "game:sounds/place_bet",
                    bet_slip_on_collect: "game:sounds/to_collect",
                    totalizer_win: "game:sounds/totalizer_win",
                    totalizer_lose: "game:sounds/totalizer_lose",
                    win_regularWinLow: "game:sounds/win_0",
                    win_regularWinMid: "game:sounds/win_1",
                    win_regularWinHigh: "game:/sounds/win_2",
                    regular_counter: "game:/sounds/counter",
                    counter_stop: "game:/sounds/counter_stop",
                    jackpot_online_background: "game:sounds/jackpot_online_background",
                    jackpot_online_coincidence_1: "game:sounds/jackpot_online_coincidence_1",
                    jackpot_online_coincidence_2: "game:sounds/jackpot_online_coincidence_2",
                    jackpot_online_coincidence_3: "game:sounds/jackpot_online_coincidence_3",
                    jackpot_online_finish_jackpot_popup: "game:sounds/jackpot_online_finish_jackpot_popup",
                    jackpot_online_won_jackpot_movie: "game:sounds/jackpot_online_won_jackpot_movie"
                }
            }))
        },
        1081: function(e, t) {
            nge.App[nge.appNS].Cfg.Spine = nge.Cfg.Spine.extend((function() {
                this.preloadForStates = {
                    play: []
                }, this.preloadForEvents = []
            }))
        },
        1082: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        1083: function(e, t) {
            nge.App[nge.appNS].Com.Autospin = {}
        },
        1084: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.Controller = nge.App.DjGameBase.Com.Autospin.Controller.extend((function() {
                this.advancedAutoplay = this.respinStopAutospin = !1, this.autospinRunExceptions.push((function() {
                    return nge.localData.get("betSlip.opened")
                })), this.autospinRunExceptions.push((function() {
                    return nge.localData.get("betSlipFinishedWithWin")
                }))
            }))
        },
        1085: function(e, t) {
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
        1086: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.Mobile = {}
        },
        1087: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.Mobile.Controller = nge.App[nge.appNS].Com.Autospin.Controller.extend((function() {
                this.useAmountSetter = !1, this.autospinRunExceptions.push((function() {
                    return nge.localData.get("betSlip.opened")
                }))
            }))
        },
        1088: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        1089: function(e, t) {
            nge.App[nge.appNS].Com.Background.Controller = nge.Com.Base.extend((function() {
                function e(e, t, n, a) {
                    (e = nge.tween.add(e).to({
                        alpha: t
                    }, n)).onComplete.addOnce((function() {
                        a && a()
                    })), e.start()
                }
                var t, n, a, s, o = this,
                    i = !1,
                    p = null,
                    l = null,
                    r = null,
                    c = null,
                    m = null,
                    y = null,
                    u = null,
                    b = !1,
                    g = !1;
                this.create = function() {
                    this.createDefault(), i || (o.subscribe(), i = !0), p = nge.findOne("^bgAnimationIdle"), l = nge.findOne("^bgAnimationWin"), m = nge.findOne("^glowAnimation"), r = nge.findOne("^bgAnimationLeft"), c = nge.findOne("^bgAnimationRight"), y = nge.findOne("^bgAnimationFs"), u = nge.findOne("^glowAnimationFs"), t = nge.findOne("^glowAnimationContainer"), n = nge.findOne("^characterAnimationContainer"), a = nge.findOne("^mainBgIdleAnimationContainer"), s = nge.findOne("^mainBgWinAnimationContainer"), t.visible = !0, n.visible = !0, a.visible = !0, s.visible = !0, g = b = !1
                };
                var h = function(o) {
                        switch (o) {
                            case "game":
                            case "gameOfferPopup":
                            case "gameOffer":
                                u.stop(), g || (n.visible = !0, n.alpha = 1, a.visible = !0, a.alpha = 1, p.setAnimationByMode(0, "bg_idle", nge.spine.LOOP), l.stop(), r.setAnimationByMode(0, "character_left_eyes_clipping", nge.spine.LOOP), c.setAnimationByMode(0, "character_right_eyes_clipping", nge.spine.LOOP)), g = !1;
                                break;
                            case "freespinEndPopup":
                                u.stop(), y.stop(), g = !0, n.visible = !0, n.alpha = 0, e(n, 1, 500, null), a.visible = !0, a.alpha = 0, e(a, 1, 500, null), p.setAnimationByMode(0, "bg_idle", nge.spine.LOOP), r.setAnimationByMode(0, "character_left_eyes_clipping", nge.spine.LOOP), c.setAnimationByMode(0, "character_right_eyes_clipping", nge.spine.LOOP);
                                break;
                            case "gameFreeSpin":
                                m.stop(), y.setAnimationByMode(0, "free_spin_idle", nge.spine.LOOP), u.setAnimationByMode(0, "fs_glow_idle", nge.spine.LOOP), t.visible = !0, t.alpha = 1, e(n, 0, 500, (function() {
                                    n.visible = !1, n.alpha = 1, r.stop(), c.stop()
                                })), e(a, 0, 500, (function() {
                                    a.visible = !1, a.alpha = 1, p.stop()
                                })), e(s, 0, 500, (function() {
                                    s.visible = !1, s.alpha = 1, l.stop()
                                }))
                        }
                    },
                    f = function() {
                        b = !0, nge.localData.get("freespin.inProgress") && "gameFreeSpin" === nge.localData.get("layersSwitcher.currentLayer") ? (y.setAnimationByMode(0, "free_spin_win", nge.spine.LOOP), u.setAnimationByMode(0, "fs_glow_win", nge.spine.LOOP)) : (l.setAnimationByMode(0, "bg_win", nge.spine.LOOP), s.visible = !0, s.alpha = 1, p.stop(), m.setAnimationByMode(0, "glow_win", nge.spine.LOOP), t.visible = !0, t.alpha = 1)
                    },
                    d = function() {
                        b && (nge.localData.get("freespin.inProgress") ? (y.setAnimationByMode(0, "free_spin_idle", nge.spine.LOOP), u.setAnimationByMode(0, "fs_glow_idle", nge.spine.LOOP)) : (p.setAnimationByMode(0, "bg_idle", nge.spine.LOOP), e(s, 0, 300, (function() {
                            s.visible = !1, s.alpha = 1, l.stop()
                        })), e(t, 0, 500, (function() {
                            t.visible = !1, t.alpha = 1, m.stop()
                        })))), b = !1
                    },
                    x = function() {
                        g = b = !1, m.stop(), u.stop()
                    };
                this.subscribe = function() {
                    nge.observer.add("winlines.animateAll", f), nge.observer.add("slotMachine.spinCommand", d), nge.observer.add("layersSwitcher.switched", h), nge.observer.add("Transport.close", x)
                }
            }))
        },
        1090: function(e, t) {
            nge.App[nge.appNS].Com.Background.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "backgroundAnimationContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "characterAnimationContainer",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "bgAnimationLeft",
                                    assetKey: "bgAnimationLeft",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 540,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "bgAnimationRight",
                                    assetKey: "bgAnimationRight",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 540,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "glowAnimationContainer",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "glowAnimation",
                                    assetKey: "glowAnimation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 540,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "glowAnimationFs",
                                    assetKey: "glowAnimationFs",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 540,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "mainBgWinAnimationContainer",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "bgAnimationWin",
                                    assetKey: "bgAnimation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 540,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "mainBgIdleAnimationContainer",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "bgAnimationIdle",
                                    assetKey: "bgAnimation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 540,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.SPINE,
                                name: "bgAnimationFs",
                                assetKey: "bgAnimationFs",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 540,
                                isVisible: !1
                            }]
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgArea",
                            x: 0,
                            y: 0,
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
        1091: function(e, t) {
            nge.App[nge.appNS].Com.BetSlip = {}
        },
        1092: function(e, t) {
            nge.App[nge.appNS].Com.BetSlip.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = !1,
                    n = null,
                    a = [1, 2, 3, 4, 5],
                    s = null,
                    o = 0,
                    i = 0,
                    p = null,
                    l = null,
                    r = !1,
                    c = !1,
                    m = !1,
                    y = function() {
                        if (!p) throw Error("Invalid _currentPayout");
                        if (!p.bets || !p.bets[o]) throw Error("Invalid _currentPayout.bets (" + p.bets + ") or _currentBetIndex (" + o + ")");
                        return p.bets[o]
                    },
                    u = function(e) {
                        if (!s || !Array.isArray(s)) throw Error("Invalid payouts");
                        return s.filter((function(t) {
                            return +t.symbol == +e
                        }))
                    },
                    b = function(e, t) {
                        return e[(void 0 === t ? 0 : t) || 0]
                    },
                    g = function(e) {
                        o = e;
                        var t = p.bets,
                            a = t[e];
                        a = a.toFixed(2), n.changeBetText(a, 0 === e, e === t.length - 1), nge.observer.fire("betSlip.betUpdated", a)
                    },
                    h = function(e, t) {
                        if (e && e.length)
                            for (var a = 0; 3 > a; a++) {
                                var s = b(e, a);
                                s = {
                                    collect: s.toCollect,
                                    inSpins: s.spins,
                                    pays: (s.factor * t).toFixed(2)
                                }, n.updatePlaysetTexts(a, s)
                            }
                    },
                    f = function(e) {
                        null !== (e = void 0 === e ? null : e) && (p = e), e = y();
                        var t = Object.assign({}, p);
                        t.factor *= e, nge.observer.fire("betSlip.payoutUpdated", {
                            payout: t,
                            bet: e
                        }), t = u(a[i]), h(t, e)
                    },
                    d = function() {
                        g(Math.max(o - 1, 0)), f(), n.showPlaceBetButtonAnimation()
                    },
                    x = function() {
                        g(Math.min(o + 1, p.bets.length - 1)), f(), n.showPlaceBetButtonAnimation()
                    },
                    _ = function() {
                        nge.localData.get("betSlip.sendedPlayRequest") || (n.changeVisibility(!1), nge.observer.fire("betSlip.onClose"), S(!1), n.enableAllBlockers())
                    },
                    T = function() {
                        l = p = s = null, i = o = 0, r = !1
                    },
                    P = function() {
                        if (!r) {
                            var e = y(),
                                t = p.id,
                                n = nge.localData.get("balance");
                            if (0 > nge.Lib.Validator.float(n.totalAmount, !0) - nge.Lib.Validator.float(e, !0)) return nge.observer.fire("slotMachine.spinFailed.noBalance"), _(), T(), !1;
                            r = !0, nge.observer.fire("betSlip.sendPlayRequest", {
                                bet: e,
                                betId: t
                            }), nge.localData.set("betSlip.sendedPlayRequest", !0)
                        }
                    },
                    S = function(e) {
                        var t = nge.findOne("^betSlipPanelContainer");
                        (e = e ? nge.findOne("^betSlipPanelTopParentContainer") : nge.findOne("^betSlipPanelBottomParentContainer")) && t && e.addChild(t)
                    },
                    E = function(e) {
                        n.changeVisibility(!0), n.disableAllFrames();
                        for (var t = 0; 3 > t; t++) n.updatePlaysetTexts(t, {
                            collect: "-",
                            inSpins: "-",
                            pays: "-"
                        });
                        n.changeBetText("-", !0, !0), m = c = !1, n.enableAllBlockers(), n.showDescriptionAnimationSymbol(), nge.observer.fire("betSlip.showDefaultPayouts", {
                            toCollect: "-",
                            spins: "-",
                            bet: "-",
                            factor: "-",
                            symbol: "symbol_default"
                        }), s = e, l = null, S(!0)
                    },
                    j = function() {
                        nge.localData.set("betSlip.sendedPlayRequest", !1), _(), T()
                    },
                    M = function() {
                        T(), nge.localData.set("betSlip.sendedPlayRequest", !1)
                    };
                this.subscribe = function() {
                    nge.observer.add("betSlip.closeBtnPressed", _);
                    for (var e = {
                            $jscomp$loop$prop$i$30: 0
                        }; e.$jscomp$loop$prop$i$30 < a.length;
                        (e = {
                            $jscomp$loop$prop$i$30: e.$jscomp$loop$prop$i$30
                        }).$jscomp$loop$prop$i$30++) nge.observer.add("betSlip.symbol_" + e.$jscomp$loop$prop$i$30, function(e) {
                        return function() {
                            var t = e.$jscomp$loop$prop$i$30;
                            if (0 > t || t >= a.length) throw Error("Invalid index " + t);
                            i = t, n.symbolSelected(t), t = u(a[t]);
                            var s = b(t, l);
                            if (!s) throw Error("Invalid payout on symbolSelected");
                            if (f(s), !(s = s.bets) || !Array.isArray(s) || !s.length) throw Error("Invalid array best " + s);
                            g(o), s = p ? y() : 5, h(t, s), c || (c = !0, n.disableSpinsBlocker())
                        }
                    }(e));
                    for (e = {
                            $jscomp$loop$prop$i$0$32: 0
                        }; 3 > e.$jscomp$loop$prop$i$0$32;
                        (e = {
                            $jscomp$loop$prop$i$0$32: e.$jscomp$loop$prop$i$0$32
                        }).$jscomp$loop$prop$i$0$32++) nge.observer.add("betSlip.numberOfSpinsBtn" + e.$jscomp$loop$prop$i$0$32 + "Click", function(e) {
                        return function() {
                            var t = e.$jscomp$loop$prop$i$0$32;
                            if (0 > t || 3 <= t) throw Error("Invalid index " + t);
                            n.playsetSelected(t), l = t;
                            var a = u(+p.symbol);
                            a = b(a, l), f(a), nge.observer.fire("betSlip.playsetUpdated", t), m || (m = !0, n.disableBetBlocker())
                        }
                    }(e));
                    nge.observer.add("betSlip.selectBetMinusBtn", d), nge.observer.add("betSlip.selectBetPlusBtn", x), nge.observer.add("betSlip.placeBet", P), nge.observer.add("betSlip.show", E), nge.observer.add("betSlip.playResponse", j), nge.observer.add("transport.close", M)
                }, this.create = function() {
                    e.super.create(), t || (e.subscribe(), t = !0), n || (n = e.getInstance("View")), n.create()
                }
            }))
        },
        1093: function(e, t) {
            nge.App[nge.appNS].Com.BetSlip.View = nge.Com.Base.extend((function() {
                var e = this,
                    t = this,
                    n = null,
                    a = [],
                    s = [],
                    o = null,
                    i = null,
                    p = null,
                    l = null,
                    r = null,
                    c = null,
                    m = null,
                    y = null,
                    u = null,
                    b = null,
                    g = null,
                    h = null,
                    f = null,
                    d = null,
                    x = null,
                    _ = null,
                    T = null;
                this.disableAllFrames = function() {
                    a.forEach((function(e) {
                        e.visible = !1
                    }))
                };
                var P = function() {
                    s.forEach((function(e) {
                        e.button.loadTexture("betSlipNumberOfSpinsInactiveFrame"), e.button.interactive = !0
                    }))
                };
                this.changeBetText = function(e, t, n) {
                    n = void 0 !== n && n, o.text = e, void 0 !== t && t ? i.disable(3) : i.enable(), n ? p.disable(3) : p.enable()
                }, this.changeVisibility = function(e) {
                    n.visible = e, P(), r.visible = !1, l.disable()
                }, this.updatePlaysetTexts = function(e, t) {
                    t = void 0 === t ? {
                        collect: 999,
                        inSpins: 999,
                        pays: 999
                    } : t;
                    var n = s[e];
                    if (!n) throw Error("Cannot get playset buttons from " + s + "[" + e + "]");
                    e = n.collect;
                    var a = nge.i18n.get("BET_SLIP_NUMBER_OF_SPINS_COLLECT");
                    a = nge.i18n.applyTextParams(a, {
                        arg1: t.collect
                    }), e.text = a, e = n.inSpins, a = nge.i18n.get("BET_SLIP_NUMBER_OF_SPINS_IN_SPINS"), a = nge.i18n.applyTextParams(a, {
                        arg1: t.inSpins
                    }), e.text = a, n = n.pays, e = nge.i18n.get("BET_SLIP_NUMBER_OF_SPINS_PAYS"), t = nge.i18n.applyTextParams(e, {
                        arg1: t.pays
                    }), n.text = t
                }, this.symbolSelected = function(t) {
                    e.disableAllFrames(), a[t].visible = !0
                }, this.playsetSelected = function(e) {
                    P(), (e = s[e].button).loadTexture("betSlipNumberOfSpinsActiveFrame"), e.interactive = !1, r.visible = !0, l.enable()
                };
                var S = function(e) {
                    d && d.stop(), (d = nge.tween.add(e).to({
                        alpha: 1
                    }, 600, nge.Lib.Tween.Easing.Linear.None, !1, 0, -1, !0)).start()
                };
                this.showDescriptionAnimationSymbol = function() {
                    u.visible = !0, u.alpha = 0, S(u)
                }, this.showPlaceBetButtonAnimation = function() {
                    this.stopDescriptionAnimation(), x.visible = !0, x.alpha = 0, (_ = nge.tween.add(x).to({
                        alpha: 1
                    }, 600, nge.Lib.Tween.Easing.Linear.None, !1, 0, -1, !0)).start()
                }, this.disableSpinsBlocker = function() {
                    var e = nge.tween.add(c).to({
                        alpha: 0
                    }, 300);
                    e.onComplete.addOnce((function() {
                        c.visible = !1
                    })), e.start(), b.removeClass("betSlipDescriptionInactive"), b.addClass("betSlipDescriptionActive"), u.visible = !1, g.visible = !0, g.alpha = 0, S(g), m.visible = !1, y.visible = !0
                }, this.disableBetBlocker = function() {
                    var e = nge.tween.add(y).to({
                        alpha: 0
                    }, 300);
                    e.onComplete.addOnce((function() {
                        y.visible = !1
                    })), g.visible = !1, f.visible = !0, f.alpha = 0, S(f), h.removeClass("betSlipDescriptionInactive"), h.addClass("betSlipDescriptionActive"), e.start(), T = nge.rafSetTimeout((function() {
                        _ || t.showPlaceBetButtonAnimation()
                    }), 5e3)
                }, this.enableAllBlockers = function() {
                    c.alpha = 1, y.alpha = 1, c.visible = !0, m.visible = !0, y.visible = !1, x.visible = !1, b.removeClass("betSlipDescriptionActive"), b.addClass("betSlipDescriptionInactive"), h.removeClass("betSlipDescriptionActive"), h.addClass("betSlipDescriptionInactive"), d && (d.stop(), d = null), _ && (_.stop(), _ = null), nge.rafClearTimeout(T), T = null
                }, this.stopDescriptionAnimation = function() {
                    d && (d.stop(), d = null), u.visible = !1, g.visible = !1, f.visible = !1
                }, this.stopPlaceBetAnimation = function() {
                    _ && (_.stop(), _ = null), x.visible = !1
                }, this.create = function() {
                    n = nge.findOne("^betSlipGroup"), a = [];
                    for (var t = 0; 5 > t; t++) {
                        var d = nge.findOne("^betSlipSymbol" + t + "Frame");
                        a.push(d)
                    }
                    for (s = [], t = 0; 3 > t; t++) {
                        d = nge.findOne("^betSlipNumberOfSpinsBtn" + t);
                        var _ = nge.findOne("^betSlipNumberOfSpinsTxt_" + t + "_0"),
                            T = nge.findOne("^betSlipNumberOfSpinsTxt_" + t + "_1"),
                            S = nge.findOne("^betSlipNumberOfSpinsTxt_" + t + "_2");
                        s.push({
                            button: d,
                            collect: _,
                            inSpins: T,
                            pays: S
                        })
                    }
                    o = nge.findOne("^betSlipSelectBetTxt"), i = nge.findOne("^betSlipSelectBetMinusBtn"), p = nge.findOne("^betSlipSelectBetPlusBtn"), r = nge.findOne("^betSlipPlaceBetButtonGroup"), l = nge.findOne("^betSlipPlaceBetButton"), (x = nge.findOne("^betSlipButtonPlaceBetAnimation")).texture = x.spritesheet.textures[2], c = nge.findOne("^betSlipNumberOfSpinsBlocker"), m = nge.findOne("^betSlipSelectBetBlocker"), y = nge.findOne("^betSlipSelectBetArrowBlocker"), u = nge.findOne("^BET_SLIP_SELECT_SYMBOL_ANIMATION"), b = nge.findOne("^BET_SLIP_DESCRIPTION_NUMBER_OF_SPINS"), g = nge.findOne("^BET_SLIP_DESCRIPTION_NUMBER_OF_SPINS_ANIMATION"), h = nge.findOne("^BET_SLIP_SELECT_BET"), f = nge.findOne("^BET_SLIP_SELECT_BET_ANIMATION"), P(), e.changeVisibility(!1)
                }
            }))
        },
        1094: function(e, t) {
            nge.App[nge.appNS].Com.BetSlip.Tpl = function() {
                var e = nge.appPath + "img/",
                    t = {
                        fill: 16777215,
                        font: "29pt futuraptheavy",
                        align: "center"
                    },
                    n = {
                        fill: 16577480,
                        font: "26pt futuraptheavy",
                        align: "center"
                    };
                return {
                    styles: {
                        ".betSlipDescriptionActive": {
                            style: {
                                fill: 16295941,
                                font: "26pt futuraptheavy",
                                align: "center"
                            }
                        },
                        ".betSlipDescriptionInactive": {
                            style: {
                                fill: 15327167,
                                font: "26pt futuraptheavy",
                                align: "center"
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "betSlipBetFrame",
                            fullPath: e + "betSlip/bet_slip_bet_frame.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipButtonCloseFrames",
                            fullPath: e + "betSlip/bet_slip_button_close_frames.png",
                            frameWidth: 156,
                            frameHeight: 156
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipButtonMinusFrames",
                            fullPath: e + "betSlip/bet_slip_button_minus_frames.png",
                            frameWidth: 208,
                            frameHeight: 152
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipButtonPlusFrames",
                            fullPath: e + "betSlip/bet_slip_button_plus_frames.png",
                            frameWidth: 208,
                            frameHeight: 152
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipButtonPlaceBet",
                            fullPath: e + "betSlip/place_bet_btn.png",
                            frameWidth: 352,
                            frameHeight: 152
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipMainFrame",
                            fullPath: e + "betSlip/bet_slip_main_frame_x4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipNumberOfSpinsActiveFrame",
                            fullPath: e + "betSlip/bet_slip_number_of_spins_active_frame.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipNumberOfSpinsInactiveFrame",
                            fullPath: e + "betSlip/bet_slip_number_of_spins_inactive_frame.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipSymbolFrame_asset",
                            fullPath: e + "betSlip/bet_slip_symbol_frame.9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipBlocker",
                            fullPath: e + "betSlip/shadow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipFrameSmall",
                            fullPath: e + "betSlip/select_frame.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipFrameBigSide",
                            fullPath: e + "betSlip/select_frame_big_side.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipFrameBigTop",
                            fullPath: e + "betSlip/select_frame_big_top.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "betSlipGroup",
                            x: 960,
                            y: 480,
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "betSlipSymbolFrame_asset",
                                assetKey: "betSlipSymbolFrame_asset"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "betSlipPanelSymbolBg_asset",
                                assetKey: "betSlipPanelSymbolBg_asset"
                            }, {
                                type: mt.objects.BUTTON,
                                name: "betSlipCloseButton",
                                assetKey: "betSlipButtonCloseFrames",
                                btnFrames: {
                                    down: 0,
                                    out: 1,
                                    over: 2
                                },
                                pixelPerfectClick: !1,
                                pixelPerfectOver: !1,
                                x: -845,
                                y: 504,
                                anchorX: .5,
                                anchorY: .5,
                                action: 'function () {nge.observer.fire("betSlip.closeBtnPressed");}'
                            }, {
                                type: mt.objects.GROUP,
                                x: -480,
                                y: -390,
                                contents: [{
                                    name: "BET_SLIP_SELECT_SYMBOL_ANIMATION",
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("BET_SLIP_SELECT_SYMBOL_DESCRIPTION"),
                                    style: n,
                                    isVisible: !1,
                                    anchorX: .5,
                                    x: 0
                                }, {
                                    name: "BET_SLIP_SELECT_SYMBOL",
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("BET_SLIP_SELECT_SYMBOL_DESCRIPTION"),
                                    class: "betSlipDescriptionActive",
                                    anchorX: .5,
                                    x: 0
                                }, {
                                    type: mt.objects.GROUP,
                                    x: 0,
                                    y: 62,
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        x: -200,
                                        y: 48,
                                        contents: [{
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipSymbol4Frame",
                                            assetKey: "betSlipPanelSymbolBg",
                                            x: -26,
                                            y: -22,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 210,
                                            height: 162
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameSmall",
                                            x: -12,
                                            y: -5,
                                            anchorX: 0,
                                            anchorY: 0
                                        }, {
                                            type: mt.objects.BUTTON,
                                            name: "betSlipSymbol4Btn",
                                            assetKey: "5",
                                            x: -14,
                                            y: -38,
                                            scaleX: .6,
                                            scaleY: .6,
                                            anchorX: 0,
                                            anchorY: 0,
                                            pixelPerfectClick: !1,
                                            pixelPerfectOver: !1,
                                            action: 'function() { nge.observer.fire("betSlip.symbol_4");}'
                                        }, {
                                            type: mt.objects.NINE_SLICE,
                                            assetKey: "betSlipSymbolFrame",
                                            x: -15,
                                            y: -15,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 194,
                                            height: 146
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        x: -200,
                                        y: 210,
                                        contents: [{
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipSymbol3Frame",
                                            assetKey: "betSlipPanelSymbolBg",
                                            x: -26,
                                            y: -22,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 210,
                                            height: 162
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameSmall",
                                            x: -12,
                                            y: -5,
                                            anchorX: 0,
                                            anchorY: 0
                                        }, {
                                            type: mt.objects.BUTTON,
                                            name: "betSlipSymbol3Btn",
                                            assetKey: "4",
                                            x: -14,
                                            y: -38,
                                            scaleX: .6,
                                            scaleY: .6,
                                            anchorX: 0,
                                            anchorY: 0,
                                            pixelPerfectClick: !1,
                                            pixelPerfectOver: !1,
                                            action: 'function() { nge.observer.fire("betSlip.symbol_3");}'
                                        }, {
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipPanelButton1",
                                            assetKey: "betSlipSymbolFrame",
                                            x: -15,
                                            y: -15,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 194,
                                            height: 146
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        x: -200,
                                        y: 371,
                                        contents: [{
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipSymbol2Frame",
                                            assetKey: "betSlipPanelSymbolBg",
                                            x: -26,
                                            y: -22,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 210,
                                            height: 162
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameSmall",
                                            x: -12,
                                            y: -5,
                                            anchorX: 0,
                                            anchorY: 0
                                        }, {
                                            type: mt.objects.BUTTON,
                                            name: "betSlipSymbol2Btn",
                                            assetKey: "3",
                                            x: -14,
                                            y: -38,
                                            scaleX: .6,
                                            scaleY: .6,
                                            anchorX: 0,
                                            anchorY: 0,
                                            pixelPerfectClick: !1,
                                            pixelPerfectOver: !1,
                                            action: 'function() { nge.observer.fire("betSlip.symbol_2");}'
                                        }, {
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipPanelButton1",
                                            assetKey: "betSlipSymbolFrame",
                                            x: -15,
                                            y: -15,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 194,
                                            height: 146
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        x: -200,
                                        y: 532,
                                        contents: [{
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipSymbol1Frame",
                                            assetKey: "betSlipPanelSymbolBg",
                                            x: -26,
                                            y: -22,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 210,
                                            height: 162
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameSmall",
                                            x: -12,
                                            y: -5,
                                            anchorX: 0,
                                            anchorY: 0
                                        }, {
                                            type: mt.objects.BUTTON,
                                            name: "betSlipSymbol1Btn",
                                            assetKey: "2",
                                            x: -14,
                                            y: -38,
                                            scaleX: .6,
                                            scaleY: .6,
                                            anchorX: 0,
                                            anchorY: 0,
                                            pixelPerfectClick: !1,
                                            pixelPerfectOver: !1,
                                            action: 'function() { nge.observer.fire("betSlip.symbol_1");}'
                                        }, {
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipPanelButton1",
                                            assetKey: "betSlipSymbolFrame",
                                            x: -15,
                                            y: -15,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 194,
                                            height: 146
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        x: 0,
                                        y: 50,
                                        contents: [{
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipSymbol0Frame",
                                            assetKey: "betSlipPanelSymbolBg",
                                            x: -24,
                                            y: -23,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 254,
                                            height: 648
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameBigSide",
                                            x: -9,
                                            y: -7,
                                            anchorX: 0,
                                            anchorY: 0
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameBigSide",
                                            x: 219,
                                            y: -7,
                                            anchorX: 0,
                                            anchorY: 0,
                                            scaleX: -1
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameBigTop",
                                            x: -9,
                                            y: -7,
                                            anchorX: 0,
                                            anchorY: 0
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "betSlipFrameBigTop",
                                            x: -9,
                                            y: 608,
                                            anchorX: 0,
                                            anchorY: 0,
                                            scaleY: -1
                                        }, {
                                            type: mt.objects.BUTTON,
                                            name: "betSlipSymbol0Btn",
                                            assetKey: "1_big",
                                            x: -14,
                                            y: -18,
                                            scaleX: .745,
                                            scaleY: .745,
                                            anchorX: 0,
                                            anchorY: 0,
                                            pixelPerfectClick: !1,
                                            pixelPerfectOver: !1,
                                            action: 'function() { nge.observer.fire("betSlip.symbol_0");}'
                                        }, {
                                            type: mt.objects.NINE_SLICE,
                                            assetKey: "betSlipSymbolFrame",
                                            x: -15,
                                            y: -15,
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            width: 238,
                                            height: 626
                                        }]
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                isVisible: !0,
                                x: 0,
                                y: -390,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "betSlipNumberOfSpinsBlocker",
                                    assetKey: "betSlipBlocker",
                                    inputEnabled: !0,
                                    x: -248,
                                    y: -20
                                }, {
                                    name: "BET_SLIP_DESCRIPTION_NUMBER_OF_SPINS_ANIMATION",
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("BET_SLIP_SELECT_NUMBER_OF_SPINS_DESCRIPTION"),
                                    style: n,
                                    isVisible: !1,
                                    anchorX: .5,
                                    x: 0
                                }, {
                                    name: "BET_SLIP_DESCRIPTION_NUMBER_OF_SPINS",
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("BET_SLIP_SELECT_NUMBER_OF_SPINS_DESCRIPTION"),
                                    class: "betSlipDescriptionInactive",
                                    anchorX: .5,
                                    x: 0
                                }, {
                                    type: mt.objects.GROUP,
                                    x: 0,
                                    y: 200,
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_0_0",
                                        maxWidth: 290,
                                        y: -46,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_0_1",
                                        maxWidth: 290,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_0_2",
                                        maxWidth: 290,
                                        y: 46,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "betSlipNumberOfSpinsBtn0",
                                        assetKey: "betSlipNumberOfSpinsInactiveFrame",
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        anchorX: .5,
                                        anchorY: .5,
                                        action: 'function() { nge.observer.fire("betSlip.numberOfSpinsBtn0Click");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    x: 0,
                                    y: 412,
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_1_0",
                                        text: "",
                                        maxWidth: 290,
                                        y: -46,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_1_1",
                                        text: "",
                                        maxWidth: 290,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_1_2",
                                        text: "",
                                        maxWidth: 290,
                                        y: 46,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "betSlipNumberOfSpinsBtn1",
                                        assetKey: "betSlipNumberOfSpinsInactiveFrame",
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        anchorX: .5,
                                        anchorY: .5,
                                        action: 'function() { nge.observer.fire("betSlip.numberOfSpinsBtn1Click");}'
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    x: 0,
                                    y: 624,
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_2_0",
                                        text: "",
                                        maxWidth: 290,
                                        y: -46,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_2_1",
                                        text: "",
                                        maxWidth: 290,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipNumberOfSpinsTxt_2_2",
                                        text: "",
                                        maxWidth: 290,
                                        y: 46,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "betSlipNumberOfSpinsBtn2",
                                        assetKey: "betSlipNumberOfSpinsInactiveFrame",
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        anchorX: .5,
                                        anchorY: .5,
                                        action: 'function() { nge.observer.fire("betSlip.numberOfSpinsBtn2Click");}'
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                x: 480,
                                y: -390,
                                isVisible: !0,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "betSlipSelectBetBlocker",
                                    assetKey: "betSlipBlocker1px",
                                    inputEnabled: !0,
                                    x: -244,
                                    y: -20,
                                    scaleX: 484,
                                    scaleY: 820
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "betSlipSelectBetArrowBlocker",
                                    assetKey: "betSlipBlocker",
                                    inputEnabled: !0,
                                    x: -244,
                                    y: -20
                                }, {
                                    name: "BET_SLIP_SELECT_BET_ANIMATION",
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("BET_SLIP_SELECT_BET_DESCRIPTION"),
                                    style: n,
                                    isVisible: !1,
                                    anchorX: .5,
                                    x: 0
                                }, {
                                    name: "BET_SLIP_SELECT_BET",
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("BET_SLIP_SELECT_BET_DESCRIPTION"),
                                    class: "betSlipDescriptionInactive",
                                    anchorX: .5,
                                    x: 0
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "betSlipSelectBetBgContainer",
                                    x: 0,
                                    y: 412,
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "betSlipSelectBetTxt",
                                        text: "20",
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            fill: 16696173,
                                            font: "52pt futuraptmedium",
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "betSlipSelectBetBg",
                                        assetKey: "betSlipNumberOfSpinsInactiveFrame",
                                        x: 0,
                                        y: 0,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "betSlipSelectBetMinusBtn",
                                        assetKey: "betSlipButtonMinusFrames",
                                        btnFrames: {
                                            down: 0,
                                            out: 1,
                                            over: 2
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 0,
                                        y: 200,
                                        anchorX: .5,
                                        anchorY: .5,
                                        action: 'function() { nge.observer.fire("betSlip.selectBetMinusBtn");}'
                                    }, {
                                        type: mt.objects.BUTTON,
                                        name: "betSlipSelectBetPlusBtn",
                                        assetKey: "betSlipButtonPlusFrames",
                                        btnFrames: {
                                            down: 0,
                                            out: 1,
                                            over: 2
                                        },
                                        pixelPerfectClick: !1,
                                        pixelPerfectOver: !1,
                                        x: 0,
                                        y: -200,
                                        anchorX: .5,
                                        anchorY: .5,
                                        action: 'function() { nge.observer.fire("betSlip.selectBetPlusBtn");}'
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "betSlipPlaceBetButtonGroup",
                                x: 0,
                                y: 504,
                                contents: [{
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("BET_SLIP_PLACE_BET_BUTTON"),
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 250,
                                    style: {
                                        font: "40pt futuraptheavy",
                                        fill: 666677,
                                        align: "center",
                                        stroke: 10192984,
                                        strokeThickness: 2
                                    }
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "betSlipButtonPlaceBetAnimation",
                                    assetKey: "betSlipButtonPlaceBet",
                                    isVisible: !1,
                                    x: 0,
                                    y: 0,
                                    anchorX: .5,
                                    anchorY: .5
                                }, {
                                    type: mt.objects.BUTTON,
                                    name: "betSlipPlaceBetButton",
                                    assetKey: "betSlipButtonPlaceBet",
                                    btnFrames: {
                                        down: 0,
                                        out: 1,
                                        over: 2
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    anchorX: .5,
                                    anchorY: .5,
                                    action: 'function() { nge.observer.fire("betSlip.placeBet");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "betSlipBgContainer",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    assetKey: "betSlipMainFrame",
                                    anchorX: 1,
                                    anchorY: 1
                                }, {
                                    type: mt.objects.IMAGE,
                                    assetKey: "betSlipMainFrame",
                                    scaleX: -1,
                                    anchorX: 1,
                                    anchorY: 1
                                }, {
                                    type: mt.objects.IMAGE,
                                    assetKey: "betSlipMainFrame",
                                    scaleY: -1,
                                    anchorX: 1,
                                    anchorY: 1
                                }, {
                                    type: mt.objects.IMAGE,
                                    assetKey: "betSlipMainFrame",
                                    scaleX: -1,
                                    scaleY: -1,
                                    anchorX: 1,
                                    anchorY: 1
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "betSlipGlobalCover",
                                assetKey: "1pxBlack",
                                anchorX: .5,
                                anchorY: .5,
                                y: 60,
                                scaleX: 1920,
                                scaleY: 1080,
                                pixelPerfect: 0,
                                alpha: .75,
                                inputEnabled: !0
                            }]
                        }]
                    }
                }
            }
        },
        1095: function(e, t) {
            nge.App[nge.appNS].Com.BetSlipPanel = {}
        },
        1096: function(e, t) {
            nge.App[nge.appNS].Com.BetSlipPanel.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = !1,
                    n = null,
                    a = null,
                    s = null,
                    o = null,
                    i = !1,
                    p = !1;
                this.panelInactiveLayers = ["gameFreeSpin", "gameOffer"], this.panelEnableEvents = "spinReadyToProceed win.big.hide win.regular.readyToHide slotMachine.spinFailed.noBalance offers.startGame offers.finishFreeGames offers.controller.restoreGameUI autospin.ended".split(" "), this.panelDisableEvents = ["respin.startProcess.end"], this.panelEnableBlockers = [function() {
                    return !(nge.localData.get("isSpinReadyToProceed") || nge.localData.get("betSlipFinishedWithWin") && nge.localData.get("jackpot.canPlay"))
                }, function() {
                    return nge.localData.get("freespin.inProgress")
                }, function() {
                    return nge.localData.get("freeGame.inProgress")
                }, function() {
                    return nge.localData.get("respin.inProgress")
                }, function() {
                    return nge.localData.get("freeGame.showingOfferMenu")
                }], this.panelClosedEnableBlockers = [function() {
                    return nge.localData.get("autospin") || nge.localData.get("autospin.inProgress")
                }, function() {
                    return nge.localData.get("respin.inProgress")
                }, function() {
                    return nge.localData.get("slotMachineResponseBonusSpin")
                }], this.panelOpenedBlockers = [function() {
                    return nge.localData.get("betSlip.sendedGetPayoutRequest")
                }, function() {
                    return nge.localData.get("slotMachineSpinning")
                }, function() {
                    return nge.localData.get("freespin.inProgress")
                }, function() {
                    return nge.localData.get("freeGame.inProgress")
                }, function() {
                    return nge.localData.get("respin.inProgress")
                }, function() {
                    return nge.localData.get("freeGame.showingOfferMenu")
                }, function() {
                    return nge.localData.get("autospin") || nge.localData.get("autospin.inProgress")
                }];
                var l = function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (e[t]()) return !0
                    },
                    r = function() {
                        return nge.localData.get("betSlip.state")
                    },
                    c = function(e) {
                        nge.localData.set("betSlip.state", e)
                    },
                    m = function(e, t) {
                        for (var n in t)
                            if (t[n].id === e) return t[n]
                    },
                    y = function(e) {
                        if (e = void 0 === e ? {
                                payout: {
                                    toCollect: 0,
                                    spins: 0,
                                    bet: 0,
                                    factor: 0,
                                    id: 0,
                                    payoutId: 0
                                },
                                bet: 0
                            } : e) {
                            var t = isNaN(e.payout.payoutId) ? e.payout.id : e.payout.payoutId;
                            t = m(t, s).symbol, e = {
                                collect: e.payout.toCollect,
                                inSpins: e.payout.spins,
                                bet: e.bet.toFixed(2),
                                pays: e.payout.factor.toFixed(2),
                                symbol: t
                            }, n.showPanel(e)
                        }
                    },
                    u = function() {
                        l(e.panelEnableBlockers) || !r() && l(e.panelClosedEnableBlockers) || (n.changeVisibility(!0), n.showEnableButtonAnimation(), n.showEnableTintPanelAnimation())
                    },
                    b = function() {
                        (l(e.panelEnableBlockers) || !0 !== r()) && (!0 === r() && s ? n.showDisableTintPanelAnimation() : n.changeVisibility(!1))
                    },
                    g = function(e) {
                        nge.localData.set("betSlip.sendedGetPayoutRequest", !1), s = e, a && a.inRestore ? (c(!0), delete a.inRestore, y(a), n.startOpenAnimation()) : i && (i = !1, nge.observer.fire("betSlip.show", e), n.startOpenAnimation())
                    },
                    h = function() {
                        l(e.panelOpenedBlockers) || (n.reset(), i = !0, nge.observer.fire("betSlip.sendGetPayoutRequest"), nge.localData.set("betSlip.sendedGetPayoutRequest", !0), nge.localData.set("betSlip.opened", !0))
                    },
                    f = function() {
                        !0 !== r() && n.hidePanel(), nge.localData.set("betSlip.opened", !1), nge.observer.fire("betSlip.enableSpinButton")
                    },
                    d = function(e) {
                        s && (y(e), n.startOpenAnimation())
                    },
                    x = function(e) {
                        s && (n.showPanel({
                            collect: e.toCollect,
                            inSpins: e.spins,
                            bet: e.bet,
                            pays: e.factor,
                            symbol: e.symbol
                        }), n.startOpenAnimation())
                    },
                    _ = function() {
                        c(!0), nge.observer.fire("balanceRequest"), p = !0
                    },
                    T = function(e) {
                        e.forEach((function(e) {
                            a = {
                                payout: {
                                    toCollect: e.toCollect,
                                    spins: e.actionsLeft,
                                    bet: e.bet,
                                    factor: e.pays,
                                    payoutId: e.payoutId,
                                    win: e.win
                                },
                                bet: e.bet,
                                finished: e.finished
                            }
                        })), o = !0, a && a.finished && a.payout.win && 0 < a.payout.win && nge.localData.set("betSlipFinishedWithWin", !0)
                    },
                    P = function() {
                        !0 === r() || a && (!a || a.inRestore) || n.showDisableButtonAnimation()
                    },
                    S = function(e) {
                        e && "Ready" === e.state && !s && nge.observer.fire("betSlip.sendGetPayoutRequest")
                    },
                    E = function() {
                        if (a && (0 !== a.payout.spins || a.finished)) {
                            if (u(), o && !nge.localData.get("freeGame.inProgress")) {
                                var e = nge.localData.get("slotMachine.spinResult.columns");
                                if (e) {
                                    var t = m(a.payout.payoutId, s);
                                    if (t) {
                                        n.stopAllPlusOneAnimations();
                                        for (var i = 0, p = {}, l = 0; l < e.length; l++)
                                            for (var r = 0; r < e[l].length; r++) + e[l][r] === t.symbol && (p[l] || (p[l] = !0, i += 166), n.playPlusOneAnimation(l, r, i))
                                    }
                                }
                            }
                            s && y(a), o = !1
                        }
                    },
                    j = function() {
                        a && !l(e.panelEnableBlockers) && (0 !== a.payout.spins || a.finished) && a && a.finished && (a.finished = !1, function(t) {
                            var o = t.payout,
                                i = m(o.payoutId, s);
                            t = i.symbol.toString(), i = i.toCollect, o = o.win, c(!1), a = null, 0 < o ? (n.hidePanel(), nge.observer.fire("autospin.off"), nge.observer.fire("popup.show", {
                                popupName: "betSlipWinPopup",
                                bet_slip_symbol_image: t.toString(),
                                bet_slip_collected_text: i + nge.i18n.get("BET_SLIP_COLLECTED"),
                                bet_slip_win_counter: nge.Lib.Money.toCoins(o),
                                onClick: function() {
                                    nge.observer.fire("betSlip.tryLaunchJackpot")
                                }
                            }), nge.observer.fire("betSlip.winField.showVFX", o)) : (n.loose(e.panelOpenedBlockers), nge.observer.fire("sound.totalizer_lose.play")), nge.localData.set("betSlipFinishedWithWin", !1)
                        }(a))
                    },
                    M = function(t) {
                        e.panelInactiveLayers.includes(t) ? b() : u()
                    },
                    A = function() {
                        a && a.inRestore && (s ? g(s) : nge.observer.fire("betSlip.sendGetPayoutRequest"))
                    },
                    X = function() {
                        c(!1), s = a = null, i = o = p = !1, nge.localData.set("betSlip.opened", !1), nge.localData.set("betSlipFinishedWithWin", !1), nge.localData.set("betSlip.sendedGetPayoutRequest", !1)
                    },
                    C = function() {
                        p && (nge.observer.fire("balance.showBalance", null, 100), p = !1)
                    };
                this.subscribe = function() {
                    nge.observer.add("betSlipPanel.click", h), nge.observer.add("betSlip.onClose", f), nge.observer.add("betSlip.payoutUpdated", d), nge.observer.add("betSlip.showDefaultPayouts", x), nge.observer.add("betSlip.getPayoutResponse", g), nge.observer.add("betSlip.playResponse", _), nge.observer.add("betSlip.updateResponse", T), nge.observer.add("slotMachine.spinStart", P), nge.observer.add("slotMachine.spinResponse", S), nge.observer.add("slotMachine.spinComplete", E), nge.observer.add("slot.winProcessingFinish", j), nge.observer.add("slot.winProcessingFinishWithoutSpinReady", j), nge.observer.add("transportMessage.BalanceResponse", C), nge.observer.add("layersSwitcher.show", M), nge.observer.add("Transport.close", X), nge.observer.add("freespin.press.endPopupButton", A), e.panelEnableEvents.forEach((function(e) {
                        nge.observer.add(e, u)
                    })), e.panelDisableEvents.forEach((function(e) {
                        nge.observer.add(e, b)
                    }))
                }, this.create = function() {
                    e.super.create(), t || (e.subscribe(), t = !0), n || (n = e.getInstance("View")), n.create(),
                        function() {
                            var e = nge.localData.get("slotMachine.lastResponse");
                            e && e.bets ? (c(!1), e.bets.forEach((function(e) {
                                a = {
                                    payout: {
                                        toCollect: +e.toCollect,
                                        spins: +e.actionsLeft,
                                        bet: +e.bet,
                                        factor: +e.pays,
                                        payoutId: +e.payoutId
                                    },
                                    bet: +e.bet,
                                    inRestore: !0
                                }
                            })), e.state && "Ready" !== e.state || nge.observer.fire("betSlip.sendGetPayoutRequest")) : a && !a.finished && (c(!0), a.inRestore = !0, g(s))
                        }()
                }
            }))
        },
        1097: function(e, t) {
            nge.App[nge.appNS].Com.BetSlipPanel.View = nge.Com.Base.extend((function() {
                var e, t = this,
                    n = null,
                    a = null,
                    s = null,
                    o = null,
                    i = null,
                    p = null,
                    l = null,
                    r = null,
                    c = [],
                    m = {
                        collect: null,
                        spins: null,
                        bet: null,
                        credits: null
                    },
                    y = null,
                    u = !1,
                    b = !1;
                this.playPlusOneAnimation = function(e, t, n) {
                    n = nge.rafSetTimeout((function() {
                        r[e][t].setAnimationByName(0, "play"), nge.observer.fire("bet_slip_on_collect.play")
                    }), n), c.push(n)
                }, this.stopAllPlusOneAnimations = function() {
                    for (; c.length;) nge.rafClearTimeout(c.pop())
                };
                var g = function(e) {
                    e = void 0 === e ? {
                        collect: 0,
                        inSpins: 0,
                        bet: 0,
                        pays: 0
                    } : e;
                    var t = m.collect,
                        n = nge.i18n.get("BET_SLIP_PANEL_COLLECT", {
                            arg1: e.collect
                        });
                    t.text = n, t = m.inSpins, n = nge.i18n.get("BET_SLIP_PANEL_SPINS", {
                        arg1: e.inSpins
                    }), t.text = n, t = m.bet, n = nge.i18n.get("BET_SLIP_PANEL_BET", {
                        arg1: e.bet
                    }), t.text = n, m.pays.text = e.pays
                };
                this.showPanel = function(e) {
                    e = void 0 === e ? {
                        collect: 0,
                        inSpins: 0,
                        bet: 0,
                        pays: 0,
                        symbol: 0
                    } : e, n.disable(3), i.visible = !0;
                    var t = e.symbol.toString();
                    if (!nge.wrap.cache.hasTexture(t)) throw Error("No texture in cache " + t);
                    y.loadTexture(t), g(e)
                }, this.hidePanel = function() {
                    t.startCloseAnimation()
                }, this.loose = function(t) {
                    e.setAnimationByName(0, "blow"), nge.tween.add(a).to({
                        alpha: 0
                    }, 350, null, !1, 500).start(), nge.tween.add(i).to({
                        alpha: 0
                    }, 350, null, !1, 500).start(), e.onComplete.addOnce((function() {
                        i.alpha = 1, p.y = 0, o.y = 690;
                        for (var e = i.visible = !1, s = 0; s < t.length; s++) t[s]() && (e = !0);
                        e ? (n.disable(3), u = !0) : (n.enable(), u = !1), (e = nge.tween.add(a).to({
                            alpha: 1
                        }, 250)).onComplete.add((function() {
                            a.alpha = 1
                        })), e.start()
                    }))
                }, this.startOpenAnimation = function() {
                    if (480 !== o.y || 0 !== p.y) {
                        o.y = 690;
                        var e = nge.tween.add(o);
                        e.to({
                            y: 480
                        }, 250), e.onComplete.add((function() {
                            o.y = 480
                        })), e.start(), p.y = -480, (e = nge.tween.add(p)).to({
                            y: 0
                        }, 250), e.start()
                    }
                }, this.startCloseAnimation = function() {
                    o.y = 480;
                    var e = nge.tween.add(o);
                    e.to({
                        y: 690
                    }, 250), e.onComplete.add((function() {
                        o.y = 690
                    })), e.start(), p.y = 0, (e = nge.tween.add(p)).to({
                        y: -480
                    }, 250), e.onComplete.add((function() {
                        n.enable(), i.visible = !1, o.y = 690
                    })), e.start()
                }, this.showEnableTintPanelAnimation = function() {
                    if (b) {
                        var e = nge.tween.add(o).to({
                            alpha: 1
                        }, 500);
                        e.onComplete.addOnce((function() {
                            o.alpha = 1
                        })), e.start(), b = !1
                    }
                }, this.showDisableTintPanelAnimation = function() {
                    b || (o.alpha = 1, nge.tween.add(o).to({
                        alpha: .5
                    }, 500).start(), b = !0)
                }, this.showEnableButtonAnimation = function() {
                    if (u) {
                        n.enable(), s.texture = s.spritesheet.textures[3], s.alpha = 1, s.visible = !0;
                        var e = nge.tween.add(s).to({
                            alpha: 0
                        }, 250);
                        e.onComplete.addOnce((function() {
                            s.visible = !1
                        })), e.start(), u = !1
                    }
                }, this.showDisableButtonAnimation = function() {
                    if (!u) {
                        n.disable(3), s.texture = s.spritesheet.textures[1], s.alpha = 1, s.visible = !0;
                        var e = nge.tween.add(s).to({
                            alpha: 0
                        }, 250);
                        e.onComplete.addOnce((function() {
                            s.visible = !1
                        })), e.start(), u = !0
                    }
                }, this.changeVisibility = function(e) {
                    o.visible = e
                }, this.reset = function() {
                    t.stopAllPlusOneAnimations(), g({
                        collect: 0,
                        inSpins: 0,
                        bet: 0,
                        pays: 0
                    })
                }, this.create = function() {
                    o = nge.findOne("^betSlipPanel"), i = nge.findOne("^betSlipPanelGroup"), p = nge.findOne("^betSlipPanelMovingGroup"), e = nge.findOne("^betSlipPanelLooseAnimation"), n = nge.findOne("^betSlipPanelBtn"), a = nge.findOne("^betSlipPanelButtonGroup"), s = nge.findOne("^betSlipPanelInactiveBtn"), m.collect = nge.findOne("^betSlipPanelCollectText"), m.inSpins = nge.findOne("^betSlipPanelSpinsCountText"), m.bet = nge.findOne("^betSlipPanelBetText"), m.pays = nge.findOne("^betSlipPanelCredits"), y = nge.findOne("^betSlipPanelSymbol");
                    var t = nge.findOne("^betSlipPanelSymbolContainer");
                    (t = nge.objects.create(new nge.Mlm.Objects.Mask({
                        rects: [y.x, y.y, y.width - 8, 120]
                    }), t, !0)).position.set(-100, -60), y.mask = t, t = nge.findOne("^betSlipPanelGroup");
                    var c = nge.objects.create(new nge.Mlm.Objects.Mask({
                        rects: [t.x - t.width / 2, t.y + 80, t.width, t.height]
                    }), t, !0);
                    t.addChild(c), t.mask = c, l = nge.findOne("^plusOneContainer"), r = [];
                    for (var g = 0; 5 > g; g++) {
                        t = 286 * g + 143, r.push([]);
                        for (var h = 0; 4 > h; h++) {
                            c = 204 * h + 102;
                            var f = nge.Mlm.Objects.Spine({
                                assetKey: "plus_one",
                                anchorX: .5,
                                anchorY: .5,
                                isVisible: !1
                            });
                            (f = nge.objects.create(f, l, !0)).position.set(t, c), r[g].push(f)
                        }
                    }
                    n.visible = !0, o.y = 690, b = u = i.visible = !1
                }
            }))
        },
        1098: function(e, t) {
            nge.App[nge.appNS].Com.BetSlipPanel.Tpl = function() {
                var e = nge.appPath + "img/",
                    t = {
                        fill: 16777215,
                        font: "28pt futuraptheavy"
                    };
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "betSlipPanelBg1_asset",
                            fullPath: e + "betSlip/bet_slip_panel_bg_pt1.9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipPanelBg2_asset",
                            fullPath: e + "betSlip/bet_slip_panel_bg_pt2.9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipPanelButton_asset",
                            fullPath: e + "betSlip/bet_slip_panel_button_bg.9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipPanelButtonFrames",
                            fullPath: e + "betSlip/bet_slip_panel_button_frames.png",
                            frameWidth: 210,
                            frameHeight: 82
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betSlipPanelSymbolBg_asset",
                            fullPath: e + "betSlip/bet_slip_selected_symbol_frame.9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "symbol_default",
                            fullPath: e + "betSlip/choose.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "plusOneContainer",
                            x: 241,
                            y: 78
                        }, {
                            type: mt.objects.IMAGE,
                            name: "betSlipPanelButton_asset",
                            assetKey: "betSlipPanelButton_asset"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "betSlipPanelSymbolBg_asset",
                            assetKey: "betSlipPanelSymbolBg_asset"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "betSlipPanelBg1_asset",
                            assetKey: "betSlipPanelBg1_asset"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "betSlipPanelBg2_asset",
                            assetKey: "betSlipPanelBg2_asset"
                        }, {
                            type: mt.objects.SPINE,
                            name: "betSlipPanelLooseAnimation",
                            assetKey: "betSlipTotalizatorLoose",
                            x: 114,
                            y: 480,
                            isVisible: !1
                        }, {
                            type: mt.objects.GROUP,
                            name: "betSlipPanel",
                            x: 115,
                            y: 690,
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "betSlipPanelInactiveBtn",
                                assetKey: "betSlipPanelButtonFrames",
                                anchorX: .5,
                                anchorY: .5,
                                y: -193,
                                isVisible: !1
                            }, {
                                type: mt.objects.GROUP,
                                name: "betSlipPanelButtonGroup",
                                y: -193,
                                visible: !1,
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "betSlipPanelBtn",
                                    assetKey: "betSlipPanelButtonFrames",
                                    btnFrames: {
                                        over: 0,
                                        out: 1,
                                        down: 2
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    anchorX: .5,
                                    anchorY: .5,
                                    action: 'function () {nge.observer.fire("betSlipPanel.click");}'
                                }, {
                                    type: mt.objects.NINE_SLICE,
                                    assetKey: "betSlipPanelButton",
                                    bottom: 28,
                                    top: 28,
                                    left: 24,
                                    right: 24,
                                    width: 232,
                                    height: 104,
                                    x: -116,
                                    y: -52
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "betSlipPanelGroup",
                                y: -155,
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "betSlipPanelMovingGroup",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "betSlipPanelCollectText",
                                        text: "COLLECT 80",
                                        y: 170,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 200,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipPanelSpinsCountText",
                                        text: "40 SPINS",
                                        y: 217,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 200,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipPanelBetText",
                                        text: "BET 20 USD",
                                        y: 270,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 180,
                                        class: "coloredText",
                                        style: t
                                    }, {
                                        type: mt.objects.TEXT,
                                        text: nge.i18n.get("BET_SLIP_PANEL_PAYS_DESCRIPTION"),
                                        y: 324,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 200,
                                        style: {
                                            fill: 16777215,
                                            font: "28pt futuraptheavy"
                                        }
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "betSlipPanelCredits",
                                        text: "20 USD",
                                        y: 367,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 200,
                                        style: {
                                            fill: 16696173,
                                            font: "35pt futuraptheavy"
                                        }
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "betSlipPanelSymbolContainer",
                                        y: 82,
                                        contents: [{
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipPanelSymbolBg",
                                            assetKey: "betSlipPanelSymbolBg",
                                            bottom: 24,
                                            top: 24,
                                            left: 24,
                                            right: 24,
                                            x: -99,
                                            y: -75,
                                            width: 195,
                                            height: 145
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "betSlipPanelSymbol",
                                            assetKey: "5",
                                            y: -3,
                                            anchorX: .5,
                                            anchorY: .5,
                                            scaleX: .6,
                                            scaleY: .6
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "betSlipPanelBg",
                                        y: -88,
                                        contents: [{
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipPanelBg1",
                                            assetKey: "betSlipPanelBg1",
                                            bottom: 4,
                                            top: 28,
                                            left: 24,
                                            right: 24,
                                            width: 230,
                                            height: 386,
                                            x: -116
                                        }, {
                                            type: mt.objects.NINE_SLICE,
                                            name: "betSlipPanelBg2",
                                            assetKey: "betSlipPanelBg2",
                                            bottom: 24,
                                            top: 4,
                                            left: 24,
                                            right: 24,
                                            width: 230,
                                            height: 103,
                                            x: -116,
                                            y: 384
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1099: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni = {}
        },
        1100: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Cfg = nge.App.DjGameBase.Com.BigWinUni.Cfg.extend((function() {
                this.cfg.parentContainerName = "winPopupContainer", this.cfg.followSlotName = "counter", this.cfg.loopStartFrame = 27, this.cfg.loopEndFrame = 80, this.cfg.jump2Frame = 80, this.cfg.emitter = {
                    event: "event_emitter_explosion"
                }, this.cfg.parallelLoopTracks = [{
                    name: "speedline_loop",
                    index: 1
                }, {
                    name: "big_win_text_stripes",
                    index: 2
                }]
            }))
        },
        1101: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Controller = nge.App.DjGameBase.Com.BigWinUni.Controller.extend((function() {
                var e = this;
                this.create = function() {
                    e.super.create();
                    var t = nge.findOne("^" + e.cfg.parentContainerName);
                    if (t) {
                        var n = nge.findOne("^bigWinEmitterContainer");
                        t.addChild(n)
                    }
                }
            }))
        },
        1102: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "bigWinEmitterContainer",
                            anchorX: .5,
                            anchorY: .5,
                            x: 960,
                            y: 540,
                            contents: [{
                                type: mt.objects.UNITY_EMITTER,
                                y: 980,
                                name: "bigWinEmitter",
                                assetKey: "emitterVFX"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "bigWinContainer",
                            anchorX: .5,
                            anchorY: .5,
                            x: 960,
                            y: 540,
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "bigWinAmount",
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "bigwin_font",
                                size: 180
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
        1103: function(e, t) {
            nge.App[nge.appNS].Com.Blinker = {}
        },
        1104: function(e, t) {
            nge.App[nge.appNS].Com.Blinker.Cfg = nge.App.DjGameBase.Com.Blinker.Cfg.extend((function() {
                this.params.startAlpha = .25, this.params.blendMode = 1, this.params.rectHorizontal = {
                    x: 241,
                    y: 78,
                    w: 1440,
                    h: 813
                }
            }))
        },
        1105: function(e, t) {
            nge.App[nge.appNS].Com.Buttons = {}
        },
        1106: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Cfg = nge.App.DjGameBase.Com.Buttons.Cfg.extend((function() {
                delete this.params.freeSpinStart, delete this.params.finalPopup
            }))
        },
        1107: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile = {}
        },
        1108: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Cfg = nge.App.DjGameBase.Com.Buttons.Mobile.Cfg.extend((function() {
                delete this.params.freeSpinStart, delete this.params.finalPopup
            }))
        },
        1109: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher = {}
        },
        1110: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Controller = nge.App.ClassicGameBase.Com.CurrencySwitcher.Controller.extend((function() {
                this.selectors.creditsSelectors[".creditsJackpotPlayareaValue"] = null, this.selectors.currencySelectors[".jackpotPlayareaValue"] = null
            }))
        },
        1111: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Mobile = {}
        },
        1112: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Mobile.Controller = nge.App.ClassicGameBase.Com.CurrencySwitcher.Mobile.Controller.extend((function() {
                this.selectors.creditsSelectors[".creditsJackpotPlayareaValue"] = null, this.selectors.currencySelectors[".jackpotPlayareaValue"] = null
            }))
        },
        1113: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        1114: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Cfg = nge.App.DjGameBase.Com.Freespin.Cfg.extend((function() {
                this.params.manualMode = !1, this.params.counterNotUpdateOnBonusGameName = "FreeSpins", this.params.counterUpdatePlayedEvent = "freespin.counterPlayedUpdateEvent", this.params.counterUpdateTotalEvent = "freespin.counterTotalUpdateEvent"
            }))
        },
        1115: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.DjGameBase.Com.Freespin.Controller.extend((function() {
                var e = this,
                    t = null,
                    n = null,
                    a = !1,
                    s = !1,
                    o = !1,
                    i = function() {
                        return nge.localData.get("freespin.inProgress")
                    },
                    p = function() {
                        for (var e = [], t = 0; 5 > t; t++) {
                            e.push([]);
                            for (var n = 0; 4 > n; n++) e[t].push({
                                value: 0,
                                wild: null,
                                upgrade: null,
                                needUpgrade: !1,
                                tintTween: !1
                            })
                        }
                        return e
                    },
                    l = function(e, t, n) {
                        n = void 0 !== n && n;
                        for (var a = [!1, !1, !1, !1, !1], s = 0; s < e.length; s++) {
                            var i = e[s];
                            if ("WildMultiplier" === i.bonusName) {
                                var p = +i.params.multiplier,
                                    l = i.wonSymbols;
                                (l = t[i = l[0][0]][l[0][1]]).needUpgrade = l.value && l.value !== p, l.value === p || n || (o = !1, nge.observer.fire("freespin.pause")), l.value = p, l.needUpgrade && !n && (a[i] = !0, o = !1, nge.observer.fire("freespin.pause"))
                            }
                        }
                        nge.localData.set("freespin.reelsWithWildUpgrade", a)
                    },
                    r = function(e) {
                        for (var t = 0; t < e.length; t++)
                            for (var n = e[t], a = 0; a < n.length; a++)
                                if (n[a].value && !n[a].wild) {
                                    var s = nge.Mlm.Objects.Spine({
                                            name: "holdedSymbol_" + t + "_" + a,
                                            assetKey: "m00_000",
                                            anchorX: .5,
                                            anchorY: .5,
                                            isVisible: !1
                                        }),
                                        o = nge.Mlm.Objects.Spine({
                                            name: "holdedSymbol_" + t + "_" + a + "_upgrade",
                                            assetKey: "wild_upgrade",
                                            anchorX: .5,
                                            anchorY: .5,
                                            isVisible: !1
                                        });
                                    s = nge.objects.create(s), o = nge.objects.create(o), n[a].wild = s, n[a].upgrade = o, nge.observer.fire("slotMachine.syncHoldSymbol", {
                                        symbolPosition: {
                                            reel: t,
                                            row: a
                                        },
                                        symbolData: n[a]
                                    })
                                }
                    },
                    c = function(e) {
                        for (var n = 0, a = 0; a < e.length; a++)
                            for (var s = e[a], o = 0; o < s.length; o++) {
                                var i = s[o].wild;
                                i && (i.z = n++, i = s[o].upgrade) && (i.z = n++)
                            }
                        t.children && t.children.length && t.children[0].sort()
                    },
                    m = function(e, t) {
                        var n = e.upgrade;
                        n.setAnimationByName(0, "wild_transition"), t && n.onComplete.addOnce((function() {
                            t()
                        })), e.needUpgrade = !1
                    },
                    y = function(e, t) {
                        t && (e.tintTween && e.tintTween.isRunning && e.tintTween.stop(), e.wild && (e.wild.spine.tint = t.tintNormal))
                    },
                    u = function(e) {
                        for (var t = 0, n = 0, a = !1, s = 0; s < e.length; s++)
                            for (var i = 0; i < e[s].length; i++) {
                                var p = e[s][i].wild,
                                    l = e[s][i].needUpgrade;
                                0 !== e[s][i].value && p && l && n++
                            }
                        for (s = 0; s < e.length; s++)
                            for (i = 0; i < e[s].length; i++) {
                                p = e[s][i].value, l = e[s][i].wild;
                                var r = e[s][i].needUpgrade;
                                if (0 === p && l) l.stop(!1);
                                else if (0 !== p) {
                                    if (!l) throw Error("Invalid state");
                                    nge.observer.fire("slotMachine.holdSymbol", {
                                        reel: s,
                                        row: i
                                    }), nge.observer.fire("slotMachine.setSymbol", {
                                        coords: [s, i],
                                        key: "blank_" + p
                                    }), l.setAnimationByMode(0, "static_x" + p, nge.spine.FREEZE), o || 0 !== n || a || (a = !0, l.onComplete.addOnce((function() {
                                        o = !0, C()
                                    }))), r && (p = null, ++t === n && (p = function() {
                                        o = !0, C()
                                    }), m(e[s][i], p))
                                }
                            }
                    },
                    b = function(e) {
                        for (var t = 0; t < e.length; t++)
                            for (var n = e[t], a = 0; a < n.length; a++) {
                                var s = n[a].wild;
                                s && nge.observer.fire("slotMachine.setSymbol", {
                                    coords: [t, a],
                                    key: "0" + (1 < s ? "_x" + s : "")
                                })
                            }
                    },
                    g = function() {
                        for (var e = function(e) {
                                e && (e.stop(), e.parent && e.parent.removeChild(e), e.destroy())
                            }, t = 0; t < a.length; t++)
                            for (var n = 0; n < a[t].length; n++) e(a[t][n].wild), e(a[t][n].upgrade);
                        a = p()
                    },
                    h = function(e) {},
                    f = function(e) {
                        b(a), g(), (e = e.LineWinAmounts) && (l(e, a, !0), r(a), c(a), u(a))
                    },
                    d = function() {
                        b(a), g()
                    },
                    x = function() {
                        if (i()) {
                            var e = a;
                            t.alpha = .6;
                            for (var n = 0; n < e.length; n++)
                                for (var p = 0; p < e[n].length; p++) {
                                    var l = e[n][p].value,
                                        r = e[n][p].wild,
                                        c = e[n][p].upgrade;
                                    if (0 !== l) {
                                        if (!r || !c) throw Error("Invalid state");
                                        r.setAnimationByMode(0, "static_x" + l, nge.spine.FREEZE), c.setAnimationByMode(0, "wild_tension", nge.spine.LOOP)
                                    } else r && r.stop(!1), c && c.stop(!1)
                                }
                            s = !1, o = !0
                        }
                    },
                    _ = function() {},
                    T = function(e) {
                        i() && (e = e.slotWin) && e.wildMults && e.wildMults.length && (l(e.wildMults, a), r(a))
                    },
                    P = function() {
                        i() && nge.rafSetTimeout((function() {
                            var e = a;
                            t.alpha = 1;
                            for (var n = 0; n < e.length; n++)
                                for (var s = 0; s < e[n].length; s++) {
                                    var o = e[n][s].wild,
                                        i = e[n][s].upgrade;
                                    0 === e[n][s].value ? (o && o.stop(!1), i && i.stop(!1)) : i.stop()
                                }
                            u(a), c(a)
                        }), 1)
                    },
                    S = function(e) {
                        var t = +e.reel || 0,
                            s = +e.row || 0;
                        e = e.mode, y(a[t][s], n);
                        var o = a[t][s].wild;
                        o && o.setAnimationByMode(0, "play_x" + a[t][s].value, e)
                    },
                    E = function(e) {
                        var t = e.cfg;
                        if (e = e.winMap, n = t, e)
                            for (var s = 0; s < a.length; s++)
                                for (var o = 0; o < a[s].length; o++) {
                                    var i = a[s][o],
                                        p = i.wild;
                                    i.value && p && 0 === e[s][o] && (p.spine.tint = t.tintDark)
                                }
                    },
                    j = function(e) {
                        n = e;
                        for (var t = 0; t < a.length; t++)
                            for (var s = 0; s < a[t].length; s++) {
                                var o = a[t][s],
                                    i = o.wild;
                                o.value && i && (i.spine.tint = e.tintNormal)
                            }
                    },
                    M = function(e, t, n, a) {
                        if (t !== n) {
                            var s = {
                                step: 0
                            };
                            return a = nge.tween.add(s).to({
                                step: 1
                            }, a), e.spine.tint = t, a.onUpdateCallback((function() {
                                e.spine.tint = nge.Lib.Math.interpolateColor(t, n, s.step)
                            })), a.onComplete.add((function() {
                                e.spine.tint = n
                            })), a.start(), a
                        }
                    },
                    A = function(e) {
                        if (n) {
                            e = e.wonSymbols || [];
                            var t = [];
                            for (a.forEach((function(e, n) {
                                    t.push([]), e.forEach((function() {
                                        t[n].push(0)
                                    }))
                                })), e.forEach((function(e) {
                                    t[e[0]][e[1]] = 1
                                })), e = 0; e < a.length; e++)
                                for (var s = 0; s < a[e].length; s++) {
                                    var o = a[e][s],
                                        i = o.wild;
                                    o.value && i && (y(a[e][s], n), o = 0 === t[e][s] ? M(i, i.spine.tint, n.tintDark, 500) : M(i, i.spine.tint, n.tintNormal, 500), a[e][s].tintTween = o)
                                }
                        }
                    },
                    X = function() {
                        s = !0, C()
                    },
                    C = function() {
                        s && o && !nge.localData.get("additionalPopup.willBeShownNext") && nge.observer.fire("freespin.resume")
                    },
                    v = function() {
                        i() && (s = !1, o = !0, nge.localData.set("freespin.reelsWithWildUpgrade", [!1, !1, !1, !1, !1]))
                    };
                this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("slot.winProcessingFinish", X), nge.observer.add("freespin.start", h), nge.observer.add("freespin.restore", f), nge.observer.add("freespin.end", d), nge.observer.add("slotMachine.spinStart", x), nge.observer.add("slotMachine.spinResponse", T), nge.observer.add("slotMachine.spinComplete", P), nge.observer.add("slotMachine.animateSymbol", S), nge.observer.add("slotMachine.stopCommand", _), nge.observer.add("freespin.setSymbolsTintOn", E), nge.observer.add("freespin.setSymbolsTintOff", j), nge.observer.add("winlines.lineHighlite.start", A), nge.observer.add("Transport.close", v)
                }, this.create = function() {
                    e.super.create(), a = p(), t = nge.findOne("^slotMachineWildsContainer")
                }
            }))
        },
        1116: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Tpl = function() {
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
        1117: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile = {}
        },
        1118: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Controller = nge.App[nge.appNS].Com.Freespin.Controller.extend((function() {}))
        },
        1119: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe = {}
        },
        1120: function(e, t) {
            nge.App[nge.appNS].Com.InfoSwipe.Controller = nge.App.DjGameBase.Com.InfoSwipe.Controller.extend((function() {
                this.pageNames = "page0Container page1Container page2Container page3Container page4Container page5Container page6Container page7Container page8Container".split(" ")
            }))
        },
        1121: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue = {}
        },
        1122: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    triggerVariants: [{
                        symbols: ["12", "25"],
                        reelMask: [!0, !0, !0, !1, !1],
                        minCount: 2
                    }]
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1123: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "spinificationContainerTop",
                            x: 960,
                            y: 540,
                            contents: [{
                                type: mt.objects.SPINE,
                                name: "intrigueFgAnimation",
                                assetKey: "intrigue_fg_animation",
                                isVisible: !1
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "spinificationContainerBottom",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "sm_spinification_top_2",
                                x: 960,
                                y: 540,
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "intrigueBackAnimationSpine_2",
                                    assetKey: "intrigue_animation",
                                    isVisible: !1
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1124: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Controller = nge.App.DjGameBase.Com.Intrigue.Controller.extend((function() {
                var e = this;
                this.intrigueFgAnimation = this.bottomContainer = this.intrigueAnimation = null;
                var t = {},
                    n = null,
                    a = function(a) {
                        return function() {
                            if (!t[a]) {
                                !0 !== t[a - 1] && e.intrigueFgAnimation.setAnimationByName(0, "animation", !0), t[a] = !0;
                                var s = e.bottomContainer.children[a - 2];
                                s && (s.alpha = 0, nge.findOne("^intrigueBackAnimationSpine_" + a, s).setAnimationByMode(0, "sp_frame", nge.spine.LOOP), nge.tween.add(s).to({
                                    alpha: 1
                                }, 500).start(), nge.observer.fire("intrigue.setSymbolsTintToDark"), n.visible = !0, n.alpha = 0, nge.tween.add(n).to({
                                    alpha: 1
                                }, 500).start())
                            }
                        }
                    },
                    s = function(a) {
                        return function() {
                            if (!0 === t[a]) {
                                var s = e.bottomContainer.children[a - 2];
                                if (s) {
                                    var o = nge.findOne("^intrigueBackAnimationSpine_" + a, s),
                                        i = nge.tween.add(s).to({
                                            alpha: 0
                                        }, 300);
                                    i.onComplete.addOnce((function() {
                                        o.stop(), s.alpha = 1
                                    })), i.start(), nge.observer.fire("intrigue.setSymbolsTintToNormal"), (i = nge.tween.add(n).to({
                                        alpha: 0
                                    }, 400)).onComplete.addOnce((function() {
                                        n.visible = !1, n.alpha = 1
                                    })), i.start(), nge.observer.fire("sound.intrigue.fadeStop")
                                }
                            }
                        }
                    },
                    o = function() {
                        e.intrigueFgAnimation.stop(), t = {}, n.visible = !1
                    };
                this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("slotMachine.spinStart", o), nge.observer.add("Transport.close", o);
                    for (var t = 0; t < e.slotMachineCfg.mw; t++) nge.observer.add("slotMachine.reel_" + t + ".intrigue.start", a(t)), nge.observer.add("slotMachine.reel_" + t + ".animation.stop", s(t));
                    nge.observer.add("slotMachine.reel_4.animation.stop", o)
                }, this.create = function() {
                    e.super.create(), e.createDefault(), e.topContainer = nge.findOne("^spinificationContainerTop"), e.bottomContainer = nge.findOne("^spinificationContainerBottom"), nge.findOne("^foregroundContainer").addChild(e.topContainer), e.intrigueFgAnimation = nge.findOne("^intrigueFgAnimation"), nge.findOne("^reelsBorderContainer").addChild(e.bottomContainer), n = nge.findOne("^slotMachineIntrigueTintContainer"), t = {}
                }
            }))
        },
        1125: function(e, t) {
            nge.App[nge.appNS].Com.IntrigueZoomer = {}
        },
        1126: function(e, t) {
            nge.App[nge.appNS].Com.IntrigueZoomer.Cfg = nge.App.DjGameBase.Com.IntrigueZoomer.Cfg.extend((function() {
                this.params = this.super.get(), this.params.UI.push("^progressiveJackpot"), this.params.zoom = {
                    mults: [1.04, 1.04, 1.05],
                    durations: [5e3, 5e3, 5e3]
                }, this.params.moveOffset = [{
                    x: -20,
                    y: 0
                }, {
                    x: -30,
                    y: 0
                }, {
                    x: -40,
                    y: 0
                }]
            }))
        },
        1127: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel = {}
        },
        1128: function(e, t) {
            nge.App[nge.appNS].Com.JackpotStatusPanel.Cfg = nge.App.DjGameBase.Com.JackpotStatusPanel.Cfg.extend((function() {
                this.params.animateTransition = !0, this.params.animateInEasing = nge.Lib.Tween.Easing.Bounce.Out, this.params.animateOutEasing = nge.Lib.Tween.Easing.Quintic.Out
            }))
        },
        1129: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher = {}
        },
        1130: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                nge.App.getInstance("Com.Freespin.Cfg").get(), this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer UIFreespinWinContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea bgAreaFreeSpins logoFreespinContainer offersFreespinCounter offers1Container customButtonsVerticalMobileContainer".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                fromDark: ["UISpinPanelsContainer"],
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea".split(" ")
                            },
                            freespinStartPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgAreaFreeSpins logoFreespinContainer".split(" ")
                            },
                            freespinEndPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "UISpinPanelsContainer UISpinPanel_Manual_FreespinGame_Container UIWinContainer UIQuickSettingsPanelContainer UIBottomPanelsContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgAreaFreeSpins logoFreespinContainer".split(" ")
                            },
                            gameOfferPopup: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "UISpinPanelsContainer UISpinPanel_Manual_MainGame_Container UIQuickSettingsPanelContainer UIBottomPanelsContainer UIWinContainer winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea offersFreespinCounter".split(" ")
                            }
                        }
                    }
                }
            }))
        },
        1131: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile = {}
        },
        1132: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "winPopupContainer gameFreeSpinMobileContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea bgAreaFreeSpins logoFreespinContainer offers1Container customButtonsVerticalMobileContainer".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea".split(" ")
                            },
                            freespinStartPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea".split(" ")
                            },
                            gameFreeSpin: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgAreaFreeSpins logoFreespinContainer".split(" ")
                            },
                            freespinEndPopup: {
                                capture: {
                                    overlay: ["popupsContainer"]
                                },
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgAreaFreeSpins logoFreespinContainer".split(" ")
                            },
                            gameOfferPopup: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea offers1Container".split(" ")
                            },
                            gameOffer: {
                                static: "winPopupContainer gameScreenContainer reelsBorderContainer backgroundContainer foregroundContainer slotMachineFrameMainGameTop slotMachineFrameMainGameBottom slotMachineFrameLeft slotMachineFrameRight bgArea".split(" ")
                            }
                        }
                    }
                }
            }))
        },
        1133: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1134: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.DjGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "css/fonts/",
                    t = nge.appPath + "img/fonts/";
                this.fonts.americancaptain = e + "AA_American_Captain", this.fonts.arial = e + "arial", this.atlasesGroups = ["atlases"], this.bitmapFonts.counter_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: t + "counter_font.png",
                    bitmapFont: t + "counter_font.fnt"
                }, this.bitmapFonts.bigwin_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: t + "bigwin_font.png",
                    bitmapFont: t + "bigwin_font.fnt"
                }, this.bitmapFonts.regularwin_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: t + "regularwin_font.png",
                    bitmapFont: t + "regularwin_font.fnt"
                }
            }))
        },
        1135: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets = {}
        },
        1136: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets.Controller = nge.App.ClassicGameBase.Com.LoadAssets.Controller.extend((function() {
                this.preload = function() {
                    this.super.preload(), nge.wrap.cache.checkImageKey("settingsContainerBg") || nge.wrap.load.image("settingsContainerBg", nge.Lib.Helper.create1PxPng(42, 39, 50, 240, !0)), nge.wrap.cache.checkImageKey("intrigueTintBg") || nge.wrap.load.image("intrigueTintBg", nge.Lib.Helper.create1PxPng(20, 20, 20, 70, !0)), nge.wrap.cache.checkImageKey("betSlipBlocker1px") || nge.wrap.load.image("betSlipBlocker1px", nge.Lib.Helper.create1PxPng(45, 40, 54, 191, !0)), nge.wrap.cache.checkImageKey("advancedAutoplayBg") || nge.wrap.load.image("advancedAutoplayBg", nge.Lib.Helper.create1PxPng(40, 40, 51, 255, !0)), nge.wrap.cache.checkImageKey("advancedAutoplayNumberOfSpins") || nge.wrap.load.image("advancedAutoplayNumberOfSpins", nge.Lib.Helper.create1PxPng(48, 48, 61, 255, !0)), nge.wrap.cache.checkImageKey("1pxBlack") || nge.wrap.load.image("1pxBlack", nge.Lib.Helper.create1PxPng(1, 1, 1, 255, !0))
                }
            }))
        },
        1137: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable = {}
        },
        1138: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Cfg = nge.App.DjGameBase.Com.MiniPaytable.Cfg.extend((function() {
                this.singleton = !0;
                var e = {
                        payoutSymbolId: "1",
                        numbers: {
                            offsetX: 10,
                            offsetY: -32,
                            hDist: 40,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 51,
                            offsetY: -32,
                            hDist: 40,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16777215
                            }
                        }
                    },
                    t = {
                        numbers: {
                            offsetX: 10,
                            offsetY: -32,
                            hDist: 40,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 51,
                            offsetY: -32,
                            hDist: 40,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16777215
                            }
                        }
                    },
                    n = {
                        selectorPostfix: "s",
                        numbers: {
                            offsetX: 22,
                            offsetY: -88,
                            hDist: 40,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 50,
                            offsetY: -88,
                            hDist: 40,
                            style: {
                                font: "30pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        divider: {
                            assetKey: "miniPaytableBgSeparator",
                            anchorX: .5,
                            anchorY: .5,
                            scaleX: .8,
                            scaleY: .8,
                            x: 58,
                            y: 20
                        },
                        additional: {
                            x: 65,
                            y: 55,
                            maxWidth: 290,
                            style: {
                                font: "17pt futuraptmedium",
                                align: "center",
                                fill: 16777215,
                                stroke: 3087887,
                                strokeThickness: 2
                            },
                            localizationKey: "MINI_PAYTABLE_SCATTER_DESCRIPTION"
                        }
                    };
                this.cfg = {
                    slotMachineWidth: 1420,
                    slotMachineHeight: 880,
                    clickableZonePadding: 0,
                    tableCoords: [
                        [{
                            x: 226,
                            y: 66
                        }, {
                            x: 226,
                            y: 270
                        }, {
                            x: 226,
                            y: 472
                        }, {
                            x: 226,
                            y: 677
                        }],
                        [{
                            x: 516,
                            y: 66
                        }, {
                            x: 516,
                            y: 270
                        }, {
                            x: 516,
                            y: 472
                        }, {
                            x: 516,
                            y: 677
                        }],
                        [{
                            x: 803,
                            y: 66
                        }, {
                            x: 803,
                            y: 270
                        }, {
                            x: 803,
                            y: 472
                        }, {
                            x: 803,
                            y: 677
                        }],
                        [{
                            x: 1093,
                            y: 66
                        }, {
                            x: 1093,
                            y: 270
                        }, {
                            x: 1093,
                            y: 472
                        }, {
                            x: 1093,
                            y: 677
                        }],
                        [{
                            x: 1093,
                            y: 66
                        }, {
                            x: 1093,
                            y: 270
                        }, {
                            x: 1093,
                            y: 472
                        }, {
                            x: 1093,
                            y: 677
                        }]
                    ],
                    miniPaytableGlobalCoverName: "miniPaytableGlobalCover",
                    miniPaytablesContainerName: "miniPaytableContainer",
                    miniPaytableClickableZonesName: "miniPaytableClickableZones",
                    miniPaytablePopupContainerName: "miniPaytablePopupContainer",
                    leftContainer: {
                        name: "miniPaytableLeftContainer",
                        x: 90
                    },
                    rightContainer: {
                        name: "miniPaytableRightContainer",
                        x: 380
                    },
                    symbolSpriteName: "miniPaytableSymbolImage",
                    symbolSettings: {
                        0: {
                            numbers: {
                                offsetX: -10,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 31,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16777215
                                }
                            },
                            additional: {
                                x: 65,
                                y: 30,
                                maxWidth: 290,
                                class: "coloredText",
                                style: {
                                    font: "17pt futuraptmedium",
                                    align: "center",
                                    fill: 16777215,
                                    stroke: 3087887,
                                    strokeThickness: 2
                                },
                                localizationKey: "MINI_PAYTABLE_WILD_DESCRIPTION"
                            }
                        },
                        blank_1: {
                            payoutSymbolId: "0",
                            assetKey: "0",
                            numbers: {
                                offsetX: -10,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 31,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16777215
                                }
                            },
                            additional: {
                                x: 65,
                                y: 30,
                                maxWidth: 290,
                                class: "coloredText",
                                style: {
                                    font: "17pt futuraptmedium",
                                    align: "center",
                                    fill: 16777215,
                                    stroke: 3087887,
                                    strokeThickness: 2
                                },
                                localizationKey: "MINI_PAYTABLE_WILD_DESCRIPTION"
                            }
                        },
                        blank_2: {
                            payoutSymbolId: "0",
                            assetKey: "0_x2",
                            numbers: {
                                offsetX: -10,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 31,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16777215
                                }
                            },
                            additional: {
                                x: 65,
                                y: 30,
                                maxWidth: 290,
                                class: "coloredText",
                                style: {
                                    font: "17pt futuraptmedium",
                                    align: "center",
                                    fill: 16777215,
                                    stroke: 3087887,
                                    strokeThickness: 2
                                },
                                localizationKey: "MINI_PAYTABLE_WILD_DESCRIPTION"
                            }
                        },
                        blank_3: {
                            payoutSymbolId: "0",
                            assetKey: "0_x3",
                            numbers: {
                                offsetX: -10,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 31,
                                offsetY: 0,
                                hDist: 45,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16777215
                                }
                            },
                            additional: {
                                x: 65,
                                y: 30,
                                maxWidth: 290,
                                class: "coloredText",
                                style: {
                                    font: "17pt futuraptmedium",
                                    align: "center",
                                    fill: 16777215,
                                    stroke: 3087887,
                                    strokeThickness: 2
                                },
                                localizationKey: "MINI_PAYTABLE_WILD_DESCRIPTION"
                            }
                        },
                        1: e,
                        "1_1": e,
                        "1_2": e,
                        "1_3": e,
                        14: e,
                        "14_1": e,
                        "14_2": e,
                        "14_3": e,
                        2: t,
                        15: t,
                        12: n,
                        25: n,
                        other: {
                            numbers: {
                                offsetX: 10,
                                offsetY: -12,
                                hDist: 40,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16696173
                                }
                            },
                            values: {
                                offsetX: 51,
                                offsetY: -12,
                                hDist: 40,
                                style: {
                                    font: "30pt futuraptmedium",
                                    fill: 16777215
                                }
                            }
                        }
                    }
                }, this.get = function() {
                    return this.cfg
                }
            }))
        },
        1139: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Controller = nge.App.DjGameBase.Com.MiniPaytable.Controller.extend((function() {
                this.setSlotMachineReelsSymbols = function(e) {}
            }))
        },
        1140: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1141: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Controller = nge.App.DjGameBase.Com.Popup.Controller.extend((function() {
                function e(e, t, n, a, s, o, i, p) {
                    return e = nge.Mlm.Objects.Spine({
                        assetKey: e,
                        name: t,
                        x: n,
                        y: a,
                        isVisible: !1
                    }), s = nge.findOne("^" + s), s = nge.objects.create(e, s, !0), o && s.setAnimationByName(0, o, i, p), s
                }
                var t = this,
                    n = null,
                    a = null,
                    s = !1;
                this.create = function() {
                    this.super.create(), n = e("popupBackground", "popupBackgroundAnimation", 0, 0, "popupBackgroundAnimationContainer"), a = e("popupBackground", "popupRaysAnimation", 0, 0, "popupBackgroundAnimationContainer"), s = !1
                }, this.showPopup = function(e) {
                    this.super.showPopup(e), !e.popupName || "freespinStartPopup" !== e.popupName && "freespinEndPopup" !== e.popupName && "additionalFreespinsPopup" !== e.popupName && "betSlipWinPopup" !== e.popupName || (s = !0, n.setAnimationByMode(0, "bg_start", nge.spine.FREEZE), a.setAnimationByMode(0, "rays_loop", nge.spine.LOOP), a.alpha = 0, nge.tween.add(a).to({
                        alpha: 1
                    }, 300, nge.Lib.Tween.Easing.Linear.None).start())
                }, this.hidePopup = function() {
                    if (this.super.hidePopup(), s) {
                        s = !1, n.setAnimationByMode(0, "bg_end", nge.spine.NONE);
                        var e = nge.tween.add(a).to({
                            alpha: 0
                        }, 300, nge.Lib.Tween.Easing.Linear.None);
                        e.onComplete.addOnce((function() {
                            a.stop()
                        })), e.start()
                    }
                };
                var o = function() {
                    s && (s = !1, n.stop(), a.stop())
                };
                this.subscribe = function() {
                    t.super.subscribe(), nge.observer.add("Transport.close", o)
                }
            }))
        },
        1142: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        show: "fs_start_popup",
                        loop: "fs_loop_popup",
                        hide: "fs_end_popup"
                    },
                    t = {
                        color: 0,
                        a: .7,
                        showDuration: 500,
                        hideDuration: 250,
                        hideDelay: 250
                    },
                    n = {
                        type: 4,
                        name: "okButton",
                        x: 0,
                        y: 295,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1,
                        pixelPerfectOver: !1,
                        pixelPerfectClick: !1,
                        class: "popupButton",
                        assetKey: "okButtonPopup"
                    },
                    a = {
                        font: "200pt americancaptain",
                        fill: 5587291,
                        stroke: 4389,
                        strokeThickness: 20,
                        align: "center",
                        lineJoin: "round",
                        lineHeight: 36
                    },
                    s = {
                        font: "170pt americancaptain",
                        fill: 5587291,
                        stroke: 4389,
                        strokeThickness: 20,
                        align: "center",
                        lineJoin: "round",
                        lineHeight: 36
                    },
                    o = {
                        font: "120pt americancaptain",
                        fill: 5587291,
                        stroke: 4389,
                        strokeThickness: 20,
                        align: "center",
                        lineJoin: "round",
                        lineHeight: 160
                    };
                this.cfg.popups = {
                    freespinStartPopup: {
                        shadow: t,
                        background: {
                            type: "spine",
                            assetKey: "popupBackground",
                            animations: e
                        },
                        button: n,
                        content: [{
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -10,
                                maxWidth: 1600,
                                gradient: [
                                    [.1, 16240190],
                                    [.26, 15579702],
                                    [.46, 14258724],
                                    [.9, 13334296]
                                ],
                                style: a
                            },
                            followSlotName: "txt_congrats"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                gradient: [
                                    [.1, 6204362],
                                    [.26, 6074072],
                                    [.46, 3636402],
                                    [.9, 1923479]
                                ],
                                style: s
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: mt.objects.BITMAP_TEXT,
                                text: "1234",
                                name: "popup_fs_start_counter",
                                size: 190,
                                anchorX: .5,
                                anchorY: .5,
                                y: 65,
                                assetKey: "bigwin_font"
                            },
                            followSlotName: "freespin_counter",
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: mt.objects.GROUP,
                                contents: [{
                                    type: mt.objects.TEXT,
                                    text: nge.i18n.get("POPUP_FREE_GAMES_WON"),
                                    anchorX: .5,
                                    anchorY: .5,
                                    y: 10,
                                    gradient: [
                                        [.1, 6204362],
                                        [.26, 6074072],
                                        [.46, 3636402],
                                        [.9, 1923479]
                                    ],
                                    style: s
                                }]
                            },
                            followSlotName: "credits_txt"
                        }]
                    },
                    freespinEndPopup: {
                        shadow: t,
                        background: {
                            type: "spine",
                            assetKey: "popupBackground",
                            animations: {
                                show: "tw_start_popup",
                                loop: "tw_loop_popup",
                                hide: "tw_end_popup"
                            }
                        },
                        button: n,
                        content: [{
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -10,
                                gradient: [
                                    [.1, 16240190],
                                    [.26, 15579702],
                                    [.46, 14258724],
                                    [.9, 13334296]
                                ],
                                style: a
                            },
                            followSlotName: "txt_congrats"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                gradient: [
                                    [.1, 6204362],
                                    [.26, 6074072],
                                    [.46, 3636402],
                                    [.9, 1923479]
                                ],
                                style: s
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: mt.objects.BITMAP_TEXT,
                                text: "1234",
                                name: "popup_fs_end_counter",
                                size: 190,
                                anchorX: .5,
                                anchorY: .5,
                                y: 65,
                                assetKey: "bigwin_font"
                            },
                            followSlotName: "total_win_counter",
                            dataKey: "freespinEndPopupValue"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("CREDITS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: 10,
                                gradient: [
                                    [.1, 6204362],
                                    [.26, 6074072],
                                    [.46, 3636402],
                                    [.9, 1923479]
                                ],
                                style: s
                            },
                            followSlotName: "credits_txt"
                        }]
                    },
                    additionalFreespinsPopup: {
                        shadow: t,
                        background: {
                            type: "spine",
                            assetKey: "popupBackground",
                            animations: e
                        },
                        button: n,
                        content: [{
                            model: {
                                type: mt.objects.TEXT,
                                name: "additionalFreespinCongratText",
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -10,
                                maxWidth: 1600,
                                gradient: [
                                    [.1, 16240190],
                                    [.26, 15579702],
                                    [.46, 14258724],
                                    [.9, 13334296]
                                ],
                                style: a
                            },
                            followSlotName: "txt_congrats"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                text: nge.i18n.get("POPUP_YOU_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                gradient: [
                                    [.1, 6204362],
                                    [.26, 6074072],
                                    [.46, 3636402],
                                    [.9, 1923479]
                                ],
                                style: s
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: mt.objects.BITMAP_TEXT,
                                name: "additionalFreespinsPopupCounter",
                                text: "10",
                                size: 190,
                                anchorX: .5,
                                anchorY: .8,
                                y: 65,
                                assetKey: "bigwin_font"
                            },
                            dataKey: "additionalFreespinValue",
                            followSlotName: "freespin_counter"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                name: "additionalFreespinsPopupText",
                                text: nge.i18n.get("POPUP_ADDITIONAL_FREE_SPINS"),
                                anchorX: .5,
                                anchorY: .6,
                                y: 10,
                                gradient: [
                                    [.1, 6204362],
                                    [.26, 6074072],
                                    [.46, 3636402],
                                    [.9, 1923479]
                                ],
                                style: o
                            },
                            followSlotName: "credits_txt"
                        }]
                    },
                    betSlipWinPopup: {
                        shadow: t,
                        background: {
                            type: "spine",
                            assetKey: "popupBackground",
                            animations: {
                                show: "totalizator_start_popup",
                                loop: "totalizator_loop_popup",
                                hide: "totalizator_end_popup"
                            }
                        },
                        button: {
                            type: 4,
                            name: "okButton",
                            x: 0,
                            y: 379,
                            anchorX: .5,
                            anchorY: .498,
                            isVisible: !1,
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1,
                            class: "popupButton",
                            assetKey: "okButtonPopup"
                        },
                        content: [{
                            model: {
                                type: mt.objects.IMAGE,
                                assetKey: "2",
                                anchorX: .5,
                                anchorY: .5
                            },
                            dataKey: "bet_slip_symbol_image",
                            followSlotName: "symbol_holder"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                name: "betSlipCongratText",
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                y: -10,
                                maxWidth: 1600,
                                gradient: [
                                    [.1, 16240190],
                                    [.26, 15579702],
                                    [.46, 14258724],
                                    [.9, 13334296]
                                ],
                                style: a
                            },
                            followSlotName: "txt_congrats"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                name: "betSlipCollectedText",
                                text: "20 COLLECTED",
                                anchorX: .5,
                                anchorY: .48,
                                y: 10,
                                gradient: [
                                    [.1, 6204362],
                                    [.26, 6074072],
                                    [.46, 3636402],
                                    [.9, 1923479]
                                ],
                                style: o
                            },
                            dataKey: "bet_slip_collected_text",
                            followSlotName: "collected_text"
                        }, {
                            model: {
                                type: mt.objects.TEXT,
                                name: "betSlipWinText",
                                text: nge.i18n.get("WIN"),
                                anchorX: .5,
                                anchorY: .48,
                                y: 10,
                                gradient: [
                                    [.1, 16240190],
                                    [.26, 15579702],
                                    [.46, 14258724],
                                    [.9, 13334296]
                                ],
                                style: o
                            },
                            followSlotName: "win_txt"
                        }, {
                            model: {
                                type: mt.objects.BITMAP_TEXT,
                                text: "1234",
                                name: "popup_fs_end_counter",
                                size: 180,
                                anchorX: .5,
                                anchorY: .5,
                                y: 65,
                                assetKey: "bigwin_font"
                            },
                            dataKey: "bet_slip_win_counter",
                            followSlotName: "totalizator_counter"
                        }]
                    },
                    insufficientFundsPopup: {
                        shadow: t,
                        background: {
                            type: "static",
                            assetKey: "notificationPopupBackground",
                            durations: {
                                show: 500,
                                hide: 510
                            }
                        },
                        button: {
                            type: mt.objects.BUTTON,
                            name: "okButton",
                            x: 0,
                            y: 300,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1,
                            class: "popupButton",
                            assetKey: "notificationOkButton",
                            pixelPerfectOver: !1,
                            pixelPerfectClick: !1
                        },
                        content: [{
                            model: {
                                type: mt.objects.TEXT,
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
                                type: mt.objects.TEXT,
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
        1143: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                var t = e;
                t || (t = nge.appPath + "img/"), (e = nge.App.DjGameBase.Com.Popup.Tpl(e)).assets.contents = [{
                    type: mt.assets.SPINE,
                    key: "popupBackground",
                    spine: t + "spine/popup/popup.json"
                }, {
                    type: mt.assets.IMAGE,
                    key: "notificationPopupBackground",
                    fullPath: t + "playarea/notification_popup_bg.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "notificationOkButton",
                    fullPath: t + "playarea/notificationOkButton.png",
                    frameWidth: 284
                }, {
                    type: mt.assets.IMAGE,
                    key: "okButtonPopup",
                    fullPath: t + "playarea/okButtonPopup.png",
                    frameWidth: 228
                }];
                var n = (t = e.objects.contents.filter((function(e) {
                    return "popupContainer" === e.name
                }))[0]).contents.filter((function(e) {
                    return "popupContentHolder" === e.name
                }))[0];
                return n = t.contents.indexOf(n), t.contents.splice(n + 1, 0, {
                    type: mt.objects.GROUP,
                    name: "popupBackgroundAnimationContainer",
                    anchorX: .5,
                    anchorY: .5,
                    contents: []
                }), e
            }
        },
        1144: function(e, t) {
            nge.App[nge.appNS].Com.ProgressiveJackpot = {}
        },
        1145: function(e, t) {
            nge.App[nge.appNS].Com.ProgressiveJackpot.Controller = nge.Com.Base.extend((function() {
                var e, t, n, a, s, o = this,
                    i = [],
                    p = [],
                    l = {},
                    r = !1,
                    c = 1;
                this.currencyColor = "#EFC273";
                var m = function() {
                        var e = +nge.localData.get("lines.value"),
                            m = +nge.localData.get("bet.value"),
                            y = +nge.localData.get("coins.value"),
                            u = (r ? e * m / a : 1) * c,
                            b = function(e, t) {
                                return !!e && (t || (t = " "), (e = e.toString().split("."))[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, t), e.join("."))
                            }((t[0].value * (r ? e * m * y / n : 1) * c).toFixed(2)),
                            g = nge.localData.get("balance.currency") || "";
                        i.forEach((function(e) {
                            e.text = b + " " + g, e.clearColors(), e.addColor(o.currencyColor, b.length)
                        }));
                        var h = Math.round(t[0].value / s * u).toString();
                        for (p.forEach((function(e) {
                                e.text = h
                            })), e = {}, m = 1; 10 >= m; e = {
                                $jscomp$loop$prop$val$34: e.$jscomp$loop$prop$val$34
                            }, m++) e.$jscomp$loop$prop$val$34 = m * t[0].value / s * u, l[m].forEach(function(e) {
                            return function(t) {
                                t.text = Math.round(e.$jscomp$loop$prop$val$34).toString()
                            }
                        }(e))
                    },
                    y = function(e) {
                        var t = {},
                            n = 0,
                            a = e.length,
                            s = 0;
                        e: for (; s < a; s++) {
                            var o = e[s].symbols,
                                i = e[s].payout,
                                p = e[s].matchCount,
                                l = 0,
                                r = o[0];
                            if (0 !== i && 20 === o.length) {
                                if (0 < p) r = "any_" + o.join("_"), l = p;
                                else
                                    for (p = 0; p < o.length; p++) {
                                        if (r !== o[p]) continue e;
                                        l++
                                    }
                                t[r] || (n++, t[r] = {
                                    name: l,
                                    value: i
                                })
                            }
                        }
                        return 1 > n ? null : t
                    },
                    u = function(e) {
                        e && e.data && e.data.payouts && (t = y(e.data.payouts)), m()
                    },
                    b = function(e) {
                        (e.includes("hold") || e.includes("linePlusMobile") || e.includes("lineMinusMobile") || e.includes("linesChanger")) && nge.rafSetTimeout(m, 200)
                    },
                    g = function() {
                        var e = +nge.localData.get("lines.value"),
                            t = +nge.localData.get("bet.value"),
                            o = +nge.localData.get("coins.value");
                        r = !1, s = o, n = e * t * o, a = e * t
                    },
                    h = function() {
                        r = !0, m()
                    },
                    f = function(e) {
                        c = e, h()
                    };
                this.subscribe = function() {
                    nge.observer.add("slotMachine.spinStart", g), nge.observer.add("bet.change", h), nge.observer.add("lines.change", h), nge.observer.add("coins.change", h), nge.observer.add("popup.animate.start", m), nge.observer.add("buttons.pressCommand", b), nge.observer.add("freespin.setMultiplier", f), nge.observer.add("transportMessage.PayoutsUpdateResponse", u)
                }, this.create = function() {
                    o.super.create(), e || o.subscribe(), i = nge.findAll(".jackpotPlayareaValue"), p = nge.findAll(".creditsJackpotPlayareaValue");
                    for (var n = 1; 10 >= n; n++) l[n] = nge.findAll("^jackpot" + n + "xValue");
                    return g(), t = y(nge.localData.get("payout.cfg")), m(), e = !0
                }
            }))
        },
        1146: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1147: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "regularWinContainer",
                            x: 960,
                            y: 404,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1,
                            contents: [{
                                type: mt.objects.BITMAP_TEXT,
                                name: "regularWinCounter",
                                isVisible: !1,
                                x: 0,
                                y: 50,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "regularwin_font",
                                size: 85
                            }]
                        }]
                    }
                }
            }
        },
        1148: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Cfg = nge.App.DjGameBase.Com.RegularWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.parentContainerName = "winPopupContainer", this.params.regularProfile = "hideWithDelay", this.params.turboProfile = "hideWithDelay"
            }))
        },
        1149: function(e, t) {
            nge.App[nge.appNS].Com.Respin = {}
        },
        1150: function(e, t) {
            nge.App[nge.appNS].Com.Respin.Controller = nge.Com.Respin.Controller.extend((function() {
                var e = this,
                    t = !1,
                    n = !1,
                    a = null,
                    s = !1,
                    o = null,
                    i = !0,
                    p = !1,
                    l = [0, 0, 0, 0, 0],
                    r = function() {
                        for (var e = [], t = 0; 5 > t; t++) {
                            e.push([]);
                            for (var n = 0; 4 > n; n++) e[t].push({
                                value: 0,
                                wild: null
                            })
                        }
                        return e
                    };
                p = r();
                var c = function() {
                    o = n = !1, i = !0;
                    for (var e = 0; e < p.length; e++)
                        for (var t = 0; t < p[e].length; t++) {
                            var a = p[e][t].wild;
                            a && (a.stop(), a.parent && a.parent.removeChild(a), a.destroy())
                        }
                    p = r(), l = [0, 0, 0, 0, 0]
                };
                this.respinStart = function() {
                    s = n = !0, "SpinRequest" === nge.localData.get("spin.type") && (i = !0, a.showRespinPopup()), e.setSpinTypeRespins(), nge.localData.set("respin.inProgress", !0), nge.localData.set("respin.lastSpin", !1), nge.observer.fire("buttons.respinMode"), nge.observer.fire("respin.startProcess.end")
                }, this.finishRespin = function() {
                    n = !1, i = !0, nge.localData.get("respin.inProgress") && (nge.localData.set("spin.type", "SpinRequest"), nge.localData.set("respin.inProgress", !1)), nge.observer.fire("respin_fire_loop.stop"), nge.observer.fire("respin_reel.stop"), nge.localData.set("slotMachineResponseBonusSpin", !1);
                    for (var e = 0; e < p.length; e++)
                        for (var t = 0; t < p[e].length; t++) 1 === p[e][t].value && nge.observer.fire("slotMachine.setSymbol", {
                            coords: [e, t],
                            key: "0"
                        });
                    c(), nge.observer.fire("sound.finishRespin")
                }, this._spinCompleteResponse = function() {
                    if (!nge.localData.get("respin.inProgress")) return !1;
                    var t = "Ready" === o.state;
                    l = [0, 0, 0, 0, 0], t ? e.finishRespin() : s = !0
                }, this.spinCommand = function() {
                    if (!s) return !1;
                    nge.observer.fire("slotMachine.spinCommand"), s = !1
                };
                var m = function(e) {
                        if (n = !0, o = e, (e = e.slotWin) && e.reSpins && e.reSpins.length) {
                            l = [0, 0, 0, 0, 0], e = e.reSpins;
                            var t = p;
                            if (n)
                                for (var a = 0; a < e.length; a++) {
                                    var s = e[a];
                                    if ("ReSpins" === s.bonusName) {
                                        s = s.wonSymbols;
                                        for (var i = 0; i < s.length; i++) {
                                            var r = s[i],
                                                c = r[0],
                                                m = 0 < c ? 1 : 0;
                                            0 === (r = t[c][r[1]]).value && 1 === m && (l[c] = 1), r.value = m
                                        }
                                    }
                                }
                            if (e = p, n)
                                for (t = 0; t < e.length; t++)
                                    for (a = e[t], s = 0; s < a.length; s++) a[s].value && !a[s].wild && (i = nge.Mlm.Objects.Spine({
                                        name: "holdedSymbol_" + t + "_" + s,
                                        assetKey: "m00_000",
                                        anchorX: .5,
                                        anchorY: .5,
                                        isVisible: !1
                                    }), i = nge.objects.create(i), a[s].wild = i, nge.observer.fire("slotMachine.syncHoldSymbol", {
                                        symbolPosition: {
                                            reel: t,
                                            row: s
                                        },
                                        symbolData: a[s]
                                    }))
                        }
                    },
                    y = function() {
                        nge.observer.fire("respin.spinificate.stop", o.spinResult.columns), a.unholdReel()
                    },
                    u = function() {
                        nge.localData.get("respin.inProgress") && (n ? o && o.spinResult && (a.holdWilds(p), a.sortWilds(p), e.spinCommand(), i && (a.holdReel(), nge.observer.fire("respin.spinificate.start"), i = !1)) : nge.observer.fire("respin.end"))
                    },
                    b = function(e) {
                        return function() {
                            nge.localData.get("respin.inProgress") && 1 === l[e] && nge.observer.fire("respin.playWildSound")
                        }
                    },
                    g = function() {
                        c()
                    };
                this.create = function() {
                    if (e.createDefault(), !t) {
                        t = !0, nge.observer.add("spinComplete.noWinButHasBonusInRespin", u), nge.observer.add("respin.lastRespinReadyToComplete", y), nge.observer.add("slotMachine.spinResponse", m), nge.observer.add("spinReadyToProceed", u), nge.observer.add("Transport.close", g);
                        for (var s = 0; 5 > s; s++) nge.observer.add("slotMachine.reel_" + s + ".animation.stop", b(s), !1, !0)
                    }
                    e.super.create(), n = !0, (a = e.getInstance("View")).create()
                }
            }))
        },
        1151: function(e, t) {
            nge.App[nge.appNS].Com.Respin.View = Class.extend((function() {
                var e = null,
                    t = null,
                    n = null,
                    a = function(e, t, n, a) {
                        n.alpha = e, (e = nge.tween.add(n).to({
                            alpha: t
                        }, 500)).onComplete.addOnce((function() {
                            if (n.alpha = t, a) return a()
                        })), e.start()
                    };
                this.showRespinPopup = function() {
                    n.visible = !0, n.scale.set(1, 1), n.alpha = 0, nge.tween.add(n).to({
                        alpha: 1
                    }, 250, nge.Lib.Tween.Easing.Linear.None, !1).start(), n.y = 485;
                    var e, t = nge.Lib.Tween.Easing.Linear.None;
                    nge.rafSetTimeout((function() {
                        if (n) {
                            e = {
                                x: 1.5,
                                y: 1.5
                            }, nge.tween.add(n.scale).to(e, 500, t, !1).start(), e = {
                                alpha: 0
                            }, nge.tween.add(n).to(e, 500, t, !1).start(), e = {
                                y: 435
                            };
                            var a = nge.tween.add(n).to(e, 500, t, !1);
                            a.onComplete.add((function() {
                                n.visible = !1
                            })), a.start()
                        }
                    }), 1e3)
                }, this.holdWilds = function(e) {
                    for (var t = 0; t < e.length; t++)
                        for (var n = 0; n < e[t].length; n++) {
                            var a = e[t][n].value,
                                s = e[t][n].wild;
                            if (0 === a && s) s.stop(!1);
                            else if (0 !== a) {
                                if (!s) throw Error("Invalid state");
                                nge.observer.fire("slotMachine.holdSymbol", {
                                    reel: t,
                                    row: n
                                }), s.setAnimationByMode(0, "static_x" + a, nge.spine.FREEZE)
                            }
                        }
                }, this.sortWilds = function(e) {
                    for (var n = 0, a = 0; a < e.length; a++)
                        for (var s = e[a], o = 0; o < s.length; o++) {
                            var i = s[o].wild;
                            i && (i.z = n++, i = s[o].upgrade) && (i.z = n + 100)
                        }
                    t.children && t.length && t.children[0].sort()
                }, this.holdReel = function() {
                    nge.rafSetTimeout((function() {
                        a(0, 1, e, !1), e.setAnimationByMode(0, "play", nge.spine.LOOP)
                    }), 1)
                }, this.unholdReel = function() {
                    a(1, 0, e, (function() {
                        e.stop()
                    }))
                }, this.create = function() {
                    if (!(e = nge.findOne("^respinReelHoldAnimation"))) throw Error("Can't find respinReelHoldAnimation");
                    var a = nge.findOne("^respinMainContainer");
                    if (!a) throw Error("Can't find respinMainContainer");
                    if (!(t = nge.findOne("^slotMachineWildsContainer"))) throw Error("Can't find slotMachineWildsContainer");
                    if (!(n = nge.findOne("^respinPopupText"))) throw Error("Can't find respinPopupText");
                    a.addChild(e)
                }
            }))
        },
        1152: function(e, t) {
            nge.App[nge.appNS].Com.Respin.Tpl = function(e) {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: mt.objects.IMAGE,
                            name: "respinPopupText",
                            assetKey: "respinText",
                            isVisible: !1,
                            anchorX: .5,
                            anchorY: .5,
                            x: 960,
                            y: 485
                        }, {
                            type: mt.objects.SPINE,
                            name: "respinReelHoldAnimation",
                            assetKey: "respin_animation",
                            x: 140,
                            y: 419,
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1153: function(e, t) {
            nge.App[nge.appNS].Com.Shaker = {}
        },
        1154: function(e, t) {
            nge.App[nge.appNS].Com.Shaker.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    bigWin: {
                        shakingLayers: ["gameScreenContainer", "reelsBorderContainer", "backgroundContainer", "logoFreespinContainer"],
                        time: 3e3,
                        startEvents: ["win.big.preWinEvent"],
                        shakingStrength: 2,
                        stopEvents: !1,
                        scaleWorld: !1,
                        moveWorld: !1
                    },
                    intrigue: {
                        time: 3e3,
                        shakingLayers: ["gameScreenContainer", "reelsBorderContainer", "backgroundContainer", "foregroundContainer", "logoFreespinContainer"],
                        startEvents: ["slotMachine.reel_2.intrigue.start"],
                        stopEvents: ["slotMachine.spinComplete"],
                        shakingStrength: 2
                    },
                    regularWin: {
                        shakingLayers: ["gameScreenContainer", "reelsBorderContainer", "backgroundContainer", "logoFreespinContainer"],
                        time: 500,
                        startEvents: ["win.regular.readyToHide"],
                        stopEvents: ["win.regular.hide"],
                        shakingStrength: 1,
                        scaleWorld: !1,
                        moveWorld: !1
                    }
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1155: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1156: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.additionalBlurs = !1, this.params.mw = 5, this.params.mh = 4, this.params.wildSymbol = "0", this.params.tintDark = 11118249, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = 1, this.params.tintNormalAlpha = 1, this.params.tintSpeed = 175, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tweenDuration.blur = 85, this.params.th = [4, 4, 4, 4, 4], this.params.tweenDuration.oldSymbols = 184, this.params.tweenDuration.newSymbols = 184, this.params.symbolsLanding = [], this.params.symbolsBlurKeys = ["102 103 104 105 106 107 108 109 110 111".split(" "), "100 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 102 103 104 105 106 107 108 109 110 111 112".split(" "), "100 102 103 104 105 106 107 108 109 110 111 112".split(" ")], this.params.parentName = "slotMachineGameContainer", this.params.maskName = "slotMachineMaskContainer", this.params.symbolAnimationContainerName = "slotMachineSymbolWinContainer", this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounter = [10, 16, 22, 28, 34], this.params.recyclerView.reelsSpeed = [1.9, 1.9, 1.9, 1.9, 1.9, 1.9], this.params.recyclerView.reelsIntrigueSpeed = 4, this.params.recyclerView.reelsSpeedUpSpeed = 3, this.params.recyclerView.borderSymbolsCount = 1, this.params.recyclerView.hideBorderSymbols = !1, this.params.recyclerView.intrigueAdditionalCounter = 180, this.params.recyclerView.reelBlursSize = 600, this.params.recyclerView.reelsMinStopCounter = 3, this.params.useBlursManager = !0
            }))
        },
        1157: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbols = nge.Com.SlotMachine.Symbols.extend((function() {
                this.items = [{
                    name: "0",
                    textureUrl: "m00_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_x1",
                        atlas: "m00_000"
                    },
                    repeat: 1,
                    textureZ: 100
                }, {
                    name: "13",
                    textureUrl: "m00_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_x1",
                        atlas: "m00_000"
                    },
                    repeat: 1,
                    textureZ: 100
                }, {
                    name: "0_x2",
                    textureUrl: "m00_000_x2.png"
                }, {
                    name: "0_x3",
                    textureUrl: "m00_000_x3.png"
                }, {
                    name: "1",
                    textureUrl: "m01_000_0.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_1",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "1_1",
                    textureUrl: "m01_000_1.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_2",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "1_2",
                    textureUrl: "m01_000_2.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_3",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "1_3",
                    textureUrl: "m01_000_3.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_4",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "1_big",
                    textureUrl: "m01_000.png"
                }, {
                    name: "14",
                    textureUrl: "m01_000_0.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_1",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "14_1",
                    textureUrl: "m01_000_1.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_2",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "14_2",
                    textureUrl: "m01_000_2.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_3",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "14_3",
                    textureUrl: "m01_000_3.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play_4",
                        atlas: "m01_000"
                    },
                    repeat: 1
                }, {
                    name: "14_big",
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
                    name: "15",
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
                    name: "16",
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
                    name: "17",
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
                    name: "18",
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
                    name: "19",
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
                    name: "20",
                    textureUrl: "m07_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m07_000"
                    },
                    repeat: 1
                }, {
                    name: "8",
                    textureUrl: "m08_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m08_000"
                    },
                    repeat: 1
                }, {
                    name: "21",
                    textureUrl: "m08_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m08_000"
                    },
                    repeat: 1
                }, {
                    name: "9",
                    textureUrl: "m09_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m09_000"
                    },
                    repeat: 1
                }, {
                    name: "22",
                    textureUrl: "m09_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m09_000"
                    },
                    repeat: 1
                }, {
                    name: "10",
                    textureUrl: "m10_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m10_000"
                    },
                    repeat: 1
                }, {
                    name: "23",
                    textureUrl: "m10_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m10_000"
                    },
                    repeat: 1
                }, {
                    name: "11",
                    textureUrl: "m11_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m11_000"
                    },
                    repeat: 1
                }, {
                    name: "24",
                    textureUrl: "m11_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m11_000"
                    },
                    repeat: 1
                }, {
                    name: "12",
                    textureUrl: "m12_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m12_000"
                    },
                    repeat: 1,
                    textureZ: 99
                }, {
                    name: "25",
                    textureUrl: "m12_000.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "m12_000"
                    },
                    repeat: 1,
                    textureZ: 99
                }, {
                    name: "blank_1",
                    textureUrl: "blank.png",
                    repeat: 1
                }, {
                    name: "blank_2",
                    textureUrl: "blank.png",
                    repeat: 1
                }, {
                    name: "blank_3",
                    textureUrl: "blank.png",
                    repeat: 1
                }, {
                    name: "100",
                    textureUrl: "m00_000_blured.png",
                    animationFrames: ["m00_000_blured.png"]
                }, {
                    name: "100_x2",
                    textureUrl: "m00_000_x2_blured.png",
                    animationFrames: ["m00_000_x2_blured.png"]
                }, {
                    name: "100_x3",
                    textureUrl: "m00_000_x3_blured.png",
                    animationFrames: ["m00_000_x3_blured.png"]
                }, {
                    name: "101",
                    textureUrl: "m01_000_blured.png",
                    animationFrames: ["m01_000_blured.png"]
                }, {
                    name: "101_1",
                    textureUrl: "m01_001_blured.png",
                    animationFrames: ["m01_001_blured.png"]
                }, {
                    name: "101_2",
                    textureUrl: "m01_002_blured.png",
                    animationFrames: ["m01_002_blured.png"]
                }, {
                    name: "101_3",
                    textureUrl: "m01_003_blured.png",
                    animationFrames: ["m01_003_blured.png"]
                }, {
                    name: "102",
                    textureUrl: "m02_000_blured.png",
                    animationFrames: ["m02_000_blured.png"]
                }, {
                    name: "103",
                    textureUrl: "m03_000_blured.png",
                    animationFrames: ["m03_000_blured.png"]
                }, {
                    name: "104",
                    textureUrl: "m04_000_blured.png",
                    animationFrames: ["m04_000_blured.png"]
                }, {
                    name: "105",
                    textureUrl: "m05_000_blured.png",
                    animationFrames: ["m05_000_blured.png"]
                }, {
                    name: "106",
                    textureUrl: "m06_000_blured.png",
                    animationFrames: ["m06_000_blured.png"]
                }, {
                    name: "107",
                    textureUrl: "m07_000_blured.png",
                    animationFrames: ["m07_000_blured.png"]
                }, {
                    name: "108",
                    textureUrl: "m08_000_blured.png",
                    animationFrames: ["m08_000_blured.png"]
                }, {
                    name: "109",
                    textureUrl: "m09_000_blured.png",
                    animationFrames: ["m09_000_blured.png"]
                }, {
                    name: "110",
                    textureUrl: "m10_000_blured.png",
                    animationFrames: ["m10_000_blured.png"]
                }, {
                    name: "111",
                    textureUrl: "m11_000_blured.png",
                    animationFrames: ["m11_000_blured.png"]
                }, {
                    name: "112",
                    textureUrl: "m12_000_blured.png",
                    animationFrames: ["m12_000_blured.png"]
                }]
            }))
        },
        1158: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t, n, a = this,
                    s = this,
                    o = ["12", "25"];
                this.onSpinificateStartHandler = function(e) {
                    a._service.onSpinificateStartHandler(e)
                }, this.onSpinificateStopHandler = function(e) {
                    a._service.onSpinificateStopHandler(e)
                }, this.setSymbolsTintToDark = function(t, n) {
                    nge.localData.get("freespin.inProgress") && nge.observer.fire("freespin.setSymbolsTintOn", {
                        cfg: e,
                        exceptions: t,
                        winMap: n
                    }), a.super.setSymbolsTintToDark(t, n)
                }, this.setSymbolsTintToNormal = function(t) {
                    nge.localData.get("freespin.inProgress") && nge.observer.fire("freespin.setSymbolsTintOff", e), a.super.setSymbolsTintToNormal(e.tintNormal, e.tintNormalAlpha, !1)
                }, this.restoreTint = function() {
                    nge.localData.get("respin.inProgress") || s.super.restoreTint()
                };
                var i = function() {
                        for (var n = 0; 2 > n; n++)
                            for (var a = 0; a < e.mh; a++) {
                                var s = t.getSymbolByPosition({
                                    reel: n,
                                    row: a
                                });
                                s && (o.includes(s.getName()) || s.changeTint(e.tintDark, e.tintDarkAlpha, 500, null, null, !1))
                            }
                    },
                    p = function() {
                        if (!nge.localData.get("respin.inProgress"))
                            for (var n = 0; 2 > n; n++)
                                for (var a = 0; a < e.mh; a++) {
                                    var s = t.getSymbolByPosition({
                                        reel: n,
                                        row: a
                                    });
                                    s && (o.includes(s.getName()) || s.changeTint(e.tintNormal, e.tintNormalAlpha, 400, null, null, !1))
                                }
                    },
                    l = function() {
                        for (var a = 0; 5 > a; a++) {
                            var s = t.getSymbolByPosition({
                                reel: a,
                                row: 4
                            });
                            s && s.changeTint(e.tintDark, e.tintDarkAlpha, n, null, null, !0), (s = t.getSymbolByPosition({
                                reel: a,
                                row: -1
                            })) && s.changeTint(e.tintDark, e.tintDarkAlpha, n, null, null, !0)
                        }
                    },
                    r = function() {
                        nge.localData.get("respin.inProgress") || nge.rafSetTimeout((function() {
                            for (var a = 0; 5 > a; a++) {
                                var s = t.getSymbolByPosition({
                                    reel: a,
                                    row: 4
                                });
                                s && s.changeTint(e.tintNormal, e.tintNormalAlpha, n, null, null, !1), (s = t.getSymbolByPosition({
                                    reel: a,
                                    row: -1
                                })) && s.changeTint(e.tintNormal, e.tintNormalAlpha, n, null, null, !1)
                            }
                        }), 1)
                    },
                    c = function() {
                        a._service._reset()
                    },
                    m = function() {
                        s.blursManager.onSpinStart()
                    },
                    y = function() {
                        s.blursManager.onStopCommand()
                    };
                this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("slotMachine.syncHoldSymbol", this._service.syncHoldSymbol), nge.observer.add("Transport.close", c), nge.observer.add("intrigue.setSymbolsTintToDark", i), nge.observer.add("intrigue.setSymbolsTintToNormal", p), nge.observer.add("slotMachine.spinStart", m), nge.observer.add("slotMachine.stopCommand", y), nge.observer.add("winlines.animateAll", l), nge.observer.add("slotmachine.tint.dark", l), nge.observer.add("slotMachine.spinStart", r)
                }, this.create = function() {
                    a.super.create(), e = a.getInstance("Cfg").get(), t = s._service._view, n = void 0 === e.tintSpeed ? 350 : e.tintSpeed
                }
            }))
        },
        1159: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Service = nge.App.DjGameBase.Com.SlotMachine.Service.extend((function() {
                var e = this;
                this.syncHoldSymbol = function(t) {
                    e._view.syncHoldSymbol(t.symbolPosition, t.symbolData)
                }, this.onSpinificateStartHandler = function(t) {
                    e._view.startRespinSpinification(t)
                }, this.onSpinificateStopHandler = function(t) {
                    e._view.stopRespinSpinification(t)
                }, this._doSpin = function(e) {
                    return this.super._doSpin(e), this._view.setNextReelsCfg(e.spinResult.columns, e), !0
                }, this.spinCompleteOnLastRespinCallback = function() {
                    nge.observer.fire("respin.lastRespinReadyToComplete")
                }, this._reset = function() {
                    e._view.reset()
                }, this.create = function(t) {
                    e.super.create(t), e._view.create()
                }
            }))
        },
        1160: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.DjGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                var e = this,
                    t = ["1", "14"],
                    n = this,
                    a = 0,
                    s = !1,
                    o = !1,
                    i = !1;
                this.startRespinSpinification = function() {
                    o = s = !1, i = !0
                }, this.stopRespinSpinification = function(t) {
                    i = o = s = !1, t = p(nge.Lib.Helper.jsObjClone(t)), nge.localData.set("slotMachine_reelsSymbols", t), e._reels[0].stop(t[0].slice(0, e._cfg.mhv[0]), 0), nge.rafSetTimeout((function() {
                        e._service.spinCompleteCallback()
                    }), e._cfg.spinCompleteDelay + 500)
                }, this.speedUpReel = function(t) {
                    i && 0 === t || e._reels[t].speedUp()
                }, this.reelSpins = function(t) {
                    t = void 0 === t ? "forward" : t, e._spinDirection = t, e._requestStartTime = nge.Lib.Time.get();
                    var n = i && s ? 1 : 0;
                    for (e._speedUp = !1, e._reelsStoped = n; n < e._reels.length; n++) e._reels[n].start("forward" === t ? 1 : -1);
                    a = 0
                };
                var p = function(e) {
                    for (var n = 0; n < e.length; n++) {
                        var a = e[n],
                            s = a[0],
                            o = a[a.length - 1],
                            i = 0,
                            p = 0;
                        if (t.includes(s)) {
                            for (i++, o = 1; o < a.length && a[o] === s; o++) i++;
                            o = [], p = 3;
                            for (var l = 0; l < i; p--, l++) o.push(p);
                            for (o.reverse(), p = 0; p < i; p++) l = o[p], a[p] = 0 === l ? s : s + "_" + l
                        } else if (t.includes(o)) {
                            for (p++, s = a.length - 2; 0 <= s && a[s] === o; s--) p++;
                            for (s = [], i = 0; i < p; i++) s.push(i);
                            for (s.reverse(), i = 0, l = 3; i < p; i++, l--) {
                                var r = s[i];
                                a[l] = 0 === r ? o : o + "_" + r
                            }
                        }
                    }
                    return e
                };
                this._onReelStop = function(t) {
                    e._checkIntrigue(t.getIndex());
                    var a = 200;
                    nge.localData.get("freespin.inProgress") && nge.localData.get("freespin.reelsWithWildUpgrade") && (a = 400), ++e._reelsStoped === e._reels.length && nge.rafSetTimeout((function() {
                        o ? e._service.spinCompleteOnLastRespinCallback() : e._service.spinCompleteCallback()
                    }), a);
                    var s = t.getIndex(),
                        i = n._cfg;
                    if (i.symbolsLanding && i.symbolsLanding.length && i.symbolsLandingBeforeAnimation && !n.holdedReels[s]) {
                        var p = nge.localData.get("slotMachine.spinResult.columns"),
                            l = nge.localData.get("slotMachine.slotWin"),
                            r = function(e, t, n) {
                                nge.rafSetTimeout((function() {
                                    e.animateSymbolLanding(n, s, t)
                                }), 1)
                            };
                        i.symbolsLanding.forEach((function(e) {
                            for (var t = 0; t < i.mh; t++)
                                if (p[s][t] === e.symbol && n.isPassAdditionalLandingRule(s, t)) {
                                    var a, o = n.getSymbolByPosition({
                                        reel: s,
                                        row: t
                                    });
                                    e: {
                                        if (l && l.lineWinAmounts)
                                            for (a = 0; a < l.lineWinAmounts.length; a++)
                                                for (var c = l.lineWinAmounts[a].wonSymbols, m = 0; m < c.length; m++) {
                                                    var y = c[m];
                                                    if (+s == +y[0] && +t == +y[1]) {
                                                        a = !0;
                                                        break e
                                                    }
                                                }
                                        a = void 0
                                    }
                                    e.animationName ? r(o, a, e) : (2 >= s || a) && nge.observer.fire("sound.scatter_landing_" + s + ".play"), s === i.mw - 1 && nge.localData.set("lastReelSymbolLanding", !0)
                                }
                        }))
                    }
                }, this.setNewReelsCfg = function() {}, this.setNextReelsCfg = function(t, n) {
                    var a = p(nge.Lib.Helper.jsObjClone(t));
                    nge.localData.set("slotMachine_reelsSymbols", a), !s && i && (s = !0, e._reelsStoped++), i && "Ready" === n.state && (o = !0), n = nge.Lib.Time.get() - e._requestStartTime;
                    var l = Math.round(n / 100);
                    n = e.getBaseStopCounters();
                    for (var r = e.getIntrigueStopCounters(), c = 0; c < n.length; c++) n[c] += r[c];
                    for (r = n[0], c = 0; c < n.length; c++) n[c] < r && (r = n[c]);
                    for (l = Math.max(0, Math.min(l, r) - e._cfg.recyclerView.reelsMinStopCounter), r = i ? 1 : 0; r < e._reels.length; r++) e._reels[r].stop(a[r].slice(0, e._cfg.mhv[r]), n[r] - l);
                    for (a = e._reels.map((function(e) {
                            return e._counter
                        })), n = 0; n < e._reels.length; n++) nge.observer.fire("slotMachine.blursManager.updateReelsCfg", {
                        cfg: t[n],
                        curCounter: a[n],
                        index: n
                    })
                }, this.speedUpReel = function(t) {
                    (!nge.localData.get("respin.inProgress") || nge.localData.get("respin.inProgress") && 0 !== t) && (e._reels[t]._counter > e._cfg.recyclerView.reelsMinStopCounter && (e._reels[t].setCounter(e._cfg.recyclerView.reelsMinStopCounter), nge.observer.fire("slotMachine.blursManager.updateReelsCfg", {
                        cfg: e._reels[t]._lastSymbols,
                        curCounter: e._reels[t]._counter,
                        index: t
                    })), e._reels[t].setSpeed(e._cfg.recyclerView.reelsSpeedUpSpeed))
                }, this.displaySymbols = function(t) {
                    t = p(nge.Lib.Helper.jsObjClone(t));
                    for (var n = 0; n < t.length; n++) {
                        for (var a = 0; a < t[n].length; a++) e._reels[n].setSymbolAt(a, t[n][a]);
                        e._reels[n].sort()
                    }
                    nge.localData.set("slotMachine_reelsSymbols", t), e.super.displaySymbols(t)
                }, this.isPassAdditionalLandingRule = function(e, t) {
                    return t = !1, (0 <= e && 2 >= e || 3 === e && 1 <= a || 4 === e && 2 <= a) && (t = !0), a++, t
                }, this.syncHoldSymbol = function(t, n) {
                    var a = n.wild;
                    n = n.upgrade, a && e._holdedSymbolsContainer.addChild(a), n && e._holdedSymbolsContainer.addChild(n), e._holdedSymbols[t.reel][t.row] = {
                        wild: a,
                        upgrade: n
                    }
                }, this.holdSymbol = function(t, n) {
                    n = n.texture, t = e._holdedSymbols[t.reel][t.row];
                    var a = n.x + n.parent.x;
                    n = n.y + n.parent.y, t.wild && (t.wild.x = a, t.wild.y = n), t.upgrade && (t.upgrade.x = a, t.upgrade.y = n)
                }, this.unholdSymbol = function(t) {
                    var n = e._holdedSymbols[t.reel][t.row];
                    n.wild && (n.wild.stop(), n.wild.destroy(!0)), n.upgrade && (n.upgrade.stop(), n.upgrade.destroy(!0)), e._holdedSymbols[t.reel][t.row] = null
                }, this.unholdAll = function() {
                    for (var t in e._holdedSymbols)
                        for (var n in e._holdedSymbols[t]) e.unholdSymbol({
                            reel: t,
                            row: n
                        })
                }, this.reset = function() {
                    a = 0, i = o = s = !1
                }, this.create = function() {
                    var t = nge.findOne("^slotMachineWildsContainer");
                    e._holdedSymbolsContainer = nge.objects.create(nge.Mlm.Objects.Folder({
                        name: "holdedSymbolsContainer"
                    }), t)
                }
            }))
        },
        1161: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerReel = nge.App.DjGameBase.Com.SlotMachine.RecyclerReel.extend((function() {
                var e = this,
                    t = "100 100_x2 100_x3 0 0_x2 0_x3".split(" ");
                this.loadSymbolAt = function(n, a) {
                    e.super.loadSymbolAt(n, a), nge.localData.get("respin.inProgress") && !t.includes(a) ? e._symbols[n].texture.tint = 11118249 : e._symbols[n].texture.tint = 16777215
                }, this.customStopCallback = function() {
                    e.stopJumpTime = 200;
                    var t = e.getIndex();
                    if (nge.localData.get("freespin.inProgress")) {
                        var n = nge.localData.get("freespin.reelsWithWildUpgrade");
                        n && n[t] && (e.stopJumpTime = 400)
                    }
                    e.super.customStopCallback()
                }
            }))
        },
        1162: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.BlursManager = nge.App.DjGameBase.Com.SlotMachine.BlursManager.extend((function() {
                var e = this,
                    t = this;
                this.ROWS_COUNT = 4, this.reelsMinStopCounter = 3;
                var n = !1,
                    a = "102 103 104 105 106 107 108 109 110 111".split(" "),
                    s = "100 100_x2 100_x3 101 101_1 101_2 101_3 102 103 104 105 106 107 108 109 110 111 112 0 0_x2 0_x3 1 1_1 1_2 1_3 2 3 4 5 6 7 8 9 10 11 12".split(" "),
                    o = ["1", "14"];
                this.symbolsNotParticipatingInStacks = "0 13 2 15 3 16 4 17 5 18 6 19 7 20 8 21 9 22 10 23 11 24 12 25".split(" "), this.symbolsParticipatingInStacks = [].concat($jscomp.arrayFromIterable(o)), this.blursCfg = {
                    0: [1],
                    13: [1],
                    1: [4],
                    14: [4],
                    2: [1],
                    15: [1],
                    3: [1],
                    16: [1],
                    4: [1],
                    17: [1],
                    5: [1],
                    18: [1],
                    6: [1],
                    19: [1],
                    7: [1],
                    20: [1],
                    8: [1],
                    21: [1],
                    9: [1],
                    22: [1],
                    10: [1],
                    23: [1],
                    11: [1],
                    24: [1],
                    12: [1],
                    25: [1]
                }, this.stackSymbols = [
                    [].concat($jscomp.arrayFromIterable(o)), [].concat($jscomp.arrayFromIterable(o)), [].concat($jscomp.arrayFromIterable(o)), [].concat($jscomp.arrayFromIterable(o)), [].concat($jscomp.arrayFromIterable(o))
                ], this.checkBlurName = function(e) {
                    return s.includes(e) ? e : (e = nge.Lib.Helper.getRandomInt(0, a.length), a[e])
                }, this.stackSymbolsFS = this.stackSymbols, this.symbolToBlurRule = function(e) {
                    var t = +e + 100;
                    return (13 <= +e ? t - 13 : t).toString()
                };
                var i = function(e) {
                        var t = e;
                        return "101_1" === e ? t = "1_1" : "101_2" === e ? t = "1_2" : "101_3" === e ? t = "1_3" : "100_x2" === e ? t = "0_x2" : "100_x3" === e ? t = "0_x3" : e && 100 <= +e && (t = (+e - 100).toString()), t
                    },
                    p = function(e, t) {
                        return 0 > t || e.length < t || (e[t] = i(e[t])), e
                    },
                    l = function(t, n, a) {
                        e: {
                            n = [n];
                            for (var s = 0; s < n.length; s++) {
                                var i = n[s];
                                if (o.includes(i)) {
                                    n = i;
                                    break e
                                }
                            }
                            n = !1
                        }
                        if (!1 === n) return {
                            count: 0,
                            symbol: n
                        };
                        if (s = 0, a)
                            for (a = t.length - 1; 0 <= a && t[a] === n; a--) s++;
                        else
                            for (a = 0; a < t.length && t[a] === n; a++) s++;
                        return {
                            count: e.blursCfg[n][0] - s,
                            symbol: n
                        }
                    };
                this.onRecyclerViewUpdateReelsCfg = function(a) {
                    var s = t.cfg.symbolsBlurKeys,
                        o = a.cfg,
                        i = a.curCounter;
                    if (!(0 >= i)) {
                        var l = e.view.getReels()[a.index],
                            r = l.getCurrentBlur(),
                            c = l.getBlurs();
                        if (!n) {
                            if (c = e.movePreviousSpinBlursToBlursStart(c, r, i), a = s[a.index], !(0 > i || c.length < i)) {
                                s = a[nge.Lib.Random.generate_range(0, a.length - 1)];
                                for (var m = i; m < c.length; m++) {
                                    var y = a[nge.Lib.Random.generate_range(0, a.length - 1)];
                                    y === s && (y = a[nge.Lib.Random.generate_range(0, a.length - 1)]), s = c[m] = y
                                }
                            }
                            if (!(0 > r || c.length < r || 0 > i || c.length < i))
                                for (a = 0; 10 > a && c.length > r + 50; a++) s = nge.Lib.Random.generate_range(r, r + 40), 4 >= Math.abs(s - i) || (c[s] = "101_3", c[s + 1] = "101_2", c[s + 2] = "101_1", c[s + 3] = "101", r = s + 4)
                        }
                        c = e.generateBlursDown({
                            fromIndex: i,
                            toIndex: 0,
                            reelSymbols: o,
                            reelBlurs: c
                        }), c = e.generateBlursUp({
                            fromIndex: i,
                            reelSymbols: o,
                            reelBlurs: c
                        }), c = p(c, i - 1), c = p(c, i), l.setBlurs(c)
                    }
                }, this.createNextBlurs = function() {
                    var n = nge.localData.get("slotMachine.spinResult.columns");
                    n || (n = nge.Lib.Helper.rowsToColumns(nge.localData.get("slotMachine.gameParameters.initialSymbols")));
                    for (var a = 0; a < e.REELS_COUNT; a++) {
                        var s = nge.Lib.Helper.jsObjClone(n[a]),
                            o = e.view.getReels()[a],
                            i = o.getBlurs();
                        i = e.generateBlursDown({
                            fromIndex: 0,
                            reelSymbols: s,
                            reelBlurs: i
                        }), i = e.generateBlursUp({
                            fromIndex: 0,
                            reelSymbols: s,
                            reelBlurs: i
                        }), i = p(i, -1), i = p(i, 0), t.changeBlurSymbolsToBase(), o.setBlurs(i)
                    }
                }, this.changeBlurSymbolsToBase = function() {
                    nge.localData.get("slotMachine.spinResult.columns") || nge.Lib.Helper.rowsToColumns(nge.localData.get("slotMachine.gameParameters.initialSymbols"));
                    for (var e = 0; 5 > e; e++) {
                        var t = this.view.getReels()[e],
                            n = t.getSymbolAt(-1);
                        n = i(n.getName()), t.setSymbolAt(-1, n), n = t.getSymbolAt(this.ROWS_COUNT), n = i(n.getName()), t.setSymbolAt(this.ROWS_COUNT, n), t.sort()
                    }
                }, this.onSpinStart = function() {
                    n = !1
                }, this.onStopCommand = function() {
                    n = !0
                }, this.generateBlursDown = function(t) {
                    var n = t.fromIndex,
                        a = t.reelBlurs;
                    if (a.length < n) return a;
                    t = nge.Lib.Helper.jsObjClone(t.reelSymbols);
                    for (var s = 0; s < t.length; s++) "1_1" === t[s] || "1_2" === t[s] || "1_3" === t[s] ? t[s] = "1" : "14_1" !== t[s] && "14_2" !== t[s] && "14_3" !== t[s] || (t[s] = "14");
                    t = (s = l(t, t[t.length - 1], !0)).count;
                    var o = s.symbol;
                    if (0 === t) return a;
                    s = [];
                    for (var i = e.blursCfg[o][0] - 1, p = 0; p < t; i--, p++) s.push(i);
                    for (s.reverse(), o = e.symbolToBlurRule(o), i = 0; i < t; i++)(0 > (p = s[i]) || 3 < p) && (p = 0), a[n - i - 1] = 0 === p ? o : o + "_" + p;
                    for (n = 0; n < a.length; n++) a[n] || (a[n] = e.checkBlurName(a[n]));
                    return a
                }, this.generateBlursUp = function(t) {
                    var n = t.fromIndex,
                        a = t.reelBlurs;
                    if (a.length < n) return a;
                    t = nge.Lib.Helper.jsObjClone(t.reelSymbols);
                    for (var s = 0; s < t.length; s++) "1_1" === t[s] || "1_2" === t[s] || "1_3" === t[s] ? t[s] = "1" : "14_1" !== t[s] && "14_2" !== t[s] && "14_3" !== t[s] || (t[s] = "14");
                    t = (s = l(t, t[0], !1)).count;
                    var o = s.symbol;
                    if (0 === t) return a;
                    s = [];
                    for (var i = 0; i < t; i++) s.push(i);
                    for (s.reverse(), o = e.symbolToBlurRule(o), i = 0; i < t; i++) {
                        var p = s[i];
                        (0 > p || 3 < p) && (p = 0), a[n + i] = 0 === p ? o : o + "_" + p
                    }
                    for (n = 0; n < a.length; n++) a[n] || (a[n] = e.checkBlurName(a[n]));
                    return a
                }
            }))
        },
        1163: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "slotMachineMaskContainer",
                            x: 241,
                            y: 79,
                            width: 1440,
                            height: 812,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachineLinesLabelContainer"
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineWildsContainer"
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineSymbolWinContainer"
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineIntrigueTintContainer",
                                isVisible: !1,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "intrigueTintBg",
                                    x: 863,
                                    y: 0,
                                    assetKey: "intrigueTintBg",
                                    scaleX: 580,
                                    scaleY: 820,
                                    isVisible: !0
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineGameContainer",
                                width: 1440,
                                height: 813
                            }]
                        }]
                    }
                }
            }
        },
        1164: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler = {}
        },
        1165: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler.Controller = nge.App.DjGameBase.Com.SpaceHandler.Controller.extend((function() {
                var e = this,
                    t = null;
                this.extendDo = function() {
                    return t && t.visible ? (nge.observer.fire("popup.spacePressed"), !1) : e.super.extendDo()
                }, this.create = function() {
                    t = nge.findOne("^betSlipGroup"), e.super.create()
                }
            }))
        },
        1166: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1167: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Cfg = nge.App.DjGameBase.Com.Winlines.Cfg.extend((function() {
                this.linesLabelEnable = !0, this.linesLabelContainerName = "slotMachineLinesLabelContainer", this.symbol = {
                    width: 290,
                    height: 203
                }, this.lineLabel = {
                    width: 82,
                    height: 30,
                    offset: {
                        x: 10,
                        y: 166
                    },
                    line: {
                        color: "0xffffff",
                        alpha: .65,
                        weight: 2,
                        radius: 3
                    },
                    background: {
                        color: "0x000000",
                        alpha: .65,
                        radius: 3
                    },
                    text: {
                        alpha: .85,
                        offset: {
                            x: 7,
                            y: 3
                        },
                        style: {
                            font: '16pt "arial"',
                            fill: "#ffffff",
                            align: "left"
                        }
                    }
                }
            }))
        },
        1168: function(e, t) {
            nge.App[nge.appNS].Com.WinField = {}
        },
        1169: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Controller = nge.App.DjGameBase.Com.WinField.Controller.extend((function() {
                var e = this,
                    t = function(t) {
                        var n = 0,
                            a = nge.localData.get("slotMachine");
                        a.slotWin && (n = a.slotWin.totalWin || 0), t = nge.Lib.Money.toCoins(n) + nge.Lib.Money.toCoins(t), e.setText(t)
                    };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("betSlip.winField.showVFX", t)
                }
            }))
        },
        1170: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Mobile = {}
        },
        1171: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Mobile.Controller = nge.App.DjGameBase.Com.WinField.Mobile.Controller.extend((function() {
                var e = this,
                    t = function(t) {
                        var n = 0,
                            a = nge.localData.get("slotMachine");
                        a.slotWin && (n = a.slotWin.totalWin || 0), t = nge.Lib.Money.toCoins(n) + nge.Lib.Money.toCoins(t), e.setText(t)
                    };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("betSlip.winField.showVFX", t)
                }
            }))
        },
        1172: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1173: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Cfg = nge.App.DjGameBase.Com.WinlinesText.Cfg.extend((function() {
                this.params = this.super.get(), this.params.maxRows = 4, this.params.winlinesTextContainerName = "winlinesTextContainer"
            }))
        },
        1174: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Controller = nge.App.DjGameBase.Com.WinlinesText.Controller.extend((function() {
                this.createTextTweenAnimation = function(e) {
                    e.scale.x = .6, e.scale.y = .6;
                    var t = nge.tween.add(e.scale).to({
                        x: 1.1,
                        y: 1.1
                    }, 300, nge.Lib.Tween.Easing.Linear.In, !1).to({
                        x: 1,
                        y: 1
                    }, 100, nge.Lib.Tween.Easing.Linear.In, !0);
                    t.onComplete.addOnce((function() {
                        e.scale.x = 1, e.scale.y = 1
                    })), t.start()
                }
            }))
        },
        1175: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    styles: {},
                    objects: {
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "lineWinContainer",
                            x: 960,
                            y: 404,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1,
                            contents: [{
                                type: mt.objects.BITMAP_TEXT,
                                name: "lineWinAmount0",
                                isVisible: !1,
                                x: 0,
                                y: -245,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "regularwin_font",
                                size: 70
                            }, {
                                type: mt.objects.BITMAP_TEXT,
                                name: "lineWinAmount1",
                                isVisible: !1,
                                x: 0,
                                y: -42,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "regularwin_font",
                                size: 70
                            }, {
                                type: mt.objects.BITMAP_TEXT,
                                name: "lineWinAmount2",
                                isVisible: !1,
                                x: 0,
                                y: 165,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "regularwin_font",
                                size: 70
                            }, {
                                type: mt.objects.BITMAP_TEXT,
                                name: "lineWinAmount3",
                                isVisible: !1,
                                x: 0,
                                y: 365,
                                anchorX: .5,
                                anchorY: .5,
                                text: "0",
                                assetKey: "regularwin_font",
                                size: 70
                            }]
                        }]
                    }
                }
            }
        },
        1176: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1177: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1178: function(e, t) {
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
        1179: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.PlayStyles = function() {
                return {}
            }
        },
        1180: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Ui();
                return ["autoPlayAmountPanelContainer"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = +t.x + 1, t.y = +t.y - 12)
                })), ["autospinAmountSetterPanel"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y + 2)
                })), e
            }
        },
        1181: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "30pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 40
                    },
                    n = {
                        font: "24pt futuraptheavy",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 40
                    },
                    a = {
                        font: "26pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 32
                    },
                    s = {
                        font: "30pt futuraptmedium",
                        fill: 16696173
                    },
                    o = {
                        font: "24pt futuraptmedium",
                        fill: 16696173
                    },
                    i = {
                        font: "30pt futuraptmedium",
                        fill: 16777215
                    },
                    p = {
                        font: "24pt futuraptmedium",
                        fill: 16777215
                    },
                    l = {
                        font: "20pt futuraptmedium",
                        fill: 16777215
                    },
                    r = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "infoNextButton",
                            fullPath: r + "playarea/infoNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoPlate",
                            fullPath: r + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg1_asset",
                            fullPath: r + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img0_A",
                            fullPath: r + "playarea/page0img0_A.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img1_K",
                            fullPath: r + "playarea/page0img1_K.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img2_Q",
                            fullPath: r + "playarea/page0img2_Q.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img3_J",
                            fullPath: r + "playarea/page0img3_J.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img5_10",
                            fullPath: r + "playarea/page0img5_10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img4_9",
                            fullPath: r + "playarea/page0img4_9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img6_red",
                            fullPath: r + "playarea/page0img6_red.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img7_blue",
                            fullPath: r + "playarea/page0img7_blue.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img8_orange",
                            fullPath: r + "playarea/page0img8_orange.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img9_violet",
                            fullPath: r + "playarea/page0img9_violet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img10_spesh",
                            fullPath: r + "playarea/page0img10_spesh.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img11_bonus",
                            fullPath: r + "playarea/page0img11_bonus.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3img0",
                            fullPath: r + "playarea/page3img0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3img1",
                            fullPath: r + "playarea/page3img1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3img2",
                            fullPath: r + "playarea/page3img2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betslip",
                            fullPath: r + "playarea/betslip.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "1pl",
                            fullPath: r + "playarea/1pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "2pl",
                            fullPath: r + "playarea/2pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "3pl",
                            fullPath: r + "playarea/3pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "4pl",
                            fullPath: r + "playarea/4pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "5pl",
                            fullPath: r + "playarea/5pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "6pl",
                            fullPath: r + "playarea/6pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "7pl",
                            fullPath: r + "playarea/7pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "8pl",
                            fullPath: r + "playarea/8pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "9pl",
                            fullPath: r + "playarea/9pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "10pl",
                            fullPath: r + "playarea/10pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "11pl",
                            fullPath: r + "playarea/11pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "12pl",
                            fullPath: r + "playarea/12pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "13pl",
                            fullPath: r + "playarea/13pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "14pl",
                            fullPath: r + "playarea/14pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "15pl",
                            fullPath: r + "playarea/15pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "16pl",
                            fullPath: r + "playarea/16pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "17pl",
                            fullPath: r + "playarea/17pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "18pl",
                            fullPath: r + "playarea/18pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "19pl",
                            fullPath: r + "playarea/19pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "20pl",
                            fullPath: r + "playarea/20pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "21pl",
                            fullPath: r + "playarea/21pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "22pl",
                            fullPath: r + "playarea/22pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "23pl",
                            fullPath: r + "playarea/23pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "24pl",
                            fullPath: r + "playarea/24pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "25pl",
                            fullPath: r + "playarea/25pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "26pl",
                            fullPath: r + "playarea/26pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "27pl",
                            fullPath: r + "playarea/27pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "28pl",
                            fullPath: r + "playarea/28pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "29pl",
                            fullPath: r + "playarea/29pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "30pl",
                            fullPath: r + "playarea/30pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "31pl",
                            fullPath: r + "playarea/31pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "32pl",
                            fullPath: r + "playarea/32pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "33pl",
                            fullPath: r + "playarea/33pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "34pl",
                            fullPath: r + "playarea/34pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "35pl",
                            fullPath: r + "playarea/35pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "36pl",
                            fullPath: r + "playarea/36pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "37pl",
                            fullPath: r + "playarea/37pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "38pl",
                            fullPath: r + "playarea/38pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "39pl",
                            fullPath: r + "playarea/39pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "40pl",
                            fullPath: r + "playarea/40pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "41pl",
                            fullPath: r + "playarea/41pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "42pl",
                            fullPath: r + "playarea/42pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "43pl",
                            fullPath: r + "playarea/43pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "44pl",
                            fullPath: r + "playarea/44pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "45pl",
                            fullPath: r + "playarea/45pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "46pl",
                            fullPath: r + "playarea/46pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "47pl",
                            fullPath: r + "playarea/47pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "48pl",
                            fullPath: r + "playarea/48pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "49pl",
                            fullPath: r + "playarea/49pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "50pl",
                            fullPath: r + "playarea/50pl.png"
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
                                    name: "page0Сontainer",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "BASE & RESPIN FEATURE PAYTABLE",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text0",
                                        text: "ALL_WINS_BEGIN",
                                        style: n,
                                        x: 960,
                                        y: 132,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        maxWidth: 1600
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "Substitutes_for_all",
                                        style: a,
                                        x: 710,
                                        y: 807,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        maxWidth: 470
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "Appears_on_reels",
                                        style: a,
                                        x: 1486,
                                        y: 807,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img1_container",
                                        y: -170,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page0img10_spesh",
                                            assetKey: "page0img10_spesh",
                                            x: 326,
                                            y: 327
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img6_red",
                                            assetKey: "page0img6_red",
                                            x: 796,
                                            y: 323
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img8_orange",
                                            assetKey: "page0img8_orange",
                                            x: 1263,
                                            y: 326
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img9_violet",
                                            assetKey: "page0img9_violet",
                                            x: 539,
                                            y: 518
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img7_blue",
                                            assetKey: "page0img7_blue",
                                            x: 1046,
                                            y: 522
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img_container",
                                        y: 380,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page0img0_A",
                                            assetKey: "page0img0_A",
                                            x: 358,
                                            y: 179
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img1_K",
                                            assetKey: "page0img1_K",
                                            x: 573,
                                            y: 179
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img2_Q",
                                            assetKey: "page0img2_Q",
                                            x: 787,
                                            y: 171
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img3_J",
                                            assetKey: "page0img3_J",
                                            x: 998,
                                            y: 178
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img5_10",
                                            assetKey: "page0img5_10",
                                            x: 1209,
                                            y: 184
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img4_9",
                                            assetKey: "page0img4_9",
                                            x: 1458,
                                            y: 183
                                        }]
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img0",
                                        assetKey: "page3img0",
                                        x: 252,
                                        y: 710
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0img11_bonus",
                                        assetKey: "page0img11_bonus",
                                        x: 1020,
                                        y: 707
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "A-9_container",
                                        y: 585,
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "m06_container",
                                            x: 438,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m06_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps6-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps6-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps6-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m07_container",
                                            x: 653,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m07_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps7-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps7-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps7-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m08_container",
                                            x: 863,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m08_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps8-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps8-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps8-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m09Container",
                                            x: 1074,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m09_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps9-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps9-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps9-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m10_container",
                                            x: 1323,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m10_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps10-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps10-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps10-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m11_container",
                                            x: 1535,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m11_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps11-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps11-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps11-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "m01-m05_container",
                                        y: -170,
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "m02 _container",
                                            x: 595,
                                            y: 350,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 2,
                                                style: s,
                                                y: 126,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m01_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps1-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps1-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps1-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable2",
                                                    type: mt.objects.TEXT,
                                                    class: "ps1-2",
                                                    style: i,
                                                    y: 126,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m05_container",
                                            x: 1070,
                                            y: 350,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 2,
                                                style: s,
                                                y: 126,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m02_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps2-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps2-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps2-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable2",
                                                    type: mt.objects.TEXT,
                                                    class: "ps2-2",
                                                    style: i,
                                                    y: 126,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m03Container",
                                            x: 1533,
                                            y: 370,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m03_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps3-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps3-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps3-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m04_container",
                                            x: 813,
                                            y: 560,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m04_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps4-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps4-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps4-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m01_container",
                                            x: 1320,
                                            y: 560,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m05_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps5-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps5-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps5-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "FREE GAMES PAYTABLE",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text0",
                                        text: "ALL_WINS_BEGIN",
                                        style: n,
                                        x: 960,
                                        y: 132,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        maxWidth: 1600
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "Appears_on_reels2",
                                        style: a,
                                        x: 700,
                                        y: 807,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text1",
                                        text: "Appears_on_reels3",
                                        style: a,
                                        x: 1486,
                                        y: 807,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img1_container",
                                        y: -170,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page0img10_spesh",
                                            assetKey: "page0img10_spesh",
                                            x: 326,
                                            y: 327
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img6_red",
                                            assetKey: "page0img6_red",
                                            x: 796,
                                            y: 323
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img8_orange",
                                            assetKey: "page0img8_orange",
                                            x: 1263,
                                            y: 326
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img9_violet",
                                            assetKey: "page0img9_violet",
                                            x: 539,
                                            y: 518
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img7_blue",
                                            assetKey: "page0img7_blue",
                                            x: 1046,
                                            y: 522
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img_container",
                                        y: 380,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page0img0_A",
                                            assetKey: "page0img0_A",
                                            x: 358,
                                            y: 179
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img1_K",
                                            assetKey: "page0img1_K",
                                            x: 573,
                                            y: 179
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img2_Q",
                                            assetKey: "page0img2_Q",
                                            x: 787,
                                            y: 171
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img3_J",
                                            assetKey: "page0img3_J",
                                            x: 998,
                                            y: 178
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img5_10",
                                            assetKey: "page0img5_10",
                                            x: 1209,
                                            y: 184
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img4_9",
                                            assetKey: "page0img4_9",
                                            x: 1458,
                                            y: 183
                                        }]
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img0",
                                        assetKey: "page3img0",
                                        x: 252,
                                        y: 710
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0img11_bonus",
                                        assetKey: "page0img11_bonus",
                                        x: 1020,
                                        y: 707
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "A-9_container",
                                        y: 585,
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "m06_container",
                                            x: 438,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m06_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps19-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps19-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps19-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m07_container",
                                            x: 653,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m07_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps20-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps20-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps20-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m08_container",
                                            x: 863,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m08_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps21-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps21-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps21-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m09_container",
                                            x: 1074,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m09_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps22-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps22-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps22-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m10_container",
                                            x: 1323,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m10_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps23-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps23-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps23-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m11_container",
                                            x: 1535,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: o,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: o,
                                                y: 33,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: o,
                                                y: 66,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m11_pay_container",
                                                x: 24,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps24-5",
                                                    style: p,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps24-4",
                                                    style: p,
                                                    y: 33,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps24-3",
                                                    style: p,
                                                    y: 66,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "m01-m05_container",
                                        y: -170,
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "m02 _container",
                                            x: 595,
                                            y: 350,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 2,
                                                style: s,
                                                y: 126,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m01_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps14-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps14-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps14-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable2",
                                                    type: mt.objects.TEXT,
                                                    class: "ps14-2",
                                                    style: i,
                                                    y: 126,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m05_container",
                                            x: 1070,
                                            y: 350,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 2,
                                                style: s,
                                                y: 126,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m02_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps15-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps15-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps15-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable2",
                                                    type: mt.objects.TEXT,
                                                    class: "ps15-2",
                                                    style: i,
                                                    y: 126,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m03_container",
                                            x: 1533,
                                            y: 370,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m03_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps16-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps16-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps16-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m04_container",
                                            x: 813,
                                            y: 560,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m04_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps17-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps17-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps17-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m01_container",
                                            x: 1320,
                                            y: 560,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "textNumber5",
                                                text: 5,
                                                style: s,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 4,
                                                style: s,
                                                y: 42,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "textNumber4",
                                                text: 3,
                                                style: s,
                                                y: 84,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m05_pay_container",
                                                x: 30,
                                                contents: [{
                                                    name: "textPaytable5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps18-5",
                                                    style: i,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps18-4",
                                                    style: i,
                                                    y: 42,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytable3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps18-3",
                                                    style: i,
                                                    y: 84,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "BET SLIP",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text",
                                        text: "COLLECT_75",
                                        style: {
                                            font: "36pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        },
                                        x: 556,
                                        y: 595,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        maxWidth: 300,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text",
                                        text: "PAYS_85",
                                        style: {
                                            font: "40pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        },
                                        x: 556,
                                        y: 782,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text",
                                        text: "THE_BET_SLIP",
                                        style: {
                                            font: "36pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        x: 814,
                                        y: 505,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        maxWidth: 900,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "betslip",
                                        assetKey: "betslip",
                                        x: 329,
                                        y: 92
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "RESPIN FEATURE",
                                        style: e,
                                        y: 52,
                                        x: 960,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page2img",
                                        assetKey: "page2img",
                                        x: 648,
                                        y: 363
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP2",
                                        text: "Any_4_WILD",
                                        style: t,
                                        y: 234,
                                        x: 960,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 1500,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP2_1",
                                        text: "Total_Bet_is_the",
                                        style: t,
                                        y: 806,
                                        x: 960,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 1500,
                                        class: "coloredText"
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RESPIN FEATURE",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img0",
                                        assetKey: "page3img0",
                                        x: 283,
                                        y: 245
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img1",
                                        assetKey: "page3img1",
                                        x: 857,
                                        y: 245
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img2",
                                        assetKey: "page3img2",
                                        x: 1489,
                                        y: 245
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img1",
                                        assetKey: "page3img1",
                                        x: 600,
                                        y: 474
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img2",
                                        assetKey: "page3img2",
                                        x: 830,
                                        y: 474
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page0img11_bonus",
                                        assetKey: "page0img11_bonus",
                                        x: 348,
                                        y: 733,
                                        scaleX: .7,
                                        scaleY: .7
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img0",
                                        assetKey: "page3img0",
                                        x: 586,
                                        y: 736,
                                        scaleX: .85,
                                        scaleY: .85
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img1",
                                        assetKey: "page3img1",
                                        x: 782,
                                        y: 736,
                                        scaleX: .85,
                                        scaleY: .85
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "page3img2",
                                        assetKey: "page3img2",
                                        x: 979,
                                        y: 736,
                                        scaleX: .85,
                                        scaleY: .85
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_1",
                                        text: "When_3_SCATTER",
                                        style: t,
                                        x: 960,
                                        y: 160,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        maxWidth: 1490
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_2",
                                        text: "if_a",
                                        style: a,
                                        x: 248,
                                        y: 340,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_3",
                                        text: "lands_beneath",
                                        style: a,
                                        x: 674,
                                        y: 340,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 360
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_4",
                                        text: "and_next",
                                        style: a,
                                        x: 1277,
                                        y: 340,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 420
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_5",
                                        text: "every",
                                        style: a,
                                        x: 540,
                                        y: 568,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_6",
                                        text: "that_substitutes",
                                        style: a,
                                        x: 1242,
                                        y: 568,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_7",
                                        text: "occurring_beneath",
                                        style: a,
                                        x: 425,
                                        y: 888,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP3_8",
                                        text: "may_contribute",
                                        style: a,
                                        x: 1399,
                                        y: 820,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 450
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page5_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "page5img_container",
                                        y: 189,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page3img0",
                                            assetKey: "page3img0",
                                            x: 307,
                                            scaleX: 1.2,
                                            scaleY: 1.2
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img1",
                                            assetKey: "page3img1",
                                            x: 839,
                                            scaleX: 1.2,
                                            scaleY: 1.2
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img2",
                                            assetKey: "page3img2",
                                            x: 1370,
                                            scaleX: 1.2,
                                            scaleY: 1.2
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "page5img1_container",
                                        y: 540,
                                        x: 227,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page0img11_bonus",
                                            assetKey: "page0img11_bonus",
                                            y: -4,
                                            scaleX: .95,
                                            scaleY: .95
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img1",
                                            assetKey: "page3img1",
                                            x: 104,
                                            scaleX: .95,
                                            scaleY: .95
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img2",
                                            assetKey: "page3img2",
                                            x: 202,
                                            scaleX: .95,
                                            scaleY: .95
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "page5img2_container",
                                        y: 540,
                                        x: 769,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page0img11_bonus",
                                            assetKey: "page0img11_bonus",
                                            y: -4,
                                            scaleX: .95,
                                            scaleY: .95
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img0",
                                            assetKey: "page3img0",
                                            x: 104,
                                            scaleX: .95,
                                            scaleY: .95
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img2",
                                            assetKey: "page3img2",
                                            x: 202,
                                            scaleX: .95,
                                            scaleY: .95
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "page4img3_container",
                                        y: 540,
                                        x: 1301,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "page0img11_bonus",
                                            assetKey: "page0img11_bonus",
                                            y: -4,
                                            scaleX: .95,
                                            scaleY: .95
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img0",
                                            assetKey: "page3img0",
                                            x: 104,
                                            scaleX: .95,
                                            scaleY: .95
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img1",
                                            assetKey: "page3img1",
                                            x: 202,
                                            scaleX: .95,
                                            scaleY: .95
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP4",
                                        text: "FREE_SPINS_FEATURE",
                                        style: {
                                            font: "26pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        },
                                        x: 960,
                                        y: 128,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP4_1",
                                        text: "substitutes_for",
                                        style: a,
                                        x: 430,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP4_2",
                                        text: "substitutes_for",
                                        style: a,
                                        x: 962,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP4_3",
                                        text: "substitutes_for",
                                        style: a,
                                        x: 1494,
                                        y: 475,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesTextP4",
                                        text: "Scatter_prize_is",
                                        style: t,
                                        x: 960,
                                        y: 827,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        maxWidth: 1490
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page6_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "RULES_help",
                                        style: e,
                                        y: 52,
                                        x: 960,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rulesText",
                                        text: "While_the_reels",
                                        style: t,
                                        y: 527,
                                        x: 960,
                                        class: "coloredText",
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 1490
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextRU",
                                        text: nge.i18n.get("rtpRU"),
                                        class: "rtpInfo",
                                        style: t,
                                        y: 645,
                                        x: 960,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextEN",
                                        text: nge.i18n.get("rtpEN"),
                                        class: "rtpInfo",
                                        style: t,
                                        y: 625,
                                        x: 960,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page7_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "PAYLINE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "paylinesP7_container",
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "payline_container",
                                            y: 107,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "1pl",
                                                assetKey: "1pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "2pl",
                                                assetKey: "2pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "3pl",
                                                assetKey: "3pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "4pl",
                                                assetKey: "4pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "5pl",
                                                assetKey: "5pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline1_container",
                                            y: 270,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "6pl",
                                                assetKey: "6pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "7pl",
                                                assetKey: "7pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "8pl",
                                                assetKey: "8pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "9pl",
                                                assetKey: "9pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "10pl",
                                                assetKey: "10pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline2_container",
                                            y: 435,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "11pl",
                                                assetKey: "11pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "12pl",
                                                assetKey: "12pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "13pl",
                                                assetKey: "13pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "14pl",
                                                assetKey: "14pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "15pl",
                                                assetKey: "15pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline3_container",
                                            y: 600,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "16pl",
                                                assetKey: "16pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "17pl",
                                                assetKey: "17pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "18pl",
                                                assetKey: "18pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "19pl",
                                                assetKey: "19pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "20pl",
                                                assetKey: "20pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline4_container",
                                            y: 769,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "21pl",
                                                assetKey: "21pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "22pl",
                                                assetKey: "22pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "23pl",
                                                assetKey: "23pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "24pl",
                                                assetKey: "24pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "25pl",
                                                assetKey: "25pl",
                                                x: 1468
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "paylinesTextP6_container",
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "paylineText_container",
                                            y: 123,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "1",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "2",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "3",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "4",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "5",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText1_container",
                                            y: 285,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "6",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "7",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "8",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "9",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "10",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText2_container",
                                            y: "450",
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "11",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "12",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "13",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "14",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "15",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText3_container",
                                            y: 616,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "16",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "17",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "18",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "19",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "20",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText4_container",
                                            y: 785,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "21",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "22",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "23",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "24",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "25",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page8_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "rulesNameText",
                                        text: "PAYLINE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "paylinesP8_container",
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "payline_container",
                                            y: 107,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "26pl",
                                                assetKey: "26pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "27pl",
                                                assetKey: "27pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "28pl",
                                                assetKey: "28pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "29pl",
                                                assetKey: "29pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "30pl",
                                                assetKey: "30pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline1_container",
                                            y: 270,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "31pl",
                                                assetKey: "31pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "32pl",
                                                assetKey: "32pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "33pl",
                                                assetKey: "33pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "34pl",
                                                assetKey: "34pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "35pl",
                                                assetKey: "35pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline2_container",
                                            y: 435,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "36pl",
                                                assetKey: "36pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "37pl",
                                                assetKey: "37pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "38pl",
                                                assetKey: "38pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "39pl",
                                                assetKey: "39pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "40pl",
                                                assetKey: "40pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline3_container",
                                            y: 600,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "41pl",
                                                assetKey: "41pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "42pl",
                                                assetKey: "42pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "43pl",
                                                assetKey: "43pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "44pl",
                                                assetKey: "44pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "45pl",
                                                assetKey: "45pl",
                                                x: 1468
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "payline4_container",
                                            y: 769,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "46pl",
                                                assetKey: "46pl",
                                                x: 317
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "47pl",
                                                assetKey: "47pl",
                                                x: 605
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "48pl",
                                                assetKey: "48pl",
                                                x: 893
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "49pl",
                                                assetKey: "49pl",
                                                x: 1181
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "50pl",
                                                assetKey: "50pl",
                                                x: 1468
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "paylinesTextP7_container",
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "paylineText_container",
                                            y: 123,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "26",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "27",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "28",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "29",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "30",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText1_container",
                                            y: 285,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "31",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "32",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "33",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "34",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "35",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText2_container",
                                            y: 450,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "36",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "37",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "38",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "39",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "40",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText3_container",
                                            y: 616,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "41",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "42",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "43",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "44",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "45",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylineText4_container",
                                            y: 785,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "46",
                                                style: l,
                                                x: 298,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "47",
                                                style: l,
                                                x: 584,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "48",
                                                style: l,
                                                x: 872,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "49",
                                                style: l,
                                                x: 1159,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "paylineNumber",
                                                text: "50",
                                                style: l,
                                                x: 1446,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }]
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
                                y: 920,
                                x: 740,
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
                                    x: 50,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
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
                                    x: 100,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
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
                                    x: 150,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
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
                                    x: 200,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoSixPlate",
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
                                    x: 250,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoSevenPlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 6,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 300,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoEightPlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 7,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 350,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
                                }, {
                                    type: 14,
                                    name: "pageInfoNinePlate",
                                    assetKey: "pageInfoPlate",
                                    groupName: "helpCarousel",
                                    selection: 8,
                                    btnFrames: {
                                        over: 0,
                                        out: 0,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 400,
                                    action: "function(){nge.observer.fire('radiobutton.click.helpCarousel', _selectPage);}"
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
        1182: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton",
                            fullPath: e + "playarea/demoPlayButton.png",
                            frameWidth: 288,
                            frameHeight: 132
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
                                    maxWidth: 200,
                                    x: 960,
                                    y: 950,
                                    style: {
                                        font: "40pt futuraptheavy",
                                        fill: 666677,
                                        align: "center",
                                        stroke: 10192984,
                                        strokeThickness: 2
                                    }
                                }, {
                                    type: mt.objects.BUTTON,
                                    assetKey: "demoPlayButton",
                                    name: "demoPlayButton",
                                    x: 820,
                                    y: 882,
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
                                type: mt.objects.IMAGE,
                                name: "introScreenArrow",
                                assetKey: "introScreenArrow",
                                x: 748,
                                y: 1030
                            }, {
                                type: mt.objects.IMAGE,
                                name: "frameIntroScreen",
                                assetKey: "frameIntroScreen",
                                x: 747,
                                y: 1027
                            }, {
                                type: mt.objects.TEXT,
                                name: "introScreenTextBottom",
                                text: "show_next_time",
                                style: {
                                    font: "30pt futuraptheavy",
                                    fill: 16777215
                                },
                                anchorY: .5,
                                maxWidth: 380,
                                x: 788,
                                y: 1042
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
                                x: 946,
                                y: 1040,
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
        1183: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1184: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = nge.appPath + "img/",
                    t = {
                        font: "39pt futuraptheavy",
                        fill: 16777215,
                        shadowColor: 2429709
                    },
                    n = {
                        font: "30pt futuraptheavy",
                        fill: 16777215,
                        shadowColor: 2429709
                    };
                return {
                    styles: {
                        ".titleStyleMobile": {
                            style: {
                                font: "26pt futuraptheavy",
                                fill: 14997173,
                                stroke: 4335900,
                                strokeThickness: 8
                            }
                        },
                        ".freeSpinsStyleMobile": {
                            style: {
                                font: "20pt futuraptheavy",
                                fill: 16696173,
                                shadowColor: 2429709
                            }
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "panelbg",
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
                            key: "settingPanelMobileBackBg1_asset",
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
                            frameWidth: 296,
                            frameHeight: 296
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "buttonsMobileContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "customButtonsMobileContainer",
                                class: "customButtonsMobileContainer",
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "autoSpinMobileContainer",
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
                                        lineHeight: 32,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 110,
                                        x: 1737,
                                        y: 224
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
                                        x: 1650,
                                        y: 133,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "autoSpinMobile");}'
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "playButtonMobileContainer",
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
                                    x: 1592,
                                    y: 329,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "spin");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "betSettingButtonMobile",
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
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "settingPanelMobileBackBg1_asset",
                                assetKey: "settingPanelMobileBackBg1_asset",
                                x: 39,
                                y: 598,
                                alpha: .501960784313725
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
                                    x: 33,
                                    y: 935,
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
                                    x: 58,
                                    y: 627,
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
                                    x: 58,
                                    y: 737,
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
                                    x: 58,
                                    y: 847,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "paytable");}'
                                }]
                            }, {
                                type: mt.objects.NINE_SLICE,
                                name: "settingPanelMobileBackBg",
                                assetKey: "settingPanelMobileBackBg1",
                                alpha: .8,
                                anchorX: 0,
                                anchorY: 0,
                                height: 464,
                                width: 128,
                                left: 64,
                                right: 64,
                                top: 64,
                                bottom: 64,
                                x: 166,
                                y: 1069,
                                scaleX: 1 / nge.assets.getQualityFactor(),
                                scaleY: 1 / nge.assets.getQualityFactor()
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "gameFreeSpinMobileContainer",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "counterFreeSpinsText",
                                text: "FREE GAME: 2 OF 2",
                                class: "freeSpinAmount freeSpinsStyleMobile",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 1020
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "infoPanelMobileContainer",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "balanceMobileName",
                                text: "BALANCE",
                                class: "titleStyleMobile",
                                anchorX: .5,
                                anchorY: .5,
                                x: 1495,
                                y: 933
                            }, {
                                type: mt.objects.TEXT,
                                name: "winMobileName",
                                text: "WIN",
                                class: "titleStyleMobile",
                                anchorX: .5,
                                anchorY: .5,
                                x: 960,
                                y: 904
                            }, {
                                type: mt.objects.TEXT,
                                name: "totalBetMobileName",
                                text: "TOTAL BET",
                                class: "titleStyleMobile",
                                anchorX: .5,
                                anchorY: .5,
                                x: 424,
                                y: 933
                            }, {
                                type: mt.objects.GROUP,
                                name: "betMinusButtonMobile",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "betMinusButtonMobileButton",
                                    assetKey: "betMinusButtonMobile",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 214,
                                    y: 962,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "betMinus");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "betPlusButtonMobile",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "betPlusButtonMobileButton",
                                    assetKey: "betPlusButtonMobile",
                                    btnFrames: {
                                        over: 2,
                                        out: 1,
                                        down: 0
                                    },
                                    pixelPerfectClick: !1,
                                    pixelPerfectOver: !1,
                                    x: 552,
                                    y: 962,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "betPlus");}'
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "totalBetMobileContaner",
                                contents: [{
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
                                        x: 425,
                                        y: 1007,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "totalBetMobilleNumber",
                                        style: n,
                                        class: "playAreaTextMobile totalBetNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 425,
                                        y: 1007
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
                                        x: 425,
                                        y: 1007,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "totalBetCoinsMobileNumber",
                                        style: n,
                                        class: "playAreaTextMobile creditsTotalBetNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 425,
                                        y: 1007
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "winBottomlUIMobileContainer",
                                contents: [{
                                    type: mt.objects.BUTTON,
                                    name: "winMobileContainerArea",
                                    assetKey: "areaEmpty",
                                    class: "currencyChanger",
                                    alpha: 0,
                                    anchorX: .5,
                                    anchorY: .5,
                                    pixelPerfectClick: 0,
                                    pixelPerfectOver: 0,
                                    scaleX: 556,
                                    scaleY: 140,
                                    x: 960,
                                    y: 989,
                                    action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                }, {
                                    type: mt.objects.TEXT,
                                    name: "winMobileNumber",
                                    style: t,
                                    class: "playAreaTextMobile winNumber",
                                    anchorX: .5,
                                    anchorY: .5,
                                    maxWidth: 460,
                                    x: 960,
                                    y: 989
                                }, {
                                    type: mt.objects.TEXT,
                                    name: "creditsWinMobileNumber",
                                    style: t,
                                    class: "playAreaTextMobile creditsWinNumber",
                                    anchorX: .5,
                                    anchorY: .5,
                                    x: 960,
                                    y: 989
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "balanceMobileContainer",
                                contents: [{
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
                                        x: 1497,
                                        y: 1007,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "balanceCoinsMobileNumber",
                                        style: n,
                                        class: "playAreaTextMobile creditsNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 1497,
                                        y: 1007
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
                                        x: 1497,
                                        y: 1007,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "currencyChanger");}'
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "balanceMobileNumber",
                                        style: n,
                                        class: "playAreaTextMobile balanceNumber",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 1497,
                                        y: 1007
                                    }]
                                }]
                            }, {
                                type: mt.objects.IMAGE,
                                name: "winbg",
                                assetKey: "winbg",
                                x: 683,
                                y: 924
                            }, {
                                type: mt.objects.IMAGE,
                                name: "panelbg",
                                assetKey: "panelbg",
                                x: 1274,
                                y: 950
                            }, {
                                type: mt.objects.IMAGE,
                                name: "panelbg",
                                assetKey: "panelbg",
                                x: 203,
                                y: 950
                            }]
                        }]
                    }
                }
            }
        },
        1185: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "30pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 40
                    },
                    n = {
                        font: "24pt futuraptheavy",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 40
                    },
                    a = {
                        font: "26pt futuraptmedium",
                        fill: 16777215,
                        align: "center",
                        lineHeight: 32
                    },
                    s = {
                        font: "30pt futuraptmedium",
                        fill: 16696173
                    },
                    o = {
                        font: "24pt futuraptmedium",
                        fill: 16696173
                    },
                    i = {
                        font: "30pt futuraptmedium",
                        fill: 16777215
                    },
                    p = {
                        font: "24pt futuraptmedium",
                        fill: 16777215
                    },
                    l = {
                        font: "20pt futuraptmedium",
                        fill: 16777215
                    },
                    r = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            key: "1px_empty",
                            fullPath: r + "blank.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "fake_end_px",
                            fullPath: r + "blank.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "infoMobileNextButton",
                            fullPath: r + "playarea/infoMobileNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "pageInfoPlate",
                            fullPath: r + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            key: "nameBg1_asset",
                            fullPath: r + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img0_A",
                            fullPath: r + "playarea/page0img0_A.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img1_K",
                            fullPath: r + "playarea/page0img1_K.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img2_Q",
                            fullPath: r + "playarea/page0img2_Q.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img3_J",
                            fullPath: r + "playarea/page0img3_J.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img5_10",
                            fullPath: r + "playarea/page0img5_10.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img4_9",
                            fullPath: r + "playarea/page0img4_9.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img6_red",
                            fullPath: r + "playarea/page0img6_red.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img7_blue",
                            fullPath: r + "playarea/page0img7_blue.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img8_orange",
                            fullPath: r + "playarea/page0img8_orange.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img9_violet",
                            fullPath: r + "playarea/page0img9_violet.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img10_spesh",
                            fullPath: r + "playarea/page0img10_spesh.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page0img11_bonus",
                            fullPath: r + "playarea/page0img11_bonus.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3img0",
                            fullPath: r + "playarea/page3img0.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3img1",
                            fullPath: r + "playarea/page3img1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "page3img2",
                            fullPath: r + "playarea/page3img2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "betslip",
                            fullPath: r + "playarea/betslip.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "1pl",
                            fullPath: r + "playarea/1pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "2pl",
                            fullPath: r + "playarea/2pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "3pl",
                            fullPath: r + "playarea/3pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "4pl",
                            fullPath: r + "playarea/4pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "5pl",
                            fullPath: r + "playarea/5pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "6pl",
                            fullPath: r + "playarea/6pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "7pl",
                            fullPath: r + "playarea/7pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "8pl",
                            fullPath: r + "playarea/8pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "9pl",
                            fullPath: r + "playarea/9pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "10pl",
                            fullPath: r + "playarea/10pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "11pl",
                            fullPath: r + "playarea/11pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "12pl",
                            fullPath: r + "playarea/12pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "13pl",
                            fullPath: r + "playarea/13pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "14pl",
                            fullPath: r + "playarea/14pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "15pl",
                            fullPath: r + "playarea/15pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "16pl",
                            fullPath: r + "playarea/16pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "17pl",
                            fullPath: r + "playarea/17pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "18pl",
                            fullPath: r + "playarea/18pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "19pl",
                            fullPath: r + "playarea/19pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "20pl",
                            fullPath: r + "playarea/20pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "21pl",
                            fullPath: r + "playarea/21pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "22pl",
                            fullPath: r + "playarea/22pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "23pl",
                            fullPath: r + "playarea/23pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "24pl",
                            fullPath: r + "playarea/24pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "25pl",
                            fullPath: r + "playarea/25pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "26pl",
                            fullPath: r + "playarea/26pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "27pl",
                            fullPath: r + "playarea/27pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "28pl",
                            fullPath: r + "playarea/28pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "29pl",
                            fullPath: r + "playarea/29pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "30pl",
                            fullPath: r + "playarea/30pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "31pl",
                            fullPath: r + "playarea/31pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "32pl",
                            fullPath: r + "playarea/32pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "33pl",
                            fullPath: r + "playarea/33pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "34pl",
                            fullPath: r + "playarea/34pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "35pl",
                            fullPath: r + "playarea/35pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "36pl",
                            fullPath: r + "playarea/36pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "37pl",
                            fullPath: r + "playarea/37pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "38pl",
                            fullPath: r + "playarea/38pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "39pl",
                            fullPath: r + "playarea/39pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "40pl",
                            fullPath: r + "playarea/40pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "41pl",
                            fullPath: r + "playarea/41pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "42pl",
                            fullPath: r + "playarea/42pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "43pl",
                            fullPath: r + "playarea/43pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "44pl",
                            fullPath: r + "playarea/44pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "45pl",
                            fullPath: r + "playarea/45pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "46pl",
                            fullPath: r + "playarea/46pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "47pl",
                            fullPath: r + "playarea/47pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "48pl",
                            fullPath: r + "playarea/48pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "49pl",
                            fullPath: r + "playarea/49pl.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "50pl",
                            fullPath: r + "playarea/50pl.png"
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
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "paytableNameText",
                                            text: "BASE & RESPIN FEATURE PAYTABLE",
                                            style: e,
                                            x: 960,
                                            y: 52,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "page0text0",
                                            text: "ALL_WINS_BEGIN",
                                            style: n,
                                            x: 960,
                                            y: 132,
                                            anchorX: .5,
                                            anchorY: .5,
                                            lineHeight: 35,
                                            maxWidth: 1600
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "page0text1",
                                            text: "Substitutes_for_all",
                                            style: a,
                                            x: 710,
                                            y: 807,
                                            anchorX: .5,
                                            anchorY: .5,
                                            lineHeight: 35,
                                            maxWidth: 470
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "page0text1",
                                            text: "Appears_on_reels",
                                            style: a,
                                            x: 1486,
                                            y: 807,
                                            anchorX: .5,
                                            anchorY: .5,
                                            lineHeight: 35
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "img1_container",
                                            y: -170,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page0img10_spesh",
                                                assetKey: "page0img10_spesh",
                                                x: 326,
                                                y: 327
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img6_red",
                                                assetKey: "page0img6_red",
                                                x: 796,
                                                y: 323
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img8_orange",
                                                assetKey: "page0img8_orange",
                                                x: 1263,
                                                y: 326
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img9_violet",
                                                assetKey: "page0img9_violet",
                                                x: 539,
                                                y: 518
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img7_blue",
                                                assetKey: "page0img7_blue",
                                                x: 1046,
                                                y: 522
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "img_container",
                                            y: 380,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page0img0_A",
                                                assetKey: "page0img0_A",
                                                x: 358,
                                                y: 179
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img1_K",
                                                assetKey: "page0img1_K",
                                                x: 573,
                                                y: 179
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img2_Q",
                                                assetKey: "page0img2_Q",
                                                x: 787,
                                                y: 171
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img3_J",
                                                assetKey: "page0img3_J",
                                                x: 998,
                                                y: 178
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img5_10",
                                                assetKey: "page0img5_10",
                                                x: 1209,
                                                y: 184
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img4_9",
                                                assetKey: "page0img4_9",
                                                x: 1458,
                                                y: 183
                                            }]
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img0",
                                            assetKey: "page3img0",
                                            x: 252,
                                            y: 710
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img11_bonus",
                                            assetKey: "page0img11_bonus",
                                            x: 1020,
                                            y: 707
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "A-9_container",
                                            y: 585,
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "m06_container",
                                                x: 438,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m06_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps6-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps6-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps6-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m07_container",
                                                x: 653,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m07_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps7-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps7-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps7-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m08_container",
                                                x: 863,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m08_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps8-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps8-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps8-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m09Container",
                                                x: 1074,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m09_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps9-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps9-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps9-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m10_container",
                                                x: 1323,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m10_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps10-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps10-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps10-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m11_container",
                                                x: 1535,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m11_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps11-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps11-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps11-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m01-m05_container",
                                            y: -170,
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "m02 _container",
                                                x: 595,
                                                y: 350,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 2,
                                                    style: s,
                                                    y: 126,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m01_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps1-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps1-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps1-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable2",
                                                        type: mt.objects.TEXT,
                                                        class: "ps1-2",
                                                        style: i,
                                                        y: 126,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m05_container",
                                                x: 1070,
                                                y: 350,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 2,
                                                    style: s,
                                                    y: 126,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m02_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps2-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps2-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps2-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable2",
                                                        type: mt.objects.TEXT,
                                                        class: "ps2-2",
                                                        style: i,
                                                        y: 126,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m03Container",
                                                x: 1533,
                                                y: 370,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m03_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps3-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps3-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps3-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m04_container",
                                                x: 813,
                                                y: 560,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m04_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps4-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps4-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps4-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m01_container",
                                                x: 1320,
                                                y: 560,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m05_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps5-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps5-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps5-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1_container",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "paytableNameText",
                                            text: "FREE GAMES PAYTABLE",
                                            style: e,
                                            x: 960,
                                            y: 52,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "page0text0",
                                            text: "ALL_WINS_BEGIN",
                                            style: n,
                                            x: 960,
                                            y: 132,
                                            anchorX: .5,
                                            anchorY: .5,
                                            lineHeight: 35,
                                            maxWidth: 1600
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "page0text1",
                                            text: "Appears_on_reels2",
                                            style: a,
                                            x: 700,
                                            y: 807,
                                            anchorX: .5,
                                            anchorY: .5,
                                            lineHeight: 35
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "page0text1",
                                            text: "Appears_on_reels3",
                                            style: a,
                                            x: 1486,
                                            y: 807,
                                            anchorX: .5,
                                            anchorY: .5,
                                            lineHeight: 35
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "img1_container",
                                            y: -170,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page0img10_spesh",
                                                assetKey: "page0img10_spesh",
                                                x: 326,
                                                y: 327
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img6_red",
                                                assetKey: "page0img6_red",
                                                x: 796,
                                                y: 323
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img8_orange",
                                                assetKey: "page0img8_orange",
                                                x: 1263,
                                                y: 326
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img9_violet",
                                                assetKey: "page0img9_violet",
                                                x: 539,
                                                y: 518
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img7_blue",
                                                assetKey: "page0img7_blue",
                                                x: 1046,
                                                y: 522
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "img_container",
                                            y: 380,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page0img0_A",
                                                assetKey: "page0img0_A",
                                                x: 358,
                                                y: 179
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img1_K",
                                                assetKey: "page0img1_K",
                                                x: 573,
                                                y: 179
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img2_Q",
                                                assetKey: "page0img2_Q",
                                                x: 787,
                                                y: 171
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img3_J",
                                                assetKey: "page0img3_J",
                                                x: 998,
                                                y: 178
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img5_10",
                                                assetKey: "page0img5_10",
                                                x: 1209,
                                                y: 184
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page0img4_9",
                                                assetKey: "page0img4_9",
                                                x: 1458,
                                                y: 183
                                            }]
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img0",
                                            assetKey: "page3img0",
                                            x: 252,
                                            y: 710
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img11_bonus",
                                            assetKey: "page0img11_bonus",
                                            x: 1020,
                                            y: 707
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "A-9_container",
                                            y: 585,
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "m06_container",
                                                x: 438,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m06_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps19-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps19-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps19-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m07_container",
                                                x: 653,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m07_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps20-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps20-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps20-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m08_container",
                                                x: 863,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m08_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps21-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps21-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps21-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m09_container",
                                                x: 1074,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m09_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps22-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps22-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps22-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m10_container",
                                                x: 1323,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m10_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps23-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps23-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps23-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m11_container",
                                                x: 1535,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: o,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: o,
                                                    y: 33,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: o,
                                                    y: 66,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m11_pay_container",
                                                    x: 24,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps24-5",
                                                        style: p,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps24-4",
                                                        style: p,
                                                        y: 33,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps24-3",
                                                        style: p,
                                                        y: 66,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "m01-m05_container",
                                            y: -170,
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "m02 _container",
                                                x: 595,
                                                y: 350,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 2,
                                                    style: s,
                                                    y: 126,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m01_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps14-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps14-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps14-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable2",
                                                        type: mt.objects.TEXT,
                                                        class: "ps14-2",
                                                        style: i,
                                                        y: 126,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m05_container",
                                                x: 1070,
                                                y: 350,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 2,
                                                    style: s,
                                                    y: 126,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m02_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps15-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps15-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps15-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable2",
                                                        type: mt.objects.TEXT,
                                                        class: "ps15-2",
                                                        style: i,
                                                        y: 126,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m03_container",
                                                x: 1533,
                                                y: 370,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m03_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps16-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps16-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps16-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m04_container",
                                                x: 813,
                                                y: 560,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m04_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps17-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps17-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps17-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "m01_container",
                                                x: 1320,
                                                y: 560,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber5",
                                                    text: 5,
                                                    style: s,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 4,
                                                    style: s,
                                                    y: 42,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "textNumber4",
                                                    text: 3,
                                                    style: s,
                                                    y: 84,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.GROUP,
                                                    name: "m05_pay_container",
                                                    x: 30,
                                                    contents: [{
                                                        name: "textPaytable5",
                                                        type: mt.objects.TEXT,
                                                        class: "ps18-5",
                                                        style: i,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable4",
                                                        type: mt.objects.TEXT,
                                                        class: "ps18-4",
                                                        style: i,
                                                        y: 42,
                                                        anchorY: .5
                                                    }, {
                                                        name: "textPaytable3",
                                                        type: mt.objects.TEXT,
                                                        class: "ps18-3",
                                                        style: i,
                                                        y: 84,
                                                        anchorY: .5
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2_container",
                                    contents: [{
                                        type: mt.objects.TEXT,
                                        name: "paytableNameText",
                                        text: "BET SLIP",
                                        style: e,
                                        x: 860,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text",
                                        text: "COLLECT_75",
                                        style: {
                                            font: "36pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        },
                                        x: 456,
                                        y: 595,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text",
                                        text: "PAYS_85",
                                        style: {
                                            font: "40pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        },
                                        x: 456,
                                        y: 782,
                                        anchorX: .5,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "page0text",
                                        text: "THE_BET_SLIP",
                                        style: {
                                            font: "36pt futuraptheavy",
                                            fill: 16777215
                                        },
                                        x: 714,
                                        y: 505,
                                        anchorY: .5,
                                        lineHeight: 35,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "betslip",
                                        assetKey: "betslip",
                                        x: 229,
                                        y: 92
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3_container",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "paytableNameText",
                                            text: "RESPIN FEATURE",
                                            style: e,
                                            y: 52,
                                            x: 960,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page2img",
                                            assetKey: "page2img",
                                            x: 648,
                                            y: 363
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP2",
                                            text: "Any_4_WILD",
                                            style: t,
                                            y: 234,
                                            x: 960,
                                            anchorX: .5,
                                            anchorY: .5,
                                            maxWidth: 1500,
                                            class: "coloredText"
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP2_1",
                                            text: "Total_Bet_is_the",
                                            style: t,
                                            y: 806,
                                            x: 960,
                                            anchorX: .5,
                                            anchorY: .5,
                                            maxWidth: 1500,
                                            class: "coloredText"
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4_container",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "rulesNameText",
                                            text: "RESPIN FEATURE",
                                            style: e,
                                            x: 960,
                                            y: 52,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img0",
                                            assetKey: "page3img0",
                                            x: 283,
                                            y: 245
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img1",
                                            assetKey: "page3img1",
                                            x: 857,
                                            y: 245
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img2",
                                            assetKey: "page3img2",
                                            x: 1489,
                                            y: 245
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img1",
                                            assetKey: "page3img1",
                                            x: 600,
                                            y: 474
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img2",
                                            assetKey: "page3img2",
                                            x: 830,
                                            y: 474
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page0img11_bonus",
                                            assetKey: "page0img11_bonus",
                                            x: 348,
                                            y: 733,
                                            scaleX: .7,
                                            scaleY: .7
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img0",
                                            assetKey: "page3img0",
                                            x: 586,
                                            y: 736,
                                            scaleX: .85,
                                            scaleY: .85
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img1",
                                            assetKey: "page3img1",
                                            x: 782,
                                            y: 736,
                                            scaleX: .85,
                                            scaleY: .85
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "page3img2",
                                            assetKey: "page3img2",
                                            x: 979,
                                            y: 736,
                                            scaleX: .85,
                                            scaleY: .85
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_1",
                                            text: "When_3_SCATTER",
                                            style: t,
                                            x: 960,
                                            y: 160,
                                            anchorX: .5,
                                            anchorY: .5,
                                            class: "coloredText",
                                            maxWidth: 1490
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_2",
                                            text: "if_a",
                                            style: a,
                                            x: 248,
                                            y: 340,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_3",
                                            text: "lands_beneath",
                                            style: a,
                                            x: 674,
                                            y: 340,
                                            anchorX: .5,
                                            anchorY: .5,
                                            maxWidth: 360
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_4",
                                            text: "and_next",
                                            style: a,
                                            x: 1277,
                                            y: 340,
                                            anchorX: .5,
                                            anchorY: .5,
                                            maxWidth: 420
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_5",
                                            text: "every",
                                            style: a,
                                            x: 540,
                                            y: 568,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_6",
                                            text: "that_substitutes",
                                            style: a,
                                            x: 1242,
                                            y: 568,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_7",
                                            text: "occurring_beneath",
                                            style: a,
                                            x: 425,
                                            y: 888,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP3_8",
                                            text: "may_contribute",
                                            style: a,
                                            x: 1399,
                                            y: 820,
                                            anchorX: .5,
                                            anchorY: .5,
                                            maxWidth: 450
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page5_container",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "rulesNameText",
                                            text: "PAYTABLE_help",
                                            style: e,
                                            x: 960,
                                            y: 52,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "page4img_container",
                                            y: 189,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page3img0",
                                                assetKey: "page3img0",
                                                x: 307,
                                                scaleX: 1.2,
                                                scaleY: 1.2
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img1",
                                                assetKey: "page3img1",
                                                x: 839,
                                                scaleX: 1.2,
                                                scaleY: 1.2
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img2",
                                                assetKey: "page3img2",
                                                x: 1370,
                                                scaleX: 1.2,
                                                scaleY: 1.2
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "page4img1_container",
                                            y: 540,
                                            x: 227,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page0img11_bonus",
                                                assetKey: "page0img11_bonus",
                                                y: -4,
                                                scaleX: .95,
                                                scaleY: .95
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img1",
                                                assetKey: "page3img1",
                                                x: 104,
                                                scaleX: .95,
                                                scaleY: .95
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img2",
                                                assetKey: "page3img2",
                                                x: 202,
                                                scaleX: .95,
                                                scaleY: .95
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "page4img2_container",
                                            y: 540,
                                            x: 769,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page0img11_bonus",
                                                assetKey: "page0img11_bonus",
                                                y: -4,
                                                scaleX: .95,
                                                scaleY: .95
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img0",
                                                assetKey: "page3img0",
                                                x: 104,
                                                scaleX: .95,
                                                scaleY: .95
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img2",
                                                assetKey: "page3img2",
                                                x: 202,
                                                scaleX: .95,
                                                scaleY: .95
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "page4img3_container",
                                            y: 540,
                                            x: 1301,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "page0img11_bonus",
                                                assetKey: "page0img11_bonus",
                                                y: -4,
                                                scaleX: .95,
                                                scaleY: .95
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img0",
                                                assetKey: "page3img0",
                                                x: 104,
                                                scaleX: .95,
                                                scaleY: .95
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "page3img1",
                                                assetKey: "page3img1",
                                                x: 202,
                                                scaleX: .95,
                                                scaleY: .95
                                            }]
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP4",
                                            text: "FREE_SPINS_FEATURE",
                                            style: {
                                                font: "26pt futuraptheavy",
                                                fill: 16777215,
                                                align: "center"
                                            },
                                            x: 960,
                                            y: 128,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP4_1",
                                            text: "substitutes_for",
                                            style: a,
                                            x: 430,
                                            y: 475,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP4_2",
                                            text: "substitutes_for",
                                            style: a,
                                            x: 962,
                                            y: 475,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP4_3",
                                            text: "substitutes_for",
                                            style: a,
                                            x: 1494,
                                            y: 475,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesTextP4",
                                            text: "Scatter_prize_is",
                                            style: t,
                                            x: 960,
                                            y: 827,
                                            anchorX: .5,
                                            anchorY: .5,
                                            class: "coloredText",
                                            maxWidth: 1490
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page6_container",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "rulesNameText",
                                            text: "RULES_help",
                                            style: e,
                                            y: 52,
                                            x: 960,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rulesText",
                                            text: "While_the_reels",
                                            style: t,
                                            y: 527,
                                            x: 960,
                                            class: "coloredText",
                                            anchorX: .5,
                                            anchorY: .5,
                                            maxWidth: 1490
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rtpTextRU",
                                            text: nge.i18n.get("rtpRU"),
                                            class: "rtpInfo",
                                            style: t,
                                            y: 645,
                                            x: 960,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.TEXT,
                                            name: "rtpTextEN",
                                            text: nge.i18n.get("rtpEN"),
                                            class: "rtpInfo",
                                            style: t,
                                            y: 625,
                                            x: 960,
                                            anchorX: .5,
                                            anchorY: .5
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page7_container",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "rulesNameText",
                                            text: "PAYLINE_help",
                                            style: e,
                                            x: 960,
                                            y: 52,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylinesP6_container",
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "payline_container",
                                                y: 107,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "1pl",
                                                    assetKey: "1pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "2pl",
                                                    assetKey: "2pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "3pl",
                                                    assetKey: "3pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "4pl",
                                                    assetKey: "4pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "5pl",
                                                    assetKey: "5pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline1_container",
                                                y: 270,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "6pl",
                                                    assetKey: "6pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "7pl",
                                                    assetKey: "7pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "8pl",
                                                    assetKey: "8pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "9pl",
                                                    assetKey: "9pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "10pl",
                                                    assetKey: "10pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline2_container",
                                                y: 435,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "11pl",
                                                    assetKey: "11pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "12pl",
                                                    assetKey: "12pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "13pl",
                                                    assetKey: "13pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "14pl",
                                                    assetKey: "14pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "15pl",
                                                    assetKey: "15pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline3_container",
                                                y: 600,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "16pl",
                                                    assetKey: "16pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "17pl",
                                                    assetKey: "17pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "18pl",
                                                    assetKey: "18pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "19pl",
                                                    assetKey: "19pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "20pl",
                                                    assetKey: "20pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline4_container",
                                                y: 769,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "21pl",
                                                    assetKey: "21pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "22pl",
                                                    assetKey: "22pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "23pl",
                                                    assetKey: "23pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "24pl",
                                                    assetKey: "24pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "25pl",
                                                    assetKey: "25pl",
                                                    x: 1468
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylinesTextP6_container",
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "paylineText_container",
                                                y: 123,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "1",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "2",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "3",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "4",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "5",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText1_container",
                                                y: 285,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "6",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "7",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "8",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "9",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "10",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText2_container",
                                                y: 450,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "11",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "12",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "13",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "14",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "15",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText3_container",
                                                y: 616,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "16",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "17",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "18",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "19",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "20",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText4_container",
                                                y: 785,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "21",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "22",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "23",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "24",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "25",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page8_container",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "x_container",
                                        x: -100,
                                        contents: [{
                                            type: mt.objects.TEXT,
                                            name: "rulesNameText",
                                            text: "PAYLINE_help",
                                            style: e,
                                            x: 960,
                                            y: 52,
                                            anchorX: .5,
                                            anchorY: .5
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylinesP7_container",
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "payline_container",
                                                y: 107,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "26pl",
                                                    assetKey: "26pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "27pl",
                                                    assetKey: "27pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "28pl",
                                                    assetKey: "28pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "29pl",
                                                    assetKey: "29pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "30pl",
                                                    assetKey: "30pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline1_container",
                                                y: 270,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "31pl",
                                                    assetKey: "31pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "32pl",
                                                    assetKey: "32pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "33pl",
                                                    assetKey: "33pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "34pl",
                                                    assetKey: "34pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "35pl",
                                                    assetKey: "35pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline2_container",
                                                y: 435,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "36pl",
                                                    assetKey: "36pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "37pl",
                                                    assetKey: "37pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "38pl",
                                                    assetKey: "38pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "39pl",
                                                    assetKey: "39pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "40pl",
                                                    assetKey: "40pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline3_container",
                                                y: 600,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "41pl",
                                                    assetKey: "41pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "42pl",
                                                    assetKey: "42pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "43pl",
                                                    assetKey: "43pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "44pl",
                                                    assetKey: "44pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "45pl",
                                                    assetKey: "45pl",
                                                    x: 1468
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "payline4_container",
                                                y: 769,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    name: "46pl",
                                                    assetKey: "46pl",
                                                    x: 317
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "47pl",
                                                    assetKey: "47pl",
                                                    x: 605
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "48pl",
                                                    assetKey: "48pl",
                                                    x: 893
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "49pl",
                                                    assetKey: "49pl",
                                                    x: 1181
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    name: "50pl",
                                                    assetKey: "50pl",
                                                    x: 1468
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "paylinesTextP7_container",
                                            contents: [{
                                                type: mt.objects.GROUP,
                                                name: "paylineText_container",
                                                y: 123,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "26",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "27",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "28",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "29",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "30",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText1_container",
                                                y: 285,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "31",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "32",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "33",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "34",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "35",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText2_container",
                                                y: 450,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "36",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "37",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "38",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "39",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "40",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText3_container",
                                                y: 616,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "41",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "42",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "43",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "44",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "45",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "paylineText4_container",
                                                y: 785,
                                                contents: [{
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "46",
                                                    style: l,
                                                    x: 298,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "47",
                                                    style: l,
                                                    x: 584,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "48",
                                                    style: l,
                                                    x: 872,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "49",
                                                    style: l,
                                                    x: 1159,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    type: mt.objects.TEXT,
                                                    name: "paylineNumber",
                                                    text: "50",
                                                    style: l,
                                                    x: 1446,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "fake_end_px",
                                                assetKey: "fake_end_px",
                                                x: 100
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "1px_empty",
                                    assetKey: "1px_empty"
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
                                name: "paginationInfoContainer",
                                y: 910,
                                x: 740,
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoOnePlate",
                                    assetKey: "pageInfoPlate"
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoTwoPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 50
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoThreePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 100
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoFourPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 150
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoFivePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 200
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoSixPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 250
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoSevenPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 300
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoEightPlate",
                                    assetKey: "pageInfoPlate",
                                    x: 350
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "pageInfoNinePlate",
                                    assetKey: "pageInfoPlate",
                                    x: 400
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
        1186: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1187: function(e, t) {
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
        1188: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
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
                            key: "slotMachineFrameMainGameTop",
                            fullPath: e + "playarea/slotMachineFrameMainGameTop.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameMainGameBottom",
                            fullPath: e + "playarea/slotMachineFrameMainGameBottom.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameLeft",
                            fullPath: e + "playarea/slotMachineFrameLeft.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "slotMachineFrameRight",
                            fullPath: e + "playarea/slotMachineFrameRight.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "reelsBg",
                            fullPath: e + "playarea/reelBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            key: "logoFreeSpins",
                            fullPath: e + "playarea/logoFreeSpins.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "popupsContainer"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "intrigueScreenBlocker",
                            assetKey: "1pxBlack",
                            scaleX: 1920,
                            scaleY: 1080,
                            pixelPerfect: 0,
                            alpha: 0,
                            isVisible: !1
                        }, {
                            type: mt.objects.IMAGE,
                            name: "intro_group",
                            assetKey: "1pxBlack"
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
                        }, {
                            type: mt.objects.IMAGE,
                            name: "jackpotPopup_group",
                            assetKey: "jackpotPopup_group"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "offers_group",
                            assetKey: "offers_group"
                        }, {
                            type: mt.objects.GROUP,
                            name: "blinkerContainer"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "tabs_group",
                            assetKey: "tabs_group"
                        }, {
                            type: mt.objects.GROUP,
                            name: "betSlipPanelTopParentContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "betSlipContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "winPopupContainer"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "ui_group",
                            assetKey: "ui_group"
                        }, {
                            type: mt.objects.GROUP,
                            name: "betSlipPanelBottomParentContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "betSlipPanelContainer"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "jackpotStatusPanelContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "foregroundContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "miniPaytable_container",
                            contents: []
                        }, {
                            type: mt.objects.GROUP,
                            name: "winlinesTextContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineFrameContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "slotMachineFrameMainGame",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "respinMainContainer",
                                    x: 245,
                                    y: 68
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameMainGameTop",
                                    assetKey: "slotMachineFrameMainGameTop",
                                    x: 245,
                                    y: 68
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameMainGameBottom",
                                    assetKey: "slotMachineFrameMainGameBottom",
                                    x: 229,
                                    y: 883
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameLeft",
                                    assetKey: "slotMachineFrameLeft",
                                    x: 229,
                                    y: 68,
                                    scaleY: .995
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameRight",
                                    assetKey: "slotMachineFrameRight",
                                    x: 1677,
                                    y: 68,
                                    scaleY: .995
                                }]
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
                            name: "reelsBorderContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "reelsBg",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "reelsBg",
                                    assetKey: "reelsBg",
                                    x: 216,
                                    y: 56,
                                    scaleX: 4,
                                    scaleY: 3.97
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "logoFreespinContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "logoFreeSpins",
                                assetKey: "logoFreeSpins",
                                x: 965,
                                y: 36,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "backgroundContainer"
                        }, {
                            type: mt.objects.GROUP,
                            name: "customButtonsVerticalMobileContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "customButtons01VerticalMobileContainer"
                            }, {
                                type: mt.objects.GROUP,
                                name: "customButtons02VerticalMobileContainer"
                            }]
                        }]
                    }
                }
            }
        },
        1189: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function() {
                var e = nge.appPath + "img/",
                    t = nge.Lib.Helper.mobileAndTabletCheck(),
                    n = {
                        name: "assets",
                        contents: []
                    };
                return n.contents.push({
                    type: mt.assets.ATLAS,
                    key: "paytable",
                    atlas: e + "atlases/paytable.json",
                    fullPath: e + "atlases/paytable.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: "symbols_static",
                    atlas: e + "atlases/symbols_static.json",
                    fullPath: e + "atlases/symbols_static.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: "betSlip",
                    atlas: e + "atlases/betSlip.json",
                    fullPath: e + "atlases/betSlip.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    key: "symbols_static_blur",
                    atlas: e + "atlases/symbols_static_blur.json",
                    fullPath: e + "atlases/symbols_static_blur.png"
                }), t = t ? "psd_atlases_ui_mobile" : "psd_atlases_ui", n.contents.push({
                    type: mt.assets.ATLAS,
                    subtype: "noPngQuant",
                    key: t,
                    atlas: e + "atlases/" + t + ".json",
                    fullPath: e + "atlases/" + t + ".png"
                }), n.contents.push({
                    type: mt.assets.IMAGE,
                    key: "popupJackpot",
                    fullPath: e + "jackpot/images/jackpotPopup.png"
                }, {
                    type: mt.assets.IMAGE,
                    key: "introScreenBg",
                    fullPath: e + "atlases/introScreenBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "bgArea",
                    fullPath: e + "atlases/bgArea.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "bgAreaFreeSpins",
                    fullPath: e + "atlases/bgAreaFreeSpins.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    key: "page2img",
                    fullPath: e + "atlases/page2img.jpg"
                }, {
                    type: mt.assets.SPINE,
                    key: "m00_000",
                    spine: e + "spine/symbols/sm00_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m01_000",
                    spine: e + "spine/symbols/sm01_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m02_000",
                    spine: e + "spine/symbols/sm02_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m03_000",
                    spine: e + "spine/symbols/sm03_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m04_000",
                    spine: e + "spine/symbols/sm04_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m05_000",
                    spine: e + "spine/symbols/sm05_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m06_000",
                    spine: e + "spine/symbols/sm06_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m07_000",
                    spine: e + "spine/symbols/sm07_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m08_000",
                    spine: e + "spine/symbols/sm08_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m09_000",
                    spine: e + "spine/symbols/sm09_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m10_000",
                    spine: e + "spine/symbols/sm10_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m11_000",
                    spine: e + "spine/symbols/sm11_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "m12_000",
                    spine: e + "spine/symbols/sm12_000.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "wild_upgrade",
                    spine: e + "spine/symbols/wild_upgrade.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "intrigue_animation",
                    spine: e + "spine/intrigue/spinification.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "intrigue_fg_animation",
                    spine: e + "spine/intrigue/intrigue_fg.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bigWinAnim",
                    spine: e + "spine/bigWin/big_win_animation.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bgAnimation",
                    spine: e + "spine/background/background_animation.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bgAnimationFs",
                    spine: e + "spine/background/background_animation_fs.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bgAnimationLeft",
                    spine: e + "spine/background/character_left.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "bgAnimationRight",
                    spine: e + "spine/background/character_right.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "popupBackground",
                    spine: e + "spine/popup/popup.json"
                }, {
                    type: mt.assets.SPINE,
                    subtype: "noPngQuant",
                    key: "glowAnimation",
                    spine: e + "spine/background/glow_animation.json"
                }, {
                    type: mt.assets.SPINE,
                    subtype: "noPngQuant",
                    key: "glowAnimationFs",
                    spine: e + "spine/background/glow_animation_fs.json"
                }, {
                    type: mt.assets.IMAGE,
                    key: "respinText",
                    fullPath: e + "respin/respin_text.png"
                }, {
                    type: mt.assets.SPINE,
                    key: "respin_animation",
                    spine: e + "spine/respin/respin.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "betSlipTotalizatorLoose",
                    spine: e + "spine/betSlip/totalizator.json"
                }, {
                    type: mt.assets.SPINE,
                    key: "plus_one",
                    spine: e + "spine/betSlip/plusOne.json"
                }, {
                    type: mt.assets.BINARY,
                    key: "emitterVFX",
                    fullPath: nge.appPath + "/emitter/explosionClearCoin.dat"
                }, {
                    type: mt.assets.IMAGE,
                    key: "clCoin_sprite_01",
                    width: 1548,
                    height: 1292,
                    frameWidth: 258,
                    frameHeight: 258,
                    fullPath: e + "emitter/clCoin_sprite_01.png"
                }), {
                    assets: n,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1190: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1191: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1192: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.DjGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("betSlip")
            }))
        },
        1193: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.FeaturesCfg = nge.App.DjGameBase.Mlm.Brain.FeaturesCfg.extend((function() {
                this.supported.push("PaidJackpots")
            }))
        },
        1194: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.DjGameBase.Mlm.Brain.Slot.extend((function() {
                var e = this,
                    t = this;
                this.canIntrigue = !0, this.popupShowDelay = 1, this.triggerCycleDuration = 1500;
                var n = !1;
                this.winlinesAllDone = function() {
                    this.super.winlinesAllDone();
                    var e = t.getLastData(),
                        n = 0;
                    e.slotWin && e.slotWin.totalWin && (n = e.slotWin.totalWin), e = nge.localData.get("respin.inProgress");
                    var a = t.checkIfBonus();
                    e && a && 0 == +n && nge.observer.fire("spinComplete.noWinButHasBonusInRespin")
                }, this.checkIfBonus = function() {
                    var t = e.getLastData();
                    if (!t || !t.slotWin) return !1;
                    if ("Ready" !== t.state)
                        for (var n in t.slotWin.reSpins)
                            if ("Bonus" === t.slotWin.reSpins[n].type) return !0;
                    if (!t.slotWin.lineWinAmounts || !t.slotWin.lineWinAmounts.length) return !1;
                    for (var a in t.slotWin.lineWinAmounts)
                        if ("Bonus" === (n = t.slotWin.lineWinAmounts[a]).type && "WildMultiplier" !== n.bonusName) return !0;
                    return !1
                }, this.animateBonusSymbols = function() {
                    for (var e = t.getLastData(), n = 0; n < e.slotWin.lineWinAmounts.length; n++) {
                        var a = e.slotWin.lineWinAmounts[n];
                        "linePickBonus" !== a.type && "Bonus" !== a.type || nge.observer.fire("winlines.showBonusLine", {
                            wonSymbols: a.wonSymbols,
                            selectedLine: a.selectedLine
                        })
                    }
                    if (e.slotWin.reSpins && e.slotWin.reSpins.length)
                        for (n = 0; n < e.slotWin.reSpins.length; n++) "ReSpins" !== (a = e.slotWin.reSpins[n]).bonusName && "Bonus" !== a.type || nge.observer.fire("winlines.showBonusLine", {
                            wonSymbols: a.wonSymbols,
                            selectedLine: a.selectedLine
                        })
                }, this.tryPlayBonusWinSound = function() {
                    var e = t.getLastData().state;
                    if (!e) return !1;
                    "ReSpins" !== e || nge.localData.get("respin.inProgress") ? "FreeSpins" === e && nge.observer.fire("sound.bonus.trigger.play") : nge.observer.fire("sound.respins.trigger.play")
                }, this.runBonusGame = function() {
                    var e = this.getLastData(),
                        t = e.state;
                    if (!t) return !1;
                    switch (t) {
                        case "ReSpins":
                            for (var n in t = 0, e.slotWin.reSpins) {
                                var a = e.slotWin.reSpins[n];
                                a.bonusName && "ReSpins" === a.bonusName && (t = a.params.reSpins)
                            }
                            nge.observer.fire("respin.start", t);
                            break;
                        default:
                            this.super.runBonusGame()
                    }
                }, this.spinResponseHandler = function(t) {
                    e.super.spinResponseHandler(t);
                    var n = t.slotWin;
                    if (n && n.lineWinAmounts) {
                        for (var a = [], s = [], o = 0; o < n.lineWinAmounts.length; o++) {
                            var i = n.lineWinAmounts[o].bonusName;
                            "WildMultiplier" === i ? a.push(n.lineWinAmounts.splice(o--, 1)[0]) : "ReSpins" === i && s.push(n.lineWinAmounts.splice(o--, 1)[0])
                        }
                        t.slotWin.wildMults = a, t.slotWin.reSpins = s
                    }
                }, this.winlinesAnimateAll = function() {
                    var e = 1,
                        t = nge.localData.get("freespin.reelsWithWildUpgrade");
                    if (nge.localData.get("freespin.inProgress") && t && (n || nge.localData.get("settings.turboMode")))
                        for (var a = 0; a < t.length; a++) t[a] && (e = 200);
                    nge.observer.fire("winlines.animateAll", null, e)
                }, this.customCheckCanSpin = function() {
                    return !!nge.localData.get("respin.inProgress") || e.super.customCheckCanSpin()
                }, this.winProcessingFinish = function() {
                    if ((nge.localData.get("freespin.inProgress") || t._balanceResponsed) && t._counterFinished && !t._wasFreespin) {
                        if (nge.localData.get("betSlipFinishedWithWin") && nge.localData.get("jackpot.canPlay")) return nge.observer.fire("slot.winProcessingFinishWithoutSpinReady"), !1;
                        this.tryLaunchJackpot() || (nge.localData.set("isSpinReadyToProceed", !0), nge.observer.fire("spinReadyToProceed"), nge.observer.fire("slot.winProcessingFinish"))
                    }
                };
                var a = function() {
                        n = !1
                    },
                    s = function() {
                        n = !0
                    };
                this.onTransportCloseHandler = function() {
                    t.super.onTransportCloseHandler(), n = !1
                }, this.customSubscribe = function() {
                    t.super.customSubscribe(), nge.observer.add("slotMachine.spinStart", a, !1, !0), nge.observer.add("slotMachine.stopCommand", s, !1, !0), nge.observer.add("betSlip.tryLaunchJackpot", t.tryLaunchJackpot, !1, !0)
                }
            }))
        },
        1195: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this,
                    t = this;
                this.reelsCount = 5, this.wheelSpinSoundCount = 0, this.scattersNeededForFreespins = this.scatterReelsCount = 5, this.musicFade.isOn = !0, this.musicFade.intrigueStartReel = 2, this.musicFade.fadePower = .6, this.scatterSymbols = ["12", "25"];
                var n = !1,
                    a = 0,
                    s = 0,
                    o = [];
                this.loopedSounds.push("intro_sound"), this.buttonsClickSounds = [{
                    s: "click",
                    e: "button.clickSound",
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
                }, {
                    s: "bet_slip",
                    e: "button.bet_slip.play",
                    relaunch: !0
                }, {
                    s: "bet_slip_symbol",
                    e: "button.bet_slip_symbol.play",
                    relaunch: !0
                }, {
                    s: "bet_slip_spins_btn",
                    e: "button.bet_slip_spins_btn.play",
                    relaunch: !0
                }, {
                    s: "bet_slip_plus_minus",
                    e: "button.bet_slip_plus_minus.play",
                    relaunch: !0
                }, {
                    s: "bet_slip_place_bet",
                    e: "button.bet_slip_place_bet.play",
                    relaunch: !0
                }, {
                    s: "bet_slip_exit",
                    e: "button.bet_slip_exit.play",
                    relaunch: !0
                }, {
                    s: "bet_slip_on_collect",
                    e: "bet_slip_on_collect.play",
                    relaunch: !0
                }], this.bigWinSounds.push({
                    s: "big_win_start",
                    e: "win.big.show"
                }), this.popupSounds = [{
                    s: "freespin_popup",
                    e: "sound.freespin_popup.play",
                    relaunch: !0
                }, {
                    s: "freespin_popup_add",
                    e: "sound.freespin_popup_add.play",
                    relaunch: !0
                }, {
                    s: "freespin_popup_win",
                    e: "sound.freespin_popup_win.play",
                    relaunch: !0
                }, {
                    s: "freespin_popup",
                    e: "popup.hideStart",
                    action: "stop"
                }, {
                    s: "freespin_popup_win",
                    e: "popup.hideStart",
                    action: "stop"
                }, {
                    s: "freespin_popup_close",
                    e: "popup.hideStart",
                    relaunch: !0
                }], this.scatterSounds = [{
                    s: "scatter_0",
                    e: "sound.scatter_0.play"
                }, {
                    s: "scatter_1",
                    e: "sound.scatter_1.play"
                }, {
                    s: "scatter_2",
                    e: "sound.scatter_2.play"
                }], this.intrigueSounds = [{
                    s: "intrigue",
                    e: "slotMachine.reel_2.intrigue.start",
                    relaunch: !0
                }, {
                    s: "intrigue",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "intrigue",
                    e: "sound.intrigue.stop",
                    action: "stop"
                }], this.counterSounds = [{
                    s: "regular_counter",
                    e: "sounds.win.regular.counter.play",
                    action: "play",
                    loop: !0
                }, {
                    s: "regular_counter",
                    e: "sounds.win.regular.counter.stop",
                    action: "stop"
                }, {
                    s: "regular_counter",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "counter_stop",
                    e: "sounds.win.regular.counter.stop",
                    action: "play",
                    relaunch: !0
                }], this.soundExt.push({
                    s: "bs_wheel_spin_0",
                    e: "slotMachine.reelsStartRandSound"
                }, {
                    s: "bs_wheel_spin_0",
                    e: "slotMachine.spinComplete",
                    action: "stop"
                }, {
                    s: "bn_background",
                    e: "jackpot.startPopup.show",
                    action: "stop"
                }, {
                    s: "respin_start",
                    e: "sound.respins.trigger.play",
                    relaunch: !0
                }, {
                    s: "respin",
                    e: "respin.spinificate.start",
                    loop: !0,
                    relaunch: !0
                }, {
                    s: "respin",
                    e: "respin.spinificate.stop",
                    action: "stop"
                }, {
                    s: "respin",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "respin",
                    e: "jackpot.startPopup.show",
                    action: "stop"
                }, {
                    s: "respin_wild_0",
                    e: "sound.respin_wild_0.play",
                    relaunch: !0
                }, {
                    s: "respin_wild_1",
                    e: "sound.respin_wild_1.play",
                    relaunch: !0
                }, {
                    s: "respin_wild_2",
                    e: "sound.respin_wild_2.play",
                    relaunch: !0
                }, {
                    s: "respin_wild_3",
                    e: "sound.respin_wild_3.play",
                    relaunch: !0
                }, {
                    s: "respin_background",
                    e: "sound.respin_background.play",
                    loop: !0,
                    relaunch: !0
                }, {
                    s: "respin_background",
                    e: "sound.respin_background.stop",
                    action: "stop"
                }, {
                    s: "respin_background",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "respin_background",
                    e: "jackpot.startPopup.show",
                    action: "stop"
                }, {
                    s: "totalizer_win",
                    e: "sound.totalizer_win.play"
                }, {
                    s: "totalizer_win",
                    e: "sound.totalizer_win.stop",
                    action: "stop"
                }, {
                    s: "totalizer_win",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "totalizer_lose",
                    e: "sound.totalizer_lose.play"
                }, {
                    s: "totalizer_lose",
                    e: "Transport.close",
                    action: "stop"
                }), this.layerSwitcherHandler = function(e) {
                    if (n) switch (e) {
                        case "intro":
                            nge.observer.fire("introSound.Play");
                            break;
                        case "game":
                        case "gameOffer":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.play"), nge.observer.fire("sound.volume", {
                                s: "bs_background",
                                volume: 1
                            }), nge.observer.fire("sound.volume", {
                                s: "bn_background",
                                volume: 1
                            });
                            break;
                        case "gameFreeSpin":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.play")
                    }
                }, this.onSoundsPreloaded = function() {
                    n = !0, t.super.onSoundsPreloaded()
                };
                var i = function(e) {
                        if ("jackpot" !== nge.statesManager.getCurrentName()) {
                            if (e && e.getData() && e.getData().name) {
                                if ("betSlipPanelBtn" === (e = e.getData().name)) return void nge.observer.fire("button.bet_slip.play");
                                if ("betSlipSymbol0Btn" === e || "betSlipSymbol1Btn" === e || "betSlipSymbol2Btn" === e || "betSlipSymbol3Btn" === e || "betSlipSymbol4Btn" === e) return void nge.observer.fire("button.bet_slip_symbol.play");
                                if ("betSlipNumberOfSpinsBtn0" === e || "betSlipNumberOfSpinsBtn1" === e || "betSlipNumberOfSpinsBtn2" === e) return void nge.observer.fire("button.bet_slip_spins_btn.play");
                                if ("betSlipSelectBetPlusBtn" === e || "betSlipSelectBetMinusBtn" === e) return void nge.observer.fire("button.bet_slip_plus_minus.play");
                                if ("betSlipCloseButton" === e) return void nge.observer.fire("button.bet_slip_exit.play");
                                if ("betSlipPlaceBetButton" === e) return void nge.observer.fire("button.bet_slip_place_bet.play")
                            }
                            nge.observer.fire("button.clickSound")
                        }
                    },
                    p = function(e) {
                        return function() {
                            var n = nge.localData.get("slotMachine.spinResult.columns")[e].some((function(e) {
                                    return -1 !== t.scatterSymbols.indexOf(e)
                                })),
                                s = e / Math.round(t.reelsCount / t.scatterReelsCount);
                            n && (o.push(e), t.scattersNeededForFreespins - o.length <= t.scatterReelsCount - 1 - s && (nge.observer.fire("sound.scatter_" + a + ".play"), a++))
                        }
                    },
                    l = function(e) {
                        switch (e) {
                            case "freespinStartPopup":
                                nge.observer.fire("sound.freespin_popup.play"), nge.observer.fire("introSound.Play"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.stop");
                                break;
                            case "additionalFreespinsPopup":
                                nge.observer.fire("sound.freespin_popup_add.play"), nge.observer.fire("introSound.Play"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.stop");
                                break;
                            case "freespinEndPopup":
                                nge.observer.fire("sound.freespin_popup_win.play"), nge.observer.fire("introSound.Play"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.stop");
                                break;
                            case "betSlipWinPopup":
                                nge.observer.fire("sound.totalizer_win.play"), nge.observer.fire("introSound.Play"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.stop")
                        }
                    },
                    r = function(e) {
                        switch (e) {
                            case "additionalFreespinsPopup":
                                nge.observer.fire("introSound.Stop"), nge.observer.fire("bn_background.play"), nge.observer.fire("sound.volume", {
                                    s: "bn_background",
                                    volume: 1
                                });
                                break;
                            case "betSlipWinPopup":
                                nge.observer.fire("introSound.Stop"), nge.observer.fire("sound.totalizer_win.stop"), nge.observer.fire("bs_background.play"), nge.observer.fire("sound.volume", {
                                    s: "bs_background",
                                    volume: 1
                                })
                        }
                    },
                    c = function() {
                        a = 0, o = []
                    },
                    m = function() {
                        nge.localData.get("respin.inProgress") || nge.observer.fire("slotMachine.reelsStartRandSound")
                    },
                    y = function() {
                        nge.observer.fire("sound.respin_wild_" + s + ".play"), 4 <= ++s && (s = 0)
                    },
                    u = function() {
                        t.fadeSound("intrigue", 0, 1e3), nge.rafSetTimeout((function() {
                            nge.observer.fire("sound.intrigue.stop", null, 1e3)
                        }))
                    },
                    b = function() {
                        nge.observer.fire("sound.volume", {
                            s: "intrigue",
                            volume: 1
                        })
                    },
                    g = function() {
                        t.fadeSound("respin_background", 1, 500), t.fadeSound("bs_background", 0, 500)
                    },
                    h = function() {
                        t.fadeSound("bs_background", 1, 500), t.fadeSound("respin_background", 0, 500)
                    };
                this.onSpinReadyToProceed = function() {
                    nge.localData.get("respin.inProgress") || this.super.onSpinReadyToProceed()
                }, this.intrigueStart = function() {
                    nge.localData.get("respin.inProgress") || this.super.intrigueStart()
                }, this.intrigueEnd = function() {
                    nge.localData.get("respin.inProgress") || this.super.intrigueEnd()
                };
                var f = function() {
                        nge.observer.fire("sound.respin_background.play"), nge.observer.fire("sound.volume", {
                            s: "respin_background",
                            volume: 0
                        })
                    },
                    d = function() {
                        nge.observer.fire("sound.respin_background.stop")
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("popup.showStart", l, !1, !0), nge.observer.add("popup.hideStart", r, !1, !0), nge.observer.add("button.click", i, !1, !0);
                    for (var t = 0; t < e.reelsCount; t++) nge.observer.add("slotMachine.reel_" + t + ".animation.stop", p(t), !1, !0);
                    nge.observer.add("slotMachine.spinCommand", c, !1, !0), nge.observer.add("slotMachine.spinStart", m, !1, !0), nge.observer.add("respin.playWildSound", y, !1, !0), nge.observer.add("sound.intrigue.fadeStop", u, !1, !0), nge.observer.add("slotMachine.reel_2.intrigue.start", b, !1, !0), nge.observer.add("respin.spinificate.start", g, !1, !0), nge.observer.add("sound.finishRespin", h, !1, !0), nge.observer.add("bs_background.play", f, !1, !0), nge.observer.add("bs_background.stop", d, !1, !0)
                }
            }))
        },
        1196: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.SpinButton = nge.App.DjGameBase.Mlm.Brain.SpinButton.extend((function() {
                this.logType = "log", this.useActiveStopSystem = !0, this.spinButtonEnableEvents.push("betSlip.enableSpinButton"), this.spinButtonDisableEvents.push("betSlip.sendGetPayoutRequest"), this.spinEnableBlockers.push((function() {
                    return nge.findOne("^betSlipGroup") && nge.findOne("^betSlipGroup").visible
                })), this.spinEnableBlockers.push((function() {
                    return nge.localData.get("betSlip.opened")
                }))
            }))
        },
        1197: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Win = nge.App.DjGameBase.Mlm.Brain.Win.extend((function() {
                var e = this;
                this.regularWinInterruptOnFreespinEnd = !0, this.regularWinParams = {
                    low: .99,
                    mid: 2.99,
                    high: 10
                }, this.regularPopupShowHandler = function(t) {
                    e.super.regularPopupShowHandler(t), nge.observer.fire("sounds.win.regular.counter.play")
                }, this.regularWinCounterCompleteHandler = function() {
                    e.super.regularWinCounterCompleteHandler(), nge.observer.fire("sounds.win.regular.counter.stop");
                    var t = nge.localData.get("freespin.inProgress"),
                        n = nge.localData.get("bonusWon");
                    t && n && nge.observer.fire("winlines.animateByOne.cycleComplete", null, 1)
                }
            }))
        },
        1198: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.BetSlip = Class.extend((function() {
                this.subscribe = function() {
                    nge.observer.add("betSlip.sendPlayRequest", (function(e) {
                        e = nge.App.getInstance("Mlm.Transport.Models.BetSlipPlayRequest", !1, {
                            result: !0,
                            data: e
                        }), nge.transport.send(e)
                    }), !1, !0), nge.observer.add("transportMessage.BetSlipPlayResponse", (function(e) {
                        nge.brain.do("BetSlipPlayResponse", "betSlip"), nge.observer.fire("betSlip.playResponse")
                    }), !1, !0), nge.observer.add("betSlip.sendGetPayoutRequest", (function() {
                        var e = nge.App.getInstance("Mlm.Transport.Models.BetSlipGetPayoutsRequest", !1, {
                            result: !0,
                            data: {}
                        });
                        nge.transport.send(e)
                    }), !1, !0), nge.observer.add("transportMessage.BetSlipGetPayoutsResponse", (function(e) {
                        nge.brain.do("BetSlipGetPayoutsResponse", "betSlip"), (e = e.data.payouts).forEach((function(e) {
                            e.id = +e.id, e.factor = +e.factor, e.symbol = +e.symbol, e.spins = +e.spins, e.toCollect = +e.toCollect;
                            for (var t = 0; t < e.bets.length; t++) e.bets[t] = +e.bets[t]
                        })), nge.observer.fire("betSlip.getPayoutResponse", e)
                    }), !1, !0), nge.observer.add("betSlip.sendUpdateRequest", (function() {
                        var e = nge.App.getInstance("Mlm.Transport.Models.BetSlipUpdateRequest", !1, {
                            result: !0,
                            data: {}
                        });
                        nge.transport.send(e)
                    }), !1, !0), nge.observer.add("transportMessage.BetSlipUpdateResponse", (function(e) {
                        nge.brain.do("BetSlipUpdateResponse", "betSlip"), (e = e.data.bets).forEach((function(e) {
                            e.actionsLeft = +e.actionsLeft, e.bet = +e.bet, e.finished = "true" === e.finished, e.pays = +e.pays, e.payoutId = +e.payoutId, e.toCollect = +e.toCollect, e.win = +e.win
                        })), nge.observer.fire("betSlip.updateResponse", e)
                    }), !1, !0)
                }
            }))
        },
        1199: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic = {}
        },
        1200: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["@PAYTABLE", "@SETTINGS_SCREEN", "RESPIN", "FREESPIN", "SPIN"],
                        RESPIN: ["SPIN"],
                        FREESPIN: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    }
                }, this.sharedStates = {
                    play: ["SHARED"]
                }, delete this.buttons.play.freeSpinStart, delete this.buttons.play.finalPopup, this.sharedButtons.play.linesChanger = {
                    name: "linesChanger",
                    enabled: !1,
                    visible: !0
                }
            }))
        },
        1201: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States = {}
        },
        1202: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SpinState.extend((function() {
                this.validityCheckHandler = function() {
                    return this.super.validityCheckHandler()
                }
            }))
        },
        1203: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.FreespinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.FreespinState.extend((function() {
                var e = !1,
                    t = !1,
                    n = !1;
                this.validityCheckHandler = function() {
                    var a = !!nge.localData.get("slotMachine.lastResponse.state") && "Ready" !== nge.localData.get("slotMachine.lastResponse.state"),
                        s = "true" === nge.localData.get("slotMachine.slotWin.canGamble");
                    return !(!t && s) && (a || !n && e)
                }, this.freespinStartHandler = function() {
                    e = !0, this.super.freespinStartHandler()
                }, this.balanceResponseHandler = function() {
                    n = !0, e = !1, this.super.balanceResponseHandler()
                }, this.spinStartHandler = function() {
                    this.super.spinStartHandler(), n = !1
                }, this.freespinEndHandler = function() {
                    t = !1, this.super.freespinEndHandler()
                }
            }))
        },
        1204: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SharedState.extend((function() {
                var e = this;
                this.propUpdateHandlers.show = function() {
                    var t = nge.localData.get("autospin"),
                        n = nge.localData.get("slotMachine.state");
                    n = !n || "Ready" === n;
                    var a = "big" === nge.localData.get("win.winType"),
                        s = nge.localData.get("isSpinReadyToProceed"),
                        o = nge.localData.get("freespin.inProgress"),
                        i = !!nge.localData.get("slotMachine.lastResponse.state") && "Ready" !== nge.localData.get("slotMachine.lastResponse.state");
                    return !t && e.balanceReceived && !i && !e._spinInProgress && !a && n && s && !o
                }
            }))
        },
        1205: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile = {}
        },
        1206: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic = {}
        },
        1207: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["@PAYTABLE", "@SETTINGS_SCREEN", "RESPIN", "FREESPIN", "SPIN"],
                        RESPIN: ["SPIN"],
                        FREESPIN: ["SPIN"],
                        PAYTABLE: ["SPIN"],
                        SETTINGS_SCREEN: ["SPIN"]
                    }
                }, this.sharedStates = {
                    play: ["SHARED"]
                }, delete this.buttons.play.freeSpinStart, delete this.buttons.play.finalPopup
            }))
        },
        1208: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States = {}
        },
        1209: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.FreespinState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.FreespinState.extend((function() {
                var e = !1,
                    t = !1,
                    n = !1;
                this.validityCheckHandler = function() {
                    var a = !!nge.localData.get("slotMachine.lastResponse.state") && "Ready" !== nge.localData.get("slotMachine.lastResponse.state"),
                        s = "true" === nge.localData.get("slotMachine.slotWin.canGamble");
                    return !(!t && s) && (a || !n && e)
                }, this.freespinStartHandler = function() {
                    e = !0, this.super.freespinStartHandler()
                }, this.balanceResponseHandler = function() {
                    n = !0, e = !1, this.super.balanceResponseHandler()
                }, this.spinStartHandler = function() {
                    this.super.spinStartHandler(), n = !1
                }, this.freespinEndHandler = function() {
                    t = !1, this.super.freespinEndHandler()
                }
            }))
        },
        1210: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SharedState.extend((function() {
                var e = this;
                this.propUpdateHandlers.show = function() {
                    var t = nge.localData.get("autospin"),
                        n = nge.localData.get("slotMachine.state");
                    n = !n || "Ready" === n;
                    var a = "big" === nge.localData.get("win.winType"),
                        s = nge.localData.get("isSpinReadyToProceed"),
                        o = nge.localData.get("freespin.inProgress"),
                        i = !!nge.localData.get("slotMachine.lastResponse.state") && "Ready" !== nge.localData.get("slotMachine.lastResponse.state");
                    return !t && e.balanceReceived && !i && !e._spinInProgress && !a && n && s && !o
                }
            }))
        },
        1211: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState.extend((function() {
                this.validityCheckHandler = function() {
                    return this.super.validityCheckHandler()
                }
            }))
        },
        1212: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1213: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup = {}
        },
        1214: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models = {}
        },
        1215: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.SpinResponse = nge.App.DjGameBase.Mlm.Transport.APIMockup.Models.SpinResponse.extend((function() {
                var e = this;
                this.get = function() {
                    if (e.super.get(), nge.localData.get("apiMockups.mma.betSlip.active")) {
                        var t = nge.App.getInstance("nge.Mlm.Transport.APIMockup.Helpers.Request").getResponse("BetSlipUpdateResponse");
                        nge.observer.fire("apiMockup.sendToClient", t, 500)
                    }
                    return e.response
                }
            }))
        },
        1216: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.BetSlipGetPayoutsResponse = Class.extend((function() {
                this.data = !1;
                var e = "1 2 3 4 5 10 15 20 30 40 50 100".split(" "),
                    t = function(t, n, a, s, o) {
                        return {
                            id: t.toString(),
                            symbol: n.toString(),
                            factor: a.toString(),
                            toCollect: s.toString(),
                            spins: o.toString(),
                            bets: e
                        }
                    };
                this.constructor = function(e) {
                    this.data = e
                }, this.get = function() {
                    var e = this.data.baseResponse;
                    e.result = "true", e.sesId = nge.localData.get("apiMockup.sesId"), e.data = {};
                    var n = [t(0, 1, 224.8, 100, 2), t(1, 1, 672.6, 10, 20), t(2, 1, 2108.7, 10, 20), t(3, 2, 2108.7, 10, 20), t(4, 2, 468.27, 10, 20), t(5, 2, 1316.6, 10, 20), t(6, 3, 85.1, 10, 20), t(7, 3, 134.06, 10, 20), t(8, 3, 286.27, 10, 20), t(9, 4, 25.413, 10, 20), t(10, 4, 35.076, 10, 20), t(11, 4, 50.512, 10, 20), t(12, 5, 1.93, 10, 20), t(13, 5, 4.522, 10, 20), t(14, 5, 13.82, 10, 20)];
                    return nge.localData.set("apiMockups.mma.betSlip.payouts", n), e.data.payouts = n, e
                }
            }))
        },
        1217: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.BetSlipPlayResponse = Class.extend((function() {
                this.data = !1, this.constructor = function(e) {
                    this.data = e
                }, this.get = function() {
                    var e = this.data.baseResponse;
                    e.result = "true", e.sesId = nge.localData.get("apiMockup.sesId"), e.data = "", nge.localData.set("apiMockups.mma.betSlip.active", !0), nge.localData.set("apiMockups.mma.betSlip.playData", this.data.requestData.data);
                    var t = nge.localData.get("apiMockups.mma.betSlip.payouts")[this.data.requestData.data.betId],
                        n = t.spins;
                    return nge.localData.set("apiMockups.mma.betSlip.toCollect", t.toCollect), nge.localData.set("apiMockups.mma.betSlip.spins", n), e
                }
            }))
        },
        1218: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.APIMockup.Models.BetSlipUpdateResponse = Class.extend((function() {
                this.data = !1, this.constructor = function(e) {
                    this.data = e
                }, this.get = function() {
                    var e = this.data.baseResponse;
                    e.result = "true", e.sesId = nge.localData.get("apiMockup.sesId"), e.data = {};
                    var t = nge.localData.get("apiMockups.mma.betSlip.playData"),
                        n = t.bet;
                    t = t.betId, t = nge.localData.get("apiMockups.mma.betSlip.payouts")[t];
                    var a = +nge.localData.get("apiMockups.mma.betSlip.toCollect"),
                        s = +nge.localData.get("apiMockups.mma.betSlip.spins");
                    a = Math.max(a - 5, 0), s = Math.max(s - 1, 0);
                    var o = 0 === a ? t.factor : 0,
                        i = 0 === a || 0 === s;
                    return i ? (nge.localData.set("apiMockups.mma.betSlip.active", !1), nge.localData.set("apiMockups.mma.betSlip.playData", !1), nge.localData.set("apiMockups.mma.betSlip.toCollect", !1), nge.localData.set("apiMockups.mma.betSlip.spins", !1)) : (nge.localData.set("apiMockups.mma.betSlip.toCollect", a), nge.localData.set("apiMockups.mma.betSlip.spins", s)), e.data.bets = [{
                        payoutId: t.payoutId.toString(),
                        bet: n.toString(),
                        pays: t.factor.toString(),
                        toCollect: a.toString(),
                        actionsLeft: s.toString(),
                        win: o.toString(),
                        finished: i.toString()
                    }], e
                }
            }))
        },
        1219: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1220: function(e, t) {
            nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.WildMultiplier = ["params.multiplier"]
        },
        1221: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models = {}
        },
        1222: function(e, t) {
            nge.Mlm.Transport.Models.FreeSpinResponse = nge.Mlm.Transport.Model.extend((function() {
                this.customConstructor = function(e) {
                    this.action = "FreeSpinResponse", this.result = nge.Lib.Helper.recursiveGet("result", e, !1), this.sesId = nge.Lib.Helper.recursiveGet("sesId", e, !1), this.data = {
                        state: nge.Lib.Helper.recursiveGet("data.state", e, !1),
                        totalBonusWin: nge.Lib.Helper.recursiveGet("data.totalBonusWin", e, !1),
                        freeSpinRemain: nge.Lib.Helper.recursiveGet("data.freeSpinRemain", e, !1),
                        freeSpinsTotal: nge.Lib.Helper.recursiveGet("data.freeSpinsTotal", e, !1)
                    };
                    var t, n = nge.Mlm.Transport.Helper.parseSpinResults(nge.Lib.Helper.recursiveGet("data", e, !1));
                    for (t in n) this.data[t] = n[t];
                    (n = nge.Lib.Helper.recursiveGet("data.params", e, !1)) && (this.data.params = n), (n = nge.Lib.Helper.recursiveGet("data.expandingSymbol", e, !1)) && (this.data.expandingSymbol = n), (n = nge.Lib.Helper.recursiveGet("data.reSpinRemain", e, !1)) && (this.data.reSpinRemain = n), (n = nge.Lib.Helper.recursiveGet("data.reSpinTotal", e, !1)) && (this.data.reSpinTotal = n), "0" === this.data.freeSpinRemain && (this.data.gameParameters = nge.Mlm.Transport.Helper.parseBonusEnd(e)), e = nge.Lib.Helper.recursiveGet("data.slotWin", e, !1), (e = nge.Mlm.Transport.Helper.parseSlotWin(e)) && (this.data.slotWin = e)
                }
            }))
        },
        1223: function(e, t) {
            nge.App[nge.appNS].Cfg.APIMockupGameSettings = nge.App.DjGameBase.Cfg.APIMockupGameSettings.extend((function() {
                this.globalMockupsOn = !1, this.params.jackpotsEnabled = !1, this.params.offersEnabled = !1, this.params.scatterSymbols = ["12"], this.params.jokerSymbols = ["0"], this.params.freespinsForScatters = [0, 0, 3, 5, 10], this.params.spinSymbols = [
                    [
                        ["1", "7", "2", "4", "3"],
                        ["1", "2", "2", "2", "2"],
                        ["3", "1", "2", "2", "2"],
                        ["2", "1", "7", "5", "3"]
                    ],
                    [
                        ["3", "7", "1", "4", "3"],
                        ["9", "6", "8", "7", "10"],
                        ["3", "2", "2", "2", "2"],
                        ["1", "10", "7", "5", "3"]
                    ],
                    [
                        ["3", "7", "1", "4", "3"],
                        ["9", "6", "8", "7", "10"],
                        ["12", "2", "12", "2", "12"],
                        ["3", "10", "7", "5", "3"]
                    ],
                    [
                        ["10", "5", "12", "4", "6"],
                        ["4", "4", "4", "4", "1"],
                        ["11", "8", "8", "8", "8"],
                        ["11", "8", "8", "8", "8"]
                    ],
                    [
                        ["10", "7", "12", "4", "6"],
                        ["8", "7", "7", "0", "1"],
                        ["3", "8", "8", "8", "8"],
                        ["11", "8", "8", "8", "8"]
                    ],
                    [
                        ["2", "2", "2", "4", "5"],
                        ["7", "9", "2", "8", "11"],
                        ["11", "11", "11", "8", "8"],
                        ["11", "8", "8", "8", "8"]
                    ],
                    [
                        ["0", "0", "0", "9", "0"],
                        ["2", "2", "2", "4", "5"],
                        ["3", "3", "3", "9", "3"],
                        ["11", "8", "8", "8", "8"]
                    ],
                    [
                        ["10", "5", "12", "4", "6"],
                        ["8", "10", "7", "0", "1"],
                        ["11", "8", "8", "8", "8"],
                        ["11", "8", "8", "8", "8"]
                    ],
                    [
                        ["10", "5", "12", "4", "6"],
                        ["4", "4", "4", "4", "1"],
                        ["11", "8", "8", "8", "8"],
                        ["11", "8", "8", "8", "8"]
                    ],
                    [
                        ["10", "7", "12", "4", "6"],
                        ["8", "7", "7", "0", "1"],
                        ["3", "8", "8", "8", "8"],
                        ["11", "8", "8", "8", "8"]
                    ]
                ], this.params.freespinSymbols = [
                    [
                        ["7", "10", "0", "6", "11"],
                        ["3", "3", "0", "3", "3"],
                        ["3", "3", "0", "3", "3"],
                        ["12", "5", "0", "5", "7"]
                    ],
                    [
                        ["3", "1", "0", "4", "10"],
                        ["2", "2", "0", "2", "1"],
                        ["3", "3", "0", "3", "3"],
                        ["12", "4", "0", "5", "4"]
                    ],
                    [
                        ["3", "1", "0", "4", "10"],
                        ["7", "5", "0", "2", "1"],
                        ["3", "3", "0", "3", "3"],
                        ["12", "3", "0", "5", "4"]
                    ],
                    [
                        ["3", "0", "0", "4", "5"],
                        ["2", "2", "0", "2", "7"],
                        ["3", "3", "0", "3", "3"],
                        ["12", "4", "0", "5", "4"]
                    ],
                    [
                        ["0", "1", "0", "4", "10"],
                        ["0", "0", "0", "2", "1"],
                        ["3", "3", "0", "3", "3"],
                        ["12", "4", "0", "5", "4"]
                    ]
                ], this.params.lines = [
                    ["0", "0", "0", "0", "0"],
                    ["0", "0", "1", "0", "0"],
                    ["0", "1", "1", "1", "0"],
                    ["0", "1", "2", "1", "0"],
                    ["0", "1", "0", "1", "0"],
                    ["0", "0", "0", "1", "0"],
                    ["0", "1", "0", "0", "0"],
                    ["0", "0", "1", "1", "0"],
                    ["0", "1", "1", "0", "0"],
                    ["0", "0", "2", "0", "0"],
                    ["0", "0", "2", "1", "0"],
                    ["0", "1", "2", "0", "0"],
                    ["1", "1", "1", "1", "1"],
                    ["1", "1", "2", "1", "1"],
                    ["1", "1", "0", "1", "1"],
                    ["1", "2", "2", "2", "1"],
                    ["1", "0", "0", "0", "1"],
                    ["1", "2", "1", "2", "1"],
                    ["1", "0", "1", "0", "1"],
                    ["1", "1", "1", "2", "1"],
                    ["1", "1", "1", "0", "1"],
                    ["1", "2", "1", "1", "1"],
                    ["1", "0", "1", "1", "1"],
                    ["1", "2", "0", "2", "1"],
                    ["1", "0", "2", "0", "1"],
                    ["2", "2", "2", "2", "2"],
                    ["2", "2", "3", "2", "2"],
                    ["2", "2", "1", "2", "2"],
                    ["2", "3", "3", "3", "2"],
                    ["2", "1", "1", "1", "2"],
                    ["2", "3", "2", "3", "2"],
                    ["2", "1", "2", "1", "2"],
                    ["2", "2", "2", "3", "2"],
                    ["2", "2", "2", "1", "2"],
                    ["2", "3", "2", "2", "2"],
                    ["2", "1", "2", "2", "2"],
                    ["2", "3", "1", "3", "2"],
                    ["2", "1", "3", "1", "2"],
                    ["3", "3", "3", "3", "3"],
                    ["3", "3", "2", "3", "3"],
                    ["3", "2", "2", "2", "3"],
                    ["3", "2", "1", "2", "3"],
                    ["3", "2", "3", "2", "3"],
                    ["3", "3", "3", "2", "3"],
                    ["3", "2", "3", "3", "3"],
                    ["3", "3", "2", "2", "3"],
                    ["3", "2", "2", "3", "3"],
                    ["3", "3", "1", "3", "3"],
                    ["3", "3", "1", "2", "3"],
                    ["3", "2", "1", "3", "3"]
                ], this.params.payouts = [{
                    payout: "2",
                    symbols: ["1", "1"]
                }, {
                    payout: "10",
                    symbols: ["1", "1", "1"]
                }, {
                    payout: "25",
                    symbols: ["1", "1", "1", "1"]
                }, {
                    payout: "50",
                    symbols: ["1", "1", "1", "1", "1"]
                }, {
                    payout: "2",
                    symbols: ["2", "2"]
                }, {
                    payout: "10",
                    symbols: ["2", "2", "2"]
                }, {
                    payout: "25",
                    symbols: ["2", "2", "2", "2"]
                }, {
                    payout: "40",
                    symbols: ["2", "2", "2", "2", "2"]
                }, {
                    payout: "1",
                    symbols: ["3", "3"]
                }, {
                    payout: "5",
                    symbols: ["3", "3", "3"]
                }, {
                    payout: "15",
                    symbols: ["3", "3", "3", "3"]
                }, {
                    payout: "40",
                    symbols: ["3", "3", "3", "3", "3"]
                }, {
                    payout: "5",
                    symbols: ["4", "4", "4"]
                }, {
                    payout: "15",
                    symbols: ["4", "4", "4", "4"]
                }, {
                    payout: "40",
                    symbols: ["4", "4", "4", "4", "4"]
                }, {
                    payout: "5",
                    symbols: ["5", "5", "5"]
                }, {
                    payout: "15",
                    symbols: ["5", "5", "5", "5"]
                }, {
                    payout: "40",
                    symbols: ["5", "5", "5", "5", "5"]
                }, {
                    payout: "5",
                    symbols: ["6", "6", "6"]
                }, {
                    payout: "10",
                    symbols: ["6", "6", "6", "6"]
                }, {
                    payout: "25",
                    symbols: ["6", "6", "6", "6", "6"]
                }, {
                    payout: "5",
                    symbols: ["7", "7", "7"]
                }, {
                    payout: "10",
                    symbols: ["7", "7", "7", "7"]
                }, {
                    payout: "25",
                    symbols: ["7", "7", "7", "7", "7"]
                }, {
                    payout: "4",
                    symbols: ["8", "8", "8"]
                }, {
                    payout: "10",
                    symbols: ["8", "8", "8", "8"]
                }, {
                    payout: "25",
                    symbols: ["8", "8", "8", "8", "8"]
                }, {
                    payout: "4",
                    symbols: ["9", "9", "9"]
                }, {
                    payout: "10",
                    symbols: ["9", "9", "9", "9"]
                }, {
                    payout: "25",
                    symbols: ["9", "9", "9", "9", "9"]
                }, {
                    payout: "4",
                    symbols: ["10", "10", "10"]
                }, {
                    payout: "10",
                    symbols: ["10", "10", "10", "10"]
                }, {
                    payout: "25",
                    symbols: ["10", "10", "10", "10", "10"]
                }, {
                    payout: "4",
                    symbols: ["11", "11", "11"]
                }, {
                    payout: "10",
                    symbols: ["11", "11", "11", "11"]
                }, {
                    payout: "25",
                    symbols: ["11", "11", "11", "11", "11"]
                }], this.params.cheats = {
                    symbol0Line: {
                        spinResult: this.generateWinlineCombo("0", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol1Line: {
                        spinResult: this.generateWinlineCombo("1", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol2Line: {
                        spinResult: this.generateWinlineCombo("2", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol3Line: {
                        spinResult: this.generateWinlineCombo("3", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol4Line: {
                        spinResult: this.generateWinlineCombo("4", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol5Line: {
                        spinResult: this.generateWinlineCombo("5", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol6Line: {
                        spinResult: this.generateWinlineCombo("6", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol7Line: {
                        spinResult: this.generateWinlineCombo("7", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol8Line: {
                        spinResult: this.generateWinlineCombo("8", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol9Line: {
                        spinResult: this.generateWinlineCombo("9", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol10Line: {
                        spinResult: this.generateWinlineCombo("10", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol11Line: {
                        spinResult: this.generateWinlineCombo("11", 3, 5, 4),
                        featureCoins: []
                    },
                    symbol12Line: {
                        spinResult: this.generateWinlineCombo("12", 3, 5, 4),
                        featureCoins: []
                    },
                    bigWin: {
                        spinResult: this.generateWinlineCombo("5", 5, 5, 4),
                        featureCoins: []
                    },
                    regularWin: {
                        spinResult: this.generateWinlineCombo("5", 3, 5, 4),
                        featureCoins: []
                    }
                }
            }))
        },
        5: function(e, t, n) {
            n(1076), n(1077), n(1078), n(1079), n(1080), n(1081), n(1082), n(1083), n(1084), n(1085), n(1086), n(1087), n(1088), n(1089), n(1090), n(1091), n(1092), n(1093), n(1094), n(1095), n(1096), n(1097), n(1098), n(1099), n(1100), n(1101), n(1102), n(1103), n(1104), n(1105), n(1106), n(1107), n(1108), n(1109), n(1110), n(1111), n(1112), n(1113), n(1114), n(1115), n(1116), n(1117), n(1118), n(1119), n(1120), n(1121), n(1122), n(1123), n(1124), n(1125), n(1126), n(1127), n(1128), n(1129), n(1130), n(1131), n(1132), n(1133), n(1134), n(1135), n(1136), n(1137), n(1138), n(1139), n(1140), n(1141), n(1142), n(1143), n(1144), n(1145), n(1146), n(1147), n(1148), n(1149), n(1150), n(1151), n(1152), n(1153), n(1154), n(1155), n(1156), n(1157), n(1158), n(1159), n(1160), n(1161), n(1162), n(1163), n(1164), n(1165), n(1166), n(1167), n(1168), n(1169), n(1170), n(1171), n(1172), n(1173), n(1174), n(1175), n(1176), n(1177), n(1178), n(1179), n(1180), n(1181), n(1182), n(1183), n(1184), n(1185), n(1186), n(1187), n(1188), n(1189), n(1190), n(1191), n(1192), n(1193), n(1194), n(1195), n(1196), n(1197), n(1198), n(1199), n(1200), n(1201), n(1202), n(1203), n(1204), n(1205), n(1206), n(1207), n(1208), n(1209), n(1210), n(1211), n(1212), n(1213), n(1214), n(1215), n(1216), n(1217), n(1218), n(1219), n(1220), n(1221), n(1222), n(1223)
        }
    }
]);