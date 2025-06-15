var $jscomp = $jscomp || {};
$jscomp.scope = {}, $jscomp.findInternal = function(e, t, n) {
    e instanceof String && (e = String(e));
    for (var a = e.length, s = 0; s < a; s++) {
        var o = e[s];
        if (t.call(n, o, s, e)) return {
            i: s,
            v: o
        }
    }
    return {
        i: -1,
        v: void 0
    }
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
}, $jscomp.polyfill("Array.prototype.find", (function(e) {
    return e || function(e, t) {
        return $jscomp.findInternal(this, e, t).v
    }
}), "es6", "es3"), $jscomp.polyfill("Array.prototype.fill", (function(e) {
    return e || function(e, t, n) {
        var a = this.length || 0;
        for (0 > t && (t = Math.max(0, a + t)), (null == n || n > a) && (n = a), 0 > (n = Number(n)) && (n = Math.max(0, a + n)), t = Number(t || 0); t < n; t++) this[t] = e;
        return this
    }
}), "es6", "es3"), $jscomp.polyfill("Object.is", (function(e) {
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
        1182: function(e, t) {
            nge.appNS = "ZenZenCash", nge.App[nge.appNS] = {}
        },
        1183: function(e, t, n) {
            nge.appPath = "app/zenZenCash.68/", nge.gameCode = "368"
        },
        1184: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                this.linesCfg = [1], nge.App.addSysInstancesMode("SlimJackpot"), nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.run = function() {
                    this.super.run(), nge.localData.set("ways", 243)
                }, this.statesReplacements.play.push("background", "bigWinUni", "blinker", "goldReels", "intrigueZoomer", "popup", "pickJackpotPanel", "shaker", "miniPaytable"), this.statesReplacements.pickBonus = "currencySwitcher layersSwitcher balance coins credits creditsTotalBet popup pickBonus debug statusbar".split(" ")
            })), nge.Cfg.Main.project = "zenZenCash", nge.Cfg.Main.title = "Zen Zen Cash", nge.Cfg.Main.gameCode = "368", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.02"
        },
        1185: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1186: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    bell: "game:/sounds/bell",
                    bs_wheel_spin_0: "game:/sounds/reel_spin",
                    bs_background: "game:sounds/basic_background",
                    bn_background: "game:sounds/freespin_background",
                    intro_sound: "game:sounds/ambience",
                    pickem_background: "game:sounds/pickem_background",
                    intro_big_win: "game:/sounds/win_big_win",
                    big_win: "game:/sounds/big_win",
                    big_win_start: "game:/sounds/big_win_start",
                    big_win_ending: "game:/sounds/big_win_end",
                    gold_reel: "game:/sounds/gold_reel",
                    gold_reel_frame: "game:/sounds/gold_reel_frame",
                    gold_reel_slide: "game:/sounds/gold_reel_slide",
                    intrigue: "game:/sounds/intrigue",
                    reels_stop_0: "game:sounds/reel_stop_0",
                    reels_stop_1: "game:sounds/reel_stop_1",
                    reels_stop_2: "game:sounds/reel_stop_2",
                    reels_stop_3: "game:sounds/reel_stop_3",
                    reels_stop_4: "game:sounds/reel_stop_4",
                    hover_0: "game:sounds/hover",
                    hover_1: "game:sounds/hover",
                    hover_2: "game:sounds/hover",
                    click: "game:sounds/button",
                    spin_click: "game:/sounds/spin",
                    spin_stop: "game:/sounds/spin_stop",
                    pickem_button: "game:/sounds/pickem_button",
                    pickem_bonus_coin: "game:/sounds/bonus_coin",
                    pickem_multiopened_0: "game:/sounds/coin_blast",
                    pickem_multiopened_1: "game:/sounds/coin_blast",
                    pickem_multiopened_2: "game:/sounds/coin_blast",
                    pickem_multiopened_3: "game:/sounds/coin_blast",
                    pickem_card_0: "game:/sounds/coin_landing",
                    pickem_card_1: "game:/sounds/coin_landing",
                    pickem_card_2: "game:/sounds/coin_landing",
                    pickem_open: "game:/sounds/pickem_open",
                    pickem_close: "game:/sounds/pickem_close",
                    jackpot_collect: "game:/sounds/jackpot_collect",
                    bonus_popup: "game:/sounds/bonus_popup",
                    bonus_popup_win: "game:/sounds/bonus_popup_win",
                    popup_close: "game:/sounds/popup_close",
                    win_regularWinLow: "game:sounds/win_0",
                    win_regularWinMid: "game:sounds/win_1",
                    win_regularWinHigh: "game:/sounds/win_2",
                    regular_counter: "game:/sounds/counter",
                    counter_stop: "game:/sounds/counter_stop",
                    scatter_0: "game:sounds/scatter_0",
                    scatter_1: "game:sounds/scatter_1",
                    scatter_2: "game:sounds/scatter_2",
                    scatter_card_0: "game:sounds/scatter_card_0",
                    scatter_card_1: "game:sounds/scatter_card_1",
                    silence: "game:sounds/silence",
                    jackpot_online_background: "game:sounds/jackpot_online_background",
                    jackpot_online_coincidence_1: "game:sounds/jackpot_online_coincidence_1",
                    jackpot_online_coincidence_2: "game:sounds/jackpot_online_coincidence_2",
                    jackpot_online_coincidence_3: "game:sounds/jackpot_online_coincidence_3",
                    jackpot_online_finish_jackpot_popup: "game:sounds/jackpot_online_finish_jackpot_popup",
                    jackpot_online_won_jackpot_movie: "game:sounds/jackpot_online_won_jackpot_movie"
                }
            }))
        },
        1187: function(e, t) {
            nge.App[nge.appNS].Cfg.Spine = nge.Cfg.Spine.extend((function() {
                this.preloadForStates = {
                    play: []
                }, this.preloadForEvents = []
            }))
        },
        1188: function(e, t) {
            nge.App[nge.appNS].Com = {}
        },
        1189: function(e, t) {
            nge.App[nge.appNS].Com.Autospin = {}
        },
        1190: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.View = nge.App.DjGameBase.Com.Autospin.View.extend((function() {
                this.firstPanelElementTopYOffset = 0, this.yPanelOffset = 4, this.infinityTextYOffset = 3, this.staticMask = {
                    x: 20,
                    y: -280,
                    width: 116,
                    height: 452,
                    debug: !1
                }
            }))
        },
        1191: function(e, t) {
            nge.App[nge.appNS].Com.BetSettings = {}
        },
        1192: function(e, t) {
            nge.App[nge.appNS].Com.BetSettings.Controller = nge.App.DjGameBase.Com.BetSettings.Controller.extend((function() {
                var e = this;
                this.setSliderValue = function(t) {
                    var n = nge.localData.get(t),
                        a = e.sliders[t].obj;
                    if (n && a) {
                        var s = n.cfg ? n.cfg[0] : n.value,
                            o = s || 0,
                            i = n.cfg && n.cfg.length ? n.cfg[n.cfg.length - 1] : n.value;
                        i = i || 0, "lines" === t && (i = i = o = s = 243);
                        var r = nge.findOne(".".concat(t, "Minimum")),
                            l = nge.findOne(".".concat(t, "Maximum"));
                        r && (r.text = o), l && (l.text = i), n.cfg || (n.cfg = [], n.cfg.push(n.value)), a.toggleBgInput(!0), "lines" === t ? a.setValuesRange([s], s) : a.setValuesRange(n.cfg, n.value), a.setOnDrag((function(e) {
                            n.value !== e && (nge.observer.fire(t.concat(".set"), e), nge.observer.fire("denom_change.play"))
                        })), a.setOnChange((function() {}))
                    }
                }
            }))
        },
        1193: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        1194: function(e, t) {
            nge.App[nge.appNS].Com.Background.Controller = nge.Com.Base.extend((function() {
                function e(e, t, n, a, s, o, i, r) {
                    return e = nge.Mlm.Objects.Spine({
                        assetKey: e,
                        name: t,
                        x: n,
                        y: a,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1
                    }), s = nge.findOne("^" + s), s = nge.objects.create(e, s, !0), o && s.setAnimationByName(0, o, i, r), s
                }
                var t = this,
                    n = !1,
                    a = null,
                    s = null,
                    o = null,
                    i = null,
                    r = null,
                    l = null,
                    c = null,
                    p = null,
                    m = null,
                    u = [];
                this.create = function() {
                    this.createDefault(), n || (t.subscribe(), n = !0), a = nge.findOne("^boyAlbumBackgroundAnimation"), s = nge.findOne("^boyPortraitBackgroundAnimation"), o = nge.findOne("^girlAlbumBackgroundAnimation"), i = nge.findOne("^girlPortraitBackgroundAnimation"), r = nge.findOne("^lightsBackgroundAnimation"), l = nge.findOne("^logoPortraitBackgroundAnimation"), c = nge.findOne("^fishBackgroundAnimation"), p = nge.findOne("^candlesAlbumBackgroundAnimation"), m = nge.findOne("^candlesPortraitBackgroundAnimation"), u = [];
                    for (var g = 0; 5 > g; g++) u.push(e("splash_animation", "splash_" + g, 415 + 268 * g, 918, "splashAnimationContainer"));
                    b("main_game")
                };
                var b = function(e) {
                        a.spine.skeleton.setSkinByName(e), s.spine.skeleton.setSkinByName(e), o.spine.skeleton.setSkinByName(e), i.spine.skeleton.setSkinByName(e), r.spine.skeleton.setSkinByName(e), c.spine.skeleton.setSkinByName(e)
                    },
                    g = function(e) {
                        "play" === e && ("album" === nge.resolutionsManager.getOrientation() ? (a.setAnimationByMode(0, "boy_idle_long", nge.spine.LOOP), o.setAnimationByMode(0, "girl_idle_long", nge.spine.LOOP), r.setAnimationByMode(0, "lights", nge.spine.LOOP), c.setAnimationByMode(0, "water", nge.spine.LOOP), c.setAnimationByMode(1, "fish", nge.spine.LOOP), c.setAnimationByMode(2, "reflection", nge.spine.LOOP), p.setAnimationByMode(0, "candles", nge.spine.LOOP)) : (s.setAnimationByMode(0, "boy_idle_long", nge.spine.LOOP), i.setAnimationByMode(0, "girl_idle_long", nge.spine.LOOP), m.setAnimationByMode(0, "candles", nge.spine.LOOP), l.setAnimationByMode(0, "logo", nge.spine.LOOP)))
                    },
                    y = function(e) {
                        "album" === e ? (a.setAnimationByMode(0, "boy_idle_long", nge.spine.LOOP), o.setAnimationByMode(0, "girl_idle_long", nge.spine.LOOP), r.setAnimationByMode(0, "lights", nge.spine.LOOP), c.setAnimationByMode(0, "water", nge.spine.LOOP), c.setAnimationByMode(1, "fish", nge.spine.LOOP), c.setAnimationByMode(2, "reflection", nge.spine.LOOP), p.setAnimationByMode(0, "candles", nge.spine.LOOP), s.stop(), i.stop(), m.stop(), l.stop()) : "portrait" === e && (a.stop(), o.stop(), r.stop(), c.stop(), p.stop(), s.setAnimationByMode(0, "boy_idle_long", nge.spine.LOOP), i.setAnimationByMode(0, "girl_idle_long", nge.spine.LOOP), m.setAnimationByMode(0, "candles", nge.spine.LOOP), l.setAnimationByMode(0, "logo", nge.spine.LOOP))
                    },
                    d = function() {
                        "album" === nge.resolutionsManager.getOrientation() ? (a.setAnimationByMode(0, "boy_win", nge.spine.NONE), a.onComplete.addOnce((function() {
                            a.setAnimationByMode(0, "boy_idle_short", nge.spine.LOOP)
                        })), o.setAnimationByMode(0, "girl_win", nge.spine.NONE), o.onComplete.addOnce((function() {
                            o.setAnimationByMode(0, "girl_idle_short", nge.spine.LOOP)
                        }))) : (s.setAnimationByMode(0, "boy_win", nge.spine.NONE), s.onComplete.addOnce((function() {
                            s.setAnimationByMode(0, "boy_idle_short", nge.spine.LOOP)
                        })), i.setAnimationByMode(0, "girl_win", nge.spine.NONE), i.onComplete.addOnce((function() {
                            i.setAnimationByMode(0, "girl_idle_short", nge.spine.LOOP)
                        })))
                    },
                    h = function(e) {
                        switch (e) {
                            case "game":
                                b("main_game");
                                break;
                            case "gameFreeSpin":
                                b("free_spin")
                        }
                    },
                    f = function() {
                        nge.rafSetTimeout((function() {
                            for (var e = nge.localData.get("freespin.inProgress") ? 1 : 0; 5 > e; e++) nge.tween.add(u[e]).to({
                                alpha: 1
                            }, 300, nge.Lib.Tween.Easing.Linear.None).start(), u[e].setAnimationByMode(0, "splash", nge.spine.LOOP)
                        }), 250)
                    },
                    _ = function(e) {
                        return function() {
                            if (!nge.localData.get("freespin.inProgress") || 0 !== e) {
                                var t = nge.tween.add(u[e]).to({
                                    alpha: 0
                                }, 400, nge.Lib.Tween.Easing.Linear.None);
                                t.onComplete.addOnce((function() {
                                    u[e].stop()
                                })), t.start()
                            }
                        }
                    };
                this.subscribe = function() {
                    nge.observer.add("StatesManager.create.end", g), nge.observer.add("resolutionsManager.orientation.change", y), nge.observer.add("winlines.animateAll", d), nge.observer.add("layersSwitcher.switched", h), nge.observer.add("slotMachine.spinStart", f);
                    for (var e = 0; 5 > e; e++) nge.observer.add("slotMachine.reel_" + e + ".animation.stop", _(e))
                }
            }))
        },
        1195: function(e, t) {
            nge.App[nge.appNS].Com.Background.Tpl = function() {
                return {
                    styles: {
                        ".album .lightsAnimationContainer": {
                            isVisible: !0
                        },
                        ".portrait .lightsAnimationContainer": {
                            isVisible: !1
                        },
                        ".album .candlesAlbumAnimationContainer": {
                            isVisible: !0
                        },
                        ".portrait .candlesAlbumAnimationContainer": {
                            isVisible: !1
                        },
                        ".album .candlesPortraitAnimationContainer": {
                            isVisible: !1
                        },
                        ".portrait .candlesPortraitAnimationContainer": {
                            isVisible: !0
                        },
                        ".album .childrenAlbumAnimationContainer": {
                            isVisible: !0
                        },
                        ".portrait .childrenAlbumAnimationContainer": {
                            isVisible: !1
                        },
                        ".album .fishAnimationContainer": {
                            isVisible: !0
                        },
                        ".portrait .fishAnimationContainer": {
                            isVisible: !1
                        },
                        ".album .bgArea": {
                            isVisible: !0
                        },
                        ".portrait .bgArea": {
                            isVisible: !1
                        },
                        ".album .bgAreaVertical": {
                            isVisible: !1
                        },
                        ".portrait .bgAreaVertical": {
                            isVisible: !0
                        },
                        ".album .bgAreaFreeSpins": {
                            isVisible: !0
                        },
                        ".portrait .bgAreaFreeSpins": {
                            isVisible: !1
                        },
                        ".album .bgAreaFreeSpinsVertical": {
                            isVisible: !1
                        },
                        ".portrait .bgAreaFreeSpinsVertical": {
                            isVisible: !0
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
                            name: "backgroundAnimationContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "lightsAnimationContainer",
                                class: "lightsAnimationContainer",
                                alignX: "center",
                                alignY: "center",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "lightsBackgroundAnimation",
                                    assetKey: "lights_animation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "candlesAlbumAnimationContainer",
                                class: "candlesAlbumAnimationContainer",
                                alignX: "center",
                                alignY: "center",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "candlesAlbumBackgroundAnimation",
                                    assetKey: "candlesAlbum_animation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "candlesPortraitAnimationContainer",
                                class: "candlesPortraitAnimationContainer",
                                x: "50%",
                                y: 960,
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "candlesPortraitBackgroundAnimation",
                                    assetKey: "candlesPortrait_animation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "childrenAlbumAnimationContainer",
                                class: "childrenAlbumAnimationContainer",
                                alignX: "center",
                                alignY: "center",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "boyAlbumBackgroundAnimation",
                                    assetKey: "childrenAlbum_animation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "girlAlbumBackgroundAnimation",
                                    assetKey: "childrenAlbum_animation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "fishAnimationContainer",
                                class: "fishAnimationContainer",
                                alignX: "center",
                                alignY: "center",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "fishBackgroundAnimation",
                                    assetKey: "fish_animation",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "bgAreaContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "bgArea",
                                class: "bgArea",
                                assetKey: "bgArea",
                                alignX: "center",
                                alignY: "center",
                                anchorX: .5,
                                anchorY: .5,
                                x: 0,
                                y: 0,
                                sWidth: "100%",
                                sHeight: "100%",
                                sType: "circumscribed"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "bgAreaVertical",
                                class: "bgAreaVertical",
                                assetKey: "bgAreaVertical",
                                alignX: "center",
                                y: 960,
                                anchorX: .5,
                                anchorY: .5,
                                scaleX: 1.25,
                                scaleY: 1.25
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "bgAreaFreeSpinsContainer",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "bgAreaFreeSpins",
                                class: "bgAreaFreeSpins",
                                assetKey: "bgAreaFreeSpins",
                                alignX: "center",
                                alignY: "center",
                                anchorX: .5,
                                anchorY: .5,
                                x: 0,
                                y: 0,
                                sWidth: "100%",
                                sHeight: "100%",
                                sType: "circumscribed"
                            }, {
                                type: mt.objects.IMAGE,
                                name: "bgAreaFreeSpinsVertical",
                                class: "bgAreaFreeSpinsVertical",
                                assetKey: "bgAreaFreeSpinsVertical",
                                alignX: "center",
                                y: 960,
                                anchorX: .5,
                                anchorY: .5,
                                scaleX: 1.25,
                                scaleY: 1.25
                            }]
                        }]
                    }
                }
            }
        },
        1196: function(e, t) {
            nge.App[nge.appNS].Com.Blinker = {}
        },
        1197: function(e, t) {
            nge.App[nge.appNS].Com.Blinker.Cfg = nge.App.DjGameBase.Com.Blinker.Cfg.extend((function() {
                this.params.rectHorizontal = {
                    x: 258,
                    y: 124,
                    w: 1400,
                    h: 778
                }
            }))
        },
        1198: function(e, t) {
            nge.App[nge.appNS].Com.Buttons = {}
        },
        1199: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile = {}
        },
        1200: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Controller = nge.App.DjGameBase.Com.Buttons.Mobile.Controller.extend((function() {
                this.buttonsShiftY = 220, this.slotMachineHeight = 370
            }))
        },
        1201: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni = {}
        },
        1202: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Cfg = nge.App.DjGameBase.Com.BigWinUni.Cfg.extend((function() {
                this.cfg.followSlotName = "counter", this.cfg.loopStartFrame = 85, this.cfg.loopEndFrame = 116, this.cfg.jump2Frame = 116, this.cfg.emitterContainerSpine = "coins", this.cfg.emitterContainerDefault = "^bigWinEmitterContainer", this.cfg.EMITTER_DELAY = 2e3, this.cfg.emitter.event = "event_coins_explosion"
            }))
        },
        1203: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Controller = nge.App.DjGameBase.Com.BigWinUni.Controller.extend((function() {
                var e = this,
                    t = this,
                    n = null,
                    a = !1,
                    s = null,
                    o = {
                        config: "DL_burst_of_coins",
                        animated: !0,
                        count: 30,
                        prefix: "hole_coin_",
                        blendMode: 1,
                        ldgZero: 2,
                        variants: 10,
                        framerate: 30,
                        spineSlot: "fireworks",
                        countInSpine: 1
                    };
                this.coinsEmitters = [], this.create = function() {
                    e.super.create(), n = t.getInstance("Cfg").get(), s = nge.findOne("^bigWinShadowContainer");
                    var a = nge.Lib.Helper.generateImage(2099508, s, 0, 0, null, null, "bigWin_shadow");
                    a.alpha = .8, a.inputEnabled = !0, a.click = e.abort, a.tap = e.abort
                }, this.emitterInit = function() {
                    t.coinsEmitters = [], t.coinsEmitters.push(i(o)), 0 < t.coinsEmitters.length && t.mainAnim.onEvent.add((function(e, a) {
                        if (a.data.name === n.emitter.event)
                            for (var s in t.coinsEmitters) {
                                t.coinsEmitters[s].emitter.emit = !0;
                                break
                            }
                    }), t)
                };
                var i = function(e) {
                        var t = nge.findOne("^bigWinEmitterContainer");
                        return (e = nge.objects.create(new nge.Mlm.Objects.Emitter({
                            type: mt.objects.EMITTER,
                            name: e.config,
                            particles: r(e),
                            assetKey: e.config,
                            animated: e.animated
                        }), t)).emitter.emit = !1, e
                    },
                    r = function(e) {
                        var t, n = [];
                        if (e.animated)
                            for (t = 0; t < e.variants; t++) {
                                var a = [];
                                if (0 < e.count)
                                    for (var s = nge.Lib.Helper.getRandomInt(0, e.count), o = s + e.count, i = s; i < o; i++) s = nge.Lib.Helper.LdgZero(i % e.count, e.ldgZero), a.push(e.prefix + s + ".png");
                                else a.push(e.prefix);
                                n.push({
                                    framerate: e.framerate,
                                    loop: !0,
                                    textures: a
                                })
                            } else
                                for (t = 0; t < e.count; t++) nge.Lib.Helper.LdgZero(t, e.ldgZero), n.push(e.prefix);
                        return n
                    };
                this.show = function(e) {
                    if (this.super.show(e), !e.totalWin) return !1;
                    s && (s.visible = !0, s.alpha = 0, nge.tween.add(s).to({
                        alpha: 1
                    }, 300, nge.Lib.Tween.Easing.Linear.None).start())
                }, this.playStage1 = function() {
                    e.stage !== e.STAGES.AFTER_ODOMETER && e.animData && (a = !0, l(), e.super.playStage1())
                };
                var l = function() {
                        e.stage !== e.STAGES.AFTER_ODOMETER && e.animData && a && (c(), nge.rafSetTimeout((function() {
                            l()
                        }), e.cfg.EMITTER_DELAY))
                    },
                    c = function() {
                        for (var n in e.coinsEmitters) {
                            t.coinsEmitters[n].emitter.emit = !0;
                            break
                        }
                    };
                this.cycleComplete = function() {
                    if (e.super.cycleComplete(), a = !1, s) {
                        s.alpha = 1;
                        var t = nge.tween.add(s).to({
                            alpha: 0
                        }, 300, nge.Lib.Tween.Easing.Linear.None);
                        t.onComplete.addOnce((function() {
                            s.visible = !1
                        })), t.start()
                    }
                }, this.onTransportClose = function() {
                    e.super.onTransportClose(), a = !1
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("bigwintest", (function() {
                        for (var e in t.coinsEmitters) {
                            t.coinsEmitters[e].emitter.emit = !0;
                            break
                        }
                    }))
                }
            }))
        },
        1204: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Tpl = function() {
                for (var e = {
                        styles: {
                            ".portrait .bigWinUniPivotContainer": {
                                minY: 0,
                                y: -960,
                                alignY: "center"
                            },
                            ".album .bigWinUniPivotContainer": {
                                minY: 0,
                                y: 0,
                                alignY: "top"
                            },
                            ".portrait .bigWinContainer": {
                                y: 0
                            },
                            ".album .bigWinContainer": {
                                y: "50%"
                            },
                            ".portrait .bigWinEmitterContainer": {
                                x: 0,
                                y: "20%",
                                alignX: "center",
                                alignY: "top"
                            },
                            ".album .bigWinEmitterContainer": {
                                x: 0,
                                y: 0,
                                alignX: "center",
                                alignY: "center"
                            },
                            ".portrait .bigWinAnimationContainer": {
                                y: 540
                            },
                            ".album .bigWinAnimationContainer": {
                                y: 0
                            }
                        },
                        assets: {
                            name: "assets",
                            contents: []
                        },
                        objects: {
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "bigWinUniPivotContainer",
                                class: "bigWinUniPivotContainer",
                                contents: [{
                                    type: 1,
                                    name: "bigWinEmitterContainer",
                                    class: "bigWinEmitterContainer",
                                    isVisible: !0,
                                    contents: []
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "bigWinInternalContainer",
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
                                        type: mt.objects.GROUP,
                                        name: "bigWinAnimationContainer",
                                        class: "bigWinAnimationContainer",
                                        contents: [{
                                            type: 6,
                                            assetKey: "bigWinAnim",
                                            name: "bigWinAnim",
                                            class: "bigWinAnim",
                                            anchorX: .5,
                                            anchorY: .5,
                                            isVisible: !1
                                        }]
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "bigWinShadowContainer",
                                isVisible: !1,
                                x: 0,
                                y: 0,
                                contents: []
                            }]
                        }
                    }, t = 0; 30 > t; t++) {
                    var n = nge.Lib.Helper.LdgZero(t, 2);
                    e.assets.contents.push({
                        type: mt.assets.IMAGE,
                        block: mt.assets.blocks.STATIC,
                        key: "hole_coin_" + n + ".png",
                        fullPath: nge.appPath + "hole_coin_" + n + ".png"
                    })
                }
                return e
            }
        },
        1205: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher = {}
        },
        1206: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Controller = nge.App.DjGameBase.Com.CurrencySwitcher.Controller.extend((function() {
                this.selectors.creditsSelectors[".creditsMiniTextValue"] = null, this.selectors.creditsSelectors[".creditsMinorTextValue"] = null, this.selectors.creditsSelectors[".creditsMajorTextValue"] = null, this.selectors.creditsSelectors[".creditsMaxiTextValue"] = null, this.selectors.currencySelectors[".miniTextValue"] = null, this.selectors.currencySelectors[".minorTextValue"] = null, this.selectors.currencySelectors[".majorTextValue"] = null, this.selectors.currencySelectors[".maxiTextValue"] = null, this.selectors.currencySelectors[".miniTextValueAmount"] = null, this.selectors.currencySelectors[".minorTextValueAmount"] = null, this.selectors.currencySelectors[".majorTextValueAmount"] = null, this.selectors.currencySelectors[".maxiTextValueAmount"] = null, this.selectors.currencySelectors[".miniTextValueCurrency"] = null, this.selectors.currencySelectors[".minorTextValueCurrency"] = null, this.selectors.currencySelectors[".majorTextValueCurrency"] = null, this.selectors.currencySelectors[".maxiTextValueCurrency"] = null, this.sweepsSelectors.push(".creditsMiniTextValue"), this.sweepsSelectors.push(".creditsMinorTextValue"), this.sweepsSelectors.push(".creditsMajorTextValue"), this.sweepsSelectors.push(".creditsMaxiTextValue")
            }))
        },
        1207: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Mobile = {}
        },
        1208: function(e, t) {
            nge.App[nge.appNS].Com.CurrencySwitcher.Mobile.Controller = nge.App.DjGameBase.Com.CurrencySwitcher.Mobile.Controller.extend((function() {
                this.selectors.creditsSelectors[".creditsMiniTextValue"] = null, this.selectors.creditsSelectors[".creditsMinorTextValue"] = null, this.selectors.creditsSelectors[".creditsMajorTextValue"] = null, this.selectors.creditsSelectors[".creditsMaxiTextValue"] = null, this.selectors.currencySelectors[".miniTextValue"] = null, this.selectors.currencySelectors[".minorTextValue"] = null, this.selectors.currencySelectors[".majorTextValue"] = null, this.selectors.currencySelectors[".maxiTextValue"] = null, this.selectors.currencySelectors[".miniTextValueAmount"] = null, this.selectors.currencySelectors[".minorTextValueAmount"] = null, this.selectors.currencySelectors[".majorTextValueAmount"] = null, this.selectors.currencySelectors[".maxiTextValueAmount"] = null, this.selectors.currencySelectors[".miniTextValueCurrency"] = null, this.selectors.currencySelectors[".minorTextValueCurrency"] = null, this.selectors.currencySelectors[".majorTextValueCurrency"] = null, this.selectors.currencySelectors[".maxiTextValueCurrency"] = null, this.sweepsSelectors.push(".creditsMiniTextValue"), this.sweepsSelectors.push(".creditsMinorTextValue"), this.sweepsSelectors.push(".creditsMajorTextValue"), this.sweepsSelectors.push(".creditsMaxiTextValue")
            }))
        },
        1209: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        1210: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Cfg = nge.App.DjGameBase.Com.Freespin.Cfg.extend((function() {
                this.params.counterNotUpdateOnBonusGameName = "FreeSpins"
            }))
        },
        1211: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.DjGameBase.Com.Freespin.Controller.extend((function() {
                var e = this,
                    t = this,
                    n = null,
                    a = 1,
                    s = [];
                this.create = function() {
                    this.super.create(), n = nge.App.getInstance("Com.SlotMachine.Cfg").get()
                };
                var o = function(e) {
                    e ? nge.observer.fire("slotMachine.setSymbolsBlurKeys", n.symbolsBlurKeysFS) : nge.observer.fire("slotMachine.setSymbolsBlurKeys", n.symbolsBlurKeys), nge.observer.fire("slotMachine.updateBlurs")
                };
                this.freespinStart = function(e) {
                    t.super.freespinStart(e), o(!0)
                }, this.customRestore = function() {
                    nge.observer.fire("freespin.generateGoldReels")
                }, this.finishFreespin = function() {
                    this.super.finishFreespin(), o(!1)
                };
                var i = function() {
                        a = 1
                    },
                    r = function() {
                        a = 2
                    },
                    l = function(e, t, n, a, s, o, i, r, l) {
                        return e = nge.Mlm.Objects.Spine({
                            assetKey: e,
                            name: t,
                            x: n,
                            y: a,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !0
                        }), s = nge.findOne("^" + s), s = nge.objects.create(e, s, !0), o && s.setAnimationByName(0, o, i, r), l && s.onComplete.addOnce((function() {
                            l()
                        })), s
                    },
                    c = function() {
                        s.push(l("m16", "freespinGoldSymbol_0", 140, 130, "freespinGoldSymbolsContainer", "close", !1, !0, (function() {
                            nge.observer.fire("slotMachine.setSymbol", {
                                coords: [0, 0],
                                key: "16"
                            })
                        }))), s.push(l("m16", "freespinGoldSymbol_1", 140, 390, "freespinGoldSymbolsContainer", "close", !1, !0, (function() {
                            nge.observer.fire("slotMachine.setSymbol", {
                                coords: [0, 1],
                                key: "16"
                            })
                        }))), s.push(l("m16", "freespinGoldSymbol_2", 140, 650, "freespinGoldSymbolsContainer", "close", !1, !0, (function() {
                            nge.observer.fire("slotMachine.setSymbol", {
                                coords: [0, 2],
                                key: "16"
                            })
                        }))), nge.observer.fire("slotMachine.holdReel", 0)
                    },
                    p = function() {
                        for (var e = 0; e < s.length; e++) s[e].setAnimationByName(0, "close", !1, !0), s[e].setSpeed(a), e === s.length - 1 && s[e].onComplete.addOnce((function() {
                            nge.observer.fire("freespin.resume", null, 200)
                        }))
                    },
                    m = function() {
                        nge.localData.get("freespin.inProgress") && (nge.observer.fire("freespin.closeGoldReels", null, 500), nge.observer.fire("winlines.stopAnimation"))
                    },
                    u = function() {
                        if (nge.localData.get("freespin.inProgress")) {
                            for (var e = 0; e < s.length; e++) s[e].visible = !1;
                            nge.observer.fire("freespin.pause")
                        }
                    },
                    b = function() {
                        t._pauseMode = !1;
                        for (var e = 0; e < s.length; e++) s[e].stop(), s[e] = nge.Lib.Helper.objectDelete(s[e], !0);
                        s = []
                    };
                this.startFreespinsOnWinlinesComplete = function() {
                    e.freespinsInProgress || nge.rafSetTimeout((function() {
                        var e = nge.localData.get("freespinsCountForStartPopup");
                        nge.observer.fire("popup.show", {
                            popupName: "freespinStartPopup",
                            layerName: "freespinStartPopup",
                            onClick: function() {
                                nge.observer.fire("layersSwitcher.show", "gameFreeSpin"), nge.observer.fire("freespin.generateGoldReels")
                            },
                            freespinsCounter: e
                        }), nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("win.hide")
                    }), 1e3)
                }, this.prepareFreespinsToEnd = function() {
                    if (!0 !== nge.localData.get("pickBonusWon")) {
                        b(), nge.observer.fire("slotMachine.unholdAllReels");
                        var e = nge.localData.get("gameModes"),
                            n = !1;
                        e && -1 !== e.indexOf("SweepStakes") && (n = !0);
                        var a = nge.localData.get("settings.settingsDisplayValuesInCoins") || n || n ? "endPopup" : "endPopupCredits";
                        nge.localData.set("bonusGame.lastResponse", !1), nge.observer.fire("popupFinish.animate.start"), nge.rafSetTimeout((function() {
                            nge.observer.fire("winlines.stopAnimation");
                            var e = nge.localData.get("slotMachine.totalBonusWin") || 0;
                            isNaN(e) && (console.error("Total bonus win is NaN"), e = 0), nge.observer.fire("popup.show", {
                                popupName: a,
                                layerName: "freespinEndPopup",
                                onClick: function() {
                                    nge.observer.fire("freespin.press.endPopupButton")
                                },
                                endPopupValue: t.getTotalBonusWin(e)
                            }, 20)
                        }), 800)
                    }
                }, this.customSubscibe = function() {
                    e.super.customSubscibe(), nge.observer.add("slotMachine.spinStart", i), nge.observer.add("slotMachine.stopCommand", r), nge.observer.add("zenZenCash.slot.goldReels.check", u), nge.observer.add("slot.winProcessingFinish", m), nge.observer.add("freespin.generateGoldReels", c), nge.observer.add("freespin.closeGoldReels", p), nge.observer.add("Transport.close", (function() {
                        b()
                    }))
                }
            }))
        },
        1212: function(e, t) {
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
        1213: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile = {}
        },
        1214: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Controller = nge.App[nge.appNS].Com.Freespin.Controller.extend((function() {}))
        },
        1215: function(e, t) {
            nge.App[nge.appNS].Com.GoldReels = {}
        },
        1216: function(e, t) {
            nge.App[nge.appNS].Com.GoldReels.Controller = nge.Com.Base.extend((function() {
                function e(e, t) {
                    return e.coords[1] > t.coords[1] ? 1 : e.coords[1] < t.coords[1] ? -1 : 0
                }
                var t = this,
                    n = !1,
                    a = null,
                    s = 1,
                    o = 0,
                    i = 0,
                    r = 0,
                    l = 0;
                this.create = function() {
                    this.createDefault(), n || (t.subscribe(), n = !0)
                };
                var c = function() {
                        s = 1, nge.localData.set("goldReels.inProgress", !0)
                    },
                    p = function() {
                        s = 2
                    },
                    m = function(e) {
                        (a = e.lastData).params && a.params.goldReels && 0 < a.params.goldReels.length ? u() : a.spinResultStage2 ? h() : nge.observer.fire("slotMachine.goldSymbol.completed")
                    },
                    u = function() {
                        for (var e = a.params.goldReels, t = i = o = 0; t < e.length; t++) nge.observer.fire("slotMachine.goldSymbol.showFrame", {
                            coords: [+e[t][0], +e[t][1]],
                            speed: s,
                            callback: function() {
                                nge.observer.fire("slotMachine.goldSymbol.showFrameCompleted", null, 1)
                            }
                        }), o++;
                        nge.observer.fire("sounds.gold_reel_frame.play")
                    },
                    b = function() {
                        i++, o === i && y()
                    },
                    g = function(e, t) {
                        for (var n = 0; n < t.length; n++)
                            if (e[0] === t[n][0] && e[1] === t[n][1]) return !0;
                        return !1
                    },
                    y = function() {
                        for (var e = a.spinResult.rows, t = a.params.goldReels, n = [], o = l = r = 0; o < t.length; o++) {
                            var i = t[o];
                            "1" === i[0] ? (!g(["2", i[1]], t) || g(["2", i[1]], t) && !g(["3", i[1]], t)) && n.push({
                                coords: [0, +i[1]],
                                animation: "right_single",
                                symbols: [
                                    [1, +i[1]]
                                ]
                            }) : "2" === i[0] ? g(["1", i[1]], t) ? g(["3", i[1]], t) ? n.push({
                                coords: [0, +i[1]],
                                animation: "right_double",
                                symbols: [
                                    [2, +i[1]],
                                    [1, +i[1]]
                                ]
                            }) : g(["3", i[1]], t) || n.push({
                                coords: [3, +i[1]],
                                animation: "left_single",
                                symbols: [
                                    [2, +i[1]]
                                ]
                            }) : n.push({
                                coords: [1, +i[1]],
                                animation: "right_single",
                                symbols: [
                                    [2, +i[1]]
                                ]
                            }) : "3" === i[0] && (g(["2", i[1]], t) ? n.push({
                                coords: [4, +i[1]],
                                animation: "left_single",
                                symbols: [
                                    [3, +i[1]]
                                ]
                            }) : n.push({
                                coords: [2, +i[1]],
                                animation: "right_single",
                                symbols: [
                                    [3, +i[1]]
                                ]
                            }))
                        }
                        for (t = 0; t < n.length; t++) "16" === e[n[t].coords[1]][n[t].coords[0]] && (nge.observer.fire("slotMachine.goldSymbol.cloning", {
                            coords: n[t].coords,
                            animation: n[t].animation,
                            key: "16",
                            speed: s,
                            symbols: n[t].symbols,
                            callback: function() {
                                nge.observer.fire("slotMachine.goldSymbol.cloningCompleted")
                            }
                        }), r++);
                        nge.observer.fire("sounds.gold_reel_slide.play")
                    },
                    d = function() {
                        ++l === r && h()
                    },
                    h = function() {
                        var t = a.spinResult.rows,
                            n = a.spinResultStage2.rows,
                            o = [];
                        if (a.params && a.params.goldReels)
                            for (var i = 0; i < a.params.goldReels.length; i++) {
                                var r = a.params.goldReels[i];
                                o.push({
                                    coords: [+r[0], +r[1]]
                                })
                            }
                        for (i = 0; i < t.length; i++)
                            for (r = 0; r < t[i].length; r++) "16" === t[i][r] && o.push({
                                coords: [r, i]
                            });
                        if (0 === o.length) nge.observer.fire("slotMachine.goldSymbol.completed");
                        else {
                            for (o.sort(e), t = 0; t < o.length; t++) nge.observer.fire("slotMachine.goldSymbol.replace", {
                                coords: o[t].coords,
                                key: n[o[t].coords[1]][o[t].coords[0]],
                                speed: s,
                                callback: t === o.length - 1 ? function() {
                                    nge.observer.fire("slotMachine.goldSymbol.completed", null, 1)
                                } : null
                            }, 1);
                            nge.observer.fire("gold_reel.play")
                        }
                    },
                    f = function() {
                        nge.localData.set("goldReels.inProgress", !1)
                    };
                this.subscribe = function() {
                    nge.observer.add("zenZenCash.slot.goldReels.check", m), nge.observer.add("slotMachine.goldSymbol.showFrameCompleted", b), nge.observer.add("slotMachine.goldSymbol.cloningCompleted", d), nge.observer.add("slotMachine.spinStart", c), nge.observer.add("slotMachine.stopCommand", p), nge.observer.add("slotMachine.goldSymbol.completed", f), nge.observer.add("Transport.close", (function() {
                        nge.localData.set("goldReels.inProgress", !1)
                    }))
                }
            }))
        },
        1217: function(e, t) {
            nge.App[nge.appNS].Com.Help = {}
        },
        1218: function(e, t) {
            nge.App[nge.appNS].Com.Help.Controller = nge.App.DjGameBase.Com.Help.Controller.extend((function() {
                var e;
                this.create = function() {
                    this.super.create();
                    var t = nge.localData.get("payout.cfg"),
                        n = {},
                        a = t.length,
                        s = 0;
                    e: for (; s < a; s++) {
                        var o = t[s].symbols,
                            i = t[s].payout,
                            r = t[s].matchCount,
                            l = 0,
                            c = o[0];
                        if (0 !== i) {
                            if (0 < r) c = "any_" + o.join("_"), l = r;
                            else {
                                r = o.length;
                                for (var p = 0; p < r; p++) {
                                    if (c !== o[p]) continue e;
                                    l++
                                }
                            }
                            n[c] || (n[c] = {}, n[c].awards = []), n[c].awards.push({
                                name: l,
                                value: i
                            })
                        }
                    }
                    e = n
                }, this.updatePaytableForSymbol = function(t, n, a, s) {
                    n = void 0 === n ? "" : n, a = void 0 === a ? 1 : a;
                    var o = nge.localData.get("bet.value"),
                        i = e[t].awards;
                    if (i && i.length)
                        for (var r = 0; r < i.length; r++) {
                            var l = i[r],
                                c = ".ps" + t + n + "-" + l.name;
                            for (var p in "4" === t ? 3 === l.name ? a = 8 : 4 === l.name ? a = 16 : 5 === l.name && (a = 32) : "5" === t && (3 === l.name ? a = 27 : 4 === l.name ? a = 81 : 5 === l.name && (a = 243)), c = nge.findAll(c, s)) c[p].text = l.value * o * a
                        }
                }
            }))
        },
        1219: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue = {}
        },
        1220: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    triggerVariants: [{
                        symbols: ["0"],
                        reelMask: [!1, !0, !0, !0, !1],
                        minCount: 2
                    }, {
                        symbols: ["1", "2"],
                        reelMask: [!0, !1, !1, !1, !0],
                        minCount: 1
                    }]
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1221: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Controller = nge.App.DjGameBase.Com.Intrigue.Controller.extend((function() {
                function e(e, t, n, a, s, o, i, r) {
                    return e = nge.Mlm.Objects.Spine({
                        assetKey: e,
                        name: t,
                        x: n,
                        y: a,
                        isVisible: !1
                    }), s = nge.findOne("^" + s), s = nge.objects.create(e, s, !0), o && s.setAnimationByName(0, o, i, r), s
                }
                var t = null,
                    n = null;
                this.create = function() {
                    this.super.create(), t = e("spinification", "spinification_animation_3", 1240, 520, "spinificationAboveAnimationContainer"), n = e("spinification", "spinification_animation_4", 1520, 520, "spinificationAboveAnimationContainer")
                };
                var a = function(e) {
                        return function() {
                            var a = 3 === e ? t : n;
                            a.alpha = 0, nge.tween.add(a).to({
                                alpha: 1
                            }, 200, nge.Lib.Tween.Easing.Linear.None).start(), a.setAnimationByName(0, "play", !0)
                        }
                    },
                    s = function(e) {
                        return function() {
                            var a = 3 === e ? t : n,
                                s = nge.tween.add(a).to({
                                    alpha: 0
                                }, 300, nge.Lib.Tween.Easing.Linear.None);
                            s.onComplete.addOnce((function() {
                                a.stop()
                            })), s.start()
                        }
                    };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("slotMachine.reel_3.intrigue.start", a(3)), nge.observer.add("slotMachine.reel_3.animation.stop", s(3)), nge.observer.add("slotMachine.reel_4.intrigue.start", a(4)), nge.observer.add("slotMachine.reel_4.animation.stop", s(4))
                }
            }))
        },
        1222: function(e, t) {
            nge.App[nge.appNS].Com.IntrigueZoomer = {}
        },
        1223: function(e, t) {
            nge.App[nge.appNS].Com.IntrigueZoomer.Cfg = nge.App.DjGameBase.Com.IntrigueZoomer.Cfg.extend((function() {
                this.params = this.super.get(), this.params.zoom = {
                    mults: [1.04, 1.05],
                    durations: [3e3, 3e3]
                }
            }))
        },
        1224: function(e, t) {
            nge.App[nge.appNS].Com.IntrigueZoomer.Controller = nge.App.DjGameBase.Com.IntrigueZoomer.Controller.extend((function() {
                var e = this;
                this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("slotMachine.reel_4.animation.stop", e.stop)
                }
            }))
        },
        1225: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher = {}
        },
        1226: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: "UISpinPanel_Manual_FreespinGame_Container UISpinPanel_Manual_MainGame_Container UIFreespinWinContainer bgAreaContainer bgAreaFreeSpinsContainer offersFreespinCounter offers1Container".split(" "),
                        layers: {
                            intro: {},
                            game: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500
                                },
                                static: ["UISpinPanel_Manual_MainGame_Container", "bgAreaContainer"]
                            },
                            freespinStartPopup: {
                                static: ["UISpinPanel_Manual_MainGame_Container", "bgAreaContainer"]
                            },
                            gameFreeSpin: {
                                static: ["UISpinPanel_Manual_FreespinGame_Container", "bgAreaFreeSpinsContainer"]
                            },
                            freespinEndPopup: {
                                static: ["UISpinPanel_Manual_FreespinGame_Container", "bgAreaFreeSpinsContainer"]
                            },
                            fakeLoaderGameToBonus: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    loaderText: "BONUS GAME"
                                },
                                static: []
                            },
                            gameOfferPopup: {
                                static: ["UISpinPanel_Manual_MainGame_Container", "bgAreaContainer", "offers1Container"]
                            },
                            gameOffer: {
                                static: ["UISpinPanel_Manual_MainGame_Container", "bgAreaContainer", "offersFreespinCounter"]
                            }
                        }
                    },
                    pickBonus: {
                        defaultLayer: "pickBonus",
                        allContainers: [],
                        layers: {
                            intro: {},
                            pickBonus: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    loaderText: "BONUS GAME"
                                },
                                static: []
                            },
                            fakeLoaderBonusToGame: {
                                fakeLoaderOn: {
                                    showDuration: 500
                                },
                                static: []
                            }
                        }
                    },
                    jackpot: {
                        defaultLayer: "jackpot",
                        allContainers: [],
                        layers: {
                            jackpot: {
                                static: []
                            }
                        }
                    }
                }
            }))
        },
        1227: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile = {}
        },
        1228: function(e, t) {
            nge.App[nge.appNS].Com.LayersSwitcher.Mobile.Cfg = nge.Com.LayersSwitcher.Cfg.extend((function() {
                this.scenes = {
                    play: {
                        defaultLayer: "game",
                        allContainers: ["gameFreeSpinMobileContainer", "bgAreaContainer", "bgAreaFreeSpinsContainer", "offers1Container"],
                        layers: {
                            intro: {},
                            game: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500
                                },
                                static: ["bgAreaContainer"]
                            },
                            freespinStartPopup: {
                                static: ["bgAreaContainer"]
                            },
                            gameFreeSpin: {
                                static: ["bgAreaFreeSpinsContainer"]
                            },
                            freespinEndPopup: {
                                static: ["bgAreaFreeSpinsContainer"]
                            },
                            fakeLoaderGameToBonus: {
                                fakeLoaderOn: {
                                    showDuration: 500,
                                    loaderText: "BONUS GAME"
                                },
                                static: []
                            },
                            gameOfferPopup: {
                                static: ["bgAreaContainer", "offers1Container"]
                            },
                            gameOffer: {
                                static: ["bgAreaContainer", "gameFreeSpinMobileContainer"]
                            }
                        }
                    },
                    pickBonus: {
                        defaultLayer: "pickBonus",
                        allContainers: [],
                        layers: {
                            intro: {},
                            pickBonus: {
                                fakeLoaderOff: {
                                    hideDelay: 100,
                                    hideDuration: 500,
                                    loaderText: "BONUS GAME"
                                },
                                static: []
                            },
                            fakeLoaderBonusToGame: {
                                fakeLoaderOn: {
                                    showDuration: 500
                                },
                                static: []
                            }
                        }
                    },
                    jackpot: {
                        defaultLayer: "jackpot",
                        allContainers: [],
                        layers: {
                            jackpot: {
                                static: []
                            }
                        }
                    }
                }
            }))
        },
        1229: function(e, t) {
            nge.App[nge.appNS].Com.Lines = {}
        },
        1230: function(e, t) {
            nge.Com.Lines.Controller = nge.Com.Base.extend((function() {
                var e, t;
                this.create = function() {
                    this.createDefault();
                    var l = nge.localData.get("lines.cfg");
                    return t = 1, l && (t = l[l.length - 1]), nge.localData.set("maxLinesValue", t), n(), e || (nge.observer.add("brain.openGameSuccess", n), nge.observer.add("lines.down", o), nge.observer.add("lines.up", i), nge.observer.add("lines.downNC", a), nge.observer.add("lines.upNC", s), nge.observer.add("lines.set", r), nge.observer.add("lines.update", n)), e = !0
                };
                var n = function() {
                        var e = nge.localData.get("lines.value");
                        if (!e) {
                            e = 1;
                            var t = nge.localData.get("lines.cfg");
                            t && (e = t[t.length - 1])
                        }
                        return r(e, !0), !0
                    },
                    a = function() {
                        o(!0)
                    },
                    s = function() {
                        i(!0)
                    },
                    o = function(e) {
                        var t = nge.localData.get("lines.value"),
                            n = nge.localData.get("lines.cfg");
                        return !!t && (t = n.indexOf(t), n[--t] || (t = e ? 0 : n.length - 1), t = n[t], nge.observer.fire("lines.set", t), !0)
                    },
                    i = function(e) {
                        var t = nge.localData.get("lines.value"),
                            n = nge.localData.get("lines.cfg");
                        return !!t && (t = n.indexOf(t), n[++t] || (t = e ? n.length - 1 : 0), t = n[t], nge.observer.fire("lines.set", t), !0)
                    },
                    r = function(e, t) {
                        for (var n in nge.observer.fire("winlines.hideAll"), t || (nge.observer.fire("lines.change", e), nge.localData.set("winlines.updated", !0)), e = nge.findAll(".linesNumber")) e[n].text = "243", e[n].maxSizeResize("width", 56)
                    }
            }))
        },
        1231: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1232: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.DjGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "img/fonts/";
                this.bitmapFonts.orange_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "orange_font.png",
                    bitmapFont: e + "orange_font.fnt"
                }, this.bitmapFonts.counter_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "counter_font.png",
                    bitmapFont: e + "counter_font.fnt"
                }
            }))
        },
        1233: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable = {}
        },
        1234: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Cfg = nge.App.DjGameBase.Com.MiniPaytable.Cfg.extend((function() {
                this.cfg.tableCoords = [
                    [{
                        x: 246,
                        y: 114
                    }, {
                        x: 246,
                        y: 374
                    }, {
                        x: 246,
                        y: 634
                    }],
                    [{
                        x: 528,
                        y: 114
                    }, {
                        x: 528,
                        y: 374
                    }, {
                        x: 528,
                        y: 634
                    }],
                    [{
                        x: 810,
                        y: 114
                    }, {
                        x: 810,
                        y: 374
                    }, {
                        x: 810,
                        y: 634
                    }],
                    [{
                        x: 1088,
                        y: 114
                    }, {
                        x: 1088,
                        y: 374
                    }, {
                        x: 1088,
                        y: 634
                    }],
                    [{
                        x: 1088,
                        y: 114
                    }, {
                        x: 1088,
                        y: 374
                    }, {
                        x: 1088,
                        y: 634
                    }]
                ], this.cfg.slotMachineWidth = 1400, this.cfg.slotMachineHeight = 780, this.cfg.leftContainer = {
                    name: "miniPaytableLeftContainer",
                    x: 108
                }, this.cfg.rightContainer = {
                    name: "miniPaytableRightContainer",
                    x: 370
                }, this.cfg.symbolSettings = {
                    0: {
                        additional: {
                            x: 55,
                            y: 50,
                            maxWidth: 310,
                            style: {
                                font: "24pt futuraptmedium",
                                fill: 16777215,
                                align: "center"
                            },
                            localizationKey: "MINI_PAYTABLE_SCATTER"
                        }
                    },
                    1: {
                        additional: {
                            x: 55,
                            y: 50,
                            maxWidth: 310,
                            style: {
                                font: "24pt futuraptmedium",
                                fill: 16777215,
                                align: "center"
                            },
                            localizationKey: "MINI_PAYTABLE_JACKPOT"
                        }
                    },
                    2: {
                        additional: {
                            x: 55,
                            y: 50,
                            maxWidth: 310,
                            style: {
                                font: "24pt futuraptmedium",
                                fill: 16777215,
                                align: "center"
                            },
                            localizationKey: "MINI_PAYTABLE_JACKPOT"
                        }
                    },
                    3: {
                        numbers: {
                            offsetX: 0,
                            offsetY: -40,
                            hDist: 45,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 41,
                            offsetY: -40,
                            hDist: 45,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        additional: {
                            x: 55,
                            y: 125,
                            maxWidth: 310,
                            style: {
                                font: "22pt futuraptmedium",
                                fill: 16777215,
                                align: "center"
                            },
                            localizationKey: "MINI_PAYTABLE_WILD"
                        }
                    },
                    4: {
                        numbers: {
                            offsetX: 0,
                            offsetY: -20,
                            hDist: 45,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 41,
                            offsetY: -20,
                            hDist: 45,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        additional: {
                            x: 55,
                            y: 125,
                            maxWidth: 310,
                            style: {
                                font: "22pt futuraptmedium",
                                fill: 16777215,
                                align: "center"
                            },
                            localizationKey: "MINI_PAYTABLE_WILD_X2"
                        }
                    },
                    5: {
                        numbers: {
                            offsetX: 0,
                            offsetY: -20,
                            hDist: 45,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 41,
                            offsetY: -20,
                            hDist: 45,
                            style: {
                                font: "26pt futuraptmedium",
                                fill: 16777215
                            }
                        },
                        additional: {
                            x: 55,
                            y: 125,
                            maxWidth: 310,
                            style: {
                                font: "22pt futuraptmedium",
                                fill: 16777215,
                                align: "center"
                            },
                            localizationKey: "MINI_PAYTABLE_WILD_X3"
                        }
                    },
                    other: {
                        numbers: {
                            offsetX: 0,
                            offsetY: 10,
                            hDist: 49,
                            style: {
                                font: "28pt futuraptmedium",
                                fill: 16696173
                            }
                        },
                        values: {
                            offsetX: 41,
                            offsetY: 10,
                            hDist: 49,
                            style: {
                                font: "28pt futuraptmedium",
                                fill: 16777215
                            }
                        }
                    }
                }
            }))
        },
        1235: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Tpl = function() {
                return {
                    styles: {
                        ".portrait .miniPaytableParentContainer": {
                            isVisible: !1
                        },
                        ".album .miniPaytableParentContainer": {
                            isVisible: !0
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "miniPaytableBg",
                            fullPath: nge.appPath + "img/playarea/miniPaytableBg.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "miniPaytableMainContainer",
                            alignX: "center",
                            x: -960,
                            y: 0,
                            scaleX: 1,
                            scaleY: 1,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "miniPaytableClickableZones",
                                x: 260,
                                y: 120,
                                contents: []
                            }, {
                                type: mt.objects.GROUP,
                                name: "miniPaytablePopupContainer",
                                isVisible: !1,
                                x: 791,
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
                                    type: mt.objects.IMAGE,
                                    name: "miniPaytableBg",
                                    assetKey: "miniPaytableBg",
                                    y: -3
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1236: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.View = nge.App.DjGameBase.Com.MiniPaytable.View.extend((function() {
                var e = this;
                this.show = function(t, n) {
                    var a = nge.localData.get("slotMachine_reelsSymbols");
                    if (!a) throw Error('Can\'t find "slotMachine_reelsSymbols" in localData');
                    e.state.activeMiniPaytable = {
                        reel: t,
                        row: n
                    }, a = a[t][n];
                    var s = e.getSymbolSettings(a),
                        o = s.assetKey ? s.assetKey : a;
                    "16" === a ? e.popupContainer.visible = !1 : (e.generatePayTable(a), e.changePopupContainerPosition(t, n), e.changeSymbolTexture(o, t, n), e.popupContainer.visible = !!(s.numbers || s.values || s.additional || s.bonusGame))
                }
            }))
        },
        1237: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile = {}
        },
        1238: function(e, t) {
            nge.App[nge.appNS].Com.MiniPaytable.Mobile.View = nge.App.DjGameBase.Com.MiniPaytable.Mobile.View.extend((function() {
                var e = this;
                this.show = function(t, n) {
                    var a = nge.localData.get("slotMachine_reelsSymbols");
                    if (!a) throw Error('Can\'t find "slotMachine_reelsSymbols" in localData');
                    e.state.activeMiniPaytable = {
                        reel: t,
                        row: n
                    }, a = a[t][n];
                    var s = e.getSymbolSettings(a),
                        o = s.assetKey ? s.assetKey : a;
                    "16" === a ? e.popupContainer.visible = !1 : (e.generatePayTable(a), e.changePopupContainerPosition(t, n), e.changeSymbolTexture(o, t, n), e.popupContainer.visible = !!(s.numbers || s.values || s.additional || s.bonusGame), e.miniPaytableGlobalCover.visible = !0)
                }
            }))
        },
        1239: function(e, t) {
            nge.App[nge.appNS].Com.Offers = {}
        },
        1240: function(e, t) {
            nge.App[nge.appNS].Com.Offers.Controller = nge.App.DjGameBase.Com.Offers.Controller.extend((function() {
                this.showOffersUI = function() {
                    var e = nge.localData.get("freeGame.currentOffer"),
                        t = parseInt(nge.localData.get("freeGame.amount")),
                        n = nge.localData.get("needShowFreespins");
                    return !(!(e && 0 < t) || n)
                }
            }))
        },
        1241: function(e, t) {
            nge.App[nge.appNS].Com.Offers.Mobile = {}
        },
        1242: function(e, t) {
            nge.App[nge.appNS].Com.Offers.Mobile.Controller = nge.App[nge.appNS].Com.Offers.Controller.extend((function() {
                this.showOffersUI = function() {
                    var e = nge.localData.get("freeGame.currentOffer"),
                        t = parseInt(nge.localData.get("freeGame.amount")),
                        n = nge.localData.get("needShowFreespins");
                    return !(!(e && 0 < t) || n)
                }
            }))
        },
        1243: function(e, t) {
            nge.App[nge.appNS].Com.PickBonus = {}
        },
        1244: function(e, t) {
            nge.App[nge.appNS].Com.PickBonus.Controller = nge.Com.Base.extend((function() {
                var e, t = this,
                    n = null,
                    a = !1,
                    s = !1,
                    o = !1,
                    i = !1,
                    r = null,
                    l = null,
                    c = {
                        30: "mini",
                        31: "minor",
                        32: "major",
                        33: "maxi"
                    },
                    p = 0,
                    m = 0,
                    u = !1;
                this.create = function() {
                    if (this.createDefault(), a || (t.subscribe(), a = !0), n || (n = this.getInstance("View")), n.create(), nge.localData.get("layersSwitcher.fakeLoader.captured")) {
                        var e = nge.objects.create("loadingBarContainer");
                        (e = nge.find("^loadingScreenBlack", e)).attr("sWidth", "100%"), e.attr("sHeight", "100%")
                    }
                    u = !1, m = p = 0, s = nge.Lib.Helper.mobileAndTabletCheck(), -1 !== nge.Lib.Helper.browserDetect().indexOf("Safari") && (i = !0), o = nge.Lib.Device.iPhone, r = nge.findOne("^gameLogicContainer"), l = nge.findOne("^backgroundAnimationPortraitContainer"), k(nge.resolutionsManager.getOrientation())
                };
                var b = function(e) {
                        u || (u = !0, n.disableItemsInput(), nge.observer.fire("pickBonus.sendRequest", e))
                    },
                    g = function() {
                        m++, u || p !== m || ("true" !== e.lastPick ? n.enableItemsInput() : (y(e), nge.rafSetTimeout((function() {
                            h(e)
                        }), 1200)))
                    },
                    y = function(e) {
                        e = e.items;
                        for (var t = 0; t < e.length; t++) n.openCoinItem(+e[t].index, c[e[t].value], !0)
                    },
                    d = function(t) {
                        u = !1, e = t,
                            function(e) {
                                var t = +e.index;
                                e = c[e.value], n.openCoinItem(t, e, !1), n.fly(t, e, nge.resolutionsManager.getOrientation(), (function() {
                                    nge.observer.fire("pickBonus.openItem.completed")
                                }))
                            }(t.bonusItem), p++, nge.observer.fire("sound.pickem_button.play"), "true" !== t.lastPick && n.enableItemsInput()
                    },
                    h = function(e) {
                        nge.localData.set("slotMachine.totalBonusWin", e.params.totalBonusWin), "FreeSpins" === e.state && (nge.localData.set("needShowFreespins", !0), nge.localData.set("freespinsCountAfterPickBonus", e.params.freeSpins));
                        var t = e.params.winAmount,
                            a = nge.localData.get("settings.settingsDisplayValuesInCoins");
                        t = a ? parseFloat(e.params.winAmount).toFixed(2) : nge.Lib.Money.toCoins(t);
                        var s = !1;
                        (e = nge.localData.get("gameModes")) && -1 !== e.indexOf("SweepStakes") && (s = !0), a = a || s ? "endPopup" : "endPopupCredits";
                        var o = function() {
                            n.showFinishAnimation(), n.hideBackgroundAnimation(), nge.observer.fire("sounds.pickem_close.play"), nge.rafSetTimeout((function() {
                                nge.observer.fire("pickBonus.endGame"), nge.observer.fire("layersSwitcher.show", "fakeLoaderBonusToGame", 1)
                            }), 1e3)
                        };
                        0 === nge.Lib.Money.toCoins(t) ? nge.rafSetTimeout((function() {
                            nge.observer.fire("pickBonus.balanceRequest"), o()
                        }), 1e3) : nge.observer.fire("popup.show", {
                            popupName: a,
                            onClick: function() {
                                nge.observer.fire("pickBonus.balanceRequest")
                            },
                            onHide: function() {
                                o()
                            },
                            endPopupValue: t
                        }, 1e3)
                    },
                    f = function(e) {
                        if ("pickBonus" === e) {
                            if (n.disableItemsInput(), n.showStartAnimation(), nge.observer.fire("sounds.pickem_open.play"), e = nge.localData.get("slotMachine.lastResponse.items"))
                                for (var t = 0; t < e.length; t++) {
                                    var a = c[e[t].value];
                                    n.restoreCoinItem(+e[t].index, a), n.showMatchCard(a, !0)
                                }
                            n.enableItemsInput(), n.showBackgroundAnimation()
                        }
                    },
                    _ = function(e) {
                        n.stopAllFlights(), k(e)
                    },
                    k = function(e) {
                        if (s && o && i) {
                            var t = screen.availWidth,
                                n = screen.availHeight;
                            "portrait" === e && 2 > n / t ? (r.scaleX = .9, r.scaleY = .9, l.scaleX = .9, l.scaleY = .9, l.y = 864) : (r.scaleX = 1, r.scaleY = 1, l.scaleX = 1, l.scaleY = 1, l.y = 960)
                        } else l.scaleX = 1, l.scaleY = 1, l.y = 960
                    };
                this.update = function() {
                    n.update()
                }, this.subscribe = function() {
                    nge.observer.add("pickItem.pressCommand", b), nge.observer.add("pickBonus.openItem.completed", g), nge.observer.add("pickBonus.actionResponse", d), nge.observer.add("layersSwitcher.switched", f), nge.observer.add("resolutionsManager.orientation.change", _)
                }
            }))
        },
        1245: function(e, t) {
            nge.App[nge.appNS].Com.PickBonus.Tpl = function() {
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: []
                    }
                }
            }
        },
        1246: function(e, t) {
            nge.App[nge.appNS].Com.PickBonus.View = nge.Com.Base.extend((function() {
                var e = this,
                    t = [10, 30, 150, 1e3];
                this.currencyColor = "#face4e";
                var n = {
                        mini: 0,
                        minor: 1,
                        major: 2,
                        maxi: 3
                    },
                    a = null,
                    s = null,
                    o = null,
                    i = null,
                    r = null,
                    l = null,
                    c = null,
                    p = null,
                    m = [],
                    u = {},
                    b = [],
                    g = [],
                    y = [];
                this.create = function() {
                    a = nge.findOne("^pickBonusMainAlbumAnimation"), s = nge.findOne("^pickBonusMainPortraitAnimation"), o = nge.findOne("^jackpotWinAlbumAnimation"), i = nge.findOne("^jackpotWinPortraitAnimation"), r = nge.findOne("^jackpotIdleAlbumAnimation"), l = nge.findOne("^jackpotIdlePortraitAnimation"), c = nge.findOne("^backgroundAlbumAnimation"), p = nge.findOne("^backgroundPortraitAnimation"), m = [];
                    for (var e = 0; 35 > e; e++) m.push({
                        album: f("album", e),
                        portrait: f("portrait", e),
                        opened: !1
                    });
                    for (u = {
                            mini: k("matchCardMini", 3, 0),
                            minor: k("matchCardMinor", 4, 1),
                            major: k("matchCardMajor", 5, 2),
                            maxi: k("matchCardMaxi", 6, 3)
                        }, y = [], b = [], g = [], e = 0; 35 > e; e++) b.push(nge.findOne("^coin" + e + "static_album")), g.push(nge.findOne("^coin" + e + "static_portrait"))
                };
                var d = function(e, t, n, a, s, o) {
                        return e = nge.Mlm.Objects.Spine({
                            assetKey: e,
                            name: t,
                            x: 0,
                            y: 0,
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1
                        }), n = nge.findOne("^" + n), n = nge.objects.create(e, n, !0), a && n.setAnimationByName(0, a, s, o), n
                    },
                    h = function(e, t) {
                        return e = new nge.Mlm.Objects.Emitter({
                            type: mt.objects.EMITTER,
                            particles: ["pickbonus_emmiter_particle"],
                            assetKey: e,
                            animated: !1,
                            x: 0,
                            y: 0,
                            anchorX: .5,
                            anchorY: .5,
                            blendMode: PIXI.BLEND_MODES.ADD
                        }), nge.objects.create(e, t, !0)
                    },
                    f = function(e, t) {
                        var n = nge.Mlm.Objects.Button({
                                assetKey: "coinItemButton",
                                name: "item" + e + t + "Button",
                                x: 0,
                                y: 0,
                                anchorX: .5,
                                anchorY: .5,
                                pixelPerfectOver: !1,
                                pixelPerfectClick: !1,
                                isVisible: !1,
                                action: 'function(){nge.observer.fire("pickItem.pressCommand",' + t + ");}"
                            }),
                            a = nge.findOne("^buttonsContainer");
                        return n = nge.objects.create(n, a, !0), a = d("coin_pick_bonus", "openAnimation" + e + t, "openAnimationsContainer"), {
                            button: n,
                            idle: e = d("coin_pick_bonus", "idleAnimation" + e + t, "idleAnimationsContainer"),
                            openAnimation: a
                        }
                    },
                    _ = function(n, a, s) {
                        n = new nge.Mlm.Objects.Text({
                            name: n,
                            text: "",
                            style: {
                                font: "28pt futuraptheavy",
                                fill: 16777215
                            },
                            maxWidth: 240,
                            anchorX: .5,
                            anchorY: .5,
                            x: 0,
                            y: 0
                        }), a = nge.findOne("^" + a), a = nge.objects.create(n, a, !0), n = +nge.localData.get("lines.value");
                        var o = +nge.localData.get("bet.value"),
                            i = +nge.localData.get("coins.value"),
                            r = +nge.localData.get("betMultiplier") || 1;
                        return i = n * o * i * r, o = n * o * r, n = nge.localData.get("balance.currency") || "", nge.localData.get("settings.settingsDisplayValuesInCoins") ? (i = (i * t[s]).toFixed(2), s = void 0, i ? (s || (s = " "), (i = i.toString().split("."))[0] = i[0].replace(/\B(?=(\d{3})+(?!\d))/g, s), s = i.join(".")) : s = !1, a.text = s + " " + n, a.clearColors(), a.addColor(e.currencyColor, s.length)) : a.text = Math.round(o * t[s]).toString(), a
                    },
                    k = function(e, t, n) {
                        n = {
                            maxCount: t,
                            counter: 0,
                            opened: 0,
                            itemsAlbum: [],
                            itemsPortrait: [],
                            jackpotAlbum: _(e + "JackpotPortrait", "matchCardContainer", n),
                            jackpotPortrait: _(e + "JackpotPortrait", "matchCardContainer", n)
                        };
                        for (var a = 0; a < t; a++) n.itemsAlbum.push(d("coin_pick_bonus", e + "album" + a, "matchCardContainer")), n.itemsPortrait.push(d("coin_pick_bonus", e + "portrait" + a, "matchCardContainer"));
                        return n
                    };
                this.showStartAnimation = function() {
                    "album" === nge.resolutionsManager.getOrientation() ? (a.setAnimationByMode(0, "bonus_game_start", nge.spine.FREEZE), s.setAnimationByMode(0, "bonus_game_loop", nge.spine.FREEZE)) : (a.setAnimationByMode(0, "bonus_game_loop", nge.spine.FREEZE), s.setAnimationByMode(0, "bonus_game_start", nge.spine.FREEZE));
                    for (var e = function(e, t, n) {
                            e = e.findSprite("coin_" + n).currentSprite, t.button.parent !== e.parent && (e.visible = !1, t.button.scale.y = -t.button.scale.y, e.parent.addChild(t.button), t.button.visible = !0, t.idle.scale.y = -t.idle.scale.y, e.parent.addChild(t.idle), t.idle.visible = !1, t.openAnimation.scale.y = -t.openAnimation.scale.y, e.parent.addChild(t.openAnimation), t.openAnimation.visible = !1)
                        }, t = 0; 35 > t; t++) e(a, m[t].album, t), e(s, m[t].portrait, t);
                    (e = function(e, t, n, a, s) {
                        for (var o = 0; o < a; o++) {
                            var i = e.findSprite("card_" + s + "_" + o).currentSprite;
                            t[o].parent !== i.parent && (i.visible = !1, t[o].scale.y = -t[o].scale.y, i.parent.addChild(t[o]), t[o].visible = !1)
                        }
                        e = e.findSprite(s + "_counter").currentSprite, n.parent !== e.parent && (e.visible = !1, n.scale.y = -n.scale.y, e.parent.addChild(n), n.visible = !0)
                    })(a, u.mini.itemsAlbum, u.mini.jackpotAlbum, u.mini.maxCount, "mini"), e(s, u.mini.itemsPortrait, u.mini.jackpotPortrait, u.mini.maxCount, "mini"), e(a, u.minor.itemsAlbum, u.minor.jackpotAlbum, u.minor.maxCount, "minor"), e(s, u.minor.itemsPortrait, u.minor.jackpotPortrait, u.minor.maxCount, "minor"), e(a, u.major.itemsAlbum, u.major.jackpotAlbum, u.major.maxCount, "major"), e(s, u.major.itemsPortrait, u.major.jackpotPortrait, u.major.maxCount, "major"), e(a, u.maxi.itemsAlbum, u.maxi.jackpotAlbum, u.maxi.maxCount, "maxi"), e(s, u.maxi.itemsPortrait, u.maxi.jackpotPortrait, u.maxi.maxCount, "maxi")
                }, this.showFinishAnimation = function() {
                    r.stop(), l.stop(), "album" === nge.resolutionsManager.getOrientation() ? a.setAnimationByMode(0, "bonus_game_end", nge.spine.NONE) : s.setAnimationByMode(0, "bonus_game_end", nge.spine.NONE)
                }, this.openCoinItem = function(e, t, n) {
                    if (n = void 0 !== n && n, !m[e].opened) {
                        if (m[e].opened = !0, "album" === nge.resolutionsManager.getOrientation()) {
                            m[e].album.openAnimation.visible = !0, m[e].album.openAnimation.setAnimationByMode(0, "magic_coin_change", nge.spine.DESTROY), m[e].portrait.openAnimation.visible = !1, m[e].portrait.button.visible = !1;
                            var a = nge.tween.add(m[e].album.button).to({
                                alpha: 0
                            }, 150, nge.Lib.Tween.Easing.Linear.None);
                            a.onComplete.addOnce((function() {
                                m[e].album.button.visible = !1
                            })), a.start()
                        } else m[e].portrait.openAnimation.visible = !0, m[e].portrait.openAnimation.setAnimationByMode(0, "magic_coin_change", nge.spine.DESTROY), m[e].album.openAnimation.visible = !1, m[e].album.button.visible = !1, (a = nge.tween.add(m[e].portrait.button).to({
                            alpha: 0
                        }, 150, nge.Lib.Tween.Easing.Linear.None)).onComplete.addOnce((function() {
                            m[e].portrait.button.visible = !1
                        })), a.start();
                        u[t].counter++, (u[t].maxCount < u[t].counter || n) && (u[t].counter = u[t].maxCount + 1, t += "_blocked"), nge.rafSetTimeout((function() {
                            m[e].album.idle.visible = !0, m[e].album.idle.setAnimationByMode(0, t, nge.spine.LOOP), m[e].portrait.idle.visible = !0, m[e].portrait.idle.setAnimationByMode(0, t, nge.spine.LOOP)
                        }), 200)
                    }
                }, this.restoreCoinItem = function(e, t) {
                    m[e].opened = !0, m[e].album.button.visible = !1, m[e].portrait.button.visible = !1, "mini" !== t && "minor" !== t && "major" !== t && "maxi" !== t || (u[t].counter++, u[t].maxCount < u[t].counter && (u[t].counter = u[t].maxCount + 1, t += "_blocked")), m[e].album.idle.setAnimationByMode(0, t, nge.spine.LOOP), m[e].portrait.idle.setAnimationByMode(0, t, nge.spine.LOOP)
                }, this.showMatchCard = function(e, t) {
                    t = void 0 !== t && t;
                    var a = u[e].opened;
                    a >= u[e].maxCount || ("album" === nge.resolutionsManager.getOrientation() ? (u[e].itemsAlbum[a].setAnimationByMode(0, "card_" + e + "_in", nge.spine.FREEZE), u[e].itemsPortrait[a].setAnimationByMode(0, "card_" + e + "_loop", nge.spine.FREEZE)) : (u[e].itemsAlbum[a].setAnimationByMode(0, "card_" + e + "_loop", nge.spine.FREEZE), u[e].itemsPortrait[a].setAnimationByMode(0, "card_" + e + "_in", nge.spine.FREEZE)), a < u[e].maxCount && u[e].opened++, a === u[e].maxCount - 1 && (t || ("album" === nge.resolutionsManager.getOrientation() ? o.setAnimationByMode(n[e], e + "_collect", nge.spine.NONE) : i.setAnimationByMode(n[e], e + "_collect", nge.spine.NONE), nge.observer.fire("sound.jackpot_collect.play")), nge.rafSetTimeout((function() {
                        r.setAnimationByMode(n[e], e + "_idle", nge.spine.LOOP), l.setAnimationByMode(n[e], e + "_idle", nge.spine.LOOP)
                    }), t ? 1e3 : 500)))
                };
                this.fly = function(t, n, a, s) {
                    if (u[n].maxCount < u[n].counter) s && s();
                    else {
                        var o = function(e, t, n) {
                                return e = nge.Mlm.Objects.Folder({
                                    name: e,
                                    x: 0,
                                    y: 0,
                                    isVisible: n
                                }), t = nge.findOne("^" + t), nge.objects.create(e, t, !0)
                            }(n + "StaticContainer", "album" === a ? "flyAnimationsAlbumContainer" : "flyAnimationsPortraitContainer", !0),
                            i = function(e, t, n, a) {
                                return e = nge.Mlm.Objects.Image({
                                    assetKey: e,
                                    name: t,
                                    x: 0,
                                    y: 0,
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: a
                                }), nge.objects.create(e, n, !0)
                            }("pickbonus_emitter_flare", n + "StaticImage", o, !0);
                        i.blendMode = PIXI.BLEND_MODES.ADD, t = "album" === a ? {
                            x: b[t].position.x,
                            y: b[t].position.y
                        } : {
                            x: g[t].position.x,
                            y: g[t].position.y
                        }, a = {
                            x: (a = nge.findOne("^" + n + (u[n].counter - 1) + "static_" + a).position).x,
                            y: a.y
                        };
                        var r = {
                                x: t.x < a.x ? t.x + (a.x - t.x) / 2 : t.x > a.x ? a.x + (t.x - a.x) / 2 : a.x,
                                y: t.y < a.y ? t.y - 200 : a.y - 200
                            },
                            l = function(e, t) {
                                return e = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)), Math.pow(1.7 * e, 500 > e ? 1 : 1e3 > e ? .94 : .9)
                            }(t, a),
                            c = nge.Lib.Math.bezier(i, l, t, r, a);
                        c.onComplete.addOnce((function() {
                            y.splice(y.indexOf(c), 1),
                                function(e) {
                                    var t = e.children[0],
                                        n = e.children[1],
                                        a = e.children[2],
                                        s = e.children[3];
                                    t.visible = !1, n.emitter.emit = !1, a.emitter.emit = !1, s.emitter.emit = !1, nge.rafSetTimeout((function() {
                                        e.removeChild(t), nge.Lib.Helper.objectDelete(t, !0), n.destroy(), a.destroy(), s.destroy(), e.parent.removeChild(e), nge.Lib.Helper.objectDelete(e, !0)
                                    }), 1e3)
                                }(o), e.showMatchCard(n), nge.observer.fire("sound.pickem_matchcard.play"), s && s()
                        }));
                        var p = h("emitter_pickbonus_big", o);
                        p.updateTransform(), p.emitter.spawnPos.x = t.x, p.emitter.spawnPos.y = t.y, p.emitter.emit = !0;
                        var m = h("emitter_pickbonus_small", o);
                        m.updateTransform(), m.emitter.spawnPos.x = t.x, m.emitter.spawnPos.y = t.y, m.emitter.emit = !0;
                        var d = h("emitter_pickbonus_glow", o);
                        d.updateTransform(), d.emitter.spawnPos.x = t.x, d.emitter.spawnPos.y = t.y, d.emitter.emit = !0, c.onUpdate.add((function(e) {
                            p.emitter.spawnPos.x = e.x, p.emitter.spawnPos.y = e.y, m.emitter.spawnPos.x = e.x, m.emitter.spawnPos.y = e.y, d.emitter.spawnPos.x = e.x, d.emitter.spawnPos.y = e.y
                        })), c.start(), y.push(c)
                    }
                }, this.stopAllFlights = function() {
                    for (var e = 0; e < y.length; e++) y[e].stop()
                }, this.update = function() {
                    for (var e = 0; e < y.length; e++) y[e].update(PIXI.ticker.shared.elapsedMS)
                }, this.disableItemsInput = function() {
                    m.forEach((function(e) {
                        e.album.button.interactive = !1, e.portrait.button.interactive = !1
                    }))
                }, this.enableItemsInput = function() {
                    m.forEach((function(e) {
                        e.album.button.interactive = !e.opened, e.portrait.button.interactive = !e.opened
                    }))
                }, this.showBackgroundAnimation = function() {
                    c.alpha = 0, nge.tween.add(c).to({
                        alpha: 1
                    }, 1e3, nge.Lib.Tween.Easing.Linear.None).start(), p.alpha = 0, nge.tween.add(p).to({
                        alpha: 1
                    }, 1e3, nge.Lib.Tween.Easing.Linear.None).start(), c.setAnimationByMode(0, "reflection_big_green", nge.spine.LOOP), c.setAnimationByMode(1, "reflection_small_yellow", nge.spine.LOOP), p.setAnimationByMode(0, "reflection_small_yellow", nge.spine.LOOP)
                }, this.hideBackgroundAnimation = function() {
                    nge.tween.add(c).to({
                        alpha: 0
                    }, 800, nge.Lib.Tween.Easing.Linear.None).start(), nge.tween.add(p).to({
                        alpha: 0
                    }, 800, nge.Lib.Tween.Easing.Linear.None).start()
                }
            }))
        },
        1247: function(e, t) {
            nge.App[nge.appNS].Com.PickJackpotPanel = {}
        },
        1248: function(e, t) {
            nge.App[nge.appNS].Com.PickJackpotPanel.Controller = nge.Com.Base.extend((function() {
                var e = this,
                    t = !1,
                    n = [".miniTextValue", ".minorTextValue", ".majorTextValue", ".maxiTextValue"],
                    a = [".miniTextValueAmount", ".minorTextValueAmount", ".majorTextValueAmount", ".maxiTextValueAmount"],
                    s = [".miniTextValueCurrency", ".minorTextValueCurrency", ".majorTextValueCurrency", ".maxiTextValueCurrency"],
                    o = [".creditsMiniTextValue", ".creditsMinorTextValue", ".creditsMajorTextValue", ".creditsMaxiTextValue"],
                    i = [10, 30, 150, 1e3],
                    r = [],
                    l = [],
                    c = [],
                    p = [];
                this.currencyColor = "#face4e", this.create = function() {
                    this.createDefault(), t || (e.subscribe(), t = !0), r = [];
                    for (var i = 0; i < n.length; i++) {
                        var u = nge.findOne(n[i]);
                        u && r.push(u)
                    }
                    for (l = [], i = 0; i < a.length; i++)(u = nge.findOne(a[i])) && l.push(u);
                    for (c = [], i = 0; i < s.length; i++)(u = nge.findOne(s[i])) && c.push(u);
                    for (p = [], i = 0; i < o.length; i++)(u = nge.findOne(o[i])) && p.push(u);
                    m()
                };
                var m = function() {
                        var t = +nge.localData.get("lines.value"),
                            n = +nge.localData.get("bet.value"),
                            a = +nge.localData.get("coins.value"),
                            s = +nge.localData.get("betMultiplier") || 1;
                        for (a = t * n * a * s, t = t * n * s, n = nge.localData.get("balance.currency") || "", s = 0; s < r.length; s++) {
                            var o = (a * i[s]).toFixed(2),
                                m = void 0;
                            o ? (m || (m = " "), (o = o.toString().split("."))[0] = o[0].replace(/\B(?=(\d{3})+(?!\d))/g, m), m = o.join(".")) : m = !1, r[s].text = m + " " + n, r[s].clearColors(), r[s].addColor(e.currencyColor, m.length), l[s].text = m, c[s].text = n
                        }
                        for (a = 0; a < p.length; a++) p[a].text = Math.round(t * i[a]).toString()
                    },
                    u = function() {
                        m()
                    };
                this.subscribe = function() {
                    nge.observer.add("bet.change", u), nge.observer.add("lines.change", u), nge.observer.add("coins.change", u)
                }
            }))
        },
        1249: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1250: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Mobile = {}
        },
        1251: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Mobile.Tpl = function(e) {
                return e || (e = nge.appPath + "img/"), {
                    styles: {
                        ".popupButton": {
                            anchorX: .5,
                            anchorY: .5,
                            btnFrames: {
                                over: 2,
                                out: 1,
                                down: 0
                            },
                            frame: 1
                        },
                        ".portrait .popupContentHolderParent": {
                            scaleX: 1,
                            scaleY: 1,
                            y: "-15%"
                        },
                        ".album .popupContentHolderParent": {
                            scaleX: 1,
                            scaleY: 1,
                            y: 0
                        },
                        ".portrait .popupButtonsContainer": {
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".album .popupButtonsContainer": {
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".portrait .popupOkButton": {
                            y: 320
                        },
                        ".album .popupOkButton": {
                            y: 320
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "popupOkButtonAsset",
                            fullPath: e + "playarea/popupOkButton.png",
                            frameWidth: 224
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "popupInternalContainer",
                            alignY: "center",
                            alignX: "center",
                            isVisible: !1,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "popupContentHolderParent",
                                class: "popupContentHolderParent",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "popupContentHolder",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "popupButtonsContainer",
                                        class: "popupButtonsContainer",
                                        contents: []
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "popupContentContainer",
                                        contents: []
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "popupBackgroundContainer",
                                        contents: []
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "popupShadowContainer",
                                x: "-50.01%",
                                y: "-50.01%",
                                contents: []
                            }]
                        }]
                    }
                }
            }
        },
        1252: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        show: "total_win_start",
                        loop: "total_win_loop",
                        hide: "total_win_end"
                    },
                    t = {
                        font: "44pt futuraptheavy",
                        fill: [16313675, 16313675, 16752652],
                        shadowColor: 3342853,
                        shadowBlur: 10,
                        shadowOffsetY: 7,
                        align: "center"
                    },
                    n = {
                        font: "70pt futuraptheavy",
                        fill: [16776957, 16771010, 16764290],
                        shadowColor: 5505281,
                        shadowBlur: 10,
                        shadowOffsetY: 7,
                        align: "center"
                    },
                    a = {
                        font: "40pt futuraptheavy",
                        fill: [16512017, 16632589, 16752905],
                        shadowColor: 5964289,
                        shadowBlur: 10,
                        shadowOffsetY: 7,
                        align: "center"
                    },
                    s = {
                        color: 2621465,
                        a: .8,
                        showDuration: 300,
                        hideDuration: 250,
                        hideDelay: 250
                    },
                    o = {
                        type: 4,
                        name: "popupOkButton",
                        x: 0,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1,
                        pixelPerfectOver: !1,
                        pixelPerfectClick: !1,
                        class: "popupButton popupOkButton",
                        assetKey: "popupOkButtonAsset"
                    };
                this.cfg.popups = {
                    freespinStartPopup: {
                        shadow: s,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "free_spins_start",
                                loop: "free_spins_loop",
                                hide: "free_spins_end"
                            }
                        },
                        button: o,
                        showButtonWithFade: !0,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: t
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                style: n
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 140,
                                anchorX: .5,
                                anchorY: .35,
                                assetKey: "counter_font"
                            },
                            followSlotName: "counter_free_games",
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_FREE_SPINS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: a
                            },
                            followSlotName: "freeGames"
                        }]
                    },
                    endPopup: {
                        shadow: s,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: e
                        },
                        button: o,
                        showButtonWithFade: !0,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: t
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WON"),
                                anchorX: .5,
                                anchorY: .45,
                                style: n
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 120,
                                anchorX: .5,
                                anchorY: .2,
                                assetKey: "counter_font"
                            },
                            followSlotName: "counter_total_win",
                            dataKey: "endPopupValue"
                        }, {
                            model: {
                                type: 0,
                                isVisible: !1,
                                assetKey: "1px_empty",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "credits"
                        }]
                    },
                    endPopupCredits: {
                        shadow: s,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: e
                        },
                        button: o,
                        showButtonWithFade: !0,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: t
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                style: n
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 120,
                                anchorX: .5,
                                anchorY: .4,
                                assetKey: "counter_font"
                            },
                            followSlotName: "counter_total_win",
                            dataKey: "endPopupValue"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CREDITS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: a
                            },
                            followSlotName: "credits"
                        }]
                    },
                    endPopupNoWin: {
                        shadow: s,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: e
                        },
                        button: o,
                        showButtonWithFade: !0,
                        content: [{
                            model: {
                                type: 0,
                                isVisible: !1,
                                name: "popup_congratulations",
                                assetKey: "1px_empty",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WON"),
                                anchorX: .5,
                                anchorY: .45,
                                style: n
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 120,
                                anchorX: .5,
                                anchorY: .2,
                                assetKey: "counter_font"
                            },
                            followSlotName: "counter_total_win",
                            dataKey: "endPopupValue"
                        }, {
                            model: {
                                type: 0,
                                isVisible: !1,
                                assetKey: "1px_empty",
                                anchorX: .5,
                                anchorY: .5
                            },
                            followSlotName: "credits"
                        }]
                    },
                    pickBonusStartPopup: {
                        shadow: s,
                        background: {
                            type: "spine",
                            assetKey: "popupSpineBackground",
                            animations: {
                                show: "pick_bonus_start",
                                loop: "pick_bonus_loop",
                                hide: "pick_bonus_end"
                            }
                        },
                        button: o,
                        showButtonWithFade: !0,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: t
                            },
                            followSlotName: "congratulations"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                style: n
                            },
                            followSlotName: "you_won"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("popup_ZEN_ZEN_BONUS"),
                                anchorX: .5,
                                anchorY: .5,
                                style: a
                            },
                            followSlotName: "hidden_bonus"
                        }]
                    }
                }
            }))
        },
        1253: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                return e || (e = nge.appPath + "img/"), {
                    styles: {
                        ".popupButton": {
                            anchorX: .5,
                            anchorY: .5,
                            btnFrames: {
                                over: 2,
                                out: 1,
                                down: 0
                            },
                            frame: 1
                        },
                        ".popupOkButton": {
                            y: 320
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "popupOkButtonAsset",
                            frameWidth: 224,
                            fullPath: e + "playarea/popupOkButton.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "popupInternalContainer",
                            alignY: "center",
                            alignX: "center",
                            isVisible: !1,
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "popupContentHolderParent",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "popupContentHolder",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "popupButtonsContainer",
                                        contents: []
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "popupContentContainer",
                                        contents: []
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "popupBackgroundContainer",
                                        contents: []
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "popupShadowContainer",
                                x: "-50.01%",
                                y: "-50.01%",
                                contents: []
                            }]
                        }]
                    }
                }
            }
        },
        1254: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1255: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Cfg = nge.App.DjGameBase.Com.RegularWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.regularProfile = "hideWithDelayFast", this.params.turboProfile = "hideWithDelayFast"
            }))
        },
        1256: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Tpl = function() {
                return {
                    styles: {
                        ".portrait .regularWinPivotContainer": {
                            minY: 0,
                            y: -960,
                            alignY: "center"
                        },
                        ".album .regularWinPivotContainer": {
                            minY: 0,
                            y: 0,
                            alignY: "top"
                        },
                        ".portrait .regularWinContainer": {
                            y: 780
                        },
                        ".album .regularWinContainer": {
                            y: 500
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        contents: [{
                            type: 1,
                            name: "regularWinInternalContainer",
                            class: "regularWinContainer",
                            x: "50%",
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "regularWinCounter",
                                isVisible: !1,
                                x: 0,
                                y: 0,
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
        1257: function(e, t) {
            nge.App[nge.appNS].Com.Shaker = {}
        },
        1258: function(e, t) {
            nge.App[nge.appNS].Com.Shaker.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    intrigue: {
                        time: 3e3,
                        shakingLayers: ["gameScreenContainer", "backgroundContainer", "reelsBgShakeContainer", "slotMachineFramesShakeContainer", "childrenPortraitAnimationContainer"],
                        startEvents: ["slotMachine.reel_3.intrigue.start", "slotMachine.reel_4.intrigue.start"],
                        stopEvents: ["slotMachine.spinComplete"],
                        shakingStrength: 2
                    }
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1259: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar = {}
        },
        1260: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile = {}
        },
        1261: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.BetSettingsView = nge.App.DjGameBase.Com.Sidebar.Mobile.BetSettingsView.extend((function() {
                var e = this,
                    t = this;
                this.init = function() {
                    e.super.init(), t = nge.findOne("^sidebarHTML")
                }, this.showInitialValues = function() {
                    e.initialized || (e.super.showInitialValues(), t.doCustom("updateBetSettingsSliderStyle"))
                }
            }))
        },
        1262: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Cfg = nge.App.DjGameBase.Com.Sidebar.Mobile.Cfg.extend((function() {
                var e = this;
                this.PAYTABLE.winlines.visibility = !1, this.COLORS.rulesItemColoredText = {
                    key: "rules_item_colored_text",
                    color: "#F9C36E"
                }, this.COLORS.paytableItemColoredText = {
                    key: "paytable_item_colored_text",
                    color: "#e9dfbf"
                }, this.getCustomFunctions = function() {
                    var t = e.super.getCustomFunctions();
                    return t.updateAudioSliderStyle = function() {
                        var e = $(".settings_audio_slider"),
                            t = e[0].value;
                        e.css("background", "linear-gradient(to right, #F89A2B 0%, #F89A2B " + t + "%, #2C335E " + t + "%, #2C335E 100%)")
                    }, t.updateBetSettingsSliderStyle = function() {
                        $(".bet_settings_coinValue_slider").css("background", "linear-gradient(to right, #F89A2B 0%, #F89A2B " + Math.round(this.value / this.max * 100) + "%, #2C335E " + Math.round(this.value / this.max * 100) + "%, #2C335E 100%)")
                    }, t
                }, this.paytablePayoutsVariables = [e.getPayoutItem("p0m06Gold", "8", [5, 4, 3]), e.getPayoutItem("p0m04Carp", "6", [5, 4, 3]), e.getPayoutItem("p0m05Lantern", "7", [5, 4, 3]), e.getPayoutItem("p0m07Orange", "9", [5, 4, 3]), e.getPayoutItem("p0m08Ace", "10", [5, 4, 3]), e.getPayoutItem("p0m09King", "11", [5, 4, 3]), e.getPayoutItem("p1m10Queen", "12", [5, 4, 3]), e.getPayoutItem("p1m11Jack", "13", [5, 4, 3]), e.getPayoutItem("p1m12Ten", "14", [5, 4, 3]), e.getPayoutItem("p1m13Nine", "15", [5, 4, 3])], this.paytableFeaturesVariables = [], this.rulesVariables = [{
                    text_left: nge.i18n.get("sidebar_Rules_text1")
                }, {
                    rtp: nge.i18n.get("rtpRules")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_GameFeatures")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_MysteryCloningReels")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_MysteryCloningReels_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Wilds")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Wilds_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_DragonEnvelopes")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_DragonEnvelopes_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_BonusScatter")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_BonusScatter_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_FreeSpinsBonus")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_FreeSpinsBonus_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_PickemBonus")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_PickemBonus_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_WaysPays")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_WaysPays_text1")
                }], this.fillRulesVariables = function() {
                    var t, n = [],
                        a = nge.localData.get("rtp");
                    for (t in e.rulesVariables) {
                        var s = e.rulesVariables[t],
                            o = {};
                        s.hasOwnProperty("rtp") && void 0 !== a && 0 < +a ? o.rules_Item_text_left = nge.Lib.Helper.strReplace("%rtpValue%", a + "%", s.rtp) + "<br><br>" : (o.rules_Item_title = !!s.hasOwnProperty("title") && s.title, o.rules_Item_image = !!s.hasOwnProperty("image") && "image:" + s.image, o.rules_Item_text_justify = !!s.hasOwnProperty("text_justify") && s.text_justify, o.rules_Item_text_center = !!s.hasOwnProperty("text_center") && s.text_center, o.rules_Item_text_left = !!s.hasOwnProperty("text_left") && s.text_left, o.rules_Item_divider = !!s.hasOwnProperty("divider") && "image:" + s.divider), n.push(o)
                    }
                    return n
                }, this.keypadGuideVariables = {
                    Main: {
                        title: nge.i18n.get("kg_Main_game"),
                        type: "big",
                        items: [
                            ["spinKG", nge.i18n.get("kg_Spin_Button"), nge.i18n.get("kg_Spin_Button_description")],
                            ["stopKG", nge.i18n.get("kg_Stop_Button"), nge.i18n.get("kg_Stop_Button_description")],
                            ["turboKG", nge.i18n.get("kg_Turbo_Mode"), nge.i18n.get("kg_Turbo_Mode_description")],
                            ["autoKG", nge.i18n.get("kg_Autoplay"), nge.i18n.get("kg_Autoplay_description")],
                            ["totalBetKG", nge.i18n.get("kg_Total_Bet"), nge.i18n.get("kg_Total_Bet_description")],
                            ["soundKG", nge.i18n.get("kg_Sound"), nge.i18n.get("kg_Sound_description")],
                            ["menuKG", nge.i18n.get("kg_Menu"), nge.i18n.get("kg_Menu_description")]
                        ]
                    },
                    GameSettings: {
                        title: nge.i18n.get("kg_GameSettings"),
                        type: "small",
                        items: [
                            ["betSettingsKG", nge.i18n.get("kg_Bet_Settings"), nge.i18n.get("kg_Bet_Settings_description")],
                            ["rulesKG", nge.i18n.get("kg_Rules"), nge.i18n.get("kg_Rules_description")],
                            ["paytableKG", nge.i18n.get("kg_Paytable"), nge.i18n.get("kg_Paytable_description")],
                            ["settingsKG", nge.i18n.get("kg_Settings"), nge.i18n.get("kg_Settings_description")],
                            ["backKG", nge.i18n.get("kg_Back"), nge.i18n.get("kg_Back_description")],
                            ["closeKG", nge.i18n.get("kg_Close"), nge.i18n.get("kg_Close_description")]
                        ]
                    }
                }, this.fillKeypadGuideVariablesBig = function() {
                    var t, n = [],
                        a = {};
                    for (t in e.keypadGuideVariables) {
                        var s = e.keypadGuideVariables[t];
                        "big" === s.type && (a.$jscomp$loop$prop$item$19 = {
                            keypadGuideBig_SectionTitle_text: s.title,
                            keypadGuideBig_SectionItems: []
                        }, e.keypadGuideVariables[t].items.forEach(function(e) {
                            return function(t) {
                                e.$jscomp$loop$prop$item$19.keypadGuideBig_SectionItems.push({
                                    keypadGuideBig_SectionItemTexture_image: "image:" + t[0],
                                    keypadGuideBig_SectionItemTitle_text: t[1],
                                    keypadGuideBig_SectionItemDescription_text: t[2]
                                })
                            }
                        }(a)), n.push(a.$jscomp$loop$prop$item$19)), a = {
                            $jscomp$loop$prop$item$19: a.$jscomp$loop$prop$item$19
                        }
                    }
                    return n
                }, this.fillKeypadGuideVariablesSmall = function() {
                    var t = [],
                        n = {};
                    for (s in e.keypadGuideVariables) {
                        var a = e.keypadGuideVariables[s];
                        "small" === a.type && (n.$jscomp$loop$prop$item$21 = {
                            keypadGuideSmall_SectionTitle_text: a.title,
                            keypadGuideSmall_SectionItems: []
                        }, e.keypadGuideVariables[s].items.forEach(function(e) {
                            return function(t) {
                                e.$jscomp$loop$prop$item$21.keypadGuideSmall_SectionItems.push({
                                    keypadGuideSmall_SectionItemTexture_image: "image:" + t[0],
                                    keypadGuideSmall_SectionItemTitle_text: t[1],
                                    keypadGuideSmall_SectionItemDescription_text: t[2]
                                })
                            }
                        }(n)), t.push(n.$jscomp$loop$prop$item$21)), n = {
                            $jscomp$loop$prop$item$21: n.$jscomp$loop$prop$item$21
                        }
                    }
                    var s = !1;
                    return (n = nge.localData.get("gameModes")) && -1 !== n.indexOf("SweepStakes") && (s = !0, t[t.length - 1].keypadGuideSmall_SectionItems.push({
                        keypadGuideSmall_SectionItemTexture_image: "image:cashKG",
                        keypadGuideSmall_SectionItemTitle_text: nge.i18n.get("kg_Buy_Time"),
                        keypadGuideSmall_SectionItemDescription_text: nge.i18n.get("kg_Buy_Time_description")
                    })), "undefined" != typeof customButtons && customButtons.customBtn01 && t[t.length - 1].keypadGuideSmall_SectionItems.push({
                        keypadGuideSmall_SectionItemTexture_image: "image:homeKG",
                        keypadGuideSmall_SectionItemTitle_text: nge.i18n.get("kg_Home"),
                        keypadGuideSmall_SectionItemDescription_text: nge.i18n.get("kg_Home_description")
                    }), "undefined" != typeof customButtons && customButtons.customBtn02 && !s && t[t.length - 1].keypadGuideSmall_SectionItems.push({
                        keypadGuideSmall_SectionItemTexture_image: "image:cashKG",
                        keypadGuideSmall_SectionItemTitle_text: nge.i18n.get("kg_Cash"),
                        keypadGuideSmall_SectionItemDescription_text: nge.i18n.get("kg_Cash_description")
                    }), t
                }, this.paytableRulesPart1Variables = [{
                    divider: "divider"
                }, {
                    title: nge.i18n.get("sidebar_Paytable_MysteryCloningReels")
                }, {
                    imageTwice_Mystery_first: "mysteryCloningReel",
                    imageTwice_Mystery_second: "mysteryCloningReel_screen"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_MysteryCloningReels_text1")
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_MysteryCloningReels_text2")
                }, {
                    imageSmall: "scatter_envelope_mobile"
                }, {
                    divider: "divider"
                }, {
                    title: nge.i18n.get("sidebar_Paytable_Wilds")
                }], this.paytableRulesPart2Variables = [{
                    text_center: nge.i18n.get("sidebar_Paytable_Wilds_text1")
                }, {
                    imageSmall: "scatter_envelope_mobile"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_Wilds_text2")
                }, {
                    divider: "divider"
                }, {
                    title: nge.i18n.get("sidebar_Paytable_BonusScatters")
                }, {
                    imageSmall: "envelope_mobile"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_BonusScatters_text1")
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_BonusScatters_text2")
                }, {
                    imageSmall: "scattersMobile"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_BonusScatters_text3")
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_BonusScatters_text4")
                }, {
                    divider: "divider"
                }, {
                    title: nge.i18n.get("sidebar_Paytable_FreeSpinsBonus")
                }, {
                    imageBig: "freeSpisBonus_screen"
                }, {
                    imageSmall: "scattersMobile"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_FreeSpinsBonus_text1")
                }, {
                    divider: "divider"
                }, {
                    title: nge.i18n.get("sidebar_Paytable_PickemBonus")
                }, {
                    imageTwice_Pickem_first: "pickemMobile",
                    imageTwice_Pickem_second: "pickemBonus_screen"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_PickemBonus_text1")
                }, {
                    divider: "divider"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_PickemBonus_text2")
                }, {
                    imageSmall: "rules_lines"
                }, {
                    text_center: nge.i18n.get("sidebar_Paytable_PickemBonus_text3")
                }, {
                    rtp: nge.i18n.get("rtpRules")
                }], this.fillPaytableRulesVariables = function(e) {
                    var t, n = [],
                        a = nge.localData.get("rtp");
                    for (t in e) {
                        var s = e[t],
                            o = {};
                        s.hasOwnProperty("rtp") && void 0 !== a && 0 < +a ? o.paytableRules_Item_text_center = nge.Lib.Helper.strReplace("%rtpValue%", a + "%", s.rtp) + "<br><br>" : (o.paytableRules_Item_title = !!s.hasOwnProperty("title") && s.title, o.paytableRules_Item_imageBig = !!s.hasOwnProperty("imageBig") && "image:" + s.imageBig, o.paytableRules_Item_imageSmall = !!s.hasOwnProperty("imageSmall") && "image:" + s.imageSmall, s.hasOwnProperty("imageTwice_Mystery_first") && s.hasOwnProperty("imageTwice_Mystery_second") ? o.paytableRules_Item_imageTwice_Mystery = [{
                            paytableRules_Item_imageTwice_Mystery_first: "image:" + s.imageTwice_Mystery_first,
                            paytableRules_Item_imageTwice_Mystery_second: "image:" + s.imageTwice_Mystery_second
                        }] : o.paytableRules_Item_imageTwice_Mystery = !1, s.hasOwnProperty("imageTwice_Pickem_first") && s.hasOwnProperty("imageTwice_Pickem_second") ? o.paytableRules_Item_imageTwice_Pickem = [{
                            paytableRules_Item_imageTwice_Pickem_first: "image:" + s.imageTwice_Pickem_first,
                            paytableRules_Item_imageTwice_Pickem_second: "image:" + s.imageTwice_Pickem_second
                        }] : o.paytableRules_Item_imageTwice_Pickem = !1, s.hasOwnProperty("imageArrow") ? o.paytableRules_Item_imageText = [{
                            paytableRules_Item_imageText_image: "image:" + s.imageArrow,
                            paytableRules_Item_imageText_text: s.text
                        }] : o.paytableRules_Item_imageText = !1, o.paytableRules_Item_text_justify = !!s.hasOwnProperty("text_justify") && s.text_justify, o.paytableRules_Item_text_center = !!s.hasOwnProperty("text_center") && s.text_center, o.paytableRules_Item_text_left = !!s.hasOwnProperty("text_left") && s.text_left, o.paytableRules_Item_divider = !!s.hasOwnProperty("divider") && "image:" + s.divider), n.push(o)
                    }
                    return n
                }, this.fillPaytableRulesWildPayout = function() {
                    var e = [],
                        t = {
                            paytable_PayoutsWild_image: "image:wild",
                            paytable_PayoutsWild_payout: []
                        };
                    return t.paytable_PayoutsWild_payout.push({
                        paytable_Payouts_symbols: "5",
                        paytable_Payouts_class: "ps3-5"
                    }, {
                        paytable_Payouts_symbols: "4",
                        paytable_Payouts_class: "ps3-4"
                    }, {
                        paytable_Payouts_symbols: "3",
                        paytable_Payouts_class: "ps3-5"
                    }), t.paytable_PayoutsWildX2_image = "image:wild2x", t.paytable_PayoutsWildX2_payout = [], t.paytable_PayoutsWildX2_payout.push({
                        paytable_Payouts_symbols: "5",
                        paytable_Payouts_class: "ps4-5"
                    }, {
                        paytable_Payouts_symbols: "4",
                        paytable_Payouts_class: "ps4-4"
                    }, {
                        paytable_Payouts_symbols: "3",
                        paytable_Payouts_class: "ps4-5"
                    }), t.paytable_PayoutsWildX3_image = "image:wild2x", t.paytable_PayoutsWildX3_payout = [], t.paytable_PayoutsWildX3_payout.push({
                        paytable_Payouts_symbols: "5",
                        paytable_Payouts_class: "ps5-5"
                    }, {
                        paytable_Payouts_symbols: "4",
                        paytable_Payouts_class: "ps5-4"
                    }, {
                        paytable_Payouts_symbols: "3",
                        paytable_Payouts_class: "ps5-5"
                    }), e.push(t), e
                }, this.playGuideRulesVariables = [{
                    text_left: nge.i18n.get("sidebar_Rules_HowPlay")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_HowPlay_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Bet")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Bet_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Spin")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Spin_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Win")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Win_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Paytable")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Paytable_text1")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Autoplay")
                }, {
                    text_left: nge.i18n.get("sidebar_Rules_Autoplay_text1")
                }], this.fillPlayGuideRulesVariables = function() {
                    var t, n = [];
                    for (t in e.playGuideRulesVariables) {
                        var a = e.playGuideRulesVariables[t],
                            s = {};
                        s.playGuideRules_Item_text_left = !!a.hasOwnProperty("text_left") && a.text_left, n.push(s)
                    }
                    return n
                }, this.getVariables = function() {
                    var t = e.super.getVariables();
                    return t.settings_Visual_title_text = nge.i18n.get("Visual"), t.settings_ValuesInCoins_text = nge.i18n.get("sidebar_DISPLAY"), t.settings_SpaceToSpin_text = nge.i18n.get("sidebar_PRESS_SPACE"), t.settings_SplashScreen_text = nge.i18n.get("sidebar_SHOW"), t.settings_TurboMode_text = nge.i18n.get("sidebar_TURBO"), t.keypadGuideBig = e.fillKeypadGuideVariablesBig(), t.keypadGuideSmall = e.fillKeypadGuideVariablesSmall(), t.paytableRulesPart1 = e.fillPaytableRulesVariables(e.paytableRulesPart1Variables), t.paytableRules_Item_wildPayout = e.fillPaytableRulesWildPayout(), t.paytableRulesPart2 = e.fillPaytableRulesVariables(e.paytableRulesPart2Variables), t.playGuideRules = e.fillPlayGuideRulesVariables(), t
                }, this.fillPaytableHtmlBlocks = function(t) {
                    e.pushPaytableHtmlBlock(t, "3", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "4", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "5", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "8", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "6", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "7", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "9", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "10", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "11", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "12", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "13", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "14", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "15", [5, 4, 3])
                }
            }))
        },
        1263: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.PaytableView = nge.App.DjGameBase.Com.Sidebar.Mobile.PaytableView.extend((function() {
                var e = this;
                this.updatePaytableForSymbol = function(t, n, a, s) {
                    n = void 0 === n ? "" : n, a = void 0 === a ? 1 : a, s = nge.localData.get("bet.value");
                    var o = e.convertedPayout[t].awards;
                    if (o && o.length)
                        for (var i = 0; i < o.length; i++) {
                            var r = o[i],
                                l = "ps" + t + n + "-" + r.name;
                            "4" === t ? 3 === r.name ? a = 8 : 4 === r.name ? a = 16 : 5 === r.name && (a = 32) : "5" === t && (3 === r.name ? a = 27 : 4 === r.name ? a = 81 : 5 === r.name && (a = 243)), e.changePayoutItemValue(l, r.value * s * a)
                        }
                }
            }))
        },
        1264: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.SettingsView = nge.App.DjGameBase.Com.Sidebar.Mobile.SettingsView.extend((function() {
                var e = this,
                    t = this;
                this.init = function() {
                    e.super.init(), t = nge.findOne("^sidebarHTML")
                }, this.showInitialValues = function() {
                    e.initialized || (e.super.showInitialValues(), t.doCustom("updateAudioSliderStyle"))
                }
            }))
        },
        1265: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Tpl = function() {
                var e = nge.appPath + "img/",
                    t = nge.App.getInstance("Com.Sidebar.Cfg").get();
                return {
                    styles: {
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
                            type: mt.assets.HTML,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebar_html",
                            fullPath: nge.appPath + "tpl/html/sidebarHtml.html"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarBetSettingsBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarBetSettingsBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarCashBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarCashBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarHistoryBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarHistoryBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarHomeBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarHomeBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarKeypadBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarKeypadBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarBackBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarBackBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarRulesBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarRulesBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarPaytableBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarPaytableBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarSettingsBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarSettingsBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarCloseBtn",
                            fullPath: e + "uiVertical/menuButtons/sidebarCloseBtn.png",
                            frameWidth: 144
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "totalBetKG",
                            fullPath: e + "uiVertical/keypadGuide/totalBet_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "spinKG",
                            fullPath: e + "uiVertical/keypadGuide/spin_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "stopKG",
                            fullPath: e + "uiVertical/keypadGuide/stop_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "turboKG",
                            fullPath: e + "uiVertical/keypadGuide/turbo_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "autoKG",
                            fullPath: e + "uiVertical/keypadGuide/auto_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "soundKG",
                            fullPath: e + "uiVertical/keypadGuide/sound_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "menuKG",
                            fullPath: e + "uiVertical/keypadGuide/menu_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "historyKG",
                            fullPath: e + "uiVertical/keypadGuide/history_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "backKG",
                            fullPath: e + "uiVertical/keypadGuide/back_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "betSettingsKG",
                            fullPath: e + "uiVertical/keypadGuide/betSettings_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "cashKG",
                            fullPath: e + "uiVertical/keypadGuide/cash_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "homeKG",
                            fullPath: e + "uiVertical/keypadGuide/home_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "closeKG",
                            fullPath: e + "uiVertical/keypadGuide/close_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "keypadKG",
                            fullPath: e + "uiVertical/keypadGuide/keypad_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "paytableKG",
                            fullPath: e + "uiVertical/keypadGuide/paytable_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "rulesKG",
                            fullPath: e + "uiVertical/keypadGuide/rules_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "settingsKG",
                            fullPath: e + "uiVertical/keypadGuide/settings_kg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarLogoNetgame",
                            fullPath: e + "uiVertical/sidebarLogoNetgame.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "sidebarLogoMaskNetgame",
                            fullPath: e + "uiVertical/sidebarLogoMaskNetgame.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.HTML,
                            name: "sidebarHTML",
                            class: "sidebarHTML",
                            id: "sidebarHTML",
                            assetKey: "sidebar_html",
                            z: 6,
                            isVisible: !1,
                            variables: t.html.variables,
                            actions: t.html.actions,
                            statesConfig: t.html.statesConfig,
                            inputs: t.html.inputs,
                            htmlBlocks: t.html.htmlBlocks,
                            customFunctions: t.html.customFunctions
                        }]
                    }
                }
            }
        },
        1266: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler = {}
        },
        1267: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler.Controller = nge.App.DjGameBase.Com.SpaceHandler.Controller.extend((function() {
                var e = this;
                this.extendDo = function() {
                    var t = e.super.extendDo();
                    return !(t || !nge.localData.get("zenZenCash.spaceHandler.isBlocked")) || t
                }
            }))
        },
        1268: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1269: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.BlursManager = Class.extend((function() {
                var e, t, n, a = !1,
                    s = {
                        "16_blur": [2, 3, 4, 5]
                    },
                    o = [
                        ["16_blur"],
                        ["16_blur"],
                        ["16_blur"],
                        ["16_blur"],
                        ["16_blur"]
                    ],
                    i = [
                        ["16_blur"],
                        ["16_blur"],
                        ["16_blur"],
                        ["16_blur"],
                        ["16_blur"]
                    ];
                this.init = function(a) {
                    e = a._service, t = e._view, n = e._cfg
                }, this.onSpinStart = function() {
                    a = !1
                }, this.onStopCommand = function() {
                    a = !0
                }, this.onRecyclerViewUpdateReelsCfg = function(e) {
                    var c = n.symbolsBlurKeys,
                        p = o;
                    nge.localData.get("freespin.inProgress") && (c = n.symbolsBlurKeysFS, p = i);
                    for (var m = 0; 5 > m; m++) {
                        nge.Lib.Helper.jsObjClone(e.cfg[m]);
                        var u = e.curCounters[m],
                            b = t.getReels()[m],
                            g = b.getBlurs(),
                            y = b.getCurrentBlur();
                        if (a) g = l(g, u, c[m]);
                        else {
                            for (var d = y, h = u, f = 0; f < h && f + d < g.length; f++) g[f] = g[f + d];
                            for (g = l(g, u, c[m]), d = p[m], f = y, y = 0; 10 > y && g.length > f + 50; y++) {
                                h = d[nge.Lib.Random.generate_range(0, d.length - 1)];
                                var _ = s[h];
                                f = nge.Lib.Random.generate_range(f, f + 40);
                                var k = 0;
                                _ = _[nge.Lib.Random.generate_range(0, _.length - 1)];
                                for (var A = f; A < g.length && k < _; A++) g[A] = h, k++;
                                f += k
                            }
                        }
                        for (d = p[m], y = u; y < g.length - 1; y++)
                            for (h = 0; h < d.length; h++)
                                if (f = d[h], k = d[h].replace("_blur", ""), (g[y] === k || g[y] === f) && g[y + 1] !== k && g[y + 1] !== f)
                                    for (g[y + 1] = f, y++;
                                        (g[y] === k || g[y] === f) && y < g.length - 1;) y++;
                        g = r(g, u - 1), g = r(g, u), b.setBlurs(g)
                    }
                };
                var r = function(e, t) {
                        return 0 > t || (e[t] = e[t].replace("_blur", "")), e
                    },
                    l = function(e, t, n) {
                        for (; t < e.length; t++) e[t] = n[nge.Lib.Random.generate_range(0, n.length - 1)];
                        return e
                    }
            }))
        },
        1270: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                this.params.additionalBlurs = !1, this.params.mw = 5, this.params.mh = 3, this.params.wildSymbol = "0", this.params.tintDark = 11961238, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = .92, this.params.tintNormalAlpha = 1, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tweenDuration.blur = 85, this.params.th = [3, 3, 3, 3, 3], this.params.tweenDuration.oldSymbols = 138, this.params.tweenDuration.newSymbols = 138, this.params.symbolsBlurKeys = ["1_blur 6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "0_blur 6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "0_blur 6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "0_blur 6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "2_blur 6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" ")], this.params.symbolsBlurKeysFS = ["6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" "), "6_blur 7_blur 8_blur 9_blur 10_blur 11_blur 12_blur 13_blur 14_blur 15_blur".split(" ")], this.params.maskName = "slotMachineMaskContainer", this.params.symbolAnimationContainerName = "slotMachineWinAnimationContainer", this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounterBase = [8, 12, 16, 20, 24], this.params.recyclerView.reelsStopCounterBonus = [8, 12, 16, 20, 24], this.params.recyclerView.reelsStopCounter = [8, 12, 16, 20, 24], this.params.recyclerView.reelsSpeed = [1.5, 1.5, 1.5, 1.5, 1.5], this.params.recyclerView.reelsSpeedUpSpeed = 5, this.params.recyclerView.reelsIntrigueSpeed = 2, this.params.recyclerView.hideBorderSymbols = !1, this.params.recyclerView.borderSymbolsCount = 1, this.params.recyclerView.reelBlursSize = 600, this.params.recyclerView.reelsMinStopCounter = 2, this.params.useSMJumpOnFreespins = !0, this.params.symbolsLanding = [{
                    symbol: "0",
                    assetKey: "m00",
                    animationName: "landing"
                }]
            }))
        },
        1271: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                function e(e) {
                    i._service._view.goldSymbolShowFrame(e)
                }

                function t(e) {
                    i._service._view.goldSymbolCloning(e)
                }

                function n(e) {
                    i._service._view.goldSymbolReplace(e)
                }
                var a, s, o, i = this;
                this.create = function() {
                    this.super.create(), (a = this.getInstance("BlursManager")).init(i), s = this.getInstance("Cfg").get(), o = void 0 === s.tintSpeed ? 350 : s.tintSpeed
                };
                var r = function() {
                        a.onSpinStart()
                    },
                    l = function() {
                        a.onStopCommand()
                    },
                    c = function(e) {
                        a.onRecyclerViewUpdateReelsCfg(e)
                    },
                    p = function() {
                        for (var e = 0; 5 > e; e++) {
                            var t = i._service._view.getSymbolByPosition({
                                reel: e,
                                row: 3
                            });
                            t && t.changeTint(s.tintDark, s.tintDarkAlpha, o, null, null, !0), (t = i._service._view.getSymbolByPosition({
                                reel: e,
                                row: -1
                            })) && t.changeTint(s.tintDark, s.tintDarkAlpha, o, null, null, !0)
                        }
                    },
                    m = function() {
                        nge.rafSetTimeout((function() {
                            for (var e = 0; 5 > e; e++) {
                                var t = i._service._view.getSymbolByPosition({
                                    reel: e,
                                    row: 3
                                });
                                t && t.changeTint(s.tintNormal, s.tintNormalAlpha, o, null, null, !1), (t = i._service._view.getSymbolByPosition({
                                    reel: e,
                                    row: -1
                                })) && t.changeTint(s.tintNormal, s.tintNormalAlpha, o, null, null, !1)
                            }
                        }), 1)
                    };
                this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("slotMachine.goldSymbol.showFrame", e), nge.observer.add("slotMachine.goldSymbol.cloning", t), nge.observer.add("slotMachine.goldSymbol.replace", n), nge.observer.add("zenZenCash.slotMachine.blursManager.updateReelsCfg", c), nge.observer.add("slotMachine.spinStart", r), nge.observer.add("slotMachine.stopCommand", l), nge.observer.add("winlines.animateAll", p), nge.observer.add("slotmachine.tint.dark", p), nge.observer.add("slotMachine.spinStart", m)
                }
            }))
        },
        1272: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.DjGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                var e = this,
                    t = this,
                    n = 0;
                this.reelSpins = function(t) {
                    e.super.reelSpins(void 0 === t ? "forward" : t), n = 0
                }, this.getIntrigueStopCounters = function() {
                    var n = Array(e._reels.length).fill(0),
                        a = nge.localData.get("slotMachineIntrigue");
                    if (!a || !a.status) return t.super.getIntrigueStopCounters();
                    a.endsFrom = a.endsFrom ? a.endsFrom : 1 / 0;
                    var s = [0, 0, 0, 0, 0];
                    3 === a.startsFrom && (4 === a.endsFrom && (s = [0, 0, 0, 40, 30]), 5 === a.endsFrom && (s = [0, 0, 0, 40, 40])), 4 === a.startsFrom && (s = [0, 0, 0, 0, 40]);
                    for (var o = 0; o < n.length; o++)
                        if (o >= a.startsFrom && o < a.endsFrom)
                            for (var i = o; i < n.length; i++) n[i] += s[i];
                    if (nge.localData.get("settings.turboMode"))
                        for (a = 0; a < n.length; a++) n[a] = Math.round(n[a] / 2);
                    return n
                }, this._checkIntrigue = function(t) {
                    var n = nge.localData.get("slotMachineIntrigue");
                    if (n && n.status) {
                        var a = t + 1;
                        if (!e._speedUp && a !== e._reels.length) {
                            var s = n.startsFrom;
                            n = n.endsFrom || e._reels.length;
                            for (var o = 0; o < e._reels.length; o++) e._reels[o].setSpeed();
                            a >= s && a < n && e._reels[t + 1].setSpeed(e._cfg.recyclerView.reelsIntrigueSpeed)
                        }
                    }
                }, this._onReelStop = function(e) {
                    this.super._onReelStop(e), e = e.getIndex();
                    for (var n = nge.localData.get("slotMachine.spinResult.columns"), a = 0; a < n[0].length; a++) "1" === n[0][a] && (0 === e ? t.showJackpotSpinificationAnimation({
                        reel: 0,
                        row: a
                    }) : 4 === e && t.stopJackpotSpinificationAnimation({
                        reel: 0,
                        row: a
                    }))
                }, this.isPassAdditionalLandingRule = function(e, t) {
                    return t = !1, (1 === e || 2 === e && 1 <= n || 3 === e && 2 <= n) && (t = !0), n++, t
                }, this.generateBlurs = function() {
                    for (var e = [], n = 0; n < t._cfg.mw; n++) {
                        var a = t._reels[n].getBlurs();
                        e.push(a)
                    }
                    return e
                }, this.setNewReelsCfg = function(t) {
                    e.super.setNewReelsCfg(t);
                    for (var n = [], a = 0; a < e._reels.length; a++) n.push(e._reels[a]._counter);
                    nge.observer.fire("zenZenCash.slotMachine.blursManager.updateReelsCfg", {
                        cfg: t,
                        curCounters: n
                    })
                }, this.updateEdgeBlurs = function(e) {
                    nge.rafSetTimeout((function() {
                        t.super.updateEdgeBlurs(e)
                    }), 1)
                }, this.speedUpReels = function() {
                    e.super.speedUpReels();
                    for (var t = [], n = [], a = 0; a < e._reels.length; a++) t.push(e._reels[a]._counter), n.push(e._reels[a]._lastSymbols);
                    nge.observer.fire("zenZenCash.slotMachine.blursManager.updateReelsCfg", {
                        cfg: n,
                        curCounters: t
                    })
                }, this.speedUpReel = function(t) {
                    e._reels[t]._counter > e._cfg.recyclerView.reelsMinStopCounter && e._reels[t].setCounter(e._cfg.recyclerView.reelsMinStopCounter), e._reels[t].setSpeed(e._cfg.recyclerView.reelsSpeedUpSpeed)
                }, this.goldSymbolShowFrame = function(e) {
                    var n = t.getSymbolByPosition({
                        reel: e.coords[0],
                        row: e.coords[1]
                    });
                    null !== n && n.goldFrameAnimationShow({
                        speed: e.speed,
                        callback: function() {
                            e.callback && e.callback()
                        }
                    })
                }, this.goldSymbolCloning = function(e) {
                    var n = t.getSymbolByPosition({
                        reel: e.coords[0],
                        row: e.coords[1]
                    });
                    null !== n && n.cloningAnimationShow({
                        animation: e.animation,
                        speed: e.speed,
                        callback: function() {
                            for (var n = 0; n < e.symbols.length; n++) {
                                var a = t.getSymbolByPosition({
                                    reel: +e.symbols[n][0],
                                    row: +e.symbols[n][1]
                                });
                                null !== a && a.goldFrameAnimationHide(), nge.observer.fire("slotMachine.setSymbol", {
                                    coords: [+e.symbols[n][0], +e.symbols[n][1]],
                                    key: e.key
                                })
                            }
                            e.callback && e.callback()
                        }
                    })
                }, this.goldSymbolReplace = function(e) {
                    var n = t.getSymbolByPosition({
                        reel: e.coords[0],
                        row: e.coords[1]
                    });
                    null !== n && n.replaceAnimationShow({
                        animation: "open",
                        key: e.key,
                        speed: e.speed,
                        callback: function() {
                            nge.observer.fire("slotMachine.setSymbol", {
                                coords: [+e.coords[0], +e.coords[1]],
                                key: e.key
                            }), e.callback && e.callback()
                        }
                    })
                }, this.showJackpotSpinificationAnimation = function(e) {
                    var n = t.getSymbolByPosition({
                        reel: e.reel,
                        row: e.row
                    });
                    null !== n && nge.rafSetTimeout((function() {
                        n.spinificationAnimationShow({
                            animation: "spinification"
                        })
                    }), 300)
                }, this.stopJackpotSpinificationAnimation = function(e) {
                    null !== (e = t.getSymbolByPosition({
                        reel: e.reel,
                        row: e.row
                    })) && e.spinificationAnimationHide()
                }
            }))
        },
        1273: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerReel = nge.App.DjGameBase.Com.SlotMachine.RecyclerReel.extend((function() {
                this.jumpDistance = 100, this.jumpTimeUp = 200, this.jumpTimeDown = 75
            }))
        },
        1274: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol1 = Class.extend((function() {
                var e, t, n, a, s, o, i = !1;
                this.setContext = function(t) {
                    i = !1, n = (e = t).textureAnimationShow.bind(e), e.textureAnimationShow = r, a = e.pause.bind(e), e.pause = l, s = e.stopAnimationsOnHideAnimation.bind(e), e.stopAnimationsOnHideAnimation = c, o = e.stop.bind(e), e.stop = p
                };
                this.spinificationAnimationShow = function(n) {
                    i || function() {
                        if (e.getConfig().spine) {
                            var n = nge.Mlm.Objects.Spine({
                                    assetKey: e._symbolConfig.spine.atlas,
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }),
                                a = e.slotMachineCfg.symbolAnimationContainerName ? nge.findOne("^" + e.slotMachineCfg.symbolAnimationContainerName) : e.texture.parent;
                            t = nge.objects.create(n, a, !0), i = !0
                        }
                    }();
                    var a = {};
                    e.slotMachineCfg.symbolAnimationContainerName ? a = nge.Lib.Helper.getPosInParent(e.texture, "slotMachineGameContainer") : (a.x = e.texture.x, a.y = e.texture.y), t.play({
                        name: n.animation,
                        mode: nge.spine.LOOP,
                        x: a.x,
                        y: a.y
                    }), t.textureZ = e.texture.textureZ + (e._symbolConfig.animationOnTop ? 500 : 0), t.parent.sort("textureZ"), e.texture.parent.sort("textureZ"), t.onComplete.addOnce((function() {
                        n.callback && n.callback()
                    })), t.alpha = 0, nge.tween.add(t).to({
                        alpha: 1
                    }, 300, nge.Lib.Tween.Easing.Linear.None).start()
                }, this.goldFrameAnimationShow = function() {}, this.goldFrameAnimationHide = function() {}, this.spinificationAnimationHide = function(e) {
                    i && (e && e(), t && ((e = nge.tween.add(t).to({
                        alpha: 0
                    }, 300, nge.Lib.Tween.Easing.Linear.None)).onComplete.addOnce((function() {
                        t && (t = t.destroy(!0)), i = !1
                    })), e.start()))
                };
                var r = function(e, a, s) {
                        s = void 0 === s ? nge.spine.FREEZE : s, t && t.stop(), n(e, a, s)
                    },
                    l = function() {
                        a(), t && t.stop()
                    },
                    c = function() {
                        s(), t && t.stop()
                    },
                    p = function() {
                        o(), t && (t = t.destroy(!0)), i = !1
                    }
            }))
        },
        1275: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol16 = Class.extend((function() {
                var e, t, n, a, s, o, i = !1;
                this.setContext = function(t) {
                    i = !1, n = (e = t).textureAnimationShow.bind(e), e.textureAnimationShow = l, a = e.pause.bind(e), e.pause = c, s = e.stopAnimationsOnHideAnimation.bind(e), e.stopAnimationsOnHideAnimation = p, o = e.stop.bind(e), e.stop = m
                };
                var r = function() {
                    if (e.getConfig().spine) {
                        var n = nge.Mlm.Objects.Spine({
                                assetKey: e._symbolConfig.spine.atlas,
                                anchorX: .5,
                                anchorY: .5,
                                isVisible: !1
                            }),
                            a = e.slotMachineCfg.symbolAnimationContainerName ? nge.findOne("^" + e.slotMachineCfg.symbolAnimationContainerName) : e.texture.parent;
                        t = nge.objects.create(n, a, !0), i = !0
                    }
                };
                this.cloningAnimationShow = function(n) {
                    i || r();
                    var a = {};
                    e.slotMachineCfg.symbolAnimationContainerName ? a = nge.Lib.Helper.getPosInParent(e.texture, "slotMachineGameContainer") : (a.x = e.texture.x, a.y = e.texture.y), t.play({
                        name: n.animation,
                        mode: nge.spine.NONE,
                        x: a.x,
                        y: a.y
                    }), t.setSpeed(n.speed), t.textureZ = e.texture.textureZ + (e._symbolConfig.animationOnTop ? 500 : 0), t.parent.sort("textureZ"), e.texture.parent.sort("textureZ"), t.onComplete.addOnce((function() {
                        n.callback && n.callback()
                    }))
                }, this.replaceAnimationShow = function(n) {
                    i || r();
                    var a = {};
                    e.slotMachineCfg.symbolAnimationContainerName ? a = nge.Lib.Helper.getPosInParent(e.texture, "slotMachineGameContainer") : (a.x = e.texture.x, a.y = e.texture.y), t.play({
                        name: n.animation,
                        mode: nge.spine.DESTROY,
                        x: a.x,
                        y: a.y
                    }), t.setSpeed(n.speed), t.textureZ = e.texture.textureZ + (e._symbolConfig.animationOnTop ? 500 : 0) + 1, t.parent.sort("textureZ"), e.texture.parent.sort("textureZ"), e.texture.loadTexture(n.key), t.onComplete.addOnce((function() {
                        n.callback && n.callback()
                    }))
                }, this.goldFrameAnimationShow = function() {}, this.goldFrameAnimationHide = function() {}, this.additionalAnimationHide = function(e) {
                    i && (e && e(), t && (t = t.destroy(!0)), i = !1)
                };
                var l = function(e, a, s) {
                        s = void 0 === s ? nge.spine.FREEZE : s, t && t.stop(), n(e, a, s)
                    },
                    c = function() {
                        a(), t && t.stop()
                    },
                    p = function() {
                        s(), t && t.stop()
                    },
                    m = function() {
                        o(), t && (t = t.destroy(!0)), i = !1
                    }
            }))
        },
        1276: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol = nge.App.DjGameBase.Com.SlotMachine.Symbol.extend((function() {
                var e, t = this,
                    n = 1,
                    a = 1;
                this.resize = function(e, t) {
                    this.super.resize(e, t), n = e, a = t
                }, this.animateSymbolLanding = function(e, s, o) {
                    this.super.animateSymbolLanding(e, s, !1), t.landingAnimation && t.landingAnimation.scale.set(1.26 * n, 1.26 * a)
                }, this.textureAnimationShow = function(e, s, o, i, r) {
                    o = void 0 === o ? nge.spine.FREEZE : o, this.super.textureAnimationShow(e, s, o, i, r), t.symbolWinAnimation && "1" !== t.getName() && "2" !== t.getName() && t.symbolWinAnimation.scale.set(1.046 * n, 1.046 * a)
                };
                this.goldFrameAnimationShow = function(n) {
                    e || function() {
                        var n = nge.Mlm.Objects.Spine({
                                assetKey: "m16",
                                anchorX: .5,
                                anchorY: .5,
                                isVisible: !1
                            }),
                            a = t.slotMachineCfg.symbolAnimationContainerName ? nge.findOne("^" + t.slotMachineCfg.symbolAnimationContainerName) : t.texture.parent;
                        e = nge.objects.create(n, a, !0)
                    }(), e.play({
                        name: "golden_frame",
                        mode: nge.spine.FREEZE,
                        x: t.texture.x + t.texture.parent.x,
                        y: t.texture.y + t.texture.parent.y,
                        z: t.texture.z + (t._symbolConfig.animationOnTop ? 500 : 0)
                    }), e.setSpeed(n.speed), e.parent.sort("textureZ"), e.onComplete.addOnce((function() {
                        n.callback && n.callback()
                    }))
                }, this.goldFrameAnimationHide = function() {
                    e && e.stop()
                }, this._subscribe = function() {
                    this.super._subscribe()
                }, this._unsubscribe = function() {
                    this.super._unsubscribe()
                }
            }))
        },
        1277: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbols = nge.Com.SlotMachine.Symbols.extend((function() {
                this.items = [{
                    name: "0",
                    spine: {
                        animation: "play",
                        atlas: "m00"
                    },
                    textureUrl: "m00_000.png",
                    textureZ: 100
                }, {
                    name: "1",
                    textureUrl: "m01_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m01"
                    },
                    textureZ: 110
                }, {
                    name: "2",
                    textureUrl: "m02_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m02"
                    },
                    textureZ: 110
                }, {
                    name: "3",
                    textureUrl: "m03_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m03"
                    },
                    textureZ: 120
                }, {
                    name: "4",
                    textureUrl: "m04_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m04"
                    },
                    textureZ: 120
                }, {
                    name: "5",
                    textureUrl: "m05_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m05"
                    },
                    textureZ: 120
                }, {
                    name: "6",
                    textureUrl: "m06_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m06"
                    }
                }, {
                    name: "7",
                    textureUrl: "m07_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m07"
                    }
                }, {
                    name: "8",
                    textureUrl: "m08_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m08"
                    }
                }, {
                    name: "9",
                    textureUrl: "m09_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m09"
                    }
                }, {
                    name: "10",
                    textureUrl: "m10_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m10"
                    }
                }, {
                    name: "11",
                    textureUrl: "m11_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m11"
                    }
                }, {
                    name: "12",
                    textureUrl: "m12_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m12"
                    }
                }, {
                    name: "13",
                    textureUrl: "m13_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m13"
                    }
                }, {
                    name: "14",
                    textureUrl: "m14_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m14"
                    }
                }, {
                    name: "15",
                    textureUrl: "m15_000.png",
                    spine: {
                        animation: "play",
                        atlas: "m15"
                    }
                }, {
                    name: "16",
                    textureUrl: "m16_000.png",
                    spine: {
                        animation: "open",
                        atlas: "m16"
                    }
                }, {
                    name: "0_blur",
                    textureUrl: "100.png"
                }, {
                    name: "1_blur",
                    textureUrl: "101.png"
                }, {
                    name: "2_blur",
                    textureUrl: "102.png"
                }, {
                    name: "3_blur",
                    textureUrl: "103.png"
                }, {
                    name: "4_blur",
                    textureUrl: "104.png"
                }, {
                    name: "5_blur",
                    textureUrl: "105.png"
                }, {
                    name: "6_blur",
                    textureUrl: "106.png"
                }, {
                    name: "7_blur",
                    textureUrl: "107.png"
                }, {
                    name: "8_blur",
                    textureUrl: "108.png"
                }, {
                    name: "9_blur",
                    textureUrl: "109.png"
                }, {
                    name: "10_blur",
                    textureUrl: "110.png"
                }, {
                    name: "11_blur",
                    textureUrl: "111.png"
                }, {
                    name: "12_blur",
                    textureUrl: "112.png"
                }, {
                    name: "13_blur",
                    textureUrl: "113.png"
                }, {
                    name: "14_blur",
                    textureUrl: "114.png"
                }, {
                    name: "15_blur",
                    textureUrl: "115.png"
                }, {
                    name: "16_blur",
                    textureUrl: "116.png"
                }]
            }))
        },
        1278: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                return {
                    styles: {
                        ".portrait .slotMachinePivotContainer": {
                            minY: 0,
                            y: -960,
                            alignY: "center"
                        },
                        ".album .slotMachinePivotContainer": {
                            minY: 0,
                            y: 0,
                            alignY: "top"
                        },
                        ".portrait .slotMachineContainer": {
                            x: 0,
                            y: 465,
                            alignX: "center",
                            sWidth: 1080,
                            sHeight: 1920
                        },
                        ".album .slotMachineContainer": {
                            x: 0,
                            y: 0,
                            alignX: "center",
                            sWidth: 1920,
                            sHeight: 1080
                        },
                        ".portrait .slotMachineMaskContainer": {
                            x: -720,
                            y: 0,
                            scaleX: .75,
                            scaleY: .75
                        },
                        ".album .slotMachineMaskContainer": {
                            x: -960,
                            y: 0,
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".portrait .slotMachineMask": {
                            x: 260,
                            y: 47,
                            width: 1400,
                            height: 778
                        },
                        ".album .slotMachineMask": {
                            x: 260,
                            y: 124,
                            width: 1400,
                            height: 778
                        },
                        ".portrait .slotMachineWinAnimationContainer": {
                            x: 260,
                            y: 47
                        },
                        ".album .slotMachineWinAnimationContainer": {
                            x: 260,
                            y: 124
                        },
                        ".portrait .freespinGoldSymbolsContainer": {
                            x: 260,
                            y: 47
                        },
                        ".album .freespinGoldSymbolsContainer": {
                            x: 260,
                            y: 124
                        },
                        ".portrait .slotMachineGameContainer": {
                            x: 260,
                            y: 47
                        },
                        ".album .slotMachineGameContainer": {
                            x: 260,
                            y: 124
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: []
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: 1,
                            name: "slotMachineMaskContainer",
                            class: "slotMachineMaskContainer",
                            alignX: "left",
                            contents: [{
                                type: 1,
                                id: "slotMachineMask",
                                name: "slotMachineMask",
                                class: "slotMachineMask"
                            }, {
                                type: mt.objects.GROUP,
                                name: "freespinGoldSymbolsContainer",
                                class: "freespinGoldSymbolsContainer",
                                x: 0,
                                y: 0
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineWinAnimationContainer",
                                class: "slotMachineWinAnimationContainer",
                                x: 0,
                                y: 0
                            }, {
                                type: 1,
                                id: "slotMachineGameContainer",
                                name: "slotMachineGameContainer",
                                class: "slotMachineGameContainer",
                                width: 1400,
                                height: 780
                            }]
                        }]
                    }
                }
            }
        },
        1279: function(e, t) {
            nge.App[nge.appNS].Com.Statusbar = {}
        },
        1280: function(e, t) {
            nge.App[nge.appNS].Com.Statusbar.Mobile = {}
        },
        1281: function(e, t) {
            nge.App[nge.appNS].Com.Statusbar.Mobile.Cfg = nge.App.DjGameBase.Com.Statusbar.Mobile.Cfg.extend((function() {
                this.elementsColor = "#face4e"
            }))
        },
        1282: function(e, t) {
            nge.App[nge.appNS].Com.Statusbar.Mobile.Controller = nge.App.DjGameBase.Com.Statusbar.Mobile.Controller.extend((function() {
                this.getLinesToRightText = function() {
                    return nge.i18n.get("WAYS") + " 243"
                }
            }))
        },
        1283: function(e, t) {
            nge.App[nge.appNS].Com.Winlines = {}
        },
        1284: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Cfg = nge.App.DjGameBase.Com.Winlines.Cfg.extend((function() {
                this.linesType = null
            }))
        },
        1285: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.Controller = nge.App.DjGameBase.Com.Winlines.Controller.extend((function() {
                var e = this;
                this.animatePickBonusSymbols = function(t) {
                    e.view.animatePickBonusSymbols(t.wonSymbols, t.selectedLine)
                }, this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("zenZenCash.winlines.animatePickBonusSymbols", e.animatePickBonusSymbols)
                }
            }))
        },
        1286: function(e, t) {
            nge.App[nge.appNS].Com.Winlines.View = nge.App.DjGameBase.Com.Winlines.View.extend((function() {
                var e = this;
                this.animatePickBonusSymbols = function(t, n) {
                    var a = void 0 !== n;
                    e.animateSymbols(t, a, e._cfg.symbolSpineModeBonus), a && (nge.observer.fire("winlines.hideAll"), nge.observer.fire("winlines.show", n), nge.observer.fire("winlines.sendLineToBack", n))
                }
            }))
        },
        1287: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1288: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Tpl = function() {
                return {
                    styles: {
                        ".portrait .winlinesTextPivotContainer": {
                            minY: 0,
                            y: -960,
                            alignY: "center"
                        },
                        ".album .winlinesTextPivotContainer": {
                            minY: 0,
                            y: 0,
                            alignY: "top"
                        },
                        ".portrait .winlinesTextContainer": {
                            y: 465
                        },
                        ".album .winlinesTextContainer": {
                            y: 0
                        },
                        ".portrait .lineWinContainer": {
                            y: 35.25,
                            scaleX: .75,
                            scaleY: .75
                        },
                        ".album .lineWinContainer": {
                            y: 124,
                            scaleX: 1,
                            scaleY: 1
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
                            x: "50%",
                            isVisible: !1,
                            contents: [{
                                type: 7,
                                name: "lineWinAmount0",
                                isVisible: !1,
                                x: 0,
                                y: 130,
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
                                y: 390,
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
        1289: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1290: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1291: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Ui();
                return ["plusButton", "minusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("key", t, "contents", e.assets, !1, !0, !1)) && (t.frameWidth = 64, t.frameHeight = 64)
                })), ["autoButton", "turboModeUIButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("key", t, "contents", e.assets, !1, !0, !1)) && (t.frameWidth = 176, t.frameHeight = 108)
                })), ["spinButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 1)
                })), ["autoButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 1)
                })), ["turboModeUIButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = +t.y || 0)
                })), ["autoButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 3)
                })), ["turboModeUIButtonButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) + 1)
                })), ["coinMinusButton", "betMinusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 3)
                })), ["autospinAmountSetterPanel"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.height = +t.height + 40)
                })), e
            }
        },
        1292: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Intro,
                    t = nge.Lib.Helper.tplObjFind(e, "demoPlayButtonText");
                return t.style.fill = 15722369, t.style.stroke = 14329662, t.style.strokeThickness = 2, nge.Lib.Helper.tplSetContainerContents(e, "introUniqueContent", [{
                    type: mt.objects.TEXT,
                    name: "introScreenTextCenter",
                    text: nge.i18n.get("INTRO"),
                    anchorX: .5,
                    anchorY: .5,
                    x: 36,
                    y: 738,
                    style: {
                        font: "36pt futuraptheavy",
                        fill: 16765524,
                        align: "center",
                        shadowColor: 991518,
                        shadowBlur: 6,
                        shadowOffsetY: 5,
                        lineHeight: 66
                    }
                }]), e
            }
        },
        1293: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "22pt futuraptheavy",
                        fill: 16777215,
                        align: "center",
                        shadowColor: 2560004,
                        shadowBlur: 3,
                        shadowOffsetY: 2,
                        stroke: 2560004,
                        strokeThickness: 2,
                        lineHeight: 32
                    },
                    n = {
                        font: "18pt futuraptheavy",
                        fill: 16777215,
                        shadowColor: 2560004,
                        shadowBlur: 3,
                        shadowOffsetY: 2,
                        stroke: 2560004,
                        strokeThickness: 2,
                        lineHeight: 32
                    },
                    a = {
                        font: "74pt futuraptheavy",
                        fill: 16777215,
                        align: "center",
                        shadowColor: 2560004,
                        shadowBlur: 3,
                        shadowOffsetY: 2,
                        stroke: 2560004,
                        strokeThickness: 2,
                        lineHeight: 32
                    },
                    s = {
                        font: "33pt futuraptheavy",
                        fill: 16777215,
                        align: "center",
                        shadowColor: 2560004,
                        shadowBlur: 3,
                        shadowOffsetY: 2,
                        stroke: 2560004,
                        strokeThickness: 2
                    },
                    o = {
                        font: "30pt futuraptmedium",
                        fill: 16696173
                    },
                    i = {
                        font: "30pt futuraptmedium",
                        fill: 16777215
                    },
                    r = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "infoNextButton",
                            fullPath: r + "playarea/infoNextButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pageInfoPlate",
                            fullPath: r + "playarea/pageInfoPlate.png",
                            frameHeight: 40
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "nameBg1",
                            fullPath: r + "playarea/nameBg1_asset.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0m04Carp",
                            fullPath: r + "playarea/p0m04Carp.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0m05Lantern",
                            fullPath: r + "playarea/p0m05Lantern.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0m06Gold",
                            fullPath: r + "playarea/p0m06Gold.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0m07Orange",
                            fullPath: r + "playarea/p0m07Orange.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0m08Ace",
                            fullPath: r + "playarea/p0m08Ace.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0m09King",
                            fullPath: r + "playarea/p0m09King.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1m10Queen",
                            fullPath: r + "playarea/p1m10Queen.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1m11Jack",
                            fullPath: r + "playarea/p1m11Jack.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1m12Ten",
                            fullPath: r + "playarea/p1m12Ten.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1m13Nine",
                            fullPath: r + "playarea/p1m13Nine.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "envelope1",
                            fullPath: r + "playarea/envelope1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "envelope2",
                            fullPath: r + "playarea/envelope2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "scatter",
                            fullPath: r + "playarea/scatter.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "wild",
                            fullPath: r + "playarea/wild.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "wild2x",
                            fullPath: r + "playarea/wild2x.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "wild3x",
                            fullPath: r + "playarea/wild3x.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "divider",
                            fullPath: r + "playarea/divider.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "mysteryCloningReel",
                            fullPath: r + "playarea/mysteryCloningReel.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "mysteryCloningReel_screen",
                            fullPath: r + "playarea/mysteryCloningReel_screen.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "freeSpisBonus_screen",
                            fullPath: r + "playarea/freeSpins_screen.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "pickemBonus_screen",
                            fullPath: r + "playarea/pickemBonus_screen.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "arrow1",
                            fullPath: r + "playarea/arrow1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "arrow2",
                            fullPath: r + "playarea/arrow2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "arrow3",
                            fullPath: r + "playarea/arrow3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "maxi_img",
                            fullPath: r + "playarea/maxi_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "major_img",
                            fullPath: r + "playarea/major_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "minor_img",
                            fullPath: r + "playarea/minor_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "mini_img",
                            fullPath: r + "playarea/mini_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "maxi_name_img",
                            fullPath: r + "playarea/maxi_name_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "major_name_img",
                            fullPath: r + "playarea/major_name_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "minor_name_img",
                            fullPath: r + "playarea/minor_name_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "mini_name_img",
                            fullPath: r + "playarea/mini_name_img.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "rules_lines_desktop",
                            fullPath: r + "playarea/rules_lines_desktop.png"
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
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "page0Container",
                                    contents: [{
                                        name: "paytableNameText",
                                        type: mt.objects.TEXT,
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Gold",
                                        x: -480,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Gold_img",
                                            assetKey: "p0m06Gold",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "GoldText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "GoldPay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable5",
                                                type: mt.objects.TEXT,
                                                class: "ps8-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable4",
                                                type: mt.objects.TEXT,
                                                class: "ps8-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable3",
                                                type: mt.objects.TEXT,
                                                class: "ps8-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Carp",
                                        x: 490,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "carp_img",
                                            assetKey: "p0m04Carp",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "CarpText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "CarpPay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps6-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps6-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps6-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Lantern",
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Lantern_img",
                                            assetKey: "p0m05Lantern",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "LanternText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "LanternPay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps7-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps7-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps7-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Orange",
                                        x: -480,
                                        y: 400,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Orange_img",
                                            assetKey: "p0m07Orange",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "OrangeText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "OrangePay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable5",
                                                type: mt.objects.TEXT,
                                                class: "ps9-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable4",
                                                type: mt.objects.TEXT,
                                                class: "ps9-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable3",
                                                type: mt.objects.TEXT,
                                                class: "ps9-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Ace",
                                        y: 400,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Ace_img",
                                            assetKey: "p0m08Ace",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "AceText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "AcePay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps10-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps10-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps10-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "King",
                                        x: 490,
                                        y: 400,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "King_img",
                                            assetKey: "p0m09King",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "KingText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "KingPay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps11-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps11-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps11-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1Container",
                                    contents: [{
                                        name: "paytableNameText",
                                        type: mt.objects.TEXT,
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Queen",
                                        x: -355,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Queen_img",
                                            assetKey: "p1m10Queen",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "QueenText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "QueenPay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps12-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps12-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps12-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Jack",
                                        x: 355,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Jack_img",
                                            assetKey: "p1m11Jack",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "JackText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "JackPay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps13-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps13-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps13-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Ten",
                                        x: -355,
                                        y: 400,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Ten_img",
                                            assetKey: "p1m12Ten",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "TenText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "TenPay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps14-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps14-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps14-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "Nine",
                                        x: 355,
                                        y: 400,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "Nine_img",
                                            assetKey: "p1m13Nine",
                                            x: 740,
                                            y: 196
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "NineText",
                                            x: 1060,
                                            contents: [{
                                                name: "textNumber5",
                                                type: mt.objects.TEXT,
                                                text: 5,
                                                style: o,
                                                y: 272,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber4",
                                                type: mt.objects.TEXT,
                                                text: 4,
                                                style: o,
                                                y: 327,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                name: "textNumber3",
                                                type: mt.objects.TEXT,
                                                text: 3,
                                                style: o,
                                                y: 381,
                                                anchorX: .5,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "NinePay",
                                            x: 1090,
                                            contents: [{
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps15-5",
                                                style: i,
                                                y: 272,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps15-4",
                                                style: i,
                                                y: 327,
                                                anchorY: .5
                                            }, {
                                                name: "textPaytable",
                                                type: mt.objects.TEXT,
                                                class: "ps15-3",
                                                style: i,
                                                y: 381,
                                                anchorY: .5
                                            }]
                                        }]
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2Container",
                                    contents: [{
                                        name: "paylineNameText",
                                        type: mt.objects.TEXT,
                                        text: "LINKING REELS ™",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "mysteryCloningReel_img",
                                        assetKey: "mysteryCloningReel",
                                        x: 360,
                                        y: 135
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "mysteryCloningReel_screen",
                                        x: 620,
                                        y: 135,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            assetKey: "mysteryCloningReel_screen"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img_mini",
                                        scaleX: .3,
                                        scaleY: .3,
                                        x: 1330,
                                        y: 830,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "scatter_1",
                                            assetKey: "scatter",
                                            x: 500
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "envelope1_1",
                                            assetKey: "envelope1",
                                            x: 0
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "envelope2_2",
                                            assetKey: "envelope2",
                                            x: 250
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "EachReel",
                                        text: "Each_reel",
                                        style: t,
                                        x: 960,
                                        y: 800,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText"
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3Container",
                                    contents: [{
                                        name: "paytableNameText",
                                        type: mt.objects.TEXT,
                                        text: "WILDS",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img_3",
                                        scaleX: .8,
                                        scaleY: .8,
                                        x: 860,
                                        y: 590,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "envelope1_3",
                                            assetKey: "envelope1",
                                            x: 0
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "envelope2_3",
                                            assetKey: "envelope2",
                                            x: 250
                                        }, {
                                            type: mt.objects.IMAGE,
                                            name: "scatter_3",
                                            assetKey: "scatter",
                                            x: -250
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "wilds",
                                        y: 30,
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "wild",
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "wild_img",
                                                assetKey: "wild",
                                                x: 350,
                                                y: 156
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "WILD",
                                                text: "WILD",
                                                style: s,
                                                x: 464,
                                                y: 135,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "wildText",
                                                x: 630,
                                                contents: [{
                                                    name: "textNumber5",
                                                    type: mt.objects.TEXT,
                                                    text: 5,
                                                    style: o,
                                                    y: 272,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    name: "textNumber4",
                                                    type: mt.objects.TEXT,
                                                    text: 4,
                                                    style: o,
                                                    y: 327,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    name: "textNumber3",
                                                    type: mt.objects.TEXT,
                                                    text: 3,
                                                    style: o,
                                                    y: 381,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "wildPay",
                                                x: 660,
                                                contents: [{
                                                    name: "textPaytableGold5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps3-5",
                                                    style: i,
                                                    y: 272,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytableGold4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps3-4",
                                                    style: i,
                                                    y: 327,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytableGold3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps3-3",
                                                    style: i,
                                                    y: 381,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "wild2x",
                                            x: 450,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "wild2x_img",
                                                assetKey: "wild2x",
                                                x: 350,
                                                y: 156
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "WILD_2x",
                                                text: "WILD 2x",
                                                style: s,
                                                x: 464,
                                                y: 135,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "wild2Text",
                                                x: 630,
                                                contents: [{
                                                    name: "textNumber5",
                                                    type: mt.objects.TEXT,
                                                    text: 5,
                                                    style: o,
                                                    y: 272,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    name: "textNumber4",
                                                    type: mt.objects.TEXT,
                                                    text: 4,
                                                    style: o,
                                                    y: 327,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    name: "textNumber3",
                                                    type: mt.objects.TEXT,
                                                    text: 3,
                                                    style: o,
                                                    y: 381,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "wild2Pay",
                                                x: 660,
                                                contents: [{
                                                    name: "textPaytableGold5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps4-5",
                                                    style: i,
                                                    y: 272,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytableGold4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps4-4",
                                                    style: i,
                                                    y: 327,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytableGold3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps4-3",
                                                    style: i,
                                                    y: 381,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "wild3x",
                                            x: 900,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                name: "wild3x_img",
                                                assetKey: "wild3x",
                                                x: 350,
                                                y: 156
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "WILD_3x",
                                                text: "WILD 3x",
                                                style: s,
                                                x: 464,
                                                y: 135,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "wild3Text",
                                                x: 630,
                                                contents: [{
                                                    name: "textNumber5",
                                                    type: mt.objects.TEXT,
                                                    text: 5,
                                                    style: o,
                                                    y: 272,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    name: "textNumber4",
                                                    type: mt.objects.TEXT,
                                                    text: 4,
                                                    style: o,
                                                    y: 327,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }, {
                                                    name: "textNumber3",
                                                    type: mt.objects.TEXT,
                                                    text: 3,
                                                    style: o,
                                                    y: 381,
                                                    anchorX: .5,
                                                    anchorY: .5
                                                }]
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "wild3Pay",
                                                x: 660,
                                                contents: [{
                                                    name: "textPaytableGold5",
                                                    type: mt.objects.TEXT,
                                                    class: "ps5-5",
                                                    style: i,
                                                    y: 272,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytableGold4",
                                                    type: mt.objects.TEXT,
                                                    class: "ps5-4",
                                                    style: i,
                                                    y: 327,
                                                    anchorY: .5
                                                }, {
                                                    name: "textPaytableGold3",
                                                    type: mt.objects.TEXT,
                                                    class: "ps5-3",
                                                    style: i,
                                                    y: 381,
                                                    anchorY: .5
                                                }]
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "Wild_symbols",
                                        text: "Wild_symbols",
                                        style: t,
                                        x: 960,
                                        y: 560,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "Wild_symbols_appears",
                                        text: "Wild_symbols_appears",
                                        style: t,
                                        x: 960,
                                        y: 840,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText"
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4Container",
                                    contents: [{
                                        name: "rulesNameText",
                                        type: mt.objects.TEXT,
                                        text: "BONUS SCATTERS",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "divider4",
                                        assetKey: "divider",
                                        x: 960,
                                        y: 480,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img_3_3",
                                        x: 860,
                                        y: 150,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            assetKey: "envelope1",
                                            x: -130
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "envelope2",
                                            x: 130
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img_3scatters",
                                        x: 860,
                                        y: 505,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            assetKey: "scatter",
                                            x: -240
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "scatter",
                                            x: 0
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "scatter",
                                            x: 240
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "DRAGON_ENVELOPES",
                                        text: "DRAGON_ENVELOPES",
                                        style: t,
                                        x: 960,
                                        y: 410,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "BONUS_SCATTER",
                                        text: "BONUS_SCATTER",
                                        style: t,
                                        x: 960,
                                        y: 785,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText"
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page5Container",
                                    contents: [{
                                        name: "paylineNameText",
                                        type: mt.objects.TEXT,
                                        text: "FREE SPINS BONUS",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "freeSpisBonus_screen",
                                        assetKey: "freeSpisBonus_screen",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 960,
                                        y: 400
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "img_3_scatters",
                                        scaleX: .6,
                                        scaleY: .6,
                                        x: 890,
                                        y: 670,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            assetKey: "scatter",
                                            x: -220
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "scatter",
                                            x: 0
                                        }, {
                                            type: mt.objects.IMAGE,
                                            assetKey: "scatter",
                                            x: 220
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "3_BONUS_SYMBOLS",
                                        text: "3_BONUS_SYMBOLS",
                                        style: t,
                                        x: 960,
                                        y: 840,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText"
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page6Container",
                                    contents: [{
                                        name: "paylineNameText",
                                        type: mt.objects.TEXT,
                                        text: "PICK'EM BONUS",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "WHEN_THE_JACKPOT",
                                        text: "WHEN_THE_JACKPOT",
                                        style: t,
                                        x: 960,
                                        y: 820,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText"
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "pickemBlocks",
                                        scaleX: .8,
                                        scaleY: .8,
                                        x: 50,
                                        y: 0,
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "miniBlock",
                                            x: 300,
                                            y: 820,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "3_n",
                                                text: "3",
                                                style: a,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "1eqv",
                                                text: "=",
                                                style: a,
                                                x: 230,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "mini_img",
                                                assetKey: "mini_img",
                                                x: 113,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "mini_name_img",
                                                assetKey: "mini_name_img",
                                                x: 280,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "minorBlock",
                                            x: 300,
                                            y: 650,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "4_n",
                                                text: "4",
                                                style: a,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "1eqv",
                                                text: "=",
                                                style: a,
                                                x: 230,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "minor_img",
                                                assetKey: "minor_img",
                                                x: 113,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "minor_name_img",
                                                assetKey: "minor_name_img",
                                                x: 280,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "majorBlock",
                                            x: 300,
                                            y: 480,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "5_n",
                                                text: "5",
                                                style: a,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "1eqv",
                                                text: "=",
                                                style: a,
                                                x: 230,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "major_img",
                                                assetKey: "major_img",
                                                x: 113,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "major_name_img",
                                                assetKey: "major_name_img",
                                                x: 280,
                                                anchorY: .5
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "maxiBlock",
                                            x: 300,
                                            y: 310,
                                            contents: [{
                                                type: mt.objects.TEXT,
                                                name: "6_n",
                                                text: "6",
                                                style: a,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.TEXT,
                                                name: "1eqv",
                                                text: "=",
                                                style: a,
                                                x: 230,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "maxi_img",
                                                assetKey: "maxi_img",
                                                x: 113,
                                                anchorX: .5,
                                                anchorY: .5
                                            }, {
                                                type: mt.objects.IMAGE,
                                                name: "maxi_name_img",
                                                assetKey: "maxi_name_img",
                                                x: 280,
                                                anchorY: .5
                                            }]
                                        }]
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "pickemBonus_screen",
                                        assetKey: "pickemBonus_screen",
                                        x: 780,
                                        y: 220
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page7Container",
                                    contents: [{
                                        name: "paylineNameText",
                                        type: mt.objects.TEXT,
                                        text: "RULES_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "THE_GAME_IS_PLAYED",
                                        text: "THE_GAME_IS_PLAYED",
                                        style: n,
                                        x: 300,
                                        y: 300,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "EXAMPLE_AS_FOLLOWS",
                                        text: "EXAMPLE_AS_FOLLOWS",
                                        style: n,
                                        x: 300,
                                        y: 445,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "MORE_BET_WAY",
                                        text: "MORE_BET_WAY",
                                        style: n,
                                        x: 300,
                                        y: 650,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "rulesContent",
                                        y: 540,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "rules_lines_desktop",
                                            assetKey: "rules_lines_desktop",
                                            anchorY: .5,
                                            x: 300
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextRU",
                                        text: nge.i18n.get("rtpRU"),
                                        class: "rtpInfo",
                                        style: n,
                                        x: 960,
                                        y: 780,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextEN",
                                        text: nge.i18n.get("rtpEN"),
                                        class: "rtpInfo",
                                        style: n,
                                        x: 960,
                                        y: 802,
                                        anchorY: .5
                                    }]
                                }]
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
                                y: 915,
                                x: 765,
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
                                    x: 0
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
                                    x: 50
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
                                    x: 100
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
                                    x: 150
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
                                    x: 200
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
                                    x: 250
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
                                    x: 300
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
                                    x: 350
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "buttonsHelpContainer",
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
                                        y: 469,
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
                                        y: 469,
                                        action: 'function(){nge.observer.fire("buttons.pressCommand", "infoNext");}'
                                    }]
                                }]
                            }]
                        }]
                    }
                }
            }
        },
        1294: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1295: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0m04Carp",
                            fullPath: e + "playarea/p0m04Carp.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0m05Lantern",
                            fullPath: e + "playarea/p0m05Lantern.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0m06Gold",
                            fullPath: e + "playarea/p0m06Gold.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0m07Orange",
                            fullPath: e + "playarea/p0m07Orange.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0m08Ace",
                            fullPath: e + "playarea/p0m08Ace.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0m09King",
                            fullPath: e + "playarea/p0m09King.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1m10Queen",
                            fullPath: e + "playarea/p1m10Queen.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1m11Jack",
                            fullPath: e + "playarea/p1m11Jack.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1m12Ten",
                            fullPath: e + "playarea/p1m12Ten.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1m13Nine",
                            fullPath: e + "playarea/p1m13Nine.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "wild",
                            fullPath: e + "playarea/wild.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "wild2x",
                            fullPath: e + "playarea/wild2x.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "wild3x",
                            fullPath: e + "playarea/wild3x.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "scatter_envelope_mobile",
                            fullPath: e + "playarea/scatter_envelope_mobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "scatter_envelope_mobile_horizontal",
                            fullPath: e + "playarea/scatter_envelope_mobile_horizontal.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "envelope_mobile",
                            fullPath: e + "playarea/envelope_mobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pickemMobile",
                            fullPath: e + "playarea/pickemMobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "scattersMobile",
                            fullPath: e + "playarea/scattersMobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "wildsMobile",
                            fullPath: e + "playarea/wildsMobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "divider",
                            fullPath: e + "playarea/divider.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "mysteryCloningReel",
                            fullPath: e + "playarea/mysteryCloningReel.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "mysteryCloningReel_screen",
                            fullPath: e + "playarea/mysteryCloningReel_screen.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "freeSpisBonus_screen",
                            fullPath: e + "playarea/freeSpins_screen.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pickemBonus_screen",
                            fullPath: e + "playarea/pickemBonus_screen.jpg"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "arrow1",
                            fullPath: e + "playarea/arrow1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "arrow2",
                            fullPath: e + "playarea/arrow2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "arrow3",
                            fullPath: e + "playarea/arrow3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "envelope_mobile",
                            fullPath: e + "playarea/envelope_mobile.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "rules_lines",
                            fullPath: e + "playarea/rules_lines.png"
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
                                contents: []
                            }]
                        }]
                    }
                }
            }
        },
        1296: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Mobile.Intro;
                e.styles[".album .introScreenTextCenter"] = {
                    alignY: "bottom",
                    x: 36,
                    y: -350,
                    maxWidth: 1400
                }, e.styles[".portrait .introScreenTextCenter"] = {
                    alignY: "bottom",
                    x: 0,
                    y: -500,
                    maxWidth: 1050
                }, e.styles[".album .introScreenTextBottom"] = {
                    style: {
                        font: "44pt futuraptheavy",
                        fill: 16769869
                    }
                }, e.styles[".portrait .introScreenTextBottom"] = {
                    style: {
                        font: "44pt futuraptheavy",
                        fill: 16765524
                    }
                }, e.styles = nge.Lib.Helper.mergeObjs(e.styles, {
                    ".album .demoPlayButton": {
                        scaleX: .85,
                        scaleY: .85
                    },
                    ".portrait .demoPlayButton": {
                        scaleX: 1,
                        scaleY: 1
                    }
                });
                var t = nge.Lib.Helper.tplObjFind(e, "demoPlayButtonText");
                return t.style.fill = 15722369, t.y = -6, nge.Lib.Helper.tplObjFind(e, "demoPlayButton"), nge.Lib.Helper.tplSetContainerContents(e, "introUniqueContent", [{
                    type: mt.objects.TEXT,
                    name: "introScreenTextCenter",
                    class: "introScreenTextCenter",
                    text: nge.i18n.get("INTRO"),
                    anchorX: .5,
                    anchorY: .5,
                    maxWidth: 1400,
                    style: {
                        font: "38pt futuraptheavy",
                        fill: 16769869,
                        align: "center",
                        shadowColor: 1311237,
                        shadowBlur: 6,
                        shadowOffsetY: 5,
                        lineHeight: 58
                    }
                }]), e
            }
        },
        1297: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Mobile.Ui();
                return e.styles[".titleStyleMobile"].style.fill = 16436814, e.styles[".freeSpinAmountStyle"].style.fill = 16436814, e
            }
        },
        1298: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1299: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Demo = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [nge.Lib.Helper.mobileAndTabletCheck() ? {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "demoPlayButtonMobile",
                            fullPath: e + "playarea/demoPlayButtonMobile.png",
                            frameWidth: 404
                        } : {
                            type: mt.assets.IMAGE,
                            key: "demoPlayButton",
                            block: mt.assets.blocks.STATIC,
                            fullPath: e + "playarea/demoPlayButton.png",
                            frameWidth: 292
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "introScreenArrow",
                            fullPath: e + "playarea/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
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
        1300: function(e, t) {
            nge.App[nge.appNS].Tpl.States.LoadAssets = function() {
                var e = nge.appPath + "img/",
                    t = nge.Lib.Helper.mobileAndTabletCheck(),
                    n = {
                        name: "assets",
                        contents: []
                    };
                return [].forEach((function(t) {
                    n.contents.push({
                        type: mt.assets.ATLAS,
                        key: t,
                        atlas: e + "atlases/" + t + ".json",
                        fullPath: e + "atlases/" + t + ".png"
                    })
                })), t && n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "sidebar",
                    atlas: e + "atlases/sidebar.json",
                    fullPath: e + "atlases/sidebar.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "ui",
                    atlas: e + (t ? "atlases/ui_mobile.json" : "atlases/ui.json"),
                    fullPath: e + (t ? "atlases/ui_mobile.png" : "atlases/ui.png")
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: t ? mt.assets.blocks.STATIC : mt.assets.blocks.PAYTABLE,
                    key: "paytable",
                    atlas: e + (t ? "atlases/paytable_mobile.json" : "atlases/paytable.json"),
                    fullPath: e + (t ? "atlases/paytable_mobile.png" : "atlases/paytable.png")
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "paytable_buttons",
                    atlas: e + "atlases/paytable_buttons.json",
                    fullPath: e + "atlases/paytable_buttons.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "play",
                    atlas: e + "atlases/play.json",
                    fullPath: e + "atlases/play.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "play_jpg",
                    atlas: e + "atlases/play_jpg.json",
                    fullPath: e + "atlases/play_jpg.jpg"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: t ? mt.assets.blocks.STATIC : mt.assets.blocks.PAYTABLE,
                    key: "paytable_jpg",
                    atlas: e + "atlases/paytable_jpg.json",
                    fullPath: e + "atlases/paytable_jpg.jpg"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "symbols_static",
                    atlas: e + "atlases/symbols_static.json",
                    fullPath: e + "atlases/symbols_static.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "symbols_blur",
                    atlas: e + "atlases/symbols_blur.json",
                    fullPath: e + "atlases/symbols_blur.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "pickBonus",
                    atlas: e + "atlases/pickBonus.json",
                    fullPath: e + "atlases/pickBonus.png"
                }), n.contents.push({
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "popupJackpot",
                    fullPath: e + "jackpot/images/jackpotPopup.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "black-bg",
                    fullPath: e + "black-bg.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "bgArea",
                    fullPath: e + "atlases/bgArea.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "bgAreaVertical",
                    fullPath: e + "atlases/bgAreaVertical.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "bgAreaFreeSpins",
                    fullPath: e + "atlases/bgAreaFreeSpins.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "bgAreaFreeSpinsVertical",
                    fullPath: e + "atlases/bgAreaFreeSpinsVertical.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "bonusBg",
                    fullPath: e + "atlases/bonusBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "bonusBgVertical",
                    fullPath: e + "atlases/bonusBgVertical.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "introScreenBg",
                    fullPath: e + "atlases/introScreenBg.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "loading-progress-bar",
                    fullPath: e + "atlases/loading-progress-bar.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "reelsBg",
                    fullPath: e + "atlases/reelsBg.jpg"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m00",
                    spine: e + "spine/symbols/m00.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m01",
                    spine: e + "spine/symbols/m01.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m02",
                    spine: e + "spine/symbols/m02.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m03",
                    spine: e + "spine/symbols/m03.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m04",
                    spine: e + "spine/symbols/m04.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m05",
                    spine: e + "spine/symbols/m05.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m06",
                    spine: e + "spine/symbols/m06.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m07",
                    spine: e + "spine/symbols/m07.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m08",
                    spine: e + "spine/symbols/m08.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m09",
                    spine: e + "spine/symbols/m09.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m10",
                    spine: e + "spine/symbols/m10.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m11",
                    spine: e + "spine/symbols/m11.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m12",
                    spine: e + "spine/symbols/m12.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m13",
                    spine: e + "spine/symbols/m13.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m14",
                    spine: e + "spine/symbols/m14.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m15",
                    spine: e + "spine/symbols/m15.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m16",
                    spine: e + "spine/symbols/m16.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_fish_0",
                    atlas: e + "spine/symbols/symbols_animations_fish_0.json",
                    fullPath: e + "spine/symbols/symbols_animations_fish_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_gold_0",
                    atlas: e + "spine/symbols/symbols_animations_gold_0.json",
                    fullPath: e + "spine/symbols/symbols_animations_gold_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_gold_1",
                    atlas: e + "spine/symbols/symbols_animations_gold_1.json",
                    fullPath: e + "spine/symbols/symbols_animations_gold_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_bonus_0",
                    atlas: e + "spine/symbols/symbols_animations_bonus_0.json",
                    fullPath: e + "spine/symbols/symbols_animations_bonus_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_lantern_0",
                    atlas: e + "spine/symbols/symbols_animations_lantern_0.json",
                    fullPath: e + "spine/symbols/symbols_animations_lantern_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_orange_0",
                    atlas: e + "spine/symbols/symbols_animations_orange_0.json",
                    fullPath: e + "spine/symbols/symbols_animations_orange_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_other_0",
                    atlas: e + "spine/symbols/symbols_animations_other_0.json",
                    fullPath: e + "spine/symbols/symbols_animations_other_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_other_1",
                    atlas: e + "spine/symbols/symbols_animations_other_1.json",
                    fullPath: e + "spine/symbols/symbols_animations_other_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_other_2",
                    atlas: e + "spine/symbols/symbols_animations_other_2.json",
                    fullPath: e + "spine/symbols/symbols_animations_other_2.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_wild_0",
                    atlas: e + "spine/symbols/symbols_animations_wild_0.json",
                    fullPath: e + "spine/symbols/symbols_animations_wild_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "symbols_animations_wild_1",
                    atlas: e + "spine/symbols/symbols_animations_wild_1.json",
                    fullPath: e + "spine/symbols/symbols_animations_wild_1.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "bigWinAnim",
                    spine: e + "spine/bigWin/big_win.json"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "big_win_animations_coins",
                    atlas: e + "emitter/big_win_animations_coins.json",
                    fullPath: e + "emitter/big_win_animations_coins.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "childrenAlbum_animation",
                    spine: e + "spine/background/childrenAlbum_animation.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "childrenPortrait_animation",
                    spine: e + "spine/background/childrenPortrait_animation.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "children_animation",
                    atlas: e + "spine/background/children_animation.json",
                    fullPath: e + "spine/background/children_animation.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "candlesAlbum_animation",
                    spine: e + "spine/background/candlesAlbum_animation.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "candlesPortrait_animation",
                    spine: e + "spine/background/candlesPortrait_animation.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "candles_animation",
                    atlas: e + "spine/background/candles_animation.json",
                    fullPath: e + "spine/background/candles_animation.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "lights_animation",
                    spine: e + "spine/background/lights_animation.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo_animation",
                    spine: e + "spine/background/logo_animation.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "splash_animation",
                    spine: e + "spine/background/splash_animation.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "splash_animation_p",
                    atlas: e + "spine/background/splash_animation_p.json",
                    fullPath: e + "spine/background/splash_animation_p.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "fish_animation",
                    spine: e + "spine/background/fish_animation.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "fish_animation_p",
                    atlas: e + "spine/background/fish_animation_p.json",
                    fullPath: e + "spine/background/fish_animation_p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "fish_animation_jpeg",
                    atlas: e + "spine/background/fish_animation_jpeg.json",
                    fullPath: e + "spine/background/fish_animation_jpeg.jpg"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "spinification",
                    spine: e + "spine/spinification/spinification.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "spinification_atlas0",
                    atlas: e + "spine/spinification/spinification_atlas0.json",
                    fullPath: e + "spine/spinification/spinification_atlas0.jpg"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "popupSpineBackground",
                    spine: e + "spine/animatedPopup/animatedPopup.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "animatedPopup_p_0",
                    atlas: e + "spine/animatedPopup/animatedPopup_p_0.json",
                    fullPath: e + "spine/animatedPopup/animatedPopup_p_0.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "animatedPopup_p_1",
                    atlas: e + "spine/animatedPopup/animatedPopup_p_1.json",
                    fullPath: e + "spine/animatedPopup/animatedPopup_p_1.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "animatedPopup_p_2",
                    atlas: e + "spine/animatedPopup/animatedPopup_p_2.json",
                    fullPath: e + "spine/animatedPopup/animatedPopup_p_2.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "animatedPopup_jpeg",
                    atlas: e + "spine/animatedPopup/animatedPopup_jpeg.json",
                    fullPath: e + "spine/animatedPopup/animatedPopup_jpeg.jpg"
                }, {
                    type: mt.assets.JSON,
                    key: "DL_burst_of_coins",
                    fullPath: nge.appPath + "emitter/DL_burst_of_coins.json"
                }, {
                    type: mt.assets.JSON,
                    key: "emitter_pickbonus_big",
                    fullPath: e + "emitter/emitter_pickbonus_big.json"
                }, {
                    type: mt.assets.JSON,
                    key: "emitter_pickbonus_glow",
                    fullPath: e + "emitter/emitter_pickbonus_glow.json"
                }, {
                    type: mt.assets.JSON,
                    key: "emitter_pickbonus_small",
                    fullPath: e + "emitter/emitter_pickbonus_small.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "pick_bonus_album",
                    spine: e + "spine/pickBonus/pick_bonus_album.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "pick_bonus_portrait",
                    spine: e + "spine/pickBonus/pick_bonus_portrait.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus",
                    spine: e + "spine/pickBonus/coin_pick_bonus.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "pick_bonus_p",
                    atlas: e + "spine/pickBonus/pick_bonus_p.json",
                    fullPath: e + "spine/pickBonus/pick_bonus_p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "pick_bonus_p_noPng",
                    atlas: e + "spine/pickBonus/pick_bonus_p_noPng.json",
                    fullPath: e + "spine/pickBonus/pick_bonus_p_noPng.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus_jpg",
                    atlas: e + "spine/pickBonus/coin_pick_bonus_jpg.json",
                    fullPath: e + "spine/pickBonus/coin_pick_bonus_jpg.jpg"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus_p_blue",
                    atlas: e + "spine/pickBonus/coin_pick_bonus_p_blue.json",
                    fullPath: e + "spine/pickBonus/coin_pick_bonus_p_blue.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus_p_green",
                    atlas: e + "spine/pickBonus/coin_pick_bonus_p_green.json",
                    fullPath: e + "spine/pickBonus/coin_pick_bonus_p_green.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus_p_magic_sign",
                    atlas: e + "spine/pickBonus/coin_pick_bonus_p_magic_sign.json",
                    fullPath: e + "spine/pickBonus/coin_pick_bonus_p_magic_sign.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus_p_red",
                    atlas: e + "spine/pickBonus/coin_pick_bonus_p_red.json",
                    fullPath: e + "spine/pickBonus/coin_pick_bonus_p_red.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus_p_violet",
                    atlas: e + "spine/pickBonus/coin_pick_bonus_p_violet.json",
                    fullPath: e + "spine/pickBonus/coin_pick_bonus_p_violet.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "coin_pick_bonus_p_other",
                    atlas: e + "spine/pickBonus/coin_pick_bonus_p_other.json",
                    fullPath: e + "spine/pickBonus/coin_pick_bonus_p_other.png"
                }), {
                    assets: n,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1301: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/",
                    t = new nge.App.DjGameBase.Tpl.States.Play;
                return t.styles = nge.Lib.Helper.mergeObjs(t.styles, {
                    ".album .backgroundPivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .backgroundPivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    },
                    ".album .blinkerPivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .blinkerPivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    },
                    ".album .logoPivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .logoPivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    },
                    ".album .spinificationAboveAnimationPivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .spinificationAboveAnimationPivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    },
                    ".album .slotMachineFramePivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .slotMachineFramePivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    },
                    ".album .childrenPortraitAnimationPivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .childrenPortraitAnimationPivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    },
                    ".album .reelsBorderPivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .reelsBorderPivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    },
                    ".album .slotMachineFrameContainer": {
                        alignX: "center",
                        alignY: "center"
                    },
                    ".portrait .slotMachineFrameContainer": {
                        alignX: "center",
                        alignY: "top"
                    },
                    ".album .blinkerContainer": {
                        alignX: "center",
                        x: -960,
                        y: 0,
                        scaleX: 1,
                        scaleY: 1
                    },
                    ".portrait .blinkerContainer": {
                        alignX: "center",
                        x: -720,
                        y: 405,
                        scaleX: .75,
                        scaleY: .75
                    },
                    ".album .spinificationAboveAnimationContainer": {
                        alignX: "center",
                        x: -960,
                        y: 0,
                        scaleX: 1,
                        scaleY: 1
                    },
                    ".portrait .spinificationAboveAnimationContainer": {
                        alignX: "center",
                        x: -720,
                        y: 405,
                        scaleX: .75,
                        scaleY: .75
                    },
                    ".album .slotMachineFrames": {
                        x: -960,
                        y: -540
                    },
                    ".portrait .slotMachineFrames": {
                        x: -960,
                        y: 345
                    },
                    ".album .maxiText": {
                        x: 430,
                        y: 95,
                        style: {
                            font: "28pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".portrait .maxiText": {
                        x: 560,
                        y: 110,
                        style: {
                            font: "24pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".album .maxiTextValueAlbum": {
                        isVisible: !0
                    },
                    ".portrait .maxiTextValueAlbum": {
                        isVisible: !1
                    },
                    ".album .maxiTextValuePortrait": {
                        isVisible: !1
                    },
                    ".portrait .maxiTextValuePortrait": {
                        isVisible: !0
                    },
                    ".album .majorText": {
                        x: 785,
                        y: 95,
                        style: {
                            font: "28pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".portrait .majorText": {
                        x: 825,
                        y: 110,
                        style: {
                            font: "24pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".album .majorTextValueAlbum": {
                        isVisible: !0
                    },
                    ".portrait .majorTextValueAlbum": {
                        isVisible: !1
                    },
                    ".album .majorTextValuePortrait": {
                        isVisible: !1
                    },
                    ".portrait .majorTextValuePortrait": {
                        isVisible: !0
                    },
                    ".album .minorText": {
                        x: 1138,
                        y: 95,
                        style: {
                            font: "28pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".portrait .minorText": {
                        x: 1090,
                        y: 110,
                        style: {
                            font: "24pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".album .minorTextValueAlbum": {
                        isVisible: !0
                    },
                    ".portrait .minorTextValueAlbum": {
                        isVisible: !1
                    },
                    ".album .minorTextValuePortrait": {
                        isVisible: !1
                    },
                    ".portrait .minorTextValuePortrait": {
                        isVisible: !0
                    },
                    ".album .miniText": {
                        x: 1490,
                        y: 95,
                        style: {
                            font: "28pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".portrait .miniText": {
                        x: 1365,
                        y: 110,
                        style: {
                            font: "24pt futuraptheavy",
                            fill: 16777215
                        }
                    },
                    ".album .miniTextValueAlbum": {
                        isVisible: !0
                    },
                    ".portrait .miniTextValueAlbum": {
                        isVisible: !1
                    },
                    ".album .miniTextValuePortrait": {
                        isVisible: !1
                    },
                    ".portrait .miniTextValuePortrait": {
                        isVisible: !0
                    },
                    ".album .reelsBorderContainer": {
                        x: -2,
                        y: 124
                    },
                    ".portrait .reelsBorderContainer": {
                        x: 0,
                        y: 425
                    },
                    ".album .reelsBgScaleContainer": {
                        scaleX: 1,
                        scaleY: 1
                    },
                    ".portrait .reelsBgScaleContainer": {
                        scaleX: .75,
                        scaleY: .75
                    },
                    ".album .splashAnimationContainer": {
                        alignX: "center",
                        x: -960,
                        isVisible: !0
                    },
                    ".portrait .splashAnimationContainer": {
                        alignX: "center",
                        x: -960,
                        isVisible: !1
                    },
                    ".album .childrenPortraitAnimationContainer": {
                        isVisible: !1
                    },
                    ".portrait .childrenPortraitAnimationContainer": {
                        isVisible: !0
                    },
                    ".album .slotMachineFramesMain": {
                        isVisible: !0
                    },
                    ".portrait .slotMachineFramesMain": {
                        isVisible: !1
                    },
                    ".album .slotMachineFramesVertical": {
                        isVisible: !1
                    },
                    ".portrait .slotMachineFramesVertical": {
                        isVisible: !0
                    }
                }), t.assets.contents.push({
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameTop",
                    fullPath: e + "playarea/slotMachineFrameTop.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameTop_vertical",
                    fullPath: e + "playarea/slotMachineFrameTop_vertical.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "decorTopLogoVertical",
                    fullPath: e + "playarea/decorTopLogoVertical.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameLeft_vertical",
                    fullPath: e + "playarea/slotMachineFrameLeft_vertical.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameRight_vertical",
                    fullPath: e + "playarea/slotMachineFrameRight_vertical.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameBottom_vertical",
                    fullPath: e + "playarea/slotMachineFrameBottom_vertical.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameLeft",
                    fullPath: e + "playarea/slotMachineFrameLeft.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "jackVert",
                    fullPath: e + "playarea/jackVert.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "jackHor",
                    fullPath: e + "playarea/jackHor.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "slotMachineFrameRight",
                    fullPath: e + "playarea/slotMachineFrameRight.png"
                }), nge.Lib.Helper.tplObjFind(t, "slotMachineFrameContainer").class = "slotMachineFrameContainer", nge.Lib.Helper.tplSetContainerContents(t, "slotMachineFrameContainer", [{
                    type: mt.objects.GROUP,
                    name: "slotMachineFramesShakeContainer",
                    contents: [{
                        type: mt.objects.GROUP,
                        name: "slotMachineFrames",
                        class: "slotMachineFrames",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "maxiTextValueAlbum",
                            class: "maxiTextValueAlbum",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "maxiText",
                                class: "maxiTextValue",
                                x: 430,
                                y: 95,
                                style: {
                                    font: "28pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "1000000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "maxiTextValuePortrait",
                            class: "maxiTextValuePortrait",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "maxiText",
                                class: "maxiTextValueAmount",
                                x: 550,
                                y: 100,
                                style: {
                                    font: "24pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "1000000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }, {
                                type: mt.objects.TEXT,
                                name: "maxiText",
                                class: "maxiTextValueCurrency",
                                x: 550,
                                y: 130,
                                style: {
                                    font: "22pt futuraptheavy",
                                    fill: 16436814
                                },
                                text: "1000000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.TEXT,
                            name: "creditsMaxiText",
                            class: "maxiText creditsMaxiTextValue",
                            text: "1000000",
                            maxWidth: 220,
                            anchorX: .5,
                            anchorY: .5
                        }, {
                            type: mt.objects.GROUP,
                            name: "majorTextValueAlbum",
                            class: "majorTextValueAlbum",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "majorText",
                                class: "majorTextValue",
                                x: 785,
                                y: 95,
                                style: {
                                    font: "28pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "100000",
                                maxWidth: 240,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "majorTextValuePortrait",
                            class: "majorTextValuePortrait",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "majorText",
                                class: "majorTextValueAmount",
                                x: 825,
                                y: 100,
                                style: {
                                    font: "24pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "100000",
                                maxWidth: 240,
                                anchorX: .5,
                                anchorY: .5
                            }, {
                                type: mt.objects.TEXT,
                                name: "majorText",
                                class: "majorTextValueCurrency",
                                x: 825,
                                y: 130,
                                style: {
                                    font: "22pt futuraptheavy",
                                    fill: 16436814
                                },
                                text: "100000",
                                maxWidth: 240,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.TEXT,
                            name: "creditsMajorText",
                            class: "majorText creditsMajorTextValue",
                            text: "100000",
                            maxWidth: 240,
                            anchorX: .5,
                            anchorY: .5
                        }, {
                            type: mt.objects.GROUP,
                            name: "minorTextValueAlbum",
                            class: "minorTextValueAlbum",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "minorText",
                                class: "minorTextValue",
                                x: 1138,
                                y: 95,
                                style: {
                                    font: "28pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "10000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "minorTextValuePortrait",
                            class: "minorTextValuePortrait",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "minorText",
                                class: "minorTextValueAmount",
                                x: 1090,
                                y: 100,
                                style: {
                                    font: "24pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "10000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }, {
                                type: mt.objects.TEXT,
                                name: "minorText",
                                class: "minorTextValueCurrency",
                                x: 1090,
                                y: 130,
                                style: {
                                    font: "22pt futuraptheavy",
                                    fill: 16436814
                                },
                                text: "10000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.TEXT,
                            name: "creditsMinorText",
                            class: "minorText creditsMinorTextValue",
                            text: "10000",
                            maxWidth: 220,
                            anchorX: .5,
                            anchorY: .5
                        }, {
                            type: mt.objects.GROUP,
                            name: "miniTextValueAlbum",
                            class: "miniTextValueAlbum",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "miniText",
                                class: "miniTextValue",
                                x: 1490,
                                y: 95,
                                style: {
                                    font: "28pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "1000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "miniTextValuePortrait",
                            class: "miniTextValuePortrait",
                            contents: [{
                                type: mt.objects.TEXT,
                                name: "miniText",
                                class: "miniTextValueAmount",
                                x: 1365,
                                y: 100,
                                style: {
                                    font: "24pt futuraptheavy",
                                    fill: 16777215
                                },
                                text: "1000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }, {
                                type: mt.objects.TEXT,
                                name: "miniText",
                                class: "miniTextValueCurrency",
                                x: 1365,
                                y: 130,
                                style: {
                                    font: "22pt futuraptheavy",
                                    fill: 16436814
                                },
                                text: "1000",
                                maxWidth: 220,
                                anchorX: .5,
                                anchorY: .5
                            }]
                        }, {
                            type: mt.objects.TEXT,
                            name: "creditsMiniText",
                            class: "miniText creditsMiniTextValue",
                            text: "1000",
                            maxWidth: 220,
                            anchorX: .5,
                            anchorY: .5
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineFramesMain",
                            class: "slotMachineFramesMain",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "jackHor",
                                assetKey: "jackHor",
                                scaleX: 1.25,
                                scaleY: 1.25,
                                x: 293,
                                y: -1
                            }, {
                                type: mt.objects.IMAGE,
                                name: "slotMachineFrameTop",
                                assetKey: "slotMachineFrameTop",
                                scaleX: 1.25,
                                scaleY: 1.25,
                                x: -299,
                                y: 0
                            }, {
                                type: mt.objects.IMAGE,
                                name: "slotMachineFrameLeft",
                                assetKey: "slotMachineFrameLeft",
                                x: 105,
                                y: 200
                            }, {
                                type: mt.objects.IMAGE,
                                name: "slotMachineFrameRight",
                                assetKey: "slotMachineFrameRight",
                                x: 1655,
                                y: 200
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineFramesVertical",
                            class: "slotMachineFramesVertical",
                            x: 240,
                            y: 27,
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "decorTopLogoVertical",
                                assetKey: "decorTopLogoVertical",
                                x: -290,
                                y: -230
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineFrameTop",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "jackVert",
                                    assetKey: "jackVert",
                                    x: 176,
                                    y: 1
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameTop_vertical",
                                    assetKey: "slotMachineFrameTop_vertical",
                                    x: -234,
                                    y: 0
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameLeft_vertical",
                                    assetKey: "slotMachineFrameLeft_vertical",
                                    x: 179,
                                    y: 306
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameRight_vertical",
                                    assetKey: "slotMachineFrameRight_vertical",
                                    x: 1244,
                                    y: 306
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "slotMachineFrameBottom_vertical",
                                    assetKey: "slotMachineFrameBottom_vertical",
                                    x: 194,
                                    y: 710
                                }]
                            }]
                        }]
                    }]
                }]), nge.Lib.Helper.tplObjFind(t, "spinificationAboveAnimationContainer").class = "spinificationAboveAnimationContainer", nge.Lib.Helper.tplSpliceObjectBelow(t, "spinificationAboveAnimationContainer", {
                    type: mt.objects.GROUP,
                    name: "splashAnimationContainer",
                    class: "splashAnimationContainer"
                }), nge.Lib.Helper.tplSpliceObjectAbove(t, "logoContainer", {
                    type: mt.objects.GROUP,
                    name: "childrenPortraitAnimationPivotContainer",
                    class: "childrenPortraitAnimationPivotContainer",
                    contents: [{
                        type: mt.objects.GROUP,
                        name: "childrenPortraitAnimationContainer",
                        class: "childrenPortraitAnimationContainer",
                        x: "50%",
                        y: 975,
                        contents: [{
                            type: mt.objects.SPINE,
                            name: "boyPortraitBackgroundAnimation",
                            assetKey: "childrenPortrait_animation",
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1
                        }, {
                            type: mt.objects.SPINE,
                            name: "girlPortraitBackgroundAnimation",
                            assetKey: "childrenPortrait_animation",
                            anchorX: .5,
                            anchorY: .5,
                            isVisible: !1
                        }]
                    }]
                }), nge.Lib.Helper.tplSetContainerContents(t, "logoPortraitContainer", [{
                    type: mt.objects.GROUP,
                    name: "logoAnimationContainer",
                    y: 980,
                    contents: [{
                        type: mt.objects.SPINE,
                        name: "logoPortraitBackgroundAnimation",
                        assetKey: "logo_animation",
                        y: 0,
                        anchorX: .5,
                        anchorY: .5,
                        isVisible: !1
                    }]
                }]), nge.Lib.Helper.tplObjFind(t, "blinkerContainer").class = "blinkerContainer", (e = nge.Lib.Helper.tplObjFind(t, "reelsBorderContainer")).alignX = "center", e.alignY = "top", e.class = "reelsBorderContainer", nge.Lib.Helper.tplSetContainerContents(t, "reelsBorderContainer", [{
                    type: mt.objects.GROUP,
                    name: "reelsBgShakeContainer",
                    contents: [{
                        type: mt.objects.GROUP,
                        name: "reelsBgScaleContainer",
                        class: "reelsBgScaleContainer",
                        contents: [{
                            type: mt.objects.IMAGE,
                            name: "reelsBg",
                            assetKey: "reelsBg",
                            anchorX: .5,
                            anchorY: 0
                        }]
                    }]
                }]), t
            }
        },
        1302: function(e, t) {
            nge.App[nge.appNS].Tpl.States.PickBonus = function() {
                var e = nge.appPath + "img/";
                return {
                    styles: {
                        ".album .picksTextPivotContainer": {
                            minY: 0,
                            y: 0,
                            alignY: "top"
                        },
                        ".portrait .picksTextPivotContainer": {
                            minY: 0,
                            y: -960,
                            alignY: "center"
                        },
                        ".album .gameLogicParentPivotContainer": {
                            minY: 0,
                            y: 0,
                            alignY: "top"
                        },
                        ".portrait .gameLogicParentPivotContainer": {
                            minY: 0,
                            y: -960,
                            alignY: "center"
                        },
                        ".album .backgroundPivotContainer": {
                            minY: 0,
                            y: 0,
                            alignY: "top"
                        },
                        ".portrait .backgroundPivotContainer": {
                            minY: 0,
                            y: -960,
                            alignY: "center"
                        },
                        ".album .playParentGroup": {
                            sHeight: "100%"
                        },
                        ".portrait.mobile.Android .playParentGroup": {
                            sHeight: "100%"
                        },
                        ".portrait.mobile.iOS.Chrome .playParentGroup": {
                            sHeight: "100%"
                        },
                        ".portrait.mobile.iOS.Safari .playParentGroup": {
                            sHeight: "100%"
                        },
                        ".portrait.mobile.iOS.iPhone.Safari .playParentGroup": {
                            sHeight: "90%"
                        },
                        ".coverIosSafari": {
                            isVisible: !1
                        },
                        ".portrait.mobile.iOS.Safari .coverIosSafari": {
                            isVisible: !1
                        },
                        ".portrait.mobile.iOS.iPhone.Safari .coverIosSafari": {
                            isVisible: !0
                        },
                        ".album .picksTextContainer": {
                            alignY: "bottom"
                        },
                        ".portrait .picksTextContainer": {
                            alignY: "top"
                        },
                        ".album .picksLeftText": {
                            x: -640,
                            y: -70,
                            style: {
                                font: "38pt futuraptheavy",
                                fill: 16777215
                            }
                        },
                        ".portrait .picksLeftText": {
                            x: 0,
                            y: 70,
                            style: {
                                font: "38pt futuraptheavy",
                                fill: 16777215
                            }
                        },
                        ".album .picksBonusTextBg": {
                            x: -650,
                            y: -72
                        },
                        ".portrait .picksBonusTextBg": {
                            x: 0,
                            y: 70
                        },
                        ".album .disabledMultipliersAlbumContainer": {
                            isVisible: !0
                        },
                        ".portrait .disabledMultipliersAlbumContainer": {
                            isVisible: !1
                        },
                        ".album .disabledMultipliersPortraitContainer": {
                            isVisible: !1
                        },
                        ".portrait .disabledMultipliersPortraitContainer": {
                            isVisible: !0
                        },
                        ".album .mainAnimationAlbumContainer": {
                            isVisible: !0
                        },
                        ".portrait .mainAnimationAlbumContainer": {
                            isVisible: !1
                        },
                        ".album .flyAnimationsAlbumContainer": {
                            isVisible: !0
                        },
                        ".portrait .flyAnimationsAlbumContainer": {
                            isVisible: !1
                        },
                        ".album .flyAnimationsPortraitContainer": {
                            isVisible: !1
                        },
                        ".portrait .flyAnimationsPortraitContainer": {
                            isVisible: !0
                        },
                        ".album .mainAnimationPortraitContainer": {
                            isVisible: !1
                        },
                        ".portrait .mainAnimationPortraitContainer": {
                            isVisible: !0
                        },
                        ".album .backgroundAnimationAlbumContainer": {
                            isVisible: !0
                        },
                        ".portrait .backgroundAnimationAlbumContainer": {
                            isVisible: !1
                        },
                        ".album .backgroundAnimationPortraitContainer": {
                            isVisible: !1
                        },
                        ".portrait .backgroundAnimationPortraitContainer": {
                            isVisible: !0
                        },
                        ".album .bonusBg": {
                            isVisible: !0
                        },
                        ".portrait .bonusBg": {
                            isVisible: !1
                        },
                        ".album .bonusBgVertical": {
                            isVisible: !1
                        },
                        ".portrait .bonusBgVertical": {
                            isVisible: !0
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "picksBonusTextBg",
                            fullPath: e + "picksBonusTextBg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "coinItemButton",
                            fullPath: e + "coin_button.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "maxiStatic",
                            fullPath: e + "maxi_static.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "majorStatic",
                            fullPath: e + "major_static.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "minorStatic",
                            fullPath: e + "minor_static.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "miniStatic",
                            fullPath: e + "mini_static.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pickbonus_emmiter_particle",
                            fullPath: e + "emitter/pickbonus_emmiter_particle.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "pickbonus_emitter_flare",
                            fullPath: e + "emitter/pickbonus_emitter_flare.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "coverIosSafari",
                            class: "coverIosSafari",
                            alignX: "center",
                            alignY: "bottom",
                            sWidth: "100%",
                            sHeight: "100%",
                            contents: [{
                                type: mt.objects.IMAGE,
                                assetKey: "black-bg",
                                anchorX: .5,
                                anchorY: 1,
                                sWidth: "100%",
                                sHeight: "10%"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "playParentGroup",
                            class: "playParentGroup",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "popupsContainer",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "popupContainer"
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "intro"
                            }, {
                                type: mt.objects.GROUP,
                                name: "gameLogicParentPivotContainer",
                                class: "gameLogicParentPivotContainer",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "gameLogicParentContainer",
                                    alignX: "center",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "gameLogicContainer",
                                        contents: [{
                                            type: mt.objects.GROUP,
                                            name: "particlesContainer",
                                            isVisible: !0,
                                            alignX: "left",
                                            x: -960,
                                            contents: []
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "flyAnimationsAlbumContainer",
                                            class: "flyAnimationsAlbumContainer",
                                            alignX: "left",
                                            x: -960
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "flyAnimationsPortraitContainer",
                                            class: "flyAnimationsPortraitContainer",
                                            alignX: "left",
                                            x: -960
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "matchCardStaticAlbumContainer",
                                            isVisible: !1,
                                            alignX: "left",
                                            x: -960,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi0static_album",
                                                x: 258,
                                                y: 215,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi1static_album",
                                                x: 310,
                                                y: 215,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi2static_album",
                                                x: 362,
                                                y: 215,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi3static_album",
                                                x: 258,
                                                y: 267,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi4static_album",
                                                x: 310,
                                                y: 267,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi5static_album",
                                                x: 362,
                                                y: 267,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major0static_album",
                                                x: 258,
                                                y: 439,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major1static_album",
                                                x: 310,
                                                y: 439,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major2static_album",
                                                x: 362,
                                                y: 439,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major3static_album",
                                                x: 285,
                                                y: 491,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major4static_album",
                                                x: 337,
                                                y: 491,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor0static_album",
                                                x: 233,
                                                y: 676,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor1static_album",
                                                x: 285,
                                                y: 676,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor2static_album",
                                                x: 337,
                                                y: 676,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor3static_album",
                                                x: 389,
                                                y: 676,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.GROUP,
                                                name: "matchCardMiniStatic",
                                                y: -5,
                                                contents: [{
                                                    type: mt.objects.IMAGE,
                                                    assetKey: "miniStatic",
                                                    name: "mini0static_album",
                                                    x: 258,
                                                    y: 900,
                                                    anchorY: .5,
                                                    anchorX: .5,
                                                    isVisible: !1
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    assetKey: "miniStatic",
                                                    name: "mini1static_album",
                                                    x: 310,
                                                    y: 900,
                                                    anchorY: .5,
                                                    anchorX: .5,
                                                    isVisible: !1
                                                }, {
                                                    type: mt.objects.IMAGE,
                                                    assetKey: "miniStatic",
                                                    name: "mini2static_album",
                                                    x: 362,
                                                    y: 900,
                                                    anchorY: .5,
                                                    anchorX: .5,
                                                    isVisible: !1
                                                }]
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "matchCardStaticPortraitContainer",
                                            isVisible: !1,
                                            alignX: "left",
                                            x: -960,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi0static_portrait",
                                                x: 502,
                                                y: 277,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi1static_portrait",
                                                x: 552,
                                                y: 277,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi2static_portrait",
                                                x: 602,
                                                y: 277,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi3static_portrait",
                                                x: 502,
                                                y: 327,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi4static_portrait",
                                                x: 552,
                                                y: 327,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "maxiStatic",
                                                name: "maxi5static_portrait",
                                                x: 602,
                                                y: 327,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major0static_portrait",
                                                x: 770,
                                                y: 277,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major1static_portrait",
                                                x: 820,
                                                y: 277,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major2static_portrait",
                                                x: 870,
                                                y: 277,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major3static_portrait",
                                                x: 795,
                                                y: 327,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "majorStatic",
                                                name: "major4static_portrait",
                                                x: 845,
                                                y: 327,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor0static_portrait",
                                                x: 1014,
                                                y: 302,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor1static_portrait",
                                                x: 1064,
                                                y: 302,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor2static_portrait",
                                                x: 1114,
                                                y: 302,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "minorStatic",
                                                name: "minor3static_portrait",
                                                x: 1164,
                                                y: 302,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "miniStatic",
                                                name: "mini0static_portrait",
                                                x: 1311,
                                                y: 302,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "miniStatic",
                                                name: "mini1static_portrait",
                                                x: 1361,
                                                y: 302,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "miniStatic",
                                                name: "mini2static_portrait",
                                                x: 1411,
                                                y: 302,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "coinsStaticAlbumContainer",
                                            isVisible: !1,
                                            alignX: "left",
                                            x: -960,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin0static_album",
                                                x: 650,
                                                y: 220,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin1static_album",
                                                x: 830,
                                                y: 220,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin2static_album",
                                                x: 1010,
                                                y: 220,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin3static_album",
                                                x: 1190,
                                                y: 220,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin4static_album",
                                                x: 1370,
                                                y: 220,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin5static_album",
                                                x: 1550,
                                                y: 220,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin6static_album",
                                                x: 1730,
                                                y: 220,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin7static_album",
                                                x: 650,
                                                y: 395,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin8static_album",
                                                x: 830,
                                                y: 395,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin9static_album",
                                                x: 1010,
                                                y: 395,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin10static_album",
                                                x: 1190,
                                                y: 395,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin11static_album",
                                                x: 1370,
                                                y: 395,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin12static_album",
                                                x: 1550,
                                                y: 395,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin13static_album",
                                                x: 1730,
                                                y: 395,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin14static_album",
                                                x: 650,
                                                y: 570,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin15static_album",
                                                x: 830,
                                                y: 570,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin16static_album",
                                                x: 1010,
                                                y: 570,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin17static_album",
                                                x: 1190,
                                                y: 570,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin18static_album",
                                                x: 1370,
                                                y: 570,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin19static_album",
                                                x: 1550,
                                                y: 570,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin20static_album",
                                                x: 1730,
                                                y: 570,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin21static_album",
                                                x: 650,
                                                y: 745,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin22static_album",
                                                x: 830,
                                                y: 745,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin23static_album",
                                                x: 1010,
                                                y: 745,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin24static_album",
                                                x: 1190,
                                                y: 745,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin25static_album",
                                                x: 1370,
                                                y: 745,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin26static_album",
                                                x: 1550,
                                                y: 745,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin27static_album",
                                                x: 1730,
                                                y: 745,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin28static_album",
                                                x: 650,
                                                y: 920,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin29static_album",
                                                x: 830,
                                                y: 920,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin30static_album",
                                                x: 1010,
                                                y: 920,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin31static_album",
                                                x: 1190,
                                                y: 920,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin32static_album",
                                                x: 1370,
                                                y: 920,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin33static_album",
                                                x: 1550,
                                                y: 920,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin34static_album",
                                                x: 1730,
                                                y: 920,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "coinsStaticPortraitContainer",
                                            isVisible: !1,
                                            alignX: "left",
                                            x: -960,
                                            contents: [{
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin0static_portrait",
                                                x: 580,
                                                y: 565,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin1static_portrait",
                                                x: 580,
                                                y: 757,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin2static_portrait",
                                                x: 580,
                                                y: 949,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin3static_portrait",
                                                x: 580,
                                                y: 1141,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin4static_portrait",
                                                x: 580,
                                                y: 1333,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin5static_portrait",
                                                x: 580,
                                                y: 1525,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin6static_portrait",
                                                x: 580,
                                                y: 1717,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin7static_portrait",
                                                x: 768,
                                                y: 565,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin8static_portrait",
                                                x: 768,
                                                y: 757,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin9static_portrait",
                                                x: 768,
                                                y: 949,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin10static_portrait",
                                                x: 765,
                                                y: 1141,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin11static_portrait",
                                                x: 765,
                                                y: 1333,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin12static_portrait",
                                                x: 765,
                                                y: 1525,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin13static_portrait",
                                                x: 765,
                                                y: 1717,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin14static_portrait",
                                                x: 955,
                                                y: 565,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin15static_portrait",
                                                x: 955,
                                                y: 757,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin16static_portrait",
                                                x: 955,
                                                y: 949,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin17static_portrait",
                                                x: 955,
                                                y: 1141,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin18static_portrait",
                                                x: 955,
                                                y: 1333,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin19static_portrait",
                                                x: 955,
                                                y: 1525,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin20static_portrait",
                                                x: 955,
                                                y: 1717,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin21static_portrait",
                                                x: 1145,
                                                y: 565,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin22static_portrait",
                                                x: 1145,
                                                y: 757,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin23static_portrait",
                                                x: 1145,
                                                y: 949,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin24static_portrait",
                                                x: 1145,
                                                y: 1141,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin25static_portrait",
                                                x: 1145,
                                                y: 1333,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin26static_portrait",
                                                x: 1145,
                                                y: 1525,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin27static_portrait",
                                                x: 1145,
                                                y: 1717,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin28static_portrait",
                                                x: 1335,
                                                y: 565,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin29static_portrait",
                                                x: 1335,
                                                y: 757,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin30static_portrait",
                                                x: 1335,
                                                y: 949,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin31static_portrait",
                                                x: 1335,
                                                y: 1141,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin32static_portrait",
                                                x: 1335,
                                                y: 1333,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin33static_portrait",
                                                x: 1335,
                                                y: 1525,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.IMAGE,
                                                assetKey: "coinItemButton",
                                                name: "coin34static_portrait",
                                                x: 1335,
                                                y: 1717,
                                                anchorY: .5,
                                                anchorX: .5,
                                                isVisible: !1
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "matchCardContainer",
                                            isVisible: !1
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "openAnimationsContainer",
                                            isVisible: !1
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "buttonsContainer",
                                            isVisible: !1
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "idleAnimationsContainer",
                                            isVisible: !1
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "mainAnimationAlbumContainer",
                                            class: "mainAnimationAlbumContainer",
                                            contents: [{
                                                type: mt.objects.SPINE,
                                                name: "jackpotWinAlbumAnimation",
                                                assetKey: "pick_bonus_album",
                                                x: 0,
                                                y: "50%",
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.SPINE,
                                                name: "jackpotIdleAlbumAnimation",
                                                assetKey: "pick_bonus_album",
                                                x: 0,
                                                y: "50%",
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.SPINE,
                                                name: "pickBonusMainAlbumAnimation",
                                                assetKey: "pick_bonus_album",
                                                x: 0,
                                                y: "50%",
                                                isVisible: !1
                                            }]
                                        }, {
                                            type: mt.objects.GROUP,
                                            name: "mainAnimationPortraitContainer",
                                            class: "mainAnimationPortraitContainer",
                                            y: 960,
                                            contents: [{
                                                type: mt.objects.SPINE,
                                                name: "jackpotWinPortraitAnimation",
                                                assetKey: "pick_bonus_portrait",
                                                x: 0,
                                                y: 0,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.SPINE,
                                                name: "jackpotIdlePortraitAnimation",
                                                assetKey: "pick_bonus_portrait",
                                                x: 0,
                                                y: 0,
                                                isVisible: !1
                                            }, {
                                                type: mt.objects.SPINE,
                                                name: "pickBonusMainPortraitAnimation",
                                                assetKey: "pick_bonus_portrait",
                                                x: 0,
                                                y: 0,
                                                isVisible: !1
                                            }]
                                        }]
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "backgroundPivotContainer",
                                class: "backgroundPivotContainer",
                                contents: [{
                                    type: mt.objects.GROUP,
                                    name: "backgroundContainer",
                                    contents: [{
                                        type: mt.objects.GROUP,
                                        name: "backgroundAnimationAlbumContainer",
                                        class: "backgroundAnimationAlbumContainer",
                                        contents: [{
                                            type: mt.objects.SPINE,
                                            name: "backgroundAlbumAnimation",
                                            assetKey: "pick_bonus_album",
                                            x: "50%",
                                            y: "50%",
                                            isVisible: !1
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "backgroundAnimationPortraitContainer",
                                        class: "backgroundAnimationPortraitContainer",
                                        alignX: "center",
                                        contents: [{
                                            type: mt.objects.SPINE,
                                            name: "backgroundPortraitAnimation",
                                            assetKey: "pick_bonus_portrait",
                                            x: 0,
                                            y: 0,
                                            isVisible: !1
                                        }]
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "bonusBg",
                                        class: "bonusBg",
                                        assetKey: "bonusBg",
                                        alignX: "center",
                                        alignY: "center",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 0,
                                        y: 0,
                                        sWidth: "100%",
                                        sHeight: "100%",
                                        sType: "circumscribed"
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "bonusBgVertical",
                                        class: "bonusBgVertical",
                                        assetKey: "bonusBgVertical",
                                        alignX: "center",
                                        y: 960,
                                        anchorX: .5,
                                        anchorY: .5,
                                        scaleX: 1.25,
                                        scaleY: 1.25
                                    }]
                                }]
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "htmlObjectsGroup",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "statusbarContainer"
                            }]
                        }]
                    }
                }
            }
        },
        1303: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1304: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1305: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.DjGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("pickBonus")
            }))
        },
        1306: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.PickBonus = Class.extend((function() {
                function e(e) {
                    "fakeLoaderBonusToGame" === e && (nge.statesManager.display("play"), nge.localData.set("zenZenCash.spaceHandler.isBlocked", !0), nge.observer.add("StatesManager.create.end", (function() {
                        if (nge.localData.get("layersSwitcher.fakeLoader.captured")) {
                            var e = nge.objects.create("loadingBarContainer"),
                                t = nge.find("^loadingScreenBlack", e);
                            t.attr("sWidth", "100%"), t.attr("sHeight", "100%"), (e = nge.find("^screenNameText", e)) && (e.text = "")
                        }
                        n(), nge.observer.remove("StatesManager.create.end", !1, "playStateAfterPickBonus", !0)
                    }), "playStateAfterPickBonus", !0))
                }
                var t = function() {
                        nge.localData.set("pickBonusWon", !1), nge.localData.set("bonusWon", !1), nge.localData.set("slotMachine.lastResponse", !1), nge.localData.set("slotMachine.state", "Ready")
                    },
                    n = function() {
                        if (nge.localData.get("needShowFreespins") && nge.localData.get("freespinsCountAfterPickBonus")) {
                            var e = +nge.localData.get("freespinsCountAfterPickBonus"),
                                t = nge.localData.get("freespin");
                            t.spinsLeft = e, t.spinsTotal = e, nge.localData.set("freespin", t), nge.localData.set("bonusGame.freespins", e)
                        } else nge.localData.set("slotMachine.lastResponse", !1);
                        nge.localData.set("slotMachine.slotWin.lineWinAmounts", !1), nge.rafSetTimeout((function() {
                            nge.localData.set("zenZenCash.spaceHandler.isBlocked", !1)
                        }), 1e3)
                    },
                    a = function() {
                        nge.localData.set("pickBonusWon", !1), nge.localData.set("bonusWon", !1), nge.localData.set("needShowFreespins", !1), nge.localData.set("freespinsCountAfterPickBonus", !1), nge.localData.set("zenZenCash.spaceHandler.isBlocked", !1)
                    };
                this.subscribe = function() {
                    nge.observer.add("pickBonus.endGame", t, !1, !0), nge.observer.add("layersSwitcher.animationComplete", e, !1, !0), nge.observer.add("Transport.close", a, !1, !0), nge.observer.add("pickBonus.sendRequest", (function(e) {
                        e = nge.App.getInstance("Mlm.Transport.Models.PickBonusItemRequest", !1, {
                            result: !0,
                            data: {
                                index: e
                            }
                        }), nge.transport.send(e)
                    }), !1, !0), nge.observer.add("transportMessage.PickBonusItemResponse", (function(e) {
                        e = e.data, nge.localData.set("bonusGame.lastResponse", e), nge.observer.fire("pickBonus.actionResponse", e)
                    }), !1, !0)
                }
            }))
        },
        1307: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.DjGameBase.Mlm.Brain.Slot.extend((function() {
                function e(e) {
                    "fakeLoaderGameToBonus" === e && nge.statesManager.display("pickBonus")
                }

                function t(e) {
                    "game" === e && nge.localData.get("needShowFreespins") && nge.localData.get("freespinsCountAfterPickBonus") && (nge.localData.set("slotMachine.state", "FreeSpins"), e = +nge.localData.get("freespinsCountAfterPickBonus"), nge.observer.fire("freespin.start", e), nge.observer.fire("popup.show", {
                        popupName: "freespinStartPopup",
                        layerName: "freespinStartPopup",
                        onClick: function() {
                            nge.observer.fire("layersSwitcher.show", "gameFreeSpin"), nge.observer.fire("freespin.generateGoldReels")
                        },
                        freespinsCounter: e
                    }), nge.localData.set("needShowFreespins"))
                }
                var n, a = this;
                this.canIntrigue = !0, this._wasPickBonus = !1;
                var s = ["3", "4", "5"],
                    o = a.super.spinCompleteHandler.bind(a);
                this.spinCompleteHandler = function() {
                    var e = a.getLastData(),
                        t = function() {
                            nge.observer.fire("zenZenCash.slot.goldReels.check", {
                                lastData: e
                            }, 1)
                        },
                        n = e.spinResult.rows;
                    if (nge.localData.get("freespin.inProgress"))
                        for (var s = 0; s < n.length; s++) nge.observer.fire("slotMachine.setSymbol", {
                            coords: [0, s],
                            key: n[s][0]
                        });
                    a.checkIfBonus() ? (a.triggerRoutineCheck(e), nge.rafSetTimeout((function() {
                        t()
                    }), 1e3)) : t()
                };
                var i = function() {
                    nge.rafSetTimeout((function() {
                        o()
                    }), 10)
                };
                this.runBonusRoutine = function(e) {
                    return nge.localData.set("bonusWon", !0), nge.localData.set("slotMachineResponseBonusSpin", !0), "ReSpins" === e.state ? a.runBonusGame() : "PickBonus" === e.state ? (a.bonusGameTriggered = !0, nge.localData.set("pickBonusWon", !0)) : "FreeSpins" !== e.state || nge.localData.get("freespin.inProgress") ? nge.localData.set("slotMachineResponseBonusSpin", !1) : (a.bonusGameTriggered = !0, a.runBonusGame()), !0
                }, this.showPreBonusPopup = function() {
                    nge.localData.get("pickBonusWon") && nge.observer.fire("popup.show", {
                        popupName: "pickBonusStartPopup",
                        onHide: function() {
                            nge.observer.fire("layersSwitcher.show", "fakeLoaderGameToBonus", 1)
                        }
                    }), nge.observer.fire("pickBonus.start")
                }, this.tryToChangeQuery = function() {
                    if (a.bonusGameTriggered) {
                        var e = nge.Lib.Helper.jsObjClone(nge.localData.get("slotMachine"));
                        e.slotWin.lineWinAmounts = [], nge.observer.fire("winlines.setNewQuery", e), nge.observer.fire("winlines.animateByOne.cycleComplete", null, 200)
                    }
                }, this.onBalanceResponseHandler = function(e) {
                    a.super.onBalanceResponseHandler(e), a._wasPickBonus && (a._wasPickBonus = !1, nge.observer.fire("balance.showBalance"), a.winProcessingFinish())
                }, this.onTransportCloseHandler = function() {
                    a.super.onTransportCloseHandler(), a._wasPickBonus = !1
                }, this.pickBonusBalanceRequest = function() {
                    a._wasPickBonus = !0, a._balanceRequested = !0, a._balanceResponsed = !1, nge.observer.fire("balanceRequest")
                };
                var r = function(e) {
                    if (e.data && e.data.spinResult && e.data.spinResultStage2) {
                        for (var t = 0, n = 0; n < e.data.spinResult.rows.length; n++)
                            for (var a = 0; a < e.data.spinResult.rows[n].length; a++) "16" === e.data.spinResult.rows[n][a] && t++;
                        if (1 === t)
                            for (t = 0; t < e.data.spinResult.rows.length; t++)
                                for (n = 0; n < e.data.spinResult.rows[t].length; n++) "16" !== e.data.spinResult.rows[t][n] || s.includes(e.data.spinResultStage2.rows[t][n]) || (e.data.spinResult.rows[t][n] = e.data.spinResultStage2.rows[t][n])
                    }
                };
                this.customIntrigueLogic = function(e, t, a) {
                    n || ((e = nge.App.getInstance("Com.Intrigue.Cfg")) || console.error('No "intrigue/cfg.js" file'), n = e.get()), e = !1;
                    for (var s = 0; s < n.triggerVariants.length; s++)
                        for (var o = n.triggerVariants[s], i = [], r = 0; r < t.length; r++) {
                            var l;
                            if (l = o.reelMask[r]) e: {
                                l = t[r];
                                for (var c = o.symbols, p = 0; p < l.length; p++)
                                    for (var m = 0; m < c.length; m++)
                                        if (l[p] === c[m]) {
                                            l = !0;
                                            break e
                                        } l = void 0
                            }
                            if (l && (i.push(r), i.length === o.minCount))
                                for (l = r + 1; l < t.length; l++)
                                    if (o.reelMask[l]) {
                                        for (a.status = !0, a.startsFrom = 0 === a.startsFrom ? l : a.startsFrom < l ? a.startsFrom : l, p = 0, m = c = l + 1; m < o.reelMask.length; m++) o.reelMask[m] && p++;
                                        a.endsFrom = c + p, nge.localData.set("slotMachineIntrigue", a), e || (nge.observer.fire("slotMachineIntrigue", l), e = !0)
                                    }
                        }
                    return a
                }, this.subscribe = function() {
                    nge.observer.add("transportMessage.SpinResponse", r, !1, !0), nge.observer.add("transportMessage.FreeSpinResponse", r, !1, !0), a.super.subscribe()
                }, this.customSubscribe = function() {
                    this.super.customSubscribe(), nge.observer.add("pickBonus.balanceRequest", a.pickBonusBalanceRequest, !1, !0), nge.observer.add("layersSwitcher.animationComplete", e, !1, !0), nge.observer.add("layersSwitcher.show", t, !1, !0), nge.observer.add("slotMachine.goldSymbol.completed", i, !1, !0)
                }
            }))
        },
        1308: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this,
                    t = !1,
                    n = !1,
                    a = 0,
                    s = 0,
                    o = 0,
                    i = 0,
                    r = !1;
                this.loopedSounds.push("pickem_background"), this.wheelSpinSoundCount = 1, this.reelsCount = 5, this.triggersNeededForBonus = this.triggerReelsCount = 3, this.playReelsSoundInsideFreespins = !0, this.buttonsClickSounds = [{
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
                }], this.popupSounds = [{
                    s: "bonus_popup",
                    e: "sound.bonus_popup.play",
                    relaunch: !0
                }, {
                    s: "bonus_popup_win",
                    e: "sound.bonus_popup_win.play",
                    relaunch: !0
                }, {
                    s: "bonus_popup",
                    e: "popup.hideStart",
                    action: "stop"
                }, {
                    s: "bonus_popup_win",
                    e: "popup.hideStart",
                    action: "stop"
                }, {
                    s: "popup_close",
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
                }, {
                    s: "scatter_card_0",
                    e: "sound.scatter_card_0.play"
                }, {
                    s: "scatter_card_1",
                    e: "sound.scatter_card_1.play"
                }], this.intrigueSounds = [{
                    s: "intrigue",
                    e: "slotMachine.reel_3.intrigue.start",
                    relaunch: !0
                }, {
                    s: "intrigue",
                    e: "slotMachine.reel_3.animation.stop",
                    action: "stop"
                }, {
                    s: "intrigue",
                    e: "slotMachine.reel_4.intrigue.start",
                    relaunch: !0
                }, {
                    s: "intrigue",
                    e: "slotMachine.reel_4.animation.stop",
                    action: "stop"
                }], this.bellSound = [{
                    s: "bell",
                    e: "sound.bonus.trigger.play",
                    relaunch: !0
                }], this.bigWinSounds.push({
                    s: "big_win_start",
                    e: "win.big.show"
                }), this.counterSounds = [{
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
                    action: "play"
                }], this.soundExt.push({
                    s: "gold_reel",
                    e: "gold_reel.play",
                    relaunch: !0
                }, {
                    s: "gold_reel_frame",
                    e: "sounds.gold_reel_frame.play",
                    relaunch: !0
                }, {
                    s: "gold_reel_slide",
                    e: "sounds.gold_reel_slide.play",
                    relaunch: !0
                }, {
                    s: "pickem_background",
                    e: "sounds.pickem_background.play",
                    loop: !0
                }, {
                    s: "pickem_background",
                    e: "sounds.pickem_background.stop",
                    action: "stop"
                }, {
                    s: "pickem_background",
                    e: "Transport.close",
                    action: "stop"
                }, {
                    s: "pickem_multiopened_0",
                    e: "sound.pickem_multiopened_0.play",
                    relaunch: !0
                }, {
                    s: "pickem_multiopened_1",
                    e: "sound.pickem_multiopened_1.play",
                    relaunch: !0
                }, {
                    s: "pickem_multiopened_2",
                    e: "sound.pickem_multiopened_2.play",
                    relaunch: !0
                }, {
                    s: "pickem_multiopened_3",
                    e: "sound.pickem_multiopened_3.play",
                    relaunch: !0
                }, {
                    s: "pickem_card_0",
                    e: "sound.pickem_card_0.play",
                    relaunch: !0
                }, {
                    s: "pickem_card_1",
                    e: "sound.pickem_card_1.play",
                    relaunch: !0
                }, {
                    s: "pickem_card_2",
                    e: "sound.pickem_card_2.play",
                    relaunch: !0
                }, {
                    s: "pickem_button",
                    e: "sound.pickem_button.play",
                    relaunch: !0
                }, {
                    s: "pickem_bonus_coin",
                    e: "sound.pickem_bonus_coin.play",
                    relaunch: !0
                }, {
                    s: "jackpot_collect",
                    e: "sound.jackpot_collect.play",
                    relaunch: !0
                }, {
                    s: "pickem_open",
                    e: "sounds.pickem_open.play"
                }, {
                    s: "pickem_close",
                    e: "sounds.pickem_close.play"
                }), this.layerSwitcherHandler = function(n) {
                    if (t) switch (n) {
                        case "intro":
                            nge.observer.fire("introSound.Play"), nge.observer.fire("sounds.pickem_background.stop");
                            break;
                        case "game":
                        case "gameOffer":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.play"), e.fadeSound("bs_background", 1), e.fadeSound("bn_background", 1), nge.observer.fire("sounds.pickem_background.stop");
                            break;
                        case "gameFreeSpin":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.play"), nge.observer.fire("sounds.pickem_background.stop");
                            break;
                        case "pickBonus":
                            nge.observer.fire("introSound.Stop"), nge.observer.fire("bs_background.stop"), nge.observer.fire("bn_background.stop"), nge.observer.fire("sounds.pickem_background.play")
                    }
                }, this.onSoundsPreloaded = function() {
                    t = !0, e.super.onSoundsPreloaded()
                };
                var l = function(e) {
                        switch (e) {
                            case "freespinStartPopup":
                            case "pickBonusStartPopup":
                                nge.observer.fire("sound.bonus_popup.play"), c();
                                break;
                            case "endPopup":
                            case "endPopupCredits":
                                nge.observer.fire("sound.bonus_popup_win.play"), c()
                        }
                    },
                    c = function() {
                        e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .2, 200)
                        }))
                    },
                    p = function() {
                        e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 300)
                        }))
                    },
                    m = function() {
                        n = !0, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .5, 100)
                        }))
                    },
                    u = function() {
                        n && (n = !1, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 100)
                        })))
                    },
                    b = function(e) {
                        return function() {
                            var t = nge.localData.get("slotMachine.spinResult.columns"),
                                n = t[e].some((function(e) {
                                    return "1" === e
                                }));
                            t = t[e].some((function(e) {
                                return "2" === e
                            })), 0 === e && n && (r = !0, nge.observer.fire("sound.scatter_card_0.play")), 4 === e && r && t && nge.observer.fire("sound.scatter_card_1.play")
                        }
                    },
                    g = function() {
                        n && u(), i = 0, r = !1
                    },
                    y = function() {
                        nge.observer.fire("sound.scatter_" + i + ".play"), i++
                    },
                    d = function(e) {
                        "jackpot" === nge.statesManager.getCurrentName() || e && e.getData() && e.getData().name && e.getData().name.includes("miniPaytableClickableZone") || (nge.observer.fire("button.hover_" + a), 3 <= ++a && (a = 0))
                    },
                    h = function(e) {
                        "jackpot" !== nge.statesManager.getCurrentName() && (e && e.getData() && e.getData().name && e.getData().name.includes("pickItem") || nge.observer.fire("button.clickSound"))
                    },
                    f = function() {
                        nge.observer.fire("sound.pickem_multiopened_" + s + ".play"), 4 <= ++s && (s = 0)
                    },
                    _ = function() {
                        nge.observer.fire("sound.pickem_card_" + o + ".play"), 3 <= ++o && (o = 0)
                    },
                    k = function() {
                        n = !1
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("slotMachine.spinCommand", g, !1, !0), nge.observer.add("button.hover", d, !1, !0), nge.observer.add("button.click", h, !1, !0), nge.observer.add("popup.showStart", l, !1, !0), nge.observer.add("sound.pickem_multiopened.play", f, !1, !0), nge.observer.add("sound.pickem_matchcard.play", _, !1, !0), nge.observer.add("sound.stopped.bonus_popup", p, !1, !0), nge.observer.add("sound.stopped.bonus_popup_win", p, !1, !0), nge.observer.add("sounds.win.regularWinLow", m, !1, !0), nge.observer.add("sounds.win.regularWinMid", m, !1, !0), nge.observer.add("sounds.win.regularWinHigh", m, !1, !0), nge.observer.add("sounds.win_scatter.play", m, !1, !0), nge.observer.add("slotMachine.reel_0.animation.stop", b(0), !1, !0), nge.observer.add("slotMachine.reel_4.animation.stop", b(4), !1, !0), nge.observer.add("sound.scatter_landing_1.play", y, !1, !0), nge.observer.add("sound.scatter_landing_2.play", y, !1, !0), nge.observer.add("sound.scatter_landing_3.play", y, !1, !0), nge.observer.add("sound.stopped.win_regularWinLow", u, !1, !0), nge.observer.add("sound.stopped.win_regularWinMid", u, !1, !0), nge.observer.add("sound.stopped.win_regularWinHigh", u, !1, !0), nge.observer.add("sound.stopped.win_scatter", u, !1, !0), nge.observer.add("sound.stopped.win_wild", u, !1, !0), nge.observer.add("sound.stopped.win_wild_x2", u, !1, !0), nge.observer.add("sound.stopped.win_wild_x3", u, !1, !0), nge.observer.add("Transport.close", k, !1, !0)
                }
            }))
        },
        1309: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.SpinButton = nge.App.DjGameBase.Mlm.Brain.SpinButton.extend((function() {
                this.spinEnableBlockers.push((function() {
                    return nge.localData.get("goldReels.inProgress")
                }))
            }))
        },
        1310: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Win = nge.App.DjGameBase.Mlm.Brain.Win.extend((function() {
                var e = this;
                this.regularWinInterruptOnFreespinEnd = !0, this.regularPopupShowHandler = function(t) {
                    e.super.regularPopupShowHandler(t), nge.observer.fire("sounds.win.regular.counter.play")
                }, this.regularWinCounterCompleteHandler = function() {
                    e.super.regularWinCounterCompleteHandler(), nge.observer.fire("sounds.win.regular.counter.stop")
                }
            }))
        },
        1311: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic = {}
        },
        1312: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["PICK_BONUS", "FREESPIN", "SPIN"],
                        PICK_BONUS: ["SPIN", "FREESPIN"],
                        FREESPIN: ["SPIN"]
                    },
                    pickBonus: {
                        PICK_BONUS: ["SPIN", "FREESPIN"]
                    }
                }
            }))
        },
        1313: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States = {}
        },
        1314: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SpinState.extend((function() {
                this.validityCheckHandler = function() {
                    var e = this.super.validityCheckHandler();
                    return !nge.localData.get("pickBonusWon") && !nge.localData.get("needShowFreespins") && e
                }
            }))
        },
        1315: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.FreespinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.FreespinState.extend((function() {
                this.validityCheckHandler = function() {
                    return this.super.validityCheckHandler() || nge.localData.get("needShowFreespins")
                }
            }))
        },
        1316: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.PickBonusState = nge.App.ClassicGameBase.Mlm.Brain.ButtonsNewLogic.States.BaseState.extend((function() {
                this.model = {
                    order: ["SHOWED"],
                    actions: {
                        SHOWED: {
                            turboModeUI: {
                                title: nge.i18n.get("TURBO"),
                                enabled: !1,
                                visible: ["!offerInProgress"]
                            }
                        }
                    }
                }, this.validityCheckHandler = function() {
                    return nge.localData.get("pickBonusWon")
                }, this.actionUpdateHandlers = {
                    onShowed: function() {
                        return "pickBonus" === nge.statesManager.getCurrentName()
                    }
                }
            }))
        },
        1317: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile = {}
        },
        1318: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic = {}
        },
        1319: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.Cfg = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.Cfg.extend((function() {
                this.slotMachineStates = {
                    demo: {
                        DEMO: []
                    },
                    play: {
                        SPIN: ["PICK_BONUS", "FREESPIN", "SPIN"],
                        PICK_BONUS: ["FREESPIN", "SPIN"],
                        FREESPIN: ["SPIN"]
                    },
                    pickBonus: {
                        PICK_BONUS: ["FREESPIN", "SPIN"]
                    }
                }
            }))
        },
        1320: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States = {}
        },
        1321: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.SpinState.extend((function() {
                this.validityCheckHandler = function() {
                    var e = this.super.validityCheckHandler();
                    return !nge.localData.get("pickBonusWon") && !nge.localData.get("needShowFreespins") && e
                }
            }))
        },
        1322: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.FreespinState = nge.App.DjGameBase.Mlm.Brain.Mobile.ButtonsNewLogic.States.FreespinState.extend((function() {
                this.validityCheckHandler = function() {
                    return this.super.validityCheckHandler() || nge.localData.get("needShowFreespins")
                }
            }))
        },
        1323: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Mobile.ButtonsNewLogic.States.PickBonusState = nge.App.ClassicGameBase.Mlm.Brain.ButtonsNewLogic.States.BaseState.extend((function() {
                this.model = {
                    order: ["SHOWED"],
                    actions: {
                        SHOWED: {
                            auto: {
                                enabled: !1,
                                visible: !0
                            },
                            turboModeUI: {
                                enabled: !1,
                                visible: !0
                            }
                        }
                    }
                }, this.validityCheckHandler = function() {
                    return nge.localData.get("pickBonusWon")
                }, this.actionUpdateHandlers = {
                    onShowed: function() {
                        return "pickBonus" === nge.statesManager.getCurrentName()
                    }
                }
            }))
        },
        1324: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1325: function(e, t) {
            nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.PickBonus = ["params.pickItems", "params.picksRemain"]
        },
        1326: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models = {}
        },
        1327: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models.AuthResponse = nge.Mlm.Transport.Models.AuthResponse.extend((function() {
                this.customConstructor = function(e) {
                    this.super.customConstructor(e), (e = nge.Lib.Helper.recursiveGet("data.params.expandingSymbol", e, !1)) && (this.data.params = {}, this.data.params.expandingSymbol = e)
                }
            }))
        },
        1328: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models.PickBonusItemResponse = nge.Mlm.Transport.Models.PickBonusItemResponse.extend((function() {
                this.customConstructor = function(e) {
                    this.super.customConstructor(e);
                    var t = nge.Lib.Helper.recursiveGet("data.canGamble", e, !1);
                    t && (this.data.canGamble = t), t = nge.Lib.Helper.recursiveGet("data.params.winAmount", e, !1);
                    var n = nge.Lib.Helper.recursiveGet("data.params.picksRemain", e, !1),
                        a = nge.Lib.Helper.recursiveGet("data.params.multiOpened", e, !1),
                        s = nge.Lib.Helper.recursiveGet("data.params.freeSpins", e, !1);
                    (t || n || a || s) && (this.data.params = {}, t && (this.data.params.winAmount = t), n && (this.data.params.picksRemain = n), a && (this.data.params.multiOpened = a), s && (this.data.params.freeSpins = s)), (e = nge.Lib.Helper.recursiveGet("data.gameParameters.initialSymbols", e, !1)) && (this.data.gameParameters = {}, e && (this.data.gameParameters.initialSymbols = e))
                }
            }))
        },
        1329: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models.SpinResponse = nge.Mlm.Transport.Models.SpinResponse.extend((function() {
                this.customConstructor = function(e) {
                    this.super.customConstructor(e), (e = nge.Lib.Helper.recursiveGet("data.params.goldReels", e, !1)) && (this.data.params = {}, this.data.params.goldReels = e)
                }
            }))
        },
        5: function(e, t, n) {
            n(1182), n(1183), n(1184), n(1185), n(1186), n(1187), n(1188), n(1189), n(1190), n(1191), n(1192), n(1193), n(1194), n(1195), n(1196), n(1197), n(1198), n(1199), n(1200), n(1201), n(1202), n(1203), n(1204), n(1205), n(1206), n(1207), n(1208), n(1209), n(1210), n(1211), n(1212), n(1213), n(1214), n(1215), n(1216), n(1217), n(1218), n(1219), n(1220), n(1221), n(1222), n(1223), n(1224), n(1225), n(1226), n(1227), n(1228), n(1229), n(1230), n(1231), n(1232), n(1233), n(1234), n(1235), n(1236), n(1237), n(1238), n(1239), n(1240), n(1241), n(1242), n(1243), n(1244), n(1245), n(1246), n(1247), n(1248), n(1249), n(1250), n(1251), n(1252), n(1253), n(1254), n(1255), n(1256), n(1257), n(1258), n(1259), n(1260), n(1261), n(1262), n(1263), n(1264), n(1265), n(1266), n(1267), n(1268), n(1269), n(1270), n(1271), n(1272), n(1273), n(1274), n(1275), n(1276), n(1277), n(1278), n(1279), n(1280), n(1281), n(1282), n(1283), n(1284), n(1285), n(1286), n(1287), n(1288), n(1289), n(1290), n(1291), n(1292), n(1293), n(1294), n(1295), n(1296), n(1297), n(1298), n(1299), n(1300), n(1301), n(1302), n(1303), n(1304), n(1305), n(1306), n(1307), n(1308), n(1309), n(1310), n(1311), n(1312), n(1313), n(1314), n(1315), n(1316), n(1317), n(1318), n(1319), n(1320), n(1321), n(1322), n(1323), n(1324), n(1325), n(1326), n(1327), n(1328), n(1329)
        }
    }
]);