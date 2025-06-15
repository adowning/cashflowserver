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
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, n, s) {
    if (t) {
        for (n = $jscomp.global, e = e.split("."), s = 0; s < e.length - 1; s++) {
            var a = e[s];
            a in n || (n[a] = {}), n = n[a]
        }(t = t(s = n[e = e[e.length - 1]])) != s && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
}, $jscomp.polyfill("Array.prototype.fill", (function(e) {
    return e || function(e, t, n) {
        var s = this.length || 0;
        for (0 > t && (t = Math.max(0, s + t)), (null == n || n > s) && (n = s), 0 > (n = Number(n)) && (n = Math.max(0, s + n)), t = Number(t || 0); t < n; t++) this[t] = e;
        return this
    }
}), "es6", "es3"), $jscomp.findInternal = function(e, t, n) {
    e instanceof String && (e = String(e));
    for (var s = e.length, a = 0; a < s; a++) {
        var i = e[a];
        if (t.call(n, i, a, e)) return {
            i: a,
            v: i
        }
    }
    return {
        i: -1,
        v: void 0
    }
}, $jscomp.polyfill("Array.prototype.find", (function(e) {
    return e || function(e, t) {
        return $jscomp.findInternal(this, e, t).v
    }
}), "es6", "es3"), $jscomp.polyfill("Object.is", (function(e) {
    return e || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}), "es6", "es3"), $jscomp.polyfill("Array.prototype.includes", (function(e) {
    return e || function(e, t) {
        var n = this;
        n instanceof String && (n = String(n));
        var s = n.length;
        for (0 > (t = t || 0) && (t = Math.max(t + s, 0)); t < s; t++) {
            var a = n[t];
            if (a === e || Object.is(a, e)) return !0
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
            nge.appNS = "QuickCashFruits", nge.App[nge.appNS] = {}
        },
        1183: function(e, t, n) {
            nge.appPath = "app/quickCashFruits.110/", nge.gameCode = "353"
        },
        1184: function(e, t) {
            nge.App[nge.appNS].Run = nge.App.DjGameBase.Run.extend((function() {
                this.linesCfg = [1], nge.App.addSysInstancesMode("SlimJackpot"), nge.App.DjGameBase && (nge.App[nge.appNS] = nge.Lib.Helper.mergeObjsRecursive(nge.App.DjGameBase, nge.App[nge.appNS])), this.applyClassicGameBase(), this.statesReplacements.play.push("background", "popup", "innerJackpot", "miniPaytable", "bigWinUni", "shaker", "blinker", "popupReel", "leftSpinBar");
                var e = this.statesReplacements.play.indexOf("miniPaytable");
                this.statesReplacements.play.splice(e, 1)
            })), nge.Cfg.Main.project = "quickCashFruits", nge.Cfg.Main.title = "Quick Cash Fruits", nge.Cfg.Main.gameCode = "353", nge.Cfg.Main.gameType = "slot", nge.Cfg.Main.slotType = "standart", nge.Cfg.Main.gameVersion = "0.23"
        },
        1185: function(e, t) {
            nge.App[nge.appNS].Cfg = {}
        },
        1186: function(e, t) {
            nge.App[nge.appNS].Cfg.Sounds = Class.extend((function() {
                this.contents = {
                    silence: "game:sounds/silence",
                    spin_0: "game:/sounds/spin_0",
                    spin_1: "game:/sounds/spin_1",
                    spin_stop: "game:/sounds/spin_stop",
                    reel_spin_0: "game:/sounds/reel_spin_0",
                    reel_spin_1: "game:/sounds/reel_spin_1",
                    reels_stop_0: "game:sounds/reel_stop_0",
                    reels_stop_1: "game:sounds/reel_stop_1",
                    reels_stop_2: "game:sounds/reel_stop_2",
                    reels_stop_3: "game:sounds/reel_stop_3",
                    reels_stop_4: "game:sounds/reel_stop_4",
                    hover: "game:sounds/default_hover",
                    click: "game:sounds/default_btn",
                    click2: "game:sounds/default_btn2",
                    win_regularWinHigh: "game:/sounds/win_high",
                    win_regularWinMid: "game:sounds/win_middle",
                    win_regularWinLow: "game:sounds/win_small",
                    win_counterClicking: "game:/sounds/counter",
                    counter_stop: "game:/sounds/counter_stop",
                    sr_bell: "game:sounds/bell",
                    big_win: "game:/sounds/big_win",
                    big_win_start: "game:/sounds/big_win_start",
                    big_win_ending: "game:/sounds/big_win_end",
                    intro_big_win: "game:/sounds/big_win_intro",
                    scatter_0: "game:sounds/scatter_0",
                    scatter_1: "game:sounds/scatter_1",
                    scatter_2: "game:sounds/scatter_2",
                    scatter_3: "game:sounds/scatter_3",
                    scatter_4: "game:sounds/scatter_4",
                    intrigue_2: "game:sounds/intrigue_0",
                    intrigue_3: "game:sounds/intrigue_1",
                    intrigue_4: "game:sounds/intrigue_2",
                    freespin_popup: "game:/sounds/freespin_popup",
                    freespin_symbol_change: "game:/sounds/freespin_symbol_change",
                    freespin_symbol_selected: "game:/sounds/freespin_symbol_selected",
                    freespin_popup_close: "game:/sounds/freespin_popup_close",
                    freespin_symbol_landing: "game:/sounds/freespin_symbol_landing",
                    freespin_symbol: "game:/sounds/freespin_symbol",
                    end_freespins_popup: "game:/sounds/freespin_popup_win",
                    bs_background: "game:sounds/basic_background",
                    bn_background: "game:sounds/freespin_background",
                    intro_sound: "game:sounds/ambience",
                    flash_cells: "game:sounds/flash_cells",
                    QCF_popup: "game:sounds/QCF_popup",
                    QCF_wild: "game:sounds/QCF_wild",
                    intrigue_flash: "game:sounds/intrigue_flash",
                    wild_bonus_0: "game:sounds/wild_bonus_0",
                    wild_bonus_1: "game:sounds/wild_bonus_1",
                    wild_bonus_2: "game:sounds/wild_bonus_2",
                    wild_bonus_3: "game:sounds/wild_bonus_3",
                    wild_bonus_4: "game:sounds/wild_bonus_4",
                    wild_bonus_5: "game:sounds/wild_bonus_5",
                    wild_bonus_6: "game:sounds/wild_bonus_6",
                    wild_bonus_7: "game:sounds/wild_bonus_7",
                    wild_bonus_8: "game:sounds/wild_bonus_8",
                    wild_bonus_9: "game:sounds/wild_bonus_9",
                    wild_increase_0: "game:sounds/wild_increase_0",
                    wild_increase_1: "game:sounds/wild_increase_1",
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
                    play: [{
                        spineName: "m00_000",
                        animationName: "landing"
                    }, {
                        spineName: "spinification",
                        animationName: "spinification"
                    }, {
                        spineName: "spinification",
                        animationName: "reel_rotation"
                    }, {
                        spineName: "spinification",
                        animationName: "reel_start_light"
                    }, {
                        spineName: "bgAnimation",
                        animationName: "bg_animation_win_loop"
                    }, {
                        spineName: "bgAnimation",
                        animationName: "grid_cycle"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "congratulations_end"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "congratulations_loop"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "congratulations_start"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "freebonus_end"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "freebonus_loop"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "freebonus_play"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "freebonus_start"
                    }, {
                        spineName: "animatedPopup",
                        animationName: "lights"
                    }, {
                        spineName: "animatedGrid",
                        animationName: "grid"
                    }, {
                        spineName: "progress_bar",
                        animationName: "shine"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_1"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_2"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_3"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_4"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_5"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_6"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_7"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_8"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_9"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_10"
                    }, {
                        spineName: "progress_bar",
                        animationName: "fill_revert"
                    }, {
                        spineName: "respin_animation",
                        animationName: "animation"
                    }, {
                        spineName: "winframe",
                        animationName: "play"
                    }]
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
                    y: -255,
                    width: 116,
                    height: 426,
                    debug: !1
                }, this.spinStartHandler = function(e) {
                    nge.localData.get("dividingReels.inProgress") && "Infinity" !== e && (e++, void 0 !== nge.localData.get("autospinAmount") && nge.localData.set("autospinAmount", e)), this.super.spinStartHandler(e)
                }
            }))
        },
        1191: function(e, t) {
            nge.App[nge.appNS].Com.Autospin.AdvancedView = nge.App.DjGameBase.Com.Autospin.AdvancedView.extend((function() {
                this.spinStartHandler = function(e) {
                    nge.localData.get("dividingReels.inProgress") && "Infinity" !== e && (e++, void 0 !== nge.localData.get("autospinAmount") && nge.localData.set("autospinAmount", e)), this.super.spinStartHandler(e)
                }
            }))
        },
        1192: function(e, t) {
            nge.App[nge.appNS].Com.Background = {}
        },
        1193: function(e, t) {
            nge.App[nge.appNS].Com.Background.Controller = nge.Com.Base.extend((function() {
                var e, t = this,
                    n = !1,
                    s = !1,
                    a = null,
                    i = null,
                    o = null,
                    l = null,
                    r = null,
                    p = [];
                this._speedUpAnimatedGridHandler = function() {
                    a.setSpeed(3)
                }, this._speedDownAnimatedGridHandler = function() {
                    a.setSpeed(1)
                }, this._stopLightsTween = function() {
                    r && r.isRunning && r.stop(), r = null
                }, this._stopWinAnimationHandler = function() {
                    t._stopLightsTween(), (r = nge.tween.add(i).to({
                        alpha: 0
                    }, 500, !1)).onComplete.add((function() {
                        i.stopTrack(), i.visible = !1, l.addChild(i)
                    })), r.start()
                }, this.subscribe = function() {
                    nge.observer.add("background.animatedGrid.stop", t._stopAnimatedGridHandler), nge.observer.add("background.animatedGrid.start", t._startAnimatedGridHandler), nge.observer.add("background.animatedGrid.speedUp", t._speedUpAnimatedGridHandler), nge.observer.add("background.animatedGrid.speedDown", t._speedDownAnimatedGridHandler), nge.observer.add("background.winAnimation.start", t._startWinAnimationHandler), nge.observer.add("background.winAnimation.stop", t._stopWinAnimationHandler), nge.observer.add("background.speedUpAnimation.start", t._speedUpAnimationHandler), nge.observer.add("background.enableDividers", t.enableDividers)
                }, this.create = function() {
                    return t.createDefault(), n = nge.Lib.Helper.mobileAndTabletCheck(), t._makeLinks(), t._playBgAnimation("grid_cycle"), t._stopLightsTween(), t.createSmallReelsDivider(), s || t.subscribe(), s = !0
                }, this._makeLinks = function() {
                    a = nge.findOne("^bgAnimationGrid"), i = nge.findOne("^bgAnimationWin"), o = nge.findOne("^animatedGrid"), e = nge.findOne("^reelsHorizontal"), l = i.parent
                }, this.createSmallReelsDivider = function() {
                    p = [];
                    for (var t = 0; 5 > t; t++)
                        for (var n = 0; 3 > n; n++) {
                            var s = nge.objects.create(new nge.Mlm.Objects.Image({
                                assetKey: "frame_2x2",
                                anchorX: .5,
                                anchorY: .5,
                                x: 323 * t - 640 - 7,
                                y: 284 * n - 280 - 30,
                                isVisible: !1
                            }), e);
                            p.push(s)
                        }
                }, this.enableDividers = function(e) {
                    p[e.index].visible = e.enable
                }, this._playBgAnimation = function(e, s) {
                    s = void 0 === (s = void 0 === s ? {} : s).type ? nge.spine.HIDE : s.type, "grid_cycle" === e && (n || a.setAnimationByMode(0, e, nge.spine.LOOP)), "bg_animation_win_loop" === e && (t._stopLightsTween(), i.setAnimationByMode(0, e, s), i.alpha = 0, (r = nge.tween.add(i).to({
                        alpha: 1
                    }, 500)).start())
                }, this._speedUpAnimationHandler = function() {}, this._startWinAnimationHandler = function(e) {
                    t._playBgAnimation("bg_animation_win_loop", e)
                }, this._switchBg = function(e, t, n) {
                    var s = nge.tween.add({}).to({}, 300);
                    s.onStart.add((function() {
                        t.setAnimationByMode(0, n, nge.spine.LOOP)
                    })), s.onComplete.add((function() {
                        e.stopTrack(0), e.visible = !1
                    })), s.onUpdateCallback((function(n, s) {
                        e.alpha = 1 - s, t.alpha = s
                    })), s.start()
                }, this._switchSlotMachineContainer = function(e) {
                    var t = nge.findOne("^slotMachineContainer");
                    nge.tween.add(t).to({
                        alpha: e
                    }, 300, null, !0)
                }, this._startAnimatedGridHandler = function() {
                    n || t._switchBg(a, o, "grid"), t._switchSlotMachineContainer(.3)
                }, this._stopAnimatedGridHandler = function() {
                    n || t._switchBg(o, a, "grid_cycle"), t._switchSlotMachineContainer(1)
                }
            }))
        },
        1194: function(e, t) {
            nge.App[nge.appNS].Com.Background.Tpl = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck(),
                    t = nge.appPath + "img/";
                return {
                    styles: {
                        ".album .fsBackgroundAnimationContainer": {
                            scaleX: 1,
                            scaleY: 1,
                            alignX: "center",
                            alignY: "bottom",
                            y: -560
                        },
                        ".portrait .fsBackgroundAnimationContainer": {
                            scaleX: 1.4,
                            scaleY: 1.4,
                            alignX: "center",
                            alignY: "bottom",
                            y: -1e3
                        },
                        ".album .bgAnimation": {
                            y: 0
                        },
                        ".portrait .bgAnimation": {
                            y: -110
                        },
                        ".album .glowReelsBottom": {
                            x: 0,
                            y: e ? 370 : 350,
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".portrait .glowReelsBottom": {
                            x: 960,
                            y: 30,
                            scaleX: .66,
                            scaleY: .66
                        },
                        ".album .reelsVertical": {
                            isVisible: !1
                        },
                        ".portrait .reelsVertical": {
                            isVisible: !0
                        },
                        ".album .bgAnimationGrid": {
                            isVisible: !e
                        },
                        ".portrait .bgAnimationGrid": {
                            isVisible: !1
                        },
                        ".album .reelsHorizontal": {
                            isVisible: !0,
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1
                        },
                        ".portrait .reelsHorizontal": {
                            isVisible: !1
                        },
                        ".album .bgAreaHorizontalMobile": {
                            isVisible: !!e
                        },
                        ".portrait .bgAreaHorizontalMobile": {
                            isVisible: !1
                        },
                        ".album .bgAreaHorizontal": {
                            isVisible: !e
                        },
                        ".portrait .bgAreaHorizontal": {
                            isVisible: !1
                        },
                        ".album .bgAreaVertical": {
                            isVisible: !1
                        },
                        ".portrait .bgAreaVertical": {
                            y: 960,
                            isVisible: !0
                        },
                        ".portrait.mobile.Android .bgAreaVertical": {
                            y: 960,
                            isVisible: !0
                        },
                        ".portrait.mobile.iOS.Chrome .bgAreaVertical": {
                            y: 960,
                            isVisible: !0
                        },
                        ".portrait.mobile.iOS.Safari .bgAreaVertical": {
                            y: 960,
                            isVisible: !0
                        },
                        ".portrait.mobile.iOS.iPhone.Safari .bgAreaVertical": {
                            y: 960,
                            isVisible: !0
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "border_reels",
                            fullPath: t + "playarea/border_reels.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "border_reels_left",
                            fullPath: t + "playarea/border_reels_left.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "glow_reels_bottom",
                            fullPath: t + "playarea/glow_reels_bottom.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "reelsVertical",
                            fullPath: t + "playarea/reelsVertical.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "verticalGameLogo",
                            fullPath: t + "playarea/verticalGameLogo.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: [{
                            type: mt.objects.GROUP,
                            name: "reelsVerticalPivot",
                            class: "reelsVerticalPivot",
                            contents: [{
                                type: mt.objects.IMAGE,
                                name: "reelsVertical",
                                class: "reelsVertical",
                                assetKey: "reelsVertical",
                                alignX: "center",
                                anchorX: .5,
                                anchorY: .5,
                                x: 0,
                                y: 780
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "bgAllContainer",
                            sWidth: "100%",
                            sHeight: "100%",
                            alignX: "center",
                            alignY: "center",
                            contents: [{
                                type: mt.objects.GROUP,
                                name: "bgAnimation",
                                class: "bgAnimation",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "animatedGrid",
                                    assetKey: "animatedGrid",
                                    isVisible: !1
                                }, {
                                    type: mt.objects.SPINE,
                                    name: "bgAnimationWin",
                                    assetKey: "bgAnimation",
                                    isVisible: !1
                                }, {
                                    type: mt.objects.GROUP,
                                    class: "bgAnimationGrid",
                                    contents: [{
                                        type: mt.objects.SPINE,
                                        name: "bgAnimationGrid",
                                        assetKey: "bgAnimation"
                                    }]
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "reelsHorizontal",
                                class: "reelsHorizontal",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "border_reels_1",
                                    assetKey: "border_reels",
                                    x: -651,
                                    y: -471
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "border_reels_2",
                                    assetKey: "border_reels",
                                    x: -328,
                                    y: -471
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "border_reels_3",
                                    assetKey: "border_reels",
                                    x: -5,
                                    y: -471
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "border_reels_4",
                                    assetKey: "border_reels",
                                    x: 318,
                                    y: -471
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "border_reels_left",
                                    assetKey: "border_reels_left",
                                    x: -882,
                                    y: -484
                                }, {
                                    type: mt.objects.IMAGE,
                                    name: "border_reels_right",
                                    assetKey: "border_reels_left",
                                    scaleX: -1,
                                    x: 765,
                                    y: -26,
                                    anchorX: .5,
                                    anchorY: .5
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                class: "glowReelsBottom",
                                contents: [{
                                    type: mt.objects.IMAGE,
                                    name: "glow_reels_bottom",
                                    anchorX: .5,
                                    anchorY: 0,
                                    assetKey: "glow_reels_bottom"
                                }]
                            }]
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgArea",
                            class: "bgArea bgAreaHorizontal",
                            assetKey: "bgArea",
                            alignX: "center",
                            alignY: "center",
                            anchorX: .5,
                            anchorY: .5,
                            sWidth: "100%",
                            sHeight: "100%",
                            sType: "circumscribed"
                        }, {
                            type: mt.objects.IMAGE,
                            name: "bgAreaMobile",
                            class: "bgArea bgAreaHorizontalMobile",
                            assetKey: "bgAreaMobile",
                            alignX: "center",
                            alignY: "center",
                            anchorX: .5,
                            anchorY: .5,
                            sWidth: "100%",
                            sHeight: "100%"
                        }, {
                            type: mt.objects.IMAGE,
                            assetKey: "bgAreaVertical",
                            class: "bgArea bgAreaVertical",
                            name: "bgAreaVertical",
                            alignX: "center",
                            anchorX: .5,
                            anchorY: .5,
                            scaleX: 1.25,
                            scaleY: 1.25,
                            isVisible: !1
                        }]
                    }
                }
            }
        },
        1195: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni = {}
        },
        1196: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Cfg = nge.App.DjGameBase.Com.BigWinUni.Cfg.extend((function() {
                this.cfg.followSlotName = "counter", this.cfg.mainTrackName = "big_win_txt_all", this.cfg.jackpotTrackName = "big_win_txt_jackpot", this.cfg.loopStartFrame = 21, this.cfg.loopEndFrame = 44, this.cfg.jump2Frame = 44, this.cfg.parallelLoopTracks = [{
                    name: "big_win_lights",
                    index: 2
                }]
            }))
        },
        1197: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Controller = nge.App.DjGameBase.Com.BigWinUni.Controller.extend((function() {
                var e = this,
                    t = !1,
                    n = null,
                    s = null,
                    a = null;
                this.playStage0 = function(t) {
                    e.super.playStage0(t), n.setAnimationByName(1, "big_win_start", !1), (t = e.mainAnim.findSprite("For_Grid")).currentSprite && (nge.findOne("^animatedGridSlot").addChild(s), s.position.set(0, 0), t.currentSprite.visible = !1)
                }, this.playStage2 = function() {
                    t = !0, e.super.playStage2()
                }, this.create = function() {
                    e.super.create(), n = nge.findOne("^bigWinAnimBG"), a = (s = nge.findOne("^animatedGrid")) && s.parent;
                    var t = nge.findOne("^bigWinShadowContainer");
                    (t = nge.Lib.Helper.generateImage("#080039", t, 0, 0, null, null, "bigWin_shadow")).alpha = .5, t.inputEnabled = !0, t.click = e.abort, t.tap = e.abort, e._subcribeSpine()
                }, this.cycleComplete = function(t) {
                    e.super.cycleComplete(t), a && (a.addChild(s), s.position.set(0, 0)), nge.observer.fire("background.animatedGrid.stop")
                }, this.show = function(n) {
                    t = !1, e.cfg.mainTrackName = "big_win_txt_all", e.super.show(n), nge.observer.fire("background.animatedGrid.start")
                }, this._subcribeSpine = function() {
                    n.onEvent.add((function(e, s) {
                        "startBgLoop" === s.data.name ? n.setAnimationByName(1, "big_win_loop", !0) : "endBgLoop" === s.data.name && t && n.setAnimationByName(1, "big_win_end")
                    }))
                }
            }))
        },
        1198: function(e, t) {
            nge.App[nge.appNS].Com.BigWinUni.Tpl = function() {
                return {
                    styles: {
                        ".portrait .bigWinContainer": {
                            y: "38%"
                        },
                        ".album .bigWinContainer": {
                            y: "50%"
                        },
                        ".portrait .bigWinSizeContainer": {
                            scaleX: .85,
                            scaleY: .85
                        },
                        ".album .bigWinSizeContainer": {
                            scaleX: 1,
                            scaleY: 1
                        },
                        ".portrait .bigWinShadowContainer": {
                            y: "-38%"
                        },
                        ".album .bigWinShadowContainer": {
                            y: "-50%"
                        },
                        ".portrait .bigWinEmitterContainer": {
                            alignX: "center",
                            alignY: "top",
                            y: "-12%"
                        },
                        ".album .bigWinEmitterContainer": {
                            alignX: "center",
                            alignY: "top",
                            y: "-40%"
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
                            class: "bigWinEmitterContainer",
                            isVisible: !0,
                            contents: [{
                                type: mt.objects.UNITY_EMITTER,
                                name: "bigWinEmitter",
                                x: 0,
                                y: 0,
                                assetKey: "emitterVFX"
                            }, {
                                type: mt.objects.UNITY_EMITTER,
                                name: "bigWinEmitter",
                                x: 0,
                                y: 0,
                                assetKey: "emitterVFX"
                            }]
                        }, {
                            type: mt.objects.GROUP,
                            name: "bigWinInternalContainer",
                            class: "bigWinContainer",
                            x: "50%",
                            isVisible: !1,
                            contents: [{
                                type: mt.objects.GROUP,
                                class: "bigWinSizeContainer",
                                contents: [{
                                    type: 7,
                                    name: "bigWinAmount",
                                    anchorX: .5,
                                    anchorY: .5,
                                    text: "0",
                                    y: -50,
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
                                }, {
                                    type: 6,
                                    assetKey: "bigWinAnim",
                                    name: "bigWinAnimBG",
                                    anchorX: .5,
                                    anchorY: .5,
                                    y: 0,
                                    isVisible: !1
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "animatedGridSlot"
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "bigWinShadowContainer",
                                class: "bigWinShadowContainer",
                                x: "-50%",
                                contents: []
                            }]
                        }]
                    }
                }
            }
        },
        1199: function(e, t) {
            nge.App[nge.appNS].Com.Buttons = {}
        },
        1200: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile = {}
        },
        1201: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Cfg = nge.App.DjGameBase.Com.Buttons.Mobile.Cfg.extend((function() {
                delete this.params.freeSpinStart, delete this.params.finalPopup
            }))
        },
        1202: function(e, t) {
            nge.App[nge.appNS].Com.Buttons.Mobile.Controller = nge.App.DjGameBase.Com.Buttons.Mobile.Controller.extend((function() {
                this.buttonsShiftY = 80, this.slotMachineHeight = 370
            }))
        },
        1203: function(e, t) {
            nge.App[nge.appNS].Com.BuyTime = {}
        },
        1204: function(e, t) {
            nge.App[nge.appNS].Com.BuyTime.Tpl = function(e) {
                var t = nge.App.DjGameBase.Com.BuyTime.Tpl(e);
                return ["buyTimeButton"].forEach((function(e) {
                    (e = nge.Lib.Helper.customRecursiveFind("name", e, "contents", t.objects, !1, !0, !1)) && (e.x = +e.x - 50)
                })), t
            }
        },
        1205: function(e, t) {
            nge.App[nge.appNS].Com.Freespin = {}
        },
        1206: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Controller = nge.App.DjGameBase.Com.Freespin.Controller.extend((function() {
                var e = this,
                    t = null,
                    n = [],
                    s = [];
                this._restoreHoldData = function() {
                    var e = nge.localData.get("slotMachine.lastResponse");
                    if (s = [], nge.localData.set("holdReelsData", s), e) {
                        var n = e.LineWinAmounts;
                        if (n && 0 < n.length)
                            for (var a = 0; a < n.length; a++) {
                                var i = n[a];
                                i.bonusSymbol && (t = i.bonusSymbol, this._calculateReelsToHold(e.spinResult.rows[0]))
                            }
                    }
                }, this._calculateReelsToHold = function(e) {
                    var n = nge.localData.get("freespin"),
                        a = n.spinsLeft;
                    n = n.spinsTotal, 0 !== parseInt(a, 10) && parseInt(a, 10) === parseInt(n, 10) || (s = [], e.forEach((function(e, n) {
                        e === t && s.push(n)
                    })), nge.localData.set("holdReelsData", s))
                }, this._holdReel = function(e) {
                    nge.observer.fire("slotMachine.holdReel", e)
                }, this._unholdReel = function(e) {
                    nge.observer.fire("slotMachine.unholdReel", e)
                }, this._holdReels = function() {
                    s.forEach(this._holdReel)
                }, this._unholdReels = function() {
                    s.forEach(this._unholdReel)
                }, this._updateExpandingSymbol = function() {
                    var e = nge.localData.get("slotMachine.slotWin");
                    if (e && e.lineWinAmounts) {
                        var s = e.lineWinAmounts.filter((function(e) {
                            return "Bonus" === e.type && "FreeSpins" === e.bonusName
                        }))[0];
                        if (s || (s = nge.localData.get("bonusLine")), t = s.params.bonusSymbol, e = [], s.params.freeSpinsReelsImprovement && 0 < s.params.freeSpinsReelsImprovement.length) {
                            s = s.params.freeSpinsReelsImprovement;
                            for (var a = 0; a < s.length; a++)
                                for (var i = 4 * +s[a][0], o = i + 4; i < o; i++) e.push(+i);
                            n = e.sort((function(e, t) {
                                return e - t
                            }))
                        }
                    }
                    nge.localData.set("freespin.expanding", t)
                }, this.rebuildCutingReels = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(e[n][0]);
                    return t
                }, this.freespinStart = function(e) {
                    this._updateExpandingSymbol(), this._restoreHoldData(), this._holdReels(), this.super.freespinStart(e), nge.observer.fire("slotMachine.updateBlurs.custom", !0)
                }, this.endFreespins = function() {
                    this.super.endFreespins(), this._unholdReels(), nge.localData.set("freespin.expanding"), s = [], t = null, nge.observer.fire("leftSpinBar.enable", !0), nge.observer.fire("slotMachine.updateBlurs.custom", !1)
                }, this.spinResponseHandler = function(e) {
                    this.super.spinResponseHandler(e), this._calculateReelsToHold(e.spinResult.rows[0])
                }, this._spinCompleteHandler = function() {
                    this._holdReels()
                }, this.enableCuttingReels = function() {
                    nge.rafSetTimeout((function() {
                        nge.localData.set("indexCutingReels", n), nge.observer.fire("freespins.animateOneToFour", null, 1)
                    }), 500)
                }, this.startFreespinsOnWinlinesComplete = function() {
                    e.freespinsInProgress || nge.rafSetTimeout((function() {
                        var e = nge.localData.get("freespinsCountForStartPopup");
                        0 == +e && (e = nge.localData.get("bonusLine").params.freeSpins), nge.observer.fire("popup.show", {
                            popupName: "freespinStartPopup",
                            layerName: "freespinStartPopup",
                            onClick: function() {
                                nge.observer.fire("layersSwitcher.show", "gameFreeSpin")
                            },
                            freespinsCounter: e
                        }), nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("win.hide")
                    }), 1e3)
                };
                var a = function() {
                    if (nge.localData.get("freespin.inProgress")) {
                        var n = nge.localData.get("slotMachine");
                        nge.localData.set("fakeSpin", !1), n && n.freeSpinRemain && 0 == +n.freeSpinRemain && (e._unholdReels(), nge.localData.set("indexCutingReels", []), nge.localData.set("freespin.expanding"), s = [], t = null, nge.observer.fire("slotMachine.updateBlurs.custom", !1), nge.localData.set("freespinswas", !1))
                    }
                };
                this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("slotMachine.spinComplete", this._spinCompleteHandler), nge.observer.add("freespins.enableCuttingReels", this.enableCuttingReels), nge.observer.add("Transport.close", a)
                }
            }))
        },
        1207: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile = {}
        },
        1208: function(e, t) {
            nge.App[nge.appNS].Com.Freespin.Mobile.Controller = nge.App[nge.appNS].Com.Freespin.Controller.extend((function() {}))
        },
        1209: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot = {}
        },
        1210: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot.Controller = nge.App.ClassicGameBase.Com.InnerJackpot.Controller.extend((function() {
                var e = this,
                    t = !1;
                this.showPopupHandler = function(e) {}, this.updatePayoutHandler = function(e) {
                    e && e.symbolId && this.getService().updatePayout(e.symbolId)
                }, this.create = function() {
                    e.super.create(), t = !1
                }, this.updateDataHandler = function(n) {
                    t || e.super.updateDataHandler(n)
                }, this.deactivate = function() {
                    t = !0
                }, this._subscribe = function() {
                    var e = this;
                    this.super._subscribe(), nge.observer.add("paytable.updatePayoutForSymbol", this.updatePayoutHandler), nge.observer.add("bet.change", (function() {
                        t || e.updateMultiplierHandler()
                    }))
                }
            }))
        },
        1211: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot.Service = nge.App.ClassicGameBase.Com.InnerJackpot.Service.extend((function() {
                var e = !1;
                this.showPopup = function(e) {}, this.updatePayout = function(e) {
                    this.getView().updatePayout(e)
                }, this._calcPayouts = function(t) {
                    var n = {},
                        s = t.length,
                        a = 0;
                    e: for (; a < s; a++) {
                        var i = t[a].symbols,
                            o = t[a].payout,
                            l = t[a].matchCount,
                            r = 0,
                            p = i[0];
                        if (0 !== o) {
                            if (0 < l) p = "any_" + i.join("_"), r = l;
                            else {
                                l = i.length;
                                for (var c = 0; c < l; c++) {
                                    if (p !== i[c]) continue e;
                                    r++
                                }
                            }
                            n[p] || (n[p] = {}, n[p].awards = {}), n[p].awards[r.toString()] = o
                        }
                    }
                    return e || (t = this.getInstance("View")) && t.setConvertedPayout(n), e = !0, n
                }, this._calcJackpotStakesAmount = function(e, t, n, s) {
                    var a = nge.localData.get("lines.value"),
                        i = nge.localData.get("bet.value");
                    for (var o in t = (t ? a * i / n.lastSpinStartStakeCredits : 1) * s.multiplier, nge.localData.get("innerJackpot.updating") || (t = i / s.initialBet), s = {}, e) s[o] = {
                        paytable: Math.round(e[o].awards[15] / n.lastSpinStartCV * t).toString()
                    };
                    return s
                }
            }))
        },
        1212: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot.Tpl = function() {
                return {
                    styles: {},
                    assets: {},
                    objects: {
                        contents: []
                    }
                }
            }
        },
        1213: function(e, t) {
            nge.App[nge.appNS].Com.InnerJackpot.View = nge.App.ClassicGameBase.Com.InnerJackpot.View.extend((function() {
                this.singleton = !0;
                var e = {},
                    t = null;
                this.hidePopup = function() {}, this.showPopup = function() {}, this._reset = function() {}, this.updatePayout = function(e) {
                    if ("7" === e || "0" === e) {
                        var n = nge.localData.get("totalBet") || {};
                        n = void 0 === n.value ? 0 : n.value;
                        var s = nge.localData.get("jackpots"),
                            a = s.scatterValue,
                            i = s.sevensValue;
                        s = t[e].awards;
                        var o = "7" === e,
                            l = o ? "15" : "5",
                            r = o ? "as" : "";
                        for (var p in s[l] = o ? a : i, a = {}, s) {
                            i = s[p];
                            var c = nge.findAll("." + r + "ps" + e + "-" + p) || [],
                                m = o ? nge.Lib.Money.toCoinsInt(n) : nge.localData.get("bet.value");
                            a.$jscomp$loop$prop$totalValue$17 = p !== l ? i * m : i, c.forEach(function(e) {
                                return function(t) {
                                    t.text = e.$jscomp$loop$prop$totalValue$17
                                }
                            }(a)), a = {
                                $jscomp$loop$prop$totalValue$17: a.$jscomp$loop$prop$totalValue$17
                            }
                        }
                    }
                }, this._prepareLinks = function() {
                    for (var t = 0; 10 > t; t++) e[t] = nge.findAll(".asps" + t + "-15$")
                }, this.setConvertedPayout = function(e) {
                    t = e
                }, this._updateJackpotValues = function(t) {
                    for (var n in t) {
                        var s = t[n].paytable;
                        e[n] && (e[n].attr("text", this._decorateThousands(s)), nge.observer.fire("sidebar.paytableView.updateJackpotSymbolValue", {
                            key: n,
                            award: s
                        }))
                    }
                }, this.printJackpotValues = function(e, t) {
                    this._updateJackpotValues(e, t)
                }
            }))
        },
        1214: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue = {}
        },
        1215: function(e, t) {
            nge.App[nge.appNS].Com.Intrigue.Controller = nge.App.DjGameBase.Com.Intrigue.Controller.extend((function() {
                var e = this;
                this.onReelAnimationStopHandler = function(t) {
                    var n = e.super.onReelAnimationStopHandler(t);
                    return function() {
                        n();
                        var e = nge.localData.get("slotMachineIntrigue"),
                            s = e.startsFrom;
                        e.status && t >= s - 1 && !nge.localData.get("intrigueStarted") && -1 < [28, 40, 52].indexOf(t) && (nge.observer.fire("slotMachine.startIntrigueAnimation", t + 1), nge.localData.set("intrigueStarted", !0))
                    }
                }
            }))
        },
        1216: function(e, t) {
            nge.App[nge.appNS].Com.LeftSpinBar = {}
        },
        1217: function(e, t) {
            nge.App[nge.appNS].Com.LeftSpinBar.Controller = nge.Com.Base.extend((function() {
                var e, t, n = this;
                this.create = function() {
                    this.createDefault(), e || n.customSubscribe(), e = !0, t = nge.findOne("^progress_barAnimation");
                    var s = nge.localData.get("slotMachine.lastResponse");
                    if (s && "FreeSpins" === s.state) t.visible = !1;
                    else {
                        t && t.setAnimationByMode(0, "shine", nge.spine.LOOP);
                        var a = nge.localData.get("ReelsImprovementRemain");
                        s && s.state && "DividingReels" === s.state && (a = 10, nge.localData.set("leftSpinBar.value", a)), 0 < a && t.setAnimationByMode(1, "fill_" + a, nge.spine.FREEZE)
                    }
                    return !0
                };
                var s = function() {
                        var e = nge.localData.get("leftSpinBar.value");
                        t.setAnimationByMode(1, 0 < e ? "fill_" + e : "fill_revert", nge.spine.FREEZE)
                    },
                    a = function() {
                        t.setAnimationByMode(1, "fill_revert", nge.spine.FREEZE)
                    },
                    i = function(e) {
                        (t.visible = e) && s()
                    },
                    o = function() {
                        var e = nge.localData.get("freespin.inProgress"),
                            t = nge.localData.get("dividingReelsResponse.was");
                        e || t || s()
                    };
                this.customSubscribe = function() {
                    nge.observer.add("slotMachine.spinResponse", o), nge.observer.add("leftSpinBar.restore", a), nge.observer.add("leftSpinBar.enable", i), nge.observer.add("freespinStartPopup", (function() {
                        i(!1)
                    }))
                }
            }))
        },
        1218: function(e, t) {
            nge.App[nge.appNS].Com.Offers = {}
        },
        1219: function(e, t) {
            nge.App[nge.appNS].Com.Offers.Controller = nge.App.DjGameBase.Com.Offers.Controller.extend((function() {
                var e = this;
                this._updateCounter = function(e) {
                    nge.localData.get("dividingReelsSpinNow") && !nge.localData.get("brain.restoreGame.lastResponse.state") || this.super._updateCounter(e)
                }, this.showOffer = function(e, t, n, s) {
                    this.super.showOffer(e, t, n, s), nge.findOne("^offerLines").text = "0"
                }, this.gameStateCheckCallbacks = {
                    isRestoreGame: function() {
                        return !!nge.localData.get("brain.restoreGame.lastResponse.state") && "Ready" !== nge.localData.get("brain.restoreGame.lastResponse.state")
                    }
                }, this.tryFinishOffer = function() {
                    var t = nge.localData.get("brain.restoreGame.lastResponse.state");
                    t && "DividingReels" === t || e.super.tryFinishOffer()
                }
            }))
        },
        1220: function(e, t) {
            nge.App[nge.appNS].Com.Offers.Mobile = {}
        },
        1221: function(e, t) {
            nge.App[nge.appNS].Com.Offers.Mobile.Controller = nge.App.DjGameBase.Com.Offers.Mobile.Controller.extend((function() {
                var e = this,
                    t = this;
                this._updateCounter = function(e) {
                    nge.localData.get("dividingReelsSpinNow") && !nge.localData.get("brain.restoreGame.lastResponse.state") || this.super._updateCounter(e)
                }, this.showOffer = function(e, t, n, s) {
                    this.super.showOffer(e, t, n, s), nge.findOne("^offerLines").text = "0"
                }, this.gameStateCheckCallbacks = {
                    isRestoreGame: function() {
                        if (!nge.localData.get("brain.restoreGame.lastResponse.state")) return !1;
                        nge.localData.get("brain.restoreGame.lastResponse.state")
                    }
                }, this.layerSwitchedHandler = function(n) {
                    "gameFreeSpin" === n && t.animateIn(), e.super.layerSwitchedHandler(n)
                }, this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("freespin.end", t.animateOut)
                }
            }))
        },
        1222: function(e, t) {
            nge.App[nge.appNS].Com.Load = {}
        },
        1223: function(e, t) {
            nge.App[nge.appNS].Com.Load.Cfg = nge.App.DjGameBase.Com.Load.Cfg.extend((function() {
                var e = nge.appPath + "img/fonts/";
                this.fonts.rounds_black = nge.appPath + "css/fonts/rounds_black", this.bitmapFonts.counter_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "counter_font.png",
                    bitmapFont: e + "counter_font.fnt"
                }, this.bitmapFonts.orange_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "orange_font.png",
                    bitmapFont: e + "orange_font.fnt"
                }, this.bitmapFonts.jackpot_font = {
                    type: mt.assets.BITMAP_FONT,
                    textureURL: e + "jackpot_font.png",
                    bitmapFont: e + "jackpot_font.fnt"
                }
            }))
        },
        1224: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets = {}
        },
        1225: function(e, t) {
            nge.App[nge.appNS].Com.LoadAssets.Controller = nge.App.DjGameBase.Com.LoadAssets.Controller.extend((function() {
                this.preload = function() {
                    this.super.preload(), nge.wrap.cache.checkImageKey("settingsContainerBg") || nge.wrap.load.image("settingsContainerBg", nge.Lib.Helper.create1PxPng(42, 39, 50, 240, !0)), nge.wrap.cache.checkImageKey("blank.png") || nge.wrap.load.image("blank.png", nge.Lib.Helper.create1PxPng(42, 39, 50, 0, !0))
                }
            }))
        },
        1226: function(e, t) {
            nge.App[nge.appNS].Com.Popup = {}
        },
        1227: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Cfg = nge.App.DjGameBase.Com.Popup.Cfg.extend((function() {
                var e = {
                        font: "63pt futuraptheavy",
                        fill: "#FFFFFF",
                        stroke: "#ea00ff",
                        strokeThickness: 2,
                        shadowColor: 15335679,
                        shadowBlur: 20,
                        shadowOffsetY: 3,
                        align: "center"
                    },
                    t = {
                        type: 4,
                        name: "okButton",
                        x: 0,
                        y: 157,
                        anchorX: .494,
                        anchorY: -1.1,
                        isVisible: !1,
                        pixelPerfectOver: !1,
                        pixelPerfectClick: !1,
                        class: "popupButton",
                        assetKey: "popupOkButtonAsset"
                    };
                this.cfg.popups = {
                    freespinEndPopup: {
                        shadow: {
                            color: 3342419,
                            a: .8,
                            showDuration: 500,
                            hideDuration: 500,
                            hideDelay: 500
                        },
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "congratulations_start",
                                loop: "congratulations_loop",
                                hide: "congratulations_end"
                            }
                        },
                        button: t,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: 2.2,
                                style: e
                            },
                            followSlotName: "CongratsTxt"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("YOU_WON_EN"),
                                anchorX: .5,
                                anchorY: .5,
                                maxWidth: 800,
                                style: {
                                    font: "135pt futuraptheavy",
                                    fill: "#47008a",
                                    stroke: "#ffffff",
                                    strokeThickness: 4,
                                    shadowColor: 15335679,
                                    shadowBlur: 20,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "YouWonTxt"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 180,
                                anchorX: .5,
                                anchorY: -.3,
                                assetKey: "counter_font"
                            },
                            followSlotName: "Counter_Congrats",
                            dataKey: "freespinEndPopupValue"
                        }]
                    },
                    freespinStartPopup: {
                        shadow: {
                            color: 3342419,
                            a: .8,
                            showDuration: 500,
                            hideDuration: 500,
                            hideDelay: 500
                        },
                        background: {
                            type: "spine",
                            assetKey: "animatedPopup",
                            animations: {
                                show: "freebonus_start",
                                loop: "freebonus_loop",
                                hide: "freebonus_end"
                            }
                        },
                        button: t,
                        content: [{
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("POPUP_CONGRATULATIONS"),
                                anchorX: .5,
                                anchorY: 2.2,
                                style: e
                            },
                            followSlotName: "CongratsTxt"
                        }, {
                            model: {
                                type: 7,
                                text: "1234",
                                size: 94,
                                anchorX: .5,
                                anchorY: 1.38,
                                assetKey: "counter_font"
                            },
                            followSlotName: "CounterFreeGames",
                            dataKey: "freespinsCounter"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("FREE_GAMES_WON"),
                                anchorX: .5,
                                anchorY: .5,
                                style: {
                                    font: "63pt futuraptheavy",
                                    fill: "#47008a",
                                    stroke: "#ffffff",
                                    strokeThickness: 4,
                                    shadowColor: 15335679,
                                    shadowBlur: 20,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "free_games_won"
                        }, {
                            model: {
                                type: 2,
                                isVisible: !1,
                                text: nge.i18n.get("BONUS_SYMBOL"),
                                anchorX: .5,
                                anchorY: -.72,
                                style: {
                                    font: "65pt futuraptheavy",
                                    fill: "#47008a",
                                    stroke: "#ffffff",
                                    strokeThickness: 4,
                                    shadowColor: 15335679,
                                    shadowBlur: 20,
                                    shadowOffsetY: 6,
                                    align: "center"
                                }
                            },
                            followSlotName: "bonus_symbol_txt"
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
                            y: 300,
                            anchorX: .5,
                            anchorY: .5,
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
        1228: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Controller = nge.App.DjGameBase.Com.Popup.Controller.extend((function() {
                var e = this,
                    t = "012345678".split(""),
                    n = t.length,
                    s = this,
                    a = [],
                    i = !1,
                    o = !1,
                    l = !1,
                    r = !1,
                    p = null,
                    c = null,
                    m = null,
                    u = null;
                this.create = function() {
                    e.super.create(), p = nge.findOne("^bgAnimationBigWin"), (c = nge.findOne("^dividingReelsPopup")).visible = !1, (m = nge.findOne("^splitReelsPopup")).visible = !1, u = nge.findOne("^popupButtonsContainer")
                }, this._getShuffledArr = function() {
                    var e = [].concat($jscomp.arrayFromIterable(t));
                    return e.sort((function() {
                        return Math.random() - .5
                    })), e
                }, this._getSymbolsList = function(t) {
                    var n = e._getShuffledArr();
                    return n.splice(n.indexOf(t), 1), n.splice(6, 0, t), n
                }, this._createSymbolInContainer = function(e, t, n) {
                    var s = "bonusSymbol" + ((n = void 0 !== n && n) ? " bonusSymbolWin" : "");
                    nge.objects.create(new nge.Mlm.Objects.Image({
                        assetKey: e,
                        anchorX: "0.5",
                        anchorY: "0.5",
                        class: s,
                        angle: 180,
                        x: t.x,
                        y: t.y,
                        scaleX: -1
                    }), t.parent), n && nge.objects.create(new nge.Mlm.Objects.Spine({
                        assetKey: "m0" + e + "_000",
                        anchorX: "0.5",
                        anchorY: "0.5",
                        class: s + "Spine",
                        angle: 180,
                        x: t.x - 5,
                        y: t.y,
                        isVisible: !1,
                        scaleX: -1
                    }), t.parent)
                }, this._fillReelWithSymbols = function(t) {
                    for (0 === a.length && (a = e._getSymbolsList(t)), t = 0; t < n; t++) {
                        var s = a[t],
                            i = e.background.findSprite("symbol_" + t),
                            o = e.background.findSprite("symbol_big_" + t);
                        i && i.currentSprite && (i.currentSprite.visible = !1, e._createSymbolInContainer(s, i.currentSprite)), o && o.currentSprite && (o.currentSprite.visible = !1, e._createSymbolInContainer(s, o.currentSprite, 6 === t))
                    }
                }, this._getExpandingSymbol = function() {
                    var e = (nge.localData.get("slotMachine.slotWin.lineWinAmounts") || []).filter((function(e) {
                        return "Bonus" === e.type && "FreeSpins" === e.bonusName
                    }))[0];
                    return e || (e = nge.localData.get("bonusLine")), e && e.params.bonusSymbol || "0"
                }, this._postProcessStartBonusPopup = function() {
                    var t = e._getExpandingSymbol();
                    null !== t && e._fillReelWithSymbols(t)
                }, this.hidePopup = function() {
                    i || (e.super.hidePopup(), nge.observer.fire("background.animatedGrid.stop"))
                }, this.showPopup = function(t) {
                    r = o = i = !1, a = [], l = !1, nge.findOne("^popupContainer").alpha = 1, nge.findOne("^popupButtonsContainer").alpha = 1, "freespinEndPopup" === t.popupName && (o = !0, nge.observer.fire("sound.popupWin.play"), p.visible = !0, p.setAnimationByMode(0, "big_win_lights", nge.spine.LOOP), nge.observer.fire("background.winAnimation.stop")), "freespinStartPopup" === t.popupName && (nge.observer.fire("freespinStartPopup"), p.visible = !0, p.setAnimationByMode(0, "big_win_lights", nge.spine.LOOP), nge.observer.fire("background.winAnimation.stop"), i = !0, t.onClick = e._startBonusGameHandler, t.nextLayerName = "gameFreeSpin", nge.observer.fire("sound.freespinStartPopup.play")), e.super.showPopup(t), "freespinStartPopup" === t.popupName && (e._postProcessStartBonusPopup(), nge.observer.fire("background.animatedGrid.start")), "freespinEndPopup" === t.popupName && nge.observer.fire("background.animatedGrid.start")
                }, this.playSymbolAnimation = function() {
                    var e = nge.findOne(".bonusSymbolWin"),
                        t = nge.findOne(".bonusSymbolWinSpine");
                    e.visible = !1, t.setAnimationByMode(0, "play", nge.spine.FREEZE), t.visible = !0
                }, this._setupBackgroundEvents = function() {
                    e.background.onEvent.add((function(t, n) {
                        switch (n.data.name) {
                            case "freebonusSymbolAnimationStart":
                                r || nge.observer.fire("sound.expandingSelected.play"), r = !0, e.playSymbolAnimation();
                                break;
                            case "freebonusGameFinished":
                                nge.rafSetTimeout((function() {
                                    p.stopTrack(), p.visible = !1, nge.observer.fire("slotmachine.tint.restore"), nge.observer.fire("background.animatedGrid.stop"), nge.observer.fire("sound.popupClose.play"), nge.observer.fire("freespins.enableCuttingReels"), nge.tween.add(nge.findOne("^popupContainer")).to({
                                        alpha: 0
                                    }, 300, null, !0, 100).onComplete.addOnce((function() {
                                        s.shadowContainer.visible = !1
                                    }))
                                }), 500)
                        }
                    }))
                }, this._destroyAllSymbols = function() {
                    nge.findAll(".bonusSymbol").forEach((function(e) {
                        e.destroy()
                    }))
                }, this._startBonusGameHandler = function() {
                    var t = e._getExpandingSymbol();
                    l = !0, null !== t && (e._setupBackgroundEvents(), e.background.setAnimationByMode(4, "freebonus_play", nge.spine.FREEZE), nge.observer.fire("sound.expandingSelect.play"), e._destroyAllSymbols(), e._fillReelWithSymbols(t), i = !1, e.button && (e.button.inputEnabled = !1), o || (u.alpha = 1, nge.tween.add(u).to({
                        alpha: .5
                    }, 500, null, !0)))
                }, this.onSpacePressedHandler = function() {
                    l || e.super.onSpacePressedHandler(), 2 === e.state && (l = !0)
                }, this.dividingReelsPopupShow = function(e) {
                    c.visible = !0, c.setAnimationByMode(0, "animation", nge.spine.HIDE), c.onComplete.addOnce((function() {
                        c.visible = !1, e && e()
                    }))
                }, this.splitReelsPopupShow = function(e) {
                    m.visible = !0, m.setAnimationByMode(0, "split", nge.spine.HIDE), m.onComplete.addOnce((function() {
                        m.visible = !1, e && e()
                    }))
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("popup.bonusGame.start", e._startBonusGameHandler), nge.observer.add("freespinStartPopup.hide", e.hidePopup), nge.observer.add("popup.dividingReelsPopup.show", e.dividingReelsPopupShow), nge.observer.add("popup.spltiReelsPopup.show", e.splitReelsPopupShow)
                }
            }))
        },
        1229: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Tpl = function(e) {
                var t = nge.Lib.Helper.mobileAndTabletCheck();
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
                            scaleX: .85,
                            scaleY: .85,
                            y: "-10%"
                        },
                        ".album .popupContentHolderParent": {
                            scaleX: 1,
                            scaleY: 1,
                            y: 0
                        },
                        ".portrait .popupButtonsContainer": {
                            scaleX: 1.2,
                            scaleY: 1.2,
                            x: -2,
                            y: -242.5
                        },
                        ".album .popupButtonsContainer": {
                            scaleX: t ? 1.2 : 1,
                            scaleY: t ? 1.2 : 1,
                            y: t ? -242.5 : -80,
                            x: t ? -2 : 0
                        },
                        ".portrait .popupOkButtonStart": {
                            y: 610
                        },
                        ".album .popupOkButtonStart": {
                            y: t ? 360 : 280
                        },
                        ".portrait .popupOkButtonEnd": {
                            y: 610
                        },
                        ".album .popupOkButtonEnd": {
                            y: t ? 260 : 190
                        }
                    },
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "popupOkButtonAsset",
                            frameWidth: 380,
                            fullPath: e + "playarea/popupOkButton.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "notificationPopupBackground",
                            fullPath: e + "playarea/notification_popup_bg.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "notificationOkButtonAsset",
                            width: 852,
                            height: 128,
                            frameWidth: 284,
                            fullPath: e + "playarea/notificationOkButton.png"
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
                                type: mt.objects.SPINE,
                                name: "bgAnimationBigWin",
                                assetKey: "bigWinAnim",
                                x: 0,
                                y: 0
                            }, {
                                type: mt.objects.GROUP,
                                name: "popupShadowContainer",
                                x: "-50%",
                                y: "-50%",
                                contents: []
                            }]
                        }]
                    }
                }
            }
        },
        1230: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Mobile = {}
        },
        1231: function(e, t) {
            nge.App[nge.appNS].Com.Popup.Mobile.Tpl = function(e) {
                var t = e;
                return t || (t = nge.appPath + "img/"), (e = nge.App[nge.appNS].Com.Popup.Tpl(e)).assets.contents = [{
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "popupOkButtonAsset",
                    fullPath: t + "playarea/popupButtonVertical.png",
                    frameWidth: 380
                }], e
            }
        },
        1232: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin = {}
        },
        1233: function(e, t) {
            nge.App[nge.appNS].Com.RegularWin.Cfg = nge.App.DjGameBase.Com.RegularWin.Cfg.extend((function() {
                this.params = this.super.get(), this.params.regularProfile = "hideWithDelayFast", this.params.turboProfile = "hideWithDelayFast", this.params.profiles.hideWithDelayFast.fadeConfig = [{
                    param: "scale",
                    to: {
                        x: 1.5,
                        y: 1.5
                    }
                }, {
                    param: !1,
                    to: {
                        alpha: 0
                    }
                }]
            }))
        },
        1234: function(e, t) {
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
                            y: 820
                        },
                        ".album .regularWinContainer": {
                            y: "50%"
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
                                y: -25,
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
        1235: function(e, t) {
            nge.App[nge.appNS].Com.Shaker = {}
        },
        1236: function(e, t) {
            nge.App[nge.appNS].Com.Shaker.Cfg = Class.extend((function() {
                this.singleton = !0, this.params = {
                    bigWin: {
                        shakingLayers: ["gameScreenContainer", "reelsBorderContainer", "backgroundContainer"],
                        time: 1e4,
                        startEvents: ["win.big.preWinEvent", "slotMachine.startIntrigueAnimation"],
                        stopEvents: ["slotMachine.spinComplete", "background.animatedGrid.stop"],
                        scaleWorld: !1,
                        moveWorld: !1
                    }
                }, this.get = function() {
                    return this.params
                }
            }))
        },
        1237: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar = {}
        },
        1238: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile = {}
        },
        1239: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Cfg = nge.App.DjGameBase.Com.Sidebar.Mobile.Cfg.extend((function() {
                var e = this;
                this.PAYTABLE.winlines.visibility = !1, this.COLORS.featureItemColoredText.color = "#fec36d", this.getPayoutItem = function(t, n, s, a) {
                    t = {
                        paytable_Payouts_image: "image:" + t,
                        paytable_Payouts_payout: []
                    };
                    for (var i = 0; i < s.length; i++) t.paytable_Payouts_payout.push({
                        paytable_Payouts_symbols: s[i].toString(),
                        paytable_Payouts_class: e.getSelectorForPayout(n, a[i])
                    });
                    return t
                }, this.paytablePayoutsVariables = [e.getPayoutItem("paytableSevenBellpng", "2", "50+ 40+ 30+ 26+ 22+ 18+ 14+ 10+ 9 8 7 6".split(" "), [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6]), e.getPayoutItem("paytableOrangePlum", "4", "50+ 40+ 30+ 26+ 22+ 18+ 14+ 10+ 9 8 7 6".split(" "), [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6]), e.getPayoutItem("paytableLemonCherryWatermelon", "6", "50+ 40+ 30+ 26+ 22+ 18+ 14+ 10+ 9 8 7 6".split(" "), [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6])], this.paytableFeaturesVariables = [], this.rulesVariables = [{
                    text_left: nge.i18n.get("sidebar_rules")
                }, {
                    text_left: nge.i18n.get("sidebar_rules_2")
                }], this.paytableRulesVariables = [{
                    title: nge.i18n.get("sidebar_qcs")
                }, {
                    image: "rulesImgQcs"
                }, {
                    text_center: nge.i18n.get("sidebar_qcs_text_part1")
                }, {
                    divider: "divider"
                }, {
                    text_center: nge.i18n.get("sidebar_qcs_text_part2")
                }, {
                    text_left: nge.i18n.get("sidebar_qcs_text_part3")
                }, {
                    title: nge.i18n.get("sidebar_free_spins")
                }, {
                    image: "rulesImgFs"
                }, {
                    text_center: nge.i18n.get("sidebar_free_spins_text_part1")
                }, {
                    divider: "divider"
                }, {
                    text_center: nge.i18n.get("sidebar_free_spins_text_part2")
                }, {
                    divider: "divider"
                }, {
                    text_center: nge.i18n.get("sidebar_all_game_outcomes_text")
                }], this.keypadGuideVariables = {
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
                        s = {};
                    for (t in e.keypadGuideVariables) {
                        var a = e.keypadGuideVariables[t];
                        "big" === a.type && (s.$jscomp$loop$prop$item$19 = {
                            keypadGuideBig_SectionTitle_text: a.title,
                            keypadGuideBig_SectionItems: []
                        }, e.keypadGuideVariables[t].items.forEach(function(e) {
                            return function(t) {
                                e.$jscomp$loop$prop$item$19.keypadGuideBig_SectionItems.push({
                                    keypadGuideBig_SectionItemTexture_image: "image:" + t[0],
                                    keypadGuideBig_SectionItemTitle_text: t[1],
                                    keypadGuideBig_SectionItemDescription_text: t[2]
                                })
                            }
                        }(s)), n.push(s.$jscomp$loop$prop$item$19)), s = {
                            $jscomp$loop$prop$item$19: s.$jscomp$loop$prop$item$19
                        }
                    }
                    return n
                }, this.fillKeypadGuideVariablesSmall = function() {
                    var t = [],
                        n = {};
                    for (a in e.keypadGuideVariables) {
                        var s = e.keypadGuideVariables[a];
                        "small" === s.type && (n.$jscomp$loop$prop$item$21 = {
                            keypadGuideSmall_SectionTitle_text: s.title,
                            keypadGuideSmall_SectionItems: []
                        }, e.keypadGuideVariables[a].items.forEach(function(e) {
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
                    var a = !1;
                    return (n = nge.localData.get("gameModes")) && -1 !== n.indexOf("SweepStakes") && (a = !0, t[t.length - 1].keypadGuideSmall_SectionItems.push({
                        keypadGuideSmall_SectionItemTexture_image: "image:cashKG",
                        keypadGuideSmall_SectionItemTitle_text: nge.i18n.get("kg_Buy_Time"),
                        keypadGuideSmall_SectionItemDescription_text: nge.i18n.get("kg_Buy_Time_description")
                    })), "undefined" != typeof customButtons && customButtons.customBtn01 && t[t.length - 1].keypadGuideSmall_SectionItems.push({
                        keypadGuideSmall_SectionItemTexture_image: "image:homeKG",
                        keypadGuideSmall_SectionItemTitle_text: nge.i18n.get("kg_Home"),
                        keypadGuideSmall_SectionItemDescription_text: nge.i18n.get("kg_Home_description")
                    }), "undefined" != typeof customButtons && customButtons.customBtn02 && !a && t[t.length - 1].keypadGuideSmall_SectionItems.push({
                        keypadGuideSmall_SectionItemTexture_image: "image:cashKG",
                        keypadGuideSmall_SectionItemTitle_text: nge.i18n.get("kg_Cash"),
                        keypadGuideSmall_SectionItemDescription_text: nge.i18n.get("kg_Cash_description")
                    }), t
                }, this.fillRulesRtp = function(e) {
                    var t = nge.localData.get("rtp");
                    if (void 0 !== t && 0 < +t) {
                        var n = {
                            paytableRules_Item_title: !1,
                            paytableRules_Item_image: !1
                        };
                        n.paytableRules_Item_text_center = nge.Lib.Helper.strReplace("%rtpValue%", t + "%", nge.i18n.get("rtpRules")), n.paytableRules_Item_text_justify = !1, n.paytableRules_Item_text_left = !1, n.paytableRules_Item_divider = !1, e.push(n)
                    }
                    return e
                }, this.fillRulesVariables = function() {
                    var t, n = [];
                    for (t in e.rulesVariables) {
                        var s = e.rulesVariables[t],
                            a = {};
                        a.rules_Item_title = !!s.hasOwnProperty("title") && s.title, a.rules_Item_image = !!s.hasOwnProperty("image") && "image:" + s.image, a.rules_Item_text_justify = !!s.hasOwnProperty("text_justify") && s.text_justify, a.rules_Item_text_center = !!s.hasOwnProperty("text_center") && s.text_center, a.rules_Item_text_left = !!s.hasOwnProperty("text_left") && s.text_left, a.rules_Item_divider = !!s.hasOwnProperty("divider") && "image:" + s.divider, n.push(a)
                    }
                    return n
                }, this.fillPaytableRulesVariables = function() {
                    var t, n = [];
                    for (t in e.paytableRulesVariables) {
                        var s = e.paytableRulesVariables[t],
                            a = {};
                        a.paytableRules_Item_title = !!s.hasOwnProperty("title") && s.title, a.paytableRules_Item_image = !!s.hasOwnProperty("image") && "image:" + s.image, a.paytableRules_Item_text_justify = !!s.hasOwnProperty("text_justify") && s.text_justify, a.paytableRules_Item_text_center = !!s.hasOwnProperty("text_center") && s.text_center, a.paytableRules_Item_text_left = !!s.hasOwnProperty("text_left") && s.text_left, a.paytableRules_Item_divider = !!s.hasOwnProperty("divider") && "image:" + s.divider, n.push(a)
                    }
                    return e.fillRulesRtp(n)
                }, this.fillPaytableHtmlBlocks = function(t) {
                    e.pushPaytableHtmlBlock(t, "9s", [5, 4, 3]), e.pushPaytableHtmlBlock(t, "0", [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6]), e.pushPaytableHtmlBlock(t, "1", [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6]), e.pushPaytableHtmlBlock(t, "2", [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6]), e.pushPaytableHtmlBlock(t, "4", [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6]), e.pushPaytableHtmlBlock(t, "6", [50, 40, 30, 26, 22, 18, 14, 10, 9, 8, 7, 6])
                }, this.getVariables = function() {
                    var t = e.super.getVariables();
                    return t.keypadGuideBig = e.fillKeypadGuideVariablesBig(), t.keypadGuideSmall = e.fillKeypadGuideVariablesSmall(), t.paytableRules = e.fillPaytableRulesVariables(), t.paytable_item_left_image = "image:qcf", t.paytable_item_center_image = "image:p0images2", t.paytable_item_center_5_text = "5", t.paytable_item_center_4_text = "4", t.paytable_item_center_3_text = "3", t.paytable_item_center_3_text = "3", t.paytable_item_center_freegames_text = nge.i18n.get("sidebar_scatter_freegames_Text"), t.paytable_item_center_allSymbols_text = nge.i18n.get("sidebar_scatter_allSymbols_Text"), t.paytable_item_right_image = "image:Bolt", t.paytable_item_2_image = "image:paytableSevenBellpng", t.paytable_item_3_image = "image:paytableOrangePlum", t.paytable_item_4_image = "image:paytableLemonCherryWatermelon", t.paytable_item_50_text = "50+", t.paytable_item_40_text = "40+", t.paytable_item_30_text = "30+", t.paytable_item_26_text = "26+", t.paytable_item_22_text = "22+", t.paytable_item_18_text = "18+", t.paytable_item_14_text = "14+", t.paytable_item_10_text = "10+", t.paytable_item_9_text = "9", t.paytable_item_8_text = "8", t.paytable_item_7_text = "7", t.paytable_item_6_text = "6", t
                }
            }))
        },
        1240: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.Controller = nge.App.DjGameBase.Com.Sidebar.Mobile.Controller.extend((function() {
                var e = this,
                    t = function(t) {
                        e.paytableView.updateJackpotSymbolValue(t)
                    };
                this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("sidebar.paytableView.updateJackpotSymbolValue", t)
                }
            }))
        },
        1241: function(e, t) {
            nge.App[nge.appNS].Com.Sidebar.Mobile.PaytableView = nge.App.DjGameBase.Com.Sidebar.Mobile.PaytableView.extend((function() {
                var e = this;
                this.updatePaytableForSymbol = function(t, n, s, a) {
                    n = void 0 === n ? "" : n, s = void 0 === s ? 1 : s, a = nge.localData.get("bet.value");
                    var i = e.convertedPayout[t].awards;
                    if (i && i.length)
                        for (var o = 0; o < i.length; o++) {
                            var l = i[o],
                                r = "ps" + t + n + "-" + l.name,
                                p = l.value * a * s;
                            15 !== l.name && e.changePayoutItemValue(r, p)
                        }
                }, this.updateJackpotSymbolValue = function(t) {
                    t && t.key && t.award && e.changePayoutItemValue("ps" + t.key + "-15", t.award)
                }
            }))
        },
        1242: function(e, t) {
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
        1243: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine = {}
        },
        1244: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Cfg = nge.App.DjGameBase.Com.SlotMachine.Cfg.extend((function() {
                var e = Array(60).fill(1);
                this.params.additionalBlurs = !1, this.params.mw = 60, this.params.mh = 1, this.params.mhv = Array(60).fill(1), this.params.tintDark = 12290252, this.params.tintNormal = 16777215, this.params.tintDarkAlpha = .7, this.params.tintNormalAlpha = 1, this.params.imageHeight = "original", this.params.imageWidth = "original", this.params.tweenDuration.blur = 85, this.params.th = e, this.params.tweenDuration.oldSymbols = 138, this.params.tweenDuration.newSymbols = 138, this.params.symbolsBlurKeys = "100 101 102 103 104 105 106 107 108 109".split(" "), this.params.symbolAnimationContainerName = "slotMachineSymbolWinContainer", this.params.rowsXoffset = Array(60).fill(0), e = [776, 849, 766, 844];
                for (var t = [6, -307, -619, -609, -921, -1234, -1223, -1536, -1848, -1837, -2149, -2462, -2452, -2765, -3077], n = 0; 60 > n; n++) this.params.rowsXoffset[n] = t[Math.floor(n / 4)] - e[n % 4];
                for (this.params.rowsYoffset = Array(60).fill(0), e = [520, 377, 520, 377], t = [0, 284, 568, 0, 284, 568, 0, 284, 568, 0, 284, 568, 0, 284, 568], n = 0; 60 > n; n++) this.params.rowsYoffset[n] = t[Math.floor(n / 4)] - e[n % 4];
                this.params.symbolsLanding = [{
                    symbol: "9",
                    animationName: "custom"
                }, {
                    symbol: "11",
                    animationName: "landing"
                }], this.params.recyclerView.enabled = !0, this.params.recyclerView.reelsStopCounterBase = Array(60).fill(8), this.params.recyclerView.reelsStopCounterBonus = Array(60).fill(8), this.params.recyclerView.reelsStopCounter = Array(60).fill(16), this.params.recyclerView.reelsSpeed = Array(60).fill(1.5), this.params.recyclerView.reelsSpeedUpSpeed = 5, this.params.recyclerView.reelsIntrigueSpeed = 2, this.params.recyclerView.hideBorderSymbols = !0, this.params.recyclerView.borderSymbolsCount = 1, e = function(e) {
                    for (var t = [], n = 0; 60 > n; n++) {
                        for (var s = [], a = e && -1 < [4, 16, 28, 40, 52].indexOf(n) ? 10 : 9, i = 0; i < a; i++) s.push("10" + i);
                        t.push(s)
                    }
                    return t
                }, this.params.symbolsBlurKeys = e(!0), this.params.symbolsBlurKeysMainGame = e(!0), this.params.symbolsBlurKeysBonusGame = e(!1)
            }))
        },
        1245: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Controller = nge.App.DjGameBase.Com.SlotMachine.Controller.extend((function() {
                var e, t = this,
                    n = this,
                    s = [],
                    a = [],
                    i = [],
                    o = [],
                    l = [];
                this.create = function() {
                    this.super.create(), this.createReespinReelsAnimation(), this.createDividingReelsFrame(), e = this.getInstance("Cfg").get()
                }, this.createDividingReelsFrame = function() {
                    var e = nge.find("^slotMachineWinFrameContainer"),
                        t = 0;
                    l = nge.localData.get("reelsWithFrame") ? nge.localData.get("reelsWithFrame") : [], o = [], i = [];
                    for (var n = 0; 5 > n; n++)
                        for (var s = {}, a = 0; 3 > a; s = {
                                $jscomp$loop$prop$frameAnim$23: s.$jscomp$loop$prop$frameAnim$23,
                                $jscomp$loop$prop$symbolDivinigReelAnim$24: s.$jscomp$loop$prop$symbolDivinigReelAnim$24
                            }, a++) {
                            var r = 322 * n - 644 - 2 + 1 * n,
                                p = 284 * a - 302 - 5;
                            s.$jscomp$loop$prop$frameAnim$23 = nge.objects.create(new nge.Mlm.Objects.Spine({
                                assetKey: "winframe",
                                name: "winframe_" + t,
                                anchorX: .5,
                                anchorY: .5,
                                x: r,
                                y: p,
                                scaleX: .985,
                                scaleY: .985,
                                isVisible: !0
                            }), e), s.$jscomp$loop$prop$frameAnim$23.onComplete.addOnce(function(e) {
                                return function() {
                                    e.$jscomp$loop$prop$frameAnim$23.visible = !1
                                }
                            }(s)), -1 < l.indexOf(t) && (s.$jscomp$loop$prop$frameAnim$23.visible = !0, s.$jscomp$loop$prop$frameAnim$23.setAnimationByMode(0, "play", nge.spine.LOOP)), s.$jscomp$loop$prop$symbolDivinigReelAnim$24 = nge.objects.create(new nge.Mlm.Objects.Spine({
                                assetKey: "landing_cash",
                                name: "symbolDivinigReelAnim_" + t,
                                anchorX: .5,
                                anchorY: .5,
                                x: r,
                                y: p,
                                isVisible: !1
                            }), e), s.$jscomp$loop$prop$symbolDivinigReelAnim$24.onComplete.addOnce(function(e) {
                                return function() {
                                    e.$jscomp$loop$prop$symbolDivinigReelAnim$24.visible = !1
                                }
                            }(s)), o.push(s.$jscomp$loop$prop$symbolDivinigReelAnim$24), i.push(s.$jscomp$loop$prop$frameAnim$23), t++
                        }
                }, this.enableDividingReelsFrame = function(e, t) {
                    i[e].visible = t, (o[e].visible = t) && (i[e].scale.set(.985), i[e].alpha = 1, i[e].setAnimationByMode(0, "play", nge.spine.LOOP), o[e].setAnimationByMode(0, "landing", nge.spine.HIDE), o[e].onComplete.addOnce((function() {
                        o[e].visible = !1
                    })))
                }, this.createReespinReelsAnimation = function() {
                    s = [], a = [];
                    for (var e = {}, t = 0; 15 > t; e = {
                            $jscomp$loop$prop$respin_animation2$26: e.$jscomp$loop$prop$respin_animation2$26
                        }, t++) {
                        var n = nge.find("^respin_animation_" + t);
                        n.visible = !1, n.onComplete.addOnce((function() {
                            s.visible = !1
                        })), s.push(n), e.$jscomp$loop$prop$respin_animation2$26 = nge.find("^respin2_animation_" + t), e.$jscomp$loop$prop$respin_animation2$26.visible = !1, e.$jscomp$loop$prop$respin_animation2$26.onComplete.addOnce(function(e) {
                            return function() {
                                e.$jscomp$loop$prop$respin_animation2$26.visible = !1
                            }
                        }(e)), a.push(e.$jscomp$loop$prop$respin_animation2$26)
                    }
                }, this.animateReespinReelsAnimation = function() {
                    var e = nge.localData.get("cutReels"),
                        a = nge.localData.get("dividingReels.inProgress"),
                        i = nge.localData.get("dividingReelsResponse.was");
                    a && e && 0 < e.length ? (nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("win.hide"), a = nge.localData.get("scatters.DividingReels.spin"), nge.rafSetTimeout((function() {
                        nge.observer.fire("slotMachine.updateBlurs.custom", !0), nge.observer.fire("popup.dividingReelsPopup.show", (function() {
                            for (var t = [], a = nge.localData.get("slotMachine.spinResultStage2.rows")[0], i = {
                                    $jscomp$loop$prop$i$28: 0
                                }; i.$jscomp$loop$prop$i$28 < e.length;
                                (i = {
                                    $jscomp$loop$prop$i$28: i.$jscomp$loop$prop$i$28
                                }).$jscomp$loop$prop$i$28++) nge.rafSetTimeout(function(i) {
                                return function() {
                                    s[+e[i.$jscomp$loop$prop$i$28]].visible = !0, s[+e[i.$jscomp$loop$prop$i$28]].setAnimationByMode(0, "animation", nge.spine.HIDE), nge.rafSetTimeout((function() {
                                        for (var s = 4 * e[i.$jscomp$loop$prop$i$28], o = 4 * e[i.$jscomp$loop$prop$i$28] + 4, r = s; r < o; r++) {
                                            t.push(r);
                                            var p = a[r];
                                            r === s && nge.observer.fire("sound.flash_cells.play"), n._service._view._reels[r].showReel(!0, 0 == r % 4, p), i.$jscomp$loop$prop$i$28 === e.length - 1 && r === o - 1 && nge.rafSetTimeout((function() {
                                                l = [], nge.localData.set("reelsWithFrame", l), nge.localData.set("dividingReels.spin", !0), nge.observer.fire("slotMachine.spinCommand", null, 1)
                                            }), 100)
                                        }
                                    }), 80)
                                }
                            }(i), 50 * i.$jscomp$loop$prop$i$28);
                            nge.localData.set("indexCutingReels", t)
                        }))
                    }), a ? 1200 : 1)) : i && (nge.localData.get("freespinscustom.inprogress") || nge.observer.fire("buttons.freespinFinish"), nge.localData.set("dividingReelsResponse.was", !1), t.animateStopReespinReelsAnimation())
                }, this.animateStopReespinReelsAnimation = function(e) {};
                var r = function(e) {
                        return function() {
                            var t = nge.localData.get("dividingReelsSpinNow"),
                                s = nge.localData.get("freespin.inProgress"),
                                i = nge.localData.get("fakeSpin");
                            t || !i && s || !nge.localData.get("slotMachine.spinResult.rows") || ("0" === (t = nge.localData.get("slotMachine.spinResult.rows")[0])[e] ? i || (nge.observer.fire("sound.QCF_wild.play"), n.enableDividingReelsFrame(Math.floor(e / 4), !0)) : 11 === t[e] && i && (nge.observer.fire("sound.fake.QCF_wild.play"), i = Math.floor(+e / 4), a[i].visible = !0, a[i].setAnimationByMode(0, "landing", nge.spine.HIDE)))
                        }
                    },
                    p = function() {
                        c(!1), nge.localData.get("dividingReels.inProgress") && nge.localData.set("slotmachine.cutreels", !1)
                    },
                    c = function(e) {
                        for (var t = 0; t < i.length; t++) e ? 0 < (l = nge.localData.get("reelsWithFrame")).length && -1 < l.indexOf(t) && (i[t].visible = e, i[t].setAnimationByMode(0, "play", nge.spine.LOOP)) : (i[t].visible = e, o[t].visible = e)
                    },
                    m = function(e) {
                        for (var t = 0; t < i.length; t++) e ? -1 < (l = nge.localData.get("reelsWithFrame")).indexOf(t) && (i[t].setAnimationByMode(0, "play", nge.spine.LOOP), i[t].visible = e) : (i[t].stop(), i[t].visible = e)
                    },
                    u = function(e) {
                        e.enable && n.enableDividingReelsFrame(e.index, !1)
                    },
                    g = function() {
                        nge.localData.get("dividingReelsSpinNow") && t.finishDividingReelsGame(!1), c(!1)
                    },
                    b = function() {
                        c(!0)
                    };
                this._spinCompleteHandler = function() {
                    nge.localData.set("slotmachine.cutreels", !1);
                    var e = nge.localData.get("dividingReels.inProgress"),
                        t = nge.localData.get("cutReels");
                    e && t && 0 < t.length && nge.localData.set("slotmachine.cutreels", !0)
                }, this._spinHandler = function() {
                    var e = nge.localData.get("dividingReelsSpinNow"),
                        t = nge.localData.get("slotMachine.state"),
                        s = nge.localData.get("freespinswas");
                    if (nge.localData.get("freespin.inProgress") || !(e || "Ready" === t && s)) return n._service.spinHandler();
                    nge.localData.set("freespinswas", !1), this.finishDividingReelsGame(!0, (function() {
                        c(!1), c(!0), nge.observer.fire("slotMachine.updateBlurs.custom", !1), nge.rafSetTimeout((function() {
                            n._service.spinHandler()
                        }), 250)
                    }))
                };
                var y = [];
                this.rebuildReelsBeforeAfterFreeSpins = function(e) {
                    var t, s = nge.localData.get("indexCutingReels").slice();
                    t = nge.localData.get("slotMachine.spinResult.rows") ? nge.localData.get("slotMachine.spinResult.rows")[0] : nge.localData.get("slotMachine.gameParameters.initialSymbols")[0],
                        function() {
                            for (var o = {
                                    $jscomp$loop$prop$i$30: 0
                                }; o.$jscomp$loop$prop$i$30 < s.length;
                                (o = {
                                    $jscomp$loop$prop$i$30: o.$jscomp$loop$prop$i$30
                                }).$jscomp$loop$prop$i$30 += 4) nge.rafSetTimeout(function(o) {
                                return function() {
                                    var l = Math.floor(+s[o.$jscomp$loop$prop$i$30] / 4);
                                    y.push(l);
                                    var r = nge.localData.get("fakeSpin");
                                    r && nge.observer.fire(r ? "dividingFakeSpinReels" : "sound.flash_cells.play"), a[l].visible = !0, a[l].setAnimationByMode(0, "play", nge.spine.HIDE), nge.rafSetTimeout((function() {
                                        var a = s[o.$jscomp$loop$prop$i$30],
                                            r = a + 4;
                                        for (i[l].visible = !1; a < r; a++) {
                                            var p = t[a];
                                            n._service._view._reels[a].showReel(e, 0 == a % 4, e ? "11" : p), o.$jscomp$loop$prop$i$30 === s.length - 4 && a === r - 1 && (e ? (n.updateBlurs(!0), nge.localData.set("fakeSpin", !1), nge.observer.fire("freespinStartPopup.hide"), nge.observer.fire("intro_sound.stop.afterfakespin"), nge.observer.fire("freespin.press.spinButton", null, 1e3)) : (nge.localData.set("slotmachine.cutreels", !1), nge.observer.fire("enable.after.freespins", null, 1), nge.observer.fire("leftSpinBar.enable", !0), c(!0)))
                                        }
                                    }), 550)
                                }
                            }(o), 50 * o.$jscomp$loop$prop$i$30)
                        }()
                }, this.updateBlurs = function(t) {
                    nge.observer.fire("slotMachine.setSymbolsBlurKeys", t ? e.symbolsBlurKeysBonusGame : e.symbolsBlurKeysMainGame), nge.observer.fire("slotMachine.updateBlurs")
                }, this.finishDividingReelsGame = function(e, t) {
                    var a = nge.localData.get("indexCutingReels") ? nge.localData.get("indexCutingReels").slice() : [];
                    nge.localData.set("indexCutingReels", []), nge.observer.fire("winlines.stopAnimation"), nge.observer.fire("slotmachine.tint.restore"), e || nge.observer.fire("leftSpinBar.enable");
                    for (var i = 0, o = {
                            $jscomp$loop$prop$i$32: 0
                        }; o.$jscomp$loop$prop$i$32 < a.length;
                        (o = {
                            $jscomp$loop$prop$i$32: o.$jscomp$loop$prop$i$32
                        }).$jscomp$loop$prop$i$32 += 4) nge.rafSetTimeout(function(i) {
                        return function() {
                            0 === i.$jscomp$loop$prop$i$32 && nge.observer.fire("sound.flash_cells.play"), s[Math.floor(+a[i.$jscomp$loop$prop$i$32] / 4)].visible = !0, s[Math.floor(+a[i.$jscomp$loop$prop$i$32] / 4)].setAnimationByMode(0, "animation", nge.spine.HIDE);
                            for (var o = a[i.$jscomp$loop$prop$i$32]; o < a[i.$jscomp$loop$prop$i$32] + 4; o++) n._service._view._reels[o].showReel(!1, 0 == o % 4);
                            if (i.$jscomp$loop$prop$i$32 === a.length - 4 && e) return t && t(), !0
                        }
                    }(o), 50 * i), i++
                }, this.changeBet = function(e) {
                    nge.rafSetTimeout((function() {
                        var e = nge.localData.get("coins.value"),
                            t = nge.localData.get("bet.value"),
                            n = nge.localData.get("reelsImprovment");
                        e: {
                            for (var s = 0; s < n.length; s++)
                                if (+n[s].bet == +t && +n[s].coinValue == +e) {
                                    e = n[s].wonSymbols, t = n[s].spinsLeft, n = n[s].spinsTotal;
                                    break e
                                } e = [],
                            n = t = "10"
                        }
                        nge.localData.set("leftSpinBar.value", (n ? +n : 10) - (t ? +t : 10)), nge.localData.set("reelsWithFrame", e), m(!1), m(!0), n = nge.localData.get("dividingReels.inProgress"), nge.localData.get("freespin.inProgress") || n || nge.observer.fire("leftSpinBar.enable", !0)
                    }), 1)
                };
                var d = function() {};
                this.makefakeSpin = function() {
                    nge.localData.set("fakeSpin", !0), nge.observer.fire("slotMachine.setSymbolsBlurKeys", ["blank", "blank", "blank", "11_blur"]), nge.observer.fire("slotMachine.updateBlurs"), nge.rafSetTimeout((function() {
                        nge.observer.fire("sound.intrigue_flash.play"), n._service._view.reelSpins(), nge.rafSetTimeout((function() {
                            for (var e = Array(60).fill("blank"), t = nge.localData.get("indexCutingReels").slice(), s = 0; s < t.length; s += 4) e[+t[s]] = 11;
                            t = nge.Lib.Helper.rowsToColumns([e]), nge.localData.set("slotMachineIntrigue", {
                                status: !1
                            }), nge.localData.set("slotMachine.spinResult.rows", [e]), nge.localData.set("slotMachine.spinResult.columns", t), n._service._view.setNewReelsCfg(t)
                        }), 250)
                    }), 1)
                }, this.customSubscribe = function() {
                    t.super.customSubscribe(), nge.observer.add("slotMachine.reelsImprovment", d, !1, !0), nge.observer.add("slotMachine.spinCommand", d, !1, !0), nge.observer.add("slotMachine.spinComplete", t._spinCompleteHandler), nge.observer.add("slotMachine.spinComplete.custom", (function() {
                        nge.rafSetTimeout((function() {
                            t.rebuildReelsBeforeAfterFreeSpins(!0)
                        }), 300)
                    })), nge.observer.add("slotMachine.updateBlurs.custom", t.updateBlurs), nge.observer.add("freespinStartPopup", g), nge.observer.add("slotMachine.enableframes", b), nge.observer.add("background.enableDividers", u), nge.observer.add("Transport.close", p), nge.observer.add("slotMachine.startIntrigueAnimation", t._service.startIntrigueAnimation), nge.observer.add("slotMachine.stopJackpotWin", t._service.spinCompleteCallback), nge.observer.add("slotMachine.test", t._service._view.test), nge.observer.add("slotMachine.test2", t._service._view.test2), nge.observer.add("slotMachine.showFromAlpha", t._service._view.showFromAlpha), nge.observer.add("slot.winProcessingFinish", t.animateReespinReelsAnimation), nge.observer.add("slotMachine.enableDividingReelsFrame", t.enableDividingReelsFrame), nge.observer.add("freespins.animateOneToFour", (function() {
                        nge.observer.fire("popup.spltiReelsPopup.show", t.makefakeSpin)
                    })), nge.observer.add("freespins.animateFourToOne", (function() {
                        t.rebuildReelsBeforeAfterFreeSpins(!1)
                    }));
                    for (var e = 0; 60 > e; e += 4) nge.observer.add("slotMachine.reel_" + e + ".customPostAnimation.stopped", r(e));
                    nge.observer.add("bet.change", t.changeBet), nge.observer.add("coins.change", t.changeBet), nge.observer.add("dividingReels.restore", (function() {
                        var e = nge.localData.get("brain.restoreGame.lastResponse.totalBonusWin");
                        nge.observer.fire("freespin.restoreText", e)
                    }))
                }
            }))
        },
        1246: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerReel = nge.App.DjGameBase.Com.SlotMachine.RecyclerReel.extend((function() {
                var e = this,
                    t = this;
                this.jumpDistance = 50, this.jumpTimeUp = 100, this.jumpTimeDown = 50, this.isBig = this.isSmall = !1, this._position = {};
                var n = null,
                    s = null,
                    a = 0,
                    i = 0,
                    o = !1,
                    l = null,
                    r = !1;
                this.maskBig, this.maskSmall, this.underBg, this.init = function(i) {
                    e.super.init(i), a = e._offsetY, (n = nge.findOne("^spinification" + Math.floor(e._index / 4))).y -= 14, s = nge.findOne("^spinificationAnim" + Math.floor(e._index / 4)), r = !1, t._position = {
                        x: e._symbols[0]._texture.parent.x,
                        y: e._symbols[0]._texture.parent.y
                    }, e.underBg = nge.findOne("^holded_bg_" + e._index)
                }, this.customStartCallback = function(t) {
                    i = t = 30 * Math.floor(e._index / 4);
                    var n = e.getContainer(),
                        s = n.y;
                    return (n = nge.tween.add(n)).to({
                        y: s
                    }, t + 1, nge.Lib.Tween.Easing.Linear.None, !1), n.to({
                        y: s - e.jumpDistance
                    }, e.jumpTimeUp, nge.Lib.Tween.Easing.Linear.None, !1), n.to({
                        y: s
                    }, e.jumpTimeDown, nge.Lib.Tween.Easing.Linear.None, !1), n.start(), {
                        tween: n,
                        delay: 0
                    }
                }, this._hideAnimation = function(e) {
                    (l = nge.tween.add(n).to({
                        alpha: 0
                    }, 300, null, !1, e)).onStart.add((function() {
                        n.alpha = 1, n.visible = !0, n.setAnimationByMode(0, "reel_rotation", nge.spine.HIDE), n.onComplete.addOnce((function() {
                            n.visible = !1
                        }))
                    })), l.start()
                }, this._showAnimation = function(e) {
                    l = nge.tween.add(n).to({
                        alpha: 1
                    }, 300, null, !1, e), n.alpha = 0, l.onStart.add((function() {
                        o = !0, r || (n.visible = !0, n.setAnimationByMode(0, "reel_rotation", nge.spine.LOOP))
                    })), l.start(), s && nge.rafSetTimeout((function() {
                        s.visible = !0, s.setAnimationByMode(0, "reel_start_light", nge.spine.HIDE), s.onComplete.addOnce((function() {
                            s.visible = !1
                        }))
                    }), i)
                }, this._tryLightupReel = function() {
                    r = !1, e._onhold || e._showAnimation(i + 400)
                }, this.step = function(t, n, s) {
                    e.super.step(void 0 === t ? 100 : t, void 0 === n ? 1 : n, void 0 === s ? 0 : s), !e._counter && o && (o = !1, e._hideAnimation(0))
                }, this.speedUp = function() {
                    e.super.speedUp(), e._tryHideAnimation(), r = !0
                }, this._tryHideAnimation = function() {
                    r || (l && l.isRunning && l.stop(), (l = nge.tween.add(n).to({
                        alpha: 0
                    }, 300)).onComplete.add((function() {
                        n.stopTrack(0), nge.localData.get("slotMachineIntrigue.status") && (n.stopTrack(1), n.setToSetupPose()), n.visible = !1
                    })), l.start())
                }, this.stopHandler = function() {
                    e.super.stopHandler(), e._tryHideAnimation(), r = !0
                }, this.customStopCallback = function() {
                    var e = this,
                        t = this.getIndex(),
                        n = {
                            y: 0
                        },
                        s = nge.tween.add(n),
                        a = 0;
                    return s.to({
                        y: this.stopJumpDistance
                    }, this.stopJumpTime / 2, nge.Lib.Tween.Easing.Linear.None, !1), s.to({
                        y: 0
                    }, this.stopJumpTime / 2, nge.Lib.Tween.Easing.Linear.None, !1), s.onUpdateCallback((function() {
                        e.move(n.y - a), a = n.y
                    })), s.onComplete.addOnce((function() {
                        e.move(n.y - a), nge.observer.fire("slotMachine.reel_" + t + ".customPostAnimation.stopped")
                    })), s.start(), {
                        tween: s,
                        delay: this.stopJumpTime
                    }
                }, this.start = function(t, n) {
                    e.super.start(void 0 === t ? 1 : t, void 0 === n ? 0 : n), e._tryLightupReel()
                }, this.startIntrigueAnimation = function() {
                    n.visible = !0, n.setAnimationByMode(1, "spinification", nge.spine.LOOP)
                }, this.resetPosition = function() {
                    e.super.resetPosition(), p || (e._symbols[2]._texture.y = 284, e._symbols[1]._texture.y = 142, e._symbols[0]._texture.y = 0)
                }, this.hold = function() {
                    e.underBg.visible = e._container.visible && 0 < e._container.alpha, e.super.hold()
                }, this.unhold = function() {
                    e.underBg.visible = !1, e.super.unhold()
                };
                var p = !1;
                this.showReel = function(t, n, s) {
                    if (n) {
                        n = t ? 5 : 85;
                        var i = t ? 0 : 70,
                            o = t ? .45 : 1;
                        p = !t, nge.observer.fire("background.enableDividers", {
                            index: Math.floor(e._index / 4),
                            enable: t
                        }), e._offsetY = t ? a : a + 70, e._symbols[2]._texture.parent.x = e._position.x + n, e._symbols[2]._texture.parent.y = e._position.y + i, e._symbols[1]._texture.parent.x = e._position.x + n, e._symbols[1]._texture.parent.y = e._position.y + i, e._symbols[0]._texture.parent.x = e._position.x + n, e._symbols[0]._texture.parent.y = e._position.y + i, e._container.visible = !0, e.maskSmall.visible = t, e.maskBig.visible = !t, t ? (e._container.mask = e.maskSmall, e.maskBig.visible = !1, e.maskSmall.visible = !0) : (e._container.mask = e.maskBig, e.maskBig.visible = !0, e.maskSmall.visible = !1), e._symbolSize.height = t ? 142 : 284, e._symbols[2]._texture.scaleX = o, e._symbols[2]._texture.scaleY = o, e._symbols[1]._texture.scaleX = o, e._symbols[1]._texture.scaleY = o, e._symbols[0]._texture.scaleX = o, e._symbols[0]._texture.scaleY = o, e._symbols[2]._texture.visible = !0, e._symbols[1]._texture.visible = !0, e._symbols[0]._texture.visible = !0, t || (e._symbols[2]._texture.y = 426, e._symbols[1]._texture.y = 142, e._symbols[0]._texture.y = -142), e.underBg.scaleX = t ? .5 : 1, e.underBg.scaleY = t ? .5 : 1
                    } else p = !1, e._symbolSize.height = 142, e._symbols[2]._texture.scaleX = .45, e._symbols[2]._texture.scaleY = .45, e._symbols[1]._texture.scaleX = .45, e._symbols[1]._texture.scaleY = .45, e._symbols[0]._texture.scaleX = .45, e._symbols[0]._texture.scaleY = .45, e._symbols[2]._texture.visible = t, e._symbols[1]._texture.visible = t, e._symbols[0]._texture.visible = t, e._container.alpha = t ? 1 : 0, e._container.visible = t, e._onhold = !t, n = nge.localData.get("holdReelsData"), nge.localData.get("freespin.inProgress") && -1 < n.indexOf(e._index) ? e.hold() : t || e.hold();
                    t && e._symbols[1]._texture.loadTexture(s + "")
                }
            }))
        },
        1247: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.RecyclerView = nge.App.DjGameBase.Com.SlotMachine.RecyclerView.extend((function() {
                var e = this,
                    t = {},
                    n = {},
                    s = 0;
                this.createSlotMachine = function(e, t, n, s) {
                    var a = this;
                    this.super.createSlotMachine(e, t, n, void 0 !== s && s), this._applyMasks(), nge.rafSetTimeout((function() {
                        a.disableSmallReels()
                    }), 1)
                }, this._applyMasks = function() {
                    e._reels.forEach((function(e, s) {
                        e._container.mask = t[s], e.maskSmall = t[s], e.maskBig = n[s]
                    }))
                }, this._createMask = function() {
                    for (var s = 0, a = 0; 10 > a; a += 2)
                        for (var i = 0; 6 > i; i += 2)
                            for (var o = 0; 4 > o; o++) {
                                var l = 2 <= o ? 1 : 0,
                                    r = 0 == (o + 1) % 2 ? 1 : 0,
                                    p = [160 * (a + l) + 4, 142 * (i + r) + 4, 160, 142];
                                t[s] = nge.objects.create(new nge.Mlm.Objects.Mask({
                                    rects: p
                                }), e._reelsContainer.parent, !0), t[s].x = -805, t[s].y = -453, 0 == s % 4 && (p = [160 * (a + l), 142 * (i + r) + 4, 324, 284], n[s] = nge.objects.create(new nge.Mlm.Objects.Mask({
                                    rects: p
                                }), e._reelsContainer.parent, !0), n[s].x = -805, n[s].y = -453, n[s].visible = !1), s++
                            }
                }, this.getIntrigueStopCounters = function() {
                    var t = e.super.getIntrigueStopCounters(),
                        n = Array(t.length).fill(0);
                    return [4, 16, 28, 40, 52].forEach((function(e) {
                        n[e] = t[e] / 15
                    })), n
                }, this._checkIntrigue = function(t) {
                    e.super._checkIntrigue(t);
                    var n = nge.localData.get("slotMachineIntrigue");
                    n && n.status && nge.localData.get("intrigueStarted") && [28, 40, 52].includes(t) && e.startIntrigueAnimation(t + 3)
                }, this.isPassAdditionalLandingRule = function(e, t) {
                    return !(40 === e && 1 > s || 52 === e && 2 > s) && (s++, !0)
                }, this.reelSpins = function(t) {
                    t = void 0 === t ? "forward" : t, s = 0, e._reels.filter((function(e) {
                        return e.isOnHold()
                    })).length !== e._reels.length && (e._spinDirection = t, e._requestStartTime = nge.Lib.Time.get(), e._speedUp = !1, e._reelsStoped = 0, e._reels.forEach((function(n, s) {
                        n.start("forward" === t ? 1 : -1, s * e._cfg.tweenStartInterval)
                    })))
                }, this.disableSmallReels = function() {
                    for (var t = nge.localData.get("indexCutingReels") ? nge.localData.get("indexCutingReels") : [], n = nge.localData.get("slotMachine.gameParameters.initialSymbols") ? nge.localData.get("slotMachine.gameParameters.initialSymbols")[0] : nge.localData.get("slotMachine.spinResult.rows")[0], s = 0; 60 > s; s++) - 1 < t.indexOf(s) ? e._reels[s].showReel(!0, 0 == s % 4, n[s]) : e._reels[s].showReel(!1, 0 == s % 4)
                }, this.startIntrigueAnimation = function(t) {
                    e._reels[t] && e._reels[t].startIntrigueAnimation()
                }, this.test = function() {}, this.cycleCompleteFirstTime = function() {}, this.test2 = function() {
                    for (var t = 0; 60 > t; t++) e._reels[t].showReel(!1, 0 == t % 4)
                }, this.showFromAlpha = function() {
                    for (var t = [], n = nge.localData.get("indexCutingReels").slice(), s = 0; s < n.length; s += 4) t.push(+n[s]);
                    for (n = nge.localData.get("slotMachine.spinResult.rows")[0], s = 0; 15 > s; s++)
                        if (0 > t.indexOf(s)) {
                            var a = 4 * s;
                            e._reels[a].getSymbolAt(0).showFromAlpha(n[a])
                        }
                }, this.customSpinCompleteWhenHoldAllReels = function() {
                    e._reels.filter((function(e) {
                        return e.isOnHold()
                    })).length === e._reels.length && nge.rafSetTimeout((function() {
                        e._service.spinCompleteCallback()
                    }), 500)
                }
            }))
        },
        1248: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Service = nge.App.DjGameBase.Com.SlotMachine.Service.extend((function() {
                var e = this,
                    t = this;
                this.startIntrigueAnimation = function(t) {
                    return e._view.startIntrigueAnimation(t)
                }, this.spinCompleteCallback = function() {
                    nge.localData.get("fakeSpin") ? nge.observer.fire("slotMachine.spinComplete.custom") : this.super.spinCompleteCallback()
                }, this._doSpin = function(e) {
                    this.super._doSpin(e), t._view.customSpinCompleteWhenHoldAllReels()
                }
            }))
        },
        1249: function(e, t) {
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
                    name: "8",
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
                    name: "11",
                    textureUrl: "symbol_split_00.png",
                    winlineTime: 1e3,
                    spine: {
                        animation: "play",
                        atlas: "split"
                    },
                    repeat: 1
                }, {
                    name: "100",
                    textureUrl: "100.png"
                }, {
                    name: "101",
                    textureUrl: "101.png"
                }, {
                    name: "102",
                    textureUrl: "102.png"
                }, {
                    name: "103",
                    textureUrl: "103.png"
                }, {
                    name: "104",
                    textureUrl: "104.png"
                }, {
                    name: "105",
                    textureUrl: "105.png"
                }, {
                    name: "106",
                    textureUrl: "106.png"
                }, {
                    name: "107",
                    textureUrl: "107.png"
                }, {
                    name: "108",
                    textureUrl: "108.png"
                }, {
                    name: "109",
                    textureUrl: "109.png"
                }, {
                    name: "blank",
                    textureUrl: "blank.png"
                }, {
                    name: "11_blur",
                    textureUrl: "symbol_split_00_blur.png"
                }]
            }))
        },
        1250: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Symbol = nge.App.DjGameBase.Com.SlotMachine.Symbol.extend((function() {
                var e, t, n = this,
                    s = null;
                this.init = function(e, t, a, i) {
                    n.super.init(e, t, a, i), s = new PIXI.filters.AdjustmentFilter
                }, this.setSymbolBase = function(e) {
                    this.super.setSymbolBase(e), this._texture.filters = []
                }, this._getGlobalPosition = function(e) {
                    for (var t = {
                            x: 0,
                            y: 0
                        }; e.parent;) t.x += e.x, t.y += e.y, e = e.parent;
                    return t
                }, this.animateSymbolLanding = function() {
                    n._texture.filters = [s];
                    var e = nge.tween.add({}).to({}, 800);
                    e.onUpdateCallback((function(e, t) {
                        s.brightness = .125 > t || .375 > t && .25 < t || .675 > t && .5 < t || .875 > t && .75 < t ? 1.4 : 1
                    })), e.onComplete.add((function() {
                        s.brightness = 1, n._texture.filters = []
                    })), e.start()
                }, this.animate = function(t, n, s, a, i, o) {
                    e = i, this.super.animate(t, n, nge.spine.FREEZE, a, i, o)
                }, this.animationCreate = function() {
                    n.super.animationCreate();
                    var s = nge.localData.get("indexCutingReels"),
                        a = nge.localData.get("fakeSpin");
                    t = 1, s && 0 < s.length && !a && (t = -1 < s.indexOf(e.reel) ? .45 : 1), n.resize(t, t)
                }, this.createMockAnimation = function() {
                    n.super.createMockAnimation();
                    var e = nge.assets.getQualityFactor();
                    n.symbolMockObject.scale.set(t / e, t / e)
                }, this.showFromAlpha = function(e) {
                    n._texture.alpha = 0, n._texture.loadTexture(e), (e = nge.tween.add(n._texture).to({
                        alpha: 1
                    }, 350, nge.Lib.Tween.Easing.Quadratic.InOut)).onComplete.add((function() {
                        n._texture.alpha = 1
                    })), e.start()
                }
            }))
        },
        1251: function(e, t) {
            nge.App[nge.appNS].Com.SlotMachine.Tpl = function() {
                for (var e = nge.Lib.Helper.mobileAndTabletCheck(), t = [], n = [], s = function(e, t, n) {
                        return {
                            x: 322 * Math.floor(e / 3) - 644 - (void 0 === n ? 0 : n),
                            y: e % 3 * 284 - 284 - (void 0 === t ? 0 : t)
                        }
                    }, a = 0, i = 0; 10 > i; i += 2)
                    for (var o = 0; 6 > o; o += 2)
                        for (var l = 0; 4 > l; l++) n.push({
                            type: mt.objects.Image,
                            name: "holded_bg_" + a,
                            assetKey: "split_bg",
                            isVisible: !1,
                            scaleX: .5,
                            scaleY: .5,
                            x: 161 * (i + (2 <= l ? 1 : 0)) - 805,
                            y: 142 * (o + (0 == (l + 1) % 2 ? 1 : 0)) - 426 - 25
                        }), a++;
                for (a = 0; 60 > a; a++) 0 < a % 4 || (i = a / 4, t.push(Object.assign({}, {
                    type: mt.objects.SPINE,
                    name: "spinification" + i,
                    assetKey: "spinification",
                    isVisible: !1
                }, s(i))), t.push(Object.assign({}, {
                    type: mt.objects.SPINE,
                    name: "respin_animation_" + i,
                    assetKey: "respin_animation",
                    isVisible: !1
                }, s(i, 25))), t.push(Object.assign({}, {
                    type: mt.objects.SPINE,
                    name: "respin2_animation_" + i,
                    assetKey: "split",
                    isVisible: !1
                }, s(i, 25))), [1, 4, 7, 10, 13].includes(i) && t.push(Object.assign({}, {
                    type: mt.objects.SPINE,
                    name: "spinificationAnim" + i,
                    assetKey: "spinification",
                    isVisible: !1
                }, s(i))));
                return {
                    styles: {
                        ".portrait .slotMachineAnimContainer": {
                            x: -1,
                            y: 25,
                            alignY: "top",
                            scaleX: .66,
                            scaleY: .66
                        },
                        ".album .slotMachineAnimContainer": {
                            x: -2,
                            y: -561,
                            alignY: "center",
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1
                        },
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
                            y: 780,
                            alignX: "center",
                            sWidth: 1080,
                            sHeight: 1920
                        },
                        ".album .slotMachineContainer": {
                            x: 0,
                            y: 560,
                            alignX: "center",
                            sWidth: 1920,
                            sHeight: 1080
                        },
                        ".portrait .slotMachineSymbolWinContainer": {
                            x: 0,
                            y: 30,
                            scaleX: .66,
                            scaleY: .66
                        },
                        ".album .slotMachineSymbolWinContainer": {
                            x: 0,
                            y: -22,
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1
                        },
                        ".portrait .slotMachineGameContainer": {
                            x: 0,
                            y: 30,
                            scaleX: .66,
                            scaleY: .66,
                            alignX: "left"
                        },
                        ".album .slotMachineGameContainer": {
                            x: 0,
                            y: -22,
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1,
                            alignX: "left"
                        },
                        ".album .progressBarAnimation": {
                            x: 0,
                            y: e ? 2 : -20
                        },
                        ".portrait .progressBarAnimation": {
                            x: 0,
                            y: 85
                        },
                        ".album .dividingReelsPopup": {
                            scaleX: 1,
                            scaleY: 1,
                            y: -25
                        },
                        ".portrait .dividingReelsPopup": {
                            scaleX: .5,
                            scaleY: .5,
                            y: 25
                        },
                        ".album .splitReelsPopup": {
                            scaleX: 1,
                            scaleY: 1,
                            y: -25
                        },
                        ".portrait .splitReelsPopup": {
                            scaleX: .5,
                            scaleY: .5,
                            y: 25
                        },
                        ".portrait .slotMachineUnderContainer": {
                            x: -1,
                            y: 28,
                            alignY: "top",
                            scaleX: .66,
                            scaleY: .66
                        },
                        ".album .slotMachineUnderContainer": {
                            x: -1,
                            y: -561,
                            alignY: "center",
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1
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
                            name: "slotMachineAnimContainer",
                            class: "slotMachineAnimContainer",
                            contents: t
                        }, {
                            type: mt.objects.GROUP,
                            name: "slotMachineContentContainer",
                            class: "slotMachineContentContainer",
                            contents: [{
                                type: mt.objects.GROUP,
                                class: "dividingReelsPopup",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "dividingReelsPopup",
                                    assetKey: "cashSpinRespin",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                class: "splitReelsPopup",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "splitReelsPopup",
                                    assetKey: "popupSplit",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !1
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "progressBarAnimation",
                                class: "progressBarAnimation",
                                contents: [{
                                    type: mt.objects.SPINE,
                                    name: "progress_barAnimation",
                                    assetKey: "progress_bar",
                                    anchorX: .5,
                                    anchorY: .5,
                                    isVisible: !0
                                }]
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineWinFrameContainer",
                                class: "slotMachineSymbolWinContainer"
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineSymbolRespinAnimationWinContainer",
                                class: "slotMachineSymbolWinContainer"
                            }, {
                                type: mt.objects.GROUP,
                                name: "slotMachineSymbolWinContainer",
                                class: "slotMachineSymbolWinContainer"
                            }, {
                                type: mt.objects.GROUP,
                                id: "slotMachineGameContainer",
                                name: "slotMachineGameContainer",
                                class: "slotMachineGameContainer",
                                width: 4685,
                                height: 285
                            }]
                        }, {
                            type: 1,
                            name: "slotMachineUnderContainer",
                            class: "slotMachineUnderContainer",
                            contents: n
                        }]
                    }
                }
            }
        },
        1252: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler = {}
        },
        1253: function(e, t) {
            nge.App[nge.appNS].Com.SpaceHandler.Controller = nge.App.DjGameBase.Com.SpaceHandler.Controller.extend((function() {
                var e = this;
                this.extendDo = function() {
                    return !!nge.localData.get("spaceHandler.isEnable") && (!!nge.localData.get("buyTime.popup.visibility") || (e.popup && e.popup.visible && !nge.localData.get("fakeSpin") ? (nge.observer.fire("popup.spacePressed"), !0) : "big" === nge.localData.get("win.winType") ? (nge.observer.fire("win.abortWin"), !0) : nge.localData.get("regularWinInProgress") ? (e.spinButton && e.spinButton.inputEnabled && !e.balanceRequested && nge.observer.fire("buttons.pressCommand", "spin"), !0) : !nge.localData.get("layersSwitcher.animationCompleted")))
                }
            }))
        },
        1254: function(e, t) {
            nge.App[nge.appNS].Com.Statusbar = {}
        },
        1255: function(e, t) {
            nge.App[nge.appNS].Com.Statusbar.Mobile = {}
        },
        1256: function(e, t) {
            nge.App[nge.appNS].Com.Statusbar.Mobile.Controller = nge.App.DjGameBase.Com.Statusbar.Mobile.Controller.extend((function() {
                this.getLinesToRightText = function() {
                    return "15-60 cells"
                }
            }))
        },
        1257: function(e, t) {
            nge.App[nge.appNS].Com.WinField = {}
        },
        1258: function(e, t) {
            nge.App[nge.appNS].Com.WinField.Controller = nge.App.DjGameBase.Com.WinField.Controller.extend((function() {
                var e = this;
                this.preWin = function() {
                    var t = nge.localData.get("dividingReelsResponse.was");
                    nge.localData.get("freespin.inProgress") || t || e.setText(e.defaultText)
                }, this.layersSwitcher = function(e) {
                    nge.localData.get("dividingReels.spin") || this.super.layersSwitcher()
                }, this.showVFX = function() {
                    var t = nge.localData.get("slotMachine");
                    if (t) {
                        var n = nge.localData.get("dividingReelsSpinNow");
                        if (nge.localData.get("freespin.inProgress") || n) 0 === (n = t.totalBonusWin || 0) && t.slotWin && (n = t.slotWin.totalWin || 0);
                        else {
                            if (!t.slotWin) return;
                            n = t.slotWin.totalWin || 0
                        }
                        t = nge.Lib.Money.toCoins(n), e.setText(t)
                    }
                }
            }))
        },
        1259: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText = {}
        },
        1260: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Cfg = nge.App.DjGameBase.Com.WinlinesText.Cfg.extend((function() {
                this.params.winlinesTextContainerName = "winlinesTextContainer"
            }))
        },
        1261: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Controller = nge.App.DjGameBase.Com.WinlinesText.Controller.extend((function() {
                var e = this;
                this.onLineHighlightStart = function(t) {
                    if ("big" !== nge.localData.get("win.winType") && (nge.observer.fire("win.brain.lineWin.animation.start", t), e.container.visible = !1, 0 !== (t = nge.localData.get("settings.settingsDisplayValuesInCoins") ? t.amount : e.toCoins(t.amount)) && !isNaN(t) && !nge.localData.get("regularWinInProgress"))) {
                        e.container.visible = !0;
                        for (var n = 0; n < e.lineWins.length; n++) e.lineWins[n].visible = 1 === n, e.lineWins[n].alpha = 1, e.lineWins[n].visible && (e.lineWins[n].x = 0, e.lineWins[n].y = 440);
                        (n = e.lineWins[1]).text = t, e.createTextTweenAnimation(n)
                    }
                }, this.createTextTweenAnimation = function(e) {
                    e.alpha = 1, e.scale.x = .6, e.scale.y = .6, this.textTween = nge.tween.add(e.scale).to({
                        x: 1,
                        y: 1
                    }, 390), this.textTween.onComplete.addOnce((function() {
                        this.textTween = nge.tween.add(e.scale).to({
                            x: 0,
                            y: 0
                        }, 390, nge.Lib.Tween.Easing.Linear.None, !0, 200), this.textTween.onUpdateCallback((function(t, n, s) {
                            e.alpha = 1 - (s.percent - .2) / (.6 - .2)
                        }))
                    }), this), this.textTween.start()
                }
            }))
        },
        1262: function(e, t) {
            nge.App[nge.appNS].Com.WinlinesText.Tpl = function() {
                var e = nge.Lib.Helper.mobileAndTabletCheck();
                return {
                    assets: {
                        name: "assets",
                        contents: []
                    },
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
                            y: 470
                        },
                        ".album .winlinesTextContainer": {
                            y: 0
                        },
                        ".portrait .lineWinContainer": {
                            y: 47,
                            scaleX: .64,
                            scaleY: .64
                        },
                        ".album .lineWinContainer": {
                            y: e ? 96 : 70,
                            scaleX: e ? .95 : 1,
                            scaleY: e ? .95 : 1
                        }
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
                                y: 170,
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
                                y: 450,
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
                                y: 730,
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
        1263: function(e, t) {
            nge.App[nge.appNS].Tpl = {}
        },
        1264: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups = {}
        },
        1265: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.BetSettings = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.BetSettings();
                return ["betSettingsLinesName", "linesSliderButtonContainer", "linesMinimumNumber", "linesMaximumNumber", "linesBetBg"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.isVisible = !1)
                })), ["betSettingsCoinValueName", "coinValueSliderButtonContainer", "coinsMinimumNumber", "coinsMaximumNumber", "coinValueBg"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 200)
                })), e
            }
        },
        1266: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Intro;
                return nge.Lib.Helper.tplObjFind(e, "demoPlayButtonText").y = 2, nge.Lib.Helper.tplSetContainerContents(e, "introUniqueContent", [{
                    type: mt.objects.TEXT,
                    name: "introScreenTextCenter",
                    text: nge.i18n.get("INTRO_TEXT"),
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
                    y: 750,
                    class: "coloredText",
                    style: {
                        font: "30pt futuraptheavy",
                        fill: 16777215,
                        align: "center",
                        shadowColor: 3888,
                        shadowBlur: 6,
                        shadowOffsetY: 2,
                        class: "coloredText",
                        lineHeight: 45
                    }
                }]), e
            }
        },
        1267: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Ui = function() {
                var e = nge.App.DjGameBase.Tpl.Groups.Ui(),
                    t = e.objects.contents[0];
                return delete t.anchorX, delete t.anchorY, t.alignX = "center", t.alignY = "center", t.x = 0, t.y = 440, e.styles[".titleTextStyle"].style.font = "19pt futuraptheavy", e.styles[".titleTextStyle"].style.fill = 15325439, e.styles[".titleTextStyle"].style.stroke = 48, e.styles[".titleTextStyle"].style.strokeThickness = 3, e.styles[".titleButtonStyle"].style.font = "24pt futuraptheavy", e.styles[".titleButtonStyle"].style.fill = 15325439, e.styles[".titleButtonStyle"].style.stroke = 48, e.styles[".titleButtonStyle"].style.strokeThickness = 4, e.styles[".titleButtonStyle"].style.lineHeight = 33, e.styles[".freespinTextStyle"].style.font = "24pt futuraptheavy", e.styles[".freespinTextStyle"].style.fill = 14335487, e.styles[".freespinTextStyle"].style.stroke = 48, e.styles[".freespinTextStyle"].style.strokeThickness = 4, ["autoButtonText", "turboModeUIButtonText"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) + 2), t.y = (+t.y || 0) + 2
                })), ["counterManualFreeSpinsNumberA"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 2), t.y = (+t.y || 0) + 7
                })), ["counterManualFreeSpinsNumberB"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) + 8), t.y = (+t.y || 0) + 7
                })), ["playedFreespinText"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 2), t.y = (+t.y || 0) + 2
                })), ["totalFreespinText"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) + 8), t.y = (+t.y || 0) + 2
                })), ["coinValueContainer"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 46)
                })), ["coinPlusButton", "betPlusButton"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) - 2)
                })), ["framInfoContainerBg"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) + 1), t.y = (+t.y || 0) + 1
                })), ["settingPanelBackBg"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.x = (+t.x || 0) + 1), t.y = (+t.y || 0) - 1
                })), ["linesArea"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.isVisible = !1)
                })), e
            }
        },
        1268: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Help = function() {
                var e = {
                        font: "60pt futuraptmedium",
                        fill: 15655103
                    },
                    t = {
                        font: "29pt futuraptheavy",
                        align: "center",
                        fill: 16777215,
                        lineHeight: 46
                    },
                    n = {
                        font: "36pt futuraptmedium",
                        fill: 16696173
                    },
                    s = {
                        font: "36pt futuraptmedium",
                        align: "center",
                        fill: 16777215
                    },
                    a = {
                        font: "28pt futuraptmedium",
                        fill: 16696173
                    },
                    i = {
                        font: "28pt futuraptmedium",
                        align: "center",
                        fill: 16777215
                    },
                    o = {
                        font: "38pt futuraptmedium",
                        fill: 16696173
                    },
                    l = {
                        font: "38pt futuraptmedium",
                        align: "center",
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
                            key: "p0images1",
                            fullPath: r + "playarea/p0images1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0images2",
                            fullPath: r + "playarea/p0images2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p0images3",
                            fullPath: r + "playarea/p0images3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1images1",
                            fullPath: r + "playarea/p1images1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1images2",
                            fullPath: r + "playarea/p1images2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1images3",
                            fullPath: r + "playarea/p1images3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1images4",
                            fullPath: r + "playarea/p1images4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1images5",
                            fullPath: r + "playarea/p1images5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1images6",
                            fullPath: r + "playarea/p1images6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "p1images7",
                            fullPath: r + "playarea/p1images7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.PAYTABLE,
                            key: "divider",
                            fullPath: r + "playarea/divider.png"
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
                                        name: "paytableNameText0",
                                        type: mt.objects.TEXT,
                                        text: "PAYTABLE_help",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .9,
                                        scaleY: .9,
                                        x: 278,
                                        y: 127,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p0images1",
                                            assetKey: "p0images1"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: 1.35,
                                        scaleY: 1.35,
                                        x: 742,
                                        y: 89,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p0images2",
                                            assetKey: "p0images2"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .88,
                                        scaleY: .88,
                                        x: 1347,
                                        y: 100,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p0images3",
                                            assetKey: "p0images3"
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "p0text1",
                                        text: "p0text1",
                                        x: 960,
                                        y: 720,
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
                                        name: "p0text2",
                                        text: "p0text2",
                                        x: 960,
                                        y: 840,
                                        anchorX: .5,
                                        anchorY: .5,
                                        style: {
                                            font: "28pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }, {
                                        name: "m00text17",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "50+",
                                        style: n,
                                        x: 303,
                                        y: 355
                                    }, {
                                        name: "m00text16",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "40+",
                                        style: a,
                                        x: 303,
                                        y: 410
                                    }, {
                                        name: "m00text15",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "30+",
                                        style: a,
                                        x: 303,
                                        y: 455
                                    }, {
                                        name: "m00text14",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "26+",
                                        style: a,
                                        x: 303,
                                        y: 500
                                    }, {
                                        name: "m00text13",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "22+",
                                        style: a,
                                        x: 303,
                                        y: 545
                                    }, {
                                        name: "m00text12",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "18+",
                                        style: a,
                                        x: 303,
                                        y: 590
                                    }, {
                                        name: "m00text11",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "14+",
                                        style: a,
                                        x: 303,
                                        y: 635
                                    }, {
                                        name: "m00text10",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "10+",
                                        style: a,
                                        x: 303,
                                        y: 680
                                    }, {
                                        name: "m00text9",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "9",
                                        style: a,
                                        x: 303,
                                        y: 725
                                    }, {
                                        name: "m00text8",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "8",
                                        style: a,
                                        x: 303,
                                        y: 770
                                    }, {
                                        name: "m00text7",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "7",
                                        style: a,
                                        x: 303,
                                        y: 815
                                    }, {
                                        name: "m00text6",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "6",
                                        style: a,
                                        x: 303,
                                        y: 860
                                    }, {
                                        name: "m00text17text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-50",
                                        style: s,
                                        anchorX: .5,
                                        x: 480,
                                        y: 355
                                    }, {
                                        name: "m00text16text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-40",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 410
                                    }, {
                                        name: "m00text15text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-30",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 455
                                    }, {
                                        name: "m00text14text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-26",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 500
                                    }, {
                                        name: "m00text13text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-22",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 545
                                    }, {
                                        name: "m00text12text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-18",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 590
                                    }, {
                                        name: "m00text11text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-14",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 635
                                    }, {
                                        name: "m00text10text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-10",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 680
                                    }, {
                                        name: "m00text9text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-9",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 725
                                    }, {
                                        name: "m00text8text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-8",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 770
                                    }, {
                                        name: "m00text7text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-7",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 815
                                    }, {
                                        name: "m00text6text",
                                        type: mt.objects.TEXT,
                                        class: "ps0-6",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 860
                                    }, {
                                        name: "m09text7",
                                        type: mt.objects.TEXT,
                                        text: "5",
                                        style: o,
                                        x: 885,
                                        y: 485
                                    }, {
                                        name: "m09text6",
                                        type: mt.objects.TEXT,
                                        text: "4",
                                        style: o,
                                        x: 885,
                                        y: 550
                                    }, {
                                        name: "m09text5",
                                        type: mt.objects.TEXT,
                                        text: "3",
                                        style: o,
                                        x: 885,
                                        y: 615
                                    }, {
                                        name: "m09text5text",
                                        type: mt.objects.TEXT,
                                        class: "ps9s-5",
                                        style: l,
                                        anchorX: .5,
                                        x: 1015,
                                        y: 485
                                    }, {
                                        name: "m09text4text",
                                        type: mt.objects.TEXT,
                                        class: "ps9s-4",
                                        style: l,
                                        anchorX: .5,
                                        x: 1015,
                                        y: 550
                                    }, {
                                        name: "m09text3text",
                                        type: mt.objects.TEXT,
                                        class: "ps9s-3",
                                        style: l,
                                        anchorX: .5,
                                        x: 1015,
                                        y: 615
                                    }, {
                                        name: "m01text17",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "50+",
                                        style: n,
                                        x: 1400,
                                        y: 355
                                    }, {
                                        name: "m01text16",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "40+",
                                        style: a,
                                        x: 1400,
                                        y: 410
                                    }, {
                                        name: "m01text15",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "30+",
                                        style: a,
                                        x: 1400,
                                        y: 455
                                    }, {
                                        name: "m01text14",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "26+",
                                        style: a,
                                        x: 1400,
                                        y: 500
                                    }, {
                                        name: "m01text13",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "22+",
                                        style: a,
                                        x: 1400,
                                        y: 545
                                    }, {
                                        name: "m01text12",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "18+",
                                        style: a,
                                        x: 1400,
                                        y: 590
                                    }, {
                                        name: "m01text11",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "14+",
                                        style: a,
                                        x: 1400,
                                        y: 635
                                    }, {
                                        name: "m01text10",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "10+",
                                        style: a,
                                        x: 1400,
                                        y: 680
                                    }, {
                                        name: "m01text9",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "9",
                                        style: a,
                                        x: 1400,
                                        y: 725
                                    }, {
                                        name: "m01text8",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "8",
                                        style: a,
                                        x: 1400,
                                        y: 770
                                    }, {
                                        name: "m01text7",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "7",
                                        style: a,
                                        x: 1400,
                                        y: 815
                                    }, {
                                        name: "m01text6",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "6",
                                        style: a,
                                        x: 1400,
                                        y: 860
                                    }, {
                                        name: "m01text17text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-50",
                                        style: s,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 355
                                    }, {
                                        name: "m01text16text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-46",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 410
                                    }, {
                                        name: "m01text15text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-30",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 455
                                    }, {
                                        name: "m01text14text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-26",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 500
                                    }, {
                                        name: "m01text13text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-22",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 545
                                    }, {
                                        name: "m01text12text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-18",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 590
                                    }, {
                                        name: "m01text11text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-14",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 635
                                    }, {
                                        name: "m01text10text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-10",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 680
                                    }, {
                                        name: "m01text9text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-9",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 725
                                    }, {
                                        name: "m01text8text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-8",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 770
                                    }, {
                                        name: "m01text7text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-7",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 815
                                    }, {
                                        name: "m01text6text",
                                        type: mt.objects.TEXT,
                                        class: "ps1-6",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 860
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page1Container",
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
                                        type: mt.objects.TEXT,
                                        name: "p1text1",
                                        text: "p1text1",
                                        x: 960,
                                        y: 904,
                                        anchorX: .5,
                                        anchorY: .5,
                                        class: "coloredText",
                                        style: {
                                            font: "16pt futuraptheavy",
                                            fill: 16777215,
                                            align: "center"
                                        }
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .92,
                                        scaleY: .92,
                                        x: 220,
                                        y: 161,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p1images1",
                                            assetKey: "p1images1"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .96,
                                        scaleY: .96,
                                        x: 390,
                                        y: 150,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p1images2",
                                            assetKey: "p1images2"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .92,
                                        scaleY: .92,
                                        x: 1256,
                                        y: 168,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p1images5",
                                            assetKey: "p1images5"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .92,
                                        scaleY: .92,
                                        x: 1396,
                                        y: 174,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p1images4",
                                            assetKey: "p1images4"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .92,
                                        scaleY: .92,
                                        x: 1566,
                                        y: 170,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p1images3",
                                            assetKey: "p1images3"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .88,
                                        scaleY: .88,
                                        x: 740,
                                        y: 120,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p1images6",
                                            assetKey: "p1images6"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        scaleX: .88,
                                        scaleY: .88,
                                        x: 958,
                                        y: 96,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "p1images7",
                                            assetKey: "p1images7"
                                        }]
                                    }, {
                                        name: "m02text17",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "50+",
                                        style: n,
                                        x: 303,
                                        y: 355
                                    }, {
                                        name: "m02text16",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "40+",
                                        style: a,
                                        x: 303,
                                        y: 410
                                    }, {
                                        name: "m02text15",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "30+",
                                        style: a,
                                        x: 303,
                                        y: 455
                                    }, {
                                        name: "m02text14",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "26+",
                                        style: a,
                                        x: 303,
                                        y: 500
                                    }, {
                                        name: "m02text13",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "22+",
                                        style: a,
                                        x: 303,
                                        y: 545
                                    }, {
                                        name: "m02text12",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "18+",
                                        style: a,
                                        x: 303,
                                        y: 590
                                    }, {
                                        name: "m02text11",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "14+",
                                        style: a,
                                        x: 303,
                                        y: 635
                                    }, {
                                        name: "m02text10",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "10+",
                                        style: a,
                                        x: 303,
                                        y: 680
                                    }, {
                                        name: "m02text9",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "9",
                                        style: a,
                                        x: 303,
                                        y: 725
                                    }, {
                                        name: "m02text8",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "8",
                                        style: a,
                                        x: 303,
                                        y: 770
                                    }, {
                                        name: "m02text7",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "7",
                                        style: a,
                                        x: 303,
                                        y: 815
                                    }, {
                                        name: "m02text6",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "6",
                                        style: a,
                                        x: 303,
                                        y: 860
                                    }, {
                                        name: "m02text17text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-50",
                                        style: s,
                                        anchorX: .5,
                                        x: 480,
                                        y: 355
                                    }, {
                                        name: "m02text16text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-40",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 410
                                    }, {
                                        name: "m02text15text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-30",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 455
                                    }, {
                                        name: "m02text14text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-26",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 500
                                    }, {
                                        name: "m02text13text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-22",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 545
                                    }, {
                                        name: "m02text12text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-18",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 590
                                    }, {
                                        name: "m02text11text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-14",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 635
                                    }, {
                                        name: "m02text10text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-10",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 680
                                    }, {
                                        name: "m02text9text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-9",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 725
                                    }, {
                                        name: "m02text8text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-8",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 770
                                    }, {
                                        name: "m02text7text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-7",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 815
                                    }, {
                                        name: "m02text6text",
                                        type: mt.objects.TEXT,
                                        class: "ps2-6",
                                        style: i,
                                        anchorX: .5,
                                        x: 480,
                                        y: 860
                                    }, {
                                        name: "m04text17",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "50+",
                                        style: n,
                                        x: 857,
                                        y: 335
                                    }, {
                                        name: "m04text16",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "40+",
                                        style: a,
                                        x: 857,
                                        y: 390
                                    }, {
                                        name: "m04text15",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "30+",
                                        style: a,
                                        x: 857,
                                        y: 435
                                    }, {
                                        name: "m04text14",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "26+",
                                        style: a,
                                        x: 857,
                                        y: 480
                                    }, {
                                        name: "m04text13",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "22+",
                                        style: a,
                                        x: 857,
                                        y: 525
                                    }, {
                                        name: "m04text12",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "18+",
                                        style: a,
                                        x: 857,
                                        y: 570
                                    }, {
                                        name: "m04text11",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "14+",
                                        style: a,
                                        x: 857,
                                        y: 615
                                    }, {
                                        name: "m04text10",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "10+",
                                        style: a,
                                        x: 857,
                                        y: 660
                                    }, {
                                        name: "m04text9",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "9",
                                        style: a,
                                        x: 857,
                                        y: 705
                                    }, {
                                        name: "m04text8",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "8",
                                        style: a,
                                        x: 857,
                                        y: 750
                                    }, {
                                        name: "m04text7",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "7",
                                        style: a,
                                        x: 857,
                                        y: 795
                                    }, {
                                        name: "m04text6",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "6",
                                        style: a,
                                        x: 857,
                                        y: 840
                                    }, {
                                        name: "m04text17text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-50",
                                        style: s,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 335
                                    }, {
                                        name: "m04text16text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-40",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 390
                                    }, {
                                        name: "m04text15text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-30",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 435
                                    }, {
                                        name: "m04text14text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-26",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 480
                                    }, {
                                        name: "m04text13text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-22",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 525
                                    }, {
                                        name: "m04text12text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-18",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 570
                                    }, {
                                        name: "m04text11text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-14",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 615
                                    }, {
                                        name: "m04text10text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-10",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 660
                                    }, {
                                        name: "m04text9text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-9",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 705
                                    }, {
                                        name: "m04text8text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-8",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 750
                                    }, {
                                        name: "m04text7text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-7",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 795
                                    }, {
                                        name: "m04text6text",
                                        type: mt.objects.TEXT,
                                        class: "ps4-6",
                                        style: i,
                                        anchorX: .5,
                                        x: 1029,
                                        y: 840
                                    }, {
                                        name: "m08text17",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "50+",
                                        style: n,
                                        x: 1400,
                                        y: 355
                                    }, {
                                        name: "m08text16",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "40+",
                                        style: a,
                                        x: 1400,
                                        y: 410
                                    }, {
                                        name: "m08text15",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "30+",
                                        style: a,
                                        x: 1400,
                                        y: 455
                                    }, {
                                        name: "m08text14",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "26+",
                                        style: a,
                                        x: 1400,
                                        y: 500
                                    }, {
                                        name: "m08text13",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "22+",
                                        style: a,
                                        x: 1400,
                                        y: 545
                                    }, {
                                        name: "m08text12",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "18+",
                                        style: a,
                                        x: 1400,
                                        y: 590
                                    }, {
                                        name: "m08text11",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "14+",
                                        style: a,
                                        x: 1400,
                                        y: 635
                                    }, {
                                        name: "m08text10",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "10+",
                                        style: a,
                                        x: 1400,
                                        y: 680
                                    }, {
                                        name: "m08text9",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "9",
                                        style: a,
                                        x: 1400,
                                        y: 725
                                    }, {
                                        name: "m08text8",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "8",
                                        style: a,
                                        x: 1400,
                                        y: 770
                                    }, {
                                        name: "m08text7",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "7",
                                        style: a,
                                        x: 1400,
                                        y: 815
                                    }, {
                                        name: "m08text6",
                                        type: mt.objects.TEXT,
                                        anchorX: .5,
                                        text: "6",
                                        style: a,
                                        x: 1400,
                                        y: 860
                                    }, {
                                        name: "m08text17text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-50",
                                        style: s,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 355
                                    }, {
                                        name: "m08text16text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-40",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 410
                                    }, {
                                        name: "m08text15text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-30",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 455
                                    }, {
                                        name: "m08text14text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-26",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 500
                                    }, {
                                        name: "m08text13text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-22",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 545
                                    }, {
                                        name: "m08text12text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-18",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 590
                                    }, {
                                        name: "m08text11text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-14",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 635
                                    }, {
                                        name: "m08text10text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-10",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 680
                                    }, {
                                        name: "m08text9text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-9",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 725
                                    }, {
                                        name: "m08text8text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-8",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 770
                                    }, {
                                        name: "m08text7text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-7",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 815
                                    }, {
                                        name: "m08text6text",
                                        type: mt.objects.TEXT,
                                        class: "ps8-6",
                                        style: i,
                                        anchorX: .5,
                                        x: 1572,
                                        y: 860
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page2Container",
                                    contents: [{
                                        name: "paytableNameText2",
                                        type: mt.objects.TEXT,
                                        text: "QUICK CASH SPIN",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.IMAGE,
                                        name: "QUICK_CASH_SPIN_img",
                                        assetKey: "rulesImgQcs",
                                        anchorX: .5,
                                        anchorY: .5,
                                        x: 960,
                                        y: 300
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "divider_qcs",
                                        x: 960,
                                        y: 594,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "divider_qcs_img",
                                            anchorX: .5,
                                            anchorY: .5,
                                            assetKey: "divider"
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "QCF_feature",
                                        text: "QCF_feature",
                                        x: 960,
                                        y: 700,
                                        anchorX: .5,
                                        anchorY: .5,
                                        maxWidth: 1400,
                                        class: "coloredText",
                                        style: t
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page3Container",
                                    contents: [{
                                        name: "paytableNameText3",
                                        type: mt.objects.TEXT,
                                        text: "FREE SPINS",
                                        style: e,
                                        x: 960,
                                        y: 52,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.GROUP,
                                        x: 960,
                                        y: 300,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "free_spins_img",
                                            anchorX: .5,
                                            anchorY: .5,
                                            assetKey: "rulesImgFs"
                                        }]
                                    }, {
                                        type: mt.objects.GROUP,
                                        name: "divider_fs",
                                        x: 960,
                                        y: 721,
                                        contents: [{
                                            type: mt.objects.IMAGE,
                                            name: "divider_img",
                                            anchorX: .5,
                                            anchorY: .5,
                                            assetKey: "divider"
                                        }]
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "FREE_SPINS",
                                        text: "FREE_SPINS",
                                        style: t,
                                        class: "coloredText",
                                        x: 960,
                                        y: 700,
                                        maxWidth: 1400,
                                        anchorX: .5,
                                        anchorY: .5
                                    }]
                                }, {
                                    type: mt.objects.GROUP,
                                    name: "page4Container",
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
                                        name: "Rules_text",
                                        text: "Rules_text",
                                        style: t,
                                        x: 960,
                                        y: 455,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextEN",
                                        text: nge.i18n.get("rtpEN"),
                                        class: "rtpInfo",
                                        style: t,
                                        x: 960,
                                        y: 670,
                                        anchorX: .5,
                                        anchorY: .5
                                    }, {
                                        type: mt.objects.TEXT,
                                        name: "rtpTextRU",
                                        text: nge.i18n.get("rtpRU"),
                                        class: "rtpInfo",
                                        style: t,
                                        x: 960,
                                        y: 720,
                                        anchorX: .5,
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
                                x: 25,
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
                                    x: 815,
                                    y: 922
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
                                    x: 865,
                                    y: 922
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
                                    x: 915,
                                    y: 922
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
                                    x: 965,
                                    y: 922
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
                                    x: 1015,
                                    y: 922
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
        1269: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_ru = {}
        },
        1270: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Lang_ru.Help = function() {
                var e = nge.App[nge.appNS].Tpl.Groups.Help(),
                    t = {
                        font: "18pt futuraptheavy",
                        align: "center",
                        fill: 16777215,
                        lineHeight: 38
                    };
                return ["FREE_SPINS", "QCF_feature"].forEach((function(n) {
                    (n = nge.Lib.Helper.customRecursiveFind("name", n, "contents", e.objects, !1, !0, !1)) && (n.style = t, delete n.maxWidth)
                })), ["divider_qcs"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) + 6)
                })), ["divider_fs"].forEach((function(t) {
                    (t = nge.Lib.Helper.customRecursiveFind("name", t, "contents", e.objects, !1, !0, !1)) && (t.y = (+t.y || 0) - 6)
                })), e
            }
        },
        1271: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile = {}
        },
        1272: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Help = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [{
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0images1",
                            fullPath: e + "playarea/p0images1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0images2",
                            fullPath: e + "playarea/p0images2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p0images3",
                            fullPath: e + "playarea/p0images3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1images1",
                            fullPath: e + "playarea/p1images1.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1images2",
                            fullPath: e + "playarea/p1images2.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1images3",
                            fullPath: e + "playarea/p1images3.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1images4",
                            fullPath: e + "playarea/p1images4.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1images5",
                            fullPath: e + "playarea/p1images5.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1images6",
                            fullPath: e + "playarea/p1images6.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "p1images7",
                            fullPath: e + "playarea/p1images7.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "divider",
                            fullPath: e + "playarea/divider.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "Bolt",
                            fullPath: e + "playarea/Bolt.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "qcf",
                            fullPath: e + "playarea/qcf.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "paytableSevenBellpng",
                            fullPath: e + "playarea/paytableSevenBellpng.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "paytableOrangePlum",
                            fullPath: e + "playarea/paytableOrangePlum.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "paytableLemonCherryWatermelon",
                            fullPath: e + "playarea/paytableLemonCherryWatermelon.png"
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
        1273: function(e, t) {
            nge.App[nge.appNS].Tpl.Groups.Mobile.Intro = function() {
                var e = new nge.App.DjGameBase.Tpl.Groups.Mobile.Intro;
                return e.styles[".album .demoPlayButtonText"] = {
                    scaleX: .65,
                    scaleY: .65,
                    x: 0,
                    y: 10
                }, e.styles[".portrait .demoPlayButtonText"] = {
                    scaleX: 1,
                    scaleY: 1,
                    x: 0,
                    y: 16
                }, e.styles[".album .introScreenButtonContainer"] = {
                    y: -185
                }, e.styles[".portrait .introScreenButtonContainer"] = {
                    y: -280
                }, e.styles[".album .introScreenButtonContainer"] = {
                    y: -185
                }, e.styles[".portrait .introScreenButtonContainer"] = {
                    y: -280
                }, e.styles[".album .introScreenTextBottom"] = {
                    style: {
                        font: "44pt futuraptheavy",
                        fill: 16777215
                    }
                }, e.styles[".portrait .introScreenTextBottom"] = {
                    style: {
                        font: "44pt futuraptheavy",
                        fill: 16777215
                    }
                }, nge.Lib.Helper.tplSetContainerContents(e, "introUniqueContent", [{
                    type: mt.objects.TEXT,
                    name: "introScreenTextCenter",
                    class: "introScreenTextCenter coloredText",
                    text: nge.i18n.get("INTRO_TEXT"),
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
                    maxWidth: 1050,
                    style: {
                        font: "30pt futuraptheavy",
                        fill: 16777215,
                        align: "center",
                        shadowColor: 3888,
                        shadowBlur: 6,
                        shadowOffsetY: 2,
                        lineHeight: 45
                    }
                }]), e
            }
        },
        1274: function(e, t) {
            nge.App[nge.appNS].Tpl.States = {}
        },
        1275: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Demo = function() {
                var e = nge.appPath + "img/";
                return {
                    assets: {
                        name: "assets",
                        contents: [nge.Lib.Helper.mobileAndTabletCheck() ? {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "demoPlayButtonMobile",
                            fullPath: e + "uiVertical/introVertical/demoPlayButtonMobile.png",
                            frameWidth: 496
                        } : {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "demoPlayButton",
                            fullPath: e + "intro/demoPlayButton.png",
                            frameWidth: 312
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "introScreenArrow",
                            fullPath: e + "intro/introScreenArrow.png"
                        }, {
                            type: mt.assets.IMAGE,
                            block: mt.assets.blocks.STATIC,
                            key: "frameIntroScreen",
                            fullPath: e + "intro/frameIntroScreen.png"
                        }]
                    },
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1276: function(e, t) {
            nge.App[nge.appNS].Tpl.States.Play = function() {
                var e = nge.appPath + "img/",
                    t = new nge.App.DjGameBase.Tpl.States.Play;
                t.styles = nge.Lib.Helper.mergeObjs(t.styles, {
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
                    ".album .logoPivotContainer": {
                        minY: 0,
                        y: 0,
                        alignY: "top"
                    },
                    ".portrait .logoPivotContainer": {
                        minY: 0,
                        y: -960,
                        alignY: "center"
                    }
                }), t.assets.contents.push({
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo",
                    fullPath: e + "playarea/logo.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo_blue_glow_norm",
                    fullPath: e + "logo/logo_blue_glow_norm.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo_lines_glow_add",
                    fullPath: e + "logo/logo_lines_glow_add.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo_main",
                    fullPath: e + "logo/logo_main.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "logo_main_glow_add",
                    fullPath: e + "logo/logo_main_glow_add.png"
                }), nge.Lib.Helper.tplSetContainerContents(t, "logoAlbumContainer", [{
                    type: mt.objects.IMAGE,
                    name: "playareaLogo",
                    assetKey: "logo",
                    anchorX: .5,
                    anchorY: .5,
                    x: 6,
                    y: 55
                }]), nge.Lib.Helper.tplSetContainerContents(t, "logoPortraitContainer", [{
                    type: mt.objects.IMAGE,
                    name: "logo_main",
                    assetKey: "logo_main",
                    anchorX: .5,
                    anchorY: .5,
                    x: 10,
                    y: 310
                }, {
                    type: mt.objects.IMAGE,
                    name: "logo_main_glow_add",
                    assetKey: "logo_main_glow_add",
                    blendMode: PIXI.BLEND_MODES.ADD,
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
                    y: 220
                }, {
                    type: mt.objects.IMAGE,
                    name: "logo_blue_glow_norm",
                    assetKey: "logo_blue_glow_norm",
                    anchorX: .5,
                    anchorY: .5,
                    x: 0,
                    y: 300
                }]), e = nge.Lib.Helper.tplObjFind(t, "playParentGroup");
                var n = nge.Lib.Helper.recursiveTplObjFind(e, "name", "spinificationAboveAnimationContainer");
                return e.contents.splice(n.index, 1), n = nge.Lib.Helper.recursiveTplObjFind(e, "name", "spinificationBelowAnimationContainer"), e.contents.splice(n.index, 1), t
            }
        },
        1277: function(e, t) {
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
                    key: "symbols_static",
                    atlas: e + "atlases/symbols_static.json",
                    fullPath: e + "atlases/symbols_static.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "paytable_buttons",
                    atlas: e + "atlases/paytable_buttons.json",
                    fullPath: e + "atlases/paytable_buttons.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: t ? mt.assets.blocks.STATIC : mt.assets.blocks.PAYTABLE,
                    key: "paytable",
                    atlas: e + "atlases/paytable.json",
                    fullPath: e + "atlases/paytable.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "bg_static",
                    atlas: e + "atlases/bg_static.json",
                    fullPath: e + "atlases/bg_static.png"
                }), n.contents.push({
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    key: "ui",
                    atlas: e + (t ? "atlases/ui_mobile.json" : "atlases/ui.json"),
                    fullPath: e + (t ? "atlases/ui_mobile.png" : "atlases/ui.png")
                }), n.contents.push({
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "popupJackpot",
                    fullPath: e + "jackpot/images/jackpotPopup.png"
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
                    key: "bgAreaMobile",
                    fullPath: e + "atlases/bgAreaMobile.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "rulesImgQcs",
                    fullPath: e + "atlases/rulesImgQcs.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "rulesImgFs",
                    fullPath: e + "atlases/rulesImgFs.jpg"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "frame_2x2",
                    fullPath: e + "atlases/frame_2x2.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "black-bg",
                    fullPath: e + "black-bg.png"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "split_bg",
                    fullPath: e + "atlases/Quick_Cash_Fruits_symbol_bg.png"
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
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m00_000",
                    spine: e + "spine/symbols/m00_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m01_000",
                    spine: e + "spine/symbols/m01_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m02_000",
                    spine: e + "spine/symbols/m02_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m03_000",
                    spine: e + "spine/symbols/m03_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m04_000",
                    spine: e + "spine/symbols/m04_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m05_000",
                    spine: e + "spine/symbols/m05_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m06_000",
                    spine: e + "spine/symbols/m06_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m07_000",
                    spine: e + "spine/symbols/m07_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m08_000",
                    spine: e + "spine/symbols/m08_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m09_000",
                    spine: e + "spine/symbols/m09_000.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "split",
                    spine: e + "spine/symbols/split.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m00_000p",
                    atlas: e + "spine/symbols/m00_000p.json",
                    fullPath: e + "spine/symbols/m00_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m01_000p",
                    atlas: e + "spine/symbols/m01_000p.json",
                    fullPath: e + "spine/symbols/m01_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m02_000p",
                    atlas: e + "spine/symbols/m02_000p.json",
                    fullPath: e + "spine/symbols/m02_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m03_000p",
                    atlas: e + "spine/symbols/m03_000p.json",
                    fullPath: e + "spine/symbols/m03_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m04_000p",
                    atlas: e + "spine/symbols/m04_000p.json",
                    fullPath: e + "spine/symbols/m04_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m05_000p",
                    atlas: e + "spine/symbols/m05_000p.json",
                    fullPath: e + "spine/symbols/m05_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m06_000p",
                    atlas: e + "spine/symbols/m06_000p.json",
                    fullPath: e + "spine/symbols/m06_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m07_000p",
                    atlas: e + "spine/symbols/m07_000p.json",
                    fullPath: e + "spine/symbols/m07_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m08_000p",
                    atlas: e + "spine/symbols/m08_000p.json",
                    fullPath: e + "spine/symbols/m08_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "m09_000p",
                    atlas: e + "spine/symbols/m09_000p.json",
                    fullPath: e + "spine/symbols/m09_000p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SYMBOLS_ANIMATION,
                    key: "split_p",
                    atlas: e + "spine/symbols/split_p.json",
                    fullPath: e + "spine/symbols/split_p.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "spinification",
                    spine: e + "spine/spinification/spinification.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "bgAnimation",
                    spine: e + "spine/bgAnimation/bgAnimation.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "progress_bar",
                    spine: e + "spine/bgAnimation/progress_bar.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "respin_animation",
                    spine: e + "spine/bgAnimation/respin_animation.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "winframe",
                    spine: e + "spine/bgAnimation/winframe.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "landing_cash",
                    spine: e + "spine/symbols/landing_cash.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "spin_button_anim",
                    spine: e + "spine/spin_button_anim/spin_button_anim.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.SPINE_ANIMATION,
                    subtype: "noPngQuant",
                    key: "bigWinAnim",
                    spine: e + (t ? "spine/bigWin/big_win_mobile.json" : "spine/bigWin/big_win.json"),
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SPINE_ANIMATION,
                    subtype: "noPngQuant",
                    key: "big_win_p",
                    atlas: e + "spine/bigWin/big_win_p.json",
                    fullPath: e + "spine/bigWin/big_win_p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.SPINE_ANIMATION,
                    subtype: "noPngQuant",
                    key: "big_win_p_1",
                    atlas: e + "spine/bigWin/big_win_p_1.json",
                    fullPath: e + "spine/bigWin/big_win_p_1.jpg"
                }, {
                    type: mt.assets.BINARY,
                    block: mt.assets.blocks.STATIC,
                    key: "emitterVFX",
                    fullPath: nge.appPath + "/emitter/explosionPirateCoin.dat"
                }, {
                    type: mt.assets.IMAGE,
                    block: mt.assets.blocks.STATIC,
                    key: "pCoin_sprite_01",
                    width: 1548,
                    height: 1290,
                    frameWidth: 258,
                    frameHeight: 258,
                    fullPath: e + "emitter/clCoin_sprite_01.png"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "animatedGrid",
                    spine: e + "spine/animatedPopup/animatedGrid.json",
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "cashSpinRespin",
                    spine: e + "spine/animatedPopup/quick_spin_popup.json"
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "animatedPopup",
                    spine: e + (t ? "spine/animatedPopup/animatedPopup_mobile.json" : "spine/animatedPopup/animatedPopup.json"),
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "popupSplit",
                    spine: e + (t ? "spine/animatedPopup/animatedSplitPopup_mobile.json" : "spine/animatedPopup/popupSplit.json"),
                    packed: !0
                }, {
                    type: mt.assets.SPINE,
                    block: mt.assets.blocks.STATIC,
                    key: "popupSpineBackground",
                    spine: e + "spine/animatedPopup/animatedPopup.json",
                    packed: !0
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "animatedPopup_p",
                    atlas: e + "spine/animatedPopup/animatedPopup_p.json",
                    fullPath: e + "spine/animatedPopup/animatedPopup_p.png"
                }, {
                    type: mt.assets.ATLAS,
                    block: mt.assets.blocks.STATIC,
                    subtype: "noPngQuant",
                    key: "animatedPopup_p_1",
                    atlas: e + "spine/animatedPopup/animatedPopup_p_1.json",
                    fullPath: e + "spine/animatedPopup/animatedPopup_p_1.jpg"
                }), {
                    assets: n,
                    objects: {
                        name: "objects",
                        contents: []
                    }
                }
            }
        },
        1278: function(e, t) {
            nge.App[nge.appNS].Mlm = {}
        },
        1279: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain = {}
        },
        1280: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Controller = nge.App.DjGameBase.Mlm.Brain.Controller.extend((function() {
                this._logicBlocks.push("innerJackpot")
            }))
        },
        1281: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Game = nge.App.DjGameBase.Mlm.Brain.Game.extend((function() {
                this.updateBalance = function() {
                    return !!nge.localData.get("dividingReels.spin") || this.super.updateBalance()
                }
            }))
        },
        1282: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Main = nge.Mlm.Brain.Main.extend((function() {
                var e = this;
                this._authHandler = function() {}, this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("transportMessage.AuthResponse", e._authHandler, !1, !0)
                }
            }))
        },
        1283: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Slot = nge.App.DjGameBase.Mlm.Brain.Slot.extend((function() {
                var e = this;
                this.canIntrigue = !0;
                var t, n = this;
                this.showGamePlayState = function() {
                    var e = nge.localData.get("brain.restoreGame"),
                        t = function(e, t) {
                            nge.observer.add("StatesManager.create.end", (function(n) {
                                nge.observer.fire(t + ".restore", e.lastResponse), nge.observer.remove("StatesManager.create.end", !1, "restoreBonusGame." + t)
                            }), "restoreBonusGame." + t)
                        };
                    e && e.lastResponse && e.lastResponse.state ? e.lastResponse && "FreeSpins" === e.lastResponse.state ? (nge.brain.do("showDefaultPlayState"), t(e, "freespin")) : e.lastResponse && "ReSpins" === e.lastResponse.state ? nge.brain.do("showDefaultPlayState") : e.lastResponse && "FreeReSpins" === e.lastResponse.state ? (nge.brain.do("showDefaultPlayState"), t(e, "freespin"), t(e, "respin")) : e.lastResponse && "DividingReels" === e.lastResponse.state ? (nge.brain.do("showDefaultPlayState"), t(e, "dividingReels"), nge.rafSetTimeout((function() {
                        nge.localData.set("spin.type", "FreeSpinRequest"), nge.localData.set("dividingReels.inProgress", !0)
                    }), 1)) : this.restoreBonusGame(e.lastResponse) : nge.brain.do("showDefaultPlayState")
                }, this.setIntrigue = function(e) {
                    nge.localData.set("slotMachineIntrigue", {
                        status: !1
                    });
                    var t = nge.brain._logicBlocksInstances.sounds;
                    if (this.canIntrigue && 0 < t.scatterSymbols.length) {
                        e = e.spinResult.columns;
                        for (var n = [], s = 0; s < e.length; s += 4)
                            if (e[s].some((function(e) {
                                    return -1 !== t.scatterSymbols.indexOf(e)
                                })) && (n.push(s), 1 < n.length && 52 > s)) {
                                nge.localData.set("slotMachineIntrigue", {
                                    status: !0,
                                    startsFrom: s + 8
                                }), nge.observer.fire("slotMachineIntrigue", s);
                                break
                            }
                    }
                }, this.quickFinishHandler = function() {
                    e.super.quickFinishHandler(), nge.observer.fire("background.animatedGrid.speedDown"), nge.observer.fire("background.speedUpAnimation.start")
                }, this.spinCompleteHandler = function() {
                    var s = !1;
                    if (t && nge.localData.get("bonusLine")) {
                        s = !0, n.tryPlayBonusWinSound();
                        var a = nge.localData.get("bonusLine");
                        nge.observer.fire("winlines.showBonusLine", {
                            wonSymbols: a.wonSymbols,
                            selectedLine: a.selectedLine
                        })
                    }
                    nge.rafSetTimeout((function() {
                        e.super.spinCompleteHandler(), nge.observer.fire("background.animatedGrid.speedDown")
                    }), s ? n.triggerCycleDuration : 0)
                }, this.tryPlayBonusWinSound = function() {
                    nge.localData.get("dividingReelsSpinNow") || e.super.tryPlayBonusWinSound()
                }, this.onSpinCommandHandler = function() {
                    if (t && nge.localData.get("freeGame.inProgress")) {
                        var n = nge.localData.get("freeGame.amount") ? +nge.localData.get("freeGame.amount") : 0;
                        nge.localData.set("freeGame.amount", n + 1 + "")
                    }
                    e.super.onSpinCommandHandler(), nge.observer.fire("background.animatedGrid.speedUp"), nge.observer.fire("background.winAnimation.stop"), nge.localData.set("intrigueStarted", !1)
                }, this.winlinesAnimateAll = function() {
                    e.super.winlinesAnimateAll(), nge.localData.get("freespin.inProgress") && nge.observer.fire("sound.expandingWin.play")
                }, this.decorateSpinResults = function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        for (var s = 0; s < e[n].length; s++)
                            if (1 < e[n][s].length)
                                for (var a = 0; a < e[n][s].length; a++) t.push(e[n][s][a][0]), t.push(e[n][s][a][1]);
                            else
                                for (a = 0; 4 > a; a++) t.push(e[n][s]);
                    return t
                }, this.calculateSymbolStatus = function(e) {
                    var t = [];
                    if (1 < e.length)
                        for (var n = 0; n < e.length; n++)
                            for (var s = 0; s < e[n].length; s++) t.push(e[n][s]);
                    else t = e;
                    var a = {};
                    t.forEach((function(e, t) {
                        t = Math.floor(t / 4), a[t] ? (a[t].symbol === e && a[t].count++, 4 === a[t].count && (a[t].showFirst = !0)) : a[t] = {
                            symbol: e,
                            count: 1,
                            showFirst: !1
                        }
                    })), nge.localData.set("slotMachineParsedSymbols", a)
                }, this.spinResponseHandler = function(t) {
                    if (t.spinResult.rows = [e.decorateSpinResults(t.spinResult.rows)], t.slotWin && t.slotWin.lineWinAmounts)
                        for (var n = t.slotWin.lineWinAmounts, s = 0; s < n.length; s++)
                            for (var a = 0; a < n[s].wonSymbols.length; a++) {
                                var i = n[s].wonSymbols[a];
                                n[s].wonSymbols[a] = [20 * Math.floor(i[1]) + 4 * Math.floor(i[0]) + (4 * (i[0] - Math.floor(i[0])) + 2 * (i[1] - Math.floor(i[1]))), 0]
                            }
                    e.super.spinResponseHandler(t), e.calculateSymbolStatus(t.spinResult.rows[0])
                };
                var s = function(n) {
                    n = n.data;
                    var s = !1;
                    nge.localData.set("cutReels", []), nge.localData.set("dividingReelsResponse.was", !1), nge.localData.set("dividingReelsSpinNow", !1), nge.localData.set("dividingReels.spin", !1), nge.localData.set("bonusLine", !1), nge.localData.set("freespinscustom.inprogress", !1);
                    var a = 0,
                        i = [];
                    if (t = !1, nge.localData.set("scatters.DividingReels.spin", !1), "DividingReels" === n.state) {
                        nge.localData.set("dividingReels.inProgress", !0), nge.localData.set("spin.type", "DividingReelsRequest");
                        var o = n.spinResult.rows[0];
                        t = !0;
                        for (var l = 0, r = 0; r < o.length; r += 4) "9" === o[r] && (i.push([r + "", "0"]), 3 <= ++l && nge.localData.set("scatters.DividingReels.spin", !0));
                        n.spinResultStage2 && (o = e.decorateSpinResults(n.spinResultStage2.rows), n.spinResultStage2.rows = [o])
                    } else "Ready" === n.state && nge.localData.get("dividingReels.inProgress") ? (nge.observer.fire("ttttt"), s = !0, nge.localData.set("dividingReelsResponse.was", !0), nge.localData.set("dividingReels.inProgress", !1), nge.localData.set("dividingReelsSpinNow", !0), nge.localData.set("spin.type", "SpinRequest")) : "FreeSpins" === n.state && (s = !0, nge.localData.set("freespinscustom.inprogress", !0), nge.localData.set("freespinswas", !0), nge.localData.get("dividingReels.inProgress") && (nge.localData.set("dividingReelsSpinNow", !0), nge.localData.set("dividingReelsResponse.was", !0), nge.localData.set("dividingReels.inProgress", !1)));
                    if (n.slotWin && n.slotWin.lineWinAmounts) {
                        for (o = n.slotWin.lineWinAmounts, l = [], r = 0; r < o.length; r++)
                            if (o[r].bonusName && "ReelsImprovement" === o[r].bonusName) {
                                var p = +o[r].params.spinsLeft,
                                    c = +o[r].params.spinsTotal;
                                nge.localData.set("leftSpinBar.value", c - p);
                                for (var m = [], u = 0; u < o[r].wonSymbols.length; u++) m.push(+o[r].wonSymbols[u][0] / 4);
                                if (function(e, t, n) {
                                        for (var s = nge.localData.get("reelsImprovment"), a = nge.localData.get("coins.value"), i = nge.localData.get("bet.value"), o = !1, l = 0; l < s.length; l++) + s[l].bet == +i && +s[l].coinValue == +a && (o = !0, s[l].wonSymbols = 0 === t ? [] : e, s[l].spinsLeft = t, s[l].spinsTotal = n);
                                        o || s.push({
                                            wonSymbols: e,
                                            spinsLeft: t,
                                            spinsTotal: n,
                                            bet: i,
                                            coinValue: a
                                        }), nge.localData.set("reelsImprovment", s)
                                    }(m, p, c), nge.localData.set("reelsWithFrame", s && 0 === p ? [] : m), l.push(r), 0 == +o[r].params.spinsLeft) {
                                    for (p = [], c = 0; c < o[r].wonSymbols.length; c++) p.push(+o[r].wonSymbols[c][0] / 4);
                                    nge.localData.set("cutReels", p.sort((function(e, t) {
                                        return e - t
                                    })))
                                }
                            } else "Bonus" !== o[r].type || 0 != +o[r].amount && !t ? o[r].amount && (a += +o[r].amount) : (l.push(r), nge.localData.set("bonusLineInDividingState", t), nge.localData.set("bonusLine", o[r]), t && (o[r].wonSymbols = i), t || nge.localData.set("freespinsCountForStartPopup", o[r].params.freeSpins));
                        for (n.freeSpinRemain && "0" === n.freeSpinRemain && n.freeSpinsTotal && "1" === n.freeSpinsTotal && (n.slotWin.totalWin = a + ""), n = 0; n < l.length; n++) o.splice(l[n] - n, 1)
                    }
                };
                this.checkIfBonus = function() {
                    return !(t || !nge.localData.get("bonusLine")) || this.super.checkIfBonus()
                };
                var a = function(t) {
                        t = t.data;
                        var n = e.decorateSpinResults(t.gameParameters.initialSymbols[0]);
                        if (t.gameParameters.initialSymbols = [n], e.calculateSymbolStatus(n), nge.localData.set("ReelsImprovementRemain", -1), nge.localData.set("indexCutingReels", []), nge.localData.set("slotmachine.cutreels", !1), nge.localData.set("dividingReelsSpinNow", !1), nge.localData.set("makefakeSpin", !1), t.lastResponse) {
                            if ("DividingReels" === t.lastResponse.state && nge.localData.set("dividingReels.spin", !0), n = [], t.lastResponse.ReelsImprovements)
                                for (var s = t.lastResponse.ReelsImprovements, a = 0; a < s.length; a++) {
                                    for (var i = [], o = 0; o < s[a].wonSymbols.length; o++) i.push(+s[a].wonSymbols[o][0]);
                                    s[a].wonSymbols = i, 0 < s[a].spinsLeft && n.push(s[a])
                                }
                            if (nge.localData.set("reelsImprovment", n), t.lastResponse.spinResult && t.lastResponse.spinResult.rows && (t.lastResponse.spinResult.rows = [e.decorateSpinResults(t.lastResponse.spinResult.rows)], t.gameParameters.initialSymbols = t.lastResponse.spinResult.rows), t.lastResponse.LineWinAmounts)
                                for (n = t.lastResponse.LineWinAmounts, s = 0; s < n.length; s++)
                                    if (n[s].bonusName) {
                                        if ("ReelsImprovement" === (a = n[s].bonusName)) {
                                            for (a = +n[s].spinsLeft, i = +n[s].spinsTotal, n = n[s].wonSymbols, s = [], o = 0; o < n.length; o++) s.push(+n[o][0]);
                                            nge.localData.set("reelsWithFrame", 0 === a ? [] : s), nge.localData.set("ReelsImprovementRemain", 0 === a ? 0 : i - a), delete t.lastResponse;
                                            break
                                        }
                                        if ("DividingReels" === a || "FreeSpins" === a) {
                                            for (a = n[s].wonSymbols, i = [], o = 0; o < a.length; o++) i.push(a[o][0]);
                                            for (i = [], o = 0; o < a.length; o++)
                                                for (var l = 4 * +a[o][0], r = l + 4; l < r; l++) i.push(+l);
                                            nge.localData.set("indexCutingReels", i.sort((function(e, t) {
                                                return e - t
                                            })))
                                        }
                                    }
                        }
                    },
                    i = function(e) {
                        var t = nge.localData.get("dividingReels.inProgress"),
                            n = nge.localData.get("freespinscustom.inprogress");
                        (e.data.canPlay && t || n) && (e.data.canPlay = "false")
                    },
                    o = function(e) {
                        e && e.data && nge.observer.fire("transportMessage.SpinResponse", e)
                    };
                this.customSubscribe = function() {
                    nge.observer.add("transportMessage.JackpotResponse", i, !1, !0), nge.observer.add("transportMessage.SpinResponse", s, !1, !0), nge.observer.add("transportMessage.FreeSpinResponse", s, !1, !0), nge.observer.add("transportMessage.DividingReelsResponse", o, !1, !0), nge.observer.add("transportMessage.AuthResponse", a, !1, !0), this.super.customSubscribe()
                }
            }))
        },
        1284: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Jackpot = nge.App.DjGameBase.Mlm.Brain.Jackpot.extend((function() {
                var e = this.runInstantJackpotProcess,
                    t = !1,
                    n = !1;
                this.runInstantJackpotProcess = function(s) {
                    t = !1;
                    var a = nge.localData.get("dividingReels.inProgress"),
                        i = nge.localData.get("freespinscustom.inprogress");
                    a || i ? (t = !0, n = s) : e(s)
                }, this.subscribe = function() {
                    this.super.subscribe(), nge.observer.add("ttttt", (function() {
                        t && e(n), t = !1
                    }), !1, !0), nge.observer.add("Transport.close", (function() {
                        t = !1
                    }), !1, !0)
                }
            }))
        },
        1285: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Sounds = nge.App.DjGameBase.Mlm.Brain.Sounds.extend((function() {
                var e = this;
                this.wheelSpinSoundCount = 1, this.reelsCount = 60, this.triggersNeededForBonus = this.triggerReelsCount = 3, this.scatterSymbols = ["9"], this.scattersNeededForFreespins = 3;
                var t = 0,
                    n = 0,
                    s = 0,
                    a = 0,
                    i = [],
                    o = !1,
                    l = 0,
                    r = 0,
                    p = [4, 16, 28, 40, 52],
                    c = [28, 40, 52],
                    m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    u = 0;
                this.loopedSounds = ["bs_background", "bn_background", "big_win"], this.introSounds = [], this.scatterSounds = [{
                    s: "scatter_0",
                    e: "sound.scatter_landing_0.play",
                    relaunch: !0
                }, {
                    s: "scatter_1",
                    e: "sound.scatter_landing_1.play",
                    relaunch: !0
                }, {
                    s: "scatter_2",
                    e: "sound.scatter_landing_2.play",
                    relaunch: !0
                }, {
                    s: "scatter_3",
                    e: "sound.scatter_landing_3.play",
                    relaunch: !0
                }, {
                    s: "scatter_4",
                    e: "sound.scatter_landing_4.play",
                    relaunch: !0
                }], this.buttonsClickSounds = [{
                    s: "click2",
                    e: "button.clickSound",
                    relaunch: !0
                }, {
                    s: "click2",
                    e: "button.click",
                    relaunch: !0
                }, {
                    s: "hover",
                    e: "button.hover_0",
                    relaunch: !0
                }, {
                    s: "hover",
                    e: "button.hover_1",
                    relaunch: !0
                }, {
                    s: "hover",
                    e: "button.hover_2",
                    relaunch: !0
                }, {
                    s: "spin_0",
                    e: "sound.spin_0.play",
                    relaunch: !0
                }, {
                    s: "spin_1",
                    e: "sound.spin_1.play",
                    relaunch: !0
                }, {
                    s: "spin_stop",
                    e: "sound.stop_click.play",
                    relaunch: !0
                }, {
                    s: "freespin_symbol_change",
                    e: "sound.expandingSelect.play"
                }, {
                    s: "freespin_symbol_selected",
                    e: "sound.expandingSelected.play"
                }, {
                    s: "freespin_popup_close",
                    e: "sound.popupClose.play"
                }, {
                    s: "freespin_symbol",
                    e: "sound.expandingWin.play"
                }, {
                    s: "freespin_symbol_landing",
                    e: "sound.landExpanding.play",
                    relaunch: !0
                }], this.bigWinSounds.push({
                    s: "big_win_start",
                    e: "win.big.show"
                }), this.counterSounds.push({
                    s: "counter_stop",
                    e: "win.brain.regular.counterComplete",
                    action: "play"
                }), this.intrigueSounds = [{
                    s: "intrigue_2",
                    e: "sound.intrigue_0.start",
                    action: "play"
                }, {
                    s: "intrigue_2",
                    e: "sound.intrigue_1.start",
                    action: "stop"
                }, {
                    s: "intrigue_3",
                    e: "sound.intrigue_1.start",
                    action: "play"
                }, {
                    s: "intrigue_3",
                    e: "sound.intrigue_2.start",
                    action: "stop"
                }, {
                    s: "intrigue_4",
                    e: "sound.intrigue_2.start",
                    action: "play"
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
                }], this.wheelsSpinSounds = function() {
                    e.soundExt.push({
                        s: "reel_spin_0",
                        e: "sound.reel_spin_0.play",
                        loop: !0
                    }, {
                        s: "reel_spin_0",
                        e: "slotMachine.spinComplete",
                        action: "stop"
                    }, {
                        s: "reel_spin_1",
                        e: "sound.reel_spin_1.play",
                        loop: !0
                    }, {
                        s: "reel_spin_1",
                        e: "slotMachine.spinComplete",
                        action: "stop"
                    })
                }, this.wheelSpin0Sounds = function() {
                    e.soundExt.push({
                        s: "reel_spin_0",
                        e: "slotMachine.reel_4.animation.stop",
                        action: "stop"
                    }), e.soundExt.push({
                        s: "reel_spin_0",
                        e: "Transport.close",
                        action: "stop"
                    }), e.soundExt.push({
                        s: "reel_spin_1",
                        e: "slotMachine.reel_4.animation.stop",
                        action: "stop"
                    }), e.soundExt.push({
                        s: "reel_spin_1",
                        e: "Transport.close",
                        action: "stop"
                    })
                }, this.onSpinReadyToProceed = function() {
                    nge.observer.fire("sound.volume", {
                        s: "bs_background",
                        volume: 1,
                        duration: 500
                    })
                }, e.soundExt.push({
                    s: "freespin_popup",
                    e: "sound.freespinStartPopup.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "flash_cells",
                    e: "sound.flash_cells.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "QCF_popup",
                    e: "popup.dividingReelsPopup.show",
                    action: "play"
                }), e.soundExt.push({
                    s: "QCF_popup",
                    e: "popup.spltiReelsPopup.show",
                    action: "play"
                }), e.soundExt.push({
                    s: "QCF_wild",
                    e: "sound.QCF_wild.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_0",
                    e: "sound.wild_bonus_0.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_1",
                    e: "sound.wild_bonus_1.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_2",
                    e: "sound.wild_bonus_2.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_3",
                    e: "sound.wild_bonus_3.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_4",
                    e: "sound.wild_bonus_4.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_5",
                    e: "sound.wild_bonus_5.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_6",
                    e: "sound.wild_bonus_6.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_7",
                    e: "sound.wild_bonus_7.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_8",
                    e: "sound.wild_bonus_8.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_bonus_9",
                    e: "sound.wild_bonus_8.play",
                    action: "play"
                }), e.soundExt.push({
                    s: "wild_increase_0",
                    e: "sound.wild_increase_0.play",
                    action: "play",
                    relaunch: !0
                }), e.soundExt.push({
                    s: "wild_increase_1",
                    e: "sound.wild_increase_1.play",
                    action: "play",
                    relaunch: !0
                }), e.soundExt.push({
                    s: "intrigue_flash",
                    e: "sound.intrigue_flash.play",
                    action: "play",
                    relaunch: !0
                }), e.soundExt.push({
                    s: "intro_sound",
                    e: "enable.spinButton.forFakeSpin",
                    loop: !0
                }), e.soundExt.push({
                    s: "intro_sound",
                    e: "intro_sound.stop.afterfakespin",
                    action: "stop"
                });
                var g = function() {
                        var t = nge.localData.get("freespin.inProgress"),
                            n = nge.Lib.Helper.getRandomInt(0, e.wheelSpinSoundCount - 1);
                        t && nge.observer.fire("slotMachine.reelsStartRandSound." + n)
                    },
                    b = function(s) {
                        return function() {
                            var a = nge.localData.get("slotMachine.spinResult.columns");
                            if (function(e, t) {
                                    if (nge.localData.get("freespin.inProgress")) {
                                        var n = nge.localData.get("freespin.expanding");
                                        e[t] && e[t][0] === n && nge.observer.fire("sound.landExpanding.play")
                                    }
                                }(a, s), a = a[s].some((function(t) {
                                    return -1 !== e.scatterSymbols.indexOf(t)
                                })), -1 < p.indexOf(s) && a && (i.push(s), 3 - i.length <= (52 - s) / 12 && (nge.observer.fire("sound.scatter_landing_" + t + ".play"), t++)), nge.localData.get("slotMachineIntrigue")) {
                                var o = nge.localData.get("slotMachineIntrigue");
                                a = o.status, o = o.startsFrom, c.indexOf(s), a && (o - 4 === s || 0 < n && -1 < p.indexOf(s)) && (nge.observer.fire("sound.intrigue_" + n + ".start"), n++)
                            }
                        }
                    },
                    y = function() {
                        o = !0, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, .5, 100)
                        }))
                    },
                    d = function() {
                        o && (o = !1, e.loopedSounds.forEach((function(t) {
                            e.fadeSound(t, 1, 100)
                        })))
                    },
                    f = function() {
                        o = !1
                    },
                    h = function() {
                        n = t = 0, i = [], a = s = u = 0, o && d()
                    };
                this.playReelStopSound = function(e) {
                    !nge.localData.get("fakeSpin") && -1 < m.indexOf(e / 4) && (0 == ++u % 3 && nge.observer.fire("sound.reels_stop_" + (u / 3 - 1) + ".play"))
                }, this._spinButtonPlayHandler = function() {
                    nge.observer.fire("sound.spin_" + l++ % 2 + ".play")
                }, this._spinStartHandler = function() {
                    nge.observer.fire("sound.reel_spin_" + r++ % 2 + ".play")
                };
                var _ = function() {
                        nge.observer.fire("sound.wild_bonus_" + s + ".play"), 9 >= s + 1 && s++
                    },
                    S = function() {
                        a = 1 < a ? 0 : a, nge.observer.fire("sound.wild_increase_" + a + ".play"), a++
                    };
                this.customSubscribe = function() {
                    e.super.customSubscribe(), nge.observer.add("slotMachine.spinStart", this._spinStartHandler, !1, !0), nge.observer.add("sound.spin_click.play", this._spinButtonPlayHandler, !1, !0), nge.observer.add("slotMachine.spinCommand", h, !1, !0), nge.observer.add("slotMachine.spinStart", g, !1, !0);
                    for (var t = 0; t < this.reelsCount; t++) nge.observer.add("slotMachine.reel_" + t + ".animation.stop", b(t), !1, !0);
                    nge.observer.add("sounds.win.regularWinLow", y, !1, !0), nge.observer.add("sounds.win.regularWinMid", y, !1, !0), nge.observer.add("sounds.win.regularWinHigh", y, !1, !0), nge.observer.add("sound.stopped.win_regularWinLow", d, !1, !0), nge.observer.add("sound.stopped.win_regularWinMid", d, !1, !0), nge.observer.add("sound.stopped.win_regularWinHigh", d, !1, !0), nge.observer.add("Transport.close", f, !1, !0), nge.observer.add("sound.fake.QCF_wild.play", _, !1, !0), nge.observer.add("dividingFakeSpinReels", S, !1, !0)
                }
            }))
        },
        1286: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.SpinButton = nge.App.DjGameBase.Mlm.Brain.SpinButton.extend((function() {
                this.spinButtonEnableEvents.push("enable.after.freespins"), this.spinButtonEnableEvents.push("enable.spinButton.forFakeSpin"), this.spinButtonDisableEvents.push("test34"), this.spinEnableBlockers.push((function() {
                    return nge.localData.get("slotmachine.cutreels")
                })), this.pressHandler = function(e, t) {
                    nge.localData.get("makefakeSpin") ? (nge.observer.fire("spinButton.makefakeSpin"), nge.localData.set("makefakeSpin", !1)) : this.super.pressHandler(e, t)
                }
            }))
        },
        1287: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.Win = nge.App.DjGameBase.Mlm.Brain.Win.extend((function() {
                var e = this;
                this.regularWinParams = {
                    low: 1.99,
                    mid: 4.99,
                    high: 10
                }, this._checkJackpot = function() {
                    var e = nge.localData.get("slotMachine.slotWin");
                    return !!(void 0 === e.lineWinAmounts ? [] : e.lineWinAmounts).filter((function(e) {
                        return "Bonus" === e.type && "FullFillJackpot" === e.bonusName
                    }))[0]
                }, this.showWinPopupHandler = function(e) {
                    var t = nge.Lib.Money.toCoins(e.totalWin);
                    if (0 === t) nge.observer.fire("win.hasBonusSymbolsButNoWin"), this.winAnimationCompleteHandler();
                    else {
                        var n = e.isBigWin ? "bigWin" : "regularWin";
                        nge.observer.fire("win." + n + ".startShow", {
                            isJackpot: !1,
                            totalWin: t,
                            data: e
                        }), this._processBgAnimation(n)
                    }
                }, this._processBgAnimation = function(e) {
                    "regularWin" === e && nge.observer.fire("background.winAnimation.start", {
                        type: nge.spine.LOOP
                    })
                }, this._abortWinHandler = function() {
                    nge.observer.fire("background.speedUpAnimation.start")
                }, this.subscribe = function() {
                    e.super.subscribe(), nge.observer.add("win.abortWin", e._abortWinHandler, !1, !0)
                }, this.bigWinShowHandler = function() {
                    nge.observer.fire("winlines.pauseAnimation", !1), nge.observer.fire("slotmachine.tint.dark", {
                        exceptions: null,
                        winMap: null
                    })
                }, this.bigWinCounterCompleteHandler = function() {}, this.spinStartHandler = function() {
                    nge.localData.get("dividingReels.inProgress") || this.super.spinStartHandler()
                }
            }))
        },
        1288: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic = {}
        },
        1289: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States = {}
        },
        1290: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SharedState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SharedState.extend((function() {}))
        },
        1291: function(e, t) {
            nge.App[nge.appNS].Mlm.Brain.ButtonsNewLogic.States.SpinState = nge.App.DjGameBase.Mlm.Brain.ButtonsNewLogic.States.SpinState.extend((function() {}))
        },
        1292: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport = {}
        },
        1293: function(e, t) {
            nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.ReelsImprovement = ["params.spinsLeft", "params.spinsTotal"], nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.FreeSpins.push("params.freeSpinsReelsImprovement"), nge.Mlm.Transport.Helper.bonusWinlinesFields.Bonus.FreeSpins.push("params.bonusSymbol")
        },
        1294: function(e, t) {
            nge.App[nge.appNS].Mlm.Transport.Models = {}
        },
        1295: function(e, t) {
            nge.Mlm.Transport.Models.DividingReelsRequest = nge.Mlm.Transport.Model.extend((function() {
                this.customConstructor = function(e) {
                    this.action = "DividingReelsRequest", this.result = nge.Lib.Helper.recursiveGet("result", e, !1), this.sesId = nge.Lib.Helper.recursiveGet("sesId", e, !1), this.data = {
                        lines: nge.Lib.Helper.recursiveGet("data.lines", e, !1),
                        bet: nge.Lib.Helper.recursiveGet("data.bet", e, !1),
                        coin: nge.Lib.Helper.recursiveGet("data.coin", e, !1),
                        extraBet: nge.Lib.Helper.recursiveGet("data.extraBet", e, 0)
                    }
                }
            }))
        },
        1296: function(e, t) {
            nge.Mlm.Transport.Models.DividingReelsResponse = nge.Mlm.Transport.Model.extend((function() {
                this.customConstructor = function(e) {
                    this.action = "DividingReelsResponse", this.result = nge.Lib.Helper.recursiveGet("result", e, !1), this.sesId = nge.Lib.Helper.recursiveGet("sesId", e, !1), this.data = {
                        state: nge.Lib.Helper.recursiveGet("data.state", e, !1),
                        freeSpinRemain: nge.Lib.Helper.recursiveGet("data.freeSpinRemain", e, !1),
                        freeSpinsTotal: nge.Lib.Helper.recursiveGet("data.freeSpinsTotal", e, !1),
                        totalBonusWin: nge.Lib.Helper.recursiveGet("data.totalBonusWin", e, !1)
                    };
                    var t, n = nge.Mlm.Transport.Helper.parseSpinResults(nge.Lib.Helper.recursiveGet("data", e, !1));
                    for (t in n) this.data[t] = n[t];
                    e = nge.Lib.Helper.recursiveGet("data.slotWin", e, !1), (e = nge.Mlm.Transport.Helper.parseSlotWin(e)) && (this.data.slotWin = e)
                }
            }))
        },
        5: function(e, t, n) {
            n(1182), n(1183), n(1184), n(1185), n(1186), n(1187), n(1188), n(1189), n(1190), n(1191), n(1192), n(1193), n(1194), n(1195), n(1196), n(1197), n(1198), n(1199), n(1200), n(1201), n(1202), n(1203), n(1204), n(1205), n(1206), n(1207), n(1208), n(1209), n(1210), n(1211), n(1212), n(1213), n(1214), n(1215), n(1216), n(1217), n(1218), n(1219), n(1220), n(1221), n(1222), n(1223), n(1224), n(1225), n(1226), n(1227), n(1228), n(1229), n(1230), n(1231), n(1232), n(1233), n(1234), n(1235), n(1236), n(1237), n(1238), n(1239), n(1240), n(1241), n(1242), n(1243), n(1244), n(1245), n(1246), n(1247), n(1248), n(1249), n(1250), n(1251), n(1252), n(1253), n(1254), n(1255), n(1256), n(1257), n(1258), n(1259), n(1260), n(1261), n(1262), n(1263), n(1264), n(1265), n(1266), n(1267), n(1268), n(1269), n(1270), n(1271), n(1272), n(1273), n(1274), n(1275), n(1276), n(1277), n(1278), n(1279), n(1280), n(1281), n(1282), n(1283), n(1284), n(1285), n(1286), n(1287), n(1288), n(1289), n(1290), n(1291), n(1292), n(1293), n(1294), n(1295), n(1296)
        }
    }
]);